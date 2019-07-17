(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-faq-faq-module"],{

/***/ "./src/app/dashboard/faq/faq.module.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/faq/faq.module.ts ***!
  \*********************************************/
/*! exports provided: FaqPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq.page */ "./src/app/dashboard/faq/faq.page.ts");







var routes = [
    {
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_6__["FaqPage"]
    }
];
var FaqPageModule = /** @class */ (function () {
    function FaqPageModule() {
    }
    FaqPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_6__["FaqPage"]]
        })
    ], FaqPageModule);
    return FaqPageModule;
}());



/***/ }),

/***/ "./src/app/dashboard/faq/faq.page.html":
/*!*********************************************!*\
  !*** ./src/app/dashboard/faq/faq.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      <img alt=\"logo\" height=\"40\" src=\"assets/logo.png\">\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-list-header color=\"medium\">\r\n      <ion-label>About Cases</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>Question 1</ion-item>\r\n    <ion-item>Question 2</ion-item>\r\n    <ion-item>Question 3</ion-item>\r\n    <ion-item>Question 4</ion-item>\r\n    <ion-item>Question 5</ion-item>\r\n    <ion-list-header color=\"medium\">\r\n      <ion-label>About Messaging</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>Question 1</ion-item>\r\n    <ion-item>Question 2</ion-item>\r\n    <ion-item>Question 3</ion-item>\r\n    <ion-item>Question 4</ion-item>\r\n    <ion-item>Question 5</ion-item>\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/dashboard/faq/faq.page.scss":
/*!*********************************************!*\
  !*** ./src/app/dashboard/faq/faq.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9mYXEvZmFxLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/faq/faq.page.ts":
/*!*******************************************!*\
  !*** ./src/app/dashboard/faq/faq.page.ts ***!
  \*******************************************/
/*! exports provided: FaqPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPage", function() { return FaqPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FaqPage = /** @class */ (function () {
    function FaqPage() {
    }
    FaqPage.prototype.ngOnInit = function () {
    };
    FaqPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.page.html */ "./src/app/dashboard/faq/faq.page.html"),
            styles: [__webpack_require__(/*! ./faq.page.scss */ "./src/app/dashboard/faq/faq.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FaqPage);
    return FaqPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-faq-faq-module.js.map