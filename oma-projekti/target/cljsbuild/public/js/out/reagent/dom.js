// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__36244 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__36245 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__36245);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__36246 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__36247 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__36247);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__36246);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__36244);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__36249 = arguments.length;
switch (G__36249) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__36250 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__36250,(0),null);
var callback = cljs.core.nth.call(null,vec__36250,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__36254_36270 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__36255_36271 = null;
var count__36256_36272 = (0);
var i__36257_36273 = (0);
while(true){
if((i__36257_36273 < count__36256_36272)){
var vec__36264_36274 = cljs.core._nth.call(null,chunk__36255_36271,i__36257_36273);
var container_36275 = cljs.core.nth.call(null,vec__36264_36274,(0),null);
var comp_36276 = cljs.core.nth.call(null,vec__36264_36274,(1),null);
reagent.dom.re_render_component.call(null,comp_36276,container_36275);


var G__36277 = seq__36254_36270;
var G__36278 = chunk__36255_36271;
var G__36279 = count__36256_36272;
var G__36280 = (i__36257_36273 + (1));
seq__36254_36270 = G__36277;
chunk__36255_36271 = G__36278;
count__36256_36272 = G__36279;
i__36257_36273 = G__36280;
continue;
} else {
var temp__5804__auto___36281 = cljs.core.seq.call(null,seq__36254_36270);
if(temp__5804__auto___36281){
var seq__36254_36282__$1 = temp__5804__auto___36281;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36254_36282__$1)){
var c__5565__auto___36283 = cljs.core.chunk_first.call(null,seq__36254_36282__$1);
var G__36284 = cljs.core.chunk_rest.call(null,seq__36254_36282__$1);
var G__36285 = c__5565__auto___36283;
var G__36286 = cljs.core.count.call(null,c__5565__auto___36283);
var G__36287 = (0);
seq__36254_36270 = G__36284;
chunk__36255_36271 = G__36285;
count__36256_36272 = G__36286;
i__36257_36273 = G__36287;
continue;
} else {
var vec__36267_36288 = cljs.core.first.call(null,seq__36254_36282__$1);
var container_36289 = cljs.core.nth.call(null,vec__36267_36288,(0),null);
var comp_36290 = cljs.core.nth.call(null,vec__36267_36288,(1),null);
reagent.dom.re_render_component.call(null,comp_36290,container_36289);


var G__36291 = cljs.core.next.call(null,seq__36254_36282__$1);
var G__36292 = null;
var G__36293 = (0);
var G__36294 = (0);
seq__36254_36270 = G__36291;
chunk__36255_36271 = G__36292;
count__36256_36272 = G__36293;
i__36257_36273 = G__36294;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map?rel=1668256487621
