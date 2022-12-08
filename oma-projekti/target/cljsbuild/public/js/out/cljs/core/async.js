// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33956 = arguments.length;
switch (G__33956) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33957 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33957 = (function (f,blockable,meta33958){
this.f = f;
this.blockable = blockable;
this.meta33958 = meta33958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33959,meta33958__$1){
var self__ = this;
var _33959__$1 = this;
return (new cljs.core.async.t_cljs$core$async33957(self__.f,self__.blockable,meta33958__$1));
}));

(cljs.core.async.t_cljs$core$async33957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33959){
var self__ = this;
var _33959__$1 = this;
return self__.meta33958;
}));

(cljs.core.async.t_cljs$core$async33957.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33957.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33957.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33957.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33958","meta33958",-29871073,null)], null);
}));

(cljs.core.async.t_cljs$core$async33957.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33957");

(cljs.core.async.t_cljs$core$async33957.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async33957");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33957.
 */
cljs.core.async.__GT_t_cljs$core$async33957 = (function cljs$core$async$__GT_t_cljs$core$async33957(f__$1,blockable__$1,meta33958){
return (new cljs.core.async.t_cljs$core$async33957(f__$1,blockable__$1,meta33958));
});

}

return (new cljs.core.async.t_cljs$core$async33957(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33963 = arguments.length;
switch (G__33963) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33966 = arguments.length;
switch (G__33966) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33969 = arguments.length;
switch (G__33969) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33971 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33971);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_33971);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33973 = arguments.length;
switch (G__33973) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___33975 = n;
var x_33976 = (0);
while(true){
if((x_33976 < n__5633__auto___33975)){
(a[x_33976] = (0));

var G__33977 = (x_33976 + (1));
x_33976 = G__33977;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__33978 = (i + (1));
i = G__33978;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33979 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33979 = (function (flag,meta33980){
this.flag = flag;
this.meta33980 = meta33980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33981,meta33980__$1){
var self__ = this;
var _33981__$1 = this;
return (new cljs.core.async.t_cljs$core$async33979(self__.flag,meta33980__$1));
}));

(cljs.core.async.t_cljs$core$async33979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33981){
var self__ = this;
var _33981__$1 = this;
return self__.meta33980;
}));

(cljs.core.async.t_cljs$core$async33979.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33979.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async33979.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33979.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33980","meta33980",-1729755130,null)], null);
}));

(cljs.core.async.t_cljs$core$async33979.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33979");

(cljs.core.async.t_cljs$core$async33979.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async33979");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33979.
 */
cljs.core.async.__GT_t_cljs$core$async33979 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33979(flag__$1,meta33980){
return (new cljs.core.async.t_cljs$core$async33979(flag__$1,meta33980));
});

}

return (new cljs.core.async.t_cljs$core$async33979(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33982 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33982 = (function (flag,cb,meta33983){
this.flag = flag;
this.cb = cb;
this.meta33983 = meta33983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33984,meta33983__$1){
var self__ = this;
var _33984__$1 = this;
return (new cljs.core.async.t_cljs$core$async33982(self__.flag,self__.cb,meta33983__$1));
}));

(cljs.core.async.t_cljs$core$async33982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33984){
var self__ = this;
var _33984__$1 = this;
return self__.meta33983;
}));

(cljs.core.async.t_cljs$core$async33982.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33982.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async33982.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33982.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33983","meta33983",730035025,null)], null);
}));

(cljs.core.async.t_cljs$core$async33982.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33982");

(cljs.core.async.t_cljs$core$async33982.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async33982");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33982.
 */
cljs.core.async.__GT_t_cljs$core$async33982 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33982(flag__$1,cb__$1,meta33983){
return (new cljs.core.async.t_cljs$core$async33982(flag__$1,cb__$1,meta33983));
});

}

