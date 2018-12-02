// Compiled by ClojureScript 1.10.339 {}
goog.provide('darkest.gods');
goog.require('cljs.core');
goog.require('reagent.core');
darkest.gods.god_text = (function darkest$gods$god_text(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.god-name","span.god-name",-1657185906),new cljs.core.Keyword(null,"god-name","god-name",839249687).cljs$core$IFn$_invoke$arity$1(state)], null);
});
darkest.gods.minutes = ((1000) * (60));
darkest.gods.research = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"cir","cir",909816800),new cljs.core.Keyword(null,"chaos+","chaos+",-580851614),new cljs.core.Keyword(null,"meal","meal",-121971613),new cljs.core.Keyword(null,"wrk2","wrk2",176042211),new cljs.core.Keyword(null,"bld","bld",1785177667),new cljs.core.Keyword(null,"revive","revive",1375685380),new cljs.core.Keyword(null,"portal","portal",2002989957),new cljs.core.Keyword(null,"pow","pow",-1444004567),new cljs.core.Keyword(null,"blodcy","blodcy",-1316534836),new cljs.core.Keyword(null,"zom","zom",-1901885456),new cljs.core.Keyword(null,"wrk","wrk",-596282220),new cljs.core.Keyword(null,"pow2","pow2",-2090471628),new cljs.core.Keyword(null,"bld2","bld2",1759920565),new cljs.core.Keyword(null,"eat","eat",1686757401),new cljs.core.Keyword(null,"cult","cult",1493194331),new cljs.core.Keyword(null,"chaos-","chaos-",-1761441604),new cljs.core.Keyword(null,"souls","souls",1264897215)],[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Circus of Pain",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__20575_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__20575_SHARP_,new cljs.core.Keyword(null,"hunger-tick","hunger-tick",-255338540),(100)),new cljs.core.Keyword(null,"recruit-power","recruit-power",-773169757),(0));
}),new cljs.core.Keyword(null,"mana","mana",-263736085),(666),new cljs.core.Keyword(null,"expose","expose",-708121927),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Your god gets hungry at a drastically quicker pace, but you can recruit cultists for free."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Ritual of Chaos",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__20561_SHARP_){
return cljs.core.update.call(null,cljs.core.update.call(null,p1__20561_SHARP_,new cljs.core.Keyword(null,"chaos","chaos",1423564506),cljs.core._PLUS_,(10)),new cljs.core.Keyword(null,"technologies","technologies",2141321343),cljs.core.dissoc,new cljs.core.Keyword(null,"chaos+","chaos+",-580851614));
}),new cljs.core.Keyword(null,"mana","mana",-263736085),(1),new cljs.core.Keyword(null,"expose","expose",-708121927),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Increase chaos by 10. Can be researched again."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Meal Package",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__20569_SHARP_){
return cljs.core.assoc.call(null,p1__20569_SHARP_,new cljs.core.Keyword(null,"hunger","hunger",-1187183907),(0));
}),new cljs.core.Keyword(null,"mana","mana",-263736085),(30),new cljs.core.Keyword(null,"expose","expose",-708121927),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Reset hunger to 0."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Proletariat Exploitation",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__20568_SHARP_){
return cljs.core.update.call(null,p1__20568_SHARP_,new cljs.core.Keyword(null,"work-power","work-power",-800579476),cljs.core._PLUS_,0.1);
}),new cljs.core.Keyword(null,"mana","mana",-263736085),(100),new cljs.core.Keyword(null,"expose","expose",-708121927),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Ignore certain industrial best practices to increase income by $0.1/s per worker."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Blood Magic",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__20564_SHARP_){
return cljs.core.update.call(null,p1__20564_SHARP_,new cljs.core.Keyword(null,"blood-power","blood-power",32529656),cljs.core.inc);
}),new cljs.core.Keyword(null,"mana","mana",-263736085),(10),new cljs.core.Keyword(null,"expose","expose",-708121927),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Gain an extra blood when sacrificing."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Dark Revival",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__20559_SHARP_){
return cljs.core.update.call(null,cljs.core.update.call(null,p1__20559_SHARP_,new cljs.core.Keyword(null,"cultists","cultists",859064695),cljs.core.inc),new cljs.core.Keyword(null,"technologies","technologies",2141321343),cljs.core.dissoc,new cljs.core.Keyword(null,"revive","revive",1375685380));
}),new cljs.core.Keyword(null,"mana","mana",-263736085),(2),new cljs.core.Keyword(null,"expose","expose",-708121927),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Revive a cultist. Can be researched again."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Portal of Greed",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__20560_SHARP_){
return cljs.core.update.call(null,cljs.core.update.call(null,p1__20560_SHARP_,new cljs.core.Keyword(null,"money","money",250333921),cljs.core._PLUS_,(10)),new cljs.core.Keyword(null,"technologies","technologies",2141321343),cljs.core.dissoc,new cljs.core.Keyword(null,"portal","portal",2002989957));
}),new cljs.core.Keyword(null,"mana","mana",-263736085),(1),new cljs.core.Keyword(null,"expose","expose",-708121927),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Gain $10. Can be researched again."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Power of Death",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__20563_SHARP_){
return cljs.core.update.call(null,p1__20563_SHARP_,new cljs.core.Keyword(null,"mana-power","mana-power",-636457804),cljs.core.inc);
}),new cljs.core.Keyword(null,"mana","mana",-263736085),(10),new cljs.core.Keyword(null,"expose","expose",-708121927),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Gain an extra mana when worshiping."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Blood Cycle",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__20574_SHARP_){
return cljs.core.update.call(null,p1__20574_SHARP_,new cljs.core.Keyword(null,"blood","blood",-2090150277),cljs.core._PLUS_,(10));
}),new cljs.core.Keyword(null,"mana","mana",-263736085),(100),new cljs.core.Keyword(null,"expose","expose",-708121927),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Gain 100 blood."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Restless Sleep",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__20573_SHARP_){
return cljs.core.assoc.call(null,p1__20573_SHARP_,new cljs.core.Keyword(null,"overtime-power","overtime-power",1455870212),0.5);
}),new cljs.core.Keyword(null,"mana","mana",-263736085),(100),new cljs.core.Keyword(null,"expose","expose",-708121927),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Cultists make more money working overtime."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Safety Oversights",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__20565_SHARP_){
return cljs.core.update.call(null,p1__20565_SHARP_,new cljs.core.Keyword(null,"work-power","work-power",-800579476),cljs.core._PLUS_,0.1);
}),new cljs.core.Keyword(null,"mana","mana",-263736085),(10),new cljs.core.Keyword(null,"expose","expose",-708121927),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Ignore certain industrial best practices to increase income by $0.1/s per worker."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Summon Eldritch Archmage",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__20566_SHARP_){
return cljs.core.update.call(null,p1__20566_SHARP_,new cljs.core.Keyword(null,"mana-power","mana-power",-636457804),cljs.core.inc);
}),new cljs.core.Keyword(null,"mana","mana",-263736085),(100),new cljs.core.Keyword(null,"expose","expose",-708121927),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Gain an extra mana when worshiping."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Antedilivian Blood Ritual",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__20567_SHARP_){
return cljs.core.update.call(null,p1__20567_SHARP_,new cljs.core.Keyword(null,"blood-power","blood-power",32529656),cljs.core.inc);
}),new cljs.core.Keyword(null,"mana","mana",-263736085),(100),new cljs.core.Keyword(null,"expose","expose",-708121927),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Gain an extra blood when sacrificing."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Eat The Rich",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__20570_SHARP_){
return cljs.core.update.call(null,cljs.core.update.call(null,p1__20570_SHARP_,new cljs.core.Keyword(null,"blood-power","blood-power",32529656),cljs.core._PLUS_,(2)),new cljs.core.Keyword(null,"recruit-power","recruit-power",-773169757),cljs.core._PLUS_,(15));
}),new cljs.core.Keyword(null,"mana","mana",-263736085),(50),new cljs.core.Keyword(null,"expose","expose",-708121927),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Increase recruitment cost by 15, gain 2 extra blood per sacrifice."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Cult of the Damned",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__20572_SHARP_){
return cljs.core.update.call(null,p1__20572_SHARP_,new cljs.core.Keyword(null,"cultists","cultists",859064695),cljs.core._PLUS_,(100));
}),new cljs.core.Keyword(null,"mana","mana",-263736085),(100),new cljs.core.Keyword(null,"expose","expose",-708121927),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Gain 100 cultists,"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Ritual of Stillness",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__20562_SHARP_){
return cljs.core.update.call(null,cljs.core.update.call(null,p1__20562_SHARP_,new cljs.core.Keyword(null,"chaos","chaos",1423564506),cljs.core._,(10)),new cljs.core.Keyword(null,"technologies","technologies",2141321343),cljs.core.dissoc,new cljs.core.Keyword(null,"chaos-","chaos-",-1761441604));
}),new cljs.core.Keyword(null,"mana","mana",-263736085),(1),new cljs.core.Keyword(null,"expose","expose",-708121927),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Decrease chaos by 10. Can be researched again."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Feed on Souls",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__20571_SHARP_){
return cljs.core.update.call(null,cljs.core.update.call(null,p1__20571_SHARP_,new cljs.core.Keyword(null,"hunger-tick","hunger-tick",-255338540),cljs.core._PLUS_,(1000)),new cljs.core.Keyword(null,"hunger-pang","hunger-pang",-115180008),(1000));
}),new cljs.core.Keyword(null,"mana","mana",-263736085),(50),new cljs.core.Keyword(null,"expose","expose",-708121927),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Your god gets hungry less often, and get get hungrier before imposing penalties."], null)], null)], null)]);
darkest.gods.reduce_time_remaining = (function darkest$gods$reduce_time_remaining(state){
return cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"portal-time","portal-time",1689637713),(function (p1__20576_SHARP_){
if((p1__20576_SHARP_ < darkest.gods.minutes)){
return (0);
} else {
return (p1__20576_SHARP_ - darkest.gods.minutes);
}
})),new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.conj,"The portal crumbles.");
});
darkest.gods.kill_all_cultists = (function darkest$gods$kill_all_cultists(state){
var cultists = new cljs.core.Keyword(null,"cultists","cultists",859064695).cljs$core$IFn$_invoke$arity$1(state);
if((cultists > (0))){
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"cultists","cultists",859064695),(0)),new cljs.core.Keyword(null,"mana","mana",-263736085),cljs.core._PLUS_,cultists),new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.conj,"The entire cult is devoured.");
} else {
return darkest.gods.reduce_time_remaining.call(null,state);
}
});
darkest.gods.chaos_increases = (function darkest$gods$chaos_increases(state){
return cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"chaos","chaos",1423564506),cljs.core._PLUS_,(25)),new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),darkest.gods.god_text.call(null,state),"'s hunger amplifies chaos."], null));
});
darkest.gods.increase_sacrifice = (function darkest$gods$increase_sacrifice(state){
return cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"blood-needed","blood-needed",-1587302842),cljs.core._PLUS_,(100)),new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.conj,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"The hunger weakens ",darkest.gods.god_text.call(null,state),"."], null));
});
darkest.gods.hunger_punishments = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.kill_all_cultists,darkest.gods.reduce_time_remaining,darkest.gods.chaos_increases,darkest.gods.increase_sacrifice], null);
darkest.gods.mana_event = (function darkest$gods$mana_event(state){
return cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"mana","mana",-263736085),cljs.core.inc),new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),darkest.gods.god_text.call(null,state),"'s mind syncs with the cult's, increasing its mana."], null));
});
darkest.gods.money_increase_event = (function darkest$gods$money_increase_event(state){
var money = (new cljs.core.Keyword(null,"work-power","work-power",-800579476).cljs$core$IFn$_invoke$arity$1(state) * cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"chaos","chaos",1423564506).cljs$core$IFn$_invoke$arity$1(state)));
return cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"money","money",250333921),cljs.core._PLUS_,money),new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.conj,["Your cultists gut a rich family. The cult gains ","$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(money.toFixed((2))),"."].join(''));
});
darkest.gods.money_loss_event = (function darkest$gods$money_loss_event(state){
var try_money = (new cljs.core.Keyword(null,"work-power","work-power",-800579476).cljs$core$IFn$_invoke$arity$1(state) * cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"chaos","chaos",1423564506).cljs$core$IFn$_invoke$arity$1(state)));
var money = (((new cljs.core.Keyword(null,"money","money",250333921).cljs$core$IFn$_invoke$arity$1(state) < try_money))?new cljs.core.Keyword(null,"money","money",250333921).cljs$core$IFn$_invoke$arity$1(state):try_money);
return cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"money","money",250333921),cljs.core._,money),new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.conj,["The police raids one of your storehouses. The cult loses ","$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(money.toFixed((2))),"."].join(''));
});
darkest.gods.chaos_increase_event = (function darkest$gods$chaos_increase_event(state){
return cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"chaos","chaos",1423564506),cljs.core.inc),new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.conj,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"A ritual causes ",darkest.gods.god_text.call(null,state)," to stir, chaos increases."], null));
});
darkest.gods.chaos_decrease_event = (function darkest$gods$chaos_decrease_event(state){
return cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"chaos","chaos",1423564506),cljs.core.dec),new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),darkest.gods.god_text.call(null,state)," calms down, chaos decreases."], null));
});
darkest.gods.gurgle_event = (function darkest$gods$gurgle_event(state){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),darkest.gods.god_text.call(null,state)," gurgles."], null));
});
darkest.gods.hunger_event = (function darkest$gods$hunger_event(state){
return cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"hunger","hunger",-1187183907),cljs.core.inc),new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),darkest.gods.god_text.call(null,state)," grows hungry."], null));
});
darkest.gods.cultist_event = (function darkest$gods$cultist_event(state){
return cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"cultists","cultists",859064695),cljs.core.inc),new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.conj,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Glory to ",darkest.gods.god_text.call(null,state),"! The cult swells."], null));
});
darkest.gods.sacrifice_event = (function darkest$gods$sacrifice_event(state){
if((new cljs.core.Keyword(null,"cultists","cultists",859064695).cljs$core$IFn$_invoke$arity$1(state) > (0))){
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"cultists","cultists",859064695),cljs.core.dec),new cljs.core.Keyword(null,"blood","blood",-2090150277),cljs.core.inc),new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"A cultist is found dead at the altar."], null));
} else {
return state;
}
});
darkest.gods.random_events = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.money_loss_event,darkest.gods.money_loss_event,darkest.gods.sacrifice_event,darkest.gods.sacrifice_event,darkest.gods.hunger_event,darkest.gods.hunger_event,darkest.gods.chaos_increase_event,darkest.gods.chaos_increase_event,darkest.gods.gurgle_event,darkest.gods.gurgle_event,darkest.gods.chaos_decrease_event,darkest.gods.mana_event,darkest.gods.money_increase_event,darkest.gods.cultist_event,darkest.gods.cultist_event,darkest.gods.cultist_event], null);
darkest.gods.init_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tick-effects","tick-effects",35981953),new cljs.core.Keyword(null,"recruit-power","recruit-power",-773169757),new cljs.core.Keyword(null,"overtime-power","overtime-power",1455870212),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"work-power","work-power",-800579476),new cljs.core.Keyword(null,"hunger-time","hunger-time",-2082217300),new cljs.core.Keyword(null,"chaos-time","chaos-time",1373842733),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"portal-time","portal-time",1689637713),new cljs.core.Keyword(null,"mana-power","mana-power",-636457804),new cljs.core.Keyword(null,"hunger-power","hunger-power",1300876759),new cljs.core.Keyword(null,"blood-power","blood-power",32529656),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"income-time","income-time",-1507469349),new cljs.core.Keyword(null,"descriptions","descriptions",-823193124),new cljs.core.Keyword(null,"hunger","hunger",-1187183907),new cljs.core.Keyword(null,"technologies","technologies",2141321343)],[cljs.core.PersistentVector.EMPTY,(25),(10),(new cljs.core.List(null,"The cult has begun!",null,(1),null)),0.1,(0),(0),new cljs.core.Keyword(null,"title","title",636505583),((10) * darkest.gods.minutes),(1),(1),(1),new cljs.core.Keyword(null,"default","default",-1987822328),(0),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The number of seconds remaining until the portal closes. The portal closes if this reaches zero!"], null)], null),new cljs.core.Keyword(null,"money","money",250333921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Used to recruit cultists."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Gained by using cultists to work. The more cultists you employ, the more money you make."], null)], null),new cljs.core.Keyword(null,"chaos","chaos",1423564506),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Increases the frequency of random events."], null)], null),new cljs.core.Keyword(null,"cultists","cultists",859064695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Townspeople brainwashed by a strange concoction. Help you run the cult."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Increase your income by $",new cljs.core.Keyword(null,"work-power","work-power",-800579476),"/s."], null)], null),new cljs.core.Keyword(null,"mana","mana",-263736085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Used to research magic artifacts."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Gained by spending blood to worship."], null)], null)], null),(0),cljs.core.PersistentArrayMap.EMPTY]);
darkest.gods.difficulties = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"blood-needed","blood-needed",-1587302842),(100),new cljs.core.Keyword(null,"cultists","cultists",859064695),(10),new cljs.core.Keyword(null,"money","money",250333921),(100),new cljs.core.Keyword(null,"mana","mana",-263736085),(0),new cljs.core.Keyword(null,"blood","blood",-2090150277),(0),new cljs.core.Keyword(null,"hunger-pang","hunger-pang",-115180008),(100),new cljs.core.Keyword(null,"chaos","chaos",1423564506),(50),new cljs.core.Keyword(null,"hunger-tick","hunger-tick",-255338540),(3000)], null),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"blood-needed","blood-needed",-1587302842),(500),new cljs.core.Keyword(null,"cultists","cultists",859064695),(20),new cljs.core.Keyword(null,"money","money",250333921),80.0,new cljs.core.Keyword(null,"mana","mana",-263736085),(0),new cljs.core.Keyword(null,"blood","blood",-2090150277),(0),new cljs.core.Keyword(null,"hunger-pang","hunger-pang",-115180008),(100),new cljs.core.Keyword(null,"chaos","chaos",1423564506),(100),new cljs.core.Keyword(null,"hunger-tick","hunger-tick",-255338540),(2000)], null),new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"blood-needed","blood-needed",-1587302842),(1000),new cljs.core.Keyword(null,"cultists","cultists",859064695),(30),new cljs.core.Keyword(null,"money","money",250333921),40.0,new cljs.core.Keyword(null,"mana","mana",-263736085),(0),new cljs.core.Keyword(null,"chaos","chaos",1423564506),(200),new cljs.core.Keyword(null,"blood","blood",-2090150277),(0),new cljs.core.Keyword(null,"hunger-pang","hunger-pang",-115180008),(100),new cljs.core.Keyword(null,"hunger-tick","hunger-tick",-255338540),(1000)], null)], null);
darkest.gods.letters = cljs.core.PersistentVector.fromArray(["a","a","a","a","b","c","d","e","e","e","e","f","g","g","h","i","i","i","i","j","k","l","m","n","o","o","o","o","p","q","q","r","s","t","u","u","u","u","v","v","w","x","x","y","z","z","'","'","-","-"], true);
if((typeof darkest !== 'undefined') && (typeof darkest.gods !== 'undefined') && (typeof darkest.gods.state_atom !== 'undefined')){
} else {
darkest.gods.state_atom = reagent.core.atom.call(null,darkest.gods.init_state);
}
darkest.gods.dispatch_BANG_ = (function darkest$gods$dispatch_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20584 = arguments.length;
var i__4532__auto___20585 = (0);
while(true){
if((i__4532__auto___20585 < len__4531__auto___20584)){
args__4534__auto__.push((arguments[i__4532__auto___20585]));

var G__20586 = (i__4532__auto___20585 + (1));
i__4532__auto___20585 = G__20586;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return darkest.gods.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

darkest.gods.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,darkest.gods.state_atom,f,args);
});

