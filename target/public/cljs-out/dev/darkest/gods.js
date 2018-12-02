// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('darkest.gods');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
darkest.gods.god_text = (function darkest$gods$god_text(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$god_DASH_name,cljs.core.cst$kw$god_DASH_name.cljs$core$IFn$_invoke$arity$1(state)], null);
});
darkest.gods.minutes = ((1000) * (60));
darkest.gods.research = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$cir,cljs.core.cst$kw$chaos_PLUS_,cljs.core.cst$kw$meal,cljs.core.cst$kw$wrk2,cljs.core.cst$kw$bld,cljs.core.cst$kw$revive,cljs.core.cst$kw$portal,cljs.core.cst$kw$pow,cljs.core.cst$kw$blodcy,cljs.core.cst$kw$zom,cljs.core.cst$kw$wrk,cljs.core.cst$kw$pow2,cljs.core.cst$kw$bld2,cljs.core.cst$kw$eat,cljs.core.cst$kw$cult,cljs.core.cst$kw$chaos_DASH_,cljs.core.cst$kw$souls],[new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"Circus of Pain",cljs.core.cst$kw$fn,(function (p1__10350_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__10350_SHARP_,cljs.core.cst$kw$hunger_DASH_tick,(100)),cljs.core.cst$kw$recruit_DASH_power,(0));
}),cljs.core.cst$kw$mana,(666),cljs.core.cst$kw$expose,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Your god gets hungry at a drastically quicker pace, but you can recruit cultists for free."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"Ritual of Chaos",cljs.core.cst$kw$fn,(function (p1__10336_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__10336_SHARP_,cljs.core.cst$kw$chaos,cljs.core.inc),cljs.core.cst$kw$technologies,cljs.core.dissoc,cljs.core.cst$kw$chaos_PLUS_);
}),cljs.core.cst$kw$mana,(1),cljs.core.cst$kw$expose,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Increase chaos by 1. Can be researched again."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"Meal Package",cljs.core.cst$kw$fn,(function (p1__10344_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__10344_SHARP_,cljs.core.cst$kw$hunger,(0));
}),cljs.core.cst$kw$mana,(30),cljs.core.cst$kw$expose,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Reset hunger to 0."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"Proletariat Exploitation",cljs.core.cst$kw$fn,(function (p1__10343_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__10343_SHARP_,cljs.core.cst$kw$work_DASH_power,cljs.core._PLUS_,0.1);
}),cljs.core.cst$kw$mana,(100),cljs.core.cst$kw$expose,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Ignore certain industrial best practices to increase income by $0.1/s per worker."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"Blood Magic",cljs.core.cst$kw$fn,(function (p1__10339_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__10339_SHARP_,cljs.core.cst$kw$blood_DASH_power,cljs.core.inc);
}),cljs.core.cst$kw$mana,(10),cljs.core.cst$kw$expose,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Gain an extra blood when sacrificing."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"Dark Revival",cljs.core.cst$kw$fn,(function (p1__10334_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__10334_SHARP_,cljs.core.cst$kw$cultists,cljs.core.inc),cljs.core.cst$kw$technologies,cljs.core.dissoc,cljs.core.cst$kw$revive);
}),cljs.core.cst$kw$mana,(2),cljs.core.cst$kw$expose,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Revive a cultist. Can be researched again."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"Portal of Greed",cljs.core.cst$kw$fn,(function (p1__10335_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__10335_SHARP_,cljs.core.cst$kw$money,cljs.core._PLUS_,(10)),cljs.core.cst$kw$technologies,cljs.core.dissoc,cljs.core.cst$kw$portal);
}),cljs.core.cst$kw$mana,(1),cljs.core.cst$kw$expose,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Gain $10. Can be researched again."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"Power of Death",cljs.core.cst$kw$fn,(function (p1__10338_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__10338_SHARP_,cljs.core.cst$kw$mana_DASH_power,cljs.core.inc);
}),cljs.core.cst$kw$mana,(10),cljs.core.cst$kw$expose,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Gain an extra mana when worshiping."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"Blood Cycle",cljs.core.cst$kw$fn,(function (p1__10349_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__10349_SHARP_,cljs.core.cst$kw$blood,cljs.core._PLUS_,(10));
}),cljs.core.cst$kw$mana,(100),cljs.core.cst$kw$expose,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Gain 100 blood."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"Restless Sleep",cljs.core.cst$kw$fn,(function (p1__10348_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__10348_SHARP_,cljs.core.cst$kw$overtime_DASH_power,0.5);
}),cljs.core.cst$kw$mana,(100),cljs.core.cst$kw$expose,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Cultists make more money working overtime."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"Safety Oversights",cljs.core.cst$kw$fn,(function (p1__10340_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__10340_SHARP_,cljs.core.cst$kw$work_DASH_power,cljs.core._PLUS_,0.1);
}),cljs.core.cst$kw$mana,(10),cljs.core.cst$kw$expose,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Ignore certain industrial best practices to increase income by $0.1/s per worker."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"Summon Eldritch Archmage",cljs.core.cst$kw$fn,(function (p1__10341_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__10341_SHARP_,cljs.core.cst$kw$mana_DASH_power,cljs.core.inc);
}),cljs.core.cst$kw$mana,(100),cljs.core.cst$kw$expose,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Gain an extra mana when worshiping."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"Antedilivian Blood Ritual",cljs.core.cst$kw$fn,(function (p1__10342_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__10342_SHARP_,cljs.core.cst$kw$blood_DASH_power,cljs.core.inc);
}),cljs.core.cst$kw$mana,(100),cljs.core.cst$kw$expose,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Gain an extra blood when sacrificing."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"Eat The Rich",cljs.core.cst$kw$fn,(function (p1__10345_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__10345_SHARP_,cljs.core.cst$kw$blood_DASH_power,cljs.core._PLUS_,(2)),cljs.core.cst$kw$recruit_DASH_power,cljs.core._PLUS_,(15));
}),cljs.core.cst$kw$mana,(50),cljs.core.cst$kw$expose,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Increase recruitment cost by 15, gain 2 extra blood per sacrifice."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"Cult of the Damned",cljs.core.cst$kw$fn,(function (p1__10347_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__10347_SHARP_,cljs.core.cst$kw$cultists,cljs.core._PLUS_,(100));
}),cljs.core.cst$kw$mana,(100),cljs.core.cst$kw$expose,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Gain 100 cultists,"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"Ritual of Stillness",cljs.core.cst$kw$fn,(function (p1__10337_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__10337_SHARP_,cljs.core.cst$kw$chaos,cljs.core.dec),cljs.core.cst$kw$technologies,cljs.core.dissoc,cljs.core.cst$kw$chaos_DASH_);
}),cljs.core.cst$kw$mana,(1),cljs.core.cst$kw$expose,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Decrease chaos by 1. Can be researched again."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"Feed on Souls",cljs.core.cst$kw$fn,(function (p1__10346_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__10346_SHARP_,cljs.core.cst$kw$hunger_DASH_tick,cljs.core._PLUS_,(1000)),cljs.core.cst$kw$hunger_DASH_pang,(1000));
}),cljs.core.cst$kw$mana,(50),cljs.core.cst$kw$expose,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Your god gets hungry less often, and get get hungrier before imposing penalties."], null)], null)], null)]);
darkest.gods.reduce_time_remaining = (function darkest$gods$reduce_time_remaining(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$portal_DASH_time,(function (p1__10351_SHARP_){
if((p1__10351_SHARP_ < darkest.gods.minutes)){
return (0);
} else {
return (p1__10351_SHARP_ - darkest.gods.minutes);
}
})),cljs.core.cst$kw$events,cljs.core.conj,"The portal crumbles.");
});
darkest.gods.kill_all_cultists = (function darkest$gods$kill_all_cultists(state){
var cultists = cljs.core.cst$kw$cultists.cljs$core$IFn$_invoke$arity$1(state);
if((cultists > (0))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$cultists,(0)),cljs.core.cst$kw$mana,cljs.core._PLUS_,cultists),cljs.core.cst$kw$events,cljs.core.conj,"The entire cult is devoured.");
} else {
return darkest.gods.reduce_time_remaining(state);
}
});
darkest.gods.chaos_increases = (function darkest$gods$chaos_increases(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$chaos,cljs.core._PLUS_,(25)),cljs.core.cst$kw$events,cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,darkest.gods.god_text(state),"'s hunger amplifies chaos."], null));
});
darkest.gods.increase_sacrifice = (function darkest$gods$increase_sacrifice(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$blood_DASH_needed,cljs.core._PLUS_,(100)),cljs.core.cst$kw$events,cljs.core.conj,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"The hunger weakens ",darkest.gods.god_text(state),"."], null));
});
darkest.gods.hunger_punishments = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.kill_all_cultists,darkest.gods.reduce_time_remaining,darkest.gods.chaos_increases,darkest.gods.increase_sacrifice], null);
darkest.gods.mana_event = (function darkest$gods$mana_event(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$mana,cljs.core.inc),cljs.core.cst$kw$events,cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,darkest.gods.god_text(state),"'s mind syncs with the cult's, increasing its mana."], null));
});
darkest.gods.money_increase_event = (function darkest$gods$money_increase_event(state){
var money = (cljs.core.cst$kw$work_DASH_power.cljs$core$IFn$_invoke$arity$1(state) * cljs.core.rand_int(cljs.core.cst$kw$chaos.cljs$core$IFn$_invoke$arity$1(state)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$money,cljs.core._PLUS_,money),cljs.core.cst$kw$events,cljs.core.conj,["Your cultists gut a rich family. The cult gains ","$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(money.toFixed((2))),"."].join(''));
});
darkest.gods.money_loss_event = (function darkest$gods$money_loss_event(state){
var try_money = (cljs.core.cst$kw$work_DASH_power.cljs$core$IFn$_invoke$arity$1(state) * cljs.core.rand_int(cljs.core.cst$kw$chaos.cljs$core$IFn$_invoke$arity$1(state)));
var money = (((cljs.core.cst$kw$money.cljs$core$IFn$_invoke$arity$1(state) < try_money))?cljs.core.cst$kw$money.cljs$core$IFn$_invoke$arity$1(state):try_money);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$money,cljs.core._,money),cljs.core.cst$kw$events,cljs.core.conj,["The police raids one of your storehouses. The cult loses ","$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(money.toFixed((2))),"."].join(''));
});
darkest.gods.chaos_increase_event = (function darkest$gods$chaos_increase_event(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$chaos,cljs.core.inc),cljs.core.cst$kw$events,cljs.core.conj,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"A ritual causes ",darkest.gods.god_text(state)," to stir, chaos increases."], null));
});
darkest.gods.chaos_decrease_event = (function darkest$gods$chaos_decrease_event(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$chaos,cljs.core.dec),cljs.core.cst$kw$events,cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,darkest.gods.god_text(state)," calms down, chaos decreases."], null));
});
darkest.gods.gurgle_event = (function darkest$gods$gurgle_event(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$events,cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,darkest.gods.god_text(state)," gurgles."], null));
});
darkest.gods.hunger_event = (function darkest$gods$hunger_event(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$hunger,cljs.core.inc),cljs.core.cst$kw$events,cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,darkest.gods.god_text(state)," grows hungry."], null));
});
darkest.gods.cultist_event = (function darkest$gods$cultist_event(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$cultists,cljs.core.inc),cljs.core.cst$kw$events,cljs.core.conj,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Glory to ",darkest.gods.god_text(state),"! The cult swells."], null));
});
darkest.gods.sacrifice_event = (function darkest$gods$sacrifice_event(state){
if((cljs.core.cst$kw$cultists.cljs$core$IFn$_invoke$arity$1(state) > (0))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$cultists,cljs.core.dec),cljs.core.cst$kw$blood,cljs.core.inc),cljs.core.cst$kw$events,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"A cultist is found dead at the altar."], null));
} else {
return state;
}
});
darkest.gods.random_events = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.money_loss_event,darkest.gods.money_loss_event,darkest.gods.sacrifice_event,darkest.gods.sacrifice_event,darkest.gods.hunger_event,darkest.gods.hunger_event,darkest.gods.chaos_increase_event,darkest.gods.chaos_increase_event,darkest.gods.gurgle_event,darkest.gods.gurgle_event,darkest.gods.chaos_decrease_event,darkest.gods.mana_event,darkest.gods.money_increase_event,darkest.gods.cultist_event,darkest.gods.cultist_event,darkest.gods.cultist_event], null);
darkest.gods.init_state = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$tick_DASH_effects,cljs.core.cst$kw$recruit_DASH_power,cljs.core.cst$kw$overtime_DASH_power,cljs.core.cst$kw$events,cljs.core.cst$kw$work_DASH_power,cljs.core.cst$kw$hunger_DASH_time,cljs.core.cst$kw$chaos_DASH_time,cljs.core.cst$kw$route,cljs.core.cst$kw$portal_DASH_time,cljs.core.cst$kw$mana_DASH_power,cljs.core.cst$kw$hunger_DASH_power,cljs.core.cst$kw$blood_DASH_power,cljs.core.cst$kw$action,cljs.core.cst$kw$income_DASH_time,cljs.core.cst$kw$descriptions,cljs.core.cst$kw$hunger,cljs.core.cst$kw$technologies],[cljs.core.PersistentVector.EMPTY,(25),(10),(new cljs.core.List(null,"The cult has begun!",null,(1),null)),0.1,(0),(0),cljs.core.cst$kw$title,((10) * darkest.gods.minutes),(1),(1),(1),cljs.core.cst$kw$default,(0),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$time,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The number of seconds remaining until the portal closes. The portal closes if this reaches zero!"], null)], null),cljs.core.cst$kw$money,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Used to recruit cultists."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Gained by using cultists to work. The more cultists you employ, the more money you make."], null)], null),cljs.core.cst$kw$chaos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Increases the frequency of random events."], null)], null),cljs.core.cst$kw$cultists,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Townspeople brainwashed by a strange concoction. Help you run the cult."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Increase your income by $",cljs.core.cst$kw$work_DASH_power,"/s."], null)], null),cljs.core.cst$kw$mana,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Used to research magic artifacts."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Gained by spending blood to worship."], null)], null)], null),(0),cljs.core.PersistentArrayMap.EMPTY]);
darkest.gods.difficulties = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$easy,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$blood_DASH_needed,(100),cljs.core.cst$kw$cultists,(10),cljs.core.cst$kw$money,(100),cljs.core.cst$kw$mana,(0),cljs.core.cst$kw$blood,(0),cljs.core.cst$kw$hunger_DASH_pang,(100),cljs.core.cst$kw$chaos,(0),cljs.core.cst$kw$hunger_DASH_tick,(3000)], null),cljs.core.cst$kw$medium,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$blood_DASH_needed,(500),cljs.core.cst$kw$cultists,(5),cljs.core.cst$kw$money,80.0,cljs.core.cst$kw$mana,(0),cljs.core.cst$kw$blood,(0),cljs.core.cst$kw$hunger_DASH_pang,(100),cljs.core.cst$kw$chaos,(125),cljs.core.cst$kw$hunger_DASH_tick,(2000)], null),cljs.core.cst$kw$hard,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$blood_DASH_needed,(1000),cljs.core.cst$kw$cultists,(1),cljs.core.cst$kw$money,40.0,cljs.core.cst$kw$mana,(0),cljs.core.cst$kw$chaos,(200),cljs.core.cst$kw$blood,(0),cljs.core.cst$kw$hunger_DASH_pang,(100),cljs.core.cst$kw$hunger_DASH_tick,(1000)], null)], null);
darkest.gods.letters = cljs.core.PersistentVector.fromArray(["a","a","a","a","b","c","d","e","e","e","e","f","g","g","h","i","i","i","i","j","k","l","m","n","o","o","o","o","p","q","q","r","s","t","u","u","u","u","v","v","w","x","x","y","z","z","'","'","-","-"], true);
if((typeof darkest !== 'undefined') && (typeof darkest.gods !== 'undefined') && (typeof darkest.gods.state_atom !== 'undefined')){
} else {
darkest.gods.state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(darkest.gods.init_state);
}
darkest.gods.dispatch_BANG_ = (function darkest$gods$dispatch_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10354 = arguments.length;
var i__4532__auto___10355 = (0);
while(true){
if((i__4532__auto___10355 < len__4531__auto___10354)){
args__4534__auto__.push((arguments[i__4532__auto___10355]));

var G__10356 = (i__4532__auto___10355 + (1));
i__4532__auto___10355 = G__10356;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return darkest.gods.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

darkest.gods.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,darkest.gods.state_atom,f,args);
});

