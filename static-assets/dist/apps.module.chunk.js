webpackJsonp(["apps.module"],{

/***/ "../../../../../src/app/main/content/apps/apps.module.ts":
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
var angular_material_module_1 = __webpack_require__("../../../../../src/app/main/content/components/angular-material/angular-material.module.ts");
var routes = [
    {
        path: 'dashboards/project',
        loadChildren: './dashboards/project/project.module#FuseProjectDashboardModule'
    },
    {
        path: 'mail',
        loadChildren: './mail/mail.module#FuseMailModule'
    },
    {
        path: 'mail-ngrx',
        loadChildren: './mail-ngrx/mail.module#FuseMailNgrxModule'
    },
    {
        path: 'chat',
        loadChildren: './chat/chat.module#FuseChatModule'
    },
    {
        path: 'calendar',
        loadChildren: './calendar/calendar.module#FuseCalendarModule'
    },
    {
        path: 'e-commerce',
        loadChildren: './e-commerce/e-commerce.module#FuseEcommerceModule'
    },
    {
        path: 'academy',
        loadChildren: './academy/academy.module#FuseAcademyModule'
    },
    {
        path: 'todo',
        loadChildren: './todo/todo.module#FuseTodoModule'
    },
    {
        path: 'file-manager',
        loadChildren: './file-manager/file-manager.module#FuseFileManagerModule'
    },
    {
        path: 'contacts',
        loadChildren: './contacts/contacts.module#FuseContactsModule'
    },
    {
        path: 'scrumboard',
        loadChildren: './scrumboard/scrumboard.module#FuseScrumboardModule'
    }
];
var FuseAppsModule = (function () {
    function FuseAppsModule() {
    }
    FuseAppsModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes),
                angular_material_module_1.FuseAngularMaterialModule
            ],
            declarations: []
        })
    ], FuseAppsModule);
    return FuseAppsModule;
}());
exports.FuseAppsModule = FuseAppsModule;


/***/ })

});
//# sourceMappingURL=apps.module.chunk.js.map