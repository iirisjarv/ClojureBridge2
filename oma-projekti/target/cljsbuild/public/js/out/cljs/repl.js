// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38579){
var map__38580 = p__38579;
var map__38580__$1 = cljs.core.__destructure_map.call(null,map__38580);
var m = map__38580__$1;
var n = cljs.core.get.call(null,map__38580__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38580__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38581_38609 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38582_38610 = null;
var count__38583_38611 = (0);
var i__38584_38612 = (0);
while(true){
if((i__38584_38612 < count__38583_38611)){
var f_38613 = cljs.core._nth.call(null,chunk__38582_38610,i__38584_38612);
cljs.core.println.call(null,"  ",f_38613);


var G__38614 = seq__38581_38609;
var G__38615 = chunk__38582_38610;
var G__38616 = count__38583_38611;
var G__38617 = (i__38584_38612 + (1));
seq__38581_38609 = G__38614;
chunk__38582_38610 = G__38615;
count__38583_38611 = G__38616;
i__38584_38612 = G__38617;
continue;
} else {
var temp__5804__auto___38618 = cljs.core.seq.call(null,seq__38581_38609);
if(temp__5804__auto___38618){
var seq__38581_38619__$1 = temp__5804__auto___38618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38581_38619__$1)){
var c__5565__auto___38620 = cljs.core.chunk_first.call(null,seq__38581_38619__$1);
var G__38621 = cljs.core.chunk_rest.call(null,seq__38581_38619__$1);
var G__38622 = c__5565__auto___38620;
var G__38623 = cljs.core.count.call(null,c__5565__auto___38620);
var G__38624 = (0);
seq__38581_38609 = G__38621;
chunk__38582_38610 = G__38622;
count__38583_38611 = G__38623;
i__38584_38612 = G__38624;
continue;
} else {
var f_38625 = cljs.core.first.call(null,seq__38581_38619__$1);
cljs.core.println.call(null,"  ",f_38625);


var G__38626 = cljs.core.next.call(null,seq__38581_38619__$1);
var G__38627 = null;
var G__38628 = (0);
var G__38629 = (0);
seq__38581_38609 = G__38626;
chunk__38582_38610 = G__38627;
count__38583_38611 = G__38628;
i__38584_38612 = G__38629;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38630 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38630);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38630)))?cljs.core.second.call(null,arglists_38630):arglists_38630));
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38585_38631 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38586_38632 = null;
var count__38587_38633 = (0);
var i__38588_38634 = (0);
while(true){
if((i__38588_38634 < count__38587_38633)){
var vec__38597_38635 = cljs.core._nth.call(null,chunk__38586_38632,i__38588_38634);
var name_38636 = cljs.core.nth.call(null,vec__38597_38635,(0),null);
var map__38600_38637 = cljs.core.nth.call(null,vec__38597_38635,(1),null);
var map__38600_38638__$1 = cljs.core.__destructure_map.call(null,map__38600_38637);
var doc_38639 = cljs.core.get.call(null,map__38600_38638__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38640 = cljs.core.get.call(null,map__38600_38638__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38636);

cljs.core.println.call(null," ",arglists_38640);

if(cljs.core.truth_(doc_38639)){
cljs.core.println.call(null," ",doc_38639);
} else {
}


var G__38641 = seq__38585_38631;
var G__38642 = chunk__38586_38632;
var G__38643 = count__38587_38633;
var G__38644 = (i__38588_38634 + (1));
seq__38585_38631 = G__38641;
chunk__38586_38632 = G__38642;
count__38587_38633 = G__38643;
i__38588_38634 = G__38644;
continue;
} else {
var temp__5804__auto___38645 = cljs.core.seq.call(null,seq__38585_38631);
if(temp__5804__auto___38645){
var seq__38585_38646__$1 = temp__5804__auto___38645;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38585_38646__$1)){
var c__5565__auto___38647 = cljs.core.chunk_first.call(null,seq__38585_38646__$1);
var G__38648 = cljs.core.chunk_rest.call(null,seq__38585_38646__$1);
var G__38649 = c__5565__auto___38647;
var G__38650 = cljs.core.count.call(null,c__5565__auto___38647);
var G__38651 = (0);
seq__38585_38631 = G__38648;
chunk__38586_38632 = G__38649;
count__38587_38633 = G__38650;
i__38588_38634 = G__38651;
continue;
} else {
var vec__38601_38652 = cljs.core.first.call(null,seq__38585_38646__$1);
var name_38653 = cljs.core.nth.call(null,vec__38601_38652,(0),null);
var map__38604_38654 = cljs.core.nth.call(null,vec__38601_38652,(1),null);
var map__38604_38655__$1 = cljs.core.__destructure_map.call(null,map__38604_38654);
var doc_38656 = cljs.core.get.call(null,map__38604_38655__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38657 = cljs.core.get.call(null,map__38604_38655__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38653);

cljs.core.println.call(null," ",arglists_38657);

if(cljs.core.truth_(doc_38656)){
cljs.core.println.call(null," ",doc_38656);
} else {
}


var G__38658 = cljs.core.next.call(null,seq__38585_38646__$1);
var G__38659 = null;
var G__38660 = (0);
var G__38661 = (0);
seq__38585_38631 = G__38658;
chunk__38586_38632 = G__38659;
count__38587_38633 = G__38660;
i__38588_38634 = G__38661;
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
var temp__5804__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.call(null,"Spec");

var seq__38605 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38606 = null;
var count__38607 = (0);
var i__38608 = (0);
while(true){
if((i__38608 < count__38607)){
var role = cljs.core._nth.call(null,chunk__38606,i__38608);
var temp__5804__auto___38662__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___38662__$1)){
var spec_38663 = temp__5804__auto___38662__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38663));
} else {
}


var G__38664 = seq__38605;
var G__38665 = chunk__38606;
var G__38666 = count__38607;
var G__38667 = (i__38608 + (1));
seq__38605 = G__38664;
chunk__38606 = G__38665;
count__38607 = G__38666;
i__38608 = G__38667;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__38605);
if(temp__5804__auto____$1){
var seq__38605__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38605__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__38605__$1);
var G__38668 = cljs.core.chunk_rest.call(null,seq__38605__$1);
var G__38669 = c__5565__auto__;
var G__38670 = cljs.core.count.call(null,c__5565__auto__);
var G__38671 = (0);
seq__38605 = G__38668;
chunk__38606 = G__38669;
count__38607 = G__38670;
i__38608 = G__38671;
continue;
} else {
var role = cljs.core.first.call(null,seq__38605__$1);
var temp__5804__auto___38672__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___38672__$2)){
var spec_38673 = temp__5804__auto___38672__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38673));
} else {
}


