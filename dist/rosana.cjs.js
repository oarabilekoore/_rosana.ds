"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const p=class{constructor(){this.element=null,this.elementClasses=[],this.eventListeners=[]}addChild(t){return t instanceof p&&this.element?this.element.appendChild(t.element):console.error("Mounted Child Is Not A Rosana Component"),this}set alignment(t){t?$(this.element,t):console.log("Alignment Options Undefined")}batch(t){return Object.entries(t).forEach(([n,s])=>{requestAnimationFrame(()=>{this.element&&(this.element[n]=s)})}),this}on(t,n){var s;return(s=this.element)==null||s.addEventListener(t,n),this.eventListeners.push([t,n]),this}css(t){var s;const n=r(t);return(s=this.element)==null||s.classList.add(n),this.elementClasses.push(n),this}destroyChild(t){var n;return t instanceof p?(t.eventListeners.forEach(([s,e])=>{var o;(o=t.element)==null||o.removeEventListener(s,e)}),(n=t.element)==null||n.remove()):console.error("Child Is Not A Rosana Component"),this}show(){this.css({visibility:"visible"})}hide(){this.css({visibility:"hidden"})}set gone(t){this.css({display:t?"none !important":"block",visibility:t?"hidden":"visible"})}};let b=0,v=0;function w(){return`rosana-id-${b++}`}function N(){return`rosana-class-${v++}`}const r=(t,...n)=>{const s=N(),e=document.styleSheets[0];let o="",i=[],a=[];const m=(c,l)=>{let u="";return Object.entries(c).forEach(([d,f])=>{if(typeof f=="object")if(d.startsWith("@"))a.push({media:d,selector:l,styles:f});else if(d.startsWith("&:")){const C=d.replace("&",l);i.push({selector:C,styles:f})}else i.push({selector:`${l} ${d}`,styles:f});else u+=`${d.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${f}; `}),u};return typeof t=="object"&&!Array.isArray(t)?o=m(t,`.${s}`):Array.isArray(t)&&(o=t.reduce((c,l,u)=>c+l+(n[u]||""),"")),o&&e.insertRule(`.${s} { ${o} }`,e.cssRules.length),i.forEach(({selector:c,styles:l})=>{const u=m(l,c);if(u){const d=`${c} { ${u} }`;e.insertRule(d,e.cssRules.length)}}),a.forEach(({media:c,selector:l,styles:u})=>{const d=m(u,l);if(d){const f=`${c} { ${l} { ${d} } }`;e.insertRule(f,e.cssRules.length)}}),s};let R=["noscrollbar","scrollxy","scrollx","scrolly","top","bottom","left","right","horizontal","vertical","vcenter","center","fillxy","fillx","filly"];const $=(t,n)=>{const s={noscrollbar:()=>{t.classList.add("noscrollbar")},fillxy:()=>{let e=r({width:"100%",height:window.innerHeight+"px"});t.classList.add(e)},fillx:()=>{let e=r({width:"100%"});t.classList.add(e)},filly:()=>{let e=r({height:window.innerHeight+"px"});t.classList.add(e)},scrollxy:()=>{let e=r({overflow:"auto"});t.classList.add(e)},scrollx:()=>{let e=r({overflowX:"auto"});t.classList.add(e)},scrolly:()=>{let e=r({overflowY:"auto"});t.classList.add(e)},left:()=>{let e=r({display:"flex",justifyContent:"flex-start"});t.classList.add(e)},right:()=>{let e=r({display:"flex",justifyContent:"flex-end"});t.classList.add(e)},center:()=>{let e=r({display:"flex",alignItems:"center",justifyContent:"center"});t.classList.add(e)},vcenter:()=>{let e=r({display:"flex",justifyContent:"center",alignItems:"center"});t.classList.add(e)},bottom:()=>{let e=r({display:"flex",alignItems:"flex-end"});t.classList.add(e)},top:()=>{let e=r({display:"flex",alignItems:"flex-start"});t.classList.add(e)},horizontal:()=>{let e=r({display:"flex",flexDirection:"row !important"});t.classList.add(e)},vertical:()=>{let e=r({display:"flex",flexDirection:"column"});t.classList.add(e)}};n.toLowerCase().replace(/\s/g,"").split(",").forEach(e=>{R.includes(e)?s[e]():console.error(`Unknown option: ${e}`)})};function _(t,n,s){s&&$(t,s);let e=n.toLowerCase();if(e=="linear"){let o=r({display:"inline-flex",position:"relative !important",flexDirection:"column !important"});t.classList.add(o)}else if(e=="absolute"){let o=r({display:"flex"});t.classList.add(o)}else console.error("Unknown Layout ",t)}let A=class extends p{constructor(t,n){super(),this.element=document.createElement("div"),this.element.id=w(),this.element.type="Layout",t&&_(this.element,t,n)}},E=class extends p{constructor(t,n,s){if(super(),this.element=document.createElement(t),this.element.id=w(),Object.entries(s).forEach(([e,o])=>{requestAnimationFrame(()=>{this.element[e]=o})}),n instanceof p)n.addChild(this);else{console.error("No Parent For Component To Attach To.");return}}};const j=function(t="linear",n="fillxy, vcenter"){return new A(t,n)},T=function(t,n,s={}){return new E(t,n,s)},z=function(t){return{_rootComponent:t,_plugins:[],mount:function(s){const e=document.querySelector(s);if(!e){console.error(`No element found for selector "${s}"`);return}document.body.style.margin="0",document.body.style.width="100%",e.innerHTML="";const o=this._rootComponent;return e.appendChild(o.element),this},use(s){return typeof s._install=="function"&&(s._install(this),this._plugins.push(s)),this}}},x=function(t=null){let n=t,s=[];const e=function(o){for(let i of s)i(n)};return{set value(o){n=o,e()},get value(){return n},subscribe:o=>{s.push(o)}}},S=function(t={}){let n={...t};const s=new Set;return{set(e,o){n[e]=o,s.forEach(i=>i(n))},get(e){return n[e]},subscribe(e){return s.add(e),()=>s.delete(e)}}},F=navigator.language||navigator.userLanguage,L=F.split("-")[0];let g={},h;const I=async function(t=L,n){h=x(t);const s=await fetch(n);if(!s.ok){console.log("Translation File Not Loaded");return}const e=await s.json();g={...g,...e}},P=function(t){h.value=t};let y=function(t,n){if(!h||!h.value)return t;let e=(g[h.value]||g[L]||{})[t]||t;return n&&Object.keys(n).forEach(o=>{e=e.replace(`{${o}}`,n[o])}),e};p.prototype.localizedText=async function(t,n){if(!h||!h.value)return t;const s=await y(t,n);this.element.textContent=s,h.subscribe(async()=>{const e=await y(t,n);this.element.textContent=e})};const H=function(t){return{routes:t,currentRoute:null,params:{},_init:function(){return console.table(this.routes),window.addEventListener("hashchange",this._handleHashChange.bind(this)),window.location.hash?this._handleHashChange():window.location.hash="#/",this},_install:function(s){this._init(),s.router=this},_render:function(){const s=document.querySelector("#app");if(!s){console.error("App container not found.");return}if(s.innerHTML="",this.currentRoute&&this.currentRoute.component){const e=this.currentRoute.component;s.appendChild(e.element),typeof e.updateParams=="function"&&e.updateParams(this.params)}else console.error("No valid component found for route.")},_handleHashChange:function(){const s=window.location.hash.slice(1)||"/",e=this._matchRoute(s);e?(this.currentRoute=e.route,this.params=e.params,this._render()):console.error(`Route not found: ${s}`)},_matchRoute(s){for(const e of this.routes){const{regex:o,keys:i}=this._pathToRegex(e.path),a=s.match(o);if(a){const m=i.reduce((c,l,u)=>(c[l]=a[u+1],c),{});return{route:e,params:m}}}return null},_pathToRegex(s){const e=[],o=s.replace(/:([\w]+)/g,(i,a)=>(e.push(a),"([^\\/]+)")).replace(/\//g,"\\/");return{regex:new RegExp(`^${o}$`),keys:e}},navigate(s,e={}){const o=s.replace(/:([\w]+)/g,(i,a)=>e[a]===void 0?(console.error(`Parameter "${a}" not provided for path: ${s}`),`:${a}`):e[a]);window.location.hash=o},back:function(){history.back()},forward:function(){history.forward()}}},O=function(t,n,s){if(n===void 0||s===void 0){console.error("showIF not called, one of the elements is undefined");return}t?n.show():n.hide(),t?s.hide():s.show()},D=(t,n,s)=>{const e=[],o=()=>e.forEach(i=>i());if(n.type==="Layout"&&s.type==="Layout"){if(!s.hasChild(n)){console.error(`FallBack is not a child of ${s}`);return}ap.mount(n);const i=()=>{n.show(),s.hide()},a=()=>{s.show(),n.hide()};i(),Promise.resolve(t()).then(()=>{a(),o()}).catch(()=>i())}else console.error("suspense must be used with both containers as a layout");return{effects:i=>e.push(i)}};exports.$component=T;exports.$createApp=z;exports.$hashRouter=H;exports.$layout=j;exports.$localize=I;exports.$setLanguage=P;exports.$showIF=O;exports.$signal=x;exports.$store=S;exports.$suspense=D;
//# sourceMappingURL=rosana.cjs.js.map
