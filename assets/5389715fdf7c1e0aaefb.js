"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[1898],{222015:(e,n,r)=>{r.d(n,{c:()=>C});var t=r(53211),a=r(356004),s=r(105405),l=r(859023),o=r(976703),u=r(219946),i=r(523283),_=r(276489),c=r(809096),A=r(959797),O=function(e){switch(e){case _.jj.BLOCK_MESSAGE:return A.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;case _.jj.FLAG_TO_CHANNEL:return A.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;case _.jj.USER_COMMUNICATION_DISABLED:return A.Z.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER}},I=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_.fX.KEYWORD;switch(e){case _.jj.BLOCK_MESSAGE:switch(n){case _.fX.MENTION_SPAM:return A.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_MENTION_SPAM;case _.fX.ML_SPAM:return A.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_ML_SPAM;default:return A.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION}case _.jj.FLAG_TO_CHANNEL:
return A.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DESCRIPTION;case _.jj.USER_COMMUNICATION_DISABLED:return A.Z.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER_DESCRIPTION}},S=function(e,n){switch(e){case _.jj.BLOCK_MESSAGE:return null;case _.jj.FLAG_TO_CHANNEL:var r,o=null==n||null===(r=n.metadata)||void 0===r?void 0:r.channelId;if(null==o)return null;var u=a.Z.getChannel(o);if(null==u)return null;var i=(0,t.F6)(u,l.default,s.Z);return A.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DISPLAY_HELPER.format({channelName:i});case _.jj.USER_COMMUNICATION_DISABLED:var O,I,S=null!==(I=null==n||null===(O=n.metadata)||void 0===O?void 0:O.durationSeconds)&&void 0!==I?I:0,d=(0,c.L9)(S);return null==d?null:A.Z.Messages.GUILD_AUTOMOD_ACTIONS_USER_DISABLE_COMMUNICATION_DISPLAY_HELPER.format({duration:d})}},d=function(e){switch(e){case _.jj.BLOCK_MESSAGE:return i.Z;case _.jj.FLAG_TO_CHANNEL:return o.Z;case _.jj.USER_COMMUNICATION_DISABLED:return u.Z}};function C(e,n,r){
return function(e){switch(e){case _.jj.BLOCK_MESSAGE:case _.jj.FLAG_TO_CHANNEL:case _.jj.USER_COMMUNICATION_DISABLED:return!0;default:return!1}}(e)?{headerText:null!==(t=O(e))&&void 0!==t?t:"",descriptionText:null!==(a=I(e,r))&&void 0!==a?a:"",helperText:null!==(s=S(e,n))&&void 0!==s?s:null,icon:null!==(l=d(e))&&void 0!==l?l:i.Z}:null;var t,a,s,l}},801898:(e,n,r)=>{r.r(n);r.d(n,{default:()=>d});var t=r(785893),a=r(667294),s=r(331535),l=r(272729),o=r(67416),u=r(222015),i=r(809096),_=r(959797),c=r(659673),A=r.n(c);function O(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function I(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,s=[],l=!0,o=!1;try{for(r=r.call(e);!(l=(t=r.next()).done);l=!0){s.push(t.value);if(n&&s.length===n)break}}catch(e){o=!0;a=e}finally{try{l||null==r.return||r.return()}finally{if(o)throw a}}
return s}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return O(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var S=function(e){var n,r=e.duration,a=e.onSelectDuration,l=(0,i.tr)(),o=l.find((function(e){return e.value===r}));return(0,t.jsx)(s.xJ,{className:A().durationSelector,required:!0,children:(0,t.jsx)(s.Vc,{value:null!==(n=null==o?void 0:o.value)&&void 0!==n?n:i.UK.DURATION_60_SEC,options:l,onChange:function(e){var n=l.find((function(n){return n.value===e}));null!=n&&a(n.value)},placeholder:_.Z.Messages.GUILD_AUTOMOD_DISABLE_GUILD_COMMUNICATION_PLACEHOLDER})})};function d(e){
var n=e.action,r=e.triggerType,c=e.isEdit,O=e.onUpdateDuration,d=e.onClose,C=e.transitionState,M=(0,l.Dt)(),E=I(a.useState((function(){return null!=n.metadata.durationSeconds&&n.metadata.durationSeconds>0?n.metadata.durationSeconds:i.UK.DURATION_60_SEC})),2),N=E[0],L=E[1],D=(0,u.c)(n.type,n,r);if(null==D)return null;var T=D.headerText;return(0,t.jsxs)(o.Y0,{transitionState:C,"aria-labelledby":M,size:o.Cg.SMALL,children:[(0,t.jsxs)(o.hz,{className:A().actionContentContainer,children:[(0,t.jsx)(s.X6,{id:M,color:"header-primary",variant:"heading-lg/semibold",className:A().header,children:T}),(0,t.jsx)(s.xv,{color:"header-secondary",variant:"text-sm/normal",children:_.Z.Messages.GUILD_AUTOMOD_DISABLE_GUILD_COMMUNICATION_MODAL_DESCRIPTION}),(0,t.jsx)(S,{duration:N,onSelectDuration:function(e){L(e)}})]}),(0,t.jsxs)(o.mz,{children:[(0,t.jsx)(s.zx,{onClick:function(){O(N)},color:s.zx.Colors.BRAND,size:s.zx.Sizes.SMALL,children:c?_.Z.Messages.EDIT:_.Z.Messages.SAVE}),(0,t.jsx)(s.zx,{
onClick:function(){d()},color:s.zx.Colors.TRANSPARENT,look:s.zx.Looks.LINK,children:_.Z.Messages.CANCEL})]})]})}}}]);
//# sourceMappingURL=5389715fdf7c1e0aaefb.js.map