darkest.gods.dispatch_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
darkest.gods.dispatch_BANG_.cljs$lang$applyTo = (function (seq20582){
var G__20583 = cljs.core.first.call(null,seq20582);
var seq20582__$1 = cljs.core.next.call(null,seq20582);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20583,seq20582__$1);
});

darkest.gods.new_god_name_BANG_ = (function darkest$gods$new_god_name_BANG_(){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.rand_nth.call(null,darkest.gods.letters).toUpperCase(),cljs.core.take.call(null,cljs.core.rand_int.call(null,(12)),cljs.core.repeatedly.call(null,(function (){
return cljs.core.rand_nth.call(null,darkest.gods.letters);
}))));
});
darkest.gods.set_difficulty_BANG_ = (function darkest$gods$set_difficulty_BANG_(difficulty){
return (function (){
return darkest.gods.dispatch_BANG_.call(null,(function (state){
var god_name = darkest.gods.new_god_name_BANG_.call(null);
var god = darkest.gods.god_text.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"god-name","god-name",839249687),god_name], null));
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.merge.call(null,state,state,cljs.core.get.call(null,darkest.gods.difficulties,difficulty)),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"intro","intro",-886090599),new cljs.core.Keyword(null,"god-name","god-name",839249687),god_name),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"descriptions","descriptions",-823193124),new cljs.core.Keyword(null,"blood","blood",-2090150277)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Used to summon ",god,"! ","Be sure to make regular offerings to ","avoid its wrath."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Gained by sacrificing cultists."], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"descriptions","descriptions",-823193124),new cljs.core.Keyword(null,"hunger","hunger",-1187183907)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),god,"'s hunger. If this value goes over ",new cljs.core.Keyword(null,"hunger-pang","hunger-pang",-115180008)," it will punish your cult!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This value is reduced by worshiping."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This values increases every ",new cljs.core.Keyword(null,"hunger-tick","hunger-tick",-255338540),"s."], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"descriptions","descriptions",-823193124),new cljs.core.Keyword(null,"blood-needed","blood-needed",-1587302842)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The amount of blood needed to ressurect ",god,"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This value is reduced by worshiping."], null)], null));
}));
});
});
darkest.gods.expose_BANG_ = (function darkest$gods$expose_BANG_(k){
return (function (){
return darkest.gods.dispatch_BANG_.call(null,(function (state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"hover","hover",-341141711),k);
}));
});
});
darkest.gods.money_for_work = (function darkest$gods$money_for_work(state){
return ((1) + (new cljs.core.Keyword(null,"cultists","cultists",859064695).cljs$core$IFn$_invoke$arity$1(state) * new cljs.core.Keyword(null,"work-power","work-power",-800579476).cljs$core$IFn$_invoke$arity$1(state)));
});
darkest.gods.money_for_overtime = (function darkest$gods$money_for_overtime(state){
return (darkest.gods.money_for_work.call(null,state) / new cljs.core.Keyword(null,"overtime-power","overtime-power",1455870212).cljs$core$IFn$_invoke$arity$1(state));
});
darkest.gods.capitalism_sux = (function darkest$gods$capitalism_sux(state){
if(((cljs.core.rand_int.call(null,(100000)) + (new cljs.core.Keyword(null,"chaos","chaos",1423564506).cljs$core$IFn$_invoke$arity$1(state) * cljs.core.rand.call(null))) > (100000))){
return cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"cultists","cultists",859064695),cljs.core.dec),new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.conj,"One of your cultists worked themselves to death.");
} else {
return state;
}
});
darkest.gods.overtime_BANG_ = (function darkest$gods$overtime_BANG_(){
return darkest.gods.dispatch_BANG_.call(null,(function (state){
return darkest.gods.capitalism_sux.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"money","money",250333921),cljs.core._PLUS_,darkest.gods.money_for_overtime.call(null,state)));
}));
});
darkest.gods.sacrifice_BANG_ = (function darkest$gods$sacrifice_BANG_(){
return darkest.gods.dispatch_BANG_.call(null,(function (state){
if((new cljs.core.Keyword(null,"cultists","cultists",859064695).cljs$core$IFn$_invoke$arity$1(state) > (0))){
return cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"cultists","cultists",859064695),cljs.core.dec),new cljs.core.Keyword(null,"blood","blood",-2090150277),cljs.core._PLUS_,new cljs.core.Keyword(null,"blood-power","blood-power",32529656).cljs$core$IFn$_invoke$arity$1(state));
} else {
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.conj,"Not enough cultists!");
}
}));
});
darkest.gods.recruit_BANG_ = (function darkest$gods$recruit_BANG_(){
return darkest.gods.dispatch_BANG_.call(null,(function (state){
if((new cljs.core.Keyword(null,"money","money",250333921).cljs$core$IFn$_invoke$arity$1(state) >= new cljs.core.Keyword(null,"recruit-power","recruit-power",-773169757).cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"cultists","cultists",859064695),cljs.core.inc),new cljs.core.Keyword(null,"money","money",250333921),cljs.core._,new cljs.core.Keyword(null,"recruit-power","recruit-power",-773169757).cljs$core$IFn$_invoke$arity$1(state));
} else {
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.conj,"Not enough money!");
}
}));
});
darkest.gods.win_condition = (function darkest$gods$win_condition(state){
var blood_needed = new cljs.core.Keyword(null,"blood-needed","blood-needed",-1587302842).cljs$core$IFn$_invoke$arity$1(state);
if((blood_needed === (0))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"win","win",-1624642689));
} else {
return state;
}
});
darkest.gods.worship_BANG_ = (function darkest$gods$worship_BANG_(){
return darkest.gods.dispatch_BANG_.call(null,(function (state){
if((new cljs.core.Keyword(null,"blood","blood",-2090150277).cljs$core$IFn$_invoke$arity$1(state) > (0))){
return darkest.gods.win_condition.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"blood","blood",-2090150277),cljs.core._,new cljs.core.Keyword(null,"hunger-power","hunger-power",1300876759).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"blood-needed","blood-needed",-1587302842),cljs.core.dec),new cljs.core.Keyword(null,"hunger","hunger",-1187183907),(function (p1__20588_SHARP_){
if((p1__20588_SHARP_ === (0))){
return (0);
} else {
return (p1__20588_SHARP_ - (1));
}
})),new cljs.core.Keyword(null,"mana","mana",-263736085),cljs.core._PLUS_,new cljs.core.Keyword(null,"mana-power","mana-power",-636457804).cljs$core$IFn$_invoke$arity$1(state)));
} else {
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.conj,"Not enough blood!");
}
}));
});
darkest.gods.research_menu_BANG_ = (function darkest$gods$research_menu_BANG_(){
return darkest.gods.dispatch_BANG_.call(null,(function (state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"research","research",1623468570),true);
}));
});
darkest.gods.research_BANG_ = (function darkest$gods$research_BANG_(k){
return (function (){
return darkest.gods.dispatch_BANG_.call(null,(function (state){
var mana_needed = new cljs.core.Keyword(null,"mana","mana",-263736085).cljs$core$IFn$_invoke$arity$1(k.call(null,darkest.gods.research));
var f = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(k.call(null,darkest.gods.research));
return f.call(null,cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"mana","mana",-263736085),cljs.core._,mana_needed),new cljs.core.Keyword(null,"technologies","technologies",2141321343),cljs.core.assoc,k,cljs.core.get.call(null,darkest.gods.research,k)));
}));
});
});
darkest.gods.back_to_actions_BANG_ = (function darkest$gods$back_to_actions_BANG_(){
return darkest.gods.dispatch_BANG_.call(null,(function (state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"research","research",1623468570),false);
}));
});
darkest.gods.restart_BANG_ = (function darkest$gods$restart_BANG_(){
return darkest.gods.dispatch_BANG_.call(null,(function (state){
return darkest.gods.init_state;
}));
});
darkest.gods.portal_time = (function darkest$gods$portal_time(state){
var portal_time = new cljs.core.Keyword(null,"portal-time","portal-time",1689637713).cljs$core$IFn$_invoke$arity$1(state);
if((portal_time === (0))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"game-over","game-over",-607322695));
} else {
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"portal-time","portal-time",1689637713),cljs.core._,(100));
}
});
darkest.gods.handle_hunger = (function darkest$gods$handle_hunger(state){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hunger-pang","hunger-pang",-115180008).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"hunger","hunger",-1187183907).cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.assoc.call(null,cljs.core.rand_nth.call(null,darkest.gods.hunger_punishments).call(null,state),new cljs.core.Keyword(null,"hunger","hunger",-1187183907),(0));
} else {
return state;
}
});
darkest.gods.hunger_time = (function darkest$gods$hunger_time(state){
var hunger_time = new cljs.core.Keyword(null,"hunger-time","hunger-time",-2082217300).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hunger-tick","hunger-tick",-255338540).cljs$core$IFn$_invoke$arity$1(state),hunger_time)){
return darkest.gods.handle_hunger.call(null,cljs.core.assoc.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"hunger","hunger",-1187183907),cljs.core.inc),new cljs.core.Keyword(null,"hunger-time","hunger-time",-2082217300),(0)));
} else {
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"hunger-time","hunger-time",-2082217300),cljs.core._PLUS_,(100));
}
});
darkest.gods.income = (function darkest$gods$income(state){
if(cljs.core._EQ_.call(null,(10),new cljs.core.Keyword(null,"income-time","income-time",-1507469349).cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.assoc.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"money","money",250333921),cljs.core._PLUS_,darkest.gods.money_for_work.call(null,state)),new cljs.core.Keyword(null,"income-time","income-time",-1507469349),(0));
} else {
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"income-time","income-time",-1507469349),cljs.core.inc);
}
});
darkest.gods.random_event = (function darkest$gods$random_event(state){
if(((500) < ((new cljs.core.Keyword(null,"chaos","chaos",1423564506).cljs$core$IFn$_invoke$arity$1(state) + new cljs.core.Keyword(null,"chaos-time","chaos-time",1373842733).cljs$core$IFn$_invoke$arity$1(state)) + cljs.core.rand_int.call(null,(250))))){
return cljs.core.assoc.call(null,cljs.core.rand_nth.call(null,darkest.gods.random_events).call(null,state),new cljs.core.Keyword(null,"chaos-time","chaos-time",1373842733),(0));
} else {
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"chaos-time","chaos-time",1373842733),cljs.core.inc);
}
});
darkest.gods.game_loop = (function darkest$gods$game_loop(state){
return darkest.gods.random_event.call(null,darkest.gods.income.call(null,darkest.gods.hunger_time.call(null,darkest.gods.portal_time.call(null,state))));
});
darkest.gods.game_loop_BANG_ = (function darkest$gods$game_loop_BANG_(){
return setTimeout((function (){
var state = cljs.core.deref.call(null,darkest.gods.state_atom);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(state))){
cljs.core.swap_BANG_.call(null,darkest.gods.state_atom,darkest.gods.game_loop);

return darkest.gods.game_loop_BANG_.call(null);
} else {
return null;
}
}),(100));
});
darkest.gods.start_game_BANG_ = (function darkest$gods$start_game_BANG_(){
darkest.gods.dispatch_BANG_.call(null,(function (state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"main","main",-2117802661));
}));

