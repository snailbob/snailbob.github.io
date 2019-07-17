(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/shared/pipes/my-filter.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/shared/pipes/my-filter.pipe.ts ***!
  \************************************************/
/*! exports provided: MyFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFilterPipe", function() { return MyFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyFilterPipe = /** @class */ (function () {
    function MyFilterPipe() {
    }
    MyFilterPipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(function (item) {
            return Object.keys(item).some(function (k) {
                return item[k].toString().toLowerCase().indexOf(filter.call_type.toString().toLowerCase()) !== -1;
            });
        });
        // item.subType.indexOf(filter.subType) !== -1);
    };
    MyFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'myfilter',
            pure: false
        })
    ], MyFilterPipe);
    return MyFilterPipe;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _shared_pipes_my_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/pipes/my-filter.pipe */ "./src/app/shared/pipes/my-filter.pipe.ts");








var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"], _shared_pipes_my_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["MyFilterPipe"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"primary\" (click)=\"presentActionSheet()\">\r\n        <ion-icon slot=\"icon-only\" name=\"funnel\"></ion-icon>\r\n        <ion-badge color=\"danger\" class=\"header-badge\">{{totalActiveCases}}</ion-badge>\r\n      </ion-button>\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <img alt=\"logo\" height=\"40\" src=\"assets/logo.png\">\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-searchbar [(ngModel)]=\"searchText\" (ngModelChange)=\"getCases()\" placeholder=\"Search case (eg. call type, telephone etc)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div padding class=\"ion-text-center\" *ngIf=\"isLoading\">\r\n    <ion-spinner></ion-spinner>\r\n  </div>\r\n\r\n  <div class=\"ion-padding-start\" *ngIf=\"!isLoading\">\r\n    <ion-text color=\"primary\">\r\n      <h4>{{title}}</h4>\r\n    </ion-text>\r\n  </div>\r\n  <ion-list class=\"case-list\" *ngIf=\"!isLoading\">\r\n    <div padding class=\"ion-text-center\" *ngIf=\"!cases.length\">\r\n      Empty\r\n    </div>\r\n    <ion-item detail *ngFor=\"let case of cases; let i = index\" [routerLink]=\"case.ownership_text === 'Forwarded' ? '/tabs/tab1/case/details/'+case.id+'/forwarded/assign' : '/tabs/tab1/case/details/'+case.id+'/'+case.status_text.toLowerCase()\">\r\n      <ion-avatar slot=\"start\" *ngIf=\"!case.avatar\">\r\n        <img [src]=\"i%2 ? 'assets/case1.png' : 'assets/case2.png'\">\r\n      </ion-avatar>\r\n      <ion-avatar slot=\"start\" *ngIf=\"case.avatar\">\r\n        <img [src]=\"case.avatar\">\r\n      </ion-avatar>\r\n      <ion-label [ngClass]=\"{'item-unread': !case.is_read}\">\r\n        <h2>\r\n          <ion-icon [color]=\"case.status_color\" *ngIf=\"!case.is_read || case.ownership_text === 'Forwarded'\" name=\"radio-button-on\"></ion-icon>\r\n          <ion-icon [color]=\"case.status_color\" *ngIf=\"case.is_read && case.ownership_text !== 'Forwarded'\" name=\"radio-button-off\"></ion-icon>\r\n          {{case.sender_fullname}}\r\n          \r\n        </h2>\r\n        <p>{{case.call_type}}; {{case.subcall_type}}</p>\r\n        <p *ngIf=\"case.full_message\">{{case.full_message}}</p>\r\n        <p *ngIf=\"!case.full_message\"> Full message of the case here </p>\r\n        <p *ngIf=\"case.status_text !== 'Active'\">\r\n          <ion-badge [color]=\"case.ownership_color\">{{case.ownership_text}}</ion-badge>\r\n          <ion-badge color=\"light\">{{case.ownership_text === 'Accepted' ? case.acceptee : case.forwardee}}</ion-badge>\r\n        </p>\r\n      </ion-label>\r\n      <small slot=\"end\" color=\"light\">\r\n        {{ case.created_at | date: 'shortTime'}} <br>\r\n        {{ case.created_at | date: 'mediumDate'}} <br>\r\n        [#{{case.case_id | slice:0:4}}]\r\n      </small>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.header-badge {\n  top: -2px !important;\n  position: absolute;\n  left: 18px !important;\n  padding-left: 6px;\n  padding-right: 6px; }\n\n.case-list ion-label h2 {\n  font-weight: 100; }\n\n.case-list ion-label.item-unread h2 {\n  font-weight: 500; }\n\n.case-list ion-label.item-unread p {\n  color: var(--ion-color-dark); }\n\n.case-list small {\n  opacity: 0.8 !important;\n  font-weight: 100 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9EOlxcV29ya1xcUGF1bFxcQ3VyYU1vYmlsZUF6dXJlXFxDdXJhY2FsbC1tb2JpbGUtYXBwL3NyY1xcYXBwXFx0YWIxXFx0YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBR00sZ0JBQWdCLEVBQUE7O0FBSHRCO0VBT1EsZ0JBQWdCLEVBQUE7O0FBUHhCO0VBV1EsNEJBQTRCLEVBQUE7O0FBWHBDO0VBZ0JJLHVCQUF1QjtFQUN2QiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5oZWFkZXItYmFkZ2V7XG4gIHRvcDogLTJweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE4cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcbn1cblxuLmNhc2UtbGlzdHtcbiAgaW9uLWxhYmVse1xuICAgIGgye1xuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICB9XG4gICAgJi5pdGVtLXVucmVhZHtcbiAgICAgIGgye1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAvLyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgfVxuICAgICAgcHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc21hbGx7XG4gICAgb3BhY2l0eTogMC44ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: MyFilterPipe, Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFilterPipe", function() { return MyFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_case_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/case.service */ "./src/app/services/case.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");








Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
    name: 'myfilter',
    pure: false
});
var MyFilterPipe = /** @class */ (function () {
    function MyFilterPipe() {
    }
    MyFilterPipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(function (item) { return item.call_type.indexOf(filter.call_type) !== -1; });
    };
    return MyFilterPipe;
}());

