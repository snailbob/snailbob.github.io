(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-security-security-module"],{

/***/ "./src/app/settings/security/security.module.ts":
/*!******************************************************!*\
  !*** ./src/app/settings/security/security.module.ts ***!
  \******************************************************/
/*! exports provided: SecurityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityPageModule", function() { return SecurityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _security_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./security.page */ "./src/app/settings/security/security.page.ts");







var routes = [
    {
        path: '',
        component: _security_page__WEBPACK_IMPORTED_MODULE_6__["SecurityPage"]
    }
];
var SecurityPageModule = /** @class */ (function () {
    function SecurityPageModule() {
    }
    SecurityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_security_page__WEBPACK_IMPORTED_MODULE_6__["SecurityPage"]]
        })
    ], SecurityPageModule);
    return SecurityPageModule;
}());



/***/ }),

/***/ "./src/app/settings/security/security.page.html":
/*!******************************************************!*\
  !*** ./src/app/settings/security/security.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>\n      <img alt=\"logo\" height=\"40\" src=\"assets/logo.png\">\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"pin && pinShow || (pw.current && pw.new && pw.new2) || (newPin.new && newPin.new2)\">\n      <ion-button (click)=\"saveChanges()\">\n        <ion-icon name=\"save\"></ion-icon> Save\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Security and Login</ion-label>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label position=\"floating\">Current Password</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"pw.current\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">New Password</ion-label>\n      <ion-input type=\"password\" (change)=\"checkNewPass()\" [(ngModel)]=\"pw.new\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Confirm Password</ion-label>\n      <ion-input type=\"password\" (change)=\"checkNewPass()\" [(ngModel)]=\"pw.new2\"></ion-input>\n    </ion-item>\n\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Auto Logoff</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-segment [(ngModel)]=\"pw.logoff_time\" (ionChange)=\"segmentChanged($event)\">\n        <ion-segment-button value=\"15\">\n          <ion-label>15 min</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"1\">\n          <ion-label>1 hr</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"24\">\n          <ion-label>24 hrs</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-item>\n\n    <ion-item *ngIf=\"pinShow\">\n      <ion-label position=\"fixed\">4 Digit Pin</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"pin\" maxlength=\"4\" placeholder=\"****\"></ion-input>\n    </ion-item>\n\n    <ion-button fill=\"clear\" strong=\"true\" expand=\"block\" size=\"small\" *ngIf=\"!isForgotPin\" color=\"primary\" (click)=\"isForgotPin = !isForgotPin\">\n      Forgot Your Pin ?\n    </ion-button>\n  </ion-list>\n\n  <ion-list *ngIf=\"isForgotPin\">\n    <ion-list-header>\n      <ion-label>Reset Pin</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label position=\"floating\">New 4 Digit Pin</ion-label>\n      <ion-input type=\"password\" placeholder=\"****\" maxlength=\"4\" [(ngModel)]=\"newPin.new\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Repeat New 4 Digit Pin</ion-label>\n      <ion-input type=\"password\" placeholder=\"****\" maxlength=\"4\" [(ngModel)]=\"newPin.new2\"></ion-input>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/settings/security/security.page.scss":
/*!******************************************************!*\
  !*** ./src/app/settings/security/security.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NlY3VyaXR5L3NlY3VyaXR5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/settings/security/security.page.ts":
/*!****************************************************!*\
  !*** ./src/app/settings/security/security.page.ts ***!
  \****************************************************/
/*! exports provided: SecurityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityPage", function() { return SecurityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");





var SecurityPage = /** @class */ (function () {
    function SecurityPage(commonService, userService, router, route) {
        this.commonService = commonService;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.isForgotPin = false;
        this.pinShow = false;
        this.pin = '';
        this.userInfo = {};
        this.pw = {
            current: '',
            new: '',
            new2: '',
            logoff_time: '',
            mobile_pin: '',
            id: this.userService.getUserId()
        };
        this.newPin = {
            new: '',
            new2: ''
        };
        this.pwMatch = false;
    }
    SecurityPage.prototype.ngOnInit = function () {
        this.userInfo = this.userService.getUserInfo();
        console.log(this.userInfo, 'this.userInfo');
        this.pw.logoff_time = "" + this.userInfo.logoff_time;
    };
    SecurityPage.prototype.ionViewWillEnter = function () {
        this.userInfo = this.userService.getUserInfo();
    };
    SecurityPage.prototype.checkNewPass = function () {
        this.pwMatch = this.pw.new === this.pw.new2;
    };
    SecurityPage.prototype.segmentChanged = function ($e) {
        console.log($e, '$e');
        this.pw.logoff_time = $e.detail.value;
        this.pinShow = true;
    };
    SecurityPage.prototype.saveChanges = function () {
        var _this = this;
        console.log(this.userService.getUserInfo()['mobile_pin'], parseInt(this.pin, 10));
        if (this.newPin.new && this.newPin.new2) {
            if (this.newPin.new !== this.newPin.new2) {
                this.commonService.presentToastWithOptions('Your new pin and confirm pin did not match.');
            }
            else {
                this.commonService.presentLoading();
                this.userService.updatePin({ mobile_pin: this.newPin.new, id: this.userInfo.id })
                    .subscribe(function (res) {
                    _this.commonService.loadingBox.dismiss();
                    _this.userService.setUserToLocal(res);
                    _this.router.navigate(['/tabs/tab4'], { replaceUrl: true });
                    _this.commonService.presentToastWithOptions('Pin successfully updated.');
                });
            }
        }
        else if (!this.pwMatch && this.pw.current) {
            this.commonService.presentToastWithOptions('New password and confirm password did not match.');
        }
        else if (this.userService.getUserInfo()['mobile_pin'] !== parseInt(this.pin, 10)) {
            this.commonService.presentToastWithOptions('Your pin is incorrect.');
        }
        else {
            this.pw.mobile_pin = this.pin;
            this.userService.updatePassword(this.pw)
                .subscribe(function (res) {
                if (_this.pw.current && _this.pin) {
                    _this.commonService.presentToastWithOptions('Password and log off time Saved.');
                }
                else if (_this.pw.current) {
                    _this.commonService.presentToastWithOptions('Password Saved.');
                }
                else {
                    _this.commonService.presentToastWithOptions('Log time off Saved.');
                }
                _this.userService.setUserToLocal(res);
                _this.router.navigate(['/tabs/tab4'], { replaceUrl: true });
            });
        }
    };
    SecurityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-security',
            template: __webpack_require__(/*! ./security.page.html */ "./src/app/settings/security/security.page.html"),
            styles: [__webpack_require__(/*! ./security.page.scss */ "./src/app/settings/security/security.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SecurityPage);
    return SecurityPage;
}());



/***/ })

}]);
//# sourceMappingURL=settings-security-security-module.js.map