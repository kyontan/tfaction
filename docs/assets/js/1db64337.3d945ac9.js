"use strict";(self.webpackChunktfaction=self.webpackChunktfaction||[]).push([[1372],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=i,d=f["".concat(u,".").concat(m)]||f[m]||c[m]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6777:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:100,slug:"/"},u="tfaction",s={unversionedId:"overview",id:"overview",title:"tfaction",description:"GitHub Actions collection for Opinionated Terraform Workflow",source:"@site/docs/overview.md",sourceDirName:".",slug:"/",permalink:"/tfaction/docs/",editUrl:"https://github.com/suzuki-shunsuke/tfaction-docs/edit/main/docs/overview.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/tfaction/docs/getting-started"}},p=[{value:"Goal",id:"goal",children:[],level:2},{value:"Assumption",id:"assumption",children:[],level:2},{value:"Blog, Slide",id:"blog-slide",children:[],level:2},{value:"Getting Started",id:"getting-started",children:[],level:2},{value:"Release Notes",id:"release-notes",children:[],level:2},{value:"Versioning Policy",id:"versioning-policy",children:[],level:2},{value:"LICENSE",id:"license",children:[],level:2}],c={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tfaction"},"tfaction"),(0,a.kt)("p",null,"GitHub Actions collection for Opinionated Terraform Workflow"),(0,a.kt)("h2",{id:"goal"},"Goal"),(0,a.kt)("p",null,"Build good Terraform Workflow easily with GitHub Actions."),(0,a.kt)("h2",{id:"assumption"},"Assumption"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GitHub Flow",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"run ",(0,a.kt)("inlineCode",{parentName:"li"},"terraform plan")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"tfmigrate plan")," in pull request CI"),(0,a.kt)("li",{parentName:"ul"},"When a pull request is merged, ",(0,a.kt)("inlineCode",{parentName:"li"},"terraform apply")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"tfmigrate apply")," is run in CI"))),(0,a.kt)("li",{parentName:"ul"},"Monorepo",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"There are multiple Terraform Working Directory in a repository"))),(0,a.kt)("li",{parentName:"ul"},"GitHub Actions"),(0,a.kt)("li",{parentName:"ul"},"Store terraform plan files and tfmigrate history files at AWS S3"),(0,a.kt)("li",{parentName:"ul"},"Manage dependencies with ",(0,a.kt)("a",{parentName:"li",href:"https://aquaproj.github.io/"},"aqua")),(0,a.kt)("li",{parentName:"ul"},"Update dependencies with ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/renovatebot/renovate"},"Renovate"))),(0,a.kt)("h2",{id:"blog-slide"},"Blog, Slide"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"English",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://speakerdeck.com/szksh/tfaction-build-terraform-workflow-with-github-actions"},"2022-02-12 tfaction - Build Terraform Workflow with GitHub Actions")))),(0,a.kt)("li",{parentName:"ul"},"Japanese",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://zenn.dev/shunsuke_suzuki/articles/tfaction-v050"},"2022-03-03 tfaction v0.5.0 \u306e update")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://zenn.dev/shunsuke_suzuki/articles/tfaction-setup"},"2022-02-06 tfaction \u306e\u5c0e\u5165\u30ac\u30a4\u30c9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.studysapuri.jp/entry/2022/02/04/080000"},"2022-02-04 Terraform \u306e CI \u3092 AWS CodeBuild \u304b\u3089 GitHub Actions + tfaction \u306b\u79fb\u884c\u3057\u307e\u3057\u305f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://zenn.dev/shunsuke_suzuki/articles/tfaction-introduction"},"2022-01-24 tfaction - GitHub Actions \u3067\u826f\u3044\u611f\u3058\u306e Terraform Workflow \u3092\u69cb\u7bc9"))))),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfaction-getting-started"},"https://github.com/suzuki-shunsuke/tfaction-getting-started")),(0,a.kt)("h2",{id:"release-notes"},"Release Notes"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfaction/releases"},"https://github.com/suzuki-shunsuke/tfaction/releases")),(0,a.kt)("h2",{id:"versioning-policy"},"Versioning Policy"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/versioning-policy/blob/v0.1.0/POLICY.md"},"suzuki-shunsuke/versioning-policy v0.1.0"),", which is compatible with ",(0,a.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning 2.0.0"),"."),(0,a.kt)("h2",{id:"license"},"LICENSE"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfaction/blob/main/LICENSE"},"MIT")))}f.isMDXComponent=!0}}]);