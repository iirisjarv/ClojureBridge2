// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('reitit.core');
goog.require('cljs.core');
goog.require('reitit.exception');
goog.require('reitit.impl');
goog.require('reitit.trie');

/**
 * @interface
 */
reitit.core.Expand = function(){};

var reitit$core$Expand$expand$dyn_35924 = (function (this$,opts){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.core.expand[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$,opts);
} else {
var m__5389__auto__ = (reitit.core.expand["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$,opts);
} else {
throw cljs.core.missing_protocol.call(null,"Expand.expand",this$);
}
}
});
reitit.core.expand = (function reitit$core$expand(this$,opts){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Expand$expand$arity$2 == null)))))){
return this$.reitit$core$Expand$expand$arity$2(this$,opts);
} else {
return reitit$core$Expand$expand$dyn_35924.call(null,this$,opts);
}
});

(cljs.core.Keyword.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),this$__$1], null);
}));

(cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

(cljs.core.PersistentHashMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

(reitit.core.Expand["function"] = true);

(reitit.core.expand["function"] = (function (this$,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),this$], null);
}));

(reitit.core.Expand["null"] = true);

(reitit.core.expand["null"] = (function (_,___$1){
return null;
}));

/**
 * @interface
 */
reitit.core.Router = function(){};

var reitit$core$Router$router_name$dyn_35927 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.core.router_name[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$);
} else {
var m__5389__auto__ = (reitit.core.router_name["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.router-name",this$);
}
}
});
reitit.core.router_name = (function reitit$core$router_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$router_name$arity$1 == null)))))){
return this$.reitit$core$Router$router_name$arity$1(this$);
} else {
return reitit$core$Router$router_name$dyn_35927.call(null,this$);
}
});

var reitit$core$Router$routes$dyn_35928 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.core.routes[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$);
} else {
var m__5389__auto__ = (reitit.core.routes["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.routes",this$);
}
}
});
reitit.core.routes = (function reitit$core$routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$routes$arity$1 == null)))))){
return this$.reitit$core$Router$routes$arity$1(this$);
} else {
return reitit$core$Router$routes$dyn_35928.call(null,this$);
}
});

var reitit$core$Router$compiled_routes$dyn_35929 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.core.compiled_routes[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$);
} else {
var m__5389__auto__ = (reitit.core.compiled_routes["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.compiled-routes",this$);
}
}
});
reitit.core.compiled_routes = (function reitit$core$compiled_routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$compiled_routes$arity$1 == null)))))){
return this$.reitit$core$Router$compiled_routes$arity$1(this$);
} else {
return reitit$core$Router$compiled_routes$dyn_35929.call(null,this$);
}
});

var reitit$core$Router$options$dyn_35930 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.core.options[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$);
} else {
var m__5389__auto__ = (reitit.core.options["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.options",this$);
}
}
});
reitit.core.options = (function reitit$core$options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$options$arity$1 == null)))))){
return this$.reitit$core$Router$options$arity$1(this$);
} else {
return reitit$core$Router$options$dyn_35930.call(null,this$);
}
});

var reitit$core$Router$route_names$dyn_35931 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.core.route_names[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$);
} else {
var m__5389__auto__ = (reitit.core.route_names["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.route-names",this$);
}
}
});
reitit.core.route_names = (function reitit$core$route_names(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$route_names$arity$1 == null)))))){
return this$.reitit$core$Router$route_names$arity$1(this$);
} else {
return reitit$core$Router$route_names$dyn_35931.call(null,this$);
}
});

var reitit$core$Router$match_by_path$dyn_35932 = (function (this$,path){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.core.match_by_path[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$,path);
} else {
var m__5389__auto__ = (reitit.core.match_by_path["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$,path);
} else {
throw cljs.core.missing_protocol.call(null,"Router.match-by-path",this$);
}
}
});
reitit.core.match_by_path = (function reitit$core$match_by_path(this$,path){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_path$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_path$arity$2(this$,path);
} else {
return reitit$core$Router$match_by_path$dyn_35932.call(null,this$,path);
}
});

var reitit$core$Router$match_by_name$dyn_35933 = (function() {
var G__35934 = null;
var G__35934__2 = (function (this$,name){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.core.match_by_name[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$,name);
} else {
var m__5389__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$,name);
} else {
throw cljs.core.missing_protocol.call(null,"Router.match-by-name",this$);
}
}
});
var G__35934__3 = (function (this$,name,path_params){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.core.match_by_name[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$,name,path_params);
} else {
var m__5389__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$,name,path_params);
} else {
throw cljs.core.missing_protocol.call(null,"Router.match-by-name",this$);
}
}
});
G__35934 = function(this$,name,path_params){
switch(arguments.length){
case 2:
return G__35934__2.call(this,this$,name);
case 3:
return G__35934__3.call(this,this$,name,path_params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35934.cljs$core$IFn$_invoke$arity$2 = G__35934__2;
G__35934.cljs$core$IFn$_invoke$arity$3 = G__35934__3;
return G__35934;
})()
;
reitit.core.match_by_name = (function reitit$core$match_by_name(var_args){
var G__35926 = arguments.length;
switch (G__35926) {
case 2:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$2(this$,name);
} else {
return reitit$core$Router$match_by_name$dyn_35933.call(null,this$,name);
}
}));

(reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$3 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$3(this$,name,path_params);
} else {
return reitit$core$Router$match_by_name$dyn_35933.call(null,this$,name,path_params);
}
}));

(reitit.core.match_by_name.cljs$lang$maxFixedArity = 3);


reitit.core.router_QMARK_ = (function reitit$core$router_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.reitit$core$Router$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reitit.core.Router,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reitit.core.Router,x);
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
reitit.core.Match = (function (template,data,result,path_params,path,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k35938,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__35942 = k35938;
var G__35942__$1 = (((G__35942 instanceof cljs.core.Keyword))?G__35942.fqn:null);
switch (G__35942__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35938,else__5343__auto__);

}
}));

