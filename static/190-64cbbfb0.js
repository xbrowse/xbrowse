(self.webpackChunkseqr=self.webpackChunkseqr||[]).push([[190],{15738:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},84457:function(e,t,n){"use strict";var r=n(15738);t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,i.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var i=r(n(75285));e.exports=t.default},75285:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},8460:function(e){"use strict";function t(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,n){e.classList?e.classList.remove(n):"string"==typeof e.className?e.className=t(e.className,n):e.setAttribute("class",t(e.className&&e.className.baseVal||"",n))}},23307:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}t.default=e}(n(66318));var r=s(n(84457)),i=s(n(8460)),a=s(n(92437)),o=s(n(19395));n(43606);function s(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var u=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,r.default)(e,t)}))},c=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,i.default)(e,t)}))},p=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).onEnter=function(e,n){var r=t.getClassNames(n?"appear":"enter").className;t.removeClasses(e,"exit"),u(e,r),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.getClassNames(n?"appear":"enter").activeClassName;t.reflowAndAddClass(e,r),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.getClassNames("appear").doneClassName,i=t.getClassNames("enter").doneClassName,a=n?r+" "+i:i;t.removeClasses(e,n?"appear":"enter"),u(e,a),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.getClassNames("exit").className;t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),u(e,n),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.getClassNames("exit").activeClassName;t.reflowAndAddClass(e,n),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.getClassNames("exit").doneClassName;t.removeClasses(e,"exit"),u(e,n),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,i=r?(r&&n?n+"-":"")+e:n[e];return{className:i,activeClassName:r?i+"-active":n[e+"Active"],doneClassName:r?i+"-done":n[e+"Done"]}},t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.removeClasses=function(e,t){var n=this.getClassNames(t),r=n.className,i=n.activeClassName,a=n.doneClassName;r&&c(e,r),i&&c(e,i),a&&c(e,a)},i.reflowAndAddClass=function(e,t){t&&(e&&e.scrollTop,u(e,t))},i.render=function(){var e=l({},this.props);return delete e.classNames,a.default.createElement(o.default,l({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},r}(a.default.Component);p.defaultProps={classNames:""},p.propTypes={};var d=p;t.default=d,e.exports=t.default},22458:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;o(n(66318));var r=o(n(92437)),i=n(76727),a=o(n(69208));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t,n;function o(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).handleEnter=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEnter",0,n)},t.handleEntering=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEntering",0,n)},t.handleEntered=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEntered",0,n)},t.handleExit=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExit",1,n)},t.handleExiting=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExiting",1,n)},t.handleExited=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExited",1,n)},t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=o.prototype;return s.handleLifecycle=function(e,t,n){var a,o=this.props.children,s=r.default.Children.toArray(o)[t];s.props[e]&&(a=s.props)[e].apply(a,n),this.props[e]&&this.props[e]((0,i.findDOMNode)(this))},s.render=function(){var e=this.props,t=e.children,n=e.in,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["children","in"]),o=r.default.Children.toArray(t),s=o[0],l=o[1];return delete i.onEnter,delete i.onEntering,delete i.onEntered,delete i.onExit,delete i.onExiting,delete i.onExited,r.default.createElement(a.default,i,n?r.default.cloneElement(s,{key:"first",onEnter:this.handleEnter,onEntering:this.handleEntering,onEntered:this.handleEntered}):r.default.cloneElement(l,{key:"second",onEnter:this.handleExit,onEntering:this.handleExiting,onEntered:this.handleExited}))},o}(r.default.Component);s.propTypes={};var l=s;t.default=l,e.exports=t.default},19395:function(e,t,n){"use strict";t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(66318)),i=s(n(92437)),a=s(n(76727)),o=n(22001);n(43606);function s(e){return e&&e.__esModule?e:{default:e}}var l="unmounted";t.UNMOUNTED=l;var u="exited";t.EXITED=u;var c="entering";t.ENTERING=c;var p="entered";t.ENTERED=p;var d="exiting";t.EXITING=d;var f=function(e){var t,n;function r(t,n){var r;r=e.call(this,t,n)||this;var i,a=n.transitionGroup,o=a&&!a.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(i=u,r.appearStatus=c):i=p:i=t.unmountOnExit||t.mountOnEnter?l:u,r.state={status:i},r.nextCallback=null,r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.getChildContext=function(){return{transitionGroup:null}},r.getDerivedStateFromProps=function(e,t){return e.in&&t.status===l?{status:u}:null},o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==c&&n!==p&&(t=c):n!==c&&n!==p||(t=d)}this.updateStatus(!1,t)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},o.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=a.default.findDOMNode(this);t===c?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===u&&this.setState({status:l})},o.performEnter=function(e,t){var n=this,r=this.props.enter,i=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,a=this.getTimeouts(),o=i?a.appear:a.enter;t||r?(this.props.onEnter(e,i),this.safeSetState({status:c},(function(){n.props.onEntering(e,i),n.onTransitionEnd(e,o,(function(){n.safeSetState({status:p},(function(){n.props.onEntered(e,i)}))}))}))):this.safeSetState({status:p},(function(){n.props.onEntered(e)}))},o.performExit=function(e){var t=this,n=this.props.exit,r=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:d},(function(){t.props.onExiting(e),t.onTransitionEnd(e,r.exit,(function(){t.safeSetState({status:u},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:u},(function(){t.props.onExited(e)}))},o.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},o.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},o.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var r=null==t&&!this.props.addEndListener;e&&!r?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},o.render=function(){var e=this.state.status;if(e===l)return null;var t=this.props,n=t.children,r=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(t,["children"]);if(delete r.in,delete r.mountOnEnter,delete r.unmountOnExit,delete r.appear,delete r.enter,delete r.exit,delete r.timeout,delete r.addEndListener,delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,"function"==typeof n)return n(e,r);var a=i.default.Children.only(n);return i.default.cloneElement(a,r)},r}(i.default.Component);function h(){}f.contextTypes={transitionGroup:r.object},f.childContextTypes={transitionGroup:function(){}},f.propTypes={},f.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},f.UNMOUNTED=0,f.EXITED=1,f.ENTERING=2,f.ENTERED=3,f.EXITING=4;var m=(0,o.polyfill)(f);t.default=m},69208:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=s(n(66318)),i=s(n(92437)),a=n(22001),o=n(46639);function s(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},p=function(e){var t,n;function r(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind(u(u(r)));return r.state={handleExited:i,firstRender:!0},r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.getChildContext=function(){return{transitionGroup:{isMounting:!this.appeared}}},a.componentDidMount=function(){this.appeared=!0,this.mounted=!0},a.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(e,t){var n=t.children,r=t.handleExited;return{children:t.firstRender?(0,o.getInitialChildMapping)(e,r):(0,o.getNextChildMapping)(e,n,r),firstRender:!1}},a.handleExited=function(e,t){var n=(0,o.getChildMapping)(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=l({},t.children);return delete n[e.key],{children:n}})))},a.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["component","childFactory"]),a=c(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?a:i.default.createElement(t,r,a)},r}(i.default.Component);p.childContextTypes={transitionGroup:r.default.object.isRequired},p.propTypes={},p.defaultProps={component:"div",childFactory:function(e){return e}};var d=(0,a.polyfill)(p);t.default=d,e.exports=t.default},2841:function(e,t,n){"use strict";var r=s(n(23307)),i=s(n(22458)),a=s(n(69208)),o=s(n(19395));function s(e){return e&&e.__esModule?e:{default:e}}e.exports={Transition:o.default,TransitionGroup:a.default,ReplaceTransition:i.default,CSSTransition:r.default}},46639:function(e,t,n){"use strict";t.__esModule=!0,t.getChildMapping=i,t.mergeChildMappings=a,t.getInitialChildMapping=function(e,t){return i(e.children,(function(n){return(0,r.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:o(n,"appear",e),enter:o(n,"enter",e),exit:o(n,"exit",e)})}))},t.getNextChildMapping=function(e,t,n){var s=i(e.children),l=a(t,s);return Object.keys(l).forEach((function(i){var a=l[i];if((0,r.isValidElement)(a)){var u=i in t,c=i in s,p=t[i],d=(0,r.isValidElement)(p)&&!p.props.in;!c||u&&!d?c||!u||d?c&&u&&(0,r.isValidElement)(p)&&(l[i]=(0,r.cloneElement)(a,{onExited:n.bind(null,a),in:p.props.in,exit:o(a,"exit",e),enter:o(a,"enter",e)})):l[i]=(0,r.cloneElement)(a,{in:!1}):l[i]=(0,r.cloneElement)(a,{onExited:n.bind(null,a),in:!0,exit:o(a,"exit",e),enter:o(a,"enter",e)})}})),l};var r=n(92437);function i(e,t){var n=Object.create(null);return e&&r.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,r.isValidElement)(e)?t(e):e}(e)})),n}function a(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),a=[];for(var o in e)o in t?a.length&&(i[o]=a,a=[]):a.push(o);var s={};for(var l in t){if(i[l])for(r=0;r<i[l].length;r++){var u=i[l][r];s[i[l][r]]=n(u)}s[l]=n(l)}for(r=0;r<a.length;r++)s[a[r]]=n(a[r]);return s}function o(e,t,n){return null!=n[t]?n[t]:e.props[t]}},43606:function(e,t,n){"use strict";t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0;var r;(r=n(66318))&&r.__esModule;t.timeoutsShape=null;t.classNamesShape=null},190:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(92437),a=u(i),o=u(n(66318)),s=n(2841),l=u(n(92594));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={items:[],styles:Object.assign({},l.default,e.styles)},n.activeDrag=0,n.xhrs=[],n.onClick=n.onClick.bind(n),n.onUploadButtonClick=n.onUploadButtonClick.bind(n),n.onFileSelect=n.onFileSelect.bind(n),n.onDragEnter=n.onDragEnter.bind(n),n.onDragLeave=n.onDragLeave.bind(n),n.onDrop=n.onDrop.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"onClick",value:function(){this.fileInput.click()}},{key:"onUploadButtonClick",value:function(){this.upload()}},{key:"onFileSelect",value:function(){var e=this,t=this.filesToItems(this.fileInput.files);this.setState({items:t},(function(){e.props.auto&&e.upload()}))}},{key:"onDragEnter",value:function(){this.activeDrag+=1,this.setState({isActive:this.activeDrag>0})}},{key:"onDragOver",value:function(e){return e&&e.preventDefault(),!1}},{key:"onDragLeave",value:function(){this.activeDrag-=1,0===this.activeDrag&&this.setState({isActive:!1})}},{key:"onDrop",value:function(e){var t=this;if(e){e.preventDefault(),this.activeDrag=0;var n=e.dataTransfer?e.dataTransfer.files:[],r=this.filesToItems(n);this.setState({isActive:!1,items:r},(function(){t.props.auto&&t.upload()}))}}},{key:"clearIfAllCompleted",value:function(){var e=this;this.props.clearTimeOut>0&&(this.state.items.filter((function(e){return 100===e.progress})).length===this.state.items.length&&setTimeout((function(){e.setState({items:[]})}),this.props.clearTimeOut))}},{key:"updateFileProgress",value:function(e,t){var n=[].concat(c(this.state.items));n[e]=Object.assign({},this.state.items[e],{progress:t}),this.setState({items:n},this.clearIfAllCompleted)}},{key:"updateFileChunkProgress",value:function(e,t,n){var r=[].concat(c(this.state.items)),i=this.state.items[e],a=[].concat(c(i.chunkProgress)),o=a.reduce((function(e,t){return e+t}))/(a.length-1);a[t]=n,r[e]=Object.assign({},i,{chunkProgress:a,progress:o}),this.setState({items:r},this.clearIfAllCompleted)}},{key:"cancelFile",value:function(e){var t=[].concat(c(this.state.items));t[e]=Object.assign({},this.state.items[e],{cancelled:!0}),this.xhrs[e]&&(this.xhrs[e].upload.removeEventListener("progress"),this.xhrs[e].removeEventListener("load"),this.xhrs[e].abort()),this.setState({items:t})}},{key:"upload",value:function(){var e=this,t=this.state.items;t&&t.filter((function(e){return!e.cancelled})).forEach((function(t){e.uploadItem(t)}))}},{key:"uploadItem",value:function(e){var t=this;if(this.props.chunks&&e.file)for(var n=this.props.chunkSize,r=e.file.size,i=0,a=n,o=function(n,r){t.updateFileChunkProgress(e.index,r,n)},s=0;i<r;)this.uploadChunk(e.file.slice(i,a),s+=1,e.file.name,o),a=(i=a)+n;else this.uploadFile(e.file,(function(n){return t.updateFileProgress(e.index,n)}))}},{key:"uploadChunk",value:function(e,t,n,r){if(e){var i=new FormData,a=new XMLHttpRequest;i.append(this.props.fieldName,e,n+"-chunk"+t),a.onload=function(){r(100,t)},a.upload.onprogress=function(e){e.lengthComputable&&r(e.loaded/e.total*100,t)},a.open(this.props.method,this.props.url,!0),a.send(i)}}},{key:"uploadFile",value:function(e,t){if(e){var n=new FormData,r=new XMLHttpRequest;n.append(this.props.fieldName,e,e.name),r.onload=function(){t(100)},r.upload.onprogress=function(e){e.lengthComputable&&t(e.loaded/e.total*100)},r.open(this.props.method,this.props.url,!0),r.send(n),this.xhrs[e.index]=r}}},{key:"filesToItems",value:function(e){var t=this;return Array.prototype.slice.call(e).slice(0,this.props.maxFiles).map((function(e,n){if(t.props.chunks){for(var r=[],i=0;i<=e.size/t.props.chunkSize;i+=1)r.push(0);return{file:e,index:n,progress:0,cancelled:!1,chunkProgress:r}}return{file:e,index:n,progress:0,cancelled:!1}}))}},{key:"renderDropTarget",value:function(){var e=this.props.uploadIconClass,t=this.state.styles,n=t.dropTargetStyle;return this.state.isActive&&(n=Object.assign({},n,t.dropTargetActiveStyle)),a.default.createElement("div",{"data-test-id":"dropTarget",style:n,onClick:this.onClick,onDragEnter:this.onDragEnter,onDragOver:this.onDragOver,onDragLeave:this.onDragLeave,onDrop:this.onDrop},a.default.createElement("div",{style:t.placeHolderStyle},a.default.createElement("p",null,this.props.dropzoneLabel),a.default.createElement("i",{className:e})),this.renderFileSet())}},{key:"renderFileSet",value:function(){var e=this,t=this.state.items,n=this.props,r=n.progressClass,i=n.filesetTransitionName;if(t.length>0){var o=this.props,l=o.cancelIconClass,u=o.completeIconClass,c=this.state,p=(c.progress,c.styles),d=t.filter((function(e){return!0===e.cancelled})),f=t.length===d.length?{display:"none"}:p.fileset;return a.default.createElement(s.TransitionGroup,{component:"div",transitionName:i,transitionEnterTimeout:0,transitionLeaveTimeout:0},a.default.createElement("div",{style:f},t.filter((function(e){return!e.cancelled&&!!e.file})).map((function(t){var n=t.file,i=(n.size/1048576).toPrecision(2),o=t.progress<100?l:u;return a.default.createElement("div",{key:t.index},a.default.createElement("div",{style:p.fileDetails},a.default.createElement("span",{className:"icon-file icon-large"}," "),a.default.createElement("span",{style:p.fileName},n.name+", "+n.type),a.default.createElement("span",{style:p.fileSize},i+" Mb"),a.default.createElement("i",{className:o,style:{cursor:"pointer"},onClick:function(n){n.stopPropagation(),e.cancelFile(t.index)}})),a.default.createElement("div",null,a.default.createElement("progress",{style:r?{}:p.progress,className:r,min:"0",max:"100",value:t.progress},t.progress,"%")))}))))}return a.default.createElement(s.TransitionGroup,{component:"div",transitionName:i,transitionEnterTimeout:0,transitionLeaveTimeout:0})}},{key:"renderButton",value:function(){var e=this.state.styles;return!this.props.auto?a.default.createElement("button",{style:e.uploadButtonStyle,onClick:this.onUploadButtonClick},this.props.buttonLabel):null}},{key:"renderInput",value:function(){var e=this,t=this.props.maxFiles;return a.default.createElement("input",{style:{display:"none"},multiple:t>1,type:"file",ref:function(t){t&&(e.fileInput=t)},onChange:this.onFileSelect})}},{key:"render",value:function(){var e=this.state.styles;return a.default.createElement("div",{style:e.root},this.renderDropTarget(),this.renderButton(),this.renderInput())}}]),t}(i.Component);p.propTypes={url:o.default.string.isRequired,method:o.default.string,auto:o.default.bool,fieldName:o.default.string,buttonLabel:o.default.string,dropzoneLabel:o.default.string,chunks:o.default.bool,chunkSize:o.default.number,maxFiles:o.default.number,clearTimeOut:o.default.number,filesetTransitionName:o.default.string,styles:o.default.shape({}),cancelIconClass:o.default.string,completeIconClass:o.default.string,uploadIconClass:o.default.string,progressClass:o.default.string},p.defaultProps={method:"POST",auto:!1,fieldName:"datafile",buttonLabel:"Upload",dropzoneLabel:"Drag and drop your files here or pick them from your computer",maxSize:26214400,chunks:!1,chunkSize:524288,localStore:!1,maxFiles:1,encrypt:!1,clearTimeOut:3e3,filesetTransitionName:"fileset",cancelIconClass:"fa fa-close",completeIconClass:"fa fa-check",uploadIconClass:"fa fa-upload"},t.Z=p},92594:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={root:{border:"1px solid #CACACA",padding:20},dropTargetStyle:{border:"3px dashed #f2e745",padding:10,backgroundColor:"#fefcea",cursor:"pointer"},dropTargetActiveStyle:{backgroundColor:"#ccffcc"},placeHolderStyle:{paddingLeft:"20%",paddingRight:"20%",textAlign:"center"},uploadButtonStyle:{width:"100%",marginTop:10,height:32,alignSelf:"center",cursor:"pointer",backgroundColor:"#fefcea",border:"1px solid #f2e745",fontSize:14},fileset:{marginTop:10,paddingTop:10,paddingBottom:10},fileDetails:{paddingTop:10,display:"flex",alignItems:"flex-start"},fileName:{flexGrow:"8"},fileSize:{float:"right",flexGrow:"2",alignSelf:"flex-end"},removeButton:{alignSelf:"flex-end"},progress:{WebkitAppearance:"none",appearance:"none",marginTop:10,width:"100%",height:16}}}}]);