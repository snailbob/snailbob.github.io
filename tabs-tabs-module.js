(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.html":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\" color=\"primary\" mode=\"md\">\n    <ion-tab-button tab=\"tab0\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>Dashboard</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"briefcase\"></ion-icon>\n      <ion-label>Cases</ion-label>\n      <ion-badge color=\"danger\">6</ion-badge>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"chatbubbles\"></ion-icon>\n      <ion-label>Messages</ion-label>\n      <ion-badge color=\"danger\">3</ion-badge>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>Contacts</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab4\">\n      <ion-icon name=\"settings\"></ion-icon>\n      <ion-label>Settings</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabsPage = /** @class */ (function () {
    function TabsPage() {
    }
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        })
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




var routes = [{
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'tab0',
                children: [{
                        path: '',
                        loadChildren: '../tab0/tab0.module#Tab0PageModule'
                    },
                    {
                        path: 'dashboard',
                        children: [
                            {
                                path: 'support',
                                loadChildren: '../dashboard/support/support.module#SupportPageModule'
                            },
                            {
                                path: 'faq',
                                loadChildren: '../dashboard/faq/faq.module#FaqPageModule'
                            },
                        ],
                    }
                ]
            },
            {
                path: 'tab1',
                children: [{
                        path: '',
                        loadChildren: '../tab1/tab1.module#Tab1PageModule'
                    },
                    {
                        path: 'case',
                        children: [
                            {
                                path: 'silent',
                                loadChildren: '../cases/all/all.module#AllPageModule'
                            },
                            {
                                path: 'closed',
                                loadChildren: '../cases/closed/closed.module#ClosedPageModule'
                            },
                            {
                                path: 'pending',
                                loadChildren: '../cases/pending/pending.module#PendingPageModule'
                            },
                            {
                                path: 'details/:id',
                                loadChildren: '../cases/details/details.module#DetailsPageModule'
                            },
                            {
                                path: 'details/:id/:caseStatus',
                                loadChildren: '../cases/details/details.module#DetailsPageModule'
                            },
                            {
                                path: 'details/:id/:caseStatus/:toAssign',
                                loadChildren: '../cases/details/details.module#DetailsPageModule'
                            },
                            { path: 'active', loadChildren: '../cases/active/active.module#ActivePageModule' },
                            { path: 'remarks', loadChildren: '../cases/modal/remarks/remarks.module#RemarksPageModule' },
                        ]
                    }
                ]
            },
            {
                path: 'tab2',
                children: [{
                        path: '',
                        loadChildren: '../tab2/tab2.module#Tab2PageModule'
                    },
                    {
                        path: 'messages',
                        children: [
                            { path: 'conversation', loadChildren: '../messages/conversation/conversation.module#ConversationPageModule' },
                            { path: 'recent', loadChildren: '../messages/recent/recent.module#RecentPageModule' },
                        ]
                    }
                ]
            },
            {
                path: 'tab3',
                children: [{
                        path: '',
                        loadChildren: '../tab3/tab3.module#Tab3PageModule'
                    }]
            },
            {
                path: 'tab4',
                children: [{
                        path: '',
                        loadChildren: '../tab4/tab4.module#Tab4PageModule'
                    },
                    {
                        path: 'settings',
                        children: [{
                                path: 'security',
                                loadChildren: '../settings/security/security.module#SecurityPageModule'
                            },
                            {
                                path: 'profile',
                                loadChildren: '../settings/profile/profile.module#ProfilePageModule'
                            },
                            { path: 'notification', loadChildren: '../settings/notification/notification.module#NotificationPageModule' },
                        ]
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map