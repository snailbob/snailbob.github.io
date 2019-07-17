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

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"primary\" *ngIf=\"(caseStatus === 'pending' || caseStatus === 'closed')\"\r\n        (click)=\"presentActionSheet()\">\r\n        Actions\r\n      </ion-button>\r\n      <ion-button color=\"primary\" *ngIf=\"caseStatus === 'active' && !isAccepted\" (click)=\"acceptCase()\">\r\n        <ion-icon name=\"add-circle\"></ion-icon> Accept\r\n      </ion-button>\r\n\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <img alt=\"logo\" height=\"40\" src=\"assets/logo.png\">\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar [color]=\"theCase?.status_color\">\r\n    <ion-buttons slot=\"start\" *ngIf=\"action.show\">\r\n      <ion-button color=\"primary\" fill=\"solid\" (click)=\"doAction()\" [disabled]=\"!action.note\">\r\n        {{action.btnText}}\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>{{theCase?.status_text}}</ion-title>\r\n    <ion-buttons slot=\"end\" *ngIf=\"!isCaseActioned && isToAssignAction && !action.show\">\r\n      <ion-button color=\"light\" fill=\"solid\"\r\n        (click)=\"presentAssignConfirm('Are sure you want to assign this case to your self?', true)\">\r\n        <ion-icon name=\"person\"></ion-icon> Assign to me\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" *ngIf=\"action.show\">\r\n      <ion-button color=\"warning\" fill=\"solid\" (click)=\"cancelAction()\">\r\n        Cancel\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar *ngIf=\"action.show\">\r\n    <textarea name=\"remarks\" class=\"input-textarea\" [(ngModel)]=\"action.note\"\r\n      [placeholder]=\"action.type === 'note' ? 'Add your note here..' : 'Add your remarks here..'\" rows=\"5\"></textarea>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar *ngIf=\"action.show && action.type === 'forward'\">\r\n    <ion-item class=\"input-bordered\" lines=\"none\">\r\n      <ion-label>Forward to</ion-label>\r\n      <ionic-selectable [(ngModel)]=\"contact\" [items]=\"contacts\" itemValueField=\"id\" itemTextField=\"full_name\"\r\n        [canSearch]=\"true\" [isMultiple]=\"true\" (onChange)=\"contactChange($event)\">\r\n      </ionic-selectable>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-list-header color=\"medium\">\r\n      <ion-label>Caller Information</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>First name</ion-label>\r\n      <ion-note slot=\"end\">{{theCase?.caller_first_name}}</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Last name</ion-label>\r\n      <ion-note slot=\"end\">{{theCase?.caller_last_name}}</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Caller type</ion-label>\r\n      <ion-note slot=\"end\">{{theCase?.caller_type}}</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Type of caregiver</ion-label>\r\n      <ion-note slot=\"end\">{{theCase?.caregiver_type}}</ion-note>\r\n    </ion-item>\r\n    <ion-item href=\"tel:{{theCase?.caller_telephone_number}}\">\r\n      <ion-label>Caller telephone</ion-label>\r\n      <ion-note slot=\"end\">{{theCase?.caller_telephone_number}}</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Is hospital related</ion-label>\r\n      <ion-note slot=\"end\">{{theCase?.hospital_related}}</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Caregiver clock in code</ion-label>\r\n      <ion-note slot=\"end\">{{theCase?.caregiver_time_and_attendance_pin_code || 'not available'}}</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-list-header color=\"medium\">\r\n      <ion-label>Call Information</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Call type </ion-label>\r\n      <ion-note slot=\"end\">{{theCase?.call_type}}</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Timesheet concern</ion-label>\r\n      <ion-note slot=\"end\">{{theCase?.was_timesheet_submitted}}</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-list-header color=\"medium\">\r\n      <ion-label>Caregiver Information</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Type of caregiver</ion-label>\r\n      <ion-note slot=\"end\">{{theCase?.caregiver_type}}</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>First name</ion-label>\r\n      <ion-note slot=\"end\">{{theCase?.caller_first_name}}</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Last name</ion-label>\r\n      <ion-note slot=\"end\">{{theCase?.caller_last_name}}</ion-note>\r\n    </ion-item>\r\n    <ion-item href=\"tel:{{theCase?.caller_telephone_number}}\">\r\n      <ion-label>Telephone number</ion-label>\r\n      <ion-note slot=\"end\">{{theCase?.caller_telephone_number}}</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Povide start time of shift</ion-label>\r\n      <ion-note slot=\"end\">{{theCase?.employee_date_time_of_shift_start}}</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Povide end time of shift</ion-label>\r\n      <ion-note slot=\"end\">{{theCase?.employee_date_time_of_shift_end}}</ion-note>\r\n    </ion-item>\r\n\r\n\r\n    <ion-list-header color=\"medium\">\r\n      <ion-label>Other information</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Call reason</ion-label>\r\n      <ion-note slot=\"end\">{{theCase?.call_reason}}</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Call language</ion-label>\r\n      <ion-note slot=\"end\">{{theCase?.call_language}}</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Number of calls</ion-label>\r\n      <ion-note slot=\"end\">{{theCase?.number_of_calls}}</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-list-header color=\"medium\">\r\n      <ion-label>Case Created</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Created case date/time</ion-label>\r\n      <ion-note slot=\"end\">{{theCase?.created_at | date: 'short' }}</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-list-header color=\"medium\">\r\n      <ion-label>Case Read</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Read case date/time</ion-label>\r\n      <ion-note slot=\"end\">{{theCase?.readData.updated_at | date: 'short' }}</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-list-header color=\"medium\" *ngIf=\"isForwarded\">\r\n      <ion-label>Forward Details</ion-label>\r\n    </ion-list-header>\r\n    <ion-item *ngIf=\"isForwarded\">\r\n      <ion-label>Message</ion-label>\r\n      <ion-note slot=\"end\">{{messages.forwardMessage }}</ion-note>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"isForwarded\">\r\n      <ion-label>Forwarded to</ion-label>\r\n      <ion-note slot=\"end\">{{ messages.forwardedTo}}</ion-note>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"isForwarded\">\r\n      <ion-label>Forwarded date/time</ion-label>\r\n      <ion-note slot=\"end\">{{messages.forwardDate | date: 'short' }}</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-list-header color=\"medium\" *ngIf=\"caseStatus === 'pending' && theCase?.ownership_text !== 'Forwarded'\">\r\n      <ion-label>Accepted Details</ion-label>\r\n    </ion-list-header>\r\n    <ion-item *ngIf=\"caseStatus === 'pending' && theCase?.ownership_text !== 'Forwarded'\">\r\n      <ion-label>Accepted date/time</ion-label>\r\n      <ion-note slot=\"end\">{{theCase?.accepted[0].updated_at | date: 'short' }}</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-list-header color=\"medium\" *ngIf=\"isClosed\">\r\n      <ion-label>Closed Details</ion-label>\r\n    </ion-list-header>\r\n    <ion-item *ngIf=\"isClosed\">\r\n      <ion-label>Message</ion-label>\r\n      <ion-note slot=\"end\">{{messages.closeMessage }}</ion-note>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"isClosed\">\r\n      <ion-label>Closed by</ion-label>\r\n      <ion-note slot=\"end\">Paul Lieberman</ion-note>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"isClosed\">\r\n      <ion-label>Closed Date/Time</ion-label>\r\n      <ion-note slot=\"end\">12/12/2018 10:10PM</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-list-header color=\"medium\" *ngIf=\"declineNote\">\r\n      <ion-label>Decline Details</ion-label>\r\n    </ion-list-header>\r\n    <ion-item *ngIf=\"declineNote\">\r\n      <ion-label>Message</ion-label>\r\n      <ion-note slot=\"end\">{{declineNote}}</ion-note>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"declineNote\">\r\n      <ion-label>Declined by</ion-label>\r\n      <ion-note slot=\"end\">Paul Lieberman</ion-note>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"declineNote\">\r\n      <ion-label>Decline Date/Time</ion-label>\r\n      <ion-note slot=\"end\">12/12/2018 10:10PM</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-list-header color=\"medium\" *ngIf=\"theCase?.notes.length\">\r\n      <ion-label>\r\n        Case Notes\r\n        <ion-note color=\"primary\">({{theCase?.notes.length}})</ion-note>\r\n\r\n      </ion-label>\r\n    </ion-list-header>\r\n  </ion-list>\r\n\r\n  <ion-card *ngIf=\"theCase?.notes.length\">\r\n    <ion-list>\r\n      <ion-item *ngFor=\"let note of theCase?.notes\">\r\n        <ion-avatar slot=\"start\">\r\n          <img [src]=\"note.user.avatar\">\r\n        </ion-avatar>\r\n        <ion-label text-wrap>\r\n          <h2>{{note.user.fname}} {{note.user.lname}}</h2>\r\n          <p>{{note.note}}</p>\r\n        </ion-label>\r\n        <small slot=\"end\" color=\"light\">\r\n          {{ note.created_at | date: 'shortTime'}} <br>\r\n          {{ note.created_at | date: 'mediumDate'}} <br>\r\n        </small>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-card>\r\n</ion-content>"

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
/* harmony import */ var src_app_services_case_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/case.service */ "./src/app/services/case.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");









