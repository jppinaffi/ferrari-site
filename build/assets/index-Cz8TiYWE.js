(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function ES(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var wd={exports:{}},Jo={},Td={exports:{}},yt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sx;function wS(){if(Sx)return yt;Sx=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function g(z){return z===null||typeof z!="object"?null:(z=m&&z[m]||z["@@iterator"],typeof z=="function"?z:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function _(z,re,Ne){this.props=z,this.context=re,this.refs=M,this.updater=Ne||y}_.prototype.isReactComponent={},_.prototype.setState=function(z,re){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,re,"setState")},_.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function v(){}v.prototype=_.prototype;function b(z,re,Ne){this.props=z,this.context=re,this.refs=M,this.updater=Ne||y}var C=b.prototype=new v;C.constructor=b,E(C,_.prototype),C.isPureReactComponent=!0;var N=Array.isArray,L=Object.prototype.hasOwnProperty,P={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function k(z,re,Ne){var Pe,Fe={},ie=null,pe=null;if(re!=null)for(Pe in re.ref!==void 0&&(pe=re.ref),re.key!==void 0&&(ie=""+re.key),re)L.call(re,Pe)&&!U.hasOwnProperty(Pe)&&(Fe[Pe]=re[Pe]);var ce=arguments.length-2;if(ce===1)Fe.children=Ne;else if(1<ce){for(var ve=Array(ce),we=0;we<ce;we++)ve[we]=arguments[we+2];Fe.children=ve}if(z&&z.defaultProps)for(Pe in ce=z.defaultProps,ce)Fe[Pe]===void 0&&(Fe[Pe]=ce[Pe]);return{$$typeof:s,type:z,key:ie,ref:pe,props:Fe,_owner:P.current}}function T(z,re){return{$$typeof:s,type:z.type,key:re,ref:z.ref,props:z.props,_owner:z._owner}}function R(z){return typeof z=="object"&&z!==null&&z.$$typeof===s}function B(z){var re={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Ne){return re[Ne]})}var j=/\/+/g;function q(z,re){return typeof z=="object"&&z!==null&&z.key!=null?B(""+z.key):re.toString(36)}function ne(z,re,Ne,Pe,Fe){var ie=typeof z;(ie==="undefined"||ie==="boolean")&&(z=null);var pe=!1;if(z===null)pe=!0;else switch(ie){case"string":case"number":pe=!0;break;case"object":switch(z.$$typeof){case s:case e:pe=!0}}if(pe)return pe=z,Fe=Fe(pe),z=Pe===""?"."+q(pe,0):Pe,N(Fe)?(Ne="",z!=null&&(Ne=z.replace(j,"$&/")+"/"),ne(Fe,re,Ne,"",function(we){return we})):Fe!=null&&(R(Fe)&&(Fe=T(Fe,Ne+(!Fe.key||pe&&pe.key===Fe.key?"":(""+Fe.key).replace(j,"$&/")+"/")+z)),re.push(Fe)),1;if(pe=0,Pe=Pe===""?".":Pe+":",N(z))for(var ce=0;ce<z.length;ce++){ie=z[ce];var ve=Pe+q(ie,ce);pe+=ne(ie,re,Ne,ve,Fe)}else if(ve=g(z),typeof ve=="function")for(z=ve.call(z),ce=0;!(ie=z.next()).done;)ie=ie.value,ve=Pe+q(ie,ce++),pe+=ne(ie,re,Ne,ve,Fe);else if(ie==="object")throw re=String(z),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return pe}function se(z,re,Ne){if(z==null)return z;var Pe=[],Fe=0;return ne(z,Pe,"","",function(ie){return re.call(Ne,ie,Fe++)}),Pe}function ae(z){if(z._status===-1){var re=z._result;re=re(),re.then(function(Ne){(z._status===0||z._status===-1)&&(z._status=1,z._result=Ne)},function(Ne){(z._status===0||z._status===-1)&&(z._status=2,z._result=Ne)}),z._status===-1&&(z._status=0,z._result=re)}if(z._status===1)return z._result.default;throw z._result}var oe={current:null},H={transition:null},ue={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:H,ReactCurrentOwner:P};function te(){throw Error("act(...) is not supported in production builds of React.")}return yt.Children={map:se,forEach:function(z,re,Ne){se(z,function(){re.apply(this,arguments)},Ne)},count:function(z){var re=0;return se(z,function(){re++}),re},toArray:function(z){return se(z,function(re){return re})||[]},only:function(z){if(!R(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},yt.Component=_,yt.Fragment=t,yt.Profiler=a,yt.PureComponent=b,yt.StrictMode=n,yt.Suspense=d,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,yt.act=te,yt.cloneElement=function(z,re,Ne){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var Pe=E({},z.props),Fe=z.key,ie=z.ref,pe=z._owner;if(re!=null){if(re.ref!==void 0&&(ie=re.ref,pe=P.current),re.key!==void 0&&(Fe=""+re.key),z.type&&z.type.defaultProps)var ce=z.type.defaultProps;for(ve in re)L.call(re,ve)&&!U.hasOwnProperty(ve)&&(Pe[ve]=re[ve]===void 0&&ce!==void 0?ce[ve]:re[ve])}var ve=arguments.length-2;if(ve===1)Pe.children=Ne;else if(1<ve){ce=Array(ve);for(var we=0;we<ve;we++)ce[we]=arguments[we+2];Pe.children=ce}return{$$typeof:s,type:z.type,key:Fe,ref:ie,props:Pe,_owner:pe}},yt.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:o,_context:z},z.Consumer=z},yt.createElement=k,yt.createFactory=function(z){var re=k.bind(null,z);return re.type=z,re},yt.createRef=function(){return{current:null}},yt.forwardRef=function(z){return{$$typeof:c,render:z}},yt.isValidElement=R,yt.lazy=function(z){return{$$typeof:p,_payload:{_status:-1,_result:z},_init:ae}},yt.memo=function(z,re){return{$$typeof:h,type:z,compare:re===void 0?null:re}},yt.startTransition=function(z){var re=H.transition;H.transition={};try{z()}finally{H.transition=re}},yt.unstable_act=te,yt.useCallback=function(z,re){return oe.current.useCallback(z,re)},yt.useContext=function(z){return oe.current.useContext(z)},yt.useDebugValue=function(){},yt.useDeferredValue=function(z){return oe.current.useDeferredValue(z)},yt.useEffect=function(z,re){return oe.current.useEffect(z,re)},yt.useId=function(){return oe.current.useId()},yt.useImperativeHandle=function(z,re,Ne){return oe.current.useImperativeHandle(z,re,Ne)},yt.useInsertionEffect=function(z,re){return oe.current.useInsertionEffect(z,re)},yt.useLayoutEffect=function(z,re){return oe.current.useLayoutEffect(z,re)},yt.useMemo=function(z,re){return oe.current.useMemo(z,re)},yt.useReducer=function(z,re,Ne){return oe.current.useReducer(z,re,Ne)},yt.useRef=function(z){return oe.current.useRef(z)},yt.useState=function(z){return oe.current.useState(z)},yt.useSyncExternalStore=function(z,re,Ne){return oe.current.useSyncExternalStore(z,re,Ne)},yt.useTransition=function(){return oe.current.useTransition()},yt.version="18.3.1",yt}var Mx;function Sp(){return Mx||(Mx=1,Td.exports=wS()),Td.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ex;function TS(){if(Ex)return Jo;Ex=1;var s=Sp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var p,m={},g=null,y=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(y=d.ref);for(p in d)n.call(d,p)&&!o.hasOwnProperty(p)&&(m[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)m[p]===void 0&&(m[p]=d[p]);return{$$typeof:e,type:c,key:g,ref:y,props:m,_owner:a.current}}return Jo.Fragment=t,Jo.jsx=u,Jo.jsxs=u,Jo}var wx;function bS(){return wx||(wx=1,wd.exports=TS()),wd.exports}var I=bS(),Wu={},bd={exports:{}},qn={},Cd={exports:{}},Ad={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tx;function CS(){return Tx||(Tx=1,(function(s){function e(H,ue){var te=H.length;H.push(ue);e:for(;0<te;){var z=te-1>>>1,re=H[z];if(0<a(re,ue))H[z]=ue,H[te]=re,te=z;else break e}}function t(H){return H.length===0?null:H[0]}function n(H){if(H.length===0)return null;var ue=H[0],te=H.pop();if(te!==ue){H[0]=te;e:for(var z=0,re=H.length,Ne=re>>>1;z<Ne;){var Pe=2*(z+1)-1,Fe=H[Pe],ie=Pe+1,pe=H[ie];if(0>a(Fe,te))ie<re&&0>a(pe,Fe)?(H[z]=pe,H[ie]=te,z=ie):(H[z]=Fe,H[Pe]=te,z=Pe);else if(ie<re&&0>a(pe,te))H[z]=pe,H[ie]=te,z=ie;else break e}}return ue}function a(H,ue){var te=H.sortIndex-ue.sortIndex;return te!==0?te:H.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;s.unstable_now=function(){return o.now()}}else{var u=Date,c=u.now();s.unstable_now=function(){return u.now()-c}}var d=[],h=[],p=1,m=null,g=3,y=!1,E=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(H){for(var ue=t(h);ue!==null;){if(ue.callback===null)n(h);else if(ue.startTime<=H)n(h),ue.sortIndex=ue.expirationTime,e(d,ue);else break;ue=t(h)}}function N(H){if(M=!1,C(H),!E)if(t(d)!==null)E=!0,ae(L);else{var ue=t(h);ue!==null&&oe(N,ue.startTime-H)}}function L(H,ue){E=!1,M&&(M=!1,v(k),k=-1),y=!0;var te=g;try{for(C(ue),m=t(d);m!==null&&(!(m.expirationTime>ue)||H&&!B());){var z=m.callback;if(typeof z=="function"){m.callback=null,g=m.priorityLevel;var re=z(m.expirationTime<=ue);ue=s.unstable_now(),typeof re=="function"?m.callback=re:m===t(d)&&n(d),C(ue)}else n(d);m=t(d)}if(m!==null)var Ne=!0;else{var Pe=t(h);Pe!==null&&oe(N,Pe.startTime-ue),Ne=!1}return Ne}finally{m=null,g=te,y=!1}}var P=!1,U=null,k=-1,T=5,R=-1;function B(){return!(s.unstable_now()-R<T)}function j(){if(U!==null){var H=s.unstable_now();R=H;var ue=!0;try{ue=U(!0,H)}finally{ue?q():(P=!1,U=null)}}else P=!1}var q;if(typeof b=="function")q=function(){b(j)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,se=ne.port2;ne.port1.onmessage=j,q=function(){se.postMessage(null)}}else q=function(){_(j,0)};function ae(H){U=H,P||(P=!0,q())}function oe(H,ue){k=_(function(){H(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){E||y||(E=!0,ae(L))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(H){switch(g){case 1:case 2:case 3:var ue=3;break;default:ue=g}var te=g;g=ue;try{return H()}finally{g=te}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,ue){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var te=g;g=H;try{return ue()}finally{g=te}},s.unstable_scheduleCallback=function(H,ue,te){var z=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?z+te:z):te=z,H){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=te+re,H={id:p++,callback:ue,priorityLevel:H,startTime:te,expirationTime:re,sortIndex:-1},te>z?(H.sortIndex=te,e(h,H),t(d)===null&&H===t(h)&&(M?(v(k),k=-1):M=!0,oe(N,te-z))):(H.sortIndex=re,e(d,H),E||y||(E=!0,ae(L))),H},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(H){var ue=g;return function(){var te=g;g=ue;try{return H.apply(this,arguments)}finally{g=te}}}})(Ad)),Ad}var bx;function AS(){return bx||(bx=1,Cd.exports=CS()),Cd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cx;function RS(){if(Cx)return qn;Cx=1;var s=Sp(),e=AS();function t(i){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,a={};function o(i,r){u(i,r),u(i+"Capture",r)}function u(i,r){for(a[i]=r,i=0;i<r.length;i++)n.add(r[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function g(i){return d.call(m,i)?!0:d.call(p,i)?!1:h.test(i)?m[i]=!0:(p[i]=!0,!1)}function y(i,r,l,f){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,r,l,f){if(r===null||typeof r>"u"||y(i,r,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(i,r,l,f,x,S,w){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=x,this.mustUseProperty=l,this.propertyName=i,this.type=r,this.sanitizeURL=S,this.removeEmptyString=w}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){_[i]=new M(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var r=i[0];_[r]=new M(r,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){_[i]=new M(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){_[i]=new M(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){_[i]=new M(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){_[i]=new M(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){_[i]=new M(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){_[i]=new M(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){_[i]=new M(i,5,!1,i.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function b(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var r=i.replace(v,b);_[r]=new M(r,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var r=i.replace(v,b);_[r]=new M(r,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var r=i.replace(v,b);_[r]=new M(r,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){_[i]=new M(i,1,!1,i.toLowerCase(),null,!1,!1)}),_.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){_[i]=new M(i,1,!1,i.toLowerCase(),null,!0,!0)});function C(i,r,l,f){var x=_.hasOwnProperty(r)?_[r]:null;(x!==null?x.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,l,x,f)&&(l=null),f||x===null?g(r)&&(l===null?i.removeAttribute(r):i.setAttribute(r,""+l)):x.mustUseProperty?i[x.propertyName]=l===null?x.type===3?!1:"":l:(r=x.attributeName,f=x.attributeNamespace,l===null?i.removeAttribute(r):(x=x.type,l=x===3||x===4&&l===!0?"":""+l,f?i.setAttributeNS(f,r,l):i.setAttribute(r,l))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),P=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),B=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),H=Symbol.iterator;function ue(i){return i===null||typeof i!="object"?null:(i=H&&i[H]||i["@@iterator"],typeof i=="function"?i:null)}var te=Object.assign,z;function re(i){if(z===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);z=r&&r[1]||""}return`
`+z+i}var Ne=!1;function Pe(i,r){if(!i||Ne)return"";Ne=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(le){var f=le}Reflect.construct(i,[],r)}else{try{r.call()}catch(le){f=le}i.call(r.prototype)}else{try{throw Error()}catch(le){f=le}i()}}catch(le){if(le&&f&&typeof le.stack=="string"){for(var x=le.stack.split(`
`),S=f.stack.split(`
`),w=x.length-1,O=S.length-1;1<=w&&0<=O&&x[w]!==S[O];)O--;for(;1<=w&&0<=O;w--,O--)if(x[w]!==S[O]){if(w!==1||O!==1)do if(w--,O--,0>O||x[w]!==S[O]){var W=`
`+x[w].replace(" at new "," at ");return i.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",i.displayName)),W}while(1<=w&&0<=O);break}}}finally{Ne=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?re(i):""}function Fe(i){switch(i.tag){case 5:return re(i.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return i=Pe(i.type,!1),i;case 11:return i=Pe(i.type.render,!1),i;case 1:return i=Pe(i.type,!0),i;default:return""}}function ie(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case U:return"Fragment";case P:return"Portal";case T:return"Profiler";case k:return"StrictMode";case q:return"Suspense";case ne:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case B:return(i.displayName||"Context")+".Consumer";case R:return(i._context.displayName||"Context")+".Provider";case j:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case se:return r=i.displayName||null,r!==null?r:ie(i.type)||"Memo";case ae:r=i._payload,i=i._init;try{return ie(i(r))}catch{}}return null}function pe(i){var r=i.type;switch(i.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=r.render,i=i.displayName||i.name||"",r.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(r);case 8:return r===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ce(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function ve(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function we(i){var r=ve(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),f=""+i[r];if(!i.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var x=l.get,S=l.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return x.call(this)},set:function(w){f=""+w,S.call(this,w)}}),Object.defineProperty(i,r,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(w){f=""+w},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function qe(i){i._valueTracker||(i._valueTracker=we(i))}function wt(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var l=r.getValue(),f="";return i&&(f=ve(i)?i.checked?"true":"false":i.value),i=f,i!==l?(r.setValue(i),!0):!1}function $e(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function ht(i,r){var l=r.checked;return te({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function V(i,r){var l=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;l=ce(r.value!=null?r.value:l),i._wrapperState={initialChecked:f,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function rt(i,r){r=r.checked,r!=null&&C(i,"checked",r,!1)}function pt(i,r){rt(i,r);var l=ce(r.value),f=r.type;if(l!=null)f==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}r.hasOwnProperty("value")?Be(i,r.type,l):r.hasOwnProperty("defaultValue")&&Be(i,r.type,ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(i.defaultChecked=!!r.defaultChecked)}function Tt(i,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+i._wrapperState.initialValue,l||r===i.value||(i.value=r),i.defaultValue=r}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Be(i,r,l){(r!=="number"||$e(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var vt=Array.isArray;function He(i,r,l,f){if(i=i.options,r){r={};for(var x=0;x<l.length;x++)r["$"+l[x]]=!0;for(l=0;l<i.length;l++)x=r.hasOwnProperty("$"+i[l].value),i[l].selected!==x&&(i[l].selected=x),x&&f&&(i[l].defaultSelected=!0)}else{for(l=""+ce(l),r=null,x=0;x<i.length;x++){if(i[x].value===l){i[x].selected=!0,f&&(i[x].defaultSelected=!0);return}r!==null||i[x].disabled||(r=i[x])}r!==null&&(r.selected=!0)}}function ct(i,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},r,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function F(i,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(vt(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}i._wrapperState={initialValue:ce(l)}}function A(i,r){var l=ce(r.value),f=ce(r.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),r.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),f!=null&&(i.defaultValue=""+f)}function J(i){var r=i.textContent;r===i._wrapperState.initialValue&&r!==""&&r!==null&&(i.value=r)}function me(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(i,r){return i==null||i==="http://www.w3.org/1999/xhtml"?me(r):i==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var de,Ze=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,f,x){MSApp.execUnsafeLocalFunction(function(){return i(r,l,f,x)})}:i})(function(i,r){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=r;else{for(de=de||document.createElement("div"),de.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=de.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;r.firstChild;)i.appendChild(r.firstChild)}});function De(i,r){if(r){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=r;return}}i.textContent=r}var Je={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ke=["Webkit","ms","Moz","O"];Object.keys(Je).forEach(function(i){Ke.forEach(function(r){r=r+i.charAt(0).toUpperCase()+i.substring(1),Je[r]=Je[i]})});function Se(i,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Je.hasOwnProperty(i)&&Je[i]?(""+r).trim():r+"px"}function Re(i,r){i=i.style;for(var l in r)if(r.hasOwnProperty(l)){var f=l.indexOf("--")===0,x=Se(l,r[l],f);l==="float"&&(l="cssFloat"),f?i.setProperty(l,x):i[l]=x}}var ot=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nt(i,r){if(r){if(ot[i]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Oe(i,r){if(i.indexOf("-")===-1)return typeof r.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lt=null;function G(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Le=null,be=null,Ce=null;function Ee(i){if(i=ko(i)){if(typeof Le!="function")throw Error(t(280));var r=i.stateNode;r&&(r=su(r),Le(i.stateNode,i.type,r))}}function xe(i){be?Ce?Ce.push(i):Ce=[i]:be=i}function Ge(){if(be){var i=be,r=Ce;if(Ce=be=null,Ee(i),r)for(i=0;i<r.length;i++)Ee(r[i])}}function ft(i,r){return i(r)}function Ut(){}var At=!1;function ti(i,r,l){if(At)return i(r,l);At=!0;try{return ft(i,r,l)}finally{At=!1,(be!==null||Ce!==null)&&(Ut(),Ge())}}function Mn(i,r){var l=i.stateNode;if(l===null)return null;var f=su(l);if(f===null)return null;l=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var yo=!1;if(c)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){yo=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{yo=!1}function Ol(i,r,l,f,x,S,w,O,W){var le=Array.prototype.slice.call(arguments,3);try{r.apply(l,le)}catch(ye){this.onError(ye)}}var ni=!1,kr=null,Ts=!1,ua=null,ca={onError:function(i){ni=!0,kr=i}};function kl(i,r,l,f,x,S,w,O,W){ni=!1,kr=null,Ol.apply(ca,arguments)}function fa(i,r,l,f,x,S,w,O,W){if(kl.apply(this,arguments),ni){if(ni){var le=kr;ni=!1,kr=null}else throw Error(t(198));Ts||(Ts=!0,ua=le)}}function ji(i){var r=i,l=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(l=r.return),i=r.return;while(i)}return r.tag===3?l:null}function So(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function Bl(i){if(ji(i)!==i)throw Error(t(188))}function Xc(i){var r=i.alternate;if(!r){if(r=ji(i),r===null)throw Error(t(188));return r!==i?null:i}for(var l=i,f=r;;){var x=l.return;if(x===null)break;var S=x.alternate;if(S===null){if(f=x.return,f!==null){l=f;continue}break}if(x.child===S.child){for(S=x.child;S;){if(S===l)return Bl(x),i;if(S===f)return Bl(x),r;S=S.sibling}throw Error(t(188))}if(l.return!==f.return)l=x,f=S;else{for(var w=!1,O=x.child;O;){if(O===l){w=!0,l=x,f=S;break}if(O===f){w=!0,f=x,l=S;break}O=O.sibling}if(!w){for(O=S.child;O;){if(O===l){w=!0,l=S,f=x;break}if(O===f){w=!0,f=S,l=x;break}O=O.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:r}function zl(i){return i=Xc(i),i!==null?Vl(i):null}function Vl(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var r=Vl(i);if(r!==null)return r;i=i.sibling}return null}var Hl=e.unstable_scheduleCallback,Gl=e.unstable_cancelCallback,D=e.unstable_shouldYield,$=e.unstable_requestPaint,Q=e.unstable_now,fe=e.unstable_getCurrentPriorityLevel,Y=e.unstable_ImmediatePriority,Ae=e.unstable_UserBlockingPriority,Ie=e.unstable_NormalPriority,je=e.unstable_LowPriority,ze=e.unstable_IdlePriority,it=null,Qe=null;function tt(i){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(it,i,void 0,(i.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:jt,Nt=Math.log,Wt=Math.LN2;function jt(i){return i>>>=0,i===0?32:31-(Nt(i)/Wt|0)|0}var Rt=64,et=4194304;function It(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function St(i,r){var l=i.pendingLanes;if(l===0)return 0;var f=0,x=i.suspendedLanes,S=i.pingedLanes,w=l&268435455;if(w!==0){var O=w&~x;O!==0?f=It(O):(S&=w,S!==0&&(f=It(S)))}else w=l&~x,w!==0?f=It(w):S!==0&&(f=It(S));if(f===0)return 0;if(r!==0&&r!==f&&(r&x)===0&&(x=f&-f,S=r&-r,x>=S||x===16&&(S&4194240)!==0))return r;if((f&4)!==0&&(f|=l&16),r=i.entangledLanes,r!==0)for(i=i.entanglements,r&=f;0<r;)l=31-ut(r),x=1<<l,f|=i[l],r&=~x;return f}function Un(i,r){switch(i){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Br(i,r){for(var l=i.suspendedLanes,f=i.pingedLanes,x=i.expirationTimes,S=i.pendingLanes;0<S;){var w=31-ut(S),O=1<<w,W=x[w];W===-1?((O&l)===0||(O&f)!==0)&&(x[w]=Un(O,r)):W<=r&&(i.expiredLanes|=O),S&=~O}}function En(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function zr(){var i=Rt;return Rt<<=1,(Rt&4194240)===0&&(Rt=64),i}function kt(i){for(var r=[],l=0;31>l;l++)r.push(i);return r}function an(i,r,l){i.pendingLanes|=r,r!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,r=31-ut(r),i[r]=l}function Vn(i,r){var l=i.pendingLanes&~r;i.pendingLanes=r,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=r,i.mutableReadLanes&=r,i.entangledLanes&=r,r=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<l;){var x=31-ut(l),S=1<<x;r[x]=0,f[x]=-1,i[x]=-1,l&=~S}}function fn(i,r){var l=i.entangledLanes|=r;for(i=i.entanglements;l;){var f=31-ut(l),x=1<<f;x&r|i[f]&r&&(i[f]|=r),l&=~x}}var mt=0;function da(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Xi,qc,tm,nm,im,$c=!1,Wl=[],Vr=null,Hr=null,Gr=null,Mo=new Map,Eo=new Map,Wr=[],jv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rm(i,r){switch(i){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":Hr=null;break;case"mouseover":case"mouseout":Gr=null;break;case"pointerover":case"pointerout":Mo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(r.pointerId)}}function wo(i,r,l,f,x,S){return i===null||i.nativeEvent!==S?(i={blockedOn:r,domEventName:l,eventSystemFlags:f,nativeEvent:S,targetContainers:[x]},r!==null&&(r=ko(r),r!==null&&qc(r)),i):(i.eventSystemFlags|=f,r=i.targetContainers,x!==null&&r.indexOf(x)===-1&&r.push(x),i)}function Xv(i,r,l,f,x){switch(r){case"focusin":return Vr=wo(Vr,i,r,l,f,x),!0;case"dragenter":return Hr=wo(Hr,i,r,l,f,x),!0;case"mouseover":return Gr=wo(Gr,i,r,l,f,x),!0;case"pointerover":var S=x.pointerId;return Mo.set(S,wo(Mo.get(S)||null,i,r,l,f,x)),!0;case"gotpointercapture":return S=x.pointerId,Eo.set(S,wo(Eo.get(S)||null,i,r,l,f,x)),!0}return!1}function sm(i){var r=bs(i.target);if(r!==null){var l=ji(r);if(l!==null){if(r=l.tag,r===13){if(r=So(l),r!==null){i.blockedOn=r,im(i.priority,function(){tm(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function jl(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var l=Kc(i.domEventName,i.eventSystemFlags,r[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var f=new l.constructor(l.type,l);lt=f,l.target.dispatchEvent(f),lt=null}else return r=ko(l),r!==null&&qc(r),i.blockedOn=l,!1;r.shift()}return!0}function am(i,r,l){jl(i)&&l.delete(r)}function qv(){$c=!1,Vr!==null&&jl(Vr)&&(Vr=null),Hr!==null&&jl(Hr)&&(Hr=null),Gr!==null&&jl(Gr)&&(Gr=null),Mo.forEach(am),Eo.forEach(am)}function To(i,r){i.blockedOn===r&&(i.blockedOn=null,$c||($c=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,qv)))}function bo(i){function r(x){return To(x,i)}if(0<Wl.length){To(Wl[0],i);for(var l=1;l<Wl.length;l++){var f=Wl[l];f.blockedOn===i&&(f.blockedOn=null)}}for(Vr!==null&&To(Vr,i),Hr!==null&&To(Hr,i),Gr!==null&&To(Gr,i),Mo.forEach(r),Eo.forEach(r),l=0;l<Wr.length;l++)f=Wr[l],f.blockedOn===i&&(f.blockedOn=null);for(;0<Wr.length&&(l=Wr[0],l.blockedOn===null);)sm(l),l.blockedOn===null&&Wr.shift()}var ha=N.ReactCurrentBatchConfig,Xl=!0;function $v(i,r,l,f){var x=mt,S=ha.transition;ha.transition=null;try{mt=1,Yc(i,r,l,f)}finally{mt=x,ha.transition=S}}function Yv(i,r,l,f){var x=mt,S=ha.transition;ha.transition=null;try{mt=4,Yc(i,r,l,f)}finally{mt=x,ha.transition=S}}function Yc(i,r,l,f){if(Xl){var x=Kc(i,r,l,f);if(x===null)pf(i,r,f,ql,l),rm(i,f);else if(Xv(x,i,r,l,f))f.stopPropagation();else if(rm(i,f),r&4&&-1<jv.indexOf(i)){for(;x!==null;){var S=ko(x);if(S!==null&&Xi(S),S=Kc(i,r,l,f),S===null&&pf(i,r,f,ql,l),S===x)break;x=S}x!==null&&f.stopPropagation()}else pf(i,r,f,null,l)}}var ql=null;function Kc(i,r,l,f){if(ql=null,i=G(f),i=bs(i),i!==null)if(r=ji(i),r===null)i=null;else if(l=r.tag,l===13){if(i=So(r),i!==null)return i;i=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null);return ql=i,null}function om(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fe()){case Y:return 1;case Ae:return 4;case Ie:case je:return 16;case ze:return 536870912;default:return 16}default:return 16}}var jr=null,Zc=null,$l=null;function lm(){if($l)return $l;var i,r=Zc,l=r.length,f,x="value"in jr?jr.value:jr.textContent,S=x.length;for(i=0;i<l&&r[i]===x[i];i++);var w=l-i;for(f=1;f<=w&&r[l-f]===x[S-f];f++);return $l=x.slice(i,1<f?1-f:void 0)}function Yl(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Kl(){return!0}function um(){return!1}function ii(i){function r(l,f,x,S,w){this._reactName=l,this._targetInst=x,this.type=f,this.nativeEvent=S,this.target=w,this.currentTarget=null;for(var O in i)i.hasOwnProperty(O)&&(l=i[O],this[O]=l?l(S):S[O]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?Kl:um,this.isPropagationStopped=um,this}return te(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Kl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Kl)},persist:function(){},isPersistent:Kl}),r}var pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qc=ii(pa),Co=te({},pa,{view:0,detail:0}),Kv=ii(Co),Jc,ef,Ao,Zl=te({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ao&&(Ao&&i.type==="mousemove"?(Jc=i.screenX-Ao.screenX,ef=i.screenY-Ao.screenY):ef=Jc=0,Ao=i),Jc)},movementY:function(i){return"movementY"in i?i.movementY:ef}}),cm=ii(Zl),Zv=te({},Zl,{dataTransfer:0}),Qv=ii(Zv),Jv=te({},Co,{relatedTarget:0}),tf=ii(Jv),ey=te({},pa,{animationName:0,elapsedTime:0,pseudoElement:0}),ty=ii(ey),ny=te({},pa,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),iy=ii(ny),ry=te({},pa,{data:0}),fm=ii(ry),sy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ly(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=oy[i])?!!r[i]:!1}function nf(){return ly}var uy=te({},Co,{key:function(i){if(i.key){var r=sy[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Yl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?ay[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(i){return i.type==="keypress"?Yl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Yl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),cy=ii(uy),fy=te({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dm=ii(fy),dy=te({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),hy=ii(dy),py=te({},pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),my=ii(py),xy=te({},Zl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),gy=ii(xy),_y=[9,13,27,32],rf=c&&"CompositionEvent"in window,Ro=null;c&&"documentMode"in document&&(Ro=document.documentMode);var vy=c&&"TextEvent"in window&&!Ro,hm=c&&(!rf||Ro&&8<Ro&&11>=Ro),pm=" ",mm=!1;function xm(i,r){switch(i){case"keyup":return _y.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var ma=!1;function yy(i,r){switch(i){case"compositionend":return gm(r);case"keypress":return r.which!==32?null:(mm=!0,pm);case"textInput":return i=r.data,i===pm&&mm?null:i;default:return null}}function Sy(i,r){if(ma)return i==="compositionend"||!rf&&xm(i,r)?(i=lm(),$l=Zc=jr=null,ma=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return hm&&r.locale!=="ko"?null:r.data;default:return null}}var My={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _m(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!My[i.type]:r==="textarea"}function vm(i,r,l,f){xe(f),r=nu(r,"onChange"),0<r.length&&(l=new Qc("onChange","change",null,l,f),i.push({event:l,listeners:r}))}var Po=null,Do=null;function Ey(i){Om(i,0)}function Ql(i){var r=ya(i);if(wt(r))return i}function wy(i,r){if(i==="change")return r}var ym=!1;if(c){var sf;if(c){var af="oninput"in document;if(!af){var Sm=document.createElement("div");Sm.setAttribute("oninput","return;"),af=typeof Sm.oninput=="function"}sf=af}else sf=!1;ym=sf&&(!document.documentMode||9<document.documentMode)}function Mm(){Po&&(Po.detachEvent("onpropertychange",Em),Do=Po=null)}function Em(i){if(i.propertyName==="value"&&Ql(Do)){var r=[];vm(r,Do,i,G(i)),ti(Ey,r)}}function Ty(i,r,l){i==="focusin"?(Mm(),Po=r,Do=l,Po.attachEvent("onpropertychange",Em)):i==="focusout"&&Mm()}function by(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Ql(Do)}function Cy(i,r){if(i==="click")return Ql(r)}function Ay(i,r){if(i==="input"||i==="change")return Ql(r)}function Ry(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var Pi=typeof Object.is=="function"?Object.is:Ry;function No(i,r){if(Pi(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var l=Object.keys(i),f=Object.keys(r);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var x=l[f];if(!d.call(r,x)||!Pi(i[x],r[x]))return!1}return!0}function wm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Tm(i,r){var l=wm(i);i=0;for(var f;l;){if(l.nodeType===3){if(f=i+l.textContent.length,i<=r&&f>=r)return{node:l,offset:r-i};i=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=wm(l)}}function bm(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?bm(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function Cm(){for(var i=window,r=$e();r instanceof i.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)i=r.contentWindow;else break;r=$e(i.document)}return r}function of(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}function Py(i){var r=Cm(),l=i.focusedElem,f=i.selectionRange;if(r!==l&&l&&l.ownerDocument&&bm(l.ownerDocument.documentElement,l)){if(f!==null&&of(l)){if(r=f.start,i=f.end,i===void 0&&(i=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(i,l.value.length);else if(i=(r=l.ownerDocument||document)&&r.defaultView||window,i.getSelection){i=i.getSelection();var x=l.textContent.length,S=Math.min(f.start,x);f=f.end===void 0?S:Math.min(f.end,x),!i.extend&&S>f&&(x=f,f=S,S=x),x=Tm(l,S);var w=Tm(l,f);x&&w&&(i.rangeCount!==1||i.anchorNode!==x.node||i.anchorOffset!==x.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(r=r.createRange(),r.setStart(x.node,x.offset),i.removeAllRanges(),S>f?(i.addRange(r),i.extend(w.node,w.offset)):(r.setEnd(w.node,w.offset),i.addRange(r)))}}for(r=[],i=l;i=i.parentNode;)i.nodeType===1&&r.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)i=r[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var Dy=c&&"documentMode"in document&&11>=document.documentMode,xa=null,lf=null,Lo=null,uf=!1;function Am(i,r,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;uf||xa==null||xa!==$e(f)||(f=xa,"selectionStart"in f&&of(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Lo&&No(Lo,f)||(Lo=f,f=nu(lf,"onSelect"),0<f.length&&(r=new Qc("onSelect","select",null,r,l),i.push({event:r,listeners:f}),r.target=xa)))}function Jl(i,r){var l={};return l[i.toLowerCase()]=r.toLowerCase(),l["Webkit"+i]="webkit"+r,l["Moz"+i]="moz"+r,l}var ga={animationend:Jl("Animation","AnimationEnd"),animationiteration:Jl("Animation","AnimationIteration"),animationstart:Jl("Animation","AnimationStart"),transitionend:Jl("Transition","TransitionEnd")},cf={},Rm={};c&&(Rm=document.createElement("div").style,"AnimationEvent"in window||(delete ga.animationend.animation,delete ga.animationiteration.animation,delete ga.animationstart.animation),"TransitionEvent"in window||delete ga.transitionend.transition);function eu(i){if(cf[i])return cf[i];if(!ga[i])return i;var r=ga[i],l;for(l in r)if(r.hasOwnProperty(l)&&l in Rm)return cf[i]=r[l];return i}var Pm=eu("animationend"),Dm=eu("animationiteration"),Nm=eu("animationstart"),Lm=eu("transitionend"),Im=new Map,Um="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(i,r){Im.set(i,r),o(r,[i])}for(var ff=0;ff<Um.length;ff++){var df=Um[ff],Ny=df.toLowerCase(),Ly=df[0].toUpperCase()+df.slice(1);Xr(Ny,"on"+Ly)}Xr(Pm,"onAnimationEnd"),Xr(Dm,"onAnimationIteration"),Xr(Nm,"onAnimationStart"),Xr("dblclick","onDoubleClick"),Xr("focusin","onFocus"),Xr("focusout","onBlur"),Xr(Lm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Iy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));function Fm(i,r,l){var f=i.type||"unknown-event";i.currentTarget=l,fa(f,r,void 0,i),i.currentTarget=null}function Om(i,r){r=(r&4)!==0;for(var l=0;l<i.length;l++){var f=i[l],x=f.event;f=f.listeners;e:{var S=void 0;if(r)for(var w=f.length-1;0<=w;w--){var O=f[w],W=O.instance,le=O.currentTarget;if(O=O.listener,W!==S&&x.isPropagationStopped())break e;Fm(x,O,le),S=W}else for(w=0;w<f.length;w++){if(O=f[w],W=O.instance,le=O.currentTarget,O=O.listener,W!==S&&x.isPropagationStopped())break e;Fm(x,O,le),S=W}}}if(Ts)throw i=ua,Ts=!1,ua=null,i}function Ht(i,r){var l=r[yf];l===void 0&&(l=r[yf]=new Set);var f=i+"__bubble";l.has(f)||(km(r,i,2,!1),l.add(f))}function hf(i,r,l){var f=0;r&&(f|=4),km(l,i,f,r)}var tu="_reactListening"+Math.random().toString(36).slice(2);function Uo(i){if(!i[tu]){i[tu]=!0,n.forEach(function(l){l!=="selectionchange"&&(Iy.has(l)||hf(l,!1,i),hf(l,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[tu]||(r[tu]=!0,hf("selectionchange",!1,r))}}function km(i,r,l,f){switch(om(r)){case 1:var x=$v;break;case 4:x=Yv;break;default:x=Yc}l=x.bind(null,r,l,i),x=void 0,!yo||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(x=!0),f?x!==void 0?i.addEventListener(r,l,{capture:!0,passive:x}):i.addEventListener(r,l,!0):x!==void 0?i.addEventListener(r,l,{passive:x}):i.addEventListener(r,l,!1)}function pf(i,r,l,f,x){var S=f;if((r&1)===0&&(r&2)===0&&f!==null)e:for(;;){if(f===null)return;var w=f.tag;if(w===3||w===4){var O=f.stateNode.containerInfo;if(O===x||O.nodeType===8&&O.parentNode===x)break;if(w===4)for(w=f.return;w!==null;){var W=w.tag;if((W===3||W===4)&&(W=w.stateNode.containerInfo,W===x||W.nodeType===8&&W.parentNode===x))return;w=w.return}for(;O!==null;){if(w=bs(O),w===null)return;if(W=w.tag,W===5||W===6){f=S=w;continue e}O=O.parentNode}}f=f.return}ti(function(){var le=S,ye=G(l),Me=[];e:{var _e=Im.get(i);if(_e!==void 0){var ke=Qc,We=i;switch(i){case"keypress":if(Yl(l)===0)break e;case"keydown":case"keyup":ke=cy;break;case"focusin":We="focus",ke=tf;break;case"focusout":We="blur",ke=tf;break;case"beforeblur":case"afterblur":ke=tf;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=Qv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=hy;break;case Pm:case Dm:case Nm:ke=ty;break;case Lm:ke=my;break;case"scroll":ke=Kv;break;case"wheel":ke=gy;break;case"copy":case"cut":case"paste":ke=iy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=dm}var Xe=(r&4)!==0,tn=!Xe&&i==="scroll",Z=Xe?_e!==null?_e+"Capture":null:_e;Xe=[];for(var X=le,ee;X!==null;){ee=X;var Te=ee.stateNode;if(ee.tag===5&&Te!==null&&(ee=Te,Z!==null&&(Te=Mn(X,Z),Te!=null&&Xe.push(Fo(X,Te,ee)))),tn)break;X=X.return}0<Xe.length&&(_e=new ke(_e,We,null,l,ye),Me.push({event:_e,listeners:Xe}))}}if((r&7)===0){e:{if(_e=i==="mouseover"||i==="pointerover",ke=i==="mouseout"||i==="pointerout",_e&&l!==lt&&(We=l.relatedTarget||l.fromElement)&&(bs(We)||We[or]))break e;if((ke||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,ke?(We=l.relatedTarget||l.toElement,ke=le,We=We?bs(We):null,We!==null&&(tn=ji(We),We!==tn||We.tag!==5&&We.tag!==6)&&(We=null)):(ke=null,We=le),ke!==We)){if(Xe=cm,Te="onMouseLeave",Z="onMouseEnter",X="mouse",(i==="pointerout"||i==="pointerover")&&(Xe=dm,Te="onPointerLeave",Z="onPointerEnter",X="pointer"),tn=ke==null?_e:ya(ke),ee=We==null?_e:ya(We),_e=new Xe(Te,X+"leave",ke,l,ye),_e.target=tn,_e.relatedTarget=ee,Te=null,bs(ye)===le&&(Xe=new Xe(Z,X+"enter",We,l,ye),Xe.target=ee,Xe.relatedTarget=tn,Te=Xe),tn=Te,ke&&We)t:{for(Xe=ke,Z=We,X=0,ee=Xe;ee;ee=_a(ee))X++;for(ee=0,Te=Z;Te;Te=_a(Te))ee++;for(;0<X-ee;)Xe=_a(Xe),X--;for(;0<ee-X;)Z=_a(Z),ee--;for(;X--;){if(Xe===Z||Z!==null&&Xe===Z.alternate)break t;Xe=_a(Xe),Z=_a(Z)}Xe=null}else Xe=null;ke!==null&&Bm(Me,_e,ke,Xe,!1),We!==null&&tn!==null&&Bm(Me,tn,We,Xe,!0)}}e:{if(_e=le?ya(le):window,ke=_e.nodeName&&_e.nodeName.toLowerCase(),ke==="select"||ke==="input"&&_e.type==="file")var Ye=wy;else if(_m(_e))if(ym)Ye=Ay;else{Ye=by;var st=Ty}else(ke=_e.nodeName)&&ke.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Ye=Cy);if(Ye&&(Ye=Ye(i,le))){vm(Me,Ye,l,ye);break e}st&&st(i,_e,le),i==="focusout"&&(st=_e._wrapperState)&&st.controlled&&_e.type==="number"&&Be(_e,"number",_e.value)}switch(st=le?ya(le):window,i){case"focusin":(_m(st)||st.contentEditable==="true")&&(xa=st,lf=le,Lo=null);break;case"focusout":Lo=lf=xa=null;break;case"mousedown":uf=!0;break;case"contextmenu":case"mouseup":case"dragend":uf=!1,Am(Me,l,ye);break;case"selectionchange":if(Dy)break;case"keydown":case"keyup":Am(Me,l,ye)}var at;if(rf)e:{switch(i){case"compositionstart":var dt="onCompositionStart";break e;case"compositionend":dt="onCompositionEnd";break e;case"compositionupdate":dt="onCompositionUpdate";break e}dt=void 0}else ma?xm(i,l)&&(dt="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(dt="onCompositionStart");dt&&(hm&&l.locale!=="ko"&&(ma||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&ma&&(at=lm()):(jr=ye,Zc="value"in jr?jr.value:jr.textContent,ma=!0)),st=nu(le,dt),0<st.length&&(dt=new fm(dt,i,null,l,ye),Me.push({event:dt,listeners:st}),at?dt.data=at:(at=gm(l),at!==null&&(dt.data=at)))),(at=vy?yy(i,l):Sy(i,l))&&(le=nu(le,"onBeforeInput"),0<le.length&&(ye=new fm("onBeforeInput","beforeinput",null,l,ye),Me.push({event:ye,listeners:le}),ye.data=at))}Om(Me,r)})}function Fo(i,r,l){return{instance:i,listener:r,currentTarget:l}}function nu(i,r){for(var l=r+"Capture",f=[];i!==null;){var x=i,S=x.stateNode;x.tag===5&&S!==null&&(x=S,S=Mn(i,l),S!=null&&f.unshift(Fo(i,S,x)),S=Mn(i,r),S!=null&&f.push(Fo(i,S,x))),i=i.return}return f}function _a(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Bm(i,r,l,f,x){for(var S=r._reactName,w=[];l!==null&&l!==f;){var O=l,W=O.alternate,le=O.stateNode;if(W!==null&&W===f)break;O.tag===5&&le!==null&&(O=le,x?(W=Mn(l,S),W!=null&&w.unshift(Fo(l,W,O))):x||(W=Mn(l,S),W!=null&&w.push(Fo(l,W,O)))),l=l.return}w.length!==0&&i.push({event:r,listeners:w})}var Uy=/\r\n?/g,Fy=/\u0000|\uFFFD/g;function zm(i){return(typeof i=="string"?i:""+i).replace(Uy,`
`).replace(Fy,"")}function iu(i,r,l){if(r=zm(r),zm(i)!==r&&l)throw Error(t(425))}function ru(){}var mf=null,xf=null;function gf(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var _f=typeof setTimeout=="function"?setTimeout:void 0,Oy=typeof clearTimeout=="function"?clearTimeout:void 0,Vm=typeof Promise=="function"?Promise:void 0,ky=typeof queueMicrotask=="function"?queueMicrotask:typeof Vm<"u"?function(i){return Vm.resolve(null).then(i).catch(By)}:_f;function By(i){setTimeout(function(){throw i})}function vf(i,r){var l=r,f=0;do{var x=l.nextSibling;if(i.removeChild(l),x&&x.nodeType===8)if(l=x.data,l==="/$"){if(f===0){i.removeChild(x),bo(r);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=x}while(l);bo(r)}function qr(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return i}function Hm(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return i;r--}else l==="/$"&&r++}i=i.previousSibling}return null}var va=Math.random().toString(36).slice(2),qi="__reactFiber$"+va,Oo="__reactProps$"+va,or="__reactContainer$"+va,yf="__reactEvents$"+va,zy="__reactListeners$"+va,Vy="__reactHandles$"+va;function bs(i){var r=i[qi];if(r)return r;for(var l=i.parentNode;l;){if(r=l[or]||l[qi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(i=Hm(i);i!==null;){if(l=i[qi])return l;i=Hm(i)}return r}i=l,l=i.parentNode}return null}function ko(i){return i=i[qi]||i[or],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ya(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function su(i){return i[Oo]||null}var Sf=[],Sa=-1;function $r(i){return{current:i}}function Gt(i){0>Sa||(i.current=Sf[Sa],Sf[Sa]=null,Sa--)}function Vt(i,r){Sa++,Sf[Sa]=i.current,i.current=r}var Yr={},Cn=$r(Yr),Hn=$r(!1),Cs=Yr;function Ma(i,r){var l=i.type.contextTypes;if(!l)return Yr;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var x={},S;for(S in l)x[S]=r[S];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=r,i.__reactInternalMemoizedMaskedChildContext=x),x}function Gn(i){return i=i.childContextTypes,i!=null}function au(){Gt(Hn),Gt(Cn)}function Gm(i,r,l){if(Cn.current!==Yr)throw Error(t(168));Vt(Cn,r),Vt(Hn,l)}function Wm(i,r,l){var f=i.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var x in f)if(!(x in r))throw Error(t(108,pe(i)||"Unknown",x));return te({},l,f)}function ou(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Yr,Cs=Cn.current,Vt(Cn,i),Vt(Hn,Hn.current),!0}function jm(i,r,l){var f=i.stateNode;if(!f)throw Error(t(169));l?(i=Wm(i,r,Cs),f.__reactInternalMemoizedMergedChildContext=i,Gt(Hn),Gt(Cn),Vt(Cn,i)):Gt(Hn),Vt(Hn,l)}var lr=null,lu=!1,Mf=!1;function Xm(i){lr===null?lr=[i]:lr.push(i)}function Hy(i){lu=!0,Xm(i)}function Kr(){if(!Mf&&lr!==null){Mf=!0;var i=0,r=mt;try{var l=lr;for(mt=1;i<l.length;i++){var f=l[i];do f=f(!0);while(f!==null)}lr=null,lu=!1}catch(x){throw lr!==null&&(lr=lr.slice(i+1)),Hl(Y,Kr),x}finally{mt=r,Mf=!1}}return null}var Ea=[],wa=0,uu=null,cu=0,_i=[],vi=0,As=null,ur=1,cr="";function Rs(i,r){Ea[wa++]=cu,Ea[wa++]=uu,uu=i,cu=r}function qm(i,r,l){_i[vi++]=ur,_i[vi++]=cr,_i[vi++]=As,As=i;var f=ur;i=cr;var x=32-ut(f)-1;f&=~(1<<x),l+=1;var S=32-ut(r)+x;if(30<S){var w=x-x%5;S=(f&(1<<w)-1).toString(32),f>>=w,x-=w,ur=1<<32-ut(r)+x|l<<x|f,cr=S+i}else ur=1<<S|l<<x|f,cr=i}function Ef(i){i.return!==null&&(Rs(i,1),qm(i,1,0))}function wf(i){for(;i===uu;)uu=Ea[--wa],Ea[wa]=null,cu=Ea[--wa],Ea[wa]=null;for(;i===As;)As=_i[--vi],_i[vi]=null,cr=_i[--vi],_i[vi]=null,ur=_i[--vi],_i[vi]=null}var ri=null,si=null,Xt=!1,Di=null;function $m(i,r){var l=Ei(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=i,r=i.deletions,r===null?(i.deletions=[l],i.flags|=16):r.push(l)}function Ym(i,r){switch(i.tag){case 5:var l=i.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(i.stateNode=r,ri=i,si=qr(r.firstChild),!0):!1;case 6:return r=i.pendingProps===""||r.nodeType!==3?null:r,r!==null?(i.stateNode=r,ri=i,si=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=As!==null?{id:ur,overflow:cr}:null,i.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=Ei(18,null,null,0),l.stateNode=r,l.return=i,i.child=l,ri=i,si=null,!0):!1;default:return!1}}function Tf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function bf(i){if(Xt){var r=si;if(r){var l=r;if(!Ym(i,r)){if(Tf(i))throw Error(t(418));r=qr(l.nextSibling);var f=ri;r&&Ym(i,r)?$m(f,l):(i.flags=i.flags&-4097|2,Xt=!1,ri=i)}}else{if(Tf(i))throw Error(t(418));i.flags=i.flags&-4097|2,Xt=!1,ri=i}}}function Km(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;ri=i}function fu(i){if(i!==ri)return!1;if(!Xt)return Km(i),Xt=!0,!1;var r;if((r=i.tag!==3)&&!(r=i.tag!==5)&&(r=i.type,r=r!=="head"&&r!=="body"&&!gf(i.type,i.memoizedProps)),r&&(r=si)){if(Tf(i))throw Zm(),Error(t(418));for(;r;)$m(i,r),r=qr(r.nextSibling)}if(Km(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(r===0){si=qr(i.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}i=i.nextSibling}si=null}}else si=ri?qr(i.stateNode.nextSibling):null;return!0}function Zm(){for(var i=si;i;)i=qr(i.nextSibling)}function Ta(){si=ri=null,Xt=!1}function Cf(i){Di===null?Di=[i]:Di.push(i)}var Gy=N.ReactCurrentBatchConfig;function Bo(i,r,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,i));var x=f,S=""+i;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===S?r.ref:(r=function(w){var O=x.refs;w===null?delete O[S]:O[S]=w},r._stringRef=S,r)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function du(i,r){throw i=Object.prototype.toString.call(r),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i))}function Qm(i){var r=i._init;return r(i._payload)}function Jm(i){function r(Z,X){if(i){var ee=Z.deletions;ee===null?(Z.deletions=[X],Z.flags|=16):ee.push(X)}}function l(Z,X){if(!i)return null;for(;X!==null;)r(Z,X),X=X.sibling;return null}function f(Z,X){for(Z=new Map;X!==null;)X.key!==null?Z.set(X.key,X):Z.set(X.index,X),X=X.sibling;return Z}function x(Z,X){return Z=rs(Z,X),Z.index=0,Z.sibling=null,Z}function S(Z,X,ee){return Z.index=ee,i?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<X?(Z.flags|=2,X):ee):(Z.flags|=2,X)):(Z.flags|=1048576,X)}function w(Z){return i&&Z.alternate===null&&(Z.flags|=2),Z}function O(Z,X,ee,Te){return X===null||X.tag!==6?(X=_d(ee,Z.mode,Te),X.return=Z,X):(X=x(X,ee),X.return=Z,X)}function W(Z,X,ee,Te){var Ye=ee.type;return Ye===U?ye(Z,X,ee.props.children,Te,ee.key):X!==null&&(X.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ae&&Qm(Ye)===X.type)?(Te=x(X,ee.props),Te.ref=Bo(Z,X,ee),Te.return=Z,Te):(Te=Fu(ee.type,ee.key,ee.props,null,Z.mode,Te),Te.ref=Bo(Z,X,ee),Te.return=Z,Te)}function le(Z,X,ee,Te){return X===null||X.tag!==4||X.stateNode.containerInfo!==ee.containerInfo||X.stateNode.implementation!==ee.implementation?(X=vd(ee,Z.mode,Te),X.return=Z,X):(X=x(X,ee.children||[]),X.return=Z,X)}function ye(Z,X,ee,Te,Ye){return X===null||X.tag!==7?(X=Os(ee,Z.mode,Te,Ye),X.return=Z,X):(X=x(X,ee),X.return=Z,X)}function Me(Z,X,ee){if(typeof X=="string"&&X!==""||typeof X=="number")return X=_d(""+X,Z.mode,ee),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case L:return ee=Fu(X.type,X.key,X.props,null,Z.mode,ee),ee.ref=Bo(Z,null,X),ee.return=Z,ee;case P:return X=vd(X,Z.mode,ee),X.return=Z,X;case ae:var Te=X._init;return Me(Z,Te(X._payload),ee)}if(vt(X)||ue(X))return X=Os(X,Z.mode,ee,null),X.return=Z,X;du(Z,X)}return null}function _e(Z,X,ee,Te){var Ye=X!==null?X.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Ye!==null?null:O(Z,X,""+ee,Te);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case L:return ee.key===Ye?W(Z,X,ee,Te):null;case P:return ee.key===Ye?le(Z,X,ee,Te):null;case ae:return Ye=ee._init,_e(Z,X,Ye(ee._payload),Te)}if(vt(ee)||ue(ee))return Ye!==null?null:ye(Z,X,ee,Te,null);du(Z,ee)}return null}function ke(Z,X,ee,Te,Ye){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Z=Z.get(ee)||null,O(X,Z,""+Te,Ye);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case L:return Z=Z.get(Te.key===null?ee:Te.key)||null,W(X,Z,Te,Ye);case P:return Z=Z.get(Te.key===null?ee:Te.key)||null,le(X,Z,Te,Ye);case ae:var st=Te._init;return ke(Z,X,ee,st(Te._payload),Ye)}if(vt(Te)||ue(Te))return Z=Z.get(ee)||null,ye(X,Z,Te,Ye,null);du(X,Te)}return null}function We(Z,X,ee,Te){for(var Ye=null,st=null,at=X,dt=X=0,vn=null;at!==null&&dt<ee.length;dt++){at.index>dt?(vn=at,at=null):vn=at.sibling;var Pt=_e(Z,at,ee[dt],Te);if(Pt===null){at===null&&(at=vn);break}i&&at&&Pt.alternate===null&&r(Z,at),X=S(Pt,X,dt),st===null?Ye=Pt:st.sibling=Pt,st=Pt,at=vn}if(dt===ee.length)return l(Z,at),Xt&&Rs(Z,dt),Ye;if(at===null){for(;dt<ee.length;dt++)at=Me(Z,ee[dt],Te),at!==null&&(X=S(at,X,dt),st===null?Ye=at:st.sibling=at,st=at);return Xt&&Rs(Z,dt),Ye}for(at=f(Z,at);dt<ee.length;dt++)vn=ke(at,Z,dt,ee[dt],Te),vn!==null&&(i&&vn.alternate!==null&&at.delete(vn.key===null?dt:vn.key),X=S(vn,X,dt),st===null?Ye=vn:st.sibling=vn,st=vn);return i&&at.forEach(function(ss){return r(Z,ss)}),Xt&&Rs(Z,dt),Ye}function Xe(Z,X,ee,Te){var Ye=ue(ee);if(typeof Ye!="function")throw Error(t(150));if(ee=Ye.call(ee),ee==null)throw Error(t(151));for(var st=Ye=null,at=X,dt=X=0,vn=null,Pt=ee.next();at!==null&&!Pt.done;dt++,Pt=ee.next()){at.index>dt?(vn=at,at=null):vn=at.sibling;var ss=_e(Z,at,Pt.value,Te);if(ss===null){at===null&&(at=vn);break}i&&at&&ss.alternate===null&&r(Z,at),X=S(ss,X,dt),st===null?Ye=ss:st.sibling=ss,st=ss,at=vn}if(Pt.done)return l(Z,at),Xt&&Rs(Z,dt),Ye;if(at===null){for(;!Pt.done;dt++,Pt=ee.next())Pt=Me(Z,Pt.value,Te),Pt!==null&&(X=S(Pt,X,dt),st===null?Ye=Pt:st.sibling=Pt,st=Pt);return Xt&&Rs(Z,dt),Ye}for(at=f(Z,at);!Pt.done;dt++,Pt=ee.next())Pt=ke(at,Z,dt,Pt.value,Te),Pt!==null&&(i&&Pt.alternate!==null&&at.delete(Pt.key===null?dt:Pt.key),X=S(Pt,X,dt),st===null?Ye=Pt:st.sibling=Pt,st=Pt);return i&&at.forEach(function(MS){return r(Z,MS)}),Xt&&Rs(Z,dt),Ye}function tn(Z,X,ee,Te){if(typeof ee=="object"&&ee!==null&&ee.type===U&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case L:e:{for(var Ye=ee.key,st=X;st!==null;){if(st.key===Ye){if(Ye=ee.type,Ye===U){if(st.tag===7){l(Z,st.sibling),X=x(st,ee.props.children),X.return=Z,Z=X;break e}}else if(st.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ae&&Qm(Ye)===st.type){l(Z,st.sibling),X=x(st,ee.props),X.ref=Bo(Z,st,ee),X.return=Z,Z=X;break e}l(Z,st);break}else r(Z,st);st=st.sibling}ee.type===U?(X=Os(ee.props.children,Z.mode,Te,ee.key),X.return=Z,Z=X):(Te=Fu(ee.type,ee.key,ee.props,null,Z.mode,Te),Te.ref=Bo(Z,X,ee),Te.return=Z,Z=Te)}return w(Z);case P:e:{for(st=ee.key;X!==null;){if(X.key===st)if(X.tag===4&&X.stateNode.containerInfo===ee.containerInfo&&X.stateNode.implementation===ee.implementation){l(Z,X.sibling),X=x(X,ee.children||[]),X.return=Z,Z=X;break e}else{l(Z,X);break}else r(Z,X);X=X.sibling}X=vd(ee,Z.mode,Te),X.return=Z,Z=X}return w(Z);case ae:return st=ee._init,tn(Z,X,st(ee._payload),Te)}if(vt(ee))return We(Z,X,ee,Te);if(ue(ee))return Xe(Z,X,ee,Te);du(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,X!==null&&X.tag===6?(l(Z,X.sibling),X=x(X,ee),X.return=Z,Z=X):(l(Z,X),X=_d(ee,Z.mode,Te),X.return=Z,Z=X),w(Z)):l(Z,X)}return tn}var ba=Jm(!0),e0=Jm(!1),hu=$r(null),pu=null,Ca=null,Af=null;function Rf(){Af=Ca=pu=null}function Pf(i){var r=hu.current;Gt(hu),i._currentValue=r}function Df(i,r,l){for(;i!==null;){var f=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),i===l)break;i=i.return}}function Aa(i,r){pu=i,Af=Ca=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&r)!==0&&(Wn=!0),i.firstContext=null)}function yi(i){var r=i._currentValue;if(Af!==i)if(i={context:i,memoizedValue:r,next:null},Ca===null){if(pu===null)throw Error(t(308));Ca=i,pu.dependencies={lanes:0,firstContext:i}}else Ca=Ca.next=i;return r}var Ps=null;function Nf(i){Ps===null?Ps=[i]:Ps.push(i)}function t0(i,r,l,f){var x=r.interleaved;return x===null?(l.next=l,Nf(r)):(l.next=x.next,x.next=l),r.interleaved=l,fr(i,f)}function fr(i,r){i.lanes|=r;var l=i.alternate;for(l!==null&&(l.lanes|=r),l=i,i=i.return;i!==null;)i.childLanes|=r,l=i.alternate,l!==null&&(l.childLanes|=r),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Zr=!1;function Lf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function n0(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function dr(i,r){return{eventTime:i,lane:r,tag:0,payload:null,callback:null,next:null}}function Qr(i,r,l){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(bt&2)!==0){var x=f.pending;return x===null?r.next=r:(r.next=x.next,x.next=r),f.pending=r,fr(i,l)}return x=f.interleaved,x===null?(r.next=r,Nf(f)):(r.next=x.next,x.next=r),f.interleaved=r,fr(i,l)}function mu(i,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var f=r.lanes;f&=i.pendingLanes,l|=f,r.lanes=l,fn(i,l)}}function i0(i,r){var l=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var x=null,S=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};S===null?x=S=w:S=S.next=w,l=l.next}while(l!==null);S===null?x=S=r:S=S.next=r}else x=S=r;l={baseState:f.baseState,firstBaseUpdate:x,lastBaseUpdate:S,shared:f.shared,effects:f.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=r:i.next=r,l.lastBaseUpdate=r}function xu(i,r,l,f){var x=i.updateQueue;Zr=!1;var S=x.firstBaseUpdate,w=x.lastBaseUpdate,O=x.shared.pending;if(O!==null){x.shared.pending=null;var W=O,le=W.next;W.next=null,w===null?S=le:w.next=le,w=W;var ye=i.alternate;ye!==null&&(ye=ye.updateQueue,O=ye.lastBaseUpdate,O!==w&&(O===null?ye.firstBaseUpdate=le:O.next=le,ye.lastBaseUpdate=W))}if(S!==null){var Me=x.baseState;w=0,ye=le=W=null,O=S;do{var _e=O.lane,ke=O.eventTime;if((f&_e)===_e){ye!==null&&(ye=ye.next={eventTime:ke,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var We=i,Xe=O;switch(_e=r,ke=l,Xe.tag){case 1:if(We=Xe.payload,typeof We=="function"){Me=We.call(ke,Me,_e);break e}Me=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=Xe.payload,_e=typeof We=="function"?We.call(ke,Me,_e):We,_e==null)break e;Me=te({},Me,_e);break e;case 2:Zr=!0}}O.callback!==null&&O.lane!==0&&(i.flags|=64,_e=x.effects,_e===null?x.effects=[O]:_e.push(O))}else ke={eventTime:ke,lane:_e,tag:O.tag,payload:O.payload,callback:O.callback,next:null},ye===null?(le=ye=ke,W=Me):ye=ye.next=ke,w|=_e;if(O=O.next,O===null){if(O=x.shared.pending,O===null)break;_e=O,O=_e.next,_e.next=null,x.lastBaseUpdate=_e,x.shared.pending=null}}while(!0);if(ye===null&&(W=Me),x.baseState=W,x.firstBaseUpdate=le,x.lastBaseUpdate=ye,r=x.shared.interleaved,r!==null){x=r;do w|=x.lane,x=x.next;while(x!==r)}else S===null&&(x.shared.lanes=0);Ls|=w,i.lanes=w,i.memoizedState=Me}}function r0(i,r,l){if(i=r.effects,r.effects=null,i!==null)for(r=0;r<i.length;r++){var f=i[r],x=f.callback;if(x!==null){if(f.callback=null,f=l,typeof x!="function")throw Error(t(191,x));x.call(f)}}}var zo={},$i=$r(zo),Vo=$r(zo),Ho=$r(zo);function Ds(i){if(i===zo)throw Error(t(174));return i}function If(i,r){switch(Vt(Ho,r),Vt(Vo,i),Vt($i,zo),i=r.nodeType,i){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ge(null,"");break;default:i=i===8?r.parentNode:r,r=i.namespaceURI||null,i=i.tagName,r=ge(r,i)}Gt($i),Vt($i,r)}function Ra(){Gt($i),Gt(Vo),Gt(Ho)}function s0(i){Ds(Ho.current);var r=Ds($i.current),l=ge(r,i.type);r!==l&&(Vt(Vo,i),Vt($i,l))}function Uf(i){Vo.current===i&&(Gt($i),Gt(Vo))}var $t=$r(0);function gu(i){for(var r=i;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ff=[];function Of(){for(var i=0;i<Ff.length;i++)Ff[i]._workInProgressVersionPrimary=null;Ff.length=0}var _u=N.ReactCurrentDispatcher,kf=N.ReactCurrentBatchConfig,Ns=0,Yt=null,dn=null,gn=null,vu=!1,Go=!1,Wo=0,Wy=0;function An(){throw Error(t(321))}function Bf(i,r){if(r===null)return!1;for(var l=0;l<r.length&&l<i.length;l++)if(!Pi(i[l],r[l]))return!1;return!0}function zf(i,r,l,f,x,S){if(Ns=S,Yt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,_u.current=i===null||i.memoizedState===null?$y:Yy,i=l(f,x),Go){S=0;do{if(Go=!1,Wo=0,25<=S)throw Error(t(301));S+=1,gn=dn=null,r.updateQueue=null,_u.current=Ky,i=l(f,x)}while(Go)}if(_u.current=Mu,r=dn!==null&&dn.next!==null,Ns=0,gn=dn=Yt=null,vu=!1,r)throw Error(t(300));return i}function Vf(){var i=Wo!==0;return Wo=0,i}function Yi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Yt.memoizedState=gn=i:gn=gn.next=i,gn}function Si(){if(dn===null){var i=Yt.alternate;i=i!==null?i.memoizedState:null}else i=dn.next;var r=gn===null?Yt.memoizedState:gn.next;if(r!==null)gn=r,dn=i;else{if(i===null)throw Error(t(310));dn=i,i={memoizedState:dn.memoizedState,baseState:dn.baseState,baseQueue:dn.baseQueue,queue:dn.queue,next:null},gn===null?Yt.memoizedState=gn=i:gn=gn.next=i}return gn}function jo(i,r){return typeof r=="function"?r(i):r}function Hf(i){var r=Si(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=dn,x=f.baseQueue,S=l.pending;if(S!==null){if(x!==null){var w=x.next;x.next=S.next,S.next=w}f.baseQueue=x=S,l.pending=null}if(x!==null){S=x.next,f=f.baseState;var O=w=null,W=null,le=S;do{var ye=le.lane;if((Ns&ye)===ye)W!==null&&(W=W.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),f=le.hasEagerState?le.eagerState:i(f,le.action);else{var Me={lane:ye,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};W===null?(O=W=Me,w=f):W=W.next=Me,Yt.lanes|=ye,Ls|=ye}le=le.next}while(le!==null&&le!==S);W===null?w=f:W.next=O,Pi(f,r.memoizedState)||(Wn=!0),r.memoizedState=f,r.baseState=w,r.baseQueue=W,l.lastRenderedState=f}if(i=l.interleaved,i!==null){x=i;do S=x.lane,Yt.lanes|=S,Ls|=S,x=x.next;while(x!==i)}else x===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Gf(i){var r=Si(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=l.dispatch,x=l.pending,S=r.memoizedState;if(x!==null){l.pending=null;var w=x=x.next;do S=i(S,w.action),w=w.next;while(w!==x);Pi(S,r.memoizedState)||(Wn=!0),r.memoizedState=S,r.baseQueue===null&&(r.baseState=S),l.lastRenderedState=S}return[S,f]}function a0(){}function o0(i,r){var l=Yt,f=Si(),x=r(),S=!Pi(f.memoizedState,x);if(S&&(f.memoizedState=x,Wn=!0),f=f.queue,Wf(c0.bind(null,l,f,i),[i]),f.getSnapshot!==r||S||gn!==null&&gn.memoizedState.tag&1){if(l.flags|=2048,Xo(9,u0.bind(null,l,f,x,r),void 0,null),_n===null)throw Error(t(349));(Ns&30)!==0||l0(l,r,x)}return x}function l0(i,r,l){i.flags|=16384,i={getSnapshot:r,value:l},r=Yt.updateQueue,r===null?(r={lastEffect:null,stores:null},Yt.updateQueue=r,r.stores=[i]):(l=r.stores,l===null?r.stores=[i]:l.push(i))}function u0(i,r,l,f){r.value=l,r.getSnapshot=f,f0(r)&&d0(i)}function c0(i,r,l){return l(function(){f0(r)&&d0(i)})}function f0(i){var r=i.getSnapshot;i=i.value;try{var l=r();return!Pi(i,l)}catch{return!0}}function d0(i){var r=fr(i,1);r!==null&&Ui(r,i,1,-1)}function h0(i){var r=Yi();return typeof i=="function"&&(i=i()),r.memoizedState=r.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:i},r.queue=i,i=i.dispatch=qy.bind(null,Yt,i),[r.memoizedState,i]}function Xo(i,r,l,f){return i={tag:i,create:r,destroy:l,deps:f,next:null},r=Yt.updateQueue,r===null?(r={lastEffect:null,stores:null},Yt.updateQueue=r,r.lastEffect=i.next=i):(l=r.lastEffect,l===null?r.lastEffect=i.next=i:(f=l.next,l.next=i,i.next=f,r.lastEffect=i)),i}function p0(){return Si().memoizedState}function yu(i,r,l,f){var x=Yi();Yt.flags|=i,x.memoizedState=Xo(1|r,l,void 0,f===void 0?null:f)}function Su(i,r,l,f){var x=Si();f=f===void 0?null:f;var S=void 0;if(dn!==null){var w=dn.memoizedState;if(S=w.destroy,f!==null&&Bf(f,w.deps)){x.memoizedState=Xo(r,l,S,f);return}}Yt.flags|=i,x.memoizedState=Xo(1|r,l,S,f)}function m0(i,r){return yu(8390656,8,i,r)}function Wf(i,r){return Su(2048,8,i,r)}function x0(i,r){return Su(4,2,i,r)}function g0(i,r){return Su(4,4,i,r)}function _0(i,r){if(typeof r=="function")return i=i(),r(i),function(){r(null)};if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function v0(i,r,l){return l=l!=null?l.concat([i]):null,Su(4,4,_0.bind(null,r,i),l)}function jf(){}function y0(i,r){var l=Si();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&Bf(r,f[1])?f[0]:(l.memoizedState=[i,r],i)}function S0(i,r){var l=Si();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&Bf(r,f[1])?f[0]:(i=i(),l.memoizedState=[i,r],i)}function M0(i,r,l){return(Ns&21)===0?(i.baseState&&(i.baseState=!1,Wn=!0),i.memoizedState=l):(Pi(l,r)||(l=zr(),Yt.lanes|=l,Ls|=l,i.baseState=!0),r)}function jy(i,r){var l=mt;mt=l!==0&&4>l?l:4,i(!0);var f=kf.transition;kf.transition={};try{i(!1),r()}finally{mt=l,kf.transition=f}}function E0(){return Si().memoizedState}function Xy(i,r,l){var f=ns(i);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},w0(i))T0(r,l);else if(l=t0(i,r,l,f),l!==null){var x=On();Ui(l,i,f,x),b0(l,r,f)}}function qy(i,r,l){var f=ns(i),x={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(w0(i))T0(r,x);else{var S=i.alternate;if(i.lanes===0&&(S===null||S.lanes===0)&&(S=r.lastRenderedReducer,S!==null))try{var w=r.lastRenderedState,O=S(w,l);if(x.hasEagerState=!0,x.eagerState=O,Pi(O,w)){var W=r.interleaved;W===null?(x.next=x,Nf(r)):(x.next=W.next,W.next=x),r.interleaved=x;return}}catch{}finally{}l=t0(i,r,x,f),l!==null&&(x=On(),Ui(l,i,f,x),b0(l,r,f))}}function w0(i){var r=i.alternate;return i===Yt||r!==null&&r===Yt}function T0(i,r){Go=vu=!0;var l=i.pending;l===null?r.next=r:(r.next=l.next,l.next=r),i.pending=r}function b0(i,r,l){if((l&4194240)!==0){var f=r.lanes;f&=i.pendingLanes,l|=f,r.lanes=l,fn(i,l)}}var Mu={readContext:yi,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useInsertionEffect:An,useLayoutEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useMutableSource:An,useSyncExternalStore:An,useId:An,unstable_isNewReconciler:!1},$y={readContext:yi,useCallback:function(i,r){return Yi().memoizedState=[i,r===void 0?null:r],i},useContext:yi,useEffect:m0,useImperativeHandle:function(i,r,l){return l=l!=null?l.concat([i]):null,yu(4194308,4,_0.bind(null,r,i),l)},useLayoutEffect:function(i,r){return yu(4194308,4,i,r)},useInsertionEffect:function(i,r){return yu(4,2,i,r)},useMemo:function(i,r){var l=Yi();return r=r===void 0?null:r,i=i(),l.memoizedState=[i,r],i},useReducer:function(i,r,l){var f=Yi();return r=l!==void 0?l(r):r,f.memoizedState=f.baseState=r,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:r},f.queue=i,i=i.dispatch=Xy.bind(null,Yt,i),[f.memoizedState,i]},useRef:function(i){var r=Yi();return i={current:i},r.memoizedState=i},useState:h0,useDebugValue:jf,useDeferredValue:function(i){return Yi().memoizedState=i},useTransition:function(){var i=h0(!1),r=i[0];return i=jy.bind(null,i[1]),Yi().memoizedState=i,[r,i]},useMutableSource:function(){},useSyncExternalStore:function(i,r,l){var f=Yt,x=Yi();if(Xt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),_n===null)throw Error(t(349));(Ns&30)!==0||l0(f,r,l)}x.memoizedState=l;var S={value:l,getSnapshot:r};return x.queue=S,m0(c0.bind(null,f,S,i),[i]),f.flags|=2048,Xo(9,u0.bind(null,f,S,l,r),void 0,null),l},useId:function(){var i=Yi(),r=_n.identifierPrefix;if(Xt){var l=cr,f=ur;l=(f&~(1<<32-ut(f)-1)).toString(32)+l,r=":"+r+"R"+l,l=Wo++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Wy++,r=":"+r+"r"+l.toString(32)+":";return i.memoizedState=r},unstable_isNewReconciler:!1},Yy={readContext:yi,useCallback:y0,useContext:yi,useEffect:Wf,useImperativeHandle:v0,useInsertionEffect:x0,useLayoutEffect:g0,useMemo:S0,useReducer:Hf,useRef:p0,useState:function(){return Hf(jo)},useDebugValue:jf,useDeferredValue:function(i){var r=Si();return M0(r,dn.memoizedState,i)},useTransition:function(){var i=Hf(jo)[0],r=Si().memoizedState;return[i,r]},useMutableSource:a0,useSyncExternalStore:o0,useId:E0,unstable_isNewReconciler:!1},Ky={readContext:yi,useCallback:y0,useContext:yi,useEffect:Wf,useImperativeHandle:v0,useInsertionEffect:x0,useLayoutEffect:g0,useMemo:S0,useReducer:Gf,useRef:p0,useState:function(){return Gf(jo)},useDebugValue:jf,useDeferredValue:function(i){var r=Si();return dn===null?r.memoizedState=i:M0(r,dn.memoizedState,i)},useTransition:function(){var i=Gf(jo)[0],r=Si().memoizedState;return[i,r]},useMutableSource:a0,useSyncExternalStore:o0,useId:E0,unstable_isNewReconciler:!1};function Ni(i,r){if(i&&i.defaultProps){r=te({},r),i=i.defaultProps;for(var l in i)r[l]===void 0&&(r[l]=i[l]);return r}return r}function Xf(i,r,l,f){r=i.memoizedState,l=l(f,r),l=l==null?r:te({},r,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Eu={isMounted:function(i){return(i=i._reactInternals)?ji(i)===i:!1},enqueueSetState:function(i,r,l){i=i._reactInternals;var f=On(),x=ns(i),S=dr(f,x);S.payload=r,l!=null&&(S.callback=l),r=Qr(i,S,x),r!==null&&(Ui(r,i,x,f),mu(r,i,x))},enqueueReplaceState:function(i,r,l){i=i._reactInternals;var f=On(),x=ns(i),S=dr(f,x);S.tag=1,S.payload=r,l!=null&&(S.callback=l),r=Qr(i,S,x),r!==null&&(Ui(r,i,x,f),mu(r,i,x))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var l=On(),f=ns(i),x=dr(l,f);x.tag=2,r!=null&&(x.callback=r),r=Qr(i,x,f),r!==null&&(Ui(r,i,f,l),mu(r,i,f))}};function C0(i,r,l,f,x,S,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,S,w):r.prototype&&r.prototype.isPureReactComponent?!No(l,f)||!No(x,S):!0}function A0(i,r,l){var f=!1,x=Yr,S=r.contextType;return typeof S=="object"&&S!==null?S=yi(S):(x=Gn(r)?Cs:Cn.current,f=r.contextTypes,S=(f=f!=null)?Ma(i,x):Yr),r=new r(l,S),i.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Eu,i.stateNode=r,r._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=x,i.__reactInternalMemoizedMaskedChildContext=S),r}function R0(i,r,l,f){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,f),r.state!==i&&Eu.enqueueReplaceState(r,r.state,null)}function qf(i,r,l,f){var x=i.stateNode;x.props=l,x.state=i.memoizedState,x.refs={},Lf(i);var S=r.contextType;typeof S=="object"&&S!==null?x.context=yi(S):(S=Gn(r)?Cs:Cn.current,x.context=Ma(i,S)),x.state=i.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(Xf(i,r,S,l),x.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof x.getSnapshotBeforeUpdate=="function"||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(r=x.state,typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount(),r!==x.state&&Eu.enqueueReplaceState(x,x.state,null),xu(i,l,x,f),x.state=i.memoizedState),typeof x.componentDidMount=="function"&&(i.flags|=4194308)}function Pa(i,r){try{var l="",f=r;do l+=Fe(f),f=f.return;while(f);var x=l}catch(S){x=`
Error generating stack: `+S.message+`
`+S.stack}return{value:i,source:r,stack:x,digest:null}}function $f(i,r,l){return{value:i,source:null,stack:l??null,digest:r??null}}function Yf(i,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var Zy=typeof WeakMap=="function"?WeakMap:Map;function P0(i,r,l){l=dr(-1,l),l.tag=3,l.payload={element:null};var f=r.value;return l.callback=function(){Pu||(Pu=!0,cd=f),Yf(i,r)},l}function D0(i,r,l){l=dr(-1,l),l.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var x=r.value;l.payload=function(){return f(x)},l.callback=function(){Yf(i,r)}}var S=i.stateNode;return S!==null&&typeof S.componentDidCatch=="function"&&(l.callback=function(){Yf(i,r),typeof f!="function"&&(es===null?es=new Set([this]):es.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})}),l}function N0(i,r,l){var f=i.pingCache;if(f===null){f=i.pingCache=new Zy;var x=new Set;f.set(r,x)}else x=f.get(r),x===void 0&&(x=new Set,f.set(r,x));x.has(l)||(x.add(l),i=fS.bind(null,i,r,l),r.then(i,i))}function L0(i){do{var r;if((r=i.tag===13)&&(r=i.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return i;i=i.return}while(i!==null);return null}function I0(i,r,l,f,x){return(i.mode&1)===0?(i===r?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=dr(-1,1),r.tag=2,Qr(l,r,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=x,i)}var Qy=N.ReactCurrentOwner,Wn=!1;function Fn(i,r,l,f){r.child=i===null?e0(r,null,l,f):ba(r,i.child,l,f)}function U0(i,r,l,f,x){l=l.render;var S=r.ref;return Aa(r,x),f=zf(i,r,l,f,S,x),l=Vf(),i!==null&&!Wn?(r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~x,hr(i,r,x)):(Xt&&l&&Ef(r),r.flags|=1,Fn(i,r,f,x),r.child)}function F0(i,r,l,f,x){if(i===null){var S=l.type;return typeof S=="function"&&!gd(S)&&S.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=S,O0(i,r,S,f,x)):(i=Fu(l.type,null,f,r,r.mode,x),i.ref=r.ref,i.return=r,r.child=i)}if(S=i.child,(i.lanes&x)===0){var w=S.memoizedProps;if(l=l.compare,l=l!==null?l:No,l(w,f)&&i.ref===r.ref)return hr(i,r,x)}return r.flags|=1,i=rs(S,f),i.ref=r.ref,i.return=r,r.child=i}function O0(i,r,l,f,x){if(i!==null){var S=i.memoizedProps;if(No(S,f)&&i.ref===r.ref)if(Wn=!1,r.pendingProps=f=S,(i.lanes&x)!==0)(i.flags&131072)!==0&&(Wn=!0);else return r.lanes=i.lanes,hr(i,r,x)}return Kf(i,r,l,f,x)}function k0(i,r,l){var f=r.pendingProps,x=f.children,S=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(Na,ai),ai|=l;else{if((l&1073741824)===0)return i=S!==null?S.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:i,cachePool:null,transitions:null},r.updateQueue=null,Vt(Na,ai),ai|=i,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=S!==null?S.baseLanes:l,Vt(Na,ai),ai|=f}else S!==null?(f=S.baseLanes|l,r.memoizedState=null):f=l,Vt(Na,ai),ai|=f;return Fn(i,r,x,l),r.child}function B0(i,r){var l=r.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Kf(i,r,l,f,x){var S=Gn(l)?Cs:Cn.current;return S=Ma(r,S),Aa(r,x),l=zf(i,r,l,f,S,x),f=Vf(),i!==null&&!Wn?(r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~x,hr(i,r,x)):(Xt&&f&&Ef(r),r.flags|=1,Fn(i,r,l,x),r.child)}function z0(i,r,l,f,x){if(Gn(l)){var S=!0;ou(r)}else S=!1;if(Aa(r,x),r.stateNode===null)Tu(i,r),A0(r,l,f),qf(r,l,f,x),f=!0;else if(i===null){var w=r.stateNode,O=r.memoizedProps;w.props=O;var W=w.context,le=l.contextType;typeof le=="object"&&le!==null?le=yi(le):(le=Gn(l)?Cs:Cn.current,le=Ma(r,le));var ye=l.getDerivedStateFromProps,Me=typeof ye=="function"||typeof w.getSnapshotBeforeUpdate=="function";Me||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==f||W!==le)&&R0(r,w,f,le),Zr=!1;var _e=r.memoizedState;w.state=_e,xu(r,f,w,x),W=r.memoizedState,O!==f||_e!==W||Hn.current||Zr?(typeof ye=="function"&&(Xf(r,l,ye,f),W=r.memoizedState),(O=Zr||C0(r,l,O,f,_e,W,le))?(Me||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(r.flags|=4194308)):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=W),w.props=f,w.state=W,w.context=le,f=O):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{w=r.stateNode,n0(i,r),O=r.memoizedProps,le=r.type===r.elementType?O:Ni(r.type,O),w.props=le,Me=r.pendingProps,_e=w.context,W=l.contextType,typeof W=="object"&&W!==null?W=yi(W):(W=Gn(l)?Cs:Cn.current,W=Ma(r,W));var ke=l.getDerivedStateFromProps;(ye=typeof ke=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==Me||_e!==W)&&R0(r,w,f,W),Zr=!1,_e=r.memoizedState,w.state=_e,xu(r,f,w,x);var We=r.memoizedState;O!==Me||_e!==We||Hn.current||Zr?(typeof ke=="function"&&(Xf(r,l,ke,f),We=r.memoizedState),(le=Zr||C0(r,l,le,f,_e,We,W)||!1)?(ye||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(f,We,W),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(f,We,W)),typeof w.componentDidUpdate=="function"&&(r.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof w.componentDidUpdate!="function"||O===i.memoizedProps&&_e===i.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===i.memoizedProps&&_e===i.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=We),w.props=f,w.state=We,w.context=W,f=le):(typeof w.componentDidUpdate!="function"||O===i.memoizedProps&&_e===i.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===i.memoizedProps&&_e===i.memoizedState||(r.flags|=1024),f=!1)}return Zf(i,r,l,f,S,x)}function Zf(i,r,l,f,x,S){B0(i,r);var w=(r.flags&128)!==0;if(!f&&!w)return x&&jm(r,l,!1),hr(i,r,S);f=r.stateNode,Qy.current=r;var O=w&&typeof l.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,i!==null&&w?(r.child=ba(r,i.child,null,S),r.child=ba(r,null,O,S)):Fn(i,r,O,S),r.memoizedState=f.state,x&&jm(r,l,!0),r.child}function V0(i){var r=i.stateNode;r.pendingContext?Gm(i,r.pendingContext,r.pendingContext!==r.context):r.context&&Gm(i,r.context,!1),If(i,r.containerInfo)}function H0(i,r,l,f,x){return Ta(),Cf(x),r.flags|=256,Fn(i,r,l,f),r.child}var Qf={dehydrated:null,treeContext:null,retryLane:0};function Jf(i){return{baseLanes:i,cachePool:null,transitions:null}}function G0(i,r,l){var f=r.pendingProps,x=$t.current,S=!1,w=(r.flags&128)!==0,O;if((O=w)||(O=i!==null&&i.memoizedState===null?!1:(x&2)!==0),O?(S=!0,r.flags&=-129):(i===null||i.memoizedState!==null)&&(x|=1),Vt($t,x&1),i===null)return bf(r),i=r.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((r.mode&1)===0?r.lanes=1:i.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(w=f.children,i=f.fallback,S?(f=r.mode,S=r.child,w={mode:"hidden",children:w},(f&1)===0&&S!==null?(S.childLanes=0,S.pendingProps=w):S=Ou(w,f,0,null),i=Os(i,f,l,null),S.return=r,i.return=r,S.sibling=i,r.child=S,r.child.memoizedState=Jf(l),r.memoizedState=Qf,i):ed(r,w));if(x=i.memoizedState,x!==null&&(O=x.dehydrated,O!==null))return Jy(i,r,w,f,O,x,l);if(S){S=f.fallback,w=r.mode,x=i.child,O=x.sibling;var W={mode:"hidden",children:f.children};return(w&1)===0&&r.child!==x?(f=r.child,f.childLanes=0,f.pendingProps=W,r.deletions=null):(f=rs(x,W),f.subtreeFlags=x.subtreeFlags&14680064),O!==null?S=rs(O,S):(S=Os(S,w,l,null),S.flags|=2),S.return=r,f.return=r,f.sibling=S,r.child=f,f=S,S=r.child,w=i.child.memoizedState,w=w===null?Jf(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},S.memoizedState=w,S.childLanes=i.childLanes&~l,r.memoizedState=Qf,f}return S=i.child,i=S.sibling,f=rs(S,{mode:"visible",children:f.children}),(r.mode&1)===0&&(f.lanes=l),f.return=r,f.sibling=null,i!==null&&(l=r.deletions,l===null?(r.deletions=[i],r.flags|=16):l.push(i)),r.child=f,r.memoizedState=null,f}function ed(i,r){return r=Ou({mode:"visible",children:r},i.mode,0,null),r.return=i,i.child=r}function wu(i,r,l,f){return f!==null&&Cf(f),ba(r,i.child,null,l),i=ed(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function Jy(i,r,l,f,x,S,w){if(l)return r.flags&256?(r.flags&=-257,f=$f(Error(t(422))),wu(i,r,w,f)):r.memoizedState!==null?(r.child=i.child,r.flags|=128,null):(S=f.fallback,x=r.mode,f=Ou({mode:"visible",children:f.children},x,0,null),S=Os(S,x,w,null),S.flags|=2,f.return=r,S.return=r,f.sibling=S,r.child=f,(r.mode&1)!==0&&ba(r,i.child,null,w),r.child.memoizedState=Jf(w),r.memoizedState=Qf,S);if((r.mode&1)===0)return wu(i,r,w,null);if(x.data==="$!"){if(f=x.nextSibling&&x.nextSibling.dataset,f)var O=f.dgst;return f=O,S=Error(t(419)),f=$f(S,f,void 0),wu(i,r,w,f)}if(O=(w&i.childLanes)!==0,Wn||O){if(f=_n,f!==null){switch(w&-w){case 4:x=2;break;case 16:x=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:x=32;break;case 536870912:x=268435456;break;default:x=0}x=(x&(f.suspendedLanes|w))!==0?0:x,x!==0&&x!==S.retryLane&&(S.retryLane=x,fr(i,x),Ui(f,i,x,-1))}return xd(),f=$f(Error(t(421))),wu(i,r,w,f)}return x.data==="$?"?(r.flags|=128,r.child=i.child,r=dS.bind(null,i),x._reactRetry=r,null):(i=S.treeContext,si=qr(x.nextSibling),ri=r,Xt=!0,Di=null,i!==null&&(_i[vi++]=ur,_i[vi++]=cr,_i[vi++]=As,ur=i.id,cr=i.overflow,As=r),r=ed(r,f.children),r.flags|=4096,r)}function W0(i,r,l){i.lanes|=r;var f=i.alternate;f!==null&&(f.lanes|=r),Df(i.return,r,l)}function td(i,r,l,f,x){var S=i.memoizedState;S===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:x}:(S.isBackwards=r,S.rendering=null,S.renderingStartTime=0,S.last=f,S.tail=l,S.tailMode=x)}function j0(i,r,l){var f=r.pendingProps,x=f.revealOrder,S=f.tail;if(Fn(i,r,f.children,l),f=$t.current,(f&2)!==0)f=f&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&W0(i,l,r);else if(i.tag===19)W0(i,l,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Vt($t,f),(r.mode&1)===0)r.memoizedState=null;else switch(x){case"forwards":for(l=r.child,x=null;l!==null;)i=l.alternate,i!==null&&gu(i)===null&&(x=l),l=l.sibling;l=x,l===null?(x=r.child,r.child=null):(x=l.sibling,l.sibling=null),td(r,!1,x,l,S);break;case"backwards":for(l=null,x=r.child,r.child=null;x!==null;){if(i=x.alternate,i!==null&&gu(i)===null){r.child=x;break}i=x.sibling,x.sibling=l,l=x,x=i}td(r,!0,l,null,S);break;case"together":td(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Tu(i,r){(r.mode&1)===0&&i!==null&&(i.alternate=null,r.alternate=null,r.flags|=2)}function hr(i,r,l){if(i!==null&&(r.dependencies=i.dependencies),Ls|=r.lanes,(l&r.childLanes)===0)return null;if(i!==null&&r.child!==i.child)throw Error(t(153));if(r.child!==null){for(i=r.child,l=rs(i,i.pendingProps),r.child=l,l.return=r;i.sibling!==null;)i=i.sibling,l=l.sibling=rs(i,i.pendingProps),l.return=r;l.sibling=null}return r.child}function eS(i,r,l){switch(r.tag){case 3:V0(r),Ta();break;case 5:s0(r);break;case 1:Gn(r.type)&&ou(r);break;case 4:If(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,x=r.memoizedProps.value;Vt(hu,f._currentValue),f._currentValue=x;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?(Vt($t,$t.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?G0(i,r,l):(Vt($t,$t.current&1),i=hr(i,r,l),i!==null?i.sibling:null);Vt($t,$t.current&1);break;case 19:if(f=(l&r.childLanes)!==0,(i.flags&128)!==0){if(f)return j0(i,r,l);r.flags|=128}if(x=r.memoizedState,x!==null&&(x.rendering=null,x.tail=null,x.lastEffect=null),Vt($t,$t.current),f)break;return null;case 22:case 23:return r.lanes=0,k0(i,r,l)}return hr(i,r,l)}var X0,nd,q0,$0;X0=function(i,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},nd=function(){},q0=function(i,r,l,f){var x=i.memoizedProps;if(x!==f){i=r.stateNode,Ds($i.current);var S=null;switch(l){case"input":x=ht(i,x),f=ht(i,f),S=[];break;case"select":x=te({},x,{value:void 0}),f=te({},f,{value:void 0}),S=[];break;case"textarea":x=ct(i,x),f=ct(i,f),S=[];break;default:typeof x.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=ru)}nt(l,f);var w;l=null;for(le in x)if(!f.hasOwnProperty(le)&&x.hasOwnProperty(le)&&x[le]!=null)if(le==="style"){var O=x[le];for(w in O)O.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(a.hasOwnProperty(le)?S||(S=[]):(S=S||[]).push(le,null));for(le in f){var W=f[le];if(O=x?.[le],f.hasOwnProperty(le)&&W!==O&&(W!=null||O!=null))if(le==="style")if(O){for(w in O)!O.hasOwnProperty(w)||W&&W.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in W)W.hasOwnProperty(w)&&O[w]!==W[w]&&(l||(l={}),l[w]=W[w])}else l||(S||(S=[]),S.push(le,l)),l=W;else le==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,O=O?O.__html:void 0,W!=null&&O!==W&&(S=S||[]).push(le,W)):le==="children"?typeof W!="string"&&typeof W!="number"||(S=S||[]).push(le,""+W):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(a.hasOwnProperty(le)?(W!=null&&le==="onScroll"&&Ht("scroll",i),S||O===W||(S=[])):(S=S||[]).push(le,W))}l&&(S=S||[]).push("style",l);var le=S;(r.updateQueue=le)&&(r.flags|=4)}},$0=function(i,r,l,f){l!==f&&(r.flags|=4)};function qo(i,r){if(!Xt)switch(i.tailMode){case"hidden":r=i.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function Rn(i){var r=i.alternate!==null&&i.alternate.child===i.child,l=0,f=0;if(r)for(var x=i.child;x!==null;)l|=x.lanes|x.childLanes,f|=x.subtreeFlags&14680064,f|=x.flags&14680064,x.return=i,x=x.sibling;else for(x=i.child;x!==null;)l|=x.lanes|x.childLanes,f|=x.subtreeFlags,f|=x.flags,x.return=i,x=x.sibling;return i.subtreeFlags|=f,i.childLanes=l,r}function tS(i,r,l){var f=r.pendingProps;switch(wf(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(r),null;case 1:return Gn(r.type)&&au(),Rn(r),null;case 3:return f=r.stateNode,Ra(),Gt(Hn),Gt(Cn),Of(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(fu(r)?r.flags|=4:i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Di!==null&&(hd(Di),Di=null))),nd(i,r),Rn(r),null;case 5:Uf(r);var x=Ds(Ho.current);if(l=r.type,i!==null&&r.stateNode!=null)q0(i,r,l,f,x),i.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(t(166));return Rn(r),null}if(i=Ds($i.current),fu(r)){f=r.stateNode,l=r.type;var S=r.memoizedProps;switch(f[qi]=r,f[Oo]=S,i=(r.mode&1)!==0,l){case"dialog":Ht("cancel",f),Ht("close",f);break;case"iframe":case"object":case"embed":Ht("load",f);break;case"video":case"audio":for(x=0;x<Io.length;x++)Ht(Io[x],f);break;case"source":Ht("error",f);break;case"img":case"image":case"link":Ht("error",f),Ht("load",f);break;case"details":Ht("toggle",f);break;case"input":V(f,S),Ht("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!S.multiple},Ht("invalid",f);break;case"textarea":F(f,S),Ht("invalid",f)}nt(l,S),x=null;for(var w in S)if(S.hasOwnProperty(w)){var O=S[w];w==="children"?typeof O=="string"?f.textContent!==O&&(S.suppressHydrationWarning!==!0&&iu(f.textContent,O,i),x=["children",O]):typeof O=="number"&&f.textContent!==""+O&&(S.suppressHydrationWarning!==!0&&iu(f.textContent,O,i),x=["children",""+O]):a.hasOwnProperty(w)&&O!=null&&w==="onScroll"&&Ht("scroll",f)}switch(l){case"input":qe(f),Tt(f,S,!0);break;case"textarea":qe(f),J(f);break;case"select":case"option":break;default:typeof S.onClick=="function"&&(f.onclick=ru)}f=x,r.updateQueue=f,f!==null&&(r.flags|=4)}else{w=x.nodeType===9?x:x.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=me(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=w.createElement(l,{is:f.is}):(i=w.createElement(l),l==="select"&&(w=i,f.multiple?w.multiple=!0:f.size&&(w.size=f.size))):i=w.createElementNS(i,l),i[qi]=r,i[Oo]=f,X0(i,r,!1,!1),r.stateNode=i;e:{switch(w=Oe(l,f),l){case"dialog":Ht("cancel",i),Ht("close",i),x=f;break;case"iframe":case"object":case"embed":Ht("load",i),x=f;break;case"video":case"audio":for(x=0;x<Io.length;x++)Ht(Io[x],i);x=f;break;case"source":Ht("error",i),x=f;break;case"img":case"image":case"link":Ht("error",i),Ht("load",i),x=f;break;case"details":Ht("toggle",i),x=f;break;case"input":V(i,f),x=ht(i,f),Ht("invalid",i);break;case"option":x=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},x=te({},f,{value:void 0}),Ht("invalid",i);break;case"textarea":F(i,f),x=ct(i,f),Ht("invalid",i);break;default:x=f}nt(l,x),O=x;for(S in O)if(O.hasOwnProperty(S)){var W=O[S];S==="style"?Re(i,W):S==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&Ze(i,W)):S==="children"?typeof W=="string"?(l!=="textarea"||W!=="")&&De(i,W):typeof W=="number"&&De(i,""+W):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(a.hasOwnProperty(S)?W!=null&&S==="onScroll"&&Ht("scroll",i):W!=null&&C(i,S,W,w))}switch(l){case"input":qe(i),Tt(i,f,!1);break;case"textarea":qe(i),J(i);break;case"option":f.value!=null&&i.setAttribute("value",""+ce(f.value));break;case"select":i.multiple=!!f.multiple,S=f.value,S!=null?He(i,!!f.multiple,S,!1):f.defaultValue!=null&&He(i,!!f.multiple,f.defaultValue,!0);break;default:typeof x.onClick=="function"&&(i.onclick=ru)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Rn(r),null;case 6:if(i&&r.stateNode!=null)$0(i,r,i.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(t(166));if(l=Ds(Ho.current),Ds($i.current),fu(r)){if(f=r.stateNode,l=r.memoizedProps,f[qi]=r,(S=f.nodeValue!==l)&&(i=ri,i!==null))switch(i.tag){case 3:iu(f.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&iu(f.nodeValue,l,(i.mode&1)!==0)}S&&(r.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[qi]=r,r.stateNode=f}return Rn(r),null;case 13:if(Gt($t),f=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Xt&&si!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Zm(),Ta(),r.flags|=98560,S=!1;else if(S=fu(r),f!==null&&f.dehydrated!==null){if(i===null){if(!S)throw Error(t(318));if(S=r.memoizedState,S=S!==null?S.dehydrated:null,!S)throw Error(t(317));S[qi]=r}else Ta(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Rn(r),S=!1}else Di!==null&&(hd(Di),Di=null),S=!0;if(!S)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(r.child.flags|=8192,(r.mode&1)!==0&&(i===null||($t.current&1)!==0?hn===0&&(hn=3):xd())),r.updateQueue!==null&&(r.flags|=4),Rn(r),null);case 4:return Ra(),nd(i,r),i===null&&Uo(r.stateNode.containerInfo),Rn(r),null;case 10:return Pf(r.type._context),Rn(r),null;case 17:return Gn(r.type)&&au(),Rn(r),null;case 19:if(Gt($t),S=r.memoizedState,S===null)return Rn(r),null;if(f=(r.flags&128)!==0,w=S.rendering,w===null)if(f)qo(S,!1);else{if(hn!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(w=gu(i),w!==null){for(r.flags|=128,qo(S,!1),f=w.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=l,l=r.child;l!==null;)S=l,i=f,S.flags&=14680066,w=S.alternate,w===null?(S.childLanes=0,S.lanes=i,S.child=null,S.subtreeFlags=0,S.memoizedProps=null,S.memoizedState=null,S.updateQueue=null,S.dependencies=null,S.stateNode=null):(S.childLanes=w.childLanes,S.lanes=w.lanes,S.child=w.child,S.subtreeFlags=0,S.deletions=null,S.memoizedProps=w.memoizedProps,S.memoizedState=w.memoizedState,S.updateQueue=w.updateQueue,S.type=w.type,i=w.dependencies,S.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Vt($t,$t.current&1|2),r.child}i=i.sibling}S.tail!==null&&Q()>La&&(r.flags|=128,f=!0,qo(S,!1),r.lanes=4194304)}else{if(!f)if(i=gu(w),i!==null){if(r.flags|=128,f=!0,l=i.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),qo(S,!0),S.tail===null&&S.tailMode==="hidden"&&!w.alternate&&!Xt)return Rn(r),null}else 2*Q()-S.renderingStartTime>La&&l!==1073741824&&(r.flags|=128,f=!0,qo(S,!1),r.lanes=4194304);S.isBackwards?(w.sibling=r.child,r.child=w):(l=S.last,l!==null?l.sibling=w:r.child=w,S.last=w)}return S.tail!==null?(r=S.tail,S.rendering=r,S.tail=r.sibling,S.renderingStartTime=Q(),r.sibling=null,l=$t.current,Vt($t,f?l&1|2:l&1),r):(Rn(r),null);case 22:case 23:return md(),f=r.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(r.flags|=8192),f&&(r.mode&1)!==0?(ai&1073741824)!==0&&(Rn(r),r.subtreeFlags&6&&(r.flags|=8192)):Rn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function nS(i,r){switch(wf(r),r.tag){case 1:return Gn(r.type)&&au(),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return Ra(),Gt(Hn),Gt(Cn),Of(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 5:return Uf(r),null;case 13:if(Gt($t),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ta()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return Gt($t),null;case 4:return Ra(),null;case 10:return Pf(r.type._context),null;case 22:case 23:return md(),null;case 24:return null;default:return null}}var bu=!1,Pn=!1,iS=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Da(i,r){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){Jt(i,r,f)}else l.current=null}function id(i,r,l){try{l()}catch(f){Jt(i,r,f)}}var Y0=!1;function rS(i,r){if(mf=Xl,i=Cm(),of(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var x=f.anchorOffset,S=f.focusNode;f=f.focusOffset;try{l.nodeType,S.nodeType}catch{l=null;break e}var w=0,O=-1,W=-1,le=0,ye=0,Me=i,_e=null;t:for(;;){for(var ke;Me!==l||x!==0&&Me.nodeType!==3||(O=w+x),Me!==S||f!==0&&Me.nodeType!==3||(W=w+f),Me.nodeType===3&&(w+=Me.nodeValue.length),(ke=Me.firstChild)!==null;)_e=Me,Me=ke;for(;;){if(Me===i)break t;if(_e===l&&++le===x&&(O=w),_e===S&&++ye===f&&(W=w),(ke=Me.nextSibling)!==null)break;Me=_e,_e=Me.parentNode}Me=ke}l=O===-1||W===-1?null:{start:O,end:W}}else l=null}l=l||{start:0,end:0}}else l=null;for(xf={focusedElem:i,selectionRange:l},Xl=!1,Ve=r;Ve!==null;)if(r=Ve,i=r.child,(r.subtreeFlags&1028)!==0&&i!==null)i.return=r,Ve=i;else for(;Ve!==null;){r=Ve;try{var We=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var Xe=We.memoizedProps,tn=We.memoizedState,Z=r.stateNode,X=Z.getSnapshotBeforeUpdate(r.elementType===r.type?Xe:Ni(r.type,Xe),tn);Z.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ee=r.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Jt(r,r.return,Te)}if(i=r.sibling,i!==null){i.return=r.return,Ve=i;break}Ve=r.return}return We=Y0,Y0=!1,We}function $o(i,r,l){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var x=f=f.next;do{if((x.tag&i)===i){var S=x.destroy;x.destroy=void 0,S!==void 0&&id(r,l,S)}x=x.next}while(x!==f)}}function Cu(i,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&i)===i){var f=l.create;l.destroy=f()}l=l.next}while(l!==r)}}function rd(i){var r=i.ref;if(r!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof r=="function"?r(i):r.current=i}}function K0(i){var r=i.alternate;r!==null&&(i.alternate=null,K0(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&(delete r[qi],delete r[Oo],delete r[yf],delete r[zy],delete r[Vy])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Z0(i){return i.tag===5||i.tag===3||i.tag===4}function Q0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Z0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function sd(i,r,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(i,r):l.insertBefore(i,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(i,l)):(r=l,r.appendChild(i)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=ru));else if(f!==4&&(i=i.child,i!==null))for(sd(i,r,l),i=i.sibling;i!==null;)sd(i,r,l),i=i.sibling}function ad(i,r,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,r?l.insertBefore(i,r):l.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(ad(i,r,l),i=i.sibling;i!==null;)ad(i,r,l),i=i.sibling}var wn=null,Li=!1;function Jr(i,r,l){for(l=l.child;l!==null;)J0(i,r,l),l=l.sibling}function J0(i,r,l){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(it,l)}catch{}switch(l.tag){case 5:Pn||Da(l,r);case 6:var f=wn,x=Li;wn=null,Jr(i,r,l),wn=f,Li=x,wn!==null&&(Li?(i=wn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):wn.removeChild(l.stateNode));break;case 18:wn!==null&&(Li?(i=wn,l=l.stateNode,i.nodeType===8?vf(i.parentNode,l):i.nodeType===1&&vf(i,l),bo(i)):vf(wn,l.stateNode));break;case 4:f=wn,x=Li,wn=l.stateNode.containerInfo,Li=!0,Jr(i,r,l),wn=f,Li=x;break;case 0:case 11:case 14:case 15:if(!Pn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){x=f=f.next;do{var S=x,w=S.destroy;S=S.tag,w!==void 0&&((S&2)!==0||(S&4)!==0)&&id(l,r,w),x=x.next}while(x!==f)}Jr(i,r,l);break;case 1:if(!Pn&&(Da(l,r),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(O){Jt(l,r,O)}Jr(i,r,l);break;case 21:Jr(i,r,l);break;case 22:l.mode&1?(Pn=(f=Pn)||l.memoizedState!==null,Jr(i,r,l),Pn=f):Jr(i,r,l);break;default:Jr(i,r,l)}}function ex(i){var r=i.updateQueue;if(r!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new iS),r.forEach(function(f){var x=hS.bind(null,i,f);l.has(f)||(l.add(f),f.then(x,x))})}}function Ii(i,r){var l=r.deletions;if(l!==null)for(var f=0;f<l.length;f++){var x=l[f];try{var S=i,w=r,O=w;e:for(;O!==null;){switch(O.tag){case 5:wn=O.stateNode,Li=!1;break e;case 3:wn=O.stateNode.containerInfo,Li=!0;break e;case 4:wn=O.stateNode.containerInfo,Li=!0;break e}O=O.return}if(wn===null)throw Error(t(160));J0(S,w,x),wn=null,Li=!1;var W=x.alternate;W!==null&&(W.return=null),x.return=null}catch(le){Jt(x,r,le)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)tx(r,i),r=r.sibling}function tx(i,r){var l=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ii(r,i),Ki(i),f&4){try{$o(3,i,i.return),Cu(3,i)}catch(Xe){Jt(i,i.return,Xe)}try{$o(5,i,i.return)}catch(Xe){Jt(i,i.return,Xe)}}break;case 1:Ii(r,i),Ki(i),f&512&&l!==null&&Da(l,l.return);break;case 5:if(Ii(r,i),Ki(i),f&512&&l!==null&&Da(l,l.return),i.flags&32){var x=i.stateNode;try{De(x,"")}catch(Xe){Jt(i,i.return,Xe)}}if(f&4&&(x=i.stateNode,x!=null)){var S=i.memoizedProps,w=l!==null?l.memoizedProps:S,O=i.type,W=i.updateQueue;if(i.updateQueue=null,W!==null)try{O==="input"&&S.type==="radio"&&S.name!=null&&rt(x,S),Oe(O,w);var le=Oe(O,S);for(w=0;w<W.length;w+=2){var ye=W[w],Me=W[w+1];ye==="style"?Re(x,Me):ye==="dangerouslySetInnerHTML"?Ze(x,Me):ye==="children"?De(x,Me):C(x,ye,Me,le)}switch(O){case"input":pt(x,S);break;case"textarea":A(x,S);break;case"select":var _e=x._wrapperState.wasMultiple;x._wrapperState.wasMultiple=!!S.multiple;var ke=S.value;ke!=null?He(x,!!S.multiple,ke,!1):_e!==!!S.multiple&&(S.defaultValue!=null?He(x,!!S.multiple,S.defaultValue,!0):He(x,!!S.multiple,S.multiple?[]:"",!1))}x[Oo]=S}catch(Xe){Jt(i,i.return,Xe)}}break;case 6:if(Ii(r,i),Ki(i),f&4){if(i.stateNode===null)throw Error(t(162));x=i.stateNode,S=i.memoizedProps;try{x.nodeValue=S}catch(Xe){Jt(i,i.return,Xe)}}break;case 3:if(Ii(r,i),Ki(i),f&4&&l!==null&&l.memoizedState.isDehydrated)try{bo(r.containerInfo)}catch(Xe){Jt(i,i.return,Xe)}break;case 4:Ii(r,i),Ki(i);break;case 13:Ii(r,i),Ki(i),x=i.child,x.flags&8192&&(S=x.memoizedState!==null,x.stateNode.isHidden=S,!S||x.alternate!==null&&x.alternate.memoizedState!==null||(ud=Q())),f&4&&ex(i);break;case 22:if(ye=l!==null&&l.memoizedState!==null,i.mode&1?(Pn=(le=Pn)||ye,Ii(r,i),Pn=le):Ii(r,i),Ki(i),f&8192){if(le=i.memoizedState!==null,(i.stateNode.isHidden=le)&&!ye&&(i.mode&1)!==0)for(Ve=i,ye=i.child;ye!==null;){for(Me=Ve=ye;Ve!==null;){switch(_e=Ve,ke=_e.child,_e.tag){case 0:case 11:case 14:case 15:$o(4,_e,_e.return);break;case 1:Da(_e,_e.return);var We=_e.stateNode;if(typeof We.componentWillUnmount=="function"){f=_e,l=_e.return;try{r=f,We.props=r.memoizedProps,We.state=r.memoizedState,We.componentWillUnmount()}catch(Xe){Jt(f,l,Xe)}}break;case 5:Da(_e,_e.return);break;case 22:if(_e.memoizedState!==null){rx(Me);continue}}ke!==null?(ke.return=_e,Ve=ke):rx(Me)}ye=ye.sibling}e:for(ye=null,Me=i;;){if(Me.tag===5){if(ye===null){ye=Me;try{x=Me.stateNode,le?(S=x.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none"):(O=Me.stateNode,W=Me.memoizedProps.style,w=W!=null&&W.hasOwnProperty("display")?W.display:null,O.style.display=Se("display",w))}catch(Xe){Jt(i,i.return,Xe)}}}else if(Me.tag===6){if(ye===null)try{Me.stateNode.nodeValue=le?"":Me.memoizedProps}catch(Xe){Jt(i,i.return,Xe)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===i)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===i)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===i)break e;ye===Me&&(ye=null),Me=Me.return}ye===Me&&(ye=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:Ii(r,i),Ki(i),f&4&&ex(i);break;case 21:break;default:Ii(r,i),Ki(i)}}function Ki(i){var r=i.flags;if(r&2){try{e:{for(var l=i.return;l!==null;){if(Z0(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var x=f.stateNode;f.flags&32&&(De(x,""),f.flags&=-33);var S=Q0(i);ad(i,S,x);break;case 3:case 4:var w=f.stateNode.containerInfo,O=Q0(i);sd(i,O,w);break;default:throw Error(t(161))}}catch(W){Jt(i,i.return,W)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function sS(i,r,l){Ve=i,nx(i)}function nx(i,r,l){for(var f=(i.mode&1)!==0;Ve!==null;){var x=Ve,S=x.child;if(x.tag===22&&f){var w=x.memoizedState!==null||bu;if(!w){var O=x.alternate,W=O!==null&&O.memoizedState!==null||Pn;O=bu;var le=Pn;if(bu=w,(Pn=W)&&!le)for(Ve=x;Ve!==null;)w=Ve,W=w.child,w.tag===22&&w.memoizedState!==null?sx(x):W!==null?(W.return=w,Ve=W):sx(x);for(;S!==null;)Ve=S,nx(S),S=S.sibling;Ve=x,bu=O,Pn=le}ix(i)}else(x.subtreeFlags&8772)!==0&&S!==null?(S.return=x,Ve=S):ix(i)}}function ix(i){for(;Ve!==null;){var r=Ve;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Pn||Cu(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!Pn)if(l===null)f.componentDidMount();else{var x=r.elementType===r.type?l.memoizedProps:Ni(r.type,l.memoizedProps);f.componentDidUpdate(x,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var S=r.updateQueue;S!==null&&r0(r,S,f);break;case 3:var w=r.updateQueue;if(w!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}r0(r,w,l)}break;case 5:var O=r.stateNode;if(l===null&&r.flags&4){l=O;var W=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&l.focus();break;case"img":W.src&&(l.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var le=r.alternate;if(le!==null){var ye=le.memoizedState;if(ye!==null){var Me=ye.dehydrated;Me!==null&&bo(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||r.flags&512&&rd(r)}catch(_e){Jt(r,r.return,_e)}}if(r===i){Ve=null;break}if(l=r.sibling,l!==null){l.return=r.return,Ve=l;break}Ve=r.return}}function rx(i){for(;Ve!==null;){var r=Ve;if(r===i){Ve=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Ve=l;break}Ve=r.return}}function sx(i){for(;Ve!==null;){var r=Ve;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Cu(4,r)}catch(W){Jt(r,l,W)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var x=r.return;try{f.componentDidMount()}catch(W){Jt(r,x,W)}}var S=r.return;try{rd(r)}catch(W){Jt(r,S,W)}break;case 5:var w=r.return;try{rd(r)}catch(W){Jt(r,w,W)}}}catch(W){Jt(r,r.return,W)}if(r===i){Ve=null;break}var O=r.sibling;if(O!==null){O.return=r.return,Ve=O;break}Ve=r.return}}var aS=Math.ceil,Au=N.ReactCurrentDispatcher,od=N.ReactCurrentOwner,Mi=N.ReactCurrentBatchConfig,bt=0,_n=null,on=null,Tn=0,ai=0,Na=$r(0),hn=0,Yo=null,Ls=0,Ru=0,ld=0,Ko=null,jn=null,ud=0,La=1/0,pr=null,Pu=!1,cd=null,es=null,Du=!1,ts=null,Nu=0,Zo=0,fd=null,Lu=-1,Iu=0;function On(){return(bt&6)!==0?Q():Lu!==-1?Lu:Lu=Q()}function ns(i){return(i.mode&1)===0?1:(bt&2)!==0&&Tn!==0?Tn&-Tn:Gy.transition!==null?(Iu===0&&(Iu=zr()),Iu):(i=mt,i!==0||(i=window.event,i=i===void 0?16:om(i.type)),i)}function Ui(i,r,l,f){if(50<Zo)throw Zo=0,fd=null,Error(t(185));an(i,l,f),((bt&2)===0||i!==_n)&&(i===_n&&((bt&2)===0&&(Ru|=l),hn===4&&is(i,Tn)),Xn(i,f),l===1&&bt===0&&(r.mode&1)===0&&(La=Q()+500,lu&&Kr()))}function Xn(i,r){var l=i.callbackNode;Br(i,r);var f=St(i,i===_n?Tn:0);if(f===0)l!==null&&Gl(l),i.callbackNode=null,i.callbackPriority=0;else if(r=f&-f,i.callbackPriority!==r){if(l!=null&&Gl(l),r===1)i.tag===0?Hy(ox.bind(null,i)):Xm(ox.bind(null,i)),ky(function(){(bt&6)===0&&Kr()}),l=null;else{switch(da(f)){case 1:l=Y;break;case 4:l=Ae;break;case 16:l=Ie;break;case 536870912:l=ze;break;default:l=Ie}l=mx(l,ax.bind(null,i))}i.callbackPriority=r,i.callbackNode=l}}function ax(i,r){if(Lu=-1,Iu=0,(bt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Ia()&&i.callbackNode!==l)return null;var f=St(i,i===_n?Tn:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||r)r=Uu(i,f);else{r=f;var x=bt;bt|=2;var S=ux();(_n!==i||Tn!==r)&&(pr=null,La=Q()+500,Us(i,r));do try{uS();break}catch(O){lx(i,O)}while(!0);Rf(),Au.current=S,bt=x,on!==null?r=0:(_n=null,Tn=0,r=hn)}if(r!==0){if(r===2&&(x=En(i),x!==0&&(f=x,r=dd(i,x))),r===1)throw l=Yo,Us(i,0),is(i,f),Xn(i,Q()),l;if(r===6)is(i,f);else{if(x=i.current.alternate,(f&30)===0&&!oS(x)&&(r=Uu(i,f),r===2&&(S=En(i),S!==0&&(f=S,r=dd(i,S))),r===1))throw l=Yo,Us(i,0),is(i,f),Xn(i,Q()),l;switch(i.finishedWork=x,i.finishedLanes=f,r){case 0:case 1:throw Error(t(345));case 2:Fs(i,jn,pr);break;case 3:if(is(i,f),(f&130023424)===f&&(r=ud+500-Q(),10<r)){if(St(i,0)!==0)break;if(x=i.suspendedLanes,(x&f)!==f){On(),i.pingedLanes|=i.suspendedLanes&x;break}i.timeoutHandle=_f(Fs.bind(null,i,jn,pr),r);break}Fs(i,jn,pr);break;case 4:if(is(i,f),(f&4194240)===f)break;for(r=i.eventTimes,x=-1;0<f;){var w=31-ut(f);S=1<<w,w=r[w],w>x&&(x=w),f&=~S}if(f=x,f=Q()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*aS(f/1960))-f,10<f){i.timeoutHandle=_f(Fs.bind(null,i,jn,pr),f);break}Fs(i,jn,pr);break;case 5:Fs(i,jn,pr);break;default:throw Error(t(329))}}}return Xn(i,Q()),i.callbackNode===l?ax.bind(null,i):null}function dd(i,r){var l=Ko;return i.current.memoizedState.isDehydrated&&(Us(i,r).flags|=256),i=Uu(i,r),i!==2&&(r=jn,jn=l,r!==null&&hd(r)),i}function hd(i){jn===null?jn=i:jn.push.apply(jn,i)}function oS(i){for(var r=i;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var x=l[f],S=x.getSnapshot;x=x.value;try{if(!Pi(S(),x))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function is(i,r){for(r&=~ld,r&=~Ru,i.suspendedLanes|=r,i.pingedLanes&=~r,i=i.expirationTimes;0<r;){var l=31-ut(r),f=1<<l;i[l]=-1,r&=~f}}function ox(i){if((bt&6)!==0)throw Error(t(327));Ia();var r=St(i,0);if((r&1)===0)return Xn(i,Q()),null;var l=Uu(i,r);if(i.tag!==0&&l===2){var f=En(i);f!==0&&(r=f,l=dd(i,f))}if(l===1)throw l=Yo,Us(i,0),is(i,r),Xn(i,Q()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=r,Fs(i,jn,pr),Xn(i,Q()),null}function pd(i,r){var l=bt;bt|=1;try{return i(r)}finally{bt=l,bt===0&&(La=Q()+500,lu&&Kr())}}function Is(i){ts!==null&&ts.tag===0&&(bt&6)===0&&Ia();var r=bt;bt|=1;var l=Mi.transition,f=mt;try{if(Mi.transition=null,mt=1,i)return i()}finally{mt=f,Mi.transition=l,bt=r,(bt&6)===0&&Kr()}}function md(){ai=Na.current,Gt(Na)}function Us(i,r){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,Oy(l)),on!==null)for(l=on.return;l!==null;){var f=l;switch(wf(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&au();break;case 3:Ra(),Gt(Hn),Gt(Cn),Of();break;case 5:Uf(f);break;case 4:Ra();break;case 13:Gt($t);break;case 19:Gt($t);break;case 10:Pf(f.type._context);break;case 22:case 23:md()}l=l.return}if(_n=i,on=i=rs(i.current,null),Tn=ai=r,hn=0,Yo=null,ld=Ru=Ls=0,jn=Ko=null,Ps!==null){for(r=0;r<Ps.length;r++)if(l=Ps[r],f=l.interleaved,f!==null){l.interleaved=null;var x=f.next,S=l.pending;if(S!==null){var w=S.next;S.next=x,f.next=w}l.pending=f}Ps=null}return i}function lx(i,r){do{var l=on;try{if(Rf(),_u.current=Mu,vu){for(var f=Yt.memoizedState;f!==null;){var x=f.queue;x!==null&&(x.pending=null),f=f.next}vu=!1}if(Ns=0,gn=dn=Yt=null,Go=!1,Wo=0,od.current=null,l===null||l.return===null){hn=1,Yo=r,on=null;break}e:{var S=i,w=l.return,O=l,W=r;if(r=Tn,O.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var le=W,ye=O,Me=ye.tag;if((ye.mode&1)===0&&(Me===0||Me===11||Me===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var ke=L0(w);if(ke!==null){ke.flags&=-257,I0(ke,w,O,S,r),ke.mode&1&&N0(S,le,r),r=ke,W=le;var We=r.updateQueue;if(We===null){var Xe=new Set;Xe.add(W),r.updateQueue=Xe}else We.add(W);break e}else{if((r&1)===0){N0(S,le,r),xd();break e}W=Error(t(426))}}else if(Xt&&O.mode&1){var tn=L0(w);if(tn!==null){(tn.flags&65536)===0&&(tn.flags|=256),I0(tn,w,O,S,r),Cf(Pa(W,O));break e}}S=W=Pa(W,O),hn!==4&&(hn=2),Ko===null?Ko=[S]:Ko.push(S),S=w;do{switch(S.tag){case 3:S.flags|=65536,r&=-r,S.lanes|=r;var Z=P0(S,W,r);i0(S,Z);break e;case 1:O=W;var X=S.type,ee=S.stateNode;if((S.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(es===null||!es.has(ee)))){S.flags|=65536,r&=-r,S.lanes|=r;var Te=D0(S,O,r);i0(S,Te);break e}}S=S.return}while(S!==null)}fx(l)}catch(Ye){r=Ye,on===l&&l!==null&&(on=l=l.return);continue}break}while(!0)}function ux(){var i=Au.current;return Au.current=Mu,i===null?Mu:i}function xd(){(hn===0||hn===3||hn===2)&&(hn=4),_n===null||(Ls&268435455)===0&&(Ru&268435455)===0||is(_n,Tn)}function Uu(i,r){var l=bt;bt|=2;var f=ux();(_n!==i||Tn!==r)&&(pr=null,Us(i,r));do try{lS();break}catch(x){lx(i,x)}while(!0);if(Rf(),bt=l,Au.current=f,on!==null)throw Error(t(261));return _n=null,Tn=0,hn}function lS(){for(;on!==null;)cx(on)}function uS(){for(;on!==null&&!D();)cx(on)}function cx(i){var r=px(i.alternate,i,ai);i.memoizedProps=i.pendingProps,r===null?fx(i):on=r,od.current=null}function fx(i){var r=i;do{var l=r.alternate;if(i=r.return,(r.flags&32768)===0){if(l=tS(l,r,ai),l!==null){on=l;return}}else{if(l=nS(l,r),l!==null){l.flags&=32767,on=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{hn=6,on=null;return}}if(r=r.sibling,r!==null){on=r;return}on=r=i}while(r!==null);hn===0&&(hn=5)}function Fs(i,r,l){var f=mt,x=Mi.transition;try{Mi.transition=null,mt=1,cS(i,r,l,f)}finally{Mi.transition=x,mt=f}return null}function cS(i,r,l,f){do Ia();while(ts!==null);if((bt&6)!==0)throw Error(t(327));l=i.finishedWork;var x=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var S=l.lanes|l.childLanes;if(Vn(i,S),i===_n&&(on=_n=null,Tn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Du||(Du=!0,mx(Ie,function(){return Ia(),null})),S=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||S){S=Mi.transition,Mi.transition=null;var w=mt;mt=1;var O=bt;bt|=4,od.current=null,rS(i,l),tx(l,i),Py(xf),Xl=!!mf,xf=mf=null,i.current=l,sS(l),$(),bt=O,mt=w,Mi.transition=S}else i.current=l;if(Du&&(Du=!1,ts=i,Nu=x),S=i.pendingLanes,S===0&&(es=null),tt(l.stateNode),Xn(i,Q()),r!==null)for(f=i.onRecoverableError,l=0;l<r.length;l++)x=r[l],f(x.value,{componentStack:x.stack,digest:x.digest});if(Pu)throw Pu=!1,i=cd,cd=null,i;return(Nu&1)!==0&&i.tag!==0&&Ia(),S=i.pendingLanes,(S&1)!==0?i===fd?Zo++:(Zo=0,fd=i):Zo=0,Kr(),null}function Ia(){if(ts!==null){var i=da(Nu),r=Mi.transition,l=mt;try{if(Mi.transition=null,mt=16>i?16:i,ts===null)var f=!1;else{if(i=ts,ts=null,Nu=0,(bt&6)!==0)throw Error(t(331));var x=bt;for(bt|=4,Ve=i.current;Ve!==null;){var S=Ve,w=S.child;if((Ve.flags&16)!==0){var O=S.deletions;if(O!==null){for(var W=0;W<O.length;W++){var le=O[W];for(Ve=le;Ve!==null;){var ye=Ve;switch(ye.tag){case 0:case 11:case 15:$o(8,ye,S)}var Me=ye.child;if(Me!==null)Me.return=ye,Ve=Me;else for(;Ve!==null;){ye=Ve;var _e=ye.sibling,ke=ye.return;if(K0(ye),ye===le){Ve=null;break}if(_e!==null){_e.return=ke,Ve=_e;break}Ve=ke}}}var We=S.alternate;if(We!==null){var Xe=We.child;if(Xe!==null){We.child=null;do{var tn=Xe.sibling;Xe.sibling=null,Xe=tn}while(Xe!==null)}}Ve=S}}if((S.subtreeFlags&2064)!==0&&w!==null)w.return=S,Ve=w;else e:for(;Ve!==null;){if(S=Ve,(S.flags&2048)!==0)switch(S.tag){case 0:case 11:case 15:$o(9,S,S.return)}var Z=S.sibling;if(Z!==null){Z.return=S.return,Ve=Z;break e}Ve=S.return}}var X=i.current;for(Ve=X;Ve!==null;){w=Ve;var ee=w.child;if((w.subtreeFlags&2064)!==0&&ee!==null)ee.return=w,Ve=ee;else e:for(w=X;Ve!==null;){if(O=Ve,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:Cu(9,O)}}catch(Ye){Jt(O,O.return,Ye)}if(O===w){Ve=null;break e}var Te=O.sibling;if(Te!==null){Te.return=O.return,Ve=Te;break e}Ve=O.return}}if(bt=x,Kr(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(it,i)}catch{}f=!0}return f}finally{mt=l,Mi.transition=r}}return!1}function dx(i,r,l){r=Pa(l,r),r=P0(i,r,1),i=Qr(i,r,1),r=On(),i!==null&&(an(i,1,r),Xn(i,r))}function Jt(i,r,l){if(i.tag===3)dx(i,i,l);else for(;r!==null;){if(r.tag===3){dx(r,i,l);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(es===null||!es.has(f))){i=Pa(l,i),i=D0(r,i,1),r=Qr(r,i,1),i=On(),r!==null&&(an(r,1,i),Xn(r,i));break}}r=r.return}}function fS(i,r,l){var f=i.pingCache;f!==null&&f.delete(r),r=On(),i.pingedLanes|=i.suspendedLanes&l,_n===i&&(Tn&l)===l&&(hn===4||hn===3&&(Tn&130023424)===Tn&&500>Q()-ud?Us(i,0):ld|=l),Xn(i,r)}function hx(i,r){r===0&&((i.mode&1)===0?r=1:(r=et,et<<=1,(et&130023424)===0&&(et=4194304)));var l=On();i=fr(i,r),i!==null&&(an(i,r,l),Xn(i,l))}function dS(i){var r=i.memoizedState,l=0;r!==null&&(l=r.retryLane),hx(i,l)}function hS(i,r){var l=0;switch(i.tag){case 13:var f=i.stateNode,x=i.memoizedState;x!==null&&(l=x.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(r),hx(i,l)}var px;px=function(i,r,l){if(i!==null)if(i.memoizedProps!==r.pendingProps||Hn.current)Wn=!0;else{if((i.lanes&l)===0&&(r.flags&128)===0)return Wn=!1,eS(i,r,l);Wn=(i.flags&131072)!==0}else Wn=!1,Xt&&(r.flags&1048576)!==0&&qm(r,cu,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;Tu(i,r),i=r.pendingProps;var x=Ma(r,Cn.current);Aa(r,l),x=zf(null,r,f,i,x,l);var S=Vf();return r.flags|=1,typeof x=="object"&&x!==null&&typeof x.render=="function"&&x.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Gn(f)?(S=!0,ou(r)):S=!1,r.memoizedState=x.state!==null&&x.state!==void 0?x.state:null,Lf(r),x.updater=Eu,r.stateNode=x,x._reactInternals=r,qf(r,f,i,l),r=Zf(null,r,f,!0,S,l)):(r.tag=0,Xt&&S&&Ef(r),Fn(null,r,x,l),r=r.child),r;case 16:f=r.elementType;e:{switch(Tu(i,r),i=r.pendingProps,x=f._init,f=x(f._payload),r.type=f,x=r.tag=mS(f),i=Ni(f,i),x){case 0:r=Kf(null,r,f,i,l);break e;case 1:r=z0(null,r,f,i,l);break e;case 11:r=U0(null,r,f,i,l);break e;case 14:r=F0(null,r,f,Ni(f.type,i),l);break e}throw Error(t(306,f,""))}return r;case 0:return f=r.type,x=r.pendingProps,x=r.elementType===f?x:Ni(f,x),Kf(i,r,f,x,l);case 1:return f=r.type,x=r.pendingProps,x=r.elementType===f?x:Ni(f,x),z0(i,r,f,x,l);case 3:e:{if(V0(r),i===null)throw Error(t(387));f=r.pendingProps,S=r.memoizedState,x=S.element,n0(i,r),xu(r,f,null,l);var w=r.memoizedState;if(f=w.element,S.isDehydrated)if(S={element:f,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},r.updateQueue.baseState=S,r.memoizedState=S,r.flags&256){x=Pa(Error(t(423)),r),r=H0(i,r,f,l,x);break e}else if(f!==x){x=Pa(Error(t(424)),r),r=H0(i,r,f,l,x);break e}else for(si=qr(r.stateNode.containerInfo.firstChild),ri=r,Xt=!0,Di=null,l=e0(r,null,f,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ta(),f===x){r=hr(i,r,l);break e}Fn(i,r,f,l)}r=r.child}return r;case 5:return s0(r),i===null&&bf(r),f=r.type,x=r.pendingProps,S=i!==null?i.memoizedProps:null,w=x.children,gf(f,x)?w=null:S!==null&&gf(f,S)&&(r.flags|=32),B0(i,r),Fn(i,r,w,l),r.child;case 6:return i===null&&bf(r),null;case 13:return G0(i,r,l);case 4:return If(r,r.stateNode.containerInfo),f=r.pendingProps,i===null?r.child=ba(r,null,f,l):Fn(i,r,f,l),r.child;case 11:return f=r.type,x=r.pendingProps,x=r.elementType===f?x:Ni(f,x),U0(i,r,f,x,l);case 7:return Fn(i,r,r.pendingProps,l),r.child;case 8:return Fn(i,r,r.pendingProps.children,l),r.child;case 12:return Fn(i,r,r.pendingProps.children,l),r.child;case 10:e:{if(f=r.type._context,x=r.pendingProps,S=r.memoizedProps,w=x.value,Vt(hu,f._currentValue),f._currentValue=w,S!==null)if(Pi(S.value,w)){if(S.children===x.children&&!Hn.current){r=hr(i,r,l);break e}}else for(S=r.child,S!==null&&(S.return=r);S!==null;){var O=S.dependencies;if(O!==null){w=S.child;for(var W=O.firstContext;W!==null;){if(W.context===f){if(S.tag===1){W=dr(-1,l&-l),W.tag=2;var le=S.updateQueue;if(le!==null){le=le.shared;var ye=le.pending;ye===null?W.next=W:(W.next=ye.next,ye.next=W),le.pending=W}}S.lanes|=l,W=S.alternate,W!==null&&(W.lanes|=l),Df(S.return,l,r),O.lanes|=l;break}W=W.next}}else if(S.tag===10)w=S.type===r.type?null:S.child;else if(S.tag===18){if(w=S.return,w===null)throw Error(t(341));w.lanes|=l,O=w.alternate,O!==null&&(O.lanes|=l),Df(w,l,r),w=S.sibling}else w=S.child;if(w!==null)w.return=S;else for(w=S;w!==null;){if(w===r){w=null;break}if(S=w.sibling,S!==null){S.return=w.return,w=S;break}w=w.return}S=w}Fn(i,r,x.children,l),r=r.child}return r;case 9:return x=r.type,f=r.pendingProps.children,Aa(r,l),x=yi(x),f=f(x),r.flags|=1,Fn(i,r,f,l),r.child;case 14:return f=r.type,x=Ni(f,r.pendingProps),x=Ni(f.type,x),F0(i,r,f,x,l);case 15:return O0(i,r,r.type,r.pendingProps,l);case 17:return f=r.type,x=r.pendingProps,x=r.elementType===f?x:Ni(f,x),Tu(i,r),r.tag=1,Gn(f)?(i=!0,ou(r)):i=!1,Aa(r,l),A0(r,f,x),qf(r,f,x,l),Zf(null,r,f,!0,i,l);case 19:return j0(i,r,l);case 22:return k0(i,r,l)}throw Error(t(156,r.tag))};function mx(i,r){return Hl(i,r)}function pS(i,r,l,f){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(i,r,l,f){return new pS(i,r,l,f)}function gd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function mS(i){if(typeof i=="function")return gd(i)?1:0;if(i!=null){if(i=i.$$typeof,i===j)return 11;if(i===se)return 14}return 2}function rs(i,r){var l=i.alternate;return l===null?(l=Ei(i.tag,r,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=r,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,r=i.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Fu(i,r,l,f,x,S){var w=2;if(f=i,typeof i=="function")gd(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case U:return Os(l.children,x,S,r);case k:w=8,x|=8;break;case T:return i=Ei(12,l,r,x|2),i.elementType=T,i.lanes=S,i;case q:return i=Ei(13,l,r,x),i.elementType=q,i.lanes=S,i;case ne:return i=Ei(19,l,r,x),i.elementType=ne,i.lanes=S,i;case oe:return Ou(l,x,S,r);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case R:w=10;break e;case B:w=9;break e;case j:w=11;break e;case se:w=14;break e;case ae:w=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return r=Ei(w,l,r,x),r.elementType=i,r.type=f,r.lanes=S,r}function Os(i,r,l,f){return i=Ei(7,i,f,r),i.lanes=l,i}function Ou(i,r,l,f){return i=Ei(22,i,f,r),i.elementType=oe,i.lanes=l,i.stateNode={isHidden:!1},i}function _d(i,r,l){return i=Ei(6,i,null,r),i.lanes=l,i}function vd(i,r,l){return r=Ei(4,i.children!==null?i.children:[],i.key,r),r.lanes=l,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}function xS(i,r,l,f,x){this.tag=r,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kt(0),this.expirationTimes=kt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kt(0),this.identifierPrefix=f,this.onRecoverableError=x,this.mutableSourceEagerHydrationData=null}function yd(i,r,l,f,x,S,w,O,W){return i=new xS(i,r,l,O,W),r===1?(r=1,S===!0&&(r|=8)):r=0,S=Ei(3,null,null,r),i.current=S,S.stateNode=i,S.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lf(S),i}function gS(i,r,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:f==null?null:""+f,children:i,containerInfo:r,implementation:l}}function xx(i){if(!i)return Yr;i=i._reactInternals;e:{if(ji(i)!==i||i.tag!==1)throw Error(t(170));var r=i;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Gn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Gn(l))return Wm(i,l,r)}return r}function gx(i,r,l,f,x,S,w,O,W){return i=yd(l,f,!0,i,x,S,w,O,W),i.context=xx(null),l=i.current,f=On(),x=ns(l),S=dr(f,x),S.callback=r??null,Qr(l,S,x),i.current.lanes=x,an(i,x,f),Xn(i,f),i}function ku(i,r,l,f){var x=r.current,S=On(),w=ns(x);return l=xx(l),r.context===null?r.context=l:r.pendingContext=l,r=dr(S,w),r.payload={element:i},f=f===void 0?null:f,f!==null&&(r.callback=f),i=Qr(x,r,w),i!==null&&(Ui(i,x,w,S),mu(i,x,w)),w}function Bu(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function _x(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<r?l:r}}function Sd(i,r){_x(i,r),(i=i.alternate)&&_x(i,r)}function _S(){return null}var vx=typeof reportError=="function"?reportError:function(i){console.error(i)};function Md(i){this._internalRoot=i}zu.prototype.render=Md.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(t(409));ku(i,r,null,null)},zu.prototype.unmount=Md.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;Is(function(){ku(null,i,null,null)}),r[or]=null}};function zu(i){this._internalRoot=i}zu.prototype.unstable_scheduleHydration=function(i){if(i){var r=nm();i={blockedOn:null,target:i,priority:r};for(var l=0;l<Wr.length&&r!==0&&r<Wr[l].priority;l++);Wr.splice(l,0,i),l===0&&sm(i)}};function Ed(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Vu(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function yx(){}function vS(i,r,l,f,x){if(x){if(typeof f=="function"){var S=f;f=function(){var le=Bu(w);S.call(le)}}var w=gx(r,f,i,0,null,!1,!1,"",yx);return i._reactRootContainer=w,i[or]=w.current,Uo(i.nodeType===8?i.parentNode:i),Is(),w}for(;x=i.lastChild;)i.removeChild(x);if(typeof f=="function"){var O=f;f=function(){var le=Bu(W);O.call(le)}}var W=yd(i,0,!1,null,null,!1,!1,"",yx);return i._reactRootContainer=W,i[or]=W.current,Uo(i.nodeType===8?i.parentNode:i),Is(function(){ku(r,W,l,f)}),W}function Hu(i,r,l,f,x){var S=l._reactRootContainer;if(S){var w=S;if(typeof x=="function"){var O=x;x=function(){var W=Bu(w);O.call(W)}}ku(r,w,i,x)}else w=vS(l,r,i,x,f);return Bu(w)}Xi=function(i){switch(i.tag){case 3:var r=i.stateNode;if(r.current.memoizedState.isDehydrated){var l=It(r.pendingLanes);l!==0&&(fn(r,l|1),Xn(r,Q()),(bt&6)===0&&(La=Q()+500,Kr()))}break;case 13:Is(function(){var f=fr(i,1);if(f!==null){var x=On();Ui(f,i,1,x)}}),Sd(i,1)}},qc=function(i){if(i.tag===13){var r=fr(i,134217728);if(r!==null){var l=On();Ui(r,i,134217728,l)}Sd(i,134217728)}},tm=function(i){if(i.tag===13){var r=ns(i),l=fr(i,r);if(l!==null){var f=On();Ui(l,i,r,f)}Sd(i,r)}},nm=function(){return mt},im=function(i,r){var l=mt;try{return mt=i,r()}finally{mt=l}},Le=function(i,r,l){switch(r){case"input":if(pt(i,l),r=l.name,l.type==="radio"&&r!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var f=l[r];if(f!==i&&f.form===i.form){var x=su(f);if(!x)throw Error(t(90));wt(f),pt(f,x)}}}break;case"textarea":A(i,l);break;case"select":r=l.value,r!=null&&He(i,!!l.multiple,r,!1)}},ft=pd,Ut=Is;var yS={usingClientEntryPoint:!1,Events:[ko,ya,su,xe,Ge,pd]},Qo={findFiberByHostInstance:bs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},SS={bundleType:Qo.bundleType,version:Qo.version,rendererPackageName:Qo.rendererPackageName,rendererConfig:Qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=zl(i),i===null?null:i.stateNode},findFiberByHostInstance:Qo.findFiberByHostInstance||_S,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gu.isDisabled&&Gu.supportsFiber)try{it=Gu.inject(SS),Qe=Gu}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yS,qn.createPortal=function(i,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ed(r))throw Error(t(200));return gS(i,r,null,l)},qn.createRoot=function(i,r){if(!Ed(i))throw Error(t(299));var l=!1,f="",x=vx;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(x=r.onRecoverableError)),r=yd(i,1,!1,null,null,l,!1,f,x),i[or]=r.current,Uo(i.nodeType===8?i.parentNode:i),new Md(r)},qn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=zl(r),i=i===null?null:i.stateNode,i},qn.flushSync=function(i){return Is(i)},qn.hydrate=function(i,r,l){if(!Vu(r))throw Error(t(200));return Hu(null,i,r,!0,l)},qn.hydrateRoot=function(i,r,l){if(!Ed(i))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,x=!1,S="",w=vx;if(l!=null&&(l.unstable_strictMode===!0&&(x=!0),l.identifierPrefix!==void 0&&(S=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),r=gx(r,null,i,1,l??null,x,!1,S,w),i[or]=r.current,Uo(i),f)for(i=0;i<f.length;i++)l=f[i],x=l._getVersion,x=x(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,x]:r.mutableSourceEagerHydrationData.push(l,x);return new zu(r)},qn.render=function(i,r,l){if(!Vu(r))throw Error(t(200));return Hu(null,i,r,!1,l)},qn.unmountComponentAtNode=function(i){if(!Vu(i))throw Error(t(40));return i._reactRootContainer?(Is(function(){Hu(null,null,i,!1,function(){i._reactRootContainer=null,i[or]=null})}),!0):!1},qn.unstable_batchedUpdates=pd,qn.unstable_renderSubtreeIntoContainer=function(i,r,l,f){if(!Vu(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Hu(i,r,l,!1,f)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var Ax;function PS(){if(Ax)return bd.exports;Ax=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),bd.exports=RS(),bd.exports}var Rx;function DS(){if(Rx)return Wu;Rx=1;var s=PS();return Wu.createRoot=s.createRoot,Wu.hydrateRoot=s.hydrateRoot,Wu}var NS=DS(),K=Sp();const Px=ES(K);/**
 * react-router v7.9.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Dx="popstate";function LS(s={}){function e(n,a){let{pathname:o,search:u,hash:c}=n.location;return mh("",{pathname:o,search:u,hash:c},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(n,a){return typeof a=="string"?a:ml(a)}return US(e,t,null,s)}function Qt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Wi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function IS(){return Math.random().toString(36).substring(2,10)}function Nx(s,e){return{usr:s.state,key:s.key,idx:e}}function mh(s,e,t=null,n){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?mo(e):e,state:t,key:e&&e.key||n||IS()}}function ml({pathname:s="/",search:e="",hash:t=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(s+=t.charAt(0)==="#"?t:"#"+t),s}function mo(s){let e={};if(s){let t=s.indexOf("#");t>=0&&(e.hash=s.substring(t),s=s.substring(0,t));let n=s.indexOf("?");n>=0&&(e.search=s.substring(n),s=s.substring(0,n)),s&&(e.pathname=s)}return e}function US(s,e,t,n={}){let{window:a=document.defaultView,v5Compat:o=!1}=n,u=a.history,c="POP",d=null,h=p();h==null&&(h=0,u.replaceState({...u.state,idx:h},""));function p(){return(u.state||{idx:null}).idx}function m(){c="POP";let _=p(),v=_==null?null:_-h;h=_,d&&d({action:c,location:M.location,delta:v})}function g(_,v){c="PUSH";let b=mh(M.location,_,v);h=p()+1;let C=Nx(b,h),N=M.createHref(b);try{u.pushState(C,"",N)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;a.location.assign(N)}o&&d&&d({action:c,location:M.location,delta:1})}function y(_,v){c="REPLACE";let b=mh(M.location,_,v);h=p();let C=Nx(b,h),N=M.createHref(b);u.replaceState(C,"",N),o&&d&&d({action:c,location:M.location,delta:0})}function E(_){return FS(_)}let M={get action(){return c},get location(){return s(a,u)},listen(_){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(Dx,m),d=_,()=>{a.removeEventListener(Dx,m),d=null}},createHref(_){return e(a,_)},createURL:E,encodeLocation(_){let v=E(_);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:g,replace:y,go(_){return u.go(_)}};return M}function FS(s,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),Qt(t,"No window.location.(origin|href) available to create URL");let n=typeof s=="string"?s:ml(s);return n=n.replace(/ $/,"%20"),!e&&n.startsWith("//")&&(n=t+n),new URL(n,t)}function Zg(s,e,t="/"){return OS(s,e,t,!1)}function OS(s,e,t,n){let a=typeof e=="string"?mo(e):e,o=Pr(a.pathname||"/",t);if(o==null)return null;let u=Qg(s);kS(u);let c=null;for(let d=0;c==null&&d<u.length;++d){let h=YS(o);c=qS(u[d],h,n)}return c}function Qg(s,e=[],t=[],n="",a=!1){let o=(u,c,d=a,h)=>{let p={relativePath:h===void 0?u.path||"":h,caseSensitive:u.caseSensitive===!0,childrenIndex:c,route:u};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(n)&&d)return;Qt(p.relativePath.startsWith(n),`Absolute route path "${p.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(n.length)}let m=Cr([n,p.relativePath]),g=t.concat(p);u.children&&u.children.length>0&&(Qt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Qg(u.children,e,g,m,d)),!(u.path==null&&!u.index)&&e.push({path:m,score:jS(m,u.index),routesMeta:g})};return s.forEach((u,c)=>{if(u.path===""||!u.path?.includes("?"))o(u,c);else for(let d of Jg(u.path))o(u,c,!0,d)}),e}function Jg(s){let e=s.split("/");if(e.length===0)return[];let[t,...n]=e,a=t.endsWith("?"),o=t.replace(/\?$/,"");if(n.length===0)return a?[o,""]:[o];let u=Jg(n.join("/")),c=[];return c.push(...u.map(d=>d===""?o:[o,d].join("/"))),a&&c.push(...u),c.map(d=>s.startsWith("/")&&d===""?"/":d)}function kS(s){s.sort((e,t)=>e.score!==t.score?t.score-e.score:XS(e.routesMeta.map(n=>n.childrenIndex),t.routesMeta.map(n=>n.childrenIndex)))}var BS=/^:[\w-]+$/,zS=3,VS=2,HS=1,GS=10,WS=-2,Lx=s=>s==="*";function jS(s,e){let t=s.split("/"),n=t.length;return t.some(Lx)&&(n+=WS),e&&(n+=VS),t.filter(a=>!Lx(a)).reduce((a,o)=>a+(BS.test(o)?zS:o===""?HS:GS),n)}function XS(s,e){return s.length===e.length&&s.slice(0,-1).every((n,a)=>n===e[a])?s[s.length-1]-e[e.length-1]:0}function qS(s,e,t=!1){let{routesMeta:n}=s,a={},o="/",u=[];for(let c=0;c<n.length;++c){let d=n[c],h=c===n.length-1,p=o==="/"?e:e.slice(o.length)||"/",m=bc({path:d.relativePath,caseSensitive:d.caseSensitive,end:h},p),g=d.route;if(!m&&h&&t&&!n[n.length-1].route.index&&(m=bc({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},p)),!m)return null;Object.assign(a,m.params),u.push({params:a,pathname:Cr([o,m.pathname]),pathnameBase:e1(Cr([o,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(o=Cr([o,m.pathnameBase]))}return u}function bc(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[t,n]=$S(s.path,s.caseSensitive,s.end),a=e.match(t);if(!a)return null;let o=a[0],u=o.replace(/(.)\/+$/,"$1"),c=a.slice(1);return{params:n.reduce((h,{paramName:p,isOptional:m},g)=>{if(p==="*"){let E=c[g]||"";u=o.slice(0,o.length-E.length).replace(/(.)\/+$/,"$1")}const y=c[g];return m&&!y?h[p]=void 0:h[p]=(y||"").replace(/%2F/g,"/"),h},{}),pathname:o,pathnameBase:u,pattern:s}}function $S(s,e=!1,t=!0){Wi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let n=[],a="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,c,d)=>(n.push({paramName:c,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(n.push({paramName:"*"}),a+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":s!==""&&s!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),n]}function YS(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Wi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function Pr(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,n=s.charAt(t);return n&&n!=="/"?null:s.slice(t)||"/"}var KS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ZS=s=>KS.test(s);function QS(s,e="/"){let{pathname:t,search:n="",hash:a=""}=typeof s=="string"?mo(s):s,o;if(t)if(ZS(t))o=t;else{if(t.includes("//")){let u=t;t=t.replace(/\/\/+/g,"/"),Wi(!1,`Pathnames cannot have embedded double slashes - normalizing ${u} -> ${t}`)}t.startsWith("/")?o=Ix(t.substring(1),"/"):o=Ix(t,e)}else o=e;return{pathname:o,search:t1(n),hash:n1(a)}}function Ix(s,e){let t=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Rd(s,e,t,n){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function JS(s){return s.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function e_(s){let e=JS(s);return e.map((t,n)=>n===e.length-1?t.pathname:t.pathnameBase)}function t_(s,e,t,n=!1){let a;typeof s=="string"?a=mo(s):(a={...s},Qt(!a.pathname||!a.pathname.includes("?"),Rd("?","pathname","search",a)),Qt(!a.pathname||!a.pathname.includes("#"),Rd("#","pathname","hash",a)),Qt(!a.search||!a.search.includes("#"),Rd("#","search","hash",a)));let o=s===""||a.pathname==="",u=o?"/":a.pathname,c;if(u==null)c=t;else{let m=e.length-1;if(!n&&u.startsWith("..")){let g=u.split("/");for(;g[0]==="..";)g.shift(),m-=1;a.pathname=g.join("/")}c=m>=0?e[m]:"/"}let d=QS(a,c),h=u&&u!=="/"&&u.endsWith("/"),p=(o||u===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(h||p)&&(d.pathname+="/"),d}var Cr=s=>s.join("/").replace(/\/\/+/g,"/"),e1=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),t1=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,n1=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function i1(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var n_=["POST","PUT","PATCH","DELETE"];new Set(n_);var r1=["GET",...n_];new Set(r1);var xo=K.createContext(null);xo.displayName="DataRouter";var Oc=K.createContext(null);Oc.displayName="DataRouterState";K.createContext(!1);var i_=K.createContext({isTransitioning:!1});i_.displayName="ViewTransition";var s1=K.createContext(new Map);s1.displayName="Fetchers";var a1=K.createContext(null);a1.displayName="Await";var sr=K.createContext(null);sr.displayName="Navigation";var Al=K.createContext(null);Al.displayName="Location";var ar=K.createContext({outlet:null,matches:[],isDataRoute:!1});ar.displayName="Route";var Mp=K.createContext(null);Mp.displayName="RouteError";function o1(s,{relative:e}={}){Qt(Rl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:n}=K.useContext(sr),{hash:a,pathname:o,search:u}=Pl(s,{relative:e}),c=o;return t!=="/"&&(c=o==="/"?t:Cr([t,o])),n.createHref({pathname:c,search:u,hash:a})}function Rl(){return K.useContext(Al)!=null}function oa(){return Qt(Rl(),"useLocation() may be used only in the context of a <Router> component."),K.useContext(Al).location}var r_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function s_(s){K.useContext(sr).static||K.useLayoutEffect(s)}function a_(){let{isDataRoute:s}=K.useContext(ar);return s?S1():l1()}function l1(){Qt(Rl(),"useNavigate() may be used only in the context of a <Router> component.");let s=K.useContext(xo),{basename:e,navigator:t}=K.useContext(sr),{matches:n}=K.useContext(ar),{pathname:a}=oa(),o=JSON.stringify(e_(n)),u=K.useRef(!1);return s_(()=>{u.current=!0}),K.useCallback((d,h={})=>{if(Wi(u.current,r_),!u.current)return;if(typeof d=="number"){t.go(d);return}let p=t_(d,JSON.parse(o),a,h.relative==="path");s==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Cr([e,p.pathname])),(h.replace?t.replace:t.push)(p,h.state,h)},[e,t,o,a,s])}K.createContext(null);function u1(){let{matches:s}=K.useContext(ar),e=s[s.length-1];return e?e.params:{}}function Pl(s,{relative:e}={}){let{matches:t}=K.useContext(ar),{pathname:n}=oa(),a=JSON.stringify(e_(t));return K.useMemo(()=>t_(s,JSON.parse(a),n,e==="path"),[s,a,n,e])}function c1(s,e){return o_(s,e)}function o_(s,e,t,n,a){Qt(Rl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=K.useContext(sr),{matches:u}=K.useContext(ar),c=u[u.length-1],d=c?c.params:{},h=c?c.pathname:"/",p=c?c.pathnameBase:"/",m=c&&c.route;{let b=m&&m.path||"";l_(h,!m||b.endsWith("*")||b.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${b}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${b}"> to <Route path="${b==="/"?"*":`${b}/*`}">.`)}let g=oa(),y;if(e){let b=typeof e=="string"?mo(e):e;Qt(p==="/"||b.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${b.pathname}" was given in the \`location\` prop.`),y=b}else y=g;let E=y.pathname||"/",M=E;if(p!=="/"){let b=p.replace(/^\//,"").split("/");M="/"+E.replace(/^\//,"").split("/").slice(b.length).join("/")}let _=Zg(s,{pathname:M});Wi(m||_!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Wi(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=m1(_&&_.map(b=>Object.assign({},b,{params:Object.assign({},d,b.params),pathname:Cr([p,o.encodeLocation?o.encodeLocation(b.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?p:Cr([p,o.encodeLocation?o.encodeLocation(b.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:b.pathnameBase])})),u,t,n,a);return e&&v?K.createElement(Al.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},v):v}function f1(){let s=y1(),e=i1(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),t=s instanceof Error?s.stack:null,n="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:n},o={padding:"2px 4px",backgroundColor:n},u=null;return console.error("Error handled by React Router default ErrorBoundary:",s),u=K.createElement(K.Fragment,null,K.createElement("p",null,"💿 Hey developer 👋"),K.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",K.createElement("code",{style:o},"ErrorBoundary")," or"," ",K.createElement("code",{style:o},"errorElement")," prop on your route.")),K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},e),t?K.createElement("pre",{style:a},t):null,u)}var d1=K.createElement(f1,null),h1=class extends K.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?K.createElement(ar.Provider,{value:this.props.routeContext},K.createElement(Mp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function p1({routeContext:s,match:e,children:t}){let n=K.useContext(xo);return n&&n.static&&n.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=e.route.id),K.createElement(ar.Provider,{value:s},t)}function m1(s,e=[],t=null,n=null,a=null){if(s==null){if(!t)return null;if(t.errors)s=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)s=t.matches;else return null}let o=s,u=t?.errors;if(u!=null){let p=o.findIndex(m=>m.route.id&&u?.[m.route.id]!==void 0);Qt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let c=!1,d=-1;if(t)for(let p=0;p<o.length;p++){let m=o[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:g,errors:y}=t,E=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!y||y[m.route.id]===void 0);if(m.route.lazy||E){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}let h=t&&n?(p,m)=>{n(p,{location:t.location,params:t.matches?.[0]?.params??{},errorInfo:m})}:void 0;return o.reduceRight((p,m,g)=>{let y,E=!1,M=null,_=null;t&&(y=u&&m.route.id?u[m.route.id]:void 0,M=m.route.errorElement||d1,c&&(d<0&&g===0?(l_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,_=null):d===g&&(E=!0,_=m.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,g+1)),b=()=>{let C;return y?C=M:E?C=_:m.route.Component?C=K.createElement(m.route.Component,null):m.route.element?C=m.route.element:C=p,K.createElement(p1,{match:m,routeContext:{outlet:p,matches:v,isDataRoute:t!=null},children:C})};return t&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?K.createElement(h1,{location:t.location,revalidation:t.revalidation,component:M,error:y,children:b(),routeContext:{outlet:null,matches:v,isDataRoute:!0},onError:h}):b()},null)}function Ep(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function x1(s){let e=K.useContext(xo);return Qt(e,Ep(s)),e}function g1(s){let e=K.useContext(Oc);return Qt(e,Ep(s)),e}function _1(s){let e=K.useContext(ar);return Qt(e,Ep(s)),e}function wp(s){let e=_1(s),t=e.matches[e.matches.length-1];return Qt(t.route.id,`${s} can only be used on routes that contain a unique "id"`),t.route.id}function v1(){return wp("useRouteId")}function y1(){let s=K.useContext(Mp),e=g1("useRouteError"),t=wp("useRouteError");return s!==void 0?s:e.errors?.[t]}function S1(){let{router:s}=x1("useNavigate"),e=wp("useNavigate"),t=K.useRef(!1);return s_(()=>{t.current=!0}),K.useCallback(async(a,o={})=>{Wi(t.current,r_),t.current&&(typeof a=="number"?s.navigate(a):await s.navigate(a,{fromRouteId:e,...o}))},[s,e])}var Ux={};function l_(s,e,t){!e&&!Ux[s]&&(Ux[s]=!0,Wi(!1,t))}K.memo(M1);function M1({routes:s,future:e,state:t,unstable_onError:n}){return o_(s,void 0,t,n,e)}function pc(s){Qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function E1({basename:s="/",children:e=null,location:t,navigationType:n="POP",navigator:a,static:o=!1}){Qt(!Rl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=s.replace(/^\/*/,"/"),c=K.useMemo(()=>({basename:u,navigator:a,static:o,future:{}}),[u,a,o]);typeof t=="string"&&(t=mo(t));let{pathname:d="/",search:h="",hash:p="",state:m=null,key:g="default"}=t,y=K.useMemo(()=>{let E=Pr(d,u);return E==null?null:{location:{pathname:E,search:h,hash:p,state:m,key:g},navigationType:n}},[u,d,h,p,m,g,n]);return Wi(y!=null,`<Router basename="${u}"> is not able to match the URL "${d}${h}${p}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:K.createElement(sr.Provider,{value:c},K.createElement(Al.Provider,{children:e,value:y}))}function w1({children:s,location:e}){return c1(xh(s),e)}function xh(s,e=[]){let t=[];return K.Children.forEach(s,(n,a)=>{if(!K.isValidElement(n))return;let o=[...e,a];if(n.type===K.Fragment){t.push.apply(t,xh(n.props.children,o));return}Qt(n.type===pc,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qt(!n.props.index||!n.props.children,"An index route cannot have child routes.");let u={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,middleware:n.props.middleware,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(u.children=xh(n.props.children,o)),t.push(u)}),t}var mc="get",xc="application/x-www-form-urlencoded";function kc(s){return s!=null&&typeof s.tagName=="string"}function T1(s){return kc(s)&&s.tagName.toLowerCase()==="button"}function b1(s){return kc(s)&&s.tagName.toLowerCase()==="form"}function C1(s){return kc(s)&&s.tagName.toLowerCase()==="input"}function A1(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function R1(s,e){return s.button===0&&(!e||e==="_self")&&!A1(s)}var ju=null;function P1(){if(ju===null)try{new FormData(document.createElement("form"),0),ju=!1}catch{ju=!0}return ju}var D1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Pd(s){return s!=null&&!D1.has(s)?(Wi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xc}"`),null):s}function N1(s,e){let t,n,a,o,u;if(b1(s)){let c=s.getAttribute("action");n=c?Pr(c,e):null,t=s.getAttribute("method")||mc,a=Pd(s.getAttribute("enctype"))||xc,o=new FormData(s)}else if(T1(s)||C1(s)&&(s.type==="submit"||s.type==="image")){let c=s.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=s.getAttribute("formaction")||c.getAttribute("action");if(n=d?Pr(d,e):null,t=s.getAttribute("formmethod")||c.getAttribute("method")||mc,a=Pd(s.getAttribute("formenctype"))||Pd(c.getAttribute("enctype"))||xc,o=new FormData(c,s),!P1()){let{name:h,type:p,value:m}=s;if(p==="image"){let g=h?`${h}.`:"";o.append(`${g}x`,"0"),o.append(`${g}y`,"0")}else h&&o.append(h,m)}}else{if(kc(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=mc,n=null,a=xc,u=s}return o&&a==="text/plain"&&(u=o,o=void 0),{action:n,method:t.toLowerCase(),encType:a,formData:o,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Tp(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function L1(s,e,t){let n=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return n.pathname==="/"?n.pathname=`_root.${t}`:e&&Pr(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${t}`,n}async function I1(s,e){if(s.id in e)return e[s.id];try{let t=await import(s.module);return e[s.id]=t,t}catch(t){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function U1(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function F1(s,e,t){let n=await Promise.all(s.map(async a=>{let o=e.routes[a.route.id];if(o){let u=await I1(o,t);return u.links?u.links():[]}return[]}));return z1(n.flat(1).filter(U1).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Fx(s,e,t,n,a,o){let u=(d,h)=>t[h]?d.route.id!==t[h].route.id:!0,c=(d,h)=>t[h].pathname!==d.pathname||t[h].route.path?.endsWith("*")&&t[h].params["*"]!==d.params["*"];return o==="assets"?e.filter((d,h)=>u(d,h)||c(d,h)):o==="data"?e.filter((d,h)=>{let p=n.routes[d.route.id];if(!p||!p.hasLoader)return!1;if(u(d,h)||c(d,h))return!0;if(d.route.shouldRevalidate){let m=d.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function O1(s,e,{includeHydrateFallback:t}={}){return k1(s.map(n=>{let a=e.routes[n.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function k1(s){return[...new Set(s)]}function B1(s){let e={},t=Object.keys(s).sort();for(let n of t)e[n]=s[n];return e}function z1(s,e){let t=new Set;return new Set(e),s.reduce((n,a)=>{let o=JSON.stringify(B1(a));return t.has(o)||(t.add(o),n.push({key:o,link:a})),n},[])}function u_(){let s=K.useContext(xo);return Tp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function V1(){let s=K.useContext(Oc);return Tp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var bp=K.createContext(void 0);bp.displayName="FrameworkContext";function c_(){let s=K.useContext(bp);return Tp(s,"You must render this element inside a <HydratedRouter> element"),s}function H1(s,e){let t=K.useContext(bp),[n,a]=K.useState(!1),[o,u]=K.useState(!1),{onFocus:c,onBlur:d,onMouseEnter:h,onMouseLeave:p,onTouchStart:m}=e,g=K.useRef(null);K.useEffect(()=>{if(s==="render"&&u(!0),s==="viewport"){let M=v=>{v.forEach(b=>{u(b.isIntersecting)})},_=new IntersectionObserver(M,{threshold:.5});return g.current&&_.observe(g.current),()=>{_.disconnect()}}},[s]),K.useEffect(()=>{if(n){let M=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(M)}}},[n]);let y=()=>{a(!0)},E=()=>{a(!1),u(!1)};return t?s!=="intent"?[o,g,{}]:[o,g,{onFocus:el(c,y),onBlur:el(d,E),onMouseEnter:el(h,y),onMouseLeave:el(p,E),onTouchStart:el(m,y)}]:[!1,g,{}]}function el(s,e){return t=>{s&&s(t),t.defaultPrevented||e(t)}}function G1({page:s,...e}){let{router:t}=u_(),n=K.useMemo(()=>Zg(t.routes,s,t.basename),[t.routes,s,t.basename]);return n?K.createElement(j1,{page:s,matches:n,...e}):null}function W1(s){let{manifest:e,routeModules:t}=c_(),[n,a]=K.useState([]);return K.useEffect(()=>{let o=!1;return F1(s,e,t).then(u=>{o||a(u)}),()=>{o=!0}},[s,e,t]),n}function j1({page:s,matches:e,...t}){let n=oa(),{manifest:a,routeModules:o}=c_(),{basename:u}=u_(),{loaderData:c,matches:d}=V1(),h=K.useMemo(()=>Fx(s,e,d,a,n,"data"),[s,e,d,a,n]),p=K.useMemo(()=>Fx(s,e,d,a,n,"assets"),[s,e,d,a,n]),m=K.useMemo(()=>{if(s===n.pathname+n.search+n.hash)return[];let E=new Set,M=!1;if(e.forEach(v=>{let b=a.routes[v.route.id];!b||!b.hasLoader||(!h.some(C=>C.route.id===v.route.id)&&v.route.id in c&&o[v.route.id]?.shouldRevalidate||b.hasClientLoader?M=!0:E.add(v.route.id))}),E.size===0)return[];let _=L1(s,u,"data");return M&&E.size>0&&_.searchParams.set("_routes",e.filter(v=>E.has(v.route.id)).map(v=>v.route.id).join(",")),[_.pathname+_.search]},[u,c,n,a,h,e,s,o]),g=K.useMemo(()=>O1(p,a),[p,a]),y=W1(p);return K.createElement(K.Fragment,null,m.map(E=>K.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...t})),g.map(E=>K.createElement("link",{key:E,rel:"modulepreload",href:E,...t})),y.map(({key:E,link:M})=>K.createElement("link",{key:E,nonce:t.nonce,...M})))}function X1(...s){return e=>{s.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var f_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{f_&&(window.__reactRouterVersion="7.9.6")}catch{}function q1({basename:s,children:e,window:t}){let n=K.useRef();n.current==null&&(n.current=LS({window:t,v5Compat:!0}));let a=n.current,[o,u]=K.useState({action:a.action,location:a.location}),c=K.useCallback(d=>{K.startTransition(()=>u(d))},[u]);return K.useLayoutEffect(()=>a.listen(c),[a,c]),K.createElement(E1,{basename:s,children:e,location:o.location,navigationType:o.action,navigator:a})}var d_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ia=K.forwardRef(function({onClick:e,discover:t="render",prefetch:n="none",relative:a,reloadDocument:o,replace:u,state:c,target:d,to:h,preventScrollReset:p,viewTransition:m,...g},y){let{basename:E}=K.useContext(sr),M=typeof h=="string"&&d_.test(h),_,v=!1;if(typeof h=="string"&&M&&(_=h,f_))try{let T=new URL(window.location.href),R=h.startsWith("//")?new URL(T.protocol+h):new URL(h),B=Pr(R.pathname,E);R.origin===T.origin&&B!=null?h=B+R.search+R.hash:v=!0}catch{Wi(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let b=o1(h,{relative:a}),[C,N,L]=H1(n,g),P=Z1(h,{replace:u,state:c,target:d,preventScrollReset:p,relative:a,viewTransition:m});function U(T){e&&e(T),T.defaultPrevented||P(T)}let k=K.createElement("a",{...g,...L,href:_||b,onClick:v||o?e:U,ref:X1(y,N),target:d,"data-discover":!M&&t==="render"?"true":void 0});return C&&!M?K.createElement(K.Fragment,null,k,K.createElement(G1,{page:b})):k});ia.displayName="Link";var $1=K.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:n="",end:a=!1,style:o,to:u,viewTransition:c,children:d,...h},p){let m=Pl(u,{relative:h.relative}),g=oa(),y=K.useContext(Oc),{navigator:E,basename:M}=K.useContext(sr),_=y!=null&&nM(m)&&c===!0,v=E.encodeLocation?E.encodeLocation(m).pathname:m.pathname,b=g.pathname,C=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;t||(b=b.toLowerCase(),C=C?C.toLowerCase():null,v=v.toLowerCase()),C&&M&&(C=Pr(C,M)||C);const N=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let L=b===v||!a&&b.startsWith(v)&&b.charAt(N)==="/",P=C!=null&&(C===v||!a&&C.startsWith(v)&&C.charAt(v.length)==="/"),U={isActive:L,isPending:P,isTransitioning:_},k=L?e:void 0,T;typeof n=="function"?T=n(U):T=[n,L?"active":null,P?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let R=typeof o=="function"?o(U):o;return K.createElement(ia,{...h,"aria-current":k,className:T,ref:p,style:R,to:u,viewTransition:c},typeof d=="function"?d(U):d)});$1.displayName="NavLink";var Y1=K.forwardRef(({discover:s="render",fetcherKey:e,navigate:t,reloadDocument:n,replace:a,state:o,method:u=mc,action:c,onSubmit:d,relative:h,preventScrollReset:p,viewTransition:m,...g},y)=>{let E=eM(),M=tM(c,{relative:h}),_=u.toLowerCase()==="get"?"get":"post",v=typeof c=="string"&&d_.test(c),b=C=>{if(d&&d(C),C.defaultPrevented)return;C.preventDefault();let N=C.nativeEvent.submitter,L=N?.getAttribute("formmethod")||u;E(N||C.currentTarget,{fetcherKey:e,method:L,navigate:t,replace:a,state:o,relative:h,preventScrollReset:p,viewTransition:m})};return K.createElement("form",{ref:y,method:_,action:M,onSubmit:n?d:b,...g,"data-discover":!v&&s==="render"?"true":void 0})});Y1.displayName="Form";function K1(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function h_(s){let e=K.useContext(xo);return Qt(e,K1(s)),e}function Z1(s,{target:e,replace:t,state:n,preventScrollReset:a,relative:o,viewTransition:u}={}){let c=a_(),d=oa(),h=Pl(s,{relative:o});return K.useCallback(p=>{if(R1(p,e)){p.preventDefault();let m=t!==void 0?t:ml(d)===ml(h);c(s,{replace:m,state:n,preventScrollReset:a,relative:o,viewTransition:u})}},[d,c,h,t,n,e,s,a,o,u])}var Q1=0,J1=()=>`__${String(++Q1)}__`;function eM(){let{router:s}=h_("useSubmit"),{basename:e}=K.useContext(sr),t=v1();return K.useCallback(async(n,a={})=>{let{action:o,method:u,encType:c,formData:d,body:h}=N1(n,e);if(a.navigate===!1){let p=a.fetcherKey||J1();await s.fetch(p,t,a.action||o,{preventScrollReset:a.preventScrollReset,formData:d,body:h,formMethod:a.method||u,formEncType:a.encType||c,flushSync:a.flushSync})}else await s.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:d,body:h,formMethod:a.method||u,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[s,e,t])}function tM(s,{relative:e}={}){let{basename:t}=K.useContext(sr),n=K.useContext(ar);Qt(n,"useFormAction must be used inside a RouteContext");let[a]=n.matches.slice(-1),o={...Pl(s||".",{relative:e})},u=oa();if(s==null){o.search=u.search;let c=new URLSearchParams(o.search),d=c.getAll("index");if(d.some(p=>p==="")){c.delete("index"),d.filter(m=>m).forEach(m=>c.append("index",m));let p=c.toString();o.search=p?`?${p}`:""}}return(!s||s===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:Cr([t,o.pathname])),ml(o)}function nM(s,{relative:e}={}){let t=K.useContext(i_);Qt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=h_("useViewTransitionState"),a=Pl(s,{relative:e});if(!t.isTransitioning)return!1;let o=Pr(t.currentLocation.pathname,n)||t.currentLocation.pathname,u=Pr(t.nextLocation.pathname,n)||t.nextLocation.pathname;return bc(a.pathname,u)!=null||bc(a.pathname,o)!=null}function Mr(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function p_(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var hi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},io={duration:.5,overwrite:!1,delay:0},Cp,bn,qt,bi=1e8,zt=1/bi,gh=Math.PI*2,iM=gh/4,rM=0,m_=Math.sqrt,sM=Math.cos,aM=Math.sin,Sn=function(e){return typeof e=="string"},en=function(e){return typeof e=="function"},Dr=function(e){return typeof e=="number"},Ap=function(e){return typeof e>"u"},ir=function(e){return typeof e=="object"},Yn=function(e){return e!==!1},Rp=function(){return typeof window<"u"},Xu=function(e){return en(e)||Sn(e)},x_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},In=Array.isArray,_h=/(?:-?\.?\d|\.)+/gi,g_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ka=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Dd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,__=/[+-]=-?[.\d]+/,v_=/[^,'"\[\]\s]+/gi,oM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Kt,Zi,vh,Pp,xi={},Cc={},y_,S_=function(e){return(Cc=ro(e,xi))&&ei},Dp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},xl=function(e,t){return!t&&console.warn(e)},M_=function(e,t){return e&&(xi[e]=t)&&Cc&&(Cc[e]=t)||xi},gl=function(){return 0},lM={suppressEvents:!0,isStart:!0,kill:!1},gc={suppressEvents:!0,kill:!1},uM={suppressEvents:!0},Np={},gs=[],yh={},E_,ui={},Nd={},Ox=30,_c=[],Lp="",Ip=function(e){var t=e[0],n,a;if(ir(t)||en(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(a=_c.length;a--&&!_c[a].targetTest(t););n=_c[a]}for(a=e.length;a--;)e[a]&&(e[a]._gsap||(e[a]._gsap=new q_(e[a],n)))||e.splice(a,1);return e},Qs=function(e){return e._gsap||Ip(Ci(e))[0]._gsap},w_=function(e,t,n){return(n=e[t])&&en(n)?e[t]():Ap(n)&&e.getAttribute&&e.getAttribute(t)||n},Kn=function(e,t){return(e=e.split(",")).forEach(t)||e},nn=function(e){return Math.round(e*1e5)/1e5||0},cn=function(e){return Math.round(e*1e7)/1e7||0},Qa=function(e,t){var n=t.charAt(0),a=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+a:n==="-"?e-a:n==="*"?e*a:e/a},cM=function(e,t){for(var n=t.length,a=0;e.indexOf(t[a])<0&&++a<n;);return a<n},Ac=function(){var e=gs.length,t=gs.slice(0),n,a;for(yh={},gs.length=0,n=0;n<e;n++)a=t[n],a&&a._lazy&&(a.render(a._lazy[0],a._lazy[1],!0)._lazy=0)},Up=function(e){return!!(e._initted||e._startAt||e.add)},T_=function(e,t,n,a){gs.length&&!bn&&Ac(),e.render(t,n,!!(bn&&t<0&&Up(e))),gs.length&&!bn&&Ac()},b_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(v_).length<2?t:Sn(e)?e.trim():e},C_=function(e){return e},gi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},fM=function(e){return function(t,n){for(var a in n)a in t||a==="duration"&&e||a==="ease"||(t[a]=n[a])}},ro=function(e,t){for(var n in t)e[n]=t[n];return e},kx=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ir(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Rc=function(e,t){var n={},a;for(a in e)a in t||(n[a]=e[a]);return n},fl=function(e){var t=e.parent||Kt,n=e.keyframes?fM(In(e.keyframes)):gi;if(Yn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},dM=function(e,t){for(var n=e.length,a=n===t.length;a&&n--&&e[n]===t[n];);return n<0},A_=function(e,t,n,a,o){var u=e[a],c;if(o)for(c=t[o];u&&u[o]>c;)u=u._prev;return u?(t._next=u._next,u._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[a]=t,t._prev=u,t.parent=t._dp=e,t},Bc=function(e,t,n,a){n===void 0&&(n="_first"),a===void 0&&(a="_last");var o=t._prev,u=t._next;o?o._next=u:e[n]===t&&(e[n]=u),u?u._prev=o:e[a]===t&&(e[a]=o),t._next=t._prev=t.parent=null},ys=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Js=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},hM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Sh=function(e,t,n,a){return e._startAt&&(bn?e._startAt.revert(gc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,a))},pM=function s(e){return!e||e._ts&&s(e.parent)},Bx=function(e){return e._repeat?so(e._tTime,e=e.duration()+e._rDelay)*e:0},so=function(e,t){var n=Math.floor(e=cn(e/t));return e&&n===e?n-1:n},Pc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},zc=function(e){return e._end=cn(e._start+(e._tDur/Math.abs(e._ts||e._rts||zt)||0))},Vc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=cn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),zc(e),n._dirty||Js(n,e)),e},R_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Pc(e.rawTime(),t),(!t._dur||Dl(0,t.totalDuration(),n)-t._tTime>zt)&&t.render(n,!0)),Js(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-zt}},Ji=function(e,t,n,a){return t.parent&&ys(t),t._start=cn((Dr(n)?n:n||e!==Kt?Ti(e,n,t):e._time)+t._delay),t._end=cn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),A_(e,t,"_first","_last",e._sort?"_start":0),Mh(t)||(e._recent=t),a||R_(e,t),e._ts<0&&Vc(e,e._tTime),e},P_=function(e,t){return(xi.ScrollTrigger||Dp("scrollTrigger",t))&&xi.ScrollTrigger.create(t,e)},D_=function(e,t,n,a,o){if(Op(e,t,o),!e._initted)return 1;if(!n&&e._pt&&!bn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&E_!==fi.frame)return gs.push(e),e._lazy=[o,a],1},mM=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Mh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},xM=function(e,t,n,a){var o=e.ratio,u=t<0||!t&&(!e._start&&mM(e)&&!(!e._initted&&Mh(e))||(e._ts<0||e._dp._ts<0)&&!Mh(e))?0:1,c=e._rDelay,d=0,h,p,m;if(c&&e._repeat&&(d=Dl(0,e._tDur,t),p=so(d,c),e._yoyo&&p&1&&(u=1-u),p!==so(e._tTime,c)&&(o=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==o||bn||a||e._zTime===zt||!t&&e._zTime){if(!e._initted&&D_(e,t,a,n,d))return;for(m=e._zTime,e._zTime=t||(n?zt:0),n||(n=t&&!m),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=d,h=e._pt;h;)h.r(u,h.d),h=h._next;t<0&&Sh(e,t,n,!0),e._onUpdate&&!n&&di(e,"onUpdate"),d&&e._repeat&&!n&&e.parent&&di(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===u&&(u&&ys(e,1),!n&&!bn&&(di(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},gM=function(e,t,n){var a;if(n>t)for(a=e._first;a&&a._start<=n;){if(a.data==="isPause"&&a._start>t)return a;a=a._next}else for(a=e._last;a&&a._start>=n;){if(a.data==="isPause"&&a._start<t)return a;a=a._prev}},ao=function(e,t,n,a){var o=e._repeat,u=cn(t)||0,c=e._tTime/e._tDur;return c&&!a&&(e._time*=u/e._dur),e._dur=u,e._tDur=o?o<0?1e10:cn(u*(o+1)+e._rDelay*o):u,c>0&&!a&&Vc(e,e._tTime=e._tDur*c),e.parent&&zc(e),n||Js(e.parent,e),e},zx=function(e){return e instanceof Bn?Js(e):ao(e,e._dur)},_M={_start:0,endTime:gl,totalDuration:gl},Ti=function s(e,t,n){var a=e.labels,o=e._recent||_M,u=e.duration()>=bi?o.endTime(!1):e._dur,c,d,h;return Sn(t)&&(isNaN(t)||t in a)?(d=t.charAt(0),h=t.substr(-1)==="%",c=t.indexOf("="),d==="<"||d===">"?(c>=0&&(t=t.replace(/=/,"")),(d==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(c<0?o:n).totalDuration()/100:1)):c<0?(t in a||(a[t]=u),a[t]):(d=parseFloat(t.charAt(c-1)+t.substr(c+1)),h&&n&&(d=d/100*(In(n)?n[0]:n).totalDuration()),c>1?s(e,t.substr(0,c-1),n)+d:u+d)):t==null?u:+t},dl=function(e,t,n){var a=Dr(t[1]),o=(a?2:1)+(e<2?0:1),u=t[o],c,d;if(a&&(u.duration=t[1]),u.parent=n,e){for(c=u,d=n;d&&!("immediateRender"in c);)c=d.vars.defaults||{},d=Yn(d.vars.inherit)&&d.parent;u.immediateRender=Yn(c.immediateRender),e<2?u.runBackwards=1:u.startAt=t[o-1]}return new un(t[0],u,t[o+1])},Es=function(e,t){return e||e===0?t(e):t},Dl=function(e,t,n){return n<e?e:n>t?t:n},Ln=function(e,t){return!Sn(e)||!(t=oM.exec(e))?"":t[1]},vM=function(e,t,n){return Es(n,function(a){return Dl(e,t,a)})},Eh=[].slice,N_=function(e,t){return e&&ir(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ir(e[0]))&&!e.nodeType&&e!==Zi},yM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(a){var o;return Sn(a)&&!t||N_(a,1)?(o=n).push.apply(o,Ci(a)):n.push(a)})||n},Ci=function(e,t,n){return qt&&!t&&qt.selector?qt.selector(e):Sn(e)&&!n&&(vh||!oo())?Eh.call((t||Pp).querySelectorAll(e),0):In(e)?yM(e,n):N_(e)?Eh.call(e,0):e?[e]:[]},wh=function(e){return e=Ci(e)[0]||xl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ci(t,n.querySelectorAll?n:n===e?xl("Invalid scope")||Pp.createElement("div"):e)}},L_=function(e){return e.sort(function(){return .5-Math.random()})},I_=function(e){if(en(e))return e;var t=ir(e)?e:{each:e},n=ea(t.ease),a=t.from||0,o=parseFloat(t.base)||0,u={},c=a>0&&a<1,d=isNaN(a)||c,h=t.axis,p=a,m=a;return Sn(a)?p=m={center:.5,edges:.5,end:1}[a]||0:!c&&d&&(p=a[0],m=a[1]),function(g,y,E){var M=(E||t).length,_=u[M],v,b,C,N,L,P,U,k,T;if(!_){if(T=t.grid==="auto"?0:(t.grid||[1,bi])[1],!T){for(U=-bi;U<(U=E[T++].getBoundingClientRect().left)&&T<M;);T<M&&T--}for(_=u[M]=[],v=d?Math.min(T,M)*p-.5:a%T,b=T===bi?0:d?M*m/T-.5:a/T|0,U=0,k=bi,P=0;P<M;P++)C=P%T-v,N=b-(P/T|0),_[P]=L=h?Math.abs(h==="y"?N:C):m_(C*C+N*N),L>U&&(U=L),L<k&&(k=L);a==="random"&&L_(_),_.max=U-k,_.min=k,_.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(T>M?M-1:h?h==="y"?M/T:T:Math.max(T,M/T))||0)*(a==="edges"?-1:1),_.b=M<0?o-M:o,_.u=Ln(t.amount||t.each)||0,n=n&&M<0?W_(n):n}return M=(_[g]-_.min)/_.max||0,cn(_.b+(n?n(M):M)*_.v)+_.u}},Th=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var a=cn(Math.round(parseFloat(n)/e)*e*t);return(a-a%1)/t+(Dr(n)?0:Ln(n))}},U_=function(e,t){var n=In(e),a,o;return!n&&ir(e)&&(a=n=e.radius||bi,e.values?(e=Ci(e.values),(o=!Dr(e[0]))&&(a*=a)):e=Th(e.increment)),Es(t,n?en(e)?function(u){return o=e(u),Math.abs(o-u)<=a?o:u}:function(u){for(var c=parseFloat(o?u.x:u),d=parseFloat(o?u.y:0),h=bi,p=0,m=e.length,g,y;m--;)o?(g=e[m].x-c,y=e[m].y-d,g=g*g+y*y):g=Math.abs(e[m]-c),g<h&&(h=g,p=m);return p=!a||h<=a?e[p]:u,o||p===u||Dr(u)?p:p+Ln(u)}:Th(e))},F_=function(e,t,n,a){return Es(In(e)?!t:n===!0?!!(n=0):!a,function(){return In(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(a=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*a)/a})},SM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(a){return t.reduce(function(o,u){return u(o)},a)}},MM=function(e,t){return function(n){return e(parseFloat(n))+(t||Ln(n))}},EM=function(e,t,n){return k_(e,t,0,1,n)},O_=function(e,t,n){return Es(n,function(a){return e[~~t(a)]})},wM=function s(e,t,n){var a=t-e;return In(e)?O_(e,s(0,e.length),t):Es(n,function(o){return(a+(o-e)%a)%a+e})},TM=function s(e,t,n){var a=t-e,o=a*2;return In(e)?O_(e,s(0,e.length-1),t):Es(n,function(u){return u=(o+(u-e)%o)%o||0,e+(u>a?o-u:u)})},_l=function(e){for(var t=0,n="",a,o,u,c;~(a=e.indexOf("random(",t));)u=e.indexOf(")",a),c=e.charAt(a+7)==="[",o=e.substr(a+7,u-a-7).match(c?v_:_h),n+=e.substr(t,a-t)+F_(c?o:+o[0],c?0:+o[1],+o[2]||1e-5),t=u+1;return n+e.substr(t,e.length-t)},k_=function(e,t,n,a,o){var u=t-e,c=a-n;return Es(o,function(d){return n+((d-e)/u*c||0)})},bM=function s(e,t,n,a){var o=isNaN(e+t)?0:function(y){return(1-y)*e+y*t};if(!o){var u=Sn(e),c={},d,h,p,m,g;if(n===!0&&(a=1)&&(n=null),u)e={p:e},t={p:t};else if(In(e)&&!In(t)){for(p=[],m=e.length,g=m-2,h=1;h<m;h++)p.push(s(e[h-1],e[h]));m--,o=function(E){E*=m;var M=Math.min(g,~~E);return p[M](E-M)},n=t}else a||(e=ro(In(e)?[]:{},e));if(!p){for(d in t)Fp.call(c,e,d,"get",t[d]);o=function(E){return zp(E,c)||(u?e.p:e)}}}return Es(n,o)},Vx=function(e,t,n){var a=e.labels,o=bi,u,c,d;for(u in a)c=a[u]-t,c<0==!!n&&c&&o>(c=Math.abs(c))&&(d=u,o=c);return d},di=function(e,t,n){var a=e.vars,o=a[t],u=qt,c=e._ctx,d,h,p;if(o)return d=a[t+"Params"],h=a.callbackScope||e,n&&gs.length&&Ac(),c&&(qt=c),p=d?o.apply(h,d):o.call(h),qt=u,p},ll=function(e){return ys(e),e.scrollTrigger&&e.scrollTrigger.kill(!!bn),e.progress()<1&&di(e,"onInterrupt"),e},Za,B_=[],z_=function(e){if(e)if(e=!e.name&&e.default||e,Rp()||e.headless){var t=e.name,n=en(e),a=t&&!n&&e.init?function(){this._props=[]}:e,o={init:gl,render:zp,add:Fp,kill:HM,modifier:VM,rawVars:0},u={targetTest:0,get:0,getSetter:Bp,aliases:{},register:0};if(oo(),e!==a){if(ui[t])return;gi(a,gi(Rc(e,o),u)),ro(a.prototype,ro(o,Rc(e,u))),ui[a.prop=t]=a,e.targetTest&&(_c.push(a),Np[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}M_(t,a),e.register&&e.register(ei,a,Zn)}else B_.push(e)},Bt=255,ul={aqua:[0,Bt,Bt],lime:[0,Bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Bt],navy:[0,0,128],white:[Bt,Bt,Bt],olive:[128,128,0],yellow:[Bt,Bt,0],orange:[Bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Bt,0,0],pink:[Bt,192,203],cyan:[0,Bt,Bt],transparent:[Bt,Bt,Bt,0]},Ld=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Bt+.5|0},V_=function(e,t,n){var a=e?Dr(e)?[e>>16,e>>8&Bt,e&Bt]:0:ul.black,o,u,c,d,h,p,m,g,y,E;if(!a){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ul[e])a=ul[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),u=e.charAt(2),c=e.charAt(3),e="#"+o+o+u+u+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return a=parseInt(e.substr(1,6),16),[a>>16,a>>8&Bt,a&Bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),a=[e>>16,e>>8&Bt,e&Bt]}else if(e.substr(0,3)==="hsl"){if(a=E=e.match(_h),!t)d=+a[0]%360/360,h=+a[1]/100,p=+a[2]/100,u=p<=.5?p*(h+1):p+h-p*h,o=p*2-u,a.length>3&&(a[3]*=1),a[0]=Ld(d+1/3,o,u),a[1]=Ld(d,o,u),a[2]=Ld(d-1/3,o,u);else if(~e.indexOf("="))return a=e.match(g_),n&&a.length<4&&(a[3]=1),a}else a=e.match(_h)||ul.transparent;a=a.map(Number)}return t&&!E&&(o=a[0]/Bt,u=a[1]/Bt,c=a[2]/Bt,m=Math.max(o,u,c),g=Math.min(o,u,c),p=(m+g)/2,m===g?d=h=0:(y=m-g,h=p>.5?y/(2-m-g):y/(m+g),d=m===o?(u-c)/y+(u<c?6:0):m===u?(c-o)/y+2:(o-u)/y+4,d*=60),a[0]=~~(d+.5),a[1]=~~(h*100+.5),a[2]=~~(p*100+.5)),n&&a.length<4&&(a[3]=1),a},H_=function(e){var t=[],n=[],a=-1;return e.split(_s).forEach(function(o){var u=o.match(Ka)||[];t.push.apply(t,u),n.push(a+=u.length+1)}),t.c=n,t},Hx=function(e,t,n){var a="",o=(e+a).match(_s),u=t?"hsla(":"rgba(",c=0,d,h,p,m;if(!o)return e;if(o=o.map(function(g){return(g=V_(g,t,1))&&u+(t?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),n&&(p=H_(e),d=n.c,d.join(a)!==p.c.join(a)))for(h=e.replace(_s,"1").split(Ka),m=h.length-1;c<m;c++)a+=h[c]+(~d.indexOf(c)?o.shift()||u+"0,0,0,0)":(p.length?p:o.length?o:n).shift());if(!h)for(h=e.split(_s),m=h.length-1;c<m;c++)a+=h[c]+o[c];return a+h[m]},_s=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ul)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),CM=/hsl[a]?\(/,G_=function(e){var t=e.join(" "),n;if(_s.lastIndex=0,_s.test(t))return n=CM.test(t),e[1]=Hx(e[1],n),e[0]=Hx(e[0],n,H_(e[1])),!0},vl,fi=(function(){var s=Date.now,e=500,t=33,n=s(),a=n,o=1e3/240,u=o,c=[],d,h,p,m,g,y,E=function M(_){var v=s()-a,b=_===!0,C,N,L,P;if((v>e||v<0)&&(n+=v-t),a+=v,L=a-n,C=L-u,(C>0||b)&&(P=++m.frame,g=L-m.time*1e3,m.time=L=L/1e3,u+=C+(C>=o?4:o-C),N=1),b||(d=h(M)),N)for(y=0;y<c.length;y++)c[y](L,g,P,_)};return m={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(_){return g/(1e3/(_||60))},wake:function(){y_&&(!vh&&Rp()&&(Zi=vh=window,Pp=Zi.document||{},xi.gsap=ei,(Zi.gsapVersions||(Zi.gsapVersions=[])).push(ei.version),S_(Cc||Zi.GreenSockGlobals||!Zi.gsap&&Zi||{}),B_.forEach(z_)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&m.sleep(),h=p||function(_){return setTimeout(_,u-m.time*1e3+1|0)},vl=1,E(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(d),vl=0,h=gl},lagSmoothing:function(_,v){e=_||1/0,t=Math.min(v||33,e)},fps:function(_){o=1e3/(_||240),u=m.time*1e3+o},add:function(_,v,b){var C=v?function(N,L,P,U){_(N,L,P,U),m.remove(C)}:_;return m.remove(_),c[b?"unshift":"push"](C),oo(),C},remove:function(_,v){~(v=c.indexOf(_))&&c.splice(v,1)&&y>=v&&y--},_listeners:c},m})(),oo=function(){return!vl&&fi.wake()},Et={},AM=/^[\d.\-M][\d.\-,\s]/,RM=/["']/g,PM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),a=n[0],o=1,u=n.length,c,d,h;o<u;o++)d=n[o],c=o!==u-1?d.lastIndexOf(","):d.length,h=d.substr(0,c),t[a]=isNaN(h)?h.replace(RM,"").trim():+h,a=d.substr(c+1).trim();return t},DM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),a=e.indexOf("(",t);return e.substring(t,~a&&a<n?e.indexOf(")",n+1):n)},NM=function(e){var t=(e+"").split("("),n=Et[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[PM(t[1])]:DM(e).split(",").map(b_)):Et._CE&&AM.test(e)?Et._CE("",e):n},W_=function(e){return function(t){return 1-e(1-t)}},j_=function s(e,t){for(var n=e._first,a;n;)n instanceof Bn?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(a=n._ease,n._ease=n._yEase,n._yEase=a,n._yoyo=t)),n=n._next},ea=function(e,t){return e&&(en(e)?e:Et[e]||NM(e))||t},la=function(e,t,n,a){n===void 0&&(n=function(d){return 1-t(1-d)}),a===void 0&&(a=function(d){return d<.5?t(d*2)/2:1-t((1-d)*2)/2});var o={easeIn:t,easeOut:n,easeInOut:a},u;return Kn(e,function(c){Et[c]=xi[c]=o,Et[u=c.toLowerCase()]=n;for(var d in o)Et[u+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=Et[c+"."+d]=o[d]}),o},X_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Id=function s(e,t,n){var a=t>=1?t:1,o=(n||(e?.3:.45))/(t<1?t:1),u=o/gh*(Math.asin(1/a)||0),c=function(p){return p===1?1:a*Math.pow(2,-10*p)*aM((p-u)*o)+1},d=e==="out"?c:e==="in"?function(h){return 1-c(1-h)}:X_(c);return o=gh/o,d.config=function(h,p){return s(e,h,p)},d},Ud=function s(e,t){t===void 0&&(t=1.70158);var n=function(u){return u?--u*u*((t+1)*u+t)+1:0},a=e==="out"?n:e==="in"?function(o){return 1-n(1-o)}:X_(n);return a.config=function(o){return s(e,o)},a};Kn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;la(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Et.Linear.easeNone=Et.none=Et.Linear.easeIn;la("Elastic",Id("in"),Id("out"),Id());(function(s,e){var t=1/e,n=2*t,a=2.5*t,o=function(c){return c<t?s*c*c:c<n?s*Math.pow(c-1.5/e,2)+.75:c<a?s*(c-=2.25/e)*c+.9375:s*Math.pow(c-2.625/e,2)+.984375};la("Bounce",function(u){return 1-o(1-u)},o)})(7.5625,2.75);la("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});la("Circ",function(s){return-(m_(1-s*s)-1)});la("Sine",function(s){return s===1?1:-sM(s*iM)+1});la("Back",Ud("in"),Ud("out"),Ud());Et.SteppedEase=Et.steps=xi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,a=e+(t?0:1),o=t?1:0,u=1-zt;return function(c){return((a*Dl(0,u,c)|0)+o)*n}}};io.ease=Et["quad.out"];Kn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Lp+=s+","+s+"Params,"});var q_=function(e,t){this.id=rM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:w_,this.set=t?t.getSetter:Bp},yl=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ao(this,+t.duration,1,1),this.data=t.data,qt&&(this._ctx=qt,qt.data.push(this)),vl||fi.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ao(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,a){if(oo(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(Vc(this,n),!o._dp||o.parent||R_(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ji(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!a||this._initted&&Math.abs(this._zTime)===zt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),T_(this,n,a)),this},e.time=function(n,a){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Bx(this))%(this._dur+this._rDelay)||(n?this._dur:0),a):this._time},e.totalProgress=function(n,a){return arguments.length?this.totalTime(this.totalDuration()*n,a):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Bx(this),a):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,a){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*o,a):this._repeat?so(this._tTime,o)+1:1},e.timeScale=function(n,a){if(!arguments.length)return this._rts===-zt?0:this._rts;if(this._rts===n)return this;var o=this.parent&&this._ts?Pc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-zt?0:this._rts,this.totalTime(Dl(-Math.abs(this._delay),this.totalDuration(),o),a!==!1),zc(this),hM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(oo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==zt&&(this._tTime-=zt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var a=this.parent||this._dp;return a&&(a._sort||!this.parent)&&Ji(a,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var a=this.parent||this._dp;return a?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Pc(a.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=uM);var a=bn;return bn=n,Up(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),bn=a,this},e.globalTime=function(n){for(var a=this,o=arguments.length?n:a.rawTime();a;)o=a._start+o/(Math.abs(a._ts)||1),a=a._dp;return!this.parent&&this._sat?this._sat.globalTime(n):o},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,zx(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var a=this._time;return this._rDelay=n,zx(this),a?this.time(a):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,a){return this.totalTime(Ti(this,n),Yn(a))},e.restart=function(n,a){return this.play().totalTime(n?-this._delay:0,Yn(a)),this._dur||(this._zTime=-zt),this},e.play=function(n,a){return n!=null&&this.seek(n,a),this.reversed(!1).paused(!1)},e.reverse=function(n,a){return n!=null&&this.seek(n||this.totalDuration(),a),this.reversed(!0).paused(!1)},e.pause=function(n,a){return n!=null&&this.seek(n,a),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-zt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-zt,this},e.isActive=function(){var n=this.parent||this._dp,a=this._start,o;return!!(!n||this._ts&&this._initted&&n.isActive()&&(o=n.rawTime(!0))>=a&&o<this.endTime(!0)-zt)},e.eventCallback=function(n,a,o){var u=this.vars;return arguments.length>1?(a?(u[n]=a,o&&(u[n+"Params"]=o),n==="onUpdate"&&(this._onUpdate=a)):delete u[n],this):u[n]},e.then=function(n){var a=this;return new Promise(function(o){var u=en(n)?n:C_,c=function(){var h=a.then;a.then=null,en(u)&&(u=u(a))&&(u.then||u===a)&&(a.then=h),o(u),a.then=h};a._initted&&a.totalProgress()===1&&a._ts>=0||!a._tTime&&a._ts<0?c():a._prom=c})},e.kill=function(){ll(this)},s})();gi(yl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-zt,_prom:0,_ps:!1,_rts:1});var Bn=(function(s){p_(e,s);function e(n,a){var o;return n===void 0&&(n={}),o=s.call(this,n)||this,o.labels={},o.smoothChildTiming=!!n.smoothChildTiming,o.autoRemoveChildren=!!n.autoRemoveChildren,o._sort=Yn(n.sortChildren),Kt&&Ji(n.parent||Kt,Mr(o),a),n.reversed&&o.reverse(),n.paused&&o.paused(!0),n.scrollTrigger&&P_(Mr(o),n.scrollTrigger),o}var t=e.prototype;return t.to=function(a,o,u){return dl(0,arguments,this),this},t.from=function(a,o,u){return dl(1,arguments,this),this},t.fromTo=function(a,o,u,c){return dl(2,arguments,this),this},t.set=function(a,o,u){return o.duration=0,o.parent=this,fl(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new un(a,o,Ti(this,u),1),this},t.call=function(a,o,u){return Ji(this,un.delayedCall(0,a,o),u)},t.staggerTo=function(a,o,u,c,d,h,p){return u.duration=o,u.stagger=u.stagger||c,u.onComplete=h,u.onCompleteParams=p,u.parent=this,new un(a,u,Ti(this,d)),this},t.staggerFrom=function(a,o,u,c,d,h,p){return u.runBackwards=1,fl(u).immediateRender=Yn(u.immediateRender),this.staggerTo(a,o,u,c,d,h,p)},t.staggerFromTo=function(a,o,u,c,d,h,p,m){return c.startAt=u,fl(c).immediateRender=Yn(c.immediateRender),this.staggerTo(a,o,c,d,h,p,m)},t.render=function(a,o,u){var c=this._time,d=this._dirty?this.totalDuration():this._tDur,h=this._dur,p=a<=0?0:cn(a),m=this._zTime<0!=a<0&&(this._initted||!h),g,y,E,M,_,v,b,C,N,L,P,U;if(this!==Kt&&p>d&&a>=0&&(p=d),p!==this._tTime||u||m){if(c!==this._time&&h&&(p+=this._time-c,a+=this._time-c),g=p,N=this._start,C=this._ts,v=!C,m&&(h||(c=this._zTime),(a||!o)&&(this._zTime=a)),this._repeat){if(P=this._yoyo,_=h+this._rDelay,this._repeat<-1&&a<0)return this.totalTime(_*100+a,o,u);if(g=cn(p%_),p===d?(M=this._repeat,g=h):(L=cn(p/_),M=~~L,M&&M===L&&(g=h,M--),g>h&&(g=h)),L=so(this._tTime,_),!c&&this._tTime&&L!==M&&this._tTime-L*_-this._dur<=0&&(L=M),P&&M&1&&(g=h-g,U=1),M!==L&&!this._lock){var k=P&&L&1,T=k===(P&&M&1);if(M<L&&(k=!k),c=k?0:p%h?h:p,this._lock=1,this.render(c||(U?0:cn(M*_)),o,!h)._lock=0,this._tTime=p,!o&&this.parent&&di(this,"onRepeat"),this.vars.repeatRefresh&&!U&&(this.invalidate()._lock=1),c&&c!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,d=this._tDur,T&&(this._lock=2,c=k?h:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!U&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;j_(this,U)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=gM(this,cn(c),cn(g)),b&&(p-=g-(g=b._start))),this._tTime=p,this._time=g,this._act=!C,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=a,c=0),!c&&p&&!o&&!L&&(di(this,"onStart"),this._tTime!==p))return this;if(g>=c&&a>=0)for(y=this._first;y;){if(E=y._next,(y._act||g>=y._start)&&y._ts&&b!==y){if(y.parent!==this)return this.render(a,o,u);if(y.render(y._ts>0?(g-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(g-y._start)*y._ts,o,u),g!==this._time||!this._ts&&!v){b=0,E&&(p+=this._zTime=-zt);break}}y=E}else{y=this._last;for(var R=a<0?a:g;y;){if(E=y._prev,(y._act||R<=y._end)&&y._ts&&b!==y){if(y.parent!==this)return this.render(a,o,u);if(y.render(y._ts>0?(R-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(R-y._start)*y._ts,o,u||bn&&Up(y)),g!==this._time||!this._ts&&!v){b=0,E&&(p+=this._zTime=R?-zt:zt);break}}y=E}}if(b&&!o&&(this.pause(),b.render(g>=c?0:-zt)._zTime=g>=c?1:-1,this._ts))return this._start=N,zc(this),this.render(a,o,u);this._onUpdate&&!o&&di(this,"onUpdate",!0),(p===d&&this._tTime>=this.totalDuration()||!p&&c)&&(N===this._start||Math.abs(C)!==Math.abs(this._ts))&&(this._lock||((a||!h)&&(p===d&&this._ts>0||!p&&this._ts<0)&&ys(this,1),!o&&!(a<0&&!c)&&(p||c||!d)&&(di(this,p===d&&a>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<d&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(a,o){var u=this;if(Dr(o)||(o=Ti(this,o,a)),!(a instanceof yl)){if(In(a))return a.forEach(function(c){return u.add(c,o)}),this;if(Sn(a))return this.addLabel(a,o);if(en(a))a=un.delayedCall(0,a);else return this}return this!==a?Ji(this,a,o):this},t.getChildren=function(a,o,u,c){a===void 0&&(a=!0),o===void 0&&(o=!0),u===void 0&&(u=!0),c===void 0&&(c=-bi);for(var d=[],h=this._first;h;)h._start>=c&&(h instanceof un?o&&d.push(h):(u&&d.push(h),a&&d.push.apply(d,h.getChildren(!0,o,u)))),h=h._next;return d},t.getById=function(a){for(var o=this.getChildren(1,1,1),u=o.length;u--;)if(o[u].vars.id===a)return o[u]},t.remove=function(a){return Sn(a)?this.removeLabel(a):en(a)?this.killTweensOf(a):(a.parent===this&&Bc(this,a),a===this._recent&&(this._recent=this._last),Js(this))},t.totalTime=function(a,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=cn(fi.time-(this._ts>0?a/this._ts:(this.totalDuration()-a)/-this._ts))),s.prototype.totalTime.call(this,a,o),this._forcing=0,this):this._tTime},t.addLabel=function(a,o){return this.labels[a]=Ti(this,o),this},t.removeLabel=function(a){return delete this.labels[a],this},t.addPause=function(a,o,u){var c=un.delayedCall(0,o||gl,u);return c.data="isPause",this._hasPause=1,Ji(this,c,Ti(this,a))},t.removePause=function(a){var o=this._first;for(a=Ti(this,a);o;)o._start===a&&o.data==="isPause"&&ys(o),o=o._next},t.killTweensOf=function(a,o,u){for(var c=this.getTweensOf(a,u),d=c.length;d--;)hs!==c[d]&&c[d].kill(a,o);return this},t.getTweensOf=function(a,o){for(var u=[],c=Ci(a),d=this._first,h=Dr(o),p;d;)d instanceof un?cM(d._targets,c)&&(h?(!hs||d._initted&&d._ts)&&d.globalTime(0)<=o&&d.globalTime(d.totalDuration())>o:!o||d.isActive())&&u.push(d):(p=d.getTweensOf(c,o)).length&&u.push.apply(u,p),d=d._next;return u},t.tweenTo=function(a,o){o=o||{};var u=this,c=Ti(u,a),d=o,h=d.startAt,p=d.onStart,m=d.onStartParams,g=d.immediateRender,y,E=un.to(u,gi({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:o.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale())||zt,onStart:function(){if(u.pause(),!y){var _=o.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale());E._dur!==_&&ao(E,_,0,1).render(E._time,!0,!0),y=1}p&&p.apply(E,m||[])}},o));return g?E.render(0):E},t.tweenFromTo=function(a,o,u){return this.tweenTo(o,gi({startAt:{time:Ti(this,a)}},u))},t.recent=function(){return this._recent},t.nextLabel=function(a){return a===void 0&&(a=this._time),Vx(this,Ti(this,a))},t.previousLabel=function(a){return a===void 0&&(a=this._time),Vx(this,Ti(this,a),1)},t.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.previousLabel(this._time+zt)},t.shiftChildren=function(a,o,u){u===void 0&&(u=0);for(var c=this._first,d=this.labels,h;c;)c._start>=u&&(c._start+=a,c._end+=a),c=c._next;if(o)for(h in d)d[h]>=u&&(d[h]+=a);return Js(this)},t.invalidate=function(a){var o=this._first;for(this._lock=0;o;)o.invalidate(a),o=o._next;return s.prototype.invalidate.call(this,a)},t.clear=function(a){a===void 0&&(a=!0);for(var o=this._first,u;o;)u=o._next,this.remove(o),o=u;return this._dp&&(this._time=this._tTime=this._pTime=0),a&&(this.labels={}),Js(this)},t.totalDuration=function(a){var o=0,u=this,c=u._last,d=bi,h,p,m;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-a:a));if(u._dirty){for(m=u.parent;c;)h=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>d&&u._sort&&c._ts&&!u._lock?(u._lock=1,Ji(u,c,p-c._delay,1)._lock=0):d=p,p<0&&c._ts&&(o-=p,(!m&&!u._dp||m&&m.smoothChildTiming)&&(u._start+=p/u._ts,u._time-=p,u._tTime-=p),u.shiftChildren(-p,!1,-1/0),d=0),c._end>o&&c._ts&&(o=c._end),c=h;ao(u,u===Kt&&u._time>o?u._time:o,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(a){if(Kt._ts&&(T_(Kt,Pc(a,Kt)),E_=fi.frame),fi.frame>=Ox){Ox+=hi.autoSleep||120;var o=Kt._first;if((!o||!o._ts)&&hi.autoSleep&&fi._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||fi.sleep()}}},e})(yl);gi(Bn.prototype,{_lock:0,_hasPause:0,_forcing:0});var LM=function(e,t,n,a,o,u,c){var d=new Zn(this._pt,e,t,0,1,J_,null,o),h=0,p=0,m,g,y,E,M,_,v,b;for(d.b=n,d.e=a,n+="",a+="",(v=~a.indexOf("random("))&&(a=_l(a)),u&&(b=[n,a],u(b,e,t),n=b[0],a=b[1]),g=n.match(Dd)||[];m=Dd.exec(a);)E=m[0],M=a.substring(h,m.index),y?y=(y+1)%5:M.substr(-5)==="rgba("&&(y=1),E!==g[p++]&&(_=parseFloat(g[p-1])||0,d._pt={_next:d._pt,p:M||p===1?M:",",s:_,c:E.charAt(1)==="="?Qa(_,E)-_:parseFloat(E)-_,m:y&&y<4?Math.round:0},h=Dd.lastIndex);return d.c=h<a.length?a.substring(h,a.length):"",d.fp=c,(__.test(a)||v)&&(d.e=0),this._pt=d,d},Fp=function(e,t,n,a,o,u,c,d,h,p){en(a)&&(a=a(o||0,e,u));var m=e[t],g=n!=="get"?n:en(m)?h?e[t.indexOf("set")||!en(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():m,y=en(m)?h?kM:Z_:kp,E;if(Sn(a)&&(~a.indexOf("random(")&&(a=_l(a)),a.charAt(1)==="="&&(E=Qa(g,a)+(Ln(g)||0),(E||E===0)&&(a=E))),!p||g!==a||bh)return!isNaN(g*a)&&a!==""?(E=new Zn(this._pt,e,t,+g||0,a-(g||0),typeof m=="boolean"?zM:Q_,0,y),h&&(E.fp=h),c&&E.modifier(c,this,e),this._pt=E):(!m&&!(t in e)&&Dp(t,a),LM.call(this,e,t,g,a,y,d||hi.stringFilter,h))},IM=function(e,t,n,a,o){if(en(e)&&(e=hl(e,o,t,n,a)),!ir(e)||e.style&&e.nodeType||In(e)||x_(e))return Sn(e)?hl(e,o,t,n,a):e;var u={},c;for(c in e)u[c]=hl(e[c],o,t,n,a);return u},$_=function(e,t,n,a,o,u){var c,d,h,p;if(ui[e]&&(c=new ui[e]).init(o,c.rawVars?t[e]:IM(t[e],a,o,u,n),n,a,u)!==!1&&(n._pt=d=new Zn(n._pt,o,e,0,1,c.render,c,0,c.priority),n!==Za))for(h=n._ptLookup[n._targets.indexOf(o)],p=c._props.length;p--;)h[c._props[p]]=d;return c},hs,bh,Op=function s(e,t,n){var a=e.vars,o=a.ease,u=a.startAt,c=a.immediateRender,d=a.lazy,h=a.onUpdate,p=a.runBackwards,m=a.yoyoEase,g=a.keyframes,y=a.autoRevert,E=e._dur,M=e._startAt,_=e._targets,v=e.parent,b=v&&v.data==="nested"?v.vars.targets:_,C=e._overwrite==="auto"&&!Cp,N=e.timeline,L,P,U,k,T,R,B,j,q,ne,se,ae,oe;if(N&&(!g||!o)&&(o="none"),e._ease=ea(o,io.ease),e._yEase=m?W_(ea(m===!0?o:m,io.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!N&&!!a.runBackwards,!N||g&&!a.stagger){if(j=_[0]?Qs(_[0]).harness:0,ae=j&&a[j.prop],L=Rc(a,Np),M&&(M._zTime<0&&M.progress(1),t<0&&p&&c&&!y?M.render(-1,!0):M.revert(p&&E?gc:lM),M._lazy=0),u){if(ys(e._startAt=un.set(_,gi({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!M&&Yn(d),startAt:null,delay:0,onUpdate:h&&function(){return di(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bn||!c&&!y)&&e._startAt.revert(gc),c&&E&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(p&&E&&!M){if(t&&(c=!1),U=gi({overwrite:!1,data:"isFromStart",lazy:c&&!M&&Yn(d),immediateRender:c,stagger:0,parent:v},L),ae&&(U[j.prop]=ae),ys(e._startAt=un.set(_,U)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bn?e._startAt.revert(gc):e._startAt.render(-1,!0)),e._zTime=t,!c)s(e._startAt,zt,zt);else if(!t)return}for(e._pt=e._ptCache=0,d=E&&Yn(d)||d&&!E,P=0;P<_.length;P++){if(T=_[P],B=T._gsap||Ip(_)[P]._gsap,e._ptLookup[P]=ne={},yh[B.id]&&gs.length&&Ac(),se=b===_?P:b.indexOf(T),j&&(q=new j).init(T,ae||L,e,se,b)!==!1&&(e._pt=k=new Zn(e._pt,T,q.name,0,1,q.render,q,0,q.priority),q._props.forEach(function(H){ne[H]=k}),q.priority&&(R=1)),!j||ae)for(U in L)ui[U]&&(q=$_(U,L,e,se,T,b))?q.priority&&(R=1):ne[U]=k=Fp.call(e,T,U,"get",L[U],se,b,0,a.stringFilter);e._op&&e._op[P]&&e.kill(T,e._op[P]),C&&e._pt&&(hs=e,Kt.killTweensOf(T,ne,e.globalTime(t)),oe=!e.parent,hs=0),e._pt&&d&&(yh[B.id]=1)}R&&ev(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!oe,g&&t<=0&&N.render(bi,!0,!0)},UM=function(e,t,n,a,o,u,c,d){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,m,g,y;if(!h)for(h=e._ptCache[t]=[],g=e._ptLookup,y=e._targets.length;y--;){if(p=g[y][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return bh=1,e.vars[t]="+=0",Op(e,c),bh=0,d?xl(t+" not eligible for reset"):1;h.push(p)}for(y=h.length;y--;)m=h[y],p=m._pt||m,p.s=(a||a===0)&&!o?a:p.s+(a||0)+u*p.c,p.c=n-p.s,m.e&&(m.e=nn(n)+Ln(m.e)),m.b&&(m.b=p.s+Ln(m.b))},FM=function(e,t){var n=e[0]?Qs(e[0]).harness:0,a=n&&n.aliases,o,u,c,d;if(!a)return t;o=ro({},t);for(u in a)if(u in o)for(d=a[u].split(","),c=d.length;c--;)o[d[c]]=o[u];return o},OM=function(e,t,n,a){var o=t.ease||a||"power1.inOut",u,c;if(In(t))c=n[e]||(n[e]=[]),t.forEach(function(d,h){return c.push({t:h/(t.length-1)*100,v:d,e:o})});else for(u in t)c=n[u]||(n[u]=[]),u==="ease"||c.push({t:parseFloat(e),v:t[u],e:o})},hl=function(e,t,n,a,o){return en(e)?e.call(t,n,a,o):Sn(e)&&~e.indexOf("random(")?_l(e):e},Y_=Lp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",K_={};Kn(Y_+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return K_[s]=1});var un=(function(s){p_(e,s);function e(n,a,o,u){var c;typeof a=="number"&&(o.duration=a,a=o,o=null),c=s.call(this,u?a:fl(a))||this;var d=c.vars,h=d.duration,p=d.delay,m=d.immediateRender,g=d.stagger,y=d.overwrite,E=d.keyframes,M=d.defaults,_=d.scrollTrigger,v=d.yoyoEase,b=a.parent||Kt,C=(In(n)||x_(n)?Dr(n[0]):"length"in a)?[n]:Ci(n),N,L,P,U,k,T,R,B;if(c._targets=C.length?Ip(C):xl("GSAP target "+n+" not found. https://gsap.com",!hi.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=y,E||g||Xu(h)||Xu(p)){if(a=c.vars,N=c.timeline=new Bn({data:"nested",defaults:M||{},targets:b&&b.data==="nested"?b.vars.targets:C}),N.kill(),N.parent=N._dp=Mr(c),N._start=0,g||Xu(h)||Xu(p)){if(U=C.length,R=g&&I_(g),ir(g))for(k in g)~Y_.indexOf(k)&&(B||(B={}),B[k]=g[k]);for(L=0;L<U;L++)P=Rc(a,K_),P.stagger=0,v&&(P.yoyoEase=v),B&&ro(P,B),T=C[L],P.duration=+hl(h,Mr(c),L,T,C),P.delay=(+hl(p,Mr(c),L,T,C)||0)-c._delay,!g&&U===1&&P.delay&&(c._delay=p=P.delay,c._start+=p,P.delay=0),N.to(T,P,R?R(L,T,C):0),N._ease=Et.none;N.duration()?h=p=0:c.timeline=0}else if(E){fl(gi(N.vars.defaults,{ease:"none"})),N._ease=ea(E.ease||a.ease||"none");var j=0,q,ne,se;if(In(E))E.forEach(function(ae){return N.to(C,ae,">")}),N.duration();else{P={};for(k in E)k==="ease"||k==="easeEach"||OM(k,E[k],P,E.easeEach);for(k in P)for(q=P[k].sort(function(ae,oe){return ae.t-oe.t}),j=0,L=0;L<q.length;L++)ne=q[L],se={ease:ne.e,duration:(ne.t-(L?q[L-1].t:0))/100*h},se[k]=ne.v,N.to(C,se,j),j+=se.duration;N.duration()<h&&N.to({},{duration:h-N.duration()})}}h||c.duration(h=N.duration())}else c.timeline=0;return y===!0&&!Cp&&(hs=Mr(c),Kt.killTweensOf(C),hs=0),Ji(b,Mr(c),o),a.reversed&&c.reverse(),a.paused&&c.paused(!0),(m||!h&&!E&&c._start===cn(b._time)&&Yn(m)&&pM(Mr(c))&&b.data!=="nested")&&(c._tTime=-zt,c.render(Math.max(0,-p)||0)),_&&P_(Mr(c),_),c}var t=e.prototype;return t.render=function(a,o,u){var c=this._time,d=this._tDur,h=this._dur,p=a<0,m=a>d-zt&&!p?d:a<zt?0:a,g,y,E,M,_,v,b,C,N;if(!h)xM(this,a,o,u);else if(m!==this._tTime||!a||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(g=m,C=this.timeline,this._repeat){if(M=h+this._rDelay,this._repeat<-1&&p)return this.totalTime(M*100+a,o,u);if(g=cn(m%M),m===d?(E=this._repeat,g=h):(_=cn(m/M),E=~~_,E&&E===_?(g=h,E--):g>h&&(g=h)),v=this._yoyo&&E&1,v&&(N=this._yEase,g=h-g),_=so(this._tTime,M),g===c&&!u&&this._initted&&E===_)return this._tTime=m,this;E!==_&&(C&&this._yEase&&j_(C,v),this.vars.repeatRefresh&&!v&&!this._lock&&g!==M&&this._initted&&(this._lock=u=1,this.render(cn(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(D_(this,p?a:g,u,o,m))return this._tTime=0,this;if(c!==this._time&&!(u&&this.vars.repeatRefresh&&E!==_))return this;if(h!==this._dur)return this.render(a,o,u)}if(this._tTime=m,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(N||this._ease)(g/h),this._from&&(this.ratio=b=1-b),!c&&m&&!o&&!_&&(di(this,"onStart"),this._tTime!==m))return this;for(y=this._pt;y;)y.r(b,y.d),y=y._next;C&&C.render(a<0?a:C._dur*C._ease(g/this._dur),o,u)||this._startAt&&(this._zTime=a),this._onUpdate&&!o&&(p&&Sh(this,a,o,u),di(this,"onUpdate")),this._repeat&&E!==_&&this.vars.onRepeat&&!o&&this.parent&&di(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(p&&!this._onUpdate&&Sh(this,a,!0,!0),(a||!h)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&ys(this,1),!o&&!(p&&!c)&&(m||c||v)&&(di(this,m===d?"onComplete":"onReverseComplete",!0),this._prom&&!(m<d&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(a){return(!a||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(a),s.prototype.invalidate.call(this,a)},t.resetTo=function(a,o,u,c,d){vl||fi.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||Op(this,h),p=this._ease(h/this._dur),UM(this,a,o,u,c,p,h,d)?this.resetTo(a,o,u,c,1):(Vc(this,0),this.parent||A_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(a,o){if(o===void 0&&(o="all"),!a&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?ll(this):this.scrollTrigger&&this.scrollTrigger.kill(!!bn),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(a,o,hs&&hs.vars.overwrite!==!0)._first||ll(this),this.parent&&u!==this.timeline.totalDuration()&&ao(this,this._dur*this.timeline._tDur/u,0,1),this}var c=this._targets,d=a?Ci(a):c,h=this._ptLookup,p=this._pt,m,g,y,E,M,_,v;if((!o||o==="all")&&dM(c,d))return o==="all"&&(this._pt=0),ll(this);for(m=this._op=this._op||[],o!=="all"&&(Sn(o)&&(M={},Kn(o,function(b){return M[b]=1}),o=M),o=FM(c,o)),v=c.length;v--;)if(~d.indexOf(c[v])){g=h[v],o==="all"?(m[v]=o,E=g,y={}):(y=m[v]=m[v]||{},E=o);for(M in E)_=g&&g[M],_&&((!("kill"in _.d)||_.d.kill(M)===!0)&&Bc(this,_,"_pt"),delete g[M]),y!=="all"&&(y[M]=1)}return this._initted&&!this._pt&&p&&ll(this),this},e.to=function(a,o){return new e(a,o,arguments[2])},e.from=function(a,o){return dl(1,arguments)},e.delayedCall=function(a,o,u,c){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:a,onComplete:o,onReverseComplete:o,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:c})},e.fromTo=function(a,o,u){return dl(2,arguments)},e.set=function(a,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(a,o)},e.killTweensOf=function(a,o,u){return Kt.killTweensOf(a,o,u)},e})(yl);gi(un.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Kn("staggerTo,staggerFrom,staggerFromTo",function(s){un[s]=function(){var e=new Bn,t=Eh.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var kp=function(e,t,n){return e[t]=n},Z_=function(e,t,n){return e[t](n)},kM=function(e,t,n,a){return e[t](a.fp,n)},BM=function(e,t,n){return e.setAttribute(t,n)},Bp=function(e,t){return en(e[t])?Z_:Ap(e[t])&&e.setAttribute?BM:kp},Q_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},zM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},J_=function(e,t){var n=t._pt,a="";if(!e&&t.b)a=t.b;else if(e===1&&t.e)a=t.e;else{for(;n;)a=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+a,n=n._next;a+=t.c}t.set(t.t,t.p,a,t)},zp=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},VM=function(e,t,n,a){for(var o=this._pt,u;o;)u=o._next,o.p===a&&o.modifier(e,t,n),o=u},HM=function(e){for(var t=this._pt,n,a;t;)a=t._next,t.p===e&&!t.op||t.op===e?Bc(this,t,"_pt"):t.dep||(n=1),t=a;return!n},GM=function(e,t,n,a){a.mSet(e,t,a.m.call(a.tween,n,a.mt),a)},ev=function(e){for(var t=e._pt,n,a,o,u;t;){for(n=t._next,a=o;a&&a.pr>t.pr;)a=a._next;(t._prev=a?a._prev:u)?t._prev._next=t:o=t,(t._next=a)?a._prev=t:u=t,t=n}e._pt=o},Zn=(function(){function s(t,n,a,o,u,c,d,h,p){this.t=n,this.s=o,this.c=u,this.p=a,this.r=c||Q_,this.d=d||this,this.set=h||kp,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,a,o){this.mSet=this.mSet||this.set,this.set=GM,this.m=n,this.mt=o,this.tween=a},s})();Kn(Lp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Np[s]=1});xi.TweenMax=xi.TweenLite=un;xi.TimelineLite=xi.TimelineMax=Bn;Kt=new Bn({sortChildren:!1,defaults:io,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});hi.stringFilter=G_;var ta=[],vc={},WM=[],Gx=0,jM=0,Fd=function(e){return(vc[e]||WM).map(function(t){return t()})},Ch=function(){var e=Date.now(),t=[];e-Gx>2&&(Fd("matchMediaInit"),ta.forEach(function(n){var a=n.queries,o=n.conditions,u,c,d,h;for(c in a)u=Zi.matchMedia(a[c]).matches,u&&(d=1),u!==o[c]&&(o[c]=u,h=1);h&&(n.revert(),d&&t.push(n))}),Fd("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(a){return n.add(null,a)})}),Gx=e,Fd("matchMedia"))},tv=(function(){function s(t,n){this.selector=n&&wh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=jM++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,a,o){en(n)&&(o=a,a=n,n=en);var u=this,c=function(){var h=qt,p=u.selector,m;return h&&h!==u&&h.data.push(u),o&&(u.selector=wh(o)),qt=u,m=a.apply(u,arguments),en(m)&&u._r.push(m),qt=h,u.selector=p,u.isReverted=!1,m};return u.last=c,n===en?c(u,function(d){return u.add(null,d)}):n?u[n]=c:c},e.ignore=function(n){var a=qt;qt=null,n(this),qt=a},e.getTweens=function(){var n=[];return this.data.forEach(function(a){return a instanceof s?n.push.apply(n,a.getTweens()):a instanceof un&&!(a.parent&&a.parent.data==="nested")&&n.push(a)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,a){var o=this;if(n?(function(){for(var c=o.getTweens(),d=o.data.length,h;d--;)h=o.data[d],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,m){return m.g-p.g||-1/0}).forEach(function(p){return p.t.revert(n)}),d=o.data.length;d--;)h=o.data[d],h instanceof Bn?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof un)&&h.revert&&h.revert(n);o._r.forEach(function(p){return p(n,o)}),o.isReverted=!0})():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),a)for(var u=ta.length;u--;)ta[u].id===this.id&&ta.splice(u,1)},e.revert=function(n){this.kill(n||{})},s})(),XM=(function(){function s(t){this.contexts=[],this.scope=t,qt&&qt.data.push(this)}var e=s.prototype;return e.add=function(n,a,o){ir(n)||(n={matches:n});var u=new tv(0,o||this.scope),c=u.conditions={},d,h,p;qt&&!u.selector&&(u.selector=qt.selector),this.contexts.push(u),a=u.add("onMatch",a),u.queries=n;for(h in n)h==="all"?p=1:(d=Zi.matchMedia(n[h]),d&&(ta.indexOf(u)<0&&ta.push(u),(c[h]=d.matches)&&(p=1),d.addListener?d.addListener(Ch):d.addEventListener("change",Ch)));return p&&a(u,function(m){return u.add(null,m)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(a){return a.kill(n,!0)})},s})(),Dc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(a){return z_(a)})},timeline:function(e){return new Bn(e)},getTweensOf:function(e,t){return Kt.getTweensOf(e,t)},getProperty:function(e,t,n,a){Sn(e)&&(e=Ci(e)[0]);var o=Qs(e||{}).get,u=n?C_:b_;return n==="native"&&(n=""),e&&(t?u((ui[t]&&ui[t].get||o)(e,t,n,a)):function(c,d,h){return u((ui[c]&&ui[c].get||o)(e,c,d,h))})},quickSetter:function(e,t,n){if(e=Ci(e),e.length>1){var a=e.map(function(p){return ei.quickSetter(p,t,n)}),o=a.length;return function(p){for(var m=o;m--;)a[m](p)}}e=e[0]||{};var u=ui[t],c=Qs(e),d=c.harness&&(c.harness.aliases||{})[t]||t,h=u?function(p){var m=new u;Za._pt=0,m.init(e,n?p+n:p,Za,0,[e]),m.render(1,m),Za._pt&&zp(1,Za)}:c.set(e,d);return u?h:function(p){return h(e,d,n?p+n:p,c,1)}},quickTo:function(e,t,n){var a,o=ei.to(e,gi((a={},a[t]="+=0.1",a.paused=!0,a.stagger=0,a),n||{})),u=function(d,h,p){return o.resetTo(t,d,h,p)};return u.tween=o,u},isTweening:function(e){return Kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ea(e.ease,io.ease)),kx(io,e||{})},config:function(e){return kx(hi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,a=e.plugins,o=e.defaults,u=e.extendTimeline;(a||"").split(",").forEach(function(c){return c&&!ui[c]&&!xi[c]&&xl(t+" effect requires "+c+" plugin.")}),Nd[t]=function(c,d,h){return n(Ci(c),gi(d||{},o),h)},u&&(Bn.prototype[t]=function(c,d,h){return this.add(Nd[t](c,ir(d)?d:(h=d)&&{},this),h)})},registerEase:function(e,t){Et[e]=ea(t)},parseEase:function(e,t){return arguments.length?ea(e,t):Et},getById:function(e){return Kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Bn(e),a,o;for(n.smoothChildTiming=Yn(e.smoothChildTiming),Kt.remove(n),n._dp=0,n._time=n._tTime=Kt._time,a=Kt._first;a;)o=a._next,(t||!(!a._dur&&a instanceof un&&a.vars.onComplete===a._targets[0]))&&Ji(n,a,a._start-a._delay),a=o;return Ji(Kt,n,0),n},context:function(e,t){return e?new tv(e,t):qt},matchMedia:function(e){return new XM(e)},matchMediaRefresh:function(){return ta.forEach(function(e){var t=e.conditions,n,a;for(a in t)t[a]&&(t[a]=!1,n=1);n&&e.revert()})||Ch()},addEventListener:function(e,t){var n=vc[e]||(vc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=vc[e],a=n&&n.indexOf(t);a>=0&&n.splice(a,1)},utils:{wrap:wM,wrapYoyo:TM,distribute:I_,random:F_,snap:U_,normalize:EM,getUnit:Ln,clamp:vM,splitColor:V_,toArray:Ci,selector:wh,mapRange:k_,pipe:SM,unitize:MM,interpolate:bM,shuffle:L_},install:S_,effects:Nd,ticker:fi,updateRoot:Bn.updateRoot,plugins:ui,globalTimeline:Kt,core:{PropTween:Zn,globals:M_,Tween:un,Timeline:Bn,Animation:yl,getCache:Qs,_removeLinkedListItem:Bc,reverting:function(){return bn},context:function(e){return e&&qt&&(qt.data.push(e),e._ctx=qt),qt},suppressOverwrites:function(e){return Cp=e}}};Kn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Dc[s]=un[s]});fi.add(Bn.updateRoot);Za=Dc.to({},{duration:0});var qM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},$M=function(e,t){var n=e._targets,a,o,u;for(a in t)for(o=n.length;o--;)u=e._ptLookup[o][a],u&&(u=u.d)&&(u._pt&&(u=qM(u,a)),u&&u.modifier&&u.modifier(t[a],e,n[o],a))},Od=function(e,t){return{name:e,headless:1,rawVars:1,init:function(a,o,u){u._onInit=function(c){var d,h;if(Sn(o)&&(d={},Kn(o,function(p){return d[p]=1}),o=d),t){d={};for(h in o)d[h]=t(o[h]);o=d}$M(c,o)}}}},ei=Dc.registerPlugin({name:"attr",init:function(e,t,n,a,o){var u,c,d;this.tween=n;for(u in t)d=e.getAttribute(u)||"",c=this.add(e,"setAttribute",(d||0)+"",t[u],a,o,0,0,u),c.op=u,c.b=d,this._props.push(u)},render:function(e,t){for(var n=t._pt;n;)bn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Od("roundProps",Th),Od("modifiers"),Od("snap",U_))||Dc;un.version=Bn.version=ei.version="3.13.0";y_=1;Rp()&&oo();Et.Power0;Et.Power1;Et.Power2;Et.Power3;Et.Power4;Et.Linear;Et.Quad;Et.Cubic;Et.Quart;Et.Quint;Et.Strong;Et.Elastic;Et.Back;Et.SteppedEase;Et.Bounce;Et.Sine;Et.Expo;Et.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Wx,ps,Ja,Vp,Ks,jx,Hp,YM=function(){return typeof window<"u"},Nr={},Xs=180/Math.PI,eo=Math.PI/180,Ua=Math.atan2,Xx=1e8,Gp=/([A-Z])/g,KM=/(left|right|width|margin|padding|x)/i,ZM=/[\s,\(]\S/,er={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ah=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},QM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},JM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},eE=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},nv=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},iv=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},tE=function(e,t,n){return e.style[t]=n},nE=function(e,t,n){return e.style.setProperty(t,n)},iE=function(e,t,n){return e._gsap[t]=n},rE=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},sE=function(e,t,n,a,o){var u=e._gsap;u.scaleX=u.scaleY=n,u.renderTransform(o,u)},aE=function(e,t,n,a,o){var u=e._gsap;u[t]=n,u.renderTransform(o,u)},Zt="transform",Qn=Zt+"Origin",oE=function s(e,t){var n=this,a=this.target,o=a.style,u=a._gsap;if(e in Nr&&o){if(this.tfm=this.tfm||{},e!=="transform")e=er[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return n.tfm[c]=Er(a,c)}):this.tfm[e]=u.x?u[e]:Er(a,e),e===Qn&&(this.tfm.zOrigin=u.zOrigin);else return er.transform.split(",").forEach(function(c){return s.call(n,c,t)});if(this.props.indexOf(Zt)>=0)return;u.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push(Qn,t,"")),e=Zt}(o||t)&&this.props.push(e,t,o[e])},rv=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},lE=function(){var e=this.props,t=this.target,n=t.style,a=t._gsap,o,u;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?t[e[o]](e[o+2]):t[e[o]]=e[o+2]:e[o+2]?n[e[o]]=e[o+2]:n.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(Gp,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)a[u]=this.tfm[u];a.svg&&(a.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),o=Hp(),(!o||!o.isStart)&&!n[Zt]&&(rv(n),a.zOrigin&&n[Qn]&&(n[Qn]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},sv=function(e,t){var n={target:e,props:[],revert:lE,save:oE};return e._gsap||ei.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(a){return n.save(a)}),n},av,Rh=function(e,t){var n=ps.createElementNS?ps.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ps.createElement(e);return n&&n.style?n:ps.createElement(e)},Ai=function s(e,t,n){var a=getComputedStyle(e);return a[t]||a.getPropertyValue(t.replace(Gp,"-$1").toLowerCase())||a.getPropertyValue(t)||!n&&s(e,lo(t)||t,1)||""},qx="O,Moz,ms,Ms,Webkit".split(","),lo=function(e,t,n){var a=t||Ks,o=a.style,u=5;if(e in o&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(qx[u]+e in o););return u<0?null:(u===3?"ms":u>=0?qx[u]:"")+e},Ph=function(){YM()&&window.document&&(Wx=window,ps=Wx.document,Ja=ps.documentElement,Ks=Rh("div")||{style:{}},Rh("div"),Zt=lo(Zt),Qn=Zt+"Origin",Ks.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",av=!!lo("perspective"),Hp=ei.core.reverting,Vp=1)},$x=function(e){var t=e.ownerSVGElement,n=Rh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=e.cloneNode(!0),o;a.style.display="block",n.appendChild(a),Ja.appendChild(n);try{o=a.getBBox()}catch{}return n.removeChild(a),Ja.removeChild(n),o},Yx=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ov=function(e){var t,n;try{t=e.getBBox()}catch{t=$x(e),n=1}return t&&(t.width||t.height)||n||(t=$x(e)),t&&!t.width&&!t.x&&!t.y?{x:+Yx(e,["x","cx","x1"])||0,y:+Yx(e,["y","cy","y1"])||0,width:0,height:0}:t},lv=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ov(e))},ra=function(e,t){if(t){var n=e.style,a;t in Nr&&t!==Qn&&(t=Zt),n.removeProperty?(a=t.substr(0,2),(a==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(a==="--"?t:t.replace(Gp,"-$1").toLowerCase())):n.removeAttribute(t)}},ms=function(e,t,n,a,o,u){var c=new Zn(e._pt,t,n,0,1,u?iv:nv);return e._pt=c,c.b=a,c.e=o,e._props.push(n),c},Kx={deg:1,rad:1,turn:1},uE={grid:1,flex:1},Ss=function s(e,t,n,a){var o=parseFloat(n)||0,u=(n+"").trim().substr((o+"").length)||"px",c=Ks.style,d=KM.test(t),h=e.tagName.toLowerCase()==="svg",p=(h?"client":"offset")+(d?"Width":"Height"),m=100,g=a==="px",y=a==="%",E,M,_,v;if(a===u||!o||Kx[a]||Kx[u])return o;if(u!=="px"&&!g&&(o=s(e,t,n,"px")),v=e.getCTM&&lv(e),(y||u==="%")&&(Nr[t]||~t.indexOf("adius")))return E=v?e.getBBox()[d?"width":"height"]:e[p],nn(y?o/E*m:o/100*E);if(c[d?"width":"height"]=m+(g?u:a),M=a!=="rem"&&~t.indexOf("adius")||a==="em"&&e.appendChild&&!h?e:e.parentNode,v&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===ps||!M.appendChild)&&(M=ps.body),_=M._gsap,_&&y&&_.width&&d&&_.time===fi.time&&!_.uncache)return nn(o/_.width*m);if(y&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=m+a,E=e[p],b?e.style[t]=b:ra(e,t)}else(y||u==="%")&&!uE[Ai(M,"display")]&&(c.position=Ai(e,"position")),M===e&&(c.position="static"),M.appendChild(Ks),E=Ks[p],M.removeChild(Ks),c.position="absolute";return d&&y&&(_=Qs(M),_.time=fi.time,_.width=M[p]),nn(g?E*o/m:E&&o?m/E*o:0)},Er=function(e,t,n,a){var o;return Vp||Ph(),t in er&&t!=="transform"&&(t=er[t],~t.indexOf(",")&&(t=t.split(",")[0])),Nr[t]&&t!=="transform"?(o=Ml(e,a),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:Lc(Ai(e,Qn))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||a||~(o+"").indexOf("calc("))&&(o=Nc[t]&&Nc[t](e,t,n)||Ai(e,t)||w_(e,t)||(t==="opacity"?1:0))),n&&!~(o+"").trim().indexOf(" ")?Ss(e,t,o,n)+n:o},cE=function(e,t,n,a){if(!n||n==="none"){var o=lo(t,e,1),u=o&&Ai(e,o,1);u&&u!==n?(t=o,n=u):t==="borderColor"&&(n=Ai(e,"borderTopColor"))}var c=new Zn(this._pt,e.style,t,0,1,J_),d=0,h=0,p,m,g,y,E,M,_,v,b,C,N,L;if(c.b=n,c.e=a,n+="",a+="",a.substring(0,6)==="var(--"&&(a=Ai(e,a.substring(4,a.indexOf(")")))),a==="auto"&&(M=e.style[t],e.style[t]=a,a=Ai(e,t)||a,M?e.style[t]=M:ra(e,t)),p=[n,a],G_(p),n=p[0],a=p[1],g=n.match(Ka)||[],L=a.match(Ka)||[],L.length){for(;m=Ka.exec(a);)_=m[0],b=a.substring(d,m.index),E?E=(E+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(E=1),_!==(M=g[h++]||"")&&(y=parseFloat(M)||0,N=M.substr((y+"").length),_.charAt(1)==="="&&(_=Qa(y,_)+N),v=parseFloat(_),C=_.substr((v+"").length),d=Ka.lastIndex-C.length,C||(C=C||hi.units[t]||N,d===a.length&&(a+=C,c.e+=C)),N!==C&&(y=Ss(e,t,M,C)||0),c._pt={_next:c._pt,p:b||h===1?b:",",s:y,c:v-y,m:E&&E<4||t==="zIndex"?Math.round:0});c.c=d<a.length?a.substring(d,a.length):""}else c.r=t==="display"&&a==="none"?iv:nv;return __.test(a)&&(c.e=0),this._pt=c,c},Zx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},fE=function(e){var t=e.split(" "),n=t[0],a=t[1]||"50%";return(n==="top"||n==="bottom"||a==="left"||a==="right")&&(e=n,n=a,a=e),t[0]=Zx[n]||n,t[1]=Zx[a]||a,t.join(" ")},dE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,a=n.style,o=t.u,u=n._gsap,c,d,h;if(o==="all"||o===!0)a.cssText="",d=1;else for(o=o.split(","),h=o.length;--h>-1;)c=o[h],Nr[c]&&(d=1,c=c==="transformOrigin"?Qn:Zt),ra(n,c);d&&(ra(n,Zt),u&&(u.svg&&n.removeAttribute("transform"),a.scale=a.rotate=a.translate="none",Ml(n,1),u.uncache=1,rv(a)))}},Nc={clearProps:function(e,t,n,a,o){if(o.data!=="isFromStart"){var u=e._pt=new Zn(e._pt,t,n,0,0,dE);return u.u=a,u.pr=-10,u.tween=o,e._props.push(n),1}}},Sl=[1,0,0,1,0,0],uv={},cv=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Qx=function(e){var t=Ai(e,Zt);return cv(t)?Sl:t.substr(7).match(g_).map(nn)},Wp=function(e,t){var n=e._gsap||Qs(e),a=e.style,o=Qx(e),u,c,d,h;return n.svg&&e.getAttribute("transform")?(d=e.transform.baseVal.consolidate().matrix,o=[d.a,d.b,d.c,d.d,d.e,d.f],o.join(",")==="1,0,0,1,0,0"?Sl:o):(o===Sl&&!e.offsetParent&&e!==Ja&&!n.svg&&(d=a.display,a.display="block",u=e.parentNode,(!u||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,c=e.nextElementSibling,Ja.appendChild(e)),o=Qx(e),d?a.display=d:ra(e,"display"),h&&(c?u.insertBefore(e,c):u?u.appendChild(e):Ja.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},Dh=function(e,t,n,a,o,u){var c=e._gsap,d=o||Wp(e,!0),h=c.xOrigin||0,p=c.yOrigin||0,m=c.xOffset||0,g=c.yOffset||0,y=d[0],E=d[1],M=d[2],_=d[3],v=d[4],b=d[5],C=t.split(" "),N=parseFloat(C[0])||0,L=parseFloat(C[1])||0,P,U,k,T;n?d!==Sl&&(U=y*_-E*M)&&(k=N*(_/U)+L*(-M/U)+(M*b-_*v)/U,T=N*(-E/U)+L*(y/U)-(y*b-E*v)/U,N=k,L=T):(P=ov(e),N=P.x+(~C[0].indexOf("%")?N/100*P.width:N),L=P.y+(~(C[1]||C[0]).indexOf("%")?L/100*P.height:L)),a||a!==!1&&c.smooth?(v=N-h,b=L-p,c.xOffset=m+(v*y+b*M)-v,c.yOffset=g+(v*E+b*_)-b):c.xOffset=c.yOffset=0,c.xOrigin=N,c.yOrigin=L,c.smooth=!!a,c.origin=t,c.originIsAbsolute=!!n,e.style[Qn]="0px 0px",u&&(ms(u,c,"xOrigin",h,N),ms(u,c,"yOrigin",p,L),ms(u,c,"xOffset",m,c.xOffset),ms(u,c,"yOffset",g,c.yOffset)),e.setAttribute("data-svg-origin",N+" "+L)},Ml=function(e,t){var n=e._gsap||new q_(e);if("x"in n&&!t&&!n.uncache)return n;var a=e.style,o=n.scaleX<0,u="px",c="deg",d=getComputedStyle(e),h=Ai(e,Qn)||"0",p,m,g,y,E,M,_,v,b,C,N,L,P,U,k,T,R,B,j,q,ne,se,ae,oe,H,ue,te,z,re,Ne,Pe,Fe;return p=m=g=M=_=v=b=C=N=0,y=E=1,n.svg=!!(e.getCTM&&lv(e)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(a[Zt]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[Zt]!=="none"?d[Zt]:"")),a.scale=a.rotate=a.translate="none"),U=Wp(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),h=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",oe=""):oe=!t&&e.getAttribute("data-svg-origin"),Dh(e,oe||h,!!oe||n.originIsAbsolute,n.smooth!==!1,U)),L=n.xOrigin||0,P=n.yOrigin||0,U!==Sl&&(B=U[0],j=U[1],q=U[2],ne=U[3],p=se=U[4],m=ae=U[5],U.length===6?(y=Math.sqrt(B*B+j*j),E=Math.sqrt(ne*ne+q*q),M=B||j?Ua(j,B)*Xs:0,b=q||ne?Ua(q,ne)*Xs+M:0,b&&(E*=Math.abs(Math.cos(b*eo))),n.svg&&(p-=L-(L*B+P*q),m-=P-(L*j+P*ne))):(Fe=U[6],Ne=U[7],te=U[8],z=U[9],re=U[10],Pe=U[11],p=U[12],m=U[13],g=U[14],k=Ua(Fe,re),_=k*Xs,k&&(T=Math.cos(-k),R=Math.sin(-k),oe=se*T+te*R,H=ae*T+z*R,ue=Fe*T+re*R,te=se*-R+te*T,z=ae*-R+z*T,re=Fe*-R+re*T,Pe=Ne*-R+Pe*T,se=oe,ae=H,Fe=ue),k=Ua(-q,re),v=k*Xs,k&&(T=Math.cos(-k),R=Math.sin(-k),oe=B*T-te*R,H=j*T-z*R,ue=q*T-re*R,Pe=ne*R+Pe*T,B=oe,j=H,q=ue),k=Ua(j,B),M=k*Xs,k&&(T=Math.cos(k),R=Math.sin(k),oe=B*T+j*R,H=se*T+ae*R,j=j*T-B*R,ae=ae*T-se*R,B=oe,se=H),_&&Math.abs(_)+Math.abs(M)>359.9&&(_=M=0,v=180-v),y=nn(Math.sqrt(B*B+j*j+q*q)),E=nn(Math.sqrt(ae*ae+Fe*Fe)),k=Ua(se,ae),b=Math.abs(k)>2e-4?k*Xs:0,N=Pe?1/(Pe<0?-Pe:Pe):0),n.svg&&(oe=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!cv(Ai(e,Zt)),oe&&e.setAttribute("transform",oe))),Math.abs(b)>90&&Math.abs(b)<270&&(o?(y*=-1,b+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=p-((n.xPercent=p&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+u,n.y=m-((n.yPercent=m&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-m)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+u,n.z=g+u,n.scaleX=nn(y),n.scaleY=nn(E),n.rotation=nn(M)+c,n.rotationX=nn(_)+c,n.rotationY=nn(v)+c,n.skewX=b+c,n.skewY=C+c,n.transformPerspective=N+u,(n.zOrigin=parseFloat(h.split(" ")[2])||!t&&n.zOrigin||0)&&(a[Qn]=Lc(h)),n.xOffset=n.yOffset=0,n.force3D=hi.force3D,n.renderTransform=n.svg?pE:av?fv:hE,n.uncache=0,n},Lc=function(e){return(e=e.split(" "))[0]+" "+e[1]},kd=function(e,t,n){var a=Ln(t);return nn(parseFloat(t)+parseFloat(Ss(e,"x",n+"px",a)))+a},hE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,fv(e,t)},ks="0deg",tl="0px",Bs=") ",fv=function(e,t){var n=t||this,a=n.xPercent,o=n.yPercent,u=n.x,c=n.y,d=n.z,h=n.rotation,p=n.rotationY,m=n.rotationX,g=n.skewX,y=n.skewY,E=n.scaleX,M=n.scaleY,_=n.transformPerspective,v=n.force3D,b=n.target,C=n.zOrigin,N="",L=v==="auto"&&e&&e!==1||v===!0;if(C&&(m!==ks||p!==ks)){var P=parseFloat(p)*eo,U=Math.sin(P),k=Math.cos(P),T;P=parseFloat(m)*eo,T=Math.cos(P),u=kd(b,u,U*T*-C),c=kd(b,c,-Math.sin(P)*-C),d=kd(b,d,k*T*-C+C)}_!==tl&&(N+="perspective("+_+Bs),(a||o)&&(N+="translate("+a+"%, "+o+"%) "),(L||u!==tl||c!==tl||d!==tl)&&(N+=d!==tl||L?"translate3d("+u+", "+c+", "+d+") ":"translate("+u+", "+c+Bs),h!==ks&&(N+="rotate("+h+Bs),p!==ks&&(N+="rotateY("+p+Bs),m!==ks&&(N+="rotateX("+m+Bs),(g!==ks||y!==ks)&&(N+="skew("+g+", "+y+Bs),(E!==1||M!==1)&&(N+="scale("+E+", "+M+Bs),b.style[Zt]=N||"translate(0, 0)"},pE=function(e,t){var n=t||this,a=n.xPercent,o=n.yPercent,u=n.x,c=n.y,d=n.rotation,h=n.skewX,p=n.skewY,m=n.scaleX,g=n.scaleY,y=n.target,E=n.xOrigin,M=n.yOrigin,_=n.xOffset,v=n.yOffset,b=n.forceCSS,C=parseFloat(u),N=parseFloat(c),L,P,U,k,T;d=parseFloat(d),h=parseFloat(h),p=parseFloat(p),p&&(p=parseFloat(p),h+=p,d+=p),d||h?(d*=eo,h*=eo,L=Math.cos(d)*m,P=Math.sin(d)*m,U=Math.sin(d-h)*-g,k=Math.cos(d-h)*g,h&&(p*=eo,T=Math.tan(h-p),T=Math.sqrt(1+T*T),U*=T,k*=T,p&&(T=Math.tan(p),T=Math.sqrt(1+T*T),L*=T,P*=T)),L=nn(L),P=nn(P),U=nn(U),k=nn(k)):(L=m,k=g,P=U=0),(C&&!~(u+"").indexOf("px")||N&&!~(c+"").indexOf("px"))&&(C=Ss(y,"x",u,"px"),N=Ss(y,"y",c,"px")),(E||M||_||v)&&(C=nn(C+E-(E*L+M*U)+_),N=nn(N+M-(E*P+M*k)+v)),(a||o)&&(T=y.getBBox(),C=nn(C+a/100*T.width),N=nn(N+o/100*T.height)),T="matrix("+L+","+P+","+U+","+k+","+C+","+N+")",y.setAttribute("transform",T),b&&(y.style[Zt]=T)},mE=function(e,t,n,a,o){var u=360,c=Sn(o),d=parseFloat(o)*(c&&~o.indexOf("rad")?Xs:1),h=d-a,p=a+h+"deg",m,g;return c&&(m=o.split("_")[1],m==="short"&&(h%=u,h!==h%(u/2)&&(h+=h<0?u:-u)),m==="cw"&&h<0?h=(h+u*Xx)%u-~~(h/u)*u:m==="ccw"&&h>0&&(h=(h-u*Xx)%u-~~(h/u)*u)),e._pt=g=new Zn(e._pt,t,n,a,h,QM),g.e=p,g.u="deg",e._props.push(n),g},Jx=function(e,t){for(var n in t)e[n]=t[n];return e},xE=function(e,t,n){var a=Jx({},n._gsap),o="perspective,force3D,transformOrigin,svgOrigin",u=n.style,c,d,h,p,m,g,y,E;a.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),u[Zt]=t,c=Ml(n,1),ra(n,Zt),n.setAttribute("transform",h)):(h=getComputedStyle(n)[Zt],u[Zt]=t,c=Ml(n,1),u[Zt]=h);for(d in Nr)h=a[d],p=c[d],h!==p&&o.indexOf(d)<0&&(y=Ln(h),E=Ln(p),m=y!==E?Ss(n,d,h,E):parseFloat(h),g=parseFloat(p),e._pt=new Zn(e._pt,c,d,m,g-m,Ah),e._pt.u=E||0,e._props.push(d));Jx(c,a)};Kn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",a="Bottom",o="Left",u=(e<3?[t,n,a,o]:[t+o,t+n,a+n,a+o]).map(function(c){return e<2?s+c:"border"+c+s});Nc[e>1?"border"+s:s]=function(c,d,h,p,m){var g,y;if(arguments.length<4)return g=u.map(function(E){return Er(c,E,h)}),y=g.join(" "),y.split(g[0]).length===5?g[0]:y;g=(p+"").split(" "),y={},u.forEach(function(E,M){return y[E]=g[M]=g[M]||g[(M-1)/2|0]}),c.init(d,y,m)}});var dv={name:"css",register:Ph,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,a,o){var u=this._props,c=e.style,d=n.vars.startAt,h,p,m,g,y,E,M,_,v,b,C,N,L,P,U,k;Vp||Ph(),this.styles=this.styles||sv(e),k=this.styles.props,this.tween=n;for(M in t)if(M!=="autoRound"&&(p=t[M],!(ui[M]&&$_(M,t,n,a,e,o)))){if(y=typeof p,E=Nc[M],y==="function"&&(p=p.call(n,a,e,o),y=typeof p),y==="string"&&~p.indexOf("random(")&&(p=_l(p)),E)E(this,e,M,p,n)&&(U=1);else if(M.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(M)+"").trim(),p+="",_s.lastIndex=0,_s.test(h)||(_=Ln(h),v=Ln(p)),v?_!==v&&(h=Ss(e,M,h,v)+v):_&&(p+=_),this.add(c,"setProperty",h,p,a,o,0,0,M),u.push(M),k.push(M,0,c[M]);else if(y!=="undefined"){if(d&&M in d?(h=typeof d[M]=="function"?d[M].call(n,a,e,o):d[M],Sn(h)&&~h.indexOf("random(")&&(h=_l(h)),Ln(h+"")||h==="auto"||(h+=hi.units[M]||Ln(Er(e,M))||""),(h+"").charAt(1)==="="&&(h=Er(e,M))):h=Er(e,M),g=parseFloat(h),b=y==="string"&&p.charAt(1)==="="&&p.substr(0,2),b&&(p=p.substr(2)),m=parseFloat(p),M in er&&(M==="autoAlpha"&&(g===1&&Er(e,"visibility")==="hidden"&&m&&(g=0),k.push("visibility",0,c.visibility),ms(this,c,"visibility",g?"inherit":"hidden",m?"inherit":"hidden",!m)),M!=="scale"&&M!=="transform"&&(M=er[M],~M.indexOf(",")&&(M=M.split(",")[0]))),C=M in Nr,C){if(this.styles.save(M),y==="string"&&p.substring(0,6)==="var(--"&&(p=Ai(e,p.substring(4,p.indexOf(")"))),m=parseFloat(p)),N||(L=e._gsap,L.renderTransform&&!t.parseTransform||Ml(e,t.parseTransform),P=t.smoothOrigin!==!1&&L.smooth,N=this._pt=new Zn(this._pt,c,Zt,0,1,L.renderTransform,L,0,-1),N.dep=1),M==="scale")this._pt=new Zn(this._pt,L,"scaleY",L.scaleY,(b?Qa(L.scaleY,b+m):m)-L.scaleY||0,Ah),this._pt.u=0,u.push("scaleY",M),M+="X";else if(M==="transformOrigin"){k.push(Qn,0,c[Qn]),p=fE(p),L.svg?Dh(e,p,0,P,0,this):(v=parseFloat(p.split(" ")[2])||0,v!==L.zOrigin&&ms(this,L,"zOrigin",L.zOrigin,v),ms(this,c,M,Lc(h),Lc(p)));continue}else if(M==="svgOrigin"){Dh(e,p,1,P,0,this);continue}else if(M in uv){mE(this,L,M,g,b?Qa(g,b+p):p);continue}else if(M==="smoothOrigin"){ms(this,L,"smooth",L.smooth,p);continue}else if(M==="force3D"){L[M]=p;continue}else if(M==="transform"){xE(this,p,e);continue}}else M in c||(M=lo(M)||M);if(C||(m||m===0)&&(g||g===0)&&!ZM.test(p)&&M in c)_=(h+"").substr((g+"").length),m||(m=0),v=Ln(p)||(M in hi.units?hi.units[M]:_),_!==v&&(g=Ss(e,M,h,v)),this._pt=new Zn(this._pt,C?L:c,M,g,(b?Qa(g,b+m):m)-g,!C&&(v==="px"||M==="zIndex")&&t.autoRound!==!1?eE:Ah),this._pt.u=v||0,_!==v&&v!=="%"&&(this._pt.b=h,this._pt.r=JM);else if(M in c)cE.call(this,e,M,h,b?b+p:p);else if(M in e)this.add(e,M,h||e[M],b?b+p:p,a,o);else if(M!=="parseTransform"){Dp(M,p);continue}C||(M in c?k.push(M,0,c[M]):typeof e[M]=="function"?k.push(M,2,e[M]()):k.push(M,1,h||e[M])),u.push(M)}}U&&ev(this)},render:function(e,t){if(t.tween._time||!Hp())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Er,aliases:er,getSetter:function(e,t,n){var a=er[t];return a&&a.indexOf(",")<0&&(t=a),t in Nr&&t!==Qn&&(e._gsap.x||Er(e,"x"))?n&&jx===n?t==="scale"?rE:iE:(jx=n||{})&&(t==="scale"?sE:aE):e.style&&!Ap(e.style[t])?tE:~t.indexOf("-")?nE:Bp(e,t)},core:{_removeProperty:ra,_getMatrix:Wp}};ei.utils.checkPrefix=lo;ei.core.getStyleSaver=sv;(function(s,e,t,n){var a=Kn(s+","+e+","+t,function(o){Nr[o]=1});Kn(e,function(o){hi.units[o]="deg",uv[o]=1}),er[a[13]]=s+","+e,Kn(n,function(o){var u=o.split(":");er[u[1]]=a[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Kn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){hi.units[s]="px"});ei.registerPlugin(dv);var Lt=ei.registerPlugin(dv)||ei;Lt.core.Tween;const gE=({position:s="right",colors:e=["#B19EEF","#5227FF"],items:t=[],socialItems:n=[],displaySocials:a=!0,displayItemNumbering:o=!0,className:u,logoUrl:c="/src/assets/logos/reactbits-gh-white.svg",menuButtonColor:d="#fff",openMenuButtonColor:h="#fff",changeMenuColorOnOpen:p=!0,accentColor:m="#5227FF",isFixed:g=!1,closeOnClickAway:y=!0,onMenuOpen:E,onMenuClose:M})=>{const[_,v]=K.useState(!1),b=K.useRef(null),C=K.useRef(null),N=K.useRef([]),L=K.useRef(null),P=K.useRef(null),U=K.useRef(null),k=K.useRef(null),T=K.useRef(null),[R,B]=K.useState(["Menu","Close"]),j=K.useRef(null),q=K.useRef(null),ne=K.useRef(null),se=K.useRef(null),ae=K.useRef(null),oe=K.useRef(null),H=K.useRef(!1),ue=K.useRef(null);K.useLayoutEffect(()=>{const ce=Lt.context(()=>{const ve=b.current,we=C.current,qe=L.current,wt=P.current,$e=U.current,ht=k.current;if(!ve||!qe||!wt||!$e||!ht)return;let V=[];we&&(V=Array.from(we.querySelectorAll(".sm-prelayer"))),N.current=V;const rt=s==="left"?-100:100;Lt.set([ve,...V],{xPercent:rt}),Lt.set(qe,{transformOrigin:"50% 50%",rotate:0}),Lt.set(wt,{transformOrigin:"50% 50%",rotate:90}),Lt.set($e,{rotate:0,transformOrigin:"50% 50%"}),Lt.set(ht,{yPercent:0}),oe.current&&Lt.set(oe.current,{color:d})});return()=>ce.revert()},[d,s]);const te=K.useCallback(()=>{const ce=b.current,ve=N.current;if(!ce)return null;j.current?.kill(),q.current&&(q.current.kill(),q.current=null),ue.current?.kill();const we=Array.from(ce.querySelectorAll(".sm-panel-itemLabel")),qe=Array.from(ce.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")),wt=ce.querySelector(".sm-socials-title"),$e=Array.from(ce.querySelectorAll(".sm-socials-link")),ht=ve.map(vt=>({el:vt,start:Number(Lt.getProperty(vt,"xPercent"))})),V=Number(Lt.getProperty(ce,"xPercent"));we.length&&Lt.set(we,{yPercent:140,rotate:10}),qe.length&&Lt.set(qe,{"--sm-num-opacity":0}),wt&&Lt.set(wt,{opacity:0}),$e.length&&Lt.set($e,{y:25,opacity:0});const rt=Lt.timeline({paused:!0});ht.forEach((vt,He)=>{rt.fromTo(vt.el,{xPercent:vt.start},{xPercent:0,duration:.5,ease:"power4.out"},He*.07)});const Tt=(ht.length?(ht.length-1)*.07:0)+(ht.length?.08:0),Be=.65;if(rt.fromTo(ce,{xPercent:V},{xPercent:0,duration:Be,ease:"power4.out"},Tt),we.length){const He=Tt+Be*.15;rt.to(we,{yPercent:0,rotate:0,duration:1,ease:"power4.out",stagger:{each:.1,from:"start"}},He),qe.length&&rt.to(qe,{duration:.6,ease:"power2.out","--sm-num-opacity":1,stagger:{each:.08,from:"start"}},He+.1)}if(wt||$e.length){const vt=Tt+Be*.4;wt&&rt.to(wt,{opacity:1,duration:.5,ease:"power2.out"},vt),$e.length&&rt.to($e,{y:0,opacity:1,duration:.55,ease:"power3.out",stagger:{each:.08,from:"start"},onComplete:()=>{Lt.set($e,{clearProps:"opacity"})}},vt+.04)}return j.current=rt,rt},[s]),z=K.useCallback(()=>{if(H.current)return;H.current=!0;const ce=te();ce?(ce.eventCallback("onComplete",()=>{H.current=!1}),ce.play(0)):H.current=!1},[te]),re=K.useCallback(()=>{j.current?.kill(),j.current=null,ue.current?.kill();const ce=b.current,ve=N.current;if(!ce)return;const we=[...ve,ce];q.current?.kill();const qe=s==="left"?-100:100;q.current=Lt.to(we,{xPercent:qe,duration:.32,ease:"power3.in",overwrite:"auto",onComplete:()=>{const wt=Array.from(ce.querySelectorAll(".sm-panel-itemLabel"));wt.length&&Lt.set(wt,{yPercent:140,rotate:10});const $e=Array.from(ce.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item"));$e.length&&Lt.set($e,{"--sm-num-opacity":0});const ht=ce.querySelector(".sm-socials-title"),V=Array.from(ce.querySelectorAll(".sm-socials-link"));ht&&Lt.set(ht,{opacity:0}),V.length&&Lt.set(V,{y:25,opacity:0}),H.current=!1}})},[s]),Ne=K.useCallback(ce=>{const ve=U.current,we=L.current,qe=P.current;!ve||!we||!qe||(ne.current?.kill(),ce?(Lt.set(ve,{rotate:0,transformOrigin:"50% 50%"}),ne.current=Lt.timeline({defaults:{ease:"power4.out"}}).to(we,{rotate:45,duration:.5},0).to(qe,{rotate:-45,duration:.5},0)):ne.current=Lt.timeline({defaults:{ease:"power3.inOut"}}).to(we,{rotate:0,duration:.35},0).to(qe,{rotate:90,duration:.35},0).to(ve,{rotate:0,duration:.001},0))},[]),Pe=K.useCallback(ce=>{const ve=oe.current;if(ve)if(ae.current?.kill(),p){const we=ce?h:d;ae.current=Lt.to(ve,{color:we,delay:.18,duration:.3,ease:"power2.out"})}else Lt.set(ve,{color:d})},[h,d,p]),Fe=K.useCallback(ce=>{const ve=k.current;if(!ve)return;se.current?.kill();const we=ce?"Menu":"Close",qe=ce?"Close":"Menu",wt=3,$e=[we];let ht=we;for(let pt=0;pt<wt;pt++)ht=ht==="Menu"?"Close":"Menu",$e.push(ht);ht!==qe&&$e.push(qe),$e.push(qe),B($e),Lt.set(ve,{yPercent:0});const V=$e.length,rt=(V-1)/V*100;se.current=Lt.to(ve,{yPercent:-rt,duration:.5+V*.07,ease:"power4.out"})},[]),ie=K.useCallback(()=>{v(!1),M?.(),re(),Ne(!1),Pe(!1),Fe(!1)},[re,Ne,Pe,Fe,M]),pe=K.useCallback(()=>{if(H.current)return;const ce=!_;v(ce),ce?(E?.(),z(),Ne(!0),Pe(!0),Fe(!0)):ie()},[_,z,ie,Ne,Pe,Fe,E]);return Px.useEffect(()=>{if(oe.current){const ce=_?h:d;p?Lt.set(oe.current,{color:ce}):Lt.set(oe.current,{color:d})}},[_,p,d,h]),Px.useEffect(()=>{if(!y||!_)return;const ce=ve=>{b.current&&!b.current.contains(ve.target)&&oe.current&&!oe.current.contains(ve.target)&&ie()};return document.addEventListener("mousedown",ce),()=>{document.removeEventListener("mousedown",ce)}},[y,_,ie]),I.jsxs("div",{className:`sm-scope z-40 ${g?"fixed top-0 left-0 w-screen h-screen overflow-hidden":"w-full h-full"} ${_?"pointer-events-auto":"pointer-events-none"}`,children:[I.jsxs("div",{className:(u?u+" ":"")+"staggered-menu-wrapper relative w-full h-full z-40",style:m?{"--sm-accent":m}:void 0,"data-position":s,"data-open":_||void 0,children:[I.jsx("div",{ref:C,className:"sm-prelayers absolute top-0 right-0 bottom-0 pointer-events-none z-[5]","aria-hidden":"true",children:(()=>{let ve=[...e&&e.length?e.slice(0,4):["#1e1e22","#35353c"]];if(ve.length>=3){const we=Math.floor(ve.length/2);ve.splice(we,1)}return ve.map((we,qe)=>I.jsx("div",{className:"sm-prelayer absolute top-0 right-0 h-full w-full translate-x-0",style:{background:we}},qe))})()}),I.jsxs("header",{className:"staggered-menu-header absolute top-0 left-0 w-full flex items-center justify-between p-[2em] bg-transparent pointer-events-none z-20","aria-label":"Main navigation header",children:[I.jsx("div",{className:"sm-logo flex items-center select-none pointer-events-auto","aria-label":"Logo",children:I.jsx("img",{src:c||"/src/assets/logos/reactbits-gh-white.svg",alt:"Logo",className:"sm-logo-img block h-8 w-auto object-contain",draggable:!1,width:110,height:24})}),I.jsxs("button",{ref:oe,className:"sm-toggle relative inline-flex items-center gap-[0.3rem] bg-transparent border-0 cursor-pointer font-medium leading-none overflow-visible pointer-events-auto","aria-label":_?"Close menu":"Open menu","aria-expanded":_,"aria-controls":"staggered-menu-panel",onClick:pe,type:"button",children:[I.jsx("span",{ref:T,className:"sm-toggle-textWrap relative inline-block h-[1em] overflow-hidden whitespace-nowrap w-[var(--sm-toggle-width,auto)] min-w-[var(--sm-toggle-width,auto)]","aria-hidden":"true",children:I.jsx("span",{ref:k,className:"sm-toggle-textInner flex flex-col leading-none",children:R.map((ce,ve)=>I.jsx("span",{className:"sm-toggle-line block h-[1em] leading-none",children:ce},ve))})}),I.jsxs("span",{ref:U,className:"sm-icon relative w-[14px] h-[14px] shrink-0 inline-flex items-center justify-center [will-change:transform]","aria-hidden":"true",children:[I.jsx("span",{ref:L,className:"sm-icon-line absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 [will-change:transform]"}),I.jsx("span",{ref:P,className:"sm-icon-line sm-icon-line-v absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 [will-change:transform]"})]})]})]}),I.jsx("aside",{id:"staggered-menu-panel",ref:b,className:"staggered-menu-panel absolute top-0 right-0 h-full bg-white flex flex-col p-[6em_2em_2em_2em] overflow-y-auto z-10 backdrop-blur-[12px] pointer-events-auto",style:{WebkitBackdropFilter:"blur(12px)"},"aria-hidden":!_,children:I.jsxs("div",{className:"sm-panel-inner flex-1 flex flex-col gap-5",children:[I.jsx("ul",{className:"sm-panel-list list-none m-0 p-0 flex flex-col gap-2",role:"list","data-numbering":o||void 0,children:t&&t.length?t.map((ce,ve)=>I.jsx("li",{className:"sm-panel-itemWrap relative overflow-hidden leading-none",children:I.jsx(ia,{to:ce.link,className:"sm-panel-item relative text-black font-semibold text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.4em]","aria-label":ce.ariaLabel,"data-index":ve+1,onClick:ie,children:I.jsx("span",{className:"sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform",children:ce.label})})},ce.label+ve)):I.jsx("li",{className:"sm-panel-itemWrap relative overflow-hidden leading-none","aria-hidden":"true",children:I.jsx("span",{className:"sm-panel-item relative text-black font-semibold text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.4em]",children:I.jsx("span",{className:"sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform",children:"No items"})})})}),a&&n&&n.length>0&&I.jsxs("div",{className:"sm-socials mt-auto pt-8 flex flex-col gap-3","aria-label":"Social links",children:[I.jsx("h3",{className:"sm-socials-title m-0 text-base font-medium [color:var(--sm-accent,#ff0000)]",children:"Socials"}),I.jsx("ul",{className:"sm-socials-list list-none m-0 p-0 flex flex-row items-center gap-4 flex-wrap",role:"list",children:n.map((ce,ve)=>I.jsx("li",{className:"sm-socials-item",children:I.jsx("a",{href:ce.link,target:"_blank",rel:"noopener noreferrer",className:"sm-socials-link text-[1.2rem] font-medium text-[#111] no-underline relative inline-block py-[2px] transition-[color,opacity] duration-300 ease-linear",children:ce.label})},ce.label+ve))})]})]})})]}),I.jsx("style",{children:`
.sm-scope .staggered-menu-wrapper { position: relative; width: 100%; height: 100%; z-index: 40; }
.sm-scope .staggered-menu-header { position: absolute; top: 0; left: 0; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 2em; background: transparent; pointer-events: none; z-index: 20; }
.sm-scope .staggered-menu-header > * { pointer-events: auto; }
.sm-scope .sm-logo { display: flex; align-items: center; user-select: none; }
.sm-scope .sm-logo-img { display: block; height: 32px; width: auto; object-fit: contain; }
.sm-scope .sm-toggle { position: relative; display: inline-flex; align-items: center; gap: 0.3rem; background: transparent; border: none; cursor: pointer; color: #e9e9ef; font-weight: 500; line-height: 1; overflow: visible; }
.sm-scope .sm-toggle:focus-visible { outline: 2px solid #ffffffaa; outline-offset: 4px; border-radius: 4px; }
.sm-scope .sm-line:last-of-type { margin-top: 6px; }
.sm-scope .sm-toggle-textWrap { position: relative; margin-right: 0.5em; display: inline-block; height: 1em; overflow: hidden; white-space: nowrap; width: var(--sm-toggle-width, auto); min-width: var(--sm-toggle-width, auto); }
.sm-scope .sm-toggle-textInner { display: flex; flex-direction: column; line-height: 1; }
.sm-scope .sm-toggle-line { display: block; height: 1em; line-height: 1; }
.sm-scope .sm-icon { position: relative; width: 14px; height: 14px; flex: 0 0 14px; display: inline-flex; align-items: center; justify-content: center; will-change: transform; }
.sm-scope .sm-panel-itemWrap { position: relative; overflow: hidden; line-height: 1; }
.sm-scope .sm-icon-line { position: absolute; left: 50%; top: 50%; width: 100%; height: 2px; background: currentColor; border-radius: 2px; transform: translate(-50%, -50%); will-change: transform; }
.sm-scope .sm-line { display: none !important; }
.sm-scope .staggered-menu-panel { position: fixed; top: 0; bottom: 0;right: 0; width: clamp(260px, 38vw, 420px); height: 100%; background: white; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); display: flex; flex-direction: column; padding: 6em 2em 2em 2em; overflow-y: auto; z-index: 10; }
.sm-scope [data-position='left'] .staggered-menu-panel { right: auto; left: 0; }
.sm-scope .sm-prelayers { position: absolute; top: 0; right: 0; bottom: 0; width: clamp(260px, 38vw, 420px); pointer-events: none; z-index: 5; }
.sm-scope [data-position='left'] .sm-prelayers { right: auto; left: 0; }
.sm-scope .sm-prelayer { position: absolute; top: 0; right: 0; height: 100%; width: 100%; transform: translateX(0); }
.sm-scope .sm-panel-inner { flex: 1; display: flex; flex-direction: column; gap: 1.25rem; }
.sm-scope .sm-socials { margin-top: auto; padding-top: 2rem; display: flex; flex-direction: column; gap: 0.75rem; }
.sm-scope .sm-socials-title { margin: 0; font-size: 1rem; font-weight: 500; color: var(--sm-accent, #ff0000); }
.sm-scope .sm-socials-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: row; align-items: center; gap: 1rem; flex-wrap: wrap; }
.sm-scope .sm-socials-list .sm-socials-link { opacity: 1; transition: opacity 0.3s ease; }
.sm-scope .sm-socials-list:hover .sm-socials-link:not(:hover) { opacity: 0.35; }
.sm-scope .sm-socials-list:focus-within .sm-socials-link:not(:focus-visible) { opacity: 0.35; }
.sm-scope .sm-socials-list .sm-socials-link:hover,
.sm-scope .sm-socials-list .sm-socials-link:focus-visible { opacity: 1; }
.sm-scope .sm-socials-link:focus-visible { outline: 2px solid var(--sm-accent, #ff0000); outline-offset: 3px; }
.sm-scope .sm-socials-link { font-size: 1.2rem; font-weight: 500; color: #111; text-decoration: none; position: relative; padding: 2px 0; display: inline-block; transition: color 0.3s ease, opacity 0.3s ease; }
.sm-scope .sm-socials-link:hover { color: var(--sm-accent, #ff0000); }
.sm-scope .sm-panel-title { margin: 0; font-size: 1rem; font-weight: 600; color: #fff; text-transform: uppercase; }
.sm-scope .sm-panel-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; }
.sm-scope .sm-panel-item { position: relative; color: #000; font-weight: 600; font-size: 4rem; cursor: pointer; line-height: 1; letter-spacing: -2px; text-transform: uppercase; transition: background 0.25s, color 0.25s; display: inline-block; text-decoration: none; padding-right: 1.4em; }
.sm-scope .sm-panel-itemLabel { display: inline-block; will-change: transform; transform-origin: 50% 100%; }
.sm-scope .sm-panel-item:hover { color: var(--sm-accent, #ff0000); }
.sm-scope .sm-panel-list[data-numbering] { counter-reset: smItem; }
.sm-scope .sm-panel-list[data-numbering] .sm-panel-item::after { counter-increment: smItem; content: counter(smItem, decimal-leading-zero); position: absolute; top: 0.1em; right: 3.2em; font-size: 18px; font-weight: 400; color: var(--sm-accent, #ff0000); letter-spacing: 0; pointer-events: none; user-select: none; opacity: var(--sm-num-opacity, 0); }
@media (max-width: 1024px) { .sm-scope .staggered-menu-panel { width: 100%; left: 0; right: 0; } .sm-scope .staggered-menu-wrapper[data-open] .sm-logo-img { filter: invert(100%); } }
@media (max-width: 640px) { .sm-scope .staggered-menu-panel { width: 100%; left: 0; right: 0; } .sm-scope .staggered-menu-wrapper[data-open] .sm-logo-img { filter: invert(100%); } }
      `})]})};function _E(){const[s,e]=K.useState(!1);K.useEffect(()=>{const n=()=>{e(window.scrollY>50)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]);const t=[{label:"Home",ariaLabel:"Go to home page",link:"/"},{label:"Races",ariaLabel:"View races",link:"/races"},{label:"Collections",ariaLabel:"View collections",link:"/#collections"},{label:"About",ariaLabel:"Learn about us",link:"/#about"}];return I.jsxs(I.Fragment,{children:[I.jsx("div",{className:"md:hidden",children:I.jsx(gE,{isFixed:!1,logoUrl:"/images/whitehorse.png",colors:["#1a1a1a","#ff2800"],accentColor:"#ff2800",menuButtonColor:"#fff",openMenuButtonColor:"#000",changeMenuColorOnOpen:!0,items:t,displaySocials:!1,displayItemNumbering:!0,closeOnClickAway:!0})}),I.jsx("header",{className:`hidden md:flex fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${s?"bg-black/90 backdrop-blur-md":"bg-transparent"}`,children:I.jsx("nav",{className:"container mx-auto px-6 py-4",children:I.jsxs("div",{className:"flex items-center justify-between",children:[I.jsxs("div",{className:"flex items-center space-x-3",children:[I.jsx("div",{className:"w-8 h-8 rounded-sm flex items-center justify-center",children:I.jsx("img",{src:"/images/whitehorse.png",alt:"logo-ferrari",className:"h-full"})}),I.jsx("span",{className:"text-white tracking-wider",children:"SCUDERIA FERRARI"})]}),I.jsxs("div",{className:"flex items-center space-x-8",children:[I.jsx(ia,{to:"/",className:"text-white hover:text-red-500 transition-colors",children:"Home"}),I.jsx(ia,{to:"/races",className:"text-white hover:text-red-500 transition-colors",children:"Races"}),I.jsx("a",{href:"/#collections",className:"text-white hover:text-red-500 transition-colors",children:"Collections"}),I.jsx("a",{href:"/#about",className:"text-white hover:text-red-500 transition-colors",children:"About"})]})]})})})]})}const pl=s=>{window.open(s,"_blank")};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jp="181",vE=0,eg=1,yE=2,hv=1,SE=2,Sr=3,Ms=0,Jn=1,wr=2,Ar=0,to=1,tg=2,ng=3,ig=4,ME=5,$s=100,EE=101,wE=102,TE=103,bE=104,CE=200,AE=201,RE=202,PE=203,Nh=204,Lh=205,DE=206,NE=207,LE=208,IE=209,UE=210,FE=211,OE=212,kE=213,BE=214,Ih=0,Uh=1,Fh=2,uo=3,Oh=4,kh=5,Bh=6,zh=7,pv=0,zE=1,VE=2,vs=0,HE=1,GE=2,WE=3,jE=4,XE=5,qE=6,$E=7,mv=300,co=301,fo=302,Vh=303,Hh=304,Hc=306,Gh=1e3,Tr=1001,Wh=1002,pi=1003,YE=1004,qu=1005,Ri=1006,Bd=1007,Zs=1008,Lr=1009,xv=1010,gv=1011,El=1012,Xp=1013,sa=1014,br=1015,go=1016,qp=1017,$p=1018,wl=1020,_v=35902,vv=35899,yv=1021,Sv=1022,Gi=1023,Tl=1026,bl=1027,Mv=1028,Yp=1029,Kp=1030,Zp=1031,Qp=1033,yc=33776,Sc=33777,Mc=33778,Ec=33779,jh=35840,Xh=35841,qh=35842,$h=35843,Yh=36196,Kh=37492,Zh=37496,Qh=37808,Jh=37809,ep=37810,tp=37811,np=37812,ip=37813,rp=37814,sp=37815,ap=37816,op=37817,lp=37818,up=37819,cp=37820,fp=37821,dp=36492,hp=36494,pp=36495,mp=36283,xp=36284,gp=36285,_p=36286,KE=3200,ZE=3201,QE=0,JE=1,ds="",ci="srgb",ho="srgb-linear",Ic="linear",Ft="srgb",Fa=7680,rg=519,e3=512,t3=513,n3=514,Ev=515,i3=516,r3=517,s3=518,a3=519,sg=35044,ag="300 es",tr=2e3,Uc=2001;function wv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Fc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function o3(){const s=Fc("canvas");return s.style.display="block",s}const og={};function lg(...s){const e="THREE."+s.shift();console.log(e,...s)}function xt(...s){const e="THREE."+s.shift();console.warn(e,...s)}function rn(...s){const e="THREE."+s.shift();console.error(e,...s)}function Cl(...s){const e=s.join(" ");e in og||(og[e]=!0,xt(...s))}function l3(s,e,t){return new Promise(function(n,a){function o(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}class _o{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let o=0,u=a.length;o<u;o++)a[o].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zd=Math.PI/180,vp=180/Math.PI;function Nl(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]).toLowerCase()}function Mt(s,e,t){return Math.max(e,Math.min(t,s))}function u3(s,e){return(s%e+e)%e}function Vd(s,e,t){return(1-t)*s+t*e}function nl(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function $n(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(e=0,t=0){Ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*n-u*a+e.x,this.y=o*a+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ll{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,o,u,c){let d=n[a+0],h=n[a+1],p=n[a+2],m=n[a+3],g=o[u+0],y=o[u+1],E=o[u+2],M=o[u+3];if(c<=0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(c>=1){e[t+0]=g,e[t+1]=y,e[t+2]=E,e[t+3]=M;return}if(m!==M||d!==g||h!==y||p!==E){let _=d*g+h*y+p*E+m*M;_<0&&(g=-g,y=-y,E=-E,M=-M,_=-_);let v=1-c;if(_<.9995){const b=Math.acos(_),C=Math.sin(b);v=Math.sin(v*b)/C,c=Math.sin(c*b)/C,d=d*v+g*c,h=h*v+y*c,p=p*v+E*c,m=m*v+M*c}else{d=d*v+g*c,h=h*v+y*c,p=p*v+E*c,m=m*v+M*c;const b=1/Math.sqrt(d*d+h*h+p*p+m*m);d*=b,h*=b,p*=b,m*=b}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,a,o,u){const c=n[a],d=n[a+1],h=n[a+2],p=n[a+3],m=o[u],g=o[u+1],y=o[u+2],E=o[u+3];return e[t]=c*E+p*m+d*y-h*g,e[t+1]=d*E+p*g+h*m-c*y,e[t+2]=h*E+p*y+c*g-d*m,e[t+3]=p*E-c*m-d*g-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,o=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(n/2),p=c(a/2),m=c(o/2),g=d(n/2),y=d(a/2),E=d(o/2);switch(u){case"XYZ":this._x=g*p*m+h*y*E,this._y=h*y*m-g*p*E,this._z=h*p*E+g*y*m,this._w=h*p*m-g*y*E;break;case"YXZ":this._x=g*p*m+h*y*E,this._y=h*y*m-g*p*E,this._z=h*p*E-g*y*m,this._w=h*p*m+g*y*E;break;case"ZXY":this._x=g*p*m-h*y*E,this._y=h*y*m+g*p*E,this._z=h*p*E+g*y*m,this._w=h*p*m-g*y*E;break;case"ZYX":this._x=g*p*m-h*y*E,this._y=h*y*m+g*p*E,this._z=h*p*E-g*y*m,this._w=h*p*m+g*y*E;break;case"YZX":this._x=g*p*m+h*y*E,this._y=h*y*m+g*p*E,this._z=h*p*E-g*y*m,this._w=h*p*m-g*y*E;break;case"XZY":this._x=g*p*m-h*y*E,this._y=h*y*m-g*p*E,this._z=h*p*E+g*y*m,this._w=h*p*m+g*y*E;break;default:xt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],o=t[8],u=t[1],c=t[5],d=t[9],h=t[2],p=t[6],m=t[10],g=n+c+m;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(p-d)*y,this._y=(o-h)*y,this._z=(u-a)*y}else if(n>c&&n>m){const y=2*Math.sqrt(1+n-c-m);this._w=(p-d)/y,this._x=.25*y,this._y=(a+u)/y,this._z=(o+h)/y}else if(c>m){const y=2*Math.sqrt(1+c-n-m);this._w=(o-h)/y,this._x=(a+u)/y,this._y=.25*y,this._z=(d+p)/y}else{const y=2*Math.sqrt(1+m-n-c);this._w=(u-a)/y,this._x=(o+h)/y,this._y=(d+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,o=e._z,u=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=n*p+u*c+a*h-o*d,this._y=a*p+u*d+o*c-n*h,this._z=o*p+u*h+n*d-a*c,this._w=u*p-n*c-a*d-o*h,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,a=e._y,o=e._z,u=e._w,c=this.dot(e);c<0&&(n=-n,a=-a,o=-o,u=-u,c=-c);let d=1-t;if(c<.9995){const h=Math.acos(c),p=Math.sin(h);d=Math.sin(d*h)/p,t=Math.sin(t*h)/p,this._x=this._x*d+n*t,this._y=this._y*d+a*t,this._z=this._z*d+o*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+n*t,this._y=this._y*d+a*t,this._z=this._z*d+o*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class he{constructor(e=0,t=0,n=0){he.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ug.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ug.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*a,this.y=o[1]*t+o[4]*n+o[7]*a,this.z=o[2]*t+o[5]*n+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=e.elements,u=1/(o[3]*t+o[7]*n+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*a+o[12])*u,this.y=(o[1]*t+o[5]*n+o[9]*a+o[13])*u,this.z=(o[2]*t+o[6]*n+o[10]*a+o[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,o=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*a-c*n),p=2*(c*t-o*a),m=2*(o*n-u*t);return this.x=t+d*h+u*m-c*p,this.y=n+d*p+c*h-o*m,this.z=a+d*m+o*p-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*a,this.y=o[1]*t+o[5]*n+o[9]*a,this.z=o[2]*t+o[6]*n+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,o=e.z,u=t.x,c=t.y,d=t.z;return this.x=a*d-o*c,this.y=o*u-n*d,this.z=n*c-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hd.copy(this).projectOnVector(e),this.sub(Hd)}reflect(e){return this.sub(Hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hd=new he,ug=new Ll;class gt{constructor(e,t,n,a,o,u,c,d,h){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,u,c,d,h)}set(e,t,n,a,o,u,c,d,h){const p=this.elements;return p[0]=e,p[1]=a,p[2]=c,p[3]=t,p[4]=o,p[5]=d,p[6]=n,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,u=n[0],c=n[3],d=n[6],h=n[1],p=n[4],m=n[7],g=n[2],y=n[5],E=n[8],M=a[0],_=a[3],v=a[6],b=a[1],C=a[4],N=a[7],L=a[2],P=a[5],U=a[8];return o[0]=u*M+c*b+d*L,o[3]=u*_+c*C+d*P,o[6]=u*v+c*N+d*U,o[1]=h*M+p*b+m*L,o[4]=h*_+p*C+m*P,o[7]=h*v+p*N+m*U,o[2]=g*M+y*b+E*L,o[5]=g*_+y*C+E*P,o[8]=g*v+y*N+E*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-n*o*p+n*c*d+a*o*h-a*u*d}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],m=p*u-c*h,g=c*d-p*o,y=h*o-u*d,E=t*m+n*g+a*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=m*M,e[1]=(a*h-p*n)*M,e[2]=(c*n-a*u)*M,e[3]=g*M,e[4]=(p*t-a*d)*M,e[5]=(a*o-c*t)*M,e[6]=y*M,e[7]=(n*d-h*t)*M,e[8]=(u*t-n*o)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,o,u,c){const d=Math.cos(o),h=Math.sin(o);return this.set(n*d,n*h,-n*(d*u+h*c)+u+e,-a*h,a*d,-a*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Gd.makeScale(e,t)),this}rotate(e){return this.premultiply(Gd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gd=new gt,cg=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fg=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function c3(){const s={enabled:!0,workingColorSpace:ho,spaces:{},convert:function(a,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===Ft&&(a.r=Rr(a.r),a.g=Rr(a.g),a.b=Rr(a.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ft&&(a.r=no(a.r),a.g=no(a.g),a.b=no(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ds?Ic:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,u){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return Cl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return Cl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ho]:{primaries:e,whitePoint:n,transfer:Ic,toXYZ:cg,fromXYZ:fg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:n,transfer:Ft,toXYZ:cg,fromXYZ:fg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),s}const Dt=c3();function Rr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function no(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Oa;class f3{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Oa===void 0&&(Oa=Fc("canvas")),Oa.width=e.width,Oa.height=e.height;const a=Oa.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=Oa}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),o=a.data;for(let u=0;u<o.length;u++)o[u]=Rr(o[u]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rr(t[n]/255)*255):t[n]=Rr(t[n]);return{data:t,width:e.width,height:e.height}}else return xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let d3=0;class Jp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d3++}),this.uuid=Nl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let u=0,c=a.length;u<c;u++)a[u].isDataTexture?o.push(Wd(a[u].image)):o.push(Wd(a[u]))}else o=Wd(a);n.url=o}return t||(e.images[this.uuid]=n),n}}function Wd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?f3.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(xt("Texture: Unable to serialize Texture."),{})}let h3=0;const jd=new he;class zn extends _o{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,n=Tr,a=Tr,o=Ri,u=Zs,c=Gi,d=Lr,h=zn.DEFAULT_ANISOTROPY,p=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h3++}),this.uuid=Nl(),this.name="",this.source=new Jp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=o,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jd).x}get height(){return this.source.getSize(jd).y}get depth(){return this.source.getSize(jd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){xt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){xt(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gh:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case Wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gh:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case Wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=mv;zn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,t=0,n=0,a=1){sn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*a+u[12]*o,this.y=u[1]*t+u[5]*n+u[9]*a+u[13]*o,this.z=u[2]*t+u[6]*n+u[10]*a+u[14]*o,this.w=u[3]*t+u[7]*n+u[11]*a+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,o;const d=e.elements,h=d[0],p=d[4],m=d[8],g=d[1],y=d[5],E=d[9],M=d[2],_=d[6],v=d[10];if(Math.abs(p-g)<.01&&Math.abs(m-M)<.01&&Math.abs(E-_)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+M)<.1&&Math.abs(E+_)<.1&&Math.abs(h+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(h+1)/2,N=(y+1)/2,L=(v+1)/2,P=(p+g)/4,U=(m+M)/4,k=(E+_)/4;return C>N&&C>L?C<.01?(n=0,a=.707106781,o=.707106781):(n=Math.sqrt(C),a=P/n,o=U/n):N>L?N<.01?(n=.707106781,a=0,o=.707106781):(a=Math.sqrt(N),n=P/a,o=k/a):L<.01?(n=.707106781,a=.707106781,o=0):(o=Math.sqrt(L),n=U/o,a=k/o),this.set(n,a,o,t),this}let b=Math.sqrt((_-E)*(_-E)+(m-M)*(m-M)+(g-p)*(g-p));return Math.abs(b)<.001&&(b=1),this.x=(_-E)/b,this.y=(m-M)/b,this.z=(g-p)/b,this.w=Math.acos((h+y+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class p3 extends _o{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t);const a={width:e,height:t,depth:n.depth},o=new zn(a);this.textures=[];const u=n.count;for(let c=0;c<u;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Jp(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class aa extends p3{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Tv extends zn{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=pi,this.minFilter=pi,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class m3 extends zn{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=pi,this.minFilter=pi,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Il{constructor(e=new he(1/0,1/0,1/0),t=new he(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=o.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Fi):Fi.fromBufferAttribute(o,u),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$u.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$u.copy(n.boundingBox)),$u.applyMatrix4(e.matrixWorld),this.union($u)}const a=e.children;for(let o=0,u=a.length;o<u;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(il),Yu.subVectors(this.max,il),ka.subVectors(e.a,il),Ba.subVectors(e.b,il),za.subVectors(e.c,il),as.subVectors(Ba,ka),os.subVectors(za,Ba),zs.subVectors(ka,za);let t=[0,-as.z,as.y,0,-os.z,os.y,0,-zs.z,zs.y,as.z,0,-as.x,os.z,0,-os.x,zs.z,0,-zs.x,-as.y,as.x,0,-os.y,os.x,0,-zs.y,zs.x,0];return!Xd(t,ka,Ba,za,Yu)||(t=[1,0,0,0,1,0,0,0,1],!Xd(t,ka,Ba,za,Yu))?!1:(Ku.crossVectors(as,os),t=[Ku.x,Ku.y,Ku.z],Xd(t,ka,Ba,za,Yu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mr=[new he,new he,new he,new he,new he,new he,new he,new he],Fi=new he,$u=new Il,ka=new he,Ba=new he,za=new he,as=new he,os=new he,zs=new he,il=new he,Yu=new he,Ku=new he,Vs=new he;function Xd(s,e,t,n,a){for(let o=0,u=s.length-3;o<=u;o+=3){Vs.fromArray(s,o);const c=a.x*Math.abs(Vs.x)+a.y*Math.abs(Vs.y)+a.z*Math.abs(Vs.z),d=e.dot(Vs),h=t.dot(Vs),p=n.dot(Vs);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}const x3=new Il,rl=new he,qd=new he;class em{constructor(e=new he,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):x3.setFromPoints(e).getCenter(n);let a=0;for(let o=0,u=e.length;o<u;o++)a=Math.max(a,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rl.subVectors(e,this.center);const t=rl.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(rl,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rl.copy(e.center).add(qd)),this.expandByPoint(rl.copy(e.center).sub(qd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const xr=new he,$d=new he,Zu=new he,ls=new he,Yd=new he,Qu=new he,Kd=new he;class g3{constructor(e=new he,t=new he(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xr.copy(this.origin).addScaledVector(this.direction,t),xr.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){$d.copy(e).add(t).multiplyScalar(.5),Zu.copy(t).sub(e).normalize(),ls.copy(this.origin).sub($d);const o=e.distanceTo(t)*.5,u=-this.direction.dot(Zu),c=ls.dot(this.direction),d=-ls.dot(Zu),h=ls.lengthSq(),p=Math.abs(1-u*u);let m,g,y,E;if(p>0)if(m=u*d-c,g=u*c-d,E=o*p,m>=0)if(g>=-E)if(g<=E){const M=1/p;m*=M,g*=M,y=m*(m+u*g+2*c)+g*(u*m+g+2*d)+h}else g=o,m=Math.max(0,-(u*g+c)),y=-m*m+g*(g+2*d)+h;else g=-o,m=Math.max(0,-(u*g+c)),y=-m*m+g*(g+2*d)+h;else g<=-E?(m=Math.max(0,-(-u*o+c)),g=m>0?-o:Math.min(Math.max(-o,-d),o),y=-m*m+g*(g+2*d)+h):g<=E?(m=0,g=Math.min(Math.max(-o,-d),o),y=g*(g+2*d)+h):(m=Math.max(0,-(u*o+c)),g=m>0?o:Math.min(Math.max(-o,-d),o),y=-m*m+g*(g+2*d)+h);else g=u>0?-o:o,m=Math.max(0,-(u*g+c)),y=-m*m+g*(g+2*d)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,m),a&&a.copy($d).addScaledVector(Zu,g),y}intersectSphere(e,t){xr.subVectors(e.center,this.origin);const n=xr.dot(this.direction),a=xr.dot(xr)-n*n,o=e.radius*e.radius;if(a>o)return null;const u=Math.sqrt(o-a),c=n-u,d=n+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,o,u,c,d;const h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return h>=0?(n=(e.min.x-g.x)*h,a=(e.max.x-g.x)*h):(n=(e.max.x-g.x)*h,a=(e.min.x-g.x)*h),p>=0?(o=(e.min.y-g.y)*p,u=(e.max.y-g.y)*p):(o=(e.max.y-g.y)*p,u=(e.min.y-g.y)*p),n>u||o>a||((o>n||isNaN(n))&&(n=o),(u<a||isNaN(a))&&(a=u),m>=0?(c=(e.min.z-g.z)*m,d=(e.max.z-g.z)*m):(c=(e.max.z-g.z)*m,d=(e.min.z-g.z)*m),n>d||c>a)||((c>n||n!==n)&&(n=c),(d<a||a!==a)&&(a=d),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,xr)!==null}intersectTriangle(e,t,n,a,o){Yd.subVectors(t,e),Qu.subVectors(n,e),Kd.crossVectors(Yd,Qu);let u=this.direction.dot(Kd),c;if(u>0){if(a)return null;c=1}else if(u<0)c=-1,u=-u;else return null;ls.subVectors(this.origin,e);const d=c*this.direction.dot(Qu.crossVectors(ls,Qu));if(d<0)return null;const h=c*this.direction.dot(Yd.cross(ls));if(h<0||d+h>u)return null;const p=-c*ls.dot(Kd);return p<0?null:this.at(p/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(e,t,n,a,o,u,c,d,h,p,m,g,y,E,M,_){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,u,c,d,h,p,m,g,y,E,M,_)}set(e,t,n,a,o,u,c,d,h,p,m,g,y,E,M,_){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=a,v[1]=o,v[5]=u,v[9]=c,v[13]=d,v[2]=h,v[6]=p,v[10]=m,v[14]=g,v[3]=y,v[7]=E,v[11]=M,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,a=1/Va.setFromMatrixColumn(e,0).length(),o=1/Va.setFromMatrixColumn(e,1).length(),u=1/Va.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,o=e.z,u=Math.cos(n),c=Math.sin(n),d=Math.cos(a),h=Math.sin(a),p=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const g=u*p,y=u*m,E=c*p,M=c*m;t[0]=d*p,t[4]=-d*m,t[8]=h,t[1]=y+E*h,t[5]=g-M*h,t[9]=-c*d,t[2]=M-g*h,t[6]=E+y*h,t[10]=u*d}else if(e.order==="YXZ"){const g=d*p,y=d*m,E=h*p,M=h*m;t[0]=g+M*c,t[4]=E*c-y,t[8]=u*h,t[1]=u*m,t[5]=u*p,t[9]=-c,t[2]=y*c-E,t[6]=M+g*c,t[10]=u*d}else if(e.order==="ZXY"){const g=d*p,y=d*m,E=h*p,M=h*m;t[0]=g-M*c,t[4]=-u*m,t[8]=E+y*c,t[1]=y+E*c,t[5]=u*p,t[9]=M-g*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const g=u*p,y=u*m,E=c*p,M=c*m;t[0]=d*p,t[4]=E*h-y,t[8]=g*h+M,t[1]=d*m,t[5]=M*h+g,t[9]=y*h-E,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const g=u*d,y=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=M-g*m,t[8]=E*m+y,t[1]=m,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=y*m+E,t[10]=g-M*m}else if(e.order==="XZY"){const g=u*d,y=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=-m,t[8]=h*p,t[1]=g*m+M,t[5]=u*p,t[9]=y*m-E,t[2]=E*m-y,t[6]=c*p,t[10]=M*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_3,e,v3)}lookAt(e,t,n){const a=this.elements;return oi.subVectors(e,t),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),us.crossVectors(n,oi),us.lengthSq()===0&&(Math.abs(n.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),us.crossVectors(n,oi)),us.normalize(),Ju.crossVectors(oi,us),a[0]=us.x,a[4]=Ju.x,a[8]=oi.x,a[1]=us.y,a[5]=Ju.y,a[9]=oi.y,a[2]=us.z,a[6]=Ju.z,a[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,u=n[0],c=n[4],d=n[8],h=n[12],p=n[1],m=n[5],g=n[9],y=n[13],E=n[2],M=n[6],_=n[10],v=n[14],b=n[3],C=n[7],N=n[11],L=n[15],P=a[0],U=a[4],k=a[8],T=a[12],R=a[1],B=a[5],j=a[9],q=a[13],ne=a[2],se=a[6],ae=a[10],oe=a[14],H=a[3],ue=a[7],te=a[11],z=a[15];return o[0]=u*P+c*R+d*ne+h*H,o[4]=u*U+c*B+d*se+h*ue,o[8]=u*k+c*j+d*ae+h*te,o[12]=u*T+c*q+d*oe+h*z,o[1]=p*P+m*R+g*ne+y*H,o[5]=p*U+m*B+g*se+y*ue,o[9]=p*k+m*j+g*ae+y*te,o[13]=p*T+m*q+g*oe+y*z,o[2]=E*P+M*R+_*ne+v*H,o[6]=E*U+M*B+_*se+v*ue,o[10]=E*k+M*j+_*ae+v*te,o[14]=E*T+M*q+_*oe+v*z,o[3]=b*P+C*R+N*ne+L*H,o[7]=b*U+C*B+N*se+L*ue,o[11]=b*k+C*j+N*ae+L*te,o[15]=b*T+C*q+N*oe+L*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],o=e[12],u=e[1],c=e[5],d=e[9],h=e[13],p=e[2],m=e[6],g=e[10],y=e[14],E=e[3],M=e[7],_=e[11],v=e[15];return E*(+o*d*m-a*h*m-o*c*g+n*h*g+a*c*y-n*d*y)+M*(+t*d*y-t*h*g+o*u*g-a*u*y+a*h*p-o*d*p)+_*(+t*h*m-t*c*y-o*u*m+n*u*y+o*c*p-n*h*p)+v*(-a*c*p-t*d*m+t*c*g+a*u*m-n*u*g+n*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],m=e[9],g=e[10],y=e[11],E=e[12],M=e[13],_=e[14],v=e[15],b=m*_*h-M*g*h+M*d*y-c*_*y-m*d*v+c*g*v,C=E*g*h-p*_*h-E*d*y+u*_*y+p*d*v-u*g*v,N=p*M*h-E*m*h+E*c*y-u*M*y-p*c*v+u*m*v,L=E*m*d-p*M*d-E*c*g+u*M*g+p*c*_-u*m*_,P=t*b+n*C+a*N+o*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/P;return e[0]=b*U,e[1]=(M*g*o-m*_*o-M*a*y+n*_*y+m*a*v-n*g*v)*U,e[2]=(c*_*o-M*d*o+M*a*h-n*_*h-c*a*v+n*d*v)*U,e[3]=(m*d*o-c*g*o-m*a*h+n*g*h+c*a*y-n*d*y)*U,e[4]=C*U,e[5]=(p*_*o-E*g*o+E*a*y-t*_*y-p*a*v+t*g*v)*U,e[6]=(E*d*o-u*_*o-E*a*h+t*_*h+u*a*v-t*d*v)*U,e[7]=(u*g*o-p*d*o+p*a*h-t*g*h-u*a*y+t*d*y)*U,e[8]=N*U,e[9]=(E*m*o-p*M*o-E*n*y+t*M*y+p*n*v-t*m*v)*U,e[10]=(u*M*o-E*c*o+E*n*h-t*M*h-u*n*v+t*c*v)*U,e[11]=(p*c*o-u*m*o-p*n*h+t*m*h+u*n*y-t*c*y)*U,e[12]=L*U,e[13]=(p*M*a-E*m*a+E*n*g-t*M*g-p*n*_+t*m*_)*U,e[14]=(E*c*a-u*M*a-E*n*d+t*M*d+u*n*_-t*c*_)*U,e[15]=(u*m*a-p*c*a+p*n*d-t*m*d-u*n*g+t*c*g)*U,this}scale(e){const t=this.elements,n=e.x,a=e.y,o=e.z;return t[0]*=n,t[4]*=a,t[8]*=o,t[1]*=n,t[5]*=a,t[9]*=o,t[2]*=n,t[6]*=a,t[10]*=o,t[3]*=n,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),o=1-n,u=e.x,c=e.y,d=e.z,h=o*u,p=o*c;return this.set(h*u+n,h*c-a*d,h*d+a*c,0,h*c+a*d,p*c+n,p*d-a*u,0,h*d-a*c,p*d+a*u,o*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,o,u){return this.set(1,n,o,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,o=t._x,u=t._y,c=t._z,d=t._w,h=o+o,p=u+u,m=c+c,g=o*h,y=o*p,E=o*m,M=u*p,_=u*m,v=c*m,b=d*h,C=d*p,N=d*m,L=n.x,P=n.y,U=n.z;return a[0]=(1-(M+v))*L,a[1]=(y+N)*L,a[2]=(E-C)*L,a[3]=0,a[4]=(y-N)*P,a[5]=(1-(g+v))*P,a[6]=(_+b)*P,a[7]=0,a[8]=(E+C)*U,a[9]=(_-b)*U,a[10]=(1-(g+M))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;let o=Va.set(a[0],a[1],a[2]).length();const u=Va.set(a[4],a[5],a[6]).length(),c=Va.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),e.x=a[12],e.y=a[13],e.z=a[14],Oi.copy(this);const h=1/o,p=1/u,m=1/c;return Oi.elements[0]*=h,Oi.elements[1]*=h,Oi.elements[2]*=h,Oi.elements[4]*=p,Oi.elements[5]*=p,Oi.elements[6]*=p,Oi.elements[8]*=m,Oi.elements[9]*=m,Oi.elements[10]*=m,t.setFromRotationMatrix(Oi),n.x=o,n.y=u,n.z=c,this}makePerspective(e,t,n,a,o,u,c=tr,d=!1){const h=this.elements,p=2*o/(t-e),m=2*o/(n-a),g=(t+e)/(t-e),y=(n+a)/(n-a);let E,M;if(d)E=o/(u-o),M=u*o/(u-o);else if(c===tr)E=-(u+o)/(u-o),M=-2*u*o/(u-o);else if(c===Uc)E=-u/(u-o),M=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=m,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,a,o,u,c=tr,d=!1){const h=this.elements,p=2/(t-e),m=2/(n-a),g=-(t+e)/(t-e),y=-(n+a)/(n-a);let E,M;if(d)E=1/(u-o),M=u/(u-o);else if(c===tr)E=-2/(u-o),M=-(u+o)/(u-o);else if(c===Uc)E=-1/(u-o),M=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=m,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Va=new he,Oi=new pn,_3=new he(0,0,0),v3=new he(1,1,1),us=new he,Ju=new he,oi=new he,dg=new pn,hg=new Ll;class Ir{constructor(e=0,t=0,n=0,a=Ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,o=a[0],u=a[4],c=a[8],d=a[1],h=a[5],p=a[9],m=a[2],g=a[6],y=a[10];switch(t){case"XYZ":this._y=Math.asin(Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-p,y),this._y=0);break;default:xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hg.setFromEuler(this),this.setFromQuaternion(hg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ir.DEFAULT_ORDER="XYZ";class bv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let y3=0;const pg=new he,Ha=new Ll,gr=new pn,ec=new he,sl=new he,S3=new he,M3=new Ll,mg=new he(1,0,0),xg=new he(0,1,0),gg=new he(0,0,1),_g={type:"added"},E3={type:"removed"},Ga={type:"childadded",child:null},Zd={type:"childremoved",child:null};class mi extends _o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y3++}),this.uuid=Nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mi.DEFAULT_UP.clone();const e=new he,t=new Ir,n=new Ll,a=new he(1,1,1);function o(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new pn},normalMatrix:{value:new gt}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=mi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ha.setFromAxisAngle(e,t),this.quaternion.multiply(Ha),this}rotateOnWorldAxis(e,t){return Ha.setFromAxisAngle(e,t),this.quaternion.premultiply(Ha),this}rotateX(e){return this.rotateOnAxis(mg,e)}rotateY(e){return this.rotateOnAxis(xg,e)}rotateZ(e){return this.rotateOnAxis(gg,e)}translateOnAxis(e,t){return pg.copy(e).applyQuaternion(this.quaternion),this.position.add(pg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mg,e)}translateY(e){return this.translateOnAxis(xg,e)}translateZ(e){return this.translateOnAxis(gg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ec.copy(e):ec.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gr.lookAt(sl,ec,this.up):gr.lookAt(ec,sl,this.up),this.quaternion.setFromRotationMatrix(gr),a&&(gr.extractRotation(a.matrixWorld),Ha.setFromRotationMatrix(gr),this.quaternion.premultiply(Ha.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_g),Ga.child=e,this.dispatchEvent(Ga),Ga.child=null):rn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(E3),Zd.child=e,this.dispatchEvent(Zd),Zd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gr.multiply(e.parent.matrixWorld)),e.applyMatrix4(gr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_g),Ga.child=e,this.dispatchEvent(Ga),Ga.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,e,S3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,M3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(c=>({...c})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const m=d[h];o(e.shapes,m)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(o(e.materials,this.material[d]));a.material=c}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];a.animations.push(o(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),p=u(e.images),m=u(e.shapes),g=u(e.skeletons),y=u(e.animations),E=u(e.nodes);c.length>0&&(n.geometries=c),d.length>0&&(n.materials=d),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),y.length>0&&(n.animations=y),E.length>0&&(n.nodes=E)}return n.object=a,n;function u(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}mi.DEFAULT_UP=new he(0,1,0);mi.DEFAULT_MATRIX_AUTO_UPDATE=!0;mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ki=new he,_r=new he,Qd=new he,vr=new he,Wa=new he,ja=new he,vg=new he,Jd=new he,eh=new he,th=new he,nh=new sn,ih=new sn,rh=new sn;class zi{constructor(e=new he,t=new he,n=new he){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),ki.subVectors(e,t),a.cross(ki);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,n,a,o){ki.subVectors(a,t),_r.subVectors(n,t),Qd.subVectors(e,t);const u=ki.dot(ki),c=ki.dot(_r),d=ki.dot(Qd),h=_r.dot(_r),p=_r.dot(Qd),m=u*h-c*c;if(m===0)return o.set(0,0,0),null;const g=1/m,y=(h*d-c*p)*g,E=(u*p-c*d)*g;return o.set(1-y-E,E,y)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,vr)===null?!1:vr.x>=0&&vr.y>=0&&vr.x+vr.y<=1}static getInterpolation(e,t,n,a,o,u,c,d){return this.getBarycoord(e,t,n,a,vr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,vr.x),d.addScaledVector(u,vr.y),d.addScaledVector(c,vr.z),d)}static getInterpolatedAttribute(e,t,n,a,o,u){return nh.setScalar(0),ih.setScalar(0),rh.setScalar(0),nh.fromBufferAttribute(e,t),ih.fromBufferAttribute(e,n),rh.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(nh,o.x),u.addScaledVector(ih,o.y),u.addScaledVector(rh,o.z),u}static isFrontFacing(e,t,n,a){return ki.subVectors(n,t),_r.subVectors(e,t),ki.cross(_r).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),_r.subVectors(this.a,this.b),ki.cross(_r).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,o){return zi.getInterpolation(e,this.a,this.b,this.c,t,n,a,o)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,o=this.c;let u,c;Wa.subVectors(a,n),ja.subVectors(o,n),Jd.subVectors(e,n);const d=Wa.dot(Jd),h=ja.dot(Jd);if(d<=0&&h<=0)return t.copy(n);eh.subVectors(e,a);const p=Wa.dot(eh),m=ja.dot(eh);if(p>=0&&m<=p)return t.copy(a);const g=d*m-p*h;if(g<=0&&d>=0&&p<=0)return u=d/(d-p),t.copy(n).addScaledVector(Wa,u);th.subVectors(e,o);const y=Wa.dot(th),E=ja.dot(th);if(E>=0&&y<=E)return t.copy(o);const M=y*h-d*E;if(M<=0&&h>=0&&E<=0)return c=h/(h-E),t.copy(n).addScaledVector(ja,c);const _=p*E-y*m;if(_<=0&&m-p>=0&&y-E>=0)return vg.subVectors(o,a),c=(m-p)/(m-p+(y-E)),t.copy(a).addScaledVector(vg,c);const v=1/(_+M+g);return u=M*v,c=g*v,t.copy(n).addScaledVector(Wa,u).addScaledVector(ja,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},tc={h:0,s:0,l:0};function sh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ot{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Dt.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=Dt.workingColorSpace){if(e=u3(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,u=2*n-o;this.r=sh(u,o,e+1/3),this.g=sh(u,o,e),this.b=sh(u,o,e-1/3)}return Dt.colorSpaceToWorking(this,a),this}setStyle(e,t=ci){function n(o){o!==void 0&&parseFloat(o)<1&&xt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=a[1],c=a[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:xt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);xt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ci){const n=Cv[e.toLowerCase()];return n!==void 0?this.setHex(n,t):xt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return Dt.workingToColorSpace(Nn.copy(this),e),Math.round(Mt(Nn.r*255,0,255))*65536+Math.round(Mt(Nn.g*255,0,255))*256+Math.round(Mt(Nn.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.workingToColorSpace(Nn.copy(this),t);const n=Nn.r,a=Nn.g,o=Nn.b,u=Math.max(n,a,o),c=Math.min(n,a,o);let d,h;const p=(c+u)/2;if(c===u)d=0,h=0;else{const m=u-c;switch(h=p<=.5?m/(u+c):m/(2-u-c),u){case n:d=(a-o)/m+(a<o?6:0);break;case a:d=(o-n)/m+2;break;case o:d=(n-a)/m+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Dt.workingColorSpace){return Dt.workingToColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=ci){Dt.workingToColorSpace(Nn.copy(this),e);const t=Nn.r,n=Nn.g,a=Nn.b;return e!==ci?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+t,cs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cs),e.getHSL(tc);const n=Vd(cs.h,tc.h,t),a=Vd(cs.s,tc.s,t),o=Vd(cs.l,tc.l,t);return this.setHSL(n,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*a,this.g=o[1]*t+o[4]*n+o[7]*a,this.b=o[2]*t+o[5]*n+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Ot;Ot.NAMES=Cv;let w3=0;class Gc extends _o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w3++}),this.uuid=Nl(),this.name="",this.type="Material",this.blending=to,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nh,this.blendDst=Lh,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fa,this.stencilZFail=Fa,this.stencilZPass=Fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){xt(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){xt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(n.blending=this.blending),this.side!==Ms&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nh&&(n.blendSrc=this.blendSrc),this.blendDst!==Lh&&(n.blendDst=this.blendDst),this.blendEquation!==$s&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==uo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rg&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fa&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fa&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fa&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(o){const u=[];for(const c in o){const d=o[c];delete d.metadata,u.push(d)}return u}if(t){const o=a(e.textures),u=a(e.images);o.length>0&&(n.textures=o),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let o=0;o!==a;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Av extends Gc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.combine=pv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new he,nc=new Ct;let T3=0;class nr{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:T3++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sg,this.updateRanges=[],this.gpuType=br,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nc.fromBufferAttribute(this,t),nc.applyMatrix3(e),this.setXY(t,nc.x,nc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=nl(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$n(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nl(t,this.array)),t}setX(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nl(t,this.array)),t}setY(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nl(t,this.array)),t}setW(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),n=$n(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),n=$n(n,this.array),a=$n(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,o){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),n=$n(n,this.array),a=$n(a,this.array),o=$n(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sg&&(e.usage=this.usage),e}}class Rv extends nr{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Pv extends nr{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class na extends nr{constructor(e,t,n){super(new Float32Array(e),t,n)}}let b3=0;const wi=new pn,ah=new mi,Xa=new he,li=new Il,al=new Il,yn=new he;class ws extends _o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b3++}),this.uuid=Nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wv(e)?Pv:Rv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new gt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,t,n){return wi.makeTranslation(e,t,n),this.applyMatrix4(wi),this}scale(e,t,n){return wi.makeScale(e,t,n),this.applyMatrix4(wi),this}lookAt(e){return ah.lookAt(e),ah.updateMatrix(),this.applyMatrix4(ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xa).negate(),this.translate(Xa.x,Xa.y,Xa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,o=e.length;a<o;a++){const u=e[a];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new na(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Il);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new he(-1/0,-1/0,-1/0),new he(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const o=t[n];li.setFromBufferAttribute(o),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new em);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new he,1/0);return}if(e){const n=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const c=t[o];al.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(li.min,al.min),li.expandByPoint(yn),yn.addVectors(li.max,al.max),li.expandByPoint(yn)):(li.expandByPoint(al.min),li.expandByPoint(al.max))}li.getCenter(n);let a=0;for(let o=0,u=e.count;o<u;o++)yn.fromBufferAttribute(e,o),a=Math.max(a,n.distanceToSquared(yn));if(t)for(let o=0,u=t.length;o<u;o++){const c=t[o],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)yn.fromBufferAttribute(c,h),d&&(Xa.fromBufferAttribute(e,h),yn.add(Xa)),a=Math.max(a,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&rn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nr(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let k=0;k<n.count;k++)c[k]=new he,d[k]=new he;const h=new he,p=new he,m=new he,g=new Ct,y=new Ct,E=new Ct,M=new he,_=new he;function v(k,T,R){h.fromBufferAttribute(n,k),p.fromBufferAttribute(n,T),m.fromBufferAttribute(n,R),g.fromBufferAttribute(o,k),y.fromBufferAttribute(o,T),E.fromBufferAttribute(o,R),p.sub(h),m.sub(h),y.sub(g),E.sub(g);const B=1/(y.x*E.y-E.x*y.y);isFinite(B)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(m,-y.y).multiplyScalar(B),_.copy(m).multiplyScalar(y.x).addScaledVector(p,-E.x).multiplyScalar(B),c[k].add(M),c[T].add(M),c[R].add(M),d[k].add(_),d[T].add(_),d[R].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let k=0,T=b.length;k<T;++k){const R=b[k],B=R.start,j=R.count;for(let q=B,ne=B+j;q<ne;q+=3)v(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const C=new he,N=new he,L=new he,P=new he;function U(k){L.fromBufferAttribute(a,k),P.copy(L);const T=c[k];C.copy(T),C.sub(L.multiplyScalar(L.dot(T))).normalize(),N.crossVectors(P,T);const B=N.dot(d[k])<0?-1:1;u.setXYZW(k,C.x,C.y,C.z,B)}for(let k=0,T=b.length;k<T;++k){const R=b[k],B=R.start,j=R.count;for(let q=B,ne=B+j;q<ne;q+=3)U(e.getX(q+0)),U(e.getX(q+1)),U(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nr(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,y=n.count;g<y;g++)n.setXYZ(g,0,0,0);const a=new he,o=new he,u=new he,c=new he,d=new he,h=new he,p=new he,m=new he;if(e)for(let g=0,y=e.count;g<y;g+=3){const E=e.getX(g+0),M=e.getX(g+1),_=e.getX(g+2);a.fromBufferAttribute(t,E),o.fromBufferAttribute(t,M),u.fromBufferAttribute(t,_),p.subVectors(u,o),m.subVectors(a,o),p.cross(m),c.fromBufferAttribute(n,E),d.fromBufferAttribute(n,M),h.fromBufferAttribute(n,_),c.add(p),d.add(p),h.add(p),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(M,d.x,d.y,d.z),n.setXYZ(_,h.x,h.y,h.z)}else for(let g=0,y=t.count;g<y;g+=3)a.fromBufferAttribute(t,g+0),o.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),p.subVectors(u,o),m.subVectors(a,o),p.cross(m),n.setXYZ(g+0,p.x,p.y,p.z),n.setXYZ(g+1,p.x,p.y,p.z),n.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(c,d){const h=c.array,p=c.itemSize,m=c.normalized,g=new h.constructor(d.length*p);let y=0,E=0;for(let M=0,_=d.length;M<_;M++){c.isInterleavedBufferAttribute?y=d[M]*c.data.stride+c.offset:y=d[M]*p;for(let v=0;v<p;v++)g[E++]=h[y++]}return new nr(g,p,m)}if(this.index===null)return xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ws,n=this.index.array,a=this.attributes;for(const c in a){const d=a[c],h=e(d,n);t.setAttribute(c,h)}const o=this.morphAttributes;for(const c in o){const d=[],h=o[c];for(let p=0,m=h.length;p<m;p++){const g=h[p],y=e(g,n);d.push(y)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const h=n[d];e.data.attributes[d]=h.toJSON(e.data)}const a={};let o=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let m=0,g=h.length;m<g;m++){const y=h[m];p.push(y.toJSON(e.data))}p.length>0&&(a[d]=p,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const h in a){const p=a[h];this.setAttribute(h,p.clone(t))}const o=e.morphAttributes;for(const h in o){const p=[],m=o[h];for(let g=0,y=m.length;g<y;g++)p.push(m[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const m=u[h];this.addGroup(m.start,m.count,m.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yg=new pn,Hs=new g3,ic=new em,Sg=new he,rc=new he,sc=new he,ac=new he,oh=new he,oc=new he,Mg=new he,lc=new he;class Ur extends mi{constructor(e=new ws,t=new Av){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const c=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,o=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const c=this.morphTargetInfluences;if(o&&c){oc.set(0,0,0);for(let d=0,h=o.length;d<h;d++){const p=c[d],m=o[d];p!==0&&(oh.fromBufferAttribute(m,e),u?oc.addScaledVector(oh,p):oc.addScaledVector(oh.sub(t),p))}t.add(oc)}return t}raycast(e,t){const n=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ic.copy(n.boundingSphere),ic.applyMatrix4(o),Hs.copy(e.ray).recast(e.near),!(ic.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(ic,Sg)===null||Hs.origin.distanceToSquared(Sg)>(e.far-e.near)**2))&&(yg.copy(o).invert(),Hs.copy(e.ray).applyMatrix4(yg),!(n.boundingBox!==null&&Hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hs)))}_computeIntersections(e,t,n){let a;const o=this.geometry,u=this.material,c=o.index,d=o.attributes.position,h=o.attributes.uv,p=o.attributes.uv1,m=o.attributes.normal,g=o.groups,y=o.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,M=g.length;E<M;E++){const _=g[E],v=u[_.materialIndex],b=Math.max(_.start,y.start),C=Math.min(c.count,Math.min(_.start+_.count,y.start+y.count));for(let N=b,L=C;N<L;N+=3){const P=c.getX(N),U=c.getX(N+1),k=c.getX(N+2);a=uc(this,v,e,n,h,p,m,P,U,k),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const E=Math.max(0,y.start),M=Math.min(c.count,y.start+y.count);for(let _=E,v=M;_<v;_+=3){const b=c.getX(_),C=c.getX(_+1),N=c.getX(_+2);a=uc(this,u,e,n,h,p,m,b,C,N),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,M=g.length;E<M;E++){const _=g[E],v=u[_.materialIndex],b=Math.max(_.start,y.start),C=Math.min(d.count,Math.min(_.start+_.count,y.start+y.count));for(let N=b,L=C;N<L;N+=3){const P=N,U=N+1,k=N+2;a=uc(this,v,e,n,h,p,m,P,U,k),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const E=Math.max(0,y.start),M=Math.min(d.count,y.start+y.count);for(let _=E,v=M;_<v;_+=3){const b=_,C=_+1,N=_+2;a=uc(this,u,e,n,h,p,m,b,C,N),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function C3(s,e,t,n,a,o,u,c){let d;if(e.side===Jn?d=n.intersectTriangle(u,o,a,!0,c):d=n.intersectTriangle(a,o,u,e.side===Ms,c),d===null)return null;lc.copy(c),lc.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(lc);return h<t.near||h>t.far?null:{distance:h,point:lc.clone(),object:s}}function uc(s,e,t,n,a,o,u,c,d,h){s.getVertexPosition(c,rc),s.getVertexPosition(d,sc),s.getVertexPosition(h,ac);const p=C3(s,e,t,n,rc,sc,ac,Mg);if(p){const m=new he;zi.getBarycoord(Mg,rc,sc,ac,m),a&&(p.uv=zi.getInterpolatedAttribute(a,c,d,h,m,new Ct)),o&&(p.uv1=zi.getInterpolatedAttribute(o,c,d,h,m,new Ct)),u&&(p.normal=zi.getInterpolatedAttribute(u,c,d,h,m,new he),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const g={a:c,b:d,c:h,normal:new he,materialIndex:0};zi.getNormal(rc,sc,ac,g.normal),p.face=g,p.barycoord=m}return p}class Ul extends ws{constructor(e=1,t=1,n=1,a=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:o,depthSegments:u};const c=this;a=Math.floor(a),o=Math.floor(o),u=Math.floor(u);const d=[],h=[],p=[],m=[];let g=0,y=0;E("z","y","x",-1,-1,n,t,e,u,o,0),E("z","y","x",1,-1,n,t,-e,u,o,1),E("x","z","y",1,1,e,n,t,a,u,2),E("x","z","y",1,-1,e,n,-t,a,u,3),E("x","y","z",1,-1,e,t,n,a,o,4),E("x","y","z",-1,-1,e,t,-n,a,o,5),this.setIndex(d),this.setAttribute("position",new na(h,3)),this.setAttribute("normal",new na(p,3)),this.setAttribute("uv",new na(m,2));function E(M,_,v,b,C,N,L,P,U,k,T){const R=N/U,B=L/k,j=N/2,q=L/2,ne=P/2,se=U+1,ae=k+1;let oe=0,H=0;const ue=new he;for(let te=0;te<ae;te++){const z=te*B-q;for(let re=0;re<se;re++){const Ne=re*R-j;ue[M]=Ne*b,ue[_]=z*C,ue[v]=ne,h.push(ue.x,ue.y,ue.z),ue[M]=0,ue[_]=0,ue[v]=P>0?1:-1,p.push(ue.x,ue.y,ue.z),m.push(re/U),m.push(1-te/k),oe+=1}}for(let te=0;te<k;te++)for(let z=0;z<U;z++){const re=g+z+se*te,Ne=g+z+se*(te+1),Pe=g+(z+1)+se*(te+1),Fe=g+(z+1)+se*te;d.push(re,Ne,Fe),d.push(Ne,Pe,Fe),H+=6}c.addGroup(y,H,T),y+=H,g+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function po(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const a=s[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function kn(s){const e={};for(let t=0;t<s.length;t++){const n=po(s[t]);for(const a in n)e[a]=n[a]}return e}function A3(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Dv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const R3={clone:po,merge:kn};var P3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rr extends Gc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P3,this.fragmentShader=D3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=A3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nv extends mi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=tr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fs=new he,Eg=new Ct,wg=new Ct;class Bi extends Nv{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vp*2*Math.atan(Math.tan(zd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,t){return this.getViewBounds(e,Eg,wg),t.subVectors(wg,Eg)}setViewOffset(e,t,n,a,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zd*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,o=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;o+=u.offsetX*a/d,t-=u.offsetY*n/h,a*=u.width/d,n*=u.height/h}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qa=-90,$a=1;class N3 extends mi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Bi(qa,$a,e,t);a.layers=this.layers,this.add(a);const o=new Bi(qa,$a,e,t);o.layers=this.layers,this.add(o);const u=new Bi(qa,$a,e,t);u.layers=this.layers,this.add(u);const c=new Bi(qa,$a,e,t);c.layers=this.layers,this.add(c);const d=new Bi(qa,$a,e,t);d.layers=this.layers,this.add(d);const h=new Bi(qa,$a,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,o,u,c,d]=t;for(const h of t)this.remove(h);if(e===tr)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Uc)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,c,d,h,p]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,a),e.render(t,o),e.setRenderTarget(n,1,a),e.render(t,u),e.setRenderTarget(n,2,a),e.render(t,c),e.setRenderTarget(n,3,a),e.render(t,d),e.setRenderTarget(n,4,a),e.render(t,h),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,a),e.render(t,p),e.setRenderTarget(m,g,y),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class Lv extends zn{constructor(e=[],t=co,n,a,o,u,c,d,h,p){super(e,t,n,a,o,u,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class L3 extends aa{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new Lv(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Ul(5,5,5),o=new rr({name:"CubemapFromEquirect",uniforms:po(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jn,blending:Ar});o.uniforms.tEquirect.value=t;const u=new Ur(a,o),c=t.minFilter;return t.minFilter===Zs&&(t.minFilter=Ri),new N3(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,a);e.setRenderTarget(o)}}class cc extends mi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const I3={type:"move"};class lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new he,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new he),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new he,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new he),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,o=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const M of e.hand.values()){const _=t.getJointPose(M,n),v=this._getHandJoint(h,M);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],g=p.position.distanceTo(m.position),y=.02,E=.005;h.inputState.pinching&&g>y+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=y-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&o!==null&&(a=o),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(I3)))}return c!==null&&(c.visible=a!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new cc;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class U3 extends mi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ir,this.environmentIntensity=1,this.environmentRotation=new Ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class F3 extends zn{constructor(e=null,t=1,n=1,a,o,u,c,d,h=pi,p=pi,m,g){super(null,u,c,d,h,p,a,o,m,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uh=new he,O3=new he,k3=new gt;class qs{constructor(e=new he(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=uh.subVectors(n,t).cross(O3.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(uh),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||k3.getNormalMatrix(e),a=this.coplanarPoint(uh).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gs=new em,B3=new Ct(.5,.5),fc=new he;class Iv{constructor(e=new qs,t=new qs,n=new qs,a=new qs,o=new qs,u=new qs){this.planes=[e,t,n,a,o,u]}set(e,t,n,a,o,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(a),c[4].copy(o),c[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tr,n=!1){const a=this.planes,o=e.elements,u=o[0],c=o[1],d=o[2],h=o[3],p=o[4],m=o[5],g=o[6],y=o[7],E=o[8],M=o[9],_=o[10],v=o[11],b=o[12],C=o[13],N=o[14],L=o[15];if(a[0].setComponents(h-u,y-p,v-E,L-b).normalize(),a[1].setComponents(h+u,y+p,v+E,L+b).normalize(),a[2].setComponents(h+c,y+m,v+M,L+C).normalize(),a[3].setComponents(h-c,y-m,v-M,L-C).normalize(),n)a[4].setComponents(d,g,_,N).normalize(),a[5].setComponents(h-d,y-g,v-_,L-N).normalize();else if(a[4].setComponents(h-d,y-g,v-_,L-N).normalize(),t===tr)a[5].setComponents(h+d,y+g,v+_,L+N).normalize();else if(t===Uc)a[5].setComponents(d,g,_,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(e){Gs.center.set(0,0,0);const t=B3.distanceTo(e.center);return Gs.radius=.7071067811865476+t,Gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(fc.x=a.normal.x>0?e.max.x:e.min.x,fc.y=a.normal.y>0?e.max.y:e.min.y,fc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(fc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uv extends zn{constructor(e,t,n=sa,a,o,u,c=pi,d=pi,h,p=Tl,m=1){if(p!==Tl&&p!==bl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:m};super(g,a,o,u,c,d,p,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fv extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fl extends ws{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const o=e/2,u=t/2,c=Math.floor(n),d=Math.floor(a),h=c+1,p=d+1,m=e/c,g=t/d,y=[],E=[],M=[],_=[];for(let v=0;v<p;v++){const b=v*g-u;for(let C=0;C<h;C++){const N=C*m-o;E.push(N,-b,0),M.push(0,0,1),_.push(C/c),_.push(1-v/d)}}for(let v=0;v<d;v++)for(let b=0;b<c;b++){const C=b+h*v,N=b+h*(v+1),L=b+1+h*(v+1),P=b+1+h*v;y.push(C,N,P),y.push(N,L,P)}this.setIndex(y),this.setAttribute("position",new na(E,3)),this.setAttribute("normal",new na(M,3)),this.setAttribute("uv",new na(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fl(e.width,e.height,e.widthSegments,e.heightSegments)}}class z3 extends Gc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=KE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class V3 extends Gc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ov extends Nv{constructor(e=-1,t=1,n=1,a=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=n-e,u=n+e,c=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,u=o+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(o,u,c,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class H3 extends Bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class G3{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Tg(s,e,t,n){const a=W3(n);switch(t){case yv:return s*e;case Mv:return s*e/a.components*a.byteLength;case Yp:return s*e/a.components*a.byteLength;case Kp:return s*e*2/a.components*a.byteLength;case Zp:return s*e*2/a.components*a.byteLength;case Sv:return s*e*3/a.components*a.byteLength;case Gi:return s*e*4/a.components*a.byteLength;case Qp:return s*e*4/a.components*a.byteLength;case yc:case Sc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Mc:case Ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xh:case $h:return Math.max(s,16)*Math.max(e,8)/4;case jh:case qh:return Math.max(s,8)*Math.max(e,8)/2;case Yh:case Kh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ep:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case tp:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case np:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ip:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case rp:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case sp:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ap:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case op:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case lp:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case up:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case cp:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case fp:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case dp:case hp:case pp:return Math.ceil(s/4)*Math.ceil(e/4)*16;case mp:case xp:return Math.ceil(s/4)*Math.ceil(e/4)*8;case gp:case _p:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function W3(s){switch(s){case Lr:case xv:return{byteLength:1,components:1};case El:case gv:case go:return{byteLength:2,components:1};case qp:case $p:return{byteLength:2,components:4};case sa:case Xp:case br:return{byteLength:4,components:1};case _v:case vv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jp}}));typeof window<"u"&&(window.__THREE__?xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kv(){let s=null,e=!1,t=null,n=null;function a(o,u){t(o,u),n=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){s=o}}}function j3(s){const e=new WeakMap;function t(c,d){const h=c.array,p=c.usage,m=h.byteLength,g=s.createBuffer();s.bindBuffer(d,g),s.bufferData(d,h,p),c.onUploadCallback();let y;if(h instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=s.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=s.SHORT;else if(h instanceof Uint32Array)y=s.UNSIGNED_INT;else if(h instanceof Int32Array)y=s.INT;else if(h instanceof Int8Array)y=s.BYTE;else if(h instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function n(c,d,h){const p=d.array,m=d.updateRanges;if(s.bindBuffer(h,c),m.length===0)s.bufferSubData(h,0,p);else{m.sort((y,E)=>y.start-E.start);let g=0;for(let y=1;y<m.length;y++){const E=m[g],M=m[y];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++g,m[g]=M)}m.length=g+1;for(let y=0,E=m.length;y<E;y++){const M=m[y];s.bufferSubData(h,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(s.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,d),h.version=c.version}}return{get:a,remove:o,update:u}}var X3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,J3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ew=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ow=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_w=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ew=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ww=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Tw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Aw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Iw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ow=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ww=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$w=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_T=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ST=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ET=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,AT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,DT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,UT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$T=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,QT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,JT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ib=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ab=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ob=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,db=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_b=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Eb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:X3,alphahash_pars_fragment:q3,alphamap_fragment:$3,alphamap_pars_fragment:Y3,alphatest_fragment:K3,alphatest_pars_fragment:Z3,aomap_fragment:Q3,aomap_pars_fragment:J3,batching_pars_vertex:ew,batching_vertex:tw,begin_vertex:nw,beginnormal_vertex:iw,bsdfs:rw,iridescence_fragment:sw,bumpmap_pars_fragment:aw,clipping_planes_fragment:ow,clipping_planes_pars_fragment:lw,clipping_planes_pars_vertex:uw,clipping_planes_vertex:cw,color_fragment:fw,color_pars_fragment:dw,color_pars_vertex:hw,color_vertex:pw,common:mw,cube_uv_reflection_fragment:xw,defaultnormal_vertex:gw,displacementmap_pars_vertex:_w,displacementmap_vertex:vw,emissivemap_fragment:yw,emissivemap_pars_fragment:Sw,colorspace_fragment:Mw,colorspace_pars_fragment:Ew,envmap_fragment:ww,envmap_common_pars_fragment:Tw,envmap_pars_fragment:bw,envmap_pars_vertex:Cw,envmap_physical_pars_fragment:kw,envmap_vertex:Aw,fog_vertex:Rw,fog_pars_vertex:Pw,fog_fragment:Dw,fog_pars_fragment:Nw,gradientmap_pars_fragment:Lw,lightmap_pars_fragment:Iw,lights_lambert_fragment:Uw,lights_lambert_pars_fragment:Fw,lights_pars_begin:Ow,lights_toon_fragment:Bw,lights_toon_pars_fragment:zw,lights_phong_fragment:Vw,lights_phong_pars_fragment:Hw,lights_physical_fragment:Gw,lights_physical_pars_fragment:Ww,lights_fragment_begin:jw,lights_fragment_maps:Xw,lights_fragment_end:qw,logdepthbuf_fragment:$w,logdepthbuf_pars_fragment:Yw,logdepthbuf_pars_vertex:Kw,logdepthbuf_vertex:Zw,map_fragment:Qw,map_pars_fragment:Jw,map_particle_fragment:eT,map_particle_pars_fragment:tT,metalnessmap_fragment:nT,metalnessmap_pars_fragment:iT,morphinstance_vertex:rT,morphcolor_vertex:sT,morphnormal_vertex:aT,morphtarget_pars_vertex:oT,morphtarget_vertex:lT,normal_fragment_begin:uT,normal_fragment_maps:cT,normal_pars_fragment:fT,normal_pars_vertex:dT,normal_vertex:hT,normalmap_pars_fragment:pT,clearcoat_normal_fragment_begin:mT,clearcoat_normal_fragment_maps:xT,clearcoat_pars_fragment:gT,iridescence_pars_fragment:_T,opaque_fragment:vT,packing:yT,premultiplied_alpha_fragment:ST,project_vertex:MT,dithering_fragment:ET,dithering_pars_fragment:wT,roughnessmap_fragment:TT,roughnessmap_pars_fragment:bT,shadowmap_pars_fragment:CT,shadowmap_pars_vertex:AT,shadowmap_vertex:RT,shadowmask_pars_fragment:PT,skinbase_vertex:DT,skinning_pars_vertex:NT,skinning_vertex:LT,skinnormal_vertex:IT,specularmap_fragment:UT,specularmap_pars_fragment:FT,tonemapping_fragment:OT,tonemapping_pars_fragment:kT,transmission_fragment:BT,transmission_pars_fragment:zT,uv_pars_fragment:VT,uv_pars_vertex:HT,uv_vertex:GT,worldpos_vertex:WT,background_vert:jT,background_frag:XT,backgroundCube_vert:qT,backgroundCube_frag:$T,cube_vert:YT,cube_frag:KT,depth_vert:ZT,depth_frag:QT,distanceRGBA_vert:JT,distanceRGBA_frag:eb,equirect_vert:tb,equirect_frag:nb,linedashed_vert:ib,linedashed_frag:rb,meshbasic_vert:sb,meshbasic_frag:ab,meshlambert_vert:ob,meshlambert_frag:lb,meshmatcap_vert:ub,meshmatcap_frag:cb,meshnormal_vert:fb,meshnormal_frag:db,meshphong_vert:hb,meshphong_frag:pb,meshphysical_vert:mb,meshphysical_frag:xb,meshtoon_vert:gb,meshtoon_frag:_b,points_vert:vb,points_frag:yb,shadow_vert:Sb,shadow_frag:Mb,sprite_vert:Eb,sprite_frag:wb},Ue={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Qi={basic:{uniforms:kn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:kn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ot(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:kn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:kn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:kn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Ot(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:kn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:kn([Ue.points,Ue.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:kn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:kn([Ue.common,Ue.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:kn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:kn([Ue.sprite,Ue.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:kn([Ue.common,Ue.displacementmap,{referencePosition:{value:new he},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:kn([Ue.lights,Ue.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Qi.physical={uniforms:kn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const dc={r:0,b:0,g:0},Ws=new Ir,Tb=new pn;function bb(s,e,t,n,a,o,u){const c=new Ot(0);let d=o===!0?0:1,h,p,m=null,g=0,y=null;function E(C){let N=C.isScene===!0?C.background:null;return N&&N.isTexture&&(N=(C.backgroundBlurriness>0?t:e).get(N)),N}function M(C){let N=!1;const L=E(C);L===null?v(c,d):L&&L.isColor&&(v(L,1),N=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,u):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(s.autoClear||N)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(C,N){const L=E(N);L&&(L.isCubeTexture||L.mapping===Hc)?(p===void 0&&(p=new Ur(new Ul(1,1,1),new rr({name:"BackgroundCubeMaterial",uniforms:po(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(P,U,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),Ws.copy(N.backgroundRotation),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),p.material.uniforms.envMap.value=L,p.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Tb.makeRotationFromEuler(Ws)),p.material.toneMapped=Dt.getTransfer(L.colorSpace)!==Ft,(m!==L||g!==L.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,m=L,g=L.version,y=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new Ur(new Fl(2,2),new rr({name:"BackgroundMaterial",uniforms:po(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.toneMapped=Dt.getTransfer(L.colorSpace)!==Ft,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(m!==L||g!==L.version||y!==s.toneMapping)&&(h.material.needsUpdate=!0,m=L,g=L.version,y=s.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function v(C,N){C.getRGB(dc,Dv(s)),n.buffers.color.setClear(dc.r,dc.g,dc.b,N,u)}function b(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(C,N=1){c.set(C),d=N,v(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,v(c,d)},render:M,addToRenderList:_,dispose:b}}function Cb(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},a=g(null);let o=a,u=!1;function c(R,B,j,q,ne){let se=!1;const ae=m(q,j,B);o!==ae&&(o=ae,h(o.object)),se=y(R,q,j,ne),se&&E(R,q,j,ne),ne!==null&&e.update(ne,s.ELEMENT_ARRAY_BUFFER),(se||u)&&(u=!1,N(R,B,j,q),ne!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function d(){return s.createVertexArray()}function h(R){return s.bindVertexArray(R)}function p(R){return s.deleteVertexArray(R)}function m(R,B,j){const q=j.wireframe===!0;let ne=n[R.id];ne===void 0&&(ne={},n[R.id]=ne);let se=ne[B.id];se===void 0&&(se={},ne[B.id]=se);let ae=se[q];return ae===void 0&&(ae=g(d()),se[q]=ae),ae}function g(R){const B=[],j=[],q=[];for(let ne=0;ne<t;ne++)B[ne]=0,j[ne]=0,q[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:j,attributeDivisors:q,object:R,attributes:{},index:null}}function y(R,B,j,q){const ne=o.attributes,se=B.attributes;let ae=0;const oe=j.getAttributes();for(const H in oe)if(oe[H].location>=0){const te=ne[H];let z=se[H];if(z===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),te===void 0||te.attribute!==z||z&&te.data!==z.data)return!0;ae++}return o.attributesNum!==ae||o.index!==q}function E(R,B,j,q){const ne={},se=B.attributes;let ae=0;const oe=j.getAttributes();for(const H in oe)if(oe[H].location>=0){let te=se[H];te===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(te=R.instanceColor));const z={};z.attribute=te,te&&te.data&&(z.data=te.data),ne[H]=z,ae++}o.attributes=ne,o.attributesNum=ae,o.index=q}function M(){const R=o.newAttributes;for(let B=0,j=R.length;B<j;B++)R[B]=0}function _(R){v(R,0)}function v(R,B){const j=o.newAttributes,q=o.enabledAttributes,ne=o.attributeDivisors;j[R]=1,q[R]===0&&(s.enableVertexAttribArray(R),q[R]=1),ne[R]!==B&&(s.vertexAttribDivisor(R,B),ne[R]=B)}function b(){const R=o.newAttributes,B=o.enabledAttributes;for(let j=0,q=B.length;j<q;j++)B[j]!==R[j]&&(s.disableVertexAttribArray(j),B[j]=0)}function C(R,B,j,q,ne,se,ae){ae===!0?s.vertexAttribIPointer(R,B,j,ne,se):s.vertexAttribPointer(R,B,j,q,ne,se)}function N(R,B,j,q){M();const ne=q.attributes,se=j.getAttributes(),ae=B.defaultAttributeValues;for(const oe in se){const H=se[oe];if(H.location>=0){let ue=ne[oe];if(ue===void 0&&(oe==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),oe==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),ue!==void 0){const te=ue.normalized,z=ue.itemSize,re=e.get(ue);if(re===void 0)continue;const Ne=re.buffer,Pe=re.type,Fe=re.bytesPerElement,ie=Pe===s.INT||Pe===s.UNSIGNED_INT||ue.gpuType===Xp;if(ue.isInterleavedBufferAttribute){const pe=ue.data,ce=pe.stride,ve=ue.offset;if(pe.isInstancedInterleavedBuffer){for(let we=0;we<H.locationSize;we++)v(H.location+we,pe.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let we=0;we<H.locationSize;we++)_(H.location+we);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let we=0;we<H.locationSize;we++)C(H.location+we,z/H.locationSize,Pe,te,ce*Fe,(ve+z/H.locationSize*we)*Fe,ie)}else{if(ue.isInstancedBufferAttribute){for(let pe=0;pe<H.locationSize;pe++)v(H.location+pe,ue.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let pe=0;pe<H.locationSize;pe++)_(H.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let pe=0;pe<H.locationSize;pe++)C(H.location+pe,z/H.locationSize,Pe,te,z*Fe,z/H.locationSize*pe*Fe,ie)}}else if(ae!==void 0){const te=ae[oe];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(H.location,te);break;case 3:s.vertexAttrib3fv(H.location,te);break;case 4:s.vertexAttrib4fv(H.location,te);break;default:s.vertexAttrib1fv(H.location,te)}}}}b()}function L(){k();for(const R in n){const B=n[R];for(const j in B){const q=B[j];for(const ne in q)p(q[ne].object),delete q[ne];delete B[j]}delete n[R]}}function P(R){if(n[R.id]===void 0)return;const B=n[R.id];for(const j in B){const q=B[j];for(const ne in q)p(q[ne].object),delete q[ne];delete B[j]}delete n[R.id]}function U(R){for(const B in n){const j=n[B];if(j[R.id]===void 0)continue;const q=j[R.id];for(const ne in q)p(q[ne].object),delete q[ne];delete j[R.id]}}function k(){T(),u=!0,o!==a&&(o=a,h(o.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:c,reset:k,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:_,disableUnusedAttributes:b}}function Ab(s,e,t){let n;function a(h){n=h}function o(h,p){s.drawArrays(n,h,p),t.update(p,n,1)}function u(h,p,m){m!==0&&(s.drawArraysInstanced(n,h,p,m),t.update(p,n,m))}function c(h,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,p,0,m);let y=0;for(let E=0;E<m;E++)y+=p[E];t.update(y,n,1)}function d(h,p,m,g){if(m===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<h.length;E++)u(h[E],p[E],g[E]);else{y.multiDrawArraysInstancedWEBGL(n,h,0,p,0,g,0,m);let E=0;for(let M=0;M<m;M++)E+=p[M]*g[M];t.update(E,n,1)}}this.setMode=a,this.render=o,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function Rb(s,e,t,n){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(U){return!(U!==Gi&&n.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(U){const k=U===go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Lr&&n.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==br&&!k)}function d(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(xt("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=E>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:m,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:b,maxVaryings:C,maxFragmentUniforms:N,vertexTextures:L,maxSamples:P}}function Pb(s){const e=this;let t=null,n=0,a=!1,o=!1;const u=new qs,c=new gt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const y=m.length!==0||g||n!==0||a;return a=g,n=m.length,y},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,g){t=p(m,g,0)},this.setState=function(m,g,y){const E=m.clippingPlanes,M=m.clipIntersection,_=m.clipShadows,v=s.get(m);if(!a||E===null||E.length===0||o&&!_)o?p(null):h();else{const b=o?0:n,C=b*4;let N=v.clippingState||null;d.value=N,N=p(E,g,C,y);for(let L=0;L!==C;++L)N[L]=t[L];v.clippingState=N,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,g,y,E){const M=m!==null?m.length:0;let _=null;if(M!==0){if(_=d.value,E!==!0||_===null){const v=y+M*4,b=g.matrixWorldInverse;c.getNormalMatrix(b),(_===null||_.length<v)&&(_=new Float32Array(v));for(let C=0,N=y;C!==M;++C,N+=4)u.copy(m[C]).applyMatrix4(b,c),u.normal.toArray(_,N),_[N+3]=u.constant}d.value=_,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,_}}function Db(s){let e=new WeakMap;function t(u,c){return c===Vh?u.mapping=co:c===Hh&&(u.mapping=fo),u}function n(u){if(u&&u.isTexture){const c=u.mapping;if(c===Vh||c===Hh)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new L3(d.height);return h.fromEquirectangularTexture(s,u),e.set(u,h),u.addEventListener("dispose",a),t(h.texture,u.mapping)}else return null}}return u}function a(u){const c=u.target;c.removeEventListener("dispose",a);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const xs=4,bg=[.125,.215,.35,.446,.526,.582],Ys=20,Nb=256,ol=new Ov,Cg=new Ot;let ch=null,fh=0,dh=0,hh=!1;const Lb=new he;class Ag{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,a=100,o={}){const{size:u=256,position:c=Lb}=o;ch=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,n,a,d,c),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ch,fh,dh),this._renderer.xr.enabled=hh,e.scissorTest=!1,Ya(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===co||e.mapping===fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ch=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:go,format:Gi,colorSpace:ho,depthBuffer:!1},a=Rg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rg(e,t,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ib(o)),this._blurMaterial=Fb(o,e,t),this._ggxMaterial=Ub(o,e,t)}return a}_compileMaterial(e){const t=new Ur(new ws,e);this._renderer.compile(t,ol)}_sceneToCubeUV(e,t,n,a,o){const d=new Bi(90,1,t,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,y=m.toneMapping;m.getClearColor(Cg),m.toneMapping=vs,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(a),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ur(new Ul,new Av({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,_=M.material;let v=!1;const b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,v=!0):(_.color.copy(Cg),v=!0);for(let C=0;C<6;C++){const N=C%3;N===0?(d.up.set(0,h[C],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x+p[C],o.y,o.z)):N===1?(d.up.set(0,0,h[C]),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y+p[C],o.z)):(d.up.set(0,h[C],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y,o.z+p[C]));const L=this._cubeSize;Ya(a,N*L,C>2?L:0,L,L),m.setRenderTarget(a),v&&m.render(M,d),m.render(e,d)}m.toneMapping=y,m.autoClear=g,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===co||e.mapping===fo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pg());const o=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=o;const c=o.uniforms;c.envMap.value=e;const d=this._cubeSize;Ya(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(u,ol)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let o=1;o<a;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=n}_applyGGXFilter(e,t,n){const a=this._renderer,o=this._pingPongRenderTarget,u=this._ggxMaterial,c=this._lodMeshes[n];c.material=u;const d=u.uniforms,h=n/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),m=Math.sqrt(h*h-p*p),g=.05+h*.95,y=m*g,{_lodMax:E}=this,M=this._sizeLods[n],_=3*M*(n>E-xs?n-E+xs:0),v=4*(this._cubeSize-M);d.envMap.value=e.texture,d.roughness.value=y,d.mipInt.value=E-t,Ya(o,_,v,3*M,2*M),a.setRenderTarget(o),a.render(c,ol),d.envMap.value=o.texture,d.roughness.value=0,d.mipInt.value=E-n,Ya(e,_,v,3*M,2*M),a.setRenderTarget(e),a.render(c,ol)}_blur(e,t,n,a,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,a,"latitudinal",o),this._halfBlur(u,e,n,n,a,"longitudinal",o)}_halfBlur(e,t,n,a,o,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&rn("blur direction must be either latitudinal or longitudinal!");const p=3,m=this._lodMeshes[a];m.material=h;const g=h.uniforms,y=this._sizeLods[n]-1,E=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*Ys-1),M=o/E,_=isFinite(o)?1+Math.floor(p*M):Ys;_>Ys&&xt(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ys}`);const v=[];let b=0;for(let U=0;U<Ys;++U){const k=U/M,T=Math.exp(-k*k/2);v.push(T),U===0?b+=T:U<_&&(b+=2*T)}for(let U=0;U<v.length;U++)v[U]=v[U]/b;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=v,g.latitudinal.value=u==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:C}=this;g.dTheta.value=E,g.mipInt.value=C-n;const N=this._sizeLods[a],L=3*N*(a>C-xs?a-C+xs:0),P=4*(this._cubeSize-N);Ya(t,L,P,3*N,2*N),d.setRenderTarget(t),d.render(m,ol)}}function Ib(s){const e=[],t=[],n=[];let a=s;const o=s-xs+1+bg.length;for(let u=0;u<o;u++){const c=Math.pow(2,a);e.push(c);let d=1/c;u>s-xs?d=bg[u-s+xs-1]:u===0&&(d=0),t.push(d);const h=1/(c-2),p=-h,m=1+h,g=[p,p,m,p,m,m,p,p,m,m,p,m],y=6,E=6,M=3,_=2,v=1,b=new Float32Array(M*E*y),C=new Float32Array(_*E*y),N=new Float32Array(v*E*y);for(let P=0;P<y;P++){const U=P%3*2/3-1,k=P>2?0:-1,T=[U,k,0,U+2/3,k,0,U+2/3,k+1,0,U,k,0,U+2/3,k+1,0,U,k+1,0];b.set(T,M*E*P),C.set(g,_*E*P);const R=[P,P,P,P,P,P];N.set(R,v*E*P)}const L=new ws;L.setAttribute("position",new nr(b,M)),L.setAttribute("uv",new nr(C,_)),L.setAttribute("faceIndex",new nr(N,v)),n.push(new Ur(L,null)),a>xs&&a--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Rg(s,e,t){const n=new aa(s,e,t);return n.texture.mapping=Hc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ya(s,e,t,n,a){s.viewport.set(e,t,n,a),s.scissor.set(e,t,n,a)}function Ub(s,e,t){return new rr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Nb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Fb(s,e,t){const n=new Float32Array(Ys),a=new he(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:Ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Pg(){return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Dg(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ob(s){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const d=c.mapping,h=d===Vh||d===Hh,p=d===co||d===fo;if(h||p){let m=e.get(c);const g=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==g)return t===null&&(t=new Ag(s)),m=h?t.fromEquirectangular(c,m):t.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),m.texture;if(m!==void 0)return m.texture;{const y=c.image;return h&&y&&y.height>0||p&&y&&a(y)?(t===null&&(t=new Ag(s)),m=h?t.fromEquirectangular(c):t.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),c.addEventListener("dispose",o),m.texture):null}}}return c}function a(c){let d=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&d++;return d===h}function o(c){const d=c.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function kb(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const a=s.getExtension(n);return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&Cl("WebGLRenderer: "+n+" extension not supported."),a}}}function Bb(s,e,t,n){const a={},o=new WeakMap;function u(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",u),delete a[g.id];const y=o.get(g);y&&(e.remove(y),o.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(m,g){return a[g.id]===!0||(g.addEventListener("dispose",u),a[g.id]=!0,t.memory.geometries++),g}function d(m){const g=m.attributes;for(const y in g)e.update(g[y],s.ARRAY_BUFFER)}function h(m){const g=[],y=m.index,E=m.attributes.position;let M=0;if(y!==null){const b=y.array;M=y.version;for(let C=0,N=b.length;C<N;C+=3){const L=b[C+0],P=b[C+1],U=b[C+2];g.push(L,P,P,U,U,L)}}else if(E!==void 0){const b=E.array;M=E.version;for(let C=0,N=b.length/3-1;C<N;C+=3){const L=C+0,P=C+1,U=C+2;g.push(L,P,P,U,U,L)}}else return;const _=new(wv(g)?Pv:Rv)(g,1);_.version=M;const v=o.get(m);v&&e.remove(v),o.set(m,_)}function p(m){const g=o.get(m);if(g){const y=m.index;y!==null&&g.version<y.version&&h(m)}else h(m);return o.get(m)}return{get:c,update:d,getWireframeAttribute:p}}function zb(s,e,t){let n;function a(g){n=g}let o,u;function c(g){o=g.type,u=g.bytesPerElement}function d(g,y){s.drawElements(n,y,o,g*u),t.update(y,n,1)}function h(g,y,E){E!==0&&(s.drawElementsInstanced(n,y,o,g*u,E),t.update(y,n,E))}function p(g,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,y,0,o,g,0,E);let _=0;for(let v=0;v<E;v++)_+=y[v];t.update(_,n,1)}function m(g,y,E,M){if(E===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<g.length;v++)h(g[v]/u,y[v],M[v]);else{_.multiDrawElementsInstancedWEBGL(n,y,0,o,g,0,M,0,E);let v=0;for(let b=0;b<E;b++)v+=y[b]*M[b];t.update(v,n,1)}}this.setMode=a,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function Vb(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,u,c){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=c*(o/3);break;case s.LINES:t.lines+=c*(o/2);break;case s.LINE_STRIP:t.lines+=c*(o-1);break;case s.LINE_LOOP:t.lines+=c*o;break;case s.POINTS:t.points+=c*o;break;default:rn("WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function Hb(s,e,t){const n=new WeakMap,a=new sn;function o(u,c,d){const h=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=p!==void 0?p.length:0;let g=n.get(c);if(g===void 0||g.count!==m){let R=function(){k.dispose(),n.delete(c),c.removeEventListener("dispose",R)};var y=R;g!==void 0&&g.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,_=c.morphAttributes.color!==void 0,v=c.morphAttributes.position||[],b=c.morphAttributes.normal||[],C=c.morphAttributes.color||[];let N=0;E===!0&&(N=1),M===!0&&(N=2),_===!0&&(N=3);let L=c.attributes.position.count*N,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const U=new Float32Array(L*P*4*m),k=new Tv(U,L,P,m);k.type=br,k.needsUpdate=!0;const T=N*4;for(let B=0;B<m;B++){const j=v[B],q=b[B],ne=C[B],se=L*P*4*B;for(let ae=0;ae<j.count;ae++){const oe=ae*T;E===!0&&(a.fromBufferAttribute(j,ae),U[se+oe+0]=a.x,U[se+oe+1]=a.y,U[se+oe+2]=a.z,U[se+oe+3]=0),M===!0&&(a.fromBufferAttribute(q,ae),U[se+oe+4]=a.x,U[se+oe+5]=a.y,U[se+oe+6]=a.z,U[se+oe+7]=0),_===!0&&(a.fromBufferAttribute(ne,ae),U[se+oe+8]=a.x,U[se+oe+9]=a.y,U[se+oe+10]=a.z,U[se+oe+11]=ne.itemSize===4?a.w:1)}}g={count:m,texture:k,size:new Ct(L,P)},n.set(c,g),c.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let E=0;for(let _=0;_<h.length;_++)E+=h[_];const M=c.morphTargetsRelative?1:1-E;d.getUniforms().setValue(s,"morphTargetBaseInfluence",M),d.getUniforms().setValue(s,"morphTargetInfluences",h)}d.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:o}}function Gb(s,e,t,n){let a=new WeakMap;function o(d){const h=n.render.frame,p=d.geometry,m=e.get(d,p);if(a.get(m)!==h&&(e.update(m),a.set(m,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),a.get(d)!==h&&(t.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,s.ARRAY_BUFFER),a.set(d,h))),d.isSkinnedMesh){const g=d.skeleton;a.get(g)!==h&&(g.update(),a.set(g,h))}return m}function u(){a=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:u}}const Bv=new zn,Ng=new Uv(1,1),zv=new Tv,Vv=new m3,Hv=new Lv,Lg=[],Ig=[],Ug=new Float32Array(16),Fg=new Float32Array(9),Og=new Float32Array(4);function vo(s,e,t){const n=s[0];if(n<=0||n>0)return s;const a=e*t;let o=Lg[a];if(o===void 0&&(o=new Float32Array(a),Lg[a]=o),e!==0){n.toArray(o,0);for(let u=1,c=0;u!==e;++u)c+=t,s[u].toArray(o,c)}return o}function mn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function xn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function jc(s,e){let t=Ig[e];t===void 0&&(t=new Int32Array(e),Ig[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Wb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function jb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2fv(this.addr,e),xn(t,e)}}function Xb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;s.uniform3fv(this.addr,e),xn(t,e)}}function qb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4fv(this.addr,e),xn(t,e)}}function $b(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(mn(t,n))return;Og.set(n),s.uniformMatrix2fv(this.addr,!1,Og),xn(t,n)}}function Yb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(mn(t,n))return;Fg.set(n),s.uniformMatrix3fv(this.addr,!1,Fg),xn(t,n)}}function Kb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(mn(t,n))return;Ug.set(n),s.uniformMatrix4fv(this.addr,!1,Ug),xn(t,n)}}function Zb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Qb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2iv(this.addr,e),xn(t,e)}}function Jb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;s.uniform3iv(this.addr,e),xn(t,e)}}function e2(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4iv(this.addr,e),xn(t,e)}}function t2(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function n2(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2uiv(this.addr,e),xn(t,e)}}function i2(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;s.uniform3uiv(this.addr,e),xn(t,e)}}function r2(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4uiv(this.addr,e),xn(t,e)}}function s2(s,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(s.uniform1i(this.addr,a),n[0]=a);let o;this.type===s.SAMPLER_2D_SHADOW?(Ng.compareFunction=Ev,o=Ng):o=Bv,t.setTexture2D(e||o,a)}function a2(s,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(s.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||Vv,a)}function o2(s,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(s.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||Hv,a)}function l2(s,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(s.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||zv,a)}function u2(s){switch(s){case 5126:return Wb;case 35664:return jb;case 35665:return Xb;case 35666:return qb;case 35674:return $b;case 35675:return Yb;case 35676:return Kb;case 5124:case 35670:return Zb;case 35667:case 35671:return Qb;case 35668:case 35672:return Jb;case 35669:case 35673:return e2;case 5125:return t2;case 36294:return n2;case 36295:return i2;case 36296:return r2;case 35678:case 36198:case 36298:case 36306:case 35682:return s2;case 35679:case 36299:case 36307:return a2;case 35680:case 36300:case 36308:case 36293:return o2;case 36289:case 36303:case 36311:case 36292:return l2}}function c2(s,e){s.uniform1fv(this.addr,e)}function f2(s,e){const t=vo(e,this.size,2);s.uniform2fv(this.addr,t)}function d2(s,e){const t=vo(e,this.size,3);s.uniform3fv(this.addr,t)}function h2(s,e){const t=vo(e,this.size,4);s.uniform4fv(this.addr,t)}function p2(s,e){const t=vo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function m2(s,e){const t=vo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function x2(s,e){const t=vo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function g2(s,e){s.uniform1iv(this.addr,e)}function _2(s,e){s.uniform2iv(this.addr,e)}function v2(s,e){s.uniform3iv(this.addr,e)}function y2(s,e){s.uniform4iv(this.addr,e)}function S2(s,e){s.uniform1uiv(this.addr,e)}function M2(s,e){s.uniform2uiv(this.addr,e)}function E2(s,e){s.uniform3uiv(this.addr,e)}function w2(s,e){s.uniform4uiv(this.addr,e)}function T2(s,e,t){const n=this.cache,a=e.length,o=jc(t,a);mn(n,o)||(s.uniform1iv(this.addr,o),xn(n,o));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||Bv,o[u])}function b2(s,e,t){const n=this.cache,a=e.length,o=jc(t,a);mn(n,o)||(s.uniform1iv(this.addr,o),xn(n,o));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||Vv,o[u])}function C2(s,e,t){const n=this.cache,a=e.length,o=jc(t,a);mn(n,o)||(s.uniform1iv(this.addr,o),xn(n,o));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||Hv,o[u])}function A2(s,e,t){const n=this.cache,a=e.length,o=jc(t,a);mn(n,o)||(s.uniform1iv(this.addr,o),xn(n,o));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||zv,o[u])}function R2(s){switch(s){case 5126:return c2;case 35664:return f2;case 35665:return d2;case 35666:return h2;case 35674:return p2;case 35675:return m2;case 35676:return x2;case 5124:case 35670:return g2;case 35667:case 35671:return _2;case 35668:case 35672:return v2;case 35669:case 35673:return y2;case 5125:return S2;case 36294:return M2;case 36295:return E2;case 36296:return w2;case 35678:case 36198:case 36298:case 36306:case 35682:return T2;case 35679:case 36299:case 36307:return b2;case 35680:case 36300:case 36308:case 36293:return C2;case 36289:case 36303:case 36311:case 36292:return A2}}class P2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=u2(t.type)}}class D2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=R2(t.type)}}class N2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let o=0,u=a.length;o!==u;++o){const c=a[o];c.setValue(e,t[c.id],n)}}}const ph=/(\w+)(\])?(\[|\.)?/g;function kg(s,e){s.seq.push(e),s.map[e.id]=e}function L2(s,e,t){const n=s.name,a=n.length;for(ph.lastIndex=0;;){const o=ph.exec(n),u=ph.lastIndex;let c=o[1];const d=o[2]==="]",h=o[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===a){kg(t,h===void 0?new P2(c,s,e):new D2(c,s,e));break}else{let m=t.map[c];m===void 0&&(m=new N2(c),kg(t,m)),t=m}}}class wc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),u=e.getUniformLocation(t,o.name);L2(o,u,this)}}setValue(e,t,n,a){const o=this.map[t];o!==void 0&&o.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let o=0,u=t.length;o!==u;++o){const c=t[o],d=n[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,o=e.length;a!==o;++a){const u=e[a];u.id in t&&n.push(u)}return n}}function Bg(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const I2=37297;let U2=0;function F2(s,e){const t=s.split(`
`),n=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=a;u<o;u++){const c=u+1;n.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return n.join(`
`)}const zg=new gt;function O2(s){Dt._getMatrix(zg,Dt.workingColorSpace,s);const e=`mat3( ${zg.elements.map(t=>t.toFixed(4))} )`;switch(Dt.getTransfer(s)){case Ic:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return xt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Vg(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),o=(s.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const c=parseInt(u[1]);return t.toUpperCase()+`

`+o+`

`+F2(s.getShaderSource(e),c)}else return o}function k2(s,e){const t=O2(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function B2(s,e){let t;switch(e){case HE:t="Linear";break;case GE:t="Reinhard";break;case WE:t="Cineon";break;case jE:t="ACESFilmic";break;case qE:t="AgX";break;case $E:t="Neutral";break;case XE:t="Custom";break;default:xt("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hc=new he;function z2(){Dt.getLuminanceCoefficients(hc);const s=hc.x.toFixed(4),e=hc.y.toFixed(4),t=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function H2(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function G2(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const o=s.getActiveAttrib(e,a),u=o.name;let c=1;o.type===s.FLOAT_MAT2&&(c=2),o.type===s.FLOAT_MAT3&&(c=3),o.type===s.FLOAT_MAT4&&(c=4),t[u]={type:o.type,location:s.getAttribLocation(e,u),locationSize:c}}return t}function cl(s){return s!==""}function Hg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const W2=/^[ \t]*#include +<([\w\d./]+)>/gm;function yp(s){return s.replace(W2,X2)}const j2=new Map;function X2(s,e){let t=_t[e];if(t===void 0){const n=j2.get(e);if(n!==void 0)t=_t[n],xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yp(t)}const q2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wg(s){return s.replace(q2,$2)}function $2(s,e,t,n){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function jg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Y2(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===hv?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===SE?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Sr&&(e="SHADOWMAP_TYPE_VSM"),e}function K2(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case co:case fo:e="ENVMAP_TYPE_CUBE";break;case Hc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Z2(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case fo:e="ENVMAP_MODE_REFRACTION";break}return e}function Q2(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case pv:e="ENVMAP_BLENDING_MULTIPLY";break;case zE:e="ENVMAP_BLENDING_MIX";break;case VE:e="ENVMAP_BLENDING_ADD";break}return e}function J2(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function eC(s,e,t,n){const a=s.getContext(),o=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=Y2(t),h=K2(t),p=Z2(t),m=Q2(t),g=J2(t),y=V2(t),E=H2(o),M=a.createProgram();let _,v,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(cl).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(cl).join(`
`),v.length>0&&(v+=`
`)):(_=[jg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),v=[jg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vs?"#define TONE_MAPPING":"",t.toneMapping!==vs?_t.tonemapping_pars_fragment:"",t.toneMapping!==vs?B2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,k2("linearToOutputTexel",t.outputColorSpace),z2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cl).join(`
`)),u=yp(u),u=Hg(u,t),u=Gg(u,t),c=yp(c),c=Hg(c,t),c=Gg(c,t),u=Wg(u),c=Wg(c),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",t.glslVersion===ag?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ag?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const C=b+_+u,N=b+v+c,L=Bg(a,a.VERTEX_SHADER,C),P=Bg(a,a.FRAGMENT_SHADER,N);a.attachShader(M,L),a.attachShader(M,P),t.index0AttributeName!==void 0?a.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function U(B){if(s.debug.checkShaderErrors){const j=a.getProgramInfoLog(M)||"",q=a.getShaderInfoLog(L)||"",ne=a.getShaderInfoLog(P)||"",se=j.trim(),ae=q.trim(),oe=ne.trim();let H=!0,ue=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,M,L,P);else{const te=Vg(a,L,"vertex"),z=Vg(a,P,"fragment");rn("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+se+`
`+te+`
`+z)}else se!==""?xt("WebGLProgram: Program Info Log:",se):(ae===""||oe==="")&&(ue=!1);ue&&(B.diagnostics={runnable:H,programLog:se,vertexShader:{log:ae,prefix:_},fragmentShader:{log:oe,prefix:v}})}a.deleteShader(L),a.deleteShader(P),k=new wc(a,M),T=G2(a,M)}let k;this.getUniforms=function(){return k===void 0&&U(this),k};let T;this.getAttributes=function(){return T===void 0&&U(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(M,I2)),R},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=U2++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=P,this}let tC=0;class nC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new iC(e),t.set(e,n)),n}}class iC{constructor(e){this.id=tC++,this.code=e,this.usedTimes=0}}function rC(s,e,t,n,a,o,u){const c=new bv,d=new nC,h=new Set,p=[],m=a.logarithmicDepthBuffer,g=a.vertexTextures;let y=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return h.add(T),T===0?"uv":`uv${T}`}function _(T,R,B,j,q){const ne=j.fog,se=q.geometry,ae=T.isMeshStandardMaterial?j.environment:null,oe=(T.isMeshStandardMaterial?t:e).get(T.envMap||ae),H=oe&&oe.mapping===Hc?oe.image.height:null,ue=E[T.type];T.precision!==null&&(y=a.getMaxPrecision(T.precision),y!==T.precision&&xt("WebGLProgram.getParameters:",T.precision,"not supported, using",y,"instead."));const te=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,z=te!==void 0?te.length:0;let re=0;se.morphAttributes.position!==void 0&&(re=1),se.morphAttributes.normal!==void 0&&(re=2),se.morphAttributes.color!==void 0&&(re=3);let Ne,Pe,Fe,ie;if(ue){const At=Qi[ue];Ne=At.vertexShader,Pe=At.fragmentShader}else Ne=T.vertexShader,Pe=T.fragmentShader,d.update(T),Fe=d.getVertexShaderID(T),ie=d.getFragmentShaderID(T);const pe=s.getRenderTarget(),ce=s.state.buffers.depth.getReversed(),ve=q.isInstancedMesh===!0,we=q.isBatchedMesh===!0,qe=!!T.map,wt=!!T.matcap,$e=!!oe,ht=!!T.aoMap,V=!!T.lightMap,rt=!!T.bumpMap,pt=!!T.normalMap,Tt=!!T.displacementMap,Be=!!T.emissiveMap,vt=!!T.metalnessMap,He=!!T.roughnessMap,ct=T.anisotropy>0,F=T.clearcoat>0,A=T.dispersion>0,J=T.iridescence>0,me=T.sheen>0,ge=T.transmission>0,de=ct&&!!T.anisotropyMap,Ze=F&&!!T.clearcoatMap,De=F&&!!T.clearcoatNormalMap,Je=F&&!!T.clearcoatRoughnessMap,Ke=J&&!!T.iridescenceMap,Se=J&&!!T.iridescenceThicknessMap,Re=me&&!!T.sheenColorMap,ot=me&&!!T.sheenRoughnessMap,nt=!!T.specularMap,Oe=!!T.specularColorMap,lt=!!T.specularIntensityMap,G=ge&&!!T.transmissionMap,Le=ge&&!!T.thicknessMap,be=!!T.gradientMap,Ce=!!T.alphaMap,Ee=T.alphaTest>0,xe=!!T.alphaHash,Ge=!!T.extensions;let ft=vs;T.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ft=s.toneMapping);const Ut={shaderID:ue,shaderType:T.type,shaderName:T.name,vertexShader:Ne,fragmentShader:Pe,defines:T.defines,customVertexShaderID:Fe,customFragmentShaderID:ie,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:y,batching:we,batchingColor:we&&q._colorsTexture!==null,instancing:ve,instancingColor:ve&&q.instanceColor!==null,instancingMorph:ve&&q.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:ho,alphaToCoverage:!!T.alphaToCoverage,map:qe,matcap:wt,envMap:$e,envMapMode:$e&&oe.mapping,envMapCubeUVHeight:H,aoMap:ht,lightMap:V,bumpMap:rt,normalMap:pt,displacementMap:g&&Tt,emissiveMap:Be,normalMapObjectSpace:pt&&T.normalMapType===JE,normalMapTangentSpace:pt&&T.normalMapType===QE,metalnessMap:vt,roughnessMap:He,anisotropy:ct,anisotropyMap:de,clearcoat:F,clearcoatMap:Ze,clearcoatNormalMap:De,clearcoatRoughnessMap:Je,dispersion:A,iridescence:J,iridescenceMap:Ke,iridescenceThicknessMap:Se,sheen:me,sheenColorMap:Re,sheenRoughnessMap:ot,specularMap:nt,specularColorMap:Oe,specularIntensityMap:lt,transmission:ge,transmissionMap:G,thicknessMap:Le,gradientMap:be,opaque:T.transparent===!1&&T.blending===to&&T.alphaToCoverage===!1,alphaMap:Ce,alphaTest:Ee,alphaHash:xe,combine:T.combine,mapUv:qe&&M(T.map.channel),aoMapUv:ht&&M(T.aoMap.channel),lightMapUv:V&&M(T.lightMap.channel),bumpMapUv:rt&&M(T.bumpMap.channel),normalMapUv:pt&&M(T.normalMap.channel),displacementMapUv:Tt&&M(T.displacementMap.channel),emissiveMapUv:Be&&M(T.emissiveMap.channel),metalnessMapUv:vt&&M(T.metalnessMap.channel),roughnessMapUv:He&&M(T.roughnessMap.channel),anisotropyMapUv:de&&M(T.anisotropyMap.channel),clearcoatMapUv:Ze&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:De&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:ot&&M(T.sheenRoughnessMap.channel),specularMapUv:nt&&M(T.specularMap.channel),specularColorMapUv:Oe&&M(T.specularColorMap.channel),specularIntensityMapUv:lt&&M(T.specularIntensityMap.channel),transmissionMapUv:G&&M(T.transmissionMap.channel),thicknessMapUv:Le&&M(T.thicknessMap.channel),alphaMapUv:Ce&&M(T.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(pt||ct),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!se.attributes.uv&&(qe||Ce),fog:!!ne,useFog:T.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ce,skinning:q.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:re,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:ft,decodeVideoTexture:qe&&T.map.isVideoTexture===!0&&Dt.getTransfer(T.map.colorSpace)===Ft,decodeVideoTextureEmissive:Be&&T.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(T.emissiveMap.colorSpace)===Ft,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===wr,flipSided:T.side===Jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ge&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&T.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ut.vertexUv1s=h.has(1),Ut.vertexUv2s=h.has(2),Ut.vertexUv3s=h.has(3),h.clear(),Ut}function v(T){const R=[];if(T.shaderID?R.push(T.shaderID):(R.push(T.customVertexShaderID),R.push(T.customFragmentShaderID)),T.defines!==void 0)for(const B in T.defines)R.push(B),R.push(T.defines[B]);return T.isRawShaderMaterial===!1&&(b(R,T),C(R,T),R.push(s.outputColorSpace)),R.push(T.customProgramCacheKey),R.join()}function b(T,R){T.push(R.precision),T.push(R.outputColorSpace),T.push(R.envMapMode),T.push(R.envMapCubeUVHeight),T.push(R.mapUv),T.push(R.alphaMapUv),T.push(R.lightMapUv),T.push(R.aoMapUv),T.push(R.bumpMapUv),T.push(R.normalMapUv),T.push(R.displacementMapUv),T.push(R.emissiveMapUv),T.push(R.metalnessMapUv),T.push(R.roughnessMapUv),T.push(R.anisotropyMapUv),T.push(R.clearcoatMapUv),T.push(R.clearcoatNormalMapUv),T.push(R.clearcoatRoughnessMapUv),T.push(R.iridescenceMapUv),T.push(R.iridescenceThicknessMapUv),T.push(R.sheenColorMapUv),T.push(R.sheenRoughnessMapUv),T.push(R.specularMapUv),T.push(R.specularColorMapUv),T.push(R.specularIntensityMapUv),T.push(R.transmissionMapUv),T.push(R.thicknessMapUv),T.push(R.combine),T.push(R.fogExp2),T.push(R.sizeAttenuation),T.push(R.morphTargetsCount),T.push(R.morphAttributeCount),T.push(R.numDirLights),T.push(R.numPointLights),T.push(R.numSpotLights),T.push(R.numSpotLightMaps),T.push(R.numHemiLights),T.push(R.numRectAreaLights),T.push(R.numDirLightShadows),T.push(R.numPointLightShadows),T.push(R.numSpotLightShadows),T.push(R.numSpotLightShadowsWithMaps),T.push(R.numLightProbes),T.push(R.shadowMapType),T.push(R.toneMapping),T.push(R.numClippingPlanes),T.push(R.numClipIntersection),T.push(R.depthPacking)}function C(T,R){c.disableAll(),R.supportsVertexTextures&&c.enable(0),R.instancing&&c.enable(1),R.instancingColor&&c.enable(2),R.instancingMorph&&c.enable(3),R.matcap&&c.enable(4),R.envMap&&c.enable(5),R.normalMapObjectSpace&&c.enable(6),R.normalMapTangentSpace&&c.enable(7),R.clearcoat&&c.enable(8),R.iridescence&&c.enable(9),R.alphaTest&&c.enable(10),R.vertexColors&&c.enable(11),R.vertexAlphas&&c.enable(12),R.vertexUv1s&&c.enable(13),R.vertexUv2s&&c.enable(14),R.vertexUv3s&&c.enable(15),R.vertexTangents&&c.enable(16),R.anisotropy&&c.enable(17),R.alphaHash&&c.enable(18),R.batching&&c.enable(19),R.dispersion&&c.enable(20),R.batchingColor&&c.enable(21),R.gradientMap&&c.enable(22),T.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reversedDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),T.push(c.mask)}function N(T){const R=E[T.type];let B;if(R){const j=Qi[R];B=R3.clone(j.uniforms)}else B=T.uniforms;return B}function L(T,R){let B;for(let j=0,q=p.length;j<q;j++){const ne=p[j];if(ne.cacheKey===R){B=ne,++B.usedTimes;break}}return B===void 0&&(B=new eC(s,R,T,o),p.push(B)),B}function P(T){if(--T.usedTimes===0){const R=p.indexOf(T);p[R]=p[p.length-1],p.pop(),T.destroy()}}function U(T){d.remove(T)}function k(){d.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:N,acquireProgram:L,releaseProgram:P,releaseShaderCache:U,programs:p,dispose:k}}function sC(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let c=s.get(u);return c===void 0&&(c={},s.set(u,c)),c}function n(u){s.delete(u)}function a(u,c,d){s.get(u)[c]=d}function o(){s=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:o}}function aC(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Xg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qg(){const s=[];let e=0;const t=[],n=[],a=[];function o(){e=0,t.length=0,n.length=0,a.length=0}function u(m,g,y,E,M,_){let v=s[e];return v===void 0?(v={id:m.id,object:m,geometry:g,material:y,groupOrder:E,renderOrder:m.renderOrder,z:M,group:_},s[e]=v):(v.id=m.id,v.object=m,v.geometry=g,v.material=y,v.groupOrder=E,v.renderOrder=m.renderOrder,v.z=M,v.group=_),e++,v}function c(m,g,y,E,M,_){const v=u(m,g,y,E,M,_);y.transmission>0?n.push(v):y.transparent===!0?a.push(v):t.push(v)}function d(m,g,y,E,M,_){const v=u(m,g,y,E,M,_);y.transmission>0?n.unshift(v):y.transparent===!0?a.unshift(v):t.unshift(v)}function h(m,g){t.length>1&&t.sort(m||aC),n.length>1&&n.sort(g||Xg),a.length>1&&a.sort(g||Xg)}function p(){for(let m=e,g=s.length;m<g;m++){const y=s[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:a,init:o,push:c,unshift:d,finish:p,sort:h}}function oC(){let s=new WeakMap;function e(n,a){const o=s.get(n);let u;return o===void 0?(u=new qg,s.set(n,[u])):a>=o.length?(u=new qg,o.push(u)):u=o[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function lC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new he,color:new Ot};break;case"SpotLight":t={position:new he,direction:new he,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new he,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new he,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":t={color:new Ot,position:new he,halfWidth:new he,halfHeight:new he};break}return s[e.id]=t,t}}}function uC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let cC=0;function fC(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function dC(s){const e=new lC,t=uC(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new he);const a=new he,o=new pn,u=new pn;function c(h){let p=0,m=0,g=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let y=0,E=0,M=0,_=0,v=0,b=0,C=0,N=0,L=0,P=0,U=0;h.sort(fC);for(let T=0,R=h.length;T<R;T++){const B=h[T],j=B.color,q=B.intensity,ne=B.distance,se=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=j.r*q,m+=j.g*q,g+=j.b*q;else if(B.isLightProbe){for(let ae=0;ae<9;ae++)n.probe[ae].addScaledVector(B.sh.coefficients[ae],q);U++}else if(B.isDirectionalLight){const ae=e.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const oe=B.shadow,H=t.get(B);H.shadowIntensity=oe.intensity,H.shadowBias=oe.bias,H.shadowNormalBias=oe.normalBias,H.shadowRadius=oe.radius,H.shadowMapSize=oe.mapSize,n.directionalShadow[y]=H,n.directionalShadowMap[y]=se,n.directionalShadowMatrix[y]=B.shadow.matrix,b++}n.directional[y]=ae,y++}else if(B.isSpotLight){const ae=e.get(B);ae.position.setFromMatrixPosition(B.matrixWorld),ae.color.copy(j).multiplyScalar(q),ae.distance=ne,ae.coneCos=Math.cos(B.angle),ae.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ae.decay=B.decay,n.spot[M]=ae;const oe=B.shadow;if(B.map&&(n.spotLightMap[L]=B.map,L++,oe.updateMatrices(B),B.castShadow&&P++),n.spotLightMatrix[M]=oe.matrix,B.castShadow){const H=t.get(B);H.shadowIntensity=oe.intensity,H.shadowBias=oe.bias,H.shadowNormalBias=oe.normalBias,H.shadowRadius=oe.radius,H.shadowMapSize=oe.mapSize,n.spotShadow[M]=H,n.spotShadowMap[M]=se,N++}M++}else if(B.isRectAreaLight){const ae=e.get(B);ae.color.copy(j).multiplyScalar(q),ae.halfWidth.set(B.width*.5,0,0),ae.halfHeight.set(0,B.height*.5,0),n.rectArea[_]=ae,_++}else if(B.isPointLight){const ae=e.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity),ae.distance=B.distance,ae.decay=B.decay,B.castShadow){const oe=B.shadow,H=t.get(B);H.shadowIntensity=oe.intensity,H.shadowBias=oe.bias,H.shadowNormalBias=oe.normalBias,H.shadowRadius=oe.radius,H.shadowMapSize=oe.mapSize,H.shadowCameraNear=oe.camera.near,H.shadowCameraFar=oe.camera.far,n.pointShadow[E]=H,n.pointShadowMap[E]=se,n.pointShadowMatrix[E]=B.shadow.matrix,C++}n.point[E]=ae,E++}else if(B.isHemisphereLight){const ae=e.get(B);ae.skyColor.copy(B.color).multiplyScalar(q),ae.groundColor.copy(B.groundColor).multiplyScalar(q),n.hemi[v]=ae,v++}}_>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=g;const k=n.hash;(k.directionalLength!==y||k.pointLength!==E||k.spotLength!==M||k.rectAreaLength!==_||k.hemiLength!==v||k.numDirectionalShadows!==b||k.numPointShadows!==C||k.numSpotShadows!==N||k.numSpotMaps!==L||k.numLightProbes!==U)&&(n.directional.length=y,n.spot.length=M,n.rectArea.length=_,n.point.length=E,n.hemi.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=N,n.spotShadowMap.length=N,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=N+L-P,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=U,k.directionalLength=y,k.pointLength=E,k.spotLength=M,k.rectAreaLength=_,k.hemiLength=v,k.numDirectionalShadows=b,k.numPointShadows=C,k.numSpotShadows=N,k.numSpotMaps=L,k.numLightProbes=U,n.version=cC++)}function d(h,p){let m=0,g=0,y=0,E=0,M=0;const _=p.matrixWorldInverse;for(let v=0,b=h.length;v<b;v++){const C=h[v];if(C.isDirectionalLight){const N=n.directional[m];N.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(_),m++}else if(C.isSpotLight){const N=n.spot[y];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(_),N.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(_),y++}else if(C.isRectAreaLight){const N=n.rectArea[E];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(_),u.identity(),o.copy(C.matrixWorld),o.premultiply(_),u.extractRotation(o),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),E++}else if(C.isPointLight){const N=n.point[g];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(_),g++}else if(C.isHemisphereLight){const N=n.hemi[M];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(_),M++}}}return{setup:c,setupView:d,state:n}}function $g(s){const e=new dC(s),t=[],n=[];function a(p){h.camera=p,t.length=0,n.length=0}function o(p){t.push(p)}function u(p){n.push(p)}function c(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:u}}function hC(s){let e=new WeakMap;function t(a,o=0){const u=e.get(a);let c;return u===void 0?(c=new $g(s),e.set(a,[c])):o>=u.length?(c=new $g(s),u.push(c)):c=u[o],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const pC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xC(s,e,t){let n=new Iv;const a=new Ct,o=new Ct,u=new sn,c=new z3({depthPacking:ZE}),d=new V3,h={},p=t.maxTextureSize,m={[Ms]:Jn,[Jn]:Ms,[wr]:wr},g=new rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:pC,fragmentShader:mC}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const E=new ws;E.setAttribute("position",new nr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ur(E,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hv;let v=this.type;this.render=function(P,U,k){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;const T=s.getRenderTarget(),R=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),j=s.state;j.setBlending(Ar),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const q=v!==Sr&&this.type===Sr,ne=v===Sr&&this.type!==Sr;for(let se=0,ae=P.length;se<ae;se++){const oe=P[se],H=oe.shadow;if(H===void 0){xt("WebGLShadowMap:",oe,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const ue=H.getFrameExtents();if(a.multiply(ue),o.copy(H.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(o.x=Math.floor(p/ue.x),a.x=o.x*ue.x,H.mapSize.x=o.x),a.y>p&&(o.y=Math.floor(p/ue.y),a.y=o.y*ue.y,H.mapSize.y=o.y)),H.map===null||q===!0||ne===!0){const z=this.type!==Sr?{minFilter:pi,magFilter:pi}:{};H.map!==null&&H.map.dispose(),H.map=new aa(a.x,a.y,z),H.map.texture.name=oe.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const te=H.getViewportCount();for(let z=0;z<te;z++){const re=H.getViewport(z);u.set(o.x*re.x,o.y*re.y,o.x*re.z,o.y*re.w),j.viewport(u),H.updateMatrices(oe,z),n=H.getFrustum(),N(U,k,H.camera,oe,this.type)}H.isPointLightShadow!==!0&&this.type===Sr&&b(H,k),H.needsUpdate=!1}v=this.type,_.needsUpdate=!1,s.setRenderTarget(T,R,B)};function b(P,U){const k=e.update(M);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new aa(a.x,a.y)),g.uniforms.shadow_pass.value=P.map.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(U,null,k,g,M,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(U,null,k,y,M,null)}function C(P,U,k,T){let R=null;const B=k.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(B!==void 0)R=B;else if(R=k.isPointLight===!0?d:c,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const j=R.uuid,q=U.uuid;let ne=h[j];ne===void 0&&(ne={},h[j]=ne);let se=ne[q];se===void 0&&(se=R.clone(),ne[q]=se,U.addEventListener("dispose",L)),R=se}if(R.visible=U.visible,R.wireframe=U.wireframe,T===Sr?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:m[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,k.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const j=s.properties.get(R);j.light=k}return R}function N(P,U,k,T,R){if(P.visible===!1)return;if(P.layers.test(U.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&R===Sr)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,P.matrixWorld);const q=e.update(P),ne=P.material;if(Array.isArray(ne)){const se=q.groups;for(let ae=0,oe=se.length;ae<oe;ae++){const H=se[ae],ue=ne[H.materialIndex];if(ue&&ue.visible){const te=C(P,ue,T,R);P.onBeforeShadow(s,P,U,k,q,te,H),s.renderBufferDirect(k,null,q,te,P,H),P.onAfterShadow(s,P,U,k,q,te,H)}}}else if(ne.visible){const se=C(P,ne,T,R);P.onBeforeShadow(s,P,U,k,q,se,null),s.renderBufferDirect(k,null,q,se,P,null),P.onAfterShadow(s,P,U,k,q,se,null)}}const j=P.children;for(let q=0,ne=j.length;q<ne;q++)N(j[q],U,k,T,R)}function L(P){P.target.removeEventListener("dispose",L);for(const k in h){const T=h[k],R=P.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}const gC={[Ih]:Uh,[Fh]:Bh,[Oh]:zh,[uo]:kh,[Uh]:Ih,[Bh]:Fh,[zh]:Oh,[kh]:uo};function _C(s,e){function t(){let G=!1;const Le=new sn;let be=null;const Ce=new sn(0,0,0,0);return{setMask:function(Ee){be!==Ee&&!G&&(s.colorMask(Ee,Ee,Ee,Ee),be=Ee)},setLocked:function(Ee){G=Ee},setClear:function(Ee,xe,Ge,ft,Ut){Ut===!0&&(Ee*=ft,xe*=ft,Ge*=ft),Le.set(Ee,xe,Ge,ft),Ce.equals(Le)===!1&&(s.clearColor(Ee,xe,Ge,ft),Ce.copy(Le))},reset:function(){G=!1,be=null,Ce.set(-1,0,0,0)}}}function n(){let G=!1,Le=!1,be=null,Ce=null,Ee=null;return{setReversed:function(xe){if(Le!==xe){const Ge=e.get("EXT_clip_control");xe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Le=xe;const ft=Ee;Ee=null,this.setClear(ft)}},getReversed:function(){return Le},setTest:function(xe){xe?pe(s.DEPTH_TEST):ce(s.DEPTH_TEST)},setMask:function(xe){be!==xe&&!G&&(s.depthMask(xe),be=xe)},setFunc:function(xe){if(Le&&(xe=gC[xe]),Ce!==xe){switch(xe){case Ih:s.depthFunc(s.NEVER);break;case Uh:s.depthFunc(s.ALWAYS);break;case Fh:s.depthFunc(s.LESS);break;case uo:s.depthFunc(s.LEQUAL);break;case Oh:s.depthFunc(s.EQUAL);break;case kh:s.depthFunc(s.GEQUAL);break;case Bh:s.depthFunc(s.GREATER);break;case zh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ce=xe}},setLocked:function(xe){G=xe},setClear:function(xe){Ee!==xe&&(Le&&(xe=1-xe),s.clearDepth(xe),Ee=xe)},reset:function(){G=!1,be=null,Ce=null,Ee=null,Le=!1}}}function a(){let G=!1,Le=null,be=null,Ce=null,Ee=null,xe=null,Ge=null,ft=null,Ut=null;return{setTest:function(At){G||(At?pe(s.STENCIL_TEST):ce(s.STENCIL_TEST))},setMask:function(At){Le!==At&&!G&&(s.stencilMask(At),Le=At)},setFunc:function(At,ti,Mn){(be!==At||Ce!==ti||Ee!==Mn)&&(s.stencilFunc(At,ti,Mn),be=At,Ce=ti,Ee=Mn)},setOp:function(At,ti,Mn){(xe!==At||Ge!==ti||ft!==Mn)&&(s.stencilOp(At,ti,Mn),xe=At,Ge=ti,ft=Mn)},setLocked:function(At){G=At},setClear:function(At){Ut!==At&&(s.clearStencil(At),Ut=At)},reset:function(){G=!1,Le=null,be=null,Ce=null,Ee=null,xe=null,Ge=null,ft=null,Ut=null}}}const o=new t,u=new n,c=new a,d=new WeakMap,h=new WeakMap;let p={},m={},g=new WeakMap,y=[],E=null,M=!1,_=null,v=null,b=null,C=null,N=null,L=null,P=null,U=new Ot(0,0,0),k=0,T=!1,R=null,B=null,j=null,q=null,ne=null;const se=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,oe=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(H)[1]),ae=oe>=1):H.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ae=oe>=2);let ue=null,te={};const z=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Ne=new sn().fromArray(z),Pe=new sn().fromArray(re);function Fe(G,Le,be,Ce){const Ee=new Uint8Array(4),xe=s.createTexture();s.bindTexture(G,xe),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ge=0;Ge<be;Ge++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,Ce,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(Le+Ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return xe}const ie={};ie[s.TEXTURE_2D]=Fe(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=Fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=Fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=Fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),c.setClear(0),pe(s.DEPTH_TEST),u.setFunc(uo),rt(!1),pt(eg),pe(s.CULL_FACE),ht(Ar);function pe(G){p[G]!==!0&&(s.enable(G),p[G]=!0)}function ce(G){p[G]!==!1&&(s.disable(G),p[G]=!1)}function ve(G,Le){return m[G]!==Le?(s.bindFramebuffer(G,Le),m[G]=Le,G===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Le),G===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function we(G,Le){let be=y,Ce=!1;if(G){be=g.get(Le),be===void 0&&(be=[],g.set(Le,be));const Ee=G.textures;if(be.length!==Ee.length||be[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,Ge=Ee.length;xe<Ge;xe++)be[xe]=s.COLOR_ATTACHMENT0+xe;be.length=Ee.length,Ce=!0}}else be[0]!==s.BACK&&(be[0]=s.BACK,Ce=!0);Ce&&s.drawBuffers(be)}function qe(G){return E!==G?(s.useProgram(G),E=G,!0):!1}const wt={[$s]:s.FUNC_ADD,[EE]:s.FUNC_SUBTRACT,[wE]:s.FUNC_REVERSE_SUBTRACT};wt[TE]=s.MIN,wt[bE]=s.MAX;const $e={[CE]:s.ZERO,[AE]:s.ONE,[RE]:s.SRC_COLOR,[Nh]:s.SRC_ALPHA,[UE]:s.SRC_ALPHA_SATURATE,[LE]:s.DST_COLOR,[DE]:s.DST_ALPHA,[PE]:s.ONE_MINUS_SRC_COLOR,[Lh]:s.ONE_MINUS_SRC_ALPHA,[IE]:s.ONE_MINUS_DST_COLOR,[NE]:s.ONE_MINUS_DST_ALPHA,[FE]:s.CONSTANT_COLOR,[OE]:s.ONE_MINUS_CONSTANT_COLOR,[kE]:s.CONSTANT_ALPHA,[BE]:s.ONE_MINUS_CONSTANT_ALPHA};function ht(G,Le,be,Ce,Ee,xe,Ge,ft,Ut,At){if(G===Ar){M===!0&&(ce(s.BLEND),M=!1);return}if(M===!1&&(pe(s.BLEND),M=!0),G!==ME){if(G!==_||At!==T){if((v!==$s||N!==$s)&&(s.blendEquation(s.FUNC_ADD),v=$s,N=$s),At)switch(G){case to:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tg:s.blendFunc(s.ONE,s.ONE);break;case ng:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ig:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:rn("WebGLState: Invalid blending: ",G);break}else switch(G){case to:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tg:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ng:rn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ig:rn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rn("WebGLState: Invalid blending: ",G);break}b=null,C=null,L=null,P=null,U.set(0,0,0),k=0,_=G,T=At}return}Ee=Ee||Le,xe=xe||be,Ge=Ge||Ce,(Le!==v||Ee!==N)&&(s.blendEquationSeparate(wt[Le],wt[Ee]),v=Le,N=Ee),(be!==b||Ce!==C||xe!==L||Ge!==P)&&(s.blendFuncSeparate($e[be],$e[Ce],$e[xe],$e[Ge]),b=be,C=Ce,L=xe,P=Ge),(ft.equals(U)===!1||Ut!==k)&&(s.blendColor(ft.r,ft.g,ft.b,Ut),U.copy(ft),k=Ut),_=G,T=!1}function V(G,Le){G.side===wr?ce(s.CULL_FACE):pe(s.CULL_FACE);let be=G.side===Jn;Le&&(be=!be),rt(be),G.blending===to&&G.transparent===!1?ht(Ar):ht(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),o.setMask(G.colorWrite);const Ce=G.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Be(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function rt(G){R!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),R=G)}function pt(G){G!==vE?(pe(s.CULL_FACE),G!==B&&(G===eg?s.cullFace(s.BACK):G===yE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ce(s.CULL_FACE),B=G}function Tt(G){G!==j&&(ae&&s.lineWidth(G),j=G)}function Be(G,Le,be){G?(pe(s.POLYGON_OFFSET_FILL),(q!==Le||ne!==be)&&(s.polygonOffset(Le,be),q=Le,ne=be)):ce(s.POLYGON_OFFSET_FILL)}function vt(G){G?pe(s.SCISSOR_TEST):ce(s.SCISSOR_TEST)}function He(G){G===void 0&&(G=s.TEXTURE0+se-1),ue!==G&&(s.activeTexture(G),ue=G)}function ct(G,Le,be){be===void 0&&(ue===null?be=s.TEXTURE0+se-1:be=ue);let Ce=te[be];Ce===void 0&&(Ce={type:void 0,texture:void 0},te[be]=Ce),(Ce.type!==G||Ce.texture!==Le)&&(ue!==be&&(s.activeTexture(be),ue=be),s.bindTexture(G,Le||ie[G]),Ce.type=G,Ce.texture=Le)}function F(){const G=te[ue];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function A(){try{s.compressedTexImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function J(){try{s.compressedTexImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function me(){try{s.texSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function ge(){try{s.texSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function de(){try{s.compressedTexSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Ze(){try{s.compressedTexSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function De(){try{s.texStorage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Je(){try{s.texStorage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Ke(){try{s.texImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Se(){try{s.texImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Re(G){Ne.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ne.copy(G))}function ot(G){Pe.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Pe.copy(G))}function nt(G,Le){let be=h.get(Le);be===void 0&&(be=new WeakMap,h.set(Le,be));let Ce=be.get(G);Ce===void 0&&(Ce=s.getUniformBlockIndex(Le,G.name),be.set(G,Ce))}function Oe(G,Le){const Ce=h.get(Le).get(G);d.get(Le)!==Ce&&(s.uniformBlockBinding(Le,Ce,G.__bindingPointIndex),d.set(Le,Ce))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},ue=null,te={},m={},g=new WeakMap,y=[],E=null,M=!1,_=null,v=null,b=null,C=null,N=null,L=null,P=null,U=new Ot(0,0,0),k=0,T=!1,R=null,B=null,j=null,q=null,ne=null,Ne.set(0,0,s.canvas.width,s.canvas.height),Pe.set(0,0,s.canvas.width,s.canvas.height),o.reset(),u.reset(),c.reset()}return{buffers:{color:o,depth:u,stencil:c},enable:pe,disable:ce,bindFramebuffer:ve,drawBuffers:we,useProgram:qe,setBlending:ht,setMaterial:V,setFlipSided:rt,setCullFace:pt,setLineWidth:Tt,setPolygonOffset:Be,setScissorTest:vt,activeTexture:He,bindTexture:ct,unbindTexture:F,compressedTexImage2D:A,compressedTexImage3D:J,texImage2D:Ke,texImage3D:Se,updateUBOMapping:nt,uniformBlockBinding:Oe,texStorage2D:De,texStorage3D:Je,texSubImage2D:me,texSubImage3D:ge,compressedTexSubImage2D:de,compressedTexSubImage3D:Ze,scissor:Re,viewport:ot,reset:lt}}function vC(s,e,t,n,a,o,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ct,p=new WeakMap;let m;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,A){return y?new OffscreenCanvas(F,A):Fc("canvas")}function M(F,A,J){let me=1;const ge=ct(F);if((ge.width>J||ge.height>J)&&(me=J/Math.max(ge.width,ge.height)),me<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const de=Math.floor(me*ge.width),Ze=Math.floor(me*ge.height);m===void 0&&(m=E(de,Ze));const De=A?E(de,Ze):m;return De.width=de,De.height=Ze,De.getContext("2d").drawImage(F,0,0,de,Ze),xt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+de+"x"+Ze+")."),De}else return"data"in F&&xt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),F;return F}function _(F){return F.generateMipmaps}function v(F){s.generateMipmap(F)}function b(F){return F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?s.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(F,A,J,me,ge=!1){if(F!==null){if(s[F]!==void 0)return s[F];xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let de=A;if(A===s.RED&&(J===s.FLOAT&&(de=s.R32F),J===s.HALF_FLOAT&&(de=s.R16F),J===s.UNSIGNED_BYTE&&(de=s.R8)),A===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.R8UI),J===s.UNSIGNED_SHORT&&(de=s.R16UI),J===s.UNSIGNED_INT&&(de=s.R32UI),J===s.BYTE&&(de=s.R8I),J===s.SHORT&&(de=s.R16I),J===s.INT&&(de=s.R32I)),A===s.RG&&(J===s.FLOAT&&(de=s.RG32F),J===s.HALF_FLOAT&&(de=s.RG16F),J===s.UNSIGNED_BYTE&&(de=s.RG8)),A===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.RG8UI),J===s.UNSIGNED_SHORT&&(de=s.RG16UI),J===s.UNSIGNED_INT&&(de=s.RG32UI),J===s.BYTE&&(de=s.RG8I),J===s.SHORT&&(de=s.RG16I),J===s.INT&&(de=s.RG32I)),A===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.RGB8UI),J===s.UNSIGNED_SHORT&&(de=s.RGB16UI),J===s.UNSIGNED_INT&&(de=s.RGB32UI),J===s.BYTE&&(de=s.RGB8I),J===s.SHORT&&(de=s.RGB16I),J===s.INT&&(de=s.RGB32I)),A===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),J===s.UNSIGNED_INT&&(de=s.RGBA32UI),J===s.BYTE&&(de=s.RGBA8I),J===s.SHORT&&(de=s.RGBA16I),J===s.INT&&(de=s.RGBA32I)),A===s.RGB&&(J===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(de=s.R11F_G11F_B10F)),A===s.RGBA){const Ze=ge?Ic:Dt.getTransfer(me);J===s.FLOAT&&(de=s.RGBA32F),J===s.HALF_FLOAT&&(de=s.RGBA16F),J===s.UNSIGNED_BYTE&&(de=Ze===Ft?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function N(F,A){let J;return F?A===null||A===sa||A===wl?J=s.DEPTH24_STENCIL8:A===br?J=s.DEPTH32F_STENCIL8:A===El&&(J=s.DEPTH24_STENCIL8,xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===sa||A===wl?J=s.DEPTH_COMPONENT24:A===br?J=s.DEPTH_COMPONENT32F:A===El&&(J=s.DEPTH_COMPONENT16),J}function L(F,A){return _(F)===!0||F.isFramebufferTexture&&F.minFilter!==pi&&F.minFilter!==Ri?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function P(F){const A=F.target;A.removeEventListener("dispose",P),k(A),A.isVideoTexture&&p.delete(A)}function U(F){const A=F.target;A.removeEventListener("dispose",U),R(A)}function k(F){const A=n.get(F);if(A.__webglInit===void 0)return;const J=F.source,me=g.get(J);if(me){const ge=me[A.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&T(F),Object.keys(me).length===0&&g.delete(J)}n.remove(F)}function T(F){const A=n.get(F);s.deleteTexture(A.__webglTexture);const J=F.source,me=g.get(J);delete me[A.__cacheKey],u.memory.textures--}function R(F){const A=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(A.__webglFramebuffer[me]))for(let ge=0;ge<A.__webglFramebuffer[me].length;ge++)s.deleteFramebuffer(A.__webglFramebuffer[me][ge]);else s.deleteFramebuffer(A.__webglFramebuffer[me]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[me])}else{if(Array.isArray(A.__webglFramebuffer))for(let me=0;me<A.__webglFramebuffer.length;me++)s.deleteFramebuffer(A.__webglFramebuffer[me]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let me=0;me<A.__webglColorRenderbuffer.length;me++)A.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[me]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const J=F.textures;for(let me=0,ge=J.length;me<ge;me++){const de=n.get(J[me]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),u.memory.textures--),n.remove(J[me])}n.remove(F)}let B=0;function j(){B=0}function q(){const F=B;return F>=a.maxTextures&&xt("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+a.maxTextures),B+=1,F}function ne(F){const A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function se(F,A){const J=n.get(F);if(F.isVideoTexture&&vt(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&J.__version!==F.version){const me=F.image;if(me===null)xt("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)xt("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(J,F,A);return}}else F.isExternalTexture&&(J.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+A)}function ae(F,A){const J=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&J.__version!==F.version){ie(J,F,A);return}else F.isExternalTexture&&(J.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+A)}function oe(F,A){const J=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&J.__version!==F.version){ie(J,F,A);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+A)}function H(F,A){const J=n.get(F);if(F.version>0&&J.__version!==F.version){pe(J,F,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+A)}const ue={[Gh]:s.REPEAT,[Tr]:s.CLAMP_TO_EDGE,[Wh]:s.MIRRORED_REPEAT},te={[pi]:s.NEAREST,[YE]:s.NEAREST_MIPMAP_NEAREST,[qu]:s.NEAREST_MIPMAP_LINEAR,[Ri]:s.LINEAR,[Bd]:s.LINEAR_MIPMAP_NEAREST,[Zs]:s.LINEAR_MIPMAP_LINEAR},z={[e3]:s.NEVER,[a3]:s.ALWAYS,[t3]:s.LESS,[Ev]:s.LEQUAL,[n3]:s.EQUAL,[s3]:s.GEQUAL,[i3]:s.GREATER,[r3]:s.NOTEQUAL};function re(F,A){if(A.type===br&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Ri||A.magFilter===Bd||A.magFilter===qu||A.magFilter===Zs||A.minFilter===Ri||A.minFilter===Bd||A.minFilter===qu||A.minFilter===Zs)&&xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,ue[A.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,ue[A.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,ue[A.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,te[A.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,te[A.minFilter]),A.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,z[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===pi||A.minFilter!==qu&&A.minFilter!==Zs||A.type===br&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(F,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Ne(F,A){let J=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",P));const me=A.source;let ge=g.get(me);ge===void 0&&(ge={},g.set(me,ge));const de=ne(A);if(de!==F.__cacheKey){ge[de]===void 0&&(ge[de]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,J=!0),ge[de].usedTimes++;const Ze=ge[F.__cacheKey];Ze!==void 0&&(ge[F.__cacheKey].usedTimes--,Ze.usedTimes===0&&T(A)),F.__cacheKey=de,F.__webglTexture=ge[de].texture}return J}function Pe(F,A,J){return Math.floor(Math.floor(F/J)/A)}function Fe(F,A,J,me){const de=F.updateRanges;if(de.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,J,me,A.data);else{de.sort((Se,Re)=>Se.start-Re.start);let Ze=0;for(let Se=1;Se<de.length;Se++){const Re=de[Ze],ot=de[Se],nt=Re.start+Re.count,Oe=Pe(ot.start,A.width,4),lt=Pe(Re.start,A.width,4);ot.start<=nt+1&&Oe===lt&&Pe(ot.start+ot.count-1,A.width,4)===Oe?Re.count=Math.max(Re.count,ot.start+ot.count-Re.start):(++Ze,de[Ze]=ot)}de.length=Ze+1;const De=s.getParameter(s.UNPACK_ROW_LENGTH),Je=s.getParameter(s.UNPACK_SKIP_PIXELS),Ke=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let Se=0,Re=de.length;Se<Re;Se++){const ot=de[Se],nt=Math.floor(ot.start/4),Oe=Math.ceil(ot.count/4),lt=nt%A.width,G=Math.floor(nt/A.width),Le=Oe,be=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),s.pixelStorei(s.UNPACK_SKIP_ROWS,G),t.texSubImage2D(s.TEXTURE_2D,0,lt,G,Le,be,J,me,A.data)}F.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,De),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Je),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ke)}}function ie(F,A,J){let me=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(me=s.TEXTURE_3D);const ge=Ne(F,A),de=A.source;t.bindTexture(me,F.__webglTexture,s.TEXTURE0+J);const Ze=n.get(de);if(de.version!==Ze.__version||ge===!0){t.activeTexture(s.TEXTURE0+J);const De=Dt.getPrimaries(Dt.workingColorSpace),Je=A.colorSpace===ds?null:Dt.getPrimaries(A.colorSpace),Ke=A.colorSpace===ds||De===Je?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let Se=M(A.image,!1,a.maxTextureSize);Se=He(A,Se);const Re=o.convert(A.format,A.colorSpace),ot=o.convert(A.type);let nt=C(A.internalFormat,Re,ot,A.colorSpace,A.isVideoTexture);re(me,A);let Oe;const lt=A.mipmaps,G=A.isVideoTexture!==!0,Le=Ze.__version===void 0||ge===!0,be=de.dataReady,Ce=L(A,Se);if(A.isDepthTexture)nt=N(A.format===bl,A.type),Le&&(G?t.texStorage2D(s.TEXTURE_2D,1,nt,Se.width,Se.height):t.texImage2D(s.TEXTURE_2D,0,nt,Se.width,Se.height,0,Re,ot,null));else if(A.isDataTexture)if(lt.length>0){G&&Le&&t.texStorage2D(s.TEXTURE_2D,Ce,nt,lt[0].width,lt[0].height);for(let Ee=0,xe=lt.length;Ee<xe;Ee++)Oe=lt[Ee],G?be&&t.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Oe.width,Oe.height,Re,ot,Oe.data):t.texImage2D(s.TEXTURE_2D,Ee,nt,Oe.width,Oe.height,0,Re,ot,Oe.data);A.generateMipmaps=!1}else G?(Le&&t.texStorage2D(s.TEXTURE_2D,Ce,nt,Se.width,Se.height),be&&Fe(A,Se,Re,ot)):t.texImage2D(s.TEXTURE_2D,0,nt,Se.width,Se.height,0,Re,ot,Se.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){G&&Le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,nt,lt[0].width,lt[0].height,Se.depth);for(let Ee=0,xe=lt.length;Ee<xe;Ee++)if(Oe=lt[Ee],A.format!==Gi)if(Re!==null)if(G){if(be)if(A.layerUpdates.size>0){const Ge=Tg(Oe.width,Oe.height,A.format,A.type);for(const ft of A.layerUpdates){const Ut=Oe.data.subarray(ft*Ge/Oe.data.BYTES_PER_ELEMENT,(ft+1)*Ge/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,ft,Oe.width,Oe.height,1,Re,Ut)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Oe.width,Oe.height,Se.depth,Re,Oe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ee,nt,Oe.width,Oe.height,Se.depth,0,Oe.data,0,0);else xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?be&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Oe.width,Oe.height,Se.depth,Re,ot,Oe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Ee,nt,Oe.width,Oe.height,Se.depth,0,Re,ot,Oe.data)}else{G&&Le&&t.texStorage2D(s.TEXTURE_2D,Ce,nt,lt[0].width,lt[0].height);for(let Ee=0,xe=lt.length;Ee<xe;Ee++)Oe=lt[Ee],A.format!==Gi?Re!==null?G?be&&t.compressedTexSubImage2D(s.TEXTURE_2D,Ee,0,0,Oe.width,Oe.height,Re,Oe.data):t.compressedTexImage2D(s.TEXTURE_2D,Ee,nt,Oe.width,Oe.height,0,Oe.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?be&&t.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Oe.width,Oe.height,Re,ot,Oe.data):t.texImage2D(s.TEXTURE_2D,Ee,nt,Oe.width,Oe.height,0,Re,ot,Oe.data)}else if(A.isDataArrayTexture)if(G){if(Le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,nt,Se.width,Se.height,Se.depth),be)if(A.layerUpdates.size>0){const Ee=Tg(Se.width,Se.height,A.format,A.type);for(const xe of A.layerUpdates){const Ge=Se.data.subarray(xe*Ee/Se.data.BYTES_PER_ELEMENT,(xe+1)*Ee/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xe,Se.width,Se.height,1,Re,ot,Ge)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Re,ot,Se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,nt,Se.width,Se.height,Se.depth,0,Re,ot,Se.data);else if(A.isData3DTexture)G?(Le&&t.texStorage3D(s.TEXTURE_3D,Ce,nt,Se.width,Se.height,Se.depth),be&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Re,ot,Se.data)):t.texImage3D(s.TEXTURE_3D,0,nt,Se.width,Se.height,Se.depth,0,Re,ot,Se.data);else if(A.isFramebufferTexture){if(Le)if(G)t.texStorage2D(s.TEXTURE_2D,Ce,nt,Se.width,Se.height);else{let Ee=Se.width,xe=Se.height;for(let Ge=0;Ge<Ce;Ge++)t.texImage2D(s.TEXTURE_2D,Ge,nt,Ee,xe,0,Re,ot,null),Ee>>=1,xe>>=1}}else if(lt.length>0){if(G&&Le){const Ee=ct(lt[0]);t.texStorage2D(s.TEXTURE_2D,Ce,nt,Ee.width,Ee.height)}for(let Ee=0,xe=lt.length;Ee<xe;Ee++)Oe=lt[Ee],G?be&&t.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Re,ot,Oe):t.texImage2D(s.TEXTURE_2D,Ee,nt,Re,ot,Oe);A.generateMipmaps=!1}else if(G){if(Le){const Ee=ct(Se);t.texStorage2D(s.TEXTURE_2D,Ce,nt,Ee.width,Ee.height)}be&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,ot,Se)}else t.texImage2D(s.TEXTURE_2D,0,nt,Re,ot,Se);_(A)&&v(me),Ze.__version=de.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function pe(F,A,J){if(A.image.length!==6)return;const me=Ne(F,A),ge=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+J);const de=n.get(ge);if(ge.version!==de.__version||me===!0){t.activeTexture(s.TEXTURE0+J);const Ze=Dt.getPrimaries(Dt.workingColorSpace),De=A.colorSpace===ds?null:Dt.getPrimaries(A.colorSpace),Je=A.colorSpace===ds||Ze===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);const Ke=A.isCompressedTexture||A.image[0].isCompressedTexture,Se=A.image[0]&&A.image[0].isDataTexture,Re=[];for(let xe=0;xe<6;xe++)!Ke&&!Se?Re[xe]=M(A.image[xe],!0,a.maxCubemapSize):Re[xe]=Se?A.image[xe].image:A.image[xe],Re[xe]=He(A,Re[xe]);const ot=Re[0],nt=o.convert(A.format,A.colorSpace),Oe=o.convert(A.type),lt=C(A.internalFormat,nt,Oe,A.colorSpace),G=A.isVideoTexture!==!0,Le=de.__version===void 0||me===!0,be=ge.dataReady;let Ce=L(A,ot);re(s.TEXTURE_CUBE_MAP,A);let Ee;if(Ke){G&&Le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,lt,ot.width,ot.height);for(let xe=0;xe<6;xe++){Ee=Re[xe].mipmaps;for(let Ge=0;Ge<Ee.length;Ge++){const ft=Ee[Ge];A.format!==Gi?nt!==null?G?be&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ge,0,0,ft.width,ft.height,nt,ft.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ge,lt,ft.width,ft.height,0,ft.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ge,0,0,ft.width,ft.height,nt,Oe,ft.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ge,lt,ft.width,ft.height,0,nt,Oe,ft.data)}}}else{if(Ee=A.mipmaps,G&&Le){Ee.length>0&&Ce++;const xe=ct(Re[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,lt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Se){G?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Re[xe].width,Re[xe].height,nt,Oe,Re[xe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,lt,Re[xe].width,Re[xe].height,0,nt,Oe,Re[xe].data);for(let Ge=0;Ge<Ee.length;Ge++){const Ut=Ee[Ge].image[xe].image;G?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ge+1,0,0,Ut.width,Ut.height,nt,Oe,Ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ge+1,lt,Ut.width,Ut.height,0,nt,Oe,Ut.data)}}else{G?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,nt,Oe,Re[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,lt,nt,Oe,Re[xe]);for(let Ge=0;Ge<Ee.length;Ge++){const ft=Ee[Ge];G?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ge+1,0,0,nt,Oe,ft.image[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ge+1,lt,nt,Oe,ft.image[xe])}}}_(A)&&v(s.TEXTURE_CUBE_MAP),de.__version=ge.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function ce(F,A,J,me,ge,de){const Ze=o.convert(J.format,J.colorSpace),De=o.convert(J.type),Je=C(J.internalFormat,Ze,De,J.colorSpace),Ke=n.get(A),Se=n.get(J);if(Se.__renderTarget=A,!Ke.__hasExternalTextures){const Re=Math.max(1,A.width>>de),ot=Math.max(1,A.height>>de);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,de,Je,Re,ot,A.depth,0,Ze,De,null):t.texImage2D(ge,de,Je,Re,ot,0,Ze,De,null)}t.bindFramebuffer(s.FRAMEBUFFER,F),Be(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ge,Se.__webglTexture,0,Tt(A)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,ge,Se.__webglTexture,de),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(F,A,J){if(s.bindRenderbuffer(s.RENDERBUFFER,F),A.depthBuffer){const me=A.depthTexture,ge=me&&me.isDepthTexture?me.type:null,de=N(A.stencilBuffer,ge),Ze=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=Tt(A);Be(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,De,de,A.width,A.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,De,de,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,de,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ze,s.RENDERBUFFER,F)}else{const me=A.textures;for(let ge=0;ge<me.length;ge++){const de=me[ge],Ze=o.convert(de.format,de.colorSpace),De=o.convert(de.type),Je=C(de.internalFormat,Ze,De,de.colorSpace),Ke=Tt(A);J&&Be(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,Je,A.width,A.height):Be(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ke,Je,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Je,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(F,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=n.get(A.depthTexture);me.__renderTarget=A,(!me.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),se(A.depthTexture,0);const ge=me.__webglTexture,de=Tt(A);if(A.depthTexture.format===Tl)Be(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0);else if(A.depthTexture.format===bl)Be(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function qe(F){const A=n.get(F),J=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){const me=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),me){const ge=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,me.removeEventListener("dispose",ge)};me.addEventListener("dispose",ge),A.__depthDisposeCallback=ge}A.__boundDepthTexture=me}if(F.depthTexture&&!A.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const me=F.texture.mipmaps;me&&me.length>0?we(A.__webglFramebuffer[0],F):we(A.__webglFramebuffer,F)}else if(J){A.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[me]),A.__webglDepthbuffer[me]===void 0)A.__webglDepthbuffer[me]=s.createRenderbuffer(),ve(A.__webglDepthbuffer[me],F,!1);else{const ge=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=A.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,de)}}else{const me=F.texture.mipmaps;if(me&&me.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),ve(A.__webglDepthbuffer,F,!1);else{const ge=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,de)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(F,A,J){const me=n.get(F);A!==void 0&&ce(me.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&qe(F)}function $e(F){const A=F.texture,J=n.get(F),me=n.get(A);F.addEventListener("dispose",U);const ge=F.textures,de=F.isWebGLCubeRenderTarget===!0,Ze=ge.length>1;if(Ze||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=A.version,u.memory.textures++),de){J.__webglFramebuffer=[];for(let De=0;De<6;De++)if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[De]=[];for(let Je=0;Je<A.mipmaps.length;Je++)J.__webglFramebuffer[De][Je]=s.createFramebuffer()}else J.__webglFramebuffer[De]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let De=0;De<A.mipmaps.length;De++)J.__webglFramebuffer[De]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Ze)for(let De=0,Je=ge.length;De<Je;De++){const Ke=n.get(ge[De]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=s.createTexture(),u.memory.textures++)}if(F.samples>0&&Be(F)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let De=0;De<ge.length;De++){const Je=ge[De];J.__webglColorRenderbuffer[De]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[De]);const Ke=o.convert(Je.format,Je.colorSpace),Se=o.convert(Je.type),Re=C(Je.internalFormat,Ke,Se,Je.colorSpace,F.isXRRenderTarget===!0),ot=Tt(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,Re,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,J.__webglColorRenderbuffer[De])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),ve(J.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),re(s.TEXTURE_CUBE_MAP,A);for(let De=0;De<6;De++)if(A.mipmaps&&A.mipmaps.length>0)for(let Je=0;Je<A.mipmaps.length;Je++)ce(J.__webglFramebuffer[De][Je],F,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,Je);else ce(J.__webglFramebuffer[De],F,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);_(A)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ze){for(let De=0,Je=ge.length;De<Je;De++){const Ke=ge[De],Se=n.get(Ke);let Re=s.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Re=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Re,Se.__webglTexture),re(Re,Ke),ce(J.__webglFramebuffer,F,Ke,s.COLOR_ATTACHMENT0+De,Re,0),_(Ke)&&v(Re)}t.unbindTexture()}else{let De=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(De=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(De,me.__webglTexture),re(De,A),A.mipmaps&&A.mipmaps.length>0)for(let Je=0;Je<A.mipmaps.length;Je++)ce(J.__webglFramebuffer[Je],F,A,s.COLOR_ATTACHMENT0,De,Je);else ce(J.__webglFramebuffer,F,A,s.COLOR_ATTACHMENT0,De,0);_(A)&&v(De),t.unbindTexture()}F.depthBuffer&&qe(F)}function ht(F){const A=F.textures;for(let J=0,me=A.length;J<me;J++){const ge=A[J];if(_(ge)){const de=b(F),Ze=n.get(ge).__webglTexture;t.bindTexture(de,Ze),v(de),t.unbindTexture()}}}const V=[],rt=[];function pt(F){if(F.samples>0){if(Be(F)===!1){const A=F.textures,J=F.width,me=F.height;let ge=s.COLOR_BUFFER_BIT;const de=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ze=n.get(F),De=A.length>1;if(De)for(let Ke=0;Ke<A.length;Ke++)t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ke,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ke,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const Je=F.texture.mipmaps;Je&&Je.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let Ke=0;Ke<A.length;Ke++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),De){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[Ke]);const Se=n.get(A[Ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,J,me,0,0,J,me,ge,s.NEAREST),d===!0&&(V.length=0,rt.length=0,V.push(s.COLOR_ATTACHMENT0+Ke),F.depthBuffer&&F.resolveDepthBuffer===!1&&(V.push(de),rt.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,rt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,V))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),De)for(let Ke=0;Ke<A.length;Ke++){t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ke,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[Ke]);const Se=n.get(A[Ke]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ke,s.TEXTURE_2D,Se,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&d){const A=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Tt(F){return Math.min(a.maxSamples,F.samples)}function Be(F){const A=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function vt(F){const A=u.render.frame;p.get(F)!==A&&(p.set(F,A),F.update())}function He(F,A){const J=F.colorSpace,me=F.format,ge=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||J!==ho&&J!==ds&&(Dt.getTransfer(J)===Ft?(me!==Gi||ge!==Lr)&&xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rn("WebGLTextures: Unsupported texture color space:",J)),A}function ct(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=q,this.resetTextureUnits=j,this.setTexture2D=se,this.setTexture2DArray=ae,this.setTexture3D=oe,this.setTextureCube=H,this.rebindTextures=wt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Be}function yC(s,e){function t(n,a=ds){let o;const u=Dt.getTransfer(a);if(n===Lr)return s.UNSIGNED_BYTE;if(n===qp)return s.UNSIGNED_SHORT_4_4_4_4;if(n===$p)return s.UNSIGNED_SHORT_5_5_5_1;if(n===_v)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===vv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===xv)return s.BYTE;if(n===gv)return s.SHORT;if(n===El)return s.UNSIGNED_SHORT;if(n===Xp)return s.INT;if(n===sa)return s.UNSIGNED_INT;if(n===br)return s.FLOAT;if(n===go)return s.HALF_FLOAT;if(n===yv)return s.ALPHA;if(n===Sv)return s.RGB;if(n===Gi)return s.RGBA;if(n===Tl)return s.DEPTH_COMPONENT;if(n===bl)return s.DEPTH_STENCIL;if(n===Mv)return s.RED;if(n===Yp)return s.RED_INTEGER;if(n===Kp)return s.RG;if(n===Zp)return s.RG_INTEGER;if(n===Qp)return s.RGBA_INTEGER;if(n===yc||n===Sc||n===Mc||n===Ec)if(u===Ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===yc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ec)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===yc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ec)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jh||n===Xh||n===qh||n===$h)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===jh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$h)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yh||n===Kh||n===Zh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Yh||n===Kh)return u===Ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Zh)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qh||n===Jh||n===ep||n===tp||n===np||n===ip||n===rp||n===sp||n===ap||n===op||n===lp||n===up||n===cp||n===fp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Qh)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jh)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ep)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tp)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===np)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ip)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rp)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sp)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ap)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===op)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lp)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===up)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cp)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fp)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dp||n===hp||n===pp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===dp)return u===Ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mp||n===xp||n===gp||n===_p)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===mp)return o.COMPRESSED_RED_RGTC1_EXT;if(n===xp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_p)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wl?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const SC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class EC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Fv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new rr({vertexShader:SC,fragmentShader:MC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ur(new Fl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wC extends _o{constructor(e,t){super();const n=this;let a=null,o=1,u=null,c="local-floor",d=1,h=null,p=null,m=null,g=null,y=null,E=null;const M=typeof XRWebGLBinding<"u",_=new EC,v={},b=t.getContextAttributes();let C=null,N=null;const L=[],P=[],U=new Ct;let k=null;const T=new Bi;T.viewport=new sn;const R=new Bi;R.viewport=new sn;const B=[T,R],j=new H3;let q=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let pe=L[ie];return pe===void 0&&(pe=new lh,L[ie]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ie){let pe=L[ie];return pe===void 0&&(pe=new lh,L[ie]=pe),pe.getGripSpace()},this.getHand=function(ie){let pe=L[ie];return pe===void 0&&(pe=new lh,L[ie]=pe),pe.getHandSpace()};function se(ie){const pe=P.indexOf(ie.inputSource);if(pe===-1)return;const ce=L[pe];ce!==void 0&&(ce.update(ie.inputSource,ie.frame,h||u),ce.dispatchEvent({type:ie.type,data:ie.inputSource}))}function ae(){a.removeEventListener("select",se),a.removeEventListener("selectstart",se),a.removeEventListener("selectend",se),a.removeEventListener("squeeze",se),a.removeEventListener("squeezestart",se),a.removeEventListener("squeezeend",se),a.removeEventListener("end",ae),a.removeEventListener("inputsourceschange",oe);for(let ie=0;ie<L.length;ie++){const pe=P[ie];pe!==null&&(P[ie]=null,L[ie].disconnect(pe))}q=null,ne=null,_.reset();for(const ie in v)delete v[ie];e.setRenderTarget(C),y=null,g=null,m=null,a=null,N=null,Fe.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){o=ie,n.isPresenting===!0&&xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){c=ie,n.isPresenting===!0&&xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(ie){h=ie},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return m===null&&M&&(m=new XRWebGLBinding(a,t)),m},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(ie){if(a=ie,a!==null){if(C=e.getRenderTarget(),a.addEventListener("select",se),a.addEventListener("selectstart",se),a.addEventListener("selectend",se),a.addEventListener("squeeze",se),a.addEventListener("squeezestart",se),a.addEventListener("squeezeend",se),a.addEventListener("end",ae),a.addEventListener("inputsourceschange",oe),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(U),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,ve=null,we=null;b.depth&&(we=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=b.stencil?bl:Tl,ve=b.stencil?wl:sa);const qe={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:o};m=this.getBinding(),g=m.createProjectionLayer(qe),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new aa(g.textureWidth,g.textureHeight,{format:Gi,type:Lr,depthTexture:new Uv(g.textureWidth,g.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ce={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(a,t,ce),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new aa(y.framebufferWidth,y.framebufferHeight,{format:Gi,type:Lr,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await a.requestReferenceSpace(c),Fe.setContext(a),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function oe(ie){for(let pe=0;pe<ie.removed.length;pe++){const ce=ie.removed[pe],ve=P.indexOf(ce);ve>=0&&(P[ve]=null,L[ve].disconnect(ce))}for(let pe=0;pe<ie.added.length;pe++){const ce=ie.added[pe];let ve=P.indexOf(ce);if(ve===-1){for(let qe=0;qe<L.length;qe++)if(qe>=P.length){P.push(ce),ve=qe;break}else if(P[qe]===null){P[qe]=ce,ve=qe;break}if(ve===-1)break}const we=L[ve];we&&we.connect(ce)}}const H=new he,ue=new he;function te(ie,pe,ce){H.setFromMatrixPosition(pe.matrixWorld),ue.setFromMatrixPosition(ce.matrixWorld);const ve=H.distanceTo(ue),we=pe.projectionMatrix.elements,qe=ce.projectionMatrix.elements,wt=we[14]/(we[10]-1),$e=we[14]/(we[10]+1),ht=(we[9]+1)/we[5],V=(we[9]-1)/we[5],rt=(we[8]-1)/we[0],pt=(qe[8]+1)/qe[0],Tt=wt*rt,Be=wt*pt,vt=ve/(-rt+pt),He=vt*-rt;if(pe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(He),ie.translateZ(vt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),we[10]===-1)ie.projectionMatrix.copy(pe.projectionMatrix),ie.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const ct=wt+vt,F=$e+vt,A=Tt-He,J=Be+(ve-He),me=ht*$e/F*ct,ge=V*$e/F*ct;ie.projectionMatrix.makePerspective(A,J,me,ge,ct,F),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function z(ie,pe){pe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(pe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(a===null)return;let pe=ie.near,ce=ie.far;_.texture!==null&&(_.depthNear>0&&(pe=_.depthNear),_.depthFar>0&&(ce=_.depthFar)),j.near=R.near=T.near=pe,j.far=R.far=T.far=ce,(q!==j.near||ne!==j.far)&&(a.updateRenderState({depthNear:j.near,depthFar:j.far}),q=j.near,ne=j.far),j.layers.mask=ie.layers.mask|6,T.layers.mask=j.layers.mask&3,R.layers.mask=j.layers.mask&5;const ve=ie.parent,we=j.cameras;z(j,ve);for(let qe=0;qe<we.length;qe++)z(we[qe],ve);we.length===2?te(j,T,R):j.projectionMatrix.copy(T.projectionMatrix),re(ie,j,ve)};function re(ie,pe,ce){ce===null?ie.matrix.copy(pe.matrixWorld):(ie.matrix.copy(ce.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(pe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(pe.projectionMatrix),ie.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=vp*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&y===null))return d},this.setFoveation=function(ie){d=ie,g!==null&&(g.fixedFoveation=ie),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ie)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(j)},this.getCameraTexture=function(ie){return v[ie]};let Ne=null;function Pe(ie,pe){if(p=pe.getViewerPose(h||u),E=pe,p!==null){const ce=p.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let ve=!1;ce.length!==j.cameras.length&&(j.cameras.length=0,ve=!0);for(let $e=0;$e<ce.length;$e++){const ht=ce[$e];let V=null;if(y!==null)V=y.getViewport(ht);else{const pt=m.getViewSubImage(g,ht);V=pt.viewport,$e===0&&(e.setRenderTargetTextures(N,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(N))}let rt=B[$e];rt===void 0&&(rt=new Bi,rt.layers.enable($e),rt.viewport=new sn,B[$e]=rt),rt.matrix.fromArray(ht.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(ht.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(V.x,V.y,V.width,V.height),$e===0&&(j.matrix.copy(rt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),ve===!0&&j.cameras.push(rt)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&M){m=n.getBinding();const $e=m.getDepthInformation(ce[0]);$e&&$e.isValid&&$e.texture&&_.init($e,a.renderState)}if(we&&we.includes("camera-access")&&M){e.state.unbindTexture(),m=n.getBinding();for(let $e=0;$e<ce.length;$e++){const ht=ce[$e].camera;if(ht){let V=v[ht];V||(V=new Fv,v[ht]=V);const rt=m.getCameraImage(ht);V.sourceTexture=rt}}}}for(let ce=0;ce<L.length;ce++){const ve=P[ce],we=L[ce];ve!==null&&we!==void 0&&we.update(ve,pe,h||u)}Ne&&Ne(ie,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),E=null}const Fe=new kv;Fe.setAnimationLoop(Pe),this.setAnimationLoop=function(ie){Ne=ie},this.dispose=function(){}}}const js=new Ir,TC=new pn;function bC(s,e){function t(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function n(_,v){v.color.getRGB(_.fogColor.value,Dv(s)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function a(_,v,b,C,N){v.isMeshBasicMaterial||v.isMeshLambertMaterial?o(_,v):v.isMeshToonMaterial?(o(_,v),m(_,v)):v.isMeshPhongMaterial?(o(_,v),p(_,v)):v.isMeshStandardMaterial?(o(_,v),g(_,v),v.isMeshPhysicalMaterial&&y(_,v,N)):v.isMeshMatcapMaterial?(o(_,v),E(_,v)):v.isMeshDepthMaterial?o(_,v):v.isMeshDistanceMaterial?(o(_,v),M(_,v)):v.isMeshNormalMaterial?o(_,v):v.isLineBasicMaterial?(u(_,v),v.isLineDashedMaterial&&c(_,v)):v.isPointsMaterial?d(_,v,b,C):v.isSpriteMaterial?h(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function o(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,t(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,t(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===Jn&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,t(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===Jn&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,t(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,t(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const b=e.get(v),C=b.envMap,N=b.envMapRotation;C&&(_.envMap.value=C,js.copy(N),js.x*=-1,js.y*=-1,js.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),_.envMapRotation.value.setFromMatrix4(TC.makeRotationFromEuler(js)),_.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,_.aoMapTransform))}function u(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,t(v.map,_.mapTransform))}function c(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function d(_,v,b,C){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*b,_.scale.value=C*.5,v.map&&(_.map.value=v.map,t(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function h(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,t(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function p(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function m(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function g(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function y(_,v,b){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Jn&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,_.specularIntensityMapTransform))}function E(_,v){v.matcap&&(_.matcap.value=v.matcap)}function M(_,v){const b=e.get(v).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function CC(s,e,t,n){let a={},o={},u=[];const c=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(b,C){const N=C.program;n.uniformBlockBinding(b,N)}function h(b,C){let N=a[b.id];N===void 0&&(E(b),N=p(b),a[b.id]=N,b.addEventListener("dispose",_));const L=C.program;n.updateUBOMapping(b,L);const P=e.render.frame;o[b.id]!==P&&(g(b),o[b.id]=P)}function p(b){const C=m();b.__bindingPointIndex=C;const N=s.createBuffer(),L=b.__size,P=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,L,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,N),N}function m(){for(let b=0;b<c;b++)if(u.indexOf(b)===-1)return u.push(b),b;return rn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const C=a[b.id],N=b.uniforms,L=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let P=0,U=N.length;P<U;P++){const k=Array.isArray(N[P])?N[P]:[N[P]];for(let T=0,R=k.length;T<R;T++){const B=k[T];if(y(B,P,T,L)===!0){const j=B.__offset,q=Array.isArray(B.value)?B.value:[B.value];let ne=0;for(let se=0;se<q.length;se++){const ae=q[se],oe=M(ae);typeof ae=="number"||typeof ae=="boolean"?(B.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,j+ne,B.__data)):ae.isMatrix3?(B.__data[0]=ae.elements[0],B.__data[1]=ae.elements[1],B.__data[2]=ae.elements[2],B.__data[3]=0,B.__data[4]=ae.elements[3],B.__data[5]=ae.elements[4],B.__data[6]=ae.elements[5],B.__data[7]=0,B.__data[8]=ae.elements[6],B.__data[9]=ae.elements[7],B.__data[10]=ae.elements[8],B.__data[11]=0):(ae.toArray(B.__data,ne),ne+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,j,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(b,C,N,L){const P=b.value,U=C+"_"+N;if(L[U]===void 0)return typeof P=="number"||typeof P=="boolean"?L[U]=P:L[U]=P.clone(),!0;{const k=L[U];if(typeof P=="number"||typeof P=="boolean"){if(k!==P)return L[U]=P,!0}else if(k.equals(P)===!1)return k.copy(P),!0}return!1}function E(b){const C=b.uniforms;let N=0;const L=16;for(let U=0,k=C.length;U<k;U++){const T=Array.isArray(C[U])?C[U]:[C[U]];for(let R=0,B=T.length;R<B;R++){const j=T[R],q=Array.isArray(j.value)?j.value:[j.value];for(let ne=0,se=q.length;ne<se;ne++){const ae=q[ne],oe=M(ae),H=N%L,ue=H%oe.boundary,te=H+ue;N+=ue,te!==0&&L-te<oe.storage&&(N+=L-te),j.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=N,N+=oe.storage}}}const P=N%L;return P>0&&(N+=L-P),b.__size=N,b.__cache={},this}function M(b){const C={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(C.boundary=4,C.storage=4):b.isVector2?(C.boundary=8,C.storage=8):b.isVector3||b.isColor?(C.boundary=16,C.storage=12):b.isVector4?(C.boundary=16,C.storage=16):b.isMatrix3?(C.boundary=48,C.storage=48):b.isMatrix4?(C.boundary=64,C.storage=64):b.isTexture?xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):xt("WebGLRenderer: Unsupported uniform value type.",b),C}function _(b){const C=b.target;C.removeEventListener("dispose",_);const N=u.indexOf(C.__bindingPointIndex);u.splice(N,1),s.deleteBuffer(a[C.id]),delete a[C.id],delete o[C.id]}function v(){for(const b in a)s.deleteBuffer(a[b]);u=[],a={},o={}}return{bind:d,update:h,dispose:v}}const AC=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let yr=null;function RC(){return yr===null&&(yr=new F3(AC,32,32,Kp,go),yr.minFilter=Ri,yr.magFilter=Ri,yr.wrapS=Tr,yr.wrapT=Tr,yr.generateMipmaps=!1,yr.needsUpdate=!0),yr}class PC{constructor(e={}){const{canvas:t=o3(),context:n=null,depth:a=!0,stencil:o=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=u;const E=new Set([Qp,Zp,Yp]),M=new Set([Lr,sa,El,wl,qp,$p]),_=new Uint32Array(4),v=new Int32Array(4);let b=null,C=null;const N=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let U=!1;this._outputColorSpace=ci;let k=0,T=0,R=null,B=-1,j=null;const q=new sn,ne=new sn;let se=null;const ae=new Ot(0);let oe=0,H=t.width,ue=t.height,te=1,z=null,re=null;const Ne=new sn(0,0,H,ue),Pe=new sn(0,0,H,ue);let Fe=!1;const ie=new Iv;let pe=!1,ce=!1;const ve=new pn,we=new he,qe=new sn,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function ht(){return R===null?te:1}let V=n;function rt(D,$){return t.getContext(D,$)}try{const D={alpha:!0,depth:a,stencil:o,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jp}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",Ge,!1),V===null){const $="webgl2";if(V=rt($,D),V===null)throw rt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw D("WebGLRenderer: "+D.message),D}let pt,Tt,Be,vt,He,ct,F,A,J,me,ge,de,Ze,De,Je,Ke,Se,Re,ot,nt,Oe,lt,G,Le;function be(){pt=new kb(V),pt.init(),lt=new yC(V,pt),Tt=new Rb(V,pt,e,lt),Be=new _C(V,pt),Tt.reversedDepthBuffer&&g&&Be.buffers.depth.setReversed(!0),vt=new Vb(V),He=new sC,ct=new vC(V,pt,Be,He,Tt,lt,vt),F=new Db(P),A=new Ob(P),J=new j3(V),G=new Cb(V,J),me=new Bb(V,J,vt,G),ge=new Gb(V,me,J,vt),ot=new Hb(V,Tt,ct),Ke=new Pb(He),de=new rC(P,F,A,pt,Tt,G,Ke),Ze=new bC(P,He),De=new oC,Je=new hC(pt),Re=new bb(P,F,A,Be,ge,y,d),Se=new xC(P,ge,Tt),Le=new CC(V,vt,Tt,Be),nt=new Ab(V,pt,vt),Oe=new zb(V,pt,vt),vt.programs=de.programs,P.capabilities=Tt,P.extensions=pt,P.properties=He,P.renderLists=De,P.shadowMap=Se,P.state=Be,P.info=vt}be();const Ce=new wC(P,V);this.xr=Ce,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const D=pt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=pt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(D){D!==void 0&&(te=D,this.setSize(H,ue,!1))},this.getSize=function(D){return D.set(H,ue)},this.setSize=function(D,$,Q=!0){if(Ce.isPresenting){xt("WebGLRenderer: Can't change size while VR device is presenting.");return}H=D,ue=$,t.width=Math.floor(D*te),t.height=Math.floor($*te),Q===!0&&(t.style.width=D+"px",t.style.height=$+"px"),this.setViewport(0,0,D,$)},this.getDrawingBufferSize=function(D){return D.set(H*te,ue*te).floor()},this.setDrawingBufferSize=function(D,$,Q){H=D,ue=$,te=Q,t.width=Math.floor(D*Q),t.height=Math.floor($*Q),this.setViewport(0,0,D,$)},this.getCurrentViewport=function(D){return D.copy(q)},this.getViewport=function(D){return D.copy(Ne)},this.setViewport=function(D,$,Q,fe){D.isVector4?Ne.set(D.x,D.y,D.z,D.w):Ne.set(D,$,Q,fe),Be.viewport(q.copy(Ne).multiplyScalar(te).round())},this.getScissor=function(D){return D.copy(Pe)},this.setScissor=function(D,$,Q,fe){D.isVector4?Pe.set(D.x,D.y,D.z,D.w):Pe.set(D,$,Q,fe),Be.scissor(ne.copy(Pe).multiplyScalar(te).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(D){Be.setScissorTest(Fe=D)},this.setOpaqueSort=function(D){z=D},this.setTransparentSort=function(D){re=D},this.getClearColor=function(D){return D.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(D=!0,$=!0,Q=!0){let fe=0;if(D){let Y=!1;if(R!==null){const Ae=R.texture.format;Y=E.has(Ae)}if(Y){const Ae=R.texture.type,Ie=M.has(Ae),je=Re.getClearColor(),ze=Re.getClearAlpha(),it=je.r,Qe=je.g,tt=je.b;Ie?(_[0]=it,_[1]=Qe,_[2]=tt,_[3]=ze,V.clearBufferuiv(V.COLOR,0,_)):(v[0]=it,v[1]=Qe,v[2]=tt,v[3]=ze,V.clearBufferiv(V.COLOR,0,v))}else fe|=V.COLOR_BUFFER_BIT}$&&(fe|=V.DEPTH_BUFFER_BIT),Q&&(fe|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",Ge,!1),Re.dispose(),De.dispose(),Je.dispose(),He.dispose(),F.dispose(),A.dispose(),ge.dispose(),G.dispose(),Le.dispose(),de.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Or),Ce.removeEventListener("sessionend",Ol),ni.stop()};function Ee(D){D.preventDefault(),lg("WebGLRenderer: Context Lost."),U=!0}function xe(){lg("WebGLRenderer: Context Restored."),U=!1;const D=vt.autoReset,$=Se.enabled,Q=Se.autoUpdate,fe=Se.needsUpdate,Y=Se.type;be(),vt.autoReset=D,Se.enabled=$,Se.autoUpdate=Q,Se.needsUpdate=fe,Se.type=Y}function Ge(D){rn("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ft(D){const $=D.target;$.removeEventListener("dispose",ft),Ut($)}function Ut(D){At(D),He.remove(D)}function At(D){const $=He.get(D).programs;$!==void 0&&($.forEach(function(Q){de.releaseProgram(Q)}),D.isShaderMaterial&&de.releaseShaderCache(D))}this.renderBufferDirect=function(D,$,Q,fe,Y,Ae){$===null&&($=wt);const Ie=Y.isMesh&&Y.matrixWorld.determinant()<0,je=Bl(D,$,Q,fe,Y);Be.setMaterial(fe,Ie);let ze=Q.index,it=1;if(fe.wireframe===!0){if(ze=me.getWireframeAttribute(Q),ze===void 0)return;it=2}const Qe=Q.drawRange,tt=Q.attributes.position;let ut=Qe.start*it,Nt=(Qe.start+Qe.count)*it;Ae!==null&&(ut=Math.max(ut,Ae.start*it),Nt=Math.min(Nt,(Ae.start+Ae.count)*it)),ze!==null?(ut=Math.max(ut,0),Nt=Math.min(Nt,ze.count)):tt!=null&&(ut=Math.max(ut,0),Nt=Math.min(Nt,tt.count));const Wt=Nt-ut;if(Wt<0||Wt===1/0)return;G.setup(Y,fe,je,Q,ze);let jt,Rt=nt;if(ze!==null&&(jt=J.get(ze),Rt=Oe,Rt.setIndex(jt)),Y.isMesh)fe.wireframe===!0?(Be.setLineWidth(fe.wireframeLinewidth*ht()),Rt.setMode(V.LINES)):Rt.setMode(V.TRIANGLES);else if(Y.isLine){let et=fe.linewidth;et===void 0&&(et=1),Be.setLineWidth(et*ht()),Y.isLineSegments?Rt.setMode(V.LINES):Y.isLineLoop?Rt.setMode(V.LINE_LOOP):Rt.setMode(V.LINE_STRIP)}else Y.isPoints?Rt.setMode(V.POINTS):Y.isSprite&&Rt.setMode(V.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Cl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))Rt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const et=Y._multiDrawStarts,It=Y._multiDrawCounts,St=Y._multiDrawCount,Un=ze?J.get(ze).bytesPerElement:1,Br=He.get(fe).currentProgram.getUniforms();for(let En=0;En<St;En++)Br.setValue(V,"_gl_DrawID",En),Rt.render(et[En]/Un,It[En])}else if(Y.isInstancedMesh)Rt.renderInstances(ut,Wt,Y.count);else if(Q.isInstancedBufferGeometry){const et=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,It=Math.min(Q.instanceCount,et);Rt.renderInstances(ut,Wt,It)}else Rt.render(ut,Wt)};function ti(D,$,Q){D.transparent===!0&&D.side===wr&&D.forceSinglePass===!1?(D.side=Jn,D.needsUpdate=!0,fa(D,$,Q),D.side=Ms,D.needsUpdate=!0,fa(D,$,Q),D.side=wr):fa(D,$,Q)}this.compile=function(D,$,Q=null){Q===null&&(Q=D),C=Je.get(Q),C.init($),L.push(C),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(C.pushLight(Y),Y.castShadow&&C.pushShadow(Y))}),D!==Q&&D.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(C.pushLight(Y),Y.castShadow&&C.pushShadow(Y))}),C.setupLights();const fe=new Set;return D.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ae=Y.material;if(Ae)if(Array.isArray(Ae))for(let Ie=0;Ie<Ae.length;Ie++){const je=Ae[Ie];ti(je,Q,Y),fe.add(je)}else ti(Ae,Q,Y),fe.add(Ae)}),C=L.pop(),fe},this.compileAsync=function(D,$,Q=null){const fe=this.compile(D,$,Q);return new Promise(Y=>{function Ae(){if(fe.forEach(function(Ie){He.get(Ie).currentProgram.isReady()&&fe.delete(Ie)}),fe.size===0){Y(D);return}setTimeout(Ae,10)}pt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Mn=null;function yo(D){Mn&&Mn(D)}function Or(){ni.stop()}function Ol(){ni.start()}const ni=new kv;ni.setAnimationLoop(yo),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(D){Mn=D,Ce.setAnimationLoop(D),D===null?ni.stop():ni.start()},Ce.addEventListener("sessionstart",Or),Ce.addEventListener("sessionend",Ol),this.render=function(D,$){if($!==void 0&&$.isCamera!==!0){rn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera($),$=Ce.getCamera()),D.isScene===!0&&D.onBeforeRender(P,D,$,R),C=Je.get(D,L.length),C.init($),L.push(C),ve.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ie.setFromProjectionMatrix(ve,tr,$.reversedDepth),ce=this.localClippingEnabled,pe=Ke.init(this.clippingPlanes,ce),b=De.get(D,N.length),b.init(),N.push(b),Ce.enabled===!0&&Ce.isPresenting===!0){const Ae=P.xr.getDepthSensingMesh();Ae!==null&&kr(Ae,$,-1/0,P.sortObjects)}kr(D,$,0,P.sortObjects),b.finish(),P.sortObjects===!0&&b.sort(z,re),$e=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,$e&&Re.addToRenderList(b,D),this.info.render.frame++,pe===!0&&Ke.beginShadows();const Q=C.state.shadowsArray;Se.render(Q,D,$),pe===!0&&Ke.endShadows(),this.info.autoReset===!0&&this.info.reset();const fe=b.opaque,Y=b.transmissive;if(C.setupLights(),$.isArrayCamera){const Ae=$.cameras;if(Y.length>0)for(let Ie=0,je=Ae.length;Ie<je;Ie++){const ze=Ae[Ie];ua(fe,Y,D,ze)}$e&&Re.render(D);for(let Ie=0,je=Ae.length;Ie<je;Ie++){const ze=Ae[Ie];Ts(b,D,ze,ze.viewport)}}else Y.length>0&&ua(fe,Y,D,$),$e&&Re.render(D),Ts(b,D,$);R!==null&&T===0&&(ct.updateMultisampleRenderTarget(R),ct.updateRenderTargetMipmap(R)),D.isScene===!0&&D.onAfterRender(P,D,$),G.resetDefaultState(),B=-1,j=null,L.pop(),L.length>0?(C=L[L.length-1],pe===!0&&Ke.setGlobalState(P.clippingPlanes,C.state.camera)):C=null,N.pop(),N.length>0?b=N[N.length-1]:b=null};function kr(D,$,Q,fe){if(D.visible===!1)return;if(D.layers.test($.layers)){if(D.isGroup)Q=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update($);else if(D.isLight)C.pushLight(D),D.castShadow&&C.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||ie.intersectsSprite(D)){fe&&qe.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ve);const Ie=ge.update(D),je=D.material;je.visible&&b.push(D,Ie,je,Q,qe.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||ie.intersectsObject(D))){const Ie=ge.update(D),je=D.material;if(fe&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),qe.copy(D.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),qe.copy(Ie.boundingSphere.center)),qe.applyMatrix4(D.matrixWorld).applyMatrix4(ve)),Array.isArray(je)){const ze=Ie.groups;for(let it=0,Qe=ze.length;it<Qe;it++){const tt=ze[it],ut=je[tt.materialIndex];ut&&ut.visible&&b.push(D,Ie,ut,Q,qe.z,tt)}}else je.visible&&b.push(D,Ie,je,Q,qe.z,null)}}const Ae=D.children;for(let Ie=0,je=Ae.length;Ie<je;Ie++)kr(Ae[Ie],$,Q,fe)}function Ts(D,$,Q,fe){const{opaque:Y,transmissive:Ae,transparent:Ie}=D;C.setupLightsView(Q),pe===!0&&Ke.setGlobalState(P.clippingPlanes,Q),fe&&Be.viewport(q.copy(fe)),Y.length>0&&ca(Y,$,Q),Ae.length>0&&ca(Ae,$,Q),Ie.length>0&&ca(Ie,$,Q),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function ua(D,$,Q,fe){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;C.state.transmissionRenderTarget[fe.id]===void 0&&(C.state.transmissionRenderTarget[fe.id]=new aa(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?go:Lr,minFilter:Zs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const Ae=C.state.transmissionRenderTarget[fe.id],Ie=fe.viewport||q;Ae.setSize(Ie.z*P.transmissionResolutionScale,Ie.w*P.transmissionResolutionScale);const je=P.getRenderTarget(),ze=P.getActiveCubeFace(),it=P.getActiveMipmapLevel();P.setRenderTarget(Ae),P.getClearColor(ae),oe=P.getClearAlpha(),oe<1&&P.setClearColor(16777215,.5),P.clear(),$e&&Re.render(Q);const Qe=P.toneMapping;P.toneMapping=vs;const tt=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),C.setupLightsView(fe),pe===!0&&Ke.setGlobalState(P.clippingPlanes,fe),ca(D,Q,fe),ct.updateMultisampleRenderTarget(Ae),ct.updateRenderTargetMipmap(Ae),pt.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let Nt=0,Wt=$.length;Nt<Wt;Nt++){const jt=$[Nt],{object:Rt,geometry:et,material:It,group:St}=jt;if(It.side===wr&&Rt.layers.test(fe.layers)){const Un=It.side;It.side=Jn,It.needsUpdate=!0,kl(Rt,Q,fe,et,It,St),It.side=Un,It.needsUpdate=!0,ut=!0}}ut===!0&&(ct.updateMultisampleRenderTarget(Ae),ct.updateRenderTargetMipmap(Ae))}P.setRenderTarget(je,ze,it),P.setClearColor(ae,oe),tt!==void 0&&(fe.viewport=tt),P.toneMapping=Qe}function ca(D,$,Q){const fe=$.isScene===!0?$.overrideMaterial:null;for(let Y=0,Ae=D.length;Y<Ae;Y++){const Ie=D[Y],{object:je,geometry:ze,group:it}=Ie;let Qe=Ie.material;Qe.allowOverride===!0&&fe!==null&&(Qe=fe),je.layers.test(Q.layers)&&kl(je,$,Q,ze,Qe,it)}}function kl(D,$,Q,fe,Y,Ae){D.onBeforeRender(P,$,Q,fe,Y,Ae),D.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),Y.onBeforeRender(P,$,Q,fe,D,Ae),Y.transparent===!0&&Y.side===wr&&Y.forceSinglePass===!1?(Y.side=Jn,Y.needsUpdate=!0,P.renderBufferDirect(Q,$,fe,Y,D,Ae),Y.side=Ms,Y.needsUpdate=!0,P.renderBufferDirect(Q,$,fe,Y,D,Ae),Y.side=wr):P.renderBufferDirect(Q,$,fe,Y,D,Ae),D.onAfterRender(P,$,Q,fe,Y,Ae)}function fa(D,$,Q){$.isScene!==!0&&($=wt);const fe=He.get(D),Y=C.state.lights,Ae=C.state.shadowsArray,Ie=Y.state.version,je=de.getParameters(D,Y.state,Ae,$,Q),ze=de.getProgramCacheKey(je);let it=fe.programs;fe.environment=D.isMeshStandardMaterial?$.environment:null,fe.fog=$.fog,fe.envMap=(D.isMeshStandardMaterial?A:F).get(D.envMap||fe.environment),fe.envMapRotation=fe.environment!==null&&D.envMap===null?$.environmentRotation:D.envMapRotation,it===void 0&&(D.addEventListener("dispose",ft),it=new Map,fe.programs=it);let Qe=it.get(ze);if(Qe!==void 0){if(fe.currentProgram===Qe&&fe.lightsStateVersion===Ie)return So(D,je),Qe}else je.uniforms=de.getUniforms(D),D.onBeforeCompile(je,P),Qe=de.acquireProgram(je,ze),it.set(ze,Qe),fe.uniforms=je.uniforms;const tt=fe.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(tt.clippingPlanes=Ke.uniform),So(D,je),fe.needsLights=zl(D),fe.lightsStateVersion=Ie,fe.needsLights&&(tt.ambientLightColor.value=Y.state.ambient,tt.lightProbe.value=Y.state.probe,tt.directionalLights.value=Y.state.directional,tt.directionalLightShadows.value=Y.state.directionalShadow,tt.spotLights.value=Y.state.spot,tt.spotLightShadows.value=Y.state.spotShadow,tt.rectAreaLights.value=Y.state.rectArea,tt.ltc_1.value=Y.state.rectAreaLTC1,tt.ltc_2.value=Y.state.rectAreaLTC2,tt.pointLights.value=Y.state.point,tt.pointLightShadows.value=Y.state.pointShadow,tt.hemisphereLights.value=Y.state.hemi,tt.directionalShadowMap.value=Y.state.directionalShadowMap,tt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,tt.spotShadowMap.value=Y.state.spotShadowMap,tt.spotLightMatrix.value=Y.state.spotLightMatrix,tt.spotLightMap.value=Y.state.spotLightMap,tt.pointShadowMap.value=Y.state.pointShadowMap,tt.pointShadowMatrix.value=Y.state.pointShadowMatrix),fe.currentProgram=Qe,fe.uniformsList=null,Qe}function ji(D){if(D.uniformsList===null){const $=D.currentProgram.getUniforms();D.uniformsList=wc.seqWithValue($.seq,D.uniforms)}return D.uniformsList}function So(D,$){const Q=He.get(D);Q.outputColorSpace=$.outputColorSpace,Q.batching=$.batching,Q.batchingColor=$.batchingColor,Q.instancing=$.instancing,Q.instancingColor=$.instancingColor,Q.instancingMorph=$.instancingMorph,Q.skinning=$.skinning,Q.morphTargets=$.morphTargets,Q.morphNormals=$.morphNormals,Q.morphColors=$.morphColors,Q.morphTargetsCount=$.morphTargetsCount,Q.numClippingPlanes=$.numClippingPlanes,Q.numIntersection=$.numClipIntersection,Q.vertexAlphas=$.vertexAlphas,Q.vertexTangents=$.vertexTangents,Q.toneMapping=$.toneMapping}function Bl(D,$,Q,fe,Y){$.isScene!==!0&&($=wt),ct.resetTextureUnits();const Ae=$.fog,Ie=fe.isMeshStandardMaterial?$.environment:null,je=R===null?P.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ho,ze=(fe.isMeshStandardMaterial?A:F).get(fe.envMap||Ie),it=fe.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Qe=!!Q.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),tt=!!Q.morphAttributes.position,ut=!!Q.morphAttributes.normal,Nt=!!Q.morphAttributes.color;let Wt=vs;fe.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Wt=P.toneMapping);const jt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Rt=jt!==void 0?jt.length:0,et=He.get(fe),It=C.state.lights;if(pe===!0&&(ce===!0||D!==j)){const fn=D===j&&fe.id===B;Ke.setState(fe,D,fn)}let St=!1;fe.version===et.__version?(et.needsLights&&et.lightsStateVersion!==It.state.version||et.outputColorSpace!==je||Y.isBatchedMesh&&et.batching===!1||!Y.isBatchedMesh&&et.batching===!0||Y.isBatchedMesh&&et.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&et.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&et.instancing===!1||!Y.isInstancedMesh&&et.instancing===!0||Y.isSkinnedMesh&&et.skinning===!1||!Y.isSkinnedMesh&&et.skinning===!0||Y.isInstancedMesh&&et.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&et.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&et.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&et.instancingMorph===!1&&Y.morphTexture!==null||et.envMap!==ze||fe.fog===!0&&et.fog!==Ae||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ke.numPlanes||et.numIntersection!==Ke.numIntersection)||et.vertexAlphas!==it||et.vertexTangents!==Qe||et.morphTargets!==tt||et.morphNormals!==ut||et.morphColors!==Nt||et.toneMapping!==Wt||et.morphTargetsCount!==Rt)&&(St=!0):(St=!0,et.__version=fe.version);let Un=et.currentProgram;St===!0&&(Un=fa(fe,$,Y));let Br=!1,En=!1,zr=!1;const kt=Un.getUniforms(),an=et.uniforms;if(Be.useProgram(Un.program)&&(Br=!0,En=!0,zr=!0),fe.id!==B&&(B=fe.id,En=!0),Br||j!==D){Be.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),kt.setValue(V,"projectionMatrix",D.projectionMatrix),kt.setValue(V,"viewMatrix",D.matrixWorldInverse);const mt=kt.map.cameraPosition;mt!==void 0&&mt.setValue(V,we.setFromMatrixPosition(D.matrixWorld)),Tt.logarithmicDepthBuffer&&kt.setValue(V,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&kt.setValue(V,"isOrthographic",D.isOrthographicCamera===!0),j!==D&&(j=D,En=!0,zr=!0)}if(Y.isSkinnedMesh){kt.setOptional(V,Y,"bindMatrix"),kt.setOptional(V,Y,"bindMatrixInverse");const fn=Y.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),kt.setValue(V,"boneTexture",fn.boneTexture,ct))}Y.isBatchedMesh&&(kt.setOptional(V,Y,"batchingTexture"),kt.setValue(V,"batchingTexture",Y._matricesTexture,ct),kt.setOptional(V,Y,"batchingIdTexture"),kt.setValue(V,"batchingIdTexture",Y._indirectTexture,ct),kt.setOptional(V,Y,"batchingColorTexture"),Y._colorsTexture!==null&&kt.setValue(V,"batchingColorTexture",Y._colorsTexture,ct));const Vn=Q.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&ot.update(Y,Q,Un),(En||et.receiveShadow!==Y.receiveShadow)&&(et.receiveShadow=Y.receiveShadow,kt.setValue(V,"receiveShadow",Y.receiveShadow)),fe.isMeshGouraudMaterial&&fe.envMap!==null&&(an.envMap.value=ze,an.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),fe.isMeshStandardMaterial&&fe.envMap===null&&$.environment!==null&&(an.envMapIntensity.value=$.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=RC()),En&&(kt.setValue(V,"toneMappingExposure",P.toneMappingExposure),et.needsLights&&Xc(an,zr),Ae&&fe.fog===!0&&Ze.refreshFogUniforms(an,Ae),Ze.refreshMaterialUniforms(an,fe,te,ue,C.state.transmissionRenderTarget[D.id]),wc.upload(V,ji(et),an,ct)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(wc.upload(V,ji(et),an,ct),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&kt.setValue(V,"center",Y.center),kt.setValue(V,"modelViewMatrix",Y.modelViewMatrix),kt.setValue(V,"normalMatrix",Y.normalMatrix),kt.setValue(V,"modelMatrix",Y.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){const fn=fe.uniformsGroups;for(let mt=0,da=fn.length;mt<da;mt++){const Xi=fn[mt];Le.update(Xi,Un),Le.bind(Xi,Un)}}return Un}function Xc(D,$){D.ambientLightColor.needsUpdate=$,D.lightProbe.needsUpdate=$,D.directionalLights.needsUpdate=$,D.directionalLightShadows.needsUpdate=$,D.pointLights.needsUpdate=$,D.pointLightShadows.needsUpdate=$,D.spotLights.needsUpdate=$,D.spotLightShadows.needsUpdate=$,D.rectAreaLights.needsUpdate=$,D.hemisphereLights.needsUpdate=$}function zl(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(D,$,Q){const fe=He.get(D);fe.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,fe.__autoAllocateDepthBuffer===!1&&(fe.__useRenderToTexture=!1),He.get(D.texture).__webglTexture=$,He.get(D.depthTexture).__webglTexture=fe.__autoAllocateDepthBuffer?void 0:Q,fe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,$){const Q=He.get(D);Q.__webglFramebuffer=$,Q.__useDefaultFramebuffer=$===void 0};const Vl=V.createFramebuffer();this.setRenderTarget=function(D,$=0,Q=0){R=D,k=$,T=Q;let fe=!0,Y=null,Ae=!1,Ie=!1;if(D){const ze=He.get(D);if(ze.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(V.FRAMEBUFFER,null),fe=!1;else if(ze.__webglFramebuffer===void 0)ct.setupRenderTarget(D);else if(ze.__hasExternalTextures)ct.rebindTextures(D,He.get(D.texture).__webglTexture,He.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const tt=D.depthTexture;if(ze.__boundDepthTexture!==tt){if(tt!==null&&He.has(tt)&&(D.width!==tt.image.width||D.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(D)}}const it=D.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ie=!0);const Qe=He.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Qe[$])?Y=Qe[$][Q]:Y=Qe[$],Ae=!0):D.samples>0&&ct.useMultisampledRTT(D)===!1?Y=He.get(D).__webglMultisampledFramebuffer:Array.isArray(Qe)?Y=Qe[Q]:Y=Qe,q.copy(D.viewport),ne.copy(D.scissor),se=D.scissorTest}else q.copy(Ne).multiplyScalar(te).floor(),ne.copy(Pe).multiplyScalar(te).floor(),se=Fe;if(Q!==0&&(Y=Vl),Be.bindFramebuffer(V.FRAMEBUFFER,Y)&&fe&&Be.drawBuffers(D,Y),Be.viewport(q),Be.scissor(ne),Be.setScissorTest(se),Ae){const ze=He.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+$,ze.__webglTexture,Q)}else if(Ie){const ze=$;for(let it=0;it<D.textures.length;it++){const Qe=He.get(D.textures[it]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+it,Qe.__webglTexture,Q,ze)}}else if(D!==null&&Q!==0){const ze=He.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ze.__webglTexture,Q)}B=-1},this.readRenderTargetPixels=function(D,$,Q,fe,Y,Ae,Ie,je=0){if(!(D&&D.isWebGLRenderTarget)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=He.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ie!==void 0&&(ze=ze[Ie]),ze){Be.bindFramebuffer(V.FRAMEBUFFER,ze);try{const it=D.textures[je],Qe=it.format,tt=it.type;if(!Tt.textureFormatReadable(Qe)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(tt)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=D.width-fe&&Q>=0&&Q<=D.height-Y&&(D.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+je),V.readPixels($,Q,fe,Y,lt.convert(Qe),lt.convert(tt),Ae))}finally{const it=R!==null?He.get(R).__webglFramebuffer:null;Be.bindFramebuffer(V.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(D,$,Q,fe,Y,Ae,Ie,je=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=He.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ie!==void 0&&(ze=ze[Ie]),ze)if($>=0&&$<=D.width-fe&&Q>=0&&Q<=D.height-Y){Be.bindFramebuffer(V.FRAMEBUFFER,ze);const it=D.textures[je],Qe=it.format,tt=it.type;if(!Tt.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ut),V.bufferData(V.PIXEL_PACK_BUFFER,Ae.byteLength,V.STREAM_READ),D.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+je),V.readPixels($,Q,fe,Y,lt.convert(Qe),lt.convert(tt),0);const Nt=R!==null?He.get(R).__webglFramebuffer:null;Be.bindFramebuffer(V.FRAMEBUFFER,Nt);const Wt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await l3(V,Wt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ut),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ae),V.deleteBuffer(ut),V.deleteSync(Wt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,$=null,Q=0){const fe=Math.pow(2,-Q),Y=Math.floor(D.image.width*fe),Ae=Math.floor(D.image.height*fe),Ie=$!==null?$.x:0,je=$!==null?$.y:0;ct.setTexture2D(D,0),V.copyTexSubImage2D(V.TEXTURE_2D,Q,0,0,Ie,je,Y,Ae),Be.unbindTexture()};const Hl=V.createFramebuffer(),Gl=V.createFramebuffer();this.copyTextureToTexture=function(D,$,Q=null,fe=null,Y=0,Ae=null){Ae===null&&(Y!==0?(Cl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=Y,Y=0):Ae=0);let Ie,je,ze,it,Qe,tt,ut,Nt,Wt;const jt=D.isCompressedTexture?D.mipmaps[Ae]:D.image;if(Q!==null)Ie=Q.max.x-Q.min.x,je=Q.max.y-Q.min.y,ze=Q.isBox3?Q.max.z-Q.min.z:1,it=Q.min.x,Qe=Q.min.y,tt=Q.isBox3?Q.min.z:0;else{const Vn=Math.pow(2,-Y);Ie=Math.floor(jt.width*Vn),je=Math.floor(jt.height*Vn),D.isDataArrayTexture?ze=jt.depth:D.isData3DTexture?ze=Math.floor(jt.depth*Vn):ze=1,it=0,Qe=0,tt=0}fe!==null?(ut=fe.x,Nt=fe.y,Wt=fe.z):(ut=0,Nt=0,Wt=0);const Rt=lt.convert($.format),et=lt.convert($.type);let It;$.isData3DTexture?(ct.setTexture3D($,0),It=V.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ct.setTexture2DArray($,0),It=V.TEXTURE_2D_ARRAY):(ct.setTexture2D($,0),It=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,$.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,$.unpackAlignment);const St=V.getParameter(V.UNPACK_ROW_LENGTH),Un=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Br=V.getParameter(V.UNPACK_SKIP_PIXELS),En=V.getParameter(V.UNPACK_SKIP_ROWS),zr=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,jt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,jt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,it),V.pixelStorei(V.UNPACK_SKIP_ROWS,Qe),V.pixelStorei(V.UNPACK_SKIP_IMAGES,tt);const kt=D.isDataArrayTexture||D.isData3DTexture,an=$.isDataArrayTexture||$.isData3DTexture;if(D.isDepthTexture){const Vn=He.get(D),fn=He.get($),mt=He.get(Vn.__renderTarget),da=He.get(fn.__renderTarget);Be.bindFramebuffer(V.READ_FRAMEBUFFER,mt.__webglFramebuffer),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,da.__webglFramebuffer);for(let Xi=0;Xi<ze;Xi++)kt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,He.get(D).__webglTexture,Y,tt+Xi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,He.get($).__webglTexture,Ae,Wt+Xi)),V.blitFramebuffer(it,Qe,Ie,je,ut,Nt,Ie,je,V.DEPTH_BUFFER_BIT,V.NEAREST);Be.bindFramebuffer(V.READ_FRAMEBUFFER,null),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Y!==0||D.isRenderTargetTexture||He.has(D)){const Vn=He.get(D),fn=He.get($);Be.bindFramebuffer(V.READ_FRAMEBUFFER,Hl),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,Gl);for(let mt=0;mt<ze;mt++)kt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Vn.__webglTexture,Y,tt+mt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Vn.__webglTexture,Y),an?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,fn.__webglTexture,Ae,Wt+mt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,fn.__webglTexture,Ae),Y!==0?V.blitFramebuffer(it,Qe,Ie,je,ut,Nt,Ie,je,V.COLOR_BUFFER_BIT,V.NEAREST):an?V.copyTexSubImage3D(It,Ae,ut,Nt,Wt+mt,it,Qe,Ie,je):V.copyTexSubImage2D(It,Ae,ut,Nt,it,Qe,Ie,je);Be.bindFramebuffer(V.READ_FRAMEBUFFER,null),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else an?D.isDataTexture||D.isData3DTexture?V.texSubImage3D(It,Ae,ut,Nt,Wt,Ie,je,ze,Rt,et,jt.data):$.isCompressedArrayTexture?V.compressedTexSubImage3D(It,Ae,ut,Nt,Wt,Ie,je,ze,Rt,jt.data):V.texSubImage3D(It,Ae,ut,Nt,Wt,Ie,je,ze,Rt,et,jt):D.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ae,ut,Nt,Ie,je,Rt,et,jt.data):D.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ae,ut,Nt,jt.width,jt.height,Rt,jt.data):V.texSubImage2D(V.TEXTURE_2D,Ae,ut,Nt,Ie,je,Rt,et,jt);V.pixelStorei(V.UNPACK_ROW_LENGTH,St),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Un),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Br),V.pixelStorei(V.UNPACK_SKIP_ROWS,En),V.pixelStorei(V.UNPACK_SKIP_IMAGES,zr),Ae===0&&$.generateMipmaps&&V.generateMipmap(It),Be.unbindTexture()},this.initRenderTarget=function(D){He.get(D).__webglFramebuffer===void 0&&ct.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?ct.setTextureCube(D,0):D.isData3DTexture?ct.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ct.setTexture2DArray(D,0):ct.setTexture2D(D,0),Be.unbindTexture()},this.resetState=function(){k=0,T=0,R=null,Be.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Dt._getUnpackColorSpace()}}const Tc=8,DC=`
#define MAX_COLORS ${Tc}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer; // in NDC [-1,1]
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

    vec3 col = vec3(0.0);
    float a = 1.0;

    if (uColorCount > 0) {
      vec2 s = q;
      vec3 sumCol = vec3(0.0);
      float cover = 0.0;
      for (int i = 0; i < MAX_COLORS; ++i) {
            if (i >= uColorCount) break;
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3); // strong response across 0..1
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0); // allow >1 to amplify displacement
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float m = mix(m0, m1, kMix);
            float w = 1.0 - exp(-6.0 / exp(6.0 * m));
            sumCol += uColors[i] * w;
            cover = max(cover, w);
      }
      col = clamp(sumCol, 0.0, 1.0);
      a = uTransparent > 0 ? cover : 1.0;
    } else {
        vec2 s = q;
        for (int k = 0; k < 3; ++k) {
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3);
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float m = mix(m0, m1, kMix);
            col[k] = 1.0 - exp(-6.0 / exp(6.0 * m));
        }
        a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
    }

    if (uNoise > 0.0001) {
      float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
      col += (n - 0.5) * uNoise;
      col = clamp(col, 0.0, 1.0);
    }

    vec3 rgb = (uTransparent > 0) ? col * a : col;
    gl_FragColor = vec4(rgb, a);
}
`,NC=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;function LC({className:s,style:e,rotation:t=45,speed:n=.2,colors:a=[],transparent:o=!0,autoRotate:u=0,scale:c=1,frequency:d=1,warpStrength:h=1,mouseInfluence:p=1,parallax:m=.5,noise:g=.1}){const y=K.useRef(null),E=K.useRef(null),M=K.useRef(null),_=K.useRef(null),v=K.useRef(null),b=K.useRef(t),C=K.useRef(u),N=K.useRef(new Ct(0,0)),L=K.useRef(new Ct(0,0)),P=K.useRef(8);return K.useEffect(()=>{const U=y.current,k=new U3,T=new Ov(-1,1,1,-1,0,1),R=new Fl(2,2),B=Array.from({length:Tc},()=>new he(0,0,0)),j=new rr({vertexShader:NC,fragmentShader:DC,uniforms:{uCanvas:{value:new Ct(1,1)},uTime:{value:0},uSpeed:{value:n},uRot:{value:new Ct(1,0)},uColorCount:{value:0},uColors:{value:B},uTransparent:{value:o?1:0},uScale:{value:c},uFrequency:{value:d},uWarpStrength:{value:h},uPointer:{value:new Ct(0,0)},uMouseInfluence:{value:p},uParallax:{value:m},uNoise:{value:g}},premultipliedAlpha:!0,transparent:!0});_.current=j;const q=new Ur(R,j);k.add(q);const ne=new PC({antialias:!1,powerPreference:"high-performance",alpha:!0});E.current=ne,ne.outputColorSpace=ci,ne.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),ne.setClearColor(0,o?0:1),ne.domElement.style.width="100%",ne.domElement.style.height="100%",ne.domElement.style.display="block",U.appendChild(ne.domElement);const se=new G3,ae=()=>{const H=U.clientWidth||1,ue=U.clientHeight||1;ne.setSize(H,ue,!1),j.uniforms.uCanvas.value.set(H,ue)};if(ae(),"ResizeObserver"in window){const H=new ResizeObserver(ae);H.observe(U),v.current=H}else window.addEventListener("resize",ae);const oe=()=>{const H=se.getDelta(),ue=se.elapsedTime;j.uniforms.uTime.value=ue;const z=(b.current%360+C.current*ue)*Math.PI/180,re=Math.cos(z),Ne=Math.sin(z);j.uniforms.uRot.value.set(re,Ne);const Pe=L.current,Fe=N.current,ie=Math.min(1,H*P.current);Pe.lerp(Fe,ie),j.uniforms.uPointer.value.copy(Pe),ne.render(k,T),M.current=requestAnimationFrame(oe)};return M.current=requestAnimationFrame(oe),()=>{M.current!==null&&cancelAnimationFrame(M.current),v.current?v.current.disconnect():window.removeEventListener("resize",ae),R.dispose(),j.dispose(),ne.dispose(),ne.domElement&&ne.domElement.parentElement===U&&U.removeChild(ne.domElement)}},[]),K.useEffect(()=>{const U=_.current,k=E.current;if(!U)return;b.current=t,C.current=u,U.uniforms.uSpeed.value=n,U.uniforms.uScale.value=c,U.uniforms.uFrequency.value=d,U.uniforms.uWarpStrength.value=h,U.uniforms.uMouseInfluence.value=p,U.uniforms.uParallax.value=m,U.uniforms.uNoise.value=g;const T=B=>{const j=B.replace("#","").trim(),q=j.length===3?[parseInt(j[0]+j[0],16),parseInt(j[1]+j[1],16),parseInt(j[2]+j[2],16)]:[parseInt(j.slice(0,2),16),parseInt(j.slice(2,4),16),parseInt(j.slice(4,6),16)];return new he(q[0]/255,q[1]/255,q[2]/255)},R=(a||[]).filter(Boolean).slice(0,Tc).map(T);for(let B=0;B<Tc;B++){const j=U.uniforms.uColors.value[B];B<R.length?j.copy(R[B]):j.set(0,0,0)}U.uniforms.uColorCount.value=R.length,U.uniforms.uTransparent.value=o?1:0,k&&k.setClearColor(0,o?0:1)},[t,u,n,c,d,h,p,m,g,a,o]),K.useEffect(()=>{const U=_.current,k=y.current;if(!U||!k)return;const T=R=>{const B=k.getBoundingClientRect(),j=(R.clientX-B.left)/(B.width||1)*2-1,q=-((R.clientY-B.top)/(B.height||1)*2-1);N.current.set(j,q)};return k.addEventListener("pointermove",T),()=>{k.removeEventListener("pointermove",T)}},[]),I.jsx("div",{ref:y,className:`w-full h-full relative overflow-hidden ${s}`,style:e})}function IC(){return I.jsxs("section",{className:"relative h-screen overflow-hidden",children:[I.jsx("div",{className:"absolute inset-0",children:I.jsx(LC,{colors:["#ff0000","#ff0000ff","#ff0000ff"],rotation:0,speed:.27,scale:1.3,frequency:1,warpStrength:1,mouseInfluence:0,parallax:1.4,noise:.3,transparent:!1})}),I.jsx("div",{className:"relative z-10 h-full flex items-center",children:I.jsx("div",{className:"container mx-auto px-6",children:I.jsxs("div",{className:"max-w-3xl",children:[I.jsxs("div",{className:"mb-8",children:[I.jsx("h1",{className:"text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight",children:"Potência e elegância"}),I.jsxs("div",{className:"flex items-center space-x-4 mb-6",children:[I.jsx("span",{className:"text-red-500 text-2xl md:text-3xl font-bold tracking-wider",children:"SF-25"}),I.jsx("div",{className:"h-px bg-red-500 flex-1 max-w-24"})]})]}),I.jsxs("div",{className:"mb-8 space-y-4",children:[I.jsx("p",{className:"text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed",children:"Descubra a lenda que continua a fazer história na Fórmula 1"}),I.jsx("p",{className:"text-lg text-gray-300 max-w-xl",children:"Desde 1950, a Scuderia Ferrari representa a excelência, tradição e inovação no automobilismo mundial."})]}),I.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[I.jsx("button",{className:"bg-red-600 hover:bg-red-700 text-white px-8 py-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl",onClick:()=>pl("https://www.ferrari.com/en-EN/formula1/sf-25"),children:"Descubra"}),I.jsx("button",{className:"border border-white text-white hover:bg-white hover:text-black px-8 py-4 transition-all duration-300",onClick:()=>pl("https://www.youtube.com/watch?v=ZWKp63JTvgE"),children:"Assista ao Vídeo"})]})]})})}),I.jsx("div",{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce",children:I.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:I.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})}),I.jsx("div",{className:"absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block",children:I.jsxs("div",{className:"text-white space-y-8 text-right",children:[I.jsxs("div",{children:[I.jsx("div",{className:"text-3xl font-bold text-red-500",children:"16"}),I.jsx("div",{className:"text-sm uppercase tracking-wider",children:"Títulos de Construtores"})]}),I.jsxs("div",{children:[I.jsx("div",{className:"text-3xl font-bold text-red-500",children:"15"}),I.jsx("div",{className:"text-sm uppercase tracking-wider",children:"Títulos de Pilotos"})]}),I.jsxs("div",{children:[I.jsx("div",{className:"text-3xl font-bold text-red-500",children:"74"}),I.jsx("div",{className:"text-sm uppercase tracking-wider",children:"Anos de História"})]})]})})]})}const UC="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function Yg(s){const[e,t]=K.useState(!1),n=()=>{t(!0)},{src:a,alt:o,style:u,className:c,...d}=s;return e?I.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${c??""}`,style:u,children:I.jsx("div",{className:"flex items-center justify-center w-full h-full",children:I.jsx("img",{src:UC,alt:"Error loading image",...d,"data-original-url":a})})}):I.jsx("img",{src:a,alt:o,className:c,style:u,...d,onError:n})}function FC(){return I.jsx("section",{className:"bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20",children:I.jsxs("div",{className:"container mx-auto px-6",children:[I.jsxs("div",{className:"text-center mb-16",children:[I.jsxs("div",{className:"inline-flex items-center space-x-4 mb-6",children:[I.jsx("div",{className:"h-px bg-red-500 w-16"}),I.jsx("span",{className:"text-red-500 uppercase tracking-wider",children:"Nossa Dupla"}),I.jsx("div",{className:"h-px bg-red-500 w-16"})]}),I.jsx("h2",{className:"text-4xl md:text-6xl text-white mb-6",children:"Conheça nossos pilotos"}),I.jsx("p",{className:"text-xl text-gray-300 max-w-3xl mx-auto",children:"Uma combinação única de talento, experiência e determinação que representa o futuro da Scuderia Ferrari"})]}),I.jsxs("div",{className:"grid md:grid-cols-2 gap-12 max-w-6xl mx-auto",children:[I.jsx("div",{className:"group",children:I.jsxs("div",{className:"bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-red-500/20",children:[I.jsxs("div",{className:"relative h-80 overflow-hidden",children:[I.jsx(Yg,{src:"../../images/chalec01.avif",alt:"Charles Leclerc",className:"w-auto h-full object-cover transition-transform duration-300 group-hover:scale-110"}),I.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"}),I.jsx("div",{className:"absolute top-4 right-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center",children:I.jsx("span",{className:"text-white text-xl font-bold",children:"16"})}),I.jsx("div",{className:"absolute top-4 left-4 w-8 h-6 bg-red-500 rounded-sm flex items-center justify-center",children:I.jsx("span",{className:"text-white text-xs",children:"MC"})})]}),I.jsxs("div",{className:"p-8",children:[I.jsxs("div",{className:"mb-6",children:[I.jsx("h3",{className:"text-3xl text-white mb-2",children:"Charles Leclerc"}),I.jsx("p",{className:"text-red-500 uppercase tracking-wider",children:"Piloto Principal"})]}),I.jsx("div",{className:"space-y-4 mb-6",children:I.jsx("p",{className:"text-gray-300 leading-relaxed",children:"Nascido em 1997 em Monte Carlo, é um piloto monegasco de Fórmula 1. Campeão da Fórmula 2 em 2017, estreou na F1 em 2018 pela Sauber e desde 2019 corre pela Ferrari, onde é destaque pela velocidade e talento."})}),I.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-6",children:[I.jsxs("div",{className:"text-center",children:[I.jsx("div",{className:"text-2xl font-bold text-red-500",children:"5"}),I.jsx("div",{className:"text-xs text-gray-400 uppercase",children:"Vitórias"})]}),I.jsxs("div",{className:"text-center",children:[I.jsx("div",{className:"text-2xl font-bold text-red-500",children:"26"}),I.jsx("div",{className:"text-xs text-gray-400 uppercase",children:"Pódios"})]}),I.jsxs("div",{className:"text-center",children:[I.jsx("div",{className:"text-2xl font-bold text-red-500",children:"24"}),I.jsx("div",{className:"text-xs text-gray-400 uppercase",children:"Pole Positions"})]})]}),I.jsx("button",{className:"w-full bg-red-600 hover:bg-red-700 text-white py-3 transition-colors duration-300",onClick:()=>pl("https://pt.wikipedia.org/wiki/Charles_Leclerc"),children:"Ver Mais"})]})]})}),I.jsx("div",{className:"group",children:I.jsxs("div",{className:"bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-red-500/20",children:[I.jsxs("div",{className:"relative h-80 overflow-hidden",children:[I.jsx(Yg,{src:"../../images/lewham01.avif",alt:"Lewis Hamilton",className:"w-auto h-full object-cover transition-transform duration-300 group-hover:scale-110"}),I.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"}),I.jsx("div",{className:"absolute top-4 right-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center",children:I.jsx("span",{className:"text-white text-xl font-bold",children:"44"})}),I.jsx("div",{className:"absolute top-4 left-4 w-8 h-6 bg-blue-600 rounded-sm flex items-center justify-center",children:I.jsx("span",{className:"text-white text-xs",children:"GB"})})]}),I.jsxs("div",{className:"p-8",children:[I.jsxs("div",{className:"mb-6",children:[I.jsx("h3",{className:"text-3xl text-white mb-2",children:"Lewis Hamilton"}),I.jsx("p",{className:"text-red-500 uppercase tracking-wider",children:"Piloto Principal"})]}),I.jsx("div",{className:"space-y-4 mb-6",children:I.jsx("p",{className:"text-gray-300 leading-relaxed",children:"Nascido em 1985 na Inglaterra, é uma lenda da Fórmula 1 com 7 títulos mundiais. Ingressou na Ferrari em 2025, trazendo sua vasta experiência e determinação para conquistar novos títulos com a Scuderia."})}),I.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-6",children:[I.jsxs("div",{className:"text-center",children:[I.jsx("div",{className:"text-2xl font-bold text-red-500",children:"103"}),I.jsx("div",{className:"text-xs text-gray-400 uppercase",children:"Vitórias"})]}),I.jsxs("div",{className:"text-center",children:[I.jsx("div",{className:"text-2xl font-bold text-red-500",children:"197"}),I.jsx("div",{className:"text-xs text-gray-400 uppercase",children:"Pódios"})]}),I.jsxs("div",{className:"text-center",children:[I.jsx("div",{className:"text-2xl font-bold text-red-500",children:"104"}),I.jsx("div",{className:"text-xs text-gray-400 uppercase",children:"Pole Positions"})]})]}),I.jsx("button",{className:"w-full bg-red-600 hover:bg-red-700 text-white py-3 transition-colors duration-300",onClick:()=>pl("https://pt.wikipedia.org/wiki/Lewis_Hamilton"),children:"Ver Mais"})]})]})})]}),I.jsxs("div",{className:"text-center mt-16",children:[I.jsxs("div",{className:"inline-flex items-center space-x-4 mb-6",children:[I.jsx("div",{className:"h-px bg-gray-600 w-24"}),I.jsx("span",{className:"text-gray-400 uppercase tracking-wider",children:"Junte-se à tifosi"}),I.jsx("div",{className:"h-px bg-gray-600 w-24"})]}),I.jsx("button",{className:"bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-4 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/30",onClick:()=>pl("https://www.ferrari.com/en-EN/formula1"),children:"Acompanhe a Temporada 2025"})]})]})})}function OC(){const s=[{number:"1950",label:"Ano de Fundação",description:"75 anos de tradição"},{number:"243",label:"Vitórias em GPs",description:"Mais vitórias da história"},{number:"16",label:"Títulos de Construtores",description:"Recordista absoluto"},{number:"15",label:"Títulos de Pilotos",description:"Lendas imortalizadas"}];return I.jsx("section",{className:"bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-20",children:I.jsxs("div",{className:"container mx-auto px-6",children:[I.jsxs("div",{className:"text-center mb-16",children:[I.jsx("h2",{className:"text-4xl md:text-5xl text-white mb-6",children:"Uma História de Glórias"}),I.jsx("p",{className:"text-xl text-red-100 max-w-3xl mx-auto",children:"Números que contam a história da equipe mais vitoriosa da Fórmula 1"})]}),I.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:s.map((e,t)=>I.jsx("div",{className:"text-center group",children:I.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform transition-all duration-300 group-hover:scale-105 group-hover:bg-white/20",children:[I.jsx("div",{className:"text-4xl md:text-5xl font-bold text-white mb-4",children:e.number}),I.jsx("div",{className:"text-lg text-red-100 mb-2",children:e.label}),I.jsx("div",{className:"text-sm text-red-200 opacity-80",children:e.description})]})},t))}),I.jsx("div",{className:"mt-16 text-center",children:I.jsxs("div",{className:"inline-flex items-center space-x-4",children:[I.jsx("div",{className:"h-px bg-red-300 w-16"}),I.jsx("span",{className:"text-red-100 uppercase tracking-wider",children:"Forza Ferrari"}),I.jsx("div",{className:"h-px bg-red-300 w-16"})]})})]})})}function kC(){return I.jsxs("main",{children:[I.jsx(IC,{}),I.jsx(OC,{}),I.jsx(FC,{})]})}const Vi="https://api.openf1.org/v1";let BC=class{queue=[];processing=!1;lastRequestTime=0;minDelay=200;async add(e){return new Promise((t,n)=>{this.queue.push({url:e,resolve:t,reject:n}),this.process()})}async process(){if(!(this.processing||this.queue.length===0)){for(this.processing=!0;this.queue.length>0;){const t=Date.now()-this.lastRequestTime;t<this.minDelay&&await new Promise(a=>setTimeout(a,this.minDelay-t));const n=this.queue.shift();if(!n)break;try{this.lastRequestTime=Date.now();const a=await fetch(n.url);if(a.status===429){console.warn(`Rate limited (429) for ${n.url}. Backing off...`),this.queue.unshift(n),await new Promise(u=>setTimeout(u,2e3));continue}if(!a.ok)throw new Error(`Failed to fetch: ${n.url} (Status: ${a.status})`);const o=await a.json();n.resolve(o)}catch(a){n.reject(a)}}this.processing=!1}}};const zC=new BC,Kg=new Map,VC=1800*1e3,Hi=async s=>{const e=Date.now(),t=Kg.get(s);if(t&&e-t.timestamp<VC)return t.data;const n=await zC.add(s);return Kg.set(s,{data:n,timestamp:e}),n};class HC{meetings=new Map;sessions=new Map;drivers=new Map;results=new Map;laps=new Map;circuits=new Map;seasonLoaded={};async loadSeason(e){if(!this.seasonLoaded[e]){console.log(`[F1DataStore] Loading season ${e}...`);try{const t=await Hi(`${Vi}/meetings?year=${e}`),n=[];t.forEach(u=>{this.meetings.set(u.meeting_key,u),n.push(u.meeting_key)}),await this.batchFetch(n,10,async u=>{const c=`${Vi}/sessions?meeting_key=${u.join(",")}`;(await Hi(c)).forEach(h=>{const p=this.sessions.get(h.meeting_key)||[];p.push(h),this.sessions.set(h.meeting_key,p)})});const a=[];this.sessions.forEach(u=>{u.forEach(c=>{(c.session_name==="Race"||c.session_name==="Sprint")&&a.push(c)})}),await this.batchFetch(n,10,async u=>{const c=`${Vi}/drivers?meeting_key=${u.join(",")}`;(await Hi(c)).forEach(h=>{const p=this.drivers.get(h.session_key)||[];p.find(m=>m.driver_number===h.driver_number)||p.push(h),this.drivers.set(h.session_key,p)})});const o=a.map(u=>u.session_key);await this.batchFetch(o,10,async u=>{const c=`${Vi}/session_result?session_key=${u.join(",")}`;(await Hi(c)).forEach(h=>{const p=this.results.get(h.session_key)||[];p.push(h),this.results.set(h.session_key,p)})}),this.seasonLoaded[e]=!0,console.log(`[F1DataStore] Season ${e} loaded.`)}catch(t){console.error("Error loading season data:",t)}}}async batchFetch(e,t,n){const a=[];for(let o=0;o<e.length;o+=t)a.push(e.slice(o,o+t));await Promise.all(a.map(o=>n(o)))}getMeeting(e){return this.meetings.get(e)}getMeetings(e){const t=[];return this.meetings.forEach(n=>{new Date(n.date_start).getFullYear()===e&&t.push(n)}),t.sort((n,a)=>new Date(n.date_start).getTime()-new Date(a.date_start).getTime())}getSessions(e){return this.sessions.get(e)||[]}getDrivers(e){return this.drivers.get(e)||[]}getResults(e){return this.results.get(e)||[]}async ensureMeeting(e){if(this.meetings.has(e))return this.meetings.get(e);try{const t=await Hi(`${Vi}/meetings?meeting_key=${e}`);return t[0]&&this.meetings.set(e,t[0]),t[0]||null}catch{return null}}}const Fr=new HC,GC=async s=>{await Fr.loadSeason(s)},WC=async s=>(await Fr.loadSeason(s),Fr.getMeetings(s)),jC=async s=>{const t=Fr.getSessions(s).find(n=>n.session_name==="Race");if(t)return t;try{const n=await Hi(`${Vi}/sessions?meeting_key=${s}&session_name=Race`);return n.length>0?n[0]:null}catch{return null}},XC=async s=>{const e=Fr.getSessions(s);return e.length>0?e:await Hi(`${Vi}/sessions?meeting_key=${s}`)},Gv=async s=>{const e=Fr.getResults(s);return e.length>0?e:await Hi(`${Vi}/session_result?session_key=${s}`)},Wv=async s=>{const e=Fr.getDrivers(s);return e.length>0?e:await Hi(`${Vi}/drivers?session_key=${s}`)},qC=async s=>{const e=Fr.getMeeting(s);return e||await Fr.ensureMeeting(s)},$C=async s=>{try{return await Hi(`${Vi}/laps?session_key=${s}`)}catch(e){return console.error(`Error fetching laps for session ${s}:`,e),[]}},YC=async s=>{try{const e=await Hi(`${Vi}/circuits?circuit_key=${s}`);return e.length>0?e[0]:null}catch{return null}},KC=[25,18,15,12,10,8,6,4,2,1],ZC=[8,7,6,5,4,3,2,1],QC=async s=>{try{await GC(s);const e=await WC(s),t=new Date,n=e.filter(d=>new Date(d.date_start)<t),a={},o={};for(const d of n){const h=await XC(d.meeting_key);for(const p of h){if(p.session_name!=="Race"&&p.session_name!=="Sprint")continue;const m=await Gv(p.session_key),g=await Wv(p.session_key),y=p.session_name==="Sprint"?ZC:KC;m.forEach(E=>{if(E.position<=y.length&&E.position>0){const M=y[E.position-1],_=g.find(v=>v.driver_number===E.driver_number);_&&(a[_.driver_number]||(a[_.driver_number]={points:0,driver:_}),a[_.driver_number].points+=M,o[_.team_name]||(o[_.team_name]={points:0,colour:_.team_colour,drivers:new Set}),o[_.team_name].points+=M,o[_.team_name].drivers.add(_.last_name))}})}}const u=Object.values(a).map(({points:d,driver:h})=>({position:0,driver_number:h.driver_number,driver_name:h.full_name,driver_acronym:h.name_acronym,team_name:h.team_name,team_colour:h.team_colour,points:d,headshot_url:h.headshot_url})).sort((d,h)=>h.points-d.points).map((d,h)=>({...d,position:h+1})),c=Object.entries(o).map(([d,h])=>({position:0,team_name:d,team_colour:h.colour,points:h.points,drivers:Array.from(h.drivers)})).sort((d,h)=>h.points-d.points).map((d,h)=>({...d,position:h+1}));return{drivers:u,constructors:c}}catch(e){return console.error("Error calculating standings:",e),{drivers:[],constructors:[]}}};class JC{queue=[];activeCount=0;maxConcurrent;constructor(e){this.maxConcurrent=e}add(e){return new Promise((t,n)=>{const a=async()=>{this.activeCount++;try{const o=await e();t(o)}catch(o){n(o)}finally{this.activeCount--,this.next()}};this.activeCount<this.maxConcurrent?a():this.queue.push(a)})}next(){this.activeCount<this.maxConcurrent&&this.queue.length>0&&this.queue.shift()?.()}}const eA=new JC(3),tA="f1_cache_",nA=1440*60*1e3,iA=async(s,e=!1)=>{const t=tA+s;if(!e){const n=localStorage.getItem(t);if(n)try{const a=JSON.parse(n);if(Date.now()-a.timestamp<nA)return a.data}catch(a){console.warn("Failed to parse cache",a),localStorage.removeItem(t)}}return eA.add(async()=>{const n=await fetch(s);if(!n.ok)throw new Error(`Failed to fetch ${s}`);const a=await n.json();try{localStorage.setItem(t,JSON.stringify({data:a,timestamp:Date.now()}))}catch(o){console.warn("Failed to save to cache (quota exceeded?)",o)}return a})};function rA(){const s=a_(),[e,t]=K.useState(new Date().getFullYear()),[n,a]=K.useState([]),[o,u]=K.useState([]),[c,d]=K.useState([]),[h,p]=K.useState(!0);return K.useEffect(()=>{(async()=>{p(!0);try{const y=(await iA(`https://api.openf1.org/v1/meetings?year=${e}`)).sort((_,v)=>new Date(_.date_start).getTime()-new Date(v.date_start).getTime());a(y);const{drivers:E,constructors:M}=await QC(e);u(E),d(M)}catch(g){console.error("Error fetching race data:",g)}finally{p(!1)}})()},[e]),h?I.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24 flex items-center justify-center",children:I.jsxs("div",{className:"text-center",children:[I.jsx("div",{className:"text-red-600 text-4xl font-bold mb-4 animate-pulse",children:"SCUDERIA FERRARI"}),I.jsx("div",{className:"text-gray-400 text-lg",children:"Carregando temporada..."})]})}):I.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900",style:{paddingTop:"8rem"},children:I.jsxs("div",{className:"container mx-auto px-6",children:[I.jsxs("div",{className:"text-center mb-12",children:[I.jsxs("div",{className:"inline-flex items-center space-x-4 mb-6",children:[I.jsx("div",{className:"h-px bg-red-500 w-16"}),I.jsx("span",{className:"text-red-500 uppercase tracking-wider",children:"Temporada"}),I.jsx("div",{className:"h-px bg-red-500 w-16"})]}),I.jsx("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight",children:"Calendário de Corridas"}),I.jsx("p",{className:"text-xl text-gray-300 max-w-3xl mx-auto mt-10",children:"Acompanhe todas as corridas e classificações do campeonato"})]}),I.jsx("div",{className:"mb-8 flex justify-center",style:{marginTop:"40px"},children:I.jsx("div",{className:"bg-gradient-to-r from-red-600 to-red-700 rounded-full px-8 py-3 shadow-lg",children:I.jsx("span",{className:"text-white text-2xl font-bold",children:e})})}),I.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[I.jsx("div",{className:"lg:col-span-1",children:I.jsxs("div",{className:"bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl h-full",children:[I.jsxs("div",{className:"flex items-center mb-6 pb-4 border-b border-red-600",children:[I.jsx("span",{className:"text-red-500 text-2xl mr-3",children:"🏆"}),I.jsx("h2",{className:"text-xl font-bold text-white",children:"Campeonato de Pilotos"})]}),I.jsx("div",{className:"space-y-3",children:o.slice(0,10).map(m=>{const g=m.team_name.toLowerCase().includes("ferrari");return I.jsx("div",{className:`
                                                p-3 rounded-lg transition-all duration-300
                                                ${g?"bg-red-900/20 border border-red-800/50":"bg-gray-800/30 hover:bg-gray-800/50"}
                                             `,children:I.jsxs("div",{className:"flex items-center justify-between",children:[I.jsxs("div",{className:"flex items-center space-x-3",children:[I.jsx("span",{className:`
                                                        font-bold text-lg w-6
                                                        ${m.position===1?"text-yellow-400":m.position===2?"text-gray-300":m.position===3?"text-orange-400":"text-gray-500"}
                                                    `,children:m.position}),I.jsxs("div",{children:[I.jsx("div",{className:`font-bold text-sm ${g?"text-red-500":"text-white"}`,children:m.driver_name}),I.jsx("div",{className:"text-xs text-gray-400",children:m.team_name})]})]}),I.jsx("div",{className:"font-mono font-bold text-sm text-white",children:m.points})]})},m.driver_number)})})]})}),I.jsx("div",{className:"lg:col-span-2",children:I.jsx("div",{className:"grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4",children:n.map(m=>{const g=new Date(m.date_start)<new Date;return I.jsxs("div",{onClick:()=>s(`/races/${m.meeting_key}`),className:`
                        group relative aspect-square rounded-xl p-2 
                        flex flex-col justify-between cursor-pointer 
                        transition-all duration-300 transform
                        bg-gradient-to-br from-gray-800 to-gray-900
                        hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20
                        overflow-hidden
                        ${g?"opacity-100":"opacity-70"}
                    `,children:[I.jsxs("div",{className:"text-center z-10",children:[I.jsx("div",{className:"text-xl mb-1 transform group-hover:scale-110 transition-transform",children:sA(m.country_code)}),I.jsx("div",{className:"font-bold text-[10px] leading-tight mb-1 text-white truncate px-1",children:m.meeting_name.replace("Grand Prix","").trim()}),I.jsx("div",{className:"text-[9px] text-gray-400 truncate",children:m.location})]}),I.jsxs("div",{className:"text-center",children:[I.jsx("div",{className:"text-[9px] text-gray-400 mb-1",children:new Date(m.date_start).toLocaleDateString("pt-BR",{month:"short",day:"numeric"})}),g&&I.jsx("div",{className:"text-[8px] text-red-500 font-bold flex items-center justify-center gap-1",children:"Click to view results"})]})]},m.meeting_key)})})}),I.jsx("div",{className:"lg:col-span-1",children:I.jsxs("div",{className:"bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl h-full",children:[I.jsxs("div",{className:"flex items-center mb-6 pb-4 border-b border-red-600",children:[I.jsx("span",{className:"text-red-500 text-2xl mr-3",children:"🏁"}),I.jsx("h2",{className:"text-xl font-bold text-white",children:"Campeonato de Construtores"})]}),I.jsx("div",{className:"space-y-3",children:c.map(m=>{const g=m.team_name.toLowerCase().includes("ferrari");return I.jsx("div",{className:`
                                                p-3 rounded-lg transition-all duration-300
                                                ${g?"bg-red-900/20 border border-red-800/50":"bg-gray-800/30 hover:bg-gray-800/50"}
                                             `,children:I.jsxs("div",{className:"flex items-center justify-between",children:[I.jsxs("div",{className:"flex items-center space-x-3",children:[I.jsx("span",{className:`
                                                        font-bold text-lg w-6
                                                        ${m.position===1?"text-yellow-400":m.position===2?"text-gray-300":m.position===3?"text-orange-400":"text-gray-500"}
                                                    `,children:m.position}),I.jsx("div",{className:`font-bold text-sm ${g?"text-red-500":"text-white"}`,children:m.team_name})]}),I.jsx("div",{className:"font-mono font-bold text-sm text-white",children:m.points})]})},m.team_name)})})]})})]}),I.jsx("div",{className:"text-center mt-16",children:I.jsxs("div",{className:"inline-flex items-center space-x-4",children:[I.jsx("div",{className:"h-px bg-gray-700 w-24"}),I.jsx("span",{className:"text-gray-500 uppercase tracking-wider text-sm",children:"Forza Ferrari"}),I.jsx("div",{className:"h-px bg-gray-700 w-24"})]})})]})})}function sA(s){return"🏁"}function aA(){const{meetingKey:s}=u1(),[e,t]=K.useState(null),[n,a]=K.useState([]),[o,u]=K.useState(!0),[c,d]=K.useState(0),[h,p]=K.useState(0);if(K.useEffect(()=>{(async()=>{if(s){u(!0);try{const y=parseInt(s),E=await qC(y);if(t(E),E){if(E.circuit_key){const _=await YC(E.circuit_key);_&&p(_.circuit_length||0)}const M=await jC(y);if(M){const[_,v,b]=await Promise.all([Gv(M.session_key),Wv(M.session_key),$C(M.session_key)]),C={"Bahrain International Circuit":5412,"Jeddah Corniche Circuit":6174,"Albert Park Circuit":5278,"Suzuka International Racing Course":5807,"Shanghai International Circuit":5451,"Miami International Autodrome":5412,"Autodromo Enzo e Dino Ferrari":4909,"Circuit de Monaco":3337,"Circuit Gilles Villeneuve":4361,"Circuit de Barcelona-Catalunya":4657,"Red Bull Ring":4318,"Silverstone Circuit":5891,Hungaroring:4381,"Circuit de Spa-Francorchamps":7004,"Circuit Zandvoort":4259,"Autodromo Nazionale Monza":5793,"Baku City Circuit":6003,"Marina Bay Street Circuit":4940,"Circuit of The Americas":5513,"Autódromo Hermanos Rodríguez":4304,"Interlagos Circuit":4309,"Las Vegas Strip Circuit":6201,"Lusail International Circuit":5419,"Yas Marina Circuit":5281};if(b.length>0){const L=Math.max(...b.map(P=>P.lap_number));d(L)}if(E.circuit_short_name&&!h){const L=C[E.circuit_short_name]||C[Object.keys(C).find(P=>E.circuit_short_name.includes(P)||P.includes(E.circuit_short_name))||""];L&&p(L)}const N=_.map(L=>({...L,driver:v.find(P=>P.driver_number===L.driver_number)})).sort((L,P)=>{const U=L.position&&L.position>0?L.position:999,k=P.position&&P.position>0?P.position:999;return U-k});a(N)}}}catch(y){console.error("Error fetching race details:",y)}finally{u(!1)}}})()},[s]),o)return I.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-32 flex items-center justify-center",children:I.jsxs("div",{className:"text-center",children:[I.jsx("div",{className:"text-red-600 text-4xl font-bold mb-4 animate-pulse",children:"SCUDERIA FERRARI"}),I.jsx("div",{className:"text-gray-400 text-lg",children:"Carregando dados da corrida..."})]})});if(!e)return I.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-32 flex items-center justify-center",children:I.jsxs("div",{className:"text-center",children:[I.jsx("h1",{className:"text-3xl text-white mb-6",children:"Corrida não encontrada"}),I.jsx(ia,{to:"/races",className:"bg-red-600 hover:bg-red-700 text-white px-8 py-3 inline-block transition-all duration-300",children:"Voltar para Corridas"})]})});const m=c&&h?(c*h/1e3).toFixed(3):"--";return I.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900",style:{paddingTop:"9rem"},children:I.jsxs("div",{className:"container mx-auto px-6",children:[I.jsxs(ia,{to:"/races",className:"inline-flex items-center text-gray-400 hover:text-red-500 mb-8 transition-colors duration-300 group",children:[I.jsx("svg",{className:"w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:I.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"Voltar para Corridas"]}),I.jsxs("div",{className:"mb-12",children:[I.jsxs("div",{className:"flex items-center space-x-4 mb-6",children:[I.jsx("div",{className:"h-px bg-red-500 w-16"}),I.jsx("span",{className:"text-red-500 uppercase tracking-wider text-sm",children:"Grande Prêmio"}),I.jsx("div",{className:"h-px bg-red-500 w-16"})]}),I.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-end mb-6",children:[I.jsxs("div",{children:[I.jsx("h1",{className:"text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight",children:e.meeting_name}),I.jsxs("div",{className:"text-xl text-red-500 font-medium",children:[e.location,", ",e.country_name]})]}),I.jsxs("div",{className:"mt-6 md:mt-0 text-left md:text-right",children:[I.jsx("div",{className:"text-gray-300 text-lg mb-1",children:new Date(e.date_start).toLocaleDateString("pt-BR",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}),I.jsx("div",{className:"text-gray-500",children:e.circuit_short_name})]})]})]}),I.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[I.jsx("div",{className:"lg:col-span-2",children:I.jsxs("div",{className:"bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl",children:[I.jsx("div",{className:"bg-gradient-to-r from-red-600 to-red-700 px-6 py-4",children:I.jsx("h2",{className:"text-xl font-bold text-white",children:"Resultados da Corrida"})}),I.jsx("div",{className:"overflow-x-auto",children:I.jsxs("table",{className:"w-full",children:[I.jsx("thead",{className:"bg-gray-900/50",children:I.jsxs("tr",{className:"text-gray-400 text-xs uppercase tracking-wider",children:[I.jsx("th",{className:"px-6 py-4 text-left",children:"Pos"}),I.jsx("th",{className:"px-6 py-4 text-left",children:"Piloto"}),I.jsx("th",{className:"px-6 py-4 text-left",children:"Equipe"}),I.jsx("th",{className:"px-6 py-4 text-right",children:"Tempo/Distância para o Primeiro"})]})}),I.jsx("tbody",{className:"divide-y divide-gray-800",children:n.map(g=>{const y=g.driver?.team_name.toLowerCase().includes("ferrari");g.status;const M=g.position===1?oA(g.duration):g.gap_to_leader,_=g.position&&g.position>0?g.position:"DNF";return I.jsxs("tr",{className:`
                                                        transition-all duration-300
                                                        ${y?"bg-red-900/20 hover:bg-red-900/30":"hover:bg-gray-800/50"}
                                                    `,children:[I.jsx("td",{className:"px-6 py-4",children:I.jsx("span",{className:`
                                                            font-bold text-lg
                                                            ${g.position===1?"text-yellow-400":g.position===2?"text-gray-300":g.position===3?"text-orange-400":"text-gray-400"}
                                                        `,children:_})}),I.jsx("td",{className:"px-6 py-4",children:I.jsxs("div",{className:"flex items-center",children:[g.driver?.headshot_url&&I.jsx("img",{src:g.driver.headshot_url,alt:"",className:"w-10 h-10 rounded-full bg-gray-700 object-cover mr-3 border-2 border-gray-600"}),I.jsxs("div",{children:[I.jsx("div",{className:`font-bold ${y?"text-red-500":"text-white"}`,children:g.driver?.full_name}),I.jsxs("div",{className:"text-xs text-white",children:["#",g.driver?.driver_number]})]})]})}),I.jsx("td",{className:`px-6 py-4 ${y?"text-red-400 font-bold":"text-gray-400"}`,children:g.driver?.team_name}),I.jsx("td",{className:"px-6 py-4 text-right font-mono text-sm text-gray-300",children:M})]},g.driver_number)})})]})})]})}),I.jsx("div",{className:"lg:col-span-1",children:I.jsxs("div",{className:"sticky top-32 space-y-6",children:[I.jsx("div",{className:"bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl",children:I.jsx("div",{className:"bg-white p-8 aspect-square flex items-center justify-center",children:I.jsxs("div",{className:"text-center",children:[I.jsx("div",{className:"text-6xl mb-4",children:"🏁"}),I.jsx("div",{className:"font-bold text-xl text-white",children:"Circuito"}),I.jsx("div",{className:"text-sm text-white mt-2",children:e.circuit_short_name})]})})}),I.jsxs("div",{className:"bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl",style:{padding:"2rem",marginTop:"2rem"},children:[I.jsxs("h3",{className:"text-xl font-bold text-white mb-6 flex items-center",children:[I.jsx("span",{className:"text-red-500 mr-2",children:"●"}),"Estatísticas"]}),I.jsxs("div",{className:"space-y-4",children:[I.jsxs("div",{className:"flex justify-between items-center pb-3 border-b border-gray-700",children:[I.jsx("span",{className:"text-gray-400",children:"Vencedor"}),I.jsx("span",{className:"text-white font-bold",children:n[0]?.driver?.last_name||"--"})]}),I.jsxs("div",{className:"flex justify-between items-center pb-3 border-b border-gray-700",children:[I.jsx("span",{className:"text-gray-400",children:"Total de Voltas"}),I.jsx("span",{className:"text-white font-mono",children:c||"--"})]}),I.jsxs("div",{className:"flex justify-between items-center",children:[I.jsx("span",{className:"text-gray-400",children:"Distância"}),I.jsxs("span",{className:"text-white font-mono",children:[m," km"]})]})]})]})]})})]})]})})}function oA(s){if(!s)return"N/A";const e=Math.floor(s/60),t=(s%60).toFixed(3);return`${e}:${t.padStart(6,"0")}`}function lA(){return I.jsx(q1,{children:I.jsxs("div",{className:"min-h-screen bg-black",children:[I.jsx(_E,{}),I.jsxs(w1,{children:[I.jsx(pc,{path:"/",element:I.jsx(kC,{})}),I.jsx(pc,{path:"/races",element:I.jsx(rA,{})}),I.jsx(pc,{path:"/races/:meetingKey",element:I.jsx(aA,{})})]})]})})}NS.createRoot(document.getElementById("root")).render(I.jsx(lA,{}));
