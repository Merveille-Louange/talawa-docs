"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[7535],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(v,o(o({ref:t},c),{},{components:a})):n.createElement(v,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5880:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),o=["components"],l={id:"installation-overview",title:"Overview"},s=void 0,p={unversionedId:"features/installation/installation-overview",id:"features/installation/installation-overview",title:"Overview",description:"This section is a work in progress.",source:"@site/docs/features/installation/overview.md",sourceDirName:"features/installation",slug:"/features/installation/installation-overview",permalink:"/talawa-docs/docs/features/installation/installation-overview",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/website/docs/features/installation/overview.md",tags:[],version:"current",frontMatter:{id:"installation-overview",title:"Overview"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/talawa-docs/docs/features/features-introduction"},next:{title:"Overview",permalink:"/talawa-docs/docs/features/admin-portal/admin-portal-overview"}},c={},u=[{value:"Overall Guidance",id:"overall-guidance",level:2},{value:"Code: INS-001",id:"code-ins-001",level:2},{value:"Single Click Installation Mobile App",id:"single-click-installation-mobile-app",level:3}],d={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This section is a work in progress."))),(0,i.kt)("h2",{id:"overall-guidance"},"Overall Guidance"),(0,i.kt)("p",null,"We need to ensure that the app, the API and the admin portal install flawlessly, ideally with a single click. The only parameters that should be required are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"App:")," None for installation, however the registration process should be initiated upon starting the app. Registration should be as easy as possible. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/PalisadoesFoundation/talawa/issues/797"},"Issue #797")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"API:")," Backend database authentication parameters, hostname, username, password. Not much more. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/PalisadoesFoundation/talawa-api/issues/241"},"Issue #241")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Admin Portal:")," AP URI, admin username and password with verification. Not much more. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/PalisadoesFoundation/talawa-admin/issues/18"},"Issue #18"))),(0,i.kt)("p",null,"Use the ease of installation of other social media apps like LinkedIn, Instagram and WhatsApp as a guide."),(0,i.kt)("h2",{id:"code-ins-001"},"Code: INS-001"),(0,i.kt)("h3",{id:"single-click-installation-mobile-app"},"Single Click Installation Mobile App"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Authored by")," ",(0,i.kt)("em",{parentName:"p"}," ",(0,i.kt)("strong",{parentName:"em"},"Shannika Jackson")," ","_","_",". Last updated on")," ",(0,i.kt)("em",{parentName:"p"}," ",(0,i.kt)("strong",{parentName:"em"},"March 16,2021")," ")),(0,i.kt)("p",null,"This feature aims to ",(0,i.kt)("em",{parentName:"p"}," ",(0,i.kt)("strong",{parentName:"em"},"enhance user experience")," ")," by ",(0,i.kt)("em",{parentName:"p"}," ",(0,i.kt)("strong",{parentName:"em"},"simplifying the installation process")," "),"."))}m.isMDXComponent=!0}}]);