"use strict";(this.webpackChunkdiscord_developers=this.webpackChunkdiscord_developers||[]).push([[2150],{49021:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var s=_(t);if(s&&s.has(e))return s.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var n=a?Object.getOwnPropertyDescriptor(e,o):null;n&&(n.get||n.set)?Object.defineProperty(r,o,n):r[o]=e[o]}r.default=e;s&&s.set(e,r);return r}(s(67294)),o=s(55558),n=s(49927),i=c(s(58758)),l=c(s(92974)),u=c(s(86750)),d=c(s(43973)),f=c(s(56216));function c(e){return e&&e.__esModule?e:{default:e}}function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,s=new WeakMap;return(_=function(e){return e?s:t})(e)}function p(e,t,s,a){
r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,n=arguments.length-3;t||0===n||(t={children:void 0});if(1===n)t.children=a;else if(n>1){for(var i=new Array(n),l=0;l<n;l++)i[l]=arguments[l+3];t.children=i}if(t&&o)for(var u in o)void 0===t[u]&&(t[u]=o[u]);else t||(t=o||{});return{$$typeof:r,type:e,key:void 0===s?null:""+s,ref:null,props:t,_owner:null}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e})(e,t)}var m=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;h(e,t)}(t,e);function t(){for(var t,s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];(t=e.call.apply(e,[this].concat(r))||this).state={value:t.props.defaultValue};t.handleSelectChange=function(e){var s=t.props.onChange,r=null!=e?e.value:null;t.setState({value:r},s)};t.getAssetUri=function(e){return(0,n.getStoreAssetImage)(t.props.match.params.id,e)||""};return t}
t.prototype.render=function(){var e=this.props,t=e.fieldLabel,s=e.fieldDescription,r=e.fieldMetadata,a=e.fieldName,o=e.isLastSection,n=e.options,c=this.state.value;return p(u.default,{className:f.default.assetFieldWrapper,isFlush:o},void 0,p(l.default,{},void 0,t,p("span",{className:f.default.assetMetadata},void 0," — ",r)),p(d.default,{},void 0,s),p(i.default,{className:f.default.assetSelect,assets:n,getAssetUri:this.getAssetUri,onChange:this.handleSelectChange,selectedAssetId:c,name:a,clearable:!0,restrictWidth:!0}))};return t}(a.Component);m.displayName="PromotionalAssetSection";var A=(0,o.withRouter)(m);t.default=A},93557:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r,a=S(s(67294)),o=O(s(36211)),n=S(s(30887)),i=S(s(21868)),l=O(s(6118)),u=O(s(76806)),d=s(19290),f=O(s(3319)),c=O(s(41908)),_=O(s(31055)),p=O(s(81061)),h=O(s(86750)),m=O(s(58350)),A=O(s(69245)),g=O(s(49021)),E=s(70348),v=s(34596);function O(e){return e&&e.__esModule?e:{default:e}}
function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,s=new WeakMap;return(b=function(e){return e?s:t})(e)}function S(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var s=b(t);if(s&&s.has(e))return s.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var n=a?Object.getOwnPropertyDescriptor(e,o):null;n&&(n.get||n.set)?Object.defineProperty(r,o,n):r[o]=e[o]}r.default=e;s&&s.set(e,r);return r}function M(e,t,s,a){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,n=arguments.length-3;t||0===n||(t={children:void 0});if(1===n)t.children=a;else if(n>1){for(var i=new Array(n),l=0;l<n;l++)i[l]=arguments[l+3];t.children=i}if(t&&o)for(var u in o)void 0===t[u]&&(t[u]=o[u]);else t||(t=o||{});return{$$typeof:r,type:e,key:void 0===s?null:""+s,ref:null,props:t,_owner:null
}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e})(e,t)}var P=M(f.default,{}),R=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;y(e,t)}(t,e);function t(){for(var t,s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];(t=e.call.apply(e,[this].concat(r))||this).state={hasUnsavedChanges:!1,isSubmitting:!1,isLoading:!0,resetNumber:0,hasSubmitted:!1,errorMessage:null};t.handleFormChange=function(){t.state.hasUnsavedChanges||t.setState({hasUnsavedChanges:!0})};t.handleFormSubmit=function(e){var s=t.props.storeListing,r={preview_video_asset_id:e.preview_video||null,thumbnail_asset_id:e.thumbnail||null,header_background_asset_id:e.header_background||null,header_logo_dark_theme_asset_id:e.header_logo_dark_theme||null,header_logo_light_theme_asset_id:e.header_logo_light_theme||null,box_art_asset_id:e.box_art||null,hero_background_asset_id:e.hero_background||null,hero_video_asset_id:e.hero_video||null}
;t.setState({isSubmitting:!0},(function(){i.updateStoreListing(s.id,r).then((function(){t.setState((function(e){return{isSubmitting:!1,hasSubmitted:!0,hasUnsavedChanges:!1,resetNumber:e.resetNumber+1}}))})).catch((function(e){t.setState((function(t){return{isSubmitting:!1,errorMessage:(0,d.getMessageFromAPIError)(e,v.Messages.Errors.ERROR_SAVING_PROMOTIONAL_ASSETS.format()),resetNumber:t.resetNumber+1}}))}))}))};t.handleFormReset=function(){t.setState((function(e){return{resetNumber:e.resetNumber+1,hasUnsavedChanges:!1,hasSubmitted:!1,errorMessage:null}}))};return t}var s=t.prototype;s.componentDidMount=function(){var e=this,t=this.props.match.params.id;n.fetchStoreAssets(t).then((function(){e.setState({isLoading:!1})})).catch((function(){e.setState({isLoading:!1,errorMessage:v.Messages.Errors.ERROR_LOADING_ASSETS})}))};s.renderFormStatus=function(){var e=this.state,t=e.hasSubmitted,s=e.errorMessage;return null!=s?M(_.default,{type:_.default.Types.ERROR},void 0,s):t?M(_.default,{
type:_.default.Types.SUCCESS},void 0,v.Messages.Alerts.SUCCESS_CHANGES_SAVED):null};s.renderAssetSections=function(){var e=this,t=this.props,s=t.storeAssets,r=t.storeListing,a=this.state.isLoading;if(null==r||a)return null;var o=s.filter((function(e){return e.mime_type.startsWith("video")})),n=s.filter((function(e){return e.mime_type.startsWith("image")})),i={preview_video:{label:v.Messages.PromotionalAssets.PREVIEW_VIDEO,description:v.Messages.PromotionalAssets.PREVIEW_VIDEO_DESCRIPTION,metadata:v.Messages.PromotionalAssets.PREVIEW_VIDEO_METADATA},thumbnail:{label:v.Messages.PromotionalAssets.THUMBNAIL,description:v.Messages.PromotionalAssets.THUMBNAIL_DESCRIPTION,metadata:v.Messages.PromotionalAssets.THUMBNAIL_METADATA},header_background:{label:v.Messages.PromotionalAssets.HEADER_BACKGROUND,description:v.Messages.PromotionalAssets.HEADER_BACKGROUND_DESCRIPTION,metadata:v.Messages.PromotionalAssets.HEADER_BACKGROUND_METADATA},header_logo_dark_theme:{
label:v.Messages.PromotionalAssets.HEADER_LOGO_DARK_THEME,description:v.Messages.PromotionalAssets.HEADER_LOGO_DARK_THEME_DESCRIPTION,metadata:v.Messages.PromotionalAssets.HEADER_LOGO_DARK_THEME_METADATA},header_logo_light_theme:{label:v.Messages.PromotionalAssets.HEADER_LOGO_LIGHT_THEME,description:v.Messages.PromotionalAssets.HEADER_LOGO_LIGHT_THEME_DESCRIPTION,metadata:v.Messages.PromotionalAssets.HEADER_LOGO_LIGHT_THEME_METADATA},box_art:{label:v.Messages.PromotionalAssets.BOX_ART,description:v.Messages.PromotionalAssets.BOX_ART_DESCRIPTION,metadata:v.Messages.PromotionalAssets.BOX_ART_METADATA},hero_background:{label:v.Messages.PromotionalAssets.HERO_BACKGROUND,description:v.Messages.PromotionalAssets.HERO_BACKGROUND_DESCRIPTION,metadata:v.Messages.PromotionalAssets.HERO_BACKGROUND_METADATA},hero_video:{label:v.Messages.PromotionalAssets.HERO_VIDEO,description:v.Messages.PromotionalAssets.HERO_VIDEO_DESCRIPTION,metadata:v.Messages.PromotionalAssets.HERO_VIDEO_METADATA}
},l=Object.keys(i);return l.sort().map((function(t,s){var a=r[t],u=null!=a?a.id:null,d=t.includes("video")?o:n,f=i[t];return M(g.default,{fieldName:t,fieldLabel:f.label,fieldDescription:f.description,fieldMetadata:f.metadata,isLastSection:s===l.length-1,options:d,defaultValue:u,onChange:e.handleFormChange},t)}))};s.render=function(){var e=this.state,t=e.hasUnsavedChanges,s=e.isSubmitting,r=e.resetNumber;return M(c.default,{onSubmit:this.handleFormSubmit},void 0,M(h.default,{},void 0,M(p.default,{},void 0,v.Messages.PromotionalAssets.HEADING),M(m.default,{isFlush:!0},void 0,v.Messages.PromotionalAssets.SUBHEADING.format({supportUrl:E.Links.STORE_ASSETS_SUPPORT})),this.renderFormStatus(),P),M(a.Fragment,{},r,this.renderAssetSections()),M(A.default,{isVisible:t,actionCopy:v.Messages.Actions.PUBLISH_CHANGES,onReset:this.handleFormReset,submitting:s}))};return t}(a.Component);R.displayName="PromotionalAssets";var D=o.default.connectStores([l.default,u.default],(function(e){
var t=e.match.params,s=t.id,r=t.skuId;return{storeAssets:l.default.getStoreAssets(s),storeListing:u.default.getCurrentStoreListing(r)}}))(R);t.default=D}}]);
//# sourceMappingURL=3d846893f2b0770857e0.js.map