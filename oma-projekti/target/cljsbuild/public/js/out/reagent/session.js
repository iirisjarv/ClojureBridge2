// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof reagent !== 'undefined') && (typeof reagent.session !== 'undefined') && (typeof reagent.session.state !== 'undefined')){
} else {
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__5772__auto__ = [];
var len__5766__auto___29405 = arguments.length;
var i__5767__auto___29406 = (0);
while(true){
if((i__5767__auto___29406 < len__5766__auto___29405)){
args__5772__auto__.push((arguments[i__5767__auto___29406]));

var G__29407 = (i__5767__auto___29406 + (1));
i__5767__auto___29406 = G__29407;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__29401){
var vec__29402 = p__29401;
var default$ = cljs.core.nth.call(null,vec__29402,(0),null);
var temp_a = cljs.core.deref.call(null,reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)));
if((!((temp_a == null)))){
return temp_a;
} else {
return default$;
}
}));

(reagent.session.get.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get.cljs$lang$applyTo = (function (seq29399){
var G__29400 = cljs.core.first.call(null,seq29399);
var seq29399__$1 = cljs.core.next.call(null,seq29399);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29400,seq29399__$1);
}));

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__5772__auto__ = [];
var len__5766__auto___29414 = arguments.length;
var i__5767__auto___29415 = (0);
while(true){
if((i__5767__auto___29415 < len__5766__auto___29414)){
args__5772__auto__.push((arguments[i__5767__auto___29415]));

var G__29416 = (i__5767__auto___29415 + (1));
i__5767__auto___29415 = G__29416;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__29410){
var vec__29411 = p__29410;
var default$ = cljs.core.nth.call(null,vec__29411,(0),null);
var result = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if((!((result == null)))){
return result;
} else {
return default$;
}
}));

(reagent.session.get_in.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_in.cljs$lang$applyTo = (function (seq29408){
var G__29409 = cljs.core.first.call(null,seq29408);
var seq29408__$1 = cljs.core.next.call(null,seq29408);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29409,seq29408__$1);
}));

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___29419 = arguments.length;
var i__5767__auto___29420 = (0);
while(true){
if((i__5767__auto___29420 < len__5766__auto___29419)){
args__5772__auto__.push((arguments[i__5767__auto___29420]));

var G__29421 = (i__5767__auto___29420 + (1));
i__5767__auto___29420 = G__29421;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
}));

(reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq29417){
var G__29418 = cljs.core.first.call(null,seq29417);
var seq29417__$1 = cljs.core.next.call(null,seq29417);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29418,seq29417__$1);
}));

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___29428 = arguments.length;
var i__5767__auto___29429 = (0);
while(true){
if((i__5767__auto___29429 < len__5766__auto___29428)){
args__5772__auto__.push((arguments[i__5767__auto___29429]));

var G__29430 = (i__5767__auto___29429 + (1));
i__5767__auto___29429 = G__29430;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__29424){
var vec__29425 = p__29424;
var default$ = cljs.core.nth.call(null,vec__29425,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
}));

(reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq29422){
var G__29423 = cljs.core.first.call(null,seq29422);
var seq29422__$1 = cljs.core.next.call(null,seq29422);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29423,seq29422__$1);
}));

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___29437 = arguments.length;
var i__5767__auto___29438 = (0);
while(true){
if((i__5767__auto___29438 < len__5766__auto___29437)){
args__5772__auto__.push((arguments[i__5767__auto___29438]));

var G__29439 = (i__5767__auto___29438 + (1));
i__5767__auto___29438 = G__29439;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__29433){
var vec__29434 = p__29433;
var default$ = cljs.core.nth.call(null,vec__29434,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
}));

(reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq29431){
var G__29432 = cljs.core.first.call(null,seq29431);
var seq29431__$1 = cljs.core.next.call(null,seq29431);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29432,seq29431__$1);
}));

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___29444 = arguments.length;
var i__5767__auto___29445 = (0);
while(true){
if((i__5767__auto___29445 < len__5766__auto___29444)){
args__5772__auto__.push((arguments[i__5767__auto___29445]));

var G__29446 = (i__5767__auto___29445 + (1));
i__5767__auto___29445 = G__29446;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__29440_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__29440_SHARP_,k,f),args);
}));
}));

(reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq29441){
var G__29442 = cljs.core.first.call(null,seq29441);
var seq29441__$1 = cljs.core.next.call(null,seq29441);
var G__29443 = cljs.core.first.call(null,seq29441__$1);
var seq29441__$2 = cljs.core.next.call(null,seq29441__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29442,G__29443,seq29441__$2);
}));

/**
 * Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___29451 = arguments.length;
var i__5767__auto___29452 = (0);
while(true){
if((i__5767__auto___29452 < len__5766__auto___29451)){
args__5772__auto__.push((arguments[i__5767__auto___29452]));

var G__29453 = (i__5767__auto___29452 + (1));
i__5767__auto___29452 = G__29453;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__29447_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__29447_SHARP_,ks,f),args);
}));
}));

(reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq29448){
var G__29449 = cljs.core.first.call(null,seq29448);
var seq29448__$1 = cljs.core.next.call(null,seq29448);
var G__29450 = cljs.core.first.call(null,seq29448__$1);
var seq29448__$2 = cljs.core.next.call(null,seq29448__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29449,G__29450,seq29448__$2);
}));


//# sourceMappingURL=session.js.map?rel=1668256483995
