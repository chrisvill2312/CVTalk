import{h as M,p as Z,T as de,F as he}from"./hooks.module.f2da523f.js";import{o as r,S as pe}from"./slider_select.a3762a9b.js";import"./preact.module.f4ed9382.js";/* empty css                       */function me(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Y={exports:{}},G={exports:{}};(function(l,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=_;function n(c){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?n=function(d){return typeof d}:n=function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},n(c)}function _(c){var u=typeof c=="string"||c instanceof String;if(!u){var d=n(c);throw c===null?d="null":d==="object"&&(d=c.constructor.name),new TypeError("Expected a string but received a ".concat(d))}}l.exports=e.default,l.exports.default=e.default})(G,G.exports);var ee=G.exports,W={exports:{}},X={exports:{}};(function(l,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0;for(var u in c)typeof _[u]>"u"&&(_[u]=c[u]);return _}l.exports=e.default,l.exports.default=e.default})(X,X.exports);var ae=X.exports;(function(l,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=d;var n=c(ee),_=c(ae);function c(a){return a&&a.__esModule?a:{default:a}}var u={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1,ignore_max_length:!1};function d(a,b){(0,n.default)(a),b=(0,_.default)(b,u),b.allow_trailing_dot&&a[a.length-1]==="."&&(a=a.substring(0,a.length-1)),b.allow_wildcard===!0&&a.indexOf("*.")===0&&(a=a.substring(2));var h=a.split("."),y=h[h.length-1];return b.require_tld&&(h.length<2||!b.allow_numeric_tld&&!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(y)||/\s/.test(y))||!b.allow_numeric_tld&&/^\d+$/.test(y)?!1:h.every(function(x){return!(x.length>63&&!b.ignore_max_length||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(x)||/[\uff01-\uff5e]/.test(x)||/^-|-$/.test(x)||!b.allow_underscores&&/_/.test(x))})}l.exports=e.default,l.exports.default=e.default})(W,W.exports);var ve=W.exports,J={exports:{}};(function(l,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=h;var n=_(ee);function _(y){return y&&y.__esModule?y:{default:y}}var c="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",u="(".concat(c,"[.]){3}").concat(c),d=new RegExp("^".concat(u,"$")),a="(?:[0-9a-fA-F]{1,4})",b=new RegExp("^("+"(?:".concat(a,":){7}(?:").concat(a,"|:)|")+"(?:".concat(a,":){6}(?:").concat(u,"|:").concat(a,"|:)|")+"(?:".concat(a,":){5}(?::").concat(u,"|(:").concat(a,"){1,2}|:)|")+"(?:".concat(a,":){4}(?:(:").concat(a,"){0,1}:").concat(u,"|(:").concat(a,"){1,3}|:)|")+"(?:".concat(a,":){3}(?:(:").concat(a,"){0,2}:").concat(u,"|(:").concat(a,"){1,4}|:)|")+"(?:".concat(a,":){2}(?:(:").concat(a,"){0,3}:").concat(u,"|(:").concat(a,"){1,5}|:)|")+"(?:".concat(a,":){1}(?:(:").concat(a,"){0,4}:").concat(u,"|(:").concat(a,"){1,6}|:)|")+"(?::((?::".concat(a,"){0,5}:").concat(u,"|(?::").concat(a,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function h(y){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return(0,n.default)(y),x=String(x),x?x==="4"?d.test(y):x==="6"?b.test(y):!1:h(y,4)||h(y,6)}l.exports=e.default,l.exports.default=e.default})(J,J.exports);var ge=J.exports;(function(l,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var n=d(ee),_=d(ve),c=d(ge),u=d(ae);function d(t){return t&&t.__esModule?t:{default:t}}function a(t,s){return o(t)||x(t,s)||h(t,s)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(t,s){if(t){if(typeof t=="string")return y(t,s);var v=Object.prototype.toString.call(t).slice(8,-1);if(v==="Object"&&t.constructor&&(v=t.constructor.name),v==="Map"||v==="Set")return Array.from(t);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return y(t,s)}}function y(t,s){(s==null||s>t.length)&&(s=t.length);for(var v=0,S=new Array(s);v<s;v++)S[v]=t[v];return S}function x(t,s){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(t)))){var v=[],S=!0,N=!1,D=void 0;try{for(var L=t[Symbol.iterator](),A;!(S=(A=L.next()).done)&&(v.push(A.value),!(s&&v.length===s));S=!0);}catch(g){N=!0,D=g}finally{try{!S&&L.return!=null&&L.return()}finally{if(N)throw D}}return v}}function o(t){if(Array.isArray(t))return t}var f={protocols:["http","https","ftp"],require_tld:!0,require_protocol:!1,require_host:!0,require_port:!1,require_valid_protocol:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_protocol_relative_urls:!1,allow_fragments:!0,allow_query_components:!0,validate_length:!0},m=/^\[([^\]]+)\](?::([0-9]+))?$/;function w(t){return Object.prototype.toString.call(t)==="[object RegExp]"}function p(t,s){for(var v=0;v<s.length;v++){var S=s[v];if(t===S||w(S)&&S.test(t))return!0}return!1}function i(t,s){if((0,n.default)(t),!t||/[\s<>]/.test(t)||t.indexOf("mailto:")===0||(s=(0,u.default)(s,f),s.validate_length&&t.length>=2083)||!s.allow_fragments&&t.includes("#")||!s.allow_query_components&&(t.includes("?")||t.includes("&")))return!1;var v,S,N,D,L,A,g,q;if(g=t.split("#"),t=g.shift(),g=t.split("?"),t=g.shift(),g=t.split("://"),g.length>1){if(v=g.shift().toLowerCase(),s.require_valid_protocol&&s.protocols.indexOf(v)===-1)return!1}else{if(s.require_protocol)return!1;if(t.slice(0,2)==="//"){if(!s.allow_protocol_relative_urls)return!1;g[0]=t.slice(2)}}if(t=g.join("://"),t==="")return!1;if(g=t.split("/"),t=g.shift(),t===""&&!s.require_host)return!0;if(g=t.split("@"),g.length>1){if(s.disallow_auth||g[0]===""||(S=g.shift(),S.indexOf(":")>=0&&S.split(":").length>2))return!1;var ce=S.split(":"),ne=a(ce,2),ue=ne[0],fe=ne[1];if(ue===""&&fe==="")return!1}D=g.join("@"),A=null,q=null;var H=D.match(m);if(H?(N="",q=H[1],A=H[2]||null):(g=D.split(":"),N=g.shift(),g.length&&(A=g.join(":"))),A!==null&&A.length>0){if(L=parseInt(A,10),!/^[0-9]+$/.test(A)||L<=0||L>65535)return!1}else if(s.require_port)return!1;return s.host_whitelist?p(N,s.host_whitelist):N===""&&!s.require_host?!0:!(!(0,c.default)(N)&&!(0,_.default)(N,s)&&(!q||!(0,c.default)(q,6))||(N=N||q,s.host_blacklist&&p(N,s.host_blacklist)))}l.exports=e.default,l.exports.default=e.default})(Y,Y.exports);var _e=Y.exports;const ye=me(_e);let be=class{#e;#t;#r;#n;constructor(){this.#e={},this.#t=[],this.#r=!1,this.#n=()=>{speechSynthesis.getVoices().forEach(e=>{const{lang:n}=e;n.length===5&&(this.#e[n]?this.#e[n]+=1:this.#e[n]=1),this.#r=!0,this.#t.forEach(_=>{_(this.#e)}),speechSynthesis.removeEventListener("voiceschanged",this.#n)})},speechSynthesis.addEventListener("voiceschanged",this.#n)}speak(e,n,_){const c=new SpeechSynthesisUtterance(e);c.voice=this.#e[n]?_<=this.#e[n]?speechSynthesis.getVoices().filter(u=>u.lang===n)[_-1]:speechSynthesis.getVoices().filter(u=>u.lang===n)[0]:speechSynthesis.getVoices()[0],console.log(_),console.log(c),speechSynthesis.speak(c)}getVoices(){return structuredClone(this.#e)}whenReady(e){this.#r?e(this.#e):this.#t.push(e)}};const K=new be;function xe(){const[l,e]=M({});return Z(()=>{K.whenReady(n=>{e(n)})},[]),l}const Se=[{title:"Oh My Console",url:"https://raw.githubusercontent.com/chrisvdev/CVTalk/main/public/assets/BackEnd-Skin.css"},{title:"Like Python",url:"https://raw.githubusercontent.com/chrisvdev/CVTalk/main/public/assets/BackEnd-Skin2.css"},{title:"Pythonesa's skin",url:"https://raw.githubusercontent.com/chrisvdev/CVTalk/main/public/assets/cssnesa.css"},{title:"Snakeblack's skin",url:"https://raw.githubusercontent.com/Snakeblack/chatbox-css/main/style.css"},{title:"IvanLolivier's skin",url:"https://raw.githubusercontent.com/ivanlolivier/IvanLolivierCVTalkTheme/main/IvanLolivierCVTalkTheme.css"}],Te=/^[A-Za-z0-9_]*$/,we=/^[A-Za-z0-9_,]*$/,Ne=/^[A-Za-z0-9\s]*$/,P="channel",$="default_avatar",I="style",te="tts",E="tts_accent",F="tts_index",re="tts_always_on",B="render",U="bots",V="pato_bot",z="htmli",j="char_commands",C="_valid",k="flex flex-col",R="text-sm font-medium text-gray-300 mb-1",O="mt-1 block p-2 bg-zinc-800 text-zinc-100 border border-zinc-700 rounded-lg transition-all duration-100 focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-blue-500",Q="w-9 h-5 peer-focus:outline peer-focus:outline-2 peer-focus:outline-blue-500 rounded-full peer bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all border-gray-600 peer-checked:bg-blue-600",T={};T[P]="chrisvdev";T[$]="";T[`${$}${C}`]=!0;T[I]="";T[`${I}${C}`]=!0;T[te]=!0;T[E]="";T[F]="";T[re]=!1;T[B]=!0;T[U]="";T[V]=!0;T[z]=!1;T[j]="";const se=[P,U],Ae=[U],le=[j],oe=[te,re,B,V,z],ie=[$,I],Ie=[E,F],Ee=["Off","By !speak","Always On"],Ce="https://chrisvdev.github.io/obs-chat";function $e(l){const e=new URL(Ce);return se.forEach(n=>{l[n]&&e.searchParams.append(n,l[n])}),ie.forEach(n=>{l[n]&&e.searchParams.append(n,l[n])}),oe.forEach(n=>{e.searchParams.append(n,l[n])}),le.forEach(n=>{e.searchParams.append(n,l[n])}),Ie.forEach(n=>{e.searchParams.append(n,l[n])}),e.toString()}function Fe(){const l=xe(),[e,n]=M(structuredClone(T)),[_,c]=M(!1),[u,d]=M(!0),[a,b]=M(0),h=de(o=>{const f=(p,i)=>{n(t=>{const s={...t};return s[i||o]=p,s})},m=()=>{n(p=>structuredClone(p))};if(se.includes(o))return p=>{const{value:i}=p.currentTarget;(Ae.includes(o)?we.test(i):Te.test(i))?f(i):m()};if(oe.includes(o))return p=>{const{checked:i}=p.currentTarget;typeof i=="boolean"?f(i):m()};if(ie.includes(o))return p=>{const{value:i}=p.currentTarget;f(i),f(i===""||ye(i),`${o}${C}`)};function w(p="",i=0){if(!p)return!0;const t=i+1<p.length;return i%2?p[i]===","?t?w(p,i+1):!0:!1:Ne.test(p[i])?!1:t?w(p,i+1):!0}return le.includes(o)?p=>{let{value:i}=p.currentTarget;i=i.replaceAll(",","").split("").join(","),w(i)?f(i):m()}:p=>{const{value:i}=p.currentTarget;f(i)}},[]);Z(()=>{const o=()=>{n(f=>{const m={...f};return m[E]=speechSynthesis.getVoices()[0].lang,m[F]=1,m})};K.whenReady(o)},[]);const y=o=>{const f=[];for(let m=1;m<=o;m++)f.push(r("option",{children:m}));return f},x=he(()=>e[P]?.length>3&&e[`${$}${C}`]&&e[`${I}${C}`],[e[P],e[`${$}${C}`],e[`${I}${C}`]]);return Z(()=>{const o=w=>({currentTarget:{checked:w}}),f=h(te),m=h(re);[function(){f(o(!1)),m(o(!1))},function(){f(o(!0)),m(o(!1))},function(){f(o(!0)),m(o(!0))}][a]()},[a]),r("section",{className:"mx-auto max-w-md",children:r("form",{onSubmit:o=>{o.preventDefault(),_||navigator.clipboard.writeText($e(e)).then(()=>{c(!0),setTimeout(()=>{c(!1)},1e3)}).catch(()=>{console.error("No se copio")})},className:"flex flex-col space-y-4 p-4 border border-gray-700 rounded-lg",children:[r("div",{className:k,children:[r("label",{className:R,children:"Channel"}),r("input",{className:O,value:e[P],type:"text",name:P,onInput:h(P)})]}),r("div",{className:k,children:[r("label",{className:R,children:"Custom CSS Style"}),r("select",{className:`${O} my-1`,onInput:o=>{const{value:f}=o.currentTarget,m={};m[I]=f,n(w=>structuredClone({...w,...m})),d(f===""?()=>!0:()=>!1)},children:[r("option",{value:"",children:"Select a skin..."}),Se.map(({title:o,url:f},m)=>r("option",{value:f,children:o},`skin_${m}`))]}),r("input",{className:O,value:e[I],type:"text",name:I,onInput:h(I),style:u?{}:{display:"none"},placeholder:"Or paste here your custom skin URL..."})]}),e[`${I}${C}`]||r("p",{className:"text-red-600",children:"Is not a valid URL"}),r("div",{className:k,children:[r("label",{className:R,children:"Default Avatar"}),r("input",{className:O,value:e[$],type:"text",name:$,onInput:h($),placeholder:"Paste here the image URL..."})]}),e[`${$}${C}`]||r("p",{className:"text-red-600",children:"Is not a valid URL"}),r("div",{className:k,children:[r("label",{className:R,children:"TTS Function"}),r(pe,{options:Ee,defaultName:"TTS",initial:1,onInput:o=>{b(Number(o.target.value))}})]}),r("div",{className:k,children:[r("label",{className:R,children:"TTS Accent"}),r("select",{className:O,value:e[E],name:E,onInput:h(E),children:Object.keys(l).sort().map((o,f)=>r("option",{children:o},`voice_${f}`))})]}),r("div",{className:k,children:[r("label",{className:R,children:"Accent variant"}),r("select",{className:O,value:e[F],name:F,onInput:h(F),children:e[E]!==""&&y(l[e[E]])})]}),r("button",{className:"w-fit text-white font-medium rounded-lg text-sm px-5 py-2 bg-blue-600 transition-all duration-100 focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-blue-500",type:"button",onClick:o=>{o.preventDefault(),K.speak("Esto es una prueba",e[E],e[F])},children:"Test TTS"}),r("label",{class:"relative inline-flex items-center mb-5 cursor-pointer",children:[r("input",{type:"checkbox",name:B,onInput:h(B),class:"sr-only peer"}),r("div",{class:Q}),r("span",{class:"ml-3 text-sm font-medium text-gray-300",children:"Render"})]}),r("div",{className:k,children:[r("label",{className:R,children:"Bots"}),r("input",{className:O,value:e[U],type:"text",name:U,onInput:h(U)}),r("p",{className:"font-mono text-xs m-1",children:'Usernames separated by "," like "bot1,bot2,etc"'})]}),r("div",{className:k,children:[r("label",{className:R,children:"Commands prefixes"}),r("input",{className:O,value:e[j],type:"text",name:j,onInput:h(j)}),r("p",{className:"font-mono text-xs m-1",children:'Characters for the prefix of the commands separated by "," like "!,$,%"'})]}),r("label",{class:"relative inline-flex items-center mb-5 cursor-pointer",children:[r("input",{type:"checkbox",checked:e[V],name:V,onInput:h(V),class:"sr-only peer"}),r("div",{class:Q}),r("span",{class:"ml-3 text-sm font-medium text-gray-300",children:"PatoBot compatibility"})]}),r("p",{className:"italic text-xs text-zinc-400 hover:text-zinc-100 transition-all cursor-pointer",children:["(",r("a",{href:"https://elpatobot.com/",children:"You need to have the PatoBot configured."}),")"]}),r("label",{class:"relative inline-flex items-center mb-5 cursor-pointer",children:[r("input",{type:"checkbox",checked:e[z],name:z,onInput:h(z),class:"sr-only peer"}),r("div",{class:Q}),r("span",{class:"ml-3 text-sm font-medium text-gray-300",children:"HTML Injection"})]}),r("p",{className:"italic text-xs text-zinc-400",children:"(Experimental, Use on your own risk)"}),r("div",{className:"flex justify-center w-full",children:x?r("button",{className:"w-full text-white font-medium rounded-lg text-sm px-5 py-2 bg-blue-600 transition-all duration-100 focus:outline focus:outline-offset-2 focus:outline-2 focus:outline-blue-500",type:"submit",children:_?"Copied to the clipboard":"Generate URL"}):r("p",{className:"m-4 px-2 py-1 text-red-400 font-medium",children:"There are some invalid parameters..."})})]})})}export{Fe as default};
