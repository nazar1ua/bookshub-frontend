(self["webpackChunkbooks_hub"]=self["webpackChunkbooks_hub"]||[]).push([[700],{9529:function(t,e,n){n(1703),n(6699),function(e,n){t.exports=n()}("undefined"!=typeof self&&self,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=44)}([function(t,e,n){var r=n(28)("wks"),o=n(14),i=n(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(1),o=n(7),i=n(3),u=n(19),a=n(24),s=function(t,e,n){var f,c,l,p,d=t&s.F,v=t&s.G,h=t&s.S,y=t&s.P,m=t&s.B,g=v?r:h?r[e]||(r[e]={}):(r[e]||{}).prototype,b=v?o:o[e]||(o[e]={}),w=b.prototype||(b.prototype={});for(f in v&&(n=e),n)l=((c=!d&&g&&void 0!==g[f])?g:n)[f],p=m&&c?a(l,r):y&&"function"==typeof l?a(Function.call,l):l,g&&u(g,f,l,t&s.U),b[f]!=l&&i(b,f,p),y&&w[f]!=l&&(w[f]=l)};r.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e,n){var r=n(4),o=n(13);t.exports=n(8)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(12),o=n(34),i=n(23),u=Object.defineProperty;e.f=n(8)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){t.exports=!n(9)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(37),o=n(29);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(25),o=n(17);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports={}},function(t,e,n){var r=n(17);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=!1},function(t,e,n){var r=n(1),o=n(3),i=n(6),u=n(14)("src"),a=Function.toString,s=(""+a).split("toString");n(7).inspectSource=function(t){return a.call(t)},(t.exports=function(t,e,n,a){var f="function"==typeof n;f&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(f&&(i(n,u)||o(n,u,t[e]?""+t[e]:s.join(String(e)))),t===r?t[e]=n:a?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[u]||a.call(this)}))},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(47);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(20);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(22),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(28)("keys"),o=n(14);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(7),o=n(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(18)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(4).f,o=n(6),i=n(0)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(0)("unscopables"),o=Array.prototype;void 0==o[r]&&n(3)(o,r,{}),t.exports=function(t){o[r][t]=!0}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){"use strict";var r=n(18),o=n(2),i=n(19),u=n(3),a=n(15),s=n(48),f=n(30),c=n(52),l=n(0)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,v,h,y,m){s(n,e,v);var g,b,w,x=function(t){if(!p&&t in _)return _[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",E="values"==h,O=!1,_=t.prototype,j=_[l]||_["@@iterator"]||h&&_[h],k=j||x(h),A=h?E?x("entries"):k:void 0,T="Array"==e&&_.entries||j;if(T&&(w=c(T.call(new t)))!==Object.prototype&&w.next&&(f(w,S,!0),r||"function"==typeof w[l]||u(w,l,d)),E&&j&&"values"!==j.name&&(O=!0,k=function(){return j.call(this)}),r&&!m||!p&&!O&&_[l]||u(_,l,k),a[e]=k,a[S]=d,h)if(g={values:E?k:x("values"),keys:y?k:x("keys"),entries:A},m)for(b in g)b in _||i(_,b,g[b]);else o(o.P+o.F*(p||O),e,g);return g}},function(t,e,n){t.exports=!n(8)&&!n(9)((function(){return 7!=Object.defineProperty(n(35)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(5),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(12),o=n(49),i=n(29),u=n(27)("IE_PROTO"),a=function(){},s=function(){var t,e=n(35)("iframe"),r=i.length;for(e.style.display="none",n(51).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[u]=t):n=s(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(6),o=n(11),i=n(38)(!1),u=n(27)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),s=0,f=[];for(n in a)n!=u&&r(a,n)&&f.push(n);for(;e.length>s;)r(a,n=e[s++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){var r=n(11),o=n(26),i=n(50);t.exports=function(t){return function(e,n,u){var a,s=r(e),f=o(s.length),c=i(u,f);if(t&&n!=n){for(;f>c;)if((a=s[c++])!=a)return!0}else for(;f>c;c++)if((t||c in s)&&s[c]===n)return t||c||0;return!t&&-1}}},function(t,e,n){"use strict";var r=n(31),o=n(65),i=n(15),u=n(11);t.exports=n(33)(Array,"Array",(function(t,e){this._t=u(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(20);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(1),o=n(7),i=n(18),u=n(42),a=n(4).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(0)},function(t,e,n){var r=n(37),o=n(29).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e),n(45),n(53),n(60),n(61),n(39),n(66),n(68),n(70),n(74),n(75),n(80);var o={methods:{$smoothReflow:function(t){var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._smoothElements.push(new f(t))}.bind(this);Array.isArray(t)?t.forEach(e):e(t)},$unsmoothReflow:function(t){var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s(),e=this.$el,n=this._smoothElements.findIndex((function(n){return u(e,n.options.el)===u(e,t.el)}));-1!==n?this._smoothElements[n].scheduleRemoval():console.error("VSR_ERROR: $unsmoothReflow failed due to invalid el option")}.bind(this);Array.isArray(t)?t.forEach(e):e(t)}},beforeMount:function(){var t=this;this._smoothElements=[],this._endListener=function(e){var n=!0,r=!1,o=void 0;try{for(var i,u=t._smoothElements[Symbol.iterator]();!(n=(i=u.next()).done);n=!0)i.value.endListener(e)}catch(t){r=!0,o=t}finally{try{n||null==u.return||u.return()}finally{if(r)throw o}}}},mounted:function(){this.$el.addEventListener("transitionend",this._endListener,{passive:!0})},destroyed:function(){this.$el.removeEventListener("transitionend",this._endListener,{passive:!0})},beforeUpdate:function(){this.$el.addEventListener("transitionend",this._endListener,{passive:!0}),i(this);var t=!0,e=!1,n=void 0;try{for(var r,o=this._smoothElements[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var a=r.value,s=u(this.$el,a.options.el);a.setSmoothElement(s),a.setBeforeValues()}}catch(t){e=!0,n=t}finally{try{t||null==o.return||o.return()}finally{if(e)throw n}}},updated:function(){var t=this;this.$nextTick((function(){var e=!0,n=!1,r=void 0;try{for(var o,a=t._smoothElements[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var s=o.value,f=u(t.$el,s.options.el);s.setSmoothElement(f),s.doSmoothReflow()}}catch(t){n=!0,r=t}finally{try{e||null==a.return||a.return()}finally{if(n)throw r}}i(t)}))}};function i(t){for(var e=t._smoothElements.length;e--;){var n=t._smoothElements[e];n.isRemoved&&(n.stopTransition(),t._smoothElements.splice(e,1))}}function u(t,e){return!t||t instanceof Node&&t.nodeType===Node.COMMENT_NODE?null:null===e?t:function(t,e){return"string"==typeof e?t.matches(e)?t:t.querySelector(e):e}(t,e)}var a={INACTIVE:"INACTIVE",ACTIVE:"ACTIVE"},s=function(){return{el:null,property:"height",transitionEvent:null,hideOverflow:!0,debug:!1}},f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=s();Object.assign(n,e);var r=this.parsePropertyOption(n.property);n.transition||(n.transition=r.map((function(t){return"".concat(t," .5s")})).join(","));var o={$smoothEl:null,properties:r,beforeRect:{},state:a.INACTIVE,isRemoved:!1};Object.assign(this,{options:n},o),this.endListener=this.endListener.bind(this),this.debug=this.debug.bind(this)}return function(t,e,n){e&&r(t.prototype,e),n&&r(t,n)}(t,[{key:"setSmoothElement",value:function(t){this.$smoothEl=t}},{key:"transitionTo",value:function(t){this.state=t}},{key:"parsePropertyOption",value:function(t){return"string"==typeof t?[t]:Array.isArray(t)?t:[]}},{key:"setBeforeValues",value:function(){var t=this.$smoothEl;if(this.beforeRect={},t){var e=window.getComputedStyle(t)||{},n=e.transition,r=e.overflowX,o=e.overflowY;this.computedTransition=n,this.overflowX=r,this.overflowY=o,this.beforeRect=c(t),this.state===a.ACTIVE&&(this.stopTransition(),this.debug("Transition was interrupted."))}}},{key:"didValuesChange",value:function(t,e){var n=t,r=e;if(0===Object.keys(t).length)return!1;var o=!0,i=!1,u=void 0;try{for(var a,s=this.properties[Symbol.iterator]();!(o=(a=s.next()).done);o=!0){var f=a.value;if("transform"===f&&(n.top!==r.top||n.left!==r.left))return!0;if(n[f]!==r[f])return!0}}catch(t){i=!0,u=t}finally{try{o||null==s.return||s.return()}finally{if(i)throw u}}return!1}},{key:"doSmoothReflow",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"data update",e=this.$smoothEl;if(!e)return this.debug("Could not find registered el to perform doSmoothReflow."),void this.transitionTo(a.INACTIVE);if(this.state!==a.ACTIVE){var n=this.beforeRect,r=this.properties,o=this.options,i=this.overflowX,u=this.overflowY,s=this.debug;this.transitionTo(a.ACTIVE),s("doSmoothReflow triggered by:","string"==typeof t?t:t.target);var f=c(e);if(!this.didValuesChange(n,f))return s("Property values did not change."),void this.transitionTo(a.INACTIVE);s("beforeRect",n),s("afterRect",f),this.saveOverflowValues(e,i,u);var l=!0,p=!1,d=void 0;try{for(var v,h=r[Symbol.iterator]();!(l=(v=h.next()).done);l=!0){var y=v.value;if("transform"===y){var m=n.left-f.left,g=n.top-f.top;e.style.transform="translate(".concat(m,"px, ").concat(g,"px)")}else e.style[y]=n[y]+"px"}}catch(t){p=!0,d=t}finally{try{l||null==h.return||h.return()}finally{if(p)throw d}}e.offsetHeight,e.style.transition=[this.computedTransition,o.transition].filter((function(t){return t})).join(",");var b=!0,w=!1,x=void 0;try{for(var S,E=r[Symbol.iterator]();!(b=(S=E.next()).done);b=!0){var O=S.value;"transform"===O?e.style.transform="":e.style[O]=f[O]+"px"}}catch(t){w=!0,x=t}finally{try{b||null==E.return||E.return()}finally{if(w)throw x}}}}},{key:"endListener",value:function(t){var e=this.$smoothEl,n=this.properties;e===t.target?n.includes(t.propertyName)&&(this.stopTransition(),this.hasRegisteredEventEmitter()&&this.setBeforeValues()):this.isRegisteredEventEmitter(e,t)&&this.doSmoothReflow(t)}},{key:"hasRegisteredEventEmitter",value:function(){var t=this.options.transitionEvent;return null!==t&&Object.keys(t).length>0}},{key:"isRegisteredEventEmitter",value:function(t,e){if(!this.hasRegisteredEventEmitter())return!1;var n=e.target,r=this.options.transitionEvent,o=r.selector,i=r.propertyName;if(null!=i&&i!==e.propertyName)return!1;if(null!=o&&!n.matches(o))return!1;if(-1===this.properties.indexOf("transform")){var u=!1,a=e.composedPath?e.composedPath():[],s=!0,f=!1,c=void 0;try{for(var l,p=a[Symbol.iterator]();!(s=(l=p.next()).done);s=!0)if(t===l.value){u=!0;break}}catch(t){f=!0,c=t}finally{try{s||null==p.return||p.return()}finally{if(f)throw c}}if(!u)return!1}return!0}},{key:"saveOverflowValues",value:function(t,e,n){this.options.hideOverflow&&(this.overflowX=e,this.overflowY=n,t.style.overflowX="hidden",t.style.overflowY="hidden")}},{key:"restoreOverflowValues",value:function(t){var e=this.options,n=this.overflowX,r=this.overflowY;e.hideOverflow&&(t.style.overflowX=n,t.style.overflowY=r)}},{key:"stopTransition",value:function(){var t=this.$smoothEl,e=this.properties,n=!0,r=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var s=i.value;t.style[s]=null}}catch(t){r=!0,o=t}finally{try{n||null==u.return||u.return()}finally{if(r)throw o}}this.restoreOverflowValues(t),t.style.transition=null,this.transitionTo(a.INACTIVE)}},{key:"scheduleRemoval",value:function(){this.isRemoved=!0}},{key:"debug",value:function(){if(this.options.debug){var t=["VSR_DEBUG:"].concat(Array.from(arguments));console.log.apply(null,t)}}}]),t}(),c=function(t){t.style.overflow="hidden";var e=t.getBoundingClientRect(),n=e.top,r=e.right,o=e.bottom,i=e.left,u=e.width,a=e.height,s=e.x,f=e.y;return t.style.overflow=null,{top:n,right:r,bottom:o,left:i,width:u,height:a,x:s,y:f}};"undefined"!=typeof Element&&Element.prototype&&!Element.prototype.matches&&(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;);return n>-1}),e.default=o},function(t,e,n){"use strict";var r=n(46)(!0);n(33)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},function(t,e,n){var r=n(22),o=n(17);t.exports=function(t){return function(e,n){var i,u,a=String(o(e)),s=r(n),f=a.length;return s<0||s>=f?t?"":void 0:(i=a.charCodeAt(s))<55296||i>56319||s+1===f||(u=a.charCodeAt(s+1))<56320||u>57343?t?a.charAt(s):i:t?a.slice(s,s+2):u-56320+(i-55296<<10)+65536}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r=n(36),o=n(13),i=n(30),u={};n(3)(u,n(0)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(4),o=n(12),i=n(10);t.exports=n(8)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),a=u.length,s=0;a>s;)r.f(t,n=u[s++],e[n]);return t}},function(t,e,n){var r=n(22),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(6),o=n(16),i=n(27)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){"use strict";var r=n(24),o=n(2),i=n(16),u=n(54),a=n(55),s=n(26),f=n(56),c=n(57);o(o.S+o.F*!n(59)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,o,l,p=i(t),d="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,y=void 0!==h,m=0,g=c(p);if(y&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==g||d==Array&&a(g))for(n=new d(e=s(p.length));e>m;m++)f(n,m,y?h(p[m],m):p[m]);else for(l=g.call(p),n=new d;!(o=l.next()).done;m++)f(n,m,y?u(l,h,[o.value,m],!0):o.value);return n.length=m,n}})},function(t,e,n){var r=n(12);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(15),o=n(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){"use strict";var r=n(4),o=n(13);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},function(t,e,n){var r=n(58),o=n(0)("iterator"),i=n(15);t.exports=n(7).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(20),o=n(0)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){var r=n(0)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},t(i)}catch(t){}return n}},function(t,e,n){"use strict";var r=n(2),o=n(38)(!0);r(r.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(31)("includes")},function(t,e,n){"use strict";var r=n(2),o=n(62);r(r.P+r.F*n(64)("includes"),"String",{includes:function(t){return!!~o(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var r=n(63),o=n(17);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(t))}},function(t,e,n){var r=n(5),o=n(20),i=n(0)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},function(t,e,n){var r=n(0)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(t){}}return!0}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(16),o=n(10);n(67)("keys",(function(){return function(t){return o(r(t))}}))},function(t,e,n){var r=n(2),o=n(7),i=n(9);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i((function(){n(1)})),"Object",u)}},function(t,e,n){var r=n(2);r(r.S+r.F,"Object",{assign:n(69)})},function(t,e,n){"use strict";var r=n(10),o=n(32),i=n(21),u=n(16),a=n(25),s=Object.assign;t.exports=!s||n(9)((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=r}))?function(t,e){for(var n=u(t),s=arguments.length,f=1,c=o.f,l=i.f;s>f;)for(var p,d=a(arguments[f++]),v=c?r(d).concat(c(d)):r(d),h=v.length,y=0;h>y;)l.call(d,p=v[y++])&&(n[p]=d[p]);return n}:s},function(t,e,n){"use strict";var r=n(2),o=n(71)(6),i="findIndex",u=!0;i in[]&&Array(1)[i]((function(){u=!1})),r(r.P+r.F*u,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(31)(i)},function(t,e,n){var r=n(24),o=n(25),i=n(16),u=n(26),a=n(72);t.exports=function(t,e){var n=1==t,s=2==t,f=3==t,c=4==t,l=6==t,p=5==t||l,d=e||a;return function(e,a,v){for(var h,y,m=i(e),g=o(m),b=r(a,v,3),w=u(g.length),x=0,S=n?d(e,w):s?d(e,0):void 0;w>x;x++)if((p||x in g)&&(y=b(h=g[x],x,m),t))if(n)S[x]=y;else if(y)switch(t){case 3:return!0;case 5:return h;case 6:return x;case 2:S.push(h)}else if(c)return!1;return l?-1:f||c?c:S}}},function(t,e,n){var r=n(73);t.exports=function(t,e){return new(r(t))(e)}},function(t,e,n){var r=n(5),o=n(40),i=n(0)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),r(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){n(41)("asyncIterator")},function(t,e,n){"use strict";var r=n(1),o=n(6),i=n(8),u=n(2),a=n(19),s=n(76).KEY,f=n(9),c=n(28),l=n(30),p=n(14),d=n(0),v=n(42),h=n(41),y=n(77),m=n(40),g=n(12),b=n(5),w=n(11),x=n(23),S=n(13),E=n(36),O=n(78),_=n(79),j=n(4),k=n(10),A=_.f,T=j.f,P=O.f,V=r.Symbol,I=r.JSON,L=I&&I.stringify,R=d("_hidden"),C=d("toPrimitive"),M={}.propertyIsEnumerable,N=c("symbol-registry"),F=c("symbols"),$=c("op-symbols"),D=Object.prototype,q="function"==typeof V,B=r.QObject,G=!B||!B.prototype||!B.prototype.findChild,W=i&&f((function(){return 7!=E(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=A(D,e);r&&delete D[e],T(t,e,n),r&&t!==D&&T(D,e,r)}:T,Y=function(t){var e=F[t]=E(V.prototype);return e._k=t,e},z=q&&"symbol"==typeof V.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof V},X=function(t,e,n){return t===D&&X($,e,n),g(t),e=x(e,!0),g(n),o(F,e)?(n.enumerable?(o(t,R)&&t[R][e]&&(t[R][e]=!1),n=E(n,{enumerable:S(0,!1)})):(o(t,R)||T(t,R,S(1,{})),t[R][e]=!0),W(t,e,n)):T(t,e,n)},Z=function(t,e){g(t);for(var n,r=y(e=w(e)),o=0,i=r.length;i>o;)X(t,n=r[o++],e[n]);return t},H=function(t){var e=M.call(this,t=x(t,!0));return!(this===D&&o(F,t)&&!o($,t))&&(!(e||!o(this,t)||!o(F,t)||o(this,R)&&this[R][t])||e)},U=function(t,e){if(t=w(t),e=x(e,!0),t!==D||!o(F,e)||o($,e)){var n=A(t,e);return!n||!o(F,e)||o(t,R)&&t[R][e]||(n.enumerable=!0),n}},J=function(t){for(var e,n=P(w(t)),r=[],i=0;n.length>i;)o(F,e=n[i++])||e==R||e==s||r.push(e);return r},K=function(t){for(var e,n=t===D,r=P(n?$:w(t)),i=[],u=0;r.length>u;)!o(F,e=r[u++])||n&&!o(D,e)||i.push(F[e]);return i};q||(a((V=function(){if(this instanceof V)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===D&&e.call($,n),o(this,R)&&o(this[R],t)&&(this[R][t]=!1),W(this,t,S(1,n))};return i&&G&&W(D,t,{configurable:!0,set:e}),Y(t)}).prototype,"toString",(function(){return this._k})),_.f=U,j.f=X,n(43).f=O.f=J,n(21).f=H,n(32).f=K,i&&!n(18)&&a(D,"propertyIsEnumerable",H,!0),v.f=function(t){return Y(d(t))}),u(u.G+u.W+u.F*!q,{Symbol:V});for(var Q="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Q.length>tt;)d(Q[tt++]);for(var et=k(d.store),nt=0;et.length>nt;)h(et[nt++]);u(u.S+u.F*!q,"Symbol",{for:function(t){return o(N,t+="")?N[t]:N[t]=V(t)},keyFor:function(t){if(!z(t))throw TypeError(t+" is not a symbol!");for(var e in N)if(N[e]===t)return e},useSetter:function(){G=!0},useSimple:function(){G=!1}}),u(u.S+u.F*!q,"Object",{create:function(t,e){return void 0===e?E(t):Z(E(t),e)},defineProperty:X,defineProperties:Z,getOwnPropertyDescriptor:U,getOwnPropertyNames:J,getOwnPropertySymbols:K}),I&&u(u.S+u.F*(!q||f((function(){var t=V();return"[null]"!=L([t])||"{}"!=L({a:t})||"{}"!=L(Object(t))}))),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(b(e)||void 0!==t)&&!z(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!z(e))return e}),r[1]=e,L.apply(I,r)}}),V.prototype[C]||n(3)(V.prototype,C,V.prototype.valueOf),l(V,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){var r=n(14)("meta"),o=n(5),i=n(6),u=n(4).f,a=0,s=Object.isExtensible||function(){return!0},f=!n(9)((function(){return s(Object.preventExtensions({}))})),c=function(t){u(t,r,{value:{i:"O"+ ++a,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!s(t))return"F";if(!e)return"E";c(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!s(t))return!0;if(!e)return!1;c(t)}return t[r].w},onFreeze:function(t){return f&&l.NEED&&s(t)&&!i(t,r)&&c(t),t}}},function(t,e,n){var r=n(10),o=n(32),i=n(21);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,a=n(t),s=i.f,f=0;a.length>f;)s.call(t,u=a[f++])&&e.push(u);return e}},function(t,e,n){var r=n(11),o=n(43).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},function(t,e,n){var r=n(21),o=n(13),i=n(11),u=n(23),a=n(6),s=n(34),f=Object.getOwnPropertyDescriptor;e.f=n(8)?f:function(t,e){if(t=i(t),e=u(e,!0),s)try{return f(t,e)}catch(t){}if(a(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){for(var r=n(39),o=n(10),i=n(19),u=n(1),a=n(3),s=n(15),f=n(0),c=f("iterator"),l=f("toStringTag"),p=s.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=o(d),h=0;h<v.length;h++){var y,m=v[h],g=d[m],b=u[m],w=b&&b.prototype;if(w&&(w[c]||a(w,c,p),w[l]||a(w,l,m),s[m]=p,g))for(y in r)w[y]||i(w,y,r[y],!0)}}]).default}))},2578:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var r=n(3396);const o=["type"];function i(t,e,n,i,u,a){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("button",{type:n.type,class:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},[(0,r.WI)(t.$slots,"default")],8,o)])}var u={name:"FormButton",props:{type:{type:String,default:"submin"}}},a=n(89);const s=(0,a.Z)(u,[["render",i]]);var f=s},4899:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var r=n(3396),o=n(7139);const i=["for"],u={class:"mt-1 relative rounded-md shadow-sm"},a=["id","name","type","value","autocomplete","required","minlength","maxlength"],s={key:0,class:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"},f={key:0,class:"mt-2 text-sm text-red-600",id:"email-error"};function c(t,e,n,c,l,p){const d=(0,r.up)("ExclamationCircleIcon");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("label",{for:n.name,class:"block text-sm font-medium text-gray-700"},[(0,r.WI)(t.$slots,"default")],8,i),(0,r._)("div",u,[(0,r._)("input",{ref:n.name,id:n.name,name:n.name,type:n.type,value:n.modelValue,onInput:e[0]||(e[0]=e=>t.$emit("update:modelValue",e.target.value)),autocomplete:n.autocomplete,required:n.required,minlength:n.minlength,maxlength:n.maxlength,class:(0,o.C_)(["appearance-none block w-full py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm",[l.invalid?"pl-3 pr-10 border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500":"px-3 border-gray-300 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"]])},null,42,a),l.invalid?((0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(d,{class:"h-5 w-5 text-red-500","aria-hidden":"true"})])):(0,r.kq)("",!0)]),l.invalid?((0,r.wg)(),(0,r.iD)("p",f,(0,o.zw)(n.error),1)):(0,r.kq)("",!0)])}function l(t,e){return(0,r.wg)(),(0,r.j4)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,r.Wm)("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"})])}var p=n(9529),d=n.n(p),v={name:"FormInput",components:{ExclamationCircleIcon:l},props:{name:{type:String,required:!0},type:{type:String,required:!1,default:"text"},autocomplete:{type:String,required:!1,default:""},required:{type:Boolean,required:!1,default:!1},error:{type:String,required:!1,default:"Це поле є обов'язковим"},validated:{type:Boolean,required:!0,default:!1},minlength:{type:String,required:!1},maxlength:{type:String,required:!1},modelValue:null},emits:["update:modelValue"],data(){return{invalid:!1}},mixins:[d()],mounted(){this.$smoothReflow({hideOverflow:!1})},watch:{validated(t,e){const n=this.$refs[this.name];!0===t&&(n.checkValidity()||(this.invalid=!0,n.setAttribute("aria-invalid",!0),n.setAttribute("aria-describedby","email-error"),n.addEventListener("input",(()=>{n.checkValidity()?(this.invalid=!1,n.removeAttribute("aria-invalid"),n.removeAttribute("aria-describedby")):(this.invalid=!0,n.setAttribute("aria-invalid",!0),n.setAttribute("aria-describedby","email-error"))}))))}}},h=n(89);const y=(0,h.Z)(v,[["render",c]]);var m=y},2848:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var r=n(3396),o=n(9242);function i(t,e,n,i,u,a){return(0,r.wg)(),(0,r.iD)("form",{onSubmit:e[0]||(e[0]=(0,o.iM)(((...t)=>a.middleware&&a.middleware(...t)),["prevent"])),novalidate:""},[(0,r.WI)(t.$slots,"default",{isValidated:u.isValidated})],32)}var u={name:"FormValidation",data(){return{isValidated:!1}},inject:["addNotification"],methods:{middleware(t){t.target.checkValidity()?this.$emit("submitted"):(t.preventDefault(),t.stopPropagation(),this.addNotification("error","Помилка","Перевірте, чи всі поля правильно заповнено!"),this.isValidated=!0)}},emits:["submitted"]},a=n(89);const s=(0,a.Z)(u,[["render",i]]);var f=s}}]);
//# sourceMappingURL=700.7c39a5a9.js.map