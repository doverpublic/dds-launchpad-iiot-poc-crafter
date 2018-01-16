webpackJsonp(["mail.module"],{

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/dialogs/compose/compose.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\n        <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <span class=\"title dialog-title\">New Message</span>\n            <button mat-button class=\"mat-icon-button\"\n                    (click)=\"dialogRef.close()\"\n                    aria-label=\"Close dialog\">\n                <mat-icon>close</mat-icon>\n            </button>\n        </div>\n    </mat-toolbar>\n\n    <div mat-dialog-content class=\"p-24 m-0\" fusePerfectScrollbar>\n\n        <form name=\"composeForm\" [formGroup]=\"composeForm\" class=\"compose-form\" fxLayout=\"column\" fxFlex>\n\n            <mat-form-field>\n                <input matInput name=\"from\"\n                       placeholder=\"From\"\n                       formControlName=\"from\"\n                       type=\"email\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput name=\"to\"\n                       placeholder=\"To\"\n                       formControlName=\"to\"\n                       type=\"email\" required>\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput\n                       name=\"cc\"\n                       placeholder=\"Cc\"\n                       formControlName=\"cc\"\n                       type=\"email\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput\n                       name=\"bcc\"\n                       placeholder=\"Bcc\"\n                       formControlName=\"bcc\"\n                       type=\"email\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput name=\"subject\"\n                       placeholder=\"Subject\"\n                       formControlName=\"subject\">\n            </mat-form-field>\n\n            <mat-form-field>\n            <textarea matInput name=\"message\"\n                      placeholder=\"Message\"\n                      formControlName=\"message\"\n                      rows=\"6\">\n            </textarea>\n            </mat-form-field>\n\n            <div class=\"attachment-list\">\n\n                <div class=\"attachment\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <div>\n                        <span class=\"filename\">attachment-2.doc</span>\n                        <span class=\"size\">(12 Kb)</span>\n                    </div>\n\n                    <button mat-icon-button aria-label=\"Delete attachment\">\n                        <mat-icon class=\"s-16\">close</mat-icon>\n                    </button>\n                </div>\n\n                <div class=\"attachment\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <div>\n                        <span class=\"filename\">attachment-1.jpg</span>\n                        <span class=\"size\">(350 Kb)</span>\n                    </div>\n\n                    <button mat-icon-button aria-label=\"Delete attachment\">\n                        <mat-icon class=\"s-16\">close</mat-icon>\n                    </button>\n                </div>\n            </div>\n        </form>\n    </div>\n\n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <div>\n            <button mat-raised-button\n                    (click)=\"dialogRef.close(['send',composeForm])\"\n                    class=\"save-button mat-accent\"\n                    [disabled]=\"composeForm.invalid\"\n                    aria-label=\"SAVE\">\n                SEND\n            </button>\n\n            <button mat-icon-button matTooltip=\"Attach a file\">\n                <mat-icon>attach_file</mat-icon>\n            </button>\n        </div>\n\n        <button mat-button\n                class=\"mat-icon-button\"\n                (click)=\"dialogRef.close(['delete',composeForm])\"\n                aria-label=\"Delete\"\n                matTooltip=\"Delete\">\n            <mat-icon>delete</mat-icon>\n        </button>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/dialogs/compose/compose.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mail-compose-dialog .mat-dialog-container {\n  padding: 0;\n  width: 720px; }\n  .mail-compose-dialog .mat-dialog-container .compose-form .mat-form-field {\n    width: 100%; }\n  .mail-compose-dialog .mat-dialog-container .compose-form .attachment-list {\n    font-size: 13px;\n    padding-top: 16px; }\n    .mail-compose-dialog .mat-dialog-container .compose-form .attachment-list .attachment {\n      background-color: rgba(0, 0, 0, 0.08);\n      border: 1px solid rgba(0, 0, 0, 0.16);\n      padding-left: 16px;\n      margin-top: 8px;\n      border-radius: 2px; }\n      .mail-compose-dialog .mat-dialog-container .compose-form .attachment-list .attachment .filename {\n        font-weight: 500; }\n      .mail-compose-dialog .mat-dialog-container .compose-form .attachment-list .attachment:last-child {\n        margin-bottom: 0; }\n\n.mail-compose-dialog .dialog-content-wrapper {\n  max-height: 85vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/dialogs/compose/compose.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var FuseMailNgrxComposeDialogComponent = (function () {
    function FuseMailNgrxComposeDialogComponent(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.composeForm = this.createComposeForm();
    }
    FuseMailNgrxComposeDialogComponent.prototype.ngOnInit = function () {
    };
    FuseMailNgrxComposeDialogComponent.prototype.createComposeForm = function () {
        return this.formBuilder.group({
            from: {
                value: ['johndoe@creapond.com'],
                disabled: [true]
            },
            to: [''],
            cc: [''],
            bcc: [''],
            subject: [''],
            message: ['']
        });
    };
    FuseMailNgrxComposeDialogComponent = __decorate([
        core_1.Component({
            selector: 'fuse-mail-compose',
            template: __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/dialogs/compose/compose.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/dialogs/compose/compose.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object, forms_1.FormBuilder])
    ], FuseMailNgrxComposeDialogComponent);
    return FuseMailNgrxComposeDialogComponent;
}());
exports.FuseMailNgrxComposeDialogComponent = FuseMailNgrxComposeDialogComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/i18n/en.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.locale = {
    lang: 'en',
    data: {
        'MAIL': {
            'COMPOSE': 'COMPOSE',
            'FOLDERS': 'FOLDERS',
            'FILTERS': 'FILTERS',
            'LABELS': 'LABELS',
            'NO_MESSAGES': 'There are no messages!',
            'SELECT_A_MESSAGE_TO_READ': 'Select a message to read',
            'SEARCH_PLACEHOLDER': 'Search for an e-mail or contact'
        }
    }
};


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/i18n/tr.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.locale = {
    lang: 'tr',
    data: {
        'MAIL': {
            'COMPOSE': 'YENİ E-POSTA',
            'FOLDERS': 'KLASÖRLER',
            'FILTERS': 'FİLTRELER',
            'LABELS': 'ETİKETLER',
            'NO_MESSAGES': 'Mesajiniz bulunmamakta!',
            'SELECT_A_MESSAGE_TO_READ': 'Okumak için bir mesaj seçin',
            'SEARCH_PLACEHOLDER': 'E-mail yada bir kişi arayın'
        }
    }
};


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/mail-details/mail-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!mail\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex>\n    <mat-icon class=\"s-128 mb-16 select-message-icon\">\n        email\n    </mat-icon>\n    <span class=\"select-message-text hint-text\">\n        <span>{{ 'MAIL.SELECT_A_MESSAGE_TO_READ' | translate }}</span>\n    </span>\n</div>\n\n<div *ngIf=\"mail\">\n\n    <div class=\"mail-header\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n        <div>\n            <div class=\"subject\" flex>{{mail.subject}}</div>\n\n            <div class=\"labels\" fxLayout=\"row\" fxLayoutWrap>\n                <div class=\"label\" *ngFor=\"let labelId of mail.labels\"\n                     fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <div class=\"label-color\" [ngStyle]=\"{'background-color': (labels$ | async) | getById:labelId:'color'}\"></div>\n                    <div class=\"label-title\">{{(labels$ | async) | getById:labelId:'title'}}</div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <button mat-button class=\"mat-icon-button\" (click)=\"toggleStar($event)\" aria-label=\"Toggle star\">\n                <mat-icon *ngIf=\"mail.starred\">star</mat-icon>\n                <mat-icon *ngIf=\"!mail.starred\">star_outline</mat-icon>\n            </button>\n\n            <button mat-button class=\"mat-icon-button\" (click)=\"toggleImportant($event)\" aria-label=\"Toggle important\">\n                <mat-icon *ngIf=\"mail.important\">label</mat-icon>\n                <mat-icon *ngIf=\"!mail.important\">label_outline</mat-icon>\n            </button>\n        </div>\n    </div>\n\n    <div class=\"mail-content\">\n\n        <div class=\"info\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n\n            <div fxFlex fxLayout=\"column\" fxLayoutAlign=\"start start\">\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\n                    <div>\n                        <img *ngIf=\"mail.from.avatar\" alt=\"{{mail.from.name}}\"\n                             src=\"{{mail.from.avatar}}\" class=\"avatar\"/>\n\n                        <div *ngIf=\"!mail.from.avatar\" class=\"avatar\" ms-random-class=\"vm.colors\">\n                            {{mail.from.name[0]}}\n                        </div>\n                    </div>\n\n                    <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n\n                        <div class=\"name\">\n                            {{mail.from.name}}\n                        </div>\n\n                        <div class=\"to\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <div class=\"to-text\">to</div>\n                            <div>{{mail.to[0].name}}</div>\n                        </div>\n                    </div>\n                </div>\n\n                <a class=\"toggle-details\" (click)=\"showDetails = !showDetails\">\n                    <span *ngIf=\"!showDetails\">Show Details</span>\n                    <span *ngIf=\"showDetails\">Hide Details</span>\n                </a>\n\n                <div *ngIf=\"showDetails\" class=\"details\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\n                    <div fxLayout=\"column\">\n                        <span class=\"title\">From:</span>\n                        <span class=\"title\">To:</span>\n                        <span class=\"title\">Date:</span>\n                    </div>\n\n                    <div fxLayout=\"column\">\n                        <span class=\"detail\">{{mail.from.email}}</span>\n                        <span class=\"detail\">{{mail.to[0].email}}</span>\n                        <span class=\"detail\">{{mail.time}}</span>\n                    </div>\n                </div>\n            </div>\n\n            <button mat-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\" class=\"mat-icon-button\"\n                    (click)=\"$event.stopPropagation()\">\n                <mat-icon>more_vert</mat-icon>\n            </button>\n\n            <mat-menu #moreMenu=\"matMenu\">\n                <button mat-menu-item aria-label=\"Reply\">\n                    <mat-icon>reply</mat-icon>\n                    <span>Reply</span>\n                </button>\n\n                <button mat-menu-item aria-label=\"Forward\">\n                    <mat-icon>forward</mat-icon>\n                    <span>Forward</span>\n                </button>\n\n                <button mat-menu-item aria-label=\"Print\">\n                    <mat-icon>print</mat-icon>\n                    <span>Print</span>\n                </button>\n            </mat-menu>\n        </div>\n\n        <div [innerHTML]=\"mail.message\"></div>\n\n    </div>\n\n    <div *ngIf=\"mail.attachments\" class=\"mail-attachments\">\n\n        <div class=\"title\">\n            <span>Attachments</span>\n            ({{mail.attachments.length}})\n        </div>\n\n        <div class=\"attachment-list\" fxLayout=\"row\" fxLayoutWrap>\n\n            <div class=\"attachment\" fxLayout=\"column\"\n                 *ngFor=\"let attachment of mail.attachments\">\n\n                <img class=\"preview\" src=\"{{attachment.preview}}\">\n\n                <div fxLayout=\"column\">\n                    <a href=\"#\" onclick=\"event.preventDefault()\">View</a>\n                    <a href=\"#\" onclick=\"event.preventDefault()\">Download</a>\n                    <div class=\"size\">({{attachment.size}})</div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/mail-details/mail-details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n  padding: 24px; }\n  :host .select-message-text {\n    font-size: 24px;\n    font-weight: 300; }\n  :host .mail-header {\n    padding-bottom: 16px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n    :host .mail-header .actions {\n      min-width: 88px; }\n    :host .mail-header .subject {\n      font-size: 17px;\n      font-weight: 500; }\n    :host .mail-header .label {\n      font-size: 11px;\n      border-radius: 2px;\n      margin: 4px 4px 4px 0;\n      padding: 3px 8px;\n      background-color: rgba(0, 0, 0, 0.08); }\n      :host .mail-header .label .label-color {\n        width: 8px;\n        height: 8px;\n        margin-right: 8px;\n        border-radius: 50%; }\n  :host .mail-content {\n    padding: 24px 0; }\n    :host .mail-content .to {\n      color: rgba(0, 0, 0, 0.54); }\n      :host .mail-content .to .to-text {\n        margin-right: 4px;\n        text-transform: lowercase; }\n    :host .mail-content .info {\n      padding-bottom: 16px; }\n      :host .mail-content .info .avatar {\n        margin-right: 16px;\n        background-color: #039be5; }\n      :host .mail-content .info .name {\n        margin-right: 8px;\n        font-weight: 500; }\n      :host .mail-content .info .toggle-details {\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        text-decoration: underline;\n        padding-top: 16px;\n        cursor: pointer;\n        font-weight: 500; }\n      :host .mail-content .info .details {\n        padding-top: 8px; }\n        :host .mail-content .info .details .title {\n          font-weight: 500;\n          margin-right: 6px; }\n        :host .mail-content .info .details .detail {\n          color: rgba(0, 0, 0, 0.54); }\n  :host .mail-attachments {\n    padding: 24px 0;\n    border-top: 1px solid rgba(0, 0, 0, 0.12); }\n    :host .mail-attachments .title {\n      margin-bottom: 16px;\n      font-weight: 500; }\n    :host .mail-attachments .attachment .preview {\n      width: 100px;\n      margin: 0 16px 8px 0; }\n    :host .mail-attachments .attachment .link {\n      margin-bottom: 2px; }\n    :host .mail-attachments .attachment .size {\n      font-size: 11px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/mail-details/mail-details.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var mail_model_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/mail.model.ts");
var store_1 = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var fromStore = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/index.ts");
var mail_service_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/mail.service.ts");
var FuseMailNgrxDetailsComponent = (function () {
    function FuseMailNgrxDetailsComponent(mailService, store) {
        this.mailService = mailService;
        this.store = store;
        this.showDetails = false;
        this.labels$ = this.store.select(fromStore.getLabelsArr);
    }
    FuseMailNgrxDetailsComponent.prototype.ngOnInit = function () {
    };
    FuseMailNgrxDetailsComponent.prototype.ngOnChanges = function () {
        this.updateModel(this.mailInput);
        this.markAsRead();
    };
    FuseMailNgrxDetailsComponent.prototype.markAsRead = function () {
        if (this.mail && !this.mail.read) {
            this.mail.markRead();
            this.updateMail();
        }
    };
    FuseMailNgrxDetailsComponent.prototype.toggleStar = function (event) {
        event.stopPropagation();
        this.mail.toggleStar();
        this.updateMail();
    };
    FuseMailNgrxDetailsComponent.prototype.toggleImportant = function (event) {
        event.stopPropagation();
        this.mail.toggleImportant();
        this.updateMail();
    };
    FuseMailNgrxDetailsComponent.prototype.updateModel = function (data) {
        this.mail = !data ? null : new mail_model_1.Mail(__assign({}, data));
    };
    FuseMailNgrxDetailsComponent.prototype.updateMail = function () {
        this.store.dispatch(new fromStore.UpdateMail(this.mail));
        this.updateModel(this.mail);
    };
    FuseMailNgrxDetailsComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        core_1.Input('mail'),
        __metadata("design:type", mail_model_1.Mail)
    ], FuseMailNgrxDetailsComponent.prototype, "mailInput", void 0);
    FuseMailNgrxDetailsComponent = __decorate([
        core_1.Component({
            selector: 'fuse-mail-details',
            template: __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/mail-details/mail-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/mail-details/mail-details.component.scss")],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [mail_service_1.MailNgrxService,
            store_1.Store])
    ], FuseMailNgrxDetailsComponent);
    return FuseMailNgrxDetailsComponent;
}());
exports.FuseMailNgrxDetailsComponent = FuseMailNgrxDetailsComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/mail-list/mail-list-item/mail-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n    <mat-checkbox [checked]=\"selected\" (change)=\"onSelectedChange()\"\n                  (click)=\"$event.stopPropagation();\">\n    </mat-checkbox>\n\n    <div class=\"info\" fxFlex FlexLayout=\"column\">\n\n        <div class=\"row-1\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <div class=\"name\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex>\n                <img class=\"avatar\" *ngIf=\"mail.from?.avatar\" alt=\"{{mail.from?.name}}\" src=\"{{mail.from?.avatar}}\"/>\n                <div class=\"avatar\" *ngIf=\"!mail.from?.avatar\">{{mail.from?.name[0]}}</div>\n                <span class=\"text-truncate\" *ngIf=\"mail?.from\">{{mail.from?.name}}</span>\n                <mat-icon *ngIf=\"mail.hasAttachments\">attachment</mat-icon>\n            </div>\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div class=\"time\">{{mail.time}}</div>\n            </div>\n\n        </div>\n\n        <div class=\"row-2\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n\n                <div class=\"subject text-truncate\">\n                    {{mail.subject}}\n                </div>\n\n                <div class=\"message text-truncate\" *ngIf=\"mail?.message\">\n                    {{mail.message | htmlToPlaintext | slice:0:180}}{{mail.message.length > 180 ? '...' : ''}}\n                </div>\n\n                <div class=\"labels\" fxLayout=\"row\" fxLayoutWrap fxHide fxShow.gt-sm>\n                    <div class=\"label\" *ngFor=\"let labelId of mail.labels\"\n                         fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <div class=\"label-color\"\n                             [ngStyle]=\"{'background-color': (labels$ | async) | getById:labelId:'color'}\"></div>\n                        <div class=\"label-title\">{{(labels$ | async) | getById:labelId:'title'}}</div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/mail-list/mail-list-item/mail-list-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n:host {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  position: relative;\n  padding: 16px 24px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  cursor: pointer;\n  background: #FAFAFA; }\n  :host.unread {\n    background: #FFFFFF; }\n    :host.unread .info .name {\n      font-weight: 700; }\n    :host.unread .info .row-2 .subject {\n      font-weight: 700; }\n    :host.unread .info .row-2 .labels {\n      background: #FFFFFF; }\n  :host.selected {\n    background: #FFF8E1; }\n    :host.selected .info .row-2 .labels {\n      background: #FFF8E1; }\n  :host.current-mail {\n    background: #E3F2FD; }\n    :host.current-mail .info .row-2 .labels {\n      background: #E3F2FD; }\n  :host .info {\n    overflow: hidden;\n    width: 0;\n    margin-left: 16px;\n    position: relative; }\n    :host .info .row-1 {\n      margin-bottom: 8px; }\n      :host .info .row-1 .name {\n        font-size: 15px;\n        font-weight: 500; }\n        :host .info .row-1 .name .avatar {\n          min-width: 32px;\n          width: 32px;\n          height: 32px;\n          line-height: 32px;\n          background-color: #039be5; }\n      :host .info .row-1 .actions {\n        margin-left: 4px; }\n        :host .info .row-1 .actions .mat-icon-button {\n          width: 32px;\n          height: 32px;\n          line-height: 1; }\n    :host .info .row-2 .subject,\n    :host .info .row-2 .message {\n      width: 100%; }\n    :host .info .row-2 .message {\n      position: relative;\n      color: rgba(0, 0, 0, 0.54); }\n    :host .info .row-2 .labels {\n      position: absolute;\n      background: #FFFFFF;\n      bottom: 0;\n      right: 0;\n      padding-left: 6px; }\n      :host .info .row-2 .labels .label {\n        font-size: 11px;\n        border-radius: 2px;\n        margin: 0 4px 0 0;\n        padding: 3px 8px;\n        background-color: rgba(0, 0, 0, 0.08); }\n        :host .info .row-2 .labels .label .label-color {\n          width: 8px;\n          height: 8px;\n          margin-right: 8px;\n          border-radius: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/mail-list/mail-list-item/mail-list-item.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var mail_model_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/mail.model.ts");
var mail_service_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/mail.service.ts");
var store_1 = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var fromStore = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/index.ts");
var FuseMailNgrxListItemComponent = (function () {
    function FuseMailNgrxListItemComponent(mailService, store, cd) {
        this.mailService = mailService;
        this.store = store;
        this.cd = cd;
        this.labels$ = this.store.select(fromStore.getLabelsArr);
        this.selectedMailIds$ = this.store.select(fromStore.getSelectedMailIds);
        this.selected = false;
    }
    FuseMailNgrxListItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set the initial values
        this.mail = new mail_model_1.Mail(this.mail);
        this.unread = !this.mail.read;
        this.selectedMailIds$.subscribe(function (selectedMailIds) {
            _this.selected = selectedMailIds.length > 0 && selectedMailIds.find(function (id) { return id === _this.mail.id; }) !== undefined;
            _this.refresh();
        });
    };
    FuseMailNgrxListItemComponent.prototype.refresh = function () {
        this.cd.markForCheck();
    };
    FuseMailNgrxListItemComponent.prototype.onSelectedChange = function () {
        this.store.dispatch(new fromStore.ToggleInSelectedMails(this.mail.id));
    };
    FuseMailNgrxListItemComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", mail_model_1.Mail)
    ], FuseMailNgrxListItemComponent.prototype, "mail", void 0);
    __decorate([
        core_1.HostBinding('class.selected'),
        __metadata("design:type", Boolean)
    ], FuseMailNgrxListItemComponent.prototype, "selected", void 0);
    __decorate([
        core_1.HostBinding('class.unread'),
        __metadata("design:type", Boolean)
    ], FuseMailNgrxListItemComponent.prototype, "unread", void 0);
    FuseMailNgrxListItemComponent = __decorate([
        core_1.Component({
            selector: 'fuse-mail-list-item',
            template: __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/mail-list/mail-list-item/mail-list-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/mail-list/mail-list-item/mail-list-item.component.scss")],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [mail_service_1.MailNgrxService,
            store_1.Store,
            core_1.ChangeDetectorRef])
    ], FuseMailNgrxListItemComponent);
    return FuseMailNgrxListItemComponent;
}());
exports.FuseMailNgrxListItemComponent = FuseMailNgrxListItemComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/mail-list/mail-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mails.length === 0\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlexFill>\n    <span class=\"no-messages-text hint-text\">{{ 'MAIL.NO_MESSAGES' | translate }}</span>\n</div>\n\n<div class=\"mail-list\">\n    <fuse-mail-list-item matRipple *ngFor=\"let mail of mails\" [mail]=\"mail\" (click)=\"readMail(mail.id)\"\n                         [ngClass]=\"{'current-mail':mail?.id == currentMail?.id}\">\n    </fuse-mail-list-item>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/mail-list/mail-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n  padding: 0;\n  border-right: 1px solid rgba(0, 0, 0, 0.12); }\n  :host .no-messages-text {\n    font-size: 24px;\n    font-weight: 300; }\n  :host .mail-list {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/mail-list/mail-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var mail_service_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/mail.service.ts");
var FuseMailNgrxListComponent = (function () {
    function FuseMailNgrxListComponent(route, mailService, router) {
        this.route = route;
        this.mailService = mailService;
        this.router = router;
    }
    FuseMailNgrxListComponent.prototype.ngOnInit = function () {
    };
    /**
     * Read mail
     * @param mailId
     */
    FuseMailNgrxListComponent.prototype.readMail = function (mailId) {
        var labelHandle = this.route.snapshot.params.labelHandle, filterHandle = this.route.snapshot.params.filterHandle, folderHandle = this.route.snapshot.params.folderHandle;
        if (labelHandle) {
            this.router.navigate(['apps/mail-ngrx/label/' + labelHandle + '/' + mailId]);
        }
        else if (filterHandle) {
            this.router.navigate(['apps/mail-ngrx/filter/' + filterHandle + '/' + mailId]);
        }
        else {
            this.router.navigate(['apps/mail-ngrx/' + folderHandle + '/' + mailId]);
        }
    };
    FuseMailNgrxListComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], FuseMailNgrxListComponent.prototype, "mails", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], FuseMailNgrxListComponent.prototype, "currentMail", void 0);
    FuseMailNgrxListComponent = __decorate([
        core_1.Component({
            selector: 'fuse-mail-list',
            template: __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/mail-list/mail-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/mail-list/mail-list.component.scss")],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            mail_service_1.MailNgrxService,
            router_1.Router])
    ], FuseMailNgrxListComponent);
    return FuseMailNgrxListComponent;
}());
exports.FuseMailNgrxListComponent = FuseMailNgrxListComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/mail.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"mail\" class=\"page-layout carded left-sidenav\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <mat-sidenav-container>\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav mat-sidenav-opened\" align=\"start\" mode=\"side\" opened=\"true\"\n                     fuseMatSidenavHelper=\"carded-left-sidenav\" mat-is-locked-open=\"gt-md\">\n            <fuse-mail-main-sidenav></fuse-mail-main-sidenav>\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- CONTENT HEADER -->\n            <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <div class=\"search-wrapper\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <button mat-button class=\"mat-icon-button sidenav-toggle\"\n                            fuseMatSidenavToggler=\"carded-left-sidenav\"\n                            fxHide.gt-md aria-label=\"Toggle Sidenav\">\n                        <mat-icon>menu</mat-icon>\n                    </button>\n\n                    <div class=\"search mat-white-bg\" flex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon>search</mat-icon>\n                        <input [formControl]=\"searchInput\" [placeholder]=\"'MAIL.SEARCH_PLACEHOLDER' | translate\" fxFlex>\n                    </div>\n                </div>\n            </div>\n            <!-- / CONTENT HEADER -->\n\n            <!-- CONTENT CARD -->\n            <div class=\"content-card mat-white-bg\" [ngClass]=\"{'current-mail-selected':currentMail$ | async}\">\n\n                <!-- CONTENT TOOLBAR -->\n                <div class=\"toolbar px-24 py-8\">\n\n                    <div class=\"mail-selection\" fxFlex=\"row\" fxLayoutAlign=\"start center\">\n\n                        <mat-checkbox (click)=\"toggleSelectAll($event)\"\n                                      [checked]=\"hasSelectedMails\"\n                                      [indeterminate]=\"isIndeterminate\">\n                        </mat-checkbox>\n\n                        <button mat-icon-button [matMenuTriggerFor]=\"selectMenu\">\n                            <mat-icon>arrow_drop_down</mat-icon>\n                        </button>\n                        <mat-menu #selectMenu=\"matMenu\">\n                            <button mat-menu-item (click)=\"selectAllMails()\">All</button>\n                            <button mat-menu-item (click)=\"deselectAllMails()\">None</button>\n                            <button mat-menu-item (click)=\"selectMailsByParameter('read', true)\">Read</button>\n                            <button mat-menu-item (click)=\"selectMailsByParameter('read', false)\">Unread</button>\n                            <button mat-menu-item (click)=\"selectMailsByParameter('starred', true)\">Starred</button>\n                            <button mat-menu-item (click)=\"selectMailsByParameter('starred', false)\">Unstarred</button>\n                            <button mat-menu-item (click)=\"selectMailsByParameter('important', true)\">Important</button>\n                            <button mat-menu-item (click)=\"selectMailsByParameter('important', false)\">Unimportant</button>\n                        </mat-menu>\n\n                        <div class=\"toolbar-separator\" *ngIf=\"hasSelectedMails\"></div>\n\n                        <button mat-icon-button (click)=\"setFolderOnSelectedMails(4)\" *ngIf=\"hasSelectedMails\">\n                            <mat-icon>delete</mat-icon>\n                        </button>\n\n                        <button mat-icon-button [matMenuTriggerFor]=\"folderMenu\" *ngIf=\"hasSelectedMails\">\n                            <mat-icon>folder</mat-icon>\n                        </button>\n                        <mat-menu #folderMenu=\"matMenu\">\n                            <button mat-menu-item *ngFor=\"let folder of folders$ | async\"\n                                    (click)=\"setFolderOnSelectedMails(folder.id)\">{{folder.title}}\n                            </button>\n                        </mat-menu>\n\n                        <button mat-icon-button [matMenuTriggerFor]=\"labelMenu\" *ngIf=\"hasSelectedMails\">\n                            <mat-icon>label</mat-icon>\n                        </button>\n                        <mat-menu #labelMenu=\"matMenu\">\n                            <button mat-menu-item *ngFor=\"let label of labels$ | async\"\n                                    (click)=\"toggleLabelOnSelectedMails(label.id)\">{{label.title}}\n                            </button>\n                        </mat-menu>\n                    </div>\n\n                    <div *ngIf=\"currentMail$ | async\" fxHide.gt-xs>\n                        <button mat-icon-button (click)=\"deSelectCurrentMail()\">\n                            <mat-icon>arrow_back</mat-icon>\n                        </button>\n                    </div>\n                </div>\n                <!-- / CONTENT TOOLBAR -->\n\n                <!-- CONTENT -->\n                <div class=\"content\" fxLayoutAlign=\"row\">\n\n                    <fuse-mail-list fusePerfectScrollbar fxFlex [mails]=\"mails$ | async\" [currentMail]=\"currentMail$ | async\"></fuse-mail-list>\n\n                    <fuse-mail-details [mail]=\"currentMail$ | async\" fusePerfectScrollbar fxFlex></fuse-mail-details>\n\n                </div>\n                <!-- / CONTENT -->\n\n            </div>\n            <!-- / CONTENT CARD -->\n\n        </div>\n        <!-- / CENTER -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/mail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n:host {\n  width: 100%; }\n  :host .center .header .search-wrapper {\n    box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n    :host .center .header .search-wrapper .sidenav-toggle {\n      margin: 0;\n      width: 56px;\n      height: 56px;\n      background: #FFF;\n      border-radius: 0;\n      border-right: 1px solid rgba(0, 0, 0, 0.12); }\n    :host .center .header .search-wrapper .search {\n      width: 100%;\n      height: 56px;\n      line-height: 56px;\n      padding: 18px; }\n      :host .center .header .search-wrapper .search input {\n        height: 56px;\n        padding-left: 16px;\n        color: rgba(0, 0, 0, 0.54);\n        border: none;\n        outline: none; }\n  @media screen and (max-width: 599px) {\n    :host .center .content-card fuse-mail-list {\n      border-right: none; }\n    :host .center .content-card fuse-mail-list,\n    :host .center .content-card fuse-mail-details {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0 100%;\n              flex: 1 0 100%; }\n    :host .center .content-card fuse-mail-details {\n      display: none !important; }\n    :host .center .content-card.current-mail-selected .toolbar {\n      padding-left: 16px !important; }\n      :host .center .content-card.current-mail-selected .toolbar .mail-selection {\n        display: none !important; }\n    :host .center .content-card.current-mail-selected .content fuse-mail-list {\n      display: none !important; }\n    :host .center .content-card.current-mail-selected .content fuse-mail-details {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/mail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var mail_service_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/mail.service.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var translation_loader_service_1 = __webpack_require__("../../../../../src/app/core/services/translation-loader.service.ts");
var en_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/i18n/en.ts");
var tr_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/i18n/tr.ts");
var store_1 = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
var fromStore = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/index.ts");
var config_service_1 = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
var FuseMailNgrxComponent = (function () {
    function FuseMailNgrxComponent(configService, mailService, translationLoader, store, cd) {
        this.configService = configService;
        this.mailService = mailService;
        this.translationLoader = translationLoader;
        this.store = store;
        this.cd = cd;
        this.searchInput = new forms_1.FormControl('');
        this.translationLoader.loadTranslations(en_1.locale, tr_1.locale);
        this.currentMail$ = this.store.select(fromStore.getCurrentMail);
        this.mails$ = this.store.select(fromStore.getMailsArr);
        this.folders$ = this.store.select(fromStore.getFoldersArr);
        this.labels$ = this.store.select(fromStore.getLabelsArr);
        this.selectedMailIds$ = this.store.select(fromStore.getSelectedMailIds);
        this.searchText$ = this.store.select(fromStore.getSearchText);
        this.mails = [];
        this.selectedMailIds = [];
        this.configService.setSettings({
            routerAnimation: 'none'
        });
    }
    FuseMailNgrxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mails$.subscribe(function (mails) {
            _this.mails = mails;
        });
        this.selectedMailIds$
            .subscribe(function (selectedMailIds) {
            _this.selectedMailIds = selectedMailIds;
            _this.hasSelectedMails = selectedMailIds.length > 0;
            _this.isIndeterminate = (selectedMailIds.length !== _this.mails.length && selectedMailIds.length > 0);
            _this.refresh();
        });
        this.searchText$.subscribe(function (searchText) {
            _this.searchInput.setValue(searchText);
        });
        this.searchInput.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(function (searchText) {
            _this.store.dispatch(new fromStore.SetSearchText(searchText));
        });
    };
    FuseMailNgrxComponent.prototype.toggleSelectAll = function (ev) {
        ev.preventDefault();
        if (this.selectedMailIds.length && this.selectedMailIds.length > 0) {
            this.deselectAllMails();
        }
        else {
            this.selectAllMails();
        }
    };
    FuseMailNgrxComponent.prototype.selectAllMails = function () {
        this.store.dispatch(new fromStore.SelectAllMails());
    };
    FuseMailNgrxComponent.prototype.deselectAllMails = function () {
        this.store.dispatch(new fromStore.DeselectAllMails());
    };
    FuseMailNgrxComponent.prototype.selectMailsByParameter = function (parameter, value) {
        this.store.dispatch(new fromStore.SelectMailsByParameter({
            parameter: parameter,
            value: value
        }));
    };
    FuseMailNgrxComponent.prototype.toggleLabelOnSelectedMails = function (labelId) {
        this.store.dispatch(new fromStore.AddLabelOnSelectedMails(labelId));
    };
    FuseMailNgrxComponent.prototype.setFolderOnSelectedMails = function (folderId) {
        this.store.dispatch(new fromStore.SetFolderOnSelectedMails(folderId));
    };
    FuseMailNgrxComponent.prototype.deSelectCurrentMail = function () {
        this.store.dispatch(new fromStore.SetCurrentMail(''));
    };
    FuseMailNgrxComponent.prototype.refresh = function () {
        this.cd.markForCheck();
    };
    FuseMailNgrxComponent.prototype.ngOnDestroy = function () {
        this.cd.detach();
    };
    FuseMailNgrxComponent = __decorate([
        core_1.Component({
            selector: 'fuse-mail',
            template: __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/mail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/mail.component.scss")],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [config_service_1.FuseConfigService,
            mail_service_1.MailNgrxService,
            translation_loader_service_1.FuseTranslationLoaderService,
            store_1.Store,
            core_1.ChangeDetectorRef])
    ], FuseMailNgrxComponent);
    return FuseMailNgrxComponent;
}());
exports.FuseMailNgrxComponent = FuseMailNgrxComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/mail.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Mail = (function () {
    function Mail(mail) {
        this.id = mail.id;
        this.from = mail.from;
        this.to = mail.to;
        this.subject = mail.subject;
        this.message = mail.message;
        this.time = mail.time;
        this.read = mail.read;
        this.starred = mail.starred;
        this.important = mail.important;
        this.hasAttachments = mail.hasAttachments;
        this.attachments = mail.attachments;
        this.labels = mail.labels;
        this.folder = mail.folder;
    }
    Mail.prototype.toggleStar = function () {
        this.starred = !this.starred;
    };
    Mail.prototype.toggleImportant = function () {
        this.important = !this.important;
    };
    Mail.prototype.markRead = function () {
        this.read = true;
    };
    Mail.prototype.markUnRead = function () {
        this.read = false;
    };
    return Mail;
}());
exports.Mail = Mail;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/mail.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var shared_module_1 = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var mail_component_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/mail.component.ts");
var main_sidenav_component_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/sidenavs/main/main-sidenav.component.ts");
var mail_list_item_component_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/mail-list/mail-list-item/mail-list-item.component.ts");
var mail_list_component_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/mail-list/mail-list.component.ts");
var mail_details_component_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/mail-details/mail-details.component.ts");
var mail_service_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/mail.service.ts");
var compose_component_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/dialogs/compose/compose.component.ts");
var store_module_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/store.module.ts");
var fromGuards = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/guards/index.ts");
var routes = [
    {
        path: 'label/:labelHandle',
        component: mail_component_1.FuseMailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path: 'label/:labelHandle/:mailId',
        component: mail_component_1.FuseMailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path: 'filter/:filterHandle',
        component: mail_component_1.FuseMailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path: 'filter/:filterHandle/:mailId',
        component: mail_component_1.FuseMailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path: ':folderHandle',
        component: mail_component_1.FuseMailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path: ':folderHandle/:mailId',
        component: mail_component_1.FuseMailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path: '**',
        redirectTo: 'inbox'
    }
];
var FuseMailNgrxModule = (function () {
    function FuseMailNgrxModule() {
    }
    FuseMailNgrxModule = __decorate([
        core_1.NgModule({
            declarations: [
                mail_component_1.FuseMailNgrxComponent,
                mail_list_component_1.FuseMailNgrxListComponent,
                mail_list_item_component_1.FuseMailNgrxListItemComponent,
                mail_details_component_1.FuseMailNgrxDetailsComponent,
                main_sidenav_component_1.FuseMailNgrxMainSidenavComponent,
                compose_component_1.FuseMailNgrxComposeDialogComponent
            ],
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes),
                store_module_1.MailAppStoreModule
            ],
            providers: [
                mail_service_1.MailNgrxService,
                fromGuards.ResolveGuard
            ],
            entryComponents: [compose_component_1.FuseMailNgrxComposeDialogComponent]
        })
    ], FuseMailNgrxModule);
    return FuseMailNgrxModule;
}());
exports.FuseMailNgrxModule = FuseMailNgrxModule;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/mail.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var selectors_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/selectors/index.ts");
var MailNgrxService = (function () {
    function MailNgrxService(http, store) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.store.select(selectors_1.getFoldersArr).subscribe(function (folders) {
            _this.foldersArr = folders;
        });
        this.store.select(selectors_1.getFiltersArr).subscribe(function (filters) {
            _this.filtersArr = filters;
        });
        this.store.select(selectors_1.getLabelsArr).subscribe(function (labels) {
            _this.labelsArr = labels;
        });
        this.store.select(selectors_1.getMailsArr).subscribe(function (mails) {
            _this.mails = mails;
        });
        this.selectedMails = [];
    }
    MailNgrxService.prototype.getAllMails = function () {
        return this.http.get('api/mail-mails');
    };
    MailNgrxService.prototype.getFolders = function () {
        return this.http.get('api/mail-folders');
    };
    MailNgrxService.prototype.getFilters = function () {
        return this.http.get('api/mail-filters');
    };
    MailNgrxService.prototype.getLabels = function () {
        return this.http.get('api/mail-labels');
    };
    MailNgrxService.prototype.getMails = function (handle) {
        if (handle.id === 'labelHandle') {
            var labelId = this.labelsArr.find(function (label) { return label.handle === handle.value; }).id;
            return this.http.get('api/mail-mails?labels=' + labelId);
        }
        else if (handle.id === 'filterHandle') {
            return this.http.get('api/mail-mails?' + handle.value + '=true');
        }
        else {
            var folderId = this.foldersArr.find(function (folder) { return folder.handle === handle.value; }).id;
            return this.http.get('api/mail-mails?folder=' + folderId);
        }
    };
    /**
     * Update the mail
     * @param mail
     * @returns {Promise<any>}
     */
    MailNgrxService.prototype.updateMail = function (mail) {
        return this.http.post('api/mail-mails/' + mail.id, __assign({}, mail));
    };
    MailNgrxService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            store_1.Store])
    ], MailNgrxService);
    return MailNgrxService;
}());
exports.MailNgrxService = MailNgrxService;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/sidenavs/main/main-sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- SIDENAV HEADER -->\n<div fxLayout=\"column\" fxLayoutAlign=\"space-between start\"\n     class=\"header p-24 pb-4\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\n\n    <div class=\"logo\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <mat-icon class=\"logo-icon s-32\">mail</mat-icon>\n        <span class=\"logo-text\">Mailbox Ngrx</span>\n    </div>\n\n    <div class=\"account\" fxLayout=\"column\">\n        <div class=\"title\">John Doe</div>\n        <mat-form-field floatPlaceholder=\"never\">\n            <mat-select class=\"account-selection\" placeholder=\"Mail Selection\"\n                        [ngModel]=\"selectedAccount\">\n                <mat-option *ngFor=\"let account of (accounts | keys)\" [value]=\"account.key\">\n                    {{account.value}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n\n</div>\n<!-- / SIDENAV HEADER -->\n\n<!-- SIDENAV CONTENT -->\n<div class=\"content\" fusePerfectScrollbar>\n\n    <div class=\"p-24\">\n        <button mat-raised-button fxFlex\n                class=\"mat-accent compose-dialog-button\"\n                (click)=\"composeDialog()\"\n                aria-label=\"Compose\">\n            {{ 'MAIL.COMPOSE' | translate }}\n        </button>\n    </div>\n\n    <div class=\"nav\">\n\n        <div class=\"nav-subheader\">{{ 'MAIL.FOLDERS' | translate }}</div>\n\n        <div class=\"nav-item\" *ngFor=\"let folder of (folders$ | async)\">\n            <a class=\"nav-link\" matRipple [routerLink]=\"'/apps/mail-ngrx/' + folder.handle\" routerLinkActive=\"active\">\n                <mat-icon class=\"nav-link-icon\" *ngIf=\"folder.icon\">{{folder.icon}}</mat-icon>\n                <span>{{folder.title}}</span>\n            </a>\n        </div>\n\n        <div class=\"nav-subheader\">{{ 'MAIL.FILTERS' | translate }}</div>\n\n        <div class=\"nav-item\" *ngFor=\"let filter of (filters$ | async)\">\n            <a class=\"nav-link\" matRipple [routerLink]=\"'/apps/mail-ngrx/filter/' + filter.handle\" routerLinkActive=\"active\">\n                <mat-icon class=\"nav-link-icon\" *ngIf=\"filter.icon\">{{filter.icon}}</mat-icon>\n                <span>{{filter.title}}</span>\n            </a>\n        </div>\n\n        <div class=\"nav-subheader\">{{ 'MAIL.LABELS' | translate }}</div>\n\n        <div class=\"nav-item\" *ngFor=\"let label of (labels$ | async)\">\n            <a class=\"nav-link\" matRipple [routerLink]=\"'/apps/mail-ngrx/label/' + label.handle\" routerLinkActive=\"active\">\n                <mat-icon class=\"nav-link-icon\" [ngStyle]=\"{'color':label.color}\">label</mat-icon>\n                <span>{{label.title}}</span>\n            </a>\n        </div>\n\n    </div>\n\n</div>\n<!-- / SIDENAV CONTENT -->\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/sidenavs/main/main-sidenav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%; }\n  :host .header .logo .logo-icon {\n    margin: 0 16px 0 0; }\n  :host .header .logo .logo-text {\n    font-size: 24px;\n    line-height: 24px; }\n  :host .header .account {\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/sidenavs/main/main-sidenav.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var compose_component_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/dialogs/compose/compose.component.ts");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var fromStore = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/index.ts");
var mail_service_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/mail.service.ts");
var FuseMailNgrxMainSidenavComponent = (function () {
    function FuseMailNgrxMainSidenavComponent(mailService, dialog, store) {
        this.mailService = mailService;
        this.dialog = dialog;
        this.store = store;
        // Data
        this.accounts = {
            'creapond': 'johndoe@creapond.com',
            'withinpixels': 'johndoe@withinpixels.com'
        };
        this.selectedAccount = 'creapond';
        this.folders$ = this.store.select(fromStore.getFoldersArr);
        this.filters$ = this.store.select(fromStore.getFiltersArr);
        this.labels$ = this.store.select(fromStore.getLabelsArr);
    }
    FuseMailNgrxMainSidenavComponent.prototype.ngOnInit = function () {
    };
    FuseMailNgrxMainSidenavComponent.prototype.composeDialog = function () {
        this.dialogRef = this.dialog.open(compose_component_1.FuseMailNgrxComposeDialogComponent, {
            panelClass: 'mail-compose-dialog'
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            var actionType = response[0];
            var formData = response[1];
            switch (actionType) {
                /**
                 * Send
                 */
                case 'send':
                    console.log('new Mail', formData.getRawValue());
                    break;
                /**
                 * Delete
                 */
                case 'delete':
                    console.log('delete Mail');
                    break;
            }
        });
    };
    FuseMailNgrxMainSidenavComponent.prototype.ngOnDestroy = function () {
    };
    FuseMailNgrxMainSidenavComponent = __decorate([
        core_1.Component({
            selector: 'fuse-mail-main-sidenav',
            template: __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/sidenavs/main/main-sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/sidenavs/main/main-sidenav.component.scss")],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [mail_service_1.MailNgrxService,
            material_1.MatDialog,
            store_1.Store])
    ], FuseMailNgrxMainSidenavComponent);
    return FuseMailNgrxMainSidenavComponent;
}());
exports.FuseMailNgrxMainSidenavComponent = FuseMailNgrxMainSidenavComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/store/actions/filters.actions.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_FILTERS = '[FILTERS] GET FILTERS';
exports.GET_FILTERS_SUCCESS = '[FILTERS] GET FILTERS SUCCESS';
exports.GET_FILTERS_FAILED = '[FILTERS] GET FILTERS FAILED';
/**
 * Get Filters
 */
