(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding color=\"primary\">\r\n\r\n  <ion-card color=\"light\" class=\"login-content\">\r\n\r\n    <ion-card-content>\r\n      <img class=\"img-logo\" src=\"assets/logo-square.png\" alt=\"\">\r\n\r\n      <div padding>\r\n\r\n        <ion-text color=\"dark\">\r\n          <h3>\r\n            Login to your account\r\n          </h3>\r\n        </ion-text>\r\n  \r\n        <ion-text color=\"medium\">\r\n          <p>Enter Username</p>\r\n        </ion-text>\r\n      </div>\r\n\r\n      <ion-icon name=\"ionic\" color=\"medium\"></ion-icon>\r\n\r\n      <ion-input type=\"email\" class=\"input-email\" [(ngModel)]=\"user.email\" placeholder=\"Email\" (keypress)=\"eventHandler($event)\"></ion-input>\r\n\r\n      <ion-text padding color=\"primary\" routerLink=\"/forgot-password\">\r\n        <p>Forgot Password?</p>\r\n      </ion-text>\r\n\r\n      <ion-button color=\"secondary\" expand=\"block\" [disabled]=\"!user.email\" (click)=\"checkEmail()\">\r\n        Next »\r\n      </ion-button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-content {\n  margin-top: 18vh;\n  text-align: center; }\n  .login-content img {\n    margin: 0 auto;\n    width: 150px !important;\n    height: 150px !important; }\n  .login-content .input-email {\n    text-align: left;\n    border: 1px solid #ccc;\n    padding: 5px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXFdvcmtcXFBhdWxcXEN1cmFNb2JpbGVBenVyZVxcQ3VyYWNhbGwtbW9iaWxlLWFwcC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtFQUZ0QjtJQUlRLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsd0JBQXdCLEVBQUE7RUFOaEM7SUFVUSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHZoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQtZW1haWx7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");






// import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';

var LoginPage = /** @class */ (function () {
    function LoginPage(plt, 
    // private push: Push,
    commonService, router, route, userService, toastController, loadingController) {
        this.plt = plt;
        this.commonService = commonService;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.user = {
            email: null
        };
        this.loading = null;
    }
    LoginPage.prototype.ngOnInit = function () {
        if (this.userService.getUserId()) {
            this.router.navigate(['/tabs/tab1'], { replaceUrl: true });
        }
        // this.checkPushPermission();
        // this.createPushChannel();
        // this.returnChannels();
        // this.initPush();
    };
    // checkPushPermission() {
    //   // to check if we have permission
    // this.push.hasPermission()
    //   .then((res: any) => {
    //     if (res.isEnabled) {
    //       this.commonService.presentAlert('We have permission to send push notifications', 'w', () => {});
    //     } else {
    //       this.commonService.presentAlert('We do not have permission to send push notifications', 'nn', () => {});
    //     }
    //   });
    // }
    // createPushChannel() {
    //   // Create a channel (Android O and above). You'll need to provide the id, description and importance properties.
    //   this.push.createChannel({
    //     id: "testchannel1",
    //     description: "My first test channel",
    //     // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
    //     importance: 3
    //   }).then(() => {
    //     this.commonService.presentAlert('Channel created', 'nn', () => {});
    //     console.log('Channel created')});
    // }
    // returnChannels() {
    //   // Return a list of currently configured channels
    //   this.push.listChannels().then((channels) => {
    //     this.commonService.presentAlert(JSON.stringify(channels), 'List of channels', () => {});
    //     console.log('List of channels', channels);
    //   });
    // }
    // initPush() {
    //   // to initialize push notifications
    //   const options: PushOptions = {
    //     android: {},
    //     ios: {
    //         alert: 'true',
    //         badge: true,
    //         sound: 'false'
    //     },
    //     windows: {},
    //     browser: {
    //         pushServiceURL: 'http://push.api.phonegap.com/v1/push'
    //     }
    //   }
    //   const pushObject: PushObject = this.push.init(options);
    //   pushObject.on('notification').subscribe((notification: any) => {
    //     this.commonService.presentAlert(JSON.stringify(notification), 'Received a notification', () => {});
    //     console.log('Received a notification', notification);
    //   });
    //   pushObject.on('registration').subscribe((registration: any) => {
    //     this.commonService.presentAlert(JSON.stringify(registration), 'Device registered', () => {});
    //     console.log('Device registered', registration)});
    //   pushObject.on('error').subscribe(error => {
    //     this.commonService.presentAlert(JSON.stringify(error), 'Error with Push plugin', () => {});
    //     console.error('Error with Push plugin', error)});
    // }
    LoginPage.prototype.eventHandler = function (event) {
        if (event.keyCode === 13 && this.user.email) {
            this.checkEmail();
        }
    };
    LoginPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Loading',
                                // duration: 2000,
                                showBackdrop: true,
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.presentToastWithOptions = function (message) {
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
    LoginPage.prototype.checkEmail = function () {
        var _this = this;
        this.presentLoading();
        this.userService.checkEmail(this.user)
            .subscribe(function (res) {
            _this.loading.dismiss();
            if (!res.count) {
                _this.presentToastWithOptions('No matching email found.');
            }
            else {
                _this.router.navigate(['/password', res]);
            }
        });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map