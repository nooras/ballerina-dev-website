(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2775],{861:function(e,t,n){"use strict";n.d(t,{FT:function(){return s}});var a=n(7294),r=n(5893);const i=["as","disabled"];function s({tagName:e,disabled:t,href:n,target:a,rel:r,role:i,onClick:s,tabIndex:o=0,type:c}){e||(e=null!=n||null!=a||null!=r?"a":"button");const l={tagName:e};if("button"===e)return[{type:c||"button",disabled:t},l];const d=a=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(n))&&a.preventDefault(),t?a.stopPropagation():null==s||s(a)};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:t?void 0:o,href:n,target:"a"===e?a:void 0,"aria-disabled":t||void 0,rel:"a"===e?r:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},l]}const o=a.forwardRef(((e,t)=>{let{as:n,disabled:a}=e,o=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,i);const[c,{tagName:l}]=s(Object.assign({tagName:n,disabled:a},o));return(0,r.jsx)(l,Object.assign({},o,c,{ref:t}))}));o.displayName="Button",t.ZP=o},2958:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(5893),r=n(7294),i=n(5607),s=n(5640),o=n(2157),c=n.n(o);function l(e){var t=e.navContent,n=e.bbe,o=void 0===n?null:n,l=e.viewer,d=void 0===l?null:l,u=function(e){var t=e.navContent;return(0,a.jsx)(i.Z,{defaultActiveKey:v,className:c().leftNavAccordian,flush:!0,children:t&&t.sublinks.map((function(e,t){return(0,a.jsxs)(i.Z.Item,{eventKey:e.id,className:c().acItem,children:[(0,a.jsx)(i.Z.Header,{className:c().mainDir,children:e.title}),(0,a.jsx)(i.Z.Body,{className:c().accordionBody,children:(0,a.jsx)("ul",{className:c().firstTier,children:e.hasOwnProperty("sublinks")?(0,a.jsx)(g,{active:v===t+1,directories:e.sublinks}):null})})]},t)}))})},f=(0,r.useState)(""),m=(f[0],f[1]),p=(0,r.useState)(null),v=p[0],b=p[1],h=(0,r.useState)(null),x=h[0],y=h[1];function g(e){var t=e.active,n=void 0!==t&&t;return e.directories.map((function(e){return(0,a.jsx)(a.Fragment,{children:e.hasOwnProperty("sublinks")?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.Z,{defaultActiveKey:n?x:null,children:(0,a.jsxs)(i.Z.Item,{eventKey:e.id,className:c().acItem,children:[(0,a.jsx)(i.Z.Header,{children:e.title}),(0,a.jsx)(i.Z.Body,{className:c().acBody,children:(0,a.jsx)("ul",{className:c().secondTier,children:(0,a.jsx)(g,{directories:e.sublinks})})})]})})}):(0,a.jsx)("li",{children:(0,a.jsx)("a",{id:e.id,className:o===e.url?c().active:null,href:"".concat(s.O)?"".concat(s.O,"/learn/by-example/").concat(e.url):"/learn/by-example/".concat(e.url),children:e.title})},e.id)})}))}return(0,r.useEffect)((function(){if(null===d){var e=!0,n=!1,a=void 0;try{for(var r,i=t.sublinks[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var s=r.value,c=!0,l=!1,u=void 0;try{for(var f,p=s.sublinks[Symbol.iterator]();!(c=(f=p.next()).done);c=!0){var v=f.value,h=!0,x=!1,g=void 0;try{for(var j,N=v.sublinks[Symbol.iterator]();!(h=(j=N.next()).done);h=!0){j.value.url===o&&(b(s.id),y(v.id))}}catch(w){x=!0,g=w}finally{try{h||null==N.return||N.return()}finally{if(x)throw g}}}}catch(w){l=!0,u=w}finally{try{c||null==p.return||p.return()}finally{if(l)throw u}}}}catch(w){n=!0,a=w}finally{try{e||null==i.return||i.return()}finally{if(n)throw a}}}else b(d);m(t.url)}),[t,o,d]),(0,a.jsx)(u,{navContent:t})}},3286:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(5893),r=n(9008),i=n(5152),s=n(478),o=n(682),c=n(1608),l=n(4564);function d(e){var t=e.children,d=(0,i.default)((function(){return Promise.all([n.e(1917),n.e(211),n.e(6276),n.e(4504)]).then(n.bind(n,6276))}),{loadableGenerated:{webpack:function(){return[6276]}},ssr:!1}),u=(0,i.default)((function(){return n.e(9332).then(n.bind(n,9332))}),{loadableGenerated:{webpack:function(){return[9332]}},ssr:!1});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.default,{children:[(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{property:"og:image",content:"https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"}),(0,a.jsx)("meta",{property:"og:image",content:"https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,a.jsx)("meta",{name:"twitter:site",content:"@ballerinalang"}),(0,a.jsx)("meta",{name:"twitter:creator",content:"@ballerinalang"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"}),(0,a.jsx)("meta",{property:"twitter:image",content:"https://ballerina.io/images/ballerina-generic-social-media-image-2023.png"}),(0,a.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.setAttributeNode(d.createAttribute('data-ot-ignore'));j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-PSL2TX4');"}}),(0,a.jsx)("script",{type:"text/javascript",crossOrigin:"true",src:"https://cdn.jsdelivr.net/npm/@docsearch/js@alpha"}),(0,a.jsx)("script",{src:"https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js",type:"text/javascript",charSet:"UTF-8","data-domain-script":"630ad396-5fd5-4745-92ae-2765dc8841ee",defer:!0})]}),(0,a.jsx)(u,{}),(0,a.jsxs)(s.Z,{gap:0,className:"main-wrapper",children:[(0,a.jsx)(d,{launcher:"docs"}),(0,a.jsx)(o.Z,{className:"wrap-page-content",fluid:!0,children:(0,a.jsx)(c.Z,{children:t})}),(0,a.jsx)(l.Z,{})]})]})}},2157:function(e){e.exports={leftNavAccordian:"LeftNav_leftNavAccordian__i9BmP",headName:"LeftNav_headName__Z0Gbv",acItem:"LeftNav_acItem__wMNuO",mainDir:"LeftNav_mainDir__aO30Y",collapsed:"LeftNav_collapsed__eO0vU",accordionBody:"LeftNav_accordionBody__mzk_B",firstTier:"LeftNav_firstTier__KPVX9",acBody:"LeftNav_acBody__r7jSH",secondTier:"LeftNav_secondTier__nZWOX",active:"LeftNav_active__7vmPU",nonAcBtn:"LeftNav_nonAcBtn__RvVTg"}},2703:function(e,t,n){"use strict";var a=n(414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,s){if(s!==a){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5005:function(e,t,n){"use strict";var a=n(4184),r=n.n(a),i=n(7294),s=n(861),o=n(6792),c=n(5893);const l=i.forwardRef((({as:e,bsPrefix:t,variant:n="primary",size:a,active:i=!1,disabled:l=!1,className:d,...u},f)=>{const m=(0,o.vE)(t,"btn"),[p,{tagName:v}]=(0,s.FT)({tagName:e,disabled:l,...u}),b=v;return(0,c.jsx)(b,{...p,...u,ref:f,disabled:l,className:r()(d,m,i&&"active",n&&`${m}-${n}`,a&&`${m}-${a}`,u.href&&l&&"disabled")})}));l.displayName="Button",t.Z=l},4819:function(e,t,n){"use strict";const a=n(7294).createContext(null);a.displayName="NavbarContext",t.Z=a},4874:function(e,t,n){"use strict";n.d(t,{Z:function(){return F}});var a=n(4184),r=n.n(a),i=n(9585),s=n(7294);const o=new WeakMap,c=(e,t)=>{if(!e||!t)return;const n=o.get(t)||new Map;o.set(t,n);let a=n.get(e);return a||(a=t.matchMedia(e),a.refCount=0,n.set(a.media,a)),a};function l(e,t=("undefined"===typeof window?void 0:window)){const n=c(e,t),[a,r]=(0,s.useState)((()=>!!n&&n.matches));return(0,i.Z)((()=>{let n=c(e,t);if(!n)return r(!1);let a=o.get(t);const i=()=>{r(n.matches)};return n.refCount++,n.addListener(i),i(),()=>{n.removeListener(i),n.refCount--,n.refCount<=0&&(null==a||a.delete(n.media)),n=void 0}}),[e]),a}var d=function(e){const t=Object.keys(e);function n(e,t){return e===t?t:e?`${e} and ${t}`:t}function a(n){const a=function(e){return t[Math.min(t.indexOf(e)+1,t.length-1)]}(n);let r=e[a];return r="number"===typeof r?r-.2+"px":`calc(${r} - 0.2px)`,`(max-width: ${r})`}return function(t,r,i){let o;"object"===typeof t?(o=t,i=r,r=!0):o={[t]:r=r||!0};let c=(0,s.useMemo)((()=>Object.entries(o).reduce(((t,[r,i])=>("up"!==i&&!0!==i||(t=n(t,function(t){let n=e[t];return"number"===typeof n&&(n=`${n}px`),`(min-width: ${n})`}(r))),"down"!==i&&!0!==i||(t=n(t,a(r))),t)),"")),[JSON.stringify(o)]);return l(c,i)}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),u=n(8146),f=n(2881),m=n(1068),p=n(6611),v=(0,p.Z)("offcanvas-body"),b=n(4527),h=n(3825),x=n(2785),y=n(6792),g=n(5893);const j={[b.d0]:"show",[b.cn]:"show"},N=s.forwardRef((({bsPrefix:e,className:t,children:n,in:a=!1,mountOnEnter:i=!1,unmountOnExit:o=!1,appear:c=!1,...l},d)=>(e=(0,y.vE)(e,"offcanvas"),(0,g.jsx)(x.Z,{ref:d,addEndListener:h.Z,in:a,mountOnEnter:i,unmountOnExit:o,appear:c,...l,childRef:n.ref,children:(a,i)=>s.cloneElement(n,{...i,className:r()(t,n.props.className,(a===b.d0||a===b.Ix)&&`${e}-toggling`,j[a])})}))));N.displayName="OffcanvasToggling";var w=N,_=n(6467),O=n(4819),k=n(6695);const E=s.forwardRef((({bsPrefix:e,className:t,closeLabel:n="Close",closeButton:a=!1,...i},s)=>(e=(0,y.vE)(e,"offcanvas-header"),(0,g.jsx)(k.Z,{ref:s,...i,className:r()(t,e),closeLabel:n,closeButton:a}))));E.displayName="OffcanvasHeader";var Z=E;const T=(0,n(9602).Z)("h5");var C=(0,p.Z)("offcanvas-title",{Component:T}),L=n(9673);function S(e){return(0,g.jsx)(w,{...e})}function B(e){return(0,g.jsx)(m.Z,{...e})}const P=s.forwardRef((({bsPrefix:e,className:t,children:n,"aria-labelledby":a,placement:i="start",responsive:o,show:c=!1,backdrop:l=!0,keyboard:m=!0,scroll:p=!1,onEscapeKeyDown:v,onShow:b,onHide:h,container:x,autoFocus:j=!0,enforceFocus:N=!0,restoreFocus:w=!0,restoreFocusOptions:k,onEntered:E,onExit:Z,onExiting:T,onEnter:C,onEntering:P,onExited:F,backdropClassName:$,manager:I,renderStaticNode:D=!1,...R},A)=>{const H=(0,s.useRef)();e=(0,y.vE)(e,"offcanvas");const{onToggle:K}=(0,s.useContext)(O.Z)||{},[M,U]=(0,s.useState)(!1),W=d(o||"xs","up");(0,s.useEffect)((()=>{U(o?c&&!W:c)}),[c,o,W]);const G=(0,u.Z)((()=>{null==K||K(),null==h||h()})),V=(0,s.useMemo)((()=>({onHide:G})),[G]);const X=(0,s.useCallback)((t=>(0,g.jsx)("div",{...t,className:r()(`${e}-backdrop`,$)})),[$,e]),z=s=>(0,g.jsx)("div",{...s,...R,className:r()(t,o?`${e}-${o}`:e,`${e}-${i}`),"aria-labelledby":a,children:n});return(0,g.jsxs)(g.Fragment,{children:[!M&&(o||D)&&z({}),(0,g.jsx)(_.Z.Provider,{value:V,children:(0,g.jsx)(f.Z,{show:M,ref:A,backdrop:l,container:x,keyboard:m,autoFocus:j,enforceFocus:N&&!p,restoreFocus:w,restoreFocusOptions:k,onEscapeKeyDown:v,onShow:b,onHide:G,onEnter:(e,...t)=>{e&&(e.style.visibility="visible"),null==C||C(e,...t)},onEntering:P,onEntered:E,onExit:Z,onExiting:T,onExited:(e,...t)=>{e&&(e.style.visibility=""),null==F||F(...t)},manager:I||(p?(H.current||(H.current=new L.Z({handleContainerOverflow:!1})),H.current):(0,L.t)()),transition:S,backdropTransition:B,renderBackdrop:X,renderDialog:z})})]})}));P.displayName="Offcanvas";var F=Object.assign(P,{Body:v,Header:Z,Title:C})}}]);