(reitit.core.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__35943){
var vec__35944 = p__35943;
var k__5364__auto__ = cljs.core.nth.call(null,vec__35944,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__35944,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(reitit.core.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#reitit.core.Match{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35937){
var self__ = this;
var G__35937__$1 = this;
return (new cljs.core.RecordIter((0),G__35937__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(reitit.core.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(reitit.core.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.core.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (687105853 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(reitit.core.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35939,other35940){
var self__ = this;
var this35939__$1 = this;
return (((!((other35940 == null)))) && ((((this35939__$1.constructor === other35940.constructor)) && (((cljs.core._EQ_.call(null,this35939__$1.template,other35940.template)) && (((cljs.core._EQ_.call(null,this35939__$1.data,other35940.data)) && (((cljs.core._EQ_.call(null,this35939__$1.result,other35940.result)) && (((cljs.core._EQ_.call(null,this35939__$1.path_params,other35940.path_params)) && (((cljs.core._EQ_.call(null,this35939__$1.path,other35940.path)) && (cljs.core._EQ_.call(null,this35939__$1.__extmap,other35940.__extmap)))))))))))))));
}));

(reitit.core.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(reitit.core.Match.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k35938){
var self__ = this;
var this__5347__auto____$1 = this;
var G__35947 = k35938;
var G__35947__$1 = (((G__35947 instanceof cljs.core.Keyword))?G__35947.fqn:null);
switch (G__35947__$1) {
case "template":
case "data":
case "result":
case "path-params":
case "path":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k35938);

}
}));

(reitit.core.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__35937){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__35948 = cljs.core.keyword_identical_QMARK_;
var expr__35949 = k__5349__auto__;
if(cljs.core.truth_(pred__35948.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__35949))){
return (new reitit.core.Match(G__35937,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35948.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__35949))){
return (new reitit.core.Match(self__.template,G__35937,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35948.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__35949))){
return (new reitit.core.Match(self__.template,self__.data,G__35937,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35948.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__35949))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,G__35937,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35948.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__35949))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,G__35937,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__35937),null));
}
}
}
}
}
}));

(reitit.core.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__35937){
var self__ = this;
var this__5339__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,G__35937,self__.__extmap,self__.__hash));
}));

(reitit.core.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(reitit.core.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
}));

(reitit.core.Match.cljs$lang$type = true);

(reitit.core.Match.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"reitit.core/Match",null,(1),null));
}));

(reitit.core.Match.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"reitit.core/Match");
}));

/**
 * Positional factory function for reitit.core/Match.
 */
reitit.core.__GT_Match = (function reitit$core$__GT_Match(template,data,result,path_params,path){
return (new reitit.core.Match(template,data,result,path_params,path,null,null,null));
});

/**
 * Factory function for reitit.core/Match, taking a map of keywords to field values.
 */
reitit.core.map__GT_Match = (function reitit$core$map__GT_Match(G__35941){
var extmap__5382__auto__ = (function (){var G__35951 = cljs.core.dissoc.call(null,G__35941,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.record_QMARK_.call(null,G__35941)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35951);
} else {
return G__35951;
}
})();
return (new reitit.core.Match(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__35941),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__35941),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__35941),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__35941),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__35941),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
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
reitit.core.PartialMatch = (function (template,data,result,path_params,required,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.required = required;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k35955,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__35959 = k35955;
var G__35959__$1 = (((G__35959 instanceof cljs.core.Keyword))?G__35959.fqn:null);
switch (G__35959__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "required":
return self__.required;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35955,else__5343__auto__);

}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__35960){
var vec__35961 = p__35960;
var k__5364__auto__ = cljs.core.nth.call(null,vec__35961,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__35961,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(reitit.core.PartialMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#reitit.core.PartialMatch{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null))], null),self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35954){
var self__ = this;
var G__35954__$1 = this;
return (new cljs.core.RecordIter((0),G__35954__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (492095938 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35956,other35957){
var self__ = this;
var this35956__$1 = this;
return (((!((other35957 == null)))) && ((((this35956__$1.constructor === other35957.constructor)) && (((cljs.core._EQ_.call(null,this35956__$1.template,other35957.template)) && (((cljs.core._EQ_.call(null,this35956__$1.data,other35957.data)) && (((cljs.core._EQ_.call(null,this35956__$1.result,other35957.result)) && (((cljs.core._EQ_.call(null,this35956__$1.path_params,other35957.path_params)) && (((cljs.core._EQ_.call(null,this35956__$1.required,other35957.required)) && (cljs.core._EQ_.call(null,this35956__$1.__extmap,other35957.__extmap)))))))))))))));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"required","required",1807647006),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k35955){
var self__ = this;
var this__5347__auto____$1 = this;
var G__35964 = k35955;
var G__35964__$1 = (((G__35964 instanceof cljs.core.Keyword))?G__35964.fqn:null);
switch (G__35964__$1) {
case "template":
case "data":
case "result":
case "path-params":
case "required":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k35955);

}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__35954){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__35965 = cljs.core.keyword_identical_QMARK_;
var expr__35966 = k__5349__auto__;
if(cljs.core.truth_(pred__35965.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__35966))){
return (new reitit.core.PartialMatch(G__35954,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35965.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__35966))){
return (new reitit.core.PartialMatch(self__.template,G__35954,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35965.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__35966))){
return (new reitit.core.PartialMatch(self__.template,self__.data,G__35954,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35965.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__35966))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,G__35954,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35965.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__35966))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,G__35954,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__35954),null));
}
}
}
}
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"required","required",1807647006),self__.required,null))], null),self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__35954){
var self__ = this;
var this__5339__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,G__35954,self__.__extmap,self__.__hash));
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(reitit.core.PartialMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"required","required",-846788763,null)], null);
}));

(reitit.core.PartialMatch.cljs$lang$type = true);

(reitit.core.PartialMatch.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"reitit.core/PartialMatch",null,(1),null));
}));

