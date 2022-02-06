"use strict";(self.webpackChunktfaction=self.webpackChunktfaction||[]).push([[518],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),f=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=f(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=f(n),m=a,y=p["".concat(l,".").concat(m)]||p[m]||s[m]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var f=2;f<o;f++)i[f]=n[f];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3107:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return f},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:200},l="tfaction.yaml",f={unversionedId:"config/tfaction-yaml",id:"config/tfaction-yaml",title:"tfaction.yaml",description:"* JSON Schema",source:"@site/docs/config/tfaction-yaml.md",sourceDirName:"config",slug:"/config/tfaction-yaml",permalink:"/tfaction/docs/config/tfaction-yaml",editUrl:"https://github.com/suzuki-shunsuke/tfaction-docs/edit/main/docs/config/tfaction-yaml.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{sidebar_position:200},sidebar:"tutorialSidebar",previous:{title:"tfaction-root.yaml",permalink:"/tfaction/docs/config/tfaction-root-yaml"},next:{title:"GitHub Access Token",permalink:"/tfaction/docs/config/github-token"}},u=[],s={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tfactionyaml"},"tfaction.yaml"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/tfaction/blob/main/schema/tfaction.json"},"JSON Schema")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://suzuki-shunsuke.github.io/tfaction/config/tfaction.yaml.html"},"Generated document from JSON Scheme"))),(0,o.kt)("p",null,"Please add ",(0,o.kt)("inlineCode",{parentName:"p"},"tfaction.yaml")," in each working directory for tfaction to detect working directories."),(0,o.kt)("p",null,"You can change the file name by the configuration ",(0,o.kt)("inlineCode",{parentName:"p"},"working_directory_file"),"."),(0,o.kt)("p",null,"All fields are optional."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"{}\n")),(0,o.kt)("p",null,"You can override the configuration of ",(0,o.kt)("inlineCode",{parentName:"p"},"tfaction-root.yaml")," by ",(0,o.kt)("inlineCode",{parentName:"p"},"tfaction.yaml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"aws_region:\ns3_bucket_name_plan_file:\ns3_bucket_name_tfmigrate_history:\ntemplate_dir:\ngcs_bucket_name_plan_file:\naws_assume_role_arn:\ngcp_service_account:\ngcp_workload_identity_provider:\nsecrets:\nterraform_plan_config:\n  aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_AWS_terraform_plan\ntfmigrate_plan_config:\n  aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_AWS_tfmigrate_plan\nterraform_apply_config:\n  aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_AWS_terraform_apply\ntfmigrate_apply_config:\n  aws_assume_role_arn: arn:aws:iam::000000000000:role/GitHubActions_Terraform_AWS_tfmigrate_apply\n")))}p.isMDXComponent=!0}}]);