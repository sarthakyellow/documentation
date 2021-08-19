(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),l=(n(0),n(273)),r=["components"],i={title:"FAQ Management",sidebar_labels:"FAQ Management"},s={unversionedId:"platform_concepts/studio/knowledge-management/add-faqs",id:"platform_concepts/studio/knowledge-management/add-faqs",isDocsHomePage:!1,title:"FAQ Management",description:"How to add multiple FAQs?",source:"@site/docs/platform_concepts/studio/knowledge-management/add-faqs.md",slug:"/platform_concepts/studio/knowledge-management/add-faqs",permalink:"/docs/platform_concepts/studio/knowledge-management/add-faqs",version:"current",sidebar:"platform_concepts",previous:{title:"Operational/Logical Nodes - Action and Logic",permalink:"/docs/platform_concepts/studio/steps/action-nodes-and-logic"},next:{title:"What is Document Cognition",permalink:"/docs/platform_concepts/studio/knowledge-management/what-is-document-cognition"}},c=[{value:"How to add multiple FAQs?",id:"how-to-add-multiple-faqs",children:[]},{value:"FAQs in Multilingual bots",id:"faqs-in-multilingual-bots",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,r);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"how-to-add-multiple-faqs"},"How to add multiple FAQs?"),Object(l.b)("p",null,"Many time what happens is you want to add multiple FAQs in the bot. While the Yellow Messenger provides a way to do that the easy way too, but repeating the same process for multiple FAQs is a tedious process. (believe us, we've been there!)"),Object(l.b)("p",null,"Worry not, because we already have a feature specifically for that. Using this feature, you can add multiple FAQs at once through a CSV file."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Open the ",Object(l.b)("inlineCode",{parentName:"li"},"Studio")," and click on ",Object(l.b)("inlineCode",{parentName:"li"},"FAQs")," button.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/Www48QD5VxMa1615886801763.png",alt:"Bot Studio"})),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Here you should see 3 windows: Questions, Question variations and Answers. On the top left bar, click on ",Object(l.b)("inlineCode",{parentName:"li"},"Bulk manage")," and then ",Object(l.b)("inlineCode",{parentName:"li"},"Import"),".")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/hH264EEWm40S1615886848493.png",alt:"Import FAQs"})),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},'It will open up a pop-up. We will need a CSV file to upload the FAQs. That CSV file should include "category", "question", "variations", "answer_en" in the column headers. You can also download the format from the link given in the pop-up. Download that file.')),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/0wYjyfW1fdXH1615886896548.png",alt:"FAQs Format"})),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"If you open the downloaded file in Excel or any other spreadsheet editor, it'll look like this.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/7rPR31TWzQCY1615886956450.png",alt:"FAQs Structure"})),Object(l.b)("ol",{start:5},Object(l.b)("li",{parentName:"ol"},"You can also use Google Sheets to edit this file. Now, let's add FAQs.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"category: Here type in which category you want to add these FAQs. Please make sure that the categories you've entered here exists on the platform."),Object(l.b)("li",{parentName:"ul"},"question: What users will ask?"),Object(l.b)("li",{parentName:"ul"},"variation: Here you can add multiple variations of the question. One thing you need to keep in mind is, first question and variation will remain the same even if you add multiple variations."),Object(l.b)("li",{parentName:"ul"},"answer_en: Finally, answer of the respective question. Here 'en' in ",Object(l.b)("inlineCode",{parentName:"li"},"answer_en")," stands for english. You can add answer in different languages too. For i.e. to add an answer in Hindi you can add column header as ",Object(l.b)("inlineCode",{parentName:"li"},"answer_hi"),". ")))),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/VsFafdtTBunI1615887034296.png",alt:"Add FAQs"})),Object(l.b)("ol",{start:6},Object(l.b)("li",{parentName:"ol"},"Download / save the file as CSV file. Before you upload the file on the platform, we need to ensure if column headers are correct. For that open the CSV file in any text editor like VS Code, Sublime, vim (if you dare) and check if column headers are included in quotes. As you can see in the image below, on line 1 column headers are not wrapped in quotes. ")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/rGQEGn9NZbml1615887097398.png",alt:"Modify CSV file headers"})),Object(l.b)("p",null,"In that case, you can add quotes manually. Like this in the image given below, checkout line 1. Don't forget to save the changes! \ud83d\ude09"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/2d5K8sdYcT0B1615887133256.png",alt:"Modify CSV file headers in an editor"})),Object(l.b)("ol",{start:7},Object(l.b)("li",{parentName:"ol"},"Now let's continue from where we left on step 3. In that pop-up, upload the CSV file. Now click on ",Object(l.b)("inlineCode",{parentName:"li"},"Upload")," button.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/A387i9C8jqka1615887185315.png",alt:"CSV File Upload"})),Object(l.b)("p",null,"Once the upload it complete, ",Object(l.b)("inlineCode",{parentName:"p"},"Done")," message will appear. Click on ",Object(l.b)("inlineCode",{parentName:"p"},"Return Back"),". "),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/yy2lfatldxhM1615887211191.png",alt:"Upload Success"})),Object(l.b)("p",null,"All the FAQs you've added, you can see on the left side. To check if a question has different variations click on any question and you should see multiple question variations (if any) under ",Object(l.b)("inlineCode",{parentName:"p"},"Question Variation")," tab. Finally on the right most tab, you can see ",Object(l.b)("inlineCode",{parentName:"p"},"Answers"),". If you want, you add multiple answers also for randomizing."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/ZlFb8A4gmtMj1615887267635.png",alt:"FAQs Uploaded Successfully"})),Object(l.b)("ol",{start:8},Object(l.b)("li",{parentName:"ol"},"Now you can go back to ",Object(l.b)("inlineCode",{parentName:"li"},"Try Your Bot")," under ",Object(l.b)("inlineCode",{parentName:"li"},"Overview")," tab and try one of FAQ you've added eariler. Voila! Congratulations on building your first FAQ bot! \ud83c\udf89")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/GYNYBPbWXGFe1615887293471.png",alt:"Try FAQs in your bot"})),Object(l.b)("h3",{id:"faqs-in-multilingual-bots"},"FAQs in Multilingual bots"),Object(l.b)("p",null,"Please make sure that 'Autodetect in enabled under tools section as shown'\n",Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/fywFORjNhR2d1622871881317.png",alt:"tools"})),Object(l.b)("p",null,"Also all languages that you would like are enabled/selected under configurations section.\n",Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/TCvB6C5Xi0C01622871930384.png",alt:"tools"})),Object(l.b)("p",null,"Consider for an example a french FAQs bot. English answer is not mandatory for the French only bots, for those questions, you can add answer under language_fr column and leave the langauge_en column empty."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/ZslPb3oSw0O81622871511166.png",alt:"Language"}),'\nEach alternate question should be a row in the sheet. e.g. If the question is "What is the return policy?", and you have two alternatives - "Return policy" and "Can I return the item?", here is how you will add them -'),Object(l.b)("p",null,'This will add 1 question "What is the return policy?" trained on two alternatives "Return policy" and "Can I return the item?". So if the user query is similar to any of these 3 sentences, we will be able to map it to this question.'),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/FAlCHDzmmhYC1622871600260.png",alt:"Language"}),'\nYou can also categorize your questions, please make sure to create the category before you upload the csv. You can add the category in the first column "category", you can also use the most relevant tag as the category if that makes sense for your KB -\n',Object(l.b)("a",{parentName:"p",href:"https://cdn.yellowmessenger.com/4xHV1ZBD36Zr1622871672346.png"},"https://cdn.yellowmessenger.com/4xHV1ZBD36Zr1622871672346.png")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/4xHV1ZBD36Zr1622871672346.png",alt:"Language"})),Object(l.b)("p",null,'Similarly, if you want to add Italian responses, you can add another column with header language_it (langauge_isocode, here iso code = it for Italian). If you want to test the bot after uploading, pls make sure to add the relevant languages in the "Configure" section.'),Object(l.b)("p",null,"Please find below an example of the template for a french only bot\n",Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/U9UTQfHbZqAT1622871674822.png",alt:"Language"})))}u.isMDXComponent=!0},273:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(r,".").concat(b)]||u[b]||d[b]||l;return n?o.a.createElement(m,i(i({ref:t},c),{},{components:n})):o.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var c=2;c<l;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);