(reitit.core.PartialMatch.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"reitit.core/PartialMatch");
}));

/**
 * Positional factory function for reitit.core/PartialMatch.
 */
reitit.core.__GT_PartialMatch = (function reitit$core$__GT_PartialMatch(template,data,result,path_params,required){
return (new reitit.core.PartialMatch(template,data,result,path_params,required,null,null,null));
});

/**
 * Factory function for reitit.core/PartialMatch, taking a map of keywords to field values.
 */
reitit.core.map__GT_PartialMatch = (function reitit$core$map__GT_PartialMatch(G__35958){
var extmap__5382__auto__ = (function (){var G__35968 = cljs.core.dissoc.call(null,G__35958,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006));
if(cljs.core.record_QMARK_.call(null,G__35958)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__35968);
} else {
return G__35968;
}
})();
return (new reitit.core.PartialMatch(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__35958),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__35958),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__35958),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__35958),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__35958),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});

reitit.core.partial_match_QMARK_ = (function reitit$core$partial_match_QMARK_(x){
return (x instanceof reitit.core.PartialMatch);
});
reitit.core.match_by_name_BANG_ = (function reitit$core$match_by_name_BANG_(var_args){
var G__35972 = arguments.length;
switch (G__35972) {
case 2:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
return reitit.core.match_by_name_BANG_.call(null,this$,name,null);
}));

(reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
var temp__5802__auto__ = reitit.core.match_by_name.call(null,this$,name,path_params);
if(cljs.core.truth_(temp__5802__auto__)){
var match = temp__5802__auto__;
if((!(reitit.core.partial_match_QMARK_.call(null,match)))){
return match;
} else {
return reitit.impl.throw_on_missing_path_params.call(null,new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(match),path_params);
}
} else {
return null;
}
}));

(reitit.core.match_by_name_BANG_.cljs$lang$maxFixedArity = 3);

reitit.core.match__GT_path = (function reitit$core$match__GT_path(var_args){
var G__35975 = arguments.length;
switch (G__35975) {
case 1:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (match){
return reitit.core.match__GT_path.call(null,match,null);
}));

(reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (match,query_params){
var G__35976 = match;
var G__35976__$1 = (((G__35976 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__35976));
if((G__35976__$1 == null)){
return null;
} else {
var G__35977 = G__35976__$1;
if(cljs.core.seq.call(null,query_params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35977),"?",reitit.impl.query_string.call(null,query_params)].join('');
} else {
return G__35977;
}
}
}));

(reitit.core.match__GT_path.cljs$lang$maxFixedArity = 2);

/**
 * Creates a linear-router from resolved routes and optional
 *   expanded options. See [[router]] for available options, plus the following:
 * 
 *   | key                          | description |
 *   | -----------------------------|-------------|
 *   | `:reitit.trie/trie-compiler` | Optional trie-compiler.
 *   | `:reitit.trie/parameters`    | Optional function to create empty map(-like) path parameters value from sequence of keys.
 */
reitit.core.linear_router = (function reitit$core$linear_router(var_args){
var G__35981 = arguments.length;
switch (G__35981) {
case 1:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.linear_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var compiler = new cljs.core.Keyword("reitit.trie","trie-compiler","reitit.trie/trie-compiler",2125029755).cljs$core$IFn$_invoke$arity$2(opts,reitit.trie.compiler.call(null));
var names = reitit.impl.find_names.call(null,compiled_routes,opts);
var vec__35982 = cljs.core.reduce.call(null,(function (p__35985,p__35986){
var vec__35987 = p__35985;
var pl = cljs.core.nth.call(null,vec__35987,(0),null);
var nl = cljs.core.nth.call(null,vec__35987,(1),null);
var vec__35990 = p__35986;
var p = cljs.core.nth.call(null,vec__35990,(0),null);
var map__35993 = cljs.core.nth.call(null,vec__35990,(1),null);
var map__35993__$1 = cljs.core.__destructure_map.call(null,map__35993);
var data = map__35993__$1;
var name = cljs.core.get.call(null,map__35993__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.call(null,vec__35990,(2),null);
var map__35994 = reitit.impl.parse.call(null,p,opts);
var map__35994__$1 = cljs.core.__destructure_map.call(null,map__35994);
var route = map__35994__$1;
var path_params = cljs.core.get.call(null,map__35994__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = (function (p1__35979_SHARP_){
var temp__5802__auto__ = reitit.impl.path_for.call(null,route,p1__35979_SHARP_);
if(cljs.core.truth_(temp__5802__auto__)){
var path = temp__5802__auto__;
return reitit.core.__GT_Match.call(null,p,data,result,reitit.impl.url_decode_coll.call(null,p1__35979_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch.call(null,p,data,result,reitit.impl.url_decode_coll.call(null,p1__35979_SHARP_),path_params);
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,pl,reitit.trie.compile.call(null,reitit.trie.insert.call(null,null,p,reitit.core.__GT_Match.call(null,p,data,result,null,null),opts))),(cljs.core.truth_(name)?cljs.core.assoc.call(null,nl,name,f):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.call(null,vec__35982,(0),null);
var nl = cljs.core.nth.call(null,vec__35982,(1),null);
var lookup = reitit.impl.fast_map.call(null,nl);
var matcher = reitit.trie.linear_matcher.call(null,compiler,pl,true);
var match_by_path = reitit.trie.path_matcher.call(null,matcher,compiler);
var routes = reitit.impl.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core35995 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core35995 = (function (matcher,names,compiled_routes,routes,lookup,vec__35982,pl,nl,match_by_path,compiler,opts,meta35996){
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.vec__35982 = vec__35982;
this.pl = pl;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta35996 = meta35996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core35995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35997,meta35996__$1){
var self__ = this;
var _35997__$1 = this;
return (new reitit.core.t_reitit$core35995(self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.vec__35982,self__.pl,self__.nl,self__.match_by_path,self__.compiler,self__.opts,meta35996__$1));
}));

(reitit.core.t_reitit$core35995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35997){
var self__ = this;
var _35997__$1 = this;
return self__.meta35996;
}));

(reitit.core.t_reitit$core35995.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core35995.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"linear-router","linear-router",-755184172);
}));

(reitit.core.t_reitit$core35995.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core35995.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core35995.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core35995.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core35995.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5802__auto__ = self__.match_by_path.call(null,path);
if(cljs.core.truth_(temp__5802__auto__)){
var match = temp__5802__auto__;
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match)),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
}));

(reitit.core.t_reitit$core35995.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5802__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5802__auto__)){
var match = temp__5802__auto__;
return match.call(null,null);
} else {
return null;
}
}));

