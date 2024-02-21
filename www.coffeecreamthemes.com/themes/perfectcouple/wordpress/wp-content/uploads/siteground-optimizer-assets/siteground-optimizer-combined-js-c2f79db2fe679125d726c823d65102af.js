/*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],a=1;a<=3;a++){if(+o[a]<+n[a])return 1;if(+n[a]<+o[a])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.4.1";var t=Object.create(null);s.migrateDisablePatches=function(){for(var e=0;e<arguments.length;e++)t[arguments[e]]=!0},s.migrateEnablePatches=function(){for(var e=0;e<arguments.length;e++)delete t[arguments[e]]},s.migrateIsPatchEnabled=function(e){return!t[e]},n.console&&n.console.log&&(s&&e("3.0.0")&&!e("5.0.0")||n.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var o={};function u(e,t){var r=n.console;!s.migrateIsPatchEnabled(e)||s.migrateDeduplicateWarnings&&o[t]||(o[t]=!0,s.migrateWarnings.push(t+" ["+e+"]"),r&&r.warn&&!s.migrateMute&&(r.warn("JQMIGRATE: "+t),s.migrateTrace&&r.trace&&r.trace()))}function r(e,t,r,n,o){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n,o),r},set:function(e){u(n,o),r=e}})}function a(e,t,r,n,o){var a=e[t];e[t]=function(){return o&&u(n,o),(s.migrateIsPatchEnabled(n)?r:a||s.noop).apply(this,arguments)}}function c(e,t,r,n,o){if(!o)throw new Error("No warning message provided");return a(e,t,r,n,o),0}function i(e,t,r,n){return a(e,t,r,n),0}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){o={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("quirks","jQuery is not compatible with Quirks Mode");var d,l,p,f={},m=s.fn.init,y=s.find,h=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,g=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,v=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;for(d in i(s.fn,"init",function(e){var t=Array.prototype.slice.call(arguments);return s.migrateIsPatchEnabled("selector-empty-id")&&"string"==typeof e&&"#"===e&&(u("selector-empty-id","jQuery( '#' ) is not a valid selector"),t[0]=[]),m.apply(this,t)},"selector-empty-id"),s.fn.init.prototype=s.fn,i(s,"find",function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&h.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(g,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("selector-hash","Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("selector-hash","Attribute selector with '#' was not fixed: "+r[0])}}return y.apply(this,r)},"selector-hash"),y)Object.prototype.hasOwnProperty.call(y,d)&&(s.find[d]=y[d]);c(s.fn,"size",function(){return this.length},"size","jQuery.fn.size() is deprecated and removed; use the .length property"),c(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"parseJSON","jQuery.parseJSON is deprecated; use JSON.parse"),c(s,"holdReady",s.holdReady,"holdReady","jQuery.holdReady is deprecated"),c(s,"unique",s.uniqueSort,"unique","jQuery.unique is deprecated; use jQuery.uniqueSort"),r(s.expr,"filters",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),r(s.expr,":",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&c(s,"trim",function(e){return null==e?"":(e+"").replace(v,"$1")},"trim","jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(c(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"nodeName","jQuery.nodeName is deprecated"),c(s,"isArray",Array.isArray,"isArray","jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(c(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"isNumeric","jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){f["[object "+t+"]"]=t.toLowerCase()}),c(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?f[Object.prototype.toString.call(e)]||"object":typeof e},"type","jQuery.type is deprecated"),c(s,"isFunction",function(e){return"function"==typeof e},"isFunction","jQuery.isFunction() is deprecated"),c(s,"isWindow",function(e){return null!=e&&e===e.window},"isWindow","jQuery.isWindow() is deprecated")),s.ajax&&(l=s.ajax,p=/(=)\?(?=&|$)|\?\?/,i(s,"ajax",function(){var e=l.apply(this,arguments);return e.promise&&(c(e,"success",e.done,"jqXHR-methods","jQXHR.success is deprecated and removed"),c(e,"error",e.fail,"jqXHR-methods","jQXHR.error is deprecated and removed"),c(e,"complete",e.always,"jqXHR-methods","jQXHR.complete is deprecated and removed")),e},"jqXHR-methods"),e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(p.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&p.test(e.data))&&u("jsonp-promotion","JSON-to-JSONP auto-promotion is deprecated")}));var j=s.fn.removeAttr,b=s.fn.toggleClass,w=/\S+/g;function x(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}i(s.fn,"removeAttr",function(e){var r=this,n=!1;return s.each(e.match(w),function(e,t){s.expr.match.bool.test(t)&&r.each(function(){if(!1!==s(this).prop(t))return!(n=!0)}),n&&(u("removeAttr-bool","jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),j.apply(this,arguments)},"removeAttr-bool"),i(s.fn,"toggleClass",function(t){return void 0!==t&&"boolean"!=typeof t?b.apply(this,arguments):(u("toggleClass-bool","jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))},"toggleClass-bool");var Q,A,R=!1,C=/^[a-z]/,N=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return R=!0,e=r.apply(this,arguments),R=!1,e})}),i(s,"swap",function(e,t,r,n){var o,a,i={};for(a in R||u("swap","jQuery.swap() is undocumented and deprecated"),t)i[a]=e.style[a],e.style[a]=t[a];for(a in o=r.apply(e,n||[]),t)e.style[a]=i[a];return o},"swap"),e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return u("cssProps","jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),e("4.0.0")?(A={animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},"undefined"!=typeof Proxy?s.cssNumber=new Proxy(A,{get:function(){return u("css-number","jQuery.cssNumber is deprecated"),Reflect.get.apply(this,arguments)},set:function(){return u("css-number","jQuery.cssNumber is deprecated"),Reflect.set.apply(this,arguments)}}):s.cssNumber=A):A=s.cssNumber,Q=s.fn.css,i(s.fn,"css",function(e,t){var r,n,o=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(o,e,t)}),this):("number"==typeof t&&(r=x(e),n=r,C.test(n)&&N.test(n[0].toUpperCase()+n.slice(1))||A[r]||u("css-number",'Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),Q.apply(this,arguments))},"css-number");var S,P,k,H,E=s.data;i(s,"data",function(e,t,r){var n,o,a;if(t&&"object"==typeof t&&2===arguments.length){for(a in n=s.hasData(e)&&E.call(this,e),o={},t)a!==x(a)?(u("data-camelCase","jQuery.data() always sets/gets camelCased names: "+a),n[a]=t[a]):o[a]=t[a];return E.call(this,e,o),t}return t&&"string"==typeof t&&t!==x(t)&&(n=s.hasData(e)&&E.call(this,e))&&t in n?(u("data-camelCase","jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):E.apply(this,arguments)},"data-camelCase"),s.fx&&(k=s.Tween.prototype.run,H=function(e){return e},i(s.Tween.prototype,"run",function(){1<s.easing[this.easing].length&&(u("easing-one-arg","'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=H),k.apply(this,arguments)},"easing-one-arg"),S=s.fx.interval,P="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u("fx-interval",P),s.migrateIsPatchEnabled("fx-interval")&&void 0===S?13:S},set:function(e){u("fx-interval",P),S=e}}));var M=s.fn.load,q=s.event.add,O=s.event.fix;s.event.props=[],s.event.fixHooks={},r(s.event.props,"concat",s.event.props.concat,"event-old-patch","jQuery.event.props.concat() is deprecated and removed"),i(s.event,"fix",function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("event-old-patch","jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("event-old-patch","jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=O.call(this,e),n&&n.filter?n.filter(t,e):t},"event-old-patch"),i(s.event,"add",function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("load-after-event","jQuery(window).on('load'...) called after load event occurred"),q.apply(this,arguments)},"load-after-event"),s.each(["load","unload","error"],function(e,t){i(s.fn,t,function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?M.apply(this,e):(u("shorthand-removed-v3","jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))},"shorthand-removed-v3")}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){c(s.fn,r,function(e,t){return 0<arguments.length?this.on(r,null,e,t):this.trigger(r)},"shorthand-deprecated-v3","jQuery.fn."+r+"() event shorthand is deprecated")}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("ready-event","'ready' event is deprecated")}},c(s.fn,"bind",function(e,t,r){return this.on(e,null,t,r)},"pre-on-methods","jQuery.fn.bind() is deprecated"),c(s.fn,"unbind",function(e,t){return this.off(e,null,t)},"pre-on-methods","jQuery.fn.unbind() is deprecated"),c(s.fn,"delegate",function(e,t,r,n){return this.on(t,e,r,n)},"pre-on-methods","jQuery.fn.delegate() is deprecated"),c(s.fn,"undelegate",function(e,t,r){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},"pre-on-methods","jQuery.fn.undelegate() is deprecated"),c(s.fn,"hover",function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)},"pre-on-methods","jQuery.fn.hover() is deprecated");function T(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}var F=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.migrateEnablePatches("self-closed-tags")},i(s,"htmlPrefilter",function(e){var t,r;return(r=(t=e).replace(F,"<$1></$2>"))!==t&&T(t)!==T(r)&&u("self-closed-tags","HTML tags must be properly nested and closed: "+t),e.replace(F,"<$1></$2>")},"self-closed-tags"),s.migrateDisablePatches("self-closed-tags");var D,W,_,I=s.fn.offset;return i(s.fn,"offset",function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?I.apply(this,arguments):(u("offset-valid-elem","jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},"offset-valid-elem"),s.ajax&&(D=s.param,i(s,"param",function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("param-ajax-traditional","jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),D.call(this,e,t)},"param-ajax-traditional")),c(s.fn,"andSelf",s.fn.addBack,"andSelf","jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),s.Deferred&&(W=s.Deferred,_=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],i(s,"Deferred",function(e){var a=W(),i=a.promise();function t(){var o=arguments;return s.Deferred(function(n){s.each(_,function(e,t){var r="function"==typeof o[e]&&o[e];a[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===i?n.promise():this,r?[e]:arguments)})}),o=null}).promise()}return c(a,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),c(i,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),e&&e.call(a,a),a},"deferred-pipe"),s.Deferred.exceptionHook=W.exceptionHook),s});
;
/*! pace 0.5.1 */
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W=[].slice,X={}.hasOwnProperty,Y=function(a,b){function c(){this.constructor=a}for(var d in b)X.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},Z=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};for(t={catchupTime:500,initialRate:.03,minTime:500,ghostTime:500,maxProgressPerFrame:10,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},B=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance?"function"==typeof performance.now?performance.now():void 0:void 0)?a:+new Date},D=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,s=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==D&&(D=function(a){return setTimeout(a,50)},s=function(a){return clearTimeout(a)}),F=function(a){var b,c;return b=B(),(c=function(){var d;return d=B()-b,d>=33?(b=B(),a(d,function(){return D(c)})):setTimeout(c,33-d)})()},E=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?W.call(arguments,2):[],"function"==typeof c[b]?c[b].apply(c,a):c[b]},u=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?W.call(arguments,1):[],f=0,g=d.length;g>f;f++)if(c=d[f])for(a in c)X.call(c,a)&&(e=c[a],null!=b[a]&&"object"==typeof b[a]&&null!=e&&"object"==typeof e?u(b[a],e):b[a]=e);return b},p=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;f>e;e++)d=a[e],c+=Math.abs(d),b++;return c/b},w=function(a,b){var c,d,e;if(null==a&&(a="options"),null==b&&(b=!0),e=document.querySelector("[data-pace-"+a+"]")){if(c=e.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(f){return d=f,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",d):void 0}}},g=function(){function a(){}return a.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})},a.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},a.prototype.off=function(a,b){var c,d,e;if(null!=(null!=(d=this.bindings)?d[a]:void 0)){if(null==b)return delete this.bindings[a];for(c=0,e=[];c<this.bindings[a].length;)this.bindings[a][c].handler===b?e.push(this.bindings[a].splice(c,1)):e.push(c++);return e}},a.prototype.trigger=function(){var a,b,c,d,e,f,g,h,i;if(c=arguments[0],a=2<=arguments.length?W.call(arguments,1):[],null!=(g=this.bindings)?g[c]:void 0){for(e=0,i=[];e<this.bindings[c].length;)h=this.bindings[c][e],d=h.handler,b=h.ctx,f=h.once,d.apply(null!=b?b:this,a),f?i.push(this.bindings[c].splice(e,1)):i.push(e++);return i}},a}(),null==window.Pace&&(window.Pace={}),u(Pace,g.prototype),C=Pace.options=u({},t,window.paceOptions,w()),T=["ajax","document","eventLag","elements"],P=0,R=T.length;R>P;P++)J=T[P],C[J]===!0&&(C[J]=t[J]);i=function(a){function b(){return U=b.__super__.constructor.apply(this,arguments)}return Y(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(a=document.querySelector(C.target),!a)throw new i;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace("pace-active",""),a.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){i=a}return this.el=void 0},a.prototype.render=function(){var a,b;return null==document.querySelector(C.target)?!1:(a=this.getElement(),a.children[0].style.width=""+this.progress+"%",(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(a.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?b="99":(b=this.progress<10?"0":"",b+=0|this.progress),a.children[0].setAttribute("data-progress",""+b)),this.lastRenderedProgress=this.progress)},a.prototype.done=function(){return this.progress>=100},a}(),h=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),O=window.XMLHttpRequest,N=window.XDomainRequest,M=window.WebSocket,v=function(a,b){var c,d,e,f;f=[];for(d in b.prototype)try{e=b.prototype[d],null==a[d]&&"function"!=typeof e?f.push(a[d]=e):f.push(void 0)}catch(g){c=g}return f},z=[],Pace.ignore=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?W.call(arguments,1):[],z.unshift("ignore"),c=b.apply(null,a),z.shift(),c},Pace.track=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?W.call(arguments,1):[],z.unshift("track"),c=b.apply(null,a),z.shift(),c},I=function(a){var b;if(null==a&&(a="GET"),"track"===z[0])return"force";if(!z.length&&C.ajax){if("socket"===a&&C.ajax.trackWebSockets)return!0;if(b=a.toUpperCase(),Z.call(C.ajax.trackMethods,b)>=0)return!0}return!1},j=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e){return I(d)&&c.trigger("request",{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new O(b),a(c),c},v(window.XMLHttpRequest,O),null!=N&&(window.XDomainRequest=function(){var b;return b=new N,a(b),b},v(window.XDomainRequest,N)),null!=M&&C.ajax.trackWebSockets&&(window.WebSocket=function(a,b){var d;return d=null!=b?new M(a,b):new M(a),I("socket")&&c.trigger("request",{type:"socket",url:a,protocols:b,request:d}),d},v(window.WebSocket,M))}return Y(b,a),b}(h),Q=null,x=function(){return null==Q&&(Q=new j),Q},H=function(a){var b,c,d,e;for(e=C.ajax.ignoreURLs,c=0,d=e.length;d>c;c++)if(b=e[c],"string"==typeof b){if(-1!==a.indexOf(b))return!0}else if(b.test(a))return!0;return!1},x().on("request",function(b){var c,d,e,f,g;return f=b.type,e=b.request,g=b.url,H(g)?void 0:Pace.running||C.restartOnRequestAfter===!1&&"force"!==I(f)?void 0:(d=arguments,c=C.restartOnRequestAfter||0,"boolean"==typeof c&&(c=0),setTimeout(function(){var b,c,g,h,i,j;if(b="socket"===f?e.readyState<2:0<(h=e.readyState)&&4>h){for(Pace.restart(),i=Pace.sources,j=[],c=0,g=i.length;g>c;c++){if(J=i[c],J instanceof a){J.watch.apply(J,d);break}j.push(void 0)}return j}},c))}),a=function(){function a(){var a=this;this.elements=[],x().on("request",function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d,e;return d=a.type,b=a.request,e=a.url,H(e)?void 0:(c="socket"===d?new m(b):new n(b),this.elements.push(c))},a}(),n=function(){function a(a){var b,c,d,e,f,g,h=this;if(this.progress=0,null!=window.ProgressEvent)for(c=null,a.addEventListener("progress",function(a){return h.progress=a.lengthComputable?100*a.loaded/a.total:h.progress+(100-h.progress)/2}),g=["load","abort","timeout","error"],d=0,e=g.length;e>d;d++)b=g[d],a.addEventListener(b,function(){return h.progress=100});else f=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?h.progress=100:3===a.readyState&&(h.progress=50),"function"==typeof f?f.apply(null,arguments):void 0}}return a}(),m=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=["error","open"],c=0,d=e.length;d>c;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100})}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;d>c;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},C.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),"function"==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=B(),b=setInterval(function(){var g;return g=B()-c-50,c=B(),e.push(g),e.length>C.eventLag.sampleCount&&e.shift(),a=p(e),++d>=C.eventLag.minSamples&&a<C.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=100*(3/(a+3))},50)}return a}(),l=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=C.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=E(this.source,"progress"))}return a.prototype.tick=function(a,b){var c;return null==b&&(b=E(this.source,"progress")),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/C.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,C.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+C.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),K=null,G=null,q=null,L=null,o=null,r=null,Pace.running=!1,y=function(){return C.restartOnPushState?Pace.restart():void 0},null!=window.history.pushState&&(S=window.history.pushState,window.history.pushState=function(){return y(),S.apply(window.history,arguments)}),null!=window.history.replaceState&&(V=window.history.replaceState,window.history.replaceState=function(){return y(),V.apply(window.history,arguments)}),k={ajax:a,elements:d,document:c,eventLag:f},(A=function(){var a,c,d,e,f,g,h,i;for(Pace.sources=K=[],g=["ajax","elements","document","eventLag"],c=0,e=g.length;e>c;c++)a=g[c],C[a]!==!1&&K.push(new k[a](C[a]));for(i=null!=(h=C.extraSources)?h:[],d=0,f=i.length;f>d;d++)J=i[d],K.push(new J(C));return Pace.bar=q=new b,G=[],L=new l})(),Pace.stop=function(){return Pace.trigger("stop"),Pace.running=!1,q.destroy(),r=!0,null!=o&&("function"==typeof s&&s(o),o=null),A()},Pace.restart=function(){return Pace.trigger("restart"),Pace.stop(),Pace.start()},Pace.go=function(){var a;return Pace.running=!0,q.render(),a=B(),r=!1,o=F(function(b,c){var d,e,f,g,h,i,j,k,m,n,o,p,s,t,u,v;for(k=100-q.progress,e=o=0,f=!0,i=p=0,t=K.length;t>p;i=++p)for(J=K[i],n=null!=G[i]?G[i]:G[i]=[],h=null!=(v=J.elements)?v:[J],j=s=0,u=h.length;u>s;j=++s)g=h[j],m=null!=n[j]?n[j]:n[j]=new l(g),f&=m.done,m.done||(e++,o+=m.tick(b));return d=o/e,q.update(L.tick(b,d)),q.done()||f||r?(q.update(100),Pace.trigger("done"),setTimeout(function(){return q.finish(),Pace.running=!1,Pace.trigger("hide")},Math.max(C.ghostTime,Math.max(C.minTime-(B()-a),0)))):c()})},Pace.start=function(a){u(C,a),Pace.running=!0;try{q.render()}catch(b){i=b}return document.querySelector(".pace")?(Pace.trigger("start"),Pace.go()):setTimeout(Pace.start,50)},"function"==typeof define&&define.amd?define(function(){return Pace}):"object"==typeof exports?module.exports=Pace:C.startOnPageLoad&&Pace.start()}).call(this);;
!function(){"use strict";var d={d:function(c,b){for(var a in b)d.o(b,a)&&!d.o(c,a)&&Object.defineProperty(c,a,{enumerable:!0,get:b[a]})},o:function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},r:function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}},b={},n,e;function c(a){if(this.formData={},this.tree={},!(a instanceof FormData))return this;this.formData=a;const b=()=>{const a=new Map;return a.largestIndex=0,a.set=function(b,c){""===b?b=a.largestIndex++:/^[0-9]+$/.test(b)&&(b=parseInt(b),a.largestIndex<=b&&(a.largestIndex=b+1)),Map.prototype.set.call(a,b,c)},a};this.tree=b();const c=/^(?<name>[a-z][-a-z0-9_:]*)(?<array>(?:\[(?:[a-z][-a-z0-9_:]*|[0-9]*)\])*)/i;for(const[e,d]of this.formData){const a=e.match(c);if(a)if(""===a.groups.array)this.tree.set(a.groups.name,d);else{const c=[...a.groups.array.matchAll(/\[([a-z][-a-z0-9_:]*|[0-9]*)\]/gi)].map(([b,a])=>a);c.unshift(a.groups.name);const e=c.pop();c.reduce((c,a)=>{if(/^[0-9]+$/.test(a)&&(a=parseInt(a)),c.get(a)instanceof Map)return c.get(a);const d=b();return c.set(a,d),d},this.tree).set(e,d)}}}d.r(b),d.d(b,{date:function(){return l},dayofweek:function(){return p},email:function(){return h},enum:function(){return o},file:function(){return A},maxdate:function(){return x},maxfilesize:function(){return z},maxitems:function(){return r},maxlength:function(){return t},maxnumber:function(){return v},mindate:function(){return w},minfilesize:function(){return y},minitems:function(){return q},minlength:function(){return s},minnumber:function(){return u},number:function(){return k},required:function(){return f},requiredfile:function(){return g},tel:function(){return j},time:function(){return m},url:function(){return i}}),c.prototype.entries=function(){return this.tree.entries()},c.prototype.get=function(a){return this.tree.get(a)},c.prototype.getAll=function(a){if(!this.has(a))return[];const b=a=>{const c=[];if(a instanceof Map)for(const[e,d]of a)c.push(...b(d));else""!==a&&c.push(a);return c};return b(this.get(a))},c.prototype.has=function(a){return this.tree.has(a)},c.prototype.keys=function(){return this.tree.keys()},c.prototype.values=function(){return this.tree.values()},n=c;function a({rule:a,field:b,error:c,...d}){this.rule=a,this.field=b,this.error=c,this.properties=d}const f=function(b){if(0===b.getAll(this.field).length)throw new a(this)},g=function(b){if(0===b.getAll(this.field).length)throw new a(this)},h=function(b){if(!b.getAll(this.field).every(a=>{if((a=a.trim()).length<6)return!1;if(-1===a.indexOf("@",1))return!1;if(a.indexOf("@")!==a.lastIndexOf("@"))return!1;const[d,b]=a.split("@",2);if(!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.-]+$/.test(d))return!1;if(/\.{2,}/.test(b))return!1;if(/(?:^[ \t\n\r\0\x0B.]|[ \t\n\r\0\x0B.]$)/.test(b))return!1;const c=b.split(".");if(c.length<2)return!1;for(const a of c){if(/(?:^[ \t\n\r\0\x0B-]|[ \t\n\r\0\x0B-]$)/.test(a))return!1;if(!/^[a-z0-9-]+$/i.test(a))return!1}return!0}))throw new a(this)},i=function(b){const c=b.getAll(this.field);if(!c.every(a=>{if(""===(a=a.trim()))return!1;try{return(a=>-1!==["http","https","ftp","ftps","mailto","news","irc","irc6","ircs","gopher","nntp","feed","telnet","mms","rtsp","sms","svn","tel","fax","xmpp","webcal","urn"].indexOf(a))(new URL(a).protocol.replace(/:$/,""))}catch{return!1}}))throw new a(this)},j=function(b){if(!b.getAll(this.field).every(a=>(a=(a=a.trim()).replaceAll(/[()/.*#\s-]+/g,""),/^[+]?[0-9]+$/.test(a))))throw new a(this)},k=function(b){if(!b.getAll(this.field).every(a=>(a=a.trim(),!!/^[-]?[0-9]+(?:[eE][+-]?[0-9]+)?$/.test(a)||!!/^[-]?(?:[0-9]+)?[.][0-9]+(?:[eE][+-]?[0-9]+)?$/.test(a))))throw new a(this)},l=function(b){if(!b.getAll(this.field).every(a=>{if(a=a.trim(),!/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(a))return!1;const b=new Date(a);return!Number.isNaN(b.valueOf())}))throw new a(this)},m=function(b){if(!b.getAll(this.field).every(e=>{const a=e.trim().match(/^([0-9]{2})\:([0-9]{2})(?:\:([0-9]{2}))?$/);if(!a)return!1;const b=parseInt(a[1]),c=parseInt(a[2]),d=a[3]?parseInt(a[3]):0;return 0<=b&&b<=23&&0<=c&&c<=59&&0<=d&&d<=59}))throw new a(this)},A=function(b){if(!b.getAll(this.field).every(a=>a instanceof File&&this.accept?.some(b=>/^\.[a-z0-9]+$/i.test(b)?a.name.toLowerCase().endsWith(b.toLowerCase()):(c=>{const b=[],a=c.match(/^(?<toplevel>[a-z]+)\/(?<sub>[*]|[a-z0-9.+-]+)$/i);if(a){const c=a.groups.toplevel.toLowerCase(),d=a.groups.sub.toLowerCase();for(const[f,e]of(()=>{const a=new Map;return a.set("jpg|jpeg|jpe","image/jpeg"),a.set("gif","image/gif"),a.set("png","image/png"),a.set("bmp","image/bmp"),a.set("tiff|tif","image/tiff"),a.set("webp","image/webp"),a.set("ico","image/x-icon"),a.set("heic","image/heic"),a.set("asf|asx","video/x-ms-asf"),a.set("wmv","video/x-ms-wmv"),a.set("wmx","video/x-ms-wmx"),a.set("wm","video/x-ms-wm"),a.set("avi","video/avi"),a.set("divx","video/divx"),a.set("flv","video/x-flv"),a.set("mov|qt","video/quicktime"),a.set("mpeg|mpg|mpe","video/mpeg"),a.set("mp4|m4v","video/mp4"),a.set("ogv","video/ogg"),a.set("webm","video/webm"),a.set("mkv","video/x-matroska"),a.set("3gp|3gpp","video/3gpp"),a.set("3g2|3gp2","video/3gpp2"),a.set("txt|asc|c|cc|h|srt","text/plain"),a.set("csv","text/csv"),a.set("tsv","text/tab-separated-values"),a.set("ics","text/calendar"),a.set("rtx","text/richtext"),a.set("css","text/css"),a.set("htm|html","text/html"),a.set("vtt","text/vtt"),a.set("dfxp","application/ttaf+xml"),a.set("mp3|m4a|m4b","audio/mpeg"),a.set("aac","audio/aac"),a.set("ra|ram","audio/x-realaudio"),a.set("wav","audio/wav"),a.set("ogg|oga","audio/ogg"),a.set("flac","audio/flac"),a.set("mid|midi","audio/midi"),a.set("wma","audio/x-ms-wma"),a.set("wax","audio/x-ms-wax"),a.set("mka","audio/x-matroska"),a.set("rtf","application/rtf"),a.set("js","application/javascript"),a.set("pdf","application/pdf"),a.set("swf","application/x-shockwave-flash"),a.set("class","application/java"),a.set("tar","application/x-tar"),a.set("zip","application/zip"),a.set("gz|gzip","application/x-gzip"),a.set("rar","application/rar"),a.set("7z","application/x-7z-compressed"),a.set("exe","application/x-msdownload"),a.set("psd","application/octet-stream"),a.set("xcf","application/octet-stream"),a.set("doc","application/msword"),a.set("pot|pps|ppt","application/vnd.ms-powerpoint"),a.set("wri","application/vnd.ms-write"),a.set("xla|xls|xlt|xlw","application/vnd.ms-excel"),a.set("mdb","application/vnd.ms-access"),a.set("mpp","application/vnd.ms-project"),a.set("docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"),a.set("docm","application/vnd.ms-word.document.macroEnabled.12"),a.set("dotx","application/vnd.openxmlformats-officedocument.wordprocessingml.template"),a.set("dotm","application/vnd.ms-word.template.macroEnabled.12"),a.set("xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),a.set("xlsm","application/vnd.ms-excel.sheet.macroEnabled.12"),a.set("xlsb","application/vnd.ms-excel.sheet.binary.macroEnabled.12"),a.set("xltx","application/vnd.openxmlformats-officedocument.spreadsheetml.template"),a.set("xltm","application/vnd.ms-excel.template.macroEnabled.12"),a.set("xlam","application/vnd.ms-excel.addin.macroEnabled.12"),a.set("pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"),a.set("pptm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"),a.set("ppsx","application/vnd.openxmlformats-officedocument.presentationml.slideshow"),a.set("ppsm","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"),a.set("potx","application/vnd.openxmlformats-officedocument.presentationml.template"),a.set("potm","application/vnd.ms-powerpoint.template.macroEnabled.12"),a.set("ppam","application/vnd.ms-powerpoint.addin.macroEnabled.12"),a.set("sldx","application/vnd.openxmlformats-officedocument.presentationml.slide"),a.set("sldm","application/vnd.ms-powerpoint.slide.macroEnabled.12"),a.set("onetoc|onetoc2|onetmp|onepkg","application/onenote"),a.set("oxps","application/oxps"),a.set("xps","application/vnd.ms-xpsdocument"),a.set("odt","application/vnd.oasis.opendocument.text"),a.set("odp","application/vnd.oasis.opendocument.presentation"),a.set("ods","application/vnd.oasis.opendocument.spreadsheet"),a.set("odg","application/vnd.oasis.opendocument.graphics"),a.set("odc","application/vnd.oasis.opendocument.chart"),a.set("odb","application/vnd.oasis.opendocument.database"),a.set("odf","application/vnd.oasis.opendocument.formula"),a.set("wp|wpd","application/wordperfect"),a.set("key","application/vnd.apple.keynote"),a.set("numbers","application/vnd.apple.numbers"),a.set("pages","application/vnd.apple.pages"),a})())("*"===d&&e.startsWith(c+"/")||e===a[0])&&b.push(...f.split("|"))}return b})(b).some(b=>(b="."+b.trim(),a.name.toLowerCase().endsWith(b.toLowerCase()))))))throw new a(this)},o=function(b){if(!b.getAll(this.field).every(a=>this.accept?.some(b=>a===String(b))))throw new a(this)},p=function(b){if(!b.getAll(this.field).every(b=>{const c=0===(a=new Date(b).getDay())?7:a;var a;return this.accept?.some(a=>c===parseInt(a))}))throw new a(this)},q=function(b){if(b.getAll(this.field).length<parseInt(this.threshold))throw new a(this)},r=function(b){const c=b.getAll(this.field);if(parseInt(this.threshold)<c.length)throw new a(this)},s=function(c){const d=c.getAll(this.field);let b=0;if(d.forEach(a=>{"string"==typeof a&&(b+=a.length)}),0!==b&&b<parseInt(this.threshold))throw new a(this)},t=function(c){const d=c.getAll(this.field);let b=0;if(d.forEach(a=>{"string"==typeof a&&(b+=a.length)}),parseInt(this.threshold)<b)throw new a(this)},u=function(b){if(!b.getAll(this.field).every(a=>!(parseFloat(a)<parseFloat(this.threshold))))throw new a(this)},v=function(b){if(!b.getAll(this.field).every(a=>!(parseFloat(this.threshold)<parseFloat(a))))throw new a(this)},w=function(b){if(!b.getAll(this.field).every(a=>(a=a.trim(),!(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(a)&&/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold)&&a<this.threshold))))throw new a(this)},x=function(b){if(!b.getAll(this.field).every(a=>(a=a.trim(),!(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(a)&&/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold)&&this.threshold<a))))throw new a(this)},y=function(c){const d=c.getAll(this.field);let b=0;if(d.forEach(a=>{a instanceof File&&(b+=a.size)}),b<parseInt(this.threshold))throw new a(this)},z=function(c){const d=c.getAll(this.field);let b=0;if(d.forEach(a=>{a instanceof File&&(b+=a.size)}),parseInt(this.threshold)<b)throw new a(this)};window.swv={validators:b,validate:(f,g,h={})=>{const e=(f.rules??[]).filter(({rule:a,...c})=>"function"==typeof b[a]&&("function"!=typeof b[a].matches||b[a].matches(c,h)));if(!e.length)return new Map;const c=new n(g),d=e.reduce((d,g)=>{const{rule:f,...e}=g;if(d.get(e.field)?.error)return d;try{b[f].call({rule:f,...e},c)}catch(b){if(b instanceof a)return d.set(e.field,b)}return d},new Map);for(const a of c.keys())d.has(a)||d.set(a,{validInputs:c.getAll(a)});return d},...null!==(e=window.swv)&&void 0!==e?e:{}}}();
!function(){"use strict";const d=a=>Math.abs(parseInt(a,10)),b=(a,b,c)=>{const d=new CustomEvent(`wpcf7${b}`,{bubbles:!0,detail:c});"string"==typeof a&&(a=document.querySelector(a)),a.dispatchEvent(d)},a=(c,a)=>{const e=new Map([["init","init"],["validation_failed","invalid"],["acceptance_missing","unaccepted"],["spam","spam"],["aborted","aborted"],["mail_sent","sent"],["mail_failed","failed"],["submitting","submitting"],["resetting","resetting"],["validating","validating"],["payment_required","payment-required"]]);e.has(a)&&(a=e.get(a)),Array.from(e.values()).includes(a)||(a=`custom-${a=(a=a.replace(/[^0-9a-z]+/i," ").trim()).replace(/\s+/,"-")}`);const d=c.getAttribute("data-status");if(c.wpcf7.status=a,c.setAttribute("data-status",a),c.classList.add(a),d&&d!==a){c.classList.remove(d);const a={contactFormId:c.wpcf7.id,pluginVersion:c.wpcf7.pluginVersion,contactFormLocale:c.wpcf7.locale,unitTag:c.wpcf7.unitTag,containerPostId:c.wpcf7.containerPost,status:c.wpcf7.status,prevStatus:d};b(c,"statuschanged",a)}return a},c=b=>{const{root:a,namespace:c="contact-form-7/v1"}=wpcf7.api;return f.reduceRight((a,b)=>c=>b(c,a),l=>{let e,f,{url:g,path:b,endpoint:h,headers:d,body:i,data:j,...m}=l;"string"==typeof h&&(e=c.replace(/^\/|\/$/g,""),f=h.replace(/^\//,""),b=f?e+"/"+f:e),"string"==typeof b&&(-1!==a.indexOf("?")&&(b=b.replace("?","&")),b=b.replace(/^\//,""),g=a+b),d={Accept:"application/json, */*;q=0.1",...d},delete d["X-WP-Nonce"],j&&(i=JSON.stringify(j),d["Content-Type"]="application/json");const n={code:"fetch_error",message:"You are probably offline."},k={code:"invalid_json",message:"The response is not a valid JSON response."};return window.fetch(g||b||window.location.href,{...m,headers:d,body:i}).then(a=>Promise.resolve(a).then(a=>{if(a.status>=200&&a.status<300)return a;throw a}).then(a=>{if(204===a.status)return null;if(a&&a.json)return a.json().catch(()=>{throw k});throw k}),()=>{throw n})})(b)},f=[];function n(b,i={}){var e;const{target:d,scope:g=b,...n}=i;if(void 0===b.wpcf7?.schema)return;const f={...b.wpcf7.schema};if(void 0!==d){if(!b.contains(d))return;if(!d.closest(".wpcf7-form-control-wrap[data-name]"))return;if(d.closest(".novalidate"))return}const c=new FormData,k=[];for(const a of g.querySelectorAll(".wpcf7-form-control-wrap"))if(!a.closest(".novalidate")&&(a.querySelectorAll(":where( input, textarea, select ):enabled").forEach(a=>{if(a.name)switch(a.type){case"button":case"image":case"reset":case"submit":break;case"checkbox":case"radio":a.checked&&c.append(a.name,a.value);break;case"select-multiple":for(const b of a.selectedOptions)c.append(a.name,b.value);break;case"file":for(const b of a.files)c.append(a.name,b);break;default:c.append(a.name,a.value)}}),a.dataset.name&&(k.push(a.dataset.name),a.setAttribute("data-under-validation","1"),a.contains(d))))break;f.rules=(null!==(e=f.rules)&&void 0!==e?e:[]).filter(({field:a})=>k.includes(a));const l=b.getAttribute("data-status");Promise.resolve(a(b,"validating")).then(a=>{if(void 0!==swv){const a=swv.validate(f,c,i);for(const[c,{error:d,validInputs:e}]of a)j(b,c),void 0!==d&&h(b,c,d,{scope:g}),m(b,c,null!=e?e:[])}}).finally(()=>{a(b,l),b.querySelectorAll(".wpcf7-form-control-wrap[data-under-validation]").forEach(a=>{a.removeAttribute("data-under-validation")})})}c.use=a=>{f.unshift(a)};const h=(a,c,b,e)=>{const{scope:g=a,...h}=null!=e?e:{},f=`${a.wpcf7?.unitTag}-ve-${c}`.replaceAll(/[^0-9a-z_-]+/gi,""),d=a.querySelector(`.wpcf7-form-control-wrap[data-name="${c}"] .wpcf7-form-control`);(()=>{const c=document.createElement("li");c.setAttribute("id",f),d&&d.id?c.insertAdjacentHTML("beforeend",`<a href="#${d.id}">${b}</a>`):c.insertAdjacentText("beforeend",b),a.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(c)})(),g.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${c}"]`).forEach(d=>{if("validating"===a.getAttribute("data-status")&&!d.dataset.underValidation)return;const c=document.createElement("span");c.classList.add("wpcf7-not-valid-tip"),c.setAttribute("aria-hidden","true"),c.insertAdjacentText("beforeend",b),d.appendChild(c),d.querySelectorAll("[aria-invalid]").forEach(a=>{a.setAttribute("aria-invalid","true")}),d.querySelectorAll(".wpcf7-form-control").forEach(a=>{a.classList.add("wpcf7-not-valid"),a.setAttribute("aria-describedby",f),"function"==typeof a.setCustomValidity&&a.setCustomValidity(b),a.closest(".use-floating-validation-tip")&&(a.addEventListener("focus",a=>{c.setAttribute("style","display: none")}),c.addEventListener("click",a=>{c.setAttribute("style","display: none")}))})})},j=(a,b)=>{const c=`${a.wpcf7?.unitTag}-ve-${b}`.replaceAll(/[^0-9a-z_-]+/gi,"");a.wpcf7.parent.querySelector(`.screen-reader-response ul li#${c}`)?.remove(),a.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${b}"]`).forEach(a=>{a.querySelector(".wpcf7-not-valid-tip")?.remove(),a.querySelectorAll("[aria-invalid]").forEach(a=>{a.setAttribute("aria-invalid","false")}),a.querySelectorAll(".wpcf7-form-control").forEach(a=>{a.removeAttribute("aria-describedby"),a.classList.remove("wpcf7-not-valid"),"function"==typeof a.setCustomValidity&&a.setCustomValidity("")})})},m=(c,b,a)=>{c.querySelectorAll(`[data-reflection-of="${b}"]`).forEach(c=>{if("output"===c.tagName.toLowerCase()){const b=c;0===a.length&&a.push(b.dataset.default),a.slice(0,1).forEach(a=>{a instanceof File&&(a=a.name),b.textContent=a})}else c.querySelectorAll("output").forEach(b=>{b.hasAttribute("data-default")?0===a.length?b.removeAttribute("hidden"):b.setAttribute("hidden","hidden"):b.remove()}),a.forEach(a=>{a instanceof File&&(a=a.name);const d=document.createElement("output");d.setAttribute("name",b),d.textContent=a,c.appendChild(d)})})};function k(d,g={}){if(wpcf7.blocked)return e(d),void a(d,"submitting");const i=new FormData(d);g.submitter&&g.submitter.name&&i.append(g.submitter.name,g.submitter.value);const f={contactFormId:d.wpcf7.id,pluginVersion:d.wpcf7.pluginVersion,contactFormLocale:d.wpcf7.locale,unitTag:d.wpcf7.unitTag,containerPostId:d.wpcf7.containerPost,status:d.wpcf7.status,inputs:Array.from(i,a=>{const b=a[0],c=a[1];return!b.match(/^_/)&&{name:b,value:c}}).filter(a=>!1!==a),formData:i};c({endpoint:`contact-forms/${d.wpcf7.id}/feedback`,method:"POST",body:i,wpcf7:{endpoint:"feedback",form:d,detail:f}}).then(c=>{const e=a(d,c.status);return f.status=c.status,f.apiResponse=c,["invalid","unaccepted","spam","aborted"].includes(e)?b(d,e,f):["sent","failed"].includes(e)&&b(d,`mail${e}`,f),b(d,"submit",f),c}).then(a=>{a.posted_data_hash&&(d.querySelector('input[name="_wpcf7_posted_data_hash"]').value=a.posted_data_hash),"mail_sent"===a.status&&(d.reset(),d.wpcf7.resetOnMailSent=!0),a.invalid_fields&&a.invalid_fields.forEach(a=>{h(d,a.field,a.message)}),d.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend",a.message),d.querySelectorAll(".wpcf7-response-output").forEach(b=>{b.innerText=a.message})}).catch(a=>console.error(a))}c.use((c,d)=>{if(c.wpcf7&&"feedback"===c.wpcf7.endpoint){const{form:d,detail:f}=c.wpcf7;e(d),b(d,"beforesubmit",f),a(d,"submitting")}return d(c)});const e=a=>{a.querySelectorAll(".wpcf7-form-control-wrap").forEach(b=>{b.dataset.name&&j(a,b.dataset.name)}),a.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText="",a.querySelectorAll(".wpcf7-response-output").forEach(a=>{a.innerText=""})};function l(d){const f=new FormData(d),e={contactFormId:d.wpcf7.id,pluginVersion:d.wpcf7.pluginVersion,contactFormLocale:d.wpcf7.locale,unitTag:d.wpcf7.unitTag,containerPostId:d.wpcf7.containerPost,status:d.wpcf7.status,inputs:Array.from(f,a=>{const b=a[0],c=a[1];return!b.match(/^_/)&&{name:b,value:c}}).filter(a=>!1!==a),formData:f};c({endpoint:`contact-forms/${d.wpcf7.id}/refill`,method:"GET",wpcf7:{endpoint:"refill",form:d,detail:e}}).then(c=>{d.wpcf7.resetOnMailSent?(delete d.wpcf7.resetOnMailSent,a(d,"mail_sent")):a(d,"init"),e.apiResponse=c,b(d,"reset",e)}).catch(a=>console.error(a))}c.use((b,c)=>{if(b.wpcf7&&"refill"===b.wpcf7.endpoint){const{form:c,detail:d}=b.wpcf7;e(c),a(c,"resetting")}return c(b)});const i=(a,b)=>{for(const c in b){const d=b[c];a.querySelectorAll(`input[name="${c}"]`).forEach(a=>{a.value=""}),a.querySelectorAll(`img.wpcf7-captcha-${c.replaceAll(":","")}`).forEach(a=>{a.setAttribute("src",d)});const e=/([0-9]+)\.(png|gif|jpeg)$/.exec(d);e&&a.querySelectorAll(`input[name="_wpcf7_captcha_challenge_${c}"]`).forEach(a=>{a.value=e[1]})}},g=(b,a)=>{for(const c in a){const d=a[c][0],e=a[c][1];b.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${c}"]`).forEach(a=>{a.querySelector(`input[name="${c}"]`).value="",a.querySelector(".wpcf7-quiz-label").textContent=d,a.querySelector(`input[name="_wpcf7_quiz_answer_${c}"]`).value=e})}};function o(a){const b=new FormData(a);a.wpcf7={id:d(b.get("_wpcf7")),status:a.getAttribute("data-status"),pluginVersion:b.get("_wpcf7_version"),locale:b.get("_wpcf7_locale"),unitTag:b.get("_wpcf7_unit_tag"),containerPost:d(b.get("_wpcf7_container_post")),parent:a.closest(".wpcf7"),schema:void 0},a.querySelectorAll(".has-spinner").forEach(a=>{a.insertAdjacentHTML("afterend",'<span class="wpcf7-spinner"></span>')}),(a=>{a.querySelectorAll(".wpcf7-exclusive-checkbox").forEach(b=>{b.addEventListener("change",b=>{const c=b.target.getAttribute("name");a.querySelectorAll(`input[type="checkbox"][name="${c}"]`).forEach(a=>{a!==b.target&&(a.checked=!1)})})})})(a),(a=>{a.querySelectorAll(".has-free-text").forEach(d=>{const c=d.querySelector("input.wpcf7-free-text"),b=d.querySelector('input[type="checkbox"], input[type="radio"]');c.disabled=!b.checked,a.addEventListener("change",a=>{c.disabled=!b.checked,a.target===b&&b.checked&&c.focus()})})})(a),(a=>{a.querySelectorAll(".wpcf7-validates-as-url").forEach(a=>{a.addEventListener("change",c=>{let b=a.value.trim();b&&!b.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==b.indexOf(".")&&(b=b.replace(/^\/+/,""),b="http://"+b),a.value=b})})})(a),(a=>{if(!a.querySelector(".wpcf7-acceptance")||a.classList.contains("wpcf7-acceptance-as-validation"))return;const b=()=>{let b=!0;a.querySelectorAll(".wpcf7-acceptance").forEach(a=>{if(!b||a.classList.contains("optional"))return;const c=a.querySelector('input[type="checkbox"]');(a.classList.contains("invert")&&c.checked||!a.classList.contains("invert")&&!c.checked)&&(b=!1)}),a.querySelectorAll(".wpcf7-submit").forEach(a=>{a.disabled=!b})};b(),a.addEventListener("change",a=>{b()}),a.addEventListener("wpcf7reset",a=>{b()})})(a),(a=>{const b=(a,b)=>{const g=d(a.getAttribute("data-starting-value")),c=d(a.getAttribute("data-maximum-value")),e=d(a.getAttribute("data-minimum-value")),f=a.classList.contains("down")?g-b.value.length:b.value.length;a.setAttribute("data-current-value",f),a.innerText=f,c&&c<b.value.length?a.classList.add("too-long"):a.classList.remove("too-long"),e&&b.value.length<e?a.classList.add("too-short"):a.classList.remove("too-short")},c=c=>{c={init:!1,...c},a.querySelectorAll(".wpcf7-character-count").forEach(e=>{const f=e.getAttribute("data-target-name"),d=a.querySelector(`[name="${f}"]`);d&&(d.value=d.defaultValue,b(e,d),c.init&&d.addEventListener("keyup",a=>{b(e,d)}))})};c({init:!0}),a.addEventListener("wpcf7reset",a=>{c()})})(a),window.addEventListener("load",b=>{wpcf7.cached&&a.reset()}),a.addEventListener("reset",b=>{wpcf7.reset(a)}),a.addEventListener("submit",b=>{wpcf7.submit(a,{submitter:b.submitter}),b.preventDefault()}),a.addEventListener("wpcf7submit",b=>{b.detail.apiResponse.captcha&&i(a,b.detail.apiResponse.captcha),b.detail.apiResponse.quiz&&g(a,b.detail.apiResponse.quiz)}),a.addEventListener("wpcf7reset",b=>{b.detail.apiResponse.captcha&&i(a,b.detail.apiResponse.captcha),b.detail.apiResponse.quiz&&g(a,b.detail.apiResponse.quiz)}),c({endpoint:`contact-forms/${a.wpcf7.id}/feedback/schema`,method:"GET"}).then(b=>{a.wpcf7.schema=b}),a.addEventListener("change",b=>{b.target.closest(".wpcf7-form-control")&&wpcf7.validate(a,{target:b.target})}),a.addEventListener("wpcf7statuschanged",b=>{const c=b.detail.status;a.querySelectorAll(".active-on-any").forEach(a=>{a.removeAttribute("inert"),a.classList.remove("active-on-any")}),a.querySelectorAll(`.inert-on-${c}`).forEach(a=>{a.setAttribute("inert","inert"),a.classList.add("active-on-any")})})}document.addEventListener("DOMContentLoaded",b=>{var a;"undefined"!=typeof wpcf7?void 0!==wpcf7.api?"function"==typeof window.fetch?"function"==typeof window.FormData?"function"==typeof NodeList.prototype.forEach?"function"==typeof String.prototype.replaceAll?(wpcf7={init:o,submit:k,reset:l,validate:n,...null!==(a=wpcf7)&&void 0!==a?a:{}},document.querySelectorAll(".wpcf7 > form").forEach(a=>{wpcf7.init(a),a.closest(".wpcf7").classList.replace("no-js","js")})):console.error("Your browser does not support String.replaceAll()."):console.error("Your browser does not support NodeList.forEach()."):console.error("Your browser does not support window.FormData()."):console.error("Your browser does not support window.fetch()."):console.error("wpcf7.api is not defined."):console.error("wpcf7 is not defined.")})}();
/*! lazysizes - v5.3.1 */
!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:1,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,i=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,o=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],a={},G=Array.prototype.forEach,J=function(e,t){if(!a[t]){a[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return a[t].test(e[$]("class")||"")&&a[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var a;if(a=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(a," "))}},V=function(t,a,e){var i=e?P:"removeEventListener";if(e){V(t,a)}r.forEach(function(e){t[i](e,a)})},X=function(e,t,a,i,r){var n=D.createEvent("Event");if(!a){a={}}a.instance=k;n.initEvent(t,!i,!r);n.detail=a;e.dispatchEvent(n);return n},Y=function(e,t){var a;if(!i&&(a=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}a({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,a){a=a||e.offsetWidth;while(a<H.minSize&&t&&!e._lazysizesWidth){a=t.offsetWidth;t=t.parentNode}return a},ee=function(){var a,i;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;a=true;i=false;while(e.length){e.shift()()}a=false};var e=function(e,t){if(a&&!t){e.apply(this,arguments)}else{n.push(e);if(!i){i=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(a,e){return e?function(){ee(a)}:function(){var e=this;var t=arguments;ee(function(){a.apply(e,t)})}},ae=function(e){var a;var i=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){a=false;i=f.now();e()};var s=o&&n>49?function(){o(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(a){return}a=true;t=r-(f.now()-i);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ie=function(e){var t,a;var i=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-a;if(e<i){I(n,i-e)}else{(o||r)(r)}};return function(){a=f.now();if(!t){t=I(n,i)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var M=0;var N=-1;var L=function(e){M--;if(!e||M<0||!e.target){M=0}};var x=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var W=function(e,t){var a;var i=e;var r=x(e);g-=t;b+=t;p-=t;C+=t;while(r&&(i=i.offsetParent)&&i!=D.body&&i!=O){r=(Z(i,"opacity")||1)>0;if(r&&Z(i,"overflow")!="visible"){a=i.getBoundingClientRect();r=C>a.left&&p<a.right&&b>a.top-1&&g<a.bottom+1}}return r};var t=function(){var e,t,a,i,r,n,s,o,l,u,f,c;var d=k.elements;if((h=H.loadMode)&&M<8&&(e=d.length)){t=0;N++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(o=d[t][$]("data-expand"))||!(n=o*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&M<1&&N>2&&h>2&&!D.hidden){w=f;N=0}else if(h>1&&N>1&&M<6){w=u}else{w=_}}if(l!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;l=n}a=d[t].getBoundingClientRect();if((b=a.bottom)>=s&&(g=a.top)<=z&&(C=a.right)>=s*c&&(p=a.left)<=y&&(b||C||p||g)&&(H.loadHidden||x(d[t]))&&(m&&M<3&&!o&&(h<3||N<4)||W(d[t],n))){R(d[t]);r=true;if(M>9){break}}else if(!r&&m&&!i&&M<4&&N<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!o&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){i=v[0]||d[t]}}if(i&&!r){R(i)}}};var a=ae(t);var S=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}L(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,B);X(t,"lazyloaded")};var i=te(S);var B=function(e){i({target:e.target})};var T=function(e,t){var a=e.getAttribute("data-load-mode")||H.iframeLoadMode;if(a==0){e.contentWindow.location.replace(t)}else if(a==1){e.src=t}};var F=function(e){var t;var a=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(a){e.setAttribute("srcset",a)}};var s=te(function(t,e,a,i,r){var n,s,o,l,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(i){if(a){K(t,H.autosizesClass)}else{t.setAttribute("sizes",i)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){o=t.parentNode;l=o&&j.test(o.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||l);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(L,2500);V(t,B,true)}if(l){G.call(o.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!l){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||l)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,H.fastLoadedClass)}S(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){M--}},true)});var R=function(e){if(e._lazyRace){return}var t;var a=n.test(e.nodeName);var i=a&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=i=="auto";if((r||!m)&&a&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;M++;s(e,t,r,i,a)};var r=ie(function(){H.loadMode=3;a()});var o=function(){if(H.loadMode==3){H.loadMode=2}r()};var l=function(){if(m){return}if(f.now()-e<999){I(l,999);return}m=true;H.loadMode=3;a();q("scroll",o,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",a,true);q("resize",a,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(a).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",a,true);O[P]("DOMAttrModified",a,true);setInterval(a,999)}q("hashchange",a,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,a,true)});if(/d$|^c/.test(D.readyState)){l()}else{q("load",l);D[P]("DOMContentLoaded",a);I(l,2e4)}if(k.elements.length){t();ee._lsFlush()}else{a()}},checkElems:a,unveil:R,_aLSL:o}}(),re=function(){var a;var n=te(function(e,t,a,i){var r,n,s;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",i)}}if(!a.detail.dataAttr){Y(e,a.detail)}});var i=function(e,t,a){var i;var r=e.parentNode;if(r){a=s(e,r,a);i=X(e,"lazybeforesizes",{width:a,dataAttr:!!t});if(!i.defaultPrevented){a=i.detail.width;if(a&&a!==e._lazysizesWidth){n(e,r,i,a)}}}};var e=function(){var e;var t=a.length;if(t){e=0;for(;e<t;e++){i(a[e])}}};var t=ie(e);return{_:function(){a=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:i}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});;
/*! This file is auto-generated */
window.addComment=function(v){var I,C,h,E=v.document,b={commentReplyClass:"comment-reply-link",commentReplyTitleId:"reply-title",cancelReplyId:"cancel-comment-reply-link",commentFormId:"commentform",temporaryFormId:"wp-temp-form-div",parentIdFieldId:"comment_parent",postIdFieldId:"comment_post_ID"},e=v.MutationObserver||v.WebKitMutationObserver||v.MozMutationObserver,r="querySelector"in E&&"addEventListener"in v,n=!!E.documentElement.dataset;function t(){d(),e&&new e(o).observe(E.body,{childList:!0,subtree:!0})}function d(e){if(r&&(I=g(b.cancelReplyId),C=g(b.commentFormId),I)){I.addEventListener("touchstart",l),I.addEventListener("click",l);function t(e){if((e.metaKey||e.ctrlKey)&&13===e.keyCode)return C.removeEventListener("keydown",t),e.preventDefault(),C.submit.click(),!1}C&&C.addEventListener("keydown",t);for(var n,d=function(e){var t=b.commentReplyClass;e&&e.childNodes||(e=E);e=E.getElementsByClassName?e.getElementsByClassName(t):e.querySelectorAll("."+t);return e}(e),o=0,i=d.length;o<i;o++)(n=d[o]).addEventListener("touchstart",a),n.addEventListener("click",a)}}function l(e){var t,n,d=g(b.temporaryFormId);d&&h&&(g(b.parentIdFieldId).value="0",t=d.textContent,d.parentNode.replaceChild(h,d),this.style.display="none",n=(d=(d=g(b.commentReplyTitleId))&&d.firstChild)&&d.nextSibling,d&&d.nodeType===Node.TEXT_NODE&&t&&(n&&"A"===n.nodeName&&n.id!==b.cancelReplyId&&(n.style.display=""),d.textContent=t),e.preventDefault())}function a(e){var t=g(b.commentReplyTitleId),t=t&&t.firstChild.textContent,n=this,d=m(n,"belowelement"),o=m(n,"commentid"),i=m(n,"respondelement"),r=m(n,"postid"),n=m(n,"replyto")||t;d&&o&&i&&r&&!1===v.addComment.moveForm(d,o,i,r,n)&&e.preventDefault()}function o(e){for(var t=e.length;t--;)if(e[t].addedNodes.length)return void d()}function m(e,t){return n?e.dataset[t]:e.getAttribute("data-"+t)}function g(e){return E.getElementById(e)}return r&&"loading"!==E.readyState?t():r&&v.addEventListener("DOMContentLoaded",t,!1),{init:d,moveForm:function(e,t,n,d,o){var i,r,l,a,m,c,s,e=g(e),n=(h=g(n),g(b.parentIdFieldId)),y=g(b.postIdFieldId),p=g(b.commentReplyTitleId),u=(p=p&&p.firstChild)&&p.nextSibling;if(e&&h&&n){void 0===o&&(o=p&&p.textContent),a=h,m=b.temporaryFormId,c=g(m),s=(s=g(b.commentReplyTitleId))?s.firstChild.textContent:"",c||((c=E.createElement("div")).id=m,c.style.display="none",c.textContent=s,a.parentNode.insertBefore(c,a)),d&&y&&(y.value=d),n.value=t,I.style.display="",e.parentNode.insertBefore(h,e.nextSibling),p&&p.nodeType===Node.TEXT_NODE&&(u&&"A"===u.nodeName&&u.id!==b.cancelReplyId&&(u.style.display="none"),p.textContent=o),I.onclick=function(){return!1};try{for(var f=0;f<C.elements.length;f++)if(i=C.elements[f],r=!1,"getComputedStyle"in v?l=v.getComputedStyle(i):E.documentElement.currentStyle&&(l=i.currentStyle),(i.offsetWidth<=0&&i.offsetHeight<=0||"hidden"===l.visibility)&&(r=!0),"hidden"!==i.type&&!i.disabled&&!r){i.focus();break}}catch(e){}return!1}}}}(window);;
/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function f(){e.trigger("closed.bs.alert").remove()}var c=a(this),d=c.attr("data-target");d||(d=c.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));var e=a(d);b&&b.preventDefault(),e.length||(e=c.hasClass("alert")?c:c.parent()),e.trigger(b=a.Event("close.bs.alert"));if(b.isDefaultPrevented())return;e.removeClass("in"),a.support.transition&&e.hasClass("fade")?e.one(a.support.transition.end,f).emulateTransitionEnd(150):f()};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){b=="loadingText"?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");c.prop("type")=="radio"&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f=typeof c=="object"&&c;e||d.data("bs.button",e=new b(this,f)),c=="toggle"?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.pause=="hover"&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();if(b>this.$items.length-1||b<0)return;return this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){if(this.sliding)return;return this.slide("next")},b.prototype.prev=function(){if(this.sliding)return;return this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g=b=="next"?"left":"right",h=b=="next"?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});this.$element.trigger(j);if(j.isDefaultPrevented())return;return this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(d.css("transition-duration").slice(0,-1)*1e3)):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),typeof c=="object"&&c),g=typeof c=="string"?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),typeof c=="number"?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c=a(this),d,e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),c.data()),g=c.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=c.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){function e(d){a(b).remove(),a(c).each(function(){var b=f(a(this)),c={relatedTarget:this};if(!b.hasClass("open"))return;b.trigger(d=a.Event("hide.bs.dropdown",c));if(d.isDefaultPrevented())return;b.removeClass("open").trigger("hidden.bs.dropdown",c)})}function f(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}"use strict";var b=".dropdown-backdrop",c="[data-toggle=dropdown]",d=function(b){a(b).on("click.bs.dropdown",this.toggle)};d.prototype.toggle=function(b){var c=a(this);if(c.is(".disabled, :disabled"))return;var d=f(c),g=d.hasClass("open");e();if(!g){"ontouchstart"in document.documentElement&&!d.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",e);var h={relatedTarget:this};d.trigger(b=a.Event("show.bs.dropdown",h));if(b.isDefaultPrevented())return;d.toggleClass("open").trigger("shown.bs.dropdown",h),c.focus()}return!1},d.prototype.keydown=function(b){if(!/(38|40|27)/.test(b.keyCode))return;var d=a(this);b.preventDefault(),b.stopPropagation();if(d.is(".disabled, :disabled"))return;var e=f(d),g=e.hasClass("open");if(!g||g&&b.keyCode==27)return b.which==27&&e.find(c).focus(),d.click();var h=" li:not(.divider):visible a",i=e.find("[role=menu]"+h+", [role=listbox]"+h);if(!i.length)return;var j=i.index(i.filter(":focus"));b.keyCode==38&&j>0&&j--,b.keyCode==40&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),e=c.data("bs.dropdown");e||c.data("bs.dropdown",e=new d(this)),typeof b=="string"&&e[b].call(c)})},a.fn.dropdown.Constructor=d,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",c,d.prototype.toggle).on("keydown.bs.dropdown.data-api",c+", [role=menu], [role=listbox]",d.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d);if(this.isShown||d.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)})},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b);if(!this.isShown||b.isDefaultPrevented())return;this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]!==a.target&&!this.$element.has(a.target).length&&this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){a.which==27&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){if(a.target!==a.currentTarget)return;this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),typeof c=="object"&&c);f||e.data("bs.modal",f=new b(this,g)),typeof c=="string"?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);var e=this.options.trigger.split(" ");for(var f=e.length;f--;){var g=e[f];if(g=="click")this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if(g!="manual"){var h=g=="hover"?"mouseenter":"focusin",i=g=="hover"?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(c.timeout),c.hoverState="in";if(!c.options.delay||!c.options.delay.show)return c.show();c.timeout=setTimeout(function(){c.hoverState=="in"&&c.show()},c.options.delay.show)},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(c.timeout),c.hoverState="out";if(!c.options.delay||!c.options.delay.hide)return c.hide();c.timeout=setTimeout(function(){c.hoverState=="out"&&c.hide()},c.options.delay.hide)},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e=typeof this.options.placement=="function"?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n=this.options.container=="body"?window.innerWidth:k.outerWidth(),o=this.options.container=="body"?window.innerHeight:k.outerHeight(),p=this.options.container=="body"?0:k.offset().left;e=e=="bottom"&&h.top+h.height+j-m>o?"top":e=="top"&&h.top-m-j<0?"bottom":e=="right"&&h.right+i>n?"left":e=="left"&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;c=="top"&&k!=g&&(d=!0,b.top=b.top+g-k);if(/bottom|top/.test(c)){var l=0;b.left<0&&(l=b.left*-2,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function e(){b.hoverState!="in"&&c.detach(),b.$element.trigger("hidden.bs."+b.type)}var b=this,c=this.tip(),d=a.Event("hide.bs."+this.type);this.$element.trigger(d);if(d.isDefaultPrevented())return;return c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?c.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),this.hoverState=null,this},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||typeof a.attr("data-original-title")!="string")&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},typeof b.getBoundingClientRect=="function"?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return a=="bottom"?{top:b.top+b.height,left:b.left+b.width/2-c/2}:a=="top"?{top:b.top-d,left:b.left+b.width/2-c/2}:a=="left"?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title),a},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f=typeof c=="object"&&c;if(!e&&c=="destroy")return;e||d.data("bs.tooltip",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?typeof c=="string"?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||(typeof b.content=="function"?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f=typeof c=="object"&&c;if(!e&&c=="destroy")return;e||d.data("bs.popover",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));if(b.parent("li").hasClass("active"))return;var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});b.trigger(f);if(f.isDefaultPrevented())return;var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})},b.prototype.activate=function(b,c,d){function g(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),f?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var e=c.find("> .active"),f=d&&a.support.transition&&e.hasClass("fade");f?e.one(a.support.transition.end,g).emulateTransitionEnd(150):g(),e.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),typeof c=="string"&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;this.affixed=="top"&&(e.top+=d),typeof f!="object"&&(h=g=f),typeof g=="function"&&(g=f.top(this.$element)),typeof h=="function"&&(h=f.bottom(this.$element));var i=this.unpin!=null&&d+this.unpin<=e.top?!1:h!=null&&e.top+this.$element.height()>=c-h?"bottom":g!=null&&d<=g?"top":!1;if(this.affixed===i)return;this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k);if(k.isDefaultPrevented())return;this.affixed=i,this.unpin=i=="bottom"?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),i=="bottom"&&this.$element.offset({top:c-h-this.$element.height()})};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f=typeof c=="object"&&c;e||d.data("bs.affix",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in"))return;var b=a.Event("show.bs.collapse");this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])},b.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in"))return;var b=a.Event("hide.bs.collapse");this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};if(!a.support.transition)return d.call(this);this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350)},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),typeof c=="object"&&c);!e&&f.toggle&&c=="show"&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c=a(this),d,e=c.attr("data-target")||b.preventDefault()||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":c.data(),i=c.attr("data-parent"),j=i&&a(i);if(!g||!g.transitioning)j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(c).addClass("collapsed"),c[f.hasClass("in")?"addClass":"removeClass"]("collapsed");f.collapse(h)})}(jQuery),+function(a){function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}"use strict",b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this,d=this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a=this.$scrollElement.scrollTop()+this.options.offset,b=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,c=b-this.$scrollElement.height(),d=this.offsets,e=this.targets,f=this.activeTarget,g;if(a>=c)return f!=(g=e.last()[0])&&this.activate(g);if(f&&a<=d[0])return f!=(g=e[0])&&this.activate(g);for(g=d.length;g--;)f!=e[g]&&a>=d[g]&&(!d[g+1]||a<=d[g+1])&&this.activate(e[g])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f=typeof c=="object"&&c;e||d.data("bs.scrollspy",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(a.style[c]!==undefined)return{end:b[c]};return!1}"use strict",a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery);
!function(a){"function"==typeof define&&define.amd?define(["jquery"],function(b){return a(b)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(b){function e(a){var c=7.5625,b=2.75;return a<1/b?c*a*a:a<2/b?c*(a-=1.5/b)*a+.75:a<2.5/b?c*(a-=2.25/b)*a+.9375:c*(a-=2.625/b)*a+.984375}void 0!==b.easing&&(b.easing.jswing=b.easing.swing);var a=Math.pow,f=Math.sqrt,c=Math.sin,i=Math.cos,d=Math.PI,g=1.70158,h=1.525*g,j=2*d/3,k=2*d/4.5;return b.extend(b.easing,{def:"easeOutQuad",swing:function(a){return b.easing[b.easing.def](a)},easeInQuad:function(a){return a*a},easeOutQuad:function(a){return 1-(1-a)*(1-a)},easeInOutQuad:function(b){return b<.5?2*b*b:1-a(-2*b+2,2)/2},easeInCubic:function(a){return a*a*a},easeOutCubic:function(b){return 1-a(1-b,3)},easeInOutCubic:function(b){return b<.5?4*b*b*b:1-a(-2*b+2,3)/2},easeInQuart:function(a){return a*a*a*a},easeOutQuart:function(b){return 1-a(1-b,4)},easeInOutQuart:function(b){return b<.5?8*b*b*b*b:1-a(-2*b+2,4)/2},easeInQuint:function(a){return a*a*a*a*a},easeOutQuint:function(b){return 1-a(1-b,5)},easeInOutQuint:function(b){return b<.5?16*b*b*b*b*b:1-a(-2*b+2,5)/2},easeInSine:function(a){return 1-i(a*d/2)},easeOutSine:function(a){return c(a*d/2)},easeInOutSine:function(a){return-(i(d*a)-1)/2},easeInExpo:function(b){return 0===b?0:a(2,10*b-10)},easeOutExpo:function(b){return 1===b?1:1-a(2,-10*b)},easeInOutExpo:function(b){return 0===b?0:1===b?1:b<.5?a(2,20*b-10)/2:(2-a(2,-20*b+10))/2},easeInCirc:function(b){return 1-f(1-a(b,2))},easeOutCirc:function(b){return f(1-a(b-1,2))},easeInOutCirc:function(b){return b<.5?(1-f(1-a(2*b,2)))/2:(f(1-a(-2*b+2,2))+1)/2},easeInElastic:function(b){return 0===b?0:1===b?1:-a(2,10*b-10)*c((10*b-10.75)*j)},easeOutElastic:function(b){return 0===b?0:1===b?1:a(2,-10*b)*c((10*b-.75)*j)+1},easeInOutElastic:function(b){return 0===b?0:1===b?1:b<.5?-a(2,20*b-10)*c((20*b-11.125)*k)/2:a(2,-20*b+10)*c((20*b-11.125)*k)/2+1},easeInBack:function(a){return 2.70158*a*a*a-g*a*a},easeOutBack:function(b){return 1+2.70158*a(b-1,3)+g*a(b-1,2)},easeInOutBack:function(b){return b<.5?a(2*b,2)*(7.189819*b-h)/2:(a(2*b-2,2)*((h+1)*(2*b-2)+h)+2)/2},easeInBounce:function(a){return 1-e(1-a)},easeOutBounce:e,easeInOutBounce:function(a){return a<.5?(1-e(1-2*a))/2:(1+e(2*a-1))/2}}),b}),function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(){return b.apply(a,arguments)}):"object"==typeof module&&module.exports?module.exports=b.call(a,require("jquery")):b.call(a,a.jQuery)}("object"==typeof global?global:this,function(a){function w(b,h,f,c){var d,e,j,i;if("d"!=f&&o(b))return d=q.exec(h),e="auto"===b.css(f)?0:b.css(f),e="string"==typeof e?g(e):e,"string"==typeof h&&g(h),c=!0===c?0:e,j=b.is(":hidden"),i=b.translation(),"left"==f&&(c=parseInt(e,10)+i.x),"right"==f&&(c=parseInt(e,10)+i.x),"top"==f&&(c=parseInt(e,10)+i.y),"bottom"==f&&(c=parseInt(e,10)+i.y),d||"show"!=h?d||"hide"!=h||(c=0):(c=1,j)&&(elem=b[0],elem.style&&(display=elem.style.display,a._data(elem,"olddisplay")||"none"!==display||(display=elem.style.display=""),""===display&&"none"===a.css(elem,"display")&&a._data(elem,"olddisplay",u(elem.tagName)),""===display||"none"===display)&&(elem.style.display=a._data(elem,"olddisplay")||""),b.css("opacity",0)),d?(b=parseFloat(d[2]),d[1]&&(b=("-="===d[1]?-1:1)*b+parseInt(c,10)),d[3]&&"px"!=d[3]&&(b+=d[3]),b):c}function v(j,e,q,p,m,r,l,o){var f=j.data(c),f=f&&!d(f)?f:a.extend(!0,{},s),b=m,i,n,k;return-1<a.inArray(e,h)&&(i=f.meta,n=g(j.css(e))||0,k=e+"_o",b=m-n,i[e]=b,i[k]="auto"==j.css(e)?0+b:n+b||0,f.meta=i,l&&0===b&&(b=0-i[k],i[e]=b,i[k]=0)),j.data(c,t(j,f,e,q,p,b,r,l,o))}function t(o,a,m,x,u,t,k,l,q){var p=!1,n,c,s,e,f,h,g,v,w,d,r;k=!0===k&&!0===l,a=a||{},a.original||(a.original={},p=!0),a.properties=a.properties||{},a.secondary=a.secondary||{},l=a.meta;for(n=a.original,c=a.properties,s=a.secondary,e=b.length-1;0<=e;e--)f=b[e]+"transition-property",h=b[e]+"transition-duration",g=b[e]+"transition-timing-function",m=k?b[e]+"transform":m,p&&(n[f]=o.css(f)||"",n[h]=o.css(h)||"",n[g]=o.css(g)||""),v=s,w=m,k?(d=l.left,r=l.top,d=!0===q||!0===i&&!1!==q&&j?"translate3d("+d+"px, "+r+"px, 0)":"translate("+d+"px,"+r+"px)"):d=t,v[w]=d,c[f]=(c[f]?c[f]+",":"")+m,c[h]=(c[h]?c[h]+",":"")+x+"ms",c[g]=(c[g]?c[g]+",":"")+u;return a}function r(b){for(var a in b)if(!("width"!=a&&"height"!=a||"show"!=b[a]&&"hide"!=b[a]&&"toggle"!=b[a]))return!0;return!1}function d(a){for(var b in a)return!1;return!0}function u(a){a=a.toUpperCase();var b={LI:"list-item",TR:"table-row",TD:"table-cell",TH:"table-cell",CAPTION:"table-caption",COL:"table-column",COLGROUP:"table-column-group",TFOOT:"table-footer-group",THEAD:"table-header-group",TBODY:"table-row-group"};return"string"==typeof b[a]?b[a]:"block"}function g(a){return parseFloat(a.replace(a.match(/\D+$/),""))}function o(b){var a=!0;return b.each(function(c,b){return a=a&&b.ownerDocument}),a}function y(b,e,c){if(!o(c))return!1;var d=-1<a.inArray(b,x);return"width"!=b&&"height"!=b&&"opacity"!=b||parseFloat(e)!==parseFloat(c.css(b))||(d=!1),d}var k=a.fn.animate,l=a.fn.stop,x="top right bottom left opacity height width".split(" "),h=["top","right","bottom","left"],b=["-webkit-","-moz-","-o-",""],p=["avoidTransforms","useTranslate3d","leaveTransforms"],q=/^([+-]=)?([\d+-.]+)(.*)$/,z=/([A-Z])/g,s={secondary:{},meta:{top:0,right:0,bottom:0,left:0}},c="jQe",n=null,f=!1,e=(document.body||document.documentElement).style,m=void 0!==e.WebkitTransition||void 0!==e.MozTransition||void 0!==e.OTransition||void 0!==e.transition,j="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,i=j;a.expr&&a.expr.filters&&(n=a.expr.filters.animated,a.expr.filters.animated=function(b){return!!(a(b).data("events")&&a(b).data("events")["webkitTransitionEnd oTransitionEnd transitionend"])||n.call(this,b)}),a.extend({toggle3DByDefault:function(){return i=!i},toggleDisabledByDefault:function(){return f=!f},setDisabledByDefault:function(a){return f=a}}),a.fn.translation=function(){var a,e,c,d;if(!this[0])return null;if(a=window.getComputedStyle(this[0],null),e={x:0,y:0},a)for(c=b.length-1;0<=c;c--)if(d=a.getPropertyValue(b[c]+"transform"),d&&/matrix/i.test(d)){a=d.replace(/^matrix\(/i,"").split(/, |\)$/g),e={x:parseInt(a[4],10),y:parseInt(a[5],10)};break}return e},a.fn.animate=function(e,q,n,o){e=e||{};var l=!("undefined"!=typeof e.bottom||"undefined"!=typeof e.right),g=a.speed(q,n,o),i=0,j=function(){i--,0===i&&"function"==typeof g.complete&&g.complete.apply(this,arguments)};return!0===("undefined"!=typeof e.avoidCSSTransitions?e.avoidCSSTransitions:f)||!m||d(e)||r(e)||0>=g.duration||g.step?k.apply(this,arguments):this[!0===g.queue?"queue":"each"](function(){var m=a(this),n=a.extend({},g),t=function(d){var i=m.data(c)||{original:{}},g={},f,k;if(2==d.eventPhase){if(!0!==e.leaveTransforms){for(d=b.length-1;0<=d;d--)g[b[d]+"transform"]="";if(l&&"undefined"!=typeof i.meta){d=0;for(f;f=h[d];++d)k=i.meta[f+"_o"],"undefined"!=typeof k&&(g[f]=k+"px",a(this).css(f,g[f]))}}m.unbind("webkitTransitionEnd oTransitionEnd transitionend").css(i.original).css(g).data(c,null),"hide"===e.opacity&&(elem=m[0],elem.style&&(display=a.css(elem,"display"),"none"===display||a._data(elem,"olddisplay")||a._data(elem,"olddisplay",display),elem.style.display="none"),m.css("opacity","")),j.call(this)}},o={bounce:"cubic-bezier(0.0, 0.35, .5, 1.3)",linear:"linear",swing:"ease-in-out",easeInQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",easeInCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",easeInQuart:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",easeInSine:"cubic-bezier(0.470, 0.000, 0.745, 0.715)",easeInExpo:"cubic-bezier(0.950, 0.050, 0.795, 0.035)",easeInCirc:"cubic-bezier(0.600, 0.040, 0.980, 0.335)",easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",easeOutQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",easeOutQuart:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230, 1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeOutExpo:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.320, 1.275)",easeInOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860, 0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)",easeInOutExpo:"cubic-bezier(1.000, 0.000, 0.000, 1.000)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.150, 0.860)",easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)"},q={},o=o[n.easing||"swing"]?o[n.easing||"swing"]:n.easing||"swing",f,r,s,u;for(f in e)-1===a.inArray(f,p)&&(r=-1<a.inArray(f,h),s=w(m,e[f],f,r&&!0!==e.avoidTransforms),y(f,s,m)?v(m,f,n.duration,o,s,r&&!0!==e.avoidTransforms,l,e.useTranslate3d):q[f]=e[f]);return m.unbind("webkitTransitionEnd oTransitionEnd transitionend"),f=m.data(c),!f||d(f)||d(f.secondary)?n.queue=!1:(i++,m.css(f.properties),u=f.secondary,setTimeout(function(){m.bind("webkitTransitionEnd oTransitionEnd transitionend",t).css(u)})),d(q)||(i++,k.apply(m,[q,{duration:n.duration,easing:a.easing[n.easing]?n.easing:a.easing.swing?"swing":"linear",complete:j,queue:n.queue}])),!0})},a.fn.animate.defaults={},a.fn.stop=function(e,f,g){return m?(e&&this.queue([]),this.each(function(){var k=a(this),h=k.data(c),i,j,n,m;if(h&&!d(h)){if(j={},f){if(j=h.secondary,!g&&void 0!==typeof h.meta.left_o||void 0!==typeof h.meta.top_o)for(j.left=void 0!==typeof h.meta.left_o?h.meta.left_o:"auto",j.top=void 0!==typeof h.meta.top_o?h.meta.top_o:"auto",i=b.length-1;0<=i;i--)j[b[i]+"transform"]=""}else if(!d(h.secondary))if(n=window.getComputedStyle(k[0],null),n)for(m in h.secondary)if(h.secondary.hasOwnProperty(m)&&(m=m.replace(z,"-$1").toLowerCase(),j[m]=n.getPropertyValue(m),!g&&/matrix/i.test(j[m])))for(i=j[m].replace(/^matrix\(/i,"").split(/, |\)$/g),j.left=parseFloat(i[4])+parseFloat(k.css("left"))+"px"||"auto",j.top=parseFloat(i[5])+parseFloat(k.css("top"))+"px"||"auto",i=b.length-1;0<=i;i--)j[b[i]+"transform"]="";k.unbind("webkitTransitionEnd oTransitionEnd transitionend"),k.css(h.original).css(j).data(c,null)}else l.apply(k,[e,f])}),this):l.apply(this,[e,f])}}),function(b,a){var d,c="superslides";d=function(k,l){var c,g,e,h,f,d,i,j;return this.options=a.extend({play:!1,animation_speed:600,animation_easing:"swing",animation:"slide",inherit_width_from:b,inherit_height_from:b,pagination:!0,hashchange:!1,scrollable:!0,elements:{preserve:".preserve",nav:".slides-navigation",container:".slides-container",pagination:".slides-pagination"}},l),c=this,g=a("<div>",{class:"slides-control"}),e=1,this.$el=a(k),this.$container=this.$el.find(this.options.elements.container),h=function(){return e=c._findMultiplier(),c.$el.on("click",c.options.elements.nav+" a",function(b){b.preventDefault(),c.stop(),a(this).hasClass("next")?c.animate("next",function(){c.start()}):c.animate("prev",function(){c.start()})}),a(document).on("keyup",function(a){37===a.keyCode&&c.animate("prev"),39===a.keyCode&&c.animate("next")}),a(b).on("resize",function(){setTimeout(function(){var a=c.$container.children();c.width=c._findWidth(),c.height=c._findHeight(),a.css({width:c.width,left:c.width}),c.css.containers(),c.css.images()},10)}),c.options.hashchange&&a(b).on("hashchange",function(){var a,b=c._parseHash();a=c._upcomingSlide(b),a>=0&&a!==c.current&&c.animate(a)}),c.pagination._events(),c.start(),c},f={containers:function(){c.init?(c.$el.css({height:c.height}),c.$control.css({width:c.width*e,left:-c.width}),c.$container.css({})):(a("body").css({margin:0}),c.$el.css({position:"relative",overflow:"hidden",width:"100%",height:c.height}),c.$control.css({position:"relative",transform:"translate3d(0)",height:"100%",width:c.width*e,left:-c.width}),c.$container.css({display:"none",margin:"0",padding:"0",listStyle:"none",position:"relative",height:"100%"})),1===c.size()&&c.$el.find(c.options.elements.nav).hide()},images:function(){var b=c.$container.find("img").not(c.options.elements.preserve);b.removeAttr("width").removeAttr("height").css({"-webkit-backface-visibility":"hidden","-ms-interpolation-mode":"bicubic",position:"absolute",left:"0",top:"0","z-index":"-1","max-width":"none"}),b.each(function(){var d=c.image._aspectRatio(this),b=this,e;a.data(this,"processed")?(c.image._scale(b,d),c.image._center(b,d)):(e=new Image,e.onload=function(){c.image._scale(b,d),c.image._center(b,d),a.data(b,"processed",!0)},e.src=this.src)})},children:function(){var b=c.$container.children();b.is("img")&&(b.each(function(){if(a(this).is("img")){a(this).wrap("<div>");var b=a(this).attr("id");a(this).removeAttr("id"),a(this).parent().attr("id",b)}}),b=c.$container.children()),c.init||b.css({display:"none",left:2*c.width}),b.css({position:"absolute",overflow:"hidden",height:"100%",width:c.width,top:0,zIndex:0})}},d={slide:function(a,d){var b=c.$container.children(),e=b.eq(a.upcoming_slide);e.css({left:a.upcoming_position,display:"block"}),c.$control.animate({left:a.offset},c.options.animation_speed,c.options.animation_easing,function(){c.size()>1&&(c.$control.css({left:-c.width}),b.eq(a.upcoming_slide).css({left:c.width,zIndex:2}),a.outgoing_slide>=0&&b.eq(a.outgoing_slide).css({left:c.width,display:"none",zIndex:0})),d()})},fade:function(a,d){var b=this,c=b.$container.children(),f=c.eq(a.outgoing_slide),e=c.eq(a.upcoming_slide);e.css({left:this.width,opacity:0,display:"block"}).animate({opacity:1},b.options.animation_speed,b.options.animation_easing),a.outgoing_slide>=0?f.animate({opacity:0},b.options.animation_speed,b.options.animation_easing,function(){b.size()>1&&(c.eq(a.upcoming_slide).css({zIndex:2}),a.outgoing_slide>=0&&c.eq(a.outgoing_slide).css({opacity:1,display:"none",zIndex:0})),d()}):(e.css({zIndex:2}),d())}},d=a.extend(d,a.fn.superslides.fx),i={_centerY:function(d){var b=a(d);b.css({top:(c.height-b.height())/2})},_centerX:function(d){var b=a(d);b.css({left:(c.width-b.width())/2})},_center:function(a){c.image._centerX(a),c.image._centerY(a)},_aspectRatio:function(a){if(!a.naturalHeight&&!a.naturalWidth){var b=new Image;b.src=a.src,a.naturalHeight=b.height,a.naturalWidth=b.width}return a.naturalHeight/a.naturalWidth},_scale:function(d,b){b=b||c.image._aspectRatio(d);var f=c.height/c.width,e=a(d);f>b?e.css({height:c.height,width:c.height/b}):e.css({height:c.width*b,width:c.width})}},j={_setCurrent:function(b){if(c.$pagination){var a=c.$pagination.children();a.removeClass("current"),a.eq(b).addClass("current")}},_addItem:function(d){var f=d+1,b=f,g=c.$container.children().eq(d),e=g.attr("id"),h;e&&(b=e),h=a("<a>",{href:"#"+b,text:b}),h.appendTo(c.$pagination)},_setup:function(){var d,b;if(c.options.pagination&&1!==c.size()){d=a("<nav>",{class:c.options.elements.pagination.replace(/^\./,"")}),c.$pagination=d.appendTo(c.$el);for(b=0;c.size()>b;b++)c.pagination._addItem(b)}},_events:function(){c.$el.on("click",c.options.elements.pagination+" a",function(b){b.preventDefault();var a,d=c._parseHash(this.hash);a=c._upcomingSlide(d,!0),a!==c.current&&c.animate(a,function(){c.start()})})}},this.css=f,this.image=i,this.pagination=j,this.fx=d,this.animation=this.fx[this.options.animation],this.$control=this.$container.wrap(g).parent(".slides-control"),c._findPositions(),c.width=c._findWidth(),c.height=c._findHeight(),this.css.children(),this.css.containers(),this.css.images(),this.pagination._setup(),h()},d.prototype={_findWidth:function(){return a(this.options.inherit_width_from).width()},_findHeight:function(){return a(this.options.inherit_height_from).height()},_findMultiplier:function(){return 1===this.size()?1:3},_upcomingSlide:function(a,c){if(c&&!isNaN(a)&&(a-=1),/next/.test(a))return this._nextInDom();if(/prev/.test(a))return this._prevInDom();if(/\d/.test(a))return+a;if(a&&/\w/.test(a)){var b=this._findSlideById(a);return b>=0?b:0}return 0},_findSlideById:function(a){return this.$container.find("#"+a).index()},_findPositions:function(b,a){a=a||this,void 0===b&&(b=-1),a.current=b,a.next=a._nextInDom(),a.prev=a._prevInDom()},_nextInDom:function(){var a=this.current+1;return a===this.size()&&(a=0),a},_prevInDom:function(){var a=this.current-1;return 0>a&&(a=this.size()-1),a},_parseHash:function(a){return a=a||b.location.hash,a=a.replace(/^#/,""),a&&!isNaN(+a)&&(a=+a),a},size:function(){return this.$container.children().length},destroy:function(){return this.$el.removeData()},update:function(){this.css.children(),this.css.containers(),this.css.images(),this.pagination._addItem(this.size()),this._findPositions(this.current),this.$el.trigger("updated.slides")},stop:function(){clearInterval(this.play_id),delete this.play_id,this.$el.trigger("stopped.slides")},start:function(){var c=this;c.options.hashchange?a(b).trigger("hashchange"):this.animate(),this.options.play&&(this.play_id&&this.stop(),this.play_id=setInterval(function(){c.animate()},this.options.play)),this.$el.trigger("started.slides")},animate:function(d,e){var c=this,a={},g,f;this.animating||(this.animating=!0,void 0===d&&(d="next"),a.upcoming_slide=this._upcomingSlide(d),a.upcoming_slide>=this.size())||(a.outgoing_slide=this.current,a.upcoming_position=2*this.width,a.offset=-a.upcoming_position,("prev"===d||a.outgoing_slide>d)&&(a.upcoming_position=0,a.offset=0),c.size()>1&&c.pagination._setCurrent(a.upcoming_slide),c.options.hashchange&&(g=a.upcoming_slide+1,f=c.$container.children(":eq("+a.upcoming_slide+")").attr("id"),b.location.hash=f||g),c.$el.trigger("animating.slides",[a]),c.animation(a,function(){c._findPositions(a.upcoming_slide,c),"function"==typeof e&&e(),c.animating=!1,c.$el.trigger("animated.slides"),c.init||(c.$el.trigger("init.slides"),c.init=!0,c.$container.fadeIn("fast"))}))}},a.fn[c]=function(e,f){var b=[];return this.each(function(){var h,g,i;return h=a(this),g=h.data(c),i="object"==typeof e&&e,g||(b=h.data(c,g=new d(this,i))),"string"==typeof e&&(b=g[e],"function"==typeof b)?b=b.call(g,f):void 0}),b},a.fn[c].fx={}}(this,jQuery);
﻿/** Abstract base class for collection plugins.
	Written by Keith Wood (kbwood{at}iinet.com.au) December 2013.
	Licensed under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license. */
(function(){var j=false;window.JQClass=function(){};JQClass.classes={};JQClass.extend=function extender(f){var g=this.prototype;j=true;var h=new this();j=false;for(var i in f){h[i]=typeof f[i]=='function'&&typeof g[i]=='function'?(function(d,e){return function(){var b=this._super;this._super=function(a){return g[d].apply(this,a)};var c=e.apply(this,arguments);this._super=b;return c}})(i,f[i]):f[i]}function JQClass(){if(!j&&this._init){this._init.apply(this,arguments)}}JQClass.prototype=h;JQClass.prototype.constructor=JQClass;JQClass.extend=extender;return JQClass}})();(function($){JQClass.classes.JQPlugin=JQClass.extend({name:'plugin',defaultOptions:{},regionalOptions:{},_getters:[],_getMarker:function(){return'is-'+this.name},_init:function(){$.extend(this.defaultOptions,(this.regionalOptions&&this.regionalOptions[''])||{});var c=camelCase(this.name);$[c]=this;$.fn[c]=function(a){var b=Array.prototype.slice.call(arguments,1);if($[c]._isNotChained(a,b)){return $[c][a].apply($[c],[this[0]].concat(b))}return this.each(function(){if(typeof a==='string'){if(a[0]==='_'||!$[c][a]){throw'Unknown method: '+a;}$[c][a].apply($[c],[this].concat(b))}else{$[c]._attach(this,a)}})}},setDefaults:function(a){$.extend(this.defaultOptions,a||{})},_isNotChained:function(a,b){if(a==='option'&&(b.length===0||(b.length===1&&typeof b[0]==='string'))){return true}return $.inArray(a,this._getters)>-1},_attach:function(a,b){a=$(a);if(a.hasClass(this._getMarker())){return}a.addClass(this._getMarker());b=$.extend({},this.defaultOptions,this._getMetadata(a),b||{});var c=$.extend({name:this.name,elem:a,options:b},this._instSettings(a,b));a.data(this.name,c);this._postAttach(a,c);this.option(a,b)},_instSettings:function(a,b){return{}},_postAttach:function(a,b){},_getMetadata:function(d){try{var f=d.data(this.name.toLowerCase())||'';f=f.replace(/'/g,'"');f=f.replace(/([a-zA-Z0-9]+):/g,function(a,b,i){var c=f.substring(0,i).match(/"/g);return(!c||c.length%2===0?'"'+b+'":':b+':')});f=$.parseJSON('{'+f+'}');for(var g in f){var h=f[g];if(typeof h==='string'&&h.match(/^new Date\((.*)\)$/)){f[g]=eval(h)}}return f}catch(e){return{}}},_getInst:function(a){return $(a).data(this.name)||{}},option:function(a,b,c){a=$(a);var d=a.data(this.name);if(!b||(typeof b==='string'&&c==null)){var e=(d||{}).options;return(e&&b?e[b]:e)}if(!a.hasClass(this._getMarker())){return}var e=b||{};if(typeof b==='string'){e={};e[b]=c}this._optionsChanged(a,d,e);$.extend(d.options,e)},_optionsChanged:function(a,b,c){},destroy:function(a){a=$(a);if(!a.hasClass(this._getMarker())){return}this._preDestroy(a,this._getInst(a));a.removeData(this.name).removeClass(this._getMarker())},_preDestroy:function(a,b){}});function camelCase(c){return c.replace(/-([a-z])/g,function(a,b){return b.toUpperCase()})}$.JQPlugin={createPlugin:function(a,b){if(typeof a==='object'){b=a;a='JQPlugin'}a=camelCase(a);var c=camelCase(b.name);JQClass.classes[c]=JQClass.classes[a].extend(b);new JQClass.classes[c]()}}})(jQuery);;
/* http://keith-wood.name/countdown.html
   Countdown for jQuery v2.0.0.
   Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
   Available under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license. 
   Please attribute the author if you use it. */
