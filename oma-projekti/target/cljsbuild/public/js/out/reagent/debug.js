// Compiled by ClojureScript 1.11.54 {:optimizations :none}
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
(o.warn = (function() { 
var G__28864__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28864 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28865__i = 0, G__28865__a = new Array(arguments.length -  0);
while (G__28865__i < G__28865__a.length) {G__28865__a[G__28865__i] = arguments[G__28865__i + 0]; ++G__28865__i;}
  args = new cljs.core.IndexedSeq(G__28865__a,0,null);
} 
return G__28864__delegate.call(this,args);};
G__28864.cljs$lang$maxFixedArity = 0;
G__28864.cljs$lang$applyTo = (function (arglist__28866){
var args = cljs.core.seq(arglist__28866);
return G__28864__delegate(args);
});
G__28864.cljs$core$IFn$_invoke$arity$variadic = G__28864__delegate;
return G__28864;
})()
);

(o.error = (function() { 
var G__28867__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28867 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28868__i = 0, G__28868__a = new Array(arguments.length -  0);
while (G__28868__i < G__28868__a.length) {G__28868__a[G__28868__i] = arguments[G__28868__i + 0]; ++G__28868__i;}
  args = new cljs.core.IndexedSeq(G__28868__a,0,null);
} 
return G__28867__delegate.call(this,args);};
G__28867.cljs$lang$maxFixedArity = 0;
G__28867.cljs$lang$applyTo = (function (arglist__28869){
var args = cljs.core.seq(arglist__28869);
return G__28867__delegate(args);
});
G__28867.cljs$core$IFn$_invoke$arity$variadic = G__28867__delegate;
return G__28867;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1668256482959
