(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab0-tab0-module"],{

/***/ "./src/app/services/dashboard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/dashboard.service.ts ***!
  \***********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");






var DashboardService = /** @class */ (function () {
    function DashboardService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    DashboardService.prototype.userId = function () {
        this.userService.getUserId();
    };
    DashboardService.prototype.userInfo = function () {
        return this.userService.getUserInfo();
    };
    DashboardService.prototype.getDashboardInfo = function (params) {
        var _this = this;
        return this.http.post(this.url + "/report/average", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.userService.log('fetched DashboardInfo'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.userService.handleError('DashboardInfo', [])));
    };
    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

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

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      <img alt=\"logo\" height=\"40\" src=\"assets/logo.png\">\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"cura-dashboard\">\r\n  <div class=\"ion-padding-start\">\r\n    <ion-text color=\"primary\">\r\n      <h4>Dashboard</h4>\r\n    </ion-text>\r\n  </div>\r\n\r\n  <ion-card>\r\n    <ion-list>\r\n      <ion-list-header>\r\n        <ion-label>Date range filter</ion-label>\r\n      </ion-list-header>\r\n      <ion-item lines=\"none\">\r\n        <ion-label>Start Date</ion-label>\r\n        <ion-datetime display-format=\"MM/DD/YYYY\" [(ngModel)]=\"filter.from\" [max]=\"filter.to\" (ionChange)=\"getDashboardInfo()\" picker-format=\"MMMM DD YYYY\"></ion-datetime>\r\n      </ion-item>\r\n      <ion-item lines=\"none\">\r\n        <ion-label>End Date</ion-label>\r\n        <ion-datetime display-format=\"MM/DD/YYYY\" [(ngModel)]=\"filter.to\" [min]=\"filter.from\" (ionChange)=\"getDashboardInfo()\" picker-format=\"MMMM DD YYYY\"></ion-datetime>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-card>\r\n  <div padding class=\"ion-text-center\" *ngIf=\"isLoading\">\r\n    <ion-spinner></ion-spinner>\r\n  </div>\r\n\r\n  <div *ngIf=\"!isLoading\">\r\n\r\n    <ion-card color=\"primary\">\r\n      <ion-card-header class=\"number-header\">\r\n        <ion-card-title class=\"numbers-lg\">\r\n          <ion-badge color=\"dark\">{{dashData.closed}}</ion-badge>\r\n        </ion-card-title>\r\n        <ion-card-subtitle>Completed Closed Case &middot; {{filter.from | date: 'MMM d, y'}}-{{filter.to | date: 'MMM d, y'}}</ion-card-subtitle>\r\n      </ion-card-header>\r\n    </ion-card>\r\n  \r\n    <ion-card color=\"danger\">\r\n      <ion-card-header class=\"number-header\">\r\n        <ion-card-title class=\"numbers-lg\">\r\n          <ion-badge color=\"dark\">{{dashData.accepted}}</ion-badge>\r\n        </ion-card-title>\r\n        <ion-card-subtitle>Case Average Time Accepted &middot; {{filter.from | date: 'MMM d, y'}}-{{filter.to | date: 'MMM d, y'}}</ion-card-subtitle>\r\n      </ion-card-header>\r\n    </ion-card>\r\n  \r\n    <ion-card color=\"success\">\r\n      <ion-card-header class=\"number-header\">\r\n        <ion-card-title class=\"numbers-lg\">\r\n          <ion-badge color=\"dark\">{{dashData.read}}</ion-badge>\r\n        </ion-card-title>\r\n        <ion-card-subtitle>Case Average Time To Close &middot; {{filter.from | date: 'MMM d, y'}}-{{filter.to | date: 'MMM d, y'}}</ion-card-subtitle>\r\n      </ion-card-header>\r\n    </ion-card>\r\n  </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/tab0/tab0.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab0/tab0.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cura-dashboard .number-header {\n  text-align: center; }\n  .cura-dashboard .number-header .numbers-lg {\n    text-align: center; }\n  .cura-dashboard .number-header .numbers-lg ion-badge {\n      opacity: 0.8;\n      width: 100%;\n      font-weight: bold;\n      font-size: 75px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMC9EOlxcV29ya1xcUGF1bFxcQ3VyYU1vYmlsZUF6dXJlXFxDdXJhY2FsbC1tb2JpbGUtYXBwL3NyY1xcYXBwXFx0YWIwXFx0YWIwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGtCQUFrQixFQUFBO0VBRjFCO0lBV1ksa0JBQWtCLEVBQUE7RUFYOUI7TUFNZ0IsWUFBWTtNQUNaLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMC90YWIwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXJhLWRhc2hib2FyZHtcbiAgICAubnVtYmVyLWhlYWRlcntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIC5udW1iZXJzLWxnIHtcbiAgICAgICAgICAgIGlvbi1iYWRnZXtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA3NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

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
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dashboard.service */ "./src/app/services/dashboard.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var Tab0Page = /** @class */ (function () {
    function Tab0Page(dashboardService, datepipe, commonService) {
        this.dashboardService = dashboardService;
        this.datepipe = datepipe;
        this.commonService = commonService;
        this.filter = {
            from: '',
            to: '',
            user_id: 0
        };
        this.dashData = {
            read: '',
            accepted: '',
            closed: '',
        };
        this.isLoading = false;
        this.userInfo = {};
    }
    Tab0Page.prototype.ngOnInit = function () {
        this.userInfo = this.dashboardService.userInfo();
        var date = new Date(), y = date.getFullYear(), m = date.getMonth();
        var firstDay = new Date(y, m, 1);
        var lastDay = new Date(y, m + 1, 0);
        this.filter.from = this.datepipe.transform(firstDay, 'yyyy-MM-dd');
        this.filter.to = this.datepipe.transform(lastDay, 'yyyy-MM-dd');
        this.filter.user_id = this.userInfo.id;
    };
    Tab0Page.prototype.ionViewWillEnter = function () {
        this.getDashboardInfo();
    };
    Tab0Page.prototype.getDashboardInfo = function () {
        var _this = this;
        this.isLoading = true;
        this.dashboardService.getDashboardInfo(this.filter)
            .subscribe(function (res) {
            _this.isLoading = false;
            _this.dashData = res;
            console.log(res, _this.dashData, 'res');
        });
    };
    Tab0Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab0',
            template: __webpack_require__(/*! ./tab0.page.html */ "./src/app/tab0/tab0.page.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
            styles: [__webpack_require__(/*! ./tab0.page.scss */ "./src/app/tab0/tab0.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], Tab0Page);
    return Tab0Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab0-tab0-module.js.map