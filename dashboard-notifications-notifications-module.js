(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-notifications-notifications-module"],{

/***/ "./src/app/dashboard/notifications/notifications.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/notifications/notifications.module.ts ***!
  \*****************************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.page */ "./src/app/dashboard/notifications/notifications.page.ts");







var routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]
    }
];
var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());



/***/ }),

/***/ "./src/app/dashboard/notifications/notifications.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/notifications/notifications.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <img alt=\"logo\" height=\"40\" src=\"assets/logo.png\">\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- List of Sliding Items -->\n  <ion-list class=\"case-list\" *ngIf=\"!isLoading\">\n    <ion-list-header>\n      <ion-label>Notifications</ion-label>\n    </ion-list-header>\n    <ion-item-sliding *ngFor=\"let noti of notifications\">\n      <ion-item (click)=\"viewNoti(noti)\">\n        <ion-avatar slot=\"start\">\n          <img src=\"{{url}}/storage/uploads/users/{{noti.data.from_image}}\">\n        </ion-avatar>\n        <ion-label [ngClass]=\"{'item-unread': !noti.read_at}\">\n          <h2>\n            {{noti.data.message}}\n          </h2>\n          <p>\n            <span *ngIf=\"noti.type == 'App\\Notifications\\CaseNotification'\">Message</span>\n            <span *ngIf=\"noti.type != 'App\\Notifications\\CaseNotification'\">Case</span>\n            &middot; {{noti.created_at}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"readNoti(noti)\">Read</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <div padding class=\"ion-text-center\" *ngIf=\"isLoading\">\n      <ion-spinner></ion-spinner>\n    </div>\n  \n</ion-content>"

/***/ }),

/***/ "./src/app/dashboard/notifications/notifications.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/notifications/notifications.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".case-list ion-label h2 {\n  font-weight: 100; }\n\n.case-list ion-label.item-unread h2 {\n  font-weight: 500; }\n\n.case-list ion-label.item-unread p {\n  color: var(--ion-color-dark); }\n\n.case-list small {\n  opacity: 0.8 !important;\n  font-weight: 100 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL25vdGlmaWNhdGlvbnMvRDpcXFdvcmtcXFBhdWxcXEN1cmFNb2JpbGVBenVyZVxcQ3VyYWNhbGwtbW9iaWxlLWFwcC9zcmNcXGFwcFxcZGFzaGJvYXJkXFxub3RpZmljYXRpb25zXFxub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUdRLGdCQUFnQixFQUFBOztBQUh4QjtFQU9VLGdCQUFnQixFQUFBOztBQVAxQjtFQVdVLDRCQUE0QixFQUFBOztBQVh0QztFQWdCTSx1QkFBdUI7RUFDdkIsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNhc2UtbGlzdHtcbiAgICBpb24tbGFiZWx7XG4gICAgICBoMntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgIH1cbiAgICAgICYuaXRlbS11bnJlYWR7XG4gICAgICAgIGgye1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgLy8gY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgc21hbGx7XG4gICAgICBvcGFjaXR5OiAwLjggIWltcG9ydGFudDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/notifications/notifications.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/notifications/notifications.page.ts ***!
  \***************************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(toastController, route, router, plt, commonService, userService, popoverController, alertController) {
        this.toastController = toastController;
        this.route = route;
        this.router = router;
        this.plt = plt;
        this.commonService = commonService;
        this.userService = userService;
        this.popoverController = popoverController;
        this.alertController = alertController;
        this.isLoading = false;
        this.notifications = [];
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
    }
    NotificationsPage.prototype.ngOnInit = function () {
        this.userInfo = this.userService.getUserInfo();
    };
    NotificationsPage.prototype.ionViewWillEnter = function () {
        this.getNotifications();
    };
    NotificationsPage.prototype.readNoti = function (item) {
        item.read_at = 'yes';
        this.commonService.presentToastWithOptions('Notification marked as read.');
    };
    NotificationsPage.prototype.viewNoti = function (item) {
        if (item.case_id) {
            this.router.navigate(["/tabs/tab1/case/details/" + item.case_id + "/active"]);
        }
        else {
            this.router.navigate(["/tabs/tab2/messages/conversation/" + item.room_id]);
        }
    };
    NotificationsPage.prototype.getNotifications = function () {
        var _this = this;
        this.isLoading = true;
        this.commonService.getNotifications({ id: this.userInfo.id })
            .subscribe(function (data) {
            _this.isLoading = false;
            console.log(data, 'ddd');
            _this.notifications = data;
        });
    };
    NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.page.html */ "./src/app/dashboard/notifications/notifications.page.html"),
            styles: [__webpack_require__(/*! ./notifications.page.scss */ "./src/app/dashboard/notifications/notifications.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], NotificationsPage);
    return NotificationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-notifications-notifications-module.js.map