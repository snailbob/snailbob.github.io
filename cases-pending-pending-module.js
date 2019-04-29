(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cases-pending-pending-module"],{

/***/ "./src/app/cases/pending/pending.module.ts":
/*!*************************************************!*\
  !*** ./src/app/cases/pending/pending.module.ts ***!
  \*************************************************/
/*! exports provided: PendingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingPageModule", function() { return PendingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pending_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pending.page */ "./src/app/cases/pending/pending.page.ts");







var routes = [
    {
        path: '',
        component: _pending_page__WEBPACK_IMPORTED_MODULE_6__["PendingPage"]
    }
];
var PendingPageModule = /** @class */ (function () {
    function PendingPageModule() {
    }
    PendingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pending_page__WEBPACK_IMPORTED_MODULE_6__["PendingPage"]]
        })
    ], PendingPageModule);
    return PendingPageModule;
}());



/***/ }),

/***/ "./src/app/cases/pending/pending.page.html":
/*!*************************************************!*\
  !*** ./src/app/cases/pending/pending.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" (click)=\"presentActionSheet()\">\n        <ion-icon slot=\"icon-only\" name=\"funnel\"></ion-icon>\n        <ion-badge color=\"danger\" class=\"header-badge\">66</ion-badge>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      <img alt=\"logo\" height=\"40\" src=\"assets/logo.png\">\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar placeholder=\"Search case (eg. call type, telephone etc)\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding-start\">\n    <ion-text color=\"primary\">\n      <h4>Pending Cases</h4>\n    </ion-text>\n  </div>\n\n  <ion-item detail *ngFor=\"let item of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]; let i = index\"\n    routerLink=\"/tabs/tab1/case/details/{{i}}/pending\">\n    <ion-avatar slot=\"start\">\n      <img [src]=\"i%2 ? 'assets/case1.png' : 'assets/case2.png'\">\n    </ion-avatar>\n    <ion-label>\n      <h2>\n        <ion-icon color=\"danger\" name=\"radio-button-on\"></ion-icon>\n        Office, timesheet\n      </h2>\n      <p>Michael Basalan</p>\n      <p>message snapshot here is shown </p>\n      <p>\n        <ion-badge [color]=\"i%2 ? 'warning' : 'primary'\">{{i%2 ? 'Forwarded' : 'Accepted'}}</ion-badge>\n        <ion-badge color=\"light\">Paul Lieberman</ion-badge>\n      </p>\n    </ion-label>\n    <small slot=\"end\" color=\"light\">\n      12:1{{i%3}}PM <br>\n      March 12, 2019 <br>\n      [#000{{item}}]\n    </small>\n  </ion-item>\n</ion-content>"

/***/ }),

/***/ "./src/app/cases/pending/pending.page.scss":
/*!*************************************************!*\
  !*** ./src/app/cases/pending/pending.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.header-badge {\n  top: -2px !important;\n  position: absolute;\n  left: 18px !important;\n  padding-left: 6px;\n  padding-right: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lYXRzbGVlcGNvZGUubWFjbWluaS9Cb2IvV29yay9QYXVsL0N1cmFDYWxsQXBwL3NyYy9hcHAvY2FzZXMvcGVuZGluZy9wZW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYXNlcy9wZW5kaW5nL3BlbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5oZWFkZXItYmFkZ2V7XG4gICAgdG9wOiAtMnB4ICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDE4cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/cases/pending/pending.page.ts":
/*!***********************************************!*\
  !*** ./src/app/cases/pending/pending.page.ts ***!
  \***********************************************/
/*! exports provided: PendingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingPage", function() { return PendingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PendingPage = /** @class */ (function () {
    function PendingPage(actionSheetController, router, route) {
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.route = route;
    }
    PendingPage.prototype.ngOnInit = function () {
    };
    PendingPage.prototype.presentActionSheet = function () {
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
    PendingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pending',
            template: __webpack_require__(/*! ./pending.page.html */ "./src/app/cases/pending/pending.page.html"),
            styles: [__webpack_require__(/*! ./pending.page.scss */ "./src/app/cases/pending/pending.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PendingPage);
    return PendingPage;
}());



/***/ })

}]);
//# sourceMappingURL=cases-pending-pending-module.js.map