// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
goog.require('goog.object');
goog.scope(function(){
figwheel.client.file_reloading.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__5043__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (((typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))))))));
if(or__5043__auto__){
return or__5043__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (((cljs.core._EQ_.call(null,"cljs.core",ns)) || (((cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (((goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")))))))));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__37040 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
if((G__37040 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__37040,"requires");
}
}):(function (path){
var G__37041 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.requires,path);
if((G__37041 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.getKeys.call(null,G__37041);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37042_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37042_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__37043 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
var G__37043__$1 = (((G__37043 == null))?null:figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__37043,"provides"));
if((G__37043__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__37043__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"provides")));
})),(function (dep,path,_){
var provides = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"provides");
var requires = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"requires");
var seq__37044 = cljs.core.seq.call(null,provides);
var chunk__37045 = null;
var count__37046 = (0);
var i__37047 = (0);
while(true){
if((i__37047 < count__37046)){
var prov = cljs.core._nth.call(null,chunk__37045,i__37047);
var seq__37056_37068 = cljs.core.seq.call(null,requires);
var chunk__37057_37069 = null;
var count__37058_37070 = (0);
var i__37059_37071 = (0);
while(true){
if((i__37059_37071 < count__37058_37070)){
var req_37072 = cljs.core._nth.call(null,chunk__37057_37069,i__37059_37071);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37072,prov);


var G__37073 = seq__37056_37068;
var G__37074 = chunk__37057_37069;
var G__37075 = count__37058_37070;
var G__37076 = (i__37059_37071 + (1));
seq__37056_37068 = G__37073;
chunk__37057_37069 = G__37074;
count__37058_37070 = G__37075;
i__37059_37071 = G__37076;
continue;
} else {
var temp__5804__auto___37077 = cljs.core.seq.call(null,seq__37056_37068);
if(temp__5804__auto___37077){
var seq__37056_37078__$1 = temp__5804__auto___37077;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37056_37078__$1)){
var c__5565__auto___37079 = cljs.core.chunk_first.call(null,seq__37056_37078__$1);
var G__37080 = cljs.core.chunk_rest.call(null,seq__37056_37078__$1);
var G__37081 = c__5565__auto___37079;
var G__37082 = cljs.core.count.call(null,c__5565__auto___37079);
var G__37083 = (0);
seq__37056_37068 = G__37080;
chunk__37057_37069 = G__37081;
count__37058_37070 = G__37082;
i__37059_37071 = G__37083;
continue;
} else {
var req_37084 = cljs.core.first.call(null,seq__37056_37078__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37084,prov);


var G__37085 = cljs.core.next.call(null,seq__37056_37078__$1);
var G__37086 = null;
var G__37087 = (0);
var G__37088 = (0);
seq__37056_37068 = G__37085;
chunk__37057_37069 = G__37086;
count__37058_37070 = G__37087;
i__37059_37071 = G__37088;
continue;
}
} else {
}
}
break;
}


var G__37089 = seq__37044;
var G__37090 = chunk__37045;
var G__37091 = count__37046;
var G__37092 = (i__37047 + (1));
seq__37044 = G__37089;
chunk__37045 = G__37090;
count__37046 = G__37091;
i__37047 = G__37092;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__37044);
if(temp__5804__auto__){
var seq__37044__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37044__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__37044__$1);
var G__37093 = cljs.core.chunk_rest.call(null,seq__37044__$1);
var G__37094 = c__5565__auto__;
var G__37095 = cljs.core.count.call(null,c__5565__auto__);
var G__37096 = (0);
seq__37044 = G__37093;
chunk__37045 = G__37094;
count__37046 = G__37095;
i__37047 = G__37096;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37044__$1);
var seq__37060_37097 = cljs.core.seq.call(null,requires);
var chunk__37061_37098 = null;
var count__37062_37099 = (0);
var i__37063_37100 = (0);
while(true){
if((i__37063_37100 < count__37062_37099)){
var req_37101 = cljs.core._nth.call(null,chunk__37061_37098,i__37063_37100);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37101,prov);


var G__37102 = seq__37060_37097;
var G__37103 = chunk__37061_37098;
var G__37104 = count__37062_37099;
var G__37105 = (i__37063_37100 + (1));
seq__37060_37097 = G__37102;
chunk__37061_37098 = G__37103;
count__37062_37099 = G__37104;
i__37063_37100 = G__37105;
continue;
} else {
var temp__5804__auto___37106__$1 = cljs.core.seq.call(null,seq__37060_37097);
if(temp__5804__auto___37106__$1){
var seq__37060_37107__$1 = temp__5804__auto___37106__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37060_37107__$1)){
var c__5565__auto___37108 = cljs.core.chunk_first.call(null,seq__37060_37107__$1);
var G__37109 = cljs.core.chunk_rest.call(null,seq__37060_37107__$1);
var G__37110 = c__5565__auto___37108;
var G__37111 = cljs.core.count.call(null,c__5565__auto___37108);
var G__37112 = (0);
seq__37060_37097 = G__37109;
chunk__37061_37098 = G__37110;
count__37062_37099 = G__37111;
i__37063_37100 = G__37112;
continue;
} else {
var req_37113 = cljs.core.first.call(null,seq__37060_37107__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37113,prov);


var G__37114 = cljs.core.next.call(null,seq__37060_37107__$1);
var G__37115 = null;
var G__37116 = (0);
var G__37117 = (0);
seq__37060_37097 = G__37114;
chunk__37061_37098 = G__37115;
count__37062_37099 = G__37116;
i__37063_37100 = G__37117;
continue;
}
} else {
}
}
break;
}


var G__37118 = cljs.core.next.call(null,seq__37044__$1);
var G__37119 = null;
var G__37120 = (0);
var G__37121 = (0);
seq__37044 = G__37118;
chunk__37045 = G__37119;
count__37046 = G__37120;
i__37047 = G__37121;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,requires,(function (deps,path,_){
var seq__37064 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__37065 = null;
var count__37066 = (0);
var i__37067 = (0);
while(true){
if((i__37067 < count__37066)){
var prov = cljs.core._nth.call(null,chunk__37065,i__37067);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__37064,chunk__37065,count__37066,i__37067,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__37064,chunk__37065,count__37066,i__37067,prov,requires))
);


var G__37122 = seq__37064;
var G__37123 = chunk__37065;
var G__37124 = count__37066;
var G__37125 = (i__37067 + (1));
seq__37064 = G__37122;
chunk__37065 = G__37123;
count__37066 = G__37124;
i__37067 = G__37125;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__37064);
if(temp__5804__auto__){
var seq__37064__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37064__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__37064__$1);
var G__37126 = cljs.core.chunk_rest.call(null,seq__37064__$1);
var G__37127 = c__5565__auto__;
var G__37128 = cljs.core.count.call(null,c__5565__auto__);
var G__37129 = (0);
seq__37064 = G__37126;
chunk__37065 = G__37127;
count__37066 = G__37128;
i__37067 = G__37129;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37064__$1);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__37064,chunk__37065,count__37066,i__37067,prov,seq__37064__$1,temp__5804__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__37064,chunk__37065,count__37066,i__37067,prov,seq__37064__$1,temp__5804__auto__,requires))
);


