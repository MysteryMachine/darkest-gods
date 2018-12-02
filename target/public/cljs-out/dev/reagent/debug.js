// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__19847__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19847 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19848__i = 0, G__19848__a = new Array(arguments.length -  0);
while (G__19848__i < G__19848__a.length) {G__19848__a[G__19848__i] = arguments[G__19848__i + 0]; ++G__19848__i;}
  args = new cljs.core.IndexedSeq(G__19848__a,0,null);
} 
return G__19847__delegate.call(this,args);};
G__19847.cljs$lang$maxFixedArity = 0;
G__19847.cljs$lang$applyTo = (function (arglist__19849){
var args = cljs.core.seq(arglist__19849);
return G__19847__delegate(args);
});
G__19847.cljs$core$IFn$_invoke$arity$variadic = G__19847__delegate;
return G__19847;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__19850__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19850 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19851__i = 0, G__19851__a = new Array(arguments.length -  0);
while (G__19851__i < G__19851__a.length) {G__19851__a[G__19851__i] = arguments[G__19851__i + 0]; ++G__19851__i;}
  args = new cljs.core.IndexedSeq(G__19851__a,0,null);
} 
return G__19850__delegate.call(this,args);};
G__19850.cljs$lang$maxFixedArity = 0;
G__19850.cljs$lang$applyTo = (function (arglist__19852){
var args = cljs.core.seq(arglist__19852);
return G__19850__delegate(args);
});
G__19850.cljs$core$IFn$_invoke$arity$variadic = G__19850__delegate;
return G__19850;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