var GetFilters = (function () {
    function GetFilters(payload) {
        this.payload = payload;
        this.type = exports.GET_FILTERS;
    }
    return GetFilters;
}());
exports.GetFilters = GetFilters;
/**
 * Get Filters Success
 */
var GetFiltersSuccess = (function () {
    function GetFiltersSuccess(payload) {
        this.payload = payload;
        this.type = exports.GET_FILTERS_SUCCESS;
    }
    return GetFiltersSuccess;
}());
exports.GetFiltersSuccess = GetFiltersSuccess;
/**
 * Get Filters Failed
 */
var GetFiltersFailed = (function () {
    function GetFiltersFailed(payload) {
        this.payload = payload;
        this.type = exports.GET_FILTERS_FAILED;
    }
    return GetFiltersFailed;
}());
exports.GetFiltersFailed = GetFiltersFailed;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/store/actions/folders.actions.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_FOLDERS = '[FOLDERS] GET FOLDERS';
exports.GET_FOLDERS_SUCCESS = '[FOLDERS] GET FOLDERS SUCCESS';
exports.GET_FOLDERS_FAILED = '[FOLDERS] GET FOLDERS FAILED';
/**
 * Get Folders
 */
var GetFolders = (function () {
    function GetFolders(payload) {
        this.payload = payload;
        this.type = exports.GET_FOLDERS;
    }
    return GetFolders;
}());
exports.GetFolders = GetFolders;
/**
 * Get Folders Success
 */
