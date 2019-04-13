(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-conversation-conversation-module"],{

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

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <img alt=\"logo\" height=\"40\" src=\"assets/logo.png\">\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n\r\n    <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"flex-fixed\">\r\n            <div>\r\n              <ion-avatar>\r\n                <img src=\"assets/case2.png\">\r\n              </ion-avatar>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div>\r\n                <ion-card class=\"card-nomargin\" color=\"medium\">\r\n                    <ion-card-header>\r\n                      <ion-card-subtitle>Prasanna &middot; <small>March 8, 2019 &middot; 12:00am</small></ion-card-subtitle>\r\n                      I'm gonna forward you a case right now, my hommie!\r\n                    </ion-card-header>\r\n                  </ion-card>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n\r\n          <ion-col>\r\n            <div>\r\n                <ion-card class=\"card-nomargin\" color=\"secondary\">\r\n                    <ion-card-header>\r\n                      <ion-card-subtitle class=\"ion-text-end\">\r\n                          <small>March 8, 2019 &middot; 12:01am</small> &middot;  Paul Lieberman</ion-card-subtitle>\r\n                      Sure! Break clear away, once in awhile,\r\n                      and climb a mountain or spend a week in the woods. Wash your spirit clean.\r\n                    </ion-card-header>\r\n                  </ion-card>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col class=\"flex-fixed\">\r\n              <div>\r\n                <ion-avatar>\r\n                    <img src=\"assets/case1.png\">\r\n                  </ion-avatar>\r\n              </div>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col class=\"flex-fixed\">\r\n              <div>\r\n                <ion-avatar>\r\n                  <img src=\"assets/case2.png\">\r\n                </ion-avatar>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col>\r\n              <div>\r\n                  <ion-card class=\"card-nomargin\" color=\"medium\">\r\n                      <ion-card-header>\r\n                        <ion-card-subtitle>Prasanna &middot; <small>March 8, 2019 &middot; 12:02am</small></ion-card-subtitle>\r\n                        <ion-card-title>[#0001] Call type</ion-card-title>\r\n                        <ion-card-subtitle>\r\n                          <ion-icon color=\"secondary\" name=\"radio-button-on\"></ion-icon> Active &middot; 5th of Feb 2019 &middot;\r\n                          12:12PM\r\n                        </ion-card-subtitle>\r\n                        Message snapshot of the case...\r\n            \r\n                      </ion-card-header>\r\n            \r\n                      <ion-button *ngIf=\"!isCaseActioned\" size=\"small\" color=\"light\" expand=\"full\" fill=\"clear\" routerLink=\"/tabs/tab1/case/details/0/forwarded/assign\">\r\n                        <ion-icon name=\"eye\"></ion-icon> View full details\r\n                      </ion-button>\r\n                    </ion-card>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button color=\"medium\">\r\n        <ion-icon name=\"image\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button color=\"medium\">\r\n        <ion-icon name=\"attach\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-input placeholder=\"Type your message here\"></ion-input>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"medium\">\r\n        <ion-icon name=\"paper-plane\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/messages/conversation/conversation.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/messages/conversation/conversation.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-nomargin {\n  margin: 0 !important;\n  margin-bottom: 5px !important; }\n  .card-nomargin ion-card-header {\n    padding: 12px; }\n  .flex-fixed {\n  width: 60px;\n  flex: 0 0 60px; }\n  .flex-fixed img {\n    width: 50px;\n    height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvY29udmVyc2F0aW9uL0Q6XFxXb3JrXFxQYXVsXFxDdXJhL3NyY1xcYXBwXFxtZXNzYWdlc1xcY29udmVyc2F0aW9uXFxjb252ZXJzYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBQ3BCLDZCQUE2QixFQUFBO0VBRmpDO0lBSVEsYUFBYSxFQUFBO0VBR3JCO0VBQ0ksV0FBVztFQUNYLGNBQWMsRUFBQTtFQUZsQjtJQUlRLFdBQVc7SUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlcy9jb252ZXJzYXRpb24vY29udmVyc2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLW5vbWFyZ2lue1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxuICAgIGlvbi1jYXJkLWhlYWRlcntcclxuICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgfVxyXG59XHJcbi5mbGV4LWZpeGVke1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBmbGV4OiAwIDAgNjBweDtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"

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




var ConversationPage = /** @class */ (function () {
    function ConversationPage(alertController, toastController) {
        this.alertController = alertController;
        this.toastController = toastController;
        this.isAssign = false;
        this.isCaseActioned = false;
    }
    ConversationPage.prototype.ngOnInit = function () {
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
                            header: 'Confirm!',
                            message: message,
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
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
    ConversationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-conversation',
            template: __webpack_require__(/*! ./conversation.page.html */ "./src/app/messages/conversation/conversation.page.html"),
            styles: [__webpack_require__(/*! ./conversation.page.scss */ "./src/app/messages/conversation/conversation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], ConversationPage);
    return ConversationPage;
}());



/***/ })

}]);
//# sourceMappingURL=messages-conversation-conversation-module.js.map