(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cases-active-active-module"],{

/***/ "./src/app/cases/active/active.module.ts":
/*!***********************************************!*\
  !*** ./src/app/cases/active/active.module.ts ***!
  \***********************************************/
/*! exports provided: ActivePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivePageModule", function() { return ActivePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _active_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./active.page */ "./src/app/cases/active/active.page.ts");







var routes = [
    {
        path: '',
        component: _active_page__WEBPACK_IMPORTED_MODULE_6__["ActivePage"]
    }
];
var ActivePageModule = /** @class */ (function () {
    function ActivePageModule() {
    }
    ActivePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_active_page__WEBPACK_IMPORTED_MODULE_6__["ActivePage"]]
        })
    ], ActivePageModule);
    return ActivePageModule;
}());



/***/ }),

/***/ "./src/app/cases/active/active.page.html":
/*!***********************************************!*\
  !*** ./src/app/cases/active/active.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" (click)=\"presentActionSheet()\">\n        <ion-icon slot=\"icon-only\" name=\"funnel\"></ion-icon>\n        <ion-badge color=\"danger\" class=\"header-badge\">66</ion-badge>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      <img alt=\"logo\" height=\"40\" src=\"assets/logo.png\">\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar placeholder=\"Search case (eg. call type, telephone etc)\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding-start\">\n    <ion-text color=\"primary\">\n      <h4>Active Cases</h4>\n    </ion-text>\n  </div>\n\n  <ion-item detail *ngFor=\"let item of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]; let i = index\"\n    routerLink=\"/tabs/tab1/case/details/{{i}}/active\">\n    <ion-avatar slot=\"start\">\n      <img [src]=\"i%2 ? 'assets/case1.png' : 'assets/case2.png'\">\n    </ion-avatar>\n    <ion-label>\n      <h2>\n        <ion-icon color=\"secondary\" name=\"radio-button-on\"></ion-icon>\n        Office, timesheet\n      </h2>\n      <p>Michael Basalan</p>\n      <p>message snapshot here is shown </p>\n    </ion-label>\n    <small slot=\"end\" color=\"light\">\n      12:1{{i%3}}PM <br>\n      March 12, 2019 <br>\n      [#000{{item}}]\n    </small>\n  </ion-item>\n</ion-content>"

/***/ }),

/***/ "./src/app/cases/active/active.page.scss":
/*!***********************************************!*\
  !*** ./src/app/cases/active/active.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.header-badge {\n  top: -2px !important;\n  position: absolute;\n  left: 18px !important;\n  padding-left: 6px;\n  padding-right: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lYXRzbGVlcGNvZGUubWFjbWluaS9Cb2IvV29yay9QYXVsL0N1cmFDYWxsQXBwL3NyYy9hcHAvY2FzZXMvYWN0aXZlL2FjdGl2ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FzZXMvYWN0aXZlL2FjdGl2ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICAgIG1heC1oZWlnaHQ6IDM1dmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLmhlYWRlci1iYWRnZXtcbiAgICB0b3A6IC0ycHggIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMThweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/cases/active/active.page.ts":
/*!*********************************************!*\
  !*** ./src/app/cases/active/active.page.ts ***!
  \*********************************************/
/*! exports provided: ActivePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivePage", function() { return ActivePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ActivePage = /** @class */ (function () {
    function ActivePage(actionSheetController, router, route) {
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.route = route;
        this.cases = [
            {
                type: 'Office',
                subType: 'timesheet',
                callerId: '#0001',
                callerName: 'Michael Basalan',
                message: "Caller Information\n         <br> &nbsp; &nbsp; &nbsp; Caller Type: Patient\n          <br> &nbsp; &nbsp; &nbsp; First name: Michael Basalan\n         ",
                status: 'Active',
                statusColor: 'secondary',
                callStatus: 'Accepted',
                callStatusColor: 'light',
                lastAssignee: 'Paul Lieberman',
                read: true,
                from: 'CuraCall Message'
            },
            {
                type: 'Building',
                subType: 'timestamp',
                callerId: '#0001',
                callerName: 'John Lennon',
                message: "Caller Information\n         <br> &nbsp; &nbsp; &nbsp; Caller Type: Patient\n          <br> &nbsp; &nbsp; &nbsp; First name: Michael Basalan\n         ",
                status: 'Active',
                statusColor: 'secondary',
                callStatus: 'Accepted',
                callStatusColor: 'light',
                lastAssignee: 'Paul Lieberman',
                read: false,
                from: 'CuraCall Message'
            },
            {
                type: 'House',
                subType: 'window',
                callerId: '#0001',
                callerName: 'Vijay Kumar',
                message: "Caller Information\n         <br> &nbsp; &nbsp; &nbsp; Caller Type: Patient\n          <br> &nbsp; &nbsp; &nbsp; First name: Michael Basalan\n         ",
                status: 'Active',
                statusColor: 'secondary',
                callStatus: 'Accepted',
                callStatusColor: 'light',
                lastAssignee: 'Paul Lieberman',
                read: false,
                from: 'CuraCall Message'
            },
        ];
    }
    ActivePage.prototype.ngOnInit = function () {
    };
    ActivePage.prototype.presentActionSheet = function () {
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
    ActivePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-active',
            template: __webpack_require__(/*! ./active.page.html */ "./src/app/cases/active/active.page.html"),
            styles: [__webpack_require__(/*! ./active.page.scss */ "./src/app/cases/active/active.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ActivePage);
    return ActivePage;
}());



/***/ })

}]);
//# sourceMappingURL=cases-active-active-module.js.map