(self.webpackChunkplain=self.webpackChunkplain||[]).push([[179],{798:(e,t,n)=>{"use strict";n.d(t,{B:()=>y});var r=n(6701),s=n(8916),a=n.n(s),l=n(4343),c=n(6393),o=n(1227),i=n(693),u=n(4770),d=n(6777),m=n.n(d);setTimeout(m().highlightAll);var p=n(76);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const f=[l.Z,c.Z];o.Z.use(f);const y=e=>{const{state:{slides:t}}=(0,p.re)(),[s]=function(){const[e,t]=(0,r.useState)(null);return[e]}();return(0,r.useEffect)((()=>{m().highlightAll(),t.some((({fusumaProps:e})=>!!e.hasExecutableCode))&&async function(){n.e(588).then(n.bind(n,588));const{createContext:e,runInNewContext:t}=await n.e(326).then(n.t.bind(n,5326,23));Array.from(document.querySelectorAll(".executable-code-button")).forEach((n=>{n.addEventListener("click",(n=>{const r=n.target.nextSibling;"none"===r.style.display&&(r.style.display="block");const s=e({console:{log:(...e)=>{const t=document.createElement("p");t.innerText=`- ${e.join(" ")}`,r.appendChild(t)}}});t(n.target.dataset.value,s)}))}))}()}),[]),r.createElement(i.t,h({effect:null,direction:"horizontal",loop:!1,speed:350,allowTouchMove:!1,slidesPerView:1,hashNavigation:{watchState:!0},pagination:{},onSlideChange:e=>{const t=e.slides[e.previousIndex].querySelectorAll("video");t.length&&t.forEach((e=>e.pause()))}},e),t.map((({slide:e,fusumaProps:{classes:t,sectionTitle:n,background:s}},l)=>r.createElement(u.o,{key:l,className:a()(t,n?"section-title":void 0),"data-hash":`slide-${l+1}`},s&&r.createElement("div",{className:"slide-background",style:s}),r.createElement("div",{className:"slide-internal-box"},r.createElement(e,null))))))}},76:(e,t,n)=>{"use strict";n.d(t,{BP:()=>p,Gw:()=>i,oA:()=>d,PM:()=>o,$L:()=>u,re:()=>m});var r=n(6701);function s({next:e,slides:t,currentIndex:n,timeline:r,currentFragmentSteps:s}){let a=e,l=0;return"+"===e?(a=Math.min(n+1,t.length-1),l=t.length-1===n&&Array.isArray(r[a])?Math.min(s+1,r[a].length):Array.isArray(r[a])?0:Array.isArray(r[n])?s+1:0):"-"===e&&(a=Math.max(n-1,0),l=Array.isArray(r[a])?r[a].length:Array.isArray(r[n])?s-1:0),Array.isArray(r[n])?l<0?{currentIndex:a,currentFragmentSteps:0}:r[n].length>=l?{currentIndex:n,currentFragmentSteps:l}:{currentIndex:a,currentFragmentSteps:0}:{currentIndex:a,currentFragmentSteps:l}}const a={mode:location.search.includes("presenter=host")?"host":location.search.includes("presenter=view")?"view":"common",currentIndex:function(){const e=new URL(window.location.href).hash.match(/^#slide-(.+?)$/);return null!==e?e[1]-1:0}(),slides:[],contentsList:[],timeline:[],currentFragmentSteps:0},l=(0,r.createContext)(a),c=(e,t)=>{switch(t.type){case"SET_MODE":return{...e,mode:t.payload};case"ADD_SLIDES":return{...e,...t.payload};case"UPDATE_CURRENT_INDEX":return{...e,...s({next:t.payload,...e})};case"RESET_STATE":return{...e,currentIndex:0,currentFragmentSteps:0};case"UPDATE_CURRENT_FRAGMENT_STEPS":return{...e,currentFragmentSteps:"+"===t.payload?e.currentFragmentSteps+1:e.currentFragmentSteps-1};default:return e}},o=e=>({type:"SET_MODE",payload:e}),i=e=>({type:"ADD_SLIDES",payload:e}),u=e=>({type:"UPDATE_CURRENT_INDEX",payload:e}),d=()=>({type:"RESET_STATE"}),m=()=>(0,r.useContext)(l),p=({children:e})=>{const[t,n]=(0,r.useReducer)(c,a);return r.createElement(l.Provider,{value:{state:t,dispatch:n}},e)}},4329:(e,t,n)=>{"use strict";var r=n(6701),s=n(6500),a=n(76);function l(e){return{id:(t=e).id,slides:t.keys().sort().map((e=>t(e)))};var t}var c=n(3824),o=n(798);n(8916);const i=(0,r.memo)((()=>{const{state:{currentIndex:e},dispatch:t}=(0,a.re)();return(0,r.useEffect)((()=>{const{swiper:t}=document.querySelector("#main-slides");null==t||t.slideTo(e)}),[e]),(0,r.useEffect)((()=>{const e=({key:e})=>{"ArrowRight"===e?t((0,a.$L)("+")):"ArrowLeft"===e&&t((0,a.$L)("-"))};return window.innerWidth<=768&&(async()=>{const{swipeEvent:e}=await n.e(601).then(n.bind(n,4601));e((e=>{t((0,a.$L)(e))}))})(),document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[]),r.createElement(r.Fragment,null,!1,r.createElement(o.B,{id:"main-slides"}))}));function u(e){const[t,s]=(0,r.useState)(null);return(0,r.useEffect)((()=>{(async()=>{const t=new URL(window.location.href).searchParams;if("common"===e&&"false"!==t.get("sidebar")){const{Sidebar:e}=await Promise.all([n.e(4),n.e(729)]).then(n.bind(n,4729));s(e)}else s(null)})()}),[e]),t}const d=({slidesProps:e})=>{const[t,s]=(0,r.useState)(!1),{state:{mode:l},dispatch:o}=(0,a.re)(),d=function(e){const[t,s]=(0,r.useState)(null);return(0,r.useEffect)((()=>{(async()=>{if("common"===e)s(i);else if("view"===e){const{default:e}=await n.e(844).then(n.bind(n,844));s(e)}else if("host"===e){const{default:e}=await Promise.all([n.e(362),n.e(747)]).then(n.bind(n,7747));s(e)}else s(null)})()}),[e]),t}(l),m=u(l);return(0,r.useEffect)((()=>{o((0,a.Gw)(e))}),[e]),(0,r.useEffect)((()=>{"common"!==l&&t&&s(!1)}),[l,t]),r.createElement(r.Fragment,null,m&&r.createElement(r.Fragment,null,r.createElement(m,{isOpen:t,onStateChange:({isOpen:e})=>s(e)}),r.createElement(c.xXU,{className:"btn-sidebar",onClick:()=>s(!0)})),d&&r.createElement(d,null))},m=({list:e})=>()=>r.createElement("div",{className:"toc"},r.createElement("ol",null,e.map((({index:e,title:t})=>r.createElement("li",{key:t},r.createElement("a",{href:`#slide-${e}`,title:t},r.createElement("span",{className:"chapter"},t)))))));function p(e){const t=[],n=[],r=[],s=[],a=[],l={};return e.forEach((({slides:e,fusumaProps:l,backgrounds:c,fragmentSteps:o})=>{t.push(...e),n.push(...l),r.push(...c),s.push(o),o&&a.push(...o)})),n.reduce(((e,{sectionTitle:t},n)=>(t&&e.push({title:t,index:n+1}),e)),l.contentsList=[]),l.slides=t.map(((e,t)=>{const s=n[t],a=0===r[t]?null:r[t].includes("/")?{backgroundImage:`url('${r[t]}')`}:{backgroundColor:r[t]};return s.classes&&(s.classes=Array.isArray(s.classes)?s.classes[0].split(","):s.classes.split(",")),{slide:s.contents?m({list:l.contentsList}):e,fusumaProps:{...s,background:a}}})),l.timeline=a,l}var h;function f(e=[]){(0,s.hydrate)(r.createElement(a.BP,null,r.createElement(d,{slidesProps:p(e)})),document.getElementById("root"))}let y=l(n(3447));null===(h=void 0)||void 0===h||h.accept(y.id,(()=>{y=l(n(3447)),f(y.slides)})),f(y.slides),document.addEventListener("click",(e=>{if("A"===e.target.tagName){if(e.target.host===location.host||""===e.target.href)return;e.preventDefault(),window.open(e.target.href,"_blank")}}))},7567:(e,t,n)=>{if("/Users/hiroppy/Programming/fusuma/packages/playground/plain/style.css".match(/\+*.css$/i))try{n(2293)}catch(e){console.error(e)}},2911:(e,t,n)=>{"use strict";n.r(t),n.d(t,{backgrounds:()=>o,default:()=>m,fragmentSteps:()=>i,fusumaProps:()=>u,slides:()=>c});var r=n(6701),s=n(7013);n(798),n(76);var a=n(3311);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const c=[e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("h1",null,"Hello😃"),(0,s.kt)("br",null),(0,s.kt)("div",{className:"grid"},(0,s.kt)("a",{href:"https://twitter.com/your-account-name",className:"account account-twitter","aria-label":"account-twitter"},(0,s.kt)(a.fWC,null)),(0,s.kt)("a",{href:"https://github.com/your-account-name",className:"account account-github","aria-label":"account-github"},(0,s.kt)(a.hJX,null)))),e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("h2",null,"Bye👋"))],o=[0,0],i=[0,0],u=[{classes:"title"},{sectionTitle:"Bye👋"}],d={};function m({components:e,...t}){return(0,s.kt)("wrapper",l({},d,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",null,"Hello😃"),(0,s.kt)("br",null),(0,s.kt)("hr",null),(0,s.kt)("h2",null,"Bye👋"))}m.isMDXComponent=!0},2293:(e,t,n)=>{"use strict";n.r(t)},3447:(e,t,n)=>{var r={"./0-title.md":2911};function s(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=a,e.exports=s,s.id=3447}},e=>{"use strict";e.O(0,[179],(()=>(e.E(4),e.E(729))),5);var t=t=>e(e.s=t);e.O(0,[736],(()=>(t(4026),t(4329),t(7567))));e.O()}]);