darkest.gods.dispatch_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
darkest.gods.dispatch_BANG_.cljs$lang$applyTo = (function (seq10352){
var G__10353 = cljs.core.first(seq10352);
var seq10352__$1 = cljs.core.next(seq10352);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10353,seq10352__$1);
});

darkest.gods.new_god_name_BANG_ = (function darkest$gods$new_god_name_BANG_(){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,cljs.core.rand_nth(darkest.gods.letters).toUpperCase(),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.rand_int((12)),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.rand_nth(darkest.gods.letters);
}))));
});
darkest.gods.set_difficulty_BANG_ = (function darkest$gods$set_difficulty_BANG_(difficulty){
return (function (){
return darkest.gods.dispatch_BANG_((function (state){
var god_name = darkest.gods.new_god_name_BANG_();
var god = darkest.gods.god_text(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$god_DASH_name,god_name], null));
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,state,cljs.core.get.cljs$core$IFn$_invoke$arity$2(darkest.gods.difficulties,difficulty)], 0)),cljs.core.cst$kw$route,cljs.core.cst$kw$intro,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$god_DASH_name,god_name], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$descriptions,cljs.core.cst$kw$blood], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Used to summon ",god,"! ","Be sure to make regular offerings to ","avoid its wrath."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Gained by sacrificing cultists."], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$descriptions,cljs.core.cst$kw$hunger], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,god,"'s hunger. If this value goes over ",cljs.core.cst$kw$hunger_DASH_pang," it will punish your cult!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"This value is reduced by worshiping."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"This values increases every ",cljs.core.cst$kw$hunger_DASH_tick,"s."], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$descriptions,cljs.core.cst$kw$blood_DASH_needed], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The amount of blood needed to ressurect ",god,"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"This value is reduced by worshiping."], null)], null));
}));
});
});
darkest.gods.expose_BANG_ = (function darkest$gods$expose_BANG_(k){
return (function (){
return darkest.gods.dispatch_BANG_((function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$hover,k);
}));
});
});
darkest.gods.money_for_work = (function darkest$gods$money_for_work(state){
return ((1) + (cljs.core.cst$kw$cultists.cljs$core$IFn$_invoke$arity$1(state) * cljs.core.cst$kw$work_DASH_power.cljs$core$IFn$_invoke$arity$1(state)));
});
darkest.gods.money_for_overtime = (function darkest$gods$money_for_overtime(state){
return (darkest.gods.money_for_work(state) / cljs.core.cst$kw$overtime_DASH_power.cljs$core$IFn$_invoke$arity$1(state));
});
darkest.gods.capitalism_sux = (function darkest$gods$capitalism_sux(state){
if(((cljs.core.rand_int((100000)) + (cljs.core.cst$kw$chaos.cljs$core$IFn$_invoke$arity$1(state) * cljs.core.rand.cljs$core$IFn$_invoke$arity$0())) > (100000))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$cultists,cljs.core.dec),cljs.core.cst$kw$events,cljs.core.conj,"One of your cultists worked themselves to death.");
} else {
return state;
}
});
darkest.gods.overtime_BANG_ = (function darkest$gods$overtime_BANG_(){
return darkest.gods.dispatch_BANG_((function (state){
return darkest.gods.capitalism_sux(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$money,cljs.core._PLUS_,darkest.gods.money_for_overtime(state)));
}));
});
darkest.gods.sacrifice_BANG_ = (function darkest$gods$sacrifice_BANG_(){
return darkest.gods.dispatch_BANG_((function (state){
if((cljs.core.cst$kw$cultists.cljs$core$IFn$_invoke$arity$1(state) > (0))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$cultists,cljs.core.dec),cljs.core.cst$kw$blood,cljs.core.inc);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$events,cljs.core.conj,"Not enough cultists!");
}
}));
});
darkest.gods.recruit_BANG_ = (function darkest$gods$recruit_BANG_(){
return darkest.gods.dispatch_BANG_((function (state){
if((cljs.core.cst$kw$money.cljs$core$IFn$_invoke$arity$1(state) >= cljs.core.cst$kw$recruit_DASH_power.cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$cultists,cljs.core.inc),cljs.core.cst$kw$money,cljs.core._,cljs.core.cst$kw$recruit_DASH_power.cljs$core$IFn$_invoke$arity$1(state));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$events,cljs.core.conj,"Not enough money!");
}
}));
});
darkest.gods.win_condition = (function darkest$gods$win_condition(state){
var blood_needed = cljs.core.cst$kw$blood_DASH_needed.cljs$core$IFn$_invoke$arity$1(state);
if((blood_needed === (0))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$route,cljs.core.cst$kw$win);
} else {
return state;
}
});
darkest.gods.worship_BANG_ = (function darkest$gods$worship_BANG_(){
return darkest.gods.dispatch_BANG_((function (state){
if((cljs.core.cst$kw$blood.cljs$core$IFn$_invoke$arity$1(state) > (0))){
return darkest.gods.win_condition(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$blood,cljs.core._,cljs.core.cst$kw$hunger_DASH_power.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.cst$kw$blood_DASH_needed,cljs.core.dec),cljs.core.cst$kw$hunger,(function (p1__10357_SHARP_){
if((p1__10357_SHARP_ === (0))){
return (0);
} else {
return (p1__10357_SHARP_ - (1));
}
})),cljs.core.cst$kw$mana,cljs.core.inc));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$events,cljs.core.conj,"Not enough blood!");
}
}));
});
darkest.gods.research_menu_BANG_ = (function darkest$gods$research_menu_BANG_(){
return darkest.gods.dispatch_BANG_((function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$research,true);
}));
});
darkest.gods.research_BANG_ = (function darkest$gods$research_BANG_(k){
return (function (){
return darkest.gods.dispatch_BANG_((function (state){
var mana_needed = cljs.core.cst$kw$mana.cljs$core$IFn$_invoke$arity$1((k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(darkest.gods.research) : k.call(null,darkest.gods.research)));
var f = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1((k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(darkest.gods.research) : k.call(null,darkest.gods.research)));
var G__10358 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$mana,cljs.core._,mana_needed),cljs.core.cst$kw$technologies,cljs.core.assoc,k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(darkest.gods.research,k));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10358) : f.call(null,G__10358));
}));
});
});
darkest.gods.back_to_actions_BANG_ = (function darkest$gods$back_to_actions_BANG_(){
return darkest.gods.dispatch_BANG_((function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$research,false);
}));
});
darkest.gods.restart_BANG_ = (function darkest$gods$restart_BANG_(){
return darkest.gods.dispatch_BANG_((function (state){
return darkest.gods.init_state;
}));
});
darkest.gods.portal_time = (function darkest$gods$portal_time(state){
var portal_time = cljs.core.cst$kw$portal_DASH_time.cljs$core$IFn$_invoke$arity$1(state);
if((portal_time === (0))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$route,cljs.core.cst$kw$game_DASH_over);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$portal_DASH_time,cljs.core._,(100));
}
});
darkest.gods.handle_hunger = (function darkest$gods$handle_hunger(state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hunger_DASH_pang.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$hunger.cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var fexpr__10359 = cljs.core.rand_nth(darkest.gods.hunger_punishments);
return (fexpr__10359.cljs$core$IFn$_invoke$arity$1 ? fexpr__10359.cljs$core$IFn$_invoke$arity$1(state) : fexpr__10359.call(null,state));
})(),cljs.core.cst$kw$hunger,(0));
} else {
return state;
}
});
darkest.gods.hunger_time = (function darkest$gods$hunger_time(state){
var hunger_time = cljs.core.cst$kw$hunger_DASH_time.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hunger_DASH_tick.cljs$core$IFn$_invoke$arity$1(state),hunger_time)){
return darkest.gods.handle_hunger(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$hunger,cljs.core.inc),cljs.core.cst$kw$hunger_DASH_time,(0)));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$hunger_DASH_time,cljs.core._PLUS_,(100));
}
});
darkest.gods.income = (function darkest$gods$income(state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((10),cljs.core.cst$kw$income_DASH_time.cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$money,cljs.core._PLUS_,darkest.gods.money_for_work(state)),cljs.core.cst$kw$income_DASH_time,(0));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$income_DASH_time,cljs.core.inc);
}
});
darkest.gods.random_event = (function darkest$gods$random_event(state){
if(((500) < ((cljs.core.cst$kw$chaos.cljs$core$IFn$_invoke$arity$1(state) + cljs.core.cst$kw$chaos_DASH_time.cljs$core$IFn$_invoke$arity$1(state)) + cljs.core.rand_int((250))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var fexpr__10360 = cljs.core.rand_nth(darkest.gods.random_events);
return (fexpr__10360.cljs$core$IFn$_invoke$arity$1 ? fexpr__10360.cljs$core$IFn$_invoke$arity$1(state) : fexpr__10360.call(null,state));
})(),cljs.core.cst$kw$chaos_DASH_time,(0));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$chaos_DASH_time,cljs.core.inc);
}
});
darkest.gods.game_loop = (function darkest$gods$game_loop(state){
return darkest.gods.random_event(darkest.gods.income(darkest.gods.hunger_time(darkest.gods.portal_time(state))));
});
darkest.gods.game_loop_BANG_ = (function darkest$gods$game_loop_BANG_(){
return setTimeout((function (){
var state = cljs.core.deref(darkest.gods.state_atom);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$main,cljs.core.cst$kw$route.cljs$core$IFn$_invoke$arity$1(state))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(darkest.gods.state_atom,darkest.gods.game_loop);

return (darkest.gods.game_loop_BANG_.cljs$core$IFn$_invoke$arity$0 ? darkest.gods.game_loop_BANG_.cljs$core$IFn$_invoke$arity$0() : darkest.gods.game_loop_BANG_.call(null));
} else {
return null;
}
}),(100));
});
darkest.gods.start_game_BANG_ = (function darkest$gods$start_game_BANG_(){
darkest.gods.dispatch_BANG_((function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$route,cljs.core.cst$kw$main);
}));