var Tab1Page = /** @class */ (function () {
    function Tab1Page(dataService, actionSheetController, userService, router, route, caseService) {
        this.dataService = dataService;
        this.actionSheetController = actionSheetController;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.caseService = caseService;
        this.type = _services_case_service__WEBPACK_IMPORTED_MODULE_4__["CaseType"].all;
        this.title = 'All Cases';
        this.searchText = '';
        this.userInfo = {};
        this.cases = [];
        this.isLoading = false;
        this.allCaseCount = 0;
        this.activeCaseCount = 0;
        this.silentCaseCount = 0;
        this.pendingCaseCount = 0;
        this.closedCaseCount = 0;
        this.totalActiveCases = 0;
    }
    Tab1Page.prototype.ngOnInit = function () {
        this.userInfo = this.userService.getUserInfo();
        if (this.router.url.indexOf('/pending') > -1) {
            this.title = 'Pending Cases';
            this.type = _services_case_service__WEBPACK_IMPORTED_MODULE_4__["CaseType"].pending;
        }
        if (this.router.url.indexOf('/closed') > -1) {
            this.title = 'Closed Cases';
            this.type = _services_case_service__WEBPACK_IMPORTED_MODULE_4__["CaseType"].closed;
        }
        if (this.router.url.indexOf('/silent') > -1) {
            this.title = 'Silent Cases';
            this.type = _services_case_service__WEBPACK_IMPORTED_MODULE_4__["CaseType"].silent;
        }
        if (this.router.url.indexOf('/active') > -1) {
            this.title = 'Active Cases';
            this.type = _services_case_service__WEBPACK_IMPORTED_MODULE_4__["CaseType"].active;
        }
        // this.getCases();
    };
    Tab1Page.prototype.ionViewWillEnter = function () {
        this.userInfo = this.userService.getUserInfo();
        this.isLoading = true;
        this.getCases();
        this.newMessage();
    };
    Tab1Page.prototype.ionViewDidEnter = function () {
        // const timeout = setTimeout(()=> {
        //   this.isLoading = false;
        //   this.cases = JSON.parse(localStorage.getItem("cases"));
        //   this.allCaseCount = this.cases.length;
        //   this.activeCaseCount = this.cases.filter(item => item.status === 'Active').length;
        //   this.pendingCaseCount = this.cases.filter(item => item.status === 'Pending').length;
        //   this.closedCaseCount = this.cases.filter(item => item.status === 'Closed').length;
        //   this.totalActiveCases = this.activeCaseCount + this.pendingCaseCount;
        // console.log(this.allCaseCount, this.activeCaseCount, this.pendingCaseCount, this.closedCaseCount, 'this.allCaseCount, this.activeCaseCount, this.pendingCaseCount, this.closedCaseCount');
        //   this.sortCases();
        // console.log("Looks like I'm about to leave :(");
        //   clearTimeout(timeout);
        // }, 200);
    };
    Tab1Page.prototype.newMessage = function () {
        this.dataService.changeMessage("2");
    };
    Tab1Page.prototype.getCases = function () {
        var _this = this;
        // Call our service function which returns an Observable
        this.results = this.caseService.getCases({ status: this.type, user_id: this.userInfo.id, search: this.searchText });
        this.results.subscribe(function (o) {
            _this.isLoading = false;
            _this.cases = o.data;
            _this.allCaseCount = o.allCaseCounter;
            _this.silentCaseCount = o.silentCounter;
            _this.activeCaseCount = o.activeCounter;
            _this.pendingCaseCount = o.pendingCounter;
            _this.closedCaseCount = o.closedCounter;
            _this.totalActiveCases = o.totalActiveCounter;
            // localStorage.setItem("cases", JSON.stringify(o));
            // console.log(o, '0');
        }, function () {
            _this.cases = [];
        });
    };
    // sortCases(cases: any) {
    //   // console.log(cases, 'cases');
    //   const unreadActive = cases.filter((item: any) => item.status === 'Active' && !item.read);
    //   const readActive = cases.filter((item: any) => item.status === 'Active' && item.read);
    //   const pendingForwarded = cases.filter((item: any) => item.status === 'Pending' && item.callStatus === 'Forwarded');
    //   const pendingAccepted = cases.filter((item: any) => item.status === 'Pending' && item.callStatus === 'Accepted');
    //   const closed = cases.filter((item: any) => item.status === 'Closed');
    //   this.cases = [...unreadActive, ...readActive, ...pendingForwarded, ...pendingAccepted, ...closed];
    //   // console.log(this.cases, 'caseasdfadsfs');
    //   // localStorage.setItem("cases", JSON.stringify(cases));
    // }
    Tab1Page.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Filter',
                            buttons: [{
                                    text: "All Cases (" + this.allCaseCount + ")",
                                    handler: function () {
                                        // console.log('All cases clicked');
                                        _this.router.navigate(['/tabs/tab1'], { replaceUrl: true });
                                    }
                                }, {
                                    text: "Active Cases (" + this.activeCaseCount + ")",
                                    handler: function () {
                                        // console.log('Active cases clicked');
                                        _this.router.navigate(['/tabs/tab1/case/active'], { replaceUrl: true });
                                    }
                                }, {
                                    text: "Pending Cases (" + this.pendingCaseCount + ")",
                                    handler: function () {
                                        // console.log('Pending clicked');
                                        _this.router.navigate(['/tabs/tab1/case/pending'], { replaceUrl: true });
                                    }
                                }, {
                                    text: "Closed Cases (" + this.closedCaseCount + ")",
                                    handler: function () {
                                        // console.log('Closed Cases clicked');
                                        _this.router.navigate(['/tabs/tab1/case/closed'], { replaceUrl: true });
                                    }
                                }, {
                                    text: "Silent Cases (" + this.silentCaseCount + ")",
                                    handler: function () {
                                        // console.log('Silent Cases clicked');
                                        _this.router.navigate(['/tabs/tab1/case/silent'], { replaceUrl: true });
                                    }
                                }, {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                        // console.log('Cancel clicked');
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
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_case_service__WEBPACK_IMPORTED_MODULE_4__["CaseService"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map