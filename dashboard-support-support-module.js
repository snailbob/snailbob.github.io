(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-support-support-module"],{

/***/ "./src/app/dashboard/support/support.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/support/support.module.ts ***!
  \*****************************************************/
/*! exports provided: SupportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageModule", function() { return SupportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support.page */ "./src/app/dashboard/support/support.page.ts");







var routes = [
    {
        path: '',
        component: _support_page__WEBPACK_IMPORTED_MODULE_6__["SupportPage"]
    }
];
var SupportPageModule = /** @class */ (function () {
    function SupportPageModule() {
    }
    SupportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_support_page__WEBPACK_IMPORTED_MODULE_6__["SupportPage"]]
        })
    ], SupportPageModule);
    return SupportPageModule;
}());



/***/ }),

/***/ "./src/app/dashboard/support/support.page.html":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/support/support.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      <img alt=\"logo\" height=\"40\" src=\"assets/logo.png\">\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-list-header color=\"medium\">\r\n      <ion-label>Support Ticket</ion-label>\r\n    </ion-list-header>\r\n    <ion-item routerLink=\"/tabs/tab0/dashboard/support/{{item.id}}/{{item.name}}\" *ngFor=\"let item of items; let i = index\">\r\n      <ion-note slot=\"start\">{{item.id}}</ion-note>\r\n      <ion-label text-wrap>\r\n        {{item.name}}\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/dashboard/support/support.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/support/support.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zdXBwb3J0L3N1cHBvcnQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/support/support.page.ts":
/*!***************************************************!*\
  !*** ./src/app/dashboard/support/support.page.ts ***!
  \***************************************************/
/*! exports provided: SupportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPage", function() { return SupportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");



var SupportPage = /** @class */ (function () {
    function SupportPage(userService) {
        this.userService = userService;
        this.items = [
            {
                name: 'Issue with a single Case',
                id: 1,
                fields: {
                    image: true,
                    description: 'Description of what may be incorrect'
                }
            },
            {
                name: 'Request for Call Recording',
                id: 2,
                fields: {
                    name: true,
                    tel: true,
                    date: true
                }
            },
            {
                name: 'Cannot Login to CRM',
                id: 3,
                fields: {
                    name: true,
                    tel: true,
                    date: true
                }
            },
            {
                name: 'Having Trouble posting OnCall Schedule',
                id: 4,
                fields: {
                    name: true,
                    image: true,
                    description: 'Error Message presented'
                }
            },
            {
                name: 'Morning Reports Not Received',
                id: 5,
                fields: {
                    name: true,
                    image: true,
                    description: 'When was the last date you received the morning report',
                    description2: 'What time should the morning reports be emailed'
                }
            },
            {
                name: 'Need to Add Staff to the Directory',
                id: 6,
                fields: {}
            },
            {
                name: 'Need Reach Instructions Changed',
                id: 7,
                fields: {}
            },
            {
                name: 'Client Needs New Report',
                id: 8,
                fields: {}
            },
            {
                name: 'Client Needs a Telephone Lookup to determine if a Caller Called',
                id: 9,
                fields: {}
            },
            {
                name: 'Other',
                id: 10,
                fields: {}
            },
        ];
    }
    SupportPage.prototype.ngOnInit = function () {
        this.userInfo = this.userService.getUserInfo();
    };
    SupportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-support',
            template: __webpack_require__(/*! ./support.page.html */ "./src/app/dashboard/support/support.page.html"),
            styles: [__webpack_require__(/*! ./support.page.scss */ "./src/app/dashboard/support/support.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], SupportPage);
    return SupportPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-support-support-module.js.map