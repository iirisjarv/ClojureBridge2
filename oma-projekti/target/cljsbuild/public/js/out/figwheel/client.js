// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
goog.require('goog.object');
goog.scope(function(){
figwheel.client.goog$module$goog$object = goog.module.get('goog.object');
});
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e38723){if((e38723 instanceof Error)){
var e = e38723;
return "Error: Unable to stringify";
} else {
throw e38723;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38726 = arguments.length;
switch (G__38726) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38724_SHARP_){
if(typeof p1__38724_SHARP_ === 'string'){
return p1__38724_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38724_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38729 = arguments.length;
var i__5767__auto___38730 = (0);
while(true){
if((i__5767__auto___38730 < len__5766__auto___38729)){
args__5772__auto__.push((arguments[i__5767__auto___38730]));

var G__38731 = (i__5767__auto___38730 + (1));
i__5767__auto___38730 = G__38731;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38728){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38728));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38733 = arguments.length;
var i__5767__auto___38734 = (0);
while(true){
if((i__5767__auto___38734 < len__5766__auto___38733)){
args__5772__auto__.push((arguments[i__5767__auto___38734]));

var G__38735 = (i__5767__auto___38734 + (1));
i__5767__auto___38734 = G__38735;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38732){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38732));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38736){
var map__38737 = p__38736;
var map__38737__$1 = cljs.core.__destructure_map.call(null,map__38737);
var message = cljs.core.get.call(null,map__38737__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38737__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__5043__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__5041__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__5041__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__5041__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33896__auto___38815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_38787){
var state_val_38788 = (state_38787[(1)]);
if((state_val_38788 === (7))){
var inst_38783 = (state_38787[(2)]);
var state_38787__$1 = state_38787;
var statearr_38789_38816 = state_38787__$1;
(statearr_38789_38816[(2)] = inst_38783);

(statearr_38789_38816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38788 === (1))){
var state_38787__$1 = state_38787;
var statearr_38790_38817 = state_38787__$1;
(statearr_38790_38817[(2)] = null);

(statearr_38790_38817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38788 === (4))){
var inst_38740 = (state_38787[(7)]);
var inst_38740__$1 = (state_38787[(2)]);
var state_38787__$1 = (function (){var statearr_38791 = state_38787;
(statearr_38791[(7)] = inst_38740__$1);

return statearr_38791;
})();
if(cljs.core.truth_(inst_38740__$1)){
var statearr_38792_38818 = state_38787__$1;
(statearr_38792_38818[(1)] = (5));

} else {
var statearr_38793_38819 = state_38787__$1;
(statearr_38793_38819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38788 === (15))){
var inst_38747 = (state_38787[(8)]);
var inst_38762 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38747);
var inst_38763 = cljs.core.first.call(null,inst_38762);
var inst_38764 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38763);
var inst_38765 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38764)].join('');
var inst_38766 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38765);
var state_38787__$1 = state_38787;
var statearr_38794_38820 = state_38787__$1;
(statearr_38794_38820[(2)] = inst_38766);

(statearr_38794_38820[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38788 === (13))){
var inst_38771 = (state_38787[(2)]);
var state_38787__$1 = state_38787;
var statearr_38795_38821 = state_38787__$1;
(statearr_38795_38821[(2)] = inst_38771);

(statearr_38795_38821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38788 === (6))){
var state_38787__$1 = state_38787;
var statearr_38796_38822 = state_38787__$1;
(statearr_38796_38822[(2)] = null);

(statearr_38796_38822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38788 === (17))){
var inst_38769 = (state_38787[(2)]);
var state_38787__$1 = state_38787;
var statearr_38797_38823 = state_38787__$1;
(statearr_38797_38823[(2)] = inst_38769);

(statearr_38797_38823[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38788 === (3))){
var inst_38785 = (state_38787[(2)]);
var state_38787__$1 = state_38787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38787__$1,inst_38785);
} else {
if((state_val_38788 === (12))){
var inst_38746 = (state_38787[(9)]);
var inst_38760 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38746,opts);
var state_38787__$1 = state_38787;
if(inst_38760){
var statearr_38798_38824 = state_38787__$1;
(statearr_38798_38824[(1)] = (15));

} else {
var statearr_38799_38825 = state_38787__$1;
(statearr_38799_38825[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38788 === (2))){
var state_38787__$1 = state_38787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38787__$1,(4),ch);
} else {
if((state_val_38788 === (11))){
var inst_38747 = (state_38787[(8)]);
var inst_38752 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38753 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38747);
var inst_38754 = cljs.core.async.timeout.call(null,(1000));
var inst_38755 = [inst_38753,inst_38754];
var inst_38756 = (new cljs.core.PersistentVector(null,2,(5),inst_38752,inst_38755,null));
var state_38787__$1 = state_38787;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38787__$1,(14),inst_38756);
} else {
if((state_val_38788 === (9))){
var inst_38747 = (state_38787[(8)]);
var inst_38773 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38774 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38747);
var inst_38775 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38774);
var inst_38776 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38775)].join('');
var inst_38777 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38776);
var state_38787__$1 = (function (){var statearr_38800 = state_38787;
(statearr_38800[(10)] = inst_38773);

return statearr_38800;
})();
var statearr_38801_38826 = state_38787__$1;
(statearr_38801_38826[(2)] = inst_38777);

