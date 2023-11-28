import{h as U,T as E}from"./hooks.module.f2da523f.js";import{b as f,l as i,y as m,k as y,C as h}from"./preact.module.f4ed9382.js";/* empty css                       */function A(e,r){for(var t in r)e[t]=r[t];return e}function b(e,r){for(var t in e)if(t!=="__source"&&!(t in r))return!0;for(var n in r)if(n!=="__source"&&e[n]!==r[n])return!0;return!1}function g(e){this.props=e}(g.prototype=new f).isPureReactComponent=!0,g.prototype.shouldComponentUpdate=function(e,r){return b(this.props,e)||b(this.state,r)};var k=i.__b;i.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),k&&k(e)};var T=i.__e;i.__e=function(e,r,t,n){if(e.then){for(var o,_=r;_=_.__;)if((o=_.__c)&&o.__c)return r.__e==null&&(r.__e=t.__e,r.__k=t.__k),o.__c(e,r)}T(e,r,t,n)};var S=i.unmount;function N(e,r,t){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),e.__c.__H=null),(e=A({},e)).__c!=null&&(e.__c.__P===t&&(e.__c.__P=r),e.__c=null),e.__k=e.__k&&e.__k.map(function(n){return N(n,r,t)})),e}function $(e,r,t){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(n){return $(n,r,t)}),e.__c&&e.__c.__P===r&&(e.__e&&t.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=t)),e}function d(){this.__u=0,this.t=null,this.__b=null}function R(e){var r=e.__.__c;return r&&r.__a&&r.__a(e)}function v(){this.u=null,this.o=null}i.unmount=function(e){var r=e.__c;r&&r.__R&&r.__R(),r&&e.__h===!0&&(e.type=null),S&&S(e)},(d.prototype=new f).__c=function(e,r){var t=r.__c,n=this;n.t==null&&(n.t=[]),n.t.push(t);var o=R(n.__v),_=!1,u=function(){_||(_=!0,t.__R=null,o?o(l):l())};t.__R=u;var l=function(){if(!--n.__u){if(n.state.__a){var c=n.state.__a;n.__v.__k[0]=$(c,c.__c.__P,c.__c.__O)}var p;for(n.setState({__a:n.__b=null});p=n.t.pop();)p.forceUpdate()}},a=r.__h===!0;n.__u++||a||n.setState({__a:n.__b=n.__v.__k[0]}),e.then(u,u)},d.prototype.componentWillUnmount=function(){this.t=[]},d.prototype.render=function(e,r){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=N(this.__b,t,n.__O=n.__P)}this.__b=null}var o=r.__a&&m(y,null,e.fallback);return o&&(o.__h=null),[m(y,null,r.__a?null:e.children),o]};var P=function(e,r,t){if(++t[1]===t[0]&&e.o.delete(r),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(t=e.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;e.u=t=t[2]}};(v.prototype=new f).__a=function(e){var r=this,t=R(r.__v),n=r.o.get(e);return n[0]++,function(o){var _=function(){r.props.revealOrder?(n.push(o),P(r,e,n)):o()};t?t(_):_()}},v.prototype.render=function(e){this.u=null,this.o=new Map;var r=h(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&r.reverse();for(var t=r.length;t--;)this.o.set(r[t],this.u=[1,0,this.u]);return e.children},v.prototype.componentDidUpdate=v.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(r,t){P(e,t,r)})};var V=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,W=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,H=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,L=/[A-Z0-9]/g,B=typeof document<"u",D=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};f.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(f.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(r){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:r})}})});var O=i.event;function j(){}function I(){return this.cancelBubble}function M(){return this.defaultPrevented}i.event=function(e){return O&&(e=O(e)),e.persist=j,e.isPropagationStopped=I,e.isDefaultPrevented=M,e.nativeEvent=e};var Z={enumerable:!1,configurable:!0,get:function(){return this.class}},w=i.vnode;i.vnode=function(e){typeof e.type=="string"&&function(r){var t=r.props,n=r.type,o={};for(var _ in t){var u=t[_];if(!(_==="value"&&"defaultValue"in t&&u==null||B&&_==="children"&&n==="noscript"||_==="class"||_==="className")){var l=_.toLowerCase();_==="defaultValue"&&"value"in t&&t.value==null?_="value":_==="download"&&u===!0?u="":l==="ondoubleclick"?_="ondblclick":l!=="onchange"||n!=="input"&&n!=="textarea"||D(t.type)?l==="onfocus"?_="onfocusin":l==="onblur"?_="onfocusout":H.test(_)?_=l:n.indexOf("-")===-1&&W.test(_)?_=_.replace(L,"-$&").toLowerCase():u===null&&(u=void 0):l=_="oninput",l==="oninput"&&o[_=l]&&(_="oninputCapture"),o[_]=u}}n=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=h(t.children).forEach(function(a){a.props.selected=o.value.indexOf(a.props.value)!=-1})),n=="select"&&o.defaultValue!=null&&(o.value=h(t.children).forEach(function(a){a.props.selected=o.multiple?o.defaultValue.indexOf(a.props.value)!=-1:o.defaultValue==a.props.value})),t.class&&!t.className?(o.class=t.class,Object.defineProperty(o,"className",Z)):(t.className&&!t.class||t.class&&t.className)&&(o.class=o.className=t.className),r.props=o}(e),e.$$typeof=V,w&&w(e)};var x=i.__r;i.__r=function(e){x&&x(e),e.__c};var C=i.diffed;i.diffed=function(e){C&&C(e);var r=e.props,t=e.__e;t!=null&&e.type==="textarea"&&"value"in r&&r.value!==t.value&&(t.value=r.value==null?"":r.value)};var z=0;function s(e,r,t,n,o,_){var u,l,a={};for(l in r)l=="ref"?u=r[l]:a[l]=r[l];var c={type:e,props:a,key:t,ref:u,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--z,__source:o,__self:_};if(typeof e=="function"&&(u=e.defaultProps))for(l in u)a[l]===void 0&&(a[l]=u[l]);return i.vnode&&i.vnode(c),c}function Q({options:e=[],inLine:r=!1,defaultName:t="",initial:n=0,onInput:o,..._}){const[u,l]=U(n),a=E(c=>{l(Number(c.currentTarget.value)),o(c)},[]);return s("div",{..._,className:"flex items-center gap-1",children:[s("datalist",{id:"options",children:e.map((c,p)=>s("option",{value:p,label:c}))}),s("div",{className:"flex gap-1",children:[s("input",{className:"bg-blue-500 px-1 rounded-full",type:"range",list:"options",min:"0",max:String(e.length-1),value:u,style:{width:`${e.length*1.5}rem`},onInput:a}),s("output",{children:`${t?`${t} `:""}${e[u]}`})]})]})}export{Q as S,s as o};
