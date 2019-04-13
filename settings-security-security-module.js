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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>\n      <img alt=\"logo\" height=\"40\" src=\"assets/logo.png\">\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"pin && pinShow || pwMatch\">\n      <ion-button routerLink=\"/tabs/tab4\">\n        <ion-icon name=\"save\"></ion-icon> Save\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Security and Login</ion-label>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label position=\"floating\">Current Password</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"pw.current\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">New Password</ion-label>\n      <ion-input type=\"password\" (change)=\"checkNewPass()\" [(ngModel)]=\"pw.new\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Confirm Password</ion-label>\n      <ion-input type=\"password\" (change)=\"checkNewPass()\" [(ngModel)]=\"pw.new2\"></ion-input>\n    </ion-item>\n\n  </ion-list>\n  <ion-list>\n      <ion-list-header>\n        <ion-label>Auto Logoff</ion-label>\n      </ion-list-header>\n  \n      <ion-item>\n          <ion-segment (ionChange)=\"segmentChanged($event)\">\n              <ion-segment-button value=\"15\">\n                <ion-label>15 min</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"1\">\n                <ion-label>1 hr</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"24\" checked>\n                <ion-label>24 hrs</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"7\">\n                <ion-label>7 days</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"n\">\n                <ion-label>Never</ion-label>\n              </ion-segment-button>\n            </ion-segment>\n      </ion-item>\n  \n      <ion-item *ngIf=\"pinShow\">\n          <ion-label position=\"fixed\">4 Digit Pin</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"pin\" maxlength=\"4\" placeholder=\"****\"></ion-input>\n      </ion-item>\n  \n    </ion-list>\n  \n\n</ion-content>"

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


var SecurityPage = /** @class */ (function () {
    function SecurityPage() {
        this.pinShow = false;
        this.pin = '';
        this.pw = {
            current: '',
            new: '',
            new2: ''
        };
        this.pwMatch = false;
    }
    SecurityPage.prototype.ngOnInit = function () {
    };
    SecurityPage.prototype.checkNewPass = function () {
        this.pwMatch = this.pw.new === this.pw.new2;
    };
    SecurityPage.prototype.segmentChanged = function ($e) {
        this.pinShow = true;
    };
    SecurityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-security',
            template: __webpack_require__(/*! ./security.page.html */ "./src/app/settings/security/security.page.html"),
            styles: [__webpack_require__(/*! ./security.page.scss */ "./src/app/settings/security/security.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SecurityPage);
    return SecurityPage;
}());



/***/ })

}]);
//# sourceMappingURL=settings-security-security-module.js.map