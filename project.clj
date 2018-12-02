(defproject darkest-gods "0.1.0-SNAPSHOT"
  :dependencies [[com.bhauman/figwheel-main "0.1.9"]
                 [com.bhauman/rebel-readline-cljs "0.1.4"]
                 [reagent "0.7.0"]]
  :source-paths ["src"]
  ;; setup target as a resource path
  :resource-paths ["target" "resources"]
  ;; set up an alias to invoke your figwheel build
  :aliases {"fig" ["trampoline" "run" "-m" "figwheel.main"]
            "build-dev" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "build-prod" ["trampoline" "run" "-m" "figwheel.main" "-O" "advanced" "-bo" "dev"]})
