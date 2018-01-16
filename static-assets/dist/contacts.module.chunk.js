webpackJsonp(["contacts.module"],{

/***/ "../../../../../src/app/main/content/apps/contacts/contact-form/contact-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <span class=\"title dialog-title\">{{dialogTitle}}</span>\n            <button mat-button class=\"mat-icon-button\"\n                    (click)=\"dialogRef.close()\"\n                    aria-label=\"Close dialog\">\n                <mat-icon>close</mat-icon>\n            </button>\n        </mat-toolbar-row>\n\n        <mat-toolbar-row class=\"toolbar-bottom py-8 py-sm-16\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <img [src]=\"contact.avatar\" class=\" avatar contact-avatar huge\"\n                 [alt]=\"contact.name\"/>\n            <div class=\"contact-name\">{{contact.name}}</div>\n        </mat-toolbar-row>\n    </mat-toolbar>\n\n    <div mat-dialog-content class=\"p-24 m-0\" fusePerfectScrollbar>\n\n        <form [formGroup]=\"contactForm\">\n\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <mat-icon class=\"mr-12 mt-12\">account_circle</mat-icon>\n                <mat-form-field fxFlex>\n                    <input name=\"name\" formControlName=\"name\" placeholder=\"Name\" matInput required>\n                </mat-form-field>\n            </div>\n\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <mat-icon class=\"mr-12 mt-12\"></mat-icon>\n                <mat-form-field fxFlex>\n                    <input name=\"lastName\" formControlName=\"lastName\" placeholder=\"Lastname\" matInput>\n                </mat-form-field>\n            </div>\n\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <mat-icon class=\"mr-12 mt-12\">star</mat-icon>\n                <mat-form-field fxFlex>\n                    <input name=\"nickname\" formControlName=\"nickname\" matInput placeholder=\"Nickname\">\n                </mat-form-field>\n            </div>\n\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <mat-icon class=\"mr-12 mt-12\">phone</mat-icon>\n                <mat-form-field fxFlex>\n                    <input formControlName=\"phone\" matInput placeholder=\"Phone number\">\n                </mat-form-field>\n            </div>\n\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <mat-icon class=\"mr-12 mt-12\">email</mat-icon>\n                <mat-form-field fxFlex>\n                    <input name=\"email\" formControlName=\"email\" matInput type=\"email\" placeholder=\"Email\">\n                </mat-form-field>\n            </div>\n\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <mat-icon class=\"mr-12 mt-12\">domain</mat-icon>\n                <mat-form-field fxFlex>\n                    <input name=\"company\" formControlName=\"company\" matInput placeholder=\"Company\">\n                </mat-form-field>\n            </div>\n\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <mat-icon class=\"mr-12 mt-12\">work</mat-icon>\n                <mat-form-field fxFlex>\n                    <input name=\"jobTitle\" formControlName=\"jobTitle\" matInput placeholder=\"Job title\">\n                </mat-form-field>\n            </div>\n\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <mat-form-field class=\"mr-24\" fxFlex>\n                    <input matInput [matDatepicker]=\"birthdayDatePicker\" placeholder=\"Birthday\">\n                    <mat-datepicker-toggle matSuffix [for]=\"birthdayDatePicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #birthdayDatePicker></mat-datepicker>\n                </mat-form-field>\n            </div>\n\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                <mat-icon class=\"mr-12 mt-12\">home</mat-icon>\n                <mat-form-field fxFlex>\n                    <input name=\"address\" formControlName=\"address\" matInput placeholder=\"Address\">\n                </mat-form-field>\n            </div>\n\n            <div fxLayout=\"row\" class=\"textarea-wrapper\" fxLayoutAlign=\"start start\">\n                <mat-icon class=\"mr-12 mt-12\">note</mat-icon>\n                <mat-form-field fxFlex>\n                    <textarea name=\"notes\" formControlName=\"notes\" placeholder=\"Notes\" matInput type=\"text\" max-rows=\"4\"></textarea>\n                </mat-form-field>\n            </div>\n\n        </form>\n\n    </div>\n\n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n        <button *ngIf=\"action !=='edit'\"\n                mat-raised-button\n                (click)=\"dialogRef.close(contactForm)\"\n                class=\"save-button mat-accent\"\n                [disabled]=\"contactForm.invalid\"\n                aria-label=\"SAVE\">\n            SAVE\n        </button>\n\n        <button *ngIf=\"action ==='edit'\"\n                mat-raised-button\n                (click)=\"dialogRef.close(['save',contactForm])\"\n                class=\"save-button mat-accent\"\n                [disabled]=\"contactForm.invalid\"\n                aria-label=\"SAVE\">\n            SAVE\n        </button>\n\n        <button *ngIf=\"action ==='edit'\"\n                mat-button\n                class=\"mat-icon-button\"\n                (click)=\"dialogRef.close(['delete',contactForm])\"\n                aria-label=\"Delete\"\n                matTooltip=\"Delete\">\n            <mat-icon>delete</mat-icon>\n        </button>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/contacts/contact-form/contact-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.contact-form-dialog {\n  width: 400px; }\n  @media screen and (max-width: 599px) {\n    .contact-form-dialog {\n      width: 100%; } }\n  .contact-form-dialog .mat-dialog-container {\n    padding: 0;\n    overflow: hidden; }\n    .contact-form-dialog .mat-dialog-container .mat-toolbar {\n      min-height: initial; }\n    .contact-form-dialog .mat-dialog-container .toolbar-bottom {\n      height: auto; }\n  .contact-form-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/contacts/contact-form/contact-form.component.ts":
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
var contact_model_1 = __webpack_require__("../../../../../src/app/main/content/apps/contacts/contact.model.ts");
var FuseContactsContactFormDialogComponent = (function () {
    function FuseContactsContactFormDialogComponent(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = 'Edit Contact';
            this.contact = data.contact;
        }
        else {
            this.dialogTitle = 'New Contact';
            this.contact = new contact_model_1.Contact({});
        }
        this.contactForm = this.createContactForm();
    }
    FuseContactsContactFormDialogComponent.prototype.ngOnInit = function () {
    };
    FuseContactsContactFormDialogComponent.prototype.createContactForm = function () {
        return this.formBuilder.group({
            id: [this.contact.id],
            name: [this.contact.name],
            lastName: [this.contact.lastName],
            avatar: [this.contact.avatar],
            nickname: [this.contact.nickname],
            company: [this.contact.company],
            jobTitle: [this.contact.jobTitle],
            email: [this.contact.email],
            phone: [this.contact.phone],
            address: [this.contact.address],
            birthday: [this.contact.birthday],
            notes: [this.contact.notes]
        });
    };
    FuseContactsContactFormDialogComponent = __decorate([
        core_1.Component({
            selector: 'fuse-contacts-contact-form-dialog',
            template: __webpack_require__("../../../../../src/app/main/content/apps/contacts/contact-form/contact-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/contacts/contact-form/contact-form.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object, forms_1.FormBuilder])
    ], FuseContactsContactFormDialogComponent);
    return FuseContactsContactFormDialogComponent;
}());
exports.FuseContactsContactFormDialogComponent = FuseContactsContactFormDialogComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/contacts/contact-list/contact-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-table #table [dataSource]=\"dataSource\"\n           [@animateStagger]=\"{value:'50'}\">\n    <!-- Checkbox Column -->\n    <ng-container cdkColumnDef=\"checkbox\">\n        <mat-header-cell *cdkHeaderCellDef></mat-header-cell>\n        <mat-cell *cdkCellDef=\"let contact\">\n            <mat-checkbox [(ngModel)]=\"checkboxes[contact.id]\" (ngModelChange)=\"onSelectedChange(contact.id)\"\n                          (click)=\"$event.stopPropagation()\">\n            </mat-checkbox>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Avatar Column -->\n    <ng-container cdkColumnDef=\"avatar\">\n        <mat-header-cell *cdkHeaderCellDef></mat-header-cell>\n        <mat-cell *cdkCellDef=\"let contact\">\n            <img class=\"avatar\" *ngIf=\"contact.avatar\" [alt]=\"contact.name\"\n                 [src]=\"contact.avatar\"/>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container cdkColumnDef=\"name\">\n        <mat-header-cell *cdkHeaderCellDef>Name</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let contact\">\n            <p class=\"text-truncate font-weight-600\">{{contact.name}} {{contact.lastName}}</p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Email Column -->\n    <ng-container cdkColumnDef=\"email\">\n        <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-sm>Email</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-sm>\n            <p class=\"email text-truncate\">\n                {{contact.email}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Phone Column -->\n    <ng-container cdkColumnDef=\"phone\">\n        <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-md>Phone</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-md>\n            <p class=\"phone text-truncate\">\n                {{contact.phone}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Job Title Column -->\n    <ng-container cdkColumnDef=\"jobTitle\">\n        <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-lg>Job title</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-lg>\n            <p class=\"job-title text-truncate\">\n                {{contact.jobTitle}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Company Column -->\n    <ng-container cdkColumnDef=\"company\">\n        <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-lg>Company</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-lg>\n            <p class=\"company text-truncate\">\n                {{contact.company}}\n            </p>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Buttons Column -->\n    <ng-container cdkColumnDef=\"buttons\">\n        <mat-header-cell *cdkHeaderCellDef></mat-header-cell>\n        <mat-cell *cdkCellDef=\"let contact\">\n            <div fxFlex=\"row\" fxLayoutAlign=\"end center\">\n                <button mat-icon-button (click)=\"$event.stopPropagation();toggleStar(contact.id)\" aria-label=\"Toggle star\">\n                    <mat-icon *ngIf=\"user.starred.includes(contact.id)\">star</mat-icon>\n                    <mat-icon *ngIf=\"!user.starred.includes(contact.id)\">star_outline</mat-icon>\n                </button>\n\n                <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\"\n                        (click)=\"$event.stopPropagation();\">\n                    <mat-icon>more_vert</mat-icon>\n                </button>\n\n                <mat-menu #moreMenu=\"matMenu\">\n                    <button mat-menu-item aria-label=\"remove\" (click)=\"deleteContact(contact)\">\n                        <mat-icon>delete</mat-icon>\n                        <span>Remove</span>\n                    </button>\n                </mat-menu>\n            </div>\n\n        </mat-cell>\n    </ng-container>\n\n    <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *cdkRowDef=\"let contact; columns: displayedColumns;\"\n             class=\"contact\"\n             (click)=\"editContact(contact)\"\n             [ngClass]=\"{'mat-light-blue-50-bg':checkboxes[contact.id]}\"\n             matRipple\n             [@animate]=\"{value:'*',params:{y:'100%'}}\">\n    </mat-row>\n</mat-table>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/contacts/contact-list/contact-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\nfuse-contacts-contact-list {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  fuse-contacts-contact-list .mat-table {\n    background: transparent;\n    box-shadow: none; }\n    fuse-contacts-contact-list .mat-table .mat-column-checkbox {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 48px;\n              flex: 0 1 48px; }\n      fuse-contacts-contact-list .mat-table .mat-column-checkbox .mat-checkbox-ripple {\n        display: none !important; }\n    fuse-contacts-contact-list .mat-table .mat-column-avatar {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 64px;\n              flex: 0 1 64px; }\n    fuse-contacts-contact-list .mat-table .mat-column-buttons {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 80px;\n              flex: 0 1 80px; }\n    fuse-contacts-contact-list .mat-table .mat-row {\n      position: relative;\n      cursor: pointer;\n      padding: 8px 8px 8px 24px; }\n      fuse-contacts-contact-list .mat-table .mat-row .mat-cell {\n        min-width: 0; }\n        fuse-contacts-contact-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n          -webkit-box-flex: 0;\n              -ms-flex: 0 1 auto;\n                  flex: 0 1 auto;\n          padding: 0 24px 0 0; }\n          @media screen and (min-width: 1280px) {\n            fuse-contacts-contact-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n              display: none; } }\n\n#add-contact-button {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n  padding: 0;\n  z-index: 99; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/contacts/contact-list/contact-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var contacts_service_1 = __webpack_require__("../../../../../src/app/main/content/apps/contacts/contacts.service.ts");
var contact_form_component_1 = __webpack_require__("../../../../../src/app/main/content/apps/contacts/contact-form/contact-form.component.ts");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var confirm_dialog_component_1 = __webpack_require__("../../../../../src/app/core/components/confirm-dialog/confirm-dialog.component.ts");
var collections_1 = __webpack_require__("../../../cdk/esm5/collections.es5.js");
var animations_1 = __webpack_require__("../../../../../src/app/core/animations.ts");
var FuseContactsContactListComponent = (function () {
    function FuseContactsContactListComponent(contactsService, dialog) {
        var _this = this;
        this.contactsService = contactsService;
        this.dialog = dialog;
        this.displayedColumns = ['checkbox', 'avatar', 'name', 'email', 'phone', 'jobTitle', 'buttons'];
        this.onContactsChangedSubscription =
            this.contactsService.onContactsChanged.subscribe(function (contacts) {
                _this.contacts = contacts;
                _this.checkboxes = {};
                contacts.map(function (contact) {
                    _this.checkboxes[contact.id] = false;
                });
            });
        this.onSelectedContactsChangedSubscription =
            this.contactsService.onSelectedContactsChanged.subscribe(function (selectedContacts) {
                for (var id in _this.checkboxes) {
                    if (!_this.checkboxes.hasOwnProperty(id)) {
                        continue;
                    }
                    _this.checkboxes[id] = selectedContacts.includes(id);
                }
                _this.selectedContacts = selectedContacts;
            });
        this.onUserDataChangedSubscription =
            this.contactsService.onUserDataChanged.subscribe(function (user) {
                _this.user = user;
            });
    }
    FuseContactsContactListComponent.prototype.ngOnInit = function () {
        this.dataSource = new FilesDataSource(this.contactsService);
    };
    FuseContactsContactListComponent.prototype.ngOnDestroy = function () {
        this.onContactsChangedSubscription.unsubscribe();
        this.onSelectedContactsChangedSubscription.unsubscribe();
        this.onUserDataChangedSubscription.unsubscribe();
    };
    FuseContactsContactListComponent.prototype.editContact = function (contact) {
        var _this = this;
        this.dialogRef = this.dialog.open(contact_form_component_1.FuseContactsContactFormDialogComponent, {
            panelClass: 'contact-form-dialog',
            data: {
                contact: contact,
                action: 'edit'
            }
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
                 * Save
                 */
                case 'save':
                    _this.contactsService.updateContact(formData.getRawValue());
                    break;
                /**
                 * Delete
                 */
                case 'delete':
                    _this.deleteContact(contact);
                    break;
            }
        });
    };
    /**
     * Delete Contact
     */
    FuseContactsContactListComponent.prototype.deleteContact = function (contact) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(confirm_dialog_component_1.FuseConfirmDialogComponent, {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.contactsService.deleteContact(contact);
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseContactsContactListComponent.prototype.onSelectedChange = function (contactId) {
        this.contactsService.toggleSelectedContact(contactId);
    };
    FuseContactsContactListComponent.prototype.toggleStar = function (contactId) {
        if (this.user.starred.includes(contactId)) {
            this.user.starred.splice(this.user.starred.indexOf(contactId), 1);
        }
        else {
            this.user.starred.push(contactId);
        }
        this.contactsService.updateUserData(this.user);
    };
    __decorate([
        core_1.ViewChild('dialogContent'),
        __metadata("design:type", core_1.TemplateRef)
    ], FuseContactsContactListComponent.prototype, "dialogContent", void 0);
    FuseContactsContactListComponent = __decorate([
        core_1.Component({
            selector: 'fuse-contacts-contact-list',
            template: __webpack_require__("../../../../../src/app/main/content/apps/contacts/contact-list/contact-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/contacts/contact-list/contact-list.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None,
            animations: animations_1.fuseAnimations
        }),
        __metadata("design:paramtypes", [contacts_service_1.ContactsService,
            material_1.MatDialog])
    ], FuseContactsContactListComponent);
    return FuseContactsContactListComponent;
}());
exports.FuseContactsContactListComponent = FuseContactsContactListComponent;
var FilesDataSource = (function (_super) {
    __extends(FilesDataSource, _super);
    function FilesDataSource(contactsService) {
        var _this = _super.call(this) || this;
        _this.contactsService = contactsService;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    FilesDataSource.prototype.connect = function () {
        return this.contactsService.onContactsChanged;
    };
    FilesDataSource.prototype.disconnect = function () {
    };
    return FilesDataSource;
}(collections_1.DataSource));
exports.FilesDataSource = FilesDataSource;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/contacts/contact.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fuseUtils_1 = __webpack_require__("../../../../../src/app/core/fuseUtils.ts");
var Contact = (function () {
    function Contact(contact) {
        {
            this.id = contact.id || fuseUtils_1.FuseUtils.generateGUID();
            this.name = contact.name || '';
            this.lastName = contact.lastName || '';
            this.avatar = contact.avatar || 'assets/images/avatars/profile.jpg';
            this.nickname = contact.nickname || '';
            this.company = contact.company || '';
            this.jobTitle = contact.jobTitle || '';
            this.email = contact.email || '';
            this.phone = contact.phone || '';
            this.address = contact.address || '';
            this.birthday = contact.birhday || '';
            this.notes = contact.notes || '';
        }
    }
    return Contact;
}());
exports.Contact = Contact;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contacts\" class=\"page-layout simple left-sidenav inner-sidenav\">\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-16 p-sm-24\" fxLayout=\"column\" fxLayoutAlign=\"start start\"\n         fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\n\n        <!-- APP TITLE -->\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <button mat-button class=\"mat-icon-button sidenav-toggle mr-12\"\n                    fuseMatSidenavToggler=\"contacts-main-sidenav\"\n                    fxHide.gt-md>\n                <mat-icon>menu</mat-icon>\n            </button>\n\n            <div class=\"logo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"logo-icon mr-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">account_box</mat-icon>\n                <span class=\"logo-text h1\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Contacts</span>\n            </div>\n\n        </div>\n        <!-- / APP TITLE -->\n\n        <!-- SEARCH -->\n        <div class=\"search-input-wrapper mt-16 ml-8 m-sm-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <label for=\"search\" class=\"mr-8\">\n                <mat-icon>search</mat-icon>\n            </label>\n            <mat-form-field mat-no-float class=\"m-0\" floatPlaceholder=\"never\">\n                <input matInput [formControl]=\"searchInput\" id=\"search\" placeholder=\"Search for anything\">\n            </mat-form-field>\n        </div>\n        <!-- / SEARCH -->\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- SELECTED BAR -->\n    <fuse-selected-bar class=\"mat-accent-600-bg\" *ngIf=\"hasSelectedContacts\" [@slideInTop]></fuse-selected-bar>\n    <!-- / SELECTED BAR -->\n\n    <mat-sidenav-container>\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"start\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"contacts-main-sidenav\" mat-is-locked-open=\"gt-sm\">\n\n            <fuse-contacts-main-sidenav *fuseIfOnDom [@animate]=\"{value:'*'}\"></fuse-contacts-main-sidenav>\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n        <!-- CENTER -->\n        <div class=\"center p-24 pb-56 pr-sm-92\" fusePerfectScrollbar>\n\n            <!-- CONTENT -->\n            <div class=\"content mat-white-bg mat-elevation-z4\">\n\n                <fuse-contacts-contact-list></fuse-contacts-contact-list>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CENTER -->\n\n    </mat-sidenav-container>\n\n</div>\n\n<!-- ADD CONTACT BUTTON -->\n<button mat-fab class=\"mat-accent-bg\" id=\"add-contact-button\" (click)=\"newContact()\" aria-label=\"add contact\"\n        *fuseIfOnDom [@animate]=\"{value:'*', params:{delay:'300ms',scale:'.2'}}\">\n    <mat-icon>person_add</mat-icon>\n</button>\n<!-- / ADD CONTACT BUTTON -->\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/contacts/contacts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#contacts .content {\n  overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/contacts/contacts.component.ts":
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
var contacts_service_1 = __webpack_require__("../../../../../src/app/main/content/apps/contacts/contacts.service.ts");
var animations_1 = __webpack_require__("../../../../../src/app/core/animations.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var contact_form_component_1 = __webpack_require__("../../../../../src/app/main/content/apps/contacts/contact-form/contact-form.component.ts");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
var FuseContactsComponent = (function () {
    function FuseContactsComponent(contactsService, dialog) {
        this.contactsService = contactsService;
        this.dialog = dialog;
        this.searchInput = new forms_1.FormControl('');
    }
    FuseContactsComponent.prototype.newContact = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(contact_form_component_1.FuseContactsContactFormDialogComponent, {
            panelClass: 'contact-form-dialog',
            data: {
                action: 'new'
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            _this.contactsService.updateContact(response.getRawValue());
        });
    };
    FuseContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onSelectedContactsChangedSubscription =
            this.contactsService.onSelectedContactsChanged
                .subscribe(function (selectedContacts) {
                _this.hasSelectedContacts = selectedContacts.length > 0;
            });
        this.searchInput.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(function (searchText) {
            _this.contactsService.onSearchTextChanged.next(searchText);
        });
    };
    FuseContactsComponent.prototype.ngOnDestroy = function () {
        this.onSelectedContactsChangedSubscription.unsubscribe();
    };
    FuseContactsComponent = __decorate([
        core_1.Component({
            selector: 'fuse-contacts',
            template: __webpack_require__("../../../../../src/app/main/content/apps/contacts/contacts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/contacts/contacts.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None,
            animations: animations_1.fuseAnimations
        }),
        __metadata("design:paramtypes", [contacts_service_1.ContactsService,
            material_1.MatDialog])
    ], FuseContactsComponent);
    return FuseContactsComponent;
}());
exports.FuseContactsComponent = FuseContactsComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/contacts/contacts.module.ts":
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
var main_component_1 = __webpack_require__("../../../../../src/app/main/content/apps/contacts/sidenavs/main/main.component.ts");
var contacts_component_1 = __webpack_require__("../../../../../src/app/main/content/apps/contacts/contacts.component.ts");
var contacts_service_1 = __webpack_require__("../../../../../src/app/main/content/apps/contacts/contacts.service.ts");
var contact_list_component_1 = __webpack_require__("../../../../../src/app/main/content/apps/contacts/contact-list/contact-list.component.ts");
var selected_bar_component_1 = __webpack_require__("../../../../../src/app/main/content/apps/contacts/selected-bar/selected-bar.component.ts");
var contact_form_component_1 = __webpack_require__("../../../../../src/app/main/content/apps/contacts/contact-form/contact-form.component.ts");
var routes = [
    {
        path: '**',
        component: contacts_component_1.FuseContactsComponent,
        resolve: {
            contacts: contacts_service_1.ContactsService
        }
    }
];
var FuseContactsModule = (function () {
    function FuseContactsModule() {
    }
    FuseContactsModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [
                contacts_component_1.FuseContactsComponent,
                contact_list_component_1.FuseContactsContactListComponent,
                selected_bar_component_1.FuseContactsSelectedBarComponent,
                main_component_1.FuseContactsMainSidenavComponent,
                contact_form_component_1.FuseContactsContactFormDialogComponent
            ],
            providers: [
                contacts_service_1.ContactsService
            ],
            entryComponents: [contact_form_component_1.FuseContactsContactFormDialogComponent]
        })
    ], FuseContactsModule);
    return FuseContactsModule;
}());
exports.FuseContactsModule = FuseContactsModule;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/contacts/contacts.service.ts":
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
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var contact_model_1 = __webpack_require__("../../../../../src/app/main/content/apps/contacts/contact.model.ts");
var fuseUtils_1 = __webpack_require__("../../../../../src/app/core/fuseUtils.ts");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var ContactsService = (function () {
    function ContactsService(http) {
        this.http = http;
        this.onContactsChanged = new BehaviorSubject_1.BehaviorSubject([]);
        this.onSelectedContactsChanged = new BehaviorSubject_1.BehaviorSubject([]);
        this.onUserDataChanged = new BehaviorSubject_1.BehaviorSubject([]);
        this.onSearchTextChanged = new Subject_1.Subject();
        this.onFilterChanged = new Subject_1.Subject();
        this.selectedContacts = [];
    }
    /**
     * The Contacts App Main Resolver
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    ContactsService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getContacts(),
                _this.getUserData()
            ]).then(function (_a) {
                var files = _a[0];
                _this.onSearchTextChanged.subscribe(function (searchText) {
                    _this.searchText = searchText;
                    _this.getContacts();
                });
                _this.onFilterChanged.subscribe(function (filter) {
                    _this.filterBy = filter;
                    _this.getContacts();
                });
                resolve();
            }, reject);
        });
    };
    ContactsService.prototype.getContacts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/contacts-contacts')
                .subscribe(function (response) {
                _this.contacts = response;
                if (_this.filterBy === 'starred') {
                    _this.contacts = _this.contacts.filter(function (_contact) {
                        return _this.user.starred.includes(_contact.id);
                    });
                }
                if (_this.filterBy === 'frequent') {
                    _this.contacts = _this.contacts.filter(function (_contact) {
                        return _this.user.frequentContacts.includes(_contact.id);
                    });
                }
                if (_this.searchText && _this.searchText !== '') {
                    _this.contacts = fuseUtils_1.FuseUtils.filterArrayByString(_this.contacts, _this.searchText);
                }
                _this.contacts = _this.contacts.map(function (contact) {
                    return new contact_model_1.Contact(contact);
                });
                _this.onContactsChanged.next(_this.contacts);
                resolve(_this.contacts);
            }, reject);
        });
    };
    ContactsService.prototype.getUserData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/contacts-user/5725a6802d10e277a0f35724')
                .subscribe(function (response) {
                _this.user = response;
                _this.onUserDataChanged.next(_this.user);
                resolve(_this.user);
            }, reject);
        });
    };
    /**
     * Toggle selected contact by id
     * @param id
     */
    ContactsService.prototype.toggleSelectedContact = function (id) {
        // First, check if we already have that todo as selected...
        if (this.selectedContacts.length > 0) {
            var index = this.selectedContacts.indexOf(id);
            if (index !== -1) {
                this.selectedContacts.splice(index, 1);
                // Trigger the next event
                this.onSelectedContactsChanged.next(this.selectedContacts);
                // Return
                return;
            }
        }
        // If we don't have it, push as selected
        this.selectedContacts.push(id);
        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    };
    /**
     * Toggle select all
     */
    ContactsService.prototype.toggleSelectAll = function () {
        if (this.selectedContacts.length > 0) {
            this.deselectContacts();
        }
        else {
            this.selectContacts();
        }
    };
    ContactsService.prototype.selectContacts = function (filterParameter, filterValue) {
        var _this = this;
        this.selectedContacts = [];
        // If there is no filter, select all todos
        if (filterParameter === undefined || filterValue === undefined) {
            this.selectedContacts = [];
            this.contacts.map(function (contact) {
                _this.selectedContacts.push(contact.id);
            });
        }
        else {
            /* this.selectedContacts.push(...
                 this.contacts.filter(todo => {
                     return todo[filterParameter] === filterValue;
                 })
             );*/
        }
        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    };
    ContactsService.prototype.updateContact = function (contact) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/contacts-contacts/' + contact.id, __assign({}, contact))
                .subscribe(function (response) {
                _this.getContacts();
                resolve(response);
            });
        });
    };
    ContactsService.prototype.updateUserData = function (userData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/contacts-user/' + _this.user.id, __assign({}, userData))
                .subscribe(function (response) {
                _this.getUserData();
                _this.getContacts();
                resolve(response);
            });
        });
    };
    ContactsService.prototype.deselectContacts = function () {
        this.selectedContacts = [];
        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    };
    ContactsService.prototype.deleteContact = function (contact) {
        var contactIndex = this.contacts.indexOf(contact);
        this.contacts.splice(contactIndex, 1);
        this.onContactsChanged.next(this.contacts);
    };
    ContactsService.prototype.deleteSelectedContacts = function () {
        var _loop_1 = function (contactId) {
            var contact = this_1.contacts.find(function (_contact) {
                return _contact.id === contactId;
            });
            var contactIndex = this_1.contacts.indexOf(contact);
            this_1.contacts.splice(contactIndex, 1);
        };
        var this_1 = this;
        for (var _i = 0, _a = this.selectedContacts; _i < _a.length; _i++) {
            var contactId = _a[_i];
            _loop_1(contactId);
        }
        this.onContactsChanged.next(this.contacts);
        this.deselectContacts();
    };
    ContactsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ContactsService);
    return ContactsService;
}());
exports.ContactsService = ContactsService;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/contacts/selected-bar/selected-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-24\">\n\n    <div class=\"close-button-wrapper\" fxFlex=\"0 1 auto\" fxFlex.gt-sm=\"220px\" (click)=\"deselectAll()\">\n        <button class=\"p-8\" mat-button fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <mat-icon class=\"mr-8\">arrow_back</mat-icon>\n            <span class=\"text-uppercase\">Back</span>\n        </button>\n    </div>\n\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutAlign.gt-sm=\"space-between center\">\n\n        <div>\n            <span class=\"selected-contacts-count\">\n                <span>{{selectedContacts.length}}</span>\n                <span>selected</span>\n            </span>\n\n            <button mat-icon-button [matMenuTriggerFor]=\"selectMenu\">\n                <mat-icon>arrow_drop_down</mat-icon>\n            </button>\n            <mat-menu #selectMenu=\"matMenu\">\n                <button mat-menu-item (click)=\"selectAll()\">Select all</button>\n                <button mat-menu-item (click)=\"deselectAll()\">Deselect all</button>\n            </mat-menu>\n\n        </div>\n\n        <div class=\"multi-select-actions\">\n            <button mat-icon-button (click)=\"deleteSelectedContacts()\" aria-label=\"delete selected\">\n                <mat-icon>delete</mat-icon>\n            </button>\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/contacts/selected-bar/selected-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n:host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 120px;\n  z-index: 99; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/contacts/selected-bar/selected-bar.component.ts":
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
var contacts_service_1 = __webpack_require__("../../../../../src/app/main/content/apps/contacts/contacts.service.ts");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var confirm_dialog_component_1 = __webpack_require__("../../../../../src/app/core/components/confirm-dialog/confirm-dialog.component.ts");
var FuseContactsSelectedBarComponent = (function () {
    function FuseContactsSelectedBarComponent(contactsService, dialog) {
        var _this = this;
        this.contactsService = contactsService;
        this.dialog = dialog;
        this.contactsService.onSelectedContactsChanged
            .subscribe(function (selectedContacts) {
            _this.selectedContacts = selectedContacts;
            setTimeout(function () {
                _this.hasSelectedContacts = selectedContacts.length > 0;
                _this.isIndeterminate = (selectedContacts.length !== _this.contactsService.contacts.length && selectedContacts.length > 0);
            }, 0);
        });
    }
    FuseContactsSelectedBarComponent.prototype.ngOnInit = function () {
    };
    FuseContactsSelectedBarComponent.prototype.selectAll = function () {
        this.contactsService.selectContacts();
    };
    FuseContactsSelectedBarComponent.prototype.deselectAll = function () {
        this.contactsService.deselectContacts();
    };
    FuseContactsSelectedBarComponent.prototype.deleteSelectedContacts = function () {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(confirm_dialog_component_1.FuseConfirmDialogComponent, {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete all selected contacts?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.contactsService.deleteSelectedContacts();
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseContactsSelectedBarComponent = __decorate([
        core_1.Component({
            selector: 'fuse-selected-bar',
            template: __webpack_require__("../../../../../src/app/main/content/apps/contacts/selected-bar/selected-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/contacts/selected-bar/selected-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [contacts_service_1.ContactsService,
            material_1.MatDialog])
    ], FuseContactsSelectedBarComponent);
    return FuseContactsSelectedBarComponent;
}());
exports.FuseContactsSelectedBarComponent = FuseContactsSelectedBarComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/contacts/sidenavs/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav-content\">\n\n    <div class=\"card mat-white-bg\">\n        <!-- SIDENAV HEADER -->\n        <div class=\"header p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <!-- USER -->\n            <img [src]=\"user.avatar\" class=\"avatar mr-16\" [alt]=\"user.name\"/>\n            <span class=\"h5\">{{user.name}}</span>\n            <!-- / USER -->\n\n        </div>\n        <!-- / SIDENAV HEADER -->\n\n        <!-- SIDENAV CONTENT -->\n        <div class=\"content py-16\" fusePerfectScrollbar>\n\n            <div class=\"nav\">\n\n                <div class=\"nav-item\" aria-label=\"inbox\">\n                    <a class=\"nav-link\" matRipple (click)=\"changeFilter('all')\" [ngClass]=\"{'active':filterBy ==='all'}\">\n                        <span class=\"title\">All Contacts</span>\n                    </a>\n                </div>\n\n                <div class=\"nav-item\" aria-label=\"frequently contacted\" (click)=\"changeFilter('frequent')\">\n                    <a class=\"nav-link\" matRipple [ngClass]=\"{'active':filterBy ==='frequent'}\">\n                        <div class=\"title\">Freequently contacted</div>\n                    </a>\n                </div>\n\n                <div class=\"nav-item\" aria-label=\"starred\" (click)=\"changeFilter('starred')\">\n                    <a class=\"nav-link\" matRipple [ngClass]=\"{'active':filterBy ==='starred'}\">\n                        <div class=\"title\">Starred Contacts</div>\n                    </a>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n<!-- / SIDENAV CONTENT -->\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/contacts/sidenavs/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  height: 100%; }\n  :host .sidenav-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 0; }\n    @media screen and (min-width: 960px) {\n      :host .sidenav-content {\n        padding: 24px 4px 24px 24px; } }\n    :host .sidenav-content .card {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 auto;\n              flex: 0 1 auto;\n      padding: 0; }\n      @media screen and (min-width: 960px) {\n        :host .sidenav-content .card {\n          box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); } }\n      :host .sidenav-content .card > .header {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 1 auto;\n                flex: 0 1 auto;\n        border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n      :host .sidenav-content .card > .content {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 1 auto;\n                flex: 0 1 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/contacts/sidenavs/main/main.component.ts":
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
var contacts_service_1 = __webpack_require__("../../../../../src/app/main/content/apps/contacts/contacts.service.ts");
var FuseContactsMainSidenavComponent = (function () {
    function FuseContactsMainSidenavComponent(contactsService) {
        var _this = this;
        this.contactsService = contactsService;
        this.filterBy = this.contactsService.filterBy || 'all';
        this.onUserDataChangedSubscription =
            this.contactsService.onUserDataChanged.subscribe(function (user) {
                _this.user = user;
            });
    }
    FuseContactsMainSidenavComponent.prototype.changeFilter = function (filter) {
        this.filterBy = filter;
        this.contactsService.onFilterChanged.next(this.filterBy);
    };
    FuseContactsMainSidenavComponent.prototype.ngOnDestroy = function () {
        this.onUserDataChangedSubscription.unsubscribe();
    };
    FuseContactsMainSidenavComponent = __decorate([
        core_1.Component({
            selector: 'fuse-contacts-main-sidenav',
            template: __webpack_require__("../../../../../src/app/main/content/apps/contacts/sidenavs/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/contacts/sidenavs/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [contacts_service_1.ContactsService])
    ], FuseContactsMainSidenavComponent);
    return FuseContactsMainSidenavComponent;
}());
exports.FuseContactsMainSidenavComponent = FuseContactsMainSidenavComponent;


/***/ })

});
//# sourceMappingURL=contacts.module.chunk.js.map