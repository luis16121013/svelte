var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function l(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let g;function h(t){g=t}const m=[],$=[],b=[],v=[],x=Promise.resolve();let y=!1;function _(t){b.push(t)}let j=!1;const C=new Set;function I(){if(!j){j=!0;do{for(let t=0;t<m.length;t+=1){const e=m[t];h(e),k(e.$$)}for(h(null),m.length=0;$.length;)$.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];C.has(e)||(C.add(e),e())}b.length=0}while(m.length);for(;v.length;)v.pop()();y=!1,j=!1,C.clear()}}function k(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const w=new Set;let E;function A(t,e){t&&t.i&&(w.delete(t),t.i(e))}function M(t,e,n,o){if(t&&t.o){if(w.has(t))return;w.add(t),E.c.push((()=>{w.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function T(t,e,o,s){const{fragment:c,on_mount:a,on_destroy:i,after_update:u}=t.$$;c&&c.m(e,o),s||_((()=>{const e=a.map(n).filter(l);i?i.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(_)}function N(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function O(t,e){-1===t.$$.dirty[0]&&(m.push(t),y||(y=!0,x.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(e,n,l,s,c,a,u=[-1]){const f=g;h(e);const d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:n.context||[]),callbacks:o(),dirty:u,skip_bound:!1};let p=!1;if(d.ctx=l?l(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&O(e,t)),n})):[],d.update(),p=!0,r(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(i)}else d.fragment&&d.fragment.c();n.intro&&A(e.$$.fragment),T(e,n.target,n.anchor,n.customElement),I()}h(f)}class H{$destroy(){N(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function L(e){let n,o,r,l,s,g,h,m,$,b,v,x,y,_;return{c(){n=u("div"),o=u("p"),r=f(e[1]),l=d(),s=u("div"),g=u("div"),h=u("img"),$=d(),b=u("div"),b.innerHTML="<h3>Cantidad:</h3> \n\t\t\t<h1>0</h1>",v=d(),x=u("button"),x.textContent="Agregar",y=d(),_=u("button"),_.textContent="Quitar",p(o,"class","svelte-1jsbs3x"),h.src!==(m=`./${e[0]}`)&&p(h,"src",m),p(h,"alt","img"),p(h,"class","svelte-1jsbs3x"),p(g,"class","content-img"),p(b,"class","content-data svelte-1jsbs3x"),p(s,"class","content-card svelte-1jsbs3x"),p(x,"class","btn-add svelte-1jsbs3x"),p(_,"class","btn-del svelte-1jsbs3x"),p(n,"class","container-card svelte-1jsbs3x")},m(t,e){a(t,n,e),c(n,o),c(o,r),c(n,l),c(n,s),c(s,g),c(g,h),c(s,$),c(s,b),c(n,v),c(n,x),c(n,y),c(n,_)},p(t,[e]){2&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,t[1]),1&e&&h.src!==(m=`./${t[0]}`)&&p(h,"src",m)},i:t,o:t,d(t){t&&i(n)}}}function S(t,e,n){let{urlImage:o=""}=e,{tittleCard:r=""}=e;return t.$$set=t=>{"urlImage"in t&&n(0,o=t.urlImage),"tittleCard"in t&&n(1,r=t.tittleCard)},[o,r]}class q extends H{constructor(t){super(),B(this,t,S,L,s,{urlImage:0,tittleCard:1})}}function P(t,e,n){const o=t.slice();return o[1]=e[n],o}function Q(t){let n,o;const r=[t[1]];let l={};for(let t=0;t<r.length;t+=1)l=e(l,r[t]);return n=new q({props:l}),{c(){var t;(t=n.$$.fragment)&&t.c()},m(t,e){T(n,t,e),o=!0},p(t,e){const o=1&e?function(t,e){const n={},o={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],c=e[l];if(c){for(const t in s)t in c||(o[t]=1);for(const t in c)r[t]||(n[t]=c[t],r[t]=1);t[l]=c}else for(const t in s)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(r,[(l=t[1],"object"==typeof l&&null!==l?l:{})]):{};var l;n.$set(o)},i(t){o||(A(n.$$.fragment,t),o=!0)},o(t){M(n.$$.fragment,t),o=!1},d(t){N(n,t)}}}function U(t){let e,n,o,l,s,f,g,h,m,$=t[0],b=[];for(let e=0;e<$.length;e+=1)b[e]=Q(P(t,$,e));const v=t=>M(b[t],1,1,(()=>{b[t]=null}));return{c(){e=u("main"),n=u("h1"),n.textContent="Unamad",o=d(),l=u("div");for(let t=0;t<b.length;t+=1)b[t].c();s=d(),f=u("h3"),f.textContent="luis angel pfuño canales",g=d(),h=u("p"),h.innerHTML='My repository <a href="https://github.com/luis16121013">github</a>',p(n,"class","svelte-spiai2"),p(l,"class","svelte-spiai2"),p(f,"class","svelte-spiai2"),p(e,"class","svelte-spiai2")},m(t,r){a(t,e,r),c(e,n),c(e,o),c(e,l);for(let t=0;t<b.length;t+=1)b[t].m(l,null);c(e,s),c(e,f),c(e,g),c(e,h),m=!0},p(t,[e]){if(1&e){let n;for($=t[0],n=0;n<$.length;n+=1){const o=P(t,$,n);b[n]?(b[n].p(o,e),A(b[n],1)):(b[n]=Q(o),b[n].c(),A(b[n],1),b[n].m(l,null))}for(E={r:0,c:[],p:E},n=$.length;n<b.length;n+=1)v(n);E.r||r(E.c),E=E.p}},i(t){if(!m){for(let t=0;t<$.length;t+=1)A(b[t]);m=!0}},o(t){b=b.filter(Boolean);for(let t=0;t<b.length;t+=1)M(b[t]);m=!1},d(t){t&&i(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(b,t)}}}function z(t){let e=[{tittleCard:"licuadora",urlImage:"licuadora-2.jpg"},{tittleCard:"lavadora",urlImage:"lavadora-3.jpg"},{tittleCard:"plancha",urlImage:"plancha-2.jpg"},{tittleCard:"laptop",urlImage:"laptop-2.jpg"},{tittleCard:"televisor",urlImage:"televisor-2.jpg"},{tittleCard:"ventilador",urlImage:"ventilador-2.jpg"}];return console.log(e),[e]}return new class extends H{constructor(t){super(),B(this,t,z,U,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
