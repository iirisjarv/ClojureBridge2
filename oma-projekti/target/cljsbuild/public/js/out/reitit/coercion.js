// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('reitit.coercion');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('reitit.impl');

/**
 * Pluggable coercion protocol
 * @interface
 */
reitit.coercion.Coercion = function(){};

var reitit$coercion$Coercion$_get_name$dyn_36091 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.coercion._get_name[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$);
} else {
var m__5389__auto__ = (reitit.coercion._get_name["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-get-name",this$);
}
}
});
/**
 * Keyword name for the coercion
 */
reitit.coercion._get_name = (function reitit$coercion$_get_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_name$arity$1 == null)))))){
return this$.reitit$coercion$Coercion$_get_name$arity$1(this$);
} else {
return reitit$coercion$Coercion$_get_name$dyn_36091.call(null,this$);
}
});

var reitit$coercion$Coercion$_get_options$dyn_36092 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.coercion._get_options[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$);
} else {
var m__5389__auto__ = (reitit.coercion._get_options["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-get-options",this$);
}
}
});
/**
 * Coercion options
 */
reitit.coercion._get_options = (function reitit$coercion$_get_options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_options$arity$1 == null)))))){
return this$.reitit$coercion$Coercion$_get_options$arity$1(this$);
} else {
return reitit$coercion$Coercion$_get_options$dyn_36092.call(null,this$);
}
});

var reitit$coercion$Coercion$_get_apidocs$dyn_36093 = (function (this$,specification,data){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.coercion._get_apidocs[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$,specification,data);
} else {
var m__5389__auto__ = (reitit.coercion._get_apidocs["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$,specification,data);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-get-apidocs",this$);
}
}
});
/**
 * Returns api documentation
 */
reitit.coercion._get_apidocs = (function reitit$coercion$_get_apidocs(this$,specification,data){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_apidocs$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_get_apidocs$arity$3(this$,specification,data);
} else {
return reitit$coercion$Coercion$_get_apidocs$dyn_36093.call(null,this$,specification,data);
}
});

var reitit$coercion$Coercion$_compile_model$dyn_36094 = (function (this$,model,name){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.coercion._compile_model[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$,model,name);
} else {
var m__5389__auto__ = (reitit.coercion._compile_model["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$,model,name);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-compile-model",this$);
}
}
});
/**
 * Compiles a model
 */
reitit.coercion._compile_model = (function reitit$coercion$_compile_model(this$,model,name){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_compile_model$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_compile_model$arity$3(this$,model,name);
} else {
return reitit$coercion$Coercion$_compile_model$dyn_36094.call(null,this$,model,name);
}
});

var reitit$coercion$Coercion$_open_model$dyn_36095 = (function (this$,model){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.coercion._open_model[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$,model);
} else {
var m__5389__auto__ = (reitit.coercion._open_model["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$,model);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-open-model",this$);
}
}
});
/**
 * Returns a new model which allows extra keys in maps
 */
reitit.coercion._open_model = (function reitit$coercion$_open_model(this$,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_open_model$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_open_model$arity$2(this$,model);
} else {
return reitit$coercion$Coercion$_open_model$dyn_36095.call(null,this$,model);
}
});

var reitit$coercion$Coercion$_encode_error$dyn_36096 = (function (this$,error){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.coercion._encode_error[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$,error);
} else {
var m__5389__auto__ = (reitit.coercion._encode_error["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$,error);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-encode-error",this$);
}
}
});
/**
 * Converts error in to a serializable format
 */
reitit.coercion._encode_error = (function reitit$coercion$_encode_error(this$,error){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_encode_error$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_encode_error$arity$2(this$,error);
} else {
return reitit$coercion$Coercion$_encode_error$dyn_36096.call(null,this$,error);
}
});

var reitit$coercion$Coercion$_request_coercer$dyn_36097 = (function (this$,type,model){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.coercion._request_coercer[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$,type,model);
} else {
var m__5389__auto__ = (reitit.coercion._request_coercer["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$,type,model);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-request-coercer",this$);
}
}
});
/**
 * Returns a `value format => value` request coercion function
 */
reitit.coercion._request_coercer = (function reitit$coercion$_request_coercer(this$,type,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_request_coercer$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_request_coercer$arity$3(this$,type,model);
} else {
return reitit$coercion$Coercion$_request_coercer$dyn_36097.call(null,this$,type,model);
}
});