(function($){var w='countdown';var Y=0;var O=1;var W=2;var D=3;var H=4;var M=5;var S=6;$.JQPlugin.createPlugin({name:w,defaultOptions:{until:null,since:null,timezone:null,serverSync:null,format:'dHMS',layout:'',compact:false,padZeroes:false,significant:0,description:'',expiryUrl:'',expiryText:'',alwaysExpire:false,onExpiry:null,onTick:null,tickInterval:1},regionalOptions:{'':{labels:['Years','Months','Weeks','Days','Hours','Minutes','Seconds'],labels1:['Year','Month','Week','Day','Hour','Minute','Second'],compactLabels:['y','m','w','d'],whichLabels:null,digits:['0','1','2','3','4','5','6','7','8','9'],timeSeparator:':',isRTL:false}},_getters:['getTimes'],_rtlClass:w+'-rtl',_sectionClass:w+'-section',_amountClass:w+'-amount',_periodClass:w+'-period',_rowClass:w+'-row',_holdingClass:w+'-holding',_showClass:w+'-show',_descrClass:w+'-descr',_timerElems:[],_init:function(){var c=this;this._super();this._serverSyncs=[];var d=(typeof Date.now=='function'?Date.now:function(){return new Date().getTime()});var e=(window.performance&&typeof window.performance.now=='function');function timerCallBack(a){var b=(a<1e12?(e?(performance.now()+performance.timing.navigationStart):d()):a||d());if(b-g>=1000){c._updateElems();g=b}f(timerCallBack)}var f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null;var g=0;if(!f||$.noRequestAnimationFrame){$.noRequestAnimationFrame=null;setInterval(function(){c._updateElems()},980)}else{g=window.animationStartTime||window.webkitAnimationStartTime||window.mozAnimationStartTime||window.oAnimationStartTime||window.msAnimationStartTime||d();f(timerCallBack)}},UTCDate:function(a,b,c,e,f,g,h,i){if(typeof b=='object'&&b.constructor==Date){i=b.getMilliseconds();h=b.getSeconds();g=b.getMinutes();f=b.getHours();e=b.getDate();c=b.getMonth();b=b.getFullYear()}var d=new Date();d.setUTCFullYear(b);d.setUTCDate(1);d.setUTCMonth(c||0);d.setUTCDate(e||1);d.setUTCHours(f||0);d.setUTCMinutes((g||0)-(Math.abs(a)<30?a*60:a));d.setUTCSeconds(h||0);d.setUTCMilliseconds(i||0);return d},periodsToSeconds:function(a){return a[0]*31557600+a[1]*2629800+a[2]*604800+a[3]*86400+a[4]*3600+a[5]*60+a[6]},_instSettings:function(a,b){return{_periods:[0,0,0,0,0,0,0]}},_addElem:function(a){if(!this._hasElem(a)){this._timerElems.push(a)}},_hasElem:function(a){return($.inArray(a,this._timerElems)>-1)},_removeElem:function(b){this._timerElems=$.map(this._timerElems,function(a){return(a==b?null:a)})},_updateElems:function(){for(var i=this._timerElems.length-1;i>=0;i--){this._updateCountdown(this._timerElems[i])}},_optionsChanged:function(a,b,c){if(c.layout){c.layout=c.layout.replace(/&lt;/g,'<').replace(/&gt;/g,'>')}this._resetExtraLabels(b.options,c);var d=(b.options.timezone!=c.timezone);$.extend(b.options,c);this._adjustSettings(a,b,c.until!=null||c.since!=null||d);var e=new Date();if((b._since&&b._since<e)||(b._until&&b._until>e)){this._addElem(a[0])}this._updateCountdown(a,b)},_updateCountdown:function(a,b){a=a.jquery?a:$(a);b=b||a.data(this.name);if(!b){return}a.html(this._generateHTML(b)).toggleClass(this._rtlClass,b.options.isRTL);if($.isFunction(b.options.onTick)){var c=b._hold!='lap'?b._periods:this._calculatePeriods(b,b._show,b.options.significant,new Date());if(b.options.tickInterval==1||this.periodsToSeconds(c)%b.options.tickInterval==0){b.options.onTick.apply(a[0],[c])}}var d=b._hold!='pause'&&(b._since?b._now.getTime()<b._since.getTime():b._now.getTime()>=b._until.getTime());if(d&&!b._expiring){b._expiring=true;if(this._hasElem(a[0])||b.options.alwaysExpire){this._removeElem(a[0]);if($.isFunction(b.options.onExpiry)){b.options.onExpiry.apply(a[0],[])}if(b.options.expiryText){var e=b.options.layout;b.options.layout=b.options.expiryText;this._updateCountdown(a[0],b);b.options.layout=e}if(b.options.expiryUrl){window.location=b.options.expiryUrl}}b._expiring=false}else if(b._hold=='pause'){this._removeElem(a[0])}},_resetExtraLabels:function(a,b){var c=false;for(var n in b){if(n!='whichLabels'&&n.match(/[Ll]abels/)){c=true;break}}if(c){for(var n in a){if(n.match(/[Ll]abels[02-9]|compactLabels1/)){a[n]=null}}}},_adjustSettings:function(a,b,c){var d;var e=0;var f=null;for(var i=0;i<this._serverSyncs.length;i++){if(this._serverSyncs[i][0]==b.options.serverSync){f=this._serverSyncs[i][1];break}}if(f!=null){e=(b.options.serverSync?f:0);d=new Date()}else{var g=($.isFunction(b.options.serverSync)?b.options.serverSync.apply(a[0],[]):null);d=new Date();e=(g?d.getTime()-g.getTime():0);this._serverSyncs.push([b.options.serverSync,e])}var h=b.options.timezone;h=(h==null?-d.getTimezoneOffset():h);if(c||(!c&&b._until==null&&b._since==null)){b._since=b.options.since;if(b._since!=null){b._since=this.UTCDate(h,this._determineTime(b._since,null));if(b._since&&e){b._since.setMilliseconds(b._since.getMilliseconds()+e)}}b._until=this.UTCDate(h,this._determineTime(b.options.until,d));if(e){b._until.setMilliseconds(b._until.getMilliseconds()+e)}}b._show=this._determineShow(b)},_preDestroy:function(a,b){this._removeElem(a[0]);a.empty()},pause:function(a){this._hold(a,'pause')},lap:function(a){this._hold(a,'lap')},resume:function(a){this._hold(a,null)},toggle:function(a){var b=$.data(a,this.name)||{};this[!b._hold?'pause':'resume'](a)},toggleLap:function(a){var b=$.data(a,this.name)||{};this[!b._hold?'lap':'resume'](a)},_hold:function(a,b){var c=$.data(a,this.name);if(c){if(c._hold=='pause'&&!b){c._periods=c._savePeriods;var d=(c._since?'-':'+');c[c._since?'_since':'_until']=this._determineTime(d+c._periods[0]+'y'+d+c._periods[1]+'o'+d+c._periods[2]+'w'+d+c._periods[3]+'d'+d+c._periods[4]+'h'+d+c._periods[5]+'m'+d+c._periods[6]+'s');this._addElem(a)}c._hold=b;c._savePeriods=(b=='pause'?c._periods:null);$.data(a,this.name,c);this._updateCountdown(a,c)}},getTimes:function(a){var b=$.data(a,this.name);return(!b?null:(b._hold=='pause'?b._savePeriods:(!b._hold?b._periods:this._calculatePeriods(b,b._show,b.options.significant,new Date()))))},_determineTime:function(k,l){var m=this;var n=function(a){var b=new Date();b.setTime(b.getTime()+a*1000);return b};var o=function(a){a=a.toLowerCase();var b=new Date();var c=b.getFullYear();var d=b.getMonth();var e=b.getDate();var f=b.getHours();var g=b.getMinutes();var h=b.getSeconds();var i=/([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;var j=i.exec(a);while(j){switch(j[2]||'s'){case's':h+=parseInt(j[1],10);break;case'm':g+=parseInt(j[1],10);break;case'h':f+=parseInt(j[1],10);break;case'd':e+=parseInt(j[1],10);break;case'w':e+=parseInt(j[1],10)*7;break;case'o':d+=parseInt(j[1],10);e=Math.min(e,m._getDaysInMonth(c,d));break;case'y':c+=parseInt(j[1],10);e=Math.min(e,m._getDaysInMonth(c,d));break}j=i.exec(a)}return new Date(c,d,e,f,g,h,0)};var p=(k==null?l:(typeof k=='string'?o(k):(typeof k=='number'?n(k):k)));if(p)p.setMilliseconds(0);return p},_getDaysInMonth:function(a,b){return 32-new Date(a,b,32).getDate()},_normalLabels:function(a){return a},_generateHTML:function(c){var d=this;c._periods=(c._hold?c._periods:this._calculatePeriods(c,c._show,c.options.significant,new Date()));var e=false;var f=0;var g=c.options.significant;var h=$.extend({},c._show);for(var i=Y;i<=S;i++){e|=(c._show[i]=='?'&&c._periods[i]>0);h[i]=(c._show[i]=='?'&&!e?null:c._show[i]);f+=(h[i]?1:0);g-=(c._periods[i]>0?1:0)}var j=[false,false,false,false,false,false,false];for(var i=S;i>=Y;i--){if(c._show[i]){if(c._periods[i]){j[i]=true}else{j[i]=g>0;g--}}}var k=(c.options.compact?c.options.compactLabels:c.options.labels);var l=c.options.whichLabels||this._normalLabels;var m=function(a){var b=c.options['compactLabels'+l(c._periods[a])];return(h[a]?d._translateDigits(c,c._periods[a])+(b?b[a]:k[a])+' ':'')};var n=(c.options.padZeroes?2:1);var o=function(a){var b=c.options['labels'+l(c._periods[a])];return((!c.options.significant&&h[a])||(c.options.significant&&j[a])?'<span class="'+d._sectionClass+'">'+'<span class="'+d._amountClass+'">'+d._minDigits(c,c._periods[a],n)+'</span>'+'<span class="'+d._periodClass+'">'+(b?b[a]:k[a])+'</span></span>':'')};return(c.options.layout?this._buildLayout(c,h,c.options.layout,c.options.compact,c.options.significant,j):((c.options.compact?'<span class="'+this._rowClass+' '+this._amountClass+(c._hold?' '+this._holdingClass:'')+'">'+m(Y)+m(O)+m(W)+m(D)+(h[H]?this._minDigits(c,c._periods[H],2):'')+(h[M]?(h[H]?c.options.timeSeparator:'')+this._minDigits(c,c._periods[M],2):'')+(h[S]?(h[H]||h[M]?c.options.timeSeparator:'')+this._minDigits(c,c._periods[S],2):''):'<span class="'+this._rowClass+' '+this._showClass+(c.options.significant||f)+(c._hold?' '+this._holdingClass:'')+'">'+o(Y)+o(O)+o(W)+o(D)+o(H)+o(M)+o(S))+'</span>'+(c.options.description?'<span class="'+this._rowClass+' '+this._descrClass+'">'+c.options.description+'</span>':'')))},_buildLayout:function(c,d,e,f,g,h){var j=c.options[f?'compactLabels':'labels'];var k=c.options.whichLabels||this._normalLabels;var l=function(a){return(c.options[(f?'compactLabels':'labels')+k(c._periods[a])]||j)[a]};var m=function(a,b){return c.options.digits[Math.floor(a/b)%10]};var o={desc:c.options.description,sep:c.options.timeSeparator,yl:l(Y),yn:this._minDigits(c,c._periods[Y],1),ynn:this._minDigits(c,c._periods[Y],2),ynnn:this._minDigits(c,c._periods[Y],3),y1:m(c._periods[Y],1),y10:m(c._periods[Y],10),y100:m(c._periods[Y],100),y1000:m(c._periods[Y],1000),ol:l(O),on:this._minDigits(c,c._periods[O],1),onn:this._minDigits(c,c._periods[O],2),onnn:this._minDigits(c,c._periods[O],3),o1:m(c._periods[O],1),o10:m(c._periods[O],10),o100:m(c._periods[O],100),o1000:m(c._periods[O],1000),wl:l(W),wn:this._minDigits(c,c._periods[W],1),wnn:this._minDigits(c,c._periods[W],2),wnnn:this._minDigits(c,c._periods[W],3),w1:m(c._periods[W],1),w10:m(c._periods[W],10),w100:m(c._periods[W],100),w1000:m(c._periods[W],1000),dl:l(D),dn:this._minDigits(c,c._periods[D],1),dnn:this._minDigits(c,c._periods[D],2),dnnn:this._minDigits(c,c._periods[D],3),d1:m(c._periods[D],1),d10:m(c._periods[D],10),d100:m(c._periods[D],100),d1000:m(c._periods[D],1000),hl:l(H),hn:this._minDigits(c,c._periods[H],1),hnn:this._minDigits(c,c._periods[H],2),hnnn:this._minDigits(c,c._periods[H],3),h1:m(c._periods[H],1),h10:m(c._periods[H],10),h100:m(c._periods[H],100),h1000:m(c._periods[H],1000),ml:l(M),mn:this._minDigits(c,c._periods[M],1),mnn:this._minDigits(c,c._periods[M],2),mnnn:this._minDigits(c,c._periods[M],3),m1:m(c._periods[M],1),m10:m(c._periods[M],10),m100:m(c._periods[M],100),m1000:m(c._periods[M],1000),sl:l(S),sn:this._minDigits(c,c._periods[S],1),snn:this._minDigits(c,c._periods[S],2),snnn:this._minDigits(c,c._periods[S],3),s1:m(c._periods[S],1),s10:m(c._periods[S],10),s100:m(c._periods[S],100),s1000:m(c._periods[S],1000)};var p=e;for(var i=Y;i<=S;i++){var q='yowdhms'.charAt(i);var r=new RegExp('\\{'+q+'<\\}([\\s\\S]*)\\{'+q+'>\\}','g');p=p.replace(r,((!g&&d[i])||(g&&h[i])?'$1':''))}$.each(o,function(n,v){var a=new RegExp('\\{'+n+'\\}','g');p=p.replace(a,v)});return p},_minDigits:function(a,b,c){b=''+b;if(b.length>=c){return this._translateDigits(a,b)}b='0000000000'+b;return this._translateDigits(a,b.substr(b.length-c))},_translateDigits:function(b,c){return(''+c).replace(/[0-9]/g,function(a){return b.options.digits[a]})},_determineShow:function(a){var b=a.options.format;var c=[];c[Y]=(b.match('y')?'?':(b.match('Y')?'!':null));c[O]=(b.match('o')?'?':(b.match('O')?'!':null));c[W]=(b.match('w')?'?':(b.match('W')?'!':null));c[D]=(b.match('d')?'?':(b.match('D')?'!':null));c[H]=(b.match('h')?'?':(b.match('H')?'!':null));c[M]=(b.match('m')?'?':(b.match('M')?'!':null));c[S]=(b.match('s')?'?':(b.match('S')?'!':null));return c},_calculatePeriods:function(c,d,e,f){c._now=f;c._now.setMilliseconds(0);var g=new Date(c._now.getTime());if(c._since){if(f.getTime()<c._since.getTime()){c._now=f=g}else{f=c._since}}else{g.setTime(c._until.getTime());if(f.getTime()>c._until.getTime()){c._now=f=g}}var h=[0,0,0,0,0,0,0];if(d[Y]||d[O]){var i=this._getDaysInMonth(f.getFullYear(),f.getMonth());var j=this._getDaysInMonth(g.getFullYear(),g.getMonth());var k=(g.getDate()==f.getDate()||(g.getDate()>=Math.min(i,j)&&f.getDate()>=Math.min(i,j)));var l=function(a){return(a.getHours()*60+a.getMinutes())*60+a.getSeconds()};var m=Math.max(0,(g.getFullYear()-f.getFullYear())*12+g.getMonth()-f.getMonth()+((g.getDate()<f.getDate()&&!k)||(k&&l(g)<l(f))?-1:0));h[Y]=(d[Y]?Math.floor(m/12):0);h[O]=(d[O]?m-h[Y]*12:0);f=new Date(f.getTime());var n=(f.getDate()==i);var o=this._getDaysInMonth(f.getFullYear()+h[Y],f.getMonth()+h[O]);if(f.getDate()>o){f.setDate(o)}f.setFullYear(f.getFullYear()+h[Y]);f.setMonth(f.getMonth()+h[O]);if(n){f.setDate(o)}}var p=Math.floor((g.getTime()-f.getTime())/1000);var q=function(a,b){h[a]=(d[a]?Math.floor(p/b):0);p-=h[a]*b};q(W,604800);q(D,86400);q(H,3600);q(M,60);q(S,1);if(p>0&&!c._since){var r=[1,12,4.3482,7,24,60,60];var s=S;var t=1;for(var u=S;u>=Y;u--){if(d[u]){if(h[s]>=t){h[s]=0;p=1}if(p>0){h[u]++;p=0;s=u;t=1}}t*=r[u]}}if(e){for(var u=Y;u<=S;u++){if(e&&h[u]){e--}else if(!e){h[u]=0}}}return h}})})(jQuery);;
(function(a){a.fn.countTo=function(b){return b=b||{},a(this).each(function(){var c=a.extend({},a.fn.countTo.defaults,{from:a(this).data('from'),to:a(this).data('to'),speed:a(this).data('speed'),refreshInterval:a(this).data('refresh-interval'),decimals:a(this).data('decimals')},b),i=Math.ceil(c.speed/c.refreshInterval),k=(c.to-c.from)/i,g=this,f=a(this),h=0,d=c.from,e=f.data('countTo')||{};f.data('countTo',e),e.interval&&clearInterval(e.interval),e.interval=setInterval(l,c.refreshInterval),j(d);function l(){d+=k,h++,j(d),typeof c.onUpdate=='function'&&c.onUpdate.call(g,d),h>=i&&(f.removeData('countTo'),clearInterval(e.interval),d=c.to,typeof c.onComplete=='function'&&c.onComplete.call(g,d))}function j(a){var b=c.formatter.call(g,a,c);f.text(b)}})},a.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:b,onUpdate:null,onComplete:null};function b(a,b){return a.toFixed(b.decimals)}})(jQuery);

/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */(function(k,n,b,j){"use strict";var p=b("html"),d=b(k),e=b(n),a=b.fancybox=function(){a.open.apply(this,arguments)},o=navigator.userAgent.match(/msie/i),m=null,f=n.createTouch!==j,l=function(a){return a&&a.hasOwnProperty&&a instanceof b},h=function(a){return a&&b.type(a)==="string"},i=function(a){return h(a)&&a.indexOf('%')>0},q=function(a){return a&&!(a.style.overflow&&a.style.overflow==='hidden')&&(a.clientWidth&&a.scrollWidth>a.clientWidth||a.clientHeight&&a.scrollHeight>a.clientHeight)},c=function(c,d){var b=parseInt(c,10)||0;return d&&i(c)&&(b=a.getViewport()[d]/100*b),Math.ceil(b)},g=function(a,b){return c(a,b)+'px'};b.extend(a,{version:'2.1.5',defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!f,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:'auto',wrapCSS:'',arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:'html',headers:{'X-fancyBox':!0}},iframe:{scrolling:'auto',preload:!0},swf:{wmode:'transparent',allowfullscreen:'true',allowscriptaccess:'always'},keys:{next:{13:'left',34:'up',39:'left',40:'up'},prev:{8:'right',33:'down',37:'right',38:'down'},close:[27],play:[32],toggle:[70]},direction:{next:'left',prev:'right'},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(o?' allowtransparency="true"':'')+'></iframe>',error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:'fade',openSpeed:250,openEasing:'swing',openOpacity:!0,openMethod:'zoomIn',closeEffect:'fade',closeSpeed:250,closeEasing:'swing',closeOpacity:!0,closeMethod:'zoomOut',nextEffect:'elastic',nextSpeed:250,nextEasing:'swing',nextMethod:'changeIn',prevEffect:'elastic',prevSpeed:250,prevEasing:'swing',prevMethod:'changeOut',helpers:{overlay:!0,title:!0},onCancel:b.noop,beforeLoad:b.noop,afterLoad:b.noop,beforeShow:b.noop,afterShow:b.noop,beforeChange:b.noop,beforeClose:b.noop,afterClose:b.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(d,c){if(!d)return;if(b.isPlainObject(c)||(c={}),!1===a.close(!0))return;return b.isArray(d)||(d=l(d)?b(d).get():[d]),b.each(d,function(q,e){var i={},g,o,k,f,m,n,p;b.type(e)==="object"&&(e.nodeType&&(e=b(e)),l(e)?(i={href:e.data('fancybox-href')||e.attr('href'),title:e.data('fancybox-title')||e.attr('title'),isDom:!0,element:e},b.metadata&&b.extend(!0,i,e.metadata())):i=e),g=c.href||i.href||(h(e)?e:null),o=c.title!==j?c.title:i.title||'',k=c.content||i.content,f=k?'html':c.type||i.type,!f&&i.isDom&&(f=e.data('fancybox-type'),f||(m=e.prop('class').match(/fancybox\.(\w+)/),f=m?m[1]:null)),h(g)&&(f||(a.isImage(g)?f='image':a.isSWF(g)?f='swf':g.charAt(0)==='#'?f='inline':h(e)&&(f='html',k=e)),f==='ajax'&&(n=g.split(/\s+/,2),g=n.shift(),p=n.shift())),k||(f==='inline'?g?k=b(h(g)?g.replace(/.*(?=#[^\s]+$)/,''):g):i.isDom&&(k=e):f==='html'?k=g:!f&&!g&&i.isDom&&(f='inline',k=e)),b.extend(i,{href:g,type:f,content:k,title:o,selector:p}),d[q]=i}),a.opts=b.extend(!0,{},a.defaults,c),c.keys!==j&&(a.opts.keys=!!c.keys&&b.extend({},a.defaults.keys,c.keys)),a.group=d,a._start(a.opts.index)},cancel:function(){var b=a.coming;if(!b||!1===a.trigger('onCancel'))return;a.hideLoading(),a.ajaxLoad&&a.ajaxLoad.abort(),a.ajaxLoad=null,a.imgPreload&&(a.imgPreload.onload=a.imgPreload.onerror=null),b.wrap&&b.wrap.stop(!0,!0).trigger('onReset').remove(),a.coming=null,a.current||a._afterZoomOut(b)},close:function(c){if(a.cancel(),!1===a.trigger('beforeClose'))return;if(a.unbindEvents(),!a.isActive)return;!a.isOpen||c===!0?(b('.fancybox-wrap').stop(!0).trigger('onReset').remove(),a._afterZoomOut()):(a.isOpen=a.isOpened=!1,a.isClosing=!0,b('.fancybox-item, .fancybox-nav').remove(),a.wrap.stop(!0,!0).removeClass('fancybox-opened'),a.transitions[a.current.closeMethod]())},play:function(c){var b=function(){clearTimeout(a.player.timer)},d=function(){b(),a.current&&a.player.isActive&&(a.player.timer=setTimeout(a.next,a.current.playSpeed))},f=function(){b(),e.unbind('.player'),a.player.isActive=!1,a.trigger('onPlayEnd')},g=function(){a.current&&(a.current.loop||a.current.index<a.group.length-1)&&(a.player.isActive=!0,e.bind({'onCancel.player beforeClose.player':f,'onUpdate.player':d,'beforeLoad.player':b}),d(),a.trigger('onPlayStart'))};c===!0||!a.player.isActive&&c!==!1?g():f()},next:function(b){var c=a.current;c&&(h(b)||(b=c.direction.next),a.jumpto(c.index+1,b,'next'))},prev:function(b){var c=a.current;c&&(h(b)||(b=c.direction.prev),a.jumpto(c.index-1,b,'prev'))},jumpto:function(b,e,f){var d=a.current;if(!d)return;b=c(b),a.direction=e||d.direction[b>=d.index?'next':'prev'],a.router=f||'jumpto',d.loop&&(b<0&&(b=d.group.length+b%d.group.length),b=b%d.group.length),d.group[b]!==j&&(a.cancel(),a._start(b))},reposition:function(f,g){var d=a.current,e=d?d.wrap:null,c;e&&(c=a._getPosition(g),f&&f.type==='scroll'?(delete c.position,e.stop(!0,!0).animate(c,200)):(e.css(c),d.pos=b.extend({},d.dim,c)))},update:function(c){var b=c&&c.type,d=!b||b==='orientationchange';if(d&&(clearTimeout(m),m=null),!a.isOpen||m)return;m=setTimeout(function(){var e=a.current;if(!e||a.isClosing)return;a.wrap.removeClass('fancybox-tmp'),(d||b==='load'||b==='resize'&&e.autoResize)&&a._setDimension(),b==='scroll'&&e.canShrink||a.reposition(c),a.trigger('onUpdate'),m=null},d&&!f?0:300)},toggle:function(c){a.isOpen&&(a.current.fitToView=b.type(c)==="boolean"?c:!a.current.fitToView,f&&(a.wrap.removeAttr('style').addClass('fancybox-tmp'),a.trigger('onUpdate')),a.update())},hideLoading:function(){e.unbind('.loading'),b('#fancybox-loading').remove()},showLoading:function(){var d,c;a.hideLoading(),d=b('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo('body'),e.bind('keydown.loading',function(b){(b.which||b.keyCode)===27&&(b.preventDefault(),a.cancel())}),a.defaults.fixed||(c=a.getViewport(),d.css({position:'absolute',top:c.h*.5+c.y,left:c.w*.5+c.x}))},getViewport:function(){var c=a.current&&a.current.locked||!1,b={x:d.scrollLeft(),y:d.scrollTop()};return c?(b.w=c[0].clientWidth,b.h=c[0].clientHeight):(b.w=f&&k.innerWidth?k.innerWidth:d.width(),b.h=f&&k.innerHeight?k.innerHeight:d.height()),b},unbindEvents:function(){a.wrap&&l(a.wrap)&&a.wrap.unbind('.fb'),e.unbind('.fb'),d.unbind('.fb')},bindEvents:function(){var c=a.current,g;if(!c)return;d.bind('orientationchange.fb'+(f?'':' resize.fb')+(c.autoCenter&&!c.locked?' scroll.fb':''),a.update),g=c.keys,g&&e.bind('keydown.fb',function(d){var e=d.which||d.keyCode,f=d.target||d.srcElement;if(e===27&&a.coming)return!1;!d.ctrlKey&&!d.altKey&&!d.shiftKey&&!d.metaKey&&!(f&&(f.type||b(f).is('[contenteditable]')))&&b.each(g,function(g,f){if(c.group.length>1&&f[e]!==j)return a[g](f[e]),d.preventDefault(),!1;if(b.inArray(e,f)>-1)return a[g](),d.preventDefault(),!1})}),b.fn.mousewheel&&c.mouseWheel&&a.wrap.bind('mousewheel.fb',function(h,i,g,e){for(var j=h.target||null,d=b(j),f=!1;d.length;){if(f||d.is('.fancybox-skin')||d.is('.fancybox-wrap'))break;f=q(d[0]),d=b(d).parent()}i!==0&&!f&&a.group.length>1&&!c.canShrink&&(e>0||g>0?a.prev(e>0?'down':'left'):(e<0||g<0)&&a.next(e<0?'up':'right'),h.preventDefault())})},trigger:function(d,g){var f,c=g||a.coming||a.current;if(!c)return;if(b.isFunction(c[d])&&(f=c[d].apply(c,Array.prototype.slice.call(arguments,1))),f===!1)return!1;c.helpers&&b.each(c.helpers,function(e,f){f&&a.helpers[e]&&b.isFunction(a.helpers[e][d])&&a.helpers[e][d](b.extend(!0,{},a.helpers[e].defaults,f),c)}),e.trigger(d)},isImage:function(a){return h(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return h(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(j){var d={},k,l,e,i,h;if(j=c(j),k=a.group[j]||null,!k)return!1;if(d=b.extend(!0,{},a.opts,k),i=d.margin,h=d.padding,b.type(i)==='number'&&(d.margin=[i,i,i,i]),b.type(h)==='number'&&(d.padding=[h,h,h,h]),d.modal&&b.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),d.autoSize&&(d.autoWidth=d.autoHeight=!0),d.width==='auto'&&(d.autoWidth=!0),d.height==='auto'&&(d.autoHeight=!0),d.group=a.group,d.index=j,a.coming=d,!1===a.trigger('beforeLoad')){a.coming=null;return}if(e=d.type,l=d.href,!e)return!!(a.coming=null,a.current&&a.router&&a.router!=='jumpto')&&(a.current.index=j,a[a.router](a.direction));if(a.isActive=!0,(e==='image'||e==='swf')&&(d.autoHeight=d.autoWidth=!1,d.scrolling='visible'),e==='image'&&(d.aspectRatio=!0),e==='iframe'&&f&&(d.scrolling='scroll'),d.wrap=b(d.tpl.wrap).addClass('fancybox-'+(f?'mobile':'desktop')+' fancybox-type-'+e+' fancybox-tmp '+d.wrapCSS).appendTo(d.parent||'body'),b.extend(d,{skin:b('.fancybox-skin',d.wrap),outer:b('.fancybox-outer',d.wrap),inner:b('.fancybox-inner',d.wrap)}),b.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css('padding'+b,g(d.padding[a]))}),a.trigger('onReady'),e==='inline'||e==='html'){if(!d.content||!d.content.length)return a._error('content')}else if(!l)return a._error('href');e==='image'?a._loadImage():e==='ajax'?a._loadAjax():e==='iframe'?a._loadIframe():a._afterLoad()},_error:function(c){b.extend(a.coming,{type:'html',autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:'no',hasError:c,content:a.coming.tpl.error}),a._afterLoad()},_loadImage:function(){var b=a.imgPreload=new Image;b.onload=function(){this.onload=this.onerror=null,a.coming.width=this.width/a.opts.pixelRatio,a.coming.height=this.height/a.opts.pixelRatio,a._afterLoad()},b.onerror=function(){this.onload=this.onerror=null,a._error('image')},b.src=a.coming.href,b.complete!==!0&&a.showLoading()},_loadAjax:function(){var c=a.coming;a.showLoading(),a.ajaxLoad=b.ajax(b.extend({},c.ajax,{url:c.href,error:function(b,c){a.coming&&c!=='abort'?a._error('ajax',b):a.hideLoading()},success:function(b,d){d==='success'&&(c.content=b,a._afterLoad())}}))},_loadIframe:function(){var c=a.coming,d=b(c.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr('scrolling',f?'auto':c.iframe.scrolling).attr('src',c.href);b(c.wrap).bind('onReset',function(){try{b(this).find('iframe').hide().attr('src','//about:blank').end().empty()}catch(a){}}),c.iframe.preload&&(a.showLoading(),d.one('load',function(){b(this).data('ready',1),f||b(this).bind('load.fb',a.update),b(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show(),a._afterLoad()})),c.content=d.appendTo(c.inner),c.iframe.preload||a._afterLoad()},_preloadImages:function(){var e=a.group,d=a.current,f=e.length,g=d.preload?Math.min(d.preload,f-1):0,b,c;for(c=1;c<=g;c+=1)b=e[(d.index+c)%f],b.type==='image'&&b.href&&((new Image).src=b.href)},_afterLoad:function(){var e=a.coming,f=a.current,g='fancybox-placeholder',d,c,k,h,i,j;if(a.hideLoading(),!e||a.isActive===!1)return;if(!1===a.trigger('afterLoad',e,f)){e.wrap.stop(!0).trigger('onReset').remove(),a.coming=null;return}switch(f&&(a.trigger('beforeChange',f),f.wrap.stop(!0).removeClass('fancybox-opened').find('.fancybox-item, .fancybox-nav').remove()),a.unbindEvents(),d=e,c=e.content,k=e.type,h=e.scrolling,b.extend(a,{wrap:d.wrap,skin:d.skin,outer:d.outer,inner:d.inner,current:d,previous:f}),i=d.href,k){case'inline':case'ajax':case'html':d.selector?c=b('<div>').html(c).find(d.selector):l(c)&&(c.data(g)||c.data(g,b('<div class="'+g+'"></div>').insertAfter(c).hide()),c=c.show().detach(),d.wrap.bind('onReset',function(){b(this).find(c).length&&c.hide().replaceAll(c.data(g)).data(g,!1)}));break;case'image':c=d.tpl.image.replace('{href}',i);break;case'swf':c='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+i+'"></param>',j='',b.each(d.swf,function(a,b){c+='<param name="'+a+'" value="'+b+'"></param>',j+=' '+a+'="'+b+'"'}),c+='<embed src="'+i+'" type="application/x-shockwave-flash" width="100%" height="100%"'+j+'></embed></object>';break}l(c)&&c.parent().is(d.inner)||d.inner.append(c),a.trigger('beforeShow'),d.inner.css('overflow',h==='yes'?'scroll':h==='no'?'hidden':h),a._setDimension(),a.reposition(),a.isOpen=!1,a.coming=null,a.bindEvents(),a.isOpened?f.prevMethod&&a.transitions[f.prevMethod]():b('.fancybox-wrap').not(d.wrap).stop(!0).trigger('onReset').remove(),a.transitions[a.isOpened?d.nextMethod:d.openMethod](),a._preloadImages()},_setDimension:function(){var v=a.getViewport(),M=0,J=!1,D=!1,o=a.wrap,s=a.skin,h=a.inner,f=a.current,d=f.width,e=f.height,j=f.minWidth,l=f.minHeight,k=f.maxWidth,m=f.maxHeight,L=f.scrolling,C=f.scrollOutside?f.scrollbarWidth:0,A=f.margin,K=c(A[1]+A[3]),I=c(A[0]+A[2]),t,E,y,w,p,n,F,G,r,u,q,z,B,x,H;if(o.add(s).add(h).width('auto').height('auto').removeClass('fancybox-tmp'),t=c(s.outerWidth(!0)-s.width()),E=c(s.outerHeight(!0)-s.height()),y=K+t,w=I+E,p=i(d)?(v.w-y)*c(d)/100:d,n=i(e)?(v.h-w)*c(e)/100:e,f.type==='iframe'){if(x=f.content,f.autoHeight&&x.data('ready')===1)try{x[0].contentWindow.document.location&&(h.width(p).height(9999),H=x.contents().find('body'),C&&H.css('overflow-x','hidden'),n=H.outerHeight(!0))}catch(a){}}else(f.autoWidth||f.autoHeight)&&(h.addClass('fancybox-tmp'),f.autoWidth||h.width(p),f.autoHeight||h.height(n),f.autoWidth&&(p=h.width()),f.autoHeight&&(n=h.height()),h.removeClass('fancybox-tmp'));if(d=c(p),e=c(n),r=p/n,j=c(i(j)?c(j,'w')-y:j),k=c(i(k)?c(k,'w')-y:k),l=c(i(l)?c(l,'h')-w:l),m=c(i(m)?c(m,'h')-w:m),F=k,G=m,f.fitToView&&(k=Math.min(v.w-y,k),m=Math.min(v.h-w,m)),z=v.w-K,B=v.h-I,f.aspectRatio?(d>k&&(d=k,e=c(d/r)),e>m&&(e=m,d=c(e*r)),d<j&&(d=j,e=c(d/r)),e<l&&(e=l,d=c(e*r))):(d=Math.max(j,Math.min(d,k)),f.autoHeight&&f.type!=='iframe'&&(h.width(d),e=h.height()),e=Math.max(l,Math.min(e,m))),f.fitToView)if(h.width(d).height(e),o.width(d+t),u=o.width(),q=o.height(),f.aspectRatio)while((u>z||q>B)&&d>j&&e>l){if(M++>19)break;e=Math.max(l,Math.min(m,e-10)),d=c(e*r),d<j&&(d=j,e=c(d/r)),d>k&&(d=k,e=c(d/r)),h.width(d).height(e),o.width(d+t),u=o.width(),q=o.height()}else d=Math.max(j,Math.min(d,d-(u-z))),e=Math.max(l,Math.min(e,e-(q-B)));C&&L==='auto'&&e<n&&d+t+C<z&&(d+=C),h.width(d).height(e),o.width(d+t),u=o.width(),q=o.height(),J=(u>z||q>B)&&d>j&&e>l,D=f.aspectRatio?d<F&&e<G&&d<p&&e<n:(d<F||e<G)&&(d<p||e<n),b.extend(f,{dim:{width:g(u),height:g(q)},origWidth:p,origHeight:n,canShrink:J,canExpand:D,wPadding:t,hPadding:E,wrapSpace:q-s.outerHeight(!0),skinSpace:s.height()-e}),!x&&f.autoHeight&&e>l&&e<m&&!D&&h.height('auto')},_getPosition:function(i){var c=a.current,d=a.getViewport(),e=c.margin,f=a.wrap.width()+e[1]+e[3],h=a.wrap.height()+e[0]+e[2],b={position:'absolute',top:e[0],left:e[3]};return c.autoCenter&&c.fixed&&!i&&h<=d.h&&f<=d.w?b.position='fixed':c.locked||(b.top+=d.y,b.left+=d.x),b.top=g(Math.max(b.top,b.top+(d.h-h)*c.topRatio)),b.left=g(Math.max(b.left,b.left+(d.w-f)*c.leftRatio)),b},_afterZoomIn:function(){var c=a.current;if(!c)return;a.isOpen=a.isOpened=!0,a.wrap.css('overflow','visible').addClass('fancybox-opened'),a.update(),(c.closeClick||c.nextClick&&a.group.length>1)&&a.inner.css('cursor','pointer').bind('click.fb',function(d){!b(d.target).is('a')&&!b(d.target).parent().is('a')&&(d.preventDefault(),a[c.closeClick?'close':'next']())}),c.closeBtn&&b(c.tpl.closeBtn).appendTo(a.skin).bind('click.fb',function(b){b.preventDefault(),a.close()}),c.arrows&&a.group.length>1&&((c.loop||c.index>0)&&b(c.tpl.prev).appendTo(a.outer).bind('click.fb',a.prev),(c.loop||c.index<a.group.length-1)&&b(c.tpl.next).appendTo(a.outer).bind('click.fb',a.next)),a.trigger('afterShow'),!c.loop&&c.index===c.group.length-1?a.play(!1):a.opts.autoPlay&&!a.player.isActive&&(a.opts.autoPlay=!1,a.play())},_afterZoomOut:function(c){c=c||a.current,b('.fancybox-wrap').trigger('onReset').remove(),b.extend(a,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),a.trigger('afterClose',c)}}),a.transitions={getOrigPosition:function(){var b=a.current,f=b.element,c=b.orig,d={},h=50,i=50,j=b.hPadding,k=b.wPadding,e=a.getViewport();return!c&&b.isDom&&f.is(':visible')&&(c=f.find('img:first'),c.length||(c=f)),l(c)?(d=c.offset(),c.is('img')&&(h=c.outerWidth(),i=c.outerHeight())):(d.top=e.y+(e.h-i)*b.topRatio,d.left=e.x+(e.w-h)*b.leftRatio),(a.wrap.css('position')==='fixed'||b.locked)&&(d.top-=e.y,d.left-=e.x),d={top:g(d.top-j*b.topRatio),left:g(d.left-k*b.leftRatio),width:g(h+k),height:g(i+j)},d},step:function(i,d){var e,h,f,b=d.prop,g=a.current,j=g.wrapSpace,k=g.skinSpace;(b==='width'||b==='height')&&(e=d.end===d.start?1:(i-d.start)/(d.end-d.start),a.isClosing&&(e=1-e),h=b==='width'?g.wPadding:g.hPadding,f=i-h,a.skin[b](c(b==='width'?f:f-j*e)),a.inner[b](c(b==='width'?f:f-j*e-k*e)))},zoomIn:function(){var c=a.current,d=c.pos,e=c.openEffect,f=e==='elastic',g=b.extend({opacity:1},d);delete g.position,f?(d=this.getOrigPosition(),c.openOpacity&&(d.opacity=.1)):e==='fade'&&(d.opacity=.1),a.wrap.css(d).animate(g,{duration:e==='none'?0:c.openSpeed,easing:c.openEasing,step:f?this.step:null,complete:a._afterZoomIn})},zoomOut:function(){var b=a.current,d=b.closeEffect,e=d==='elastic',c={opacity:.1};e&&(c=this.getOrigPosition(),b.closeOpacity&&(c.opacity=.1)),a.wrap.animate(c,{duration:d==='none'?0:b.closeSpeed,easing:b.closeEasing,step:e?this.step:null,complete:a._afterZoomOut})},changeIn:function(){var h=a.current,j=h.nextEffect,d=h.pos,i={opacity:1},e=a.direction,f=200,b;d.opacity=.1,j==='elastic'&&(b=e==='down'||e==='up'?'top':'left',e==='down'||e==='right'?(d[b]=g(c(d[b])-f),i[b]='+='+f+'px'):(d[b]=g(c(d[b])+f),i[b]='-='+f+'px')),j==='none'?a._afterZoomIn():a.wrap.css(d).animate(i,{duration:h.nextSpeed,easing:h.nextEasing,complete:a._afterZoomIn})},changeOut:function(){var c=a.previous,e=c.prevEffect,f={opacity:.1},d=a.direction,g=200;e==='elastic'&&(f[d==='down'||d==='up'?'top':'left']=(d==='up'||d==='left'?'-':'+')+'='+g+'px'),c.wrap.animate(f,{duration:e==='none'?0:c.prevSpeed,easing:c.prevEasing,complete:function(){b(this).trigger('onReset').remove()}})}},a.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!f,fixed:!0},overlay:null,fixed:!1,el:b('html'),create:function(c){c=b.extend({},this.defaults,c),this.overlay&&this.close(),this.overlay=b('<div class="fancybox-overlay"></div>').appendTo(a.coming?a.coming.parent:c.parent),this.fixed=!1,c.fixed&&a.defaults.fixed&&(this.overlay.addClass('fancybox-overlay-fixed'),this.fixed=!0)},open:function(c){var e=this;c=b.extend({},this.defaults,c),this.overlay?this.overlay.unbind('.overlay').width('auto').height('auto'):this.create(c),this.fixed||(d.bind('resize.overlay',b.proxy(this.update,this)),this.update()),c.closeClick&&this.overlay.bind('click.overlay',function(c){if(b(c.target).hasClass('fancybox-overlay'))return a.isActive?a.close():e.close(),!1}),this.overlay.css(c.css).show()},close:function(){var a,c;d.unbind('resize.overlay'),this.el.hasClass('fancybox-lock')&&(b('.fancybox-margin').removeClass('fancybox-margin'),a=d.scrollTop(),c=d.scrollLeft(),this.el.removeClass('fancybox-lock'),d.scrollTop(a).scrollLeft(c)),b('.fancybox-overlay').remove().hide(),b.extend(this,{overlay:null,fixed:!1})},update:function(){var a='100%',b;this.overlay.width(a).height('100%'),o?(b=Math.max(n.documentElement.offsetWidth,n.body.offsetWidth),e.width()>b&&(a=e.width())):e.width()>d.width()&&(a=e.width()),this.overlay.width(a).height(e.height())},onReady:function(c,a){var f=this.overlay;b('.fancybox-overlay').stop(!0,!0),f||this.create(c),c.locked&&this.fixed&&a.fixed&&(f||(this.margin=e.height()>d.height()&&b('html').css('margin-right').replace("px","")),a.locked=this.overlay.append(a.wrap),a.fixed=!1),c.showEarly===!0&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,f){var a,c;f.locked&&(this.margin!==!1&&(b('*').filter(function(){return b(this).css('position')==='fixed'&&!b(this).hasClass("fancybox-overlay")&&!b(this).hasClass("fancybox-wrap")}).addClass('fancybox-margin'),this.el.addClass('fancybox-margin')),a=d.scrollTop(),c=d.scrollLeft(),this.el.addClass('fancybox-lock'),d.scrollTop(a).scrollLeft(c)),this.open(e)},onUpdate:function(){this.fixed||this.update()},afterClose:function(c){this.overlay&&!a.coming&&this.overlay.fadeOut(c.speedOut,b.proxy(this.close,this))}},a.helpers.title={defaults:{type:'float',position:'bottom'},beforeShow:function(i){var g=a.current,e=g.title,j=i.type,d,f;if(b.isFunction(e)&&(e=e.call(g.element,g)),!h(e)||b.trim(e)==='')return;switch(d=b('<div class="fancybox-title fancybox-title-'+j+'-wrap">'+e+'</div>'),j){case'inside':f=a.skin;break;case'outside':f=a.wrap;break;case'over':f=a.inner;break;default:f=a.skin,d.appendTo('body'),o&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),a.current.margin[2]+=Math.abs(c(d.css('margin-bottom')));break}d[i.position==='top'?'prependTo':'appendTo'](f)}},b.fn.fancybox=function(c){var f,g=b(this),d=this.selector||'',h=function(i){var e=b(this).blur(),k=f,j,h;!(i.ctrlKey||i.altKey||i.shiftKey||i.metaKey)&&!e.is('.fancybox-wrap')&&(j=c.groupAttr||'data-fancybox-group',h=e.attr(j),h||(j='rel',h=e.get(0)[j]),h&&h!==''&&h!=='nofollow'&&(e=d.length?b(d):g,e=e.filter('['+j+'="'+h+'"]'),k=e.index(this)),c.index=k,a.open(e,c)!==!1&&i.preventDefault())};return c=c||{},f=c.index||0,!d||c.live===!1?g.unbind('click.fb-start').bind('click.fb-start',h):e.undelegate(d,'click.fb-start').delegate(d+":not('.fancybox-item, .fancybox-nav')",'click.fb-start',h),this.filter('[data-fancybox-start=1]').trigger('click'),this},e.ready(function(){var c,d;b.scrollbarWidth===j&&(b.scrollbarWidth=function(){var a=b('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),c=a.children(),d=c.innerWidth()-c.height(99).innerWidth();return a.remove(),d}),b.support.fixedPosition===j&&(b.support.fixedPosition=function(){var a=b('<div style="position:fixed;top:20px;"></div>').appendTo('body'),c=a[0].offsetTop===20||a[0].offsetTop===15;return a.remove(),c}()),b.extend(a.defaults,{scrollbarWidth:b.scrollbarWidth(),fixed:b.support.fixedPosition,parent:b('body')}),c=b(k).width(),p.addClass('fancybox-lock-test'),d=b(k).width(),p.removeClass('fancybox-lock-test'),b("<style type='text/css'>.fancybox-margin{margin-right:"+(d-c)+"px;}</style>").appendTo("head")})})(window,document,jQuery);
(function(a){"use strict";a(document).ready(function(){var d,e,b,f,g,c,i,k;a('#slider-container').size()&&a(window).scroll(function(){a(this).scrollTop()>a(window).height()?(a('.navbar').addClass('fixed'),a('body').css('padding-top','97px')):(a('.navbar').removeClass('fixed'),a('body').css('padding-top','0'))}),a(".dropdown-menu a, .navbar-nav > li > a").not(".navbar-nav > li.dropdown > a").click(function(){a(window).width()<769&&a('.navbar-toggle').click()});function h(){a('.fact-item').each(function(){var b=a(this).width();a(this).height(b)})}h(),a(window).resize(function(){h()}),d=0,a(window).scroll(function(){var c,e,b,f;if(d==1)return!1;c=a(window).height(),e=a(window).scrollTop(),b=a('.timer'),f=b.height(),e>=100+f-c&&b.countTo({speed:2e3,refreshInterval:20}),d=1}),e=new Date,b=parseInt(a('#slider-container').attr('data-date')),b=new Date(b*1e3),e<b?a(".countdown").countdown({until:b,format:'ODHMS'}):a(".countdown").countdown({since:b,format:'ODHMS'}),a('.gallery').each(function(){var b=Math.floor(Math.random()*100);a('a',this).attr('rel','gallery-'+b)}),a('.gallery a').fancybox({openEffect:'none'}),f=parseInt(a('#slides').attr('data-pause')),g=parseInt(a('#slides').attr('data-speed')),c=parseInt(a('#slider-container').attr('data-height')),i=parseInt(a('#wpadminbar').height()),c||(c=100),j(),a(window).resize(function(){j()}),a('#slides').superslides({play:f,animation_speed:g,animation:'fade',pagination:!1,inherit_height_from:a('#slider-container')});function j(){var b=a(window).height(),d=b*c/100;a('#slider-container').height(d)}a('.admin-bar #slider-container').css('margin-top',-i),a('.navbar-collapse a').each(function(){var d=window.location.toString(),c=a(this).attr('href'),b=c.substring(c.indexOf('#')),e=c.replace(b,'');d===b&&(b='#top'),(d=e)&&a(this).attr('data-target',b)}),a('body').scrollspy({target:'.navbar-collapse',offset:-100}),a('[data-spy="scroll"]').each(function(){var b=a(this).scrollspy('refresh')}),k=a('.navbar').outerHeight(),a('.navbar-nav a[href*="#"], .welcome a').not('.navbar-nav a[href="#"]').on("click",function(){var b=a(this.hash),c;if(b=b.length&&b||a('[name='+this.hash.slice(1)+']'),b.length)return c=b.offset().top-k,a('html,body').animate({scrollTop:c},'slow'),!1}),a(window).one("load",function(b){a(window.location.hash).scroll()}),a('.form-submit input[type="submit"]').addClass('btn btn-primary btn-lg'),a('.post-nav-links a').addClass('btn btn-primary')})})(jQuery);
/*! scrollReveal.js v0.1.2 (c) 2014 Julian Lloyd | MIT license */window.scrollReveal=function(a){'use strict';function b(b){this.docElem=a.document.documentElement,this.options=this.extend(this.defaults,b),this.styleBank=[],this.options.init==!0&&this.init()}return b.prototype={defaults:{after:'0s',enter:'bottom',move:'24px',over:'0.66s',easing:'ease-in-out',viewportFactor:.33,reset:!1,init:!0},init:function(){var b,c,d;this.scrolled=!1,b=this,this.elems=Array.prototype.slice.call(this.docElem.querySelectorAll('[data-scroll-reveal]')),this.elems.forEach(function(a,c){b.styleBank[a]||(b.styleBank[a]=a.getAttribute('style')),b.update(a)}),c=function(){b.scrolled||(b.scrolled=!0,setTimeout(function(){b._scrollPage()},60))},d=function(){b.resizeTimeout&&clearTimeout(b.resizeTimeout);function a(){b._scrollPage(),b.resizeTimeout=null}b.resizeTimeout=setTimeout(a,200)},a.addEventListener('scroll',c,!1),a.addEventListener('resize',d,!1)},_scrollPage:function(){var a=this;this.elems.forEach(function(b,c){a.update(b)}),this.scrolled=!1},parseLanguage:function(c){var b=c.getAttribute('data-scroll-reveal').split(/[, ]+/),a={};function d(b){var a=[],c=["from","the","and","then","but","with"];return b.forEach(function(b,d){if(c.indexOf(b)>-1)return;a.push(b)}),a}return b=d(b),b.forEach(function(d,c){switch(d){case"enter":a.enter=b[c+1];return;case"after":a.after=b[c+1];return;case"wait":a.after=b[c+1];return;case"move":a.move=b[c+1];return;case"ease":a.move=b[c+1],a.ease="ease";return;case"ease-in":a.move=b[c+1],a.easing="ease-in";return;case"ease-in-out":a.move=b[c+1],a.easing="ease-in-out";return;case"ease-out":a.move=b[c+1],a.easing="ease-out";return;case"over":a.over=b[c+1];return;default:return}}),a},update:function(a){var c=this.genCSS(a),b=this.styleBank[a];if(b!=null?b+=";":b="",a.getAttribute('data-scroll-reveal-initialized')||(a.setAttribute('style',b+c.initial),a.setAttribute('data-scroll-reveal-initialized',!0)),!this.isElementInViewport(a,this.options.viewportFactor)){this.options.reset&&a.setAttribute('style',b+c.initial+c.reset);return}if(a.getAttribute('data-scroll-reveal-complete'))return;if(this.isElementInViewport(a,this.options.viewportFactor)){a.setAttribute('style',b+c.target+c.transition),this.options.reset||setTimeout(function(){b!=""?a.setAttribute('style',b):a.removeAttribute('style'),a.setAttribute('data-scroll-reveal-complete',!0)},c.totalDuration);return}},genCSS:function(h){var a=this.parseLanguage(h),f,c,g,b,e,d,i,j,k,l;return a.enter?((a.enter=="top"||a.enter=="bottom")&&(f=a.enter,c="y"),(a.enter=="left"||a.enter=="right")&&(f=a.enter,c="x")):((this.options.enter=="top"||this.options.enter=="bottom")&&(f=this.options.enter,c="y"),(this.options.enter=="left"||this.options.enter=="right")&&(f=this.options.enter,c="x")),(f=="top"||f=="left")&&(a.move?a.move="-"+a.move:a.move="-"+this.options.move),g=a.move||this.options.move,b=a.over||this.options.over,e=a.after||this.options.after,d=a.easing||this.options.easing,i="-webkit-transition: -webkit-transform "+b+" "+d+" "+e+",  opacity "+b+" "+d+" "+e+";"+"transition: transform "+b+" "+d+" "+e+", opacity "+b+" "+d+" "+e+";"+"-webkit-perspective: 1000;"+"-webkit-backface-visibility: hidden;",j="-webkit-transition: -webkit-transform "+b+" "+d+" 0s,  opacity "+b+" "+d+" "+e+";"+"transition: transform "+b+" "+d+" 0s,  opacity "+b+" "+d+" "+e+";"+"-webkit-perspective: 1000;"+"-webkit-backface-visibility: hidden;",k="-webkit-transform: translate"+c+"("+g+");"+"transform: translate"+c+"("+g+");"+"opacity: 0;",l="-webkit-transform: translate"+c+"(0);"+"transform: translate"+c+"(0);"+"opacity: 1;",{transition:i,initial:k,target:l,reset:j,totalDuration:(parseFloat(b)+parseFloat(e))*1e3}},getViewportH:function(){var b=this.docElem.clientHeight,c=a.innerHeight;return b<c?c:b},getOffset:function(a){var b=0,c=0;do isNaN(a.offsetTop)||(b+=a.offsetTop),isNaN(a.offsetLeft)||(c+=a.offsetLeft);while(a=a.offsetParent)return{top:b,left:c}},isElementInViewport:function(b,c){var d=a.pageYOffset,g=d+this.getViewportH(),e=b.offsetHeight,f=this.getOffset(b).top,h=f+e,c=c||0;return f+e*c<=g&&h>=d||(b.currentStyle?b.currentStyle:a.getComputedStyle(b,null)).position=='fixed'},extend:function(c,a){for(var b in a)a.hasOwnProperty(b)&&(c[b]=a[b]);return c}},b}(window),function(a){"use strict";a(document).ready(function(){if(a(window).width()>767){var b={after:'0s',enter:'top',move:'50px',over:'0.66s',easing:'ease-in-out',viewportFactor:.33,reset:!1,init:!0};window.scrollReveal=new scrollReveal({reset:!0})}})}(jQuery);
jQuery(document).scroll(function(){var a=jQuery(".navbar-default .navbar-nav > li > a");a.blur()});
/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2022 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

// jscs:disable
// jshint ignore: start

document.documentElement.className+=" js_active ",document.documentElement.className+="ontouchstart"in document.documentElement?" vc_mobile ":" vc_desktop ",function(){for(var prefix=["-webkit-","-moz-","-ms-","-o-",""],i=0;i<prefix.length;i++)prefix[i]+"transform"in document.documentElement.style&&(document.documentElement.className+=" vc_transform ")}(),function($){"function"!=typeof window.vc_js&&(window.vc_js=function(){"use strict";vc_toggleBehaviour(),vc_tabsBehaviour(),vc_accordionBehaviour(),vc_teaserGrid(),vc_carouselBehaviour(),vc_slidersBehaviour(),vc_prettyPhoto(),vc_pinterest(),vc_progress_bar(),vc_plugin_flexslider(),vc_gridBehaviour(),vc_rowBehaviour(),vc_prepareHoverBox(),vc_googleMapsPointer(),vc_ttaActivation(),jQuery(document).trigger("vc_js"),window.setTimeout(vc_waypoints,500)}),"function"!=typeof window.vc_plugin_flexslider&&(window.vc_plugin_flexslider=function($parent){($parent?$parent.find(".wpb_flexslider"):jQuery(".wpb_flexslider")).each(function(){var this_element=jQuery(this),sliderTimeout=1e3*parseInt(this_element.attr("data-interval"),10),sliderFx=this_element.attr("data-flex_fx"),slideshow=0==sliderTimeout?!1:!0;this_element.is(":visible")&&this_element.flexslider({animation:sliderFx,slideshow:slideshow,slideshowSpeed:sliderTimeout,sliderSpeed:800,smoothHeight:!0})})}),"function"!=typeof window.vc_googleplus&&(window.vc_googleplus=function(){var po,s;0<jQuery(".wpb_googleplus").length&&((po=document.createElement("script")).type="text/javascript",po.async=!0,po.src="https://apis.google.com/js/plusone.js",(s=document.getElementsByTagName("script")[0]).parentNode.insertBefore(po,s))}),"function"!=typeof window.vc_pinterest&&(window.vc_pinterest=function(){var po,s;0<jQuery(".wpb_pinterest").length&&((po=document.createElement("script")).type="text/javascript",po.async=!0,po.src="https://assets.pinterest.com/js/pinit.js",(s=document.getElementsByTagName("script")[0]).parentNode.insertBefore(po,s))}),"function"!=typeof window.vc_progress_bar&&(window.vc_progress_bar=function(){void 0!==jQuery.fn.vcwaypoint&&jQuery(".vc_progress_bar").each(function(){var $el=jQuery(this);$el.vcwaypoint(function(){$el.find(".vc_single_bar").each(function(index){var bar=jQuery(this).find(".vc_bar"),val=bar.data("percentage-value");setTimeout(function(){bar.css({width:val+"%"})},200*index)})},{offset:"85%"})})}),"function"!=typeof window.vc_waypoints&&(window.vc_waypoints=function(){void 0!==jQuery.fn.vcwaypoint&&jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").each(function(){var $el=jQuery(this);$el.vcwaypoint(function(){$el.addClass("wpb_start_animation animated")},{offset:"85%"})})}),"function"!=typeof window.vc_toggleBehaviour&&(window.vc_toggleBehaviour=function($el){function event(e){e&&e.preventDefault&&e.preventDefault();var element=jQuery(this).closest(".vc_toggle"),e=element.find(".vc_toggle_content");element.hasClass("vc_toggle_active")?e.slideUp({duration:300,complete:function(){element.removeClass("vc_toggle_active")}}):e.slideDown({duration:300,complete:function(){element.addClass("vc_toggle_active")}})}($el?$el.hasClass("vc_toggle_title")?$el.unbind("click"):$el.find(".vc_toggle_title").off("click"):jQuery(".vc_toggle_title").off("click")).on("click",event)}),"function"!=typeof window.vc_tabsBehaviour&&(window.vc_tabsBehaviour=function($tab){var ver,old_version;jQuery.ui&&($tab=$tab||jQuery(".wpb_tabs, .wpb_tour"),ver=jQuery.ui&&jQuery.ui.version?jQuery.ui.version.split("."):"1.10",old_version=1===parseInt(ver[0],10)&&parseInt(ver[1],10)<9,$tab.each(function(index){var interval=jQuery(this).attr("data-interval"),tabs_array=[],$tabs=jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({show:function(event,ui){wpb_prepare_tab_content(event,ui)},activate:function(event,ui){wpb_prepare_tab_content(event,ui)}});if(interval&&0<interval)try{$tabs.tabs("rotate",1e3*interval)}catch(err){window.console&&window.console.warn&&console.warn("tabs behaviours error",err)}jQuery(this).find(".wpb_tab").each(function(){tabs_array.push(this.id)}),jQuery(this).find(".wpb_tabs_nav li").on("click",function(e){return e&&e.preventDefault&&e.preventDefault(),old_version?$tabs.tabs("select",jQuery("a",this).attr("href")):$tabs.tabs("option","active",jQuery(this).index()),!1}),jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").on("click",function(e){var index;e&&e.preventDefault&&e.preventDefault(),old_version?(index=$tabs.tabs("option","selected"),jQuery(this).parent().hasClass("wpb_next_slide")?index++:index--,index<0?index=$tabs.tabs("length")-1:index>=$tabs.tabs("length")&&(index=0),$tabs.tabs("select",index)):(index=$tabs.tabs("option","active"),e=$tabs.find(".wpb_tab").length,index=jQuery(this).parent().hasClass("wpb_next_slide")?e<=index+1?0:index+1:index-1<0?e-1:index-1,$tabs.tabs("option","active",index))})}))}),"function"!=typeof window.vc_accordionBehaviour&&(window.vc_accordionBehaviour=function(){jQuery(".wpb_accordion").each(function(index){var $this=jQuery(this),active_tab=($this.attr("data-interval"),!isNaN(jQuery(this).data("active-tab"))&&0<parseInt($this.data("active-tab"),10)&&parseInt($this.data("active-tab"),10)-1),collapsible=!1===active_tab||"yes"===$this.data("collapsible"),active_tab=$this.find(".wpb_accordion_wrapper").accordion({header:"> div > h3",autoHeight:!1,heightStyle:"content",active:active_tab,collapsible:collapsible,navigation:!0,activate:vc_accordionActivate,change:function(event,ui){void 0!==jQuery.fn.isotope&&ui.newContent.find(".isotope").isotope("layout"),vc_carouselBehaviour(ui.newPanel)}});!0===$this.data("vcDisableKeydown")&&(active_tab.data("uiAccordion")._keydown=function(){})})}),"function"!=typeof window.vc_teaserGrid&&(window.vc_teaserGrid=function(){var layout_modes={fitrows:"fitRows",masonry:"masonry"};jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function(){var $container=jQuery(this),$thumbs=$container.find(".wpb_thumbnails"),layout_mode=$thumbs.attr("data-layout-mode");$thumbs.isotope({itemSelector:".isotope-item",layoutMode:void 0===layout_modes[layout_mode]?"fitRows":layout_modes[layout_mode]}),$container.find(".categories_filter a").data("isotope",$thumbs).on("click",function(e){e&&e.preventDefault&&e.preventDefault();e=jQuery(this).data("isotope");jQuery(this).parent().parent().find(".active").removeClass("active"),jQuery(this).parent().addClass("active"),e.isotope({filter:jQuery(this).attr("data-filter")})}),jQuery(window).on("load resize",function(){$thumbs.isotope("layout")})})}),"function"!=typeof window.vc_carouselBehaviour&&(window.vc_carouselBehaviour=function($parent){($parent?$parent.find(".wpb_carousel"):jQuery(".wpb_carousel")).each(function(){var $this=jQuery(this);!0!==$this.data("carousel_enabled")&&$this.is(":visible")&&($this.data("carousel_enabled",!0),getColumnsCount(jQuery(this)),jQuery(this).hasClass("columns_count_1"),($this=jQuery(this).find(".wpb_thumbnails-fluid li")).css({"margin-right":$this.css("margin-left"),"margin-left":0}),($this=jQuery(this).find("ul.wpb_thumbnails-fluid")).width($this.width()+300))})}),"function"!=typeof window.vc_slidersBehaviour&&(window.vc_slidersBehaviour=function(){jQuery(".wpb_gallery_slides").each(function(index){var $imagesGrid,sliderTimeout,this_element=jQuery(this);this_element.hasClass("wpb_slider_nivo")?(0===(sliderTimeout=1e3*this_element.attr("data-interval"))&&(sliderTimeout=9999999999),this_element.find(".nivoSlider").nivoSlider({effect:"boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",slices:15,boxCols:8,boxRows:4,animSpeed:800,pauseTime:sliderTimeout,startSlide:0,directionNav:!0,directionNavHide:!0,controlNav:!0,keyboardNav:!1,pauseOnHover:!0,manualAdvance:!1,prevText:"Prev",nextText:"Next"})):this_element.hasClass("wpb_image_grid")&&(jQuery.fn.imagesLoaded?$imagesGrid=this_element.find(".wpb_image_grid_ul").imagesLoaded(function(){$imagesGrid.isotope({itemSelector:".isotope-item",layoutMode:"fitRows"})}):this_element.find(".wpb_image_grid_ul").isotope({itemSelector:".isotope-item",layoutMode:"fitRows"}))})}),"function"!=typeof window.vc_prettyPhoto&&(window.vc_prettyPhoto=function(){try{jQuery&&jQuery.fn&&jQuery.fn.prettyPhoto&&jQuery('a.prettyphoto, .gallery-icon a[href*=".jpeg"]').prettyPhoto({animationSpeed:"normal",hook:"data-rel",padding:15,opacity:.7,showTitle:!0,allowresize:!0,counter_separator_label:"/",hideflash:!1,deeplinking:!1,modal:!1,callback:function(){-1<location.href.indexOf("#!prettyPhoto")&&(location.hash="")},social_tools:""})}catch(err){window.console&&window.console.warn&&window.console.warn("vc_prettyPhoto initialize error",err)}}),"function"!=typeof window.vc_google_fonts&&(window.vc_google_fonts=function(){return window.console&&window.console.warn&&window.console.warn("function vc_google_fonts is deprecated, no need to use it"),!1}),window.vcParallaxSkroll=!1,"function"!=typeof window.vc_rowBehaviour&&(window.vc_rowBehaviour=function(){var $=window.jQuery,currentThemeSlug=window.vcData.currentTheme.slug;function fullWidthRow(){var $elements;void 0!==window.wpb_disable_full_width_row_js&&window.wpb_disable_full_width_row_js||($elements=$('[data-vc-full-width="true"]'),$.each($elements,function(key,item){var el_margin_left,el_margin_right,offset,width,cssProps,padding,paddingRight,$el=$(this),$el_full=($el.addClass("vc_hidden"),$el.next(".vc_row-full-width"));($el_full=$el_full.length?$el_full:$el.parent().next(".vc_row-full-width")).length&&(el_margin_left=parseInt($el.css("margin-left"),10),el_margin_right=parseInt($el.css("margin-right"),10),offset=0-$el_full.offset().left-el_margin_left,width=$(window).width(),cssProps={position:"relative",left:offset="rtl"===$el.css("direction")?(offset=offset-$el_full.width()+width)+el_margin_left+el_margin_right:offset,"box-sizing":"border-box",width:width,"max-width":width},"twentytwenty"===currentThemeSlug?(cssProps.left=0,cssProps.marginLeft=0):"twentytwentyone"===currentThemeSlug?cssProps.left=0:"twentytwentytwo"===currentThemeSlug&&(cssProps.left=-$el_full.position().left+"px"),$el.css(cssProps),$el.data("vcStretchContent")||("rtl"===$el.css("direction")?((padding=offset)<0&&(padding=0),(paddingRight=offset)<0&&(paddingRight=0)):(paddingRight=width-(padding=(padding=-1*offset)<0?0:padding)-$el_full.width()+el_margin_left+el_margin_right)<0&&(paddingRight=0),$el.css({"padding-left":padding+"px","padding-right":paddingRight+"px"})),$el.attr("data-vc-full-width-init","true"),$el.removeClass("vc_hidden"),$(document).trigger("vc-full-width-row-single",{el:$el,offset:offset,marginLeft:el_margin_left,marginRight:el_margin_right,elFull:$el_full,width:width,maxWidth:width}))}),$(document).trigger("vc-full-width-row",$elements))}function fullHeightRow(){var windowHeight,offsetTop,$element=$(".vc_row-o-full-height:first");$element.length&&(windowHeight=$(window).height(),(offsetTop=$element.offset().top)<windowHeight&&$element.css("min-height",100-offsetTop/(windowHeight/100)+"vh")),$(document).trigger("vc-full-height-row",$element)}$(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour",fullWidthRow).on("resize.vcRowBehaviour",fullHeightRow),fullWidthRow(),fullHeightRow(),(0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./))&&$(".vc_row-o-full-height").each(function(){"flex"===$(this).css("display")&&$(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')}),vc_initVideoBackgrounds();var callSkrollInit=!1;if(window.vcParallaxSkroll&&window.vcParallaxSkroll.destroy(),$(".vc_parallax-inner").remove(),$("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"),$("[data-vc-parallax]").each(function(){var skrollrSize,$parallaxElement,parallaxImage,youtubeId;callSkrollInit=!0,"on"===$(this).data("vcParallaxOFade")&&$(this).children().attr("data-5p-top-bottom","opacity:0;").attr("data-30p-top-bottom","opacity:1;"),skrollrSize=100*$(this).data("vcParallax"),($parallaxElement=$("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrSize+"%"),parallaxImage=$(this).data("vcParallaxImage"),(youtubeId=vcExtractYoutubeId(parallaxImage))?insertYoutubeVideoAsBackground($parallaxElement,youtubeId):void 0!==parallaxImage&&$parallaxElement.css("background-image","url("+parallaxImage+")"),$parallaxElement.attr("data-bottom-top","top: "+-(skrollrSize-100)+"%;").attr("data-top-bottom","top: 0%;")}),callSkrollInit&&window.skrollr)window.vcParallaxSkroll=skrollr.init({forceHeight:!1,smoothScrolling:!1,mobileCheck:function(){return!1}}),window.vcParallaxSkroll}),"function"!=typeof window.vc_gridBehaviour&&(window.vc_gridBehaviour=function(){jQuery.fn.vcGrid&&jQuery("[data-vc-grid]").vcGrid()}),"function"!=typeof window.getColumnsCount&&(window.getColumnsCount=function(el){for(var find=!1,i=1;!1===find;){if(el.hasClass("columns_count_"+i))return find=!0,i;i++}}),"function"!=typeof window.wpb_prepare_tab_content&&(window.wpb_prepare_tab_content=function(event,ui){var panel=ui.panel||ui.newPanel,$pie_charts=panel.find(".vc_pie_chart:not(.vc_ready)"),$round_charts=panel.find(".vc_round-chart"),$line_charts=panel.find(".vc_line-chart"),$carousel=panel.find('[data-ride="vc_carousel"]');vc_carouselBehaviour(),vc_plugin_flexslider(panel),ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var grid=jQuery(this).data("vcGrid");grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry()}),panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var grid=jQuery(this).data("vcGrid");grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry()}),$pie_charts.length&&jQuery.fn.vcChat&&$pie_charts.vcChat(),$round_charts.length&&jQuery.fn.vcRoundChart&&$round_charts.vcRoundChart({reload:!1}),$line_charts.length&&jQuery.fn.vcLineChart&&$line_charts.vcLineChart({reload:!1}),$carousel.length&&jQuery.fn.carousel&&$carousel.carousel("resizeAction"),ui=panel.find(".isotope, .wpb_image_grid_ul"),$pie_charts=panel.find(".wpb_gmaps_widget"),0<ui.length&&ui.isotope("layout"),$pie_charts.length&&!$pie_charts.is(".map_ready")&&(($round_charts=$pie_charts.find("iframe")).attr("src",$round_charts.attr("src")),$pie_charts.addClass("map_ready")),panel.parents(".isotope").length&&panel.parents(".isotope").each(function(){jQuery(this).isotope("layout")}),$(document).trigger("wpb_prepare_tab_content",panel)}),"function"!=typeof window.vc_ttaActivation&&(window.vc_ttaActivation=function(){jQuery("[data-vc-accordion]").on("show.vc.accordion",function(e){var $=window.jQuery,ui={};ui.newPanel=$(this).data("vc.accordion").getTarget(),window.wpb_prepare_tab_content(e,ui)})}),"function"!=typeof window.vc_accordionActivate&&(window.vc_accordionActivate=function(event,ui){var $pie_charts,$round_charts,$line_charts,$carousel;ui.newPanel.length&&ui.newHeader.length&&($pie_charts=ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),$round_charts=ui.newPanel.find(".vc_round-chart"),$line_charts=ui.newPanel.find(".vc_line-chart"),$carousel=ui.newPanel.find('[data-ride="vc_carousel"]'),void 0!==jQuery.fn.isotope&&ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"),ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var grid=jQuery(this).data("vcGrid");grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry()}),vc_carouselBehaviour(ui.newPanel),vc_plugin_flexslider(ui.newPanel),$pie_charts.length&&jQuery.fn.vcChat&&$pie_charts.vcChat(),$round_charts.length&&jQuery.fn.vcRoundChart&&$round_charts.vcRoundChart({reload:!1}),$line_charts.length&&jQuery.fn.vcLineChart&&$line_charts.vcLineChart({reload:!1}),$carousel.length&&jQuery.fn.carousel&&$carousel.carousel("resizeAction"),ui.newPanel.parents(".isotope").length&&ui.newPanel.parents(".isotope").each(function(){jQuery(this).isotope("layout")}))}),"function"!=typeof window.initVideoBackgrounds&&(window.initVideoBackgrounds=function(){return window.console&&window.console.warn&&window.console.warn("this function is deprecated use vc_initVideoBackgrounds"),vc_initVideoBackgrounds()}),"function"!=typeof window.vc_initVideoBackgrounds&&(window.vc_initVideoBackgrounds=function(){jQuery("[data-vc-video-bg]").each(function(){var youtubeUrl,$element=jQuery(this);$element.data("vcVideoBg")?(youtubeUrl=$element.data("vcVideoBg"),(youtubeUrl=vcExtractYoutubeId(youtubeUrl))&&($element.find(".vc_video-bg").remove(),insertYoutubeVideoAsBackground($element,youtubeUrl)),jQuery(window).on("grid:items:added",function(event,$grid){$element.has($grid).length&&vcResizeVideoBackground($element)})):$element.find(".vc_video-bg").remove()})}),"function"!=typeof window.insertYoutubeVideoAsBackground&&(window.insertYoutubeVideoAsBackground=function($element,youtubeId,counter){if("undefined"==typeof YT||void 0===YT.Player)return 100<(counter=void 0===counter?0:counter)?void console.warn("Too many attempts to load YouTube api"):void setTimeout(function(){insertYoutubeVideoAsBackground($element,youtubeId,counter++)},100);var $container=$element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");new YT.Player($container[0],{width:"100%",height:"100%",videoId:youtubeId,playerVars:{playlist:youtubeId,iv_load_policy:3,enablejsapi:1,disablekb:1,autoplay:1,controls:0,showinfo:0,rel:0,loop:1,wmode:"transparent"},events:{onReady:function(event){event.target.mute().setLoop(!0)}}}),vcResizeVideoBackground($element),jQuery(window).on("resize",function(){vcResizeVideoBackground($element)})}),"function"!=typeof window.vcResizeVideoBackground&&(window.vcResizeVideoBackground=function($element){var iframeW,iframeH,marginLeft,marginTop,containerW=$element.innerWidth(),containerH=$element.innerHeight();containerW/containerH<16/9?(iframeW=containerH*(16/9),iframeH=containerH,marginLeft=-Math.round((iframeW-containerW)/2)+"px",marginTop=-Math.round((iframeH-containerH)/2)+"px"):(iframeH=(iframeW=containerW)*(9/16),marginTop=-Math.round((iframeH-containerH)/2)+"px",marginLeft=-Math.round((iframeW-containerW)/2)+"px"),iframeW+="px",iframeH+="px",$element.find(".vc_video-bg iframe").css({maxWidth:"1000%",marginLeft:marginLeft,marginTop:marginTop,width:iframeW,height:iframeH})}),"function"!=typeof window.vcExtractYoutubeId&&(window.vcExtractYoutubeId=function(url){if(void 0===url)return!1;url=url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);return null!==url&&url[1]}),"function"!=typeof window.vc_googleMapsPointer&&(window.vc_googleMapsPointer=function(){var $=window.jQuery,$wpbGmapsWidget=$(".wpb_gmaps_widget");$wpbGmapsWidget.on("click",function(){$("iframe",this).css("pointer-events","auto")}),$wpbGmapsWidget.on("mouseleave",function(){$("iframe",this).css("pointer-events","none")}),$(".wpb_gmaps_widget iframe").css("pointer-events","none")}),"function"!=typeof window.vc_setHoverBoxPerspective&&(window.vc_setHoverBoxPerspective=function(hoverBox){hoverBox.each(function(){var $this=jQuery(this),width=$this.width();$this.css("perspective",4*width+"px")})}),"function"!=typeof window.vc_setHoverBoxHeight&&(window.vc_setHoverBoxHeight=function(hoverBox){hoverBox.each(function(){var $this=jQuery(this),hoverBoxInner=$this.find(".vc-hoverbox-inner"),frontHeight=(hoverBoxInner.css("min-height",0),$this.find(".vc-hoverbox-front-inner").outerHeight()),$this=$this.find(".vc-hoverbox-back-inner").outerHeight(),frontHeight=$this<frontHeight?frontHeight:$this;hoverBoxInner.css("min-height",(frontHeight=frontHeight<250?250:frontHeight)+"px")})}),"function"!=typeof window.vc_prepareHoverBox&&(window.vc_prepareHoverBox=function(){var hoverBox=jQuery(".vc-hoverbox");vc_setHoverBoxHeight(hoverBox),vc_setHoverBoxPerspective(hoverBox)}),jQuery(document).ready(window.vc_prepareHoverBox),jQuery(window).on("resize",window.vc_prepareHoverBox),jQuery(document).ready(function($){window.vc_js()})}(window.jQuery);;
jQuery.fn.nextInArray = function(element) {
    var nextId = 0;
    for(var i = 0; i < this.length; i++) {
        if(this[i] == element) {
            nextId = i + 1;
            break;
        }
    }
    if(nextId > this.length-1)
        nextId = 0;
    return this[nextId];
}
jQuery.fn.clearForm = function() {
	return this.each(function() {
		var type = this.type, tag = this.tagName.toLowerCase();
		if (tag == 'form')
			return jQuery(':input', this).clearForm();
		if (type == 'text' || type == 'password' || tag == 'textarea')
			this.value = '';
		else if (type == 'checkbox' || type == 'radio')
			this.checked = false;
		else if (tag == 'select')
			this.selectedIndex = -1;
	});
}
jQuery.fn.tagName = function() {
    return this.get(0).tagName;
}
jQuery.fn.exists = function(){
    return (jQuery(this).length > 0 ? true : false);
}
function isNumber(val) {
    return /^\d+/.test(val);
}
function pushDataToParam(data, pref) {
	pref = pref ? pref : '';
	var res = [];
	for(var key in data) {
		var name = pref && pref != '' ? pref+ '['+ key+ ']' : key;
		if(typeof(data[key]) === 'array' || typeof(data[key]) === 'object') {
			res = jQuery.merge(res, pushDataToParam(data[key], name));
		} else {
			res.push(name+ "="+ data[key]);
		}
	}
	return res;
}
jQuery.fn.serializeAnythingGmp = function(addData) {
    var toReturn    = [];
    var els         = jQuery(this).find(':input').get();
    jQuery.each(els, function() {
        if (this.name && !this.disabled && (this.checked || /select|textarea/i.test(this.nodeName) || /text|hidden|password/i.test(this.type))) {
            var val = jQuery(this).val();
            toReturn.push( encodeURIComponent(this.name) + "=" + encodeURIComponent( val ) );
        }
    });
    if(typeof(addData) != 'undefined') {
		toReturn = jQuery.merge(toReturn, pushDataToParam(addData));
    }
    return toReturn.join("&").replace(/%20/g, "+");
};
jQuery.fn.serializeAssoc = function() {
	var data = [ ];
	jQuery.each( this.serializeArray(), function( key, obj ) {
	  var a = obj.name.match(/(.*?)\[(.*?)\]/);
	  if(a !== null)
	  {
		var subName = a[1];
		var subKey = a[2];
		if( !data[subName] ) data[subName] = [ ];
		  if( data[subName][subKey] ) {
			if( jQuery.isArray( data[subName][subKey] ) ) {
			  data[subName][subKey].push( obj.value );
			} else {
			  data[subName][subKey] = [ ];
			  data[subName][subKey].push( obj.value );
			};
		  } else {
			data[subName][subKey] = obj.value;
		  };
		} else {
		  if( data[obj.name] ) {
			if( jQuery.isArray( data[obj.name] ) ) {
			  data[obj.name].push( obj.value );
			} else {
			  data[obj.name] = [ ];
			  data[obj.name].push( obj.value );
			};
		  } else {
			data[obj.name] = obj.value;
		  };
		};
	});
	return data;
};
function str_replace(haystack, needle, replacement) {
	var temp = haystack.split(needle);
	return temp.join(replacement);
}
/**
 * @see php html::nameToClassId($name) method
 **/
