// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__39210__delegate = function (x__39194__auto__){
if(cljs.core.truth_(oma_projekti.core.mount_root)){
return cljs.core.apply.call(null,oma_projekti.core.mount_root,x__39194__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","oma-projekti.core/mount-root","' is missing"].join(''));
}
};
var G__39210 = function (var_args){
var x__39194__auto__ = null;
if (arguments.length > 0) {
var G__39211__i = 0, G__39211__a = new Array(arguments.length -  0);
while (G__39211__i < G__39211__a.length) {G__39211__a[G__39211__i] = arguments[G__39211__i + 0]; ++G__39211__i;}
  x__39194__auto__ = new cljs.core.IndexedSeq(G__39211__a,0,null);
} 
return G__39210__delegate.call(this,x__39194__auto__);};
G__39210.cljs$lang$maxFixedArity = 0;
G__39210.cljs$lang$applyTo = (function (arglist__39212){
var x__39194__auto__ = cljs.core.seq(arglist__39212);
return G__39210__delegate(x__39194__auto__);
});
G__39210.cljs$core$IFn$_invoke$arity$variadic = G__39210__delegate;
return G__39210;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1668256489521