(statearr_38801_38826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38788 === (5))){
var inst_38740 = (state_38787[(7)]);
var inst_38742 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38743 = (new cljs.core.PersistentArrayMap(null,2,inst_38742,null));
var inst_38744 = (new cljs.core.PersistentHashSet(null,inst_38743,null));
var inst_38745 = figwheel.client.focus_msgs.call(null,inst_38744,inst_38740);
var inst_38746 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38745);
var inst_38747 = cljs.core.first.call(null,inst_38745);
var inst_38748 = figwheel.client.autoload_QMARK_.call(null);
var state_38787__$1 = (function (){var statearr_38802 = state_38787;
(statearr_38802[(9)] = inst_38746);

(statearr_38802[(8)] = inst_38747);

return statearr_38802;
})();
if(cljs.core.truth_(inst_38748)){
var statearr_38803_38827 = state_38787__$1;
(statearr_38803_38827[(1)] = (8));

} else {
var statearr_38804_38828 = state_38787__$1;
(statearr_38804_38828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38788 === (14))){
var inst_38758 = (state_38787[(2)]);
var state_38787__$1 = state_38787;
var statearr_38805_38829 = state_38787__$1;
(statearr_38805_38829[(2)] = inst_38758);

(statearr_38805_38829[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38788 === (16))){
var state_38787__$1 = state_38787;
var statearr_38806_38830 = state_38787__$1;
(statearr_38806_38830[(2)] = null);

(statearr_38806_38830[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38788 === (10))){
var inst_38779 = (state_38787[(2)]);
var state_38787__$1 = (function (){var statearr_38807 = state_38787;
(statearr_38807[(11)] = inst_38779);

return statearr_38807;
})();
var statearr_38808_38831 = state_38787__$1;
(statearr_38808_38831[(2)] = null);

(statearr_38808_38831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38788 === (8))){
var inst_38746 = (state_38787[(9)]);
var inst_38750 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38746,opts);
var state_38787__$1 = state_38787;
if(cljs.core.truth_(inst_38750)){
var statearr_38809_38832 = state_38787__$1;
(statearr_38809_38832[(1)] = (11));

} else {
var statearr_38810_38833 = state_38787__$1;
(statearr_38810_38833[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33800__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33800__auto____0 = (function (){
var statearr_38811 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38811[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33800__auto__);

(statearr_38811[(1)] = (1));

return statearr_38811;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33800__auto____1 = (function (state_38787){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_38787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e38812){if((e38812 instanceof Object)){
var ex__33803__auto__ = e38812;
var statearr_38813_38834 = state_38787;
(statearr_38813_38834[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38835 = state_38787;
state_38787 = G__38835;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33800__auto__ = function(state_38787){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33800__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33800__auto____1.call(this,state_38787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33800__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33800__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_38814 = f__33897__auto__.call(null);
(statearr_38814[(6)] = c__33896__auto___38815);

return statearr_38814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38836_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38836_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38842 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38838 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38839 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38840 = true;
var _STAR_print_fn_STAR__temp_val__38841 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38840);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38841);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38839);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38838);
}}catch (e38837){if((e38837 instanceof Error)){
var e = e38837;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38842], null));
} else {
var e = e38837;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38843){
var map__38844 = p__38843;
var map__38844__$1 = cljs.core.__destructure_map.call(null,map__38844);
var opts = map__38844__$1;
var build_id = cljs.core.get.call(null,map__38844__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__38845){
var vec__38846 = p__38845;
var seq__38847 = cljs.core.seq.call(null,vec__38846);
var first__38848 = cljs.core.first.call(null,seq__38847);
var seq__38847__$1 = cljs.core.next.call(null,seq__38847);
var map__38849 = first__38848;
var map__38849__$1 = cljs.core.__destructure_map.call(null,map__38849);
var msg = map__38849__$1;
var msg_name = cljs.core.get.call(null,map__38849__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38847__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38850){
var vec__38851 = p__38850;
var seq__38852 = cljs.core.seq.call(null,vec__38851);
var first__38853 = cljs.core.first.call(null,seq__38852);
var seq__38852__$1 = cljs.core.next.call(null,seq__38852);
var map__38854 = first__38853;
var map__38854__$1 = cljs.core.__destructure_map.call(null,map__38854);
var msg = map__38854__$1;
var msg_name = cljs.core.get.call(null,map__38854__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38852__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38855){
var map__38856 = p__38855;
var map__38856__$1 = cljs.core.__destructure_map.call(null,map__38856);
var on_compile_warning = cljs.core.get.call(null,map__38856__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38856__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__38857){
var vec__38858 = p__38857;
var seq__38859 = cljs.core.seq.call(null,vec__38858);
var first__38860 = cljs.core.first.call(null,seq__38859);
var seq__38859__$1 = cljs.core.next.call(null,seq__38859);
var map__38861 = first__38860;
var map__38861__$1 = cljs.core.__destructure_map.call(null,map__38861);
var msg = map__38861__$1;
var msg_name = cljs.core.get.call(null,map__38861__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38859__$1;
var pred__38862 = cljs.core._EQ_;
var expr__38863 = msg_name;
if(cljs.core.truth_(pred__38862.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38863))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38862.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38863))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33896__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_38952){
var state_val_38953 = (state_38952[(1)]);
if((state_val_38953 === (7))){
var inst_38872 = (state_38952[(2)]);
var state_38952__$1 = state_38952;
if(cljs.core.truth_(inst_38872)){
var statearr_38954_39001 = state_38952__$1;
(statearr_38954_39001[(1)] = (8));

} else {
var statearr_38955_39002 = state_38952__$1;
(statearr_38955_39002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (20))){
var inst_38946 = (state_38952[(2)]);
var state_38952__$1 = state_38952;
var statearr_38956_39003 = state_38952__$1;
(statearr_38956_39003[(2)] = inst_38946);

(statearr_38956_39003[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (27))){
var inst_38942 = (state_38952[(2)]);
var state_38952__$1 = state_38952;
var statearr_38957_39004 = state_38952__$1;
(statearr_38957_39004[(2)] = inst_38942);

(statearr_38957_39004[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (1))){
var inst_38865 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38952__$1 = state_38952;
if(cljs.core.truth_(inst_38865)){
var statearr_38958_39005 = state_38952__$1;
(statearr_38958_39005[(1)] = (2));

} else {
var statearr_38959_39006 = state_38952__$1;
(statearr_38959_39006[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (24))){
var inst_38944 = (state_38952[(2)]);
var state_38952__$1 = state_38952;
var statearr_38960_39007 = state_38952__$1;
(statearr_38960_39007[(2)] = inst_38944);

(statearr_38960_39007[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (4))){
var inst_38950 = (state_38952[(2)]);
var state_38952__$1 = state_38952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38952__$1,inst_38950);
} else {
if((state_val_38953 === (15))){
var inst_38948 = (state_38952[(2)]);
var state_38952__$1 = state_38952;
var statearr_38961_39008 = state_38952__$1;
(statearr_38961_39008[(2)] = inst_38948);

(statearr_38961_39008[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (21))){
var inst_38901 = (state_38952[(2)]);
var inst_38902 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38903 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38902);
var state_38952__$1 = (function (){var statearr_38962 = state_38952;
(statearr_38962[(7)] = inst_38901);

return statearr_38962;
})();
var statearr_38963_39009 = state_38952__$1;
(statearr_38963_39009[(2)] = inst_38903);

(statearr_38963_39009[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (31))){
var inst_38931 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38952__$1 = state_38952;
if(inst_38931){
var statearr_38964_39010 = state_38952__$1;
(statearr_38964_39010[(1)] = (34));

} else {
var statearr_38965_39011 = state_38952__$1;
(statearr_38965_39011[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (32))){
var inst_38940 = (state_38952[(2)]);
var state_38952__$1 = state_38952;
var statearr_38966_39012 = state_38952__$1;
(statearr_38966_39012[(2)] = inst_38940);

(statearr_38966_39012[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (33))){
var inst_38927 = (state_38952[(2)]);
var inst_38928 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38929 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38928);
var state_38952__$1 = (function (){var statearr_38967 = state_38952;
(statearr_38967[(8)] = inst_38927);

return statearr_38967;
})();
var statearr_38968_39013 = state_38952__$1;
(statearr_38968_39013[(2)] = inst_38929);

(statearr_38968_39013[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (13))){
var inst_38886 = figwheel.client.heads_up.clear.call(null);
var state_38952__$1 = state_38952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38952__$1,(16),inst_38886);
} else {
if((state_val_38953 === (22))){
var inst_38907 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38908 = figwheel.client.heads_up.append_warning_message.call(null,inst_38907);
var state_38952__$1 = state_38952;
var statearr_38969_39014 = state_38952__$1;
(statearr_38969_39014[(2)] = inst_38908);

(statearr_38969_39014[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (36))){
var inst_38938 = (state_38952[(2)]);
var state_38952__$1 = state_38952;
var statearr_38970_39015 = state_38952__$1;
(statearr_38970_39015[(2)] = inst_38938);

(statearr_38970_39015[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (29))){
var inst_38918 = (state_38952[(2)]);
var inst_38919 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38920 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38919);
var state_38952__$1 = (function (){var statearr_38971 = state_38952;
(statearr_38971[(9)] = inst_38918);

return statearr_38971;
})();
var statearr_38972_39016 = state_38952__$1;
(statearr_38972_39016[(2)] = inst_38920);

(statearr_38972_39016[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (6))){
var inst_38867 = (state_38952[(10)]);
var state_38952__$1 = state_38952;
var statearr_38973_39017 = state_38952__$1;
(statearr_38973_39017[(2)] = inst_38867);

(statearr_38973_39017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (28))){
var inst_38914 = (state_38952[(2)]);
var inst_38915 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38916 = figwheel.client.heads_up.display_warning.call(null,inst_38915);
var state_38952__$1 = (function (){var statearr_38974 = state_38952;
(statearr_38974[(11)] = inst_38914);

return statearr_38974;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38952__$1,(29),inst_38916);
} else {
if((state_val_38953 === (25))){
var inst_38912 = figwheel.client.heads_up.clear.call(null);
var state_38952__$1 = state_38952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38952__$1,(28),inst_38912);
} else {
if((state_val_38953 === (34))){
var inst_38933 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38952__$1 = state_38952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38952__$1,(37),inst_38933);
} else {
if((state_val_38953 === (17))){
var inst_38892 = (state_38952[(2)]);
var inst_38893 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38894 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38893);
var state_38952__$1 = (function (){var statearr_38975 = state_38952;
(statearr_38975[(12)] = inst_38892);

return statearr_38975;
})();
var statearr_38976_39018 = state_38952__$1;
(statearr_38976_39018[(2)] = inst_38894);

(statearr_38976_39018[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (3))){
var inst_38884 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38952__$1 = state_38952;
if(inst_38884){
var statearr_38977_39019 = state_38952__$1;
(statearr_38977_39019[(1)] = (13));

} else {
var statearr_38978_39020 = state_38952__$1;
(statearr_38978_39020[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (12))){
var inst_38880 = (state_38952[(2)]);
var state_38952__$1 = state_38952;
var statearr_38979_39021 = state_38952__$1;
(statearr_38979_39021[(2)] = inst_38880);

(statearr_38979_39021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (2))){
var inst_38867 = (state_38952[(10)]);
var inst_38867__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38952__$1 = (function (){var statearr_38980 = state_38952;
(statearr_38980[(10)] = inst_38867__$1);

return statearr_38980;
})();
if(cljs.core.truth_(inst_38867__$1)){
var statearr_38981_39022 = state_38952__$1;
(statearr_38981_39022[(1)] = (5));

} else {
var statearr_38982_39023 = state_38952__$1;
(statearr_38982_39023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (23))){
var inst_38910 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38952__$1 = state_38952;
if(inst_38910){
var statearr_38983_39024 = state_38952__$1;
(statearr_38983_39024[(1)] = (25));

} else {
var statearr_38984_39025 = state_38952__$1;
(statearr_38984_39025[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (35))){
var state_38952__$1 = state_38952;
var statearr_38985_39026 = state_38952__$1;
(statearr_38985_39026[(2)] = null);

(statearr_38985_39026[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (19))){
var inst_38905 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38952__$1 = state_38952;
if(inst_38905){
var statearr_38986_39027 = state_38952__$1;
(statearr_38986_39027[(1)] = (22));

} else {
var statearr_38987_39028 = state_38952__$1;
(statearr_38987_39028[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (11))){
var inst_38876 = (state_38952[(2)]);
var state_38952__$1 = state_38952;
var statearr_38988_39029 = state_38952__$1;
(statearr_38988_39029[(2)] = inst_38876);

(statearr_38988_39029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (9))){
var inst_38878 = figwheel.client.heads_up.clear.call(null);
var state_38952__$1 = state_38952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38952__$1,(12),inst_38878);
} else {
if((state_val_38953 === (5))){
var inst_38869 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38952__$1 = state_38952;
var statearr_38989_39030 = state_38952__$1;
(statearr_38989_39030[(2)] = inst_38869);

(statearr_38989_39030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (14))){
var inst_38896 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38952__$1 = state_38952;
if(inst_38896){
var statearr_38990_39031 = state_38952__$1;
(statearr_38990_39031[(1)] = (18));

} else {
var statearr_38991_39032 = state_38952__$1;
(statearr_38991_39032[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (26))){
var inst_38922 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38952__$1 = state_38952;
if(inst_38922){
var statearr_38992_39033 = state_38952__$1;
(statearr_38992_39033[(1)] = (30));

} else {
var statearr_38993_39034 = state_38952__$1;
(statearr_38993_39034[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (16))){
var inst_38888 = (state_38952[(2)]);
var inst_38889 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38890 = figwheel.client.heads_up.display_exception.call(null,inst_38889);
var state_38952__$1 = (function (){var statearr_38994 = state_38952;
(statearr_38994[(13)] = inst_38888);

return statearr_38994;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38952__$1,(17),inst_38890);
} else {
if((state_val_38953 === (30))){
var inst_38924 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38925 = figwheel.client.heads_up.display_warning.call(null,inst_38924);
var state_38952__$1 = state_38952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38952__$1,(33),inst_38925);
} else {
if((state_val_38953 === (10))){
var inst_38882 = (state_38952[(2)]);
var state_38952__$1 = state_38952;
var statearr_38995_39035 = state_38952__$1;
(statearr_38995_39035[(2)] = inst_38882);

(statearr_38995_39035[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (18))){
var inst_38898 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38899 = figwheel.client.heads_up.display_exception.call(null,inst_38898);
var state_38952__$1 = state_38952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38952__$1,(21),inst_38899);
} else {
if((state_val_38953 === (37))){
var inst_38935 = (state_38952[(2)]);
var state_38952__$1 = state_38952;
var statearr_38996_39036 = state_38952__$1;
(statearr_38996_39036[(2)] = inst_38935);

(statearr_38996_39036[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (8))){
var inst_38874 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38952__$1 = state_38952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38952__$1,(11),inst_38874);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33800__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33800__auto____0 = (function (){
var statearr_38997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38997[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33800__auto__);

(statearr_38997[(1)] = (1));

return statearr_38997;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33800__auto____1 = (function (state_38952){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_38952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e38998){if((e38998 instanceof Object)){
var ex__33803__auto__ = e38998;
var statearr_38999_39037 = state_38952;
(statearr_38999_39037[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39038 = state_38952;
state_38952 = G__39038;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33800__auto__ = function(state_38952){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33800__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33800__auto____1.call(this,state_38952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33800__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33800__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_39000 = f__33897__auto__.call(null);
(statearr_39000[(6)] = c__33896__auto__);

return statearr_39000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));

return c__33896__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33896__auto___39067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_39053){
var state_val_39054 = (state_39053[(1)]);
if((state_val_39054 === (1))){
var state_39053__$1 = state_39053;
var statearr_39055_39068 = state_39053__$1;
(statearr_39055_39068[(2)] = null);

(statearr_39055_39068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39054 === (2))){
var state_39053__$1 = state_39053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39053__$1,(4),ch);
} else {
if((state_val_39054 === (3))){
var inst_39051 = (state_39053[(2)]);
var state_39053__$1 = state_39053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39053__$1,inst_39051);
} else {
if((state_val_39054 === (4))){
var inst_39041 = (state_39053[(7)]);
var inst_39041__$1 = (state_39053[(2)]);
var state_39053__$1 = (function (){var statearr_39056 = state_39053;
(statearr_39056[(7)] = inst_39041__$1);

return statearr_39056;
})();
if(cljs.core.truth_(inst_39041__$1)){
var statearr_39057_39069 = state_39053__$1;
(statearr_39057_39069[(1)] = (5));

} else {
var statearr_39058_39070 = state_39053__$1;
(statearr_39058_39070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39054 === (5))){
var inst_39041 = (state_39053[(7)]);
var inst_39043 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39041);
var state_39053__$1 = state_39053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39053__$1,(8),inst_39043);
} else {
if((state_val_39054 === (6))){
var state_39053__$1 = state_39053;
var statearr_39059_39071 = state_39053__$1;
(statearr_39059_39071[(2)] = null);

(statearr_39059_39071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39054 === (7))){
var inst_39049 = (state_39053[(2)]);
var state_39053__$1 = state_39053;
var statearr_39060_39072 = state_39053__$1;
(statearr_39060_39072[(2)] = inst_39049);

(statearr_39060_39072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39054 === (8))){
var inst_39045 = (state_39053[(2)]);
var state_39053__$1 = (function (){var statearr_39061 = state_39053;
(statearr_39061[(8)] = inst_39045);

return statearr_39061;
})();
var statearr_39062_39073 = state_39053__$1;
(statearr_39062_39073[(2)] = null);

(statearr_39062_39073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33800__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33800__auto____0 = (function (){
var statearr_39063 = [null,null,null,null,null,null,null,null,null];
(statearr_39063[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33800__auto__);

(statearr_39063[(1)] = (1));

return statearr_39063;
});
var figwheel$client$heads_up_plugin_$_state_machine__33800__auto____1 = (function (state_39053){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_39053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e39064){if((e39064 instanceof Object)){
var ex__33803__auto__ = e39064;
var statearr_39065_39074 = state_39053;
(statearr_39065_39074[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39075 = state_39053;
state_39053 = G__39075;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33800__auto__ = function(state_39053){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33800__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33800__auto____1.call(this,state_39053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33800__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33800__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_39066 = f__33897__auto__.call(null);
(statearr_39066[(6)] = c__33896__auto___39067);

return statearr_39066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33896__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_39081){
var state_val_39082 = (state_39081[(1)]);
if((state_val_39082 === (1))){
var inst_39076 = cljs.core.async.timeout.call(null,(3000));
var state_39081__$1 = state_39081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39081__$1,(2),inst_39076);
} else {
if((state_val_39082 === (2))){
var inst_39078 = (state_39081[(2)]);
var inst_39079 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39081__$1 = (function (){var statearr_39083 = state_39081;
(statearr_39083[(7)] = inst_39078);

return statearr_39083;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39081__$1,inst_39079);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33800__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33800__auto____0 = (function (){
var statearr_39084 = [null,null,null,null,null,null,null,null];
(statearr_39084[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33800__auto__);

(statearr_39084[(1)] = (1));

return statearr_39084;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33800__auto____1 = (function (state_39081){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_39081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e39085){if((e39085 instanceof Object)){
var ex__33803__auto__ = e39085;
var statearr_39086_39088 = state_39081;
(statearr_39086_39088[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39089 = state_39081;
state_39081 = G__39089;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33800__auto__ = function(state_39081){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33800__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33800__auto____1.call(this,state_39081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33800__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33800__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_39087 = f__33897__auto__.call(null);
(statearr_39087[(6)] = c__33896__auto__);

return statearr_39087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));

return c__33896__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5804__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5804__auto__)){
var figwheel_version = temp__5804__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33896__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_39096){
var state_val_39097 = (state_39096[(1)]);
if((state_val_39097 === (1))){
var inst_39090 = cljs.core.async.timeout.call(null,(2000));
var state_39096__$1 = state_39096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39096__$1,(2),inst_39090);
} else {
if((state_val_39097 === (2))){
var inst_39092 = (state_39096[(2)]);
var inst_39093 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39094 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39093);
var state_39096__$1 = (function (){var statearr_39098 = state_39096;
(statearr_39098[(7)] = inst_39092);

return statearr_39098;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39096__$1,inst_39094);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33800__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33800__auto____0 = (function (){
var statearr_39099 = [null,null,null,null,null,null,null,null];
(statearr_39099[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33800__auto__);

(statearr_39099[(1)] = (1));

return statearr_39099;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33800__auto____1 = (function (state_39096){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_39096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e39100){if((e39100 instanceof Object)){
var ex__33803__auto__ = e39100;
var statearr_39101_39103 = state_39096;
(statearr_39101_39103[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39104 = state_39096;
state_39096 = G__39104;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33800__auto__ = function(state_39096){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33800__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33800__auto____1.call(this,state_39096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33800__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33800__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_39102 = f__33897__auto__.call(null);
(statearr_39102[(6)] = c__33896__auto__);

return statearr_39102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));

return c__33896__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39105){
var map__39106 = p__39105;
var map__39106__$1 = cljs.core.__destructure_map.call(null,map__39106);
var file = cljs.core.get.call(null,map__39106__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39106__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39106__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39107 = "";
var G__39107__$1 = (cljs.core.truth_(file)?[G__39107,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39107);
var G__39107__$2 = (cljs.core.truth_(line)?[G__39107__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39107__$1);
if(cljs.core.truth_((function (){var and__5041__auto__ = line;
if(cljs.core.truth_(and__5041__auto__)){
return column;
} else {
return and__5041__auto__;
}
})())){
return [G__39107__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39107__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39108){
var map__39109 = p__39108;
var map__39109__$1 = cljs.core.__destructure_map.call(null,map__39109);
var ed = map__39109__$1;
var exception_data = cljs.core.get.call(null,map__39109__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39109__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_39111 = (function (){var G__39110 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39110)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__39110;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_39111);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39112){
var map__39113 = p__39112;
var map__39113__$1 = cljs.core.__destructure_map.call(null,map__39113);
var w = map__39113__$1;
var message = cljs.core.get.call(null,map__39113__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target\\cljsbuild\\public\\js\\out\\figwheel\\client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target\\cljsbuild\\public\\js\\out\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__5041__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__5041__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__5041__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39114 = cljs.core.seq.call(null,plugins);
var chunk__39115 = null;
var count__39116 = (0);
var i__39117 = (0);
while(true){
if((i__39117 < count__39116)){
var vec__39124 = cljs.core._nth.call(null,chunk__39115,i__39117);
var k = cljs.core.nth.call(null,vec__39124,(0),null);
var plugin = cljs.core.nth.call(null,vec__39124,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39130 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39114,chunk__39115,count__39116,i__39117,pl_39130,vec__39124,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39130.call(null,msg_hist);
});})(seq__39114,chunk__39115,count__39116,i__39117,pl_39130,vec__39124,k,plugin))
);
} else {
}


var G__39131 = seq__39114;
var G__39132 = chunk__39115;
var G__39133 = count__39116;
var G__39134 = (i__39117 + (1));
seq__39114 = G__39131;
chunk__39115 = G__39132;
count__39116 = G__39133;
i__39117 = G__39134;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__39114);
if(temp__5804__auto__){
var seq__39114__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39114__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__39114__$1);
var G__39135 = cljs.core.chunk_rest.call(null,seq__39114__$1);
var G__39136 = c__5565__auto__;
var G__39137 = cljs.core.count.call(null,c__5565__auto__);
var G__39138 = (0);
seq__39114 = G__39135;
chunk__39115 = G__39136;
count__39116 = G__39137;
i__39117 = G__39138;
continue;
} else {
var vec__39127 = cljs.core.first.call(null,seq__39114__$1);
var k = cljs.core.nth.call(null,vec__39127,(0),null);
var plugin = cljs.core.nth.call(null,vec__39127,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39139 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39114,chunk__39115,count__39116,i__39117,pl_39139,vec__39127,k,plugin,seq__39114__$1,temp__5804__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39139.call(null,msg_hist);
});})(seq__39114,chunk__39115,count__39116,i__39117,pl_39139,vec__39127,k,plugin,seq__39114__$1,temp__5804__auto__))
);
} else {
}


var G__39140 = cljs.core.next.call(null,seq__39114__$1);
var G__39141 = null;
var G__39142 = (0);
var G__39143 = (0);
seq__39114 = G__39140;
chunk__39115 = G__39141;
count__39116 = G__39142;
i__39117 = G__39143;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__39145 = arguments.length;
switch (G__39145) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__39146_39151 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39147_39152 = null;
var count__39148_39153 = (0);
var i__39149_39154 = (0);
while(true){
if((i__39149_39154 < count__39148_39153)){
var msg_39155 = cljs.core._nth.call(null,chunk__39147_39152,i__39149_39154);
figwheel.client.socket.handle_incoming_message.call(null,msg_39155);


var G__39156 = seq__39146_39151;
var G__39157 = chunk__39147_39152;
var G__39158 = count__39148_39153;
var G__39159 = (i__39149_39154 + (1));
seq__39146_39151 = G__39156;
chunk__39147_39152 = G__39157;
count__39148_39153 = G__39158;
i__39149_39154 = G__39159;
continue;
} else {
var temp__5804__auto___39160 = cljs.core.seq.call(null,seq__39146_39151);
if(temp__5804__auto___39160){
var seq__39146_39161__$1 = temp__5804__auto___39160;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39146_39161__$1)){
var c__5565__auto___39162 = cljs.core.chunk_first.call(null,seq__39146_39161__$1);
var G__39163 = cljs.core.chunk_rest.call(null,seq__39146_39161__$1);
var G__39164 = c__5565__auto___39162;
var G__39165 = cljs.core.count.call(null,c__5565__auto___39162);
var G__39166 = (0);
seq__39146_39151 = G__39163;
chunk__39147_39152 = G__39164;
count__39148_39153 = G__39165;
i__39149_39154 = G__39166;
continue;
} else {
var msg_39167 = cljs.core.first.call(null,seq__39146_39161__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39167);


var G__39168 = cljs.core.next.call(null,seq__39146_39161__$1);
var G__39169 = null;
var G__39170 = (0);
var G__39171 = (0);
seq__39146_39151 = G__39168;
chunk__39147_39152 = G__39169;
count__39148_39153 = G__39170;
i__39149_39154 = G__39171;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__5772__auto__ = [];
var len__5766__auto___39175 = arguments.length;
var i__5767__auto___39176 = (0);
while(true){
if((i__5767__auto___39176 < len__5766__auto___39175)){
args__5772__auto__.push((arguments[i__5767__auto___39176]));

var G__39177 = (i__5767__auto___39176 + (1));
i__5767__auto___39176 = G__39177;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39173){
var map__39174 = p__39173;
var map__39174__$1 = cljs.core.__destructure_map.call(null,map__39174);
var opts = map__39174__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39172){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39172));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,figwheel.client.goog$module$goog$object.get.call(null,window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39178){if((e39178 instanceof Error)){
var e = e39178;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39178;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__39179){
var map__39180 = p__39179;
var map__39180__$1 = cljs.core.__destructure_map.call(null,map__39180);
var msg_name = cljs.core.get.call(null,map__39180__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1668256489457