function nameToClassId(name) {
    return str_replace(
        str_replace(name, ']', ''),
            '[', ''
    );
}
function strpos( haystack, needle, offset){
    var i = haystack.indexOf( needle, offset ); // returns -1
    return i >= 0 ? i : false;
}
function extend(Child, Parent) {
    var F = function() { };
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
}
function toeRedirect(url) {
    document.location.href = url;
}
function toeReload(url) {
	if(url)
		toeRedirect(url);
    document.location.reload();
}
jQuery.fn.toeRebuildSelect = function(data, useIdAsValue, val) {
    if(jQuery(this).tagName() == 'SELECT' && typeof(data) == 'object') {
        if(jQuery(data).length > 0) {
            if(typeof(val) == 'undefined')
                val = false;
            if(jQuery(this).children('option').length) {
                jQuery(this).children('option').remove();
            }
            if(typeof(useIdAsValue) == 'undefined')
                useIdAsValue = false;
            var selected = '';
            for(var id in data) {
                selected = '';
                if(val && ((useIdAsValue && id == val) || (data[id] == val)))
                    selected = 'selected';
                jQuery(this).append('<option value="'+ (useIdAsValue ? id : data[id])+ '" '+ selected+ '>'+ data[id]+ '</option>');
            }
        }
    }
}
/**
 * We will not use just jQUery.inArray because it is work incorrect for objects
 * @return mixed - key that was found element or -1 if not
 */