return darkest.gods.game_loop_BANG_();
});
darkest.gods.exposition = (function darkest$gods$exposition(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10362 = arguments.length;
var i__4532__auto___10363 = (0);
while(true){
if((i__4532__auto___10363 < len__4531__auto___10362)){
args__4534__auto__.push((arguments[i__4532__auto___10363]));

var G__10364 = (i__4532__auto___10363 + (1));
i__4532__auto___10363 = G__10364;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return darkest.gods.exposition.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

darkest.gods.exposition.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$exposition], null),args);
});

darkest.gods.exposition.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
darkest.gods.exposition.cljs$lang$applyTo = (function (seq10361){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10361));
});

darkest.gods.menu = (function darkest$gods$menu(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10368 = arguments.length;
var i__4532__auto___10369 = (0);
while(true){
if((i__4532__auto___10369 < len__4531__auto___10368)){
args__4534__auto__.push((arguments[i__4532__auto___10369]));

var G__10370 = (i__4532__auto___10369 + (1));
i__4532__auto___10369 = G__10370;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return darkest.gods.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

darkest.gods.menu.cljs$core$IFn$_invoke$arity$variadic = (function (prompt,props,buttons){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$menu,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$prompt,prompt], null)], null),buttons);
});

darkest.gods.menu.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
darkest.gods.menu.cljs$lang$applyTo = (function (seq10365){
var G__10366 = cljs.core.first(seq10365);
var seq10365__$1 = cljs.core.next(seq10365);
var G__10367 = cljs.core.first(seq10365__$1);
var seq10365__$2 = cljs.core.next(seq10365__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10366,G__10367,seq10365__$2);
});

