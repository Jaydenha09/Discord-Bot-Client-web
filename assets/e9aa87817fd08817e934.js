(this.webpackJsonp=this.webpackJsonp||[]).push([[89],{6107:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=void 0;var s,n=(s=i(2))&&s.__esModule?s:{default:s},o=i(1);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t}).apply(this,arguments)}var T={setDesktopType:function(t){n.default.dispatch({type:o.ActionTypes.NOTIFICATIONS_SET_DESKTOP_TYPE,desktopType:t})},setTTSType:function(t){n.default.dispatch({type:o.ActionTypes.NOTIFICATIONS_SET_TTS_TYPE,ttsType:t})},setDisabledSounds:function(t){n.default.dispatch({type:o.ActionTypes.NOTIFICATIONS_SET_DISABLED_SOUNDS,sounds:t})},setDisableUnreadBadge:function(t){n.default.dispatch({type:o.ActionTypes.NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE,disableUnreadBadge:t})},setTaskbarFlash:function(t){n.default.dispatch({type:o.ActionTypes.NOTIFICATIONS_SET_TASKBAR_FLASH,taskbarFlash:t
})},setPermissionsState:function(t,e){n.default.dispatch({type:o.ActionTypes.NOTIFICATIONS_SET_PERMISSION_STATE,enabled:t,source:e})},showNotification:function(t,e,i,s){void 0===s&&(s={});n.default.dirtyDispatch({type:o.ActionTypes.NOTIFICATION_CREATE,icon:t,title:e,body:i,options:a({},s,{onClick:function(){s.onClick&&s.onClick();n.default.dirtyDispatch({type:o.ActionTypes.NOTIFICATION_CLICK})}})})},clickedNotification:function(){n.default.dirtyDispatch({type:o.ActionTypes.NOTIFICATION_CLICK})}};e.default=T}}]);
//# sourceMappingURL=e9aa87817fd08817e934.js.map