return darkest.gods.game_loop_BANG_.call(null);
});
darkest.gods.exposition = (function darkest$gods$exposition(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20600 = arguments.length;
var i__4532__auto___20601 = (0);
while(true){
if((i__4532__auto___20601 < len__4531__auto___20600)){
args__4534__auto__.push((arguments[i__4532__auto___20601]));

var G__20602 = (i__4532__auto___20601 + (1));
i__4532__auto___20601 = G__20602;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return darkest.gods.exposition.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

darkest.gods.exposition.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.exposition","div.exposition",-209935541)], null),args);
});

darkest.gods.exposition.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
darkest.gods.exposition.cljs$lang$applyTo = (function (seq20599){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20599));
});

darkest.gods.menu = (function darkest$gods$menu(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20606 = arguments.length;
var i__4532__auto___20607 = (0);
while(true){
if((i__4532__auto___20607 < len__4531__auto___20606)){
args__4534__auto__.push((arguments[i__4532__auto___20607]));

var G__20608 = (i__4532__auto___20607 + (1));
i__4532__auto___20607 = G__20608;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return darkest.gods.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

darkest.gods.menu.cljs$core$IFn$_invoke$arity$variadic = (function (prompt,props,buttons){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu","div.menu",-175336694),props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.prompt","div.prompt",1806740021),prompt], null)], null),buttons);
});

