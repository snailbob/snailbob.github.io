(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cases-modal-remarks-remarks-module"],{

/***/ "./src/app/cases/modal/remarks/remarks.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/cases/modal/remarks/remarks.module.ts ***!
  \*******************************************************/
/*! exports provided: RemarksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemarksPageModule", function() { return RemarksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _remarks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./remarks.page */ "./src/app/cases/modal/remarks/remarks.page.ts");







var routes = [
    {
        path: '',
        component: _remarks_page__WEBPACK_IMPORTED_MODULE_6__["RemarksPage"]
    }
];
var RemarksPageModule = /** @class */ (function () {
    function RemarksPageModule() {
    }
    RemarksPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_remarks_page__WEBPACK_IMPORTED_MODULE_6__["RemarksPage"]]
        })
    ], RemarksPageModule);
    return RemarksPageModule;
}());



/***/ }),

/***/ "./src/app/cases/modal/remarks/remarks.page.html":
/*!*******************************************************!*\
  !*** ./src/app/cases/modal/remarks/remarks.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n  \n      <ion-title>\n        <img alt=\"logo\" height=\"40\" src=\"assets/logo.png\">\n      </ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button routerLink=\"/tabs/tab1\">\n          Forward\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n<ion-content padding>\n  <textarea name=\"\" id=\"\" cols=\"30\" class=\"input-textarea\" rows=\"10\" placeholder=\"Add Note/Remarks\"></textarea>\n</ion-content>"

/***/ }),

/***/ "./src/app/cases/modal/remarks/remarks.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/cases/modal/remarks/remarks.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhc2VzL21vZGFsL3JlbWFya3MvcmVtYXJrcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/cases/modal/remarks/remarks.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/cases/modal/remarks/remarks.page.ts ***!
  \*****************************************************/
/*! exports provided: RemarksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemarksPage", function() { return RemarksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RemarksPage = /** @class */ (function () {
    function RemarksPage() {
    }
    RemarksPage.prototype.ngOnInit = function () {
    };
    RemarksPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-remarks',
            template: __webpack_require__(/*! ./remarks.page.html */ "./src/app/cases/modal/remarks/remarks.page.html"),
            styles: [__webpack_require__(/*! ./remarks.page.scss */ "./src/app/cases/modal/remarks/remarks.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RemarksPage);
    return RemarksPage;
}());



/***/ })

}]);
//# sourceMappingURL=cases-modal-remarks-remarks-module.js.map