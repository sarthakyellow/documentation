(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{273:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),s=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=s(t),d=r,m=b["".concat(p,".").concat(d)]||b[d]||u[d]||o;return t?a.a.createElement(m,l(l({ref:n},c),{},{components:t})):a.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var c=2;c<o;c++)p[c]=t[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},73:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(7),o=(t(0),t(273)),p=["components"],l={title:"app.phoneParse",sidebar_label:"app.phoneParse"},i={unversionedId:"developer/app/components/phone-parse",id:"developer/app/components/phone-parse",isDocsHomePage:!1,title:"app.phoneParse",description:"app.phoneParse",source:"@site/docs/developer/app/components/phone-parse.md",slug:"/developer/app/components/phone-parse",permalink:"/docs/developer/app/components/phone-parse",version:"current",sidebar_label:"app.phoneParse"},c=[{value:"Methods",id:"methods",children:[]},{value:"getPhone",id:"getphone",children:[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"message | <code>string</code>",id:"message--string",children:[]},{value:"Return Value | <code>string</code>",id:"return-value--string",children:[]},{value:"Example",id:"example-2",children:[]}]},{value:"isPhone",id:"isphone",children:[{value:"Syntax",id:"syntax-1",children:[]},{value:"Parameters",id:"parameters-1",children:[]},{value:"phone| <code>string</code>",id:"phone-string",children:[]},{value:"Return Value | <code>boolean</code>",id:"return-value--boolean",children:[]},{value:"Example",id:"example-5",children:[]}]}],s={toc:c};function b(e){var n=e.components,t=Object(a.a)(e,p);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"appphoneparse"},"app.phoneParse"),Object(o.b)("p",null,"This object contains methods for parsing phone number i.e. ",Object(o.b)("inlineCode",{parentName:"p"},"getPhone"),"\nand ",Object(o.b)("inlineCode",{parentName:"p"},"isPhone"),". These methods are mostly used in IVR bots for parsing\nphone numbers."),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h2",{id:"getphone"},"getPhone"),Object(o.b)("p",null,"This method used for getting phone numbers from voice response."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"app.phoneParse.getPhone(message)\n")),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("h3",{id:"message--string"},"message ","|"," ",Object(o.b)("inlineCode",{parentName:"h3"},"string")),Object(o.b)("p",null,"A string containing phone number text"),Object(o.b)("h4",{id:"example"},"example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'"double 9 double 4 triple 8 triple 6"\n')),Object(o.b)("h3",{id:"return-value--string"},"Return Value ","|"," ",Object(o.b)("inlineCode",{parentName:"h3"},"string")),Object(o.b)("p",null,"It returns the parsed mobile number"),Object(o.b)("h4",{id:"example-1"},"example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'"9944888666"\n')),Object(o.b)("h3",{id:"example-2"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'let message = \'double 9 double 4 triple 8 triple 6\';\nlet mobile = app.phoneParse.getPhone(message);\napp.log(mobile,"Parsed mobile");\n//the log will be\n"9944888666"\n')),Object(o.b)("hr",null),Object(o.b)("h2",{id:"isphone"},"isPhone"),Object(o.b)("p",null,"This method used for testing a string is a valid phone number or not"),Object(o.b)("h3",{id:"syntax-1"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"app.phoneParse.isPhone(phone)\n")),Object(o.b)("h3",{id:"parameters-1"},"Parameters"),Object(o.b)("h3",{id:"phone-string"},"phone","|"," ",Object(o.b)("inlineCode",{parentName:"h3"},"string")),Object(o.b)("p",null,"A string containing phone number text"),Object(o.b)("h4",{id:"example-3"},"example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'"9876543210"\n')),Object(o.b)("h3",{id:"return-value--boolean"},"Return Value ","|"," ",Object(o.b)("inlineCode",{parentName:"h3"},"boolean")),Object(o.b)("p",null,"It returns the boolean value. If it is valid number returns ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"\notherwise ",Object(o.b)("inlineCode",{parentName:"p"},"false"),"."),Object(o.b)("h4",{id:"example-4"},"example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"true\n")),Object(o.b)("h3",{id:"example-5"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"let phone = '9876543210';\nlet isPhone = app.phoneParse.isPhone(phone);\napp.log(isPhone, \"is mobile?\");\n//the log will be\ntrue\n")),Object(o.b)("hr",null))}b.isMDXComponent=!0}}]);