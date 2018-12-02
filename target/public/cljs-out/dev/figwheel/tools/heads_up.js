// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.tools.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');
goog.require('goog.Promise');

figwheel.tools.heads_up.node = (function figwheel$tools$heads_up$node(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24614 = arguments.length;
var i__4532__auto___24615 = (0);
while(true){
if((i__4532__auto___24615 < len__4531__auto___24614)){
args__4534__auto__.push((arguments[i__4532__auto___24615]));

var G__24616 = (i__4532__auto___24615 + (1));
i__4532__auto___24615 = G__24616;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return figwheel.tools.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

figwheel.tools.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__24606_24617 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__24607_24618 = null;
var count__24608_24619 = (0);
var i__24609_24620 = (0);
while(true){
if((i__24609_24620 < count__24608_24619)){
var k_24621 = cljs.core._nth.call(null,chunk__24607_24618,i__24609_24620);
e.setAttribute(cljs.core.name.call(null,k_24621),cljs.core.get.call(null,attrs,k_24621));


var G__24622 = seq__24606_24617;
var G__24623 = chunk__24607_24618;
var G__24624 = count__24608_24619;
var G__24625 = (i__24609_24620 + (1));
seq__24606_24617 = G__24622;
chunk__24607_24618 = G__24623;
count__24608_24619 = G__24624;
i__24609_24620 = G__24625;
continue;
} else {
var temp__5457__auto___24626 = cljs.core.seq.call(null,seq__24606_24617);
if(temp__5457__auto___24626){
var seq__24606_24627__$1 = temp__5457__auto___24626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24606_24627__$1)){
var c__4351__auto___24628 = cljs.core.chunk_first.call(null,seq__24606_24627__$1);
var G__24629 = cljs.core.chunk_rest.call(null,seq__24606_24627__$1);
var G__24630 = c__4351__auto___24628;
var G__24631 = cljs.core.count.call(null,c__4351__auto___24628);
var G__24632 = (0);
seq__24606_24617 = G__24629;
chunk__24607_24618 = G__24630;
count__24608_24619 = G__24631;
i__24609_24620 = G__24632;
continue;
} else {
var k_24633 = cljs.core.first.call(null,seq__24606_24627__$1);
e.setAttribute(cljs.core.name.call(null,k_24633),cljs.core.get.call(null,attrs,k_24633));


var G__24634 = cljs.core.next.call(null,seq__24606_24627__$1);
var G__24635 = null;
var G__24636 = (0);
var G__24637 = (0);
seq__24606_24617 = G__24634;
chunk__24607_24618 = G__24635;
count__24608_24619 = G__24636;
i__24609_24620 = G__24637;
continue;
}
} else {
}
}
break;
}

var seq__24610_24638 = cljs.core.seq.call(null,children);
var chunk__24611_24639 = null;
var count__24612_24640 = (0);
var i__24613_24641 = (0);
while(true){
if((i__24613_24641 < count__24612_24640)){
var ch_24642 = cljs.core._nth.call(null,chunk__24611_24639,i__24613_24641);
e.appendChild(ch_24642);


var G__24643 = seq__24610_24638;
var G__24644 = chunk__24611_24639;
var G__24645 = count__24612_24640;
var G__24646 = (i__24613_24641 + (1));
seq__24610_24638 = G__24643;
chunk__24611_24639 = G__24644;
count__24612_24640 = G__24645;
i__24613_24641 = G__24646;
continue;
} else {
var temp__5457__auto___24647 = cljs.core.seq.call(null,seq__24610_24638);
if(temp__5457__auto___24647){
var seq__24610_24648__$1 = temp__5457__auto___24647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24610_24648__$1)){
var c__4351__auto___24649 = cljs.core.chunk_first.call(null,seq__24610_24648__$1);
var G__24650 = cljs.core.chunk_rest.call(null,seq__24610_24648__$1);
var G__24651 = c__4351__auto___24649;
var G__24652 = cljs.core.count.call(null,c__4351__auto___24649);
var G__24653 = (0);
seq__24610_24638 = G__24650;
chunk__24611_24639 = G__24651;
count__24612_24640 = G__24652;
i__24613_24641 = G__24653;
continue;
} else {
var ch_24654 = cljs.core.first.call(null,seq__24610_24648__$1);
e.appendChild(ch_24654);


var G__24655 = cljs.core.next.call(null,seq__24610_24648__$1);
var G__24656 = null;
var G__24657 = (0);
var G__24658 = (0);
seq__24610_24638 = G__24655;
chunk__24611_24639 = G__24656;
count__24612_24640 = G__24657;
i__24613_24641 = G__24658;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.tools.heads_up.node.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
figwheel.tools.heads_up.node.cljs$lang$applyTo = (function (seq24603){
var G__24604 = cljs.core.first.call(null,seq24603);
var seq24603__$1 = cljs.core.next.call(null,seq24603);
var G__24605 = cljs.core.first.call(null,seq24603__$1);
var seq24603__$2 = cljs.core.next.call(null,seq24603__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24604,G__24605,seq24603__$2);
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.tools !== 'undefined') && (typeof figwheel.tools.heads_up !== 'undefined') && (typeof figwheel.tools.heads_up.heads_up_event_dispatch !== 'undefined')){
} else {
figwheel.tools.heads_up.heads_up_event_dispatch = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.tools.heads-up","heads-up-event-dispatch"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.tools.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.tools.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return null;
}));
cljs.core._add_method.call(null,figwheel.tools.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.tools.heads_up.clear.call(null);
}));
figwheel.tools.heads_up.ancestor_nodes = (function figwheel$tools$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.tools.heads_up.get_dataset = (function figwheel$tools$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.tools.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.tools.heads_up.heads_up_onclick_handler = (function figwheel$tools$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.tools.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.tools.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.tools.heads_up.ensure_container = (function figwheel$tools$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_24659 = figwheel.tools.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
el_24659.onclick = figwheel.tools.heads_up.heads_up_onclick_handler;

el_24659.innerHTML = figwheel.tools.heads_up.cljs_logo_svg;

el_24659.appendChild(figwheel.tools.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_24659);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.tools.heads_up.set_style_BANG_ = (function figwheel$tools$heads_up$set_style_BANG_(p__24660,st_map){
var map__24661 = p__24660;
var map__24661__$1 = ((((!((map__24661 == null)))?(((((map__24661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24661):map__24661);
var container_el = cljs.core.get.call(null,map__24661__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__24661,map__24661__$1,container_el){
return (function (p__24663){
var vec__24664 = p__24663;
var k = cljs.core.nth.call(null,vec__24664,(0),null);
var v = cljs.core.nth.call(null,vec__24664,(1),null);
return goog.object.set(container_el.style,cljs.core.name.call(null,k),v);
});})(map__24661,map__24661__$1,container_el))
,st_map);
});
figwheel.tools.heads_up.set_content_BANG_ = (function figwheel$tools$heads_up$set_content_BANG_(p__24667,dom_str){
var map__24668 = p__24667;
var map__24668__$1 = ((((!((map__24668 == null)))?(((((map__24668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24668):map__24668);
var c = map__24668__$1;
var content_area_el = cljs.core.get.call(null,map__24668__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.tools.heads_up.get_content = (function figwheel$tools$heads_up$get_content(p__24670){
var map__24671 = p__24670;
var map__24671__$1 = ((((!((map__24671 == null)))?(((((map__24671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24671):map__24671);
var content_area_el = cljs.core.get.call(null,map__24671__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.tools.heads_up.close_link = (function figwheel$tools$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.tools.heads_up.display_heads_up = (function figwheel$tools$heads_up$display_heads_up(style,msg){
return (new goog.Promise((function (resolve,reject){
var c = figwheel.tools.heads_up.ensure_container.call(null);
figwheel.tools.heads_up.set_style_BANG_.call(null,c,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),"10px",new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),"10px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),"68px",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1.0"], null),style));

figwheel.tools.heads_up.set_content_BANG_.call(null,c,msg);

return setTimeout(((function (c){
return (function (){
figwheel.tools.heads_up.set_style_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"auto"], null));

return resolve.call(null,true);
});})(c))
,(300));
})));
});
figwheel.tools.heads_up.heading = (function figwheel$tools$heads_up$heading(var_args){
var G__24674 = arguments.length;
switch (G__24674) {
case 1:
return figwheel.tools.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.tools.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.tools.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.tools.heads_up.heading.call(null,s,"");
});

figwheel.tools.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return ["<div style=\"","font-size: 26px;","line-height: 26px;","margin-bottom: 2px;","padding-top: 1px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," <span style=\"","display: inline-block;","font-size: 13px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),"</span></div>"].join('');
});

figwheel.tools.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.tools.heads_up.file_selector_div = (function figwheel$tools$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return ["<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"\" data-file-line=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"\" data-file-column=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join('');
});
figwheel.tools.heads_up.format_line = (function figwheel$tools$heads_up$format_line(msg,p__24676){
var map__24677 = p__24676;
var map__24677__$1 = ((((!((map__24677 == null)))?(((((map__24677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24677):map__24677);
var file = cljs.core.get.call(null,map__24677__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__24677__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24677__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__3949__auto__ = file;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return line;
}
})())){
return figwheel.tools.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),"</div>"].join('');
}
});
figwheel.tools.heads_up.escape = (function figwheel$tools$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.tools.heads_up.pad_line_number = (function figwheel$tools$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.tools.heads_up.inline_error_line = (function figwheel$tools$heads_up$inline_error_line(style,line_number,line){
return ["<span style='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),"'>","<span style='color: #757575;'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"  </span>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.tools.heads_up.escape.call(null,line)),"</span>"].join('');
});
figwheel.tools.heads_up.format_inline_error_line = (function figwheel$tools$heads_up$format_inline_error_line(p__24679){
var vec__24680 = p__24679;
var typ = cljs.core.nth.call(null,vec__24680,(0),null);
var line_number = cljs.core.nth.call(null,vec__24680,(1),null);
var line = cljs.core.nth.call(null,vec__24680,(2),null);
var pred__24683 = cljs.core._EQ_;
var expr__24684 = typ;
if(cljs.core.truth_(pred__24683.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__24684))){
return figwheel.tools.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__24683.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__24684))){
return figwheel.tools.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__24683.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__24684))){
return figwheel.tools.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.tools.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.tools.heads_up.pad_line_numbers = (function figwheel$tools$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__24686_SHARP_){
return cljs.core.update_in.call(null,p1__24686_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.tools.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.tools.heads_up.format_inline_error = (function figwheel$tools$heads_up$format_inline_error(inline_error){
if(cljs.core.truth_(cljs.core.not_empty.call(null,inline_error))){
var lines = cljs.core.map.call(null,figwheel.tools.heads_up.format_inline_error_line,figwheel.tools.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"</pre>"].join('');
} else {
return null;
}
});
figwheel.tools.heads_up.flatten_exception = (function figwheel$tools$heads_up$flatten_exception(p1__24687_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__24687_SHARP_));
});
figwheel.tools.heads_up.exception__GT_display_data = (function figwheel$tools$heads_up$exception__GT_display_data(p__24689){
var map__24690 = p__24689;
var map__24690__$1 = ((((!((map__24690 == null)))?(((((map__24690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24690):map__24690);
var exception = map__24690__$1;
var tag = cljs.core.get.call(null,map__24690__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var message = cljs.core.get.call(null,map__24690__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__24690__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24690__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var type = cljs.core.get.call(null,map__24690__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var file = cljs.core.get.call(null,map__24690__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var data = cljs.core.get.call(null,map__24690__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var error_inline = cljs.core.get.call(null,map__24690__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__3938__auto__ = file;
if(cljs.core.truth_(and__3938__auto__)){
return line;
} else {
return and__3938__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
var data_for_display = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs/analysis-error",null,"tools.reader/eof-reader-exception",null,"tools.reader/reader-exception",null], null), null).call(null,tag))?null:data);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(function (){var pred__24692 = cljs.core._EQ_;
var expr__24693 = tag;
if(cljs.core.truth_(pred__24692.call(null,"clj/compiler-exception",expr__24693))){
return "Couldn't load Clojure file";
} else {
if(cljs.core.truth_(pred__24692.call(null,"cljs/missing-required-ns",expr__24693))){
return "Could not Find Namespace";
} else {
if(cljs.core.truth_(pred__24692.call(null,"cljs/analysis-error",expr__24693))){
return "Could not Analyze";
} else {
if(cljs.core.truth_(pred__24692.call(null,"tools.reader/eof-reader-exception",expr__24693))){
return "Could not Read";
} else {
if(cljs.core.truth_(pred__24692.call(null,"tools.reader/reader-exception",expr__24693))){
return "Could not Read";
} else {
if(cljs.core.truth_(pred__24692.call(null,"cljs/general-compile-failure",expr__24693))){
return "Could not Compile";
} else {
return "Compile Exception";
}
}
}
}
}
}
})(),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,data_for_display,map__24690,map__24690__$1,exception,tag,message,line,column,type,file,data,error_inline){
return (function (p1__24688_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24688_SHARP_),"</div>"].join('');
});})(last_message,data_for_display,map__24690,map__24690__$1,exception,tag,message,line,column,type,file,data,error_inline))
,cljs.core.filter.call(null,cljs.core.complement.call(null,clojure.string.blank_QMARK_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24695 = "";
var G__24695__$1 = (cljs.core.truth_(type)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24695),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.tools.heads_up.escape.call(null,type))].join(''):G__24695);
var G__24695__$2 = (cljs.core.truth_((function (){var and__3938__auto__ = type;
if(cljs.core.truth_(and__3938__auto__)){
return message;
} else {
return and__3938__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24695__$1),": "].join(''):G__24695__$1);
if(cljs.core.truth_(message)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24695__$2),"<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.tools.heads_up.escape.call(null,message)),"</span>"].join('');
} else {
return G__24695__$2;
}
})(),(cljs.core.truth_(data_for_display)?["<pre style=\"white-space: pre-wrap\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.trimRight((function (){var sb__4462__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_24696_24698 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_24697_24699 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_24696_24698,_STAR_print_fn_STAR_24697_24699,sb__4462__auto__,last_message,data_for_display,map__24690,map__24690__$1,exception,tag,message,line,column,type,file,data,error_inline){
return (function (x__4463__auto__){
return sb__4462__auto__.append(x__4463__auto__);
});})(_STAR_print_newline_STAR_24696_24698,_STAR_print_fn_STAR_24697_24699,sb__4462__auto__,last_message,data_for_display,map__24690,map__24690__$1,exception,tag,message,line,column,type,file,data,error_inline))
;

try{cljs.pprint.pprint.call(null,data_for_display);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24697_24699;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24696_24698;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4462__auto__)].join('');
})())),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.tools.heads_up.format_inline_error.call(null,error_inline):null)], null))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.tools.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.tools.heads_up.display_exception = (function figwheel$tools$heads_up$display_exception(exception_data){
var map__24700 = figwheel.tools.heads_up.exception__GT_display_data.call(null,exception_data);
var map__24700__$1 = ((((!((map__24700 == null)))?(((((map__24700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24700):map__24700);
var head = cljs.core.get.call(null,map__24700__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__24700__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__24700__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__24700__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__24700__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__24700__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24700__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.tools.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.tools.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.tools.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.tools.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.tools.heads_up.warning_data__GT_display_data = (function figwheel$tools$heads_up$warning_data__GT_display_data(p__24703){
var map__24704 = p__24703;
var map__24704__$1 = ((((!((map__24704 == null)))?(((((map__24704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24704):map__24704);
var warning_data = map__24704__$1;
var file = cljs.core.get.call(null,map__24704__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__24704__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24704__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__24704__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__24704__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__3938__auto__ = file;
if(cljs.core.truth_(and__3938__auto__)){
return line;
} else {
return and__3938__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__24704,map__24704__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__24702_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24702_SHARP_),"</div>"].join('');
});})(last_message,map__24704,map__24704__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.tools.heads_up.escape.call(null,message)),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.tools.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.tools.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.tools.heads_up.display_system_warning = (function figwheel$tools$heads_up$display_system_warning(header,msg){
return figwheel.tools.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.tools.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.tools.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.tools.heads_up.display_warning = (function figwheel$tools$heads_up$display_warning(warning_data){
var map__24706 = figwheel.tools.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__24706__$1 = ((((!((map__24706 == null)))?(((((map__24706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24706):map__24706);
var head = cljs.core.get.call(null,map__24706__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__24706__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__24706__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__24706__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__24706__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__24706__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24706__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.tools.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.tools.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.tools.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.tools.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.tools.heads_up.format_warning_message = (function figwheel$tools$heads_up$format_warning_message(p__24708){
var map__24709 = p__24708;
var map__24709__$1 = ((((!((map__24709 == null)))?(((((map__24709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24709):map__24709);
var warning_data = map__24709__$1;
var message = cljs.core.get.call(null,map__24709__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__24709__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__24709__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24709__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__24711 = message;
var G__24711__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24711)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__24711);
var G__24711__$2 = (cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24711__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__24711__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24711__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__24711__$2;
}
});
figwheel.tools.heads_up.append_warning_message = (function figwheel$tools$heads_up$append_warning_message(p__24712){
var map__24713 = p__24712;
var map__24713__$1 = ((((!((map__24713 == null)))?(((((map__24713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24713):map__24713);
var warning_data = map__24713__$1;
var message = cljs.core.get.call(null,map__24713__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__24713__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__24713__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24713__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__24715 = figwheel.tools.heads_up.ensure_container.call(null);
var map__24715__$1 = ((((!((map__24715 == null)))?(((((map__24715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24715):map__24715);
var content_area_el = cljs.core.get.call(null,map__24715__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.tools.heads_up.format_line.call(null,figwheel.tools.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__5457__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__5457__auto__)){
var last_child = temp__5457__auto__;
var temp__5455__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__5455__auto__)){
var message_count = temp__5455__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1)," more warnings have not been displayed ..."].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.tools.heads_up.timeout_STAR_ = (function figwheel$tools$heads_up$timeout_STAR_(time_ms){
return (new goog.Promise((function (resolve,_){
return setTimeout((function (){
return resolve.call(null,true);
}),time_ms);
})));
});
figwheel.tools.heads_up.clear = (function figwheel$tools$heads_up$clear(){
var c = figwheel.tools.heads_up.ensure_container.call(null);
return (new goog.Promise(((function (c){
return (function (r,_){
figwheel.tools.heads_up.set_style_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.0"], null));

return r.call(null,true);
});})(c))
)).then(((function (c){
return (function (_){
return figwheel.tools.heads_up.timeout_STAR_.call(null,(300));
});})(c))
).then(((function (c){
return (function (_){
return figwheel.tools.heads_up.set_style_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"auto",new cljs.core.Keyword(null,"height","height",1025178622),"0px",new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),"0px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 10px 0px 70px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"0px",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"transparent"], null));
});})(c))
).then(((function (c){
return (function (_){
return figwheel.tools.heads_up.timeout_STAR_.call(null,(200));
});})(c))
).then(((function (c){
return (function (_){
return figwheel.tools.heads_up.set_content_BANG_.call(null,c,"");
});})(c))
);
});
figwheel.tools.heads_up.display_loaded_start = (function figwheel$tools$heads_up$display_loaded_start(){
return figwheel.tools.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.tools.heads_up.flash_loaded = (function figwheel$tools$heads_up$flash_loaded(){
return figwheel.tools.heads_up.display_loaded_start.call(null).then((function (_){
return figwheel.tools.heads_up.timeout_STAR_.call(null,(400));
})).then((function (_){
return figwheel.tools.heads_up.clear.call(null);
}));
});
figwheel.tools.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.tools.heads_up.close_bad_compile_screen = (function figwheel$tools$heads_up$close_bad_compile_screen(){
var temp__5457__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.tools.heads_up.bad_compile_screen = (function figwheel$tools$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.tools.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": ["background-color: rgba(24, 26, 38, 0.95);","position: absolute;","z-index: 9000;","width: 100vw;","height: 100vh;","top: 0px; left: 0px;","font-family: monospace"].join('')}),goog.dom.createDom("div",({"class": "message", "style": ["color: #FFF5DB;","width: 100vw;","margin: auto;","margin-top: 10px;","text-align: center; ","padding: 2px 0px;","font-size: 13px;","position: relative"].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.tools.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map
