(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(n){if(n.ep)return;n.ep=!0;const l=t(n);fetch(n.href,l)}})();const G=(e,s)=>e===s,P={equals:G};let H=q;const w=1,m=2,D={owned:null,cleanups:null,context:null,owner:null};var h=null;let T=null,f=null,u=null,g=null,E=0;function V(e,s){const t=f,i=h,n=e.length===0,l=n?D:{owned:null,cleanups:null,context:null,owner:s===void 0?i:s},r=n?e:()=>e(()=>C(()=>x(l)));h=l,f=null;try{return b(r,!0)}finally{f=t,h=i}}function K(e,s){s=s?Object.assign({},P,s):P;const t={value:e,observers:null,observerSlots:null,comparator:s.equals||void 0},i=n=>(typeof n=="function"&&(n=n(t.value)),_(t,n));return[Q.bind(t),i]}function N(e,s,t){const i=X(e,s,!1,w);L(i)}function C(e){if(f===null)return e();const s=f;f=null;try{return e()}finally{f=s}}function Q(){if(this.sources&&this.state)if(this.state===w)L(this);else{const e=u;u=null,b(()=>A(this),!1),u=e}if(f){const e=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(e)):(f.sources=[this],f.sourceSlots=[e]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function _(e,s,t){let i=e.value;return(!e.comparator||!e.comparator(i,s))&&(e.value=s,e.observers&&e.observers.length&&b(()=>{for(let n=0;n<e.observers.length;n+=1){const l=e.observers[n],r=T&&T.running;r&&T.disposed.has(l),(r?!l.tState:!l.state)&&(l.pure?u.push(l):g.push(l),l.observers&&F(l)),r||(l.state=w)}if(u.length>1e6)throw u=[],new Error},!1)),s}function L(e){if(!e.fn)return;x(e);const s=h,t=f,i=E;f=h=e,W(e,e.value,i),f=t,h=s}function W(e,s,t){let i;try{i=e.fn(s)}catch(n){return e.pure&&(e.state=w,e.owned&&e.owned.forEach(x),e.owned=null),e.updatedAt=t+1,I(n)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?_(e,i):e.value=i,e.updatedAt=t)}function X(e,s,t,i=w,n){const l={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:s,owner:h,context:null,pure:t};return h===null||h!==D&&(h.owned?h.owned.push(l):h.owned=[l]),l}function j(e){if(e.state===0)return;if(e.state===m)return A(e);if(e.suspense&&C(e.suspense.inFallback))return e.suspense.effects.push(e);const s=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<E);)e.state&&s.push(e);for(let t=s.length-1;t>=0;t--)if(e=s[t],e.state===w)L(e);else if(e.state===m){const i=u;u=null,b(()=>A(e,s[0]),!1),u=i}}function b(e,s){if(u)return e();let t=!1;s||(u=[]),g?t=!0:g=[],E++;try{const i=e();return J(t),i}catch(i){t||(g=null),u=null,I(i)}}function J(e){if(u&&(q(u),u=null),e)return;const s=g;g=null,s.length&&b(()=>H(s),!1)}function q(e){for(let s=0;s<e.length;s++)j(e[s])}function A(e,s){e.state=0;for(let t=0;t<e.sources.length;t+=1){const i=e.sources[t];if(i.sources){const n=i.state;n===w?i!==s&&(!i.updatedAt||i.updatedAt<E)&&j(i):n===m&&A(i,s)}}}function F(e){for(let s=0;s<e.observers.length;s+=1){const t=e.observers[s];t.state||(t.state=m,t.pure?u.push(t):g.push(t),t.observers&&F(t))}}function x(e){let s;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),i=e.sourceSlots.pop(),n=t.observers;if(n&&n.length){const l=n.pop(),r=t.observerSlots.pop();i<n.length&&(l.sourceSlots[r]=i,n[i]=l,t.observerSlots[i]=r)}}if(e.owned){for(s=e.owned.length-1;s>=0;s--)x(e.owned[s]);e.owned=null}if(e.cleanups){for(s=e.cleanups.length-1;s>=0;s--)e.cleanups[s]();e.cleanups=null}e.state=0,e.context=null}function Y(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function I(e,s=h){throw Y(e)}function Z(e,s){return C(()=>e(s||{}))}function z(e,s,t){let i=t.length,n=s.length,l=i,r=0,o=0,c=s[n-1].nextSibling,p=null;for(;r<n||o<l;){if(s[r]===t[o]){r++,o++;continue}for(;s[n-1]===t[l-1];)n--,l--;if(n===r){const a=l<i?o?t[o-1].nextSibling:t[l-o]:c;for(;o<l;)e.insertBefore(t[o++],a)}else if(l===o)for(;r<n;)(!p||!p.has(s[r]))&&s[r].remove(),r++;else if(s[r]===t[l-1]&&t[o]===s[n-1]){const a=s[--n].nextSibling;e.insertBefore(t[o++],s[r++].nextSibling),e.insertBefore(t[--l],a),s[n]=t[l]}else{if(!p){p=new Map;let d=o;for(;d<l;)p.set(t[d],d++)}const a=p.get(s[r]);if(a!=null)if(o<a&&a<l){let d=r,v=1,O;for(;++d<n&&d<l&&!((O=p.get(s[d]))==null||O!==a+v);)v++;if(v>a-o){const R=s[r];for(;o<a;)e.insertBefore(t[o++],R)}else e.replaceChild(t[o++],s[r++])}else r++;else s[r++].remove()}}}const B="_$DX_DELEGATE";function k(e,s,t,i={}){let n;return V(l=>{n=l,s===document?e():M(s,e(),s.firstChild?null:void 0,t)},i.owner),()=>{n(),s.textContent=""}}function ee(e,s,t){let i;const n=()=>{const r=document.createElement("template");return r.innerHTML=e,t?r.content.firstChild.firstChild:r.content.firstChild},l=s?()=>C(()=>document.importNode(i||(i=n()),!0)):()=>(i||(i=n())).cloneNode(!0);return l.cloneNode=l,l}function te(e,s=window.document){const t=s[B]||(s[B]=new Set);for(let i=0,n=e.length;i<n;i++){const l=e[i];t.has(l)||(t.add(l),s.addEventListener(l,se))}}function M(e,s,t,i){if(t!==void 0&&!i&&(i=[]),typeof s!="function")return S(e,s,i,t);N(n=>S(e,s(),n,t),i)}function se(e){const s=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}});t;){const i=t[s];if(i&&!t.disabled){const n=t[`${s}Data`];if(n!==void 0?i.call(t,n,e):i.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function S(e,s,t,i,n){for(;typeof t=="function";)t=t();if(s===t)return t;const l=typeof s,r=i!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(s=s.toString()),r){let o=t[0];o&&o.nodeType===3?o.data=s:o=document.createTextNode(s),t=y(e,t,i,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=s:t=e.textContent=s;else if(s==null||l==="boolean")t=y(e,t,i);else{if(l==="function")return N(()=>{let o=s();for(;typeof o=="function";)o=o();t=S(e,o,t,i)}),()=>t;if(Array.isArray(s)){const o=[],c=t&&Array.isArray(t);if($(o,s,t,n))return N(()=>t=S(e,o,t,i,!0)),()=>t;if(o.length===0){if(t=y(e,t,i),r)return t}else c?t.length===0?U(e,o,i):z(e,t,o):(t&&y(e),U(e,o));t=o}else if(s.nodeType){if(Array.isArray(t)){if(r)return t=y(e,t,i,s);y(e,t,null,s)}else t==null||t===""||!e.firstChild?e.appendChild(s):e.replaceChild(s,e.firstChild);t=s}else console.warn("Unrecognized value. Skipped inserting",s)}return t}function $(e,s,t,i){let n=!1;for(let l=0,r=s.length;l<r;l++){let o=s[l],c=t&&t[l],p;if(!(o==null||o===!0||o===!1))if((p=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))n=$(e,o,c)||n;else if(p==="function")if(i){for(;typeof o=="function";)o=o();n=$(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||n}else e.push(o),n=!0;else{const a=String(o);c&&c.nodeType===3&&c.data===a?e.push(c):e.push(document.createTextNode(a))}}return n}function U(e,s,t=null){for(let i=0,n=s.length;i<n;i++)e.insertBefore(s[i],t)}function y(e,s,t,i){if(t===void 0)return e.textContent="";const n=i||document.createTextNode("");if(s.length){let l=!1;for(let r=s.length-1;r>=0;r--){const o=s[r];if(n!==o){const c=o.parentNode===e;!l&&!r?c?e.replaceChild(n,o):e.insertBefore(n,t):c&&o.remove()}else l=!0}}else e.insertBefore(n,t);return[n]}const ne=ee("<button>");function ie(){const[e,s]=K(0);return(()=>{const t=ne();return t.$$click=()=>s(e()+1),M(t,e),t})()}te(["click"]);const le=document.getElementById("root");k(()=>Z(ie,{}),le);