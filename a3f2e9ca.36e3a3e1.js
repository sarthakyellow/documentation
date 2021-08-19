(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{195:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),a=(t(0),t(273)),i=["components"],p={title:"app.sendWebViews",sidebar_label:"app.sendWebViews"},c={unversionedId:"developer/app/components/send-web-views",id:"developer/app/components/send-web-views",isDocsHomePage:!1,title:"app.sendWebViews",description:"Input",source:"@site/docs/developer/app/components/send-web-views.md",slug:"/developer/app/components/send-web-views",permalink:"/docs/developer/app/components/send-web-views",version:"current",sidebar_label:"app.sendWebViews"},l=[{value:"Input",id:"input",children:[]},{value:"Output",id:"output",children:[]},{value:"Example",id:"example",children:[]}],u={toc:l};function s(e){var n=e.components,t=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"input"},"Input"),Object(a.b)("p",null,"WebView object with relevant parameters."),Object(a.b)("h2",{id:"output"},"Output"),Object(a.b)("p",null,"Will send web views in bot."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'app.sendWebViews(data: WebView).then(()=>{\n  // After sending webview\n})\n\ndeclare WebView {\n    "webView",\n    "scrollable",\n    "fullWidthWidget",\n    "fixedPosition",\n    "fullWidthWidget",\n    "hideInput",\n    "url",\n    "id",\n    "title",\n    "height",\n    "teamId",\n    "extension",\n}\n')))}s.isMDXComponent=!0},273:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,f=s["".concat(i,".").concat(b)]||s[b]||d[b]||a;return t?o.a.createElement(f,p(p({ref:n},l),{},{components:t})):o.a.createElement(f,p({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);