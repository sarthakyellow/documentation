(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(273)),c=["components"],p={title:"app.updateCollaborators",sidebar_label:"app.updateCollaborators"},l={unversionedId:"developer/app/components/update-collaborators",id:"developer/app/components/update-collaborators",isDocsHomePage:!1,title:"app.updateCollaborators",description:"-",source:"@site/docs/developer/app/components/update-collaborators.md",slug:"/developer/app/components/update-collaborators",permalink:"/docs/developer/app/components/update-collaborators",version:"current",sidebar_label:"app.updateCollaborators"},u=[{value:"Input",id:"input",children:[]},{value:"Output",id:"output",children:[]},{value:"Example",id:"example",children:[]}],i={toc:u};function s(e){var t=e.components,r=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This function takes in the ticket ID and the collaborators to be added and updates the ticket. This function keeps the currently assigned agent as collaborator.")),Object(a.b)("p",null,"Agent usernames can be fetched from ",Object(a.b)("inlineCode",{parentName:"p"},"app.getAgents()"),". "),Object(a.b)("h2",{id:"input"},"Input"),Object(a.b)("p",null,"ticketId and list of collaborators."),Object(a.b)("h2",{id:"output"},"Output"),Object(a.b)("p",null,"String containing ",Object(a.b)("inlineCode",{parentName:"p"},"Collaborators updated successfully!")," or ",Object(a.b)("inlineCode",{parentName:"p"},'{"error": "unable to add collaborator"}')),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"app.updateCollaborators({\nticketId: '100032',\ncollaborators: ['soujanyaagent1yellowmessengercom']\n})\n")))}s.isMDXComponent=!0},273:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),i=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=i(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=i(r),d=n,f=s["".concat(c,".").concat(d)]||s[d]||b[d]||a;return r?o.a.createElement(f,p(p({ref:t},u),{},{components:r})):o.a.createElement(f,p({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);