function toeInArray(needle, haystack) {
    if(typeof(haystack) == 'object') {
        for(var k in haystack) {
            if(haystack[ k ] == needle)
                return k;
        }
    } else if(typeof(haystack) == 'array') {
        return jQuery.inArray(needle, haystack);
    }
    return -1;
}
jQuery.fn.setReadonly = function() {
	jQuery(this).addClass('toeReadonly').attr('readonly', 'readonly');
}
jQuery.fn.unsetReadonly = function() {
	jQuery(this).removeClass('toeReadonly').removeAttr('readonly', 'readonly');
}
jQuery.fn.getClassId = function(pref, test) {
	var classId = jQuery(this).attr('class');
	classId = classId.substr( strpos(classId, pref+ '_') );
	if(strpos(classId, ' '))
		classId = classId.substr( 0, strpos(classId, ' ') );
	classId = classId.split('_');
	classId = classId[1];
	return classId;
}
function toeTextIncDec(textFieldId, inc) {
	var value = parseInt(jQuery('#'+ textFieldId).val());
	if(isNaN(value))
		value = 0;
	if(!(inc < 0 && value < 1)) {
		value += inc;
	}
	jQuery('#'+ textFieldId).val(value);
}

/**
 * Make first letter of string in upper case
 * @param str string - string to convert
 * @return string converted string - first letter in upper case
 */
