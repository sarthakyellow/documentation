(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{141:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(273)),c=["components"],p={title:"app.updateTicketCsat",sidebar_label:"app.updateTicketCsat"},i={unversionedId:"developer/app/components/update-ticket-csat",id:"developer/app/components/update-ticket-csat",isDocsHomePage:!1,title:"app.updateTicketCsat",description:"app.updateTicketCsat is used to update the CSAT score for the ticket. This information will also reflect in the report downloaded from tickets tab.",source:"@site/docs/developer/app/components/update-ticket-csat.md",slug:"/developer/app/components/update-ticket-csat",permalink:"/docs/developer/app/components/update-ticket-csat",version:"current",sidebar_label:"app.updateTicketCsat"},u=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Example Usage",id:"example-usage",children:[]},{value:"Note:",id:"note",children:[]}],s={toc:u};function l(e){var t=e.components,r=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"app.updateTicketCsat is used to update the CSAT score for the ticket. This information will also reflect in the report downloaded from tickets tab."),Object(o.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(o.b)("p",null,"ticketId, csatData\n\u200b"),Object(o.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(o.b)("p",null,"An Object, with success/failure message\n\u200b"),Object(o.b)("h2",{id:"example-usage"},"Example Usage"),Object(o.b)("p",null,"\u200b"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'app.updateTicketCsat({\n    ticketId: ticketData.ticketId, csatData: {\n        ticketCsatScore: 1, // integer - either 0 or 1. (0 for unsolved, 1 for solved)\n        agentCsatScore: 5 // integer - range is between 1-5.\n}}).then(res => {\n    app.log(res, "success csat data");\n}).catch(err => {\n    app.log(err, "error in csat data");\n});\n')),Object(o.b)("h2",{id:"note"},"Note:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Custom CSAT should be triggered upon receiving ticket-closed event.")))}l.isMDXComponent=!0},273:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=s(r),b=n,f=l["".concat(c,".").concat(b)]||l[b]||d[b]||o;return r?a.a.createElement(f,p(p({ref:t},u),{},{components:r})):a.a.createElement(f,p({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);