var reitit$coercion$Coercion$_response_coercer$dyn_36098 = (function (this$,model){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.coercion._response_coercer[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$,model);
} else {
var m__5389__auto__ = (reitit.coercion._response_coercer["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$,model);
} else {
throw cljs.core.missing_protocol.call(null,"Coercion.-response-coercer",this$);
}
}
});
/**
 * Returns a `value format => value` response coercion function
 */
reitit.coercion._response_coercer = (function reitit$coercion$_response_coercer(this$,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_response_coercer$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_response_coercer$arity$2(this$,model);
} else {
return reitit$coercion$Coercion$_response_coercer$dyn_36098.call(null,this$,model);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.coercion.CoercionError = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.coercion.CoercionError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k36100,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__36104 = k36100;
switch (G__36104) {
default:
return cljs.core.get.call(null,self__.__extmap,k36100,else__5343__auto__);

}
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__36105){
var vec__36106 = p__36105;
var k__5364__auto__ = cljs.core.nth.call(null,vec__36106,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__36106,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#reitit.coercion.CoercionError{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36099){
var self__ = this;
var G__36099__$1 = this;
return (new cljs.core.RecordIter((0),G__36099__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new reitit.coercion.CoercionError(self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-537525465 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36101,other36102){
var self__ = this;
var this36101__$1 = this;
return (((!((other36102 == null)))) && ((((this36101__$1.constructor === other36102.constructor)) && (cljs.core._EQ_.call(null,this36101__$1.__extmap,other36102.__extmap)))));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new reitit.coercion.CoercionError(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k36100){
var self__ = this;
var this__5347__auto____$1 = this;
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k36100);
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__36099){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__36109 = cljs.core.keyword_identical_QMARK_;
var expr__36110 = k__5349__auto__;
return (new reitit.coercion.CoercionError(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__36099),null));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__36099){
var self__ = this;
var this__5339__auto____$1 = this;
return (new reitit.coercion.CoercionError(G__36099,self__.__extmap,self__.__hash));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(reitit.coercion.CoercionError.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(reitit.coercion.CoercionError.cljs$lang$type = true);

(reitit.coercion.CoercionError.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"reitit.coercion/CoercionError",null,(1),null));
}));

(reitit.coercion.CoercionError.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"reitit.coercion/CoercionError");
}));

/**
 * Positional factory function for reitit.coercion/CoercionError.
 */
reitit.coercion.__GT_CoercionError = (function reitit$coercion$__GT_CoercionError(){
return (new reitit.coercion.CoercionError(null,null,null));
});

/**
 * Factory function for reitit.coercion/CoercionError, taking a map of keywords to field values.
 */
