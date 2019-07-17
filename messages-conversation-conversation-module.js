(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-conversation-conversation-module"],{

/***/ "./node_modules/@pusher/chatkit-client/dist/web/chatkit.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@pusher/chatkit-client/dist/web/chatkit.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var e,t,n=(function(e,t){var n;"undefined"!=typeof self&&self,n=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){function r(e){var t={};if(!e)return t;for(var n=0,r=e.split("\r\n");n<r.length;n++){var o=r[n],s=o.indexOf(": ");if(s>0){var i=o.substring(0,s),a=o.substring(s+2);t[i]=a}}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.responseToHeadersObject=r;var o=function(){function e(e,t,n){this.statusCode=e,this.headers=t,this.info=n}return e.fromXHR=function(t){var n=t.responseText;try{n=JSON.parse(t.responseText)}catch(e){}return new e(t.status,r(t.getAllResponseHeaders()),n)},e}();t.ErrorResponse=o;var s=function(){return function(e){this.error=e}}();t.NetworkError=s;var i=function(){return function(e){this.error=e}}();t.ProtocolError=i,function(e){e[e.UNSENT=0]="UNSENT",e[e.OPENED=1]="OPENED",e[e.HEADERS_RECEIVED=2]="HEADERS_RECEIVED",e[e.LOADING=3]="LOADING",e[e.DONE=4]="DONE"}(t.XhrReadyState||(t.XhrReadyState={}))},function(e,t,n){var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.VERBOSE=1]="VERBOSE",e[e.DEBUG=2]="DEBUG",e[e.INFO=3]="INFO",e[e.WARNING=4]="WARNING",e[e.ERROR=5]="ERROR"}(r=t.LogLevel||(t.LogLevel={}));var o=function(){function e(e){void 0===e&&(e=2),this.threshold=e;var t=Array(),n="--------------------------------------------------------------------------------";window.console.group||(window.console.group=function(e){t.push(e),window.console.log("%c \nBEGIN GROUP: %c",n,e)}),window.console.groupEnd||(window.console.groupEnd=function(){window.console.log("END GROUP: %c\n%c",t.pop(),n)})}return e.prototype.verbose=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.log(window.console.log,r.VERBOSE,e)},e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.log(window.console.log,r.DEBUG,e)},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.log(window.console.info,r.INFO,e)},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.log(window.console.warn,r.WARNING,e)},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.log(window.console.error,r.ERROR,e)},e.prototype.log=function(e,t,n){var o=this;if(t>=this.threshold){var s="Logger."+r[t];n.length>1?(window.console.group(),n.forEach(function(t){o.errorAwareLog(e,t,s)}),window.console.groupEnd()):this.errorAwareLog(e,n[0],s)}},e.prototype.errorAwareLog=function(e,t,n){if(null!=t&&t.info&&t.info.error_uri){var r=t.info.error_description;e((r||"An error has occurred")+". More information can be found at "+t.info.error_uri+". Error object: ",t)}else e(n+": ",t)},e}();t.ConsoleLogger=o;var s=function(){function e(){}return e.prototype.verbose=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]},e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]},e}();t.EmptyLogger=s},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.createRetryStrategyOptionsOrDefault=function(e){var t=e.initialTimeoutMillis||1e3,n=e.maxTimeoutMillis||5e3,r=-1;return void 0!==e.limit&&null!=e.limit&&(r=e.limit),{increaseTimeout:void 0!==e.increaseTimeout?e.increaseTimeout:function(e){return 2*e>n?n:2*e},initialTimeoutMillis:t,limit:r,maxTimeoutMillis:n}};var o=function(){return function(e){this.waitTimeMillis=e}}();t.Retry=o;var s=function(){return function(e){this.error=e}}();t.DoNotRetry=s;var i=function(){function e(e,t,n){this.options=e,this.logger=t,this.retryUnsafeRequests=n,this.currentRetryCount=0,this.initialTimeoutMillis=e.initialTimeoutMillis,this.maxTimeoutMillis=e.maxTimeoutMillis,this.limit=e.limit,this.increaseTimeoutFunction=e.increaseTimeout,this.currentBackoffMillis=this.initialTimeoutMillis}return e.prototype.attemptRetry=function(e){if(this.logger.verbose(this.constructor.name+": Error received",e),this.currentRetryCount>=this.limit&&this.limit>=0)return this.logger.verbose(this.constructor.name+": Retry count is over the maximum limit: "+this.limit),new s(e);if(null==e)return new o(this.calculateMillisToRetry());if(e instanceof r.ErrorResponse&&e.headers["Retry-After"])return this.logger.verbose(this.constructor.name+": Retry-After header is present, retrying in "+e.headers["Retry-After"]),new o(1e3*parseInt(e.headers["Retry-After"],10));if(this.retryUnsafeRequests)return new o(this.calculateMillisToRetry());switch(e.constructor){case r.ErrorResponse:var t=e.statusCode,n=e.headers["Request-Method"];return t>=500&&t<600&&("GET"===(i=(i=n).toUpperCase())||"HEAD"===i||"OPTIONS"===i||"SUBSCRIBE"===i)?(this.logger.verbose(this.constructor.name+": Encountered an error with status code "+t+" and request method "+n+", will retry"),new o(this.calculateMillisToRetry())):(this.logger.verbose(this.constructor.name+": Encountered an error with status code "+t+" and request method "+n+", will not retry",e),new s(e));case r.NetworkError:return this.logger.verbose(this.constructor.name+": Encountered a network error, will retry",e),new o(this.calculateMillisToRetry());case r.ProtocolError:return this.logger.verbose(this.constructor.name+": Encountered a protocol error, will retry",e),new o(this.calculateMillisToRetry());default:return this.logger.verbose(this.constructor.name+": Encountered an error, will retry",e),new o(this.calculateMillisToRetry())}var i},e.prototype.calculateMillisToRetry=function(){return this.currentBackoffMillis=this.increaseTimeoutFunction(this.currentBackoffMillis),this.logger.verbose(this.constructor.name+": Retrying in "+this.currentBackoffMillis+"ms"),this.currentBackoffMillis},e}();t.RetryResolution=i},function(e,t,n){var r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),s=n(4),i=n(5),a=n(6),u=n(11),c=n(12),h=n(7),d=n(13),l=n(14),f=n(8),p=function(){function e(e){this.options=e,this.host=e.host.replace(/(\/)+$/,"");var t=e.logger||new o.ConsoleLogger;this.logger=t,this.websocketTransport=new l.default(this.host,t),this.httpTransport=new d.default(this.host,e.encrypted),this.sdkProduct=e.sdkProduct||"unknown",this.sdkVersion=e.sdkVersion||"unknown",this.sdkPlatform=navigator?"ReactNative"===navigator.product?"react-native":"web":"node"}return e.prototype.request=function(e,t){var n=this;return e.tokenProvider?e.tokenProvider.fetchToken(t).then(function(t){var n;return void 0!==e.headers?e.headers.Authorization="Bearer "+t:e.headers=((n={}).Authorization="Bearer "+t,n),e}).then(function(e){return n.makeRequest(e)}):this.makeRequest(e)},e.prototype.subscribeResuming=function(e,t,n,o,s,a){var d=c.replaceMissingListenersWithNoOps(n),l=u.subscribeStrategyListenersFromSubscriptionListeners(d),p=!1;return i.createResumingStrategy(o,h.createTokenProvidingStrategy(f.createTransportStrategy(e,this.websocketTransport,this.logger),this.logger,a),this.logger,s)({onEnd:l.onEnd,onError:l.onError,onEvent:l.onEvent,onOpen:function(e){p||(p=!0,l.onOpen(e)),d.onSubscribe()},onRetrying:l.onRetrying},r({},t,this.infoHeaders()))},e.prototype.subscribeNonResuming=function(e,t,n,o,s){var i=c.replaceMissingListenersWithNoOps(n),d=u.subscribeStrategyListenersFromSubscriptionListeners(i),l=!1;return a.createRetryingStrategy(o,h.createTokenProvidingStrategy(f.createTransportStrategy(e,this.websocketTransport,this.logger),this.logger,s),this.logger)({onEnd:d.onEnd,onError:d.onError,onEvent:d.onEvent,onOpen:function(e){l||(l=!0,d.onOpen(e)),i.onSubscribe()},onRetrying:d.onRetrying},r({},t,this.infoHeaders()))},e.prototype.infoHeaders=function(){return{"X-SDK-Language":"javascript","X-SDK-Platform":this.sdkPlatform,"X-SDK-Product":this.sdkProduct,"X-SDK-Version":this.sdkVersion}},e.prototype.makeRequest=function(e){var t=this;return s.executeNetworkRequest(function(){return t.httpTransport.request(r({},e,{headers:r({},e.headers,t.infoHeaders())}))},e).catch(function(e){throw t.logger.error(e),e})},e}();t.BaseClient=p},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);function o(e,t,n){return e.onreadystatechange=function(){4===e.readyState&&(e.status>=200&&e.status<300?t(e.response):0!==e.status?n(r.ErrorResponse.fromXHR(e)):n(new r.NetworkError("No Connection")))},e}t.executeNetworkRequest=function(e,t){return new Promise(function(n,r){!function(e,t){t.json?e.send(JSON.stringify(t.json)):e.send(t.body)}(o(e(),n,r),t)})},t.sendRawRequest=function(e){return new Promise(function(t,n){var r=o(new window.XMLHttpRequest,t,n);if(r.withCredentials=Boolean(e.withCredentials),r.open(e.method.toUpperCase(),e.url,!0),e.headers)for(var s in e.headers)e.headers.hasOwnProperty(s)&&r.setRequestHeader(s,e.headers[s]);r.send(e.body)})}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(2);t.createResumingStrategy=function(e,t,n,r){var i=o.createRetryStrategyOptionsOrDefault(e),a=new o.RetryResolution(i,n);return function(e,r){return new s(n,r,t,e,a)}};var s=function(){return function(e,t,n,r,o){var s=this;this.unsubscribe=function(){s.state.unsubscribe()},this.onTransition=function(e){s.state=e},this.state=new i(this.onTransition,e,t,n,r,o)}}(),i=function(){function e(e,t,n,r,o,s,i){var c=this;this.onTransition=e,this.logger=t,this.headers=n,this.nextSubscribeStrategy=r,this.listeners=o,this.retryResolution=s,this.initialEventId=i;var d=i;t.verbose("ResumingSubscription: transitioning to OpeningSubscriptionState"),d&&(n["Last-Event-Id"]=d,t.verbose("ResumingSubscription: initialEventId is "+d)),this.underlyingSubscription=r({onEnd:function(n){e(new h(t,o,n))},onError:function(i){e(new u(i,e,t,n,o,r,s,d))},onEvent:function(e){d=e.eventId,o.onEvent(e)},onOpen:function(n){e(new a(t,n,o,c.underlyingSubscription,e))},onRetrying:o.onRetrying},n)}return e.prototype.unsubscribe=function(){this.onTransition(new c(this.logger)),null!=this.underlyingSubscription&&this.underlyingSubscription.unsubscribe()},e}(),a=function(){function e(e,t,n,r,o){this.logger=e,this.headers=t,this.listeners=n,this.underlyingSubscription=r,this.onTransition=o,e.verbose("ResumingSubscription: transitioning to OpenSubscriptionState"),n.onOpen(t)}return e.prototype.unsubscribe=function(){this.onTransition(new c(this.logger)),this.underlyingSubscription.unsubscribe()},e}(),u=function(){function e(e,t,n,s,i,u,c,l){var f=this;this.onTransition=t,this.logger=n,this.headers=s,this.listeners=i,this.nextSubscribeStrategy=u,this.retryResolution=c,this.timeout=-1,n.verbose("ResumingSubscription: transitioning to ResumingSubscriptionState");var p=function(e,s){i.onRetrying();var a,u=((a=e)instanceof r.ErrorResponse&&(a.headers["Request-Method"]="SUBSCRIBE"),c.attemptRetry(a));u instanceof o.Retry?f.timeout=window.setTimeout(function(){g(s)},u.waitTimeMillis):t(new d(n,i,e))},g=function(e){n.verbose("ResumingSubscription: trying to re-establish the subscription"),e&&(n.verbose("ResumingSubscription: lastEventId: "+e),s["Last-Event-Id"]=e),f.underlyingSubscription=u({onEnd:function(e){t(new h(n,i,e))},onError:function(e){p(e,l)},onEvent:function(e){l=e.eventId,i.onEvent(e)},onOpen:function(e){t(new a(n,e,i,f.underlyingSubscription,t))},onRetrying:i.onRetrying},s)};p(e,l)}return e.prototype.unsubscribe=function(){this.onTransition(new c(this.logger)),window.clearTimeout(this.timeout),null!=this.underlyingSubscription&&this.underlyingSubscription.unsubscribe()},e}(),c=function(){function e(e,t){this.logger=e,e.verbose("ResumingSubscription: transitioning to EndingSubscriptionState")}return e.prototype.unsubscribe=function(){throw new Error("Subscription is already ending")},e}(),h=function(){function e(e,t,n){this.logger=e,this.listeners=t,e.verbose("ResumingSubscription: transitioning to EndedSubscriptionState"),t.onEnd(n)}return e.prototype.unsubscribe=function(){throw new Error("Subscription has already ended")},e}(),d=function(){function e(e,t,n){this.logger=e,this.listeners=t,e.verbose("ResumingSubscription: transitioning to FailedSubscriptionState",n),t.onError(n)}return e.prototype.unsubscribe=function(){throw new Error("Subscription has already ended")},e}()},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(2);t.createRetryingStrategy=function(e,t,n){var r=o.createRetryStrategyOptionsOrDefault(e),i=new o.RetryResolution(r,n);return function(e,r){return new s(n,r,e,t,i)}};var s=function(){return function(e,t,n,r,o){var s=this;this.unsubscribe=function(){s.state.unsubscribe()},this.onTransition=function(e){s.state=e},this.state=new i(this.onTransition,e,t,n,r,o)}}(),i=function(){function e(e,t,n,r,o,s){var i=this;this.logger=t,this.headers=n,this.listeners=r,this.nextSubscribeStrategy=o,this.retryResolution=s,t.verbose("RetryingSubscription: transitioning to OpeningSubscriptionState"),this.underlyingSubscription=o({onEnd:function(n){return e(new c(t,r,n))},onError:function(i){return e(new a(i,e,t,n,r,o,s))},onEvent:r.onEvent,onOpen:function(n){return e(new u(t,r,n,i.underlyingSubscription,e))},onRetrying:r.onRetrying},n)}return e.prototype.unsubscribe=function(){throw this.underlyingSubscription.unsubscribe(),new Error("Method not implemented.")},e}(),a=function(){function e(e,t,n,s,i,a,d){var l=this;this.onTransition=t,this.logger=n,this.headers=s,this.listeners=i,this.nextSubscribeStrategy=a,this.retryResolution=d,this.timeout=-1,n.verbose("RetryingSubscription: transitioning to RetryingSubscriptionState");var f=function(e){i.onRetrying();var s,a=((s=e)instanceof r.ErrorResponse&&(s.headers["Request-Method"]="SUBSCRIBE"),d.attemptRetry(s));a instanceof o.Retry?l.timeout=window.setTimeout(function(){p()},a.waitTimeMillis):t(new h(n,i,e))},p=function(){n.verbose("RetryingSubscription: trying to re-establish the subscription");var e=a({onEnd:function(e){return t(new c(n,i,e))},onError:function(e){return f(e)},onEvent:i.onEvent,onOpen:function(r){t(new u(n,i,r,e,t))},onRetrying:i.onRetrying},s)};f(e)}return e.prototype.unsubscribe=function(){window.clearTimeout(this.timeout),this.onTransition(new c(this.logger,this.listeners))},e}(),u=function(){function e(e,t,n,r,o){this.logger=e,this.listeners=t,this.headers=n,this.underlyingSubscription=r,this.onTransition=o,e.verbose("RetryingSubscription: transitioning to OpenSubscriptionState"),t.onOpen(n)}return e.prototype.unsubscribe=function(){this.underlyingSubscription.unsubscribe(),this.onTransition(new c(this.logger,this.listeners))},e}(),c=function(){function e(e,t,n){this.logger=e,this.listeners=t,e.verbose("RetryingSubscription: transitioning to EndedSubscriptionState"),t.onEnd(n)}return e.prototype.unsubscribe=function(){throw new Error("Subscription has already ended")},e}(),h=function(){function e(e,t,n){this.logger=e,this.listeners=t,e.verbose("RetryingSubscription: transitioning to FailedSubscriptionState",n),t.onError(n)}return e.prototype.unsubscribe=function(){throw new Error("Subscription has already ended")},e}()},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.createTokenProvidingStrategy=function(e,t,n){return n?function(r,s){return new o(t,r,s,n,e)}:e};var o=function(){function e(e,t,n,r,o){var a=this;this.logger=e,this.listeners=t,this.headers=n,this.tokenProvider=r,this.nextSubscribeStrategy=o,this.unsubscribe=function(){a.state.unsubscribe(),a.state=new i(a.logger)},this.state=new s(e,n,o),this.subscribe()}return e.prototype.subscribe=function(){var e=this;this.tokenProvider.fetchToken().then(function(t){var n=Object.assign({},e.listeners);e.state.subscribe(t,{onEnd:function(t){e.state=new i(e.logger),n.onEnd(t)},onError:function(r){e.isTokenExpiredError(r)?(e.tokenProvider.clearToken(t),e.subscribe()):(e.state=new i(e.logger),n.onError(r))},onEvent:e.listeners.onEvent,onOpen:e.listeners.onOpen})}).catch(function(t){e.logger.debug("TokenProvidingSubscription: error when fetching token:",t),e.state=new i(e.logger),e.listeners.onError(t)})},e.prototype.isTokenExpiredError=function(e){return e instanceof r.ErrorResponse&&401===e.statusCode&&"authentication/expired"===e.info},e}(),s=function(){function e(e,t,n){this.logger=e,this.headers=t,this.nextSubscribeStrategy=n,e.verbose("TokenProvidingSubscription: transitioning to ActiveState")}return e.prototype.subscribe=function(e,t){var n=this;this.putTokenIntoHeader(e),this.underlyingSubscription=this.nextSubscribeStrategy({onEnd:function(e){n.logger.verbose("TokenProvidingSubscription: subscription ended"),t.onEnd(e)},onError:function(e){n.logger.verbose("TokenProvidingSubscription: subscription errored:",e),t.onError(e)},onEvent:t.onEvent,onOpen:function(e){n.logger.verbose("TokenProvidingSubscription: subscription opened"),t.onOpen(e)},onRetrying:t.onRetrying},this.headers)},e.prototype.unsubscribe=function(){null!=this.underlyingSubscription&&this.underlyingSubscription.unsubscribe()},e.prototype.putTokenIntoHeader=function(e){this.headers.Authorization="Bearer "+e,this.logger.verbose("TokenProvidingSubscription: token fetched: "+e)},e}(),i=function(){function e(e){this.logger=e,e.verbose("TokenProvidingSubscription: transitioning to InactiveState")}return e.prototype.subscribe=function(e,t){this.logger.verbose("TokenProvidingSubscription: subscribe called in Inactive state; doing nothing")},e.prototype.unsubscribe=function(){this.logger.verbose("TokenProvidingSubscription: unsubscribe called in Inactive state; doing nothing")},e}()},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.createTransportStrategy=function(e,t,n){return function(n,r){return t.subscribe(e,n,r)}}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.HOST_BASE="pusherplatform.io"},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);t.BaseClient=r.BaseClient;var o=n(9);t.HOST_BASE=o.HOST_BASE;var s=n(15);t.Instance=s.default;var i=n(1);t.ConsoleLogger=i.ConsoleLogger,t.EmptyLogger=i.EmptyLogger;var a=n(0);t.ErrorResponse=a.ErrorResponse,t.NetworkError=a.NetworkError,t.responseToHeadersObject=a.responseToHeadersObject,t.XhrReadyState=a.XhrReadyState;var u=n(4);t.executeNetworkRequest=u.executeNetworkRequest,t.sendRawRequest=u.sendRawRequest;var c=n(5);t.createResumingStrategy=c.createResumingStrategy;var h=n(2);t.createRetryStrategyOptionsOrDefault=h.createRetryStrategyOptionsOrDefault,t.DoNotRetry=h.DoNotRetry,t.Retry=h.Retry,t.RetryResolution=h.RetryResolution;var d=n(6);t.createRetryingStrategy=d.createRetryingStrategy;var l=n(7);t.createTokenProvidingStrategy=l.createTokenProvidingStrategy;var f=n(8);t.createTransportStrategy=f.createTransportStrategy,t.default={BaseClient:r.BaseClient,ConsoleLogger:i.ConsoleLogger,EmptyLogger:i.EmptyLogger,Instance:s.default}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.subscribeStrategyListenersFromSubscriptionListeners=function(e){return{onEnd:e.onEnd,onError:e.onError,onEvent:e.onEvent,onOpen:e.onOpen,onRetrying:e.onRetrying}}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.replaceMissingListenersWithNoOps=function(e){return{onEnd:e.onEnd||function(e){},onError:e.onError||function(e){},onEvent:e.onEvent||function(e){},onOpen:e.onOpen||function(e){},onRetrying:e.onRetrying||function(){},onSubscribe:e.onSubscribe||function(){}}}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0);!function(e){e[e.UNOPENED=0]="UNOPENED",e[e.OPENING=1]="OPENING",e[e.OPEN=2]="OPEN",e[e.ENDING=3]="ENDING",e[e.ENDED=4]="ENDED"}(r=t.HttpTransportState||(t.HttpTransportState={}));var s=function(){function e(e,t){var n=this;return this.gotEOS=!1,this.lastNewlineIndex=0,this.state=r.UNOPENED,this.xhr=e,this.listeners=t,this.xhr.onreadystatechange=function(){switch(n.xhr.readyState){case o.XhrReadyState.UNSENT:case o.XhrReadyState.OPENED:case o.XhrReadyState.HEADERS_RECEIVED:n.assertStateIsIn(r.OPENING);break;case o.XhrReadyState.LOADING:n.onLoading();break;case o.XhrReadyState.DONE:n.onDone()}},this.state=r.OPENING,this.xhr.send(),this}return e.prototype.unsubscribe=function(){this.state=r.ENDED,this.xhr.abort(),this.listeners.onEnd&&this.listeners.onEnd(null)},e.prototype.onLoading=function(){if(this.assertStateIsIn(r.OPENING,r.OPEN,r.ENDING),200===this.xhr.status){this.state===r.OPENING&&(this.state=r.OPEN,this.listeners.onOpen&&this.listeners.onOpen(o.responseToHeadersObject(this.xhr.getAllResponseHeaders()))),this.assertStateIsIn(r.OPEN);var e=this.onChunk();this.assertStateIsIn(r.OPEN,r.ENDING),e&&(this.state=r.ENDED,e instanceof o.ErrorResponse&&204!==e.statusCode&&this.listeners.onError&&this.listeners.onError(e))}},e.prototype.onDone=function(){if(200===this.xhr.status){this.state===r.OPENING&&(this.state=r.OPEN,this.listeners.onOpen&&this.listeners.onOpen(o.responseToHeadersObject(this.xhr.getAllResponseHeaders()))),this.assertStateIsIn(r.OPEN,r.ENDING);var e=this.onChunk();e?(this.state=r.ENDED,204===e.statusCode?this.listeners.onEnd&&this.listeners.onEnd(null):this.listeners.onError&&this.listeners.onError(e)):this.state<=r.ENDING?this.listeners.onError&&this.listeners.onError(new Error("HTTP response ended without receiving EOS message")):this.listeners.onEnd&&this.listeners.onEnd(null)}else{if(this.assertStateIsIn(r.OPENING,r.OPEN,r.ENDED),this.state===r.ENDED)return;0===this.xhr.status?this.listeners.onError&&this.listeners.onError(new o.NetworkError("Connection lost.")):this.listeners.onError&&this.listeners.onError(o.ErrorResponse.fromXHR(this.xhr))}},e.prototype.onChunk=function(){this.assertStateIsIn(r.OPEN);var e=this.xhr.responseText,t=e.lastIndexOf("\n");if(t>this.lastNewlineIndex){var n=e.slice(this.lastNewlineIndex,t).split("\n");this.lastNewlineIndex=t;for(var o=0,s=n;o<s.length;o++){var i=s[o];if(0!==i.length){var a=JSON.parse(i),u=this.onMessage(a);if(null!=u)return u}}}},e.prototype.assertStateIsIn=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(!t.some(function(t){return t===e.state})){var o=t.map(function(e){return r[e]}).join(", "),s=r[this.state];window.console.warn("Expected this.state to be one of ["+o+"] but it is "+s)}},e.prototype.onMessage=function(e){switch(this.assertStateIsIn(r.OPEN),this.verifyMessage(e),e[0]){case 0:return null;case 1:return this.onEventMessage(e);case 255:return this.onEOSMessage(e);default:return new Error("Unknown Message: "+JSON.stringify(e))}},e.prototype.onEventMessage=function(e){if(this.assertStateIsIn(r.OPEN),4!==e.length)return new Error("Event message has "+e.length+" elements (expected 4)");e[0];var t=e[1],n=e[2],o=e[3];return"string"!=typeof t?new Error("Invalid event ID in message: "+JSON.stringify(e)):"object"!=typeof n||Array.isArray(n)?new Error("Invalid event headers in message: "+JSON.stringify(e)):(this.listeners.onEvent&&this.listeners.onEvent({body:o,headers:n,eventId:t}),null)},e.prototype.onEOSMessage=function(e){if(this.assertStateIsIn(r.OPEN),4!==e.length)return new Error("EOS message has "+e.length+" elements (expected 4)");e[0];var t=e[1],n=e[2],s=e[3];return"number"!=typeof t?new Error("Invalid EOS Status Code"):"object"!=typeof n||Array.isArray(n)?new Error("Invalid EOS ElementsHeaders"):(this.state=r.ENDING,new o.ErrorResponse(t,n,s))},e.prototype.verifyMessage=function(e){return this.gotEOS?new Error("Got another message after EOS message"):Array.isArray(e)?e.length<1?new Error("Message is empty array"):void 0:new Error("Message is not an array")},e}(),i=function(){function e(e,t){void 0===t&&(t=!0),this.baseURL=(t?"https":"http")+"://"+e}return e.prototype.request=function(e){return this.createXHR(this.baseURL,e)},e.prototype.subscribe=function(e,t,n){var r={headers:n,method:"SUBSCRIBE",path:e};return new s(this.createXHR(this.baseURL,r),t)},e.prototype.createXHR=function(e,t){var n=new window.XMLHttpRequest,r=e+"/"+t.path.replace(/^\/+/,"");if(n.open(t.method.toUpperCase(),r,!0),n=this.setJSONHeaderIfAppropriate(n,t),t.jwt&&n.setRequestHeader("authorization","Bearer "+t.jwt),t.headers)for(var o in t.headers)t.headers.hasOwnProperty(o)&&n.setRequestHeader(o,t.headers[o]);return n},e.prototype.setJSONHeaderIfAppropriate=function(e,t){return t.json&&e.setRequestHeader("content-type","application/json"),e},e}();t.default=i},function(e,t,n){var r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0});var o,s=n(0);!function(e){e[e.Connecting=0]="Connecting",e[e.Open=1]="Open",e[e.Closing=2]="Closing",e[e.Closed=3]="Closed"}(o=t.WSReadyState||(t.WSReadyState={}));var i=function(){function e(){this.subscriptions={}}return e.prototype.add=function(e,t,n,r){return this.subscriptions[e]={headers:r,listeners:n,path:t},e},e.prototype.has=function(e){return void 0!==this.subscriptions[e]},e.prototype.isEmpty=function(){return 0===Object.keys(this.subscriptions).length},e.prototype.remove=function(e){return delete this.subscriptions[e]},e.prototype.get=function(e){return this.subscriptions[e]},e.prototype.getAll=function(){return this.subscriptions},e.prototype.getAllAsArray=function(){var e=this;return Object.keys(this.subscriptions).map(function(t){return r({subID:parseInt(t,10)},e.subscriptions[parseInt(t,10)])})},e.prototype.removeAll=function(){this.subscriptions={}},e}(),a=function(){function e(e,t){this.wsTransport=e,this.subID=t}return e.prototype.unsubscribe=function(){this.wsTransport.unsubscribe(this.subID)},e}(),u=function(){function e(e,t){this.webSocketPath="/ws",this.forcedClose=!1,this.closedError=null,this.lastSentPingID=null,this.baseURL="wss://"+e+this.webSocketPath,this.lastSubscriptionID=0,this.logger=t,this.subscriptions=new i,this.pendingSubscriptions=new i,this.connect()}return e.prototype.subscribe=function(e,t,n){this.tryReconnectIfNeeded();var r=this.lastSubscriptionID++;return this.socket.readyState!==o.Open?(this.pendingSubscriptions.add(r,e,t,n),new a(this,r)):(this.subscriptions.add(r,e,t,n),this.sendMessage(this.getMessage(100,r,e,n)),new a(this,r))},e.prototype.unsubscribe=function(e){this.sendMessage(this.getMessage(198,e));var t=this.subscriptions.get(e);t.listeners.onEnd&&t.listeners.onEnd(null),this.subscriptions.remove(e)},e.prototype.connect=function(){var e=this;this.forcedClose=!1,this.closedError=null,this.socket=new window.WebSocket(this.baseURL),this.socket.onopen=function(t){e.pendingSubscriptions.getAllAsArray().forEach(function(t){var n=t.subID,r=t.path,o=t.listeners,s=t.headers;e.subscribePending(r,o,s,n)}),e.pendingSubscriptions.removeAll(),e.pingInterval=window.setInterval(function(){if(!e.pongTimeout){var t=(new Date).getTime();1e4>t-e.lastMessageReceivedTimestamp||(e.sendMessage(e.getMessage(16,t)),e.lastSentPingID=t,e.pongTimeout=window.setTimeout(function(){1e4>(new Date).getTime()-e.lastMessageReceivedTimestamp?e.pongTimeout=null:e.close(new s.NetworkError("Pong response wasn't received within timeout"))},1e4))}},3e4)},this.socket.onmessage=function(t){return e.receiveMessage(t)},this.socket.onerror=function(t){e.logger.verbose("WebSocket encountered an error event",t)},this.socket.onclose=function(t){e.logger.verbose("WebSocket encountered a close event",t);var n=e.subscriptions.getAllAsArray().concat(e.pendingSubscriptions.getAllAsArray());e.subscriptions.removeAll(),e.pendingSubscriptions.removeAll(),n.forEach(function(t){t.listeners.onError&&t.listeners.onError(e.closedError)}),e.tryReconnectIfNeeded()}},e.prototype.close=function(e){if(this.socket instanceof window.WebSocket){var t=function(e){};null!=this.socket.onclose&&(t=this.socket.onclose.bind(this)),this.socket.onclose=function(){},this.socket.onerror=function(){},this.socket.onmessage=function(){},this.socket.onopen=function(){},this.forcedClose=!0,this.closedError=e,this.socket.close(),window.clearTimeout(this.pingInterval),window.clearTimeout(this.pongTimeout),this.pongTimeout=null,this.pingInterval=null,this.lastSentPingID=null,t()}},e.prototype.tryReconnectIfNeeded=function(){(this.forcedClose||this.socket.readyState===o.Closed)&&this.connect()},e.prototype.subscribePending=function(e,t,n,r){void 0!==r?(this.subscriptions.add(r,e,t,n),this.sendMessage(this.getMessage(100,r,e,n))):this.logger.debug("Subscription to path "+e+" has an undefined ID")},e.prototype.getMessage=function(e,t,n,r){return[e,t,n,r]},e.prototype.sendMessage=function(e){this.socket.readyState===o.Open?this.socket.send(JSON.stringify(e)):this.logger.warn("Can't send on socket in \""+o[this.socket.readyState]+'" state')},e.prototype.subscription=function(e){return this.subscriptions.get(e)},e.prototype.receiveMessage=function(e){var t;this.lastMessageReceivedTimestamp=(new Date).getTime();try{t=JSON.parse(e.data)}catch(t){return void this.close(new s.ProtocolError("Message is not valid JSON format. Getting "+e.data))}var n=this.validateMessage(t);if(n)this.close(n);else{var r=t.shift();switch(r){case 17:return void this.onPongMessage(t);case 16:return void this.onPingMessage(t);case 99:return void this.onCloseMessage(t)}var o=t.shift(),i=this.subscription(o);if(i){var a=i.listeners;switch(r){case 101:this.onOpenMessage(t,o,a);break;case 102:this.onEventMessage(t,a);break;case 199:this.onEOSMessage(t,o,a);break;default:this.close(new s.ProtocolError("Received unknown type of message."))}}else this.logger.debug("Received message for unknown subscription ID: "+o)}},e.prototype.validateMessage=function(e){return Array.isArray(e)?e.length<1?new s.ProtocolError("Message is empty array: "+JSON.stringify(e)):null:new s.ProtocolError("Message is expected to be an array. Getting: "+JSON.stringify(e))},e.prototype.onOpenMessage=function(e,t,n){n.onOpen&&n.onOpen(e[1])},e.prototype.onEventMessage=function(e,t){if(3===e.length){var n=e[0],r=e[1],o=e[2];"string"==typeof n?"object"!=typeof r||Array.isArray(r)?t.onError&&t.onError(new s.ProtocolError("Invalid event headers in message: "+JSON.stringify(e))):t.onEvent&&t.onEvent({eventId:n,headers:r,body:o}):t.onError&&t.onError(new s.ProtocolError("Invalid event ID in message: "+JSON.stringify(e)))}else t.onError&&t.onError(new s.ProtocolError("Event message has "+e.length+" elements (expected 4)"))},e.prototype.onEOSMessage=function(e,t,n){if(this.subscriptions.remove(t),3===e.length){var r=e[0],o=e[1],i=e[2];"number"==typeof r?"object"!=typeof o||Array.isArray(o)?n.onError&&n.onError(new s.ProtocolError("Invalid EOS ElementsHeaders")):204!==r?n.onError&&n.onError(new s.ErrorResponse(r,o,i)):n.onEnd&&n.onEnd(null):n.onError&&n.onError(new s.ProtocolError("Invalid EOS Status Code"))}else n.onError&&n.onError(new s.ProtocolError("EOS message has "+e.length+" elements (expected 4)"))},e.prototype.onCloseMessage=function(e){var t=e[0],n=e[1],r=e[2];if("number"==typeof t)if("object"!=typeof n||Array.isArray(n))this.close(new s.ProtocolError("Close message: Invalid EOS ElementsHeaders"));else{var o={error:r.error||"network_error",error_description:r.error_description||"Network error"};this.close(new s.ErrorResponse(t,n,o))}else this.close(new s.ProtocolError("Close message: Invalid EOS Status Code"))},e.prototype.onPongMessage=function(e){var t=e[0];this.lastSentPingID!==t&&this.close(new s.ProtocolError("Received pong with ID "+t+" but last sent ping ID was "+this.lastSentPingID)),window.clearTimeout(this.pongTimeout),delete this.pongTimeout,this.lastSentPingID=null},e.prototype.onPingMessage=function(e){var t=e[0];this.sendMessage(this.getMessage(17,t))},e}();t.default=u},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=n(9),s=n(1),i=function(){function e(e){if(!e.locator)throw new Error("Expected `locator` property in Instance options!");var t=e.locator.split(":");if(3!==t.length)throw new Error("The instance locator supplied is invalid. Did you copy it correctly from the Pusher dashboard?");if(!e.serviceName)throw new Error("Expected `serviceName` property in Instance options!");if(!e.serviceVersion)throw new Error("Expected `serviceVersion` property in Instance options!");this.platformVersion=t[0],this.cluster=t[1],this.id=t[2],this.serviceName=e.serviceName,this.serviceVersion=e.serviceVersion,this.host=e.host||this.cluster+"."+o.HOST_BASE,this.logger=e.logger||new s.ConsoleLogger,this.client=e.client||new r.BaseClient({encrypted:e.encrypted,host:this.host,logger:this.logger}),this.tokenProvider=e.tokenProvider}return e.prototype.request=function(e,t){return e.path=this.absPath(e.path),null!=e.headers&&void 0!==e.headers||(e.headers={}),e.tokenProvider=e.tokenProvider||this.tokenProvider,this.client.request(e,t)},e.prototype.subscribeNonResuming=function(e){var t=e.headers||{},n=e.retryStrategyOptions||{},r=e.tokenProvider||this.tokenProvider;return this.client.subscribeNonResuming(this.absPath(e.path),t,e.listeners,n,r)},e.prototype.subscribeResuming=function(e){var t=e.headers||{},n=e.retryStrategyOptions||{},r=e.tokenProvider||this.tokenProvider;return this.client.subscribeResuming(this.absPath(e.path),t,e.listeners,n,e.initialEventId,r)},e.prototype.absPath=function(e){return("/services/"+this.serviceName+"/"+this.serviceVersion+"/"+this.id+"/"+e).replace(/\/+/g,"/").replace(/\/+$/,"")},e}();t.default=i}])},e.exports=n()}(e={exports:{}},e.exports),e.exports);(t=n)&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")&&t.default;var r=n.BaseClient,o=n.HOST_BASE,s=n.Instance,i=n.sendRawRequest;function a(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}function u(e){return function t(n){return 0===arguments.length||a(n)?t:e.apply(this,arguments)}}function c(e){return function t(n,r){switch(arguments.length){case 0:return t;case 1:return a(n)?t:u(function(t){return e(n,t)});default:return a(n)&&a(r)?t:a(n)?u(function(t){return e(t,r)}):a(r)?u(function(t){return e(n,t)}):e(n,r)}}}function h(e,t){var n;e=e||[],t=t||[];var r=e.length,o=t.length,s=[];for(n=0;n<r;)s[s.length]=e[n],n+=1;for(n=0;n<o;)s[s.length]=t[n],n+=1;return s}function d(e,t){switch(e){case 0:return function(){return t.apply(this,arguments)};case 1:return function(e){return t.apply(this,arguments)};case 2:return function(e,n){return t.apply(this,arguments)};case 3:return function(e,n,r){return t.apply(this,arguments)};case 4:return function(e,n,r,o){return t.apply(this,arguments)};case 5:return function(e,n,r,o,s){return t.apply(this,arguments)};case 6:return function(e,n,r,o,s,i){return t.apply(this,arguments)};case 7:return function(e,n,r,o,s,i,a){return t.apply(this,arguments)};case 8:return function(e,n,r,o,s,i,a,u){return t.apply(this,arguments)};case 9:return function(e,n,r,o,s,i,a,u,c){return t.apply(this,arguments)};case 10:return function(e,n,r,o,s,i,a,u,c,h){return t.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function l(e,t,n){return function(){for(var r=[],o=0,s=e,i=0;i<t.length||o<arguments.length;){var u;i<t.length&&(!a(t[i])||o>=arguments.length)?u=t[i]:(u=arguments[o],o+=1),r[i]=u,a(u)||(s-=1),i+=1}return s<=0?n.apply(this,r):d(s,l(e,r,n))}}var f=c(function(e,t){return 1===e?u(t):d(e,l(e,[],t))});function p(e){return function t(n,r,o){switch(arguments.length){case 0:return t;case 1:return a(n)?t:c(function(t,r){return e(n,t,r)});case 2:return a(n)&&a(r)?t:a(n)?c(function(t,n){return e(t,r,n)}):a(r)?c(function(t,r){return e(n,t,r)}):u(function(t){return e(n,r,t)});default:return a(n)&&a(r)&&a(o)?t:a(n)&&a(r)?c(function(t,n){return e(t,n,o)}):a(n)&&a(o)?c(function(t,n){return e(t,r,n)}):a(r)&&a(o)?c(function(t,r){return e(n,t,r)}):a(n)?u(function(t){return e(t,r,o)}):a(r)?u(function(t){return e(n,t,o)}):a(o)?u(function(t){return e(n,r,t)}):e(n,r,o)}}}var g=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)};function m(e,t,n){return function(){if(0===arguments.length)return n();var r=Array.prototype.slice.call(arguments,0),o=r.pop();if(!g(o)){for(var s=0;s<e.length;){if("function"==typeof o[e[s]])return o[e[s]].apply(o,r);s+=1}if(function(e){return"function"==typeof e["@@transducer/step"]}(o))return t.apply(null,r)(o)}return n.apply(this,arguments)}}var v={init:function(){return this.xf["@@transducer/init"]()},result:function(e){return this.xf["@@transducer/result"](e)}},b=c(function(e,t){return t>e?t:e});function y(e,t){for(var n=0,r=t.length,o=Array(r);n<r;)o[n]=e(t[n]),n+=1;return o}function S(e){return"[object String]"===Object.prototype.toString.call(e)}var w=u(function(e){return!!g(e)||!!e&&("object"==typeof e&&(!S(e)&&(1===e.nodeType?!!e.length:0===e.length||e.length>0&&(e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1)))))}),I=function(){function e(e){this.f=e}return e.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},e.prototype["@@transducer/result"]=function(e){return e},e.prototype["@@transducer/step"]=function(e,t){return this.f(e,t)},e}();function k(e){return new I(e)}var E=c(function(e,t){return d(e.length,function(){return e.apply(t,arguments)})});function R(e,t,n){for(var r=n.next();!r.done;){if((t=e["@@transducer/step"](t,r.value))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}r=n.next()}return e["@@transducer/result"](t)}function T(e,t,n,r){return e["@@transducer/result"](n[r](E(e["@@transducer/step"],e),t))}var _="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function P(e,t,n){if("function"==typeof e&&(e=k(e)),w(n))return function(e,t,n){for(var r=0,o=n.length;r<o;){if((t=e["@@transducer/step"](t,n[r]))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}r+=1}return e["@@transducer/result"](t)}(e,t,n);if("function"==typeof n["fantasy-land/reduce"])return T(e,t,n,"fantasy-land/reduce");if(null!=n[_])return R(e,t,n[_]());if("function"==typeof n.next)return R(e,t,n);if("function"==typeof n.reduce)return T(e,t,n,"reduce");throw new TypeError("reduce: list must be array or iterable")}var O=function(){function e(e,t){this.xf=t,this.f=e}return e.prototype["@@transducer/init"]=v.init,e.prototype["@@transducer/result"]=v.result,e.prototype["@@transducer/step"]=function(e,t){return this.xf["@@transducer/step"](e,this.f(t))},e}(),U=c(function(e,t){return new O(e,t)});function C(e,t){return Object.prototype.hasOwnProperty.call(t,e)}var N=Object.prototype.toString,M=!{toString:null}.propertyIsEnumerable("toString"),A=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],D=function(){return arguments.propertyIsEnumerable("length")}(),j=function(e,t){for(var n=0;n<e.length;){if(e[n]===t)return!0;n+=1}return!1},x=u("function"!=typeof Object.keys||D?function(e){if(Object(e)!==e)return[];var t,n,r=[],o=D&&function(){return"[object Arguments]"===N.call(arguments)?function(e){return"[object Arguments]"===N.call(e)}:function(e){return C("callee",e)}}(e);for(t in e)!C(t,e)||o&&"length"===t||(r[r.length]=t);if(M)for(n=A.length-1;n>=0;)C(t=A[n],e)&&!j(r,t)&&(r[r.length]=t),n-=1;return r}:function(e){return Object(e)!==e?[]:Object.keys(e)}),L=c(m(["fantasy-land/map","map"],U,function(e,t){switch(Object.prototype.toString.call(t)){case"[object Function]":return f(t.length,function(){return e.call(this,t.apply(this,arguments))});case"[object Object]":return P(function(n,r){return n[r]=e(t[r]),n},{},x(t));default:return y(e,t)}})),B=c(function(e,t){for(var n=t,r=0;r<e.length;){if(null==n)return;n=n[e[r]],r+=1}return n}),q=c(function(e,t){return B([e],t)}),H=p(P),V=c(function(e,t){return h(t,[e])}),F=u(function(e){for(var t=x(e),n=t.length,r=[],o=0;o<n;)r[o]=e[t[o]],o+=1;return r});var J=u(function(e){return null===e?"Null":void 0===e?"Undefined":Object.prototype.toString.call(e).slice(8,-1)});function G(e,t){return function(){return t.call(this,e.apply(this,arguments))}}function W(e,t){return function(){var n=arguments.length;if(0===n)return t();var r=arguments[n-1];return g(r)||"function"!=typeof r[e]?t.apply(this,arguments):r[e].apply(r,Array.prototype.slice.call(arguments,0,n-1))}}var $=p(W("slice",function(e,t,n){return Array.prototype.slice.call(n,e,t)})),X=u(W("tail",$(1,1/0)));function z(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return d(arguments[0].length,H(G,arguments[0],X(arguments)))}var K=u(function(e){return S(e)?e.split("").reverse().join(""):Array.prototype.slice.call(e,0).reverse()});function Y(){if(0===arguments.length)throw new Error("compose requires at least one argument");return z.apply(this,K(arguments))}function Z(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function Q(e,t,n){for(var r=0,o=n.length;r<o;){if(e(t,n[r]))return!0;r+=1}return!1}var ee=c(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t});function te(e,t,n,r){var o=Z(e);function s(e,t){return ne(e,t,n.slice(),r.slice())}return!Q(function(e,t){return!Q(s,t,e)},Z(t),o)}function ne(e,t,n,r){if(ee(e,t))return!0;var o,s,i=J(e);if(i!==J(t))return!1;if(null==e||null==t)return!1;if("function"==typeof e["fantasy-land/equals"]||"function"==typeof t["fantasy-land/equals"])return"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](t)&&"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](e);if("function"==typeof e.equals||"function"==typeof t.equals)return"function"==typeof e.equals&&e.equals(t)&&"function"==typeof t.equals&&t.equals(e);switch(i){case"Arguments":case"Array":case"Object":if("function"==typeof e.constructor&&"Promise"===(o=e.constructor,null==(s=String(o).match(/^function (\w*)/))?"":s[1]))return e===t;break;case"Boolean":case"Number":case"String":if(typeof e!=typeof t||!ee(e.valueOf(),t.valueOf()))return!1;break;case"Date":if(!ee(e.valueOf(),t.valueOf()))return!1;break;case"Error":return e.name===t.name&&e.message===t.message;case"RegExp":if(e.source!==t.source||e.global!==t.global||e.ignoreCase!==t.ignoreCase||e.multiline!==t.multiline||e.sticky!==t.sticky||e.unicode!==t.unicode)return!1}for(var a=n.length-1;a>=0;){if(n[a]===e)return r[a]===t;a-=1}switch(i){case"Map":return e.size===t.size&&te(e.entries(),t.entries(),n.concat([e]),r.concat([t]));case"Set":return e.size===t.size&&te(e.values(),t.values(),n.concat([e]),r.concat([t]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var u=x(e);if(u.length!==x(t).length)return!1;var c=n.concat([e]),h=r.concat([t]);for(a=u.length-1;a>=0;){var d=u[a];if(!C(d,t)||!ne(t[d],e[d],c,h))return!1;a-=1}return!0}var re=c(function(e,t){return ne(e,t,[],[])});function oe(e,t){return function(e,t,n){var r,o;if("function"==typeof e.indexOf)switch(typeof t){case"number":if(0===t){for(r=1/t;n<e.length;){if(0===(o=e[n])&&1/o===r)return n;n+=1}return-1}if(t!=t){for(;n<e.length;){if("number"==typeof(o=e[n])&&o!=o)return n;n+=1}return-1}return e.indexOf(t,n);case"string":case"boolean":case"function":case"undefined":return e.indexOf(t,n);case"object":if(null===t)return e.indexOf(t,n)}for(;n<e.length;){if(re(e[n],t))return n;n+=1}return-1}(t,e,0)>=0}function se(e){return'"'+e.replace(/\\/g,"\\\\").replace(/[\b]/g,"\\b").replace(/\f/g,"\\f").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\v/g,"\\v").replace(/\0/g,"\\0").replace(/"/g,'\\"')+'"'}var ie=function(e){return(e<10?"0":"")+e},ae="function"==typeof Date.prototype.toISOString?function(e){return e.toISOString()}:function(e){return e.getUTCFullYear()+"-"+ie(e.getUTCMonth()+1)+"-"+ie(e.getUTCDate())+"T"+ie(e.getUTCHours())+":"+ie(e.getUTCMinutes())+":"+ie(e.getUTCSeconds())+"."+(e.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"};var ue=function(){function e(e,t){this.xf=t,this.f=e}return e.prototype["@@transducer/init"]=v.init,e.prototype["@@transducer/result"]=v.result,e.prototype["@@transducer/step"]=function(e,t){return this.f(t)?this.xf["@@transducer/step"](e,t):e},e}(),ce=c(m(["filter"],c(function(e,t){return new ue(e,t)}),function(e,t){return n=t,"[object Object]"===Object.prototype.toString.call(n)?P(function(n,r){return e(t[r])&&(n[r]=t[r]),n},{},x(t)):function(e,t){for(var n=0,r=t.length,o=[];n<r;)e(t[n])&&(o[o.length]=t[n]),n+=1;return o}(e,t);var n})),he=c(function(e,t){return ce((n=e,function(){return!n.apply(this,arguments)}),t);var n});var de=u(function(e){return function e(t,n){var r=function(r){var o=n.concat([t]);return oe(r,o)?"<Circular>":e(r,o)},o=function(e,t){return y(function(t){return se(t)+": "+r(e[t])},t.slice().sort())};switch(Object.prototype.toString.call(t)){case"[object Arguments]":return"(function() { return arguments; }("+y(r,t).join(", ")+"))";case"[object Array]":return"["+y(r,t).concat(o(t,he(function(e){return/^\d+$/.test(e)},x(t)))).join(", ")+"]";case"[object Boolean]":return"object"==typeof t?"new Boolean("+r(t.valueOf())+")":t.toString();case"[object Date]":return"new Date("+(isNaN(t.valueOf())?r(NaN):se(ae(t)))+")";case"[object Null]":return"null";case"[object Number]":return"object"==typeof t?"new Number("+r(t.valueOf())+")":1/t==-1/0?"-0":t.toString(10);case"[object String]":return"object"==typeof t?"new String("+r(t.valueOf())+")":se(t);case"[object Undefined]":return"undefined";default:if("function"==typeof t.toString){var s=t.toString();if("[object Object]"!==s)return s}return"{"+o(t,x(t)).join(", ")+"}"}}(e,[])}),le=c(oe),fe=c(function(e,t){for(var n=[],r=0,o=e.length;r<o;)oe(e[r],t)||oe(e[r],n)||(n[n.length]=e[r]),r+=1;return n}),pe=c(W("forEach",function(e,t){for(var n=t.length,r=0;r<n;)e(t[r]),r+=1;return t})),ge=c(function(e,t){for(var n=x(t),r=0;r<n.length;){var o=n[r];e(t[o],o,t),r+=1}return t}),me=c(C);function ve(e){return e}var be=u(ve),ye=function(){function e(){this._nativeSet="function"==typeof Set?new Set:null,this._items={}}return e.prototype.add=function(e){return!Se(e,!0,this)},e.prototype.has=function(e){return Se(e,!1,this)},e}();function Se(e,t,n){var r,o=typeof e;switch(o){case"string":case"number":return 0===e&&1/e==-1/0?!!n._items["-0"]||(t&&(n._items["-0"]=!0),!1):null!==n._nativeSet?t?(r=n._nativeSet.size,n._nativeSet.add(e),n._nativeSet.size===r):n._nativeSet.has(e):o in n._items?e in n._items[o]||(t&&(n._items[o][e]=!0),!1):(t&&(n._items[o]={},n._items[o][e]=!0),!1);case"boolean":if(o in n._items){var s=e?1:0;return!!n._items[o][s]||(t&&(n._items[o][s]=!0),!1)}return t&&(n._items[o]=e?[!1,!0]:[!0,!1]),!1;case"function":return null!==n._nativeSet?t?(r=n._nativeSet.size,n._nativeSet.add(e),n._nativeSet.size===r):n._nativeSet.has(e):o in n._items?!!oe(e,n._items[o])||(t&&n._items[o].push(e),!1):(t&&(n._items[o]=[e]),!1);case"undefined":return!!n._items[o]||(t&&(n._items[o]=!0),!1);case"object":if(null===e)return!!n._items.null||(t&&(n._items.null=!0),!1);default:return(o=Object.prototype.toString.call(e))in n._items?!!oe(e,n._items[o])||(t&&n._items[o].push(e),!1):(t&&(n._items[o]=[e]),!1)}}var we=c(function(e,t){for(var n,r,o=new ye,s=[],i=0;i<t.length;)n=e(r=t[i]),o.add(n)&&s.push(r),i+=1;return s})(be),Ie=c(function(e,t){return f(e+1,function(){var n,r=arguments[e];if(null!=r&&(n=r[t],"[object Function]"===Object.prototype.toString.call(n)))return r[t].apply(r,Array.prototype.slice.call(arguments,0,e));throw new TypeError(de(r)+' does not have a method named "'+t+'"')})}),ke=Ie(1,"join");var Ee=c(function(e,t){return Array.prototype.slice.call(t,0).sort(e)}),Re=Ie(1,"split"),Te=u(function(e){var t=[];for(var n in e)C(n,e)&&(t[t.length]=[n,e[n]]);return t}),_e="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",Pe=(String.prototype.trim,"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}),Oe=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Ue=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ne=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Me=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,s=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,s=e}finally{try{!r&&a.return&&a.return()}finally{if(o)throw s}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),Ae=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},De=z(ce(function(e){return void 0!==e}),Te,L(function(e){var t=Me(e,2),n=t[0],r=t[1];return n+"="+encodeURIComponent(r)}),ke("&")),je=function(e,t,n){var r=void 0===n?"undefined":Pe(n);if(r!==t)throw new TypeError("expected "+e+" to be of type "+t+" but was of type "+r)},xe=function(e,t,n){if(!Array.isArray(n))throw new TypeError("expected "+e+" to be an array");n.forEach(function(n,r){return je(e+"["+r+"]",t,n)})},Le=function(e,t,n){je(e,"object",n),ge(function(n,r){return je(e+"."+r,t,n)},n)},Be=function(){return Math.floor(Date.now()/1e3)},qe=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.url,r=t.queryParams,o=t.headers,s=t.withCredentials;Oe(this,e),je("url","string",n),r&&je("queryParams","object",r),o&&je("headers","object",o),this.url=n,this.queryParams=r,this.headers=o,this.withCredentials=s,this.fetchToken=this.fetchToken.bind(this),this.fetchFreshToken=this.fetchFreshToken.bind(this),this.cacheIsStale=this.cacheIsStale.bind(this),this.cache=this.cache.bind(this),this.clearCache=this.clearCache.bind(this),this.setUserId=this.setUserId.bind(this)}return Ue(e,[{key:"fetchToken",value:function(){var e=this;return this.cacheIsStale()?(this.req||this.fetchFreshToken()).then(function(t){var n=t.token,r=t.expiresIn;return e.cache(n,r),n}):Promise.resolve(this.cachedToken)}},{key:"fetchFreshToken",value:function(){var e,t,n=this;return this.req=i({method:"POST",url:(e=Ce({user_id:this.userId},this.queryParams),t=this.url,t+(le("?",t)?"&":"?")+De(e)),body:De({grant_type:"client_credentials"}),headers:Ce({"content-type":"application/x-www-form-urlencoded"},this.headers),withCredentials:this.withCredentials}).then(function(e){var t=JSON.parse(e),r=t.access_token,o=t.expires_in;return delete n.req,{token:r,expiresIn:o}}).catch(function(e){throw delete n.req,e}),this.req}},{key:"cacheIsStale",value:function(){return!this.cachedToken||Be()>this.cacheExpiresAt}},{key:"cache",value:function(e,t){this.cachedToken=e,this.cacheExpiresAt=Be()+t}},{key:"clearCache",value:function(){this.cachedToken=void 0,this.cacheExpiresAt=void 0}},{key:"setUserId",value:function(e){this.clearCache(),this.userId=e}}]),e}(),He=function(e){return{createdAt:e.created_at,createdByUserId:e.created_by_id,id:e.id,isPrivate:e.private,name:e.name,updatedAt:e.updated_at,customData:e.custom_data,deletedAt:e.deleted_at,unreadCount:e.unread_count,lastMessageAt:e.last_message_at}},Ve=function(e){return{avatarURL:e.avatar_url,createdAt:e.created_at,customData:e.custom_data,id:e.id,name:e.name,updatedAt:e.updated_at}},Fe=function(e){var t={roomId:e.room_id,id:e.id,senderId:e.user_id,createdAt:e.created_at,updatedAt:e.updated_at,deletedAt:e.deleted_at};return e.parts?t.parts=e.parts.map(function(e){return We(e)}):(t.text=e.text,e.attachment&&(t.attachment=Ge(e.attachment))),t},Je=function(e){return{position:e.position,updatedAt:e.updated_at,userId:e.user_id,roomId:e.room_id,type:e.cursor_type}},Ge=function(e){return{link:e.resource_link,type:e.type,name:e.name}},We=function(e){if(null!=e.content)return{partType:"inline",payload:{type:e.type,content:e.content}};if(null!=e.url)return{partType:"url",payload:{type:e.type,url:e.url}};if(null!=e.attachment)return{partType:"attachment",payload:{type:e.type,name:e.attachment.name,size:e.attachment.size,customData:e.attachment.custom_data,_id:e.attachment.id,_downloadURL:e.attachment.download_url,_expiration:new Date(e.attachment.expiration)}};throw new TypeError("failed to parse message part")},$e=function(){function e(t,n){Oe(this,e),this.avatarURL=t.avatarURL,this.createdAt=t.createdAt,this.customData=t.customData,this.id=t.id,this.name=t.name,this.updatedAt=t.updatedAt,this.presenceStore=n}return Ue(e,[{key:"presence",get:function(){return{state:this.presenceStore[this.id]||"unknown"}}}]),e}(),Xe=function(){function e(t){var n=t.instance,r=t.presenceStore,o=t.logger;Oe(this,e),this.instance=n,this.presenceStore=r,this.logger=o,this.reqs={},this.onSetHooks=[],this.users={},this.set=this.set.bind(this),this.get=this.get.bind(this),this.fetchMissingUsers=this.fetchMissingUsers.bind(this),this.fetchBasicUsers=this.fetchBasicUsers.bind(this),this.snapshot=this.snapshot.bind(this),this.getSync=this.getSync.bind(this),this.decorate=this.decorate.bind(this)}return Ue(e,[{key:"set",value:function(e){return this.users[e.id]=this.decorate(e),this.onSetHooks.forEach(function(t){return t(e.id)}),Promise.resolve(this.users[e.id])}},{key:"get",value:function(e){var t=this;return this.fetchMissingUsers([e]).then(function(){return t.users[e]})}},{key:"fetchMissingUsers",value:function(e){var t=this,n=fe(e,Object.values(this.users).map(function(e){return e.id})),r=fe(n,Object.keys(this.reqs));return r.length>0&&this.fetchBasicUsers(r),Promise.all(e.map(function(e){return t.reqs[e]}))}},{key:"fetchBasicUsers",value:function(e){var t,n,r,o,s,i=this,a=this.instance.request({method:"GET",path:(t="id",n=e,r="/users_by_ids",o=le("?",r)?"":"?",s=L(function(e){return encodeURIComponent(t)+"="+encodeURIComponent(e)},n),r+o+ke("&",s))}).then(function(t){JSON.parse(t).map(function(e){return Ve(e)}).forEach(function(e){return i.set(e)}),e.forEach(function(e){delete i.reqs[e]})}).catch(function(e){throw i.logger.warn("error fetching missing users:",e),e});e.forEach(function(e){i.reqs[e]=a})}},{key:"snapshot",value:function(){return this.users}},{key:"getSync",value:function(e){return this.users[e]}},{key:"decorate",value:function(e){return e?new $e(e,this.presenceStore):void 0}}]),e}(),ze=function(){function e(t){var n=t.basicRoom,r=t.userStore,o=t.isSubscribedTo,s=t.logger;Oe(this,e),this.createdAt=n.createdAt,this.createdByUserId=n.createdByUserId,this.deletedAt=n.deletedAt,this.id=n.id,this.isPrivate=n.isPrivate,this.name=n.name,this.updatedAt=n.updatedAt,this.customData=n.customData,this.unreadCount=n.unreadCount,this.lastMessageAt=n.lastMessageAt,this.userIds=[],this.userStore=r,this.isSubscribedTo=o,this.logger=s,this.eq=this.eq.bind(this)}return Ue(e,[{key:"eq",value:function(e){return this.createdAt===e.createdAt&&this.createdByUserId===e.createdByUserId&&this.deletedAt===e.deletedAt&&this.id===e.id&&this.isPrivate===e.isPrivate&&this.name===e.name&&this.updatedAt===e.updatedAt&&JSON.stringify(this.customData)===JSON.stringify(e.customData)}},{key:"users",get:function(){var e=this;if(!this.isSubscribedTo(this.id)){var t=new Error("Must be subscribed to room "+this.id+" to access users property");throw this.logger.error(t),t}return ce(function(t){return le(t.id,e.userIds)},F(this.userStore.snapshot()))}}]),e}(),Ke=function(){function e(t){Oe(this,e),this.instance=t.instance,this.userStore=t.userStore,this.isSubscribedTo=t.isSubscribedTo,this.logger=t.logger,this.rooms={},this.setSync=this.setSync.bind(this),this.set=this.set.bind(this),this.get=this.get.bind(this),this.popSync=this.popSync.bind(this),this.pop=this.pop.bind(this),this.addUserToRoom=this.addUserToRoom.bind(this),this.removeUserFromRoom=this.removeUserFromRoom.bind(this),this.updateSync=this.updateSync.bind(this),this.update=this.update.bind(this),this.fetchBasicRoom=this.fetchBasicRoom.bind(this),this.snapshot=this.snapshot.bind(this),this.getSync=this.getSync.bind(this),this.decorate=this.decorate.bind(this)}return Ue(e,[{key:"setSync",value:function(e){return this.rooms[e.id]||(this.rooms[e.id]=this.decorate(e)),this.rooms[e.id]}},{key:"set",value:function(e){return Promise.resolve(this.setSync(e))}},{key:"get",value:function(e){var t=this;return Promise.resolve(this.rooms[e]).then(function(n){return n||t.fetchBasicRoom(e).then(function(n){return t.set(e,n)})})}},{key:"popSync",value:function(e){var t=this.rooms[e];return delete this.rooms[e],t}},{key:"pop",value:function(e){return Promise.resolve(this.popSync(e))}},{key:"addUserToRoom",value:function(e,t){return Promise.all([this.get(e).then(function(e){return e.userIds=we(V(t,e.userIds)),e}),this.userStore.fetchMissingUsers([t])]).then(function(e){return Me(e,1)[0]})}},{key:"removeUserFromRoom",value:function(e,t){return this.get(e).then(function(e){return e.userIds=e.userIds.filter(function(e){return e!==t}),e})}},{key:"updateSync",value:function(e,t){var n=this.getSync(e);for(var r in t)n[r]=t[r];return n}},{key:"update",value:function(e,t){var n=this;return Promise.all([this.get(e).then(function(){return n.updateSync(e,t)}),this.userStore.fetchMissingUsers(t.userIds||[])]).then(function(e){return Me(e,1)[0]})}},{key:"fetchBasicRoom",value:function(e){var t=this;return this.instance.request({method:"GET",path:"/rooms/"+encodeURIComponent(e)}).then(z(JSON.parse,He)).catch(function(n){t.logger.warn("error fetching details for room "+e+":",n)})}},{key:"snapshot",value:function(){return this.rooms}},{key:"getSync",value:function(e){return this.rooms[e]}},{key:"decorate",value:function(e){return e?new ze({basicRoom:e,userStore:this.userStore,isSubscribedTo:this.isSubscribedTo,logger:this.logger}):void 0}}]),e}(),Ye=function(){function e(t,n,r){Oe(this,e),this.position=t.position,this.updatedAt=t.updatedAt,this.userId=t.userId,this.roomId=t.roomId,this.type=t.type,this.userStore=n,this.roomStore=r}return Ue(e,[{key:"user",get:function(){return this.userStore.getSync(this.userId)}},{key:"room",get:function(){return this.roomStore.getSync(this.roomId)}}]),e}(),Ze=function(){function e(t){var n=t.instance,r=t.userStore,o=t.roomStore,s=t.logger;Oe(this,e),this.instance=n,this.userStore=r,this.roomStore=o,this.logger=s,this.cursors={},this.set=this.set.bind(this),this.get=this.get.bind(this),this.getSync=this.getSync.bind(this),this.fetchBasicCursor=this.fetchBasicCursor.bind(this),this.decorate=this.decorate.bind(this)}return Ue(e,[{key:"set",value:function(e){var t=this,n=Qe(e.userId,e.roomId);return this.cursors[n]=this.decorate(e),this.userStore.fetchMissingUsers([e.userId]).then(function(){return t.cursors[n]})}},{key:"get",value:function(e,t){var n=this,r=Qe(e,t);return this.cursors[r]?Promise.resolve(this.cursors[r]):this.fetchBasicCursor(e,t).then(function(e){return n.set(e)})}},{key:"getSync",value:function(e,t){return this.cursors[Qe(e,t)]}},{key:"fetchBasicCursor",value:function(e,t){var n=this;return this.instance.request({method:"GET",path:"/cursors/0/rooms/"+encodeURIComponent(t)+"/users/"+encodeURIComponent(e)}).then(function(e){var t=JSON.parse(e);if(t)return Je(t)}).catch(function(e){throw n.logger.warn("error fetching cursor:",e),e})}},{key:"decorate",value:function(e){return e?new Ye(e,this.userStore,this.roomStore):void 0}}]),e}(),Qe=function(e,t){return encodeURIComponent(e)+"/"+encodeURIComponent(t)},et=2e4,tt=function(){function e(t){var n=t.hooks,r=t.instance,o=t.logger;Oe(this,e),this.hooks=n,this.instance=r,this.logger=o,this.lastSentRequests={},this.timers={},this.sendThrottledRequest=this.sendThrottledRequest.bind(this),this.onIsTyping=this.onIsTyping.bind(this),this.onStarted=this.onStarted.bind(this),this.onStopped=this.onStopped.bind(this)}return Ue(e,[{key:"sendThrottledRequest",value:function(e){var t=this,n=Date.now(),r=this.lastSentRequests[e];return r&&n-r<1e3?Promise.resolve():(this.lastSentRequests[e]=n,this.instance.request({method:"POST",path:"/rooms/"+encodeURIComponent(e)+"/typing_indicators"}).catch(function(n){throw delete t.typingRequestSent[e],t.logger.warn("Error sending typing indicator in room "+e,n),n}))}},{key:"onIsTyping",value:function(e,t){var n=this;this.timers[e.id]||(this.timers[e.id]={}),this.timers[e.id][t.id]?clearTimeout(this.timers[e.id][t.id]):this.onStarted(e,t),this.timers[e.id][t.id]=setTimeout(function(){n.onStopped(e,t),delete n.timers[e.id][t.id]},1500)}},{key:"onStarted",value:function(e,t){this.hooks.global.onUserStartedTyping&&this.hooks.global.onUserStartedTyping(e,t),this.hooks.rooms[e.id]&&this.hooks.rooms[e.id].onUserStartedTyping&&this.hooks.rooms[e.id].onUserStartedTyping(t)}},{key:"onStopped",value:function(e,t){this.hooks.global.onUserStoppedTyping&&this.hooks.global.onUserStoppedTyping(e,t),this.hooks.rooms[e.id]&&this.hooks.rooms[e.id].onUserStoppedTyping&&this.hooks.rooms[e.id].onUserStoppedTyping(t)}}]),e}();function nt(e){var t=e.basicCursors,n=e.cursorStore,r=e.onNewCursorHook;return Promise.all(t.map(function(e){var t=n.getSync(e.userId,e.roomId);if(!t||t.position!==e.position)return n.set(e).then(function(e){r&&r(e)})}))}var rt=function(){function e(t){Oe(this,e),this.userId=t.userId,this.hooks=t.hooks,this.instance=t.instance,this.roomStore=t.roomStore,this.cursorStore=t.cursorStore,this.roomSubscriptions=t.roomSubscriptions,this.logger=t.logger,this.connectionTimeout=t.connectionTimeout,this.currentUser=t.currentUser,this.connect=this.connect.bind(this),this.cancel=this.cancel.bind(this),this.onEvent=this.onEvent.bind(this),this.onInitialState=this.onInitialState.bind(this),this.onAddedToRoom=this.onAddedToRoom.bind(this),this.onRemovedFromRoom=this.onRemovedFromRoom.bind(this),this.onRoomUpdated=this.onRoomUpdated.bind(this),this.onRoomDeleted=this.onRoomDeleted.bind(this)}return Ue(e,[{key:"connect",value:function(){var e=this;return new Promise(function(t,n){e.timeout=setTimeout(function(){n(new Error("user subscription timed out"))},e.connectionTimeout),e.onSubscriptionEstablished=function(n){clearTimeout(e.timeout),t(n)},e.sub=e.instance.subscribeNonResuming({path:"/users",listeners:{onError:function(t){clearTimeout(e.timeout),n(t)},onEvent:e.onEvent}})})}},{key:"cancel",value:function(){clearTimeout(this.timeout);try{this.sub&&this.sub.unsubscribe()}catch(e){this.logger.debug("error when cancelling user subscription",e)}}},{key:"onEvent",value:function(e){var t=e.body;switch(t.event_name){case"initial_state":this.onInitialState(t.data);break;case"added_to_room":this.onAddedToRoom(t.data);break;case"removed_from_room":this.onRemovedFromRoom(t.data);break;case"room_updated":this.onRoomUpdated(t.data);break;case"room_deleted":this.onRoomDeleted(t.data);break;case"new_cursor":this.onNewCursor(t.data)}}},{key:"onInitialState",value:function(e){var t=e.current_user,n=e.rooms,r=e.cursors,o=Ve(t),s=n.map(function(e){return He(e)}),i=r.map(function(e){return Je(e)});this.established?function(e){var t=e.basicUser,n=e.basicRooms,r=e.basicCursors,o=e.currentUser,s=e.roomStore,i=e.cursorStore,a=e.hooks;o.setPropertiesFromBasicUser(t);var u=!0,c=!1,h=void 0;try{for(var d,l=n[Symbol.iterator]();!(u=(d=l.next()).done);u=!0){var f=d.value,p=s.getSync(f.id);if(!p){var g=s.setSync(f);a.global.onAddedToRoom&&a.global.onAddedToRoom(g)}p&&!p.eq(f)&&(s.updateSync(f.id,f),a.global.onRoomUpdated&&a.global.onRoomUpdated(p))}}catch(e){c=!0,h=e}finally{try{!u&&l.return&&l.return()}finally{if(c)throw h}}var m=function(e){if(!n.some(function(t){return t.id===e})){var t=s.popSync(e);a.global.onRemovedFromRoom&&a.global.onRemovedFromRoom(t)}};for(var v in s.snapshot())m(v);nt({basicCursors:r,cursorStore:i,onNewCursorHook:a.global.onNewReadCursor})}({basicUser:o,basicRooms:s,basicCursors:i,currentUser:this.currentUser,roomStore:this.roomStore,cursorStore:this.cursorStore,hooks:this.hooks}):(this.established=!0,this.onSubscriptionEstablished({basicUser:o,basicRooms:s,basicCursors:i}))}},{key:"onAddedToRoom",value:function(e){var t=this,n=e.room;this.roomStore.set(He(n)).then(function(e){t.hooks.global.onAddedToRoom&&t.hooks.global.onAddedToRoom(e)})}},{key:"onRemovedFromRoom",value:function(e){var t=this,n=e.room_id;this.roomStore.pop(n).then(function(e){e&&t.hooks.global.onRemovedFromRoom&&t.hooks.global.onRemovedFromRoom(e)})}},{key:"onRoomUpdated",value:function(e){var t=this,n=e.room,r=He(n);this.roomStore.update(r.id,r).then(function(e){t.hooks.global.onRoomUpdated&&t.hooks.global.onRoomUpdated(e)})}},{key:"onRoomDeleted",value:function(e){var t=this,n=e.room_id;this.roomStore.pop(n).then(function(e){e&&t.hooks.global.onRoomDeleted&&t.hooks.global.onRoomDeleted(e)})}},{key:"onNewCursor",value:function(e){var t=this;return this.cursorStore.set(Je(e)).then(function(e){t.hooks.global.onNewReadCursor&&0===e.type&&t.hooks.global.onNewReadCursor(e)})}}]),e}(),ot=function(){function e(t){Oe(this,e),this.userId=t.userId,this.instance=t.instance,this.logger=t.logger,this.connectionTimeout=t.connectionTimeout}return Ue(e,[{key:"connect",value:function(){var e=this;return new Promise(function(t,n){e.timeout=setTimeout(function(){n(new Error("presence subscription timed out"))},e.connectionTimeout),e.sub=e.instance.subscribeNonResuming({path:"/users/"+encodeURIComponent(e.userId)+"/register",listeners:{onOpen:function(){clearTimeout(e.timeout),t()},onError:function(t){clearTimeout(e.timeout),n(t)}}})})}},{key:"cancel",value:function(){clearTimeout(this.timeout);try{this.sub&&this.sub.unsubscribe()}catch(e){this.logger.debug("error when cancelling presence subscription",e)}}}]),e}(),st=function(){function e(t){Oe(this,e),this.userId=t.userId,this.hooks=t.hooks,this.instance=t.instance,this.userStore=t.userStore,this.roomStore=t.roomStore,this.presenceStore=t.presenceStore,this.logger=t.logger,this.connectionTimeout=t.connectionTimeout,this.connect=this.connect.bind(this),this.cancel=this.cancel.bind(this),this.onEvent=this.onEvent.bind(this),this.onPresenceState=this.onPresenceState.bind(this)}return Ue(e,[{key:"connect",value:function(){var e=this;return new Promise(function(t,n){e.timeout=setTimeout(function(){n(new Error("user presence subscription timed out"))},e.connectionTimeout),e.onSubscriptionEstablished=function(){clearTimeout(e.timeout),t()},e.sub=e.instance.subscribeNonResuming({path:"/users/"+encodeURIComponent(e.userId),listeners:{onError:function(t){clearTimeout(e.timeout),n(t)},onEvent:e.onEvent}})})}},{key:"cancel",value:function(){clearTimeout(this.timeout);try{this.sub&&this.sub.unsubscribe()}catch(e){this.logger.debug("error when cancelling user presence subscription",e)}}},{key:"onEvent",value:function(e){var t=e.body;switch(t.event_name){case"presence_state":this.onPresenceState(t.data)}}},{key:"onPresenceState",value:function(e){var t=this;this.onSubscriptionEstablished();var n=this.presenceStore[this.userId]||"unknown",r=function(e){return{state:["online","offline"].includes(e.state)?e.state:"unknown"}}(e).state;r!==n&&(this.presenceStore[this.userId]=r,this.userStore.get(this.userId).then(function(e){t.hooks.global.onPresenceChanged&&t.hooks.global.onPresenceChanged({current:r,previous:n},e),Y(pe(function(o){var s=Me(o,2),i=s[0],a=s[1];return t.roomStore.get(i).then(function(t){le(e.id,t.userIds)&&a.onPresenceChanged({current:r,previous:n},e)})}),ce(function(e){return void 0!==e[1].onPresenceChanged}),Te)(t.hooks.rooms)}))}}]),e}(),it=function(){function e(t){Oe(this,e),this.onNewCursorHook=t.onNewCursorHook,this.roomId=t.roomId,this.cursorStore=t.cursorStore,this.instance=t.instance,this.logger=t.logger,this.connectionTimeout=t.connectionTimeout,this.connect=this.connect.bind(this),this.cancel=this.cancel.bind(this),this.onEvent=this.onEvent.bind(this),this.onInitialState=this.onInitialState.bind(this),this.onNewCursor=this.onNewCursor.bind(this)}return Ue(e,[{key:"connect",value:function(){var e=this;return new Promise(function(t,n){e.timeout=setTimeout(function(){n(new Error("cursor subscription timed out"))},e.connectionTimeout),e.onSubscriptionEstablished=function(n){clearTimeout(e.timeout),t(n)},e.sub=e.instance.subscribeNonResuming({path:"/cursors/0/rooms/"+encodeURIComponent(e.roomId),listeners:{onError:function(t){clearTimeout(e.timeout),n(t)},onEvent:e.onEvent}})})}},{key:"cancel",value:function(){clearTimeout(this.timeout);try{this.sub&&this.sub.unsubscribe()}catch(e){this.logger.debug("error when cancelling cursor subscription",e)}}},{key:"onEvent",value:function(e){var t=e.body;switch(t.event_name){case"initial_state":this.onInitialState(t.data);break;case"new_cursor":this.onNewCursor(t.data)}}},{key:"onInitialState",value:function(e){var t=this,n=e.cursors.map(function(e){return Je(e)});this.established?nt({basicCursors:n,cursorStore:this.cursorStore,onNewCursorHook:this.onNewCursorHook}):(this.established=!0,Promise.all(n.map(function(e){return t.cursorStore.set(e)})).then(this.onSubscriptionEstablished))}},{key:"onNewCursor",value:function(e){var t=this;return this.cursorStore.set(Je(e)).then(function(e){return t.onNewCursorHook(e)})}}]),e}(),at=function(){function e(t,n,r){Oe(this,e),this.type=t.type,this.name=t.name,this.size=t.size,void 0!==t.customData&&(this.customData=t.customData),this._id=t._id,this._downloadURL=t._downloadURL,this._expiration=t._expiration,this._roomId=n,this._instance=r,this.url=this.url.bind(this),this.urlExpiry=this.urlExpiry.bind(this),this._fetchNewDownloadURL=this._fetchNewDownloadURL.bind(this)}return Ue(e,[{key:"url",value:function(){return this.urlExpiry().getTime()-Date.now()<18e5?this._fetchNewDownloadURL():Promise.resolve(this._downloadURL)}},{key:"urlExpiry",value:function(){return this._expiration}},{key:"_fetchNewDownloadURL",value:function(){var e=this;return this._instance.request({method:"GET",path:"rooms/"+encodeURIComponent(this._roomId)+"/attachments/"+this._id}).then(function(t){var n=JSON.parse(t),r=n.download_url,o=n.expiration;return e._downloadURL=r,e._expiration=new Date(o),e._downloadURL})}}]),e}(),ut=function(){function e(t,n,r,o){var s=this;Oe(this,e),this.id=t.id,this.senderId=t.senderId,this.roomId=t.roomId,this.createdAt=t.createdAt,this.updatedAt=t.updatedAt,this.deletedAt=t.deletedAt,t.parts?this.parts=t.parts.map(function(e){var t=e.partType,n=e.payload;return"attachment"===t?{partType:t,payload:new at(n,s.roomId,o)}:{partType:t,payload:n}}):(this.text=t.text,t.attachment&&(this.attachment=t.attachment)),this.userStore=n,this.roomStore=r}return Ue(e,[{key:"sender",get:function(){return this.userStore.getSync(this.senderId)}},{key:"room",get:function(){return this.roomStore.getSync(this.roomId)}}]),e}(),ct=function(){function e(t){Oe(this,e),this.roomId=t.roomId,this.messageLimit=t.messageLimit,this.userId=t.userId,this.instance=t.instance,this.userStore=t.userStore,this.roomStore=t.roomStore,this.typingIndicators=t.typingIndicators,this.messageBuffer=[],this.logger=t.logger,this.connectionTimeout=t.connectionTimeout,this.onMessageHook=t.onMessageHook,this.onMessageDeletedHook=t.onMessageDeletedHook,this.connect=this.connect.bind(this),this.cancel=this.cancel.bind(this),this.onEvent=this.onEvent.bind(this),this.onMessage=this.onMessage.bind(this),this.onMessageDeleted=this.onMessageDeleted.bind(this),this.flushBuffer=this.flushBuffer.bind(this),this.onIsTyping=this.onIsTyping.bind(this)}return Ue(e,[{key:"connect",value:function(){var e=this;return new Promise(function(t,n){e.timeout=setTimeout(function(){n(new Error("message subscription timed out"))},e.connectionTimeout),e.sub=e.instance.subscribeResuming({path:"/rooms/"+encodeURIComponent(e.roomId)+"?"+De({message_limit:e.messageLimit}),listeners:{onOpen:function(){clearTimeout(e.timeout),t()},onError:function(t){clearTimeout(e.timeout),n(t)},onEvent:e.onEvent}})})}},{key:"cancel",value:function(){clearTimeout(this.timeout);try{this.sub&&this.sub.unsubscribe()}catch(e){this.logger.debug("error when cancelling message subscription",e)}}},{key:"onEvent",value:function(e){var t=e.body;switch(t.event_name){case"new_message":this.onMessage(t.data);break;case"message_deleted":this.onMessageDeleted(t.data);break;case"is_typing":this.onIsTyping(t.data)}}},{key:"onMessage",value:function(e){var t=this,n={message:new ut(Fe(e),this.userStore,this.roomStore,this.instance),ready:!1};this.messageBuffer.push(n),this.userStore.fetchMissingUsers([n.message.senderId]).catch(function(e){t.logger.error("error fetching missing user information:",e)}).then(function(){n.ready=!0,t.flushBuffer()})}},{key:"onMessageDeleted",value:function(e){this.onMessageDeletedHook(e.message_id)}},{key:"flushBuffer",value:function(){for(;this.messageBuffer.length>0&&this.messageBuffer[0].ready;)this.onMessageHook(this.messageBuffer.shift().message)}},{key:"onIsTyping",value:function(e){var t=this,n=e.user_id;n!==this.userId&&Promise.all([this.roomStore.get(this.roomId),this.userStore.get(n)]).then(function(e){var n=Me(e,2),r=n[0],o=n[1];return t.typingIndicators.onIsTyping(r,o)})}}]),e}(),ht=function(){function e(t){Oe(this,e),this.roomId=t.roomId,this.instance=t.instance,this.userStore=t.userStore,this.roomStore=t.roomStore,this.logger=t.logger,this.connectionTimeout=t.connectionTimeout,this.onUserJoinedRoomHook=t.onUserJoinedRoomHook,this.onUserLeftRoomHook=t.onUserLeftRoomHook,this.connect=this.connect.bind(this),this.cancel=this.cancel.bind(this),this.onEvent=this.onEvent.bind(this),this.onInitialState=this.onInitialState.bind(this),this.onUserJoined=this.onUserJoined.bind(this),this.onUserLeft=this.onUserLeft.bind(this)}return Ue(e,[{key:"connect",value:function(){var e=this;return new Promise(function(t,n){e.timeout=setTimeout(function(){n(new Error("membership subscription timed out"))},e.connectionTimeout),e.onSubscriptionEstablished=function(n){clearTimeout(e.timeout),t(n)},e.sub=e.instance.subscribeNonResuming({path:"/rooms/"+encodeURIComponent(e.roomId)+"/memberships",listeners:{onError:function(t){clearTimeout(e.timeout),n(t)},onEvent:e.onEvent}})})}},{key:"cancel",value:function(){clearTimeout(this.timeout);try{this.sub&&this.sub.unsubscribe()}catch(e){this.logger.debug("error when cancelling membership subscription",e)}}},{key:"onEvent",value:function(e){var t=e.body;switch(t.event_name){case"initial_state":this.onInitialState(t.data);break;case"user_joined":this.onUserJoined(t.data);break;case"user_left":this.onUserLeft(t.data)}}},{key:"onInitialState",value:function(e){var t=this,n=e.user_ids;this.established?function(e){var t=e.userIds,n=e.roomId,r=e.roomStore,o=e.userStore,s=e.onUserJoinedRoomHook,i=e.onUserLeftRoomHook;o.fetchMissingUsers(t).then(function(){var e=r.getSync(n);return t.filter(function(t){return!e.userIds.includes(t)}).forEach(function(t){return o.get(t).then(function(t){return s(e,t)})}),e.userIds.filter(function(e){return!t.includes(e)}).forEach(function(t){return o.get(t).then(function(t){return i(e,t)})}),r.update(n,{userIds:t})})}({userIds:n,roomId:this.roomId,roomStore:this.roomStore,userStore:this.userStore,onUserJoinedRoomHook:this.onUserJoinedRoomHook,onUserLeftRoomHook:this.onUserLeftRoomHook}):(this.established=!0,this.roomStore.update(this.roomId,{userIds:n}).then(function(){t.onSubscriptionEstablished()}))}},{key:"onUserJoined",value:function(e){var t=this,n=e.user_id;this.roomStore.addUserToRoom(this.roomId,n).then(function(e){return t.userStore.get(n).then(function(n){return t.onUserJoinedRoomHook(e,n)})})}},{key:"onUserLeft",value:function(e){var t=this,n=e.user_id;this.roomStore.removeUserFromRoom(this.roomId,n).then(function(e){return t.userStore.get(n).then(function(n){return t.onUserLeftRoomHook(e,n)})})}}]),e}(),dt=function(){function e(t){Oe(this,e),this.buffer=[],this.messageSub=new ct({roomId:t.roomId,messageLimit:t.messageLimit,userId:t.userId,instance:t.serverInstance,userStore:t.userStore,roomStore:t.roomStore,typingIndicators:t.typingIndicators,logger:t.logger,connectionTimeout:t.connectionTimeout,onMessageHook:this.bufferWhileConnecting(function(e){t.hooks.rooms[t.roomId]&&t.hooks.rooms[t.roomId].onMessage&&t.hooks.rooms[t.roomId].onMessage(e)}),onMessageDeletedHook:this.bufferWhileConnecting(function(e){t.hooks.rooms[t.roomId]&&t.hooks.rooms[t.roomId].onMessageDeleted&&t.hooks.rooms[t.roomId].onMessageDeleted(e)})}),this.cursorSub=new it({roomId:t.roomId,cursorStore:t.cursorStore,instance:t.cursorsInstance,logger:t.logger,connectionTimeout:t.connectionTimeout,onNewCursorHook:this.bufferWhileConnecting(function(e){t.hooks.rooms[t.roomId]&&t.hooks.rooms[t.roomId].onNewReadCursor&&0===e.type&&e.userId!==t.userId&&t.hooks.rooms[t.roomId].onNewReadCursor(e)})}),this.membershipSub=new ht({roomId:t.roomId,instance:t.serverInstance,userStore:t.userStore,roomStore:t.roomStore,logger:t.logger,connectionTimeout:t.connectionTimeout,onUserJoinedRoomHook:this.bufferWhileConnecting(function(e,n){t.hooks.global.onUserJoinedRoom&&t.hooks.global.onUserJoinedRoom(e,n),t.hooks.rooms[e.id]&&t.hooks.rooms[e.id].onUserJoined&&t.hooks.rooms[e.id].onUserJoined(n)}),onUserLeftRoomHook:this.bufferWhileConnecting(function(e,n){t.hooks.global.onUserLeftRoom&&t.hooks.global.onUserLeftRoom(e,n),t.hooks.rooms[e.id]&&t.hooks.rooms[e.id].onUserLeft&&t.hooks.rooms[e.id].onUserLeft(n)})})}return Ue(e,[{key:"connect",value:function(){var e=this;return this.cancelled?Promise.reject(new Error("attempt to connect a cancelled room subscription")):Promise.all([this.messageSub.connect(),this.cursorSub.connect(),this.membershipSub.connect()]).then(function(){return e.flushBuffer()})}},{key:"cancel",value:function(){this.cancelled=!0,this.messageSub.cancel(),this.cursorSub.cancel(),this.membershipSub.cancel()}},{key:"bufferWhileConnecting",value:function(e){var t=this;return function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];t.connected?e.apply(void 0,r):t.buffer.push(e.bind.apply(e,[t].concat(r)))}}},{key:"flushBuffer",value:function(){this.connected=!0,this.buffer.forEach(function(e){return e()}),delete this.buffer}}]),e}(),lt=function(){function e(t){var n=this,r=t.serverInstanceV2,o=t.serverInstanceV6,s=t.connectionTimeout,i=t.cursorsInstance,a=t.filesInstance,u=t.hooks,c=t.id,h=t.presenceInstance,d=t.beamsTokenProviderInstance,l=t.beamsInstanceInitFn;Oe(this,e),this.hooks={global:u,rooms:{}},this.id=c,this.encodedId=encodeURIComponent(this.id),this.serverInstanceV2=r,this.serverInstanceV6=o,this.filesInstance=a,this.cursorsInstance=i,this.connectionTimeout=s,this.presenceInstance=h,this.beamsTokenProviderInstance=d,this.beamsInstanceInitFn=l,this.logger=o.logger,this.presenceStore={},this.userStore=new Xe({instance:this.serverInstanceV6,presenceStore:this.presenceStore,logger:this.logger}),this.roomStore=new Ke({instance:this.serverInstanceV6,userStore:this.userStore,isSubscribedTo:function(e){return n.isSubscribedTo(e)},logger:this.logger}),this.cursorStore=new Ze({instance:this.cursorsInstance,userStore:this.userStore,roomStore:this.roomStore,logger:this.logger}),this.typingIndicators=new tt({hooks:this.hooks,instance:this.serverInstanceV6,logger:this.logger}),this.userStore.onSetHooks.push(function(e){return n.subscribeToUserPresence(e)}),this.roomSubscriptions={},this.readCursorBuffer={},this.userPresenceSubscriptions={},this.setReadCursor=this.setReadCursor.bind(this),this.readCursor=this.readCursor.bind(this),this.isTypingIn=this.isTypingIn.bind(this),this.createRoom=this.createRoom.bind(this),this.getJoinableRooms=this.getJoinableRooms.bind(this),this.joinRoom=this.joinRoom.bind(this),this.leaveRoom=this.leaveRoom.bind(this),this.addUserToRoom=this.addUserToRoom.bind(this),this.removeUserFromRoom=this.removeUserFromRoom.bind(this),this.sendMessage=this.sendMessage.bind(this),this.sendSimpleMessage=this.sendSimpleMessage.bind(this),this.sendMultipartMessage=this.sendMultipartMessage.bind(this),this.fetchMessages=this.fetchMessages.bind(this),this.fetchMultipartMessages=this.fetchMultipartMessages.bind(this),this.subscribeToRoom=this.subscribeToRoom.bind(this),this.subscribeToRoomMultipart=this.subscribeToRoomMultipart.bind(this),this.updateRoom=this.updateRoom.bind(this),this.deleteRoom=this.deleteRoom.bind(this),this.setReadCursorRequest=this.setReadCursorRequest.bind(this),this.uploadDataAttachment=this.uploadDataAttachment.bind(this),this.isMemberOf=this.isMemberOf.bind(this),this.isSubscribedTo=this.isSubscribedTo.bind(this),this.decorateMessage=this.decorateMessage.bind(this),this.setPropertiesFromBasicUser=this.setPropertiesFromBasicUser.bind(this),this.establishUserSubscription=this.establishUserSubscription.bind(this),this.establishPresenceSubscription=this.establishPresenceSubscription.bind(this),this.subscribeToUserPresence=this.subscribeToUserPresence.bind(this),this.disconnect=this.disconnect.bind(this),this._uploadAttachment=this._uploadAttachment.bind(this)}return Ue(e,[{key:"setReadCursor",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.roomId,r=t.position;return je("roomId","string",n),je("position","number",r),new Promise(function(t,o){void 0!==e.readCursorBuffer[n]?(e.readCursorBuffer[n].position=b(e.readCursorBuffer[n].position,r),e.readCursorBuffer[n].callbacks.push({resolve:t,reject:o})):(e.readCursorBuffer[n]={position:r,callbacks:[{resolve:t,reject:o}]},setTimeout(function(){e.setReadCursorRequest(Ce({roomId:n},e.readCursorBuffer[n])),delete e.readCursorBuffer[n]},500))})}},{key:"readCursor",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.roomId,n=e.userId,r=void 0===n?this.id:n;if(je("roomId","string",t),je("userId","string",r),r!==this.id&&!this.isSubscribedTo(t)){var o=new Error("Must be subscribed to room "+t+" to access member's read cursors");throw this.logger.error(o),o}return this.cursorStore.getSync(r,t)}},{key:"isTypingIn",value:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).roomId;return je("roomId","string",e),this.typingIndicators.sendThrottledRequest(e)}},{key:"createRoom",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.id,r=t.name,o=t.addUserIds,s=t.customData,i=Ne(t,["id","name","addUserIds","customData"]);return n&&je("id","string",n),r&&je("name","string",r),o&&xe("addUserIds","string",o),s&&je("customData","object",s),this.serverInstanceV6.request({method:"POST",path:"/rooms",json:{id:n,created_by_id:this.id,name:r,private:!!i.private,user_ids:o,custom_data:s}}).then(function(t){return e.roomStore.set(He(JSON.parse(t)))}).catch(function(t){throw e.logger.warn("error creating room:",t),t})}},{key:"getJoinableRooms",value:function(){var e=this;return this.serverInstanceV6.request({method:"GET",path:"/users/"+this.encodedId+"/rooms?joinable=true"}).then(z(JSON.parse,L(He))).catch(function(t){throw e.logger.warn("error getting joinable rooms:",t),t})}},{key:"joinRoom",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).roomId;return je("roomId","string",t),this.isMemberOf(t)?this.roomStore.get(t):this.serverInstanceV6.request({method:"POST",path:"/users/"+this.encodedId+"/rooms/"+encodeURIComponent(t)+"/join"}).then(function(t){return e.roomStore.set(He(JSON.parse(t)))}).catch(function(n){throw e.logger.warn("error joining room "+t+":",n),n})}},{key:"leaveRoom",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).roomId;return je("roomId","string",t),this.roomStore.get(t).then(function(n){return e.serverInstanceV6.request({method:"POST",path:"/users/"+e.encodedId+"/rooms/"+encodeURIComponent(t)+"/leave"}).then(function(){return n})}).catch(function(n){throw e.logger.warn("error leaving room "+t+":",n),n})}},{key:"addUserToRoom",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.userId,r=t.roomId;return je("userId","string",n),je("roomId","string",r),this.serverInstanceV6.request({method:"PUT",path:"/rooms/"+encodeURIComponent(r)+"/users/add",json:{user_ids:[n]}}).then(function(){return e.roomStore.addUserToRoom(r,n)}).catch(function(t){throw e.logger.warn("error adding user "+n+" to room "+r+":",t),t})}},{key:"removeUserFromRoom",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.userId,r=t.roomId;return je("userId","string",n),je("roomId","string",r),this.serverInstanceV6.request({method:"PUT",path:"/rooms/"+encodeURIComponent(r)+"/users/remove",json:{user_ids:[n]}}).then(function(){return e.roomStore.removeUserFromRoom(r,n)}).catch(function(t){throw e.logger.warn("error removing user "+n+" from room "+r+":",t),t})}},{key:"sendMessage",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.text,r=t.roomId,o=t.attachment;return je("text","string",n),je("roomId","string",r),new Promise(function(t,n){void 0!==o&&ft(o)?t(e.uploadDataAttachment(r,o)):void 0!==o&&pt(o)?t({resource_link:o.link,type:o.type}):void 0!==o?n(new TypeError("attachment was malformed")):t()}).then(function(t){return e.serverInstanceV2.request({method:"POST",path:"/rooms/"+encodeURIComponent(r)+"/messages",json:{text:n,attachment:t}})}).then(z(JSON.parse,q("message_id"))).catch(function(t){throw e.logger.warn("error sending message to room "+r+":",t),t})}},{key:"sendSimpleMessage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.roomId,n=e.text;return this.sendMultipartMessage({roomId:t,parts:[{type:"text/plain",content:n}]})}},{key:"sendMultipartMessage",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.roomId,r=t.parts;return je("roomId","string",n),xe("parts","object",r),0===r.length?Promise.reject(new TypeError("message must contain at least one part")):Promise.all(r.map(function(t){return t.type=t.type||t.file&&t.file.type,je("part.type","string",t.type),t.content&&je("part.content","string",t.content),t.url&&je("part.url","string",t.url),t.name&&je("part.name","string",t.name),t.file&&je("part.file.size","number",t.file.size),t.file?e._uploadAttachment({roomId:n,part:t}):t})).then(function(t){return e.serverInstanceV6.request({method:"POST",path:"/rooms/"+encodeURIComponent(n)+"/messages",json:{parts:t.map(function(e){return{type:e.type,content:e.content,url:e.url,attachment:e.attachment}})}})}).then(function(e){return JSON.parse(e).message_id}).catch(function(t){throw e.logger.warn("error sending message to room "+n+":",t),t})}},{key:"fetchMessages",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.roomId,r=t.initialId,o=t.limit,s=t.direction,i=t.serverInstance;return je("roomId","string",n),r&&je("initialId","number",r),o&&je("limit","number",o),s&&function(e,t,n){if(!le(n,t))throw new TypeError("expected "+e+" to be one of "+t+" but was "+n)}("direction",["older","newer"],s),(i||this.serverInstanceV2).request({method:"GET",path:"/rooms/"+encodeURIComponent(n)+"/messages?"+De({initial_id:r,limit:o,direction:s})}).then(function(t){var n=JSON.parse(t).map(function(t){return e.decorateMessage(Fe(t))});return e.userStore.fetchMissingUsers(we(L(q("senderId"),n))).then(function(){return Ee(function(e,t){return e.id-t.id},n)})}).catch(function(t){throw e.logger.warn("error fetching messages from room "+n+":",t),t})}},{key:"fetchMultipartMessages",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.fetchMessages(Ce({},e,{serverInstance:this.serverInstanceV6}))}},{key:"subscribeToRoom",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.roomId,r=t.hooks,o=void 0===r?{}:r,s=t.messageLimit,i=t.serverInstance;je("roomId","string",n),Le("hooks","function",o),s&&je("messageLimit","number",s),this.roomSubscriptions[n]&&this.roomSubscriptions[n].cancel(),this.hooks.rooms[n]=o;var a=new dt({serverInstance:i||this.serverInstanceV2,connectionTimeout:this.connectionTimeout,cursorStore:this.cursorStore,cursorsInstance:this.cursorsInstance,hooks:this.hooks,logger:this.logger,messageLimit:s,roomId:n,roomStore:this.roomStore,typingIndicators:this.typingIndicators,userId:this.id,userStore:this.userStore});return this.roomSubscriptions[n]=a,this.joinRoom({roomId:n}).then(function(e){return a.connect().then(function(){return e})}).catch(function(t){throw e.logger.warn("error subscribing to room "+n+":",t),t})}},{key:"subscribeToRoomMultipart",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.subscribeToRoom(Ce({},e,{serverInstance:this.serverInstanceV6}))}},{key:"updateRoom",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.roomId,r=t.name,o=t.customData,s=Ne(t,["roomId","name","customData"]);return je("roomId","string",n),r&&je("name","string",r),s.private&&je("private","boolean",s.private),o&&je("customData","object",o),this.serverInstanceV6.request({method:"PUT",path:"/rooms/"+encodeURIComponent(n),json:{name:r,private:s.private,custom_data:o}}).then(function(){}).catch(function(t){throw e.logger.warn("error updating room:",t),t})}},{key:"deleteRoom",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).roomId;return je("roomId","string",t),this.serverInstanceV2.request({method:"DELETE",path:"/rooms/"+encodeURIComponent(t)}).then(function(){}).catch(function(t){throw e.logger.warn("error deleting room:",t),t})}},{key:"setReadCursorRequest",value:function(e){var t=this,n=e.roomId,r=e.position,o=e.callbacks;return this.cursorsInstance.request({method:"PUT",path:"/cursors/0/rooms/"+encodeURIComponent(n)+"/users/"+this.encodedId,json:{position:r}}).then(function(){return L(function(e){return e.resolve()},o)}).catch(function(e){t.logger.warn("error setting cursor:",e),L(function(t){return t.reject(e)},o)})}},{key:"uploadDataAttachment",value:function(e,t){var n=t.file,r=t.name,o=new FormData;return o.append("file",n,r),this.filesInstance.request({method:"POST",path:"/rooms/"+encodeURIComponent(e)+"/users/"+this.encodedId+"/files/"+encodeURIComponent(r),body:o}).then(JSON.parse)}},{key:"_uploadAttachment",value:function(e){var t=e.roomId,n=e.part,r=n.type,o=n.name,s=n.customData,a=n.file;return this.serverInstanceV6.request({method:"POST",path:"/rooms/"+encodeURIComponent(t)+"/attachments",json:{content_type:r,content_length:a.size,name:o||a.name,custom_data:s}}).then(function(e){var t=JSON.parse(e),n=t.attachment_id,o=t.upload_url;return i({method:"PUT",url:o,body:a,headers:{"content-type":r}}).then(function(){return{type:r,attachment:{id:n}}})})}},{key:"isMemberOf",value:function(e){return le(e,L(q("id"),this.rooms))}},{key:"isSubscribedTo",value:function(e){return me(e,this.roomSubscriptions)}},{key:"decorateMessage",value:function(e){return new ut(e,this.userStore,this.roomStore,this.serverInstanceV6)}},{key:"setPropertiesFromBasicUser",value:function(e){this.avatarURL=e.avatarURL,this.createdAt=e.createdAt,this.customData=e.customData,this.name=e.name,this.updatedAt=e.updatedAt}},{key:"establishUserSubscription",value:function(){var e=this;return this.userSubscription=new rt({hooks:this.hooks,userId:this.id,instance:this.serverInstanceV6,roomStore:this.roomStore,cursorStore:this.cursorStore,typingIndicators:this.typingIndicators,logger:this.logger,connectionTimeout:this.connectionTimeout,currentUser:this}),this.userSubscription.connect().then(function(t){var n=t.basicUser,r=t.basicRooms,o=t.basicCursors;return e.setPropertiesFromBasicUser(n),Promise.all([].concat(Ae(r.map(function(t){return e.roomStore.set(t)})),Ae(o.map(function(t){return e.cursorStore.set(t)}))))}).catch(function(t){throw e.logger.error("error establishing user subscription:",t),t})}},{key:"establishPresenceSubscription",value:function(){var e=this;return this.presenceSubscription=new ot({userId:this.id,instance:this.presenceInstance,logger:this.logger,connectionTimeout:this.connectionTimeout}),Promise.all([this.userStore.fetchBasicUsers([this.id]),this.subscribeToUserPresence(this.id),this.presenceSubscription.connect().catch(function(t){throw e.logger.warn("error establishing presence subscription:",t),t})])}},{key:"subscribeToUserPresence",value:function(e){if(this.userPresenceSubscriptions[e])return Promise.resolve();var t=new st({hooks:this.hooks,userId:e,instance:this.presenceInstance,userStore:this.userStore,roomStore:this.roomStore,presenceStore:this.presenceStore,logger:this.logger,connectionTimeout:this.connectionTimeout});return this.userPresenceSubscriptions[e]=t,t.connect()}},{key:"enablePushNotifications",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{return this.beamsInstanceInitFn({serviceWorkerRegistration:t.serviceWorkerRegistration}).then(function(e){return e.start()}).then(function(t){return t.setUserId(e.id,{fetchToken:function(t){return e.beamsTokenProviderInstance.request({method:"GET",path:"/beams-tokens?user_id="+encodeURIComponent(t)}).then(JSON.parse).catch(function(e){return Promise.reject("Internal error: "+e.statusCode+" status code, info: "+e.info.error_description)})}})}).catch(function(t){return e.logger.warn("Chatkit error when enabling push notifications:",t),Promise.reject("Chatkit error when enabling push notifications: "+t)})}catch(e){return this.logger.warn("Chatkit error when enabling push notifications:",e),Promise.reject("Chatkit error when enabling push notifications: "+e)}}},{key:"disconnect",value:function(){this.userSubscription.cancel(),this.presenceSubscription.cancel(),ge(function(e){return e.cancel()},this.roomSubscriptions),ge(function(e){return e.cancel()},this.userPresenceSubscriptions)}},{key:"rooms",get:function(){return F(this.roomStore.snapshot())}},{key:"users",get:function(){return F(this.userStore.snapshot())}}]),e}(),ft=function(e){var t=e.file,n=e.name;return void 0!==t&&void 0!==n&&(je("attachment.file","object",t),je("attachment.name","string",n),!0)},pt=function(e){var t=e.link,n=e.type;return void 0!==t&&void 0!==n&&(je("attachment.link","string",t),je("attachment.type","string",n),!0)},gt="1.9.1";function mt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vt({method:e,path:t,body:n=null,headers:r={}}){const o={method:e,headers:r};return null!==n&&(o.body=JSON.stringify(n),o.headers=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){mt(e,t,n[t])})}return e}({"Content-Type":"application/json"},r)),fetch(t,o).then(async e=>{e.ok||await async function(e){let t;try{const{error:n="Unknown error",description:r="No description"}=await e.json();t=`Unexpected status code ${e.status}: ${n}, ${r}`}catch(n){t=`Unexpected status code ${e.status}: Cannot parse error response`}throw new Error(t)}(e);try{return await e.json()}catch(e){return null}})}class bt{constructor(e){this._instanceId=e,this._dbConn=null}get _dbName(){return`beams-${this._instanceId}`}get isConnected(){return null!==this._dbConn}connect(){return new Promise((e,t)=>{const n=indexedDB.open(this._dbName);n.onsuccess=(t=>{const n=t.target.result;this._dbConn=n,this._readState().then(e=>null===e?this.clear():Promise.resolve()).then(e)}),n.onupgradeneeded=(e=>{e.target.result.createObjectStore("beams",{keyPath:"instance_id"})}),n.onerror=(e=>{const n=new Error(`Database error: ${e.target.error}`);t(n)})})}clear(){return this._writeState({instance_id:this._instanceId,device_id:null,token:null,user_id:null})}_readState(){if(!this.isConnected)throw new Error("Cannot read value: DeviceStateStore not connected to IndexedDB");return new Promise((e,t)=>{const n=this._dbConn.transaction("beams").objectStore("beams").get(this._instanceId);n.onsuccess=(t=>{const n=t.target.result;n||e(null),e(n)}),n.onerror=(e=>{t(e.target.error)})})}async _readProperty(e){const t=await this._readState();return null===t?null:t[e]||null}_writeState(e){if(!this.isConnected)throw new Error("Cannot write value: DeviceStateStore not connected to IndexedDB");return new Promise((t,n)=>{const r=this._dbConn.transaction("beams","readwrite").objectStore("beams").put(e);r.onsuccess=(e=>{t()}),r.onerror=(e=>{n(e.target.error)})})}async _writeProperty(e,t){const n=await this._readState();n[e]=t,await this._writeState(n)}getToken(){return this._readProperty("token")}setToken(e){return this._writeProperty("token",e)}getDeviceId(){return this._readProperty("device_id")}setDeviceId(e){return this._writeProperty("device_id",e)}getUserId(){return this._readProperty("user_id")}setUserId(e){return this._writeProperty("user_id",e)}getLastSeenSdkVersion(){return this._readProperty("last_seen_sdk_version")}setLastSeenSdkVersion(e){return this._writeProperty("last_seen_sdk_version",e)}getLastSeenUserAgent(){return this._readProperty("last_seen_user_agent")}setLastSeenUserAgent(e){return this._writeProperty("last_seen_user_agent",e)}}var yt="0.9.0";const St=`/service-worker.js?pusherBeamsWebSDKVersion=${yt}`;class wt{constructor({instanceId:e,deviceId:t,token:n,userId:r,serviceWorkerRegistration:o,deviceStateStore:s,endpointOverride:i=null}){this.instanceId=e,this.deviceId=t,this.token=n,this.userId=r,this._serviceWorkerRegistration=o,this._deviceStateStore=s,this._endpoint=i}get _baseURL(){return null!==this._endpoint?this._endpoint:`https://${this.instanceId}.pushnotifications.pusher.com`}async start(){if(!It())return console.warn("Pusher Web Push Notifications only supports Google Chrome (whilst in Beta)"),this;if(null!==this.deviceId)return this;const{vapidPublicKey:e}=await this._getPublicKey(),t=await this._getPushToken(e),n=await this._registerDevice(t);return await this._deviceStateStore.setToken(t),await this._deviceStateStore.setDeviceId(n),await this._deviceStateStore.setLastSeenSdkVersion(yt),await this._deviceStateStore.setLastSeenUserAgent(window.navigator.userAgent),this.token=t,this.deviceId=n,this}async setUserId(e,t){if(!It())return void console.warn("Pusher Web Push Notifications only supports Google Chrome (whilst in Beta)");if(null===this.deviceId){const e=new Error(".start must be called before .setUserId");return Promise.reject(e)}if("string"!=typeof e)throw new Error(`User ID must be a string (was ${e})`);if(""===e)throw new Error("User ID cannot be the empty string");if(null!==this.userId&&this.userId!==e)throw new Error("Changing the `userId` is not allowed.");const n=`${this._baseURL}/device_api/v1/instances/${encodeURIComponent(this.instanceId)}/devices/web/${this.deviceId}/user`,{token:r}=await t.fetchToken(e),o={method:"PUT",path:n,headers:{Authorization:`Bearer ${r}`}};return await vt(o),this.userId=e,this._deviceStateStore.setUserId(e)}async stop(){It()?null!==this.deviceId&&(await this._deleteDevice(),await this._deviceStateStore.clear(),this.deviceId=null,this.token=null,this.userId=null):console.warn("Pusher Web Push Notifications only supports Google Chrome (whilst in Beta)")}async clearAllState(){It()?(await this.stop(),await this.start()):console.warn("Pusher Web Push Notifications only supports Google Chrome (whilst in Beta)")}async _getPublicKey(){return vt({method:"GET",path:`${this._baseURL}/device_api/v1/instances/${encodeURIComponent(this.instanceId)}/web-vapid-public-key`})}async _getPushToken(e){try{if(this._serviceWorkerRegistration);else{const{status:e}=await fetch(St);if(200!==e)throw new Error("Cannot start SDK, service worker missing: No file found at /service-worker.js");window.navigator.serviceWorker.register(St,{updateViaCache:"none"})}const t=await window.navigator.serviceWorker.ready,n=await t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:function(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),r=window.atob(n);return Uint8Array.from([...r].map(e=>e.charCodeAt(0)))}(e)});return btoa(JSON.stringify(n))}catch(e){return Promise.reject(e)}}async _registerDevice(e){const t={method:"POST",path:`${this._baseURL}/device_api/v1/instances/${encodeURIComponent(this.instanceId)}/devices/web`,body:{token:e,metadata:{sdkVersion:yt}}};return(await vt(t)).id}async _deleteDevice(){const e={method:"DELETE",path:`${this._baseURL}/device_api/v1/instances/${encodeURIComponent(this.instanceId)}/devices/web/${encodeURIComponent(this.deviceId)}`};await vt(e)}async _updateDeviceMetadata(){const e=window.navigator.userAgent,t=await this._deviceStateStore.getLastSeenUserAgent(),n=await this._deviceStateStore.getLastSeenSdkVersion();if(e===t&&yt===n)return;const r={method:"PUT",path:`${this._baseURL}/device_api/v1/instances/${encodeURIComponent(this.instanceId)}/devices/web/${this.deviceId}/metadata`,body:{sdkVersion:yt}};await vt(r),await this._deviceStateStore.setLastSeenSdkVersion(yt),await this._deviceStateStore.setLastSeenUserAgent(e)}}function It(){const e=window.navigator,t=e.vendor,n=null!==window.chrome&&void 0!==window.chrome,r=e.userAgent.indexOf("OPR")>-1,o=e.userAgent.indexOf("Edge")>-1;return n&&"Google Inc."===t&&!o&&!r||r}return{TokenProvider:qe,ChatManager:function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.instanceLocator,i=t.tokenProvider,a=t.userId,u=Ne(t,["instanceLocator","tokenProvider","userId"]);Oe(this,e),je("instanceLocator","string",n),je("tokenProvider","object",i),je("tokenProvider.fetchToken","function",i.fetchToken),je("userId","string",a);var c=Re(":",n),h=Me(c,3),d=h[0],l=h[1],f=h[2];if(!d||!l||!f)throw new TypeError("expected instanceLocator to be of the format x:y:z, but was "+n);var p=u.baseClient||new r({host:l+"."+o,logger:u.logger,sdkProduct:"chatkit",sdkVersion:gt});"function"==typeof i.setUserId&&i.setUserId(a);var g={client:p,locator:n,logger:u.logger,tokenProvider:i};this.serverInstanceV2=new s(Ce({serviceName:"chatkit",serviceVersion:"v2"},g)),this.serverInstanceV6=new s(Ce({serviceName:"chatkit",serviceVersion:"v6"},g)),this.filesInstance=new s(Ce({serviceName:"chatkit_files",serviceVersion:"v1"},g)),this.cursorsInstance=new s(Ce({serviceName:"chatkit_cursors",serviceVersion:"v2"},g)),this.presenceInstance=new s(Ce({serviceName:"chatkit_presence",serviceVersion:"v2"},g)),this.beamsTokenProviderInstance=new s(Ce({serviceName:"chatkit_beams_token_provider",serviceVersion:"v1"},g)),this.beamsInstanceInitFn=u.beamsInstanceInitFn||function(e){return async function(e){if(!e)throw new Error("Config object required");const{instanceId:t,endpointOverride:n=null,serviceWorkerRegistration:r=null}=e;if(void 0===t)throw new Error("Instance ID is required");if("string"!=typeof t)throw new Error("Instance ID must be a string");if(0===t.length)throw new Error("Instance ID cannot be empty");if(!window.indexedDB)throw new Error("Pusher Beams does not support this browser version (IndexedDB not supported)");if(!("showNotification"in ServiceWorkerRegistration.prototype))throw new Error("Pusher Beams does not support this browser version (ServiceWorkerRegistration not supported)");if(!("PushManager"in window))throw new Error("Pusher Beams does not support this browser version (PushManager not supported)");const o=new bt(t);await o.connect();const s=await o.getDeviceId(),i=await o.getToken(),a=await o.getUserId(),u=new wt({instanceId:t,deviceId:s,token:i,userId:a,serviceWorkerRegistration:r,deviceStateStore:o,endpointOverride:n});if(null!==s)try{await u._updateDeviceMetadata()}catch(e){}return u}(Ce({instanceId:f},e))},this.logger=this.serverInstanceV6.logger,this.userId=a,this.connectionTimeout=u.connectionTimeout||et,this.connect=this.connect.bind(this),this.disconnect=this.disconnect.bind(this)}return Ue(e,[{key:"connect",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Le("hooks","function",t);var n=new lt({hooks:t,id:this.userId,serverInstanceV2:this.serverInstanceV2,serverInstanceV6:this.serverInstanceV6,filesInstance:this.filesInstance,cursorsInstance:this.cursorsInstance,presenceInstance:this.presenceInstance,beamsTokenProviderInstance:this.beamsTokenProviderInstance,beamsInstanceInitFn:this.beamsInstanceInitFn,connectionTimeout:this.connectionTimeout});return Promise.all([n.establishUserSubscription(),n.establishPresenceSubscription()]).then(function(){return e.currentUser=n,n})}},{key:"disconnect",value:function(){this.currentUser&&this.currentUser.disconnect()}},{key:"disablePushNotifications",value:function(){var e=this;try{return this.beamsInstanceInitFn().then(function(e){return e.stop()}).catch(function(t){return e.logger.warn("Chatkit error when disabling push notifications",t),Promise.reject("Chatkit error when disabling push notifications: "+t.message)})}catch(e){return this.logger.warn("Chatkit error when disabling push notifications",e),Promise.reject("Chatkit error when disabling push notifications: "+e.message)}}}]),e}()}});


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/axios/node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/axios/node_modules/is-buffer/index.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/node_modules/is-buffer/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./src/app/messages/conversation/conversation.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/messages/conversation/conversation.module.ts ***!
  \**************************************************************/
/*! exports provided: ConversationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationPageModule", function() { return ConversationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _conversation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conversation.page */ "./src/app/messages/conversation/conversation.page.ts");







