(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-notification-notification-module"],{

/***/ "./src/app/settings/notification/notification.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/settings/notification/notification.module.ts ***!
  \**************************************************************/
/*! exports provided: NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notification.page */ "./src/app/settings/notification/notification.page.ts");








var routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_7__["NotificationPage"]
    }
];
var NotificationPageModule = /** @class */ (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ionic_selectable__WEBPACK_IMPORTED_MODULE_5__["IonicSelectableModule"]
            ],
            declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_7__["NotificationPage"]]
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());



/***/ }),

/***/ "./src/app/settings/notification/notification.page.html":
/*!**************************************************************!*\
  !*** ./src/app/settings/notification/notification.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>\r\n      <img alt=\"logo\" height=\"40\" src=\"assets/logo.png\">\r\n    </ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>Notification Settings</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Alert Tone</ion-label>\r\n      <ion-toggle [(ngModel)]=\"userInfo.alert_tone\" (ionChange)=\"myChange($event)\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"userInfo.alert_tone\" (click)=\"selectTone('Cases')\">\r\n      <ion-label>Select case tone</ion-label>\r\n      <ion-note slot=\"end\">{{theToneCase?.name}}</ion-note>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"userInfo.alert_tone\" (click)=\"selectTone('Messages')\">\r\n      <ion-label>Select message tone</ion-label>\r\n      <ion-note slot=\"end\">{{theToneMessage?.name}}</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Vibrate</ion-label>\r\n      <ion-toggle [(ngModel)]=\"userInfo.alert_vibrate\" (ionChange)=\"myChange($event)\"></ion-toggle>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <!-- <ion-button (click)=\"toneNow()\">\r\n    Click me - test ringtone\r\n  </ion-button>\r\n\r\n  <ion-button (click)=\"vibrateNow()\">\r\n    Click me - test vibrate\r\n  </ion-button> -->\r\n\r\n  <ion-button (click)=\"localNoti()\">\r\n    Click me - test local noti\r\n  </ion-button>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/settings/notification/notification.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/settings/notification/notification.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/notification/notification.page.ts":
/*!************************************************************!*\
  !*** ./src/app/settings/notification/notification.page.ts ***!
  \************************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "./node_modules/@ionic-native/vibration/ngx/index.js");
/* harmony import */ var _ionic_native_native_ringtones_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-ringtones/ngx */ "./node_modules/@ionic-native/native-ringtones/ngx/index.js");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "./node_modules/@ionic-native/native-audio/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _tones_list_tones_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../tones-list/tones-list.component */ "./src/app/settings/tones-list/tones-list.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");















