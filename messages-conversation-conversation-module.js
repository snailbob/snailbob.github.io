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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <img alt=\"logo\" height=\"40\" src=\"assets/logo.png\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n\n    <ion-grid>\n        <ion-row>\n          <ion-col class=\"flex-fixed\">\n            <div>\n              <ion-avatar>\n                <img src=\"assets/case2.png\">\n              </ion-avatar>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n                <ion-card class=\"card-nomargin\" color=\"medium\">\n                    <ion-card-header>\n                      <ion-card-subtitle>Prasanna &middot; <small>March 8, 2019 &middot; 12:00am</small></ion-card-subtitle>\n                      I'm gonna forward you a case right now, my hommie!\n                    </ion-card-header>\n                  </ion-card>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n\n          <ion-col>\n            <div>\n                <ion-card class=\"card-nomargin\" color=\"secondary\">\n                    <ion-card-header>\n                      <ion-card-subtitle class=\"ion-text-end\">\n                          <small>March 8, 2019 &middot; 12:01am</small> &middot;  Paul Lieberman</ion-card-subtitle>\n                      Sure! Break clear away, once in awhile,\n                      and climb a mountain or spend a week in the woods. Wash your spirit clean.\n                    </ion-card-header>\n                  </ion-card>\n            </div>\n          </ion-col>\n          <ion-col class=\"flex-fixed\">\n              <div>\n                <ion-avatar>\n                    <img src=\"assets/case1.png\">\n                  </ion-avatar>\n              </div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col class=\"flex-fixed\">\n              <div>\n                <ion-avatar>\n                  <img src=\"assets/case2.png\">\n                </ion-avatar>\n              </div>\n            </ion-col>\n            <ion-col>\n              <div>\n                  <ion-card class=\"card-nomargin\" color=\"medium\">\n                      <ion-card-header>\n                        <ion-card-subtitle>Prasanna &middot; <small>March 8, 2019 &middot; 12:02am</small></ion-card-subtitle>\n                        <ion-card-title>[#0001] Call type</ion-card-title>\n                        <ion-card-subtitle>\n                          <ion-icon color=\"secondary\" name=\"radio-button-on\"></ion-icon> Active &middot; 5th of Feb 2019 &middot;\n                          12:12PM\n                        </ion-card-subtitle>\n                        Message snapshot of the case...\n            \n                      </ion-card-header>\n            \n                      <ion-button *ngIf=\"!isCaseActioned\" size=\"small\" color=\"light\" expand=\"full\" fill=\"clear\" routerLink=\"/tabs/tab1/case/details/0/forwarded/assign\">\n                        <ion-icon name=\"eye\"></ion-icon> View full details\n                      </ion-button>\n                    </ion-card>\n              </div>\n            </ion-col>\n          </ion-row>\n    </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"medium\">\n        <ion-icon name=\"image\"></ion-icon>\n      </ion-button>\n      <ion-button color=\"medium\">\n        <ion-icon name=\"attach\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-input placeholder=\"Type your message here\"></ion-input>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"medium\">\n        <ion-icon name=\"paper-plane\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/messages/conversation/conversation.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/messages/conversation/conversation.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-nomargin {\n  margin: 0 !important;\n  margin-bottom: 5px !important; }\n  .card-nomargin ion-card-header {\n    padding: 12px; }\n  .flex-fixed {\n  width: 60px;\n  flex: 0 0 60px; }\n  .flex-fixed img {\n    width: 50px;\n    height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lYXRzbGVlcGNvZGUubWFjbWluaS9Cb2IvV29yay9QYXVsL0N1cmFDYWxsQXBwL3NyYy9hcHAvbWVzc2FnZXMvY29udmVyc2F0aW9uL2NvbnZlcnNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBb0I7RUFDcEIsNkJBQTZCLEVBQUE7RUFGakM7SUFJUSxhQUFhLEVBQUE7RUFHckI7RUFDSSxXQUFXO0VBQ1gsY0FBYyxFQUFBO0VBRmxCO0lBSVEsV0FBVztJQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL2NvbnZlcnNhdGlvbi9jb252ZXJzYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtbm9tYXJnaW57XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gICAgaW9uLWNhcmQtaGVhZGVye1xuICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgIH1cbn1cbi5mbGV4LWZpeGVke1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGZsZXg6IDAgMCA2MHB4O1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG59Il19 */"

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