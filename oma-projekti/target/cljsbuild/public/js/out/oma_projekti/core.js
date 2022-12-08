// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('oma_projekti.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('reagent.session');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('reitit.frontend');
goog.require('clerk.core');
goog.require('accountant.core');
oma_projekti.core.router = reitit.frontend.router.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/items",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"items","items",1031954938)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/:item-id",new cljs.core.Keyword(null,"item","item",249373802)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about",new cljs.core.Keyword(null,"about","about",1423892543)], null)], null));
oma_projekti.core.path_for = (function oma_projekti$core$path_for(var_args){
var args__5772__auto__ = [];
var len__5766__auto___32813 = arguments.length;
var i__5767__auto___32814 = (0);
while(true){
if((i__5767__auto___32814 < len__5766__auto___32813)){
args__5772__auto__.push((arguments[i__5767__auto___32814]));

var G__32815 = (i__5767__auto___32814 + (1));
i__5767__auto___32814 = G__32815;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return oma_projekti.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(oma_projekti.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__32809){
var vec__32810 = p__32809;
var params = cljs.core.nth.call(null,vec__32810,(0),null);
if(cljs.core.truth_(params)){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.call(null,oma_projekti.core.router,route,params));
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.call(null,oma_projekti.core.router,route));
}
}));

(oma_projekti.core.path_for.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oma_projekti.core.path_for.cljs$lang$applyTo = (function (seq32807){
var G__32808 = cljs.core.first.call(null,seq32807);
var seq32807__$1 = cljs.core.next.call(null,seq32807);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32808,seq32807__$1);
}));

