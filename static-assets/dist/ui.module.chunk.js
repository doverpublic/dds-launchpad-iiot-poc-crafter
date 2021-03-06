webpackJsonp(["ui.module"],{

/***/ "../../../../../src/app/core/components/demo/demo-content/demo-content.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- DEMO CONTENT -->\n<div class=\"demo-content\">\n\n    <img src=\"assets/images/beach.jpg\" alt=\"beach\" style=\"max-width: 640px; width: 100%;\">\n\n    <h1>Early Sunrise</h1>\n    <h4 class=\"secondary-text\">Demo Content</h4>\n\n    <p>\n        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a\n        horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his\n        brown belly, slightly domed and divided by arches into stiff sections.\n    </p>\n\n    <blockquote>\n        <p>\n            The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs,\n            pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. \"What's\n            happened to me? \" he thought. It wasn't a dream.\n        </p>\n        <footer>\n            John Doe\n        </footer>\n    </blockquote>\n\n    <p>\n        His room, a proper human room although a little too small, lay peacefully between its four familiar\n        walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman -\n        and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in\n        a nice, gilded frame.\n    </p>\n\n    <p>\n        It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that\n        covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the\n        dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad.\n    </p>\n\n    <p>\n        \"How about if I sleep a little bit longer and forget all this nonsense\", he thought, but that was\n        something he was unable to do because he was used to sleeping on his right, and in his present state\n        couldn't get into that position. However hard he threw himself onto his right, he always rolled back to\n        where he was.\n    </p>\n\n    <p>\n        He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering\n        legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before. \"Oh,\n        God\", he thought, \"what a strenuous career it is that I've chosen!\n    </p>\n\n    <p>\n        Travelling day in and day out. Doing business like this takes much more effort than doing your own\n        business at home, and on top of that there's the curse of travelling, worries about making train\n        connections, bad and irregular food, contact with different people all the time so that you can never\n        get to know anyone or become friendly with them.\n    </p>\n\n    <p>\n        \"He felt a slight itch up on his belly; pushed himself slowly up on his back towards the headboard so\n        that he could lift his head better; found where the itch was, and saw that it was covered with lots of\n        little white spots which he didn't know what to make of; and when he tried to feel the place with one of\n        his legs he drew it quickly back because as soon as he touched it he was overcome by a cold shudder. He\n        slid back into his former position.\n    </p>\n\n    <p>\n        \"Getting up early all the time\", he thought, \"it makes you stupid. You've got to get enough sleep. Other\n        travelling salesmen live a life of luxury. For instance, whenever I go back to the guest house during\n        the morning to copy out the contract, these gentlemen are always still sitting there eating their\n        breakfasts. I ought to just try that with my boss; I'd get kicked out on the spot. But who knows, maybe\n        that would be the best thing for me...\n    </p>\n</div>\n<!-- / DEMO CONTENT -->\n"

/***/ }),

