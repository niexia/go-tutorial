import{p as t,e,f as a,u as s,g as i,h as o,o as l,c,a as n,w as r,i as v,t as u,j as f,_ as d,F as m,r as k,k as p,l as h,m as g}from"./app.74d4a0b3.js";t("data-v-370f18c0");const y={key:0,class:"home-hero"},x={key:0,class:"figure"},_=["src","alt"],I={key:1,id:"main-title",class:"title"},T={key:2,class:"tagline"};e();const A=a({setup(t){const{site:e,frontmatter:a}=s(),m=i((()=>{const{heroImage:t,heroText:e,tagline:s,actionLink:i,actionText:o}=a.value;return t||e||s||i&&o})),k=i((()=>a.value.heroText||e.value.title)),p=i((()=>a.value.tagline||e.value.description));return(t,e)=>o(m)?(l(),c("header",y,[o(a).heroImage?(l(),c("figure",x,[n("img",{class:"image",src:o(r)(o(a).heroImage),alt:o(a).heroAlt},null,8,_)])):v("v-if",!0),o(k)?(l(),c("h1",I,u(o(k)),1)):v("v-if",!0),o(p)?(l(),c("p",T,u(o(p)),1)):v("v-if",!0),o(a).actionLink&&o(a).actionText?(l(),f(d,{key:3,item:{link:o(a).actionLink,text:o(a).actionText},class:"action"},null,8,["item"])):v("v-if",!0),o(a).altActionLink&&o(a).altActionText?(l(),f(d,{key:4,item:{link:o(a).altActionLink,text:o(a).altActionText},class:"action alt"},null,8,["item"])):v("v-if",!0)])):v("v-if",!0)}});A.__scopeId="data-v-370f18c0";t("data-v-e39c13e0");const L={key:0,class:"home-features"},b={class:"wrapper"},$={class:"container"},j={class:"features"},w={key:0,class:"title"},C={key:1,class:"details"};e();const F=a({setup(t){const{frontmatter:e}=s(),a=i((()=>e.value.features&&e.value.features.length>0)),r=i((()=>e.value.features?e.value.features:[]));return(t,e)=>o(a)?(l(),c("div",L,[n("div",b,[n("div",$,[n("div",j,[(l(!0),c(m,null,k(o(r),((t,e)=>(l(),c("section",{key:e,class:"feature"},[t.title?(l(),c("h2",w,u(t.title),1)):v("v-if",!0),t.details?(l(),c("p",C,u(t.details),1)):v("v-if",!0)])))),128))])])])])):v("v-if",!0)}});F.__scopeId="data-v-e39c13e0";t("data-v-30918238");const q={key:0,class:"footer"},z={class:"container"},B={class:"text"};e();const D=a({setup(t){const{frontmatter:e}=s();return(t,a)=>o(e).footer?(l(),c("footer",q,[n("div",z,[n("p",B,u(o(e).footer),1)])])):v("v-if",!0)}});D.__scopeId="data-v-30918238";t("data-v-10122c92");const E={class:"home","aria-labelledby":"main-title"},G={class:"home-content"};e();const H=a({setup:t=>(t,e)=>{const a=p("Content");return l(),c("main",E,[h(A),g(t.$slots,"hero",{},void 0,!0),h(F),n("div",G,[h(a)]),g(t.$slots,"features",{},void 0,!0),h(D),g(t.$slots,"footer",{},void 0,!0)])}});H.__scopeId="data-v-10122c92";export{H as default};