return (new cljs.core.async.t_cljs$core$async33982(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33985_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33985_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33986_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33986_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33987 = (i + (1));
i = G__33987;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5041__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___33992 = arguments.length;
var i__5767__auto___33993 = (0);
while(true){
if((i__5767__auto___33993 < len__5766__auto___33992)){
args__5772__auto__.push((arguments[i__5767__auto___33993]));

var G__33994 = (i__5767__auto___33993 + (1));
i__5767__auto___33993 = G__33994;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33990){
var map__33991 = p__33990;
var map__33991__$1 = cljs.core.__destructure_map.call(null,map__33991);
var opts = map__33991__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33988){
var G__33989 = cljs.core.first.call(null,seq33988);
var seq33988__$1 = cljs.core.next.call(null,seq33988);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33989,seq33988__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33996 = arguments.length;
switch (G__33996) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33896__auto___34042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_34020){
var state_val_34021 = (state_34020[(1)]);
if((state_val_34021 === (7))){
var inst_34016 = (state_34020[(2)]);
var state_34020__$1 = state_34020;
var statearr_34022_34043 = state_34020__$1;
(statearr_34022_34043[(2)] = inst_34016);

(statearr_34022_34043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (1))){
var state_34020__$1 = state_34020;
var statearr_34023_34044 = state_34020__$1;
(statearr_34023_34044[(2)] = null);

(statearr_34023_34044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (4))){
var inst_33999 = (state_34020[(7)]);
var inst_33999__$1 = (state_34020[(2)]);
var inst_34000 = (inst_33999__$1 == null);
var state_34020__$1 = (function (){var statearr_34024 = state_34020;
(statearr_34024[(7)] = inst_33999__$1);

return statearr_34024;
})();
if(cljs.core.truth_(inst_34000)){
var statearr_34025_34045 = state_34020__$1;
(statearr_34025_34045[(1)] = (5));

} else {
var statearr_34026_34046 = state_34020__$1;
(statearr_34026_34046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (13))){
var state_34020__$1 = state_34020;
var statearr_34027_34047 = state_34020__$1;
(statearr_34027_34047[(2)] = null);

(statearr_34027_34047[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (6))){
var inst_33999 = (state_34020[(7)]);
var state_34020__$1 = state_34020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34020__$1,(11),to,inst_33999);
} else {
if((state_val_34021 === (3))){
var inst_34018 = (state_34020[(2)]);
var state_34020__$1 = state_34020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34020__$1,inst_34018);
} else {
if((state_val_34021 === (12))){
var state_34020__$1 = state_34020;
var statearr_34028_34048 = state_34020__$1;
(statearr_34028_34048[(2)] = null);

(statearr_34028_34048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (2))){
var state_34020__$1 = state_34020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34020__$1,(4),from);
} else {
if((state_val_34021 === (11))){
var inst_34009 = (state_34020[(2)]);
var state_34020__$1 = state_34020;
if(cljs.core.truth_(inst_34009)){
var statearr_34029_34049 = state_34020__$1;
(statearr_34029_34049[(1)] = (12));

} else {
var statearr_34030_34050 = state_34020__$1;
(statearr_34030_34050[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (9))){
var state_34020__$1 = state_34020;
var statearr_34031_34051 = state_34020__$1;
(statearr_34031_34051[(2)] = null);

(statearr_34031_34051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (5))){
var state_34020__$1 = state_34020;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34032_34052 = state_34020__$1;
(statearr_34032_34052[(1)] = (8));

} else {
var statearr_34033_34053 = state_34020__$1;
(statearr_34033_34053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (14))){
var inst_34014 = (state_34020[(2)]);
var state_34020__$1 = state_34020;
var statearr_34034_34054 = state_34020__$1;
(statearr_34034_34054[(2)] = inst_34014);

(statearr_34034_34054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (10))){
var inst_34006 = (state_34020[(2)]);
var state_34020__$1 = state_34020;
var statearr_34035_34055 = state_34020__$1;
(statearr_34035_34055[(2)] = inst_34006);

(statearr_34035_34055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (8))){
var inst_34003 = cljs.core.async.close_BANG_.call(null,to);
var state_34020__$1 = state_34020;
var statearr_34036_34056 = state_34020__$1;
(statearr_34036_34056[(2)] = inst_34003);

(statearr_34036_34056[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__33800__auto__ = null;
var cljs$core$async$state_machine__33800__auto____0 = (function (){
var statearr_34037 = [null,null,null,null,null,null,null,null];
(statearr_34037[(0)] = cljs$core$async$state_machine__33800__auto__);

(statearr_34037[(1)] = (1));

return statearr_34037;
});
var cljs$core$async$state_machine__33800__auto____1 = (function (state_34020){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_34020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e34038){if((e34038 instanceof Object)){
var ex__33803__auto__ = e34038;
var statearr_34039_34057 = state_34020;
(statearr_34039_34057[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34058 = state_34020;
state_34020 = G__34058;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$state_machine__33800__auto__ = function(state_34020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33800__auto____1.call(this,state_34020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33800__auto____0;
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33800__auto____1;
return cljs$core$async$state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_34040 = f__33897__auto__.call(null);
(statearr_34040[(6)] = c__33896__auto___34042);

return statearr_34040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__34059){
var vec__34060 = p__34059;
var v = cljs.core.nth.call(null,vec__34060,(0),null);
var p = cljs.core.nth.call(null,vec__34060,(1),null);
var job = vec__34060;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33896__auto___34231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_34067){
var state_val_34068 = (state_34067[(1)]);
if((state_val_34068 === (1))){
var state_34067__$1 = state_34067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34067__$1,(2),res,v);
} else {
if((state_val_34068 === (2))){
var inst_34064 = (state_34067[(2)]);
var inst_34065 = cljs.core.async.close_BANG_.call(null,res);
var state_34067__$1 = (function (){var statearr_34069 = state_34067;
(statearr_34069[(7)] = inst_34064);

return statearr_34069;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34067__$1,inst_34065);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0 = (function (){
var statearr_34070 = [null,null,null,null,null,null,null,null];
(statearr_34070[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__);

(statearr_34070[(1)] = (1));

return statearr_34070;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1 = (function (state_34067){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_34067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e34071){if((e34071 instanceof Object)){
var ex__33803__auto__ = e34071;
var statearr_34072_34232 = state_34067;
(statearr_34072_34232[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34233 = state_34067;
state_34067 = G__34233;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__ = function(state_34067){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1.call(this,state_34067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_34073 = f__33897__auto__.call(null);
(statearr_34073[(6)] = c__33896__auto___34231);

return statearr_34073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__34074){
var vec__34075 = p__34074;
var v = cljs.core.nth.call(null,vec__34075,(0),null);
var p = cljs.core.nth.call(null,vec__34075,(1),null);
var job = vec__34075;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__5633__auto___34234 = n;
var __34235 = (0);
while(true){
if((__34235 < n__5633__auto___34234)){
var G__34078_34236 = type;
var G__34078_34237__$1 = (((G__34078_34236 instanceof cljs.core.Keyword))?G__34078_34236.fqn:null);
switch (G__34078_34237__$1) {
case "compute":
var c__33896__auto___34239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34235,c__33896__auto___34239,G__34078_34236,G__34078_34237__$1,n__5633__auto___34234,jobs,results,process__$1,async){
return (function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = ((function (__34235,c__33896__auto___34239,G__34078_34236,G__34078_34237__$1,n__5633__auto___34234,jobs,results,process__$1,async){
return (function (state_34091){
var state_val_34092 = (state_34091[(1)]);
if((state_val_34092 === (1))){
var state_34091__$1 = state_34091;
var statearr_34093_34240 = state_34091__$1;
(statearr_34093_34240[(2)] = null);

(statearr_34093_34240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34092 === (2))){
var state_34091__$1 = state_34091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34091__$1,(4),jobs);
} else {
if((state_val_34092 === (3))){
var inst_34089 = (state_34091[(2)]);
var state_34091__$1 = state_34091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34091__$1,inst_34089);
} else {
if((state_val_34092 === (4))){
var inst_34081 = (state_34091[(2)]);
var inst_34082 = process__$1.call(null,inst_34081);
var state_34091__$1 = state_34091;
if(cljs.core.truth_(inst_34082)){
var statearr_34094_34241 = state_34091__$1;
(statearr_34094_34241[(1)] = (5));

} else {
var statearr_34095_34242 = state_34091__$1;
(statearr_34095_34242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34092 === (5))){
var state_34091__$1 = state_34091;
var statearr_34096_34243 = state_34091__$1;
(statearr_34096_34243[(2)] = null);

(statearr_34096_34243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34092 === (6))){
var state_34091__$1 = state_34091;
var statearr_34097_34244 = state_34091__$1;
(statearr_34097_34244[(2)] = null);

(statearr_34097_34244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34092 === (7))){
var inst_34087 = (state_34091[(2)]);
var state_34091__$1 = state_34091;
var statearr_34098_34245 = state_34091__$1;
(statearr_34098_34245[(2)] = inst_34087);

(statearr_34098_34245[(1)] = (3));


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
});})(__34235,c__33896__auto___34239,G__34078_34236,G__34078_34237__$1,n__5633__auto___34234,jobs,results,process__$1,async))
;
return ((function (__34235,switch__33799__auto__,c__33896__auto___34239,G__34078_34236,G__34078_34237__$1,n__5633__auto___34234,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0 = (function (){
var statearr_34099 = [null,null,null,null,null,null,null];
(statearr_34099[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__);

(statearr_34099[(1)] = (1));

return statearr_34099;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1 = (function (state_34091){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_34091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e34100){if((e34100 instanceof Object)){
var ex__33803__auto__ = e34100;
var statearr_34101_34246 = state_34091;
(statearr_34101_34246[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34247 = state_34091;
state_34091 = G__34247;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__ = function(state_34091){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1.call(this,state_34091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__;
})()
;})(__34235,switch__33799__auto__,c__33896__auto___34239,G__34078_34236,G__34078_34237__$1,n__5633__auto___34234,jobs,results,process__$1,async))
})();
var state__33898__auto__ = (function (){var statearr_34102 = f__33897__auto__.call(null);
(statearr_34102[(6)] = c__33896__auto___34239);

return statearr_34102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
});})(__34235,c__33896__auto___34239,G__34078_34236,G__34078_34237__$1,n__5633__auto___34234,jobs,results,process__$1,async))
);


break;
case "async":
var c__33896__auto___34248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34235,c__33896__auto___34248,G__34078_34236,G__34078_34237__$1,n__5633__auto___34234,jobs,results,process__$1,async){
return (function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = ((function (__34235,c__33896__auto___34248,G__34078_34236,G__34078_34237__$1,n__5633__auto___34234,jobs,results,process__$1,async){
return (function (state_34115){
var state_val_34116 = (state_34115[(1)]);
if((state_val_34116 === (1))){
var state_34115__$1 = state_34115;
var statearr_34117_34249 = state_34115__$1;
(statearr_34117_34249[(2)] = null);

(statearr_34117_34249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34116 === (2))){
var state_34115__$1 = state_34115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34115__$1,(4),jobs);
} else {
if((state_val_34116 === (3))){
var inst_34113 = (state_34115[(2)]);
var state_34115__$1 = state_34115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34115__$1,inst_34113);
} else {
if((state_val_34116 === (4))){
var inst_34105 = (state_34115[(2)]);
var inst_34106 = async.call(null,inst_34105);
var state_34115__$1 = state_34115;
if(cljs.core.truth_(inst_34106)){
var statearr_34118_34250 = state_34115__$1;
(statearr_34118_34250[(1)] = (5));

} else {
var statearr_34119_34251 = state_34115__$1;
(statearr_34119_34251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34116 === (5))){
var state_34115__$1 = state_34115;
var statearr_34120_34252 = state_34115__$1;
(statearr_34120_34252[(2)] = null);

(statearr_34120_34252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34116 === (6))){
var state_34115__$1 = state_34115;
var statearr_34121_34253 = state_34115__$1;
(statearr_34121_34253[(2)] = null);

(statearr_34121_34253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34116 === (7))){
var inst_34111 = (state_34115[(2)]);
var state_34115__$1 = state_34115;
var statearr_34122_34254 = state_34115__$1;
(statearr_34122_34254[(2)] = inst_34111);

(statearr_34122_34254[(1)] = (3));


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
});})(__34235,c__33896__auto___34248,G__34078_34236,G__34078_34237__$1,n__5633__auto___34234,jobs,results,process__$1,async))
;
return ((function (__34235,switch__33799__auto__,c__33896__auto___34248,G__34078_34236,G__34078_34237__$1,n__5633__auto___34234,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0 = (function (){
var statearr_34123 = [null,null,null,null,null,null,null];
(statearr_34123[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__);

(statearr_34123[(1)] = (1));

return statearr_34123;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1 = (function (state_34115){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_34115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e34124){if((e34124 instanceof Object)){
var ex__33803__auto__ = e34124;
var statearr_34125_34255 = state_34115;
(statearr_34125_34255[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34256 = state_34115;
state_34115 = G__34256;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__ = function(state_34115){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1.call(this,state_34115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__;
})()
;})(__34235,switch__33799__auto__,c__33896__auto___34248,G__34078_34236,G__34078_34237__$1,n__5633__auto___34234,jobs,results,process__$1,async))
})();
var state__33898__auto__ = (function (){var statearr_34126 = f__33897__auto__.call(null);
(statearr_34126[(6)] = c__33896__auto___34248);

return statearr_34126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
});})(__34235,c__33896__auto___34248,G__34078_34236,G__34078_34237__$1,n__5633__auto___34234,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34078_34237__$1)].join('')));

}

var G__34257 = (__34235 + (1));
__34235 = G__34257;
continue;
} else {
}
break;
}

var c__33896__auto___34258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_34148){
var state_val_34149 = (state_34148[(1)]);
if((state_val_34149 === (7))){
var inst_34144 = (state_34148[(2)]);
var state_34148__$1 = state_34148;
var statearr_34150_34259 = state_34148__$1;
(statearr_34150_34259[(2)] = inst_34144);

(statearr_34150_34259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34149 === (1))){
var state_34148__$1 = state_34148;
var statearr_34151_34260 = state_34148__$1;
(statearr_34151_34260[(2)] = null);

(statearr_34151_34260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34149 === (4))){
var inst_34129 = (state_34148[(7)]);
var inst_34129__$1 = (state_34148[(2)]);
var inst_34130 = (inst_34129__$1 == null);
var state_34148__$1 = (function (){var statearr_34152 = state_34148;
(statearr_34152[(7)] = inst_34129__$1);

return statearr_34152;
})();
if(cljs.core.truth_(inst_34130)){
var statearr_34153_34261 = state_34148__$1;
(statearr_34153_34261[(1)] = (5));

} else {
var statearr_34154_34262 = state_34148__$1;
(statearr_34154_34262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34149 === (6))){
var inst_34134 = (state_34148[(8)]);
var inst_34129 = (state_34148[(7)]);
var inst_34134__$1 = cljs.core.async.chan.call(null,(1));
var inst_34135 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34136 = [inst_34129,inst_34134__$1];
var inst_34137 = (new cljs.core.PersistentVector(null,2,(5),inst_34135,inst_34136,null));
var state_34148__$1 = (function (){var statearr_34155 = state_34148;
(statearr_34155[(8)] = inst_34134__$1);

return statearr_34155;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34148__$1,(8),jobs,inst_34137);
} else {
if((state_val_34149 === (3))){
var inst_34146 = (state_34148[(2)]);
var state_34148__$1 = state_34148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34148__$1,inst_34146);
} else {
if((state_val_34149 === (2))){
var state_34148__$1 = state_34148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34148__$1,(4),from);
} else {
if((state_val_34149 === (9))){
var inst_34141 = (state_34148[(2)]);
var state_34148__$1 = (function (){var statearr_34156 = state_34148;
(statearr_34156[(9)] = inst_34141);

return statearr_34156;
})();
var statearr_34157_34263 = state_34148__$1;
(statearr_34157_34263[(2)] = null);

(statearr_34157_34263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34149 === (5))){
var inst_34132 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34148__$1 = state_34148;
var statearr_34158_34264 = state_34148__$1;
(statearr_34158_34264[(2)] = inst_34132);

(statearr_34158_34264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34149 === (8))){
var inst_34134 = (state_34148[(8)]);
var inst_34139 = (state_34148[(2)]);
var state_34148__$1 = (function (){var statearr_34159 = state_34148;
(statearr_34159[(10)] = inst_34139);

return statearr_34159;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34148__$1,(9),results,inst_34134);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0 = (function (){
var statearr_34160 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34160[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__);

(statearr_34160[(1)] = (1));

return statearr_34160;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1 = (function (state_34148){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_34148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e34161){if((e34161 instanceof Object)){
var ex__33803__auto__ = e34161;
var statearr_34162_34265 = state_34148;
(statearr_34162_34265[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34266 = state_34148;
state_34148 = G__34266;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__ = function(state_34148){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1.call(this,state_34148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_34163 = f__33897__auto__.call(null);
(statearr_34163[(6)] = c__33896__auto___34258);

return statearr_34163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));


var c__33896__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_34201){
var state_val_34202 = (state_34201[(1)]);
if((state_val_34202 === (7))){
var inst_34197 = (state_34201[(2)]);
var state_34201__$1 = state_34201;
var statearr_34203_34267 = state_34201__$1;
(statearr_34203_34267[(2)] = inst_34197);

(statearr_34203_34267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34202 === (20))){
var state_34201__$1 = state_34201;
var statearr_34204_34268 = state_34201__$1;
(statearr_34204_34268[(2)] = null);

(statearr_34204_34268[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34202 === (1))){
var state_34201__$1 = state_34201;
var statearr_34205_34269 = state_34201__$1;
(statearr_34205_34269[(2)] = null);

(statearr_34205_34269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34202 === (4))){
var inst_34166 = (state_34201[(7)]);
var inst_34166__$1 = (state_34201[(2)]);
var inst_34167 = (inst_34166__$1 == null);
var state_34201__$1 = (function (){var statearr_34206 = state_34201;
(statearr_34206[(7)] = inst_34166__$1);

return statearr_34206;
})();
if(cljs.core.truth_(inst_34167)){
var statearr_34207_34270 = state_34201__$1;
(statearr_34207_34270[(1)] = (5));

} else {
var statearr_34208_34271 = state_34201__$1;
(statearr_34208_34271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34202 === (15))){
var inst_34179 = (state_34201[(8)]);
var state_34201__$1 = state_34201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34201__$1,(18),to,inst_34179);
} else {
if((state_val_34202 === (21))){
var inst_34192 = (state_34201[(2)]);
var state_34201__$1 = state_34201;
var statearr_34209_34272 = state_34201__$1;
(statearr_34209_34272[(2)] = inst_34192);

(statearr_34209_34272[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34202 === (13))){
var inst_34194 = (state_34201[(2)]);
var state_34201__$1 = (function (){var statearr_34210 = state_34201;
(statearr_34210[(9)] = inst_34194);

return statearr_34210;
})();
var statearr_34211_34273 = state_34201__$1;
(statearr_34211_34273[(2)] = null);

(statearr_34211_34273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34202 === (6))){
var inst_34166 = (state_34201[(7)]);
var state_34201__$1 = state_34201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34201__$1,(11),inst_34166);
} else {
if((state_val_34202 === (17))){
var inst_34187 = (state_34201[(2)]);
var state_34201__$1 = state_34201;
if(cljs.core.truth_(inst_34187)){
var statearr_34212_34274 = state_34201__$1;
(statearr_34212_34274[(1)] = (19));

} else {
var statearr_34213_34275 = state_34201__$1;
(statearr_34213_34275[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34202 === (3))){
var inst_34199 = (state_34201[(2)]);
var state_34201__$1 = state_34201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34201__$1,inst_34199);
} else {
if((state_val_34202 === (12))){
var inst_34176 = (state_34201[(10)]);
var state_34201__$1 = state_34201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34201__$1,(14),inst_34176);
} else {
if((state_val_34202 === (2))){
var state_34201__$1 = state_34201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34201__$1,(4),results);
} else {
if((state_val_34202 === (19))){
var state_34201__$1 = state_34201;
var statearr_34214_34276 = state_34201__$1;
(statearr_34214_34276[(2)] = null);

(statearr_34214_34276[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34202 === (11))){
var inst_34176 = (state_34201[(2)]);
var state_34201__$1 = (function (){var statearr_34215 = state_34201;
(statearr_34215[(10)] = inst_34176);

return statearr_34215;
})();
var statearr_34216_34277 = state_34201__$1;
(statearr_34216_34277[(2)] = null);

(statearr_34216_34277[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34202 === (9))){
var state_34201__$1 = state_34201;
var statearr_34217_34278 = state_34201__$1;
(statearr_34217_34278[(2)] = null);

(statearr_34217_34278[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34202 === (5))){
var state_34201__$1 = state_34201;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34218_34279 = state_34201__$1;
(statearr_34218_34279[(1)] = (8));

} else {
var statearr_34219_34280 = state_34201__$1;
(statearr_34219_34280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34202 === (14))){
var inst_34181 = (state_34201[(11)]);
var inst_34179 = (state_34201[(8)]);
var inst_34179__$1 = (state_34201[(2)]);
var inst_34180 = (inst_34179__$1 == null);
var inst_34181__$1 = cljs.core.not.call(null,inst_34180);
var state_34201__$1 = (function (){var statearr_34220 = state_34201;
(statearr_34220[(11)] = inst_34181__$1);

(statearr_34220[(8)] = inst_34179__$1);

return statearr_34220;
})();
if(inst_34181__$1){
var statearr_34221_34281 = state_34201__$1;
(statearr_34221_34281[(1)] = (15));

} else {
var statearr_34222_34282 = state_34201__$1;
(statearr_34222_34282[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34202 === (16))){
var inst_34181 = (state_34201[(11)]);
var state_34201__$1 = state_34201;
var statearr_34223_34283 = state_34201__$1;
(statearr_34223_34283[(2)] = inst_34181);

(statearr_34223_34283[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34202 === (10))){
var inst_34173 = (state_34201[(2)]);
var state_34201__$1 = state_34201;
var statearr_34224_34284 = state_34201__$1;
(statearr_34224_34284[(2)] = inst_34173);

(statearr_34224_34284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34202 === (18))){
var inst_34184 = (state_34201[(2)]);
var state_34201__$1 = state_34201;
var statearr_34225_34285 = state_34201__$1;
(statearr_34225_34285[(2)] = inst_34184);

(statearr_34225_34285[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34202 === (8))){
var inst_34170 = cljs.core.async.close_BANG_.call(null,to);
var state_34201__$1 = state_34201;
var statearr_34226_34286 = state_34201__$1;
(statearr_34226_34286[(2)] = inst_34170);

(statearr_34226_34286[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0 = (function (){
var statearr_34227 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34227[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__);

(statearr_34227[(1)] = (1));

return statearr_34227;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1 = (function (state_34201){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_34201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e34228){if((e34228 instanceof Object)){
var ex__33803__auto__ = e34228;
var statearr_34229_34287 = state_34201;
(statearr_34229_34287[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34288 = state_34201;
state_34201 = G__34288;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__ = function(state_34201){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1.call(this,state_34201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_34230 = f__33897__auto__.call(null);
(statearr_34230[(6)] = c__33896__auto__);

return statearr_34230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));

return c__33896__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34290 = arguments.length;
switch (G__34290) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34293 = arguments.length;
switch (G__34293) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34296 = arguments.length;
switch (G__34296) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33896__auto___34345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_34322){
var state_val_34323 = (state_34322[(1)]);
if((state_val_34323 === (7))){
var inst_34318 = (state_34322[(2)]);
var state_34322__$1 = state_34322;
var statearr_34324_34346 = state_34322__$1;
(statearr_34324_34346[(2)] = inst_34318);

(statearr_34324_34346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (1))){
var state_34322__$1 = state_34322;
var statearr_34325_34347 = state_34322__$1;
(statearr_34325_34347[(2)] = null);

(statearr_34325_34347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (4))){
var inst_34299 = (state_34322[(7)]);
var inst_34299__$1 = (state_34322[(2)]);
var inst_34300 = (inst_34299__$1 == null);
var state_34322__$1 = (function (){var statearr_34326 = state_34322;
(statearr_34326[(7)] = inst_34299__$1);

return statearr_34326;
})();
if(cljs.core.truth_(inst_34300)){
var statearr_34327_34348 = state_34322__$1;
(statearr_34327_34348[(1)] = (5));

} else {
var statearr_34328_34349 = state_34322__$1;
(statearr_34328_34349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (13))){
var state_34322__$1 = state_34322;
var statearr_34329_34350 = state_34322__$1;
(statearr_34329_34350[(2)] = null);

(statearr_34329_34350[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (6))){
var inst_34299 = (state_34322[(7)]);
var inst_34305 = p.call(null,inst_34299);
var state_34322__$1 = state_34322;
if(cljs.core.truth_(inst_34305)){
var statearr_34330_34351 = state_34322__$1;
(statearr_34330_34351[(1)] = (9));

} else {
var statearr_34331_34352 = state_34322__$1;
(statearr_34331_34352[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (3))){
var inst_34320 = (state_34322[(2)]);
var state_34322__$1 = state_34322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34322__$1,inst_34320);
} else {
if((state_val_34323 === (12))){
var state_34322__$1 = state_34322;
var statearr_34332_34353 = state_34322__$1;
(statearr_34332_34353[(2)] = null);

(statearr_34332_34353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (2))){
var state_34322__$1 = state_34322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34322__$1,(4),ch);
} else {
if((state_val_34323 === (11))){
var inst_34299 = (state_34322[(7)]);
var inst_34309 = (state_34322[(2)]);
var state_34322__$1 = state_34322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34322__$1,(8),inst_34309,inst_34299);
} else {
if((state_val_34323 === (9))){
var state_34322__$1 = state_34322;
var statearr_34333_34354 = state_34322__$1;
(statearr_34333_34354[(2)] = tc);

(statearr_34333_34354[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (5))){
var inst_34302 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34303 = cljs.core.async.close_BANG_.call(null,fc);
var state_34322__$1 = (function (){var statearr_34334 = state_34322;
(statearr_34334[(8)] = inst_34302);

return statearr_34334;
})();
var statearr_34335_34355 = state_34322__$1;
(statearr_34335_34355[(2)] = inst_34303);

(statearr_34335_34355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (14))){
var inst_34316 = (state_34322[(2)]);
var state_34322__$1 = state_34322;
var statearr_34336_34356 = state_34322__$1;
(statearr_34336_34356[(2)] = inst_34316);

(statearr_34336_34356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (10))){
var state_34322__$1 = state_34322;
var statearr_34337_34357 = state_34322__$1;
(statearr_34337_34357[(2)] = fc);

(statearr_34337_34357[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34323 === (8))){
var inst_34311 = (state_34322[(2)]);
var state_34322__$1 = state_34322;
if(cljs.core.truth_(inst_34311)){
var statearr_34338_34358 = state_34322__$1;
(statearr_34338_34358[(1)] = (12));

} else {
var statearr_34339_34359 = state_34322__$1;
(statearr_34339_34359[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__33800__auto__ = null;
var cljs$core$async$state_machine__33800__auto____0 = (function (){
var statearr_34340 = [null,null,null,null,null,null,null,null,null];
(statearr_34340[(0)] = cljs$core$async$state_machine__33800__auto__);

(statearr_34340[(1)] = (1));

return statearr_34340;
});
var cljs$core$async$state_machine__33800__auto____1 = (function (state_34322){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_34322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e34341){if((e34341 instanceof Object)){
var ex__33803__auto__ = e34341;
var statearr_34342_34360 = state_34322;
(statearr_34342_34360[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34361 = state_34322;
state_34322 = G__34361;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$state_machine__33800__auto__ = function(state_34322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33800__auto____1.call(this,state_34322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33800__auto____0;
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33800__auto____1;
return cljs$core$async$state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_34343 = f__33897__auto__.call(null);
(statearr_34343[(6)] = c__33896__auto___34345);

return statearr_34343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33896__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_34382){
var state_val_34383 = (state_34382[(1)]);
if((state_val_34383 === (7))){
var inst_34378 = (state_34382[(2)]);
var state_34382__$1 = state_34382;
var statearr_34384_34402 = state_34382__$1;
(statearr_34384_34402[(2)] = inst_34378);

(statearr_34384_34402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (1))){
var inst_34362 = init;
var state_34382__$1 = (function (){var statearr_34385 = state_34382;
(statearr_34385[(7)] = inst_34362);

return statearr_34385;
})();
var statearr_34386_34403 = state_34382__$1;
(statearr_34386_34403[(2)] = null);

(statearr_34386_34403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (4))){
var inst_34365 = (state_34382[(8)]);
var inst_34365__$1 = (state_34382[(2)]);
var inst_34366 = (inst_34365__$1 == null);
var state_34382__$1 = (function (){var statearr_34387 = state_34382;
(statearr_34387[(8)] = inst_34365__$1);

return statearr_34387;
})();
if(cljs.core.truth_(inst_34366)){
var statearr_34388_34404 = state_34382__$1;
(statearr_34388_34404[(1)] = (5));

} else {
var statearr_34389_34405 = state_34382__$1;
(statearr_34389_34405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (6))){
var inst_34362 = (state_34382[(7)]);
var inst_34365 = (state_34382[(8)]);
var inst_34369 = (state_34382[(9)]);
var inst_34369__$1 = f.call(null,inst_34362,inst_34365);
var inst_34370 = cljs.core.reduced_QMARK_.call(null,inst_34369__$1);
var state_34382__$1 = (function (){var statearr_34390 = state_34382;
(statearr_34390[(9)] = inst_34369__$1);

return statearr_34390;
})();
if(inst_34370){
var statearr_34391_34406 = state_34382__$1;
(statearr_34391_34406[(1)] = (8));

} else {
var statearr_34392_34407 = state_34382__$1;
(statearr_34392_34407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (3))){
var inst_34380 = (state_34382[(2)]);
var state_34382__$1 = state_34382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34382__$1,inst_34380);
} else {
if((state_val_34383 === (2))){
var state_34382__$1 = state_34382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34382__$1,(4),ch);
} else {
if((state_val_34383 === (9))){
var inst_34369 = (state_34382[(9)]);
var inst_34362 = inst_34369;
var state_34382__$1 = (function (){var statearr_34393 = state_34382;
(statearr_34393[(7)] = inst_34362);

return statearr_34393;
})();
var statearr_34394_34408 = state_34382__$1;
(statearr_34394_34408[(2)] = null);

(statearr_34394_34408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (5))){
var inst_34362 = (state_34382[(7)]);
var state_34382__$1 = state_34382;
var statearr_34395_34409 = state_34382__$1;
(statearr_34395_34409[(2)] = inst_34362);

(statearr_34395_34409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (10))){
var inst_34376 = (state_34382[(2)]);
var state_34382__$1 = state_34382;
var statearr_34396_34410 = state_34382__$1;
(statearr_34396_34410[(2)] = inst_34376);

(statearr_34396_34410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (8))){
var inst_34369 = (state_34382[(9)]);
var inst_34372 = cljs.core.deref.call(null,inst_34369);
var state_34382__$1 = state_34382;
var statearr_34397_34411 = state_34382__$1;
(statearr_34397_34411[(2)] = inst_34372);

(statearr_34397_34411[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33800__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33800__auto____0 = (function (){
var statearr_34398 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34398[(0)] = cljs$core$async$reduce_$_state_machine__33800__auto__);

(statearr_34398[(1)] = (1));

return statearr_34398;
});
var cljs$core$async$reduce_$_state_machine__33800__auto____1 = (function (state_34382){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_34382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e34399){if((e34399 instanceof Object)){
var ex__33803__auto__ = e34399;
var statearr_34400_34412 = state_34382;
(statearr_34400_34412[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34413 = state_34382;
state_34382 = G__34413;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33800__auto__ = function(state_34382){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33800__auto____1.call(this,state_34382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33800__auto____0;
cljs$core$async$reduce_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33800__auto____1;
return cljs$core$async$reduce_$_state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_34401 = f__33897__auto__.call(null);
(statearr_34401[(6)] = c__33896__auto__);

return statearr_34401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));

return c__33896__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33896__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_34419){
var state_val_34420 = (state_34419[(1)]);
if((state_val_34420 === (1))){
var inst_34414 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34419__$1 = state_34419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34419__$1,(2),inst_34414);
} else {
if((state_val_34420 === (2))){
var inst_34416 = (state_34419[(2)]);
var inst_34417 = f__$1.call(null,inst_34416);
var state_34419__$1 = state_34419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34419__$1,inst_34417);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33800__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33800__auto____0 = (function (){
var statearr_34421 = [null,null,null,null,null,null,null];
(statearr_34421[(0)] = cljs$core$async$transduce_$_state_machine__33800__auto__);

(statearr_34421[(1)] = (1));

return statearr_34421;
});
var cljs$core$async$transduce_$_state_machine__33800__auto____1 = (function (state_34419){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_34419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e34422){if((e34422 instanceof Object)){
var ex__33803__auto__ = e34422;
var statearr_34423_34425 = state_34419;
(statearr_34423_34425[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34426 = state_34419;
state_34419 = G__34426;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33800__auto__ = function(state_34419){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33800__auto____1.call(this,state_34419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33800__auto____0;
cljs$core$async$transduce_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33800__auto____1;
return cljs$core$async$transduce_$_state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_34424 = f__33897__auto__.call(null);
(statearr_34424[(6)] = c__33896__auto__);

return statearr_34424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));

return c__33896__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34428 = arguments.length;
switch (G__34428) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33896__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_34453){
var state_val_34454 = (state_34453[(1)]);
if((state_val_34454 === (7))){
var inst_34435 = (state_34453[(2)]);
var state_34453__$1 = state_34453;
var statearr_34455_34476 = state_34453__$1;
(statearr_34455_34476[(2)] = inst_34435);

(statearr_34455_34476[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (1))){
var inst_34429 = cljs.core.seq.call(null,coll);
var inst_34430 = inst_34429;
var state_34453__$1 = (function (){var statearr_34456 = state_34453;
(statearr_34456[(7)] = inst_34430);

return statearr_34456;
})();
var statearr_34457_34477 = state_34453__$1;
(statearr_34457_34477[(2)] = null);

(statearr_34457_34477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (4))){
var inst_34430 = (state_34453[(7)]);
var inst_34433 = cljs.core.first.call(null,inst_34430);
var state_34453__$1 = state_34453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34453__$1,(7),ch,inst_34433);
} else {
if((state_val_34454 === (13))){
var inst_34447 = (state_34453[(2)]);
var state_34453__$1 = state_34453;
var statearr_34458_34478 = state_34453__$1;
(statearr_34458_34478[(2)] = inst_34447);

(statearr_34458_34478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (6))){
var inst_34438 = (state_34453[(2)]);
var state_34453__$1 = state_34453;
if(cljs.core.truth_(inst_34438)){
var statearr_34459_34479 = state_34453__$1;
(statearr_34459_34479[(1)] = (8));

} else {
var statearr_34460_34480 = state_34453__$1;
(statearr_34460_34480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (3))){
var inst_34451 = (state_34453[(2)]);
var state_34453__$1 = state_34453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34453__$1,inst_34451);
} else {
if((state_val_34454 === (12))){
var state_34453__$1 = state_34453;
var statearr_34461_34481 = state_34453__$1;
(statearr_34461_34481[(2)] = null);

(statearr_34461_34481[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (2))){
var inst_34430 = (state_34453[(7)]);
var state_34453__$1 = state_34453;
if(cljs.core.truth_(inst_34430)){
var statearr_34462_34482 = state_34453__$1;
(statearr_34462_34482[(1)] = (4));

} else {
var statearr_34463_34483 = state_34453__$1;
(statearr_34463_34483[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (11))){
var inst_34444 = cljs.core.async.close_BANG_.call(null,ch);
var state_34453__$1 = state_34453;
var statearr_34464_34484 = state_34453__$1;
(statearr_34464_34484[(2)] = inst_34444);

(statearr_34464_34484[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (9))){
var state_34453__$1 = state_34453;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34465_34485 = state_34453__$1;
(statearr_34465_34485[(1)] = (11));

} else {
var statearr_34466_34486 = state_34453__$1;
(statearr_34466_34486[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (5))){
var inst_34430 = (state_34453[(7)]);
var state_34453__$1 = state_34453;
var statearr_34467_34487 = state_34453__$1;
(statearr_34467_34487[(2)] = inst_34430);

(statearr_34467_34487[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (10))){
var inst_34449 = (state_34453[(2)]);
var state_34453__$1 = state_34453;
var statearr_34468_34488 = state_34453__$1;
(statearr_34468_34488[(2)] = inst_34449);

(statearr_34468_34488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (8))){
var inst_34430 = (state_34453[(7)]);
var inst_34440 = cljs.core.next.call(null,inst_34430);
var inst_34430__$1 = inst_34440;
var state_34453__$1 = (function (){var statearr_34469 = state_34453;
(statearr_34469[(7)] = inst_34430__$1);

return statearr_34469;
})();
var statearr_34470_34489 = state_34453__$1;
(statearr_34470_34489[(2)] = null);

(statearr_34470_34489[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33800__auto__ = null;
var cljs$core$async$state_machine__33800__auto____0 = (function (){
var statearr_34471 = [null,null,null,null,null,null,null,null];
(statearr_34471[(0)] = cljs$core$async$state_machine__33800__auto__);

(statearr_34471[(1)] = (1));

return statearr_34471;
});
var cljs$core$async$state_machine__33800__auto____1 = (function (state_34453){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_34453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e34472){if((e34472 instanceof Object)){
var ex__33803__auto__ = e34472;
var statearr_34473_34490 = state_34453;
(statearr_34473_34490[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34491 = state_34453;
state_34453 = G__34491;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$state_machine__33800__auto__ = function(state_34453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33800__auto____1.call(this,state_34453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33800__auto____0;
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33800__auto____1;
return cljs$core$async$state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_34474 = f__33897__auto__.call(null);
(statearr_34474[(6)] = c__33896__auto__);

return statearr_34474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));

return c__33896__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34492 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,_);
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34492.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34493 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34493.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34494 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch);
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34494.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34495 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m);
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34495.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34496 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34496 = (function (ch,cs,meta34497){
this.ch = ch;
this.cs = cs;
this.meta34497 = meta34497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34498,meta34497__$1){
var self__ = this;
var _34498__$1 = this;
return (new cljs.core.async.t_cljs$core$async34496(self__.ch,self__.cs,meta34497__$1));
}));

(cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34498){
var self__ = this;
var _34498__$1 = this;
return self__.meta34497;
}));

(cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34496.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34497","meta34497",-398361949,null)], null);
}));

(cljs.core.async.t_cljs$core$async34496.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34496.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34496");

(cljs.core.async.t_cljs$core$async34496.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async34496");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34496.
 */
cljs.core.async.__GT_t_cljs$core$async34496 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34496(ch__$1,cs__$1,meta34497){
return (new cljs.core.async.t_cljs$core$async34496(ch__$1,cs__$1,meta34497));
});

}

return (new cljs.core.async.t_cljs$core$async34496(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__33896__auto___34718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_34633){
var state_val_34634 = (state_34633[(1)]);
if((state_val_34634 === (7))){
var inst_34629 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
var statearr_34635_34719 = state_34633__$1;
(statearr_34635_34719[(2)] = inst_34629);

(statearr_34635_34719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (20))){
var inst_34532 = (state_34633[(7)]);
var inst_34544 = cljs.core.first.call(null,inst_34532);
var inst_34545 = cljs.core.nth.call(null,inst_34544,(0),null);
var inst_34546 = cljs.core.nth.call(null,inst_34544,(1),null);
var state_34633__$1 = (function (){var statearr_34636 = state_34633;
(statearr_34636[(8)] = inst_34545);

return statearr_34636;
})();
if(cljs.core.truth_(inst_34546)){
var statearr_34637_34720 = state_34633__$1;
(statearr_34637_34720[(1)] = (22));

} else {
var statearr_34638_34721 = state_34633__$1;
(statearr_34638_34721[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (27))){
var inst_34574 = (state_34633[(9)]);
var inst_34576 = (state_34633[(10)]);
var inst_34581 = (state_34633[(11)]);
var inst_34501 = (state_34633[(12)]);
var inst_34581__$1 = cljs.core._nth.call(null,inst_34574,inst_34576);
var inst_34582 = cljs.core.async.put_BANG_.call(null,inst_34581__$1,inst_34501,done);
var state_34633__$1 = (function (){var statearr_34639 = state_34633;
(statearr_34639[(11)] = inst_34581__$1);

return statearr_34639;
})();
if(cljs.core.truth_(inst_34582)){
var statearr_34640_34722 = state_34633__$1;
(statearr_34640_34722[(1)] = (30));

} else {
var statearr_34641_34723 = state_34633__$1;
(statearr_34641_34723[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (1))){
var state_34633__$1 = state_34633;
var statearr_34642_34724 = state_34633__$1;
(statearr_34642_34724[(2)] = null);

(statearr_34642_34724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (24))){
var inst_34532 = (state_34633[(7)]);
var inst_34551 = (state_34633[(2)]);
var inst_34552 = cljs.core.next.call(null,inst_34532);
var inst_34510 = inst_34552;
var inst_34511 = null;
var inst_34512 = (0);
var inst_34513 = (0);
var state_34633__$1 = (function (){var statearr_34643 = state_34633;
(statearr_34643[(13)] = inst_34513);

(statearr_34643[(14)] = inst_34510);

(statearr_34643[(15)] = inst_34551);

(statearr_34643[(16)] = inst_34511);

(statearr_34643[(17)] = inst_34512);

return statearr_34643;
})();
var statearr_34644_34725 = state_34633__$1;
(statearr_34644_34725[(2)] = null);

(statearr_34644_34725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (39))){
var state_34633__$1 = state_34633;
var statearr_34648_34726 = state_34633__$1;
(statearr_34648_34726[(2)] = null);

(statearr_34648_34726[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (4))){
var inst_34501 = (state_34633[(12)]);
var inst_34501__$1 = (state_34633[(2)]);
var inst_34502 = (inst_34501__$1 == null);
var state_34633__$1 = (function (){var statearr_34649 = state_34633;
(statearr_34649[(12)] = inst_34501__$1);

return statearr_34649;
})();
if(cljs.core.truth_(inst_34502)){
var statearr_34650_34727 = state_34633__$1;
(statearr_34650_34727[(1)] = (5));

} else {
var statearr_34651_34728 = state_34633__$1;
(statearr_34651_34728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (15))){
var inst_34513 = (state_34633[(13)]);
var inst_34510 = (state_34633[(14)]);
var inst_34511 = (state_34633[(16)]);
var inst_34512 = (state_34633[(17)]);
var inst_34528 = (state_34633[(2)]);
var inst_34529 = (inst_34513 + (1));
var tmp34645 = inst_34510;
var tmp34646 = inst_34511;
var tmp34647 = inst_34512;
var inst_34510__$1 = tmp34645;
var inst_34511__$1 = tmp34646;
var inst_34512__$1 = tmp34647;
var inst_34513__$1 = inst_34529;
var state_34633__$1 = (function (){var statearr_34652 = state_34633;
(statearr_34652[(13)] = inst_34513__$1);

(statearr_34652[(14)] = inst_34510__$1);

(statearr_34652[(18)] = inst_34528);

(statearr_34652[(16)] = inst_34511__$1);

(statearr_34652[(17)] = inst_34512__$1);

return statearr_34652;
})();
var statearr_34653_34729 = state_34633__$1;
(statearr_34653_34729[(2)] = null);

(statearr_34653_34729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (21))){
var inst_34555 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
var statearr_34657_34730 = state_34633__$1;
(statearr_34657_34730[(2)] = inst_34555);

(statearr_34657_34730[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (31))){
var inst_34581 = (state_34633[(11)]);
var inst_34585 = done.call(null,null);
var inst_34586 = cljs.core.async.untap_STAR_.call(null,m,inst_34581);
var state_34633__$1 = (function (){var statearr_34658 = state_34633;
(statearr_34658[(19)] = inst_34585);

return statearr_34658;
})();
var statearr_34659_34731 = state_34633__$1;
(statearr_34659_34731[(2)] = inst_34586);

(statearr_34659_34731[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (32))){
var inst_34574 = (state_34633[(9)]);
var inst_34576 = (state_34633[(10)]);
var inst_34573 = (state_34633[(20)]);
var inst_34575 = (state_34633[(21)]);
var inst_34588 = (state_34633[(2)]);
var inst_34589 = (inst_34576 + (1));
var tmp34654 = inst_34574;
var tmp34655 = inst_34573;
var tmp34656 = inst_34575;
var inst_34573__$1 = tmp34655;
var inst_34574__$1 = tmp34654;
var inst_34575__$1 = tmp34656;
var inst_34576__$1 = inst_34589;
var state_34633__$1 = (function (){var statearr_34660 = state_34633;
(statearr_34660[(22)] = inst_34588);

(statearr_34660[(9)] = inst_34574__$1);

(statearr_34660[(10)] = inst_34576__$1);

(statearr_34660[(20)] = inst_34573__$1);

(statearr_34660[(21)] = inst_34575__$1);

return statearr_34660;
})();
var statearr_34661_34732 = state_34633__$1;
(statearr_34661_34732[(2)] = null);

(statearr_34661_34732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (40))){
var inst_34601 = (state_34633[(23)]);
var inst_34605 = done.call(null,null);
var inst_34606 = cljs.core.async.untap_STAR_.call(null,m,inst_34601);
var state_34633__$1 = (function (){var statearr_34662 = state_34633;
(statearr_34662[(24)] = inst_34605);

return statearr_34662;
})();
var statearr_34663_34733 = state_34633__$1;
(statearr_34663_34733[(2)] = inst_34606);

(statearr_34663_34733[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (33))){
var inst_34592 = (state_34633[(25)]);
var inst_34594 = cljs.core.chunked_seq_QMARK_.call(null,inst_34592);
var state_34633__$1 = state_34633;
if(inst_34594){
var statearr_34664_34734 = state_34633__$1;
(statearr_34664_34734[(1)] = (36));

} else {
var statearr_34665_34735 = state_34633__$1;
(statearr_34665_34735[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (13))){
var inst_34522 = (state_34633[(26)]);
var inst_34525 = cljs.core.async.close_BANG_.call(null,inst_34522);
var state_34633__$1 = state_34633;
var statearr_34666_34736 = state_34633__$1;
(statearr_34666_34736[(2)] = inst_34525);

(statearr_34666_34736[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (22))){
var inst_34545 = (state_34633[(8)]);
var inst_34548 = cljs.core.async.close_BANG_.call(null,inst_34545);
var state_34633__$1 = state_34633;
var statearr_34667_34737 = state_34633__$1;
(statearr_34667_34737[(2)] = inst_34548);

(statearr_34667_34737[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (36))){
var inst_34592 = (state_34633[(25)]);
var inst_34596 = cljs.core.chunk_first.call(null,inst_34592);
var inst_34597 = cljs.core.chunk_rest.call(null,inst_34592);
var inst_34598 = cljs.core.count.call(null,inst_34596);
var inst_34573 = inst_34597;
var inst_34574 = inst_34596;
var inst_34575 = inst_34598;
var inst_34576 = (0);
var state_34633__$1 = (function (){var statearr_34668 = state_34633;
(statearr_34668[(9)] = inst_34574);

(statearr_34668[(10)] = inst_34576);

(statearr_34668[(20)] = inst_34573);

(statearr_34668[(21)] = inst_34575);

return statearr_34668;
})();
var statearr_34669_34738 = state_34633__$1;
(statearr_34669_34738[(2)] = null);

(statearr_34669_34738[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (41))){
var inst_34592 = (state_34633[(25)]);
var inst_34608 = (state_34633[(2)]);
var inst_34609 = cljs.core.next.call(null,inst_34592);
var inst_34573 = inst_34609;
var inst_34574 = null;
var inst_34575 = (0);
var inst_34576 = (0);
var state_34633__$1 = (function (){var statearr_34670 = state_34633;
(statearr_34670[(9)] = inst_34574);

(statearr_34670[(10)] = inst_34576);

(statearr_34670[(27)] = inst_34608);

(statearr_34670[(20)] = inst_34573);

(statearr_34670[(21)] = inst_34575);

return statearr_34670;
})();
var statearr_34671_34739 = state_34633__$1;
(statearr_34671_34739[(2)] = null);

(statearr_34671_34739[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (43))){
var state_34633__$1 = state_34633;
var statearr_34672_34740 = state_34633__$1;
(statearr_34672_34740[(2)] = null);

(statearr_34672_34740[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (29))){
var inst_34617 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
var statearr_34673_34741 = state_34633__$1;
(statearr_34673_34741[(2)] = inst_34617);

(statearr_34673_34741[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (44))){
var inst_34626 = (state_34633[(2)]);
var state_34633__$1 = (function (){var statearr_34674 = state_34633;
(statearr_34674[(28)] = inst_34626);

return statearr_34674;
})();
var statearr_34675_34742 = state_34633__$1;
(statearr_34675_34742[(2)] = null);

(statearr_34675_34742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (6))){
var inst_34565 = (state_34633[(29)]);
var inst_34564 = cljs.core.deref.call(null,cs);
var inst_34565__$1 = cljs.core.keys.call(null,inst_34564);
var inst_34566 = cljs.core.count.call(null,inst_34565__$1);
var inst_34567 = cljs.core.reset_BANG_.call(null,dctr,inst_34566);
var inst_34572 = cljs.core.seq.call(null,inst_34565__$1);
var inst_34573 = inst_34572;
var inst_34574 = null;
var inst_34575 = (0);
var inst_34576 = (0);
var state_34633__$1 = (function (){var statearr_34676 = state_34633;
(statearr_34676[(30)] = inst_34567);

(statearr_34676[(9)] = inst_34574);

(statearr_34676[(10)] = inst_34576);

(statearr_34676[(29)] = inst_34565__$1);

(statearr_34676[(20)] = inst_34573);

(statearr_34676[(21)] = inst_34575);

return statearr_34676;
})();
var statearr_34677_34743 = state_34633__$1;
(statearr_34677_34743[(2)] = null);

(statearr_34677_34743[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (28))){
var inst_34573 = (state_34633[(20)]);
var inst_34592 = (state_34633[(25)]);
var inst_34592__$1 = cljs.core.seq.call(null,inst_34573);
var state_34633__$1 = (function (){var statearr_34678 = state_34633;
(statearr_34678[(25)] = inst_34592__$1);

return statearr_34678;
})();
if(inst_34592__$1){
var statearr_34679_34744 = state_34633__$1;
(statearr_34679_34744[(1)] = (33));

} else {
var statearr_34680_34745 = state_34633__$1;
(statearr_34680_34745[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (25))){
var inst_34576 = (state_34633[(10)]);
var inst_34575 = (state_34633[(21)]);
var inst_34578 = (inst_34576 < inst_34575);
var inst_34579 = inst_34578;
var state_34633__$1 = state_34633;
if(cljs.core.truth_(inst_34579)){
var statearr_34681_34746 = state_34633__$1;
(statearr_34681_34746[(1)] = (27));

} else {
var statearr_34682_34747 = state_34633__$1;
(statearr_34682_34747[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (34))){
var state_34633__$1 = state_34633;
var statearr_34683_34748 = state_34633__$1;
(statearr_34683_34748[(2)] = null);

(statearr_34683_34748[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (17))){
var state_34633__$1 = state_34633;
var statearr_34684_34749 = state_34633__$1;
(statearr_34684_34749[(2)] = null);

(statearr_34684_34749[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (3))){
var inst_34631 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34633__$1,inst_34631);
} else {
if((state_val_34634 === (12))){
var inst_34560 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
var statearr_34685_34750 = state_34633__$1;
(statearr_34685_34750[(2)] = inst_34560);

(statearr_34685_34750[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (2))){
var state_34633__$1 = state_34633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34633__$1,(4),ch);
} else {
if((state_val_34634 === (23))){
var state_34633__$1 = state_34633;
var statearr_34686_34751 = state_34633__$1;
(statearr_34686_34751[(2)] = null);

(statearr_34686_34751[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (35))){
var inst_34615 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
var statearr_34687_34752 = state_34633__$1;
(statearr_34687_34752[(2)] = inst_34615);

(statearr_34687_34752[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (19))){
var inst_34532 = (state_34633[(7)]);
var inst_34536 = cljs.core.chunk_first.call(null,inst_34532);
var inst_34537 = cljs.core.chunk_rest.call(null,inst_34532);
var inst_34538 = cljs.core.count.call(null,inst_34536);
var inst_34510 = inst_34537;
var inst_34511 = inst_34536;
var inst_34512 = inst_34538;
var inst_34513 = (0);
var state_34633__$1 = (function (){var statearr_34688 = state_34633;
(statearr_34688[(13)] = inst_34513);

(statearr_34688[(14)] = inst_34510);

(statearr_34688[(16)] = inst_34511);

(statearr_34688[(17)] = inst_34512);

return statearr_34688;
})();
var statearr_34689_34753 = state_34633__$1;
(statearr_34689_34753[(2)] = null);

(statearr_34689_34753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (11))){
var inst_34510 = (state_34633[(14)]);
var inst_34532 = (state_34633[(7)]);
var inst_34532__$1 = cljs.core.seq.call(null,inst_34510);
var state_34633__$1 = (function (){var statearr_34690 = state_34633;
(statearr_34690[(7)] = inst_34532__$1);

return statearr_34690;
})();
if(inst_34532__$1){
var statearr_34691_34754 = state_34633__$1;
(statearr_34691_34754[(1)] = (16));

} else {
var statearr_34692_34755 = state_34633__$1;
(statearr_34692_34755[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (9))){
var inst_34562 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
var statearr_34693_34756 = state_34633__$1;
(statearr_34693_34756[(2)] = inst_34562);

(statearr_34693_34756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (5))){
var inst_34508 = cljs.core.deref.call(null,cs);
var inst_34509 = cljs.core.seq.call(null,inst_34508);
var inst_34510 = inst_34509;
var inst_34511 = null;
var inst_34512 = (0);
var inst_34513 = (0);
var state_34633__$1 = (function (){var statearr_34694 = state_34633;
(statearr_34694[(13)] = inst_34513);

(statearr_34694[(14)] = inst_34510);

(statearr_34694[(16)] = inst_34511);

(statearr_34694[(17)] = inst_34512);

return statearr_34694;
})();
var statearr_34695_34757 = state_34633__$1;
(statearr_34695_34757[(2)] = null);

(statearr_34695_34757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (14))){
var state_34633__$1 = state_34633;
var statearr_34696_34758 = state_34633__$1;
(statearr_34696_34758[(2)] = null);

(statearr_34696_34758[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (45))){
var inst_34623 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
var statearr_34697_34759 = state_34633__$1;
(statearr_34697_34759[(2)] = inst_34623);

(statearr_34697_34759[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (26))){
var inst_34565 = (state_34633[(29)]);
var inst_34619 = (state_34633[(2)]);
var inst_34620 = cljs.core.seq.call(null,inst_34565);
var state_34633__$1 = (function (){var statearr_34698 = state_34633;
(statearr_34698[(31)] = inst_34619);

return statearr_34698;
})();
if(inst_34620){
var statearr_34699_34760 = state_34633__$1;
(statearr_34699_34760[(1)] = (42));

} else {
var statearr_34700_34761 = state_34633__$1;
(statearr_34700_34761[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (16))){
var inst_34532 = (state_34633[(7)]);
var inst_34534 = cljs.core.chunked_seq_QMARK_.call(null,inst_34532);
var state_34633__$1 = state_34633;
if(inst_34534){
var statearr_34701_34762 = state_34633__$1;
(statearr_34701_34762[(1)] = (19));

} else {
var statearr_34702_34763 = state_34633__$1;
(statearr_34702_34763[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (38))){
var inst_34612 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
var statearr_34703_34764 = state_34633__$1;
(statearr_34703_34764[(2)] = inst_34612);

(statearr_34703_34764[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (30))){
var state_34633__$1 = state_34633;
var statearr_34704_34765 = state_34633__$1;
(statearr_34704_34765[(2)] = null);

(statearr_34704_34765[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (10))){
var inst_34513 = (state_34633[(13)]);
var inst_34511 = (state_34633[(16)]);
var inst_34521 = cljs.core._nth.call(null,inst_34511,inst_34513);
var inst_34522 = cljs.core.nth.call(null,inst_34521,(0),null);
var inst_34523 = cljs.core.nth.call(null,inst_34521,(1),null);
var state_34633__$1 = (function (){var statearr_34705 = state_34633;
(statearr_34705[(26)] = inst_34522);

return statearr_34705;
})();
if(cljs.core.truth_(inst_34523)){
var statearr_34706_34766 = state_34633__$1;
(statearr_34706_34766[(1)] = (13));

} else {
var statearr_34707_34767 = state_34633__$1;
(statearr_34707_34767[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (18))){
var inst_34558 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
var statearr_34708_34768 = state_34633__$1;
(statearr_34708_34768[(2)] = inst_34558);

(statearr_34708_34768[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (42))){
var state_34633__$1 = state_34633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34633__$1,(45),dchan);
} else {
if((state_val_34634 === (37))){
var inst_34601 = (state_34633[(23)]);
var inst_34501 = (state_34633[(12)]);
var inst_34592 = (state_34633[(25)]);
var inst_34601__$1 = cljs.core.first.call(null,inst_34592);
var inst_34602 = cljs.core.async.put_BANG_.call(null,inst_34601__$1,inst_34501,done);
var state_34633__$1 = (function (){var statearr_34709 = state_34633;
(statearr_34709[(23)] = inst_34601__$1);

return statearr_34709;
})();
if(cljs.core.truth_(inst_34602)){
var statearr_34710_34769 = state_34633__$1;
(statearr_34710_34769[(1)] = (39));

} else {
var statearr_34711_34770 = state_34633__$1;
(statearr_34711_34770[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (8))){
var inst_34513 = (state_34633[(13)]);
var inst_34512 = (state_34633[(17)]);
var inst_34515 = (inst_34513 < inst_34512);
var inst_34516 = inst_34515;
var state_34633__$1 = state_34633;
if(cljs.core.truth_(inst_34516)){
var statearr_34712_34771 = state_34633__$1;
(statearr_34712_34771[(1)] = (10));

} else {
var statearr_34713_34772 = state_34633__$1;
(statearr_34713_34772[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__33800__auto__ = null;
var cljs$core$async$mult_$_state_machine__33800__auto____0 = (function (){
var statearr_34714 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34714[(0)] = cljs$core$async$mult_$_state_machine__33800__auto__);

(statearr_34714[(1)] = (1));

return statearr_34714;
});
var cljs$core$async$mult_$_state_machine__33800__auto____1 = (function (state_34633){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_34633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e34715){if((e34715 instanceof Object)){
var ex__33803__auto__ = e34715;
var statearr_34716_34773 = state_34633;
(statearr_34716_34773[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34774 = state_34633;
state_34633 = G__34774;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33800__auto__ = function(state_34633){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33800__auto____1.call(this,state_34633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33800__auto____0;
cljs$core$async$mult_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33800__auto____1;
return cljs$core$async$mult_$_state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_34717 = f__33897__auto__.call(null);
(statearr_34717[(6)] = c__33896__auto___34718);

return statearr_34717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34776 = arguments.length;
switch (G__34776) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34778 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch);
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34778.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34779 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch);
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34779.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34780 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m);
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34780.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34781 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,state_map);
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34781.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34782 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,mode);
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34782.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___34792 = arguments.length;
var i__5767__auto___34793 = (0);
while(true){
if((i__5767__auto___34793 < len__5766__auto___34792)){
args__5772__auto__.push((arguments[i__5767__auto___34793]));

var G__34794 = (i__5767__auto___34793 + (1));
i__5767__auto___34793 = G__34794;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34787){
var map__34788 = p__34787;
var map__34788__$1 = cljs.core.__destructure_map.call(null,map__34788);
var opts = map__34788__$1;
var statearr_34789_34795 = state;
(statearr_34789_34795[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_34790_34796 = state;
(statearr_34790_34796[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_34791_34797 = state;
(statearr_34791_34797[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34783){
var G__34784 = cljs.core.first.call(null,seq34783);
var seq34783__$1 = cljs.core.next.call(null,seq34783);
var G__34785 = cljs.core.first.call(null,seq34783__$1);
var seq34783__$2 = cljs.core.next.call(null,seq34783__$1);
var G__34786 = cljs.core.first.call(null,seq34783__$2);
var seq34783__$3 = cljs.core.next.call(null,seq34783__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34784,G__34785,G__34786,seq34783__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34798 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34798 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34799){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34799 = meta34799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34800,meta34799__$1){
var self__ = this;
var _34800__$1 = this;
return (new cljs.core.async.t_cljs$core$async34798(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34799__$1));
}));

(cljs.core.async.t_cljs$core$async34798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34800){
var self__ = this;
var _34800__$1 = this;
return self__.meta34799;
}));

(cljs.core.async.t_cljs$core$async34798.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34798.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34798.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34798.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async34798.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async34798.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async34798.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async34798.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async34798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34799","meta34799",1971139556,null)], null);
}));

(cljs.core.async.t_cljs$core$async34798.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34798");

(cljs.core.async.t_cljs$core$async34798.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async34798");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34798.
 */
cljs.core.async.__GT_t_cljs$core$async34798 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34798(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34799){
return (new cljs.core.async.t_cljs$core$async34798(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34799));
});

}

return (new cljs.core.async.t_cljs$core$async34798(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33896__auto___34912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_34868){
var state_val_34869 = (state_34868[(1)]);
if((state_val_34869 === (7))){
var inst_34828 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
if(cljs.core.truth_(inst_34828)){
var statearr_34870_34913 = state_34868__$1;
(statearr_34870_34913[(1)] = (8));

} else {
var statearr_34871_34914 = state_34868__$1;
(statearr_34871_34914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (20))){
var inst_34821 = (state_34868[(7)]);
var state_34868__$1 = state_34868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34868__$1,(23),out,inst_34821);
} else {
if((state_val_34869 === (1))){
var inst_34804 = calc_state.call(null);
var inst_34805 = cljs.core.__destructure_map.call(null,inst_34804);
var inst_34806 = cljs.core.get.call(null,inst_34805,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34807 = cljs.core.get.call(null,inst_34805,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34808 = cljs.core.get.call(null,inst_34805,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34809 = inst_34804;
var state_34868__$1 = (function (){var statearr_34872 = state_34868;
(statearr_34872[(8)] = inst_34808);

(statearr_34872[(9)] = inst_34807);

(statearr_34872[(10)] = inst_34809);

(statearr_34872[(11)] = inst_34806);

return statearr_34872;
})();
var statearr_34873_34915 = state_34868__$1;
(statearr_34873_34915[(2)] = null);

(statearr_34873_34915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (24))){
var inst_34812 = (state_34868[(12)]);
var inst_34809 = inst_34812;
var state_34868__$1 = (function (){var statearr_34874 = state_34868;
(statearr_34874[(10)] = inst_34809);

return statearr_34874;
})();
var statearr_34875_34916 = state_34868__$1;
(statearr_34875_34916[(2)] = null);

(statearr_34875_34916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (4))){
var inst_34823 = (state_34868[(13)]);
var inst_34821 = (state_34868[(7)]);
var inst_34820 = (state_34868[(2)]);
var inst_34821__$1 = cljs.core.nth.call(null,inst_34820,(0),null);
var inst_34822 = cljs.core.nth.call(null,inst_34820,(1),null);
var inst_34823__$1 = (inst_34821__$1 == null);
var state_34868__$1 = (function (){var statearr_34876 = state_34868;
(statearr_34876[(14)] = inst_34822);

(statearr_34876[(13)] = inst_34823__$1);

(statearr_34876[(7)] = inst_34821__$1);

return statearr_34876;
})();
if(cljs.core.truth_(inst_34823__$1)){
var statearr_34877_34917 = state_34868__$1;
(statearr_34877_34917[(1)] = (5));

} else {
var statearr_34878_34918 = state_34868__$1;
(statearr_34878_34918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (15))){
var inst_34813 = (state_34868[(15)]);
var inst_34842 = (state_34868[(16)]);
var inst_34842__$1 = cljs.core.empty_QMARK_.call(null,inst_34813);
var state_34868__$1 = (function (){var statearr_34879 = state_34868;
(statearr_34879[(16)] = inst_34842__$1);

return statearr_34879;
})();
if(inst_34842__$1){
var statearr_34880_34919 = state_34868__$1;
(statearr_34880_34919[(1)] = (17));

} else {
var statearr_34881_34920 = state_34868__$1;
(statearr_34881_34920[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (21))){
var inst_34812 = (state_34868[(12)]);
var inst_34809 = inst_34812;
var state_34868__$1 = (function (){var statearr_34882 = state_34868;
(statearr_34882[(10)] = inst_34809);

return statearr_34882;
})();
var statearr_34883_34921 = state_34868__$1;
(statearr_34883_34921[(2)] = null);

(statearr_34883_34921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (13))){
var inst_34835 = (state_34868[(2)]);
var inst_34836 = calc_state.call(null);
var inst_34809 = inst_34836;
var state_34868__$1 = (function (){var statearr_34884 = state_34868;
(statearr_34884[(17)] = inst_34835);

(statearr_34884[(10)] = inst_34809);

return statearr_34884;
})();
var statearr_34885_34922 = state_34868__$1;
(statearr_34885_34922[(2)] = null);

(statearr_34885_34922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (22))){
var inst_34862 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
var statearr_34886_34923 = state_34868__$1;
(statearr_34886_34923[(2)] = inst_34862);

(statearr_34886_34923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (6))){
var inst_34822 = (state_34868[(14)]);
var inst_34826 = cljs.core._EQ_.call(null,inst_34822,change);
var state_34868__$1 = state_34868;
var statearr_34887_34924 = state_34868__$1;
(statearr_34887_34924[(2)] = inst_34826);

(statearr_34887_34924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (25))){
var state_34868__$1 = state_34868;
var statearr_34888_34925 = state_34868__$1;
(statearr_34888_34925[(2)] = null);

(statearr_34888_34925[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (17))){
var inst_34822 = (state_34868[(14)]);
var inst_34814 = (state_34868[(18)]);
var inst_34844 = inst_34814.call(null,inst_34822);
var inst_34845 = cljs.core.not.call(null,inst_34844);
var state_34868__$1 = state_34868;
var statearr_34889_34926 = state_34868__$1;
(statearr_34889_34926[(2)] = inst_34845);

(statearr_34889_34926[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (3))){
var inst_34866 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34868__$1,inst_34866);
} else {
if((state_val_34869 === (12))){
var state_34868__$1 = state_34868;
var statearr_34890_34927 = state_34868__$1;
(statearr_34890_34927[(2)] = null);

(statearr_34890_34927[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (2))){
var inst_34812 = (state_34868[(12)]);
var inst_34809 = (state_34868[(10)]);
var inst_34812__$1 = cljs.core.__destructure_map.call(null,inst_34809);
var inst_34813 = cljs.core.get.call(null,inst_34812__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34814 = cljs.core.get.call(null,inst_34812__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34815 = cljs.core.get.call(null,inst_34812__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34868__$1 = (function (){var statearr_34891 = state_34868;
(statearr_34891[(15)] = inst_34813);

(statearr_34891[(12)] = inst_34812__$1);

(statearr_34891[(18)] = inst_34814);

return statearr_34891;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34868__$1,(4),inst_34815);
} else {
if((state_val_34869 === (23))){
var inst_34853 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
if(cljs.core.truth_(inst_34853)){
var statearr_34892_34928 = state_34868__$1;
(statearr_34892_34928[(1)] = (24));

} else {
var statearr_34893_34929 = state_34868__$1;
(statearr_34893_34929[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (19))){
var inst_34848 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
var statearr_34894_34930 = state_34868__$1;
(statearr_34894_34930[(2)] = inst_34848);

(statearr_34894_34930[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (11))){
var inst_34822 = (state_34868[(14)]);
var inst_34832 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34822);
var state_34868__$1 = state_34868;
var statearr_34895_34931 = state_34868__$1;
(statearr_34895_34931[(2)] = inst_34832);

(statearr_34895_34931[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (9))){
var inst_34813 = (state_34868[(15)]);
var inst_34822 = (state_34868[(14)]);
var inst_34839 = (state_34868[(19)]);
var inst_34839__$1 = inst_34813.call(null,inst_34822);
var state_34868__$1 = (function (){var statearr_34896 = state_34868;
(statearr_34896[(19)] = inst_34839__$1);

return statearr_34896;
})();
if(cljs.core.truth_(inst_34839__$1)){
var statearr_34897_34932 = state_34868__$1;
(statearr_34897_34932[(1)] = (14));

} else {
var statearr_34898_34933 = state_34868__$1;
(statearr_34898_34933[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (5))){
var inst_34823 = (state_34868[(13)]);
var state_34868__$1 = state_34868;
var statearr_34899_34934 = state_34868__$1;
(statearr_34899_34934[(2)] = inst_34823);

(statearr_34899_34934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (14))){
var inst_34839 = (state_34868[(19)]);
var state_34868__$1 = state_34868;
var statearr_34900_34935 = state_34868__$1;
(statearr_34900_34935[(2)] = inst_34839);

(statearr_34900_34935[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (26))){
var inst_34858 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
var statearr_34901_34936 = state_34868__$1;
(statearr_34901_34936[(2)] = inst_34858);

(statearr_34901_34936[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (16))){
var inst_34850 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
if(cljs.core.truth_(inst_34850)){
var statearr_34902_34937 = state_34868__$1;
(statearr_34902_34937[(1)] = (20));

} else {
var statearr_34903_34938 = state_34868__$1;
(statearr_34903_34938[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (10))){
var inst_34864 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
var statearr_34904_34939 = state_34868__$1;
(statearr_34904_34939[(2)] = inst_34864);

(statearr_34904_34939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (18))){
var inst_34842 = (state_34868[(16)]);
var state_34868__$1 = state_34868;
var statearr_34905_34940 = state_34868__$1;
(statearr_34905_34940[(2)] = inst_34842);

(statearr_34905_34940[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (8))){
var inst_34821 = (state_34868[(7)]);
var inst_34830 = (inst_34821 == null);
var state_34868__$1 = state_34868;
if(cljs.core.truth_(inst_34830)){
var statearr_34906_34941 = state_34868__$1;
(statearr_34906_34941[(1)] = (11));

} else {
var statearr_34907_34942 = state_34868__$1;
(statearr_34907_34942[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__33800__auto__ = null;
var cljs$core$async$mix_$_state_machine__33800__auto____0 = (function (){
var statearr_34908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34908[(0)] = cljs$core$async$mix_$_state_machine__33800__auto__);

(statearr_34908[(1)] = (1));

return statearr_34908;
});
var cljs$core$async$mix_$_state_machine__33800__auto____1 = (function (state_34868){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_34868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e34909){if((e34909 instanceof Object)){
var ex__33803__auto__ = e34909;
var statearr_34910_34943 = state_34868;
(statearr_34910_34943[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34944 = state_34868;
state_34868 = G__34944;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33800__auto__ = function(state_34868){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33800__auto____1.call(this,state_34868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33800__auto____0;
cljs$core$async$mix_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33800__auto____1;
return cljs$core$async$mix_$_state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_34911 = f__33897__auto__.call(null);
(statearr_34911[(6)] = c__33896__auto___34912);

return statearr_34911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34947 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34947.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34948 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p,v,ch);
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34948.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34949 = (function() {
var G__34950 = null;
var G__34950__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p);
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__34950__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p,v);
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__34950 = function(p,v){
switch(arguments.length){
case 1:
return G__34950__1.call(this,p);
case 2:
return G__34950__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34950.cljs$core$IFn$_invoke$arity$1 = G__34950__1;
G__34950.cljs$core$IFn$_invoke$arity$2 = G__34950__2;
return G__34950;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34946 = arguments.length;
switch (G__34946) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34949.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34949.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34954 = arguments.length;
switch (G__34954) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__34952_SHARP_){
if(cljs.core.truth_(p1__34952_SHARP_.call(null,topic))){
return p1__34952_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34952_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34955 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34955 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34956){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34956 = meta34956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34957,meta34956__$1){
var self__ = this;
var _34957__$1 = this;
return (new cljs.core.async.t_cljs$core$async34955(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34956__$1));
}));

(cljs.core.async.t_cljs$core$async34955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34957){
var self__ = this;
var _34957__$1 = this;
return self__.meta34956;
}));

(cljs.core.async.t_cljs$core$async34955.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34955.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34955.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34955.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34955.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34955.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34955.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34956","meta34956",665486297,null)], null);
}));

(cljs.core.async.t_cljs$core$async34955.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34955");

(cljs.core.async.t_cljs$core$async34955.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async34955");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34955.
 */
cljs.core.async.__GT_t_cljs$core$async34955 = (function cljs$core$async$__GT_t_cljs$core$async34955(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34956){
return (new cljs.core.async.t_cljs$core$async34955(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34956));
});

}

return (new cljs.core.async.t_cljs$core$async34955(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33896__auto___35075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_35029){
var state_val_35030 = (state_35029[(1)]);
if((state_val_35030 === (7))){
var inst_35025 = (state_35029[(2)]);
var state_35029__$1 = state_35029;
var statearr_35031_35076 = state_35029__$1;
(statearr_35031_35076[(2)] = inst_35025);

(statearr_35031_35076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (20))){
var state_35029__$1 = state_35029;
var statearr_35032_35077 = state_35029__$1;
(statearr_35032_35077[(2)] = null);

(statearr_35032_35077[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (1))){
var state_35029__$1 = state_35029;
var statearr_35033_35078 = state_35029__$1;
(statearr_35033_35078[(2)] = null);

(statearr_35033_35078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (24))){
var inst_35008 = (state_35029[(7)]);
var inst_35017 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35008);
var state_35029__$1 = state_35029;
var statearr_35034_35079 = state_35029__$1;
(statearr_35034_35079[(2)] = inst_35017);

(statearr_35034_35079[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (4))){
var inst_34960 = (state_35029[(8)]);
var inst_34960__$1 = (state_35029[(2)]);
var inst_34961 = (inst_34960__$1 == null);
var state_35029__$1 = (function (){var statearr_35035 = state_35029;
(statearr_35035[(8)] = inst_34960__$1);

return statearr_35035;
})();
if(cljs.core.truth_(inst_34961)){
var statearr_35036_35080 = state_35029__$1;
(statearr_35036_35080[(1)] = (5));

} else {
var statearr_35037_35081 = state_35029__$1;
(statearr_35037_35081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (15))){
var inst_35002 = (state_35029[(2)]);
var state_35029__$1 = state_35029;
var statearr_35038_35082 = state_35029__$1;
(statearr_35038_35082[(2)] = inst_35002);

(statearr_35038_35082[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (21))){
var inst_35022 = (state_35029[(2)]);
var state_35029__$1 = (function (){var statearr_35039 = state_35029;
(statearr_35039[(9)] = inst_35022);

return statearr_35039;
})();
var statearr_35040_35083 = state_35029__$1;
(statearr_35040_35083[(2)] = null);

(statearr_35040_35083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (13))){
var inst_34984 = (state_35029[(10)]);
var inst_34986 = cljs.core.chunked_seq_QMARK_.call(null,inst_34984);
var state_35029__$1 = state_35029;
if(inst_34986){
var statearr_35041_35084 = state_35029__$1;
(statearr_35041_35084[(1)] = (16));

} else {
var statearr_35042_35085 = state_35029__$1;
(statearr_35042_35085[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (22))){
var inst_35014 = (state_35029[(2)]);
var state_35029__$1 = state_35029;
if(cljs.core.truth_(inst_35014)){
var statearr_35043_35086 = state_35029__$1;
(statearr_35043_35086[(1)] = (23));

} else {
var statearr_35044_35087 = state_35029__$1;
(statearr_35044_35087[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (6))){
var inst_35008 = (state_35029[(7)]);
var inst_35010 = (state_35029[(11)]);
var inst_34960 = (state_35029[(8)]);
var inst_35008__$1 = topic_fn.call(null,inst_34960);
var inst_35009 = cljs.core.deref.call(null,mults);
var inst_35010__$1 = cljs.core.get.call(null,inst_35009,inst_35008__$1);
var state_35029__$1 = (function (){var statearr_35045 = state_35029;
(statearr_35045[(7)] = inst_35008__$1);

(statearr_35045[(11)] = inst_35010__$1);

return statearr_35045;
})();
if(cljs.core.truth_(inst_35010__$1)){
var statearr_35046_35088 = state_35029__$1;
(statearr_35046_35088[(1)] = (19));

} else {
var statearr_35047_35089 = state_35029__$1;
(statearr_35047_35089[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (25))){
var inst_35019 = (state_35029[(2)]);
var state_35029__$1 = state_35029;
var statearr_35048_35090 = state_35029__$1;
(statearr_35048_35090[(2)] = inst_35019);

(statearr_35048_35090[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (17))){
var inst_34984 = (state_35029[(10)]);
var inst_34993 = cljs.core.first.call(null,inst_34984);
var inst_34994 = cljs.core.async.muxch_STAR_.call(null,inst_34993);
var inst_34995 = cljs.core.async.close_BANG_.call(null,inst_34994);
var inst_34996 = cljs.core.next.call(null,inst_34984);
var inst_34970 = inst_34996;
var inst_34971 = null;
var inst_34972 = (0);
var inst_34973 = (0);
var state_35029__$1 = (function (){var statearr_35049 = state_35029;
(statearr_35049[(12)] = inst_34972);

(statearr_35049[(13)] = inst_34971);

(statearr_35049[(14)] = inst_34995);

(statearr_35049[(15)] = inst_34973);

(statearr_35049[(16)] = inst_34970);

return statearr_35049;
})();
var statearr_35050_35091 = state_35029__$1;
(statearr_35050_35091[(2)] = null);

(statearr_35050_35091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (3))){
var inst_35027 = (state_35029[(2)]);
var state_35029__$1 = state_35029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35029__$1,inst_35027);
} else {
if((state_val_35030 === (12))){
var inst_35004 = (state_35029[(2)]);
var state_35029__$1 = state_35029;
var statearr_35051_35092 = state_35029__$1;
(statearr_35051_35092[(2)] = inst_35004);

(statearr_35051_35092[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (2))){
var state_35029__$1 = state_35029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35029__$1,(4),ch);
} else {
if((state_val_35030 === (23))){
var state_35029__$1 = state_35029;
var statearr_35052_35093 = state_35029__$1;
(statearr_35052_35093[(2)] = null);

(statearr_35052_35093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (19))){
var inst_35010 = (state_35029[(11)]);
var inst_34960 = (state_35029[(8)]);
var inst_35012 = cljs.core.async.muxch_STAR_.call(null,inst_35010);
var state_35029__$1 = state_35029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35029__$1,(22),inst_35012,inst_34960);
} else {
if((state_val_35030 === (11))){
var inst_34970 = (state_35029[(16)]);
var inst_34984 = (state_35029[(10)]);
var inst_34984__$1 = cljs.core.seq.call(null,inst_34970);
var state_35029__$1 = (function (){var statearr_35053 = state_35029;
(statearr_35053[(10)] = inst_34984__$1);

return statearr_35053;
})();
if(inst_34984__$1){
var statearr_35054_35094 = state_35029__$1;
(statearr_35054_35094[(1)] = (13));

} else {
var statearr_35055_35095 = state_35029__$1;
(statearr_35055_35095[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (9))){
var inst_35006 = (state_35029[(2)]);
var state_35029__$1 = state_35029;
var statearr_35056_35096 = state_35029__$1;
(statearr_35056_35096[(2)] = inst_35006);

(statearr_35056_35096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (5))){
var inst_34967 = cljs.core.deref.call(null,mults);
var inst_34968 = cljs.core.vals.call(null,inst_34967);
var inst_34969 = cljs.core.seq.call(null,inst_34968);
var inst_34970 = inst_34969;
var inst_34971 = null;
var inst_34972 = (0);
var inst_34973 = (0);
var state_35029__$1 = (function (){var statearr_35057 = state_35029;
(statearr_35057[(12)] = inst_34972);

(statearr_35057[(13)] = inst_34971);

(statearr_35057[(15)] = inst_34973);

(statearr_35057[(16)] = inst_34970);

return statearr_35057;
})();
var statearr_35058_35097 = state_35029__$1;
(statearr_35058_35097[(2)] = null);

(statearr_35058_35097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (14))){
var state_35029__$1 = state_35029;
var statearr_35062_35098 = state_35029__$1;
(statearr_35062_35098[(2)] = null);

(statearr_35062_35098[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (16))){
var inst_34984 = (state_35029[(10)]);
var inst_34988 = cljs.core.chunk_first.call(null,inst_34984);
var inst_34989 = cljs.core.chunk_rest.call(null,inst_34984);
var inst_34990 = cljs.core.count.call(null,inst_34988);
var inst_34970 = inst_34989;
var inst_34971 = inst_34988;
var inst_34972 = inst_34990;
var inst_34973 = (0);
var state_35029__$1 = (function (){var statearr_35063 = state_35029;
(statearr_35063[(12)] = inst_34972);

(statearr_35063[(13)] = inst_34971);

(statearr_35063[(15)] = inst_34973);

(statearr_35063[(16)] = inst_34970);

return statearr_35063;
})();
var statearr_35064_35099 = state_35029__$1;
(statearr_35064_35099[(2)] = null);

(statearr_35064_35099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (10))){
var inst_34972 = (state_35029[(12)]);
var inst_34971 = (state_35029[(13)]);
var inst_34973 = (state_35029[(15)]);
var inst_34970 = (state_35029[(16)]);
var inst_34978 = cljs.core._nth.call(null,inst_34971,inst_34973);
var inst_34979 = cljs.core.async.muxch_STAR_.call(null,inst_34978);
var inst_34980 = cljs.core.async.close_BANG_.call(null,inst_34979);
var inst_34981 = (inst_34973 + (1));
var tmp35059 = inst_34972;
var tmp35060 = inst_34971;
var tmp35061 = inst_34970;
var inst_34970__$1 = tmp35061;
var inst_34971__$1 = tmp35060;
var inst_34972__$1 = tmp35059;
var inst_34973__$1 = inst_34981;
var state_35029__$1 = (function (){var statearr_35065 = state_35029;
(statearr_35065[(12)] = inst_34972__$1);

(statearr_35065[(13)] = inst_34971__$1);

(statearr_35065[(17)] = inst_34980);

(statearr_35065[(15)] = inst_34973__$1);

(statearr_35065[(16)] = inst_34970__$1);

return statearr_35065;
})();
var statearr_35066_35100 = state_35029__$1;
(statearr_35066_35100[(2)] = null);

(statearr_35066_35100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (18))){
var inst_34999 = (state_35029[(2)]);
var state_35029__$1 = state_35029;
var statearr_35067_35101 = state_35029__$1;
(statearr_35067_35101[(2)] = inst_34999);

(statearr_35067_35101[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (8))){
var inst_34972 = (state_35029[(12)]);
var inst_34973 = (state_35029[(15)]);
var inst_34975 = (inst_34973 < inst_34972);
var inst_34976 = inst_34975;
var state_35029__$1 = state_35029;
if(cljs.core.truth_(inst_34976)){
var statearr_35068_35102 = state_35029__$1;
(statearr_35068_35102[(1)] = (10));

} else {
var statearr_35069_35103 = state_35029__$1;
(statearr_35069_35103[(1)] = (11));

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
var cljs$core$async$state_machine__33800__auto__ = null;
var cljs$core$async$state_machine__33800__auto____0 = (function (){
var statearr_35070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35070[(0)] = cljs$core$async$state_machine__33800__auto__);

(statearr_35070[(1)] = (1));

return statearr_35070;
});
var cljs$core$async$state_machine__33800__auto____1 = (function (state_35029){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_35029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e35071){if((e35071 instanceof Object)){
var ex__33803__auto__ = e35071;
var statearr_35072_35104 = state_35029;
(statearr_35072_35104[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35105 = state_35029;
state_35029 = G__35105;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$state_machine__33800__auto__ = function(state_35029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33800__auto____1.call(this,state_35029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33800__auto____0;
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33800__auto____1;
return cljs$core$async$state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_35073 = f__33897__auto__.call(null);
(statearr_35073[(6)] = c__33896__auto___35075);

return statearr_35073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35107 = arguments.length;
switch (G__35107) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35110 = arguments.length;
switch (G__35110) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35113 = arguments.length;
switch (G__35113) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__33896__auto___35180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_35152){
var state_val_35153 = (state_35152[(1)]);
if((state_val_35153 === (7))){
var state_35152__$1 = state_35152;
var statearr_35154_35181 = state_35152__$1;
(statearr_35154_35181[(2)] = null);

(statearr_35154_35181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35153 === (1))){
var state_35152__$1 = state_35152;
var statearr_35155_35182 = state_35152__$1;
(statearr_35155_35182[(2)] = null);

(statearr_35155_35182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35153 === (4))){
var inst_35116 = (state_35152[(7)]);
var inst_35118 = (inst_35116 < cnt);
var state_35152__$1 = state_35152;
if(cljs.core.truth_(inst_35118)){
var statearr_35156_35183 = state_35152__$1;
(statearr_35156_35183[(1)] = (6));

} else {
var statearr_35157_35184 = state_35152__$1;
(statearr_35157_35184[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35153 === (15))){
var inst_35148 = (state_35152[(2)]);
var state_35152__$1 = state_35152;
var statearr_35158_35185 = state_35152__$1;
(statearr_35158_35185[(2)] = inst_35148);

(statearr_35158_35185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35153 === (13))){
var inst_35141 = cljs.core.async.close_BANG_.call(null,out);
var state_35152__$1 = state_35152;
var statearr_35159_35186 = state_35152__$1;
(statearr_35159_35186[(2)] = inst_35141);

(statearr_35159_35186[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35153 === (6))){
var state_35152__$1 = state_35152;
var statearr_35160_35187 = state_35152__$1;
(statearr_35160_35187[(2)] = null);

(statearr_35160_35187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35153 === (3))){
var inst_35150 = (state_35152[(2)]);
var state_35152__$1 = state_35152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35152__$1,inst_35150);
} else {
if((state_val_35153 === (12))){
var inst_35138 = (state_35152[(8)]);
var inst_35138__$1 = (state_35152[(2)]);
var inst_35139 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35138__$1);
var state_35152__$1 = (function (){var statearr_35161 = state_35152;
(statearr_35161[(8)] = inst_35138__$1);

return statearr_35161;
})();
if(cljs.core.truth_(inst_35139)){
var statearr_35162_35188 = state_35152__$1;
(statearr_35162_35188[(1)] = (13));

} else {
var statearr_35163_35189 = state_35152__$1;
(statearr_35163_35189[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35153 === (2))){
var inst_35115 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35116 = (0);
var state_35152__$1 = (function (){var statearr_35164 = state_35152;
(statearr_35164[(7)] = inst_35116);

(statearr_35164[(9)] = inst_35115);

return statearr_35164;
})();
var statearr_35165_35190 = state_35152__$1;
(statearr_35165_35190[(2)] = null);

(statearr_35165_35190[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35153 === (11))){
var inst_35116 = (state_35152[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35152,(10),Object,null,(9));
var inst_35125 = chs__$1.call(null,inst_35116);
var inst_35126 = done.call(null,inst_35116);
var inst_35127 = cljs.core.async.take_BANG_.call(null,inst_35125,inst_35126);
var state_35152__$1 = state_35152;
var statearr_35166_35191 = state_35152__$1;
(statearr_35166_35191[(2)] = inst_35127);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35152__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35153 === (9))){
var inst_35116 = (state_35152[(7)]);
var inst_35129 = (state_35152[(2)]);
var inst_35130 = (inst_35116 + (1));
var inst_35116__$1 = inst_35130;
var state_35152__$1 = (function (){var statearr_35167 = state_35152;
(statearr_35167[(7)] = inst_35116__$1);

(statearr_35167[(10)] = inst_35129);

return statearr_35167;
})();
var statearr_35168_35192 = state_35152__$1;
(statearr_35168_35192[(2)] = null);

(statearr_35168_35192[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35153 === (5))){
var inst_35136 = (state_35152[(2)]);
var state_35152__$1 = (function (){var statearr_35169 = state_35152;
(statearr_35169[(11)] = inst_35136);

return statearr_35169;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35152__$1,(12),dchan);
} else {
if((state_val_35153 === (14))){
var inst_35138 = (state_35152[(8)]);
var inst_35143 = cljs.core.apply.call(null,f,inst_35138);
var state_35152__$1 = state_35152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35152__$1,(16),out,inst_35143);
} else {
if((state_val_35153 === (16))){
var inst_35145 = (state_35152[(2)]);
var state_35152__$1 = (function (){var statearr_35170 = state_35152;
(statearr_35170[(12)] = inst_35145);

return statearr_35170;
})();
var statearr_35171_35193 = state_35152__$1;
(statearr_35171_35193[(2)] = null);

(statearr_35171_35193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35153 === (10))){
var inst_35120 = (state_35152[(2)]);
var inst_35121 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35152__$1 = (function (){var statearr_35172 = state_35152;
(statearr_35172[(13)] = inst_35120);

return statearr_35172;
})();
var statearr_35173_35194 = state_35152__$1;
(statearr_35173_35194[(2)] = inst_35121);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35152__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35153 === (8))){
var inst_35134 = (state_35152[(2)]);
var state_35152__$1 = state_35152;
var statearr_35174_35195 = state_35152__$1;
(statearr_35174_35195[(2)] = inst_35134);

(statearr_35174_35195[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__33800__auto__ = null;
var cljs$core$async$state_machine__33800__auto____0 = (function (){
var statearr_35175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35175[(0)] = cljs$core$async$state_machine__33800__auto__);

(statearr_35175[(1)] = (1));

return statearr_35175;
});
var cljs$core$async$state_machine__33800__auto____1 = (function (state_35152){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_35152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e35176){if((e35176 instanceof Object)){
var ex__33803__auto__ = e35176;
var statearr_35177_35196 = state_35152;
(statearr_35177_35196[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35197 = state_35152;
state_35152 = G__35197;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$state_machine__33800__auto__ = function(state_35152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33800__auto____1.call(this,state_35152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33800__auto____0;
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33800__auto____1;
return cljs$core$async$state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_35178 = f__33897__auto__.call(null);
(statearr_35178[(6)] = c__33896__auto___35180);

return statearr_35178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35200 = arguments.length;
switch (G__35200) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33896__auto___35254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_35232){
var state_val_35233 = (state_35232[(1)]);
if((state_val_35233 === (7))){
var inst_35212 = (state_35232[(7)]);
var inst_35211 = (state_35232[(8)]);
var inst_35211__$1 = (state_35232[(2)]);
var inst_35212__$1 = cljs.core.nth.call(null,inst_35211__$1,(0),null);
var inst_35213 = cljs.core.nth.call(null,inst_35211__$1,(1),null);
var inst_35214 = (inst_35212__$1 == null);
var state_35232__$1 = (function (){var statearr_35234 = state_35232;
(statearr_35234[(7)] = inst_35212__$1);

(statearr_35234[(8)] = inst_35211__$1);

(statearr_35234[(9)] = inst_35213);

return statearr_35234;
})();
if(cljs.core.truth_(inst_35214)){
var statearr_35235_35255 = state_35232__$1;
(statearr_35235_35255[(1)] = (8));

} else {
var statearr_35236_35256 = state_35232__$1;
(statearr_35236_35256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35233 === (1))){
var inst_35201 = cljs.core.vec.call(null,chs);
var inst_35202 = inst_35201;
var state_35232__$1 = (function (){var statearr_35237 = state_35232;
(statearr_35237[(10)] = inst_35202);

return statearr_35237;
})();
var statearr_35238_35257 = state_35232__$1;
(statearr_35238_35257[(2)] = null);

(statearr_35238_35257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35233 === (4))){
var inst_35202 = (state_35232[(10)]);
var state_35232__$1 = state_35232;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35232__$1,(7),inst_35202);
} else {
if((state_val_35233 === (6))){
var inst_35228 = (state_35232[(2)]);
var state_35232__$1 = state_35232;
var statearr_35239_35258 = state_35232__$1;
(statearr_35239_35258[(2)] = inst_35228);

(statearr_35239_35258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35233 === (3))){
var inst_35230 = (state_35232[(2)]);
var state_35232__$1 = state_35232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35232__$1,inst_35230);
} else {
if((state_val_35233 === (2))){
var inst_35202 = (state_35232[(10)]);
var inst_35204 = cljs.core.count.call(null,inst_35202);
var inst_35205 = (inst_35204 > (0));
var state_35232__$1 = state_35232;
if(cljs.core.truth_(inst_35205)){
var statearr_35241_35259 = state_35232__$1;
(statearr_35241_35259[(1)] = (4));

} else {
var statearr_35242_35260 = state_35232__$1;
(statearr_35242_35260[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35233 === (11))){
var inst_35202 = (state_35232[(10)]);
var inst_35221 = (state_35232[(2)]);
var tmp35240 = inst_35202;
var inst_35202__$1 = tmp35240;
var state_35232__$1 = (function (){var statearr_35243 = state_35232;
(statearr_35243[(10)] = inst_35202__$1);

(statearr_35243[(11)] = inst_35221);

return statearr_35243;
})();
var statearr_35244_35261 = state_35232__$1;
(statearr_35244_35261[(2)] = null);

(statearr_35244_35261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35233 === (9))){
var inst_35212 = (state_35232[(7)]);
var state_35232__$1 = state_35232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35232__$1,(11),out,inst_35212);
} else {
if((state_val_35233 === (5))){
var inst_35226 = cljs.core.async.close_BANG_.call(null,out);
var state_35232__$1 = state_35232;
var statearr_35245_35262 = state_35232__$1;
(statearr_35245_35262[(2)] = inst_35226);

(statearr_35245_35262[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35233 === (10))){
var inst_35224 = (state_35232[(2)]);
var state_35232__$1 = state_35232;
var statearr_35246_35263 = state_35232__$1;
(statearr_35246_35263[(2)] = inst_35224);

(statearr_35246_35263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35233 === (8))){
var inst_35212 = (state_35232[(7)]);
var inst_35202 = (state_35232[(10)]);
var inst_35211 = (state_35232[(8)]);
var inst_35213 = (state_35232[(9)]);
var inst_35216 = (function (){var cs = inst_35202;
var vec__35207 = inst_35211;
var v = inst_35212;
var c = inst_35213;
return (function (p1__35198_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35198_SHARP_);
});
})();
var inst_35217 = cljs.core.filterv.call(null,inst_35216,inst_35202);
var inst_35202__$1 = inst_35217;
var state_35232__$1 = (function (){var statearr_35247 = state_35232;
(statearr_35247[(10)] = inst_35202__$1);

return statearr_35247;
})();
var statearr_35248_35264 = state_35232__$1;
(statearr_35248_35264[(2)] = null);

(statearr_35248_35264[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33800__auto__ = null;
var cljs$core$async$state_machine__33800__auto____0 = (function (){
var statearr_35249 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35249[(0)] = cljs$core$async$state_machine__33800__auto__);

(statearr_35249[(1)] = (1));

return statearr_35249;
});
var cljs$core$async$state_machine__33800__auto____1 = (function (state_35232){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_35232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e35250){if((e35250 instanceof Object)){
var ex__33803__auto__ = e35250;
var statearr_35251_35265 = state_35232;
(statearr_35251_35265[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35266 = state_35232;
state_35232 = G__35266;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$state_machine__33800__auto__ = function(state_35232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33800__auto____1.call(this,state_35232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33800__auto____0;
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33800__auto____1;
return cljs$core$async$state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_35252 = f__33897__auto__.call(null);
(statearr_35252[(6)] = c__33896__auto___35254);

return statearr_35252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35268 = arguments.length;
switch (G__35268) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33896__auto___35313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_35292){
var state_val_35293 = (state_35292[(1)]);
if((state_val_35293 === (7))){
var inst_35274 = (state_35292[(7)]);
var inst_35274__$1 = (state_35292[(2)]);
var inst_35275 = (inst_35274__$1 == null);
var inst_35276 = cljs.core.not.call(null,inst_35275);
var state_35292__$1 = (function (){var statearr_35294 = state_35292;
(statearr_35294[(7)] = inst_35274__$1);

return statearr_35294;
})();
if(inst_35276){
var statearr_35295_35314 = state_35292__$1;
(statearr_35295_35314[(1)] = (8));

} else {
var statearr_35296_35315 = state_35292__$1;
(statearr_35296_35315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35293 === (1))){
var inst_35269 = (0);
var state_35292__$1 = (function (){var statearr_35297 = state_35292;
(statearr_35297[(8)] = inst_35269);

return statearr_35297;
})();
var statearr_35298_35316 = state_35292__$1;
(statearr_35298_35316[(2)] = null);

(statearr_35298_35316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35293 === (4))){
var state_35292__$1 = state_35292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35292__$1,(7),ch);
} else {
if((state_val_35293 === (6))){
var inst_35287 = (state_35292[(2)]);
var state_35292__$1 = state_35292;
var statearr_35299_35317 = state_35292__$1;
(statearr_35299_35317[(2)] = inst_35287);

(statearr_35299_35317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35293 === (3))){
var inst_35289 = (state_35292[(2)]);
var inst_35290 = cljs.core.async.close_BANG_.call(null,out);
var state_35292__$1 = (function (){var statearr_35300 = state_35292;
(statearr_35300[(9)] = inst_35289);

return statearr_35300;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35292__$1,inst_35290);
} else {
if((state_val_35293 === (2))){
var inst_35269 = (state_35292[(8)]);
var inst_35271 = (inst_35269 < n);
var state_35292__$1 = state_35292;
if(cljs.core.truth_(inst_35271)){
var statearr_35301_35318 = state_35292__$1;
(statearr_35301_35318[(1)] = (4));

} else {
var statearr_35302_35319 = state_35292__$1;
(statearr_35302_35319[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35293 === (11))){
var inst_35269 = (state_35292[(8)]);
var inst_35279 = (state_35292[(2)]);
var inst_35280 = (inst_35269 + (1));
var inst_35269__$1 = inst_35280;
var state_35292__$1 = (function (){var statearr_35303 = state_35292;
(statearr_35303[(10)] = inst_35279);

(statearr_35303[(8)] = inst_35269__$1);

return statearr_35303;
})();
var statearr_35304_35320 = state_35292__$1;
(statearr_35304_35320[(2)] = null);

(statearr_35304_35320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35293 === (9))){
var state_35292__$1 = state_35292;
var statearr_35305_35321 = state_35292__$1;
(statearr_35305_35321[(2)] = null);

(statearr_35305_35321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35293 === (5))){
var state_35292__$1 = state_35292;
var statearr_35306_35322 = state_35292__$1;
(statearr_35306_35322[(2)] = null);

(statearr_35306_35322[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35293 === (10))){
var inst_35284 = (state_35292[(2)]);
var state_35292__$1 = state_35292;
var statearr_35307_35323 = state_35292__$1;
(statearr_35307_35323[(2)] = inst_35284);

(statearr_35307_35323[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35293 === (8))){
var inst_35274 = (state_35292[(7)]);
var state_35292__$1 = state_35292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35292__$1,(11),out,inst_35274);
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
});
return (function() {
var cljs$core$async$state_machine__33800__auto__ = null;
var cljs$core$async$state_machine__33800__auto____0 = (function (){
var statearr_35308 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35308[(0)] = cljs$core$async$state_machine__33800__auto__);

(statearr_35308[(1)] = (1));

return statearr_35308;
});
var cljs$core$async$state_machine__33800__auto____1 = (function (state_35292){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_35292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e35309){if((e35309 instanceof Object)){
var ex__33803__auto__ = e35309;
var statearr_35310_35324 = state_35292;
(statearr_35310_35324[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35325 = state_35292;
state_35292 = G__35325;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$state_machine__33800__auto__ = function(state_35292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33800__auto____1.call(this,state_35292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33800__auto____0;
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33800__auto____1;
return cljs$core$async$state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_35311 = f__33897__auto__.call(null);
(statearr_35311[(6)] = c__33896__auto___35313);

return statearr_35311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35327 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35327 = (function (f,ch,meta35328){
this.f = f;
this.ch = ch;
this.meta35328 = meta35328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35329,meta35328__$1){
var self__ = this;
var _35329__$1 = this;
return (new cljs.core.async.t_cljs$core$async35327(self__.f,self__.ch,meta35328__$1));
}));

(cljs.core.async.t_cljs$core$async35327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35329){
var self__ = this;
var _35329__$1 = this;
return self__.meta35328;
}));

(cljs.core.async.t_cljs$core$async35327.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35327.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async35327.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async35327.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35327.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35330 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35330 = (function (f,ch,meta35328,_,fn1,meta35331){
this.f = f;
this.ch = ch;
this.meta35328 = meta35328;
this._ = _;
this.fn1 = fn1;
this.meta35331 = meta35331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35332,meta35331__$1){
var self__ = this;
var _35332__$1 = this;
return (new cljs.core.async.t_cljs$core$async35330(self__.f,self__.ch,self__.meta35328,self__._,self__.fn1,meta35331__$1));
}));

(cljs.core.async.t_cljs$core$async35330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35332){
var self__ = this;
var _35332__$1 = this;
return self__.meta35331;
}));

(cljs.core.async.t_cljs$core$async35330.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35330.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35330.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35330.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__35326_SHARP_){
return f1.call(null,(((p1__35326_SHARP_ == null))?null:self__.f.call(null,p1__35326_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async35330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35328","meta35328",-377074787,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35327","cljs.core.async/t_cljs$core$async35327",-2082561186,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35331","meta35331",-790184703,null)], null);
}));

(cljs.core.async.t_cljs$core$async35330.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35330");

(cljs.core.async.t_cljs$core$async35330.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async35330");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35330.
 */
cljs.core.async.__GT_t_cljs$core$async35330 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35330(f__$1,ch__$1,meta35328__$1,___$2,fn1__$1,meta35331){
return (new cljs.core.async.t_cljs$core$async35330(f__$1,ch__$1,meta35328__$1,___$2,fn1__$1,meta35331));
});

}

return (new cljs.core.async.t_cljs$core$async35330(self__.f,self__.ch,self__.meta35328,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35327.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35327.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35328","meta35328",-377074787,null)], null);
}));

(cljs.core.async.t_cljs$core$async35327.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35327");

(cljs.core.async.t_cljs$core$async35327.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async35327");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35327.
 */
cljs.core.async.__GT_t_cljs$core$async35327 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35327(f__$1,ch__$1,meta35328){
return (new cljs.core.async.t_cljs$core$async35327(f__$1,ch__$1,meta35328));
});

}

return (new cljs.core.async.t_cljs$core$async35327(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35333 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35333 = (function (f,ch,meta35334){
this.f = f;
this.ch = ch;
this.meta35334 = meta35334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35335,meta35334__$1){
var self__ = this;
var _35335__$1 = this;
return (new cljs.core.async.t_cljs$core$async35333(self__.f,self__.ch,meta35334__$1));
}));

(cljs.core.async.t_cljs$core$async35333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35335){
var self__ = this;
var _35335__$1 = this;
return self__.meta35334;
}));

(cljs.core.async.t_cljs$core$async35333.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35333.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async35333.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35333.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35333.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35333.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async35333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35334","meta35334",1844235353,null)], null);
}));

(cljs.core.async.t_cljs$core$async35333.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35333");

(cljs.core.async.t_cljs$core$async35333.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async35333");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35333.
 */
cljs.core.async.__GT_t_cljs$core$async35333 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35333(f__$1,ch__$1,meta35334){
return (new cljs.core.async.t_cljs$core$async35333(f__$1,ch__$1,meta35334));
});

}

return (new cljs.core.async.t_cljs$core$async35333(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35336 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35336 = (function (p,ch,meta35337){
this.p = p;
this.ch = ch;
this.meta35337 = meta35337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35338,meta35337__$1){
var self__ = this;
var _35338__$1 = this;
return (new cljs.core.async.t_cljs$core$async35336(self__.p,self__.ch,meta35337__$1));
}));

(cljs.core.async.t_cljs$core$async35336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35338){
var self__ = this;
var _35338__$1 = this;
return self__.meta35337;
}));

(cljs.core.async.t_cljs$core$async35336.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35336.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async35336.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async35336.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35336.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35336.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35336.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35337","meta35337",908790050,null)], null);
}));

(cljs.core.async.t_cljs$core$async35336.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35336.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35336");

(cljs.core.async.t_cljs$core$async35336.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async35336");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35336.
 */
cljs.core.async.__GT_t_cljs$core$async35336 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35336(p__$1,ch__$1,meta35337){
return (new cljs.core.async.t_cljs$core$async35336(p__$1,ch__$1,meta35337));
});

}

return (new cljs.core.async.t_cljs$core$async35336(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35340 = arguments.length;
switch (G__35340) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33896__auto___35380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_35361){
var state_val_35362 = (state_35361[(1)]);
if((state_val_35362 === (7))){
var inst_35357 = (state_35361[(2)]);
var state_35361__$1 = state_35361;
var statearr_35363_35381 = state_35361__$1;
(statearr_35363_35381[(2)] = inst_35357);

(statearr_35363_35381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (1))){
var state_35361__$1 = state_35361;
var statearr_35364_35382 = state_35361__$1;
(statearr_35364_35382[(2)] = null);

(statearr_35364_35382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (4))){
var inst_35343 = (state_35361[(7)]);
var inst_35343__$1 = (state_35361[(2)]);
var inst_35344 = (inst_35343__$1 == null);
var state_35361__$1 = (function (){var statearr_35365 = state_35361;
(statearr_35365[(7)] = inst_35343__$1);

return statearr_35365;
})();
if(cljs.core.truth_(inst_35344)){
var statearr_35366_35383 = state_35361__$1;
(statearr_35366_35383[(1)] = (5));

} else {
var statearr_35367_35384 = state_35361__$1;
(statearr_35367_35384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (6))){
var inst_35343 = (state_35361[(7)]);
var inst_35348 = p.call(null,inst_35343);
var state_35361__$1 = state_35361;
if(cljs.core.truth_(inst_35348)){
var statearr_35368_35385 = state_35361__$1;
(statearr_35368_35385[(1)] = (8));

} else {
var statearr_35369_35386 = state_35361__$1;
(statearr_35369_35386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (3))){
var inst_35359 = (state_35361[(2)]);
var state_35361__$1 = state_35361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35361__$1,inst_35359);
} else {
if((state_val_35362 === (2))){
var state_35361__$1 = state_35361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35361__$1,(4),ch);
} else {
if((state_val_35362 === (11))){
var inst_35351 = (state_35361[(2)]);
var state_35361__$1 = state_35361;
var statearr_35370_35387 = state_35361__$1;
(statearr_35370_35387[(2)] = inst_35351);

(statearr_35370_35387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (9))){
var state_35361__$1 = state_35361;
var statearr_35371_35388 = state_35361__$1;
(statearr_35371_35388[(2)] = null);

(statearr_35371_35388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (5))){
var inst_35346 = cljs.core.async.close_BANG_.call(null,out);
var state_35361__$1 = state_35361;
var statearr_35372_35389 = state_35361__$1;
(statearr_35372_35389[(2)] = inst_35346);

(statearr_35372_35389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (10))){
var inst_35354 = (state_35361[(2)]);
var state_35361__$1 = (function (){var statearr_35373 = state_35361;
(statearr_35373[(8)] = inst_35354);

return statearr_35373;
})();
var statearr_35374_35390 = state_35361__$1;
(statearr_35374_35390[(2)] = null);

(statearr_35374_35390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35362 === (8))){
var inst_35343 = (state_35361[(7)]);
var state_35361__$1 = state_35361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35361__$1,(11),out,inst_35343);
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
});
return (function() {
var cljs$core$async$state_machine__33800__auto__ = null;
var cljs$core$async$state_machine__33800__auto____0 = (function (){
var statearr_35375 = [null,null,null,null,null,null,null,null,null];
(statearr_35375[(0)] = cljs$core$async$state_machine__33800__auto__);

(statearr_35375[(1)] = (1));

return statearr_35375;
});
var cljs$core$async$state_machine__33800__auto____1 = (function (state_35361){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_35361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e35376){if((e35376 instanceof Object)){
var ex__33803__auto__ = e35376;
var statearr_35377_35391 = state_35361;
(statearr_35377_35391[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35392 = state_35361;
state_35361 = G__35392;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$state_machine__33800__auto__ = function(state_35361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33800__auto____1.call(this,state_35361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33800__auto____0;
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33800__auto____1;
return cljs$core$async$state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_35378 = f__33897__auto__.call(null);
(statearr_35378[(6)] = c__33896__auto___35380);

return statearr_35378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35394 = arguments.length;
switch (G__35394) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33896__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_35457){
var state_val_35458 = (state_35457[(1)]);
if((state_val_35458 === (7))){
var inst_35453 = (state_35457[(2)]);
var state_35457__$1 = state_35457;
var statearr_35459_35497 = state_35457__$1;
(statearr_35459_35497[(2)] = inst_35453);

(statearr_35459_35497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35458 === (20))){
var inst_35423 = (state_35457[(7)]);
var inst_35434 = (state_35457[(2)]);
var inst_35435 = cljs.core.next.call(null,inst_35423);
var inst_35409 = inst_35435;
var inst_35410 = null;
var inst_35411 = (0);
var inst_35412 = (0);
var state_35457__$1 = (function (){var statearr_35460 = state_35457;
(statearr_35460[(8)] = inst_35411);

(statearr_35460[(9)] = inst_35434);

(statearr_35460[(10)] = inst_35412);

(statearr_35460[(11)] = inst_35409);

(statearr_35460[(12)] = inst_35410);

return statearr_35460;
})();
var statearr_35461_35498 = state_35457__$1;
(statearr_35461_35498[(2)] = null);

(statearr_35461_35498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35458 === (1))){
var state_35457__$1 = state_35457;
var statearr_35462_35499 = state_35457__$1;
(statearr_35462_35499[(2)] = null);

(statearr_35462_35499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35458 === (4))){
var inst_35398 = (state_35457[(13)]);
var inst_35398__$1 = (state_35457[(2)]);
var inst_35399 = (inst_35398__$1 == null);
var state_35457__$1 = (function (){var statearr_35463 = state_35457;
(statearr_35463[(13)] = inst_35398__$1);

return statearr_35463;
})();
if(cljs.core.truth_(inst_35399)){
var statearr_35464_35500 = state_35457__$1;
(statearr_35464_35500[(1)] = (5));

} else {
var statearr_35465_35501 = state_35457__$1;
(statearr_35465_35501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35458 === (15))){
var state_35457__$1 = state_35457;
var statearr_35469_35502 = state_35457__$1;
(statearr_35469_35502[(2)] = null);

(statearr_35469_35502[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35458 === (21))){
var state_35457__$1 = state_35457;
var statearr_35470_35503 = state_35457__$1;
(statearr_35470_35503[(2)] = null);

(statearr_35470_35503[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35458 === (13))){
var inst_35411 = (state_35457[(8)]);
var inst_35412 = (state_35457[(10)]);
var inst_35409 = (state_35457[(11)]);
var inst_35410 = (state_35457[(12)]);
var inst_35419 = (state_35457[(2)]);
var inst_35420 = (inst_35412 + (1));
var tmp35466 = inst_35411;
var tmp35467 = inst_35409;
var tmp35468 = inst_35410;
var inst_35409__$1 = tmp35467;
var inst_35410__$1 = tmp35468;
var inst_35411__$1 = tmp35466;
var inst_35412__$1 = inst_35420;
var state_35457__$1 = (function (){var statearr_35471 = state_35457;
(statearr_35471[(8)] = inst_35411__$1);

(statearr_35471[(14)] = inst_35419);

(statearr_35471[(10)] = inst_35412__$1);

(statearr_35471[(11)] = inst_35409__$1);

(statearr_35471[(12)] = inst_35410__$1);

return statearr_35471;
})();
var statearr_35472_35504 = state_35457__$1;
(statearr_35472_35504[(2)] = null);

(statearr_35472_35504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35458 === (22))){
var state_35457__$1 = state_35457;
var statearr_35473_35505 = state_35457__$1;
(statearr_35473_35505[(2)] = null);

(statearr_35473_35505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35458 === (6))){
var inst_35398 = (state_35457[(13)]);
var inst_35407 = f.call(null,inst_35398);
var inst_35408 = cljs.core.seq.call(null,inst_35407);
var inst_35409 = inst_35408;
var inst_35410 = null;
var inst_35411 = (0);
var inst_35412 = (0);
var state_35457__$1 = (function (){var statearr_35474 = state_35457;
(statearr_35474[(8)] = inst_35411);

(statearr_35474[(10)] = inst_35412);

(statearr_35474[(11)] = inst_35409);

(statearr_35474[(12)] = inst_35410);

return statearr_35474;
})();
var statearr_35475_35506 = state_35457__$1;
(statearr_35475_35506[(2)] = null);

(statearr_35475_35506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35458 === (17))){
var inst_35423 = (state_35457[(7)]);
var inst_35427 = cljs.core.chunk_first.call(null,inst_35423);
var inst_35428 = cljs.core.chunk_rest.call(null,inst_35423);
var inst_35429 = cljs.core.count.call(null,inst_35427);
var inst_35409 = inst_35428;
var inst_35410 = inst_35427;
var inst_35411 = inst_35429;
var inst_35412 = (0);
var state_35457__$1 = (function (){var statearr_35476 = state_35457;
(statearr_35476[(8)] = inst_35411);

(statearr_35476[(10)] = inst_35412);

(statearr_35476[(11)] = inst_35409);

(statearr_35476[(12)] = inst_35410);

return statearr_35476;
})();
var statearr_35477_35507 = state_35457__$1;
(statearr_35477_35507[(2)] = null);

(statearr_35477_35507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35458 === (3))){
var inst_35455 = (state_35457[(2)]);
var state_35457__$1 = state_35457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35457__$1,inst_35455);
} else {
if((state_val_35458 === (12))){
var inst_35443 = (state_35457[(2)]);
var state_35457__$1 = state_35457;
var statearr_35478_35508 = state_35457__$1;
(statearr_35478_35508[(2)] = inst_35443);

(statearr_35478_35508[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35458 === (2))){
var state_35457__$1 = state_35457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35457__$1,(4),in$);
} else {
if((state_val_35458 === (23))){
var inst_35451 = (state_35457[(2)]);
var state_35457__$1 = state_35457;
var statearr_35479_35509 = state_35457__$1;
(statearr_35479_35509[(2)] = inst_35451);

(statearr_35479_35509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35458 === (19))){
var inst_35438 = (state_35457[(2)]);
var state_35457__$1 = state_35457;
var statearr_35480_35510 = state_35457__$1;
(statearr_35480_35510[(2)] = inst_35438);

(statearr_35480_35510[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35458 === (11))){
var inst_35423 = (state_35457[(7)]);
var inst_35409 = (state_35457[(11)]);
var inst_35423__$1 = cljs.core.seq.call(null,inst_35409);
var state_35457__$1 = (function (){var statearr_35481 = state_35457;
(statearr_35481[(7)] = inst_35423__$1);

return statearr_35481;
})();
if(inst_35423__$1){
var statearr_35482_35511 = state_35457__$1;
(statearr_35482_35511[(1)] = (14));

} else {
var statearr_35483_35512 = state_35457__$1;
(statearr_35483_35512[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35458 === (9))){
var inst_35445 = (state_35457[(2)]);
var inst_35446 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35457__$1 = (function (){var statearr_35484 = state_35457;
(statearr_35484[(15)] = inst_35445);

return statearr_35484;
})();
if(cljs.core.truth_(inst_35446)){
var statearr_35485_35513 = state_35457__$1;
(statearr_35485_35513[(1)] = (21));

} else {
var statearr_35486_35514 = state_35457__$1;
(statearr_35486_35514[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35458 === (5))){
var inst_35401 = cljs.core.async.close_BANG_.call(null,out);
var state_35457__$1 = state_35457;
var statearr_35487_35515 = state_35457__$1;
(statearr_35487_35515[(2)] = inst_35401);

(statearr_35487_35515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35458 === (14))){
var inst_35423 = (state_35457[(7)]);
var inst_35425 = cljs.core.chunked_seq_QMARK_.call(null,inst_35423);
var state_35457__$1 = state_35457;
if(inst_35425){
var statearr_35488_35516 = state_35457__$1;
(statearr_35488_35516[(1)] = (17));

} else {
var statearr_35489_35517 = state_35457__$1;
(statearr_35489_35517[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35458 === (16))){
var inst_35441 = (state_35457[(2)]);
var state_35457__$1 = state_35457;
var statearr_35490_35518 = state_35457__$1;
(statearr_35490_35518[(2)] = inst_35441);

(statearr_35490_35518[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35458 === (10))){
var inst_35412 = (state_35457[(10)]);
var inst_35410 = (state_35457[(12)]);
var inst_35417 = cljs.core._nth.call(null,inst_35410,inst_35412);
var state_35457__$1 = state_35457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35457__$1,(13),out,inst_35417);
} else {
if((state_val_35458 === (18))){
var inst_35423 = (state_35457[(7)]);
var inst_35432 = cljs.core.first.call(null,inst_35423);
var state_35457__$1 = state_35457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35457__$1,(20),out,inst_35432);
} else {
if((state_val_35458 === (8))){
var inst_35411 = (state_35457[(8)]);
var inst_35412 = (state_35457[(10)]);
var inst_35414 = (inst_35412 < inst_35411);
var inst_35415 = inst_35414;
var state_35457__$1 = state_35457;
if(cljs.core.truth_(inst_35415)){
var statearr_35491_35519 = state_35457__$1;
(statearr_35491_35519[(1)] = (10));

} else {
var statearr_35492_35520 = state_35457__$1;
(statearr_35492_35520[(1)] = (11));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33800__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33800__auto____0 = (function (){
var statearr_35493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35493[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33800__auto__);

(statearr_35493[(1)] = (1));

return statearr_35493;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33800__auto____1 = (function (state_35457){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_35457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e35494){if((e35494 instanceof Object)){
var ex__33803__auto__ = e35494;
var statearr_35495_35521 = state_35457;
(statearr_35495_35521[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35522 = state_35457;
state_35457 = G__35522;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33800__auto__ = function(state_35457){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33800__auto____1.call(this,state_35457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33800__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33800__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_35496 = f__33897__auto__.call(null);
(statearr_35496[(6)] = c__33896__auto__);

return statearr_35496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));

return c__33896__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35524 = arguments.length;
switch (G__35524) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35527 = arguments.length;
switch (G__35527) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35530 = arguments.length;
switch (G__35530) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33896__auto___35577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_35554){
var state_val_35555 = (state_35554[(1)]);
if((state_val_35555 === (7))){
var inst_35549 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
var statearr_35556_35578 = state_35554__$1;
(statearr_35556_35578[(2)] = inst_35549);

(statearr_35556_35578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (1))){
var inst_35531 = null;
var state_35554__$1 = (function (){var statearr_35557 = state_35554;
(statearr_35557[(7)] = inst_35531);

return statearr_35557;
})();
var statearr_35558_35579 = state_35554__$1;
(statearr_35558_35579[(2)] = null);

(statearr_35558_35579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (4))){
var inst_35534 = (state_35554[(8)]);
var inst_35534__$1 = (state_35554[(2)]);
var inst_35535 = (inst_35534__$1 == null);
var inst_35536 = cljs.core.not.call(null,inst_35535);
var state_35554__$1 = (function (){var statearr_35559 = state_35554;
(statearr_35559[(8)] = inst_35534__$1);

return statearr_35559;
})();
if(inst_35536){
var statearr_35560_35580 = state_35554__$1;
(statearr_35560_35580[(1)] = (5));

} else {
var statearr_35561_35581 = state_35554__$1;
(statearr_35561_35581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (6))){
var state_35554__$1 = state_35554;
var statearr_35562_35582 = state_35554__$1;
(statearr_35562_35582[(2)] = null);

(statearr_35562_35582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (3))){
var inst_35551 = (state_35554[(2)]);
var inst_35552 = cljs.core.async.close_BANG_.call(null,out);
var state_35554__$1 = (function (){var statearr_35563 = state_35554;
(statearr_35563[(9)] = inst_35551);

return statearr_35563;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35554__$1,inst_35552);
} else {
if((state_val_35555 === (2))){
var state_35554__$1 = state_35554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35554__$1,(4),ch);
} else {
if((state_val_35555 === (11))){
var inst_35534 = (state_35554[(8)]);
var inst_35543 = (state_35554[(2)]);
var inst_35531 = inst_35534;
var state_35554__$1 = (function (){var statearr_35564 = state_35554;
(statearr_35564[(7)] = inst_35531);

(statearr_35564[(10)] = inst_35543);

return statearr_35564;
})();
var statearr_35565_35583 = state_35554__$1;
(statearr_35565_35583[(2)] = null);

(statearr_35565_35583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (9))){
var inst_35534 = (state_35554[(8)]);
var state_35554__$1 = state_35554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35554__$1,(11),out,inst_35534);
} else {
if((state_val_35555 === (5))){
var inst_35531 = (state_35554[(7)]);
var inst_35534 = (state_35554[(8)]);
var inst_35538 = cljs.core._EQ_.call(null,inst_35534,inst_35531);
var state_35554__$1 = state_35554;
if(inst_35538){
var statearr_35567_35584 = state_35554__$1;
(statearr_35567_35584[(1)] = (8));

} else {
var statearr_35568_35585 = state_35554__$1;
(statearr_35568_35585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (10))){
var inst_35546 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
var statearr_35569_35586 = state_35554__$1;
(statearr_35569_35586[(2)] = inst_35546);

(statearr_35569_35586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (8))){
var inst_35531 = (state_35554[(7)]);
var tmp35566 = inst_35531;
var inst_35531__$1 = tmp35566;
var state_35554__$1 = (function (){var statearr_35570 = state_35554;
(statearr_35570[(7)] = inst_35531__$1);

return statearr_35570;
})();
var statearr_35571_35587 = state_35554__$1;
(statearr_35571_35587[(2)] = null);

(statearr_35571_35587[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33800__auto__ = null;
var cljs$core$async$state_machine__33800__auto____0 = (function (){
var statearr_35572 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35572[(0)] = cljs$core$async$state_machine__33800__auto__);

(statearr_35572[(1)] = (1));

return statearr_35572;
});
var cljs$core$async$state_machine__33800__auto____1 = (function (state_35554){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_35554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e35573){if((e35573 instanceof Object)){
var ex__33803__auto__ = e35573;
var statearr_35574_35588 = state_35554;
(statearr_35574_35588[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35589 = state_35554;
state_35554 = G__35589;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$state_machine__33800__auto__ = function(state_35554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33800__auto____1.call(this,state_35554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33800__auto____0;
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33800__auto____1;
return cljs$core$async$state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_35575 = f__33897__auto__.call(null);
(statearr_35575[(6)] = c__33896__auto___35577);

return statearr_35575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35591 = arguments.length;
switch (G__35591) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33896__auto___35657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_35629){
var state_val_35630 = (state_35629[(1)]);
if((state_val_35630 === (7))){
var inst_35625 = (state_35629[(2)]);
var state_35629__$1 = state_35629;
var statearr_35631_35658 = state_35629__$1;
(statearr_35631_35658[(2)] = inst_35625);

(statearr_35631_35658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (1))){
var inst_35592 = (new Array(n));
var inst_35593 = inst_35592;
var inst_35594 = (0);
var state_35629__$1 = (function (){var statearr_35632 = state_35629;
(statearr_35632[(7)] = inst_35593);

(statearr_35632[(8)] = inst_35594);

return statearr_35632;
})();
var statearr_35633_35659 = state_35629__$1;
(statearr_35633_35659[(2)] = null);

(statearr_35633_35659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (4))){
var inst_35597 = (state_35629[(9)]);
var inst_35597__$1 = (state_35629[(2)]);
var inst_35598 = (inst_35597__$1 == null);
var inst_35599 = cljs.core.not.call(null,inst_35598);
var state_35629__$1 = (function (){var statearr_35634 = state_35629;
(statearr_35634[(9)] = inst_35597__$1);

return statearr_35634;
})();
if(inst_35599){
var statearr_35635_35660 = state_35629__$1;
(statearr_35635_35660[(1)] = (5));

} else {
var statearr_35636_35661 = state_35629__$1;
(statearr_35636_35661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (15))){
var inst_35619 = (state_35629[(2)]);
var state_35629__$1 = state_35629;
var statearr_35637_35662 = state_35629__$1;
(statearr_35637_35662[(2)] = inst_35619);

(statearr_35637_35662[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (13))){
var state_35629__$1 = state_35629;
var statearr_35638_35663 = state_35629__$1;
(statearr_35638_35663[(2)] = null);

(statearr_35638_35663[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (6))){
var inst_35594 = (state_35629[(8)]);
var inst_35615 = (inst_35594 > (0));
var state_35629__$1 = state_35629;
if(cljs.core.truth_(inst_35615)){
var statearr_35639_35664 = state_35629__$1;
(statearr_35639_35664[(1)] = (12));

} else {
var statearr_35640_35665 = state_35629__$1;
(statearr_35640_35665[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (3))){
var inst_35627 = (state_35629[(2)]);
var state_35629__$1 = state_35629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35629__$1,inst_35627);
} else {
if((state_val_35630 === (12))){
var inst_35593 = (state_35629[(7)]);
var inst_35617 = cljs.core.vec.call(null,inst_35593);
var state_35629__$1 = state_35629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35629__$1,(15),out,inst_35617);
} else {
if((state_val_35630 === (2))){
var state_35629__$1 = state_35629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35629__$1,(4),ch);
} else {
if((state_val_35630 === (11))){
var inst_35609 = (state_35629[(2)]);
var inst_35610 = (new Array(n));
var inst_35593 = inst_35610;
var inst_35594 = (0);
var state_35629__$1 = (function (){var statearr_35641 = state_35629;
(statearr_35641[(7)] = inst_35593);

(statearr_35641[(8)] = inst_35594);

(statearr_35641[(10)] = inst_35609);

return statearr_35641;
})();
var statearr_35642_35666 = state_35629__$1;
(statearr_35642_35666[(2)] = null);

(statearr_35642_35666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (9))){
var inst_35593 = (state_35629[(7)]);
var inst_35607 = cljs.core.vec.call(null,inst_35593);
var state_35629__$1 = state_35629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35629__$1,(11),out,inst_35607);
} else {
if((state_val_35630 === (5))){
var inst_35602 = (state_35629[(11)]);
var inst_35597 = (state_35629[(9)]);
var inst_35593 = (state_35629[(7)]);
var inst_35594 = (state_35629[(8)]);
var inst_35601 = (inst_35593[inst_35594] = inst_35597);
var inst_35602__$1 = (inst_35594 + (1));
var inst_35603 = (inst_35602__$1 < n);
var state_35629__$1 = (function (){var statearr_35643 = state_35629;
(statearr_35643[(11)] = inst_35602__$1);

(statearr_35643[(12)] = inst_35601);

return statearr_35643;
})();
if(cljs.core.truth_(inst_35603)){
var statearr_35644_35667 = state_35629__$1;
(statearr_35644_35667[(1)] = (8));

} else {
var statearr_35645_35668 = state_35629__$1;
(statearr_35645_35668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (14))){
var inst_35622 = (state_35629[(2)]);
var inst_35623 = cljs.core.async.close_BANG_.call(null,out);
var state_35629__$1 = (function (){var statearr_35647 = state_35629;
(statearr_35647[(13)] = inst_35622);

return statearr_35647;
})();
var statearr_35648_35669 = state_35629__$1;
(statearr_35648_35669[(2)] = inst_35623);

(statearr_35648_35669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (10))){
var inst_35613 = (state_35629[(2)]);
var state_35629__$1 = state_35629;
var statearr_35649_35670 = state_35629__$1;
(statearr_35649_35670[(2)] = inst_35613);

(statearr_35649_35670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (8))){
var inst_35602 = (state_35629[(11)]);
var inst_35593 = (state_35629[(7)]);
var tmp35646 = inst_35593;
var inst_35593__$1 = tmp35646;
var inst_35594 = inst_35602;
var state_35629__$1 = (function (){var statearr_35650 = state_35629;
(statearr_35650[(7)] = inst_35593__$1);

(statearr_35650[(8)] = inst_35594);

return statearr_35650;
})();
var statearr_35651_35671 = state_35629__$1;
(statearr_35651_35671[(2)] = null);

(statearr_35651_35671[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33800__auto__ = null;
var cljs$core$async$state_machine__33800__auto____0 = (function (){
var statearr_35652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35652[(0)] = cljs$core$async$state_machine__33800__auto__);

(statearr_35652[(1)] = (1));

return statearr_35652;
});
var cljs$core$async$state_machine__33800__auto____1 = (function (state_35629){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_35629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e35653){if((e35653 instanceof Object)){
var ex__33803__auto__ = e35653;
var statearr_35654_35672 = state_35629;
(statearr_35654_35672[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35673 = state_35629;
state_35629 = G__35673;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$state_machine__33800__auto__ = function(state_35629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33800__auto____1.call(this,state_35629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33800__auto____0;
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33800__auto____1;
return cljs$core$async$state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_35655 = f__33897__auto__.call(null);
(statearr_35655[(6)] = c__33896__auto___35657);

return statearr_35655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35675 = arguments.length;
switch (G__35675) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33896__auto___35752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_35720){
var state_val_35721 = (state_35720[(1)]);
if((state_val_35721 === (7))){
var inst_35716 = (state_35720[(2)]);
var state_35720__$1 = state_35720;
var statearr_35722_35753 = state_35720__$1;
(statearr_35722_35753[(2)] = inst_35716);

(statearr_35722_35753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (1))){
var inst_35676 = [];
var inst_35677 = inst_35676;
var inst_35678 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35720__$1 = (function (){var statearr_35723 = state_35720;
(statearr_35723[(7)] = inst_35678);

(statearr_35723[(8)] = inst_35677);

return statearr_35723;
})();
var statearr_35724_35754 = state_35720__$1;
(statearr_35724_35754[(2)] = null);

(statearr_35724_35754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (4))){
var inst_35681 = (state_35720[(9)]);
var inst_35681__$1 = (state_35720[(2)]);
var inst_35682 = (inst_35681__$1 == null);
var inst_35683 = cljs.core.not.call(null,inst_35682);
var state_35720__$1 = (function (){var statearr_35725 = state_35720;
(statearr_35725[(9)] = inst_35681__$1);

return statearr_35725;
})();
if(inst_35683){
var statearr_35726_35755 = state_35720__$1;
(statearr_35726_35755[(1)] = (5));

} else {
var statearr_35727_35756 = state_35720__$1;
(statearr_35727_35756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (15))){
var inst_35677 = (state_35720[(8)]);
var inst_35708 = cljs.core.vec.call(null,inst_35677);
var state_35720__$1 = state_35720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35720__$1,(18),out,inst_35708);
} else {
if((state_val_35721 === (13))){
var inst_35703 = (state_35720[(2)]);
var state_35720__$1 = state_35720;
var statearr_35728_35757 = state_35720__$1;
(statearr_35728_35757[(2)] = inst_35703);

(statearr_35728_35757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (6))){
var inst_35677 = (state_35720[(8)]);
var inst_35705 = inst_35677.length;
var inst_35706 = (inst_35705 > (0));
var state_35720__$1 = state_35720;
if(cljs.core.truth_(inst_35706)){
var statearr_35729_35758 = state_35720__$1;
(statearr_35729_35758[(1)] = (15));

} else {
var statearr_35730_35759 = state_35720__$1;
(statearr_35730_35759[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (17))){
var inst_35713 = (state_35720[(2)]);
var inst_35714 = cljs.core.async.close_BANG_.call(null,out);
var state_35720__$1 = (function (){var statearr_35731 = state_35720;
(statearr_35731[(10)] = inst_35713);

return statearr_35731;
})();
var statearr_35732_35760 = state_35720__$1;
(statearr_35732_35760[(2)] = inst_35714);

(statearr_35732_35760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (3))){
var inst_35718 = (state_35720[(2)]);
var state_35720__$1 = state_35720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35720__$1,inst_35718);
} else {
if((state_val_35721 === (12))){
var inst_35677 = (state_35720[(8)]);
var inst_35696 = cljs.core.vec.call(null,inst_35677);
var state_35720__$1 = state_35720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35720__$1,(14),out,inst_35696);
} else {
if((state_val_35721 === (2))){
var state_35720__$1 = state_35720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35720__$1,(4),ch);
} else {
if((state_val_35721 === (11))){
var inst_35685 = (state_35720[(11)]);
var inst_35677 = (state_35720[(8)]);
var inst_35681 = (state_35720[(9)]);
var inst_35693 = inst_35677.push(inst_35681);
var tmp35733 = inst_35677;
var inst_35677__$1 = tmp35733;
var inst_35678 = inst_35685;
var state_35720__$1 = (function (){var statearr_35734 = state_35720;
(statearr_35734[(7)] = inst_35678);

(statearr_35734[(12)] = inst_35693);

(statearr_35734[(8)] = inst_35677__$1);

return statearr_35734;
})();
var statearr_35735_35761 = state_35720__$1;
(statearr_35735_35761[(2)] = null);

(statearr_35735_35761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (9))){
var inst_35678 = (state_35720[(7)]);
var inst_35689 = cljs.core.keyword_identical_QMARK_.call(null,inst_35678,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35720__$1 = state_35720;
var statearr_35736_35762 = state_35720__$1;
(statearr_35736_35762[(2)] = inst_35689);

(statearr_35736_35762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (5))){
var inst_35685 = (state_35720[(11)]);
var inst_35686 = (state_35720[(13)]);
var inst_35678 = (state_35720[(7)]);
var inst_35681 = (state_35720[(9)]);
var inst_35685__$1 = f.call(null,inst_35681);
var inst_35686__$1 = cljs.core._EQ_.call(null,inst_35685__$1,inst_35678);
var state_35720__$1 = (function (){var statearr_35737 = state_35720;
(statearr_35737[(11)] = inst_35685__$1);

(statearr_35737[(13)] = inst_35686__$1);

return statearr_35737;
})();
if(inst_35686__$1){
var statearr_35738_35763 = state_35720__$1;
(statearr_35738_35763[(1)] = (8));

} else {
var statearr_35739_35764 = state_35720__$1;
(statearr_35739_35764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (14))){
var inst_35685 = (state_35720[(11)]);
var inst_35681 = (state_35720[(9)]);
var inst_35698 = (state_35720[(2)]);
var inst_35699 = [];
var inst_35700 = inst_35699.push(inst_35681);
var inst_35677 = inst_35699;
var inst_35678 = inst_35685;
var state_35720__$1 = (function (){var statearr_35740 = state_35720;
(statearr_35740[(14)] = inst_35700);

(statearr_35740[(7)] = inst_35678);

(statearr_35740[(15)] = inst_35698);

(statearr_35740[(8)] = inst_35677);

return statearr_35740;
})();
var statearr_35741_35765 = state_35720__$1;
(statearr_35741_35765[(2)] = null);

(statearr_35741_35765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (16))){
var state_35720__$1 = state_35720;
var statearr_35742_35766 = state_35720__$1;
(statearr_35742_35766[(2)] = null);

(statearr_35742_35766[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (10))){
var inst_35691 = (state_35720[(2)]);
var state_35720__$1 = state_35720;
if(cljs.core.truth_(inst_35691)){
var statearr_35743_35767 = state_35720__$1;
(statearr_35743_35767[(1)] = (11));

} else {
var statearr_35744_35768 = state_35720__$1;
(statearr_35744_35768[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (18))){
var inst_35710 = (state_35720[(2)]);
var state_35720__$1 = state_35720;
var statearr_35745_35769 = state_35720__$1;
(statearr_35745_35769[(2)] = inst_35710);

(statearr_35745_35769[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (8))){
var inst_35686 = (state_35720[(13)]);
var state_35720__$1 = state_35720;
var statearr_35746_35770 = state_35720__$1;
(statearr_35746_35770[(2)] = inst_35686);

(statearr_35746_35770[(1)] = (10));


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
}
});
return (function() {
var cljs$core$async$state_machine__33800__auto__ = null;
var cljs$core$async$state_machine__33800__auto____0 = (function (){
var statearr_35747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35747[(0)] = cljs$core$async$state_machine__33800__auto__);

(statearr_35747[(1)] = (1));

return statearr_35747;
});
var cljs$core$async$state_machine__33800__auto____1 = (function (state_35720){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_35720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e35748){if((e35748 instanceof Object)){
var ex__33803__auto__ = e35748;
var statearr_35749_35771 = state_35720;
(statearr_35749_35771[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35772 = state_35720;
state_35720 = G__35772;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
cljs$core$async$state_machine__33800__auto__ = function(state_35720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33800__auto____1.call(this,state_35720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33800__auto____0;
cljs$core$async$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33800__auto____1;
return cljs$core$async$state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_35750 = f__33897__auto__.call(null);
(statearr_35750[(6)] = c__33896__auto___35752);

return statearr_35750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1668256486863
