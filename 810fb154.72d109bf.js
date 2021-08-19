(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(273)),i=["components"],s={title:"app.getSupportSettings",sidebar_label:"app.getSupportSettings"},p={unversionedId:"developer/app/components/get-support-settings",id:"developer/app/components/get-support-settings",isDocsHomePage:!1,title:"app.getSupportSettings",description:"getSupportSettings Returns support settings for the bot. Useful for getting the names of custom fields.",source:"@site/docs/developer/app/components/get-support-settings.md",slug:"/developer/app/components/get-support-settings",permalink:"/docs/developer/app/components/get-support-settings",version:"current",sidebar_label:"app.getSupportSettings"},u=[],c={toc:u};function l(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"getSupportSettings Returns support settings for the bot. Useful for getting the names of custom fields."),Object(a.b)("p",null,"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'app.getSupportSettings().then(app.log)\n\n//output\n\n{\n     "customFieldsValidationFn": null,\n     "closeTicketOptionsRequiredTocloseTicket": false,\n     "tags": [],\n     "csatRatingType": "numbers",\n     "csatEnabled": false,\n     "enableCollaboration": false,\n     "ticketRatingQuestion": "Did we resolve your case?",\n     "agentRatingQuestion": "How would you rate your agent?",\n     "askTicketRating": true,\n     "askAgentRating": true,\n     "solved": "solved",\n     "unsolved": "unsolved",\n     "emailChatLogsToUser": false,\n     "allowDuplicateAgentSessions": true,\n     "ticketUpdateEventSettings": {\n         "assignedFromQueue": true,\n         "ticketClosed": true,\n         "tagUpdate": false,\n         "noteUpdate": false,\n         "customFieldUpdate": false,\n         "ticketTransfer": false,\n         "ticketInactivity": false,\n         "ticketAssignedUI": false,\n         "_id": "5f8b1d8215ed390010ede226"\n     },\n     "_id": "5eb94eec7b8b900010da8cb2",\n     "closeTicketOptions": [],\n     "botId": "x1588565299602",\n     "createdDate": "2020-05-11T13:11:08.227Z",\n     "updatedDate": "2020-05-11T13:11:08.227Z",\n     "ticketsQueueConfig": [\n         {\n             "allowTicketsQueue": false,\n             "maxQueueLimit": 50,\n             "_id": "5eb94eec7b8b900010da8cb3",\n             "groupCode": "default"\n         }\n     ],\n     "agentUiConfiguration": [\n         {\n             "ticketReportDownloadVisibility": true,\n             "enableAttachments": true,\n             "publicChatUrlVisibility": true,\n             "chatTranscriptDownloadVisibility": true,\n             "userActivityVisibility": true,\n             "userLocationVisibility": true,\n             "enableEmoji": true,\n             "enablePauseBot": true,\n             "showBotAttachments": true,\n             "_id": "5eb94eec7b8b900010da8cb4"\n         }\n     ],\n     "__v": 0\n }\n')))}l.isMDXComponent=!0},273:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),c=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=c(n),f=r,b=l["".concat(i,".").concat(f)]||l[f]||d[f]||a;return n?o.a.createElement(b,s(s({ref:t},u),{},{components:n})):o.a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);