(ns darkest.gods
  (:require [reagent.core :as r]))

(defn god-text [state]
  [:span.god-name (:god-name state)])

(def minutes (* 1000 60))

;; Data

(def research
  {:revive {:name "Dark Revival"
            :fn #(-> %
                     (update :cultists inc)
                     (update :technologies dissoc :revive))
            :mana 2
            :expose
            [[:p "Revive a cultist. Can be researched again."]]}
   :portal {:name "Portal of Greed"
            :fn #(-> %
                     (update :money + 10)
                     (update :technologies dissoc :portal))
            :mana 1
            :expose
            [[:p "Gain $10. Can be researched again."]]}
   :chaos+ {:name "Ritual of Chaos"
            :fn #(-> %
                     (update :chaos inc)
                     (update :technologies dissoc :chaos+))
            :mana 1
            :expose
            [[:p "Increase chaos by 1. Can be researched again."]]}
   :chaos- {:name "Ritual of Stillness"
            :fn #(-> %
                     (update :chaos dec)
                     (update :technologies dissoc :chaos-))
            :mana 1
            :expose
            [[:p "Decrease chaos by 1. Can be researched again."]]}
   :pow {:name "Power of Death"
         :fn #(update % :mana-power inc)
         :mana 10
         :expose
         [[:p "Gain an extra mana when worshiping."]]}
   :bld {:name "Blood Magic"
         :fn #(update % :blood-power inc)
         :mana 10
         :expose
         [[:p "Gain an extra blood when sacrificing."]]}
   :wrk {:name "Safety Oversights"
         :fn #(update % :work-power + 0.1)
         :mana 10
         :expose
         [[:p "Ignore certain industrial best practices to increase income by $0.1/s per worker."]]}
   :pow2 {:name "Summon Eldritch Archmage"
          :fn #(update % :mana-power inc)
          :mana 100
          :expose
          [[:p "Gain an extra mana when worshiping."]]}
   :bld2 {:name "Antedilivian Blood Ritual"
          :fn #(update % :blood-power inc)
          :mana 100
          :expose
          [[:p "Gain an extra blood when sacrificing."]]}
   :wrk2 {:name "Proletariat Exploitation"
          :fn #(update % :work-power + 0.1)
          :mana 100
          :expose
          [[:p "Ignore certain industrial best practices to increase income by $0.1/s per worker."]]}
   :meal {:name "Meal Package"
          :fn #(assoc % :hunger 0)
          :mana 30
          :expose
          [[:p "Reset hunger to 0."]]}
   :eat {:name "Eat The Rich"
         :fn #(-> %
                  (update :blood-power + 2)
                  (update :recruit-power + 15))
         :mana 50
         :expose
         [[:p "Increase recruitment cost by 15, gain 2 extra blood per sacrifice."]]}
   :souls {:name "Feed on Souls"
           :fn #(-> %
                    (update :hunger-tick + 1000)
                    (update :hunger-pang 1000))
           :mana 50
           :expose
           [[:p "Your god gets hungry less often, and get get hungrier before imposing penalties."]]}
   :cult {:name "Cult of the Damned"
          :fn #(update % :cultists + 100)
          :mana 100
          :expose
          [[:p "Gain 100 cultists,"]]}
   :zom {:name "Restless Sleep"
         :fn #(assoc % :overtime-power 0.5)
         :mana 100
         :expose
         [[:p "Cultists make more money working overtime."]]}
   :blodcy {:name "Blood Cycle"
            :fn #(update % :blood + 10)
            :mana 100
            :expose
            [[:p "Gain 100 blood."]]}
   :cir {:name "Circus of Pain"
         :fn #(-> %
                  (assoc :hunger-tick 100)
                  (assoc :recruit-power 0))
         :mana 666
         :expose
         [[:p "Your god gets hungry at a drastically quicker pace, but you can recruit cultists for free."]]}})