var G__37130 = cljs.core.next.call(null,seq__37064__$1);
var G__37131 = null;
var G__37132 = (0);
var G__37133 = (0);
seq__37064 = G__37130;
chunk__37065 = G__37131;
count__37066 = G__37132;
i__37067 = G__37133;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__37134){
var vec__37135 = p__37134;
var _ = cljs.core.nth.call(null,vec__37135,(0),null);
var v = cljs.core.nth.call(null,vec__37135,(1),null);
var and__5041__auto__ = v;
if(cljs.core.truth_(and__5041__auto__)){
return v.call(null,dep);
} else {
return and__5041__auto__;
}
}),cljs.core.filter.call(null,(function (p__37138){
var vec__37139 = p__37138;
var k = cljs.core.nth.call(null,vec__37139,(0),null);
var v = cljs.core.nth.call(null,vec__37139,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__37151_37159 = cljs.core.seq.call(null,deps);
var chunk__37152_37160 = null;
var count__37153_37161 = (0);
var i__37154_37162 = (0);
while(true){
if((i__37154_37162 < count__37153_37161)){
var dep_37163 = cljs.core._nth.call(null,chunk__37152_37160,i__37154_37162);
if(cljs.core.truth_((function (){var and__5041__auto__ = dep_37163;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37163));
} else {
return and__5041__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37163,(depth + (1)),state);
} else {
}


var G__37164 = seq__37151_37159;
var G__37165 = chunk__37152_37160;
var G__37166 = count__37153_37161;
var G__37167 = (i__37154_37162 + (1));
seq__37151_37159 = G__37164;
chunk__37152_37160 = G__37165;
count__37153_37161 = G__37166;
i__37154_37162 = G__37167;
continue;
} else {
var temp__5804__auto___37168 = cljs.core.seq.call(null,seq__37151_37159);
if(temp__5804__auto___37168){
var seq__37151_37169__$1 = temp__5804__auto___37168;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37151_37169__$1)){
var c__5565__auto___37170 = cljs.core.chunk_first.call(null,seq__37151_37169__$1);
var G__37171 = cljs.core.chunk_rest.call(null,seq__37151_37169__$1);
var G__37172 = c__5565__auto___37170;
var G__37173 = cljs.core.count.call(null,c__5565__auto___37170);
var G__37174 = (0);
seq__37151_37159 = G__37171;
chunk__37152_37160 = G__37172;
count__37153_37161 = G__37173;
i__37154_37162 = G__37174;
continue;
} else {
var dep_37175 = cljs.core.first.call(null,seq__37151_37169__$1);
if(cljs.core.truth_((function (){var and__5041__auto__ = dep_37175;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37175));
} else {
return and__5041__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37175,(depth + (1)),state);
} else {
}


var G__37176 = cljs.core.next.call(null,seq__37151_37169__$1);
var G__37177 = null;
var G__37178 = (0);
var G__37179 = (0);
seq__37151_37159 = G__37176;
chunk__37152_37160 = G__37177;
count__37153_37161 = G__37178;
i__37154_37162 = G__37179;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37155){
var vec__37156 = p__37155;
var seq__37157 = cljs.core.seq.call(null,vec__37156);
var first__37158 = cljs.core.first.call(null,seq__37157);
var seq__37157__$1 = cljs.core.next.call(null,seq__37157);
var x = first__37158;
var xs = seq__37157__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__37142_SHARP_){
return clojure.set.difference.call(null,p1__37142_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,path);

return figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.visited,path);

figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.written,path);

return figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__37180_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__37180_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37181 = cljs.core.seq.call(null,provides);
var chunk__37182 = null;
var count__37183 = (0);
var i__37184 = (0);
while(true){
if((i__37184 < count__37183)){
var prov = cljs.core._nth.call(null,chunk__37182,i__37184);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37193_37201 = cljs.core.seq.call(null,requires);
var chunk__37194_37202 = null;
var count__37195_37203 = (0);
var i__37196_37204 = (0);
while(true){
if((i__37196_37204 < count__37195_37203)){
var req_37205 = cljs.core._nth.call(null,chunk__37194_37202,i__37196_37204);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37205,prov);


var G__37206 = seq__37193_37201;
var G__37207 = chunk__37194_37202;
var G__37208 = count__37195_37203;
var G__37209 = (i__37196_37204 + (1));
seq__37193_37201 = G__37206;
chunk__37194_37202 = G__37207;
count__37195_37203 = G__37208;
i__37196_37204 = G__37209;
continue;
} else {
var temp__5804__auto___37210 = cljs.core.seq.call(null,seq__37193_37201);
if(temp__5804__auto___37210){
var seq__37193_37211__$1 = temp__5804__auto___37210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37193_37211__$1)){
var c__5565__auto___37212 = cljs.core.chunk_first.call(null,seq__37193_37211__$1);
var G__37213 = cljs.core.chunk_rest.call(null,seq__37193_37211__$1);
var G__37214 = c__5565__auto___37212;
var G__37215 = cljs.core.count.call(null,c__5565__auto___37212);
var G__37216 = (0);
seq__37193_37201 = G__37213;
chunk__37194_37202 = G__37214;
count__37195_37203 = G__37215;
i__37196_37204 = G__37216;
continue;
} else {
var req_37217 = cljs.core.first.call(null,seq__37193_37211__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37217,prov);


var G__37218 = cljs.core.next.call(null,seq__37193_37211__$1);
var G__37219 = null;
var G__37220 = (0);
var G__37221 = (0);
seq__37193_37201 = G__37218;
chunk__37194_37202 = G__37219;
count__37195_37203 = G__37220;
i__37196_37204 = G__37221;
continue;
}
} else {
}
}
break;
}


var G__37222 = seq__37181;
var G__37223 = chunk__37182;
var G__37224 = count__37183;
var G__37225 = (i__37184 + (1));
seq__37181 = G__37222;
chunk__37182 = G__37223;
count__37183 = G__37224;
i__37184 = G__37225;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__37181);
if(temp__5804__auto__){
var seq__37181__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37181__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__37181__$1);
var G__37226 = cljs.core.chunk_rest.call(null,seq__37181__$1);
var G__37227 = c__5565__auto__;
var G__37228 = cljs.core.count.call(null,c__5565__auto__);
var G__37229 = (0);
seq__37181 = G__37226;
chunk__37182 = G__37227;
count__37183 = G__37228;
i__37184 = G__37229;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37181__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37197_37230 = cljs.core.seq.call(null,requires);
var chunk__37198_37231 = null;
var count__37199_37232 = (0);
var i__37200_37233 = (0);
while(true){
if((i__37200_37233 < count__37199_37232)){
var req_37234 = cljs.core._nth.call(null,chunk__37198_37231,i__37200_37233);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37234,prov);


var G__37235 = seq__37197_37230;
var G__37236 = chunk__37198_37231;
var G__37237 = count__37199_37232;
var G__37238 = (i__37200_37233 + (1));
seq__37197_37230 = G__37235;
chunk__37198_37231 = G__37236;
count__37199_37232 = G__37237;
i__37200_37233 = G__37238;
continue;
} else {
var temp__5804__auto___37239__$1 = cljs.core.seq.call(null,seq__37197_37230);
if(temp__5804__auto___37239__$1){
var seq__37197_37240__$1 = temp__5804__auto___37239__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37197_37240__$1)){
var c__5565__auto___37241 = cljs.core.chunk_first.call(null,seq__37197_37240__$1);
var G__37242 = cljs.core.chunk_rest.call(null,seq__37197_37240__$1);
var G__37243 = c__5565__auto___37241;
var G__37244 = cljs.core.count.call(null,c__5565__auto___37241);
var G__37245 = (0);
seq__37197_37230 = G__37242;
chunk__37198_37231 = G__37243;
count__37199_37232 = G__37244;
i__37200_37233 = G__37245;
continue;
} else {
var req_37246 = cljs.core.first.call(null,seq__37197_37240__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37246,prov);


var G__37247 = cljs.core.next.call(null,seq__37197_37240__$1);
var G__37248 = null;
var G__37249 = (0);
var G__37250 = (0);
seq__37197_37230 = G__37247;
chunk__37198_37231 = G__37248;
count__37199_37232 = G__37249;
i__37200_37233 = G__37250;
continue;
}
} else {
}
}
break;
}