reitit.coercion.map__GT_CoercionError = (function reitit$coercion$map__GT_CoercionError(G__36103){
var extmap__5382__auto__ = (function (){var G__36112 = cljs.core.dissoc.call(null,G__36103);
if(cljs.core.record_QMARK_.call(null,G__36103)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__36112);
} else {
return G__36112;
}
})();
return (new reitit.coercion.CoercionError(null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});

reitit.coercion.error_QMARK_ = (function reitit$coercion$error_QMARK_(x){
return (x instanceof reitit.coercion.CoercionError);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.coercion.ParameterCoercion = (function (in$,style,keywordize_QMARK_,open_QMARK_,__meta,__extmap,__hash){
this.in$ = in$;
this.style = style;
this.keywordize_QMARK_ = keywordize_QMARK_;
this.open_QMARK_ = open_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.coercion.ParameterCoercion.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k36115,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__36119 = k36115;
var G__36119__$1 = (((G__36119 instanceof cljs.core.Keyword))?G__36119.fqn:null);
switch (G__36119__$1) {
case "in":
return self__.in$;

break;
case "style":
return self__.style;

break;
case "keywordize?":
return self__.keywordize_QMARK_;

break;
case "open?":
return self__.open_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36115,else__5343__auto__);

}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__36120){
var vec__36121 = p__36120;
var k__5364__auto__ = cljs.core.nth.call(null,vec__36121,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__36121,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#reitit.coercion.ParameterCoercion{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),self__.keywordize_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_],null))], null),self__.__extmap));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36114){
var self__ = this;
var G__36114__$1 = this;
return (new cljs.core.RecordIter((0),G__36114__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),new cljs.core.Keyword(null,"open?","open?",1238443125)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1253949273 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36116,other36117){
var self__ = this;
var this36116__$1 = this;
return (((!((other36117 == null)))) && ((((this36116__$1.constructor === other36117.constructor)) && (((cljs.core._EQ_.call(null,this36116__$1.in,other36117.in)) && (((cljs.core._EQ_.call(null,this36116__$1.style,other36117.style)) && (((cljs.core._EQ_.call(null,this36116__$1.keywordize_QMARK_,other36117.keywordize_QMARK_)) && (((cljs.core._EQ_.call(null,this36116__$1.open_QMARK_,other36117.open_QMARK_)) && (cljs.core._EQ_.call(null,this36116__$1.__extmap,other36117.__extmap)))))))))))));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"open?","open?",1238443125),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k36115){
var self__ = this;
var this__5347__auto____$1 = this;
var G__36124 = k36115;
var G__36124__$1 = (((G__36124 instanceof cljs.core.Keyword))?G__36124.fqn:null);
switch (G__36124__$1) {
case "in":
case "style":
case "keywordize?":
case "open?":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k36115);

}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__36114){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__36125 = cljs.core.keyword_identical_QMARK_;
var expr__36126 = k__5349__auto__;
if(cljs.core.truth_(pred__36125.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__36126))){
return (new reitit.coercion.ParameterCoercion(G__36114,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36125.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__36126))){
return (new reitit.coercion.ParameterCoercion(self__.in$,G__36114,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36125.call(null,new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),expr__36126))){
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,G__36114,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36125.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125),expr__36126))){
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,G__36114,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__36114),null));
}
}
}
}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"style","style",-496642736),self__.style,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),self__.keywordize_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_,null))], null),self__.__extmap));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__36114){
var self__ = this;
var this__5339__auto____$1 = this;
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,G__36114,self__.__extmap,self__.__hash));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(reitit.coercion.ParameterCoercion.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"keywordize?","keywordize?",1406224615,null),new cljs.core.Symbol(null,"open?","open?",-1415992644,null)], null);
}));

(reitit.coercion.ParameterCoercion.cljs$lang$type = true);

(reitit.coercion.ParameterCoercion.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"reitit.coercion/ParameterCoercion",null,(1),null));
}));

(reitit.coercion.ParameterCoercion.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"reitit.coercion/ParameterCoercion");
}));

/**
 * Positional factory function for reitit.coercion/ParameterCoercion.
 */
reitit.coercion.__GT_ParameterCoercion = (function reitit$coercion$__GT_ParameterCoercion(in$,style,keywordize_QMARK_,open_QMARK_){
return (new reitit.coercion.ParameterCoercion(in$,style,keywordize_QMARK_,open_QMARK_,null,null,null));
});

/**
 * Factory function for reitit.coercion/ParameterCoercion, taking a map of keywords to field values.
 */
reitit.coercion.map__GT_ParameterCoercion = (function reitit$coercion$map__GT_ParameterCoercion(G__36118){
var extmap__5382__auto__ = (function (){var G__36128 = cljs.core.dissoc.call(null,G__36118,new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),new cljs.core.Keyword(null,"open?","open?",1238443125));
if(cljs.core.record_QMARK_.call(null,G__36118)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__36128);
} else {
return G__36128;
}
})();
return (new reitit.coercion.ParameterCoercion(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__36118),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__36118),new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912).cljs$core$IFn$_invoke$arity$1(G__36118),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(G__36118),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});