(reitit.core.t_reitit$core35995.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5802__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5802__auto__)){
var match = temp__5802__auto__;
return match.call(null,reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
}));

(reitit.core.t_reitit$core35995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"vec__35982","vec__35982",1944656531,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"match-by-path","match-by-path",272707419,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta35996","meta35996",-859353546,null)], null);
}));

(reitit.core.t_reitit$core35995.cljs$lang$type = true);

(reitit.core.t_reitit$core35995.cljs$lang$ctorStr = "reitit.core/t_reitit$core35995");

(reitit.core.t_reitit$core35995.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"reitit.core/t_reitit$core35995");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core35995.
 */
reitit.core.__GT_t_reitit$core35995 = (function reitit$core$__GT_t_reitit$core35995(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,vec__35982__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta35996){
return (new reitit.core.t_reitit$core35995(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,vec__35982__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta35996));
});

}

return (new reitit.core.t_reitit$core35995(matcher,names,compiled_routes,routes,lookup,vec__35982,pl,nl,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.linear_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a lookup-router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.lookup_router = (function reitit$core$lookup_router(var_args){
var G__36001 = arguments.length;
switch (G__36001) {
case 1:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.lookup_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var temp__5804__auto___36018 = cljs.core.seq.call(null,cljs.core.filter.call(null,reitit.impl.__GT_wild_route_QMARK_.call(null,opts),compiled_routes));
if(temp__5804__auto___36018){
var wilds_36019 = temp__5804__auto___36018;
reitit.exception.fail_BANG_.call(null,["can't create :lookup-router with wildcard routes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wilds_36019)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wilds","wilds",132271223),wilds_36019,new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var names = reitit.impl.find_names.call(null,compiled_routes,opts);
var vec__36002 = cljs.core.reduce.call(null,(function (p__36005,p__36006){
var vec__36007 = p__36005;
var pl = cljs.core.nth.call(null,vec__36007,(0),null);
var nl = cljs.core.nth.call(null,vec__36007,(1),null);
var vec__36010 = p__36006;
var p = cljs.core.nth.call(null,vec__36010,(0),null);
var map__36013 = cljs.core.nth.call(null,vec__36010,(1),null);
var map__36013__$1 = cljs.core.__destructure_map.call(null,map__36013);
var data = map__36013__$1;
var name = cljs.core.get.call(null,map__36013__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.call(null,vec__36010,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,pl,p,reitit.core.__GT_Match.call(null,p,data,result,cljs.core.PersistentArrayMap.EMPTY,p)),(cljs.core.truth_(name)?cljs.core.assoc.call(null,nl,name,(function (p1__35999_SHARP_){
return reitit.core.__GT_Match.call(null,p,data,result,p1__35999_SHARP_,p);
})):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.call(null,vec__36002,(0),null);
var nl = cljs.core.nth.call(null,vec__36002,(1),null);
var data = reitit.impl.fast_map.call(null,pl);
var lookup = reitit.impl.fast_map.call(null,nl);
var routes = reitit.impl.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core36014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core36014 = (function (vec__36002,names,data,compiled_routes,routes,lookup,pl,nl,opts,meta36015){
this.vec__36002 = vec__36002;
this.names = names;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.opts = opts;
this.meta36015 = meta36015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core36014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36016,meta36015__$1){
var self__ = this;
var _36016__$1 = this;
return (new reitit.core.t_reitit$core36014(self__.vec__36002,self__.names,self__.data,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.opts,meta36015__$1));
}));

(reitit.core.t_reitit$core36014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36016){
var self__ = this;
var _36016__$1 = this;
return self__.meta36015;
}));

(reitit.core.t_reitit$core36014.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core36014.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"lookup-router","lookup-router",-684998665);
}));

(reitit.core.t_reitit$core36014.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core36014.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core36014.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core36014.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core36014.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
return reitit.impl.fast_get.call(null,self__.data,path);
}));

(reitit.core.t_reitit$core36014.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5802__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5802__auto__)){
var match = temp__5802__auto__;
return match.call(null,null);
} else {
return null;
}
}));

(reitit.core.t_reitit$core36014.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5802__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5802__auto__)){
var match = temp__5802__auto__;
return match.call(null,reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
}));

(reitit.core.t_reitit$core36014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec__36002","vec__36002",1579801155,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta36015","meta36015",-1173688775,null)], null);
}));

(reitit.core.t_reitit$core36014.cljs$lang$type = true);

(reitit.core.t_reitit$core36014.cljs$lang$ctorStr = "reitit.core/t_reitit$core36014");

(reitit.core.t_reitit$core36014.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"reitit.core/t_reitit$core36014");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core36014.
 */
reitit.core.__GT_t_reitit$core36014 = (function reitit$core$__GT_t_reitit$core36014(vec__36002__$1,names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,opts__$1,meta36015){
return (new reitit.core.t_reitit$core36014(vec__36002__$1,names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,opts__$1,meta36015));
});

}

