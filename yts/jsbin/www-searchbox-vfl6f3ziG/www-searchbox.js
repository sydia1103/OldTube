(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function ca(a){a=["object"==typeof globalThis&&globalThis,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function ea(){ea=function(){};
da.Symbol||(da.Symbol=fa)}
function ha(a,b){this.f=a;ba(this,"description",{configurable:!0,writable:!0,value:b})}
ha.prototype.toString=function(){return this.f};
var fa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ha("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function ia(){ea();var a=da.Symbol.iterator;a||(a=da.Symbol.iterator=da.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ba(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ja(aa(this))}});
ia=function(){}}
function ja(a){ia();a={next:a};a[da.Symbol.iterator]=function(){return this};
return a}
function ka(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function ra(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ea=b.prototype}
function sa(a,b){if(b){for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
function ta(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
sa("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=ta(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
sa("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=ta(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function t(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ua="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)t(d,e)&&(a[e]=d[e])}return a};
sa("Object.assign",function(a){return a||ua});
sa("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
sa("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=ka(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!t(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n["delete"](k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!t(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&t(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&t(k,g)&&t(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&t(k,g)&&t(k[g],this.f)?delete k[g][this.f]:!1};
return b});
sa("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ja(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.l[l];if(n&&t(h.l,l))for(var p=0;p<n.length;p++){var r=n[p];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:n,index:p,X:r}}return{id:l,list:n,index:-1,X:void 0}}
function e(h){this.l={};this.f=b();this.size=0;if(h){h=ka(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(ka([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
ia();var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.l[l.id]=[]);l.X?l.X.value=k:(l.X={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.X),this.f.previous.next=l.X,this.f.previous=l.X,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.X&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.l[h.id],h.X.previous.next=h.X.next,h.X.next.previous=h.X.previous,h.X.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.l={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).X};
e.prototype.get=function(h){return(h=d(this,h).X)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
sa("Set",function(a){function b(c){this.f=new Map;if(c){c=ka(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(ka([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
ia();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
sa("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)t(b,d)&&c.push([d,b[d]]);return c}});
sa("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==ta(this,b,"includes").indexOf(b,c||0)}});
var u=this||self;function v(a,b){for(var c=a.split("."),d=b||u,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function va(){}
function wa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function xa(a){var b=wa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ya(a){return"function"==wa(a)}
function za(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Aa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w=Aa:w=Ba;return w.apply(null,arguments)}
function Da(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var x=Date.now||function(){return+new Date};
function y(a,b){var c=a.split("."),d=u;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function A(a,b){function c(){}
c.prototype=b.prototype;a.ea=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;function Ea(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ea);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
A(Ea,Error);Ea.prototype.name="CustomError";function Fa(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");Ea.call(this,d+c[e])}
A(Fa,Ea);Fa.prototype.name="AssertionError";var Ga=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},B=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ha=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g="string"===typeof a?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},Ia=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},Ja=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
B(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ka(a,b){var c=Ga(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function La(a){return Array.prototype.concat.apply([],arguments)}
function Ma(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Na(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(xa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Oa(a,b){return La.apply([],Ia(a,b,void 0))}
;function Pa(){return null}
function Qa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Ra(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Sa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function Ta(a,b){return null!==a&&b in a}
function Ua(a){for(var b in a)return!1;return!0}
function Va(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Wa(a){var b=wa(a);if("object"==b||"array"==b){if(ya(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=Wa(a[c]);return b}return a}
var Xa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ya(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Xa.length;f++)c=Xa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Za(a,b){this.f=a===$a&&b||"";this.l=ab}
Za.prototype.ha=!0;Za.prototype.fa=function(){return this.f};
function bb(a){return a instanceof Za&&a.constructor===Za&&a.l===ab?a.f:"type_error:Const"}
var ab={},$a={},cb=new Za($a,"");function db(a,b){this.f=a===eb&&b||"";this.l=fb}
db.prototype.ha=!0;db.prototype.fa=function(){return this.f.toString()};
db.prototype.jb=!0;db.prototype.Ha=function(){return 1};
var fb={},eb={};var C=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},gb=/&/g,hb=/</g,ib=/>/g,jb=/"/g,kb=/'/g,lb=/\x00/g,mb=/[\x00&<>"']/;
function nb(){return-1!=ob.toLowerCase().indexOf("webkit")}
function pb(a,b){for(var c=0,d=C(String(a)).split("."),e=C(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;c=qb(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||qb(0==h[2].length,0==k[2].length)||qb(h[2],k[2]);h=h[3];k=k[3]}while(0==c)}return c}
function qb(a,b){return a<b?-1:a>b?1:0}
;function D(a,b){this.f=a===rb&&b||"";this.l=sb}
D.prototype.ha=!0;D.prototype.fa=function(){return this.f.toString()};
D.prototype.jb=!0;D.prototype.Ha=function(){return 1};
function tb(a){return a instanceof D&&a.constructor===D&&a.l===sb?a.f:"type_error:SafeUrl"}
var ub=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function vb(a){if(a instanceof D)return a;a="object"==typeof a&&a.ha?a.fa():String(a);ub.test(a)||(a="about:invalid#zClosurez");return new D(rb,a)}
function wb(a){if(a instanceof D)return a;a="object"==typeof a&&a.ha?a.fa():String(a);ub.test(a)||(a="about:invalid#zClosurez");return new D(rb,a)}
var sb={},rb={};function xb(){this.f="";this.l=yb}
xb.prototype.ha=!0;var yb={};xb.prototype.fa=function(){return this.f};
function zb(a){var b=new xb;b.f=a;return b}
var Ab=zb("");function Bb(a){if(a instanceof D)return'url("'+tb(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(a instanceof Za)a=bb(a);else{a=String(a);var b=a.replace(Cb,"$1").replace(Cb,"$1").replace(Db,"url");if(Eb.test(b)){if(b=!Fb.test(a)){for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}b=b&&c&&Gb(a)}a=b?Hb(a):"zClosurez"}else a="zClosurez"}if(/[{;}]/.test(a))throw new Fa("Value does not allow [{;}], got: %s.",[a]);return a}
function Gb(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b}
var Eb=/^[-,."'%_!# a-zA-Z0-9\[\]]+$/,Db=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),Cb=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g"),Fb=/\/\*/;function Hb(a){return a.replace(Db,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(g,h,k){f=h;return k});
b=vb(d).fa();return c+f+b+f+e})}
;function Ib(){this.f="";this.l=Jb}
Ib.prototype.ha=!0;var Jb={};
function Kb(a,b){if(-1!=a.indexOf("<"))throw Error("Selector does not allow '<', got: "+a);var c=a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g,"");if(!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c))throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: "+a);a:{for(var d={"(":")","[":"]"},e=[],f=0;f<c.length;f++){var g=c[f];if(d[g])e.push(d[g]);else{b:{var h=void 0;for(h in d)if(d[h]==g){h=!0;break b}h=!1}if(h&&e.pop()!=g){c=!1;break a}}}c=0==e.length}if(!c)throw Error("() and [] in selector must be balanced, got: "+
a);if(!(b instanceof xb)){c=b;d="";for(var k in c){if(!/^[-_a-zA-Z0-9]+$/.test(k))throw Error("Name allows only [-_a-zA-Z0-9], got: "+k);e=c[k];null!=e&&(e=Array.isArray(e)?Ia(e,Bb).join(" "):Bb(e),d+=k+":"+e+";")}b=d?zb(d):Ab}k=a+"{"+(b instanceof xb&&b.constructor===xb&&b.l===yb?b.f:"type_error:SafeStyle").replace(/</g,"\\3C ")+"}";return Lb(k)}
function Mb(a){function b(d){Array.isArray(d)?B(d,b):c+=Nb(d)}
var c="";B(arguments,b);return Lb(c)}
Ib.prototype.fa=function(){return this.f};
function Nb(a){return a instanceof Ib&&a.constructor===Ib&&a.l===Jb?a.f:"type_error:SafeStyleSheet"}
function Lb(a){var b=new Ib;b.f=a;return b}
var Ob=Lb("");var ob;a:{var Pb=u.navigator;if(Pb){var Qb=Pb.userAgent;if(Qb){ob=Qb;break a}}ob=""}function E(a){return-1!=ob.indexOf(a)}
function Rb(a){for(var b=RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g"),c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c}
;function Sb(){return E("Opera")}
function Tb(){return E("Trident")||E("MSIE")}
function Ub(){return E("Safari")&&!(Wb()||E("Coast")||Sb()||E("Edge")||E("Edg/")||E("OPR")||E("Firefox")||E("FxiOS")||E("Silk")||E("Android"))}
function Wb(){return(E("Chrome")||E("CriOS"))&&!E("Edge")}
function Xb(){function a(e){a:{var f=d;for(var g=e.length,h="string"===typeof e?e.split(""):e,k=0;k<g;k++)if(k in h&&f.call(void 0,h[k],k,e)){f=k;break a}f=-1}return c[0>f?null:"string"===typeof e?e.charAt(f):e[f]]||""}
var b=ob;if(Tb())return Yb(b);b=Rb(b);var c={};B(b,function(e){c[e[0]]=e[1]});
var d=Da(Ta,c);return Sb()?a(["Version","Opera"]):E("Edge")?a(["Edge"]):E("Edg/")?a(["Edg"]):Wb()?a(["Chrome","CriOS","HeadlessChrome"]):(b=b[2])&&b[1]||""}
function Yb(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b}
;function F(){this.f="";this.g=Zb;this.l=null}
F.prototype.jb=!0;F.prototype.Ha=function(){return this.l};
F.prototype.ha=!0;F.prototype.fa=function(){return this.f.toString()};
function $b(a){return a instanceof F&&a.constructor===F&&a.g===Zb?a.f:"type_error:SafeHtml"}
var Zb={};function G(a,b){var c=new F;c.f=a;c.l=b;return c}
G("<!DOCTYPE html>",0);var ac=G("",0);G("<br>",0);var bc=Qa(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=$b(ac);return!b.parentElement});
function cc(a,b){if(bc())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=$b(b)}
function dc(a,b){var c=b instanceof D?b:wb(b);a.href=tb(c)}
function ec(a){var b=new db(eb,bb(cb));a.src=(b instanceof db&&b.constructor===db&&b.l===fb?b.f:"type_error:TrustedResourceUrl").toString()}
;function fc(a){return decodeURIComponent(a.replace(/\+/g," "))}
;function gc(){return E("Gecko")&&!(nb()&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge")}
;function hc(a){hc[" "](a);return a}
hc[" "]=va;function ic(a,b){var c=jc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var kc=Sb(),I=Tb(),lc=E("Edge"),mc=gc(),nc=nb()&&!E("Edge");function oc(){var a=u.document;return a?a.documentMode:void 0}
var pc;a:{var qc="",rc=function(){var a=ob;if(mc)return/rv:([^\);]+)(\)|;)/.exec(a);if(lc)return/Edge\/([\d\.]+)/.exec(a);if(I)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(nc)return/WebKit\/(\S+)/.exec(a);if(kc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
rc&&(qc=rc?rc[1]:"");if(I){var sc=oc();if(null!=sc&&sc>parseFloat(qc)){pc=String(sc);break a}}pc=qc}var tc=pc,jc={};function uc(a){return ic(a,function(){return 0<=pb(tc,a)})}
var vc;if(u.document&&I){var wc=oc();vc=wc?wc:parseInt(tc,10)||void 0}else vc=void 0;var xc=vc;var yc={},zc=null;var J=window;function Ac(a){this.f=a||{cookie:""}}
m=Ac.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Me;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Kb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(x()+1E3*h)).toUTCString();this.f.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+e:
"")};
m.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=C(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Kb:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.f.cookie};
m.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=C(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Bc=new Ac("undefined"==typeof document?null:document);function Cc(a,b){this.width=a;this.height=b}
m=Cc.prototype;m.clone=function(){return new Cc(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Dc(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Ec(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
;function Fc(){return!(E("iPad")||E("Android")&&!E("Mobile")||E("Silk"))&&(E("iPod")||E("iPhone")||E("Android")||E("IEMobile"))}
;var Gc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Hc(a){return a?decodeURI(a):a}
function K(a,b){return b.match(Gc)[a]||null}
function Ic(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Ic(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Jc(a){var b=[],c;for(c in a)Ic(c,a[c],b);return b.join("&")}
function Kc(a,b){var c=Jc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;function Lc(a){var b=Mc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Nc(){var a=[];Lc(function(b){a.push(b)});
return a}
var Mc={Zd:"allow-forms",ae:"allow-modals",be:"allow-orientation-lock",ce:"allow-pointer-lock",de:"allow-popups",ee:"allow-popups-to-escape-sandbox",fe:"allow-presentation",ge:"allow-same-origin",he:"allow-scripts",ie:"allow-top-navigation",je:"allow-top-navigation-by-user-activation"},Oc=Qa(function(){return Nc()});
function Pc(){var a=Dc("IFRAME"),b={};B(Oc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Qc(){this.g=this.g;this.m=this.m}
Qc.prototype.g=!1;Qc.prototype.dispose=function(){this.g||(this.g=!0,this.ka())};
Qc.prototype.ka=function(){if(this.m)for(;this.m.length;)this.m.shift()()};/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
function Rc(){var a=document.body||document.documentElement;a:{var b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.direction||b.getPropertyValue("direction")||"";break a}b=""}return b||(a.currentStyle?a.currentStyle.direction:null)||a.style&&a.style.direction}
;var Sc=(new Date).getTime();function Tc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");
if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Uc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var r=g,q=0;64>q;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var z=e[1],H=e[2],T=e[3],Ca=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var Z=T^z&(H^T);var Vb=1518500249}else Z=z^H^T,Vb=1859775393;else 60>q?(Z=z&H|T&(z|H),Vb=2400959708):(Z=z^H^T,Vb=3395469782);Z=((p<<5|p>>>27)&4294967295)+Z+Ca+Vb+r[q]&4294967295;Ca=T;T=H;H=(z<<30|z>>>2)&4294967295;z=p;p=Z}e[0]=e[0]+p&4294967295;e[1]=e[1]+z&4294967295;
e[2]=e[2]+H&4294967295;e[3]=e[3]+T&4294967295;e[4]=e[4]+Ca&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],z=0,H=p.length;z<H;++z)q.push(p.charCodeAt(z));p=q}r||(r=p.length);q=0;if(0==l)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64;for(;q<r;)if(f[l++]=p[q++],n++,64==l)for(l=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64}
function d(){var p=[],r=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var z=24;0<=z;z-=8)p[r++]=e[q]>>z&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,zc:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function Vc(a,b,c){var d=[],e=[];if(1==("array"==wa(c)?2:1))return e=[b,a],B(d,function(h){e.push(h)}),Wc(e.join(" "));
var f=[],g=[];B(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];B(d,function(h){e.push(h)});
a=Wc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Wc(a){var b=Uc();b.update(a);return b.zc().toLowerCase()}
;function Xc(a){var b=Tc(String(u.location.href)),c;(c=u.__SAPISID||u.__APISID||u.__OVERRIDE_SID)?c=!0:(c=new Ac(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?u.__SAPISID:u.__APISID,c||(c=new Ac(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(u.location.href);return d&&c&&b?[b,Vc(Tc(d),c,a||null)].join(" "):null}return null}
;function Yc(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Zc(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function $c(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Yc(a).match(/\S+/g)||[],c=0<=Ga(c,b);return c}
function ad(a,b){if(a.classList)a.classList.add(b);else if(!$c(a,b)){var c=Yc(a);Zc(a,c+(0<c.length?" "+b:b))}}
function bd(a,b){a.classList?a.classList.remove(b):$c(a,b)&&Zc(a,Ha(a.classList?a.classList:Yc(a).match(/\S+/g)||[],function(c){return c!=b}).join(" "))}
;var cd="StopIteration"in u?u.StopIteration:{message:"StopIteration",stack:""};function dd(){}
dd.prototype.next=function(){throw cd;};
dd.prototype.ga=function(){return this};
function ed(a){if(a instanceof dd)return a;if("function"==typeof a.ga)return a.ga(!1);if(xa(a)){var b=0,c=new dd;c.next=function(){for(;;){if(b>=a.length)throw cd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function fd(a,b){if(xa(a))try{B(a,b,void 0)}catch(c){if(c!==cd)throw c;}else{a=ed(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==cd)throw c;}}}
function gd(a){if(xa(a))return Ma(a);a=ed(a);var b=[];fd(a,function(c){b.push(c)});
return b}
;var hd={};
function id(a){if(I&&!uc(9))return[0,0,0,0];var b=hd.hasOwnProperty(a)?hd[a]:null;if(b)return b;65536<Object.keys(hd).length&&(hd={});var c=[0,0,0,0],d=RegExp("\\\\[0-9A-Fa-f]{1,5}\\s","g");b=jd(a,RegExp("\\\\[0-9A-Fa-f]{6}\\s?","g"));b=jd(b,d);b=jd(b,/\\./g);b=b.replace(RegExp(":not\\(([^\\)]*)\\)","g"),"     $1 ");b=b.replace(RegExp("{[^]*","gm"),"");b=kd(b,c,RegExp("(\\[[^\\]]+\\])","g"),2);b=kd(b,c,RegExp("(#[^\\#\\s\\+>~\\.\\[:]+)","g"),1);b=kd(b,c,RegExp("(\\.[^\\s\\+>~\\.\\[:]+)","g"),2);b=
kd(b,c,/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,3);b=kd(b,c,/(:[\w-]+\([^\)]*\))/gi,2);b=kd(b,c,/(:[^\s\+>~\.\[:]+)/g,2);b=b.replace(/[\*\s\+>~]/g," ");b=b.replace(/[#\.]/g," ");kd(b,c,/([^\s\+>~\.\[:]+)/g,3);b=c;return hd[a]=b}
function kd(a,b,c,d){return a.replace(c,function(e){b[d]+=1;return Array(e.length+1).join(" ")})}
function jd(a,b){return a.replace(b,function(c){return Array(c.length+1).join("A")})}
;var ld={rgb:!0,rgba:!0,alpha:!0,rect:!0,image:!0,"linear-gradient":!0,"radial-gradient":!0,"repeating-linear-gradient":!0,"repeating-radial-gradient":!0,"cubic-bezier":!0,matrix:!0,perspective:!0,rotate:!0,rotate3d:!0,rotatex:!0,rotatey:!0,steps:!0,rotatez:!0,scale:!0,scale3d:!0,scalex:!0,scaley:!0,scalez:!0,skew:!0,skewx:!0,skewy:!0,translate:!0,translate3d:!0,translatex:!0,translatey:!0,translatez:!0},md=/[\n\f\r"'()*<>]/g,nd={"\n":"%0a","\f":"%0c","\r":"%0d",'"':"%22","'":"%27","(":"%28",")":"%29",
"*":"%2a","<":"%3c",">":"%3e"};function od(a){return nd[a]}
function pd(a,b,c){b=C(b);if(""==b)return null;var d=String(b.substr(0,4)).toLowerCase();if(0==("url("<d?-1:"url("==d?0:1)){if(!b.endsWith(")")||1<(b?b.split("(").length-1:0)||1<(b?b.split(")").length-1:0)||!c)a=null;else{a:for(b=b.substring(4,b.length-1),d=0;2>d;d++){var e="\"'".charAt(d);if(b.charAt(0)==e&&b.charAt(b.length-1)==e){b=b.substring(1,b.length-1);break a}}a=c?(a=c(b,a))&&"about:invalid#zClosurez"!=tb(a)?'url("'+tb(a).replace(md,od)+'")':null:null}return a}if(0<b.indexOf("(")){if(/"|'/.test(b))return null;
for(a=/([\-\w]+)\(/g;c=a.exec(b);)if(!(c[1].toLowerCase()in ld))return null}return b}
;function qd(a,b){var c=u[a];return c&&c.prototype?(c=Object.getOwnPropertyDescriptor(c.prototype,b))&&c.get||null:null}
function rd(a,b){var c=u[a];return c&&c.prototype&&c.prototype[b]||null}
var sd=qd("Element","attributes")||qd("Node","attributes"),td=rd("Element","hasAttribute"),ud=rd("Element","getAttribute"),vd=rd("Element","setAttribute"),wd=rd("Element","removeAttribute"),xd=rd("Element","getElementsByTagName"),yd=rd("Element","matches")||rd("Element","msMatchesSelector"),zd=qd("Node","nodeName"),Ad=qd("Node","nodeType"),Bd=qd("Node","parentNode"),Cd=qd("HTMLElement","style")||qd("Element","style"),Dd=qd("HTMLStyleElement","sheet"),Ed=rd("CSSStyleDeclaration","getPropertyValue"),
Fd=rd("CSSStyleDeclaration","setProperty");function Gd(a,b,c,d){if(a)return a.apply(b);a=b[c];if(!d(a))throw Error("Clobbering detected");return a}
function Hd(a,b,c,d){if(a)return a.apply(b,d);if(I&&10>document.documentMode){if(!b[c].call)throw Error("IE Clobbering detected");}else if("function"!=typeof b[c])throw Error("Clobbering detected");return b[c].apply(b,d)}
function Id(a){return Gd(sd,a,"attributes",function(b){return b instanceof NamedNodeMap})}
function Jd(a,b,c){try{Hd(vd,a,"setAttribute",[b,c])}catch(d){if(-1==d.message.indexOf("A security problem occurred"))throw d;}}
function Kd(a){return Gd(Cd,a,"style",function(b){return b instanceof CSSStyleDeclaration})}
function Ld(a){return Gd(Dd,a,"sheet",function(b){return b instanceof CSSStyleSheet})}
function Md(a){return Gd(zd,a,"nodeName",function(b){return"string"==typeof b})}
function Nd(a){return Gd(Ad,a,"nodeType",function(b){return"number"==typeof b})}
function Od(a){return Gd(Bd,a,"parentNode",function(b){return!(b&&"string"==typeof b.name&&b.name&&"parentnode"==b.name.toLowerCase())})}
function Pd(a,b){return Hd(Ed,a,a.getPropertyValue?"getPropertyValue":"getAttribute",[b])||""}
function Qd(a,b,c){Hd(Fd,a,a.setProperty?"setProperty":"setAttribute",[b,c])}
;var Rd=I&&10>document.documentMode?null:RegExp("\\s*([^\\s'\",]+[^'\",]*(('([^'\\r\\n\\f\\\\]|\\\\[^])*')|(\"([^\"\\r\\n\\f\\\\]|\\\\[^])*\")|[^'\",])*)","g"),Sd={"-webkit-border-horizontal-spacing":!0,"-webkit-border-vertical-spacing":!0};
function Td(a,b,c){var d=[];a=Ud(Ma(a.cssRules));B(a,function(e){if(b&&!/[a-zA-Z][\w-:\.]*/.test(b))throw Error("Invalid container id");if(!(b&&I&&10==document.documentMode&&/\\['"]/.test(e.selectorText))){var f=b?e.selectorText.replace(Rd,"#"+b+" $1"):e.selectorText;d.push(Kb(f,Vd(e.style,c)))}});
return Mb(d)}
function Ud(a){return Ha(a,function(b){return b instanceof CSSStyleRule||b.type==CSSRule.STYLE_RULE})}
function Wd(a,b,c){a=Xd("<style>"+a+"</style>");return null==a||null==a.sheet?Ob:Td(a.sheet,void 0!=b?b:null,c)}
function Xd(a){if(I&&!uc(10)||"function"!=typeof u.DOMParser)return null;a=G("<html><head></head><body>"+a+"</body></html>",null);return(new DOMParser).parseFromString($b(a),"text/html").body.children[0]}
function Vd(a,b){if(!a)return Ab;var c=document.createElement("div").style,d=Yd(a);B(d,function(e){var f=nc&&e in Sd?e:e.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i,"");0!=f.lastIndexOf("--",0)&&0!=f.lastIndexOf("var",0)&&(e=Pd(a,e),e=pd(f,e,b),null!=e&&Qd(c,f,e))});
return zb(c.cssText||"")}
function Zd(a){var b=Array.from(Hd(xd,a,"getElementsByTagName",["STYLE"])),c=Oa(b,function(e){return Ma(Ld(e).cssRules)});
c=Ud(c);c.sort(function(e,f){var g=id(e.selectorText);a:{var h=id(f.selectorText);for(var k=Math.min(g.length,h.length),l=0;l<k;l++){var n=g[l];var p=h[l];n=n>p?1:n<p?-1:0;if(0!=n){h=n;break a}}g=g.length;h=h.length;h=g>h?1:g<h?-1:0}return-h});
a=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,null,!1);for(var d;d=a.nextNode();)B(c,function(e){Hd(yd,d,d.matches?"matches":"msMatchesSelector",[e.selectorText])&&e.style&&$d(d,e.style)});
B(b,Ec)}
function $d(a,b){var c=Yd(a.style),d=Yd(b);B(d,function(e){if(!(0<=c.indexOf(e))){var f=Pd(b,e);Qd(a.style,e,f)}})}
function Yd(a){xa(a)?a=Ma(a):(a=Sa(a),Ka(a,"cssText"));return a}
;Dc("DIV");var ae={"* ARIA-CHECKED":!0,"* ARIA-COLCOUNT":!0,"* ARIA-COLINDEX":!0,"* ARIA-DESCRIBEDBY":!0,"* ARIA-DISABLED":!0,"* ARIA-GOOG-EDITABLE":!0,"* ARIA-LABEL":!0,"* ARIA-LABELLEDBY":!0,"* ARIA-MULTILINE":!0,"* ARIA-MULTISELECTABLE":!0,"* ARIA-ORIENTATION":!0,"* ARIA-PLACEHOLDER":!0,"* ARIA-READONLY":!0,"* ARIA-REQUIRED":!0,"* ARIA-ROLEDESCRIPTION":!0,"* ARIA-ROWCOUNT":!0,"* ARIA-ROWINDEX":!0,"* ARIA-SELECTED":!0,"* ABBR":!0,"* ACCEPT":!0,"* ACCESSKEY":!0,"* ALIGN":!0,"* ALT":!0,"* AUTOCOMPLETE":!0,"* AXIS":!0,
"* BGCOLOR":!0,"* BORDER":!0,"* CELLPADDING":!0,"* CELLSPACING":!0,"* CHAROFF":!0,"* CHAR":!0,"* CHECKED":!0,"* CLEAR":!0,"* COLOR":!0,"* COLSPAN":!0,"* COLS":!0,"* COMPACT":!0,"* COORDS":!0,"* DATETIME":!0,"* DIR":!0,"* DISABLED":!0,"* ENCTYPE":!0,"* FACE":!0,"* FRAME":!0,"* HEIGHT":!0,"* HREFLANG":!0,"* HSPACE":!0,"* ISMAP":!0,"* LABEL":!0,"* LANG":!0,"* MAX":!0,"* MAXLENGTH":!0,"* METHOD":!0,"* MULTIPLE":!0,"* NOHREF":!0,"* NOSHADE":!0,"* NOWRAP":!0,"* OPEN":!0,"* READONLY":!0,"* REQUIRED":!0,
"* REL":!0,"* REV":!0,"* ROLE":!0,"* ROWSPAN":!0,"* ROWS":!0,"* RULES":!0,"* SCOPE":!0,"* SELECTED":!0,"* SHAPE":!0,"* SIZE":!0,"* SPAN":!0,"* START":!0,"* SUMMARY":!0,"* TABINDEX":!0,"* TITLE":!0,"* TYPE":!0,"* VALIGN":!0,"* VALUE":!0,"* VSPACE":!0,"* WIDTH":!0},be={"* USEMAP":!0,"* ACTION":!0,"* CITE":!0,"* HREF":!0,"* LONGDESC":!0,"* SRC":!0,"LINK HREF":!0,"* FOR":!0,"* HEADERS":!0,"* NAME":!0,"A TARGET":!0,"* CLASS":!0,"* ID":!0,"* STYLE":!0};var ce="undefined"!=typeof WeakMap&&-1!=WeakMap.toString().indexOf("[native code]"),de=0;function ee(){this.g=[];this.l=[];this.f="data-elementweakmap-index-"+de++}
ee.prototype.set=function(a,b){if(Hd(td,a,"hasAttribute",[this.f])){var c=parseInt(Hd(ud,a,"getAttribute",[this.f])||null,10);this.l[c]=b}else c=this.l.push(b)-1,Jd(a,this.f,c.toString()),this.g.push(a);return this};
ee.prototype.get=function(a){if(Hd(td,a,"hasAttribute",[this.f]))return a=parseInt(Hd(ud,a,"getAttribute",[this.f])||null,10),this.l[a]};
ee.prototype.clear=function(){this.g.forEach(function(a){Hd(wd,a,"removeAttribute",[this.f])},this);
this.g=[];this.l=[]};var fe=!I||10<=Number(xc),ge=!I||null==document.documentMode;function he(){}
;var ie={APPLET:!0,AUDIO:!0,BASE:!0,BGSOUND:!0,EMBED:!0,FORM:!0,IFRAME:!0,ISINDEX:!0,KEYGEN:!0,LAYER:!0,LINK:!0,META:!0,OBJECT:!0,SCRIPT:!0,SVG:!0,STYLE:!0,TEMPLATE:!0,VIDEO:!0};var je={A:!0,ABBR:!0,ACRONYM:!0,ADDRESS:!0,AREA:!0,ARTICLE:!0,ASIDE:!0,B:!0,BDI:!0,BDO:!0,BIG:!0,BLOCKQUOTE:!0,BR:!0,BUTTON:!0,CAPTION:!0,CENTER:!0,CITE:!0,CODE:!0,COL:!0,COLGROUP:!0,DATA:!0,DATALIST:!0,DD:!0,DEL:!0,DETAILS:!0,DFN:!0,DIALOG:!0,DIR:!0,DIV:!0,DL:!0,DT:!0,EM:!0,FIELDSET:!0,FIGCAPTION:!0,FIGURE:!0,FONT:!0,FOOTER:!0,FORM:!0,H1:!0,H2:!0,H3:!0,H4:!0,H5:!0,H6:!0,HEADER:!0,HGROUP:!0,HR:!0,I:!0,IMG:!0,INPUT:!0,INS:!0,KBD:!0,LABEL:!0,LEGEND:!0,LI:!0,MAIN:!0,MAP:!0,MARK:!0,MENU:!0,METER:!0,NAV:!0,
NOSCRIPT:!0,OL:!0,OPTGROUP:!0,OPTION:!0,OUTPUT:!0,P:!0,PRE:!0,PROGRESS:!0,Q:!0,S:!0,SAMP:!0,SECTION:!0,SELECT:!0,SMALL:!0,SOURCE:!0,SPAN:!0,STRIKE:!0,STRONG:!0,STYLE:!0,SUB:!0,SUMMARY:!0,SUP:!0,TABLE:!0,TBODY:!0,TD:!0,TEXTAREA:!0,TFOOT:!0,TH:!0,THEAD:!0,TIME:!0,TR:!0,TT:!0,U:!0,UL:!0,VAR:!0,WBR:!0};var ke={"ANNOTATION-XML":!0,"COLOR-PROFILE":!0,"FONT-FACE":!0,"FONT-FACE-SRC":!0,"FONT-FACE-URI":!0,"FONT-FACE-FORMAT":!0,"FONT-FACE-NAME":!0,"MISSING-GLYPH":!0};
function le(a){a=a||new me;ne(a);this.f=Va(a.f);this.m=Va(a.D);this.g=Va(a.F);this.u=a.w;B(a.s,function(b){if(0!=b.lastIndexOf("data-",0))throw new Fa('Only "data-" attributes allowed, got: %s.',[b]);if(0==b.lastIndexOf("data-sanitizer-",0))throw new Fa('Attributes with "%s" prefix are not allowed, got: %s.',["data-sanitizer-",b]);this.f["* "+b.toUpperCase()]=oe},this);
B(a.o,function(b){b=b.toUpperCase();if(-1==b.indexOf("-")||ke[b])throw new Fa("Only valid custom element tag names allowed, got: %s.",[b]);this.g[b]=!0},this);
this.s=a.g;this.i=a.C;this.l=null;this.o=a.u}
A(le,he);function pe(a){return function(b,c){var d=a(C(b),c);return d&&"about:invalid#zClosurez"!=tb(d)?tb(d):null}}
function me(){this.f={};B([ae,be],function(a){B(Sa(a),function(b){this.f[b]=oe},this)},this);
this.l={};this.s=[];this.o=[];this.D=Va(ie);this.F=Va(je);this.w=!1;this.L=vb;this.H=this.m=this.G=this.g=Pa;this.C=null;this.i=this.u=!1}
function qe(a,b){return function(c,d,e,f){c=a(c,d,e,f);return null==c?null:b(c,d,e,f)}}
function re(a,b,c,d){a[c]&&!b[c]&&(a[c]=qe(a[c],d))}
function ne(a){if(a.i)throw Error("HtmlSanitizer.Builder.build() can only be used once.");re(a.f,a.l,"* USEMAP",se);var b=pe(a.L);B(["* ACTION","* CITE","* HREF"],function(d){re(this.f,this.l,d,b)},a);
var c=pe(a.g);B(["* LONGDESC","* SRC","LINK HREF"],function(d){re(this.f,this.l,d,c)},a);
B(["* FOR","* HEADERS","* NAME"],function(d){re(this.f,this.l,d,Da(te,this.G))},a);
re(a.f,a.l,"A TARGET",Da(ue,["_blank","_self"]));re(a.f,a.l,"* CLASS",Da(ve,a.m));re(a.f,a.l,"* ID",Da(we,a.m));re(a.f,a.l,"* STYLE",Da(a.H,c));a.i=!0}
function xe(a,b){a||(a="*");return(a+" "+b).toUpperCase()}
function oe(a){return C(a)}
function ue(a,b){var c=C(b);return 0<=Ga(a,c.toLowerCase())?c:null}
function se(a){return(a=C(a))&&"#"==a.charAt(0)?a:null}
function te(a,b,c){return a(C(b),c)}
function ve(a,b,c){b=b.split(/(?:\s+)/);for(var d=[],e=0;e<b.length;e++){var f=a(b[e],c);f&&d.push(f)}return 0==d.length?null:d.join(" ")}
function we(a,b,c){return a(C(b),c)}
function ye(a,b){var c=b.data,d=Od(b);d&&"style"==Md(d).toLowerCase()&&!("STYLE"in a.m)&&"STYLE"in a.g&&(c=Nb(Wd(c,a.l,w(function(e,f){return this.s(e,{pe:f})},a))));
return document.createTextNode(c)}
;function ze(a){var b=new me;b=new le(b);var c=!("STYLE"in b.m)&&"STYLE"in b.g;c="*"==b.i&&c?"sanitizer-"+(Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^x()).toString(36)):b.i;b.l=c;if(fe){c=a;if(fe){a=Dc("SPAN");b.l&&"*"==b.i&&(a.id=b.l);b.o&&(c=Xd("<div>"+c+"</div>"),Zd(c),c=c.innerHTML);c=G(c,null);var d=document.createElement("template");if(ge&&"content"in d)cc(d,c),d=d.content;else{var e=document.implementation.createHTMLDocument("x");d=e.body;
cc(e.body,c)}c=document.createTreeWalker(d,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,null,!1);for(d=ce?new WeakMap:new ee;e=c.nextNode();){c:{var f=b;var g=e;switch(Nd(g)){case 3:f=ye(f,g);break c;case 1:if("TEMPLATE"==Md(g).toUpperCase())f=null;else{var h=Md(g).toUpperCase();if(h in f.m)var k=null;else f.g[h]?k=document.createElement(h):(k=Dc("SPAN"),f.u&&Jd(k,"data-sanitizer-original-tag",h.toLowerCase()));if(k){var l=k,n=Id(g);if(null!=n)for(var p=0;h=n[p];p++)if(h.specified){var r=f;var q=
g,z=h,H=z.name;if(0==H.lastIndexOf("data-sanitizer-",0))r=null;else{var T=Md(q);z=z.value;var Ca={tagName:C(T).toLowerCase(),attributeName:C(H).toLowerCase()},Z={yc:void 0};"style"==Ca.attributeName&&(Z.yc=Kd(q));q=xe(T,H);q in r.f?(r=r.f[q],r=r(z,Ca,Z)):(H=xe(null,H),H in r.f?(r=r.f[H],r=r(z,Ca,Z)):r=null)}null!==r&&Jd(l,h.name,r)}f=k}else f=null}break c;default:f=null}}if(f){if(1==Nd(f)&&d.set(e,f),e=Od(e),g=!1,e)h=Nd(e),k=Md(e).toLowerCase(),l=Od(e),11!=h||l?"body"==k&&l&&(h=Od(l))&&!Od(h)&&(g=
!0):g=!0,h=null,g||!e?h=a:1==Nd(e)&&(h=d.get(e)),h.content&&(h=h.content),h.appendChild(f)}else for(f=e;e=f.firstChild;)f.removeChild(e)}d.clear&&d.clear();b=a}else b=Dc("SPAN");0<Id(b).length&&(a=Dc("SPAN"),a.appendChild(b),b=a);b=(new XMLSerializer).serializeToString(b);b=b.slice(b.indexOf(">")+1,b.lastIndexOf("</"))}else b="";return G(b,null)}
;var Ae=/^[6-9]$/,Be=/<\/?(?:b|em)>/gi;function Ce(a){this.f=a}
var De=new Ce({});function Ee(a,b,c,d,e,f){var g;a instanceof F?g=a:g=G(a,null);this.u=g;this.f=b;this.l=c;this.o=d;this.g=e;this.m=f||De;this.i=!1;switch(this.o){case 0:case 32:case 38:case 400:case 407:case 35:case 33:case 41:case 34:case 44:case 45:case 40:case 46:case 56:case 30:case 94:case 92:case 93:case 411:case 410:case 71:this.i=!0}}
Ee.prototype.getHtml=function(){return $b(this.u).toString()};
Ee.prototype.s=function(){return this.l};
Ee.prototype.T=function(){return this.o};var Fe=/^\s/,Ge=/\s+/,He=/\s+/g,Ie=/^\s+|\s+$/g,Je=/^\s+$/,Ke=/<[^>]*>/g,Le=/&nbsp;/g,Me=/&#x3000;/g,Ne=[/&/g,/&amp;/g,/</g,/&lt;/g,/>/g,/&gt;/g,/"/g,/&quot;/g,/'/g,/&#39;/g,/{/g,/&#123;/g],Oe=document.getElementsByTagName("head")[0],Pe=0,Qe=1;function Re(a){var b={};if(a)for(var c=0;c<a.length;++c)b[a[c]]=!0;return b}
function Se(a,b){function c(){return b}
void 0===b&&(b=a);return{Ja:c,Fb:function(){return a},
Qc:c,Ce:function(){return a<b},
equals:function(d){return d&&a==d.Fb()&&b==d.Qc()}}}
function L(a,b,c,d){if(null==b||""===b){if(!d)return;b=""}c.push(a+"="+encodeURIComponent(String(b)))}
function Te(a,b){var c=[],d;for(d in a)L(d,a[d],c,b);return c.join("&")}
function Ue(a){var b={},c=Math.max(a.indexOf("?"),a.indexOf("#"));a=a.substr(c+1);if(0<=c&&a){c=a.split("&");a=0;for(var d;a<c.length;++a)if(d=c[a])d=d.split("="),b[d[0]]=d[1]||""}return b}
function Ve(a){return!!a&&!Je.test(a)}
function We(a){for(var b=Ne.length,c=0;c<b;c+=2)a=a.replace(Ne[c],Ne[c+1].source);return a}
function Xe(a){for(var b=Ne.length,c=0;c<b;c+=2)a=a.replace(Ne[c+1],Ne[c].source);a=a.replace(Le," ");return a.replace(Me,"\u3000")}
function Ye(a,b){return a&&(-1<a.indexOf(" ")||Ge.test(a))?(a=a.replace(He," "),a.replace(b?Ie:Fe,"")):a}
function Ze(a,b,c){c&&(a=a.toLowerCase(),b=b.toLowerCase());return b.length<=a.length&&a.substring(0,b.length)==b}
function $e(){}
function af(a){var b=bf;if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;++c)if(b[c]===a)return c;return-1}
function cf(){return 0}
function df(a){var b={},c;for(c in a)b[c]=a[c];return b}
function ef(a,b){var c=a+"";b.length&&(c+="i"+b.join("i"),c+="k"+(-1!=Ga(b,173)?14:1));return c}
;function ff(a,b,c){this.f=a;this.H=b;this.C=c||"";this.s=(Pe++).toString(36);this.w=this.f.toLowerCase();this.l=Ye(this.w);this.G={};this.u={};this.m=this.F=this.i=!1;this.D=1}
ff.prototype.getId=function(){return this.s};
function gf(a){a=parseInt(a.s,36);return isNaN(a)?-1:a}
function hf(a,b,c,d){a.i||(a.G[b]=c,d&&(a.u[b]=c))}
;function jf(a,b,c,d,e,f){this.l=a;this.f=b;this.g=c;this.m=d;this.i=e;this.s=f;this.o=!0;this.f?this.f.length&&33==this.f[0].T()&&(this.i=this.o=!1):this.f=[];this.g||(this.g=De)}
jf.prototype.T=function(){return this.o};function kf(){}
kf.prototype.search=function(){};
kf.prototype.redirect=function(){};
kf.prototype.fc=function(){return""};
kf.prototype.Mb=function(){};function lf(){this.l={};this.f={}}
lf.prototype.set=function(a,b){this.l[a]=b};
lf.prototype.has=function(a){return!!this.l[a]};
function M(a,b,c){b in a.f||(a.f[b]=[]);a.f[b].push(c)}
;function mf(a,b,c,d,e,f){this.u=a;this.w=b;this.C=c;this.m=d;this.g=e;this.o=f;this.s={};this.i={};this.f=[];this.l=!1;a=this.w;d=a.l;for(var g in d)if(b=g,c=d[b])this.s[b]=c,this.f.push(c);a=a.f;for(g in a){b=g;d=c=a[b];e=this.i[b]||[];for(f=0;f<d.length;++f)if(c=d[f])e.push(c),this.f.push(c);this.i[b]=e}this.f.sort(nf);for(g=0;a=this.f[g++];)a.Z(this.C,this.m);this.u.Mb(this.m);this.m.wc();for(g=0;a=this.f[g++];)a.J(this);for(g=0;a=this.f[g++];)a.setup(this.o);for(g=0;a=this.f[g++];)a.ma(this.o);
for(g=0;a=this.f[g++];)a.K(this.o);this.l=!0}
var bf=[127,551,149,134,494,123,121,126,553,118,115,128,160,173,119,116,152,153,129,120,374,124,158,155,131,130,147,570,141,143,138,144,139,140,135,136];function of(a){if(a.l){for(var b=0,c;c=a.f[b++];)c.ca();a.l=!1}}
mf.prototype.isActive=function(){return this.l};
mf.prototype.get=function(a){return this.s[a]};
function N(a,b){return a.i[b]||[]}
function nf(a,b){var c=af(a.T()),d=af(b.T());return 0>c?1:0>d?-1:c-d}
;function O(a){this.l=a}
m=O.prototype;m.Z=function(){};
m.J=function(){};
m.setup=function(){};
m.ma=function(){};
m.K=function(){};
m.T=function(){return this.l};
m.ca=function(){};function pf(){}
pf.prototype.f=null;pf.prototype.getOptions=function(){var a;(a=this.f)||(a={},qf(this)&&(a[0]=!0,a[1]=!0),a=this.f=a);return a};var rf;function sf(){}
A(sf,pf);function tf(){var a=qf(rf);return a?new ActiveXObject(a):new XMLHttpRequest}
function qf(a){if(!a.l&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.l=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.l}
rf=new sf;function uf(){this.l=149;this.f={};this.g=0}
A(uf,O);m=uf.prototype;m.J=function(a){this.w=a.get(127)};
m.K=function(a){if(a.connectionType==this.va()){this.i=a;var b=this.w.g,c="https:"==document.location.protocol;this.s=b.protocol||"http"+(c?"s":"")+"://";this.o=b.host||"clients1."+a.Da;this.u=b.Oa;this.m=b.oc}};
m.ca=function(){vf(this);this.g=0};
m.kc=function(a,b,c){wf(this,a.getId(),a.f,b,c);return!0};
m.va=function(){return 1};
m.eb=function(){return this.g};
m.Za=function(a){var b=this.f[a];b&&(xf(b),delete this.f[a])};
function wf(a,b,c,d,e){a.i.yb||vf(a);var f=tf();f&&(c=a.s+a.o+a.u+"?"+(a.m?a.m+"&":"")+(d?d+"&":"")+"q="+encodeURIComponent(c)+"&xhr=t&xssi=t",f.open("GET",c,!0),f.withCredentials=!0,a.i.visitorData&&f.setRequestHeader("X-Goog-Visitor-Id",a.i.visitorData),f.onreadystatechange=function(){if(4==f.readyState){switch(f.status){case 403:a.g=1E3;break;case 302:case 500:case 502:case 503:++a.g;break;case 200:var g=f.responseText;0==g.lastIndexOf(")]}'\n",0)&&(g=g.substring(5));e(JSON.parse(g));default:a.g=
0}a.Za(b)}},a.f[b]=f,f.send(null))}
function vf(a){for(var b in a.f)xf(a.f[b]);a.f={}}
function xf(a){a.onreadystatechange=$e;var b=a.readyState;0!=b&&4!=b&&a.abort()}
;var yf;function zf(){this.l=153}
ra(zf,O);function Af(a,b){a.length&&b.push({T:function(){return 507},
position:2})}
;function Bf(a){this.o=a}
Bf.prototype.T=function(){return this.o};
Bf.prototype.isSelectable=function(){return!0};function Cf(a){this.l=152;this.m=a}
A(Cf,O);Cf.prototype.Pa=$e;var Df=Tb(),Ef=Df&&0<=pb(Xb(),10),Ff=gc();Ff&&Xb();var Gf=Sb(),Hf=nb()&&!E("Edge"),If=Ub(),Jf=Wb(),Kf=Fc()&&Ub(),Lf=E("Android"),Mf=E("Macintosh"),Nf=Fc();var Of=void 0!=document.documentElement.style.opacity,Pf={rtl:"right",ltr:"left"};function Qf(a,b){try{if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0);c.moveStart("character",b);c.select()}}catch(d){}}
function Rf(a){for(var b=0,c=0;a;){b+=a.offsetTop;c+=a.offsetLeft;try{a=a.offsetParent}catch(d){a=null}}return{Ta:b,ia:c}}
function Sf(a){try{return Tf(a).activeElement==a}catch(b){}return!1}
function P(a,b){var c=document.createElement(a);b&&(c.className=b);return c}
function Q(a){return P("div",a)}
function Uf(a,b){a.dir!=b&&(a.dir=b,a.style.textAlign=Pf[b])}
function Vf(a){a&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1);return!1}
function Wf(a){if(a=a||window.event)a.stopPropagation&&a.stopPropagation(),a.cancelBubble=a.cancel=!0;return Vf(a)}
function Xf(a){var b=P("a");dc(b,"#ifl");b.className="sbsb_i sbqs_b";a.appendChild(b);return b}
function Yf(a){var b=a||window;a=b.document;var c=b.innerWidth;b=b.innerHeight;if(!c){var d=a.documentElement;d&&(c=d.clientWidth,b=d.clientHeight);c||(c=a.body.clientWidth,b=a.body.clientHeight)}return{uc:c,Ib:b}}
function Tf(a){return a?a.ownerDocument||a.document:window.document}
function Zf(a){return a?(a=Tf(a),a.defaultView||a.parentWindow):window}
function $f(){return Of?"opacity":"filter"}
function ag(a){return Of?a+"":"alpha(opacity="+Math.floor(100*a)+")"}
;function bg(){this.o=507;cg(this)}
ra(bg,Bf);bg.prototype.f=function(){return this.g};
function dg(a,b,c,d){cg(a,c,d);b=ze(b);cc(a.l,b)}
function cg(a,b,c){a.g=Q("sbfl_a");a.l=Q("sbfl_b");a.l.onclick=function(){c&&c.openReportForm&&c.openReportForm(b)};
a.g.appendChild(a.l)}
;var eg=[30,35,33,41],fg=[39,10,21];function gg(a,b){Cf.call(this,507);this.f=a;this.g=b}
ra(gg,Cf);gg.prototype.J=function(a){this.i=a.get(128)};
gg.prototype.Z=function(a,b){b.addRule(".sbfl_a","font-size:12px;font-style:italic;color:#777;margin:-5px -18px -5px 0");b.addRule(".sbsb_c[dir=ltr] .sbfl_a","text-align:right");b.addRule(".sbsb_c[dir=rtl] .sbfl_a","text-align:left");b.addRule(".sbfl_a:hover","color:#333;cursor:pointer");b.addRule(".sbfl_b","background:rgba(255,255,255,.9)")};
gg.prototype.Ea=function(){return new bg};
function hg(a){return a.map(function(b){return{label:b.f}})}
gg.prototype.Qa=function(a,b){var c=Ha(this.i.g,function(d){a:if(0<=eg.indexOf(d.T()))d=!1;else{d=d.g||[];for(var e=ka(fg),f=e.next();!f.done;f=e.next())if(0<=d.indexOf(f.value)){d=!1;break a}d=!0}return d},this);
0<c.length?(dg(b,this.f,hg(c),this.g),b.f().style.display=""):b.f().style.display="none"};function ig(a,b,c,d,e,f,g,h){this.o=35;this.N=b;this.M=c;this.F=d;this.w=e;this.G=g;this.O=h;this.u=!0;this.s=!1;this.g=Q("sbpqs_d");this.m=Q();this.H=P("span","sbpqs_a");this.G&&(this.i=P("a"),dc(this.i,"#ps"),this.i.className="sbsb_i",this.C=Q("fr sbpqs_b"),this.m.appendChild(this.C),this.C.appendChild(this.i),this.l=Q("sbpqs_c"),a=ze(this.O),cc(this.l,a),this.l.setAttribute("role","alert"));this.m.appendChild(this.H);this.g.appendChild(this.m);this.l&&this.g.appendChild(this.l)}
A(ig,Bf);ig.prototype.f=function(){return this.g};
ig.prototype.isSelectable=function(){return this.u};
ig.prototype.L=function(a){this.s=!0;var b=w(this.V,this),c=this.N.g,d=this.R;c.g[d]=b;b=[];"1"===Ue(window.location.search).ssl_dbg&&L("ssl_dbg","1",b);L("delq",d,b);L("client",c.o,b);L("callback","google.sbox.d"+c.m,b);d=c.s;L("tok",c.u,b);c.i&&L("authuser",c.i,b);c.f=P("script");c.f.src=d+b.join("&");Oe.appendChild(c.f);return Wf(a)};
ig.prototype.V=function(){if(this.s){var a=this.M;if(a.g){a=a.f;for(var b in a.g)for(var c=a.g[b].f,d=0,e;e=c[d++];)if(35==e.T()){delete a.g[b];break}for(b=0;b<a.f.length;++b)a.f[b].reset()}this.g.onmouseover=this.g.onmouseout=this.g.onclick=null;this.m.style.display="none";this.l.style.display="";this.w.i==this.D&&jg(this.F);this.w.f==this.D&&(kg(this.w),this.F.g.focus());this.u=!1}};function lg(){Cf.call(this,35)}
A(lg,Cf);m=lg.prototype;m.Z=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbdd_a[dir=ltr] .sbpqs_b","padding-right:3px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_b","padding-left:3px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
m.J=function(a){this.g=a.get(123);this.i=a.get(118);this.o=a.get(189);this.u=a.get(127);this.C=a.get(128)};
m.setup=function(a){this.K(a)};
m.K=function(a){this.w=a.nc;this.f=a.Yb;this.s=a.Xb};
m.Ea=function(a){return new ig(this.u,this.o,this.g,this.i,this.C,a,this.w,this.s)};
m.Qa=function(a,b){var c=a.getHtml(),d=a.f,e=a.l,f=this.f;b.s=!1;b.u=!0;b.R=d;b.D=e;b.m.style.display="";c=ze(c);cc(b.H,c);b.G&&(b.l.style.display="none",f=ze(f),cc(b.i,f),b.i.onclick=w(b.L,b))};
m.Pa=function(a,b,c){c.search(b.f,1)};function mg(){this.l=134;this.g={}}
A(mg,O);m=mg.prototype;m.J=function(a){this.m=a.g.getId()};
m.setup=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={});window.google.sbox["d"+this.m]=w(this.Od,this)};
m.K=function(a){this.s="//"+(a.Zb||"clients1."+a.Da)+"/complete/deleteitems?";this.u=a.tb;this.i=a.authuser;this.o=a.clientName};
m.ca=function(){ng(this)};
function ng(a){a.f&&(Oe.removeChild(a.f),a.f=null)}
m.Od=function(a){ng(this);a=a[0];var b=this.g[a];b&&(delete this.g[a],b())};function og(){this.l=189}
A(og,O);og.prototype.J=function(a){this.g=a.get(134);this.i=a.get(123);this.s=a.get(118);this.w=a.get(553)};
og.prototype.setup=function(a){this.f=a.Mc};
og.prototype.K=function(a){this.m=a.tb;this.u=!(!this.g||!this.m);this.f&&(a=this.s.f?3E3:0,window.setTimeout(w(this.o,this),a),this.f=!1)};
og.prototype.o=function(){var a=pg(this.w,"",void 0,void 0,!0);qg(this.i,a);a=this.i;a.m=a.i};function rg(){this.l=156}
A(rg,O);rg.prototype.J=function(a){this.i=a.get(189)};
rg.prototype.g=function(a){var b=this.i,c={};b.u&&(c.tok=b.m);"1"===Ue(window.location.search).ssl_dbg&&(c.ssl_dbg="1");for(var d in c)hf(a,d,c[d]);return 1};
rg.prototype.f=function(){return 12};function sg(){this.l=157}
A(sg,O);function tg(){this.l=156}
A(tg,O);tg.prototype.g=function(a){var b=Ue(fc(window.location.href));b.v&&hf(a,"video_id",b.v,!0);return 1};
tg.prototype.f=function(){return 24};function ug(a,b,c){this.l=598;this.C=b;this.u=c;this.o="";this.g=a;this.s=!1}
A(ug,O);ug.prototype.J=function(a){this.G=a.get(553);this.f=a.get(128);this.F=a.get(118);this.D=a.get(150)};
ug.prototype.setup=function(a){this.m=a.pb;this.w=a.Kc};
function vg(a,b){a.o=b;a.G.qb(a.o)}
function wg(a){if(!a.C||a.f.isVisible())return!1;var b=a.F.f;if(!b||0==b.length)return!1;if(b!=a.m)return"always"==a.u&&a.f&&a.f.g&&0<a.f.g.length&&a.f.show(),!1;if(a.g&&a.g.getRefinementsTuple){var c=a.g.getRefinementsTuple();if(c){var d=c[0];"ClearBySearchbox"==d?a.i=[]:"FromSearchResponse"==d&&a.s&&(a.i=c[1],a.s=!1)}}if(!a.i||0>=a.i.length)return a.f&&a.f.g&&0<a.f.g.length?(a.f.show(),!1):"always"==a.u||"fallback"==a.u;c=[];for(var e=d=0;e<a.i.length&&!(c.length>=a.w);++e){var f=a.i[e];f&&0<f.length&&
c.push(new Ee(a.D.bold(b,f),f,d++,0,[71],null))}0<c.length&&xg(a.f,c,!1);return!1}
;function yg(){this.l=156}
A(yg,O);yg.prototype.J=function(a){this.i=a.get(598)};
yg.prototype.g=function(a){var b=this.i,c;a:{if(b.g&&b.g.getPreviousQuery&&(c=b.g.getPreviousQuery()))break a;c=null}var d;d=(d=Ue(fc(window.location.href)))?(d=d.search_query||d.q)&&d==b.m:!1;c&&c!=b.m?(b.s=!0,b.m=c,vg(b,c)):d||""==b.o?d&&""==b.o&&vg(b,b.m):vg(b,"");return"mousedown"!=a.C&&"focus"!=a.C||!wg(this.i)?1:2};
yg.prototype.f=function(){return 46};function zg(){this.l=149;this.g=Oe;this.f={}}
A(zg,O);m=zg.prototype;m.J=function(a){this.F=a.get(127);this.u=a.g.getId()};
m.setup=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={})};
m.K=function(a){this.m=a;a.connectionType==this.va()&&(a=this.F.g,this.s=a.protocol,this.o=a.host,this.D=a.Oa,this.w=a.oc,this.C="https:"==document.location.protocol,Ag(this,w(this.Nd,this)),(new Image).src=this.s+this.o+"/generate_204")};
m.ca=function(){Ag(this,null);Bg(this)};
m.kc=function(a,b,c,d){c=a.getId();var e=a.f;this.m.yb||Bg(this);b=this.s+this.o+this.D+"?"+(this.w?this.w+"&":"")+(b?b+"&":"");a=[];L("q",e,a,!0);this.m.tc||L("callback","google.sbox.p"+this.u,a);if(this.C){e="";for(var f=4+Math.floor(32*Math.random()),g=0,h;g<f;++g)h=.3>Math.random()?48+Math.floor(10*Math.random()):(.5<Math.random()?65:97)+Math.floor(26*Math.random()),e+=String.fromCharCode(h);L("gs_gbg",e,a)}e=P("script");e.src=b+a.join("&");e.charset="utf-8";this.f[c]=e;this.i=d;this.g.appendChild(e);
return!0};
m.va=function(){return 0};
m.eb=function(){return 0};
m.Za=function(a){var b=this.f[a];b&&(this.g.removeChild(b),delete this.f[a])};
function Bg(a){for(var b in a.f)a.g.removeChild(a.f[b]);a.f={};a.i=null}
m.Nd=function(a){this.i&&this.i(a)};
function Ag(a,b){b||(b=$e);var c=window.google;a.m.tc?c.ac.h=b:c.sbox["p"+a.u]=b}
;function Cg(){this.l=115;this.m={}}
A(Cg,O);var Dg={horizontalAlignment:"left",yd:!0,na:null,marginWidth:0};m=Cg.prototype;m.J=function(a){this.i=a.get(116);if(a=N(a,154))for(var b=0,c;c=a[b++];)this.m[Eg]=c};
m.K=function(){this.f=!1};
m.ca=function(){this.hide()};
m.isVisible=function(){return this.f};
m.getHeight=function(){return this.f?this.i.getHeight():0};
m.show=function(){this.f||(this.i.show(Fg(this)),this.f=!0)};
m.hide=function(){this.f&&(this.i.hide(),this.f=!1)};
function Fg(a){var b=df(Dg);if(a.g){a=a.g.g;b.na=a.C;b.marginWidth=a.H;var c=a.w.Ud;c||(c="rtl"==a.C?"right":"left");b.horizontalAlignment=c}return b}
;function Gg(){this.l=118}
A(Gg,O);m=Gg.prototype;m.J=function(a){this.g=a.get(119);this.C=a.get(130);this.R=a.get(145);this.s=a.get(117);this.M=a.get(123);this.D=a.get(374);this.L=a.get(121);this.V=a.get(553);this.i=a.get(128);this.N=a.get(139);this.Y=a.get(173);this.aa=N(a,160)};
m.setup=function(a){this.o=a;this.f=this.m=this.g.f.value||""};
m.K=function(a){this.o=a;this.w=this.G=!1;Hg(this)};
function Ig(a){var b={};R(a.s,11,b);!b.cancel&&a.o.kd&&Jg(a.s,function(){a.i.dismiss()})}
function Kg(a,b){if(0==a.o.Sa||2==a.o.Sa||3==a.o.Sa&&!a.m&&!b)return!1;a:{if(S(a.i)){if(null!=a.i.i)var c=Lg(a.i);else c=a.i,c=S(c)?c.g[0]:null;if(c.i)break a}c=null}var d;if(d=c){if(d=c=c.f)d=a.m,d=!(d||c?d&&c&&d.toLowerCase()==c.toLowerCase():1);d?(a.m=a.f,Ze(c,a.f,!0)&&(c=a.f+c.substr(a.f.length)),Mg(a,c,Se(c.length),"",!0),Ng(a,c,!0),d=!0):d=!1}return d?(a.D.add(8),!0):!1}
function Mg(a,b,c,d,e){a.o.Cc&&!a.i.isVisible()&&"mousedown"==d&&Og(a.i,c,d);var f=!1,g=!1;if(b!=a.f||"onremovechip"==d)Ze(d,"key")?a.D.add(1):"paste"==d&&a.D.add(2),f=!0,Pg(a,b),R(a.s,1,{za:d,na:a.u}),g=x(),a.F||(a.F=g),a.H=g,Ve(b)&&(e=!0),g=!0;b=pg(a.V,b,c,d);switch(b.D){case 3:b.m=!0;case 2:e=!0;break;case 4:e=!1}e?(f&&(f=a.i,f.m&&!f.s&&(f.s=window.setTimeout(w(f.clear,f),f.w.ld))),a.G&&hf(b,"gs_is",1),qg(a.M,b)):g&&(a.i.clear(),f=a.M,f.m=f.i);R(a.s,2,{za:d})}
function Qg(a,b){Pg(a,b);a.g.refresh();R(a.s,4,{na:a.u,input:b})}
function jg(a){a.f!=a.m&&Pg(a,a.m);R(a.s,5,{input:a.m,suggestions:a.i.g,na:a.u});a.g.refresh()}
m.getHeight=function(){return this.g.getHeight()};
function Rg(a){if(a.Y){if(a.o.ib)return!0;for(var b=0,c;c=a.aa[b++];)if(c.isEnabled())return!0}return!1}
m.search=function(a){this.L.search(this.f,a)};
m.clear=function(){this.f&&(Pg(this,""),this.g.clear(),R(this.s,1),R(this.s,16),this.i.clear())};
function Sg(a,b){var c=a.g.s.Ja();a.u==b?S(a.i)&&c==a.f.length&&(null!=a.i.i?a.o.Ga&&a.L.search(Lg(a.i).f,6):a.o.Lb&&Kg(a,!0)):a.C&&0==c&&a.C.f()}
function Ng(a,b,c){a.f=b||"";Hg(a);a.g.refresh();c||R(a.s,4,{na:a.u,input:a.f})}
function Hg(a){var b=Tg(a.R,a.f);if(b!=a.u){var c=a.g;c.C&&(c.C.dir=b);c.f.dir=b;c.u&&(c.u.dir=b);if(c.ja){c=c.f;var d=0,e=c.style;"INPUT"!=c.nodeName&&(d+=1);e.left=e.right="";e["rtl"==b?"right":"left"]=d+"px"}a.u=b}}
function Pg(a,b){a.f=a.m=b||"";Hg(a)}
;function Ug(){this.l=128}
A(Ug,O);m=Ug.prototype;m.J=function(a){this.o=a.get(129);this.M=a.get(145);this.G=a.get(115);this.N=a.get(123);this.u=a.get(118);this.O=a.get(147);this.L=N(a,153);this.V=a.get(553);this.F=a.get(184);this.Y=a.get(157)};
m.setup=function(){this.L.sort(cf)};
m.K=function(a){this.w=a;this.i=this.f=null;this.m=this.D=!1;this.R=!0;this.C="";this.H=0};
m.ca=function(){this.s&&(window.clearTimeout(this.s),this.s=null);this.g=null;this.hide()};
function xg(a,b,c){var d=a.F&&a.F.g(b);a.clear();a.g=b;var e=S(a)?b[0].f:a.u.m;a:{var f=e;if(a.M.f){for(var g=!1,h=!1,k=0,l;k<f.length;++k)if(l=f.charAt(k),!Vg.test(l)&&(Wg.test(l)?h=!0:g=!0,h&&g)){f=!0;break a}f=!1}else f=!0}f&&(e=a.u.m);a.C=Tg(a.M,e);if(a.w.Hd&&S(a)&&c&&!Nf){a.D=!0;c=a.o;if(c.m){c.D=a.C;Xg(c);e=!1;for(f=0;g=b[f++];)Yg(c,g)&&(e=!0);c=e}else c=!1;e=b[0].m.f.a||"";e=Xe(e);b=a.O;f=0;e&&(b.f||Zg(b),$g(b),e in b.i?f=b.i[e]:(f=b.f,g=We(e),f.innerHTML!=g&&(f.innerHTML=g),b.i[e]=f=b.f.offsetWidth,
b=b.f,""!=b.innerHTML&&(b.innerHTML="")));a.H=f}else{a.D=!1;b=a.o;if(a.D||!a.w.Qd&&!S(a))c=[];else{c=[];e=[];for(f=0;a.L[f++]&&!Af(a.g,e););(f=e?e.length:0)&&(f-=ah(e,c,0));for(g=0;g<a.g.length;++g)c.push(a.g[g]);f&&(f-=ah(e,c,1));a.w.gd&&c.push(1);f&&(f-=ah(e,c,2));f&&ah(e,c,3);a.w.Hb&&c.push(2);a.Y&&1<c.length&&5==c[0].T()&&c.splice(1,0,3)}if(b.m){b.D=a.C;Xg(b);e=!1;for(f=0;g=c[f++];)if(1==g)g=b,g.s?g.s.style.display="":(h=P("li"),k=h.style,k.position="relative",k.textAlign="center",k.whiteSpace=
"nowrap",h.dir=g.F,g.i=Q(),g.i.className="sbsb_g",g.f.Hb&&(g.i.style.paddingBottom="1px"),bh(g,g.f.searchText,g.i,13),g.f.fd?bh(g,g.f.Ab,g.i,8):g.f.hd&&bh(g,g.f.Pd,g.i,14),h.appendChild(g.i),h.onmousedown=w(g.ob,g),h.className=g.f.Ra,g.s=h),g.g.appendChild(g.s);else if(2==g)if(g=b,g.o)g.o.style.display="";else{h=Q("sbsb_j "+g.f.Ra);k=P("a");k.id="sbsb_f";dc(k,"http://www.google.com/support/websearch/bin/answer.py?hl="+g.f.lb+"&answer=106230");var n=g.f.learnMoreText;if(n instanceof F)l=n;else{if(n instanceof
F)l=n;else{var p="object"==typeof n;l=null;p&&n.jb&&(l=n.Ha());n=p&&n.ha?n.fa():String(n);mb.test(n)&&(-1!=n.indexOf("&")&&(n=n.replace(gb,"&amp;")),-1!=n.indexOf("<")&&(n=n.replace(hb,"&lt;")),-1!=n.indexOf(">")&&(n=n.replace(ib,"&gt;")),-1!=n.indexOf('"')&&(n=n.replace(jb,"&quot;")),-1!=n.indexOf("'")&&(n=n.replace(kb,"&#39;")),-1!=n.indexOf("\x00")&&(n=n.replace(lb,"&#0;")));l=G(n,l)}n=$b(l).toString().replace(/(\r\n|\r|\n)/g,"<br>");l=G(n,l.Ha())}cc(k,l);h.appendChild(k);h.onmousedown=w(g.ob,
g);g.o=h;g.m.appendChild(g.o)}else 3==g?(g=b,h=g.O.pop(),h||(h=P("li"),h.setAttribute("aria-hidden","true"),h.l=!0,k=P("div","sbsb_e"),h.appendChild(k)),g.g.appendChild(h)):Yg(b,g)&&(e=!0);c=e}else c=!1;a.H=0}d&&(a.i=a.F.l(),ch(a,a.F.f()));c?a.show():a.clear()}
function ch(a,b){if(a.f!=b){var c=a.f;a.f=b;dh(a,c)}}
m.dc=function(){if(S(this))if(this.m){var a=this.f;this.f==this.g.length-1?this.i=this.f=null:null==this.f?this.f=0:++this.f;this.i=this.f;eh(this,a,w(this.dc,this))}else this.show()};
m.ec=function(){if(S(this))if(this.m){var a=this.f;this.g&&0!=this.f?null==this.f?this.f=this.g.length-1:--this.f:this.i=this.f=null;this.i=this.f;eh(this,a,w(this.ec,this))}else this.show()};
m.isVisible=function(){return this.m};
m.isEnabled=function(){return this.R};
function Lg(a){return null!=a.i?a.g[a.i]:null}
function S(a){return!(!a.g||!a.g.length)}
m.show=function(){if(!this.m){a:{var a=this.G,b=Eg;if(b in a.m){if(a.g){if(b==Eg)break a;a.hide();a.g.g.m=!1}a.g=a.m[b];b=a.i;a=a.g;a!=b.u&&(b.u=a,a=a.f.m,b.F?a!=b.F&&b.o.replaceChild(a,b.F):b.o.appendChild(a),b.F=a)}}this.G.show();this.m=!0}};
m.hide=function(){this.m&&(this.s&&(window.clearTimeout(this.s),this.s=null),this.G.hide(),this.m=!1)};
m.clear=function(){this.hide();this.g=null;this.D=!1;null!=this.f&&fh(this.o,this.f);this.i=this.f=null;this.o.clear()};
m.dismiss=function(){var a=this.N;a.m=a.i;this.hide()};
function kg(a){null!=a.f&&fh(a.o,a.f);a.i=a.f=null}
function Og(a,b,c){if(S(a))a.show();else{var d=a.u.m;d&&(b=pg(a.V,d,b||a.u.g.s,c),qg(a.N,b))}}
function ah(a,b,c){for(var d=0,e=0,f;e<a.length;++e)(f=a[e])&&f.position==c&&(3==c?f.vd&&f.vd(b)&&++d:(b.push(f),++d));return d}
function eh(a,b,c){null==a.f||a.o.isSelectable(a.f)?(dh(a,b),null==a.f?jg(a.u):Ng(a.u,a.g[a.f].f)):(fh(a.o,b),c())}
function dh(a,b){null!=b&&fh(a.o,b);null!=a.f&&a.o.highlight(a.f)}
var Eg=Qe++;function gh(){this.l=154}
A(gh,O);gh.prototype.J=function(a){this.g=a.get(128);this.f=a.get(129)};function hh(){this.l=145;this.f=Wg.test("x")}
A(hh,O);var Vg=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),Wg=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])");hh.prototype.Z=function(a){this.g=a.Ia()};
function Tg(a,b){var c=a.g;a.f&&(Wg.test(b)?c="ltr":Vg.test(b)||(c="rtl"));return c}
;function ih(){this.l=117;this.g=[];this.i={vc:1}}
A(ih,O);var jh=window.postMessage&&!(Df||If||Gf);ih.prototype.ca=function(){this.f=null};
function U(a,b,c,d,e,f){var g=kh(a,b);g||(g={},a.g.push({element:b,bd:g}));var h=g[c];h||(h=g[c]=[],a=lh(a,c,b.vc?window:Zf(b),h),"string"!==typeof c?b[c]=a:b.addEventListener?b.addEventListener(c,a,!1):b["on"+c]=a);h.push({xd:!!f,mb:!1,priority:e||0,process:d});h.sort(mh);d.Jc=c}
function nh(a,b,c){if(a=kh(a,b))if(a=a[c.Jc]){b=0;for(var d;d=a[b++];)if(d.process==c){d.mb=!0;break}}}
function oh(a,b,c){U(a,a.i,b,c,void 0,void 0)}
function R(a,b,c){c=c||{};(a=a.i[b])&&a(c,c.za)}
function ph(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)}
function Jg(a,b){if(jh){if(!a.f){a.f=[];var c=w(a.m,a);ph(window,"message",c)}a.f.push(b);c=window.location.href;window.postMessage("sbox.df",/HTTPS?:\/\//i.test(c)?c:"*")}else window.setTimeout(b,0)}
ih.prototype.m=function(a){this.f&&a&&a.source==window&&"sbox.df"==a.data&&this.f.length&&(this.f.shift()(),this.f&&this.f.length&&window.postMessage("sbox.df",window.location.href))};
function lh(a,b,c,d){return w(function(e,f){if(d.length){var g;if(!(g=e)){g={};var h=c.event;h&&(h.keyCode&&(g.keyCode=h.keyCode),g.wd=!0)}g.za=f||b;h=g;for(var k,l,n=0,p;p=d[n++];)p.mb?l=!0:k||(p.xd?qh(this,p,h):k=p.process(h));if(l)for(n=0;p=d[n];)p.mb?d.splice(n,1):++n;if(g.Ma)return delete g.Ma,g.wd&&(g=c.event||g),Wf(g),g.returnValue=!1}},a)}
function kh(a,b){for(var c=0,d;c<a.g.length;++c)if(d=a.g[c],d.element==b)return d.bd;return null}
function qh(a,b,c){Jg(a,function(){b.process(c)})}
function mh(a,b){return b.priority-a.priority}
;function rh(){this.l=494;this.f={};this.m=this.s=0;this.g=-1;this.i=0;this.o={}}
A(rh,O);rh.prototype.K=function(){this.reset()};
rh.prototype.reset=function(){this.f={};this.m=this.s=0;this.g=-1;this.i=0;this.o={}};function sh(){this.l=374}
A(sh,O);sh.prototype.K=function(){this.reset()};
sh.prototype.add=function(a){this.f||(this.f={});this.f[a]=!0};
sh.prototype.reset=function(){this.f={}};function th(){this.l=120;this.D=-1}
A(th,O);var uh=/\.+$/,vh=/\./g,wh=/./g,xh=Re([23]);th.prototype.J=function(a){this.G=a.get(191);this.f=a.get(123);this.m=a.get(118);this.w=a.get(374);this.g=a.get(494);this.C=a.get(126);this.o=a.get(128);this.F=N(a,311)};
th.prototype.setup=function(a){this.u=a.Cd};
th.prototype.K=function(a){this.i=a;this.reset()};
function yh(a,b,c,d){var e=a.m.m;c&&(e=e.replace(wh,"#"));c=[];c[27]=64;c[0]=zh(a.i.clientName);c[28]=zh(a.i.requestIdentifier);c[1]=void 0==b?"":b+"";b=a.w;var f=[];for(g in b.f)f.push(parseInt(g,10));c[26]=f.join("j");var g="";null!=a.o.i?g=a.o.i+"":(b=a.C.g,(10<=b.u||3<=b.w.eb())&&(g="o"));c[2]=g;g="";if(b=a.o.g){for(var h=f=0,k;k=b[h++];){k=ef(k.T(),k.g||[]);if(k!=l){1<f&&(g+="l"+f);g+=(l?"j":"")+k;f=0;var l=k}++f}1<f&&(g+="l"+f)}c[3]=g;l="";g=a.o.g;b=a.g.o;if(g)for(f=0;h=g[f++];){var n=ef(h.T(),
h.g||[]);n in b&&delete b[n]}if(b)for(n in b)l+=(l?"j":"")+n;c[35]=l;n=a.g.g;c[33]=-1<n?String(n):"";c[4]=Math.max(a.m.F-a.s,0);c[5]=Math.max(a.m.H-a.s,0);c[6]=a.D;c[7]=x()-a.s;c[18]=Math.max(a.m.O-a.s,0);c[8]=a.f.aa;l=a.f;l=(n=l.g)?l.f.i:0;c[25]=n?"1"+(a.i.Fc?"a":"")+(a.i.wb?"c":""):"";c[10]=l;n=a.f;c[11]=n.g?n.f.m:0;c[12]=a.f.V;g=a.f;n=g.O;l=g.N;g=g.R;c[9]=n;c[22]=l;c[17]=g;c[13]=a.f.Y;c[14]=a.f.G;c[15]=a.f.L;n=a.f;l=[];for(b=f=0;b<=Ah;++b)g=n.H[b],0==g?f++:(f=1==f?"0j":1<f?b+"-":"",l.push(f+g),
f=0);c[16]=l.join("j");c[36]=a.f.M;n=0;for(var p in a.g.f)n++;c[30]=n;c[31]=a.g.s;c[32]=a.g.m;c[19]=zh(a.i.rb);p=a.g;l=a.C.f;n=!1;l&&(n=l.g.f.e||"");l=0;n?(l|=1,1<p.i&&(l|=2)):0<p.i&&(l|=2);p=l;c[20]=0==p?"":p+"";for(p=0;n=a.F[p++];)l=n.l,xh[l]&&(c[l]=void 0==c[l]?zh(n.f()):"");c=c.join(".").replace(uh,"");if(a.G&&a.u){p=e+c;b:{n=a.u;l=[];if(n)for(f=b=g=0;f<n.length;++f){h=n.charCodeAt(f);if(32>h||127<h||!Bh[h-32]){n=[];break b}g<<=6;g|=Bh[h-32]-1;b+=6;8<=b&&(l.push(g>>b-8&255),b-=8)}n=l}g=n;n={};
n.W=Array(4);n.buffer=Array(4);n.Yd=Array(4);n.padding=Array(64);n.padding[0]=128;for(l=1;64>l;++l)n.padding[l]=0;Ch(n);l=Array(64);64<g.length&&(Ch(n),Dh(n,g),g=Eh(n));for(b=0;b<g.length;++b)l[b]=g[b]^92;for(b=g.length;64>b;++b)l[b]=92;Ch(n);for(b=0;64>b;++b)n.buffer[b]=l[b]^106;Fh(n,n.buffer);n.total=64;Dh(n,Gh(p));p=Eh(n);Ch(n);Fh(n,l);n.total=64;Dh(n,p);p=Eh(n);p=p.slice(0,8);"string"===typeof p&&(p=Gh(p));n="";if(p){l=p.length;for(f=b=g=0;l--;)for(b<<=8,b|=p[f++],g+=8;6<=g;)n+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b>>
g-6&63),g-=6;g&&(n+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b<<8>>g+8-6&63))}p=n}else p="";e={oq:e,gs_l:c+"."+p};d&&(e.ei=d);a.i.zd&&(e.q=a.m.f);return e}
th.prototype.reset=function(){this.s=x();++this.D;var a=this.m;a.F=0;a.H=0;a.O=0;this.w.reset();a=this.f;if(a.g){var b=a.f;b.i=0;b.m=0}a.aa=0;a.u=0;a.V=0;a.O=0;a.N=0;a.R=0;a.Y=0;a.G=0;a.L=0;a.M=0;a.H=[];for(b=0;b<=Ah;++b)a.H[b]=0;for(a=0;b=this.F[a++];)b.reset();this.g.reset()};
function zh(a){return a?a.replace(vh,"-"):""}
;function Hh(){this.l=121}
A(Hh,O);m=Hh.prototype;m.Z=function(a){this.m=a.Db()};
m.J=function(a){this.g=a.get(347);this.u=a.get(130);this.F=a.get(117);this.C=a.get(123);this.o=a.get(118);this.G=a.get(120);this.H=a.get(128);this.D=a.get(139);this.w=a.u;this.s=N(a,294)};
m.K=function(a){this.i=a};
m.search=function(a,b){if(this.s){for(var c=!1,d=0,e;e=this.s[d++];)2==e.f(a,b)&&(c=!0);if(c)return}if(Ve(a)||this.i.la||this.u&&this.u.la()){if(Ae.test(b)){if(this.m&&!this.f){c=this.m;b:{if(d=c.getElementsByTagName("input")){e=0;for(var f;f=d[e++];)if("btnI"==f.name&&"submit"!=f.type.toLowerCase()){d=f;break b}}d=null}d?c=null:(d=P("input"),d.type="hidden",d.name="btnI",d.value="1",c.appendChild(d),c=d);this.f=c}}else this.f&&(this.m.removeChild(this.f),this.f=null);this.g&&this.i.ab&&Ih(this.g,
b);this.w.search(a,b);Jh(this);R(this.F,12,{query:a})}};
m.redirect=function(a){this.g&&this.i.ab&&Ih(this.g,void 0);this.w.redirect(a);Jh(this)};
function Jh(a){var b=a.C;b.m=b.i;a.C.s=null;a.G.reset();a.H.clear();a.o.m!=a.o.f&&(b=a.o,b.m=b.f);a.D&&a.D.clear()}
;function Kh(){this.l=553}
A(Kh,O);Kh.prototype.J=function(a){this.g=N(a,156);a.get(126)};
Kh.prototype.setup=function(){this.g.sort(Lh)};
Kh.prototype.K=function(a){this.f=a;this.i=a.pb};
Kh.prototype.qb=function(a){this.i=a};
function pg(a,b,c,d,e){b=new ff(b,c||Se(b.length),d||"");c=1;if(a.g){d=0;for(var f;f=a.g[d++];)f=f.g(b),f>c&&(c=f)}b.D=c;null!=a.f.Ya&&hf(b,"ds",a.f.Ya,!0);null!=a.f.mc&&hf(b,"swl",a.f.mc,!0);hf(b,"pq",a.i,!0);e&&!b.i&&(b.F=!0);b.i||(b.o=x(),"cp"in b.u||(a=b.H.Ja(),hf(b,"cp",a,!0)),hf(b,"gs_id",b.s),b.g=Te(b.u)+":"+b.w,b.i=!0);return b}
function Lh(a,b){return a.f()-b.f()}
;function Mh(){this.l=123;this.C=!1;this.i=-1}
A(Mh,O);var Nh=[0,1,2,3,4,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8],Ah=Nh[Nh.length-1]+1,Oh=100*Nh.length-1;m=Mh.prototype;m.J=function(a){this.f=a.get(133);this.qa=a.get(130);this.Aa=a.get(118);this.Lc=a.get(120);this.sa=a.get(494);this.Ec=a.get(124);this.ja=a.get(125);this.pa=a.get(230);this.Pc=a.get(127)};
m.K=function(a){this.w=this.Pc.f;this.ra=a;this.C=!0;this.o={};this.F=0;this.Wa=a.Nc;this.Xa=a.Jb;this.m=-1;this.g=this.ra.Gc&&!!this.f};
m.ca=function(){this.C=!1;Ph(this);this.o=this.s=null;this.m=this.i};
function qg(a,b){if(!(!a.C||a.Xa||a.qa&&a.qa.l())){var c=!0,d=gf(b);d>a.i&&(a.i=d);++a.aa;a.sa.f[b.getId()]=!0;Ve(a.Aa.f)||Ve(b.f)||(d=a.sa,d.g=Math.max(d.g,0));d=x();for(var e in a.o)2500<d-a.o[e].o&&Qh(a,e);a.g&&(e=a.f.get(b))&&((c=a.Wa||b.F)&&a.ra.nd&&(b.m=!0),a.ja.process(e),e.m&&++a.V,a.s=null);c&&(a.s=b,a.D||a.Ub())}}
function Rh(a,b){return w(function(c){this.jc(c,b)},a)}
m.Ub=function(){Ph(this);if(!(2<this.w.eb())){var a=this.s;this.s=null;if(a){var b=[],c=a.G;if(c)for(var d in c)L(d,c[d],b);b=this.w.kc(a,b.join("&"),Rh(this,a),w(this.jc,this));a.m||(++this.O,b?(this.o[a.getId()]=a,++this.u):++this.N);a=100;b=(this.u-2)/2;for(c=1;c++<=b;)a*=2;a<this.F&&(a=this.F);this.D=window.setTimeout(w(this.Ub,this),a)}}};
function Ph(a){null!=a.D&&(window.clearTimeout(a.D),a.D=null)}
function Qh(a,b){a.w.Za(b);delete a.o[b];a.u&&--a.u}
m.jc=function(a,b){if(this.C){if(!b&&(b=this.o[(a[2]||{}).j],!b))return;if(!b.m){var c=this.Ec;var d=b,e=a[0],f=a[1],g={},h=a[2];if(h)for(var k in h){var l=h[k];k in c.f&&(l=c.f[k].parse(l));g[k]=l}var n=l=!1;h=!1;k=0;for(var p;p=f[k++];)if(33==(p[1]||0)?n=!0:l=!0,n&&l){h=!0;break}l=0;n=[];for(k=0;p=f[k++];){var r=p[1]||0;if(!h||33!=r){var q=p[0];c.i&&(q=c.g.bold(e.toLowerCase(),Xe(q).replace(Ke,"")));n.push(new Ee(q,Xe(q).replace(Ke,""),l++,r,p[2]||[],Sh(p)))}}c=new jf(d,n,new Ce(g),!1,!0,!1);this.pa&&
(c=this.pa.f(c,this.Aa.f));if(this.g)for(d=this.f,e=c,(e.f&&e.f[0]||""!=e.l.f)&&e&&e.i&&(d.g[e.l.g]=e),f=0;f<d.f.length;++f)d.f[f].update(e);gf(b)<=this.m?!b||b.f||c.m||(d=b,this.M=x()-d.o):(++this.R,this.ja.process(c)||++this.Y,d=b,this.F=c.g.f.d||0,d&&(Qh(this,d.getId()),e=d.o,e=x()-e,d.f?(this.L+=e,this.G=Math.max(e,this.G),++this.H[e>Oh?Ah:Nh[Math.floor(e/100)]]):this.M=e));c&&(c=c.g.f.q||"")&&(this.Lc.u=c)}}};function Th(){this.l=124;this.f={}}
A(Th,O);Th.prototype.J=function(a){this.g=a.get(150);if(a=N(a,158))for(var b=0,c;c=a[b++];)this.f[c.ze()]=c};
Th.prototype.K=function(a){this.i=a.hb};
function Sh(a){return(a=a[3])?new Ce(a):De}
;function Uh(){this.l=125}
A(Uh,O);Uh.prototype.J=function(a){this.m=a.get(117);this.s=a.get(118);this.o=a.get(494);this.f=N(a,122);this.g=a.get(126);this.i=a.get(128);this.f.sort(Vh)};
Uh.prototype.process=function(a){var b=a,c=this.s.f.toLowerCase(),d=this.g.f;c=Ye(c);var e=b.l;b=e?e.l:Ye(b.l.f.toLowerCase());var f=(d=d?d.l:null)?d.l:"";e=1==(0==c.indexOf(b)?0==c.indexOf(f)?d&&d.getId()==e.getId()?0:b.length>=f.length?1:-1:1:-1);c=-1!=e;if(e){if(this.f)for(e=0;b=this.f[e++];)a=b.edit(a);d=this.g.f=a;a=d.l.f;e=d.f;this.i.isEnabled()&&xg(this.i,e,0==d.T());b=this.o;var g=d.l;f=g.getId();if(f in b.f){var h=d.f.length;0<h&&(Ve(g.f)||(b.g=h),g=g.o,g=x()-g,b.m+=g,++b.s);d.g.f.e&&++b.i;
delete b.f[f]}d=d.f;for(f=0;g=d[f++];)b.o[ef(g.T(),g.g||[])]=!0;R(this.m,3,{input:a,suggestions:e})}return c};
function Vh(a,b){return a.f()-b.f()}
;function Wh(){this.l=126}
A(Wh,O);Wh.prototype.J=function(a){this.g=a.get(123)};
Wh.prototype.K=function(){this.f=null};function Xh(){this.l=127;this.i={}}
A(Xh,O);Xh.prototype.J=function(a){a=N(a,149);for(var b=0,c;c=a[b++];)this.i[c.va()]=c};
Xh.prototype.K=function(a){var b="https:"==document.location.protocol,c=[];L("client",a.clientName,c);L("hl",a.lb,c);L("gl",a.pc,c);L("sugexp",a.rb,c);L("gs_rn",64,c);L("gs_ri",a.requestIdentifier,c);a.authuser&&L("authuser",a.authuser,c);this.g={protocol:"http"+(b?"s":"")+"://",host:a.Zb||"clients1."+a.Da,Oa:a.Oa||"/complete/search",oc:c.length?c.join("&"):""};this.f&&this.f.va()==a.connectionType||(this.f=this.i[a.connectionType])};function Yh(){this.l=191}
A(Yh,O);
var Bh=[0,0,0,0,0,0,0,0,0,0,0,0,0,63,0,0,53,54,55,56,57,58,59,60,61,62,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0,0,0,0,64,0,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,0,0,0,0,0],Zh=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],$h=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,2821735955,
4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,2399980690,
4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];function Gh(a){for(var b=[],c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
function Ch(a){a.W[0]=1732584193;a.W[1]=4023233417;a.W[2]=2562383102;a.W[3]=271733878;a.Ba=a.total=0}
function Fh(a,b){for(var c=a.Yd,d=0;64>d;d+=4)c[d/4]=b[d]|b[d+1]<<8|b[d+2]<<16|b[d+3]<<24;var e=a.W[0];d=a.W[1];for(var f=a.W[2],g=a.W[3],h,k,l,n=0;64>n;++n)16>n?(h=g^d&(f^g),k=n):32>n?(h=f^g&(d^f),k=5*n+1&15):48>n?(h=d^f^g,k=3*n+5&15):(h=f^(d|~g),k=7*n&15),l=g,g=f,f=d,e=e+h+$h[n]+c[k]&4294967295,h=Zh[n],d=d+((e<<h|e>>>32-h)&4294967295)&4294967295,e=l;a.W[0]=a.W[0]+e&4294967295;a.W[1]=a.W[1]+d&4294967295;a.W[2]=a.W[2]+f&4294967295;a.W[3]=a.W[3]+g&4294967295}
function Dh(a,b,c){c||(c=b.length);a.total+=c;for(var d=0;d<c;++d)a.buffer[a.Ba++]=b[d],64==a.Ba&&(Fh(a,a.buffer),a.Ba=0)}
function Eh(a){var b=Array(16),c=8*a.total,d=a.Ba;Dh(a,a.padding,56>d?56-d:64-(d-56));for(var e=56;64>e;++e)a.buffer[e]=c&255,c>>>=8;Fh(a,a.buffer);for(e=d=0;4>e;++e)for(c=0;32>c;c+=8)b[d++]=a.W[e]>>c&255;return b}
;function ai(){this.l=150}
A(ai,O);
ai.prototype.bold=function(a,b){b=We(b.replace(Be,""));a=We(Ye(a,!0));if(Ze(b,a))return a+"<b>"+b.substr(a.length)+"</b>";for(var c="",d=[],e=b.length-1,f=0,g=-1,h;h=b.charAt(f);++f)" "==h||"\t"==h?c.length&&(d.push({t:c,ya:g,e:f+1}),c="",g=-1):(c+=h,-1==g?g=f:f==e&&d.push({t:c,ya:g,e:f+1}));c=a.split(/\s+/);f={};for(e=0;g=c[e++];)f[g]=1;h=-1;c=[];var k=d.length-1;for(e=0;g=d[e];++e)f[g.t]?(g=-1==h,e==k?c.push({ya:g?e:h,e:e}):g&&(h=e)):-1<h&&(c.push({ya:h,e:e-1}),h=-1);if(!c.length)return"<b>"+b+
"</b>";e="";for(f=g=0;h=c[f];++f)(k=d[h.ya].ya)&&(e+="<b>"+b.substring(g,k-1)+"</b> "),g=d[h.e].e,e+=b.substring(k,g);g<b.length&&(e+="<b>"+b.substring(g)+"</b> ");return e};function bi(){this.l=146}
A(bi,O);function ci(a){JSON.parse('"\\u30'+a.split(",").join("\\u30")+'"')}
ci("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C");ci("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC");ci("D1,D4,D7,DA,DD");ci("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC");ci("D1__,D4__,D7__,DA__,DD");ci("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB");ci("CF,D2,D5,D8,DB");function di(){this.l=116;this.M=!0}
A(di,O);m=di.prototype;
m.Z=function(a,b){this.R=a.Ia();b.addRule(".sbdd_a",(Nf?"margin-top:-1px;":"")+"z-index:989");b.addRule(".sbdd_a[dir=ltr] .fl, .sbdd_a[dir=rtl] .fr","float:left");b.addRule(".sbdd_a[dir=ltr] .fr, .sbdd_a[dir=rtl] .fl","float:right");Nf?b.addRule(".sbdd_b","background:#fff;border:1px solid #ccc;border-top-color:#d9d9d9;"+b.prefix("border-radius:0 0 3px 3px;")+"cursor:default"):b.addRule(".sbdd_b","background:#fff;border:1px solid #ccc;border-top-color:#d9d9d9;"+b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"cursor:default");
b.addRule(".sbdd_c","border:0;display:block;position:absolute;top:0;z-index:988")};
m.J=function(a){this.N=a.get(130);a.get(115);this.s=a.get(118);this.H=a.get(117);this.Y=a.g.getId()};
m.setup=function(a){this.f=a};
m.ma=function(a){this.g=Q();this.g.className="gstl_"+this.Y+" sbdd_a";ei(this.g,!1);this.O=this.g;this.D=Q("fl");this.g.appendChild(this.D);this.w=Q();this.g.appendChild(this.w);this.o=Q("sbdd_b");this.w.appendChild(this.o);this.aa=Q();this.w.appendChild(this.aa);this.f.Gb&&(this.i=P("iframe","gstl_"+this.Y+" sbdd_c"),ei(this.i,!1),(this.f.da||document.body).appendChild(this.i));if(this.m=this.f.Dc)"number"===typeof this.m&&(this.m+=this.f.Fa[2],this.m-=fi(this)),gi(this,this.g,this.m);hi(this);(a.da||
document.body).appendChild(this.g);oh(this.H,8,w(this.hc,this))};
m.K=function(a){this.f=a;this.g.style.position=a.ta};
m.getHeight=function(){this.C||(this.C=this.o?Math.max(this.o.offsetHeight,0):0);return this.C};
m.show=function(a){ii(this,a.na||this.R);var b=a.marginWidth;if(this.V!=b){var c=this.D.style;b?(c.width=b+"px",c.height="1px"):c.height="";this.V=b}this.M=a.yd;this.L=a.horizontalAlignment;ji(this.s.g,!0);ei(this.O,!0);ei(this.i,!0);R(this.H,14);this.hc()};
m.hide=function(){this.C=0;ji(this.s.g,!1);ei(this.O,!1);ei(this.i,!1);ii(this,this.R);R(this.H,9)};
m.hc=function(){this.C=0;hi(this);if(this.i){var a=this.f.ub[0],b=this.i.style;"relative"!=this.f.ta&&(b.top=this.g.style.top,b.left=this.g.offsetLeft+this.D.offsetWidth+"px");a=this.getHeight()+a;this.i.style.height=Math.max(a,0)+"px";gi(this,this.i,this.o.offsetWidth)}this.u&&Xg(this.u.f)};
function hi(a){var b,c;if(c=a.u)c=a.u.f,c=c.f.ed||c.F==c.D?c.V:null;var d=(b=c)?b.offsetWidth:ki(a.s.g);var e=a.m;c=fi(a);e?"string"===typeof e&&(e=null):a.V||!a.M?a.w.style.display="inline-block":(a.w.style.display="",e=d+a.f.Fa[2]-c,gi(a,a.g,e));if("relative"!=a.f.ta){var f="rtl"==Rc()!=("rtl"==a.G),g=a.f.da;var h={ia:0,Ta:0};if(f||!g||g==document.body||a.f.Bb)h=Rf(a.s.g.D),b&&(h.ia=Rf(b).ia);b=h;h=e;e=a.f.Fa;g=e[1];e=e[0];e=b.Ta+a.s.getHeight()+e;if("right"==a.L){h="rtl"==Rc()!=("rtl"==a.G);var k=
a.f.da;g=-g;if(h||!k||k==document.body)g+=(Zf(a.g)||window).document.documentElement.clientWidth-d-b.ia;d=g;h=e;b=void 0}else b=b.ia+g,"center"==a.L&&h&&(b+=(d-h)/2),h=e,d=void 0;e={ia:0,Ta:0};"absolute"==a.f.ta&&a.f.da&&a.f.da!=document.body&&(f||a.f.Bb)&&(e=Rf(a.f.da));g=a.g.style;g.top=h-e.Ta+"px";g.left=g.right="";void 0!=b?g.left=b+c-e.ia+"px":(b=0,a.f.da&&f&&(b=document.body.clientWidth-(e.ia+a.f.da.offsetWidth)),g.right=d+c-b+"px")}}
function gi(a,b,c){"number"===typeof c?0<c&&(a.f.Xd?b.style.width=c+"px":b.style.minWidth=c+"px"):b.style.width=c}
function ei(a,b){a&&(a.style.display=b?"":"none")}
function ii(a,b){if(a.G!=b){a.G=b;var c=a.f.da;c&&c!=document.body&&(c.style.textAlign="rtl"==b?"right":"left");Uf(a.g,b)}}
function fi(a){return a.N&&a.N.g()&&(a=a.s.g.u.offsetWidth,"number"===typeof a)?a:0}
;function li(a,b){this.type=a;this.f=this.target=b;this.defaultPrevented=this.l=!1}
li.prototype.stopPropagation=function(){this.l=!0};
li.prototype.preventDefault=function(){this.defaultPrevented=!0};var mi=!I||9<=Number(xc),ni=I&&!uc("9"),oi=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{u.addEventListener("test",va,b),u.removeEventListener("test",va,b)}catch(c){}return a}();function pi(a,b){li.call(this,a?a.type:"");this.relatedTarget=this.f=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.g=null;a&&this.init(a,b)}
A(pi,li);var qi={2:"touch",3:"pen",4:"mouse"};
pi.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.f=b;var e=a.relatedTarget;if(e){if(mc){a:{try{hc(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:qi[a.pointerType]||"";this.state=a.state;this.g=a;a.defaultPrevented&&this.preventDefault()};
pi.prototype.stopPropagation=function(){pi.ea.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};
pi.prototype.preventDefault=function(){pi.ea.preventDefault.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ni)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var ri="closure_listenable_"+(1E6*Math.random()|0),si=0;function ti(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.Ka=e;this.key=++si;this.oa=this.Ca=!1}
function ui(a){a.oa=!0;a.listener=null;a.f=null;a.src=null;a.Ka=null}
;function vi(a){this.src=a;this.listeners={};this.f=0}
vi.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=wi(a,b,d,e);-1<g?(b=a[g],c||(b.Ca=!1)):(b=new ti(b,this.src,f,!!d,e),b.Ca=c,a.push(b));return b};
vi.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=wi(e,b,c,d);return-1<b?(ui(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function xi(a,b){var c=b.type;c in a.listeners&&Ka(a.listeners[c],b)&&(ui(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function wi(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.oa&&f.listener==b&&f.capture==!!c&&f.Ka==d)return e}return-1}
;var yi="closure_lm_"+(1E6*Math.random()|0),zi={},Ai=0;function Bi(a,b,c,d,e){if(d&&d.once)Ci(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Bi(a,b[f],c,d,e);else c=Di(c),a&&a[ri]?a.f.add(String(b),c,!1,za(d)?!!d.capture:!!d,e):Ei(a,b,c,!1,d,e)}
function Ei(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=za(e)?!!e.capture:!!e,h=Fi(a);h||(a[yi]=h=new vi(a));c=h.add(b,c,d,g,f);if(!c.f){d=Gi();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)oi||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Hi(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ai++}}
function Gi(){var a=Ii,b=mi?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Ci(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ci(a,b[f],c,d,e);else c=Di(c),a&&a[ri]?a.f.add(String(b),c,!0,za(d)?!!d.capture:!!d,e):Ei(a,b,c,!0,d,e)}
function Ji(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ji(a,b[f],c,d,e);else(d=za(d)?!!d.capture:!!d,c=Di(c),a&&a[ri])?a.f.remove(String(b),c,d,e):a&&(a=Fi(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=wi(b,c,d,e)),(c=-1<a?b[a]:null)&&Ki(c))}
function Ki(a){if("number"!==typeof a&&a&&!a.oa){var b=a.src;if(b&&b[ri])xi(b.f,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Hi(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ai--;(c=Fi(b))?(xi(c,a),0==c.f&&(c.src=null,b[yi]=null)):ui(a)}}}
function Hi(a){return a in zi?zi[a]:zi[a]="on"+a}
function Li(a,b,c,d){var e=!0;if(a=Fi(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.oa&&(f=Mi(f,d),e=e&&!1!==f)}return e}
function Mi(a,b){var c=a.listener,d=a.Ka||a.src;a.Ca&&Ki(a);return c.call(d,b)}
function Ii(a,b){if(a.oa)return!0;if(!mi){var c=b||v("window.event"),d=new pi(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.f;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.l&&0<=g;g--){d.f=c[g];var h=Li(c[g],f,!0,d);e=e&&h}for(g=0;!d.l&&g<c.length;g++)d.f=c[g],h=Li(c[g],f,!1,d),e=e&&h}return e}return Mi(a,new pi(b,this))}
function Fi(a){a=a[yi];return a instanceof vi?a:null}
var Ni="__closure_events_fn_"+(1E9*Math.random()>>>0);function Di(a){if(ya(a))return a;a[Ni]||(a[Ni]=function(b){return a.handleEvent(b)});
return a[Ni]}
;function Oi(){Qc.call(this);this.f=new vi(this);this.w=this;this.o=null}
A(Oi,Qc);Oi.prototype[ri]=!0;Oi.prototype.addEventListener=function(a,b,c,d){Bi(this,a,b,c,d)};
Oi.prototype.removeEventListener=function(a,b,c,d){Ji(this,a,b,c,d)};
Oi.prototype.dispatchEvent=function(a){var b=this.o;if(b){var c=[];for(var d=1;b;b=b.o)c.push(b),++d}b=this.w;d=a.type||a;if("string"===typeof a)a=new li(a,b);else if(a instanceof li)a.target=a.target||b;else{var e=a;a=new li(d,b);Ya(a,e)}e=!0;if(c)for(var f=c.length-1;!a.l&&0<=f;f--){var g=a.f=c[f];e=Pi(g,d,!0,a)&&e}a.l||(g=a.f=b,e=Pi(g,d,!0,a)&&e,a.l||(e=Pi(g,d,!1,a)&&e));if(c)for(f=0;!a.l&&f<c.length;f++)g=a.f=c[f],e=Pi(g,d,!1,a)&&e;return e};
Oi.prototype.ka=function(){Oi.ea.ka.call(this);if(this.f){var a=this.f,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ui(d[e]);delete a.listeners[c];a.f--}}this.o=null};
function Pi(a,b,c,d){b=a.f.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.oa&&g.capture==c){var h=g.listener,k=g.Ka||g.src;g.Ca&&xi(a.f,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Qi(a,b){this.g=a;this.i=b;this.l=0;this.f=null}
Qi.prototype.get=function(){if(0<this.l){this.l--;var a=this.f;this.f=a.next;a.next=null}else a=this.g();return a};function Ri(a){u.setTimeout(function(){throw a;},0)}
var Si;
function Ti(){var a=u.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=Dc("IFRAME");e.style.display="none";ec(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write($b(ac));e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=w(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Tb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.vb;c.vb=null;e()}};
return function(e){d.next={vb:e};d=d.next;b.port2.postMessage(0)}}return function(e){u.setTimeout(e,0)}}
;function Ui(){this.l=this.f=null}
var Wi=new Qi(function(){return new Vi},function(a){a.reset()});
Ui.prototype.add=function(a,b){var c=Wi.get();c.set(a,b);this.l?this.l.next=c:this.f=c;this.l=c};
Ui.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.l=null),a.next=null);return a};
function Vi(){this.next=this.scope=this.f=null}
Vi.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Vi.prototype.reset=function(){this.next=this.scope=this.f=null};function Xi(a){Yi||Zi();$i||(Yi(),$i=!0);aj.add(a,void 0)}
var Yi;function Zi(){if(u.Promise&&u.Promise.resolve){var a=u.Promise.resolve(void 0);Yi=function(){a.then(bj)}}else Yi=function(){var b=bj;
!ya(u.setImmediate)||u.Window&&u.Window.prototype&&!E("Edge")&&u.Window.prototype.setImmediate==u.setImmediate?(Si||(Si=Ti()),Si(b)):u.setImmediate(b)}}
var $i=!1,aj=new Ui;function bj(){for(var a;a=aj.remove();){try{a.f.call(a.scope)}catch(c){Ri(c)}var b=Wi;b.i(a);100>b.l&&(b.l++,a.next=b.f,b.f=a)}$i=!1}
;function cj(a,b){Oi.call(this);this.i=a||1;this.l=b||u;this.s=w(this.Wd,this);this.u=x()}
A(cj,Oi);m=cj.prototype;m.enabled=!1;m.ba=null;m.setInterval=function(a){this.i=a;this.ba&&this.enabled?(this.stop(),this.start()):this.ba&&this.stop()};
m.Wd=function(){if(this.enabled){var a=x()-this.u;0<a&&a<.8*this.i?this.ba=this.l.setTimeout(this.s,this.i-a):(this.ba&&(this.l.clearTimeout(this.ba),this.ba=null),this.dispatchEvent("tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.ba||(this.ba=this.l.setTimeout(this.s,this.i),this.u=x())};
m.stop=function(){this.enabled=!1;this.ba&&(this.l.clearTimeout(this.ba),this.ba=null)};
m.ka=function(){cj.ea.ka.call(this);this.stop();delete this.l};function dj(){this.l=119;this.N=!1;this.s=Se(0);this.R=-1;this.V=!1}
A(dj,O);m=dj.prototype;
m.Z=function(a,b){this.G=a;this.f=a.fb();this.f.setAttribute("aria-haspopup",!1);this.f.setAttribute("role","combobox");this.f.setAttribute("aria-autocomplete","list");this.Wa=a.Ia();if(!a.Va()){b.addRule(".sbib_a","background:#fff;"+b.prefix("box-sizing:border-box;"));var c=Mf&&Hf||Df?6:5;b.addRule(".sbib_b",b.prefix("box-sizing:border-box;")+"height:100%;overflow:hidden;padding:"+c+"px 9px 0");b.addRule(".sbib_c[dir=ltr]","float:right");b.addRule(".sbib_c[dir=rtl]","float:left");b.addRule(".sbib_d",
b.prefix("box-sizing:border-box;")+"height:100%;unicode-bidi:embed;white-space:nowrap");b.addRule(".sbib_d[dir=ltr]","float:left");b.addRule(".sbib_d[dir=rtl]","float:right");Ef&&b.addRule(".sbib_a input::-ms-clear","display: none");b.addRule(".sbib_a,.sbib_c","vertical-align:top")}};
m.J=function(a){this.g=a.get(118);this.i=a.get(117);this.sa=a.get(128);this.H=a.get(173);this.ja=!!a.get(136);this.Xa=a.g.getId()};
m.setup=function(a){this.w=a;this.L=a.wa;this.M=a.ud;this.Aa=a.xb;this.m=Sf(this.f);this.Ua();var b=this;Df&&U(this.i,this.f,"beforedeactivate",function(c){b.V&&(b.V=!1,c.Ma=!0)},10);
a=(E("iPhone")&&!E("iPod")&&!E("iPad")||E("iPad")||E("iPod"))&&Jf;Ff&&ej(this);(Kf||a)&&fj(this);this.D=this.f};
m.ma=function(a){var b=!!a.Ic[130];if(this.ja||Rg(this.g)||b||a.Oc)(this.o=this.G.get("gs_id"))?(b&&(this.u=this.G.get("sb_chc")),this.C=this.G.get("sb_ifc")):(this.o=Q("gstl_"+this.Xa+" sbib_a"),a=this.o.style,this.M&&(a.width=this.M+"px"),this.L&&(a.height=this.L+"px"),a=this.f.style,a.border="none",a.padding=Gf||Df?"0 1px":"0",a.margin="0",a.height="auto",a.width="100%",this.f.className=this.w.kb,b&&(this.u=Q("sbib_d"),this.u.id=this.G.getId("sb_chc"),this.o.appendChild(this.u)),Rg(this.g)&&this.H&&
(this.H.f.className+=" sbib_c",b=this.H,a=this.Wa,b.s!=a&&(b.f.dir=b.s=a),this.o.appendChild(this.H.f)),this.C=Q("sbib_b"),this.C.id=this.G.getId("sb_ifc"),this.o.appendChild(this.C),gj(this,this.o,this.C)),this.w.Rd||this.w.Ac||hj(this,this.o),this.D=this.o;this.Aa&&(b=w(this.Sb,this),U(this.i,this.f,"blur",b,10),b=w(this.cc,this),U(this.i,this.f,"focus",b,10),this.ra=!0);oh(this.i,8,w(this.ad,this));ij(this)};
m.K=function(a){this.w=a;this.f.setAttribute("autocomplete","off");this.f.setAttribute("spellcheck",!1);this.f.style.outline=a.Nb?"":"none";this.pa=this.f.value;this.ra&&this.cc();jj(this)};
m.ca=function(){this.ra&&this.Sb();kj(this)};
function gj(a,b,c){kj(a);c||(c=b);a.f.parentNode.replaceChild(b,a.f);c.appendChild(a.f);a.m&&a.w.Jd&&(Df||Ff?Jg(a.i,function(){a.f.focus();Qf(a.f,a.s.Ja())}):a.f.focus());
jj(a)}
m.getHeight=function(){var a=this.D?this.D.offsetHeight:0;this.L>a&&(a=this.L);return a};
function ki(a){return a.M?a.M:a.D?a.D.offsetWidth:0}
m.select=function(){this.f.select();this.Ua()};
m.refresh=function(){Lf&&(this.f.value="");this.f.value=this.g.f;Lf&&(this.f.value=this.f.value);lj(this)};
m.focus=function(){if(!this.m)try{this.f.focus(),this.m=!0,lj(this)}catch(a){}};
m.blur=function(){this.m&&(this.f.blur(),this.m=!1)};
m.isFocused=function(){return this.m};
m.clear=function(){this.f.value=""};
function lj(a){if(a.m){var b=a.f.value.length;a.s=Se(b);Qf(a.f,b)}}
function hj(a,b){U(a.i,b,"mouseup",function(){a.f.focus()})}
function ij(a){function b(e){U(a.i,a.f,e,w(a.Wb,a),10,c)}
U(a.i,a.f,"keydown",w(a.Yc,a));(Gf||a.w.xc)&&U(a.i,a.f,"keypress",w(a.Zc,a));U(a.i,a.f,"select",w(a.Ua,a),10);var c=!1;b("mousedown");b("keyup");b("keypress");c=!0;b("mouseup");b("keydown");b("focus");b("blur");b("cut");b("paste");b("input");var d=w(a.Vc,a);U(a.i,a.f,"compositionstart",d);U(a.i,a.f,"compositionend",d)}
m.Vc=function(a){a=a.type;"compositionstart"==a?(a=this.g,1!=a.w&&(a.w=!0)):"compositionend"==a&&(a=this.g,0!=a.w&&(a.w=!1))};
m.Yc=function(a){var b=a.keyCode;this.R=b;var c=(Hf||Ff)&&(38==b||40==b)&&S(this.sa),d=13==b,e=27==b;this.O=!1;9!=b||a.shiftKey||(this.O=Kg(this.g));if(d){var f=this;Jg(this.i,function(){f.sa.u.search(a.shiftKey?4:3)})}if(c||d||e||this.O)a.Ma=!0};
m.Zc=function(a){var b=a.keyCode,c=9==b&&this.O;if(13==b||27==b||c)a.Ma=!0};
m.Wb=function(a){if(!this.qa){var b=a.za;if(!(b.indexOf("key")||a.ctrlKey||a.altKey||a.shiftKey||a.metaKey))a:if(a=a.keyCode,"keypress"!=b){var c=38==a||40==a;if("keydown"==b){var d=this.g;var e=229==a;(d.G=e)&&d.D.add(4);if(c)break a}else if(d=a!=this.R,this.R=-1,!c||d)break a;switch(a){case 27:a=this.g;a.o.Md?a.search(5):(a.i.isVisible()?a.i.dismiss():a.g.blur(),jg(a));break;case 37:Sg(this.g,"rtl");break;case 39:Sg(this.g,"ltr");break;case 38:this.g.i.ec();break;case 40:a=this.g;c=this.s;S(a.i)?
a.i.dc():Og(a.i,c);break;case 46:a=this.g;a.f&&this.s.Fb()==a.f.length&&(a.N&&a.N.clear(),a.o.Ld&&a.search(2));break;case 8:a=this.g,a.C&&0==this.s.Ja()&&a.C.f()}}this.Ua();Mg(this.g,this.f.value,this.s,b)}};
m.Uc=function(){this.m=!0;R(this.g.s,10)};
m.Sc=function(){this.m=!1;Ig(this.g)};
function jj(a){a.N||(a.N=!0,a.aa=w(a.Uc,a),U(a.i,a.f,"focus",a.aa,99),a.Y=w(a.Sc,a),U(a.i,a.f,"blur",a.Y,99))}
function kj(a){a.N&&(a.N=!1,nh(a.i,a.f,a.aa),nh(a.i,a.f,a.Y))}
m.cc=function(){this.F||(this.F=new cj(this.w.pollingInterval||50),this.F.f.add("tick",this.Gd,!1,void 0,this),this.F.start())};
m.Sb=function(){this.F&&(this.F.stop(),this.F=null)};
m.Gd=function(){this.Wb({za:"polling"})};
m.ad=function(){if(Ff){var a=this.f,b=document.createEvent("KeyboardEvent");b.initKeyEvent&&(b.initKeyEvent("keypress",!0,!0,null,!1,!1,!0,!1,27,0),a.dispatchEvent(b))}};
m.Ua=function(){if(this.m){a:{var a=this.f;try{if("selectionStart"in a){var b=a.selectionStart;var c=a.selectionEnd}else{var d=a.createTextRange(),e=Tf(a).selection.createRange();d.inRange(e)&&(d.setEndPoint("EndToStart",e),b=d.text.length,d.setEndPoint("EndToEnd",e),c=d.text.length)}if(void 0!==b){var f=Se(b,c);break a}}catch(g){}f=null}f&&(this.s=f)}};
function ej(a){var b;ph(window,"pagehide",function(){a.qa=!0;b=a.f.value});
ph(window,"pageshow",function(c){a.qa=!1;(c.persisted||void 0!==b)&&Qg(a.g,b)})}
function fj(a){ph(window,"pageshow",function(b){b.persisted&&a.pa&&Qg(a.g,a.pa)})}
function ji(a,b){a.f.setAttribute("aria-haspopup",b);b||a.f.removeAttribute("aria-activedescendant")}
;function mj(){this.l=129;this.H={};this.L=[];this.N=[];this.O=[];this.w=[];this.R=0}
A(mj,O);m=mj.prototype;
m.Z=function(a,b){this.Y=a;this.aa=a.fb();this.F=a.Ia();Nf||b.addRule(".sbsb_a","background:#fff");b.addRule(".sbsb_b","list-style-type:none;margin:0;padding:0");Nf||b.addRule(".sbsb_c","line-height:22px;overflow:hidden;padding:0 10px");b.addRule(".sbsb_d","background:#eee");b.addRule(".sbsb_e","height:1px;background-color:#e5e5e5");b.addRule("#sbsb_f","font-size:11px;color:#36c;text-decoration:none");b.addRule("#sbsb_f:hover","font-size:11px;color:#36c;text-decoration:underline");b.addRule(".sbsb_g",
"text-align:center;padding:8px 0 7px;position:relative");b.addRule(".sbsb_h","font-size:15px;height:28px;margin:0.2em"+(Hf?";-webkit-appearance:button":""));b.addRule(".sbsb_i","font-size:13px;color:#36c;text-decoration:none;line-height:100%");b.addRule(".sbsb_i:hover","text-decoration:underline");b.addRule(".sbsb_j","padding-top:1px 0 2px 0;font-size:11px");b.addRule(".sbdd_a[dir=ltr] .sbsb_j","padding-right:4px;text-align:right");b.addRule(".sbdd_a[dir=rtl] .sbsb_j","padding-left:4px;text-align:left");
Nf&&(b.addRule(".sbsb_c[dir=ltr] .sbsb_k","padding:10px 3px 11px 8px"),b.addRule(".sbsb_c[dir=rtl] .sbsb_k","padding:10px 8px 11px 3px"))};
m.J=function(a){this.C=a.get(128);this.u=a.get(118);this.G=a.get(121);a=N(a,152);var b={};if(a)for(var c=0,d;d=a[c++];)b[d.m]=d;this.ja=b};
m.setup=function(a){this.f=a};
m.ma=function(){this.m=Q();this.g=P("ul","sbsb_b");this.g.setAttribute("role","listbox");this.m.appendChild(this.g)};
m.K=function(a){this.f=a;var b=a.Vb;b&&(this.V=this.Y.Cb(b));this.m.className=a.Vd||"sbsb_a";this.M=a.Td||"sbsb_d"};
m.highlight=function(a){(a=this.w[a])&&a.isSelectable()&&(ad(a.f().parentNode,this.M),(a=a.f().id)&&this.aa.setAttribute("aria-activedescendant",a))};
function fh(a,b){var c=a.w[b];c&&bd(c.f().parentNode,a.M)}
m.clear=function(){for(var a,b,c;c=this.L.pop();)a=c.T(),(b=this.H[a])||(b=this.H[a]=[]),b.push(c),a=c.f(),a.parentNode.removeChild(a);for(;a=this.g.firstChild;)a=this.g.removeChild(a),a.l?this.O.push(a):a!=this.s&&a!=this.o&&this.N.push(a);this.s&&(this.s.style.display="none");this.o&&(this.o.style.display="none");this.w=[]};
m.isSelectable=function(a){return(a=this.w[a])?a.isSelectable():!1};
function Yg(a,b){var c=b.T(),d=a.ja[c];if(!d)return!1;(c=(c=a.H[c])&&c.pop())||(c=nj(a,d));d.Qa(b,c);a.L.push(c);var e=c.f(),f=oj(a);f.appendChild(e);if(void 0!==b.s){a.w.push(c);var g=a.D;var h=b.l;a.f.md&&(e.onmouseover=function(){ch(a.C,h)},e.onmouseout=function(){kg(a.C)});
var k=c.f();k.onclick=function(l){a.u.g.blur();b.i&&Ng(a.u,b.f);kg(a.C);var n=a.C;n.i=n.f=h;l=l||Zf(k).event;d.Pa(l,b,a.G)}}else g=a.F;
Uf(f,g);return!0}
function nj(a,b){var c=b.Ea(a.G),d=c.f();ad(d,"sbse");d.id="sbse"+a.R;(d=c.f())&&d.setAttribute("role","option");a.R++;return c}
function bh(a,b,c,d){var e=P("input");e.type="button";e.value=Xe(b);e.onclick=function(){a.G.search(a.u.f,d)};
if(a.f.dd){b="lsb";var f=P("span");var g=P("span");f.className="ds";g.className="lsbb";f.appendChild(g);g.appendChild(e)}else b="sbsb_h",f=e;e.className=b;c.appendChild(f)}
function oj(a){var b=a.N.pop();if(b)return a.g.appendChild(b),b;b=P("li");b.setAttribute("role","presentation");b.className="sbsb_c "+a.f.Ra;b.onmousedown=w(a.ob,a);a.g.appendChild(b);return b}
m.ob=function(a){a=a||Zf(this.m).event;a.stopPropagation?(a.stopPropagation(),window.Polymer&&window.Polymer.Element&&a.preventDefault()):Df&&!Gf&&(this.u.g.V=!0);return!1};
function Xg(a){if(a.i){var b=0,c=a.u.g.u;c&&(b=c.offsetWidth);b=ki(a.u.g)-b-3;0<b&&(a.i.style.width=b+"px")}}
;function pj(){this.l=147}
A(pj,O);pj.prototype.Z=function(a){this.s=a.Db()||document.body};
pj.prototype.setup=function(a){this.u=a};
pj.prototype.getHeight=function(){this.f||Zg(this);$g(this);if(!this.g){var a=this.f;"|"!=a.innerHTML&&(a.innerHTML="|");this.g=this.f.offsetHeight}return this.g};
function Zg(a){var b=Q(a.u.kb),c=b.style;c.background="transparent";c.color="#000";c.padding=0;c.position="absolute";c.whiteSpace="pre";a.f=b;a.f.style.visibility="hidden";a.s.appendChild(a.f)}
function $g(a){var b=x();if(!a.m||a.m+3E3<b){a.m=b;b=a.f;var c=Zf(b);b=(b=c.getComputedStyle?c.getComputedStyle(b,""):b.currentStyle)?b.fontSize:null;a.o&&b==a.o||(a.i={},a.g=null,a.o=b)}}
;function qj(){lf.call(this);this.set(191,new Yh);this.set(150,new ai);this.set(146,new bi);this.set(147,new pj);M(this,149,new zg);this.set(145,new hh);this.set(117,new ih);this.set(494,new rh);this.set(374,new sh);this.set(120,new th);this.set(121,new Hh);this.set(553,new Kh);this.set(124,new Th);this.set(125,new Uh);this.set(123,new Mh);this.set(126,new Wh);this.set(127,new Xh);this.set(115,new Cg);this.set(118,new Gg);this.set(128,new Ug);M(this,154,new gh);this.set(116,new di);this.set(119,new dj);
this.set(129,new mj)}
A(qj,lf);function rj(){this.l=347;this.f=[];this.g=0}
A(rj,O);rj.prototype.J=function(a){this.o=a.get(120)};
rj.prototype.K=function(a){this.m="//"+(a.Bd||"www."+a.Da)+"/gen_204?";this.i=a.Sd||{}};
function Ih(a,b){var c=yh(a.o,b,void 0,void 0),d;for(d in a.i)d in c||(c[d]=a.i[d]);c=Te(c,!0);sj(a,a.m+c)}
function sj(a,b){var c=new Image,d=a.g,e=a.f;c.onerror=c.onload=c.onabort=function(){try{delete e[d]}catch(f){}};
a.f[a.g++]=c;c.src=b}
;function tj(){this.l=151;this.g=!0;this.f={}}
A(tj,O);m=tj.prototype;m.J=function(a){this.i=a.get(150)};
m.setup=function(){this.o=Re([0])};
m.K=function(a){this.m=a.hb;this.g=a.wb};
m.ca=function(){this.g=!1};
m.update=function(a){if(this.g){var b=a.f;if(b.length){var c=a.l.l;a:{var d=Number.MAX_VALUE;for(var e,f=0;e=b[f++];){if(!this.o[e.T()]){d=-1;break a}e=e.f;d=Math.min(e.length,d)}}if(-1!=d){var g=b[0].f;if(Ze(g,c,!0))for(f=c.length+1;f<=d;){c=null;for(e=0;g=b[e++];){g=g.f;if(f>g.length)return;g=g.substr(0,f);if(!c)c=g;else if(c!=g)return}this.f[c]=a;++f}}}}};
m.get=function(a){if(this.g){var b=this.f[a.l];if(b){for(var c=a.w,d=a.l,e=b.g,f=this.m||!e.f.k,g=[],h,k,l=b.f,n=0,p;p=l[n++];)k=p.f,h=f?this.i.bold(c,k):We(k),g.push(new Ee(h,k,p.l,p.T(),p.g||[],p.m));delete this.f[d];return new jf(a,g,e,!0,b.i,!1)}}return null};
m.reset=function(){this.f={}};function uj(){this.l=133;this.g={};this.f=[];this.m=this.i=0}
A(uj,O);uj.prototype.J=function(a){this.f=N(a,151);this.f.sort(vj)};
uj.prototype.K=function(){this.m=this.i=0};
uj.prototype.get=function(a){var b=this.g[a.g];if(b)++this.i;else if(this.f)for(var c=0;c<this.f.length;++c)if(b=this.f[c].get(a)){b&&b.i&&(this.g[b.l.g]=b);++this.m;break}return b?new jf(a,b.f,b.g,b.m,b.i,b.s):null};
uj.prototype.has=function(a){return!!this.g[a.g]};
function vj(){return 0}
;function wj(a){this.l=a;this.f=new RegExp("(?:^|\\s+)"+a+"(?:$|\\s+)")}
function xj(a,b){b&&!a.f.test(b.className)&&(b.className+=" "+a.l)}
function yj(a,b){b&&(b.className=b.className.replace(a.f," "))}
;function zj(){this.l=570;this.m=!1}
A(zj,O);m=zj.prototype;m.Z=function(a){this.s=a};
m.J=function(a){this.o=a.get(117);this.u=a.get(118)};
m.setup=function(a){var b=a.ua;if(this.f=b?this.s.Cb(b):null)oh(this.o,10,w(this.Tc,this)),oh(this.o,11,w(this.Rc,this)),U(this.o,this.f,"mouseover",w(this.Xc,this)),U(this.o,this.f,"mouseout",w(this.Wc,this)),a.cb&&(this.i=new wj(a.cb)),a.bb&&(this.g=new wj(a.bb))};
m.K=function(){this.m=!0;this.f&&this.u.g.isFocused()&&this.g&&xj(this.g,this.f)};
m.ca=function(){this.m=!1;this.f&&(this.i&&yj(this.i,this.f),this.g&&yj(this.g,this.f))};
m.Xc=function(){this.m&&this.i&&xj(this.i,this.f)};
m.Wc=function(){this.m&&this.i&&yj(this.i,this.f)};
m.Tc=function(){this.m&&this.g&&xj(this.g,this.f)};
m.Rc=function(){this.m&&this.g&&yj(this.g,this.f)};function Aj(){this.l=156}
A(Aj,O);Aj.prototype.g=function(a){var b=1,c=a.C;Ve(a.f)||"focus"!=c&&"input"!=c||(b=2);return b};
Aj.prototype.f=function(){return 2};function Bj(){this.l=160}
A(Bj,O);m=Bj.prototype;m.Z=function(a,b){this.i=a;a.Va()||(b.addRule(".gsok_a","background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"),b.addRule(".gsok_a img","border:none;visibility:hidden"))};
m.J=function(a){this.w=a.get(374);this.C=a.get(128)};
m.setup=function(a){this.m=!!a.La;this.o=a.Pb;this.u=a.Na;this.D=a.Fd;this.F=a.Ed};
m.ma=function(){(this.g=this.i.get("gs_ok"))?this.f=this.g.firstChild:(this.f=P("img"),this.f.src=this.o+"/tia.png",this.g=P("span","gsok_a gsst_e"),this.g.id=this.i.getId("gs_ok"),this.g.appendChild(this.f));this.f.ds=w(this.Bc,this);this.f.setAttribute("tia_field_name",this.i.fb().name);this.f.setAttribute("tia_disable_swap",!0)};
m.K=function(a){a.ib&&(this.m=!!a.La);this.f.setAttribute("tia_property",a.Qb)};
m.isEnabled=function(){return this.m};
m.Eb=function(){return{tooltip:this.F}};
m.ic=function(a){if(!this.s)a=document.createElement("script"),a.src="//www.google.com/textinputassistant/"+this.D+"/"+this.u+"_tia.js",document.body.appendChild(a),this.s=!0,this.w.add(3);else if(this.f.onclick)this.f.onclick(a)};
m.Bc=function(){this.C.dismiss()};
var Cj=Qe++;function Dj(){this.l=173;this.i={}}
A(Dj,O);m=Dj.prototype;
m.Z=function(a,b){this.m=a;a.Va()||(b.addRule(".gsst_a","display:inline-block"),b.addRule(".gsst_a","cursor:pointer;padding:0 4px"),b.addRule(".gsst_a:hover","text-decoration:none!important"),b.addRule(".gsst_b","font-size:16px;padding:0 2px;position:relative;"+b.prefix("user-select:none;")+"white-space:nowrap"),b.addRule(".gsst_e","vertical-align:middle;"+($f()+":"+ag(.6)+";")),b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e",$f()+":"+ag(.8)+";"),b.addRule(".gsst_a:active .gsst_e",$f()+":"+
ag(1)+";"))};
m.J=function(a){this.u=a.get(118);this.g=N(a,160)};
m.setup=function(a){this.o=a.ib;this.g.sort(Ej)};
m.ma=function(a){this.f=this.m.get("gs_st");if(!this.f){this.f=Q("gsst_b");this.f.id=this.m.getId("gs_st");if(a=a.wa)this.f.style.lineHeight=a+"px";Fj(this)}Gj(this)};
m.K=function(){if(this.o)for(var a=0,b;b=this.g[a++];){var c=!!this.i[Cj];if(b.isEnabled()!=c){for(;this.f.hasChildNodes();)this.f.removeChild(this.f.lastChild);Fj(this);Gj(this);break}}};
function Ej(){return 0}
function Fj(a){for(var b,c=0,d;d=a.g[c++];)if(d.isEnabled()){b=!0;var e=P("a","gsst_a");Hj(a,e,d);e.appendChild(d.g);a.f.appendChild(e)}a.f.style.display=b?"":"none"}
function Gj(a){a.i={};for(var b=0,c;c=a.g[b++];)if(c.isEnabled()){var d=Cj,e=c.g.parentNode;e.onclick=w(c.ic,c);a.i[d]=e;c.Eb&&(c=c.Eb(),c.Fe&&(d=a.i[d])&&d.style&&(d.style.visibility="hidden"),d=c.tooltip)&&(e.title=d)}}
function Hj(a,b,c){dc(b,new D(rb,bb(new Za($a,"javascript:void(0)"))));Gf&&(b.tabIndex=0);b.onkeydown=function(d){d=d||window.event;var e=d.keyCode;if(13==e||32==e)c.ic(d),a.u.g.focus(),Wf(d)}}
Qe++;function Ij(){this.o=33;this.l=Q();this.l.className="gspr_a"}
A(Ij,Bf);Ij.prototype.f=function(){return this.l};function Jj(){Cf.call(this,33)}
A(Jj,Cf);Jj.prototype.Z=function(a,b){b.addRule(".gspr_a","padding-right:1px")};
Jj.prototype.Ea=function(){return new Ij};
Jj.prototype.Qa=function(a,b){var c=ze(a.m.f.b||"");cc(b.l,c)};
Jj.prototype.Pa=function(a,b,c){c.search(b.f,1)};function Kj(a,b){this.o=0;this.m=a;this.w=b;this.i=Q();this.l=Q("sbqs_a");this.i.appendChild(this.l);this.u=Q("sbqs_c");this.i.appendChild(this.u)}
A(Kj,Bf);Kj.prototype.f=function(){return this.i};
function Lj(a,b,c,d){a.u.innerHTML=b;a.s=c;d&&!a.g&&(a.g=Xf(a.l),a.g.onclick=w(function(e){this.m.g.blur();Ng(this.m,this.s);this.w.search(this.s,9);return Wf(e)},a));
d?(a.g.innerHTML=d+" &raquo;",a.l.style.display="",a.l.setAttribute("aria-hidden","true")):a.g&&(a.l.style.display="none")}
;function Mj(){Cf.call(this,0)}
A(Mj,Cf);m=Mj.prototype;m.Z=function(a,b){b.addRule(".sbsb_c[dir=ltr] .sbqs_a","float:right");b.addRule(".sbsb_c[dir=rtl] .sbqs_a","float:left");b.addRule(".sbqs_b","visibility:hidden");b.addRule(".sbsb_d .sbqs_b","visibility:visible");b.addRule(".sbsb_c[dir=ltr] .sbqs_b","padding-left:5px;");b.addRule(".sbsb_c[dir=rtl] .sbqs_b","padding-right:5px;");b.addRule(".sbqs_c","word-wrap:break-word")};
m.J=function(a){this.g=a.get(118)};
m.K=function(a){this.f=a.zb?a.Ab:""};
m.Ea=function(a){return new Kj(this.g,a)};
m.Qa=function(a,b){Lj(b,a.getHtml(),a.f,this.f)};
m.Pa=function(a,b,c){c.search(b.f,1)};function Nj(a){qj.call(this);M(this,149,new uf);this.set(347,new rj);this.set(133,new uj);M(this,151,new tj);this.set(570,new zj);this.set(134,new mg);this.set(189,new og);M(this,156,new rg);M(this,152,new lg);M(this,152,new Jj);M(this,152,new Mj);this.set(173,new Dj);M(this,160,new Bj);this.set(157,new sg);M(this,156,new tg);"zero-prefix"==a.SEARCHBOX_BEHAVIOR_EXPERIMENT&&M(this,156,new Aj);var b=a.SBOX_STRINGS||{};a.SEARCHBOX_REPORTING&&a.SEARCHBOX_COMPONENT&&b.SBOX_REPORT_SUGGESTIONS&&(M(this,
153,new zf),M(this,152,new gg(b.SBOX_REPORT_SUGGESTIONS,a.SEARCHBOX_COMPONENT)));a.SEARCHBOX_COMPONENT&&(this.set(598,new ug(a.SEARCHBOX_COMPONENT,a.SEARCHBOX_ENABLE_REFINEMENT_SUGGEST,a.SEARCHBOX_ZERO_TYPING_SUGGEST_USE_REGULAR_SUGGEST)),M(this,156,new yg))}
A(Nj,qj);function Oj(){return{gb:function(){return{clientName:"hp",requestIdentifier:"hp",Da:"google.com",pc:"",lb:"en",Ya:"",pb:"",videoId:"",tb:"",authuser:0,Cd:"",Ue:"",mc:null,rb:"",yb:!1,Zb:"",Oa:"",connectionType:0,Se:null,tc:!1,Le:!1,Jb:!1,Gc:!0,Kc:10,ye:10,Fc:!0,wb:!0,se:!1,Nc:!1,zd:!1,Ad:!1,He:!1,kd:!0,Cc:!1,ld:500,ib:!1,cd:!0,De:!0,Oe:!1,La:!1,Na:"",Pb:"//www.google.com/textinputassistant",Qb:"",Fd:7,Ae:!1,Be:!1,gd:!1,fd:!0,hd:!1,Hb:!1,Md:!1,Ld:!1,Sa:1,Lb:!0,Ga:!1,zb:!1,xb:!1,pollingInterval:10,
hb:!1,Jd:!0,da:document.body,jd:!0,qc:null,Ic:{},ue:{},Ke:0,Oc:!1,nd:!0,la:!1,Mc:!1,Qd:!1,Pe:null,Hc:!1,Bd:null,Sd:null,ab:!1,md:!0,xc:!1,Re:1,Nb:!1,searchText:"Search",Ab:"I'm  Feeling Lucky",Pd:"",learnMoreText:"Learn more",Yb:"Remove",Xb:"This search was removed from your Web History",hintText:"",re:"Did you mean:",Ed:"",Ne:"",Xe:"Search by voice",We:'Listening for "Ok Google"',Ve:'Say "Ok Google"',ne:"Clear Search",wa:0,ud:0,kb:"",Ra:"",isRtl:!1,ta:"absolute",dd:!1,Gb:!1,Vb:null,ed:!0,Fa:[0,0,
0],Dc:null,Ud:null,ub:[0],nc:!0,sc:"",Vd:"",Td:"",ua:null,cb:"",bb:"",me:1,Xd:!1,Bb:!1,Ie:0,Rd:!1,Ac:!1,te:!1,Hd:!0}}}}
;function Pj(a,b,c,d,e){var f=Ff?"-moz-":Df?"-ms-":Gf?"-o-":Hf?"-webkit-":"",g=".gstl_"+d,h=new RegExp("(\\.("+e.join("|")+")\\b)"),k=[];return{addRule:function(l,n){if(b){if(c){for(var p=l.split(","),r=[],q=0,z;z=p[q++];)z=h.test(z)?z.replace(h,g+"$1"):g+" "+z,r.push(z);l=r.join(",")}k.push(l,"{",n,"}")}},
wc:function(){if(b&&k.length){b=!1;var l=P("style");l.setAttribute("type","text/css");(a||Oe).appendChild(l);var n=k.join("");k=null;l.styleSheet?l.styleSheet.cssText=n:l.appendChild(document.createTextNode(n))}},
prefix:function(l,n){var p=l+(n||"");f&&(p+=n?l+f+n:f+l);return p}}}
;function Qj(a,b,c,d){this.g=a;this.L=b;this.F=c;this.G=d;this.l=-1;this.w=!1}
m=Qj.prototype;m.install=function(a){if(!this.w){a=Rj(a);0>this.l&&(this.l=Sj(a));var b=Tf(this.g),c=Tj(this),d=!!b.getElementById("gs_id"+this.l),e=this,f=["gssb_c","gssb_k","sbdd_a","sbdd_c","sbib_a"];a.sc&&f.push(a.sc);f=Pj(a.qc,a.jd,a.Hc,this.l,f);this.s=a.la;this.f=new mf(this.F,this.G,{Va:function(){return d},
get:function(g){return b.getElementById(g+e.l)},
Cb:function(g){return b.getElementById(g)},
Db:function(){return e.L},
Ia:function(){return c},
getId:function(g){return g+e.l},
fb:function(){return e.g}},f,this,a);
this.f.get(347);this.C=this.f.get(130);this.f.get(115);this.H=this.f.get(117);this.f.get(123);this.M=this.f.get(118);this.i=this.f.get(119);this.f.get(374);this.m=this.f.get(120);this.f.get(189);this.N=this.f.get(553);this.f.get(419);this.f.get(126);this.f.get(128);this.f.get(139);this.D=this.f.get(121);a=Zf(this.g);this.o=Yf(a);this.u=w(this.Kd,this);ph(a,"resize",this.u);this.w=!0}};
m.isActive=function(){return!!this.f&&this.f.isActive()};
function Uj(a,b){function c(d){a.D.search(a.M.f,12);return Vf(d)}
ph(b,"keyup",function(d){13!=d.keyCode&&32!=d.keyCode||c(d)});
ph(b,"click",c)}
m.focus=function(){this.i.focus()};
m.blur=function(){this.i.blur()};
m.isFocused=function(){return this.i.isFocused()};
m.getId=function(){return this.l};
m.search=function(a,b){this.D.search(a,b)};
m.la=function(){return this.s||!!this.C&&this.C.la()};
m.qb=function(a){this.N.qb(a)};
function Sj(a){a=Zf(a.qc||Oe);void 0==a.nextSearchboxId&&(a.nextSearchboxId=50);return a.nextSearchboxId++}
function Tj(a){if(a.g)for(a=a.g;a=a.parentNode;){var b=a.dir;if(b)return b}return"ltr"}
function Rj(a){a=df(a);var b=a.Na;b?a.Na=b.toLowerCase():a.La=!1;a.Ga&&!a.zb&&(a.Ga=!1);Jf||(a.Ad=!1);return a}
m.Kd=function(){var a=Yf(Zf(this.g));if(a.uc!=this.o.uc||a.Ib!=this.o.Ib)this.o=a,R(this.H,8)};function Vj(){this.C=/\/(movie|show)s?($|[?#/])/i;this.D=/\/results\?(.*&)?search_type=(movies|shows)($|[&#])/i;this.s="sbhcn";this.o="sbfcn";this.i="gsfi";this.m="gsfs";this.w=function(){return!0}}
A(Vj,kf);m=Vj.prototype;m.search=function(a,b){this.w(yh(this.f.m,b,void 0))&&this.H.submit()};
m.redirect=function(a){this.F(this.fc(a))};
m.fc=function(a){var b=0<=a.indexOf("?")?"&":"?",c;(c=yh(this.f.m,void 0,void 0))||(c=yh(this.f.m,void 0));c=Te(c);return a+b+c};
m.Mb=function(a){if(this.g||this.l){if(22<this.u){var b=(this.u-22)/2;a.addRule(".sbsb_c","padding:"+b+"px 24px "+b+"px 10px")}else a.addRule(".sbsb_c","padding:4px 24px 4px 10px");this.G?a.addRule(".sbsb_a","padding: 16px 0 0"):a.addRule(".sbsb_a","padding: 16px 0");a.addRule(".sbdd_b","border-top: 0");a.addRule(".sbib_a","background:transparent");a.addRule(".sbib_b","padding: 0")}this.g?(a.addRule("."+this.m,"font-size:1.6rem;color:#222"),a.addRule(".sbqs_c b","font-weight:500"),a.addRule(".sbdd_c",
"z-index:2010"),a.addRule(".sbdd_a","z-index:2011"),a.addRule(".sbib_a","background:transparent; width: 100%; flex: 1;"),a.addRule("ytd-masthead[dark] .gsst_e","filter: invert(100%)")):(a.addRule("."+this.i,"font-size:16px;height:100% !important"),a.addRule(".sbib_b ."+this.i,"position:relative !important"),a.addRule("."+this.m,"font-size:16px"),a.addRule("a.sbsb_i","font-size:12px;color:#03c"),a.addRule(".sbdd_c","z-index:2000000006"),a.addRule(".sbdd_a","z-index:2000000007"),this.l||(a.addRule(".sbsb_c,.sbsb_c td",
"line-height:20px"),a.addRule(".sbsb_c","padding:0 6px"),a.addRule(".sbsb_d td","background:#eee"),a.addRule(".sbsb_e","margin:2px 0"),a.addRule(".sbib_a","background:transparent"),a.addRule(".sbib_b","padding:2px 6px"),a.addRule(".gsok_a","padding:0"),a.addRule(".gsok_a img","display:block"),a.addRule("."+this.s,"border:1px solid #b9b9b9;border-top-color:#a0a0a0"+a.prefix("box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);")),a.addRule("."+this.o,"border:1px solid #1c62b9;"+a.prefix("box-shadow:inset 0 1px 2px rgba(0,0,0,0.3);")+
"outline:none;")))};
m.install=function(a,b,c,d,e,f,g){this.H=a;this.F=f;g&&(this.w=g);f=Oj().gb();f.clientName="youtube";f.requestIdentifier="youtube";f.Ya="v";f.lb=d.REQUEST_LANGUAGE;f.pc=d.REQUEST_DOMAIN;f.cd=!1;f.Sa=0;f.Lb=!1;f.Ga=!1;f.Nb=!1;f.hb=!0;f.kb=this.i;f.Ra=this.m;f.cb=this.s;f.bb=this.o;f.Ge=!0;g=window.location.href;g=this.C.test(g)||this.D.test(g);f.Jb=g;f.La=d.HAS_ON_SCREEN_KEYBOARD;f.Na=d.REQUEST_LANGUAGE;f.Pb="//www.gstatic.com/inputtools/images";f.Qb="youtube";f.ab=!0;f.ta="fixed";this.g=d.IS_POLYMER;
this.l=d.IS_FUSION;this.G=d.SEARCHBOX_REPORTING;this.u=d.SEARCHBOX_TAP_TARGET_EXPERIMENT;d.PQ&&(f.pb=d.PQ);f.tb=d.PSUGGEST_TOKEN;f.authuser=d.SESSION_INDEX;f.Xb=e.SUGGESTION_DISMISSED_LABEL;f.Yb=e.SUGGESTION_DISMISS_LABEL;f.nc=!d.HIDE_REMOVE_LINK;f.Qe=Re([0,33,35]);this.g?(f.ua="search-container",f.wa=24):this.l?(f.ua="masthead-search",f.wa=24):(f.ua="masthead-search-terms",f.wa=30);Sb()||(f.Gb=!0);f.Vb=f.ua;e=-3;E("Windows")&&Tb()&&"8.0"==Xb()&&(e=-5);this.l?e=17:this.g&&(e=16);f.Fa=[e,0,0];e=[0];
Tb()&&"8.0"==Xb()&&(e[0]=-1);f.ub=e;(e=d.REQUEST_LANGUAGE)?(e=e.toLowerCase(),e="zh-tw"==e||"zh-cn"==e||"ja"==e||"ko"==e):e=!1;e&&(f.xb=!0);if(e=d.SUGG_EXP_ID)f.rb=e;d.SEND_VISITOR_DATA&&(f.connectionType=1);d.SEND_VISITOR_DATA&&"VISITOR_DATA"in d&&(f.visitorData=d.VISITOR_DATA);if(this.f){a=this.f;b=f;c=Zf(a.g);d=a.u;c.removeEventListener?c.removeEventListener("resize",d,!1):c.detachEvent("onresize",d);of(a.f);b=Rj(b);a.s=b.la;a=a.f;of(a);for(c=0;d=a.f[c++];)d.K(b);a.l=!0}else d=new Nj(d),this.f=
new Qj(b,a,this,d),this.f.install(f),c&&(Uj(this.f,c),c.onclick=null)};function Wj(){this.l=[];this.f=-1}
Wj.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.l[a]!=b&&(this.l[a]=b,this.f=-1)};
Wj.prototype.get=function(a){return!!this.l[a]};
function Xj(a){-1==a.f&&(a.f=Ja(a.l,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Yj(){this.l=-1}
;function Zj(){this.l=64;this.f=[];this.o=[];this.s=[];this.i=[];this.i[0]=128;for(var a=1;a<this.l;++a)this.i[a]=0;this.m=this.g=0;this.reset()}
A(Zj,Yj);Zj.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.m=this.g=0};
function ak(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
Zj.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.l,d=0,e=this.o,f=this.g;d<b;){if(0==f)for(;d<=c;)ak(this,a,d),d+=this.l;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.l){ak(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.l){ak(this,e);f=0;break}}this.g=f;this.m+=b}};
Zj.prototype.digest=function(){var a=[],b=8*this.m;56>this.g?this.update(this.i,56-this.g):this.update(this.i,this.l-(this.g-56));for(var c=this.l-1;56<=c;c--)this.o[c]=b&255,b/=256;ak(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function bk(a,b){this.g={};this.f=[];this.i=this.l=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof bk)for(c=ck(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function ck(a){dk(a);return a.f.concat()}
m=bk.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.l!=a.l)return!1;var c=b||ek;dk(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function ek(a,b){return a===b}
m.isEmpty=function(){return 0==this.l};
m.clear=function(){this.g={};this.i=this.l=this.f.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.g,a)?(delete this.g[a],this.l--,this.i++,this.f.length>2*this.l&&dk(this),!0):!1};
function dk(a){if(a.l!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.g,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.l!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.g,a)?this.g[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.g,a)||(this.l++,this.f.push(a),this.i++);this.g[a]=b};
m.forEach=function(a,b){for(var c=ck(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new bk(this)};
m.ga=function(a){dk(this);var b=0,c=this.i,d=this,e=new dd;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw cd;var f=d.f[b++];return a?f:d.g[f]};
return e};function fk(a,b,c){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c))}
function gk(a){var b=a.type;if("string"===typeof b)switch(b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:null}return null!=a.value?a.value:null}
;function hk(a){var b=[];ik(new jk,a,b);return b.join("")}
function jk(){}
function ik(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),ik(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),kk(d,c),c.push(":"),ik(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":kk(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var lk={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},mk=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function kk(a,b){b.push('"',a.replace(mk,function(c){var d=lk[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),lk[c]=d);return d}),'"')}
;function V(a){Qc.call(this);this.s=1;this.i=[];this.o=0;this.f=[];this.l={};this.u=!!a}
A(V,Qc);m=V.prototype;m.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.s;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.s=e+3;d.push(e);return e};
m.sb=function(a){var b=this.f[a];if(b){var c=this.l[b];0!=this.o?(this.i.push(a),this.f[a+1]=va):(c&&Ka(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
m.Id=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];nk(this.f[g+1],this.f[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.o--,0<this.i.length&&0==this.o)for(;c=this.i.pop();)this.sb(c)}}return 0!=e}return!1};
function nk(a,b,c){Xi(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.l[a];b&&(B(b,this.sb,this),delete this.l[a])}else this.f.length=0,this.l={}};
m.ka=function(){V.ea.ka.call(this);this.clear();this.i.length=0};function ok(a){this.f=a}
ok.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,hk(b))};
ok.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ok.prototype.remove=function(a){this.f.remove(a)};function pk(a){this.f=a}
A(pk,ok);function qk(a){this.data=a}
function rk(a){return void 0===a||a instanceof qk?a:new qk(a)}
pk.prototype.set=function(a,b){pk.ea.set.call(this,a,rk(b))};
pk.prototype.l=function(a){a=pk.ea.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
pk.prototype.get=function(a){if(a=this.l(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function sk(a){this.f=a}
A(sk,pk);sk.prototype.set=function(a,b,c){if(b=rk(b)){if(c){if(c<x()){sk.prototype.remove.call(this,a);return}b.expiration=c}b.creation=x()}sk.ea.set.call(this,a,b)};
sk.prototype.l=function(a){var b=sk.ea.l.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<x()||c&&c>x())sk.prototype.remove.call(this,a);else return b}};function tk(){}
;function uk(){}
A(uk,tk);uk.prototype.clear=function(){var a=gd(this.ga(!0)),b=this;B(a,function(c){b.remove(c)})};function vk(a){this.f=a}
A(vk,uk);m=vk.prototype;m.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeItem(a)};
m.ga=function(a){var b=0,c=this.f,d=new dd;d.next=function(){if(b>=c.length)throw cd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.f.clear()};
m.key=function(a){return this.f.key(a)};function wk(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
A(wk,vk);function xk(a,b){this.l=a;this.f=null;if(I&&!(9<=Number(xc))){yk||(yk=new bk);this.f=yk.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),yk.set(a,this.f));try{this.f.load(this.l)}catch(c){this.f=null}}}
A(xk,uk);var zk={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},yk=null;function Ak(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return zk[b]})}
m=xk.prototype;m.isAvailable=function(){return!!this.f};
m.set=function(a,b){this.f.setAttribute(Ak(a),b);Bk(this)};
m.get=function(a){a=this.f.getAttribute(Ak(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeAttribute(Ak(a));Bk(this)};
m.ga=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new dd;d.next=function(){if(b>=c.length)throw cd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Bk(this)};
function Bk(a){try{a.f.save(a.l)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ck(a,b){this.l=a;this.f=b+"::"}
A(Ck,uk);Ck.prototype.set=function(a,b){this.l.set(this.f+a,b)};
Ck.prototype.get=function(a){return this.l.get(this.f+a)};
Ck.prototype.remove=function(a){this.l.remove(this.f+a)};
Ck.prototype.ga=function(a){var b=this.l.ga(!0),c=this,d=new dd;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.l.get(e)};
return d};var Dk=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};y("yt.config_",Dk);function Ek(a){var b=arguments;1<b.length?Dk[b[0]]=b[1]:1===b.length&&Object.assign(Dk,b[0])}
function W(a,b){return a in Dk?Dk[a]:b}
;var Fk={};function Gk(){return Fk.clicktracking||(Fk.clicktracking="clicktracking".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Hk(){}
Hk.prototype.f=function(a,b){return Ik(a,1,b)};var Jk=[];function Kk(a){Jk.forEach(function(b){return b(a)})}
function Lk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Mk(b),Kk(b)}}:a}
function Mk(a){var b=v("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=W("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),Ek("ERRORS",b))}
function Nk(a){var b=v("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=W("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Ek("ERRORS",b))}
;function Ok(a,b){ya(a)&&(a=Lk(a));return window.setTimeout(a,b)}
;function Pk(){}
ra(Pk,Hk);function Ik(a,b,c){isNaN(c)&&(c=void 0);var d=v("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Ok(a,c||0)}
Pk.prototype.start=function(){var a=v("yt.scheduler.instance.start");a&&a()};
Pk.f=void 0;Pk.gb=function(){return Pk.f?Pk.f:Pk.f=new Pk};
var Qk=Pk.gb();function X(a){a=Rk(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Sk(a,b){var c=Rk(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Rk(a){var b=W("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:W("EXPERIMENT_FLAGS",{})[a]}
;var Tk=v("ytPubsubPubsubInstance")||new V;V.prototype.subscribe=V.prototype.subscribe;V.prototype.unsubscribeByKey=V.prototype.sb;V.prototype.publish=V.prototype.Id;V.prototype.clear=V.prototype.clear;y("ytPubsubPubsubInstance",Tk);y("ytPubsubPubsubSubscribedKeys",v("ytPubsubPubsubSubscribedKeys")||{});y("ytPubsubPubsubTopicToKeys",v("ytPubsubPubsubTopicToKeys")||{});y("ytPubsubPubsubIsSynchronous",v("ytPubsubPubsubIsSynchronous")||{});var Uk=window,Vk=Uk.ytcsi&&Uk.ytcsi.now?Uk.ytcsi.now:Uk.performance&&Uk.performance.timing&&Uk.performance.now&&Uk.performance.timing.navigationStart?function(){return Uk.performance.timing.navigationStart+Uk.performance.now()}:function(){return(new Date).getTime()};var Wk=Sk("initial_gel_batch_timeout",1E3),Xk=Math.pow(2,16)-1,Yk=null,Zk=0,$k={log_event:"events",log_interaction:"interactions"},al=Object.create(null);al.log_event="GENERIC_EVENT_LOGGING";al.log_interaction="INTERACTION_LOGGING";var bl=new Set(["log_event"]),cl={},dl=0,el=0,fl=0,gl=!0,Y=v("ytLoggingTransportLogPayloadsQueue_")||{};y("ytLoggingTransportLogPayloadsQueue_",Y);var hl=v("ytLoggingTransportTokensToCttTargetIds_")||{};y("ytLoggingTransportTokensToCttTargetIds_",hl);
var il=v("ytLoggingTransportDispatchedStats_")||{};y("ytLoggingTransportDispatchedStats_",il);y("ytytLoggingTransportCapturedTime_",v("ytLoggingTransportCapturedTime_")||{});
function jl(){window.clearTimeout(dl);window.clearTimeout(el);el=0;if(!Ua(Y)){for(var a in Y){var b=cl[a];if(b&&b.isReady()){var c=void 0,d=a,e=b,f=$k[d],g=il[d]||{};il[d]=g;b=Math.round(Vk());for(c in Y[d]){var h=Wa,k=e.f||kl();k={client:{hl:k.rd,gl:k.qd,clientName:k.pd,clientVersion:k.innertubeContextClientVersion,configInfo:k.od}};var l=window.devicePixelRatio;l&&1!=l&&(k.client.screenDensityFloat=String(l));l=W("EXPERIMENTS_TOKEN","");""!==l&&(k.client.experimentsToken=l);var n=l=void 0,p=[],
r=W("EXPERIMENTS_FORCED_FLAGS",{});for(n in r)p.push({key:n,value:String(r[n])});n=W("EXPERIMENT_FLAGS",{});for(l in n)l.startsWith("force_")&&void 0===r[l]&&p.push({key:l,value:String(n[l])});l=p;0<l.length&&(k.request={internalExperimentFlags:l});W("DELEGATED_SESSION_ID")&&!X("pageid_as_header_web")&&(k.user={onBehalfOfUser:W("DELEGATED_SESSION_ID")});X("enable_device_forwarding_from_xhr_client")&&(k.client=Object.assign(k.client,ll()));h=h({context:k});h[f]=ml(d,c);g.dispatchedEventCount=g.dispatchedEventCount||
0;g.dispatchedEventCount+=h[f].length;if(k=hl[c])a:{p=h;r=c;if(k.videoId)l="VIDEO";else if(k.playlistId)l="PLAYLIST";else break a;p.credentialTransferTokenTargetId=k;p.context=p.context||{};p.context.user=p.context.user||{};p.context.user.credentialTransferTokens=[{token:r,scope:l}]}delete hl[c];k=h;k.requestTimeMs=b;X("unsplit_gel_payloads_in_logs")&&(k.unsplitGelPayloadsInLogs=!0);if(l=W("EVENT_ID",void 0))p=W("BATCH_CLIENT_COUNTER",void 0)||0,!p&&X("web_client_counter_random_seed")&&(p=Math.floor(Math.random()*
Xk/2)),p++,p>Xk&&(p=1),Ek("BATCH_CLIENT_COUNTER",p),l={serializedEventId:l,clientCounter:p},k.serializedClientEventId=l,Yk&&Zk&&X("log_gel_rtt_web")&&(k.previousBatchInfo={serializedClientEventId:Yk,roundtripMs:Zk}),Yk=l,Zk=0;nl(e,d,h,{retry:bl.has(d),onSuccess:Da(ol,Vk())})}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?((c.averageTimeBetweenDispatchesMs||0)*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete Y[a];gl=!1}}Ua(Y)||
pl()}}
function pl(){X("web_gel_timeout_cap")&&!el&&(el=Ok(jl,6E4));window.clearTimeout(dl);var a=W("LOGGING_BATCH_TIMEOUT",Sk("web_gel_debounce_ms",1E4));X("shorten_initial_gel_batch_timeout")&&gl&&(a=Wk);dl=Ok(jl,a)}
function ml(a,b){b=void 0===b?"":b;Y[a]=Y[a]||{};Y[a][b]=Y[a][b]||[];return Y[a][b]}
function ol(a){Zk=Math.round(Vk()-a)}
;var ql=0;y("ytDomDomGetNextId",v("ytDomDomGetNextId")||function(){return++ql});y("ytEventsEventsListeners",v("ytEventsEventsListeners")||{});y("ytEventsEventsCounter",v("ytEventsEventsCounter")||{count:0});var rl=v("ytLoggingGelSequenceIdObj_")||{};y("ytLoggingGelSequenceIdObj_",rl);function sl(a){var b=[];Ra(a,function(c,d){var e=encodeURIComponent(String(d)),f;"array"==wa(c)?f=c:f=[c];B(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function tl(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=fc(e[0]||""),g=fc(e[1]||"");f in b?"array"==wa(b[f])?Na(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};Mk(h)}}}return b}
function ul(a,b){return vl(a,b||{},!0)}
function vl(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=tl(e[1]||"");for(var f in b)if(c||!Ta(e,f))e[f]=b[f];return Kc(a,e)+d}
;function wl(a){var b=xl;a=void 0===a?v("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(yl(b),zl(b));b.ca_type="image";a&&(b.bid=a);return b}
function yl(a){var b={};b.dt=Sc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.l.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?J:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!J.navigator&&"unknown"!==typeof J.navigator.javaEnabled&&!!J.navigator.javaEnabled&&J.navigator.javaEnabled();J.screen&&(b.u_h=J.screen.height,b.u_w=J.screen.width,b.u_ah=J.screen.availHeight,b.u_aw=J.screen.availWidth,b.u_cd=J.screen.colorDepth);
J.navigator&&J.navigator.plugins&&(b.u_nplug=J.navigator.plugins.length);J.navigator&&J.navigator.mimeTypes&&(b.u_nmime=J.navigator.mimeTypes.length);return b}
function zl(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(p){}try{var e=b.outerWidth;var f=b.outerHeight}catch(p){}try{var g=b.innerWidth;var h=b.innerHeight}catch(p){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var n=(new Cc(l.clientWidth,l.clientHeight)).round()}catch(p){n=new Cc(-12245933,-12245933)}k=n;n={};l=new Wj;u.SVGElement&&
u.document.createElementNS&&l.set(0);c=Pc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);u.crypto&&u.crypto.subtle&&l.set(3);u.TextDecoder&&u.TextEncoder&&l.set(4);l=Xj(l);n.bc=l;n.bih=k.height;n.biw=k.width;n.brdim=b.join();a=a.l;return n.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,n.wgl=!!J.WebGLRenderingContext,n}
var xl=new function(){var a=window.document;this.f=window;this.l=a};
y("yt.ads_.signals_.getAdSignalsString",function(a){return sl(wl(a))});x();var Al=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Bl(){if(!Al)return null;var a=Al();return"open"in a?a:null}
;var Cl={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Dl="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
El=!1;
function Fl(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=K(1,a),e=Hc(K(3,a));d&&e?(d=c,c=a.match(Gc),d=d.match(Gc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Hc(K(3,c))==e&&(Number(K(4,c))||null)==(Number(K(4,a))||null):!0;d=X("web_ajax_ignore_global_headers_if_set");for(var f in Cl)e=W(Cl[f]),!e||!c&&!Gl(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Gl(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||Gl(a,"X-YouTube-Time-Zone"))&&(f="undefined"!=typeof Intl?
(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||Gl(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=sl(wl(void 0));return b}
function Hl(a){var b=window.location.search,c=Hc(K(3,a)),d=Hc(K(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=tl(b),f={};B(Dl,function(g){e[g]&&(f[g]=e[g])});
return vl(a,f||{},!1)}
function Gl(a,b){var c=W("CORS_HEADER_WHITELIST")||{},d=Hc(K(3,a));return d?(c=c[d])?0<=Ga(c,b):!1:!0}
function Il(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Jl(a,b);var d=Kl(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var h=g.ok,k=function(l){l=l||{};var n=b.context||u;h?b.onSuccess&&b.onSuccess.call(n,l,g):b.onError&&b.onError.call(n,l,g);b.nb&&b.nb.call(n,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.Dd&&0<b.timeout&&(f=Ok(function(){e||(e=!0,window.clearTimeout(f))},b.timeout))}else Ll(a,b)}
function Ll(a,b){var c=b.format||"JSON";a=Jl(a,b);var d=Kl(a,b),e=!1,f,g=Ml(a,function(h){if(!e){e=!0;f&&window.clearTimeout(f);a:switch(h&&"status"in h?h.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var k=!0;break a;default:k=!1}var l=null,n=400<=h.status&&500>h.status,p=500<=h.status&&600>h.status;if(k||n||p)l=Nl(c,h,b.oe);if(k)a:if(h&&204==h.status)k=!0;else{switch(c){case "XML":k=0==parseInt(l&&l.return_code,10);break a;case "RAW":k=!0;break a}k=!!l}l=l||
{};n=b.context||u;k?b.onSuccess&&b.onSuccess.call(n,h,l):b.onError&&b.onError.call(n,h,l);b.nb&&b.nb.call(n,h,l)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Rb&&0<b.timeout&&(f=Ok(function(){e||(e=!0,g.abort(),window.clearTimeout(f))},b.timeout))}
function Jl(a,b){b.Ee&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=W("XSRF_FIELD_NAME",void 0),d=b.Te;d&&(d[c]&&delete d[c],a=ul(a,d));return a}
function Kl(a,b){var c=W("XSRF_FIELD_NAME",void 0),d=W("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.xa,g=W("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.xe||Hc(K(3,a))&&!b.withCredentials&&Hc(K(3,a))!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.xa&&b.xa[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=tl(e),Ya(e,f),e=b.Tb&&"JSON"==b.Tb?JSON.stringify(e):Jc(e));f=e||f&&!Ua(f);!El&&f&&"POST"!=b.method&&(El=!0,Mk(Error("AJAX request with postData should use POST")));
return e}
function Nl(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Ol(b):null)d={},B(b.getElementsByTagName("*"),function(e){d[e.tagName]=Pl(e)})}c&&Ql(d);
return d}
function Ql(a){if(za(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=G(a[b],null):Ql(a[b])}}
function Ol(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Pl(a){var b="";B(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ml(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Lk(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Bl();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;X("debug_forward_web_query_parameters")&&(a=Hl(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Fl(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function ll(){for(var a={},b=ka(Object.entries(tl(W("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=ka(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function Rl(){return"INNERTUBE_API_KEY"in Dk&&"INNERTUBE_API_VERSION"in Dk}
function kl(){return{innertubeApiKey:W("INNERTUBE_API_KEY",void 0),innertubeApiVersion:W("INNERTUBE_API_VERSION",void 0),od:W("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),pd:W("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:W("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),rd:W("INNERTUBE_CONTEXT_HL",void 0),qd:W("INNERTUBE_CONTEXT_GL",void 0),sd:W("INNERTUBE_HOST_OVERRIDE",void 0)||"",td:!!W("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function Sl(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||W("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.le||W("AUTHORIZATION"))||(a?b="Bearer "+v("gapi.auth.getToken")().ke:b=Xc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=W("SESSION_INDEX",0),X("pageid_as_header_web")&&(d["X-Goog-PageId"]=W("DELEGATED_SESSION_ID")));return d}
function Tl(a){a=Object.assign({},a);delete a.Authorization;var b=Xc();if(b){var c=new Zj;c.update(W("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;void 0===c&&(c=0);if(!zc){zc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));yc[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===zc[k]&&(zc[k]=h)}}}c=yc[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],n=(f=e+1<b.length)?b[e+1]:
0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|n>>4;n=(n&15)<<2|k>>6;k&=63;g||(k=64,f||(n=64));d.push(c[h],c[l],c[n]||"",c[k]||"")}a.hash=d.join("")}return a}
;function Ul(a,b,c,d){Bc.set(""+a,b,{Kb:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function Vl(){var a=new wk;(a=a.isAvailable()?new Ck(a,"yt.innertube"):null)||(a=new xk("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new sk(a):null;this.l=document.domain||window.location.hostname}
Vl.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,x()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(hk(b))}catch(f){return}else e=escape(b);Ul(a,e,c,this.l)};
Vl.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Bc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Vl.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.l;Bc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Wl=new Vl;function Xl(a,b,c,d){if(d)return null;d=Wl.get("nextId",!0)||1;var e=Wl.get("requests",!0)||{};e[d]={method:a,request:b,authState:Tl(c),requestTime:Math.round(Vk())};Wl.set("nextId",d+1,86400,!0);Wl.set("requests",e,86400,!0);return d}
function Yl(a){var b=Wl.get("requests",!0)||{};delete b[a];Wl.set("requests",b,86400,!0)}
function Zl(a){var b=Wl.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Vk())-d.requestTime)){var e=d.authState;var f=Tl(Sl(!1));a:{var g=void 0,h=void 0;for(h in e)if(!(h in f)||e[h]!==f[h]){e=!1;break a}for(g in f)if(!(g in e)){e=!1;break a}e=!0}e&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Vk())),nl(a,d.method,e,{}));delete b[c]}}Wl.set("requests",b,86400,!0)}}
;function $l(a){var b=this;this.f=null;a?this.f=a:Rl()&&(this.f=kl());Ik(function(){Zl(b)},0,5E3)}
$l.prototype.isReady=function(){!this.f&&Rl()&&(this.f=kl());return!!this.f};
function nl(a,b,c,d){!W("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Nk(Error("Missing VISITOR_DATA when sending innertube request."));var e={headers:{"Content-Type":"application/json"},method:"POST",xa:c,Tb:"JSON",Rb:function(){},
Dd:d.Rb,onSuccess:function(r,q){if(d.onSuccess)d.onSuccess(q)},
Ob:function(r){if(d.onSuccess)d.onSuccess(r)},
onError:function(r,q){if(d.onError)d.onError(q)},
Je:function(r){if(d.onError)d.onError(r)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.sd;g&&(f=g);g=a.f.td||!1;var h=Sl(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=ul(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),l;if(d.retry&&X("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=Xl(b,c,h,g))){var n=e.onSuccess,p=e.Ob;e.onSuccess=function(r,q){Yl(l);n(r,q)};
c.Ob=function(r,q){Yl(l);p(r,q)}}try{X("use_fetch_for_op_xhr")?Il(k,e):(e.method="POST",e.xa||(e.xa={}),Ll(k,e))}catch(r){if("InvalidAccessError"==r)l&&(Yl(l),l=0),Nk(Error("An extension is blocking network request."));
else throw r;}l&&Ik(function(){Zl(a)},0,5E3)}
;var am=x().toString();var bm;
if(!(bm=v("ytLoggingDocDocumentNonce_"))){var cm;a:{if(window.crypto&&window.crypto.getRandomValues)try{var dm=Array(16),em=new Uint8Array(16);window.crypto.getRandomValues(em);for(var fm=0;fm<dm.length;fm++)dm[fm]=em[fm];cm=dm;break a}catch(a){}for(var gm=Array(16),hm=0;16>hm;hm++){for(var im=x(),jm=0;jm<im%23;jm++)gm[hm]=Math.random();gm[hm]=Math.floor(256*Math.random())}if(am)for(var km=1,lm=0;lm<am.length;lm++)gm[km%16]=gm[km%16]^gm[(km-1)%16]/4^am.charCodeAt(lm),km++;cm=gm}for(var mm=cm,nm=[],
om=0;om<mm.length;om++)nm.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(mm[om]&63));bm=nm.join("")}var pm=bm;y("ytLoggingDocDocumentNonce_",pm);function qm(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function rm(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
y("yt_logging_screen.getRootVeType",function(a){return W(rm(void 0===a?0:a),void 0)});
function sm(){var a=W("csn-to-ctt-auth-info");a||(a={},Ek("csn-to-ctt-auth-info",a));return a}
function tm(a){a=void 0===a?0:a;var b=W(qm(a));if(!b&&!W("USE_CSN_FALLBACK",!0))return null;b||0!=a||(X("kevlar_client_side_screens")||X("c3_client_side_screens")?b="UNDEFINED_CSN":b=W("EVENT_ID"));return b?b:null}
y("yt_logging_screen.getCurrentCsn",tm);function um(a,b,c){var d=sm();(c=tm(c))&&delete d[c];b&&(d[a]=b)}
y("yt_logging_screen.getCttAuthInfo",function(a){return sm()[a]});
y("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==W(qm(c))||b!==W(rm(c)))if(um(a,d,c),Ek(qm(c),a),Ek(rm(c),b),0==c||X("web_screen_associated_all_layers"))b=function(){setTimeout(function(){if(a){var e={clientDocumentNonce:pm,clientScreenNonce:a};var f=void 0===f?{}:f;var g={};g.eventTimeMs=Math.round(f.timestamp||Vk());g.foregroundHeartbeatScreenAssociated=e;e=String;if(f.timestamp)var h=-1;else h=v("_lact",window),h=null==h?-1:Math.max(x()-h,0);g.context={lastActivityMs:e(h)};
X("log_sequence_info_on_gel_web")&&f.lc&&(e=g.context,h=f.lc,rl[h]=h in rl?rl[h]+1:0,e.sequence={index:rl[h],groupKey:h},f.we&&delete rl[f.lc]);(f=f.qe)?(e={},f.videoId?e.videoId=f.videoId:f.playlistId&&(e.playlistId=f.playlistId),hl[f.token]=e,f=ml("log_event",f.token)):f=ml("log_event");f.push(g);$l&&(cl.log_event=new $l);g=Sk("web_logging_max_batch")||100;e=Vk();f.length>=g?jl():10<=e-fl&&(pl(),fl=e)}},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()});function vm(a,b,c){for(var d=0,e=0;e<a.length;++e)d=31*d+a.charCodeAt(e)>>>0;a="ST-"+d.toString(36);b=b?Jc(b):"";Ul(a,b,c||5)}
;function wm(a,b,c,d,e){if(a&&e){var f=W("SBOX_SETTINGS"),g=W("SBOX_LABELS");f&&g&&(a=v("searchbox.yt.install")(a,b,c,f,g,xm,d))&&e(a,100)}}
function ym(a,b){var c=W("EVENT_ID");if(c){b.ei=c;b.feature="web-masthead-search";c=(c=document.getElementById("masthead-search"))?c.dataset?c.dataset[Gk()]:c.getAttribute("data-clicktracking"):null;b.ved=c||"";var d=a;c=b;var e=void 0===e?!0:e;var f=W("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Hc(K(3,window.location.href));g&&f.push(g);g=Hc(K(3,d));if(0<=Ga(f,g)||!g&&0==d.lastIndexOf("/",0))if(X("autoescape_tempdata_url")&&(f=document.createElement("a"),dc(f,d),d=f.href),d){g=d.match(Gc);d=g[5];f=g[6];
g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!c.csn&&(c.itct||c.ved)&&(c=Object.assign({csn:tm()},c)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&vm(d,c,k)}else vm(d,c)}}}
function xm(a,b){ym(a,b?{feature:b}:{});var c=v("yt.window.navigate");try{c(a)}catch(g){var d=void 0===d?{}:d;var e=void 0===e?"":e;var f=void 0===f?window:f;c=f.location;d=Kc(a,d)+e;d=d instanceof D?d:wb(d);c.href=tb(d)}}
function zm(a){for(var b=document.getElementById("masthead-search"),c=[],d=b.elements,e,f=0;e=d.item(f);f++)if(e.form==b&&!e.disabled&&"FIELDSET"!=e.tagName){var g=e.name;switch(e.type.toLowerCase()){case "file":case "submit":case "reset":case "button":break;case "select-multiple":e=gk(e);if(null!=e)for(var h,k=0;h=e[k];k++)fk(c,g,h);break;default:h=gk(e),null!=h&&fk(c,g,h)}}d=b.getElementsByTagName("INPUT");for(f=0;e=d[f];f++)e.form==b&&"image"==e.type.toLowerCase()&&(g=e.name,fk(c,g,e.value),fk(c,
g+".x","0"),fk(c,g+".y","0"));c=c.join("&").replace(/%20/g,"+");b=b.action+"?"+c;ym(b,a);a=!!W("SPF_SEARCH_BOX");if(!v("ytspf.enabled")||!a)return!0;a=v("yt.window.navigate");try{a(b)}catch(l){return!0}return!1}
;y("searchbox.yt.install",function(a,b,c,d,e,f,g){yf||(yf=new Vj);yf.install(a,b,c,d,e,f,g)});
y("yt.www.masthead.searchbox.init",function(){var a=document.getElementById("masthead-search");wm(a,a.search_query,document.getElementById("search-btn"),zm,window.setTimeout)});
y("yt.www.masthead.searchbox.initPolymer",function(a,b,c,d){wm(a,b,c,d,Qk.f)});}).call(this);
