(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab0-tab0-module"],{

/***/ "./src/app/tab0/tab0.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab0/tab0.module.ts ***!
  \*************************************/
/*! exports provided: Tab0PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab0PageModule", function() { return Tab0PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab0_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab0.page */ "./src/app/tab0/tab0.page.ts");







var routes = [
    {
        path: '',
        component: _tab0_page__WEBPACK_IMPORTED_MODULE_6__["Tab0Page"]
    }
];
var Tab0PageModule = /** @class */ (function () {
    function Tab0PageModule() {
    }
    Tab0PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab0_page__WEBPACK_IMPORTED_MODULE_6__["Tab0Page"]]
        })
    ], Tab0PageModule);
    return Tab0PageModule;
}());



/***/ }),

/***/ "./src/app/tab0/tab0.page.html":
/*!*************************************!*\
  !*** ./src/app/tab0/tab0.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <img alt=\"logo\" height=\"40\" src=\"assets/logo.png\">\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"cura-dashboard\">\n  <div class=\"ion-padding-start\">\n    <ion-text color=\"primary\">\n      <h4>Dashboard</h4>\n    </ion-text>\n  </div>\n  <ion-card color=\"primary\">\n    <ion-card-header class=\"number-header\">\n      <ion-card-title class=\"numbers-lg\">\n        <ion-badge color=\"dark\">99</ion-badge>\n      </ion-card-title>\n      <ion-card-subtitle>Completed Closed Case &middot; April 1-2, 2019</ion-card-subtitle>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card color=\"warning\">\n    <ion-card-header class=\"number-header\">\n      <ion-card-title class=\"numbers-lg\">\n        <ion-badge color=\"dark\">12 <small>min</small></ion-badge>\n      </ion-card-title>\n      <ion-card-subtitle>Case Average Time Accepted &middot; April 1-2, 2019</ion-card-subtitle>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card color=\"secondary\">\n    <ion-card-header class=\"number-header\">\n      <ion-card-title class=\"numbers-lg\">\n        <ion-badge color=\"dark\">14 <small>min</small></ion-badge>\n      </ion-card-title>\n      <ion-card-subtitle>Case Average Time To Close &middot; April 1-2, 2019</ion-card-subtitle>\n    </ion-card-header>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/tab0/tab0.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab0/tab0.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cura-dashboard .number-header {\n  text-align: center; }\n  .cura-dashboard .number-header .numbers-lg {\n    text-align: center; }\n  .cura-dashboard .number-header .numbers-lg ion-badge {\n      opacity: 0.8;\n      width: 100%;\n      font-weight: bold;\n      font-size: 75px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lYXRzbGVlcGNvZGUubWFjbWluaS9Cb2IvV29yay9QYXVsL0N1cmFDYWxsQXBwL3NyYy9hcHAvdGFiMC90YWIwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGtCQUFrQixFQUFBO0VBRjFCO0lBV1ksa0JBQWtCLEVBQUE7RUFYOUI7TUFNZ0IsWUFBWTtNQUNaLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMC90YWIwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXJhLWRhc2hib2FyZHtcbiAgICAubnVtYmVyLWhlYWRlcntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIC5udW1iZXJzLWxnIHtcbiAgICAgICAgICAgIGlvbi1iYWRnZXtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA3NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab0/tab0.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab0/tab0.page.ts ***!
  \***********************************/
/*! exports provided: Tab0Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab0Page", function() { return Tab0Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Tab0Page = /** @class */ (function () {
    function Tab0Page() {
    }
    Tab0Page.prototype.ngOnInit = function () {
    };
    Tab0Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab0',
            template: __webpack_require__(/*! ./tab0.page.html */ "./src/app/tab0/tab0.page.html"),
            styles: [__webpack_require__(/*! ./tab0.page.scss */ "./src/app/tab0/tab0.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Tab0Page);
    return Tab0Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab0-tab0-module.js.map