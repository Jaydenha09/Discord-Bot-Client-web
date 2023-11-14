(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{1434:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDateValid=void 0;var n,r=(n=a(1484))&&n.__esModule?n:{default:n};t.isDateValid=function(e){return null!=e&&(0,r.default)(e)&&!isNaN(e.valueOf())}},1444:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=_(a(1)),l=g(a(5)),o=g(a(1436)),i=g(a(1423)),u=_(a(60)),s=g(a(98)),d=g(a(421)),f=a(1434),c=g(a(56)),p=g(a(1445)),m=g(a(185)),v=_(a(182)),h=g(a(411)),S=a(3),y=g(a(1288));function g(e){return e&&e.__esModule?e:{default:e}}function b(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return b=function(){return e},e}function _(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=b();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var l=n?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(a,r,l):a[r]=e[r]}return a.default=e,t&&t.set(e,a),a}function k(e,t,a,r){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var i=new Array(o),u=0;u<o;u++)i[u]=arguments[u+3];t.children=i}if(t&&l)for(var s in l)void 0===t[s]&&(t[s]=l[s]);else t||(t=l||{});return{$$typeof:n,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function D(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var E=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={inputResetKey:0,isCalendarPickerOpen:!1,calendarRight:null,calendarTop:null,value:t.props.defaultValue},t.closeCalendarPicker=function(){t.setState({isCalendarPickerOpen:!1})},t.getCurrentValue=function(){var e=t.state.value,a=t.props.dateFormat;return null!=e&&(0,f.isDateValid)(e)?(0,o.default)(e,a):null},t.handleDateChange=function(e){t.closeCalendarPicker();var a=t.props,n=a.onChange,r=a.name;t.setState(function(t){return{value:e,inputResetKey:t.inputResetKey+1}},function(){null!=n&&n(e,r)})},t.handleInputBlur=function(e){var a=t.state.value,n=e.currentTarget.value,r=(0,i.default)(n);!(0,f.isDateValid)(r)||null!=a&&r.valueOf()===a.valueOf()||t.setState(function(e){return{value:r,inputResetKey:e.inputResetKey+1}},function(){var e=t.props,a=e.onChange,n=e.name;null!=a&&a(r,n)})},t.toggleCalendarVisibility=function(e){var a=e.currentTarget.getBoundingClientRect(),n=a.bottom,r=a.right,l=window.innerWidth;t.setState(function(e){return{isCalendarPickerOpen:!e.isCalendarPickerOpen,calendarRight:l-r,calendarTop:n}})},t}D(t,e);var a=t.prototype;return a.renderCalendarPicker=function(){var e=this.state,t=e.calendarRight,a=e.calendarTop,n=e.isCalendarPickerOpen,r=e.value,l=this.props,o=l.minDate,i=l.maxDate,u=l.endDate,s=l.filterDate,d=l.startDate,f=l.selectsEnd,c=l.selectsStart,p=l.isModalInput,m=l.showMonthYearPicker;return n?k(O,{value:null!=r?r:void 0,onClickOutside:this.closeCalendarPicker,onSelect:this.handleDateChange,minDate:o,maxDate:i,endDate:u,filterDate:s,startDate:d,selectsEnd:f,selectsStart:c,right:t,top:a,isModalInput:p,showMonthYearPicker:m}):null},a.render=function(){var e=this.props.name,t=this.state.inputResetKey;return k(m.default,{className:y.default.wrapper},void 0,k(h.default,{inputClassName:y.default.input,name:e,onBlur:this.handleInputBlur,defaultValue:this.getCurrentValue()},t),k(c.default,{className:y.default.toggleButton,color:c.default.Color.TRANSPARENT,height:c.default.Height.AUTO,onMouseDown:this.toggleCalendarVisibility},void 0,k(v.default,{className:y.default.calendarIcon,name:v.IconNames.CALENDAR})),u.createPortal(k(d.default,{component:"div",transitionAppear:!1},void 0,this.renderCalendarPicker()),window.document.body))},t}(r.Component);t.default=E,E.displayName="DateInput",E.defaultProps={dateFormat:S.DATE_FORMAT,isModalInput:!1};var O=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={menuAnimation:new s.default.Value(0)},t}D(t,e);var a=t.prototype;return a.componentWillEnter=function(e){var t=this.state.menuAnimation;s.default.timing(t,{toValue:1,duration:150}).start(e)},a.componentWillLeave=function(e){var t=this.state.menuAnimation;s.default.timing(t,{toValue:0,duration:150}).start(e)},a.render=function(){var e,t=this.props,a=t.value,n=t.onClickOutside,r=t.onSelect,o=t.minDate,i=t.maxDate,u=t.endDate,d=t.filterDate,f=t.startDate,c=t.selectsEnd,m=t.selectsStart,v=t.top,h=t.right,S=t.isModalInput,g=t.showMonthYearPicker,b=this.state.menuAnimation,_=b.interpolate({inputRange:[0,1],outputRange:["-10px","0px"]});return k(s.default.div,{className:(0,l.default)(y.default.calendarPicker,(e={},e[y.default.calendarPickerModal]=S,e)),style:{opacity:b,right:h,top:v,transform:[{translateY:_}]}},void 0,k(p.default,{minDate:o,maxDate:i,endDate:u,filterDate:d,startDate:f,selectsEnd:c,selectsStart:m,value:a,onSelect:r,onClickOutside:n,showMonthYearPicker:g}))},t}(r.Component);O.displayName="AnimatedCalendarPicker"},1445:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var l=n?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(a,r,l):a[r]=e[r]}a.default=e,t&&t.set(e,a);return a}(a(1)),r=i(a(1485));a(1286);var l,o=i(a(1287));function i(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function s(e,t,a,n){l||(l="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=n;else if(o>1){for(var i=new Array(o),u=0;u<o;u++)i[u]=arguments[u+3];t.children=i}if(t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});return{$$typeof:l,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}var d=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.onClickOutside,a=e.onSelect,n=e.locale,l=e.value,i=e.endDate,u=e.filterDate,d=e.startDate,f=e.minDate,c=e.maxDate,p=e.selectsEnd,m=e.selectsStart,v=e.showMonthYearPicker;return s("div",{className:o.default.calendarPicker},void 0,s(r.default,{fixedHeight:!0,inline:!0,selected:l,locale:n,onClickOutside:t,onSelect:a,onChange:a,endDate:i,filterDate:u,startDate:d,minDate:f,maxDate:c,selectsEnd:p,selectsStart:m,showMonthYearPicker:v}))},n}(n.Component);d.displayName="CalendarPicker",d.defaultProps={value:new Date};var f=d;t.default=f},1456:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;!function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var l=n?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(a,r,l):a[r]=e[r]}a.default=e,t&&t.set(e,a)}(a(1));var n,r,l=(n=a(29))&&n.__esModule?n:{default:n};function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function i(e,t,a,n){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=n;else if(o>1){for(var i=new Array(o),u=0;u<o;u++)i[u]=arguments[u+3];t.children=i}if(t&&l)for(var s in l)void 0===t[s]&&(t[s]=l[s]);else t||(t=l||{});return{$$typeof:r,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}var u=function(e){var t=e.children,a=e.className,n=e.tag,r=void 0===n?"label":n;return i(l.default,{className:a,color:l.default.Colors.PRIMARY_300,size:l.default.Sizes.MEDIUM,tag:r},void 0,t)};u.displayName="FormValue";var s=u;t.default=s},1516:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;!function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var l=n?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(a,r,l):a[r]=e[r]}a.default=e,t&&t.set(e,a)}(a(1));var n,r=i(a(5)),l=a(74),o=i(a(1308));function i(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function s(e,t,a,r){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var i=new Array(o),u=0;u<o;u++)i[u]=arguments[u+3];t.children=i}if(t&&l)for(var s in l)void 0===t[s]&&(t[s]=l[s]);else t||(t=l||{});return{$$typeof:n,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var f={DEFAULT:o.default.themeDefault,CLEAR:o.default.themeClear},c={DEFAULT:o.default.sizeDefault,MINI:o.default.sizeMini},p="enabled",m="disabled",v=function(e){var t=e.id,a=e.onChange,n=e.value,i=e.defaultValue,u=e.fill,v=e.theme,h=void 0===v?f.DEFAULT:v,S=e.disabled,y=e.className,g=e.size,b=void 0===g?c.DEFAULT:g,_=e.style,k=e.name,D=S?m:p;return null!=u&&n&&(_=d({},_,{backgroundColor:u})),s("div",{className:(0,r.default)(y,(0,l.getClass)(o.default,"switch",D),b,h),style:_},void 0,s("input",{id:t,className:(0,r.default)(o.default.input,(0,l.getClass)(o.default,"checkbox",D)),type:"checkbox",disabled:S,onChange:a,checked:n,defaultChecked:i,name:k}),s("div",{className:o.default.indicator}))};v.displayName="Switch",v.Themes=f,v.Sizes=c;var h=v;t.default=h},1795:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=V(a(1)),l=F(a(1423)),o=a(73),i=F(a(12)),u=V(a(1453)),s=V(a(1460)),d=F(a(128)),f=F(a(186)),c=F(a(1476)),p=F(a(1444)),m=V(a(408)),v=V(a(182)),h=F(a(183)),S=F(a(1516)),y=F(a(411)),g=F(a(1430)),b=a(194),_=F(a(414)),k=F(a(409)),D=F(a(1417)),E=F(a(1456)),O=a(1441),A=F(a(1499)),I=F(a(1796)),C=F(a(412)),M=F(a(410)),P=F(a(415)),T=F(a(1425)),N=F(a(413)),w=F(a(416)),L=a(3),R=a(18),j=F(a(1375));function F(e){return e&&e.__esModule?e:{default:e}}function U(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return U=function(){return e},e}function V(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=U();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var l=n?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(a,r,l):a[r]=e[r]}return a.default=e,t&&t.set(e,a),a}function G(e,t,a,r){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var i=new Array(o),u=0;u<o;u++)i[u]=arguments[u+3];t.children=i}if(t&&l)for(var s in l)void 0===t[s]&&(t[s]=l[s]);else t||(t=l||{});return{$$typeof:n,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}var x=G(S.default,{value:!1,id:"availableDisabled",disabled:!0}),B=G(A.default,{}),K=G(I.default,{name:"legal_notice",maxLength:L.MAXIMUM_SKU_LEGAL_NOTICE_LENGTH}),H=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).formRef=r.createRef(),t.state={appIcon:null,hasSubmitted:!1,hasSubmissionError:!1,hasUnsavedChanges:!1,isSubmitting:!1,resetKey:0,selectedAccessType:t.props.sku.access_type,selectedDependentSkuId:t.props.sku.dependent_sku_id},t.setDefaultTextAreaValue=function(){var e=t.props,a=e.setLocalizedFieldValues,n=e.sku;null!=n.legal_notice&&a("legal_notice",n.legal_notice)},t.handleFormChange=function(){var e=t.state,a=e.hasSubmitted,n=e.hasUnsavedChanges;!a&&n||t.setState({hasSubmitted:!1,hasUnsavedChanges:!0})},t.handleFormReset=function(){var e=t.props.sku;null!=t.formRef.current&&t.formRef.current.resetForm(),t.setDefaultTextAreaValue(),t.setState(function(t){return{hasSubmissionError:!1,hasSubmitted:!1,hasUnsavedChanges:!1,selectedAccessType:e.access_type,resetKey:t.resetKey+1}})},t.handleFormSubmit=function(e){var a=t.props.match.params,n=a.id,r=a.skuId,l=t.props,o=l.getLocalizedFieldValues,i=l.sku,d=l.storeListing,f=t.state,c=f.selectedDependentSkuId,p=f.selectedAccessType,m={name:{default:e.name},release_date:e.release_date,dependent_sku_id:c,legal_notice:o("legal_notice")};null!=p&&(m.access_type=p),null!=e.available&&(m.flags=e.available?(0,b.addFlag)(i.flags,L.SkuFlags.AVAILABLE):(0,b.removeFlag)(i.flags,L.SkuFlags.AVAILABLE));var v=e.published;delete e.published,t.setState({isSubmitting:!0},function(){u.updateSku(n,r,m).then(function(){return null==d||d.published===v?Promise.resolve():s.updateStoreListing(d.id,{published:v})}).then(function(){t.setState({isSubmitting:!1,hasSubmissionError:!1,hasSubmitted:!0,hasUnsavedChanges:!1})}).catch(function(){t.setState({isSubmitting:!1,hasSubmissionError:!0,hasSubmitted:!1})})})},t.handleAccessTypeChange=function(e){t.setState({selectedAccessType:e.value},t.handleFormChange)},t.handleDependentSkuChange=function(e){t.setState({selectedDependentSkuId:null!=e?e.value:null},t.handleFormChange)},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){this.setDefaultTextAreaValue()},o.getAccessTypeOptions=function(){var e=(0,L.getSkuAccessTypeLabels)();return Object.keys(L.SkuAccessTypes).map(function(t){var a=L.SkuAccessTypes[t];return{label:e[a],value:a}})},o.getDependentSkuOptions=function(){var e=this.props,t=e.sku,a=e.skus;return null==a?[]:a.filter(function(e){return e.id!==t.id}).map(function(e){return{label:e.name.default,value:e.id}})},o.renderAvailabilityToggle=function(){var e=this.state.resetKey,t=this.props,a=t.sku,n=t.application;return null==n||n.store_application_state!==L.StoreApplicationApprovalStates.APPROVED?G(r.Fragment,{},void 0,G("div",{className:j.default.labelWithIcon},void 0,G(k.default,{},void 0,R.Messages.SkuInformation.AVAILABLE),G(g.default,{text:R.Messages.SkuInformation.DISABLED_UNTIL_APPROVED,position:g.default.Positions.TOP},void 0,G(v.default,{className:j.default.questionIcon,name:v.IconNames.QUESTION_MARK_CIRCLE}))),x):G(r.Fragment,{},void 0,G(k.default,{},void 0,R.Messages.SkuInformation.AVAILABLE),G(S.default,{defaultValue:(0,b.hasFlag)(a.flags,L.SkuFlags.AVAILABLE),id:"available",name:"available"},e))},o.renderPublishedToggle=function(){var e=this.state.resetKey,t=this.props.storeListing;return null==t?null:G(m.GridChild,{columnSpread:3,columnSpreadExtraSmall:12,columnSpreadSmall:12},void 0,G("div",{className:j.default.labelWithIcon},void 0,G(k.default,{},void 0,R.Messages.SkuInformation.PUBLISHED),G(g.default,{text:R.Messages.SkuInformation.PUBLISHED_INFO,position:g.default.Positions.TOP},void 0,G(v.default,{className:j.default.questionIcon,name:v.IconNames.QUESTION_MARK_CIRCLE}))),G(S.default,{defaultValue:t.published,id:"published",name:"published"},e))},o.renderFormStatus=function(){var e=this.state,t=e.hasSubmissionError,a=e.hasSubmitted;return t?G(D.default,{type:D.default.Types.ERROR},void 0,R.Messages.SkuInformation.SUBMISSION_ERROR):a?G(D.default,{type:D.default.Types.SUCCESS},void 0,R.Messages.Alerts.SUCCESS_CHANGES_SAVED):null},o.renderSkuDistributionTypes=function(){var e=this.props.sku;return(0,b.hasFlag)(e.flags,L.SkuFlags.PREMIUM_AND_DISTRIBUTION)?R.Messages.SkuInformation.PREMIUM_AND_DISTRIBUTION:e.premium?R.Messages.SkuInformation.PREMIUM:R.Messages.SkuInformation.DISTRIBUTION},o.render=function(){var e=this.props.sku,t=this.state,a=t.selectedAccessType,n=t.selectedDependentSkuId,o=t.hasUnsavedChanges,i=t.resetKey,u=t.isSubmitting,s=(0,L.getSkuTypeLabels)();return r.createElement(_.default,{onChange:this.handleFormChange,onSubmit:this.handleFormSubmit,ref:this.formRef},G(M.default,{},void 0,G(C.default,{},void 0,R.Messages.SkuInformation.HEADING),G(N.default,{isFlush:!0},void 0,R.Messages.SkuInformation.SUBHEADING),this.renderFormStatus()),G(M.default,{},void 0,G(m.default,{},void 0,G(m.GridSection,{},void 0,G(m.GridChild,{columnSpread:12},void 0,G(k.default,{isRequired:!0},void 0,R.Messages.SkuInformation.TITLE),G(y.default,{maxLength:L.MAXIMUM_SKU_NAME_LENGTH,name:"name",defaultValue:e.name.default}))),G(m.GridSection,{},void 0,G(m.GridChild,{columnSpread:6,columnSpreadExtraSmall:12,columnSpreadSmall:12},void 0,G(k.default,{isRequired:!0},void 0,R.Messages.SkuInformation.RELEASE_TYPE),G(h.default,{clearable:!1,searchable:!1,onChange:this.handleAccessTypeChange,options:this.getAccessTypeOptions(),value:a})),G(m.GridChild,{columnSpread:6,columnSpreadExtraSmall:12,columnSpreadSmall:12},void 0,G(k.default,{},void 0,R.Messages.SkuInformation.RELEASE_DATE.format({dateFormat:L.DATE_FORMAT.toUpperCase()})),G(p.default,{name:"release_date",dateFormat:L.DATE_FORMAT,defaultValue:null!=e.release_date?(0,l.default)(e.release_date):null,onChange:this.handleFormChange},i))),G(m.GridSection,{},void 0,G(m.GridChild,{columnSpread:3,columnSpreadExtraSmall:12,columnSpreadSmall:12},void 0,this.renderAvailabilityToggle()),this.renderPublishedToggle(),G(m.GridChild,{columnSpread:3,columnSpreadExtraSmall:12,columnSpreadSmall:12},void 0,G(k.default,{},void 0,R.Messages.SkuInformation.SKU_TYPE),G(E.default,{},void 0,s[e.type])),G(m.GridChild,{columnSpread:3,columnSpreadExtraSmall:12,columnSpreadSmall:12},void 0,G(k.default,{},void 0,R.Messages.SkuInformation.DISTRIBUTION_TYPE),G(E.default,{},void 0,this.renderSkuDistributionTypes()))))),G(M.default,{},void 0,G(P.default,{},void 0,R.Messages.SkuInformation.DEPENDENT_SKU_HEADING),G(T.default,{},void 0,R.Messages.SkuInformation.DEPENDENT_SKU_SUBHEADING),G(m.default,{},void 0,G(m.GridSection,{},void 0,G(m.GridChild,{columnSpread:6,columnSpreadExtraSmall:12,columnSpreadSmall:12},void 0,G(k.default,{},void 0,R.Messages.SkuInformation.SELECT_DEPENDENT_SKU),G(E.default,{},void 0,G(h.default,{clearable:!0,searchable:!0,onChange:this.handleDependentSkuChange,options:this.getDependentSkuOptions(),value:n})))))),G(M.default,{isFlush:!0},void 0,G(P.default,{},void 0,R.Messages.SkuInformation.LEGAL_NOTICE),G(T.default,{},void 0,R.Messages.SkuInformation.LEGAL_NOTICE_SUBHEADING),G(m.default,{},void 0,G(m.GridSection,{},void 0,G(m.GridChild,{columnSpread:3,columnSpreadMedium:4,columnSpreadSmallMedium:5,columnSpreadSmall:8,columnSpreadExtraSmall:10},void 0,G(k.default,{},void 0,R.Messages.SkuInformation.LEGAL_NOTICE_CHOOSE_LOCALE),B),G(m.GridChild,{columnSpread:12},void 0,G(k.default,{},void 0,R.Messages.SkuInformation.LEGAL_NOTICE),K)))),G(w.default,{isVisible:o,actionCopy:R.Messages.Actions.PUBLISH_CHANGES,onReset:this.handleFormReset,submitting:u}))},n}(r.Component);H.displayName="SkuInformation";var W=(0,o.withRouter)(i.default.connectStores([d.default,f.default,c.default],function(e){var t=e.match.params,a=t.id,n=t.skuId;return{application:d.default.getApplication(a),sku:f.default.getSku(n),skus:f.default.getSkus(a),storeListing:c.default.getCurrentStoreListing(n)}})((0,O.withLocalizedFormProvider)((0,O.withLocalizedFormConsumer)(H))));t.default=W}}]);
//# sourceMappingURL=316abef33fef84f69e2d.js.map