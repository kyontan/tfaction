"use strict";(self.webpackChunktfaction=self.webpackChunktfaction||[]).push([[1933],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),o=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=o(t.components);return r.createElement(u.Provider,{value:e},t.children)},p="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=o(n),m=a,d=p["".concat(u,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(d,l(l({ref:e},c),{},{components:n})):r.createElement(d,l({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s[p]="string"==typeof t?t:a,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4592:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:900},l="Linters",s={unversionedId:"feature/linter",id:"feature/linter",title:"Linters",description:"tfaction runs some linters in test Action.",source:"@site/docs/feature/linter.md",sourceDirName:"feature",slug:"/feature/linter",permalink:"/tfaction/docs/feature/linter",draft:!1,editUrl:"https://github.com/suzuki-shunsuke/tfaction-docs/edit/main/docs/feature/linter.md",tags:[],version:"current",sidebarPosition:900,frontMatter:{sidebar_position:900},sidebar:"tutorialSidebar",previous:{title:"Drift Detection",permalink:"/tfaction/docs/feature/drift-detection"},next:{title:"Support skipping creating pull requests",permalink:"/tfaction/docs/feature/skip-creating-pr"}},u={},o=[{value:"Enable or disable linters",id:"enable-or-disable-linters",level:2},{value:"tflint",id:"tflint",level:2},{value:"tfsec",id:"tfsec",level:2},{value:"Trivy",id:"trivy",level:2}],c={toc:o},p="wrapper";function f(t){let{components:e,...n}=t;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"linters"},"Linters"),(0,a.kt)("p",null,"tfaction runs some linters in ",(0,a.kt)("a",{parentName:"p",href:"/actions/test"},"test")," Action."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"terraform validate"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/github-action-tflint"},"suzuki-shunsuke/github-action-tflint")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/github-action-tfsec"},"suzuki-shunsuke/github-action-tfsec")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/trivy-config-action"},"suzuki-shunsuke/trivy-config-action"))),(0,a.kt)("h2",{id:"enable-or-disable-linters"},"Enable or disable linters"),(0,a.kt)("p",null,"You can enable or disable the following linters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"tflint"),(0,a.kt)("li",{parentName:"ul"},"tfsec"),(0,a.kt)("li",{parentName:"ul"},"Trivy")),(0,a.kt)("p",null,"You can configure them at ",(0,a.kt)("inlineCode",{parentName:"p"},"tfaction-root.yaml"),"."),(0,a.kt)("p",null,"By default, tflint and tfsec are enabled and Trivy is disabled."),(0,a.kt)("p",null,"If you want to migrate tfsec to Trivy, please disable tfsec and enable Trivy."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"tfsec:\n  enabled: false\ntrivy:\n  enabled: true\n")),(0,a.kt)("p",null,"You can also disable tflint."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"tflint:\n  enabled: false\n")),(0,a.kt)("h2",{id:"tflint"},"tflint"),(0,a.kt)("p",null,"tfaction runs ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/terraform-linters/tflint"},"tflint")," and notifies the result."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/153742908-2512f73a-1505-4c0c-9284-b6deb8983c2f.png",alt:"image"})),(0,a.kt)("p",null,"--"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/153742833-403ea6c5-a780-4d2a-a30c-3a481c0971b1.png",alt:"image"})),(0,a.kt)("h2",{id:"tfsec"},"tfsec"),(0,a.kt)("p",null,"tfaction runs ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquasecurity/tfsec"},"tfsec")," and notifies the result."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/153747798-0e6ac3d4-e335-4c20-8e2a-1f5b43205ff3.png",alt:"image"})),(0,a.kt)("p",null,"--"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/153747838-ccbd4fba-6654-4589-84c8-7ae833644426.png",alt:"mage"})),(0,a.kt)("h2",{id:"trivy"},"Trivy"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/suzuki-shunsuke/trivy-config-action/assets/13323303/e4d7f6f7-3df3-44bb-8f98-535173ce096e",alt:"image"})),(0,a.kt)("p",null,"--"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/suzuki-shunsuke/trivy-config-action/assets/13323303/2d0c6224-8ae4-42f0-80d8-06488ff18f56",alt:"image"})))}f.isMDXComponent=!0}}]);