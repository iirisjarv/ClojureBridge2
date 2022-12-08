// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.edn');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.scope(function(){
cljs.reader.goog$module$goog$object = goog.module.get('goog.object');
});
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s))){
return s;
} else {
if((width < cljs.core.count.call(null,s))){
return cljs.core.subs.call(null,s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__36695 = b.append("0");
b = G__36695;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod.call(null,num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return (!(cljs.reader.divisible_QMARK_.call(null,num,div)));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
return ((cljs.reader.divisible_QMARK_.call(null,year,(4))) && (((cljs.reader.indivisible_QMARK_.call(null,year,(100))) || (cljs.reader.divisible_QMARK_.call(null,year,(400))))));
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return (function (month,leap_year_QMARK_){
return cljs.core.get.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not.call(null,isNaN(n))){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if((((low <= n)) && ((n <= high)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," Failed:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(low),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(high)].join('')));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__36696 = cljs.core.re_matches.call(null,cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.call(null,vec__36696,(0),null);
var years = cljs.core.nth.call(null,vec__36696,(1),null);
var months = cljs.core.nth.call(null,vec__36696,(2),null);
var days = cljs.core.nth.call(null,vec__36696,(3),null);
var hours = cljs.core.nth.call(null,vec__36696,(4),null);
var minutes = cljs.core.nth.call(null,vec__36696,(5),null);
var seconds = cljs.core.nth.call(null,vec__36696,(6),null);
var fraction = cljs.core.nth.call(null,vec__36696,(7),null);
var offset_sign = cljs.core.nth.call(null,vec__36696,(8),null);
var offset_hours = cljs.core.nth.call(null,vec__36696,(9),null);
var offset_minutes = cljs.core.nth.call(null,vec__36696,(10),null);
var v = vec__36696;
if(cljs.core.not.call(null,v)){
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
} else {
var years__$1 = cljs.reader.parse_int.call(null,years);
var months__$1 = (function (){var or__5043__auto__ = cljs.reader.parse_int.call(null,months);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__5043__auto__ = cljs.reader.parse_int.call(null,days);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__5043__auto__ = cljs.reader.parse_int.call(null,hours);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__5043__auto__ = cljs.reader.parse_int.call(null,minutes);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__5043__auto__ = cljs.reader.parse_int.call(null,seconds);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__5043__auto__ = cljs.reader.parse_int.call(null,cljs.reader.zero_fill_right_and_truncate.call(null,fraction,(3)));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.call(null,offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__5043__auto__ = cljs.reader.parse_int.call(null,offset_hours);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__5043__auto__ = cljs.reader.parse_int.call(null,offset_minutes);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check.call(null,(1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check.call(null,(1),days__$1,cljs.reader.days_in_month.call(null,months__$1,cljs.reader.leap_year_QMARK_.call(null,years__$1)),"timestamp day field must be in range 1..last day in month"),cljs.reader.check.call(null,(0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check.call(null,(0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check.call(null,(0),seconds__$1,((cljs.core._EQ_.call(null,minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check.call(null,(0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__5802__auto__ = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__36699 = temp__5802__auto__;
var years = cljs.core.nth.call(null,vec__36699,(0),null);
var months = cljs.core.nth.call(null,vec__36699,(1),null);
var days = cljs.core.nth.call(null,vec__36699,(2),null);
var hours = cljs.core.nth.call(null,vec__36699,(3),null);
var minutes = cljs.core.nth.call(null,vec__36699,(4),null);
var seconds = cljs.core.nth.call(null,vec__36699,(5),null);
var ms = cljs.core.nth.call(null,vec__36699,(6),null);
var offset = cljs.core.nth.call(null,vec__36699,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('')));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp.call(null,s);
} else {
throw (new Error("Instance literal expects a string for its timestamp."));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_.call(null,elems)){
return cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,elems);
} else {
throw (new Error("Queue literal expects a vector for its elements."));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_.call(null,form)){
var arr = [];
var seq__36702_36724 = cljs.core.seq.call(null,form);
var chunk__36703_36725 = null;
var count__36704_36726 = (0);
var i__36705_36727 = (0);
while(true){
if((i__36705_36727 < count__36704_36726)){
var x_36728 = cljs.core._nth.call(null,chunk__36703_36725,i__36705_36727);
arr.push(x_36728);


var G__36729 = seq__36702_36724;
var G__36730 = chunk__36703_36725;
var G__36731 = count__36704_36726;
var G__36732 = (i__36705_36727 + (1));
seq__36702_36724 = G__36729;
chunk__36703_36725 = G__36730;
count__36704_36726 = G__36731;
i__36705_36727 = G__36732;
continue;
} else {
var temp__5804__auto___36733 = cljs.core.seq.call(null,seq__36702_36724);
if(temp__5804__auto___36733){
var seq__36702_36734__$1 = temp__5804__auto___36733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36702_36734__$1)){
var c__5565__auto___36735 = cljs.core.chunk_first.call(null,seq__36702_36734__$1);
var G__36736 = cljs.core.chunk_rest.call(null,seq__36702_36734__$1);
var G__36737 = c__5565__auto___36735;
var G__36738 = cljs.core.count.call(null,c__5565__auto___36735);
var G__36739 = (0);
seq__36702_36724 = G__36736;
chunk__36703_36725 = G__36737;
count__36704_36726 = G__36738;
i__36705_36727 = G__36739;
continue;
} else {
var x_36740 = cljs.core.first.call(null,seq__36702_36734__$1);
arr.push(x_36740);


var G__36741 = cljs.core.next.call(null,seq__36702_36734__$1);
var G__36742 = null;
var G__36743 = (0);
var G__36744 = (0);
seq__36702_36724 = G__36741;
chunk__36703_36725 = G__36742;
count__36704_36726 = G__36743;
i__36705_36727 = G__36744;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_.call(null,form)){
var obj = ({});
var seq__36708_36745 = cljs.core.seq.call(null,form);
var chunk__36709_36746 = null;
var count__36710_36747 = (0);
var i__36711_36748 = (0);
while(true){
if((i__36711_36748 < count__36710_36747)){
var vec__36718_36749 = cljs.core._nth.call(null,chunk__36709_36746,i__36711_36748);
var k_36750 = cljs.core.nth.call(null,vec__36718_36749,(0),null);
var v_36751 = cljs.core.nth.call(null,vec__36718_36749,(1),null);
cljs.reader.goog$module$goog$object.set.call(null,obj,cljs.core.name.call(null,k_36750),v_36751);


var G__36752 = seq__36708_36745;
var G__36753 = chunk__36709_36746;
var G__36754 = count__36710_36747;
var G__36755 = (i__36711_36748 + (1));
seq__36708_36745 = G__36752;
chunk__36709_36746 = G__36753;
count__36710_36747 = G__36754;
i__36711_36748 = G__36755;
continue;
} else {
var temp__5804__auto___36756 = cljs.core.seq.call(null,seq__36708_36745);
if(temp__5804__auto___36756){
var seq__36708_36757__$1 = temp__5804__auto___36756;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36708_36757__$1)){
var c__5565__auto___36758 = cljs.core.chunk_first.call(null,seq__36708_36757__$1);
var G__36759 = cljs.core.chunk_rest.call(null,seq__36708_36757__$1);
var G__36760 = c__5565__auto___36758;
var G__36761 = cljs.core.count.call(null,c__5565__auto___36758);
var G__36762 = (0);
seq__36708_36745 = G__36759;
chunk__36709_36746 = G__36760;
count__36710_36747 = G__36761;
i__36711_36748 = G__36762;
continue;
} else {
var vec__36721_36763 = cljs.core.first.call(null,seq__36708_36757__$1);
var k_36764 = cljs.core.nth.call(null,vec__36721_36763,(0),null);
var v_36765 = cljs.core.nth.call(null,vec__36721_36763,(1),null);
cljs.reader.goog$module$goog$object.set.call(null,obj,cljs.core.name.call(null,k_36764),v_36765);


var G__36766 = cljs.core.next.call(null,seq__36708_36757__$1);
var G__36767 = null;
var G__36768 = (0);
var G__36769 = (0);
seq__36708_36745 = G__36766;
chunk__36709_36746 = G__36767;
count__36710_36747 = G__36768;
i__36711_36748 = G__36769;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
throw (new Error(["JS literal expects a vector or map containing ","only string or unqualified keyword keys"].join('')));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid.call(null,uuid);
} else {
throw (new Error("UUID literal expects a string as its representation."));
}
});
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.call(null,null);
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"inst","inst",-2008473268,null),cljs.reader.read_date,new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),cljs.reader.read_uuid,new cljs.core.Symbol(null,"queue","queue",-1198599890,null),cljs.reader.read_queue,new cljs.core.Symbol(null,"js","js",-886355190,null),cljs.reader.read_js], null),cljs.core.PersistentArrayMap.EMPTY));
/**
 * Reads the first object from an cljs.tools.reader.reader-types/IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * cljs.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.reader.read = (function cljs$reader$read(var_args){
var G__36771 = arguments.length;
switch (G__36771) {
case 1:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),reader);
}));

(cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__36772,reader){
var map__36773 = p__36772;
var map__36773__$1 = cljs.core.__destructure_map.call(null,map__36773);
var opts = map__36773__$1;
var eof = cljs.core.get.call(null,map__36773__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
return cljs.tools.reader.edn.read.call(null,cljs.core.update.call(null,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)], null)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),m);
})),reader);
}));

(cljs.reader.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
return cljs.tools.reader.edn.read.call(null,reader,eof_error_QMARK_,eof,cljs.core.update.call(null,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)], null)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),m);
})));
}));

(cljs.reader.read.cljs$lang$maxFixedArity = 4);

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per cljs.tools.reader.edn/read
 */
cljs.reader.read_string = (function cljs$reader$read_string(var_args){
var G__36776 = arguments.length;
switch (G__36776) {
case 1:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),s);
}));

(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
return cljs.tools.reader.edn.read_string.call(null,cljs.core.update.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)], null),opts),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),m);
})),s);
}));

(cljs.reader.read_string.cljs$lang$maxFixedArity = 2);

cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,(function (_){
return f;
}));

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,(function (_){
return null;
}));

return old_parser;
});

//# sourceMappingURL=reader.js.map?rel=1668256488400
