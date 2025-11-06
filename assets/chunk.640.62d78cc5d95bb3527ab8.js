/*! For license information please see chunk.640.62d78cc5d95bb3527ab8.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[640],{81:(e,t,n)=>{"use strict"
function r(e,t,n){return(t="symbol"==typeof(r=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t))?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e
var r}function i(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function s(e,t,n,r,i){var s={}
return Object.keys(r).forEach(function(e){s[e]=r[e]}),s.enumerable=!!s.enumerable,s.configurable=!!s.configurable,("value"in s||s.initializer)&&(s.writable=!0),s=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},s),i&&void 0!==s.initializer&&(s.value=s.initializer?s.initializer.call(i):void 0,s.initializer=void 0),void 0===s.initializer&&(Object.defineProperty(e,t,s),s=null),s}n.d(t,{_:()=>s,a:()=>i,b:()=>r})},89:(e,t,n)=>{"use strict"
n.d(t,{C:()=>$e,S:()=>Pe,f:()=>E,h:()=>p,i:()=>S,l:()=>de,m:()=>Ee,p:()=>G,q:()=>Q,r:()=>H,s:()=>Y,t:()=>J,u:()=>$,v:()=>g,w:()=>Ke})
var r=n(1603),i=n(7648),s=n(4065),o=n(7375),a=n(1223),c=n(8146)
Symbol("record-originated-on-client"),Symbol("identifier-bucket"),Symbol("warpDriveStaleCache")
const u="__$co"
var l=n(3241),h=n(8738)
function d(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n
throw new TypeError("Private element is not present on this object")}function p(e){{let t
return t=null==e||""===e?null:String(e),(0,r.deprecate)(`The resource id '<${typeof e}> ${String(e)} ' is not normalized. Update your application code to use '${JSON.stringify(t)}' instead.`,t===e,{id:"ember-data:deprecate-non-strict-id",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.3"}}),t}}function m(e){let t=null
return"string"==typeof e?t=e.length>0?e:null:"number"!=typeof e||isNaN(e)||(t=String(e)),t}function g(e){{const t=(0,l._k)(e)
return(0,r.deprecate)(`The resource type '${e}' is not normalized. Update your application code to use '${t}' instead of '${e}'.`,t===e,{id:"ember-data:deprecate-non-strict-types",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.3"}}),t}}function y(e){return Boolean(e&&"object"==typeof e)}function v(e,t){return Boolean(y(e)&&t in e&&"string"==typeof e[t]&&e[t].length)}function b(e){return v(e,"lid")}function w(e){return v(e,"id")||Boolean(y(e)&&"id"in e&&"number"==typeof e.id)}const _=(0,o.L1)("DOCUMENTS",new Set)
function S(e){return void 0!==e[u]}function E(e){return _.has(e)}const I="undefined"!=typeof FastBoot?FastBoot.require("crypto"):globalThis.crypto,T=new Map
let A=0
function C(e,t,n){"record"===n&&!e.id&&w(t)&&function(e,t,n){let r=e.get(t.type)
r||(r=new Map,e.set(t.type,r)),r.set(n,t.lid)}(T,e,t.id)}function k(e,t){const n=w(e)?p(e.id):null
return{type:function(e){return v(e,"type")}(e)?g(e.type):t?t.type:null,id:n}}function x(e,t){if("record"===t){if(b(e))return e.lid
if(w(e)){const t=g(e.type),n=T.get(t)?.get(e.id)
return n||`@lid:${t}-${e.id}`}return I.randomUUID()}if("document"===t)return e.url?e.method&&"GET"!==e.method.toUpperCase()?null:e.url:null}function D(...e){}function R(e,t,n){return e}class N{constructor(){this._generate=(0,o.Yj)("configuredGenerationMethod")||x,this._update=(0,o.Yj)("configuredUpdateMethod")||C,this._forget=(0,o.Yj)("configuredForgetMethod")||D,this._reset=(0,o.Yj)("configuredResetMethod")||D,this._merge=R,this._keyInfoForResource=(0,o.Yj)("configuredKeyInfoMethod")||k,this._id=A++,this._cache={resources:new Map,resourcesByType:Object.create(null),documents:new Map,polymorphicLidBackMap:new Map}}__configureMerge(e){this._merge=e||R}upgradeIdentifier(e){return this._getRecordIdentifier(e,2)}_getRecordIdentifier(e,t){if(S(e))return e
const n=this._generate(e,"record")
let r=M(this._cache,n)
if(null!==r)return r
if(0!==t){if(2===t)e.lid=n,e[u]=this._id,r=O(e)
else{const t=this._keyInfoForResource(e,null)
t.lid=n,t[u]=this._id,r=O(t)}return P(this._cache,r),r}}peekRecordIdentifier(e){return this._getRecordIdentifier(e,0)}getOrCreateDocumentIdentifier(e){let t=e.cacheOptions?.key
if(t||(t=this._generate(e,"document")),!t)return null
let n=this._cache.documents.get(t)
return void 0===n&&(n={lid:t},_.add(n),this._cache.documents.set(t,n)),n}getOrCreateRecordIdentifier(e){return this._getRecordIdentifier(e,1)}createIdentifierForNewRecord(e){const t=this._generate(e,"record"),n=O({id:e.id||null,type:e.type,lid:t,[u]:this._id})
return P(this._cache,n),n}updateRecordIdentifier(e,t){let n=this.getOrCreateRecordIdentifier(e)
const r=this._keyInfoForResource(t,n)
let i=function(e,t,n,r){const i=t.id,{id:s,type:o,lid:a}=n,c=e.resourcesByType[n.type]
if(null!==s&&s!==i&&null!==i){const e=c&&c.id.get(i)
return void 0!==e&&e}{const n=t.type
if(null!==s&&s===i&&n===o&&b(r)&&r.lid!==a)return M(e,r.lid)||!1
if(null!==s&&s===i&&n&&n!==o&&b(r)&&r.lid===a){const t=e.resourcesByType[n],r=t&&t.id.get(i)
return void 0!==r&&r}}return!1}(this._cache,r,n,t)
const s=b(t)
if(i||n.type!==r.type&&(s&&delete t.lid,i=this.getOrCreateRecordIdentifier(t)),i){const e=n
n=this._mergeRecordIdentifiers(r,e,i,t),s&&(t.lid=n.lid)}const o=n.id;(function(e,t,n,r){r(e,n,"record"),void 0!==n.id&&(e.id=p(n.id))})(n,0,t,this._update)
const a=n.id
if(o!==a&&null!==a){const e=this._cache.resourcesByType[n.type]
e.id.set(a,n),null!==o&&e.id.delete(o)}return n}_mergeRecordIdentifiers(e,t,n,r){const i=this._merge(t,n,r),s=i===t?n:t,o=this._cache.polymorphicLidBackMap.get(s.lid)
o&&this._cache.polymorphicLidBackMap.delete(s.lid),this.forgetRecordIdentifier(s),this._cache.resources.set(s.lid,i)
const a=this._cache.polymorphicLidBackMap.get(i.lid)??[]
return a.push(s.lid),o&&o.forEach(e=>{a.push(e),this._cache.resources.set(e,i)}),this._cache.polymorphicLidBackMap.set(i.lid,a),i}forgetRecordIdentifier(e){const t=this.getOrCreateRecordIdentifier(e),n=this._cache.resourcesByType[t.type]
null!==t.id&&n.id.delete(t.id),this._cache.resources.delete(t.lid),n.lid.delete(t.lid)
const r=this._cache.polymorphicLidBackMap.get(t.lid)
r&&(r.forEach(e=>{this._cache.resources.delete(e)}),this._cache.polymorphicLidBackMap.delete(t.lid)),t[u]=void 0,this._forget(t,"record")}destroy(){T.clear(),this._cache.documents.forEach(e=>{_.delete(e)}),this._reset()}}function O(e,t,n){return e}function M(e,t,n){return e.resources.get(t)||null}function P(e,t){e.resources.set(t.lid,t)
let n=e.resourcesByType[t.type]
n||(n={lid:new Map,id:new Map},e.resourcesByType[t.type]=n),n.lid.set(t.lid,t),t.id&&n.id.set(t.id,t)}function F(e){return"string"==typeof e?e:e.href}var L=new WeakSet
class j{constructor(e,t,n){var r;(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(this,r=L),r.add(this),this._store=e,this._localCache=n,this.identifier=t,t&&e.notifications.subscribe(t,(e,t)=>{"updated"===t&&((0,c.eM)(this,"data"),(0,c.eM)(this,"links"),(0,c.eM)(this,"meta"),(0,c.eM)(this,"errors"))})}fetch(e={}){return e.cacheOptions=e.cacheOptions||{},e.cacheOptions.key=this.identifier?.lid,f(L,this,q).call(this,this.links.related?"related":"self",e)}next(e={}){return f(L,this,q).call(this,"next",e)}prev(e={}){return f(L,this,q).call(this,"prev",e)}first(e={}){return f(L,this,q).call(this,"first",e)}last(e={}){return f(L,this,q).call(this,"last",e)}toJSON(){const e={}
return e.identifier=this.identifier,void 0!==this.data&&(e.data=this.data),void 0!==this.links&&(e.links=this.links),void 0!==this.errors&&(e.errors=this.errors),void 0!==this.meta&&(e.meta=this.meta),e}}async function q(e,t){const n=this.links?.[e]
return n?(t.method=t.method||"GET",Object.assign(t,{url:F(n)}),(await this._store.request(t)).content):null}(0,c.Ly)(j.prototype,"errors",{get(){const{identifier:e}=this
if(!e){const{document:e}=this._localCache
return"errors"in e?e.errors:void 0}const t=this._store.cache.peek(e)
return"errors"in t?t.errors:void 0}}),(0,c.Ly)(j.prototype,"data",{get(){const{identifier:e,_localCache:t}=this,n=e?this._store.cache.peek(e):t.document,r="data"in n?n.data:void 0
return Array.isArray(r)?this._store.recordArrayManager.getCollection({type:e?e.lid:t.request.url,identifiers:r.slice(),doc:e?void 0:n,identifier:e??null}):r?this._store.peekRecord(r):r}}),(0,c.Ly)(j.prototype,"links",{get(){const{identifier:e}=this
return e?this._store.cache.peek(e).links:this._localCache.document.links}}),(0,c.Ly)(j.prototype,"meta",{get(){const{identifier:e}=this
return e?this._store.cache.peek(e).meta:this._localCache.document.meta}})
class V{constructor(e,t){d(this,"___token",void 0),d(this,"___identifier",void 0),this.store=e,this.___identifier=t,this.___token=e.notifications.subscribe(t,(e,t,n)=>{("identity"===t||"attributes"===t&&"id"===n)&&this._ref++})}destroy(){this.store.notifications.unsubscribe(this.___token)}get type(){return this.identifier().type}id(){return this._ref,this.___identifier.id}identifier(){return this.___identifier}remoteType(){return"identity"}push(e){return Promise.resolve(e).then(e=>this.store.push(e))}value(){return this.store.peekRecord(this.___identifier)}load(){const e=this.id()
if(null!==e)return this.store.findRecord(this.type,e)}reload(){const e=this.id()
if(null!==e)return this.store.findRecord(this.type,e,{reload:!0})}}(0,c.sg)(V.prototype,"_ref")
class B{constructor(e){this._store=e,this._willNotify=!1,this._pendingNotifies=new Map}get identifierCache(){return this._store.identifierCache}_scheduleNotification(e,t){let n=this._pendingNotifies.get(e)
n||(n=new Set,this._pendingNotifies.set(e,n)),n.add(t),!0!==this._willNotify&&(this._willNotify=!0,this._store._cbs?this._store._schedule("notify",()=>this._flushNotifications()):this._flushNotifications())}_flushNotifications(){if(!1===this._willNotify)return
const e=this._pendingNotifies
this._pendingNotifies=new Map,this._willNotify=!1,e.forEach((e,t)=>{e.forEach(e=>{this._store.notifications.notify(t,"relationships",e)})})}notifyChange(e,t,n){"relationships"===t&&n?this._scheduleNotification(e,n):this._store.notifications.notify(e,t,n)}get schema(){return this._store.schema}setRecordId(e,t){this._store._instanceCache.setRecordId(e,t)}hasRecord(e){return Boolean(this._store._instanceCache.peek(e))}disconnectRecord(e){this._store._instanceCache.disconnect(e),this._pendingNotifies.delete(e)}}B.prototype.getSchemaDefinitionService=function(){return this._store.schema}
const U=(0,o.L1)("CacheForIdentifierCache",new Map)
function $(e,t){U.set(e,t)}function z(e){U.delete(e)}function G(e){return U.has(e)?U.get(e):null}const K=(0,o.L1)("RecordCache",new Map)
function W(e){return K.get(e)}function H(e){return K.get(e)}function Q(e,t){K.set(e,t)}const J=(0,o.L1)("StoreMap",new Map)
function Y(e){return J.get(e)}class X{constructor(e){this.store=e,this.__instances={record:new Map,reference:new WeakMap,document:new Map},this._storeWrapper=new B(this.store),e.identifierCache.__configureMerge((e,t,n)=>{let r=e
e.id!==t.id?r="id"in n&&e.id===n.id?e:t:e.type!==t.type&&(r="type"in n&&e.type===n.type?e:t)
const i=e===r?t:e,s=this.__instances.record.has(r),o=this.__instances.record.has(i)
if(s&&o&&"id"in n)throw new Error(`Failed to update the 'id' for the RecordIdentifier '${e.type}:${String(e.id)} (${e.lid})' to '${String(n.id)}', because that id is already in use by '${t.type}:${String(t.id)} (${t.lid})'`)
return this.store.cache.patch({op:"mergeIdentifiers",record:i,value:r}),this.unloadRecord(i),r})}peek(e){return this.__instances.record.get(e)}getDocument(e){let t=this.__instances.document.get(e)
return t||(t=new j(this.store,e,null),this.__instances.document.set(e,t)),t}getRecord(e,t){let n=this.__instances.record.get(e)
if(!n){const r=this.store.cache
$(e,r),n=this.store.instantiateRecord(e,t||{}),Q(n,e),$(n,r),J.set(n,this.store),this.__instances.record.set(e,n)}return n}getReference(e){const t=this.__instances.reference
let n=t.get(e)
return n||(n=new V(this.store,e),t.set(e,n)),n}recordIsLoaded(e,t=!1){const n=this.cache
if(!n)return!1
const r=n.isNew(e),i=n.isEmpty(e)
return r?!n.isDeleted(e):!(t&&n.isDeletionCommitted(e)||i)}disconnect(e){this.__instances.record.get(e),this.store._graph?.remove(e),this.store.identifierCache.forgetRecordIdentifier(e),z(e),this.store._requestCache._clearEntries(e)}unloadRecord(e){this.store._join(()=>{const t=this.__instances.record.get(e),n=this.cache
t&&(this.store.teardownRecord(t),this.__instances.record.delete(e),J.delete(t),K.delete(t),z(t)),n?(n.unloadRecord(e),z(e)):this.disconnect(e),this.store._requestCache._clearEntries(e)})}clear(e){const t=this.store.identifierCache._cache
if(void 0===e)t.resources.forEach(e=>{this.unloadRecord(e)})
else{const n=t.resourcesByType,r=n[e]?.lid
r&&r.forEach(e=>{this.unloadRecord(e)})}}setRecordId(e,t){const{type:n,lid:i}=e,s=e.id
null===s||null!==t?(this.store.identifierCache.peekRecordIdentifier({type:n,id:t}),null===e.id&&this.store.identifierCache.updateRecordIdentifier(e,{type:n,id:t}),this.store.notifications.notify(e,"identity")):(0,r.warn)(`Your ${n} record was saved to the server, but the response does not have an id.`,!(null!==s&&null===t))}}function Z(e,t){return"string"==typeof e||"number"==typeof e?{type:t,id:m(e)}:H(e)}const ee=(0,o.L1)("AvailableShims",new WeakMap)
class te{constructor(e,t){this.__store=e,this.modelName=t}get fields(){const e=new Map
return this.__store.schema.fields({type:this.modelName}).forEach((t,n)=>{"attribute"!==t.kind&&"belongsTo"!==t.kind&&"hasMany"!==t.kind||e.set(n,t.kind)}),e}get attributes(){const e=new Map
return this.__store.schema.fields({type:this.modelName}).forEach((t,n)=>{"attribute"===t.kind&&e.set(n,t)}),e}get relationshipsByName(){const e=new Map
return this.__store.schema.fields({type:this.modelName}).forEach((t,n)=>{"belongsTo"!==t.kind&&"hasMany"!==t.kind||e.set(n,t)}),e}eachAttribute(e,t){this.__store.schema.fields({type:this.modelName}).forEach((n,r)=>{"attribute"===n.kind&&e.call(t,r,n)})}eachRelationship(e,t){this.__store.schema.fields({type:this.modelName}).forEach((n,r)=>{"belongsTo"!==n.kind&&"hasMany"!==n.kind||e.call(t,r,n)})}eachTransformedAttribute(e,t){this.__store.schema.fields({type:this.modelName}).forEach((n,r)=>{if("attribute"===n.kind){const i=n.type
i&&e.call(t,r,i)}})}}function ne(e){return"added"===e||"state"===e||"updated"===e||"removed"===e||"invalidated"===e}function re(){return!!a._backburner.currentInstance&&!0!==a._backburner._autorun}class ie{constructor(e){this.store=e,this.isDestroyed=!1,this._buffered=new Map,this._hasFlush=!1,this._cache=new Map}subscribe(e,t){let n=this._cache.get(e)
return t.for=e,n||(n=[],this._cache.set(e,n)),n.push(t),t}unsubscribe(e){this.isDestroyed||function(e,t){const n=e.for
if(n){const r=t.get(n)
if(!r)return
const i=r.indexOf(e)
if(-1===i)return
r.splice(i,1)}}(e,this._cache)}notify(e,t,n){if(!S(e)&&!E(e))return!1
const r=Boolean(this._cache.get(e)?.length)
if(ne(t)||r){let r=this._buffered.get(e)
r||(r=[],this._buffered.set(e,r)),r.push([t,n]),this._scheduleNotify()}return r}_onNextFlush(e){this._onFlushCB=e}_scheduleNotify(){const e=this.store._enableAsyncFlush
return!(this._hasFlush&&!1!==e&&!re()||(e&&!re()?(this._hasFlush=!0,1):(this._flush(),0)))}_flush(){const e=this._buffered
e.size&&(this._buffered=new Map,e.forEach((e,t)=>{e.forEach(e=>{this._flushNotification(t,e[0],e[1])})})),this._hasFlush=!1,this._onFlushCB?.(),this._onFlushCB=void 0}_flushNotification(e,t,n){if(ne(t)){const n=this._cache.get(E(e)?"document":"resource")
n&&n.forEach(n=>{n(e,t)})}const r=this._cache.get(e)
return!(!r||!r.length||(r.forEach(r=>{r(e,t,n)}),0))}destroy(){this.isDestroyed=!0,this._cache.clear()}}const se=Proxy,oe=new Set([Symbol.iterator,"concat","entries","every","fill","filter","find","findIndex","flat","flatMap","forEach","includes","indexOf","join","keys","lastIndexOf","map","reduce","reduceRight","slice","some","values"]),ae=new Set(["push","pop","unshift","shift","splice","sort"]),ce=new Set(["[]","length","links","meta"])
function ue(e){return oe.has(e)}function le(e,t){return t in e}const he=(0,o.L1)("#signal",Symbol("#signal")),de=(0,o.L1)("#source",Symbol("#source")),fe=(0,o.L1)("#update",Symbol("#update")),pe=(0,o.L1)("#notify",Symbol("#notify")),me=(0,o.L1)("IS_COLLECTION",Symbol.for("Collection"))
function ge(e){(0,c.RH)(e[he])}function ye(e){if("symbol"==typeof e)return null
const t=Number(e)
return isNaN(t)?null:t%1==0?t:null}class ve{[pe](){ge(this)}destroy(e){this.isDestroying=!e,this[de].length=0,this[pe](),this.isDestroyed=!e}get length(){return this[de].length}set length(e){this[de].length=e}constructor(e){d(this,"isLoaded",!0),d(this,"isDestroying",!1),d(this,"isDestroyed",!1),d(this,"_updatingPromise",null),d(this,"identifier",void 0),d(this,me,!0),d(this,de,void 0)
const t=this
this.modelName=e.type,this.store=e.store,this._manager=e.manager,this.identifier=e.identifier||null,this[de]=e.identifiers,this[he]=(0,c.n5)(this,"length")
const n=e.store,r=new Map,i=this[he],s={links:e.links||null,meta:e.meta||null}
let o=!1
const a=new se(this[de],{get(a,u,l){const h=ye(u)
if(i.shouldReset&&(null!==h||ce.has(u)||ue(u))&&(e.manager._syncArray(l),i.t=!1,i.shouldReset=!1),null!==h){const e=a[h]
return o||(0,c.B1)(i),e&&n._instanceCache.getRecord(e)}if("meta"===u)return(0,c.B1)(i),s.meta
if("links"===u)return(0,c.B1)(i),s.links
if("[]"===u)return(0,c.B1)(i),l
if(ue(u)){let e=r.get(u)
return void 0===e&&(e="forEach"===u?function(){(0,c.B1)(i),o=!0
const e=function(e,t,n,r,i){void 0===i&&(i=null)
const s=(t=t.slice()).length
for(let o=0;o<s;o++)r.call(i,n._instanceCache.getRecord(t[o]),o,e)
return e}(l,a,n,arguments[0],arguments[1])
return o=!1,e}:function(){(0,c.B1)(i),o=!0
const e=Reflect.apply(a[u],l,arguments)
return o=!1,e},r.set(u,e)),e}if(function(e){return ae.has(e)}(u)){let n=r.get(u)
return void 0===n&&(n=function(){if(!e.allowMutation)return
const n=Array.prototype.slice.call(arguments)
o=!0
const r=t[fe](a,l,u,n,i)
return o=!1,r},r.set(u,n)),n}if(le(t,u)){if(u===pe||u===he||u===de)return t[u]
let e=r.get(u)
if(e)return e
const n=t[u]
return"function"==typeof n?(e=function(){return(0,c.B1)(i),Reflect.apply(n,l,arguments)},r.set(u,e),e):((0,c.B1)(i),n)}return a[u]},set(n,r,a,c){if("length"===r){if(!o&&0===a)return o=!0,t[fe](n,c,"length 0",[],i),o=!1,!0
if(o)return Reflect.set(n,r,a)}if("links"===r)return s.links=a||null,!0
if("meta"===r)return s.meta=a||null,!0
const u=ye(r)
if(null===u||u>n.length){if(null!==u&&o){const e=H(a)
return n[u]=e,!0}return!!le(t,r)&&(t[r]=a,!0)}if(!e.allowMutation)return!1
const l=n[u],h=(d=a)?H(d):null
var d
return o?n[u]=h:t[fe](n,c,"replace cell",[u,l,h],i),!0},deleteProperty:(e,t)=>!!o&&Reflect.deleteProperty(e,t),getPrototypeOf:()=>Array.prototype})
return(0,c.zs)(a,i),this[pe]=this[pe].bind(a),a}update(){if(this.isUpdating)return this._updatingPromise
this.isUpdating=!0
const e=this._update()
return e.finally(()=>{this._updatingPromise=null,this.isDestroying||this.isDestroyed||(this.isUpdating=!1)}),this._updatingPromise=e,e}_update(){return this.store.findAll(this.modelName,{reload:!0})}save(){return Promise.all(this.map(e=>this.store.saveRecord(e))).then(()=>this)}}!function(e,t,n){let r={...Object.getOwnPropertyDescriptor(e,t)}
for(let i of n)r=i(e,t,r)||r
void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(e):void 0,r.initializer=void 0),Object.defineProperty(e,t,r)}(ve.prototype,"length",[h.Vv])
const be={enumerable:!0,configurable:!1,get:function(){return this}};(0,h.Vv)(be),Object.defineProperty(ve.prototype,"[]",be),(0,c.sg)(ve.prototype,"isUpdating",!1)
class we extends ve{constructor(e){super(e),d(this,"query",null),this.query=e.query||null,this.isLoaded=e.isLoaded||!1}_update(){const{store:e,query:t}=this
return e.query(this.modelName,t,{_recordArray:this})}destroy(e){super.destroy(e),this._manager._managed.delete(this),this._manager._pending.delete(this)}}we.prototype.query=null
const _e=(0,o.L1)("FAKE_ARR",{}),Se=1200
function Ee(e,t){let n=0
const r=t.length
for(;r-n>Se;)e.push.apply(e,t.slice(n,n+Se)),n+=Se
e.push.apply(e,t.slice(n))}class Ie{constructor(e){this.store=e.store,this.isDestroying=!1,this.isDestroyed=!1,this._live=new Map,this._managed=new Set,this._pending=new Map,this._staged=new Map,this._keyedArrays=new Map,this._identifiers=new Map,this._set=new Map,this._visibilitySet=new Map,this._subscription=this.store.notifications.subscribe("document",(e,t)=>{if("updated"===t&&this._keyedArrays.has(e.lid)){const t=this._keyedArrays.get(e.lid)
this.dirtyArray(t,0,!0)}}),this._subscription=this.store.notifications.subscribe("resource",(e,t)=>{"added"===t?(this._visibilitySet.set(e,!0),this.identifierAdded(e)):"removed"===t?(this._visibilitySet.set(e,!1),this.identifierRemoved(e)):"state"===t&&this.identifierChanged(e)})}_syncArray(e){const t=this._pending.get(e),n=function(e){return null!==e.identifier}(e)
if((n||t)&&!this.isDestroying&&!this.isDestroyed&&(t&&(function(e,t,n){const r=e[de],i=[],s=[]
t.forEach((e,t)=>{if("add"===e){if(n.has(t))return
i.push(t),n.add(t)}else n.has(t)&&(s.push(t),n.delete(t))}),s.length&&(s.length===r.length?r.length=0:s.forEach(e=>{const t=r.indexOf(e);-1!==t&&(r.splice(t,1),n.delete(e))})),i.length&&Ee(r,i)}(e,t,this._set.get(e)),this._pending.delete(e)),n)){const t=e[he]
if("cache-sync"===t.reason){t.reason=null
const n=this.store.cache.peek(e.identifier),r="data"in n&&Array.isArray(n.data)?n.data:[]
this.populateManagedArray(e,r,null)}}}mutate(e){this.store.cache.mutate(e)}liveArrayFor(e){let t=this._live.get(e)
const n=[],r=this._staged.get(e)
return r&&(r.forEach((e,t)=>{"add"===e&&n.push(t)}),this._staged.delete(e)),t||(t=new ve({type:e,identifiers:n,store:this.store,allowMutation:!1,manager:this}),this._live.set(e,t),this._set.set(t,new Set(n))),t}getCollection(e){if(e.identifier&&this._keyedArrays.has(e.identifier.lid))return this._keyedArrays.get(e.identifier.lid)
const t={type:e.type,identifier:e.identifier||null,links:e.doc?.links||null,meta:e.doc?.meta||null,query:e.query||null,identifiers:e.identifiers||[],isLoaded:!!e.identifiers?.length,allowMutation:!1,store:this.store,manager:this},n=new we(t)
return this._managed.add(n),this._set.set(n,new Set(t.identifiers||[])),e.identifier&&this._keyedArrays.set(e.identifier.lid,n),e.identifiers&&Te(this._identifiers,n,e.identifiers),n}dirtyArray(e,t,n){if(e===_e)return
const r=e[he]
n&&(r.reason="cache-sync"),r.shouldReset?t>0&&!r.t&&(0,c.Fe)(e[pe]):(r.shouldReset=!0,(0,c.Fe)(e[pe]))}_getPendingFor(e,t,n){if(this.isDestroying||this.isDestroyed)return
const r=this._live.get(e.type),i=this._pending,s=new Map
if(t){const t=this._identifiers.get(e)
t&&t.forEach(e=>{let t=i.get(e)
t||(t=new Map,i.set(e,t)),s.set(e,t)})}if(r&&0===r[de].length&&n){const e=i.get(r)
if(!e||0===e.size)return s}if(r){let e=i.get(r)
e||(e=new Map,i.set(r,e)),s.set(r,e)}else{let t=this._staged.get(e.type)
t||(t=new Map,this._staged.set(e.type,t)),s.set(_e,t)}return s}populateManagedArray(e,t,n){this._pending.delete(e)
const r=e[de],i=r.slice()
r.length=0,Ee(r,t),this._set.set(e,new Set(t)),ge(e),e.meta=n?.meta||null,e.links=n?.links||null,e.isLoaded=!0,function(e,t,n){for(let r=0;r<n.length;r++)Ae(e,t,n[r])}(this._identifiers,e,i),Te(this._identifiers,e,t)}identifierAdded(e){const t=this._getPendingFor(e,!1)
t&&t.forEach((t,n)=>{"del"===t.get(e)?t.delete(e):(t.set(e,"add"),this.dirtyArray(n,t.size,!1))})}identifierRemoved(e){const t=this._getPendingFor(e,!0,!0)
t&&t.forEach((t,n)=>{"add"===t.get(e)?t.delete(e):(t.set(e,"del"),this.dirtyArray(n,t.size,!1))})}identifierChanged(e){const t=this.store._instanceCache.recordIsLoaded(e,!0)
this._visibilitySet.get(e)!==t&&(t?this.identifierAdded(e):this.identifierRemoved(e))}clear(e=!0){this._live.forEach(t=>t.destroy(e)),this._managed.forEach(t=>t.destroy(e)),this._managed.clear(),this._identifiers.clear(),this._pending.clear(),this._set.forEach(e=>e.clear()),this._visibilitySet.clear()}destroy(){this.isDestroying=!0,this.clear(!1),this._live.clear(),this.isDestroyed=!0,this.store.notifications.unsubscribe(this._subscription)}}function Te(e,t,n){for(let r=0;r<n.length;r++){const i=n[r]
let s=e.get(i)
s||(s=new Set,e.set(i,s)),s.add(t)}}function Ae(e,t,n){const r=e.get(n)
r&&r.delete(t)}const Ce=(0,o.L1)("Touching",Symbol("touching")),ke=(0,o.L1)("RequestPromise",Symbol("promise")),xe=[]
class De{constructor(e){d(this,"_pending",new Map),d(this,"_done",new Map),d(this,"_subscriptions",new Map),d(this,"_toFlush",[]),d(this,"_store",void 0),this._store=e}_clearEntries(e){this._done.delete(e)}_enqueue(e,t){const n=t.data[0]
if("recordIdentifier"in n){const r=n.recordIdentifier,i="saveRecord"===n.op?"mutation":"query"
this._pending.has(r)||this._pending.set(r,[])
const s={state:"pending",request:t,type:i}
return s[Ce]=[n.recordIdentifier],s[ke]=e,this._pending.get(r).push(s),this._triggerSubscriptions(s),e.then(e=>{this._dequeue(r,s)
const n={state:"fulfilled",request:t,type:i,response:{data:e}}
return n[Ce]=s[Ce],this._addDone(n),this._triggerSubscriptions(n),e},e=>{this._dequeue(r,s)
const n={state:"rejected",request:t,type:i,response:{data:e}}
throw n[Ce]=s[Ce],this._addDone(n),this._triggerSubscriptions(n),e})}}_triggerSubscriptions(e){"pending"!==e.state?(this._toFlush.push(e),1===this._toFlush.length&&this._store.notifications._onNextFlush(()=>{this._flush()})):this._flushRequest(e)}_flush(){this._toFlush.forEach(e=>{this._flushRequest(e)}),this._toFlush=[]}_flushRequest(e){e[Ce].forEach(t=>{const n=this._subscriptions.get(t)
n&&n.forEach(t=>t(e))})}_dequeue(e,t){const n=this._pending.get(e)
this._pending.set(e,n.filter(e=>e!==t))}_addDone(e){e[Ce].forEach(t=>{const n=e.request.data[0].op
let r=this._done.get(t)
r&&(r=r.filter(e=>{let t
return t=Array.isArray(e.request.data)?e.request.data[0]:e.request.data,t.op!==n})),r=r||[],r.push(e),this._done.set(t,r)})}subscribeForRecord(e,t){let n=this._subscriptions.get(e)
n||(n=[],this._subscriptions.set(e,n)),n.push(t)}getPendingRequestsForRecord(e){return this._pending.get(e)||xe}getLastRequestForRecord(e){const t=this._done.get(e)
return t?t[t.length-1]:null}}function Re(e){return Boolean(e&&"string"==typeof e)}function Ne(e,t,n){if("object"==typeof e&&null!==e){const t=e
return S(t)||"id"in t&&(t.id=p(t.id)),t}{const r=p(t)
if(!Re(r)){if(Re(n))return{lid:n}
throw new Error("Expected either id or lid to be a valid string")}return Re(n)?{type:e,id:r,lid:n}:{type:e,id:r}}}globalThis.setWarpDriveLogging=s.q,globalThis.getWarpDriveRuntimeConfig=s.P
const Oe=class{constructor(e){}},Me=Oe.default?Oe.default:Oe
Me!==Oe&&(0,r.deprecate)("The Store class extending from EmberObject is deprecated.\nPlease remove usage of EmberObject APIs and mark your class as not requiring it.\n\nTo mark the class as no longer extending from EmberObject, in ember-cli-build.js\nset the following config:\n\n```js\nconst app = new EmberApp(defaults, {\n  emberData: {\n    deprecations: {\n      DEPRECATE_STORE_EXTENDS_EMBER_OBJECT: false\n    }\n  }\n});\n```\n",!1,{id:"ember-data:deprecate-store-extends-ember-object",until:"6.0",for:"ember-data",url:"https://deprecations.emberjs.com/id/ember-data-deprecate-store-extends-ember-object",since:{available:"4.13",enabled:"5.4"}})
class Pe extends Me{get schema(){return this._schema||(this._schema=this.createSchemaService()),this._schema}get isDestroying(){return this._isDestroying}set isDestroying(e){this._isDestroying=e}get isDestroyed(){return this._isDestroyed}set isDestroyed(e){this._isDestroyed=e}constructor(e){super(e),Object.assign(this,e),this.identifierCache=new N,this.notifications=new ie(this),this.recordArrayManager=new Ie({store:this}),this._requestCache=new De(this),this._instanceCache=new X(this),this.isDestroying=!1,this.isDestroyed=!1}_run(e){const t=this._cbs={}
e(),t.coalesce&&t.coalesce(),t.sync&&t.sync(),t.notify&&t.notify(),this._cbs=null}_join(e){this._cbs?e():this._run(e)}_schedule(e,t){this._cbs[e]=t}getRequestStateService(){return this._requestCache}_getAllPending(){}request(e){const t={store:this,[i._q]:e[i._q]??!0}
if(e.records){const n=this.identifierCache
t.records=e.records.map(e=>n.getOrCreateRecordIdentifier(e))}const n=Object.assign({},e,t),r=this.requestManager.request(n)
return r.onFinalize(()=>{("findBelongsTo"!==e.op||e.url)&&this.notifications._flush()}),r}modelFor(e){return function(e,t){let n=ee.get(e)
n||(n=Object.create(null),ee.set(e,n))
let r=n[t]
return void 0===r&&(r=n[t]=new te(e,t)),r}(this,e)}createRecord(e,t){let n
return this._join(()=>{const r=g(e),i={...t}
let s=null
if(null===i.id||void 0===i.id){const e=this.adapterFor?.(r,!0)
s=e&&e.generateIdForRecord?i.id=p(e.generateIdForRecord(this,r,i)):i.id=null}else s=i.id=p(i.id)
const o={type:r,id:s}
o.id&&this.identifierCache.peekRecordIdentifier(o)
const a=this.identifierCache.createIdentifierForNewRecord(o),c=this.cache,u=function(e,t,n){if(void 0!==n){const{type:r}=t,i=e.schema.fields({type:r})
if(i.size){const e=Object.keys(n)
for(let t=0;t<e.length;t++){const r=e[t],s=i.get(r)
s&&("hasMany"===s.kind?n[r]=Le(n[r]):"belongsTo"===s.kind&&(n[r]=je(n[r])))}}}return n}(this,a,i),l=c.clientDidCreate(a,u)
n=this._instanceCache.getRecord(a,l)}),n}deleteRecord(e){const t=W(e),n=this.cache
this._join(()=>{n.setIsDeleted(t,!0),n.isNew(t)&&this._instanceCache.unloadRecord(t)})}unloadRecord(e){const t=W(e)
t&&this._instanceCache.unloadRecord(t)}findRecord(e,t,n){Fe(e)?n=t:e=Ne(g(e),m(t))
const r=this.identifierCache.getOrCreateRecordIdentifier(e)
return(n=n||{}).preload&&(this._instanceCache.recordIsLoaded(r)||(n.reload=!0),this._join(()=>{!function(e,t,n){const r={},i=e.schema.fields(t)
Object.keys(n).forEach(e=>{const t=n[e],s=i.get(e)
!s||"hasMany"!==s.kind&&"belongsTo"!==s.kind?(r.attributes||(r.attributes={}),r.attributes[e]=t):(r.relationships||(r.relationships={}),r.relationships[e]=function(e,t){const n=e.type
return"hasMany"===e.kind?{data:t.map(e=>Z(e,n))}:{data:t?Z(t,n):null}}(s,t))})
const s=e.cache,o=Boolean(e._instanceCache.peek(t))
s.upsert(t,r,o)}(this,r,n.preload)})),this.request({op:"findRecord",data:{record:r,options:n},cacheOptions:{[i.ER]:!0}}).then(e=>e.content)}getReference(e,t){let n
n=1===arguments.length&&Fe(e)?e:Ne(g(e),m(t))
const r=this.identifierCache.getOrCreateRecordIdentifier(n)
return this._instanceCache.getReference(r)}peekRecord(e,t){if(1===arguments.length&&Fe(e)){const t=this.identifierCache.peekRecordIdentifier(e)
return t&&this._instanceCache.recordIsLoaded(t)?this._instanceCache.getRecord(t):null}const n={type:g(e),id:m(t)},r=this.identifierCache.peekRecordIdentifier(n)
return r&&this._instanceCache.recordIsLoaded(r)?this._instanceCache.getRecord(r):null}query(e,t,n={}){return this.request({op:"query",data:{type:g(e),query:t,options:n},cacheOptions:{[i.ER]:!0}}).then(e=>e.content)}queryRecord(e,t,n){return this.request({op:"queryRecord",data:{type:g(e),query:t,options:n||{}},cacheOptions:{[i.ER]:!0}}).then(e=>e.content)}findAll(e,t={}){return this.request({op:"findAll",data:{type:g(e),options:t||{}},cacheOptions:{[i.ER]:!0}}).then(e=>e.content)}peekAll(e){return this.recordArrayManager.liveArrayFor(g(e))}unloadAll(e){this._join(()=>{void 0===e?(this._graph?.identifiers.clear(),this.recordArrayManager.clear(),this._instanceCache.clear()):this._instanceCache.clear(g(e))})}push(e){const t=this._push(e,!1)
return Array.isArray(t)?t.map(e=>this._instanceCache.getRecord(e)):null===t?null:this._instanceCache.getRecord(t)}_push(e,t){let n
return t&&(this._enableAsyncFlush=!0),this._join(()=>{n=this.cache.put({content:e})}),this._enableAsyncFlush=null,"data"in n?n.data:null}saveRecord(e,t={}){const n=H(e),r=this.cache
if(!n)return Promise.reject(new Error("Record Is Disconnected"))
if(function(e,t){const n=e.cache
return!n||function(e,t){return t.isDeletionCommitted(e)||t.isNew(e)&&t.isDeleted(e)}(t,n)}(this._instanceCache,n))return Promise.resolve(e)
t||(t={})
let s="updateRecord"
r.isNew(n)?s="createRecord":r.isDeleted(n)&&(s="deleteRecord")
const o={op:s,data:{options:t,record:n},records:[n],cacheOptions:{[i.ER]:!0}}
return this.request(o).then(e=>e.content)}get cache(){let{cache:e}=this._instanceCache
return e||(e=this._instanceCache.cache=this.createCache(this._instanceCache._storeWrapper)),e}destroy(){this.isDestroyed||(this.isDestroying=!0,this._graph?.destroy(),this._graph=void 0,this.notifications.destroy(),this.recordArrayManager.destroy(),this.identifierCache.destroy(),this.unloadAll(),this.isDestroyed=!0)}static create(e){return new this(e)}}function Fe(e){return Boolean(null!==e&&"object"==typeof e&&("id"in e&&"type"in e&&e.id&&e.type||e.lid))}function Le(e){return e.map(e=>je(e))}function je(e){return e?H(e):null}Pe.prototype.getSchemaDefinitionService=function(){return(0,r.deprecate)("Use `store.schema` instead of `store.getSchemaDefinitionService()`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this._schema},Pe.prototype.registerSchemaDefinitionService=function(e){(0,r.deprecate)("Use `store.createSchemaService` instead of `store.registerSchemaDefinitionService()`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this._schema=e},Pe.prototype.registerSchema=function(e){(0,r.deprecate)("Use `store.createSchemaService` instead of `store.registerSchema()`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this._schema=e}
const qe=new Set(["createRecord","updateRecord","deleteRecord"])
function Ve(e){return Boolean(e.op&&qe.has(e.op))}function Be(e){const t=function(e){return e instanceof AggregateError||"AggregateError"===e.name&&Array.isArray(e.errors)}(e),n=t?new AggregateError(structuredClone(e.errors),e.message):new Error(e.message)
return n.stack=e.stack,n.error=e.error,Object.assign(n,e),n}function Ue(e,t,n){if(e){const n=t.get(e)
if(n)return n.priority}return n}const $e={request(e,t){if(!e.request.store||e.request.cacheOptions?.[i.ER])return t(e.request)
const{store:n}=e.request,r=n.identifierCache.getOrCreateDocumentIdentifier(e.request)
r&&e.setIdentifier(r)
const s=n.requestManager._deduped,o=r&&s.get(r),a=r?n.cache.peekRequest(r):null
if(function(e,t,n,r){const{cacheOptions:i}=t
return t.op&&qe.has(t.op)||i?.reload||!n||!(!e.lifetimes||!r)&&e.lifetimes.isHardExpired(r,e)}(n,e.request,!!a,r)){if(o)return o.priority={blocking:!0},o.promise
let i=Ge(t,e,r,{blocking:!0})
return r&&(i=i.finally(()=>{s.delete(r),n.notifications.notify(r,"state")}),s.set(r,{priority:{blocking:!0},promise:i}),n.notifications.notify(r,"state")),i}if(function(e,t,n,r){const{cacheOptions:i}=t
return i?.backgroundReload||!(!e.lifetimes||!r)&&e.lifetimes.isSoftExpired(r,e)}(n,e.request,0,r)){let i=o?.promise||Ge(t,e,r,{blocking:!1})
r&&!o&&(i=i.finally(()=>{s.delete(r),n.notifications.notify(r,"state")}),s.set(r,{priority:{blocking:!1},promise:i}),n.notifications.notify(r,"state")),n.requestManager._pending.set(e.id,i)}const c=e.request[i._q]||!1
if(e.setResponse(a.response),"error"in a){const t=c?ze(n,e.request,{shouldHydrate:c,identifier:r},a.content):a.content,i=Be(a)
throw i.content=t,i}return c?ze(n,e.request,{shouldHydrate:c,identifier:r},a.content):a.content}}
function ze(e,t,n,r){const{identifier:i}=n
return r&&n.shouldHydrate?i?e._instanceCache.getDocument(i):new j(e,null,{request:t,document:r}):r}function Ge(e,t,n,r){const{store:s}=t.request,o={shouldHydrate:t.request[i._q]||!1,identifier:n,priority:r}
let a=!1
if(Ve(t.request)){a=!0
const e=t.request.data?.record||t.request.records?.[0]
e&&s.cache.willCommit(e,t)}s.lifetimes?.willRequest&&s.lifetimes.willRequest(t.request,n,s)
const c=e(t.request).then(e=>function(e,t,n,r){const{request:i}=t
let s
if(e.requestManager._pending.delete(t.id),e._enableAsyncFlush=!0,e._join(()=>{s=function(e,t,n,r){let i=null
if(Ve(t)){const n=t.data?.record||t.records?.[0]
n?i=e.cache.didCommit(n,r):function(e){return!Ve(e.request)||("createRecord"===e.request.op&&201===e.response?.status?!!e.content&&Object.keys(e.content).length>0:204!==e.response?.status)}(r)&&(i=e.cache.put(r))}else i=e.cache.put(r)
return ze(e,t,n,i)}(e,i,n,r)}),e._enableAsyncFlush=null,e.lifetimes?.didRequest&&e.lifetimes.didRequest(t.request,r.response,n.identifier,e),Ue(n.identifier,e.requestManager._deduped,n.priority).blocking)return s
e.notifications._flush()}(s,t,o,e),e=>function(e,t,n,r){if(e.requestManager._pending.delete(t.id),t.request.signal?.aborted)throw r
let i
if(e._enableAsyncFlush=!0,e._join(()=>{i=function(e,t,n,r){let i
if(!Ve(t.request))return i=e.cache.put(r),ze(e,t.request,n,i)
{const n=r&&r.content&&"object"==typeof r.content&&"errors"in r.content&&Array.isArray(r.content.errors)?r.content.errors:void 0,i=t.request.data?.record||t.request.records?.[0]
e.cache.commitWasRejected(i,n)}}(e,t,n,r)}),e._enableAsyncFlush=null,n.identifier&&e.lifetimes?.didRequest&&e.lifetimes.didRequest(t.request,r.response,n.identifier,e),Ve(t.request))throw r
if(Ue(n.identifier,e.requestManager._deduped,n.priority).blocking){const e=Be(r)
throw e.content=i,e}e.notifications._flush()}(s,t,o,e))
if(!a)return c
const u=t.request.data?.record||t.request.records?.[0]
return s._requestCache._enqueue(c,{data:[{op:"saveRecord",recordIdentifier:u,options:void 0}]})}class Ke extends ve{constructor(e){super(e),this.isLoaded=e.isLoaded||!1,this.isAsync=e.isAsync||!1,this.isPolymorphic=e.isPolymorphic||!1,this.identifier=e.identifier,this.key=e.key}[fe](e,t,n,r,i){switch(n){case"length 0":return Reflect.set(e,"length",0),Xe(this,[],i),!0
case"replace cell":{const[t,n,s]=r
return e[t]=s,function(e,t,n){Ze(e,{op:"replaceRelatedRecord",record:e.identifier,field:e.key,...t},n)}(this,{value:s,prior:n,index:t},i),!0}case"push":{const s=We(r)
Qe(this,e,e=>e.push(...s),"Cannot push duplicates to a hasMany's state.")
{const s=new Set(e),o=new Set
r.forEach(e=>{const t=H(e)
s.has(t)||(s.add(t),o.add(e))})
const a=Array.from(o),c=Reflect.apply(e[n],t,a)
return a.length&&Je(this,{value:We(a)},i),c}}case"pop":{const s=Reflect.apply(e[n],t,r)
return s&&Ye(this,{value:H(s)},i),s}case"unshift":{const s=We(r)
Qe(this,e,e=>e.unshift(...s),"Cannot unshift duplicates to a hasMany's state.")
{const s=new Set(e),o=new Set
r.forEach(e=>{const t=H(e)
s.has(t)||(s.add(t),o.add(e))})
const a=Array.from(o),c=Reflect.apply(e[n],t,a)
return a.length&&Je(this,{value:We(a),index:0},i),c}}case"shift":{const s=Reflect.apply(e[n],t,r)
return s&&Ye(this,{value:H(s),index:0},i),s}case"sort":{const s=Reflect.apply(e[n],t,r)
return function(e,t,n){Ze(e,{op:"sortRelatedRecords",record:e.identifier,field:e.key,value:t},n)}(this,s.map(H),i),s}case"splice":{const[s,o,...a]=r
if(0===s&&o===this[de].length){const r=We(a)
Qe(this,e,e=>e.splice(s,o,...r),"Cannot replace a hasMany's state with a new state that contains duplicates.")
{const r=new Set(a),c=Array.from(r),u=[s,o].concat(c),l=Reflect.apply(e[n],t,u)
return Xe(this,We(c),i),l}}const c=We(a)
Qe(this,e,e=>e.splice(s,o,...c),"Cannot splice a hasMany's state with a new state that contains duplicates.")
{const r=e.slice()
r.splice(s,o)
const c=new Set(r),u=[]
a.forEach(e=>{const t=H(e)
c.has(t)||(c.add(t),u.push(e))})
const l=[s,o,...u],h=Reflect.apply(e[n],t,l)
return o>0&&Ye(this,{value:h.map(H),index:s},i),u.length>0&&Je(this,{value:We(u),index:s},i),h}}}}notify(){this[he].shouldReset=!0,ge(this)}reload(e){return this._manager.reloadHasMany(this.key,e)}createRecord(e){const{store:t}=this,n=t.createRecord(this.modelName,e)
return this.push(n),n}destroy(){super.destroy(!1)}}function We(e){return e.map(He)}function He(e){return H(e)}function Qe(e,t,n,i){const s=t.slice()
if(n(s),s.length!==new Set(s).size){const t=s.filter((e,t)=>s.indexOf(e)!==t);(0,r.deprecate)(`${i} This behavior is deprecated. Found duplicates for the following records within the new state provided to \`<${e.identifier.type}:${e.identifier.id||e.identifier.lid}>.${e.key}\`\n\t- ${Array.from(new Set(t)).map(e=>S(e)?e.lid:H(e).lid).sort((e,t)=>e.localeCompare(t)).join("\n\t- ")}`,!1,{id:"ember-data:deprecate-many-array-duplicates",for:"ember-data",until:"6.0",since:{enabled:"5.3",available:"4.13"}})}}function Je(e,t,n){Ze(e,{op:"add",record:e.identifier,field:e.key,...t},n)}function Ye(e,t,n){Ze(e,{op:"remove",record:e.identifier,field:e.key,...t},n)}function Xe(e,t,n){Ze(e,{op:"replaceRelatedRecords",record:e.identifier,field:e.key,value:t},n)}function Ze(e,t,n){e._manager.mutate(t),(0,c.RH)(n)}Ke.prototype.isAsync=!1,Ke.prototype.isPolymorphic=!1,Ke.prototype.identifier=null,Ke.prototype.cache=null,Ke.prototype._inverseIsAsync=!1,Ke.prototype.key="",Ke.prototype.DEPRECATED_CLASS_NAME="ManyArray"},101:(e,t,n)=>{"use strict"
function r([e]){return Math.sign(e)}n.r(t),n.d(t,{default:()=>i,sign:()=>r})
var i=(0,n(336).helper)(r)},122:(e,t,n)=>{"use strict"
function r([e]){return Math.log(e)}n.r(t),n.d(t,{default:()=>i,logE:()=>r})
var i=(0,n(336).helper)(r)},129:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(1202)
const i="[DEFAULT]"
class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e)
if(!this.instancesDeferred.has(t)){const n=new r.Deferred
if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const e=this.getOrInitializeService({instanceIdentifier:t})
e&&n.resolve(e)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1
if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null
throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(e){if(n)return null
throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`)
if(this.component)throw Error(`Component for ${this.name} has already been provided`)
if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t)
try{const e=this.getOrInitializeService({instanceIdentifier:r})
n.resolve(e)}catch(e){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values())
await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier)
if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`)
if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`)
const r=this.getOrInitializeService({instanceIdentifier:n,options:t})
for(const[i,s]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(i)&&s.resolve(r)
return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set
r.add(e),this.onInitCallbacks.set(n,r)
const i=this.instances.get(n)
return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t)
if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e)
if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===i?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}var r
return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}t.Component=class{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}},t.ComponentContainer=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name)
if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`)
t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e)
const t=new s(e,this)
return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}},t.Provider=s},151:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{graphFor:()=>K,isBelongsTo:()=>l,peekGraph:()=>G})
var r=n(1603),i=n(1274),s=n(7375)
function o(e){return e._store}function a(e,t,n){return(e[t]=e[t]||Object.create(null))[n]}function c(e,t,n,r){(e[t]=e[t]||Object.create(null))[n]=r}function u(e){if(!e.id)return!0
const t=(0,i.oX)(e)
return Boolean(t?.isNew(e))}function l(e){return"belongsTo"===e.definition.kind}function h(e){return e.definition.isImplicit}function d(e){return"hasMany"===e.definition.kind}function f(e,t){if(l(e))e.remoteState&&t(e.remoteState),e.localState&&e.localState!==e.remoteState&&t(e.localState)
else if(d(e)){for(let n=0;n<e.remoteState.length;n++){const r=e.remoteState[n]
t(r)}e.additions?.forEach(t)}else e.localMembers.forEach(t),e.remoteMembers.forEach(n=>{e.localMembers.has(n)||t(n)})}function p(e,t,n,r){if(l(t))t.remoteState===n&&(t.remoteState=null),t.localState===n&&(t.localState=null,m(e,t))
else if(d(t)){t.remoteMembers.delete(n),t.additions?.delete(n)
const r=t.removals?.delete(n),i=t.remoteState.indexOf(n)
if(-1!==i&&t.remoteState.splice(i,1),!r){const r=t.localState?.indexOf(n);-1!==r&&void 0!==r&&(t.localState.splice(r,1),m(e,t))}}else t.remoteMembers.delete(n),t.localMembers.delete(n)}function m(e,t){if(!t.accessed)return
const n=t.identifier,r=t.definition.key
n!==e._removing&&e.store.notifyChange(n,"relationships",r)}function g(e){return"belongsTo"===e.kind||"hasMany"===e.kind}const y=null,v=Date.now()
function b(e,t){return`implicit-${e}:${t}${v}`}function w(e,t){e.inverseKind=t.kind,e.inverseKey=t.key,e.inverseType=t.type,e.inverseIsAsync=t.isAsync,e.inverseIsCollection=t.isCollection,e.inverseIsPolymorphic=t.isPolymorphic,e.inverseIsImplicit=t.isImplicit,e.inverseIsLinksMode=t.isLinksMode
const n=!1!==e.resetOnRemoteUpdate&&!1!==t.resetOnRemoteUpdate
e.resetOnRemoteUpdate=n,t.resetOnRemoteUpdate=n}function _(e){var t
g(e)||(e={kind:"resource"===(t=e).kind?"belongsTo":"hasMany",name:t.name,type:t.type,options:Object.assign({},{async:!1,inverse:null,resetOnRemoteUpdate:!1},t.options)})
const n={},r=e.options
return n.kind=e.kind,n.key=e.name,n.type=e.type,n.isAsync=r.async,n.isImplicit=!1,n.isCollection="hasMany"===e.kind,n.isPolymorphic=r&&!!r.polymorphic,n.isLinksMode=r.linksMode??!1,n.inverseKey=r&&r.inverse||"",n.inverseType="",n.inverseIsAsync=y,n.inverseIsImplicit=r&&null===r.inverse||y,n.inverseIsCollection=y,n.inverseIsLinksMode=y,n.resetOnRemoteUpdate=!!g(e)&&!e.options?.linksMode&&!1!==e.options?.resetOnRemoteUpdate,n}function S(e,t,n){n?function(e,t,n){const i=t.value,s=e.get(t.record,t.field)
n&&e._addToTransaction(s)
const o=s.isDirty
s.state.hasReceivedData||(s.isDirty=!0),s.state.hasReceivedData=!0
const{definition:a}=s,{type:c}=s.definition,l=C(i,s,r=>{c!==r.type&&e.registerPolymorphicType(c,r.type),s.additions?.has(r)&&s.additions.delete(r),E(e,r,a.inverseKey,t.record,n)},r=>{s.removals?.has(r)&&s.removals.delete(r),I(e,r,a.inverseKey,t.record,n)})
if(s.remoteMembers=l.finalSet,s.remoteState=l.finalState,l.changed&&(s.isDirty=!0),s._diff=l,"hasMany"===s.definition.kind&&!1!==s.definition.resetOnRemoteUpdate&&(l.changed||o)){const n={removals:[],additions:[],triggered:!1}
s.removals&&(s.isDirty=!0,s.removals.forEach(r=>{n.triggered=!0,n.removals.push(r),E(e,r,a.inverseKey,t.record,!1)}),s.removals=null),s.additions&&(s.additions.forEach(r=>{u(r)||(n.triggered=!0,n.additions.push(r),s.isDirty=!0,s.additions.delete(r),I(e,r,a.inverseKey,t.record,!1))}),0===s.additions.size&&(s.additions=null)),n.triggered&&(0,r.deprecate)(`EmberData is changing the default semantics of updates to the remote state of relationships.\n\nThe following local state was cleared from the <${s.identifier.type}>.${s.definition.key} hasMany relationship but will not be once this deprecation is resolved by opting into the new behavior:\n\n\tAdded: [${n.additions.map(e=>e.lid).join(", ")}]\n\tRemoved: [${n.removals.map(e=>e.lid).join(", ")}]`,!1,{id:"ember-data:deprecate-relationship-remote-update-clearing-local-state",for:"ember-data",since:{enabled:"5.3",available:"4.13"},until:"6.0",url:"https://deprecations.emberjs.com/v5.x#ember-data-deprecate-relationship-remote-update-clearing-local-state"})}s.isDirty&&!o&&T(e,s)}(e,t,n):function(e,t,n){const r=t.value,i=e.get(t.record,t.field)
i.state.hasReceivedData=!0
const{additions:s,removals:o}=i,{inverseKey:a,type:c}=i.definition,{record:u}=t,l=i.isDirty
let h=!1
const d=r=>{const i=o?.has(r)
!i&&s?.has(r)||(c!==r.type&&e.registerPolymorphicType(c,r.type),h=!0,E(e,r,a,t.record,n),i&&o.delete(r))},f=t=>{const r=s?.has(t)
!r&&o?.has(t)||(h=!0,I(e,t,a,u,n),r&&s.delete(t))},p=C(r,i,d,f)
s&&s.size>0&&s.forEach(e=>{p.add.has(e)||(h=!0,f(e))}),o&&o.size>0&&o.forEach(e=>{p.del.has(e)||(h=!0,d(e))})
const g=p.changed||h
i.additions=p.add,i.removals=p.del,i.localState=p.finalState,g&&!l&&m(e,i)}(e,t,n)}function E(e,t,n,r,i){const s=e.get(t,n),{type:o}=s.definition
o!==r.type&&e.registerPolymorphicType(o,r.type),l(s)?(s.state.hasReceivedData=!0,s.state.isEmpty=!1,i&&(e._addToTransaction(s),null!==s.remoteState&&I(e,s.remoteState,s.definition.inverseKey,t,i),s.remoteState=r),s.localState!==r&&(!i&&s.localState&&I(e,s.localState,s.definition.inverseKey,t,i),s.localState=r,m(e,s))):d(s)?i?s.remoteMembers.has(r)||(e._addToTransaction(s),s.remoteState.push(r),s.remoteMembers.add(r),s.additions?.has(r)?s.additions.delete(r):(s.isDirty=!0,s.state.hasReceivedData=!0,T(e,s))):(s.isDirty||s.localState||(s.localState=[]),k(e,0,s,r,null,i)&&m(e,s)):i?s.remoteMembers.has(r)||(s.remoteMembers.add(r),s.localMembers.add(r)):s.localMembers.has(r)||s.localMembers.add(r)}function I(e,t,n,r,i){const s=e.get(t,n)
l(s)?(s.state.isEmpty=!0,i&&(e._addToTransaction(s),s.remoteState=null),s.localState===r&&(s.localState=null,m(e,s))):d(s)?i?(e._addToTransaction(s),D(s,r)&&m(e,s)):x(s,r)&&m(e,s):i?(s.remoteMembers.delete(r),s.localMembers.delete(r)):r&&s.localMembers.has(r)&&s.localMembers.delete(r)}function T(e,t){t.accessed&&e._scheduleLocalSync(t)}function A(e,t,n=!1){const i=e.get(t.record,t.field)
n&&e._addToTransaction(i)
const{definition:s,state:o}=i,a=n?"remoteState":"localState",c=i[a]
if(t.value!==c)if(c&&I(e,c,s.inverseKey,t.record,n),i[a]=t.value,o.hasReceivedData=!0,o.isEmpty=null===t.value,o.isStale=!1,o.hasFailedLoadAttempt=!1,t.value&&(s.type!==t.value.type&&e.registerPolymorphicType(s.type,t.value.type),E(e,t.value,s.inverseKey,t.record,n)),n){const{localState:t,remoteState:n}=i
if(t&&u(t)&&!n)return
t!==n&&t===c?(i.localState=n,m(e,i)):t!==n&&t!==c&&!1!==i.definition.resetOnRemoteUpdate&&(i.localState=n,(0,r.deprecate)(`EmberData is changing the default semantics of updates to the remote state of relationships.\n\nThe following local state was cleared from the <${i.identifier.type}>.${i.definition.key} belongsTo relationship but will not be once this deprecation is resolved:\n\n\t${t?"Added: "+t.lid+"\n\t":""}${c?"Removed: "+c.lid:""}`,!1,{id:"ember-data:deprecate-relationship-remote-update-clearing-local-state",for:"ember-data",since:{enabled:"5.3",available:"4.13"},until:"6.0",url:"https://deprecations.emberjs.com/v5.x#ember-data-deprecate-relationship-remote-update-clearing-local-state"}),m(e,i))}else m(e,i)
else if(o.hasReceivedData=!0,n){const{localState:o}=i
if(o&&u(o)&&!c)return
c&&o===c?function(e,t,n,r,i){const s=e.get(t,n)
d(s)&&i&&s.remoteMembers.has(r)&&m(e,s)}(e,c,s.inverseKey,t.record,n):o!==t.value&&!1!==i.definition.resetOnRemoteUpdate&&(i.localState=c,(0,r.deprecate)(`EmberData is changing the default semantics of updates to the remote state of relationships.\n\nThe following local state was cleared from the <${i.identifier.type}>.${i.definition.key} belongsTo relationship but will not be once this deprecation is resolved:\n\n\t${o?"Added: "+o.lid+"\n\t":""}${c?"Removed: "+c.lid:""}`,!1,{id:"ember-data:deprecate-relationship-remote-update-clearing-local-state",for:"ember-data",since:{enabled:"5.3",available:"4.13"},until:"6.0",url:"https://deprecations.emberjs.com/v5.x#ember-data-deprecate-relationship-remote-update-clearing-local-state"}),m(e,i))}}function C(e,t,n,r){const i=new Set(e),{localState:s,remoteState:o,remoteMembers:a}=t
if(e.length!==i.size){const{diff:c,duplicates:u}=function(e,t,n,r,i,s,o,a){const c=t.length,u=r.length,l=Math.max(c,u)
let h=n.size!==i.size,d=!1
const f=new Set,p=new Set,m=new Map,g=new Set,y=[],v=e?.length??0
for(let b=0,w=0;b<l;b++){let l,_=!1
if(b<c)if(l=t[b],g.has(l)){let e=m.get(l)
void 0===e&&(e=[],m.set(l,e)),e.push(b)}else y[w]=l,g.add(l),_=!0,i.has(l)||(b<v&&e[b]!==l&&(h=!0),f.add(l),s(l))
if(b<u){const t=r[b]
l!==r[w]?(d=!0,!a&&b<v?e[w]!==l&&(h=!0):h=!0):a&&!h&&w<v&&e[w]!==l&&(h=!0),n.has(t)||(h=!0,p.add(t),o(t))}else _&&w<u&&l!==r[w]&&(h=!0)
_&&w++}return{diff:{add:f,del:p,finalState:y,finalSet:g,changed:h,remoteOrderChanged:d},duplicates:m}}(s,e,i,o,a,n,r,t.definition.resetOnRemoteUpdate)
return c}return function(e,t,n,r,i,s,o,a){const c=t.length,u=r.length,l=Math.max(c,u),h=e?c===e.length:c===u
let d=n.size!==i.size,f=e?n.size!==e.length:d
const p=new Set,m=new Set,g=e?.length??0
for(let y=0;y<l;y++){let l
if(y<c&&(l=t[y],!i.has(l))&&(y<g&&e[y]!==l&&(f=!0),p.add(l),s(l)),y<u){const t=r[y]
h&&l!==t?(d=!0,y<g?e[y]!==l&&(f=!0):y<c&&(f=!0)):a&&h&&!f&&y<g&&e[y]!==t&&(f=!0),n.has(t)||(d=!0,m.add(t),o(t))}}return{add:p,del:m,finalState:t,finalSet:n,changed:f,remoteOrderChanged:d}}(s,e,i,o,a,n,r,t.definition.resetOnRemoteUpdate)}function k(e,t,n,r,i,s){return s?function(e,t,n,r,i){const{remoteMembers:s,additions:o,removals:a,remoteState:c}=n
if(s.has(r))return!1
s.add(r)
const u=null!==i&&i>=0&&i<c.length
return u?c.splice(i,0,r):c.push(r),o?.has(r)?(o.delete(r),!1):(n.isDirty||n.localState&&(u?0===i?n.localState.unshift(r):a?.size?n.isDirty=!0:n.localState.splice(i,0,r):n.localState.push(r)),!0)}(0,0,n,r,i):function(e,t,n,r,i){const{remoteMembers:s,removals:o}=n
let a=n.additions
if((s.has(r)||a?.has(r))&&!o?.has(r))return!1
if(o?.has(r))o.delete(r)
else{a||(a=n.additions=new Set),n.state.hasReceivedData=!0,a.add(r)
const{type:t}=n.definition
t!==r.type&&e.registerPolymorphicType(r.type,t)}return n.localState&&(null!==i?n.localState.splice(i,0,r):n.localState.push(r)),!0}(e,0,n,r,i)}function x(e,t){const{remoteMembers:n,additions:r}=e
let i=e.removals
if(!n.has(t)&&!r?.has(t)||i?.has(t))return!1
if(r?.has(t)?r.delete(t):(i||(i=e.removals=new Set),i.add(t)),e.localState){const n=e.localState.indexOf(t)
e.localState.splice(n,1)}return!0}function D(e,t){const{remoteMembers:n,additions:r,removals:i,remoteState:s}=e
if(!n.has(t))return!1
n.delete(t)
let o=s.indexOf(t)
return s.splice(o,1),i?.has(t)?(i.delete(t),!1):(e.localState&&(o=e.localState.indexOf(t),e.localState.splice(o,1)),!0)}function R(e,t,n,r){l(r)?A(e,{op:"replaceRelatedRecord",record:t,field:n,value:r.remoteState},!1):(S(e,{op:"replaceRelatedRecords",record:t,field:n,value:r.remoteState.slice()},!1),m(e,r))}function N(e,t){e.accessed=!0
const n={}
return e.state.hasReceivedData&&(n.data=t?e.remoteState.slice():function(e){if(!e.isDirty)return e.localState
const t=e.remoteState.slice()
return e.removals?.forEach(e=>{const n=t.indexOf(e)
t.splice(n,1)}),e.additions?.forEach(e=>{t.push(e)}),e.localState=t,e.isDirty=!1,t}(e)),e.links&&(n.links=e.links),e.meta&&(n.meta=e.meta),n}function O(e,t){let n
e.accessed=!0
const r={}
return t&&e.remoteState?n=e.remoteState:!t&&e.localState&&(n=e.localState),(t&&null===e.remoteState||null===e.localState)&&e.state.hasReceivedData&&(n=null),e.links&&(r.links=e.links),void 0!==n&&(r.data=n),e.meta&&(r.meta=e.meta),r}function M(e,t,n,r,i,s){k(e,0,t,r,i,s)&&E(e,r,t.definition.inverseKey,n,s)}function P(e,t,n,r,i,s){(function(e,t,n,r,i,s){return s?D(n,r):x(n,r)})(0,0,n,r,0,s)&&I(e,r,n.definition.inverseKey,t,s)}function F(e){switch(typeof e){case"object":return e
case"string":return{href:e}}}function L(e,t){for(let n=0;n<e.length;n++)e[n]=t.upgradeIdentifier(e[n])
return e}const j=(0,s.L1)("Graphs",new Map)
class q{constructor(e){this._definitionCache=Object.create(null),this._metaCache=Object.create(null),this._potentialPolymorphicTypes=Object.create(null),this.identifiers=new Map,this.store=e,this.isDestroyed=!1,this._willSyncRemote=!1,this._willSyncLocal=!1,this._pushedUpdates={belongsTo:void 0,hasMany:void 0,deletions:[]},this._updatedRelationships=new Set,this._transaction=null,this._removing=null,this.silenceNotifications=!1}has(e,t){const n=this.identifiers.get(e)
return!!n&&void 0!==n[t]}getDefinition(e,t){let n=this._metaCache[e.type],r=n?.[t]
if(!r){const i=function(e,t,n){const r=e._definitionCache,i=e.store,s=e._potentialPolymorphicTypes,{type:u}=t
let l=a(r,u,n)
if(void 0!==l)return l
const h=i.schema.fields(t).get(n)
if(!h){if(s[u]){const e=Object.keys(s[u])
for(let t=0;t<e.length;t++){const i=a(r,e[t],n)
if(i)return c(r,u,n,i),i.rhs_modelNames.push(u),i}}return r[u][n]=null,null}const d=_(h)
let f,p
const m=d.type
if(null===d.inverseKey?f=null:(p=function(e,t,n){const r=e.schema.fields(t).get(n)
return r?r.options.inverse:null}(o(i),t,n),f=!p&&d.isPolymorphic&&d.inverseKey?{kind:"belongsTo",key:d.inverseKey,type:u,isAsync:!1,isImplicit:!1,isCollection:!1,isPolymorphic:!1}:p?_(i.schema.fields({type:m}).get(p)):null),!f){p=b(u,n),f={kind:"implicit",key:p,type:u,isAsync:!1,isImplicit:!0,isCollection:!0,isPolymorphic:!1},w(d,f),w(f,d)
const e={lhs_key:`${u}:${n}`,lhs_modelNames:[u],lhs_baseModelName:u,lhs_relationshipName:n,lhs_definition:d,lhs_isPolymorphic:d.isPolymorphic,rhs_key:f.key,rhs_modelNames:[m],rhs_baseModelName:m,rhs_relationshipName:f.key,rhs_definition:f,rhs_isPolymorphic:!1,hasInverse:!1,isSelfReferential:u===m,isReflexive:!1}
return c(r,m,p,e),c(r,u,n,e),e}const g=f.type
if(l=a(r,g,n)||a(r,m,p),l)return(l.lhs_baseModelName===g?l.lhs_modelNames:l.rhs_modelNames).push(u),c(r,u,n,l),l
w(d,f),w(f,d)
const y=[u]
u!==g&&y.push(g)
const v=g===m,S={lhs_key:`${g}:${n}`,lhs_modelNames:y,lhs_baseModelName:g,lhs_relationshipName:n,lhs_definition:d,lhs_isPolymorphic:d.isPolymorphic,rhs_key:`${m}:${p}`,rhs_modelNames:[m],rhs_baseModelName:m,rhs_relationshipName:p,rhs_definition:f,rhs_isPolymorphic:f.isPolymorphic,hasInverse:!0,isSelfReferential:v,isReflexive:v&&n===p}
return c(r,g,n,S),c(r,u,n,S),c(r,m,p,S),S}(this,e,t)
r=function(e,t,n){const r=e.isSelfReferential
return 1==(n===e.lhs_relationshipName)&&(!0===r||t===e.lhs_baseModelName||e.rhs_isPolymorphic&&e.lhs_modelNames.includes(t))}(i,e.type,t)?i.lhs_definition:i.rhs_definition,n=this._metaCache[e.type]=n||{},n[t]=r}return r}get(e,t){let n=this.identifiers.get(e)
n||(n=Object.create(null),this.identifiers.set(e,n))
let r=n[t]
if(!r){const i=this.getDefinition(e,t)
r="belongsTo"===i.kind?n[t]=function(e,t){return{definition:e,identifier:t,state:{hasReceivedData:!1,isEmpty:!0,isStale:!1,hasFailedLoadAttempt:!1,shouldForceReload:!1,hasDematerializedInverse:!1},transactionRef:0,localState:null,remoteState:null,meta:null,links:null,accessed:!1}}(i,e):"hasMany"===i.kind?n[t]=function(e,t){return{definition:e,identifier:t,state:{hasReceivedData:!1,isEmpty:!0,isStale:!1,hasFailedLoadAttempt:!1,shouldForceReload:!1,hasDematerializedInverse:!1},remoteMembers:new Set,remoteState:[],additions:null,removals:null,meta:null,links:null,localState:null,isDirty:!1,transactionRef:0,accessed:!1,_diff:void 0}}(i,e):n[t]=function(e,t){return{definition:e,identifier:t,localMembers:new Set,remoteMembers:new Set}}(i,e)}return r}getData(e,t){const n=this.get(e,t)
return l(n)?O(n,!1):N(n,!1)}getRemoteData(e,t){const n=this.get(e,t)
return l(n)?O(n,!0):N(n,!0)}registerPolymorphicType(e,t){const n=this._potentialPolymorphicTypes
let r=n[e]
r||(r=n[e]=Object.create(null)),r[t]=!0
let i=n[t]
i||(i=n[t]=Object.create(null)),i[e]=!0}isReleasable(e){const t=this.identifiers.get(e)
if(!t)return!0
const n=Object.keys(t)
for(let r=0;r<n.length;r++){const i=t[n[r]]
if(void 0!==i&&i.definition.inverseIsAsync&&!u(e))return!1}return!0}unload(e,t){const n=this.identifiers.get(e)
n&&Object.keys(n).forEach(e=>{const r=n[e]
r&&(function(e,t,n){if(h(t))return void(e.isReleasable(t.identifier)&&U(e,t))
const{identifier:r}=t,{inverseKey:i}=t.definition
t.definition.inverseIsImplicit||f(t,t=>function(e,t,n,r,i){if(!e.has(t,n))return
const s=e.get(t,n)
l(s)&&s.localState&&r!==s.localState||function(e,t,n,r){if(l(t)){const n=t.localState
!t.definition.isAsync||n&&u(n)?(t.localState===n&&null!==n&&(t.localState=null),t.remoteState===n&&null!==n&&(t.remoteState=null,t.state.hasReceivedData=!0,t.state.isEmpty=!0,t.localState&&!u(t.localState)&&(t.localState=null))):t.state.hasDematerializedInverse=!0,r||m(e,t)}else!t.definition.isAsync||n&&u(n)?p(e,t,n):t.state.hasDematerializedInverse=!0,r||m(e,t)}(e,s,r,i)}(e,t,i,r,n)),t.definition.inverseIsImplicit||t.definition.inverseIsAsync||(t.state.isStale=!0,B(t),t.definition.isAsync||n||m(e,t))}(this,r,t),h(r)&&(n[e]=void 0))})}_isDirty(e,t){const n=this.identifiers.get(e)
if(!n)return!1
const r=n[t]
if(!r)return!1
if(l(r))return r.localState!==r.remoteState
if(d(r)){const e=null!==r.additions&&r.additions.size>0,t=null!==r.removals&&r.removals.size>0
return e||t||$(r)}return!1}getChanged(e){const t=this.identifiers.get(e),n=new Map
if(!t)return n
const r=Object.keys(t)
for(let i=0;i<r.length;i++){const e=r[i],s=t[e]
if(s)if(l(s))s.localState!==s.remoteState&&n.set(e,{kind:"resource",remoteState:s.remoteState,localState:s.localState})
else if(d(s)){const t=null!==s.additions&&s.additions.size>0,r=null!==s.removals&&s.removals.size>0,i=$(s);(t||r||i)&&n.set(e,{kind:"collection",additions:new Set(s.additions),removals:new Set(s.removals),remoteState:s.remoteState,localState:N(s,!1).data||[],reordered:i})}}return n}hasChanged(e){const t=this.identifiers.get(e)
if(!t)return!1
const n=Object.keys(t)
for(let r=0;r<n.length;r++)if(this._isDirty(e,n[r]))return!0
return!1}rollback(e){const t=this.identifiers.get(e),n=[]
if(!t)return n
const r=Object.keys(t)
for(let i=0;i<r.length;i++){const s=r[i],o=t[s]
o&&this._isDirty(e,s)&&(R(this,e,s,o),n.push(s))}return n}remove(e){this._removing=e,this.unload(e),this.identifiers.delete(e),this._removing=null}push(e){if("deleteRecord"===e.op)this._pushedUpdates.deletions.push(e)
else{const t=this.getDefinition(e.record,e.field)
!function(e,t,n){const r=e[t.kind]=e[t.kind]||new Map
let i=r.get(t.inverseType)
i||(i=new Map,r.set(t.inverseType,i))
let s=i.get(n.field)
s||(s=[],i.set(n.field,s)),s.push(n)}(this._pushedUpdates,t,e)}if(!this._willSyncRemote){this._willSyncRemote=!0
const e=o(this.store)
e._cbs?e._schedule("coalesce",()=>this._flushRemoteQueue()):e._run(()=>this._flushRemoteQueue())}}update(e,t=!1){switch(e.op){case"mergeIdentifiers":{const t=this.identifiers.get(e.record)
t&&function(e,t,n){Object.keys(n).forEach(r=>{const i=n[r]
i&&function(e,t,n){n.identifier=t.value,f(n,r=>{const i=e.get(r,n.definition.inverseKey)
!function(e,t,n){l(t)?function(e,t,n){t.remoteState===n.record&&(t.remoteState=n.value),t.localState===n.record&&(t.localState=n.value,m(e,t))}(e,t,n):d(t)?function(e,t,n){if(t.remoteMembers.has(n.record)){t.remoteMembers.delete(n.record),t.remoteMembers.add(n.value)
const e=t.remoteState.indexOf(n.record)
t.remoteState.splice(e,1,n.value),t.isDirty=!0}t.additions?.has(n.record)&&(t.additions.delete(n.record),t.additions.add(n.value),t.isDirty=!0),t.removals?.has(n.record)&&(t.removals.delete(n.record),t.removals.add(n.value),t.isDirty=!0),t.isDirty&&m(e,t)}(e,t,n):function(e,t,n){t.remoteMembers.has(n.record)&&(t.remoteMembers.delete(n.record),t.remoteMembers.add(n.value)),t.localMembers.has(n.record)&&(t.localMembers.delete(n.record),t.localMembers.add(n.value))}(0,t,n)}(e,i,t)})}(e,t,i)})}(this,e,t)
break}case"update":case"updateRelationship":(function(e,t){const n=e.get(t.record,t.field),{definition:i,state:s,identifier:o}=n,{isCollection:a}=i,c=t.value
let u=!1,l=!1
if(c.meta&&(n.meta=c.meta),void 0!==c.data)if(u=!0,a){null===c.data&&(c.data=[])
const n=e.store.identifierCache
e.update({op:"replaceRelatedRecords",record:o,field:t.field,value:L(c.data,n)},!0)}else e.update({op:"replaceRelatedRecord",record:o,field:t.field,value:c.data?e.store.identifierCache.upgradeIdentifier(c.data):null},!0)
else!1!==i.isAsync||s.hasReceivedData||(u=!0,a?e.update({op:"replaceRelatedRecords",record:o,field:t.field,value:[]},!0):e.update({op:"replaceRelatedRecord",record:o,field:t.field,value:null},!0))
if(c.links){const e=n.links
if(n.links=c.links,c.links.related){const t=F(c.links.related),n=e&&e.related?F(e.related):null,a=n?n.href:null
t&&t.href&&t.href!==a&&((0,r.warn)(`You pushed a record of type '${o.type}' with a relationship '${i.key}' configured as 'async: false'. You've included a link but no primary data, this may be an error in your payload. EmberData will treat this relationship as known-to-be-empty.`,i.isAsync||s.hasReceivedData,{id:"ds.store.push-link-for-sync-relationship"}),l=!0)}}if(n.state.hasFailedLoadAttempt=!1,u){const e=null===c.data||Array.isArray(c.data)&&0===c.data.length
n.state.hasReceivedData=!0,n.state.isStale=!1,n.state.hasDematerializedInverse=!1,n.state.isEmpty=e}else l&&(a||!n.state.hasReceivedData||(h=n.transactionRef,d=e._transaction,0===h||null===d||h<d)?(n.state.isStale=!0,m(e,n)):n.state.isStale=!1)
var h,d})(this,e)
break
case"deleteRecord":{const t=e.record,n=this.identifiers.get(t)
n&&(Object.keys(n).forEach(e=>{const t=n[e]
t&&(n[e]=void 0,U(this,t))}),this.identifiers.delete(t))
break}case"replaceRelatedRecord":A(this,e,t)
break
case"add":(function(e,t,n){const{record:r,value:i,index:s}=t,o=e.get(r,t.field),a=l(o)
if(n&&a){if(i!==o.remoteState)A(e,{op:"replaceRelatedRecord",record:r,field:t.field,value:i},n)}else{if(o.isDirty||o.localState||(o.localState=[]),Array.isArray(i))for(let t=0;t<i.length;t++)M(e,o,r,i[t],void 0!==s?s+t:null,n)
else M(e,o,r,i,s??null,n)
m(e,o)}})(this,e,t)
break
case"remove":(function(e,t,n){const{record:r,value:i}=t,s=e.get(r,t.field),o=l(s)
if(n&&o){if(i===s.remoteState)A(e,{op:"replaceRelatedRecord",record:r,field:t.field,value:null},n)}else{if(Array.isArray(i))for(let o=0;o<i.length;o++)P(e,r,s,i[o],t.index,n)
else P(e,r,s,i,t.index,n)
m(e,s)}})(this,e,t)
break
case"replaceRelatedRecords":S(this,e,t)}}_scheduleLocalSync(e){this._updatedRelationships.add(e),this._willSyncLocal||(this._willSyncLocal=!0,o(this.store)._schedule("sync",()=>this._flushLocalQueue()))}_flushRemoteQueue(){if(!this._willSyncRemote)return
let e=(0,s.Yj)("transactionRef")??0
this._transaction=++e,(0,s.dV)("transactionRef",e),this._willSyncRemote=!1
const t=this._pushedUpdates,{deletions:n,hasMany:r,belongsTo:i}=t
t.deletions=[],t.hasMany=void 0,t.belongsTo=void 0
for(let s=0;s<n.length;s++)this.update(n[s],!0)
r&&V(this,r),i&&V(this,i),this._transaction=null}_addToTransaction(e){e.transactionRef=this._transaction}_flushLocalQueue(){if(!this._willSyncLocal)return
if(this.silenceNotifications)return this.silenceNotifications=!1,void(this._updatedRelationships=new Set)
this._willSyncLocal=!1
const e=this._updatedRelationships
this._updatedRelationships=new Set,e.forEach(e=>m(this,e))}destroy(){j.delete(this.store),this.identifiers.clear(),this.store=null,this.isDestroyed=!0}}function V(e,t){t.forEach(t=>{t.forEach(t=>{!function(e,t){for(let n=0;n<t.length;n++)e.update(t[n],!0)}(e,t)})})}function B(e){l(e)?(e.localState=null,e.remoteState=null,e.state.hasReceivedData=!1,e.state.isEmpty=!0):(e.remoteMembers.clear(),e.remoteState=[],e.additions=null,e.removals=null,e.localState=null)}function U(e,t){const{identifier:n}=t,{inverseKey:r}=t.definition
f(t,t=>{e.has(t,r)&&p(e,e.get(t,r),n)}),l(t)?(t.definition.isAsync||B(t),t.localState=null):d(t)?t.definition.isAsync||(B(t),m(e,t)):(t.remoteMembers.clear(),t.localMembers.clear())}function $(e){if(e.isDirty)return!1
const{remoteState:t,localState:n,additions:r,removals:i}=e
if(null===n)return!1
for(let s=0,o=0;s<t.length;s++){const e=t[s],a=n[o]
if(e!==a){if(i&&i.has(e))continue
if(r&&r.has(a)){o++,s--
continue}return!0}o++}return!1}function z(e){return void 0!==e._instanceCache?e._instanceCache._storeWrapper:e}function G(e){return j.get(z(e))}function K(e){const t=z(e)
let n=j.get(t)
return n||(n=new q(t),j.set(t,n),o(t)._graph=n),n}},356:(e,t,n)=>{"use strict"
function r(e){return Math.hypot(...e)}n.r(t),n.d(t,{default:()=>i,hypot:()=>r})
var i=(0,n(336).helper)(r)},455:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultsFromPostinstall=()=>{}},456:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>i})
var r=n(5670)
function i(e,t){return(0,r.A)(e)!==(0,r.A)(t)}},650:(e,t,n)=>{"use strict"
function r(e,t,n){return n?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>t}n.r(t),n.d(t,{default:()=>r})},651:(e,t,n)=>{"use strict"
function r(e,t){return e===t}n.r(t),n.d(t,{default:()=>r})},685:(e,t,n)=>{"use strict"
function r(e,t,n){return n?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<t}n.r(t),n.d(t,{default:()=>r})},726:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(8140)
Object.keys(r).forEach(function(e){"default"===e||t.hasOwnProperty(e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},730:(e,t,n)=>{"use strict"
function r([e]){return Math.abs(e)}n.r(t),n.d(t,{abs:()=>r,default:()=>i})
var i=(0,n(336).helper)(r)},734:(e,t,n)=>{"use strict"
function r(e,t){if(void 0===t||0===+t)return Math.round(e)
if(t=+t,null===(e=+e)||isNaN(e)||"number"!=typeof t||t%1!=0)return NaN
if(e<0)return-r(-e,t)
let n=e.toString().split("e")
return n=(e=Math.round(+`${n[0]}e${n[1]?+n[1]-t:-t}`)).toString().split("e"),+`${n[0]}e${n[1]?+n[1]+t:t}`}function i([e],t){if(t){if(t.decimals)return r(e,-t.decimals)
if(t.exp)return r(e,t.exp)}return Math.round(e)}n.r(t),n.d(t,{default:()=>s,round:()=>i})
var s=(0,n(336).helper)(i)},749:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(3227)
Object.keys(r).forEach(function(e){"default"===e||t.hasOwnProperty(e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},828:(e,t,n)=>{"use strict"
function r([e=0,t=0]){const n=Math.abs(e),i=Math.abs(t)
return 0===n?i:0===i?n:r([i,n%i])}n.r(t),n.d(t,{default:()=>i,gcd:()=>r})
var i=(0,n(336).helper)(r)},980:(e,t,n)=>{"use strict"
function r([e]){return Math.log2(e)}n.r(t),n.d(t,{default:()=>i,log2:()=>r})
var i=(0,n(336).helper)(r)},1089:(e,t,n)=>{"use strict"
function r([e]){return Math.log1p(e)}n.r(t),n.d(t,{default:()=>i,log1p:()=>r})
var i=(0,n(336).helper)(r)},1177:(e,t,n)=>{"use strict"
function r([e]){return Math.ceil(e)}n.r(t),n.d(t,{ceil:()=>r,default:()=>i})
var i=(0,n(336).helper)(r)},1202:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(455)
const i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},s=function(e,t){if(!e)throw o(t)},o=function(e){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},a=function(e){const t=[]
let n=0
for(let r=0;r<e.length;r++){let i=e.charCodeAt(r)
i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter")
this.init_()
const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[]
for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4
let h=(15&o)<<2|c>>6,d=63&c
a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(a(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[]
let n=0,r=0
for(;n<e.length;){const i=e[n++]
if(i<128)t[r++]=String.fromCharCode(i)
else if(i>191&&i<224){const s=e[n++]
t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536
t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++]
t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_()
const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[]
for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i
const o=i<e.length?n[e.charAt(i)]:64;++i
const a=i<e.length?n[e.charAt(i)]:64
if(++i,null==t||null==s||null==o||null==a)throw new u
const c=t<<2|s>>4
if(r.push(c),64!==o){const e=s<<4&240|o>>2
if(r.push(e),64!==a){const e=o<<6&192|a
r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={}
for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}}
class u extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const l=function(e){const t=a(e)
return c.encodeByteArray(t,!0)},h=function(e){return l(e).replace(/\./g,"")},d=function(e){try{return c.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}
function f(e,t){if(!(t instanceof Object))return t
switch(t.constructor){case Date:return new Date(t.getTime())
case Object:void 0===e&&(e={})
break
case Array:e=[]
break
default:return t}for(const n in t)t.hasOwnProperty(n)&&p(n)&&(e[n]=f(e[n],t[n]))
return e}function p(e){return"__proto__"!==e}function m(){if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if("undefined"!=typeof global)return global
throw new Error("Unable to locate global object.")}const g=()=>{try{return r.getDefaultsFromPostinstall()||m().__FIREBASE_DEFAULTS__||(()=>{if("undefined"==typeof process||void 0===process.env)return
const e=process.env.__FIREBASE_DEFAULTS__
return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return
let e
try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&d(e[1])
return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},y=e=>g()?.emulatorHosts?.[e]
class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}function b(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}const w={}
let _=!1
function S(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function E(){const e=g()?.forceEnvironment
if("node"===e)return!0
if("browser"===e)return!1
try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}function I(){return"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}class T extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(C,(e,n)=>{const r=t[n]
return null!=r?String(r):`<${n}?>`})}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`
return new T(r,o,n)}}const C=/\{\$([^}]+)}/g
function k(e){return JSON.parse(e)}const x=function(e){let t={},n={},r={},i=""
try{const s=e.split(".")
t=k(d(s[0])||""),n=k(d(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}}
function D(e){return null!==e&&"object"==typeof e}class R{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r
if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.")
r=function(e){if("object"!=typeof e||null===e)return!1
for(const t of["next","error","complete"])if(t in e&&"function"==typeof e[t])return!0
return!1}(e)?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=N),void 0===r.error&&(r.error=N),void 0===r.complete&&(r.complete=N)
const i=this.unsubscribeOne.bind(this,this.observers.length)
return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function N(){}function O(e,t){return`${e} failed: ${t} argument `}const M=144e5
t.CONSTANTS=i,t.DecodeBase64StringError=u,t.Deferred=v,t.ErrorFactory=A,t.FirebaseError=T,t.MAX_VALUE_MILLIS=M,t.RANDOM_FACTOR=.5,t.Sha1=class{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128
for(let e=1;e<this.blockSize;++e)this.pad_[e]=0
this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0)
const n=this.W_
if("string"==typeof e)for(let l=0;l<16;l++)n[l]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4
else for(let l=0;l<16;l++)n[l]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4
for(let l=16;l<80;l++){const e=n[l-3]^n[l-8]^n[l-14]^n[l-16]
n[l]=4294967295&(e<<1|e>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],u=this.chain_[4]
for(let l=0;l<80;l++){l<40?l<20?(r=c^o&(a^c),i=1518500249):(r=o^a^c,i=1859775393):l<60?(r=o&a|c&(o|a),i=2400959708):(r=o^a^c,i=3395469782)
const e=(s<<5|s>>>27)+r+u+i+n[l]&4294967295
u=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(null==e)return
void 0===t&&(t=e.length)
const n=t-this.blockSize
let r=0
const i=this.buf_
let s=this.inbuf_
for(;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize
if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0
break}}else for(;r<t;)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0
break}}this.inbuf_=s,this.total_+=t}digest(){const e=[]
let t=8*this.total_
this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56))
for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256
this.compress_(this.buf_)
let n=0
for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n
return e}},t.areCookiesEnabled=function(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)},t.assert=s,t.assertionError=o,t.async=function(e,t){return(...n)=>{Promise.resolve(!0).then(()=>{e(...n)}).catch(e=>{t&&t(e)})}},t.base64=c,t.base64Decode=d,t.base64Encode=l,t.base64urlEncodeWithoutPadding=h,t.calculateBackoffMillis=function(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2)
return Math.min(M,r+i)},t.contains=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.createMockUserToken=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.')
const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id
if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!")
const s={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...e}
return[h(JSON.stringify({alg:"none",type:"JWT"})),h(JSON.stringify(s)),""].join(".")},t.createSubscribe=function(e,t){const n=new R(e,t)
return n.subscribe.bind(n)},t.decode=x,t.deepCopy=function(e){return f(void 0,e)},t.deepEqual=function e(t,n){if(t===n)return!0
const r=Object.keys(t),i=Object.keys(n)
for(const s of r){if(!i.includes(s))return!1
const r=t[s],o=n[s]
if(D(r)&&D(o)){if(!e(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!r.includes(s))return!1
return!0},t.deepExtend=f,t.errorPrefix=O,t.extractQuerystring=function(e){const t=e.indexOf("?")
if(!t)return""
const n=e.indexOf("#",t)
return e.substring(t,n>0?n:void 0)},t.getDefaultAppConfig=()=>g()?.config,t.getDefaultEmulatorHost=y,t.getDefaultEmulatorHostnameAndPort=e=>{const t=y(e)
if(!t)return
const n=t.lastIndexOf(":")
if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`)
const r=parseInt(t.substring(n+1),10)
return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},t.getDefaults=g,t.getExperimentalSetting=e=>g()?.[`_${e}`],t.getGlobal=m,t.getModularInstance=function(e){return e&&e._delegate?e._delegate:e},t.getUA=S,t.isAdmin=function(e){const t=x(e).claims
return"object"==typeof t&&!0===t.admin},t.isBrowser=function(){return"undefined"!=typeof window||I()},t.isBrowserExtension=function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0
return"object"==typeof e&&void 0!==e.id},t.isCloudWorkstation=b,t.isCloudflareWorker=function(){return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent},t.isElectron=function(){return S().indexOf("Electron/")>=0},t.isEmpty=function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1
return!0},t.isIE=function(){const e=S()
return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0},t.isIndexedDBAvailable=function(){try{return"object"==typeof indexedDB}catch(e){return!1}},t.isMobileCordova=function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(S())},t.isNode=E,t.isNodeSdk=function(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN},t.isReactNative=function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},t.isSafari=function(){return!E()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")},t.isSafariOrWebkit=function(){return!E()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")},t.isUWP=function(){return S().indexOf("MSAppHost/")>=0},t.isValidFormat=function(e){const t=x(e).claims
return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},t.isValidTimestamp=function(e){const t=x(e).claims,n=Math.floor((new Date).getTime()/1e3)
let r=0,i=0
return"object"==typeof t&&(t.hasOwnProperty("nbf")?r=t.nbf:t.hasOwnProperty("iat")&&(r=t.iat),i=t.hasOwnProperty("exp")?t.exp:r+86400),!!n&&!!r&&!!i&&n>=r&&n<=i},t.isWebWorker=I,t.issuedAtTime=function(e){const t=x(e).claims
return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null},t.jsonEval=k,t.map=function(e,t,n){const r={}
for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e))
return r},t.ordinal=function(e){return Number.isFinite(e)?e+function(e){const t=(e=Math.abs(e))%100
if(t>=10&&t<=20)return"th"
const n=e%10
return 1===n?"st":2===n?"nd":3===n?"rd":"th"}(e):`${e}`},t.pingServer=async function(e){return(await fetch(e,{credentials:"include"})).ok},t.promiseWithTimeout=function(e,t=2e3){const n=new v
return setTimeout(()=>n.reject("timeout!"),t),e.then(n.resolve,n.reject),n.promise},t.querystring=function(e){const t=[]
for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))
return t.length?"&"+t.join("&"):""},t.querystringDecode=function(e){const t={}
return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,r]=e.split("=")
t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t},t.safeGet=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0},t.stringLength=function(e){let t=0
for(let n=0;n<e.length;n++){const r=e.charCodeAt(n)
r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t},t.stringToByteArray=function(e){const t=[]
let n=0
for(let r=0;r<e.length;r++){let i=e.charCodeAt(r)
if(i>=55296&&i<=56319){const t=i-55296
r++,s(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(t<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},t.stringify=function(e){return JSON.stringify(e)},t.updateEmulatorBanner=function(e,t){if("undefined"==typeof window||"undefined"==typeof document||!b(window.location.host)||w[e]===t||w[e]||_)return
function n(e){return`__firebase__banner__${e}`}w[e]=t
const r="__firebase__banner",i=function(){const e={prod:[],emulator:[]}
for(const t of Object.keys(w))w[t]?e.emulator.push(t):e.prod.push(t)
return e}().prod.length>0
function s(){const e=function(e){let t=document.getElementById(e),n=!1
return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}(r),t=n("text"),s=document.getElementById(t)||document.createElement("span"),o=n("learnmore"),a=document.getElementById(o)||document.createElement("a"),c=n("preprendIcon"),u=document.getElementById(c)||document.createElementNS("http://www.w3.org/2000/svg","svg")
if(e.created){const t=e.element
!function(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}(t),function(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}(a,o)
const n=function(){const e=document.createElement("span")
return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{_=!0,function(){const e=document.getElementById(r)
e&&e.remove()}()},e}()
!function(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}(u,c),t.append(u,s,a,n),document.body.appendChild(t)}i?(s.innerText="Preview backend disconnected.",u.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(u.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',s.innerText="Preview backend running in this workspace."),s.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",s):s()},t.validateArgCount=function(e,t,n,r){let i
if(r<t?i="at least "+t:r>n&&(i=0===n?"none":"no more than "+n),i)throw new Error(e+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+i+".")},t.validateCallback=function(e,t,n,r){if((!r||n)&&"function"!=typeof n)throw new Error(O(e,t)+"must be a valid function.")},t.validateContextObject=function(e,t,n,r){if((!r||n)&&("object"!=typeof n||null===n))throw new Error(O(e,t)+"must be a valid context object.")},t.validateIndexedDBOpenable=function(){return new Promise((e,t)=>{try{let n=!0
const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r)
i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(e){t(e)}})},t.validateNamespace=function(e,t,n){if((!n||t)&&"string"!=typeof t)throw new Error(O(e,"namespace")+"must be a valid firebase namespace.")}},1274:(e,t,n)=>{"use strict"
n.d(t,{R3:()=>r.f,RX:()=>r.m,TP:()=>r.q,Wz:()=>r.u,YN:()=>r.w,di:()=>r.v,fV:()=>r.s,i:()=>r.t,o:()=>r.r,oX:()=>r.p,pG:()=>r.h,u2:()=>r.l,xm:()=>r.i})
var r=n(89)},1491:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{FetchManager:()=>r.F,SaveOp:()=>r.S,Snapshot:()=>r.c,SnapshotRecordArray:()=>r.b,upgradeStore:()=>r.u})
var r=n(7910)},1678:(e,t,n)=>{"use strict"
n.r(t),n(1603),n(7262)},1788:(e,t,n)=>{"use strict"
n.d(t,{k5:()=>s,pm:()=>i})
var r=n(7375)
const i=(0,r.L1)("Store",Symbol("Store")),s=(0,r.L1)("$type",Symbol("$type"));(0,r.L1)("RequestSignature",Symbol("RequestSignature"))},1843:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(3797),i=n(129),s=n(1202),o=n(6244)
const a="@firebase/installations",c="0.6.19",u=`w:${c}`,l="FIS_v2",h=new s.ErrorFactory("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."})
function d(e){return e instanceof s.FirebaseError&&e.code.includes("request-failed")}function f({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function p(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()}
var t}async function m(e,t){const n=(await t.json()).error
return h.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function g({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function y(e,{refreshToken:t}){const n=g(e)
return n.append("Authorization",function(e){return`${l} ${e}`}(t)),n}async function v(e){const t=await e()
return t.status>=500&&t.status<600?e():t}function b(e){return new Promise(t=>{setTimeout(t,e)})}const w=/^[cdef][\w-]{21}$/
function _(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16
const t=function(e){var t
return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22)}(e)
return w.test(t)?t:""}catch{return""}}function S(e){return`${e.appName}!${e.appId}`}const E=new Map
function I(e,t){const n=S(e)
T(n,t),function(e,t){const n=C()
n&&n.postMessage({key:e,fid:t}),k()}(n,t)}function T(e,t){const n=E.get(e)
if(n)for(const r of n)r(t)}let A=null
function C(){return!A&&"BroadcastChannel"in self&&(A=new BroadcastChannel("[Firebase] FID Change"),A.onmessage=e=>{T(e.data.key,e.data.fid)}),A}function k(){0===E.size&&A&&(A.close(),A=null)}const x="firebase-installations-store"
let D=null
function R(){return D||(D=o.openDB("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(x)}})),D}async function N(e,t){const n=S(e),r=(await R()).transaction(x,"readwrite"),i=r.objectStore(x),s=await i.get(n)
return await i.put(t,n),await r.done,s&&s.fid===t.fid||I(e,t.fid),t}async function O(e){const t=S(e),n=(await R()).transaction(x,"readwrite")
await n.objectStore(x).delete(t),await n.done}async function M(e,t){const n=S(e),r=(await R()).transaction(x,"readwrite"),i=r.objectStore(x),s=await i.get(n),o=t(s)
return void 0===o?await i.delete(n):await i.put(o,n),await r.done,!o||s&&s.fid===o.fid||I(e,o.fid),o}async function P(e){let t
const n=await M(e.appConfig,n=>{const r=function(e){return j(e||{fid:_(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(h.create("app-offline"))}
const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=f(e),i=g(e),s=t.getImmediate({optional:!0})
if(s){const e=await s.getHeartbeatsHeader()
e&&i.append("x-firebase-client",e)}const o={fid:n,authVersion:l,appId:e.appId,sdkVersion:u},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await v(()=>fetch(r,a))
if(c.ok){const e=await c.json()
return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:p(e.authToken)}}throw await m("Create Installation",c)}(e,t)
return N(e.appConfig,n)}catch(n){throw d(n)&&409===n.customData.serverCode?await O(e.appConfig):await N(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n)
return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:F(e)}:{installationEntry:t}}(e,r)
return t=i.registrationPromise,i.installationEntry})
return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function F(e){let t=await L(e.appConfig)
for(;1===t.registrationStatus;)await b(100),t=await L(e.appConfig)
if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await P(e)
return n||t}return t}function L(e){return M(e,e=>{if(!e)throw h.create("installation-not-found")
return j(e)})}function j(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e
var t}async function q(e,t=!1){let n
const r=await M(e.appConfig,r=>{if(!B(r))throw h.create("not-registered")
const i=r.authToken
if(!t&&2===(s=i).requestStatus&&!function(e){const t=Date.now()
return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(s))return r
var s
if(1===i.requestStatus)return n=async function(e,t){let n=await V(e.appConfig)
for(;1===n.authToken.requestStatus;)await b(100),n=await V(e.appConfig)
const r=n.authToken
return 0===r.requestStatus?q(e,t):r}(e,t),r
{if(!navigator.onLine)throw h.create("app-offline")
const t=function(e){return{...e,authToken:{requestStatus:1,requestTime:Date.now()}}}(r)
return n=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${f(e)}/${t}/authTokens:generate`}(e,n),i=y(e,n),s=t.getImmediate({optional:!0})
if(s){const e=await s.getHeartbeatsHeader()
e&&i.append("x-firebase-client",e)}const o={installation:{sdkVersion:u,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await v(()=>fetch(r,a))
if(c.ok)return p(await c.json())
throw await m("Generate Auth Token",c)}(e,t),r={...t,authToken:n}
return await N(e.appConfig,r),n}catch(n){if(!d(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n={...t,authToken:{requestStatus:0}}
await N(e.appConfig,n)}else await O(e.appConfig)
throw n}}(e,t),t}})
return n?await n:r.authToken}function V(e){return M(e,e=>{if(!B(e))throw h.create("not-registered")
return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?{...e,authToken:{requestStatus:0}}:e
var t})}function B(e){return void 0!==e&&2===e.registrationStatus}async function U(e){const t=e,{installationEntry:n,registrationPromise:r}=await P(t)
return r?r.catch(console.error):q(t).catch(console.error),n.fid}async function $(e,t=!1){const n=e
return await async function(e){const{registrationPromise:t}=await P(e)
t&&await t}(n),(await q(n,t)).token}function z(e){return h.create("missing-app-config-values",{valueName:e})}const G="installations"
r._registerComponent(new i.Component(G,e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw z("App Configuration")
if(!e.name)throw z("App Name")
const t=["projectId","apiKey","appId"]
for(const n of t)if(!e.options[n])throw z(n)
return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t)
return{app:t,appConfig:n,heartbeatServiceProvider:r._getProvider(t,"heartbeat"),_delete:()=>Promise.resolve()}},"PUBLIC")),r._registerComponent(new i.Component("installations-internal",e=>{const t=e.getProvider("app").getImmediate(),n=r._getProvider(t,G).getImmediate()
return{getId:()=>U(n),getToken:e=>$(n,e)}},"PRIVATE")),r.registerVersion(a,c),r.registerVersion(a,c,"cjs2020"),t.deleteInstallations=async function(e){const{appConfig:t}=e,n=await M(t,e=>{if(!e||0!==e.registrationStatus)return e})
if(n){if(1===n.registrationStatus)throw h.create("delete-pending-registration")
if(2===n.registrationStatus){if(!navigator.onLine)throw h.create("app-offline")
await async function(e,t){const n=function(e,{fid:t}){return`${f(e)}/${t}`}(e,t),r={method:"DELETE",headers:y(e,t)},i=await v(()=>fetch(n,r))
if(!i.ok)throw await m("Delete Installation",i)}(t,n),await O(t)}}},t.getId=U,t.getInstallations=function(e=r.getApp()){return r._getProvider(e,"installations").getImmediate()},t.getToken=$,t.onIdChange=function(e,t){const{appConfig:n}=e
return function(e,t){C()
const n=S(e)
let r=E.get(n)
r||(r=new Set,E.set(n,r)),r.add(t)}(n,t),()=>{!function(e,t){const n=S(e),r=E.get(n)
r&&(r.delete(t),0===r.size&&E.delete(n),k())}(n,t)}}},1911:(e,t,n)=>{"use strict"
function r([e]){return Math.asinh(e)}n.r(t),n.d(t,{asinh:()=>r,default:()=>i})
var i=(0,n(336).helper)(r)},1918:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const n=[]
var r
t.LogLevel=void 0,(r=t.LogLevel||(t.LogLevel={}))[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"
const i={debug:t.LogLevel.DEBUG,verbose:t.LogLevel.VERBOSE,info:t.LogLevel.INFO,warn:t.LogLevel.WARN,error:t.LogLevel.ERROR,silent:t.LogLevel.SILENT},s=t.LogLevel.INFO,o={[t.LogLevel.DEBUG]:"log",[t.LogLevel.VERBOSE]:"log",[t.LogLevel.INFO]:"info",[t.LogLevel.WARN]:"warn",[t.LogLevel.ERROR]:"error"},a=(e,t,...n)=>{if(t<e.logLevel)return
const r=(new Date).toISOString(),i=o[t]
if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)
console[i](`[${r}]  ${e.name}:`,...n)}
t.Logger=class{constructor(e){this.name=e,this._logLevel=s,this._logHandler=a,this._userLogHandler=null,n.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in t.LogLevel))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``)
this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function")
this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,t.LogLevel.DEBUG,...e),this._logHandler(this,t.LogLevel.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,t.LogLevel.VERBOSE,...e),this._logHandler(this,t.LogLevel.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,t.LogLevel.INFO,...e),this._logHandler(this,t.LogLevel.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,t.LogLevel.WARN,...e),this._logHandler(this,t.LogLevel.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,t.LogLevel.ERROR,...e),this._logHandler(this,t.LogLevel.ERROR,...e)}},t.setLogLevel=function(e){n.forEach(t=>{t.setLogLevel(e)})},t.setUserLogHandler=function(e,r){for(const s of n){let n=null
r&&r.level&&(n=i[r.level]),s.userLogHandler=null===e?null:(r,i,...s)=>{const o=s.map(e=>{if(null==e)return null
if("string"==typeof e)return e
if("number"==typeof e||"boolean"==typeof e)return e.toString()
if(e instanceof Error)return e.message
try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ")
i>=(n??r.logLevel)&&e({level:t.LogLevel[i].toLowerCase(),message:o,args:s,type:r.name})}}}},1972:(e,t,n)=>{"use strict"
function r([e]){return Math.acosh(e)}n.r(t),n.d(t,{acosh:()=>r,default:()=>i})
var i=(0,n(336).helper)(r)},2139:(e,t,n)=>{"use strict"
function r(e,t){let n=e.load(t)
if(!n)throw new Error(t+" must export an initializer.")
let r=n.default
if(!r)throw new Error(t+" must have a default export")
return r.name||(r.name=t.slice(t.lastIndexOf("/")+1)),r}function i(e,t,n){var i=t+"/initializers/",s=t+"/instance-initializers/",o=[],a=[]
let c
c=n?{names:()=>Object.keys(n),load:e=>n[e]}:{names(){let e=globalThis.requirejs
if(!e||!e._eak_seen)throw new Error("No global AMD loader found. To use loadInitializers without a global AMD loader you must provide explicit modules")
return Object.keys(e._eak_seen)},load:e=>globalThis.require(e,null,null,!0)}
for(let r of c.names())r.startsWith(i)&&!r.endsWith("-test")?o.push(r):r.startsWith(s)&&!r.endsWith("-test")&&a.push(r)
!function(e,t,n){for(let i of n)e.initializer(r(t,i))}(e,c,o),function(e,t,n){for(let i of n)e.instanceInitializer(r(t,i))}(e,c,a)}n.r(t),n.d(t,{default:()=>i})},2338:(e,t,n)=>{"use strict"
function r(e){return Math.min(...e)}n.r(t),n.d(t,{default:()=>i,min:()=>r})
var i=(0,n(336).helper)(r)},2518:e=>{(function(){"use strict"
var t,n=Object.defineProperty,r=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global]
for(var t=0;t<e.length;++t){var n=e[t]
if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this)
function i(e,t){if(t)e:{var i=r
e=e.split(".")
for(var s=0;s<e.length-1;s++){var o=e[s]
if(!(o in i))break e
i=i[o]}(t=t(s=i[e=e[e.length-1]]))!=s&&null!=t&&n(i,e,{configurable:!0,writable:!0,value:t})}}i("Symbol.dispose",function(e){return e||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(e){return e||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(e){return e||function(e){var t,n=[]
for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push([t,e[t]])
return n}})
var s=s||{},o=this||self
function a(e){var t=typeof e
return"object"==t&&null!=e||"function"==t}function c(e,t,n){return e.call.apply(e.bind,arguments)}function u(e,t,n){return(u=c).apply(null,arguments)}function l(e,t){var n=Array.prototype.slice.call(arguments,1)
return function(){var t=n.slice()
return t.push.apply(t,arguments),e.apply(this,t)}}function h(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Ob=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s]
return t.prototype[n].apply(e,i)}}var d="undefined"!=typeof AsyncContext&&"function"==typeof AsyncContext.Snapshot?e=>e&&AsyncContext.Snapshot.wrap(e):e=>e
function f(e){const t=e.length
if(t>0){const n=Array(t)
for(let r=0;r<t;r++)n[r]=e[r]
return n}return[]}function p(e,t){for(let r=1;r<arguments.length;r++){const t=arguments[r]
var n=typeof t
if("array"==(n="object"!=n?n:t?Array.isArray(t)?"array":n:"null")||"object"==n&&"number"==typeof t.length){n=e.length||0
const r=t.length||0
e.length=n+r
for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function m(e){o.setTimeout(()=>{throw e},0)}function g(){var e=_
let t=null
return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var y=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e
return this.h>0?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new v,e=>e.reset())
class v{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let b,w=!1,_=new class{constructor(){this.h=this.g=null}add(e,t){const n=y.get()
n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},S=()=>{const e=Promise.resolve(void 0)
b=()=>{e.then(E)}}
function E(){for(var e;e=g();){try{e.h.call(e.g)}catch(e){m(e)}var t=y
t.j(e),t.h<100&&(t.h++,e.next=t.g,t.g=e)}w=!1}function I(){this.u=this.u,this.C=this.C}function T(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},T.prototype.h=function(){this.defaultPrevented=!0}
var A=function(){if(!o.addEventListener||!Object.defineProperty)return!1
var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}})
try{const e=()=>{}
o.addEventListener("test",e,t),o.removeEventListener("test",e,t)}catch(e){}return e}()
function C(e){return/^[\s\xa0]*$/.test(e)}function k(e,t){T.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e&&this.init(e,t)}h(k,T),k.prototype.init=function(e,t){const n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null
this.target=e.target||e.srcElement,this.g=t,(t=e.relatedTarget)||("mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement)),this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=e.pointerType,this.state=e.state,this.i=e,e.defaultPrevented&&k.Z.h.call(this)},k.prototype.h=function(){k.Z.h.call(this)
const e=this.i
e.preventDefault?e.preventDefault():e.returnValue=!1}
var x="closure_listenable_"+(1e6*Math.random()|0),D=0
function R(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++D,this.da=this.fa=!1}function N(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function O(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function M(e){const t={}
for(const n in e)t[n]=e[n]
return t}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
function F(e,t){let n,r
for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n]
for(let t=0;t<P.length;t++)n=P[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function L(e){this.src=e,this.g={},this.h=0}function j(e,t){const n=t.type
if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=s>=0)&&Array.prototype.splice.call(i,s,1),r&&(N(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function q(e,t,n,r){for(let i=0;i<e.length;++i){const s=e[i]
if(!s.da&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}L.prototype.add=function(e,t,n,r,i){const s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++)
const o=q(e,t,r,i)
return o>-1?(t=e[o],n||(t.fa=!1)):((t=new R(t,this.src,s,!!r,i)).fa=n,e.push(t)),t}
var V="closure_lm_"+(1e6*Math.random()|0),B={}
function U(e,t,n,r,i){if(r&&r.once)return z(e,t,n,r,i)
if(Array.isArray(t)){for(let s=0;s<t.length;s++)U(e,t[s],n,r,i)
return null}return n=Y(n),e&&e[x]?e.J(t,n,a(r)?!!r.capture:!!r,i):$(e,t,n,!1,r,i)}function $(e,t,n,r,i,s){if(!t)throw Error("Invalid event type")
const o=a(i)?!!i.capture:!!i
let c=Q(e)
if(c||(e[V]=c=new L(e)),(n=c.add(t,n,r,o,s)).proxy)return n
if(r=function(){const e=H
return function t(n){return e.call(t.src,t.listener,n)}}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)A||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i)
else if(e.attachEvent)e.attachEvent(W(t.toString()),r)
else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.")
e.addListener(r)}return n}function z(e,t,n,r,i){if(Array.isArray(t)){for(let s=0;s<t.length;s++)z(e,t[s],n,r,i)
return null}return n=Y(n),e&&e[x]?e.K(t,n,a(r)?!!r.capture:!!r,i):$(e,t,n,!0,r,i)}function G(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)G(e,t[s],n,r,i)
else r=a(r)?!!r.capture:!!r,n=Y(n),e&&e[x]?(e=e.i,(s=String(t).toString())in e.g&&(n=q(t=e.g[s],n,r,i))>-1&&(N(t[n]),Array.prototype.splice.call(t,n,1),0==t.length&&(delete e.g[s],e.h--))):e&&(e=Q(e))&&(t=e.g[t.toString()],e=-1,t&&(e=q(t,n,r,i)),(n=e>-1?t[e]:null)&&K(n))}function K(e){if("number"!=typeof e&&e&&!e.da){var t=e.src
if(t&&t[x])j(t.i,e)
else{var n=e.type,r=e.proxy
t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(W(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Q(t))?(j(n,e),0==n.h&&(n.src=null,t[V]=null)):N(e)}}}function W(e){return e in B?B[e]:B[e]="on"+e}function H(e,t){if(e.da)e=!0
else{t=new k(t,this)
const n=e.listener,r=e.ha||e.src
e.fa&&K(e),e=n.call(r,t)}return e}function Q(e){return(e=e[V])instanceof L?e:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0)
function Y(e){return"function"==typeof e?e:(e[J]||(e[J]=function(t){return e.handleEvent(t)}),e[J])}function X(){I.call(this),this.i=new L(this),this.M=this,this.G=null}function Z(e,t){var n,r=e.G
if(r)for(n=[];r;r=r.G)n.push(r)
if(e=e.M,r=t.type||t,"string"==typeof t)t=new T(t,e)
else if(t instanceof T)t.target=t.target||e
else{var i=t
F(t=new T(r,e),i)}let s,o
if(i=!0,n)for(o=n.length-1;o>=0;o--)s=t.g=n[o],i=ee(s,r,!0,t)&&i
if(s=t.g=e,i=ee(s,r,!0,t)&&i,i=ee(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)s=t.g=n[o],i=ee(s,r,!1,t)&&i}function ee(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0
t=t.concat()
let i=!0
for(let s=0;s<t.length;++s){const o=t[s]
if(o&&!o.da&&o.capture==n){const t=o.listener,n=o.ha||o.src
o.fa&&j(e.i,o),i=!1!==t.call(n,r)&&i}}return i&&!r.defaultPrevented}function te(e){e.g=function(e,t){if("function"!=typeof e){if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument")
e=u(e.handleEvent,e)}return Number(t)>2147483647?-1:o.setTimeout(e,t||0)}(()=>{e.g=null,e.i&&(e.i=!1,te(e))},e.l)
const t=e.h
e.h=null,e.m.apply(null,t)}h(X,I),X.prototype[x]=!0,X.prototype.removeEventListener=function(e,t,n,r){G(this,e,t,n,r)},X.prototype.N=function(){if(X.Z.N.call(this),this.i){var e=this.i
let t=0
for(const n in e.g){const r=e.g[n]
for(let e=0;e<r.length;e++)++t,N(r[e])
delete e.g[n],e.h--}}this.G=null},X.prototype.J=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},X.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)}
class ne extends I{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:te(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function re(e){I.call(this),this.h=e,this.g={}}h(re,I)
var ie=[]
function se(e){O(e.g,function(e,t){this.g.hasOwnProperty(t)&&K(e)},e),e.g={}}re.prototype.N=function(){re.Z.N.call(this),se(this)},re.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")}
var oe=o.JSON.stringify,ae=o.JSON.parse,ce=class{stringify(e){return o.JSON.stringify(e,void 0)}parse(e){return o.JSON.parse(e,void 0)}}
function ue(){}function le(){}var he={OPEN:"a",hb:"b",ERROR:"c",tb:"d"}
function de(){T.call(this,"d")}function fe(){T.call(this,"c")}h(de,T),h(fe,T)
var pe={},me=null
function ge(){return me=me||new X}function ye(e){T.call(this,pe.Ia,e)}function ve(e){const t=ge()
Z(t,new ye(t,e))}function be(e,t){T.call(this,pe.STAT_EVENT,e),this.stat=t}function we(e){const t=ge()
Z(t,new be(t,e))}function _e(e,t){T.call(this,pe.Ja,e),this.size=t}function Se(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function")
return o.setTimeout(function(){e()},t)}function Ee(){this.g=!0}function Ie(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t
if(!t)return null
try{const s=JSON.parse(t)
if(s)for(e=0;e<s.length;e++)if(Array.isArray(s[e])){var n=s[e]
if(!(n.length<2)){var r=n[1]
if(Array.isArray(r)&&!(r.length<1)){var i=r[0]
if("noop"!=i&&"stop"!=i&&"close"!=i)for(let e=1;e<r.length;e++)r[e]=""}}}return oe(s)}catch(e){return t}}(e,n)+(r?" "+r:"")})}pe.Ia="serverreachability",h(ye,T),pe.STAT_EVENT="statevent",h(be,T),pe.Ja="timingevent",h(_e,T),Ee.prototype.ua=function(){this.g=!1},Ee.prototype.info=function(){}
var Te,Ae={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ce={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"}
function ke(){}function xe(e){return encodeURIComponent(String(e))}function De(e){var t=1
e=e.split(":")
const n=[]
for(;t>0&&e.length;)n.push(e.shift()),t--
return e.length&&n.push(e.join(":")),n}function Re(e,t,n,r){this.j=e,this.i=t,this.l=n,this.S=r||1,this.V=new re(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ne}function Ne(){this.i=null,this.g="",this.h=!1}h(ke,ue),ke.prototype.g=function(){return new XMLHttpRequest},Te=new ke
var Oe={},Me={}
function Pe(e,t,n){e.M=1,e.A=ot(tt(t)),e.u=n,e.R=!0,Fe(e,null)}function Fe(e,t){e.F=Date.now(),qe(e),e.B=tt(e.A)
var n=e.B,r=e.S
Array.isArray(r)||(r=[String(r)]),wt(n.i,"t",r),e.C=0,n=e.j.L,e.h=new Ne,e.g=an(e.j,n?t:null,!e.u),e.P>0&&(e.O=new ne(u(e.Y,e,e.g),e.P)),t=e.V,n=e.g,r=e.ba
var i="readystatechange"
Array.isArray(i)||(i&&(ie[0]=i.toString()),i=ie)
for(let s=0;s<i.length;s++){const e=U(n,i[s],r||t.handleEvent,!1,t.h||t)
if(!e)break
t.g[e.key]=e}t=e.J?M(e.J):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.B,e.v,e.u,t)):(e.v="GET",e.g.ea(e.B,e.v,null,t)),ve(1),function(e,t,n,r,i,s){e.info(function(){if(e.g)if(s){var o="",a=s.split("&")
for(let e=0;e<a.length;e++){var c=a[e].split("=")
if(c.length>1){const e=c[0]
c=c[1]
const t=e.split("_")
o=t.length>=2&&"type"==t[1]?o+(e+"=")+c+"&":o+(e+"=redacted&")}}}else o=null
else o=s
return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o})}(e.i,e.v,e.B,e.l,e.S,e.u)}function Le(e){return!!e.g&&"GET"==e.v&&2!=e.M&&e.j.Aa}function je(e,t){var n=e.C,r=t.indexOf("\n",n)
return-1==r?Me:(n=Number(t.substring(n,r)),isNaN(n)?Oe:(r+=1)+n>t.length?Me:(t=t.slice(r,r+n),e.C=r+n,t))}function qe(e){e.T=Date.now()+e.H,Ve(e,e.H)}function Ve(e,t){if(null!=e.D)throw Error("WatchDog timer not null")
e.D=Se(u(e.aa,e),t)}function Be(e){e.D&&(o.clearTimeout(e.D),e.D=null)}function Ue(e){0==e.j.I||e.K||tn(e.j,e)}function $e(e){Be(e)
var t=e.O
t&&"function"==typeof t.dispose&&t.dispose(),e.O=null,se(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.dispose())}function ze(e,t){try{var n=e.j
if(0!=n.I&&(n.g==e||Qe(n.h,e)))if(!e.L&&Qe(n.h,e)&&3==n.I){try{var r=n.Ba.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r
if(0==i[0]){e:if(!n.v){if(n.g){if(!(n.g.F+3e3<e.F))break e
en(n),zt(n)}Yt(n),we(18)}}else n.xa=i[1],0<n.xa-n.K&&i[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=Se(u(n.Va,n),6e3))
He(n.h)<=1&&n.ta&&(n.ta=void 0)}else rn(n,11)}else if((e.L||n.g==e)&&en(n),!C(t))for(i=n.Ba.g.parse(t),t=0;t<i.length;t++){let u=i[t]
const l=u[0]
if(!(l<=n.K))if(n.K=l,u=u[1],2==n.I)if("c"==u[0]){n.M=u[1],n.ba=u[2]
const t=u[3]
null!=t&&(n.ka=t,n.j.info("VER="+n.ka))
const i=u[4]
null!=i&&(n.za=i,n.j.info("SVER="+n.za))
const l=u[5]
null!=l&&"number"==typeof l&&l>0&&(r=1.5*l,n.O=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n
const h=e.g
if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null
if(e){var s=r.h
s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Je(s,s.h),s.h=null))}if(r.G){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null
e&&(r.wa=e,st(r.J,r.G,e))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-e.F,n.j.info("Handshake RTT: "+n.T+"ms"))
var o=e
if((r=n).na=on(r,r.L?r.ba:null,r.W),o.L){Ye(r.h,o)
var a=o,c=r.O
c&&(a.H=c),a.D&&(Be(a),qe(a)),r.g=o}else Jt(r)
n.i.length>0&&Kt(n)}else"stop"!=u[0]&&"close"!=u[0]||rn(n,7)
else 3==n.I&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?rn(n,7):$t(n):"noop"!=u[0]&&n.l&&n.l.qa(u),n.A=0)}ve(4)}catch(e){}}Re.prototype.ba=function(e){e=e.target
const t=this.O
t&&3==qt(e)?t.j():this.Y(e)},Re.prototype.Y=function(e){try{if(e==this.g)e:{const c=qt(this.g),u=this.g.ya(),l=this.g.ca()
if(!(c<3)&&(3!=c||this.g&&(this.h.h||this.g.la()||Vt(this.g)))){this.K||4!=c||7==u||ve(8==u||l<=0?3:2),Be(this)
var t=this.g.ca()
this.X=t
var n=function(e){if(!Le(e))return e.g.la()
const t=Vt(e.g)
if(""===t)return""
let n=""
const r=t.length,i=4==qt(e.g)
if(!e.h.i){if("undefined"==typeof TextDecoder)return $e(e),Ue(e),""
e.h.i=new o.TextDecoder}for(let s=0;s<r;s++)e.h.h=!0,n+=e.h.i.decode(t[s],{stream:!(i&&s==r-1)})
return t.length=0,e.h.g+=n,e.C=0,e.h.g}(this)
if(this.o=200==t,function(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o})}(this.i,this.v,this.B,this.l,this.S,c,t),this.o){if(this.U&&!this.L){t:{if(this.g){var r,i=this.g
if((r=i.g?i.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(r)){var s=r
break t}}s=null}if(!(e=s)){this.o=!1,this.m=3,we(12),$e(this),Ue(this)
break e}Ie(this.i,this.l,e,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ze(this,e)}if(this.R){let t
for(e=!0;!this.K&&this.C<n.length;){if(t=je(this,n),t==Me){4==c&&(this.m=4,we(14),e=!1),Ie(this.i,this.l,null,"[Incomplete Response]")
break}if(t==Oe){this.m=4,we(15),Ie(this.i,this.l,n,"[Invalid Chunk]"),e=!1
break}Ie(this.i,this.l,t,null),ze(this,t)}if(Le(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=c||0!=n.length||this.h.h||(this.m=1,we(16),e=!1),this.o=this.o&&e,e){if(n.length>0&&!this.W){this.W=!0
var a=this.j
a.g==this&&a.aa&&!a.P&&(a.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xt(a),a.P=!0,we(11))}}else Ie(this.i,this.l,n,"[Invalid Chunked Response]"),$e(this),Ue(this)}else Ie(this.i,this.l,n,null),ze(this,n)
4==c&&$e(this),this.o&&!this.K&&(4==c?tn(this.j,this):(this.o=!1,qe(this)))}else(function(e){const t={}
e=(e.g&&qt(e)>=2&&e.g.getAllResponseHeaders()||"").split("\r\n")
for(let r=0;r<e.length;r++){if(C(e[r]))continue
var n=De(e[r])
const i=n[0]
if("string"!=typeof(n=n[1]))continue
n=n.trim()
const s=t[i]||[]
t[i]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==t&&n.indexOf("Unknown SID")>0?(this.m=3,we(12)):(this.m=0,we(13)),$e(this),Ue(this)}}}catch(e){}},Re.prototype.cancel=function(){this.K=!0,$e(this)},Re.prototype.aa=function(){this.D=null
const e=Date.now()
e-this.T>=0?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.B),2!=this.M&&(ve(3),we(17)),$e(this),this.m=2,Ue(this)):Ve(this,this.T-e)}
var Ge=class{constructor(e,t){this.g=e,this.map=t}}
function Ke(e){this.l=e||10,e=o.PerformanceNavigationTiming?(e=o.performance.getEntriesByType("navigation")).length>0&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function We(e){return!!e.h||!!e.g&&e.g.size>=e.j}function He(e){return e.h?1:e.g?e.g.size:0}function Qe(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Je(e,t){e.g?e.g.add(t):e.h=t}function Ye(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Xe(e){if(null!=e.h)return e.i.concat(e.h.G)
if(null!=e.g&&0!==e.g.size){let t=e.i
for(const n of e.g.values())t=t.concat(n.G)
return t}return f(e.i)}Ke.prototype.cancel=function(){if(this.i=Xe(this),this.h)this.h.cancel(),this.h=null
else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel()
this.g.clear()}}
var Ze=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$")
function et(e){let t
this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,e instanceof et?(this.l=e.l,nt(this,e.j),this.o=e.o,this.g=e.g,rt(this,e.u),this.h=e.h,it(this,_t(e.i)),this.m=e.m):e&&(t=String(e).match(Ze))?(this.l=!1,nt(this,t[1]||"",!0),this.o=at(t[2]||""),this.g=at(t[3]||"",!0),rt(this,t[4]),this.h=at(t[5]||"",!0),it(this,t[6]||"",!0),this.m=at(t[7]||"")):(this.l=!1,this.i=new mt(null,this.l))}function tt(e){return new et(e)}function nt(e,t,n){e.j=n?at(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function rt(e,t){if(t){if(t=Number(t),isNaN(t)||t<0)throw Error("Bad port number "+t)
e.u=t}else e.u=null}function it(e,t,n){t instanceof mt?(e.i=t,function(e,t){t&&!e.j&&(gt(e),e.i=null,e.g.forEach(function(e,t){const n=t.toLowerCase()
t!=n&&(yt(this,t),wt(this,n,e))},e)),e.j=t}(e.i,e.l)):(n||(t=ct(t,ft)),e.i=new mt(t,e.l))}function st(e,t,n){e.i.set(t,n)}function ot(e){return st(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function at(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ct(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ut),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ut(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}et.prototype.toString=function(){const e=[]
var t=this.j
t&&e.push(ct(t,lt,!0),":")
var n=this.g
return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(ct(t,lt,!0),"@"),e.push(xe(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.u)&&e.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(ct(n,"/"==n.charAt(0)?dt:ht,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",ct(n,pt)),e.join("")},et.prototype.resolve=function(e){const t=tt(this)
let n=!!e.j
n?nt(t,e.j):n=!!e.o,n?t.o=e.o:n=!!e.g,n?t.g=e.g:n=null!=e.u
var r=e.h
if(n)rt(t,e.u)
else if(n=!!e.h){if("/"!=r.charAt(0))if(this.g&&!this.h)r="/"+r
else{var i=t.h.lastIndexOf("/");-1!=i&&(r=t.h.slice(0,i+1)+r)}if(".."==(i=r)||"."==i)r=""
else if(-1!=i.indexOf("./")||-1!=i.indexOf("/.")){r=0==i.lastIndexOf("/",0),i=i.split("/")
const e=[]
for(let t=0;t<i.length;){const n=i[t++]
"."==n?r&&t==i.length&&e.push(""):".."==n?((e.length>1||1==e.length&&""!=e[0])&&e.pop(),r&&t==i.length&&e.push("")):(e.push(n),r=!0)}r=e.join("/")}else r=i}return n?t.h=r:n=""!==e.i.toString(),n?it(t,_t(e.i)):n=!!e.m,n&&(t.m=e.m),t}
var lt=/[#\/\?@]/g,ht=/[#\?:]/g,dt=/[#\?]/g,ft=/[#\?@]/g,pt=/#/g
function mt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function gt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&")
for(let n=0;n<e.length;n++){const r=e[n].indexOf("=")
let i,s=null
r>=0?(i=e[n].substring(0,r),s=e[n].substring(r+1)):i=e[n],t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function yt(e,t){gt(e),t=St(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function vt(e,t){return gt(e),t=St(e,t),e.g.has(t)}function bt(e,t){gt(e)
let n=[]
if("string"==typeof t)vt(e,t)&&(n=n.concat(e.g.get(St(e,t))))
else for(e=Array.from(e.g.values()),t=0;t<e.length;t++)n=n.concat(e[t])
return n}function wt(e,t,n){yt(e,t),n.length>0&&(e.i=null,e.g.set(St(e,t),f(n)),e.h+=n.length)}function _t(e){const t=new mt
return t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),t}function St(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Et(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(e){}}function It(){this.g=new ce}function Tt(e){this.i=e.Sb||null,this.h=e.ab||!1}function At(e,t){X.call(this),this.H=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function Ct(e){e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e))}function kt(e){e.readyState=4,e.l=null,e.j=null,e.B=null,xt(e)}function xt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Dt(e){let t=""
return O(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function Rt(e,t,n){e:{for(r in n){var r=!1
break e}r=!0}r||(n=Dt(n),"string"==typeof e?(xe(t),null!=n&&xe(n)):st(e,t,n))}function Nt(e){X.call(this),this.headers=new Map,this.L=e||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(t=mt.prototype).add=function(e,t){gt(this),this.i=null,e=St(this,e)
let n=this.g.get(e)
return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},t.forEach=function(e,t){gt(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},t.set=function(e,t){return gt(this),this.i=null,vt(this,e=St(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},t.get=function(e,t){return e&&(e=bt(this,e)).length>0?String(e[0]):t},t.toString=function(){if(this.i)return this.i
if(!this.g)return""
const e=[],t=Array.from(this.g.keys())
for(let r=0;r<t.length;r++){var n=t[r]
const i=xe(n)
n=bt(this,n)
for(let t=0;t<n.length;t++){let r=i
""!==n[t]&&(r+="="+xe(n[t])),e.push(r)}}return this.i=e.join("&")},h(Tt,ue),Tt.prototype.g=function(){return new At(this.i,this.h)},h(At,X),(t=At.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection")
this.F=e,this.D=t,this.readyState=1,xt(this)},t.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ")
if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.")
this.g=!0
const t={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal}
e&&(t.body=e),(this.H||o).fetch(new Request(this.D,t)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,kt(this)),this.readyState=0},t.Pa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,xt(this)),this.g&&(this.readyState=3,xt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this))
else if(void 0!==o.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.')
this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder
Ct(this)}else e.text().then(this.Oa.bind(this),this.ga.bind(this))},t.Ma=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value)
else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.B.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?kt(this):xt(this),3==this.readyState&&Ct(this)}},t.Oa=function(e){this.g&&(this.response=this.responseText=e,kt(this))},t.Na=function(e){this.g&&(this.response=e,kt(this))},t.ga=function(){this.g&&kt(this)},t.setRequestHeader=function(e,t){this.A.append(e,t)},t.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return""
const e=[],t=this.h.entries()
for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next()
return e.join("\r\n")},Object.defineProperty(At.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),h(Nt,X)
var Ot=/^https?$/i,Mt=["POST","PUT"]
function Pt(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.o=5,Ft(e),jt(e)}function Ft(e){e.A||(e.A=!0,Z(e,"complete"),Z(e,"error"))}function Lt(e){if(e.h&&void 0!==s)if(e.v&&4==qt(e))setTimeout(e.Ca.bind(e),0)
else if(Z(e,"readystatechange"),4==qt(e)){e.h=!1
try{const s=e.ca()
e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0
break e
default:t=!1}var n
if(!(n=t)){var r
if(r=0===s){let t=String(e.D).match(Ze)[1]||null
!t&&o.self&&o.self.location&&(t=o.self.location.protocol.slice(0,-1)),r=!Ot.test(t?t.toLowerCase():"")}n=r}if(n)Z(e,"complete"),Z(e,"success")
else{e.o=6
try{var i=qt(e)>2?e.g.statusText:""}catch(e){i=""}e.l=i+" ["+e.ca()+"]",Ft(e)}}finally{jt(e)}}}function jt(e,t){if(e.g){e.m&&(clearTimeout(e.m),e.m=null)
const n=e.g
e.g=null,t||Z(e,"ready")
try{n.onreadystatechange=null}catch(e){}}}function qt(e){return e.g?e.g.readyState:0}function Vt(e){try{if(!e.g)return null
if("response"in e.g)return e.g.response
switch(e.F){case"":case"text":return e.g.responseText
case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Bt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ut(e){this.za=0,this.i=[],this.j=new Ee,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Bt("failFast",!1,e),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Bt("baseRetryDelayMs",5e3,e),this.Za=Bt("retryDelaySeedMs",1e4,e),this.Ta=Bt("forwardChannelMaxRetries",2,e),this.va=Bt("forwardChannelRequestTimeoutMs",2e4,e),this.ma=e&&e.xmlHttpFactory||void 0,this.Ua=e&&e.Rb||void 0,this.Aa=e&&e.useFetchStreams||!1,this.O=void 0,this.L=e&&e.supportsCrossDomainXhr||!1,this.M="",this.h=new Ke(e&&e.concurrentRequestLimit),this.Ba=new It,this.S=e&&e.fastHandshake||!1,this.R=e&&e.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=e&&e.Pb||!1,e&&e.ua&&this.j.ua(),e&&e.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&e&&e.detectBufferingProxy||!1,this.ia=void 0,e&&e.longPollingTimeout&&e.longPollingTimeout>0&&(this.ia=e.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function $t(e){if(Gt(e),3==e.I){var t=e.V++,n=tt(e.J)
if(st(n,"SID",e.M),st(n,"RID",t),st(n,"TYPE","terminate"),Ht(e,n),(t=new Re(e,e.j,t)).M=2,t.A=ot(tt(n)),n=!1,o.navigator&&o.navigator.sendBeacon)try{n=o.navigator.sendBeacon(t.A.toString(),"")}catch(e){}!n&&o.Image&&((new Image).src=t.A,n=!0),n||(t.g=an(t.j,null),t.g.ea(t.A)),t.F=Date.now(),qe(t)}sn(e)}function zt(e){e.g&&(Xt(e),e.g.cancel(),e.g=null)}function Gt(e){zt(e),e.v&&(o.clearTimeout(e.v),e.v=null),en(e),e.h.cancel(),e.m&&("number"==typeof e.m&&o.clearTimeout(e.m),e.m=null)}function Kt(e){if(!We(e.h)&&!e.m){e.m=!0
var t=e.Ea
b||S(),w||(b(),w=!0),_.add(t,e),e.D=0}}function Wt(e,t){var n
n=t?t.l:e.V++
const r=tt(e.J)
st(r,"SID",e.M),st(r,"RID",n),st(r,"AID",e.K),Ht(e,r),e.u&&e.o&&Rt(r,e.u,e.o),n=new Re(e,e.j,n,e.D+1),null===e.u&&(n.J=e.o),t&&(e.i=t.G.concat(e.i)),t=Qt(e,n,1e3),n.H=Math.round(.5*e.va)+Math.round(.5*e.va*Math.random()),Je(e.h,n),Pe(n,r,t)}function Ht(e,t){e.H&&O(e.H,function(e,n){st(t,n,e)}),e.l&&O({},function(e,n){st(t,n,e)})}function Qt(e,t,n){n=Math.min(e.i.length,n)
const r=e.l?u(e.l.Ka,e.l,e):null
e:{var i=e.i
let c=-1
for(;;){const u=["count="+n];-1==c?n>0?(c=i[0].g,u.push("ofs="+c)):c=0:u.push("ofs="+c)
let l=!0
for(let h=0;h<n;h++){var s=i[h].g
const n=i[h].map
if((s-=c)<0)c=Math.max(0,i[h].g-100),l=!1
else try{s="req"+s+"_"||0
try{var o=n instanceof Map?n:Object.entries(n)
for(const[e,t]of o){let n=t
a(t)&&(n=oe(t)),u.push(s+e+"="+encodeURIComponent(n))}}catch(t){throw u.push(s+"type="+encodeURIComponent("_badmap")),t}}catch(e){r&&r(n)}}if(l){o=u.join("&")
break e}}o=void 0}return e=e.i.splice(0,n),t.G=e,o}function Jt(e){if(!e.g&&!e.v){e.Y=1
var t=e.Da
b||S(),w||(b(),w=!0),_.add(t,e),e.A=0}}function Yt(e){return!(e.g||e.v||e.A>=3||(e.Y++,e.v=Se(u(e.Da,e),nn(e,e.A)),e.A++,0))}function Xt(e){null!=e.B&&(o.clearTimeout(e.B),e.B=null)}function Zt(e){e.g=new Re(e,e.j,"rpc",e.Y),null===e.u&&(e.g.J=e.o),e.g.P=0
var t=tt(e.na)
st(t,"RID","rpc"),st(t,"SID",e.M),st(t,"AID",e.K),st(t,"CI",e.F?"0":"1"),!e.F&&e.ia&&st(t,"TO",e.ia),st(t,"TYPE","xmlhttp"),Ht(e,t),e.u&&e.o&&Rt(t,e.u,e.o),e.O&&(e.g.H=e.O)
var n=e.g
e=e.ba,n.M=1,n.A=ot(tt(t)),n.u=null,n.R=!0,Fe(n,e)}function en(e){null!=e.C&&(o.clearTimeout(e.C),e.C=null)}function tn(e,t){var n=null
if(e.g==t){en(e),Xt(e),e.g=null
var r=2}else{if(!Qe(e.h,t))return
n=t.G,Ye(e.h,t),r=1}if(0!=e.I)if(t.o)if(1==r){n=t.u?t.u.length:0,t=Date.now()-t.F
var i=e.D
Z(r=ge(),new _e(r,n,t,i)),Kt(e)}else Jt(e)
else if(3==(i=t.m)||0==i&&t.X>0||!(1==r&&function(e,t){return!(He(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.G.concat(e.i),0):1==e.I||2==e.I||e.D>=(e.Sa?0:e.Ta)||(e.m=Se(u(e.Ea,e,t),nn(e,e.D)),e.D++,0)))}(e,t)||2==r&&Yt(e)))switch(n&&n.length>0&&(t=e.h,t.i=t.i.concat(n)),i){case 1:rn(e,5)
break
case 4:rn(e,10)
break
case 3:rn(e,6)
break
default:rn(e,2)}}function nn(e,t){let n=e.Qa+Math.floor(Math.random()*e.Za)
return e.isActive()||(n*=2),n*t}function rn(e,t){if(e.j.info("Error code "+t),2==t){var n=u(e.bb,e),r=e.Ua
const t=!r
r=new et(r||"//www.google.com/images/cleardot.gif"),o.location&&"http"==o.location.protocol||nt(r,"https"),ot(r),t?function(e,t){const n=new Ee
if(o.Image){const r=new Image
r.onload=l(Et,n,"TestLoadImage: loaded",!0,t,r),r.onerror=l(Et,n,"TestLoadImage: error",!1,t,r),r.onabort=l(Et,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=l(Et,n,"TestLoadImage: timeout",!1,t,r),o.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new Ee
const n=new AbortController,r=setTimeout(()=>{n.abort(),Et(0,0,!1,t)},1e4)
fetch(e,{signal:n.signal}).then(e=>{clearTimeout(r),e.ok?Et(0,0,!0,t):Et(0,0,!1,t)}).catch(()=>{clearTimeout(r),Et(0,0,!1,t)})}(r.toString(),n)}else we(2)
e.I=0,e.l&&e.l.pa(t),sn(e),Gt(e)}function sn(e){if(e.I=0,e.ja=[],e.l){const t=Xe(e.h)
0==t.length&&0==e.i.length||(p(e.ja,t),p(e.ja,e.i),e.h.i.length=0,f(e.i),e.i.length=0),e.l.oa()}}function on(e,t,n){var r=n instanceof et?tt(n):new et(n)
if(""!=r.g)t&&(r.g=t+"."+r.g),rt(r,r.u)
else{var i=o.location
r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port
const e=new et(null)
r&&nt(e,r),t&&(e.g=t),i&&rt(e,i),n&&(e.h=n),r=e}return n=e.G,t=e.wa,n&&t&&st(r,n,t),st(r,"VER",e.ka),Ht(e,r),r}function an(e,t,n){if(t&&!e.L)throw Error("Can't create secondary domain capable XhrIo object.")
return(t=e.Aa&&!e.ma?new Nt(new Tt({ab:n})):new Nt(e.ma)).Fa(e.L),t}function cn(){}function un(){}function ln(e,t){X.call(this),this.g=new Ut(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.sa&&(e?e["X-WebChannel-Client-Profile"]=t.sa:e={"X-WebChannel-Client-Profile":t.sa}),this.g.U=e,(e=t&&t.Qb)&&!C(e)&&(this.g.u=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!C(t)&&(this.g.G=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new fn(this)}function hn(e){de.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__)
var t=e.__sm__
if(t){e:{for(const n in t){e=n
break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function dn(){fe.call(this),this.status=1}function fn(e){this.g=e}(t=Nt.prototype).Fa=function(e){this.H=e},t.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e)
t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Te.g(),this.g.onreadystatechange=d(u(this.Ca,this))
try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(e){return void Pt(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i])
else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r))
for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=o.FormData&&e instanceof o.FormData,!(Array.prototype.indexOf.call(Mt,t,void 0)>=0)||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8")
for(const[s,o]of n)this.g.setRequestHeader(s,o)
this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H)
try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(e),this.v=!1}catch(e){Pt(this,e)}},t.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=e||7,Z(this,"complete"),Z(this,"abort"),jt(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jt(this,!0)),Nt.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Lt(this):this.Xa())},t.Xa=function(){Lt(this)},t.isActive=function(){return!!this.g},t.ca=function(){try{return qt(this)>2?this.g.status:-1}catch(e){return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},t.La=function(e){if(this.g){var t=this.g.responseText
return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ae(t)}},t.ya=function(){return this.o},t.Ha=function(){return"string"==typeof this.l?this.l:String(this.l)},(t=Ut.prototype).ka=8,t.I=1,t.connect=function(e,t,n,r){we(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.J=on(this,null,this.W),Kt(this)},t.Ea=function(e){if(this.m)if(this.m=null,1==this.I){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++
const i=new Re(this,this.j,e)
let s=this.o
if(this.U&&(s?(s=M(s),F(s,this.U)):s=this.U),null!==this.u||this.R||(i.J=s,s=null),this.S)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n]
if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break
if((t+=r)>4096){t=n
break e}if(4096===t||n===this.i.length-1){t=n+1
break e}}t=1e3}else t=1e3
t=Qt(this,i,t),st(n=tt(this.J),"RID",e),st(n,"CVER",22),this.G&&st(n,"X-HTTP-Session-Id",this.G),Ht(this,n),s&&(this.R?t="headers="+xe(Dt(s))+"&"+t:this.u&&Rt(n,this.u,s)),Je(this.h,i),this.Ra&&st(n,"TYPE","init"),this.S?(st(n,"$req",t),st(n,"SID","null"),i.U=!0,Pe(i,n,null)):Pe(i,n,t),this.I=2}}else 3==this.I&&(e?Wt(this,e):0==this.i.length||We(this.h)||Wt(this))},t.Da=function(){if(this.v=null,Zt(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var e=4*this.T
this.j.info("BP detection timer enabled: "+e),this.B=Se(u(this.Wa,this),e)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,we(10),zt(this),Zt(this))},t.Va=function(){null!=this.C&&(this.C=null,zt(this),Yt(this),we(19))},t.bb=function(e){e?(this.j.info("Successfully pinged google.com"),we(2)):(this.j.info("Failed to ping google.com"),we(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},(t=cn.prototype).ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){},un.prototype.g=function(e,t){return new ln(e,t)},h(ln,X),ln.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ln.prototype.close=function(){$t(this.g)},ln.prototype.o=function(e){var t=this.g
if("string"==typeof e){var n={}
n.__data__=e,e=n}else this.v&&((n={}).__data__=oe(e),e=n)
t.i.push(new Ge(t.Ya++,e)),3==t.I&&Kt(t)},ln.prototype.N=function(){this.g.l=null,delete this.j,$t(this.g),delete this.g,ln.Z.N.call(this)},h(hn,de),h(dn,fe),h(fn,cn),fn.prototype.ra=function(){Z(this.g,"a")},fn.prototype.qa=function(e){Z(this.g,new hn(e))},fn.prototype.pa=function(e){Z(this.g,new dn(e))},fn.prototype.oa=function(){Z(this.g,"b")},un.prototype.createWebChannel=un.prototype.g,ln.prototype.send=ln.prototype.o,ln.prototype.open=ln.prototype.m,ln.prototype.close=ln.prototype.close,e.exports.createWebChannelTransport=function(){return new un},e.exports.getStatEventTarget=function(){return ge()},e.exports.Event=pe,e.exports.Stat={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ae.NO_ERROR=0,Ae.TIMEOUT=8,Ae.HTTP_ERROR=6,e.exports.ErrorCode=Ae,Ce.COMPLETE="complete",e.exports.EventType=Ce,le.EventType=he,he.OPEN="a",he.CLOSE="b",he.ERROR="c",he.MESSAGE="d",X.prototype.listen=X.prototype.J,e.exports.WebChannel=le,e.exports.FetchXmlHttpFactory=Tt,Nt.prototype.listenOnce=Nt.prototype.K,Nt.prototype.getLastError=Nt.prototype.Ha,Nt.prototype.getLastErrorCode=Nt.prototype.ya,Nt.prototype.getStatus=Nt.prototype.ca,Nt.prototype.getResponseJson=Nt.prototype.La,Nt.prototype.getResponseText=Nt.prototype.la,Nt.prototype.send=Nt.prototype.ea,Nt.prototype.setWithCredentials=Nt.prototype.Fa,e.exports.XhrIo=Nt}).apply("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},2813:(e,t,n)=>{"use strict"
function r(e){return e.reduce((e,t)=>Number(e)+Number(t))}n.r(t),n.d(t,{add:()=>r,default:()=>i})
var i=(0,n(336).helper)(r)},3052:(e,t,n)=>{"use strict"
function r([e]){return Math.trunc(e)}n.r(t),n.d(t,{default:()=>i,trunc:()=>r})
var i=(0,n(336).helper)(r)},3193:(e,t,n)=>{"use strict"
function r(e){return e?.__esModule?e:{default:e,...e}}n.d(t,{A:()=>r})},3227:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(3797),i=n(129),s=n(1918),o=n(1202),a=n(9234),c=n(2518)
const u="@firebase/firestore",l="4.9.2"
class h{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}h.UNAUTHENTICATED=new h(null),h.GOOGLE_CREDENTIALS=new h("google-credentials-uid"),h.FIRST_PARTY=new h("first-party-uid"),h.MOCK_USER=new h("mock-user")
let d="12.3.0"
const f=new s.Logger("@firebase/firestore")
function p(){return f.logLevel}function m(e,...t){if(f.logLevel<=s.LogLevel.DEBUG){const n=t.map(v)
f.debug(`Firestore (${d}): ${e}`,...n)}}function g(e,...t){if(f.logLevel<=s.LogLevel.ERROR){const n=t.map(v)
f.error(`Firestore (${d}): ${e}`,...n)}}function y(e,...t){if(f.logLevel<=s.LogLevel.WARN){const n=t.map(v)
f.warn(`Firestore (${d}): ${e}`,...n)}}function v(e){if("string"==typeof e)return e
try{return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}function b(e,t,n){let r="Unexpected state"
"string"==typeof t?r=t:n=t,w(e,r,n)}function w(e,t,n){let r=`FIRESTORE (${d}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`
if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(e){r+=" CONTEXT: "+n}throw g(r),new Error(r)}function _(e,t,n,r){let i="Unexpected state"
"string"==typeof n?i=n:r=n,e||w(t,i,r)}function S(e,t){return e}const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"}
class I extends o.FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}class T{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}class A{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class C{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(h.UNAUTHENTICATED))}shutdown(){}}class k{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class x{constructor(e){this.t=e,this.currentUser=h.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){_(void 0===this.o,42304)
let n=this.i
const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve()
let i=new T
this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new T,e.enqueueRetryable(()=>r(this.currentUser))}
const s=()=>{const t=i
e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())}
this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0})
e?o(e):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new T)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh
return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(_("string"==typeof t.accessToken,31837,{l:t}),new A(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid()
return _(null===e||"string"==typeof e,2055,{h:e}),new h(e)}}class D{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=h.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P)
const e=this.R()
return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class R{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new D(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(h.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class N{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class O{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,r._isFirebaseServerApp(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){_(void 0===this.o,3512)
const n=e=>{null!=e.error&&m("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`)
const n=e.token!==this.m
return this.m=e.token,m("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()}
this.o=t=>{e.enqueueRetryable(()=>n(t))}
const r=e=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)}
this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0})
e?r(e):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new N(this.p))
const e=this.forceRefresh
return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(_("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new N(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function M(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e)
if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n)
else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random())
return n}class P{static newId(){const e=62*Math.floor(256/62)
let t=""
for(;t.length<20;){const n=M(40)
for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function F(e,t){return e<t?-1:e>t?1:0}function L(e,t){const n=Math.min(e.length,t.length)
for(let r=0;r<n;r++){const n=e.charAt(r),i=t.charAt(r)
if(n!==i)return V(n)===V(i)?F(n,i):V(n)?1:-1}return F(e.length,t.length)}const j=55296,q=57343
function V(e){const t=e.charCodeAt(0)
return t>=j&&t<=q}function B(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}function U(e){return e+"\0"}const $="__name__"
class z{constructor(e,t,n){void 0===t?t=0:t>e.length&&b(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&b(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===z.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit())
return e instanceof z?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1
for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1
return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1
for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1
return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length)
for(let r=0;r<n;r++){const n=z.compareSegments(e.get(r),t.get(r))
if(0!==n)return n}return F(e.length,t.length)}static compareSegments(e,t){const n=z.isNumericId(e),r=z.isNumericId(t)
return n&&!r?-1:!n&&r?1:n&&r?z.extractNumericId(e).compare(z.extractNumericId(t)):L(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return a.Integer.fromString(e.substring(4,e.length-2))}}class G extends z{construct(e,t,n){return new G(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[]
for(const n of e){if(n.indexOf("//")>=0)throw new I(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`)
t.push(...n.split("/").filter(e=>e.length>0))}return new G(t)}static emptyPath(){return new G([])}}const K=/^[_a-zA-Z][_a-zA-Z0-9]*$/
class W extends z{construct(e,t,n){return new W(e,t,n)}static isValidIdentifier(e){return K.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===$}static keyField(){return new W([$])}static fromServerFormat(e){const t=[]
let n="",r=0
const i=()=>{if(0===n.length)throw new I(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`)
t.push(n),n=""}
let s=!1
for(;r<e.length;){const t=e[r]
if("\\"===t){if(r+1===e.length)throw new I(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e)
const t=e[r+1]
if("\\"!==t&&"."!==t&&"`"!==t)throw new I(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e)
n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new I(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e)
return new W(t)}static emptyPath(){return new W([])}}class H{constructor(e){this.path=e}static fromPath(e){return new H(G.fromString(e))}static fromName(e){return new H(G.fromString(e).popFirst(5))}static empty(){return new H(G.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===G.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return G.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new G(e.slice()))}}function Q(e,t,n){if(!n)throw new I(E.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function J(e,t,n,r){if(!0===t&&!0===r)throw new I(E.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Y(e){if(!H.isDocumentKey(e))throw new I(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function X(e){if(H.isDocumentKey(e))throw new I(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Z(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function ee(e){if(void 0===e)return"undefined"
if(null===e)return"null"
if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e)
if("number"==typeof e||"boolean"==typeof e)return""+e
if("object"==typeof e){if(e instanceof Array)return"an array"
{const t=function(e){return e.constructor?e.constructor.name:null}(e)
return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":b(12329,{type:typeof e})}function te(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new I(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?")
{const n=ee(e)
throw new I(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function ne(e,t){if(t<=0)throw new I(E.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}function re(e,t){const n={typeString:e}
return t&&(n.value=t),n}function ie(e,t){if(!Z(e))throw new I(E.INVALID_ARGUMENT,"JSON must be an object")
let n
for(const r in t)if(t[r]){const i=t[r].typeString,s="value"in t[r]?{value:t[r].value}:void 0
if(!(r in e)){n=`JSON missing required field: '${r}'`
break}const o=e[r]
if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`
break}if(void 0!==s&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`
break}}if(n)throw new I(E.INVALID_ARGUMENT,n)
return!0}const se=-62135596800,oe=1e6
class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*oe)
return new ae(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new I(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t)
if(t>=1e9)throw new I(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t)
if(e<se)throw new I(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)
if(e>=253402300800)throw new I(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/oe}_compareTo(e){return this.seconds===e.seconds?F(this.nanoseconds,e.nanoseconds):F(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ie(e,ae._jsonSchema))return new ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-se
return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ae._jsonSchemaVersion="firestore/timestamp/1.0",ae._jsonSchema={type:re("string",ae._jsonSchemaVersion),seconds:re("number"),nanoseconds:re("number")}
class ce{static fromTimestamp(e){return new ce(e)}static min(){return new ce(new ae(0,0))}static max(){return new ce(new ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}const ue=-1
class le{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function he(e){return e.fields.find(e=>2===e.kind)}function de(e){return e.fields.filter(e=>2!==e.kind)}function fe(e,t){let n=F(e.collectionGroup,t.collectionGroup)
if(0!==n)return n
for(let r=0;r<Math.min(e.fields.length,t.fields.length);++r)if(n=me(e.fields[r],t.fields[r]),0!==n)return n
return F(e.fields.length,t.fields.length)}le.UNKNOWN_ID=-1
class pe{constructor(e,t){this.fieldPath=e,this.kind=t}}function me(e,t){const n=W.comparator(e.fieldPath,t.fieldPath)
return 0!==n?n:F(e.kind,t.kind)}class ge{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ge(0,be.min())}}function ye(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=ce.fromTimestamp(1e9===r?new ae(n+1,0):new ae(n,r))
return new be(i,H.empty(),t)}function ve(e){return new be(e.readTime,e.key,ue)}class be{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new be(ce.min(),H.empty(),ue)}static max(){return new be(ce.max(),H.empty(),ue)}}function we(e,t){let n=e.readTime.compareTo(t.readTime)
return 0!==n?n:(n=H.comparator(e.documentKey,t.documentKey),0!==n?n:F(e.largestBatchId,t.largestBatchId))}const _e="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."
class Se{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}async function Ee(e){if(e.code!==E.FAILED_PRECONDITION||e.message!==_e)throw e
m("LocalStore","Unexpectedly lost primary lease")}class Ie{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&b(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ie((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e()
return t instanceof Ie?t:Ie.resolve(t)}catch(e){return Ie.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Ie.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Ie.reject(t)}static resolve(e){return new Ie((t,n)=>{t(e)})}static reject(e){return new Ie((t,n)=>{n(e)})}static waitFor(e){return new Ie((t,n)=>{let r=0,i=0,s=!1
e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=Ie.resolve(!1)
for(const n of e)t=t.next(e=>e?Ie.resolve(e):n())
return t}static forEach(e,t){const n=[]
return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new Ie((n,r)=>{const i=e.length,s=new Array(i)
let o=0
for(let a=0;a<i;a++){const c=a
t(e[c]).next(e=>{s[c]=e,++o,o===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new Ie((n,r)=>{const i=()=>{!0===e()?t().next(()=>{i()},r):n()}
i()})}}const Te="SimpleDb"
class Ae{static open(e,t,n,r){try{return new Ae(t,e.transaction(r,n))}catch(e){throw new De(t,e)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new T,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new De(e,t.error)):this.S.resolve()},this.transaction.onerror=t=>{const n=Pe(t.target.error)
this.S.reject(new De(e,n))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(m(Te,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction
this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e)
return new Ne(t)}}class Ce{static delete(e){return m(Te,"Removing database:",e),Oe(o.getGlobal().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!o.isIndexedDBAvailable())return!1
if(Ce.F())return!0
const e=o.getUA(),t=Ce.M(e),n=0<t&&t<10,r=ke(e),i=0<r&&r<4.5
return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static F(){return"undefined"!=typeof process&&"YES"===process.__PRIVATE_env?.__PRIVATE_USE_MOCK_PERSISTENCE}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1"
return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.N=n,this.B=null,12.2===Ce.M(o.getUA())&&g("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(m(Te,"Opening database:",this.name),this.db=await new Promise((t,n)=>{const r=indexedDB.open(this.name,this.version)
r.onsuccess=e=>{const n=e.target.result
t(n)},r.onblocked=()=>{n(new De(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error
"VersionError"===r.name?n(new I(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new I(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new De(e,r))},r.onupgradeneeded=e=>{m(Te,'Database "'+this.name+'" requires upgrade from version:',e.oldVersion)
const t=e.target.result
this.N.k(t,r.transaction,e.oldVersion,this.version).next(()=>{m(Te,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=e=>this.q(e)),this.db}$(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t
let s=0
for(;;){++s
try{this.db=await this.L(e)
const t=Ae.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.C(),e)).catch(e=>(t.abort(e),Ie.reject(e))).toPromise()
return s.catch(()=>{}),await t.D,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3
if(m(Te,"Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}function ke(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1"
return Number(n)}class xe{constructor(e){this.U=e,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(e){this.U=e}done(){this.K=!0}j(e){this.W=e}delete(){return Oe(this.U.delete())}}class De extends I{constructor(e,t){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Re(e){return"IndexedDbTransactionError"===e.name}class Ne{constructor(e){this.store=e}put(e,t){let n
return void 0!==t?(m(Te,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(m(Te,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Oe(n)}add(e){return m(Te,"ADD",this.store.name,e,e),Oe(this.store.add(e))}get(e){return Oe(this.store.get(e)).next(t=>(void 0===t&&(t=null),m(Te,"GET",this.store.name,e,t),t))}delete(e){return m(Te,"DELETE",this.store.name,e),Oe(this.store.delete(e))}count(){return m(Te,"COUNT",this.store.name),Oe(this.store.count())}J(e,t){const n=this.options(e,t),r=n.index?this.store.index(n.index):this.store
if("function"==typeof r.getAll){const e=r.getAll(n.range)
return new Ie((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}{const e=this.cursor(n),t=[]
return this.H(e,(e,n)=>{t.push(n)}).next(()=>t)}}Y(e,t){const n=this.store.getAll(e,null===t?void 0:t)
return new Ie((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}Z(e,t){m(Te,"DELETE ALL",this.store.name)
const n=this.options(e,t)
n.X=!1
const r=this.cursor(n)
return this.H(r,(e,t,n)=>n.delete())}ee(e,t){let n
t?n=e:(n={},t=e)
const r=this.cursor(n)
return this.H(r,t)}te(e){const t=this.cursor({})
return new Ie((n,r)=>{t.onerror=e=>{const t=Pe(e.target.error)
r(t)},t.onsuccess=t=>{const r=t.target.result
r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}H(e,t){const n=[]
return new Ie((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result
if(!i)return void r()
const s=new xe(i),o=t(i.primaryKey,i.value,s)
if(o instanceof Ie){const e=o.catch(e=>(s.done(),Ie.reject(e)))
n.push(e)}s.isDone?r():null===s.G?i.continue():i.continue(s.G)}}).next(()=>Ie.waitFor(n))}options(e,t){let n
return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next"
if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index)
return e.X?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Oe(e){return new Ie((t,n)=>{e.onsuccess=e=>{const n=e.target.result
t(n)},e.onerror=e=>{const t=Pe(e.target.error)
n(t)}})}let Me=!1
function Pe(e){const t=Ce.M(o.getUA())
if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server"
if(e.message.indexOf(t)>=0){const e=new I("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`)
return Me||(Me=!0,setTimeout(()=>{throw e},0)),e}}return e}const Fe="IndexBackfiller"
class Le{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}re(e){m(Fe,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null
try{const e=await this.ne.ie()
m(Fe,`Documents written: ${e}`)}catch(e){Re(e)?m(Fe,"Ignoring IndexedDB error during index backfill: ",e):await Ee(e)}await this.re(6e4)})}}class je{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.se(t,e))}se(e,t){const n=new Set
let r=t,i=!0
return Ie.doWhile(()=>!0===i&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return m(Fe,`Processing collection: ${t}`),this.oe(e,t,r).next(e=>{r-=e,n.add(t)})
i=!1})).next(()=>t-r)}oe(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{const i=n.changes
return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this._e(r,n)).next(n=>(m(Fe,`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>i.size)}))}_e(e,t){let n=e
return t.changes.forEach((e,t)=>{const r=ve(t)
we(r,n)>0&&(n=r)}),new be(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}class qe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>t.writeSequenceNumber(e))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue
return this.ue&&this.ue(e),e}}qe.ce=-1
const Ve=-1
function Be(e){return null==e}function Ue(e){return 0===e&&1/e==-1/0}function $e(e){return"number"==typeof e&&Number.isInteger(e)&&!Ue(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}const ze=""
function Ge(e){let t=""
for(let n=0;n<e.length;n++)t.length>0&&(t=We(t)),t=Ke(e.get(n),t)
return We(t)}function Ke(e,t){let n=t
const r=e.length
for(let i=0;i<r;i++){const t=e.charAt(i)
switch(t){case"\0":n+=""
break
case ze:n+=""
break
default:n+=t}}return n}function We(e){return e+ze+""}function He(e){const t=e.length
if(_(t>=2,64408,{path:e}),2===t)return _(e.charAt(0)===ze&&""===e.charAt(1),56145,{path:e}),G.emptyPath()
const n=t-2,r=[]
let i=""
for(let s=0;s<t;){const t=e.indexOf(ze,s)
switch((t<0||t>n)&&b(50515,{path:e}),e.charAt(t+1)){case"":const n=e.substring(s,t)
let o
0===i.length?o=n:(i+=n,o=i,i=""),r.push(o)
break
case"":i+=e.substring(s,t),i+="\0"
break
case"":i+=e.substring(s,t+1)
break
default:b(61167,{path:e})}s=t+2}return new G(r)}const Qe="remoteDocuments",Je="owner",Ye="owner",Xe="mutationQueues",Ze="mutations",et="batchId",tt="userMutationsIndex",nt=["userId","batchId"]
function rt(e,t){return[e,Ge(t)]}function it(e,t,n){return[e,Ge(t),n]}const st={},ot="documentMutations",at="remoteDocumentsV14",ct=["prefixPath","collectionGroup","readTime","documentId"],ut="documentKeyIndex",lt=["prefixPath","collectionGroup","documentId"],ht="collectionGroupIndex",dt=["collectionGroup","readTime","prefixPath","documentId"],ft="remoteDocumentGlobal",pt="remoteDocumentGlobalKey",mt="targets",gt="queryTargetsIndex",yt=["canonicalId","targetId"],vt="targetDocuments",bt=["targetId","path"],wt="documentTargetsIndex",_t=["path","targetId"],St="targetGlobalKey",Et="targetGlobal",It="collectionParents",Tt=["collectionId","parent"],At="clientMetadata",Ct="bundles",kt="namedQueries",xt="indexConfiguration",Dt="collectionGroupIndex",Rt="indexState",Nt=["indexId","uid"],Ot="sequenceNumberIndex",Mt=["uid","sequenceNumber"],Pt="indexEntries",Ft=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Lt="documentKeyIndex",jt=["indexId","uid","orderedDocumentKey"],qt="documentOverlays",Vt=["userId","collectionPath","documentId"],Bt="collectionPathOverlayIndex",Ut=["userId","collectionPath","largestBatchId"],$t="collectionGroupOverlayIndex",zt=["userId","collectionGroup","largestBatchId"],Gt="globals",Kt=[Xe,Ze,ot,Qe,mt,Je,Et,vt,At,ft,It,Ct,kt],Wt=[...Kt,qt],Ht=[Xe,Ze,ot,at,mt,Je,Et,vt,At,ft,It,Ct,kt,qt],Qt=Ht,Jt=[...Qt,xt,Rt,Pt],Yt=Jt,Xt=[...Jt,Gt],Zt=Xt
class en extends Se{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function tn(e,t){const n=S(e)
return Ce.O(n.le,t)}function nn(e){let t=0
for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++
return t}function rn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function sn(e,t){const n=[]
for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.push(t(e[r],r,e))
return n}function on(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1
return!0}class an{constructor(e,t){this.comparator=e,this.root=t||un.EMPTY}insert(e,t){return new an(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,un.BLACK,null,null))}remove(e){return new an(this.comparator,this.root.remove(e,this.comparator).copy(null,null,un.BLACK,null,null))}get(e){let t=this.root
for(;!t.isEmpty();){const n=this.comparator(e,t.key)
if(0===n)return t.value
n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root
for(;!n.isEmpty();){const r=this.comparator(e,n.key)
if(0===r)return t+n.left.size
r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[]
return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cn(this.root,e,this.comparator,!1)}getReverseIterator(){return new cn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cn(this.root,e,this.comparator,!0)}}class cn{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[]
let i=1
for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right
else{if(0===i){this.nodeStack.push(e)
break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop()
const t={key:e.key,value:e.value}
if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right
else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left
return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null
const e=this.nodeStack[this.nodeStack.length-1]
return{key:e.key,value:e.value}}}class un{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:un.RED,this.left=null!=r?r:un.EMPTY,this.right=null!=i?i:un.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new un(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this
const i=n(e,r.key)
return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return un.EMPTY
let e=this
return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this
if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null)
else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return un.EMPTY
n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this
return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip()
return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip()
return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,un.RED,null,this.right.left)
return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,un.RED,this.left.right,null)
return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null)
return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check()
return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw b(43730,{key:this.key,value:this.value})
if(this.right.isRed())throw b(14113,{key:this.key,value:this.value})
const e=this.left.check()
if(e!==this.right.check())throw b(27949)
return e+(this.isRed()?0:1)}}un.EMPTY=null,un.RED=!0,un.BLACK=!1,un.EMPTY=new class{constructor(){this.size=0}get key(){throw b(57766)}get value(){throw b(16141)}get color(){throw b(16727)}get left(){throw b(29726)}get right(){throw b(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new un(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}}
class ln{constructor(e){this.comparator=e,this.data=new an(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0])
for(;n.hasNext();){const r=n.getNext()
if(this.comparator(r.key,e[1])>=0)return
t(r.key)}}forEachWhile(e,t){let n
for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e)
return t.hasNext()?t.getNext().key:null}getIterator(){return new hn(this.data.getIterator())}getIteratorFrom(e){return new hn(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this
return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof ln))return!1
if(this.size!==e.size)return!1
const t=this.data.getIterator(),n=e.data.getIterator()
for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key
if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[]
return this.forEach(t=>{e.push(t)}),e}toString(){const e=[]
return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ln(this.comparator)
return t.data=e,t}}class hn{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function dn(e){return e.hasNext()?e.getNext():void 0}class fn{constructor(e){this.fields=e,e.sort(W.comparator)}static empty(){return new fn([])}unionWith(e){let t=new ln(W.comparator)
for(const n of this.fields)t=t.add(n)
for(const n of e)t=t.add(n)
return new fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0
return!1}isEqual(e){return B(this.fields,e.fields,(e,t)=>e.isEqual(t))}}class pn extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}class mn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new pn("Invalid base64 string: "+e):e}}(e)
return new mn(t)}static fromUint8Array(e){const t=function(e){let t=""
for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n])
return t}(e)
return new mn(t)}[Symbol.iterator](){let e=0
return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e)
var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length)
for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)
return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return F(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mn.EMPTY_BYTE_STRING=new mn("")
const gn=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/)
function yn(e){if(_(!!e,39018),"string"==typeof e){let t=0
const n=gn.exec(e)
if(_(!!n,46558,{timestamp:e}),n[1]){let e=n[1]
e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e)
return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:vn(e.seconds),nanos:vn(e.nanos)}}function vn(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function bn(e){return"string"==typeof e?mn.fromBase64String(e):mn.fromUint8Array(e)}const wn="server_timestamp",_n="__type__",Sn="__previous_value__",En="__local_write_time__"
function In(e){const t=(e?.mapValue?.fields||{})[_n]?.stringValue
return t===wn}function Tn(e){const t=e.mapValue.fields[Sn]
return In(t)?Tn(t):t}function An(e){const t=yn(e.mapValue.fields[En].timestampValue)
return new ae(t.seconds,t.nanos)}class Cn{constructor(e,t,n,r,i,s,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c,this.isUsingEmulator=u}}const kn="(default)"
class xn{constructor(e,t){this.projectId=e,this.database=t||kn}static empty(){return new xn("","")}get isDefaultDatabase(){return this.database===kn}isEqual(e){return e instanceof xn&&e.projectId===this.projectId&&e.database===this.database}}const Dn="__type__",Rn="__max__",Nn={mapValue:{fields:{__type__:{stringValue:Rn}}}},On="__vector__",Mn="value",Pn={nullValue:"NULL_VALUE"}
function Fn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?In(e)?4:Zn(e)?9007199254740991:Yn(e)?10:11:b(28295,{value:e})}function Ln(e,t){if(e===t)return!0
const n=Fn(e)
if(n!==Fn(t))return!1
switch(n){case 0:case 9007199254740991:return!0
case 1:return e.booleanValue===t.booleanValue
case 4:return An(e).isEqual(An(t))
case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue
const n=yn(e.timestampValue),r=yn(t.timestampValue)
return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t)
case 5:return e.stringValue===t.stringValue
case 6:return function(e,t){return bn(e.bytesValue).isEqual(bn(t.bytesValue))}(e,t)
case 7:return e.referenceValue===t.referenceValue
case 8:return function(e,t){return vn(e.geoPointValue.latitude)===vn(t.geoPointValue.latitude)&&vn(e.geoPointValue.longitude)===vn(t.geoPointValue.longitude)}(e,t)
case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return vn(e.integerValue)===vn(t.integerValue)
if("doubleValue"in e&&"doubleValue"in t){const n=vn(e.doubleValue),r=vn(t.doubleValue)
return n===r?Ue(n)===Ue(r):isNaN(n)&&isNaN(r)}return!1}(e,t)
case 9:return B(e.arrayValue.values||[],t.arrayValue.values||[],Ln)
case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{}
if(nn(n)!==nn(r))return!1
for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Ln(n[i],r[i])))return!1
return!0}(e,t)
default:return b(52216,{left:e})}}function jn(e,t){return void 0!==(e.values||[]).find(e=>Ln(e,t))}function qn(e,t){if(e===t)return 0
const n=Fn(e),r=Fn(t)
if(n!==r)return F(n,r)
switch(n){case 0:case 9007199254740991:return 0
case 1:return F(e.booleanValue,t.booleanValue)
case 2:return function(e,t){const n=vn(e.integerValue||e.doubleValue),r=vn(t.integerValue||t.doubleValue)
return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t)
case 3:return Vn(e.timestampValue,t.timestampValue)
case 4:return Vn(An(e),An(t))
case 5:return L(e.stringValue,t.stringValue)
case 6:return function(e,t){const n=bn(e),r=bn(t)
return n.compareTo(r)}(e.bytesValue,t.bytesValue)
case 7:return function(e,t){const n=e.split("/"),r=t.split("/")
for(let i=0;i<n.length&&i<r.length;i++){const e=F(n[i],r[i])
if(0!==e)return e}return F(n.length,r.length)}(e.referenceValue,t.referenceValue)
case 8:return function(e,t){const n=F(vn(e.latitude),vn(t.latitude))
return 0!==n?n:F(vn(e.longitude),vn(t.longitude))}(e.geoPointValue,t.geoPointValue)
case 9:return Bn(e.arrayValue,t.arrayValue)
case 10:return function(e,t){const n=e.fields||{},r=t.fields||{},i=n[Mn]?.arrayValue,s=r[Mn]?.arrayValue,o=F(i?.values?.length||0,s?.values?.length||0)
return 0!==o?o:Bn(i,s)}(e.mapValue,t.mapValue)
case 11:return function(e,t){if(e===Nn.mapValue&&t===Nn.mapValue)return 0
if(e===Nn.mapValue)return 1
if(t===Nn.mapValue)return-1
const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i)
r.sort(),s.sort()
for(let o=0;o<r.length&&o<s.length;++o){const e=L(r[o],s[o])
if(0!==e)return e
const t=qn(n[r[o]],i[s[o]])
if(0!==t)return t}return F(r.length,s.length)}(e.mapValue,t.mapValue)
default:throw b(23264,{he:n})}}function Vn(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return F(e,t)
const n=yn(e),r=yn(t),i=F(n.seconds,r.seconds)
return 0!==i?i:F(n.nanos,r.nanos)}function Bn(e,t){const n=e.values||[],r=t.values||[]
for(let i=0;i<n.length&&i<r.length;++i){const e=qn(n[i],r[i])
if(e)return e}return F(n.length,r.length)}function Un(e){return $n(e)}function $n(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=yn(e)
return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return bn(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return H.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0
for(const r of e.values||[])n?n=!1:t+=",",t+=$n(r)
return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort()
let n="{",r=!0
for(const i of t)r?r=!1:n+=",",n+=`${i}:${$n(e.fields[i])}`
return n+"}"}(e.mapValue):b(61005,{value:e})}function zn(e){switch(Fn(e)){case 0:case 1:return 4
case 2:return 8
case 3:case 8:return 16
case 4:const t=Tn(e)
return t?16+zn(t):16
case 5:return 2*e.stringValue.length
case 6:return bn(e.bytesValue).approximateByteSize()
case 7:return e.referenceValue.length
case 9:return function(e){return(e.values||[]).reduce((e,t)=>e+zn(t),0)}(e.arrayValue)
case 10:case 11:return function(e){let t=0
return rn(e.fields,(e,n)=>{t+=e.length+zn(n)}),t}(e.mapValue)
default:throw b(13486,{value:e})}}function Gn(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Kn(e){return!!e&&"integerValue"in e}function Wn(e){return!!e&&"arrayValue"in e}function Hn(e){return!!e&&"nullValue"in e}function Qn(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Jn(e){return!!e&&"mapValue"in e}function Yn(e){const t=(e?.mapValue?.fields||{})[Dn]?.stringValue
return t===On}function Xn(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}}
if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:{...e.timestampValue}}
if(e.mapValue){const t={mapValue:{fields:{}}}
return rn(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Xn(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}}
for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Xn(e.arrayValue.values[n])
return t}return{...e}}function Zn(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===Rn}const er={mapValue:{fields:{[Dn]:{stringValue:On},[Mn]:{arrayValue:{}}}}}
function tr(e){return"nullValue"in e?Pn:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?Gn(xn.empty(),H.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?Yn(e)?er:{mapValue:{}}:b(35942,{value:e})}function nr(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?Gn(xn.empty(),H.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?er:"mapValue"in e?Yn(e)?{mapValue:{}}:Nn:b(61959,{value:e})}function rr(e,t){const n=qn(e.value,t.value)
return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function ir(e,t){const n=qn(e.value,t.value)
return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}class sr{constructor(e){this.value=e}static empty(){return new sr({mapValue:{}})}field(e){if(e.isEmpty())return this.value
{let t=this.value
for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Jn(t))return null
return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xn(t)}setAll(e){let t=W.emptyPath(),n={},r=[]
e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t)
this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Xn(e):r.push(i.lastSegment())})
const i=this.getFieldsMap(t)
this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast())
Jn(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ln(this.value,e.value)}getFieldsMap(e){let t=this.value
t.mapValue.fields||(t.mapValue={fields:{}})
for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)]
Jn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){rn(t,(t,n)=>e[t]=n)
for(const r of n)delete e[r]}clone(){return new sr(Xn(this.value))}}function or(e){const t=[]
return rn(e.fields,(e,n)=>{const r=new W([e])
if(Jn(n)){const e=or(n.mapValue).fields
if(0===e.length)t.push(r)
else for(const n of e)t.push(r.child(n))}else t.push(r)}),new fn(t)}class ar{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new ar(e,0,ce.min(),ce.min(),ce.min(),sr.empty(),0)}static newFoundDocument(e,t,n,r){return new ar(e,1,t,ce.min(),n,r,0)}static newNoDocument(e,t){return new ar(e,2,t,ce.min(),ce.min(),sr.empty(),0)}static newUnknownDocument(e,t){return new ar(e,3,t,ce.min(),ce.min(),sr.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ce.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=sr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=sr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ar&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ar(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class cr{constructor(e,t){this.position=e,this.inclusive=t}}function ur(e,t,n){let r=0
for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i]
if(r=s.field.isKeyField()?H.comparator(H.fromName(o.referenceValue),n.key):qn(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function lr(e,t){if(null===e)return null===t
if(null===t)return!1
if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1
for(let n=0;n<e.position.length;n++)if(!Ln(e.position[n],t.position[n]))return!1
return!0}class hr{constructor(e,t="asc"){this.field=e,this.dir=t}}function dr(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}class fr{}class pr extends fr{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Ir(e,t,n):"array-contains"===t?new kr(e,n):"in"===t?new xr(e,n):"not-in"===t?new Dr(e,n):"array-contains-any"===t?new Rr(e,n):new pr(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Tr(e,n):new Ar(e,n)}matches(e){const t=e.data.field(this.field)
return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(qn(t,this.value)):null!==t&&Fn(this.value)===Fn(t)&&this.matchesComparison(qn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0
case"<=":return e<=0
case"==":return 0===e
case"!=":return 0!==e
case">":return e>0
case">=":return e>=0
default:return b(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mr extends fr{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new mr(e,t)}matches(e){return gr(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function gr(e){return"and"===e.op}function yr(e){return"or"===e.op}function vr(e){return br(e)&&gr(e)}function br(e){for(const t of e.filters)if(t instanceof mr)return!1
return!0}function wr(e){if(e instanceof pr)return e.field.canonicalString()+e.op.toString()+Un(e.value)
if(vr(e))return e.filters.map(e=>wr(e)).join(",")
{const t=e.filters.map(e=>wr(e)).join(",")
return`${e.op}(${t})`}}function _r(e,t){return e instanceof pr?function(e,t){return t instanceof pr&&e.op===t.op&&e.field.isEqual(t.field)&&Ln(e.value,t.value)}(e,t):e instanceof mr?function(e,t){return t instanceof mr&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&_r(n,t.filters[r]),!0)}(e,t):void b(19439)}function Sr(e,t){const n=e.filters.concat(t)
return mr.create(n,e.op)}function Er(e){return e instanceof pr?function(e){return`${e.field.canonicalString()} ${e.op} ${Un(e.value)}`}(e):e instanceof mr?function(e){return e.op.toString()+" {"+e.getFilters().map(Er).join(" ,")+"}"}(e):"Filter"}class Ir extends pr{constructor(e,t,n){super(e,t,n),this.key=H.fromName(n.referenceValue)}matches(e){const t=H.comparator(e.key,this.key)
return this.matchesComparison(t)}}class Tr extends pr{constructor(e,t){super(e,"in",t),this.keys=Cr(0,t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ar extends pr{constructor(e,t){super(e,"not-in",t),this.keys=Cr(0,t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Cr(e,t){return(t.arrayValue?.values||[]).map(e=>H.fromName(e.referenceValue))}class kr extends pr{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field)
return Wn(t)&&jn(t.arrayValue,this.value)}}class xr extends pr{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field)
return null!==t&&jn(this.value.arrayValue,t)}}class Dr extends pr{constructor(e,t){super(e,"not-in",t)}matches(e){if(jn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1
const t=e.data.field(this.field)
return null!==t&&void 0===t.nullValue&&!jn(this.value.arrayValue,t)}}class Rr extends pr{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field)
return!(!Wn(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>jn(this.value.arrayValue,e))}}class Nr{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.Te=null}}function Or(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Nr(e,t,n,r,i,s,o)}function Mr(e){const t=S(e)
if(null===t.Te){let e=t.path.canonicalString()
null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>wr(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),Be(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>Un(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>Un(e)).join(",")),t.Te=e}return t.Te}function Pr(e,t){if(e.limit!==t.limit)return!1
if(e.orderBy.length!==t.orderBy.length)return!1
for(let n=0;n<e.orderBy.length;n++)if(!dr(e.orderBy[n],t.orderBy[n]))return!1
if(e.filters.length!==t.filters.length)return!1
for(let n=0;n<e.filters.length;n++)if(!_r(e.filters[n],t.filters[n]))return!1
return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!lr(e.startAt,t.startAt)&&lr(e.endAt,t.endAt)}function Fr(e){return H.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function Lr(e,t){return e.filters.filter(e=>e instanceof pr&&e.field.isEqual(t))}function jr(e,t,n){let r=Pn,i=!0
for(const s of Lr(e,t)){let e=Pn,t=!0
switch(s.op){case"<":case"<=":e=tr(s.value)
break
case"==":case"in":case">=":e=s.value
break
case">":e=s.value,t=!1
break
case"!=":case"not-in":e=Pn}rr({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s]
rr({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive)
break}return{value:r,inclusive:i}}function qr(e,t,n){let r=Nn,i=!0
for(const s of Lr(e,t)){let e=Nn,t=!0
switch(s.op){case">=":case">":e=nr(s.value),t=!1
break
case"==":case"in":case"<=":e=s.value
break
case"<":e=s.value,t=!1
break
case"!=":case"not-in":e=Nn}ir({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s]
ir({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive)
break}return{value:r,inclusive:i}}class Vr{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Br(e,t,n,r,i,s,o,a){return new Vr(e,t,n,r,i,s,o,a)}function Ur(e){return new Vr(e)}function $r(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function zr(e){return null!==e.collectionGroup}function Gr(e){const t=S(e)
if(null===t.Ie){t.Ie=[]
const e=new Set
for(const i of t.explicitOrderBy)t.Ie.push(i),e.add(i.field.canonicalString())
const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=function(e){let t=new ln(W.comparator)
return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t}(t)
r.forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.Ie.push(new hr(r,n))}),e.has(W.keyField().canonicalString())||t.Ie.push(new hr(W.keyField(),n))}return t.Ie}function Kr(e){const t=S(e)
return t.Ee||(t.Ee=Hr(t,Gr(e))),t.Ee}function Wr(e){const t=S(e)
return t.de||(t.de=Hr(t,e.explicitOrderBy)),t.de}function Hr(e,t){if("F"===e.limitType)return Or(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt)
{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc"
return new hr(e.field,t)})
const n=e.endAt?new cr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new cr(e.startAt.position,e.startAt.inclusive):null
return Or(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Qr(e,t){const n=e.filters.concat([t])
return new Vr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Jr(e,t,n){return new Vr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Yr(e,t){return Pr(Kr(e),Kr(t))&&e.limitType===t.limitType}function Xr(e){return`${Mr(Kr(e))}|lt:${e.limitType}`}function Zr(e){return`Query(target=${function(e){let t=e.path.canonicalString()
return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>Er(e)).join(", ")}]`),Be(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>Un(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>Un(e)).join(",")),`Target(${t})`}(Kr(e))}; limitType=${e.limitType})`}function ei(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path
return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):H.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Gr(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1
return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1
return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=ur(e,t,n)
return e.inclusive?r<=0:r<0}(e.startAt,Gr(e),t)||e.endAt&&!function(e,t,n){const r=ur(e,t,n)
return e.inclusive?r>=0:r>0}(e.endAt,Gr(e),t))}(e,t)}function ti(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ni(e){return(t,n)=>{let r=!1
for(const i of Gr(e)){const e=ri(i,t,n)
if(0!==e)return e
r=r||i.field.isKeyField()}return 0}}function ri(e,t,n){const r=e.field.isKeyField()?H.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e)
return null!==r&&null!==i?qn(r,i):b(42886)}(e.field,t,n)
switch(e.dir){case"asc":return r
case"desc":return-1*r
default:return b(19790,{direction:e.dir})}}class ii{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t]
if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n]
if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++
for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t])
r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t]
if(void 0===n)return!1
for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0
return!1}forEach(e){rn(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return on(this.inner)}size(){return this.innerSize}}const si=new an(H.comparator)
function oi(){return si}const ai=new an(H.comparator)
function ci(...e){let t=ai
for(const n of e)t=t.insert(n.key,n)
return t}function ui(e){let t=ai
return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function li(){return di()}function hi(){return di()}function di(){return new ii(e=>e.toString(),(e,t)=>e.isEqual(t))}const fi=new an(H.comparator),pi=new ln(H.comparator)
function mi(...e){let t=pi
for(const n of e)t=t.add(n)
return t}const gi=new ln(F)
function yi(){return gi}function vi(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"}
if(t===1/0)return{doubleValue:"Infinity"}
if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ue(t)?"-0":t}}function bi(e){return{integerValue:""+e}}function wi(e,t){return $e(t)?bi(t):vi(e,t)}class _i{constructor(){this._=void 0}}function Si(e,t,n){return e instanceof Ti?function(e,t){const n={fields:{[_n]:{stringValue:wn},[En]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}}
return t&&In(t)&&(t=Tn(t)),t&&(n.fields[Sn]=t),{mapValue:n}}(n,t):e instanceof Ai?Ci(e,t):e instanceof ki?xi(e,t):function(e,t){const n=Ii(e,t),r=Ri(n)+Ri(e.Ae)
return Kn(n)&&Kn(e.Ae)?bi(r):vi(e.serializer,r)}(e,t)}function Ei(e,t,n){return e instanceof Ai?Ci(e,t):e instanceof ki?xi(e,t):n}function Ii(e,t){return e instanceof Di?function(e){return Kn(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class Ti extends _i{}class Ai extends _i{constructor(e){super(),this.elements=e}}function Ci(e,t){const n=Ni(t)
for(const r of e.elements)n.some(e=>Ln(e,r))||n.push(r)
return{arrayValue:{values:n}}}class ki extends _i{constructor(e){super(),this.elements=e}}function xi(e,t){let n=Ni(t)
for(const r of e.elements)n=n.filter(e=>!Ln(e,r))
return{arrayValue:{values:n}}}class Di extends _i{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ri(e){return vn(e.integerValue||e.doubleValue)}function Ni(e){return Wn(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class Oi{constructor(e,t){this.field=e,this.transform=t}}class Mi{constructor(e,t){this.version=e,this.transformResults=t}}class Pi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Pi}static exists(e){return new Pi(void 0,e)}static updateTime(e){return new Pi(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fi(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Li{}function ji(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null
if(null===t)return e.isNoDocument()?new Hi(e.key,Pi.none()):new $i(e.key,e.data,Pi.none())
{const n=e.data,r=sr.empty()
let i=new ln(W.comparator)
for(let e of t.fields)if(!i.has(e)){let t=n.field(e)
null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new zi(e.key,r,new fn(i.toArray()),Pi.none())}}function qi(e,t,n){e instanceof $i?function(e,t,n){const r=e.value.clone(),i=Ki(e.fieldTransforms,t,n.transformResults)
r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof zi?function(e,t,n){if(!Fi(e.precondition,t))return void t.convertToUnknownDocument(n.version)
const r=Ki(e.fieldTransforms,t,n.transformResults),i=t.data
i.setAll(Gi(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Vi(e,t,n,r){return e instanceof $i?function(e,t,n,r){if(!Fi(e.precondition,t))return n
const i=e.value.clone(),s=Wi(e.fieldTransforms,r,t)
return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof zi?function(e,t,n,r){if(!Fi(e.precondition,t))return n
const i=Wi(e.fieldTransforms,r,t),s=t.data
return s.setAll(Gi(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):function(e,t,n){return Fi(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Bi(e,t){let n=null
for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Ii(r.transform,e||null)
null!=i&&(null===n&&(n=sr.empty()),n.set(r.field,i))}return n||null}function Ui(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&B(e,t,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Ai&&t instanceof Ai||e instanceof ki&&t instanceof ki?B(e.elements,t.elements,Ln):e instanceof Di&&t instanceof Di?Ln(e.Ae,t.Ae):e instanceof Ti&&t instanceof Ti}(e.transform,t.transform)}(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class $i extends Li{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class zi extends Li{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Gi(e){const t=new Map
return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n)
t.set(n,r)}}),t}function Ki(e,t,n){const r=new Map
_(e.length===n.length,32656,{Re:n.length,Ve:e.length})
for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field)
r.set(s.field,Ei(o,a,n[i]))}return r}function Wi(e,t,n){const r=new Map
for(const i of e){const e=i.transform,s=n.data.field(i.field)
r.set(i.field,Si(e,s,t))}return r}class Hi extends Li{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Qi extends Li{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}class Ji{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults
for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r]
t.key.isEqual(e.key)&&qi(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Vi(n,e,t,this.localWriteTime))
for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Vi(n,e,t,this.localWriteTime))
return t}applyToLocalDocumentSet(e,t){const n=hi()
return this.mutations.forEach(r=>{const i=e.get(r.key),s=i.overlayedDocument
let o=this.applyToLocalView(s,i.mutatedFields)
o=t.has(r.key)?null:o
const a=ji(s,o)
null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(ce.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),mi())}isEqual(e){return this.batchId===e.batchId&&B(this.mutations,e.mutations,(e,t)=>Ui(e,t))&&B(this.baseMutations,e.baseMutations,(e,t)=>Ui(e,t))}}class Yi{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){_(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length})
let r=fi
const i=e.mutations
for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version)
return new Yi(e,t,n,r)}}class Xi{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}class Zi{constructor(e,t,n){this.alias=e,this.aggregateType=t,this.fieldPath=n}}class es{constructor(e,t){this.count=e,this.unchangedNames=t}}var ts,ns
function rs(e){switch(e){case E.OK:return b(64938)
case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1
case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0
default:return b(15467,{code:e})}}function is(e){if(void 0===e)return g("GRPC error has no .code"),E.UNKNOWN
switch(e){case ts.OK:return E.OK
case ts.CANCELLED:return E.CANCELLED
case ts.UNKNOWN:return E.UNKNOWN
case ts.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED
case ts.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED
case ts.INTERNAL:return E.INTERNAL
case ts.UNAVAILABLE:return E.UNAVAILABLE
case ts.UNAUTHENTICATED:return E.UNAUTHENTICATED
case ts.INVALID_ARGUMENT:return E.INVALID_ARGUMENT
case ts.NOT_FOUND:return E.NOT_FOUND
case ts.ALREADY_EXISTS:return E.ALREADY_EXISTS
case ts.PERMISSION_DENIED:return E.PERMISSION_DENIED
case ts.FAILED_PRECONDITION:return E.FAILED_PRECONDITION
case ts.ABORTED:return E.ABORTED
case ts.OUT_OF_RANGE:return E.OUT_OF_RANGE
case ts.UNIMPLEMENTED:return E.UNIMPLEMENTED
case ts.DATA_LOSS:return E.DATA_LOSS
default:return b(39323,{code:e})}}(ns=ts||(ts={}))[ns.OK=0]="OK",ns[ns.CANCELLED=1]="CANCELLED",ns[ns.UNKNOWN=2]="UNKNOWN",ns[ns.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ns[ns.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ns[ns.NOT_FOUND=5]="NOT_FOUND",ns[ns.ALREADY_EXISTS=6]="ALREADY_EXISTS",ns[ns.PERMISSION_DENIED=7]="PERMISSION_DENIED",ns[ns.UNAUTHENTICATED=16]="UNAUTHENTICATED",ns[ns.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ns[ns.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ns[ns.ABORTED=10]="ABORTED",ns[ns.OUT_OF_RANGE=11]="OUT_OF_RANGE",ns[ns.UNIMPLEMENTED=12]="UNIMPLEMENTED",ns[ns.INTERNAL=13]="INTERNAL",ns[ns.UNAVAILABLE=14]="UNAVAILABLE",ns[ns.DATA_LOSS=15]="DATA_LOSS"
let ss=null
function os(){return new TextEncoder}const as=new a.Integer([4294967295,4294967295],0)
function cs(e){const t=os().encode(e),n=new a.Md5
return n.update(t),new Uint8Array(n.digest())}function us(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0)
return[new a.Integer([n,r],0),new a.Integer([i,s],0)]}class ls{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new hs(`Invalid padding: ${t}`)
if(n<0)throw new hs(`Invalid hash count: ${n}`)
if(e.length>0&&0===this.hashCount)throw new hs(`Invalid hash count: ${n}`)
if(0===e.length&&0!==t)throw new hs(`Invalid padding when bitmap length is 0: ${t}`)
this.ge=8*e.length-t,this.pe=a.Integer.fromNumber(this.ge)}ye(e,t,n){let r=e.add(t.multiply(a.Integer.fromNumber(n)))
return 1===r.compare(as)&&(r=new a.Integer([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.ge)return!1
const t=cs(e),[n,r]=us(t)
for(let i=0;i<this.hashCount;i++){const e=this.ye(n,r,i)
if(!this.we(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new ls(i,r,t)
return n.forEach(e=>s.insert(e)),s}insert(e){if(0===this.ge)return
const t=cs(e),[n,r]=us(t)
for(let i=0;i<this.hashCount;i++){const e=this.ye(n,r,i)
this.Se(e)}}Se(e){const t=Math.floor(e/8),n=e%8
this.bitmap[t]|=1<<n}}class hs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}class ds{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map
return r.set(e,fs.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ds(ce.min(),r,new an(F),oi(),mi())}}class fs{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new fs(n,t,mi(),mi(),mi())}}class ps{constructor(e,t,n,r){this.be=e,this.removedTargetIds=t,this.key=n,this.De=r}}class ms{constructor(e,t){this.targetId=e,this.Ce=t}}class gs{constructor(e,t,n=mn.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class ys{constructor(){this.ve=0,this.Fe=ws(),this.Me=mn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=mi(),t=mi(),n=mi()
return this.Fe.forEach((r,i)=>{switch(i){case 0:e=e.add(r)
break
case 2:t=t.add(r)
break
case 1:n=n.add(r)
break
default:b(38017,{changeType:i})}}),new fs(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=ws()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,_(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class vs{constructor(e){this.Ge=e,this.ze=new Map,this.je=oi(),this.Je=bs(),this.He=bs(),this.Ye=new an(F)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De)
for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t)
switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken)
break
case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken)
break
case 2:n.Ke(),n.Ne||this.removeTarget(t)
break
case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken))
break
case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken))
break
default:b(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((e,n)=>{this.rt(n)&&t(n)})}st(e){const t=e.targetId,n=e.Ce.count,r=this.ot(t)
if(r){const i=r.target
if(Fr(i))if(0===n){const e=new H(i.path)
this.et(t,e,ar.newNoDocument(e,ce.min()))}else _(1===n,20013,{expectedCount:n})
else{const r=this._t(t)
if(r!==n){const n=this.ut(e),i=n?this.ct(n,e,r):1
if(0!==i){this.it(t)
const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"
this.Ye=this.Ye.insert(t,e)}ss?.lt(function(e,t,n,r,i){const s={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},o=t.unchangedNames
return o&&(s.bloomFilter={applied:0===i,hashCount:o?.hashCount??0,bitmapLength:o?.bits?.bitmap?.length??0,padding:o?.bits?.padding??0,mightContain:e=>r?.mightContain(e)??!1}),s}(r,e.Ce,this.Ge.ht(),n,i))}}}}ut(e){const t=e.Ce.unchangedNames
if(!t||!t.bits)return null
const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t
let s,o
try{s=bn(n).toUint8Array()}catch(e){if(e instanceof pn)return y("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null
throw e}try{o=new ls(s,r,i)}catch(e){return y(e instanceof hs?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.ge?null:o}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t)
let r=0
return n.forEach(n=>{const i=this.Ge.ht(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`
e.mightContain(s)||(this.et(t,n,null),r++)}),r}Tt(e){const t=new Map
this.ze.forEach((n,r)=>{const i=this.ot(r)
if(i){if(n.current&&Fr(i.target)){const t=new H(i.target.path)
this.It(t).has(r)||this.Et(r,t)||this.et(r,t,ar.newNoDocument(t,e))}n.Be&&(t.set(r,n.ke()),n.qe())}})
let n=mi()
this.He.forEach((e,t)=>{let r=!0
t.forEachWhile(e=>{const t=this.ot(e)
return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.je.forEach((t,n)=>n.setReadTime(e))
const r=new ds(e,t,this.Ye,this.je,n)
return this.je=oi(),this.Je=bs(),this.He=bs(),this.Ye=new an(F),r}Xe(e,t){if(!this.rt(e))return
const n=this.Et(e,t.key)?2:0
this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return
const r=this.nt(e)
this.Et(e,t)?r.Qe(t,1):r.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke()
return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e)
return t||(t=new ys,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e)
return t||(t=new ln(F),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e)
return t||(t=new ln(F),this.Je=this.Je.insert(e,t)),t}rt(e){const t=null!==this.ot(e)
return t||m("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e)
return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ys),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function bs(){return new an(H.comparator)}function ws(){return new an(H.comparator)}const _s={asc:"ASCENDING",desc:"DESCENDING"},Ss={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Es={and:"AND",or:"OR"}
class Is{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ts(e,t){return e.useProto3Json||Be(t)?t:{value:t}}function As(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Cs(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ks(e,t){return As(e,t.toTimestamp())}function xs(e){return _(!!e,49232),ce.fromTimestamp(function(e){const t=yn(e)
return new ae(t.seconds,t.nanos)}(e))}function Ds(e,t){return Rs(e,t).canonicalString()}function Rs(e,t){const n=function(e){return new G(["projects",e.projectId,"databases",e.database])}(e).child("documents")
return void 0===t?n:n.child(t)}function Ns(e){const t=G.fromString(e)
return _(to(t),10190,{key:t.toString()}),t}function Os(e,t){return Ds(e.databaseId,t.path)}function Ms(e,t){const n=Ns(t)
if(n.get(1)!==e.databaseId.projectId)throw new I(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId)
if(n.get(3)!==e.databaseId.database)throw new I(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database)
return new H(js(n))}function Ps(e,t){return Ds(e.databaseId,t)}function Fs(e){const t=Ns(e)
return 4===t.length?G.emptyPath():js(t)}function Ls(e){return new G(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function js(e){return _(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function qs(e,t,n){return{name:Os(e,t),fields:n.value.mapValue.fields}}function Vs(e,t,n){const r=Ms(e,t.name),i=xs(t.updateTime),s=t.createTime?xs(t.createTime):ce.min(),o=new sr({mapValue:{fields:t.fields}}),a=ar.newFoundDocument(r,i,s,o)
return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function Bs(e,t){let n
if(t instanceof $i)n={update:qs(e,t.key,t.value)}
else if(t instanceof Hi)n={delete:Os(e,t.key)}
else if(t instanceof zi)n={update:qs(e,t.key,t.data),updateMask:eo(t.fieldMask)}
else{if(!(t instanceof Qi))return b(16599,{Vt:t.type})
n={verify:Os(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform
if(n instanceof Ti)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"}
if(n instanceof Ai)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}}
if(n instanceof ki)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}}
if(n instanceof Di)return{fieldPath:t.field.canonicalString(),increment:n.Ae}
throw b(20930,{transform:t.transform})}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ks(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:b(27497)}(e,t.precondition)),n}function Us(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?Pi.updateTime(xs(e.updateTime)):void 0!==e.exists?Pi.exists(e.exists):Pi.none()}(t.currentDocument):Pi.none(),r=t.updateTransforms?t.updateTransforms.map(t=>function(e,t){let n=null
if("setToServerValue"in t)_("REQUEST_TIME"===t.setToServerValue,16630,{proto:t}),n=new Ti
else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[]
n=new Ai(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[]
n=new ki(e)}else"increment"in t?n=new Di(e,t.increment):b(16584,{proto:t})
const r=W.fromServerFormat(t.fieldPath)
return new Oi(r,n)}(e,t)):[]
if(t.update){t.update.name
const i=Ms(e,t.update.name),s=new sr({mapValue:{fields:t.update.fields}})
if(t.updateMask){const e=function(e){const t=e.fieldPaths||[]
return new fn(t.map(e=>W.fromServerFormat(e)))}(t.updateMask)
return new zi(i,s,e,n,r)}return new $i(i,s,n,r)}if(t.delete){const r=Ms(e,t.delete)
return new Hi(r,n)}if(t.verify){const r=Ms(e,t.verify)
return new Qi(r,n)}return b(1463,{proto:t})}function $s(e,t){return{documents:[Ps(e,t.path)]}}function zs(e,t){const n={structuredQuery:{}},r=t.path
let i
null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ps(e,i)
const s=function(e){if(0!==e.length)return Zs(mr.create(e,"and"))}(t.filters)
s&&(n.structuredQuery.where=s)
const o=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:Ys(e.field),direction:Hs(e.dir)}}(e))}(t.orderBy)
o&&(n.structuredQuery.orderBy=o)
const a=Ts(e,t.limit)
return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{ft:n,parent:i}}function Gs(e,t,n,r){const{ft:i,parent:s}=zs(e,t),o={},a=[]
let c=0
return n.forEach(e=>{const t=r?e.alias:"aggregate_"+c++
o[t]=e.alias,"count"===e.aggregateType?a.push({alias:t,count:{}}):"avg"===e.aggregateType?a.push({alias:t,avg:{field:Ys(e.fieldPath)}}):"sum"===e.aggregateType&&a.push({alias:t,sum:{field:Ys(e.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:i.structuredQuery},parent:i.parent},gt:o,parent:s}}function Ks(e){let t=Fs(e.parent)
const n=e.structuredQuery,r=n.from?n.from.length:0
let i=null
if(r>0){_(1===r,65062)
const e=n.from[0]
e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[]
n.where&&(s=function(e){const t=Ws(e)
return t instanceof mr&&vr(t)?t.getFilters():[t]}(n.where))
let o=[]
n.orderBy&&(o=function(e){return e.map(e=>function(e){return new hr(Xs(e.field),function(e){switch(e){case"ASCENDING":return"asc"
case"DESCENDING":return"desc"
default:return}}(e.direction))}(e))}(n.orderBy))
let a=null
n.limit&&(a=function(e){let t
return t="object"==typeof e?e.value:e,Be(t)?null:t}(n.limit))
let c=null
n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[]
return new cr(n,t)}(n.startAt))
let u=null
return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[]
return new cr(n,t)}(n.endAt)),Br(t,i,o,s,a,"F",c,u)}function Ws(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Xs(e.unaryFilter.field)
return pr.create(t,"==",{doubleValue:NaN})
case"IS_NULL":const n=Xs(e.unaryFilter.field)
return pr.create(n,"==",{nullValue:"NULL_VALUE"})
case"IS_NOT_NAN":const r=Xs(e.unaryFilter.field)
return pr.create(r,"!=",{doubleValue:NaN})
case"IS_NOT_NULL":const i=Xs(e.unaryFilter.field)
return pr.create(i,"!=",{nullValue:"NULL_VALUE"})
case"OPERATOR_UNSPECIFIED":return b(61313)
default:return b(60726)}}(e):void 0!==e.fieldFilter?function(e){return pr.create(Xs(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"=="
case"NOT_EQUAL":return"!="
case"GREATER_THAN":return">"
case"GREATER_THAN_OR_EQUAL":return">="
case"LESS_THAN":return"<"
case"LESS_THAN_OR_EQUAL":return"<="
case"ARRAY_CONTAINS":return"array-contains"
case"IN":return"in"
case"NOT_IN":return"not-in"
case"ARRAY_CONTAINS_ANY":return"array-contains-any"
case"OPERATOR_UNSPECIFIED":return b(58110)
default:return b(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return mr.create(e.compositeFilter.filters.map(e=>Ws(e)),function(e){switch(e){case"AND":return"and"
case"OR":return"or"
default:return b(1026)}}(e.compositeFilter.op))}(e):b(30097,{filter:e})}function Hs(e){return _s[e]}function Qs(e){return Ss[e]}function Js(e){return Es[e]}function Ys(e){return{fieldPath:e.canonicalString()}}function Xs(e){return W.fromServerFormat(e.fieldPath)}function Zs(e){return e instanceof pr?function(e){if("=="===e.op){if(Qn(e.value))return{unaryFilter:{field:Ys(e.field),op:"IS_NAN"}}
if(Hn(e.value))return{unaryFilter:{field:Ys(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Qn(e.value))return{unaryFilter:{field:Ys(e.field),op:"IS_NOT_NAN"}}
if(Hn(e.value))return{unaryFilter:{field:Ys(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ys(e.field),op:Qs(e.op),value:e.value}}}(e):e instanceof mr?function(e){const t=e.getFilters().map(e=>Zs(e))
return 1===t.length?t[0]:{compositeFilter:{op:Js(e.op),filters:t}}}(e):b(54877,{filter:e})}function eo(e){const t=[]
return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function to(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}class no{constructor(e,t,n,r,i=ce.min(),s=ce.min(),o=mn.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new no(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new no(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new no(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new no(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}class ro{constructor(e){this.yt=e}}function io(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:so(t.readTime),hasCommittedMutations:t.hasCommittedMutations}
if(t.isFoundDocument())r.document=function(e,t){return{name:Os(e,t.key),fields:t.data.value.mapValue.fields,updateTime:As(e,t.version.toTimestamp()),createTime:As(e,t.createTime.toTimestamp())}}(e.yt,t)
else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:oo(t.version)}
else{if(!t.isUnknownDocument())return b(57904,{document:t})
r.unknownDocument={path:n.path.toArray(),version:oo(t.version)}}return r}function so(e){const t=e.toTimestamp()
return[t.seconds,t.nanoseconds]}function oo(e){const t=e.toTimestamp()
return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function ao(e){const t=new ae(e.seconds,e.nanoseconds)
return ce.fromTimestamp(t)}function co(e,t){const n=(t.baseMutations||[]).map(t=>Us(e.yt,t))
for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s]
if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1]
e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map(t=>Us(e.yt,t)),i=ae.fromMillis(t.localWriteTimeMs)
return new Ji(t.batchId,i,n,r)}function uo(e){const t=ao(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?ao(e.lastLimboFreeSnapshotVersion):ce.min()
let r
return r=function(e){return void 0!==e.documents}(e.query)?function(e){const t=e.documents.length
return _(1===t,1966,{count:t}),Kr(Ur(Fs(e.documents[0])))}(e.query):function(e){return Kr(Ks(e))}(e.query),new no(r,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,mn.fromBase64String(e.resumeToken))}function lo(e,t){const n=oo(t.snapshotVersion),r=oo(t.lastLimboFreeSnapshotVersion)
let i
i=Fr(t.target)?$s(e.yt,t.target):zs(e.yt,t.target).ft
const s=t.resumeToken.toBase64()
return{targetId:t.targetId,canonicalId:Mr(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function ho(e){const t=Ks({parent:e.parent,structuredQuery:e.structuredQuery})
return"LAST"===e.limitType?Jr(t,t.limit,"L"):t}function fo(e,t){return new Xi(t.largestBatchId,Us(e.yt,t.overlayMutation))}function po(e,t){const n=t.path.lastSegment()
return[e,Ge(t.path.popLast()),n]}function mo(e,t,n,r){return{indexId:e,uid:t,sequenceNumber:n,readTime:oo(r.readTime),documentKey:Ge(r.documentKey.path),largestBatchId:r.largestBatchId}}class go{getBundleMetadata(e,t){return yo(e).get(t).next(e=>{if(e)return function(e){return{id:e.bundleId,createTime:ao(e.createTime),version:e.version}}(e)})}saveBundleMetadata(e,t){return yo(e).put(function(e){return{bundleId:e.id,createTime:oo(xs(e.createTime)),version:e.version}}(t))}getNamedQuery(e,t){return vo(e).get(t).next(e=>{if(e)return function(e){return{name:e.name,query:ho(e.bundledQuery),readTime:ao(e.readTime)}}(e)})}saveNamedQuery(e,t){return vo(e).put(function(e){return{name:e.name,readTime:oo(xs(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function yo(e){return tn(e,Ct)}function vo(e){return tn(e,kt)}class bo{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const n=t.uid||""
return new bo(e,n)}getOverlay(e,t){return wo(e).get(po(this.userId,t)).next(e=>e?fo(this.serializer,e):null)}getOverlays(e,t){const n=li()
return Ie.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){const r=[]
return n.forEach((n,i)=>{const s=new Xi(t,i)
r.push(this.St(e,s))}),Ie.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set
t.forEach(e=>r.add(Ge(e.getCollectionPath())))
const i=[]
return r.forEach(t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0)
i.push(wo(e).Z(Bt,r))}),Ie.waitFor(i)}getOverlaysForCollection(e,t,n){const r=li(),i=Ge(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0)
return wo(e).J(Bt,s).next(e=>{for(const t of e){const e=fo(this.serializer,t)
r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){const i=li()
let s
const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0)
return wo(e).ee({index:$t,range:o},(e,t,n)=>{const o=fo(this.serializer,t)
i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()}).next(()=>i)}St(e,t){return wo(e).put(function(e,t,n){const[r,i,s]=po(t,n.mutation.key)
return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Bs(e.yt,n.mutation)}}(this.serializer,this.userId,t))}}function wo(e){return tn(e,qt)}class _o{bt(e){return tn(e,Gt)}getSessionToken(e){return this.bt(e).get("sessionToken").next(e=>{const t=e?.value
return t?mn.fromUint8Array(t):mn.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}class So{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5)
else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0)
else if("integerValue"in e)this.Ft(t,15),t.Mt(vn(e.integerValue))
else if("doubleValue"in e){const n=vn(e.doubleValue)
isNaN(n)?this.Ft(t,13):(this.Ft(t,15),Ue(n)?t.Mt(0):t.Mt(n))}else if("timestampValue"in e){let n=e.timestampValue
this.Ft(t,20),"string"==typeof n&&(n=yn(n)),t.xt(`${n.seconds||""}`),t.Mt(n.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t)
else if("bytesValue"in e)this.Ft(t,30),t.Bt(bn(e.bytesValue)),this.Nt(t)
else if("referenceValue"in e)this.Lt(e.referenceValue,t)
else if("geoPointValue"in e){const n=e.geoPointValue
this.Ft(t,45),t.Mt(n.latitude||0),t.Mt(n.longitude||0)}else"mapValue"in e?Zn(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):Yn(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Qt(e.arrayValue,t),this.Nt(t)):b(19022,{$t:e})}Ot(e,t){this.Ft(t,25),this.Ut(e,t)}Ut(e,t){t.xt(e)}qt(e,t){const n=e.fields||{}
this.Ft(t,55)
for(const r of Object.keys(n))this.Ot(r,t),this.Ct(n[r],t)}kt(e,t){const n=e.fields||{}
this.Ft(t,53)
const r=Mn,i=n[r].arrayValue?.values?.length||0
this.Ft(t,15),t.Mt(vn(i)),this.Ot(r,t),this.Ct(n[r],t)}Qt(e,t){const n=e.values||[]
this.Ft(t,50)
for(const r of n)this.Ct(r,t)}Lt(e,t){this.Ft(t,37),H.fromName(e).path.forEach(e=>{this.Ft(t,60),this.Ut(e,t)})}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}So.Kt=new So
const Eo=255
function Io(e){if(0===e)return 8
let t=0
return e>>4||(t+=4,e<<=4),e>>6||(t+=2,e<<=2),e>>7||(t+=1),t}function To(e){const t=64-function(e){let t=0
for(let n=0;n<8;++n){const r=Io(255&e[n])
if(t+=r,8!==r)break}return t}(e)
return Math.ceil(t/8)}class Ao{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){const t=e[Symbol.iterator]()
let n=t.next()
for(;!n.done;)this.Gt(n.value),n=t.next()
this.zt()}jt(e){const t=e[Symbol.iterator]()
let n=t.next()
for(;!n.done;)this.Jt(n.value),n=t.next()
this.Ht()}Yt(e){for(const t of e){const e=t.charCodeAt(0)
if(e<128)this.Gt(e)
else if(e<2048)this.Gt(960|e>>>6),this.Gt(128|63&e)
else if(t<"\ud800"||"\udbff"<t)this.Gt(480|e>>>12),this.Gt(128|63&e>>>6),this.Gt(128|63&e)
else{const e=t.codePointAt(0)
this.Gt(240|e>>>18),this.Gt(128|63&e>>>12),this.Gt(128|63&e>>>6),this.Gt(128|63&e)}}this.zt()}Zt(e){for(const t of e){const e=t.charCodeAt(0)
if(e<128)this.Jt(e)
else if(e<2048)this.Jt(960|e>>>6),this.Jt(128|63&e)
else if(t<"\ud800"||"\udbff"<t)this.Jt(480|e>>>12),this.Jt(128|63&e>>>6),this.Jt(128|63&e)
else{const e=t.codePointAt(0)
this.Jt(240|e>>>18),this.Jt(128|63&e>>>12),this.Jt(128|63&e>>>6),this.Jt(128|63&e)}}this.Ht()}Xt(e){const t=this.en(e),n=To(t)
this.tn(1+n),this.buffer[this.position++]=255&n
for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}nn(e){const t=this.en(e),n=To(t)
this.tn(1+n),this.buffer[this.position++]=~(255&n)
for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}rn(){this.sn(Eo),this.sn(255)}_n(){this.an(Eo),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=function(e){const t=new DataView(new ArrayBuffer(8))
return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=!!(128&t[0])
t[0]^=n?255:128
for(let r=1;r<t.length;++r)t[r]^=n?255:0
return t}Gt(e){const t=255&e
0===t?(this.sn(0),this.sn(255)):t===Eo?(this.sn(Eo),this.sn(0)):this.sn(t)}Jt(e){const t=255&e
0===t?(this.an(0),this.an(255)):t===Eo?(this.an(Eo),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position
if(t<=this.buffer.length)return
let n=2*this.buffer.length
n<t&&(n=t)
const r=new Uint8Array(n)
r.set(this.buffer),this.buffer=r}}class Co{constructor(e){this.cn=e}Bt(e){this.cn.Wt(e)}xt(e){this.cn.Yt(e)}Mt(e){this.cn.Xt(e)}vt(){this.cn.rn()}}class ko{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class xo{constructor(){this.cn=new Ao,this.ln=new Co(this.cn),this.hn=new ko(this.cn)}seed(e){this.cn.seed(e)}Pn(e){return 0===e?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}class Do{constructor(e,t,n,r){this.Tn=e,this.In=t,this.En=n,this.dn=r}An(){const e=this.dn.length,t=0===e||255===this.dn[e-1]?e+1:e,n=new Uint8Array(t)
return n.set(this.dn,0),t!==e?n.set([0],this.dn.length):++n[n.length-1],new Do(this.Tn,this.In,this.En,n)}Rn(e,t,n){return{indexId:this.Tn,uid:e,arrayValue:Oo(this.En),directionalValue:Oo(this.dn),orderedDocumentKey:Oo(t),documentKey:n.path.toArray()}}Vn(e,t,n){const r=this.Rn(e,t,n)
return[r.indexId,r.uid,r.arrayValue,r.directionalValue,r.orderedDocumentKey,r.documentKey]}}function Ro(e,t){let n=e.Tn-t.Tn
return 0!==n?n:(n=No(e.En,t.En),0!==n?n:(n=No(e.dn,t.dn),0!==n?n:H.comparator(e.In,t.In)))}function No(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n]
if(0!==r)return r}return e.length-t.length}function Oo(e){return o.isSafariOrWebkit()?function(e){let t=""
for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n])
return t}(e):e}function Mo(e){return"string"!=typeof e?e:function(e){const t=new Uint8Array(e.length)
for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)
return t}(e)}class Po{constructor(e){this.mn=new ln((e,t)=>W.comparator(e.field,t.field)),this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.fn=e.orderBy,this.gn=[]
for(const t of e.filters){const e=t
e.isInequality()?this.mn=this.mn.add(e):this.gn.push(e)}}get pn(){return this.mn.size>1}yn(e){if(_(e.collectionGroup===this.collectionId,49279),this.pn)return!1
const t=he(e)
if(void 0!==t&&!this.wn(t))return!1
const n=de(e)
let r=new Set,i=0,s=0
for(;i<n.length&&this.wn(n[i]);++i)r=r.add(n[i].fieldPath.canonicalString())
if(i===n.length)return!0
if(this.mn.size>0){const e=this.mn.getIterator().getNext()
if(!r.has(e.field.canonicalString())){const t=n[i]
if(!this.Sn(e,t)||!this.bn(this.fn[s++],t))return!1}++i}for(;i<n.length;++i){const e=n[i]
if(s>=this.fn.length||!this.bn(this.fn[s++],e))return!1}return!0}Dn(){if(this.pn)return null
let e=new ln(W.comparator)
const t=[]
for(const n of this.gn)if(!n.field.isKeyField())if("array-contains"===n.op||"array-contains-any"===n.op)t.push(new pe(n.field,2))
else{if(e.has(n.field))continue
e=e.add(n.field),t.push(new pe(n.field,0))}for(const n of this.fn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new pe(n.field,"asc"===n.dir?0:1)))
return new le(le.UNKNOWN_ID,this.collectionId,t,ge.empty())}wn(e){for(const t of this.gn)if(this.Sn(t,e))return!0
return!1}Sn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1
const n="array-contains"===e.op||"array-contains-any"===e.op
return 2===t.kind===n}bn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}function Fo(e){if(_(e instanceof pr||e instanceof mr,20012),e instanceof pr){if(e instanceof xr){const t=e.value.arrayValue?.values?.map(t=>pr.create(e.field,"==",t))||[]
return mr.create(t,"or")}return e}const t=e.filters.map(e=>Fo(e))
return mr.create(t,e.op)}function Lo(e){if(0===e.getFilters().length)return[]
const t=Bo(Fo(e))
return _(Vo(t),7391),jo(t)||qo(t)?[t]:t.getFilters()}function jo(e){return e instanceof pr}function qo(e){return e instanceof mr&&vr(e)}function Vo(e){return jo(e)||qo(e)||function(e){if(e instanceof mr&&yr(e)){for(const t of e.getFilters())if(!jo(t)&&!qo(t))return!1
return!0}return!1}(e)}function Bo(e){if(_(e instanceof pr||e instanceof mr,34018),e instanceof pr)return e
if(1===e.filters.length)return Bo(e.filters[0])
const t=e.filters.map(e=>Bo(e))
let n=mr.create(t,e.op)
return n=zo(n),Vo(n)?n:(_(n instanceof mr,64498),_(gr(n),40251),_(n.filters.length>1,57927),n.filters.reduce((e,t)=>Uo(e,t)))}function Uo(e,t){let n
return _(e instanceof pr||e instanceof mr,38388),_(t instanceof pr||t instanceof mr,25473),n=e instanceof pr?t instanceof pr?function(e,t){return mr.create([e,t],"and")}(e,t):$o(e,t):t instanceof pr?$o(t,e):function(e,t){if(_(e.filters.length>0&&t.filters.length>0,48005),gr(e)&&gr(t))return Sr(e,t.getFilters())
const n=yr(e)?e:t,r=yr(e)?t:e,i=n.filters.map(e=>Uo(e,r))
return mr.create(i,"or")}(e,t),zo(n)}function $o(e,t){if(gr(t))return Sr(t,e.getFilters())
{const n=t.filters.map(t=>Uo(e,t))
return mr.create(n,"or")}}function zo(e){if(_(e instanceof pr||e instanceof mr,11850),e instanceof pr)return e
const t=e.getFilters()
if(1===t.length)return zo(t[0])
if(br(e))return e
const n=t.map(e=>zo(e)),r=[]
return n.forEach(t=>{t instanceof pr?r.push(t):t instanceof mr&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:mr.create(r,e.op)}class Go{constructor(){this.Cn=new Ko}addToCollectionParentIndex(e,t){return this.Cn.add(t),Ie.resolve()}getCollectionParents(e,t){return Ie.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return Ie.resolve()}deleteFieldIndex(e,t){return Ie.resolve()}deleteAllFieldIndexes(e){return Ie.resolve()}createTargetIndexes(e,t){return Ie.resolve()}getDocumentsMatchingTarget(e,t){return Ie.resolve(null)}getIndexType(e,t){return Ie.resolve(0)}getFieldIndexes(e,t){return Ie.resolve([])}getNextCollectionGroupToUpdate(e){return Ie.resolve(null)}getMinOffset(e,t){return Ie.resolve(be.min())}getMinOffsetFromCollectionGroup(e,t){return Ie.resolve(be.min())}updateCollectionGroup(e,t,n){return Ie.resolve()}updateIndexEntries(e,t){return Ie.resolve()}}class Ko{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new ln(G.comparator),i=!r.has(n)
return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]
return r&&r.has(n)}getEntries(e){return(this.index[e]||new ln(G.comparator)).toArray()}}const Wo="IndexedDbIndexManager",Ho=new Uint8Array(0)
class Qo{constructor(e,t){this.databaseId=t,this.vn=new Ko,this.Fn=new ii(e=>Mr(e),(e,t)=>Pr(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const n=t.lastSegment(),r=t.popLast()
e.addOnCommittedListener(()=>{this.vn.add(t)})
const i={collectionId:n,parent:Ge(r)}
return Jo(e).put(i)}return Ie.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[U(t),""],!1,!0)
return Jo(e).J(r).next(e=>{for(const r of e){if(r.collectionId!==t)break
n.push(He(r.parent))}return n})}addFieldIndex(e,t){const n=Xo(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])}}(t)
delete r.indexId
const i=n.add(r)
if(t.indexState){const n=Zo(e)
return i.next(e=>{n.put(mo(e,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=Xo(e),r=Zo(e),i=Yo(e)
return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Xo(e),n=Yo(e),r=Zo(e)
return t.Z().next(()=>n.Z()).next(()=>r.Z())}createTargetIndexes(e,t){return Ie.forEach(this.Mn(t),t=>this.getIndexType(e,t).next(n=>{if(0===n||1===n){const n=new Po(t).Dn()
if(null!=n)return this.addFieldIndex(e,n)}}))}getDocumentsMatchingTarget(e,t){const n=Yo(e)
let r=!0
const i=new Map
return Ie.forEach(this.Mn(t),t=>this.xn(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=mi()
const r=[]
return Ie.forEach(i,(i,s)=>{m(Wo,`Using index ${function(e){return`id=${e.indexId}|cg=${e.collectionGroup}|f=${e.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")}`}(i)} to execute ${Mr(t)}`)
const o=function(e,t){const n=he(t)
if(void 0===n)return null
for(const r of Lr(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[]
case"array-contains":return[r.value]}return null}(s,i),a=function(e,t){const n=new Map
for(const r of de(t))for(const t of Lr(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value)
break
case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),c=function(e,t){const n=[]
let r=!0
for(const i of de(t)){const t=0===i.kind?jr(e,i.fieldPath,e.startAt):qr(e,i.fieldPath,e.startAt)
n.push(t.value),r&&(r=t.inclusive)}return new cr(n,r)}(s,i),u=function(e,t){const n=[]
let r=!0
for(const i of de(t)){const t=0===i.kind?qr(e,i.fieldPath,e.endAt):jr(e,i.fieldPath,e.endAt)
n.push(t.value),r&&(r=t.inclusive)}return new cr(n,r)}(s,i),l=this.On(i,s,c),h=this.On(i,s,u),d=this.Nn(i,s,a),f=this.Bn(i.indexId,o,l,c.inclusive,h,u.inclusive,d)
return Ie.forEach(f,i=>n.Y(i,t.limit).next(t=>{t.forEach(t=>{const n=H.fromSegments(t.documentKey)
e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return Ie.resolve(null)})}Mn(e){let t=this.Fn.get(e)
return t||(t=0===e.filters.length?[e]:Lo(mr.create(e.filters,"and")).map(t=>Or(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.Fn.set(e,t),t)}Bn(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[]
for(let l=0;l<a;++l){const a=t?this.Ln(t[l/c]):Ho,h=this.kn(e,a,n[l%c],r),d=this.qn(e,a,i[l%c],s),f=o.map(t=>this.kn(e,a,t,!0))
u.push(...this.createRange(h,d,f))}return u}kn(e,t,n,r){const i=new Do(e,H.empty(),t,n)
return r?i:i.An()}qn(e,t,n,r){const i=new Do(e,H.empty(),t,n)
return r?i.An():i}xn(e,t){const n=new Po(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment()
return this.getFieldIndexes(e,r).next(e=>{let t=null
for(const r of e)n.yn(r)&&(!t||r.fields.length>t.fields.length)&&(t=r)
return t})}getIndexType(e,t){let n=2
const r=this.Mn(t)
return Ie.forEach(r,t=>this.xn(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new ln(W.comparator),n=!1
for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field))
for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field))
return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>function(e){return null!==e.limit}(t)&&r.length>1&&2===n?1:n)}Qn(e,t){const n=new xo
for(const r of de(e)){const e=t.data.field(r.fieldPath)
if(null==e)return null
const i=n.Pn(r.kind)
So.Kt.Dt(e,i)}return n.un()}Ln(e){const t=new xo
return So.Kt.Dt(e,t.Pn(0)),t.un()}$n(e,t){const n=new xo
return So.Kt.Dt(Gn(this.databaseId,t),n.Pn(function(e){const t=de(e)
return 0===t.length?0:t[t.length-1].kind}(e))),n.un()}Nn(e,t,n){if(null===n)return[]
let r=[]
r.push(new xo)
let i=0
for(const s of de(e)){const e=n[i++]
for(const n of r)if(this.Un(t,s.fieldPath)&&Wn(e))r=this.Kn(r,s,e)
else{const t=n.Pn(s.kind)
So.Kt.Dt(e,t)}}return this.Wn(r)}On(e,t,n){return this.Nn(e,t,n.position)}Wn(e){const t=[]
for(let n=0;n<e.length;++n)t[n]=e[n].un()
return t}Kn(e,t,n){const r=[...e],i=[]
for(const s of n.arrayValue.values||[])for(const e of r){const n=new xo
n.seed(e.un()),So.Kt.Dt(s,n.Pn(t.kind)),i.push(n)}return i}Un(e,t){return!!e.filters.find(e=>e instanceof pr&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){const n=Xo(e),r=Zo(e)
return(t?n.J(Dt,IDBKeyRange.bound(t,t)):n.J()).next(e=>{const t=[]
return Ie.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){const n=t?new ge(t.sequenceNumber,new be(ao(t.readTime),new H(He(t.documentKey)),t.largestBatchId)):ge.empty(),r=e.fields.map(([e,t])=>new pe(W.fromServerFormat(e),t))
return new le(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber
return 0!==n?n:F(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){const r=Xo(e),i=Zo(e)
return this.Gn(e).next(e=>r.J(Dt,IDBKeyRange.bound(t,t)).next(t=>Ie.forEach(t,t=>i.put(mo(t.indexId,this.uid,e,n)))))}updateIndexEntries(e,t){const n=new Map
return Ie.forEach(t,(t,r)=>{const i=n.get(t.collectionGroup)
return(i?Ie.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),Ie.forEach(i,n=>this.zn(e,t,n).next(t=>{const i=this.jn(r,n)
return t.isEqual(i)?Ie.resolve():this.Jn(e,r,n,t,i)}))))})}Hn(e,t,n,r){return Yo(e).put(r.Rn(this.uid,this.$n(n,t.key),t.key))}Yn(e,t,n,r){return Yo(e).delete(r.Vn(this.uid,this.$n(n,t.key),t.key))}zn(e,t,n){const r=Yo(e)
let i=new ln(Ro)
return r.ee({index:Lt,range:IDBKeyRange.only([n.indexId,this.uid,Oo(this.$n(n,t))])},(e,r)=>{i=i.add(new Do(n.indexId,t,Mo(r.arrayValue),Mo(r.directionalValue)))}).next(()=>i)}jn(e,t){let n=new ln(Ro)
const r=this.Qn(t,e)
if(null==r)return n
const i=he(t)
if(null!=i){const s=e.data.field(i.fieldPath)
if(Wn(s))for(const i of s.arrayValue.values||[])n=n.add(new Do(t.indexId,e.key,this.Ln(i),r))}else n=n.add(new Do(t.indexId,e.key,Ho,r))
return n}Jn(e,t,n,r,i){m(Wo,"Updating index entries for document '%s'",t.key)
const s=[]
return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator()
let a=dn(s),c=dn(o)
for(;a||c;){let e=!1,t=!1
if(a&&c){const r=n(a,c)
r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0
e?(r(c),c=dn(o)):t?(i(a),a=dn(s)):(a=dn(s),c=dn(o))}}(r,i,Ro,r=>{s.push(this.Hn(e,t,n,r))},r=>{s.push(this.Yn(e,t,n,r))}),Ie.waitFor(s)}Gn(e){let t=1
return Zo(e).ee({index:Ot,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>Ro(e,t)).filter((e,t,n)=>!t||0!==Ro(e,n[t-1]))
const r=[]
r.push(e)
for(const s of n){const n=Ro(s,e),i=Ro(s,t)
if(0===n)r[0]=e.An()
else if(n>0&&i<0)r.push(s),r.push(s.An())
else if(i>0)break}r.push(t)
const i=[]
for(let s=0;s<r.length;s+=2){if(this.Zn(r[s],r[s+1]))return[]
const e=r[s].Vn(this.uid,Ho,H.empty()),t=r[s+1].Vn(this.uid,Ho,H.empty())
i.push(IDBKeyRange.bound(e,t))}return i}Zn(e,t){return Ro(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(ea)}getMinOffset(e,t){return Ie.mapArray(this.Mn(t),t=>this.xn(e,t).next(e=>e||b(44426))).next(ea)}}function Jo(e){return tn(e,It)}function Yo(e){return tn(e,Pt)}function Xo(e){return tn(e,xt)}function Zo(e){return tn(e,Rt)}function ea(e){_(0!==e.length,28825)
let t=e[0].indexState.offset,n=t.largestBatchId
for(let r=1;r<e.length;r++){const i=e[r].indexState.offset
we(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new be(t.readTime,t.documentKey,n)}const ta={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},na=41943040
class ra{static withCacheSize(e){return new ra(e,ra.DEFAULT_COLLECTION_PERCENTILE,ra.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}function ia(e,t,n){const r=e.store(Ze),i=e.store(ot),s=[],o=IDBKeyRange.only(n.batchId)
let a=0
const c=r.ee({range:o},(e,t,n)=>(a++,n.delete()))
s.push(c.next(()=>{_(1===a,47070,{batchId:n.batchId})}))
const u=[]
for(const l of n.mutations){const e=it(t,l.key.path,n.batchId)
s.push(i.delete(e)),u.push(l.key)}return Ie.waitFor(s).next(()=>u)}function sa(e){if(!e)return 0
let t
if(e.document)t=e.document
else if(e.unknownDocument)t=e.unknownDocument
else{if(!e.noDocument)throw b(14731)
t=e.noDocument}return JSON.stringify(t).length}ra.DEFAULT_COLLECTION_PERCENTILE=10,ra.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ra.DEFAULT=new ra(na,ra.DEFAULT_COLLECTION_PERCENTILE,ra.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ra.DISABLED=new ra(-1,0,0)
class oa{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Xn={}}static wt(e,t,n,r){_(""!==e.uid,64387)
const i=e.isAuthenticated()?e.uid:""
return new oa(i,t,n,r)}checkEmpty(e){let t=!0
const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY])
return ca(e).ee({index:tt,range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){const i=ua(e),s=ca(e)
return s.add({}).next(o=>{_("number"==typeof o,49019)
const a=new Ji(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map(t=>Bs(e.yt,t)),i=n.mutations.map(t=>Bs(e.yt,t))
return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,a),u=[]
let l=new ln((e,t)=>F(e.canonicalString(),t.canonicalString()))
for(const e of r){const t=it(this.userId,e.key.path,o)
l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,st))}return l.forEach(t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Xn[o]=a.keys()}),Ie.waitFor(u).next(()=>a)})}lookupMutationBatch(e,t){return ca(e).get(t).next(e=>e?(_(e.userId===this.userId,48,"Unexpected user for mutation batch",{userId:e.userId,batchId:t}),co(this.serializer,e)):null)}er(e,t){return this.Xn[t]?Ie.resolve(this.Xn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys()
return this.Xn[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n])
let i=null
return ca(e).ee({index:tt,range:r},(e,t,r)=>{t.userId===this.userId&&(_(t.batchId>=n,47524,{tr:n}),i=co(this.serializer,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY])
let n=Ve
return ca(e).ee({index:tt,range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Ve],[this.userId,Number.POSITIVE_INFINITY])
return ca(e).J(tt,t).next(e=>e.map(e=>co(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=rt(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[]
return ua(e).ee({range:r},(n,r,s)=>{const[o,a,c]=n,u=He(a)
if(o===this.userId&&t.path.isEqual(u))return ca(e).get(c).next(e=>{if(!e)throw b(61480,{nr:n,batchId:c})
_(e.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:e.userId,batchId:c}),i.push(co(this.serializer,e))})
s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ln(F)
const r=[]
return t.forEach(t=>{const i=rt(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=ua(e).ee({range:s},(e,r,i)=>{const[s,o,a]=e,c=He(o)
s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()})
r.push(o)}),Ie.waitFor(r).next(()=>this.rr(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=rt(this.userId,n),s=IDBKeyRange.lowerBound(i)
let o=new ln(F)
return ua(e).ee({range:s},(e,t,i)=>{const[s,a,c]=e,u=He(a)
s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()}).next(()=>this.rr(e,o))}rr(e,t){const n=[],r=[]
return t.forEach(t=>{r.push(ca(e).get(t).next(e=>{if(null===e)throw b(35274,{batchId:t})
_(e.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:e.userId,batchId:t}),n.push(co(this.serializer,e))}))}),Ie.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return ia(e.le,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.ir(t.batchId)}),Ie.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}ir(e){delete this.Xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return Ie.resolve()
const n=IDBKeyRange.lowerBound(function(e){return[e]}(this.userId)),r=[]
return ua(e).ee({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=He(e[1])
r.push(t)}else n.done()}).next(()=>{_(0===r.length,56720,{sr:r.map(e=>e.canonicalString())})})})}containsKey(e,t){return aa(e,this.userId,t)}_r(e){return la(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:Ve,lastStreamToken:""})}}function aa(e,t,n){const r=rt(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r)
let o=!1
return ua(e).ee({range:s,X:!0},(e,n,r)=>{const[s,a,c]=e
s===t&&a===i&&(o=!0),r.done()}).next(()=>o)}function ca(e){return tn(e,Ze)}function ua(e){return tn(e,ot)}function la(e){return tn(e,Xe)}class ha{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ha(0)}static cr(){return new ha(-1)}}class da{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.lr(e).next(t=>{const n=new ha(t.highestTargetId)
return t.highestTargetId=n.next(),this.hr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.lr(e).next(e=>ce.fromTimestamp(new ae(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.lr(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.lr(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.hr(e,r)))}addTargetData(e,t){return this.Pr(e,t).next(()=>this.lr(e).next(n=>(n.targetCount+=1,this.Tr(t,n),this.hr(e,n))))}updateTargetData(e,t){return this.Pr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>fa(e).delete(t.targetId)).next(()=>this.lr(e)).next(t=>(_(t.targetCount>0,8065),t.targetCount-=1,this.hr(e,t)))}removeTargets(e,t,n){let r=0
const i=[]
return fa(e).ee((s,o)=>{const a=uo(o)
a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))}).next(()=>Ie.waitFor(i)).next(()=>r)}forEachTarget(e,t){return fa(e).ee((e,n)=>{const r=uo(n)
t(r)})}lr(e){return pa(e).get(St).next(e=>(_(null!==e,2888),e))}hr(e,t){return pa(e).put(St,t)}Pr(e,t){return fa(e).put(lo(this.serializer,t))}Tr(e,t){let n=!1
return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.lr(e).next(e=>e.targetCount)}getTargetData(e,t){const n=Mr(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY])
let i=null
return fa(e).ee({range:r,index:gt},(e,n,r)=>{const s=uo(n)
Pr(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){const r=[],i=ma(e)
return t.forEach(t=>{const s=Ge(t.path)
r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))}),Ie.waitFor(r)}removeMatchingKeys(e,t,n){const r=ma(e)
return Ie.forEach(t,t=>{const i=Ge(t.path)
return Ie.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=ma(e),r=IDBKeyRange.bound([t],[t+1],!1,!0)
return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=ma(e)
let i=mi()
return r.ee({range:n,X:!0},(e,t,n)=>{const r=He(e[1]),s=new H(r)
i=i.add(s)}).next(()=>i)}containsKey(e,t){const n=Ge(t.path),r=IDBKeyRange.bound([n],[U(n)],!1,!0)
let i=0
return ma(e).ee({index:wt,X:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}At(e,t){return fa(e).get(t).next(e=>e?uo(e):null)}}function fa(e){return tn(e,mt)}function pa(e){return tn(e,Et)}function ma(e){return tn(e,vt)}const ga="LruGarbageCollector",ya=1048576
function va([e,t],[n,r]){const i=F(e,n)
return 0===i?F(t,r):i}class ba{constructor(e){this.Ir=e,this.buffer=new ln(va),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()]
if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t)
else{const e=this.buffer.last()
va(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class wa{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Vr(e){m(ga,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null
try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Re(e)?m(ga,"Ignoring IndexedDB error during garbage collection: ",e):await Ee(e)}await this.Vr(3e5)})}}class _a{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return Ie.resolve(qe.ce)
const n=new ba(t)
return this.mr.forEachTarget(e,e=>n.Ar(e.sequenceNumber)).next(()=>this.mr.pr(e,e=>n.Ar(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(m("LruGarbageCollector","Garbage collection skipped; disabled"),Ie.resolve(ta)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(m("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ta):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,r,i,o,a,c,u
const l=Date.now()
return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(m("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,o=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(u=Date.now(),p()<=s.LogLevel.DEBUG&&m("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-l}ms\n\tDetermined least recently used ${r} in `+(a-o)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),Ie.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}function Sa(e,t){return new _a(e,t)}class Ea{constructor(e,t){this.db=e,this.garbageCollector=Sa(this,t)}gr(e){const t=this.wr(e)
return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}wr(e){let t=0
return this.pr(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}pr(e,t){return this.Sr(e,(e,n)=>t(n))}addReference(e,t,n){return Ia(e,n)}removeReference(e,t,n){return Ia(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Ia(e,t)}br(e,t){return function(e,t){let n=!1
return la(e).te(r=>aa(e,r,t).next(e=>(e&&(n=!0),Ie.resolve(!e)))).next(()=>n)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[]
let i=0
return this.Sr(e,(s,o)=>{if(o<=t){const t=this.br(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,ce.min()),ma(e).delete(function(e){return[0,Ge(e.path)]}(s))))})
r.push(t)}}).next(()=>Ie.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber)
return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Ia(e,t)}Sr(e,t){const n=ma(e)
let r,i=qe.ce
return n.ee({index:wt},([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==qe.ce&&t(new H(He(r)),i),i=o,r=s):i=qe.ce}).next(()=>{i!==qe.ce&&t(new H(He(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ia(e,t){return ma(e).put(function(e,t){return{targetId:0,path:Ge(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}class Ta{constructor(){this.changes=new ii(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ar.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied()
const n=this.changes.get(t)
return void 0!==n?Ie.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}class Aa{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Da(e).put(n)}removeEntry(e,t,n){return Da(e).delete(function(e,t){const n=e.path.toArray()
return[n.slice(0,n.length-2),n[n.length-2],so(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Dr(e,n)))}getEntry(e,t){let n=ar.newInvalidDocument(t)
return Da(e).ee({index:ut,range:IDBKeyRange.only(Ra(t))},(e,r)=>{n=this.Cr(t,r)}).next(()=>n)}vr(e,t){let n={size:0,document:ar.newInvalidDocument(t)}
return Da(e).ee({index:ut,range:IDBKeyRange.only(Ra(t))},(e,r)=>{n={document:this.Cr(t,r),size:sa(r)}}).next(()=>n)}getEntries(e,t){let n=oi()
return this.Fr(e,t,(e,t)=>{const r=this.Cr(e,t)
n=n.insert(e,r)}).next(()=>n)}Mr(e,t){let n=oi(),r=new an(H.comparator)
return this.Fr(e,t,(e,t)=>{const i=this.Cr(e,t)
n=n.insert(e,i),r=r.insert(e,sa(t))}).next(()=>({documents:n,Or:r}))}Fr(e,t,n){if(t.isEmpty())return Ie.resolve()
let r=new ln(Oa)
t.forEach(e=>r=r.add(e))
const i=IDBKeyRange.bound(Ra(r.first()),Ra(r.last())),s=r.getIterator()
let o=s.getNext()
return Da(e).ee({index:ut,range:i},(e,t,r)=>{const i=H.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId])
for(;o&&Oa(o,i)<0;)n(o,null),o=s.getNext()
o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.j(Ra(o)):r.done()}).next(()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,t,n,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),so(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""]
return Da(e).J(IDBKeyRange.bound(o,a,!0)).next(e=>{i?.incrementDocumentReadCount(e.length)
let n=oi()
for(const i of e){const e=this.Cr(H.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i)
e.isFoundDocument()&&(ei(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n})}getAllFromCollectionGroup(e,t,n,r){let i=oi()
const s=Na(t,n),o=Na(t,be.max())
return Da(e).ee({index:ht,range:IDBKeyRange.bound(s,o,!0)},(e,t,n)=>{const s=this.Cr(H.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t)
i=i.insert(s.key,s),i.size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new ka(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return xa(e).get(pt).next(e=>(_(!!e,20021),e))}Dr(e,t){return xa(e).put(pt,t)}Cr(e,t){if(t){const e=function(e,t){let n
if(t.document)n=Vs(e.yt,t.document,!!t.hasCommittedMutations)
else if(t.noDocument){const e=H.fromSegments(t.noDocument.path),r=ao(t.noDocument.readTime)
n=ar.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return b(56709)
{const e=H.fromSegments(t.unknownDocument.path),r=ao(t.unknownDocument.version)
n=ar.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new ae(e[0],e[1])
return ce.fromTimestamp(t)}(t.readTime)),n}(this.serializer,t)
if(!e.isNoDocument()||!e.version.isEqual(ce.min()))return e}return ar.newInvalidDocument(e)}}function Ca(e){return new Aa(e)}class ka extends Ta{constructor(e,t){super(),this.Nr=e,this.trackRemovals=t,this.Br=new ii(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[]
let n=0,r=new ln((e,t)=>F(e.canonicalString(),t.canonicalString()))
return this.changes.forEach((i,s)=>{const o=this.Br.get(i)
if(t.push(this.Nr.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=io(this.Nr.serializer,s)
r=r.add(i.path.popLast())
const c=sa(a)
n+=c-o.size,t.push(this.Nr.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=io(this.Nr.serializer,s.convertToNoDocument(ce.min()))
t.push(this.Nr.addEntry(e,i,n))}}),r.forEach(n=>{t.push(this.Nr.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.Nr.updateMetadata(e,n)),Ie.waitFor(t)}getFromCache(e,t){return this.Nr.vr(e,t).next(e=>(this.Br.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.Nr.Mr(e,t).next(({documents:e,Or:t})=>(t.forEach((t,n)=>{this.Br.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function xa(e){return tn(e,ft)}function Da(e){return tn(e,at)}function Ra(e){const t=e.path.toArray()
return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Na(e,t){const n=t.documentKey.path.toArray()
return[e,so(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Oa(e,t){const n=e.path.toArray(),r=t.path.toArray()
let i=0
for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=F(n[s],r[s]),i)return i
return i=F(n.length,r.length),i||(i=F(n[n.length-2],r[r.length-2]),i||F(n[n.length-1],r[r.length-1]))}class Ma{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}class Pa{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null
return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&Vi(n.mutation,e,fn.empty(),ae.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,mi()).next(()=>t))}getLocalViewOfDocuments(e,t,n=mi()){const r=li()
return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=ci()
return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=li()
return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,mi()))}populateOverlays(e,t,n){const r=[]
return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=oi()
const s=di(),o=di()
return t.forEach((e,t)=>{const o=n.get(t.key)
r.has(t.key)&&(void 0===o||o.mutation instanceof zi)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),Vi(o.mutation,t,o.mutation.getFieldMask(),ae.now())):s.set(t.key,fn.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>o.set(e,new Ma(t,s.get(e)??null))),o))}recalculateAndSaveOverlays(e,t){const n=di()
let r=new an((e,t)=>e-t),i=mi()
return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const i of e)i.keys().forEach(e=>{const s=t.get(e)
if(null===s)return
let o=n.get(e)||fn.empty()
o=i.applyToLocalView(s,o),n.set(e,o)
const a=(r.get(i.batchId)||mi()).add(e)
r=r.insert(i.batchId,a)})}).next(()=>{const s=[],o=r.getReverseIterator()
for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=hi()
c.forEach(e=>{if(!i.has(e)){const r=ji(t.get(e),n.get(e))
null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Ie.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return H.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):zr(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Ie.resolve(li())
let o=ue,a=i
return s.next(t=>Ie.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Ie.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,mi())).next(e=>({batchId:o,changes:ui(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new H(t)).next(e=>{let t=ci()
return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup
let s=ci()
return this.indexManager.getCollectionParents(e,i).next(o=>Ie.forEach(o,o=>{const a=function(e,t){return new Vr(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(i))
return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i
return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{const r=n.getKey()
null===e.get(r)&&(e=e.insert(r,ar.newInvalidDocument(r)))})
let n=ci()
return e.forEach((e,r)=>{const s=i.get(e)
void 0!==s&&Vi(s.mutation,r,fn.empty(),ae.now()),ei(t,r)&&(n=n.insert(e,r))}),n})}}class Fa{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return Ie.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:xs(e.createTime)}}(t)),Ie.resolve()}getNamedQuery(e,t){return Ie.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(e){return{name:e.name,query:ho(e.bundledQuery),readTime:xs(e.readTime)}}(t)),Ie.resolve()}}class La{constructor(){this.overlays=new an(H.comparator),this.qr=new Map}getOverlay(e,t){return Ie.resolve(this.overlays.get(t))}getOverlays(e,t){const n=li()
return Ie.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.St(e,t,r)}),Ie.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.qr.get(n)
return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.qr.delete(n)),Ie.resolve()}getOverlaysForCollection(e,t,n){const r=li(),i=t.length+1,s=new H(t.child("")),o=this.overlays.getIteratorFrom(s)
for(;o.hasNext();){const e=o.getNext().value,s=e.getKey()
if(!t.isPrefixOf(s.path))break
s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ie.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new an((e,t)=>e-t)
const s=this.overlays.getIterator()
for(;s.hasNext();){const e=s.getNext().value
if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId)
null===t&&(t=li(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=li(),a=i.getIterator()
for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=r)););return Ie.resolve(o)}St(e,t,n){const r=this.overlays.get(n.key)
if(null!==r){const e=this.qr.get(r.largestBatchId).delete(n.key)
this.qr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Xi(t,n))
let i=this.qr.get(t)
void 0===i&&(i=mi(),this.qr.set(t,i)),this.qr.set(t,i.add(n.key))}}class ja{constructor(){this.sessionToken=mn.EMPTY_BYTE_STRING}getSessionToken(e){return Ie.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Ie.resolve()}}class qa{constructor(){this.Qr=new ln(Va.$r),this.Ur=new ln(Va.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new Va(e,t)
this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Gr(new Va(e,t))}zr(e,t){e.forEach(e=>this.removeReference(e,t))}jr(e){const t=new H(new G([])),n=new Va(t,e),r=new Va(t,e+1),i=[]
return this.Ur.forEachInRange([n,r],e=>{this.Gr(e),i.push(e.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new H(new G([])),n=new Va(t,e),r=new Va(t,e+1)
let i=mi()
return this.Ur.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new Va(e,0),n=this.Qr.firstAfterOrEqual(t)
return null!==n&&e.isEqual(n.key)}}class Va{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return H.comparator(e.key,t.key)||F(e.Yr,t.Yr)}static Kr(e,t){return F(e.Yr,t.Yr)||H.comparator(e.key,t.key)}}class Ba{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new ln(Va.$r)}checkEmpty(e){return Ie.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.tr
this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1]
const s=new Ji(i,t,n,r)
this.mutationQueue.push(s)
for(const o of r)this.Zr=this.Zr.add(new Va(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast())
return Ie.resolve(s)}lookupMutationBatch(e,t){return Ie.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ei(n),i=r<0?0:r
return Ie.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Ie.resolve(0===this.mutationQueue.length?Ve:this.tr-1)}getAllMutationBatches(e){return Ie.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Va(t,0),r=new Va(t,Number.POSITIVE_INFINITY),i=[]
return this.Zr.forEachInRange([n,r],e=>{const t=this.Xr(e.Yr)
i.push(t)}),Ie.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ln(F)
return t.forEach(e=>{const t=new Va(e,0),r=new Va(e,Number.POSITIVE_INFINITY)
this.Zr.forEachInRange([t,r],e=>{n=n.add(e.Yr)})}),Ie.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1
let i=n
H.isDocumentKey(i)||(i=i.child(""))
const s=new Va(new H(i),0)
let o=new ln(F)
return this.Zr.forEachWhile(e=>{const t=e.key.path
return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Yr)),!0)},s),Ie.resolve(this.ti(o))}ti(e){const t=[]
return e.forEach(e=>{const n=this.Xr(e)
null!==n&&t.push(n)}),t}removeMutationBatch(e,t){_(0===this.ni(t.batchId,"removed"),55003),this.mutationQueue.shift()
let n=this.Zr
return Ie.forEach(t.mutations,r=>{const i=new Va(r.key,t.batchId)
return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Zr=n})}ir(e){}containsKey(e,t){const n=new Va(t,0),r=this.Zr.firstAfterOrEqual(n)
return Ie.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ie.resolve()}ni(e,t){return this.ei(e)}ei(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e)
return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}class Ua{constructor(e){this.ri=e,this.docs=new an(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.ri(t)
return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e)
t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t)
return Ie.resolve(n?n.document.mutableCopy():ar.newInvalidDocument(t))}getEntries(e,t){let n=oi()
return t.forEach(e=>{const t=this.docs.get(e)
n=n.insert(e,t?t.document.mutableCopy():ar.newInvalidDocument(e))}),Ie.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=oi()
const s=t.path,o=new H(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o)
for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext()
if(!s.isPrefixOf(e.path))break
e.path.length>s.length+1||we(ve(o),n)<=0||(r.has(o.key)||ei(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Ie.resolve(i)}getAllFromCollectionGroup(e,t,n,r){b(9500)}ii(e,t){return Ie.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new $a(this)}getSize(e){return Ie.resolve(this.size)}}class $a extends Ta{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[]
return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(n)}),Ie.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}class za{constructor(e){this.persistence=e,this.si=new ii(e=>Mr(e),Pr),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.oi=0,this._i=new qa,this.targetCount=0,this.ai=ha.ur()}forEachTarget(e,t){return this.si.forEach((e,n)=>t(n)),Ie.resolve()}getLastRemoteSnapshotVersion(e){return Ie.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ie.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),Ie.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),Ie.resolve()}Pr(e){this.si.set(e.target,e)
const t=e.targetId
t>this.highestTargetId&&(this.ai=new ha(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,Ie.resolve()}updateTargetData(e,t){return this.Pr(t),Ie.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,Ie.resolve()}removeTargets(e,t,n){let r=0
const i=[]
return this.si.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.si.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),Ie.waitFor(i).next(()=>r)}getTargetCount(e){return Ie.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null
return Ie.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),Ie.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n)
const r=this.persistence.referenceDelegate,i=[]
return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),Ie.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),Ie.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t)
return Ie.resolve(n)}containsKey(e,t){return Ie.resolve(this._i.containsKey(t))}}class Ga{constructor(e,t){this.ui={},this.overlays={},this.ci=new qe(0),this.li=!1,this.li=!0,this.hi=new ja,this.referenceDelegate=e(this),this.Pi=new za(this),this.indexManager=new Go,this.remoteDocumentCache=function(e){return new Ua(e)}(e=>this.referenceDelegate.Ti(e)),this.serializer=new ro(t),this.Ii=new Fa(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()]
return t||(t=new La,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()]
return n||(n=new Ba(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){m("MemoryPersistence","Starting transaction:",e)
const r=new Ka(this.ci.next())
return this.referenceDelegate.Ei(),n(r).next(e=>this.referenceDelegate.di(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ai(e,t){return Ie.or(Object.values(this.ui).map(n=>()=>n.containsKey(e,t)))}}class Ka extends Se{constructor(e){super(),this.currentSequenceNumber=e}}class Wa{constructor(e){this.persistence=e,this.Ri=new qa,this.Vi=null}static mi(e){return new Wa(e)}get fi(){if(this.Vi)return this.Vi
throw b(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),Ie.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),Ie.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),Ie.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(e=>this.fi.add(e.toString()))
const n=this.persistence.getTargetCache()
return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.fi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer()
return Ie.forEach(this.fi,n=>{const r=H.fromPath(n)
return this.gi(e,r).next(e=>{e||t.removeEntry(r,ce.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(e=>{e?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return Ie.or([()=>Ie.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Ha{constructor(e,t){this.persistence=e,this.pi=new ii(e=>Ge(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=Sa(this,t)}static mi(e,t){return new Ha(e,t)}Ei(){}di(e){return Ie.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e)
return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}wr(e){let t=0
return this.pr(e,e=>{t++}).next(()=>t)}pr(e,t){return Ie.forEach(this.pi,(n,r)=>this.br(e,n,r).next(e=>e?Ie.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0
const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer()
return r.ii(e,r=>this.br(e,r,t).next(e=>{e||(n++,i.removeEntry(r,ce.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),Ie.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber)
return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),Ie.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),Ie.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),Ie.resolve()}Ti(e){let t=e.key.toString().length
return e.isFoundDocument()&&(t+=zn(e.data.value)),t}br(e,t,n){return Ie.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.pi.get(t)
return Ie.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}class Qa{constructor(e){this.serializer=e}k(e,t,n,r){const i=new Ae("createOrUpgrade",t)
n<1&&r>=1&&(function(e){e.createObjectStore(Je)}(e),function(e){e.createObjectStore(Xe,{keyPath:"userId"}),e.createObjectStore(Ze,{keyPath:et,autoIncrement:!0}).createIndex(tt,nt,{unique:!0}),e.createObjectStore(ot)}(e),Ja(e),function(e){e.createObjectStore(Qe)}(e))
let s=Ie.resolve()
return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore(vt),e.deleteObjectStore(mt),e.deleteObjectStore(Et)}(e),Ja(e)),s=s.next(()=>function(e){const t=e.store(Et),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ce.min().toTimestamp(),targetCount:0}
return t.put(St,n)}(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>function(e,t){return t.store(Ze).J().next(n=>{e.deleteObjectStore(Ze),e.createObjectStore(Ze,{keyPath:et,autoIncrement:!0}).createIndex(tt,nt,{unique:!0})
const r=t.store(Ze),i=n.map(e=>r.put(e))
return Ie.waitFor(i)})}(e,i))),s=s.next(()=>{!function(e){e.createObjectStore(At,{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.yi(i))),n<6&&r>=6&&(s=s.next(()=>(function(e){e.createObjectStore(ft)}(e),this.wi(i)))),n<7&&r>=7&&(s=s.next(()=>this.Si(i))),n<8&&r>=8&&(s=s.next(()=>this.bi(e,i))),n<9&&r>=9&&(s=s.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)})),n<10&&r>=10&&(s=s.next(()=>this.Di(i))),n<11&&r>=11&&(s=s.next(()=>{!function(e){e.createObjectStore(Ct,{keyPath:"bundleId"})}(e),function(e){e.createObjectStore(kt,{keyPath:"name"})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){const t=e.createObjectStore(qt,{keyPath:Vt})
t.createIndex(Bt,Ut,{unique:!1}),t.createIndex($t,zt,{unique:!1})}(e)})),n<13&&r>=13&&(s=s.next(()=>function(e){const t=e.createObjectStore(at,{keyPath:ct})
t.createIndex(ut,lt),t.createIndex(ht,dt)}(e)).next(()=>this.Ci(e,i)).next(()=>e.deleteObjectStore(Qe))),n<14&&r>=14&&(s=s.next(()=>this.Fi(e,i))),n<15&&r>=15&&(s=s.next(()=>function(e){e.createObjectStore(xt,{keyPath:"indexId",autoIncrement:!0}).createIndex(Dt,"collectionGroup",{unique:!1}),e.createObjectStore(Rt,{keyPath:Nt}).createIndex(Ot,Mt,{unique:!1}),e.createObjectStore(Pt,{keyPath:Ft}).createIndex(Lt,jt,{unique:!1})}(e))),n<16&&r>=16&&(s=s.next(()=>{t.objectStore(Rt).clear()}).next(()=>{t.objectStore(Pt).clear()})),n<17&&r>=17&&(s=s.next(()=>{!function(e){e.createObjectStore(Gt,{keyPath:"name"})}(e)})),n<18&&r>=18&&o.isSafariOrWebkit()&&(s=s.next(()=>{t.objectStore(Rt).clear()}).next(()=>{t.objectStore(Pt).clear()})),s}wi(e){let t=0
return e.store(Qe).ee((e,n)=>{t+=sa(n)}).next(()=>{const n={byteSize:t}
return e.store(ft).put(pt,n)})}yi(e){const t=e.store(Xe),n=e.store(Ze)
return t.J().next(t=>Ie.forEach(t,t=>{const r=IDBKeyRange.bound([t.userId,Ve],[t.userId,t.lastAcknowledgedBatchId])
return n.J(tt,r).next(n=>Ie.forEach(n,n=>{_(n.userId===t.userId,18650,"Cannot process batch from unexpected user",{batchId:n.batchId})
const r=co(this.serializer,n)
return ia(e,t.userId,r).next(()=>{})}))}))}Si(e){const t=e.store(vt),n=e.store(Qe)
return e.store(Et).get(St).next(e=>{const r=[]
return n.ee((n,i)=>{const s=new G(n),o=function(e){return[0,Ge(e)]}(s)
r.push(t.get(o).next(n=>n?Ie.resolve():(n=>t.put({targetId:0,path:Ge(n),sequenceNumber:e.highestListenSequenceNumber}))(s)))}).next(()=>Ie.waitFor(r))})}bi(e,t){e.createObjectStore(It,{keyPath:Tt})
const n=t.store(It),r=new Ko,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast()
return n.put({collectionId:t,parent:Ge(r)})}}
return t.store(Qe).ee({X:!0},(e,t)=>{const n=new G(e)
return i(n.popLast())}).next(()=>t.store(ot).ee({X:!0},([e,t,n],r)=>{const s=He(t)
return i(s.popLast())}))}Di(e){const t=e.store(mt)
return t.ee((e,n)=>{const r=uo(n),i=lo(this.serializer,r)
return t.put(i)})}Ci(e,t){const n=t.store(Qe),r=[]
return n.ee((e,n)=>{const i=t.store(at),s=function(e){return e.document?new H(G.fromString(e.document.name).popFirst(5)):e.noDocument?H.fromSegments(e.noDocument.path):e.unknownDocument?H.fromSegments(e.unknownDocument.path):b(36783)}(n).path.toArray(),o={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations}
r.push(i.put(o))}).next(()=>Ie.waitFor(r))}Fi(e,t){const n=t.store(Ze),r=Ca(this.serializer),i=new Ga(Wa.mi,this.serializer.yt)
return n.J().next(e=>{const n=new Map
return e.forEach(e=>{let t=n.get(e.userId)??mi()
co(this.serializer,e).keys().forEach(e=>t=t.add(e)),n.set(e.userId,t)}),Ie.forEach(n,(e,n)=>{const s=new h(n),o=bo.wt(this.serializer,s),a=i.getIndexManager(s),c=oa.wt(s,this.serializer,a,i.referenceDelegate)
return new Pa(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new en(t,qe.ce),e).next()})})}}function Ja(e){e.createObjectStore(vt,{keyPath:bt}).createIndex(wt,_t,{unique:!0}),e.createObjectStore(mt,{keyPath:"targetId"}).createIndex(gt,yt,{unique:!0}),e.createObjectStore(Et)}const Ya="IndexedDbPersistence",Xa=18e5,Za=5e3,ec="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",tc="main"
class nc{constructor(e,t,n,r,i,s,o,a,c,u,l=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Mi=i,this.window=s,this.document=o,this.xi=c,this.Oi=u,this.Ni=l,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=e=>Promise.resolve(),!nc.v())throw new I(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.")
this.referenceDelegate=new Ea(this,r),this.$i=t+tc,this.serializer=new ro(a),this.Ui=new Ce(this.$i,this.Ni,new Qa(this.serializer)),this.hi=new _o,this.Pi=new da(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Ca(this.serializer),this.Ii=new go,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,!1===u&&g(Ya,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new I(E.FAILED_PRECONDITION,ec)
return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Pi.getHighestSequenceNumber(e))}).then(e=>{this.ci=new qe(e,this.xi)}).then(()=>{this.li=!0}).catch(e=>(this.Ui&&this.Ui.close(),Promise.reject(e)))}Ji(e){return this.Qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ui.$(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Mi.enqueueAndForget(async()=>{this.started&&await this.Wi()}))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ic(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Hi(e).next(e=>{e||(this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)))})}).next(()=>this.Yi(e)).next(t=>this.isPrimary&&!t?this.Zi(e).next(()=>!1):!!t&&this.Xi(e).next(()=>!0))).catch(e=>{if(Re(e))return m(Ya,"Failed to extend owner lease: ",e),this.isPrimary
if(!this.allowTabSynchronization)throw e
return m(Ya,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Mi.enqueueRetryable(()=>this.Qi(e)),this.isPrimary=e})}Hi(e){return rc(e).get(Ye).next(e=>Ie.resolve(this.es(e)))}ts(e){return ic(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,Xa)){this.qi=Date.now()
const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=tn(e,At)
return t.J().next(e=>{const n=this.ss(e,Xa),r=e.filter(e=>-1===n.indexOf(e))
return Ie.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[])
if(this.Ki)for(const t of e)this.Ki.removeItem(this._s(t.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Wi().then(()=>this.ns()).then(()=>this.ji()))}es(e){return!!e&&e.ownerId===this.clientId}Yi(e){return this.Oi?Ie.resolve(!0):rc(e).get(Ye).next(t=>{if(null!==t&&this.rs(t.leaseTimestampMs,Za)&&!this.us(t.ownerId)){if(this.es(t)&&this.networkEnabled)return!0
if(!this.es(t)){if(!t.allowTabSynchronization)throw new I(E.FAILED_PRECONDITION,ec)
return!1}}return!(!this.networkEnabled||!this.inForeground)||ic(e).J().next(e=>void 0===this.ss(e,Za).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled
if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&m(Ya,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[Je,At],e=>{const t=new en(e,qe.ce)
return this.Zi(t).next(()=>this.ts(t))}),this.Ui.close(),this.Ps()}ss(e,t){return e.filter(e=>this.rs(e.updateTimeMs,t)&&!this.us(e.clientId))}Ts(){return this.runTransaction("getActiveClients","readonly",e=>ic(e).J().next(e=>this.ss(e,Xa).map(e=>e.clientId)))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(e,t){return oa.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Qo(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return bo.wt(this.serializer,e)}getBundleCache(){return this.Ii}runTransaction(e,t,n){m(Ya,"Starting transaction:",e)
const r="readonly"===t?"readonly":"readwrite",i=function(e){return 18===e?Zt:17===e?Xt:16===e?Yt:15===e?Jt:14===e?Qt:13===e?Ht:12===e?Wt:11===e?Kt:void b(60245)}(this.Ni)
let s
return this.Ui.runTransaction(e,r,i,r=>(s=new en(r,this.ci?this.ci.next():qe.ce),"readwrite-primary"===t?this.Hi(s).next(e=>!!e||this.Yi(s)).next(t=>{if(!t)throw g(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable(()=>this.Qi(!1)),new I(E.FAILED_PRECONDITION,_e)
return n(s)}).next(e=>this.Xi(s).next(()=>e)):this.Is(s).next(()=>n(s)))).then(e=>(s.raiseOnCommittedEvent(),e))}Is(e){return rc(e).get(Ye).next(e=>{if(null!==e&&this.rs(e.leaseTimestampMs,Za)&&!this.us(e.ownerId)&&!this.es(e)&&!(this.Oi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new I(E.FAILED_PRECONDITION,ec)})}Xi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()}
return rc(e).put(Ye,t)}static v(){return Ce.v()}Zi(e){const t=rc(e)
return t.get(Ye).next(e=>this.es(e)?(m(Ya,"Releasing primary lease."),t.delete(Ye)):Ie.resolve())}rs(e,t){const n=Date.now()
return!(e<n-t||e>n&&(g(`Detected an update time that is in the future: ${e} > ${n}`),1))}Gi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Li=()=>{this.Mi.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Wi()))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground="visible"===this.document.visibilityState)}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){"function"==typeof this.window?.addEventListener&&(this.Bi=()=>{this.cs()
const e=/(?:Version|Mobile)\/1[456]/
o.isSafari()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(e){try{const t=null!==this.Ki?.getItem(this._s(e))
return m(Ya,`Client '${e}' ${t?"is":"is not"} zombied in LocalStorage`),t}catch(e){return g(Ya,"Failed to get zombied client id.",e),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(e){g("Failed to set zombie client id.",e)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch(e){}}_s(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function rc(e){return tn(e,Je)}function ic(e){return tn(e,At)}function sc(e,t){let n=e.projectId
return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"}class oc{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=r}static As(e,t){let n=mi(),r=mi()
for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key)
break
case 1:r=r.add(i.doc.key)}return new oc(e,t.fromCache,n,r)}}class ac{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}class cc{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=o.isSafari()?8:ke(o.getUA())>0?6:4}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null}
return this.ys(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ws(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return
const n=new ac
return this.Ss(e,t,n).next(r=>{if(i.result=r,this.Vs)return this.bs(e,t,n,r.size)})}).next(()=>i.result)}bs(e,t,n,r){return n.documentReadCount<this.fs?(p()<=s.LogLevel.DEBUG&&m("QueryEngine","SDK will not create cache indexes for query:",Zr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),Ie.resolve()):(p()<=s.LogLevel.DEBUG&&m("QueryEngine","Query:",Zr(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.gs*r?(p()<=s.LogLevel.DEBUG&&m("QueryEngine","The SDK decides to create cache indexes for query:",Zr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kr(t))):Ie.resolve())}ys(e,t){if($r(t))return Ie.resolve(null)
let n=Kr(t)
return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=Jr(t,null,"F"),n=Kr(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const i=mi(...r)
return this.ps.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const s=this.Ds(t,r)
return this.Cs(t,s,i,n.readTime)?this.ys(e,Jr(t,null,"F")):this.vs(e,s,t,n)}))})))}ws(e,t,n,r){return $r(t)||r.isEqual(ce.min())?Ie.resolve(null):this.ps.getDocuments(e,n).next(i=>{const o=this.Ds(t,i)
return this.Cs(t,o,n,r)?Ie.resolve(null):(p()<=s.LogLevel.DEBUG&&m("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Zr(t)),this.vs(e,o,t,ye(r,ue)).next(e=>e))})}Ds(e,t){let n=new ln(ni(e))
return t.forEach((t,r)=>{ei(e,r)&&(n=n.add(r))}),n}Cs(e,t,n,r){if(null===e.limit)return!1
if(n.size!==t.size)return!0
const i="F"===e.limitType?t.last():t.first()
return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,t,n){return p()<=s.LogLevel.DEBUG&&m("QueryEngine","Using full collection scan to execute query:",Zr(t)),this.ps.getDocumentsMatchingQuery(e,t,be.min(),n)}vs(e,t,n,r){return this.ps.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}const uc="LocalStore"
class lc{constructor(e,t,n,r){this.persistence=e,this.Fs=t,this.serializer=r,this.Ms=new an(F),this.xs=new ii(e=>Mr(e),Pr),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Pa(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function hc(e,t,n,r){return new lc(e,t,n,r)}async function dc(e,t){const n=S(e)
return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r
return n.mutationQueue.getAllMutationBatches(e).next(i=>(r=i,n.Bs(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const i=[],s=[]
let o=mi()
for(const e of r){i.push(e.batchId)
for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId)
for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({Ls:e,removedBatchIds:i,addedBatchIds:s}))})})}function fc(e){const t=S(e)
return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function pc(e,t,n){let r=mi(),i=mi()
return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=oi()
return n.forEach((n,s)=>{const o=e.get(n)
s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(ce.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):m(uc,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)}),{ks:r,qs:i}})}function mc(e,t){const n=S(e)
return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=Ve),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}function gc(e,t){const n=S(e)
return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r
return n.Pi.getTargetData(e,t).next(i=>i?(r=i,Ie.resolve(r)):n.Pi.allocateTargetId(e).next(i=>(r=new no(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Pi.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.Ms.get(e.targetId)
return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(e.targetId,e),n.xs.set(t,e.targetId)),e})}async function yc(e,t,n){const r=S(e),i=r.Ms.get(t),s=n?"readwrite":"readwrite-primary"
try{n||await r.persistence.runTransaction("Release target",s,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!Re(e))throw e
m(uc,`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ms=r.Ms.remove(t),r.xs.delete(i.target)}function vc(e,t,n){const r=S(e)
let i=ce.min(),s=mi()
return r.persistence.runTransaction("Execute query","readwrite",e=>function(e,t,n){const r=S(e),i=r.xs.get(n)
return void 0!==i?Ie.resolve(r.Ms.get(i)):r.Pi.getTargetData(t,n)}(r,e,Kr(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>r.Fs.getDocumentsMatchingQuery(e,t,n?i:ce.min(),n?s:mi())).next(e=>(_c(r,ti(t),e),{documents:e,Qs:s})))}function bc(e,t){const n=S(e),r=S(n.Pi),i=n.Ms.get(t)
return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",e=>r.At(e,t).next(e=>e?e.target:null))}function wc(e,t){const n=S(e),r=n.Os.get(t)||ce.min()
return n.persistence.runTransaction("Get new document changes","readonly",e=>n.Ns.getAllFromCollectionGroup(e,t,ye(r,ue),Number.MAX_SAFE_INTEGER)).then(e=>(_c(n,t,e),e))}function _c(e,t,n){let r=e.Os.get(t)||ce.min()
n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.Os.set(t,r)}async function Sc(e,t,n=mi()){const r=await gc(e,Kr(ho(t.bundledQuery))),i=S(e)
return i.persistence.runTransaction("Save named query","readwrite",e=>{const s=xs(t.readTime)
if(r.snapshotVersion.compareTo(s)>=0)return i.Ii.saveNamedQuery(e,t)
const o=r.withResumeToken(mn.EMPTY_BYTE_STRING,s)
return i.Ms=i.Ms.insert(o.targetId,o),i.Pi.updateTargetData(e,o).next(()=>i.Pi.removeMatchingKeysForTargetId(e,r.targetId)).next(()=>i.Pi.addMatchingKeys(e,n,r.targetId)).next(()=>i.Ii.saveNamedQuery(e,t))})}const Ec="firestore_clients"
function Ic(e,t){return`${Ec}_${e}_${t}`}const Tc="firestore_mutations"
function Ac(e,t,n){let r=`${Tc}_${e}_${n}`
return t.isAuthenticated()&&(r+=`_${t.uid}`),r}const Cc="firestore_targets"
function kc(e,t){return`${Cc}_${e}_${t}`}const xc="SharedClientState"
class Dc{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Ws(e,t,n){const r=JSON.parse(n)
let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error)
return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new I(r.error.code,r.error.message))),s?new Dc(e,t,r.state,i):(g(xc,`Failed to parse mutation state for ID '${t}': ${n}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()}
return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Rc{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ws(e,t){const n=JSON.parse(t)
let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error)
return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new I(n.error.code,n.error.message))),i?new Rc(e,n.state,r):(g(xc,`Failed to parse target state for ID '${e}': ${t}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()}
return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Nc{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ws(e,t){const n=JSON.parse(t)
let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=yi()
for(let s=0;r&&s<n.activeTargetIds.length;++s)r=$e(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s])
return r?new Nc(e,i):(g(xc,`Failed to parse client data for instance '${e}': ${t}`),null)}}class Oc{constructor(e,t){this.clientId=e,this.onlineState=t}static Ws(e){const t=JSON.parse(e)
return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Oc(t.clientId,t.onlineState):(g(xc,`Failed to parse online state: ${e}`),null)}}class Mc{constructor(){this.activeTargetIds=yi()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()}
return JSON.stringify(e)}}class Pc{constructor(e,t,n,r,i){this.window=e,this.Mi=t,this.persistenceKey=n,this.Js=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Hs=this.Ys.bind(this),this.Zs=new an(F),this.started=!1,this.Xs=[]
const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")
this.storage=this.window.localStorage,this.currentUser=i,this.eo=Ic(this.persistenceKey,this.Js),this.no=function(e){return`firestore_sequence_number_${e}`}(this.persistenceKey),this.Zs=this.Zs.insert(this.Js,new Mc),this.ro=new RegExp(`^${Ec}_${s}_([^_]*)$`),this.io=new RegExp(`^${Tc}_${s}_(\\d+)(?:_(.*))?$`),this.so=new RegExp(`^${Cc}_${s}_(\\d+)$`),this.oo=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this._o=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.Hs)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ts()
for(const n of e){if(n===this.Js)continue
const e=this.getItem(Ic(this.persistenceKey,n))
if(e){const t=Nc.Ws(n,e)
t&&(this.Zs=this.Zs.insert(t.clientId,t))}}this.ao()
const t=this.storage.getItem(this.oo)
if(t){const e=this.uo(t)
e&&this.co(e)}for(const n of this.Xs)this.Ys(n)
this.Xs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.no,JSON.stringify(e))}getAllActiveQueryTargets(){return this.lo(this.Zs)}isActiveQueryTarget(e){let t=!1
return this.Zs.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.ho(e,"pending")}updateMutationState(e,t,n){this.ho(e,t,n),this.Po(e)}addLocalQueryTarget(e,t=!0){let n="not-current"
if(this.isActiveQueryTarget(e)){const t=this.storage.getItem(kc(this.persistenceKey,e))
if(t){const r=Rc.Ws(e,t)
r&&(n=r.state)}}return t&&this.To.zs(e),this.ao(),n}removeLocalQueryTarget(e){this.To.js(e),this.ao()}isLocalQueryTarget(e){return this.To.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(kc(this.persistenceKey,e))}updateQueryState(e,t,n){this.Io(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.Po(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.Eo(e)}notifyBundleLoaded(e){this.Ao(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Hs),this.removeItem(this.eo),this.started=!1)}getItem(e){const t=this.storage.getItem(e)
return m(xc,"READ",e,t),t}setItem(e,t){m(xc,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){m(xc,"REMOVE",e),this.storage.removeItem(e)}Ys(e){const t=e
if(t.storageArea===this.storage){if(m(xc,"EVENT",t.key,t.newValue),t.key===this.eo)return void g("Received WebStorage notification for local change. Another client might have garbage-collected our state")
this.Mi.enqueueRetryable(async()=>{if(this.started){if(null!==t.key)if(this.ro.test(t.key)){if(null==t.newValue){const e=this.Ro(t.key)
return this.Vo(e,null)}{const e=this.mo(t.key,t.newValue)
if(e)return this.Vo(e.clientId,e)}}else if(this.io.test(t.key)){if(null!==t.newValue){const e=this.fo(t.key,t.newValue)
if(e)return this.po(e)}}else if(this.so.test(t.key)){if(null!==t.newValue){const e=this.yo(t.key,t.newValue)
if(e)return this.wo(e)}}else if(t.key===this.oo){if(null!==t.newValue){const e=this.uo(t.newValue)
if(e)return this.co(e)}}else if(t.key===this.no){const e=function(e){let t=qe.ce
if(null!=e)try{const n=JSON.parse(e)
_("number"==typeof n,30636,{So:e}),t=n}catch(e){g(xc,"Failed to read sequence number from WebStorage",e)}return t}(t.newValue)
e!==qe.ce&&this.sequenceNumberHandler(e)}else if(t.key===this._o){const e=this.bo(t.newValue)
await Promise.all(e.map(e=>this.syncEngine.Do(e)))}}else this.Xs.push(t)})}}get To(){return this.Zs.get(this.Js)}ao(){this.setItem(this.eo,this.To.Gs())}ho(e,t,n){const r=new Dc(this.currentUser,e,t,n),i=Ac(this.persistenceKey,this.currentUser,e)
this.setItem(i,r.Gs())}Po(e){const t=Ac(this.persistenceKey,this.currentUser,e)
this.removeItem(t)}Eo(e){const t={clientId:this.Js,onlineState:e}
this.storage.setItem(this.oo,JSON.stringify(t))}Io(e,t,n){const r=kc(this.persistenceKey,e),i=new Rc(e,t,n)
this.setItem(r,i.Gs())}Ao(e){const t=JSON.stringify(Array.from(e))
this.setItem(this._o,t)}Ro(e){const t=this.ro.exec(e)
return t?t[1]:null}mo(e,t){const n=this.Ro(e)
return Nc.Ws(n,t)}fo(e,t){const n=this.io.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null
return Dc.Ws(new h(i),r,t)}yo(e,t){const n=this.so.exec(e),r=Number(n[1])
return Rc.Ws(r,t)}uo(e){return Oc.Ws(e)}bo(e){return JSON.parse(e)}async po(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Co(e.batchId,e.state,e.error)
m(xc,`Ignoring mutation for non-active user ${e.user.uid}`)}wo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Vo(e,t){const n=t?this.Zs.insert(e,t):this.Zs.remove(e),r=this.lo(this.Zs),i=this.lo(n),s=[],o=[]
return i.forEach(e=>{r.has(e)||s.push(e)}),r.forEach(e=>{i.has(e)||o.push(e)}),this.syncEngine.Fo(s,o).then(()=>{this.Zs=n})}co(e){this.Zs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}lo(e){let t=yi()
return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class Fc{constructor(){this.Mo=new Mc,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Mc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}class Lc{Oo(e){}shutdown(){}}const jc="ConnectivityMonitor"
class qc{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){m(jc,"Network connectivity changed: AVAILABLE")
for(const e of this.qo)e(0)}ko(){m(jc,"Network connectivity changed: UNAVAILABLE")
for(const e of this.qo)e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}let Vc=null
function Bc(){return null===Vc?Vc=268435456+Math.round(2147483648*Math.random()):Vc++,"0x"+Vc.toString(16)}const Uc="RestConnection",$c={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"}
class zc{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId
const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database)
this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${r}`,this.Wo=this.databaseId.database===kn?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Go(e,t,n,r,i){const s=Bc(),a=this.zo(e,t.toUriEncodedString())
m(Uc,`Sending RPC '${e}' ${s}:`,a,n)
const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo}
this.jo(c,r,i)
const{host:u}=new URL(a),l=o.isCloudWorkstation(u)
return this.Jo(e,a,c,n,l).then(t=>(m(Uc,`Received RPC '${e}' ${s}: `,t),t),t=>{throw y(Uc,`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}Ho(e,t,n,r,i,s){return this.Go(e,t,n,r,i)}jo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+d,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}zo(e,t){const n=$c[e]
return`${this.Uo}/v1/${t}:${n}`}terminate(){}}class Gc{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}const Kc="WebChannelConnection"
class Wc extends zc{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,r,i){const s=Bc()
return new Promise((i,o)=>{const a=new c.XhrIo
a.setWithCredentials(!0),a.listenOnce(c.EventType.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case c.ErrorCode.NO_ERROR:const t=a.getResponseJson()
m(Kc,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t)
break
case c.ErrorCode.TIMEOUT:m(Kc,`RPC '${e}' ${s} timed out`),o(new I(E.DEADLINE_EXCEEDED,"Request time out"))
break
case c.ErrorCode.HTTP_ERROR:const n=a.getStatus()
if(m(Kc,`RPC '${e}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson()
Array.isArray(e)&&(e=e[0])
const t=e?.error
if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-")
return Object.values(E).indexOf(t)>=0?t:E.UNKNOWN}(t.status)
o(new I(e,t.message))}else o(new I(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new I(E.UNAVAILABLE,"Connection failed."))
break
default:b(9055,{l_:e,streamId:s,h_:a.getLastErrorCode(),P_:a.getLastError()})}}finally{m(Kc,`RPC '${e}' ${s} completed.`)}})
const u=JSON.stringify(r)
m(Kc,`RPC '${e}' ${s} sending request:`,r),a.send(t,"POST",u,n,15)})}T_(e,t,n){const r=Bc(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=c.createWebChannelTransport(),o=c.getStatEventTarget(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds
void 0!==u&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.useFetchStreams=!0),this.jo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0
const l=i.join("")
m(Kc,`Creating RPC '${e}' stream ${r}: ${l}`,a)
const h=s.createWebChannel(l,a)
this.I_(h)
let d=!1,f=!1
const p=new Gc({Yo:t=>{f?m(Kc,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(d||(m(Kc,`Opening RPC '${e}' stream ${r} transport.`),h.open(),d=!0),m(Kc,`RPC '${e}' stream ${r} sending:`,t),h.send(t))},Zo:()=>h.close()}),g=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})}
return g(h,c.WebChannel.EventType.OPEN,()=>{f||(m(Kc,`RPC '${e}' stream ${r} transport opened.`),p.o_())}),g(h,c.WebChannel.EventType.CLOSE,()=>{f||(f=!0,m(Kc,`RPC '${e}' stream ${r} transport closed`),p.a_(),this.E_(h))}),g(h,c.WebChannel.EventType.ERROR,t=>{f||(f=!0,y(Kc,`RPC '${e}' stream ${r} transport errored. Name:`,t.name,"Message:",t.message),p.a_(new I(E.UNAVAILABLE,"The operation could not be completed")))}),g(h,c.WebChannel.EventType.MESSAGE,t=>{if(!f){const n=t.data[0]
_(!!n,16349)
const i=n,s=i?.error||i[0]?.error
if(s){m(Kc,`RPC '${e}' stream ${r} received error:`,s)
const t=s.status
let n=function(e){const t=ts[e]
if(void 0!==t)return is(t)}(t),i=s.message
void 0===n&&(n=E.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),f=!0,p.a_(new I(n,i)),h.close()}else m(Kc,`RPC '${e}' stream ${r} received:`,n),p.u_(n)}}),g(o,c.Event.STAT_EVENT,t=>{t.stat===c.Stat.PROXY?m(Kc,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===c.Stat.NOPROXY&&m(Kc,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.__()},0),p}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Hc(){return"undefined"!=typeof window?window:null}function Qc(){return"undefined"!=typeof document?document:null}function Jc(e){return new Is(e,!0)}class Yc{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel()
const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-n)
r>0&&m("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}const Xc="PersistentStream"
class Zc{constructor(e,t,n,r,i,s,o,a){this.Mi=e,this.S_=n,this.b_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Yc(e,t)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,4!==e?this.M_.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(g(t.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1
const e=this.W_(this.D_),t=this.D_
Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.D_===t&&this.G_(e,n)},t=>{e(()=>{const e=new I(E.UNKNOWN,"Fetching auth token failed: "+t.message)
return this.z_(e)})})}G_(e,t){const n=this.W_(this.D_)
this.stream=this.j_(e,t),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(e=>{n(()=>this.z_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.F_?this.J_(e):this.onNext(e))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return m(Xc,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(m(Xc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eu extends Zc{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset()
const t=function(e,t){let n
if("targetChange"in t){t.targetChange
const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:b(39313,{state:e})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(_(void 0===t||"string"==typeof t,58123),mn.fromBase64String(t||"")):(_(void 0===t||t instanceof Buffer||t instanceof Uint8Array,16193),mn.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?E.UNKNOWN:is(e.code)
return new I(t,e.message||"")}(o)
n=new gs(r,i,s,a||null)}else if("documentChange"in t){t.documentChange
const r=t.documentChange
r.document,r.document.name,r.document.updateTime
const i=Ms(e,r.document.name),s=xs(r.document.updateTime),o=r.document.createTime?xs(r.document.createTime):ce.min(),a=new sr({mapValue:{fields:r.document.fields}}),c=ar.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[]
n=new ps(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete
const r=t.documentDelete
r.document
const i=Ms(e,r.document),s=r.readTime?xs(r.readTime):ce.min(),o=ar.newNoDocument(i,s),a=r.removedTargetIds||[]
n=new ps([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove
const r=t.documentRemove
r.document
const i=Ms(e,r.document),s=r.removedTargetIds||[]
n=new ps([],s,i,null)}else{if(!("filter"in t))return b(11601,{Rt:t})
{t.filter
const e=t.filter
e.targetId
const{count:r=0,unchangedNames:i}=e,s=new es(r,i),o=e.targetId
n=new ms(o,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return ce.min()
const t=e.targetChange
return t.targetIds&&t.targetIds.length?ce.min():t.readTime?xs(t.readTime):ce.min()}(e)
return this.listener.H_(t,n)}Y_(e){const t={}
t.database=Ls(this.serializer),t.addTarget=function(e,t){let n
const r=t.target
if(n=Fr(r)?{documents:$s(e,r)}:{query:zs(e,r).ft},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Cs(e,t.resumeToken)
const r=Ts(e,t.expectedCount)
null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(ce.min())>0){n.readTime=As(e,t.snapshotVersion.toTimestamp())
const r=Ts(e,t.expectedCount)
null!==r&&(n.expectedCount=r)}return n}(this.serializer,e)
const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null
case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch"
case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom"
case"TargetPurposeLimboResolution":return"limbo-document"
default:return b(28987,{purpose:e})}}(t.purpose)
return null==n?null:{"goog-listen-tags":n}}(this.serializer,e)
n&&(t.labels=n),this.q_(t)}Z_(e){const t={}
t.database=Ls(this.serializer),t.removeTarget=e,this.q_(t)}}class tu extends Zc{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return _(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,_(!e.writeResults||0===e.writeResults.length,55816),this.listener.ta()}onNext(e){_(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset()
const t=function(e,t){return e&&e.length>0?(_(void 0!==t,14353),e.map(e=>function(e,t){let n=e.updateTime?xs(e.updateTime):xs(t)
return n.isEqual(ce.min())&&(n=xs(t)),new Mi(n,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),n=xs(e.commitTime)
return this.listener.na(n,t)}ra(){const e={}
e.database=Ls(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>Bs(this.serializer,e))}
this.q_(t)}}class nu{}class ru extends nu{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new I(E.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Go(e,Rs(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new I(E.UNKNOWN,e.toString())})}Ho(e,t,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ho(e,Rs(t,n),r,s,o,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new I(E.UNKNOWN,e.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class iu{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,"Online"===e&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`
this.aa?(g(t),this.aa=!1):m("OnlineStateTracker",t)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}const su="RemoteStore"
class ou{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(e=>{n.enqueueAndForget(async()=>{mu(this)&&(m(su,"Restarting streams for network reachability change."),await async function(e){const t=S(e)
t.Ea.add(4),await cu(t),t.Ra.set("Unknown"),t.Ea.delete(4),await au(t)}(this))})}),this.Ra=new iu(n,r)}}async function au(e){if(mu(e))for(const t of e.da)await t(!0)}async function cu(e){for(const t of e.da)await t(!1)}function uu(e,t){const n=S(e)
n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),pu(n)?fu(n):Mu(n).O_()&&hu(n,t))}function lu(e,t){const n=S(e),r=Mu(n)
n.Ia.delete(t),r.O_()&&du(n,t),0===n.Ia.size&&(r.O_()?r.L_():mu(n)&&n.Ra.set("Unknown"))}function hu(e,t){if(e.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ce.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size
t=t.withExpectedCount(n)}Mu(e).Y_(t)}function du(e,t){e.Va.Ue(t),Mu(e).Z_(t)}function fu(e){e.Va=new vs({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ia.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),Mu(e).start(),e.Ra.ua()}function pu(e){return mu(e)&&!Mu(e).x_()&&e.Ia.size>0}function mu(e){return 0===S(e).Ea.size}function gu(e){e.Va=void 0}async function yu(e){e.Ra.set("Online")}async function vu(e){e.Ia.forEach((t,n)=>{hu(e,t)})}async function bu(e,t){gu(e),pu(e)?(e.Ra.ha(t),fu(e)):e.Ra.set("Unknown")}async function wu(e,t,n){if(e.Ra.set("Online"),t instanceof gs&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause
for(const r of t.targetIds)e.Ia.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Ia.delete(r),e.Va.removeTarget(r))}(e,t)}catch(n){m(su,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await _u(e,n)}else if(t instanceof ps?e.Va.Ze(t):t instanceof ms?e.Va.st(t):e.Va.tt(t),!n.isEqual(ce.min()))try{const t=await fc(e.localStore)
n.compareTo(t)>=0&&await function(e,t){const n=e.Va.Tt(t)
return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Ia.get(r)
i&&e.Ia.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e.Ia.get(t)
if(!r)return
e.Ia.set(t,r.withResumeToken(mn.EMPTY_BYTE_STRING,r.snapshotVersion)),du(e,t)
const i=new no(r.target,t,n,r.sequenceNumber)
hu(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){m(su,"Failed to raise snapshot:",t),await _u(e,t)}}async function _u(e,t,n){if(!Re(t))throw t
e.Ea.add(1),await cu(e),e.Ra.set("Offline"),n||(n=()=>fc(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{m(su,"Retrying IndexedDB access"),await n(),e.Ea.delete(1),await au(e)})}function Su(e,t){return t().catch(n=>_u(e,n,t))}async function Eu(e){const t=S(e),n=Pu(t)
let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Ve
for(;Iu(t);)try{const e=await mc(t.localStore,r)
if(null===e){0===t.Ta.length&&n.L_()
break}r=e.batchId,Tu(t,e)}catch(e){await _u(t,e)}Au(t)&&Cu(t)}function Iu(e){return mu(e)&&e.Ta.length<10}function Tu(e,t){e.Ta.push(t)
const n=Pu(e)
n.O_()&&n.X_&&n.ea(t.mutations)}function Au(e){return mu(e)&&!Pu(e).x_()&&e.Ta.length>0}function Cu(e){Pu(e).start()}async function ku(e){Pu(e).ra()}async function xu(e){const t=Pu(e)
for(const n of e.Ta)t.ea(n.mutations)}async function Du(e,t,n){const r=e.Ta.shift(),i=Yi.from(r,t,n)
await Su(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Eu(e)}async function Ru(e,t){t&&Pu(e).X_&&await async function(e,t){if(function(e){return rs(e)&&e!==E.ABORTED}(t.code)){const n=e.Ta.shift()
Pu(e).B_(),await Su(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await Eu(e)}}(e,t),Au(e)&&Cu(e)}async function Nu(e,t){const n=S(e)
n.asyncQueue.verifyOperationInProgress(),m(su,"RemoteStore received new credentials")
const r=mu(n)
n.Ea.add(3),await cu(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await au(n)}async function Ou(e,t){const n=S(e)
t?(n.Ea.delete(2),await au(n)):t||(n.Ea.add(2),await cu(n),n.Ra.set("Unknown"))}function Mu(e){return e.ma||(e.ma=function(e,t,n){const r=S(e)
return r.sa(),new eu(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Xo:yu.bind(null,e),t_:vu.bind(null,e),r_:bu.bind(null,e),H_:wu.bind(null,e)}),e.da.push(async t=>{t?(e.ma.B_(),pu(e)?fu(e):e.Ra.set("Unknown")):(await e.ma.stop(),gu(e))})),e.ma}function Pu(e){return e.fa||(e.fa=function(e,t,n){const r=S(e)
return r.sa(),new tu(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Xo:()=>Promise.resolve(),t_:ku.bind(null,e),r_:Ru.bind(null,e),ta:xu.bind(null,e),na:Du.bind(null,e)}),e.da.push(async t=>{t?(e.fa.B_(),await Eu(e)):(await e.fa.stop(),e.Ta.length>0&&(m(su,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa}class Fu{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Fu(e,t,s,r,i)
return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new I(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lu(e,t){if(g("AsyncQueue",`${t}: ${e}`),Re(e))return new I(E.UNAVAILABLE,`${t}: ${e}`)
throw e}class ju{static emptySet(e){return new ju(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||H.comparator(t.key,n.key):(e,t)=>H.comparator(e.key,t.key),this.keyedMap=ci(),this.sortedSet=new an(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e)
return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key)
return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e)
return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ju))return!1
if(this.size!==e.size)return!1
const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator()
for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key
if(!e.isEqual(r))return!1}return!0}toString(){const e=[]
return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new ju
return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}class qu{constructor(){this.ga=new an(H.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t)
n?0!==e.type&&3===n.type?this.ga=this.ga.insert(t,e):3===e.type&&1!==n.type?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.ga=this.ga.remove(t):1===e.type&&2===n.type?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):b(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[]
return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class Vu{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[]
return t.forEach(e=>{s.push({type:0,doc:e})}),new Vu(e,t,ju.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1
const t=this.docChanges,n=e.docChanges
if(t.length!==n.length)return!1
for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1
return!0}}class Bu{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Uu{constructor(){this.queries=$u(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(e,t){const n=S(e),r=n.queries
n.queries=$u(),r.forEach((e,n)=>{for(const r of n.Sa)r.onError(t)})}(this,new I(E.ABORTED,"Firestore shutting down"))}}function $u(){return new ii(e=>Xr(e),Yr)}async function zu(e,t){const n=S(e)
let r=3
const i=t.query
let s=n.queries.get(i)
s?!s.ba()&&t.Da()&&(r=2):(s=new Bu,r=t.Da()?0:1)
try{switch(r){case 0:s.wa=await n.onListen(i,!0)
break
case 1:s.wa=await n.onListen(i,!1)
break
case 2:await n.onFirstRemoteStoreListen(i)}}catch(e){const n=Lu(e,`Initialization of query '${Zr(t.query)}' failed`)
return void t.onError(n)}n.queries.set(i,s),s.Sa.push(t),t.va(n.onlineState),s.wa&&t.Fa(s.wa)&&Hu(n)}async function Gu(e,t){const n=S(e),r=t.query
let i=3
const s=n.queries.get(r)
if(s){const e=s.Sa.indexOf(t)
e>=0&&(s.Sa.splice(e,1),0===s.Sa.length?i=t.Da()?0:1:!s.ba()&&t.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0)
case 1:return n.queries.delete(r),n.onUnlisten(r,!1)
case 2:return n.onLastRemoteStoreUnlisten(r)
default:return}}function Ku(e,t){const n=S(e)
let r=!1
for(const i of t){const e=i.query,t=n.queries.get(e)
if(t){for(const e of t.Sa)e.Fa(i)&&(r=!0)
t.wa=i}}r&&Hu(n)}function Wu(e,t,n){const r=S(e),i=r.queries.get(t)
if(i)for(const s of i.Sa)s.onError(n)
r.queries.delete(t)}function Hu(e){e.Ca.forEach(e=>{e.next()})}var Qu,Ju;(Ju=Qu||(Qu={})).Ma="default",Ju.Cache="cache"
class Yu{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const t=[]
for(const n of e.docChanges)3!==n.type&&t.push(n)
e=new Vu(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1
return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e
let t=!1
return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache)return!0
if(!this.Da())return!0
const n="Offline"!==t
return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Ba(e){if(e.docChanges.length>0)return!0
const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites
return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ka(e){e=Vu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Qu.Cache}}class Xu{constructor(e,t){this.Qa=e,this.byteLength=t}$a(){return"metadata"in this.Qa}}class Zu{constructor(e){this.serializer=e}$s(e){return Ms(this.serializer,e)}Us(e){return e.metadata.exists?Vs(this.serializer,e.document,!1):ar.newNoDocument(this.$s(e.metadata.name),this.Ks(e.metadata.readTime))}Ks(e){return xs(e)}}class el{constructor(e,t){this.Ua=e,this.serializer=t,this.Ka=[],this.Wa=[],this.collectionGroups=new Set,this.progress=tl(e)}get queries(){return this.Ka}get documents(){return this.Wa}Ga(e){this.progress.bytesLoaded+=e.byteLength
let t=this.progress.documentsLoaded
if(e.Qa.namedQuery)this.Ka.push(e.Qa.namedQuery)
else if(e.Qa.documentMetadata){this.Wa.push({metadata:e.Qa.documentMetadata}),e.Qa.documentMetadata.exists||++t
const n=G.fromString(e.Qa.documentMetadata.name)
this.collectionGroups.add(n.get(n.length-2))}else e.Qa.document&&(this.Wa[this.Wa.length-1].document=e.Qa.document,++t)
return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,{...this.progress}):null}za(e){const t=new Map,n=new Zu(this.serializer)
for(const r of e)if(r.metadata.queries){const e=n.$s(r.metadata.name)
for(const n of r.metadata.queries){const r=(t.get(n)||mi()).add(e)
t.set(n,r)}}return t}async ja(e){const t=await async function(e,t,n,r){const i=S(e)
let s=mi(),o=oi()
for(const u of n){const e=t.$s(u.metadata.name)
u.document&&(s=s.add(e))
const n=t.Us(u)
n.setReadTime(t.Ks(u.metadata.readTime)),o=o.insert(e,n)}const a=i.Ns.newChangeBuffer({trackRemovals:!0}),c=await gc(i,function(e){return Kr(Ur(G.fromString(`__bundle__/docs/${e}`)))}(r))
return i.persistence.runTransaction("Apply bundle documents","readwrite",e=>pc(e,a,o).next(t=>(a.apply(e),t)).next(t=>i.Pi.removeMatchingKeysForTargetId(e,c.targetId).next(()=>i.Pi.addMatchingKeys(e,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(e,t.ks,t.qs)).next(()=>t.ks)))}(e,new Zu(this.serializer),this.Wa,this.Ua.id),n=this.za(this.documents)
for(const r of this.Ka)await Sc(e,r,n.get(r.name))
return this.progress.taskState="Success",{progress:this.progress,Ja:this.collectionGroups,Ha:t}}}function tl(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}class nl{constructor(e){this.key=e}}class rl{constructor(e){this.key=e}}class il{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=mi(),this.mutatedKeys=mi(),this.eu=ni(e),this.tu=new ju(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new qu,r=t?t.tu:this.tu
let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1
const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null
if(e.inorderTraversal((e,t)=>{const u=r.get(e),l=ei(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations)
let f=!1
u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.su(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.eu(l,a)>0||c&&this.eu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first()
s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{tu:s,iu:n,Cs:o,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.tu
this.tu=e.tu,this.mutatedKeys=e.mutatedKeys
const s=e.iu.ya()
s.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1
case 2:case 3:return 2
case 1:return 0
default:return b(20277,{Rt:e})}}
return n(e)-n(t)}(e.type,t.type)||this.eu(e.doc,t.doc)),this.ou(n),r=r??!1
const o=t&&!r?this._u():[],a=0===this.Xa.size&&this.current&&!r?1:0,c=a!==this.Za
return this.Za=a,0!==s.length||c?{snapshot:new Vu(this.query,e.tu,i,s,e.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:o}:{au:o}}va(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({tu:this.tu,iu:new qu,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=e.current)}_u(){if(!this.current)return[]
const e=this.Xa
this.Xa=mi(),this.tu.forEach(e=>{this.uu(e.key)&&(this.Xa=this.Xa.add(e.key))})
const t=[]
return e.forEach(e=>{this.Xa.has(e)||t.push(new rl(e))}),this.Xa.forEach(n=>{e.has(n)||t.push(new nl(n))}),t}cu(e){this.Ya=e.Qs,this.Xa=mi()
const t=this.ru(e.documents)
return this.applyChanges(t,!0)}lu(){return Vu.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,0===this.Za,this.hasCachedResults)}}const sl="SyncEngine"
class ol{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class al{constructor(e){this.key=e,this.hu=!1}}class cl{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Pu={},this.Tu=new ii(e=>Xr(e),Yr),this.Iu=new Map,this.Eu=new Set,this.du=new an(H.comparator),this.Au=new Map,this.Ru=new qa,this.Vu={},this.mu=new Map,this.fu=ha.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function ul(e,t,n=!0){const r=jl(e)
let i
const s=r.Tu.get(t)
return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await hl(r,t,n,!0),i}async function ll(e,t){const n=jl(e)
await hl(n,t,!0,!1)}async function hl(e,t,n,r){const i=await gc(e.localStore,Kr(t)),s=i.targetId,o=e.sharedClientState.addLocalQueryTarget(s,n)
let a
return r&&(a=await dl(e,t,s,"current"===o,i.resumeToken)),e.isPrimaryClient&&n&&uu(e.remoteStore,i),a}async function dl(e,t,n,r,i){e.pu=(t,n,r)=>async function(e,t,n,r){let i=t.view.ru(n)
i.Cs&&(i=await vc(e.localStore,t.query,!1).then(({documents:e})=>t.view.ru(e,i)))
const s=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o)
return Il(e,t.targetId,a.au),a.snapshot}(e,t,n,r)
const s=await vc(e.localStore,t,!0),o=new il(t,s.Qs),a=o.ru(s.documents),c=fs.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c)
Il(e,n,u.au)
const l=new ol(t,n,o)
return e.Tu.set(t,l),e.Iu.has(n)?e.Iu.get(n).push(t):e.Iu.set(n,[t]),u.snapshot}async function fl(e,t,n){const r=S(e),i=r.Tu.get(t),s=r.Iu.get(i.targetId)
if(s.length>1)return r.Iu.set(i.targetId,s.filter(e=>!Yr(e,t))),void r.Tu.delete(t)
r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await yc(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&lu(r.remoteStore,i.targetId),Sl(r,i.targetId)}).catch(Ee)):(Sl(r,i.targetId),await yc(r.localStore,i.targetId,!0))}async function pl(e,t){const n=S(e),r=n.Tu.get(t),i=n.Iu.get(r.targetId)
n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),lu(n.remoteStore,r.targetId))}async function ml(e,t){const n=S(e)
try{const e=await function(e,t){const n=S(e),r=t.snapshotVersion
let i=n.Ms
return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.Ns.newChangeBuffer({trackRemovals:!0})
i=n.Ms
const o=[]
t.targetChanges.forEach((s,a)=>{const c=i.get(a)
if(!c)return
o.push(n.Pi.removeMatchingKeys(e,s.removedDocuments,a).next(()=>n.Pi.addMatchingKeys(e,s.addedDocuments,a)))
let u=c.withSequenceNumber(e.currentSequenceNumber)
null!==t.targetMismatches.get(a)?u=u.withResumeToken(mn.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,u,s)&&o.push(n.Pi.updateTargetData(e,u))})
let a=oi(),c=mi()
if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(pc(e,s,t.documentUpdates).next(e=>{a=e.ks,c=e.qs})),!r.isEqual(ce.min())){const t=n.Pi.getLastRemoteSnapshotVersion(e).next(t=>n.Pi.setTargetsMetadata(e,e.currentSequenceNumber,r))
o.push(t)}return Ie.waitFor(o).next(()=>s.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,a,c)).next(()=>a)}).then(e=>(n.Ms=i,e))}(n.localStore,t)
t.targetChanges.forEach((e,t)=>{const r=n.Au.get(t)
r&&(_(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1,22616),e.addedDocuments.size>0?r.hu=!0:e.modifiedDocuments.size>0?_(r.hu,14607):e.removedDocuments.size>0&&(_(r.hu,42227),r.hu=!1))}),await Cl(n,e,t)}catch(e){await Ee(e)}}function gl(e,t,n){const r=S(e)
if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[]
r.Tu.forEach((n,r)=>{const i=r.view.va(t)
i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=S(e)
n.onlineState=t
let r=!1
n.queries.forEach((e,n)=>{for(const i of n.Sa)i.va(t)&&(r=!0)}),r&&Hu(n)}(r.eventManager,t),e.length&&r.Pu.H_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function yl(e,t,n){const r=S(e)
r.sharedClientState.updateQueryState(t,"rejected",n)
const i=r.Au.get(t),s=i&&i.key
if(s){let e=new an(H.comparator)
e=e.insert(s,ar.newNoDocument(s,ce.min()))
const n=mi().add(s),i=new ds(ce.min(),new Map,new an(F),e,n)
await ml(r,i),r.du=r.du.remove(s),r.Au.delete(t),Al(r)}else await yc(r.localStore,t,!1).then(()=>Sl(r,t,n)).catch(Ee)}async function vl(e,t){const n=S(e),r=t.batch.batchId
try{const e=await function(e,t){const n=S(e)
return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0})
return function(e,t,n,r){const i=n.batch,s=i.keys()
let o=Ie.resolve()
return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e)
_(null!==s,48541),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=mi()
for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key))
return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}(n.localStore,t)
_l(n,r,null),wl(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Cl(n,e)}catch(e){await Ee(e)}}async function bl(e,t,n){const r=S(e)
try{const e=await function(e,t){const n=S(e)
return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r
return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(_(null!==t,37113),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t)
_l(r,t,n),wl(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Cl(r,e)}catch(n){await Ee(n)}}function wl(e,t){(e.mu.get(t)||[]).forEach(e=>{e.resolve()}),e.mu.delete(t)}function _l(e,t,n){const r=S(e)
let i=r.Vu[r.currentUser.toKey()]
if(i){const e=i.get(t)
e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Vu[r.currentUser.toKey()]=i}}function Sl(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t)
for(const r of e.Iu.get(t))e.Tu.delete(r),n&&e.Pu.yu(r,n)
e.Iu.delete(t),e.isPrimaryClient&&e.Ru.jr(t).forEach(t=>{e.Ru.containsKey(t)||El(e,t)})}function El(e,t){e.Eu.delete(t.path.canonicalString())
const n=e.du.get(t)
null!==n&&(lu(e.remoteStore,n),e.du=e.du.remove(t),e.Au.delete(n),Al(e))}function Il(e,t,n){for(const r of n)r instanceof nl?(e.Ru.addReference(r.key,t),Tl(e,r)):r instanceof rl?(m(sl,"Document no longer in limbo: "+r.key),e.Ru.removeReference(r.key,t),e.Ru.containsKey(r.key)||El(e,r.key)):b(19791,{wu:r})}function Tl(e,t){const n=t.key,r=n.path.canonicalString()
e.du.get(n)||e.Eu.has(r)||(m(sl,"New document in limbo: "+n),e.Eu.add(r),Al(e))}function Al(e){for(;e.Eu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){const t=e.Eu.values().next().value
e.Eu.delete(t)
const n=new H(G.fromString(t)),r=e.fu.next()
e.Au.set(r,new al(n)),e.du=e.du.insert(n,r),uu(e.remoteStore,new no(Kr(Ur(n.path)),r,"TargetPurposeLimboResolution",qe.ce))}}async function Cl(e,t,n){const r=S(e),i=[],s=[],o=[]
r.Tu.isEmpty()||(r.Tu.forEach((e,a)=>{o.push(r.pu(a,t,n).then(e=>{if((e||n)&&r.isPrimaryClient){const t=e?!e.fromCache:n?.targetChanges.get(a.targetId)?.current
r.sharedClientState.updateQueryState(a.targetId,t?"current":"not-current")}if(e){i.push(e)
const t=oc.As(a.targetId,e)
s.push(t)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(e,t){const n=S(e)
try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Ie.forEach(t,t=>Ie.forEach(t.Es,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>Ie.forEach(t.ds,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!Re(e))throw e
m(uc,"Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId
if(!r.fromCache){const t=n.Ms.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r)
n.Ms=n.Ms.insert(e,i)}}}(r.localStore,s))}async function kl(e,t){const n=S(e)
if(!n.currentUser.isEqual(t)){m(sl,"User change. New user:",t.toKey())
const e=await dc(n.localStore,t)
n.currentUser=t,function(e){e.mu.forEach(e=>{e.forEach(e=>{e.reject(new I(E.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.mu.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Cl(n,e.Ls)}}function xl(e,t){const n=S(e),r=n.Au.get(t)
if(r&&r.hu)return mi().add(r.key)
{let e=mi()
const r=n.Iu.get(t)
if(!r)return e
for(const t of r){const r=n.Tu.get(t)
e=e.unionWith(r.view.nu)}return e}}async function Dl(e,t){const n=S(e),r=await vc(n.localStore,t.query,!0),i=t.view.cu(r)
return n.isPrimaryClient&&Il(n,t.targetId,i.au),i}async function Rl(e,t){const n=S(e)
return wc(n.localStore,t).then(e=>Cl(n,e))}async function Nl(e,t,n,r){const i=S(e),s=await function(e,t){const n=S(e),r=S(n.mutationQueue)
return n.persistence.runTransaction("Lookup mutation documents","readonly",e=>r.er(e,t).next(t=>t?n.localDocuments.getDocuments(e,t):Ie.resolve(null)))}(i.localStore,t)
null!==s?("pending"===n?await Eu(i.remoteStore):"acknowledged"===n||"rejected"===n?(_l(i,t,r||null),wl(i,t),function(e,t){S(S(e).mutationQueue).ir(t)}(i.localStore,t)):b(6720,"Unknown batchState",{Su:n}),await Cl(i,s)):m(sl,"Cannot apply mutation batch with id: "+t)}async function Ol(e,t,n){const r=S(e),i=[],s=[]
for(const o of t){let e
const t=r.Iu.get(o)
if(t&&0!==t.length){e=await gc(r.localStore,Kr(t[0]))
for(const e of t){const t=r.Tu.get(e),n=await Dl(r,t)
n.snapshot&&s.push(n.snapshot)}}else{const t=await bc(r.localStore,o)
e=await gc(r.localStore,t),await dl(r,Ml(t),o,!1,e.resumeToken)}i.push(e)}return r.Pu.H_(s),i}function Ml(e){return Br(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Pl(e){return function(e){return S(S(e).persistence).Ts()}(S(e).localStore)}async function Fl(e,t,n,r){const i=S(e)
if(i.gu)return void m(sl,"Ignoring unexpected query state notification.")
const s=i.Iu.get(t)
if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await wc(i.localStore,ti(s[0])),r=ds.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,mn.EMPTY_BYTE_STRING)
await Cl(i,e,r)
break}case"rejected":await yc(i.localStore,t,!0),Sl(i,t,r)
break
default:b(64155,n)}}async function Ll(e,t,n){const r=jl(e)
if(r.gu){for(const e of t){if(r.Iu.has(e)&&r.sharedClientState.isActiveQueryTarget(e)){m(sl,"Adding an already active target "+e)
continue}const t=await bc(r.localStore,e),n=await gc(r.localStore,t)
await dl(r,Ml(t),n.targetId,!1,n.resumeToken),uu(r.remoteStore,n)}for(const e of n)r.Iu.has(e)&&await yc(r.localStore,e,!1).then(()=>{lu(r.remoteStore,e),Sl(r,e)}).catch(Ee)}}function jl(e){const t=S(e)
return t.remoteStore.remoteSyncer.applyRemoteEvent=ml.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=xl.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=yl.bind(null,t),t.Pu.H_=Ku.bind(null,t.eventManager),t.Pu.yu=Wu.bind(null,t.eventManager),t}function ql(e){const t=S(e)
return t.remoteStore.remoteSyncer.applySuccessfulWrite=vl.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=bl.bind(null,t),t}class Vl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Jc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return hc(this.persistence,new cc,e.initialUser,this.serializer)}Cu(e){return new Ga(Wa.mi,this.serializer)}Du(e){return new Fc}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vl.provider={build:()=>new Vl}
class Bl extends Vl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){_(this.persistence.referenceDelegate instanceof Ha,46915)
const n=this.persistence.referenceDelegate.garbageCollector
return new wa(n,e.asyncQueue,t)}Cu(e){const t=void 0!==this.cacheSizeBytes?ra.withCacheSize(this.cacheSizeBytes):ra.DEFAULT
return new Ga(e=>Ha.mi(e,t),this.serializer)}}class Ul extends Vl{constructor(e,t,n){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await ql(this.xu.syncEngine),await Eu(this.xu.remoteStore),await this.persistence.Ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return hc(this.persistence,new cc,e.initialUser,this.serializer)}Fu(e,t){const n=this.persistence.referenceDelegate.garbageCollector
return new wa(n,e.asyncQueue,t)}Mu(e,t){const n=new je(t,this.persistence)
return new Le(e.asyncQueue,n)}Cu(e){const t=sc(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?ra.withCacheSize(this.cacheSizeBytes):ra.DEFAULT
return new nc(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Hc(),Qc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new Fc}}class $l extends Ul{constructor(e,t){super(e,t,!1),this.xu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e)
const t=this.xu.syncEngine
this.sharedClientState instanceof Pc&&(this.sharedClientState.syncEngine={Co:Nl.bind(null,t),vo:Fl.bind(null,t),Fo:Ll.bind(null,t),Ts:Pl.bind(null,t),Do:Rl.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ji(async e=>{await async function(e,t){const n=S(e)
if(jl(n),ql(n),!0===t&&!0!==n.gu){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Ol(n,e.toArray())
n.gu=!0,await Ou(n.remoteStore,!0)
for(const r of t)uu(n.remoteStore,r)}else if(!1===t&&!1!==n.gu){const e=[]
let t=Promise.resolve()
n.Iu.forEach((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then(()=>(Sl(n,i),yc(n.localStore,i,!0))),lu(n.remoteStore,i)}),await t,await Ol(n,e),function(e){const t=S(e)
t.Au.forEach((e,n)=>{lu(t.remoteStore,n)}),t.Ru.Jr(),t.Au=new Map,t.du=new an(H.comparator)}(n),n.gu=!1,await Ou(n.remoteStore,!1)}}(this.xu.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}Du(e){const t=Hc()
if(!Pc.v(t))throw new I(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.")
const n=sc(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey)
return new Pc(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class zl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>gl(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=kl.bind(null,this.syncEngine),await Ou(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Uu}createDatastore(e){const t=Jc(e.databaseInfo.databaseId),n=function(e){return new Wc(e)}(e.databaseInfo)
return function(e,t,n,r){return new ru(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new ou(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,e=>gl(this.syncEngine,e,0),qc.v()?new qc:new Lc)}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new cl(e,t,n,r,i,s)
return o&&(a.gu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(e){const t=S(e)
m(su,"RemoteStore shutting down."),t.Ea.add(5),await cu(t),t.Aa.shutdown(),t.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}function Gl(e,t=10240){let n=0
return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1}
return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}zl.provider={build:()=>new zl}
class Kl{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):g("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}class Wl{constructor(e,t){this.Bu=e,this.serializer=t,this.metadata=new T,this.buffer=new Uint8Array,this.Lu=new TextDecoder("utf-8"),this.ku().then(e=>{e&&e.$a()?this.metadata.resolve(e.Qa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(e?.Qa)}`))},e=>this.metadata.reject(e))}close(){return this.Bu.cancel()}async getMetadata(){return this.metadata.promise}async bu(){return await this.getMetadata(),this.ku()}async ku(){const e=await this.qu()
if(null===e)return null
const t=this.Lu.decode(e),n=Number(t)
isNaN(n)&&this.Qu(`length string (${t}) is not valid number`)
const r=await this.$u(n)
return new Xu(JSON.parse(r),e.length+n)}Uu(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async qu(){for(;this.Uu()<0&&!await this.Ku(););if(0===this.buffer.length)return null
const e=this.Uu()
e<0&&this.Qu("Reached the end of bundle when a length string is expected.")
const t=this.buffer.slice(0,e)
return this.buffer=this.buffer.slice(e),t}async $u(e){for(;this.buffer.length<e;)await this.Ku()&&this.Qu("Reached the end of bundle when more is expected.")
const t=this.Lu.decode(this.buffer.slice(0,e))
return this.buffer=this.buffer.slice(e),t}Qu(e){throw this.Bu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ku(){const e=await this.Bu.read()
if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length)
t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}class Hl{constructor(e,t){this.bundleData=e,this.serializer=t,this.cursor=0,this.elements=[]
let n=this.bu()
if(!n||!n.$a())throw new Error(`The first element of the bundle is not a metadata object, it is\n         ${JSON.stringify(n?.Qa)}`)
this.metadata=n
do{n=this.bu(),null!==n&&this.elements.push(n)}while(null!==n)}getMetadata(){return this.metadata}Wu(){return this.elements}bu(){if(this.cursor===this.bundleData.length)return null
const e=this.qu(),t=this.$u(e)
return new Xu(JSON.parse(t),e)}$u(e){if(this.cursor+e>this.bundleData.length)throw new I(E.INTERNAL,"Reached the end of bundle when more is expected.")
return this.bundleData.slice(this.cursor,this.cursor+=e)}qu(){const e=this.cursor
let t=this.cursor
for(;t<this.bundleData.length;){if("{"===this.bundleData[t]){if(t===e)throw new Error("First character is a bracket and not a number")
return this.cursor=t,Number(this.bundleData.slice(e,t))}t++}throw new Error("Reached the end of bundle when more is expected.")}}class Ql{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new I(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError
const t=await async function(e,t){const n=S(e),r={documents:t.map(e=>Os(n.serializer,e))},i=await n.Ho("BatchGetDocuments",n.serializer.databaseId,G.emptyPath(),r,t.length),s=new Map
i.forEach(e=>{const t=function(e,t){return"found"in t?function(e,t){_(!!t.found,43571),t.found.name,t.found.updateTime
const n=Ms(e,t.found.name),r=xs(t.found.updateTime),i=t.found.createTime?xs(t.found.createTime):ce.min(),s=new sr({mapValue:{fields:t.found.fields}})
return ar.newFoundDocument(n,r,i,s)}(e,t):"missing"in t?function(e,t){_(!!t.missing,3894),_(!!t.readTime,22933)
const n=Ms(e,t.missing),r=xs(t.readTime)
return ar.newNoDocument(n,r)}(e,t):b(7234,{result:t})}(n.serializer,e)
s.set(t.key.toString(),t)})
const o=[]
return t.forEach(e=>{const t=s.get(e.toString())
_(!!t,55234,{key:e}),o.push(t)}),o}(this.datastore,e)
return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastTransactionError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Hi(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError
const e=this.readVersions
this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{const n=H.fromPath(t)
this.mutations.push(new Qi(n,this.precondition(n)))}),await async function(e,t){const n=S(e),r={writes:t.map(e=>Bs(n.serializer,e))}
await n.Go("Commit",n.serializer.databaseId,G.emptyPath(),r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t
if(e.isFoundDocument())t=e.version
else{if(!e.isNoDocument())throw b(50498,{Gu:e.constructor.name})
t=ce.min()}const n=this.readVersions.get(e.key.toString())
if(n){if(!t.isEqual(n))throw new I(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString())
return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ce.min())?Pi.exists(!1):Pi.updateTime(t):Pi.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString())
if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ce.min()))throw new I(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.")
return Pi.updateTime(t)}return Pi.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}class Jl{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.zu=n.maxAttempts,this.M_=new Yc(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_(async()=>{const e=new Ql(this.datastore),t=this.Hu(e)
t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Yu(e)}))}).catch(e=>{this.Yu(e)})})}Hu(e){try{const t=this.updateFunction(e)
return!Be(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ju(),Promise.resolve()))):this.deferred.reject(e)}Zu(e){if("FirebaseError"===e?.name){const t=e.code
return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!rs(t)}return!1}}const Yl="FirestoreClient"
class Xl{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=h.UNAUTHENTICATED,this.clientId=P.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{m(Yl,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(m(Yl,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode()
const e=new T
return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Lu(t,"Failed to shutdown persistence")
e.reject(r)}}),e.promise}}async function Zl(e,t){e.asyncQueue.verifyOperationInProgress(),m(Yl,"Initializing OfflineComponentProvider")
const n=e.configuration
await t.initialize(n)
let r=n.initialUser
e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await dc(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function eh(e,t){e.asyncQueue.verifyOperationInProgress()
const n=await th(e)
m(Yl,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>Nu(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>Nu(t.remoteStore,n)),e._onlineComponents=t}async function th(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){m(Yl,"Using user provided OfflineComponentProvider")
try{await Zl(e,e._uninitializedComponentsProvider._offline)}catch(t){const r=t
if(!function(e){return"FirebaseError"===e.name?e.code===E.FAILED_PRECONDITION||e.code===E.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}(r))throw r
y("Error using user provided cache. Falling back to memory cache: "+r),await Zl(e,new Vl)}}else m(Yl,"Using default OfflineComponentProvider"),await Zl(e,new Bl(void 0))
return e._offlineComponents}async function nh(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(m(Yl,"Using user provided OnlineComponentProvider"),await eh(e,e._uninitializedComponentsProvider._online)):(m(Yl,"Using default OnlineComponentProvider"),await eh(e,new zl))),e._onlineComponents}function rh(e){return th(e).then(e=>e.persistence)}function ih(e){return th(e).then(e=>e.localStore)}function sh(e){return nh(e).then(e=>e.remoteStore)}function oh(e){return nh(e).then(e=>e.syncEngine)}function ah(e){return nh(e).then(e=>e.datastore)}async function ch(e){const t=await nh(e),n=t.eventManager
return n.onListen=ul.bind(null,t.syncEngine),n.onUnlisten=fl.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=ll.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=pl.bind(null,t.syncEngine),n}function uh(e,t,n={}){const r=new T
return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new Kl({next:a=>{s.Nu(),t.enqueueAndForget(()=>Gu(e,o))
const c=a.docs.has(n)
!c&&a.fromCache?i.reject(new I(E.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&a.fromCache&&r&&"server"===r.source?i.reject(new I(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:e=>i.reject(e)}),o=new Yu(Ur(n.path),s,{includeMetadataChanges:!0,qa:!0})
return zu(e,o)}(await ch(e),e.asyncQueue,t,n,r)),r.promise}function lh(e,t,n={}){const r=new T
return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new Kl({next:n=>{s.Nu(),t.enqueueAndForget(()=>Gu(e,o)),n.fromCache&&"server"===r.source?i.reject(new I(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Yu(n,s,{includeMetadataChanges:!0,qa:!0})
return zu(e,o)}(await ch(e),e.asyncQueue,t,n,r)),r.promise}function hh(e,t){return function(e,t){return new Hl(e,t)}(e,t)}function dh(e){const t={}
return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}const fh=new Map,ph="firestore.googleapis.com",mh=!0
class gh{constructor(e){if(void 0===e.host){if(void 0!==e.ssl)throw new I(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set")
this.host=ph,this.ssl=mh}else this.host=e.host,this.ssl=e.ssl??mh
if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=na
else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<ya)throw new I(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576")
this.cacheSizeBytes=e.cacheSizeBytes}J("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dh(e.experimentalLongPollingOptions??{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new I(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`)
if(e.timeoutSeconds<5)throw new I(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`)
if(e.timeoutSeconds>30)throw new I(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yh{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new I(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available")
return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new I(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.")
this._settings=new gh(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new C
switch(e.type){case"firstParty":return new R(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null)
case"provider":return e.client
default:throw new I(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=fh.get(e)
t&&(m("ComponentProvider","Removing Datastore"),fh.delete(e),t.terminate())}(this),Promise.resolve()}}function vh(e,t,n,r={}){e=te(e,yh)
const i=o.isCloudWorkstation(t),s=e._getSettings(),a={...s,emulatorOptions:e._getEmulatorOptions()},c=`${t}:${n}`
i&&(o.pingServer(`https://${c}`),o.updateEmulatorBanner("Firestore",!0)),s.host!==ph&&s.host!==c&&y("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.")
const u={...s,host:c,ssl:i,emulatorOptions:r}
if(!o.deepEqual(u,a)&&(e._setSettings(u),r.mockUserToken)){let t,n
if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=h.MOCK_USER
else{t=o.createMockUserToken(r.mockUserToken,e._app?.options.projectId)
const i=r.mockUserToken.sub||r.mockUserToken.user_id
if(!i)throw new I(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!")
n=new h(i)}e._authCredentials=new k(new A(t,n))}}class bh{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new bh(this.firestore,e,this._query)}}class wh{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _h(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wh(this.firestore,e,this._key)}toJSON(){return{type:wh._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(ie(t,wh._jsonSchema))return new wh(e,n||null,new H(G.fromString(t.referencePath)))}}wh._jsonSchemaVersion="firestore/documentReference/1.0",wh._jsonSchema={type:re("string",wh._jsonSchemaVersion),referencePath:re("string")}
class _h extends bh{constructor(e,t,n){super(e,t,Ur(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast()
return e.isEmpty()?null:new wh(this.firestore,null,new H(e))}withConverter(e){return new _h(this.firestore,e,this._path)}}function Sh(e,t,...n){if(e=o.getModularInstance(e),1===arguments.length&&(t=P.newId()),Q("doc","path",t),e instanceof yh){const r=G.fromString(t,...n)
return Y(r),new wh(e,null,new H(r))}{if(!(e instanceof wh||e instanceof _h))throw new I(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore")
const r=e._path.child(G.fromString(t,...n))
return Y(r),new wh(e.firestore,e instanceof _h?e.converter:null,new H(r))}}function Eh(e,t){return e=o.getModularInstance(e),t=o.getModularInstance(t),e instanceof bh&&t instanceof bh&&e.firestore===t.firestore&&Yr(e._query,t._query)&&e.converter===t.converter}const Ih="AsyncQueue"
class Th{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Yc(this,"async_queue_retry"),this._c=()=>{const e=Qc()
e&&m(Ih,"Visibility state changed to "+e.visibilityState),this.M_.w_()},this.ac=e
const t=Qc()
t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1
const t=Qc()
t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{})
const t=new T
return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(0!==this.Xu.length){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Re(e))throw e
m(Ih,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(e=>{throw this.nc=e,this.rc=!1,g("INTERNAL UNHANDLED ERROR: ",Ah(e)),e}).then(e=>(this.rc=!1,e))))
return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0)
const r=Fu.createAndSchedule(this,e,t,n,e=>this.hc(e))
return this.tc.push(r),r}uc(){this.nc&&b(47125,{Pc:Ah(this.nc)})}verifyOperationInProgress(){}async Tc(){let e
do{e=this.ac,await e}while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0
return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs)
for(const t of this.tc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break
return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e)
this.tc.splice(t,1)}}function Ah(e){let t=e.message||""
return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}function Ch(e){return function(e){if("object"!=typeof e||null===e)return!1
const t=e
for(const n of["next","error","complete"])if(n in t&&"function"==typeof t[n])return!0
return!1}(e)}class kh{constructor(){this._progressObserver={},this._taskCompletionResolver=new T,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}class xh extends yh{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Th,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate()
this._queue=new Th(e),this._firestoreClient=void 0,await e}}}function Dh(e){if(e._terminated)throw new I(E.FAILED_PRECONDITION,"The client has already been terminated.")
return e._firestoreClient||Rh(e),e._firestoreClient}function Rh(e){const t=e._freezeSettings(),n=function(e,t,n,r){return new Cn(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,dh(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator)}(e._databaseId,e._app?.options.appId||"",e._persistenceKey,t)
e._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new Xl(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(e){const t=e?._online.build()
return{_offline:e?._offline.build(t),_online:t}}(e._componentsProvider))}function Nh(e,t,n){if((e=te(e,xh))._firestoreClient||e._terminated)throw new I(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")
if(e._componentsProvider||e._getSettings().localCache)throw new I(E.FAILED_PRECONDITION,"SDK cache is already specified.")
e._componentsProvider={_online:t,_offline:n},Rh(e)}function Oh(e,t){const n=Dh(e=te(e,xh)),r=new kh
return function(e,t,n,r){const i=function(e,t){let n
return n="string"==typeof e?os().encode(e):e,function(e,t){return new Wl(e,t)}(function(e,t){if(e instanceof Uint8Array)return Gl(e,t)
if(e instanceof ArrayBuffer)return Gl(new Uint8Array(e),t)
if(e instanceof ReadableStream)return e.getReader()
throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}(n,Jc(t))
e.asyncQueue.enqueueAndForget(async()=>{!function(e,t,n){const r=S(e);(async function(e,t,n){try{const r=await t.getMetadata()
if(await function(e,t){const n=S(e),r=xs(t.createTime)
return n.persistence.runTransaction("hasNewerBundle","readonly",e=>n.Ii.getBundleMetadata(e,t.id)).then(e=>!!e&&e.createTime.compareTo(r)>=0)}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set)
n._updateProgress(tl(r))
const i=new el(r,t.serializer)
let s=await t.bu()
for(;s;){const e=await i.Ga(s)
e&&n._updateProgress(e),s=await t.bu()}const o=await i.ja(e.localStore)
return await Cl(e,o.Ha,void 0),await function(e,t){const n=S(e)
return n.persistence.runTransaction("Save bundle","readwrite",e=>n.Ii.saveBundleMetadata(e,t))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Ja)}catch(e){return y(sl,`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}})(r,t,n).then(e=>{r.sharedClientState.notifyBundleLoaded(e)})}(await oh(e),i,r)})}(n,e._databaseId,t,r),r}function Mh(e,t){return function(e,t){return e.asyncQueue.enqueue(async()=>function(e,t){const n=S(e)
return n.persistence.runTransaction("Get named query","readonly",e=>n.Ii.getNamedQuery(e,t))}(await ih(e),t))}(Dh(e=te(e,xh)),t).then(t=>t?new bh(e,null,t.query):null)}class Ph{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class Fh{constructor(e,t,n){this._userDataWriter=t,this._data=n,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}class Lh{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lh(mn.fromBase64String(e))}catch(e){throw new I(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Lh(mn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Lh._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ie(e,Lh._jsonSchema))return Lh.fromBase64String(e.bytes)}}Lh._jsonSchemaVersion="firestore/bytes/1.0",Lh._jsonSchema={type:re("string",Lh._jsonSchemaVersion),bytes:re("string")}
class jh{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new I(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.")
this._internalPath=new W(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}class qh{constructor(e){this._methodName=e}}class Vh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new I(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e)
if(!isFinite(t)||t<-180||t>180)throw new I(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t)
this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return F(this._lat,e._lat)||F(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Vh._jsonSchemaVersion}}static fromJSON(e){if(ie(e,Vh._jsonSchema))return new Vh(e.latitude,e.longitude)}}Vh._jsonSchemaVersion="firestore/geoPoint/1.0",Vh._jsonSchema={type:re("string",Vh._jsonSchemaVersion),latitude:re("number"),longitude:re("number")}
class Bh{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1
for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1
return!0}(this._values,e._values)}toJSON(){return{type:Bh._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ie(e,Bh._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new Bh(e.vectorValues)
throw new I(E.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Bh._jsonSchemaVersion="firestore/vectorValue/1.0",Bh._jsonSchema={type:re("string",Bh._jsonSchemaVersion),vectorValues:re("object")}
const Uh=/^__.*__$/
class $h{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new zi(e,this.data,this.fieldMask,t,this.fieldTransforms):new $i(e,this.data,t,this.fieldTransforms)}}class zh{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new zi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Gh(e){switch(e){case 0:case 2:case 1:return!0
case 3:case 4:return!1
default:throw b(40011,{Ac:e})}}class Kh{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Kh({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),n=this.Vc({path:t,fc:!1})
return n.gc(e),n}yc(e){const t=this.path?.child(e),n=this.Vc({path:t,fc:!1})
return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return dd(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(0===e.length)throw this.Sc("Document fields must not be empty")
if(Gh(this.Ac)&&Uh.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Wh{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Jc(e)}Cc(e,t,n,r=!1){return new Kh({Ac:e,methodName:t,Dc:n,path:W.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hh(e){const t=e._freezeSettings(),n=Jc(e._databaseId)
return new Wh(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Qh(e,t,n,r,i,s={}){const o=e.Cc(s.merge||s.mergeFields?2:0,t,n,i)
cd("Data must be an object, but it was:",o,r)
const a=od(r,o)
let c,u
if(s.merge)c=new fn(o.fieldMask),u=o.fieldTransforms
else if(s.mergeFields){const e=[]
for(const r of s.mergeFields){const i=ud(t,r,n)
if(!o.contains(i))throw new I(E.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`)
fd(e,i)||e.push(i)}c=new fn(e),u=o.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,u=o.fieldTransforms
return new $h(new sr(a),c,u)}class Jh extends qh{_toFieldTransform(e){if(2!==e.Ac)throw 1===e.Ac?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`)
return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jh}}function Yh(e,t,n){return new Kh({Ac:3,Dc:t.settings.Dc,methodName:e._methodName,fc:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Xh extends qh{_toFieldTransform(e){return new Oi(e.path,new Ti)}isEqual(e){return e instanceof Xh}}class Zh extends qh{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Yh(this,e,!0),n=this.vc.map(e=>sd(e,t)),r=new Ai(n)
return new Oi(e.path,r)}isEqual(e){return e instanceof Zh&&o.deepEqual(this.vc,e.vc)}}class ed extends qh{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Yh(this,e,!0),n=this.vc.map(e=>sd(e,t)),r=new ki(n)
return new Oi(e.path,r)}isEqual(e){return e instanceof ed&&o.deepEqual(this.vc,e.vc)}}class td extends qh{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new Di(e.serializer,wi(e.serializer,this.Fc))
return new Oi(e.path,t)}isEqual(e){return e instanceof td&&this.Fc===e.Fc}}function nd(e,t,n,r){const i=e.Cc(1,t,n)
cd("Data must be an object, but it was:",i,r)
const s=[],a=sr.empty()
rn(r,(e,r)=>{const c=hd(t,e,n)
r=o.getModularInstance(r)
const u=i.yc(c)
if(r instanceof Jh)s.push(c)
else{const e=sd(r,u)
null!=e&&(s.push(c),a.set(c,e))}})
const c=new fn(s)
return new zh(a,c,i.fieldTransforms)}function rd(e,t,n,r,i,s){const a=e.Cc(1,t,n),c=[ud(t,r,n)],u=[i]
if(s.length%2!=0)throw new I(E.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`)
for(let o=0;o<s.length;o+=2)c.push(ud(t,s[o])),u.push(s[o+1])
const l=[],h=sr.empty()
for(let f=c.length-1;f>=0;--f)if(!fd(l,c[f])){const e=c[f]
let t=u[f]
t=o.getModularInstance(t)
const n=a.yc(e)
if(t instanceof Jh)l.push(e)
else{const r=sd(t,n)
null!=r&&(l.push(e),h.set(e,r))}}const d=new fn(l)
return new zh(h,d,a.fieldTransforms)}function id(e,t,n,r=!1){return sd(n,e.Cc(r?4:3,t))}function sd(e,t){if(ad(e=o.getModularInstance(e)))return cd("Unsupported field value:",t,e),od(e,t)
if(e instanceof qh)return function(e,t){if(!Gh(t.Ac))throw t.Sc(`${e._methodName}() can only be used with update() and set()`)
if(!t.path)throw t.Sc(`${e._methodName}() is not currently supported inside arrays`)
const n=e._toFieldTransform(t)
n&&t.fieldTransforms.push(n)}(e,t),null
if(void 0===e&&t.ignoreUndefinedProperties)return null
if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.fc&&4!==t.Ac)throw t.Sc("Nested arrays are not supported")
return function(e,t){const n=[]
let r=0
for(const i of e){let e=sd(i,t.wc(r))
null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=o.getModularInstance(e)))return{nullValue:"NULL_VALUE"}
if("number"==typeof e)return wi(t.serializer,e)
if("boolean"==typeof e)return{booleanValue:e}
if("string"==typeof e)return{stringValue:e}
if(e instanceof Date){const n=ae.fromDate(e)
return{timestampValue:As(t.serializer,n)}}if(e instanceof ae){const n=new ae(e.seconds,1e3*Math.floor(e.nanoseconds/1e3))
return{timestampValue:As(t.serializer,n)}}if(e instanceof Vh)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}}
if(e instanceof Lh)return{bytesValue:Cs(t.serializer,e._byteString)}
if(e instanceof wh){const n=t.databaseId,r=e.firestore._databaseId
if(!r.isEqual(n))throw t.Sc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`)
return{referenceValue:Ds(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof Bh)return function(e,t){return{mapValue:{fields:{[Dn]:{stringValue:On},[Mn]:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.Sc("VectorValues must only contain numeric values.")
return vi(t.serializer,e)})}}}}}}(e,t)
throw t.Sc(`Unsupported field value: ${ee(e)}`)}(e,t)}function od(e,t){const n={}
return on(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):rn(e,(e,r)=>{const i=sd(r,t.mc(e))
null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function ad(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ae||e instanceof Vh||e instanceof Lh||e instanceof wh||e instanceof qh||e instanceof Bh)}function cd(e,t,n){if(!ad(n)||!Z(n)){const r=ee(n)
throw"an object"===r?t.Sc(e+" a custom object"):t.Sc(e+" "+r)}}function ud(e,t,n){if((t=o.getModularInstance(t))instanceof jh)return t._internalPath
if("string"==typeof t)return hd(e,t)
throw dd("Field path arguments must be of type string or ",e,!1,void 0,n)}const ld=new RegExp("[~\\*/\\[\\]]")
function hd(e,t,n){if(t.search(ld)>=0)throw dd(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n)
try{return new jh(...t.split("."))._internalPath}catch(r){throw dd(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function dd(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i
let a=`Function ${t}() called with invalid data`
n&&(a+=" (via `toFirestore()`)"),a+=". "
let c=""
return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new I(E.INVALID_ARGUMENT,a+e+c)}function fd(e,t){return e.some(e=>e.isEqual(t))}class pd{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new wh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new md(this._firestore,this._userDataWriter,this._key,this._document,null)
return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(gd("DocumentSnapshot.get",e))
if(null!==t)return this._userDataWriter.convertValue(t)}}}class md extends pd{data(){return super.data()}}function gd(e,t){return"string"==typeof t?hd(e,t):t instanceof jh?t._internalPath:t._delegate._internalPath}function yd(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new I(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vd{}class bd extends vd{}class wd extends bd{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new wd(e,t,n)}_apply(e){const t=this._parse(e)
return xd(e._query,t),new bh(e.firestore,e.converter,Qr(e._query,t))}_parse(e){const t=Hh(e.firestore),n=function(e,t,n,r,i,s,o){let a
if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new I(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`)
if("in"===s||"not-in"===s){kd(o,s)
const t=[]
for(const n of o)t.push(Cd(r,e,n))
a={arrayValue:{values:t}}}else a=Cd(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||kd(o,s),a=id(n,"where",o,"in"===s||"not-in"===s)
return pr.create(i,s,a)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value)
return n}}class _d extends vd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new _d(e,t)}_parse(e){const t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0)
return 1===t.length?t[0]:mr.create(t,this._getOperator())}_apply(e){const t=this._parse(e)
return 0===t.getFilters().length?e:(function(e,t){let n=e
const r=t.getFlattenedFilters()
for(const i of r)xd(n,i),n=Qr(n,i)}(e._query,t),new bh(e.firestore,e.converter,Qr(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Sd extends bd{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Sd(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new I(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().")
if(null!==e.endAt)throw new I(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().")
return new hr(t,n)}(e._query,this._field,this._direction)
return new bh(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t])
return new Vr(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}class Ed extends bd{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Ed(e,t,n)}_apply(e){return new bh(e.firestore,e.converter,Jr(e._query,this._limit,this._limitType))}}class Id extends bd{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Id(e,t,n)}_apply(e){const t=Ad(e,this.type,this._docOrFields,this._inclusive)
return new bh(e.firestore,e.converter,function(e,t){return new Vr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}class Td extends bd{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Td(e,t,n)}_apply(e){const t=Ad(e,this.type,this._docOrFields,this._inclusive)
return new bh(e.firestore,e.converter,function(e,t){return new Vr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Ad(e,t,n,r){if(n[0]=o.getModularInstance(n[0]),n[0]instanceof pd)return function(e,t,n,r,i){if(!r)throw new I(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`)
const s=[]
for(const o of Gr(e))if(o.field.isKeyField())s.push(Gn(t,r.key))
else{const e=r.data.field(o.field)
if(In(e))throw new I(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)')
if(null===e){const e=o.field.canonicalString()
throw new I(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new cr(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r)
{const i=Hh(e.firestore)
return function(e,t,n,r,i,s){const o=e.explicitOrderBy
if(i.length>o.length)throw new I(E.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`)
const a=[]
for(let c=0;c<i.length;c++){const s=i[c]
if(o[c].field.isKeyField()){if("string"!=typeof s)throw new I(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`)
if(!zr(e)&&-1!==s.indexOf("/"))throw new I(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`)
const n=e.path.child(G.fromString(s))
if(!H.isDocumentKey(n))throw new I(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`)
const i=new H(n)
a.push(Gn(t,i))}else{const e=id(n,r,s)
a.push(e)}}return new cr(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function Cd(e,t,n){if("string"==typeof(n=o.getModularInstance(n))){if(""===n)throw new I(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.")
if(!zr(t)&&-1!==n.indexOf("/"))throw new I(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`)
const r=t.path.child(G.fromString(n))
if(!H.isDocumentKey(r))throw new I(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`)
return Gn(e,new H(r))}if(n instanceof wh)return Gn(e,n._key)
throw new I(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ee(n)}.`)}function kd(e,t){if(!Array.isArray(e)||0===e.length)throw new I(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function xd(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op
return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"]
case"array-contains-any":case"in":return["not-in"]
case"not-in":return["array-contains-any","in","not-in","!="]
default:return[]}}(t.op))
if(null!==n)throw n===t.op?new I(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new I(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Dd(e,t){if(!(t instanceof wd||t instanceof _d))throw new I(E.INVALID_ARGUMENT,`Function ${e}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class Rd{convertValue(e,t="none"){switch(Fn(e)){case 0:return null
case 1:return e.booleanValue
case 2:return vn(e.integerValue||e.doubleValue)
case 3:return this.convertTimestamp(e.timestampValue)
case 4:return this.convertServerTimestamp(e,t)
case 5:return e.stringValue
case 6:return this.convertBytes(bn(e.bytesValue))
case 7:return this.convertReference(e.referenceValue)
case 8:return this.convertGeoPoint(e.geoPointValue)
case 9:return this.convertArray(e.arrayValue,t)
case 11:return this.convertObject(e.mapValue,t)
case 10:return this.convertVectorValue(e.mapValue)
default:throw b(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={}
return rn(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){const t=e.fields?.[Mn].arrayValue?.values?.map(e=>vn(e.doubleValue))
return new Bh(t)}convertGeoPoint(e){return new Vh(vn(e.latitude),vn(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Tn(e)
return null==n?null:this.convertValue(n,t)
case"estimate":return this.convertTimestamp(An(e))
default:return null}}convertTimestamp(e){const t=yn(e)
return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=G.fromString(e)
_(to(n),9688,{name:e})
const r=new xn(n.get(1),n.get(3)),i=new H(n.popFirst(5))
return r.isEqual(t)||g(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}function Nd(e,t,n){let r
return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Od extends Rd{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lh(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId)
return new wh(this.firestore,null,t)}}function Md(){return new Ph("count")}const Pd="NOT SUPPORTED"
class Fd{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ld extends pd{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new jd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null)
return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(gd("DocumentSnapshot.get",e))
if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new I(E.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().")
const e=this._document,t={}
return t.type=Ld._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}Ld._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ld._jsonSchema={type:re("string",Ld._jsonSchemaVersion),bundleSource:re("string","DocumentSnapshot"),bundleName:re("string"),bundle:re("string")}
class jd extends Ld{data(e={}){return super.data(e)}}class qd{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Fd(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[]
return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new jd(this._firestore,this._userDataWriter,n.key,n,new Fd(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges
if(t&&this._snapshot.excludesMetadataChanges)throw new I(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().")
return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0
return e._snapshot.docChanges.map(n=>{const r=new jd(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Fd(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter)
return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs
return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new jd(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Fd(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter)
let i=-1,s=-1
return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Vd(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new I(E.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().")
const e={}
e.type=qd._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=P.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId
const t=[],n=[],r=[]
return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),n.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),r.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Vd(e){switch(e){case 0:return"added"
case 2:case 3:return"modified"
case 1:return"removed"
default:return b(61501,{type:e})}}qd._jsonSchemaVersion="firestore/querySnapshot/1.0",qd._jsonSchema={type:re("string",qd._jsonSchemaVersion),bundleSource:re("string","QuerySnapshot"),bundleName:re("string"),bundle:re("string")}
class Bd extends Rd{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lh(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId)
return new wh(this.firestore,null,t)}}function Ud(e,...t){e=o.getModularInstance(e)
let n={includeMetadataChanges:!1,source:"default"},r=0
"object"!=typeof t[r]||Ch(t[r])||(n=t[r++])
const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source}
if(Ch(t[r])){const e=t[r]
t[r]=e.next?.bind(e),t[r+1]=e.error?.bind(e),t[r+2]=e.complete?.bind(e)}let s,a,c
if(e instanceof wh)a=te(e.firestore,xh),c=Ur(e._key.path),s={next:n=>{t[r]&&t[r](zd(a,e,n))},error:t[r+1],complete:t[r+2]}
else{const n=te(e,bh)
a=te(n.firestore,xh),c=n._query
const i=new Bd(a)
s={next:e=>{t[r]&&t[r](new qd(a,i,n,e))},error:t[r+1],complete:t[r+2]},yd(e._query)}return function(e,t,n,r){const i=new Kl(r),s=new Yu(t,i,n)
return e.asyncQueue.enqueueAndForget(async()=>zu(await ch(e),s)),()=>{i.Nu(),e.asyncQueue.enqueueAndForget(async()=>Gu(await ch(e),s))}}(Dh(a),c,i,s)}function $d(e,t){return function(e,t){const n=new T
return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){const r=ql(e)
try{const e=await function(e,t){const n=S(e),r=ae.now(),i=t.reduce((e,t)=>e.add(t.key),mi())
let s,o
return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let a=oi(),c=mi()
return n.Ns.getEntries(e,i).next(e=>{a=e,a.forEach((e,t)=>{t.isValidDocument()||(c=c.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,a)).next(i=>{s=i
const o=[]
for(const e of t){const t=Bi(e,s.get(e.key).overlayedDocument)
null!=t&&o.push(new zi(e.key,t,or(t.value.mapValue),Pi.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)}).next(t=>{o=t
const r=t.applyToLocalDocumentSet(s,c)
return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:o.batchId,changes:ui(s)}))}(r.localStore,t)
r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Vu[e.currentUser.toKey()]
r||(r=new an(F)),r=r.insert(t,n),e.Vu[e.currentUser.toKey()]=r}(r,e.batchId,n),await Cl(r,e.changes),await Eu(r.remoteStore)}catch(e){const t=Lu(e,"Failed to persist write")
n.reject(t)}}(await oh(e),t,n)),n.promise}(Dh(e),t)}function zd(e,t,n){const r=n.docs.get(t._key),i=new Bd(e)
return new Ld(e,i,t._key,r,new Fd(n.hasPendingWrites,n.fromCache),t.converter)}function Gd(e,t){const n=te(e.firestore,xh),r=Dh(n),i=sn(t,(e,t)=>new Zi(t,e.aggregateType,e._internalFieldPath))
return function(e,t,n){const r=new T
return e.asyncQueue.enqueueAndForget(async()=>{try{const i=await ah(e)
r.resolve(async function(e,t,n){const r=S(e),{request:i,gt:s,parent:o}=Gs(r.serializer,Wr(t),n)
r.connection.$o||delete i.parent
const a=(await r.Ho("RunAggregationQuery",r.serializer.databaseId,o,i,1)).filter(e=>!!e.result)
_(1===a.length,64727)
const c=a[0].result?.aggregateFields
return Object.keys(c).reduce((e,t)=>(e[s[t]]=c[t],e),{})}(i,t,n))}catch(e){r.reject(e)}}),r.promise}(r,e._query,i).then(t=>function(e,t,n){const r=new Bd(e)
return new Fh(t,r,n)}(n,e,t))}class Kd{constructor(e){this.kind="memory",this._onlineComponentProvider=zl.provider,this._offlineComponentProvider=e?.garbageCollector?e.garbageCollector._offlineComponentProvider:{build:()=>new Bl(void 0)}}toJSON(){return{kind:this.kind}}}class Wd{constructor(e){let t
this.kind="persistent",e?.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=Xd(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class Hd{constructor(){this.kind="memoryEager",this._offlineComponentProvider=Vl.provider}toJSON(){return{kind:this.kind}}}class Qd{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new Bl(e)}}toJSON(){return{kind:this.kind}}}class Jd{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=zl.provider,this._offlineComponentProvider={build:t=>new Ul(t,e?.cacheSizeBytes,this.forceOwnership)}}}class Yd{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=zl.provider,this._offlineComponentProvider={build:t=>new $l(t,e?.cacheSizeBytes)}}}function Xd(e){return new Jd(e?.forceOwnership)}const Zd={maxAttempts:5}
class ef{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Hh(e)}set(e,t,n){this._verifyNotCommitted()
const r=tf(e,this._firestore),i=Nd(r.converter,t,n),s=Qh(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n)
return this._mutations.push(s.toMutation(r._key,Pi.none())),this}update(e,t,n,...r){this._verifyNotCommitted()
const i=tf(e,this._firestore)
let s
return s="string"==typeof(t=o.getModularInstance(t))||t instanceof jh?rd(this._dataReader,"WriteBatch.update",i._key,t,n,r):nd(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,Pi.exists(!0))),this}delete(e){this._verifyNotCommitted()
const t=tf(e,this._firestore)
return this._mutations=this._mutations.concat(new Hi(t._key,Pi.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new I(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function tf(e,t){if((e=o.getModularInstance(e)).firestore!==t)throw new I(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.")
return e}class nf{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Hh(e)}get(e){const t=tf(e,this._firestore),n=new Od(this._firestore)
return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return b(24041)
const r=e[0]
if(r.isFoundDocument())return new pd(this._firestore,n,r.key,r,t.converter)
if(r.isNoDocument())return new pd(this._firestore,n,t._key,null,t.converter)
throw b(18433,{doc:r})})}set(e,t,n){const r=tf(e,this._firestore),i=Nd(r.converter,t,n),s=Qh(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n)
return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=tf(e,this._firestore)
let s
return s="string"==typeof(t=o.getModularInstance(t))||t instanceof jh?rd(this._dataReader,"Transaction.update",i._key,t,n,r):nd(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=tf(e,this._firestore)
return this._transaction.delete(t._key),this}}class rf extends nf{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=tf(e,this._firestore),n=new Bd(this._firestore)
return super.get(e).then(e=>new Ld(this._firestore,n,t._key,e._document,new Fd(!1,!1),t.converter))}}function sf(e,t){if("string"!=typeof e[t])throw new I(E.INVALID_ARGUMENT,"Missing string value for: "+t)
return e[t]}class of{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function af(e,t){(function(e,t){return e.asyncQueue.enqueue(async()=>function(e,t){S(e).Fs.Vs=t}(await ih(e),t))})(Dh(e._firestore),t).then(e=>m(`setting persistent cache index auto creation isEnabled=${t} succeeded`)).catch(e=>y(`setting persistent cache index auto creation isEnabled=${t} failed`,e))}const cf=new WeakMap
class uf{constructor(){this.Mc=new Map}static get instance(){return lf||(lf=new uf,function(e){if(ss)throw new Error("a TestingHooksSpi instance is already set")
ss=e}(lf)),lf}lt(e){this.Mc.forEach(t=>t(e))}onExistenceFilterMismatch(e){const t=Symbol(),n=this.Mc
return n.set(t,e),()=>n.delete(t)}}let lf=null
!function(e,t=!0){!function(e){d=e}(r.SDK_VERSION),r._registerComponent(new i.Component("firestore",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new xh(new x(e.getProvider("auth-internal")),new O(i,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new I(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.')
return new xn(e.options.projectId,t)}(i,n),i)
return r={useFetchStreams:t,...r},s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),r.registerVersion(u,l,e),r.registerVersion(u,l,"cjs2020")}(),t.AbstractUserDataWriter=Rd,t.AggregateField=Ph,t.AggregateQuerySnapshot=Fh,t.Bytes=Lh,t.CACHE_SIZE_UNLIMITED=-1,t.CollectionReference=_h,t.DocumentReference=wh,t.DocumentSnapshot=Ld,t.FieldPath=jh,t.FieldValue=qh,t.Firestore=xh,t.FirestoreError=I,t.GeoPoint=Vh,t.LoadBundleTask=kh,t.PersistentCacheIndexManager=of,t.Query=bh,t.QueryCompositeFilterConstraint=_d,t.QueryConstraint=bd,t.QueryDocumentSnapshot=jd,t.QueryEndAtConstraint=Td,t.QueryFieldFilterConstraint=wd,t.QueryLimitConstraint=Ed,t.QueryOrderByConstraint=Sd,t.QuerySnapshot=qd,t.QueryStartAtConstraint=Id,t.SnapshotMetadata=Fd,t.Timestamp=ae,t.Transaction=rf,t.VectorValue=Bh,t.WriteBatch=ef,t._AutoId=P,t._ByteString=mn,t._DatabaseId=xn,t._DocumentKey=H,t._EmptyAppCheckTokenProvider=class{getToken(){return Promise.resolve(new N(""))}invalidateToken(){}start(e,t){}shutdown(){}},t._EmptyAuthCredentialsProvider=C,t._FieldPath=W,t._TestingHooks=class{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return uf.instance.onExistenceFilterMismatch(e)}},t._cast=te,t._debugAssert=function(e,t){e||b(57014,t)},t._internalAggregationQueryToProtoRunAggregationQueryRequest=function(e,t){const n=sn(t,(e,t)=>new Zi(t,e.aggregateType,e._internalFieldPath)),r=Dh(te(e.firestore,xh)),i=r._onlineComponents?.datastore.serializer
return void 0===i?null:Gs(i,Wr(e._query),n,!0).request},t._internalQueryToProtoQueryTarget=function(e){const t=Dh(te(e.firestore,xh)),n=t._onlineComponents?.datastore.serializer
return void 0===n?null:zs(n,Kr(e._query)).ft},t._isBase64Available=function(){return"undefined"!=typeof atob},t._logWarn=y,t._validateIsNotUsedTogether=J,t.addDoc=function(e,t){const n=te(e.firestore,xh),r=Sh(e),i=Nd(e.converter,t)
return $d(n,[Qh(Hh(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Pi.exists(!1))]).then(()=>r)},t.aggregateFieldEqual=function(e,t){return e instanceof Ph&&t instanceof Ph&&e.aggregateType===t.aggregateType&&e._internalFieldPath?.canonicalString()===t._internalFieldPath?.canonicalString()},t.aggregateQuerySnapshotEqual=function(e,t){return Eh(e.query,t.query)&&o.deepEqual(e.data(),t.data())},t.and=function(...e){return e.forEach(e=>Dd("and",e)),_d._create("and",e)},t.arrayRemove=function(...e){return new ed("arrayRemove",e)},t.arrayUnion=function(...e){return new Zh("arrayUnion",e)},t.average=function(e){return new Ph("avg",ud("average",e))},t.clearIndexedDbPersistence=function(e){if(e._initialized&&!e._terminated)throw new I(E.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.")
const t=new T
return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!Ce.v())return Promise.resolve()
const t=e+tc
await Ce.delete(t)}(sc(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise},t.collection=function(e,t,...n){if(e=o.getModularInstance(e),Q("collection","path",t),e instanceof yh){const r=G.fromString(t,...n)
return X(r),new _h(e,null,r)}{if(!(e instanceof wh||e instanceof _h))throw new I(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore")
const r=e._path.child(G.fromString(t,...n))
return X(r),new _h(e.firestore,null,r)}},t.collectionGroup=function(e,t){if(e=te(e,yh),Q("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new I(E.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`)
return new bh(e,null,function(e){return new Vr(G.emptyPath(),e)}(t))},t.connectFirestoreEmulator=vh,t.count=Md,t.deleteAllPersistentCacheIndexes=function(e){(function(e){return e.asyncQueue.enqueue(async()=>function(e){const t=S(e),n=t.indexManager
return t.persistence.runTransaction("Delete All Indexes","readwrite",e=>n.deleteAllFieldIndexes(e))}(await ih(e)))})(Dh(e._firestore)).then(e=>m("deleting all persistent cache indexes succeeded")).catch(e=>y("deleting all persistent cache indexes failed",e))},t.deleteDoc=function(e){return $d(te(e.firestore,xh),[new Hi(e._key,Pi.none())])},t.deleteField=function(){return new Jh("deleteField")},t.disableNetwork=function(e){return function(e){return e.asyncQueue.enqueue(async()=>{const t=await rh(e),n=await sh(e)
return t.setNetworkEnabled(!1),async function(e){const t=S(e)
t.Ea.add(0),await cu(t),t.Ra.set("Offline")}(n)})}(Dh(e=te(e,xh)))},t.disablePersistentCacheIndexAutoCreation=function(e){af(e,!1)},t.doc=Sh,t.documentId=function(){return new jh($)},t.documentSnapshotFromJSON=function(e,t,n){if(ie(t,Ld._jsonSchema)){if(t.bundle===Pd)throw new I(E.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.")
const r=Jc(e._databaseId),i=hh(t.bundle,r),s=i.Wu(),o=new el(i.getMetadata(),r)
for(const e of s)o.Ga(e)
const a=o.documents
if(1!==a.length)throw new I(E.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${a.length} documents.`)
const c=Vs(r,a[0].document),u=new H(G.fromString(t.bundleName))
return new Ld(e,new Od(e),u,c,new Fd(!1,!1),n||null)}},t.enableIndexedDbPersistence=function(e,t){y("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.")
const n=e._freezeSettings()
return Nh(e,zl.provider,{build:e=>new Ul(e,n.cacheSizeBytes,t?.forceOwnership)}),Promise.resolve()},t.enableMultiTabIndexedDbPersistence=async function(e){y("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.")
const t=e._freezeSettings()
Nh(e,zl.provider,{build:e=>new $l(e,t.cacheSizeBytes)})},t.enableNetwork=function(e){return function(e){return e.asyncQueue.enqueue(async()=>{const t=await rh(e),n=await sh(e)
return t.setNetworkEnabled(!0),function(e){const t=S(e)
return t.Ea.delete(0),au(t)}(n)})}(Dh(e=te(e,xh)))},t.enablePersistentCacheIndexAutoCreation=function(e){af(e,!0)},t.endAt=function(...e){return Td._create("endAt",e,!0)},t.endBefore=function(...e){return Td._create("endBefore",e,!1)},t.ensureFirestoreConfigured=Dh,t.executeWrite=$d,t.getAggregateFromServer=Gd,t.getCountFromServer=function(e){return Gd(e,{count:Md()})},t.getDoc=function(e){e=te(e,wh)
const t=te(e.firestore,xh)
return uh(Dh(t),e._key).then(n=>zd(t,e,n))},t.getDocFromCache=function(e){e=te(e,wh)
const t=te(e.firestore,xh),n=Dh(t),r=new Bd(t)
return function(e,t){const n=new T
return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await function(e,t){const n=S(e)
return n.persistence.runTransaction("read document","readonly",e=>n.localDocuments.getDocument(e,t))}(e,t)
r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new I(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=Lu(e,`Failed to get document '${t} from cache`)
n.reject(r)}}(await ih(e),t,n)),n.promise}(n,e._key).then(n=>new Ld(t,r,e._key,n,new Fd(null!==n&&n.hasLocalMutations,!0),e.converter))},t.getDocFromServer=function(e){e=te(e,wh)
const t=te(e.firestore,xh)
return uh(Dh(t),e._key,{source:"server"}).then(n=>zd(t,e,n))},t.getDocs=function(e){e=te(e,bh)
const t=te(e.firestore,xh),n=Dh(t),r=new Bd(t)
return yd(e._query),lh(n,e._query).then(n=>new qd(t,r,e,n))},t.getDocsFromCache=function(e){e=te(e,bh)
const t=te(e.firestore,xh),n=Dh(t),r=new Bd(t)
return function(e,t){const n=new T
return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await vc(e,t,!0),i=new il(t,r.Qs),s=i.ru(r.documents),o=i.applyChanges(s,!1)
n.resolve(o.snapshot)}catch(e){const r=Lu(e,`Failed to execute query '${t} against cache`)
n.reject(r)}}(await ih(e),t,n)),n.promise}(n,e._query).then(n=>new qd(t,r,e,n))},t.getDocsFromServer=function(e){e=te(e,bh)
const t=te(e.firestore,xh),n=Dh(t),r=new Bd(t)
return lh(n,e._query,{source:"server"}).then(n=>new qd(t,r,e,n))},t.getFirestore=function(e,t){const n="object"==typeof e?e:r.getApp(),i="string"==typeof e?e:t||kn,s=r._getProvider(n,"firestore").getImmediate({identifier:i})
if(!s._initialized){const e=o.getDefaultEmulatorHostnameAndPort("firestore")
e&&vh(s,...e)}return s},t.getPersistentCacheIndexManager=function(e){e=te(e,xh)
const t=cf.get(e)
if(t)return t
const n=Dh(e)
if("persistent"!==n._uninitializedComponentsProvider?._offline.kind)return null
const r=new of(e)
return cf.set(e,r),r},t.increment=function(e){return new td("increment",e)},t.initializeFirestore=function(e,t,n){n||(n=kn)
const i=r._getProvider(e,"firestore")
if(i.isInitialized(n)){const e=i.getImmediate({identifier:n}),r=i.getOptions(n)
if(o.deepEqual(r,t))return e
throw new I(E.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==t.cacheSizeBytes&&void 0!==t.localCache)throw new I(E.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object")
if(void 0!==t.cacheSizeBytes&&-1!==t.cacheSizeBytes&&t.cacheSizeBytes<ya)throw new I(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576")
return t.host&&o.isCloudWorkstation(t.host)&&o.pingServer(t.host),i.initialize({options:t,instanceIdentifier:n})},t.limit=function(e){return ne("limit",e),Ed._create("limit",e,"F")},t.limitToLast=function(e){return ne("limitToLast",e),Ed._create("limitToLast",e,"L")},t.loadBundle=Oh,t.memoryEagerGarbageCollector=function(){return new Hd},t.memoryLocalCache=function(e){return new Kd(e)},t.memoryLruGarbageCollector=function(e){return new Qd(e?.cacheSizeBytes)},t.namedQuery=Mh,t.onSnapshot=Ud,t.onSnapshotResume=function(e,t,...n){const r=o.getModularInstance(e),i=function(e){const t={bundle:"",bundleName:"",bundleSource:""},n=["bundle","bundleName","bundleSource"]
for(const r of n){if(!(r in e)){t.error=`snapshotJson missing required field: ${r}`
break}const n=e[r]
if("string"!=typeof n){t.error=`snapshotJson field '${r}' must be a string.`
break}if(0===n.length){t.error=`snapshotJson field '${r}' cannot be an empty string.`
break}"bundle"===r?t.bundle=n:"bundleName"===r?t.bundleName=n:"bundleSource"===r&&(t.bundleSource=n)}return t}(t)
if(i.error)throw new I(E.INVALID_ARGUMENT,i.error)
let s,a=0
if("object"!=typeof n[a]||Ch(n[a])||(s=n[a++]),"QuerySnapshot"===i.bundleSource){let e=null
if("object"==typeof n[a]&&Ch(n[a])){const t=n[a++]
e={next:t.next,error:t.error,complete:t.complete}}else e={next:n[a++],error:n[a++],complete:n[a++]}
return function(e,t,n,r,i){let s,o=!1
return Oh(e,t.bundle).then(()=>Mh(e,t.bundleName)).then(e=>{e&&!o&&(i&&e.withConverter(i),s=Ud(e,n||{},r))}).catch(e=>(r.error&&r.error(e),()=>{})),()=>{o||(o=!0,s&&s())}}(r,i,s,e,n[a])}if("DocumentSnapshot"===i.bundleSource){let e=null
if("object"==typeof n[a]&&Ch(n[a])){const t=n[a++]
e={next:t.next,error:t.error,complete:t.complete}}else e={next:n[a++],error:n[a++],complete:n[a++]}
return function(e,t,n,r,i){let s,o=!1
return Oh(e,t.bundle).then(()=>{if(!o){const o=new wh(e,i||null,H.fromPath(t.bundleName))
s=Ud(o,n||{},r)}}).catch(e=>(r.error&&r.error(e),()=>{})),()=>{o||(o=!0,s&&s())}}(r,i,s,e,n[a])}throw new I(E.INVALID_ARGUMENT,`unsupported bundle source: ${i.bundleSource}`)},t.onSnapshotsInSync=function(e,t){return function(e,t){const n=new Kl(t)
return e.asyncQueue.enqueueAndForget(async()=>function(e,t){S(e).Ca.add(t),t.next()}(await ch(e),n)),()=>{n.Nu(),e.asyncQueue.enqueueAndForget(async()=>function(e,t){S(e).Ca.delete(t)}(await ch(e),n))}}(Dh(e=te(e,xh)),Ch(t)?t:{next:t})},t.or=function(...e){return e.forEach(e=>Dd("or",e)),_d._create("or",e)},t.orderBy=function(e,t="asc"){const n=t,r=gd("orderBy",e)
return Sd._create(r,n)},t.persistentLocalCache=function(e){return new Wd(e)},t.persistentMultipleTabManager=function(){return new Yd},t.persistentSingleTabManager=Xd,t.query=function(e,t,...n){let r=[]
t instanceof vd&&r.push(t),r=r.concat(n),function(e){const t=e.filter(e=>e instanceof _d).length,n=e.filter(e=>e instanceof wd).length
if(t>1||t>0&&n>0)throw new I(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r)
for(const i of r)e=i._apply(e)
return e},t.queryEqual=Eh,t.querySnapshotFromJSON=function(e,t,n){if(ie(t,qd._jsonSchema)){if(t.bundle===Pd)throw new I(E.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.")
const r=Jc(e._databaseId),i=hh(t.bundle,r),s=i.Wu(),o=new el(i.getMetadata(),r)
for(const e of s)o.Ga(e)
if(1!==o.queries.length)throw new I(E.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${o.queries.length} queries.`)
const a=ho(o.queries[0].bundledQuery),c=o.documents
let u=new ju
c.map(e=>{const t=Vs(r,e.document)
u=u.add(t)})
const l=Vu.fromInitialDocuments(a,u,mi(),!1,!1),h=new bh(e,n||null,a)
return new qd(e,new Od(e),h,l)}},t.refEqual=function(e,t){return e=o.getModularInstance(e),t=o.getModularInstance(t),(e instanceof wh||e instanceof _h)&&(t instanceof wh||t instanceof _h)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter},t.runTransaction=function(e,t,n){e=te(e,xh)
const r={...Zd,...n}
return function(e){if(e.maxAttempts<1)throw new I(E.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new T
return e.asyncQueue.enqueueAndForget(async()=>{const i=await ah(e)
new Jl(e.asyncQueue,i,n,t,r).ju()}),r.promise}(Dh(e),n=>t(new rf(e,n)),r)},t.serverTimestamp=function(){return new Xh("serverTimestamp")},t.setDoc=function(e,t,n){e=te(e,wh)
const r=te(e.firestore,xh),i=Nd(e.converter,t,n)
return $d(r,[Qh(Hh(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Pi.none())])},t.setIndexConfiguration=function(e,t){const n=Dh(e=te(e,xh))
if(!n._uninitializedComponentsProvider||"memory"===n._uninitializedComponentsProvider._offline.kind)return y("Cannot enable indexes when persistence is disabled"),Promise.resolve()
const r=function(e){const t="string"==typeof e?function(e){try{return JSON.parse(e)}catch(e){throw new I(E.INVALID_ARGUMENT,"Failed to parse JSON: "+e?.message)}}(e):e,n=[]
if(Array.isArray(t.indexes))for(const r of t.indexes){const e=sf(r,"collectionGroup"),t=[]
if(Array.isArray(r.fields))for(const n of r.fields){const e=hd("setIndexConfiguration",sf(n,"fieldPath"))
"CONTAINS"===n.arrayConfig?t.push(new pe(e,2)):"ASCENDING"===n.order?t.push(new pe(e,0)):"DESCENDING"===n.order&&t.push(new pe(e,1))}n.push(new le(le.UNKNOWN_ID,e,t,ge.empty()))}return n}(t)
return function(e,t){return e.asyncQueue.enqueue(async()=>async function(e,t){const n=S(e),r=n.indexManager,i=[]
return n.persistence.runTransaction("Configure indexes","readwrite",e=>r.getFieldIndexes(e).next(n=>function(e,t,n,r,i){e=[...e],t=[...t],e.sort(n),t.sort(n)
const s=e.length,o=t.length
let a=0,c=0
for(;a<o&&c<s;){const s=n(e[c],t[a])
s<0?i(e[c++]):s>0?r(t[a++]):(a++,c++)}for(;a<o;)r(t[a++])
for(;c<s;)i(e[c++])}(n,t,fe,t=>{i.push(r.addFieldIndex(e,t))},t=>{i.push(r.deleteFieldIndex(e,t))})).next(()=>Ie.waitFor(i)))}(await ih(e),t))}(n,r)},t.setLogLevel=function(e){f.setLogLevel(e)},t.snapshotEqual=function(e,t){return e instanceof Ld&&t instanceof Ld?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof qd&&t instanceof qd&&e._firestore===t._firestore&&Eh(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)},t.startAfter=function(...e){return Id._create("startAfter",e,!1)},t.startAt=function(...e){return Id._create("startAt",e,!0)},t.sum=function(e){return new Ph("sum",ud("sum",e))},t.terminate=function(e){return r._removeServiceInstance(e.app,"firestore",e._databaseId.database),e._delete()},t.updateDoc=function(e,t,n,...r){e=te(e,wh)
const i=te(e.firestore,xh),s=Hh(i)
let a
return a="string"==typeof(t=o.getModularInstance(t))||t instanceof jh?rd(s,"updateDoc",e._key,t,n,r):nd(s,"updateDoc",e._key,t),$d(i,[a.toMutation(e._key,Pi.exists(!0))])},t.vector=function(e){return new Bh(e)},t.waitForPendingWrites=function(e){return function(e){const t=new T
return e.asyncQueue.enqueueAndForget(async()=>async function(e,t){const n=S(e)
mu(n.remoteStore)||m(sl,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.")
try{const e=await function(e){const t=S(e)
return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e))}(n.localStore)
if(e===Ve)return void t.resolve()
const r=n.mu.get(e)||[]
r.push(t),n.mu.set(e,r)}catch(e){const n=Lu(e,"Initialization of waitForPendingWrites() operation failed")
t.reject(n)}}(await oh(e),t)),t.promise}(Dh(e=te(e,xh)))},t.where=function(e,t,n){const r=t,i=gd("where",e)
return wd._create(i,r,n)},t.writeBatch=function(e){return Dh(e=te(e,xh)),new ef(e,t=>$d(e,t))}},3241:(e,t,n)=>{"use strict"
n.d(t,{ZH:()=>r.h,_k:()=>r.f,z9:()=>r.j})
var r=n(7262)},3299:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>y})
var r,i,s,o,a,c=n(81),u=n(1223),l=n(2735),h=n.n(l),d=n(9553),f=n(1603)
const p="undefined"!=typeof FastBoot,m="routeDidChange",g=["separator","prepend","replace"]
let y=(r=(0,l.inject)("router"),i=(0,l.inject)("-document"),s=class extends(h()){constructor(e){if(super(e),(0,c.a)(this,"router",o,this),(0,c.a)(this,"document",a,this),(0,c.b)(this,"tokens",[]),(0,c.b)(this,"_defaultConfig",{separator:" | ",prepend:!0,replace:null}),(0,c.b)(this,"scheduleTitleUpdate",()=>{(0,u.scheduleOnce)("afterRender",this,this._updateTitle)}),this._validateExistingTitleElement(),function(e){return"resolveRegistration"in e}(e)){const n=e.resolveRegistration("config:environment")
"object"==typeof(t=n)&&null!==t&&"pageTitle"in t&&g.forEach(e=>{if(!(0,d.isEmpty)(n.pageTitle[e])){const t=n.pageTitle[e]
this._defaultConfig[e]=t}})}var t
this.router.on(m,this.scheduleTitleUpdate)}applyTokenDefaults(e){const t=this._defaultConfig.separator,n=this._defaultConfig.prepend,r=this._defaultConfig.replace
e.previous??=null,e.next??=null,null==e.separator&&(e.separator=t),null==e.prepend&&null!=n&&(e.prepend=n),null==e.replace&&null!=r&&(e.replace=r)}inheritFromPrevious(e){const t=e.previous
t&&(null==e.separator&&(e.separator=t.separator),null==e.prepend&&(e.prepend=t.prepend))}push(e){const t=this._findTokenById(e.id)
if(t){const n=this.tokens.indexOf(t),r=[...this.tokens],i=t.previous
return e.previous=i,e.next=t.next,this.inheritFromPrevious(e),this.applyTokenDefaults(e),r.splice(n,1,e),void(this.tokens=r)}const n=this.tokens.slice(-1)[0]
n&&(e.previous=n??null,n.next=e,this.inheritFromPrevious(e)),this.applyTokenDefaults(e),this.tokens=[...this.tokens,e]}remove(e){const t=this._findTokenById(e)
if(!t)return
const{next:n,previous:r}=t
n&&(n.previous=r),r&&(r.next=n),t.previous=t.next=null
const i=[...this.tokens]
i.splice(i.indexOf(t),1),this.tokens=i}get visibleTokens(){const e=this.tokens
let t=e?e.length:0
const n=[]
for(;t--;){const r=e[t]
if(r){if(r.replace){n.unshift(r)
break}n.unshift(r)}}return n}get sortedTokens(){const e=this.visibleTokens
if(!e)return[]
let t=!0,n=[]
const r=[n],i=[]
return e.forEach(e=>{if(e.front)i.unshift(e)
else if(e.prepend){t&&(t=!1,n=[],r.push(n))
const i=n[0]
i&&((e={...e}).separator=i.separator),n.unshift(e)}else t||(t=!0,n=[],r.push(n)),n.push(e)}),i.concat(r.reduce((e,t)=>e.concat(t),[]))}toString(){const e=this.sortedTokens,t=[]
for(let n=0,r=e.length;n<r;n++){const i=e[n]
i&&i.title&&(t.push(i.title),n+1<r&&t.push(i.separator))}return t.join("")}willDestroy(){super.willDestroy(),this.router.off(m,this.scheduleTitleUpdate)}_updateTitle(){const e=this.toString()
p?this.updateFastbootTitle(e):this.document.title=e,this.titleDidUpdate(e)}_validateExistingTitleElement(){p||(0,f.assert)("[ember-page-title]: Multiple title elements found. Check for other addons like ember-cli-head updating <title> as well.",document.head.querySelectorAll("title").length<=1)}_findTokenById(e){return this.tokens.find(t=>t.id===e)}updateFastbootTitle(e){if(!p)return
const t=this.document.head,n=t.childNodes
for(let s=0;s<n.length;s++){const e=n[s]
e&&"title"===e.nodeName.toLowerCase()&&t.removeChild(e)}const r=this.document.createElement("title"),i=this.document.createTextNode(e)
r.appendChild(i),t.appendChild(r)}titleDidUpdate(e){}},o=(0,c._)(s.prototype,"router",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=(0,c._)(s.prototype,"document",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s)},3404:(e,t,n)=>{"use strict"
function r([e]){return Math.atanh(e)}n.r(t),n.d(t,{atanh:()=>r,default:()=>i})
var i=(0,n(336).helper)(r)},3588:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>o})
var r=n(5670),i=n(336),s=n.n(i)
class o extends(s()){compute(e){for(let t=0,n=e.length;t<n;t++)if(!0===(0,r.A)(e[t]))return e[t]
return e[e.length-1]}}},3692:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>i})
var r=n(5670)
function i(...e){return e.every(e=>!(0,r.A)(e))}},3702:(e,t,n)=>{"use strict"
function r([e]){return Math.atan(e)}n.r(t),n.d(t,{atan:()=>r,default:()=>i})
var i=(0,n(336).helper)(r)},3797:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(129),i=n(1918),s=n(1202),o=n(6244)
class a{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent()
return"VERSION"===t?.type}(e)){const t=e.getImmediate()
return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const c="@firebase/app",u="0.14.4",l=new i.Logger("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",y="@firebase/auth-compat",v="@firebase/database",b="@firebase/data-connect",w="@firebase/database-compat",_="@firebase/functions",S="@firebase/functions-compat",E="@firebase/installations",I="@firebase/installations-compat",T="@firebase/messaging",A="@firebase/messaging-compat",C="@firebase/performance",k="@firebase/performance-compat",x="@firebase/remote-config",D="@firebase/remote-config-compat",R="@firebase/storage",N="@firebase/storage-compat",O="@firebase/firestore",M="@firebase/ai",P="@firebase/firestore-compat",F="firebase",L="[DEFAULT]",j={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[y]:"fire-auth-compat",[v]:"fire-rtdb",[b]:"fire-data-connect",[w]:"fire-rtdb-compat",[_]:"fire-fn",[S]:"fire-fn-compat",[E]:"fire-iid",[I]:"fire-iid-compat",[T]:"fire-fcm",[A]:"fire-fcm-compat",[C]:"fire-perf",[k]:"fire-perf-compat",[x]:"fire-rc",[D]:"fire-rc-compat",[R]:"fire-gcs",[N]:"fire-gcs-compat",[O]:"fire-fst",[P]:"fire-fst-compat",[M]:"fire-vertex","fire-js":"fire-js",[F]:"fire-js-all"},q=new Map,V=new Map,B=new Map
function U(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function $(e){const t=e.name
if(B.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1
B.set(t,e)
for(const n of q.values())U(n,e)
for(const n of V.values())U(n,e)
return!0}function z(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0})
return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function G(e){return void 0!==e.options}function K(e){return!G(e)&&("authIdToken"in e||"appCheckToken"in e||"releaseOnDeref"in e||"automaticDataCollectionEnabled"in e)}const W=new s.ErrorFactory("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."})
class H{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.Component("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw W.create("app-deleted",{appName:this._name})}}function Q(e,t){const n=s.base64Decode(e.split(".")[1])
null!==n?void 0!==JSON.parse(n).exp?1e3*JSON.parse(n).exp-(new Date).getTime()<=0&&console.error(`FirebaseServerApp ${t} is invalid: the token has expired.`):console.error(`FirebaseServerApp ${t} is invalid: expiration claim could not be parsed`):console.error(`FirebaseServerApp ${t} is invalid: second part could not be parsed.`)}class J extends H{constructor(e,t,n,r){const i=void 0===t.automaticDataCollectionEnabled||t.automaticDataCollectionEnabled,s={name:n,automaticDataCollectionEnabled:i}
void 0!==e.apiKey?super(e,s,r):super(e.options,s,r),this._serverConfig={automaticDataCollectionEnabled:i,...t},this._serverConfig.authIdToken&&Q(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&Q(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,"undefined"!=typeof FinalizationRegistry&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Z(c,u,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,void 0!==e&&null!==this._finalizationRegistry&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){X(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw W.create("server-app-deleted")}}function Y(e,t={}){let n=e
"object"!=typeof t&&(t={name:t})
const i={name:L,automaticDataCollectionEnabled:!0,...t},o=i.name
if("string"!=typeof o||!o)throw W.create("bad-app-name",{appName:String(o)})
if(n||(n=s.getDefaultAppConfig()),!n)throw W.create("no-options")
const a=q.get(o)
if(a){if(s.deepEqual(n,a.options)&&s.deepEqual(i,a.config))return a
throw W.create("duplicate-app",{appName:o})}const c=new r.ComponentContainer(o)
for(const r of B.values())c.addComponent(r)
const u=new H(n,i,c)
return q.set(o,u),u}async function X(e){let t=!1
const n=e.name
q.has(n)?(t=!0,q.delete(n)):V.has(n)&&e.decRefCount()<=0&&(V.delete(n),t=!0),t&&(await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function Z(e,t,n){let i=j[e]??e
n&&(i+=`-${n}`)
const s=i.match(/\s|\//),o=t.match(/\s|\//)
if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`]
return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}$(new r.Component(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}const ee="firebase-heartbeat-store"
let te=null
function ne(){return te||(te=o.openDB("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(ee)}catch(e){console.warn(e)}}}).catch(e=>{throw W.create("idb-open",{originalErrorMessage:e.message})})),te}async function re(e,t){try{const n=(await ne()).transaction(ee,"readwrite"),r=n.objectStore(ee)
await r.put(t,ie(e)),await n.done}catch(e){if(e instanceof s.FirebaseError)l.warn(e.message)
else{const t=W.create("idb-set",{originalErrorMessage:e?.message})
l.warn(t.message)}}}function ie(e){return`${e.name}!${e.options.appId}`}class se{constructor(e){this.container=e,this._heartbeatsCache=null
const t=this.container.getProvider("app").getImmediate()
this._storage=new ae(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=oe()
if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return
if(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return
if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1
let t=0,n=e[0].date
for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r)
return t}(this._heartbeatsCache.heartbeats)
this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){l.warn(e)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return""
const e=oe(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[]
let r=e.slice()
for(const i of e){const e=n.find(e=>e.agent===i.agent)
if(e){if(e.dates.push(i.date),ce(n)>t){e.dates.pop()
break}}else if(n.push({agent:i.agent,dates:[i.date]}),ce(n)>t){n.pop()
break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=s.base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:t}))
return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return l.warn(e),""}}}function oe(){return(new Date).toISOString().substring(0,10)}class ae{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!s.isIndexedDBAvailable()&&s.validateIndexedDBOpenable().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await ne()).transaction(ee),n=await t.objectStore(ee).get(ie(e))
return await t.done,n}catch(e){if(e instanceof s.FirebaseError)l.warn(e.message)
else{const t=W.create("idb-get",{originalErrorMessage:e?.message})
l.warn(t.message)}}}(this.app)
return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read()
return re(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read()
return re(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function ce(e){return s.base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:e})).length}$(new r.Component("platform-logger",e=>new a(e),"PRIVATE")),$(new r.Component("heartbeat",e=>new se(e),"PRIVATE")),Z(c,u,"node"),Z(c,u,"cjs2020"),Z("fire-js",""),Object.defineProperty(t,"FirebaseError",{enumerable:!0,get:function(){return s.FirebaseError}}),t.SDK_VERSION="12.4.0",t._DEFAULT_ENTRY_NAME=L,t._addComponent=U,t._addOrOverwriteComponent=function(e,t){e.container.addOrOverwriteComponent(t)},t._apps=q,t._clearComponents=function(){B.clear()},t._components=B,t._getProvider=z,t._isFirebaseApp=G,t._isFirebaseServerApp=function(e){return null!=e&&void 0!==e.settings},t._isFirebaseServerAppSettings=K,t._registerComponent=$,t._removeServiceInstance=function(e,t,n=L){z(e,t).clearInstance(n)},t._serverApps=V,t.deleteApp=X,t.getApp=function(e=L){const t=q.get(e)
if(!t&&e===L&&s.getDefaultAppConfig())return Y()
if(!t)throw W.create("no-app",{appName:e})
return t},t.getApps=function(){return Array.from(q.values())},t.initializeApp=Y,t.initializeServerApp=function(e,t={}){if(s.isBrowser()&&!s.isWebWorker())throw W.create("invalid-server-app-environment")
let n,i=t||{}
if(e&&(G(e)?n=e.options:K(e)?i=e:n=e),void 0===i.automaticDataCollectionEnabled&&(i.automaticDataCollectionEnabled=!0),n||(n=s.getDefaultAppConfig()),!n)throw W.create("no-options")
const o={...i,...n}
if(void 0!==o.releaseOnDeref&&delete o.releaseOnDeref,void 0!==i.releaseOnDeref&&"undefined"==typeof FinalizationRegistry)throw W.create("finalization-registry-not-supported",{})
const a=""+(c=JSON.stringify(o),[...c].reduce((e,t)=>Math.imul(31,e)+t.charCodeAt(0)|0,0))
var c
const u=V.get(a)
if(u)return u.incRefCount(i.releaseOnDeref),u
const l=new r.ComponentContainer(a)
for(const r of B.values())l.addComponent(r)
const h=new J(n,i,a,l)
return V.set(a,h),h},t.onLog=function(e,t){if(null!==e&&"function"!=typeof e)throw W.create("invalid-log-argument")
i.setUserLogHandler(e,t)},t.registerVersion=Z,t.setLogLevel=function(e){i.setLogLevel(e)}},3981:(e,t,n)=>{"use strict"
function r([e]){return Math.tan(e)}n.r(t),n.d(t,{default:()=>i,tan:()=>r})
var i=(0,n(336).helper)(r)},4065:(e,t,n)=>{"use strict"
n.d(t,{P:()=>o,q:()=>a})
const r=(0,n(7375).vs)("WarpDriveRuntimeConfig",{debug:{}}),i=function(){try{return globalThis.sessionStorage}catch{return}}(),s=i?.getItem("WarpDriveRuntimeConfig")
function o(){return r}function a(e){Object.assign(r.debug,e),i?.setItem("WarpDriveRuntimeConfig",JSON.stringify(r))}s&&Object.assign(r,JSON.parse(s))},4121:(e,t,n)=>{"use strict"
function r([e]){return Math.cos(e)}n.r(t),n.d(t,{cos:()=>r,default:()=>i})
var i=(0,n(336).helper)(r)},4238:(e,t,n)=>{"use strict"
function r([e]){return Math.acos(e)}n.r(t),n.d(t,{acos:()=>r,default:()=>i})
var i=(0,n(336).helper)(r)},4389:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>i})
var r=n(1389)
function i(...e){return e.every(r.isArray)}},4482:(e,t,n)=>{"use strict"
function r([e]){return Math.sqrt(e)}n.r(t),n.d(t,{default:()=>i,sqrt:()=>r})
var i=(0,n(336).helper)(r)},4781:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{C:()=>Pe,S:()=>Fe,_:()=>_e,a:()=>Le,b:()=>Te,c:()=>Re,d:()=>Ne,e:()=>Oe,f:()=>Me,g:()=>Ae,h:()=>ae,i:()=>Se,j:()=>ie,k:()=>oe,l:()=>me,m:()=>pe,n:()=>ve,o:()=>be,p:()=>ke,q:()=>ee,r:()=>xe,s:()=>ge,t:()=>te,u:()=>Ce,v:()=>re,w:()=>ne,x:()=>de,y:()=>fe,z:()=>we})
var r=n(1223),i=n(4471),s=n.n(i),o=n(2294),a=n.n(o),c=n(4540),u=n.n(c),l=n(3211),h=n.n(l)
const d=h()._ContainerProxyMixin,f=h()._RegistryProxyMixin,p=s().extend(f,d,{_emberTestHelpersMockOwner:!0,unregister(e){this.__container__.reset(e),this.__registry__.unregister(e)}})
function m(e,t){if(e)return e.boot().then(e=>e.buildInstance().boot())
if(!t)throw new Error("You must set up the ember-test-helpers environment with either `setResolver` or `setApplication` before running any tests.")
const{owner:n}=function(e){const t=new(a())
t.Resolver={create:()=>e}
const n=a().buildRegistry(t)
n.register("component-lookup:main",h().ComponentLookup)
const r=new(h().Registry)({fallback:n})
u().setupRegistry(r),r.normalizeFullName=n.normalizeFullName,r.makeToString=n.makeToString,r.describe=n.describe
const i=p.create({__registry__:r,__container__:null}),s=r.container({owner:i})
return i.__container__=s,function(e){const t=["register","unregister","resolve","normalize","typeInjection","injection","factoryInjection","factoryTypeInjection","has","options","optionsForType"]
for(let n=0,r=t.length;n<r;n++){const r=t[n]
if(r&&r in e){const t=r
e[t]=function(...n){return e._registry[t](...n)}}}}(s),{registry:r,container:s,owner:i}}(t)
return Promise.resolve(n)}var g=n(8234),y=n(2394)
const v=e=>Promise.resolve().then(e),b=setTimeout,w=[0,1,2,5,7],_=10
var S=n(1603),E="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:Function("return this")()
let I,T
function A(){return T}function C(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class k{constructor(){C(this,"testName",void 0),C(this,"setupTypes",void 0),C(this,"usedHelpers",void 0),this.setupTypes=[],this.usedHelpers=[]}get isRendering(){return this.setupTypes.indexOf("setupRenderingContext")>-1&&this.usedHelpers.indexOf("render")>-1}get isApplication(){return this.setupTypes.indexOf("setupApplicationContext")>-1}}const x=new WeakMap
function D(e){return x.has(e)||x.set(e,new k),x.get(e)}var R=n(1130)
function N(e){return null!==e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}const O=new WeakMap
function M(e){if(!e)throw new TypeError(`[@ember/test-helpers] could not get deprecations for an invalid test context: '${e}'`)
let t=O.get(e)
return Array.isArray(t)||(t=[],O.set(e,t)),t}if("undefined"!=typeof URLSearchParams){const e=new URLSearchParams(document.location.search.substring(1)),t=e.get("disabledDeprecations"),n=e.get("debugDeprecations")
t&&(0,S.registerDeprecationHandler)((e,n,r)=>{n&&t.includes(n.id)||r.apply(null,[e,n])}),n&&(0,S.registerDeprecationHandler)((e,t,r)=>{t&&n.includes(t.id),r.apply(null,[e,t])})}const P=new WeakMap
function F(e){if(!e)throw new TypeError(`[@ember/test-helpers] could not get warnings for an invalid test context: '${e}'`)
let t=P.get(e)
return Array.isArray(t)||(t=[],P.set(e,t)),t}if("undefined"!=typeof URLSearchParams){const e=new URLSearchParams(document.location.search.substring(1)),t=e.get("disabledWarnings"),n=e.get("debugWarnings")
t&&(0,S.registerWarnHandler)((e,n,r)=>{n&&t.includes(n.id)||r.apply(null,[e,n])}),n&&(0,S.registerWarnHandler)((e,t,r)=>{t&&n.includes(t.id),r.apply(null,[e,t])})}var L=n(5152)
function j(e,t){const n=L.VERSION.split("-")[0]?.split(".")
if(!n||!n[0]||!n[1])throw new Error("`Ember.VERSION` is not set.")
const r=parseInt(n[0],10),i=parseInt(n[1],10)
return r>e||r===e&&i>=t}const q=new Map
function V(e,t,...n){const r=q.get(function(e,t){return`${e}:${t}`}(e,t))||new Set,i=[]
return r.forEach(e=>{const t=e(...n)
i.push(t)}),Promise.all(i).then(()=>{})}const B=function(){const e="TEST_WAITERS",t="undefined"!=typeof Symbol?Symbol.for(e):e,n=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
throw new Error("unable to locate global object")}()
let r=n[t]
return void 0===r&&(r=n[t]=new Map),r}()
function U(){const e={pending:0,waiters:{}}
return B.forEach(t=>{if(!t.waitUntil()){e.pending++
const n=t.debugInfo()
e.waiters[t.name]=n||!0}}),e}class ${constructor(e){var t,n,r
t=this,r=void 0,(n=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(n="name"))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,this.name=e}beginAsync(){return this}endAsync(){}waitUntil(){return!0}debugInfo(){return[]}reset(){}}function z(e){return new $(e)}z("@ember/test-waiters:promise-waiter"),z("@ember/test-waiters:generator-waiter")
const G=new Set
function K(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const W="Pending test waiters"
class H{constructor(e,t=function(){return!0===r._backburner.DEBUG&&"function"==typeof r._backburner.getDebugInfo?r._backburner.getDebugInfo():null}()){K(this,"_settledState",void 0),K(this,"_debugInfo",void 0),K(this,"_summaryInfo",void 0),this._settledState=e,this._debugInfo=t}get summary(){return this._summaryInfo||(this._summaryInfo={...this._settledState},this._debugInfo&&(this._summaryInfo.autorunStackTrace=this._debugInfo.autorun&&this._debugInfo.autorun.stack,this._summaryInfo.pendingTimersCount=this._debugInfo.timers.length,this._summaryInfo.hasPendingTimers=this._settledState.hasPendingTimers&&this._summaryInfo.pendingTimersCount>0,this._summaryInfo.pendingTimersStackTraces=this._debugInfo.timers.map(e=>e.stack),this._summaryInfo.pendingScheduledQueueItemCount=this._debugInfo.instanceStack.filter(Q).reduce((e,t)=>(Object.values(t).forEach(t=>{e+=t?.length??0}),e),0),this._summaryInfo.pendingScheduledQueueItemStackTraces=this._debugInfo.instanceStack.filter(Q).reduce((e,t)=>(Object.values(t).forEach(t=>{t?.forEach(t=>t.stack&&e.push(t.stack))}),e),[])),this._summaryInfo.hasPendingTestWaiters&&(this._summaryInfo.pendingTestWaiterInfo=U())),this._summaryInfo}toConsole(e=console){const t=this.summary
t.hasPendingRequests&&e.log("Pending AJAX requests"),t.hasPendingLegacyWaiters&&e.log(W),t.hasPendingTestWaiters&&(t.hasPendingLegacyWaiters||e.log(W),Object.keys(t.pendingTestWaiterInfo.waiters).forEach(n=>{const r=t.pendingTestWaiterInfo.waiters[n]
Array.isArray(r)?(e.group(n),r.forEach(t=>{e.log(`${t.label?t.label:"stack"}: ${t.stack}`)}),e.groupEnd()):e.log(n)})),(t.hasPendingTimers||t.pendingScheduledQueueItemCount>0)&&(e.group("Scheduled async"),t.pendingTimersStackTraces.forEach(t=>{e.log(t)}),t.pendingScheduledQueueItemStackTraces.forEach(t=>{e.log(t)}),e.groupEnd()),t.hasRunLoop&&0===t.pendingTimersCount&&0===t.pendingScheduledQueueItemCount&&(e.log("Scheduled autorun"),t.autorunStackTrace&&e.log(t.autorunStackTrace)),G.forEach(e=>{e.log()})}_formatCount(e,t){return`${e}: ${t}`}}function Q(e){return null!=e}const J=j(3,6)
let Y=null
const X=new WeakMap,Z=new WeakMap
function ee(e){return Se(e)}function te(){if(J)return Y
const e=Ae()
if(void 0===e)return null
const t=X.get(e)
if(void 0===t)return null
const n=t._routerMicrolib||t.router
return void 0===n?null:!!n.activeTransition}function ne(){const e=Ae()
if(void 0===e||!Se(e))throw new Error("Cannot setupRouterSettlednessTracking outside of a test context")
if(Z.get(e))return
Z.set(e,!0)
const{owner:t}=e
let n
if(J){const e=t.lookup("service:router");(0,S.assert)("router service is not set up correctly",!!e),n=e,n.on("routeWillChange",()=>Y=!0),n.on("routeDidChange",()=>Y=!1)}else{const r=t.lookup("router:main");(0,S.assert)("router:main is not available",!!r),n=r,X.set(e,n)}const r=n.willDestroy
n.willDestroy=function(){return Y=null,r.call(this)}}function re(e,t){const n=Ae()
if(!n||!ee(n))throw new Error("Cannot call `visit` without having first called `setupApplicationContext`.")
const{owner:r}=n
return D(n).usedHelpers.push("visit"),Promise.resolve().then(()=>V("visit","start",e,t)).then(()=>{const n=r.visit(e,t)
return ne(),n}).then(()=>{!1!==E.EmberENV._APPLICATION_TEMPLATE_WRAPPER?n.element=document.querySelector("#ember-testing > .ember-view"):n.element=document.querySelector("#ember-testing")}).then(ge).then(()=>V("visit","end",e,t))}function ie(){const e=Ae()
if(!e||!ee(e))throw new Error("Cannot call `currentRouteName` without having first called `setupApplicationContext`.")
const t=e.owner.lookup("router:main").currentRouteName
return(0,S.assert)("currentRouteName should be a string","string"==typeof t),t}const se=j(2,13)
function oe(){const e=Ae()
if(!e||!ee(e))throw new Error("Cannot call `currentURL` without having first called `setupApplicationContext`.")
const t=e.owner.lookup("router:main")
if(se){const e=t.currentURL
return null===e||(0,S.assert)("currentUrl should be a string, but was "+typeof e,"string"==typeof e),e}return t.location.getURL()}function ae(e){return D(e).setupTypes.push("setupApplicationContext"),Promise.resolve()}let ce
const ue=g.Test.checkWaiters
function le(e,t){ce.push(t)}function he(e,t){v(()=>{for(let e=0;e<ce.length;e++)t===ce[e]&&ce.splice(e,1)})}function de(){ce=[],void 0!==globalThis.jQuery&&(globalThis.jQuery(document).off("ajaxSend",le),globalThis.jQuery(document).off("ajaxComplete",he))}function fe(){ce=[],void 0!==globalThis.jQuery&&(globalThis.jQuery(document).on("ajaxSend",le),globalThis.jQuery(document).on("ajaxComplete",he))}function pe(){const e=r._backburner.hasTimers(),t=Boolean(r._backburner.currentInstance),n=ue(),i=U().pending>0,s=(void 0!==ce?ce.length:0)+(0,y.pendingRequests)(),o=s>0,a=!!t
return{hasPendingTimers:e,hasRunLoop:t,hasPendingWaiters:n||i,hasPendingRequests:o,hasPendingTransitions:te(),isRenderPending:a,pendingRequestCount:s,debugInfo:new H({hasPendingTimers:e,hasRunLoop:t,hasPendingLegacyWaiters:n,hasPendingTestWaiters:i,hasPendingRequests:o,isRenderPending:a})}}function me(){const{hasPendingTimers:e,hasRunLoop:t,hasPendingRequests:n,hasPendingWaiters:r,hasPendingTransitions:i,isRenderPending:s}=pe()
return!(e||t||n||r||i||s)}function ge(){return function(e,t={}){const n="timeout"in t?t.timeout:1e3,r="timeoutMessage"in t?t.timeoutMessage:"waitUntil timed out",i=new Error(r)
return new Promise(function(t,r){let s=0
!function o(a){const c=w[a],u=void 0===c?_:c
b(function(){let c
s+=u
try{c=e()}catch(e){return void r(e)}if(c)t(c)
else{if(!(s<n))return void r(i)
o(a+1)}},u)}(0)})}(me,{timeout:1/0}).then(()=>{})}const ye=new Map
function ve(e){const t=Ae()
if(!t)throw new Error("Must setup test context before calling setupOnerror")
if(!ye.has(t))throw new Error("_cacheOriginalOnerror must be called before setupOnerror. Normally, this will happen as part of your test harness.")
"function"!=typeof e&&(e=ye.get(t)),h().onerror=e}function be(){const e=Ae()
e&&ye.has(e)&&(h().onerror=ye.get(e))}function we(e){if(ye.has(e))throw new Error("_prepareOnerror should only be called once per-context")
ye.set(e,h().onerror)}function _e(e){be(),ye.delete(e)}function Se(e){const t=e
return"function"==typeof t.pauseTest&&"function"==typeof t.resumeTest}function Ee(e){return e&&e.Math===Math&&e}(0,S.registerDeprecationHandler)((e,t,n)=>{const r=Ae()
void 0!==r?(M(r).push({message:e,options:t}),n.apply(null,[e,t])):n.apply(null,[e,t])}),(0,S.registerWarnHandler)((e,t,n)=>{const r=Ae()
void 0!==r?(F(r).push({message:e,options:t}),n.apply(null,[e,t])):n.apply(null,[e,t])})
const Ie=Ee("object"==typeof globalThis&&globalThis)||Ee("object"==typeof window&&window)||Ee("object"==typeof self&&self)||Ee("object"==typeof E&&E)
function Te(e){Ie.__test_context__=e}function Ae(){return Ie.__test_context__}function Ce(){Ie.__test_context__=void 0}function ke(){const e=Ae()
if(!e||!Se(e))throw new Error("Cannot call `pauseTest` without having first called `setupTest` or `setupRenderingTest`.")
return e.pauseTest()}function xe(){const e=Ae()
if(!e||!Se(e))throw new Error("Cannot call `resumeTest` without having first called `setupTest` or `setupRenderingTest`.")
e.resumeTest()}function De(e){de(),h().testing=!1,Ce()}function Re(){const e=Ae()
if(!e)throw new Error("[@ember/test-helpers] could not get deprecations if no test context is currently active")
return M(e)}function Ne(e){const t=Ae()
if(!t)throw new Error("[@ember/test-helpers] could not get deprecations if no test context is currently active")
return function(e,t){if(!e)throw new TypeError(`[@ember/test-helpers] could not get deprecations for an invalid test context: '${e}'`)
const n=M(e),r=n.length,i=t()
return N(i)?Promise.resolve(i).then(()=>n.slice(r)):n.slice(r)}(t,e)}function Oe(){const e=Ae()
if(!e)throw new Error("[@ember/test-helpers] could not get warnings if no test context is currently active")
return F(e)}function Me(e){const t=Ae()
if(!t)throw new Error("[@ember/test-helpers] could not get warnings if no test context is currently active")
return function(e,t){if(!e)throw new TypeError(`[@ember/test-helpers] could not get warnings for an invalid test context: '${e}'`)
const n=F(e),r=n.length,i=t()
return N(i)?Promise.resolve(i).then(()=>n.slice(r)):n.slice(r)}(t,e)}const Pe=new WeakMap,Fe=new WeakMap
function Le(e,t={}){const n=e
return h().testing=!0,Te(n),D(n).setupTypes.push("setupContext"),r._backburner.DEBUG=!0,(0,R.registerDestructor)(n,De),we(n),Promise.resolve().then(()=>{const e=A()
if(e)return e.boot().then(()=>{})}).then(()=>{const{resolver:e}=t
return e?m(null,e):m(A(),I)}).then(e=>{let t
return(0,R.associateDestroyableChild)(n,e),Object.defineProperty(n,"owner",{configurable:!0,enumerable:!0,value:e,writable:!1}),(0,o.setOwner)(n,e),Object.defineProperty(n,"set",{configurable:!0,enumerable:!0,value:(e,t)=>(0,r.run)(function(){if(Pe.has(n))(0,S.assert)("You cannot call `this.set` when passing a component to `render()` (the rendered component does not have access to the test context).")
else{let t=Fe.get(n)
void 0===t&&(t=[],Fe.set(n,t)),t?.push(e)}return(0,i.set)(n,e,t)}),writable:!1}),Object.defineProperty(n,"setProperties",{configurable:!0,enumerable:!0,value:e=>(0,r.run)(function(){if(Pe.has(n))(0,S.assert)("You cannot call `this.setProperties` when passing a component to `render()` (the rendered component does not have access to the test context)")
else if(null!=e){let t=Fe.get(n)
void 0===Fe.get(n)&&(t=[],Fe.set(n,t)),t?.push(...Object.keys(e))}return(0,i.setProperties)(n,e)}),writable:!1}),Object.defineProperty(n,"get",{configurable:!0,enumerable:!0,value:e=>(0,i.get)(n,e),writable:!1}),Object.defineProperty(n,"getProperties",{configurable:!0,enumerable:!0,value:(...e)=>(0,i.getProperties)(n,e),writable:!1}),n.resumeTest=function(){(0,S.assert)("Testing has not been paused. There is nothing to resume.",!!t),t(),E.resumeTest=t=void 0},n.pauseTest=function(){return console.info("Testing paused. Use `resumeTest()` to continue."),new Promise(e=>{t=e,E.resumeTest=xe})},fe(),n})}},4931:(e,t,n)=>{"use strict"
function r([e]){return Math.cbrt(e)}n.r(t),n.d(t,{cbrt:()=>r,default:()=>i})
var i=(0,n(336).helper)(r)},4943:(e,t,n)=>{"use strict"
function r(e,t){return e!==t}n.r(t),n.d(t,{default:()=>r})},5059:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(3797)
r.registerVersion("firebase","12.4.0","app"),Object.keys(r).forEach(function(e){"default"===e||t.hasOwnProperty(e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},5088:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>r.isEqual})
var r=n(9553)},5113:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{BooleanTransform:()=>c,DateTransform:()=>u,NumberTransform:()=>h,StringTransform:()=>d,default:()=>a})
var r=n(4471),i=n.n(r),s=n(1788)
function o(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const a=i()
class c{deserialize(e,t){return null==e&&!0===t?.allowNull?null:"boolean"==typeof e?e:"string"==typeof e?/^(true|t|1)$/i.test(e):"number"==typeof e&&1===e}serialize(e,t){return null==e&&!0===t?.allowNull?null:Boolean(e)}static create(){return new this}}class u{constructor(){o(this,s.k5,"date")}deserialize(e,t){if("string"==typeof e){let t=e.indexOf("+")
return-1!==t&&e.length-5===t?(t+=3,new Date(e.slice(0,t)+":"+e.slice(t))):new Date(e)}return"number"==typeof e?new Date(e):null==e?e:null}serialize(e,t){return e instanceof Date&&!isNaN(e)?e.toISOString():null}static create(){return new this}}function l(e){return e==e&&e!==1/0&&e!==-1/0}class h{constructor(){o(this,s.k5,"number")}deserialize(e,t){if(""===e||null==e)return null
{const t=Number(e)
return l(t)?t:null}}serialize(e,t){if(""===e||null==e)return null
{const t=Number(e)
return l(t)?t:null}}static create(){return new this}}class d{constructor(){o(this,s.k5,"string")}deserialize(e,t){return e||""===e?String(e):null}serialize(e,t){return e||""===e?String(e):null}static create(){return new this}}},5167:(e,t,n)=>{"use strict"
function r([e]){return Math.expm1(e)}n.r(t),n.d(t,{default:()=>i,expm1:()=>r})
var i=(0,n(336).helper)(r)},5217:(e,t,n)=>{"use strict"
function r([e]){return Math.log10(e)}n.r(t),n.d(t,{default:()=>i,log10:()=>r})
var i=(0,n(336).helper)(r)},5266:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>h})
var r,i,s,o=n(81),a=n(2735),c=n(336),u=n.n(c),l=n(4666)
let h=(r=(0,a.inject)("page-title"),i=class extends(u()){constructor(e){super(e),(0,o.a)(this,"tokens",s,this),(0,o.b)(this,"tokenId",(0,l.guidFor)(this)),this.tokens.push({id:this.tokenId})}compute(e,t){const n={...t,id:this.tokenId,title:e.join("")}
return this.tokens.push(n),this.tokens.scheduleTitleUpdate(),""}willDestroy(){super.willDestroy(),this.tokens.remove(this.tokenId),this.tokens.scheduleTitleUpdate()}},s=(0,o._)(i.prototype,"tokens",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i)},5332:(e,t,n)=>{"use strict"
function r(e){var t=e._promiseCallbacks
return t||(t=e._promiseCallbacks={}),t}n.r(t),n.d(t,{EventTarget:()=>i,Promise:()=>N,all:()=>L,allSettled:()=>q,asap:()=>ne,async:()=>be,cast:()=>ve,configure:()=>o,default:()=>Ie,defer:()=>K,denodeify:()=>M,filter:()=>Z,hash:()=>U,hashSettled:()=>z,map:()=>H,off:()=>_e,on:()=>we,race:()=>V,reject:()=>J,resolve:()=>Q,rethrow:()=>G})
var i={mixin:function(e){return e.on=this.on,e.off=this.off,e.trigger=this.trigger,e._promiseCallbacks=void 0,e},on:function(e,t){if("function"!=typeof t)throw new TypeError("Callback must be a function")
var n=r(this),i=n[e]
i||(i=n[e]=[]),-1===i.indexOf(t)&&i.push(t)},off:function(e,t){var n=r(this)
if(t){var i=n[e],s=i.indexOf(t);-1!==s&&i.splice(s,1)}else n[e]=[]},trigger:function(e,t,n){var i=r(this)[e]
if(i)for(var s=0;s<i.length;s++)(0,i[s])(t,n)}},s={instrument:!1}
function o(e,t){if(2!==arguments.length)return s[e]
s[e]=t}i.mixin(s)
var a=[]
function c(e,t,n){1===a.push({name:e,payload:{key:t._guidKey,id:t._id,eventName:e,detail:t._result,childId:n&&n._id,label:t._label,timeStamp:Date.now(),error:s["instrument-with-stack"]?new Error(t._label):null}})&&setTimeout(function(){for(var e=0;e<a.length;e++){var t=a[e],n=t.payload
n.guid=n.key+n.id,n.childGuid=n.key+n.childId,n.error&&(n.stack=n.error.stack),s.trigger(t.name,t.payload)}a.length=0},50)}function u(e,t){if(e&&"object"==typeof e&&e.constructor===this)return e
var n=new this(l,t)
return w(n,e),n}function l(){}var h=void 0,d=1,f=2,p={error:null}
function m(e){try{return e.then}catch(e){return p.error=e,p}}var g=void 0
function y(){try{var e=g
return g=null,e.apply(this,arguments)}catch(e){return p.error=e,p}}function v(e){return g=e,y}function b(e,t,n){if(t.constructor===e.constructor&&n===C&&e.constructor.resolve===u)!function(e,t){t._state===d?S(e,t._result):t._state===f?(t._onError=null,E(e,t._result)):I(t,void 0,function(n){t===n?S(e,n):w(e,n)},function(t){return E(e,t)})}(e,t)
else if(n===p){var r=p.error
p.error=null,E(e,r)}else"function"==typeof n?function(e,t,n){s.async(function(e){var r=!1,i=v(n).call(t,function(n){r||(r=!0,t===n?S(e,n):w(e,n))},function(t){r||(r=!0,E(e,t))},"Settle: "+(e._label||" unknown promise"))
if(!r&&i===p){r=!0
var s=p.error
p.error=null,E(e,s)}},e)}(e,t,n):S(e,t)}function w(e,t){var n,r
e===t?S(e,t):(r=typeof(n=t),null===n||"object"!==r&&"function"!==r?S(e,t):b(e,t,m(t)))}function _(e){e._onError&&e._onError(e._result),T(e)}function S(e,t){e._state===h&&(e._result=t,e._state=d,0===e._subscribers.length?s.instrument&&c("fulfilled",e):s.async(T,e))}function E(e,t){e._state===h&&(e._state=f,e._result=t,s.async(_,e))}function I(e,t,n,r){var i=e._subscribers,o=i.length
e._onError=null,i[o]=t,i[o+d]=n,i[o+f]=r,0===o&&e._state&&s.async(T,e)}function T(e){var t=e._subscribers,n=e._state
if(s.instrument&&c(n===d?"fulfilled":"rejected",e),0!==t.length){for(var r=void 0,i=void 0,o=e._result,a=0;a<t.length;a+=3)r=t[a],i=t[a+n],r?A(n,r,i,o):i(o)
e._subscribers.length=0}}function A(e,t,n,r){var i,s="function"==typeof n
if(i=s?v(n)(r):r,t._state!==h);else if(i===t)E(t,new TypeError("A promises callback cannot return that same promise."))
else if(i===p){var o=p.error
p.error=null,E(t,o)}else s?w(t,i):e===d?S(t,i):e===f&&E(t,i)}function C(e,t,n){var r=this,i=r._state
if(i===d&&!e||i===f&&!t)return s.instrument&&c("chained",r,r),r
r._onError=null
var o=new r.constructor(l,n),a=r._result
if(s.instrument&&c("chained",r,o),i===h)I(r,o,e,t)
else{var u=i===d?e:t
s.async(function(){return A(i,o,u,a)})}return o}var k=function(){function e(e,t,n,r){this._instanceConstructor=e,this.promise=new e(l,r),this._abortOnReject=n,this._isUsingOwnPromise=e===N,this._isUsingOwnResolve=e.resolve===u,this._init.apply(this,arguments)}return e.prototype._init=function(e,t){var n=t.length||0
this.length=n,this._remaining=n,this._result=new Array(n),this._enumerate(t)},e.prototype._enumerate=function(e){for(var t=this.length,n=this.promise,r=0;n._state===h&&r<t;r++)this._eachEntry(e[r],r,!0)
this._checkFullfillment()},e.prototype._checkFullfillment=function(){if(0===this._remaining){var e=this._result
S(this.promise,e),this._result=null}},e.prototype._settleMaybeThenable=function(e,t,n){var r=this._instanceConstructor
if(this._isUsingOwnResolve){var i=m(e)
if(i===C&&e._state!==h)e._onError=null,this._settledAt(e._state,t,e._result,n)
else if("function"!=typeof i)this._settledAt(d,t,e,n)
else if(this._isUsingOwnPromise){var s=new r(l)
b(s,e,i),this._willSettleAt(s,t,n)}else this._willSettleAt(new r(function(t){return t(e)}),t,n)}else this._willSettleAt(r.resolve(e),t,n)},e.prototype._eachEntry=function(e,t,n){null!==e&&"object"==typeof e?this._settleMaybeThenable(e,t,n):this._setResultAt(d,t,e,n)},e.prototype._settledAt=function(e,t,n,r){var i=this.promise
i._state===h&&(this._abortOnReject&&e===f?E(i,n):(this._setResultAt(e,t,n,r),this._checkFullfillment()))},e.prototype._setResultAt=function(e,t,n,r){this._remaining--,this._result[t]=n},e.prototype._willSettleAt=function(e,t,n){var r=this
I(e,void 0,function(e){return r._settledAt(d,t,e,n)},function(e){return r._settledAt(f,t,e,n)})},e}()
function x(e,t,n){this._remaining--,this._result[t]=e===d?{state:"fulfilled",value:n}:{state:"rejected",reason:n}}var D="rsvp_"+Date.now()+"-",R=0,N=function(){function e(t,n){this._id=R++,this._label=n,this._state=void 0,this._result=void 0,this._subscribers=[],s.instrument&&c("created",this),l!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(e,t){var n=!1
try{t(function(t){n||(n=!0,w(e,t))},function(t){n||(n=!0,E(e,t))})}catch(t){E(e,t)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype._onError=function(e){var t=this
s.after(function(){t._onError&&s.trigger("error",e,t._label)})},e.prototype.catch=function(e,t){return this.then(void 0,e,t)},e.prototype.finally=function(e,t){var n=this,r=n.constructor
return"function"==typeof e?n.then(function(t){return r.resolve(e()).then(function(){return t})},function(t){return r.resolve(e()).then(function(){throw t})}):n.then(e,e)},e}()
function O(e,t){return{then:function(n,r){return e.call(t,n,r)}}}function M(e,t){var n=function(){for(var n=arguments.length,r=new Array(n+1),i=!1,s=0;s<n;++s){var o=arguments[s]
if(!i){if((i=F(o))===p){var a=p.error
p.error=null
var c=new N(l)
return E(c,a),c}i&&!0!==i&&(o=O(i,o))}r[s]=o}var u=new N(l)
return r[n]=function(e,n){e?E(u,e):void 0===t?w(u,n):!0===t?w(u,function(e){for(var t=e.length,n=new Array(t-1),r=1;r<t;r++)n[r-1]=e[r]
return n}(arguments)):Array.isArray(t)?w(u,function(e,t){for(var n={},r=e.length,i=new Array(r),s=0;s<r;s++)i[s]=e[s]
for(var o=0;o<t.length;o++)n[t[o]]=i[o+1]
return n}(arguments,t)):w(u,n)},i?function(e,t,n,r){return N.all(t).then(function(t){return P(e,t,n,r)})}(u,r,e,this):P(u,r,e,this)}
return n.__proto__=e,n}function P(e,t,n,r){if(v(n).apply(r,t)===p){var i=p.error
p.error=null,E(e,i)}return e}function F(e){return null!==e&&"object"==typeof e&&(e.constructor===N||m(e))}function L(e,t){return N.all(e,t)}N.cast=u,N.all=function(e,t){return Array.isArray(e)?new k(this,e,!0,t).promise:this.reject(new TypeError("Promise.all must be called with an array"),t)},N.race=function(e,t){var n=new this(l,t)
if(!Array.isArray(e))return E(n,new TypeError("Promise.race must be called with an array")),n
for(var r=0;n._state===h&&r<e.length;r++)I(this.resolve(e[r]),void 0,function(e){return w(n,e)},function(e){return E(n,e)})
return n},N.resolve=u,N.reject=function(e,t){var n=new this(l,t)
return E(n,e),n},N.prototype._guidKey=D,N.prototype.then=C
var j=function(e){function t(t,n,r){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,n,!1,r))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(k)
function q(e,t){return Array.isArray(e)?new j(N,e,t).promise:N.reject(new TypeError("Promise.allSettled must be called with an array"),t)}function V(e,t){return N.race(e,t)}j.prototype._setResultAt=x
var B=function(e){function t(t,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3]
return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,n,r,i))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._init=function(e,t){this._result={},this._enumerate(t)},t.prototype._enumerate=function(e){var t=Object.keys(e),n=t.length,r=this.promise
this._remaining=n
for(var i=void 0,s=void 0,o=0;r._state===h&&o<n;o++)s=e[i=t[o]],this._eachEntry(s,i,!0)
this._checkFullfillment()},t}(k)
function U(e,t){return N.resolve(e,t).then(function(e){if(null===e||"object"!=typeof e)throw new TypeError("Promise.hash must be called with an object")
return new B(N,e,t).promise})}var $=function(e){function t(t,n,r){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,n,!1,r))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(B)
function z(e,t){return N.resolve(e,t).then(function(e){if(null===e||"object"!=typeof e)throw new TypeError("hashSettled must be called with an object")
return new $(N,e,!1,t).promise})}function G(e){throw setTimeout(function(){throw e}),e}function K(e){var t={resolve:void 0,reject:void 0}
return t.promise=new N(function(e,n){t.resolve=e,t.reject=n},e),t}$.prototype._setResultAt=x
var W=function(e){function t(t,n,r,i){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,n,!0,i,r))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._init=function(e,t,n,r,i){var s=t.length||0
this.length=s,this._remaining=s,this._result=new Array(s),this._mapFn=i,this._enumerate(t)},t.prototype._setResultAt=function(e,t,n,r){if(r){var i=v(this._mapFn)(n,t)
i===p?this._settledAt(f,t,i.error,!1):this._eachEntry(i,t,!1)}else this._remaining--,this._result[t]=n},t}(k)
function H(e,t,n){return"function"!=typeof t?N.reject(new TypeError("map expects a function as a second argument"),n):N.resolve(e,n).then(function(e){if(!Array.isArray(e))throw new TypeError("map must be called with an array")
return new W(N,e,t,n).promise})}function Q(e,t){return N.resolve(e,t)}function J(e,t){return N.reject(e,t)}var Y={},X=function(e){function t(){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._checkFullfillment=function(){if(0===this._remaining&&null!==this._result){var e=this._result.filter(function(e){return e!==Y})
S(this.promise,e),this._result=null}},t.prototype._setResultAt=function(e,t,n,r){if(r){this._result[t]=n
var i=v(this._mapFn)(n,t)
i===p?this._settledAt(f,t,i.error,!1):this._eachEntry(i,t,!1)}else this._remaining--,n||(this._result[t]=Y)},t}(W)
function Z(e,t,n){return"function"!=typeof t?N.reject(new TypeError("filter expects function as a second argument"),n):N.resolve(e,n).then(function(e){if(!Array.isArray(e))throw new TypeError("filter must be called with an array")
return new X(N,e,t,n).promise})}var ee=0,te=void 0
function ne(e,t){ue[ee]=e,ue[ee+1]=t,2===(ee+=2)&&ye()}var re="undefined"!=typeof window?window:void 0,ie=re||{},se=ie.MutationObserver||ie.WebKitMutationObserver,oe="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),ae="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel
function ce(){return function(){return setTimeout(le,1)}}var ue=new Array(1e3)
function le(){for(var e=0;e<ee;e+=2)(0,ue[e])(ue[e+1]),ue[e]=void 0,ue[e+1]=void 0
ee=0}var he,de,fe,pe,me,ge,ye=void 0
oe?(me=process.nextTick,ge=process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/),Array.isArray(ge)&&"0"===ge[1]&&"10"===ge[2]&&(me=setImmediate),ye=function(){return me(le)}):se?(de=0,fe=new se(le),pe=document.createTextNode(""),fe.observe(pe,{characterData:!0}),ye=function(){return pe.data=de=++de%2}):ae?((he=new MessageChannel).port1.onmessage=le,ye=function(){return he.port2.postMessage(0)}):ye=void 0===re?function(){try{var e=Function("return this")().require("vertx")
return void 0!==(te=e.runOnLoop||e.runOnContext)?function(){te(le)}:ce()}catch(e){return ce()}}():ce(),s.async=ne,s.after=function(e){return setTimeout(e,0)}
var ve=Q,be=function(e,t){return s.async(e,t)}
function we(){s.on.apply(s,arguments)}function _e(){s.off.apply(s,arguments)}if("undefined"!=typeof window&&"object"==typeof window.__PROMISE_INSTRUMENTATION__){var Se=window.__PROMISE_INSTRUMENTATION__
for(var Ee in o("instrument",!0),Se)Se.hasOwnProperty(Ee)&&we(Ee,Se[Ee])}const Ie={asap:ne,cast:ve,Promise:N,EventTarget:i,all:L,allSettled:q,race:V,hash:U,hashSettled:z,rethrow:G,defer:K,denodeify:M,configure:o,on:we,off:_e,resolve:Q,reject:J,map:H,async:be,filter:Z}},5592:(e,t,n)=>{"use strict"
function r(e){return e.reduce((e,t)=>Math.pow(e,t))}n.r(t),n.d(t,{default:()=>i,pow:()=>r})
var i=(0,n(336).helper)(r)},5670:(e,t,n)=>{"use strict"
n.d(t,{A:()=>i})
var r=n(1389)
function i(e){return"object"==typeof e&&e&&"isTruthy"in e&&"boolean"==typeof e.isTruthy?e.isTruthy:(0,r.isArray)(e)?0!==e.length:!!e}},5881:(e,t,n)=>{"use strict"
function r([e]){return Math.exp(e)}n.r(t),n.d(t,{default:()=>i,exp:()=>r})
var i=(0,n(336).helper)(r)},5914:(e,t,n)=>{"use strict"
function r([e]){return Math.fround(e)}n.r(t),n.d(t,{default:()=>i,fround:()=>r})
var i=(0,n(336).helper)(r)},6076:(e,t,n)=>{"use strict"
n.d(t,{I:()=>p,b:()=>b,c:()=>h,e:()=>v,f:()=>S,g:()=>d,s:()=>f,u:()=>w})
var r=n(7375),i=n(7648)
function s(e,t){return e.get(o(e,t))}function o(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n
throw new TypeError("Private element is not present on this object")}function a(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const c=(0,r.vs)("PromiseCache",new WeakMap),u=(0,r.vs)("RequestMap",new Map)
function l(e,t){u.set(e,t)}function h(e){u.delete(e)}function d(e){return u.get(e)}function f(e,t){c.set(e,t)}const p=(0,r.L1)("IS_CACHE_HANDLER",Symbol("IS_CACHE_HANDLER"))
function m(e){return e&&!0===e[i.k0]}function g(e,t,n){return m(t)?t:n?{[i.k0]:!0,request:e.request,response:e.getResponse(),error:t}:{[i.k0]:!0,request:e.request,response:e.getResponse(),content:t}}function y(e){return new DOMException(e||"The user aborted a request.","AbortError")}function v(e,t,n,r){const s=new E(t,r,0===n),o=(a=e[n],0===n&&Boolean(a[p]))
var a
const c=new T(s,o)
let u
try{u=e[n].request(c,function(t){return s.nextCalled++,v(e,t,n+1,r)}),o&&c._finalize(),u&&o&&(u instanceof Promise||(l(s.requestId,{isError:!1,result:g(s,u,!1)}),u=Promise.resolve(u)))}catch(e){o&&l(s.requestId,{isError:!0,result:g(s,e,!0)}),u=Promise.reject(e)}const h=function(e){const t=b()
let n,{promise:r}=t
return r=r.finally(()=>{e.resolveStream(),n&&n.forEach(e=>e())}),r.onFinalize=e=>{n=n||[],n.push(e)},r[i.J6]=!0,r.getStream=()=>e.getStream(),r.abort=t=>{e.abort(y(t))},r.id=e.requestId,r.lid=e.god.identifier,t.promise=r,t}(s)
return d=u,Boolean(d&&d instanceof Promise&&!0===d[i.J6])?function(e,t,n){return e.setStream(t.getStream()),t.then(t=>{const r={[i.k0]:!0,request:e.request,response:t.response,content:t.content}
n.resolve(r)},t=>{if(m(t)&&e.setStream(e.god.stream),!(t&&t instanceof Error))try{throw new Error(t||"Request Rejected with an Unknown Error")}catch(e){t&&"object"==typeof t&&(Object.assign(e,t),e.message=t.message||"Request Rejected with an Unknown Error"),t=e}t[i.k0]=!0,t.request=e.request,t.response=e.getResponse(),t.error=t.error||t.message,n.reject(t)}),n.promise}(s,u,h):function(e,t,n){return t.then(t=>{if(e.controller.signal.aborted)return void n.reject(y(e.controller.signal.reason))
m(t)&&(e.setStream(e.god.stream),t=t.content)
const r={[i.k0]:!0,request:e.request,response:e.getResponse(),content:t}
n.resolve(r)},t=>{if(m(t)&&e.setStream(e.god.stream),!(t&&t instanceof Error))try{throw new Error(t||"Request Rejected with an Unknown Error")}catch(e){t&&"object"==typeof t&&(Object.assign(e,t),e.message=t.message||"Request Rejected with an Unknown Error"),t=e}t[i.k0]=!0,t.request=e.request,t.response=e.getResponse(),t.error=t.error||t.message,n.reject(t)}),n.promise}(s,u,h)
var d}function b(){let e,t
const n=new Promise((n,r)=>{e=n,t=r})
return{resolve:e,reject:t,promise:n}}function w(e,t){return e[i.J6]=!0,e.getStream=t.getStream,e.abort=t.abort,e.onFinalize=t.onFinalize,e.id=t.id,e.lid=t.lid,e}function _(e){return e.clone=()=>new Headers(e),e.toJSON=()=>Array.from(e),e}function S(e){const{headers:t,ok:n,redirected:r,status:i,statusText:s,type:o,url:a}=e
return _(t),{headers:t,ok:n,redirected:r,status:i,statusText:s,type:o,url:a}}class E{constructor(e,t,n=!1){a(this,"hasSetStream",!1),a(this,"hasSetResponse",!1),a(this,"hasSubscribers",!1),a(this,"stream",b()),a(this,"response",null),a(this,"nextCalled",0),this.isRoot=n,this.requestId=t.id,this.controller=e.controller||t.controller,this.stream.promise.sizeHint=0,e.controller&&(e.controller!==t.controller&&t.controller.signal.addEventListener("abort",()=>{this.controller.abort(t.controller.signal.reason)}),delete e.controller)
let r=Object.assign({signal:this.controller.signal},e)
e.headers&&_(e.headers),this.enhancedRequest=r,this.request=e,this.god=t,this.stream.promise=this.stream.promise.then(e=>(this.god.stream===e&&this.hasSubscribers&&(this.god.stream=null),e))}get hasRequestedStream(){return this.god.hasRequestedStream}getResponse(){return this.hasSetResponse?this.response:1===this.nextCalled?this.god.response:null}getStream(){if(this.isRoot&&(this.god.hasRequestedStream=!0),!this.hasSetResponse){const e=this.god.response?.headers?.get("content-length")
this.stream.promise.sizeHint=e?parseInt(e,10):0}return this.hasSubscribers=!0,this.stream.promise}abort(e){this.controller.abort(e)}setStream(e){this.hasSetStream||(this.hasSetStream=!0,e instanceof Promise||(this.god.stream=e),this.stream.resolve(e))}resolveStream(){this.setStream(1===this.nextCalled?this.god.stream:null)}setResponse(e){if(!this.hasSetResponse)if(this.hasSetResponse=!0,e instanceof Response){let t=S(e)
this.response=t,this.god.response=t
const n=e.headers?.get("content-length")
this.stream.promise.sizeHint=n?parseInt(n,10):0}else this.response=e,this.god.response=e}}var I=new WeakMap
class T{constructor(e,t){var n,r;(function(e,t){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,void 0)})(this,I),this.id=e.requestId,r=e,(n=I).set(o(n,this),r),this.request=e.enhancedRequest,this._isCacheHandler=t,this._finalized=!1}setStream(e){s(I,this).setStream(e)}setResponse(e){s(I,this).setResponse(e)}setIdentifier(e){s(I,this).god.identifier=e}get hasRequestedStream(){return s(I,this).hasRequestedStream}_finalize(){this._finalized=!0}}new Map([["records","array"],["data","json"],["body",{type:"string",klass:["Blob","ArrayBuffer","TypedArray","DataView","FormData","URLSearchParams","ReadableStream"]}],["disableTestWaiter","boolean"],["options","object"],["cacheOptions","object"],["op","string"],["store","object"],["url","string"],["cache",["default","force-cache","no-cache","no-store","only-if-cached","reload"]],["credentials",["include","omit","same-origin"]],["destination",["","object","audio","audioworklet","document","embed","font","frame","iframe","image","manifest","paintworklet","report","script","sharedworker","style","track","video","worker","xslt"]],["headers","headers"],["integrity","string"],["keepalive","boolean"],["method",["QUERY","GET","PUT","PATCH","DELETE","POST","OPTIONS","HEAD","CONNECT","TRACE"]],["mode",["same-origin","cors","navigate","no-cors"]],["redirect",["error","follow","manual"]],["referrer","string"],["signal","AbortSignal"],["controller","AbortController"],["referrerPolicy",["","same-origin","no-referrer","no-referrer-when-downgrade","origin","origin-when-cross-origin","strict-origin","strict-origin-when-cross-origin","unsafe-url"]]]),(0,r.L1)("IS_FROZEN",Symbol("FROZEN")),(0,r.L1)("IS_COLLECTION",Symbol.for("Collection")),new Set([])},6082:(e,t,n)=>{"use strict"
n.d(t,{Ay:()=>c,ud:()=>s.b})
var r=n(4065),i=n(7375),s=n(6076)
function o(e,t){return e.get(function(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n
throw new TypeError("Private element is not present on this object")}(e,t))}var a=new WeakMap
class c{constructor(e){var t,n
n=[],function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(this,t=a),t.set(this,n),Object.assign(this,e),this._pending=new Map,this._deduped=new Map}useCache(e){return e[s.I]=!0,o(a,this).unshift(e),this}use(e){return o(a,this).push(...e),this}request(e){const t=o(a,this),n=e.controller||new AbortController
e.controller&&delete e.controller
const r=(0,i.dN)("REQ_ID")??0;(0,i.ml)("REQ_ID",r+1)
const c={controller:n,response:null,stream:null,hasRequestedStream:!1,id:r,identifier:null},u=(0,s.e)(t,e,0,c),l=(0,s.g)(r),h=(0,s.u)(u.then(e=>((0,s.s)(h,{isError:!1,result:e}),(0,s.c)(r),e),e=>{throw(0,s.s)(h,{isError:!0,result:e}),(0,s.c)(r),e}),u)
return l&&(0,s.s)(h,l),h}static create(e){return new this(e)}}globalThis.setWarpDriveLogging=r.q,globalThis.getWarpDriveRuntimeConfig=r.P},6130:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>o,lcm:()=>s})
var r=n(336),i=n(828)
function s([e=0,t=0]){return 0===e||0===t?0:Math.abs(e*t)/(0,i.gcd)([e,t])}var o=(0,r.helper)(s)},6244:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{deleteDB:()=>m,openDB:()=>p,unwrap:()=>f,wrap:()=>d})
const r=(e,t)=>t.some(t=>e instanceof t)
let i,s
const o=new WeakMap,a=new WeakMap,c=new WeakMap,u=new WeakMap,l=new WeakMap
let h={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return a.get(e)
if("objectStoreNames"===t)return e.objectStoreNames||c.get(e)
if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return d(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}
function d(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(d(e.result)),r()},s=()=>{n(e.error),r()}
e.addEventListener("success",i),e.addEventListener("error",s)})
return t.then(t=>{t instanceof IDBCursor&&o.set(t,e)}).catch(()=>{}),l.set(t,e),t}(e)
if(u.has(e))return u.get(e)
const t=function(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(f(this),e),d(o.get(this))}:function(...e){return d(t.apply(f(this),e))}:function(e,...n){const r=t.call(f(this),e,...n)
return c.set(r,e.sort?e.sort():[e]),d(r)}:(e instanceof IDBTransaction&&function(e){if(a.has(e))return
const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()}
e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)})
a.set(e,t)}(e),r(e,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,h):e)
var t}(e)
return t!==e&&(u.set(e,t),l.set(t,e)),t}const f=e=>l.get(e)
function p(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=d(o)
return r&&o.addEventListener("upgradeneeded",e=>{r(d(o.result),e.oldVersion,e.newVersion,d(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}function m(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e)
return t&&n.addEventListener("blocked",e=>t(e.oldVersion,e)),d(n).then(()=>{})}const g=["get","getKey","getAll","getAllKeys","count"],y=["put","add","delete","clear"],v=new Map
function b(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return
if(v.get(t))return v.get(t)
const n=t.replace(/FromIndex$/,""),r=t!==n,i=y.includes(n)
if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!g.includes(n))return
const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly")
let o=s.store
return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]}
return v.set(t,s),s}var w
w=h,h={...w,get:(e,t,n)=>b(e,t)||w.get(e,t,n),has:(e,t)=>!!b(e,t)||w.has(e,t)}},6730:(e,t,n)=>{"use strict"
n.d(t,{Ay:()=>r.S,fV:()=>r.s,lL:()=>r.C,o:()=>r.r})
var r=n(89)
n(1603),n(3241)},6752:(e,t,n)=>{"use strict"
function r(e){return e.reduce((e,t)=>Number(e)-Number(t))}n.r(t),n.d(t,{default:()=>i,sub:()=>r})
var i=(0,n(336).helper)(r)},6825:(e,t,n)=>{"use strict"
function r([e]){return Math.tanh(e)}n.r(t),n.d(t,{default:()=>i,tanh:()=>r})
var i=(0,n(336).helper)(r)},6941:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>r.isEmpty})
var r=n(9553)},7166:(e,t,n)=>{"use strict"
function r([e,t]){return Math.atan2(e,t)}n.r(t),n.d(t,{atan2:()=>r,default:()=>i})
var i=(0,n(336).helper)(r)},7262:(e,t,n)=>{"use strict"
n.d(t,{f:()=>m,h:()=>y,j:()=>g})
const r={plurals:[[/$/,"s"],[/s$/i,"s"],[/^(ax|test)is$/i,"$1es"],[/(octop|vir)us$/i,"$1i"],[/(octop|vir)i$/i,"$1i"],[/(alias|status|bonus)$/i,"$1es"],[/(bu)s$/i,"$1ses"],[/(buffal|tomat)o$/i,"$1oes"],[/([ti])um$/i,"$1a"],[/([ti])a$/i,"$1a"],[/sis$/i,"ses"],[/(?:([^f])fe|([lr])f)$/i,"$1$2ves"],[/(hive)$/i,"$1s"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/(x|ch|ss|sh)$/i,"$1es"],[/(matr|vert|ind)(?:ix|ex)$/i,"$1ices"],[/^(m|l)ouse$/i,"$1ice"],[/^(m|l)ice$/i,"$1ice"],[/^(ox)$/i,"$1en"],[/^(oxen)$/i,"$1"],[/(quiz)$/i,"$1zes"]],singular:[[/s$/i,""],[/(ss)$/i,"$1"],[/(n)ews$/i,"$1ews"],[/([ti])a$/i,"$1um"],[/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(sis|ses)$/i,"$1sis"],[/(^analy)(sis|ses)$/i,"$1sis"],[/([^f])ves$/i,"$1fe"],[/(hive)s$/i,"$1"],[/(tive)s$/i,"$1"],[/([lr])ves$/i,"$1f"],[/([^aeiouy]|qu)ies$/i,"$1y"],[/(s)eries$/i,"$1eries"],[/(m)ovies$/i,"$1ovie"],[/(x|ch|ss|sh)es$/i,"$1"],[/^(m|l)ice$/i,"$1ouse"],[/(bus)(es)?$/i,"$1"],[/(o)es$/i,"$1"],[/(shoe)s$/i,"$1"],[/(cris|test)(is|es)$/i,"$1is"],[/^(a)x[ie]s$/i,"$1xis"],[/(octop|vir)(us|i)$/i,"$1us"],[/(alias|status|bonus)(es)?$/i,"$1"],[/^(ox)en/i,"$1"],[/(vert|ind)ices$/i,"$1ex"],[/(matr)ices$/i,"$1ix"],[/(quiz)zes$/i,"$1"],[/(database)s$/i,"$1"]],irregularPairs:[["person","people"],["man","men"],["child","children"],["sex","sexes"],["move","moves"],["cow","kine"],["zombie","zombies"]],uncountable:["equipment","information","rice","money","species","series","fish","sheep","jeans","police"]}
class i{constructor(e,t){this.size=t||1e4,this.state=new Map,this.doWork=e}get(e){const t=this.state.get(e)
if(t)return this.state.delete(e),this.state.set(e,t),t
const n=this.doWork(e)
return this.set(e,n),n}set(e,t){if(this.state.size===this.size)for(const[n]of this.state){this.state.delete(n)
break}this.state.set(e,t)}clear(){this.state.clear()}}const s=/[ _]/g,o=/([a-z\d])([A-Z])/g,a=new i(e=>e.replace(o,"$1_$2").toLowerCase().replace(s,"-")),c=/(\-|\_|\.|\s)+(.)?/g,u=/(^|\/)([A-Z])/g,l=(new i(e=>e.replace(c,(e,t,n)=>n?n.toUpperCase():"").replace(u,e=>e.toLowerCase())),/([a-z\d])([A-Z]+)/g),h=/\-|\s+/g,d=new i(e=>e.replace(l,"$1_$2").replace(h,"_").toLowerCase()),f=/(^|\/)([a-z\u00C0-\u024F])/g,p=new i(e=>e.replace(f,e=>e.toUpperCase()))
function m(e){return a.get(e)}function g(e){return d.get(e)}function y(e){return p.get(e)}const v=/^\s*$/,b=/([\w/-]+[_/\s-])([a-z\d]+$)/,w=/([\w/\s-]+)([A-Z][a-z\d]*$)/,_=/[A-Z][a-z\d]*$/,S=(new i(e=>function(e){return C(e,T,I)}(e)),new i(e=>function(e){return C(e,A,E)}(e)),new Set(r.uncountable)),E=new Map,I=new Map,T=new Map(r.singular.reverse()),A=new Map(r.plurals.reverse())
function C(e,t,n){if(!e||v.test(e))return e
const r=e.toLowerCase()
if(S.has(r))return e
const i=b.exec(e)||w.exec(e),s=i?i[2].toLowerCase():null
if(s&&S.has(s))return e
const o=_.test(e)
for(let[a,c]of n)if(r.match(a+"$"))return o&&s&&n.has(s)&&(c=y(c),a=y(a)),e.replace(new RegExp(a,"i"),c)
for(const[a,c]of t)if(a.test(e))return e.replace(a,c)
return e}r.irregularPairs.forEach(e=>{E.set(e[0].toLowerCase(),e[1]),E.set(e[1].toLowerCase(),e[1]),I.set(e[1].toLowerCase(),e[0]),I.set(e[0].toLowerCase(),e[0])})},7320:(e,t,n)=>{"use strict"
function r([e]){return Math.sin(e)}n.r(t),n.d(t,{default:()=>i,sin:()=>r})
var i=(0,n(336).helper)(r)},7343:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>M})
var r=n(2377),i=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],s=i.join(","),o="undefined"==typeof Element,a=o?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,c=!o&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},u=function(e,t,n){var r=Array.prototype.slice.apply(e.querySelectorAll(s))
return t&&a.call(e,s)&&r.unshift(e),r.filter(n)},l=function e(t,n,r){for(var i=[],o=Array.from(t);o.length;){var c=o.shift()
if("SLOT"===c.tagName){var u=c.assignedElements(),l=e(u.length?u:c.children,!0,r)
r.flatten?i.push.apply(i,l):i.push({scope:c,candidates:l})}else{a.call(c,s)&&r.filter(c)&&(n||!t.includes(c))&&i.push(c)
var h=c.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(c),d=!r.shadowRootFilter||r.shadowRootFilter(c)
if(h&&d){var f=e(!0===h?c.children:h.children,!0,r)
r.flatten?i.push.apply(i,f):i.push({scope:c,candidates:f})}else o.unshift.apply(o,c.children)}}return i},h=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},d=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},f=function(e){return"INPUT"===e.tagName},p=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height
return 0===n&&0===r},m=function(e,t){return!(t.disabled||function(e){return f(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,r=t.getShadowRoot
if("hidden"===getComputedStyle(e).visibility)return!0
var i=a.call(e,"details>summary:first-of-type")?e.parentElement:e
if(a.call(i,"details:not([open]) *"))return!0
var s=c(e).host,o=(null==s?void 0:s.ownerDocument.contains(s))||e.ownerDocument.contains(e)
if(n&&"full"!==n){if("non-zero-area"===n)return p(e)}else{if("function"==typeof r){for(var u=e;e;){var l=e.parentElement,h=c(e)
if(l&&!l.shadowRoot&&!0===r(l))return p(e)
e=e.assignedSlot?e.assignedSlot:l||h===e.ownerDocument?l:h.host}e=u}if(o)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some(function(e){return"SUMMARY"===e.tagName})}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n)
if("LEGEND"===r.tagName)return!!a.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},g=function(e,t){return!(function(e){return function(e){return f(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0
var t,n=e.form||c(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')}
if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name))
else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var i=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form)
return!i||i===e}(e)}(t)||h(t)<0||!m(e,t))},y=function(e){var t=parseInt(e.getAttribute("tabindex"),10)
return!!(isNaN(t)||t>=0)},v=function e(t){var n=[],r=[]
return t.forEach(function(t,i){var s=!!t.scope,o=s?t.scope:t,a=h(o,s),c=s?e(t.candidates):o
0===a?s?n.push.apply(n,c):n.push(o):r.push({documentOrder:i,tabIndex:a,item:t,isScope:s,content:c})}),r.sort(d).reduce(function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e},[]).concat(n)},b=function(e,t){var n
return n=(t=t||{}).getShadowRoot?l([e],t.includeContainer,{filter:g.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:y}):u(e,t.includeContainer,g.bind(null,t)),v(n)},w=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==a.call(e,s)&&g(t,e)},_=i.concat("iframe").join(","),S=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==a.call(e,_)&&m(t,e)}
function E(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?E(Object(n),!0).forEach(function(t){T(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A,C=(A=[],{activateTrap:function(e){if(A.length>0){var t=A[A.length-1]
t!==e&&t.pause()}var n=A.indexOf(e);-1===n||A.splice(n,1),A.push(e)},deactivateTrap:function(e){var t=A.indexOf(e);-1!==t&&A.splice(t,1),A.length>0&&A[A.length-1].unpause()}}),k=function(e){return setTimeout(e,0)},x=function(e,t){var n=-1
return e.every(function(e,r){return!t(e)||(n=r,!1)}),n},D=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return"function"==typeof e?e.apply(void 0,n):e},R=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},N=function(e,t){var n,r=(null==t?void 0:t.document)||document,i=I({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),s={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},o=function(e,t,n){return e&&void 0!==e[t]?e[t]:i[n||t]},a=function(e){return s.containerGroups.findIndex(function(t){var n=t.container,r=t.tabbableNodes
return n.contains(e)||r.find(function(t){return t===e})})},c=function(e){var t=i[e]
if("function"==typeof t){for(var n=arguments.length,s=new Array(n>1?n-1:0),o=1;o<n;o++)s[o-1]=arguments[o]
t=t.apply(void 0,s)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t
throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var a=t
if("string"==typeof t&&!(a=r.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"))
return a},h=function(){var e=c("initialFocus")
if(!1===e)return!1
if(void 0===e)if(a(r.activeElement)>=0)e=r.activeElement
else{var t=s.tabbableGroups[0]
e=t&&t.firstTabbableNode||c("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element")
return e},d=function(){if(s.containerGroups=s.containers.map(function(e){var t,n,r=b(e,i.tabbableOptions),s=(t=e,(n=(n=i.tabbableOptions)||{}).getShadowRoot?l([t],n.includeContainer,{filter:m.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):u(t,n.includeContainer,m.bind(null,n)))
return{container:e,tabbableNodes:r,focusableNodes:s,firstTabbableNode:r.length>0?r[0]:null,lastTabbableNode:r.length>0?r[r.length-1]:null,nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=s.findIndex(function(t){return t===e})
if(!(n<0))return t?s.slice(n+1).find(function(e){return w(e,i.tabbableOptions)}):s.slice(0,n).reverse().find(function(e){return w(e,i.tabbableOptions)})}}}),s.tabbableGroups=s.containerGroups.filter(function(e){return e.tabbableNodes.length>0}),s.tabbableGroups.length<=0&&!c("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},f=function e(t){!1!==t&&t!==r.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!i.preventScroll}),s.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(h()))},p=function(e){var t=c("setReturnFocus",e)
return t||!1!==t&&e},g=function(e){var t=R(e)
a(t)>=0||(D(i.clickOutsideDeactivates,e)?n.deactivate({returnFocus:i.returnFocusOnDeactivate&&!S(t,i.tabbableOptions)}):D(i.allowOutsideClick,e)||e.preventDefault())},y=function(e){var t=R(e),n=a(t)>=0
n||t instanceof Document?n&&(s.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),f(s.mostRecentlyFocusedNode||h()))},v=function(e){if(function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&!1!==D(i.escapeDeactivates,e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){var t=R(e)
d()
var n=null
if(s.tabbableGroups.length>0){var r=a(t),o=r>=0?s.containerGroups[r]:void 0
if(r<0)n=e.shiftKey?s.tabbableGroups[s.tabbableGroups.length-1].lastTabbableNode:s.tabbableGroups[0].firstTabbableNode
else if(e.shiftKey){var u=x(s.tabbableGroups,function(e){var n=e.firstTabbableNode
return t===n})
if(u<0&&(o.container===t||S(t,i.tabbableOptions)&&!w(t,i.tabbableOptions)&&!o.nextTabbableNode(t,!1))&&(u=r),u>=0){var l=0===u?s.tabbableGroups.length-1:u-1
n=s.tabbableGroups[l].lastTabbableNode}}else{var h=x(s.tabbableGroups,function(e){var n=e.lastTabbableNode
return t===n})
if(h<0&&(o.container===t||S(t,i.tabbableOptions)&&!w(t,i.tabbableOptions)&&!o.nextTabbableNode(t))&&(h=r),h>=0){var p=h===s.tabbableGroups.length-1?0:h+1
n=s.tabbableGroups[p].firstTabbableNode}}}else n=c("fallbackFocus")
n&&(e.preventDefault(),f(n))}(e)},_=function(e){var t=R(e)
a(t)>=0||D(i.clickOutsideDeactivates,e)||D(i.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},E=function(){if(s.active)return C.activateTrap(n),s.delayInitialFocusTimer=i.delayInitialFocus?k(function(){f(h())}):f(h()),r.addEventListener("focusin",y,!0),r.addEventListener("mousedown",g,{capture:!0,passive:!1}),r.addEventListener("touchstart",g,{capture:!0,passive:!1}),r.addEventListener("click",_,{capture:!0,passive:!1}),r.addEventListener("keydown",v,{capture:!0,passive:!1}),n},T=function(){if(s.active)return r.removeEventListener("focusin",y,!0),r.removeEventListener("mousedown",g,!0),r.removeEventListener("touchstart",g,!0),r.removeEventListener("click",_,!0),r.removeEventListener("keydown",v,!0),n}
return(n={get active(){return s.active},get paused(){return s.paused},activate:function(e){if(s.active)return this
var t=o(e,"onActivate"),n=o(e,"onPostActivate"),i=o(e,"checkCanFocusTrap")
i||d(),s.active=!0,s.paused=!1,s.nodeFocusedBeforeActivation=r.activeElement,t&&t()
var a=function(){i&&d(),E(),n&&n()}
return i?(i(s.containers.concat()).then(a,a),this):(a(),this)},deactivate:function(e){if(!s.active)return this
var t=I({onDeactivate:i.onDeactivate,onPostDeactivate:i.onPostDeactivate,checkCanReturnFocus:i.checkCanReturnFocus},e)
clearTimeout(s.delayInitialFocusTimer),s.delayInitialFocusTimer=void 0,T(),s.active=!1,s.paused=!1,C.deactivateTrap(n)
var r=o(t,"onDeactivate"),a=o(t,"onPostDeactivate"),c=o(t,"checkCanReturnFocus"),u=o(t,"returnFocus","returnFocusOnDeactivate")
r&&r()
var l=function(){k(function(){u&&f(p(s.nodeFocusedBeforeActivation)),a&&a()})}
return u&&c?(c(p(s.nodeFocusedBeforeActivation)).then(l,l),this):(l(),this)},pause:function(){return s.paused||!s.active||(s.paused=!0,T()),this},unpause:function(){return s.paused&&s.active?(s.paused=!1,d(),E(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean)
return s.containers=t.map(function(e){return"string"==typeof e?r.querySelector(e):e}),s.active&&d(),this}}).updateContainerElements(e),n}
let O
try{O=(0,r.capabilities)("3.22")}catch{O=(0,r.capabilities)("3.13")}var M=(0,r.setModifierManager)(()=>({capabilities:O,createModifier:()=>({focusTrapOptions:void 0,isActive:!0,isPaused:!1,shouldSelfFocus:!1,focusTrap:void 0}),installModifier(e,t,{named:{isActive:n,isPaused:r,shouldSelfFocus:i,focusTrapOptions:s,additionalElements:o,_createFocusTrap:a}}){e.focusTrapOptions={...s}||{},void 0!==n&&(e.isActive=n),void 0!==r&&(e.isPaused=r),e.focusTrapOptions&&void 0===e.focusTrapOptions.initialFocus&&i&&(e.focusTrapOptions.initialFocus=t)
let c=N
a&&(c=a),!1!==e.focusTrapOptions.returnFocusOnDeactivate&&(e.focusTrapOptions.returnFocusOnDeactivate=!0),e.focusTrap=c(void 0!==o?[t,...o]:t,e.focusTrapOptions),e.isActive&&e.focusTrap.activate(),e.isPaused&&e.focusTrap.pause()},updateModifier(e,{named:t}){const n=t.focusTrapOptions||{}
if(e.isActive&&!t.isActive){const{returnFocusOnDeactivate:t}=n,r=void 0===t
e.focusTrap.deactivate({returnFocus:r})}else!e.isActive&&t.isActive&&e.focusTrap.activate()
e.isPaused&&!t.isPaused?e.focusTrap.unpause():!e.isPaused&&t.isPaused&&e.focusTrap.pause(),e.focusTrapOptions=n,void 0!==t.isActive&&(e.isActive=t.isActive),void 0!==t.isPaused&&(e.isPaused=t.isPaused)},destroyModifier({focusTrap:e}){e.deactivate()}}),class{})},7375:(e,t,n)=>{"use strict"
n.d(t,{L1:()=>c,Yj:()=>u,dN:()=>d,dV:()=>l,ml:()=>f,vs:()=>h})
const r="@warp-drive/core-types",i=globalThis,s=i.__warpDrive_universalCache=i.__warpDrive_universalCache??{}
i[r]=i[r]??{__version:"0.0.3"}
const o=i[r],a=o.__warpDrive_ModuleScopedCaches??{}
if(o.__warpDrive_hasOtherCopy)throw new Error("Multiple copies of EmberData detected, the application will malfunction.")
function c(e,t){return t}function u(e){return a[`(transient) ${e}`]??null}function l(e,t){return a[`(transient) ${e}`]=t}function h(e,t){return t}function d(e){return s[`(transient) ${e}`]??null}function f(e,t){return s[`(transient) ${e}`]=t}o.__warpDrive_hasOtherCopy=!0},7388:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>g})
var r=n(1389),i=n(1806),s=n.n(i),o=n(123),a=n(2735),c=n(3241),u=n(6730)
const l=new WeakMap,h=a.service??a.inject,d=new WeakMap
function f(){const e={},t=[],n=(0,u.o)(this),r=this.store.schema.fields(n),i={name:"Attributes",properties:["id"],expand:!0},s=i.properties,o=[i]
for(const a of r.values())switch(a.kind){case"attribute":s.push(a.name)
break
case"belongsTo":case"hasMany":{let n=e[a.kind]
void 0===n&&(n=e[a.kind]=[],o.push({name:a.kind,properties:n,expand:!0})),n.push(a.name),t.push(a.name)
break}}return o.push({name:"Flags",properties:["isLoaded","hasDirtyAttributes","isSaving","isDeleted","isError","isNew","isValid"],expand:!1}),{propertyInfo:{includeOtherProperties:!0,groups:o,expensiveProperties:t}}}var p=new WeakMap
class m extends(s()){constructor(...e){var t,n
super(...e),t=p,n=void function(e,t){let n=function(e,t){var n
let r=e.prototype
for(;r;){let e=null==(n=l.get(r))?void 0:n.get(t)
if(e)return e
r=r.prototype}}(e.constructor,t)
n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(e):void 0})}(this,"store"),function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(this,t),t.set(this,n)}getFilters(){return[{name:"isNew",desc:"New"},{name:"isModified",desc:"Modified"},{name:"isClean",desc:"Clean"}]}_nameToClass(e){return this.store.modelFor(e)}watchModelTypes(e,t){const{store:n}=this,r=function(e){let t=d.get(e)
return void 0===t&&(t=new Map,d.set(e,t)),t}(n),i=n.notifications.subscribe("resource",(i,o)=>{"added"===o&&this.watchTypeIfUnseen(n,r,i.type,e,t,s)}),s=[()=>{n.notifications.unsubscribe(i)}]
Object.keys(n.identifierCache._cache.resourcesByType).forEach(e=>{r.set(e,!1)}),r.forEach((i,o)=>{this.watchTypeIfUnseen(n,r,o,e,t,s)})
const o=()=>{s.forEach(e=>e()),r.forEach((e,t)=>{r.set(t,!1)}),this.releaseMethods.removeObject(o)}
return this.releaseMethods.pushObject(o),o}watchTypeIfUnseen(e,t,n,r,i,s){if(!0!==t.get(n)){const o=e.modelFor(n)
o.prototype._debugInfo=f
const a=this.wrapModelType(o,n)
s.push(this.observeModelType(n,i)),r([a]),t.set(n,!0)}}columnNameToDesc(e){return(0,c.ZH)((0,c.z9)(e).replace(/_/g," ").trim())}columnsForType(e){const t=[{name:"id",desc:"Id"}]
let n=0
return e.attributes.forEach((e,r)=>{if(n++>this.attributeLimit)return!1
const i=this.columnNameToDesc(r)
t.push({name:r,desc:i})}),t}getRecords(e,t){if(arguments.length<2){const n=e._debugContainerKey
if(n){const e=n.match(/model:(.*)/)
null!==e&&(t=e[1])}}return this.store.peekAll(t)}getRecordColumnValues(e){let t=0
const n={id:e.id}
return e.eachAttribute(r=>{if(t++>this.attributeLimit)return!1
n[r]=e[r]}),n}getRecordKeywords(e){const t=[e.id]
return e.eachAttribute(n=>{t.push(e[n])}),(0,r.A)(t)}getRecordFilterValues(e){return{isNew:e.isNew,isModified:e.hasDirtyAttributes&&!e.isNew,isClean:!e.hasDirtyAttributes}}getRecordColor(e){let t="black"
return e.isNew?t="green":e.hasDirtyAttributes&&(t="blue"),t}observeRecord(e,t){const n=[],r=["id","isNew","hasDirtyAttributes"]
return e.eachAttribute(e=>r.push(e)),r.forEach(r=>{const i=()=>{t(this.wrapRecord(e))};(0,o.addObserver)(e,r,i),n.push(function(){(0,o.removeObserver)(e,r,i)})}),function(){n.forEach(e=>e())}}}!function(e,t,n){let r={configurable:!0,enumerable:!0,writable:!0,initializer:null}
for(let i of n)r=i(e,t,r)||r
void 0===r.initializer?Object.defineProperty(e,t,r):function(e,t,n){let r=l.get(e)
r||(r=new Map,l.set(e,r)),r.set(t,n)}(e,t,r)}(m.prototype,"store",[h("store")])
const g=m},7648:(e,t,n)=>{"use strict"
n.d(t,{ER:()=>i,J6:()=>o,_q:()=>s,k0:()=>a})
var r=n(7375)
const i=(0,r.vs)("SkipCache",Symbol.for("wd:skip-cache")),s=(0,r.vs)("EnableHydration",Symbol.for("wd:enable-hydration")),o=(0,r.L1)("IS_FUTURE",Symbol("IS_FUTURE")),a=(0,r.L1)("DOC",Symbol("DOC"))},7703:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>at})
var r=n(151),i=n(1274)
function s(e){return e instanceof Error}n(8604),new Map
const o={iterator:()=>({next:()=>({done:!0,value:void 0})})}
class a{constructor(e){this.version="2",this._capabilities=e,this.__cache=new Map,this.__graph=(0,r.graphFor)(e),this.__destroyedCache=new Map,this.__documents=new Map}put(e){if(s(e))return this._putDocument(e,void 0,void 0)
if(function(e){return!(e instanceof Error)&&e.content&&!("data"in e.content)&&!("included"in e.content)&&"meta"in e.content}(e))return this._putDocument(e,void 0,void 0)
const t=e.content,n=t.included
let r,i
const{identifierCache:o}=this._capabilities
if(n)for(r=0,i=n.length;r<i;r++)n[r]=w(this,o,n[r])
if(Array.isArray(t.data)){i=t.data.length
const s=[]
for(r=0;r<i;r++)s.push(w(this,o,t.data[r]))
return this._putDocument(e,s,n)}if(null===t.data)return this._putDocument(e,null,n)
const a=w(this,o,t.data)
return this._putDocument(e,a,n)}_putDocument(e,t,n){const r=s(e)?function(e){const t={}
return e.content&&(S(t,e.content),"errors"in e.content?t.errors=e.content.errors:"object"==typeof e.error&&"errors"in e.error?t.errors=e.error.errors:t.errors=[{title:e.message}]),t}(e):function(e){const t={},n=e.content
return n&&S(t,n),t}(e)
void 0!==t&&(r.data=t),void 0!==n&&(r.included=n)
const i=e.request,o=i?this._capabilities.identifierCache.getOrCreateDocumentIdentifier(i):null
if(o){r.lid=o.lid,e.content=r
const t=this.__documents.has(o.lid)
this.__documents.set(o.lid,e),this._capabilities.notifyChange(o,t?"updated":"added",null)}if("findHasMany"===e.request?.op){const t=e.request.options?.identifier,n=e.request.options?.field
n&&t&&this.__graph.push({op:"updateRelationship",record:t,field:n.name,value:r})}return r}patch(e){Array.isArray(e)?(this._capabilities,this._capabilities._store._join(()=>{for(const t of e)I(this,t)})):I(this,e)}mutate(e){this.__graph.update(e,!1)}peek(e){if("type"in e){const t=this.__safePeek(e,!1)
if(!t)return null
const{type:n,id:r,lid:i}=e,s=Object.assign({},t.remoteAttrs,t.inflightAttrs,t.localAttrs),o={},a=this.__graph.identifiers.get(e)
a&&Object.keys(a).forEach(t=>{a[t].definition.isImplicit||(o[t]=this.__graph.getData(e,t))}),this._capabilities
const c=this._capabilities._store
return this._capabilities.schema.fields(e).forEach((t,n)=>{if("alias"===t.kind)return
if(n in s&&void 0!==s[n])return
const r=d(t,e,c)
void 0!==r&&(s[n]=r)}),{type:n,id:r,lid:i,attributes:s,relationships:o}}const t=this.peekRequest(e)
return t&&"content"in t?t.content:null}peekRemoteState(e){if("type"in e){const t=this.__safePeek(e,!1)
if(!t)return null
const{type:n,id:r,lid:i}=e,s=Object.assign({},t.remoteAttrs),o={},a=this.__graph.identifiers.get(e)
a&&Object.keys(a).forEach(t=>{a[t].definition.isImplicit||(o[t]=this.__graph.getData(e,t))}),this._capabilities
const c=this._capabilities._store
return this._capabilities.schema.fields(e).forEach((t,n)=>{if(n in s&&void 0!==s[n])return
const r=d(t,e,c)
void 0!==r&&(s[n]=r)}),{type:n,id:r,lid:i,attributes:s,relationships:o}}const t=this.peekRequest(e)
return t&&"content"in t?t.content:null}peekRequest(e){return this.__documents.get(e.lid)||null}upsert(e,t,n){this._capabilities
const r=this._capabilities._store
if(!r._cbs){let i
return r._run(()=>{i=E(this,e,t,n)}),i}return E(this,e,t,n)}fork(){throw new Error("Not Implemented")}merge(e){throw new Error("Not Implemented")}diff(){throw new Error("Not Implemented")}dump(){throw new Error("Not Implemented")}hydrate(e){throw new Error("Not Implemented")}clientDidCreate(e,t){this._createCache(e).isNew=!0
const n={}
if(void 0!==t){const r=this._capabilities.schema.fields(e),i=this.__graph,s=Object.keys(t)
for(let o=0;o<s.length;o++){const a=s[o],c=t[a]
if("id"===a)continue
const u=r.get(a)
let l
switch(void 0!==u?"kind"in u?u.kind:"attribute":null){case"attribute":this.setAttr(e,a,c),n[a]=c
break
case"belongsTo":this.mutate({op:"replaceRelatedRecord",field:a,record:e,value:c}),l=i.get(e,a),l.state.hasReceivedData=!0,l.state.isEmpty=!1
break
case"hasMany":this.mutate({op:"replaceRelatedRecords",field:a,record:e,value:c}),l=i.get(e,a),l.state.hasReceivedData=!0,l.state.isEmpty=!1
break
default:n[a]=c}}}return this._capabilities.notifyChange(e,"added",null),n}willCommit(e){const t=this.__peek(e,!1)
t.inflightAttrs?t.localAttrs&&Object.assign(t.inflightAttrs,t.localAttrs):t.inflightAttrs=t.localAttrs,t.localAttrs=null}didCommit(e,t){const n=t.content,r=t.request.op,i=n&&n.data,{identifierCache:s}=this._capabilities,o=e.id,a="deleteRecord"!==r&&i?s.updateRecordIdentifier(e,i):e,c=this.__peek(a,!1)
c.isDeleted&&(this.__graph.push({op:"deleteRecord",record:a,isNew:!1}),c.isDeletionCommitted=!0,this._capabilities.notifyChange(a,"removed",null))
const u=this._capabilities.schema.fields(a)
let l
c.isNew=!1,i&&(i.id&&!c.id&&(c.id=i.id),a===e&&a.id!==o&&this._capabilities.notifyChange(a,"identity",null),i.relationships&&y(this.__graph,u,a,i),l=i.attributes)
const h=l&&p(c,l,u)
c.remoteAttrs=Object.assign(c.remoteAttrs||Object.create(null),c.inflightAttrs,l),c.inflightAttrs=null,b(c,h),c.errors&&(c.errors=null,this._capabilities.notifyChange(a,"errors",null)),h?.size&&f(this._capabilities,a,h),this._capabilities.notifyChange(a,"state",null)
const d=n&&n.included
if(d)for(let f=0,p=d.length;f<p;f++)w(this,s,d[f])
return{data:a}}commitWasRejected(e,t){const n=this.__peek(e,!1)
if(n.inflightAttrs){const e=Object.keys(n.inflightAttrs)
if(e.length>0){const t=n.localAttrs=n.localAttrs||Object.create(null)
for(let r=0;r<e.length;r++)void 0===t[e[r]]&&(t[e[r]]=n.inflightAttrs[e[r]])}n.inflightAttrs=null}t&&(n.errors=t),this._capabilities.notifyChange(e,"errors",null)}unloadRecord(e){const t=this._capabilities
if(!this.__cache.has(e))return void(0,r.peekGraph)(t)?.unload(e)
const n=!this.isDeletionCommitted(e)
let i=!1
const s=this.__peek(e,!1)
s.isNew||s.isDeletionCommitted?(0,r.peekGraph)(t)?.push({op:"deleteRecord",record:e,isNew:s.isNew}):(0,r.peekGraph)(t)?.unload(e),s.localAttrs=null,s.remoteAttrs=null,s.defaultAttrs=null,s.inflightAttrs=null
const o=function(e,t){const n=[],r=[],i=new Set
for(r.push(t);r.length>0;){const s=r.shift()
n.push(s),i.add(s)
const o=_(e,t).iterator()
for(let e=o.next();!e.done;e=o.next()){const t=e.value
t&&!i.has(t)&&(i.add(t),r.push(t))}}return n}(t,e)
if(function(e,t){for(let n=0;n<t.length;++n){const r=t[n]
if(e.hasRecord(r))return!1}return!0}(t,o))for(let r=0;r<o.length;++r){const e=o[r]
t.notifyChange(e,"removed",null),i=!0,t.disconnectRecord(e)}this.__cache.delete(e),this.__destroyedCache.set(e,s),1===this.__destroyedCache.size&&setTimeout(()=>{this.__destroyedCache.clear()},100),!i&&n&&t.notifyChange(e,"removed",null)}getAttr(e,t){const n=!Array.isArray(t)||1===t.length
if(Array.isArray(t)&&1===t.length&&(t=t[0]),n){const n=t,r=this.__peek(e,!0)
if(!r)return
if(r.localAttrs&&n in r.localAttrs)return r.localAttrs[n]
if(r.inflightAttrs&&n in r.inflightAttrs)return r.inflightAttrs[n]
if(r.remoteAttrs&&n in r.remoteAttrs)return r.remoteAttrs[n]
if(r.defaultAttrs&&n in r.defaultAttrs)return r.defaultAttrs[n]
{const t=this._capabilities.schema.fields(e).get(n)
this._capabilities
const i=d(t,e,this._capabilities._store)
return l(t)&&(r.defaultAttrs=r.defaultAttrs||Object.create(null),r.defaultAttrs[n]=i),i}}const r=t,i=this.__peek(e,!0),s=r[0]
let o=i.localAttrs&&s in i.localAttrs?i.localAttrs[s]:void 0
if(void 0===o&&(o=i.inflightAttrs&&s in i.inflightAttrs?i.inflightAttrs[s]:void 0),void 0===o&&(o=i.remoteAttrs&&s in i.remoteAttrs?i.remoteAttrs[s]:void 0),void 0!==o){for(let e=1;e<r.length;e++)if(o=o[r[e]],void 0===o)return
return o}}getRemoteAttr(e,t){const n=!Array.isArray(t)||1===t.length
if(Array.isArray(t)&&1===t.length&&(t=t[0]),n){const n=t,r=this.__peek(e,!0)
if(!r)return
if(r.remoteAttrs&&n in r.remoteAttrs)return r.remoteAttrs[n]
if(r.defaultAttrs&&n in r.defaultAttrs)return r.defaultAttrs[n]
{const t=this._capabilities.schema.fields(e).get(n)
this._capabilities
const i=d(t,e,this._capabilities._store)
return l(t)&&(r.defaultAttrs=r.defaultAttrs||Object.create(null),r.defaultAttrs[n]=i),i}}const r=t,i=this.__peek(e,!0),s=r[0]
let o=i.remoteAttrs&&s in i.remoteAttrs?i.remoteAttrs[s]:void 0
if(void 0!==o){for(let e=1;e<r.length;e++)if(o=o[r[e]],void 0===o)return
return o}}setAttr(e,t,n){const r=!Array.isArray(t)||1===t.length
if(Array.isArray(t)&&1===t.length&&(t=t[0]),r){const r=this.__peek(e,!1),i=t,s=r.inflightAttrs&&i in r.inflightAttrs?r.inflightAttrs[i]:r.remoteAttrs&&i in r.remoteAttrs?r.remoteAttrs[i]:void 0
return s!==n?(r.localAttrs=r.localAttrs||Object.create(null),r.localAttrs[i]=n,r.changes=r.changes||Object.create(null),r.changes[i]=[s,n]):r.localAttrs&&(delete r.localAttrs[i],delete r.changes[i]),r.defaultAttrs&&i in r.defaultAttrs&&delete r.defaultAttrs[i],void this._capabilities.notifyChange(e,"attributes",i)}const i=t,s=this.__peek(e,!1),o=i[0],a=s.inflightAttrs&&o in s.inflightAttrs?s.inflightAttrs[o]:s.remoteAttrs&&o in s.remoteAttrs?s.remoteAttrs[o]:void 0
let c
if(a){c=a[i[1]]
for(let e=2;e<i.length;e++)c=c[i[e]]}if(c!==n){s.localAttrs=s.localAttrs||Object.create(null),s.localAttrs[o]=s.localAttrs[o]||structuredClone(a),s.changes=s.changes||Object.create(null)
let e=s.localAttrs[o],t=1
for(;t<i.length-1;)e=e[i[t++]]
e[i[t]]=n,s.changes[o]=[a,s.localAttrs[o]]}else if(s.localAttrs)try{if(!a)return
JSON.stringify(a)!==JSON.stringify(s.localAttrs[o])&&(delete s.localAttrs[o],delete s.changes[o])}catch{}this._capabilities.notifyChange(e,"attributes",o)}changedAttrs(e){const t=this.__peek(e,!1)
return t&&t.changes||Object.create(null)}hasChangedAttrs(e){const t=this.__peek(e,!0)
return!!t&&(null!==t.inflightAttrs&&Object.keys(t.inflightAttrs).length>0||null!==t.localAttrs&&Object.keys(t.localAttrs).length>0)}rollbackAttrs(e){const t=this.__peek(e,!1)
let n
return t.isDeleted=!1,null!==t.localAttrs&&(n=Object.keys(t.localAttrs),t.localAttrs=null,t.changes=null),t.isNew&&(t.isDeletionCommitted=!0,t.isDeleted=!0,t.isNew=!1),t.inflightAttrs=null,t.defaultAttrs=null,t.errors&&(t.errors=null,this._capabilities.notifyChange(e,"errors",null)),this._capabilities.notifyChange(e,"state",null),n&&n.length&&f(this._capabilities,e,new Set(n)),n||[]}changedRelationships(e){return this.__graph.getChanged(e)}hasChangedRelationships(e){return this.__graph.hasChanged(e)}rollbackRelationships(e){let t
return this._capabilities,this._capabilities._store._join(()=>{t=this.__graph.rollback(e)}),t}getRelationship(e,t){return this.__graph.getData(e,t)}getRemoteRelationship(e,t){return this.__graph.getRemoteData(e,t)}setIsDeleted(e,t){this.__peek(e,!1).isDeleted=t,this._capabilities.notifyChange(e,"state",null)}getErrors(e){return this.__peek(e,!0).errors||[]}isEmpty(e){const t=this.__safePeek(e,!0)
return!t||null===t.remoteAttrs&&null===t.inflightAttrs&&null===t.localAttrs}isNew(e){return this.__safePeek(e,!0)?.isNew||!1}isDeleted(e){return this.__safePeek(e,!0)?.isDeleted||!1}isDeletionCommitted(e){return this.__safePeek(e,!0)?.isDeletionCommitted||!1}_createCache(e){const t={id:null,remoteAttrs:null,localAttrs:null,defaultAttrs:null,inflightAttrs:null,changes:null,errors:null,isNew:!1,isDeleted:!1,isDeletionCommitted:!1}
return this.__cache.set(e,t),t}__safePeek(e,t){let n=this.__cache.get(e)
return!n&&t&&(n=this.__destroyedCache.get(e)),n}__peek(e,t){return this.__safePeek(e,t)}}function c(e){return(0,r.isBelongsTo)(e)?e.localState?[e.localState]:[]:e.additions?[...e.additions]:[]}function u(e){return(0,r.isBelongsTo)(e)?e.remoteState?[e.remoteState]:[]:e.remoteState}function l(e){return!!e&&h(e.options)}function h(e){return!!e&&"function"==typeof e.defaultValue}function d(e,t,n){const r=e?.options
if(e&&(r||e.type)&&("attribute"===e.kind||"field"===e.kind)){if(h(r))return r.defaultValue()
if(r&&"defaultValue"in r)return r.defaultValue
if("attribute"!==e.kind&&e.type){const i=n.schema.transformation(e)
if(i?.defaultValue)return i.defaultValue(r||null,t)}}}function f(e,t,n){if(n)for(const r of n)e.notifyChange(t,"attributes",r)
else e.notifyChange(t,"attributes",null)}function p(e,t,n){const r=new Set,i=Object.keys(t),s=i.length,o=e.localAttrs,a=Object.assign(Object.create(null),e.remoteAttrs,e.inflightAttrs)
for(let c=0;c<s;c++){const e=i[c]
if(!n.has(e))continue
const s=t[e]
o&&void 0!==o[e]||a[e]!==s&&r.add(e)}return r}function m(e){return!e||null===e.remoteAttrs&&null===e.inflightAttrs&&null===e.localAttrs}function g(e,t=!1){if(!e)return!1
const n=e.isNew,r=m(e)
return n?!e.isDeleted:!(t&&e.isDeletionCommitted||r)}function y(e,t,n,r){for(const i in r.relationships){const s=r.relationships[i],o=t.get(i)
s&&o&&v(o)&&e.push({op:"updateRelationship",record:n,field:i,value:s})}}function v(e){const{kind:t}=e
return"hasMany"===t||"belongsTo"===t||"resource"===t||"collection"===t}function b(e,t){const{localAttrs:n,remoteAttrs:r,inflightAttrs:i,defaultAttrs:s,changes:o}=e
if(!n)return e.changes=null,!1
let a=!1
const c=Object.keys(n)
for(let u=0,l=c.length;u<l;u++){const e=c[u];(i&&e in i?i[e]:r&&e in r?r[e]:void 0)===n[e]&&(a=!0,t?.delete(e),delete n[e],delete o[e]),s&&e in s&&delete s[e]}return a}function w(e,t,n){let r=t.peekRecordIdentifier(n)
return r=r?t.updateRecordIdentifier(r,n):t.getOrCreateRecordIdentifier(n),e.upsert(r,n,e._capabilities.hasRecord(r)),r}function _(e,t){const n=(0,r.peekGraph)(e),i=n?.identifiers.get(t)
if(!i)return o
const s=[]
Object.keys(i).forEach(e=>{const t=i[e]
t&&!t.definition.isImplicit&&s.push(t)})
let a=0,l=0,h=0
return{iterator:()=>({next:()=>{const e=(()=>{for(;a<s.length;){for(;l<2;){const e=0===l?c(s[a]):u(s[a])
for(;h<e.length;){const t=e[h++]
if(null!==t)return t}h=0,l++}l=0,a++}})()
return{value:e,done:void 0===e}}})}}function S(e,t){"links"in t&&(e.links=t.links),"meta"in t&&(e.meta=t.meta)}function E(e,t,n,r){let i
const s=e.__safePeek(t,!1),o=!!s,a=s||e._createCache(t),c=function(e,t,n){const r=t._store.getRequestStateService()
return!g(e)&&r.getPendingRequestsForRecord(n).some(e=>"query"===e.type)}(s,e._capabilities,t)||!g(s),u=!function(e){if(!e)return!0
const t=e.isNew,n=e.isDeleted,r=m(e)
return(!t||n)&&r}(s)&&!c
a.isNew&&(a.isNew=!1,e._capabilities.notifyChange(t,"identity",null),e._capabilities.notifyChange(t,"state",null))
const l=e._capabilities.schema.fields(t)
return r&&o&&n.attributes&&(i=p(a,n.attributes,l)),a.remoteAttrs=Object.assign(a.remoteAttrs||Object.create(null),n.attributes),a.localAttrs&&b(a,i)&&e._capabilities.notifyChange(t,"state",null),u||e._capabilities.notifyChange(t,"added",null),n.id&&(a.id=n.id),n.relationships&&y(e.__graph,l,t,n),i?.size&&f(e._capabilities,t,i),i?.size?Array.from(i):void 0}function I(e,t){const n=(0,i.xm)(t.record)
switch(!n&&(0,i.R3)(t.record),t.op){case"mergeIdentifiers":{const n=e.__cache.get(t.record)
n&&(e.__cache.set(t.value,n),e.__cache.delete(t.record)),e.__graph.update(t,!0)
break}case"update":n&&("field"in t?v(e._capabilities.schema.fields(t.record).get(t.field))?e.__graph.push(t):e.upsert(t.record,{type:t.record.type,id:t.record.id,attributes:{[t.field]:t.value}},e._capabilities.hasRecord(t.record)):e.upsert(t.record,t.value,e._capabilities.hasRecord(t.record)))
break
case"add":n?"field"in t?e.__graph.push(t):e.upsert(t.record,t.value,e._capabilities.hasRecord(t.record)):function(e,t){const n=e.__documents.get(t.record.lid),{content:r}=n
if("data"===t.field){let n=!1
return Array.isArray(r.data)?Array.isArray(t.value)?void 0!==t.index?(n=!0,r.data.splice(t.index,0,...t.value)):(n=!0,r.data.push(...t.value)):void 0!==t.index?(n=!0,r.data.splice(t.index,0,t.value)):(n=!0,r.data.push(t.value)):(n=r.data!==t.value,n&&(r.data=t.value)),void(n&&e._capabilities.notifyChange(t.record,"updated",null))}r.included=r.included||[],Array.isArray(t.value)?r.included=r.included.concat(t.value):r.included.push(t.value)}(e,t)
break
case"remove":if(n)if("field"in t)e.__graph.push(t)
else{const n=e.__safePeek(t.record,!1)
n?(n.isDeleted=!0,n.isDeletionCommitted=!0,e.unloadRecord(t.record)):(0,r.peekGraph)(e._capabilities)?.push({op:"deleteRecord",record:t.record,isNew:!1})}else"field"in t&&function(e,t){const n=e.__documents.get(t.record.lid),{content:r}=n
if("data"===t.field){let n=!1
if(Array.isArray(r.data)){const e=Array.isArray(t.value)?t.value:[t.value]
for(let i=0;i<e.length;i++){const s=e[i]
if(void 0!==t.index){const e=t.index<r.data.length&&r.data[t.index]===s?t.index:r.data.indexOf(s);-1!==e&&(n=!0,r.data.splice(e,1))}else{const e=r.data.indexOf(s);-1!==e&&(n=!0,r.data.splice(e,1))}}}else n=r.data===t.value,n&&(r.data=null)
n&&e._capabilities.notifyChange(t.record,"updated",null)}else{r.included=r.included||[]
const e=Array.isArray(t.value)?t.value:[t.value]
for(const t of e){const e=r.included.indexOf(t);-1!==e&&r.included.splice(e,1)}}}(e,t)}}var T=n(2294),A=n(6730),C=n(7910)
function k(e,t,n,r){const i=t.data?(0,C.i)(t.data,(t,i)=>{const{id:s,type:o}=t
return function(e,t,n,r){const{id:i,type:s}=e
e.relationships||(e.relationships={})
const{relationships:o}=e,a=function(e,t,n,r){const{name:i}=n,{type:s}=t,o=function(e,t,n){const r=e.schema.fields(t).get(n)
return r?r.options.inverse:null}(e,{type:s},i)
if(o)return{inverseKey:o,kind:e.schema.fields({type:r}).get(o).kind}}(n,t,r,s)
if(a){const{inverseKey:e,kind:n}=a,r=o[e]?.data
"hasMany"===n&&void 0===r||(o[e]=o[e]||{},o[e].data=function(e,t,{id:n,type:r}){const i={id:n,type:r}
let s=null
if("hasMany"===t){const t=e||[]
e&&e.find(e=>e.type===i.type&&e.id===i.id)||t.push(i),s=t}else{const t=e||{}
Object.assign(t,i),s=t}return s}(r??null,n,t))}}(t,n,e,r),{id:s,type:o}}):null,s={}
"meta"in t&&(s.meta=t.meta),"links"in t&&(s.links=t.links),"data"in t&&(s.data=i)
const o={id:n.id,type:n.type,relationships:{[r.name]:s}}
return Array.isArray(t.included)||(t.included=[]),t.included.push(o),t}const x=new Set(["findRecord","findAll","query","queryRecord","findBelongsTo","findHasMany","updateRecord","createRecord","deleteRecord"]),D={request(e,t){if(e.request.url||!e.request.op||!x.has(e.request.op))return t(e.request)
const{store:n}=e.request
switch(n._fetchManager||(n._fetchManager=new C.F(n)),e.request.op){case"findRecord":return function(e){const{store:t,data:n}=e.request,{record:r,options:i}=n
let s
if(t._instanceCache.recordIsLoaded(r))if(i.reload)(0,C.a)(r),s=t._fetchManager.scheduleFetch(r,i,e.request)
else{let n=null
const o=t.adapterFor(r.type)
void 0===i.reload&&o.shouldReloadRecord&&o.shouldReloadRecord(t,n=t._fetchManager.createSnapshot(r,i))?((0,C.a)(r),i.reload=!0,s=t._fetchManager.scheduleFetch(r,i,e.request)):(!1===i.backgroundReload||!i.backgroundReload&&o.shouldBackgroundReloadRecord&&!o.shouldBackgroundReloadRecord(t,n=n||t._fetchManager.createSnapshot(r,i))||((0,C.a)(r),i.backgroundReload=!0,t._fetchManager.scheduleFetch(r,i,e.request)),s=Promise.resolve(r))}else s=t._fetchManager.fetchDataIfNeededForIdentifier(r,i,e.request)
return s.then(e=>t.peekRecord(e))}(e)
case"findAll":return function(e){const{store:t,data:n}=e.request,{type:r,options:i}=n,s=t.adapterFor(r),o=t.recordArrayManager._live.get(r),a=new C.b(t,r,i)
let c
return i.reload||!1!==i.reload&&(s.shouldReloadAll&&s.shouldReloadAll(t,a)||!s.shouldReloadAll&&0===a.length)?(o&&(o.isUpdating=!0),c=N(s,t,r,a,e.request,!0)):(c=Promise.resolve(t.peekAll(r)),(i.backgroundReload||!1!==i.backgroundReload&&(!s.shouldBackgroundReloadAll||s.shouldBackgroundReloadAll(t,a)))&&(o&&(o.isUpdating=!0),N(s,t,r,a,e.request,!1))),c}(e)
case"query":return function(e){const{store:t,data:n}=e.request
let{options:r}=n
const{type:i,query:s}=n,o=t.adapterFor(i),a=r._recordArray||t.recordArrayManager.getCollection({type:i,query:s})
delete r._recordArray
const c=t.modelFor(i)
return Promise.resolve().then(()=>o.query(t,c,s,a,r)).then(e=>{const n=t.serializerFor(i),r=(0,C.n)(n,t,c,e,null,"query"),s=t._push(r,!0)
return t.recordArrayManager.populateManagedArray(a,s,r),a})}(e)
case"queryRecord":return function(e){const{store:t,data:n}=e.request,{type:r,query:i,options:s}=n,o=t.adapterFor(r),a=t.modelFor(r)
return Promise.resolve().then(()=>o.queryRecord(t,a,i,s)).then(e=>{const n=t.serializerFor(r),i=(0,C.n)(n,t,a,e,null,"queryRecord"),s=t._push(i,!0)
return s?t.peekRecord(s):null})}(e)
case"findBelongsTo":return function(e){const{store:t,data:n,records:r}=e.request,{options:i,record:s,links:o,useLink:a,field:c}=n,u=r?.[0],l=u&&t._fetchManager.getPendingFetch(u,i)
if(l)return l
if(a)return function(e,t,n,r,i){return Promise.resolve().then(()=>{const s=e.adapterFor(t.type),o=e._fetchManager.createSnapshot(t,i),a=n&&"string"!=typeof n?n.href:n
return s.findBelongsTo(e,o,a,r)}).then(n=>{const i=e.modelFor(r.type),s=e.serializerFor(r.type)
let o=(0,C.n)(s,e,i,n,null,"findBelongsTo")
return o.data||o.links||o.meta?(o=k(e,o,t,r),e._push(o,!0)):null},null)}(t,s,o.related,c,i)
const h=t._fetchManager
return(0,C.a)(u),i.reload?h.scheduleFetch(u,i,e.request):h.fetchDataIfNeededForIdentifier(u,i,e.request)}(e)
case"findHasMany":return function(e){const{store:t,data:n,records:r}=e.request,{options:i,record:s,links:o,useLink:a,field:c}=n
if(a)return function(e,t,n,r,i,s){return Promise.resolve().then(()=>{const o=t._fetchManager.createSnapshot(n,s),a=r&&"string"!=typeof r?r.href:r
return e.findHasMany(t,o,a,i)}).then(e=>{const r=t.modelFor(i.type),s=t.serializerFor(i.type)
let o=(0,C.n)(s,t,r,e,null,"findHasMany")
return o=k(t,o,n,i),t._push(o,!0)},null)}(t.adapterFor(s.type),t,s,o.related,c,i)
const u=new Array(r.length),l=t._fetchManager
for(let h=0;h<r.length;h++){const t=r[h];(0,C.a)(t),u[h]=i.reload?l.scheduleFetch(t,i,e.request):l.fetchDataIfNeededForIdentifier(t,i,e.request)}return Promise.all(u)}(e)
case"updateRecord":case"createRecord":case"deleteRecord":return function(e){const{store:t,data:n,op:r}=e.request,{options:i,record:s}=n
t.cache.willCommit(s,e)
const o=Object.assign({[C.S]:r},i)
return t._fetchManager.scheduleSave(s,o).then(n=>{let i
return t._join(()=>{i=t.cache.didCommit(s,{request:e.request,content:n})}),t.lifetimes?.didRequest&&"createRecord"===r&&t.lifetimes.didRequest(e.request,{status:201},null,t),t.peekRecord(i.data)}).catch(e=>{let n=e
throw e?"string"==typeof e&&(n=new Error(e)):n=new Error("Unknown Error Occurred During Request"),function(e,t,n){if(n&&!0===n.isAdapterError&&"InvalidError"===n.code){const r=e.serializerFor(t.type)
if(r&&"function"==typeof r.extractErrors){const i=r.extractErrors(e,e.modelFor(t.type),n,t.id)
n.errors=function(e){const t=[]
return e&&Object.keys(e).forEach(n=>{const r=(i=e[n],Array.isArray(i)?i:[i])
var i
for(let e=0;e<r.length;e++){let i="Invalid Attribute",s=`/data/attributes/${n}`
n===R&&(i="Invalid Document",s="/data"),t.push({title:i,detail:r[e],source:{pointer:s}})}}),t}(i)}}const r=e.cache
if(n.errors){let e=n.errors
0===e.length&&(e=[{title:"Invalid Error",detail:"",source:{pointer:"/data"}}]),r.commitWasRejected(t,e)}else r.commitWasRejected(t)}(t,s,n),n})}(e)
default:return t(e.request)}}},R="base"
function N(e,t,n,r,i,s){const o=t.modelFor(n)
let a=Promise.resolve().then(()=>e.findAll(t,o,null,r))
return a=a.then(e=>{const i=t.serializerFor(n),a=(0,C.n)(i,t,o,e,null,"findAll")
return t._push(a,s),r._recordArray.isUpdating=!1,r._recordArray}),a}function O(e,t){this._adapterCache=this._adapterCache||Object.create(null)
const n=(0,i.di)(e),{_adapterCache:r}=this
let s=r[n]
if(s)return s
const o=(0,T.getOwner)(this)
return s=o.lookup(`adapter:${n}`),void 0!==s?(r[n]=s,s):(s=r.application||o.lookup("adapter:application"),void 0!==s?(r[n]=s,r.application=s,s):void 0)}function M(e){this._serializerCache=this._serializerCache||Object.create(null)
const t=(0,i.di)(e),{_serializerCache:n}=this
let r=n[t]
if(r)return r
const s=(0,T.getOwner)(this)
return r=s.lookup(`serializer:${t}`),void 0!==r?(n[t]=r,r):(r=n.application||s.lookup("serializer:application"),void 0!==r?(n[t]=r,n.application=r,r):null)}function P(e,t){const n=(0,i.di)(e),r=this.serializerFor(n),s=this.modelFor(n)
return r.normalize(s,t)}function F(e,t){const n=t||e,r=t?(0,i.di)(e):"application"
this.serializerFor(r).pushPayload(this,n)}function L(e,t){return this._fetchManager||(this._fetchManager=new C.F(this)),this._fetchManager.createSnapshot((0,A.o)(e)).serialize(t)}function j(){for(const e in this._adapterCache){const t=this._adapterCache[e]
"function"==typeof t.destroy&&t.destroy()}for(const e in this._serializerCache){const t=this._serializerCache[e]
"function"==typeof t.destroy&&t.destroy()}}var q,V,B,U,$,z=n(1603),G=n(3241),K=n(4471),W=n.n(K),H=n(8738),Q=n(8146),J=n(1788),Y=n(1389),X=n(8410),Z=n.n(X),ee=n(3991),te=n(1491),ne=n(7375),re=n(7648),ie=n(9280),se=n.n(ie),oe=n(7104),ae=n.n(oe),ce=n(4666),ue=n(3193)
function le(e,t,n){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,n)}function he(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function de(e){{const t=(0,G._k)(e)
return(0,z.deprecate)(`The resource type '${e}' is not normalized. Update your application code to use '${t}' instead of '${e}'.`,t===e,{id:"ember-data:deprecate-non-strict-types",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.3"}}),t}}const fe=ae().extend(se()),pe=new WeakMap
function me(e,t,n,r){let i={configurable:!0,enumerable:!0,writable:!0,initializer:null}
r&&(i.initializer=r)
for(let s of n)i=s(e,t,i)||i
void 0===i.initializer?Object.defineProperty(e,t,i):function(e,t,n){let r=pe.get(e)
r||(r=new Map,pe.set(e,r)),r.set(t,n)}(e,t,i)}function ge(e,t,n){let r={...Object.getOwnPropertyDescriptor(e,t)}
for(let i of n)r=i(e,t,r)||r
void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(e):void 0,r.initializer=void 0),Object.defineProperty(e,t,r)}function ye(e,t){let n=function(e,t){var n
let r=e.prototype
for(;r;){let e=null==(n=pe.get(r))?void 0:n.get(t)
if(e)return e
r=r.prototype}}(e.constructor,t)
n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(e):void 0})}const ve=Symbol.for("LegacyPromiseProxy"),be=fe
class we extends be{constructor(...e){super(...e),he(this,ve,!0)}get id(){const{key:e,legacySupport:t}=this._belongsToState
return t.referenceFor("belongsTo",e).id()}get meta(){}async reload(e){const{key:t,legacySupport:n}=this._belongsToState
return await n.reloadBelongsTo(t,e),this}}ge((q=we).prototype,"id",[H.PO]),ge(q.prototype,"meta",[(0,K.computed)()])
class _e{constructor(e,t){he(this,ve,!0),this._update(e,t),this.isDestroyed=!1}get length(){return this["[]"],this.content?this.content.length:0}forEach(e){this.content&&this.length&&this.content.forEach(e)}reload(e){return this.content.reload(e),this}then(e,t){return this.promise.then(e,t)}catch(e){return this.promise.catch(e)}finally(e){return this.promise.finally(e)}destroy(){this.isDestroyed=!0,this.content=null,this.promise=null}get links(){return this.content?this.content.links:void 0}get meta(){return this.content?this.content.meta:void 0}_update(e,t){void 0!==t&&(this.content=t),this.promise=function(e,t){return e.isPending=!0,e.isSettled=!1,e.isFulfilled=!1,e.isRejected=!1,Promise.resolve(t).then(t=>(e.isPending=!1,e.isFulfilled=!0,e.isSettled=!0,e.content=t,t),t=>{throw e.isPending=!1,e.isFulfilled=!1,e.isRejected=!0,e.isSettled=!0,t})}(this,e)}static create({promise:e,content:t}){return new this(e,t)}}ge((V=_e).prototype,"length",[H.Vv]),ge(V.prototype,"links",[H.Vv]),ge(V.prototype,"meta",[H.Vv]),(0,Q.sg)(_e.prototype,"content",null),(0,Q.sg)(_e.prototype,"isPending",!1),(0,Q.sg)(_e.prototype,"isRejected",!1),(0,Q.sg)(_e.prototype,"isFulfilled",!1),(0,Q.sg)(_e.prototype,"isSettled",!1)
{const e={enumerable:!0,configurable:!1,get:function(){return this.content?.length&&this.content}};(0,H.Vv)(e),Object.defineProperty(_e.prototype,"[]",e)}class Se{constructor(e,t,n,r,i){he(this,"___token",void 0),he(this,"___identifier",void 0),he(this,"___relatedTokenMap",void 0),this.graph=t,this.key=i,this.hasManyRelationship=r,this.type=r.definition.type,this.store=e,this.___identifier=n,this.___token=e.notifications.subscribe(n,(e,t,n)=>{"relationships"===t&&n===i&&this._ref++}),this.___relatedTokenMap=new Map}destroy(){this.store.notifications.unsubscribe(this.___token),this.___relatedTokenMap.forEach(e=>{this.store.notifications.unsubscribe(e)}),this.___relatedTokenMap.clear()}get identifiers(){Ie(this),this._ref
const e=this._resource(),t=this.___relatedTokenMap
return this.___relatedTokenMap=new Map,e&&e.data?e.data.map(e=>{const n=this.store.identifierCache.getOrCreateRecordIdentifier(e)
let r=t.get(n)
return r?t.delete(n):r=this.store.notifications.subscribe(n,(e,t,n)=>{("identity"===t||"attributes"===t&&"id"===n)&&this._ref++}),this.___relatedTokenMap.set(n,r),n}):(t.forEach(e=>{this.store.notifications.unsubscribe(e)}),t.clear(),[])}_resource(){return this.store.cache.getRelationship(this.___identifier,this.key)}remoteType(){const e=this._resource()
return e&&e.links&&e.links.related?"link":"ids"}ids(){return this.identifiers.map(e=>e.id)}link(){const e=this._resource()
if(t=e,Boolean(t&&t.links&&t.links.related)&&e.links){const t=e.links.related
return t&&"string"!=typeof t?t.href:t}var t
return null}links(){const e=this._resource()
return e&&e.links?e.links:null}meta(){let e=null
const t=this._resource()
return t&&t.meta&&"object"==typeof t.meta&&(e=t.meta),e}async push(e,t){const{store:n}=this,r=Array.isArray(e)?{data:e}:e,i=Array.isArray(r.data)&&r.data.length>0&&Ee(r.data[0]),s=Array.isArray(r.data)?i?n._push(r,!0):r.data.map(e=>n.identifierCache.getOrCreateRecordIdentifier(e)):[],{identifier:o}=this.hasManyRelationship,a={}
if(Array.isArray(r.data)&&(a.data=s),"links"in r&&(a.links=r.links),"meta"in r&&(a.meta=r.meta),n._join(()=>{this.graph.push({op:"updateRelationship",record:o,field:this.key,value:a})}),!t)return this.load()}_isLoaded(){if(!this.hasManyRelationship.state.hasReceivedData)return!1
const e=this.graph.getData(this.hasManyRelationship.identifier,this.key)
return e.data?.every(e=>!0===this.store._instanceCache.recordIsLoaded(e,!0))}value(){const e=Ce.get(this.___identifier)
return Ie(this)?e.getManyArray(this.key):(this._ref,null)}async load(e){const t=Ce.get(this.___identifier)
return this.hasManyRelationship.definition.isAsync||Ne(this.store,this._resource())?t.getHasMany(this.key,e):t.reloadHasMany(this.key,e)}reload(e){return Ce.get(this.___identifier).reloadHasMany(this.key,e)}}function Ee(e){return Object.keys(e).filter(e=>"id"!==e&&"type"!==e&&"lid"!==e).length>0}function Ie(e){return!!e._isLoaded()||(e.graph.get(e.___identifier,e.key).accessed=!0,!1)}function Te(e){return Boolean(e&&e.links&&e.links.related)}ge(Se.prototype,"identifiers",[H.Vv,H.PO]),(0,Q.sg)(Se.prototype,"_ref",0)
class Ae{constructor(e,t,n,r,i){this.graph=t,this.key=i,this.belongsToRelationship=r,this.type=r.definition.type,this.store=e,this.___identifier=n,this.___relatedToken=null,this.___token=e.notifications.subscribe(n,(e,t,n)=>{"relationships"===t&&n===i&&this._ref++})}destroy(){this.store.notifications.unsubscribe(this.___token),this.___token=null,this.___relatedToken&&(this.store.notifications.unsubscribe(this.___relatedToken),this.___relatedToken=null)}get identifier(){this.___relatedToken&&(this.store.notifications.unsubscribe(this.___relatedToken),this.___relatedToken=null)
const e=this._resource()
if(e&&e.data){const t=this.store.identifierCache.getOrCreateRecordIdentifier(e.data)
return this.___relatedToken=this.store.notifications.subscribe(t,(e,t,n)=>{("identity"===t||"attributes"===t&&"id"===n)&&this._ref++}),t}return null}id(){return this.identifier?.id||null}link(){const e=this._resource()
if(Te(e)&&e.links){const t=e.links.related
return t&&"string"!=typeof t?t.href:t}return null}links(){const e=this._resource()
return e&&e.links?e.links:null}meta(){let e=null
const t=this._resource()
return t&&t.meta&&"object"==typeof t.meta&&(e=t.meta),e}_resource(){return this._ref,this.store.cache.getRelationship(this.___identifier,this.key)}remoteType(){return Te(this._resource())?"link":"id"}async push(e,t){const{store:n}=this,r=e.data&&Ee(e.data)?n._push(e,!0):e.data?n.identifierCache.getOrCreateRecordIdentifier(e.data):null,{identifier:i}=this.belongsToRelationship,s={}
if((e.data||null===e.data)&&(s.data=r),"links"in e&&(s.links=e.links),"meta"in e&&(s.meta=e.meta),n._join(()=>{this.graph.push({op:"updateRelationship",record:i,field:this.key,value:s})}),!t)return this.load()}value(){const e=this._resource()
return e&&e.data?this.store.peekRecord(e.data):null}async load(e){const t=Ce.get(this.___identifier)
return this.belongsToRelationship.definition.isAsync||Ne(this.store,this._resource())?t.getBelongsTo(this.key,e):t.reloadBelongsTo(this.key,e).then(()=>this.value())}reload(e){return Ce.get(this.___identifier).reloadBelongsTo(this.key,e).then(()=>this.value())}}ge(Ae.prototype,"identifier",[H.Vv,H.PO]),(0,Q.sg)(Ae.prototype,"_ref",0)
const Ce=(0,ne.L1)("LEGACY_SUPPORT",new Map)
function ke(e){const t=(0,i.o)(e)
let n=Ce.get(t)
return n||(n=new xe(e),Ce.set(t,n),Ce.set(e,n)),n}class xe{constructor(e){this.record=e,this.store=(0,i.fV)(e),this.identifier=(0,i.o)(e),this.cache=(0,i.oX)(e)
{const e=(0,ue.A)(n(151)).graphFor
this.graph=e(this.store)}this._manyArrayCache=Object.create(null),this._relationshipPromisesCache=Object.create(null),this._relationshipProxyCache=Object.create(null),this._pending=Object.create(null),this.references=Object.create(null)}_syncArray(e){if(this.isDestroyed||this.isDestroying)return
const t=e[i.u2],n=this.identifier,[r,s]=this._getCurrentState(n,e.key)
s.meta&&(e.meta=s.meta),s.links&&(e.links=s.links),t.length=0,(0,i.RX)(t,r)}mutate(e){this.cache.mutate(e)}_findBelongsTo(e,t,n,r){return this._findBelongsToByJsonApiResource(t,this.identifier,n,r).then(t=>Re(this,e,n,t),t=>Re(this,e,n,null,t))}reloadBelongsTo(e,t){const n=this._relationshipPromisesCache[e]
if(n)return n
const r=this.graph.get(this.identifier,e),i=this.cache.getRelationship(this.identifier,e)
r.state.hasFailedLoadAttempt=!1,r.state.shouldForceReload=!0
const s=this._findBelongsTo(e,i,r,t)
return this._relationshipProxyCache[e]?this._updatePromiseProxyFor("belongsTo",e,{promise:s}):s}getBelongsTo(e,t){const{identifier:n,cache:r}=this,i=r.getRelationship(this.identifier,e),s=i&&i.data?i.data:null,o=this.store,a=this.graph.get(this.identifier,e),c=a.definition.isAsync,u={key:e,store:o,legacySupport:this,modelName:a.definition.type}
if(c){if(a.state.hasFailedLoadAttempt)return this._relationshipProxyCache[e]
const n=this._findBelongsTo(e,i,a,t),r=s&&o._instanceCache.recordIsLoaded(s)
return this._updatePromiseProxyFor("belongsTo",e,{promise:n,content:r?o._instanceCache.getRecord(s):null,_belongsToState:u})}return null===s?null:o._instanceCache.getRecord(s)}setDirtyBelongsTo(e,t){return this.cache.mutate({op:"replaceRelatedRecord",record:this.identifier,field:e,value:(n=t,n?(0,i.o)(n):null)},!0)
var n}_getCurrentState(e,t){const n=this.cache.getRelationship(e,t),r=this.store._instanceCache,i=[]
if(n.data)for(let s=0;s<n.data.length;s++){const e=n.data[s]
r.recordIsLoaded(e,!0)&&i.push(e)}return[i,n]}getManyArray(e,t){{let n=this._manyArrayCache[e]
if(t||(t=this.graph.get(this.identifier,e).definition),!n){const[r,s]=this._getCurrentState(this.identifier,e)
n=new i.YN({store:this.store,type:t.type,identifier:this.identifier,cache:this.cache,identifiers:r,key:e,meta:s.meta||null,links:s.links||null,isPolymorphic:t.isPolymorphic,isAsync:t.isAsync,_inverseIsAsync:t.inverseIsAsync,manager:this,isLoaded:!t.isAsync,allowMutation:!0}),this._manyArrayCache[e]=n}return n}}fetchAsyncHasMany(e,t,n,r){{let i=this._relationshipPromisesCache[e]
if(i)return i
const s=this.cache.getRelationship(this.identifier,e),o=this._findHasManyByJsonApiResource(s,this.identifier,t,r)
return o?(i=o.then(()=>Re(this,e,t,n),r=>Re(this,e,t,n,r)),this._relationshipPromisesCache[e]=i,i):(n.isLoaded=!0,Promise.resolve(n))}}reloadHasMany(e,t){{const n=this._relationshipPromisesCache[e]
if(n)return n
const r=this.graph.get(this.identifier,e),{definition:i,state:s}=r
s.hasFailedLoadAttempt=!1,s.shouldForceReload=!0
const o=this.getManyArray(e,i),a=this.fetchAsyncHasMany(e,r,o,t)
return this._relationshipProxyCache[e]?this._updatePromiseProxyFor("hasMany",e,{promise:a}):a}}getHasMany(e,t){{const n=this.graph.get(this.identifier,e),{definition:r,state:i}=n,s=this.getManyArray(e,r)
if(r.isAsync){if(i.hasFailedLoadAttempt)return this._relationshipProxyCache[e]
const r=this.fetchAsyncHasMany(e,n,s,t)
return this._updatePromiseProxyFor("hasMany",e,{promise:r,content:s})}return s}}_updatePromiseProxyFor(e,t,n){let r=this._relationshipProxyCache[t]
if("hasMany"===e){const{promise:e,content:i}=n
return r?r._update(e,i):r=this._relationshipProxyCache[t]=new _e(e,i),r}if(r){const{promise:e,content:t}=n
void 0!==t&&r.set("content",t),r.set("promise",e)}else r=we.create(n),this._relationshipProxyCache[t]=r
return r}referenceFor(e,t){let n=this.references[t]
if(!n){const{graph:e,identifier:r}=this,i=e.get(r,t),s=i.definition.kind
"belongsTo"===s?n=new Ae(this.store,e,r,i,t):"hasMany"===s&&(n=new Se(this.store,e,r,i,t)),this.references[t]=n}return n}_findHasManyByJsonApiResource(e,t,n,r={}){{if(!e)return
const{definition:i,state:s}=n;(0,te.upgradeStore)(this.store)
const o=this.store.adapterFor?.(i.type),{isStale:a,hasDematerializedInverse:c,hasReceivedData:u,isEmpty:l,shouldForceReload:h}=s,d=Ne(this.store,e),f=e.data,p=e.links&&e.links.related&&("function"==typeof o?.findHasMany||void 0===f)&&(h||c||a||!d&&!l),m=this.store.schema.fields({type:i.inverseType}).get(i.key),g={useLink:p,field:m,links:e.links,meta:e.meta,options:r,record:t}
if(p){const t=m.options.linksMode?{url:De(e),op:"findHasMany",method:"GET",records:f||[],data:g,[re._q]:!1}:{op:"findHasMany",records:f||[],data:g,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}}
return this.store.request(t)}const y=u&&!l,v=c||l&&Array.isArray(f)&&f.length>0,b=!h&&!a&&(y||v)
if(b&&d)return
return b||u&&!l||v?(r.reload=r.reload||!b||void 0,this.store.request({op:"findHasMany",records:f,data:g,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}})):void 0}}_findBelongsToByJsonApiResource(e,t,n,r={}){if(!e)return Promise.resolve(null)
const i=n.definition.key
if(this._pending[i])return this._pending[i]
const s=e.data?e.data:null,{isStale:o,hasDematerializedInverse:a,hasReceivedData:c,isEmpty:u,shouldForceReload:l}=n.state,h=Ne(this.store,e),d=e.links?.related&&(l||a||o||!h&&!u),f=this.store.schema.fields(this.identifier).get(n.definition.key),p={useLink:d,field:f,links:e.links,meta:e.meta,options:r,record:t}
if(d){const t=f.options.linksMode?{url:De(e),op:"findBelongsTo",method:"GET",records:s?[s]:[],data:p,[re._q]:!1}:{op:"findBelongsTo",records:s?[s]:[],data:p,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}},n=this.store.request(t)
return this._pending[i]=n.then(e=>f.options.linksMode?e.content.data:e.content).finally(()=>{this._pending[i]=void 0}),this._pending[i]}const m=c&&h&&!u,g=a||u&&e.data,y=!l&&!o&&(m||g)
return y&&!s?Promise.resolve(null):y&&h||null===s?.id?Promise.resolve(s):s?(r.reload=r.reload||!y||void 0,this._pending[i]=this.store.request({op:"findBelongsTo",records:[s],data:p,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}}).then(e=>e.content).finally(()=>{this._pending[i]=void 0}),this._pending[i]):Promise.resolve(null)}destroy(){this.isDestroying=!0
let e=this._manyArrayCache
this._manyArrayCache=Object.create(null),Object.keys(e).forEach(t=>{e[t].destroy()}),e=this._relationshipProxyCache,this._relationshipProxyCache=Object.create(null),Object.keys(e).forEach(t=>{const n=e[t]
n.destroy&&n.destroy()}),e=this.references,this.references=Object.create(null),Object.keys(e).forEach(t=>{e[t].destroy()}),this.isDestroyed=!0}}function De(e){const t=e.links?.related
return"object"==typeof t?t.href:t}function Re(e,t,n,r,i){delete e._relationshipPromisesCache[t],n.state.shouldForceReload=!1
const s="hasMany"===n.definition.kind
if(s&&r.notify(),i){n.state.hasFailedLoadAttempt=!0
const r=e._relationshipProxyCache[t]
throw r&&!s&&(r.content&&r.content.isDestroying&&r.set("content",null),e.store.notifications._flush()),i}return s?r.isLoaded=!0:e.store.notifications._flush(),n.state.hasFailedLoadAttempt=!1,n.state.isStale=!1,s||!r?r:e.store.peekRecord(r)}function Ne(e,t){const n=e._instanceCache,r=t.data
return Array.isArray(r)?r.every(e=>n.recordIsLoaded(e)):!r||n.recordIsLoaded(r)}const Oe=Z()
var Me=new WeakMap,Pe=new WeakMap
class Fe extends Oe{constructor(...e){super(...e),le(this,Me,void ye(this,"messages")),le(this,Pe,void ye(this,"isEmpty"))}get errorsByAttributeName(){return new Map}errorsFor(e){const t=this.errorsByAttributeName
let n=t.get(e)
return void 0===n&&(n=(0,Y.A)(),t.set(e,n)),(0,K.get)(n,"[]"),n}get content(){return(0,Y.A)()}unknownProperty(e){const t=this.errorsFor(e)
if(0!==t.length)return t}add(e,t){const n=this._findOrCreateMessages(e,t)
this.addObjects(n),this.errorsFor(e).addObjects(n),this.__record.currentState.notify("isValid"),this.notifyPropertyChange(e)}_findOrCreateMessages(e,t){const n=this.errorsFor(e),r=Array.isArray(t)?t:[t],i=new Array(r.length)
for(let s=0;s<r.length;s++){const t=r[s],o=n.findBy("message",t)
i[s]=o||{attribute:e,message:t}}return i}remove(e){if(this.isEmpty)return
const t=this.rejectBy("attribute",e)
this.content.setObjects(t)
const n=this.errorsFor(e)
for(let r=0;r<n.length;r++)n[r].attribute===e&&n.replace(r,1)
this.errorsByAttributeName.delete(e),this.__record.currentState.notify("isValid"),this.notifyPropertyChange(e),this.notifyPropertyChange("length")}clear(){if(this.isEmpty)return
const e=this.errorsByAttributeName,t=[]
e.forEach(function(e,n){t.push(n)}),e.clear(),t.forEach(e=>{this.notifyPropertyChange(e)}),this.__record.currentState.notify("isValid"),super.clear()}has(e){return this.errorsFor(e).length>0}}function Le(e,t,n,r){if("belongsTo"===r.kind)n.notifyPropertyChange(t)
else if("hasMany"===r.kind){const i=Ce.get(e),s=i&&i._manyArrayCache[t],o=i&&i._relationshipPromisesCache[t]
if(s&&o)return
s&&(s.notify(),r.options.async&&n.notifyPropertyChange(t))}}function je(e,t,n,r){(0,ce.cacheFor)(r,n)!==e.cache.getAttr(t,n)&&r.notifyPropertyChange(n)}ge((B=Fe).prototype,"errorsByAttributeName",[(0,K.computed)()]),me(B.prototype,"messages",[(0,ee.mapBy)("content","message")]),ge(B.prototype,"content",[(0,K.computed)()]),me(B.prototype,"isEmpty",[(0,ee.not)("length")])
const qe=/^\/?data\/(attributes|relationships)\/(.*)/,Ve=/^\/?data/
function Be(e){return!!e&&e instanceof Error&&"isAdapterError"in e&&!0===e.isAdapterError&&"code"in e&&"InvalidError"===e.code}class Ue{constructor(e){const t=(0,A.fV)(e),n=(0,i.o)(e)
this.identifier=n,this.record=e,this.cache=t.cache,this.pendingCount=0,this.fulfilledCount=0,this.rejectedCount=0,this._errorRequests=[],this._lastError=null
const r=t.getRequestStateService(),s=t.notifications,o=e=>{if("mutation"===e.type)switch(e.state){case"pending":this.isSaving=!0
break
case"rejected":this.isSaving=!1,this._lastError=e,e.response&&Be(e.response.data)||this._errorRequests.push(e),$e(this)
break
case"fulfilled":this._errorRequests=[],this._lastError=null,this.isSaving=!1,this.notify("isDirty"),$e(this)}else switch(e.state){case"pending":this.pendingCount++,this.notify("isLoading")
break
case"rejected":this.pendingCount--,this._lastError=e,e.response&&Be(e.response.data)||this._errorRequests.push(e),this.notify("isLoading"),$e(this)
break
case"fulfilled":this.pendingCount--,this.fulfilledCount++,this.notify("isLoading"),this.notify("isDirty"),$e(this),this._errorRequests=[],this._lastError=null}}
r.subscribeForRecord(n,o)
const a=r.getLastRequestForRecord(n)
a&&o(a),this.handler=s.subscribe(n,(e,t,n)=>{switch(t){case"state":this.notify("isSaved"),this.notify("isNew"),this.notify("isDeleted"),this.notify("isDirty")
break
case"attributes":this.notify("isEmpty"),this.notify("isDirty")
break
case"errors":this.updateInvalidErrors(this.record.errors),this.notify("isValid")}})}destroy(){(0,A.fV)(this.record).notifications.unsubscribe(this.handler)}notify(e){(0,H.eM)(this,e)}updateInvalidErrors(e){const t=this.cache.getErrors(this.identifier)
e.clear()
for(let n=0;n<t.length;n++){const r=t[n]
if(r.source&&r.source.pointer){const t=r.source.pointer.match(qe)
let n
if(t?n=t[2]:-1!==r.source.pointer.search(Ve)&&(n="base"),n){const t=r.detail||r.title
e.add(n,t)}}}}cleanErrorRequests(){this.notify("isValid"),this.notify("isError"),this.notify("adapterError"),this._errorRequests=[],this._lastError=null}get isLoading(){return!this.isLoaded&&this.pendingCount>0&&0===this.fulfilledCount}get isLoaded(){return!!this.isNew||this.fulfilledCount>0||!this.isEmpty}get isSaved(){const e=this.cache
return this.isDeleted?e.isDeletionCommitted(this.identifier):!(this.isNew||this.isEmpty||!this.isValid||this.isDirty||this.isLoading)}get isEmpty(){const e=this.cache
return!this.isNew&&e.isEmpty(this.identifier)}get isNew(){return this.cache.isNew(this.identifier)}get isDeleted(){return this.cache.isDeleted(this.identifier)}get isValid(){return 0===this.record.errors.length}get isDirty(){const e=this.cache
return!(this.isEmpty||e.isDeletionCommitted(this.identifier)||this.isDeleted&&this.isNew)&&(this.isDeleted||this.isNew||e.hasChangedAttrs(this.identifier))}get isError(){return!!this._errorRequests[this._errorRequests.length-1]}get adapterError(){const e=this._lastError
return e?"rejected"===e.state&&e.response.data:null}get isPreloaded(){return!this.isEmpty&&this.isLoading}get stateName(){return this.isLoading?"root.loading":this.isEmpty?"root.empty":this.isDeleted?this.isSaving?"root.deleted.inFlight":this.isSaved?"root.deleted.saved":this.isValid?"root.deleted.uncommitted":"root.deleted.invalid":this.isNew?this.isSaving?"root.loaded.created.inFlight":this.isValid?"root.loaded.created.uncommitted":"root.loaded.created.invalid":this.isSaving?"root.loaded.updated.inFlight":this.isValid?this.isDirty?"root.loaded.updated.uncommitted":"root.loaded.saved":"root.loaded.updated.invalid"}get dirtyType(){return this.isLoading||this.isEmpty?"":this.isDirty&&this.isDeleted?"deleted":this.isNew?"created":this.isSaving||!this.isValid||this.isDirty?"updated":""}}function $e(e){e.notify("isValid"),e.notify("isError"),e.notify("adapterError")}function ze(e,t,n){const r=new WeakMap,i=n.get
return n.get=function(){let e=r.get(this)
return e||(e={hasComputed:!1,value:void 0},r.set(this,e)),e.hasComputed||(e.value=i.call(this),e.hasComputed=!0),e.value},n}ge((U=Ue).prototype,"isLoading",[Q.vh]),ge(U.prototype,"isLoaded",[Q.vh]),ge(U.prototype,"isSaved",[Q.vh]),ge(U.prototype,"isEmpty",[Q.vh]),ge(U.prototype,"isNew",[Q.vh]),ge(U.prototype,"isDeleted",[Q.vh]),ge(U.prototype,"isValid",[Q.vh]),ge(U.prototype,"isDirty",[Q.vh]),ge(U.prototype,"isError",[Q.vh]),ge(U.prototype,"adapterError",[Q.vh]),ge(U.prototype,"isPreloaded",[H.PO]),ge(U.prototype,"stateName",[H.PO]),ge(U.prototype,"dirtyType",[H.PO]),(0,Q.sg)(Ue.prototype,"isSaving",!1)
class Ge extends(W()){init(e){const t=e._createProps,n=e._secretInit
e._createProps=null,e._secretInit=null
const r=this.store=n.store
super.init(e),this[J.pm]=r
const i=n.identifier
n.cb(this,n.cache,i,n.store),this.___recordState=null,this.setProperties(t)
const s=r.notifications
this.___private_notifications=s.subscribe(i,(e,t,n)=>{!function(e,t,n,r,i){switch(t){case"added":case"attributes":n?je(i,e,n,r):r.eachAttribute(t=>{je(i,e,t,r)})
break
case"relationships":if(n){const t=r.constructor.relationshipsByName.get(n)
Le(e,n,r,t)}else r.eachRelationship((t,n)=>{Le(e,t,r,n)})
break
case"identity":r.notifyPropertyChange("id")}}(e,t,n,this,r)})}destroy(){const e=(0,A.o)(this)
this.___recordState?.destroy(),(0,A.fV)(this).notifications.unsubscribe(this.___private_notifications),this.eachRelationship((e,t)=>{"belongsTo"===t.kind&&this.notifyPropertyChange(e)}),Ce.get(this)?.destroy(),Ce.delete(this),Ce.delete(e),super.destroy()}get isEmpty(){return this.currentState.isEmpty}get isLoading(){return this.currentState.isLoading}get isLoaded(){return this.currentState.isLoaded}get hasDirtyAttributes(){return this.currentState.isDirty}get isSaving(){return this.currentState.isSaving}get isDeleted(){return this.currentState.isDeleted}get isNew(){return this.currentState.isNew}get isValid(){return this.currentState.isValid}get dirtyType(){return this.currentState.dirtyType}get isError(){return this.currentState.isError}set isError(e){}get id(){return(0,A.o)(this).id}set id(e){const t=(0,i.pG)(e),n=(0,A.o)(this),r=t!==n.id
null!==t&&r&&(this.store._instanceCache.setRecordId(n,t),this.store.notifications.notify(n,"identity"))}toString(){return`<model::${this.constructor.modelName}:${this.id}>`}get currentState(){return this.___recordState||(this.___recordState=new Ue(this)),this.___recordState}set currentState(e){throw new Error("cannot set currentState")}get errors(){const e=Fe.create({__record:this})
return this.currentState.updateInvalidErrors(e),e}get adapterError(){return this.currentState.adapterError}set adapterError(e){throw new Error("adapterError is not directly settable")}notifyPropertyChange(e){(0,H.eM)(this,e),super.notifyPropertyChange(e)}attr(){}eachRelationship(e,t){this.constructor.eachRelationship(e,t)}relationshipFor(e){return this.constructor.relationshipsByName.get(e)}inverseFor(e){return this.constructor.inverseFor(e,(0,A.fV)(this))}eachAttribute(e,t){this.constructor.eachAttribute(e,t)}static typeForRelationship(e,t){const n=this.relationshipsByName.get(e)
return n&&t.modelFor(n.type)}static get inverseMap(){return Object.create(null)}static inverseFor(e,t){const n=this.inverseMap
if(n[e])return n[e]
{const r=this._findInverseFor(e,t)
return n[e]=r,r}}static _findInverseFor(e,t){const n=this.relationshipsByName.get(e)
if(!n)return null
const{options:r}=n
return null===r.inverse?null:t.schema.hasResource(n)&&t.schema.fields(n).get(r.inverse)||null}static get relationships(){const e=new Map
return this.relationshipsByName.forEach(t=>{const{type:n}=t
e.has(n)||e.set(n,[]),e.get(n).push(t)}),e}static get relationshipNames(){const e={hasMany:[],belongsTo:[]}
return this.eachComputedProperty((t,n)=>{Ke(n)&&e[n.kind].push(t)}),e}static get relatedTypes(){const e=[],t=this.relationshipsObject,n=Object.keys(t)
for(let r=0;r<n.length;r++){const i=t[n[r]].type
e.includes(i)||e.push(i)}return e}static get relationshipsByName(){const e=new Map,t=this.relationshipsObject,n=Object.keys(t)
for(let r=0;r<n.length;r++){const i=t[n[r]]
e.set(i.name,i)}return e}static get relationshipsObject(){const e=Object.create(null)
return this.modelName,this.eachComputedProperty((t,n)=>{Ke(n)&&(n.key=t,n.name=t,e[t]=n)}),e}static get fields(){const e=new Map
return this.eachComputedProperty((t,n)=>{Ke(n)?e.set(t,n.kind):We(n)&&e.set(t,"attribute")}),e}static eachRelationship(e,t){this.relationshipsByName.forEach((n,r)=>{e.call(t,r,n)})}static eachRelatedType(e,t){const n=this.relatedTypes
for(let r=0;r<n.length;r++){const i=n[r]
e.call(t,i)}}static determineRelationshipType(e,t){const n=e.name,r=e.kind,i=this.inverseFor(n,t)
return i?"belongsTo"===i.kind?"belongsTo"===r?"oneToOne":"manyToOne":"belongsTo"===r?"oneToMany":"manyToMany":"belongsTo"===r?"oneToNone":"manyToNone"}static get attributes(){const e=new Map
return this.eachComputedProperty((t,n)=>{We(n)&&(n.key=t,n.name=t,e.set(t,n))}),e}static get transformedAttributes(){const e=new Map
return this.eachAttribute((t,n)=>{n.type&&e.set(t,n.type)}),e}static eachAttribute(e,t){this.attributes.forEach((n,r)=>{e.call(t,r,n)})}static eachTransformedAttribute(e,t){this.transformedAttributes.forEach((n,r)=>{e.call(t,r,n)})}static toString(){return`model:${this.modelName}`}}function Ke(e){return"object"==typeof e&&null!==e&&"kind"in e&&"options"in e&&("hasMany"===e.kind||"belongsTo"===e.kind)}function We(e){return"object"==typeof e&&null!==e&&"kind"in e&&"attribute"===e.kind}ge(($=Ge).prototype,"isEmpty",[H.Vv]),ge($.prototype,"isLoading",[H.Vv]),ge($.prototype,"isLoaded",[H.Vv]),ge($.prototype,"hasDirtyAttributes",[H.Vv]),ge($.prototype,"isSaving",[H.Vv]),ge($.prototype,"isDeleted",[H.Vv]),ge($.prototype,"isNew",[H.Vv]),ge($.prototype,"isValid",[H.Vv]),ge($.prototype,"dirtyType",[H.Vv]),ge($.prototype,"isError",[H.Vv]),ge($.prototype,"id",[Q.vh]),ge($.prototype,"currentState",[Q.vh]),ge($.prototype,"errors",[ze]),ge($.prototype,"adapterError",[H.Vv]),he(Ge,"isModel",!0),he(Ge,"modelName",null),ge($,"inverseMap",[ze]),ge($,"relationships",[ze]),ge($,"relationshipNames",[ze]),ge($,"relatedTypes",[ze]),ge($,"relationshipsByName",[ze]),ge($,"relationshipsObject",[ze]),ge($,"fields",[ze]),ge($,"attributes",[ze]),ge($,"transformedAttributes",[ze]),Ge.prototype.save=function(e){let t
return this.currentState.isNew&&this.currentState.isDeleted?t=Promise.resolve(this):(this.errors.clear(),t=this[J.pm].saveRecord(this,e)),t},Ge.prototype.destroyRecord=function(e){const{isNew:t}=this.currentState
return this.deleteRecord(),t?Promise.resolve(this):this.save(e).then(e=>(this.unloadRecord(),this))},Ge.prototype.unloadRecord=function(){this.currentState.isNew&&(this.isDestroyed||this.isDestroying)||this[J.pm].unloadRecord(this)},Ge.prototype.hasMany=function(e){return ke(this).referenceFor("hasMany",e)},Ge.prototype.belongsTo=function(e){return ke(this).referenceFor("belongsTo",e)},Ge.prototype.serialize=function(e){return(0,te.upgradeStore)(this[J.pm]),this[J.pm].serializeRecord(this,e)},Ge.prototype._createSnapshot=function(){const e=this[J.pm]
if((0,te.upgradeStore)(e),!e._fetchManager){const t=(0,ue.A)(n(1491)).FetchManager
e._fetchManager=new t(e)}return e._fetchManager.createSnapshot((0,A.o)(this))},Ge.prototype.deleteRecord=function(){this.currentState&&this[J.pm].deleteRecord(this)},Ge.prototype.changedAttributes=function(){return(0,i.oX)(this).changedAttrs((0,A.o)(this))},Ge.prototype.rollbackAttributes=function(){const{currentState:e}=this,{isNew:t}=e
this[J.pm]._join(()=>{(0,i.oX)(this).rollbackAttrs((0,A.o)(this)),this.errors.clear(),e.cleanErrorRequests(),t&&this.unloadRecord()})},Ge.prototype.reload=function(e={}){e.isReloading=!0,e.reload=!0
const t=(0,A.o)(this)
return this.isReloading=!0,this[J.pm].request({op:"findRecord",data:{options:e,record:t},cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}}).then(()=>this).finally(()=>{this.isReloading=!1})},(0,Q.sg)(Ge.prototype,"isReloading",!1),Ge.prototype._createProps=null,Ge.prototype._secretInit=null
class He{constructor(e){this.store=e,this._schemas=new Map,this._typeMisses=new Set}resourceTypes(){return Array.from(this._schemas.keys())}hasTrait(e){return!1}resourceHasTrait(e,t){return!1}transformation(e){}derivation(e){}hashFn(e){}resource(e){const t=de(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).schema}registerResources(e){}registerResource(e){}registerTransformation(e){}registerDerivation(e){}registerHashFn(e){}_loadModelSchema(e){const t=this.store.modelFor(e),n=t.attributes,r=Object.create(null)
n.forEach((e,t)=>r[t]=e)
const i=t.relationshipsObject||null,s=new Map
for(const a of Object.values(r))s.set(a.name,a)
for(const a of Object.values(i))s.set(a.name,a)
const o={schema:{legacy:!0,identity:{name:"id",kind:"@id"},type:e,fields:Array.from(s.values())},attributes:r,relationships:i,fields:s}
return this._schemas.set(e,o),o}fields(e){const t=de(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).fields}hasResource(e){const t=de(e.type)
return!!this._schemas.has(t)||!this._typeMisses.has(t)&&!(null===Qe(this.store,t)&&(this._typeMisses.add(t),1))}}function Qe(e,t){e._modelFactoryCache||(e._modelFactoryCache=Object.create(null))
const n=e._modelFactoryCache
let r=n[t]
if(!r){if(r=(0,T.getOwner)(e).factoryFor(`model:${t}`),r||(r=function(e,t){const n=(0,T.getOwner)(e),r=n.factoryFor(`mixin:${t}`),i=r&&r.class
if(i){const e=Ge.extend(i)
e.__isMixin=!0,e.__mixin=i,n.register(`model:${t}`,e)}return n.factoryFor(`model:${t}`)}(e,t)),!r)return null
const i=r.class
i.isModel&&(i.modelName&&Object.prototype.hasOwnProperty.call(i,"modelName")||Object.defineProperty(i,"modelName",{value:t})),n[t]=r}return r}function Je(e,t){const n=e.type,r={_createProps:t,_secretInit:{identifier:e,cache:this.cache,store:this,cb:Ze}}
return(0,T.setOwner)(r,(0,T.getOwner)(this)),Qe(this,n).class.create(r)}function Ye(e){e.destroy()}function Xe(e){const t=Qe(this,de(e)),n=t&&t.class?t.class:null
if(n&&n.isModel&&!this._forceShim)return n}function Ze(e,t,n,r){(0,i.TP)(e,n),i.i.set(e,r),(0,i.Wz)(e,t)}He.prototype.doesTypeExist=function(e){return(0,z.deprecate)("Use `schema.hasResource({ type })` instead of `schema.doesTypeExist(type)`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this.hasResource({type:e})},He.prototype.attributesDefinitionFor=function(e){(0,z.deprecate)("Use `schema.fields({ type })` instead of `schema.attributesDefinitionFor({ type })`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}})
const t=de(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).attributes},He.prototype.relationshipsDefinitionFor=function(e){(0,z.deprecate)("Use `schema.fields({ type })` instead of `schema.relationshipsDefinitionFor({ type })`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}})
const t=de(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).relationships}
var et=n(6082),tt=n(6076)
const nt="undefined"!=typeof fetch?(...e)=>fetch(...e):"undefined"!=typeof FastBoot?(...e)=>FastBoot.require("node-fetch")(...e):()=>{throw new Error("No Fetch Implementation Found")},rt=new Set(["updateRecord","createRecord","deleteRecord"]),it=new Map([[400,"Bad Request"],[401,"Unauthorized"],[402,"Payment Required"],[403,"Forbidden"],[404,"Not Found"],[405,"Method Not Allowed"],[406,"Not Acceptable"],[407,"Proxy Authentication Required"],[408,"Request Timeout"],[409,"Conflict"],[410,"Gone"],[411,"Length Required"],[412,"Precondition Failed"],[413,"Payload Too Large"],[414,"URI Too Long"],[415,"Unsupported Media Type"],[416,"Range Not Satisfiable"],[417,"Expectation Failed"],[419,"Page Expired"],[420,"Enhance Your Calm"],[421,"Misdirected Request"],[422,"Unprocessable Entity"],[423,"Locked"],[424,"Failed Dependency"],[425,"Too Early"],[426,"Upgrade Required"],[428,"Precondition Required"],[429,"Too Many Requests"],[430,"Request Header Fields Too Large"],[431,"Request Header Fields Too Large"],[450,"Blocked By Windows Parental Controls"],[451,"Unavailable For Legal Reasons"],[500,"Internal Server Error"],[501,"Not Implemented"],[502,"Bad Gateway"],[503,"Service Unavailable"],[504,"Gateway Timeout"],[505,"HTTP Version Not Supported"],[506,"Variant Also Negotiates"],[507,"Insufficient Storage"],[508,"Loop Detected"],[509,"Bandwidth Limit Exceeded"],[510,"Not Extended"],[511,"Network Authentication Required"]]),st={async request(e){let t
try{t=await nt(e.request.url,e.request)}catch(e){throw e instanceof DOMException&&"AbortError"===e.name?(e.statusText="Aborted",e.status=20,e.isRequestError=!0):(e.statusText="Unknown Network Error",e.status=0,e.isRequestError=!0),e}const n=!t.ok||t.status>=400,r=e.request.op,i=Boolean(r&&rt.has(r))
if(!n&&!i&&204!==t.status&&!t.headers.has("date")){const e=new Headers(t.headers)
e.set("date",(new Date).toUTCString()),t=function(e,t){const n=(0,tt.f)(e)
return new Response(e.body,Object.assign(n,t))}(t,{headers:e})}if(e.setResponse(t),204===t.status)return null
let s=""
{const n=t.body.getReader(),r=new TextDecoder
let i=e.hasRequestedStream,o=i?new TransformStream:null,a=o?.writable.getWriter()
for(i&&(e.request.signal?.addEventListener("abort",()=>{i&&(o.writable.abort("Request Aborted"),o.readable.cancel("Request Aborted"))}),e.setStream(o.readable));;){const{done:t,value:c}=await n.read()
if(t){i&&(i=!1,await a.ready,await a.close())
break}if(s+=r.decode(c,{stream:!0}),i)await a.ready,await a.write(c)
else if(e.hasRequestedStream){const t=new TextEncoder
i=!0,o=new TransformStream,e.request.signal?.addEventListener("abort",()=>{i&&(o.writable.abort("Request Aborted"),o.readable.cancel("Request Aborted"))}),e.setStream(o.readable),a=o.writable.getWriter(),await a.ready,await a.write(t.encode(s)),await a.ready,await a.write(c)}}i&&(i=!1,await a.ready,await a.close())}if(n){let n
try{n=JSON.parse(s)}catch{}const r=Array.isArray(n)?n:null!==(o=n)&&"object"==typeof o&&Array.isArray(n.errors)?n.errors:null,i=t.statusText||it.get(t.status)||"Unknown Request Error",a=`[${t.status} ${i}] ${e.request.method??"GET"} (${t.type}) - ${t.url}`,c=r?new AggregateError(r,a):new Error(a)
throw c.status=t.status,c.statusText=i,c.isRequestError=!0,c.code=c.status,c.name=c.statusText.replaceAll(" ","")+"Error",c.content=n,c}return JSON.parse(s)
var o}}
function ot(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class at extends A.Ay{constructor(e){super(e),ot(this,"adapterFor",O),ot(this,"serializerFor",M),ot(this,"pushPayload",F),ot(this,"normalize",P),ot(this,"serializeRecord",L),"requestManager"in this||(this.requestManager=new et.Ay,this.requestManager.use([D,st])),this.requestManager.useCache(A.lL)}createSchemaService(){return new He(this)}createCache(e){return new a(e)}instantiateRecord(e,t){return Je.call(this,e,t)}teardownRecord(e){Ye.call(this,e)}modelFor(e){return Xe.call(this,e)||super.modelFor(e)}destroy(){j.call(this),super.destroy()}}},7772:(e,t,n)=>{"use strict"
function r([e]){return Math.clz32(e)}n.r(t),n.d(t,{clz32:()=>r,default:()=>i})
var i=(0,n(336).helper)(r)},7811:(e,t,n)=>{"use strict"
function r([e,t]){return Math.imul(e,t)}n.r(t),n.d(t,{default:()=>i,imul:()=>r})
var i=(0,n(336).helper)(r)},7836:(e,t,n)=>{"use strict"
function r(e){return Math.max(...e)}n.r(t),n.d(t,{default:()=>i,max:()=>r})
var i=(0,n(336).helper)(r)},7843:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{afterMain:()=>S,afterRead:()=>b,afterWrite:()=>T,applyStyles:()=>N,arrow:()=>X,auto:()=>a,basePlacements:()=>c,beforeMain:()=>w,beforeRead:()=>y,beforeWrite:()=>E,bottom:()=>i,clippingParents:()=>h,computeStyles:()=>ne,createPopper:()=>Re,createPopperBase:()=>De,createPopperLite:()=>Ne,detectOverflow:()=>ye,end:()=>l,eventListeners:()=>ie,flip:()=>ve,hide:()=>_e,left:()=>o,main:()=>_,modifierPhases:()=>A,offset:()=>Se,placements:()=>g,popper:()=>f,popperGenerator:()=>xe,popperOffsets:()=>Ee,preventOverflow:()=>Ie,read:()=>v,reference:()=>p,right:()=>s,start:()=>u,top:()=>r,variationPlacements:()=>m,viewport:()=>d,write:()=>I})
var r="top",i="bottom",s="right",o="left",a="auto",c=[r,i,s,o],u="start",l="end",h="clippingParents",d="viewport",f="popper",p="reference",m=c.reduce(function(e,t){return e.concat([t+"-"+u,t+"-"+l])},[]),g=[].concat(c,[a]).reduce(function(e,t){return e.concat([t,t+"-"+u,t+"-"+l])},[]),y="beforeRead",v="read",b="afterRead",w="beforeMain",_="main",S="afterMain",E="beforeWrite",I="write",T="afterWrite",A=[y,v,b,w,_,S,E,I,T]
function C(e){return e?(e.nodeName||"").toLowerCase():null}function k(e){if(null==e)return window
if("[object Window]"!==e.toString()){var t=e.ownerDocument
return t&&t.defaultView||window}return e}function x(e){return e instanceof k(e).Element||e instanceof Element}function D(e){return e instanceof k(e).HTMLElement||e instanceof HTMLElement}function R(e){return"undefined"!=typeof ShadowRoot&&(e instanceof k(e).ShadowRoot||e instanceof ShadowRoot)}const N={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state
Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e]
D(i)&&C(i)&&(Object.assign(i.style,n),Object.keys(r).forEach(function(e){var t=r[e]
!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],i=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]="",e},{})
D(r)&&C(r)&&(Object.assign(r.style,s),Object.keys(i).forEach(function(e){r.removeAttribute(e)}))})}},requires:["computeStyles"]}
function O(e){return e.split("-")[0]}var M=Math.max,P=Math.min,F=Math.round
function L(){var e=navigator.userAgentData
return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function j(){return!/^((?!chrome|android).)*safari/i.test(L())}function q(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1)
var r=e.getBoundingClientRect(),i=1,s=1
t&&D(e)&&(i=e.offsetWidth>0&&F(r.width)/e.offsetWidth||1,s=e.offsetHeight>0&&F(r.height)/e.offsetHeight||1)
var o=(x(e)?k(e):window).visualViewport,a=!j()&&n,c=(r.left+(a&&o?o.offsetLeft:0))/i,u=(r.top+(a&&o?o.offsetTop:0))/s,l=r.width/i,h=r.height/s
return{width:l,height:h,top:u,right:c+l,bottom:u+h,left:c,x:c,y:u}}function V(e){var t=q(e),n=e.offsetWidth,r=e.offsetHeight
return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function B(e,t){var n=t.getRootNode&&t.getRootNode()
if(e.contains(t))return!0
if(n&&R(n)){var r=t
do{if(r&&e.isSameNode(r))return!0
r=r.parentNode||r.host}while(r)}return!1}function U(e){return k(e).getComputedStyle(e)}function $(e){return["table","td","th"].indexOf(C(e))>=0}function z(e){return((x(e)?e.ownerDocument:e.document)||window.document).documentElement}function G(e){return"html"===C(e)?e:e.assignedSlot||e.parentNode||(R(e)?e.host:null)||z(e)}function K(e){return D(e)&&"fixed"!==U(e).position?e.offsetParent:null}function W(e){for(var t=k(e),n=K(e);n&&$(n)&&"static"===U(n).position;)n=K(n)
return n&&("html"===C(n)||"body"===C(n)&&"static"===U(n).position)?t:n||function(e){var t=/firefox/i.test(L())
if(/Trident/i.test(L())&&D(e)&&"fixed"===U(e).position)return null
var n=G(e)
for(R(n)&&(n=n.host);D(n)&&["html","body"].indexOf(C(n))<0;){var r=U(n)
if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n
n=n.parentNode}return null}(e)||t}function H(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Q(e,t,n){return M(e,P(t,n))}function J(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Y(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}const X={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,a=e.name,u=e.options,l=n.elements.arrow,h=n.modifiersData.popperOffsets,d=O(n.placement),f=H(d),p=[o,s].indexOf(d)>=0?"height":"width"
if(l&&h){var m=function(e,t){return J("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Y(e,c))}(u.padding,n),g=V(l),y="y"===f?r:o,v="y"===f?i:s,b=n.rects.reference[p]+n.rects.reference[f]-h[f]-n.rects.popper[p],w=h[f]-n.rects.reference[f],_=W(l),S=_?"y"===f?_.clientHeight||0:_.clientWidth||0:0,E=b/2-w/2,I=m[y],T=S-g[p]-m[v],A=S/2-g[p]/2+E,C=Q(I,A,T),k=f
n.modifiersData[a]=((t={})[k]=C,t.centerOffset=C-A,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n
null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&B(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}
function Z(e){return e.split("-")[1]}var ee={top:"auto",right:"auto",bottom:"auto",left:"auto"}
function te(e){var t,n=e.popper,a=e.popperRect,c=e.placement,u=e.variation,h=e.offsets,d=e.position,f=e.gpuAcceleration,p=e.adaptive,m=e.roundOffsets,g=e.isFixed,y=h.x,v=void 0===y?0:y,b=h.y,w=void 0===b?0:b,_="function"==typeof m?m({x:v,y:w}):{x:v,y:w}
v=_.x,w=_.y
var S=h.hasOwnProperty("x"),E=h.hasOwnProperty("y"),I=o,T=r,A=window
if(p){var C=W(n),x="clientHeight",D="clientWidth"
C===k(n)&&"static"!==U(C=z(n)).position&&"absolute"===d&&(x="scrollHeight",D="scrollWidth"),(c===r||(c===o||c===s)&&u===l)&&(T=i,w-=(g&&C===A&&A.visualViewport?A.visualViewport.height:C[x])-a.height,w*=f?1:-1),c!==o&&(c!==r&&c!==i||u!==l)||(I=s,v-=(g&&C===A&&A.visualViewport?A.visualViewport.width:C[D])-a.width,v*=f?1:-1)}var R,N=Object.assign({position:d},p&&ee),O=!0===m?function(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1
return{x:F(n*i)/i||0,y:F(r*i)/i||0}}({x:v,y:w},k(n)):{x:v,y:w}
return v=O.x,w=O.y,f?Object.assign({},N,((R={})[T]=E?"0":"",R[I]=S?"0":"",R.transform=(A.devicePixelRatio||1)<=1?"translate("+v+"px, "+w+"px)":"translate3d("+v+"px, "+w+"px, 0)",R)):Object.assign({},N,((t={})[T]=E?w+"px":"",t[I]=S?v+"px":"",t.transform="",t))}const ne={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,c=void 0===a||a,u={placement:O(t.placement),variation:Z(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy}
null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,te(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,te(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}}
var re={passive:!0}
const ie={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,s=void 0===i||i,o=r.resize,a=void 0===o||o,c=k(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper)
return s&&u.forEach(function(e){e.addEventListener("scroll",n.update,re)}),a&&c.addEventListener("resize",n.update,re),function(){s&&u.forEach(function(e){e.removeEventListener("scroll",n.update,re)}),a&&c.removeEventListener("resize",n.update,re)}},data:{}}
var se={left:"right",right:"left",bottom:"top",top:"bottom"}
function oe(e){return e.replace(/left|right|bottom|top/g,function(e){return se[e]})}var ae={start:"end",end:"start"}
function ce(e){return e.replace(/start|end/g,function(e){return ae[e]})}function ue(e){var t=k(e)
return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function le(e){return q(z(e)).left+ue(e).scrollLeft}function he(e){var t=U(e),n=t.overflow,r=t.overflowX,i=t.overflowY
return/auto|scroll|overlay|hidden/.test(n+i+r)}function de(e){return["html","body","#document"].indexOf(C(e))>=0?e.ownerDocument.body:D(e)&&he(e)?e:de(G(e))}function fe(e,t){var n
void 0===t&&(t=[])
var r=de(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),s=k(r),o=i?[s].concat(s.visualViewport||[],he(r)?r:[]):r,a=t.concat(o)
return i?a:a.concat(fe(G(o)))}function pe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function me(e,t,n){return t===d?pe(function(e,t){var n=k(e),r=z(e),i=n.visualViewport,s=r.clientWidth,o=r.clientHeight,a=0,c=0
if(i){s=i.width,o=i.height
var u=j();(u||!u&&"fixed"===t)&&(a=i.offsetLeft,c=i.offsetTop)}return{width:s,height:o,x:a+le(e),y:c}}(e,n)):x(t)?function(e,t){var n=q(e,!1,"fixed"===t)
return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):pe(function(e){var t,n=z(e),r=ue(e),i=null==(t=e.ownerDocument)?void 0:t.body,s=M(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=M(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+le(e),c=-r.scrollTop
return"rtl"===U(i||n).direction&&(a+=M(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}(z(e)))}function ge(e){var t,n=e.reference,a=e.element,c=e.placement,h=c?O(c):null,d=c?Z(c):null,f=n.x+n.width/2-a.width/2,p=n.y+n.height/2-a.height/2
switch(h){case r:t={x:f,y:n.y-a.height}
break
case i:t={x:f,y:n.y+n.height}
break
case s:t={x:n.x+n.width,y:p}
break
case o:t={x:n.x-a.width,y:p}
break
default:t={x:n.x,y:n.y}}var m=h?H(h):null
if(null!=m){var g="y"===m?"height":"width"
switch(d){case u:t[m]=t[m]-(n[g]/2-a[g]/2)
break
case l:t[m]=t[m]+(n[g]/2-a[g]/2)}}return t}function ye(e,t){void 0===t&&(t={})
var n=t,o=n.placement,a=void 0===o?e.placement:o,u=n.strategy,l=void 0===u?e.strategy:u,m=n.boundary,g=void 0===m?h:m,y=n.rootBoundary,v=void 0===y?d:y,b=n.elementContext,w=void 0===b?f:b,_=n.altBoundary,S=void 0!==_&&_,E=n.padding,I=void 0===E?0:E,T=J("number"!=typeof I?I:Y(I,c)),A=w===f?p:f,k=e.rects.popper,R=e.elements[S?A:w],N=function(e,t,n,r){var i="clippingParents"===t?function(e){var t=fe(G(e)),n=["absolute","fixed"].indexOf(U(e).position)>=0&&D(e)?W(e):e
return x(n)?t.filter(function(e){return x(e)&&B(e,n)&&"body"!==C(e)}):[]}(e):[].concat(t),s=[].concat(i,[n]),o=s[0],a=s.reduce(function(t,n){var i=me(e,n,r)
return t.top=M(i.top,t.top),t.right=P(i.right,t.right),t.bottom=P(i.bottom,t.bottom),t.left=M(i.left,t.left),t},me(e,o,r))
return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(x(R)?R:R.contextElement||z(e.elements.popper),g,v,l),O=q(e.elements.reference),F=ge({reference:O,element:k,strategy:"absolute",placement:a}),L=pe(Object.assign({},k,F)),j=w===f?L:O,V={top:N.top-j.top+T.top,bottom:j.bottom-N.bottom+T.bottom,left:N.left-j.left+T.left,right:j.right-N.right+T.right},$=e.modifiersData.offset
if(w===f&&$){var K=$[a]
Object.keys(V).forEach(function(e){var t=[s,i].indexOf(e)>=0?1:-1,n=[r,i].indexOf(e)>=0?"y":"x"
V[e]+=K[n]*t})}return V}const ve={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,l=e.name
if(!t.modifiersData[l]._skip){for(var h=n.mainAxis,d=void 0===h||h,f=n.altAxis,p=void 0===f||f,y=n.fallbackPlacements,v=n.padding,b=n.boundary,w=n.rootBoundary,_=n.altBoundary,S=n.flipVariations,E=void 0===S||S,I=n.allowedAutoPlacements,T=t.options.placement,A=O(T),C=y||(A!==T&&E?function(e){if(O(e)===a)return[]
var t=oe(e)
return[ce(e),t,ce(t)]}(T):[oe(T)]),k=[T].concat(C).reduce(function(e,n){return e.concat(O(n)===a?function(e,t){void 0===t&&(t={})
var n=t,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,u=n.allowedAutoPlacements,l=void 0===u?g:u,h=Z(r),d=h?a?m:m.filter(function(e){return Z(e)===h}):c,f=d.filter(function(e){return l.indexOf(e)>=0})
0===f.length&&(f=d)
var p=f.reduce(function(t,n){return t[n]=ye(e,{placement:n,boundary:i,rootBoundary:s,padding:o})[O(n)],t},{})
return Object.keys(p).sort(function(e,t){return p[e]-p[t]})}(t,{placement:n,boundary:b,rootBoundary:w,padding:v,flipVariations:E,allowedAutoPlacements:I}):n)},[]),x=t.rects.reference,D=t.rects.popper,R=new Map,N=!0,M=k[0],P=0;P<k.length;P++){var F=k[P],L=O(F),j=Z(F)===u,q=[r,i].indexOf(L)>=0,V=q?"width":"height",B=ye(t,{placement:F,boundary:b,rootBoundary:w,altBoundary:_,padding:v}),U=q?j?s:o:j?i:r
x[V]>D[V]&&(U=oe(U))
var $=oe(U),z=[]
if(d&&z.push(B[L]<=0),p&&z.push(B[U]<=0,B[$]<=0),z.every(function(e){return e})){M=F,N=!1
break}R.set(F,z)}if(N)for(var G=function(e){var t=k.find(function(t){var n=R.get(t)
if(n)return n.slice(0,e).every(function(e){return e})})
if(t)return M=t,"break"},K=E?3:1;K>0&&"break"!==G(K);K--);t.placement!==M&&(t.modifiersData[l]._skip=!0,t.placement=M,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}
function be(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function we(e){return[r,s,i,o].some(function(t){return e[t]>=0})}const _e={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,o=ye(t,{elementContext:"reference"}),a=ye(t,{altBoundary:!0}),c=be(o,r),u=be(a,i,s),l=we(c),h=we(u)
t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":h})}},Se={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,i=e.name,a=n.offset,c=void 0===a?[0,0]:a,u=g.reduce(function(e,n){return e[n]=function(e,t,n){var i=O(e),a=[o,r].indexOf(i)>=0?-1:1,c="function"==typeof n?n(Object.assign({},t,{placement:e})):n,u=c[0],l=c[1]
return u=u||0,l=(l||0)*a,[o,s].indexOf(i)>=0?{x:l,y:u}:{x:u,y:l}}(n,t.rects,c),e},{}),l=u[t.placement],h=l.x,d=l.y
null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=h,t.modifiersData.popperOffsets.y+=d),t.modifiersData[i]=u}},Ee={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name
t.modifiersData[n]=ge({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},Ie={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,a=e.name,c=n.mainAxis,l=void 0===c||c,h=n.altAxis,d=void 0!==h&&h,f=n.boundary,p=n.rootBoundary,m=n.altBoundary,g=n.padding,y=n.tether,v=void 0===y||y,b=n.tetherOffset,w=void 0===b?0:b,_=ye(t,{boundary:f,rootBoundary:p,padding:g,altBoundary:m}),S=O(t.placement),E=Z(t.placement),I=!E,T=H(S),A="x"===T?"y":"x",C=t.modifiersData.popperOffsets,k=t.rects.reference,x=t.rects.popper,D="function"==typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,R="number"==typeof D?{mainAxis:D,altAxis:D}:Object.assign({mainAxis:0,altAxis:0},D),N=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,F={x:0,y:0}
if(C){if(l){var L,j="y"===T?r:o,q="y"===T?i:s,B="y"===T?"height":"width",U=C[T],$=U+_[j],z=U-_[q],G=v?-x[B]/2:0,K=E===u?k[B]:x[B],J=E===u?-x[B]:-k[B],Y=t.elements.arrow,X=v&&Y?V(Y):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[j],ne=ee[q],re=Q(0,k[B],X[B]),ie=I?k[B]/2-G-re-te-R.mainAxis:K-re-te-R.mainAxis,se=I?-k[B]/2+G+re+ne+R.mainAxis:J+re+ne+R.mainAxis,oe=t.elements.arrow&&W(t.elements.arrow),ae=oe?"y"===T?oe.clientTop||0:oe.clientLeft||0:0,ce=null!=(L=null==N?void 0:N[T])?L:0,ue=U+se-ce,le=Q(v?P($,U+ie-ce-ae):$,U,v?M(z,ue):z)
C[T]=le,F[T]=le-U}if(d){var he,de="x"===T?r:o,fe="x"===T?i:s,pe=C[A],me="y"===A?"height":"width",ge=pe+_[de],ve=pe-_[fe],be=-1!==[r,o].indexOf(S),we=null!=(he=null==N?void 0:N[A])?he:0,_e=be?ge:pe-k[me]-x[me]-we+R.altAxis,Se=be?pe+k[me]+x[me]-we-R.altAxis:ve,Ee=v&&be?function(e,t,n){var r=Q(e,t,n)
return r>n?n:r}(_e,pe,Se):Q(v?_e:ge,pe,v?Se:ve)
C[A]=Ee,F[A]=Ee-pe}t.modifiersData[a]=F}},requiresIfExists:["offset"]}
function Te(e,t,n){void 0===n&&(n=!1)
var r,i,s=D(t),o=D(t)&&function(e){var t=e.getBoundingClientRect(),n=F(t.width)/e.offsetWidth||1,r=F(t.height)/e.offsetHeight||1
return 1!==n||1!==r}(t),a=z(t),c=q(e,o,n),u={scrollLeft:0,scrollTop:0},l={x:0,y:0}
return(s||!s&&!n)&&(("body"!==C(t)||he(a))&&(u=(r=t)!==k(r)&&D(r)?{scrollLeft:(i=r).scrollLeft,scrollTop:i.scrollTop}:ue(r)),D(t)?((l=q(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=le(a))),{x:c.left+u.scrollLeft-l.x,y:c.top+u.scrollTop-l.y,width:c.width,height:c.height}}function Ae(e){var t=new Map,n=new Set,r=[]
function i(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){if(!n.has(e)){var r=t.get(e)
r&&i(r)}}),r.push(e)}return e.forEach(function(e){t.set(e.name,e)}),e.forEach(function(e){n.has(e.name)||i(e)}),r}var Ce={placement:"bottom",modifiers:[],strategy:"absolute"}
function ke(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}function xe(e){void 0===e&&(e={})
var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,s=void 0===i?Ce:i
return function(e,t,n){void 0===n&&(n=s)
var i,o,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ce,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,l={state:a,setOptions:function(n){var i="function"==typeof n?n(a.options):n
h(),a.options=Object.assign({},s,a.options,i),a.scrollParents={reference:x(e)?fe(e):e.contextElement?fe(e.contextElement):[],popper:fe(t)}
var o,u,d=function(e){var t=Ae(e)
return A.reduce(function(e,n){return e.concat(t.filter(function(e){return e.phase===n}))},[])}((o=[].concat(r,a.options.modifiers),u=o.reduce(function(e,t){var n=e[t.name]
return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{}),Object.keys(u).map(function(e){return u[e]})))
return a.orderedModifiers=d.filter(function(e){return e.enabled}),a.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect
if("function"==typeof i){var s=i({state:a,name:t,instance:l,options:r})
c.push(s||function(){})}}),l.update()},forceUpdate:function(){if(!u){var e=a.elements,t=e.reference,n=e.popper
if(ke(t,n)){a.rects={reference:Te(t,W(n),"fixed"===a.options.strategy),popper:V(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach(function(e){return a.modifiersData[e.name]=Object.assign({},e.data)})
for(var r=0;r<a.orderedModifiers.length;r++)if(!0!==a.reset){var i=a.orderedModifiers[r],s=i.fn,o=i.options,c=void 0===o?{}:o,h=i.name
"function"==typeof s&&(a=s({state:a,options:c,name:h,instance:l})||a)}else a.reset=!1,r=-1}}},update:(i=function(){return new Promise(function(e){l.forceUpdate(),e(a)})},function(){return o||(o=new Promise(function(e){Promise.resolve().then(function(){o=void 0,e(i())})})),o}),destroy:function(){h(),u=!0}}
if(!ke(e,t))return l
function h(){c.forEach(function(e){return e()}),c=[]}return l.setOptions(n).then(function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)}),l}}var De=xe(),Re=xe({defaultModifiers:[ie,Ee,ne,N,Se,ve,Ie,X,_e]}),Ne=xe({defaultModifiers:[ie,Ee,ne,N]})},7895:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>l,random:()=>u})
var r=n(1389),i=n(336)
const{min:s,max:o}=Math,a=20,c={decimals:0}
function u(e,{decimals:t}=c){if("object"==typeof e&&!(0,r.isArray)(e))return t=void 0!==e.decimals?e.decimals:c.decimals,+Math.random().toFixed(o(0,s(a,t)))
if(e&&1===e.length){const[n]=e
if("number"==typeof n)return+(Math.random()*n).toFixed(o(0,s(a,t??0)))}if(e&&2===e.length){let[n,r]=e
if("number"==typeof r&&"number"==typeof n)return r<n&&([n,r]=[r,n]),+(n+Math.random()*(r-n)).toFixed(o(0,s(a,t??0)))}return+Math.random().toFixed(o(0,s(a,t??0)))}var l=(0,i.helper)(u)},7910:(e,t,n)=>{"use strict"
n.d(t,{F:()=>p,S:()=>f,a:()=>u,b:()=>c,c:()=>d,i:()=>l,n:()=>h,u:()=>v})
var r=n(1274),i=n(1603),s=n(6082),o=n(7375),a=n(3193)
class c{constructor(e,t,n={}){this.__store=e,this._snapshots=null,this.modelName=t,this.adapterOptions=n.adapterOptions,this.include=n.include}get _recordArray(){return this.__store.peekAll(this.modelName)}get length(){return this._recordArray.length}snapshots(){if(null!==this._snapshots)return this._snapshots
this.__store
const{_fetchManager:e}=this.__store
return this._snapshots=this._recordArray[r.u2].map(t=>e.createSnapshot(t)),this._snapshots}}function u(e){}function l(e,t){return Array.isArray(e)?e.map(t):t(e,0)}function h(e,t,n,r,i,s){return e?e.normalizeResponse(t,n,r,i,s):r}class d{constructor(e,t,n){this._store=n,this.__attributes=null,this._belongsToRelationships=Object.create(null),this._belongsToIds=Object.create(null),this._hasManyRelationships=Object.create(null),this._hasManyIds=Object.create(null)
const r=!!n._instanceCache.peek(t)
if(this.modelName=t.type,this.identifier=t,r&&this._attributes,this.id=t.id,this.adapterOptions=e.adapterOptions,this.include=e.include,this.modelName=t.type,r){const e=this._store.cache
this._changedAttributes=e.changedAttrs(t)}}get record(){return this._store.peekRecord(this.identifier)}get _attributes(){if(null!==this.__attributes)return this.__attributes
const e=this.__attributes=Object.create(null),{identifier:t}=this,n=this._store.schema.fields(t),r=this._store.cache
return n.forEach((n,i)=>{"attribute"===n.kind&&(e[i]=r.getAttr(t,i))}),e}get isNew(){const e=this._store.cache
return e?.isNew(this.identifier)||!1}attr(e){if(e in this._attributes)return this._attributes[e]}attributes(){return{...this._attributes}}changedAttributes(){const e=Object.create(null)
if(!this._changedAttributes)return e
const t=Object.keys(this._changedAttributes)
for(let n=0,r=t.length;n<r;n++){const r=t[n]
e[r]=this._changedAttributes[r].slice()}return e}belongsTo(e,t){const r=!(!t||!t.id)
let i
const s=this._store
if(!0===r&&e in this._belongsToIds)return this._belongsToIds[e]
if(!1===r&&e in this._belongsToRelationships)return this._belongsToRelationships[e]
s.schema.fields({type:this.modelName}).get(e)
const o=(0,a.A)(n(151)).graphFor,{identifier:c}=this,u=o(this._store).getData(c,e),l=u&&u.data,h=l?s.identifierCache.getOrCreateRecordIdentifier(l):null
if(u&&void 0!==u.data){const e=s.cache
i=h&&!e.isDeleted(h)?r?h.id:s._fetchManager.createSnapshot(h):null}return r?this._belongsToIds[e]=i:this._belongsToRelationships[e]=i,i}hasMany(e,t){const r=!(!t||!t.ids)
let i
const s=this._hasManyIds[e],o=this._hasManyRelationships[e]
if(!0===r&&e in this._hasManyIds)return s
if(!1===r&&e in this._hasManyRelationships)return o
const c=this._store,u=(c.schema.fields({type:this.modelName}).get(e),(0,a.A)(n(151)).graphFor),{identifier:l}=this,h=u(this._store).getData(l,e)
return h.data&&(i=[],h.data.forEach(e=>{const t=c.identifierCache.getOrCreateRecordIdentifier(e)
c.cache.isDeleted(t)||(r?i.push(t.id):i.push(c._fetchManager.createSnapshot(t)))})),r?this._hasManyIds[e]=i:this._hasManyRelationships[e]=i,i}eachAttribute(e,t){this._store.schema.fields(this.identifier).forEach((n,r)=>{"attribute"===n.kind&&e.call(t,r,n)})}eachRelationship(e,t){this._store.schema.fields(this.identifier).forEach((n,r)=>{"belongsTo"!==n.kind&&"hasMany"!==n.kind||e.call(t,r,n)})}serialize(e){return this._store,this._store.serializerFor(this.modelName).serialize(this,e)}}const f=(0,o.L1)("SaveOp",Symbol("SaveOp"))
class p{constructor(e){this._store=e,this._pendingFetch=new Map,this.requestCache=e.getRequestStateService(),this.isDestroyed=!1}createSnapshot(e,t={}){return new d(t,e,this._store)}scheduleSave(e,t){const n=(0,s.ud)(),r={data:[{op:"saveRecord",recordIdentifier:e,options:t}]},i={snapshot:this.createSnapshot(e,t),resolver:n,identifier:e,options:t,queryRequest:r},o=this.requestCache._enqueue(n.promise,i.queryRequest)
return function(e,t){const{snapshot:n,resolver:r,identifier:i,options:s}=t,o=e.adapterFor(i.type),a=s[f],c=n.modelName,u=e.modelFor(c)
let l=Promise.resolve().then(()=>o[a](e,u,n))
const d=e.serializerFor(c)
l=l.then(t=>{if(t)return h(d,e,u,t,n.id,a)}),r.resolve(l)}(this._store,i),o}scheduleFetch(e,t,r){const i={data:[{op:"findRecord",recordIdentifier:e,options:t}]},o=this.getPendingFetch(e,t)
if(o)return o
const c=e.type,u=(0,s.ud)(),l={identifier:e,resolver:u,options:t,queryRequest:i},h=u.promise,d=this._store,f=!d._instanceCache.recordIsLoaded(e)
let p=this.requestCache._enqueue(h,l.queryRequest).then(n=>{n.data&&!Array.isArray(n.data)&&(n.data.lid=e.lid)
const r=d._push(n,t.reload)
return r&&!Array.isArray(r)?r:e},t=>{const r=d.cache
if(!r||r.isEmpty(e)||f){let t=!0
if(!r){const r=(0,(0,a.A)(n(151)).graphFor)(d)
t=r.isReleasable(e),t||r.unload(e,!0)}(r||t)&&(d._enableAsyncFlush=!0,d._instanceCache.unloadRecord(e),d._enableAsyncFlush=null)}throw t})
0===this._pendingFetch.size&&new Promise(e=>setTimeout(e,0)).then(()=>{this.flushAllPendingFetches()})
const m=this._pendingFetch
let g=m.get(c)
g||(g=new Map,m.set(c,g))
let y=g.get(e)
return y||(y=[],g.set(e,y)),y.push(l),l.promise=p,p}getPendingFetch(e,t){const n=this._pendingFetch.get(e.type)?.get(e)
if(n){const e=n.find(e=>function(e={},t={}){return n=e.adapterOptions,r=t.adapterOptions,(!n||n===r||0===Object.keys(n).length)&&function(e,t){if(!e?.length)return!0
if(!t?.length)return!1
const n=(Array.isArray(e)?e:e.split(",")).sort(),r=(Array.isArray(t)?t:t.split(",")).sort()
if(n.join(",")===r.join(","))return!0
for(let i=0;i<n.length;i++)if(!r.includes(n[i]))return!1
return!0}(e.include,t.include)
var n,r}(t,e.options))
if(e)return e.promise}}flushAllPendingFetches(){if(this.isDestroyed)return
const e=this._store
this._pendingFetch.forEach((t,n)=>function(e,t,n){const r=e.adapterFor(n)
if(r.findMany&&r.coalesceFindRequests){const i=[]
t.forEach((e,n)=>{e.length>1||(t.delete(n),i.push(e[0]))})
const s=i.length
if(s>1){const t=new Array(s),o=new Map
for(let n=0;n<s;n++){const r=i[n]
t[n]=e._fetchManager.createSnapshot(r.identifier,r.options),o.set(t[n],r)}let a
a=r.groupRecordsForFindMany?r.groupRecordsForFindMany(e,t):[t]
for(let i=0,s=a.length;i<s;i++)y(e,o,a[i],r,n)}else 1===s&&g(e,r,i[0])}t.forEach(t=>{t.forEach(t=>{g(e,r,t)})})}(e,t,n)),this._pendingFetch.clear()}fetchDataIfNeededForIdentifier(e,t={},n){const r=function(e,t){const n=e.cache
if(!n)return!0
const r=n.isNew(t),i=n.isDeleted(t),s=n.isEmpty(t)
return(!r||i)&&s}(this._store._instanceCache,e),i=function(e,t){const n=e.store.getRequestStateService()
return!e.recordIsLoaded(t)&&n.getPendingRequestsForRecord(t).some(e=>"query"===e.type)}(this._store._instanceCache,e)
let s
return r?(t.reload=!0,s=this.scheduleFetch(e,t,n)):s=i?this.getPendingFetch(e,t):Promise.resolve(e),s}destroy(){this.isDestroyed=!0}}function m(e,t,n){for(let r=0,i=t.length;r<i;r++){const i=t[r],s=e.get(i)
s&&s.resolver.reject(n||new Error(`Expected: '<${i.modelName}:${i.id}>' to be present in the adapter provided payload, but it was not found.`))}}function g(e,t,n){const s=n.identifier,o=s.type,a=e._fetchManager.createSnapshot(s,n.options),c=e.modelFor(s.type),u=s.id
let l=Promise.resolve().then(()=>t.findRecord(e,c,s.id,a))
l=l.then(t=>{const n=h(e.serializerFor(o),e,c,t,u,"findRecord")
return(0,i.warn)(`You requested a record of type '${o}' with id '${u}' but the adapter returned a payload with primary data having an id of '${n.data.id}'. Use 'store.findRecord()' when the requested id is the same as the one returned by the adapter. In other cases use 'store.queryRecord()' instead.`,(0,r.pG)(n.data.id)===(0,r.pG)(u),{id:"ds.store.findRecord.id-mismatch"}),n}),n.resolver.resolve(l)}function y(e,t,n,r,s){n.length>1?function(e,t,n,r){const i=e.modelFor(n)
return Promise.resolve().then(()=>{const n=r.map(e=>e.id)
return t.findMany(e,i,n,r)}).then(t=>h(e.serializerFor(n),e,i,t,null,"findMany"))}(e,r,s,n).then(r=>{!function(e,t,n,r){const s=new Map
for(let i=0;i<n.length;i++){const e=n[i].id
let t=s.get(e)
t||(t=[],s.set(e,t)),t.push(n[i])}const o=Array.isArray(r.included)?r.included:[],a=r.data
for(let i=0,u=a.length;i<u;i++){const e=a[i],n=s.get(e.id)
s.delete(e.id),n?n.forEach(n=>{t.get(n).resolver.resolve({data:e})}):o.push(e)}if(o.length>0&&e._push({data:null,included:o},!0),0===s.size)return
const c=[]
s.forEach(e=>{c.push(...e)}),(0,i.warn)('Ember Data expected to find records with the following ids in the adapter response from findMany but they were missing: [ "'+[...s.values()].map(e=>e[0].id).join('", "')+'" ]',{id:"ds.store.missing-records-from-adapter"}),m(t,c)}(e,t,n,r)}).catch(e=>{m(t,n,e)}):1===n.length&&g(e,r,t.get(n[0]))}function v(e){}},8140:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(3797),i=n(1918),s=n(1202),o=n(129)
n(1843)
const a="analytics",c="https://www.googletagmanager.com/gtag/js",u=new i.Logger("@firebase/analytics"),l=new s.ErrorFactory("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."})
function h(e){if(!e.startsWith(c)){const t=l.create("invalid-gtag-resource",{gtagURL:e})
return u.warn(t.message),""}return e}function d(e){return Promise.all(e.map(e=>e.catch(e=>e)))}const f=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}
function p(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function m(e,t=f,n){const{appId:r,apiKey:i,measurementId:s}=e.options
if(!r)throw l.create("no-app-id")
if(!i){if(s)return{measurementId:s,appId:r}
throw l.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new y
return setTimeout(async()=>{a.abort()},void 0!==n?n:6e4),g({appId:r,apiKey:i,measurementId:s},o,a,t)}async function g(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=f){const{appId:o,measurementId:a}=e
try{await function(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i)
e.addEventListener(()=>{clearTimeout(s),r(l.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}(r,t)}catch(e){if(a)return u.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${e?.message}]`),{appId:o,measurementId:a}
throw e}try{const t=await async function(e){const{appId:t,apiKey:n}=e,r={method:"GET",headers:p(n)},i="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",t),s=await fetch(i,r)
if(200!==s.status&&304!==s.status){let t=""
try{const e=await s.json()
e.error?.message&&(t=e.error.message)}catch(e){}throw l.create("config-fetch-failed",{httpStatus:s.status,responseMessage:t})}return s.json()}(e)
return i.deleteThrottleMetadata(o),t}catch(t){const c=t
if(!function(e){if(!(e instanceof s.FirebaseError&&e.customData))return!1
const t=Number(e.customData.httpStatus)
return 429===t||500===t||503===t||504===t}(c)){if(i.deleteThrottleMetadata(o),a)return u.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:o,measurementId:a}
throw t}const l=503===Number(c?.customData?.httpStatus)?s.calculateBackoffMillis(n,i.intervalMillis,30):s.calculateBackoffMillis(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1}
return i.setThrottleMetadata(o,h),u.debug(`Calling attemptFetch again in ${l} millis`),g(e,h,r,i)}}class y{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}let v,b
function w(e){b=e}function _(e){v=e}class S{constructor(e){this.app=e}_delete(){return delete E[this.app.options.appId],Promise.resolve()}}let E={},I=[]
const T={}
let A,C,k="dataLayer",x="gtag",D=!1
function R(e,t,n){!function(){const e=[]
if(s.isBrowserExtension()&&e.push("This is a browser extension environment."),s.areCookiesEnabled()||e.push("Cookies are not available."),e.length>0){const t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=l.create("invalid-analytics-context",{errorInfo:t})
u.warn(n.message)}}()
const r=e.options.appId
if(!r)throw l.create("no-app-id")
if(!e.options.apiKey){if(!e.options.measurementId)throw l.create("no-api-key")
u.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=E[r])throw l.create("already-exists",{id:r})
if(!D){!function(e){let t=[]
Array.isArray(window[e])?t=window[e]:window[e]=t}(k)
const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let s=function(...e){window[r].push(arguments)}
return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=function(e,t,n,r){return async function(i,...s){try{if("event"===i){const[r,i]=s
await async function(e,t,n,r,i){try{let s=[]
if(i&&i.send_to){let e=i.send_to
Array.isArray(e)||(e=[e])
const r=await d(n)
for(const n of e){const e=r.find(e=>e.measurementId===n),i=e&&t[e.appId]
if(!i){s=[]
break}s.push(i)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(e){u.error(e)}}(e,t,n,r,i)}else if("config"===i){const[i,o]=s
await async function(e,t,n,r,i,s){const o=r[i]
try{if(o)await t[o]
else{const e=(await d(n)).find(e=>e.measurementId===i)
e&&await t[e.appId]}}catch(e){u.error(e)}e("config",i,s)}(e,t,n,r,i,o)}else if("consent"===i){const[t,n]=s
e("consent",t,n)}else if("get"===i){const[t,n,r]=s
e("get",t,n,r)}else if("set"===i){const[t]=s
e("set",t)}else e(i,...s)}catch(e){u.error(e)}}}(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}(E,I,T,k,x)
C=e,A=t,D=!0}return E[r]=async function(e,t,n,r,i,o,a){const d=m(e)
d.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&u.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>u.error(e)),t.push(d)
const f=async function(){if(!s.isIndexedDBAvailable())return u.warn(l.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1
try{await s.validateIndexedDBOpenable()}catch(e){return u.warn(l.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}return!0}().then(e=>e?r.getId():void 0),[p,g]=await Promise.all([d,f]);(function(e){const t=window.document.getElementsByTagName("script")
for(const n of Object.values(t))if(n.src&&n.src.includes(c)&&n.src.includes(e))return n
return null})(o)||function(e,t){const n=function(e,t){let n
return window.trustedTypes&&(n=window.trustedTypes.createPolicy("firebase-js-sdk-policy",t)),n}(0,{createScriptURL:h}),r=document.createElement("script"),i=`${c}?l=${e}&id=${t}`
r.src=n?n?.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}(o,p.measurementId),b&&(i("consent","default",b),w(void 0)),i("js",new Date)
const y=a?.config??{}
return y.origin="firebase",y.update=!0,null!=g&&(y.firebase_id=g),i("config",p.measurementId,y),v&&(i("set",v),_(void 0)),p.measurementId}(e,I,T,t,A,k,n),new S(e)}function N(e,t={}){const n=r._getProvider(e,a)
if(n.isInitialized()){const e=n.getImmediate()
if(s.deepEqual(t,n.getOptions()))return e
throw l.create("already-initialized")}return n.initialize({options:t})}function O(e,t,n){e=s.getModularInstance(e),async function(e,t,n,r){if(r&&r.global){const t={}
for(const e of Object.keys(n))t[`user_properties.${e}`]=n[e]
return e("set",t),Promise.resolve()}e("config",await t,{update:!0,user_properties:n})}(C,E[e.app.options.appId],t,n).catch(e=>u.error(e))}function M(e,t,n,r){e=s.getModularInstance(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r)
else{const i=await t
e("event",n,{...r,send_to:i})}}(C,E[e.app.options.appId],t,n,r).catch(e=>u.error(e))}const P="@firebase/analytics",F="0.10.19"
r._registerComponent(new o.Component(a,(e,{options:t})=>R(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),r._registerComponent(new o.Component("analytics-internal",function(e){try{const t=e.getProvider(a).getImmediate()
return{logEvent:(e,n,r)=>M(t,e,n,r),setUserProperties:(e,n)=>O(t,e,n)}}catch(e){throw l.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),r.registerVersion(P,F),r.registerVersion(P,F,"cjs2020"),t.getAnalytics=function(e=r.getApp()){e=s.getModularInstance(e)
const t=r._getProvider(e,a)
return t.isInitialized()?t.getImmediate():N(e)},t.getGoogleAnalyticsClientId=async function(e){return e=s.getModularInstance(e),async function(e,t){const n=await t
return new Promise((t,r)=>{e("get",n,"client_id",e=>{e||r(l.create("no-client-id")),t(e)})})}(C,E[e.app.options.appId])},t.initializeAnalytics=N,t.isSupported=async function(){if(s.isBrowserExtension())return!1
if(!s.areCookiesEnabled())return!1
if(!s.isIndexedDBAvailable())return!1
try{return await s.validateIndexedDBOpenable()}catch(e){return!1}},t.logEvent=M,t.setAnalyticsCollectionEnabled=function(e,t){e=s.getModularInstance(e),async function(e,t){const n=await e
window[`ga-disable-${n}`]=!t}(E[e.app.options.appId],t).catch(e=>u.error(e))},t.setConsent=function(e){C?C("consent","update",e):w(e)},t.setCurrentScreen=function(e,t,n){e=s.getModularInstance(e),async function(e,t,n,r){if(r&&r.global)return e("set",{screen_name:n}),Promise.resolve()
e("config",await t,{update:!0,screen_name:n})}(C,E[e.app.options.appId],t,n).catch(e=>u.error(e))},t.setDefaultEventParameters=function(e){C?C("set",e):_(e)},t.setUserId=function(e,t,n){e=s.getModularInstance(e),async function(e,t,n,r){if(r&&r.global)return e("set",{user_id:n}),Promise.resolve()
e("config",await t,{update:!0,user_id:n})}(C,E[e.app.options.appId],t,n).catch(e=>u.error(e))},t.setUserProperties=O,t.settings=function(e){if(D)throw l.create("already-initialized")
e.dataLayerName&&(k=e.dataLayerName),e.gtagName&&(x=e.gtagName)}},8146:(e,t,n)=>{"use strict"
n.d(t,{B1:()=>u,Fe:()=>h,Ly:()=>p,RH:()=>l,eM:()=>b,n5:()=>g,sg:()=>f,vh:()=>v,zs:()=>m})
var r=n(4463),i=n(394),s=n(5606),o=n(7375)
function a(e){e&&(0,s.consumeTag)(e)}function c(e){e&&(0,s.dirtyTag)(e)}function u(e){const t=(0,o.Yj)("TRANSACTION")
t?t.sub.add(e):"tag"in e?(a(e["[]"]),a(e["@length"]),(0,s.consumeTag)(e.tag)):e.ref}function l(e){const t=(0,o.Yj)("TRANSACTION")
t?t.props.add(e):function(e){"tag"in e?(c(e["[]"]),c(e["@length"]),(0,s.dirtyTag)(e.tag)):e.ref=null}(e)}function h(e){const t=(0,o.Yj)("TRANSACTION")
t?t.cbs.add(e):e()}const d=(0,o.L1)("Signals",Symbol("Signals"))
function f(e,t,n){Object.defineProperty(e,t,{enumerable:!0,configurable:!1,get(){const e=this[d]=this[d]||new Map,r=e.has(t),i=function(e,t,n){let r=e.get(n)
return r||(r=g(t,n),e.set(n,r)),u(r),r}(e,this,t)
return r||void 0===n||(i.lastValue=n),i.lastValue},set(e){const n=this[d]=this[d]||new Map
let r=n.get(t)
r||(r=g(this,t),n.set(t,r)),r.lastValue!==e&&(r.lastValue=e,l(r))}})}function p(e,t,n){const r=Object.assign({enumerable:!0,configurable:!1},v(0,t,n))
Object.defineProperty(e,t,r)}function m(e,t){t["[]"]=(0,r.tagForProperty)(e,"[]"),t["@length"]=(0,r.tagForProperty)(e,"length")}function g(e,t){return{key:t,tag:(0,r.tagForProperty)(e,t),reason:null,t:!1,shouldReset:!1,"[]":null,"@length":null,lastValue:void 0}}function y(e,t,n){let r=e[d]
r||(r=new Map,e[d]=r)
let i=r.get(t)
return i||(i=g(e,t),i.shouldReset=n,r.set(t,i)),i}function v(e,t,n){const r=n.get,s=n.set
return n.get=function(){const e=y(this,t,!0)
return u(e),e.shouldReset&&(e.shouldReset=!1,e.lastValue=r.call(this)),e.lastValue},n.set=function(e){y(this,t,!0),s.call(this,e)},(0,i.dependentKeyCompat)(n),n}function b(e,t){const n=function(e,t){const n=e[d]
if(n)return n.get(t)}(e,t)
n&&(n.shouldReset=!0,l(n))}},8411:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{ModuleRegistry:()=>g,default:()=>y})
class r{constructor(e,t,n){this.limit=e,this.func=t,this.store=n,this.size=0,this.misses=0,this.hits=0,this.store=n||new Map}get(e){let t=this.store.get(e)
return this.store.has(e)?(this.hits++,this.store.get(e)):(this.misses++,t=this.set(e,this.func(e)),t)}set(e,t){return this.limit>this.size&&(this.size++,this.store.set(e,t)),t}purge(){this.store.clear(),this.size=0,this.hits=0,this.misses=0}}const i=/[ _]/g,s=new r(1e3,e=>{return(t=e,p.get(t)).replace(i,"-")
var t}),o=/^(\-|_)+(.)?/,a=/(.)(\-|\_|\.|\s)+(.)?/g,c=/(^|\/|\.)([a-z])/g,u=new r(1e3,e=>{const t=(e,t,n)=>n?`_${n.toUpperCase()}`:"",n=(e,t,n,r)=>t+(r?r.toUpperCase():""),r=e.split("/")
for(let i=0;i<r.length;i++)r[i]=r[i].replace(o,t).replace(a,n)
return r.join("/").replace(c,e=>e.toUpperCase())}),l=/([a-z\d])([A-Z]+)/g,h=/\-|\s+/g,d=new r(1e3,e=>e.replace(l,"$1_$2").replace(h,"_").toLowerCase()),f=/([a-z\d])([A-Z])/g,p=new r(1e3,e=>e.replace(f,"$1_$2").toLowerCase())
function m(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class g{constructor(e){this._entries=e||globalThis.requirejs.entries}moduleNames(){return Object.keys(this._entries)}has(e){return e in this._entries}get(...e){return globalThis.require(...e)}}class y{static create(e){return new this(e)}static withModules(e){var t
return m(t=class extends(this){},"explicitModules",e),t}constructor(e){if(m(this,"moduleBasedResolver",!0),m(this,"_deprecatedPodModulePrefix",!1),m(this,"_normalizeCache",Object.create(null)),m(this,"moduleNameLookupPatterns",[this.podBasedModuleName,this.podBasedComponentsInSubdir,this.mainModuleName,this.defaultModuleName,this.nestedColocationComponentModuleName]),Object.assign(this,e),!this._moduleRegistry){let e=this.constructor.explicitModules
e?this._moduleRegistry={moduleNames:()=>Object.keys(e),has:t=>Boolean(e[t]),get:t=>e[t],addModules(t){e=Object.assign({},e,t)}}:(void 0===globalThis.requirejs.entries&&(globalThis.requirejs.entries=globalThis.requirejs._eak_seen),this._moduleRegistry=new g)}this.pluralizedTypes=this.pluralizedTypes||Object.create(null),this.pluralizedTypes.config||(this.pluralizedTypes.config="config")}makeToString(e,t){return this.namespace.modulePrefix+"@"+t+":"}shouldWrapInClassFactory(){return!1}parseName(e){if(!0===e.parsedName)return e
let t,n,r,i=e.split("@")
if(3===i.length){if(0===i[0].length){t=`@${i[1]}`
let e=i[2].split(":")
n=e[0],r=e[1]}else t=`@${i[1]}`,n=i[0].slice(0,-1),r=i[2]
"template:components"===n&&(r=`components/${r}`,n="template")}else if(2===i.length){let e=i[0].split(":")
if(2===e.length)0===e[1].length?(n=e[0],r=`@${i[1]}`):(t=e[1],n=e[0],r=i[1])
else{let e=i[1].split(":")
t=i[0],n=e[0],r=e[1]}"template"===n&&0===t.lastIndexOf("components/",0)&&(r=`components/${r}`,t=t.slice(11))}else i=e.split(":"),n=i[0],r=i[1]
let s=r,o=this.namespace
return{parsedName:!0,fullName:e,prefix:t||this.prefix({type:n}),type:n,fullNameWithoutType:s,name:r,root:o,resolveMethodName:"resolve"+(a=n,u.get(a))}
var a}resolveOther(e){v("`modulePrefix` must be defined",this.namespace.modulePrefix)
let t=this.findModuleName(e)
if(t){let r=this._extractDefaultExport(t,e)
if(void 0===r)throw new Error(` Expected to find: '${e.fullName}' within '${t}' but got 'undefined'. Did you forget to 'export default' within '${t}'?`)
return this.shouldWrapInClassFactory(r,e)&&(n=r,r={create:e=>"function"==typeof n.extend?n.extend(e):n}),r}var n}normalize(e){return this._normalizeCache[e]||(this._normalizeCache[e]=this._normalize(e))}resolve(e){if("resolver:current"===e)return{create:()=>this}
let t,n=this.parseName(e),r=n.resolveMethodName
return"function"==typeof this[r]&&(t=this[r](n)),null==t&&(t=this.resolveOther(n)),t}addModules(e){if(!this._moduleRegistry.addModules)throw new Error("addModules is only supported when your Resolver has been configured to use static modules via Resolver.withModules()")
this._moduleRegistry.addModules(e)}_normalize(e){let t=e.split(":")
if(t.length>1){let e=t[0]
return"component"===e||"helper"===e||"modifier"===e||"template"===e&&0===t[1].indexOf("components/")?e+":"+t[1].replace(/_/g,"-"):e+":"+(n=t[1].replace(/\./g,"/"),s.get(n))}return e
var n}pluralize(e){return this.pluralizedTypes[e]||(this.pluralizedTypes[e]=e+"s")}podBasedLookupWithPrefix(e,t){let n=t.fullNameWithoutType
return"template"===t.type&&(n=n.replace(/^components\//,"")),e+"/"+n+"/"+t.type}podBasedModuleName(e){let t=this.namespace.podModulePrefix||this.namespace.modulePrefix
return this.podBasedLookupWithPrefix(t,e)}podBasedComponentsInSubdir(e){let t=this.namespace.podModulePrefix||this.namespace.modulePrefix
if(t+="/components","component"===e.type||/^components/.test(e.fullNameWithoutType))return this.podBasedLookupWithPrefix(t,e)}resolveEngine(e){let t=e.fullNameWithoutType+"/engine"
if(this._moduleRegistry.has(t))return this._extractDefaultExport(t)}resolveRouteMap(e){let t=e.fullNameWithoutType,n=t+"/routes"
if(this._moduleRegistry.has(n)){let e=this._extractDefaultExport(n)
return v(`The route map for ${t} should be wrapped by 'buildRoutes' before exporting.`,e.isRouteMap),e}}resolveTemplate(e){return this.resolveOther(e)}mainModuleName(e){if("main"===e.fullNameWithoutType)return e.prefix+"/"+e.type}defaultModuleName(e){return e.prefix+"/"+this.pluralize(e.type)+"/"+e.fullNameWithoutType}nestedColocationComponentModuleName(e){if("component"===e.type)return e.prefix+"/"+this.pluralize(e.type)+"/"+e.fullNameWithoutType+"/index"}prefix(e){let t=this.namespace.modulePrefix
return this.namespace[e.type+"Prefix"]&&(t=this.namespace[e.type+"Prefix"]),t}findModuleName(e){let t,n=this.moduleNameLookupPatterns
for(let r=0,i=n.length;r<i;r++){let i=n[r].call(this,e)
if(i&&(i=this.chooseModuleName(i)),i&&this._moduleRegistry.has(i)&&(t=i),t)return t}}chooseModuleName(e){let t=(n=e,d.get(n))
var n
if(e!==t&&this._moduleRegistry.has(e)&&this._moduleRegistry.has(t))throw new TypeError(`Ambiguous module names: '${e}' and '${t}'`)
return this._moduleRegistry.has(e)?e:this._moduleRegistry.has(t)?t:void 0}knownForType(e){let t=this._moduleRegistry.moduleNames(),n=Object.create(null)
for(let r=0,i=t.length;r<i;r++){let i=t[r],s=this.translateToContainerFullname(e,i)
s&&(n[s]=!0)}return n}translateToContainerFullname(e,t){let n=this.prefix({type:e}),r=n+"/",i="/"+e,s=t.indexOf(r),o=t.indexOf(i)
if(0===s&&o===t.length-i.length&&t.length>r.length+i.length)return e+":"+t.slice(s+r.length,o)
let a=n+"/"+this.pluralize(e)+"/"
return 0===t.indexOf(a)&&t.length>a.length?e+":"+t.slice(a.length):void 0}_extractDefaultExport(e){let t=this._moduleRegistry.get(e,null,null,!0)
return t&&t.default&&(t=t.default),t}}function v(e,t){if(!t)throw new Error(e)}m(y,"moduleBasedResolver",!0)},8589:(e,t,n)=>{"use strict"
function r([e]){return Math.cosh(e)}n.r(t),n.d(t,{cosh:()=>r,default:()=>i})
var i=(0,n(336).helper)(r)},8604:function(e){var t
t=function(){"use strict"
function e(e,t){return e(t={exports:{}},t.exports),t.exports}"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self
var t=e(function(e){e.exports&&(e.exports=function(){var e=3,t=4,n=12,r=13,i=16,s=17
function o(e,t){return 55296<=e.charCodeAt(t)&&e.charCodeAt(t)<=56319&&56320<=e.charCodeAt(t+1)&&e.charCodeAt(t+1)<=57343}function a(e,t){void 0===t&&(t=0)
var n=e.charCodeAt(t)
if(55296<=n&&n<=56319&&t<e.length-1){var r=n
return 56320<=(i=e.charCodeAt(t+1))&&i<=57343?1024*(r-55296)+(i-56320)+65536:r}if(56320<=n&&n<=57343&&t>=1){var i=n
return 55296<=(r=e.charCodeAt(t-1))&&r<=56319?1024*(r-55296)+(i-56320)+65536:i}return n}function c(o,a,c){var u=[o].concat(a).concat([c]),l=u[u.length-2],h=c,d=u.lastIndexOf(14)
if(d>1&&u.slice(1,d).every(function(t){return t==e})&&-1==[e,r,s].indexOf(o))return 2
var f=u.lastIndexOf(t)
if(f>0&&u.slice(1,f).every(function(e){return e==t})&&-1==[n,t].indexOf(l))return u.filter(function(e){return e==t}).length%2==1?3:4
if(0==l&&1==h)return 0
if(2==l||0==l||1==l)return 14==h&&a.every(function(t){return t==e})?2:1
if(2==h||0==h||1==h)return 1
if(6==l&&(6==h||7==h||9==h||10==h))return 0
if(!(9!=l&&7!=l||7!=h&&8!=h))return 0
if((10==l||8==l)&&8==h)return 0
if(h==e||15==h)return 0
if(5==h)return 0
if(l==n)return 0
var p=-1!=u.indexOf(e)?u.lastIndexOf(e)-1:u.length-2
return-1!=[r,s].indexOf(u[p])&&u.slice(p+1,-1).every(function(t){return t==e})&&14==h||15==l&&-1!=[i,s].indexOf(h)?0:-1!=a.indexOf(t)?2:l==t&&h==t?0:1}function u(o){return 1536<=o&&o<=1541||1757==o||1807==o||2274==o||3406==o||69821==o||70082<=o&&o<=70083||72250==o||72326<=o&&o<=72329||73030==o?n:13==o?0:10==o?1:0<=o&&o<=9||11<=o&&o<=12||14<=o&&o<=31||127<=o&&o<=159||173==o||1564==o||6158==o||8203==o||8206<=o&&o<=8207||8232==o||8233==o||8234<=o&&o<=8238||8288<=o&&o<=8292||8293==o||8294<=o&&o<=8303||55296<=o&&o<=57343||65279==o||65520<=o&&o<=65528||65529<=o&&o<=65531||113824<=o&&o<=113827||119155<=o&&o<=119162||917504==o||917505==o||917506<=o&&o<=917535||917632<=o&&o<=917759||918e3<=o&&o<=921599?2:768<=o&&o<=879||1155<=o&&o<=1159||1160<=o&&o<=1161||1425<=o&&o<=1469||1471==o||1473<=o&&o<=1474||1476<=o&&o<=1477||1479==o||1552<=o&&o<=1562||1611<=o&&o<=1631||1648==o||1750<=o&&o<=1756||1759<=o&&o<=1764||1767<=o&&o<=1768||1770<=o&&o<=1773||1809==o||1840<=o&&o<=1866||1958<=o&&o<=1968||2027<=o&&o<=2035||2070<=o&&o<=2073||2075<=o&&o<=2083||2085<=o&&o<=2087||2089<=o&&o<=2093||2137<=o&&o<=2139||2260<=o&&o<=2273||2275<=o&&o<=2306||2362==o||2364==o||2369<=o&&o<=2376||2381==o||2385<=o&&o<=2391||2402<=o&&o<=2403||2433==o||2492==o||2494==o||2497<=o&&o<=2500||2509==o||2519==o||2530<=o&&o<=2531||2561<=o&&o<=2562||2620==o||2625<=o&&o<=2626||2631<=o&&o<=2632||2635<=o&&o<=2637||2641==o||2672<=o&&o<=2673||2677==o||2689<=o&&o<=2690||2748==o||2753<=o&&o<=2757||2759<=o&&o<=2760||2765==o||2786<=o&&o<=2787||2810<=o&&o<=2815||2817==o||2876==o||2878==o||2879==o||2881<=o&&o<=2884||2893==o||2902==o||2903==o||2914<=o&&o<=2915||2946==o||3006==o||3008==o||3021==o||3031==o||3072==o||3134<=o&&o<=3136||3142<=o&&o<=3144||3146<=o&&o<=3149||3157<=o&&o<=3158||3170<=o&&o<=3171||3201==o||3260==o||3263==o||3266==o||3270==o||3276<=o&&o<=3277||3285<=o&&o<=3286||3298<=o&&o<=3299||3328<=o&&o<=3329||3387<=o&&o<=3388||3390==o||3393<=o&&o<=3396||3405==o||3415==o||3426<=o&&o<=3427||3530==o||3535==o||3538<=o&&o<=3540||3542==o||3551==o||3633==o||3636<=o&&o<=3642||3655<=o&&o<=3662||3761==o||3764<=o&&o<=3769||3771<=o&&o<=3772||3784<=o&&o<=3789||3864<=o&&o<=3865||3893==o||3895==o||3897==o||3953<=o&&o<=3966||3968<=o&&o<=3972||3974<=o&&o<=3975||3981<=o&&o<=3991||3993<=o&&o<=4028||4038==o||4141<=o&&o<=4144||4146<=o&&o<=4151||4153<=o&&o<=4154||4157<=o&&o<=4158||4184<=o&&o<=4185||4190<=o&&o<=4192||4209<=o&&o<=4212||4226==o||4229<=o&&o<=4230||4237==o||4253==o||4957<=o&&o<=4959||5906<=o&&o<=5908||5938<=o&&o<=5940||5970<=o&&o<=5971||6002<=o&&o<=6003||6068<=o&&o<=6069||6071<=o&&o<=6077||6086==o||6089<=o&&o<=6099||6109==o||6155<=o&&o<=6157||6277<=o&&o<=6278||6313==o||6432<=o&&o<=6434||6439<=o&&o<=6440||6450==o||6457<=o&&o<=6459||6679<=o&&o<=6680||6683==o||6742==o||6744<=o&&o<=6750||6752==o||6754==o||6757<=o&&o<=6764||6771<=o&&o<=6780||6783==o||6832<=o&&o<=6845||6846==o||6912<=o&&o<=6915||6964==o||6966<=o&&o<=6970||6972==o||6978==o||7019<=o&&o<=7027||7040<=o&&o<=7041||7074<=o&&o<=7077||7080<=o&&o<=7081||7083<=o&&o<=7085||7142==o||7144<=o&&o<=7145||7149==o||7151<=o&&o<=7153||7212<=o&&o<=7219||7222<=o&&o<=7223||7376<=o&&o<=7378||7380<=o&&o<=7392||7394<=o&&o<=7400||7405==o||7412==o||7416<=o&&o<=7417||7616<=o&&o<=7673||7675<=o&&o<=7679||8204==o||8400<=o&&o<=8412||8413<=o&&o<=8416||8417==o||8418<=o&&o<=8420||8421<=o&&o<=8432||11503<=o&&o<=11505||11647==o||11744<=o&&o<=11775||12330<=o&&o<=12333||12334<=o&&o<=12335||12441<=o&&o<=12442||42607==o||42608<=o&&o<=42610||42612<=o&&o<=42621||42654<=o&&o<=42655||42736<=o&&o<=42737||43010==o||43014==o||43019==o||43045<=o&&o<=43046||43204<=o&&o<=43205||43232<=o&&o<=43249||43302<=o&&o<=43309||43335<=o&&o<=43345||43392<=o&&o<=43394||43443==o||43446<=o&&o<=43449||43452==o||43493==o||43561<=o&&o<=43566||43569<=o&&o<=43570||43573<=o&&o<=43574||43587==o||43596==o||43644==o||43696==o||43698<=o&&o<=43700||43703<=o&&o<=43704||43710<=o&&o<=43711||43713==o||43756<=o&&o<=43757||43766==o||44005==o||44008==o||44013==o||64286==o||65024<=o&&o<=65039||65056<=o&&o<=65071||65438<=o&&o<=65439||66045==o||66272==o||66422<=o&&o<=66426||68097<=o&&o<=68099||68101<=o&&o<=68102||68108<=o&&o<=68111||68152<=o&&o<=68154||68159==o||68325<=o&&o<=68326||69633==o||69688<=o&&o<=69702||69759<=o&&o<=69761||69811<=o&&o<=69814||69817<=o&&o<=69818||69888<=o&&o<=69890||69927<=o&&o<=69931||69933<=o&&o<=69940||70003==o||70016<=o&&o<=70017||70070<=o&&o<=70078||70090<=o&&o<=70092||70191<=o&&o<=70193||70196==o||70198<=o&&o<=70199||70206==o||70367==o||70371<=o&&o<=70378||70400<=o&&o<=70401||70460==o||70462==o||70464==o||70487==o||70502<=o&&o<=70508||70512<=o&&o<=70516||70712<=o&&o<=70719||70722<=o&&o<=70724||70726==o||70832==o||70835<=o&&o<=70840||70842==o||70845==o||70847<=o&&o<=70848||70850<=o&&o<=70851||71087==o||71090<=o&&o<=71093||71100<=o&&o<=71101||71103<=o&&o<=71104||71132<=o&&o<=71133||71219<=o&&o<=71226||71229==o||71231<=o&&o<=71232||71339==o||71341==o||71344<=o&&o<=71349||71351==o||71453<=o&&o<=71455||71458<=o&&o<=71461||71463<=o&&o<=71467||72193<=o&&o<=72198||72201<=o&&o<=72202||72243<=o&&o<=72248||72251<=o&&o<=72254||72263==o||72273<=o&&o<=72278||72281<=o&&o<=72283||72330<=o&&o<=72342||72344<=o&&o<=72345||72752<=o&&o<=72758||72760<=o&&o<=72765||72767==o||72850<=o&&o<=72871||72874<=o&&o<=72880||72882<=o&&o<=72883||72885<=o&&o<=72886||73009<=o&&o<=73014||73018==o||73020<=o&&o<=73021||73023<=o&&o<=73029||73031==o||92912<=o&&o<=92916||92976<=o&&o<=92982||94095<=o&&o<=94098||113821<=o&&o<=113822||119141==o||119143<=o&&o<=119145||119150<=o&&o<=119154||119163<=o&&o<=119170||119173<=o&&o<=119179||119210<=o&&o<=119213||119362<=o&&o<=119364||121344<=o&&o<=121398||121403<=o&&o<=121452||121461==o||121476==o||121499<=o&&o<=121503||121505<=o&&o<=121519||122880<=o&&o<=122886||122888<=o&&o<=122904||122907<=o&&o<=122913||122915<=o&&o<=122916||122918<=o&&o<=122922||125136<=o&&o<=125142||125252<=o&&o<=125258||917536<=o&&o<=917631||917760<=o&&o<=917999?e:127462<=o&&o<=127487?t:2307==o||2363==o||2366<=o&&o<=2368||2377<=o&&o<=2380||2382<=o&&o<=2383||2434<=o&&o<=2435||2495<=o&&o<=2496||2503<=o&&o<=2504||2507<=o&&o<=2508||2563==o||2622<=o&&o<=2624||2691==o||2750<=o&&o<=2752||2761==o||2763<=o&&o<=2764||2818<=o&&o<=2819||2880==o||2887<=o&&o<=2888||2891<=o&&o<=2892||3007==o||3009<=o&&o<=3010||3014<=o&&o<=3016||3018<=o&&o<=3020||3073<=o&&o<=3075||3137<=o&&o<=3140||3202<=o&&o<=3203||3262==o||3264<=o&&o<=3265||3267<=o&&o<=3268||3271<=o&&o<=3272||3274<=o&&o<=3275||3330<=o&&o<=3331||3391<=o&&o<=3392||3398<=o&&o<=3400||3402<=o&&o<=3404||3458<=o&&o<=3459||3536<=o&&o<=3537||3544<=o&&o<=3550||3570<=o&&o<=3571||3635==o||3763==o||3902<=o&&o<=3903||3967==o||4145==o||4155<=o&&o<=4156||4182<=o&&o<=4183||4228==o||6070==o||6078<=o&&o<=6085||6087<=o&&o<=6088||6435<=o&&o<=6438||6441<=o&&o<=6443||6448<=o&&o<=6449||6451<=o&&o<=6456||6681<=o&&o<=6682||6741==o||6743==o||6765<=o&&o<=6770||6916==o||6965==o||6971==o||6973<=o&&o<=6977||6979<=o&&o<=6980||7042==o||7073==o||7078<=o&&o<=7079||7082==o||7143==o||7146<=o&&o<=7148||7150==o||7154<=o&&o<=7155||7204<=o&&o<=7211||7220<=o&&o<=7221||7393==o||7410<=o&&o<=7411||7415==o||43043<=o&&o<=43044||43047==o||43136<=o&&o<=43137||43188<=o&&o<=43203||43346<=o&&o<=43347||43395==o||43444<=o&&o<=43445||43450<=o&&o<=43451||43453<=o&&o<=43456||43567<=o&&o<=43568||43571<=o&&o<=43572||43597==o||43755==o||43758<=o&&o<=43759||43765==o||44003<=o&&o<=44004||44006<=o&&o<=44007||44009<=o&&o<=44010||44012==o||69632==o||69634==o||69762==o||69808<=o&&o<=69810||69815<=o&&o<=69816||69932==o||70018==o||70067<=o&&o<=70069||70079<=o&&o<=70080||70188<=o&&o<=70190||70194<=o&&o<=70195||70197==o||70368<=o&&o<=70370||70402<=o&&o<=70403||70463==o||70465<=o&&o<=70468||70471<=o&&o<=70472||70475<=o&&o<=70477||70498<=o&&o<=70499||70709<=o&&o<=70711||70720<=o&&o<=70721||70725==o||70833<=o&&o<=70834||70841==o||70843<=o&&o<=70844||70846==o||70849==o||71088<=o&&o<=71089||71096<=o&&o<=71099||71102==o||71216<=o&&o<=71218||71227<=o&&o<=71228||71230==o||71340==o||71342<=o&&o<=71343||71350==o||71456<=o&&o<=71457||71462==o||72199<=o&&o<=72200||72249==o||72279<=o&&o<=72280||72343==o||72751==o||72766==o||72873==o||72881==o||72884==o||94033<=o&&o<=94078||119142==o||119149==o?5:4352<=o&&o<=4447||43360<=o&&o<=43388?6:4448<=o&&o<=4519||55216<=o&&o<=55238?7:4520<=o&&o<=4607||55243<=o&&o<=55291?8:44032==o||44060==o||44088==o||44116==o||44144==o||44172==o||44200==o||44228==o||44256==o||44284==o||44312==o||44340==o||44368==o||44396==o||44424==o||44452==o||44480==o||44508==o||44536==o||44564==o||44592==o||44620==o||44648==o||44676==o||44704==o||44732==o||44760==o||44788==o||44816==o||44844==o||44872==o||44900==o||44928==o||44956==o||44984==o||45012==o||45040==o||45068==o||45096==o||45124==o||45152==o||45180==o||45208==o||45236==o||45264==o||45292==o||45320==o||45348==o||45376==o||45404==o||45432==o||45460==o||45488==o||45516==o||45544==o||45572==o||45600==o||45628==o||45656==o||45684==o||45712==o||45740==o||45768==o||45796==o||45824==o||45852==o||45880==o||45908==o||45936==o||45964==o||45992==o||46020==o||46048==o||46076==o||46104==o||46132==o||46160==o||46188==o||46216==o||46244==o||46272==o||46300==o||46328==o||46356==o||46384==o||46412==o||46440==o||46468==o||46496==o||46524==o||46552==o||46580==o||46608==o||46636==o||46664==o||46692==o||46720==o||46748==o||46776==o||46804==o||46832==o||46860==o||46888==o||46916==o||46944==o||46972==o||47e3==o||47028==o||47056==o||47084==o||47112==o||47140==o||47168==o||47196==o||47224==o||47252==o||47280==o||47308==o||47336==o||47364==o||47392==o||47420==o||47448==o||47476==o||47504==o||47532==o||47560==o||47588==o||47616==o||47644==o||47672==o||47700==o||47728==o||47756==o||47784==o||47812==o||47840==o||47868==o||47896==o||47924==o||47952==o||47980==o||48008==o||48036==o||48064==o||48092==o||48120==o||48148==o||48176==o||48204==o||48232==o||48260==o||48288==o||48316==o||48344==o||48372==o||48400==o||48428==o||48456==o||48484==o||48512==o||48540==o||48568==o||48596==o||48624==o||48652==o||48680==o||48708==o||48736==o||48764==o||48792==o||48820==o||48848==o||48876==o||48904==o||48932==o||48960==o||48988==o||49016==o||49044==o||49072==o||49100==o||49128==o||49156==o||49184==o||49212==o||49240==o||49268==o||49296==o||49324==o||49352==o||49380==o||49408==o||49436==o||49464==o||49492==o||49520==o||49548==o||49576==o||49604==o||49632==o||49660==o||49688==o||49716==o||49744==o||49772==o||49800==o||49828==o||49856==o||49884==o||49912==o||49940==o||49968==o||49996==o||50024==o||50052==o||50080==o||50108==o||50136==o||50164==o||50192==o||50220==o||50248==o||50276==o||50304==o||50332==o||50360==o||50388==o||50416==o||50444==o||50472==o||50500==o||50528==o||50556==o||50584==o||50612==o||50640==o||50668==o||50696==o||50724==o||50752==o||50780==o||50808==o||50836==o||50864==o||50892==o||50920==o||50948==o||50976==o||51004==o||51032==o||51060==o||51088==o||51116==o||51144==o||51172==o||51200==o||51228==o||51256==o||51284==o||51312==o||51340==o||51368==o||51396==o||51424==o||51452==o||51480==o||51508==o||51536==o||51564==o||51592==o||51620==o||51648==o||51676==o||51704==o||51732==o||51760==o||51788==o||51816==o||51844==o||51872==o||51900==o||51928==o||51956==o||51984==o||52012==o||52040==o||52068==o||52096==o||52124==o||52152==o||52180==o||52208==o||52236==o||52264==o||52292==o||52320==o||52348==o||52376==o||52404==o||52432==o||52460==o||52488==o||52516==o||52544==o||52572==o||52600==o||52628==o||52656==o||52684==o||52712==o||52740==o||52768==o||52796==o||52824==o||52852==o||52880==o||52908==o||52936==o||52964==o||52992==o||53020==o||53048==o||53076==o||53104==o||53132==o||53160==o||53188==o||53216==o||53244==o||53272==o||53300==o||53328==o||53356==o||53384==o||53412==o||53440==o||53468==o||53496==o||53524==o||53552==o||53580==o||53608==o||53636==o||53664==o||53692==o||53720==o||53748==o||53776==o||53804==o||53832==o||53860==o||53888==o||53916==o||53944==o||53972==o||54e3==o||54028==o||54056==o||54084==o||54112==o||54140==o||54168==o||54196==o||54224==o||54252==o||54280==o||54308==o||54336==o||54364==o||54392==o||54420==o||54448==o||54476==o||54504==o||54532==o||54560==o||54588==o||54616==o||54644==o||54672==o||54700==o||54728==o||54756==o||54784==o||54812==o||54840==o||54868==o||54896==o||54924==o||54952==o||54980==o||55008==o||55036==o||55064==o||55092==o||55120==o||55148==o||55176==o?9:44033<=o&&o<=44059||44061<=o&&o<=44087||44089<=o&&o<=44115||44117<=o&&o<=44143||44145<=o&&o<=44171||44173<=o&&o<=44199||44201<=o&&o<=44227||44229<=o&&o<=44255||44257<=o&&o<=44283||44285<=o&&o<=44311||44313<=o&&o<=44339||44341<=o&&o<=44367||44369<=o&&o<=44395||44397<=o&&o<=44423||44425<=o&&o<=44451||44453<=o&&o<=44479||44481<=o&&o<=44507||44509<=o&&o<=44535||44537<=o&&o<=44563||44565<=o&&o<=44591||44593<=o&&o<=44619||44621<=o&&o<=44647||44649<=o&&o<=44675||44677<=o&&o<=44703||44705<=o&&o<=44731||44733<=o&&o<=44759||44761<=o&&o<=44787||44789<=o&&o<=44815||44817<=o&&o<=44843||44845<=o&&o<=44871||44873<=o&&o<=44899||44901<=o&&o<=44927||44929<=o&&o<=44955||44957<=o&&o<=44983||44985<=o&&o<=45011||45013<=o&&o<=45039||45041<=o&&o<=45067||45069<=o&&o<=45095||45097<=o&&o<=45123||45125<=o&&o<=45151||45153<=o&&o<=45179||45181<=o&&o<=45207||45209<=o&&o<=45235||45237<=o&&o<=45263||45265<=o&&o<=45291||45293<=o&&o<=45319||45321<=o&&o<=45347||45349<=o&&o<=45375||45377<=o&&o<=45403||45405<=o&&o<=45431||45433<=o&&o<=45459||45461<=o&&o<=45487||45489<=o&&o<=45515||45517<=o&&o<=45543||45545<=o&&o<=45571||45573<=o&&o<=45599||45601<=o&&o<=45627||45629<=o&&o<=45655||45657<=o&&o<=45683||45685<=o&&o<=45711||45713<=o&&o<=45739||45741<=o&&o<=45767||45769<=o&&o<=45795||45797<=o&&o<=45823||45825<=o&&o<=45851||45853<=o&&o<=45879||45881<=o&&o<=45907||45909<=o&&o<=45935||45937<=o&&o<=45963||45965<=o&&o<=45991||45993<=o&&o<=46019||46021<=o&&o<=46047||46049<=o&&o<=46075||46077<=o&&o<=46103||46105<=o&&o<=46131||46133<=o&&o<=46159||46161<=o&&o<=46187||46189<=o&&o<=46215||46217<=o&&o<=46243||46245<=o&&o<=46271||46273<=o&&o<=46299||46301<=o&&o<=46327||46329<=o&&o<=46355||46357<=o&&o<=46383||46385<=o&&o<=46411||46413<=o&&o<=46439||46441<=o&&o<=46467||46469<=o&&o<=46495||46497<=o&&o<=46523||46525<=o&&o<=46551||46553<=o&&o<=46579||46581<=o&&o<=46607||46609<=o&&o<=46635||46637<=o&&o<=46663||46665<=o&&o<=46691||46693<=o&&o<=46719||46721<=o&&o<=46747||46749<=o&&o<=46775||46777<=o&&o<=46803||46805<=o&&o<=46831||46833<=o&&o<=46859||46861<=o&&o<=46887||46889<=o&&o<=46915||46917<=o&&o<=46943||46945<=o&&o<=46971||46973<=o&&o<=46999||47001<=o&&o<=47027||47029<=o&&o<=47055||47057<=o&&o<=47083||47085<=o&&o<=47111||47113<=o&&o<=47139||47141<=o&&o<=47167||47169<=o&&o<=47195||47197<=o&&o<=47223||47225<=o&&o<=47251||47253<=o&&o<=47279||47281<=o&&o<=47307||47309<=o&&o<=47335||47337<=o&&o<=47363||47365<=o&&o<=47391||47393<=o&&o<=47419||47421<=o&&o<=47447||47449<=o&&o<=47475||47477<=o&&o<=47503||47505<=o&&o<=47531||47533<=o&&o<=47559||47561<=o&&o<=47587||47589<=o&&o<=47615||47617<=o&&o<=47643||47645<=o&&o<=47671||47673<=o&&o<=47699||47701<=o&&o<=47727||47729<=o&&o<=47755||47757<=o&&o<=47783||47785<=o&&o<=47811||47813<=o&&o<=47839||47841<=o&&o<=47867||47869<=o&&o<=47895||47897<=o&&o<=47923||47925<=o&&o<=47951||47953<=o&&o<=47979||47981<=o&&o<=48007||48009<=o&&o<=48035||48037<=o&&o<=48063||48065<=o&&o<=48091||48093<=o&&o<=48119||48121<=o&&o<=48147||48149<=o&&o<=48175||48177<=o&&o<=48203||48205<=o&&o<=48231||48233<=o&&o<=48259||48261<=o&&o<=48287||48289<=o&&o<=48315||48317<=o&&o<=48343||48345<=o&&o<=48371||48373<=o&&o<=48399||48401<=o&&o<=48427||48429<=o&&o<=48455||48457<=o&&o<=48483||48485<=o&&o<=48511||48513<=o&&o<=48539||48541<=o&&o<=48567||48569<=o&&o<=48595||48597<=o&&o<=48623||48625<=o&&o<=48651||48653<=o&&o<=48679||48681<=o&&o<=48707||48709<=o&&o<=48735||48737<=o&&o<=48763||48765<=o&&o<=48791||48793<=o&&o<=48819||48821<=o&&o<=48847||48849<=o&&o<=48875||48877<=o&&o<=48903||48905<=o&&o<=48931||48933<=o&&o<=48959||48961<=o&&o<=48987||48989<=o&&o<=49015||49017<=o&&o<=49043||49045<=o&&o<=49071||49073<=o&&o<=49099||49101<=o&&o<=49127||49129<=o&&o<=49155||49157<=o&&o<=49183||49185<=o&&o<=49211||49213<=o&&o<=49239||49241<=o&&o<=49267||49269<=o&&o<=49295||49297<=o&&o<=49323||49325<=o&&o<=49351||49353<=o&&o<=49379||49381<=o&&o<=49407||49409<=o&&o<=49435||49437<=o&&o<=49463||49465<=o&&o<=49491||49493<=o&&o<=49519||49521<=o&&o<=49547||49549<=o&&o<=49575||49577<=o&&o<=49603||49605<=o&&o<=49631||49633<=o&&o<=49659||49661<=o&&o<=49687||49689<=o&&o<=49715||49717<=o&&o<=49743||49745<=o&&o<=49771||49773<=o&&o<=49799||49801<=o&&o<=49827||49829<=o&&o<=49855||49857<=o&&o<=49883||49885<=o&&o<=49911||49913<=o&&o<=49939||49941<=o&&o<=49967||49969<=o&&o<=49995||49997<=o&&o<=50023||50025<=o&&o<=50051||50053<=o&&o<=50079||50081<=o&&o<=50107||50109<=o&&o<=50135||50137<=o&&o<=50163||50165<=o&&o<=50191||50193<=o&&o<=50219||50221<=o&&o<=50247||50249<=o&&o<=50275||50277<=o&&o<=50303||50305<=o&&o<=50331||50333<=o&&o<=50359||50361<=o&&o<=50387||50389<=o&&o<=50415||50417<=o&&o<=50443||50445<=o&&o<=50471||50473<=o&&o<=50499||50501<=o&&o<=50527||50529<=o&&o<=50555||50557<=o&&o<=50583||50585<=o&&o<=50611||50613<=o&&o<=50639||50641<=o&&o<=50667||50669<=o&&o<=50695||50697<=o&&o<=50723||50725<=o&&o<=50751||50753<=o&&o<=50779||50781<=o&&o<=50807||50809<=o&&o<=50835||50837<=o&&o<=50863||50865<=o&&o<=50891||50893<=o&&o<=50919||50921<=o&&o<=50947||50949<=o&&o<=50975||50977<=o&&o<=51003||51005<=o&&o<=51031||51033<=o&&o<=51059||51061<=o&&o<=51087||51089<=o&&o<=51115||51117<=o&&o<=51143||51145<=o&&o<=51171||51173<=o&&o<=51199||51201<=o&&o<=51227||51229<=o&&o<=51255||51257<=o&&o<=51283||51285<=o&&o<=51311||51313<=o&&o<=51339||51341<=o&&o<=51367||51369<=o&&o<=51395||51397<=o&&o<=51423||51425<=o&&o<=51451||51453<=o&&o<=51479||51481<=o&&o<=51507||51509<=o&&o<=51535||51537<=o&&o<=51563||51565<=o&&o<=51591||51593<=o&&o<=51619||51621<=o&&o<=51647||51649<=o&&o<=51675||51677<=o&&o<=51703||51705<=o&&o<=51731||51733<=o&&o<=51759||51761<=o&&o<=51787||51789<=o&&o<=51815||51817<=o&&o<=51843||51845<=o&&o<=51871||51873<=o&&o<=51899||51901<=o&&o<=51927||51929<=o&&o<=51955||51957<=o&&o<=51983||51985<=o&&o<=52011||52013<=o&&o<=52039||52041<=o&&o<=52067||52069<=o&&o<=52095||52097<=o&&o<=52123||52125<=o&&o<=52151||52153<=o&&o<=52179||52181<=o&&o<=52207||52209<=o&&o<=52235||52237<=o&&o<=52263||52265<=o&&o<=52291||52293<=o&&o<=52319||52321<=o&&o<=52347||52349<=o&&o<=52375||52377<=o&&o<=52403||52405<=o&&o<=52431||52433<=o&&o<=52459||52461<=o&&o<=52487||52489<=o&&o<=52515||52517<=o&&o<=52543||52545<=o&&o<=52571||52573<=o&&o<=52599||52601<=o&&o<=52627||52629<=o&&o<=52655||52657<=o&&o<=52683||52685<=o&&o<=52711||52713<=o&&o<=52739||52741<=o&&o<=52767||52769<=o&&o<=52795||52797<=o&&o<=52823||52825<=o&&o<=52851||52853<=o&&o<=52879||52881<=o&&o<=52907||52909<=o&&o<=52935||52937<=o&&o<=52963||52965<=o&&o<=52991||52993<=o&&o<=53019||53021<=o&&o<=53047||53049<=o&&o<=53075||53077<=o&&o<=53103||53105<=o&&o<=53131||53133<=o&&o<=53159||53161<=o&&o<=53187||53189<=o&&o<=53215||53217<=o&&o<=53243||53245<=o&&o<=53271||53273<=o&&o<=53299||53301<=o&&o<=53327||53329<=o&&o<=53355||53357<=o&&o<=53383||53385<=o&&o<=53411||53413<=o&&o<=53439||53441<=o&&o<=53467||53469<=o&&o<=53495||53497<=o&&o<=53523||53525<=o&&o<=53551||53553<=o&&o<=53579||53581<=o&&o<=53607||53609<=o&&o<=53635||53637<=o&&o<=53663||53665<=o&&o<=53691||53693<=o&&o<=53719||53721<=o&&o<=53747||53749<=o&&o<=53775||53777<=o&&o<=53803||53805<=o&&o<=53831||53833<=o&&o<=53859||53861<=o&&o<=53887||53889<=o&&o<=53915||53917<=o&&o<=53943||53945<=o&&o<=53971||53973<=o&&o<=53999||54001<=o&&o<=54027||54029<=o&&o<=54055||54057<=o&&o<=54083||54085<=o&&o<=54111||54113<=o&&o<=54139||54141<=o&&o<=54167||54169<=o&&o<=54195||54197<=o&&o<=54223||54225<=o&&o<=54251||54253<=o&&o<=54279||54281<=o&&o<=54307||54309<=o&&o<=54335||54337<=o&&o<=54363||54365<=o&&o<=54391||54393<=o&&o<=54419||54421<=o&&o<=54447||54449<=o&&o<=54475||54477<=o&&o<=54503||54505<=o&&o<=54531||54533<=o&&o<=54559||54561<=o&&o<=54587||54589<=o&&o<=54615||54617<=o&&o<=54643||54645<=o&&o<=54671||54673<=o&&o<=54699||54701<=o&&o<=54727||54729<=o&&o<=54755||54757<=o&&o<=54783||54785<=o&&o<=54811||54813<=o&&o<=54839||54841<=o&&o<=54867||54869<=o&&o<=54895||54897<=o&&o<=54923||54925<=o&&o<=54951||54953<=o&&o<=54979||54981<=o&&o<=55007||55009<=o&&o<=55035||55037<=o&&o<=55063||55065<=o&&o<=55091||55093<=o&&o<=55119||55121<=o&&o<=55147||55149<=o&&o<=55175||55177<=o&&o<=55203?10:9757==o||9977==o||9994<=o&&o<=9997||127877==o||127938<=o&&o<=127940||127943==o||127946<=o&&o<=127948||128066<=o&&o<=128067||128070<=o&&o<=128080||128110==o||128112<=o&&o<=128120||128124==o||128129<=o&&o<=128131||128133<=o&&o<=128135||128170==o||128372<=o&&o<=128373||128378==o||128400==o||128405<=o&&o<=128406||128581<=o&&o<=128583||128587<=o&&o<=128591||128675==o||128692<=o&&o<=128694||128704==o||128716==o||129304<=o&&o<=129308||129310<=o&&o<=129311||129318==o||129328<=o&&o<=129337||129341<=o&&o<=129342||129489<=o&&o<=129501?r:127995<=o&&o<=127999?14:8205==o?15:9792==o||9794==o||9877<=o&&o<=9878||9992==o||10084==o||127752==o||127806==o||127859==o||127891==o||127908==o||127912==o||127979==o||127981==o||128139==o||128187<=o&&o<=128188||128295==o||128300==o||128488==o||128640==o||128658==o?i:128102<=o&&o<=128105?s:11}return this.nextBreak=function(e,t){if(void 0===t&&(t=0),t<0)return 0
if(t>=e.length-1)return e.length
for(var n=u(a(e,t)),r=[],i=t+1;i<e.length;i++)if(!o(e,i-1)){var s=u(a(e,i))
if(c(n,r,s))return i
r.push(s)}return e.length},this.splitGraphemes=function(e){for(var t,n=[],r=0;(t=this.nextBreak(e,r))<e.length;)n.push(e.slice(r,t)),r=t
return r<e.length&&n.push(e.slice(r)),n},this.iterateGraphemes=function(e){var t=0,n={next:function(){var n,r
return(r=this.nextBreak(e,t))<e.length?(n=e.slice(t,r),t=r,{value:n,done:!1}):t<e.length?(n=e.slice(t),t=e.length,{value:n,done:!1}):{value:void 0,done:!0}}.bind(this)}
return"undefined"!=typeof Symbol&&Symbol.iterator&&(n[Symbol.iterator]=function(){return n}),n},this.countGraphemes=function(e){for(var t,n=0,r=0;(t=this.nextBreak(e,r))<e.length;)r=t,n++
return r<e.length&&n++,n},this})}),n=new t,r=function(e,t,r){for(var i=n.iterateGraphemes(e.substring(t)),s="",o=0;o<r-t;o++){var a=i.next()
if(s+=a.value,a.done)break}return s},i=function(e,t,n,r,i,s,o){return{start:{line:e,column:t,offset:n},end:{line:r,column:i,offset:s},source:o||null}},s=e(function(e,t){e.exports=function(){var e,t="",n=function(n,r){if("string"!=typeof n)throw new TypeError("expected a string")
if(1===r)return n
if(2===r)return n+n
var i=n.length*r
if(e!==n||void 0===e)e=n,t=""
else if(t.length>=i)return t.substr(0,i)
for(;i>t.length&&r>1;)1&r&&(t+=n),r>>=1,n+=n
return t=(t+=n).substr(0,i)},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}
function i(e,t,r,i){var s=function(e,t){if(null==e||null==t)return e
var n=String(e),r="number"==typeof t?t:parseInt(t,10)
if(isNaN(r)||!isFinite(r))return n
var i=n.length
if(i>=r)return n
var s=String(" ")
""===s&&(s=" ")
for(var o=r-i;s.length<o;)s+=s
return(s.length>o?s.substr(0,o):s)+n}(String(t),r),o=n(" ",i.tabSize)
return s+" | "+e.replace(/\t/g,o)}function s(e,t,n,r,s){return e.slice(t,n).map(function(e,n){return i(e,t+n+1,r,s)}).join("\n")}var o={extraLines:2,tabSize:4}
return function(e,t,a,c){c=r({},o,c)
var u=e.split(/\r\n?|\n|\f/),l=Math.max(1,t-c.extraLines)-1,h=Math.min(t+c.extraLines,u.length),d=String(h).length,f=s(u,l,t,d,c),p=i(u[t-1].substring(0,a-1),t,d,c)
return[f,n(" ",p.length)+"^",s(u,t,h,d,c)].filter(Boolean).join("\n")}}()}),o=(new Error).stack,a=function(e,t,n,r,i){throw function(e){var t=Object.create(SyntaxError.prototype)
return Object.assign(t,e,{name:"SyntaxError"}),Object.defineProperty(t,"stack",{get:function(){return o?o.replace(/^(.+\n){1,3}/,String(t)+"\n"):""}}),t}({message:r?e+"\n"+s(t,r,i):e,rawMessage:e,source:n,line:r,column:i})},c=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return"Unexpected token <"+e+"> at "+n.filter(Boolean).join(":")},u=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return"Unexpected symbol <"+e+"> at "+n.filter(Boolean).join(":")},l={"{":0,"}":1,"[":2,"]":3,":":4,",":5},h={true:8,false:9,null:10},d={'"':0,"\\":1,"/":2,b:3,f:4,n:5,r:6,t:7,u:8}
function f(e){return e>="1"&&e<="9"}function p(e){return e>="0"&&e<="9"}function m(e){return p(e)||e>="a"&&e<="f"||e>="A"&&e<="F"}function g(e){return"e"===e||"E"===e}function y(e,t,n,r){var i=e.charAt(t)
if("\r"===i)t++,n++,r=1,"\n"===e.charAt(t)&&t++
else if("\n"===i)t++,n++,r=1
else{if("\t"!==i&&" "!==i)return null
t++,r++}return{index:t,line:n,column:r}}function v(e,t,n,r){var i=e.charAt(t)
return i in l?{type:l[i],line:n,column:r+1,index:t+1,value:null}:null}function b(e,t,n,r){for(var i in h)if(h.hasOwnProperty(i)&&e.substr(t,i.length)===i)return{type:h[i],line:n,column:r+i.length,index:t+i.length,value:i}
return null}function w(e,t,n,r){for(var i=t,s=0;t<e.length;){var o=e.charAt(t)
switch(s){case 0:if('"'!==o)return null
t++,s=1
break
case 1:if("\\"===o)t++,s=2
else{if('"'===o)return{type:6,line:n,column:r+ ++t-i,index:t,value:e.slice(i,t)}
t++}break
case 2:if(!(o in d))return null
if(t++,"u"===o)for(var a=0;a<4;a++){var c=e.charAt(t)
if(!c||!m(c))return null
t++}s=1}}}function _(e,t,n,r){var i=t,s=t,o=0
e:for(;t<e.length;){var a=e.charAt(t)
switch(o){case 0:if("-"===a)o=1
else if("0"===a)s=t+1,o=2
else{if(!f(a))return null
s=t+1,o=3}break
case 1:if("0"===a)s=t+1,o=2
else{if(!f(a))return null
s=t+1,o=3}break
case 2:if("."===a)o=4
else{if(!g(a))break e
o=6}break
case 3:if(p(a))s=t+1
else if("."===a)o=4
else{if(!g(a))break e
o=6}break
case 4:if(!p(a))break e
s=t+1,o=5
break
case 5:if(p(a))s=t+1
else{if(!g(a))break e
o=6}break
case 6:if("+"===a||"-"===a)o=7
else{if(!p(a))break e
s=t+1,o=7}break
case 7:if(!p(a))break e
s=t+1}t++}return s>0?{type:7,line:n,column:r+s-i,index:s,value:e.slice(i,s)}:null}var S={loc:!0,source:null}
function E(e,t,n){var r=t.length>0?t[t.length-1].loc.end:{line:1,column:1}
a("Unexpected end of input",e,n.source,r.line,r.column)}function I(e){for(var t=0,n=0;n<4;n++)t=16*t+parseInt(e[n],16)
return String.fromCharCode(t)}var T={b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},A=['"',"\\","/"]
function C(e){for(var t="",n=0;n<e.length;n++){var r=e.charAt(n)
if("\\"===r){n++
var i=e.charAt(n)
if("u"===i)t+=I(e.substr(n+1,4)),n+=4
else if(-1!==A.indexOf(i))t+=i
else{if(!(i in T))break
t+=T[i]}}else t+=r}return t}function k(e,t,n,s){for(var o=void 0,u={type:"Object",children:[]},l=0;n<t.length;){var h=t[n]
switch(l){case 0:if(0!==h.type)return null
o=h,l=1,n++
break
case 1:if(1===h.type)return s.loc&&(u.loc=i(o.loc.start.line,o.loc.start.column,o.loc.start.offset,h.loc.end.line,h.loc.end.column,h.loc.end.offset,s.source)),{value:u,index:n+1}
var d=x(e,t,n,s)
u.children.push(d.value),l=2,n=d.index
break
case 2:if(1===h.type)return s.loc&&(u.loc=i(o.loc.start.line,o.loc.start.column,o.loc.start.offset,h.loc.end.line,h.loc.end.column,h.loc.end.offset,s.source)),{value:u,index:n+1}
5===h.type?(l=3,n++):a(c(r(e,h.loc.start.offset,h.loc.end.offset),s.source,h.loc.start.line,h.loc.start.column),e,s.source,h.loc.start.line,h.loc.start.column)
break
case 3:var f=x(e,t,n,s)
f?(n=f.index,u.children.push(f.value),l=2):a(c(r(e,h.loc.start.offset,h.loc.end.offset),s.source,h.loc.start.line,h.loc.start.column),e,s.source,h.loc.start.line,h.loc.start.column)}}E(e,t,s)}function x(e,t,n,s){for(var o=void 0,u={type:"Property",key:null,value:null},l=0;n<t.length;){var h=t[n]
switch(l){case 0:if(6!==h.type)return null
var d={type:"Identifier",value:C(e.slice(h.loc.start.offset+1,h.loc.end.offset-1)),raw:h.value}
s.loc&&(d.loc=h.loc),o=h,u.key=d,l=1,n++
break
case 1:4===h.type?(l=2,n++):a(c(r(e,h.loc.start.offset,h.loc.end.offset),s.source,h.loc.start.line,h.loc.start.column),e,s.source,h.loc.start.line,h.loc.start.column)
break
case 2:var f=N(e,t,n,s)
return u.value=f.value,s.loc&&(u.loc=i(o.loc.start.line,o.loc.start.column,o.loc.start.offset,f.value.loc.end.line,f.value.loc.end.column,f.value.loc.end.offset,s.source)),{value:u,index:f.index}}}}function D(e,t,n,s){for(var o=void 0,u={type:"Array",children:[]},l=0,h=void 0;n<t.length;)switch(h=t[n],l){case 0:if(2!==h.type)return null
o=h,l=1,n++
break
case 1:if(3===h.type)return s.loc&&(u.loc=i(o.loc.start.line,o.loc.start.column,o.loc.start.offset,h.loc.end.line,h.loc.end.column,h.loc.end.offset,s.source)),{value:u,index:n+1}
var d=N(e,t,n,s)
n=d.index,u.children.push(d.value),l=2
break
case 2:if(3===h.type)return s.loc&&(u.loc=i(o.loc.start.line,o.loc.start.column,o.loc.start.offset,h.loc.end.line,h.loc.end.column,h.loc.end.offset,s.source)),{value:u,index:n+1}
5===h.type?(l=3,n++):a(c(r(e,h.loc.start.offset,h.loc.end.offset),s.source,h.loc.start.line,h.loc.start.column),e,s.source,h.loc.start.line,h.loc.start.column)
break
case 3:var f=N(e,t,n,s)
n=f.index,u.children.push(f.value),l=2}E(e,t,s)}function R(e,t,n,r){var i=t[n],s=null
switch(i.type){case 6:s=C(e.slice(i.loc.start.offset+1,i.loc.end.offset-1))
break
case 7:s=Number(i.value)
break
case 8:s=!0
break
case 9:s=!1
break
case 10:s=null
break
default:return null}var o={type:"Literal",value:s,raw:i.value}
return r.loc&&(o.loc=i.loc),{value:o,index:n+1}}function N(e,t,n,i){var s=t[n],o=R.apply(void 0,arguments)||k.apply(void 0,arguments)||D.apply(void 0,arguments)
if(o)return o
a(c(r(e,s.loc.start.offset,s.loc.end.offset),i.source,s.loc.start.line,s.loc.start.column),e,i.source,s.loc.start.line,s.loc.start.column)}return function(e,t){var n=function(e,t){for(var n=1,s=1,o=0,c=[];o<e.length;){var l=[e,o,n,s],h=y.apply(void 0,l)
if(h)o=h.index,n=h.line,s=h.column
else{var d=v.apply(void 0,l)||b.apply(void 0,l)||w.apply(void 0,l)||_.apply(void 0,l)
if(d){var f={type:d.type,value:d.value,loc:i(n,s,o,d.line,d.column,d.index,t.source)}
c.push(f),o=d.index,n=d.line,s=d.column}else a(u(r(e,o,o+1),t.source,n,s),e,t.source,n,s)}}return c}(e,t=Object.assign({},S,t))
0===n.length&&E(e,n,t)
var s=N(e,n,0,t)
if(s.index===n.length)return s.value
var o=n[s.index]
a(c(r(e,o.loc.start.offset,o.loc.end.offset),t.source,o.loc.start.line,o.loc.start.column),e,t.source,o.loc.start.line,o.loc.start.column)}},e.exports=t()},8679:(e,t,n)=>{"use strict"
function r([e]){return Math.asin(e)}n.r(t),n.d(t,{asin:()=>r,default:()=>i})
var i=(0,n(336).helper)(r)},8738:(e,t,n)=>{"use strict"
n.d(t,{PO:()=>o,Vv:()=>s.dependentKeyCompat,eM:()=>i.eM})
var r=n(4217),i=n(8146),s=n(394)
function o(e,t,n){const i=new WeakMap,s=n.get
n.get=function(){return i.has(this)||i.set(this,(0,r.createCache)(s.bind(this))),(0,r.getValue)(i.get(this))}}},8973:(e,t,n)=>{"use strict"
function r(e){return e.reduce((e,t)=>Number(e)/Number(t))}n.r(t),n.d(t,{default:()=>i,div:()=>r})
var i=(0,n(336).helper)(r)},9024:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>o})
var r=n(336),i=n.n(r),s=n(5670)
class o extends(i()){compute(e){for(let t=0,n=e.length;t<n;t++)if(!1===(0,s.A)(e[t]))return e[t]
return e[e.length-1]}}},9218:(e,t,n)=>{"use strict"
function r(e){return e.reduce((e,t)=>Number(e)*Number(t))}n.r(t),n.d(t,{default:()=>i,mult:()=>r})
var i=(0,n(336).helper)(r)},9230:(e,t,n)=>{"use strict"
function r(e,t,n){return n?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<=t}n.r(t),n.d(t,{default:()=>r})},9234:e=>{(function(){"use strict"
var t
function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function r(e,t,n){n||(n=0)
const r=Array(16)
if("string"==typeof t)for(var i=0;i<16;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24
else for(i=0;i<16;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24
t=e.g[0],n=e.g[1],i=e.g[2]
let s,o=e.g[3]
s=t+(o^n&(i^o))+r[0]+3614090360&4294967295,s=o+(i^(t=n+(s<<7&4294967295|s>>>25))&(n^i))+r[1]+3905402710&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[2]+606105819&4294967295,s=n+(t^(i=o+(s<<17&4294967295|s>>>15))&(o^t))+r[3]+3250441966&4294967295,s=t+(o^(n=i+(s<<22&4294967295|s>>>10))&(i^o))+r[4]+4118548399&4294967295,s=o+(i^(t=n+(s<<7&4294967295|s>>>25))&(n^i))+r[5]+1200080426&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[6]+2821735955&4294967295,s=n+(t^(i=o+(s<<17&4294967295|s>>>15))&(o^t))+r[7]+4249261313&4294967295,s=t+(o^(n=i+(s<<22&4294967295|s>>>10))&(i^o))+r[8]+1770035416&4294967295,s=o+(i^(t=n+(s<<7&4294967295|s>>>25))&(n^i))+r[9]+2336552879&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[10]+4294925233&4294967295,s=n+(t^(i=o+(s<<17&4294967295|s>>>15))&(o^t))+r[11]+2304563134&4294967295,s=t+(o^(n=i+(s<<22&4294967295|s>>>10))&(i^o))+r[12]+1804603682&4294967295,s=o+(i^(t=n+(s<<7&4294967295|s>>>25))&(n^i))+r[13]+4254626195&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[14]+2792965006&4294967295,s=n+(t^(i=o+(s<<17&4294967295|s>>>15))&(o^t))+r[15]+1236535329&4294967295,s=t+(i^o&((n=i+(s<<22&4294967295|s>>>10))^i))+r[1]+4129170786&4294967295,s=o+(n^i&((t=n+(s<<5&4294967295|s>>>27))^n))+r[6]+3225465664&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[11]+643717713&4294967295,s=n+(o^t&((i=o+(s<<14&4294967295|s>>>18))^o))+r[0]+3921069994&4294967295,s=t+(i^o&((n=i+(s<<20&4294967295|s>>>12))^i))+r[5]+3593408605&4294967295,s=o+(n^i&((t=n+(s<<5&4294967295|s>>>27))^n))+r[10]+38016083&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[15]+3634488961&4294967295,s=n+(o^t&((i=o+(s<<14&4294967295|s>>>18))^o))+r[4]+3889429448&4294967295,s=t+(i^o&((n=i+(s<<20&4294967295|s>>>12))^i))+r[9]+568446438&4294967295,s=o+(n^i&((t=n+(s<<5&4294967295|s>>>27))^n))+r[14]+3275163606&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[3]+4107603335&4294967295,s=n+(o^t&((i=o+(s<<14&4294967295|s>>>18))^o))+r[8]+1163531501&4294967295,s=t+(i^o&((n=i+(s<<20&4294967295|s>>>12))^i))+r[13]+2850285829&4294967295,s=o+(n^i&((t=n+(s<<5&4294967295|s>>>27))^n))+r[2]+4243563512&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[7]+1735328473&4294967295,s=n+(o^t&((i=o+(s<<14&4294967295|s>>>18))^o))+r[12]+2368359562&4294967295,s=t+((n=i+(s<<20&4294967295|s>>>12))^i^o)+r[5]+4294588738&4294967295,s=o+((t=n+(s<<4&4294967295|s>>>28))^n^i)+r[8]+2272392833&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[11]+1839030562&4294967295,s=n+((i=o+(s<<16&4294967295|s>>>16))^o^t)+r[14]+4259657740&4294967295,s=t+((n=i+(s<<23&4294967295|s>>>9))^i^o)+r[1]+2763975236&4294967295,s=o+((t=n+(s<<4&4294967295|s>>>28))^n^i)+r[4]+1272893353&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[7]+4139469664&4294967295,s=n+((i=o+(s<<16&4294967295|s>>>16))^o^t)+r[10]+3200236656&4294967295,s=t+((n=i+(s<<23&4294967295|s>>>9))^i^o)+r[13]+681279174&4294967295,s=o+((t=n+(s<<4&4294967295|s>>>28))^n^i)+r[0]+3936430074&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[3]+3572445317&4294967295,s=n+((i=o+(s<<16&4294967295|s>>>16))^o^t)+r[6]+76029189&4294967295,s=t+((n=i+(s<<23&4294967295|s>>>9))^i^o)+r[9]+3654602809&4294967295,s=o+((t=n+(s<<4&4294967295|s>>>28))^n^i)+r[12]+3873151461&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[15]+530742520&4294967295,s=n+((i=o+(s<<16&4294967295|s>>>16))^o^t)+r[2]+3299628645&4294967295,s=t+(i^((n=i+(s<<23&4294967295|s>>>9))|~o))+r[0]+4096336452&4294967295,s=o+(n^((t=n+(s<<6&4294967295|s>>>26))|~i))+r[7]+1126891415&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[14]+2878612391&4294967295,s=n+(o^((i=o+(s<<15&4294967295|s>>>17))|~t))+r[5]+4237533241&4294967295,s=t+(i^((n=i+(s<<21&4294967295|s>>>11))|~o))+r[12]+1700485571&4294967295,s=o+(n^((t=n+(s<<6&4294967295|s>>>26))|~i))+r[3]+2399980690&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[10]+4293915773&4294967295,s=n+(o^((i=o+(s<<15&4294967295|s>>>17))|~t))+r[1]+2240044497&4294967295,s=t+(i^((n=i+(s<<21&4294967295|s>>>11))|~o))+r[8]+1873313359&4294967295,s=o+(n^((t=n+(s<<6&4294967295|s>>>26))|~i))+r[15]+4264355552&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[6]+2734768916&4294967295,s=n+(o^((i=o+(s<<15&4294967295|s>>>17))|~t))+r[13]+1309151649&4294967295,s=t+(i^((n=i+(s<<21&4294967295|s>>>11))|~o))+r[4]+4149444226&4294967295,s=o+(n^((t=n+(s<<6&4294967295|s>>>26))|~i))+r[11]+3174756917&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[2]+718787259&4294967295,s=n+(o^((i=o+(s<<15&4294967295|s>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+o&4294967295}function i(e,t){this.h=t
const n=[]
let r=!0
for(let i=e.length-1;i>=0;i--){const s=0|e[i]
r&&s==t||(n[i]=s,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.F=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.D=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s]
return t.prototype[n].apply(e,i)}}(n,function(){this.blockSize=-1}),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},n.prototype.v=function(e,t){void 0===t&&(t=e.length)
const n=t-this.blockSize,i=this.C
let s=this.h,o=0
for(;o<t;){if(0==s)for(;o<=n;)r(this,e,o),o+=this.blockSize
if("string"==typeof e){for(;o<t;)if(i[s++]=e.charCodeAt(o++),s==this.blockSize){r(this,i),s=0
break}}else for(;o<t;)if(i[s++]=e[o++],s==this.blockSize){r(this,i),s=0
break}}this.h=s,this.o+=t},n.prototype.A=function(){var e=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h)
e[0]=128
for(var t=1;t<e.length-8;++t)e[t]=0
t=8*this.o
for(var n=e.length-8;n<e.length;++n)e[n]=255&t,t/=256
for(this.v(e),e=Array(16),t=0,n=0;n<4;++n)for(let r=0;r<32;r+=8)e[t++]=this.g[n]>>>r&255
return e}
var s={}
function o(e){return-128<=e&&e<128?function(e){var t=s
return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=function(e){return new i([0|e],e<0?-1:0)}(e)}(e):new i([0|e],e<0?-1:0)}function a(e){if(isNaN(e)||!isFinite(e))return c
if(e<0)return f(a(-e))
const t=[]
let n=1
for(let r=0;e>=n;r++)t[r]=e/n|0,n*=4294967296
return new i(t,0)}var c=o(0),u=o(1),l=o(16777216)
function h(e){if(0!=e.h)return!1
for(let t=0;t<e.g.length;t++)if(0!=e.g[t])return!1
return!0}function d(e){return-1==e.h}function f(e){const t=e.g.length,n=[]
for(let r=0;r<t;r++)n[r]=~e.g[r]
return new i(n,~e.h).add(u)}function p(e,t){return e.add(f(t))}function m(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function g(e,t){this.g=e,this.h=t}function y(e,t){if(h(t))throw Error("division by zero")
if(h(e))return new g(c,c)
if(d(e))return t=y(f(e),t),new g(f(t.g),f(t.h))
if(d(t))return t=y(e,f(t)),new g(f(t.g),t.h)
if(e.g.length>30){if(d(e)||d(t))throw Error("slowDivide_ only works with positive integers.")
for(var n=u,r=t;r.l(e)<=0;)n=v(n),r=v(r)
var i=b(n,1),s=b(r,1)
for(r=b(r,2),n=b(n,2);!h(r);){var o=s.add(r)
o.l(e)<=0&&(i=i.add(n),s=o),r=b(r,1),n=b(n,1)}return t=p(e,i.j(t)),new g(i,t)}for(i=c;e.l(t)>=0;){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=(r=Math.ceil(Math.log(n)/Math.LN2))<=48?1:Math.pow(2,r-48),o=(s=a(n)).j(t);d(o)||o.l(e)>0;)o=(s=a(n-=r)).j(t)
h(s)&&(s=u),i=i.add(s),e=p(e,o)}return new g(i,e)}function v(e){const t=e.g.length+1,n=[]
for(let r=0;r<t;r++)n[r]=e.i(r)<<1|e.i(r-1)>>>31
return new i(n,e.h)}function b(e,t){const n=t>>5
t%=32
const r=e.g.length-n,s=[]
for(let i=0;i<r;i++)s[i]=t>0?e.i(i+n)>>>t|e.i(i+n+1)<<32-t:e.i(i+n)
return new i(s,e.h)}(t=i.prototype).m=function(){if(d(this))return-f(this).m()
let e=0,t=1
for(let n=0;n<this.g.length;n++){const r=this.i(n)
e+=(r>=0?r:4294967296+r)*t,t*=4294967296}return e},t.toString=function(e){if((e=e||10)<2||36<e)throw Error("radix out of range: "+e)
if(h(this))return"0"
if(d(this))return"-"+f(this).toString(e)
const t=a(Math.pow(e,6))
var n=this
let r=""
for(;;){const i=y(n,t).g
let s=(((n=p(n,i.j(t))).g.length>0?n.g[0]:n.h)>>>0).toString(e)
if(h(n=i))return s+r
for(;s.length<6;)s="0"+s
r=s+r}},t.i=function(e){return e<0?0:e<this.g.length?this.g[e]:this.h},t.l=function(e){return d(e=p(this,e))?-1:h(e)?0:1},t.abs=function(){return d(this)?f(this):this},t.add=function(e){const t=Math.max(this.g.length,e.g.length),n=[]
let r=0
for(let i=0;i<=t;i++){let t=r+(65535&this.i(i))+(65535&e.i(i)),s=(t>>>16)+(this.i(i)>>>16)+(e.i(i)>>>16)
r=s>>>16,t&=65535,s&=65535,n[i]=s<<16|t}return new i(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(e){if(h(this)||h(e))return c
if(d(this))return d(e)?f(this).j(f(e)):f(f(this).j(e))
if(d(e))return f(this.j(f(e)))
if(this.l(l)<0&&e.l(l)<0)return a(this.m()*e.m())
const t=this.g.length+e.g.length,n=[]
for(var r=0;r<2*t;r++)n[r]=0
for(r=0;r<this.g.length;r++)for(let t=0;t<e.g.length;t++){const i=this.i(r)>>>16,s=65535&this.i(r),o=e.i(t)>>>16,a=65535&e.i(t)
n[2*r+2*t]+=s*a,m(n,2*r+2*t),n[2*r+2*t+1]+=i*a,m(n,2*r+2*t+1),n[2*r+2*t+1]+=s*o,m(n,2*r+2*t+1),n[2*r+2*t+2]+=i*o,m(n,2*r+2*t+2)}for(e=0;e<t;e++)n[e]=n[2*e+1]<<16|n[2*e]
for(e=t;e<2*t;e++)n[e]=0
return new i(n,0)},t.B=function(e){return y(this,e).h},t.and=function(e){const t=Math.max(this.g.length,e.g.length),n=[]
for(let r=0;r<t;r++)n[r]=this.i(r)&e.i(r)
return new i(n,this.h&e.h)},t.or=function(e){const t=Math.max(this.g.length,e.g.length),n=[]
for(let r=0;r<t;r++)n[r]=this.i(r)|e.i(r)
return new i(n,this.h|e.h)},t.xor=function(e){const t=Math.max(this.g.length,e.g.length),n=[]
for(let r=0;r<t;r++)n[r]=this.i(r)^e.i(r)
return new i(n,this.h^e.h)},n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,e.exports.Md5=n,i.prototype.add=i.prototype.add,i.prototype.multiply=i.prototype.j,i.prototype.modulo=i.prototype.B,i.prototype.compare=i.prototype.l,i.prototype.toNumber=i.prototype.m,i.prototype.toString=i.prototype.toString,i.prototype.getBits=i.prototype.i,i.fromNumber=a,i.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string")
if((n=n||10)<2||36<n)throw Error("radix out of range: "+n)
if("-"==t.charAt(0))return f(e(t.substring(1),n))
if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character')
const r=a(Math.pow(n,8))
let i=c
for(let o=0;o<t.length;o+=8){var s=Math.min(8,t.length-o)
const e=parseInt(t.substring(o,o+s),n)
s<8?(s=a(Math.pow(n,s)),i=i.j(s).add(a(e))):(i=i.j(r),i=i.add(a(e)))}return i},e.exports.Integer=i}).apply("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},9379:(e,t,n)=>{"use strict"
function r(e,t,n){return n?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>=t}n.r(t),n.d(t,{default:()=>r})},9622:(e,t,n)=>{"use strict"
function r(e){return e.reduce((e,t)=>Number(e)%Number(t))}n.r(t),n.d(t,{default:()=>i,mod:()=>r})
var i=(0,n(336).helper)(r)},9912:(e,t,n)=>{"use strict"
function r([e]){return Math.floor(e)}n.r(t),n.d(t,{default:()=>i,floor:()=>r})
var i=(0,n(336).helper)(r)},9949:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>o,sum:()=>s})
var r=n(336),i=n(2813)
function s(e){return(0,i.add)(e)}var o=(0,r.helper)(s)}}])