return (new reitit.core.t_reitit$core36014(vec__36002,names,data,compiled_routes,routes,lookup,pl,nl,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.lookup_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a special prefix-tree router from resolved routes and optional
 *   expanded options. See [[router]] for available options, plus the following:
 * 
 *   | key                          | description |
 *   | -----------------------------|-------------|
 *   | `:reitit.trie/trie-compiler` | Optional trie-compiler.
 *   | `:reitit.trie/parameters`    | Optional function to create empty map(-like) path parameters value from sequence of keys.
 */
reitit.core.trie_router = (function reitit$core$trie_router(var_args){
var G__36022 = arguments.length;
switch (G__36022) {
case 1:
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.trie_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.trie_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var compiler = new cljs.core.Keyword("reitit.trie","trie-compiler","reitit.trie/trie-compiler",2125029755).cljs$core$IFn$_invoke$arity$2(opts,reitit.trie.compiler.call(null));
var names = reitit.impl.find_names.call(null,compiled_routes,opts);
var vec__36023 = cljs.core.reduce.call(null,(function (p__36026,p__36027){
var vec__36028 = p__36026;
var pl = cljs.core.nth.call(null,vec__36028,(0),null);
var nl = cljs.core.nth.call(null,vec__36028,(1),null);
var vec__36031 = p__36027;
var p = cljs.core.nth.call(null,vec__36031,(0),null);
var map__36034 = cljs.core.nth.call(null,vec__36031,(1),null);
var map__36034__$1 = cljs.core.__destructure_map.call(null,map__36034);
var data = map__36034__$1;
var name = cljs.core.get.call(null,map__36034__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.call(null,vec__36031,(2),null);
var map__36035 = reitit.impl.parse.call(null,p,opts);
var map__36035__$1 = cljs.core.__destructure_map.call(null,map__36035);
var route = map__36035__$1;
var path_params = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = (function (p1__36020_SHARP_){
var temp__5802__auto__ = reitit.impl.path_for.call(null,route,p1__36020_SHARP_);
if(cljs.core.truth_(temp__5802__auto__)){
var path = temp__5802__auto__;
return reitit.core.__GT_Match.call(null,p,data,result,reitit.impl.url_decode_coll.call(null,p1__36020_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch.call(null,p,data,result,reitit.impl.url_decode_coll.call(null,p1__36020_SHARP_),path_params);
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.insert.call(null,pl,p,reitit.core.__GT_Match.call(null,p,data,result,null,null),opts),(cljs.core.truth_(name)?cljs.core.assoc.call(null,nl,name,f):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.call(null,vec__36023,(0),null);
var nl = cljs.core.nth.call(null,vec__36023,(1),null);
var matcher = reitit.trie.compile.call(null,pl,compiler);
var match_by_path = (cljs.core.truth_(matcher)?reitit.trie.path_matcher.call(null,matcher,compiler):null);
var lookup = reitit.impl.fast_map.call(null,nl);
var routes = reitit.impl.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core36036 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core36036 = (function (matcher,names,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,opts,vec__36023,meta36037){
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.vec__36023 = vec__36023;
this.meta36037 = meta36037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core36036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36038,meta36037__$1){
var self__ = this;
var _36038__$1 = this;
return (new reitit.core.t_reitit$core36036(self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.match_by_path,self__.compiler,self__.opts,self__.vec__36023,meta36037__$1));
}));

(reitit.core.t_reitit$core36036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36038){
var self__ = this;
var _36038__$1 = this;
return self__.meta36037;
}));

(reitit.core.t_reitit$core36036.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core36036.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"trie-router","trie-router",1876430760);
}));

(reitit.core.t_reitit$core36036.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core36036.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core36036.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core36036.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core36036.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5802__auto__ = (function (){var and__5041__auto__ = self__.match_by_path;
if(cljs.core.truth_(and__5041__auto__)){
return self__.match_by_path.call(null,path);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var match = temp__5802__auto__;
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match)),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
}));

(reitit.core.t_reitit$core36036.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5802__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5802__auto__)){
var match = temp__5802__auto__;
return match.call(null,null);
} else {
return null;
}
}));

(reitit.core.t_reitit$core36036.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5802__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5802__auto__)){
var match = temp__5802__auto__;
return match.call(null,reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
}));

(reitit.core.t_reitit$core36036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"match-by-path","match-by-path",272707419,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"vec__36023","vec__36023",1095833790,null),new cljs.core.Symbol(null,"meta36037","meta36037",-1881070466,null)], null);
}));

(reitit.core.t_reitit$core36036.cljs$lang$type = true);

(reitit.core.t_reitit$core36036.cljs$lang$ctorStr = "reitit.core/t_reitit$core36036");

(reitit.core.t_reitit$core36036.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"reitit.core/t_reitit$core36036");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core36036.
 */
reitit.core.__GT_t_reitit$core36036 = (function reitit$core$__GT_t_reitit$core36036(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,vec__36023__$1,meta36037){
return (new reitit.core.t_reitit$core36036(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,vec__36023__$1,meta36037));
});

}

return (new reitit.core.t_reitit$core36036(matcher,names,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,opts,vec__36023,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.trie_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a fast router of 1 static route(s) and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.single_static_path_router = (function reitit$core$single_static_path_router(var_args){
var G__36041 = arguments.length;
switch (G__36041) {
case 1:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.single_static_path_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
if(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.not_EQ_.call(null,cljs.core.count.call(null,compiled_routes),(1));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.some.call(null,reitit.impl.__GT_wild_route_QMARK_.call(null,opts),compiled_routes);
}
})())){
reitit.exception.fail_BANG_.call(null,[":single-static-path-router requires exactly 1 static route: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(compiled_routes)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var vec__36042 = reitit.impl.find_names.call(null,compiled_routes,opts);
var n = cljs.core.nth.call(null,vec__36042,(0),null);
var names = vec__36042;
var vec__36045 = compiled_routes;
var vec__36048 = cljs.core.nth.call(null,vec__36045,(0),null);
var p = cljs.core.nth.call(null,vec__36048,(0),null);
var data = cljs.core.nth.call(null,vec__36048,(1),null);
var result = cljs.core.nth.call(null,vec__36048,(2),null);
var p__$1 = p;
var match = reitit.core.__GT_Match.call(null,p__$1,data,result,cljs.core.PersistentArrayMap.EMPTY,p__$1);
var routes = reitit.impl.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core36051 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core36051 = (function (p,names,match,data,compiled_routes,vec__36045,routes,vec__36048,n,result,opts,vec__36042,meta36052){
this.p = p;
this.names = names;
this.match = match;
this.data = data;
this.compiled_routes = compiled_routes;
this.vec__36045 = vec__36045;
this.routes = routes;
this.vec__36048 = vec__36048;
this.n = n;
this.result = result;
this.opts = opts;
this.vec__36042 = vec__36042;
this.meta36052 = meta36052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core36051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36053,meta36052__$1){
var self__ = this;
var _36053__$1 = this;
return (new reitit.core.t_reitit$core36051(self__.p,self__.names,self__.match,self__.data,self__.compiled_routes,self__.vec__36045,self__.routes,self__.vec__36048,self__.n,self__.result,self__.opts,self__.vec__36042,meta36052__$1));
}));

(reitit.core.t_reitit$core36051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36053){
var self__ = this;
var _36053__$1 = this;
return self__.meta36052;
}));

(reitit.core.t_reitit$core36051.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core36051.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"single-static-path-router","single-static-path-router",-247523580);
}));