darkest.gods.menu.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
darkest.gods.menu.cljs$lang$applyTo = (function (seq20603){
var G__20604 = cljs.core.first.call(null,seq20603);
var seq20603__$1 = cljs.core.next.call(null,seq20603);
var G__20605 = cljs.core.first.call(null,seq20603__$1);
var seq20603__$2 = cljs.core.next.call(null,seq20603__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20604,G__20605,seq20603__$2);
});

darkest.gods.button = (function darkest$gods$button(f,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button","div.button",-1553026367),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),f], null),text], null);
});
darkest.gods.reveal_button = (function darkest$gods$reveal_button(f,visible_text,reveal_text){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button","div.button",-1553026367),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.visible","div.visible",-329055898),visible_text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.reveal","div.reveal",-318716100),reveal_text], null)], null);
});
if((typeof darkest !== 'undefined') && (typeof darkest.gods !== 'undefined') && (typeof darkest.gods.expose_describe !== 'undefined')){
} else {
darkest.gods.expose_describe = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"darkest.gods","expose-describe"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (text,state){
return text;
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,darkest.gods.expose_describe,new cljs.core.Keyword(null,"default","default",-1987822328),(function (text,state){
return cljs.core.get.call(null,state,text);
}));
cljs.core._add_method.call(null,darkest.gods.expose_describe,new cljs.core.Keyword(null,"hunger-tick","hunger-tick",-255338540),(function (text,state){
return (cljs.core.get.call(null,state,text) / (1000)).toFixed((2));
}));
if((typeof darkest !== 'undefined') && (typeof darkest.gods !== 'undefined') && (typeof darkest.gods.find_explanation !== 'undefined')){
} else {
darkest.gods.find_explanation = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"darkest.gods","find-explanation"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (state){
var exp = new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(state);
if((exp instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"simple","simple",-581868663);
} else {
return cljs.core.first.call(null,exp);
}
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,darkest.gods.find_explanation,new cljs.core.Keyword(null,"simple","simple",-581868663),(function (state){
return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"descriptions","descriptions",-823193124),new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(state)], null));
}));
cljs.core._add_method.call(null,darkest.gods.find_explanation,new cljs.core.Keyword(null,"magic","magic",-1640473232),(function (state){
return cljs.core.conj.call(null,cljs.core.get_in.call(null,darkest.gods.research,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"expose","expose",-708121927)], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Cost: ",cljs.core.get_in.call(null,darkest.gods.research,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"mana","mana",-263736085)], null))," Mana"], null));
}));
cljs.core._add_method.call(null,darkest.gods.find_explanation,null,(function (state){
return null;
}));
darkest.gods.expose = (function darkest$gods$expose(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.exposition,(function (){var temp__5455__auto__ = darkest.gods.find_explanation.call(null,state);
if(cljs.core.truth_(temp__5455__auto__)){
var descriptions = temp__5455__auto__;
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.map.call(null,((function (descriptions,temp__5455__auto__){
return (function (description){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,description)], null),cljs.core.map.call(null,((function (descriptions,temp__5455__auto__){
return (function (text){
if((text instanceof cljs.core.Keyword)){
return darkest.gods.expose_describe.call(null,text,state);
} else {
return text;
}
});})(descriptions,temp__5455__auto__))
),cljs.core.rest.call(null,description));
});})(descriptions,temp__5455__auto__))
,descriptions));
} else {
return "Hover over something to get an explanation.";
}
})()], null);
});
darkest.gods.actions = (function darkest$gods$actions(state){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.menu,"Actions",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.reveal_button,darkest.gods.overtime_BANG_,"Work Overtime",["Gain $",cljs.core.str.cljs$core$IFn$_invoke$arity$1(darkest.gods.money_for_overtime.call(null,state).toFixed((2)))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.reveal_button,darkest.gods.sacrifice_BANG_,"Sacrifice",["Gain ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"blood-power","blood-power",32529656).cljs$core$IFn$_invoke$arity$1(state))," Blood for 1 Cultist"].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.reveal_button,darkest.gods.recruit_BANG_,"Recruit",["Recruit Cultist for $",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"recruit-power","recruit-power",-773169757).cljs$core$IFn$_invoke$arity$1(state).toFixed((2)))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.reveal_button,darkest.gods.worship_BANG_,"Worship",["Reduce Hunger by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hunger-power","hunger-power",1300876759).cljs$core$IFn$_invoke$arity$1(state))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.reveal_button,darkest.gods.research_menu_BANG_,"Research","Exchange Mana for Artifacts"], null)], null);
});
darkest.gods.events = (function darkest$gods$events(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.menu,"Events",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"events"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.exposition,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.scroll","div.scroll",-1226611099)], null),cljs.core.map.call(null,(function (p1__20610_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),p1__20610_SHARP_],null));
})),new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(state))], null)], null);
});
darkest.gods.game_state = (function darkest$gods$game_state(state){
var god = darkest.gods.god_text.call(null,state);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.menu,god,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.simple","table.simple",1682834010),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),darkest.gods.expose_BANG_.call(null,new cljs.core.Keyword(null,"hunger","hunger",-1187183907)),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),darkest.gods.expose_BANG_.call(null,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Hunger"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"hunger","hunger",-1187183907).cljs$core$IFn$_invoke$arity$1(state)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),darkest.gods.expose_BANG_.call(null,new cljs.core.Keyword(null,"blood-needed","blood-needed",-1587302842)),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),darkest.gods.expose_BANG_.call(null,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Sacrifice Needed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"blood-needed","blood-needed",-1587302842).cljs$core$IFn$_invoke$arity$1(state)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),darkest.gods.expose_BANG_.call(null,new cljs.core.Keyword(null,"time","time",1385887882)),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),darkest.gods.expose_BANG_.call(null,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Time Remaining"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(new cljs.core.Keyword(null,"portal-time","portal-time",1689637713).cljs$core$IFn$_invoke$arity$1(state) / (1000)).toFixed((0)),"s"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),darkest.gods.expose_BANG_.call(null,new cljs.core.Keyword(null,"chaos","chaos",1423564506)),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),darkest.gods.expose_BANG_.call(null,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Chaos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"chaos","chaos",1423564506).cljs$core$IFn$_invoke$arity$1(state)], null)], null)], null)], null)], null);
});
darkest.gods.resources = (function darkest$gods$resources(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.menu,"Resources",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"resources"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.simple","table.simple",1682834010),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),darkest.gods.expose_BANG_.call(null,new cljs.core.Keyword(null,"cultists","cultists",859064695)),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),darkest.gods.expose_BANG_.call(null,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Cultists"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"cultists","cultists",859064695).cljs$core$IFn$_invoke$arity$1(state)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),darkest.gods.expose_BANG_.call(null,new cljs.core.Keyword(null,"money","money",250333921)),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),darkest.gods.expose_BANG_.call(null,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Money"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"money","money",250333921).cljs$core$IFn$_invoke$arity$1(state).toFixed((2)))].join('')], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),darkest.gods.expose_BANG_.call(null,new cljs.core.Keyword(null,"mana","mana",-263736085)),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),darkest.gods.expose_BANG_.call(null,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Mana"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"mana","mana",-263736085).cljs$core$IFn$_invoke$arity$1(state)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),darkest.gods.expose_BANG_.call(null,new cljs.core.Keyword(null,"blood","blood",-2090150277)),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),darkest.gods.expose_BANG_.call(null,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Blood"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"blood","blood",-2090150277).cljs$core$IFn$_invoke$arity$1(state)], null)], null)], null)], null)], null);
});
darkest.gods.describe = (function darkest$gods$describe(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.menu,"Describe",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"expose"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.expose,state], null)], null);
});
if((typeof darkest !== 'undefined') && (typeof darkest.gods !== 'undefined') && (typeof darkest.gods.render_route !== 'undefined')){
} else {
darkest.gods.render_route = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"darkest.gods","render-route"),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,darkest.gods.render_route,new cljs.core.Keyword(null,"title","title",636505583),(function (state){
var easy_f = darkest.gods.set_difficulty_BANG_.call(null,new cljs.core.Keyword(null,"easy","easy",315769928));
var med_f = darkest.gods.set_difficulty_BANG_.call(null,new cljs.core.Keyword(null,"medium","medium",-1864319384));
var hard_f = darkest.gods.set_difficulty_BANG_.call(null,new cljs.core.Keyword(null,"hard","hard",2068420191));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Darkest Gods"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.menu,"New Game",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"small"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.reveal_button,easy_f,"Encroaching Apocalypse","Easy"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.reveal_button,med_f,"World on the Precipice","Medium"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.reveal_button,hard_f,"A Hopeful Existance","Hard"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.credits","div.credits",920962932),"December 2018 Ludum Dare. ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/MysteryMachine/darkest-gods",new cljs.core.Keyword(null,"target","target",253001721),"_none"], null),"Source Code."], null)], null)], null);
}));
cljs.core._add_method.call(null,darkest.gods.render_route,new cljs.core.Keyword(null,"intro","intro",-886090599),(function (state){
var god = darkest.gods.god_text.call(null,state);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.menu,"Your Goal",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"full"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.exposition,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You are the high priest of ",god,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", a dark "], null),"ancient being who has controlled your mind since ","a chance encounter with a greatest celestial being ","corrupted it."], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"A tear in the fabric of space-time heralds the ","arrival of ",god,". It is time to build a cult in ","order to increase the power of ",god," and wedge ","the portal open."], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You only have a limited time. Make haste! ","For the glory of ",god,"!"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.button,darkest.gods.start_game_BANG_,"Make Haste!"], null)], null);
}));
cljs.core._add_method.call(null,darkest.gods.render_route,new cljs.core.Keyword(null,"win","win",-1624642689),(function (state){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.menu,"An Era of Darkness",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"full"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.exposition,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"god-name","god-name",839249687).cljs$core$IFn$_invoke$arity$1(state)," arrives."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.exposition,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Humanity is instantly erradicated. You, in fact, do not have a moment to consider ","the horror of the situation as your body is instantly consumed by the dark abyss of wriggling, ","searing tentacles."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You win."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.button,darkest.gods.restart_BANG_,"Back to Start"], null)], null);
}));
darkest.gods.research_menu = (function darkest$gods$research_menu(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-column","div.main-column",2126645236),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.menu,"Research",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.button,darkest.gods.back_to_actions_BANG_,"Back"], null)], null),cljs.core.map.call(null,(function (p__20617){
var vec__20618 = p__20617;
var k = cljs.core.nth.call(null,vec__20618,(0),null);
var map__20621 = cljs.core.nth.call(null,vec__20618,(1),null);
var map__20621__$1 = ((((!((map__20621 == null)))?(((((map__20621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20621):map__20621);
var name = cljs.core.get.call(null,map__20621__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var researched = cljs.core.get.call(null,new cljs.core.Keyword(null,"technologies","technologies",2141321343).cljs$core$IFn$_invoke$arity$1(state),k);
var tech = cljs.core.get.call(null,darkest.gods.research,k);
var mana_cost = cljs.core.get.call(null,tech,new cljs.core.Keyword(null,"mana","mana",-263736085));
var can_afford = (new cljs.core.Keyword(null,"mana","mana",-263736085).cljs$core$IFn$_invoke$arity$1(state) >= mana_cost);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button","div.button",-1553026367),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),darkest.gods.expose_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"magic","magic",-1640473232),k], null)),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),darkest.gods.expose_BANG_.call(null,null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((can_afford)?darkest.gods.research_BANG_.call(null,k):null),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(researched)?"researched":((!(can_afford))?"cantafford":null))], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(k.call(null,darkest.gods.research)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," (",(cljs.core.truth_(researched)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.researched-text","span.researched-text",2059574350),"Researched"], null):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mana_cost)," Mana"].join('')),")"], null)], null);
})),cljs.core.sort_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"mana","mana",-263736085),cljs.core.second),darkest.gods.research))], null);
});
cljs.core._add_method.call(null,darkest.gods.render_route,new cljs.core.Keyword(null,"main","main",-2117802661),(function (state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),(cljs.core.truth_(new cljs.core.Keyword(null,"research","research",1623468570).cljs$core$IFn$_invoke$arity$1(state))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.research_menu,state], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-column","div.main-column",2126645236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.actions,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.events,state], null)], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-column","div.main-column",2126645236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.game_state,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.resources,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.describe,state], null)], null)], null);
}));
cljs.core._add_method.call(null,darkest.gods.render_route,new cljs.core.Keyword(null,"game-over","game-over",-607322695),(function (state){
var god = darkest.gods.god_text.call(null,state);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.menu,"Defeat",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"full"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.exposition,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The dark portal collapses after enough time elapsed. You can feel ","the dark powers of ",god," leave this world. You and your cult stare ","at the sacrificial pit, slowly coming to your senses as the dark forces ","seep out of your mind. Slowly, you make your way back to the village, ","where you try your best to forget."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Of course, you never do."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.button,darkest.gods.restart_BANG_,"Try Again"], null)], null);
}));
darkest.gods.render = (function darkest$gods$render(state_atom){
var state = cljs.core.deref.call(null,state_atom);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.render_route,state], null)], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [darkest.gods.render,darkest.gods.state_atom], null),document.getElementById("app"));

//# sourceMappingURL=gods.js.map
