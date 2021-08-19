(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{122:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),c=(t(0),t(273)),i=["components"],o={title:"Campaigns using Audience API",sidebar_label:"Audience API"},s={unversionedId:"developer/app/apis/audience-api",id:"developer/app/apis/audience-api",isDocsHomePage:!1,title:"Campaigns using Audience API",description:"Adding Audience using an API:",source:"@site/docs/developer/app/apis/audience-api.md",slug:"/developer/app/apis/audience-api",permalink:"/docs/developer/app/apis/audience-api",version:"current",sidebar_label:"Audience API"},l=[{value:"Steps",id:"steps",children:[{value:"Request",id:"request",children:[]},{value:"Response",id:"response",children:[]}]}],u={toc:l};function p(e){var n=e.components,t=Object(r.a)(e,i);return Object(c.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Adding Audience using an API:")),Object(c.b)("p",null,"Call the following API for adding an audience:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'curl --location --request POST\' \nhttps://app.yellowmessenger.com/api/scheduler/audience/record/india_mock_test?bot=x1588761516561 \n--header \'Content-Type: application/json\' \n--header \'x-auth-token: X_AUTH_TOKEN\' \n--data-raw \n\'\n{"number": "918723062265",\n"name": "Wasim",\n"tags": ["UG","india","Test"],\n"audienceId": " "\n}\'\n')),Object(c.b)("h2",{id:"steps"},"Steps"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Enter the audience details like phone no., name, tags.."),Object(c.b)("li",{parentName:"ol"},"Enter the audience id to which you want to add it accordingly."),Object(c.b)("li",{parentName:"ol"},"After calling the API you will receive a success message as given in the sample below, after\nwhich the new audience would have been added."),Object(c.b)("li",{parentName:"ol"},"Please pass the column values that are already available on the specific Audience."),Object(c.b)("li",{parentName:"ol"},"Tags should be passed in array only.")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Note: You can use your own API key for this. Please check account settings on YM Platform for API\nKey.")),Object(c.b)("h3",{id:"request"},"Request"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'{\n    "number": "918723062265",\n    "name": "Wasim",\n    "tags": [\n        "UG",\n        "india",\n        "Test"],\n\n        "audienceId": " "\n}\'\n')),Object(c.b)("h3",{id:"response"},"Response"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'"success" : true,\n"message" : "record",\n"data":{\n    "name": [\n        "Wasim2"\n    ],\n    "tags": [\n        "UG",\n        "INDIA",\n        "TEST"\n    ],\n    "segments": [],\n    "_id": "",\n    "number": "",\n    "audienceId" : "",\n    "botId" : "",\n    "inserted" : "",\n    "updated" : "",\n    "__v" : 0\n    }\n}\n')))}p.isMDXComponent=!0},273:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),b=a,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||c;return t?r.a.createElement(m,o(o({ref:n},l),{},{components:t})):r.a.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=b;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);