(reitit.core.t_reitit$core36051.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core36051.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core36051.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core36051.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core36051.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,self__.p,path)){
return self__.match;
} else {
return null;
}
}));

(reitit.core.t_reitit$core36051.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,self__.n,name)){
return self__.match;
} else {
return null;
}
}));

(reitit.core.t_reitit$core36051.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,self__.n,name)){
return reitit.impl.fast_assoc.call(null,self__.match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
}));

(reitit.core.t_reitit$core36051.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"vec__36045","vec__36045",1440847719,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"vec__36048","vec__36048",-1918119957,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"vec__36042","vec__36042",-175487236,null),new cljs.core.Symbol(null,"meta36052","meta36052",-1655704665,null)], null);
}));

(reitit.core.t_reitit$core36051.cljs$lang$type = true);

(reitit.core.t_reitit$core36051.cljs$lang$ctorStr = "reitit.core/t_reitit$core36051");

(reitit.core.t_reitit$core36051.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"reitit.core/t_reitit$core36051");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core36051.
 */
reitit.core.__GT_t_reitit$core36051 = (function reitit$core$__GT_t_reitit$core36051(p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,vec__36045__$1,routes__$1,vec__36048__$1,n__$1,result__$1,opts__$1,vec__36042__$1,meta36052){
return (new reitit.core.t_reitit$core36051(p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,vec__36045__$1,routes__$1,vec__36048__$1,n__$1,result__$1,opts__$1,vec__36042__$1,meta36052));
});

}

return (new reitit.core.t_reitit$core36051(p__$1,names,match,data,compiled_routes,vec__36045,routes,vec__36048,n,result,opts,vec__36042,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.single_static_path_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates two routers: [[lookup-router]] or [[single-static-path-router]] for
 *   static routes and [[segment-router]] for wildcard routes. All
 *   routes should be non-conflicting. Takes resolved routes and optional
 *   expanded options. See [[router]] for options.
 */
reitit.core.mixed_router = (function reitit$core$mixed_router(var_args){
var G__36056 = arguments.length;
switch (G__36056) {
case 1:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.mixed_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var map__36057 = cljs.core.group_by.call(null,reitit.impl.__GT_wild_route_QMARK_.call(null,opts),compiled_routes);
var map__36057__$1 = cljs.core.__destructure_map.call(null,map__36057);
var wild = cljs.core.get.call(null,map__36057__$1,true);
var lookup = cljs.core.get.call(null,map__36057__$1,false);
var __GT_static_router = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,lookup)))?reitit.core.single_static_path_router:reitit.core.lookup_router);
var wildcard_router = reitit.core.trie_router.call(null,wild,opts);
var static_router = __GT_static_router.call(null,lookup,opts);
var names = reitit.impl.find_names.call(null,compiled_routes,opts);
var routes = reitit.impl.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core36058 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core36058 = (function (names,compiled_routes,routes,__GT_static_router,lookup,map__36057,wild,static_router,opts,wildcard_router,meta36059){
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.__GT_static_router = __GT_static_router;
this.lookup = lookup;
this.map__36057 = map__36057;
this.wild = wild;
this.static_router = static_router;
this.opts = opts;
this.wildcard_router = wildcard_router;
this.meta36059 = meta36059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core36058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36060,meta36059__$1){
var self__ = this;
var _36060__$1 = this;
return (new reitit.core.t_reitit$core36058(self__.names,self__.compiled_routes,self__.routes,self__.__GT_static_router,self__.lookup,self__.map__36057,self__.wild,self__.static_router,self__.opts,self__.wildcard_router,meta36059__$1));
}));

(reitit.core.t_reitit$core36058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36060){
var self__ = this;
var _36060__$1 = this;
return self__.meta36059;
}));

(reitit.core.t_reitit$core36058.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core36058.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"mixed-router","mixed-router",-1225013968);
}));

(reitit.core.t_reitit$core36058.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core36058.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core36058.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core36058.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core36058.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var or__5043__auto__ = reitit.core.match_by_path.call(null,self__.static_router,path);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return reitit.core.match_by_path.call(null,self__.wildcard_router,path);
}
}));

(reitit.core.t_reitit$core36058.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5043__auto__ = reitit.core.match_by_name.call(null,self__.static_router,name);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return reitit.core.match_by_name.call(null,self__.wildcard_router,name);
}
}));

(reitit.core.t_reitit$core36058.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__5043__auto__ = reitit.core.match_by_name.call(null,self__.static_router,name,path_params);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return reitit.core.match_by_name.call(null,self__.wildcard_router,name,path_params);
}
}));

