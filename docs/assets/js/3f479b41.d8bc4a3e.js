"use strict";(self.webpackChunktfaction=self.webpackChunktfaction||[]).push([[649],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1358:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:100},u="Update related pull requests automatically when the base branch is updated",p={unversionedId:"feature/auto-update-related-prs",id:"feature/auto-update-related-prs",title:"Update related pull requests automatically when the base branch is updated",description:"When terraform plan or tfmigrate plan are run in the target A,",source:"@site/docs/feature/auto-update-related-prs.md",sourceDirName:"feature",slug:"/feature/auto-update-related-prs",permalink:"/tfaction/docs/feature/auto-update-related-prs",editUrl:"https://github.com/suzuki-shunsuke/tfaction-docs/edit/main/docs/feature/auto-update-related-prs.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Apply safely with Terraform Plan File",permalink:"/tfaction/docs/feature/plan-file"},next:{title:"Create a pull request automatically to handle the problem when apply failed",permalink:"/tfaction/docs/feature/follow-up-pr"}},c=[],s={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"update-related-pull-requests-automatically-when-the-base-branch-is-updated"},"Update related pull requests automatically when the base branch is updated"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform plan")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"tfmigrate plan")," are run in the target ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),",\ntfaction sets a pull request label ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,o.kt)("p",null,"When a pull request of the target ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," is merged and ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform apply")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"tfmigrate apply")," are run in the target ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),",\ntfaction updates pull request breanches which have a pull request label ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," by ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/reference/pulls#update-a-pull-request-branch"},"GitHub API"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/151699327-ba31892c-c4a6-47e7-a944-15fca81dfbfb.png",alt:"image"})),(0,o.kt)("p",null,"By updating pull request branch, the result of CI including uploaded Terraform Plan file is updated.\nOtherwise, an uploaded Terraform Plan file becomes stale and it would fail to run ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform apply"),"."))}d.isMDXComponent=!0}}]);