"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[14328],{114328:(e,r,t)=>{t.r(r);t.d(r,{AddRoleMembersModalContent:()=>L,default:()=>_});var n=t(785893),o=t(667294),a=t(316921),i=t(363010),l=t(331535),s=t(97638),u=t(87310),c=t(487502),f=t(943327),d=t(67416),b=t(462020),m=t(158033),y=t(7046),h=t(49497),p=t(361102),v=t(461061),g=t(862045),x=t(959797),R=t(58638),S=t.n(R);function E(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function j(e,r,t,n,o,a,i){try{var l=e[a](i),s=l.value}catch(e){t(e);return}l.done?r(s):Promise.resolve(s).then(n,o)}function C(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function i(e){j(a,n,o,i,l,"next",e)}function l(e){j(a,n,o,i,l,"throw",e)}i(void 0)}))}}function M(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t;return e}function w(e,r){if(null==e)return{}
;var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++){t=a[n];r.indexOf(t)>=0||(o[t]=e[t])}return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++){t=a[n];r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}}return o}function k(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(n=t.next()).done);i=!0){a.push(n.value);if(r&&a.length===r)break}}catch(e){l=!0;o=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return E(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t)
;if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return E(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e){var r=function(e,r){if("object"!==A(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===A(r)?r:String(r)}var A=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};var I=function(e,r){var t,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){
if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;(n=0,o)&&(a=[2&a[0],o.value]);switch(a[0]){case 0:case 1:o=a;break;case 4:i.label++;return{value:a[1],done:!1};case 5:i.label++;n=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1];o=a;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(a);break}o[2]&&i.ops.pop();i.trys.pop();continue}a=r.call(e,i)}catch(e){a=[6,e];n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};function L(e){var r=e.onClose,t=e.roleId,R=e.guildId,E=e.onBack,j=e.isCreateRoleFlow,A=e.focusSearchAfterReady,L=e.isReady,_=(0,i.e7)([h.Z],(function(){return h.Z.getRole(t)
}),[t]),T=k(o.useState(""),2),z=T[0],N=T[1],P=k(o.useState({}),2),Z=P[0],B=P[1],D=k(o.useState(!1),2),U=D[0],Y=D[1];o.useEffect((function(){b.Z.requestMembers(R,z.trim().toLowerCase(),p._4)}),[R,z]);var F,K=o.useCallback((function(e){return!e.roles.includes(t)}),[t]),q=(0,p.lJ)(R,K),H=o.useMemo((function(){return q.filter((function(e){return(0,p.eg)(z,e)}))}),[z,q]),G=o.useCallback(C((function(){var e;return I(this,(function(n){switch(n.label){case 0:e=Object.values(Z).map((function(e){return e.row.id}));Y(!0);n.label=1;case 1:n.trys.push([1,3,,4]);return[4,y.Z.bulkAddMemberRoles(R,t,e)];case 2:n.sent();(0,m.H)(R,t,!1);r();return[3,4];case 3:n.sent();Y(!1);return[3,4];case 4:return[2]}}))})),[R,t,Z,r]),J=o.useCallback((function(e){var r=e;B((function(e){var t=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){
return Object.getOwnPropertyDescriptor(t,e).enumerable}))));n.forEach((function(r){M(e,r,t[r])}))}return e}({},e),n=(0,u.getFullRowId)(r);if(n in t){delete t[n];return t}t[n]={display:{type:s.Fj.MEMBER,label:r.name,avatar:r.avatarURL},row:r};return t}))}),[]),Q=o.useCallback((function(e){B((function(r){r[e];return w(r,[e].map(O))}))}),[]),V=o.useMemo((function(){return H.map((function(e){return{rowType:g.aC.MEMBER,name:e.name,userTag:e.userTag,id:e.id,avatarURL:e.avatarURL,bot:e.bot,verifiedBot:e.verifiedBot,disabled:!1,key:e.id}}))}),[H]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(d.xB,{className:S().header,separator:!1,direction:c.Z.Direction.VERTICAL,children:[(0,n.jsx)(l.X6,{variant:"heading-xl/semibold",children:x.Z.Messages.ROLE_ADD_MEMBERS_TITLE}),j?(0,n.jsx)(l.xv,{className:S().subtitle,color:"text-normal",variant:"text-md/normal",children:x.Z.Messages.ROLE_CREATE_ADD_MEMBERS_SUBTITLE}):(0,n.jsxs)("div",{className:S().roleContainer,children:[(0,n.jsx)(f.Z,{
color:null!==(F=null==_?void 0:_.colorString)&&void 0!==F?F:(0,a.Rf)(v.p6O),width:16,height:16}),(0,n.jsx)(l.xv,{className:S().roleName,color:"text-normal",variant:"text-md/normal",children:null==_?void 0:_.name})]})]}),(0,n.jsx)(u.MemberRoleSelector,{listClassName:S().list,pendingAdditions:Z,query:z,onQueryChange:N,onClickRow:J,onRemovePendingAddition:Q,roles:[],members:V,placeholderText:x.Z.Messages.ROLE_ADD_MEMBERS_SEARCH,renderEmptyText:function(e){return x.Z.Messages.ROLE_EDIT_MEMBERS_NO_RESULTS.format({query:e})},focusSearchAfterReady:A,isReady:L}),(0,n.jsxs)(d.mz,{className:S().footer,children:[(0,n.jsxs)("div",{className:S().buttonsRight,children:[j&&0===Object.keys(Z).length?(0,n.jsx)(l.zx,{onClick:r,color:l.zx.Colors.PRIMARY,children:x.Z.Messages.ROLE_CREATION_SKIP}):(0,n.jsx)(l.zx,{onClick:G,submitting:U,children:x.Z.Messages.ADD}),!j&&(0,n.jsx)(l.zx,{look:l.zx.Looks.LINK,color:l.zx.Colors.PRIMARY,size:l.zx.Sizes.SMALL,onClick:r,children:x.Z.Messages.CANCEL})]}),null!=E&&(0,
n.jsx)(l.zx,{color:l.zx.Colors.PRIMARY,look:l.zx.Looks.LINK,size:l.zx.Sizes.TINY,onClick:E,className:S().backButton,children:x.Z.Messages.BACK})]})]})}function _(e){var r=e.transitionState,t=e.onClose,o=e.roleId,a=e.guildId;return(0,n.jsx)(d.Y0,{transitionState:r,size:d.Cg.SMALL,children:(0,n.jsx)(L,{onClose:t,roleId:o,guildId:a})})}}}]);
//# sourceMappingURL=024e3bdb35591e51b692.js.map