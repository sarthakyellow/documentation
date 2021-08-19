(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{250:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return u}));var t=r(3),a=r(7),o=(r(0),r(273)),p=["components"],c={title:"app.sendBoardingPasses",sidebar_label:"app.sendBoardingPasses"},i={unversionedId:"developer/app/components/send-boarding-pass",id:"developer/app/components/send-boarding-pass",isDocsHomePage:!1,title:"app.sendBoardingPasses",description:"Input",source:"@site/docs/developer/app/components/send-boarding-pass.md",slug:"/developer/app/components/send-boarding-pass",permalink:"/docs/developer/app/components/send-boarding-pass",version:"current",sidebar_label:"app.sendBoardingPasses"},s=[{value:"Input",id:"input",children:[]},{value:"Output",id:"output",children:[]},{value:"Example",id:"example",children:[]}],d={toc:s};function u(e){var n=e.components,r=Object(a.a)(e,p);return Object(o.b)("wrapper",Object(t.a)({},d,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"input"},"Input"),Object(o.b)("p",null,"Boarding Pass object according"),Object(o.b)("h2",{id:"output"},"Output"),Object(o.b)("p",null,"Send Boarding Pass as a Card"),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'app.sendBoardingPasses(data: BoardingPassess).then(()=>{\n  // After sending the Boarding Cards\n})\n\ndeclare BoardingPassess {\n  "pnr",\n  "flightNumber",\n  "barcode",\n  "fullName",\n  "gate",\n  "boardingTime",\n  "from",\n  "seat",\n  "seqNo",\n  "duration",\n  "to",\n  "actions",\n  "from.code",\n  "to.code",\n  "from.city",\n  "to.city",\n  "barcode.barcodeData",\n  "from.departureDate",\n  "from.departureTime",\n  "to.arrivalDate",\n  "to.arrivalTime",\n}\n')))}u.isMDXComponent=!0},273:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return f}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),d=function(e){var n=a.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=d(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(r),b=t,f=u["".concat(p,".").concat(b)]||u[b]||l[b]||o;return r?a.a.createElement(f,c(c({ref:n},s),{},{components:r})):a.a.createElement(f,c({ref:n},s))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,p=new Array(o);p[0]=b;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,p[1]=c;for(var s=2;s<o;s++)p[s]=r[s];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);