(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js":
/*!**********************************************************!*\
  !*** ./node_modules/time-ago-pipe/esm5/time-ago-pipe.js ***!
  \**********************************************************/
/*! exports provided: TimeAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeAgoPipe", function() { return TimeAgoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TimeAgoPipe = /** @class */ (function () {
    /**
     * @param {?} changeDetectorRef
     * @param {?} ngZone
     */
    function TimeAgoPipe(changeDetectorRef, ngZone) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    TimeAgoPipe.prototype.transform = function (value) {
        var _this = this;
        this.removeTimer();
        var /** @type {?} */ d = new Date(value);
        var /** @type {?} */ now = new Date();
        var /** @type {?} */ seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        var /** @type {?} */ timeToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) * 1000;
        this.timer = this.ngZone.runOutsideAngular(function () {
            if (typeof window !== 'undefined') {
                return window.setTimeout(function () {
                    _this.ngZone.run(function () { return _this.changeDetectorRef.markForCheck(); });
                }, timeToUpdate);
            }
            return null;
        });
        var /** @type {?} */ minutes = Math.round(Math.abs(seconds / 60));
        var /** @type {?} */ hours = Math.round(Math.abs(minutes / 60));
        var /** @type {?} */ days = Math.round(Math.abs(hours / 24));
        var /** @type {?} */ months = Math.round(Math.abs(days / 30.416));
        var /** @type {?} */ years = Math.round(Math.abs(days / 365));
        if (Number.isNaN(seconds)) {
            return '';
        }
        else if (seconds <= 45) {
            return 'a few seconds ago';
        }
        else if (seconds <= 90) {
            return 'a minute ago';
        }
        else if (minutes <= 45) {
            return minutes + ' minutes ago';
        }
        else if (minutes <= 90) {
            return 'an hour ago';
        }
        else if (hours <= 22) {
            return hours + ' hours ago';
        }
        else if (hours <= 36) {
            return 'a day ago';
        }
        else if (days <= 25) {
            return days + ' days ago';
        }
        else if (days <= 45) {
            return 'a month ago';
        }
        else if (days <= 345) {
            return months + ' months ago';
        }
        else if (days <= 545) {
            return 'a year ago';
        }
        else {
            // (days > 545)
            return years + ' years ago';
        }
    };
    /**
     * @return {?}
     */
    TimeAgoPipe.prototype.ngOnDestroy = function () {
        this.removeTimer();
    };
    /**
     * @return {?}
     */
    TimeAgoPipe.prototype.removeTimer = function () {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    };
    /**
     * @param {?} seconds
     * @return {?}
     */
    TimeAgoPipe.prototype.getSecondsUntilUpdate = function (seconds) {
        var /** @type {?} */ min = 60;
        var /** @type {?} */ hr = min * 60;
        var /** @type {?} */ day = hr * 24;
        if (seconds < min) {
            // less than 1 min, update every 2 secs
            return 2;
        }
        else if (seconds < hr) {
            // less than an hour, update every 30 secs
            return 30;
        }
        else if (seconds < day) {
            // less then a day, update every 5 mins
            return 300;
        }
        else {
            // update every hour
            return 3600;
        }
    };
    return TimeAgoPipe;
}());
TimeAgoPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'timeAgo',
                pure: false
            },] },
];
/** @nocollapse */
TimeAgoPipe.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=time-ago-pipe.js.map


/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");








var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"], time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__["TimeAgoPipe"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"primary\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"primary\" routerLink=\"/tabs/tab2/messages/recent\">\r\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\r\n      </ion-button>\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <img alt=\"logo\" height=\"40\" src=\"assets/logo.png\">\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div padding class=\"ion-text-center\" *ngIf=\"isLoading\">\r\n    <ion-spinner></ion-spinner>\r\n  </div>\r\n\r\n  <ion-list *ngIf=\"!isLoading\">\r\n    <ion-list-header>\r\n      <ion-label>Recent Conversation</ion-label>\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let message of messages; let i = index\" routerLink=\"/tabs/tab2/messages/conversation/{{message.id}}\">\r\n      <ion-avatar slot=\"start\" [ngClass]=\"{'avatar-multiple' : message.contacts.length > 3, 'avatar-two' : message.contacts.length === 2, 'avatar-three' : message.contacts.length === 3}\">\r\n        <img *ngFor=\"let contact of message.contacts | slice:0:4\" [src]=\"contact.avatar\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        {{message.contact_name}}\r\n        <ion-text [color]=\"message.unreadText\">\r\n          <h5>{{message.last_convo ? message.last_convo.message : '...'}}</h5>\r\n        </ion-text>\r\n        <p>{{message.updated_at.date | timeAgo}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n  <div padding class=\"ion-text-center\" *ngIf=\"!isLoading && !messages.length\">\r\n    Empty\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatar-multiple > img {\n  max-width: 50%;\n  max-height: 50%; }\n\n.avatar-three {\n  position: relative; }\n\n.avatar-three > img {\n    max-width: 50%;\n    max-height: 50%; }\n\n.avatar-three > img:nth-child(3) {\n      position: relative;\n      left: 25%; }\n\n.avatar-two {\n  position: relative; }\n\n.avatar-two > img {\n    max-width: 70%;\n    max-height: 70%; }\n\n.avatar-two > img:nth-child(2) {\n      position: absolute;\n      top: 20px;\n      right: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9EOlxcV29ya1xcUGF1bFxcQ3VyYU1vYmlsZUF6dXJlXFxDdXJhY2FsbC1tb2JpbGUtYXBwL3NyY1xcYXBwXFx0YWIyXFx0YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR3ZCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRHRCO0lBR1EsY0FBYztJQUNkLGVBQWUsRUFBQTs7QUFKdkI7TUFNWSxrQkFBa0I7TUFDbEIsU0FBUyxFQUFBOztBQUlyQjtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUdRLGNBQWM7SUFDZCxlQUFlLEVBQUE7O0FBSnZCO01BTVksa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhci1tdWx0aXBsZXtcbiAgICA+aW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwJTtcbiAgICB9XG59XG4uYXZhdGFyLXRocmVle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICA+aW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwJTtcbiAgICAgICAgJjpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbGVmdDogMjUlO1xuICAgICAgICB9XG4gICAgfVxufVxuLmF2YXRhci10d297XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgID5pbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICAgICAgbWF4LWhlaWdodDogNzAlO1xuICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");





var Tab2Page = /** @class */ (function () {
    function Tab2Page(actionSheetController, router, route, messageService) {
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.route = route;
        this.messageService = messageService;
        this.messages = [];
        this.isLoading = false;
    }
    Tab2Page.prototype.ngOnInit = function () { };
    Tab2Page.prototype.ionViewWillEnter = function () {
        this.isLoading = true;
        this.getMessages();
    };
    Tab2Page.prototype.getMessages = function () {
        var _this = this;
        this.results = this.messageService.getMessages();
        this.results.subscribe(function (o) {
            _this.isLoading = false;
            _this.messages = o.rooms;
            localStorage.setItem("cases", JSON.stringify(o));
            console.log(o, '0');
        });
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map