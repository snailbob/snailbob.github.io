(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cases-details-details-module"],{

/***/ "./src/app/cases/details/details.module.ts":
/*!*************************************************!*\
  !*** ./src/app/cases/details/details.module.ts ***!
  \*************************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./details.page */ "./src/app/cases/details/details.page.ts");








var routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_7__["DetailsPage"]
    }
];
var DetailsPageModule = /** @class */ (function () {
    function DetailsPageModule() {
    }
    DetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ionic_selectable__WEBPACK_IMPORTED_MODULE_6__["IonicSelectableModule"]
            ],
            declarations: [_details_page__WEBPACK_IMPORTED_MODULE_7__["DetailsPage"]]
        })
    ], DetailsPageModule);
    return DetailsPageModule;
}());



/***/ }),

/***/ "./src/app/cases/details/details.page.html":
/*!*************************************************!*\
  !*** ./src/app/cases/details/details.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"primary\" *ngIf=\"caseStatus === 'pending' || isAccepted && !isClosed\"\r\n        (click)=\"presentActionSheet()\">\r\n        <ion-icon name=\"chatbubbles\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button color=\"primary\" *ngIf=\"caseStatus === 'active' && !isAccepted\" (click)=\"acceptCase()\">\r\n        <ion-icon name=\"add-circle\"></ion-icon> Accept\r\n      </ion-button>\r\n\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <img alt=\"logo\" height=\"40\" src=\"assets/logo.png\">\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar *ngIf=\"!isCaseActioned && isToAssignAction && !action.show\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button color=\"primary\" fill=\"solid\"\r\n        (click)=\"presentAssignConfirm('Are sure you want to assign this case to your self?', true)\">\r\n        <ion-icon name=\"person\"></ion-icon> Assign to me\r\n      </ion-button>\r\n\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"warning\" fill=\"solid\" (click)=\"declineAction()\">\r\n        <ion-icon name=\"close-circle\"></ion-icon> Decline\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar *ngIf=\"action.show\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button color=\"primary\" fill=\"solid\" (click)=\"doAction()\" [disabled]=\"!action.note\">\r\n        {{action.btnText}}\r\n      </ion-button>\r\n\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"warning\" fill=\"solid\" (click)=\"cancelAction()\">\r\n        Cancel\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar *ngIf=\"action.show\">\r\n    <textarea name=\"remarks\" class=\"input-textarea\" [(ngModel)]=\"action.note\"\r\n      [placeholder]=\"action.type === 'note' ? 'Add your note here..' : 'Add your remarks here..'\" rows=\"5\"></textarea>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar *ngIf=\"action.show && action.type === 'forward'\">\r\n    <ion-item class=\"input-bordered\" lines=\"none\">\r\n      <ion-label>Forward to</ion-label>\r\n      <ionic-selectable [(ngModel)]=\"contact\" [items]=\"contacts\" itemValueField=\"id\" itemTextField=\"name\"\r\n        [canSearch]=\"true\" [isMultiple]=\"true\" (onChange)=\"contactChange($event)\">\r\n      </ionic-selectable>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-list-header color=\"medium\">\r\n      <ion-label>Caller Information</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>First name</ion-label>\r\n      <ion-note slot=\"end\">Michael</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Last name</ion-label>\r\n      <ion-note slot=\"end\">Basalan</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Caller type</ion-label>\r\n      <ion-note slot=\"end\">caregiver</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Type of caregiver</ion-label>\r\n      <ion-note slot=\"end\">caregiver</ion-note>\r\n    </ion-item>\r\n    <ion-item href=\"tel:2342342343442\">\r\n      <ion-label>Caller telephone</ion-label>\r\n      <ion-note slot=\"end\">2342342343442</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Is hospital related</ion-label>\r\n      <ion-note slot=\"end\">No</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Caregiver clock in code</ion-label>\r\n      <ion-note slot=\"end\">123213</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-list-header color=\"medium\">\r\n      <ion-label>Call Information</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Call type </ion-label>\r\n      <ion-note slot=\"end\">Office; timesheet</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Timesheet concern</ion-label>\r\n      <ion-note slot=\"end\">verifying timesheet</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-list-header color=\"medium\">\r\n      <ion-label>Caregiver Information</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Type of caregiver</ion-label>\r\n      <ion-note slot=\"end\">home health aide</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>First name</ion-label>\r\n      <ion-note slot=\"end\">Michael</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Last name</ion-label>\r\n      <ion-note slot=\"end\">Basalan</ion-note>\r\n    </ion-item>\r\n    <ion-item href=\"tel:2342342343442\">\r\n      <ion-label>Telephone number</ion-label>\r\n      <ion-note slot=\"end\">2342342343442</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Povide start time of shift</ion-label>\r\n      <ion-note slot=\"end\">No</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Povide end time of shift</ion-label>\r\n      <ion-note slot=\"end\">123213</ion-note>\r\n    </ion-item>\r\n\r\n\r\n    <ion-list-header color=\"medium\">\r\n      <ion-label>Other information</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Call reason</ion-label>\r\n      <ion-note slot=\"end\">test</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Call language</ion-label>\r\n      <ion-note slot=\"end\">no</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Number of calls</ion-label>\r\n      <ion-note slot=\"end\">1st time</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-list-header color=\"medium\">\r\n      <ion-label>Case Created</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Created case date</ion-label>\r\n      <ion-note slot=\"end\">12/12/2018</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Created case time</ion-label>\r\n      <ion-note slot=\"end\">10:10PM</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-list-header color=\"medium\">\r\n      <ion-label>Case Read</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Read case date</ion-label>\r\n      <ion-note slot=\"end\">12/12/2018</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Read case time</ion-label>\r\n      <ion-note slot=\"end\">10:10PM</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-list-header color=\"medium\" *ngIf=\"isForwarded\">\r\n      <ion-label>Forward Details</ion-label>\r\n    </ion-list-header>\r\n    <ion-item *ngIf=\"isForwarded\">\r\n      <ion-label>Message</ion-label>\r\n      <ion-note slot=\"end\">{{messages.forwardMessage }}</ion-note>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"isForwarded\">\r\n      <ion-label>Forwarded to</ion-label>\r\n      <ion-note slot=\"end\">{{ messages.forwardedTo}}</ion-note>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"isForwarded\">\r\n      <ion-label>Forwarded date</ion-label>\r\n      <ion-note slot=\"end\">{{messages.forwardDate | date }}</ion-note>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"isForwarded\">\r\n      <ion-label>Forwarded time</ion-label>\r\n      <ion-note slot=\"end\">{{messages.forwardDate | date: 'shortTime' }}</ion-note>\r\n    </ion-item>\r\n    \r\n    <ion-list-header color=\"medium\" *ngIf=\"isAccepted\">\r\n      <ion-label>Accepted Details</ion-label>\r\n    </ion-list-header>\r\n    <ion-item *ngIf=\"isAccepted\">\r\n      <ion-label>Accepted date</ion-label>\r\n      <ion-note slot=\"end\">{{messages.forwardDate | date }}</ion-note>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"isAccepted\">\r\n      <ion-label>Accepted time</ion-label>\r\n      <ion-note slot=\"end\">{{messages.forwardDate | date: 'shortTime' }}</ion-note>\r\n    </ion-item>\r\n    \r\n\r\n    <!-- <ion-list-header color=\"medium\">\r\n      <ion-label>Case Sent</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Sent case date</ion-label>\r\n      <ion-note slot=\"end\">12/12/2018</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Sent case time</ion-label>\r\n      <ion-note slot=\"end\">10:10PM</ion-note>\r\n    </ion-item> -->\r\n\r\n    <ion-list-header color=\"medium\" *ngIf=\"isCaseActioned\">\r\n      <ion-label>Case forward status</ion-label>\r\n    </ion-list-header>\r\n    <ion-item *ngIf=\"isCaseActioned\">\r\n      <ion-label>Forwarded to</ion-label>\r\n      <ion-note slot=\"end\">Paul Lieberman</ion-note>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"isCaseActioned\">\r\n      <ion-label>Respond</ion-label>\r\n      <ion-note slot=\"end\">{{isAssign ? 'Assigned' : 'Declined'}}</ion-note>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"isCaseActioned\">\r\n      <ion-label>Respond Date/Time</ion-label>\r\n      <ion-note slot=\"end\">12/12/2018 10:10PM</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-list-header color=\"medium\" *ngIf=\"isClosed\">\r\n      <ion-label>Closed Details</ion-label>\r\n    </ion-list-header>\r\n    <ion-item *ngIf=\"isClosed\">\r\n      <ion-label>Message</ion-label>\r\n      <ion-note slot=\"end\">{{messages.closeMessage }}</ion-note>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"isClosed\">\r\n      <ion-label>Closed by</ion-label>\r\n      <ion-note slot=\"end\">Paul Lieberman</ion-note>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"isClosed\">\r\n      <ion-label>Closed Date/Time</ion-label>\r\n      <ion-note slot=\"end\">12/12/2018 10:10PM</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-list-header color=\"medium\" *ngIf=\"declineNote\">\r\n      <ion-label>Decline Details</ion-label>\r\n    </ion-list-header>\r\n    <ion-item *ngIf=\"declineNote\">\r\n      <ion-label>Message</ion-label>\r\n      <ion-note slot=\"end\">{{declineNote}}</ion-note>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"declineNote\">\r\n      <ion-label>Declined by</ion-label>\r\n      <ion-note slot=\"end\">Paul Lieberman</ion-note>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"declineNote\">\r\n      <ion-label>Decline Date/Time</ion-label>\r\n      <ion-note slot=\"end\">12/12/2018 10:10PM</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-list-header color=\"medium\" *ngIf=\"messages.notes.length\">\r\n      <ion-label>Case Notes</ion-label>\r\n    </ion-list-header>\r\n  </ion-list>\r\n\r\n  <ion-card *ngFor=\"let note of messages.notes\">\r\n    <ion-list lines=\"none\">\r\n      <ion-item>\r\n        <ion-label>Note</ion-label>\r\n        <ion-note slot=\"end\">{{note.message}}</ion-note>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Date Added</ion-label>\r\n        <ion-note slot=\"end\">{{note.date | date: 'MMM d, y, h:mm a' }}</ion-note>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Added by</ion-label>\r\n        <ion-note slot=\"end\">Paul Lieberman</ion-note>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/cases/details/details.page.scss":
/*!*************************************************!*\
  !*** ./src/app/cases/details/details.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhc2VzL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/cases/details/details.page.ts":
/*!***********************************************!*\
  !*** ./src/app/cases/details/details.page.ts ***!
  \***********************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var Port = /** @class */ (function () {
    function Port() {
    }
    return Port;
}());
var DetailsPage = /** @class */ (function () {
    function DetailsPage(route, router, actionSheetController, alertController, toastController) {
        this.route = route;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.isClosed = false;
        this.isAssign = false;
        this.isCaseActioned = false;
        this.isToAssignAction = false;
        this.declineNote = '';
        this.caseStatus = '';
        this.messages = {
            closeDate: new Date(),
            forwardDate: new Date(),
            closeMessage: '',
            forwardMesssage: '',
            forwardedTo: '',
            notes: [],
        };
        this.isForwarded = false;
        this.isAccepted = false;
        this.action = {
            type: 'note',
            show: false,
            note: '',
            forwardedTo: '',
            btnText: 'Add Note'
        };
        this.contacts = [
            { id: 1, name: 'Andy Ant' },
            { id: 2, name: 'Pedro Pony' },
            { id: 3, name: 'Roger Rabbit' },
            { id: 4, name: 'Rebecca Rabbit' },
            { id: 5, name: 'Danny Dog' }
        ];
    }
    DetailsPage.prototype.ngOnInit = function () {
        console.log(this.route);
        this.isToAssignAction = !!this.route.snapshot.params['toAssign'];
        this.caseStatus = this.route.snapshot.params['caseStatus'];
        this.id = parseInt(this.route.snapshot.params['id'], 10);
        console.log(this.id, 'this.id');
        this.cases = JSON.parse(localStorage.getItem("cases"));
        this.markAsRead();
        if (this.caseStatus === 'closed') {
            this.isClosed = true;
            this.messages.closeMessage = 'My close message is nice..';
        }
    };
    DetailsPage.prototype.contactChange = function (event) {
        console.log('contact:', event.value);
        this.action.forwardedTo = Array.prototype.map.call(event.value, function (s) { return s.name; }).toString();
    };
    DetailsPage.prototype.markAsRead = function () {
        var _this = this;
        this.cases.map(function (item, index) {
            if (index === _this.id) {
                item.read = true;
                console.log(item);
            }
            return item;
        });
        localStorage.setItem("cases", JSON.stringify(this.cases));
    };
    DetailsPage.prototype.setCaseData = function (params) {
        var _this = this;
        this.cases.map(function (item, index) {
            // let cc = item;
            if (index === _this.id) {
                item.status = params.status;
                item.statusColor = params.statusColor;
                item.callStatus = params.callStatus;
                item.callStatusColor = params.callStatusColor;
                item.lastAssignee = params.lastAssignee;
            }
            return item;
        });
        localStorage.setItem("cases", JSON.stringify(this.cases));
    };
    DetailsPage.prototype.acceptCase = function () {
        this.presentAcceptConfirm('Are you sure you want to accept caes?');
    };
    DetailsPage.prototype.doAction = function () {
        if (this.action.type === 'note') {
            this.messages.notes.push({ message: this.action.note, date: new Date() });
            this.presentToastWithOptions("Note added successfully.");
            this.action.note = '';
            this.action.show = false;
        }
        else if (this.action.type === 'forward') {
            this.messages.forwardMessage = this.action.note;
            this.messages.forwardedTo = this.action.forwardedTo;
            this.messages.forwardDate = new Date();
            this.isForwarded = true;
            this.presentToastWithOptions("Case forwarded successfully.");
            this.action.note = '';
            this.action.show = false;
            this.setCaseData({
                status: 'Pending',
                statusColor: 'danger',
                callStatus: 'Forwarded',
                from: 'Paul Lieberman',
                callStatusColor: 'warning',
                lastAssignee: this.action.forwardedTo
            });
        }
        else if (this.action.type === 'close') {
            this.CloseCaseConfirm(this.action.note);
        }
        else if (this.action.type === 'decline') {
            this.presentAssignConfirm('Are sure you want to decline case?', false);
        }
    };
    DetailsPage.prototype.declineAction = function () {
        this.action.show = true;
        this.action.type = 'decline';
        this.action.btnText = 'Decline Case';
    };
    DetailsPage.prototype.cancelAction = function () {
        this.action.show = false;
        this.action.note = '';
    };
    // getValuesFromForm() {
    //   this.router.navigate(['/RemarkComponent']);
    // }
    DetailsPage.prototype.presentAssignConfirm = function (message, isAssign) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: message,
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'success',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                        _this.action.show = false;
                                    }
                                }, {
                                    text: isAssign ? 'Assign' : 'Decline',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.presentToastWithOptions("Action saved successfully.");
                                        if (isAssign) {
                                            _this.isAccepted = true;
                                            _this.setCaseData({
                                                status: 'Pending',
                                                statusColor: 'danger',
                                                callStatus: 'Accepted',
                                                callStatusColor: 'primary',
                                                lastAssignee: 'Paul Lieberman'
                                            });
                                        }
                                        _this.isAssign = isAssign;
                                        _this.isCaseActioned = true;
                                        _this.declineNote = _this.action.note;
                                        _this.action.show = false;
                                        _this.action.note = '';
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailsPage.prototype.presentAcceptConfirm = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: message,
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'success',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Accept',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.presentToastWithOptions("Case accepted successfully.");
                                        _this.isAccepted = true;
                                        _this.setCaseData({
                                            status: 'Pending',
                                            statusColor: 'danger',
                                            callStatus: 'Accepted',
                                            callStatusColor: 'primary',
                                            lastAssignee: 'Paul Lieberman'
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailsPage.prototype.presentToastWithOptions = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message || 'Your settings have been saved.',
                            showCloseButton: true,
                            position: 'top',
                            duration: 2000,
                            closeButtonText: 'Close'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailsPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Action',
                            buttons: [{
                                    text: 'Forward',
                                    handler: function () {
                                        // this.presentForwardPrompt();
                                        _this.action.show = true;
                                        _this.action.type = 'forward';
                                        _this.action.btnText = 'Forward';
                                    }
                                }, {
                                    text: 'Add Note',
                                    handler: function () {
                                        // this.presentAddNotePrompt();
                                        _this.action.show = true;
                                        _this.action.type = 'note';
                                        _this.action.btnText = 'Add Note';
                                    }
                                }, {
                                    text: 'Close Case',
                                    handler: function () {
                                        // this.presentCloseCasePrompt();
                                        _this.action.show = true;
                                        _this.action.type = 'close';
                                        _this.action.btnText = 'Close Case';
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
    DetailsPage.prototype.presentCloseCasePrompt = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Enter remarks',
                            subHeader: 'Please enter notes/remark',
                            inputs: [
                                {
                                    name: 'closeMessage',
                                    type: 'text',
                                    placeholder: 'Enter your notes'
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Close',
                                    handler: function (event) {
                                        console.log(event, 'Confirm Ok');
                                        _this.CloseCaseConfirm(event.closeMessage);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailsPage.prototype.CloseCaseConfirm = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Please confirm you want to close case.',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Confirm',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.messages.closeMessage = message;
                                        _this.messages.closeDate = new Date();
                                        _this.isClosed = true;
                                        _this.caseStatus = 'closed';
                                        _this.action.show = false;
                                        _this.presentToastWithOptions("Case closed successfully.");
                                        _this.setCaseData({
                                            status: 'Closed',
                                            statusColor: 'success',
                                            callStatus: 'Closed',
                                            callStatusColor: 'success',
                                            lastAssignee: 'Paul Lieberman'
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.page.html */ "./src/app/cases/details/details.page.html"),
            styles: [__webpack_require__(/*! ./details.page.scss */ "./src/app/cases/details/details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], DetailsPage);
    return DetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=cases-details-details-module.js.map