reitit.coercion.default_parameter_coercion = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"query","query",-1288509510),reitit.coercion.__GT_ParameterCoercion.call(null,new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"body","body",-2049205669),reitit.coercion.__GT_ParameterCoercion.call(null,new cljs.core.Keyword(null,"body-params","body-params",-369749490),new cljs.core.Keyword(null,"body","body",-2049205669),false,false),new cljs.core.Keyword(null,"form","form",-1624062471),reitit.coercion.__GT_ParameterCoercion.call(null,new cljs.core.Keyword(null,"form-params","form-params",1884296467),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"header","header",119441134),reitit.coercion.__GT_ParameterCoercion.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"path","path",-188191168),reitit.coercion.__GT_ParameterCoercion.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"string","string",-1989541586),true,true)], null);
reitit.coercion.request_coercion_failed_BANG_ = (function reitit$coercion$request_coercion_failed_BANG_(result,coercion,value,in$,request){
throw cljs.core.ex_info.call(null,["Request coercion failed: ",cljs.core.pr_str.call(null,result)].join(''),cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,result),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","request-coercion","reitit.coercion/request-coercion",47377205),new cljs.core.Keyword(null,"coercion","coercion",904067157),coercion,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request","request",1772954723),in$], null),new cljs.core.Keyword(null,"request","request",1772954723),request], null)));
});
reitit.coercion.response_coercion_failed_BANG_ = (function reitit$coercion$response_coercion_failed_BANG_(result,coercion,value,request,response){
throw cljs.core.ex_info.call(null,["Response coercion failed: ",cljs.core.pr_str.call(null,result)].join(''),cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,result),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","response-coercion","reitit.coercion/response-coercion",-1532049609),new cljs.core.Keyword(null,"coercion","coercion",904067157),coercion,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.Keyword(null,"request","request",1772954723),request,new cljs.core.Keyword(null,"response","response",-1068424192),response], null)));
});
reitit.coercion.extract_request_format_default = (function reitit$coercion$extract_request_format_default(request){
return new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("muuntaja","request","muuntaja/request",-1616403792).cljs$core$IFn$_invoke$arity$1(request));
});
reitit.coercion.request_coercer = (function reitit$coercion$request_coercer(coercion,type,model,p__36131){
var map__36132 = p__36131;
var map__36132__$1 = cljs.core.__destructure_map.call(null,map__36132);
var extract_request_format = cljs.core.get.call(null,map__36132__$1,new cljs.core.Keyword("reitit.coercion","extract-request-format","reitit.coercion/extract-request-format",-1687953607),reitit.coercion.extract_request_format_default);
var parameter_coercion = cljs.core.get.call(null,map__36132__$1,new cljs.core.Keyword("reitit.coercion","parameter-coercion","reitit.coercion/parameter-coercion",-1825124100),reitit.coercion.default_parameter_coercion);
if(cljs.core.truth_(coercion)){
var temp__5802__auto__ = parameter_coercion.call(null,type);
if(cljs.core.truth_(temp__5802__auto__)){
var map__36133 = temp__5802__auto__;
var map__36133__$1 = cljs.core.__destructure_map.call(null,map__36133);
var keywordize_QMARK_ = cljs.core.get.call(null,map__36133__$1,new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912));
var open_QMARK_ = cljs.core.get.call(null,map__36133__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var in$ = cljs.core.get.call(null,map__36133__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var style = cljs.core.get.call(null,map__36133__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var transform = cljs.core.comp.call(null,(cljs.core.truth_(keywordize_QMARK_)?clojure.walk.keywordize_keys:cljs.core.identity),in$);
var model__$1 = (cljs.core.truth_(open_QMARK_)?reitit.coercion._open_model.call(null,coercion,model):model);
var temp__5802__auto____$1 = reitit.coercion._request_coercer.call(null,coercion,style,model__$1);
if(cljs.core.truth_(temp__5802__auto____$1)){
var coercer = temp__5802__auto____$1;
return (function (request){
var value = transform.call(null,request);
var format = extract_request_format.call(null,request);
var result = coercer.call(null,value,format);
if(reitit.coercion.error_QMARK_.call(null,result)){
return reitit.coercion.request_coercion_failed_BANG_.call(null,result,coercion,value,in$,request);
} else {
return result;
}
});
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
reitit.coercion.extract_response_format_default = (function reitit$coercion$extract_response_format_default(request,_){
return new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("muuntaja","response","muuntaja/response",-1772248613).cljs$core$IFn$_invoke$arity$1(request));
});
reitit.coercion.response_coercer = (function reitit$coercion$response_coercer(coercion,body,p__36134){
var map__36135 = p__36134;
var map__36135__$1 = cljs.core.__destructure_map.call(null,map__36135);
var extract_response_format = cljs.core.get.call(null,map__36135__$1,new cljs.core.Keyword(null,"extract-response-format","extract-response-format",-303544140),reitit.coercion.extract_response_format_default);
if(cljs.core.truth_(coercion)){
var temp__5802__auto__ = reitit.coercion._response_coercer.call(null,coercion,body);
if(cljs.core.truth_(temp__5802__auto__)){
var coercer = temp__5802__auto__;
return (function (request,response){
var format = extract_response_format.call(null,request,response);
var value = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response);
var result = coercer.call(null,value,format);
if(reitit.coercion.error_QMARK_.call(null,result)){
return reitit.coercion.response_coercion_failed_BANG_.call(null,result,coercion,value,request,response);
} else {
return result;
}
});
} else {
return null;
}
} else {
return null;
}
});
reitit.coercion.encode_error = (function reitit$coercion$encode_error(data){
return reitit.coercion._encode_error.call(null,new cljs.core.Keyword(null,"coercion","coercion",904067157).cljs$core$IFn$_invoke$arity$1(data),cljs.core.update.call(null,cljs.core.dissoc.call(null,data,new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion._get_name));
});
reitit.coercion.coerce_request = (function reitit$coercion$coerce_request(coercers,request){
return cljs.core.reduce_kv.call(null,(function (acc,k,coercer){
return reitit.impl.fast_assoc.call(null,acc,k,coercer.call(null,request));
}),cljs.core.PersistentArrayMap.EMPTY,coercers);
});
reitit.coercion.coerce_response = (function reitit$coercion$coerce_response(coercers,request,response){
if(cljs.core.truth_(response)){
var temp__5802__auto__ = (function (){var or__5043__auto__ = coercers.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return coercers.call(null,new cljs.core.Keyword(null,"default","default",-1987822328));
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var coercer = temp__5802__auto__;
return reitit.impl.fast_assoc.call(null,response,new cljs.core.Keyword(null,"body","body",-2049205669),coercer.call(null,request,response));
} else {
return response;
}
} else {
return null;
}
});
reitit.coercion.request_coercers = (function reitit$coercion$request_coercers(coercion,parameters,opts){
var G__36136 = (function (){var iter__5520__auto__ = (function reitit$coercion$request_coercers_$_iter__36137(s__36138){
return (new cljs.core.LazySeq(null,(function (){
var s__36138__$1 = s__36138;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__36138__$1);
if(temp__5804__auto__){
var s__36138__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36138__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__36138__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__36140 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__36139 = (0);
while(true){
if((i__36139 < size__5519__auto__)){
var vec__36141 = cljs.core._nth.call(null,c__5518__auto__,i__36139);
var k = cljs.core.nth.call(null,vec__36141,(0),null);
var v = cljs.core.nth.call(null,vec__36141,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__36140,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion.request_coercer.call(null,coercion,k,v,opts)], null));

var G__36147 = (i__36139 + (1));
i__36139 = G__36147;
continue;
} else {
var G__36148 = (i__36139 + (1));
i__36139 = G__36148;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36140),reitit$coercion$request_coercers_$_iter__36137.call(null,cljs.core.chunk_rest.call(null,s__36138__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36140),null);
}
} else {
var vec__36144 = cljs.core.first.call(null,s__36138__$2);
var k = cljs.core.nth.call(null,vec__36144,(0),null);
var v = cljs.core.nth.call(null,vec__36144,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion.request_coercer.call(null,coercion,k,v,opts)], null),reitit$coercion$request_coercers_$_iter__36137.call(null,cljs.core.rest.call(null,s__36138__$2)));
} else {
var G__36149 = cljs.core.rest.call(null,s__36138__$2);
s__36138__$1 = G__36149;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,parameters);
})();
var G__36136__$1 = (((G__36136 == null))?null:cljs.core.filter.call(null,cljs.core.second,G__36136));
var G__36136__$2 = (((G__36136__$1 == null))?null:cljs.core.seq.call(null,G__36136__$1));
if((G__36136__$2 == null)){
return null;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__36136__$2);
}
});
reitit.coercion.response_coercers = (function reitit$coercion$response_coercers(coercion,responses,opts){
var G__36150 = (function (){var iter__5520__auto__ = (function reitit$coercion$response_coercers_$_iter__36151(s__36152){
return (new cljs.core.LazySeq(null,(function (){
var s__36152__$1 = s__36152;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__36152__$1);
if(temp__5804__auto__){
var s__36152__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36152__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__36152__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__36154 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__36153 = (0);
while(true){
if((i__36153 < size__5519__auto__)){
var vec__36155 = cljs.core._nth.call(null,c__5518__auto__,i__36153);
var status = cljs.core.nth.call(null,vec__36155,(0),null);
var map__36158 = cljs.core.nth.call(null,vec__36155,(1),null);
var map__36158__$1 = cljs.core.__destructure_map.call(null,map__36158);
var body = cljs.core.get.call(null,map__36158__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.truth_(body)){
cljs.core.chunk_append.call(null,b__36154,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,reitit.coercion.response_coercer.call(null,coercion,body,opts)], null));

var G__36163 = (i__36153 + (1));
i__36153 = G__36163;
continue;
} else {
var G__36164 = (i__36153 + (1));
i__36153 = G__36164;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36154),reitit$coercion$response_coercers_$_iter__36151.call(null,cljs.core.chunk_rest.call(null,s__36152__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36154),null);
}
} else {
var vec__36159 = cljs.core.first.call(null,s__36152__$2);
var status = cljs.core.nth.call(null,vec__36159,(0),null);
var map__36162 = cljs.core.nth.call(null,vec__36159,(1),null);
var map__36162__$1 = cljs.core.__destructure_map.call(null,map__36162);
var body = cljs.core.get.call(null,map__36162__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.truth_(body)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,reitit.coercion.response_coercer.call(null,coercion,body,opts)], null),reitit$coercion$response_coercers_$_iter__36151.call(null,cljs.core.rest.call(null,s__36152__$2)));
} else {
var G__36165 = cljs.core.rest.call(null,s__36152__$2);
s__36152__$1 = G__36165;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,responses);
})();
var G__36150__$1 = (((G__36150 == null))?null:cljs.core.filter.call(null,cljs.core.second,G__36150));
var G__36150__$2 = (((G__36150__$1 == null))?null:cljs.core.seq.call(null,G__36150__$1));
if((G__36150__$2 == null)){
return null;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__36150__$2);
}
});
reitit.coercion.get_apidocs = (function reitit$coercion$get_apidocs(coercion,specification,data){
var swagger_parameter = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"formData","formData",-1155796695),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"multipart","multipart",1158197946),new cljs.core.Keyword(null,"formData","formData",-1155796695)], null);
var G__36166 = specification;
var G__36166__$1 = (((G__36166 instanceof cljs.core.Keyword))?G__36166.fqn:null);
switch (G__36166__$1) {
case "swagger":
return reitit.coercion._get_apidocs.call(null,coercion,specification,cljs.core.update.call(null,data,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),(function (parameters){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,(function (p__36167){
var vec__36168 = p__36167;
var k = cljs.core.nth.call(null,vec__36168,(0),null);
var v = cljs.core.nth.call(null,vec__36168,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [swagger_parameter.call(null,k),v], null);
}),parameters)));
})));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36166__$1)].join('')));

}
});
/**
 * A router :compile implementation which reads the `:parameters`
 *   and `:coercion` data to create compiled coercers into Match under
 *   `:result. A pre-requisite to use [[coerce!]].
 */