/***/ "../../../../../src/app/core/components/demo/demo-content/demo-content.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/demo/demo-content/demo-content.component.ts":
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
var FuseDemoContentComponent = (function () {
    function FuseDemoContentComponent() {
    }
    FuseDemoContentComponent = __decorate([
        core_1.Component({
            selector: 'fuse-demo-content',
            template: __webpack_require__("../../../../../src/app/core/components/demo/demo-content/demo-content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/demo/demo-content/demo-content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseDemoContentComponent);
    return FuseDemoContentComponent;
}());
exports.FuseDemoContentComponent = FuseDemoContentComponent;


/***/ }),

/***/ "../../../../../src/app/core/components/demo/demo-sidenav/demo-sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-sidenav\">\n    <mat-list>\n        <h3 matSubheader>Sidenav Demo</h3>\n\n        <mat-list-item>\n            <span>Sidenav Item 1</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 2</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 3</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 4</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 5</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 6</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 7</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 8</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 9</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 10</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 11</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 12</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 13</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 14</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 15</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 16</span>\n        </mat-list-item>\n\n    </mat-list>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/components/demo/demo-sidenav/demo-sidenav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/demo/demo-sidenav/demo-sidenav.component.ts":
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
var FuseDemoSidenavComponent = (function () {
    function FuseDemoSidenavComponent() {
    }
    FuseDemoSidenavComponent = __decorate([
        core_1.Component({
            selector: 'fuse-demo-sidenav',
            template: __webpack_require__("../../../../../src/app/core/components/demo/demo-sidenav/demo-sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/demo/demo-sidenav/demo-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseDemoSidenavComponent);
    return FuseDemoSidenavComponent;
}());
exports.FuseDemoSidenavComponent = FuseDemoSidenavComponent;


/***/ }),

/***/ "../../../../../src/app/core/components/demo/demo.module.ts":
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
var demo_content_component_1 = __webpack_require__("../../../../../src/app/core/components/demo/demo-content/demo-content.component.ts");
var demo_sidenav_component_1 = __webpack_require__("../../../../../src/app/core/components/demo/demo-sidenav/demo-sidenav.component.ts");
var FuseDemoModule = (function () {
    function FuseDemoModule() {
    }
    FuseDemoModule = __decorate([
        core_1.NgModule({
            declarations: [
                demo_content_component_1.FuseDemoContentComponent,
                demo_sidenav_component_1.FuseDemoSidenavComponent
            ],
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule
            ],
            exports: [
                demo_content_component_1.FuseDemoContentComponent,
                demo_sidenav_component_1.FuseDemoSidenavComponent
            ]
        })
    ], FuseDemoModule);
    return FuseDemoModule;
}());
exports.FuseDemoModule = FuseDemoModule;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/colors/colors.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"material-colors\" class=\"page-layout simple tabbed\" fxLayout=\"column\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"column\" fxLayoutAlign.gt-xs=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-16\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">User Interface</span>\n            </div>\n            <div class=\"h1 mt-16\">Colors</div>\n        </div>\n\n        <a mat-raised-button class=\"reference-button mat-white-bg mt-16 mt-sm-0\"\n           href=\"https://www.google.com/design/spec/style/color.html#color-color-palette\"\n           target=\"_blank\">\n            <mat-icon>link</mat-icon>\n            <span>Reference</span>\n        </a>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\">\n\n        <mat-tab-group class=\"color-tabs\" dynamicHeight=\"true\" (selectedTabChange)=\"selectColor($event)\">\n\n            <mat-tab *ngFor=\"let color of ['primary', 'accent', 'warn']\" label=\"{{color}}\">\n                <ng-template mat-tab-label>\n                    <span class=\"text-capitalize\">{{color}}</span>\n                </ng-template>\n            </mat-tab>\n\n            <mat-tab *ngFor=\"let color of (colors | keys)\" label=\"{{color.key}}\">\n                <ng-template mat-tab-label>\n                    <span class=\"text-capitalize\">{{color.key}}</span>\n                </ng-template>\n            </mat-tab>\n\n        </mat-tab-group>\n\n        <div class=\"color-tabs-content p-24\" fxLayout=\"column\">\n\n            <div class=\"h3 pb-16\">Fuse has classes for every single color from\n                <a href=\"https://www.google.com/design/spec/style/color.html#color-color-palette\"\n                   target=\"_blank\">Material\n                    Design Color Palette</a> for your convenient. You can use them with pretty much every\n                element.\n            </div>\n\n            <div class=\"color-header colored-bg p-8\"\n                 [ngClass]=\"'mat-'+selectedColor+'-bg'\"\n                 fxLayout=\"column\">\n                <div class=\"p-8\">\n                    <h3 class=\"text-capitalize\">{{selectedColor}}</h3>\n                </div>\n                <div class=\"p-8\" fxLayout=\"row\">\n\n                    <div fxFlex=\"30\" fxLayoutAlign=\"start center\">500</div>\n\n                    <div class=\"colored-bg p-8\" [ngClass]=\"'mat-'+selectedColor+'-bg'\" fxFlex=\"30\">\n                        <div class=\"pb-4\">.{{'mat-'+selectedColor+'-bg'}}</div>\n                        <div class=\"secondary-text pb-4\">.secondary-text</div>\n                        <div class=\"hint-text pb-4\">.hint-text, .disabled-text</div>\n                        <div class=\"divider\">.divider</div>\n                    </div>\n\n                    <div fxFlex=\"30\">\n                    </div>\n\n                    <div fxFlex=\"128px\">\n                        {{selectedColorDefaultValue}}\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"color\" fxLayout=\"column\" fxFlex=\"1 0 auto\" *ngIf=\"selectedColor != 'black' && selectedColor != 'white'\">\n\n                <div class=\"colored-bg p-8\"\n                     *ngFor=\"let hue of ['50','100','200','300','400','500','600','700','800','900','A100','A200','A400','A700']\"\n                     fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayout.sm=\"column\"\n                     [ngClass]=\"selectedColor+'-'+hue+'-bg'\">\n\n                    <div class=\"p-8\" fxFlex=\"30\" fxLayoutAlign=\"start center\">{{hue}}</div>\n\n                    <div class=\"colored-bg p-8\" [ngClass]=\"'mat-'+selectedColor+'-'+hue+'-bg'\" fxFlex=\"30\">\n                        <div class=\"pb-4\">.{{'mat-'+selectedColor+'-'+hue+'-bg'}}</div>\n                        <div class=\"secondary-text pb-4\">.secondary-text</div>\n                        <div class=\"hint-text pb-4\">.hint-text, .disabled-text</div>\n                        <div class=\"divider\">.divider</div>\n                    </div>\n\n                    <div class=\"p-8\" fxFlex=\"30\" fxLayoutAlign=\"start center\">.{{selectedColor+'-'+hue+'-bg'}}</div>\n\n                    <div class=\"fg-box mat-elevation-z2 p-8\"\n                         [ngClass]=\"selectedColor+'-'+hue+'-fg'\" fxFlex=\"128px\" fxLayoutAlign=\"center center\">\n                        .{{selectedColor+'-'+hue+'-fg'}}\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n    <!-- / CONTENT -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/colors/colors.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .content .color-tabs-content .color .fg-box {\n  background-color: white; }\n\n:host .content .color-tabs-content .colored-bg {\n  transition: background-color 400ms ease; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/colors/colors.component.ts":
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
var matColors_1 = __webpack_require__("../../../../../src/app/core/matColors.ts");
var FuseColorsComponent = (function () {
    function FuseColorsComponent() {
        this.colors = matColors_1.MatColors.all;
        this.updateSelectedColor('primary');
    }
    FuseColorsComponent.prototype.ngOnInit = function () {
    };
    FuseColorsComponent.prototype.selectColor = function (selected) {
        this.updateSelectedColor(selected.tab.textLabel);
    };
    FuseColorsComponent.prototype.updateSelectedColor = function (colorName) {
        this.selectedColor = colorName;
        this.selectedColorDefaultValue = matColors_1.MatColors.getColor(this.selectedColor)[500];
    };
    FuseColorsComponent = __decorate([
        core_1.Component({
            selector: 'fuse-colors',
            template: __webpack_require__("../../../../../src/app/main/content/ui/colors/colors.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/colors/colors.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseColorsComponent);
    return FuseColorsComponent;
}());
exports.FuseColorsComponent = FuseColorsComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/colors/colors.module.ts":
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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var shared_module_1 = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
var demo_module_1 = __webpack_require__("../../../../../src/app/core/components/demo/demo.module.ts");
var colors_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/colors/colors.component.ts");
var routes = [
    {
        path: 'colors',
        component: colors_component_1.FuseColorsComponent
    }
];
var UIColorsModule = (function () {
    function UIColorsModule() {
    }
    UIColorsModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes),
                demo_module_1.FuseDemoModule
            ],
            declarations: [
                colors_component_1.FuseColorsComponent
            ]
        })
    ], UIColorsModule);
    return UIColorsModule;
}());
exports.UIColorsModule = UIColorsModule;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/forms/forms.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"forms\" class=\"page-layout simple fullwidth\" fxLayout=\"column\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-16\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">User Interface</span>\n            </div>\n            <div class=\"h1 mt-16\">Forms</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <div class=\"h1\">\n            Reactive Forms\n        </div>\n\n        <p class=\"pt-16 pb-32\">\n            Angular reactive forms facilitate a reactive style of programming that favors explicit management of the\n            data flowing between a non-UI data model (typically retrieved from a server) and a UI-oriented form model\n            that retains the states and values of the HTML controls on screen. Reactive forms offer the ease of using\n            reactive patterns, testing, and validation.\n        </p>\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayout.gt-md=\"row\">\n\n            <!-- REACTIVE FORM EXAMPLE -->\n\n            <form class=\"mat-white-bg mat-elevation-z4 p-24 mr-24 mb-24\" fxLayout=\"column\" fxLayoutAlign=\"start\"\n                  fxFlex=\"1 0 auto\" name=\"form\" [formGroup]=\"form\">\n\n                <div class=\"h2 mb-24\">Reactive Form Example</div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\n\n                    <mat-form-field fxFlex=\"100\">\n                        <input matInput placeholder=\"Company (disabled)\" formControlName=\"company\">\n                    </mat-form-field>\n\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\n\n                    <mat-form-field fxFlex=\"50\">\n                        <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\n                        <mat-error *ngIf=\"formErrors.firstName.required\">\n                            First Name is required!\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field fxFlex=\"50\">\n                        <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\n                        <mat-error *ngIf=\"formErrors.lastName.required\">\n                            Last Name is required!\n                        </mat-error>\n                    </mat-form-field>\n\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\" fxLayoutWrap>\n\n                    <mat-form-field fxFlex=\"100\">\n                        <textarea matInput placeholder=\"Address\" formControlName=\"address\" required>\n                            1600 Amphitheatre Pkwy\n                        </textarea>\n                        <mat-error *ngIf=\"formErrors.address.required\">\n                            Address is required!\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field fxFlex=\"100\">\n                        <textarea matInput placeholder=\"Address 2\" formControlName=\"address2\"></textarea>\n                        <mat-error *ngIf=\"formErrors.address2.required\">\n                            Address 2 is required!\n                        </mat-error>\n                    </mat-form-field>\n\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\n\n                    <mat-form-field fxFlex=\"33\">\n                        <input matInput placeholder=\"City\" formControlName=\"city\" required>\n                        <mat-error *ngIf=\"formErrors.city.required\">\n                            City is required!\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field fxFlex=\"34\">\n                        <input matInput placeholder=\"State\" formControlName=\"state\" required>\n                        <mat-error *ngIf=\"formErrors.state.required\">\n                            State is required!\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field fxFlex=\"33\">\n                        <input matInput #postalCode placeholder=\"Postal Code\" value=\"94043\"\n                               formControlName=\"postalCode\" required>\n                        <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n                        <mat-error *ngIf=\"formErrors.postalCode.maxlength\">\n                            Postal Code needs to be max. {{formErrors.postalCode.maxlength.requiredLength}} characters\n                        </mat-error>\n                        <mat-error *ngIf=\"formErrors.postalCode.required\">\n                            Postal Code is required!\n                        </mat-error>\n                    </mat-form-field>\n\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\n\n                    <mat-form-field fxFlex=\"100\">\n                        <mat-select placeholder=\"Country\" formControlName=\"country\" required>\n                            <mat-option [value]=\"'United States of America'\">\n                                United States of America\n                            </mat-option>\n                            <mat-option [value]=\"'United Kingdom'\">\n                                United Kingdom\n                            </mat-option>\n                            <mat-option [value]=\"'Russia'\">\n                                Russia\n                            </mat-option>\n                            <mat-option [value]=\"'China'\">\n                                China\n                            </mat-option>\n                            <mat-option [value]=\"'Japan'\">\n                                Japan\n                            </mat-option>\n                            <mat-option [value]=\"'Turkey'\">\n                                Turkey\n                            </mat-option>\n                        </mat-select>\n                        <mat-error *ngIf=\"formErrors.country.required\">\n                            Country is required!\n                        </mat-error>\n                    </mat-form-field>\n\n                </div>\n\n            </form>\n\n            <!-- / REACTIVE FORM EXAMPLE -->\n\n            <div class=\"form-errors-model mat-white-bg p-24 mat-elevation-z4\">\n\n                <div class=\"h2 mb-24\">Reactive Form Errors Model</div>\n\n                <pre><code>{{formErrors | json}}</code></pre>\n            </div>\n\n        </div>\n\n        <div class=\"h1 pt-32\">\n            Horizontal Stepper\n        </div>\n\n        <p class=\"pb-32\">\n            Angular Material's stepper provides a wizard-like workflow by dividing content into logical steps.\n            <code>mat-horizontal-stepper</code> selector can be used to create a horizontal stepper.\n        </p>\n\n        <div class=\"horizontal-stepper-wrapper\">\n\n            <!-- HORIZONTAL STEPPER EXAMPLE -->\n            <mat-horizontal-stepper class=\"mat-elevation-z4\" [linear]=\"true\">\n\n                <mat-step [stepControl]=\"horizontalStepperStep1\">\n\n                    <form [formGroup]=\"horizontalStepperStep1\">\n\n                        <ng-template matStepLabel>Fill out your name</ng-template>\n\n                        <div>\n\n                            <mat-form-field fxFlex=\"50\">\n                                <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\n                                <mat-error *ngIf=\"horizontalStepperStep1Errors.firstName.required\">\n                                    First Name is required!\n                                </mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex=\"50\">\n                                <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\n                                <mat-error *ngIf=\"formErrors.lastName.required\">\n                                    Last Name is required!\n                                </mat-error>\n                            </mat-form-field>\n\n                        </div>\n\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\n                                Next\n                            </button>\n                        </div>\n\n                    </form>\n\n                </mat-step>\n\n                <mat-step [stepControl]=\"horizontalStepperStep2\">\n\n                    <form [formGroup]=\"horizontalStepperStep2\">\n\n                        <ng-template matStepLabel>Fill out your address</ng-template>\n\n                        <div>\n\n                            <mat-form-field fxFlex=\"100\">\n                                <textarea matInput placeholder=\"Address\" formControlName=\"address\" required>\n                                    1600 Amphitheatre Pkwy\n                                </textarea>\n                                <mat-error *ngIf=\"horizontalStepperStep2Errors.address.required\">\n                                    Address is required!\n                                </mat-error>\n                            </mat-form-field>\n\n                        </div>\n\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                            <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\n                                Previous\n                            </button>\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\n                                Next\n                            </button>\n                        </div>\n\n                    </form>\n\n                </mat-step>\n\n                <mat-step [stepControl]=\"horizontalStepperStep3\">\n\n                    <form [formGroup]=\"horizontalStepperStep3\">\n\n                        <ng-template matStepLabel>Fill out your address</ng-template>\n\n                        <div>\n\n                            <mat-form-field fxFlex=\"33\">\n                                <input matInput placeholder=\"City\" formControlName=\"city\" required>\n                                <mat-error *ngIf=\"horizontalStepperStep3Errors.city.required\">\n                                    City is required!\n                                </mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex=\"34\">\n                                <input matInput placeholder=\"State\" formControlName=\"state\" required>\n                                <mat-error *ngIf=\"horizontalStepperStep3Errors.state.required\">\n                                    State is required!\n                                </mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex=\"33\">\n                                <input matInput #postalCode placeholder=\"Postal Code\" formControlName=\"postalCode\"\n                                       required>\n                                <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n                                <mat-error *ngIf=\"horizontalStepperStep3Errors.postalCode.maxlength\">\n                                    Postal Code needs to be max.\n                                    {{horizontalStepperStep3Errors.postalCode.maxlength.requiredLength}} characters\n                                </mat-error>\n                                <mat-error *ngIf=\"horizontalStepperStep3Errors.postalCode.required\">\n                                    Postal Code is required!\n                                </mat-error>\n                            </mat-form-field>\n\n                        </div>\n\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                            <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\n                                Previous\n                            </button>\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\n                                Next\n                            </button>\n                        </div>\n\n                    </form>\n\n                </mat-step>\n\n                <mat-step>\n\n                    <ng-template matStepLabel>Done</ng-template>\n\n                    <div class=\"h2 m-16\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                        Thank your for filling out our form.\n                    </div>\n\n                    <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                        <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\n                            Previous\n                        </button>\n                        <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"finishHorizontalStepper()\">\n                            Finish\n                        </button>\n                    </div>\n\n                </mat-step>\n\n            </mat-horizontal-stepper>\n            <!-- / HORIZONTAL STEPPER EXAMPLE -->\n\n        </div>\n\n        <div class=\"h1 pt-48\">\n            Vertical Stepper\n        </div>\n\n        <p class=\"pb-32\">\n            Angular Material's stepper provides a wizard-like workflow by dividing content into logical steps.\n            <code>mat-vertical-stepper</code> can be used to create a vertical stepper.\n        </p>\n\n        <div class=\"vertical-stepper-wrapper\">\n\n            <!-- VERTICAL STEPPER EXAMPLE -->\n            <mat-vertical-stepper class=\"mat-elevation-z4\" [linear]=\"true\">\n\n                <mat-step [stepControl]=\"verticalStepperStep1\">\n\n                    <form [formGroup]=\"verticalStepperStep1\">\n\n                        <ng-template matStepLabel>Fill out your name</ng-template>\n\n                        <div>\n\n                            <mat-form-field fxFlex=\"50\">\n                                <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\n                                <mat-error *ngIf=\"verticalStepperStep1Errors.firstName.required\">\n                                    First Name is required!\n                                </mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex=\"50\">\n                                <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\n                                <mat-error *ngIf=\"formErrors.lastName.required\">\n                                    Last Name is required!\n                                </mat-error>\n                            </mat-form-field>\n\n                        </div>\n\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\n                                Next\n                            </button>\n                        </div>\n\n                    </form>\n\n                </mat-step>\n\n                <mat-step [stepControl]=\"verticalStepperStep2\">\n\n                    <form [formGroup]=\"verticalStepperStep2\">\n\n                        <ng-template matStepLabel>Fill out your address</ng-template>\n\n                        <div>\n\n                            <mat-form-field fxFlex=\"100\">\n                                <textarea matInput placeholder=\"Address\" formControlName=\"address\" required>\n                                    1600 Amphitheatre Pkwy\n                                </textarea>\n                                <mat-error *ngIf=\"verticalStepperStep2Errors.address.required\">\n                                    Address is required!\n                                </mat-error>\n                            </mat-form-field>\n\n                        </div>\n\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                            <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\n                                Previous\n                            </button>\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\n                                Next\n                            </button>\n                        </div>\n\n                    </form>\n\n                </mat-step>\n\n                <mat-step [stepControl]=\"verticalStepperStep3\">\n\n                    <form [formGroup]=\"verticalStepperStep3\">\n\n                        <ng-template matStepLabel>Fill out your address</ng-template>\n\n                        <div>\n\n                            <mat-form-field fxFlex=\"33\">\n                                <input matInput placeholder=\"City\" formControlName=\"city\" required>\n                                <mat-error *ngIf=\"verticalStepperStep3Errors.city.required\">\n                                    City is required!\n                                </mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex=\"34\">\n                                <input matInput placeholder=\"State\" formControlName=\"state\" required>\n                                <mat-error *ngIf=\"verticalStepperStep3Errors.state.required\">\n                                    State is required!\n                                </mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field fxFlex=\"33\">\n                                <input matInput #postalCode placeholder=\"Postal Code\" formControlName=\"postalCode\"\n                                       required>\n                                <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n                                <mat-error *ngIf=\"verticalStepperStep3Errors.postalCode.maxlength\">\n                                    Postal Code needs to be max.\n                                    {{verticalStepperStep3Errors.postalCode.maxlength.requiredLength}} characters\n                                </mat-error>\n                                <mat-error *ngIf=\"verticalStepperStep3Errors.postalCode.required\">\n                                    Postal Code is required!\n                                </mat-error>\n                            </mat-form-field>\n\n                        </div>\n\n                        <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                            <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\n                                Previous\n                            </button>\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\n                                Next\n                            </button>\n                        </div>\n\n                    </form>\n\n                </mat-step>\n\n                <mat-step>\n\n                    <ng-template matStepLabel>Done</ng-template>\n\n                    <div class=\"h2 m-16\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                        Thank your for filling out our form.\n                    </div>\n\n                    <div class=\"pt-24\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                        <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\n                            Previous\n                        </button>\n                        <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"finishVerticalStepper()\">\n                            Finish\n                        </button>\n                    </div>\n\n                </mat-step>\n\n            </mat-vertical-stepper>\n            <!-- / VERTICAL STEPPER EXAMPLE -->\n\n        </div>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/forms/forms.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .content form {\n  width: 100%;\n  max-width: 800px !important; }\n\n:host .content .form-errors-model {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  :host .content .form-errors-model code {\n    background: none !important; }\n\n:host .content .horizontal-stepper-wrapper,\n:host .content .vertical-stepper-wrapper {\n  max-width: 800px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/forms/forms.component.ts":
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
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var FuseFormsComponent = (function () {
    function FuseFormsComponent(formBuilder) {
        this.formBuilder = formBuilder;
        // Reactive form errors
        this.formErrors = {
            company: {},
            firstName: {},
            lastName: {},
            address: {},
            address2: {},
            city: {},
            state: {},
            postalCode: {},
            country: {}
        };
        // Horizontal Stepper form error
        this.horizontalStepperStep1Errors = {
            firstName: {},
            lastName: {}
        };
        this.horizontalStepperStep2Errors = {
            address: {}
        };
        this.horizontalStepperStep3Errors = {
            city: {},
            state: {},
            postalCode: {}
        };
        // Vertical Stepper form error
        this.verticalStepperStep1Errors = {
            firstName: {},
            lastName: {}
        };
        this.verticalStepperStep2Errors = {
            address: {}
        };
        this.verticalStepperStep3Errors = {
            city: {},
            state: {},
            postalCode: {}
        };
    }
    FuseFormsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Reactive Form
        this.form = this.formBuilder.group({
            company: [
                {
                    value: 'Google',
                    disabled: true
                }, forms_1.Validators.required
            ],
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            address: ['', forms_1.Validators.required],
            address2: ['', forms_1.Validators.required],
            city: ['', forms_1.Validators.required],
            state: ['', forms_1.Validators.required],
            postalCode: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(5)]],
            country: ['', forms_1.Validators.required]
        });
        this.form.valueChanges.subscribe(function () {
            _this.onFormValuesChanged();
        });
        // Horizontal Stepper form steps
        this.horizontalStepperStep1 = this.formBuilder.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required]
        });
        this.horizontalStepperStep2 = this.formBuilder.group({
            address: ['', forms_1.Validators.required]
        });
        this.horizontalStepperStep3 = this.formBuilder.group({
            city: ['', forms_1.Validators.required],
            state: ['', forms_1.Validators.required],
            postalCode: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(5)]]
        });
        this.horizontalStepperStep1.valueChanges.subscribe(function () {
            _this.onFormValuesChanged();
        });
        this.horizontalStepperStep2.valueChanges.subscribe(function () {
            _this.onFormValuesChanged();
        });
        this.horizontalStepperStep3.valueChanges.subscribe(function () {
            _this.onFormValuesChanged();
        });
        // Vertical Stepper form stepper
        this.verticalStepperStep1 = this.formBuilder.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required]
        });
        this.verticalStepperStep2 = this.formBuilder.group({
            address: ['', forms_1.Validators.required]
        });
        this.verticalStepperStep3 = this.formBuilder.group({
            city: ['', forms_1.Validators.required],
            state: ['', forms_1.Validators.required],
            postalCode: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(5)]]
        });
        this.verticalStepperStep1.valueChanges.subscribe(function () {
            _this.onFormValuesChanged();
        });
        this.verticalStepperStep2.valueChanges.subscribe(function () {
            _this.onFormValuesChanged();
        });
        this.verticalStepperStep3.valueChanges.subscribe(function () {
            _this.onFormValuesChanged();
        });
    };
    FuseFormsComponent.prototype.onFormValuesChanged = function () {
        for (var field in this.formErrors) {
            if (!this.formErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.formErrors[field] = {};
            // Get the control
            var control = this.form.get(field);
            if (control && control.dirty && !control.valid) {
                this.formErrors[field] = control.errors;
            }
        }
    };
    FuseFormsComponent.prototype.finishHorizontalStepper = function () {
        alert('You have finished the horizontal stepper!');
    };
    FuseFormsComponent.prototype.finishVerticalStepper = function () {
        alert('You have finished the vertical stepper!');
    };
    FuseFormsComponent = __decorate([
        core_1.Component({
            selector: 'fuse-forms',
            template: __webpack_require__("../../../../../src/app/main/content/ui/forms/forms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/forms/forms.component.scss")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], FuseFormsComponent);
    return FuseFormsComponent;
}());
exports.FuseFormsComponent = FuseFormsComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/forms/forms.module.ts":
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
var forms_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/forms/forms.component.ts");
var routes = [
    {
        path: 'forms',
        component: forms_component_1.FuseFormsComponent
    }
];
var UIFormsModule = (function () {
    function UIFormsModule() {
    }
    UIFormsModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [
                forms_component_1.FuseFormsComponent
            ]
        })
    ], UIFormsModule);
    return UIFormsModule;
}());
exports.UIFormsModule = UIFormsModule;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/helper-classes/helper-classes.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"helper-classes\" class=\"page-layout simple tabbed\" fxLayout=\"column\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-16\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">User Interface</span>\n            </div>\n            <div class=\"h1 mt-16\">Helper Classes</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\">\n\n        <mat-tab-group dynamicHeight=\"true\">\n\n            <mat-tab label=\"Padding & Margin Helpers\">\n\n                <fuse-helper-classes-padding-margin></fuse-helper-classes-padding-margin>\n\n            </mat-tab>\n\n            <mat-tab label=\"Width & Height Helpers\">\n\n                <fuse-helper-classes-width-height></fuse-helper-classes-width-height>\n\n            </mat-tab>\n\n        </mat-tab-group>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/helper-classes/helper-classes.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/helper-classes/helper-classes.component.ts":
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
var FuseHelperClassesComponent = (function () {
    function FuseHelperClassesComponent() {
    }
    FuseHelperClassesComponent = __decorate([
        core_1.Component({
            selector: 'fuse-helper-classes',
            template: __webpack_require__("../../../../../src/app/main/content/ui/helper-classes/helper-classes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/helper-classes/helper-classes.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseHelperClassesComponent);
    return FuseHelperClassesComponent;
}());
exports.FuseHelperClassesComponent = FuseHelperClassesComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/helper-classes/helper-classes.module.ts":
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
var helper_classes_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/helper-classes/helper-classes.component.ts");
var padding_margin_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/helper-classes/tabs/padding-margin/padding-margin.component.ts");
var width_height_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/helper-classes/tabs/width-height/width-height.component.ts");
var routes = [
    {
        path: 'helper-classes',
        component: helper_classes_component_1.FuseHelperClassesComponent
    }
];
var UIHelperClassesModule = (function () {
    function UIHelperClassesModule() {
    }
    UIHelperClassesModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [
                helper_classes_component_1.FuseHelperClassesComponent,
                padding_margin_component_1.FuseHelperClassesPaddingMarginComponent,
                width_height_component_1.FuseHelperClassesWidthHeightComponent
            ]
        })
    ], UIHelperClassesModule);
    return UIHelperClassesModule;
}());
exports.UIHelperClassesModule = UIHelperClassesModule;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/helper-classes/tabs/padding-margin/padding-margin.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"helper-classes-padding-margin\" class=\"p-24\">\n\n    <div class=\"mat-title\">Padding Helpers</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>p-0</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"p-0\">No padding</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\n                <span>p-4</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"p-4\">4px padding</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\n                <span>p-12</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"p-12\">12px padding</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-20\">Direction Specific Padding Helpers</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\n                <span>pt-0</span>\n                <span>pr-0</span>\n                <span>pb-0</span>\n                <span>pl-0</span>\n                <span>px-0</span>\n                <span>py-0</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"pt-0\">0 padding from top</span>\n                    <span class=\"pr-0\">0 padding from right</span>\n                    <span class=\"pb-0\">0 padding from bottom</span>\n                    <span class=\"pl-0\">0 padding from left</span>\n                    <span class=\"px-0\">0 padding from left and right</span>\n                    <span class=\"py-0\">0 padding from top and bottom</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\n                <span>pt-4</span>\n                <span>pr-4</span>\n                <span>pb-4</span>\n                <span>pl-4</span>\n                <span>px-4</span>\n                <span>py-4</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"pt-4\">4px padding from top</span>\n                    <span class=\"pr-4\">4px padding from right</span>\n                    <span class=\"pb-4\">4px padding from bottom</span>\n                    <span class=\"pl-4\">4px padding from left</span>\n                    <span class=\"px-4\">4px padding from left and right</span>\n                    <span class=\"py-4\">4px padding from top and bottom</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-20\">Margin Helpers</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>m-0</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"m-0\">No margin</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\n                <span>m-4</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"m-4\">4px margin</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\n                <span>m-12</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"m-12\">12px margin</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-20\">Direction Specific Margin Helpers</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\n                <span>mt-0</span>\n                <span>mr-0</span>\n                <span>mb-0</span>\n                <span>ml-0</span>\n                <span>mx-0</span>\n                <span>my-0</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mt-0\">0 margin from top</span>\n                    <span class=\"mr-0\">0 margin from right</span>\n                    <span class=\"mb-0\">0 margin from bottom</span>\n                    <span class=\"ml-0\">0 margin from left</span>\n                    <span class=\"mx-0\">0 margin from left and right</span>\n                    <span class=\"my-0\">0 margin from top and bottom</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\n                <span>mt-4</span>\n                <span>mr-4</span>\n                <span>mb-4</span>\n                <span>ml-4</span>\n                <span>mx-4</span>\n                <span>my-4</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mt-4\">4px margin from top</span>\n                    <span class=\"mr-4\">4px margin from right</span>\n                    <span class=\"mb-4\">4px margin from bottom</span>\n                    <span class=\"ml-4\">4px margin from left</span>\n                    <span class=\"mx-4\">4px margin from left and right</span>\n                    <span class=\"my-4\">4px margin from top and bottom</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/helper-classes/tabs/padding-margin/padding-margin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host #helper-classes-padding-margin .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #helper-classes-padding-margin .source-code code {\n    background: none !important; }\n\n:host #helper-classes-padding-margin .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #helper-classes-padding-margin .preview:last-child {\n    margin-bottom: 0; }\n  :host #helper-classes-padding-margin .preview .mat-caption {\n    margin-bottom: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/helper-classes/tabs/padding-margin/padding-margin.component.ts":
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
var FuseHelperClassesPaddingMarginComponent = (function () {
    function FuseHelperClassesPaddingMarginComponent() {
    }
    FuseHelperClassesPaddingMarginComponent = __decorate([
        core_1.Component({
            selector: 'fuse-helper-classes-padding-margin',
            template: __webpack_require__("../../../../../src/app/main/content/ui/helper-classes/tabs/padding-margin/padding-margin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/helper-classes/tabs/padding-margin/padding-margin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseHelperClassesPaddingMarginComponent);
    return FuseHelperClassesPaddingMarginComponent;
}());
exports.FuseHelperClassesPaddingMarginComponent = FuseHelperClassesPaddingMarginComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/helper-classes/tabs/width-height/width-height.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"helper-classes-width-height\" class=\"p-24\">\n\n    <div class=\"mat-title\">Width Helpers</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>w-0</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"w-0\">0px width</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:512, Multiples of 4</div>\n                <span>w-100</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"w-100\">100px width</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:100, Multiples of 5</div>\n                <span>w-25-p</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"w-25-p\">25% width</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:100, Multiples of 5</div>\n                <span>w-100-p</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"w-100-p\">100% width</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-20\">Height Helpers</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>h-0</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"h-0\">0px height</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:512, Multiples of 4</div>\n                <span>h-100</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"h-100\">100px height</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:100, Multiples of 5</div>\n                <span>h-25-p</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"h-25-p\">25% height</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Min:0 - Max:100, Multiples of 5</div>\n                <span>h-100-p</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"h-100-p\">100% height</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/helper-classes/tabs/width-height/width-height.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host #helper-classes-width-height .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #helper-classes-width-height .source-code code {\n    background: none !important; }\n\n:host #helper-classes-width-height .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #helper-classes-width-height .preview:last-child {\n    margin-bottom: 0; }\n  :host #helper-classes-width-height .preview .mat-caption {\n    margin-bottom: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/helper-classes/tabs/width-height/width-height.component.ts":
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
var FuseHelperClassesWidthHeightComponent = (function () {
    function FuseHelperClassesWidthHeightComponent() {
    }
    FuseHelperClassesWidthHeightComponent = __decorate([
        core_1.Component({
            selector: 'fuse-helper-classes-width-height',
            template: __webpack_require__("../../../../../src/app/main/content/ui/helper-classes/tabs/width-height/width-height.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/helper-classes/tabs/width-height/width-height.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseHelperClassesWidthHeightComponent);
    return FuseHelperClassesWidthHeightComponent;
}());
exports.FuseHelperClassesWidthHeightComponent = FuseHelperClassesWidthHeightComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"helper-classes\" class=\"page-layout simple tabbed\" fxLayout=\"column\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"column\" fxLayoutAlign.gt-xs=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-16\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">User Interface</span>\n            </div>\n            <div class=\"h1 mt-16\">Icons</div>\n        </div>\n\n        <a mat-raised-button class=\"reference-button mat-white-bg mt-16 mt-sm-0\" href=\"https://material.angular.io\" target=\"_blank\">\n            <mat-icon>link</mat-icon>\n            <span>Reference</span>\n        </a>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n            <mat-spinner *ngIf=\"loading\" color=\"accent\"></mat-spinner>\n        </div>\n\n        <div *ngIf=\"!loading\">\n\n            <div fxLayout=\"column\">\n\n                <div class=\"m-32\">\n                    <mat-form-field class=\"w-100-p\">\n                        <input matInput placeholder=\"Search an icon...\" (input)=\"filterIcons($event)\">\n                    </mat-form-field>\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutWrap>\n\n                    <div class=\"icon-holder m-16\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\n                         *ngFor=\"let icon of filteredIcons\">\n                        <mat-icon class=\"s-48\">{{icon}}</mat-icon>\n                        <div class=\"icon-name secondary-text mt-8\">{{icon}}</div>\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/icons/icons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .content {\n  max-width: 1200px; }\n  :host .content .icon-holder {\n    width: 112px;\n    height: 120px; }\n    :host .content .icon-holder .icon-name {\n      font-size: 12px;\n      word-wrap: break-word;\n      width: 100px;\n      text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/icons/icons.component.ts":
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
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var FuseIconsComponent = (function () {
    function FuseIconsComponent(http) {
        this.http = http;
        this.loading = true;
    }
    FuseIconsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('api/icons')
            .subscribe(function (icons) {
            _this.icons = icons;
            _this.filteredIcons = _this.icons;
            _this.loading = false;
        });
    };
    FuseIconsComponent.prototype.filterIcons = function (event) {
        var value = event.target.value;
        this.filteredIcons = this.icons.filter(function (icon) {
            return icon.includes(value);
        });
    };
    FuseIconsComponent = __decorate([
        core_1.Component({
            selector: 'fuse-icons',
            template: __webpack_require__("../../../../../src/app/main/content/ui/icons/icons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/icons/icons.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], FuseIconsComponent);
    return FuseIconsComponent;
}());
exports.FuseIconsComponent = FuseIconsComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/icons/icons.module.ts":
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
var icons_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/icons/icons.component.ts");
var routes = [
    {
        path: 'icons',
        component: icons_component_1.FuseIconsComponent
    }
];
var UIIconsModule = (function () {
    function UIIconsModule() {
    }
    UIIconsModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [
                icons_component_1.FuseIconsComponent
            ]
        })
    ], UIIconsModule);
    return UIIconsModule;
}());
exports.UIIconsModule = UIIconsModule;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/blank/blank.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout blank p-24\" fusePerfectScrollbar>\n\n    <h2>Blank Page</h2>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/blank/blank.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/blank/blank.component.ts":
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
var FuseBlankComponent = (function () {
    function FuseBlankComponent() {
    }
    FuseBlankComponent = __decorate([
        core_1.Component({
            selector: 'fuse-blank',
            template: __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/blank/blank.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/page-layouts/blank/blank.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseBlankComponent);
    return FuseBlankComponent;
}());
exports.FuseBlankComponent = FuseBlankComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/fullwidth-2/fullwidth-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded fullwidth single-scroll\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- CONTENT HEADER -->\n        <div class=\"header white-fg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <h2>Fullwidth with page scroll</h2>\n        </div>\n        <!-- / CONTENT HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card mat-white-bg\">\n\n            <!-- CONTENT TOOLBAR -->\n            <div class=\"toolbar px-24 py-8\">\n                <span>Content toolbar</span>\n            </div>\n            <!-- / CONTENT TOOLBAR -->\n\n            <!-- CONTENT -->\n            <div class=\"content p-24\">\n\n                <fuse-demo-content></fuse-demo-content>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/fullwidth-2/fullwidth-2.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/fullwidth-2/fullwidth-2.component.ts":
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
var FuseCardedFullWidth2Component = (function () {
    function FuseCardedFullWidth2Component() {
    }
    FuseCardedFullWidth2Component = __decorate([
        core_1.Component({
            selector: 'fuse-carded-fullwidth-2',
            template: __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/fullwidth-2/fullwidth-2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/fullwidth-2/fullwidth-2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedFullWidth2Component);
    return FuseCardedFullWidth2Component;
}());
exports.FuseCardedFullWidth2Component = FuseCardedFullWidth2Component;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/fullwidth/fullwidth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <!-- CENTER -->\n    <div class=\"center\">\n\n        <!-- CONTENT HEADER -->\n        <div class=\"header white-fg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <h2>Fullwidth with content scroll</h2>\n        </div>\n        <!-- / CONTENT HEADER -->\n\n        <!-- CONTENT CARD -->\n        <div class=\"content-card mat-white-bg\">\n\n            <!-- CONTENT TOOLBAR -->\n            <div class=\"toolbar px-24 py-8\">\n                <span>Content toolbar</span>\n            </div>\n            <!-- / CONTENT TOOLBAR -->\n\n            <!-- CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n\n                <fuse-demo-content></fuse-demo-content>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/fullwidth/fullwidth.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/fullwidth/fullwidth.component.ts":
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
var FuseCardedFullWidthComponent = (function () {
    function FuseCardedFullWidthComponent() {
    }
    FuseCardedFullWidthComponent = __decorate([
        core_1.Component({
            selector: 'fuse-carded-fullwidth',
            template: __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/fullwidth/fullwidth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/fullwidth/fullwidth.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedFullWidthComponent);
    return FuseCardedFullWidthComponent;
}());
exports.FuseCardedFullWidthComponent = FuseCardedFullWidthComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/left-sidenav-2-tabbed/left-sidenav-2-tabbed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded left-sidenav tabbed single-scroll\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <mat-sidenav-container>\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"start\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"carded-left-sidenav\" mat-is-locked-open=\"gt-md\">\n\n            <!-- SIDENAV HEADER -->\n            <div class=\"header p-24\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\n                <h2>Sidenav header</h2>\n            </div>\n            <!-- / SIDENAV HEADER -->\n\n            <!-- SIDENAV CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n\n                <fuse-demo-sidenav></fuse-demo-sidenav>\n\n            </div>\n            <!-- / SIDENAV CONTENT -->\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- CONTENT HEADER -->\n            <div class=\"header white-fg p-24\">\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <button mat-button class=\"mat-icon-button sidenav-toggle mr-8\"\n                            fuseMatSidenavToggler=\"carded-left-sidenav\" fxHide.gt-md>\n                        <mat-icon>menu</mat-icon>\n                    </button>\n\n                    <h2>Left sidenav with tabs and page scroll</h2>\n\n                </div>\n\n            </div>\n            <!-- / CONTENT HEADER -->\n\n            <!-- CONTENT CARD -->\n            <div class=\"content-card mat-white-bg\">\n\n                <!-- CONTENT -->\n                <div class=\"content\">\n\n                    <mat-tab-group>\n\n                        <mat-tab label=\"Tab 1\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 2\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 3\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 4\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 5\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 6\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 7\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 8\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 9\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 10\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                    </mat-tab-group>\n\n                </div>\n                <!-- / CONTENT -->\n\n            </div>\n            <!-- / CONTENT CARD -->\n\n        </div>\n        <!-- / CENTER -->\n\n    </mat-sidenav-container>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/left-sidenav-2-tabbed/left-sidenav-2-tabbed.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/left-sidenav-2-tabbed/left-sidenav-2-tabbed.component.ts":
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
var FuseCardedLeftSidenav2TabbedComponent = (function () {
    function FuseCardedLeftSidenav2TabbedComponent() {
    }
    FuseCardedLeftSidenav2TabbedComponent = __decorate([
        core_1.Component({
            selector: 'fuse-carded-left-sidenav-2-tabbed',
            template: __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/left-sidenav-2-tabbed/left-sidenav-2-tabbed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/left-sidenav-2-tabbed/left-sidenav-2-tabbed.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedLeftSidenav2TabbedComponent);
    return FuseCardedLeftSidenav2TabbedComponent;
}());
exports.FuseCardedLeftSidenav2TabbedComponent = FuseCardedLeftSidenav2TabbedComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/left-sidenav-2/left-sidenav-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded left-sidenav single-scroll\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <mat-sidenav-container>\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"start\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"carded-left-sidenav\" mat-is-locked-open=\"gt-md\">\n\n            <!-- SIDENAV HEADER -->\n            <div class=\"header p-24\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\n                <h2>Sidenav header</h2>\n            </div>\n            <!-- / SIDENAV HEADER -->\n\n            <!-- SIDENAV CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n\n                <fuse-demo-sidenav></fuse-demo-sidenav>\n\n            </div>\n            <!-- / SIDENAV CONTENT -->\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- CONTENT HEADER -->\n            <div class=\"header white-fg p-24\">\n                <h2>Left sidenav with page scroll</h2>\n            </div>\n            <!-- / CONTENT HEADER -->\n\n            <!-- CONTENT CARD -->\n            <div class=\"content-card mat-white-bg\">\n\n                <!-- CONTENT TOOLBAR -->\n                <div class=\"toolbar px-24 py-8\">\n                    <button mat-button class=\"mat-icon-button sidenav-toggle\"\n                            fuseMatSidenavToggler=\"carded-left-sidenav\"\n                            fxHide.gt-md>\n                        <mat-icon>menu</mat-icon>\n                    </button>\n\n                    <span>Content toolbar</span>\n                </div>\n                <!-- / CONTENT TOOLBAR -->\n\n                <!-- CONTENT -->\n                <div class=\"content p-24\" fusePerfectScrollbar>\n\n                    <fuse-demo-content></fuse-demo-content>\n\n                </div>\n                <!-- / CONTENT -->\n\n            </div>\n            <!-- / CONTENT CARD -->\n\n        </div>\n        <!-- / CENTER -->\n\n    </mat-sidenav-container>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/left-sidenav-2/left-sidenav-2.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/left-sidenav-2/left-sidenav-2.component.ts":
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
var FuseCardedLeftSidenav2Component = (function () {
    function FuseCardedLeftSidenav2Component() {
    }
    FuseCardedLeftSidenav2Component = __decorate([
        core_1.Component({
            selector: 'fuse-carded-left-sidenav-2',
            template: __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/left-sidenav-2/left-sidenav-2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/left-sidenav-2/left-sidenav-2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedLeftSidenav2Component);
    return FuseCardedLeftSidenav2Component;
}());
exports.FuseCardedLeftSidenav2Component = FuseCardedLeftSidenav2Component;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/left-sidenav-tabbed/left-sidenav-tabbed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded left-sidenav tabbed\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <mat-sidenav-container>\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"start\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"carded-left-sidenav\" mat-is-locked-open=\"gt-md\">\n\n            <!-- SIDENAV HEADER -->\n            <div class=\"header p-24\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\n                <h2>Sidenav header</h2>\n            </div>\n            <!-- / SIDENAV HEADER -->\n\n            <!-- SIDENAV CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n\n                <fuse-demo-sidenav></fuse-demo-sidenav>\n\n            </div>\n            <!-- / SIDENAV CONTENT -->\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- CONTENT HEADER -->\n            <div class=\"header white-fg p-24\">\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <button mat-button class=\"mat-icon-button sidenav-toggle mr-8\"\n                            fuseMatSidenavToggler=\"carded-left-sidenav\" fxHide.gt-md>\n                        <mat-icon>menu</mat-icon>\n                    </button>\n\n                    <h2>Left sidenav with tabs and content scroll</h2>\n\n                </div>\n\n            </div>\n            <!-- / CONTENT HEADER -->\n\n            <!-- CONTENT CARD -->\n            <div class=\"content-card mat-white-bg\">\n\n                <!-- CONTENT -->\n                <div class=\"content\">\n\n                    <mat-tab-group>\n\n                        <mat-tab label=\"Tab 1\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 2\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 3\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 4\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 5\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 6\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 7\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 8\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 9\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 10\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                    </mat-tab-group>\n\n                </div>\n                <!-- / CONTENT -->\n\n            </div>\n            <!-- / CONTENT CARD -->\n\n        </div>\n        <!-- / CENTER -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/left-sidenav-tabbed/left-sidenav-tabbed.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/left-sidenav-tabbed/left-sidenav-tabbed.component.ts":
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
var FuseCardedLeftSidenavTabbedComponent = (function () {
    function FuseCardedLeftSidenavTabbedComponent() {
    }
    FuseCardedLeftSidenavTabbedComponent = __decorate([
        core_1.Component({
            selector: 'fuse-carded-left-sidenav-tabbed',
            template: __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/left-sidenav-tabbed/left-sidenav-tabbed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/left-sidenav-tabbed/left-sidenav-tabbed.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedLeftSidenavTabbedComponent);
    return FuseCardedLeftSidenavTabbedComponent;
}());
exports.FuseCardedLeftSidenavTabbedComponent = FuseCardedLeftSidenavTabbedComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/left-sidenav/left-sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded left-sidenav\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <mat-sidenav-container>\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"start\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"carded-left-sidenav\" mat-is-locked-open=\"gt-md\">\n\n            <!-- SIDENAV HEADER -->\n            <div class=\"header p-24\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\n                <h2>Sidenav header</h2>\n            </div>\n            <!-- / SIDENAV HEADER -->\n\n            <!-- SIDENAV CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n\n                <fuse-demo-sidenav></fuse-demo-sidenav>\n\n            </div>\n            <!-- / SIDENAV CONTENT -->\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- CONTENT HEADER -->\n            <div class=\"header white-fg p-24\">\n                <h2>Left sidenav with content scroll</h2>\n            </div>\n            <!-- / CONTENT HEADER -->\n\n            <!-- CONTENT CARD -->\n            <div class=\"content-card mat-white-bg\">\n\n                <!-- CONTENT TOOLBAR -->\n                <div class=\"toolbar px-24 py-8\">\n                    <button mat-button class=\"mat-icon-button sidenav-toggle\"\n                            fuseMatSidenavToggler=\"carded-left-sidenav\"\n                            fxHide.gt-md>\n                        <mat-icon>menu</mat-icon>\n                    </button>\n\n                    <span>Content toolbar</span>\n                </div>\n                <!-- / CONTENT TOOLBAR -->\n\n                <!-- CONTENT -->\n                <div class=\"content p-24\" fusePerfectScrollbar>\n\n                    <fuse-demo-content></fuse-demo-content>\n\n                </div>\n                <!-- / CONTENT -->\n\n            </div>\n            <!-- / CONTENT CARD -->\n\n        </div>\n        <!-- / CENTER -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/left-sidenav/left-sidenav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/left-sidenav/left-sidenav.component.ts":
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
var FuseCardedLeftSidenavComponent = (function () {
    function FuseCardedLeftSidenavComponent() {
    }
    FuseCardedLeftSidenavComponent = __decorate([
        core_1.Component({
            selector: 'fuse-carded-left-sidenav',
            template: __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/left-sidenav/left-sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/left-sidenav/left-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedLeftSidenavComponent);
    return FuseCardedLeftSidenavComponent;
}());
exports.FuseCardedLeftSidenavComponent = FuseCardedLeftSidenavComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/right-sidenav-2-tabbed/right-sidenav-2-tabbed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded right-sidenav tabbed single-scroll\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <mat-sidenav-container>\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- CONTENT HEADER -->\n            <div class=\"header white-fg p-24\">\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <button mat-button class=\"mat-icon-button sidenav-toggle mr-8\"\n                            fuseMatSidenavToggler=\"carded-left-sidenav\" fxHide.gt-md>\n                        <mat-icon>menu</mat-icon>\n                    </button>\n\n                    <h2>Right sidenav with tabs and page scroll</h2>\n\n                </div>\n\n            </div>\n            <!-- / CONTENT HEADER -->\n\n            <!-- CONTENT CARD -->\n            <div class=\"content-card mat-white-bg\">\n\n                <!-- CONTENT -->\n                <div class=\"content\">\n\n                    <mat-tab-group>\n\n                        <mat-tab label=\"Tab 1\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 2\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 3\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 4\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 5\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 6\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 7\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 8\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 9\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 10\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                    </mat-tab-group>\n\n                </div>\n                <!-- / CONTENT -->\n\n            </div>\n            <!-- / CONTENT CARD -->\n\n        </div>\n        <!-- / CENTER -->\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"end\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"carded-left-sidenav\" mat-is-locked-open=\"gt-md\">\n\n            <!-- SIDENAV HEADER -->\n            <div class=\"header p-24\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\n                <h2>Sidenav header</h2>\n            </div>\n            <!-- / SIDENAV HEADER -->\n\n            <!-- SIDENAV CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n\n                <fuse-demo-sidenav></fuse-demo-sidenav>\n\n            </div>\n            <!-- / SIDENAV CONTENT -->\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/right-sidenav-2-tabbed/right-sidenav-2-tabbed.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/right-sidenav-2-tabbed/right-sidenav-2-tabbed.component.ts":
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
var FuseCardedRightSidenav2TabbedComponent = (function () {
    function FuseCardedRightSidenav2TabbedComponent() {
    }
    FuseCardedRightSidenav2TabbedComponent = __decorate([
        core_1.Component({
            selector: 'fuse-carded-right-sidenav-2-tabbed',
            template: __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/right-sidenav-2-tabbed/right-sidenav-2-tabbed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/right-sidenav-2-tabbed/right-sidenav-2-tabbed.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedRightSidenav2TabbedComponent);
    return FuseCardedRightSidenav2TabbedComponent;
}());
exports.FuseCardedRightSidenav2TabbedComponent = FuseCardedRightSidenav2TabbedComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/right-sidenav-2/right-sidenav-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded right-sidenav single-scroll\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <mat-sidenav-container>\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- CONTENT HEADER -->\n            <div class=\"header white-fg p-24\">\n                <h2>Right sidenav with page scroll</h2>\n            </div>\n            <!-- / CONTENT HEADER -->\n\n            <!-- CONTENT CARD -->\n            <div class=\"content-card mat-white-bg\">\n\n                <!-- CONTENT TOOLBAR -->\n                <div class=\"toolbar px-24 py-8\">\n                    <button mat-button class=\"mat-icon-button sidenav-toggle\"\n                            fuseMatSidenavToggler=\"carded-right-sidenav\"\n                            fxHide.gt-md>\n                        <mat-icon>menu</mat-icon>\n                    </button>\n\n                    <span>Content toolbar</span>\n                </div>\n                <!-- / CONTENT TOOLBAR -->\n\n                <!-- CONTENT -->\n                <div class=\"content p-24\" fusePerfectScrollbar>\n\n                    <fuse-demo-content></fuse-demo-content>\n\n                </div>\n                <!-- / CONTENT -->\n\n            </div>\n            <!-- / CONTENT CARD -->\n\n        </div>\n        <!-- / CENTER -->\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"end\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"carded-right-sidenav\" mat-is-locked-open=\"gt-md\">\n\n            <!-- SIDENAV HEADER -->\n            <div class=\"header p-24\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\n                <h2>Sidenav header</h2>\n            </div>\n            <!-- / SIDENAV HEADER -->\n\n            <!-- SIDENAV CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n\n                <fuse-demo-sidenav></fuse-demo-sidenav>\n\n            </div>\n            <!-- / SIDENAV CONTENT -->\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/right-sidenav-2/right-sidenav-2.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/right-sidenav-2/right-sidenav-2.component.ts":
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
var FuseCardedRightSidenav2Component = (function () {
    function FuseCardedRightSidenav2Component() {
    }
    FuseCardedRightSidenav2Component = __decorate([
        core_1.Component({
            selector: 'fuse-carded-right-sidenav-2',
            template: __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/right-sidenav-2/right-sidenav-2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/right-sidenav-2/right-sidenav-2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedRightSidenav2Component);
    return FuseCardedRightSidenav2Component;
}());
exports.FuseCardedRightSidenav2Component = FuseCardedRightSidenav2Component;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/right-sidenav-tabbed/right-sidenav-tabbed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded right-sidenav tabbed\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <mat-sidenav-container>\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- CONTENT HEADER -->\n            <div class=\"header white-fg p-24\">\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <button mat-button class=\"mat-icon-button sidenav-toggle mr-8\"\n                            fuseMatSidenavToggler=\"carded-left-sidenav\" fxHide.gt-md>\n                        <mat-icon>menu</mat-icon>\n                    </button>\n\n                    <h2>Right sidenav with tabs and content scroll</h2>\n\n                </div>\n\n            </div>\n            <!-- / CONTENT HEADER -->\n\n            <!-- CONTENT CARD -->\n            <div class=\"content-card mat-white-bg\">\n\n                <!-- CONTENT -->\n                <div class=\"content\">\n\n                    <mat-tab-group>\n\n                        <mat-tab label=\"Tab 1\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 2\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 3\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 4\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 5\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 6\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 7\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 8\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 9\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                        <mat-tab label=\"Tab 10\">\n                            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n                                <!-- PUT YOUR TAB CONTENT HERE -->\n                                <fuse-demo-content></fuse-demo-content>\n                                <!-- / PUT YOUR TAB CONTENT HERE -->\n                            </div>\n                        </mat-tab>\n\n                    </mat-tab-group>\n\n                </div>\n                <!-- / CONTENT -->\n\n            </div>\n            <!-- / CONTENT CARD -->\n\n        </div>\n        <!-- / CENTER -->\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"end\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"carded-left-sidenav\" mat-is-locked-open=\"gt-md\">\n\n            <!-- SIDENAV HEADER -->\n            <div class=\"header p-24\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\n                <h2>Sidenav header</h2>\n            </div>\n            <!-- / SIDENAV HEADER -->\n\n            <!-- SIDENAV CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n\n                <fuse-demo-sidenav></fuse-demo-sidenav>\n\n            </div>\n            <!-- / SIDENAV CONTENT -->\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/right-sidenav-tabbed/right-sidenav-tabbed.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/right-sidenav-tabbed/right-sidenav-tabbed.component.ts":
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
var FuseCardedRightSidenavTabbedComponent = (function () {
    function FuseCardedRightSidenavTabbedComponent() {
    }
    FuseCardedRightSidenavTabbedComponent = __decorate([
        core_1.Component({
            selector: 'fuse-carded-right-sidenav-tabbed',
            template: __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/right-sidenav-tabbed/right-sidenav-tabbed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/right-sidenav-tabbed/right-sidenav-tabbed.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedRightSidenavTabbedComponent);
    return FuseCardedRightSidenavTabbedComponent;
}());
exports.FuseCardedRightSidenavTabbedComponent = FuseCardedRightSidenavTabbedComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/right-sidenav/right-sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout carded right-sidenav\" fusePerfectScrollbar>\n\n    <!-- TOP BACKGROUND -->\n    <div class=\"top-bg mat-accent-bg\"></div>\n    <!-- / TOP BACKGROUND -->\n\n    <mat-sidenav-container>\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- CONTENT HEADER -->\n            <div class=\"header white-fg p-24\">\n                <h2>Right sidenav with content scroll</h2>\n            </div>\n            <!-- / CONTENT HEADER -->\n\n            <!-- CONTENT CARD -->\n            <div class=\"content-card mat-white-bg\">\n\n                <!-- CONTENT TOOLBAR -->\n                <div class=\"toolbar px-24 py-8\">\n                    <button mat-button class=\"mat-icon-button sidenav-toggle\"\n                            fuseMatSidenavToggler=\"carded-right-sidenav\"\n                            fxHide.gt-md>\n                        <mat-icon>menu</mat-icon>\n                    </button>\n\n                    <span>Content toolbar</span>\n                </div>\n                <!-- / CONTENT TOOLBAR -->\n\n                <!-- CONTENT -->\n                <div class=\"content p-24\" fusePerfectScrollbar>\n\n                    <fuse-demo-content></fuse-demo-content>\n\n                </div>\n                <!-- / CONTENT -->\n\n            </div>\n            <!-- / CONTENT CARD -->\n\n        </div>\n        <!-- / CENTER -->\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"end\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"carded-right-sidenav\" mat-is-locked-open=\"gt-md\">\n\n            <!-- SIDENAV HEADER -->\n            <div class=\"header p-24\" ngClass=\"mat-accent-bg\" ngClass.gt-md=\"white-fg\">\n                <h2>Sidenav header</h2>\n            </div>\n            <!-- / SIDENAV HEADER -->\n\n            <!-- SIDENAV CONTENT -->\n            <div class=\"content p-24\" fusePerfectScrollbar>\n\n                <fuse-demo-sidenav></fuse-demo-sidenav>\n\n            </div>\n            <!-- / SIDENAV CONTENT -->\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/right-sidenav/right-sidenav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/carded/right-sidenav/right-sidenav.component.ts":
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
var FuseCardedRightSidenavComponent = (function () {
    function FuseCardedRightSidenavComponent() {
    }
    FuseCardedRightSidenavComponent = __decorate([
        core_1.Component({
            selector: 'fuse-carded-right-sidenav',
            template: __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/right-sidenav/right-sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/right-sidenav/right-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCardedRightSidenavComponent);
    return FuseCardedRightSidenavComponent;
}());
exports.FuseCardedRightSidenavComponent = FuseCardedRightSidenavComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/page-layouts.module.ts":
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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var shared_module_1 = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
var demo_module_1 = __webpack_require__("../../../../../src/app/core/components/demo/demo.module.ts");
var fullwidth_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/fullwidth/fullwidth.component.ts");
var fullwidth_2_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/fullwidth-2/fullwidth-2.component.ts");
var left_sidenav_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/left-sidenav/left-sidenav.component.ts");
var left_sidenav_tabbed_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/left-sidenav-tabbed/left-sidenav-tabbed.component.ts");
var left_sidenav_2_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/left-sidenav-2/left-sidenav-2.component.ts");
var left_sidenav_2_tabbed_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/left-sidenav-2-tabbed/left-sidenav-2-tabbed.component.ts");
var right_sidenav_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/right-sidenav/right-sidenav.component.ts");
var right_sidenav_tabbed_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/right-sidenav-tabbed/right-sidenav-tabbed.component.ts");
var right_sidenav_2_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/right-sidenav-2/right-sidenav-2.component.ts");
var right_sidenav_2_tabbed_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/carded/right-sidenav-2-tabbed/right-sidenav-2-tabbed.component.ts");
var fullwidth_component_2 = __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/simple/fullwidth/fullwidth.component.ts");
var left_sidenav_component_2 = __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/simple/left-sidenav/left-sidenav.component.ts");
var left_sidenav_2_component_2 = __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/simple/left-sidenav-2/left-sidenav-2.component.ts");
var left_sidenav_3_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/simple/left-sidenav-3/left-sidenav-3.component.ts");
var right_sidenav_component_2 = __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/simple/right-sidenav/right-sidenav.component.ts");
var right_sidenav_2_component_2 = __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/simple/right-sidenav-2/right-sidenav-2.component.ts");
var right_sidenav_3_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/simple/right-sidenav-3/right-sidenav-3.component.ts");
var tabbed_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/simple/tabbed/tabbed.component.ts");
var blank_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/blank/blank.component.ts");
var routes = [
    {
        path: 'page-layouts/carded/full-width',
        component: fullwidth_component_1.FuseCardedFullWidthComponent
    },
    {
        path: 'page-layouts/carded/full-width-2',
        component: fullwidth_2_component_1.FuseCardedFullWidth2Component
    },
    {
        path: 'page-layouts/carded/left-sidenav',
        component: left_sidenav_component_1.FuseCardedLeftSidenavComponent
    },
    {
        path: 'page-layouts/carded/left-sidenav-tabbed',
        component: left_sidenav_tabbed_component_1.FuseCardedLeftSidenavTabbedComponent
    },
    {
        path: 'page-layouts/carded/left-sidenav-2',
        component: left_sidenav_2_component_1.FuseCardedLeftSidenav2Component
    },
    {
        path: 'page-layouts/carded/left-sidenav-2-tabbed',
        component: left_sidenav_2_tabbed_component_1.FuseCardedLeftSidenav2TabbedComponent
    },
    {
        path: 'page-layouts/carded/right-sidenav',
        component: right_sidenav_component_1.FuseCardedRightSidenavComponent
    },
    {
        path: 'page-layouts/carded/right-sidenav-tabbed',
        component: right_sidenav_tabbed_component_1.FuseCardedRightSidenavTabbedComponent
    },
    {
        path: 'page-layouts/carded/right-sidenav-2',
        component: right_sidenav_2_component_1.FuseCardedRightSidenav2Component
    },
    {
        path: 'page-layouts/carded/right-sidenav-2-tabbed',
        component: right_sidenav_2_tabbed_component_1.FuseCardedRightSidenav2TabbedComponent
    },
    {
        path: 'page-layouts/simple/full-width',
        component: fullwidth_component_2.FuseSimpleFullWidthComponent
    },
    {
        path: 'page-layouts/simple/left-sidenav',
        component: left_sidenav_component_2.FuseSimpleLeftSidenavComponent
    },
    {
        path: 'page-layouts/simple/left-sidenav-2',
        component: left_sidenav_2_component_2.FuseSimpleLeftSidenav2Component
    },
    {
        path: 'page-layouts/simple/left-sidenav-3',
        component: left_sidenav_3_component_1.FuseSimpleLeftSidenav3Component
    },
    {
        path: 'page-layouts/simple/right-sidenav',
        component: right_sidenav_component_2.FuseSimpleRightSidenavComponent
    },
    {
        path: 'page-layouts/simple/right-sidenav-2',
        component: right_sidenav_2_component_2.FuseSimpleRightSidenav2Component
    },
    {
        path: 'page-layouts/simple/right-sidenav-3',
        component: right_sidenav_3_component_1.FuseSimpleRightSidenav3Component
    },
    {
        path: 'page-layouts/simple/tabbed',
        component: tabbed_component_1.FuseTabbedComponent
    },
    {
        path: 'page-layouts/blank',
        component: blank_component_1.FuseBlankComponent
    }
];
var UIPageLayoutsModule = (function () {
    function UIPageLayoutsModule() {
    }
    UIPageLayoutsModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes),
                demo_module_1.FuseDemoModule
            ],
            declarations: [
                fullwidth_component_1.FuseCardedFullWidthComponent,
                fullwidth_2_component_1.FuseCardedFullWidth2Component,
                left_sidenav_component_1.FuseCardedLeftSidenavComponent,
                left_sidenav_tabbed_component_1.FuseCardedLeftSidenavTabbedComponent,
                left_sidenav_2_component_1.FuseCardedLeftSidenav2Component,
                left_sidenav_2_tabbed_component_1.FuseCardedLeftSidenav2TabbedComponent,
                right_sidenav_component_1.FuseCardedRightSidenavComponent,
                right_sidenav_tabbed_component_1.FuseCardedRightSidenavTabbedComponent,
                right_sidenav_2_component_1.FuseCardedRightSidenav2Component,
                right_sidenav_2_tabbed_component_1.FuseCardedRightSidenav2TabbedComponent,
                fullwidth_component_2.FuseSimpleFullWidthComponent,
                left_sidenav_component_2.FuseSimpleLeftSidenavComponent,
                left_sidenav_2_component_2.FuseSimpleLeftSidenav2Component,
                left_sidenav_3_component_1.FuseSimpleLeftSidenav3Component,
                right_sidenav_component_2.FuseSimpleRightSidenavComponent,
                right_sidenav_2_component_2.FuseSimpleRightSidenav2Component,
                right_sidenav_3_component_1.FuseSimpleRightSidenav3Component,
                tabbed_component_1.FuseTabbedComponent,
                blank_component_1.FuseBlankComponent
            ]
        })
    ], UIPageLayoutsModule);
    return UIPageLayoutsModule;
}());
exports.UIPageLayoutsModule = UIPageLayoutsModule;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/simple/fullwidth/fullwidth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <h2>Fullwidth</h2>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24 mat-white-bg\">\n\n        <fuse-demo-content></fuse-demo-content>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/simple/fullwidth/fullwidth.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/simple/fullwidth/fullwidth.component.ts":
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
var FuseSimpleFullWidthComponent = (function () {
    function FuseSimpleFullWidthComponent() {
    }
    FuseSimpleFullWidthComponent = __decorate([
        core_1.Component({
            selector: 'fuse-simple-fullwidth',
            template: __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/simple/fullwidth/fullwidth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/page-layouts/simple/fullwidth/fullwidth.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSimpleFullWidthComponent);
    return FuseSimpleFullWidthComponent;
}());
exports.FuseSimpleFullWidthComponent = FuseSimpleFullWidthComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/simple/left-sidenav-2/left-sidenav-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple left-sidenav single-scroll\" fusePerfectScrollbar>\n\n    <mat-sidenav-container>\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav  p-24\" align=\"start\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"simple-left-sidenav-2\" mat-is-locked-open=\"gt-md\">\n\n            <fuse-demo-sidenav></fuse-demo-sidenav>\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n        <!-- CENTER -->\n        <div class=\"center\" fusePerfectScrollbar>\n\n            <!-- HEADER -->\n            <div class=\"header mat-accent-bg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <button mat-button class=\"mat-icon-button sidenav-toggle\"\n                        fuseMatSidenavToggler=\"simple-left-sidenav-2\"\n                        fxHide.gt-md>\n                    <mat-icon>menu</mat-icon>\n                </button>\n\n                <div>\n                    <h2>Left sidenav with page scroll</h2>\n                </div>\n\n            </div>\n            <!-- / HEADER -->\n\n            <!-- CONTENT -->\n            <div class=\"content p-24 mat-white-bg\">\n\n                <fuse-demo-content></fuse-demo-content>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CENTER -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/simple/left-sidenav-2/left-sidenav-2.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/simple/left-sidenav-2/left-sidenav-2.component.ts":
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
var FuseSimpleLeftSidenav2Component = (function () {
    function FuseSimpleLeftSidenav2Component() {
    }
    FuseSimpleLeftSidenav2Component = __decorate([
        core_1.Component({
            selector: 'fuse-simple-left-sidenav-2',
            template: __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/simple/left-sidenav-2/left-sidenav-2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/page-layouts/simple/left-sidenav-2/left-sidenav-2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSimpleLeftSidenav2Component);
    return FuseSimpleLeftSidenav2Component;
}());
exports.FuseSimpleLeftSidenav2Component = FuseSimpleLeftSidenav2Component;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/simple/left-sidenav-3/left-sidenav-3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple left-sidenav inner-sidenav\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n        <button mat-button class=\"mat-icon-button sidenav-toggle\"\n                fuseMatSidenavToggler=\"simple-left-sidenav-3\"\n                fxHide.gt-md>\n            <mat-icon>menu</mat-icon>\n        </button>\n\n        <div>\n            <h2>Left inner sidenav with content scroll</h2>\n        </div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <mat-sidenav-container>\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"start\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"simple-left-sidenav-3\" mat-is-locked-open=\"gt-md\">\n\n            <div class=\"sidenav-content\" fusePerfectScrollbar>\n\n                <fuse-demo-sidenav></fuse-demo-sidenav>\n\n            </div>\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n        <!-- CENTER -->\n        <div class=\"center p-24\" fusePerfectScrollbar>\n\n            <!-- CONTENT -->\n            <div class=\"content p-24 mat-elevation-z4 mat-white-bg\">\n\n                <fuse-demo-content></fuse-demo-content>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CENTER -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/simple/left-sidenav-3/left-sidenav-3.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/simple/left-sidenav-3/left-sidenav-3.component.ts":
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
var FuseSimpleLeftSidenav3Component = (function () {
    function FuseSimpleLeftSidenav3Component() {
    }
    FuseSimpleLeftSidenav3Component = __decorate([
        core_1.Component({
            selector: 'fuse-simple-left-sidenav-3',
            template: __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/simple/left-sidenav-3/left-sidenav-3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/page-layouts/simple/left-sidenav-3/left-sidenav-3.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSimpleLeftSidenav3Component);
    return FuseSimpleLeftSidenav3Component;
}());
exports.FuseSimpleLeftSidenav3Component = FuseSimpleLeftSidenav3Component;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/simple/left-sidenav/left-sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple left-sidenav\" fusePerfectScrollbar>\n\n    <mat-sidenav-container>\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"start\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"simple-left-sidenav\" mat-is-locked-open=\"gt-md\">\n\n            <div class=\"sidenav-content p-24\" fusePerfectScrollbar>\n\n                <fuse-demo-sidenav></fuse-demo-sidenav>\n\n            </div>\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n        <!-- CENTER -->\n        <div class=\"center\" fusePerfectScrollbar>\n\n            <!-- HEADER -->\n            <div class=\"header mat-accent-bg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <button mat-button class=\"mat-icon-button sidenav-toggle\"\n                        fuseMatSidenavToggler=\"simple-left-sidenav\"\n                        fxHide.gt-md>\n                    <mat-icon>menu</mat-icon>\n                </button>\n\n                <div>\n                    <h2>Left sidenav with content scroll</h2>\n                </div>\n\n            </div>\n            <!-- / HEADER -->\n\n            <!-- CONTENT -->\n            <div class=\"content p-24 mat-white-bg\">\n\n                <fuse-demo-content></fuse-demo-content>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CENTER -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/simple/left-sidenav/left-sidenav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/simple/left-sidenav/left-sidenav.component.ts":
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
var FuseSimpleLeftSidenavComponent = (function () {
    function FuseSimpleLeftSidenavComponent() {
    }
    FuseSimpleLeftSidenavComponent = __decorate([
        core_1.Component({
            selector: 'fuse-simple-left-sidenav',
            template: __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/simple/left-sidenav/left-sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/page-layouts/simple/left-sidenav/left-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSimpleLeftSidenavComponent);
    return FuseSimpleLeftSidenavComponent;
}());
exports.FuseSimpleLeftSidenavComponent = FuseSimpleLeftSidenavComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/simple/right-sidenav-2/right-sidenav-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple right-sidenav single-scroll\" fusePerfectScrollbar>\n\n    <mat-sidenav-container>\n\n        <!-- CENTER -->\n        <div class=\"center\" fusePerfectScrollbar>\n\n            <!-- HEADER -->\n            <div class=\"header mat-accent-bg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <button mat-button class=\"mat-icon-button sidenav-toggle\"\n                        fuseMatSidenavToggler=\"simple-right-sidenav-2\"\n                        fxHide.gt-md>\n                    <mat-icon>menu</mat-icon>\n                </button>\n\n                <div>\n                    <h2>Right sidenav with page scroll</h2>\n                </div>\n\n            </div>\n            <!-- / HEADER -->\n\n            <!-- CONTENT -->\n            <div class=\"content p-24 mat-white-bg\">\n\n                <fuse-demo-content></fuse-demo-content>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CENTER -->\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav  p-24\" align=\"end\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"simple-right-sidenav-2\" mat-is-locked-open=\"gt-md\">\n\n            <fuse-demo-sidenav></fuse-demo-sidenav>\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/simple/right-sidenav-2/right-sidenav-2.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/simple/right-sidenav-2/right-sidenav-2.component.ts":
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
var FuseSimpleRightSidenav2Component = (function () {
    function FuseSimpleRightSidenav2Component() {
    }
    FuseSimpleRightSidenav2Component = __decorate([
        core_1.Component({
            selector: 'fuse-simple-right-sidenav-2',
            template: __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/simple/right-sidenav-2/right-sidenav-2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/page-layouts/simple/right-sidenav-2/right-sidenav-2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSimpleRightSidenav2Component);
    return FuseSimpleRightSidenav2Component;
}());
exports.FuseSimpleRightSidenav2Component = FuseSimpleRightSidenav2Component;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/simple/right-sidenav-3/right-sidenav-3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple right-sidenav inner-sidenav\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n        <button mat-button class=\"mat-icon-button sidenav-toggle\"\n                fuseMatSidenavToggler=\"simple-right-sidenav-3\"\n                fxHide.gt-md>\n            <mat-icon>menu</mat-icon>\n        </button>\n\n        <div>\n            <h2>Right inner sidenav with content scroll</h2>\n        </div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <mat-sidenav-container>\n\n        <!-- CENTER -->\n        <div class=\"center p-24\" fusePerfectScrollbar>\n\n            <!-- CONTENT -->\n            <div class=\"content p-24 mat-elevation-z4 mat-white-bg\">\n\n                <fuse-demo-content></fuse-demo-content>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CENTER -->\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"end\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"simple-right-sidenav-3\" mat-is-locked-open=\"gt-md\">\n\n            <div class=\"sidenav-content\" fusePerfectScrollbar>\n\n                <fuse-demo-sidenav></fuse-demo-sidenav>\n\n            </div>\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/simple/right-sidenav-3/right-sidenav-3.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/simple/right-sidenav-3/right-sidenav-3.component.ts":
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
var FuseSimpleRightSidenav3Component = (function () {
    function FuseSimpleRightSidenav3Component() {
    }
    FuseSimpleRightSidenav3Component = __decorate([
        core_1.Component({
            selector: 'fuse-simple-right-sidenav-3',
            template: __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/simple/right-sidenav-3/right-sidenav-3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/page-layouts/simple/right-sidenav-3/right-sidenav-3.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSimpleRightSidenav3Component);
    return FuseSimpleRightSidenav3Component;
}());
exports.FuseSimpleRightSidenav3Component = FuseSimpleRightSidenav3Component;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/simple/right-sidenav/right-sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple right-sidenav\" fusePerfectScrollbar>\n\n    <mat-sidenav-container>\n\n        <!-- CENTER -->\n        <div class=\"center\" fusePerfectScrollbar>\n\n            <!-- HEADER -->\n            <div class=\"header mat-accent-bg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <button mat-button class=\"mat-icon-button sidenav-toggle\"\n                        fuseMatSidenavToggler=\"simple-right-sidenav\"\n                        fxHide.gt-md>\n                    <mat-icon>menu</mat-icon>\n                </button>\n\n                <div>\n                    <h2>Right sidenav with content scroll</h2>\n                </div>\n\n            </div>\n            <!-- / HEADER -->\n\n            <!-- CONTENT -->\n            <div class=\"content p-24 mat-white-bg\">\n\n                <fuse-demo-content></fuse-demo-content>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CENTER -->\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" align=\"end\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"simple-right-sidenav\" mat-is-locked-open=\"gt-md\">\n\n            <div class=\"sidenav-content p-24\" fusePerfectScrollbar>\n\n                <fuse-demo-sidenav></fuse-demo-sidenav>\n\n            </div>\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/simple/right-sidenav/right-sidenav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/simple/right-sidenav/right-sidenav.component.ts":
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
var FuseSimpleRightSidenavComponent = (function () {
    function FuseSimpleRightSidenavComponent() {
    }
    FuseSimpleRightSidenavComponent = __decorate([
        core_1.Component({
            selector: 'fuse-simple-right-sidenav',
            template: __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/simple/right-sidenav/right-sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/page-layouts/simple/right-sidenav/right-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSimpleRightSidenavComponent);
    return FuseSimpleRightSidenavComponent;
}());
exports.FuseSimpleRightSidenavComponent = FuseSimpleRightSidenavComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/simple/tabbed/tabbed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple tabbed\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24\">\n        <h2>Tabbed</h2>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content mat-white-bg\">\n\n        <mat-tab-group dynamicHeight=\"true\">\n\n            <mat-tab label=\"Tab 1\">\n                <div class=\"p-24\">\n                    <fuse-demo-content></fuse-demo-content>\n                </div>\n            </mat-tab>\n\n            <mat-tab label=\"Tab 2\">\n                <div class=\"p-24\">\n                    <fuse-demo-content></fuse-demo-content>\n                </div>\n            </mat-tab>\n\n            <mat-tab label=\"Tab 3\">\n                <div class=\"p-24\">\n                    <fuse-demo-content></fuse-demo-content>\n                </div>\n            </mat-tab>\n\n        </mat-tab-group>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/simple/tabbed/tabbed.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/page-layouts/simple/tabbed/tabbed.component.ts":
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
var FuseTabbedComponent = (function () {
    function FuseTabbedComponent() {
    }
    FuseTabbedComponent = __decorate([
        core_1.Component({
            selector: 'fuse-tabbed',
            template: __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/simple/tabbed/tabbed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/page-layouts/simple/tabbed/tabbed.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseTabbedComponent);
    return FuseTabbedComponent;
}());
exports.FuseTabbedComponent = FuseTabbedComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"typography-blockquotes-lists\" class=\"p-24\">\n\n    <div class=\"mat-title\">Blockquotes</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <blockquote>\n                    <p>\n                        You can do anything, but not everything.\n                    </p>\n                </blockquote>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <blockquote>\n                        <p>\n                            You can do anything, but not everything.\n                        </p>\n                    </blockquote>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <blockquote>\n                    <p>\n                        You can do anything, but not everything.\n                    </p>\n                    <footer>\n                        David Allen\n                    </footer>\n                </blockquote>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <blockquote>\n                        <p>\n                            You can do anything, but not everything.\n                        </p>\n                        <footer>\n                            David Allen\n                        </footer>\n                    </blockquote>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <blockquote class=\"reverse\">\n                    <p>\n                        You can do anything, but not everything.\n                    </p>\n                    <footer>\n                        David Allen\n                    </footer>\n                </blockquote>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <blockquote class=\"reverse\">\n                        <p>\n                            You can do anything, but not everything.\n                        </p>\n                        <footer>\n                            David Allen\n                        </footer>\n                    </blockquote>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-20\">Lists</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <ol>\n                    <li>Ordered list item</li>\n                    <li>\n                        Ordered list item\n                        <ol>\n                            <li>Ordered list item</li>\n                            <li>Ordered list item</li>\n                        </ol>\n                    </li>\n                    <li>Ordered list item</li>\n                    <li>Ordered list item</li>\n                </ol>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <ol>\n                        <li>Ordered list item</li>\n                        <li>\n                            Ordered list item\n                            <ol>\n                                <li>Ordered list item</li>\n                                <li>Ordered list item</li>\n                            </ol>\n                        </li>\n                        <li>Ordered list item</li>\n                        <li>Ordered list item</li>\n                    </ol>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <ul>\n                    <li>Unordered list item</li>\n                    <li>\n                        Unordered list item\n                        <ul>\n                            <li>Unordered list item</li>\n                            <li>Unordered list item</li>\n                        </ul>\n                    </li>\n                    <li>Unordered list item</li>\n                    <li>Unordered list item</li>\n                </ul>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <ul>\n                        <li>Unordered list item</li>\n                        <li>\n                            Unordered list item\n                            <ul>\n                                <li>Unordered list item</li>\n                                <li>Unordered list item</li>\n                            </ul>\n                        </li>\n                        <li>Unordered list item</li>\n                        <li>Unordered list item</li>\n                    </ul>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-20\">Definition Lists</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <dl>\n                    <dt>Definition term</dt>\n                    <dd>This is the definition description</dd>\n\n                    <dt>Another definition term</dt>\n                    <dd>This is also another definition description</dd>\n                </dl>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <dl>\n                        <dt>Definition term</dt>\n                        <dd>This is the definition description</dd>\n\n                        <dt>Another definition term</dt>\n                        <dd>This is also another definition description</dd>\n                    </dl>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host #typography-blockquotes-lists .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-blockquotes-lists .source-code code {\n    background: none !important; }\n\n:host #typography-blockquotes-lists .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-blockquotes-lists .preview:last-child {\n    margin-bottom: 0; }\n  :host #typography-blockquotes-lists .preview .mat-caption {\n    margin-bottom: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.ts":
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
var FuseTypographyBlockquotesListsComponent = (function () {
    function FuseTypographyBlockquotesListsComponent() {
    }
    FuseTypographyBlockquotesListsComponent = __decorate([
        core_1.Component({
            selector: 'fuse-typography-blockquotes-lists',
            template: __webpack_require__("../../../../../src/app/main/content/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseTypographyBlockquotesListsComponent);
    return FuseTypographyBlockquotesListsComponent;
}());
exports.FuseTypographyBlockquotesListsComponent = FuseTypographyBlockquotesListsComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/typography/tabs/headings/headings.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"typography-headings\" class=\"p-24\">\n\n    <div class=\"mat-title\">Material design typography classes</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">112px</div>\n                <span class=\"mat-display-4\">Display 4</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-display-4\">Display 4</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">56px</div>\n                <span class=\"mat-display-3\">Display 3</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-display-3\">Display 3</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">45px</div>\n                <span class=\"mat-display-2\">Display 2</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-display-2\">Display 2</span>\n                </textarea>\n            </fuse-highlight>\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">34px</div>\n                <span class=\"mat-display-1\">Display 1</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-display-1\">Display 1</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">24px</div>\n                <span class=\"mat-headline\">Headline</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-headline\">Headline</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">20px</div>\n                <span class=\"mat-title\">Title</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-title\">Title</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">16px</div>\n                <span class=\"mat-subheading-2\">Subheading 2</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-subheading-2\">Subheading 2</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">15px</div>\n                <span class=\"mat-subheading-1\">Subheading 1</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-subheading-1\">Subheading 1</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">14px</div>\n                <span class=\"mat-body-1\">Body 1</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-body-1\">Body 1</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">14px</div>\n                <span class=\"mat-body-2\">Body 2</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-body-2\">Body 2</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">12px</div>\n                <span class=\"mat-caption\">Caption</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"mat-caption\">Caption</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-20\">Standard Headings</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">24px</div>\n                <span class=\"h1\">Heading 1</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <h1>Heading 1</h1>\n                    <span class=\"h1\">Heading 1</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">20px</div>\n                <span class=\"h2\">Heading 2</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <h2>Heading 2</h2>\n                    <span class=\"h2\">Heading 2</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">16px</div>\n                <span class=\"h3\">Heading 3</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <h3>Heading 3</h3>\n                    <span class=\"h3\">Heading 3</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">15px</div>\n                <span class=\"h4\">Heading 4</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <h4>Heading 4</h4>\n                    <span class=\"h4\">Heading 4</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">13px</div>\n                <span class=\"h5\">Heading 5</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <h5>Heading 5</h5>\n                    <span class=\"h5\">Heading 5</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption secondary-text\">12px</div>\n                <span class=\"h6\">Heading 6</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <h6>Heading 6</h6>\n                    <span class=\"h6\">Heading 6</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/typography/tabs/headings/headings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host #typography-headings .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-headings .source-code code {\n    background: none !important; }\n\n:host #typography-headings .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-headings .preview:last-child {\n    margin-bottom: 0; }\n  :host #typography-headings .preview .mat-caption {\n    margin-bottom: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/typography/tabs/headings/headings.component.ts":
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
var FuseTypographyHeadingsComponent = (function () {
    function FuseTypographyHeadingsComponent() {
    }
    FuseTypographyHeadingsComponent = __decorate([
        core_1.Component({
            selector: 'fuse-typography-headings',
            template: __webpack_require__("../../../../../src/app/main/content/ui/typography/tabs/headings/headings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/typography/tabs/headings/headings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseTypographyHeadingsComponent);
    return FuseTypographyHeadingsComponent;
}());
exports.FuseTypographyHeadingsComponent = FuseTypographyHeadingsComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/typography/tabs/helpers/helpers.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"typography-helpers\" class=\"p-24\">\n\n    <div class=\"mat-title\">Font Weight</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">From 100 to 900</div>\n                <span class=\"font-weight-100\">font-weight: 100</span>\n                <span>...</span>\n                <span class=\"font-weight-900\">font-weight: 900</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"font-weight-100\">100 font weight</span>\n                    ...\n                    <span class=\"font-weight-900\">900 font weight</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-20\">Font Size</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Multiplies of 2, max: 120</div>\n                <span class=\"font-size-20\">font-size: 20</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"font-size-20\">font-size: 20</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-20\">Line Height</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"mat-caption mb-16\">Multiplies of 2, max: 120</div>\n                <span>line-height: 2</span>\n                <span>...</span>\n                <span>line-height: 120</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"line-height-2\">2px line height</span>\n                    ...\n                    <span class=\"line-height-120\">120px line height</span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n    <div class=\"mat-title mt-20\">Other helpers</div>\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"text-left\">Left aligned text</div>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <div class=\"text-left\">Left aligned text</div>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"text-center\">Center aligned text</div>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <div class=\"text-center\">Center aligned text</div>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"text-right\">Right aligned text</div>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <div class=\"text-right\">Right aligned text</div>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <p>\n                    <span class=\"text-boxed\">Boxed text</span>\n                </p>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <p>\n                        <span class=\"text-boxed\">Boxed text</span>\n                    </p>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview mat-grey-700-bg\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <p>\n                    <span class=\"text-boxed-light\">Boxed text light</span>\n                </p>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <p>\n                        <span class=\"text-boxed-light\">Boxed text light</span>\n                    </p>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <p>\n                    <span class=\"text-strike\">Strike-through text</span>\n                </p>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <p>\n                        <span class=\"text-strike\">Strike-through text</span>\n                    </p>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"text-italic\">Italic text</div>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <div class=\"text-italic\">Italic text</div>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"text-semibold\">Semi-bold text</div>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <div class=\"text-semibold\">Semi-bold text</div>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <div class=\"text-bold\">Bold text</div>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <div class=\"text-bold\">Bold text</div>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span class=\"text-truncate\">This is a truncated text. It will be truncated if it's too long. Vivamus\n                    convallis dui porta massa.\n                </span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <span class=\"text-truncate\">\n                        This is a truncated text. It will be truncated if it's too long. Vivamus convallis dui porta massa.\n                    </span>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/typography/tabs/helpers/helpers.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host #typography-helpers .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-helpers .source-code code {\n    background: none !important; }\n\n:host #typography-helpers .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-helpers .preview:last-child {\n    margin-bottom: 0; }\n  :host #typography-helpers .preview .mat-caption {\n    margin-bottom: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/typography/tabs/helpers/helpers.component.ts":
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
var FuseTypographyHelpersComponent = (function () {
    function FuseTypographyHelpersComponent() {
    }
    FuseTypographyHelpersComponent = __decorate([
        core_1.Component({
            selector: 'fuse-typography-helpers',
            template: __webpack_require__("../../../../../src/app/main/content/ui/typography/tabs/helpers/helpers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/typography/tabs/helpers/helpers.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseTypographyHelpersComponent);
    return FuseTypographyHelpersComponent;
}());
exports.FuseTypographyHelpersComponent = FuseTypographyHelpersComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/typography/tabs/inline-text-elements/inline-text-elements.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"typography-inline-text-elements\" class=\"p-24\">\n\n    <div class=\"mat-white-bg mat-elevation-z4 p-24\" fxLayout=\"column\">\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span><abbr title=\"Cascaded Style Sheet\">CSS</abbr></span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <abbr title=\"Cascaded Style Sheet\">CSS</abbr>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>This is a <mark>marked</mark> text.</span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    This is a <mark>marked</mark> text.\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>\n                    <del>This is a deleted text.</del>\n                </span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <del>This is a deleted text.</del>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span><s>This is a strike-through text.</s></span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <s>This is a strike-through text.</s>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span><u>This is an underlined text.</u></span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <u>This is an underlined text.</u>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>\n                    <small>This is a small text.</small>\n                </span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <small>This is a small text.</small>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span><strong>This is a strong text.</strong></span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <strong>This is a strong text.</strong>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span><em>This is an italic text.</em></span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    <em>This is an italic text.</em>\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>This is a\n                    <span class=\"text-super\">super</span>\n                    text.\n                </span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    This is a\n                    <span class=\"text-super\">super</span>\n                    text.\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>\n                    This is a\n                    <span class=\"text-sub\">sub</span>\n                    text.\n                </span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    This is a\n                    <span class=\"text-sub\">sub</span>\n                    text.\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>This is a\n                    <span class=\"text-capitalize\">capitalized</span>\n                    text.\n                </span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    This is a\n                    <span class=\"text-capitalized\">capitalized</span>\n                    text.\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>This is an\n                    <span class=\"text-uppercase\">uppercase</span>\n                    text.\n                </span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    This is an\n                    <span class=\"text-uppercase\">uppercase</span>\n                    text.\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\n                <span>This is a\n                    <span class=\"text-lowercase\">LOWERCASE</span>\n                    text.\n                </span>\n            </div>\n\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                       fxFlex=\"50\">\n                <textarea #source hidden=\"hidden\">\n                    This is a\n                    <span class=\"text-lowercase\">LOWERCASE</span>\n                    text.\n                </textarea>\n            </fuse-highlight>\n\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/typography/tabs/inline-text-elements/inline-text-elements.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host #typography-inline-text-elements .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-inline-text-elements .source-code code {\n    background: none !important; }\n\n:host #typography-inline-text-elements .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px; }\n  :host #typography-inline-text-elements .preview:last-child {\n    margin-bottom: 0; }\n  :host #typography-inline-text-elements .preview .mat-caption {\n    margin-bottom: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/typography/tabs/inline-text-elements/inline-text-elements.component.ts":
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
var FuseTypographyInlineTextElementsComponent = (function () {
    function FuseTypographyInlineTextElementsComponent() {
    }
    FuseTypographyInlineTextElementsComponent = __decorate([
        core_1.Component({
            selector: 'fuse-typography-inline-text-elements',
            template: __webpack_require__("../../../../../src/app/main/content/ui/typography/tabs/inline-text-elements/inline-text-elements.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/typography/tabs/inline-text-elements/inline-text-elements.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseTypographyInlineTextElementsComponent);
    return FuseTypographyInlineTextElementsComponent;
}());
exports.FuseTypographyInlineTextElementsComponent = FuseTypographyInlineTextElementsComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"typography\" class=\"page-layout simple tabbed\" fxLayout=\"column\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-16\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">User Interface</span>\n            </div>\n            <div class=\"h1 mt-16\">Typography</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\">\n\n        <mat-tab-group dynamicHeight=\"true\">\n\n            <mat-tab label=\"Headings\">\n\n                <fuse-typography-headings></fuse-typography-headings>\n\n            </mat-tab>\n\n            <mat-tab label=\"Inline Text Elements\">\n\n                <fuse-typography-inline-text-elements></fuse-typography-inline-text-elements>\n\n            </mat-tab>\n\n            <mat-tab label=\"Blockquotes & Lists\">\n\n                <fuse-typography-blockquotes-lists></fuse-typography-blockquotes-lists>\n\n            </mat-tab>\n\n            <mat-tab label=\"Helpers\">\n\n                <fuse-typography-helpers></fuse-typography-helpers>\n\n            </mat-tab>\n\n        </mat-tab-group>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/ui/typography/typography.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/ui/typography/typography.component.ts":
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
var FuseTypographyComponent = (function () {
    function FuseTypographyComponent() {
    }
    FuseTypographyComponent.prototype.ngOnInit = function () {
    };
    FuseTypographyComponent = __decorate([
        core_1.Component({
            selector: 'fuse-typography',
            template: __webpack_require__("../../../../../src/app/main/content/ui/typography/typography.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/ui/typography/typography.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseTypographyComponent);
    return FuseTypographyComponent;
}());
exports.FuseTypographyComponent = FuseTypographyComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/typography/typography.module.ts":
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
var typography_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/typography/typography.component.ts");
var headings_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/typography/tabs/headings/headings.component.ts");
var inline_text_elements_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/typography/tabs/inline-text-elements/inline-text-elements.component.ts");
var blockquotes_lists_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.ts");
var helpers_component_1 = __webpack_require__("../../../../../src/app/main/content/ui/typography/tabs/helpers/helpers.component.ts");
var routes = [
    {
        path: 'typography',
        component: typography_component_1.FuseTypographyComponent
    }
];
var UITypographyModule = (function () {
    function UITypographyModule() {
    }
    UITypographyModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [
                typography_component_1.FuseTypographyComponent,
                headings_component_1.FuseTypographyHeadingsComponent,
                inline_text_elements_component_1.FuseTypographyInlineTextElementsComponent,
                blockquotes_lists_component_1.FuseTypographyBlockquotesListsComponent,
                helpers_component_1.FuseTypographyHelpersComponent
            ]
        })
    ], UITypographyModule);
    return UITypographyModule;
}());
exports.UITypographyModule = UITypographyModule;


/***/ }),

/***/ "../../../../../src/app/main/content/ui/ui.module.ts":
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
var forms_module_1 = __webpack_require__("../../../../../src/app/main/content/ui/forms/forms.module.ts");
var icons_module_1 = __webpack_require__("../../../../../src/app/main/content/ui/icons/icons.module.ts");
var typography_module_1 = __webpack_require__("../../../../../src/app/main/content/ui/typography/typography.module.ts");
var helper_classes_module_1 = __webpack_require__("../../../../../src/app/main/content/ui/helper-classes/helper-classes.module.ts");
var page_layouts_module_1 = __webpack_require__("../../../../../src/app/main/content/ui/page-layouts/page-layouts.module.ts");
var colors_module_1 = __webpack_require__("../../../../../src/app/main/content/ui/colors/colors.module.ts");
var FuseUIModule = (function () {
    function FuseUIModule() {
    }
    FuseUIModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_module_1.UIFormsModule,
                icons_module_1.UIIconsModule,
                typography_module_1.UITypographyModule,
                helper_classes_module_1.UIHelperClassesModule,
                page_layouts_module_1.UIPageLayoutsModule,
                colors_module_1.UIColorsModule
            ]
        })
    ], FuseUIModule);
    return FuseUIModule;
}());
exports.FuseUIModule = FuseUIModule;


/***/ })

});
//# sourceMappingURL=ui.module.chunk.js.map