(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cases-all-all-module"],{

/***/ "./src/app/cases/all/all.module.ts":
/*!*****************************************!*\
  !*** ./src/app/cases/all/all.module.ts ***!
  \*****************************************/
/*! exports provided: AllPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPageModule", function() { return AllPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _all_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all.page */ "./src/app/cases/all/all.page.ts");







var routes = [
    {
        path: '',
        component: _all_page__WEBPACK_IMPORTED_MODULE_6__["AllPage"]
    }
];
var AllPageModule = /** @class */ (function () {
    function AllPageModule() {
    }
    AllPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_all_page__WEBPACK_IMPORTED_MODULE_6__["AllPage"]]
        })
    ], AllPageModule);
    return AllPageModule;
}());



/***/ }),

/***/ "./src/app/cases/all/all.page.html":
/*!*****************************************!*\
  !*** ./src/app/cases/all/all.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>all</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cases/all/all.page.scss":
/*!*****************************************!*\
  !*** ./src/app/cases/all/all.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhc2VzL2FsbC9hbGwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/cases/all/all.page.ts":
/*!***************************************!*\
  !*** ./src/app/cases/all/all.page.ts ***!
  \***************************************/
/*! exports provided: AllPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPage", function() { return AllPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AllPage = /** @class */ (function () {
    function AllPage() {
    }
    AllPage.prototype.ngOnInit = function () {
    };
    AllPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all',
            template: __webpack_require__(/*! ./all.page.html */ "./src/app/cases/all/all.page.html"),
            styles: [__webpack_require__(/*! ./all.page.scss */ "./src/app/cases/all/all.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AllPage);
    return AllPage;
}());



/***/ })

}]);
//# sourceMappingURL=cases-all-all-module.js.map