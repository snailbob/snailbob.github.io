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

module.exports = "<ion-content padding color=\"primary\">\n\n    <ion-card color=\"light\" class=\"login-content\">\n  \n      <ion-card-content>\n        <img class=\"img-logo\" src=\"assets/logo-square.png\" alt=\"\">\n  \n        <div padding>\n  \n          <ion-text color=\"dark\">\n            <h3>\n                Welcome\n            </h3>\n          </ion-text>\n    \n          <ion-text color=\"medium\">\n            <p>michael@curacall.com</p>\n          </ion-text>\n        </div>\n  \n        <ion-icon name=\"ionic\" color=\"medium\"></ion-icon>\n  \n        <ion-input type=\"password\" class=\"input-email\" placeholder=\"Password\"></ion-input>\n  \n        <ion-text padding color=\"primary\">\n          <p>Forgot Password?</p>\n        </ion-text>\n  \n        <ion-button color=\"secondary\" expand=\"block\" routerLink=\"/tabs/tab1\">\n          Login »\n        </ion-button>\n  \n        <ion-button color=\"medium\" expand=\"block\" routerLink=\"/login\">\n          Back\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/password/password.page.scss":
/*!*********************************************!*\
  !*** ./src/app/password/password.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-content {\n  margin-top: 18vh;\n  text-align: center; }\n  .login-content img {\n    margin: 0 auto;\n    width: 150px !important;\n    height: 150px !important; }\n  .login-content .input-email {\n    text-align: left;\n    border: 1px solid #ccc;\n    padding: 5px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzc3dvcmQvRDpcXFdvcmtcXFBhdWxcXEN1cmEvc3JjXFxhcHBcXHBhc3N3b3JkXFxwYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7RUFGdEI7SUFJUSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHdCQUF3QixFQUFBO0VBTmhDO0lBVVEsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Bhc3N3b3JkL3Bhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250ZW50e1xyXG4gICAgbWFyZ2luLXRvcDogMTh2aDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGltZ3tcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0LWVtYWlse1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxuXHJcbiAgICB9XHJcbn0iXX0= */"

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


var PasswordPage = /** @class */ (function () {
    function PasswordPage() {
    }
    PasswordPage.prototype.ngOnInit = function () {
    };
    PasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-password',
            template: __webpack_require__(/*! ./password.page.html */ "./src/app/password/password.page.html"),
            styles: [__webpack_require__(/*! ./password.page.scss */ "./src/app/password/password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PasswordPage);
    return PasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=password-password-module.js.map