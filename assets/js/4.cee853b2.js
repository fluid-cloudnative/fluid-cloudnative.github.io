(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{319:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return p})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return b})),n.d(e,"j",(function(){return k}));n(123);const r=/#.*$/,i=/\.(md|html)$/,s=/\/$/,a=/^[a-z]+:/i;function l(t){return decodeURI(t).replace(r,"").replace(i,"")}function o(t){return a.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function h(t){if(o(t))return t;const e=t.match(r),n=e?e[0]:"",i=l(t);return s.test(i)?t:i+".html"+n}function p(t,e){const n=decodeURIComponent(t.hash),i=function(t){const e=t.match(r);if(e)return e[0]}(e);if(i&&n!==i)return!1;return l(t.path)===l(e)}function f(t,e,n){if(o(e))return{type:"external",path:e};n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const r=l(e);for(let e=0;e<t.length;e++)if(l(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:h(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,r){const{pages:i,themeConfig:s}=n,a=r&&s.locales&&s.locales[r]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return g(t);const l=a.sidebar||s.sidebar;if(l){const{base:n,config:r}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}(e,l);return"auto"===r?g(t):r?r.map(t=>function t(e,n,r,i=1){if("string"==typeof e)return f(n,e,r);if(Array.isArray(e))return Object.assign(f(n,e[0],r),{title:e[1]});{const s=e.children||[];return 0===s.length&&e.path?Object.assign(f(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:s.map(e=>t(e,n,r,i+1)),collapsable:!1!==e.collapsable}}}(t,i,n)):[]}return[]}function g(t){const e=b(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function b(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function k(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},320:function(t,e,n){"use strict";var r=n(319),i={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(r.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isNonHttpURI(){return Object(r.g)(this.link)||Object(r.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(r.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(r.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},s=n(20),a=Object(s.a)(i,(function(){var t=this,e=t._self._c;return t.isInternal?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.a=a.exports},338:function(t,e,n){},364:function(t,e,n){"use strict";n(338)},377:function(t,e,n){"use strict";n.r(e);var r={components:{NavLink:n(320).a},computed:{K8sLink:()=>({link:"https://kubernetes.io/",text:"Kubernetes"}),DokerLink:()=>({link:"https://www.docker.com/",text:"Doker"}),HelmLink:()=>({link:"https://helm.sh/",text:"Helm"})}},i=(n(364),n(20)),s=Object(i.a)(r,(function(){var t=this,e=t._self._c;return e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:8}},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("center",[e("a",{attrs:{href:"https://kubernetes.io/"}},[e("el-image",{staticStyle:{height:"100px"},attrs:{src:"https://ldawns.github.io/test_fluid-web/imgs/k8sLogo.png",fit:"scale-down"}})],1)]),t._v(" "),e("br"),t._v(" "),e("center",[e("NavLink",{staticClass:"bigLink",attrs:{item:t.K8sLink}})],1)],1)],1),t._v(" "),e("el-col",{attrs:{span:8}},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("center",[e("a",{attrs:{href:"https://www.docker.com/"}},[e("el-image",{staticStyle:{height:"100px"},attrs:{src:"https://ldawns.github.io/test_fluid-web/imgs/dokerLogo.png",fit:"scale-down"}})],1)]),t._v(" "),e("br"),t._v(" "),e("center",[e("NavLink",{staticClass:"bigLink",attrs:{item:t.DokerLink}})],1)],1)],1),t._v(" "),e("el-col",{attrs:{span:8}},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("center",[e("a",{attrs:{href:"https://helm.sh/"}},[e("el-image",{staticStyle:{height:"100px"},attrs:{src:"https://ldawns.github.io/test_fluid-web/imgs/helm.png",fit:"scale-down"}})],1)]),t._v(" "),e("br"),t._v(" "),e("center",[e("NavLink",{staticClass:"bigLink",attrs:{item:t.HelmLink}})],1)],1)],1)],1)}),[],!1,null,"f3c58670",null);e.default=s.exports}}]);