oma_projekti.core.home_page = (function oma_projekti$core$home_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome to oma-projekti"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),oma_projekti.core.path_for.call(null,new cljs.core.Keyword(null,"items","items",1031954938))], null),"Items of oma-projekti"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/broken/link"], null),"Broken link"], null)], null)], null)], null);
});
});
oma_projekti.core.items_page = (function oma_projekti$core$items_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"The items of oma-projekti"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.call(null,(function (item_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),oma_projekti.core.path_for.call(null,new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item-id","item-id",-1804511607),item_id], null))], null),"Item: ",item_id], null)], null);
}),cljs.core.range.call(null,(1),(60)))], null)], null);
});
});
oma_projekti.core.item_page = (function oma_projekti$core$item_page(){
return (function (){
var routing_data = reagent.session.get.call(null,new cljs.core.Keyword(null,"route","route",329891309));
var item = cljs.core.get_in.call(null,routing_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["Item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)," of oma-projekti"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),oma_projekti.core.path_for.call(null,new cljs.core.Keyword(null,"items","items",1031954938))], null),"Back to the list of items"], null)], null)], null);
});
});
oma_projekti.core.text = reagent.core.atom.call(null,"");
oma_projekti.core.choice = reagent.core.atom.call(null,"");
oma_projekti.core.result = reagent.core.atom.call(null,"");
oma_projekti.core.send_request = (function oma_projekti$core$send_request(teksti,valinta){
cljs.core.println.call(null,"L\u00E4hetit: ",teksti,"ja",valinta);

var c__31953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__31954__auto__ = (function (){var switch__31930__auto__ = (function (state_32828){
var state_val_32829 = (state_32828[(1)]);
if((state_val_32829 === (1))){
var inst_32816 = [new cljs.core.Keyword(null,"form-params","form-params",1884296467),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"async?","async?",1523057758)];
var inst_32817 = [new cljs.core.Keyword(null,"teksti","teksti",647142377),new cljs.core.Keyword(null,"valinta","valinta",1778824689)];
var inst_32818 = [teksti,valinta];
var inst_32819 = cljs.core.PersistentHashMap.fromArrays(inst_32817,inst_32818);
var inst_32820 = [inst_32819,new cljs.core.Keyword(null,"json","json",1279968570),true];
var inst_32821 = cljs.core.PersistentHashMap.fromArrays(inst_32816,inst_32820);
var inst_32822 = cljs_http.client.post.call(null,"/formi",inst_32821);
var state_32828__$1 = state_32828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32828__$1,(2),inst_32822);
} else {
if((state_val_32829 === (2))){
var inst_32824 = (state_32828[(2)]);
var inst_32825 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_32824);
var inst_32826 = cljs.core.reset_BANG_.call(null,oma_projekti.core.result,inst_32825);
var state_32828__$1 = state_32828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32828__$1,inst_32826);
} else {
return null;
}
}
});
return (function() {
var oma_projekti$core$send_request_$_state_machine__31931__auto__ = null;
var oma_projekti$core$send_request_$_state_machine__31931__auto____0 = (function (){
var statearr_32830 = [null,null,null,null,null,null,null];
(statearr_32830[(0)] = oma_projekti$core$send_request_$_state_machine__31931__auto__);

(statearr_32830[(1)] = (1));

return statearr_32830;
});
var oma_projekti$core$send_request_$_state_machine__31931__auto____1 = (function (state_32828){
while(true){
var ret_value__31932__auto__ = (function (){try{while(true){
var result__31933__auto__ = switch__31930__auto__.call(null,state_32828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31933__auto__;
}
break;
}
}catch (e32831){if((e32831 instanceof Object)){
var ex__31934__auto__ = e32831;
var statearr_32832_32834 = state_32828;
(statearr_32832_32834[(5)] = ex__31934__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32835 = state_32828;
state_32828 = G__32835;
continue;
} else {
return ret_value__31932__auto__;
}
break;
}
});
oma_projekti$core$send_request_$_state_machine__31931__auto__ = function(state_32828){
switch(arguments.length){
case 0:
return oma_projekti$core$send_request_$_state_machine__31931__auto____0.call(this);
case 1:
return oma_projekti$core$send_request_$_state_machine__31931__auto____1.call(this,state_32828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
oma_projekti$core$send_request_$_state_machine__31931__auto__.cljs$core$IFn$_invoke$arity$0 = oma_projekti$core$send_request_$_state_machine__31931__auto____0;
oma_projekti$core$send_request_$_state_machine__31931__auto__.cljs$core$IFn$_invoke$arity$1 = oma_projekti$core$send_request_$_state_machine__31931__auto____1;
return oma_projekti$core$send_request_$_state_machine__31931__auto__;
})()
})();
var state__31955__auto__ = (function (){var statearr_32833 = f__31954__auto__.call(null);
(statearr_32833[(6)] = c__31953__auto__);

return statearr_32833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31955__auto__);
}));

return c__31953__auto__;
});
oma_projekti.core.about_page = (function oma_projekti$core$about_page(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"About oma-projekti"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__32836_SHARP_){
return p1__32836_SHARP_.preventDefault();
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,oma_projekti.core.text),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__32837_SHARP_){
return cljs.core.reset_BANG_.call(null,oma_projekti.core.text,p1__32837_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__32838_SHARP_){
return cljs.core.reset_BANG_.call(null,oma_projekti.core.choice,p1__32838_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"name","name",1843675177),"case",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"lower","lower",1120320821)], null)], null),"pienella"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"name","name",1843675177),"case",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"upper","upper",246243906)], null)], null),"isolla"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return oma_projekti.core.send_request.call(null,cljs.core.deref.call(null,oma_projekti.core.text),cljs.core.deref.call(null,oma_projekti.core.choice));
})], null),"Klikkaa!"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Teksti on: ",cljs.core.deref.call(null,oma_projekti.core.result)], null)], null);
});
});
oma_projekti.core.page_for = (function oma_projekti$core$page_for(route){
var G__32839 = route;
var G__32839__$1 = (((G__32839 instanceof cljs.core.Keyword))?G__32839.fqn:null);
switch (G__32839__$1) {
case "index":
return new cljs.core.Var(function(){return oma_projekti.core.home_page;},new cljs.core.Symbol("oma-projekti.core","home-page","oma-projekti.core/home-page",-469149644,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"oma-projekti.core","oma-projekti.core",529816269,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src\\cljs\\oma_projekti\\core.cljs",16,1,31,31,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(oma_projekti.core.home_page)?oma_projekti.core.home_page.cljs$lang$test:null)]));

break;
case "about":
return new cljs.core.Var(function(){return oma_projekti.core.about_page;},new cljs.core.Symbol("oma-projekti.core","about-page","oma-projekti.core/about-page",-1711524764,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"oma-projekti.core","oma-projekti.core",529816269,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src\\cljs\\oma_projekti\\core.cljs",17,1,71,71,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(oma_projekti.core.about_page)?oma_projekti.core.about_page.cljs$lang$test:null)]));

break;
case "items":
return new cljs.core.Var(function(){return oma_projekti.core.items_page;},new cljs.core.Symbol("oma-projekti.core","items-page","oma-projekti.core/items-page",1252758707,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"oma-projekti.core","oma-projekti.core",529816269,null),new cljs.core.Symbol(null,"items-page","items-page",-1402798074,null),"src\\cljs\\oma_projekti\\core.cljs",17,1,41,41,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(oma_projekti.core.items_page)?oma_projekti.core.items_page.cljs$lang$test:null)]));

break;
case "item":
return new cljs.core.Var(function(){return oma_projekti.core.item_page;},new cljs.core.Symbol("oma-projekti.core","item-page","oma-projekti.core/item-page",716461289,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"oma-projekti.core","oma-projekti.core",529816269,null),new cljs.core.Symbol(null,"item-page","item-page",1282130364,null),"src\\cljs\\oma_projekti\\core.cljs",16,1,51,51,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(oma_projekti.core.item_page)?oma_projekti.core.item_page.cljs$lang$test:null)]));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32839__$1)].join('')));

}
});
oma_projekti.core.current_page = (function oma_projekti$core$current_page(){
return (function (){
var page = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(reagent.session.get.call(null,new cljs.core.Keyword(null,"route","route",329891309)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),oma_projekti.core.path_for.call(null,new cljs.core.Keyword(null,"index","index",-1531685915))], null),"Home"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),oma_projekti.core.path_for.call(null,new cljs.core.Keyword(null,"about","about",1423892543))], null),"About oma-projekti"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"oma-projekti was generated by the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/reagent-project/reagent-template"], null),"Reagent Template"], null),"."], null)], null)], null);
});
});
oma_projekti.core.mount_root = (function oma_projekti$core$mount_root(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [oma_projekti.core.current_page], null),document.getElementById("app"));
});
oma_projekti.core.init_BANG_ = (function oma_projekti$core$init_BANG_(){
clerk.core.initialize_BANG_.call(null);

accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
var match = reitit.frontend.match_by_path.call(null,oma_projekti.core.router,path);
var current_page = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
var route_params = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match);
reagent.core.after_render.call(null,clerk.core.after_render_BANG_);

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),oma_projekti.core.page_for.call(null,current_page),new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));

return clerk.core.navigate_page_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$.call(null,reitit.frontend.match_by_path.call(null,oma_projekti.core.router,path));
})], null));

accountant.core.dispatch_current_BANG_.call(null);

return oma_projekti.core.mount_root.call(null);
});
oma_projekti.core.reload_BANG_ = (function oma_projekti$core$reload_BANG_(){
return oma_projekti.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1668263471554