var GetFoldersSuccess = (function () {
    function GetFoldersSuccess(payload) {
        this.payload = payload;
        this.type = exports.GET_FOLDERS_SUCCESS;
    }
    return GetFoldersSuccess;
}());
exports.GetFoldersSuccess = GetFoldersSuccess;
/**
 * Get Folders Failed
 */
var GetFoldersFailed = (function () {
    function GetFoldersFailed(payload) {
        this.payload = payload;
        this.type = exports.GET_FOLDERS_FAILED;
    }
    return GetFoldersFailed;
}());
exports.GetFoldersFailed = GetFoldersFailed;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/store/actions/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/actions/mails.actions.ts"));
__export(__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/actions/folders.actions.ts"));
__export(__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/actions/filters.actions.ts"));
__export(__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/actions/labels.actions.ts"));


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/store/actions/labels.actions.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_LABELS = '[LABELS] GET LABELS';
exports.GET_LABELS_SUCCESS = '[LABELS] GET LABELS SUCCESS';
exports.GET_LABELS_FAILED = '[LABELS] GET LABELS FAILED';
/**
 * Get Labels
 */
var GetLabels = (function () {
    function GetLabels(payload) {
        this.payload = payload;
        this.type = exports.GET_LABELS;
    }
    return GetLabels;
}());
exports.GetLabels = GetLabels;
/**
 * Get Labels Success
 */
var GetLabelsSuccess = (function () {
    function GetLabelsSuccess(payload) {
        this.payload = payload;
        this.type = exports.GET_LABELS_SUCCESS;
    }
    return GetLabelsSuccess;
}());
exports.GetLabelsSuccess = GetLabelsSuccess;
/**
 * Get Labels Failed
 */
var GetLabelsFailed = (function () {
    function GetLabelsFailed(payload) {
        this.payload = payload;
        this.type = exports.GET_LABELS_FAILED;
    }
    return GetLabelsFailed;
}());
exports.GetLabelsFailed = GetLabelsFailed;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/store/actions/mails.actions.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_MAILS = '[MAILS] GET MAILS';
exports.GET_MAILS_SUCCESS = '[MAILS] GET MAILS SUCCESS';
exports.GET_MAILS_FAILED = '[MAILS] GET MAILS FAILED';
exports.SET_CURRENT_MAIL = '[MAILS] SET CURRENT MAIL';
exports.SET_CURRENT_MAIL_SUCCESS = '[MAILS] SET CURRENT MAIL SUCCESS';
exports.CHECK_CURRENT_MAIL = '[MAILS] CHECK CURRENT MAIL';
exports.UPDATE_MAIL = '[MAILS] UPDATE MAIL';
exports.UPDATE_MAIL_SUCCESS = '[MAILS] UPDATE MAIL SUCCESS';
exports.UPDATE_MAILS = '[MAILS] UPDATE MAILS';
exports.UPDATE_MAILS_SUCCESS = '[MAILS] UPDATE MAILS SUCCESS';
exports.SET_SEARCH_TEXT = '[MAILS] SET SEARCH TEXT';
exports.SELECT_ALL_MAILS = '[MAILS] SELECT ALL MAILS';
exports.DESELECT_ALL_MAILS = '[MAILS] DESELECT ALL MAILS';
exports.TOGGLE_IN_SELECTED_MAILS = '[MAILS] TOGGLE IN SELECTED MAILS';
exports.SELECT_MAILS_BY_PARAMETER = '[MAILS] SELECT MAILS BY PARAMETER';
exports.SET_FOLDER_ON_SELECTED_MAILS = '[MAILS] SET FOLDER ON SELECTED MAILS';
exports.ADD_LABEL_ON_SELECTED_MAILS = '[MAILS] ADD LABEL ON SELECTED MAILS';
/**
 * Get Mails
 */
var GetMails = (function () {
    function GetMails() {
        this.type = exports.GET_MAILS;
    }
    return GetMails;
}());
exports.GetMails = GetMails;
/**
 * Get Mails Success
 */
var GetMailsSuccess = (function () {
    function GetMailsSuccess(payload) {
        this.payload = payload;
        this.type = exports.GET_MAILS_SUCCESS;
    }
    return GetMailsSuccess;
}());
exports.GetMailsSuccess = GetMailsSuccess;
/**
 * Get Mails Failed
 */
var GetMailsFailed = (function () {
    function GetMailsFailed(payload) {
        this.payload = payload;
        this.type = exports.GET_MAILS_FAILED;
    }
    return GetMailsFailed;
}());
exports.GetMailsFailed = GetMailsFailed;
/**
 * Set Current Mail
 */
var SetCurrentMail = (function () {
    function SetCurrentMail(payload) {
        this.payload = payload;
        this.type = exports.SET_CURRENT_MAIL;
    }
    return SetCurrentMail;
}());
exports.SetCurrentMail = SetCurrentMail;
/**
 * Set Current Mail Success
 */
var SetCurrentMailSuccess = (function () {
    function SetCurrentMailSuccess(payload) {
        this.payload = payload;
        this.type = exports.SET_CURRENT_MAIL_SUCCESS;
    }
    return SetCurrentMailSuccess;
}());
exports.SetCurrentMailSuccess = SetCurrentMailSuccess;
/**
 * Check Current Mail
 */
var CheckCurrentMail = (function () {
    function CheckCurrentMail() {
        this.type = exports.CHECK_CURRENT_MAIL;
    }
    return CheckCurrentMail;
}());
exports.CheckCurrentMail = CheckCurrentMail;
/**
 * Update Mail
 */
var UpdateMail = (function () {
    function UpdateMail(payload) {
        this.payload = payload;
        this.type = exports.UPDATE_MAIL;
    }
    return UpdateMail;
}());
exports.UpdateMail = UpdateMail;
/**
 * Update Mail Success
 */
var UpdateMailSuccess = (function () {
    function UpdateMailSuccess(payload) {
        this.payload = payload;
        this.type = exports.UPDATE_MAIL_SUCCESS;
    }
    return UpdateMailSuccess;
}());
exports.UpdateMailSuccess = UpdateMailSuccess;
/**
 * Update Mails
 */
var UpdateMails = (function () {
    function UpdateMails(payload) {
        this.payload = payload;
        this.type = exports.UPDATE_MAILS;
    }
    return UpdateMails;
}());
exports.UpdateMails = UpdateMails;
/**
 * Update Mails Success
 */
var UpdateMailsSuccess = (function () {
    function UpdateMailsSuccess() {
        this.type = exports.UPDATE_MAILS_SUCCESS;
    }
    return UpdateMailsSuccess;
}());
exports.UpdateMailsSuccess = UpdateMailsSuccess;
/**
 * Set Search Text
 */
var SetSearchText = (function () {
    function SetSearchText(payload) {
        this.payload = payload;
        this.type = exports.SET_SEARCH_TEXT;
    }
    return SetSearchText;
}());
exports.SetSearchText = SetSearchText;
/**
 * Select All Mails
 */
var SelectAllMails = (function () {
    function SelectAllMails() {
        this.type = exports.SELECT_ALL_MAILS;
    }
    return SelectAllMails;
}());
exports.SelectAllMails = SelectAllMails;
/**
 * Deselect All Mails
 */
var DeselectAllMails = (function () {
    function DeselectAllMails() {
        this.type = exports.DESELECT_ALL_MAILS;
    }
    return DeselectAllMails;
}());
exports.DeselectAllMails = DeselectAllMails;
/**
 * Toggle In Selected Mails
 */
var ToggleInSelectedMails = (function () {
    function ToggleInSelectedMails(payload) {
        this.payload = payload;
        this.type = exports.TOGGLE_IN_SELECTED_MAILS;
    }
    return ToggleInSelectedMails;
}());
exports.ToggleInSelectedMails = ToggleInSelectedMails;
/**
 * Select Mails by Parameter
 */
var SelectMailsByParameter = (function () {
    function SelectMailsByParameter(payload) {
        this.payload = payload;
        this.type = exports.SELECT_MAILS_BY_PARAMETER;
    }
    return SelectMailsByParameter;
}());
exports.SelectMailsByParameter = SelectMailsByParameter;
/**
 * Set Folder on Selected Mails
 */
var SetFolderOnSelectedMails = (function () {
    function SetFolderOnSelectedMails(payload) {
        this.payload = payload;
        this.type = exports.SET_FOLDER_ON_SELECTED_MAILS;
    }
    return SetFolderOnSelectedMails;
}());
exports.SetFolderOnSelectedMails = SetFolderOnSelectedMails;
/**
 * Add label on Selected Mails
 */
var AddLabelOnSelectedMails = (function () {
    function AddLabelOnSelectedMails(payload) {
        this.payload = payload;
        this.type = exports.ADD_LABEL_ON_SELECTED_MAILS;
    }
    return AddLabelOnSelectedMails;
}());
exports.AddLabelOnSelectedMails = AddLabelOnSelectedMails;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/store/effects/filters.effects.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var effects_1 = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var of_1 = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var operators_1 = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var FiltersActions = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/actions/filters.actions.ts");
var mail_service_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/mail.service.ts");
var FiltersEffect = (function () {
    function FiltersEffect(actions, mailService) {
        var _this = this;
        this.actions = actions;
        this.mailService = mailService;
        /**
         * Get filters from Server
         * @type {Observable<any>}
         */
        this.getFilters = this.actions
            .ofType(FiltersActions.GET_FILTERS)
            .pipe(operators_1.switchMap(function (action) {
            return _this.mailService.getFilters()
                .pipe(operators_1.map(function (filters) {
                return new FiltersActions.GetFiltersSuccess(filters);
            }), operators_1.catchError(function (err) { return of_1.of(new FiltersActions.GetFiltersFailed(err)); }));
        }));
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Observable_1.Observable)
    ], FiltersEffect.prototype, "getFilters", void 0);
    FiltersEffect = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions,
            mail_service_1.MailNgrxService])
    ], FiltersEffect);
    return FiltersEffect;
}());
exports.FiltersEffect = FiltersEffect;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/store/effects/folders.effects.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var effects_1 = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var of_1 = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var operators_1 = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var FoldersActions = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/actions/folders.actions.ts");
var mail_service_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/mail.service.ts");
var FoldersEffect = (function () {
    function FoldersEffect(actions, mailService) {
        var _this = this;
        this.actions = actions;
        this.mailService = mailService;
        /**
         * Get Folders from Server
         * @type {Observable<any>}
         */
        this.getFolders = this.actions
            .ofType(FoldersActions.GET_FOLDERS)
            .pipe(operators_1.switchMap(function (action) {
            return _this.mailService.getFolders()
                .pipe(operators_1.map(function (folders) {
                return new FoldersActions.GetFoldersSuccess(folders);
            }), operators_1.catchError(function (err) { return of_1.of(new FoldersActions.GetFoldersFailed(err)); }));
        }));
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Observable_1.Observable)
    ], FoldersEffect.prototype, "getFolders", void 0);
    FoldersEffect = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions,
            mail_service_1.MailNgrxService])
    ], FoldersEffect);
    return FoldersEffect;
}());
exports.FoldersEffect = FoldersEffect;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/store/effects/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var mails_effects_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/effects/mails.effects.ts");
var folders_effects_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/effects/folders.effects.ts");
var filters_effects_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/effects/filters.effects.ts");
var labels_effects_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/effects/labels.effects.ts");
exports.effects = [
    mails_effects_1.MailsEffect,
    folders_effects_1.FoldersEffect,
    filters_effects_1.FiltersEffect,
    labels_effects_1.LabelsEffect
];
__export(__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/effects/mails.effects.ts"));
__export(__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/effects/folders.effects.ts"));
__export(__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/effects/filters.effects.ts"));
__export(__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/effects/labels.effects.ts"));


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/store/effects/labels.effects.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var effects_1 = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var of_1 = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var operators_1 = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var LabelsActions = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/actions/labels.actions.ts");
var mail_service_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/mail.service.ts");
var LabelsEffect = (function () {
    function LabelsEffect(actions, mailService) {
        var _this = this;
        this.actions = actions;
        this.mailService = mailService;
        /**
         * Get Labels from Server
         * @type {Observable<any>}
         */
        this.getLabels = this.actions
            .ofType(LabelsActions.GET_LABELS)
            .pipe(operators_1.switchMap(function (action) {
            return _this.mailService.getLabels()
                .pipe(operators_1.map(function (labels) {
                return new LabelsActions.GetLabelsSuccess(labels);
            }), operators_1.catchError(function (err) { return of_1.of(new LabelsActions.GetLabelsFailed(err)); }));
        }));
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Observable_1.Observable)
    ], LabelsEffect.prototype, "getLabels", void 0);
    LabelsEffect = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions,
            mail_service_1.MailNgrxService])
    ], LabelsEffect);
    return LabelsEffect;
}());
exports.LabelsEffect = LabelsEffect;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/store/effects/mails.effects.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var effects_1 = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var of_1 = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var operators_1 = __webpack_require__("../../../../rxjs/_esm5/operators.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
var reducers_1 = __webpack_require__("../../../../../src/app/store/reducers/index.ts");
var selectors_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/selectors/index.ts");
var MailsActions = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/actions/mails.actions.ts");
var fromRoot = __webpack_require__("../../../../../src/app/store/index.ts");
var mail_service_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/mail.service.ts");
var MailsEffect = (function () {
    function MailsEffect(actions, mailService, store) {
        var _this = this;
        this.actions = actions;
        this.mailService = mailService;
        this.store = store;
        /**
         * Get Mails with router parameters
         * @type {Observable<any>}
         */
        this.getMails = this.actions
            .ofType(MailsActions.GET_MAILS)
            .pipe(operators_1.exhaustMap(function (action) {
            var handle = {
                id: '',
                value: ''
            };
            var routeParams = Observable_1.Observable.of('labelHandle', 'filterHandle', 'folderHandle');
            routeParams.subscribe(function (param) {
                if (_this.routerState.params[param]) {
                    handle = {
                        id: param,
                        value: _this.routerState.params[param]
                    };
                }
            });
            return _this.mailService.getMails(handle)
                .map(function (mails) {
                return new MailsActions.GetMailsSuccess({
                    loaded: handle,
                    mails: mails
                });
            })
                .catch(function (err) { return of_1.of(new MailsActions.GetMailsFailed(err)); });
        }));
        /**
         * Update Mail
         * @type {Observable<any>}
         */
        this.updateMail = this.actions
            .ofType(MailsActions.UPDATE_MAIL)
            .pipe(operators_1.exhaustMap(function (action) {
            return _this.mailService.updateMail(action.payload)
                .map(function () {
                return new MailsActions.UpdateMailSuccess(action.payload);
            });
        }));
        /**
         * UpdateMails
         * @type {Observable<any>}
         */
        this.updateMails = this.actions
            .ofType(MailsActions.UPDATE_MAILS)
            .pipe(operators_1.exhaustMap(function (action) {
            return Observable_1.Observable.forkJoin(action.payload.map(function (mail) { return _this.mailService.updateMail(mail); }), function () {
                return new MailsActions.UpdateMailsSuccess();
            });
        }));
        /**
         * Set Current Mail
         * @type {Observable<SetCurrentMailSuccess>}
         */
        this.setCurrentMail = this.actions
            .ofType(MailsActions.SET_CURRENT_MAIL)
            .pipe(operators_1.withLatestFrom(this.store.select(selectors_1.getMailsState)), operators_1.map(function (_a) {
            var action = _a[0], state = _a[1];
            return new MailsActions.SetCurrentMailSuccess(state.entities[action.payload]);
        }));
        /**
         * Check Current Mail
         * Navigate to parent directory if not exist in mail list
         * Update Current Mail if exist in mail list
         * @type {Observable<any>}
         */
        this.checkCurrentMail = this.actions
            .ofType(MailsActions.CHECK_CURRENT_MAIL)
            .pipe(operators_1.withLatestFrom(this.store.select(selectors_1.getMailsState)), operators_1.map(function (_a) {
            var action = _a[0], state = _a[1];
            if (!state.entities[_this.routerState.params.mailId]) {
                return new fromRoot.Go({ path: [_this.routerState.url.replace(_this.routerState.params.mailId, '')] });
            }
            return new MailsActions.SetCurrentMailSuccess(state.entities[_this.routerState.params.mailId]);
        }));
        /**
         * On Get Mails Success
         * @type {Observable<CheckCurrentMail>}
         */
        this.getMailsSuccess = this.actions
            .ofType(MailsActions.GET_MAILS_SUCCESS)
            .pipe(operators_1.mergeMap(function () {
            return [
                new MailsActions.CheckCurrentMail()
            ];
        }));
        /**
         * On Update Mails Success
         * @type {Observable<DeselectAllMails | GetMails>}
         */
        this.updateMailsSuccess = this.actions
            .ofType(MailsActions.UPDATE_MAILS_SUCCESS)
            .pipe(operators_1.mergeMap(function () {
            return [
                new MailsActions.DeselectAllMails(),
                new MailsActions.GetMails()
            ];
        }));
        /**
         * On Update Mail Success
         * @type {Observable<GetMails>}
         */
        this.updateMailSuccess = this.actions
            .ofType(MailsActions.UPDATE_MAIL_SUCCESS)
            .debounceTime(500)
            .pipe(operators_1.map(function () {
            return new MailsActions.GetMails();
        }));
        /**
         * Set Folder on Selected Mails
         * @type {Observable<UpdateMails>}
         */
        this.setFolderOnSelectedMails = this.actions
            .ofType(MailsActions.SET_FOLDER_ON_SELECTED_MAILS)
            .pipe(operators_1.withLatestFrom(this.store.select(selectors_1.getMailsState)), operators_1.map(function (_a) {
            var action = _a[0], state = _a[1];
            var entities = __assign({}, state.entities);
            var mailsToUpdate = [];
            state.selectedMailIds
                .map(function (id) {
                mailsToUpdate = mailsToUpdate.concat([
                    entities[id] = __assign({}, entities[id], { folder: action.payload })
                ]);
            });
            return new MailsActions.UpdateMails(mailsToUpdate);
        }));
        /**
         * Add Label on Selected Mails
         * @type {Observable<UpdateMails>}
         */
        this.addLabelOnSelectedMails = this.actions
            .ofType(MailsActions.ADD_LABEL_ON_SELECTED_MAILS)
            .pipe(operators_1.withLatestFrom(this.store.select(selectors_1.getMailsState)), operators_1.map(function (_a) {
            var action = _a[0], state = _a[1];
            var entities = __assign({}, state.entities);
            var mailsToUpdate = [];
            state.selectedMailIds
                .map(function (id) {
                var labels = entities[id].labels.slice();
                if (!entities[id].labels.includes(action.payload)) {
                    labels = labels.concat([action.payload]);
                }
                mailsToUpdate = mailsToUpdate.concat([
                    entities[id] = __assign({}, entities[id], { labels: labels })
                ]);
            });
            return new MailsActions.UpdateMails(mailsToUpdate);
        }));
        this.store.select(reducers_1.getRouterState).subscribe(function (routerState) {
            if (routerState) {
                _this.routerState = routerState.state;
            }
        });
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Observable_1.Observable)
    ], MailsEffect.prototype, "getMails", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Observable_1.Observable)
    ], MailsEffect.prototype, "updateMail", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Observable_1.Observable)
    ], MailsEffect.prototype, "updateMails", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Observable_1.Observable)
    ], MailsEffect.prototype, "setCurrentMail", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Observable_1.Observable)
    ], MailsEffect.prototype, "checkCurrentMail", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Observable_1.Observable)
    ], MailsEffect.prototype, "getMailsSuccess", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Observable_1.Observable)
    ], MailsEffect.prototype, "updateMailsSuccess", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Observable_1.Observable)
    ], MailsEffect.prototype, "updateMailSuccess", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Observable_1.Observable)
    ], MailsEffect.prototype, "setFolderOnSelectedMails", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Observable_1.Observable)
    ], MailsEffect.prototype, "addLabelOnSelectedMails", void 0);
    MailsEffect = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions,
            mail_service_1.MailNgrxService,
            store_1.Store])
    ], MailsEffect);
    return MailsEffect;
}());
exports.MailsEffect = MailsEffect;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/store/guards/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/guards/resolve.guard.ts"));


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/store/guards/resolve.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var of_1 = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var operators_1 = __webpack_require__("../../../../rxjs/_esm5/operators.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/forkJoin.js");
var fromStore = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/index.ts");
var selectors_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/selectors/index.ts");
var reducers_1 = __webpack_require__("../../../../../src/app/store/reducers/index.ts");
var ResolveGuard = (function () {
    function ResolveGuard(store) {
        var _this = this;
        this.store = store;
        this.store.select(reducers_1.getRouterState).subscribe(function (routerState) {
            if (routerState) {
                _this.routerState = routerState.state;
            }
        });
    }
    ResolveGuard.prototype.canActivate = function (route, state) {
        return this.checkStore().pipe(operators_1.switchMap(function () { return of_1.of(true); }), operators_1.catchError(function () { return of_1.of(false); }));
    };
    ResolveGuard.prototype.checkStore = function () {
        var _this = this;
        return Observable_1.Observable
            .forkJoin(this.getFolders(), this.getFilters(), this.getLabels())
            .pipe(operators_1.filter(function (_a) {
            var foldersLoaded = _a[0], filtersLoaded = _a[1], labelsLoaded = _a[2];
            return filtersLoaded && foldersLoaded && labelsLoaded;
        }), operators_1.take(1), operators_1.switchMap(function () {
            return _this.getMails();
        }), operators_1.take(1), operators_1.map(function () { return _this.store.dispatch(new fromStore.SetCurrentMail(_this.routerState.params.mailId)); }));
    };
    ResolveGuard.prototype.getFolders = function () {
        var _this = this;
        return this.store.select(selectors_1.getFoldersLoaded)
            .pipe(operators_1.tap(function (loaded) {
            if (!loaded) {
                _this.store.dispatch(new fromStore.GetFolders([]));
            }
        }), operators_1.filter(function (loaded) { return loaded; }), operators_1.take(1));
    };
    /**
     * Get Filters
     * @returns {Observable<any>}
     */
    ResolveGuard.prototype.getFilters = function () {
        var _this = this;
        return this.store.select(selectors_1.getFiltersLoaded)
            .pipe(operators_1.tap(function (loaded) {
            if (!loaded) {
                _this.store.dispatch(new fromStore.GetFilters([]));
            }
        }), operators_1.filter(function (loaded) { return loaded; }), operators_1.take(1));
    };
    /**
     * Get Labels
     * @returns {Observable<any>}
     */
    ResolveGuard.prototype.getLabels = function () {
        var _this = this;
        return this.store.select(selectors_1.getLabelsLoaded)
            .pipe(operators_1.tap(function (loaded) {
            if (!loaded) {
                _this.store.dispatch(new fromStore.GetLabels([]));
            }
        }), operators_1.filter(function (loaded) { return loaded; }), operators_1.take(1));
    };
    /**
     * Get Mails
     * @returns {Observable<any>}
     */
    ResolveGuard.prototype.getMails = function () {
        var _this = this;
        return this.store.select(selectors_1.getMailsLoaded)
            .pipe(operators_1.tap(function (loaded) {
            if (!_this.routerState.params[loaded.id] || _this.routerState.params[loaded.id] !== loaded.value) {
                _this.store.dispatch(new fromStore.GetMails());
                _this.store.dispatch(new fromStore.SetSearchText(''));
                _this.store.dispatch(new fromStore.DeselectAllMails());
            }
        }), operators_1.filter(function (loaded) {
            return _this.routerState.params[loaded.id] && _this.routerState.params[loaded.id] === loaded.value;
        }), operators_1.take(1));
    };
    ResolveGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [store_1.Store])
    ], ResolveGuard);
    return ResolveGuard;
}());
exports.ResolveGuard = ResolveGuard;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/store/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/actions/index.ts"));
__export(__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/reducers/index.ts"));
__export(__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/selectors/index.ts"));
__export(__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/effects/index.ts"));


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/store/reducers/filters.reducer.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var FiltersActions = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/actions/filters.actions.ts");
exports.FiltersInitialState = {
    entities: {},
    loading: false,
    loaded: false
};
function FiltersReducer(state, action) {
    if (state === void 0) { state = exports.FiltersInitialState; }
    switch (action.type) {
        case FiltersActions.GET_FILTERS:
            return __assign({}, state, { loading: true, loaded: false });
        case FiltersActions.GET_FILTERS_SUCCESS:
            var filters = action.payload;
            var entities = filters.reduce(function (_entities, filter) {
                return __assign({}, _entities, (_a = {}, _a[filter.id] = filter, _a));
                var _a;
            }, {});
            return __assign({}, state, { loading: false, loaded: true, entities: entities });
        case FiltersActions.GET_FILTERS_FAILED:
            return __assign({}, state, { loading: false, loaded: false });
        default:
            return state;
    }
}
exports.FiltersReducer = FiltersReducer;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/store/reducers/folders.reducer.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var FoldersActions = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/actions/folders.actions.ts");
exports.FoldersInitialState = {
    entities: {},
    loading: false,
    loaded: false
};
function FoldersReducer(state, action) {
    if (state === void 0) { state = exports.FoldersInitialState; }
    switch (action.type) {
        case FoldersActions.GET_FOLDERS:
            return __assign({}, state, { loading: true, loaded: false });
        case FoldersActions.GET_FOLDERS_SUCCESS:
            var folders = action.payload;
            var entities = folders.reduce(function (_entities, folder) {
                return __assign({}, _entities, (_a = {}, _a[folder.id] = folder, _a));
                var _a;
            }, {});
            return __assign({}, state, { loading: false, loaded: true, entities: entities });
        case FoldersActions.GET_FOLDERS_FAILED:
            return __assign({}, state, { loading: false, loaded: false });
        default:
            return state;
    }
}
exports.FoldersReducer = FoldersReducer;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/store/reducers/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var mails_reducer_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/reducers/mails.reducer.ts");
var folders_reducer_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/reducers/folders.reducer.ts");
var filters_reducer_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/reducers/filters.reducer.ts");
var labels_reducer_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/reducers/labels.reducer.ts");
exports.getMailAppState = store_1.createFeatureSelector('mail-app');
exports.getAppState = store_1.createSelector(exports.getMailAppState, function (state) { return state; });
exports.reducers = {
    mails: mails_reducer_1.MailsReducer,
    folders: folders_reducer_1.FoldersReducer,
    filters: filters_reducer_1.FiltersReducer,
    labels: labels_reducer_1.LabelsReducer
};
__export(__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/reducers/mails.reducer.ts"));
__export(__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/reducers/folders.reducer.ts"));
__export(__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/reducers/filters.reducer.ts"));
__export(__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/reducers/labels.reducer.ts"));


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/store/reducers/labels.reducer.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var LabelsActions = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/actions/labels.actions.ts");
exports.LabelsInitialState = {
    entities: {},
    loading: false,
    loaded: false
};
function LabelsReducer(state, action) {
    if (state === void 0) { state = exports.LabelsInitialState; }
    switch (action.type) {
        case LabelsActions.GET_LABELS:
            return __assign({}, state, { loading: true, loaded: false });
        case LabelsActions.GET_LABELS_SUCCESS:
            var labels = action.payload;
            var entities = labels.reduce(function (_entities, label) {
                return __assign({}, _entities, (_a = {}, _a[label.id] = label, _a));
                var _a;
            }, {});
            return __assign({}, state, { loading: false, loaded: true, entities: entities });
        case LabelsActions.GET_LABELS_FAILED:
            return __assign({}, state, { loading: false, loaded: false });
        default:
            return state;
    }
}
exports.LabelsReducer = LabelsReducer;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/store/reducers/mails.reducer.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var MailsActions = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/actions/mails.actions.ts");
exports.MailsInitialState = {
    entities: {},
    currentMail: null,
    selectedMailIds: [],
    searchText: '',
    loading: false,
    loaded: false
};
function MailsReducer(state, action) {
    if (state === void 0) { state = exports.MailsInitialState; }
    switch (action.type) {
        case MailsActions.GET_MAILS:
            {
                return __assign({}, state, { loading: true });
            }
        case MailsActions.GET_MAILS_SUCCESS:
            {
                var mails = action.payload.mails;
                var loaded = action.payload.loaded;
                var entities = mails.reduce(function (_entities, mail) {
                    return __assign({}, _entities, (_a = {}, _a[mail.id] = mail, _a));
                    var _a;
                }, {});
                return __assign({}, state, { entities: entities, loading: false, loaded: loaded });
            }
        case MailsActions.GET_MAILS_FAILED:
            {
                return __assign({}, state, { loading: false, loaded: false });
            }
        case MailsActions.SET_CURRENT_MAIL_SUCCESS:
            {
                return __assign({}, state, { currentMail: action.payload });
            }
        case MailsActions.UPDATE_MAIL_SUCCESS:
            {
                return __assign({}, state, { entities: __assign({}, state.entities, (_a = {}, _a[action.payload.id] = action.payload, _a)) });
            }
        case MailsActions.SET_SEARCH_TEXT:
            {
                return __assign({}, state, { searchText: action.payload });
            }
        case MailsActions.TOGGLE_IN_SELECTED_MAILS:
            {
                var mailId_1 = action.payload;
                var selectedMailIds = state.selectedMailIds.slice();
                if (selectedMailIds.find(function (id) { return id === mailId_1; }) !== undefined) {
                    selectedMailIds = selectedMailIds.filter(function (id) { return id !== mailId_1; });
                }
                else {
                    selectedMailIds = selectedMailIds.concat([mailId_1]);
                }
                return __assign({}, state, { selectedMailIds: selectedMailIds });
            }
        case MailsActions.SELECT_ALL_MAILS:
            {
                var arr = Object.keys(state.entities).map(function (k) { return state.entities[k]; });
                var selectedMailIds = arr.map(function (mail) { return mail.id; });
                return __assign({}, state, { selectedMailIds: selectedMailIds });
            }
        case MailsActions.DESELECT_ALL_MAILS:
            {
                return __assign({}, state, { selectedMailIds: [] });
            }
        case MailsActions.SELECT_MAILS_BY_PARAMETER:
            {
                var filter_1 = action.payload;
                var arr = Object.keys(state.entities).map(function (k) { return state.entities[k]; });
                var selectedMailIds = arr.filter(function (mail) { return mail[filter_1.parameter] === filter_1.value; })
                    .map(function (mail) { return mail.id; });
                return __assign({}, state, { selectedMailIds: selectedMailIds });
            }
        case MailsActions.SET_FOLDER_ON_SELECTED_MAILS:
            {
                var entities_1 = __assign({}, state.entities);
                state.selectedMailIds.map(function (id) {
                    entities_1[id] = __assign({}, entities_1[id], { folder: action.payload });
                });
                return __assign({}, state, { entities: entities_1 });
            }
        default:
            return state;
    }
    var _a;
}
exports.MailsReducer = MailsReducer;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/store/selectors/filters.selectors.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var reducers_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/reducers/index.ts");
exports.getFiltersState = store_1.createSelector(reducers_1.getMailAppState, function (state) { return state.filters; });
exports.getFilters = store_1.createSelector(exports.getFiltersState, function (state) { return state.entities; });
exports.getFiltersLoaded = store_1.createSelector(exports.getFiltersState, function (state) { return state.loaded; });
exports.getFiltersArr = store_1.createSelector(exports.getFilters, function (entities) { return Object.keys(entities).map(function (id) { return entities[id]; }); });


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/store/selectors/folders.selectors.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var reducers_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/reducers/index.ts");
exports.getFoldersState = store_1.createSelector(reducers_1.getMailAppState, function (state) { return state.folders; });
exports.getFolders = store_1.createSelector(exports.getFoldersState, function (state) { return state.entities; });
exports.getFoldersLoaded = store_1.createSelector(exports.getFoldersState, function (state) { return state.loaded; });
exports.getFoldersArr = store_1.createSelector(exports.getFolders, function (entities) { return Object.keys(entities).map(function (id) { return entities[id]; }); });


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/store/selectors/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/selectors/mails.selectors.ts"));
__export(__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/selectors/folders.selectors.ts"));
__export(__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/selectors/filters.selectors.ts"));
__export(__webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/selectors/labels.selectors.ts"));


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/store/selectors/labels.selectors.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var reducers_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/reducers/index.ts");
exports.getLabelsState = store_1.createSelector(reducers_1.getMailAppState, function (state) { return state.labels; });
exports.getLabels = store_1.createSelector(exports.getLabelsState, function (state) { return state.entities; });
exports.getLabelsLoaded = store_1.createSelector(exports.getLabelsState, function (state) { return state.loaded; });
exports.getLabelsArr = store_1.createSelector(exports.getLabels, function (entities) { return Object.keys(entities).map(function (id) { return entities[id]; }); });


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/store/selectors/mails.selectors.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var reducers_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/reducers/index.ts");
var fuseUtils_1 = __webpack_require__("../../../../../src/app/core/fuseUtils.ts");
exports.getMailsState = store_1.createSelector(reducers_1.getMailAppState, function (state) { return state.mails; });
exports.getMails = store_1.createSelector(exports.getMailsState, function (state) { return state.entities; });
exports.getMailsLoaded = store_1.createSelector(exports.getMailsState, function (state) { return state.loaded; });
exports.getSearchText = store_1.createSelector(exports.getMailsState, function (state) { return state.searchText; });
exports.getMailsArr = store_1.createSelector(exports.getMails, exports.getSearchText, function (entities, searchText) {
    var arr = Object.keys(entities).map(function (id) { return entities[id]; });
    return fuseUtils_1.FuseUtils.filterArrayByString(arr, searchText);
});
exports.getCurrentMail = store_1.createSelector(exports.getMailsState, function (state) { return state.currentMail; });
exports.getSelectedMailIds = store_1.createSelector(exports.getMailsState, function (state) { return state.selectedMailIds; });


/***/ }),

/***/ "../../../../../src/app/main/content/apps/mail-ngrx/store/store.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var effects_1 = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
var reducers_1 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/reducers/index.ts");
var effects_2 = __webpack_require__("../../../../../src/app/main/content/apps/mail-ngrx/store/effects/index.ts");
var MailAppStoreModule = (function () {
    function MailAppStoreModule() {
    }
    MailAppStoreModule = __decorate([
        core_1.NgModule({
            imports: [
                store_1.StoreModule.forFeature('mail-app', reducers_1.reducers),
                effects_1.EffectsModule.forFeature(effects_2.effects)
            ],
            providers: []
        })
    ], MailAppStoreModule);
    return MailAppStoreModule;
}());
exports.MailAppStoreModule = MailAppStoreModule;


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/forkJoin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/observable/forkJoin.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_forkJoin PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["Observable"].forkJoin = __WEBPACK_IMPORTED_MODULE_1__observable_forkJoin__["a" /* forkJoin */];
//# sourceMappingURL=forkJoin.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/delay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/operator/delay.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_delay PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["Observable"].prototype.delay = __WEBPACK_IMPORTED_MODULE_1__operator_delay__["a" /* delay */];
//# sourceMappingURL=delay.js.map 


/***/ })

});
//# sourceMappingURL=mail.module.chunk.js.map