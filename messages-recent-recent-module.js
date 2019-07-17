(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-recent-recent-module"],{

/***/ "./src/app/messages/recent/recent.module.ts":
/*!**************************************************!*\
  !*** ./src/app/messages/recent/recent.module.ts ***!
  \**************************************************/
/*! exports provided: RecentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentPageModule", function() { return RecentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recent.page */ "./src/app/messages/recent/recent.page.ts");







var routes = [
    {
        path: '',
        component: _recent_page__WEBPACK_IMPORTED_MODULE_6__["RecentPage"]
    }
];
var RecentPageModule = /** @class */ (function () {
    function RecentPageModule() {
    }
    RecentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_recent_page__WEBPACK_IMPORTED_MODULE_6__["RecentPage"]]
        })
    ], RecentPageModule);
    return RecentPageModule;
}());



/***/ }),

/***/ "./src/app/messages/recent/recent.page.html":
/*!**************************************************!*\
  !*** ./src/app/messages/recent/recent.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <img alt=\"logo\" height=\"40\" src=\"assets/logo.png\">\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" *ngIf=\"selectedCount\">\r\n      <ion-button color=\"primary\" (click)=\"initiateMessage()\">\r\n        <ion-icon name=\"paper-plane\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar>\r\n    <ion-searchbar [(ngModel)]=\"searchText\" (ngModelChange)=\"searchContacts()\" placeholder=\"Search contact\"></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-list *ngIf=\"!searchText\">\r\n    <ion-list-header>\r\n      <ion-label>Recent</ion-label>\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let contact of recentContacts\" routerLink=\"/tabs/tab2/messages/conversation/{{contact.room_id}}\">\r\n      <ion-avatar slot=\"start\">\r\n        <img [src]=\"contact.avatar\">\r\n      </ion-avatar>\r\n      <ion-label>{{contact.full_name}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list *ngIf=\"contacts.length && !isLoading\">\r\n    <ion-list-header>\r\n      <ion-label>Contacts</ion-label>\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let contact of contacts\">\r\n      <ion-avatar slot=\"start\">\r\n        <img [src]=\"contact.avatar\">\r\n      </ion-avatar>\r\n      <ion-label>{{contact.full_name}}</ion-label>\r\n      <ion-checkbox slot=\"end\" (ngModelChange)=\"onSelect(contact)\" [(ngModel)]=\"contact.isChecked\"></ion-checkbox>\r\n    </ion-item>\r\n  </ion-list>\r\n  <div padding class=\"ion-text-center\" *ngIf=\"isLoading\">\r\n    <ion-spinner></ion-spinner>\r\n  </div>\r\n  <p padding class=\"ion-text-center\" *ngIf=\"!isLoading && !contacts.length\">\r\n    no contacts\r\n  </p>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/messages/recent/recent.page.scss":
/*!**************************************************!*\
  !*** ./src/app/messages/recent/recent.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL3JlY2VudC9yZWNlbnQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/messages/recent/recent.page.ts":
/*!************************************************!*\
  !*** ./src/app/messages/recent/recent.page.ts ***!
  \************************************************/
/*! exports provided: RecentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentPage", function() { return RecentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");










var RecentPage = /** @class */ (function () {
    function RecentPage(router, route, userService, actionSheetController, alertController, commonService, toastController, messageService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.commonService = commonService;
        this.toastController = toastController;
        this.messageService = messageService;
        this.recentContacts = [];
        this.contacts = [];
        this.userInfo = {};
        this.selectedCount = 0;
        this.searchText = '';
        this.isLoading = false;
        this.modelChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.modelChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])())
            .subscribe(function (model) { return _this.searchText = model; });
    }
    RecentPage.prototype.ngOnInit = function () {
        this.getRecentContacts();
        this.searchContacts();
        this.userInfo = this.userService.getUserInfo();
    };
    RecentPage.prototype.getRecentContacts = function () {
        var _this = this;
        this.messageService.getRecentContacts({})
            .subscribe(function (res) {
            console.log(res);
            _this.recentContacts = res.contacts;
        });
    };
    RecentPage.prototype.onSelect = function (contact) {
        this.selectedCount = !contact.isChecked ? this.selectedCount + 1 : this.selectedCount - 1;
        console.log(contact);
    };
    RecentPage.prototype.initiateMessage = function () {
        var _this = this;
        var selected = this.contacts.filter(function (item) { return item.isChecked; });
        if (selected.length === 1) {
            this.router.navigate(["/tabs/tab2/messages/conversation/" + selected[0].room_id]);
        }
        else {
            this.commonService.presentLoading();
            var roomName_1 = this.userInfo.id + '-';
            selected.map(function (item, index) {
                roomName_1 += ((index + 1 === selected.length)) ? item.id : item.id + '-';
            });
            var param = {
                name: roomName_1,
                participants_no: selected.length,
                status: 'active',
                user_id: this.userInfo.id
            };
            this.messageService.createRoom(param)
                .subscribe(function (room) {
                _this.commonService.loadingBox.dismiss();
                _this.router.navigate(["/tabs/tab2/messages/conversation/" + room.id]);
            });
            console.log(roomName_1);
        }
    };
    RecentPage.prototype.searchContacts = function () {
        var _this = this;
        this.isLoading = true;
        this.selectedCount = 0;
        console.log(this.searchText);
        this.userService.getUsers({ searchText: this.searchText })
            .subscribe(function (res) {
            _this.isLoading = false;
            console.log(res);
            _this.contacts = res;
        });
    };
    RecentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recent',
            template: __webpack_require__(/*! ./recent.page.html */ "./src/app/messages/recent/recent.page.html"),
            styles: [__webpack_require__(/*! ./recent.page.scss */ "./src/app/messages/recent/recent.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], RecentPage);
    return RecentPage;
}());



/***/ })

}]);
//# sourceMappingURL=messages-recent-recent-module.js.map