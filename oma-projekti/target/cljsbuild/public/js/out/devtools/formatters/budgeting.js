// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__29837__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__29837__auto__["add"]).call(o__29837__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__29837__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__29837__auto__["delete"]).call(o__29837__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__29837__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__29837__auto__["has"]).call(o__29837__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__32374 = data;
var target__29842__auto__ = G__32374;
if(cljs.core.truth_(target__29842__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32374)].join(''),"\n","target__29842__auto__"].join('')));
}

(target__29842__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__32374;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_32379 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_32379);
} else {
var seq__32375_32380 = cljs.core.seq.call(null,json_ml);
var chunk__32376_32381 = null;
var count__32377_32382 = (0);
var i__32378_32383 = (0);
while(true){
if((i__32378_32383 < count__32377_32382)){
var item_32384 = cljs.core._nth.call(null,chunk__32376_32381,i__32378_32383);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_32384,new_depth_budget_32379);


var G__32385 = seq__32375_32380;
var G__32386 = chunk__32376_32381;
var G__32387 = count__32377_32382;
var G__32388 = (i__32378_32383 + (1));
seq__32375_32380 = G__32385;
chunk__32376_32381 = G__32386;
count__32377_32382 = G__32387;
i__32378_32383 = G__32388;
continue;
} else {
var temp__5804__auto___32389 = cljs.core.seq.call(null,seq__32375_32380);
if(temp__5804__auto___32389){
var seq__32375_32390__$1 = temp__5804__auto___32389;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32375_32390__$1)){
var c__5565__auto___32391 = cljs.core.chunk_first.call(null,seq__32375_32390__$1);
var G__32392 = cljs.core.chunk_rest.call(null,seq__32375_32390__$1);
var G__32393 = c__5565__auto___32391;
var G__32394 = cljs.core.count.call(null,c__5565__auto___32391);
var G__32395 = (0);
seq__32375_32380 = G__32392;
chunk__32376_32381 = G__32393;
count__32377_32382 = G__32394;
i__32378_32383 = G__32395;
continue;
} else {
var item_32396 = cljs.core.first.call(null,seq__32375_32390__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_32396,new_depth_budget_32379);


var G__32397 = cljs.core.next.call(null,seq__32375_32390__$1);
var G__32398 = null;
var G__32399 = (0);
var G__32400 = (0);
seq__32375_32380 = G__32397;
chunk__32376_32381 = G__32398;
count__32377_32382 = G__32399;
i__32378_32383 = G__32400;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5802__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5802__auto__)){
var initial_hierarchy_depth_budget = temp__5802__auto__;
var remaining_depth_budget = (function (){var or__5043__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map?rel=1668256485991
