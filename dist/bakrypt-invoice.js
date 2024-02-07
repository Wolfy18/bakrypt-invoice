/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;class s{constructor(t,e,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const o=this.t;if(e&&void 0===t){const e=void 0!==o&&1===o.length;e&&(t=r.get(o)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&r.set(o,t))}return t}toString(){return this.cssText}}const l=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1]),t[0]);return new s(r,t,o)},i=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var n;const a=window,c=a.trustedTypes,u=c?c.emptyScript:"",d=a.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},p=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:p};class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const r=this._$Ep(o,e);void 0!==r&&(this._$Ev.set(r,o),t.push(r))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(r){const s=this[t];this[e]=r,this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(i(t))}else void 0!==t&&e.push(i(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var o;const r=null!==(o=this.shadowRoot)&&void 0!==o?o:this.attachShadow(this.constructor.shadowRootOptions);return((o,r)=>{e?o.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):r.forEach((e=>{const r=document.createElement("style"),s=t.litNonce;void 0!==s&&r.setAttribute("nonce",s),r.textContent=e.cssText,o.appendChild(r)}))})(r,this.constructor.elementStyles),r}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=v){var r;const s=this.constructor._$Ep(t,o);if(void 0!==s&&!0===o.reflect){const l=(void 0!==(null===(r=o.converter)||void 0===r?void 0:r.toAttribute)?o.converter:h).toAttribute(e,o.type);this._$El=t,null==l?this.removeAttribute(s):this.setAttribute(s,l),this._$El=null}}_$AK(t,e){var o;const r=this.constructor,s=r._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=r.getPropertyOptions(s),l="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(o=t.converter)||void 0===o?void 0:o.fromAttribute)?t.converter:h;this._$El=s,this[s]=l.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,o){let r=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:b}),(null!==(n=a.reactiveElementVersions)&&void 0!==n?n:a.reactiveElementVersions=[]).push("1.5.0");const m=window,g=m.trustedTypes,y=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,w="?"+_,$=`<${w}>`,x=document,k=(t="")=>x.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,z=/>/g,T=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),U=/'/g,P=/"/g,M=/^(?:script|style|textarea|title)$/i,O=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),N=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),H=new WeakMap,R=x.createTreeWalker(x,129,null,!1);class B{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let s=0,l=0;const i=t.length-1,n=this.parts,[a,c]=((t,e)=>{const o=t.length-1,r=[];let s,l=2===e?"<svg>":"",i=S;for(let e=0;e<o;e++){const o=t[e];let n,a,c=-1,u=0;for(;u<o.length&&(i.lastIndex=u,a=i.exec(o),null!==a);)u=i.lastIndex,i===S?"!--"===a[1]?i=E:void 0!==a[1]?i=z:void 0!==a[2]?(M.test(a[2])&&(s=RegExp("</"+a[2],"g")),i=T):void 0!==a[3]&&(i=T):i===T?">"===a[0]?(i=null!=s?s:S,c=-1):void 0===a[1]?c=-2:(c=i.lastIndex-a[2].length,n=a[1],i=void 0===a[3]?T:'"'===a[3]?P:U):i===P||i===U?i=T:i===E||i===z?i=S:(i=T,s=void 0);const d=i===T&&t[e+1].startsWith("/>")?" ":"";l+=i===S?o+$:c>=0?(r.push(n),o.slice(0,c)+"$lit$"+o.slice(c)+_+d):o+_+(-2===c?(r.push(void 0),e):d)}const n=l+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(n):n,r]})(t,e);if(this.el=B.createElement(a,o),R.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=R.nextNode())&&n.length<i;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(_)){const o=c[l++];if(t.push(e),void 0!==o){const t=r.getAttribute(o.toLowerCase()+"$lit$").split(_),e=/([.?@])?(.*)/.exec(o);n.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?I:"?"===e[1]?W:"@"===e[1]?K:j})}else n.push({type:6,index:s})}for(const e of t)r.removeAttribute(e)}if(M.test(r.tagName)){const t=r.textContent.split(_),e=t.length-1;if(e>0){r.textContent=g?g.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],k()),R.nextNode(),n.push({type:2,index:++s});r.append(t[e],k())}}}else if(8===r.nodeType)if(r.data===w)n.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(_,t+1));)n.push({type:7,index:s}),t+=_.length-1}s++}}static createElement(t,e){const o=x.createElement("template");return o.innerHTML=t,o}}function V(t,e,o=t,r){var s,l,i,n;if(e===N)return e;let a=void 0!==r?null===(s=o._$Co)||void 0===s?void 0:s[r]:o._$Cl;const c=A(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(l=null==a?void 0:a._$AO)||void 0===l||l.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,o,r)),void 0!==r?(null!==(i=(n=o)._$Co)&&void 0!==i?i:n._$Co=[])[r]=a:o._$Cl=a),void 0!==a&&(e=V(t,a._$AS(t,e.values),a,r)),e}class D{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:o},parts:r}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(o,!0);R.currentNode=s;let l=R.nextNode(),i=0,n=0,a=r[0];for(;void 0!==a;){if(i===a.index){let e;2===a.type?e=new F(l,l.nextSibling,this,t):1===a.type?e=new a.ctor(l,a.name,a.strings,this,t):6===a.type&&(e=new Q(l,this,t)),this.u.push(e),a=r[++n]}i!==(null==a?void 0:a.index)&&(l=R.nextNode(),i++)}return s}p(t){let e=0;for(const o of this.u)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class F{constructor(t,e,o,r){var s;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cm=null===(s=null==r?void 0:r.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),A(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==N&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==L&&A(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){var e;const{values:o,_$litType$:r}=t,s="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=B.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.p(o);else{const t=new D(s,this),e=t.v(this.options);t.p(o),this.T(e),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new B(t)),e}k(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const s of t)r===e.length?e.push(o=new F(this.O(k()),this.O(k()),this,this.options)):o=e[r],o._$AI(s),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class j{constructor(t,e,o,r,s){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,r){const s=this.strings;let l=!1;if(void 0===s)t=V(this,t,e,0),l=!A(t)||t!==this._$AH&&t!==N,l&&(this._$AH=t);else{const r=t;let i,n;for(t=s[0],i=0;i<s.length-1;i++)n=V(this,r[o+i],e,i),n===N&&(n=this._$AH[i]),l||(l=!A(n)||n!==this._$AH[i]),n===L?t=L:t!==L&&(t+=(null!=n?n:"")+s[i+1]),this._$AH[i]=n}l&&!r&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends j{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}const q=g?g.emptyScript:"";class W extends j{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}class K extends j{constructor(t,e,o,r,s){super(t,e,o,r,s),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=V(this,t,e,0))&&void 0!==o?o:L)===N)return;const r=this._$AH,s=t===L&&r!==L||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,l=t!==L&&(r===L||s);s&&this.element.removeEventListener(this.name,this,r),l&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const G=m.litHtmlPolyfillSupport;null==G||G(B,F),(null!==(f=m.litHtmlVersions)&&void 0!==f?f:m.litHtmlVersions=[]).push("2.5.0");const J=(t,e,o)=>{var r,s;const l=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:e;let i=l._$litPart$;if(void 0===i){const t=null!==(s=null==o?void 0:o.renderBefore)&&void 0!==s?s:null;l._$litPart$=i=new F(e.insertBefore(k(),t),t,void 0,null!=o?o:{})}return i._$AI(t),i};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Z,X;class Y extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=J(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return N}}Y.finalized=!0,Y._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:Y});const tt=globalThis.litElementPolyfillSupport;function et(t,e,o){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}let ot;null==tt||tt({LitElement:Y}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.2.2");let rt=0;function st(t){ot=t}function lt(){ot=null,rt=0}const it=Symbol("haunted.phase"),nt=Symbol("haunted.hook"),at=Symbol("haunted.update"),ct=Symbol("haunted.commit"),ut=Symbol("haunted.effects"),dt=Symbol("haunted.layoutEffects"),ht="haunted.context";class pt{constructor(t,e){et(this,"update",void 0),et(this,"host",void 0),et(this,"virtual",void 0),et(this,nt,void 0),et(this,ut,void 0),et(this,dt,void 0),this.update=t,this.host=e,this[nt]=new Map,this[ut]=[],this[dt]=[]}run(t){st(this);let e=t();return lt(),e}_runEffects(t){let e=this[t];st(this);for(let t of e)t.call(this);lt()}runEffects(){this._runEffects(ut)}runLayoutEffects(){this._runEffects(dt)}teardown(){this[nt].forEach((t=>{"function"==typeof t.teardown&&t.teardown()}))}}const vt=Promise.resolve().then.bind(Promise.resolve());function bt(){let t,e=[];function o(){t=null;let o=e;e=[];for(var r=0,s=o.length;r<s;r++)o[r]()}return function(r){e.push(r),null==t&&(t=vt(o))}}const ft=bt(),mt=bt();class gt{constructor(t,e){et(this,"renderer",void 0),et(this,"host",void 0),et(this,"state",void 0),et(this,it,void 0),et(this,"_updateQueued",void 0),this.renderer=t,this.host=e,this.state=new pt(this.update.bind(this),e),this[it]=null,this._updateQueued=!1}update(){this._updateQueued||(ft((()=>{let t=this.handlePhase(at);mt((()=>{this.handlePhase(ct,t),mt((()=>{this.handlePhase(ut)}))})),this._updateQueued=!1})),this._updateQueued=!0)}handlePhase(t,e){switch(this[it]=t,t){case ct:return this.commit(e),void this.runEffects(dt);case at:return this.render();case ut:return this.runEffects(ut)}}render(){return this.state.run((()=>this.renderer.call(this.host,this.host)))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}}function yt(t){class e extends gt{constructor(t,e,o){super(t,o||e),et(this,"frag",void 0),this.frag=e}commit(e){t(e,this.frag)}}return function(t,o,r){const s=(r||o||{}).baseElement||HTMLElement,{observedAttributes:l=[],useShadowDOM:i=!0,shadowRootInit:n={}}=r||o||{};class a extends s{static get observedAttributes(){return t.observedAttributes||l||[]}constructor(){super(),et(this,"_scheduler",void 0),!1===i?this._scheduler=new e(t,this):(this.attachShadow({mode:"open",...n}),this._scheduler=new e(t,this.shadowRoot,this))}connectedCallback(){this._scheduler.update()}disconnectedCallback(){this._scheduler.teardown()}attributeChangedCallback(t,e,o){if(e===o)return;let r=""===o||o;Reflect.set(this,((t="")=>t.replace(/-+([a-z])?/g,((t,e)=>e?e.toUpperCase():"")))(t),r)}}const c=new Proxy(s.prototype,{getPrototypeOf:t=>t,set(t,e,o,r){let s;return e in t?(s=Object.getOwnPropertyDescriptor(t,e),s&&s.set?(s.set.call(r,o),!0):(Reflect.set(t,e,o,r),!0)):(s="symbol"==typeof e||"_"===e[0]?{enumerable:!0,configurable:!0,writable:!0,value:o}:function(t){let e=t,o=!1;return Object.freeze({enumerable:!0,configurable:!0,get:()=>e,set(t){o&&e===t||(o=!0,e=t,this._scheduler&&this._scheduler.update())}})}(o),Object.defineProperty(r,e,s),s.set&&s.set.call(r,o),!0)}});return Object.setPrototypeOf(a.prototype,c),a}}class _t{constructor(t,e){et(this,"id",void 0),et(this,"state",void 0),this.id=t,this.state=e}}function wt(t,...e){let o=rt++,r=ot[nt],s=r.get(o);return s||(s=new t(o,ot,...e),r.set(o,s)),s.update(...e)}function $t(t){return wt.bind(null,t)}function xt(t){return $t(class extends _t{constructor(e,o,r,s){super(e,o),et(this,"callback",void 0),et(this,"lastValues",void 0),et(this,"values",void 0),et(this,"_teardown",void 0),t(o,this)}update(t,e){this.callback=t,this.values=e}call(){this.values&&!this.hasChanged()||this.run(),this.lastValues=this.values}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(){"function"==typeof this._teardown&&this._teardown()}hasChanged(){return!this.lastValues||this.values.some(((t,e)=>this.lastValues[e]!==t))}})}function kt(t,e){t[ut].push(e)}const At=xt(kt),Ct=$t(class extends _t{constructor(t,e,o){super(t,e),et(this,"Context",void 0),et(this,"value",void 0),et(this,"_ranEffect",void 0),et(this,"_unsubscribe",void 0),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,kt(e,this)}update(t){if(this.state.virtual)throw new Error("can't be used with virtual components");return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};this.state.host.dispatchEvent(new CustomEvent(ht,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:o=null,value:r}=e;this.value=o?r:t.defaultValue,this._unsubscribe=o}teardown(){this._unsubscribe&&this._unsubscribe()}});$t(class extends _t{constructor(t,e,o,r){super(t,e),et(this,"value",void 0),et(this,"values",void 0),this.value=o(),this.values=r}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some(((t,e)=>this.values[e]!==t))}});const St=xt((function(t,e){t[dt].push(e)})),Et=$t(class extends _t{constructor(t,e,o){super(t,e),et(this,"args",void 0),this.updater=this.updater.bind(this),"function"==typeof o&&(o=o()),this.makeArgs(o)}update(){return this.args}updater(t){if("function"==typeof t){const e=t,[o]=this.args;t=e(o)}this.makeArgs(t),this.state.update()}makeArgs(t){this.args=Object.freeze([t,this.updater])}});Promise.resolve(),$t(class extends _t{constructor(t,e,o,r,s){super(t,e),et(this,"reducer",void 0),et(this,"currentState",void 0),this.dispatch=this.dispatch.bind(this),this.currentState=void 0!==s?s(r):r}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const{component:zt,createContext:Tt}=function({render:t}){const e=yt(t),o=function(t){return e=>{const o={Provider:class extends HTMLElement{constructor(){super(),et(this,"listeners",void 0),et(this,"_value",void 0),this.listeners=new Set,this.addEventListener(ht,this)}disconnectedCallback(){this.removeEventListener(ht,this)}handleEvent(t){const{detail:e}=t;e.Context===o&&(e.value=this.value,e.unsubscribe=this.unsubscribe.bind(this,e.callback),this.listeners.add(e.callback),t.stopPropagation())}unsubscribe(t){this.listeners.delete(t)}set value(t){this._value=t;for(let e of this.listeners)e(t)}get value(){return this._value}},Consumer:t((function({render:t}){return t(Ct(o))})),defaultValue:e};return o}}(e);return{component:e,createContext:o}}({render:J});var Ut,Pt,Mt=l`.sl-theme-light,:host,:root{color-scheme:light;--sl-color-gray-50:hsl(0 0% 97.5%);--sl-color-gray-100:hsl(240 4.8% 95.9%);--sl-color-gray-200:hsl(240 5.9% 90%);--sl-color-gray-300:hsl(240 4.9% 83.9%);--sl-color-gray-400:hsl(240 5% 64.9%);--sl-color-gray-500:hsl(240 3.8% 46.1%);--sl-color-gray-600:hsl(240 5.2% 33.9%);--sl-color-gray-700:hsl(240 5.3% 26.1%);--sl-color-gray-800:hsl(240 3.7% 15.9%);--sl-color-gray-900:hsl(240 5.9% 10%);--sl-color-gray-950:hsl(240 7.3% 8%);--sl-color-red-50:hsl(0 85.7% 97.3%);--sl-color-red-100:hsl(0 93.3% 94.1%);--sl-color-red-200:hsl(0 96.3% 89.4%);--sl-color-red-300:hsl(0 93.5% 81.8%);--sl-color-red-400:hsl(0 90.6% 70.8%);--sl-color-red-500:hsl(0 84.2% 60.2%);--sl-color-red-600:hsl(0 72.2% 50.6%);--sl-color-red-700:hsl(0 73.7% 41.8%);--sl-color-red-800:hsl(0 70% 35.3%);--sl-color-red-900:hsl(0 62.8% 30.6%);--sl-color-red-950:hsl(0 60% 19.6%);--sl-color-orange-50:hsl(33.3 100% 96.5%);--sl-color-orange-100:hsl(34.3 100% 91.8%);--sl-color-orange-200:hsl(32.1 97.7% 83.1%);--sl-color-orange-300:hsl(30.7 97.2% 72.4%);--sl-color-orange-400:hsl(27 96% 61%);--sl-color-orange-500:hsl(24.6 95% 53.1%);--sl-color-orange-600:hsl(20.5 90.2% 48.2%);--sl-color-orange-700:hsl(17.5 88.3% 40.4%);--sl-color-orange-800:hsl(15 79.1% 33.7%);--sl-color-orange-900:hsl(15.3 74.6% 27.8%);--sl-color-orange-950:hsl(15.2 69.1% 19%);--sl-color-amber-50:hsl(48 100% 96.1%);--sl-color-amber-100:hsl(48 96.5% 88.8%);--sl-color-amber-200:hsl(48 96.6% 76.7%);--sl-color-amber-300:hsl(45.9 96.7% 64.5%);--sl-color-amber-400:hsl(43.3 96.4% 56.3%);--sl-color-amber-500:hsl(37.7 92.1% 50.2%);--sl-color-amber-600:hsl(32.1 94.6% 43.7%);--sl-color-amber-700:hsl(26 90.5% 37.1%);--sl-color-amber-800:hsl(22.7 82.5% 31.4%);--sl-color-amber-900:hsl(21.7 77.8% 26.5%);--sl-color-amber-950:hsl(22.9 74.1% 16.7%);--sl-color-yellow-50:hsl(54.5 91.7% 95.3%);--sl-color-yellow-100:hsl(54.9 96.7% 88%);--sl-color-yellow-200:hsl(52.8 98.3% 76.9%);--sl-color-yellow-300:hsl(50.4 97.8% 63.5%);--sl-color-yellow-400:hsl(47.9 95.8% 53.1%);--sl-color-yellow-500:hsl(45.4 93.4% 47.5%);--sl-color-yellow-600:hsl(40.6 96.1% 40.4%);--sl-color-yellow-700:hsl(35.5 91.7% 32.9%);--sl-color-yellow-800:hsl(31.8 81% 28.8%);--sl-color-yellow-900:hsl(28.4 72.5% 25.7%);--sl-color-yellow-950:hsl(33.1 69% 13.9%);--sl-color-lime-50:hsl(78.3 92% 95.1%);--sl-color-lime-100:hsl(79.6 89.1% 89.2%);--sl-color-lime-200:hsl(80.9 88.5% 79.6%);--sl-color-lime-300:hsl(82 84.5% 67.1%);--sl-color-lime-400:hsl(82.7 78% 55.5%);--sl-color-lime-500:hsl(83.7 80.5% 44.3%);--sl-color-lime-600:hsl(84.8 85.2% 34.5%);--sl-color-lime-700:hsl(85.9 78.4% 27.3%);--sl-color-lime-800:hsl(86.3 69% 22.7%);--sl-color-lime-900:hsl(87.6 61.2% 20.2%);--sl-color-lime-950:hsl(86.5 60.6% 13.9%);--sl-color-green-50:hsl(138.5 76.5% 96.7%);--sl-color-green-100:hsl(140.6 84.2% 92.5%);--sl-color-green-200:hsl(141 78.9% 85.1%);--sl-color-green-300:hsl(141.7 76.6% 73.1%);--sl-color-green-400:hsl(141.9 69.2% 58%);--sl-color-green-500:hsl(142.1 70.6% 45.3%);--sl-color-green-600:hsl(142.1 76.2% 36.3%);--sl-color-green-700:hsl(142.4 71.8% 29.2%);--sl-color-green-800:hsl(142.8 64.2% 24.1%);--sl-color-green-900:hsl(143.8 61.2% 20.2%);--sl-color-green-950:hsl(144.3 60.7% 12%);--sl-color-emerald-50:hsl(151.8 81% 95.9%);--sl-color-emerald-100:hsl(149.3 80.4% 90%);--sl-color-emerald-200:hsl(152.4 76% 80.4%);--sl-color-emerald-300:hsl(156.2 71.6% 66.9%);--sl-color-emerald-400:hsl(158.1 64.4% 51.6%);--sl-color-emerald-500:hsl(160.1 84.1% 39.4%);--sl-color-emerald-600:hsl(161.4 93.5% 30.4%);--sl-color-emerald-700:hsl(162.9 93.5% 24.3%);--sl-color-emerald-800:hsl(163.1 88.1% 19.8%);--sl-color-emerald-900:hsl(164.2 85.7% 16.5%);--sl-color-emerald-950:hsl(164.3 87.5% 9.4%);--sl-color-teal-50:hsl(166.2 76.5% 96.7%);--sl-color-teal-100:hsl(167.2 85.5% 89.2%);--sl-color-teal-200:hsl(168.4 83.8% 78.2%);--sl-color-teal-300:hsl(170.6 76.9% 64.3%);--sl-color-teal-400:hsl(172.5 66% 50.4%);--sl-color-teal-500:hsl(173.4 80.4% 40%);--sl-color-teal-600:hsl(174.7 83.9% 31.6%);--sl-color-teal-700:hsl(175.3 77.4% 26.1%);--sl-color-teal-800:hsl(176.1 69.4% 21.8%);--sl-color-teal-900:hsl(175.9 60.8% 19%);--sl-color-teal-950:hsl(176.5 58.6% 11.4%);--sl-color-cyan-50:hsl(183.2 100% 96.3%);--sl-color-cyan-100:hsl(185.1 95.9% 90.4%);--sl-color-cyan-200:hsl(186.2 93.5% 81.8%);--sl-color-cyan-300:hsl(187 92.4% 69%);--sl-color-cyan-400:hsl(187.9 85.7% 53.3%);--sl-color-cyan-500:hsl(188.7 94.5% 42.7%);--sl-color-cyan-600:hsl(191.6 91.4% 36.5%);--sl-color-cyan-700:hsl(192.9 82.3% 31%);--sl-color-cyan-800:hsl(194.4 69.6% 27.1%);--sl-color-cyan-900:hsl(196.4 63.6% 23.7%);--sl-color-cyan-950:hsl(196.8 61% 16.1%);--sl-color-sky-50:hsl(204 100% 97.1%);--sl-color-sky-100:hsl(204 93.8% 93.7%);--sl-color-sky-200:hsl(200.6 94.4% 86.1%);--sl-color-sky-300:hsl(199.4 95.5% 73.9%);--sl-color-sky-400:hsl(198.4 93.2% 59.6%);--sl-color-sky-500:hsl(198.6 88.7% 48.4%);--sl-color-sky-600:hsl(200.4 98% 39.4%);--sl-color-sky-700:hsl(201.3 96.3% 32.2%);--sl-color-sky-800:hsl(201 90% 27.5%);--sl-color-sky-900:hsl(202 80.3% 23.9%);--sl-color-sky-950:hsl(202.3 73.8% 16.5%);--sl-color-blue-50:hsl(213.8 100% 96.9%);--sl-color-blue-100:hsl(214.3 94.6% 92.7%);--sl-color-blue-200:hsl(213.3 96.9% 87.3%);--sl-color-blue-300:hsl(211.7 96.4% 78.4%);--sl-color-blue-400:hsl(213.1 93.9% 67.8%);--sl-color-blue-500:hsl(217.2 91.2% 59.8%);--sl-color-blue-600:hsl(221.2 83.2% 53.3%);--sl-color-blue-700:hsl(224.3 76.3% 48%);--sl-color-blue-800:hsl(225.9 70.7% 40.2%);--sl-color-blue-900:hsl(224.4 64.3% 32.9%);--sl-color-blue-950:hsl(226.2 55.3% 18.4%);--sl-color-indigo-50:hsl(225.9 100% 96.7%);--sl-color-indigo-100:hsl(226.5 100% 93.9%);--sl-color-indigo-200:hsl(228 96.5% 88.8%);--sl-color-indigo-300:hsl(229.7 93.5% 81.8%);--sl-color-indigo-400:hsl(234.5 89.5% 73.9%);--sl-color-indigo-500:hsl(238.7 83.5% 66.7%);--sl-color-indigo-600:hsl(243.4 75.4% 58.6%);--sl-color-indigo-700:hsl(244.5 57.9% 50.6%);--sl-color-indigo-800:hsl(243.7 54.5% 41.4%);--sl-color-indigo-900:hsl(242.2 47.4% 34.3%);--sl-color-indigo-950:hsl(243.5 43.6% 22.9%);--sl-color-violet-50:hsl(250 100% 97.6%);--sl-color-violet-100:hsl(251.4 91.3% 95.5%);--sl-color-violet-200:hsl(250.5 95.2% 91.8%);--sl-color-violet-300:hsl(252.5 94.7% 85.1%);--sl-color-violet-400:hsl(255.1 91.7% 76.3%);--sl-color-violet-500:hsl(258.3 89.5% 66.3%);--sl-color-violet-600:hsl(262.1 83.3% 57.8%);--sl-color-violet-700:hsl(263.4 70% 50.4%);--sl-color-violet-800:hsl(263.4 69.3% 42.2%);--sl-color-violet-900:hsl(263.5 67.4% 34.9%);--sl-color-violet-950:hsl(265.1 61.5% 21.4%);--sl-color-purple-50:hsl(270 100% 98%);--sl-color-purple-100:hsl(268.7 100% 95.5%);--sl-color-purple-200:hsl(268.6 100% 91.8%);--sl-color-purple-300:hsl(269.2 97.4% 85.1%);--sl-color-purple-400:hsl(270 95.2% 75.3%);--sl-color-purple-500:hsl(270.7 91% 65.1%);--sl-color-purple-600:hsl(271.5 81.3% 55.9%);--sl-color-purple-700:hsl(272.1 71.7% 47.1%);--sl-color-purple-800:hsl(272.9 67.2% 39.4%);--sl-color-purple-900:hsl(273.6 65.6% 32%);--sl-color-purple-950:hsl(276 59.5% 16.5%);--sl-color-fuchsia-50:hsl(289.1 100% 97.8%);--sl-color-fuchsia-100:hsl(287 100% 95.5%);--sl-color-fuchsia-200:hsl(288.3 95.8% 90.6%);--sl-color-fuchsia-300:hsl(291.1 93.1% 82.9%);--sl-color-fuchsia-400:hsl(292 91.4% 72.5%);--sl-color-fuchsia-500:hsl(292.2 84.1% 60.6%);--sl-color-fuchsia-600:hsl(293.4 69.5% 48.8%);--sl-color-fuchsia-700:hsl(294.7 72.4% 39.8%);--sl-color-fuchsia-800:hsl(295.4 70.2% 32.9%);--sl-color-fuchsia-900:hsl(296.7 63.6% 28%);--sl-color-fuchsia-950:hsl(297.1 56.8% 14.5%);--sl-color-pink-50:hsl(327.3 73.3% 97.1%);--sl-color-pink-100:hsl(325.7 77.8% 94.7%);--sl-color-pink-200:hsl(325.9 84.6% 89.8%);--sl-color-pink-300:hsl(327.4 87.1% 81.8%);--sl-color-pink-400:hsl(328.6 85.5% 70.2%);--sl-color-pink-500:hsl(330.4 81.2% 60.4%);--sl-color-pink-600:hsl(333.3 71.4% 50.6%);--sl-color-pink-700:hsl(335.1 77.6% 42%);--sl-color-pink-800:hsl(335.8 74.4% 35.3%);--sl-color-pink-900:hsl(335.9 69% 30.4%);--sl-color-pink-950:hsl(336.2 65.4% 15.9%);--sl-color-rose-50:hsl(355.7 100% 97.3%);--sl-color-rose-100:hsl(355.6 100% 94.7%);--sl-color-rose-200:hsl(352.7 96.1% 90%);--sl-color-rose-300:hsl(352.6 95.7% 81.8%);--sl-color-rose-400:hsl(351.3 94.5% 71.4%);--sl-color-rose-500:hsl(349.7 89.2% 60.2%);--sl-color-rose-600:hsl(346.8 77.2% 49.8%);--sl-color-rose-700:hsl(345.3 82.7% 40.8%);--sl-color-rose-800:hsl(343.4 79.7% 34.7%);--sl-color-rose-900:hsl(341.5 75.5% 30.4%);--sl-color-rose-950:hsl(341.3 70.1% 17.1%);--sl-color-primary-50:var(--sl-color-sky-50);--sl-color-primary-100:var(--sl-color-sky-100);--sl-color-primary-200:var(--sl-color-sky-200);--sl-color-primary-300:var(--sl-color-sky-300);--sl-color-primary-400:var(--sl-color-sky-400);--sl-color-primary-500:var(--sl-color-sky-500);--sl-color-primary-600:var(--sl-color-sky-600);--sl-color-primary-700:var(--sl-color-sky-700);--sl-color-primary-800:var(--sl-color-sky-800);--sl-color-primary-900:var(--sl-color-sky-900);--sl-color-primary-950:var(--sl-color-sky-950);--sl-color-success-50:var(--sl-color-green-50);--sl-color-success-100:var(--sl-color-green-100);--sl-color-success-200:var(--sl-color-green-200);--sl-color-success-300:var(--sl-color-green-300);--sl-color-success-400:var(--sl-color-green-400);--sl-color-success-500:var(--sl-color-green-500);--sl-color-success-600:var(--sl-color-green-600);--sl-color-success-700:var(--sl-color-green-700);--sl-color-success-800:var(--sl-color-green-800);--sl-color-success-900:var(--sl-color-green-900);--sl-color-success-950:var(--sl-color-green-950);--sl-color-warning-50:var(--sl-color-amber-50);--sl-color-warning-100:var(--sl-color-amber-100);--sl-color-warning-200:var(--sl-color-amber-200);--sl-color-warning-300:var(--sl-color-amber-300);--sl-color-warning-400:var(--sl-color-amber-400);--sl-color-warning-500:var(--sl-color-amber-500);--sl-color-warning-600:var(--sl-color-amber-600);--sl-color-warning-700:var(--sl-color-amber-700);--sl-color-warning-800:var(--sl-color-amber-800);--sl-color-warning-900:var(--sl-color-amber-900);--sl-color-warning-950:var(--sl-color-amber-950);--sl-color-danger-50:var(--sl-color-red-50);--sl-color-danger-100:var(--sl-color-red-100);--sl-color-danger-200:var(--sl-color-red-200);--sl-color-danger-300:var(--sl-color-red-300);--sl-color-danger-400:var(--sl-color-red-400);--sl-color-danger-500:var(--sl-color-red-500);--sl-color-danger-600:var(--sl-color-red-600);--sl-color-danger-700:var(--sl-color-red-700);--sl-color-danger-800:var(--sl-color-red-800);--sl-color-danger-900:var(--sl-color-red-900);--sl-color-danger-950:var(--sl-color-red-950);--sl-color-neutral-50:var(--sl-color-gray-50);--sl-color-neutral-100:var(--sl-color-gray-100);--sl-color-neutral-200:var(--sl-color-gray-200);--sl-color-neutral-300:var(--sl-color-gray-300);--sl-color-neutral-400:var(--sl-color-gray-400);--sl-color-neutral-500:var(--sl-color-gray-500);--sl-color-neutral-600:var(--sl-color-gray-600);--sl-color-neutral-700:var(--sl-color-gray-700);--sl-color-neutral-800:var(--sl-color-gray-800);--sl-color-neutral-900:var(--sl-color-gray-900);--sl-color-neutral-950:var(--sl-color-gray-950);--sl-color-neutral-0:hsl(0, 0%, 100%);--sl-color-neutral-1000:hsl(0, 0%, 0%);--sl-border-radius-small:0.1875rem;--sl-border-radius-medium:0.25rem;--sl-border-radius-large:0.5rem;--sl-border-radius-x-large:1rem;--sl-border-radius-circle:50%;--sl-border-radius-pill:9999px;--sl-shadow-x-small:0 1px 2px hsl(240 3.8% 46.1% / 6%);--sl-shadow-small:0 1px 2px hsl(240 3.8% 46.1% / 12%);--sl-shadow-medium:0 2px 4px hsl(240 3.8% 46.1% / 12%);--sl-shadow-large:0 2px 8px hsl(240 3.8% 46.1% / 12%);--sl-shadow-x-large:0 4px 16px hsl(240 3.8% 46.1% / 12%);--sl-spacing-3x-small:0.125rem;--sl-spacing-2x-small:0.25rem;--sl-spacing-x-small:0.5rem;--sl-spacing-small:0.75rem;--sl-spacing-medium:1rem;--sl-spacing-large:1.25rem;--sl-spacing-x-large:1.75rem;--sl-spacing-2x-large:2.25rem;--sl-spacing-3x-large:3rem;--sl-spacing-4x-large:4.5rem;--sl-transition-x-slow:1000ms;--sl-transition-slow:500ms;--sl-transition-medium:250ms;--sl-transition-fast:150ms;--sl-transition-x-fast:50ms;--sl-font-mono:SFMono-Regular,Consolas,"Liberation Mono",Menlo,monospace;--sl-font-sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";--sl-font-serif:Georgia,"Times New Roman",serif;--sl-font-size-2x-small:0.625rem;--sl-font-size-x-small:0.75rem;--sl-font-size-small:0.875rem;--sl-font-size-medium:1rem;--sl-font-size-large:1.25rem;--sl-font-size-x-large:1.5rem;--sl-font-size-2x-large:2.25rem;--sl-font-size-3x-large:3rem;--sl-font-size-4x-large:4.5rem;--sl-font-weight-light:300;--sl-font-weight-normal:400;--sl-font-weight-semibold:500;--sl-font-weight-bold:700;--sl-letter-spacing-denser:-0.03em;--sl-letter-spacing-dense:-0.015em;--sl-letter-spacing-normal:normal;--sl-letter-spacing-loose:0.075em;--sl-letter-spacing-looser:0.15em;--sl-line-height-denser:1;--sl-line-height-dense:1.4;--sl-line-height-normal:1.8;--sl-line-height-loose:2.2;--sl-line-height-looser:2.6;--sl-focus-ring-color:var(--sl-color-primary-600);--sl-focus-ring-style:solid;--sl-focus-ring-width:3px;--sl-focus-ring:var(--sl-focus-ring-style) var(--sl-focus-ring-width) var(--sl-focus-ring-color);--sl-focus-ring-offset:1px;--sl-button-font-size-small:var(--sl-font-size-x-small);--sl-button-font-size-medium:var(--sl-font-size-small);--sl-button-font-size-large:var(--sl-font-size-medium);--sl-input-height-small:1.875rem;--sl-input-height-medium:2.5rem;--sl-input-height-large:3.125rem;--sl-input-background-color:var(--sl-color-neutral-0);--sl-input-background-color-hover:var(--sl-input-background-color);--sl-input-background-color-focus:var(--sl-input-background-color);--sl-input-background-color-disabled:var(--sl-color-neutral-100);--sl-input-border-color:var(--sl-color-neutral-300);--sl-input-border-color-hover:var(--sl-color-neutral-400);--sl-input-border-color-focus:var(--sl-color-primary-500);--sl-input-border-color-disabled:var(--sl-color-neutral-300);--sl-input-border-width:1px;--sl-input-required-content:"*";--sl-input-required-content-offset:-2px;--sl-input-required-content-color:var(--sl-input-label-color);--sl-input-border-radius-small:var(--sl-border-radius-medium);--sl-input-border-radius-medium:var(--sl-border-radius-medium);--sl-input-border-radius-large:var(--sl-border-radius-medium);--sl-input-font-family:var(--sl-font-sans);--sl-input-font-weight:var(--sl-font-weight-normal);--sl-input-font-size-small:var(--sl-font-size-small);--sl-input-font-size-medium:var(--sl-font-size-medium);--sl-input-font-size-large:var(--sl-font-size-large);--sl-input-letter-spacing:var(--sl-letter-spacing-normal);--sl-input-color:var(--sl-color-neutral-700);--sl-input-color-hover:var(--sl-color-neutral-700);--sl-input-color-focus:var(--sl-color-neutral-700);--sl-input-color-disabled:var(--sl-color-neutral-900);--sl-input-icon-color:var(--sl-color-neutral-500);--sl-input-icon-color-hover:var(--sl-color-neutral-600);--sl-input-icon-color-focus:var(--sl-color-neutral-600);--sl-input-placeholder-color:var(--sl-color-neutral-500);--sl-input-placeholder-color-disabled:var(--sl-color-neutral-600);--sl-input-spacing-small:var(--sl-spacing-small);--sl-input-spacing-medium:var(--sl-spacing-medium);--sl-input-spacing-large:var(--sl-spacing-large);--sl-input-filled-background-color:var(--sl-color-neutral-100);--sl-input-filled-background-color-hover:var(--sl-color-neutral-100);--sl-input-filled-background-color-focus:var(--sl-color-neutral-100);--sl-input-filled-background-color-disabled:var(--sl-color-neutral-100);--sl-input-filled-color:var(--sl-color-neutral-800);--sl-input-filled-color-hover:var(--sl-color-neutral-800);--sl-input-filled-color-focus:var(--sl-color-neutral-700);--sl-input-filled-color-disabled:var(--sl-color-neutral-800);--sl-input-focus-ring-color:hsl(198.6 88.7% 48.4% / 40%);--sl-input-focus-ring-offset:0;--sl-input-label-font-size-small:var(--sl-font-size-small);--sl-input-label-font-size-medium:var(--sl-font-size-medium);--sl-input-label-font-size-large:var(--sl-font-size-large);--sl-input-label-color:inherit;--sl-input-help-text-font-size-small:var(--sl-font-size-x-small);--sl-input-help-text-font-size-medium:var(--sl-font-size-small);--sl-input-help-text-font-size-large:var(--sl-font-size-medium);--sl-input-help-text-color:var(--sl-color-neutral-500);--sl-toggle-size-small:0.875rem;--sl-toggle-size-medium:1.125rem;--sl-toggle-size-large:1.375rem;--sl-overlay-background-color:hsl(240 3.8% 46.1% / 33%);--sl-panel-background-color:var(--sl-color-neutral-0);--sl-panel-border-color:var(--sl-color-neutral-200);--sl-panel-border-width:1px;--sl-tooltip-border-radius:var(--sl-border-radius-medium);--sl-tooltip-background-color:var(--sl-color-neutral-800);--sl-tooltip-color:var(--sl-color-neutral-0);--sl-tooltip-font-family:var(--sl-font-sans);--sl-tooltip-font-weight:var(--sl-font-weight-normal);--sl-tooltip-font-size:var(--sl-font-size-small);--sl-tooltip-line-height:var(--sl-line-height-dense);--sl-tooltip-padding:var(--sl-spacing-2x-small) var(--sl-spacing-x-small);--sl-tooltip-arrow-size:6px;--sl-z-index-drawer:700;--sl-z-index-dialog:800;--sl-z-index-dropdown:900;--sl-z-index-toast:950;--sl-z-index-tooltip:1000}.sl-scroll-lock{overflow:hidden!important}.sl-toast-stack{position:fixed;top:0;inset-inline-end:0;z-index:var(--sl-z-index-toast);width:28rem;max-width:100%;max-height:100%;overflow:auto}.sl-toast-stack sl-alert{margin:var(--sl-spacing-medium)}.sl-toast-stack sl-alert::part(base){box-shadow:var(--sl-shadow-large)}`,Ot=window,Nt=Ot.ShadowRoot&&(void 0===Ot.ShadyCSS||Ot.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Lt=Symbol(),Ht=new WeakMap,Rt=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==Lt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Nt&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=Ht.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Ht.set(e,t))}return t}toString(){return this.cssText}},Bt=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1]),t[0]);return new Rt(o,t,Lt)},Vt=Nt?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new Rt("string"==typeof t?t:t+"",void 0,Lt))(e)})(t):t,Dt=window,Ft=Dt.trustedTypes,jt=Ft?Ft.emptyScript:"",It=Dt.reactiveElementPolyfillSupport,qt={toAttribute(t,e){switch(e){case Boolean:t=t?jt:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},Wt=(t,e)=>e!==t&&(e==e||t==t),Kt={attribute:!0,type:String,converter:qt,reflect:!1,hasChanged:Wt},Qt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const r=this._$Ep(o,e);void 0!==r&&(this._$Ev.set(r,o),t.push(r))})),t}static createProperty(t,e=Kt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(r){const s=this[t];this[e]=r,this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Kt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(Vt(t))}else void 0!==t&&e.push(Vt(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{Nt?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const o=document.createElement("style"),r=Ot.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=e.cssText,t.appendChild(o)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=Kt){var r;const s=this.constructor._$Ep(t,o);if(void 0!==s&&!0===o.reflect){const l=(void 0!==(null===(r=o.converter)||void 0===r?void 0:r.toAttribute)?o.converter:qt).toAttribute(e,o.type);this._$El=t,null==l?this.removeAttribute(s):this.setAttribute(s,l),this._$El=null}}_$AK(t,e){var o;const r=this.constructor,s=r._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=r.getPropertyOptions(s),l="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(o=t.converter)||void 0===o?void 0:o.fromAttribute)?t.converter:qt;this._$El=s,this[s]=l.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,o){let r=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||Wt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Qt.finalized=!0,Qt.elementProperties=new Map,Qt.elementStyles=[],Qt.shadowRootOptions={mode:"open"},null==It||It({ReactiveElement:Qt}),(null!==(Ut=Dt.reactiveElementVersions)&&void 0!==Ut?Ut:Dt.reactiveElementVersions=[]).push("1.4.2");var Gt=window,Jt=Gt.trustedTypes,Zt=Jt?Jt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Xt=`lit$${(Math.random()+"").slice(9)}$`,Yt="?"+Xt,te=`<${Yt}>`,ee=document,oe=(t="")=>ee.createComment(t),re=t=>null===t||"object"!=typeof t&&"function"!=typeof t,se=Array.isArray,le=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ie=/-->/g,ne=/>/g,ae=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),ce=/'/g,ue=/"/g,de=/^(?:script|style|textarea|title)$/i,he=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),pe=Symbol.for("lit-noChange"),ve=Symbol.for("lit-nothing"),be=new WeakMap,fe=ee.createTreeWalker(ee,129,null,!1),me=class{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let s=0,l=0;const i=t.length-1,n=this.parts,[a,c]=((t,e)=>{const o=t.length-1,r=[];let s,l=2===e?"<svg>":"",i=le;for(let e=0;e<o;e++){const o=t[e];let n,a,c=-1,u=0;for(;u<o.length&&(i.lastIndex=u,a=i.exec(o),null!==a);)u=i.lastIndex,i===le?"!--"===a[1]?i=ie:void 0!==a[1]?i=ne:void 0!==a[2]?(de.test(a[2])&&(s=RegExp("</"+a[2],"g")),i=ae):void 0!==a[3]&&(i=ae):i===ae?">"===a[0]?(i=null!=s?s:le,c=-1):void 0===a[1]?c=-2:(c=i.lastIndex-a[2].length,n=a[1],i=void 0===a[3]?ae:'"'===a[3]?ue:ce):i===ue||i===ce?i=ae:i===ie||i===ne?i=le:(i=ae,s=void 0);const d=i===ae&&t[e+1].startsWith("/>")?" ":"";l+=i===le?o+te:c>=0?(r.push(n),o.slice(0,c)+"$lit$"+o.slice(c)+Xt+d):o+Xt+(-2===c?(r.push(void 0),e):d)}const n=l+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==Zt?Zt.createHTML(n):n,r]})(t,e);if(this.el=me.createElement(a,o),fe.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=fe.nextNode())&&n.length<i;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(Xt)){const o=c[l++];if(t.push(e),void 0!==o){const t=r.getAttribute(o.toLowerCase()+"$lit$").split(Xt),e=/([.?@])?(.*)/.exec(o);n.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?we:"?"===e[1]?xe:"@"===e[1]?ke:_e})}else n.push({type:6,index:s})}for(const e of t)r.removeAttribute(e)}if(de.test(r.tagName)){const t=r.textContent.split(Xt),e=t.length-1;if(e>0){r.textContent=Jt?Jt.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],oe()),fe.nextNode(),n.push({type:2,index:++s});r.append(t[e],oe())}}}else if(8===r.nodeType)if(r.data===Yt)n.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(Xt,t+1));)n.push({type:7,index:s}),t+=Xt.length-1}s++}}static createElement(t,e){const o=ee.createElement("template");return o.innerHTML=t,o}};function ge(t,e,o=t,r){var s,l,i,n;if(e===pe)return e;let a=void 0!==r?null===(s=o._$Co)||void 0===s?void 0:s[r]:o._$Cl;const c=re(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(l=null==a?void 0:a._$AO)||void 0===l||l.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,o,r)),void 0!==r?(null!==(i=(n=o)._$Co)&&void 0!==i?i:n._$Co=[])[r]=a:o._$Cl=a),void 0!==a&&(e=ge(t,a._$AS(t,e.values),a,r)),e}var ye=class{constructor(t,e,o,r){var s;this.type=2,this._$AH=ve,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cm=null===(s=null==r?void 0:r.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ge(this,t,e),re(t)?t===ve||null==t||""===t?(this._$AH!==ve&&this._$AR(),this._$AH=ve):t!==this._$AH&&t!==pe&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>se(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==ve&&re(this._$AH)?this._$AA.nextSibling.data=t:this.T(ee.createTextNode(t)),this._$AH=t}$(t){var e;const{values:o,_$litType$:r}=t,s="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=me.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.p(o);else{const t=new class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:o},parts:r}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:ee).importNode(o,!0);fe.currentNode=s;let l=fe.nextNode(),i=0,n=0,a=r[0];for(;void 0!==a;){if(i===a.index){let e;2===a.type?e=new ye(l,l.nextSibling,this,t):1===a.type?e=new a.ctor(l,a.name,a.strings,this,t):6===a.type&&(e=new Ae(l,this,t)),this.u.push(e),a=r[++n]}i!==(null==a?void 0:a.index)&&(l=fe.nextNode(),i++)}return s}p(t){let e=0;for(const o of this.u)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}(s,this),e=t.v(this.options);t.p(o),this.T(e),this._$AH=t}}_$AC(t){let e=be.get(t.strings);return void 0===e&&be.set(t.strings,e=new me(t)),e}k(t){se(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const s of t)r===e.length?e.push(o=new ye(this.O(oe()),this.O(oe()),this,this.options)):o=e[r],o._$AI(s),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}},_e=class{constructor(t,e,o,r,s){this.type=1,this._$AH=ve,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=ve}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,r){const s=this.strings;let l=!1;if(void 0===s)t=ge(this,t,e,0),l=!re(t)||t!==this._$AH&&t!==pe,l&&(this._$AH=t);else{const r=t;let i,n;for(t=s[0],i=0;i<s.length-1;i++)n=ge(this,r[o+i],e,i),n===pe&&(n=this._$AH[i]),l||(l=!re(n)||n!==this._$AH[i]),n===ve?t=ve:t!==ve&&(t+=(null!=n?n:"")+s[i+1]),this._$AH[i]=n}l&&!r&&this.j(t)}j(t){t===ve?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}},we=class extends _e{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ve?void 0:t}},$e=Jt?Jt.emptyScript:"",xe=class extends _e{constructor(){super(...arguments),this.type=4}j(t){t&&t!==ve?this.element.setAttribute(this.name,$e):this.element.removeAttribute(this.name)}},ke=class extends _e{constructor(t,e,o,r,s){super(t,e,o,r,s),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=ge(this,t,e,0))&&void 0!==o?o:ve)===pe)return;const r=this._$AH,s=t===ve&&r!==ve||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,l=t!==ve&&(r===ve||s);s&&this.element.removeEventListener(this.name,this,r),l&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}},Ae=class{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){ge(this,t)}},Ce=Gt.litHtmlPolyfillSupport;null==Ce||Ce(me,ye),(null!==(Pt=Gt.litHtmlVersions)&&void 0!==Pt?Pt:Gt.litHtmlVersions=[]).push("2.4.0");var Se,Ee,ze=class extends Qt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,o)=>{var r,s;const l=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:e;let i=l._$litPart$;if(void 0===i){const t=null!==(s=null==o?void 0:o.renderBefore)&&void 0!==s?s:null;l._$litPart$=i=new ye(e.insertBefore(oe(),t),t,void 0,null!=o?o:{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return pe}};ze.finalized=!0,ze._$litElement$=!0,null===(Se=globalThis.litElementHydrateSupport)||void 0===Se||Se.call(globalThis,{LitElement:ze});var Te=globalThis.litElementPolyfillSupport;null==Te||Te({LitElement:ze}),(null!==(Ee=globalThis.litElementVersions)&&void 0!==Ee?Ee:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Ue,Pe=Bt`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control_label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,Me=Bt`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Oe=Bt`
  ${Me}
  ${Pe}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix::slotted(sl-icon),
  .input__suffix::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide Firefox's clear button on date and time inputs */
  .input--is-firefox input[type='date'],
  .input--is-firefox input[type='time'] {
    clip-path: inset(0 2em 0 0);
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,Ne=1,Le=2,He=3,Re=4,Be=t=>(...e)=>({_$litDirective$:t,values:e}),Ve=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}},De={},Fe=Be(class extends Ve{constructor(t){if(super(t),t.type!==He&&t.type!==Ne&&t.type!==Re)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>void 0===t.strings)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===pe||e===ve)return e;const o=t.element,r=t.name;if(t.type===He){if(e===o[r])return pe}else if(t.type===Re){if(!!e===o.hasAttribute(r))return pe}else if(t.type===Ne&&o.getAttribute(r)===e+"")return pe;return((t,e=De)=>{t._$AH=e})(t),e}}),je=(t="value")=>(e,o)=>{const r=e.constructor,s=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(e,l,i){var n;const a=r.getPropertyOptions(t);if(e===("string"==typeof a.attribute?a.attribute:t)){const e=a.converter||qt,r=("function"==typeof e?e:null!=(n=null==e?void 0:e.fromAttribute)?n:qt.fromAttribute)(i,a.type);this[t]!==r&&(this[o]=r)}s.call(this,e,l,i)}},Ie=Object.defineProperty,qe=Object.defineProperties,We=Object.getOwnPropertyDescriptor,Ke=Object.getOwnPropertyDescriptors,Qe=Object.getOwnPropertySymbols,Ge=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable,Ze=(t,e,o)=>e in t?Ie(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,Xe=(t,e)=>{for(var o in e||(e={}))Ge.call(e,o)&&Ze(t,o,e[o]);if(Qe)for(var o of Qe(e))Je.call(e,o)&&Ze(t,o,e[o]);return t},Ye=(t,e)=>qe(t,Ke(e)),to=(t,e,o,r)=>{for(var s,l=r>1?void 0:r?We(e,o):e,i=t.length-1;i>=0;i--)(s=t[i])&&(l=(r?s(e,o,l):s(l))||l);return r&&l&&Ie(e,o,l),l},eo=new WeakMap,oo=new WeakMap,ro=new WeakMap,so=class{constructor(t,e){(this.host=t).addController(this),this.options=Xe({form:t=>t.closest("form"),name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!=(e=t.disabled)&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),setValue:(t,e)=>t.value=e},e),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(eo.has(this.form)?eo.get(this.form).add(this.host):eo.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ro.has(this.form)||(ro.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){var t;this.form&&(null==(t=eo.get(this.form))||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ro.has(this.form)&&(this.form.reportValidity=ro.get(this.form),ro.delete(this.form)),this.form=void 0),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){var t;const e=this.host,o=Boolean(oo.get(e)),r=Boolean(e.invalid),s=Boolean(e.required);(null==(t=this.form)?void 0:t.noValidate)?(e.removeAttribute("data-required"),e.removeAttribute("data-optional"),e.removeAttribute("data-invalid"),e.removeAttribute("data-valid"),e.removeAttribute("data-user-invalid"),e.removeAttribute("data-user-valid")):(e.toggleAttribute("data-required",s),e.toggleAttribute("data-optional",!s),e.toggleAttribute("data-invalid",r),e.toggleAttribute("data-valid",!r),e.toggleAttribute("data-user-invalid",r&&o),e.toggleAttribute("data-user-valid",!r&&o))}handleFormData(t){const e=this.options.disabled(this.host),o=this.options.name(this.host),r=this.options.value(this.host),s="sl-button"===this.host.tagName.toLowerCase();e||s||"string"!=typeof o||void 0===r||(Array.isArray(r)?r.forEach((e=>{t.formData.append(o,e.toString())})):t.formData.append(o,r.toString()))}handleFormSubmit(t){var e;const o=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=eo.get(this.form))||e.forEach((t=>{this.setUserInteracted(t,!0)}))),!this.form||this.form.noValidate||o||r(this.host)||(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0}setUserInteracted(t,e){oo.set(t,e),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((t=>{e.hasAttribute(t)&&o.setAttribute(t,e.getAttribute(t))}))),this.form.append(o),o.click(),o.remove()}}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}},lo=new Set,io=new MutationObserver(uo),no=new Map,ao=document.documentElement.dir||"ltr",co=document.documentElement.lang||navigator.language;function uo(){ao=document.documentElement.dir||"ltr",co=document.documentElement.lang||navigator.language,[...lo.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}io.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});var ho=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){lo.add(this.host)}hostDisconnected(){lo.delete(this.host)}dir(){return`${this.host.dir||ao}`.toLowerCase()}lang(){return`${this.host.lang||co}`.toLowerCase()}term(t,...e){var o,r;const s=new Intl.Locale(this.lang()),l=null==s?void 0:s.language.toLowerCase(),i=null!==(r=null===(o=null==s?void 0:s.region)||void 0===o?void 0:o.toLowerCase())&&void 0!==r?r:"",n=no.get(`${l}-${i}`),a=no.get(l);let c;if(n&&n[t])c=n[t];else if(a&&a[t])c=a[t];else{if(!Ue||!Ue[t])return console.error(`No translation found for: ${String(t)}`),t;c=Ue[t]}return"function"==typeof c?c(...e):c}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}},po=class extends ho{};!function(...t){t.map((t=>{const e=t.$code.toLowerCase();no.has(e)?no.set(e,Object.assign(Object.assign({},no.get(e)),t)):no.set(e,t),Ue||(Ue=t)})),uo()}({$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"});var vo=class{constructor(t,...e){this.slotNames=[],(this.host=t).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}},bo=t=>null!=t?t:ve
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,fo=Be(class extends Ve{constructor(t){var e;if(super(t),t.type!==Ne||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var o,r;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(o=this.st)||void 0===o?void 0:o.has(t))&&this.nt.add(t);return this.render(e)}const s=t.element.classList;this.nt.forEach((t=>{t in e||(s.remove(t),this.nt.delete(t))}));for(const t in e){const o=!!e[t];o===this.nt.has(t)||(null===(r=this.st)||void 0===r?void 0:r.has(t))||(o?(s.add(t),this.nt.add(t)):(s.remove(t),this.nt.delete(t)))}return pe}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function mo(t,e){const o=Xe({waitUntilFirstUpdate:!1},e);return(e,r)=>{const{update:s}=e;if(t in e){const l=t;e.update=function(t){if(t.has(l)){const e=t.get(l),s=this[l];e!==s&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[r](e,s))}s.call(this,t)}}}}var go=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:r}=e;return{kind:o,elements:r,finisher(e){customElements.define(t,e)}}})(t,e),yo=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Ye(Xe({},e),{finisher(o){o.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function _o(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):yo(t,e)}function wo(t){return _o(Ye(Xe({},t),{state:!0}))}var $o;function xo(t,e){return(({finisher:t,descriptor:e})=>(o,r)=>{var s;if(void 0===r){const r=null!==(s=o.originalKey)&&void 0!==s?s:o.key,l=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(o.key)}:Ye(Xe({},o),{key:r});return null!=t&&(l.finisher=function(e){t(e,r)}),l}{const s=o.constructor;void 0!==e&&Object.defineProperty(o,r,e(r)),null==t||t(s,r)}})({descriptor:o=>{const r={get(){var e,o;return null!==(o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof o?Symbol():"__"+o;r.get=function(){var o,r;return void 0===this[e]&&(this[e]=null!==(r=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(t))&&void 0!==r?r:null),this[e]}}return r}})}null===($o=window.HTMLSlotElement)||void 0===$o||$o.prototype.assignedElements;var ko,Ao=class extends ze{emit(t,e){const o=new CustomEvent(t,Xe({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}};to([_o()],Ao.prototype,"dir",2),to([_o()],Ao.prototype,"lang",2);var Co=null==(ko=navigator.userAgentData)?void 0:ko.brands.some((t=>t.brand.includes("Chromium"))),So=!Co&&navigator.userAgent.includes("Firefox"),Eo=class extends Ao{constructor(){super(...arguments),this.formSubmitController=new so(this),this.hasSlotController=new vo(this,"help-text","label"),this.localize=new po(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.type="text",this.size="medium",this.name="",this.value="",this.defaultValue="",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.placeholder="",this.disabled=!1,this.readonly=!1,this.required=!1,this.spellcheck=!0}get valueAsDate(){var t,e;return null!=(e=null==(t=this.input)?void 0:t.valueAsDate)?e:null}set valueAsDate(t){const e=document.createElement("input");e.type="date",e.valueAsDate=t,this.value=e.value}get valueAsNumber(){var t,e;return null!=(e=null==(t=this.input)?void 0:t.valueAsNumber)?e:parseFloat(this.value)}set valueAsNumber(t){const e=document.createElement("input");e.type="number",e.valueAsNumber=t,this.value=e.value}firstUpdated(){this.invalid=!this.input.checkValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,r){this.input.setRangeText(t,e,o,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),t.stopPropagation()}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleStepChange(){this.input.step=String(this.step),this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(){this.invalid=!0}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;"Enter"!==t.key||e||setTimeout((()=>{t.defaultPrevented||t.isComposing||this.formSubmitController.submit()}))}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleValueChange(){this.input.value=this.value,this.invalid=!this.input.checkValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,r=!!this.helpText||!!e,s=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0);return he`
      <div
        part="form-control"
        class=${fo({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":o,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${fo({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--invalid":this.invalid,"input--no-spin-buttons":this.noSpinButtons,"input--is-firefox":So})}
          >
            <slot name="prefix" part="prefix" class="input__prefix"></slot>
            <input
              part="input"
              id="input"
              class="input__control"
              type=${"password"===this.type&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${bo(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${bo(this.placeholder)}
              minlength=${bo(this.minlength)}
              maxlength=${bo(this.maxlength)}
              min=${bo(this.min)}
              max=${bo(this.max)}
              step=${bo(this.step)}
              .value=${Fe(this.value)}
              autocapitalize=${bo("password"===this.type?"off":this.autocapitalize)}
              autocomplete=${bo("password"===this.type?"off":this.autocomplete)}
              autocorrect=${bo("password"===this.type?"off":this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${bo(this.pattern)}
              enterkeyhint=${bo(this.enterkeyhint)}
              inputmode=${bo(this.inputmode)}
              aria-describedby="help-text"
              aria-invalid=${this.invalid?"true":"false"}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s?he`
                    <button
                      part="clear-button"
                      class="input__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}
            ${this.passwordToggle&&!this.disabled?he`
                    <button
                      part="password-toggle-button"
                      class="input__password-toggle"
                      type="button"
                      aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                      @click=${this.handlePasswordToggle}
                      tabindex="-1"
                    >
                      ${this.passwordVisible?he`
                            <slot name="show-password-icon">
                              <sl-icon name="eye-slash" library="system"></sl-icon>
                            </slot>
                          `:he`
                            <slot name="hide-password-icon">
                              <sl-icon name="eye" library="system"></sl-icon>
                            </slot>
                          `}
                    </button>
                  `:""}

            <slot name="suffix" part="suffix" class="input__suffix"></slot>
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          ${this.helpText}
        </slot>
        </div>
      </div>
    `}};Eo.styles=Oe,to([xo(".input__control")],Eo.prototype,"input",2),to([wo()],Eo.prototype,"hasFocus",2),to([wo()],Eo.prototype,"invalid",2),to([_o()],Eo.prototype,"title",2),to([_o({reflect:!0})],Eo.prototype,"type",2),to([_o({reflect:!0})],Eo.prototype,"size",2),to([_o()],Eo.prototype,"name",2),to([_o()],Eo.prototype,"value",2),to([je()],Eo.prototype,"defaultValue",2),to([_o({type:Boolean,reflect:!0})],Eo.prototype,"filled",2),to([_o({type:Boolean,reflect:!0})],Eo.prototype,"pill",2),to([_o()],Eo.prototype,"label",2),to([_o({attribute:"help-text"})],Eo.prototype,"helpText",2),to([_o({type:Boolean})],Eo.prototype,"clearable",2),to([_o({attribute:"password-toggle",type:Boolean})],Eo.prototype,"passwordToggle",2),to([_o({attribute:"password-visible",type:Boolean})],Eo.prototype,"passwordVisible",2),to([_o({attribute:"no-spin-buttons",type:Boolean})],Eo.prototype,"noSpinButtons",2),to([_o()],Eo.prototype,"placeholder",2),to([_o({type:Boolean,reflect:!0})],Eo.prototype,"disabled",2),to([_o({type:Boolean,reflect:!0})],Eo.prototype,"readonly",2),to([_o({type:Number})],Eo.prototype,"minlength",2),to([_o({type:Number})],Eo.prototype,"maxlength",2),to([_o()],Eo.prototype,"min",2),to([_o()],Eo.prototype,"max",2),to([_o()],Eo.prototype,"step",2),to([_o()],Eo.prototype,"pattern",2),to([_o({type:Boolean,reflect:!0})],Eo.prototype,"required",2),to([_o()],Eo.prototype,"autocapitalize",2),to([_o()],Eo.prototype,"autocorrect",2),to([_o()],Eo.prototype,"autocomplete",2),to([_o({type:Boolean})],Eo.prototype,"autofocus",2),to([_o()],Eo.prototype,"enterkeyhint",2),to([_o({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],Eo.prototype,"spellcheck",2),to([_o()],Eo.prototype,"inputmode",2),to([mo("disabled",{waitUntilFirstUpdate:!0})],Eo.prototype,"handleDisabledChange",1),to([mo("step",{waitUntilFirstUpdate:!0})],Eo.prototype,"handleStepChange",1),to([mo("value",{waitUntilFirstUpdate:!0})],Eo.prototype,"handleValueChange",1),Eo=to([go("sl-input")],Eo);var zo="";function To(t){zo=t}var Uo={name:"default",resolver:t=>`${function(){if(!zo){const t=[...document.getElementsByTagName("script")],e=t.find((t=>t.hasAttribute("data-shoelace")));if(e)To(e.getAttribute("data-shoelace"));else{const e=t.find((t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)));let o="";e&&(o=e.getAttribute("src")),To(o.split("/").slice(0,-1).join("/"))}}return zo.replace(/\/$/,"")}()}/assets/icons/${t}.svg`},Po={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},Mo=[Uo,{name:"system",resolver:t=>t in Po?`data:image/svg+xml,${encodeURIComponent(Po[t])}`:""}],Oo=[];function No(t){return Mo.find((e=>e.name===t))}var Lo=new Map;var Ho=new Map;async function Ro(t){if(Ho.has(t))return Ho.get(t);const e=await function(t,e="cors"){if(Lo.has(t))return Lo.get(t);const o=fetch(t,{mode:e}).then((async t=>({ok:t.ok,status:t.status,html:await t.text()})));return Lo.set(t,o),o}(t),o={ok:e.ok,status:e.status,svg:null};if(e.ok){const t=document.createElement("div");t.innerHTML=e.html;const r=t.firstElementChild;o.svg="svg"===(null==r?void 0:r.tagName.toLowerCase())?r.outerHTML:""}return Ho.set(t,o),o}var Bo=Bt`
  ${Me}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Vo=class extends Ve{constructor(t){if(super(t),this.it=ve,t.type!==Le)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ve||null==t)return this._t=void 0,this.it=t;if(t===pe)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Vo.directiveName="unsafeHTML",Vo.resultType=1;var Do=class extends Vo{};Do.directiveName="unsafeSVG",Do.resultType=2;var Fo,jo=Be(Do),Io=class extends Ao{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){var t;super.connectedCallback(),t=this,Oo.push(t)}firstUpdated(){this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,Oo=Oo.filter((e=>e!==t))}getUrl(){const t=No(this.library);return this.name&&t?t.resolver(this.name):this.src}redraw(){this.setIcon()}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const e=No(this.library),o=this.getUrl();if(Fo||(Fo=new DOMParser),o)try{const r=await Ro(o);if(o!==this.getUrl())return;if(r.ok){const o=Fo.parseFromString(r.svg,"text/html").body.querySelector("svg");null!==o?(null==(t=null==e?void 0:e.mutator)||t.call(e,o),this.svg=o.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch(t){this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){return he` ${jo(this.svg)} `}};Io.styles=Bo,to([wo()],Io.prototype,"svg",2),to([_o({reflect:!0})],Io.prototype,"name",2),to([_o()],Io.prototype,"src",2),to([_o()],Io.prototype,"label",2),to([_o({reflect:!0})],Io.prototype,"library",2),to([mo("label")],Io.prototype,"handleLabelChange",1),to([mo("name"),mo("src"),mo("library")],Io.prototype,"setIcon",1),Io=to([go("sl-icon")],Io);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var qo=Bt`
  ${Me}
  ${Pe}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
  }
`,Wo=class extends Ao{constructor(){super(...arguments),this.formSubmitController=new so(this),this.hasSlotController=new vo(this,"help-text","label"),this.hasFocus=!1,this.invalid=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.required=!1,this.spellcheck=!0,this.defaultValue=""}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((()=>this.setTextareaHeight())),this.updateComplete.then((()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)}))}firstUpdated(){this.invalid=!this.input.checkValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){return t?("number"==typeof t.top&&(this.input.scrollTop=t.top),void("number"==typeof t.left&&(this.input.scrollLeft=t.left))):{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,r){this.input.setRangeText(t,e,o,r),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleRowsChange(){this.setTextareaHeight()}handleValueChange(){this.input.value=this.value,this.invalid=!this.input.checkValidity(),this.updateComplete.then((()=>this.setTextareaHeight()))}setTextareaHeight(){"auto"===this.resize?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,r=!!this.helpText||!!e;return he`
      <div
        part="form-control"
        class=${fo({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":o,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${fo({textarea:!0,"textarea--small":"small"===this.size,"textarea--medium":"medium"===this.size,"textarea--large":"large"===this.size,"textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--invalid":this.invalid,"textarea--resize-none":"none"===this.resize,"textarea--resize-vertical":"vertical"===this.resize,"textarea--resize-auto":"auto"===this.resize})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${bo(this.name)}
              .value=${Fe(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${bo(this.placeholder)}
              rows=${bo(this.rows)}
              minlength=${bo(this.minlength)}
              maxlength=${bo(this.maxlength)}
              autocapitalize=${bo(this.autocapitalize)}
              autocorrect=${bo(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${bo(this.spellcheck)}
              enterkeyhint=${bo(this.enterkeyhint)}
              inputmode=${bo(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </div>
    `}};Wo.styles=qo,to([xo(".textarea__control")],Wo.prototype,"input",2),to([wo()],Wo.prototype,"hasFocus",2),to([wo()],Wo.prototype,"invalid",2),to([_o()],Wo.prototype,"title",2),to([_o()],Wo.prototype,"name",2),to([_o()],Wo.prototype,"value",2),to([_o({reflect:!0})],Wo.prototype,"size",2),to([_o({type:Boolean,reflect:!0})],Wo.prototype,"filled",2),to([_o()],Wo.prototype,"label",2),to([_o({attribute:"help-text"})],Wo.prototype,"helpText",2),to([_o()],Wo.prototype,"placeholder",2),to([_o({type:Number})],Wo.prototype,"rows",2),to([_o()],Wo.prototype,"resize",2),to([_o({type:Boolean,reflect:!0})],Wo.prototype,"disabled",2),to([_o({type:Boolean,reflect:!0})],Wo.prototype,"readonly",2),to([_o({type:Number})],Wo.prototype,"minlength",2),to([_o({type:Number})],Wo.prototype,"maxlength",2),to([_o({type:Boolean,reflect:!0})],Wo.prototype,"required",2),to([_o()],Wo.prototype,"autocapitalize",2),to([_o()],Wo.prototype,"autocorrect",2),to([_o()],Wo.prototype,"autocomplete",2),to([_o({type:Boolean})],Wo.prototype,"autofocus",2),to([_o()],Wo.prototype,"enterkeyhint",2),to([_o({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],Wo.prototype,"spellcheck",2),to([_o()],Wo.prototype,"inputmode",2),to([je()],Wo.prototype,"defaultValue",2),to([mo("disabled",{waitUntilFirstUpdate:!0})],Wo.prototype,"handleDisabledChange",1),to([mo("rows",{waitUntilFirstUpdate:!0})],Wo.prototype,"handleRowsChange",1),to([mo("value",{waitUntilFirstUpdate:!0})],Wo.prototype,"handleValueChange",1),Wo=to([go("sl-textarea")],Wo);var Ko=Bt`
  ${Me}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,Qo=class extends Ao{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Qo.styles=Ko,to([_o({type:Boolean,reflect:!0})],Qo.prototype,"vertical",2),to([mo("vertical")],Qo.prototype,"handleVerticalChange",1),Qo=to([go("sl-divider")],Qo);var Go=Bt`
  ${Me}

  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    cursor: pointer;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`;function Jo(t,e){return new Promise((o=>{t.addEventListener(e,(function r(s){s.target===t&&(t.removeEventListener(e,r),o())}))}))}function Zo(t,e,o){return new Promise((r=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=t.animate(e,Ye(Xe({},o),{duration:Xo()?0:o.duration}));s.addEventListener("cancel",r,{once:!0}),s.addEventListener("finish",r,{once:!0})}))}function Xo(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Yo(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{const o=requestAnimationFrame(e);t.addEventListener("cancel",(()=>o),{once:!0}),t.addEventListener("finish",(()=>o),{once:!0}),t.cancel()})))))}function tr(t,e){return t.map((t=>Ye(Xe({},t),{height:"auto"===t.height?`${e}px`:t.height})))}var er=new Map,or=new WeakMap;function rr(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function sr(t,e){er.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function lr(t,e,o){const r=or.get(t);if(null==r?void 0:r[e])return rr(r[e],o.dir);const s=er.get(e);return s?rr(s,o.dir):{keyframes:[],options:{duration:0}}}var ir=class extends Ao{constructor(){super(...arguments),this.localize=new po(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.hidden=!this.open,this.body.style.height=this.open?"auto":"0"}async show(){if(!this.open&&!this.disabled)return this.open=!0,Jo(this,"sl-after-show")}async hide(){if(this.open&&!this.disabled)return this.open=!1,Jo(this,"sl-after-hide")}handleSummaryClick(){this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.open?this.hide():this.show()),"ArrowUp"!==t.key&&"ArrowLeft"!==t.key||(t.preventDefault(),this.hide()),"ArrowDown"!==t.key&&"ArrowRight"!==t.key||(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.emit("sl-show",{cancelable:!0}).defaultPrevented)return void(this.open=!1);await Yo(this.body),this.body.hidden=!1;const{keyframes:t,options:e}=lr(this,"details.show",{dir:this.localize.dir()});await Zo(this.body,tr(t,this.body.scrollHeight),e),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented)return void(this.open=!0);await Yo(this.body);const{keyframes:t,options:e}=lr(this,"details.hide",{dir:this.localize.dir()});await Zo(this.body,tr(t,this.body.scrollHeight),e),this.body.hidden=!0,this.body.style.height="auto",this.emit("sl-after-hide")}}render(){const t="rtl"===this.localize.dir();return he`
      <div
        part="base"
        class=${fo({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
      >
        <header
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </header>

        <div class="details__body">
          <slot part="content" id="content" class="details__content" role="region" aria-labelledby="header"></slot>
        </div>
      </div>
    `}};ir.styles=Go,to([xo(".details")],ir.prototype,"details",2),to([xo(".details__header")],ir.prototype,"header",2),to([xo(".details__body")],ir.prototype,"body",2),to([xo(".details__expand-icon-slot")],ir.prototype,"expandIconSlot",2),to([_o({type:Boolean,reflect:!0})],ir.prototype,"open",2),to([_o()],ir.prototype,"summary",2),to([_o({type:Boolean,reflect:!0})],ir.prototype,"disabled",2),to([mo("open",{waitUntilFirstUpdate:!0})],ir.prototype,"handleOpenChange",1),ir=to([go("sl-details")],ir),sr("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}}),sr("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var nr=Bt`
  ${Me}

  :host {
    display: inline-block;
  }
`,ar=Be(class extends Ve{constructor(t){var e;if(super(t),t.type!==Ne||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,o)=>{const r=t[o];return null==r?e:e+`${o=o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:o}=t.element;if(void 0===this.vt){this.vt=new Set;for(const t in e)this.vt.add(t);return this.render(e)}this.vt.forEach((t=>{null==e[t]&&(this.vt.delete(t),t.includes("-")?o.removeProperty(t):o[t]="")}));for(const t in e){const r=e[t];null!=r&&(this.vt.add(t),t.includes("-")?o.setProperty(t,r):o[t]=r)}return pe}}),cr=null,ur=class{};ur.render=function(t,e){cr(t,e)},self.QrCreator=ur,function(t){function e(e,o,r,s){var l={},i=t(r,o);i.u(e),i.J(),s=s||0;var n=i.h(),a=i.h()+2*s;return l.text=e,l.level=o,l.version=r,l.O=a,l.a=function(t,e){return e-=s,!(0>(t-=s)||t>=n||0>e||e>=n)&&i.a(t,e)},l}function o(t,e,o,r,s,l,i,n,a,c){function u(e,o,r,s,i,n,a){e?(t.lineTo(o+n,r+a),t.arcTo(o,r,s,i,l)):t.lineTo(o,r)}i?t.moveTo(e+l,o):t.moveTo(e,o),u(n,r,o,r,s,-l,0),u(a,r,s,e,s,0,-l),u(c,e,s,e,o,l,0),u(i,e,o,r,o,0,l)}function r(t,e,o,r,s,l,i,n,a,c){function u(e,o,r,s){t.moveTo(e+r,o),t.lineTo(e,o),t.lineTo(e,o+s),t.arcTo(e,o,e+r,o,l)}i&&u(e,o,l,l),n&&u(r,o,-l,l),a&&u(r,s,-l,-l),c&&u(e,s,l,-l)}function s(t,s){t:{var l=s.text,i=s.v,n=s.N,a=s.K,c=s.P;for(n=Math.max(1,n||1),a=Math.min(40,a||40);n<=a;n+=1)try{var u=e(l,i,n,c);break t}catch(t){}u=void 0}if(!u)return null;for(l=t.getContext("2d"),s.background&&(l.fillStyle=s.background,l.fillRect(s.left,s.top,s.size,s.size)),i=u.O,a=s.size/i,l.beginPath(),c=0;c<i;c+=1)for(n=0;n<i;n+=1){var d=l,h=s.left+n*a,p=s.top+c*a,v=c,b=n,f=u.a,m=h+a,g=p+a,y=v-1,_=v+1,w=b-1,$=b+1,x=Math.floor(Math.min(.5,Math.max(0,s.R))*a),k=f(v,b),A=f(y,w),C=f(y,b);y=f(y,$);var S=f(v,$);$=f(_,$),b=f(_,b),_=f(_,w),v=f(v,w),h=Math.round(h),p=Math.round(p),m=Math.round(m),g=Math.round(g),k?o(d,h,p,m,g,x,!C&&!v,!C&&!S,!b&&!S,!b&&!v):r(d,h,p,m,g,x,C&&v&&A,C&&S&&y,b&&S&&$,b&&v&&_)}return function(t,e){var o=e.fill;if("string"==typeof o)t.fillStyle=o;else{var r=o.type,s=o.colorStops;if(o=o.position.map((t=>Math.round(t*e.size))),"linear-gradient"===r)var l=t.createLinearGradient.apply(t,o);else{if("radial-gradient"!==r)throw Error("Unsupported fill");l=t.createRadialGradient.apply(t,o)}s.forEach((([t,e])=>{l.addColorStop(t,e)})),t.fillStyle=l}}(l,s),l.fill(),t}var l={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};cr=function(t,e){var o={};Object.assign(o,l,t),o.N=o.minVersion,o.K=o.maxVersion,o.v=o.ecLevel,o.left=o.left,o.top=o.top,o.size=o.size,o.fill=o.fill,o.background=o.background,o.text=o.text,o.R=o.radius,o.P=o.quiet,e instanceof HTMLCanvasElement?(e.width===o.size&&e.height===o.size||(e.width=o.size,e.height=o.size),e.getContext("2d").clearRect(0,0,e.width,e.height),s(e,o)):((t=document.createElement("canvas")).width=o.size,t.height=o.size,o=s(t,o),e.appendChild(o))}}(function(){function t(s,i){function n(t,e){for(var o=-1;7>=o;o+=1)if(!(-1>=t+o||d<=t+o))for(var r=-1;7>=r;r+=1)-1>=e+r||d<=e+r||(u[t+o][e+r]=0<=o&&6>=o&&(0==r||6==r)||0<=r&&6>=r&&(0==o||6==o)||2<=o&&4>=o&&2<=r&&4>=r)}function a(t,o){for(var i=d=4*s+17,a=Array(i),v=0;v<i;v+=1){a[v]=Array(i);for(var b=0;b<i;b+=1)a[v][b]=null}for(u=a,n(0,0),n(d-7,0),n(0,d-7),i=r.G(s),a=0;a<i.length;a+=1)for(v=0;v<i.length;v+=1){b=i[a];var f=i[v];if(null==u[b][f])for(var m=-2;2>=m;m+=1)for(var g=-2;2>=g;g+=1)u[b+m][f+g]=-2==m||2==m||-2==g||2==g||0==m&&0==g}for(i=8;i<d-8;i+=1)null==u[i][6]&&(u[i][6]=0==i%2);for(i=8;i<d-8;i+=1)null==u[6][i]&&(u[6][i]=0==i%2);for(i=r.w(c<<3|o),a=0;15>a;a+=1)v=!t&&1==(i>>a&1),u[6>a?a:8>a?a+1:d-15+a][8]=v,u[8][8>a?d-a-1:9>a?15-a:14-a]=v;if(u[d-8][8]=!t,7<=s){for(i=r.A(s),a=0;18>a;a+=1)v=!t&&1==(i>>a&1),u[Math.floor(a/3)][a%3+d-8-3]=v;for(a=0;18>a;a+=1)v=!t&&1==(i>>a&1),u[a%3+d-8-3][Math.floor(a/3)]=v}if(null==h){for(t=l.I(s,c),i=function(){var t=[],e=0,o={B:function(){return t},c:function(e){return 1==(t[Math.floor(e/8)]>>>7-e%8&1)},put:function(t,e){for(var r=0;r<e;r+=1)o.m(1==(t>>>e-r-1&1))},f:function(){return e},m:function(o){var r=Math.floor(e/8);t.length<=r&&t.push(0),o&&(t[r]|=128>>>e%8),e+=1}};return o}(),a=0;a<p.length;a+=1)v=p[a],i.put(4,4),i.put(v.b(),r.f(4,s)),v.write(i);for(a=v=0;a<t.length;a+=1)v+=t[a].j;if(i.f()>8*v)throw Error("code length overflow. ("+i.f()+">"+8*v+")");for(i.f()+4<=8*v&&i.put(0,4);0!=i.f()%8;)i.m(!1);for(;!(i.f()>=8*v)&&(i.put(236,8),!(i.f()>=8*v));)i.put(17,8);var y=0;for(v=a=0,b=Array(t.length),f=Array(t.length),m=0;m<t.length;m+=1){var _=t[m].j,w=t[m].o-_;for(a=Math.max(a,_),v=Math.max(v,w),b[m]=Array(_),g=0;g<b[m].length;g+=1)b[m][g]=255&i.B()[g+y];for(y+=_,g=r.C(w),_=e(b[m],g.b()-1).l(g),f[m]=Array(g.b()-1),g=0;g<f[m].length;g+=1)w=g+_.b()-f[m].length,f[m][g]=0<=w?_.c(w):0}for(g=i=0;g<t.length;g+=1)i+=t[g].o;for(i=Array(i),g=y=0;g<a;g+=1)for(m=0;m<t.length;m+=1)g<b[m].length&&(i[y]=b[m][g],y+=1);for(g=0;g<v;g+=1)for(m=0;m<t.length;m+=1)g<f[m].length&&(i[y]=f[m][g],y+=1);h=i}for(t=h,i=-1,a=d-1,v=7,b=0,o=r.F(o),f=d-1;0<f;f-=2)for(6==f&&--f;;){for(m=0;2>m;m+=1)null==u[a][f-m]&&(g=!1,b<t.length&&(g=1==(t[b]>>>v&1)),o(a,f-m)&&(g=!g),u[a][f-m]=g,-1==--v&&(b+=1,v=7));if(0>(a+=i)||d<=a){a-=i,i=-i;break}}}var c=o[i],u=null,d=0,h=null,p=[],v={u:function(e){e=function(e){var o=t.s(e);return{S:function(){return 4},b:function(){return o.length},write:function(t){for(var e=0;e<o.length;e+=1)t.put(o[e],8)}}}(e),p.push(e),h=null},a:function(t,e){if(0>t||d<=t||0>e||d<=e)throw Error(t+","+e);return u[t][e]},h:function(){return d},J:function(){for(var t=0,e=0,o=0;8>o;o+=1){a(!0,o);var s=r.D(v);(0==o||t>s)&&(t=s,e=o)}a(!1,e)}};return v}function e(t,o){if(void 0===t.length)throw Error(t.length+"/"+o);var r=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var r=Array(t.length-e+o),s=0;s<t.length-e;s+=1)r[s]=t[s+e];return r}(),l={c:function(t){return r[t]},b:function(){return r.length},multiply:function(t){for(var o=Array(l.b()+t.b()-1),r=0;r<l.b();r+=1)for(var i=0;i<t.b();i+=1)o[r+i]^=s.i(s.g(l.c(r))+s.g(t.c(i)));return e(o,0)},l:function(t){if(0>l.b()-t.b())return l;for(var o=s.g(l.c(0))-s.g(t.c(0)),r=Array(l.b()),i=0;i<l.b();i+=1)r[i]=l.c(i);for(i=0;i<t.b();i+=1)r[i]^=s.i(s.g(t.c(i))+o);return e(r,0).l(t)}};return l}t.s=function(t){for(var e=[],o=0;o<t.length;o++){var r=t.charCodeAt(o);128>r?e.push(r):2048>r?e.push(192|r>>6,128|63&r):55296>r||57344<=r?e.push(224|r>>12,128|r>>6&63,128|63&r):(o++,r=65536+((1023&r)<<10|1023&t.charCodeAt(o)),e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r))}return e};var o={L:1,M:0,Q:3,H:2},r=function(){function t(t){for(var e=0;0!=t;)e+=1,t>>>=1;return e}var o=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],r={w:function(e){for(var o=e<<10;0<=t(o)-t(1335);)o^=1335<<t(o)-t(1335);return 21522^(e<<10|o)},A:function(e){for(var o=e<<12;0<=t(o)-t(7973);)o^=7973<<t(o)-t(7973);return e<<12|o},G:function(t){return o[t-1]},F:function(t){switch(t){case 0:return function(t,e){return 0==(t+e)%2};case 1:return function(t){return 0==t%2};case 2:return function(t,e){return 0==e%3};case 3:return function(t,e){return 0==(t+e)%3};case 4:return function(t,e){return 0==(Math.floor(t/2)+Math.floor(e/3))%2};case 5:return function(t,e){return 0==t*e%2+t*e%3};case 6:return function(t,e){return 0==(t*e%2+t*e%3)%2};case 7:return function(t,e){return 0==(t*e%3+(t+e)%2)%2};default:throw Error("bad maskPattern:"+t)}},C:function(t){for(var o=e([1],0),r=0;r<t;r+=1)o=o.multiply(e([1,s.i(r)],0));return o},f:function(t,e){if(4!=t||1>e||40<e)throw Error("mode: "+t+"; type: "+e);return 10>e?8:16},D:function(t){for(var e=t.h(),o=0,r=0;r<e;r+=1)for(var s=0;s<e;s+=1){for(var l=0,i=t.a(r,s),n=-1;1>=n;n+=1)if(!(0>r+n||e<=r+n))for(var a=-1;1>=a;a+=1)0>s+a||e<=s+a||(0!=n||0!=a)&&i==t.a(r+n,s+a)&&(l+=1);5<l&&(o+=3+l-5)}for(r=0;r<e-1;r+=1)for(s=0;s<e-1;s+=1)l=0,t.a(r,s)&&(l+=1),t.a(r+1,s)&&(l+=1),t.a(r,s+1)&&(l+=1),t.a(r+1,s+1)&&(l+=1),(0==l||4==l)&&(o+=3);for(r=0;r<e;r+=1)for(s=0;s<e-6;s+=1)t.a(r,s)&&!t.a(r,s+1)&&t.a(r,s+2)&&t.a(r,s+3)&&t.a(r,s+4)&&!t.a(r,s+5)&&t.a(r,s+6)&&(o+=40);for(s=0;s<e;s+=1)for(r=0;r<e-6;r+=1)t.a(r,s)&&!t.a(r+1,s)&&t.a(r+2,s)&&t.a(r+3,s)&&t.a(r+4,s)&&!t.a(r+5,s)&&t.a(r+6,s)&&(o+=40);for(s=l=0;s<e;s+=1)for(r=0;r<e;r+=1)t.a(r,s)&&(l+=1);return o+Math.abs(100*l/e/e-50)/5*10}};return r}(),s=function(){for(var t=Array(256),e=Array(256),o=0;8>o;o+=1)t[o]=1<<o;for(o=8;256>o;o+=1)t[o]=t[o-4]^t[o-5]^t[o-6]^t[o-8];for(o=0;255>o;o+=1)e[t[o]]=o;return{g:function(t){if(1>t)throw Error("glog("+t+")");return e[t]},i:function(e){for(;0>e;)e+=255;for(;256<=e;)e-=255;return t[e]}}}(),l=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],e={I:function(e,r){var s=function(e,r){switch(r){case o.L:return t[4*(e-1)];case o.M:return t[4*(e-1)+1];case o.Q:return t[4*(e-1)+2];case o.H:return t[4*(e-1)+3]}}(e,r);if(void 0===s)throw Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+r);e=s.length/3,r=[];for(var l=0;l<e;l+=1)for(var i=s[3*l],n=s[3*l+1],a=s[3*l+2],c=0;c<i;c+=1){var u=a,d={};d.o=n,d.j=u,r.push(d)}return r}};return e}();return t}());var dr=QrCreator,hr=class extends Ao{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&dr.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:null,size:2*this.size},this.canvas)}render(){return he`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${this.label.length>0?this.label:this.value}
        style=${ar({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};hr.styles=nr,to([xo("canvas")],hr.prototype,"canvas",2),to([_o()],hr.prototype,"value",2),to([_o()],hr.prototype,"label",2),to([_o({type:Number})],hr.prototype,"size",2),to([_o()],hr.prototype,"fill",2),to([_o()],hr.prototype,"background",2),to([_o({type:Number})],hr.prototype,"radius",2),to([_o({attribute:"error-correction"})],hr.prototype,"errorCorrection",2),to([mo("background"),mo("errorCorrection"),mo("fill"),mo("radius"),mo("size"),mo("value")],hr.prototype,"generate",1),hr=to([go("sl-qr-code")],hr);var pr=Bt`
  ${Me}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,vr=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),br=class extends Ao{constructor(){super(...arguments),this.hasSlotController=new vo(this,"icon","suffix"),this.localize=new po(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}async show(){if(!this.open)return this.open=!0,Jo(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Jo(this,"sl-after-hide")}async toast(){return new Promise((t=>{null===vr.parentElement&&document.body.append(vr),vr.appendChild(this),requestAnimationFrame((()=>{this.clientWidth,this.show()})),this.addEventListener("sl-after-hide",(()=>{vr.removeChild(this),t(),null===vr.querySelector("sl-alert")&&vr.remove()}),{once:!0})}))}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout((()=>this.hide()),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Yo(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=lr(this,"alert.show",{dir:this.localize.dir()});await Zo(this.base,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await Yo(this.base);const{keyframes:t,options:e}=lr(this,"alert.hide",{dir:this.localize.dir()});await Zo(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}render(){return he`
      <div
        part="base"
        class=${fo({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <slot name="icon" part="icon" class="alert__icon"></slot>

        <slot part="message" class="alert__message" aria-live="polite"></slot>

        ${this.closable?he`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};br.styles=pr,to([xo('[part~="base"]')],br.prototype,"base",2),to([_o({type:Boolean,reflect:!0})],br.prototype,"open",2),to([_o({type:Boolean,reflect:!0})],br.prototype,"closable",2),to([_o({reflect:!0})],br.prototype,"variant",2),to([_o({type:Number})],br.prototype,"duration",2),to([mo("open",{waitUntilFirstUpdate:!0})],br.prototype,"handleOpenChange",1),to([mo("duration")],br.prototype,"handleDurationChange",1),br=to([go("sl-alert")],br),sr("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),sr("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var fr=Bt`
  ${Me}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,mr=Symbol.for(""),gr=t=>{if((null==t?void 0:t.r)===mr)return null==t?void 0:t._$litStatic$},yr=(t,...e)=>({_$litStatic$:e.reduce(((e,o,r)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[r+1]),t[0]),r:mr}),_r=new Map,wr=(t=>(e,...o)=>{const r=o.length;let s,l;const i=[],n=[];let a,c=0,u=!1;for(;c<r;){for(a=e[c];c<r&&void 0!==(l=o[c],s=gr(l));)a+=s+e[++c],u=!0;n.push(l),i.push(a),c++}if(c===r&&i.push(e[r]),u){const t=i.join("$$lit$$");void 0===(e=_r.get(t))&&(i.raw=i,_r.set(t,e=i)),o=n}return t(e,...o)})(he),$r=class extends Ao{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}render(){const t=!!this.href,e=t?yr`a`:yr`button`;return wr`
      <${e}
        part="base"
        class=${fo({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${bo(t?void 0:this.disabled)}
        type=${bo(t?void 0:"button")}
        href=${bo(t?this.href:void 0)}
        target=${bo(t?this.target:void 0)}
        download=${bo(t?this.download:void 0)}
        rel=${bo(t&&this.target?"noreferrer noopener":void 0)}
        role=${bo(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${bo(this.name)}
          library=${bo(this.library)}
          src=${bo(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};$r.styles=fr,to([wo()],$r.prototype,"hasFocus",2),to([xo(".icon-button")],$r.prototype,"button",2),to([_o()],$r.prototype,"name",2),to([_o()],$r.prototype,"library",2),to([_o()],$r.prototype,"src",2),to([_o()],$r.prototype,"href",2),to([_o()],$r.prototype,"target",2),to([_o()],$r.prototype,"download",2),to([_o()],$r.prototype,"label",2),to([_o({type:Boolean,reflect:!0})],$r.prototype,"disabled",2),$r=to([go("sl-icon-button")],$r);var xr=Bt`
  ${Me}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,kr=class extends Ao{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return he`
      <slot
        part="base"
        class=${fo({badge:!0,"badge--primary":"primary"===this.variant,"badge--success":"success"===this.variant,"badge--neutral":"neutral"===this.variant,"badge--warning":"warning"===this.variant,"badge--danger":"danger"===this.variant,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      ></slot>
    `}};kr.styles=xr,to([_o({reflect:!0})],kr.prototype,"variant",2),to([_o({type:Boolean,reflect:!0})],kr.prototype,"pill",2),to([_o({type:Boolean,reflect:!0})],kr.prototype,"pulse",2),kr=to([go("sl-badge")],kr);var Ar=Bt`
  ${Me}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--first, .sl-button-group__button--radio, [variant='default']):not(:hover))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,Cr=class extends Ao{constructor(){super(...arguments),this.formSubmitController=new so(this,{form:t=>{if(t.hasAttribute("form")){const e=t.getRootNode(),o=t.getAttribute("form");return e.getElementById(o)}return t.closest("form")}}),this.hasSlotController=new vo(this,"[default]","prefix","suffix"),this.localize=new po(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href=""}firstUpdated(){this.isButton()&&(this.invalid=!this.button.checkValidity())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.invalid=!this.button.checkValidity())}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){if(this.disabled||this.loading)return t.preventDefault(),void t.stopPropagation();"submit"===this.type&&this.formSubmitController.submit(this),"reset"===this.type&&this.formSubmitController.reset(this)}handleDisabledChange(){this.isButton()&&(this.button.disabled=this.disabled,this.invalid=!this.button.checkValidity())}isButton(){return!this.href}isLink(){return!!this.href}render(){const t=this.isLink(),e=t?yr`a`:yr`button`;return wr`
      <${e}
        part="base"
        class=${fo({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${bo(t?void 0:this.disabled)}
        type=${bo(t?void 0:this.type)}
        title=${this.title}
        name=${bo(t?void 0:this.name)}
        value=${bo(t?void 0:this.value)}
        href=${bo(t?this.href:void 0)}
        target=${bo(t?this.target:void 0)}
        download=${bo(t?this.download:void 0)}
        rel=${bo(t&&this.target?"noreferrer noopener":void 0)}
        role=${bo(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?wr` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?wr`<sl-spinner></sl-spinner>`:""}
      </${e}>
    `}};Cr.styles=Ar,to([xo(".button")],Cr.prototype,"button",2),to([wo()],Cr.prototype,"hasFocus",2),to([wo()],Cr.prototype,"invalid",2),to([_o()],Cr.prototype,"title",2),to([_o({reflect:!0})],Cr.prototype,"variant",2),to([_o({reflect:!0})],Cr.prototype,"size",2),to([_o({type:Boolean,reflect:!0})],Cr.prototype,"caret",2),to([_o({type:Boolean,reflect:!0})],Cr.prototype,"disabled",2),to([_o({type:Boolean,reflect:!0})],Cr.prototype,"loading",2),to([_o({type:Boolean,reflect:!0})],Cr.prototype,"outline",2),to([_o({type:Boolean,reflect:!0})],Cr.prototype,"pill",2),to([_o({type:Boolean,reflect:!0})],Cr.prototype,"circle",2),to([_o()],Cr.prototype,"type",2),to([_o()],Cr.prototype,"name",2),to([_o()],Cr.prototype,"value",2),to([_o()],Cr.prototype,"href",2),to([_o()],Cr.prototype,"target",2),to([_o()],Cr.prototype,"download",2),to([_o()],Cr.prototype,"form",2),to([_o({attribute:"formaction"})],Cr.prototype,"formAction",2),to([_o({attribute:"formenctype"})],Cr.prototype,"formEnctype",2),to([_o({attribute:"formmethod"})],Cr.prototype,"formMethod",2),to([_o({attribute:"formnovalidate",type:Boolean})],Cr.prototype,"formNoValidate",2),to([_o({attribute:"formtarget"})],Cr.prototype,"formTarget",2),to([mo("disabled",{waitUntilFirstUpdate:!0})],Cr.prototype,"handleDisabledChange",1),Cr=to([go("sl-button")],Cr);var Sr=Bt`
  ${Me}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      rotate: 0deg;
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      rotate: 450deg;
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      rotate: 1080deg;
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,Er=class extends Ao{constructor(){super(...arguments),this.localize=new po(this)}render(){return he`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Er.styles=Sr,Er=to([go("sl-spinner")],Er);function zr(t,o){St((()=>{((t,o)=>{0!==o.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?e?t.shadowRoot.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((e=>{const o=document.createElement("style");o.textContent=e.cssText,t.shadowRoot.appendChild(o)})):window.ShadyCSS.ScopingShim.prepareAdoptedCssText(o.map((t=>t.cssText)),t.localName))})(t,o)}),[o])}customElements.get("sl-input")||customElements.define("sl-input",Eo),customElements.get("sl-textarea")||customElements.define("sl-textarea",Wo),customElements.get("sl-divider")||customElements.define("sl-divider",Qo),customElements.get("sl-details")||customElements.define("sl-details",ir),customElements.get("sl-alert")||customElements.define("sl-alert",br),customElements.get("sl-badge")||customElements.define("sl-badge",kr),customElements.get("sl-button")||customElements.define("sl-button",Cr),customElements.get("sl-qr-code")||customElements.define("sl-qr-code",hr),customElements.define("bakrypt-invoice",zt((function({transaction:t,collection:e,accessToken:o,csrfToken:r,testnet:s}){const i=s?"https://testnet.bakrypt.io":"https://bakrypt.io",[n,a]=Et(),[c,u]=Et(!1);zr(this,[Mt,l`:host{font-family:arial;font-weight:400}:host input,:host sl-details,:host sl-input,:host sl-textarea{margin-bottom:2rem}:host .form-control__help-text{margin-top:.5rem}`]);const d=(t,e)=>{const o=new CustomEvent("notification",{bubbles:!0,composed:!0,detail:[t,e]});this.dispatchEvent(o)},h=async t=>{let e;try{const r={"content-type":"application/json",Authorization:`Bearer ${o}`},s=await fetch(`${i}/v1/transactions/${t}/`,{method:"GET",headers:r});if(s.ok){const o=await s.json();a(o),e=o,setTimeout((()=>{h(t)}),1e4)}else{const t=await s.json();t.error_description?d(t.error_description,"danger"):t.error?d(t.error,"danger"):t.detail&&d(t.detail,"danger")}}catch(t){d("Unable to retrieve transaction.","danger")}return e};return At((()=>{t&&(a(t),o&&h(t.uuid))}),[t,e]),O`${c?O`<sl-spinner style="position:absolute;right:2rem;--track-width:5px;font-size:1.5rem"></sl-spinner>`:null} ${c?O`<div part="overlay" class="dialog__overlay" tabindex="-1"></div>`:null}<div style="padding:1rem"><div><small style="float:right"><i>Unique Identifier</i></small><sl-input maxlength="255" label="Policy ID" value="${n?n.policy_id:""}" type="text" readonly="readonly" filled></sl-input>${n&&!["confirmed","canceled"].includes(n.status)?O`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(305px,1fr));grid-gap:.5rem;align-items:center;margin-bottom:2rem"><sl-details summary="Click here to show a QR Code and scan the deposit address."><div style="text-align:center"><sl-qr-code value="${n?n.deposit_address:"Not found"}" label="Scan this code for the deposit_address!"></sl-qr-code></div></sl-details><sl-alert variant="warning" open><strong>DO NOT TRANSFER FUNDS FROM AN EXCHANGE!</strong><br>We will send all tokens and change to the payor's address; meaning that the payment must be done from a wallet that you can control and its capable of manage native tokens on Cardano like <a target="_blank" rel="nofollow" href="https://namiwallet.io/">Nami</a>, <a target="_blank" rel="nofollow" href="https://flint-wallet.com/">Flint</a>, <a target="_blank" rel="nofollow" href="https://yoroi-wallet.com/#/">Yoroi</a>, <a target="_blank" rel="nofollow" href="https://daedaluswallet.io/">Daedalus</a> or <a target="_blank" rel="nofollow" href="https://ccvault.io/app/mainnet/welcome">Eternl</a></sl-alert></div>`:null}<h4 style="color:var(--sl-color-warning-600)">Payment Type: ${n?n.type:null}</h4>${n&&!["confirmed","canceled"].includes(n.status)?O`<sl-input maxlength="255" type="number" label="Processing Cost" value="${n?n.cost:""}" readonly="readonly" filled></sl-input>`:O`<sl-input maxlength="255" type="number" label="Min. Processing Cost" value="${n?n.cost:""}" readonly="readonly" filled></sl-input>`} ${n&&!["confirmed","canceled"].includes(n.status)?O`<small style="float:right">Click to copy</small><sl-input maxlength="255" label="Deposit Address" value="${n?n.deposit_address:""}" type="password" readonly="readonly" filled toggle-password @click="${t=>{if(t.currentTarget&&t.currentTarget.value.length>0){const e=t.currentTarget.value;navigator.clipboard.writeText(e),d("Copy to clipboard!","success")}else if(t.path&&t.path.length>0){const e=t.path[0].value;navigator.clipboard.writeText(e),d("Copy to clipboard!","success")}return!1}}"></sl-input>`:null}<sl-input maxlength="255" label="Transaction UUID" value="${n?n.uuid:""}" type="text" readonly="readonly" filled></sl-input><sl-input maxlength="255" label="Created on" value="${n?new Date(n.created_on).toUTCString():""}" type="text" readonly="readonly" filled></sl-input><sl-input maxlength="255" label="Expires on" value="${n?new Date(n.expires_on).toUTCString():""}" type="text" readonly="readonly" filled></sl-input><sl-input maxlength="255" label="Conv. Fees" value="${n?n.convenience_fee:""}" type="text" readonly="readonly" filled></sl-input><sl-alert variant="warning" open>Remember, to complete your transaction, your payment must be received before the expiration time shown above. Late payments can be refunded. Minted assets are non-refundable and non-transferable. All times shown are UTC (Coordinated Universal Time).</sl-alert><sl-divider></sl-divider><div><sl-textarea style="margin-bottom:1rem" label="The status refreshes every 10 seconds." value="${t?t.status_description:""}" readonly="readonly" filled></sl-textarea><sl-badge style="margin-bottom:2rem;display:grid" .pulse="${!0}" variant="${n&&n.status?{error:"danger",rejected:"danger",canceled:"danger",burning:"warning",royalties:"warning",processing:"warning",refund:"warning",confirmed:"success","stand-by":"success",waiting:"primary",preauth:"primary"}[n.status]:"neutral"}">${n?n.status:""}</sl-badge><p>Please do not refresh the page, otherwise this session will be restarted.</p></div></div><sl-divider></sl-divider><div>${n&&n.status&&["rejected","error"].includes(n.status)?O`<sl-button variant="primary" style="margin-right:1rem" @click="${()=>(async t=>{try{const e={"content-type":"application/json",Authorization:`Bearer ${o}`};r&&r.length>0&&(e["X-CSRFToken"]=r);const s=await fetch(`${i}/v1/transactions/${t.uuid}/mint/`,{method:"POST",headers:e});if(s.ok)await s.json(),d("Request was submitted","success");else{const t=await s.json();t.error_description?d(t.error_description,"danger"):t.error?d(t.error,"danger"):t.detail&&d(t.detail,"danger")}}catch(t){d(`Unable to submit request. Error: ${t}`,"danger")}})(n)}">Retry</sl-button>`:null} ${n&&n.status&&!["confirmed","canceled"].includes(n.status)?O`<sl-button variant="warning" outline @click="${()=>{window.confirm("Would you like to refund the transaction?")&&(async t=>{u(!0);try{const e={"content-type":"application/json",Authorization:`Bearer ${o}`};r&&r.length>0&&(e["X-CSRFToken"]=r);const s=await fetch(`${i}/v1/transactions/${t.uuid}/refund/`,{method:"POST",headers:e});if(s.ok)await s.json(),d("Refund was submitted","success");else{const t=await s.json();t.error_description?d(t.error_description,"danger"):t.error?d(t.error,"danger"):t.detail&&d(t.detail,"danger")}}catch(t){d(`Unable to refund request. Error: ${t}`,"danger")}u(!1)})(n)}}">Submit Refund</sl-button>`:null}</div></div>`}),{observedAttributes:["transaction","collection","transactionVariant"]}));