var G__38674 = cljs.core.next.call(null,seq__38605__$1);
var G__38675 = null;
var G__38676 = (0);
var G__38677 = (0);
seq__38605 = G__38674;
chunk__38606 = G__38675;
count__38607 = G__38676;
i__38608 = G__38677;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__38678 = cljs.core.conj.call(null,via,t);
var G__38679 = cljs.core.ex_cause.call(null,t);
via = G__38678;
t = G__38679;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__38682 = datafied_throwable;
var map__38682__$1 = cljs.core.__destructure_map.call(null,map__38682);
var via = cljs.core.get.call(null,map__38682__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__38682__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__38682__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38683 = cljs.core.last.call(null,via);
var map__38683__$1 = cljs.core.__destructure_map.call(null,map__38683);
var type = cljs.core.get.call(null,map__38683__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__38683__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__38683__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38684 = data;
var map__38684__$1 = cljs.core.__destructure_map.call(null,map__38684);
var problems = cljs.core.get.call(null,map__38684__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__38684__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__38684__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38685 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__38685__$1 = cljs.core.__destructure_map.call(null,map__38685);
var top_data = map__38685__$1;
var source = cljs.core.get.call(null,map__38685__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__38686 = phase;
var G__38686__$1 = (((G__38686 instanceof cljs.core.Keyword))?G__38686.fqn:null);
switch (G__38686__$1) {
case "read-source":
var map__38687 = data;
var map__38687__$1 = cljs.core.__destructure_map.call(null,map__38687);
var line = cljs.core.get.call(null,map__38687__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__38687__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38688 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__38688__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__38688,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38688);
var G__38688__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__38688__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38688__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__38688__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38688__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38689 = top_data;
var G__38689__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__38689,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38689);
var G__38689__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__38689__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38689__$1);
var G__38689__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__38689__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38689__$2);
var G__38689__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__38689__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38689__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__38689__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38689__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38690 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__38690,(0),null);
var method = cljs.core.nth.call(null,vec__38690,(1),null);
var file = cljs.core.nth.call(null,vec__38690,(2),null);
var line = cljs.core.nth.call(null,vec__38690,(3),null);
var G__38693 = top_data;
var G__38693__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__38693,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38693);
var G__38693__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__38693__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38693__$1);
var G__38693__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.call(null,G__38693__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38693__$2);
var G__38693__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__38693__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38693__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__38693__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38693__$4;
}

break;
case "execution":
var vec__38694 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__38694,(0),null);
var method = cljs.core.nth.call(null,vec__38694,(1),null);
var file = cljs.core.nth.call(null,vec__38694,(2),null);
var line = cljs.core.nth.call(null,vec__38694,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__38681_SHARP_){
var or__5043__auto__ = (p1__38681_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__38681_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__38697 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38697__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__38697,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38697);
var G__38697__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__38697__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38697__$1);
var G__38697__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
}
})())?cljs.core.assoc.call(null,G__38697__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38697__$2);
var G__38697__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__38697__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38697__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__38697__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38697__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38686__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38701){
var map__38702 = p__38701;
var map__38702__$1 = cljs.core.__destructure_map.call(null,map__38702);
var triage_data = map__38702__$1;
var phase = cljs.core.get.call(null,map__38702__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__38702__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__38702__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__38702__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__38702__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__38702__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__38702__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__38702__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = source;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5043__auto__ = class$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__38703 = phase;
var G__38703__$1 = (((G__38703 instanceof cljs.core.Keyword))?G__38703.fqn:null);
switch (G__38703__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38704_38713 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38705_38714 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38706_38715 = true;
var _STAR_print_fn_STAR__temp_val__38707_38716 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38706_38715);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38707_38716);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__38699_SHARP_){
return cljs.core.dissoc.call(null,p1__38699_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38705_38714);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38704_38713);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38708_38717 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38709_38718 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38710_38719 = true;
var _STAR_print_fn_STAR__temp_val__38711_38720 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38710_38719);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38711_38720);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__38700_SHARP_){
return cljs.core.dissoc.call(null,p1__38700_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38709_38718);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38708_38717);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38703__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1668256489345