reitit.coercion.compile_request_coercers = (function reitit$coercion$compile_request_coercers(p__36172,opts){
var vec__36173 = p__36172;
var _ = cljs.core.nth.call(null,vec__36173,(0),null);
var map__36176 = cljs.core.nth.call(null,vec__36173,(1),null);
var map__36176__$1 = cljs.core.__destructure_map.call(null,map__36176);
var parameters = cljs.core.get.call(null,map__36176__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var coercion = cljs.core.get.call(null,map__36176__$1,new cljs.core.Keyword(null,"coercion","coercion",904067157));
if(cljs.core.truth_((function (){var and__5041__auto__ = parameters;
if(cljs.core.truth_(and__5041__auto__)){
return coercion;
} else {
return and__5041__auto__;
}
})())){
return reitit.coercion.request_coercers.call(null,coercion,parameters,opts);
} else {
return null;
}
});
/**
 * Returns a map of coerced input parameters using pre-compiled
 *   coercers under `:result` (provided by [[compile-request-coercers]].
 *   Throws `ex-info` if parameters can't be coerced
 *   If coercion or parameters are not defined, return `nil`
 */
reitit.coercion.coerce_BANG_ = (function reitit$coercion$coerce_BANG_(match){
var temp__5802__auto__ = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(match);
if(cljs.core.truth_(temp__5802__auto__)){
var coercers = temp__5802__auto__;
return reitit.coercion.coerce_request.call(null,coercers,match);
} else {
return null;
}
});

//# sourceMappingURL=coercion.js.map?rel=1668256487396