var routes = [
    {
        path: '',
        component: _conversation_page__WEBPACK_IMPORTED_MODULE_6__["ConversationPage"]
    }
];
var ConversationPageModule = /** @class */ (function () {
    function ConversationPageModule() {
    }
    ConversationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_conversation_page__WEBPACK_IMPORTED_MODULE_6__["ConversationPage"]]
        })
    ], ConversationPageModule);
    return ConversationPageModule;
}());



/***/ }),

/***/ "./src/app/messages/conversation/conversation.page.html":
/*!**************************************************************!*\
  !*** ./src/app/messages/conversation/conversation.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <img alt=\"logo\" height=\"40\" src=\"assets/logo.png\">\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-toolbar>\r\n  <ion-row class=\"row-toolbar\" (click)=\"presentPopover($event)\">\r\n    <ion-col class=\"flex-fixed\">\r\n      <div>\r\n        <ion-avatar *ngIf=\"messages.contacts\">\r\n          <img [src]=\"messages.contacts[0].avatar\">\r\n        </ion-avatar>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button fill=\"clear\" size=\"small\">\r\n        {{messages.contact_name}} \r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!-- <div class=\"ion-padding-start\" (click)=\"presentPopover()\">{{messages.contact_name}}</div> -->\r\n</ion-toolbar>\r\n\r\n<ion-content #content color=\"light\">\r\n  <div padding class=\"ion-text-center\" *ngIf=\"isLoading\">\r\n    <ion-spinner></ion-spinner>\r\n  </div>\r\n  <div padding class=\"ion-text-center\" *ngIf=\"!isLoading && !conversations.length\">\r\n    <h1><ion-icon name=\"chatbubbles\"></ion-icon></h1> <br>\r\n    No messages yet.\r\n  </div>\r\n\r\n  <ion-grid>\r\n    <div *ngFor=\"let convo of conversations; let i = index\">\r\n\r\n      <ion-row *ngIf=\"convo.message && convo.user_id != currentUser.id\">\r\n        <ion-col class=\"flex-fixed\" (click)=\"showUserPopup(convo.user)\">\r\n          <div>\r\n            <ion-avatar>\r\n              <img [src]=\"convo?.user?.avatar\">\r\n            </ion-avatar>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col>\r\n          <div>\r\n            <ion-card class=\"card-nomargin\">\r\n              <ion-card-header>\r\n                <ion-card-subtitle>{{convo?.user?.fname}}\r\n                </ion-card-subtitle>\r\n                <span class=\"text-dark\">{{convo.message}}</span>\r\n\r\n                <br><small>{{convo.updated_at | date: 'medium'}}</small>\r\n              </ion-card-header>\r\n            </ion-card>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"convo.message && convo.user_id == currentUser.id\">\r\n        <ion-col (click)=\"showOptions(convo, i)\">\r\n          <div>\r\n            <ion-card class=\"card-nomargin color-success-light\">\r\n              <ion-card-header class=\"ion-text-end\">\r\n                <ion-card-subtitle class=\"ion-text-end\">\r\n                  {{convo?.user?.fname}}</ion-card-subtitle>\r\n                <span class=\"text-dark\">{{convo.message}}</span>\r\n                <br><small>\r\n                    {{convo.updated_at | date: 'medium'}} \r\n                    \r\n                    <ion-text color=\"secondary\" *ngIf=\"!isUnread && conversations.length === i + 1\">\r\n                      <ion-icon name=\"checkmark-circle\" class=\"icon-read-status\"></ion-icon>\r\n                    </ion-text>\r\n                    <ion-text color=\"medium\" *ngIf=\"isUnread && conversations.length === i + 1\">\r\n                      <ion-icon name=\"checkmark-circle-outline\" class=\"icon-read-status\"></ion-icon>\r\n                    </ion-text>\r\n\r\n                </small>\r\n              </ion-card-header>\r\n            </ion-card>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col class=\"flex-fixed\" (click)=\"showUserPopup(convo.user)\">\r\n          <div>\r\n            <ion-avatar>\r\n              <img [src]=\"convo?.user?.avatar\">\r\n            </ion-avatar>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-text color=\"medium\" *ngIf=\"!convo.message\">\r\n        <p class=\"ion-text-center\">\r\n          <small>{{convo.user_id != currentUser.id ? convo?.user?.fname : 'You'}} removed a message</small>\r\n        </p>\r\n      </ion-text>\r\n    </div>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button color=\"medium\">\r\n        <ion-icon name=\"image\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button color=\"medium\">\r\n        <ion-icon name=\"attach\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-input placeholder=\"Type your message here\" [(ngModel)]=\"chat.message\"  (keypress)=\"eventHandler($event)\"></ion-input>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"medium\" (click)=\"sendMessage()\">\r\n        <ion-icon name=\"paper-plane\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/messages/conversation/conversation.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/messages/conversation/conversation.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-nomargin {\n  margin: 0 !important;\n  margin-bottom: 5px !important; }\n  .card-nomargin ion-card-header {\n    padding: 12px; }\n  .flex-fixed {\n  width: 40px;\n  flex: 0 0 40px; }\n  .flex-fixed img {\n    width: 30px;\n    height: 30px; }\n  .row-toolbar {\n  height: 40px !important; }\n  .icon-read-status {\n  font-size: 135%;\n  vertical-align: middle; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvY29udmVyc2F0aW9uL0Q6XFxXb3JrXFxQYXVsXFxDdXJhTW9iaWxlQXp1cmVcXEN1cmFjYWxsLW1vYmlsZS1hcHAvc3JjXFxhcHBcXG1lc3NhZ2VzXFxjb252ZXJzYXRpb25cXGNvbnZlcnNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBb0I7RUFDcEIsNkJBQTZCLEVBQUE7RUFGakM7SUFJUSxhQUFhLEVBQUE7RUFHckI7RUFDSSxXQUFXO0VBQ1gsY0FBYyxFQUFBO0VBRmxCO0lBSVEsV0FBVztJQUNYLFlBQVksRUFBQTtFQUlwQjtFQUNJLHVCQUF1QixFQUFBO0VBRzNCO0VBQ0ksZUFBZTtFQUNmLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZXMvY29udmVyc2F0aW9uL2NvbnZlcnNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ub21hcmdpbntcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBpb24tY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgIH1cclxufVxyXG4uZmxleC1maXhlZHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgZmxleDogMCAwIDQwcHg7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucm93LXRvb2xiYXJ7XHJcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmljb24tcmVhZC1zdGF0dXN7XHJcbiAgICBmb250LXNpemU6IDEzNSU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/messages/conversation/conversation.page.ts":
/*!************************************************************!*\
  !*** ./src/app/messages/conversation/conversation.page.ts ***!
  \************************************************************/
