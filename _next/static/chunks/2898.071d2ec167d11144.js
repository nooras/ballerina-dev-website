"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2898],{200:function(e,t,n){n.d(t,{Z:function(){return qt}});var r=n(4184),o=n.n(r),i=n(7294),a=n(930),s=n(9351),c=n(7121),l=n(8833),f=n(4357),u=n(5111),d=n(8146);var p=i.createContext(null),m=n(9028),v=Object.prototype.hasOwnProperty;function h(e,t,n){for(n of e.keys())if(g(n,t))return n}function g(e,t){var n,r,o;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&g(e[r],t[r]););return-1===r}if(n===Set){if(e.size!==t.size)return!1;for(r of e){if((o=r)&&"object"===typeof o&&!(o=h(t,o)))return!1;if(!t.has(o))return!1}return!0}if(n===Map){if(e.size!==t.size)return!1;for(r of e){if((o=r[0])&&"object"===typeof o&&!(o=h(t,o)))return!1;if(!g(r[1],t.get(o)))return!1}return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return-1===r}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return-1===r}if(!n||"object"===typeof e){for(n in r=0,e){if(v.call(e,n)&&++r&&!v.call(t,n))return!1;if(!(n in t)||!g(e[n],t[n]))return!1}return Object.keys(t).length===r}}return e!==e&&t!==t}var b=n(6454);var y=function(e){const t=(0,b.Z)();return[e[0],(0,i.useCallback)((n=>{if(t())return e[1](n)}),[t,e[1]])]};function w(e){return e.split("-")[0]}function x(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function O(e){return e instanceof x(e).Element||e instanceof Element}function j(e){return e instanceof x(e).HTMLElement||e instanceof HTMLElement}function C(e){return"undefined"!==typeof ShadowRoot&&(e instanceof x(e).ShadowRoot||e instanceof ShadowRoot)}var E=Math.max,k=Math.min,Z=Math.round;function D(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function P(){return!/^((?!chrome|android).)*safari/i.test(D())}function N(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&j(e)&&(o=e.offsetWidth>0&&Z(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Z(r.height)/e.offsetHeight||1);var a=(O(e)?x(e):window).visualViewport,s=!P()&&n,c=(r.left+(s&&a?a.offsetLeft:0))/o,l=(r.top+(s&&a?a.offsetTop:0))/i,f=r.width/o,u=r.height/i;return{width:f,height:u,top:l,right:c+f,bottom:l+u,left:c,x:c,y:l}}function A(e){var t=N(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function T(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&C(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function M(e){return e?(e.nodeName||"").toLowerCase():null}function R(e){return x(e).getComputedStyle(e)}function S(e){return["table","td","th"].indexOf(M(e))>=0}function L(e){return((O(e)?e.ownerDocument:e.document)||window.document).documentElement}function B(e){return"html"===M(e)?e:e.assignedSlot||e.parentNode||(C(e)?e.host:null)||L(e)}function $(e){return j(e)&&"fixed"!==R(e).position?e.offsetParent:null}function W(e){for(var t=x(e),n=$(e);n&&S(n)&&"static"===R(n).position;)n=$(n);return n&&("html"===M(n)||"body"===M(n)&&"static"===R(n).position)?t:n||function(e){var t=/firefox/i.test(D());if(/Trident/i.test(D())&&j(e)&&"fixed"===R(e).position)return null;var n=B(e);for(C(n)&&(n=n.host);j(n)&&["html","body"].indexOf(M(n))<0;){var r=R(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function H(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function I(e,t,n){return E(e,k(t,n))}function V(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function q(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var U="top",F="bottom",K="right",z="left",_="auto",X=[U,F,K,z],Y="start",G="end",J="viewport",Q="popper",ee=X.reduce((function(e,t){return e.concat([t+"-"+Y,t+"-"+G])}),[]),te=[].concat(X,[_]).reduce((function(e,t){return e.concat([t,t+"-"+Y,t+"-"+G])}),[]),ne=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];var re={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=w(n.placement),c=H(s),l=[z,K].indexOf(s)>=0?"height":"width";if(i&&a){var f=function(e,t){return V("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:q(e,X))}(o.padding,n),u=A(i),d="y"===c?U:z,p="y"===c?F:K,m=n.rects.reference[l]+n.rects.reference[c]-a[c]-n.rects.popper[l],v=a[c]-n.rects.reference[c],h=W(i),g=h?"y"===c?h.clientHeight||0:h.clientWidth||0:0,b=m/2-v/2,y=f[d],x=g-u[l]-f[p],O=g/2-u[l]/2+b,j=I(y,O,x),C=c;n.modifiersData[r]=((t={})[C]=j,t.centerOffset=j-O,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&T(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function oe(e){return e.split("-")[1]}var ie={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ae(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,l=e.adaptive,f=e.roundOffsets,u=e.isFixed,d=a.x,p=void 0===d?0:d,m=a.y,v=void 0===m?0:m,h="function"===typeof f?f({x:p,y:v}):{x:p,y:v};p=h.x,v=h.y;var g=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),y=z,w=U,O=window;if(l){var j=W(n),C="clientHeight",E="clientWidth";if(j===x(n)&&"static"!==R(j=L(n)).position&&"absolute"===s&&(C="scrollHeight",E="scrollWidth"),j=j,o===U||(o===z||o===K)&&i===G)w=F,v-=(u&&j===O&&O.visualViewport?O.visualViewport.height:j[C])-r.height,v*=c?1:-1;if(o===z||(o===U||o===F)&&i===G)y=K,p-=(u&&j===O&&O.visualViewport?O.visualViewport.width:j[E])-r.width,p*=c?1:-1}var k,D=Object.assign({position:s},l&&ie),P=!0===f?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:Z(n*o)/o||0,y:Z(r*o)/o||0}}({x:p,y:v},x(n)):{x:p,y:v};return p=P.x,v=P.y,c?Object.assign({},D,((k={})[w]=b?"0":"",k[y]=g?"0":"",k.transform=(O.devicePixelRatio||1)<=1?"translate("+p+"px, "+v+"px)":"translate3d("+p+"px, "+v+"px, 0)",k)):Object.assign({},D,((t={})[w]=b?v+"px":"",t[y]=g?p+"px":"",t.transform="",t))}var se={passive:!0};var ce={left:"right",right:"left",bottom:"top",top:"bottom"};function le(e){return e.replace(/left|right|bottom|top/g,(function(e){return ce[e]}))}var fe={start:"end",end:"start"};function ue(e){return e.replace(/start|end/g,(function(e){return fe[e]}))}function de(e){var t=x(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function pe(e){return N(L(e)).left+de(e).scrollLeft}function me(e){var t=R(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function ve(e){return["html","body","#document"].indexOf(M(e))>=0?e.ownerDocument.body:j(e)&&me(e)?e:ve(B(e))}function he(e,t){var n;void 0===t&&(t=[]);var r=ve(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=x(r),a=o?[i].concat(i.visualViewport||[],me(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(he(B(a)))}function ge(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function be(e,t,n){return t===J?ge(function(e,t){var n=x(e),r=L(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;var l=P();(l||!l&&"fixed"===t)&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s+pe(e),y:c}}(e,n)):O(t)?function(e,t){var n=N(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):ge(function(e){var t,n=L(e),r=de(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=E(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=E(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+pe(e),c=-r.scrollTop;return"rtl"===R(o||n).direction&&(s+=E(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(L(e)))}function ye(e,t,n,r){var o="clippingParents"===t?function(e){var t=he(B(e)),n=["absolute","fixed"].indexOf(R(e).position)>=0&&j(e)?W(e):e;return O(n)?t.filter((function(e){return O(e)&&T(e,n)&&"body"!==M(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=be(e,n,r);return t.top=E(o.top,t.top),t.right=k(o.right,t.right),t.bottom=k(o.bottom,t.bottom),t.left=E(o.left,t.left),t}),be(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function we(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?w(o):null,a=o?oe(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case U:t={x:s,y:n.y-r.height};break;case F:t={x:s,y:n.y+n.height};break;case K:t={x:n.x+n.width,y:c};break;case z:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var l=i?H(i):null;if(null!=l){var f="y"===l?"height":"width";switch(a){case Y:t[l]=t[l]-(n[f]/2-r[f]/2);break;case G:t[l]=t[l]+(n[f]/2-r[f]/2)}}return t}function xe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.strategy,a=void 0===i?e.strategy:i,s=n.boundary,c=void 0===s?"clippingParents":s,l=n.rootBoundary,f=void 0===l?J:l,u=n.elementContext,d=void 0===u?Q:u,p=n.altBoundary,m=void 0!==p&&p,v=n.padding,h=void 0===v?0:v,g=V("number"!==typeof h?h:q(h,X)),b=d===Q?"reference":Q,y=e.rects.popper,w=e.elements[m?b:d],x=ye(O(w)?w:w.contextElement||L(e.elements.popper),c,f,a),j=N(e.elements.reference),C=we({reference:j,element:y,strategy:"absolute",placement:o}),E=ge(Object.assign({},y,C)),k=d===Q?E:j,Z={top:x.top-k.top+g.top,bottom:k.bottom-x.bottom+g.bottom,left:x.left-k.left+g.left,right:k.right-x.right+g.right},D=e.modifiersData.offset;if(d===Q&&D){var P=D[o];Object.keys(Z).forEach((function(e){var t=[K,F].indexOf(e)>=0?1:-1,n=[U,F].indexOf(e)>=0?"y":"x";Z[e]+=P[n]*t}))}return Z}function Oe(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function je(e){return[U,K,F,z].some((function(t){return e[t]>=0}))}var Ce={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=te.reduce((function(e,n){return e[n]=function(e,t,n){var r=w(e),o=[z,U].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[z,K].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=a}};var Ee={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,l=n.rootBoundary,f=n.altBoundary,u=n.padding,d=n.tether,p=void 0===d||d,m=n.tetherOffset,v=void 0===m?0:m,h=xe(t,{boundary:c,rootBoundary:l,padding:u,altBoundary:f}),g=w(t.placement),b=oe(t.placement),y=!b,x=H(g),O="x"===x?"y":"x",j=t.modifiersData.popperOffsets,C=t.rects.reference,Z=t.rects.popper,D="function"===typeof v?v(Object.assign({},t.rects,{placement:t.placement})):v,P="number"===typeof D?{mainAxis:D,altAxis:D}:Object.assign({mainAxis:0,altAxis:0},D),N=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,T={x:0,y:0};if(j){if(i){var M,R="y"===x?U:z,S="y"===x?F:K,L="y"===x?"height":"width",B=j[x],$=B+h[R],V=B-h[S],q=p?-Z[L]/2:0,_=b===Y?C[L]:Z[L],X=b===Y?-Z[L]:-C[L],G=t.elements.arrow,J=p&&G?A(G):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=Q[R],te=Q[S],ne=I(0,C[L],J[L]),re=y?C[L]/2-q-ne-ee-P.mainAxis:_-ne-ee-P.mainAxis,ie=y?-C[L]/2+q+ne+te+P.mainAxis:X+ne+te+P.mainAxis,ae=t.elements.arrow&&W(t.elements.arrow),se=ae?"y"===x?ae.clientTop||0:ae.clientLeft||0:0,ce=null!=(M=null==N?void 0:N[x])?M:0,le=B+ie-ce,fe=I(p?k($,B+re-ce-se):$,B,p?E(V,le):V);j[x]=fe,T[x]=fe-B}if(s){var ue,de="x"===x?U:z,pe="x"===x?F:K,me=j[O],ve="y"===O?"height":"width",he=me+h[de],ge=me-h[pe],be=-1!==[U,z].indexOf(g),ye=null!=(ue=null==N?void 0:N[O])?ue:0,we=be?he:me-C[ve]-Z[ve]-ye+P.altAxis,Oe=be?me+C[ve]+Z[ve]-ye-P.altAxis:ge,je=p&&be?function(e,t,n){var r=I(e,t,n);return r>n?n:r}(we,me,Oe):I(p?we:he,me,p?Oe:ge);j[O]=je,T[O]=je-me}t.modifiersData[r]=T}},requiresIfExists:["offset"]};function ke(e,t,n){void 0===n&&(n=!1);var r=j(t),o=j(t)&&function(e){var t=e.getBoundingClientRect(),n=Z(t.width)/e.offsetWidth||1,r=Z(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=L(t),a=N(e,o,n),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==M(t)||me(i))&&(s=function(e){return e!==x(e)&&j(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:de(e);var t}(t)),j(t)?((c=N(t,!0)).x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=pe(i))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function Ze(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function De(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var Pe={placement:"bottom",modifiers:[],strategy:"absolute"};function Ne(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function Ae(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?Pe:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},Pe,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,c={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;l(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:O(e)?he(e):e.contextElement?he(e.contextElement):[],popper:he(t)};var f=function(e){var t=Ze(e);return ne.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=f.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:c,options:r}),l=function(){};a.push(s||l)}})),c.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(Ne(t,n)){o.rects={reference:ke(t,W(n),"fixed"===o.options.strategy),popper:A(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,l=i.options,f=void 0===l?{}:l,u=i.name;"function"===typeof a&&(o=a({state:o,options:f,name:u,instance:c})||o)}else o.reset=!1,r=-1}}},update:De((function(){return new Promise((function(e){c.forceUpdate(),e(o)}))})),destroy:function(){l(),s=!0}};if(!Ne(e,t))return c;function l(){a.forEach((function(e){return e()})),a=[]}return c.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}const Te=Ae({defaultModifiers:[{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=xe(t,{elementContext:"reference"}),s=xe(t,{altBoundary:!0}),c=Oe(a,r),l=Oe(s,o,i),f=je(c),u=je(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:f,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":u})}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=we({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,l={placement:w(t.placement),variation:oe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ae(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ae(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,c=x(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&l.forEach((function(e){e.addEventListener("scroll",n.update,se)})),s&&c.addEventListener("resize",n.update,se),function(){i&&l.forEach((function(e){e.removeEventListener("scroll",n.update,se)})),s&&c.removeEventListener("resize",n.update,se)}},data:{}},Ce,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,l=n.padding,f=n.boundary,u=n.rootBoundary,d=n.altBoundary,p=n.flipVariations,m=void 0===p||p,v=n.allowedAutoPlacements,h=t.options.placement,g=w(h),b=c||(g===h||!m?[le(h)]:function(e){if(w(e)===_)return[];var t=le(e);return[ue(e),t,ue(t)]}(h)),y=[h].concat(b).reduce((function(e,n){return e.concat(w(n)===_?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?te:c,f=oe(r),u=f?s?ee:ee.filter((function(e){return oe(e)===f})):X,d=u.filter((function(e){return l.indexOf(e)>=0}));0===d.length&&(d=u);var p=d.reduce((function(t,n){return t[n]=xe(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[w(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}(t,{placement:n,boundary:f,rootBoundary:u,padding:l,flipVariations:m,allowedAutoPlacements:v}):n)}),[]),x=t.rects.reference,O=t.rects.popper,j=new Map,C=!0,E=y[0],k=0;k<y.length;k++){var Z=y[k],D=w(Z),P=oe(Z)===Y,N=[U,F].indexOf(D)>=0,A=N?"width":"height",T=xe(t,{placement:Z,boundary:f,rootBoundary:u,altBoundary:d,padding:l}),M=N?P?K:z:P?F:U;x[A]>O[A]&&(M=le(M));var R=le(M),S=[];if(i&&S.push(T[D]<=0),s&&S.push(T[M]<=0,T[R]<=0),S.every((function(e){return e}))){E=Z,C=!1;break}j.set(Z,S)}if(C)for(var L=function(e){var t=y.find((function(t){var n=j.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},B=m?3:1;B>0;B--){if("break"===L(B))break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},Ee,re]}),Me=["enabled","placement","strategy","modifiers"];const Re={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},Se={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:t,popper:n}=e.elements;if("removeAttribute"in t){const e=(t.getAttribute("aria-describedby")||"").split(",").filter((e=>e.trim()!==n.id));e.length?t.setAttribute("aria-describedby",e.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;const{popper:n,reference:r}=e.elements,o=null==(t=n.getAttribute("role"))?void 0:t.toLowerCase();if(n.id&&"tooltip"===o&&"setAttribute"in r){const e=r.getAttribute("aria-describedby");if(e&&-1!==e.split(",").indexOf(n.id))return;r.setAttribute("aria-describedby",e?`${e},${n.id}`:n.id)}}},Le=[];var Be=function(e,t,n={}){let{enabled:r=!0,placement:o="bottom",strategy:a="absolute",modifiers:s=Le}=n,c=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,Me);const l=(0,i.useRef)(s),f=(0,i.useRef)(),u=(0,i.useCallback)((()=>{var e;null==(e=f.current)||e.update()}),[]),d=(0,i.useCallback)((()=>{var e;null==(e=f.current)||e.forceUpdate()}),[]),[p,m]=y((0,i.useState)({placement:o,update:u,forceUpdate:d,attributes:{},styles:{popper:{},arrow:{}}})),v=(0,i.useMemo)((()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:e})=>{const t={},n={};Object.keys(e.elements).forEach((r=>{t[r]=e.styles[r],n[r]=e.attributes[r]})),m({state:e,styles:t,attributes:n,update:u,forceUpdate:d,placement:e.placement})}})),[u,d,m]),h=(0,i.useMemo)((()=>(g(l.current,s)||(l.current=s),l.current)),[s]);return(0,i.useEffect)((()=>{f.current&&r&&f.current.setOptions({placement:o,strategy:a,modifiers:[...h,v,Re]})}),[a,o,v,r,h]),(0,i.useEffect)((()=>{if(r&&null!=e&&null!=t)return f.current=Te(e,t,Object.assign({},c,{placement:o,strategy:a,modifiers:[...h,Se,v]})),()=>{null!=f.current&&(f.current.destroy(),f.current=void 0,m((e=>Object.assign({},e,{attributes:{},styles:{popper:{}}}))))}}),[r,e,t]),p},$e=n(424),We=n(2950),He=n(7216),Ie=n(2473),Ve=n.n(Ie);const qe=()=>{};const Ue=e=>e&&("current"in e?e.current:e),Fe={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};var Ke=function(e,t=qe,{disabled:n,clickTrigger:r="click"}={}){const o=(0,i.useRef)(!1),a=(0,i.useRef)(!1),s=(0,i.useCallback)((t=>{const n=Ue(e);var r;Ve()(!!n,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),o.current=!n||!!((r=t).metaKey||r.altKey||r.ctrlKey||r.shiftKey)||!function(e){return 0===e.button}(t)||!!(0,$e.Z)(n,t.target)||a.current,a.current=!1}),[e]),c=(0,d.Z)((t=>{const n=Ue(e);n&&(0,$e.Z)(n,t.target)&&(a.current=!0)})),l=(0,d.Z)((e=>{o.current||t(e)}));(0,i.useEffect)((()=>{var t,o;if(n||null==e)return;const i=(0,He.Z)(Ue(e)),a=i.defaultView||window;let f=null!=(t=a.event)?t:null==(o=a.parent)?void 0:o.event,u=null;Fe[r]&&(u=(0,We.Z)(i,Fe[r],c,!0));const d=(0,We.Z)(i,r,s,!0),p=(0,We.Z)(i,r,(e=>{e!==f?l(e):f=void 0}));let m=[];return"ontouchstart"in i.documentElement&&(m=[].slice.call(i.body.children).map((e=>(0,We.Z)(e,"mousemove",qe)))),()=>{null==u||u(),d(),p(),m.forEach((e=>e()))}}),[e,n,r,s,c,l])};function ze(e={}){return Array.isArray(e)?e:Object.keys(e).map((t=>(e[t].name=t,e[t])))}function _e({enabled:e,enableEvents:t,placement:n,flip:r,offset:o,fixed:i,containerPadding:a,arrowElement:s,popperConfig:c={}}){var l,f,u,d,p;const m=function(e){const t={};return Array.isArray(e)?(null==e||e.forEach((e=>{t[e.name]=e})),t):e||t}(c.modifiers);return Object.assign({},c,{placement:n,enabled:e,strategy:i?"fixed":c.strategy,modifiers:ze(Object.assign({},m,{eventListeners:{enabled:t,options:null==(l=m.eventListeners)?void 0:l.options},preventOverflow:Object.assign({},m.preventOverflow,{options:a?Object.assign({padding:a},null==(f=m.preventOverflow)?void 0:f.options):null==(u=m.preventOverflow)?void 0:u.options}),offset:{options:Object.assign({offset:o},null==(d=m.offset)?void 0:d.options)},arrow:Object.assign({},m.arrow,{enabled:!!s,options:Object.assign({},null==(p=m.arrow)?void 0:p.options,{element:s})}),flip:Object.assign({enabled:!!r},m.flip)}))})}var Xe=n(5893);const Ye=["children"];const Ge=()=>{};function Je(e={}){const t=(0,i.useContext)(p),[n,r]=(0,m.Z)(),o=(0,i.useRef)(!1),{flip:a,offset:s,rootCloseEvent:c,fixed:l=!1,placement:f,popperConfig:u={},enableEventListeners:d=!0,usePopper:v=!!t}=e,h=null==(null==t?void 0:t.show)?!!e.show:t.show;h&&!o.current&&(o.current=!0);const{placement:g,setMenu:b,menuElement:y,toggleElement:w}=t||{},x=Be(w,y,_e({placement:f||g||"bottom-start",enabled:v,enableEvents:null==d?h:d,offset:s,flip:a,fixed:l,arrowElement:n,popperConfig:u})),O=Object.assign({ref:b||Ge,"aria-labelledby":null==w?void 0:w.id},x.attributes.popper,{style:x.styles.popper}),j={show:h,placement:g,hasShown:o.current,toggle:null==t?void 0:t.toggle,popper:v?x:null,arrowProps:v?Object.assign({ref:r},x.attributes.arrow,{style:x.styles.arrow}):{}};return Ke(y,(e=>{null==t||t.toggle(!1,e)}),{clickTrigger:c,disabled:!h}),[O,j]}function Qe(e){let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,Ye);const[r,o]=Je(n);return(0,Xe.jsx)(Xe.Fragment,{children:t(r,o)})}Qe.displayName="DropdownMenu",Qe.defaultProps={usePopper:!0};var et=Qe,tt=n(6769);const nt=e=>{var t;return"menu"===(null==(t=e.getAttribute("role"))?void 0:t.toLowerCase())},rt=()=>{};function ot(){const e=(0,tt.gP)(),{show:t=!1,toggle:n=rt,setToggle:r,menuElement:o}=(0,i.useContext)(p)||{},a=(0,i.useCallback)((e=>{n(!t,e)}),[t,n]),s={id:e,ref:r||rt,onClick:a,"aria-expanded":!!t};return o&&nt(o)&&(s["aria-haspopup"]=!0),[s,{show:t,toggle:n}]}function it({children:e}){const[t,n]=ot();return(0,Xe.jsx)(Xe.Fragment,{children:e(t,n)})}it.displayName="DropdownToggle";var at=it,st=n(7126),ct=n(6056),lt=n(861),ft=n(2747);const ut=["eventKey","disabled","onClick","active","as"];function dt({key:e,href:t,active:n,disabled:r,onClick:o}){const a=(0,i.useContext)(st.Z),s=(0,i.useContext)(ct.Z),{activeKey:c}=s||{},l=(0,st.h)(e,t),f=null==n&&null!=e?(0,st.h)(c)===l:n;return[{onClick:(0,d.Z)((e=>{r||(null==o||o(e),a&&!e.isPropagationStopped()&&a(l,e))})),"aria-disabled":r||void 0,"aria-selected":f,[(0,ft.PB)("dropdown-item")]:""},{isActive:f}]}const pt=i.forwardRef(((e,t)=>{let{eventKey:n,disabled:r,onClick:o,active:i,as:a=lt.ZP}=e,s=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,ut);const[c]=dt({key:n,href:s.href,disabled:r,onClick:o,active:i});return(0,Xe.jsx)(a,Object.assign({},s,{ref:t},c))}));pt.displayName="DropdownItem";var mt=pt,vt=n(2963);function ht(){const e=(0,f.Z)(),t=(0,i.useRef)(null),n=(0,i.useCallback)((n=>{t.current=n,e()}),[e]);return[t,n]}function gt({defaultShow:e,show:t,onSelect:n,onToggle:r,itemSelector:o=`* [${(0,ft.PB)("dropdown-item")}]`,focusFirstItemOnShow:f,placement:m="bottom-start",children:v}){const h=(0,vt.Z)(),[g,b]=(0,c.$c)(t,e,r),[y,w]=ht(),x=y.current,[O,j]=ht(),C=O.current,E=(0,l.Z)(g),k=(0,i.useRef)(null),Z=(0,i.useRef)(!1),D=(0,i.useContext)(st.Z),P=(0,i.useCallback)(((e,t,n=(null==t?void 0:t.type))=>{b(e,{originalEvent:t,source:n})}),[b]),N=(0,d.Z)(((e,t)=>{null==n||n(e,t),P(!1,t,"select"),t.isPropagationStopped()||null==D||D(e,t)})),A=(0,i.useMemo)((()=>({toggle:P,placement:m,show:g,menuElement:x,toggleElement:C,setMenu:w,setToggle:j})),[P,m,g,x,C,w,j]);x&&E&&!g&&(Z.current=x.contains(x.ownerDocument.activeElement));const T=(0,d.Z)((()=>{C&&C.focus&&C.focus()})),M=(0,d.Z)((()=>{const e=k.current;let t=f;if(null==t&&(t=!(!y.current||!nt(y.current))&&"keyboard"),!1===t||"keyboard"===t&&!/^key.+$/.test(e))return;const n=(0,a.Z)(y.current,o)[0];n&&n.focus&&n.focus()}));(0,i.useEffect)((()=>{g?M():Z.current&&(Z.current=!1,T())}),[g,Z,T,M]),(0,i.useEffect)((()=>{k.current=null}));const R=(e,t)=>{if(!y.current)return null;const n=(0,a.Z)(y.current,o);let r=n.indexOf(e)+t;return r=Math.max(0,Math.min(r,n.length)),n[r]};return(0,u.Z)((0,i.useCallback)((()=>h.document),[h]),"keydown",(e=>{var t,n;const{key:r}=e,o=e.target,i=null==(t=y.current)?void 0:t.contains(o),a=null==(n=O.current)?void 0:n.contains(o);if(/input|textarea/i.test(o.tagName)&&(" "===r||"Escape"!==r&&i||"Escape"===r&&"search"===o.type))return;if(!i&&!a)return;if("Tab"===r&&(!y.current||!g))return;k.current=e.type;const c={originalEvent:e,source:e.type};switch(r){case"ArrowUp":{const t=R(o,-1);return t&&t.focus&&t.focus(),void e.preventDefault()}case"ArrowDown":if(e.preventDefault(),g){const e=R(o,1);e&&e.focus&&e.focus()}else b(!0,c);return;case"Tab":(0,s.ZP)(o.ownerDocument,"keyup",(e=>{var t;("Tab"!==e.key||e.target)&&null!=(t=y.current)&&t.contains(e.target)||b(!1,c)}),{once:!0});break;case"Escape":"Escape"===r&&(e.preventDefault(),e.stopPropagation()),b(!1,c)}})),(0,Xe.jsx)(st.Z.Provider,{value:N,children:(0,Xe.jsx)(p.Provider,{value:A,children:v})})}gt.displayName="Dropdown",gt.Menu=et,gt.Toggle=at,gt.Item=mt;var bt=gt,yt=n(5446);const wt=i.createContext({});wt.displayName="DropdownContext";var xt=wt,Ot=n(3551),jt=n(6792);const Ct=i.forwardRef((({bsPrefix:e,className:t,eventKey:n,disabled:r=!1,onClick:i,active:a,as:s=Ot.Z,...c},l)=>{const f=(0,jt.vE)(e,"dropdown-item"),[u,d]=dt({key:n,href:c.href,disabled:r,onClick:i,active:a});return(0,Xe.jsx)(s,{...c,...u,ref:l,className:o()(t,f,d.isActive&&"active",r&&"disabled")})}));Ct.displayName="DropdownItem";var Et=Ct,kt=n(9585),Zt=n(5654);const Dt=i.createContext(null);Dt.displayName="InputGroupContext";var Pt=Dt,Nt=n(4819);n(1143);function At(e,t){return e}function Tt(e,t,n){let r=e?n?"bottom-start":"bottom-end":n?"bottom-end":"bottom-start";return"up"===t?r=e?n?"top-start":"top-end":n?"top-end":"top-start":"end"===t?r=e?n?"left-end":"right-end":n?"left-start":"right-start":"start"===t?r=e?n?"right-end":"left-end":n?"right-start":"left-start":"down-centered"===t?r="bottom":"up-centered"===t&&(r="top"),r}const Mt=i.forwardRef((({bsPrefix:e,className:t,align:n,rootCloseEvent:r,flip:a=!0,show:s,renderOnMount:c,as:l="div",popperConfig:f,variant:u,...d},p)=>{let m=!1;const v=(0,i.useContext)(Nt.Z),h=(0,jt.vE)(e,"dropdown-menu"),{align:g,drop:b,isRTL:y}=(0,i.useContext)(xt);n=n||g;const w=(0,i.useContext)(Pt),x=[];if(n)if("object"===typeof n){const e=Object.keys(n);if(e.length){const t=e[0],r=n[t];m="start"===r,x.push(`${h}-${t}-${r}`)}}else"end"===n&&(m=!0);const O=Tt(m,b,y),[j,{hasShown:C,popper:E,show:k,toggle:Z}]=Je({flip:a,rootCloseEvent:r,show:s,usePopper:!v&&0===x.length,offset:[0,2],popperConfig:f,placement:O});if(j.ref=(0,Zt.Z)(At(p),j.ref),(0,kt.Z)((()=>{k&&(null==E||E.update())}),[k]),!C&&!c&&!w)return null;"string"!==typeof l&&(j.show=k,j.close=()=>null==Z?void 0:Z(!1),j.align=n);let D=d.style;return null!=E&&E.placement&&(D={...d.style,...j.style},d["x-placement"]=E.placement),(0,Xe.jsx)(l,{...d,...j,style:D,...(x.length||v)&&{"data-bs-popper":"static"},className:o()(t,h,k&&"show",m&&`${h}-end`,u&&`${h}-${u}`,...x)})}));Mt.displayName="DropdownMenu";var Rt=Mt,St=n(5005);const Lt=i.forwardRef((({bsPrefix:e,split:t,className:n,childBsPrefix:r,as:a=St.Z,...s},c)=>{const l=(0,jt.vE)(e,"dropdown-toggle"),f=(0,i.useContext)(p);void 0!==r&&(s.bsPrefix=r);const[u]=ot();return u.ref=(0,Zt.Z)(u.ref,At(c)),(0,Xe.jsx)(a,{className:o()(n,l,t&&`${l}-split`,(null==f?void 0:f.show)&&"show"),...u,...s})}));Lt.displayName="DropdownToggle";var Bt=Lt,$t=n(6611);const Wt=(0,$t.Z)("dropdown-header",{defaultProps:{role:"heading"}}),Ht=(0,$t.Z)("dropdown-divider",{Component:"hr",defaultProps:{role:"separator"}}),It=(0,$t.Z)("dropdown-item-text",{Component:"span"}),Vt=i.forwardRef(((e,t)=>{const{bsPrefix:n,drop:r="down",show:a,className:s,align:c="start",onSelect:l,onToggle:f,focusFirstItemOnShow:u,as:p="div",navbar:m,autoClose:v=!0,...h}=(0,yt.Ch)(e,{show:"onToggle"}),g=(0,i.useContext)(Pt),b=(0,jt.vE)(n,"dropdown"),y=(0,jt.SC)(),w=(0,d.Z)(((e,t)=>{var n;t.originalEvent.currentTarget!==document||"keydown"===t.source&&"Escape"!==t.originalEvent.key||(t.source="rootClose"),n=t.source,(!1===v?"click"===n:"inside"===v?"rootClose"!==n:"outside"!==v||"select"!==n)&&(null==f||f(e,t))})),x=Tt("end"===c,r,y),O=(0,i.useMemo)((()=>({align:c,drop:r,isRTL:y})),[c,r,y]),j={down:b,"down-centered":`${b}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return(0,Xe.jsx)(xt.Provider,{value:O,children:(0,Xe.jsx)(bt,{placement:x,show:a,onSelect:l,onToggle:w,focusFirstItemOnShow:u,itemSelector:`.${b}-item:not(.disabled):not(:disabled)`,children:g?h.children:(0,Xe.jsx)(p,{...h,ref:t,className:o()(s,a&&"show",j[r])})})})}));Vt.displayName="Dropdown";var qt=Object.assign(Vt,{Toggle:Bt,Menu:Rt,Item:Et,ItemText:It,Divider:Ht,Header:Wt})},4214:function(e,t,n){var r=n(4184),o=n.n(r),i=n(7294),a=n(6792),s=n(200),c=n(4691),l=n(5893);const f=i.forwardRef((({id:e,title:t,children:n,bsPrefix:r,className:i,rootCloseEvent:f,menuRole:u,disabled:d,active:p,renderMenuOnMount:m,menuVariant:v,...h},g)=>{const b=(0,a.vE)(void 0,"nav-item");return(0,l.jsxs)(s.Z,{ref:g,...h,className:o()(i,b),children:[(0,l.jsx)(s.Z.Toggle,{id:e,eventKey:null,active:p,disabled:d,childBsPrefix:r,as:c.Z,children:t}),(0,l.jsx)(s.Z.Menu,{role:u,renderOnMount:m,rootCloseEvent:f,variant:v,children:n})]})}));f.displayName="NavDropdown",t.Z=Object.assign(f,{Item:s.Z.Item,ItemText:s.Z.ItemText,Divider:s.Z.Divider,Header:s.Z.Header})},9126:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(4184),o=n.n(r),i=n(7294),a=n(7126),s=n(5446),c=n(6611),l=n(6792),f=n(5893);const u=i.forwardRef((({bsPrefix:e,className:t,as:n,...r},i)=>{e=(0,l.vE)(e,"navbar-brand");const a=n||(r.href?"a":"span");return(0,f.jsx)(a,{...r,ref:i,className:o()(t,e)})}));u.displayName="NavbarBrand";var d=u,p=n(6518),m=n(4819);const v=i.forwardRef((({children:e,bsPrefix:t,...n},r)=>{t=(0,l.vE)(t,"navbar-collapse");const o=(0,i.useContext)(m.Z);return(0,f.jsx)(p.Z,{in:!(!o||!o.expanded),...n,children:(0,f.jsx)("div",{ref:r,className:t,children:e})})}));v.displayName="NavbarCollapse";var h=v,g=n(8146);const b=i.forwardRef((({bsPrefix:e,className:t,children:n,label:r="Toggle navigation",as:a="button",onClick:s,...c},u)=>{e=(0,l.vE)(e,"navbar-toggler");const{onToggle:d,expanded:p}=(0,i.useContext)(m.Z)||{},v=(0,g.Z)((e=>{s&&s(e),d&&d()}));return"button"===a&&(c.type="button"),(0,f.jsx)(a,{...c,ref:u,onClick:v,"aria-label":r,className:o()(t,e,!p&&"collapsed"),children:n||(0,f.jsx)("span",{className:`${e}-icon`})})}));b.displayName="NavbarToggle";var y=b,w=n(4874);const x=i.forwardRef(((e,t)=>{const n=(0,i.useContext)(m.Z);return(0,f.jsx)(w.Z,{ref:t,show:!(null==n||!n.expanded),...e,renderStaticNode:!0})}));x.displayName="NavbarOffcanvas";var O=x;const j=(0,c.Z)("navbar-text",{Component:"span"}),C=i.forwardRef(((e,t)=>{const{bsPrefix:n,expand:r=!0,variant:c="light",bg:u,fixed:d,sticky:p,className:v,as:h="nav",expanded:g,onToggle:b,onSelect:y,collapseOnSelect:w=!1,...x}=(0,s.Ch)(e,{expanded:"onToggle"}),O=(0,l.vE)(n,"navbar"),j=(0,i.useCallback)(((...e)=>{null==y||y(...e),w&&g&&(null==b||b(!1))}),[y,w,g,b]);void 0===x.role&&"nav"!==h&&(x.role="navigation");let C=`${O}-expand`;"string"===typeof r&&(C=`${C}-${r}`);const E=(0,i.useMemo)((()=>({onToggle:()=>null==b?void 0:b(!g),bsPrefix:O,expanded:!!g,expand:r})),[O,g,r,b]);return(0,f.jsx)(m.Z.Provider,{value:E,children:(0,f.jsx)(a.Z.Provider,{value:j,children:(0,f.jsx)(h,{ref:t,...x,className:o()(v,O,r&&C,c&&`${O}-${c}`,u&&`bg-${u}`,p&&`sticky-${p}`,d&&`fixed-${d}`)})})})}));C.displayName="Navbar";var E=Object.assign(C,{Brand:d,Collapse:h,Offcanvas:O,Text:j,Toggle:y})},2473:function(e){var t=function(){};e.exports=t}}]);