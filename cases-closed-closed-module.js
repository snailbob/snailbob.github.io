(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cases-closed-closed-module"],{

/***/ "./src/app/cases/closed/closed.module.ts":
/*!***********************************************!*\
  !*** ./src/app/cases/closed/closed.module.ts ***!
  \***********************************************/
/*! exports provided: ClosedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosedPageModule", function() { return ClosedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _closed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./closed.page */ "./src/app/cases/closed/closed.page.ts");







var routes = [
    {
        path: '',
        component: _closed_page__WEBPACK_IMPORTED_MODULE_6__["ClosedPage"]
    }
];
var ClosedPageModule = /** @class */ (function () {
    function ClosedPageModule() {
    }
    ClosedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_closed_page__WEBPACK_IMPORTED_MODULE_6__["ClosedPage"]]
        })
    ], ClosedPageModule);
    return ClosedPageModule;
}());



/***/ }),

/***/ "./src/app/cases/closed/closed.page.html":
/*!***********************************************!*\
  !*** ./src/app/cases/closed/closed.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"primary\" (click)=\"presentActionSheet()\">\r\n        <ion-icon slot=\"icon-only\" name=\"funnel\"></ion-icon>\r\n        <ion-badge color=\"danger\" class=\"header-badge\">66</ion-badge>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <img alt=\"logo\" height=\"40\" src=\"assets/logo.png\">\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-searchbar placeholder=\"Search case (eg. call type, telephone etc)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-padding-start\">\r\n    <ion-text color=\"primary\">\r\n      <h4>Closed Cases</h4>\r\n    </ion-text>\r\n  </div>\r\n  <ion-item detail *ngFor=\"let item of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]; let i = index\"\r\n    routerLink=\"/tabs/tab1/case/details/{{i}}/closed\">\r\n    <ion-avatar slot=\"start\">\r\n      <img [src]=\"i%2 ? 'assets/case1.png' : 'assets/case2.png'\">\r\n    </ion-avatar>\r\n    <ion-label>\r\n      <h2>\r\n        <ion-icon color=\"success\" name=\"radio-button-on\"></ion-icon>\r\n        Office, timesheet\r\n      </h2>\r\n      <p>Michael Basalan</p>\r\n      <p>message snapshot here is shown </p>\r\n      <p>\r\n        <ion-badge color=\"success\">Closed</ion-badge>\r\n        <ion-badge color=\"light\">Paul Lieberman</ion-badge>\r\n      </p>\r\n    </ion-label>\r\n    <small slot=\"end\" color=\"light\">\r\n      12:1{{i}}PM <br>\r\n      March 12, 2019 <br>\r\n      [#000{{item}}]\r\n    </small>\r\n  </ion-item>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/cases/closed/closed.page.scss":
/*!***********************************************!*\
  !*** ./src/app/cases/closed/closed.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.header-badge {\n  top: -2px !important;\n  position: absolute;\n  left: 18px !important;\n  padding-left: 6px;\n  padding-right: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzZXMvY2xvc2VkL0Q6XFxXb3JrXFxQYXVsXFxDdXJhL3NyY1xcYXBwXFxjYXNlc1xcY2xvc2VkXFxjbG9zZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Nhc2VzL2Nsb3NlZC9jbG9zZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLWJhZGdle1xyXG4gICAgdG9wOiAtMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/cases/closed/closed.page.ts":
/*!*********************************************!*\
  !*** ./src/app/cases/closed/closed.page.ts ***!
  \*********************************************/
/*! exports provided: ClosedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosedPage", function() { return ClosedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ClosedPage = /** @class */ (function () {
    function ClosedPage(actionSheetController, router, route) {
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.route = route;
    }
    ClosedPage.prototype.ngOnInit = function () {
    };
    ClosedPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Filter',
                            buttons: [{
                                    text: 'All Cases (99)',
                                    handler: function () {
                                        console.log('All cases clicked');
                                        _this.router.navigate(['/tabs/tab1'], { replaceUrl: true });
                                    }
                                }, {
                                    text: 'Active Cases (33)',
                                    handler: function () {
                                        console.log('Active cases clicked');
                                        _this.router.navigate(['/tabs/tab1/case/active'], { replaceUrl: true });
                                    }
                                }, {
                                    text: 'Pending Cases (33)',
                                    handler: function () {
                                        console.log('Pending clicked');
                                        _this.router.navigate(['/tabs/tab1/case/pending'], { replaceUrl: true });
                                    }
                                }, {
                                    text: 'Closed Cases (33)',
                                    handler: function () {
                                        console.log('Closed Cases clicked');
                                        _this.router.navigate(['/tabs/tab1/case/closed'], { replaceUrl: true });
                                    }
                                }, {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClosedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-closed',
            template: __webpack_require__(/*! ./closed.page.html */ "./src/app/cases/closed/closed.page.html"),
            styles: [__webpack_require__(/*! ./closed.page.scss */ "./src/app/cases/closed/closed.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ClosedPage);
    return ClosedPage;
}());



/***/ })

}]);
//# sourceMappingURL=cases-closed-closed-module.js.map