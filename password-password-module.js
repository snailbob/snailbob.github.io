(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["password-password-module"],{

/***/ "./src/app/password/password.module.ts":
/*!*********************************************!*\
  !*** ./src/app/password/password.module.ts ***!
  \*********************************************/
/*! exports provided: PasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPageModule", function() { return PasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password.page */ "./src/app/password/password.page.ts");







var routes = [
    {
        path: '',
        component: _password_page__WEBPACK_IMPORTED_MODULE_6__["PasswordPage"]
    }
];
var PasswordPageModule = /** @class */ (function () {
    function PasswordPageModule() {
    }
    PasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_password_page__WEBPACK_IMPORTED_MODULE_6__["PasswordPage"]]
        })
    ], PasswordPageModule);
    return PasswordPageModule;
}());



/***/ }),

/***/ "./src/app/password/password.page.html":
/*!*********************************************!*\
  !*** ./src/app/password/password.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding color=\"primary\">\n\n    <ion-card color=\"light\" class=\"login-content\">\n  \n      <ion-card-content>\n        <img class=\"img-logo\" src=\"assets/logo-square.png\" alt=\"\">\n  \n        <div padding>\n  \n          <ion-text color=\"dark\">\n            <h3>\n                Welcome\n            </h3>\n          </ion-text>\n    \n          <ion-text color=\"medium\">\n            <p>{{user.email}}</p>\n          </ion-text>\n        </div>\n  \n        <ion-icon name=\"ionic\" color=\"medium\"></ion-icon>\n  \n        <ion-input type=\"password\" [(ngModel)]=\"user.password\" class=\"input-email\" placeholder=\"Password\" (keypress)=\"eventHandler($event)\"></ion-input>\n  \n        <ion-text padding color=\"primary\" routerLink=\"/forgot-password\">\n          <p>Forgot Password?</p>\n        </ion-text>\n  \n        <ion-button color=\"secondary\" expand=\"block\" (click)=\"login()\">\n          Login »\n        </ion-button>\n  \n        <ion-button color=\"medium\" expand=\"block\" routerLink=\"/login\">\n          Back\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/password/password.page.scss":
/*!*********************************************!*\
  !*** ./src/app/password/password.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-content {\n  margin-top: 18vh;\n  text-align: center; }\n  .login-content img {\n    margin: 0 auto;\n    width: 150px !important;\n    height: 150px !important; }\n  .login-content .input-email {\n    text-align: left;\n    border: 1px solid #ccc;\n    padding: 5px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzc3dvcmQvRDpcXFdvcmtcXFBhdWxcXEN1cmFNb2JpbGVBenVyZVxcQ3VyYWNhbGwtbW9iaWxlLWFwcC9zcmNcXGFwcFxccGFzc3dvcmRcXHBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtFQUZ0QjtJQUlRLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsd0JBQXdCLEVBQUE7RUFOaEM7SUFVUSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFzc3dvcmQvcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHZoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQtZW1haWx7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/password/password.page.ts":
/*!*******************************************!*\
  !*** ./src/app/password/password.page.ts ***!
  \*******************************************/
/*! exports provided: PasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPage", function() { return PasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _modal_new_pin_new_pin_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/new-pin/new-pin.page */ "./src/app/modal/new-pin/new-pin.page.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");








var PasswordPage = /** @class */ (function () {
    function PasswordPage(router, route, modalController, commonService, toastController, userService, loadingController) {
        this.router = router;
        this.route = route;
        this.modalController = modalController;
        this.commonService = commonService;
        this.toastController = toastController;
        this.userService = userService;
        this.loadingController = loadingController;
        this.user = {
            email: '',
            password: ''
        };
        this.loading = null;
    }
    PasswordPage.prototype.ngOnInit = function () {
        this.user.email = this.route.snapshot.paramMap.get('email');
    };
    PasswordPage.prototype.eventHandler = function (event) {
        if (event.keyCode === 13 && this.user.password) {
            this.login();
        }
    };
    PasswordPage.prototype.openPinModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modal_new_pin_new_pin_page__WEBPACK_IMPORTED_MODULE_5__["NewPinPage"],
                            backdropDismiss: false,
                            componentProps: {
                                aParameter: true,
                                otherParameter: new Date()
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail) {
                                _this.commonService.presentLoading();
                                _this.userService.updatePin(detail.data)
                                    .subscribe(function (data) {
                                    _this.commonService.loadingBox.dismiss();
                                    _this.router.navigate(['/tabs/tab1']);
                                    _this.userService.setUserToLocal(data);
                                    _this.commonService.presentToastWithOptions('Pin successfully added.');
                                });
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PasswordPage.prototype.login = function () {
        var _this = this;
        this.commonService.presentLoading();
        this.userService.login(this.user)
            .subscribe(function (res) {
            _this.commonService.loadingBox.dismiss();
            if (res.error) {
                _this.commonService.presentToastWithOptions(res.error);
            }
            else {
                _this.userService.setLoginToLocal(res);
                if (res.user.mobile_pin) {
                    _this.router.navigate(['/tabs/tab1']);
                }
                else {
                    _this.openPinModal();
                }
            }
        });
    };
    PasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-password',
            template: __webpack_require__(/*! ./password.page.html */ "./src/app/password/password.page.html"),
            styles: [__webpack_require__(/*! ./password.page.scss */ "./src/app/password/password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], PasswordPage);
    return PasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=password-password-module.js.map