var NotificationPage = /** @class */ (function () {
    function NotificationPage(toastController, vibration, file, media, filePath, nativeAudio, ringtones, localNotifications, plt, commonService, userService, popoverController, alertController) {
        this.toastController = toastController;
        this.vibration = vibration;
        this.file = file;
        this.media = media;
        this.filePath = filePath;
        this.nativeAudio = nativeAudio;
        this.ringtones = ringtones;
        this.localNotifications = localNotifications;
        this.plt = plt;
        this.commonService = commonService;
        this.userService = userService;
        this.popoverController = popoverController;
        this.alertController = alertController;
        this.notiSettings = {
            tone: true,
            vibrate: true
        };
        this.toneUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].url + "/assets/ringtones/tone.mp3"; // assets/ringtones/beep.mp3';
        this.notifications = [];
        this.tones = [];
        this.userInfo = {
            alert_vibrate: true,
            alert_tone: true,
        };
        this.defaultToneName = 'CuraCall Ringtone';
        this.defaultTone = {
            Name: this.defaultToneName,
            Url: this.toneUrl,
            name: this.defaultToneName,
            url: this.toneUrl,
            label: this.defaultToneName,
            index: 0,
            value: this.defaultToneName + "_" + this.toneUrl + "_0",
            checked: true
        };
        this.theToneCase = this.defaultTone;
        this.theToneMessage = this.defaultTone;
        this.filee = this.media.create(src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].url + "/assets/ringtones/tone.mp3");
    }
    NotificationPage.prototype.ngOnInit = function () {
        this.userInfo = (this.userService.getUserInfo() && Object.keys(this.userService.getUserInfo()).length) ? this.userService.getUserInfo() : this.userInfo;
        console.log(this.toneUrl, this.plt.is('android'), 'this.plt.is');
    };
    NotificationPage.prototype.getNotifications = function () {
        var _this = this;
        this.commonService.getNotifications({ user_id: this.userInfo.id })
            .subscribe(function (data) {
            console.log(data, 'ddd');
            _this.notifications = data;
        });
    };
    NotificationPage.prototype.selectTone = function (type) {
        var _this = this;
        this.ringtones.getRingtone().then(function (ringtones) {
            ringtones.unshift(_this.defaultTone);
            var mapTones = ringtones.map(function (item, index) {
                var formatted = {
                    name: item.Name,
                    type: 'radio',
                    label: item.Name,
                    value: item.Name + "_" + item.Url + "_" + index
                };
                return formatted;
            });
            _this.presentAlertRadio(mapTones, type);
            _this.tones = ringtones;
        });
        // this.tones = await this.ringtones.getRingtone();
    };
    NotificationPage.prototype.presentAlertRadio = function (tones, type) {
        if (type === void 0) { type = 'Messages'; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: type,
                            inputs: tones,
                            // backdropDismiss: false,
                            buttons: [
                                {
                                    text: 'Test',
                                    handler: function (data) {
                                        console.log('Confirm test');
                                        var newFormat = data.split('_');
                                        if (newFormat[0] === _this.defaultToneName) {
                                            _this.filee.play();
                                            return false;
                                        }
                                        _this.ringtones.playRingtone(newFormat[1]);
                                        return false;
                                    }
                                },
                                {
                                    text: 'Set',
                                    handler: function (data) {
                                        console.log('Confirm Ok');
                                        _this.filee.pause();
                                        var newFormat = data.split('_');
                                        var theValue = {
                                            Name: newFormat[0],
                                            Url: newFormat[1],
                                            name: newFormat[0],
                                            url: newFormat[1],
                                            index: newFormat[2],
                                            label: newFormat[0],
                                            checked: true,
                                            value: data
                                        };
                                        if (type === 'Cases') {
                                            _this.theToneCase = theValue;
                                            localStorage.setItem('theToneCase', JSON.stringify(_this.theToneCase));
                                            _this.commonService.presentToastWithOptions('Tone for cases set successfully');
                                        }
                                        else {
                                            _this.theToneMessage = theValue;
                                            localStorage.setItem('theToneMessage', JSON.stringify(_this.theToneMessage));
                                            _this.commonService.presentToastWithOptions('Tone for messages set successfully');
                                        }
                                        _this.commonService.presentAlert(JSON.stringify(_this.theToneCase), '', function () { });
                                    }
                                },
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
    NotificationPage.prototype.dismissClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationPage.prototype.presentPopover = function (tones) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _tones_list_tones_list_component__WEBPACK_IMPORTED_MODULE_12__["TonesListComponent"],
                            // event: ev,
                            animated: true,
                            showBackdrop: true,
                            componentProps: {
                                tones: tones
                            }
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NotificationPage.prototype.localNoti = function () {
        // Schedule a single notification
        this.localNotifications.schedule({
            id: 1,
            text: 'New CuraCall Message',
            sound: this.plt.is('android') ? 'assets/ringtones/tone.mp3' : 'assets/ringtones/tone.caf',
            data: { secret: 'key' }
        });
        this.filee.play();
    };
    NotificationPage.prototype.toneNow = function () {
        var _this = this;
        this.ringtones.getRingtone().then(function (ringtones) {
            _this.commonService.presentAlert(JSON.stringify(ringtones[1]), '', function () { });
            console.log(ringtones);
            _this.ringtones.playRingtone(ringtones[1].Url).then(function () {
                _this.ringtones.stopRingtone(ringtones[1].Url);
            });
        });
        // this.ringtones.getRingtone();
        // this.ringtones.playRingtone('file://assets/ringtones/beep.mp3');
    };
    NotificationPage.prototype.vibrateNow = function () {
        // Vibrate 2 seconds
        // Pause for 1 second
        // Vibrate for 2 seconds
        // Patterns work on Android and Windows only
        this.vibration.vibrate([2000, 1000, 2000]);
    };
    NotificationPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Your settings have been saved.',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationPage.prototype.presentToastWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Your settings have been saved.',
                            showCloseButton: true,
                            position: 'top',
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
    NotificationPage.prototype.myChange = function ($event) {
        var _this = this;
        var alert = {
            id: this.userInfo.id,
            alert_tone: this.userInfo.alert_tone ? 1 : 0,
            alert_vibrate: this.userInfo.alert_vibrate ? 1 : 0,
        };
        this.userService.updateAlert(alert)
            .subscribe(function (user) {
            _this.userService.setUserToLocal(user);
            _this.commonService.presentToastWithOptions('Your settings have been saved.');
        });
    };
    NotificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.page.html */ "./src/app/settings/notification/notification.page.html"),
            styles: [__webpack_require__(/*! ./notification.page.scss */ "./src/app/settings/notification/notification.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_5__["Vibration"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
            _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_10__["Media"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__["FilePath"],
            _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeAudio"],
            _ionic_native_native_ringtones_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeRingtones"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__["LocalNotifications"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], NotificationPage);
    return NotificationPage;
}());



/***/ })

}]);
//# sourceMappingURL=settings-notification-notification-module.js.map