var Port = /** @class */ (function () {
    function Port() {
    }
    return Port;
}());
var DetailsPage = /** @class */ (function () {
    function DetailsPage(caseService, userService, commonService, route, router, actionSheetController, alertController, toastController) {
        this.caseService = caseService;
        this.userService = userService;
        this.commonService = commonService;
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
        // this.contacts = [
        //   { id: 1, name: 'Andy Ant' },
        //   { id: 2, name: 'Pedro Pony' },
        //   { id: 3, name: 'Roger Rabbit' },
        //   { id: 4, name: 'Rebecca Rabbit' },
        //   { id: 5, name: 'Danny Dog' }
        // ];
    }
    DetailsPage.prototype.ngOnInit = function () {
        console.log(this.route);
        this.isToAssignAction = !!this.route.snapshot.params['toAssign'];
        this.caseStatus = this.route.snapshot.params['caseStatus'];
        this.id = parseInt(this.route.snapshot.params['id'], 10);
        this.userInfo = this.userService.getUserInfo();
        console.log(this.id, 'this.id');
        this.cases = JSON.parse(localStorage.getItem("cases"));
        this.markAsRead();
        if (this.caseStatus === 'closed') {
            this.isClosed = true;
            this.messages.closeMessage = 'My close message is nice..';
        }
        this.getUsers();
    };
    DetailsPage.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers({})
            .subscribe(function (users) {
            _this.contacts = users;
        });
    };
    DetailsPage.prototype.contactChange = function (event) {
        console.log('contact:', event.value);
        this.forwardRecepients = event.value;
        this.formattedRecepients = event.value.map(function (_a) {
            var id = _a.id;
            return id;
        });
        this.action.forwardedTo = Array.prototype.map.call(event.value, function (s) { return s.name; }).toString();
    };
    DetailsPage.prototype.markAsRead = function () {
        var _this = this;
        this.commonService.presentLoading();
        this.caseService.getCase(this.id, this.userInfo.id)
            .subscribe(function (res) {
            _this.commonService.stopLoading();
            _this.theCase = res;
            _this.isAccepted = res.isAccepted || res.status_text === 'Closed';
            _this.isCaseActioned = res.isAccepted;
            // this.isToAssignAction = res.ownership_text !== 'Forwarded';
            // this.isToAssignAction = !res.isAccepted && res.status_text === 'Pending';
            _this.caseStatus = res.status_text.toLowerCase();
            _this.isClosed = res.status_text === 'Closed';
            console.log('this.theCase :', _this.theCase);
            // console.log(this.theCase , this.isAccepted, this.caseStatus, 'res');
        }, function () {
            _this.commonService.stopLoading();
        });
        // this.cases.map((item: any, index: number) => {
        //   if (index === this.id) {
        //     item.read = true;
        //     console.log(item);
        //   }
        //   return item;
        // });
        // localStorage.setItem("cases", JSON.stringify(this.cases));
    };
    DetailsPage.prototype.setCaseData = function (params) {
        console.log(params);
        // this.cases.map((item: any, index: number) => {
        //   // let cc = item;
        //   if (index === this.id) {
        //     item.status = params.status;
        //     item.statusColor = params.statusColor;
        //     item.callStatus = params.callStatus;
        //     item.callStatusColor = params.callStatusColor;
        //     item.lastAssignee = params.lastAssignee;
        //   }
        //   return item;
        // });
        // localStorage.setItem("cases", JSON.stringify(this.cases));
    };
    DetailsPage.prototype.acceptCase = function () {
        this.presentAcceptConfirm('Are you sure you want to accept case?');
    };
    DetailsPage.prototype.doAction = function () {
        var _this = this;
        if (this.action.type === 'note') {
            this.caseService.addNote({ note: this.action.note, created_by: this.userInfo.id, id: this.id })
                .subscribe(function () {
                _this.markAsRead();
                // this.messages.notes.push({message: this.action.note, date: new Date()});
                _this.presentToastWithOptions("Note added successfully.");
                _this.action.note = '';
                _this.action.show = false;
            });
        }
        else if (this.action.type === 'forward') {
            this.commonService.presentLoading();
            this.caseService.forwardCase({
                case_id: this.id,
                user_id: this.userInfo.id,
                note: this.action.note,
                recipient: this.formattedRecepients
            })
                .subscribe(function (res) {
                _this.commonService.loadingBox.dismiss();
                _this.messages.forwardMessage = _this.action.note;
                _this.messages.forwardedTo = _this.action.forwardedTo;
                _this.messages.forwardDate = new Date();
                _this.isForwarded = true;
                _this.presentToastWithOptions("Case forwarded successfully.");
                _this.action.note = '';
                _this.action.show = false;
                _this.markAsRead();
                _this.setCaseData({
                    status: 'Pending',
                    statusColor: 'danger',
                    callStatus: 'Forwarded',
                    from: _this.userInfo.full_name,
                    callStatusColor: 'warning',
                    lastAssignee: _this.action.forwardedTo
                });
            }, function () {
                _this.commonService.loadingBox.dismiss();
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
                                        _this.commonService.presentLoading();
                                        _this.caseService.acceptCase(_this.id, _this.userInfo.id)
                                            .subscribe(function () {
                                            // this.presentToastWithOptions(`Case accepted successfully.`);
                                            // this.markAsRead();
                                            // this.isAccepted = true;
                                            _this.commonService.loadingBox.dismiss();
                                            _this.router.navigate(["/tabs/tab1/case/details/" + _this.id + "/pending"]);
                                            _this.presentToastWithOptions("Action saved successfully.");
                                            console.log('Confirm Okay');
                                            // if (isAssign) {
                                            //   this.isAccepted = true;
                                            //   this.setCaseData({
                                            //     status: 'Pending',
                                            //     statusColor: 'danger',
                                            //     callStatus: 'Accepted',
                                            //     callStatusColor: 'primary',
                                            //     lastAssignee: 'Paul Lieberman'
                                            //   });
                                            // }
                                            // this.isAssign = isAssign;
                                            // this.isCaseActioned = true;
                                            // this.declineNote = this.action.note;
                                            // this.action.show = false;
                                            // this.action.note = '';
                                        }, function () {
                                            _this.commonService.loadingBox.dismiss();
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
                                        _this.caseService.acceptCase(_this.id, _this.userInfo.id)
                                            .subscribe(function () {
                                            _this.presentToastWithOptions("Case accepted successfully.");
                                            _this.markAsRead();
                                            _this.isAccepted = true;
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
    DetailsPage.prototype.presentReOpen = function (message) {
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
                                    text: 'Re-Open',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.caseService.caseReopen({ case_id: _this.id, user_id: _this.userInfo.id, note: 'Reopen case note', case_form: 'close' })
                                            .subscribe(function () {
                                            _this.presentToastWithOptions("Case reopen successfully.");
                                            // this.router.navigate([`/tabs/tab1/case/details/${this.id}/pending`]);
                                            // this.markAsRead();
                                            // this.isAccepted = true;
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
            var buttons, actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buttons = this.isClosed ? [{
                                text: 'Re-Open',
                                handler: function () {
                                    _this.presentReOpen('Are you sure you want to reopen case?');
                                }
                            }, {
                                text: 'Cancel',
                                role: 'cancel',
                                handler: function () {
                                    console.log('Cancel clicked');
                                }
                            }] : [{
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
                            }];
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: 'Action',
                                buttons: buttons
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
                                        _this.caseService.closeCase({ case_id: _this.id, user_id: _this.userInfo.id, note: message })
                                            .subscribe(function () {
                                            _this.presentToastWithOptions("Case closed successfully.");
                                            _this.markAsRead();
                                            _this.messages.closeMessage = message;
                                            _this.messages.closeDate = new Date();
                                            _this.isClosed = true;
                                            _this.caseStatus = 'closed';
                                            _this.action.show = false;
                                        });
                                        // this.setCaseData({
                                        //   status: 'Closed',
                                        //   statusColor: 'success',
                                        //   callStatus: 'Closed',
                                        //   callStatusColor: 'success',
                                        //   lastAssignee: 'Paul Lieberman'
                                        // });
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_case_service__WEBPACK_IMPORTED_MODULE_4__["CaseService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
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