(defn reduce-time-remaining [state]
  (-> state
      (update :portal-time #(if (< % minutes) 0 (- % minutes)))
      (update :events conj "The portal crumbles.")))

(defn kill-all-cultists [state]
  (let [cultists (:cultists state)]
   (if (> cultists 0)
      (-> (assoc state :cultists 0)
          (update :mana + cultists)
          (update :events conj "The entire cult is devoured."))
      (reduce-time-remaining state))))

(defn chaos-increases [state]
  (-> state
      (update :chaos + 25)
      (update :events conj [:div (god-text state) "'s hunger amplifies chaos."])))

(defn increase-sacrifice [state]
  (-> state
      (update :blood-needed + 100)
      (update :events conj [:div "The hunger weakens "(god-text state) "."])))

(def hunger-punishments
  [kill-all-cultists
   reduce-time-remaining
   chaos-increases
   increase-sacrifice])

(defn mana-event [state]
  (-> state
      (update :mana inc)
      (update :events conj [:div (god-text state) "'s mind syncs with the cult's, increasing its mana."])))

(defn money-increase-event [state]
  (let [money (* (:work-power state) (rand-int (:chaos state)))]
    (-> state
        (update :money + money)
        (update :events conj
                (str "Your cultists gut a rich family. The cult gains "
                     "$" (.toFixed money 2) ".")))))

(defn money-loss-event [state]
  (let [try-money (* (:work-power state) (rand-int (:chaos state)))
        money (if (< (:money state) try-money) (:money state) try-money)]
    (-> state
        (update :money - money)
        (update :events conj
                (str "The police raids one of your storehouses. The cult loses "
                     "$" (.toFixed money 2) ".")))))

(defn chaos-increase-event [state]
  (-> state
      (update :chaos inc)
      (update :events conj [:div "A ritual causes "(god-text state) " to stir, chaos increases."])))

(defn chaos-decrease-event [state]
  (-> state
      (update :chaos dec)
      (update :events conj [:div (god-text state) " calms down, chaos decreases."])))

(defn gurgle-event [state]
  (update state :events conj [:div (god-text state) " gurgles."]))

(defn hunger-event [state]
  (-> state
      (update :hunger inc)
      (update :events conj [:div (god-text state) " grows hungry."])))

(defn cultist-event [state]
  (-> state
      (update :cultists inc)
      (update :events conj [:div "Glory to " (god-text state) "! The cult swells."])))

(defn sacrifice-event [state]
  (if (> (:cultists state) 0)
    (-> (update state :cultists dec)
        (update :blood inc)
        (update :events conj [:div "A cultist is found dead at the altar."]))
    state))

(def random-events
  [money-loss-event money-loss-event
   sacrifice-event sacrifice-event
   hunger-event hunger-event
   chaos-increase-event chaos-increase-event

   gurgle-event gurgle-event

   chaos-decrease-event
   mana-event
   money-increase-event
   cultist-event cultist-event cultist-event])

(def init-state
  {:route :title
   :events (list "The cult has begun!")
   :blood-power 1
   :hunger-power 1
   :recruit-power 25
   :work-power 0.1
   :mana-power 1
   :action :default
   :portal-time (* 10 minutes)
   :hunger 0
   :overtime-power 10
   :hunger-time 0
   :chaos-time 0
   :income-time 0
   :descriptions
   {:time
    [[:p
      "The number of seconds remaining until the portal closes. The portal closes if this reaches zero!"]]
    :money
    [[:p "Used to recruit cultists."]
     [:p "Gained by using cultists to work. The more cultists you employ, the more money you make."]]
    :chaos [[:p "Increases the frequency of random events."]]
    :cultists
    [[:p "Townspeople brainwashed by a strange concoction. Help you run the cult."]
     [:p "Increase your income by $" :work-power "/s."]]
    :mana
    [[:p "Used to research magic artifacts."]
     [:p "Gained by spending blood to worship."]]}
   :technologies {}
   :tick-effects []})

(def difficulties
  {:easy {:blood-needed 1;00
          :cultists 10
          :money 100
          :mana 0
          :blood 0
          :hunger-pang 100
          :chaos 0
          :hunger-tick 3000}
   :medium {:blood-needed 500
            :cultists 5
            :money 80.00
            :mana 0
            :blood 0
            :hunger-pang 100
            :chaos 125
            :hunger-tick 2000}
   :hard {:blood-needed 1000
          :cultists 1
          :money 40.00
          :mana 0
          :chaos 200
          :blood 0
          :hunger-pang 100
          :hunger-tick 1000}})

(def letters
  ["a" "a" "a" "a" "b" "c" "d"
   "e" "e" "e" "e" "f" "g" "g"
   "h" "i" "i" "i" "i" "j" "k" "l" "m" "n"
   "o" "o" "o" "o" "p" "q" "q" "r" "s" "t"
   "u" "u" "u" "u"
   "v" "v" "w" "x" "x" "y" "z" "z"
   "'" "'" "-" "-"])

;; State

(defonce state-atom (r/atom init-state))

(defn dispatch! [f & args] (apply swap! state-atom f args))

(defn new-god-name! []
  (apply
   str (.toUpperCase (rand-nth letters))
   (take (rand-int 12) (repeatedly #(rand-nth letters)))))

(defn set-difficulty! [difficulty]
  (fn []
    (dispatch!
     (fn [state]
       (let [god-name (new-god-name!)
             god (god-text {:god-name god-name})]
        (-> state
             (merge state (get difficulties difficulty))
             (assoc
              :route :intro
              :god-name god-name)
             (assoc-in
              [:descriptions :blood]
              [[:p
                "Used to summon " god "! "
                "Be sure to make regular offerings to "
                "avoid its wrath."]
               [:p
                "Gained by sacrificing cultists."]])
             (assoc-in
              [:descriptions :hunger]
              [[:p god "'s hunger. If this value goes over " :hunger-pang " it will punish your cult!"]
               [:p "This value is reduced by worshiping."]
               [:p "This values increases every " :hunger-tick "s."]])
             (assoc-in
              [:descriptions :blood-needed]
              [[:p "The amount of blood needed to ressurect " god "."]
               [:p "This value is reduced by worshiping."]])))))))

(defn expose! [k]
  (fn []
   (dispatch!
    (fn [state]
      (assoc state :hover k)))))

(defn money-for-work [state]
  (+ 1 (* (:cultists state) (:work-power state))))

(defn money-for-overtime [state]
  (/ (money-for-work state) (:overtime-power state)))

(defn capitalism-sux [state]
  (if (> (+ (rand-int 10000) (* (:chaos state) (rand))) 10000)
    (-> state
        (update :cultists dec)
        (update :events conj "One of your cultists worked themselves to death."))
    state))

(defn overtime! []
  (dispatch!
   (fn [state]
     (-> state
         (update :money + (money-for-overtime state))
         (capitalism-sux)))))

(defn sacrifice! []
  (dispatch!
   (fn [state]
     (if (> (:cultists state) 0)
       (-> (update state :cultists dec)
           (update :blood inc))
       (update state :events conj "Not enough cultists!")))))

(defn recruit! []
  (dispatch!
   (fn [state]
     (if (>= (:money state) (:recruit-power state))
       (-> (update state :cultists inc)
           (update :money - (:recruit-power state)))
       (update state :events conj "Not enough money!")))))

(defn win-condition [state]
  (let [blood-needed (:blood-needed state)]
    (if (zero? blood-needed)
      (assoc state :route :win)
      state)))

(defn worship! []
  (dispatch!
   (fn [state]
     (if (> (:blood state) 0)
       (-> (update state :blood - (:hunger-power state))
           (update :blood-needed dec)
           (update :hunger #(if (zero? %) 0 (dec %)))
           (update :mana inc)
           (win-condition))
       (update state :events conj "Not enough blood!")))))

(defn research-menu! []
  (dispatch!
   (fn [state]
    (assoc state :research true))))

(defn research! [k]
  (fn []
   (dispatch!
    (fn [state]
      (let [mana-needed (-> research k :mana)
            f (-> research k :fn)]
        (-> state
            (update :mana - mana-needed)
            (update :technologies assoc k (get research k))
            (f)))))))

(defn back-to-actions! []
  (dispatch!
   (fn [state]
    (assoc state :research false))))

(defn restart! []
  (dispatch!
   (fn [state]
     init-state)))

(defn portal-time [state]
  (let [portal-time (:portal-time state)]
    (if (zero? portal-time)
      (assoc state :route :game-over)
      (update state :portal-time - 100))))

(defn handle-hunger [state]
  (if (= (:hunger-pang state) (:hunger state))
    (-> ((rand-nth hunger-punishments) state)
        (assoc :hunger 0))
    state))

(defn hunger-time [state]
  (let [hunger-time (:hunger-time state)]
    (if (= (:hunger-tick state) hunger-time)
      (-> state
          (update :hunger inc)
          (assoc :hunger-time 0)
          (handle-hunger))
      (update state :hunger-time + 100))))

(defn income [state]
  (if (= 10 (:income-time state))
    (-> state
        (update :money + (money-for-work state))
        (assoc :income-time 0))
    (update state :income-time inc)))

(defn random-event [state]
  (if (< 500 (+ (:chaos state) (:chaos-time state) (rand-int 250)))
    (-> ((rand-nth random-events) state)
        (assoc :chaos-time 0))
    (update state :chaos-time inc)))

(defn game-loop [state]
  (-> state
      (portal-time)
      (hunger-time)
      (income)
      (random-event)))

(defn game-loop! []
  (js/setTimeout
   (fn []
     (let [state @state-atom]
       (when (= :main (:route state))
         (swap! state-atom game-loop)
         (game-loop!))))
   100))

(defn start-game! []
  (dispatch!
   (fn [state]
     (assoc state :route :main)))
  (game-loop!))

;; Components

(defn exposition [& args]
  (into [:div.exposition] args))

(defn menu [prompt props & buttons]
  (into
   [:div.menu props
    [:div.prompt prompt]]
   buttons))

(defn button [f text]
  [:div.button {:on-click f} text])

(defn reveal-button [f visible-text reveal-text]
  [:div.button {:on-click f}
   [:div.visible visible-text]
   [:div.reveal reveal-text]])

(defmulti expose-describe (fn [text state] text))
(defmethod expose-describe :default [text state]
  (get state text))
(defmethod expose-describe :hunger-tick [text state]
  (.toFixed (/ (get state text) 1000) 2))

(defmulti find-explanation
  (fn [state]
    (let [exp (:hover state)]
     (if (keyword? exp) :simple (first exp)))))
(defmethod find-explanation :simple [state]
  (get-in state [:descriptions (:hover state)]))
(defmethod find-explanation :magic [state]
  (conj
   (get-in research [(second (:hover state)) :expose])
   [:p "Cost: "(get-in research [(second (:hover state)) :mana]) " Mana"]))
(defmethod find-explanation nil [state] nil)

(defn expose [state]
  [exposition
   (if-let [descriptions (find-explanation state)]
     (into
      [:div]
      (map
       (fn [description]
         (into [(first description)]
               (map (fn [text]
                      (if (keyword? text) (expose-describe text state) text)))
               (rest description)))
       descriptions))
     "Hover over something to get an explanation.")])

(defn actions [state]
  [menu "Actions" {}
   [reveal-button overtime!
    "Work Overtime"
    (str "Gain $" (.toFixed (money-for-overtime state) 2))]
   [reveal-button
    sacrifice!
    "Sacrifice"
    (str "Gain " (:blood-power state) " Blood for 1 Cultist")]
   [reveal-button
    recruit!
    "Recruit"
    (str "Recruit Cultist for $"
         (.toFixed (:recruit-power state) 2))]
   [reveal-button
    worship!
    "Worship"
    (str "Reduce Hunger by " (:hunger-power state))]
   [reveal-button
    research-menu!
    "Research"
    "Exchange Mana for Artifacts"]])

(defn events [state]
  [menu "Events" {:class "events"}
   [exposition
    (into [:div.scroll] (map #(vector :p %)) (:events state))]])

(defn game-state [state]
  (let [god (god-text state)]
   [menu god {:class "game"}
     [:table.simple
      [:tbody
       [:tr  {:on-mouse-over (expose! :hunger)
              :on-mouse-leave (expose! nil)}
        [:td "Hunger"]
        [:td (:hunger state)]]
       [:tr {:on-mouse-over (expose! :blood-needed)
             :on-mouse-leave (expose! nil)}
        [:td "Sacrifice Needed"]
        [:td (:blood-needed state)]]
       [:tr {:on-mouse-over (expose! :time)
             :on-mouse-leave (expose! nil)}
        [:td "Time Remaining"]
        [:td (.toFixed (/ (:portal-time state) 1000) 0) "s"]]
       [:tr {:on-mouse-over (expose! :chaos)
             :on-mouse-leave (expose! nil)}
        [:td "Chaos"]
        [:td (:chaos state)]]]]]))

(defn resources [state]
  [menu "Resources" {:class "resources"}
   [:table.simple
    [:tbody
     [:tr {:on-mouse-over (expose! :cultists)
           :on-mouse-leave (expose! nil)}
      [:td "Cultists"]
      [:td (:cultists state)]]
     [:tr {:on-mouse-over (expose! :money)
           :on-mouse-leave (expose! nil)}
      [:td  "Money"]
      [:td (str "$"(.toFixed (:money state) 2))]]
     [:tr {:on-mouse-over (expose! :mana)
           :on-mouse-leave (expose! nil)}
      [:td "Mana"]
      [:td (:mana state)]]
     [:tr {:on-mouse-over (expose! :blood)
           :on-mouse-leave (expose! nil)}
      [:td "Blood"]
      [:td (:blood state)]]]]])

(defn describe [state]
  [menu "Describe" {:class "expose"}
   [expose state]])

;; Scenes

(defmulti render-route :route)

(defmethod render-route :title [state]
  (let [easy-f (set-difficulty! :easy)
        med-f (set-difficulty! :medium)
        hard-f (set-difficulty! :hard)]
   [:div
     [:h1 "Darkest Gods"]
    [menu "New Game" {:class "small"}
     [reveal-button easy-f "Encroaching Apocalypse" "Easy"]
     [reveal-button med-f "World on the Precipice" "Medium"]
     [reveal-button hard-f "A Hopeful Existance" "Hard"]]
    [:div.credits
     "December 2018 Ludum Dare. "
     [:a {:href "https://github.com/MysteryMachine/darkest-gods" :target "_none"}
      "Source Code."]]]))

(defmethod render-route :intro [state]
  (let [god (god-text state)]
    [menu "Your Goal" {:class "full"}
     [exposition
      [:p "You are the high priest of " god [:span ", a dark "]
       "ancient being who has controlled your mind since "
       "a chance encounter with a greatest celestial being "
       "corrupted it."]
      [:p "A tear in the fabric of space-time heralds the "
       "arrival of " god ". It is time to build a cult in "
       "order to increase the power of " god " and wedge "
       "the portal open."]
      [:p "You only have a limited time. Make haste! "
       "For the glory of " god "!"]]
     [button start-game! "Make Haste!"]]))

(defmethod render-route :win [state]
  [menu "An Era of Darkness" {:class "full"}
   [exposition
    [:h1 (:god-name state) " arrives."]]
   [exposition
    [:p "Humanity is instantly erradicated. You, in fact, do not have a moment to consider "
     "the horror of the situation as your body is instantly consumed by the dark abyss of wriggling, "
     "searing tentacles."]
    [:p "You win."]]
   [button restart! "Back to Start"]])

(defn research-menu [state]
  [:div.main-column
   (into
    [menu "Research" {}
     [button back-to-actions! "Back"]]
    (map
     (fn [[k {:keys [name]}]]
       (let [researched (get (:technologies state) k)
             tech (get research k)
             mana-cost (get tech :mana)
             can-afford (>= (:mana state)
                            mana-cost)]
        [:div.button
          {:on-mouse-over (expose! [:magic k])
           :on-mouse-leave (expose! nil)
           :on-click (when can-afford (research! k))
           :class (cond
                    researched "researched"
                    (not can-afford) "cantafford")}
         (-> research k :name)
         [:span " ("
          (if researched
            [:span.researched-text "Researched"]
            (str mana-cost " Mana"))
          ")"]])))
    (sort-by (comp :mana second) research))])

(defmethod render-route :main [state]
  [:div.main
   (if (:research state)
     [research-menu state]
     [:div.main-column
      [actions state]
      [events state]])
   [:div.main-column
    [game-state state]
    [resources state]
    [describe state]]])

(defmethod render-route :game-over [state]
  (let [god (god-text state)]
    [menu "Defeat" {:class "full"}
     [exposition
      [:p "The dark portal collapses after enough time elapsed. You can feel "
       "the dark powers of " god " leave this world. You and your cult stare "
       "at the sacrificial pit, slowly coming to your senses as the dark forces "
       "seep out of your mind. Slowly, you make your way back to the village, "
       "where you try your best to forget."]
      [:p "Of course, you never do."]]
     [button restart! "Try Again"]]))

(defn render [state-atom]
  (let [state @state-atom]
   [:div
    [render-route state]]))

(r/render
 [render state-atom]
 (.getElementById js/document "app"))