/*! exports provided: ConversationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationPage", function() { return ConversationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _pop_up_list_pop_up_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pop-up-list/pop-up-list.component */ "./src/app/messages/pop-up-list/pop-up-list.component.ts");
/* harmony import */ var _pop_up_user_pop_up_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pop-up-user/pop-up-user.component */ "./src/app/messages/pop-up-user/pop-up-user.component.ts");
/* harmony import */ var _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @pusher/chatkit-client */ "./node_modules/@pusher/chatkit-client/dist/web/chatkit.js");
/* harmony import */ var _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");












var ConversationPage = /** @class */ (function () {
    function ConversationPage(router, route, userService, actionSheetController, popoverController, _zone, alertController, commonService, toastController, messageService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.actionSheetController = actionSheetController;
        this.popoverController = popoverController;
        this._zone = _zone;
        this.alertController = alertController;
        this.commonService = commonService;
        this.toastController = toastController;
        this.messageService = messageService;
        this.userInfo = {};
        this.messages = {};
        this.chat = {
            message: '',
            user_id: '',
            room_id: '',
        };
        this.currentUser = {};
        this.conversations = [];
        this.isLoading = false;
        this.id = 0;
        this.isAssign = false;
        this.isCaseActioned = false;
    }
    ConversationPage.prototype.ngOnInit = function () {
        this.id = parseInt(this.route.snapshot.params['id'], 10);
        this.userInfo = this.userService.getUserInfo();
        this.chat.room_id = this.id;
        this.chat.user_id = this.userInfo.id;
    };
    ConversationPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.isLoading = true;
        this.getConversations();
        this.terval = setInterval(function () {
            _this.checkIfIsRead();
        }, this.commonService.intervalTime);
    };
    ConversationPage.prototype.ionViewWillLeave = function () {
        clearInterval(this.terval);
    };
    ConversationPage.prototype.subscribeUser = function (currentUser, roomId) {
        var _this = this;
        currentUser.subscribeToRoom({
            roomId: roomId,
            messageLimit: 1,
            hooks: {
                onMessage: function (message) {
                    console.log('message :', message);
                    _this.getConversations();
                    // this.messages.push(message);
                },
                onPresenceChanged: function (state, user) {
                    _this.users = currentUser.users.sort(function (a, b) {
                        if (a.presence.state === 'online')
                            return -1;
                        return 1;
                    });
                }
            }
        });
        this.currentUserPusher = currentUser;
        this.users = currentUser.users;
        this.roomId = roomId;
        console.log('this.currentUser :', this.currentUser);
        console.log('this.users :', this.users);
        console.log('this.roomId :', this.roomId);
    };
    ConversationPage.prototype.addUser = function () {
        var _this = this;
        this.chatCurrentUser = 'cc_test1';
        this.chatOtherUser = 'cc_test2';
        axios__WEBPACK_IMPORTED_MODULE_10___default.a
            .post('http://3.95.177.189/users', { username: this.chatCurrentUser })
            .then(function () {
            var tokenProvider = new _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_9__["TokenProvider"]({
                url: 'http://3.95.177.189/authenticate'
            });
            var chatManager = new _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_9__["ChatManager"]({
                instanceLocator: 'v1:us1:8bd77d3e-8eab-4be0-ad32-e4619f755209',
                userId: _this.chatCurrentUser,
                tokenProvider: tokenProvider
            });
            // origin room - 19430100
            return chatManager.connect().then(function (currentUser) {
                if (_this.roomPusherId) {
                    _this.subscribeUser(currentUser, _this.roomPusherId);
                }
                else {
                    currentUser.createRoom({
                        name: 'cc_' + src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].env + '_' + _this.chat.room_id,
                        customData: { foo: 42 },
                    }).then(function (room) {
                        console.log("Created room called " + room.name, room);
                        _this.messageService.updatePusherRoomId({ id: _this.chat.room_id, room_id: room.id })
                            .subscribe(function () {
                            _this.subscribeUser(currentUser, room.id);
                        });
                    })
                        .catch(function (err) {
                        console.log("Error creating room " + err);
                    });
                }
            });
        })
            .catch(function (error) { return console.error(error); });
    };
    ConversationPage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _pop_up_list_pop_up_list_component__WEBPACK_IMPORTED_MODULE_7__["PopUpListComponent"],
                            event: ev,
                            animated: true,
                            showBackdrop: true,
                            componentProps: {
                                contacts: this.messages.contacts
                            }
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ConversationPage.prototype.showUserPopup = function (contact) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _pop_up_user_pop_up_user_component__WEBPACK_IMPORTED_MODULE_8__["PopUpUserComponent"],
                            // event: ev,
                            animated: true,
                            showBackdrop: true,
                            componentProps: {
                                contact: contact
                            }
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ConversationPage.prototype.eventHandler = function (event) {
        if (event.keyCode === 13 && this.chat.message.trim()) {
            this.sendMessage();
        }
    };
    ConversationPage.prototype.scrollToBottomOnInit = function () {
        var _this = this;
        this._zone.run(function () {
            setTimeout(function () {
                _this.content.scrollToBottom(300);
            }, 300);
        });
        // this.content.scrollToBottom(300);
    };
    ConversationPage.prototype.sendMessage = function () {
        var _this = this;
        if (!this.chat.message.trim())
            return;
        var message = this.chat.message;
        this.currentUserPusher.sendMessage({
            text: message,
            roomId: this.roomId
        });
        // this.chat.message = '';
        // this.scrollToBottomOnInit();
        this.messageService.storeConversations(this.chat)
            .subscribe(function (res) {
            _this.conversations.push(res);
            _this.chat.message = '';
            _this.scrollToBottomOnInit();
        });
    };
    ConversationPage.prototype.checkIfIsRead = function () {
        var _this = this;
        this.messageService.getCheckIfIsRead({ id: this.id })
            .subscribe(function (res) {
            _this.isUnread = res.count;
        });
    };
    ConversationPage.prototype.getConversations = function () {
        var _this = this;
        this.results = this.messageService.getConversations(this.id);
        this.results.subscribe(function (o) {
            _this.isLoading = false;
            _this.messages = o.room;
            _this.currentUser = o.user;
            _this.isUnread = o.isUnread;
            _this.conversations = o.room.conversations;
            // localStorage.setItem("cases", JSON.stringify(o));
            _this.scrollToBottomOnInit();
            _this.checkIfIsRead();
            _this.roomPusherId = o.room.rpush_id;
            if (!_this.currentUserPusher) {
                _this.addUser();
            }
        });
    };
    ConversationPage.prototype.presentToastWithOptions = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message || 'Your settings have been saved.',
                            showCloseButton: true,
                            position: 'top',
                            duration: 2000,
                            closeButtonText: 'Close'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConversationPage.prototype.presentAlertConfirm = function (message, isAssign) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm',
                            message: message,
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        // console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        // console.log('Confirm Okay');
                                        _this.presentToastWithOptions("Action saved successfully.");
                                        _this.isAssign = isAssign;
                                        _this.isCaseActioned = true;
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConversationPage.prototype.presentConfirmDelete = function (message, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm',
                            message: message,
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'success',
                                    handler: function (blah) {
                                        // console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Confirm',
                                    handler: function () {
                                        data.message = '';
                                        _this.messageService.deleteMessage(data.id)
                                            .subscribe(function (res) {
                                            _this.commonService.presentToastWithOptions('Message successfully deleted.');
                                        });
                                        // console.log('Confirm Okay');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConversationPage.prototype.presentConfirmDeleteAll = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm',
                            message: message,
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'success',
                                    handler: function (blah) {
                                        // console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Confirm',
                                    handler: function () {
                                        _this.messageService.deleteAllMessages({ room_id: _this.id, user_id: _this.userInfo.id })
                                            .subscribe(function (res) {
                                            _this.commonService.presentToastWithOptions('All messages successfully deleted.');
                                            _this.getConversations();
                                        });
                                        // console.log('Confirm Okay');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConversationPage.prototype.presentActionSheet = function (message, isLastMessage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var buttons, actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buttons = isLastMessage ? [{
                                text: 'Delete Message',
                                handler: function () {
                                    _this.presentConfirmDelete('Are you sure you want to delete message?', message);
                                }
                            }, {
                                text: 'Delete whole conversation',
                                handler: function () {
                                    _this.presentConfirmDeleteAll('Are you sure you want to delete whole conversation? This will only delete the whole conversation from your side.');
                                }
                            }, {
                                text: 'Cancel',
                                role: 'cancel',
                                handler: function () {
                                    // console.log('Cancel clicked');
                                }
                            }] : [{
                                text: 'Delete whole conversation',
                                handler: function () {
                                    _this.presentConfirmDeleteAll('Are you sure you want to delete whole conversation? This will only delete the whole conversation from your side.');
                                }
                            }, {
                                text: 'Cancel',
                                role: 'cancel',
                                handler: function () {
                                    // console.log('Cancel clicked');
                                }
                            }];
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: 'Action',
                                buttons: buttons
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConversationPage.prototype.showOptions = function (message, index) {
        var isLastMessage = ((index + 1) === this.conversations.length);
        this.presentActionSheet(message, isLastMessage);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConversationPage.prototype, "content", void 0);
    ConversationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-conversation',
            template: __webpack_require__(/*! ./conversation.page.html */ "./src/app/messages/conversation/conversation.page.html"),
            styles: [__webpack_require__(/*! ./conversation.page.scss */ "./src/app/messages/conversation/conversation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], ConversationPage);
    return ConversationPage;
}());



/***/ })

}]);
//# sourceMappingURL=messages-conversation-conversation-module.js.map