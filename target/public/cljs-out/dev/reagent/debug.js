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
var G__8232__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8232 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8233__i = 0, G__8233__a = new Array(arguments.length -  0);
while (G__8233__i < G__8233__a.length) {G__8233__a[G__8233__i] = arguments[G__8233__i + 0]; ++G__8233__i;}
  args = new cljs.core.IndexedSeq(G__8233__a,0,null);
} 
return G__8232__delegate.call(this,args);};
G__8232.cljs$lang$maxFixedArity = 0;
G__8232.cljs$lang$applyTo = (function (arglist__8234){
var args = cljs.core.seq(arglist__8234);
return G__8232__delegate(args);
});
G__8232.cljs$core$IFn$_invoke$arity$variadic = G__8232__delegate;
return G__8232;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8235__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8235 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8236__i = 0, G__8236__a = new Array(arguments.length -  0);
while (G__8236__i < G__8236__a.length) {G__8236__a[G__8236__i] = arguments[G__8236__i + 0]; ++G__8236__i;}
  args = new cljs.core.IndexedSeq(G__8236__a,0,null);
} 
return G__8235__delegate.call(this,args);};
G__8235.cljs$lang$maxFixedArity = 0;
G__8235.cljs$lang$applyTo = (function (arglist__8237){
var args = cljs.core.seq(arglist__8237);
return G__8235__delegate(args);
});
G__8235.cljs$core$IFn$_invoke$arity$variadic = G__8235__delegate;
return G__8235;
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
