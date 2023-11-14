"use strict";(this.webpackChunkdiscord_developers=this.webpackChunkdiscord_developers||[]).push([[9795],{22537:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,o=y(r(67294)),a=h(r(89446)),u=y(r(84455)),i=h(r(74257)),s=h(r(92974)),l=h(r(86750)),c=h(r(86460)),f=r(70348),p=r(34596),d=h(r(84509));function h(e){return e&&e.__esModule?e:{default:e}}function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(g=function(e){return e?r:t})(e)}function y(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=g(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}n.default=e;r&&r.set(e,n);return n}function v(e,t,r,o){
n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,u=arguments.length-3;t||0===u||(t={children:void 0});if(1===u)t.children=o;else if(u>1){for(var i=new Array(u),s=0;s<u;s++)i[s]=arguments[s+3];t.children=i}if(t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e})(e,t)}var S=function(e){var t;if(null==(null===(t=e.sku)||void 0===t?void 0:t.content_ratings)||null==e.sku.content_ratings[e.agency])return{rating:null,descriptors:[],ratingError:null};var r=e.sku.content_ratings[e.agency],n=r.rating,o=r.descriptors;return{descriptors:Array.from(o),rating:n,
ratingError:null}},O=function(e,t){return null==e&&t.length>0?p.Messages.Forms.REQUIRED_FIELD:null},C=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;m(e,t)}(t,e);function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];(t=e.call.apply(e,[this].concat(n))||this).state=b({},S(t.props));t.handleCheckboxClick=function(e,r){var n=t.props.descriptorMap;if(null!=r){var o=n[r];t.setState((function(e){var t=e.descriptors,r=e.rating,n=t.includes(o)?t.filter((function(e){return e!==o})):[].concat(t,[o]);return{descriptors:n,ratingError:O(r,n)}}))}};t.handleSelectChange=function(e){var r=t.props.onChange;t.setState((function(t){var r=t.descriptors,n=null==e?null:e.value;return{rating:n,ratingError:O(n,r)}}));r()};t.renderCheckboxes=function(){var e=t.props.descriptorMap,r=t.state.descriptors;return Object.keys(e).map((function(n){return v(u.GridChild,{columnSpread:3,columnSpreadMedium:4,columnSpreadSmallMedium:6,
columnSpreadSmall:6,columnSpreadExtraSmall:12},n,v(a.default,{onChange:t.handleCheckboxClick,value:r.includes(e[n]),name:n,type:a.default.Types.INVERTED},void 0,p.Messages.ContentDescriptors[n]))}))};t.renderSelectOptions=function(){var e=t.props.agency,r=f.Ratings[e];return Object.keys(r).map((function(e){return{label:p.Messages.SkuRatings[e],value:r[e]}}))};t.resetRatings=function(){t.setState(b({},S(t.props)))};t.getValuesForAPI=function(){var e=t.props.agency,r=t.state,n=r.rating,o=r.descriptors;if(null!=n||o.length>0){var a;return(a={})[e]={rating:n,descriptors:o},a}return null};return t}t.prototype.render=function(){var e=this.props,t=e.heading,r=e.isFlush,n=this.state,o=n.descriptors,a=n.rating,f=n.ratingError;return v(l.default,{isFlush:r},void 0,v(c.default,{},void 0,t),v(u.default,{className:d.default.ratingContentGrid},void 0,v(u.GridSection,{},void 0,v(u.GridChild,{columnSpread:4,columnSpreadSmallMedium:6,columnSpreadSmall:8,columnSpreadExtraSmall:10},void 0,v(s.default,{
isRequired:o.length>0},void 0,p.Messages.SkuRatings.RATING),v(i.default,{searchable:!1,clearable:!0,value:a,isHidden:!1,options:this.renderSelectOptions(),onChange:this.handleSelectChange,error:f}))),v(u.GridSection,{},void 0,v(u.GridChild,{columnSpread:12},void 0,v(s.default,{},void 0,p.Messages.SkuRatings.CONTENT_DESCRIPTORS)),this.renderCheckboxes())))};return t}(o.Component);t.default=C;C.displayName="RatingSection"},8054:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,o=S(r(67294)),a=r(55558),u=b(r(36211)),i=S(r(18760)),s=b(r(62441)),l=b(r(41908)),c=b(r(31055)),f=b(r(81061)),p=b(r(86750)),d=b(r(58350)),h=b(r(69245)),g=b(r(22537)),y=r(70348),v=r(34596);function b(e){return e&&e.__esModule?e:{default:e}}function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}function S(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e}
;var r=m(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}n.default=e;r&&r.set(e,n);return n}function O(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,u=arguments.length-3;t||0===u||(t={children:void 0});if(1===u)t.children=o;else if(u>1){for(var i=new Array(u),s=0;s<u;s++)i[s]=arguments[s+3];t.children=i}if(t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function R(e,t){
return(R=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e})(e,t)}var k={hasUnsavedChanges:!1,submitting:!1,hasSubmitted:!1,hasSubmissionError:!1},_=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;R(e,t)}(t,e);function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];(t=e.call.apply(e,[this].concat(n))||this).esrbRef=o.createRef();t.pegiRef=o.createRef();t.state=C({},k);t.handleFormChange=function(){t.state.hasUnsavedChanges||t.setState({hasUnsavedChanges:!0})};t.handleFormSubmit=function(){var e=t.props.match.params,r=e.id,n=e.skuId;if(null!=t.esrbRef.current){var o=t.esrbRef.current.getValuesForAPI();if(null!=t.pegiRef.current){var a={content_ratings:C({},o,{},t.pegiRef.current.getValuesForAPI())};t.setState({submitting:!0},(function(){i.updateSku(r,n,a).then((function(){t.setState({submitting:!1,hasSubmitted:!0,hasUnsavedChanges:!1,hasSubmissionError:!1})})).catch((function(){t.setState({
submitting:!1,hasSubmissionError:!0,hasSubmitted:!1})}))}))}}};t.handleReset=function(){t.setState(C({},k));null!=t.esrbRef.current&&t.esrbRef.current.resetRatings();null!=t.pegiRef.current&&t.pegiRef.current.resetRatings()};t.renderFormStatus=function(){var e=t.state,r=e.hasSubmitted;return e.hasSubmissionError?O(c.default,{type:c.default.Types.ERROR},void 0,v.Messages.Alerts.ERROR):r?O(c.default,{type:c.default.Types.SUCCESS},void 0,v.Messages.Alerts.SUCCESS_CHANGES_SAVED):null};return t}t.prototype.render=function(){var e=this.props.sku,t=this.state,r=t.hasUnsavedChanges,n=t.submitting,a=this.renderFormStatus();return O(o.Fragment,{},void 0,O(p.default,{},void 0,O(f.default,{},void 0,v.Messages.SkuRatings.RATINGS),O(d.default,{isFlush:null==a},void 0,v.Messages.SkuRatings.RATINGS_SUBHEADING),a),O(l.default,{onChange:this.handleFormChange,onSubmit:this.handleFormSubmit},void 0,o.createElement(g.default,{ref:this.esrbRef,agency:y.ContentRatingAgencies.ESRB,
heading:v.Messages.SkuRatings.ESRB_RATING,descriptorMap:y.ESRBContentDescriptors,onChange:this.handleFormChange,sku:e}),o.createElement(g.default,{isFlush:!0,ref:this.pegiRef,agency:y.ContentRatingAgencies.PEGI,heading:v.Messages.SkuRatings.PEGI_RATING,descriptorMap:y.PEGIContentDescriptors,onChange:this.handleFormChange,sku:e}),O(h.default,{isVisible:r,actionCopy:v.Messages.Actions.PUBLISH_CHANGES,onReset:this.handleReset,submitting:n})))};return t}(o.Component);_.displayName="SkuRatings";var E=(0,a.withRouter)(u.default.connectStores([s.default],(function(e){return{sku:s.default.getSku(e.match.params.skuId)}}))(_));t.default=E},31055:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n=c(r(67294)),o=s(r(94184)),a=c(r(34704)),u=s(r(88002)),i=["className"];function s(e){return e&&e.__esModule?e:{default:e}}function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}function c(e,t){
if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}n.default=e;r&&r.set(e,n);return n}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e})(e,t)}var d=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;p(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}t.prototype.render=function(){var e=this.props,t=e.className,r=function(e,t){if(null==e)return{}
;var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++){r=a[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}(e,i);return n.createElement(a.default,f({},r,{className:(0,o.default)(u.default.formStatusAlert,t)}))};return t}(n.Component);t.default=d;d.displayName="FormStatusAlert";d.Types=a.AlertTypes},89446:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}n.default=e;r&&r.set(e,n);return n}(r(67294)),a=f(r(94184)),u=r(35234),i=r(73336),s=f(r(9378)),l=r(70348),c=f(r(67705));function f(e){return e&&e.__esModule?e:{default:e}}function p(e){
if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function d(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,u=arguments.length-3;t||0===u||(t={children:void 0});if(1===u)t.children=o;else if(u>1){for(var i=new Array(u),s=0;s<u;s++)i[s]=arguments[s+3];t.children=i}if(t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e})(e,t)}var y={DEFAULT:"default",INVERTED:"inverted",GHOST:"ghost"},v={BOX:c.default.box,ROUND:c.default.round},b=function(e){!function(e,t){
e.prototype=Object.create(t.prototype);e.prototype.constructor=e;g(e,t)}(t,e);function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];(t=e.call.apply(e,[this].concat(n))||this).state={focused:!1};t.handleFocus=function(){t.setState({focused:!0})};t.handleBlur=function(){t.setState({focused:!1})};t.handleChange=function(e){var r=t.props,n=r.onChange,o=r.name;null!=n&&n(e.currentTarget.checked,o)};return t}var r=t.prototype;r.getInputMode=function(){return this.props.disabled?"disabled":this.props.readOnly?"readonly":"default"};r.getStyle=function(){var e=this.props,t=e.value,r=e.type,n=e.color,o=this.props.style||{};if(!1===t)return o;o=h({},o);switch(r){case y.DEFAULT:o.borderColor=n;break;case y.GHOST:o.borderColor=(0,u.hex2rgb)(n,.15);o.backgroundColor=(0,u.hex2rgb)(n,.15);break;case y.INVERTED:o.backgroundColor=n;o.borderColor=n}return o};r.getColor=function(){var e=this.props,t=e.value,r=e.type,n=e.color,o=r===y.INVERTED?l.Colors.WHITE:n
;r===y.INVERTED&&n===l.Colors.WHITE&&(o=l.Colors.BLACK);return t?o:"transparent"};r.render=function(){var e,t=this.state.focused,r=this.props,n=r.disabled,o=r.readOnly,u=r.value,f=r.shape,p=r.className,g=r.children,y=r.size;return d("label",{className:(0,a.default)((0,i.getClass)(c.default,"checkboxWrapper",n?"disabled":""),p),style:{height:y}},void 0,d("input",{className:(0,i.getClass)(c.default,"input",this.getInputMode()),type:"checkbox",onChange:n||o?l.NOOP:this.handleChange,onFocus:n||o?l.NOOP:this.handleFocus,onBlur:this.handleBlur,checked:u,style:{width:y,height:y}}),d("div",{className:(0,a.default)(c.default.checkbox,f,(e={},e[c.default.checked]=u,e[c.default.focused]=t,e)),style:h({width:y,height:y},this.getStyle())},void 0,d(s.default,{name:s.default.Names.CHECKMARK,width:18,height:18,color:this.getColor()})),g?d("div",{className:c.default.label,style:{lineHeight:y+"px"}},void 0,g):null)};return t}(o.PureComponent);b.displayName="Checkbox";b.Types=y;b.Shapes=v
;b.defaultProps={size:24,disabled:!1,readOnly:!1,value:!1,type:y.DEFAULT,color:l.Colors.WHITE,shape:v.BOX,onChange:l.NOOP};var m=b;t.default=m}}]);
//# sourceMappingURL=0d787b44cd36b8a54437.js.map