webpackJsonp(["services.module"],{

/***/ "../../../../../src/app/main/content/services/config/config.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"config\" class=\"page-layout simple fullwidth\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-16\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Services</span>\n            </div>\n            <div class=\"h2 mt-16\">Config</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <p>\n            <code>Config</code> is a custom built Fuse service allows to have a granule control over the Fuse. It can be\n            used for changing theme options (layout, color etc.) by component basis.\n        </p>\n\n        <div class=\"my-48\">\n            <h2>Usage</h2>\n            <p class=\"mat-grey-200-bg py-8\">\n\n                <fuse-highlight lang=\"typescript\">\n                    <textarea #source>\n\n                        export class SomeComponent\n                        {\n                            settings: any;\n\n                            constructor(private fuseConfig: FuseConfigService)\n                            {\n                                // Subscribe to settings changed event\n                                this.fuseConfig.onSettingsChanged.subscribe(\n                                    (newSettings) => {\n                                        this.settings = newSettings;\n                                    }\n                                );\n                            }\n\n                            onInit(){\n\n                                // Fully customizable surroundings for this particular component\n                                this.fuseConfig.setSettings({\n                                    layout          : {\n                                        navigation      : 'left',       // 'right', 'left', 'top', none\n                                        navigationFolded: false,        // true, false\n                                        toolbar         : 'below',      // 'above', 'below', none\n                                        footer          : 'none'        // 'above', 'below', none\n                                        mode            : 'fullwidth'   // 'boxed', 'fullwidth'\n                                    },\n                                    colorClasses    : {\n                                        toolbar: 'mat-white-500-bg',\n                                        navbar : 'mat-fuse-dark-700-bg',\n                                        footer : 'mat-fuse-dark-900-bg'\n                                    },\n                                    customScrollbars: true,\n                                    routerAnimation : 'fadeIn'\n                                });\n                            }\n                        }\n\n                    </textarea>\n                </fuse-highlight>\n\n            </p>\n        </div>\n\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/content/services/config/config.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/services/config/config.component.ts":
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
var FuseConfigServiceDocsComponent = (function () {
    function FuseConfigServiceDocsComponent() {
    }
    FuseConfigServiceDocsComponent = __decorate([
        core_1.Component({
            selector: 'fuse-config-service-docs',
            template: __webpack_require__("../../../../../src/app/main/content/services/config/config.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/services/config/config.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseConfigServiceDocsComponent);
    return FuseConfigServiceDocsComponent;
}());
exports.FuseConfigServiceDocsComponent = FuseConfigServiceDocsComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/services/services.module.ts":
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
var config_component_1 = __webpack_require__("../../../../../src/app/main/content/services/config/config.component.ts");
var splash_screen_component_1 = __webpack_require__("../../../../../src/app/main/content/services/splash-screen/splash-screen.component.ts");
var routes = [
    {
        path: 'config',
        component: config_component_1.FuseConfigServiceDocsComponent
    },
    {
        path: 'splash-screen',
        component: splash_screen_component_1.FuseSplashScreenServiceDocsComponent
    }
];
var FuseServicesModule = (function () {
    function FuseServicesModule() {
    }
    FuseServicesModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [
                config_component_1.FuseConfigServiceDocsComponent,
                splash_screen_component_1.FuseSplashScreenServiceDocsComponent
            ]
        })
    ], FuseServicesModule);
    return FuseServicesModule;
}());
exports.FuseServicesModule = FuseServicesModule;


/***/ }),

/***/ "../../../../../src/app/main/content/services/splash-screen/splash-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"splash-screen\" class=\"page-layout simple fullwidth\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-16\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Services</span>\n            </div>\n            <div class=\"h2 mt-16\">Splash Screen</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <p>\n            <code>Splash screen</code> is a custom built Fuse service allows to have a fully controllable splash\n            screen. It also has built state for application loading so it will always be available while the app\n            loads.\n        </p>\n\n        <div class=\"my-48\">\n            <h2>Usage</h2>\n            <p class=\"mat-grey-200-bg py-8\">\n\n                <fuse-highlight lang=\"typescript\">\n                    <textarea #source>\n\n                        export class SomeComponent\n                        {\n                            constructor(private fuseSplashScreen: FuseSplashScreenService) {}\n\n                            onInit(){\n                                this.fuseSplashScreen.show();\n                                this.fuseSplashScreen.hide();\n                            }\n                        }\n\n                    </textarea>\n                </fuse-highlight>\n\n            </p>\n        </div>\n\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/content/services/splash-screen/splash-screen.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/services/splash-screen/splash-screen.component.ts":
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
var FuseSplashScreenServiceDocsComponent = (function () {
    function FuseSplashScreenServiceDocsComponent() {
    }
    FuseSplashScreenServiceDocsComponent = __decorate([
        core_1.Component({
            selector: 'fuse-splash-screen-service-docs',
            template: __webpack_require__("../../../../../src/app/main/content/services/splash-screen/splash-screen.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/services/splash-screen/splash-screen.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSplashScreenServiceDocsComponent);
    return FuseSplashScreenServiceDocsComponent;
}());
exports.FuseSplashScreenServiceDocsComponent = FuseSplashScreenServiceDocsComponent;


/***/ })

});
//# sourceMappingURL=services.module.chunk.js.map