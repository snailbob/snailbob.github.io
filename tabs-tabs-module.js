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

module.exports = "<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\" color=\"primary\" mode=\"md\">\r\n    <ion-tab-button tab=\"tab0\">\r\n      <ion-icon name=\"home\"></ion-icon>\r\n      <ion-label>Dashboard</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"tab1\">\r\n      <ion-icon name=\"briefcase\"></ion-icon>\r\n      <ion-label>Cases</ion-label>\r\n      <ion-badge *ngIf=\"caseCount.totalActiveCounter\" color=\"danger\">{{caseCount?.totalActiveCounter}}</ion-badge>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab2\">\r\n      <ion-icon name=\"chatbubbles\"></ion-icon>\r\n      <ion-label>Messages</ion-label>\r\n      <ion-badge *ngIf=\"caseCount.totalUnread\" color=\"danger\">{{caseCount?.totalUnread}}</ion-badge>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab3\">\r\n      <ion-icon name=\"person\"></ion-icon>\r\n      <ion-label>Contacts</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab4\">\r\n      <ion-icon name=\"settings\"></ion-icon>\r\n      <ion-label>Settings</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n"

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
/* harmony import */ var src_app_services_case_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/case.service */ "./src/app/services/case.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");








var TabsPage = /** @class */ (function () {
    function TabsPage(commonService, dataService, route, router, caseService, userService, messageService) {
        this.commonService = commonService;
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.caseService = caseService;
        this.userService = userService;
        this.messageService = messageService;
        this.caseCount = {
            totalActiveCounter: 0
        };
        this.messageCount = {
            totalUnread: 0
        };
    }
    TabsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.currentMessage.subscribe(function (message) { return _this.message = message; });
        this.userInfo = this.userService.getUserInfo();
        console.log('this.router :', this.router);
        if (this.userInfo && this.userInfo.id && this.router.url.includes('/tabs')) {
            this.getCaseCount();
            // this.getUnreadCount();
            var terval_1 = setInterval(function () {
                if (_this.userInfo && _this.userInfo.id && _this.router.url.includes('/tabs')) {
                    // this.getUnreadCount();
                    _this.getCaseCount();
                }
                else {
                    clearInterval(terval_1);
                }
            }, this.commonService.intervalTime);
        }
    };
    TabsPage.prototype.getCaseCount = function () {
        var _this = this;
        this.caseService.getCaseCount(this.userInfo.id)
            .subscribe(function (res) {
            _this.caseCount = res;
        });
    };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_services_case_service__WEBPACK_IMPORTED_MODULE_2__["CaseService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
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
                                path: 'support/:id/:name',
                                loadChildren: '../dashboard/support-form/support-form.module#SupportFormPageModule'
                            },
                            {
                                path: 'notifications',
                                loadChildren: '../dashboard/notifications/notifications.module#NotificationsPageModule'
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
                                loadChildren: '../tab1/tab1.module#Tab1PageModule'
                            },
                            {
                                path: 'closed',
                                loadChildren: '../tab1/tab1.module#Tab1PageModule'
                            },
                            {
                                path: 'pending',
                                loadChildren: '../tab1/tab1.module#Tab1PageModule'
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
                            { path: 'active', loadChildren: '../tab1/tab1.module#Tab1PageModule' },
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
                            { path: 'conversation/:id', loadChildren: '../messages/conversation/conversation.module#ConversationPageModule' },
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
        redirectTo: '/tabs/tab4/settings/notification',
        pathMatch: 'full'
    },
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