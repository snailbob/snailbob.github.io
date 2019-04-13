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
                return item[k].toString().toLowerCase().indexOf(filter.subType.toString().toLowerCase()) !== -1;
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

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"primary\" (click)=\"presentActionSheet()\">\r\n        <ion-icon slot=\"icon-only\" name=\"funnel\"></ion-icon>\r\n        <ion-badge color=\"danger\" class=\"header-badge\">{{totalActiveCases}}</ion-badge>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <img alt=\"logo\" height=\"40\" src=\"assets/logo.png\">\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-searchbar [(ngModel)]=\"searchText\" placeholder=\"Search case (eg. call type, telephone etc)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div padding class=\"ion-text-center\" *ngIf=\"isLoading\">\r\n    <ion-spinner></ion-spinner>\r\n  </div>\r\n\r\n  <div class=\"ion-padding-start\" *ngIf=\"!isLoading\">\r\n    <ion-text color=\"primary\">\r\n      <h4>All Cases</h4>\r\n    </ion-text>\r\n  </div>\r\n  <ion-list class=\"case-list\" *ngIf=\"!isLoading\">\r\n\r\n    <ion-item detail *ngFor=\"let case of cases | myfilter: {subType: searchText}; let i = index\" [routerLink]=\"case.callStatus === 'Forwarded' && case.lastAssignee === 'Paul Lieberman' ? '/tabs/tab1/case/details/'+i+'/forwarded/assign' : '/tabs/tab1/case/details/'+i+'/'+case.status.toLowerCase()\">\r\n      <ion-avatar slot=\"start\">\r\n        <img [src]=\"i%2 ? 'assets/case1.png' : 'assets/case2.png'\">\r\n      </ion-avatar>\r\n      <ion-label [ngClass]=\"{'item-unread': !case.read}\">\r\n        <h2>\r\n          <ion-icon [color]=\"case.statusColor\" name=\"radio-button-on\"></ion-icon>\r\n          {{case.from}}\r\n        </h2>\r\n        <p [innerHtml]=\"case.message\"></p>\r\n        <p *ngIf=\"case.status !== 'Active'\">\r\n          <ion-badge [color]=\"case.callStatusColor\">{{case.callStatus}}</ion-badge>\r\n          <ion-badge color=\"light\">{{case.lastAssignee}}</ion-badge>\r\n        </p>\r\n      </ion-label>\r\n      <small slot=\"end\" color=\"light\">\r\n        12:1{{i}}PM <br>\r\n        March 12, 2019 <br>\r\n        [#000{{i}}]\r\n      </small>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.header-badge {\n  top: -2px !important;\n  position: absolute;\n  left: 18px !important;\n  padding-left: 6px;\n  padding-right: 6px; }\n\n.case-list ion-label h2 {\n  font-weight: 100; }\n\n.case-list ion-label.item-unread h2 {\n  font-weight: 500; }\n\n.case-list ion-label.item-unread p {\n  color: var(--ion-color-dark); }\n\n.case-list small {\n  opacity: 0.8 !important;\n  font-weight: 100 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9EOlxcV29ya1xcUGF1bFxcQ3VyYS9zcmNcXGFwcFxcdGFiMVxcdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUdwQjtFQUdNLGdCQUFnQixFQUFBOztBQUh0QjtFQU9RLGdCQUFnQixFQUFBOztBQVB4QjtFQVdRLDRCQUE0QixFQUFBOztBQVhwQztFQWdCSSx1QkFBdUI7RUFDdkIsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaGVhZGVyLWJhZGdle1xuICB0b3A6IC0ycHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG59XG5cbi5jYXNlLWxpc3R7XG4gIGlvbi1sYWJlbHtcbiAgICBoMntcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgfVxuICAgICYuaXRlbS11bnJlYWR7XG4gICAgICBoMntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgLy8gY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIH1cbiAgICAgIHB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNtYWxse1xuICAgIG9wYWNpdHk6IDAuOCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"

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
        return items.filter(function (item) { return item.title.indexOf(filter.title) !== -1; });
    };
    return MyFilterPipe;
}());

