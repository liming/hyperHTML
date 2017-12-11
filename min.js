/*! (c) Andrea Giammarchi (ISC) */var hyperHTML=function(e){"use strict";function t(){}function n(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1]}function r(){}function i(){var e=function(e,n){for(var r=new E(n),i=e.length,o=0;o<i;o++){var a=e[o];a.nodeType===g&&t(a,r)}},t=function r(e,t){if(ce.has(e))e.dispatchEvent(t);else for(var n=e.children,i=n.length,o=0;o<i;o++)r(n[o],t)};try{new MutationObserver(function(t){for(var n=t.length,r=0;r<n;r++){var i=t[r];e(i.removedNodes,N),e(i.addedNodes,y)}}).observe(document,{subtree:!0,childList:!0})}catch(n){document.addEventListener("DOMNodeRemoved",function(t){e([t.target],N)},!1),document.addEventListener("DOMNodeInserted",function(t){e([t.target],y)},!1)}}function o(e){var t=Ee.get(this);return t&&t.template===J(e)?l.apply(t.updates,arguments):a.apply(this,arguments),this}function a(e){e=J(e);var t=Ce.get(e)||u.call(this,e),n=Z(this.ownerDocument,t.fragment),r=we.create(n,t.paths);Ee.set(this,{template:e,updates:r}),l.apply(r,arguments),this.textContent="",this.appendChild(n)}function l(){for(var e=arguments.length,t=1;t<e;t++)this[t-1](arguments[t])}function u(e){var t=[],n=I(this,e.join(x));we.find(n,t,e.slice());var r={fragment:n,paths:t};return Ce.set(e,r),r}function c(e){return arguments.length<2?null==e?je("html"):"string"==typeof e?Te(null,e):"raw"in e?je("html")(e):"nodeType"in e?o.bind(e):ke(e,"html"):("raw"in e?je("html"):Te).apply(null,arguments)}var s=function(e,t){var n="_"+e+"$";return{get:function(){return this[n]||(this[e]=t.call(this,e))},set:function(e){Object.defineProperty(this,n,{configurable:!0,value:e})}}},f={},d=[],h=f.hasOwnProperty,v=0,p={define:function(e,t){e in f||(v=d.push(e)),f[e]=t},invoke:function(e,t){for(var n=0;n<v;n++){var r=d[n];if(h.call(e,r))return f[r](e[r],t)}}},e=document.defaultView,g=1,m="http://www.w3.org/2000/svg",y="connected",N="dis"+y,b=/^style|textarea$/i,w="_hyper: "+(Math.random()*new Date|0)+";",x="\x3c!--"+w+"--\x3e",E=e.Event;try{new E("Event")}catch(Oe){E=function(e){var t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}}var C=e.Map||function(){var e=[],t=[];return{get:function(n){return t[e.indexOf(n)]},set:function(n,r){t[e.push(n)-1]=r}}},S=e.WeakMap||function(){return{get:function(e){return e[w]},set:function(e,t){Object.defineProperty(e,w,{configurable:!0,value:t})}}},T=e.WeakSet||function(){var e=new S;return{add:function(t){e.set(t,!0)},has:function(t){return!0===e.get(t)}}},j=Array.isArray||function(e){return function(t){return"[object Array]"===e.call(t)}}({}.toString),k=w.trim||function(){return this.replace(/^\s+|\s+$/g,"")},L=function(e,t){return A(e).createElement(t)},A=function(e){return e.ownerDocument||e},M=function(e){return A(e).createDocumentFragment()},O=function(e,t){return A(e).createTextNode(t)},P=M(document),$="append"in P,D="content"in L(document,"template");P.appendChild(O(P,"g")),P.appendChild(O(P,""));var B=1===P.cloneNode(!0).childNodes.length,H="importNode"in document,R=$?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=t.length,r=0;r<n;r++)e.appendChild(t[r])},_="[^\\S]+[^ \\f\\n\\r\\t\\/>\"'=]+",z=new RegExp("(<[a-z]+[a-z0-9:_-]*)((?:"+_+"(?:=(?:'.*?'|\".*?\"|<.+?>|\\S+))?)+)([^\\S]*/?>)","gi"),F=new RegExp("("+_+"=)(['\"]?)"+x+"\\2","gi"),V=function(e,t,n,r){return t+n.replace(F,G)+r},G=function(e,t,n){return t+(n||'"')+w+(n||'"')},I=function(e,t){return("ownerSVGElement"in e?U:Q)(e,t.replace(z,V))},W=B?function(e){for(var t=e.cloneNode(),n=e.childNodes||[],r=n.length,i=0;i<r;i++)t.appendChild(W(n[i]));return t}:function(e){return e.cloneNode(!0)},Z=H?function(e,t){return e.importNode(t,!0)}:function(e,t){return W(t)},q=[].slice,J=function(e){return K(e)},K=function(t){if(t.propertyIsEnumerable("raw")||/Firefox\/(\d+)/.test((e.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var n={};K=function(e){var t="_"+e.join(w);return n[t]||(n[t]=e)}}else K=function(e){return e};return K(t)},Q=D?function(e,t){var n=L(e,"template");return n.innerHTML=t,n.content}:function(e,t){var n=L(e,"template"),r=M(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var i=RegExp.$1;n.innerHTML="<table>"+t+"</table>",R(r,q.call(n.querySelectorAll(i)))}else n.innerHTML=t,R(r,q.call(n.childNodes));return r},U=D?function(e,t){var n=M(e),r=A(e).createElementNS(m,"svg");return r.innerHTML=t,R(n,q.call(r.childNodes)),n}:function(e,t){var n=M(e),r=L(e,"div");return r.innerHTML='<svg xmlns="'+m+'">'+t+"</svg>",R(n,q.call(r.firstChild.childNodes)),n};n.prototype.insert=function(){var e=M(this.first);return R(e,this.childNodes),e},n.prototype.remove=function(){var e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{var n=A(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e};var X=function(e){var t=[],n=void 0;switch(e.nodeType){case g:case 11:n=e;break;case 8:n=e.parentNode,Y(t,n,e);break;default:n=e.ownerElement}for(e=n;n=n.parentNode;e=n)Y(t,n,e);return t},Y=function(e,t,n){e.unshift(e.indexOf.call(t.childNodes,n))},ee={create:function(e,t,n){return{type:e,name:n,node:t,path:X(t)}},find:function(e,t){for(var n=t.length,r=0;r<n;r++)e=e.childNodes[t[r]];return e}},te=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,ne=function(e,t,n){if(n){var r=t.cloneNode(!0);return r.value="",e.setAttributeNode(r),re(r,n)}return re(e.style,n)},re=function(e,t){var n=void 0,r=void 0;return function(i){switch(typeof i){case"object":if(i){if("object"===n){if(!t&&r!==i)for(var o in r)o in i||(e[o]="")}else t?e.value="":e.cssText="";var a=t?{}:e;for(var l in i){var u=i[l];a[l]="number"!=typeof u||te.test(l)?u:u+"px"}n="object",t?e.value=ae(r=a):r=i;break}default:r!=i&&(n="string",r=i,t?e.value=i||"":e.cssText=i||"")}}},ie=/([^A-Z])([A-Z]+)/g,oe=function(e,t,n){return t+"-"+n.toLowerCase()},ae=function(e){var t=[];for(var n in e)t.push(n.replace(ie,oe),":",e[n],";");return t.join("")},le=function(e){return e},ue=function(e,t,n,r,i){for(var o=r||le,a=null==i?null:o(i,0),l=0,u=0,c=t.length-1,s=t[0],f=t[c],d=n.length-1,h=n[0],v=n[d];l<=c&&u<=d;)if(null==s)s=t[++l];else if(null==f)f=t[--c];else if(null==h)h=n[++u];else if(null==v)v=n[--d];else if(s==h)s=t[++l],h=n[++u];else if(f==v)f=t[--c],v=n[--d];else if(s==v)e.insertBefore(o(s,1),o(f,-0).nextSibling),s=t[++l],v=n[--d];else if(f==h)e.insertBefore(o(f,1),o(s,0)),f=t[--c],h=n[++u];else{var p=t.indexOf(h);if(p<0)e.insertBefore(o(h,1),o(s,0)),h=n[++u];else{var g=t[p];t[p]=null,e.insertBefore(o(g,1),o(s,0)),h=n[++u]}}if(l>c)for(var m=n[d+1],y=null!=m?o(m,0):a;u<=d;){var N=n[u++];null!=N&&e.insertBefore(o(N,1),y)}else if(u>d)for(;l<=c;){var b=t[l++];null!=b&&e.removeChild(o(b,-1))}return n},ce=new T;r.prototype=Object.create(null);var se=function(e){return{html:e}},fe=function Pe(e,t){return"ELEMENT_NODE"in e?e:e.constructor===n?1/t<0?t?e.remove():e.last:t?e.insert():e.first:Pe(e.render(),t)},de=function(e){return"ELEMENT_NODE"in e||e instanceof n||e instanceof t},he=function(e,t){for(var n=[],r=t.length,i=0;i<r;i++){var o=t[i],a=ee.find(e,o.path);switch(o.type){case"any":n.push(ye(a,[]));break;case"attr":n.push(Ne(a,o.name,o.node));break;case"text":n.push(be(a))}}return n},ve=function $e(e,t,n){for(var r=e.childNodes,i=r.length,o=0;o<i;o++){var a=r[o];switch(a.nodeType){case g:pe(a,t,n),$e(a,t,n);break;case 8:a.textContent===w&&(n.shift(),t.push(b.test(e.nodeName)?ee.create("text",e):ee.create("any",a)));break;case 3:b.test(e.nodeName)&&k.call(a.textContent)===x&&(n.shift(),t.push(ee.create("text",e)))}}},pe=function(e,t,n){for(var i=new r,o=e.attributes,a=q.call(o),l=[],u=a.length,c=0;c<u;c++){var s=a[c];if(s.value===w){var f=s.name;if(!(f in i)){var d=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");i[f]=o[d]||o[d.toLowerCase()],t.push(ee.create("attr",i[f],d))}l.push(s)}}for(var h=l.length,v=0;v<h;v++)e.removeAttributeNode(l[v]);var p=e.nodeName;if(/^script$/i.test(p)){for(var g=L(e,p),m=0;m<o.length;m++)g.setAttributeNode(o[m].cloneNode(!0));g.textContent=e.textContent,e.parentNode.replaceChild(g,e)}},ge=function(e,t){t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(se).then(t):Promise.resolve(p.invoke(e,t)).then(t)},me=function(e){return null!=e&&"then"in e},ye=function(e,t){var n=!1,r=void 0;return function i(o){switch(typeof o){case"string":case"number":case"boolean":n?r!==o&&(r=o,t[0].textContent=o):(n=!0,r=o,t=ue(e.parentNode,t,[O(e,o)],fe,e));break;case"object":case"undefined":if(null==o){n=!1,t=ue(e.parentNode,t,[],fe,e);break}default:if(n=!1,r=o,j(o))if(0===o.length)t.length&&(t=ue(e.parentNode,t,[],fe,e));else switch(typeof o[0]){case"string":case"number":case"boolean":i({html:o});break;case"object":if(j(o[0])&&(o=o.concat.apply([],o)),me(o[0])){Promise.all(o).then(i);break}default:t=ue(e.parentNode,t,o,fe,e)}else de(o)?t=ue(e.parentNode,t,11===o.nodeType?q.call(o.childNodes):[o],fe,e):me(o)?o.then(i):"placeholder"in o?ge(o,i):"text"in o?i(String(o.text)):"any"in o?i(o.any):"html"in o?t=ue(e.parentNode,t,q.call(I(e,[].concat(o.html).join("")).childNodes),fe,e):i("length"in o?q.call(o):p.invoke(o,i))}}},Ne=function(e,t,n){var r="ownerSVGElement"in e,o=void 0;if("style"===t)return ne(e,n,r);if(/^on/.test(t)){var a=t.slice(2);return a===y||a===N?(xe&&(xe=!1,i()),ce.add(e)):t.toLowerCase()in e&&(a=a.toLowerCase()),function(t){o!==t&&(o&&e.removeEventListener(a,o,!1),o=t,t&&e.addEventListener(a,t,!1))}}if("data"===t||!r&&t in e)return function(n){o!==n&&(o=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};var l=!1,u=n.cloneNode(!0);return function(t){o!==t&&(o=t,u.value!==t&&(null==t?(l&&(l=!1,e.removeAttributeNode(u)),u.value=t):(u.value=t,l||(l=!0,e.setAttributeNode(u)))))}},be=function(e){var t=void 0;return function n(r){t!==r&&(t=r,"object"==typeof r&&r?me(r)?r.then(n):"placeholder"in r?ge(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?q.call(r).join(""):p.invoke(r,n)):e.textContent=null==r?"":r)}},we={create:he,find:ve},xe=!0,Ee=new S,Ce=new C,Se=new S,Te=function(e,t){return null==e?je(t||"html"):ke(e,t||"html")},je=function(e){var t=void 0,n=void 0,r=void 0,i=void 0,a=void 0;return function(l){l=J(l);var u=i!==l;return u&&(i=l,r=M(document),n="svg"===e?document.createElementNS(m,"svg"):r,a=o.bind(n)),a.apply(null,arguments),u&&("svg"===e&&R(r,q.call(n.childNodes)),t=Le(r)),t}},ke=function(e,t){var n=t.indexOf(":"),r=Se.get(e),i=t;return-1<n&&(i=t.slice(n+1),t=t.slice(0,n)||"html"),r||Se.set(e,r={}),r[i]||(r[i]=je(t))},Le=function(e){for(var t=e.childNodes,r=t.length,i=[],o=0;o<r;o++){var a=t[o];a.nodeType!==g&&0===k.call(a.textContent).length||i.push(a)}return 1===i.length?i[0]:new n(i)},Ae=function(e){return o.bind(e)},Me=p.define;return c.Component=t,c.bind=Ae,c.define=Me,c.diff=ue,c.hyper=c,c.wire=Te,function(e){Object.defineProperties(t.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:s("html",e),svg:s("svg",e),state:s("state",function(){return this.defaultState}),defaultState:{get:function(){return{}}},setState:{value:function(e){var t=this.state,n="function"==typeof e?e.call(this,t):e;for(var r in n)t[r]=n[r];this.render()}}})}(je),c}(window);
