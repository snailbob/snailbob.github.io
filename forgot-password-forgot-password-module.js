(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"],{

/***/ "./src/app/forgot-password/forgot-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/forgot-password/forgot-password.page.ts");







var routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]
    }
];
var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.html":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding color=\"primary\">\n\n  <ion-card color=\"light\" class=\"login-content\">\n\n    <ion-card-content>\n      <img class=\"img-logo\" src=\"assets/logo-square.png\" alt=\"\">\n\n      <div padding>\n\n        <ion-text color=\"dark\">\n          <h3>\n              Reset Password\n          </h3>\n        </ion-text>\n      </div>\n\n      <ion-icon name=\"ionic\" color=\"medium\"></ion-icon>\n\n      <ion-input type=\"emaiil\" [(ngModel)]=\"user.email\" email class=\"input-email\" placeholder=\"user@email.com\"></ion-input>\n\n      <ion-button color=\"secondary\" expand=\"block\" (click)=\"reset()\" [disabled]=\"!user.email\">\n        Reset »\n      </ion-button>\n\n      <ion-button color=\"medium\" expand=\"block\" routerLink=\"/login\">\n        Back\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-content {\n  margin-top: 18vh;\n  text-align: center; }\n  .login-content img {\n    margin: 0 auto;\n    width: 150px !important;\n    height: 150px !important; }\n  .login-content .input-email {\n    text-align: left;\n    border: 1px solid #ccc;\n    padding: 5px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL0Q6XFxXb3JrXFxQYXVsXFxDdXJhTW9iaWxlQXp1cmVcXEN1cmFjYWxsLW1vYmlsZS1hcHAvc3JjXFxhcHBcXGZvcmdvdC1wYXNzd29yZFxcZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtFQUZ0QjtJQUlRLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsd0JBQXdCLEVBQUE7RUFOaEM7SUFVUSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGVudHtcbiAgICBtYXJnaW4tdG9wOiAxOHZoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBpbWd7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5pbnB1dC1lbWFpbHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG5cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");




var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(commonService, userService) {
        this.commonService = commonService;
        this.userService = userService;
        this.user = {
            email: ''
        };
    }
    ForgotPasswordPage.prototype.ngOnInit = function () {
    };
    ForgotPasswordPage.prototype.reset = function () {
        var _this = this;
        this.userService.resetPassword(this.user)
            .subscribe(function (res) {
            if (res.status) {
                _this.commonService.presentToastWithOptions(res.message);
            }
            else {
                _this.commonService.presentToastWithOptions('Email did not match on our database.');
            }
        });
    };
    ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.page.html */ "./src/app/forgot-password/forgot-password.page.html"),
            styles: [__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/forgot-password/forgot-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=forgot-password-forgot-password-module.js.map