(reitit.core.t_reitit$core36058.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"->static-router","->static-router",-1746495540,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"map__36057","map__36057",1669264654,null),new cljs.core.Symbol(null,"wild","wild",-2041111534,null),new cljs.core.Symbol(null,"static-router","static-router",439222930,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"wildcard-router","wildcard-router",553983966,null),new cljs.core.Symbol(null,"meta36059","meta36059",-1630119512,null)], null);
}));

(reitit.core.t_reitit$core36058.cljs$lang$type = true);

(reitit.core.t_reitit$core36058.cljs$lang$ctorStr = "reitit.core/t_reitit$core36058");

(reitit.core.t_reitit$core36058.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"reitit.core/t_reitit$core36058");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core36058.
 */
reitit.core.__GT_t_reitit$core36058 = (function reitit$core$__GT_t_reitit$core36058(names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,map__36057__$2,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta36059){
return (new reitit.core.t_reitit$core36058(names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,map__36057__$2,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta36059));
});

}

return (new reitit.core.t_reitit$core36058(names,compiled_routes,routes,__GT_static_router,lookup,map__36057__$1,wild,static_router,opts,wildcard_router,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.mixed_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates two routers: [[mixed-router]] for non-conflicting routes
 *   and [[linear-router]] for conflicting routes. Takes resolved routes
 *   and optional expanded options. See [[router]] for options.
 */
reitit.core.quarantine_router = (function reitit$core$quarantine_router(var_args){
var G__36064 = arguments.length;
switch (G__36064) {
case 1:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.quarantine_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var conflicting_paths = reitit.impl.conflicting_paths.call(null,(function (){var or__5043__auto__ = new cljs.core.Keyword("reitit.core","path-conflicting","reitit.core/path-conflicting",617644429).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return reitit.impl.path_conflicting_routes.call(null,compiled_routes,opts);
}
})());
var conflicting_QMARK_ = (function (p1__36062_SHARP_){
return cljs.core.contains_QMARK_.call(null,conflicting_paths,cljs.core.first.call(null,p1__36062_SHARP_));
});
var map__36065 = cljs.core.group_by.call(null,conflicting_QMARK_,compiled_routes);
var map__36065__$1 = cljs.core.__destructure_map.call(null,map__36065);
var conflicting = cljs.core.get.call(null,map__36065__$1,true);
var non_conflicting = cljs.core.get.call(null,map__36065__$1,false);
var linear_router = reitit.core.linear_router.call(null,conflicting,opts);
var mixed_router = reitit.core.mixed_router.call(null,non_conflicting,opts);
var names = reitit.impl.find_names.call(null,compiled_routes,opts);
var routes = reitit.impl.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core36066 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core36066 = (function (non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,mixed_router,map__36065,linear_router,opts,meta36067){
this.non_conflicting = non_conflicting;
this.names = names;
this.conflicting_paths = conflicting_paths;
this.compiled_routes = compiled_routes;
this.conflicting = conflicting;
this.routes = routes;
this.conflicting_QMARK_ = conflicting_QMARK_;
this.mixed_router = mixed_router;
this.map__36065 = map__36065;
this.linear_router = linear_router;
this.opts = opts;
this.meta36067 = meta36067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core36066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36068,meta36067__$1){
var self__ = this;
var _36068__$1 = this;
return (new reitit.core.t_reitit$core36066(self__.non_conflicting,self__.names,self__.conflicting_paths,self__.compiled_routes,self__.conflicting,self__.routes,self__.conflicting_QMARK_,self__.mixed_router,self__.map__36065,self__.linear_router,self__.opts,meta36067__$1));
}));

(reitit.core.t_reitit$core36066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36068){
var self__ = this;
var _36068__$1 = this;
return self__.meta36067;
}));

(reitit.core.t_reitit$core36066.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core36066.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"quarantine-router","quarantine-router",-1548185225);
}));

(reitit.core.t_reitit$core36066.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core36066.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core36066.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core36066.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core36066.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var or__5043__auto__ = reitit.core.match_by_path.call(null,self__.mixed_router,path);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return reitit.core.match_by_path.call(null,self__.linear_router,path);
}
}));

(reitit.core.t_reitit$core36066.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5043__auto__ = reitit.core.match_by_name.call(null,self__.mixed_router,name);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return reitit.core.match_by_name.call(null,self__.linear_router,name);
}
}));

(reitit.core.t_reitit$core36066.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__5043__auto__ = reitit.core.match_by_name.call(null,self__.mixed_router,name,path_params);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return reitit.core.match_by_name.call(null,self__.linear_router,name,path_params);
}
}));

(reitit.core.t_reitit$core36066.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"non-conflicting","non-conflicting",1853515681,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"conflicting-paths","conflicting-paths",-1148454714,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"conflicting","conflicting",-650607353,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"conflicting?","conflicting?",-1064530835,null),new cljs.core.Symbol(null,"mixed-router","mixed-router",415517559,null),new cljs.core.Symbol(null,"map__36065","map__36065",-1200711624,null),new cljs.core.Symbol(null,"linear-router","linear-router",885347355,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta36067","meta36067",-2067796835,null)], null);
}));

(reitit.core.t_reitit$core36066.cljs$lang$type = true);

(reitit.core.t_reitit$core36066.cljs$lang$ctorStr = "reitit.core/t_reitit$core36066");

(reitit.core.t_reitit$core36066.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"reitit.core/t_reitit$core36066");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core36066.
 */
reitit.core.__GT_t_reitit$core36066 = (function reitit$core$__GT_t_reitit$core36066(non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,routes__$1,conflicting_QMARK___$1,mixed_router__$1,map__36065__$2,linear_router__$1,opts__$1,meta36067){
return (new reitit.core.t_reitit$core36066(non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,routes__$1,conflicting_QMARK___$1,mixed_router__$1,map__36065__$2,linear_router__$1,opts__$1,meta36067));
});

}

