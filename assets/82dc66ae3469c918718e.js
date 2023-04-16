"use strict";(this.webpackChunkdiscord_developers=this.webpackChunkdiscord_developers||[]).push([[8157],{48443:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0});e.default=void 0;var n,i=K(r(67294)),o=A(r(96486)),s=r(55558),u=A(r(36211)),a=K(r(21868)),l=A(r(75520)),d=A(r(77545)),c=A(r(62103)),f=A(r(81061)),h=A(r(86750)),p=A(r(86460)),v=A(r(43973)),S=A(r(58350)),g=A(r(69245)),y=A(r(62441)),m=A(r(76806)),k=K(r(34704)),b=K(r(9378)),I=A(r(74257)),C=A(r(80828)),w=r(34596),O=A(r(74334)),L=A(r(36422)),_=["item"];function A(t){return t&&t.__esModule?t:{default:t}}function U(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(U=function(t){return t?r:e})(t)}function K(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var r=U(e);if(r&&r.has(t))return r.get(t);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var s=i?Object.getOwnPropertyDescriptor(t,o):null;s&&(s.get||s.set)?Object.defineProperty(n,o,s):n[o]=t[o]}n.default=t;r&&r.set(t,n);return n}function R(){R=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};return R.apply(this,arguments)}function j(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++){r=o[n];e.indexOf(r)>=0||(i[r]=t[r])}return i}function M(t,e,r,n,i,o,s){try{var u=t[o](s),a=u.value}catch(t){r(t);return}u.done?e(a):Promise.resolve(a).then(n,i)}function N(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function s(t){M(o,n,i,s,u,"next",t)}function u(t){M(o,n,i,s,u,"throw",t)}s(void 0)}))}}function P(t){return function(t){if(Array.isArray(t))return D(t)}(t)||function(t){
if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return D(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return D(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function E(t,e){E=Object.setPrototypeOf||function(t,e){t.__proto__=e;return t};return E(t,e)}function x(t,e,r,i){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=t&&t.defaultProps,s=arguments.length-3;if(e||0===s||(e={children:void 0}),1===s)e.children=i;else if(s>1){
for(var u=new Array(s),a=0;a<s;a++)u[a]=arguments[a+3];e.children=u}if(e&&o)for(var l in o)void 0===e[l]&&(e[l]=o[l]);else e||(e=o||{});return{$$typeof:n,type:t,key:void 0===r?null:""+r,ref:null,props:e,_owner:null}}function H(t){var e=t.children;return x(k.default,{type:k.AlertTypes.ERROR},void 0,x("div",{className:O.default.flexCenter},void 0,x(b.default,{className:O.default.errorIcon,name:b.IconNames.WARNING_BOX}),e))}H.displayName="ErrorAlert";var W=x(C.default,{}),G=function(t){!function(t,e){t.prototype=Object.create(e.prototype);t.prototype.constructor=t;E(t,e)}(e,t);function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];(e=t.call.apply(t,[this].concat(n))||this).state={childSkuIds:e.getStoreListingChildSkuIds(),submitting:!1,error:null};e.handleListChange=function(t){e.setState({childSkuIds:t})};e.handleSelectChange=function(t){var r=t.value,n=e.state.childSkuIds;e.setState({childSkuIds:[].concat(P(n),[r])})};e.handleRemoveSKU=function(t){
var r=e.state.childSkuIds;e.setState({childSkuIds:r.filter((function(e){return t!==e}))})};e.handleSave=N(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=(r=e.props.storeListing)){t.next=3;break}throw new Error("Store listing was null at time of save.");case 3:e.setState({submitting:!0,error:null});t.prev=4;t.next=7;return a.updateStoreListing(r.id,{child_sku_ids:e.state.childSkuIds});case 7:t.next=12;break;case 9:t.prev=9;t.t0=t.catch(4);e.setState({error:t.t0.message});case 12:t.prev=12;e.setState({submitting:!1});return t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[4,9,12,15]])})));e.handleReset=function(){e.setState({childSkuIds:e.getStoreListingChildSkuIds(),error:null})};e.renderRow=function(t){var r=t.item,n=j(t,_),o=e.props.skus.find((function(t){return t.id===r}));if(null==o)throw new Error("Could not find SKU "+r);return i.createElement(c.default,R({},n,{sku:o}))};return e}
var r=e.prototype;r.componentDidMount=function(){var t=this.props,e=t.storeListing,r=t.skuId;null==e&&a.fetchStoreListings(r)};r.componentDidUpdate=function(t){var e=this.props.storeListing;null==t.storeListing&&null!=e&&this.setState({childSkuIds:this.getStoreListingChildSkuIds()})};r.getAvailableSkus=function(){var t=this.props,e=t.storeListing,r=t.skus,n=t.skuId,i=this.state.childSkuIds;return null==e?[]:r.filter((function(t){return![n].concat(P(i)).includes(t.id)}))};r.getOptions=function(){return this.getAvailableSkus().map((function(t){return{value:t.id,label:t.name.default}}))};r.getStoreListingChildSkuIds=function(){var t=this.props.storeListing;return null!=t&&null!=t.child_skus?t.child_skus.map((function(t){return t.id})):[]};r.renderAddChildSKU=function(){return x(h.default,{},void 0,x(I.default,{className:L.default.restrictedWidth,name:"addSku",options:this.getOptions(),onChange:this.handleSelectChange}))};r.renderChildSKUList=function(){var t=this.state.childSkuIds
;return x(h.default,{},void 0,x(p.default,{},void 0,w.Messages.ChildSKUs.CHILD_SKUS),x(v.default,{},void 0,w.Messages.ChildSKUs.CHILD_SKUS_DESCRIPTION),t.length>0?x(l.default,{getId:function(t){return t},onMove:this.handleListChange,onDelete:this.handleRemoveSKU,data:t,renderRow:this.renderRow}):x(d.default,{},void 0,w.Messages.ChildSKUs.NO_CHILD_SKUS))};r.render=function(){var t=this.props.storeListing,e=this.state,r=e.childSkuIds,n=e.submitting,i=e.error;if(null==t)return W;var s=!o.default.isEqual(r,this.getStoreListingChildSkuIds());return x("div",{},void 0,x(f.default,{},void 0,w.Messages.ChildSKUs.HEADING),x(S.default,{},void 0,w.Messages.ChildSKUs.SUBHEADING),null!=i?x(H,{},void 0,i):null,this.renderAddChildSKU(),this.renderChildSKUList(),x(g.default,{isVisible:s,actionCopy:w.Messages.Actions.PUBLISH_CHANGES,onReset:this.handleReset,onSave:this.handleSave,submitting:n}))};return e}(i.Component);G.displayName="ChildSKUs";var B=(0,
s.withRouter)(u.default.connectStores([y.default,m.default],(function(t){var e=t.match.params,r=e.id,n=e.skuId;return{skus:y.default.getSkus(r),skuId:n,storeListing:m.default.getCurrentStoreListing(n)}}))(G));e.default=B}}]);
//# sourceMappingURL=82dc66ae3469c918718e.js.map