var G__37251 = cljs.core.next.call(null,seq__37181__$1);
var G__37252 = null;
var G__37253 = (0);
var G__37254 = (0);
seq__37181 = G__37251;
chunk__37182 = G__37252;
count__37183 = G__37253;
i__37184 = G__37254;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37255_37259 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37256_37260 = null;
var count__37257_37261 = (0);
var i__37258_37262 = (0);
while(true){
if((i__37258_37262 < count__37257_37261)){
var ns_37263 = cljs.core._nth.call(null,chunk__37256_37260,i__37258_37262);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37263);


var G__37264 = seq__37255_37259;
var G__37265 = chunk__37256_37260;
var G__37266 = count__37257_37261;
var G__37267 = (i__37258_37262 + (1));
seq__37255_37259 = G__37264;
chunk__37256_37260 = G__37265;
count__37257_37261 = G__37266;
i__37258_37262 = G__37267;
continue;
} else {
var temp__5804__auto___37268 = cljs.core.seq.call(null,seq__37255_37259);
if(temp__5804__auto___37268){
var seq__37255_37269__$1 = temp__5804__auto___37268;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37255_37269__$1)){
var c__5565__auto___37270 = cljs.core.chunk_first.call(null,seq__37255_37269__$1);
var G__37271 = cljs.core.chunk_rest.call(null,seq__37255_37269__$1);
var G__37272 = c__5565__auto___37270;
var G__37273 = cljs.core.count.call(null,c__5565__auto___37270);
var G__37274 = (0);
seq__37255_37259 = G__37271;
chunk__37256_37260 = G__37272;
count__37257_37261 = G__37273;
i__37258_37262 = G__37274;
continue;
} else {
var ns_37275 = cljs.core.first.call(null,seq__37255_37269__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37275);


var G__37276 = cljs.core.next.call(null,seq__37255_37269__$1);
var G__37277 = null;
var G__37278 = (0);
var G__37279 = (0);
seq__37255_37259 = G__37276;
chunk__37256_37260 = G__37277;
count__37257_37261 = G__37278;
i__37258_37262 = G__37279;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__5043__auto__ = goog.require__;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__37280__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37280 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37281__i = 0, G__37281__a = new Array(arguments.length -  0);
while (G__37281__i < G__37281__a.length) {G__37281__a[G__37281__i] = arguments[G__37281__i + 0]; ++G__37281__i;}
  args = new cljs.core.IndexedSeq(G__37281__a,0,null);
} 
return G__37280__delegate.call(this,args);};
G__37280.cljs$lang$maxFixedArity = 0;
G__37280.cljs$lang$applyTo = (function (arglist__37282){
var args = cljs.core.seq(arglist__37282);
return G__37280__delegate(args);
});
G__37280.cljs$core$IFn$_invoke$arity$variadic = G__37280__delegate;
return G__37280;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__37283_SHARP_,p2__37284_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37283_SHARP_)),p2__37284_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__37285_SHARP_,p2__37286_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37285_SHARP_),p2__37286_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37287 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37287.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__37287.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__37287;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37288){if((e37288 instanceof Error)){
var e = e37288;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37288;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = figwheel.client.file_reloading.goog$module$goog$object.findKey.call(null,require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37289){if((e37289 instanceof Error)){
var e = e37289;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37289;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37290 = cljs.core._EQ_;
var expr__37291 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37290.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37291))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__37290.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37291))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__37290.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37291))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37293,callback){
var map__37294 = p__37293;
var map__37294__$1 = cljs.core.__destructure_map.call(null,map__37294);
var file_msg = map__37294__$1;
var request_url = cljs.core.get.call(null,map__37294__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__5043__auto__ = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33896__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_37331){
var state_val_37332 = (state_37331[(1)]);
if((state_val_37332 === (7))){
var inst_37327 = (state_37331[(2)]);
var state_37331__$1 = state_37331;
var statearr_37333_37359 = state_37331__$1;
(statearr_37333_37359[(2)] = inst_37327);

(statearr_37333_37359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37332 === (1))){
var state_37331__$1 = state_37331;
var statearr_37334_37360 = state_37331__$1;
(statearr_37334_37360[(2)] = null);

(statearr_37334_37360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37332 === (4))){
var inst_37297 = (state_37331[(7)]);
var inst_37297__$1 = (state_37331[(2)]);
var state_37331__$1 = (function (){var statearr_37335 = state_37331;
(statearr_37335[(7)] = inst_37297__$1);

return statearr_37335;
})();
if(cljs.core.truth_(inst_37297__$1)){
var statearr_37336_37361 = state_37331__$1;
(statearr_37336_37361[(1)] = (5));

} else {
var statearr_37337_37362 = state_37331__$1;
(statearr_37337_37362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37332 === (15))){
var inst_37310 = (state_37331[(8)]);
var inst_37312 = (state_37331[(9)]);
var inst_37314 = inst_37312.call(null,inst_37310);
var state_37331__$1 = state_37331;
var statearr_37338_37363 = state_37331__$1;
(statearr_37338_37363[(2)] = inst_37314);

(statearr_37338_37363[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37332 === (13))){
var inst_37321 = (state_37331[(2)]);
var state_37331__$1 = state_37331;
var statearr_37339_37364 = state_37331__$1;
(statearr_37339_37364[(2)] = inst_37321);

(statearr_37339_37364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37332 === (6))){
var state_37331__$1 = state_37331;
var statearr_37340_37365 = state_37331__$1;
(statearr_37340_37365[(2)] = null);

(statearr_37340_37365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37332 === (17))){
var inst_37318 = (state_37331[(2)]);
var state_37331__$1 = state_37331;
var statearr_37341_37366 = state_37331__$1;
(statearr_37341_37366[(2)] = inst_37318);

(statearr_37341_37366[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37332 === (3))){
var inst_37329 = (state_37331[(2)]);
var state_37331__$1 = state_37331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37331__$1,inst_37329);
} else {
if((state_val_37332 === (12))){
var state_37331__$1 = state_37331;
var statearr_37342_37367 = state_37331__$1;
(statearr_37342_37367[(2)] = null);

(statearr_37342_37367[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37332 === (2))){
var state_37331__$1 = state_37331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37331__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37332 === (11))){
var inst_37302 = (state_37331[(10)]);
var inst_37308 = figwheel.client.file_reloading.blocking_load.call(null,inst_37302);
var state_37331__$1 = state_37331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37331__$1,(14),inst_37308);
} else {
if((state_val_37332 === (9))){
var inst_37302 = (state_37331[(10)]);
var state_37331__$1 = state_37331;
if(cljs.core.truth_(inst_37302)){
var statearr_37343_37368 = state_37331__$1;
(statearr_37343_37368[(1)] = (11));

} else {
var statearr_37344_37369 = state_37331__$1;
(statearr_37344_37369[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37332 === (5))){
var inst_37303 = (state_37331[(11)]);
var inst_37297 = (state_37331[(7)]);
var inst_37302 = cljs.core.nth.call(null,inst_37297,(0),null);
var inst_37303__$1 = cljs.core.nth.call(null,inst_37297,(1),null);
var state_37331__$1 = (function (){var statearr_37345 = state_37331;
(statearr_37345[(10)] = inst_37302);

(statearr_37345[(11)] = inst_37303__$1);

return statearr_37345;
})();
if(cljs.core.truth_(inst_37303__$1)){
var statearr_37346_37370 = state_37331__$1;
(statearr_37346_37370[(1)] = (8));

} else {
var statearr_37347_37371 = state_37331__$1;
(statearr_37347_37371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37332 === (14))){
var inst_37302 = (state_37331[(10)]);
var inst_37312 = (state_37331[(9)]);
var inst_37310 = (state_37331[(2)]);
var inst_37311 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37312__$1 = cljs.core.get.call(null,inst_37311,inst_37302);
var state_37331__$1 = (function (){var statearr_37348 = state_37331;
(statearr_37348[(8)] = inst_37310);

(statearr_37348[(9)] = inst_37312__$1);

return statearr_37348;
})();
if(cljs.core.truth_(inst_37312__$1)){
var statearr_37349_37372 = state_37331__$1;
(statearr_37349_37372[(1)] = (15));

} else {
var statearr_37350_37373 = state_37331__$1;
(statearr_37350_37373[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37332 === (16))){
var inst_37310 = (state_37331[(8)]);
var inst_37316 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37310);
var state_37331__$1 = state_37331;
var statearr_37351_37374 = state_37331__$1;
(statearr_37351_37374[(2)] = inst_37316);

(statearr_37351_37374[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37332 === (10))){
var inst_37323 = (state_37331[(2)]);
var state_37331__$1 = (function (){var statearr_37352 = state_37331;
(statearr_37352[(12)] = inst_37323);

return statearr_37352;
})();
var statearr_37353_37375 = state_37331__$1;
(statearr_37353_37375[(2)] = null);

(statearr_37353_37375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37332 === (8))){
var inst_37303 = (state_37331[(11)]);
var inst_37305 = eval(inst_37303);
var state_37331__$1 = state_37331;
var statearr_37354_37376 = state_37331__$1;
(statearr_37354_37376[(2)] = inst_37305);

(statearr_37354_37376[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__33800__auto__ = null;
var figwheel$client$file_reloading$state_machine__33800__auto____0 = (function (){
var statearr_37355 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37355[(0)] = figwheel$client$file_reloading$state_machine__33800__auto__);

(statearr_37355[(1)] = (1));

return statearr_37355;
});
var figwheel$client$file_reloading$state_machine__33800__auto____1 = (function (state_37331){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_37331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e37356){if((e37356 instanceof Object)){
var ex__33803__auto__ = e37356;
var statearr_37357_37377 = state_37331;
(statearr_37357_37377[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37378 = state_37331;
state_37331 = G__37378;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33800__auto__ = function(state_37331){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33800__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33800__auto____1.call(this,state_37331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33800__auto____0;
figwheel$client$file_reloading$state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33800__auto____1;
return figwheel$client$file_reloading$state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_37358 = f__33897__auto__.call(null);
(statearr_37358[(6)] = c__33896__auto__);

return statearr_37358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));

return c__33896__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__37380 = arguments.length;
switch (G__37380) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37382,callback){
var map__37383 = p__37382;
var map__37383__$1 = cljs.core.__destructure_map.call(null,map__37383);
var file_msg = map__37383__$1;
var namespace = cljs.core.get.call(null,map__37383__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37384){
var map__37385 = p__37384;
var map__37385__$1 = cljs.core.__destructure_map.call(null,map__37385);
var file_msg = map__37385__$1;
var namespace = cljs.core.get.call(null,map__37385__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.client.file_reloading.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37386){
var map__37387 = p__37386;
var map__37387__$1 = cljs.core.__destructure_map.call(null,map__37387);
var file_msg = map__37387__$1;
var namespace = cljs.core.get.call(null,map__37387__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__5041__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__5041__auto__){
var or__5043__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__5041__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37388,callback){
var map__37389 = p__37388;
var map__37389__$1 = cljs.core.__destructure_map.call(null,map__37389);
var file_msg = map__37389__$1;
var request_url = cljs.core.get.call(null,map__37389__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37389__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33896__auto___37438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_37423){
var state_val_37424 = (state_37423[(1)]);
if((state_val_37424 === (1))){
var inst_37397 = cljs.core.seq.call(null,files);
var inst_37398 = cljs.core.first.call(null,inst_37397);
var inst_37399 = cljs.core.next.call(null,inst_37397);
var inst_37400 = files;
var state_37423__$1 = (function (){var statearr_37425 = state_37423;
(statearr_37425[(7)] = inst_37399);

(statearr_37425[(8)] = inst_37398);

(statearr_37425[(9)] = inst_37400);

return statearr_37425;
})();
var statearr_37426_37439 = state_37423__$1;
(statearr_37426_37439[(2)] = null);

(statearr_37426_37439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37424 === (2))){
var inst_37406 = (state_37423[(10)]);
var inst_37400 = (state_37423[(9)]);
var inst_37405 = cljs.core.seq.call(null,inst_37400);
var inst_37406__$1 = cljs.core.first.call(null,inst_37405);
var inst_37407 = cljs.core.next.call(null,inst_37405);
var inst_37408 = (inst_37406__$1 == null);
var inst_37409 = cljs.core.not.call(null,inst_37408);
var state_37423__$1 = (function (){var statearr_37427 = state_37423;
(statearr_37427[(10)] = inst_37406__$1);

(statearr_37427[(11)] = inst_37407);

return statearr_37427;
})();
if(inst_37409){
var statearr_37428_37440 = state_37423__$1;
(statearr_37428_37440[(1)] = (4));

} else {
var statearr_37429_37441 = state_37423__$1;
(statearr_37429_37441[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37424 === (3))){
var inst_37421 = (state_37423[(2)]);
var state_37423__$1 = state_37423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37423__$1,inst_37421);
} else {
if((state_val_37424 === (4))){
var inst_37406 = (state_37423[(10)]);
var inst_37411 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37406);
var state_37423__$1 = state_37423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37423__$1,(7),inst_37411);
} else {
if((state_val_37424 === (5))){
var inst_37417 = cljs.core.async.close_BANG_.call(null,out);
var state_37423__$1 = state_37423;
var statearr_37430_37442 = state_37423__$1;
(statearr_37430_37442[(2)] = inst_37417);

(statearr_37430_37442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37424 === (6))){
var inst_37419 = (state_37423[(2)]);
var state_37423__$1 = state_37423;
var statearr_37431_37443 = state_37423__$1;
(statearr_37431_37443[(2)] = inst_37419);

(statearr_37431_37443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37424 === (7))){
var inst_37407 = (state_37423[(11)]);
var inst_37413 = (state_37423[(2)]);
var inst_37414 = cljs.core.async.put_BANG_.call(null,out,inst_37413);
var inst_37400 = inst_37407;
var state_37423__$1 = (function (){var statearr_37432 = state_37423;
(statearr_37432[(12)] = inst_37414);

(statearr_37432[(9)] = inst_37400);

return statearr_37432;
})();
var statearr_37433_37444 = state_37423__$1;
(statearr_37433_37444[(2)] = null);

(statearr_37433_37444[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33800__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33800__auto____0 = (function (){
var statearr_37434 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37434[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33800__auto__);

(statearr_37434[(1)] = (1));

return statearr_37434;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33800__auto____1 = (function (state_37423){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_37423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e37435){if((e37435 instanceof Object)){
var ex__33803__auto__ = e37435;
var statearr_37436_37445 = state_37423;
(statearr_37436_37445[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37446 = state_37423;
state_37423 = G__37446;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33800__auto__ = function(state_37423){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33800__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33800__auto____1.call(this,state_37423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33800__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33800__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_37437 = f__33897__auto__.call(null);
(statearr_37437[(6)] = c__33896__auto___37438);

return statearr_37437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37447,opts){
var map__37448 = p__37447;
var map__37448__$1 = cljs.core.__destructure_map.call(null,map__37448);
var eval_body = cljs.core.get.call(null,map__37448__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37448__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__5041__auto__ = eval_body;
if(cljs.core.truth_(and__5041__auto__)){
return typeof eval_body === 'string';
} else {
return and__5041__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37449){var e = e37449;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5802__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__37450_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37450_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5802__auto__)){
var file_msg = temp__5802__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37451){
var vec__37452 = p__37451;
var k = cljs.core.nth.call(null,vec__37452,(0),null);
var v = cljs.core.nth.call(null,vec__37452,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37455){
var vec__37456 = p__37455;
var k = cljs.core.nth.call(null,vec__37456,(0),null);
var v = cljs.core.nth.call(null,vec__37456,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37462,p__37463){
var map__37464 = p__37462;
var map__37464__$1 = cljs.core.__destructure_map.call(null,map__37464);
var opts = map__37464__$1;
var before_jsload = cljs.core.get.call(null,map__37464__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37464__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37464__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37465 = p__37463;
var map__37465__$1 = cljs.core.__destructure_map.call(null,map__37465);
var msg = map__37465__$1;
var files = cljs.core.get.call(null,map__37465__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37465__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37465__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33896__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33897__auto__ = (function (){var switch__33799__auto__ = (function (state_37597){
var state_val_37598 = (state_37597[(1)]);
if((state_val_37598 === (7))){
var inst_37479 = (state_37597[(7)]);
var inst_37478 = (state_37597[(8)]);
var inst_37477 = (state_37597[(9)]);
var inst_37480 = (state_37597[(10)]);
var inst_37485 = cljs.core._nth.call(null,inst_37478,inst_37480);
var inst_37486 = figwheel.client.file_reloading.eval_body.call(null,inst_37485,opts);
var inst_37487 = (inst_37480 + (1));
var tmp37599 = inst_37479;
var tmp37600 = inst_37478;
var tmp37601 = inst_37477;
var inst_37477__$1 = tmp37601;
var inst_37478__$1 = tmp37600;
var inst_37479__$1 = tmp37599;
var inst_37480__$1 = inst_37487;
var state_37597__$1 = (function (){var statearr_37602 = state_37597;
(statearr_37602[(11)] = inst_37486);

(statearr_37602[(7)] = inst_37479__$1);

(statearr_37602[(8)] = inst_37478__$1);

(statearr_37602[(9)] = inst_37477__$1);

(statearr_37602[(10)] = inst_37480__$1);

return statearr_37602;
})();
var statearr_37603_37670 = state_37597__$1;
(statearr_37603_37670[(2)] = null);

(statearr_37603_37670[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (20))){
var inst_37520 = (state_37597[(12)]);
var inst_37528 = figwheel.client.file_reloading.sort_files.call(null,inst_37520);
var state_37597__$1 = state_37597;
var statearr_37604_37671 = state_37597__$1;
(statearr_37604_37671[(2)] = inst_37528);

(statearr_37604_37671[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (27))){
var state_37597__$1 = state_37597;
var statearr_37605_37672 = state_37597__$1;
(statearr_37605_37672[(2)] = null);

(statearr_37605_37672[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (1))){
var inst_37469 = (state_37597[(13)]);
var inst_37466 = before_jsload.call(null,files);
var inst_37467 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37468 = (function (){return (function (p1__37459_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37459_SHARP_);
});
})();
var inst_37469__$1 = cljs.core.filter.call(null,inst_37468,files);
var inst_37470 = cljs.core.not_empty.call(null,inst_37469__$1);
var state_37597__$1 = (function (){var statearr_37606 = state_37597;
(statearr_37606[(13)] = inst_37469__$1);

(statearr_37606[(14)] = inst_37466);

(statearr_37606[(15)] = inst_37467);

return statearr_37606;
})();
if(cljs.core.truth_(inst_37470)){
var statearr_37607_37673 = state_37597__$1;
(statearr_37607_37673[(1)] = (2));

} else {
var statearr_37608_37674 = state_37597__$1;
(statearr_37608_37674[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (24))){
var state_37597__$1 = state_37597;
var statearr_37609_37675 = state_37597__$1;
(statearr_37609_37675[(2)] = null);

(statearr_37609_37675[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (4))){
var inst_37514 = (state_37597[(2)]);
var inst_37515 = cljs.core.List.EMPTY;
var inst_37516 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37515);
var inst_37517 = (function (){return (function (p1__37460_SHARP_){
var and__5041__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37460_SHARP_);
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37460_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37460_SHARP_))));
} else {
return and__5041__auto__;
}
});
})();
var inst_37518 = cljs.core.filter.call(null,inst_37517,files);
var inst_37519 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37520 = cljs.core.concat.call(null,inst_37518,inst_37519);
var state_37597__$1 = (function (){var statearr_37610 = state_37597;
(statearr_37610[(12)] = inst_37520);

(statearr_37610[(16)] = inst_37516);

(statearr_37610[(17)] = inst_37514);

return statearr_37610;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37611_37676 = state_37597__$1;
(statearr_37611_37676[(1)] = (16));

} else {
var statearr_37612_37677 = state_37597__$1;
(statearr_37612_37677[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (15))){
var inst_37504 = (state_37597[(2)]);
var state_37597__$1 = state_37597;
var statearr_37613_37678 = state_37597__$1;
(statearr_37613_37678[(2)] = inst_37504);

(statearr_37613_37678[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (21))){
var inst_37530 = (state_37597[(18)]);
var inst_37530__$1 = (state_37597[(2)]);
var inst_37531 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37530__$1);
var state_37597__$1 = (function (){var statearr_37614 = state_37597;
(statearr_37614[(18)] = inst_37530__$1);

return statearr_37614;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37597__$1,(22),inst_37531);
} else {
if((state_val_37598 === (31))){
var inst_37595 = (state_37597[(2)]);
var state_37597__$1 = state_37597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37597__$1,inst_37595);
} else {
if((state_val_37598 === (32))){
var inst_37572 = (state_37597[(19)]);
var inst_37576 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37577 = cljs.core.map.call(null,inst_37576,inst_37572);
var inst_37578 = cljs.core.pr_str.call(null,inst_37577);
var inst_37579 = ["figwheel-no-load meta-data: ",inst_37578].join('');
var inst_37580 = figwheel.client.utils.log.call(null,inst_37579);
var state_37597__$1 = state_37597;
var statearr_37615_37679 = state_37597__$1;
(statearr_37615_37679[(2)] = inst_37580);

(statearr_37615_37679[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (33))){
var state_37597__$1 = state_37597;
var statearr_37616_37680 = state_37597__$1;
(statearr_37616_37680[(2)] = null);

(statearr_37616_37680[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (13))){
var inst_37490 = (state_37597[(20)]);
var inst_37494 = cljs.core.chunk_first.call(null,inst_37490);
var inst_37495 = cljs.core.chunk_rest.call(null,inst_37490);
var inst_37496 = cljs.core.count.call(null,inst_37494);
var inst_37477 = inst_37495;
var inst_37478 = inst_37494;
var inst_37479 = inst_37496;
var inst_37480 = (0);
var state_37597__$1 = (function (){var statearr_37617 = state_37597;
(statearr_37617[(7)] = inst_37479);

(statearr_37617[(8)] = inst_37478);

(statearr_37617[(9)] = inst_37477);

(statearr_37617[(10)] = inst_37480);

return statearr_37617;
})();
var statearr_37618_37681 = state_37597__$1;
(statearr_37618_37681[(2)] = null);

(statearr_37618_37681[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (22))){
var inst_37534 = (state_37597[(21)]);
var inst_37533 = (state_37597[(22)]);
var inst_37538 = (state_37597[(23)]);
var inst_37530 = (state_37597[(18)]);
var inst_37533__$1 = (state_37597[(2)]);
var inst_37534__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37533__$1);
var inst_37535 = (function (){var all_files = inst_37530;
var res_SINGLEQUOTE_ = inst_37533__$1;
var res = inst_37534__$1;
return (function (p1__37461_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37461_SHARP_));
});
})();
var inst_37536 = cljs.core.filter.call(null,inst_37535,inst_37533__$1);
var inst_37537 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37538__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37537);
var inst_37539 = cljs.core.not_empty.call(null,inst_37538__$1);
var state_37597__$1 = (function (){var statearr_37619 = state_37597;
(statearr_37619[(21)] = inst_37534__$1);

(statearr_37619[(22)] = inst_37533__$1);

(statearr_37619[(24)] = inst_37536);

(statearr_37619[(23)] = inst_37538__$1);

return statearr_37619;
})();
if(cljs.core.truth_(inst_37539)){
var statearr_37620_37682 = state_37597__$1;
(statearr_37620_37682[(1)] = (23));

} else {
var statearr_37621_37683 = state_37597__$1;
(statearr_37621_37683[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (36))){
var state_37597__$1 = state_37597;
var statearr_37622_37684 = state_37597__$1;
(statearr_37622_37684[(2)] = null);

(statearr_37622_37684[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (29))){
var inst_37534 = (state_37597[(21)]);
var inst_37533 = (state_37597[(22)]);
var inst_37536 = (state_37597[(24)]);
var inst_37572 = (state_37597[(19)]);
var inst_37538 = (state_37597[(23)]);
var inst_37530 = (state_37597[(18)]);
var inst_37566 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37569 = (function (){var all_files = inst_37530;
var res_SINGLEQUOTE_ = inst_37533;
var res = inst_37534;
var files_not_loaded = inst_37536;
var dependencies_that_loaded = inst_37538;
return (function (p__37568){
var map__37623 = p__37568;
var map__37623__$1 = cljs.core.__destructure_map.call(null,map__37623);
var namespace = cljs.core.get.call(null,map__37623__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_37570 = cljs.core.group_by.call(null,inst_37569,inst_37536);
var inst_37571 = cljs.core.__destructure_map.call(null,inst_37570);
var inst_37572__$1 = cljs.core.get.call(null,inst_37571,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37573 = cljs.core.get.call(null,inst_37571,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37574 = cljs.core.not_empty.call(null,inst_37572__$1);
var state_37597__$1 = (function (){var statearr_37624 = state_37597;
(statearr_37624[(25)] = inst_37573);

(statearr_37624[(26)] = inst_37566);

(statearr_37624[(19)] = inst_37572__$1);

return statearr_37624;
})();
if(cljs.core.truth_(inst_37574)){
var statearr_37625_37685 = state_37597__$1;
(statearr_37625_37685[(1)] = (32));

} else {
var statearr_37626_37686 = state_37597__$1;
(statearr_37626_37686[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (6))){
var inst_37511 = (state_37597[(2)]);
var state_37597__$1 = state_37597;
var statearr_37627_37687 = state_37597__$1;
(statearr_37627_37687[(2)] = inst_37511);

(statearr_37627_37687[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (28))){
var inst_37536 = (state_37597[(24)]);
var inst_37563 = (state_37597[(2)]);
var inst_37564 = cljs.core.not_empty.call(null,inst_37536);
var state_37597__$1 = (function (){var statearr_37628 = state_37597;
(statearr_37628[(27)] = inst_37563);

return statearr_37628;
})();
if(cljs.core.truth_(inst_37564)){
var statearr_37629_37688 = state_37597__$1;
(statearr_37629_37688[(1)] = (29));

} else {
var statearr_37630_37689 = state_37597__$1;
(statearr_37630_37689[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (25))){
var inst_37534 = (state_37597[(21)]);
var inst_37550 = (state_37597[(2)]);
var inst_37551 = cljs.core.not_empty.call(null,inst_37534);
var state_37597__$1 = (function (){var statearr_37631 = state_37597;
(statearr_37631[(28)] = inst_37550);

return statearr_37631;
})();
if(cljs.core.truth_(inst_37551)){
var statearr_37632_37690 = state_37597__$1;
(statearr_37632_37690[(1)] = (26));

} else {
var statearr_37633_37691 = state_37597__$1;
(statearr_37633_37691[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (34))){
var inst_37573 = (state_37597[(25)]);
var inst_37583 = (state_37597[(2)]);
var inst_37584 = cljs.core.not_empty.call(null,inst_37573);
var state_37597__$1 = (function (){var statearr_37634 = state_37597;
(statearr_37634[(29)] = inst_37583);

return statearr_37634;
})();
if(cljs.core.truth_(inst_37584)){
var statearr_37635_37692 = state_37597__$1;
(statearr_37635_37692[(1)] = (35));

} else {
var statearr_37636_37693 = state_37597__$1;
(statearr_37636_37693[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (17))){
var state_37597__$1 = state_37597;
var statearr_37637_37694 = state_37597__$1;
(statearr_37637_37694[(2)] = recompile_dependents);

(statearr_37637_37694[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (3))){
var state_37597__$1 = state_37597;
var statearr_37638_37695 = state_37597__$1;
(statearr_37638_37695[(2)] = null);

(statearr_37638_37695[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (12))){
var inst_37507 = (state_37597[(2)]);
var state_37597__$1 = state_37597;
var statearr_37639_37696 = state_37597__$1;
(statearr_37639_37696[(2)] = inst_37507);

(statearr_37639_37696[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (2))){
var inst_37469 = (state_37597[(13)]);
var inst_37476 = cljs.core.seq.call(null,inst_37469);
var inst_37477 = inst_37476;
var inst_37478 = null;
var inst_37479 = (0);
var inst_37480 = (0);
var state_37597__$1 = (function (){var statearr_37640 = state_37597;
(statearr_37640[(7)] = inst_37479);

(statearr_37640[(8)] = inst_37478);

(statearr_37640[(9)] = inst_37477);

(statearr_37640[(10)] = inst_37480);

return statearr_37640;
})();
var statearr_37641_37697 = state_37597__$1;
(statearr_37641_37697[(2)] = null);

(statearr_37641_37697[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (23))){
var inst_37534 = (state_37597[(21)]);
var inst_37533 = (state_37597[(22)]);
var inst_37536 = (state_37597[(24)]);
var inst_37538 = (state_37597[(23)]);
var inst_37530 = (state_37597[(18)]);
var inst_37541 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37543 = (function (){var all_files = inst_37530;
var res_SINGLEQUOTE_ = inst_37533;
var res = inst_37534;
var files_not_loaded = inst_37536;
var dependencies_that_loaded = inst_37538;
return (function (p__37542){
var map__37642 = p__37542;
var map__37642__$1 = cljs.core.__destructure_map.call(null,map__37642);
var request_url = cljs.core.get.call(null,map__37642__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_37544 = cljs.core.reverse.call(null,inst_37538);
var inst_37545 = cljs.core.map.call(null,inst_37543,inst_37544);
var inst_37546 = cljs.core.pr_str.call(null,inst_37545);
var inst_37547 = figwheel.client.utils.log.call(null,inst_37546);
var state_37597__$1 = (function (){var statearr_37643 = state_37597;
(statearr_37643[(30)] = inst_37541);

return statearr_37643;
})();
var statearr_37644_37698 = state_37597__$1;
(statearr_37644_37698[(2)] = inst_37547);

(statearr_37644_37698[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (35))){
var inst_37573 = (state_37597[(25)]);
var inst_37586 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37573);
var inst_37587 = cljs.core.pr_str.call(null,inst_37586);
var inst_37588 = ["not required: ",inst_37587].join('');
var inst_37589 = figwheel.client.utils.log.call(null,inst_37588);
var state_37597__$1 = state_37597;
var statearr_37645_37699 = state_37597__$1;
(statearr_37645_37699[(2)] = inst_37589);

(statearr_37645_37699[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (19))){
var inst_37520 = (state_37597[(12)]);
var inst_37526 = figwheel.client.file_reloading.expand_files.call(null,inst_37520);
var state_37597__$1 = state_37597;
var statearr_37646_37700 = state_37597__$1;
(statearr_37646_37700[(2)] = inst_37526);

(statearr_37646_37700[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (11))){
var state_37597__$1 = state_37597;
var statearr_37647_37701 = state_37597__$1;
(statearr_37647_37701[(2)] = null);

(statearr_37647_37701[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (9))){
var inst_37509 = (state_37597[(2)]);
var state_37597__$1 = state_37597;
var statearr_37648_37702 = state_37597__$1;
(statearr_37648_37702[(2)] = inst_37509);

(statearr_37648_37702[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (5))){
var inst_37479 = (state_37597[(7)]);
var inst_37480 = (state_37597[(10)]);
var inst_37482 = (inst_37480 < inst_37479);
var inst_37483 = inst_37482;
var state_37597__$1 = state_37597;
if(cljs.core.truth_(inst_37483)){
var statearr_37649_37703 = state_37597__$1;
(statearr_37649_37703[(1)] = (7));

} else {
var statearr_37650_37704 = state_37597__$1;
(statearr_37650_37704[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (14))){
var inst_37490 = (state_37597[(20)]);
var inst_37499 = cljs.core.first.call(null,inst_37490);
var inst_37500 = figwheel.client.file_reloading.eval_body.call(null,inst_37499,opts);
var inst_37501 = cljs.core.next.call(null,inst_37490);
var inst_37477 = inst_37501;
var inst_37478 = null;
var inst_37479 = (0);
var inst_37480 = (0);
var state_37597__$1 = (function (){var statearr_37651 = state_37597;
(statearr_37651[(7)] = inst_37479);

(statearr_37651[(31)] = inst_37500);

(statearr_37651[(8)] = inst_37478);

(statearr_37651[(9)] = inst_37477);

(statearr_37651[(10)] = inst_37480);

return statearr_37651;
})();
var statearr_37652_37705 = state_37597__$1;
(statearr_37652_37705[(2)] = null);

(statearr_37652_37705[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (26))){
var inst_37534 = (state_37597[(21)]);
var inst_37533 = (state_37597[(22)]);
var inst_37536 = (state_37597[(24)]);
var inst_37538 = (state_37597[(23)]);
var inst_37530 = (state_37597[(18)]);
var inst_37553 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37555 = (function (){var all_files = inst_37530;
var res_SINGLEQUOTE_ = inst_37533;
var res = inst_37534;
var files_not_loaded = inst_37536;
var dependencies_that_loaded = inst_37538;
return (function (p__37554){
var map__37653 = p__37554;
var map__37653__$1 = cljs.core.__destructure_map.call(null,map__37653);
var namespace = cljs.core.get.call(null,map__37653__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37653__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_37556 = cljs.core.map.call(null,inst_37555,inst_37534);
var inst_37557 = cljs.core.pr_str.call(null,inst_37556);
var inst_37558 = figwheel.client.utils.log.call(null,inst_37557);
var inst_37559 = (function (){var all_files = inst_37530;
var res_SINGLEQUOTE_ = inst_37533;
var res = inst_37534;
var files_not_loaded = inst_37536;
var dependencies_that_loaded = inst_37538;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_37560 = setTimeout(inst_37559,(10));
var state_37597__$1 = (function (){var statearr_37654 = state_37597;
(statearr_37654[(32)] = inst_37558);

(statearr_37654[(33)] = inst_37553);

return statearr_37654;
})();
var statearr_37655_37706 = state_37597__$1;
(statearr_37655_37706[(2)] = inst_37560);

(statearr_37655_37706[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (16))){
var state_37597__$1 = state_37597;
var statearr_37656_37707 = state_37597__$1;
(statearr_37656_37707[(2)] = reload_dependents);

(statearr_37656_37707[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (30))){
var state_37597__$1 = state_37597;
var statearr_37657_37708 = state_37597__$1;
(statearr_37657_37708[(2)] = null);

(statearr_37657_37708[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (10))){
var inst_37490 = (state_37597[(20)]);
var inst_37492 = cljs.core.chunked_seq_QMARK_.call(null,inst_37490);
var state_37597__$1 = state_37597;
if(inst_37492){
var statearr_37658_37709 = state_37597__$1;
(statearr_37658_37709[(1)] = (13));

} else {
var statearr_37659_37710 = state_37597__$1;
(statearr_37659_37710[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (18))){
var inst_37524 = (state_37597[(2)]);
var state_37597__$1 = state_37597;
if(cljs.core.truth_(inst_37524)){
var statearr_37660_37711 = state_37597__$1;
(statearr_37660_37711[(1)] = (19));

} else {
var statearr_37661_37712 = state_37597__$1;
(statearr_37661_37712[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (37))){
var inst_37592 = (state_37597[(2)]);
var state_37597__$1 = state_37597;
var statearr_37662_37713 = state_37597__$1;
(statearr_37662_37713[(2)] = inst_37592);

(statearr_37662_37713[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (8))){
var inst_37490 = (state_37597[(20)]);
var inst_37477 = (state_37597[(9)]);
var inst_37490__$1 = cljs.core.seq.call(null,inst_37477);
var state_37597__$1 = (function (){var statearr_37663 = state_37597;
(statearr_37663[(20)] = inst_37490__$1);

return statearr_37663;
})();
if(inst_37490__$1){
var statearr_37664_37714 = state_37597__$1;
(statearr_37664_37714[(1)] = (10));

} else {
var statearr_37665_37715 = state_37597__$1;
(statearr_37665_37715[(1)] = (11));

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
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33800__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33800__auto____0 = (function (){
var statearr_37666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37666[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33800__auto__);

(statearr_37666[(1)] = (1));

return statearr_37666;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33800__auto____1 = (function (state_37597){
while(true){
var ret_value__33801__auto__ = (function (){try{while(true){
var result__33802__auto__ = switch__33799__auto__.call(null,state_37597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33802__auto__;
}
break;
}
}catch (e37667){if((e37667 instanceof Object)){
var ex__33803__auto__ = e37667;
var statearr_37668_37716 = state_37597;
(statearr_37668_37716[(5)] = ex__33803__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37717 = state_37597;
state_37597 = G__37717;
continue;
} else {
return ret_value__33801__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33800__auto__ = function(state_37597){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33800__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33800__auto____1.call(this,state_37597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33800__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33800__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33800__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33800__auto__;
})()
})();
var state__33898__auto__ = (function (){var statearr_37669 = f__33897__auto__.call(null);
(statearr_37669[(6)] = c__33896__auto__);

return statearr_37669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33898__auto__);
}));

return c__33896__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37720,link){
var map__37721 = p__37720;
var map__37721__$1 = cljs.core.__destructure_map.call(null,map__37721);
var file = cljs.core.get.call(null,map__37721__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5804__auto__ = link.href;
if(cljs.core.truth_(temp__5804__auto__)){
var link_href = temp__5804__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__37718_SHARP_,p2__37719_SHARP_){
if(cljs.core._EQ_.call(null,p1__37718_SHARP_,p2__37719_SHARP_)){
return p1__37718_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5804__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37723){
var map__37724 = p__37723;
var map__37724__$1 = cljs.core.__destructure_map.call(null,map__37724);
var match_length = cljs.core.get.call(null,map__37724__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37724__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37722_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37722_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5804__auto__)){
var res = temp__5804__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37725_SHARP_,p2__37726_SHARP_){
return cljs.core.assoc.call(null,p1__37725_SHARP_,cljs.core.get.call(null,p2__37726_SHARP_,key),p2__37726_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5802__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5802__auto__)){
var link = temp__5802__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_37727 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37727);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37727);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37728,p__37729){
var map__37730 = p__37728;
var map__37730__$1 = cljs.core.__destructure_map.call(null,map__37730);
var on_cssload = cljs.core.get.call(null,map__37730__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37731 = p__37729;
var map__37731__$1 = cljs.core.__destructure_map.call(null,map__37731);
var files_msg = map__37731__$1;
var files = cljs.core.get.call(null,map__37731__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5804__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5804__auto__)){
var f_datas = temp__5804__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1668256488742
