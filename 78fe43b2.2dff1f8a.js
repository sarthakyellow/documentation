(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(273)),c=["components"],u={title:"app.executeFunction",sidebar_label:"app.executeFunction"},p={unversionedId:"developer/app/components/execute-function",id:"developer/app/components/execute-function",isDocsHomePage:!1,title:"app.executeFunction",description:"Process to directly call/execute another function from the developer section",source:"@site/docs/developer/app/components/execute-function.md",slug:"/developer/app/components/execute-function",permalink:"/docs/developer/app/components/execute-function",version:"current",sidebar_label:"app.executeFunction"},l=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Process to directly call/execute another function from the developer section"),Object(o.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The first argument is the function name that we want to execute."),Object(o.b)("li",{parentName:"ol"},"The second argument deals with the arguments/parameters that we want the function to use.")),Object(o.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"app.executeFunction('functionName', args).then((optional_returned_value) => {\n// good practice to return resolve if nothing else has to be done, otherwise use the returned value (optional)\n    return resolve();\n }).catch((e) => {\n     //handle error\n })\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"args is a JSON Object")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"args = {\n   time: date,\n   mobile: app.context.steps['phone-number'],\n   branch: branch_name,\n   documents: documents,\n   address: branch_addr\n};\n")),Object(o.b)("p",null,"To use it in a function being called, directly name them as:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"app.sendTextMessage(`Branch name is ${args.branch}`);\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"There is no need to use .then and .catch but it is good practice since this function will be executed asynchronously and you may resolve the function before even actually setting the value.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If a value has to be returned, then return it as return value.")))}s.isMDXComponent=!0},273:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),i=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=i(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=i(n),m=r,d=s["".concat(c,".").concat(m)]||s[m]||b[m]||o;return n?a.a.createElement(d,u(u({ref:t},l),{},{components:n})):a.a.createElement(d,u({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);