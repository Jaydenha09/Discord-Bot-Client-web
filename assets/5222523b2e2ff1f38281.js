"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[35977],{454313:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(785893),o=(n(667294),n(64833));function i(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){i(e,t,n[t])}))}return e}function c(e,t){return function(n){var i=(0,o.Z)(t).AnalyticsLocationProvider;return(0,r.jsx)(i,{children:(0,r.jsx)(e,l({},n))})}}},752987:(e,t,n)=>{n.d(t,{Z:()=>O});var r=n(785893),o=n(667294),i=n(363010),l=n(34076),c=n(7046),a=n(769672),s=n(653772),u=n(940712),d=n(461061),f=n(959797),b=n(35637),p=n.n(b);function O(e,t,n){var b=s.Z.getGuild(t),O=(0,i.e7)([u.Z],(function(){
return null!=b?u.Z.can(d.Plq.MANAGE_GUILD,b):null})),h=o.useCallback((function(){c.Z.open(t,d.pNK.INTEGRATIONS);l.Z.setSection(d.b4C.APPLICATION,e.id)}),[e.id,t]),Z=n===d.IlC.POPOUT;return e.bot&&O&&!Z?(0,r.jsx)(a.sN,{id:"manage-integration",label:(0,r.jsx)("div",{className:p().labelWrapper,children:(0,r.jsx)("span",{className:p().label,children:f.Z.Messages.MANAGE_INTEGRATION})}),action:h}):null}},235977:(e,t,n)=>{n.r(t);n.d(t,{default:()=>w});var r=n(785893),o=(n(667294),n(281081)),i=n(239396),l=n(454313),c=n(859169),a=n(41225),s=n(96511),u=n(752987),d=n(769672),f=n(271273),b=n(363010),p=n(653772),O=n(859023),h=n(897576),Z=n(959797);function g(e,t,n,r,o,i,l){try{var c=e[i](l),a=c.value}catch(e){n(e);return}c.done?t(a):Promise.resolve(a).then(r,o)}function N(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function l(e){g(i,r,o,l,c,"next",e)}function c(e){g(i,r,o,l,c,"throw",e)}l(void 0)}))}}function E(e,t,n){
t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function y(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}var j=function(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),
0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:l.label++;return{value:i[1],done:!1};case 5:l.label++;r=i[1];i=[0];continue;case 7:i=l.ops.pop();l.trys.pop();continue;default:if(!(o=l.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1];o=i;break}if(o&&l.label<o[2]){l.label=o[2];l.ops.push(i);break}o[2]&&l.ops.pop();l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};function v(e,t){var o=(0,b.e7)([O.default],(function(){return O.default.getCurrentUser()})),i=(0,b.e7)([p.Z],(function(){return p.Z.getGuild(t)}));return null==i||null==o||e.id===i.ownerId||e.bot||!i.isOwnerWithRequiredMfaLevel(o)?null:(0,r.jsx)(d.sN,{id:"transfer-ownership",color:"danger",label:Z.Z.Messages.TRANSFER_OWNERSHIP,action:function(){
return(0,h.ZD)(N((function(){var t,l;return j(this,(function(c){switch(c.label){case 0:return[4,Promise.all([n.e(40532),n.e(38279)]).then(n.bind(n,38279))];case 1:t=c.sent(),l=t.default;return[2,function(t){return(0,r.jsx)(l,y(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){E(e,t,n[t])}))}return e}({},t),{guild:i,fromUser:o,toUser:e}))}]}}))})))}})}var S=n(506934),x=n(974230),m=n(461061);const w=(0,l.Z)((function(e){var t=e.user,n=e.guildId,l=e.channelId,c=e.analyticsContext,b=e.onSelect,p=(0,S.Z)(t.id),O=(0,s.Z)(n,t.id,{page:m.ZY5.GUILD_CHANNEL,section:m.jXE.CHAT_USERNAME,object:m.qAy.CONTEXT_MENU_ITEM}),h=(0,u.Z)(t,n),g=(0,f.Z)(t,n,l),N=(0,x.Z)(t.id,n),E=v(t,n),y=(0,a.Z)(t.id),j=t.isNonUserBot();return(0,r.jsx)(i.Z,{context:c,
object:m.qAy.CONTEXT_MENU,children:(0,r.jsxs)(d.ZP,{navId:"user-context",onClose:o.Zy,"aria-label":Z.Z.Messages.USER_ACTIONS_MENU_LABEL,onSelect:b,children:[!j&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.kS,{children:[p,O,h]}),(0,r.jsx)(d.kS,{children:g}),(0,r.jsx)(d.kS,{children:N}),(0,r.jsx)(d.kS,{children:E})]}),(0,r.jsx)(d.kS,{children:y})]})})}),[c.Z.CONTEXT_MENU,c.Z.GUILD_SETTINGS_USER_MENU])},506934:(e,t,n)=>{n.d(t,{Z:()=>O});var r=n(785893),o=(n(667294),n(363010)),i=n(992497),l=n(600341),c=n(769672),a=n(934714),s=n(859023),u=n(81951),d=n(866452),f=n(959797),b=n(870726),p=n.n(b);function O(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.Yn.DEFAULT,b=(null===(t=s.default.getCurrentUser())||void 0===t?void 0:t.id)===e,O=(0,o.cj)([a.Z],(function(){return b?{muted:a.Z.isSelfMute(n),deafened:a.Z.isSelfDeaf(n)}:{muted:a.Z.isLocalMute(e,n),localVideoDisabled:a.Z.isLocalVideoDisabled(e,n),localVideoAutoDisabled:a.Z.isLocalVideoAutoDisabled(e,n)}
}),[b]),h=O.muted,Z=O.deafened,g=void 0!==Z&&Z,N=O.localVideoDisabled,E=void 0!==N&&N,y=O.localVideoAutoDisabled,j=void 0!==y&&y,v=a.Z.supports(d.AN.DISABLE_VIDEO)&&!b?(0,r.jsx)(c.S8,{id:"disable-video",label:f.Z.Messages.DISABLE_VIDEO,action:function(){j?i.Z.show({title:f.Z.Messages.UNSTABLE_CONNECTION,body:f.Z.Messages.UNSTABLE_CONNECTION_REASON_2,confirmText:f.Z.Messages.TURN_ON_VIDEO_ANYWAY,cancelText:f.Z.Messages.LEAVE_VIDEO_OFF,onConfirm:function(){return l.Z.setDisableLocalVideo(e,!1)}}):l.Z.setDisableLocalVideo(e,!E,n)},checked:E,subtext:j?(0,r.jsxs)("div",{className:p().videoPaused,children:[(0,r.jsx)(u.Z,{width:12,className:p().warningCircle}),f.Z.Messages.UNSTABLE_CONNECTION]}):null},"disable-video"):null;return b?[(0,r.jsx)(c.S8,{id:"mute",label:f.Z.Messages.SOUND_MUTE,action:function(){return l.Z.toggleSelfMute({context:n})},checked:h},"self-mute"),(0,r.jsx)(c.S8,{id:"deafen",label:f.Z.Messages.DEAFEN,action:function(){return l.Z.toggleSelfDeaf({context:n})},checked:g
},"self-deafen"),v]:[(0,r.jsx)(c.S8,{id:"mute",label:f.Z.Messages.SOUND_MUTE,action:function(){return l.Z.toggleLocalMute(e,n)},checked:h},"self-mute"),v]}}}]);
//# sourceMappingURL=5222523b2e2ff1f38281.js.map