var theCases = [
    {
        type: 'Office',
        subType: 'timesheet',
        callerId: '#0001',
        callerName: 'Michael Basalan',
        message: "Caller Information\n       <br> &nbsp; &nbsp; &nbsp; Caller Type: Caregiver\n        <br> &nbsp; &nbsp; &nbsp; First name: Michael Basalan\n       ",
        status: 'Active',
        statusColor: 'secondary',
        callStatus: 'Accepted',
        callStatusColor: 'light',
        lastAssignee: '',
        read: false,
        from: 'CuraCall Message'
    },
    {
        type: 'Building',
        subType: 'timestamp',
        callerId: '#0001',
        callerName: 'John Lennon',
        message: "Caller Information\n       <br> &nbsp; &nbsp; &nbsp; Caller Type: Patient\n        <br> &nbsp; &nbsp; &nbsp; First name: Michael Basalan\n       ",
        status: 'Active',
        statusColor: 'secondary',
        callStatus: 'Accepted',
        callStatusColor: 'light',
        lastAssignee: '',
        read: false,
        from: 'CuraCall Message'
    },
    {
        type: 'House',
        subType: 'window',
        callerId: '#0001',
        callerName: 'Vijay Kumar',
        message: "Caller Information\n       <br> &nbsp; &nbsp; &nbsp; Caller Type: Caregiver\n        <br> &nbsp; &nbsp; &nbsp; First name: Michael Basalan\n       ",
        status: 'Active',
        statusColor: 'secondary',
        callStatus: 'Accepted',
        callStatusColor: 'light',
        lastAssignee: '',
        read: false,
        from: 'CuraCall Message'
    },
    {
        type: 'Office',
        subType: 'timesheet',
        callerId: '#0001',
        callerName: 'Michael Basalan',
        message: "Caller Information\n       <br> &nbsp; &nbsp; &nbsp; Caller Type: Patient\n        <br> &nbsp; &nbsp; &nbsp; First name: Michael Basalan\n       ",
        status: 'Pending',
        statusColor: 'danger',
        callStatus: 'Accepted',
        callStatusColor: 'primary',
        lastAssignee: 'Paul Lieberman',
        read: true,
        from: 'CuraCall Message'
    },
    {
        type: 'Building',
        subType: 'timestamp',
        callerId: '#0001',
        callerName: 'John Lennon',
        message: "Caller Information\n       <br> &nbsp; &nbsp; &nbsp; Caller Type: Patient\n        <br> &nbsp; &nbsp; &nbsp; First name: Michael Basalan\n       ",
        status: 'Pending',
        statusColor: 'danger',
        callStatus: 'Forwarded',
        callStatusColor: 'warning',
        lastAssignee: 'Paul Lieberman',
        read: true,
        from: 'Prasanna'
    },
    {
        type: 'House',
        subType: 'window',
        callerId: '#0001',
        callerName: 'Vijay Kumar',
        message: "Caller Information\n       <br> &nbsp; &nbsp; &nbsp; Caller Type: Caregiver\n        <br> &nbsp; &nbsp; &nbsp; First name: Michael Basalan\n       ",
        status: 'Pending',
        statusColor: 'danger',
        callStatus: 'Accepted',
        callStatusColor: 'primary',
        lastAssignee: 'Paul Lieberman',
        read: true,
        from: 'CuraCall Message'
    },
    {
        type: 'Office',
        subType: 'timesheet',
        callerId: '#0001',
        callerName: 'Michael Basalan',
        message: "Caller Information\n       <br> &nbsp; &nbsp; &nbsp; Caller Type: Patient\n        <br> &nbsp; &nbsp; &nbsp; First name: Michael Basalan\n       ",
        status: 'Closed',
        statusColor: 'success',
        callStatus: 'Closed',
        callStatusColor: 'success',
        lastAssignee: 'Paul Lieberman',
        read: true,
        from: 'CuraCall Message'
    },
    {
        type: 'Building',
        subType: 'timestamp',
        callerId: '#0001',
        callerName: 'John Lennon',
        message: "Caller Information\n       <br> &nbsp; &nbsp; &nbsp; Caller Type: Caregiver\n        <br> &nbsp; &nbsp; &nbsp; First name: Michael Basalan\n       ",
        status: 'Closed',
        statusColor: 'success',
        callStatus: 'Closed',
        callStatusColor: 'success',
        lastAssignee: 'Paul Lieberman',
        read: true,
        from: 'CuraCall Message'
    },
    {
        type: 'House',
        subType: 'window',
        callerId: '#0001',
        callerName: 'Vijay Kumar',
        message: "Caller Information\n       <br> &nbsp; &nbsp; &nbsp; Caller Type: Caregiver\n        <br> &nbsp; &nbsp; &nbsp; First name: Michael Basalan\n       ",
        status: 'Closed',
        statusColor: 'success',
        callStatus: 'Closed',
        callStatusColor: 'success',
        lastAssignee: 'Paul Lieberman',
        read: true,
        from: 'CuraCall Message'
    },
];
var Tab1Page = /** @class */ (function () {
    function Tab1Page(actionSheetController, router, route) {
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.route = route;
        this.searchText = '';
        this.cases = [];
        this.isLoading = false;
        this.allCaseCount = 0;
        this.activeCaseCount = 0;
        this.pendingCaseCount = 0;
        this.closedCaseCount = 0;
        this.totalActiveCases = 0;
    }
    Tab1Page.prototype.ngOnInit = function () {
        localStorage.setItem("cases", JSON.stringify(theCases));
        console.log('wow');
    };
    Tab1Page.prototype.ionViewWillEnter = function () {
        this.isLoading = true;
    };
    Tab1Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        var timeout = setTimeout(function () {
            _this.isLoading = false;
            _this.cases = JSON.parse(localStorage.getItem("cases"));
            _this.allCaseCount = _this.cases.length;
            _this.activeCaseCount = _this.cases.filter(function (item) { return item.status === 'Active'; }).length;
            _this.pendingCaseCount = _this.cases.filter(function (item) { return item.status === 'Pending'; }).length;
            _this.closedCaseCount = _this.cases.filter(function (item) { return item.status === 'Closed'; }).length;
            _this.totalActiveCases = _this.activeCaseCount + _this.pendingCaseCount;
            console.log(_this.allCaseCount, _this.activeCaseCount, _this.pendingCaseCount, _this.closedCaseCount, 'this.allCaseCount, this.activeCaseCount, this.pendingCaseCount, this.closedCaseCount');
            _this.sortCases();
            // console.log("Looks like I'm about to leave :(");
            clearTimeout(timeout);
        }, 200);
    };
    Tab1Page.prototype.sortCases = function () {
        var unreadActive = this.cases.filter(function (item) { return item.status === 'Active' && !item.read; });
        var readActive = this.cases.filter(function (item) { return item.status === 'Active' && item.read; });
        var pendingForwarded = this.cases.filter(function (item) { return item.status === 'Pending' && item.callStatus === 'Forwarded'; });
        var pendingAccepted = this.cases.filter(function (item) { return item.status === 'Pending' && item.callStatus === 'Accepted'; });
        var closed = this.cases.filter(function (item) { return item.status === 'Closed'; });
        this.cases = unreadActive.concat(readActive, pendingForwarded, pendingAccepted, closed);
        localStorage.setItem("cases", JSON.stringify(this.cases));
    };
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
                                        console.log('All cases clicked');
                                        _this.router.navigate(['/tabs/tab1'], { replaceUrl: true });
                                    }
                                }, {
                                    text: "Active Cases (" + this.activeCaseCount + ")",
                                    handler: function () {
                                        console.log('Active cases clicked');
                                        _this.router.navigate(['/tabs/tab1/case/active'], { replaceUrl: true });
                                    }
                                }, {
                                    text: "Pending Cases (" + this.pendingCaseCount + ")",
                                    handler: function () {
                                        console.log('Pending clicked');
                                        _this.router.navigate(['/tabs/tab1/case/pending'], { replaceUrl: true });
                                    }
                                }, {
                                    text: "Closed Cases (" + this.closedCaseCount + ")",
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
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map