return (new reitit.core.t_reitit$core36066(non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,mixed_router,map__36065__$1,linear_router,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.quarantine_router.cljs$lang$maxFixedArity = 2);

reitit.core.default_router_options = (function reitit$core$default_router_options(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"lookup","lookup",1225356838),(function reitit$core$default_router_options_$_lookup(p__36070,_){
var vec__36071 = p__36070;
var ___$1 = cljs.core.nth.call(null,vec__36071,(0),null);
var map__36074 = cljs.core.nth.call(null,vec__36071,(1),null);
var map__36074__$1 = cljs.core.__destructure_map.call(null,map__36074);
var name = cljs.core.get.call(null,map__36074__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(name)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([name]);
} else {
return null;
}
}),new cljs.core.Keyword(null,"expand","expand",595248157),reitit.core.expand,new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function reitit$core$default_router_options_$_coerce(route,_){
return route;
}),new cljs.core.Keyword(null,"compile","compile",608186429),(function reitit$core$default_router_options_$_compile(p__36075,_){
var vec__36076 = p__36075;
var ___$1 = cljs.core.nth.call(null,vec__36076,(0),null);
var map__36079 = cljs.core.nth.call(null,vec__36076,(1),null);
var map__36079__$1 = cljs.core.__destructure_map.call(null,map__36079);
var handler = cljs.core.get.call(null,map__36079__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return handler;
}),new cljs.core.Keyword(null,"exception","exception",-335277064),reitit.exception.exception,new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),(function reitit$core$default_router_options_$_throw_BANG_(conflicts){
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword(null,"path-conflicts","path-conflicts",-1238675313),conflicts);
})], null);
});
/**
 * Create a [[Router]] from raw route data and optionally an options map.
 *   Selects implementation based on route details. The following options
 *   are available:
 * 
 *   | key          | description
 *   | -------------|-------------
 *   | `:path`      | Base-path for routes
 *   | `:routes`    | Initial resolved routes (default `[]`)
 *   | `:data`      | Initial route data (default `{}`)
 *   | `:spec`      | clojure.spec definition for a route data, see `reitit.spec` on how to use this
 *   | `:syntax`    | Path-parameter syntax as keyword or set of keywords (default #{:bracket :colon})
 *   | `:expand`    | Function of `arg opts => data` to expand route arg to route data (default `reitit.core/expand`)
 *   | `:coerce`    | Function of `route opts => route` to coerce resolved route, can throw or return `nil`
 *   | `:compile`   | Function of `route opts => result` to compile a route handler
 *   | `:validate`  | Function of `routes opts => ()` to validate route (data) via side-effects
 *   | `:conflicts` | Function of `{route #{route}} => ()` to handle conflicting routes
 *   | `:exception` | Function of `Exception => Exception ` to handle creation time exceptions (default `reitit.exception/exception`)
 *   | `:router`    | Function of `routes opts => router` to override the actual router implementation
 */
reitit.core.router = (function reitit$core$router(var_args){
var G__36081 = arguments.length;
switch (G__36081) {
case 1:
return reitit.core.router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.router.cljs$core$IFn$_invoke$arity$1 = (function (raw_routes){
return reitit.core.router.call(null,raw_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.router.cljs$core$IFn$_invoke$arity$2 = (function (raw_routes,opts){
var map__36082 = cljs.core.merge.call(null,reitit.core.default_router_options.call(null),opts);
var map__36082__$1 = cljs.core.__destructure_map.call(null,map__36082);
var opts__$1 = map__36082__$1;
var router = cljs.core.get.call(null,map__36082__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var conflicts = cljs.core.get.call(null,map__36082__$1,new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816));
try{var routes = reitit.impl.resolve_routes.call(null,raw_routes,opts__$1);
var path_conflicting = ((cljs.core.not.call(null,(function (){var and__5041__auto__ = router;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not.call(null,conflicts);
} else {
return and__5041__auto__;
}
})()))?reitit.impl.path_conflicting_routes.call(null,routes,opts__$1):null);
var name_conflicting = reitit.impl.name_conflicting_routes.call(null,routes);
var compiled_routes = reitit.impl.compile_routes.call(null,routes,opts__$1);
var wilds_QMARK_ = cljs.core.boolean$.call(null,cljs.core.some.call(null,reitit.impl.__GT_wild_route_QMARK_.call(null,opts__$1),compiled_routes));
var all_wilds_QMARK_ = cljs.core.every_QMARK_.call(null,reitit.impl.__GT_wild_route_QMARK_.call(null,opts__$1),compiled_routes);
var router__$1 = (cljs.core.truth_(router)?router:((((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,compiled_routes))) && ((!(wilds_QMARK_)))))?reitit.core.single_static_path_router:(cljs.core.truth_(path_conflicting)?reitit.core.quarantine_router:(((!(wilds_QMARK_)))?reitit.core.lookup_router:((all_wilds_QMARK_)?reitit.core.trie_router:reitit.core.mixed_router
)))));
var temp__5804__auto___36085 = (function (){var and__5041__auto__ = conflicts;
if(cljs.core.truth_(and__5041__auto__)){
return reitit.impl.unresolved_conflicts.call(null,path_conflicting);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto___36085)){
var conflict_report_36086 = temp__5804__auto___36085;
conflicts.call(null,conflict_report_36086);
} else {
}

if(cljs.core.truth_(name_conflicting)){
reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword(null,"name-conflicts","name-conflicts",-2016386444),name_conflicting);
} else {
}

var temp__5804__auto___36087 = new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5804__auto___36087)){
var validate_36088 = temp__5804__auto___36087;
validate_36088.call(null,compiled_routes,opts__$1);
} else {
}

return router__$1.call(null,compiled_routes,cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword("reitit.core","path-conflicting","reitit.core/path-conflicting",617644429),path_conflicting));
}catch (e36083){if((e36083 instanceof Error)){
var e = e36083;
throw cljs.core.get.call(null,opts__$1,new cljs.core.Keyword(null,"exception","exception",-335277064),cljs.core.identity).call(null,e);
} else {
throw e36083;

}
}}));

(reitit.core.router.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=core.js.map?rel=1668256487290
