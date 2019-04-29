(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-recent-recent-module"],{

/***/ "./src/app/messages/recent/recent.module.ts":
/*!**************************************************!*\
  !*** ./src/app/messages/recent/recent.module.ts ***!
  \**************************************************/
/*! exports provided: RecentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentPageModule", function() { return RecentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recent.page */ "./src/app/messages/recent/recent.page.ts");







var routes = [
    {
        path: '',
        component: _recent_page__WEBPACK_IMPORTED_MODULE_6__["RecentPage"]
    }
];
var RecentPageModule = /** @class */ (function () {
    function RecentPageModule() {
    }
    RecentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_recent_page__WEBPACK_IMPORTED_MODULE_6__["RecentPage"]]
        })
    ], RecentPageModule);
    return RecentPageModule;
}());



/***/ }),

/***/ "./src/app/messages/recent/recent.page.html":
/*!**************************************************!*\
  !*** ./src/app/messages/recent/recent.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <img alt=\"logo\" height=\"40\" src=\"assets/logo.png\">\n    </ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-input placeholder=\"Search contact here\"></ion-input>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"search\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Recent</ion-label>\n    </ion-list-header>\n    <ion-item routerLink=\"/tabs/tab2/messages/conversation\">\n      <ion-icon name=\"time\" slot=\"start\"></ion-icon>\n      <ion-label>Paul Lieberman</ion-label>\n    </ion-item>\n    <ion-item routerLink=\"/tabs/tab2/messages/conversation\">\n      <ion-icon name=\"time\" slot=\"start\"></ion-icon>\n      <ion-label>Michael Basalan</ion-label>\n    </ion-item>\n    <ion-item routerLink=\"/tabs/tab2/messages/conversation\">\n      <ion-icon name=\"time\" slot=\"start\"></ion-icon>\n      <ion-label>Post Malone</ion-label>\n    </ion-item>\n    <ion-item routerLink=\"/tabs/tab2/messages/conversation\">\n      <ion-icon name=\"time\" slot=\"start\"></ion-icon>\n      <ion-label>Bob Marley</ion-label>\n    </ion-item>\n    <ion-item routerLink=\"/tabs/tab2/messages/conversation\">\n      <ion-icon name=\"time\" slot=\"start\"></ion-icon>\n      <ion-label>Cathy Cat</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/messages/recent/recent.page.scss":
/*!**************************************************!*\
  !*** ./src/app/messages/recent/recent.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL3JlY2VudC9yZWNlbnQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/messages/recent/recent.page.ts":
/*!************************************************!*\
  !*** ./src/app/messages/recent/recent.page.ts ***!
  \************************************************/
/*! exports provided: RecentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentPage", function() { return RecentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecentPage = /** @class */ (function () {
    function RecentPage() {
    }
    RecentPage.prototype.ngOnInit = function () {
    };
    RecentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recent',
            template: __webpack_require__(/*! ./recent.page.html */ "./src/app/messages/recent/recent.page.html"),
            styles: [__webpack_require__(/*! ./recent.page.scss */ "./src/app/messages/recent/recent.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecentPage);
    return RecentPage;
}());



/***/ })

}]);
//# sourceMappingURL=messages-recent-recent-module.js.map