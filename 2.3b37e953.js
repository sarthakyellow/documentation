/*! For license information please see 2.3b37e953.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{282:function(e,t,a){"use strict";var n=a(277),r=a(8),c=a(22);t.a=function(){var e=Object(n.useHistory)(),t=Object(n.useLocation)(),a=Object(c.default)().siteConfig,o=(a=void 0===a?{}:a).baseUrl;return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(a){var n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:function(e){return o+"search?q="+encodeURIComponent(e)}}}},283:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(275),o=a(58),l=a.n(o);var i=function(){return r.a.createElement("nav",{"aria-label":"Skip navigation links"},r.a.createElement("button",{type:"button",tabIndex:0,className:l.a.skipToContent,onKeyDown:function(e){if(13===e.keyCode){document.activeElement.blur();var t=document.querySelector("main:first-of-type");t&&t.scrollIntoView()}}},"Skip to main content"))},s=a(274),u=a(303),d=a(59),m=a.n(d);var f=function(){var e,t=Object(u.a)(),a=t.isAnnouncementBarClosed,n=t.closeAnnouncementBar,o=Object(s.useThemeConfig)().announcementBar;if(!o)return null;var l=o.content,i=o.backgroundColor,d=o.textColor,f=o.isCloseable;return!l||f&&a?null:r.a.createElement("div",{className:m.a.announcementBar,style:{backgroundColor:i,color:d},role:"banner"},r.a.createElement("div",{className:Object(c.a)(m.a.announcementBarContent,(e={},e[m.a.announcementBarCloseable]=f,e)),dangerouslySetInnerHTML:{__html:l}}),f?r.a.createElement("button",{type:"button",className:m.a.announcementBarClose,onClick:n,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},h=a(3),v=a(281),b=a(331),p=a.n(b),g=a(22),E=a(60),k=a.n(E),O=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(k.a.toggle,k.a.dark),style:a},t)},y=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(k.a.toggle,k.a.light),style:a},t)},j=function(e){var t=Object(s.useThemeConfig)().colorMode.switchConfig,a=t.darkIcon,n=t.darkIconStyle,c=t.lightIcon,o=t.lightIconStyle,l=Object(g.default)().isClient;return r.a.createElement(p.a,Object(h.a)({disabled:!l,icons:{checked:r.a.createElement(O,{icon:a,style:n}),unchecked:r.a.createElement(y,{icon:c,style:o})}},e))},C=a(294),_=a(277),w=a(307),N=function(e){var t=Object(_.useLocation)(),a=Object(n.useState)(!e),r=a[0],c=a[1],o=Object(n.useRef)(!1),l=Object(n.useState)(0),i=l[0],s=l[1],u=Object(n.useState)(0),d=u[0],m=u[1],f=Object(n.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return Object(w.a)((function(t){var a=t.scrollY;if(e&&!(a<d)){if(o.current)return o.current=!1,c(!1),void s(a);i&&0===a&&c(!0);var n=document.documentElement.scrollHeight-d,r=window.innerHeight;i&&a>=i?c(!1):a+r<n&&c(!0),s(a)}}),[i,d,o]),Object(n.useEffect)((function(){e&&i&&c(!0)}),[t.pathname]),Object(n.useEffect)((function(){e&&(o.current=!0)}),[t.hash]),{navbarRef:f,isNavbarVisible:r}},S=a(308),T=a(309),L=a(7),D=a(284),I=["mobile"];function P(e){var t=e.mobile,a=Object(L.a)(e,I),n=Object(g.default)(),c=n.siteConfig.baseUrl,o=n.i18n,l=o.defaultLocale,i=o.currentLocale,s=o.locales,u=o.localeConfigs,d=Object(_.useLocation)().pathname;function m(e){return u[e].label}var f=i===l?c:c.replace("/"+i+"/","/"),v=d.replace(c,"");var b=s.map((function(e){var t=""+function(e){return e===l?""+f:""+f+e+"/"}(e)+v;return{isNavLink:!0,label:m(e),to:"pathname://"+t,target:"_self",autoAddBaseUrl:!1,className:e===i?"dropdown__link--active":""}})),p=t?"Languages":m(i);return r.a.createElement(D.a,Object(h.a)({},a,{mobile:t,label:p,items:b}))}var B=["type"],A={default:function(){return D.a},localeDropdown:function(){return P},docsVersion:function(){return a(335).default},docsVersionDropdown:function(){return a(336).default},doc:function(){return a(337).default}};function M(e){var t=e.type,a=Object(L.a)(e,B),n=function(e){void 0===e&&(e="default");var t=A[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(n,a)}var x=a(321),V=a(310),R=a(62),U=a.n(R),F="right";var H=function(){var e,t,a=Object(s.useThemeConfig)(),o=a.navbar,l=o.items,i=o.hideOnScroll,u=o.style,d=a.colorMode.disableSwitch,m=Object(n.useState)(!1),f=m[0],b=m[1],p=Object(n.useState)(!1),g=p[0],E=p[1],k=Object(C.a)(),O=k.isDarkTheme,y=k.setLightTheme,_=k.setDarkTheme,w=N(i),L=w.navbarRef,D=w.isNavbarVisible;Object(S.a)(f);var I=Object(n.useCallback)((function(){b(!0)}),[b]),P=Object(n.useCallback)((function(){b(!1)}),[b]),B=Object(n.useCallback)((function(e){return e.target.checked?_():y()}),[y,_]),A=Object(T.a)();Object(n.useEffect)((function(){A===T.b.desktop&&b(!1)}),[A]);var R=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:F)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:F)}))}}(l),H=R.leftItems,X=R.rightItems;return r.a.createElement("nav",{ref:L,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===u,"navbar--primary":"primary"===u,"navbar-sidebar--show":f},e[U.a.navbarHideable]=i,e[U.a.navbarHidden]=!D,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=l&&0!==l.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:I,onKeyDown:I},r.a.createElement(V.a,null)),r.a.createElement(x.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title",(t={},t[U.a.hideLogoText]=g,t))}),H.map((function(e,t){return r.a.createElement(M,Object(h.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},X.map((function(e,t){return r.a.createElement(M,Object(h.a)({},e,{key:t}))})),!d&&r.a.createElement(j,{className:U.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:O,onChange:B}),r.a.createElement(v.a,{handleSearchBarToggle:E,isSearchBarExpanded:g}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:P}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(x.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:P}),!d&&f&&r.a.createElement(j,{"aria-label":"Dark mode toggle in sidebar",checked:O,onChange:B})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},l.map((function(e,t){return r.a.createElement(M,Object(h.a)({mobile:!0},e,{onClick:P,key:t}))})))))))},X=a(276),K=a(278),G=a(63),q=a.n(G),W=["to","href","label","prependBaseUrlToHref"];function Y(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,o=Object(L.a)(e,W),l=Object(K.a)(t),i=Object(K.a)(a,{forcePrependBaseUrl:!0});return r.a.createElement(X.a,Object(h.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?i:a}:{to:l},o),n)}var z=function(e){var t=e.url,a=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var J=function(){var e=Object(s.useThemeConfig)().footer,t=e||{},a=t.copyright,n=t.links,o=void 0===n?[]:n,l=t.logo,i=void 0===l?{}:l,u=Object(K.a)(i.src);return e?r.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},o&&o.length>0&&r.a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(Y,e))}))):null)}))),(i||a)&&r.a.createElement("div",{className:"footer__bottom text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:q.a.footerLogoLink},r.a.createElement(z,{alt:i.alt,url:u})):r.a.createElement(z,{alt:i.alt,url:u})),a?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null},Z=a(8),$="light",Q="dark",ee=function(e){return e===Q?Q:$},te=function(){return Z.a.canUseDOM?ee(document.documentElement.getAttribute("data-theme")):$},ae=function(e){try{localStorage.setItem("theme",ee(e))}catch(t){console.error(t)}},ne=function(){var e=Object(s.useThemeConfig)().colorMode,t=e.disableSwitch,a=e.respectPrefersColorScheme,r=Object(n.useState)(te),c=r[0],o=r[1],l=Object(n.useCallback)((function(){o($),ae($)}),[]),i=Object(n.useCallback)((function(){o(Q),ae(Q)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",ee(c))}),[c]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&o(ee(e))}catch(a){console.error(a)}}),[o]),Object(n.useEffect)((function(){t&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;o(t?Q:$)}))}),[]),{isDarkTheme:c===Q,setLightTheme:l,setDarkTheme:i}},re=a(306);var ce=function(e){var t=ne(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(re.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},oe="docusaurus.tab.",le=function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith(oe))e[n.substring(oe.length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}},ie="docusaurus.announcement.dismiss",se="docusaurus.announcement.id",ue=function(){var e=Object(s.useThemeConfig)().announcementBar,t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useCallback)((function(){localStorage.setItem(ie,"true"),r(!0)}),[]);return Object(n.useEffect)((function(){if(e){var t=e.id,a=localStorage.getItem(se);"annoucement-bar"===a&&(a="announcement-bar");var n=t!==a;localStorage.setItem(se,t),n&&localStorage.setItem(ie,"false"),(n||"false"===localStorage.getItem(ie))&&r(!1)}}),[]),{isAnnouncementBarClosed:a,closeAnnouncementBar:c}},de=a(304);var me=function(e){var t=le(),a=t.tabGroupChoices,n=t.setTabGroupChoices,c=ue(),o=c.isAnnouncementBarClosed,l=c.closeAnnouncementBar;return r.a.createElement(de.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:o,closeAnnouncementBar:l}},e.children)};function fe(e){var t=e.children;return r.a.createElement(ce,null,r.a.createElement(me,null,r.a.createElement(s.DocsPreferredVersionContextProvider,null,t)))}var he=a(23);function ve(e){var t=e.locale,a=e.version,n=e.tag,c=t;return r.a.createElement(he.a,null,c&&r.a.createElement("meta",{name:"docsearch:language",content:c}),a&&r.a.createElement("meta",{name:"docsearch:version",content:a}),n&&r.a.createElement("meta",{name:"docsearch:docusaurus_tag",content:n}))}function be(e){var t=Object(g.default)(),a=t.siteConfig,n=t.i18n.currentLocale,c=a.favicon,o=a.themeConfig,l=o.image,i=o.metadatas,u=a.url,d=e.title,m=e.description,f=e.image,v=e.keywords,b=e.permalink,p=e.searchMetadatas,E=Object(s.useTitleFormatter)(d),k=f||l,O=Object(K.a)(k,{absolute:!0}),y=Object(K.a)(c),j=n.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(he.a,null,r.a.createElement("html",{lang:j}),E&&r.a.createElement("title",null,E),E&&r.a.createElement("meta",{property:"og:title",content:E}),c&&r.a.createElement("link",{rel:"shortcut icon",href:y}),m&&r.a.createElement("meta",{name:"description",content:m}),m&&r.a.createElement("meta",{property:"og:description",content:m}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:O}),k&&r.a.createElement("meta",{name:"twitter:image",content:O}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E}),b&&r.a.createElement("meta",{property:"og:url",content:u+b}),b&&r.a.createElement("link",{rel:"canonical",href:u+b}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(ve,Object(h.a)({tag:s.DEFAULT_SEARCH_TAG,locale:n},p)),r.a.createElement(he.a,null,i.map((function(e,t){return r.a.createElement("meta",Object(h.a)({key:"metadata_"+t},e))}))))}a(64);var pe=function(){Object(n.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};a(65);t.a=function(e){var t=e.children,a=e.noFooter,n=e.wrapperClassName;return pe(),r.a.createElement(fe,null,r.a.createElement(be,e),r.a.createElement(i,null),r.a.createElement(f,null),r.a.createElement(H,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n)},t),!a&&r.a.createElement(J,null))}},284:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(275),i=a(276),s=a(278),u=a(277),d=a(274),m=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],f=["items","position","className"],h=["className"],v=["items","className","position"],b=["className"],p=["mobile"];function g(e){var t=e.activeBasePath,a=e.activeBaseRegex,c=e.to,l=e.href,u=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,h=e.prependBaseUrlToHref,v=Object(r.a)(e,m),b=Object(s.a)(c),p=Object(s.a)(t),g=Object(s.a)(l,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(n.a)({},l?{target:"_blank",rel:"noopener noreferrer",href:h?g:l}:Object.assign({isNavLink:!0,activeClassName:f,to:b},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(p)}}:null),v),u)}function E(e){var t=e.items,a=e.position,i=e.className,s=Object(r.a)(e,f),u=Object(c.useRef)(null),d=Object(c.useRef)(null),m=Object(c.useState)(!1),v=m[0],b=m[1];Object(c.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var p=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?o.a.createElement("div",{ref:u,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a,"dropdown--show":v})},o.a.createElement(g,Object(n.a)({className:p(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),b(!v))}}),s.label),o.a.createElement("ul",{ref:d,className:"dropdown__menu"},t.map((function(e,a){var c=e.className,l=Object(r.a)(e,h);return o.a.createElement("li",{key:a},o.a.createElement(g,Object(n.a)({onKeyDown:function(e){if(a===t.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);var n=u.current.nextElementSibling;n&&n.focus()}},activeClassName:"dropdown__link--active",className:p(c,!0)},l)))})))):o.a.createElement(g,Object(n.a)({className:p(i)},s))}function k(e){var t,a,i=e.items,s=e.className,m=(e.position,Object(r.a)(e,v)),f=Object(c.useRef)(null),h=Object(u.useLocation)().pathname,p=Object(c.useState)((function(){var e;return null===(e=!(null!=i&&i.some((function(e){return Object(d.isSamePath)(e.to,h)}))))||void 0===e||e})),E=p[0],k=p[1],O=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};if(!i)return o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(g,Object(n.a)({className:O(s)},m)));var y=null!==(t=f.current)&&void 0!==t&&t.scrollHeight?(null===(a=f.current)||void 0===a?void 0:a.scrollHeight)+"px":void 0;return o.a.createElement("li",{className:Object(l.a)("menu__list-item",{"menu__list-item--collapsed":E})},o.a.createElement(g,Object(n.a)({role:"button",className:O(s,!0)},m,{onClick:function(){k((function(e){return!e}))}}),m.label),o.a.createElement("ul",{className:"menu__list",ref:f,style:{height:E?void 0:y}},i.map((function(e,t){var a=e.className,c=Object(r.a)(e,b);return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(g,Object(n.a)({activeClassName:"menu__link--active",className:O(a)},c,{onClick:m.onClick})))}))))}t.a=function(e){var t=e.mobile,a=void 0!==t&&t,n=Object(r.a)(e,p),c=a?k:E;return o.a.createElement(c,n)}},287:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(279),r=a(274),c=a(22);function o(){var e=function(){var e=Object(c.default)().i18n,t=Object(n.useAllDocsData)(),a=Object(n.useActivePluginAndVersion)(),o=Object(r.useDocsPreferredVersionByPluginId)(),l=[r.DEFAULT_SEARCH_TAG].concat(Object.keys(t).map((function(e){var n,c,l=(null==a||null===(n=a.activePlugin)||void 0===n?void 0:n.pluginId)===e?a.activeVersion:void 0,i=o[e],s=t[e].versions.find((function(e){return e.isLast})),u=null!==(c=null!=l?l:i)&&void 0!==c?c:s;return Object(r.docVersionSearchTag)(e,u.name)})));return{locale:e.currentLocale,tags:l}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}},293:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},294:function(e,t,a){"use strict";var n=a(0),r=a(306);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},303:function(e,t,a){"use strict";var n=a(0),r=a(304);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},304:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},305:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n);function c(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},306:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(void 0);t.a=r},307:function(e,t,a){"use strict";var n=a(0),r=a(8),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(c()),r=a[0],o=a[1],l=function(){var t=c();o(t),e&&e(t)};return Object(n.useEffect)((function(){var e={passive:!0};return window.addEventListener("scroll",l,e),function(){return window.removeEventListener("scroll",l,e)}}),t),r}},308:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},309:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var a=Object(n.useState)(t),c=a[0],o=a[1];return Object(n.useEffect)((function(){if(e)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};function a(){o(t())}}),[]),c}},310:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=["width","height","className"];t.a=function(e){var t=e.width,a=void 0===t?30:t,c=e.height,i=void 0===c?30:c,s=e.className,u=Object(r.a)(e,l);return o.a.createElement("svg",Object(n.a)({"aria-label":"Menu",className:s,width:a,height:i,viewBox:"0 0 30 30",role:"img",focusable:"false"},u),o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},321:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(276),i=a(275),s=a(22),u=a(294),d=a(61),m=a.n(d),f=["sources","className","alt"],h=function(e){var t=Object(s.default)().isClient,a=Object(u.a)().isDarkTheme,c=e.sources,l=e.className,d=e.alt,h=void 0===d?"":d,v=Object(r.a)(e,f),b=t?a?["dark"]:["light"]:["light","dark"];return o.a.createElement(o.a.Fragment,null,b.map((function(e){return o.a.createElement("img",Object(n.a)({key:e,src:c[e],alt:h,className:Object(i.a)(m.a.themedImage,m.a["themedImage--"+e],l)},v))})))},v=a(278),b=a(274),p=a(290),g=["imageClassName","titleClassName"];t.a=function(e){var t=Object(s.default)().isClient,a=Object(b.useThemeConfig)().navbar,c=a.title,i=a.logo,u=void 0===i?{src:""}:i,d=e.imageClassName,m=e.titleClassName,f=Object(r.a)(e,g),E=Object(v.a)(u.href||"/"),k=u.target?{target:u.target}:Object(p.a)(E)?{}:{rel:"noopener noreferrer",target:"_blank"},O={light:Object(v.a)(u.src),dark:Object(v.a)(u.srcDark||u.src)};return o.a.createElement(l.a,Object(n.a)({to:E},f,k),u.src&&o.a.createElement(h,{key:t,className:d,sources:O,alt:u.alt||c||"Logo"}),null!=c&&o.a.createElement("strong",{className:m},c))}},331:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=m(c),l=m(a(293)),i=m(a(1)),s=m(a(332)),u=m(a(333)),d=a(334);function m(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},f.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},332:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},333:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},334:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},335:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(284),i=a(279),s=a(274),u=["label","to","docsPluginId"];function d(e){var t,a=e.label,c=e.to,d=e.docsPluginId,m=Object(r.a)(e,u),f=Object(i.useActiveVersion)(d),h=Object(s.useDocsPreferredVersion)(d).preferredVersion,v=Object(i.useLatestVersion)(d),b=null!==(t=null!=f?f:h)&&void 0!==t?t:v,p=null!=a?a:b.label,g=null!=c?c:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(b).path;return o.a.createElement(l.a,Object(n.a)({},m,{label:p,to:g}))}},336:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(284),i=a(279),s=a(274),u=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function m(e){var t,a,c=e.mobile,m=e.docsPluginId,f=e.dropdownActiveClassDisabled,h=e.dropdownItemsBefore,v=e.dropdownItemsAfter,b=Object(r.a)(e,u),p=Object(i.useActiveDocContext)(m),g=Object(i.useVersions)(m),E=Object(i.useLatestVersion)(m),k=Object(s.useDocsPreferredVersion)(m),O=k.preferredVersion,y=k.savePreferredVersionName;var j=null!==(t=null!==(a=p.activeVersion)&&void 0!==a?a:O)&&void 0!==t?t:E,C=c?"Versions":j.label,_=c?void 0:d(j).path;return o.a.createElement(l.a,Object(n.a)({},b,{mobile:c,label:C,to:_,items:function(){var e=g.map((function(e){var t=(null==p?void 0:p.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==p?void 0:p.activeVersion)},onClick:function(){y(e.name)}}})),t=[].concat(h,e,v);if(!(t.length<=1))return t}(),isActive:f?function(){return!1}:void 0}))}},337:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(284),i=a(279),s=a(275),u=a(274),d=["docId","activeSidebarClassName","label","docsPluginId"];function m(e){var t,a,c=e.docId,m=e.activeSidebarClassName,f=e.label,h=e.docsPluginId,v=Object(r.a)(e,d),b=Object(i.useActiveDocContext)(h),p=b.activeVersion,g=b.activeDoc,E=Object(u.useDocsPreferredVersion)(h).preferredVersion,k=Object(i.useLatestVersion)(h),O=null!==(t=null!=p?p:E)&&void 0!==t?t:k,y=O.docs.find((function(e){return e.id===c}));if(!y)throw new Error("DocNavbarItem: couldn't find any doc with id="+c+" in version "+O.name+".\nAvailable docIds=\n- "+O.docs.join("\n- "));return o.a.createElement(l.a,Object(n.a)({exact:!0},v,{className:Object(s.a)(v.className,(a={},a[m]=g&&g.sidebar===y.sidebar,a)),label:null!=f?f:y.id,to:y.path}))}},365:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n);function c(e){var t=e.isOpen,a=e.onOpen,n=e.onClose,c=e.onInput,o=e.searchButtonRef;r.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,a=t.tagName;return t.isContentEditable||"INPUT"===a||"SELECT"===a||"TEXTAREA"===a}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?n():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||a()),o&&o.current===document.activeElement&&c&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&c(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,a,n,c,o])}},366:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function c(){return r.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var o=a(305);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(i){r=!0,c=i}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var u="Ctrl";var d=r.a.forwardRef((function(e,t){var a=i(Object(n.useState)(null),2),s=a[0],d=a[1];return Object(n.useEffect)((function(){"undefined"!=typeof navigator&&d(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":u)}),[]),r.a.createElement("button",l({type:"button",className:"DocSearch DocSearch-Button","aria-label":"Search"},e,{ref:t}),r.a.createElement("div",{className:"DocSearch-Button-Container"},r.a.createElement(o.a,null),r.a.createElement("span",{className:"DocSearch-Button-Placeholder"},"Search")),null!==s?r.a.createElement("div",{className:"DocSearch-Button-Keys"},r.a.createElement("span",{className:"DocSearch-Button-Key"},s===u?r.a.createElement(c,null):s),r.a.createElement("span",{className:"DocSearch-Button-Key"},"K")):null)}))}}]);