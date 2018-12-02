// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18050){
var map__18051 = p__18050;
var map__18051__$1 = ((((!((map__18051 == null)))?(((((map__18051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18051):map__18051);
var m = map__18051__$1;
var n = cljs.core.get.call(null,map__18051__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18051__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18053_18075 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18054_18076 = null;
var count__18055_18077 = (0);
var i__18056_18078 = (0);
while(true){
if((i__18056_18078 < count__18055_18077)){
var f_18079 = cljs.core._nth.call(null,chunk__18054_18076,i__18056_18078);
cljs.core.println.call(null,"  ",f_18079);


var G__18080 = seq__18053_18075;
var G__18081 = chunk__18054_18076;
var G__18082 = count__18055_18077;
var G__18083 = (i__18056_18078 + (1));
seq__18053_18075 = G__18080;
chunk__18054_18076 = G__18081;
count__18055_18077 = G__18082;
i__18056_18078 = G__18083;
continue;
} else {
var temp__5457__auto___18084 = cljs.core.seq.call(null,seq__18053_18075);
if(temp__5457__auto___18084){
var seq__18053_18085__$1 = temp__5457__auto___18084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18053_18085__$1)){
var c__4351__auto___18086 = cljs.core.chunk_first.call(null,seq__18053_18085__$1);
var G__18087 = cljs.core.chunk_rest.call(null,seq__18053_18085__$1);
var G__18088 = c__4351__auto___18086;
var G__18089 = cljs.core.count.call(null,c__4351__auto___18086);
var G__18090 = (0);
seq__18053_18075 = G__18087;
chunk__18054_18076 = G__18088;
count__18055_18077 = G__18089;
i__18056_18078 = G__18090;
continue;
} else {
var f_18091 = cljs.core.first.call(null,seq__18053_18085__$1);
cljs.core.println.call(null,"  ",f_18091);


var G__18092 = cljs.core.next.call(null,seq__18053_18085__$1);
var G__18093 = null;
var G__18094 = (0);
var G__18095 = (0);
seq__18053_18075 = G__18092;
chunk__18054_18076 = G__18093;
count__18055_18077 = G__18094;
i__18056_18078 = G__18095;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18096 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18096);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18096)))?cljs.core.second.call(null,arglists_18096):arglists_18096));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18057_18097 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18058_18098 = null;
var count__18059_18099 = (0);
var i__18060_18100 = (0);
while(true){
if((i__18060_18100 < count__18059_18099)){
var vec__18061_18101 = cljs.core._nth.call(null,chunk__18058_18098,i__18060_18100);
var name_18102 = cljs.core.nth.call(null,vec__18061_18101,(0),null);
var map__18064_18103 = cljs.core.nth.call(null,vec__18061_18101,(1),null);
var map__18064_18104__$1 = ((((!((map__18064_18103 == null)))?(((((map__18064_18103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18064_18103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18064_18103):map__18064_18103);
var doc_18105 = cljs.core.get.call(null,map__18064_18104__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18106 = cljs.core.get.call(null,map__18064_18104__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18102);

cljs.core.println.call(null," ",arglists_18106);

if(cljs.core.truth_(doc_18105)){
cljs.core.println.call(null," ",doc_18105);
} else {
}


var G__18107 = seq__18057_18097;
var G__18108 = chunk__18058_18098;
var G__18109 = count__18059_18099;
var G__18110 = (i__18060_18100 + (1));
seq__18057_18097 = G__18107;
chunk__18058_18098 = G__18108;
count__18059_18099 = G__18109;
i__18060_18100 = G__18110;
continue;
} else {
var temp__5457__auto___18111 = cljs.core.seq.call(null,seq__18057_18097);
if(temp__5457__auto___18111){
var seq__18057_18112__$1 = temp__5457__auto___18111;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18057_18112__$1)){
var c__4351__auto___18113 = cljs.core.chunk_first.call(null,seq__18057_18112__$1);
var G__18114 = cljs.core.chunk_rest.call(null,seq__18057_18112__$1);
var G__18115 = c__4351__auto___18113;
var G__18116 = cljs.core.count.call(null,c__4351__auto___18113);
var G__18117 = (0);
seq__18057_18097 = G__18114;
chunk__18058_18098 = G__18115;
count__18059_18099 = G__18116;
i__18060_18100 = G__18117;
continue;
} else {
var vec__18066_18118 = cljs.core.first.call(null,seq__18057_18112__$1);
var name_18119 = cljs.core.nth.call(null,vec__18066_18118,(0),null);
var map__18069_18120 = cljs.core.nth.call(null,vec__18066_18118,(1),null);
var map__18069_18121__$1 = ((((!((map__18069_18120 == null)))?(((((map__18069_18120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18069_18120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18069_18120):map__18069_18120);
var doc_18122 = cljs.core.get.call(null,map__18069_18121__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18123 = cljs.core.get.call(null,map__18069_18121__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18119);

cljs.core.println.call(null," ",arglists_18123);

if(cljs.core.truth_(doc_18122)){
cljs.core.println.call(null," ",doc_18122);
} else {
}


var G__18124 = cljs.core.next.call(null,seq__18057_18112__$1);
var G__18125 = null;
var G__18126 = (0);
var G__18127 = (0);
seq__18057_18097 = G__18124;
chunk__18058_18098 = G__18125;
count__18059_18099 = G__18126;
i__18060_18100 = G__18127;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__18071 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18072 = null;
var count__18073 = (0);
var i__18074 = (0);
while(true){
if((i__18074 < count__18073)){
var role = cljs.core._nth.call(null,chunk__18072,i__18074);
var temp__5457__auto___18128__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___18128__$1)){
var spec_18129 = temp__5457__auto___18128__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18129));
} else {
}


var G__18130 = seq__18071;
var G__18131 = chunk__18072;
var G__18132 = count__18073;
var G__18133 = (i__18074 + (1));
seq__18071 = G__18130;
chunk__18072 = G__18131;
count__18073 = G__18132;
i__18074 = G__18133;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__18071);
if(temp__5457__auto____$1){
var seq__18071__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18071__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__18071__$1);
var G__18134 = cljs.core.chunk_rest.call(null,seq__18071__$1);
var G__18135 = c__4351__auto__;
var G__18136 = cljs.core.count.call(null,c__4351__auto__);
var G__18137 = (0);
seq__18071 = G__18134;
chunk__18072 = G__18135;
count__18073 = G__18136;
i__18074 = G__18137;
continue;
} else {
var role = cljs.core.first.call(null,seq__18071__$1);
var temp__5457__auto___18138__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___18138__$2)){
var spec_18139 = temp__5457__auto___18138__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18139));
} else {
}


var G__18140 = cljs.core.next.call(null,seq__18071__$1);
var G__18141 = null;
var G__18142 = (0);
var G__18143 = (0);
seq__18071 = G__18140;
chunk__18072 = G__18141;
count__18073 = G__18142;
i__18074 = G__18143;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