function toeStrFirstUp(str) {
	str += '';
	var f = str.charAt(0).toUpperCase();
	return f + str.substr(1);
}
function URLToArray(url) {
	var request = {};

  if(typeof url != 'string') {
      url = url[0];
  }

	var pairs = url.substring(url.indexOf('?') + 1).split('&');
	for (var i = 0; i < pairs.length; i++) {
		if(!pairs[i])
			continue;
		var pair = pairs[i].split('=');
		request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	}
	return request;
}
function ArrayToURL(array) {
	var pairs = [];
	for (var key in array)
		if (array.hasOwnProperty(key))

			pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(array[key]));
	return pairs.join('&');
}
function parseStr (str, array) {
  // http://kevin.vanzonneveld.net
  // +   original by: Cagri Ekin
  // +   improved by: Michael White (http://getsprink.com)
  // +    tweaked by: Jack
  // +   bugfixed by: Onno Marsman
  // +   reimplemented by: stag019
  // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
  // +   bugfixed by: stag019
  // +   input by: Dreamer
  // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
  // +   bugfixed by: MIO_KODUKI (http://mio-koduki.blogspot.com/)
  // +   input by: Zaide (http://zaidesthings.com/)
  // +   input by: David Pesta (http://davidpesta.com/)
  // +   input by: jeicquest
  // +   improved by: Brett Zamir (http://brett-zamir.me)
  // %        note 1: When no argument is specified, will put variables in global scope.
  // %        note 1: When a particular argument has been passed, and the returned value is different parse_str of PHP. For example, a=b=c&d====c
  // *     example 1: var arr = {};
  // *     example 1: parse_str('first=foo&second=bar', arr);
  // *     results 1: arr == { first: 'foo', second: 'bar' }
  // *     example 2: var arr = {};
  // *     example 2: parse_str('str_a=Jack+and+Jill+didn%27t+see+the+well.', arr);
  // *     results 2: arr == { str_a: "Jack and Jill didn't see the well." }
  // *     example 3: var abc = {3:'a'};
  // *     example 3: parse_str('abc[a][b]["c"]=def&abc[q]=t+5');
  // *     results 3: JSON.stringify(abc) === '{"3":"a","a":{"b":{"c":"def"}},"q":"t 5"}';
	var strArr = String(str).replace(/^&/, '').replace(/&$/, '').split('&'),
	sal = strArr.length,
	i, j, ct, p, lastObj, obj, lastIter, undef, chr, tmp, key, value,
	postLeftBracketPos, keys, keysLen,
	fixStr = function (str) {
		return decodeURIComponent(str.replace(/\+/g, '%20'));
	};
	// Comented by Alexey Bolotov
	/*
	if (!array) {
	array = this.window;
	}*/
	if (!array) {
		array = {};
	}

	for (i = 0; i < sal; i++) {
		tmp = strArr[i].split('=');
		key = fixStr(tmp[0]);
		value = (tmp.length < 2) ? '' : fixStr(tmp[1]);

		while (key.charAt(0) === ' ') {
			key = key.slice(1);
		}
		if (key.indexOf('\x00') > -1) {
			key = key.slice(0, key.indexOf('\x00'));
		}
		if (key && key.charAt(0) !== '[') {
			keys = [];
			postLeftBracketPos = 0;
			for (j = 0; j < key.length; j++) {
				if (key.charAt(j) === '[' && !postLeftBracketPos) {
					postLeftBracketPos = j + 1;
				} else if (key.charAt(j) === ']') {
					if (postLeftBracketPos) {
						if (!keys.length) {
							keys.push(key.slice(0, postLeftBracketPos - 1));
						}
						keys.push(key.substr(postLeftBracketPos, j - postLeftBracketPos));
						postLeftBracketPos = 0;
						if (key.charAt(j + 1) !== '[') {
							break;
						}
					}
				}
			}
			if (!keys.length) {
				keys = [key];
			}
			for (j = 0; j < keys[0].length; j++) {
				chr = keys[0].charAt(j);
				if (chr === ' ' || chr === '.' || chr === '[') {
					keys[0] = keys[0].substr(0, j) + '_' + keys[0].substr(j + 1);
				}
				if (chr === '[') {
					break;
				}
			}

			obj = array;
			for (j = 0, keysLen = keys.length; j < keysLen; j++) {
				key = keys[j].replace(/^['"]/, '').replace(/['"]$/, '');
				lastIter = j !== keys.length - 1;
				lastObj = obj;
				if ((key !== '' && key !== ' ') || j === 0) {
					if (obj[key] === undef) {
						obj[key] = {};
					}
					obj = obj[key];
				} else { // To insert new dimension
					ct = -1;
					for (p in obj) {
						if (obj.hasOwnProperty(p)) {
							if (+p > ct && p.match(/^\d+$/g)) {
								ct = +p;
							}
						}
					}
					key = ct + 1;
				}
			}
			lastObj[key] = value;
		}
	}
	return array;
}

function toeListableGmp(params) {
	this.params			= jQuery.extend({}, params);
	this.table			= jQuery(this.params.table);
	this.paging			= jQuery(this.params.paging);
	this.perPage		= this.params.perPage;
	this.list			= this.params.list;
	this.count			= this.params.count;
	this.page			= this.params.page;
	this.pagingCallback	= this.params.pagingCallback;
	var self			= this;

	this.draw = function(list, count) {
		this.table.find('tr').not('.gmpExample, .gmpTblHeader').remove();
		var exampleRow = this.table.find('.gmpExample');
		for(var i in list) {
			var newRow = exampleRow.clone();
			for(var key in list[i]) {
				var element = newRow.find('.'+ key);
				if(element.length) {
					var valueTo = element.attr('valueTo');
					if(valueTo) {
						var newValue = list[i][key];
						var prevValue = element.attr(valueTo);
						if(prevValue)
							newValue = prevValue+ ' '+ newValue;
						element.attr(valueTo, newValue);
					} else
						element.html(list[i][key]);
				}
			}
			newRow.removeClass('gmpExample').show();
			this.table.append(newRow);
		}
		if(this.paging) {
			this.paging.html('');
			if(count && count > list.length && this.perPage) {
				for(var i = 1; i <= Math.ceil(count/this.perPage); i++) {
					var newPageId = i-1
					,	newElement = (newPageId == this.page) ? jQuery('<b/>') : jQuery('<a/>');
					if(newPageId != this.page) {
						newElement.attr('href', '#'+ newPageId)
						.click(function(){
							if(self.pagingCallback && typeof(self.pagingCallback) == 'function') {
								self.pagingCallback(parseInt(jQuery(this).attr('href').replace('#', '')));
								return false;
							}
						});
					}
					newElement.addClass('toePagingElement').html(i);
					this.paging.append(newElement);
					if(i%20 == 0 && i)
						this.paging.append('<br />');
				}
			}
		}
	};
	if(this.list)
		this.draw(this.list, this.count);
}

function setCookieGmp(c_name, value, exdays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var value_prepared = '';
	if(typeof(value) == 'array' || typeof(value) == 'object') {
		value_prepared = '_JSON:'+ JSON.stringify( value );
	} else {
		value_prepared = value;
	}
	var c_value = escape(value_prepared)+ ((exdays==null) ? "" : "; expires="+exdate.toUTCString())+ '; path=/';
	document.cookie = c_name+ "="+ c_value;
}

function getCookieGmp(name) {
	var parts = document.cookie.split(name + "=");
	if (parts.length == 2) {
		var value = unescape(parts.pop().split(";").shift());
		if(value.indexOf('_JSON:') === 0) {
			value = JSON.parse(value.split("_JSON:").pop());
		}
		return value;
	}
	return null;
}

function delCookieGmp( name ) {
  document.cookie = name+ '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function callUserFuncArray(cb, parameters) {
	// http://kevin.vanzonneveld.net
	// +   original by: Thiago Mata (http://thiagomata.blog.com)
	// +   revised  by: Jon Hohle
	// +   improved by: Brett Zamir (http://brett-zamir.me)
	// +   improved by: Diplom@t (http://difane.com/)
	// +   improved by: Brett Zamir (http://brett-zamir.me)
	// *     example 1: call_user_func_array('isNaN', ['a']);
	// *     returns 1: true
	// *     example 2: call_user_func_array('isNaN', [1]);
	// *     returns 2: false
	var func;

	if (typeof cb === 'string') {
		func = (typeof this[cb] === 'function') ? this[cb] : func = (new Function(null, 'return ' + cb))();
	}
	else if (Object.prototype.toString.call(cb) === '[object Array]') {
		func = (typeof cb[0] == 'string') ? eval(cb[0] + "['" + cb[1] + "']") : func = cb[0][cb[1]];
	}
	else if (typeof cb === 'function') {
		func = cb;
	}

	if (typeof func !== 'function') {
		throw new Error(func + ' is not a valid function');
	}

	return (typeof cb[0] === 'string') ? func.apply(eval(cb[0]), parameters) : (typeof cb[0] !== 'object') ? func.apply(null, parameters) : func.apply(cb[0], parameters);
}
jQuery.fn.zoom = function(level) {
	jQuery(this).data('zoom', level);
	return jQuery(this).css({
	/*	'zoom': level	// Didn't worked correctly for mobiles
	,*/	'-moz-transform': 'scale('+ level+ ')'
	,	'-moz-transform-origin': 'center center'
	,	'-o-transform': 'scale('+ level+ ')'
	,	'-o-transform-origin': 'center center'
	,	'-webkit-transform': 'scale('+ level+ ')'
	,	'-webkit-transform-origin': 'center center'
	,	'transform': 'scale('+ level+ ')'
	,	'transform-origin': 'center center'
	});
};
jQuery.fn.rotate = function(deg) {
	return jQuery(this).css({
		'-moz-transform':'rotate('+ deg+ 'deg)'
	,	'-webkit-transform':'rotate('+ deg+ 'deg)'
	,	'-o-transform':'rotate('+ deg+ 'deg)'
	,	'-ms-transform':'rotate('+ deg+ 'deg)'
	,	'transform': 'rotate('+ deg+ 'deg)'
	});
};
jQuery.fn.scrollWidth = function() {
	var inner = document.createElement('p');
	inner.style.width = "100%";
	inner.style.height = "200px";

	var outer = document.createElement('div');
	outer.style.position = "absolute";
	outer.style.top = "0px";
	outer.style.left = "0px";
	outer.style.visibility = "hidden";
	outer.style.width = "200px";
	outer.style.height = "150px";
	outer.style.overflow = "hidden";
	outer.appendChild (inner);

	document.body.appendChild (outer);
	var w1 = inner.offsetWidth;
	outer.style.overflow = 'scroll';
	var w2 = inner.offsetWidth;
	if (w1 == w2) w2 = outer.clientWidth;

	document.body.removeChild (outer);

	return (w1 - w2);
};
/**
 * Retrive worgmpess attach ID from image, using img classes
 * @param {htmlObj} img Image to get ID from
 */
function toeGetImgAttachId(img) {
	var classesStr = jQuery(img).attr('class')
	,	aid = 0;
	if(classesStr && classesStr != '') {
		var matches = classesStr.match(/wp-image-(\d+)/);
		if(matches && matches[1]) {
			aid = parseInt(matches[1]);
		}
	}
	return aid;
}
function toeGetHashParams() {
	var hashArr = window.location.hash.split('#')
	,	res = [];
	for(var i in hashArr) {
		if(hashArr[i] && hashArr[i] != '') {
			res.push(hashArr[i]);
		}
	}
	return res;
}
/*Replace text in DOM functions*/
// Reusable generic function
function traverseElement(el, regex, textReplacerFunc, to) {
    // script and style elements are left alone
    if (!/^(script|style)$/.test(el.tagName)) {
        var child = el.lastChild;
        while (child) {
            if (child.nodeType == 1) {
                traverseElement(child, regex, textReplacerFunc, to);
            } else if (child.nodeType == 3) {
                textReplacerFunc(child, regex, to);
            }
            child = child.previousSibling;
        }
    }
}

// This function does the replacing for every matched piece of text
// and can be customized to do what you like
function textReplacerFunc(textNode, regex, to) {
	textNode.data = textNode.data.replace(regex, to);
}

// The main function
function replaceWords(html, words) {
    var container = document.createElement("div");
    container.innerHTML = html;

    // Replace the words one at a time to ensure each one gets matched
	for(var replace in words) {
		traverseElement(container, new RegExp(replace, "g"), textReplacerFunc, words[ replace ]);
	}
    return container.innerHTML;
}
/*****/
function toeSelectText(element) {
    var doc = document
	,	text = jQuery(element).get(0)
	,	range, selection;
    if (doc.body.createTextRange) { //ms
        range = doc.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) { //all others
        selection = window.getSelection();
        range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}
jQuery.fn.animationDuration = function(seconds, isMili) {
	if(isMili) {
		seconds = parseFloat(seconds) / 1000;
	}
	var secondsStr = seconds+ 's';
	return jQuery(this).css({
		'webkit-animation-duration': secondsStr
	,	'-moz-animation-duration': secondsStr
	,	'-o-animation-duration': secondsStr
	,	'animation-duration': secondsStr
	});
};
/**
 * Convert Date string (in common - mm/dd/yyyy) - to miliseconds
 * @param {string} strDate date string
 * @return {int} miliseconds
 */
function gmpStrToMs(strDate) {
	var dateHours = strDate.split(' ');
	if(dateHours.length == 2) {
		strDate = dateHours[0]+ ' ';
		var hms = dateHours[1].split(':');

		for(var i = 0; i < 3; i++) {
			strDate += hms[ i ] ? hms[ i ] : '00';
			if(i < 2)
				strDate += ':';
		}
	}
	var date = new Date( str_replace(strDate, '-', '/') )
	,	res = 0;
	if(date) {
		res = date.getTime();
	}
	return res;
}
function twoArraysContainSameValue (arr1, arr2) {
	return arr2.some(function (v) {
		return arr1.indexOf(v) >= 0;
	});
}
// Simulates PHP's date function
Date.prototype.format=function(e){var t="";var n=Date.replaceChars;for(var r=0;r<e.length;r++){var i=e.charAt(r);if(r-1>=0&&e.charAt(r-1)=="\\"){t+=i}else if(n[i]){t+=n[i].call(this)}else if(i!="\\"){t+=i}}return t};Date.replaceChars={shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longDays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],d:function(){return(this.getDate()<10?"0":"")+this.getDate()},D:function(){return Date.replaceChars.shortDays[this.getDay()]},j:function(){return this.getDate()},l:function(){return Date.replaceChars.longDays[this.getDay()]},N:function(){return this.getDay()+1},S:function(){return this.getDate()%10==1&&this.getDate()!=11?"st":this.getDate()%10==2&&this.getDate()!=12?"nd":this.getDate()%10==3&&this.getDate()!=13?"rd":"th"},w:function(){return this.getDay()},z:function(){var e=new Date(this.getFullYear(),0,1);return Math.ceil((this-e)/864e5)},W:function(){var e=new Date(this.getFullYear(),0,1);return Math.ceil(((this-e)/864e5+e.getDay()+1)/7)},F:function(){return Date.replaceChars.longMonths[this.getMonth()]},m:function(){return(this.getMonth()<9?"0":"")+(this.getMonth()+1)},M:function(){return Date.replaceChars.shortMonths[this.getMonth()]},n:function(){return this.getMonth()+1},t:function(){var e=new Date;return(new Date(e.getFullYear(),e.getMonth(),0)).getDate()},L:function(){var e=this.getFullYear();return e%400==0||e%100!=0&&e%4==0},o:function(){var e=new Date(this.valueOf());e.setDate(e.getDate()-(this.getDay()+6)%7+3);return e.getFullYear()},Y:function(){return this.getFullYear()},y:function(){return(""+this.getFullYear()).substr(2)},a:function(){return this.getHours()<12?"am":"pm"},A:function(){return this.getHours()<12?"AM":"PM"},B:function(){return Math.floor(((this.getUTCHours()+1)%24+this.getUTCMinutes()/60+this.getUTCSeconds()/3600)*1e3/24)},g:function(){return this.getHours()%12||12},G:function(){return this.getHours()},h:function(){return((this.getHours()%12||12)<10?"0":"")+(this.getHours()%12||12)},H:function(){return(this.getHours()<10?"0":"")+this.getHours()},i:function(){return(this.getMinutes()<10?"0":"")+this.getMinutes()},s:function(){return(this.getSeconds()<10?"0":"")+this.getSeconds()},u:function(){var e=this.getMilliseconds();return(e<10?"00":e<100?"0":"")+e},e:function(){return"Not Yet Supported"},I:function(){var e=null;for(var t=0;t<12;++t){var n=new Date(this.getFullYear(),t,1);var r=n.getTimezoneOffset();if(e===null)e=r;else if(r<e){e=r;break}else if(r>e)break}return this.getTimezoneOffset()==e|0},O:function(){return(-this.getTimezoneOffset()<0?"-":"+")+(Math.abs(this.getTimezoneOffset()/60)<10?"0":"")+Math.abs(this.getTimezoneOffset()/60)+"00"},P:function(){return(-this.getTimezoneOffset()<0?"-":"+")+(Math.abs(this.getTimezoneOffset()/60)<10?"0":"")+Math.abs(this.getTimezoneOffset()/60)+":00"},T:function(){var e=this.getMonth();this.setMonth(0);var t=this.toTimeString().replace(/^.+ \(?([^\)]+)\)?$/,"$1");this.setMonth(e);return t},Z:function(){return-this.getTimezoneOffset()*60},c:function(){return this.format("Y-m-d\\TH:i:sP")},r:function(){return this.toString()},U:function(){return this.getTime()/1e3}}
;
if(typeof(GMP_DATA) == 'undefined')
	var GMP_DATA = {};
if(isNumber(GMP_DATA.animationSpeed))
    GMP_DATA.animationSpeed = parseInt(GMP_DATA.animationSpeed);
else if(jQuery.inArray(GMP_DATA.animationSpeed, ['fast', 'slow']) == -1)
    GMP_DATA.animationSpeed = 'fast';
GMP_DATA.showSubscreenOnCenter = parseInt(GMP_DATA.showSubscreenOnCenter);
var sdLoaderImgGmp = '<img src="'+ GMP_DATA.loader+ '" />';
var g_gmpAnimationSpeed = 300;

jQuery.fn.showLoaderGmp = function() {
    return jQuery(this).html( sdLoaderImgGmp );
};
jQuery.fn.appendLoaderGmp = function() {
    jQuery(this).append( sdLoaderImgGmp );
};
jQuery.sendFormGmp = function(params) {
	// Any html element can be used here
	return jQuery('<br />').sendFormGmp(params);
};
/**
 * Send form or just data to server by ajax and route response
 * @param string params.fid form element ID, if empty - current element will be used
 * @param string params.msgElID element ID to store result messages, if empty - element with ID "msg" will be used. Can be "noMessages" to not use this feature
 * @param function params.onSuccess funstion to do after success receive response. Be advised - "success" means that ajax response will be success
 * @param array params.data data to send if You don't want to send Your form data, will be set instead of all form data
 * @param array params.appendData data to append to sending request. In contrast to params.data will not erase form data
 * @param string params.inputsWraper element ID for inputs wraper, will be used if it is not a form
 * @param string params.clearMsg clear msg element after receive data, if is number - will use it to set time for clearing, else - if true - will clear msg element after 5 seconds
 */
jQuery.fn.sendFormGmp = function(params) {
    var form = null;
    if(!params)
        params = {fid: false, msgElID: false, onSuccess: false};

    if(params.fid)
        form = jQuery('#'+ fid);
    else
        form = jQuery(this);

    /* This method can be used not only from form data sending, it can be used just to send some data and fill in response msg or errors*/
    var sentFromForm = (jQuery(form).tagName() == 'FORM');
    var data = new Array();
    if(params.data)
        data = params.data;
    else if(sentFromForm)
        data = jQuery(form).serialize();

    if(params.appendData) {
		var dataIsString = typeof(data) == 'string';
		var addStrData = [];
        for(var i in params.appendData) {
			if(dataIsString) {
				if(toeInArray(typeof(params.appendData[i], ['object', 'array']))) {
					for(var j in params.appendData[i]) {
						addStrData.push(i+ '['+ j+ ']'+ '='+ params.appendData[i][j]);
					}
				} else {
					addStrData.push(i+ '='+ params.appendData[i]);
				}

			} else
				data[i] = params.appendData[i];
        }
		if(dataIsString)
			data += '&'+ addStrData.join('&');
    }
    var msgEl = null;
    if(params.msgElID) {
        if(params.msgElID == 'noMessages')
            msgEl = false;
        else if(typeof(params.msgElID) == 'object')
           msgEl = params.msgElID;
       else
            msgEl = jQuery('#'+ params.msgElID);
    }
	if(typeof(params.inputsWraper) == 'string') {
		form = jQuery('#'+ params.inputsWraper);
		sentFromForm = true;
	}
	if(sentFromForm && form) {
        jQuery(form).find('*').removeClass('gmpInputError');
    }
	if(msgEl && !params.btn) {
		jQuery(msgEl).removeClass('gmpSuccessMsg')
			.removeClass('gmpErrorMsg')
			.showLoaderGmp();
	}
	if(params.btn) {
		jQuery(params.btn).attr('disabled', 'disabled');
		// Font awesome usage
		params.btnIconElement = jQuery(params.btn).find('.fa').length ? jQuery(params.btn).find('.fa') : jQuery(params.btn);
		if(jQuery(params.btn).find('.fa').length) {
			params.btnIconElement
				.data('prev-class', params.btnIconElement.attr('class'))
				.attr('class', 'fa fa-spinner fa-spin');
		}
	}
    var url = '';
	if(typeof(params.url) != 'undefined')
		url = params.url;
    else if(typeof(ajaxurl) == 'undefined')
        url = GMP_DATA.ajaxurl;
    else
        url = ajaxurl;

    jQuery('.gmpErrorForField').hide(GMP_DATA.animationSpeed);
	var dataType = params.dataType ? params.dataType : 'json';
	// Set plugin orientation
	if(typeof(data) == 'string') {
		data += '&pl='+ GMP_DATA.GMP_CODE;
		data += '&reqType=ajax';
	} else {
		data['pl'] = GMP_DATA.GMP_CODE;
		data['reqType'] = 'ajax';
	}

    jQuery.ajax({
        url: url,
        data: data,
        type: 'POST',
        dataType: dataType,
        success: function(res) {
            toeProcessAjaxResponseGmp(res, msgEl, form, sentFromForm, params);
			if(params.clearMsg) {
				setTimeout(function(){
					if(msgEl)
						jQuery(msgEl).animateClear();
				}, typeof(params.clearMsg) == 'boolean' ? 5000 : params.clearMsg);
			}
        }
    });
};
/**
 * Hide content in element and then clear it
 */
jQuery.fn.animateClear = function() {
	var newContent = jQuery('<span>'+ jQuery(this).html()+ '</span>');
	jQuery(this).html( newContent );
	jQuery(newContent).hide(GMP_DATA.animationSpeed, function(){
		jQuery(newContent).remove();
	});
};
/**
 * Hide content in element and then remove it
 */
jQuery.fn.animateRemoveGmp = function(animationSpeed, onSuccess) {
	animationSpeed = animationSpeed == undefined ? GMP_DATA.animationSpeed : animationSpeed;
	jQuery(this).hide(animationSpeed, function(){
		jQuery(this).remove();
		if(typeof(onSuccess) === 'function')
			onSuccess();
	});
};
function toeProcessAjaxResponseGmp(res, msgEl, form, sentFromForm, params) {
    if(typeof(params) == 'undefined')
        params = {};
    if(typeof(msgEl) == 'string')
        msgEl = jQuery('#'+ msgEl);
    if(msgEl)
        jQuery(msgEl).html('');
	if(params.btn) {
		jQuery(params.btn).removeAttr('disabled');
		if(params.btnIconElement) {
			params.btnIconElement.attr('class', params.btnIconElement.data('prev-class'));
		}
	}
    /*if(sentFromForm) {
        jQuery(form).find('*').removeClass('gmpInputError');
    }*/
    if(typeof(res) == 'object') {
        if(res.error) {
            if(msgEl) {
                jQuery(msgEl).removeClass('gmpSuccessMsg')
					.addClass('gmpErrorMsg');
            }
			var errorsArr = [];
            for(var name in res.errors) {
                if(sentFromForm) {
					var inputError = jQuery(form).find('[name*="'+ name+ '"]');
                    inputError.addClass('gmpInputError');
					if(inputError.attr('placeholder')) {
						//inputError.attr('placeholder', res.errors[ name ]);
					}
					if(!inputError.data('keyup-error-remove-binded')) {
						inputError.keydown(function(){
							jQuery(this).removeClass('gmpInputError');
						}).data('keyup-error-remove-binded', 1);
					}
                }
                if(jQuery('.gmpErrorForField.toe_'+ nameToClassId(name)+ '').exists())
                    jQuery('.gmpErrorForField.toe_'+ nameToClassId(name)+ '').show().html(res.errors[name]);
                else if(msgEl)
                    jQuery(msgEl).append(res.errors[name]).append('<br />');
				else
					errorsArr.push( res.errors[name] );
            }
			if(errorsArr.length && params.btn) {
				jQuery('<div />').html( errorsArr.join('<br />') ).appendTo('body').dialog({
					modal: true
				,	width: '500px'
				});
			}
        } else if(res.messages.length) {
            if(msgEl) {
                jQuery(msgEl).removeClass('gmpErrorMsg')
					.addClass('gmpSuccessMsg');
                for(var i = 0; i < res.messages.length; i++) {
                    jQuery(msgEl).append(res.messages[i]).append('<br />');
                }
            }
        }
    }
    if(params.onSuccess && typeof(params.onSuccess) == 'function') {
        params.onSuccess(res);
    }
}

function getDialogElementGmp() {
	return jQuery('<div/>').appendTo(jQuery('body'));
}

function toeOptionGmp(key) {
	if(GMP_DATA.options && GMP_DATA.options[ key ] && GMP_DATA.options[ key ].value)
		return GMP_DATA.options[ key ].value;
	return false;
}
function toeLangGmp(key) {
	if(GMP_DATA.siteLang && GMP_DATA.siteLang[key])
		return GMP_DATA.siteLang[key];
	return key;
}
function toePagesGmp(key) {
	if(typeof(GMP_DATA) != 'undefined' && GMP_DATA[key])
		return GMP_DATA[key];
	return false;;
}
/**
 * This function will help us not to hide desc right now, but wait - maybe user will want to select some text or click on some link in it.
 */
function toeOptTimeoutHideDescriptionGmp() {
	jQuery('#gmpOptDescription').removeAttr('toeFixTip');
	setTimeout(function(){
		if(!jQuery('#gmpOptDescription').attr('toeFixTip'))
			toeOptHideDescriptionGmp();
	}, 500);
}
/**
 * Show description for options
 */
function toeOptShowDescriptionGmp(description, x, y, moveToLeft) {
    if(typeof(description) != 'undefined' && description != '') {
        if(!jQuery('#gmpOptDescription').length) {
            jQuery('body').append('<div id="gmpOptDescription"></div>');
        }
		if(moveToLeft)
			jQuery('#gmpOptDescription').css('right', jQuery(window).width() - (x - 10));	// Show it on left side of target
		else
			jQuery('#gmpOptDescription').css('left', x + 10);
        jQuery('#gmpOptDescription').css('top', y);
        jQuery('#gmpOptDescription').show(200);
        jQuery('#gmpOptDescription').html(description);
    }
}
/**
 * Hide description for options
 */
function toeOptHideDescriptionGmp() {
	jQuery('#gmpOptDescription').removeAttr('toeFixTip');
    jQuery('#gmpOptDescription').hide(200);
}
function toeInArrayGmp(needle, haystack) {
	if(haystack) {
		for(var i in haystack) {
			if(haystack[i] == needle)
				return true;
		}
	}
	return false;
}
function toeShowDialogCustomized(element, options) {
	options = jQuery.extend({
		resizable: false
	,	width: 500
	,	height: 300
	,	closeOnEscape: true
	,	open: function(event, ui) {
			jQuery('.ui-dialog-titlebar').css({
				'background-color': '#222222'
			,	'background-image': 'none'
			,	'border': 'none'
			,	'margin': '0'
			,	'padding': '0'
			,	'border-radius': '0'
			,	'color': '#CFCFCF'
			,	'height': '27px'
			});
			jQuery('.ui-dialog-titlebar-close').css({
				'background': 'url("'+ GMP_DATA.cssPath+ 'img/tb-close.png") no-repeat scroll 0 0 transparent'
			,	'border': '0'
			,	'width': '15px'
			,	'height': '15px'
			,	'padding': '0'
			,	'border-radius': '0'
			,	'margin': '7px 7px 0'
			}).html('');
			jQuery('.ui-dialog').css({
				'border-radius': '3px'
			,	'background-color': '#FFFFFF'
			,	'background-image': 'none'
			,	'padding': '1px'
			,	'z-index': '300000'
			,	'position': 'fixed'
			,	'top': '60px'
			});
			jQuery('.ui-dialog-buttonpane').css({
				'background-color': '#FFFFFF'
			});
			jQuery('.ui-dialog-title').css({
				'color': '#CFCFCF'
			,	'font': '12px sans-serif'
			,	'padding': '6px 10px 0'
			});
			if(options.openCallback && typeof(options.openCallback) == 'function') {
				options.openCallback(event, ui);
			}
			jQuery('.ui-widget-overlay').css({
				'z-index': jQuery( event.target ).parents('.ui-dialog:first').css('z-index') - 1
			,	'background-image': 'none'
			});
			if(options.modal && options.closeOnBg) {
				jQuery('.ui-widget-overlay').unbind('click').bind('click', function() {
					jQuery( element ).dialog('close');
				});
			}
		}
	}, options);
	return jQuery(element).dialog(options);
}
/**
 * @see html::slider();
 **/
function toeSliderMove(event, ui) {
    var id = jQuery(event.target).attr('id');
	var unit = jQuery(event.target).parent().find('[data-unit]').attr('data-unit');
	if(ui.value == 1) {
		jQuery('#toeSliderDisplay_'+ id).html( ui.value + ' ' + unit );
	} else {
		jQuery('#toeSliderDisplay_'+ id).html( ui.value + ' ' + unit + 's' );
	}

    jQuery('#toeSliderInput_'+ id).val( ui.value ).change();
}
function setBrowserUrl(url) {
	if (typeof (history.pushState) != 'undefined') {
        var obj = {Title: document.title, Url: url};
        history.pushState(obj, obj.Title, obj.Url);
    }
}
function createAjaxLinkGmp(param) {
	return GMP_DATA.ajaxurl+ '?'+ paramGmp(param);
}
function paramGmp(param) {
	var param = jQuery.extend({}, param);
	param['pl'] = GMP_DATA.GMP_CODE;
	return jQuery.param( param );
}
/* TinyMCE Editor */
function gmpGetTxtEditorVal(id) {
	var elem = jQuery('#'+ id)
	,	content = typeof(tinyMCE) !== 'undefined' && tinyMCE.get( id ) && !elem.is(':visible')
			? tinyMCE.get( id ).getContent()
			: elem.val();
	return content;
}
function gmpSetTxtEditorVal(id, content) {
	var elem = jQuery('#'+ id);

	if(typeof(tinyMCE) !== 'undefined' && tinyMCE && tinyMCE.get( id ) && !elem.is(':visible')) {
		tinyMCE.get( id ).setContent(content);
	} else {
		elem.val( content );
	}

}
;
var g_gmpLibJsLoaded = false;
function gmpLoadGoogleLib() {
	if(!g_gmpLibJsLoaded) {
		jQuery('head').append('<script src="'+ GMP_DATA.gmapApiUrl+ '"></script>');
		g_gmpLibJsLoaded = true;
	}
}
// Maps
function gmpGoogleMap(elementId, params, additionalData) {
	if(typeof(google) === 'undefined') {
		gmpLoadGoogleLib();
		//alert('Please check your Internet connection - we need it to load Google Maps Library from Google Server');
		//return false;
	}

	params = params ? params : {};
	additionalData = additionalData ? additionalData : {};
	var defaults = {
		center: new google.maps.LatLng(40.69847032728747, -73.9514422416687)
	,	zoom: 8
	//,	mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	if(params.map_center && params.map_center.coord_x && params.map_center.coord_y) {
		params.center = new google.maps.LatLng(params.map_center.coord_x, params.map_center.coord_y);
	}
	if(params.zoom) {
		params.zoom = parseInt(params.zoom);
	}
	if(!GMP_DATA.isAdmin && params.zoom_type == 'zoom_level' && params.zoom_mobile && jQuery(document).width() < 768) {
		params.zoom = parseInt(params.zoom_mobile);
	}
	if (typeof(elementId) === 'string') {
		elementId = jQuery(elementId)[0];
	}
	this._elementId = elementId;
	this._mapParams = jQuery.extend({}, defaults, params);
	this._mapObj = null;
	this._markers = [];
	this._shapes = [];
	this._heatmap = [];
	this._clasterer = null;
	this._clastererEnabled = false;
	this._clastererMarkersGroupsStyles = [];
	this._eventListeners = {};
	this._layers = {};
	this.mapMarkersGroups = additionalData.markerGroups ? additionalData.markerGroups : [];
	this.init();
}
gmpGoogleMap.prototype.init = function() {
	this._beforeInit();
	this._mapObj = new google.maps.Map(this._elementId, this._mapParams);
	this._afterInit();
};
gmpGoogleMap.prototype._beforeInit = function() {
	if(typeof(this._mapParams.type_control) !== 'undefined') {
		if(typeof(google.maps.MapTypeControlStyle[ this._mapParams.type_control ]) !== 'undefined') {
			this._mapParams.mapTypeControlOptions = {
				style: google.maps.MapTypeControlStyle[ this._mapParams.type_control ]
			};
			this._mapParams.mapTypeControl = true;
		} else {
			this._mapParams.mapTypeControl = false;
		}
	}
	if(typeof(this._mapParams.zoom_control) !== 'undefined') {
		if(typeof(google.maps.ZoomControlStyle[ this._mapParams.zoom_control ]) !== 'undefined') {
			this._mapParams.zoomControlOptions = {
				style: google.maps.ZoomControlStyle[ this._mapParams.zoom_control ]
			};
			this._mapParams.zoomControl = true;
		} else {
			this._mapParams.zoomControl = false;
		}
	}
	if(typeof(this._mapParams.street_view_control) !== 'undefined') {
		this._mapParams.streetViewControl = parseInt(this._mapParams.street_view_control) ? true : false;
	}
	if(typeof(this._mapParams.pan_control) !== 'undefined') {
		this._mapParams.panControl = parseInt(this._mapParams.pan_control) ? true : false;
	}
	if(typeof(this._mapParams.overview_control) !== 'undefined') {
		if(this._mapParams.overview_control !== 'none') {
			this._mapParams.overviewMapControlOptions = {
				opened: this._mapParams.overview_control === 'opened' ? true : false
			};
			this._mapParams.overviewMapControl = true;
		} else {
			this._mapParams.overviewMapControl = false;
		}
	}
	if(typeof(this._mapParams.dbl_click_zoom) !== 'undefined') {
		this._mapParams.disableDoubleClickZoom = parseInt(this._mapParams.dbl_click_zoom) ? false : true;	// False/true in revert order - because option actually is for disabling this feature
	}
	if(typeof(this._mapParams.mouse_wheel_zoom) !== 'undefined') {
		this._mapParams.scrollwheel = parseInt(this._mapParams.mouse_wheel_zoom) ? true : false;
	}
	if(typeof(this._mapParams.map_type) !== 'undefined'
		&& typeof(google.maps.MapTypeId[ this._mapParams.map_type ]) !== 'undefined'
	) {
		this._mapParams.mapTypeId = google.maps.MapTypeId[ this._mapParams.map_type ];
	}
	if(typeof(this._mapParams.map_stylization_data) !== 'undefined'
		&& this._mapParams.map_stylization_data
	) {
		this._mapParams.styles = this._mapParams.map_stylization_data;
	}
	jQuery(document).trigger('gmapBeforeMapInit', this);
};
gmpGoogleMap.prototype.getParams = function(){
	return this._mapParams;
};
gmpGoogleMap.prototype.getParam = function(key){
	return this._mapParams[ key ];
};
gmpGoogleMap.prototype.setParam = function(key, value){
	this._mapParams[ key ] = value;
	return this;
};
gmpGoogleMap.prototype._afterInit = function() {
	if(typeof(this._mapParams.marker_clasterer) !== 'undefined' && this._mapParams.marker_clasterer) {
		this.enableClasterization(this._mapParams.marker_clasterer);
	}
	this.applyZoomType();
	if(typeof(this._mapParams.zoom_min) !== 'undefined' && typeof(this._mapParams.zoom_max) !== 'undefined') {
		this._setMinZoomLevel();
		this._setMaxZoomLevel();
		this._fixZoomLevel();
	}
	this.resizeMapByHeight();
	jQuery(window).bind('resize', jQuery.proxy(this.resizeMapByHeight, this));
	jQuery(window).bind('orientationchange', jQuery.proxy(this.resizeMapByHeight, this));
	jQuery(document).trigger('gmapAfterMapInit', this);
};
gmpGoogleMap.prototype._setMinZoomLevel = function() {
	var curZoom = this.getZoom();
	var minZoom = parseInt(this._mapParams.zoom_min) ? parseInt(this._mapParams.zoom_min) : null;
	this.getRawMapInstance().setOptions({minZoom: minZoom});
	if(curZoom < minZoom)
		this.getRawMapInstance().setOptions({zoom: minZoom});
};
gmpGoogleMap.prototype._setMaxZoomLevel = function() {
	var maxZoom = parseInt(this._mapParams.zoom_max) ? parseInt(this._mapParams.zoom_max) : null;
	this.getRawMapInstance().setOptions({maxZoom: maxZoom});
	if(this.getRawMapInstance().zoom > maxZoom)
		this.getRawMapInstance().setOptions({zoom: maxZoom});
};
gmpGoogleMap.prototype._fixZoomLevel = function() {
	var eventHandle = this._getEventListenerHandle('zoom_changed', 'zoomChanged');
	if(!eventHandle) {
		eventHandle = google.maps.event.addListener(this.getRawMapInstance(), 'zoom_changed', jQuery.proxy(function(){
			var minZoom = parseInt(this.getParam('zoom_min'))
			,	maxZoom = parseInt(this.getParam('zoom_max'));
			if (this.getZoom() < minZoom) {
				this.setZoom(minZoom);
				if(GMP_DATA.isAdmin && this._getEventListenerHandle('idle', 'enableClasterization'))
					google.maps.event.trigger(this.getRawMapInstance(), 'idle');
			}
			if (this.getZoom() > maxZoom) {
				this.setZoom(maxZoom);
				if(GMP_DATA.isAdmin && this._getEventListenerHandle('idle', 'enableClasterization'))
					google.maps.event.trigger(this.getRawMapInstance(), 'idle');
			}
		}, this));
		this._addEventListenerHandle('zoom_changed', 'zoomChanged', eventHandle);
	}
};
gmpGoogleMap.prototype.enableClasterization = function(clasterType, needTrigger) {
	needTrigger = needTrigger ? needTrigger : false;

	switch(clasterType) {
		case 'MarkerClusterer':	// Support only this one for now
			var self = this;

			self.setClastererMarkersGroupsStyles();

			var eventHandle = google.maps.event.addListenerOnce(self.getRawMapInstance(), 'idle', function(a, b, c){
				var clasterGridSize = self.getParam('marker_clasterer_grid_size')
				,	markerGroupsStyles = self.getClastererMarkersGroupsStyles();

				// Enable clasterization
				var allMapMarkers = self.getAllRawMarkers()
				,	allVisibleMapMarkers = []
				,	clasterer = self.getClasterer();

				for(var i = 0; i < allMapMarkers.length; i++) {
					if(allMapMarkers[i].getVisible() && !parseInt(allMapMarkers[i].params.clasterer_exclude)) {
						allVisibleMapMarkers.push(allMapMarkers[i]);
					}
				}
				if(clasterer){
					clasterer.clearMarkers();
					clasterer.addMarkers( allVisibleMapMarkers );
					clasterer.setStyles( markerGroupsStyles );

					self.setClastererGridSize(clasterGridSize);

					clasterer.resetViewport();
					clasterer.redraw();
				} else {
					clasterer = new MarkerClusterer(self.getRawMapInstance(), allVisibleMapMarkers, { styles: markerGroupsStyles, clusterClass: "cluster" });

					clasterer.setCalculator(self.customClastererCalculatorFunction( markerGroupsStyles ));
					self.setClasterer(clasterer);
					self.setClastererGridSize(clasterGridSize);

					clasterer = self.getClasterer();
				}
			});
			this._addEventListenerHandle('idle', 'enableClasterization', eventHandle);
			if(GMP_DATA.isAdmin || needTrigger) {
				google.maps.event.trigger(self.getRawMapInstance(), 'idle');
			}
			this._clastererEnabled = true;
			break;
	}
};
gmpGoogleMap.prototype.disableClasterization = function() {
	var eventHandle = this._getEventListenerHandle('idle', 'enableClasterization');
	if(eventHandle) {
		var clasterer = this.getClasterer();
		if(clasterer) {
			clasterer.clearMarkers();
			var markers = this.getAllRawMarkers();
			for(var i = 0; i < markers.length; i++) {
				markers[i].setMap( this.getRawMapInstance() );
			}
		}
		google.maps.event.removeListener( eventHandle );
		google.maps.event.trigger(this.getRawMapInstance(), 'idle');
		this._clastererEnabled = false;
	}
};
gmpGoogleMap.prototype.customClastererCalculatorFunction = function(markerGroupsStyles) {
	return function(markers, numStyles) {
		var styleIndex = 1, markersGroupsStyles = markerGroupsStyles, markersGroupsIds = {}, maxCount = 0, groupId = 0, curStyle = [];

		for (var i = 0; i < markers.length; i++) {
			if (markers[i].marker_group_id) {
				if (typeof(markersGroupsIds[markers[i].marker_group_id]) == 'undefined') {
					markersGroupsIds[markers[i].marker_group_id] = 1;
				} else {
					markersGroupsIds[markers[i].marker_group_id]++;
				}
			}
		}
		for (var currGroupId in markersGroupsIds) {
			if (markersGroupsIds[currGroupId] > maxCount) {
				maxCount = markersGroupsIds[currGroupId];
				groupId = currGroupId;
			}
		}
		curStyle = jQuery.grep(markersGroupsStyles, function (e, i) {
			if (e.marker_group_id == groupId) {
				return e;
			}
		});

		if (curStyle && curStyle[0])
			styleIndex = markersGroupsStyles.indexOf(curStyle[0]) + 1;

		return {
			text: markers.length,
			index: styleIndex
		};
	}
};
gmpGoogleMap.prototype.getClasterer = function() {
	if(this._clasterer) {
		return this._clasterer;
	}
	return false;
};
gmpGoogleMap.prototype.setClasterer = function(clasterer) {
	this._clasterer = clasterer;
};
gmpGoogleMap.prototype.setMapMarkersGroups = function(groups) {
	this.mapMarkersGroups = groups;
};
gmpGoogleMap.prototype.getMapMarkersGroups = function() {
	return this.mapMarkersGroups;
};
gmpGoogleMap.prototype.setClastererMarkersGroupsStyles = function() {
	var mapMarkersGroups = this.getMapMarkersGroups()
	,	markersGroupsStyles = this.getClastererMarkersGroupsStyles()
	,	defClasterIcon = GMP_DATA.modPath + 'gmap/img/m1.png'
	,	oldDefClasterIcon = 'https://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m1.png'		// Prevent to use old default claster icon cdn icon because it is missing
	,	clasterIcon = this.getParam('marker_clasterer_icon')
	,	iconWidth = this.getParam('marker_clasterer_icon_width')
	,	iconHeight = this.getParam('marker_clasterer_icon_height');

	// Set claster base icon
	clasterIcon = clasterIcon && clasterIcon != oldDefClasterIcon ? clasterIcon : defClasterIcon;
	iconWidth = iconWidth ? iconWidth : 53;
	iconHeight = iconHeight ? iconHeight : 52;

	markersGroupsStyles.push({
		marker_group_id: 0
	,	url: clasterIcon
	,	width: iconWidth
	,	height: iconHeight
	});

	if(mapMarkersGroups) {
		for(var i = 0; i < mapMarkersGroups.length; i++) {
			var markerGroupId = mapMarkersGroups[i].id
			,	markerGroupClasterIcon = mapMarkersGroups[i].params.claster_icon
			,	markerGroupClasterIconWidth = mapMarkersGroups[i].params.claster_icon_width
			,	markerGroupClasterIconHeight = mapMarkersGroups[i].params.claster_icon_height;

			if(markerGroupClasterIcon && markerGroupClasterIcon != clasterIcon) {
				markersGroupsStyles.push({
					marker_group_id: markerGroupId
				,	url: markerGroupClasterIcon ? markerGroupClasterIcon : defClasterIcon
				,	width: markerGroupClasterIconWidth ? markerGroupClasterIconWidth : 53
				,	height: markerGroupClasterIconHeight ? markerGroupClasterIconHeight : 52
				, className: "cluster",
				});
			}
		}
	}
};
gmpGoogleMap.prototype.getClastererMarkersGroupsStyles = function() {
	return this._clastererMarkersGroupsStyles;
};
gmpGoogleMap.prototype.setClastererGridSize = function(size) {
	var clasterer = this.getClasterer();

	size = size && parseInt(size) ? parseInt(size) : null;

	if(clasterer && size) {
		clasterer.setGridSize(size);
	}
};
gmpGoogleMap.prototype.getClastererGridSize = function() {
	var clasterer = this.getClasterer()
		,	clusterGridSize = null;

	if(clasterer) {
		clusterGridSize =  clasterer.getGridSize();
	}
	return clusterGridSize;
};
/**
 * Should trigger after added or modified markers
 */
gmpGoogleMap.prototype.markersRefresh = function() {
	var clasterer = this.getClasterer();

	if(this._clastererEnabled && clasterer) {
		clasterer.clearMarkers();
		clasterer.addMarkers( this.getAllRawMarkers() );
	}
	jQuery(document).trigger('gmapAfterMarkersRefresh', this);
};
gmpGoogleMap.prototype._addEventListenerHandle = function(event, code, handle) {
	if(!this._eventListeners[ event ])
		this._eventListeners[ event ] = {};
	this._eventListeners[ event ][ code ] = handle;
};
gmpGoogleMap.prototype._getEventListenerHandle = function(event, code) {
	return this._eventListeners[ event ] && this._eventListeners[ event ][ code ]
		? this._eventListeners[ event ][ code ]
		: false;
};
gmpGoogleMap.prototype.getRawMapInstance = function() {
	return this._mapObj;
};
gmpGoogleMap.prototype.setCenter = function (lat, lng) {
	if(typeof lng == 'undefined'){
		this.getRawMapInstance().setCenter(lat);
	}else
		this.getRawMapInstance().setCenter(new google.maps.LatLng(lat, lng));
	return this;
};
gmpGoogleMap.prototype.getCenter = function () {
	return this.getRawMapInstance().getCenter();
};
gmpGoogleMap.prototype.setZoom = function (zoomLevel) {
	this.getRawMapInstance().setZoom(parseInt(zoomLevel));
};
gmpGoogleMap.prototype.getZoom = function () {
	return this.getRawMapInstance().getZoom();
};
gmpGoogleMap.prototype.getBounds = function () {
	return this.getRawMapInstance().getBounds();
};
gmpGoogleMap.prototype.fitBounds = function (bounds) {
	this.getRawMapInstance().fitBounds(bounds);
};
gmpGoogleMap.prototype.addMarker = function(params) {
	params.clusterClass = 'cluster';
	var newMarker = new gmpGoogleMarker(this, params);
	this._markers.push( newMarker );
	return newMarker;
};
gmpGoogleMap.prototype.addShape = function(params) {
	var newShape = new gmpGoogleShape(this, params);
	this._shapes.push( newShape );
	return newShape;
};
gmpGoogleMap.prototype.addHeatmap = function(params) {
	var heatmap = new gmpGoogleHeatmap(this, params);
	this._heatmap.push( heatmap );
	return heatmap;
};
gmpGoogleMap.prototype.addRouter = function(params) {
	var router = new gmpGoogleRouter(this, params);
	return router;
};
gmpGoogleMap.prototype.getMarkerById = function(id) {
	if(this._markers && this._markers.length) {
		for(var i in this._markers) {
			if(this._markers[i].getId && this._markers[i].getId() == id)
				return this._markers[ i ];
		}
	}
	return false;
};
gmpGoogleMap.prototype.getShapeById = function(id) {
	if(this._shapes && this._shapes.length) {
		for(var i in this._shapes) {
			if(this._shapes[ i ].getId() == id)
				return this._shapes[ i ];
		}
	}
	return false;
};
gmpGoogleMap.prototype.getHeatmap = function() {
	if(this._heatmap && this._heatmap.length) {
		// There is only one heatmap layer on the map
		return this._heatmap[0];
	}
	return false;
};
gmpGoogleMap.prototype.removeMarker = function(id) {
	var marker = this.getMarkerById( id );
	if(marker) {
		marker.removeFromMap();
	}
};
gmpGoogleMap.prototype.removeShape = function(id) {
	var shape = this.getShapeById( id );

	if(shape) {
		shape.removeFromMap();
	}
};
gmpGoogleMap.prototype.getAllMarkers = function() {
	return this._markers;
};
gmpGoogleMap.prototype.getAllShapes = function() {
	return this._shapes;
};
/**
 * Retrive original Map marker objects (Marker objects from Google API)
 */
gmpGoogleMap.prototype.getAllRawMarkers = function() {
	var res = [];
	if(this._markers && this._markers.length) {
		for(var i = 0; i < this._markers.length; i++) {
			res.push( this._markers[i].getRawMarkerInstance() );
		}
	}
	return res;
};
gmpGoogleMap.prototype.setMarkersParams = function(markers) {
	if(this._markers && this._markers.length) {
		for(var i = 0; i < this._markers.length; i++) {
			for(var j = 0; j < markers.length; j++) {
				if(this._markers[i].getId() == markers[j].id) {
					this._markers[i].setMarkerParams( markers[j] );
					break;
				}
			}
		}
	}

};
gmpGoogleMap.prototype.get = function(key) {
	return this.getRawMapInstance().get( key );
};
// Set option for RAW MAP
gmpGoogleMap.prototype.set = function(key, value) {
	this.getRawMapInstance().set( key, value );
	return this;
};
gmpGoogleMap.prototype.clearMarkers = function() {
	if(this._markers && this._markers.length) {
		for(var i = 0; i < this._markers.length; i++) {
			this._markers[i].setMap( null );
		}
		this._markers = [];
	}
};
gmpGoogleMap.prototype.clearMarkersByParam = function(param) {
	if(this._markers && this._markers.length) {
		for(var i = 0; i < this._markers.length; i++) {
			if(this._markers[i].getMarkerParam(param)) {
				this._markers[i].setMap( null );
				this._markers.splice(i, 1);
				this.clearMarkersByParam(param);
				break;
			}
		}
	}
};
gmpGoogleMap.prototype.clearShapes = function() {
	if(this._shapes && this._shapes.length) {
		for(var i = 0; i < this._shapes.length; i++) {
			this._shapes[i].setMap( null );
		}
		this._shapes = [];
	}
};
gmpGoogleMap.prototype.getViewId = function() {
	return this._mapParams.view_id;
};
gmpGoogleMap.prototype.getViewHtmlId = function() {
	return this._mapParams.view_html_id;
};
gmpGoogleMap.prototype.getId = function() {
	return this._mapParams.id;
};
gmpGoogleMap.prototype.refresh = function() {
	return google.maps.event.trigger(this.getRawMapInstance(), 'resize');
};
gmpGoogleMap.prototype.refreshWithCenter = (function(lat, lng, zoom) {
	var res = google.maps.event.trigger(this.getRawMapInstance(), 'resize');
	if(zoom) {
		this.setZoom(zoom);
	} else {
		this.setZoom(this.getZoom());
	}
	if(lat && lng) {
		this.setCenter(lat, lng);
	} else {
		this.setCenter(this.getCenter().lat(), this.getCenter().lng());
	}
	return res;
});
gmpGoogleMap.prototype.fullRefresh = function() {
	this.refresh();
	this.checkMarkersParams(this._markers, false);
	this.setCenter( this._mapParams.center );
};
gmpGoogleMap.prototype.checkMarkersParams = function(markers, needToShow) {
	if(markers && markers.length) {
		for (var i = 0; i < markers.length; i++) {
			var markerParams = markers[i].getMarkerParam('params')
			,	showDescription = parseInt(markerParams.show_description);
			if(showDescription || needToShow) {
				markers[i].showInfoWnd( true, showDescription );
			}
		}
	}
};
gmpGoogleMap.prototype.resizeMapByHeight = function(e, elem, withoutAfter) {
	if(!GMP_DATA.isAdmin && parseInt(this.getParam('adapt_map_to_screen_height')) && this.getRawMapInstance().map_display_mode != 'popup') {
		var viewId = this.getParam('view_id')
		,	selectors = this.getParam('selectors')
		,	windowObj = jQuery(window)
		,	mapContainer = jQuery('#gmpMapDetailsContainer_' + viewId)
		,	mapContainerWrap = jQuery('#mapConElem_' + viewId)
		,	height;

		withoutAfter = withoutAfter ? withoutAfter : (mapContainerWrap.data('rmh-without-after') ? mapContainerWrap.data('rmh-without-after') : false);
		elem = elem ? elem : (mapContainerWrap.data('rmh-additional-elem') ? jQuery(mapContainerWrap.data('rmh-additional-elem')) : null);

		if(!selectors || (!selectors.content_before && !selectors.content_after)) {
			var mapContainerOffset = mapContainer.length ? mapContainer.offset() : false
			,	windowHeight = windowObj.height();
			height = mapContainerOffset.top < windowHeight ? windowHeight - mapContainerOffset.top : windowHeight;
		} else {
			var viewportData = this.getViewportData(0, withoutAfter)
			,	proControlsCon = jQuery('#gmpMapProControlsCon_'+ viewId);
			height = viewportData.height;
			mapContainer.parents('.gmp_map_opts:first').css({
				'position': 'fixed'
			,	'top': viewportData.contentBeforeHeight
			,	'left': '0'
			,	'width': windowObj.width()
			,	'height': height
			,	'z-index': 1
			});
			if(proControlsCon.find('.gmpMarkersListCollapseShell').length) {
				mapContainer.parents('.gmp_map_opts:first').css({
					'overflow-x': 'hidden'
				,	'overflow-y': 'auto'
				});
			}
			jQuery(selectors.content_before).css({
				'z-index': 2
			});
			if(!withoutAfter) {
				jQuery(selectors.content_after).css({
					'position': 'fixed'
				,	'bottom': '0'
				,	'left': '0'
				,	'width': windowObj.width()
				,	'z-index': 1
				});
			}
			if(elem && elem.length) {
				height -= elem.outerHeight(true);
			}
		}
		jQuery('#gmpMapDetailsContainer_' + viewId + ', #' + this.getParam('view_html_id')).each(function () {
			jQuery(this).height(height);
		});
		this.refresh();
	}
};
gmpGoogleMap.prototype.getViewportData = function(additionalHeight, withoutAfter) {
	withoutAfter = withoutAfter ? withoutAfter : false;
	additionalHeight = additionalHeight ? additionalHeight : 0;
	var selectors = this.getParam('selectors')
	,	adminBar = jQuery('#wpadminbar')	// fix for pages with admin bar
	,	viewportData = {
		height: jQuery(window).height(),
		contentBeforeHeight: 0,
		contentAfterHeight: 0
	}
	,	i;

	if(typeof selectors !== 'undefined' && selectors != null) {
		var contentBefore = typeof selectors.content_before !== 'undefined' ? jQuery(selectors.content_before) : 0
		,	contentAfter = typeof selectors.content_after !== 'undefined' ? jQuery(selectors.content_after) : 0;

		if(adminBar.length) {
			viewportData.contentBeforeHeight += adminBar.outerHeight(true);
		}
		if(contentBefore.length) {
			for(i = 0; i < contentBefore.length; i++) {
				viewportData.contentBeforeHeight += jQuery(contentBefore[i]).outerHeight(true);
			}
		}
		if(contentAfter.length && !withoutAfter) {
			for(i = 0; i < contentAfter.length; i++) {
				viewportData.contentAfterHeight += jQuery(contentAfter[i]).outerHeight(true);
			}
		}
	}
	viewportData.height = viewportData.height - viewportData.contentBeforeHeight - viewportData.contentAfterHeight - additionalHeight;
	return viewportData;
};
gmpGoogleMap.prototype.applyZoomType = function() {
	if(!GMP_DATA.isAdmin && this.getParam('zoom_type') == 'fit_bounds') {
		var eventHandle = google.maps.event.addListenerOnce(this.getRawMapInstance(), 'tilesloaded', jQuery.proxy(this._getBoundsHandler, this));
		this._addEventListenerHandle('tilesloaded', 'fitBounds', eventHandle);
	}
};
gmpGoogleMap.prototype.applyZoomTypeAdmin = function() {
	if(GMP_DATA.isAdmin && this.getParam('zoom_type') == 'fit_bounds') {
		// Call applyZoomTypeAdmin after refresh all map objects in admin area (markers, shapes, etc.)
		this._getBoundsHandler();
	}
};
// Free version of method
// see pro version here - google-maps-easy-pro/add_map_options/js/core.add_map_options.js
gmpGoogleMap.prototype._getBoundsHandler = function(){
	var bounds = new google.maps.LatLngBounds();

	bounds = this._getMapMarkersBounds(bounds);
	this._setMapBounds(bounds);
};
gmpGoogleMap.prototype._getMapMarkersBounds = function(bounds){
	var markers = this.getAllMarkers();

	for (var i = 0; i < markers.length; i++) {
		bounds.extend(markers[i].getPosition());
	}
	return bounds;
};
gmpGoogleMap.prototype._setMapBounds = function(bounds){
	// fit bounds only if map has more than one object
	if(!bounds.getNorthEast().equals(bounds.getSouthWest())) {
		this.fitBounds(bounds);
	}
};

// Common functions
var g_gmpGeocoder = null;
jQuery.fn.mapSearchAutocompleateGmp = function(params) {
	params = params || {};

    jQuery(this).keyup(function(event){
		// Ignore tab, enter, caps, end, home, arrows
		if(toeInArrayGmp(event.keyCode, [9, 13, 20, 35, 36, 37, 38, 39, 40])) return;
		var searchData = jQuery.trim(jQuery(this).val());

		if(searchData && searchData != '') {
			if(typeof(params.msgEl) === 'string') {
				params.msgEl = jQuery(params.msgEl);
			}
			params.msgEl.showLoaderGmp();
			var self = this;

			jQuery(this).autocomplete(jQuery.extend({}, params.autocompleteParams, {
				source: function(request, response) {
					var autocomleateData = typeof(params.additionalData) != 'undefined' ? gmpAutocomleateData(params.additionalData, request.term) : []
					,	geocoder = gmpGetGeocoder()
					,	geocoderData = { 'address': searchData };

					if(typeof(params.geocoderParams) != 'undefined' && params.geocoderParams) {
						geocoderData = jQuery.extend({}, geocoderData, params.geocoderParams)
					}
					geocoder.geocode(geocoderData, function(results, status) {
						params.msgEl.html('');

						if(status == google.maps.GeocoderStatus.OK && results.length) {
							for(var i = 0; i < results.length; i++) {
								autocomleateData.push({
									label: results[i].formatted_address
								,	lat: results[i].geometry.location.lat()
								,	lng: results[i].geometry.location.lng()
								,	category: toeLangGmp('Plases')
								});
							}
							response(autocomleateData);
						} else {
							if(autocomleateData) {
								response(autocomleateData);
							} else {
								//var notFoundMsg = toeLangGmp('Google can\'t find requested address coordinates, please try to modify search criterias.');
								var notFoundMsg = toeLangGmp('Nothing was found');

								if(jQuery(self).parent().find('.ui-helper-hidden-accessible').length) {
									jQuery(self).parent().find('.ui-helper-hidden-accessible').html(notFoundMsg);
								} else {
									params.msgEl.html(notFoundMsg);
								}
							}
						}
					});
				}
			,	select: function(event, ui) {
					if(params.onSelect) {
						params.onSelect(ui.item, event, ui);
					}
				}
			}));

			// Force imidiate search right after creation
			jQuery(this).autocomplete('search');
		}
	});
};
function gmpAutocomleateData(data, needle) {
	var autocomleateData = [];

	for(var i = 0; i < data.length; i++) {
		for(var j = 0; j < data[i].length; j++) {
			if(data[i][j]) {
				var label = data[i][j].label.toString().toLowerCase()
				,	desc = data[i][j].marker_desc != 'undefined' ? data[i][j].marker_desc : ''
				,	term = needle.toLowerCase();

				if(label.indexOf(term) !== -1 || (desc && desc.indexOf(term) !== -1)) {
					autocomleateData.push(data[i][j]);
				}
			}
		}
	}
	return autocomleateData;
}
function gmpGetGeocoder() {
	if(!g_gmpGeocoder) {
		g_gmpGeocoder = new google.maps.Geocoder();
	}
	return g_gmpGeocoder;
}
function changeInfoWndType(map) {

	//This is a standart google maps api class
	var infowndContent = jQuery('#'+ map._elementId.id).find('.gm-style-iw')
	,	type = map.getParam('marker_infownd_type')
	,	hideInfoWndBtn = parseInt(map.getParam('marker_infownd_hide_close_btn'));
	switch(type) {
		case '':
		if(infowndContent && infowndContent.length) {
			infowndContent.each(function() {
				var $this = jQuery(this)
				,	wndBody = $this.prev().children().last()
				,	wndBodyShadow = $this.prev().children(':nth-child(2)')
				,	wndTail = $this.prev().children(':nth-child(3)')
				,	wndTailShadow = $this.prev().children().first();
				$this.css({
					'border-radius': '0px'
				});
			});
		}
		break;
		case 'rounded_edges':
			if(infowndContent && infowndContent.length) {
				infowndContent.each(function() {
					var $this = jQuery(this)
					,	wndBody = $this.prev().children().last()
					,	wndBodyShadow = $this.prev().children(':nth-child(2)')
					,	wndTail = $this.prev().children(':nth-child(3)')
					,	wndTailShadow = $this.prev().children().first();

					if(hideInfoWndBtn !== 0) {
						//$this.next('div').hide();
						$this.find(".gm-ui-hover-effect").hide();
					}
					$this.find('.gmpInfoWindowtitle').css({
						'padding': '0'
					,	'left': '0'
					});
					wndBody.css({
						'border-radius': '10px'
					});
					wndBodyShadow.css({
						'background-color': 'transparent',
						'-moz-box-shadow': 'none',
						'-webkit-box-shadow': 'none',
						'box-shadow': 'none'
					});
					wndTail.children().each(function(index) {
						var $this = jQuery(this)
						,	degrees = !index ? 'skewX(50.6deg)' : 'skewX(-50.6deg)'
						,	left = !index ? '-2px' : '0';

						$this.css({
							'height': '15px'
						});
						$this.children().css({
							'width': '20px'
						,	'left': left
						,	'transform': degrees
						,	'-moz-box-shadow': 'none'
						,	'-webkit-box-shadow': 'none'
						,	'box-shadow': 'none'
						});
					});
					wndTailShadow.css({
						'border-right': 'none'
					,	'border-left': 'none'
					,	'border-top': 'none'
					,	'left': '38px'
					,	'top': '74px'
					});
				});
			}
			break;
		default:
			break;
	}
}
function changeInfoWndBgColor(map) {
	g_gmpMarkerBgColorTimeoutSet = false;
	var color = map.getParam('marker_infownd_bg_color');

	//This is a standart google maps api class
	var infowndContent = jQuery('#'+ map._elementId.id).find('.gm-style-iw'),
		styleId = 'gmpInfoWindowStyle';

	if(infowndContent && infowndContent.length) {
		infowndContent.each(function() {
			var wndBody = jQuery(this).prev().children().last()
			,	wndTail = jQuery(this).prev().children(':nth-child(3)').children().last();
			//wndBody.css('background-color', color);
			//wndTail.prev().children().last().css('background-color', color);
			//wndTail.children().css('background-color', color);
			infowndContent.css('background-color', color);
			infowndContent.prev().children().last().css('background-color', color);
			infowndContent.children().css('background-color', color);
			var styleTag = jQuery('#'+styleId),
				styles = '.gm-style-iw-t::after { background:'+color+' !important; }';

			styles += '.gm-style .gm-style-iw-d::-webkit-scrollbar-track, .gm-style .gm-style-iw-d::-webkit-scrollbar-track-piece { background: '+color+' !important; }';
			if(styleTag.length) {
				styleTag.html(styles);
			} else {
				jQuery('<style>'+styles+'</style>').attr('id', styleId).appendTo('head');
			}
		});
	}
}

window.gmpGoogleMap = gmpGoogleMap;
;
// Markers
function gmpGoogleMarker(map, params) {
	this._map = map;
	this._markerObj = null;
	var defaults = {
		// Empty for now
	};
	if(!params.position && params.coord_x && params.coord_y) {
		params.position = new google.maps.LatLng(params.coord_x, params.coord_y);
	}
	this._markerParams = jQuery.extend({}, defaults, params);
	this._markerParams.map = this._map.getRawMapInstance();
	//this._id = params.id ? params.id : 0;
	this._infoWindow = null;
	this._infoWndOpened = false;
	this._infoWndWasInited = false;
	this._infoWndDirectionsBtn = false;
	this._infoWndPrintBtn = false;
	this._mapDragScroll = {
		scrollwheel: null
	};
	this.init();
}
gmpGoogleMarker.prototype.infoWndOpened = function() {
	return this._infoWndOpened;
};
gmpGoogleMarker.prototype.init = function() {
	var markerParamsForCreate = this._markerParams
	,	openInfoWndEvent = 'click'
	,	closeInfoWndEvent = ''
	,	openLinkEvent = 'click';

	if(parseInt(this._map._mapParams.hide_marker_tooltip)) {
		this._markerParams.marker_title = this._markerParams.title;
		delete markerParamsForCreate.title;
	}
	this._markerObj = new google.maps.Marker( markerParamsForCreate );
	if(this._markerParams.dragend) {
		this._markerObj.addListener('dragend', jQuery.proxy(this._markerParams.dragend, this));
	}
	if(this._markerParams.click) {
		this._markerObj.addListener('click', jQuery.proxy(this._markerParams.click, this));
	}
	this._markerObj.addListener('domready', jQuery.proxy(function(){
		changeInfoWndBgColor(this._map);
	}, this));
	if(this._markerParams.params && !(window.ontouchstart === null || navigator.msMaxTouchPoints)) {
		if(parseInt(this._markerParams.params.description_mouse_hover)) {
			openInfoWndEvent = 'mouseover';
			if(parseInt(this._markerParams.params.description_mouse_leave)) {
				closeInfoWndEvent = 'mouseout';
			}
		}
	}
	this._markerObj.addListener(openInfoWndEvent, jQuery.proxy(function () {
		if(this._markerParams.params
			&& !parseInt(this._markerParams.params.description_mouse_hover)
			&& parseInt(this._markerParams.params.marker_link)
		) {
			return;
		} else {
			this.showInfoWnd();
		}
        jQuery(document).trigger('gmapAfterMarkerClick', this);
	}, this));
	if(closeInfoWndEvent) {
		this._markerObj.addListener(closeInfoWndEvent, jQuery.proxy(function () {
			var self = this
			,	infoWndDiv = jQuery('.gm-style-iw').parent()
			,	timeout = 300;

			infoWndDiv.on('mouseover', function () {
				// Mouse is on infowindow content
				infoWndDiv.addClass('hovering');
			});
			infoWndDiv.on('mouseleave', function () {
				// Hide infowindow after mouse have left infowindow content
				setTimeout(function() {
					self.hideInfoWnd();
				}, timeout);
			});
			setTimeout(function() {
				// Hide infowindow if mouse is not on infowindow content
				if(!infoWndDiv.hasClass('hovering')) {
					self.hideInfoWnd();
				}
			}, timeout);
		}, this));
	}
	if(this._markerParams.params && parseInt(this._markerParams.params.marker_link)) {
		this._markerObj.addListener(openLinkEvent, jQuery.proxy(function () {
			var isLink = /http/gi
			,	markerLink = !this._markerParams.params.marker_link_src.match(isLink)
					? 'http://' + this._markerParams.params.marker_link_src
					: this._markerParams.params.marker_link_src;

			if(parseInt(this._markerParams.params.marker_link_new_wnd)) {
				window.open(markerLink,	'_blank');
			} else {
				location.href = markerLink;
			}
		}, this));
	}
};
gmpGoogleMarker.prototype.showInfoWnd = function( forceUpdateInfoWnd, forceShow ) {
	var allShapes = this._map.getAllShapes();
	if(allShapes && allShapes.length) {
		for(var i = 0; i < allShapes.length; i++) {
			if(allShapes[i]._infoWndOpened) allShapes[i].hideInfoWnd();
		}
	}
	if(!this._infoWndWasInited || forceUpdateInfoWnd) {
		this._updateInfoWndContent();
		this._infoWndWasInited = true;
	}
	if(this._infoWindow && !this._infoWndOpened) {
		var allMapMArkers = this._map.getAllMarkers();
		// Google Maps Javascript API v3 allows to open several infowindows on map
		if(allMapMArkers && allMapMArkers.length > 1 && !forceShow) {
			for(var i = 0; i < allMapMArkers.length; i++) {
				allMapMArkers[i].hideInfoWnd();
			}
		}
		if(parseInt(this.getMap().getParam('center_on_cur_marker_infownd')) && !GMP_DATA.isAdmin) {
			this.getMap().setCenter(this.getMarkerParam('position'));
		}
		if(this._map.getParam('marker_infownd_type') == 'slide' && (typeof(this.showInfoWndSlide) == 'function')) {
			this.showInfoWndSlide();
		} else {
			this._infoWindow.open(this._map.getRawMapInstance(), this._markerObj);
		}
		this._infoWndOpened = true;
	}
};
gmpGoogleMarker.prototype.hideInfoWnd = function() {
	if(this._infoWindow && this._infoWndOpened) {
		this._infoWindow.close();
		this._infoWndOpened = false;

		var googleMap = this._map.getRawMapInstance();
		googleMap.setOptions( {scrollwheel: this._mapDragScroll.scrollwheel} );

		jQuery(document).trigger('gmapAfterHideInfoWnd', this);
	}
};
gmpGoogleMarker.prototype.getRawMarkerInstance = function() {
	return this._markerObj;
};
gmpGoogleMarker.prototype.getRawMarkerParams = function() {
	return this._markerParams;
};
gmpGoogleMarker.prototype.getIcon = (function() {
	return this._markerObj.getIcon();
});
gmpGoogleMarker.prototype.setIcon = function(iconPath) {
	this._markerObj.setIcon( iconPath );
};
gmpGoogleMarker.prototype.setTitle = function(title, noRefresh) {
	if(!parseInt(this._map._mapParams.hide_marker_tooltip))
		this._markerObj.setTitle( title );
	this._markerParams.title = title;
	if(!noRefresh)
		this._updateInfoWndContent();
};
gmpGoogleMarker.prototype.getTitle = function() {
	return typeof this._markerParams.title != 'undefined' ? this._markerParams.title : this._markerParams.marker_title;
};
gmpGoogleMarker.prototype.getPosition = function() {
	return this._markerObj.getPosition();
};
gmpGoogleMarker.prototype.setPosition = function(lat, lng) {
	this._markerObj.setPosition( new google.maps.LatLng(lat, lng) );
};
gmpGoogleMarker.prototype.lat = function() {
	return this.getPosition().lat();
};
gmpGoogleMarker.prototype.lng = function(lng) {
	return this.getPosition().lng();
};
gmpGoogleMarker.prototype.setId = function(id) {
	this._markerParams.id = id;
};
gmpGoogleMarker.prototype.getId = function() {
	return this._markerParams.id;
};
gmpGoogleMarker.prototype.setDescription = function (description, noRefresh) {
	this._markerParams.description = description;
	if(!noRefresh)
		this._updateInfoWndContent();
	if(this._markerParams.params && parseInt(this._markerParams.params.show_description)) {
		this.showInfoWnd(false, true);
	}
};
gmpGoogleMarker.prototype.getDescription = function () {
	return this._markerParams.description;
};
gmpGoogleMarker.prototype._setTitleColor = function(titleDiv) {
	var titleColor = this._map.getParam('marker_title_color');

	if(titleColor && titleColor != '') {
		titleDiv.css({
			'color': titleColor
		});
	}
	return titleDiv;
};
gmpGoogleMarker.prototype._setTitleSize = function(titleDiv) {
	var titleSize = this._map.getParam('marker_title_size')
	,	titleSizeUnits = this._map.getParam('marker_title_size_units');

	if(titleSize && titleSizeUnits && titleSize != '') {
		titleDiv.css({
			'font-size': titleSize + titleSizeUnits
		,	'line-height': (+titleSize + 5) + titleSizeUnits
		});
	}
	return titleDiv;
};
gmpGoogleMarker.prototype._setDescSize = function(descDiv) {
	var descSize = this._map.getParam('marker_desc_size')
	,	descSizeUnits = this._map.getParam('marker_desc_size_units');

	if(descSize && descSizeUnits && descSize != '') {
		descDiv.css({
			'font-size': descSize + descSizeUnits
		,	'line-height': parseInt(descSize) + 5 + descSizeUnits
		});
	}
	return descDiv;
};
gmpGoogleMarker.prototype._updateInfoWndContent = function() {
	var contentStr = jQuery('<div/>', {})
	,	description = this._markerParams.description ? this._markerParams.description.replace(/\n/g, '<br/>') : false
	,	title = this._markerParams.title ? this._markerParams.title : false;

	if(parseInt(this._map._mapParams.hide_marker_tooltip) && !GMP_DATA.isAdmin) {
		title = this._markerParams.marker_title ? this._markerParams.marker_title : false;
	}
	if(title) {
		var titleDiv = jQuery('<div/>', {})
			.addClass('gmpInfoWindowtitle')
			.html( title );

		titleDiv = this._setTitleColor(titleDiv);
		titleDiv = this._setTitleSize(titleDiv);
		contentStr.append( titleDiv );

		if(this._infoWndDirectionsBtn) {
			this._infoWndDirectionsBtn.insertAfter(contentStr.find('.gmpInfoWindowtitle'));
		}
		if(this._infoWndPrintBtn) {
			this._infoWndPrintBtn.insertAfter(contentStr.find('.gmpInfoWindowtitle'));
		}
	}
	if(description) {
		var descDiv = jQuery('<div/>', {})
			.addClass('egm-marker-iw')
			.html( description );

		descDiv = this._setDescSize(descDiv);
		contentStr.append( descDiv );

		// Check scripts in description, and execute them if they are there
		var $scripts = contentStr.find('script');
		if($scripts && $scripts.length) {
			$scripts.each(function(){
				var scriptSrc = jQuery(this).attr('src');
				if(scriptSrc && scriptSrc != '') {
					jQuery.getScript( scriptSrc );
				}
			});
		}
	}
	this._setInfoWndContent( contentStr );
};
/**
 * Just mark it as closed
 */
gmpGoogleMarker.prototype._setInfoWndClosed = function() {
	this._infoWndOpened = false;
	jQuery(document).trigger('gmapAfterHideInfoWnd', this);
};
gmpGoogleMarker.prototype._setInfoWndContent = function(newContentHtmlObj) {
	var self = this
	,	map = this.getMap();

	if(!this._infoWindow) {
		var mapWidth = GMP_DATA.isAdmin ? jQuery('#gmpMapPreview').width() : jQuery('#' + map.getViewHtmlId()).width()
		,	infoWndType = map.getParam('marker_infownd_type')
		,	infoWndWidth = map.getParam('marker_infownd_width_units') == 'px' ? map.getParam('marker_infownd_width') : mapWidth - 20
		,	infoWndHeight = map.getParam('marker_infownd_height_units') == 'px' ? map.getParam('marker_infownd_height')+ 'px' : false
		,	maxWndWidth = mapWidth * 0.6
		,	infoWndParams = { maxWidth: infoWndWidth < maxWndWidth ? infoWndWidth : maxWndWidth };

		switch(infoWndType) {
			case 'rounded_edges':
				infoWndParams.pixelOffset = new google.maps.Size(0, 10);
				break;
			default:
				break;
		}

		//add disableAutoPan property if description_mouse_leave is true
		/*if(this._markerParams.params && this._markerParams.params.description_mouse_leave)
			infoWndParams['disableAutoPan'] = true;*/

		this._infoWindow = new google.maps.InfoWindow(infoWndParams);

		google.maps.event.addListener(this._infoWindow, 'domready', function(){
			changeInfoWndType(map);
			changeInfoWndBgColor(map);
			// check if tooltip text has "Gallery by Supsystic"
			if(this.content && this.content.innerHTML && this.content.innerHTML.indexOf && this.content.innerHTML.indexOf('id="grid-gallery-') != -1) {
				jQuery(document).trigger('ggFirInitialize');
			}
		});
		google.maps.event.addListener(this._infoWindow, 'closeclick', function(){
			self._setInfoWndClosed();
		});
	}
	if(infoWndHeight) {
		newContentHtmlObj.css('cssText', 'max-height: '+ infoWndHeight +';');
	}

	// Fix bug in FF - scroll on infowindow content changes map zoom
	var scrollwheel = map.get('scrollwheel')
	,	googleMap = map.getRawMapInstance();

	//Save scrollwheel setting to container before rewrite it.
	this._mapDragScroll.scrollwheel = scrollwheel;

	newContentHtmlObj.hover(
		function() {
			googleMap.setOptions({ scrollwheel: false });
		},
		function() {
			googleMap.setOptions({ scrollwheel: scrollwheel });
		}
	);
	this._infoWindow.setContent(newContentHtmlObj[0]);
};
gmpGoogleMarker.prototype.removeFromMap = function() {
	this.getRawMarkerInstance().setMap( null );
};
gmpGoogleMarker.prototype.setMarkerParams = function(params) {
	this._markerParams = params;
	return this;
};
gmpGoogleMarker.prototype.setMarkerParam = function(key, value) {
	this._markerParams[ key ] = value;
	return this;
};
gmpGoogleMarker.prototype.getMarkerParam = function(key) {
	return this._markerParams[ key ];
};
gmpGoogleMarker.prototype.setMap = function( map ) {
	this.getRawMarkerInstance().setMap( map );
};
gmpGoogleMarker.prototype.getMap = function() {
	return this._map;
};
gmpGoogleMarker.prototype.setVisible = function(state) {
	this.getRawMarkerInstance().setVisible(state);
}
gmpGoogleMarker.prototype.getVisible = function(state) {
	this.getRawMarkerInstance().getVisible(state);
}
// Common functions
function _gmpPrepareMarkersList(markers, params) {
	params = params || {};
	if(markers) {
		for(var i = 0; i < markers.length; i++) {
			markers[i].coord_x = parseFloat( markers[i].coord_x );
			markers[i].coord_y = parseFloat( markers[i].coord_y );
			markers[i].icon = markers[i].icon_data.path;
			if(params.dragend) {
				markers[i].draggable = true;
				markers[i].dragend = params.dragend;
			}
		}
	}
	return markers;
}

window.gmpGoogleMarker = gmpGoogleMarker;
;
var g_gmpAllMaps = [];
jQuery(document).ready(function(){
	var mapsInitClb = function() {
		if(typeof(gmpAllMapsInfo) !== 'undefined' && gmpAllMapsInfo && gmpAllMapsInfo.length) {
			for(var i = 0; i < gmpAllMapsInfo.length; i++) {
				if(jQuery('#'+ gmpAllMapsInfo[i].view_html_id).length) {
					gmpInitMapOnPage( gmpAllMapsInfo[i] );
				}
			}
			jQuery(document).trigger('gmpAmiVarInited');
		}
	};
	if(typeof(google) === 'undefined' 
		&& typeof(gmpLoadGoogleLib) !== 'undefined'	// Maybe it's just a static maps here - can do it without google lib
	) {
		gmpLoadGoogleLib();
		setTimeout(mapsInitClb, 1000);
	} else {
		mapsInitClb();
	}
});
function gmpInitMapOnPage(mapData) {
	if(mapData.params && parseInt(mapData.params.is_static) && typeof(gmpGoogleStaticMap) !== 'undefined') {
		new gmpGoogleStaticMap(mapData);
		return;
	}
	var additionalData = {
		markerGroups: typeof(mapData.marker_groups) != 'undefined' ? mapData.marker_groups : []
	}
	,	newMap = null
	,	mapMarkersIds = []
	,	markerIdToShow = gmpIsMarkerToShow()
	,	infoWndToShow = gmpIsInfoWndToShow();

	if(mapData && mapData.view_html_mbs_id) {
		newMap = new gmpGoogleMap(mapData.view_html_mbs_id, mapData.params, additionalData);
		newMap.setParam('view_html_mbs_id', mapData.view_html_mbs_id);
		newMap.refreshWithCenter(mapData.params.center.lat(), mapData.params.center.lng(), mapData.params.zoom);
	} else {
		newMap = new gmpGoogleMap('#'+ mapData.view_html_id, mapData.params, additionalData);
	}


	if(mapData.markers && mapData.markers.length) {
		mapData.markers = _gmpPrepareMarkersList( mapData.markers );

		for(var i in mapData.markers) {
			mapMarkersIds.push(mapData.markers[i].id);
		}
		if(toeInArray(markerIdToShow, mapMarkersIds) == -1) {
			markerIdToShow = false;
		}
		if(toeInArray(infoWndToShow, mapMarkersIds) == -1) {
			infoWndToShow = false;
		}
		for(var j = 0; j < mapData.markers.length; j++) {
			if(markerIdToShow && mapData.markers[j].id != markerIdToShow) continue;
			if(infoWndToShow) {
				mapData.markers[j].params.show_description = mapData.markers[j].id == infoWndToShow ? '1' : '0';
			}
			var newMarker = newMap.addMarker( mapData.markers[j] );
			// We will set this only when marker info window need to be loaded
			/*newMarker.setTitle( mapData.markers[j].title, true );
			newMarker.setDescription( mapData.markers[j].description );*/
		}
		newMap.markersRefresh();
		newMap.checkMarkersParams(newMap.getAllMarkers(), markerIdToShow);
	}
	if(mapData.shapes && mapData.shapes.length) {
		mapData.shapes = _gmpPrepareShapesList( mapData.shapes );
		for(var z = 0; z < mapData.shapes.length; z++) {
			var newShape = newMap.addShape( mapData.shapes[z] );
		}
	}
	if(mapData.heatmap) {
		mapData.heatmap = _gmpPrepareHeatmapList( mapData.heatmap );
		newMap.addHeatmap( mapData.heatmap );
	}
	if(mapData.routes == 1) {
		newMap.addRouter({});
	}

	g_gmpAllMaps.push( newMap );
}
function gmpGetMapInfoById(id) {
	if(typeof(gmpAllMapsInfo) !== 'undefined' && gmpAllMapsInfo && gmpAllMapsInfo.length) {
		id = parseInt(id);
		for(var i = 0; i < gmpAllMapsInfo.length; i++) {
			if(gmpAllMapsInfo[i].id == id) {
				return gmpAllMapsInfo[i];
			}
		}
	}
	return false;
}
function gmpGetMapInfoByViewId(viewId) {
	if(typeof(gmpAllMapsInfo) !== 'undefined' && gmpAllMapsInfo && gmpAllMapsInfo.length) {
		for(var i = 0; i < gmpAllMapsInfo.length; i++) {
			if(gmpAllMapsInfo[i].view_id == viewId) {
				return gmpAllMapsInfo[i];
			}
		}
	}
	return false;
}
function gmpGetAllMaps() {
	return g_gmpAllMaps;
}
function gmpGetMapById(id) {
	var allMaps = gmpGetAllMaps();
	for(var i = 0; i < allMaps.length; i++) {
		if(allMaps[i].getId() == id) {
			return allMaps[i];
		}
	}
	return false;
}
function gmpGetMapByViewId(viewId) {
	var allMaps = gmpGetAllMaps();
	for(var i = 0; i < allMaps.length; i++) {
		var currViewId = allMaps[i].getViewId();
		if(currViewId == viewId) {
			return allMaps[i];
		}
	}
	return false;
}
function gmpIsMarkerToShow() {
	var markerHash = 'gmpMarker'
	,	hashParams = toeGetHashParams();
	if(hashParams) {
		for(var i in hashParams) {
			if(!hashParams[i] || typeof(hashParams[i]) !== 'string') continue;
			var pair = hashParams[i].split('=');
			if(pair[0] == markerHash)
				return parseInt(pair[1]);
		}
	}
	return false;
}
function gmpIsInfoWndToShow() {
	var markerHash = 'gmpInfoWnd'
	,	hashParams = toeGetHashParams();
	if(hashParams) {
		for(var i in hashParams) {
			if(!hashParams[i] || typeof(hashParams[i]) !== 'string') continue;
			var pair = hashParams[i].split('=');
			if(pair[0] == markerHash)
				return parseInt(pair[1]);
		}
	}
	return false;
}