darkest.gods.button = (function darkest$gods$button(f,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,f], null),text], null);
});
darkest.gods.reveal_button = (function darkest$gods$reveal_button(f,visible_text,reveal_text){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$visible,visible_text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$reveal,reveal_text], null)], null);
});
if((typeof darkest !== 'undefined') && (typeof darkest.gods !== 'undefined') && (typeof darkest.gods.expose_describe !== 'undefined')){
} else {
darkest.gods.expose_describe = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("darkest.gods","expose-describe"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (text,state){
return text;
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,cljs.core.cst$kw$default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
darkest.gods.expose_describe.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (text,state){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,text);
}));
darkest.gods.expose_describe.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hunger_DASH_tick,(function (text,state){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,text) / (1000)).toFixed((2));
}));
if((typeof darkest !== 'undefined') && (typeof darkest.gods !== 'undefined') && (typeof darkest.gods.find_explanation !== 'undefined')){
} else {
darkest.gods.find_explanation = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("darkest.gods","find-explanation"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (state){
var exp = cljs.core.cst$kw$hover.cljs$core$IFn$_invoke$arity$1(state);
if((exp instanceof cljs.core.Keyword)){
return cljs.core.cst$kw$simple;
} else {
return cljs.core.first(exp);
}
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,cljs.core.cst$kw$default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
darkest.gods.find_explanation.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$simple,(function (state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$descriptions,cljs.core.cst$kw$hover.cljs$core$IFn$_invoke$arity$1(state)], null));
}));
darkest.gods.find_explanation.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$magic,(function (state){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(darkest.gods.research,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(cljs.core.cst$kw$hover.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.cst$kw$expose], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Cost: ",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(darkest.gods.research,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(cljs.core.cst$kw$hover.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.cst$kw$mana], null))," Mana"], null));
}));
darkest.gods.find_explanation.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (state){
return null;
}));
darkest.gods.expose = (function darkest$gods$expose(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.exposition,(function (){var temp__5455__auto__ = (darkest.gods.find_explanation.cljs$core$IFn$_invoke$arity$1 ? darkest.gods.find_explanation.cljs$core$IFn$_invoke$arity$1(state) : darkest.gods.find_explanation.call(null,state));
if(cljs.core.truth_(temp__5455__auto__)){
var descriptions = temp__5455__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (descriptions,temp__5455__auto__){
return (function (description){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(description)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (descriptions,temp__5455__auto__){
return (function (text){
if((text instanceof cljs.core.Keyword)){
return (darkest.gods.expose_describe.cljs$core$IFn$_invoke$arity$2 ? darkest.gods.expose_describe.cljs$core$IFn$_invoke$arity$2(text,state) : darkest.gods.expose_describe.call(null,text,state));
} else {
return text;
}
});})(descriptions,temp__5455__auto__))
),cljs.core.rest(description));
});})(descriptions,temp__5455__auto__))
,descriptions));
} else {
return "Hover over something to get an explanation.";
}
})()], null);
});
darkest.gods.actions = (function darkest$gods$actions(state){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.menu,"Actions",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.reveal_button,darkest.gods.overtime_BANG_,"Work Overtime",["Gain $",cljs.core.str.cljs$core$IFn$_invoke$arity$1(darkest.gods.money_for_overtime(state).toFixed((2)))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.reveal_button,darkest.gods.sacrifice_BANG_,"Sacrifice",["Gain ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$blood_DASH_power.cljs$core$IFn$_invoke$arity$1(state))," Blood for 1 Cultist"].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.reveal_button,darkest.gods.recruit_BANG_,"Recruit",["Recruit Cultist for $",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$recruit_DASH_power.cljs$core$IFn$_invoke$arity$1(state).toFixed((2)))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.reveal_button,darkest.gods.worship_BANG_,"Worship",["Reduce Hunger by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hunger_DASH_power.cljs$core$IFn$_invoke$arity$1(state))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.reveal_button,darkest.gods.research_menu_BANG_,"Research","Exchange Mana for Artifacts"], null)], null);
});
darkest.gods.events = (function darkest$gods$events(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.menu,"Events",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"events"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.exposition,cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$scroll], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__10371_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p,p1__10371_SHARP_],null));
})),cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(state))], null)], null);
});
darkest.gods.game_state = (function darkest$gods$game_state(state){
var god = darkest.gods.god_text(state);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.menu,god,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$simple,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,darkest.gods.expose_BANG_(cljs.core.cst$kw$hunger),cljs.core.cst$kw$on_DASH_mouse_DASH_leave,darkest.gods.expose_BANG_(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"Hunger"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$hunger.cljs$core$IFn$_invoke$arity$1(state)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,darkest.gods.expose_BANG_(cljs.core.cst$kw$blood_DASH_needed),cljs.core.cst$kw$on_DASH_mouse_DASH_leave,darkest.gods.expose_BANG_(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"Sacrifice Needed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$blood_DASH_needed.cljs$core$IFn$_invoke$arity$1(state)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,darkest.gods.expose_BANG_(cljs.core.cst$kw$time),cljs.core.cst$kw$on_DASH_mouse_DASH_leave,darkest.gods.expose_BANG_(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"Time Remaining"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,(cljs.core.cst$kw$portal_DASH_time.cljs$core$IFn$_invoke$arity$1(state) / (1000)).toFixed((0)),"s"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,darkest.gods.expose_BANG_(cljs.core.cst$kw$chaos),cljs.core.cst$kw$on_DASH_mouse_DASH_leave,darkest.gods.expose_BANG_(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"Chaos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$chaos.cljs$core$IFn$_invoke$arity$1(state)], null)], null)], null)], null)], null);
});
darkest.gods.resources = (function darkest$gods$resources(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.menu,"Resources",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"resources"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$simple,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,darkest.gods.expose_BANG_(cljs.core.cst$kw$cultists),cljs.core.cst$kw$on_DASH_mouse_DASH_leave,darkest.gods.expose_BANG_(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"Cultists"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$cultists.cljs$core$IFn$_invoke$arity$1(state)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,darkest.gods.expose_BANG_(cljs.core.cst$kw$money),cljs.core.cst$kw$on_DASH_mouse_DASH_leave,darkest.gods.expose_BANG_(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"Money"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$money.cljs$core$IFn$_invoke$arity$1(state).toFixed((2)))].join('')], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,darkest.gods.expose_BANG_(cljs.core.cst$kw$mana),cljs.core.cst$kw$on_DASH_mouse_DASH_leave,darkest.gods.expose_BANG_(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"Mana"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$mana.cljs$core$IFn$_invoke$arity$1(state)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,darkest.gods.expose_BANG_(cljs.core.cst$kw$blood),cljs.core.cst$kw$on_DASH_mouse_DASH_leave,darkest.gods.expose_BANG_(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"Blood"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$blood.cljs$core$IFn$_invoke$arity$1(state)], null)], null)], null)], null)], null);
});
darkest.gods.describe = (function darkest$gods$describe(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.menu,"Describe",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"expose"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.expose,state], null)], null);
});
if((typeof darkest !== 'undefined') && (typeof darkest.gods !== 'undefined') && (typeof darkest.gods.render_route !== 'undefined')){
} else {
darkest.gods.render_route = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("darkest.gods","render-route"),cljs.core.cst$kw$route,cljs.core.cst$kw$default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
darkest.gods.render_route.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$title,(function (state){
var easy_f = darkest.gods.set_difficulty_BANG_(cljs.core.cst$kw$easy);
var med_f = darkest.gods.set_difficulty_BANG_(cljs.core.cst$kw$medium);
var hard_f = darkest.gods.set_difficulty_BANG_(cljs.core.cst$kw$hard);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Darkest Gods"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.menu,"New Game",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"small"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.reveal_button,easy_f,"Encroaching Apocalypse","Easy"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.reveal_button,med_f,"World on the Precipice","Medium"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.reveal_button,hard_f,"A Hopeful Existance","Hard"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$credits,"December 2018 Ludum Dare. ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://github.com/MysteryMachine/darkest-gods",cljs.core.cst$kw$target,"_none"], null),"Source Code."], null)], null)], null);
}));
darkest.gods.render_route.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$intro,(function (state){
var god = darkest.gods.god_text(state);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.menu,"Your Goal",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"full"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.exposition,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"You are the high priest of ",god,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,", a dark "], null),"ancient being who has controlled your mind since ","a chance encounter with a greatest celestial being ","corrupted it."], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"A tear in the fabric of space-time heralds the ","arrival of ",god,". It is time to build a cult in ","order to increase the power of ",god," and wedge ","the portal open."], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"You only have a limited time. Make haste! ","For the glory of ",god,"!"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.button,darkest.gods.start_game_BANG_,"Make Haste!"], null)], null);
}));
darkest.gods.render_route.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$win,(function (state){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.menu,"An Era of Darkness",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"full"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.exposition,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,cljs.core.cst$kw$god_DASH_name.cljs$core$IFn$_invoke$arity$1(state)," arrives."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.exposition,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Humanity is instantly erradicated. You, in fact, do not have a moment to consider ","the horror of the situation as your body is instantly consumed by the dark abyss of wriggling, ","searing tentacles."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"You win."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.button,darkest.gods.restart_BANG_,"Back to Start"], null)], null);
}));
darkest.gods.research_menu = (function darkest$gods$research_menu(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$main_DASH_column,cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.menu,"Research",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.button,darkest.gods.back_to_actions_BANG_,"Back"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__10372){
var vec__10373 = p__10372;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10373,(0),null);
var map__10376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10373,(1),null);
var map__10376__$1 = ((((!((map__10376 == null)))?(((((map__10376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10376):map__10376);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10376__$1,cljs.core.cst$kw$name);
var researched = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$technologies.cljs$core$IFn$_invoke$arity$1(state),k);
var tech = cljs.core.get.cljs$core$IFn$_invoke$arity$2(darkest.gods.research,k);
var mana_cost = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tech,cljs.core.cst$kw$mana);
var can_afford = (cljs.core.cst$kw$mana.cljs$core$IFn$_invoke$arity$1(state) >= mana_cost);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,darkest.gods.expose_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$magic,k], null)),cljs.core.cst$kw$on_DASH_mouse_DASH_leave,darkest.gods.expose_BANG_(null),cljs.core.cst$kw$on_DASH_click,((can_afford)?darkest.gods.research_BANG_(k):null),cljs.core.cst$kw$class,(cljs.core.truth_(researched)?"researched":((!(can_afford))?"cantafford":null))], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1((k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(darkest.gods.research) : k.call(null,darkest.gods.research))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," (",(cljs.core.truth_(researched)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$researched_DASH_text,"Researched"], null):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mana_cost)," Mana"].join('')),")"], null)], null);
})),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mana,cljs.core.second),darkest.gods.research))], null);
});
darkest.gods.render_route.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$main,(function (state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$main,(cljs.core.truth_(cljs.core.cst$kw$research.cljs$core$IFn$_invoke$arity$1(state))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.research_menu,state], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$main_DASH_column,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.actions,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.events,state], null)], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$main_DASH_column,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.game_state,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.resources,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.describe,state], null)], null)], null);
}));
darkest.gods.render_route.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$game_DASH_over,(function (state){
var god = darkest.gods.god_text(state);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.menu,"Defeat",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"full"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.exposition,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The dark portal collapses after enough time elapsed. You can feel ","the dark powers of ",god," leave this world. You and your cult stare ","at the sacrificial pit, slowly coming to your senses as the dark forces ","seep out of your mind. Slowly, you make your way back to the village, ","where you try your best to forget."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Of course, you never do."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.button,darkest.gods.restart_BANG_,"Try Again"], null)], null);
}));
darkest.gods.render = (function darkest$gods$render(state_atom){
var state = cljs.core.deref(state_atom);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.render_route,state], null)], null);
});
reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.render,darkest.gods.state_atom], null),document.getElementById("app"));
