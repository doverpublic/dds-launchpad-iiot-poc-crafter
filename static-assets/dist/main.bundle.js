webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./academy/academy.module": [
		"../../../../../src/app/main/content/apps/academy/academy.module.ts",
		"academy.module"
	],
	"./calendar/calendar.module": [
		"../../../../../src/app/main/content/apps/calendar/calendar.module.ts",
		"calendar.module"
	],
	"./chat/chat.module": [
		"../../../../../src/app/main/content/apps/chat/chat.module.ts",
		"common",
		"chat.module"
	],
	"./contacts/contacts.module": [
		"../../../../../src/app/main/content/apps/contacts/contacts.module.ts",
		"common",
		"contacts.module"
	],
	"./dashboards/project/project.module": [
		"../../../../../src/app/main/content/apps/dashboards/project/project.module.ts",
		"common",
		"project.module"
	],
	"./e-commerce/e-commerce.module": [
		"../../../../../src/app/main/content/apps/e-commerce/e-commerce.module.ts",
		"common",
		"e-commerce.module"
	],
	"./file-manager/file-manager.module": [
		"../../../../../src/app/main/content/apps/file-manager/file-manager.module.ts",
		"file-manager.module"
	],
	"./mail-ngrx/mail.module": [
		"../../../../../src/app/main/content/apps/mail-ngrx/mail.module.ts",
		"common",
		"mail.module"
	],
	"./mail/mail.module": [
		"../../../../../src/app/main/content/apps/mail/mail.module.ts",
		"common",
		"mail.module.0"
	],
	"./main/content/apps/apps.module": [
		"../../../../../src/app/main/content/apps/apps.module.ts",
		"common",
		"apps.module"
	],
	"./main/content/components-third-party/components-third-party.module": [
		"../../../../../src/app/main/content/components-third-party/components-third-party.module.ts",
		"common",
		"components-third-party.module"
	],
	"./main/content/components/components.module": [
		"../../../../../src/app/main/content/components/components.module.ts",
		"common",
		"components.module"
	],
	"./main/content/pages/pages.module": [
		"../../../../../src/app/main/content/pages/pages.module.ts",
		"common",
		"pages.module"
	],
	"./main/content/services/services.module": [
		"../../../../../src/app/main/content/services/services.module.ts",
		"services.module"
	],
	"./main/content/ui/ui.module": [
		"../../../../../src/app/main/content/ui/ui.module.ts",
		"ui.module"
	],
	"./scrumboard/scrumboard.module": [
		"../../../../../src/app/main/content/apps/scrumboard/scrumboard.module.ts",
		"scrumboard.module"
	],
	"./todo/todo.module": [
		"../../../../../src/app/main/content/apps/todo/todo.module.ts",
		"common",
		"todo.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<fuse-main></fuse-main>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
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
var splash_screen_service_1 = __webpack_require__("../../../../../src/app/core/services/splash-screen.service.ts");
var core_2 = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var translation_loader_service_1 = __webpack_require__("../../../../../src/app/core/services/translation-loader.service.ts");
var navigation_service_1 = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.service.ts");
var navigation_model_1 = __webpack_require__("../../../../../src/app/navigation/navigation.model.ts");
var en_1 = __webpack_require__("../../../../../src/app/navigation/i18n/en.ts");
var tr_1 = __webpack_require__("../../../../../src/app/navigation/i18n/tr.ts");
var AppComponent = (function () {
    function AppComponent(fuseNavigationService, fuseSplashScreen, translate, translationLoader) {
        this.fuseNavigationService = fuseNavigationService;
        this.fuseSplashScreen = fuseSplashScreen;
        this.translate = translate;
        this.translationLoader = translationLoader;
        // Add languages
        this.translate.addLangs(['en', 'tr']);
        // Set the default language
        this.translate.setDefaultLang('en');
        // Use a language
        this.translate.use('en');
        // Set the navigation model
        this.fuseNavigationService.setNavigationModel(new navigation_model_1.FuseNavigationModel());
        // Set the navigation translations
        this.translationLoader.loadTranslations(en_1.locale, tr_1.locale);
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'fuse-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [navigation_service_1.FuseNavigationService,
            splash_screen_service_1.FuseSplashScreenService,
            core_2.TranslateService,
            translation_loader_service_1.FuseTranslationLoaderService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
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
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var angular_in_memory_web_api_1 = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
__webpack_require__("../../../../hammerjs/hammer.js");
var shared_module_1 = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var fuse_fake_db_service_1 = __webpack_require__("../../../../../src/app/fuse-fake-db/fuse-fake-db.service.ts");
var main_module_1 = __webpack_require__("../../../../../src/app/main/main.module.ts");
var splash_screen_service_1 = __webpack_require__("../../../../../src/app/core/services/splash-screen.service.ts");
var config_service_1 = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
var navigation_service_1 = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.service.ts");
var core_2 = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var store_module_1 = __webpack_require__("../../../../../src/app/store/store.module.ts");
var appRoutes = [
    {
        path: 'apps',
        loadChildren: './main/content/apps/apps.module#FuseAppsModule'
    },
    {
        path: 'pages',
        loadChildren: './main/content/pages/pages.module#FusePagesModule'
    },
    {
        path: 'ui',
        loadChildren: './main/content/ui/ui.module#FuseUIModule'
    },
    {
        path: 'services',
        loadChildren: './main/content/services/services.module#FuseServicesModule'
    },
    {
        path: 'components',
        loadChildren: './main/content/components/components.module#FuseComponentsModule'
    },
    {
        path: 'components-third-party',
        loadChildren: './main/content/components-third-party/components-third-party.module#FuseComponentsThirdPartyModule'
    },
    {
        path: '**',
        redirectTo: 'apps/dashboards/project'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                router_1.RouterModule.forRoot(appRoutes),
                shared_module_1.SharedModule,
                core_2.TranslateModule.forRoot(),
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(fuse_fake_db_service_1.FuseFakeDbService, {
                    delay: 0,
                    passThruUnknownUrl: true
                }),
                store_module_1.AppStoreModule,
                main_module_1.FuseMainModule
            ],
            providers: [
                splash_screen_service_1.FuseSplashScreenService,
                config_service_1.FuseConfigService,
                navigation_service_1.FuseNavigationService
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/core/animations.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__("../../../animations/esm5/animations.js");
var customAnimation = animations_1.animation([
    animations_1.style({
        opacity: '{{opacity}}',
        transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
    }),
    animations_1.animate('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', animations_1.style('*'))
], {
    params: {
        duration: '200ms',
        delay: '0ms',
        opacity: '0',
        scale: '1',
        x: '0',
        y: '0',
        z: '0'
    }
});
exports.fuseAnimations = [
    animations_1.trigger('animate', [animations_1.transition('void => *', [animations_1.useAnimation(customAnimation)])]),
    animations_1.trigger('animateStagger', [
        animations_1.state('50', animations_1.style('*')),
        animations_1.state('100', animations_1.style('*')),
        animations_1.state('200', animations_1.style('*')),
        animations_1.transition('void => 50', animations_1.query('@*', [
            animations_1.stagger('50ms', [
                animations_1.animateChild()
            ])
        ], { optional: true })),
        animations_1.transition('void => 100', animations_1.query('@*', [
            animations_1.stagger('100ms', [
                animations_1.animateChild()
            ])
        ], { optional: true })),
        animations_1.transition('void => 200', animations_1.query('@*', [
            animations_1.stagger('200ms', [
                animations_1.animateChild()
            ])
        ], { optional: true }))
    ]),
    animations_1.trigger('fadeInOut', [
        animations_1.state('0', animations_1.style({
            display: 'none',
            opacity: 0
        })),
        animations_1.state('1', animations_1.style({
            display: 'block',
            opacity: 1
        })),
        animations_1.transition('1 => 0', animations_1.animate('300ms ease-out')),
        animations_1.transition('0 => 1', animations_1.animate('300ms ease-in'))
    ]),
    animations_1.trigger('slideInOut', [
        animations_1.state('0', animations_1.style({
            height: '0px',
            display: 'none'
        })),
        animations_1.state('1', animations_1.style({
            height: '*',
            display: 'block'
        })),
        animations_1.transition('1 => 0', animations_1.animate('300ms ease-out')),
        animations_1.transition('0 => 1', animations_1.animate('300ms ease-in'))
    ]),
    animations_1.trigger('slideIn', [
        animations_1.transition('void => left', [
            animations_1.style({
                transform: 'translateX(100%)'
            }),
            animations_1.animate('300ms ease-in', animations_1.style({
                transform: 'translateX(0)'
            }))
        ]),
        animations_1.transition('left => void', [
            animations_1.style({
                transform: 'translateX(0)'
            }),
            animations_1.animate('300ms ease-in', animations_1.style({
                transform: 'translateX(-100%)'
            }))
        ]),
        animations_1.transition('void => right', [
            animations_1.style({
                transform: 'translateX(-100%)'
            }),
            animations_1.animate('300ms ease-in', animations_1.style({
                transform: 'translateX(0)'
            }))
        ]),
        animations_1.transition('right => void', [
            animations_1.style({
                transform: 'translateX(0)'
            }),
            animations_1.animate('300ms ease-in', animations_1.style({
                transform: 'translateX(100%)'
            }))
        ]),
    ]),
    animations_1.trigger('slideInLeft', [
        animations_1.state('void', animations_1.style({
            transform: 'translateX(-100%)',
            display: 'none'
        })),
        animations_1.state('*', animations_1.style({
            transform: 'translateX(0)',
            display: 'flex'
        })),
        animations_1.transition('void => *', animations_1.animate('300ms')),
        animations_1.transition('* => void', animations_1.animate('300ms'))
    ]),
    animations_1.trigger('slideInRight', [
        animations_1.state('void', animations_1.style({
            transform: 'translateX(100%)',
            display: 'none'
        })),
        animations_1.state('*', animations_1.style({
            transform: 'translateX(0)',
            display: 'flex'
        })),
        animations_1.transition('void => *', animations_1.animate('300ms')),
        animations_1.transition('* => void', animations_1.animate('300ms'))
    ]),
    animations_1.trigger('slideInTop', [
        animations_1.state('void', animations_1.style({
            transform: 'translateY(-100%)',
            display: 'none'
        })),
        animations_1.state('*', animations_1.style({
            transform: 'translateY(0)',
            display: 'flex'
        })),
        animations_1.transition('void => *', animations_1.animate('300ms')),
        animations_1.transition('* => void', animations_1.animate('300ms'))
    ]),
    animations_1.trigger('slideInBottom', [
        animations_1.state('void', animations_1.style({
            transform: 'translateY(100%)',
            display: 'none'
        })),
        animations_1.state('*', animations_1.style({
            transform: 'translateY(0)',
            display: 'flex'
        })),
        animations_1.transition('void => *', animations_1.animate('300ms')),
        animations_1.transition('* => void', animations_1.animate('300ms'))
    ]),
    animations_1.trigger('expandCollapse', [
        animations_1.state('void', animations_1.style({
            height: '0px'
        })),
        animations_1.state('*', animations_1.style({
            height: '*'
        })),
        animations_1.transition('void => *', animations_1.animate('300ms ease-out')),
        animations_1.transition('* => void', animations_1.animate('300ms ease-in'))
    ]),
    animations_1.trigger('routerTransitionLeft', [
        animations_1.transition('* => *', [
            animations_1.query('fuse-content > :enter, fuse-content > :leave', [
                animations_1.style({
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
            ], { optional: true }),
            animations_1.query('fuse-content > :enter', [
                animations_1.style({
                    transform: 'translateX(100%)',
                    opacity: 0
                })
            ], { optional: true }),
            animations_1.sequence([
                animations_1.group([
                    animations_1.query('fuse-content > :leave', [
                        animations_1.style({
                            transform: 'translateX(0)',
                            opacity: 1
                        }),
                        animations_1.animate('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', animations_1.style({
                            transform: 'translateX(-100%)',
                            opacity: 0
                        }))
                    ], { optional: true }),
                    animations_1.query('fuse-content > :enter', [
                        animations_1.style({ transform: 'translateX(100%)' }),
                        animations_1.animate('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', animations_1.style({
                            transform: 'translateX(0%)',
                            opacity: 1
                        }))
                    ], { optional: true })
                ]),
                animations_1.query('fuse-content > :leave', animations_1.animateChild(), { optional: true }),
                animations_1.query('fuse-content > :enter', animations_1.animateChild(), { optional: true })
            ])
        ])
    ]),
    animations_1.trigger('routerTransitionRight', [
        animations_1.transition('* => *', [
            animations_1.query('fuse-content > :enter, fuse-content > :leave', [
                animations_1.style({
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
            ], { optional: true }),
            animations_1.query('fuse-content > :enter', [
                animations_1.style({
                    transform: 'translateX(-100%)',
                    opacity: 0
                })
            ], { optional: true }),
            animations_1.sequence([
                animations_1.group([
                    animations_1.query('fuse-content > :leave', [
                        animations_1.style({
                            transform: 'translateX(0)',
                            opacity: 1
                        }),
                        animations_1.animate('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', animations_1.style({
                            transform: 'translateX(100%)',
                            opacity: 0
                        }))
                    ], { optional: true }),
                    animations_1.query('fuse-content > :enter', [
                        animations_1.style({ transform: 'translateX(-100%)' }),
                        animations_1.animate('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', animations_1.style({
                            transform: 'translateX(0%)',
                            opacity: 1
                        }))
                    ], { optional: true })
                ]),
                animations_1.query('fuse-content > :leave', animations_1.animateChild(), { optional: true }),
                animations_1.query('fuse-content > :enter', animations_1.animateChild(), { optional: true })
            ])
        ])
    ]),
    animations_1.trigger('routerTransitionUp', [
        animations_1.transition('* => *', [
            animations_1.query('fuse-content > :enter, fuse-content > :leave', [
                animations_1.style({
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
            ], { optional: true }),
            animations_1.query('fuse-content > :enter', [
                animations_1.style({
                    transform: 'translateY(100%)',
                    opacity: 0
                })
            ], { optional: true }),
            animations_1.group([
                animations_1.query('fuse-content > :leave', [
                    animations_1.style({
                        transform: 'translateY(0)',
                        opacity: 1
                    }),
                    animations_1.animate('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', animations_1.style({
                        transform: 'translateY(-100%)',
                        opacity: 0
                    }))
                ], { optional: true }),
                animations_1.query('fuse-content > :enter', [
                    animations_1.style({ transform: 'translateY(100%)' }),
                    animations_1.animate('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', animations_1.style({
                        transform: 'translateY(0%)',
                        opacity: 1
                    }))
                ], { optional: true })
            ]),
            animations_1.query('fuse-content > :leave', animations_1.animateChild(), { optional: true }),
            animations_1.query('fuse-content > :enter', animations_1.animateChild(), { optional: true })
        ])
    ]),
    animations_1.trigger('routerTransitionDown', [
        animations_1.transition('* => *', [
            animations_1.query('fuse-content > :enter, fuse-content > :leave', [
                animations_1.style({
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
            ], { optional: true }),
            animations_1.query('fuse-content > :enter', [
                animations_1.style({
                    transform: 'translateY(-100%)',
                    opacity: 0
                })
            ], { optional: true }),
            animations_1.sequence([
                animations_1.group([
                    animations_1.query('fuse-content > :leave', [
                        animations_1.style({
                            transform: 'translateY(0)',
                            opacity: 1
                        }),
                        animations_1.animate('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', animations_1.style({
                            transform: 'translateY(100%)',
                            opacity: 0
                        }))
                    ], { optional: true }),
                    animations_1.query('fuse-content > :enter', [
                        animations_1.style({ transform: 'translateY(-100%)' }),
                        animations_1.animate('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', animations_1.style({
                            transform: 'translateY(0%)',
                            opacity: 1
                        }))
                    ], { optional: true })
                ]),
                animations_1.query('fuse-content > :leave', animations_1.animateChild(), { optional: true }),
                animations_1.query('fuse-content > :enter', animations_1.animateChild(), { optional: true })
            ])
        ])
    ]),
    animations_1.trigger('routerTransitionFade', [
        animations_1.transition('* => *', animations_1.group([
            animations_1.query('fuse-content > :enter, fuse-content > :leave ', [
                animations_1.style({
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
            ], { optional: true }),
            animations_1.query('fuse-content > :enter', [
                animations_1.style({
                    opacity: 0
                })
            ], { optional: true }),
            animations_1.query('fuse-content > :leave', [
                animations_1.style({
                    opacity: 1
                }),
                animations_1.animate('300ms cubic-bezier(0.0, 0.0, 0.2, 1)', animations_1.style({
                    opacity: 0
                }))
            ], { optional: true }),
            animations_1.query('fuse-content > :enter', [
                animations_1.style({
                    opacity: 0
                }),
                animations_1.animate('300ms cubic-bezier(0.0, 0.0, 0.2, 1)', animations_1.style({
                    opacity: 1
                }))
            ], { optional: true }),
            animations_1.query('fuse-content > :enter', animations_1.animateChild(), { optional: true }),
            animations_1.query('fuse-content > :leave', animations_1.animateChild(), { optional: true })
        ]))
    ])
];


/***/ }),

/***/ "../../../../../src/app/core/components/confirm-dialog/confirm-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 matDialogTitle>Confirm</h1>\n<div mat-dialog-content>{{confirmMessage}}</div>\n<div mat-dialog-actions class=\"pt-24\">\n    <button mat-raised-button class=\"mat-accent mr-16\" (click)=\"dialogRef.close(true)\">Confirm</button>\n    <button mat-button (click)=\"dialogRef.close(false)\">Cancel</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/components/confirm-dialog/confirm-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/confirm-dialog/confirm-dialog.component.ts":
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
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var FuseConfirmDialogComponent = (function () {
    function FuseConfirmDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    FuseConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    FuseConfirmDialogComponent = __decorate([
        core_1.Component({
            selector: 'fuse-confirm-dialog',
            template: __webpack_require__("../../../../../src/app/core/components/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/confirm-dialog/confirm-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [material_1.MatDialogRef])
    ], FuseConfirmDialogComponent);
    return FuseConfirmDialogComponent;
}());
exports.FuseConfirmDialogComponent = FuseConfirmDialogComponent;


/***/ }),

/***/ "../../../../../src/app/core/components/countdown/countdown.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fuse-countdown\">\n\n    <div class=\"time days\">\n        <div class=\"value\">\n            {{countdown.days}}\n        </div>\n        <div class=\"title\">\n            days\n        </div>\n    </div>\n\n    <div class=\"time hours\">\n        <div class=\"value\">\n            {{countdown.hours}}\n        </div>\n        <div class=\"title\">\n            hours\n        </div>\n    </div>\n\n    <div class=\"time minutes\">\n        <div class=\"value\">\n            {{countdown.minutes}}\n        </div>\n        <div class=\"title\">\n            minutes\n        </div>\n    </div>\n\n    <div class=\"time seconds\">\n        <div class=\"value\">\n            {{countdown.seconds}}\n        </div>\n        <div class=\"title\">\n            seconds\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/countdown/countdown.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  :host .fuse-countdown {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-align: center; }\n    :host .fuse-countdown .time {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      padding: 0 12px; }\n      :host .fuse-countdown .time .value {\n        font-size: 34px;\n        line-height: 34px;\n        padding-bottom: 8px; }\n      :host .fuse-countdown .time .title {\n        color: rgba(0, 0, 0, 0.54); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/countdown/countdown.component.ts":
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
var moment = __webpack_require__("../../../../moment/moment.js");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");
var FuseCountdownComponent = (function () {
    function FuseCountdownComponent() {
        this.countdown = {
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        };
    }
    FuseCountdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currDate = moment();
        var eventDate = moment(this.eventDate);
        var diff = eventDate.diff(currDate, 'seconds');
        var countDown = Observable_1.Observable
            .interval(1000)
            .map(function (value) {
            return diff = diff - 1;
        })
            .map(function (value) {
            var timeLeft = moment.duration(value, 'seconds');
            return {
                days: timeLeft.asDays().toFixed(0),
                hours: timeLeft.hours(),
                minutes: timeLeft.minutes(),
                seconds: timeLeft.seconds()
            };
        });
        countDown.subscribe(function (value) {
            _this.countdown = value;
        });
    };
    __decorate([
        core_1.Input('eventDate'),
        __metadata("design:type", Object)
    ], FuseCountdownComponent.prototype, "eventDate", void 0);
    FuseCountdownComponent = __decorate([
        core_1.Component({
            selector: 'fuse-countdown',
            template: __webpack_require__("../../../../../src/app/core/components/countdown/countdown.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/countdown/countdown.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCountdownComponent);
    return FuseCountdownComponent;
}());
exports.FuseCountdownComponent = FuseCountdownComponent;


/***/ }),

/***/ "../../../../../src/app/core/components/highlight/highlight.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 8px;\n  background: #263238;\n  cursor: text; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/highlight/highlight.component.ts":
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
var Prism = __webpack_require__("../../../../prismjs/prism.js");
__webpack_require__("../../../../../src/app/core/components/highlight/prism-languages.ts");
var FuseHighlightComponent = (function () {
    function FuseHighlightComponent(elementRef, http) {
        this.elementRef = elementRef;
        this.http = http;
    }
    FuseHighlightComponent.prototype.ngOnInit = function () {
        var _this = this;
        // If there is no language defined, return...
        if (!this.lang) {
            return;
        }
        // If the path is defined...
        if (this.path) {
            // Get the source
            this.http.get(this.path, { responseType: 'text' }).subscribe(function (response) {
                // Highlight it
                _this.highlight(response);
            });
        }
        // If the path is not defined and the source element exists...
        if (!this.path && this.source) {
            // Highlight it
            this.highlight(this.source.nativeElement.value);
        }
    };
    FuseHighlightComponent.prototype.highlight = function (sourceCode) {
        // Split the source into lines
        var sourceLines = sourceCode.split('\n');
        // Remove the first and the last line of the source
        // code if they are blank lines. This way, the html
        // can be formatted properly while using fuse-highlight
        // component
        if (!sourceLines[0].trim()) {
            sourceLines.shift();
        }
        if (!sourceLines[sourceLines.length - 1].trim()) {
            sourceLines.pop();
        }
        // Find the first non-whitespace char index in
        // the first line of the source code
        var indexOfFirstChar = sourceLines[0].search(/\S|$/);
        // Generate the trimmed source
        var source = '';
        // Iterate through all the lines
        sourceLines.forEach(function (line, index) {
            // Trim the beginning white space depending on the index
            // and concat the source code
            source = source + line.substr(indexOfFirstChar, line.length);
            // If it's not the last line...
            if (index !== sourceLines.length - 1) {
                // Add a line break at the end
                source = source + '\n';
            }
        });
        // Generate the highlighted code
        var highlightedCode = Prism.highlight(source, Prism.languages[this.lang]);
        // Replace the innerHTML of the component with the highlighted code
        this.elementRef.nativeElement.innerHTML =
            '<pre><code class="highlight language-' + this.lang + '">' + highlightedCode + '</code></pre>';
    };
    __decorate([
        core_1.ContentChild('source'),
        __metadata("design:type", core_1.ElementRef)
    ], FuseHighlightComponent.prototype, "source", void 0);
    __decorate([
        core_1.Input('lang'),
        __metadata("design:type", String)
    ], FuseHighlightComponent.prototype, "lang", void 0);
    __decorate([
        core_1.Input('path'),
        __metadata("design:type", String)
    ], FuseHighlightComponent.prototype, "path", void 0);
    FuseHighlightComponent = __decorate([
        core_1.Component({
            selector: 'fuse-highlight',
            template: ' ',
            styles: [__webpack_require__("../../../../../src/app/core/components/highlight/highlight.component.scss")]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            http_1.HttpClient])
    ], FuseHighlightComponent);
    return FuseHighlightComponent;
}());
exports.FuseHighlightComponent = FuseHighlightComponent;


/***/ }),

/***/ "../../../../../src/app/core/components/highlight/prism-languages.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("../../../../prismjs/prism.js");
__webpack_require__("../../../../prismjs/components/prism-c.js");
__webpack_require__("../../../../prismjs/components/prism-cpp.js");
__webpack_require__("../../../../prismjs/components/prism-csharp.js");
__webpack_require__("../../../../prismjs/components/prism-css.js");
__webpack_require__("../../../../prismjs/components/prism-diff.js");
__webpack_require__("../../../../prismjs/components/prism-markup.js");
__webpack_require__("../../../../prismjs/components/prism-java.js");
__webpack_require__("../../../../prismjs/components/prism-javascript.js");
__webpack_require__("../../../../prismjs/components/prism-json.js");
__webpack_require__("../../../../prismjs/components/prism-perl.js");
__webpack_require__("../../../../prismjs/components/prism-php.js");
__webpack_require__("../../../../prismjs/components/prism-python.js");
__webpack_require__("../../../../prismjs/components/prism-sass.js");
__webpack_require__("../../../../prismjs/components/prism-scss.js");
__webpack_require__("../../../../prismjs/components/prism-typescript.js");


/***/ }),

/***/ "../../../../../src/app/core/components/material-color-picker/material-color-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button\n        type=\"button\"\n        class=\"mat-elevation-z1\"\n        [matMenuTriggerFor]=\"colorMenu\"\n        (menuOpened)=\"onMenuOpen()\"\n        [ngClass]=\"'mat-'+selectedPalette+'-'+selectedHue+'-bg'\">\n    <mat-icon>palette</mat-icon>\n</button>\n\n<mat-menu #colorMenu=\"matMenu\" class=\"fuse-material-color-picker-menu\">\n\n    <header [ngClass]=\"selectedColor?.class || 'mat-accent-bg'\"\n            class=\"mat-elevation-z4\"\n            fxLayout=\"row\"\n            fxLayoutAlign=\"space-between center\">\n\n        <button mat-icon-button\n                [style.visibility]=\"view==='hues'?'visible':'hidden'\"\n                (click)=\"$event.stopPropagation();backToPaletteSelection()\" aria-label=\"Palette\">\n            <mat-icon class=\"s-20\">arrow_back</mat-icon>\n        </button>\n\n        <span *ngIf=\"selectedColor?.palette\">\n            {{selectedColor.palette}} {{selectedColor.hue}}\n        </span>\n\n        <span *ngIf=\"!selectedColor?.palette\">\n            Select Color\n        </span>\n\n        <button mat-icon-button\n                class=\"remove-color-button\"\n                (click)=\"removeColor()\"\n                aria-label=\"Remove Color\">\n            <mat-icon class=\"s-20\">delete</mat-icon>\n        </button>\n    </header>\n\n\n    <div [ngSwitch]=\"view\" class=\"views\">\n\n        <div class=\"view\"\n             *ngSwitchCase=\"'palettes'\"\n             [@slideInLeft]>\n\n            <div fxLayout=\"row\" fxLayoutWrap\n                 fxLayoutAlign=\"start start\"\n                 class=\"colors\" fusePerfectScrollbar>\n                <div class=\"color\"\n                     [ngClass]=\"'mat-'+color.key+'-bg'\"\n                     *ngFor=\"let color of (colors | keys)\"\n                     (click)=\"$event.stopPropagation();selectPalette(color.key)\"\n                     fxLayout=\"row\" fxLayoutAlign=\"start end\" mat-ink-ripple>\n                    <span class=\"label\">\n                        {{color.key}}\n                    </span>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"view\"\n             *ngSwitchCase=\"'hues'\"\n             [@slideInRight]>\n            <div fxLayout=\"row\" fxLayoutWrap\n                 fxLayoutAlign=\"start start\"\n                 class=\"colors\" fusePerfectScrollbar>\n                <div class=\"color\"\n                     *ngFor=\"let hue of hues\"\n                     [fxHide]=\"selectedPalette === 'white' && hue !== '500'|| selectedPalette === 'black' && hue !== '500'\"\n                     [ngClass]=\"'mat-'+selectedPalette+'-'+hue+'-bg'\"\n                     (click)=\"selectHue(hue)\"\n                     fxLayout=\"row\" fxLayoutAlign=\"start end\" mat-ink-ripple>\n                    <span class=\"label\">\n                        {{hue}}\n                    </span>\n                    <mat-icon *ngIf=\"selectedHue === hue\" class=\"s-16\">check</mat-icon>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</mat-menu>\n"

/***/ }),

/***/ "../../../../../src/app/core/components/material-color-picker/material-color-picker.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fuse-material-color-picker-menu {\n  width: 208px; }\n  .fuse-material-color-picker-menu .mat-menu-content {\n    padding: 0; }\n    .fuse-material-color-picker-menu .mat-menu-content .views {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      position: relative;\n      overflow: hidden;\n      min-height: 258px;\n      height: 308px;\n      background-color: #F7F7F7; }\n      .fuse-material-color-picker-menu .mat-menu-content .views .view {\n        position: absolute;\n        width: 208px;\n        height: 100%;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0; }\n        .fuse-material-color-picker-menu .mat-menu-content .views .view .colors {\n          position: relative;\n          padding: 4px; }\n          .fuse-material-color-picker-menu .mat-menu-content .views .view .colors .color {\n            position: relative;\n            width: 46px;\n            height: 46px;\n            margin: 2px;\n            border-radius: 0;\n            cursor: pointer; }\n            .fuse-material-color-picker-menu .mat-menu-content .views .view .colors .color .label {\n              padding: 2px;\n              font-size: 10px; }\n            .fuse-material-color-picker-menu .mat-menu-content .views .view .colors .color mat-icon {\n              position: absolute;\n              top: 2px;\n              right: 2px;\n              font-size: 16px;\n              opacity: 0.7; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/material-color-picker/material-color-picker.component.ts":
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
var animations_1 = __webpack_require__("../../../../../src/app/core/animations.ts");
var FuseMaterialColorPickerComponent = (function () {
    function FuseMaterialColorPickerComponent() {
        this.view = 'palettes';
        this.selectedPalette = '';
        this.selectedHue = '';
        this.selectedFg = '';
        this.onValueChange = new core_1.EventEmitter();
        this.selectedPaletteChange = new core_1.EventEmitter();
        this.selectedHueChange = new core_1.EventEmitter();
        this.selectedClassChange = new core_1.EventEmitter();
        this.selectedBgChange = new core_1.EventEmitter();
        this.selectedFgChange = new core_1.EventEmitter();
        this._selectedClass = '';
        this._selectedBg = '';
        this.colors = matColors_1.MatColors.all;
        this.hues = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'A100', 'A200', 'A400', 'A700'];
    }
    Object.defineProperty(FuseMaterialColorPickerComponent.prototype, "selectedClass", {
        get: function () {
            return this._selectedClass;
        },
        set: function (value) {
            if (value && value !== '' && this._selectedClass !== value) {
                var color = value.split('-');
                if (color.length >= 5) {
                    this.selectedPalette = color[1] + '-' + color[2];
                    this.selectedHue = color[3];
                }
                else {
                    this.selectedPalette = color[1];
                    this.selectedHue = color[2];
                }
            }
            this._selectedClass = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FuseMaterialColorPickerComponent.prototype, "selectedBg", {
        get: function () {
            return this._selectedBg;
        },
        set: function (value) {
            if (value && value !== '' && this._selectedBg !== value) {
                for (var palette in this.colors) {
                    if (!this.colors.hasOwnProperty(palette)) {
                        continue;
                    }
                    for (var _i = 0, _a = this.hues; _i < _a.length; _i++) {
                        var hue = _a[_i];
                        if (this.colors[palette][hue] === value) {
                            this.selectedPalette = palette;
                            this.selectedHue = hue;
                            break;
                        }
                    }
                }
            }
            this._selectedBg = value;
        },
        enumerable: true,
        configurable: true
    });
    FuseMaterialColorPickerComponent.prototype.ngOnInit = function () {
    };
    FuseMaterialColorPickerComponent.prototype.selectPalette = function (palette) {
        this.selectedPalette = palette;
        this.updateSelectedColor();
        this.view = 'hues';
    };
    FuseMaterialColorPickerComponent.prototype.selectHue = function (hue) {
        this.selectedHue = hue;
        this.updateSelectedColor();
    };
    FuseMaterialColorPickerComponent.prototype.removeColor = function () {
        this.selectedPalette = '';
        this.selectedHue = '';
        this.updateSelectedColor();
    };
    FuseMaterialColorPickerComponent.prototype.updateSelectedColor = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.selectedColor && _this.selectedPalette === _this.selectedColor.palette && _this.selectedHue === _this.selectedColor.hue) {
                return;
            }
            if (_this.selectedPalette !== '' && _this.selectedHue !== '') {
                _this.selectedBg = matColors_1.MatColors.getColor(_this.selectedPalette)[_this.selectedHue];
                _this.selectedFg = matColors_1.MatColors.getColor(_this.selectedPalette).contrast[_this.selectedHue];
                _this.selectedClass = 'mat-' + _this.selectedPalette + '-' + _this.selectedHue + '-bg';
            }
            else {
                _this.selectedBg = '';
                _this.selectedFg = '';
            }
            _this.selectedColor = {
                palette: _this.selectedPalette,
                hue: _this.selectedHue,
                class: _this.selectedClass,
                bg: _this.selectedBg,
                fg: _this.selectedFg
            };
            _this.selectedPaletteChange.emit(_this.selectedPalette);
            _this.selectedHueChange.emit(_this.selectedHue);
            _this.selectedClassChange.emit(_this.selectedClass);
            _this.selectedBgChange.emit(_this.selectedBg);
            _this.selectedFgChange.emit(_this.selectedFg);
            _this.value = _this.selectedColor;
            _this.onValueChange.emit(_this.selectedColor);
        });
    };
    FuseMaterialColorPickerComponent.prototype.backToPaletteSelection = function () {
        this.view = 'palettes';
    };
    FuseMaterialColorPickerComponent.prototype.onMenuOpen = function () {
        if (this.selectedPalette === '') {
            this.view = 'palettes';
        }
        else {
            this.view = 'hues';
        }
    };
    FuseMaterialColorPickerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.selectedBg && changes.selectedBg.currentValue === '' ||
            changes.selectedClass && changes.selectedClass.currentValue === '' ||
            changes.selectedPalette && changes.selectedPalette.currentValue === '') {
            this.removeColor();
            return;
        }
        if (changes.selectedPalette || changes.selectedHue || changes.selectedClass || changes.selectedBg) {
            this.updateSelectedColor();
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "selectedPalette", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "selectedHue", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "selectedFg", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "value", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "onValueChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "selectedPaletteChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "selectedHueChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "selectedClassChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "selectedBgChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "selectedFgChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FuseMaterialColorPickerComponent.prototype, "selectedClass", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FuseMaterialColorPickerComponent.prototype, "selectedBg", null);
    FuseMaterialColorPickerComponent = __decorate([
        core_1.Component({
            selector: 'fuse-material-color-picker',
            template: __webpack_require__("../../../../../src/app/core/components/material-color-picker/material-color-picker.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/material-color-picker/material-color-picker.component.scss")],
            animations: animations_1.fuseAnimations,
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], FuseMaterialColorPickerComponent);
    return FuseMaterialColorPickerComponent;
}());
exports.FuseMaterialColorPickerComponent = FuseMaterialColorPickerComponent;


/***/ }),

/***/ "../../../../../src/app/core/components/navigation/horizontal/nav-collapse/nav-horizontal-collapse.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"nav-link\" matRipple>\n    <mat-icon class=\"nav-link-icon\" *ngIf=\"item.icon\">{{item.icon}}</mat-icon>\n    <span class=\"nav-link-title\" [translate]=\"item.translate\">{{item.title}}</span>\n    <span class=\"nav-link-badge\" *ngIf=\"item.badge\" [translate]=\"item.badge.translate\"\n          [ngStyle]=\"{'background-color': item.badge.bg,'color': item.badge.fg}\">\n        {{item.badge.title}}\n    </span>\n    <mat-icon class=\"collapse-arrow\">keyboard_arrow_right</mat-icon>\n</a>\n\n<div class=\"children\" [ngClass]=\"{'open': isOpen}\">\n\n    <div class=\"{{fuseSettings.colorClasses.navbar}}\">\n\n        <ng-container *ngFor=\"let item of item.children\">\n            <fuse-nav-horizontal-item *ngIf=\"item.type=='item'\" [item]=\"item\"></fuse-nav-horizontal-item>\n            <fuse-nav-horizontal-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></fuse-nav-horizontal-collapse>\n            <fuse-nav-horizontal-collapse *ngIf=\"item.type=='group'\" [item]=\"item\"></fuse-nav-horizontal-collapse>\n        </ng-container>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/horizontal/nav-collapse/nav-horizontal-collapse.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/horizontal/nav-collapse/nav-horizontal-collapse.component.ts":
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
var animations_1 = __webpack_require__("../../../../../src/app/core/animations.ts");
var config_service_1 = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
var FuseNavHorizontalCollapseComponent = (function () {
    function FuseNavHorizontalCollapseComponent(fuseConfig) {
        var _this = this;
        this.fuseConfig = fuseConfig;
        this.isOpen = false;
        this.classes = 'nav-item nav-collapse';
        this.onSettingsChanged =
            this.fuseConfig.onSettingsChanged
                .subscribe(function (newSettings) {
                _this.fuseSettings = newSettings;
            });
    }
    FuseNavHorizontalCollapseComponent.prototype.open = function () {
        this.isOpen = true;
    };
    FuseNavHorizontalCollapseComponent.prototype.close = function () {
        this.isOpen = false;
    };
    FuseNavHorizontalCollapseComponent.prototype.ngOnDestroy = function () {
        this.onSettingsChanged.unsubscribe();
    };
    __decorate([
        core_1.HostBinding('class'),
        __metadata("design:type", Object)
    ], FuseNavHorizontalCollapseComponent.prototype, "classes", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FuseNavHorizontalCollapseComponent.prototype, "item", void 0);
    __decorate([
        core_1.HostListener('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuseNavHorizontalCollapseComponent.prototype, "open", null);
    __decorate([
        core_1.HostListener('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuseNavHorizontalCollapseComponent.prototype, "close", null);
    FuseNavHorizontalCollapseComponent = __decorate([
        core_1.Component({
            selector: 'fuse-nav-horizontal-collapse',
            template: __webpack_require__("../../../../../src/app/core/components/navigation/horizontal/nav-collapse/nav-horizontal-collapse.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/navigation/horizontal/nav-collapse/nav-horizontal-collapse.component.scss")],
            animations: animations_1.fuseAnimations
        }),
        __metadata("design:paramtypes", [config_service_1.FuseConfigService])
    ], FuseNavHorizontalCollapseComponent);
    return FuseNavHorizontalCollapseComponent;
}());
exports.FuseNavHorizontalCollapseComponent = FuseNavHorizontalCollapseComponent;


/***/ }),

/***/ "../../../../../src/app/core/components/navigation/horizontal/nav-item/nav-horizontal-item.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"nav-link\" *ngIf=\"item.url\" [routerLink]=\"[item.url]\" routerLinkActive=\"active\"\n   [routerLinkActiveOptions]=\"{exact: item.exactMatch || false}\" matRipple>\n    <mat-icon class=\"nav-link-icon\" *ngIf=\"item.icon\">{{item.icon}}</mat-icon>\n    <span class=\"nav-link-title\" [translate]=\"item.translate\">{{item.title}}</span>\n    <span class=\"nav-link-badge\" *ngIf=\"item.badge\" [translate]=\"item.badge.translate\"\n          [ngStyle]=\"{'background-color': item.badge.bg,'color': item.badge.fg}\">\n        {{item.badge.title}}\n    </span>\n</a>\n\n<span class=\"nav-link\" *ngIf=\"item.function\" (click)=\"item.function()\" matRipple>\n    <mat-icon class=\"nav-link-icon\" *ngIf=\"item.icon\">{{item.icon}}</mat-icon>\n    <span class=\"nav-link-title\" [translate]=\"item.translate\">{{item.title}}</span>\n    <span class=\"nav-link-badge\" *ngIf=\"item.badge\" [translate]=\"item.badge.translate\"\n          [ngStyle]=\"{'background-color': item.badge.bg,'color': item.badge.fg}\">\n        {{item.badge.title}}\n    </span>\n</span>"

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/horizontal/nav-item/nav-horizontal-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/horizontal/nav-item/nav-horizontal-item.component.ts":
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
var FuseNavHorizontalItemComponent = (function () {
    function FuseNavHorizontalItemComponent() {
        this.classes = 'nav-item';
    }
    __decorate([
        core_1.HostBinding('class'),
        __metadata("design:type", Object)
    ], FuseNavHorizontalItemComponent.prototype, "classes", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FuseNavHorizontalItemComponent.prototype, "item", void 0);
    FuseNavHorizontalItemComponent = __decorate([
        core_1.Component({
            selector: 'fuse-nav-horizontal-item',
            template: __webpack_require__("../../../../../src/app/core/components/navigation/horizontal/nav-item/nav-horizontal-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/navigation/horizontal/nav-item/nav-horizontal-item.component.scss")]
        })
    ], FuseNavHorizontalItemComponent);
    return FuseNavHorizontalItemComponent;
}());
exports.FuseNavHorizontalItemComponent = FuseNavHorizontalItemComponent;


/***/ }),

/***/ "../../../../../src/app/core/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-navigation\" class=\"nav\"\n     [ngClass]=\"{'horizontal':layout === 'horizontal', 'vertical':layout === 'vertical'}\">\n\n    <!-- Vertical Navigation Layout -->\n    <ng-container *ngIf=\"layout === 'vertical'\">\n\n        <ng-container *ngFor=\"let item of navigationModel\">\n\n            <fuse-nav-vertical-group *ngIf=\"item.type=='group'\" [item]=\"item\"></fuse-nav-vertical-group>\n            <fuse-nav-vertical-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></fuse-nav-vertical-collapse>\n            <fuse-nav-vertical-item *ngIf=\"item.type=='item'\" [item]=\"item\"></fuse-nav-vertical-item>\n\n        </ng-container>\n\n    </ng-container>\n    <!-- / Vertical Navigation Layout -->\n\n    <!-- Horizontal Navigation Layout -->\n    <ng-container *ngIf=\"layout === 'horizontal'\">\n\n        <ng-container *ngFor=\"let item of navigationModel\">\n\n            <fuse-nav-horizontal-collapse *ngIf=\"item.type=='group'\" [item]=\"item\"></fuse-nav-horizontal-collapse>\n            <fuse-nav-horizontal-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></fuse-nav-horizontal-collapse>\n            <fuse-nav-horizontal-item *ngIf=\"item.type=='item'\" [item]=\"item\"></fuse-nav-horizontal-item>\n\n        </ng-container>\n\n    </ng-container>\n    <!-- / Horizontal Navigation Layout -->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n#main-navigation {\n  margin: 0;\n  padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/navigation.component.ts":
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
var navigation_service_1 = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.service.ts");
var FuseNavigationComponent = (function () {
    function FuseNavigationComponent(fuseNavigationService) {
        var _this = this;
        this.fuseNavigationService = fuseNavigationService;
        this.layout = 'vertical';
        this.navigationModelChangeSubscription =
            this.fuseNavigationService.onNavigationModelChange
                .subscribe(function (navigationModel) {
                _this.navigationModel = navigationModel;
            });
    }
    FuseNavigationComponent.prototype.ngOnDestroy = function () {
        this.navigationModelChangeSubscription.unsubscribe();
    };
    __decorate([
        core_1.Input('layout'),
        __metadata("design:type", Object)
    ], FuseNavigationComponent.prototype, "layout", void 0);
    FuseNavigationComponent = __decorate([
        core_1.Component({
            selector: 'fuse-navigation',
            template: __webpack_require__("../../../../../src/app/core/components/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/navigation/navigation.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [navigation_service_1.FuseNavigationService])
    ], FuseNavigationComponent);
    return FuseNavigationComponent;
}());
exports.FuseNavigationComponent = FuseNavigationComponent;


/***/ }),

/***/ "../../../../../src/app/core/components/navigation/navigation.module.ts":
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
var navigation_component_1 = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.component.ts");
var nav_vertical_item_component_1 = __webpack_require__("../../../../../src/app/core/components/navigation/vertical/nav-item/nav-vertical-item.component.ts");
var nav_vertical_collapse_component_1 = __webpack_require__("../../../../../src/app/core/components/navigation/vertical/nav-collapse/nav-vertical-collapse.component.ts");
var nav_vertical_group_component_1 = __webpack_require__("../../../../../src/app/core/components/navigation/vertical/nav-group/nav-vertical-group.component.ts");
var nav_horizontal_item_component_1 = __webpack_require__("../../../../../src/app/core/components/navigation/horizontal/nav-item/nav-horizontal-item.component.ts");
var nav_horizontal_collapse_component_1 = __webpack_require__("../../../../../src/app/core/components/navigation/horizontal/nav-collapse/nav-horizontal-collapse.component.ts");
var FuseNavigationModule = (function () {
    function FuseNavigationModule() {
    }
    FuseNavigationModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule
            ],
            exports: [
                navigation_component_1.FuseNavigationComponent
            ],
            declarations: [
                navigation_component_1.FuseNavigationComponent,
                nav_vertical_group_component_1.FuseNavVerticalGroupComponent,
                nav_vertical_item_component_1.FuseNavVerticalItemComponent,
                nav_vertical_collapse_component_1.FuseNavVerticalCollapseComponent,
                nav_horizontal_item_component_1.FuseNavHorizontalItemComponent,
                nav_horizontal_collapse_component_1.FuseNavHorizontalCollapseComponent
            ]
        })
    ], FuseNavigationModule);
    return FuseNavigationModule;
}());
exports.FuseNavigationModule = FuseNavigationModule;


/***/ }),

/***/ "../../../../../src/app/core/components/navigation/navigation.service.ts":
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
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var FuseNavigationService = (function () {
    function FuseNavigationService() {
        this.onNavCollapseToggle = new core_1.EventEmitter();
        this.onNavCollapseToggled = new core_1.EventEmitter();
        this.onNavigationModelChange = new BehaviorSubject_1.BehaviorSubject({});
        this.flatNavigation = [];
    }
    /**
     * Get navigation model
     *
     * @returns {any[]}
     */
    FuseNavigationService.prototype.getNavigationModel = function () {
        return this.navigationModel.model;
    };
    /**
     * Set the navigation model
     *
     * @param model
     */
    FuseNavigationService.prototype.setNavigationModel = function (model) {
        this.navigationModel = model;
        this.onNavigationModelChange.next(this.navigationModel.model);
    };
    /**
     * Add new navigation item
     * to the given location
     */
    FuseNavigationService.prototype.addNavigationItem = function (location, item) {
        // Parse the location
        var locationArr = location.split('.');
        if (locationArr.length === 0) {
            return;
        }
        // Find the navigation item
        var navItem = this.findNavigationItemById(locationArr);
        // Act according to the item type
        switch (navItem.type) {
            case 'item':
                // Create a children array
                navItem.children = [];
                // Push the item
                navItem.children.push(item);
                // Change the item type to collapsable
                navItem.type = 'collapse';
                break;
            case 'collapse':
                // Push the item
                navItem.children.push(item);
                break;
            case 'group':
                // Push the item
                navItem.children.push(item);
                break;
            default:
                break;
        }
    };
    /**
     * Get navigation item from
     * given location
     *
     * @param location
     */
    FuseNavigationService.prototype.getNavigationItem = function (location) {
        // Parse the location
        var locationArr = location.split('.');
        if (locationArr.length === 0) {
            return;
        }
        // Find and return the navigation item
        return this.findNavigationItemById(locationArr);
    };
    /**
     * Find navigation item by location
     *
     * @param location
     * @param navigation
     */
    FuseNavigationService.prototype.findNavigationItemById = function (location, navigation) {
        if (!navigation) {
            navigation = this.navigationModel.model;
        }
        // Iterate through the given navigation
        for (var _i = 0, navigation_1 = navigation; _i < navigation_1.length; _i++) {
            var navItem = navigation_1[_i];
            // If the nav item id equals the first location...
            if (navItem.id === location[0]) {
                // If there is more location to look at...
                if (location.length > 1) {
                    // Remove the first item of the location
                    location.splice(0, 1);
                    // Go nested...
                    return this.findNavigationItemById(location, navItem.children);
                }
                else {
                    return navItem;
                }
            }
        }
    };
    /**
     * Get flattened navigation array
     * @param navigationItems
     * @returns {any[]}
     */
    FuseNavigationService.prototype.getFlatNavigation = function (navigationItems) {
        // If navigation items not provided,
        // that means we are running the function
        // for the first time...
        if (!navigationItems) {
            // Reset the flat navigation
            this.flatNavigation = [];
            // Get the entire navigation model
            navigationItems = this.navigationModel.model;
        }
        for (var _i = 0, navigationItems_1 = navigationItems; _i < navigationItems_1.length; _i++) {
            var navItem = navigationItems_1[_i];
            if (navItem.type === 'subheader') {
                continue;
            }
            if (navItem.type === 'item') {
                this.flatNavigation.push({
                    title: navItem.title,
                    type: navItem.type,
                    icon: navItem.icon || false,
                    url: navItem.url
                });
                continue;
            }
            if (navItem.type === 'collapse' || navItem.type === 'group') {
                if (navItem.children) {
                    this.getFlatNavigation(navItem.children);
                }
            }
        }
        return this.flatNavigation;
    };
    FuseNavigationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FuseNavigationService);
    return FuseNavigationService;
}());
exports.FuseNavigationService = FuseNavigationService;


/***/ }),

/***/ "../../../../../src/app/core/components/navigation/vertical/nav-collapse/nav-vertical-collapse.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"nav-link\" matRipple (click)=\"toggleOpen($event)\">\n    <mat-icon class=\"nav-link-icon\" *ngIf=\"item.icon\">{{item.icon}}</mat-icon>\n    <span class=\"nav-link-title\" [translate]=\"item.translate\">{{item.title}}</span>\n    <span class=\"nav-link-badge\" *ngIf=\"item.badge\" [translate]=\"item.badge.translate\"\n          [ngStyle]=\"{'background-color': item.badge.bg,'color': item.badge.fg}\">\n        {{item.badge.title}}\n    </span>\n    <mat-icon class=\"collapse-arrow\">keyboard_arrow_right</mat-icon>\n</a>\n\n<div class=\"children\" [@slideInOut]=\"isOpen\">\n    <ng-container *ngFor=\"let item of item.children\">\n        <fuse-nav-vertical-item *ngIf=\"item.type=='item'\" [item]=\"item\"></fuse-nav-vertical-item>\n        <fuse-nav-vertical-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></fuse-nav-vertical-collapse>\n        <fuse-nav-vertical-group *ngIf=\"item.type=='group'\" [item]=\"item\"></fuse-nav-vertical-group>\n    </ng-container>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/vertical/nav-collapse/nav-vertical-collapse.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".folded:not(.folded-open) :host .nav-link > span {\n  opacity: 0;\n  transition: opacity 200ms ease; }\n\n:host .nav-link .collapse-arrow {\n  transition: opacity .25s ease-in-out .1s, -webkit-transform .3s ease-in-out;\n  transition: transform .3s ease-in-out, opacity .25s ease-in-out .1s;\n  transition: transform .3s ease-in-out, opacity .25s ease-in-out .1s, -webkit-transform .3s ease-in-out;\n  -webkit-transform: rotate(0);\n          transform: rotate(0); }\n\n:host > .children {\n  overflow: hidden; }\n\n:host.open > .nav-link .collapse-arrow {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/vertical/nav-collapse/nav-vertical-collapse.component.ts":
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
var navigation_service_1 = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var animations_1 = __webpack_require__("../../../../../src/app/core/animations.ts");
var FuseNavVerticalCollapseComponent = (function () {
    function FuseNavVerticalCollapseComponent(navigationService, router) {
        var _this = this;
        this.navigationService = navigationService;
        this.router = router;
        this.classes = 'nav-collapse nav-item';
        this.isOpen = false;
        // Listen for route changes
        router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                // Check if the url can be found in
                // one of the children of this item
                if (_this.isUrlInChildren(_this.item, event.urlAfterRedirects)) {
                    _this.expand();
                }
                else {
                    _this.collapse();
                }
            }
        });
        // Listen for collapsing of any navigation item
        this.navigationService.onNavCollapseToggled
            .subscribe(function (clickedItem) {
            if (clickedItem && clickedItem.children) {
                // Check if the clicked item is one
                // of the children of this item
                if (_this.isChildrenOf(_this.item, clickedItem)) {
                    return;
                }
                // Check if the url can be found in
                // one of the children of this item
                if (_this.isUrlInChildren(_this.item, _this.router.url)) {
                    return;
                }
                // If the clicked item is not this item, collapse...
                if (_this.item !== clickedItem) {
                    _this.collapse();
                }
            }
        });
    }
    FuseNavVerticalCollapseComponent.prototype.ngOnInit = function () {
        // Check if the url can be found in
        // one of the children of this item
        if (this.isUrlInChildren(this.item, this.router.url)) {
            this.expand();
        }
        else {
            this.collapse();
        }
    };
    /**
     * Toggle collapse
     *
     * @param ev
     */
    FuseNavVerticalCollapseComponent.prototype.toggleOpen = function (ev) {
        ev.preventDefault();
        this.isOpen = !this.isOpen;
        // Navigation collapse toggled...
        this.navigationService.onNavCollapseToggled.emit(this.item);
        this.navigationService.onNavCollapseToggle.emit();
    };
    /**
     * Expand the collapsable navigation
     */
    FuseNavVerticalCollapseComponent.prototype.expand = function () {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        this.navigationService.onNavCollapseToggle.emit();
    };
    /**
     * Collapse the collapsable navigation
     */
    FuseNavVerticalCollapseComponent.prototype.collapse = function () {
        if (!this.isOpen) {
            return;
        }
        this.isOpen = false;
        this.navigationService.onNavCollapseToggle.emit();
    };
    /**
     * Check if the given parent has the
     * given item in one of its children
     *
     * @param parent
     * @param item
     * @return {any}
     */
    FuseNavVerticalCollapseComponent.prototype.isChildrenOf = function (parent, item) {
        if (!parent.children) {
            return false;
        }
        if (parent.children.indexOf(item) !== -1) {
            return true;
        }
        for (var _i = 0, _a = parent.children; _i < _a.length; _i++) {
            var children = _a[_i];
            if (children.children) {
                return this.isChildrenOf(children, item);
            }
        }
    };
    /**
     * Check if the given url can be found
     * in one of the given parent's children
     *
     * @param parent
     * @param url
     * @returns {any}
     */
    FuseNavVerticalCollapseComponent.prototype.isUrlInChildren = function (parent, url) {
        if (!parent.children) {
            return false;
        }
        for (var i = 0; i < parent.children.length; i++) {
            if (parent.children[i].children) {
                if (this.isUrlInChildren(parent.children[i], url)) {
                    return true;
                }
            }
            if (parent.children[i].url === url || url.includes(parent.children[i].url)) {
                return true;
            }
        }
        return false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FuseNavVerticalCollapseComponent.prototype, "item", void 0);
    __decorate([
        core_1.HostBinding('class'),
        __metadata("design:type", Object)
    ], FuseNavVerticalCollapseComponent.prototype, "classes", void 0);
    __decorate([
        core_1.HostBinding('class.open'),
        __metadata("design:type", Object)
    ], FuseNavVerticalCollapseComponent.prototype, "isOpen", void 0);
    FuseNavVerticalCollapseComponent = __decorate([
        core_1.Component({
            selector: 'fuse-nav-vertical-collapse',
            template: __webpack_require__("../../../../../src/app/core/components/navigation/vertical/nav-collapse/nav-vertical-collapse.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/navigation/vertical/nav-collapse/nav-vertical-collapse.component.scss")],
            animations: animations_1.fuseAnimations
        }),
        __metadata("design:paramtypes", [navigation_service_1.FuseNavigationService,
            router_1.Router])
    ], FuseNavVerticalCollapseComponent);
    return FuseNavVerticalCollapseComponent;
}());
exports.FuseNavVerticalCollapseComponent = FuseNavVerticalCollapseComponent;


/***/ }),

/***/ "../../../../../src/app/core/components/navigation/vertical/nav-group/nav-vertical-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"group-title\">\n    <span class=\"hint-text\" [translate]=\"item.translate\">{{ item.title }}</span>\n</div>\n\n<div class=\"group-items\">\n    <ng-container *ngFor=\"let item of item.children\">\n        <fuse-nav-vertical-group *ngIf=\"item.type=='group'\" [item]=\"item\"></fuse-nav-vertical-group>\n        <fuse-nav-vertical-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></fuse-nav-vertical-collapse>\n        <fuse-nav-vertical-item *ngIf=\"item.type=='item'\" [item]=\"item\"></fuse-nav-vertical-item>\n    </ng-container>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/vertical/nav-group/nav-vertical-group.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".folded:not(.folded-open) :host > .group-title {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .folded:not(.folded-open) :host > .group-title > span {\n    opacity: 0;\n    transition: opacity 200ms ease; }\n  .folded:not(.folded-open) :host > .group-title:before {\n    content: '';\n    display: block;\n    position: absolute;\n    min-width: 1.6rem;\n    border-top: 2px solid;\n    opacity: 0.2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/vertical/nav-group/nav-vertical-group.component.ts":
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
var FuseNavVerticalGroupComponent = (function () {
    function FuseNavVerticalGroupComponent() {
        this.classes = 'nav-group nav-item';
    }
    FuseNavVerticalGroupComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.HostBinding('class'),
        __metadata("design:type", Object)
    ], FuseNavVerticalGroupComponent.prototype, "classes", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FuseNavVerticalGroupComponent.prototype, "item", void 0);
    FuseNavVerticalGroupComponent = __decorate([
        core_1.Component({
            selector: 'fuse-nav-vertical-group',
            template: __webpack_require__("../../../../../src/app/core/components/navigation/vertical/nav-group/nav-vertical-group.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/navigation/vertical/nav-group/nav-vertical-group.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseNavVerticalGroupComponent);
    return FuseNavVerticalGroupComponent;
}());
exports.FuseNavVerticalGroupComponent = FuseNavVerticalGroupComponent;


/***/ }),

/***/ "../../../../../src/app/core/components/navigation/vertical/nav-item/nav-vertical-item.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"nav-link\" *ngIf=\"item.url\" [routerLink]=\"[item.url]\" routerLinkActive=\"active\"\n   [routerLinkActiveOptions]=\"{exact: item.exactMatch || false}\" matRipple>\n    <mat-icon class=\"nav-link-icon\" *ngIf=\"item.icon\">{{item.icon}}</mat-icon>\n    <span class=\"nav-link-title\" [translate]=\"item.translate\">{{item.title}}</span>\n    <span class=\"nav-link-badge\" *ngIf=\"item.badge\" [translate]=\"item.badge.translate\"\n          [ngStyle]=\"{'background-color': item.badge.bg,'color': item.badge.fg}\">\n        {{item.badge.title}}\n    </span>\n</a>\n\n<span class=\"nav-link\" *ngIf=\"item.function\" (click)=\"item.function()\" matRipple>\n    <mat-icon class=\"nav-link-icon\" *ngIf=\"item.icon\">{{item.icon}}</mat-icon>\n    <span class=\"nav-link-title\" [translate]=\"item.translate\">{{item.title}}</span>\n    <span class=\"nav-link-badge\" *ngIf=\"item.badge\" [translate]=\"item.badge.translate\"\n          [ngStyle]=\"{'background-color': item.badge.bg,'color': item.badge.fg}\">\n        {{item.badge.title}}\n    </span>\n</span>\n"

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/vertical/nav-item/nav-vertical-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".folded:not(.folded-open) :host .nav-link > .nav-link-title,\n.folded:not(.folded-open) :host .nav-link > .nav-link-badge {\n  opacity: 0;\n  transition: opacity 200ms ease; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/navigation/vertical/nav-item/nav-vertical-item.component.ts":
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
var FuseNavVerticalItemComponent = (function () {
    function FuseNavVerticalItemComponent() {
        this.classes = 'nav-item';
    }
    FuseNavVerticalItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.HostBinding('class'),
        __metadata("design:type", Object)
    ], FuseNavVerticalItemComponent.prototype, "classes", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FuseNavVerticalItemComponent.prototype, "item", void 0);
    FuseNavVerticalItemComponent = __decorate([
        core_1.Component({
            selector: 'fuse-nav-vertical-item',
            template: __webpack_require__("../../../../../src/app/core/components/navigation/vertical/nav-item/nav-vertical-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/navigation/vertical/nav-item/nav-vertical-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseNavVerticalItemComponent);
    return FuseNavVerticalItemComponent;
}());
exports.FuseNavVerticalItemComponent = FuseNavVerticalItemComponent;


/***/ }),

/***/ "../../../../../src/app/core/components/search-bar/search-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fuse-search-bar\" [ngClass]=\"{'expanded':!collapsed}\" fxFlex=\"0 1 auto\">\n    <div [ngClass]=\"toolbarColor\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex>\n        <label for=\"fuse-search-bar-input\">\n            <button mat-icon-button class=\"fuse-search-bar-expander\" aria-label=\"Expand Search Bar\" (click)=\"expand()\"\n                    *ngIf=\"collapsed\">\n                <mat-icon class=\"s-24\">search</mat-icon>\n            </button>\n            <!--<span class=\"fuse-search-bar-loader\" fxLayout=\"row\" fxLayoutAlign=\"center center\" *ngIf=\"!collapsed\">\n                <mat-progress-spinner color=\"mat-accent\" mode=\"indeterminate\"></mat-progress-spinner>\n            </span>-->\n        </label>\n\n        <input id=\"fuse-search-bar-input\" class=\"ml-24\" type=\"text\" placeholder=\"Search\" (input)=\"search($event)\" fxFlex>\n\n        <button mat-icon-button class=\"fuse-search-bar-collapser mat-icon-button\" (click)=\"collapse()\"\n                aria-label=\"Collapse Search Bar\">\n            <mat-icon class=\"s-24\">close</mat-icon>\n        </button>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/search-bar/search-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n:host .fuse-search-bar {\n  min-width: 64px;\n  height: 64px;\n  font-size: 13px; }\n  @media (max-width: 959px) {\n    :host .fuse-search-bar {\n      height: 56px; } }\n  :host .fuse-search-bar .fuse-search-bar-expander,\n  :host .fuse-search-bar .fuse-search-bar-collapser {\n    cursor: pointer;\n    padding: 0 20px;\n    margin: 0;\n    width: 64px !important;\n    height: 64px !important;\n    line-height: 64px !important; }\n    @media (max-width: 959px) {\n      :host .fuse-search-bar .fuse-search-bar-expander,\n      :host .fuse-search-bar .fuse-search-bar-collapser {\n        height: 56px !important;\n        line-height: 56px !important; } }\n  :host .fuse-search-bar .fuse-search-bar-loader {\n    width: 64px !important;\n    height: 64px !important;\n    line-height: 64px !important; }\n    @media (max-width: 959px) {\n      :host .fuse-search-bar .fuse-search-bar-loader {\n        height: 56px !important;\n        line-height: 56px !important; } }\n  :host .fuse-search-bar .fuse-search-bar-collapser {\n    display: none; }\n  :host .fuse-search-bar #fuse-search-bar-input {\n    display: none;\n    min-height: 64px;\n    background-color: transparent;\n    font-size: 16px; }\n  :host .fuse-search-bar.expanded {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 10; }\n    :host .fuse-search-bar.expanded #fuse-search-bar-input {\n      display: block; }\n    :host .fuse-search-bar.expanded .fuse-search-bar-collapser {\n      display: block; }\n\n:host body.fuse-search-bar-expanded #toolbar {\n  z-index: 999 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/search-bar/search-bar.component.ts":
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
var config_service_1 = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
var FuseSearchBarComponent = (function () {
    function FuseSearchBarComponent(fuseConfig) {
        var _this = this;
        this.fuseConfig = fuseConfig;
        this.onInput = new core_1.EventEmitter();
        this.collapsed = true;
        this.onSettingsChanged =
            this.fuseConfig.onSettingsChanged
                .subscribe(function (newSettings) {
                _this.toolbarColor = newSettings.colorClasses.toolbar;
            });
    }
    FuseSearchBarComponent.prototype.ngOnInit = function () {
    };
    FuseSearchBarComponent.prototype.collapse = function () {
        this.collapsed = true;
    };
    FuseSearchBarComponent.prototype.expand = function () {
        this.collapsed = false;
    };
    FuseSearchBarComponent.prototype.search = function (event) {
        var value = event.target.value;
        this.onInput.emit(value);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FuseSearchBarComponent.prototype, "onInput", void 0);
    FuseSearchBarComponent = __decorate([
        core_1.Component({
            selector: 'fuse-search-bar',
            template: __webpack_require__("../../../../../src/app/core/components/search-bar/search-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/search-bar/search-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [config_service_1.FuseConfigService])
    ], FuseSearchBarComponent);
    return FuseSearchBarComponent;
}());
exports.FuseSearchBarComponent = FuseSearchBarComponent;


/***/ }),

/***/ "../../../../../src/app/core/components/search-bar/search-bar.module.ts":
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
var search_bar_component_1 = __webpack_require__("../../../../../src/app/core/components/search-bar/search-bar.component.ts");
var FuseSearchBarModule = (function () {
    function FuseSearchBarModule() {
    }
    FuseSearchBarModule = __decorate([
        core_1.NgModule({
            declarations: [
                search_bar_component_1.FuseSearchBarComponent
            ],
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule
            ],
            exports: [
                search_bar_component_1.FuseSearchBarComponent
            ]
        })
    ], FuseSearchBarModule);
    return FuseSearchBarModule;
}());
exports.FuseSearchBarModule = FuseSearchBarModule;


/***/ }),

/***/ "../../../../../src/app/core/components/shortcuts/shortcuts.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"fuse-shortcuts\" #shortcuts>\n\n    <div class=\"shortcuts-mobile-toggle\" *ngIf=\"!mobileShortcutsPanelActive\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\n         fxHide fxShow.lt-md>\n        <button mat-icon-button (click)=\"showMobileShortcutsPanel()\">\n            <mat-icon class=\"amber-600-fg\">star</mat-icon>\n        </button>\n    </div>\n\n    <div class=\"shortcuts\" fxHide fxShow.gt-sm [ngClass]=\"toolbarColor\">\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxFlex=\"0 1 auto\">\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <div class=\"w-40 h-40 p-4\" fxLayout=\"row\" fxLayoutAlign=\"center center\"\n                     *ngFor=\"let shortcutItem of shortcutItems\">\n\n                    <a mat-icon-button matTooltip=\"{{shortcutItem.title}}\" [routerLink]=\"shortcutItem.url\">\n                        <mat-icon *ngIf=\"shortcutItem.icon\">{{shortcutItem.icon}}</mat-icon>\n                        <span *ngIf=\"!shortcutItem.icon\" class=\"h2 secondary-text text-bold\">\n                            {{shortcutItem.title.substr(0, 1).toUpperCase()}}\n                        </span>\n                    </a>\n\n                </div>\n\n                <button mat-icon-button [matMenuTriggerFor]=\"addMenu\" matTooltip=\"Click to add/remove shortcut\"\n                        (menuOpened)=\"onMenuOpen()\">\n                    <mat-icon class=\"amber-600-fg\">star</mat-icon>\n                </button>\n\n            </div>\n\n            <div class=\"shortcuts-mobile-close\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxHide fxShow.lt-md>\n                <button mat-icon-button (click)=\"hideMobileShortcutsPanel()\">\n                    <mat-icon>close</mat-icon>\n                </button>\n            </div>\n\n        </div>\n\n        <mat-menu #addMenu=\"matMenu\" class=\"w-240\">\n\n            <mat-form-field class=\"px-16 w-100-p\" (click)=\"$event.stopPropagation()\" floatPlaceholder=\"never\">\n                <input #searchInput matInput placeholder=\"Search for an app or a page\" (input)=\"search($event)\">\n            </mat-form-field>\n\n            <mat-divider></mat-divider>\n            <mat-nav-list *ngIf=\"!searching\" style=\"max-height: 312px; overflow: auto\" fusePerfectScrollbar>\n\n                <mat-list-item *ngFor=\"let shortcutItem of shortcutItems\"\n                               (click)=\"toggleShortcut($event, shortcutItem)\">\n                    <div class=\"w-100-p\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon mat-list-icon class=\"mr-8\" *ngIf=\"shortcutItem.icon\">{{shortcutItem.icon}}</mat-icon>\n                        <span class=\"h2 w-32 h-32 p-4 mr-8 secondary-text text-bold\" fxLayout=\"row\"\n                              fxLayoutAlign=\"center center\" *ngIf=\"!shortcutItem.icon\">\n                            {{shortcutItem.title.substr(0, 1).toUpperCase()}}\n                        </span>\n                        <p matLine fxFlex>{{shortcutItem.title}}</p>\n                        <mat-icon class=\"ml-8\">star</mat-icon>\n                    </div>\n                </mat-list-item>\n                <mat-list-item *ngIf=\"shortcutItems.length === 0\">\n                    <p>\n                        <small>No shortcuts yet!</small>\n                    </p>\n                </mat-list-item>\n            </mat-nav-list>\n\n            <mat-nav-list *ngIf=\"searching\" style=\"max-height: 312px; overflow: auto\" fusePerfectScrollbar>\n                <mat-list-item *ngFor=\"let navigationItem of filteredNavigationItems\"\n                               (click)=\"toggleShortcut($event, navigationItem)\">\n                    <div class=\"w-100-p\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon mat-list-icon class=\"mr-8\" *ngIf=\"navigationItem.icon\">{{navigationItem.icon}}</mat-icon>\n                        <span class=\"h2 w-32 h-32 p-4 mr-8 secondary-text text-bold\" fxLayout=\"row\"\n                              fxLayoutAlign=\"center center\" *ngIf=\"!navigationItem.icon\">\n                            {{navigationItem.title.substr(0, 1).toUpperCase()}}\n                        </span>\n                        <p matLine fxFlex>{{navigationItem.title}}</p>\n                        <mat-icon class=\"ml-8\" *ngIf=\"isInShortcuts(navigationItem)\">star</mat-icon>\n                    </div>\n                </mat-list-item>\n            </mat-nav-list>\n        </mat-menu>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/components/shortcuts/shortcuts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n@media (max-width: 959px) {\n  :host #fuse-shortcuts.show-mobile-panel {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 99;\n    padding: 0 8px; }\n    :host #fuse-shortcuts.show-mobile-panel .shortcuts {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      height: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/shortcuts/shortcuts.component.ts":
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
var navigation_service_1 = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.service.ts");
var flex_layout_1 = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
var match_media_service_1 = __webpack_require__("../../../../../src/app/core/services/match-media.service.ts");
var config_service_1 = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
var ngx_cookie_service_1 = __webpack_require__("../../../../ngx-cookie-service/index.js");
var FuseShortcutsComponent = (function () {
    function FuseShortcutsComponent(renderer, observableMedia, fuseMatchMedia, fuseNavigationService, fuseConfig, cookieService) {
        var _this = this;
        this.renderer = renderer;
        this.observableMedia = observableMedia;
        this.fuseMatchMedia = fuseMatchMedia;
        this.fuseNavigationService = fuseNavigationService;
        this.fuseConfig = fuseConfig;
        this.cookieService = cookieService;
        this.shortcutItems = [];
        this.searching = false;
        this.mobileShortcutsPanelActive = false;
        this.filteredNavigationItems = this.navigationItems = this.fuseNavigationService.getFlatNavigation();
        this.onSettingsChanged =
            this.fuseConfig.onSettingsChanged
                .subscribe(function (newSettings) {
                _this.toolbarColor = newSettings.colorClasses.toolbar;
            });
    }
    FuseShortcutsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var cookieExists = this.cookieService.check('FUSE2.shortcuts');
        if (cookieExists) {
            this.shortcutItems = JSON.parse(this.cookieService.get('FUSE2.shortcuts'));
        }
        else {
            // User's shortcut items
            this.shortcutItems = [
                {
                    'title': 'Calendar',
                    'type': 'nav-item',
                    'icon': 'today',
                    'url': '/apps/calendar'
                },
                {
                    'title': 'Mail',
                    'type': 'nav-item',
                    'icon': 'email',
                    'url': '/apps/mail'
                },
                {
                    'title': 'Contacts',
                    'type': 'nav-item',
                    'icon': 'account_box',
                    'url': '/apps/contacts'
                },
                {
                    'title': 'To-Do',
                    'type': 'nav-item',
                    'icon': 'check_box',
                    'url': '/apps/todo'
                }
            ];
        }
        this.matchMediaSubscription =
            this.fuseMatchMedia.onMediaChange.subscribe(function () {
                if (_this.observableMedia.isActive('gt-sm')) {
                    _this.hideMobileShortcutsPanel();
                }
            });
    };
    FuseShortcutsComponent.prototype.ngOnDestroy = function () {
        this.matchMediaSubscription.unsubscribe();
    };
    FuseShortcutsComponent.prototype.search = function (event) {
        var value = event.target.value.toLowerCase();
        if (value === '') {
            this.searching = false;
            this.filteredNavigationItems = this.navigationItems;
            return;
        }
        this.searching = true;
        this.filteredNavigationItems = this.navigationItems.filter(function (navigationItem) {
            return navigationItem.title.toLowerCase().includes(value);
        });
    };
    FuseShortcutsComponent.prototype.toggleShortcut = function (event, itemToToggle) {
        event.stopPropagation();
        for (var i = 0; i < this.shortcutItems.length; i++) {
            if (this.shortcutItems[i].url === itemToToggle.url) {
                this.shortcutItems.splice(i, 1);
                // Save to the cookies
                this.cookieService.set('FUSE2.shortcuts', JSON.stringify(this.shortcutItems));
                return;
            }
        }
        this.shortcutItems.push(itemToToggle);
        // Save to the cookies
        this.cookieService.set('FUSE2.shortcuts', JSON.stringify(this.shortcutItems));
    };
    FuseShortcutsComponent.prototype.isInShortcuts = function (navigationItem) {
        return this.shortcutItems.find(function (item) {
            return item.url === navigationItem.url;
        });
    };
    FuseShortcutsComponent.prototype.onMenuOpen = function () {
        var _this = this;
        setTimeout(function () {
            _this.searchInputField.nativeElement.focus();
        });
    };
    FuseShortcutsComponent.prototype.showMobileShortcutsPanel = function () {
        this.mobileShortcutsPanelActive = true;
        this.renderer.addClass(this.shortcutsEl.nativeElement, 'show-mobile-panel');
    };
    FuseShortcutsComponent.prototype.hideMobileShortcutsPanel = function () {
        this.mobileShortcutsPanelActive = false;
        this.renderer.removeClass(this.shortcutsEl.nativeElement, 'show-mobile-panel');
    };
    __decorate([
        core_1.ViewChild('searchInput'),
        __metadata("design:type", Object)
    ], FuseShortcutsComponent.prototype, "searchInputField", void 0);
    __decorate([
        core_1.ViewChild('shortcuts'),
        __metadata("design:type", core_1.ElementRef)
    ], FuseShortcutsComponent.prototype, "shortcutsEl", void 0);
    FuseShortcutsComponent = __decorate([
        core_1.Component({
            selector: 'fuse-shortcuts',
            template: __webpack_require__("../../../../../src/app/core/components/shortcuts/shortcuts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/shortcuts/shortcuts.component.scss")]
        }),
        __metadata("design:paramtypes", [core_1.Renderer2,
            flex_layout_1.ObservableMedia,
            match_media_service_1.FuseMatchMedia,
            navigation_service_1.FuseNavigationService,
            config_service_1.FuseConfigService,
            ngx_cookie_service_1.CookieService])
    ], FuseShortcutsComponent);
    return FuseShortcutsComponent;
}());
exports.FuseShortcutsComponent = FuseShortcutsComponent;


/***/ }),

/***/ "../../../../../src/app/core/components/shortcuts/shortcuts.module.ts":
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
var shortcuts_component_1 = __webpack_require__("../../../../../src/app/core/components/shortcuts/shortcuts.component.ts");
var shared_module_1 = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
var FuseShortcutsModule = (function () {
    function FuseShortcutsModule() {
    }
    FuseShortcutsModule = __decorate([
        core_1.NgModule({
            declarations: [
                shortcuts_component_1.FuseShortcutsComponent
            ],
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule
            ],
            exports: [
                shortcuts_component_1.FuseShortcutsComponent
            ]
        })
    ], FuseShortcutsModule);
    return FuseShortcutsModule;
}());
exports.FuseShortcutsModule = FuseShortcutsModule;


/***/ }),

/***/ "../../../../../src/app/core/components/theme-options/theme-options.component.html":
/***/ (function(module, exports) {

module.exports = "<button #openButton mat-icon-button class=\"open-button mat-primary-bg mat-elevation-z2\" (click)=\"openBar()\">\n    <mat-icon>settings</mat-icon>\n</button>\n\n<div class=\"theme-options-panel-overlay\" #overlay [fxHide]=\"barClosed\" [@fadeInOut]=\"!barClosed\"></div>\n\n<div #panel class=\"theme-options-panel mat-white-bg mat-elevation-z8\">\n\n    <button mat-icon-button class=\"close-button\" (click)=\"closeBar()\">\n        <mat-icon>close</mat-icon>\n    </button>\n\n    <div class=\"theme-options-panel-inner\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\n\n        <h3>Navigation:</h3>\n        <mat-radio-group [(ngModel)]=\"fuseSettings.layout.navigation\" (ngModelChange)=\"onSettingsChange()\"\n                         fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"start start\" fxLayoutWrap>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"top\">Top</mat-radio-button>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"left\">Left</mat-radio-button>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"right\">Right</mat-radio-button>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"none\">None</mat-radio-button>\n        </mat-radio-group>\n\n        <h3>Navigation Fold (for vertical navigation):</h3>\n        <mat-slide-toggle [(ngModel)]=\"fuseSettings.layout.navigationFolded\"\n                          (change)=\"onSettingsChange()\">\n            Folded\n        </mat-slide-toggle>\n\n        <h3 class=\"mt-24\">Toolbar:</h3>\n        <mat-radio-group [(ngModel)]=\"fuseSettings.layout.toolbar\" (ngModelChange)=\"onSettingsChange()\"\n                         fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"start start\" fxLayoutWrap>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"below\">Below</mat-radio-button>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"above\">Above</mat-radio-button>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"none\">None</mat-radio-button>\n        </mat-radio-group>\n\n        <h3 class=\"mt-24\">Footer:</h3>\n        <mat-radio-group [(ngModel)]=\"fuseSettings.layout.footer\" (ngModelChange)=\"onSettingsChange()\"\n                         fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"start start\" fxLayoutWrap>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"below\">Below</mat-radio-button>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"above\">Above</mat-radio-button>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"none\">None</mat-radio-button>\n        </mat-radio-group>\n\n        <h3 class=\"mt-24\">Layout Mode:</h3>\n        <mat-radio-group [(ngModel)]=\"fuseSettings.layout.mode\" (ngModelChange)=\"onSettingsChange()\"\n                         fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"start start\" fxLayoutWrap>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"boxed\">Boxed</mat-radio-button>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"fullwidth\">Fullwidth</mat-radio-button>\n        </mat-radio-group>\n\n        <mat-divider></mat-divider>\n\n        <h3>Colors:</h3>\n        <div class=\"colors\">\n\n            <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <h4 class=\"mr-8\">Toolbar Color</h4>\n                <fuse-material-color-picker [(selectedClass)]=\"fuseSettings.colorClasses.toolbar\"\n                                            (onValueChange)=\"onSettingsChange()\"></fuse-material-color-picker>\n            </div>\n\n            <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <h4 class=\"mr-8\">Navigation Bar Color</h4>\n                <fuse-material-color-picker [(selectedClass)]=\"fuseSettings.colorClasses.navbar\"\n                                            (onValueChange)=\"onSettingsChange()\"></fuse-material-color-picker>\n            </div>\n\n            <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <h4 class=\"mr-8\">Footer Color</h4>\n                <fuse-material-color-picker [(selectedClass)]=\"fuseSettings.colorClasses.footer\"\n                                            (onValueChange)=\"onSettingsChange()\"></fuse-material-color-picker>\n            </div>\n\n        </div>\n\n        <mat-divider></mat-divider>\n\n        <h3>Router Animation:</h3>\n        <mat-form-field class=\"w-100-p\">\n            <mat-select class=\"p-0\" [(ngModel)]=\"fuseSettings.routerAnimation\">\n                <mat-option value=\"none\">\n                    None\n                </mat-option>\n                <mat-option value=\"slideUp\">\n                    Slide up\n                </mat-option>\n                <mat-option value=\"slideDown\">\n                    Slide down\n                </mat-option>\n                <mat-option value=\"slideRight\">\n                    Slide right\n                </mat-option>\n                <mat-option value=\"slideLeft\">\n                    Slide left\n                </mat-option>\n                <mat-option value=\"fadeIn\">\n                    Fade in\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/components/theme-options/theme-options.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n@-webkit-keyframes rotating {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@keyframes rotating {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n:host {\n  position: fixed;\n  display: block;\n  right: 0;\n  top: 160px;\n  z-index: 998; }\n  :host.bar-closed .theme-options-panel {\n    display: none; }\n  :host .theme-options-panel {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 360px;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n    z-index: 999;\n    max-height: calc(100vh - 200px);\n    padding: 24px;\n    overflow: auto; }\n    @media (max-width: 599px) {\n      :host .theme-options-panel {\n        top: -120px;\n        max-height: calc(100vh - 100px);\n        width: 90vw; } }\n    :host .theme-options-panel .close-button {\n      position: absolute;\n      top: 8px;\n      right: 8px; }\n    :host .theme-options-panel h3 {\n      font-size: 14px;\n      font-weight: 500;\n      color: rgba(0, 0, 0, 0.54); }\n    :host .theme-options-panel .mat-divider {\n      display: block !important;\n      width: 100%;\n      margin: 24px 0 16px 0; }\n    :host .theme-options-panel .colors {\n      display: block !important;\n      width: 100%; }\n  :host .theme-options-panel-overlay {\n    position: fixed;\n    display: block;\n    background: transparent;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 998; }\n    @media (max-width: 959px) {\n      :host .theme-options-panel-overlay {\n        background: rgba(0, 0, 0, 0.37); } }\n    :host .theme-options-panel-overlay.hidden {\n      display: none; }\n  :host .mat-list .mat-list-item {\n    font-size: 15px; }\n  :host .mat-divider {\n    margin: 16px; }\n  :host .open-button {\n    position: absolute;\n    top: 0;\n    left: -48px;\n    width: 48px;\n    height: 48px;\n    line-height: 48px;\n    text-align: center;\n    cursor: pointer;\n    border-radius: 0;\n    margin: 0;\n    pointer-events: auto;\n    opacity: .75;\n    z-index: 998; }\n    :host .open-button mat-icon {\n      -webkit-animation: rotating 3s linear infinite;\n              animation: rotating 3s linear infinite; }\n    :host .open-button:hover {\n      opacity: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/theme-options/theme-options.component.ts":
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
var animations_1 = __webpack_require__("../../../animations/esm5/animations.js");
var config_service_1 = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
var animations_2 = __webpack_require__("../../../../../src/app/core/animations.ts");
var navigation_service_1 = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.service.ts");
var FuseThemeOptionsComponent = (function () {
    function FuseThemeOptionsComponent(animationBuilder, fuseConfig, navigationService, renderer) {
        var _this = this;
        this.animationBuilder = animationBuilder;
        this.fuseConfig = fuseConfig;
        this.navigationService = navigationService;
        this.renderer = renderer;
        this.barClosed = true;
        this.onSettingsChanged =
            this.fuseConfig.onSettingsChanged
                .subscribe(function (newSettings) {
                _this.fuseSettings = newSettings;
            });
        // Get the nav model and add customize nav item
        // that opens the bar programmatically
        var navModel = this.navigationService.getNavigationModel();
        navModel.push({
            'id': 'custom-function',
            'title': 'Custom Function',
            'type': 'group',
            'children': [
                {
                    'id': 'customize',
                    'title': 'Customize',
                    'type': 'item',
                    'icon': 'settings',
                    'function': function () {
                        _this.openBar();
                    }
                }
            ]
        });
    }
    FuseThemeOptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.listen(this.overlay.nativeElement, 'click', function () {
            _this.closeBar();
        });
    };
    FuseThemeOptionsComponent.prototype.onSettingsChange = function () {
        this.fuseConfig.setSettings(this.fuseSettings);
    };
    FuseThemeOptionsComponent.prototype.closeBar = function () {
        var _this = this;
        this.player =
            this.animationBuilder
                .build([
                animations_1.style({ transform: 'translate3d(0,0,0)' }),
                animations_1.animate('400ms ease', animations_1.style({ transform: 'translate3d(100%,0,0)' }))
            ]).create(this.panel.nativeElement);
        this.player.play();
        this.player.onDone(function () {
            _this.barClosed = true;
        });
    };
    FuseThemeOptionsComponent.prototype.openBar = function () {
        this.barClosed = false;
        this.player =
            this.animationBuilder
                .build([
                animations_1.style({ transform: 'translate3d(100%,0,0)' }),
                animations_1.animate('400ms ease', animations_1.style({ transform: 'translate3d(0,0,0)' }))
            ]).create(this.panel.nativeElement);
        this.player.play();
    };
    FuseThemeOptionsComponent.prototype.ngOnDestroy = function () {
        this.onSettingsChanged.unsubscribe();
    };
    __decorate([
        core_1.ViewChild('openButton'),
        __metadata("design:type", Object)
    ], FuseThemeOptionsComponent.prototype, "openButton", void 0);
    __decorate([
        core_1.ViewChild('panel'),
        __metadata("design:type", Object)
    ], FuseThemeOptionsComponent.prototype, "panel", void 0);
    __decorate([
        core_1.ViewChild('overlay'),
        __metadata("design:type", core_1.ElementRef)
    ], FuseThemeOptionsComponent.prototype, "overlay", void 0);
    __decorate([
        core_1.HostBinding('class.bar-closed'),
        __metadata("design:type", Boolean)
    ], FuseThemeOptionsComponent.prototype, "barClosed", void 0);
    FuseThemeOptionsComponent = __decorate([
        core_1.Component({
            selector: 'fuse-theme-options',
            template: __webpack_require__("../../../../../src/app/core/components/theme-options/theme-options.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/theme-options/theme-options.component.scss")],
            animations: animations_2.fuseAnimations
        }),
        __metadata("design:paramtypes", [animations_1.AnimationBuilder,
            config_service_1.FuseConfigService,
            navigation_service_1.FuseNavigationService,
            core_1.Renderer2])
    ], FuseThemeOptionsComponent);
    return FuseThemeOptionsComponent;
}());
exports.FuseThemeOptionsComponent = FuseThemeOptionsComponent;


/***/ }),

/***/ "../../../../../src/app/core/directives/fuse-if-on-dom/fuse-if-on-dom.directive.ts":
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
var FuseIfOnDomDirective = (function () {
    function FuseIfOnDomDirective(templateRef, viewContainer, element) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.element = element;
        this.isCreated = false;
    }
    FuseIfOnDomDirective.prototype.ngAfterContentChecked = function () {
        var _this = this;
        if (document.body.contains(this.element.nativeElement) && !this.isCreated) {
            setTimeout(function () {
                _this.viewContainer.createEmbeddedView(_this.templateRef);
            }, 300);
            this.isCreated = true;
        }
        else if (this.isCreated && !document.body.contains(this.element.nativeElement)) {
            this.viewContainer.clear();
            this.isCreated = false;
        }
    };
    FuseIfOnDomDirective = __decorate([
        core_1.Directive({
            selector: '[fuseIfOnDom]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef,
            core_1.ViewContainerRef,
            core_1.ElementRef])
    ], FuseIfOnDomDirective);
    return FuseIfOnDomDirective;
}());
exports.FuseIfOnDomDirective = FuseIfOnDomDirective;


/***/ }),

/***/ "../../../../../src/app/core/directives/fuse-mat-sidenav-helper/fuse-mat-sidenav-helper.directive.ts":
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
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var flex_layout_1 = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
var match_media_service_1 = __webpack_require__("../../../../../src/app/core/services/match-media.service.ts");
var fuse_mat_sidenav_helper_service_1 = __webpack_require__("../../../../../src/app/core/directives/fuse-mat-sidenav-helper/fuse-mat-sidenav-helper.service.ts");
var FuseMatSidenavHelperDirective = (function () {
    function FuseMatSidenavHelperDirective(fuseMatSidenavService, fuseMatchMedia, observableMedia, matSidenav) {
        this.fuseMatSidenavService = fuseMatSidenavService;
        this.fuseMatchMedia = fuseMatchMedia;
        this.observableMedia = observableMedia;
        this.matSidenav = matSidenav;
        this.isLockedOpen = true;
    }
    FuseMatSidenavHelperDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.fuseMatSidenavService.setSidenav(this.id, this.matSidenav);
        if (this.observableMedia.isActive(this.matIsLockedOpenBreakpoint)) {
            this.isLockedOpen = true;
            this.matSidenav.mode = 'side';
            this.matSidenav.toggle(true);
        }
        else {
            this.isLockedOpen = false;
            this.matSidenav.mode = 'over';
            this.matSidenav.toggle(false);
        }
        this.matchMediaSubscription = this.fuseMatchMedia.onMediaChange.subscribe(function () {
            if (_this.observableMedia.isActive(_this.matIsLockedOpenBreakpoint)) {
                _this.isLockedOpen = true;
                _this.matSidenav.mode = 'side';
                _this.matSidenav.toggle(true);
            }
            else {
                _this.isLockedOpen = false;
                _this.matSidenav.mode = 'over';
                _this.matSidenav.toggle(false);
            }
        });
    };
    FuseMatSidenavHelperDirective.prototype.ngOnDestroy = function () {
        this.matchMediaSubscription.unsubscribe();
    };
    __decorate([
        core_1.HostBinding('class.mat-is-locked-open'),
        __metadata("design:type", Object)
    ], FuseMatSidenavHelperDirective.prototype, "isLockedOpen", void 0);
    __decorate([
        core_1.Input('fuseMatSidenavHelper'),
        __metadata("design:type", String)
    ], FuseMatSidenavHelperDirective.prototype, "id", void 0);
    __decorate([
        core_1.Input('mat-is-locked-open'),
        __metadata("design:type", String)
    ], FuseMatSidenavHelperDirective.prototype, "matIsLockedOpenBreakpoint", void 0);
    FuseMatSidenavHelperDirective = __decorate([
        core_1.Directive({
            selector: '[fuseMatSidenavHelper]'
        }),
        __metadata("design:paramtypes", [fuse_mat_sidenav_helper_service_1.FuseMatSidenavHelperService,
            match_media_service_1.FuseMatchMedia,
            flex_layout_1.ObservableMedia,
            material_1.MatSidenav])
    ], FuseMatSidenavHelperDirective);
    return FuseMatSidenavHelperDirective;
}());
exports.FuseMatSidenavHelperDirective = FuseMatSidenavHelperDirective;
var FuseMatSidenavTogglerDirective = (function () {
    function FuseMatSidenavTogglerDirective(fuseMatSidenavService) {
        this.fuseMatSidenavService = fuseMatSidenavService;
    }
    FuseMatSidenavTogglerDirective.prototype.onClick = function () {
        this.fuseMatSidenavService.getSidenav(this.id).toggle();
    };
    __decorate([
        core_1.Input('fuseMatSidenavToggler'),
        __metadata("design:type", Object)
    ], FuseMatSidenavTogglerDirective.prototype, "id", void 0);
    __decorate([
        core_1.HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuseMatSidenavTogglerDirective.prototype, "onClick", null);
    FuseMatSidenavTogglerDirective = __decorate([
        core_1.Directive({
            selector: '[fuseMatSidenavToggler]'
        }),
        __metadata("design:paramtypes", [fuse_mat_sidenav_helper_service_1.FuseMatSidenavHelperService])
    ], FuseMatSidenavTogglerDirective);
    return FuseMatSidenavTogglerDirective;
}());
exports.FuseMatSidenavTogglerDirective = FuseMatSidenavTogglerDirective;


/***/ }),

/***/ "../../../../../src/app/core/directives/fuse-mat-sidenav-helper/fuse-mat-sidenav-helper.service.ts":
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
var FuseMatSidenavHelperService = (function () {
    function FuseMatSidenavHelperService() {
        this.sidenavInstances = [];
    }
    FuseMatSidenavHelperService.prototype.setSidenav = function (id, instance) {
        this.sidenavInstances[id] = instance;
    };
    FuseMatSidenavHelperService.prototype.getSidenav = function (id) {
        return this.sidenavInstances[id];
    };
    FuseMatSidenavHelperService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FuseMatSidenavHelperService);
    return FuseMatSidenavHelperService;
}());
exports.FuseMatSidenavHelperService = FuseMatSidenavHelperService;


/***/ }),

/***/ "../../../../../src/app/core/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive.ts":
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
var config_service_1 = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
var platform_1 = __webpack_require__("../../../cdk/esm5/platform.es5.js");
var perfect_scrollbar_1 = __webpack_require__("../../../../perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var FusePerfectScrollbarDirective = (function () {
    function FusePerfectScrollbarDirective(element, fuseConfig, platform) {
        var _this = this;
        this.element = element;
        this.fuseConfig = fuseConfig;
        this.platform = platform;
        this.isDisableCustomScrollbars = false;
        this.isMobile = false;
        this.isInitialized = true;
        this.onSettingsChanged =
            this.fuseConfig.onSettingsChanged
                .subscribe(function (settings) {
                _this.isDisableCustomScrollbars = !settings.customScrollbars;
            });
        if (this.platform.ANDROID || this.platform.IOS) {
            this.isMobile = true;
        }
    }
    FusePerfectScrollbarDirective.prototype.ngAfterViewInit = function () {
        if (this.isMobile || this.isDisableCustomScrollbars) {
            this.isInitialized = false;
            return;
        }
        // Initialize the perfect-scrollbar
        this.ps = new perfect_scrollbar_1.default(this.element.nativeElement, {
            wheelPropagation: true
        });
    };
    FusePerfectScrollbarDirective.prototype.ngOnDestroy = function () {
        if (!this.isInitialized || !this.ps) {
            return;
        }
        this.onSettingsChanged.unsubscribe();
        // Destroy the perfect-scrollbar
        this.ps.destroy();
    };
    FusePerfectScrollbarDirective.prototype.documentClick = function (event) {
        if (!this.isInitialized || !this.ps) {
            return;
        }
        // Update the scrollbar on document click..
        // This isn't the most elegant solution but there is no other way
        // of knowing when the contents of the scrollable container changes.
        // Therefore, we update scrollbars on every document click.
        this.ps.update();
    };
    FusePerfectScrollbarDirective.prototype.update = function () {
        if (!this.isInitialized) {
            return;
        }
        // Update the perfect-scrollbar
        this.ps.update();
    };
    FusePerfectScrollbarDirective.prototype.destroy = function () {
        this.ngOnDestroy();
    };
    FusePerfectScrollbarDirective.prototype.scrollToX = function (x, speed) {
        this.animateScrolling('scrollLeft', x, speed);
    };
    FusePerfectScrollbarDirective.prototype.scrollToY = function (y, speed) {
        this.animateScrolling('scrollTop', y, speed);
    };
    FusePerfectScrollbarDirective.prototype.scrollToTop = function (offset, speed) {
        this.animateScrolling('scrollTop', (offset || 0), speed);
    };
    FusePerfectScrollbarDirective.prototype.scrollToLeft = function (offset, speed) {
        this.animateScrolling('scrollLeft', (offset || 0), speed);
    };
    FusePerfectScrollbarDirective.prototype.scrollToRight = function (offset, speed) {
        var width = this.element.nativeElement.scrollWidth;
        this.animateScrolling('scrollLeft', width - (offset || 0), speed);
    };
    FusePerfectScrollbarDirective.prototype.scrollToBottom = function (offset, speed) {
        var height = this.element.nativeElement.scrollHeight;
        this.animateScrolling('scrollTop', height - (offset || 0), speed);
    };
    FusePerfectScrollbarDirective.prototype.animateScrolling = function (target, value, speed) {
        var _this = this;
        if (!speed) {
            this.element.nativeElement[target] = value;
            // PS has weird event sending order, this is a workaround for that
            this.update();
            this.update();
        }
        else if (value !== this.element.nativeElement[target]) {
            var newValue_1 = 0;
            var scrollCount_1 = 0;
            var oldTimestamp_1 = performance.now();
            var oldValue_1 = this.element.nativeElement[target];
            var cosParameter_1 = (oldValue_1 - value) / 2;
            var step_1 = function (newTimestamp) {
                scrollCount_1 += Math.PI / (speed / (newTimestamp - oldTimestamp_1));
                newValue_1 = Math.round(value + cosParameter_1 + cosParameter_1 * Math.cos(scrollCount_1));
                // Only continue animation if scroll position has not changed
                if (_this.element.nativeElement[target] === oldValue_1) {
                    if (scrollCount_1 >= Math.PI) {
                        _this.element.nativeElement[target] = value;
                        // PS has weird event sending order, this is a workaround for that
                        _this.update();
                        _this.update();
                    }
                    else {
                        _this.element.nativeElement[target] = oldValue_1 = newValue_1;
                        oldTimestamp_1 = newTimestamp;
                        window.requestAnimationFrame(step_1);
                    }
                }
            };
            window.requestAnimationFrame(step_1);
        }
    };
    __decorate([
        core_1.HostListener('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], FusePerfectScrollbarDirective.prototype, "documentClick", null);
    FusePerfectScrollbarDirective = __decorate([
        core_1.Directive({
            selector: '[fusePerfectScrollbar]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            config_service_1.FuseConfigService,
            platform_1.Platform])
    ], FusePerfectScrollbarDirective);
    return FusePerfectScrollbarDirective;
}());
exports.FusePerfectScrollbarDirective = FusePerfectScrollbarDirective;


/***/ }),

/***/ "../../../../../src/app/core/fuseUtils.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FuseUtils = (function () {
    function FuseUtils() {
    }
    FuseUtils.filterArrayByString = function (mainArr, searchText) {
        var _this = this;
        if (searchText === '') {
            return mainArr;
        }
        searchText = searchText.toLowerCase();
        return mainArr.filter(function (itemObj) {
            return _this.searchInObj(itemObj, searchText);
        });
    };
    FuseUtils.searchInObj = function (itemObj, searchText) {
        for (var prop in itemObj) {
            if (!itemObj.hasOwnProperty(prop)) {
                continue;
            }
            var value = itemObj[prop];
            if (typeof value === 'string') {
                if (this.searchInString(value, searchText)) {
                    return true;
                }
            }
            else if (Array.isArray(value)) {
                if (this.searchInArray(value, searchText)) {
                    return true;
                }
            }
            if (typeof value === 'object') {
                if (this.searchInObj(value, searchText)) {
                    return true;
                }
            }
        }
    };
    FuseUtils.searchInArray = function (arr, searchText) {
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var value = arr_1[_i];
            if (typeof value === 'string') {
                if (this.searchInString(value, searchText)) {
                    return true;
                }
            }
            if (typeof value === 'object') {
                if (this.searchInObj(value, searchText)) {
                    return true;
                }
            }
        }
    };
    FuseUtils.searchInString = function (value, searchText) {
        return value.toLowerCase().includes(searchText);
    };
    FuseUtils.generateGUID = function () {
        function S4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return S4() + S4();
    };
    FuseUtils.toggleInArray = function (item, array) {
        if (array.indexOf(item) === -1) {
            array.push(item);
        }
        else {
            array.splice(array.indexOf(item), 1);
        }
    };
    FuseUtils.handleize = function (text) {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/[^\w\-]+/g, '') // Remove all non-word chars
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, ''); // Trim - from end of text
    };
    return FuseUtils;
}());
exports.FuseUtils = FuseUtils;


/***/ }),

/***/ "../../../../../src/app/core/matColors.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var black87 = 'rgba(black, 0.87)';
var white87 = 'rgba(white, 0.87)';
var black12 = 'rgba(black, 0.12)';
var white12 = 'rgba(white, 0.12)';
var black6 = 'rgba(black, 0.06)';
var white6 = 'rgba(white, 0.06)';
var matColors = {
    'red': {
        50: '#ffebee',
        100: '#ffcdd2',
        200: '#ef9a9a',
        300: '#e57373',
        400: '#ef5350',
        500: '#f44336',
        600: '#e53935',
        700: '#d32f2f',
        800: '#c62828',
        900: '#b71c1c',
        A100: '#ff8a80',
        A200: '#ff5252',
        A400: '#ff1744',
        A700: '#d50000',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: white87,
            900: white87,
            A100: black87,
            A200: 'white',
            A400: 'white',
            A700: 'white'
        }
    },
    'pink': {
        50: '#fce4ec',
        100: '#f8bbd0',
        200: '#f48fb1',
        300: '#f06292',
        400: '#ec407a',
        500: '#e91e63',
        600: '#d81b60',
        700: '#c2185b',
        800: '#ad1457',
        900: '#880e4f',
        A100: '#ff80ab',
        A200: '#ff4081',
        A400: '#f50057',
        A700: '#c51162',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: 'white',
            A400: 'white',
            A700: 'white'
        }
    },
    'purple': {
        50: '#f3e5f5',
        100: '#e1bee7',
        200: '#ce93d8',
        300: '#ba68c8',
        400: '#ab47bc',
        500: '#9c27b0',
        600: '#8e24aa',
        700: '#7b1fa2',
        800: '#6a1b9a',
        900: '#4a148c',
        A100: '#ea80fc',
        A200: '#e040fb',
        A400: '#d500f9',
        A700: '#aa00ff',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: 'white',
            400: 'white',
            500: white87,
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: 'white',
            A400: 'white',
            A700: 'white'
        }
    },
    'deep-purple': {
        50: '#ede7f6',
        100: '#d1c4e9',
        200: '#b39ddb',
        300: '#9575cd',
        400: '#7e57c2',
        500: '#673ab7',
        600: '#5e35b1',
        700: '#512da8',
        800: '#4527a0',
        900: '#311b92',
        A100: '#b388ff',
        A200: '#7c4dff',
        A400: '#651fff',
        A700: '#6200ea',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: 'white',
            400: 'white',
            500: white87,
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: 'white',
            A400: white87,
            A700: white87
        }
    },
    'indigo': {
        50: '#e8eaf6',
        100: '#c5cae9',
        200: '#9fa8da',
        300: '#7986cb',
        400: '#5c6bc0',
        500: '#3f51b5',
        600: '#3949ab',
        700: '#303f9f',
        800: '#283593',
        900: '#1a237e',
        A100: '#8c9eff',
        A200: '#536dfe',
        A400: '#3d5afe',
        A700: '#304ffe',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: 'white',
            400: 'white',
            500: white87,
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: 'white',
            A400: 'white',
            A700: white87
        }
    },
    'blue': {
        50: '#e3f2fd',
        100: '#bbdefb',
        200: '#90caf9',
        300: '#64b5f6',
        400: '#42a5f5',
        500: '#2196f3',
        600: '#1e88e5',
        700: '#1976d2',
        800: '#1565c0',
        900: '#0d47a1',
        A100: '#82b1ff',
        A200: '#448aff',
        A400: '#2979ff',
        A700: '#2962ff',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: white87,
            900: white87,
            A100: black87,
            A200: 'white',
            A400: 'white',
            A700: 'white'
        }
    },
    'light-blue': {
        50: '#e1f5fe',
        100: '#b3e5fc',
        200: '#81d4fa',
        300: '#4fc3f7',
        400: '#29b6f6',
        500: '#03a9f4',
        600: '#039be5',
        700: '#0288d1',
        800: '#0277bd',
        900: '#01579b',
        A100: '#80d8ff',
        A200: '#40c4ff',
        A400: '#00b0ff',
        A700: '#0091ea',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: 'white',
            900: white87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: 'white'
        }
    },
    'cyan': {
        50: '#e0f7fa',
        100: '#b2ebf2',
        200: '#80deea',
        300: '#4dd0e1',
        400: '#26c6da',
        500: '#00bcd4',
        600: '#00acc1',
        700: '#0097a7',
        800: '#00838f',
        900: '#006064',
        A100: '#84ffff',
        A200: '#18ffff',
        A400: '#00e5ff',
        A700: '#00b8d4',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: 'white',
            900: white87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'teal': {
        50: '#e0f2f1',
        100: '#b2dfdb',
        200: '#80cbc4',
        300: '#4db6ac',
        400: '#26a69a',
        500: '#009688',
        600: '#00897b',
        700: '#00796b',
        800: '#00695c',
        900: '#004d40',
        A100: '#a7ffeb',
        A200: '#64ffda',
        A400: '#1de9b6',
        A700: '#00bfa5',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: white87,
            900: white87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'green': {
        50: '#e8f5e9',
        100: '#c8e6c9',
        200: '#a5d6a7',
        300: '#81c784',
        400: '#66bb6a',
        500: '#4caf50',
        600: '#43a047',
        700: '#388e3c',
        800: '#2e7d32',
        900: '#1b5e20',
        A100: '#b9f6ca',
        A200: '#69f0ae',
        A400: '#00e676',
        A700: '#00c853',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: white87,
            900: white87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'light-green': {
        50: '#f1f8e9',
        100: '#dcedc8',
        200: '#c5e1a5',
        300: '#aed581',
        400: '#9ccc65',
        500: '#8bc34a',
        600: '#7cb342',
        700: '#689f38',
        800: '#558b2f',
        900: '#33691e',
        A100: '#ccff90',
        A200: '#b2ff59',
        A400: '#76ff03',
        A700: '#64dd17',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: black87,
            600: black87,
            700: black87,
            800: 'white',
            900: 'white',
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'lime': {
        50: '#f9fbe7',
        100: '#f0f4c3',
        200: '#e6ee9c',
        300: '#dce775',
        400: '#d4e157',
        500: '#cddc39',
        600: '#c0ca33',
        700: '#afb42b',
        800: '#9e9d24',
        900: '#827717',
        A100: '#f4ff81',
        A200: '#eeff41',
        A400: '#c6ff00',
        A700: '#aeea00',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: black87,
            600: black87,
            700: black87,
            800: black87,
            900: 'white',
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'yellow': {
        50: '#fffde7',
        100: '#fff9c4',
        200: '#fff59d',
        300: '#fff176',
        400: '#ffee58',
        500: '#ffeb3b',
        600: '#fdd835',
        700: '#fbc02d',
        800: '#f9a825',
        900: '#f57f17',
        A100: '#ffff8d',
        A200: '#ffff00',
        A400: '#ffea00',
        A700: '#ffd600',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: black87,
            600: black87,
            700: black87,
            800: black87,
            900: black87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'amber': {
        50: '#fff8e1',
        100: '#ffecb3',
        200: '#ffe082',
        300: '#ffd54f',
        400: '#ffca28',
        500: '#ffc107',
        600: '#ffb300',
        700: '#ffa000',
        800: '#ff8f00',
        900: '#ff6f00',
        A100: '#ffe57f',
        A200: '#ffd740',
        A400: '#ffc400',
        A700: '#ffab00',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: black87,
            600: black87,
            700: black87,
            800: black87,
            900: black87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'orange': {
        50: '#fff3e0',
        100: '#ffe0b2',
        200: '#ffcc80',
        300: '#ffb74d',
        400: '#ffa726',
        500: '#ff9800',
        600: '#fb8c00',
        700: '#f57c00',
        800: '#ef6c00',
        900: '#e65100',
        A100: '#ffd180',
        A200: '#ffab40',
        A400: '#ff9100',
        A700: '#ff6d00',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: black87,
            600: black87,
            700: black87,
            800: 'white',
            900: 'white',
            A100: black87,
            A200: black87,
            A400: black87,
            A700: 'black'
        }
    },
    'deep-orange': {
        50: '#fbe9e7',
        100: '#ffccbc',
        200: '#ffab91',
        300: '#ff8a65',
        400: '#ff7043',
        500: '#ff5722',
        600: '#f4511e',
        700: '#e64a19',
        800: '#d84315',
        900: '#bf360c',
        A100: '#ff9e80',
        A200: '#ff6e40',
        A400: '#ff3d00',
        A700: '#dd2c00',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: 'white',
            900: 'white',
            A100: black87,
            A200: black87,
            A400: 'white',
            A700: 'white'
        }
    },
    'brown': {
        50: '#efebe9',
        100: '#d7ccc8',
        200: '#bcaaa4',
        300: '#a1887f',
        400: '#8d6e63',
        500: '#795548',
        600: '#6d4c41',
        700: '#5d4037',
        800: '#4e342e',
        900: '#3e2723',
        A100: '#d7ccc8',
        A200: '#bcaaa4',
        A400: '#8d6e63',
        A700: '#5d4037',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: 'white',
            400: 'white',
            500: white87,
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: black87,
            A400: 'white',
            A700: white87
        }
    },
    'grey': {
        0: '#ffffff',
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        1000: '#000000',
        A100: '#ffffff',
        A200: '#eeeeee',
        A400: '#bdbdbd',
        A700: '#616161',
        contrast: {
            0: black87,
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: black87,
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            1000: white87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: white87
        }
    },
    'blue-grey': {
        50: '#eceff1',
        100: '#cfd8dc',
        200: '#b0bec5',
        300: '#90a4ae',
        400: '#78909c',
        500: '#607d8b',
        600: '#546e7a',
        700: '#455a64',
        800: '#37474f',
        900: '#263238',
        A100: '#cfd8dc',
        A200: '#b0bec5',
        A400: '#78909c',
        A700: '#455a64',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: 'white',
            500: 'white',
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: black87,
            A400: 'white',
            A700: white87
        }
    },
    'fuse-dark': {
        50: '#ECECEE',
        100: '#C5C6CB',
        200: '#9EA1A9',
        300: '#7D818C',
        400: '#5C616F',
        500: '#3C4252',
        600: '#353A48',
        700: '#2D323E',
        800: '#262933',
        900: '#1E2129',
        A100: '#C5C6CB',
        A200: '#9EA1A9',
        A400: '#5C616F',
        A700: '#2D323E',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: 'white',
            400: 'white',
            500: white87,
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: white87,
            A400: white87,
            A700: white87
        }
    },
    white: {
        500: 'white',
        contrast: {
            500: black87
        }
    },
    black: {
        500: 'black',
        contrast: {
            500: 'white'
        }
    }
};
// tslint:disable-next-line
var matPresetColors = [
    '#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350', '#f44336', '#e53935', '#d32f2f', '#c62828', '#b71c1c', '#ff8a80', '#ff5252', '#ff1744', '#d50000', '#fce4ec', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63', '#d81b60', '#c2185b', '#ad1457', '#880e4f', '#ff80ab', '#ff4081', '#f50057', '#c51162', '#f3e5f5', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2', '#6a1b9a', '#4a148c', '#ea80fc', '#e040fb', '#d500f9', '#aa00ff', '#ede7f6', '#d1c4e9', '#b39ddb', '#9575cd', '#7e57c2', '#673ab7', '#5e35b1', '#512da8', '#4527a0', '#311b92', '#b388ff', '#7c4dff', '#651fff', '#6200ea', '#e8eaf6', '#c5cae9', '#9fa8da', '#7986cb', '#5c6bc0', '#3f51b5', '#3949ab', '#303f9f', '#283593', '#1a237e', '#8c9eff', '#536dfe', '#3d5afe', '#304ffe', '#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1', '#82b1ff', '#448aff', '#2979ff', '#2962ff', '#e1f5fe', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5', '#0288d1', '#0277bd', '#01579b', '#80d8ff', '#40c4ff', '#00b0ff', '#0091ea', '#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1', '#0097a7', '#00838f', '#006064', '#84ffff', '#18ffff', '#00e5ff', '#00b8d4', '#e0f2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b', '#00695c', '#004d40', '#a7ffeb', '#64ffda', '#1de9b6', '#00bfa5', '#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#43a047', '#388e3c', '#2e7d32', '#1b5e20', '#b9f6ca', '#69f0ae', '#00e676', '#00c853', '#f1f8e9', '#dcedc8', '#c5e1a5', '#aed581', '#9ccc65', '#8bc34a', '#7cb342', '#689f38', '#558b2f', '#33691e', '#ccff90', '#b2ff59', '#76ff03', '#64dd17', '#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#cddc39', '#c0ca33', '#afb42b', '#9e9d24', '#827717', '#f4ff81', '#eeff41', '#c6ff00', '#aeea00', '#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835', '#fbc02d', '#f9a825', '#f57f17', '#ffff8d', '#ffff00', '#ffea00', '#ffd600', '#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00', '#ff6f00', '#ffe57f', '#ffd740', '#ffc400', '#ffab00', '#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#fb8c00', '#f57c00', '#ef6c00', '#e65100', '#ffd180', '#ffab40', '#ff9100', '#ff6d00', '#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043', '#ff5722', '#f4511e', '#e64a19', '#d84315', '#bf360c', '#ff9e80', '#ff6e40', '#ff3d00', '#dd2c00', '#efebe9', '#d7ccc8', '#bcaaa4', '#a1887f', '#8d6e63', '#795548', '#6d4c41', '#5d4037', '#4e342e', '#3e2723', '#d7ccc8', '#bcaaa4', '#8d6e63', '#5d4037', '#fafafa', '#f5f5f5', '#eeeeee', '#e0e0e0', '#bdbdbd', '#9e9e9e', '#757575', '#616161', '#424242', '#212121', '#ffffff', '#eeeeee', '#bdbdbd', '#616161', '#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c', '#607d8b', '#546e7a', '#455a64', '#37474f', '#263238', '#cfd8dc', '#b0bec5', '#78909c', '#455a64'
];
/**
 // Color palettes from the Material Design spec.
 // See https://www.google.com/design/spec/style/color.html
 */
var MatColors = (function () {
    function MatColors() {
    }
    MatColors.getColor = function (colorName) {
        if (matColors[colorName]) {
            return matColors[colorName];
        }
        return false;
    };
    MatColors.all = matColors;
    MatColors.presets = matPresetColors;
    return MatColors;
}());
exports.MatColors = MatColors;


/***/ }),

/***/ "../../../../../src/app/core/modules/material.module.ts":
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
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var table_1 = __webpack_require__("../../../cdk/esm5/table.es5.js");
var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            imports: [
                material_1.MatAutocompleteModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatExpansionModule,
                material_1.MatFormFieldModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatStepperModule,
                material_1.MatSortModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatTooltipModule,
                table_1.CdkTableModule
            ],
            exports: [
                material_1.MatAutocompleteModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatExpansionModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatStepperModule,
                material_1.MatSortModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatTooltipModule,
                table_1.CdkTableModule
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;


/***/ }),

/***/ "../../../../../src/app/core/modules/shared.module.ts":
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
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var material_module_1 = __webpack_require__("../../../../../src/app/core/modules/material.module.ts");
var flex_layout_1 = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
var ngx_color_picker_1 = __webpack_require__("../../../../ngx-color-picker/dist/ngx-color-picker.es5.js");
var ngx_dnd_1 = __webpack_require__("../../../../@swimlane/ngx-dnd/release/index.js");
var ngx_datatable_1 = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
var fuse_mat_sidenav_helper_directive_1 = __webpack_require__("../../../../../src/app/core/directives/fuse-mat-sidenav-helper/fuse-mat-sidenav-helper.directive.ts");
var fuse_mat_sidenav_helper_service_1 = __webpack_require__("../../../../../src/app/core/directives/fuse-mat-sidenav-helper/fuse-mat-sidenav-helper.service.ts");
var pipes_module_1 = __webpack_require__("../../../../../src/app/core/pipes/pipes.module.ts");
var confirm_dialog_component_1 = __webpack_require__("../../../../../src/app/core/components/confirm-dialog/confirm-dialog.component.ts");
var countdown_component_1 = __webpack_require__("../../../../../src/app/core/components/countdown/countdown.component.ts");
var match_media_service_1 = __webpack_require__("../../../../../src/app/core/services/match-media.service.ts");
var navbar_vertical_service_1 = __webpack_require__("../../../../../src/app/main/navbar/vertical/navbar-vertical.service.ts");
var highlight_component_1 = __webpack_require__("../../../../../src/app/core/components/highlight/highlight.component.ts");
var fuse_perfect_scrollbar_directive_1 = __webpack_require__("../../../../../src/app/core/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive.ts");
var fuse_if_on_dom_directive_1 = __webpack_require__("../../../../../src/app/core/directives/fuse-if-on-dom/fuse-if-on-dom.directive.ts");
var material_color_picker_component_1 = __webpack_require__("../../../../../src/app/core/components/material-color-picker/material-color-picker.component.ts");
var translation_loader_service_1 = __webpack_require__("../../../../../src/app/core/services/translation-loader.service.ts");
var ngx_cookie_service_1 = __webpack_require__("../../../../ngx-cookie-service/index.js");
var core_2 = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                fuse_mat_sidenav_helper_directive_1.FuseMatSidenavHelperDirective,
                fuse_mat_sidenav_helper_directive_1.FuseMatSidenavTogglerDirective,
                confirm_dialog_component_1.FuseConfirmDialogComponent,
                countdown_component_1.FuseCountdownComponent,
                highlight_component_1.FuseHighlightComponent,
                fuse_if_on_dom_directive_1.FuseIfOnDomDirective,
                fuse_perfect_scrollbar_directive_1.FusePerfectScrollbarDirective,
                material_color_picker_component_1.FuseMaterialColorPickerComponent
            ],
            imports: [
                flex_layout_1.FlexLayoutModule,
                material_module_1.MaterialModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                pipes_module_1.FusePipesModule,
                forms_1.ReactiveFormsModule,
                ngx_color_picker_1.ColorPickerModule,
                ngx_dnd_1.NgxDnDModule,
                ngx_datatable_1.NgxDatatableModule
            ],
            exports: [
                flex_layout_1.FlexLayoutModule,
                material_module_1.MaterialModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                fuse_mat_sidenav_helper_directive_1.FuseMatSidenavHelperDirective,
                fuse_mat_sidenav_helper_directive_1.FuseMatSidenavTogglerDirective,
                pipes_module_1.FusePipesModule,
                countdown_component_1.FuseCountdownComponent,
                highlight_component_1.FuseHighlightComponent,
                fuse_perfect_scrollbar_directive_1.FusePerfectScrollbarDirective,
                forms_1.ReactiveFormsModule,
                ngx_color_picker_1.ColorPickerModule,
                ngx_dnd_1.NgxDnDModule,
                ngx_datatable_1.NgxDatatableModule,
                fuse_if_on_dom_directive_1.FuseIfOnDomDirective,
                material_color_picker_component_1.FuseMaterialColorPickerComponent,
                core_2.TranslateModule
            ],
            entryComponents: [
                confirm_dialog_component_1.FuseConfirmDialogComponent
            ],
            providers: [
                ngx_cookie_service_1.CookieService,
                match_media_service_1.FuseMatchMedia,
                navbar_vertical_service_1.FuseNavbarVerticalService,
                fuse_mat_sidenav_helper_service_1.FuseMatSidenavHelperService,
                translation_loader_service_1.FuseTranslationLoaderService
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ }),

/***/ "../../../../../src/app/core/pipes/camelCaseToDash.pipe.ts":
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
var CamelCaseToDashPipe = (function () {
    function CamelCaseToDashPipe() {
    }
    CamelCaseToDashPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = []; }
        return value ? String(value).replace(/([A-Z])/g, function (g) { return "-" + g[0].toLowerCase(); }) : '';
    };
    CamelCaseToDashPipe = __decorate([
        core_1.Pipe({ name: 'camelCaseToDash' })
    ], CamelCaseToDashPipe);
    return CamelCaseToDashPipe;
}());
exports.CamelCaseToDashPipe = CamelCaseToDashPipe;


/***/ }),

/***/ "../../../../../src/app/core/pipes/filter.pipe.ts":
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
var fuseUtils_1 = __webpack_require__("../../../../../src/app/core/fuseUtils.ts");
var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (mainArr, searchText, property) {
        return fuseUtils_1.FuseUtils.filterArrayByString(mainArr, searchText);
    };
    FilterPipe = __decorate([
        core_1.Pipe({ name: 'filter' })
    ], FilterPipe);
    return FilterPipe;
}());
exports.FilterPipe = FilterPipe;


/***/ }),

/***/ "../../../../../src/app/core/pipes/getById.pipe.ts":
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
var GetByIdPipe = (function () {
    function GetByIdPipe() {
    }
    GetByIdPipe.prototype.transform = function (value, id, property) {
        var foundItem = value.find(function (item) {
            if (item.id !== undefined) {
                return item.id === id;
            }
            return false;
        });
        if (foundItem) {
            return foundItem[property];
        }
    };
    GetByIdPipe = __decorate([
        core_1.Pipe({
            name: 'getById',
            pure: false
        })
    ], GetByIdPipe);
    return GetByIdPipe;
}());
exports.GetByIdPipe = GetByIdPipe;


/***/ }),

/***/ "../../../../../src/app/core/pipes/htmlToPlaintext.pipe.ts":
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
var HtmlToPlaintextPipe = (function () {
    function HtmlToPlaintextPipe() {
    }
    HtmlToPlaintextPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = []; }
        return value ? String(value).replace(/<[^>]+>/gm, '') : '';
    };
    HtmlToPlaintextPipe = __decorate([
        core_1.Pipe({ name: 'htmlToPlaintext' })
    ], HtmlToPlaintextPipe);
    return HtmlToPlaintextPipe;
}());
exports.HtmlToPlaintextPipe = HtmlToPlaintextPipe;


/***/ }),

/***/ "../../../../../src/app/core/pipes/keys.pipe.ts":
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
var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                keys.push({
                    key: key,
                    value: value[key]
                });
            }
        }
        return keys;
    };
    KeysPipe = __decorate([
        core_1.Pipe({ name: 'keys' })
    ], KeysPipe);
    return KeysPipe;
}());
exports.KeysPipe = KeysPipe;


/***/ }),

/***/ "../../../../../src/app/core/pipes/pipes.module.ts":
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
var keys_pipe_1 = __webpack_require__("../../../../../src/app/core/pipes/keys.pipe.ts");
var getById_pipe_1 = __webpack_require__("../../../../../src/app/core/pipes/getById.pipe.ts");
var htmlToPlaintext_pipe_1 = __webpack_require__("../../../../../src/app/core/pipes/htmlToPlaintext.pipe.ts");
var filter_pipe_1 = __webpack_require__("../../../../../src/app/core/pipes/filter.pipe.ts");
var camelCaseToDash_pipe_1 = __webpack_require__("../../../../../src/app/core/pipes/camelCaseToDash.pipe.ts");
var FusePipesModule = (function () {
    function FusePipesModule() {
    }
    FusePipesModule = __decorate([
        core_1.NgModule({
            declarations: [
                keys_pipe_1.KeysPipe,
                getById_pipe_1.GetByIdPipe,
                htmlToPlaintext_pipe_1.HtmlToPlaintextPipe,
                filter_pipe_1.FilterPipe,
                camelCaseToDash_pipe_1.CamelCaseToDashPipe
            ],
            imports: [],
            exports: [
                keys_pipe_1.KeysPipe,
                getById_pipe_1.GetByIdPipe,
                htmlToPlaintext_pipe_1.HtmlToPlaintextPipe,
                filter_pipe_1.FilterPipe,
                camelCaseToDash_pipe_1.CamelCaseToDashPipe
            ]
        })
    ], FusePipesModule);
    return FusePipesModule;
}());
exports.FusePipesModule = FusePipesModule;


/***/ }),

/***/ "../../../../../src/app/core/services/config.service.ts":
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
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var platform_1 = __webpack_require__("../../../cdk/esm5/platform.es5.js");
var FuseConfigService = (function () {
    /**
     * @param router
     * @param platform
     */
    function FuseConfigService(router, platform) {
        var _this = this;
        this.router = router;
        this.platform = platform;
        // Set the default settings
        this.defaultSettings = {
            layout: {
                navigation: 'left',
                navigationFolded: false,
                toolbar: 'below',
                footer: 'below',
                mode: 'fullwidth' // 'boxed', 'fullwidth'
            },
            colorClasses: {
                toolbar: 'mat-white-500-bg',
                navbar: 'mat-fuse-dark-700-bg',
                footer: 'mat-fuse-dark-900-bg'
            },
            customScrollbars: true,
            routerAnimation: 'fadeIn' // fadeIn, slideUp, slideDown, slideRight, slideLeft, none
        };
        /**
         * Disable Custom Scrollbars if Browser is Mobile
         */
        if (this.platform.ANDROID || this.platform.IOS) {
            this.defaultSettings.customScrollbars = false;
        }
        // Set the settings from the default settings
        this.settings = Object.assign({}, this.defaultSettings);
        // Reload the default settings on every navigation start
        router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                _this.setSettings({ layout: _this.defaultSettings.layout });
            }
        });
        // Create the behavior subject
        this.onSettingsChanged = new BehaviorSubject_1.BehaviorSubject(this.settings);
    }
    /**
     * Sets settings
     * @param settings
     */
    FuseConfigService.prototype.setSettings = function (settings) {
        // Set the settings from the given object
        this.settings = Object.assign({}, this.settings, settings);
        // Trigger the event
        this.onSettingsChanged.next(this.settings);
    };
    FuseConfigService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router,
            platform_1.Platform])
    ], FuseConfigService);
    return FuseConfigService;
}());
exports.FuseConfigService = FuseConfigService;


/***/ }),

/***/ "../../../../../src/app/core/services/match-media.service.ts":
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
var flex_layout_1 = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var FuseMatchMedia = (function () {
    function FuseMatchMedia(observableMedia) {
        var _this = this;
        this.observableMedia = observableMedia;
        this.onMediaChange = new core_1.EventEmitter();
        this.activeMediaQuery = '';
        this.observableMedia.subscribe(function (change) {
            if (_this.activeMediaQuery !== change.mqAlias) {
                _this.activeMediaQuery = change.mqAlias;
                _this.onMediaChange.emit(change.mqAlias);
            }
        });
    }
    FuseMatchMedia = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [flex_layout_1.ObservableMedia])
    ], FuseMatchMedia);
    return FuseMatchMedia;
}());
exports.FuseMatchMedia = FuseMatchMedia;


/***/ }),

/***/ "../../../../../src/app/core/services/splash-screen.service.ts":
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
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var animations_1 = __webpack_require__("../../../animations/esm5/animations.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var FuseSplashScreenService = (function () {
    function FuseSplashScreenService(animationBuilder, document, router) {
        var _this = this;
        this.animationBuilder = animationBuilder;
        this.document = document;
        this.router = router;
        this.splashScreenEl = this.document.body.querySelector('#fuse-splash-screen');
        var hideOnLoad = this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                setTimeout(function () {
                    _this.hide();
                    hideOnLoad.unsubscribe();
                }, 0);
            }
        });
    }
    FuseSplashScreenService.prototype.show = function () {
        var _this = this;
        this.player =
            this.animationBuilder
                .build([
                animations_1.style({
                    opacity: '0',
                    zIndex: '99999'
                }),
                animations_1.animate('400ms ease', animations_1.style({ opacity: '1' }))
            ]).create(this.splashScreenEl);
        setTimeout(function () {
            _this.player.play();
        }, 0);
    };
    FuseSplashScreenService.prototype.hide = function () {
        var _this = this;
        this.player =
            this.animationBuilder
                .build([
                animations_1.style({ opacity: '1' }),
                animations_1.animate('400ms ease', animations_1.style({
                    opacity: '0',
                    zIndex: '-10'
                }))
            ]).create(this.splashScreenEl);
        setTimeout(function () {
            _this.player.play();
        }, 0);
    };
    FuseSplashScreenService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(common_1.DOCUMENT)),
        __metadata("design:paramtypes", [animations_1.AnimationBuilder, Object, router_1.Router])
    ], FuseSplashScreenService);
    return FuseSplashScreenService;
}());
exports.FuseSplashScreenService = FuseSplashScreenService;


/***/ }),

/***/ "../../../../../src/app/core/services/translation-loader.service.ts":
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
var core_2 = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var FuseTranslationLoaderService = (function () {
    function FuseTranslationLoaderService(translate) {
        this.translate = translate;
    }
    FuseTranslationLoaderService.prototype.loadTranslations = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var locales = args.slice();
        locales.forEach(function (locale) {
            // use setTranslation() with the third argument set to true
            // to append translations instead of replacing them
            _this.translate.setTranslation(locale.lang, locale.data, true);
        });
    };
    FuseTranslationLoaderService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_2.TranslateService])
    ], FuseTranslationLoaderService);
    return FuseTranslationLoaderService;
}());
exports.FuseTranslationLoaderService = FuseTranslationLoaderService;


/***/ }),

/***/ "../../../../../src/app/fuse-fake-db/academy.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AcademyFakeDb = (function () {
    function AcademyFakeDb() {
    }
    AcademyFakeDb.courses = [
        {
            'id': '15459251a6d6b397565',
            'title': 'Basics of Angular',
            'slug': 'basics-of-angular',
            'category': 'web',
            'length': 30,
            'updated': 'Jun 28, 2017'
        },
        {
            'id': '154588a0864d2881124',
            'title': 'Basics of TypeScript',
            'slug': 'basics-of-typeScript',
            'category': 'web',
            'length': 60,
            'updated': 'Nov 01, 2017'
        },
        {
            'id': '15453ba60d3baa5daaf',
            'title': 'Android N: Quick Settings',
            'slug': 'android-n-quick-settings',
            'category': 'android',
            'length': 120,
            'updated': 'Jun 28, 2017'
        },
        {
            'id': '15453a06c08fb021776',
            'title': 'Keep Sensitive Data Safe and Private',
            'slug': 'keep-sensitive-data-safe-and-private',
            'category': 'android',
            'length': 45,
            'updated': 'Jun 28, 2017'
        },
        {
            'id': '15427f4c1b7f3953234',
            'title': 'Building a gRPC Service with Java',
            'slug': 'building-a-grpc-service-with-java',
            'category': 'cloud',
            'length': 30,
            'updated': 'Jun 28, 2017'
        },
        {
            'id': '1542d75d929a603125',
            'title': 'Build a PWA Using Workbox',
            'slug': 'build-a-pwa-using-workbox',
            'category': 'web',
            'length': 120,
            'updated': 'Jun 28, 2017'
        },
        {
            'id': '1543ee3a5b43e0f9f45',
            'title': 'Build an App for the Google Assistant with Firebase and Dialogflow',
            'slug': 'build-an-app-for-the-google-assistant-with-firebase-and-dialogflow',
            'category': 'firebase',
            'length': 30,
            'updated': 'Jun 28, 2017'
        },
        {
            'id': '1543cc4515df3146112',
            'title': 'Cloud Functions for Firebase',
            'slug': 'cloud-functions-for-firebase',
            'category': 'firebase',
            'length': 45,
            'updated': 'Jun 28, 2017'
        },
        {
            'id': '154398a4770d7aaf9a2',
            'title': 'Manage Your Pivotal Cloud Foundry App\'s Using Apigee Edge',
            'slug': 'manage-your-pivotal-cloud-foundry-apps-using-apigee-Edge',
            'category': 'cloud',
            'length': 90,
            'updated': 'Jun 28, 2017'
        },
        {
            'id': '15438351f87dcd68567',
            'title': 'Building Beautiful UIs with Flutter',
            'your': 'building-beautiful-uis-with-flutter',
            'category': 'web',
            'length': 90,
            'updated': 'Jun 28, 2017'
        },
        {
            'id': '1544e43dcdae6ebf876',
            'title': 'Cloud Firestore',
            'slug': 'cloud-firestore',
            'category': 'firebase',
            'length': 90,
            'updated': 'Jun 28, 2017'
        },
        {
            'id': '1541ca7af66da284177',
            'title': 'Customize Network Topology with Subnetworks',
            'slug': 'customize-network-topology-with-subnetworks',
            'category': 'web',
            'length': 45,
            'updated': 'Jun 28, 2017'
        },
        {
            'id': '154297167e781781745',
            'title': 'Looking at Campaign Finance with BigQuery',
            'slug': 'looking-at-campaign-finance-with-bigquery',
            'category': 'cloud',
            'length': 60,
            'updated': 'Jun 28, 2017'
        },
        {
            'id': '154537435d5b32bf11a',
            'title': 'Firebase Android',
            'slug': 'firebase-android',
            'category': 'android',
            'length': 45,
            'updated': 'Jun 28, 2017'
        },
        {
            'id': '154204e45a59b168453',
            'title': 'Simulating a Thread Network Using OpenThread',
            'slug': 'simulating-a-thread-network-using-openthread',
            'category': 'web',
            'length': 45,
            'updated': 'Jun 28, 2017'
        },
        {
            'id': '1541dd1e05dfc439216',
            'title': 'Your First Progressive Web App',
            'slug': 'your-first-progressive-web-app',
            'category': 'web',
            'length': 30,
            'updated': 'Jun 28, 2017'
        },
        {
            'id': '1532dfc67e704e48515',
            'title': 'Launch Cloud Datalab',
            'slug': 'launch-cloud-datalab',
            'category': 'cloud',
            'length': 60,
            'updated': 'Jun 28, 2017'
        },
        {
            'id': '1542e43dfaae6ebf226',
            'title': 'Personalize Your iOS App with Firebase User Management',
            'slug': 'personalize-your-ios-app-with-firebase-user-management',
            'category': 'firebase',
            'length': 90,
            'updated': 'Jun 28, 2017'
        }
    ];
    AcademyFakeDb.categories = [
        {
            'id': 0,
            'value': 'web',
            'label': 'Web'
        },
        {
            'id': 1,
            'value': 'firebase',
            'label': 'Firebase'
        },
        {
            'id': 2,
            'value': 'cloud',
            'label': 'Cloud'
        },
        {
            'id': 3,
            'value': 'android',
            'label': 'Android'
        }
    ];
    AcademyFakeDb.demoSteps = [
        {
            'title': 'Introduction',
            'content': '<h1>Step 1 - Introduction</h1>' +
                '<br>' +
                'This is an example step of the course. You can put anything in here from example codes to videos.' +
                '<br><br>' +
                'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
                'To install or upgrade the CLI run the following <b>npm</b> command:' +
                '<br><br>' +
                '<code>npm -g install @angular/cli</code>' +
                '<br><br>' +
                'To verify that the CLI has been installed correctly, open a console and run:' +
                '<br><br>' +
                '<code>ng version</code>' +
                '<br><br>' +
                '<h2>Install dependencies</h2>' +
                '<br>' +
                'To moderate the images we\'ll need a few Node.js packages:' +
                '<br><br>' +
                '<ul>' +
                '<li>' +
                'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
                '</li>' +
                '<br>' +
                '<li>' +
                'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
                '</li>' +
                '<br>' +
                '<li>' +
                'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
                '</li>' +
                '</ul>' +
                '<br>' +
                'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
                '<br><br>' +
                '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
                '<br><br>' +
                'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title': 'Get the sample code',
            'content': '<h1>Step 2 - Get the sample code</h1>' +
                '<br>' +
                'This is an example step of the course. You can put anything in here from example codes to videos.' +
                '<br><br>' +
                'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
                'To install or upgrade the CLI run the following <b>npm</b> command:' +
                '<br><br>' +
                '<code>npm -g install @angular/cli</code>' +
                '<br><br>' +
                'To verify that the CLI has been installed correctly, open a console and run:' +
                '<br><br>' +
                '<code>ng version</code>' +
                '<br><br>' +
                '<h2>Install dependencies</h2>' +
                '<br>' +
                'To moderate the images we\'ll need a few Node.js packages:' +
                '<br><br>' +
                '<ul>' +
                '<li>' +
                'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
                '</li>' +
                '<br>' +
                '<li>' +
                'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
                '</li>' +
                '<br>' +
                '<li>' +
                'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
                '</li>' +
                '</ul>' +
                '<br>' +
                'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
                '<br><br>' +
                '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
                '<br><br>' +
                'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title': 'Create a Firebase project and Set up your app',
            'content': '<h1>Step 3 - Create a Firebase project and Set up your app</h1>' +
                '<br>' +
                'This is an example step of the course. You can put anything in here from example codes to videos.' +
                '<br><br>' +
                'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
                'To install or upgrade the CLI run the following <b>npm</b> command:' +
                '<br><br>' +
                '<code>npm -g install @angular/cli</code>' +
                '<br><br>' +
                'To verify that the CLI has been installed correctly, open a console and run:' +
                '<br><br>' +
                '<code>ng version</code>' +
                '<br><br>' +
                '<h2>Install dependencies</h2>' +
                '<br>' +
                'To moderate the images we\'ll need a few Node.js packages:' +
                '<br><br>' +
                '<ul>' +
                '<li>' +
                'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
                '</li>' +
                '<br>' +
                '<li>' +
                'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
                '</li>' +
                '<br>' +
                '<li>' +
                'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
                '</li>' +
                '</ul>' +
                '<br>' +
                'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
                '<br><br>' +
                '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
                '<br><br>' +
                'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title': 'Install the Firebase Command Line Interface',
            'content': '<h1>Step 4 - Install the Firebase Command Line Interface</h1>' +
                '<br>' +
                'This is an example step of the course. You can put anything in here from example codes to videos.' +
                '<br><br>' +
                'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
                'To install or upgrade the CLI run the following <b>npm</b> command:' +
                '<br><br>' +
                '<code>npm -g install @angular/cli</code>' +
                '<br><br>' +
                'To verify that the CLI has been installed correctly, open a console and run:' +
                '<br><br>' +
                '<code>ng version</code>' +
                '<br><br>' +
                '<h2>Install dependencies</h2>' +
                '<br>' +
                'To moderate the images we\'ll need a few Node.js packages:' +
                '<br><br>' +
                '<ul>' +
                '<li>' +
                'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
                '</li>' +
                '<br>' +
                '<li>' +
                'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
                '</li>' +
                '<br>' +
                '<li>' +
                'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
                '</li>' +
                '</ul>' +
                '<br>' +
                'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
                '<br><br>' +
                '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
                '<br><br>' +
                'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title': 'Deploy and run the web app',
            'content': '<h1>Step 5 - Deploy and run the web app</h1>' +
                '<br>' +
                'This is an example step of the course. You can put anything in here from example codes to videos.' +
                '<br><br>' +
                'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
                'To install or upgrade the CLI run the following <b>npm</b> command:' +
                '<br><br>' +
                '<code>npm -g install @angular/cli</code>' +
                '<br><br>' +
                'To verify that the CLI has been installed correctly, open a console and run:' +
                '<br><br>' +
                '<code>ng version</code>' +
                '<br><br>' +
                '<h2>Install dependencies</h2>' +
                '<br>' +
                'To moderate the images we\'ll need a few Node.js packages:' +
                '<br><br>' +
                '<ul>' +
                '<li>' +
                'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
                '</li>' +
                '<br>' +
                '<li>' +
                'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
                '</li>' +
                '<br>' +
                '<li>' +
                'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
                '</li>' +
                '</ul>' +
                '<br>' +
                'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
                '<br><br>' +
                '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
                '<br><br>' +
                'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title': 'The Functions Directory',
            'content': '<h1>Step 6 - The Functions Directory</h1>' +
                '<br>' +
                'This is an example step of the course. You can put anything in here from example codes to videos.' +
                '<br><br>' +
                'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
                'To install or upgrade the CLI run the following <b>npm</b> command:' +
                '<br><br>' +
                '<code>npm -g install @angular/cli</code>' +
                '<br><br>' +
                'To verify that the CLI has been installed correctly, open a console and run:' +
                '<br><br>' +
                '<code>ng version</code>' +
                '<br><br>' +
                '<h2>Install dependencies</h2>' +
                '<br>' +
                'To moderate the images we\'ll need a few Node.js packages:' +
                '<br><br>' +
                '<ul>' +
                '<li>' +
                'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
                '</li>' +
                '<br>' +
                '<li>' +
                'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
                '</li>' +
                '<br>' +
                '<li>' +
                'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
                '</li>' +
                '</ul>' +
                '<br>' +
                'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
                '<br><br>' +
                '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
                '<br><br>' +
                'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title': 'Import the Cloud Functions and Firebase Admin modules',
            'content': '<h1>Step 7 - Import the Cloud Functions and Firebase Admin modules</h1>' +
                '<br>' +
                'This is an example step of the course. You can put anything in here from example codes to videos.' +
                '<br><br>' +
                'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
                'To install or upgrade the CLI run the following <b>npm</b> command:' +
                '<br><br>' +
                '<code>npm -g install @angular/cli</code>' +
                '<br><br>' +
                'To verify that the CLI has been installed correctly, open a console and run:' +
                '<br><br>' +
                '<code>ng version</code>' +
                '<br><br>' +
                '<h2>Install dependencies</h2>' +
                '<br>' +
                'To moderate the images we\'ll need a few Node.js packages:' +
                '<br><br>' +
                '<ul>' +
                '<li>' +
                'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
                '</li>' +
                '<br>' +
                '<li>' +
                'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
                '</li>' +
                '<br>' +
                '<li>' +
                'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
                '</li>' +
                '</ul>' +
                '<br>' +
                'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
                '<br><br>' +
                '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
                '<br><br>' +
                'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title': 'Welcome New Users',
            'content': '<h1>Step 8 - Welcome New Users</h1>' +
                '<br>' +
                'This is an example step of the course. You can put anything in here from example codes to videos.' +
                '<br><br>' +
                'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
                'To install or upgrade the CLI run the following <b>npm</b> command:' +
                '<br><br>' +
                '<code>npm -g install @angular/cli</code>' +
                '<br><br>' +
                'To verify that the CLI has been installed correctly, open a console and run:' +
                '<br><br>' +
                '<code>ng version</code>' +
                '<br><br>' +
                '<h2>Install dependencies</h2>' +
                '<br>' +
                'To moderate the images we\'ll need a few Node.js packages:' +
                '<br><br>' +
                '<ul>' +
                '<li>' +
                'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
                '</li>' +
                '<br>' +
                '<li>' +
                'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
                '</li>' +
                '<br>' +
                '<li>' +
                'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
                '</li>' +
                '</ul>' +
                '<br>' +
                'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
                '<br><br>' +
                '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
                '<br><br>' +
                'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title': 'Images moderation',
            'content': '<h1>Step 9 - Images moderation</h1>' +
                '<br>' +
                'This is an example step of the course. You can put anything in here from example codes to videos.' +
                '<br><br>' +
                'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
                'To install or upgrade the CLI run the following <b>npm</b> command:' +
                '<br><br>' +
                '<code>npm -g install @angular/cli</code>' +
                '<br><br>' +
                'To verify that the CLI has been installed correctly, open a console and run:' +
                '<br><br>' +
                '<code>ng version</code>' +
                '<br><br>' +
                '<h2>Install dependencies</h2>' +
                '<br>' +
                'To moderate the images we\'ll need a few Node.js packages:' +
                '<br><br>' +
                '<ul>' +
                '<li>' +
                'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
                '</li>' +
                '<br>' +
                '<li>' +
                'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
                '</li>' +
                '<br>' +
                '<li>' +
                'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
                '</li>' +
                '</ul>' +
                '<br>' +
                'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
                '<br><br>' +
                '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
                '<br><br>' +
                'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title': 'New Message Notifications',
            'content': '<h1>Step 10 - New Message Notifications</h1>' +
                '<br>' +
                'This is an example step of the course. You can put anything in here from example codes to videos.' +
                '<br><br>' +
                'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
                'To install or upgrade the CLI run the following <b>npm</b> command:' +
                '<br><br>' +
                '<code>npm -g install @angular/cli</code>' +
                '<br><br>' +
                'To verify that the CLI has been installed correctly, open a console and run:' +
                '<br><br>' +
                '<code>ng version</code>' +
                '<br><br>' +
                '<h2>Install dependencies</h2>' +
                '<br>' +
                'To moderate the images we\'ll need a few Node.js packages:' +
                '<br><br>' +
                '<ul>' +
                '<li>' +
                'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
                '</li>' +
                '<br>' +
                '<li>' +
                'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
                '</li>' +
                '<br>' +
                '<li>' +
                'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
                '</li>' +
                '</ul>' +
                '<br>' +
                'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
                '<br><br>' +
                '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
                '<br><br>' +
                'This will install the three packages locally and add them as declared dependencies in your package.js file.'
        },
        {
            'title': 'Congratulations!',
            'content': '<h1>Step 11 - Congratulations!</h1>' +
                '<br>' +
                'You\'ve built a full-fidelity, offline-capable progressive web app by leveraging the power of reusable Web Components and Firebase. Why bother with a native app when you know how to do all that?!'
        }
    ];
    AcademyFakeDb.course = [
        {
            'id': '15459251a6d6b397565',
            'title': 'Basics of Angular',
            'slug': 'basics-of-angular',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category': 'web',
            'length': 30,
            'totalSteps': 11,
            'updated': 'Jun 28, 2017',
            'steps': AcademyFakeDb.demoSteps
        },
        {
            'id': '154588a0864d2881124',
            'title': 'Basics of TypeScript',
            'slug': 'basics-of-typeScript',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category': 'web',
            'length': 60,
            'totalSteps': 11,
            'updated': 'Nov 01, 2017',
            'steps': AcademyFakeDb.demoSteps
        },
        {
            'id': '15453ba60d3baa5daaf',
            'title': 'Android N: Quick Settings',
            'slug': 'android-n-quick-settings',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category': 'android',
            'length': 120,
            'totalSteps': 11,
            'updated': 'Jun 28, 2017',
            'steps': AcademyFakeDb.demoSteps
        },
        {
            'id': '15453a06c08fb021776',
            'title': 'Keep Sensitive Data Safe and Private',
            'slug': 'keep-sensitive-data-safe-and-private',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category': 'android',
            'length': 45,
            'totalSteps': 11,
            'updated': 'Jun 28, 2017',
            'steps': AcademyFakeDb.demoSteps
        },
        {
            'id': '15427f4c1b7f3953234',
            'title': 'Building a gRPC Service with Java',
            'slug': 'building-a-grpc-service-with-java',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category': 'cloud',
            'length': 30,
            'totalSteps': 11,
            'updated': 'Jun 28, 2017',
            'steps': AcademyFakeDb.demoSteps
        },
        {
            'id': '1542d75d929a603125',
            'title': 'Build a PWA Using Workbox',
            'slug': 'build-a-pwa-using-workbox',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category': 'web',
            'length': 120,
            'totalSteps': 11,
            'updated': 'Jun 28, 2017',
            'steps': AcademyFakeDb.demoSteps
        },
        {
            'id': '1543ee3a5b43e0f9f45',
            'title': 'Build an App for the Google Assistant with Firebase and Dialogflow',
            'slug': 'build-an-app-for-the-google-assistant-with-firebase-and-dialogflow',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category': 'firebase',
            'length': 30,
            'totalSteps': 11,
            'updated': 'Jun 28, 2017',
            'steps': AcademyFakeDb.demoSteps
        },
        {
            'id': '1543cc4515df3146112',
            'title': 'Cloud Functions for Firebase',
            'slug': 'cloud-functions-for-firebase',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category': 'firebase',
            'length': 45,
            'totalSteps': 11,
            'updated': 'Jun 28, 2017',
            'steps': AcademyFakeDb.demoSteps
        },
        {
            'id': '154398a4770d7aaf9a2',
            'title': 'Manage Your Pivotal Cloud Foundry App\'s Using Apigee Edge',
            'slug': 'manage-your-pivotal-cloud-foundry-apps-using-apigee-Edge',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category': 'cloud',
            'length': 90,
            'totalSteps': 11,
            'updated': 'Jun 28, 2017',
            'steps': AcademyFakeDb.demoSteps
        },
        {
            'id': '15438351f87dcd68567',
            'title': 'Building Beautiful UIs with Flutter',
            'your': 'building-beautiful-uis-with-flutter',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category': 'web',
            'length': 90,
            'totalSteps': 11,
            'updated': 'Jun 28, 2017',
            'steps': AcademyFakeDb.demoSteps
        },
        {
            'id': '1544e43dcdae6ebf876',
            'title': 'Cloud Firestore',
            'slug': 'cloud-firestore',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category': 'firebase',
            'length': 90,
            'totalSteps': 11,
            'updated': 'Jun 28, 2017',
            'steps': AcademyFakeDb.demoSteps
        },
        {
            'id': '1541ca7af66da284177',
            'title': 'Customize Network Topology with Subnetworks',
            'slug': 'customize-network-topology-with-subnetworks',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category': 'web',
            'length': 45,
            'totalSteps': 11,
            'updated': 'Jun 28, 2017',
            'steps': AcademyFakeDb.demoSteps
        },
        {
            'id': '154297167e781781745',
            'title': 'Looking at Campaign Finance with BigQuery',
            'slug': 'looking-at-campaign-finance-with-bigquery',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category': 'cloud',
            'length': 60,
            'totalSteps': 11,
            'updated': 'Jun 28, 2017',
            'steps': AcademyFakeDb.demoSteps
        },
        {
            'id': '154537435d5b32bf11a',
            'title': 'Firebase Android',
            'slug': 'firebase-android',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category': 'android',
            'length': 45,
            'totalSteps': 11,
            'updated': 'Jun 28, 2017',
            'steps': AcademyFakeDb.demoSteps
        },
        {
            'id': '154204e45a59b168453',
            'title': 'Simulating a Thread Network Using OpenThread',
            'slug': 'simulating-a-thread-network-using-openthread',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category': 'web',
            'length': 45,
            'totalSteps': 11,
            'updated': 'Jun 28, 2017',
            'steps': AcademyFakeDb.demoSteps
        },
        {
            'id': '1541dd1e05dfc439216',
            'title': 'Your First Progressive Web App',
            'slug': 'your-first-progressive-web-app',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category': 'web',
            'length': 30,
            'totalSteps': 11,
            'updated': 'Jun 28, 2017',
            'steps': AcademyFakeDb.demoSteps
        },
        {
            'id': '1532dfc67e704e48515',
            'title': 'Launch Cloud Datalab',
            'slug': 'launch-cloud-datalab',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category': 'cloud',
            'length': 60,
            'totalSteps': 11,
            'updated': 'Jun 28, 2017',
            'steps': AcademyFakeDb.demoSteps
        },
        {
            'id': '1542e43dfaae6ebf226',
            'title': 'Personalize Your iOS App with Firebase User Management',
            'slug': 'personalize-your-ios-app-with-firebase-user-management',
            'description': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'category': 'firebase',
            'length': 90,
            'totalSteps': 11,
            'updated': 'Jun 28, 2017',
            'steps': AcademyFakeDb.demoSteps
        }
    ];
    return AcademyFakeDb;
}());
exports.AcademyFakeDb = AcademyFakeDb;


/***/ }),

/***/ "../../../../../src/app/fuse-fake-db/calendar.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = __webpack_require__("../../../../date-fns/index.js");
var CalendarFakeDb = (function () {
    function CalendarFakeDb() {
    }
    CalendarFakeDb.data = [
        {
            id: 'events',
            data: [
                {
                    start: date_fns_1.subDays(date_fns_1.startOfDay(new Date()), 1),
                    end: date_fns_1.addDays(new Date(), 1),
                    title: 'A 3 day event',
                    allDay: false,
                    color: {
                        primary: '#ad2121',
                        secondary: '#FAE3E3'
                    },
                    resizable: {
                        beforeStart: true,
                        afterEnd: true
                    },
                    draggable: true,
                    meta: {
                        location: 'Los Angeles',
                        notes: 'Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri.'
                    }
                },
                {
                    start: date_fns_1.startOfDay(new Date()),
                    title: 'An event with no end date',
                    allDay: false,
                    color: {
                        primary: '#e3bc08',
                        secondary: '#FDF1BA'
                    },
                    resizable: {
                        beforeStart: true,
                        afterEnd: true
                    },
                    draggable: true,
                    meta: {
                        location: 'Los Angeles',
                        notes: 'Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri.'
                    }
                },
                {
                    start: date_fns_1.subDays(date_fns_1.endOfMonth(new Date()), 3),
                    end: date_fns_1.addDays(date_fns_1.endOfMonth(new Date()), 3),
                    title: 'A long event that spans 2 months',
                    allDay: false,
                    color: {
                        primary: '#1e90ff',
                        secondary: '#D1E8FF'
                    },
                    resizable: {
                        beforeStart: true,
                        afterEnd: true
                    },
                    draggable: true,
                    meta: {
                        location: 'Los Angeles',
                        notes: 'Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri.'
                    }
                },
                {
                    start: date_fns_1.addHours(date_fns_1.startOfDay(new Date()), 2),
                    end: new Date(),
                    title: 'A draggable and resizable event',
                    allDay: false,
                    color: {
                        primary: '#e3bc08',
                        secondary: '#FDF1BA'
                    },
                    resizable: {
                        beforeStart: true,
                        afterEnd: true
                    },
                    draggable: true,
                    meta: {
                        location: 'Los Angeles',
                        notes: 'Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri.'
                    }
                }
            ]
        }
    ];
    return CalendarFakeDb;
}());
exports.CalendarFakeDb = CalendarFakeDb;


/***/ }),

/***/ "../../../../../src/app/fuse-fake-db/chat.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChatFakeDb = (function () {
    function ChatFakeDb() {
    }
    ChatFakeDb.contacts = [
        {
            'id': '5725a680b3249760ea21de52',
            'name': 'Alice Freeman',
            'avatar': 'assets/images/avatars/alice.jpg',
            'status': 'online',
            'mood': 'I never sign anything until I pretend to read it first..'
        },
        {
            'id': '5725a680606588342058356d',
            'name': 'Arnold',
            'avatar': 'assets/images/avatars/Arnold.jpg',
            'status': 'do-not-disturb',
            'mood': 'Looks like Andrew Jackson\'s been tossed to the back of the bus.'
        },
        {
            'id': '5725a68009e20d0a9e9acf2a',
            'name': 'Barrera',
            'avatar': 'assets/images/avatars/Barrera.jpg',
            'status': 'do-not-disturb',
            'mood': 'Love is going to bed early.Marriage is going to sleep early.',
            'unread': null
        },
        {
            'id': '5725a6809fdd915739187ed5',
            'name': 'Blair',
            'avatar': 'assets/images/avatars/Blair.jpg',
            'status': 'offline',
            'mood': 'I would be unstoppable. If i could just get started.',
            'unread': 3
        },
        {
            'id': '5725a68007920cf75051da64',
            'name': 'Boyle',
            'avatar': 'assets/images/avatars/Boyle.jpg',
            'status': 'offline',
            'mood': '\'GOOD MORNING COFFEE\'....Meet your maker!!!!'
        },
        {
            'id': '5725a68031fdbb1db2c1af47',
            'name': 'Christy',
            'avatar': 'assets/images/avatars/Christy.jpg',
            'status': 'offline',
            'mood': 'We always hold hands. If I let go, she shops.'
        },
        {
            'id': '5725a680bc670af746c435e2',
            'name': 'Copeland',
            'avatar': 'assets/images/avatars/Copeland.jpg',
            'status': 'online',
            'mood': 'I get enough exercise just pushing my luck.'
        },
        {
            'id': '5725a680e7eb988a58ddf303',
            'name': 'Estes',
            'avatar': 'assets/images/avatars/Estes.jpg',
            'status': 'away',
            'mood': 'What comes after the man bun hairstyle? The he-hive!'
        },
        {
            'id': '5725a680dcb077889f758961',
            'name': 'Harper',
            'avatar': 'assets/images/avatars/Harper.jpg',
            'status': 'offline',
            'mood': 'Always try to be modest and be proud of it!'
        },
        {
            'id': '5725a6806acf030f9341e925',
            'name': 'Helen',
            'avatar': 'assets/images/avatars/Helen.jpg',
            'status': 'away',
            'mood': 'Why are there stitch marks on zombies? Who\'s giving them medical attention?'
        },
        {
            'id': '5725a680ae1ae9a3c960d487',
            'name': 'Henderson',
            'avatar': 'assets/images/avatars/Henderson.jpg',
            'status': 'offline',
            'mood': 'I can\'t decide if people who wear pajamas in public have given up on life or are living it to the fullest.'
        },
        {
            'id': '5725a680b8d240c011dd224b',
            'name': 'Josefina',
            'avatar': 'assets/images/avatars/Josefina.jpg',
            'status': 'online',
            'mood': 'The fastest way to being happy is to make other people happy. You go first'
        },
        {
            'id': '5725a68034cb3968e1f79eac',
            'name': 'Katina',
            'avatar': 'assets/images/avatars/Katina.jpg',
            'status': 'away',
            'mood': 'If I was a rat,,, I wouldn\'t give anyone my ass.'
        },
        {
            'id': '5725a6801146cce777df2a08',
            'name': 'Lily',
            'avatar': 'assets/images/avatars/Lily.jpg',
            'status': 'do-not-disturb',
            'mood': 'A zip line but from the sofa to the fridge'
        },
        {
            'id': '5725a6808a178bfd034d6ecf',
            'name': 'Mai',
            'avatar': 'assets/images/avatars/Mai.jpg',
            'status': 'away',
            'mood': 'If a girl tells you she has a nipple ring, the only correct response is \'I don\'t believe you.\''
        },
        {
            'id': '5725a680653c265f5c79b5a9',
            'name': 'Nancy',
            'avatar': 'assets/images/avatars/Nancy.jpg',
            'status': 'do-not-disturb',
            'mood': 'Prison counts as a gated community, right?'
        },
        {
            'id': '5725a680bbcec3cc32a8488a',
            'name': 'Nora',
            'avatar': 'assets/images/avatars/Nora.jpg',
            'status': 'do-not-disturb',
            'mood': 'I never date left handed women. Righty tighty, lefty loosey.'
        },
        {
            'id': '5725a6803d87f1b77e17b62b',
            'name': 'Odessa',
            'avatar': 'assets/images/avatars/Odessa.jpg',
            'status': 'away',
            'mood': 'A day without sunshine is like, night.'
        },
        {
            'id': '5725a680e87cb319bd9bd673',
            'name': 'Reyna',
            'avatar': 'assets/images/avatars/Reyna.jpg',
            'status': 'offline',
            'mood': 'I can\'t wait for summer in Canada...'
        },
        {
            'id': '5725a6802d10e277a0f35775',
            'name': 'Shauna',
            'avatar': 'assets/images/avatars/Shauna.jpg',
            'status': 'online',
            'mood': 'My take home pay doesn’t ven take me home.',
            'unread': null
        },
        {
            'id': '5725a680aef1e5cf26dd3d1f',
            'name': 'Shepard',
            'avatar': 'assets/images/avatars/Shepard.jpg',
            'status': 'online',
            'mood': 'I don\'t speak Spanish, but I\'m pretty sure \'Dora\' means \'annoying\''
        },
        {
            'id': '5725a680cd7efa56a45aea5d',
            'name': 'Tillman',
            'avatar': 'assets/images/avatars/Tillman.jpg',
            'status': 'do-not-disturb',
            'mood': ''
        },
        {
            'id': '5725a680fb65c91a82cb35e2',
            'name': 'Trevino',
            'avatar': 'assets/images/avatars/Trevino.jpg',
            'status': 'away',
            'mood': 'Apparently, a rat and a plastic tube does not count as a DIY abortion kit.'
        },
        {
            'id': '5725a68018c663044be49cbf',
            'name': 'Tyson',
            'avatar': 'assets/images/avatars/Tyson.jpg',
            'status': 'do-not-disturb',
            'mood': 'I\'m wondering why life keeps teaching me lessons I have no desire to learn...'
        },
        {
            'id': '5725a6809413bf8a0a5272b1',
            'name': 'Velazquez',
            'avatar': 'assets/images/avatars/Velazquez.jpg',
            'status': 'online',
            'mood': 'Modulation in all things.'
        }
    ];
    ChatFakeDb.chats = [
        {
            'id': '1725a680b3249760ea21de52',
            'dialog': [
                {
                    'who': '5725a680b3249760ea21de52',
                    'message': 'Quickly come to the meeting room 1B, we have a big server issue',
                    'time': '2017-03-22T08:54:28.299Z'
                },
                {
                    'who': '5725a6802d10e277a0f35724',
                    'message': 'I’m having breakfast right now, can’t you wait for 10 minutes?',
                    'time': '2017-03-22T08:55:28.299Z'
                },
                {
                    'who': '5725a680b3249760ea21de52',
                    'message': 'We are losing money! Quick!',
                    'time': '2017-03-22T09:00:28.299Z'
                },
                {
                    'who': '5725a6802d10e277a0f35724',
                    'message': 'It’s not my money, you know. I will eat my breakfast and then I will come to the meeting room.',
                    'time': '2017-03-22T09:02:28.299Z'
                },
                {
                    'who': '5725a680b3249760ea21de52',
                    'message': 'You are the worst!',
                    'time': '2017-03-22T09:05:28.299Z'
                },
                {
                    'who': '5725a680b3249760ea21de52',
                    'message': 'We are losing money! Quick!',
                    'time': '2017-03-22T09:15:28.299Z'
                },
                {
                    'who': '5725a6802d10e277a0f35724',
                    'message': 'It’s not my money, you know. I will eat my breakfast and then I will come to the meeting room.',
                    'time': '2017-03-22T09:20:28.299Z'
                },
                {
                    'who': '5725a680b3249760ea21de52',
                    'message': 'You are the worst!',
                    'time': '2017-03-22T09:22:28.299Z'
                },
                {
                    'who': '5725a680b3249760ea21de52',
                    'message': 'We are losing money! Quick!',
                    'time': '2017-03-22T09:25:28.299Z'
                },
                {
                    'who': '5725a6802d10e277a0f35724',
                    'message': 'It’s not my money, you know. I will eat my breakfast and then I will come to the meeting room.',
                    'time': '2017-03-22T09:27:28.299Z'
                },
                {
                    'who': '5725a680b3249760ea21de52',
                    'message': 'You are the worst!',
                    'time': '2017-03-22T09:33:28.299Z'
                },
                {
                    'who': '5725a680b3249760ea21de52',
                    'message': 'We are losing money! Quick!',
                    'time': '2017-03-22T09:35:28.299Z'
                },
                {
                    'who': '5725a6802d10e277a0f35724',
                    'message': 'It’s not my money, you know. I will eat my breakfast and then I will come to the meeting room.',
                    'time': '2017-03-22T09:45:28.299Z'
                },
                {
                    'who': '5725a680b3249760ea21de52',
                    'message': 'You are the worst!',
                    'time': '2017-03-22T10:00:28.299Z'
                }
            ]
        },
        {
            'id': '2725a680b8d240c011dd2243',
            'dialog': [
                {
                    'who': '5725a680b8d240c011dd224b',
                    'message': 'Quickly come to the meeting room 1B, we have a big server issue',
                    'time': '2017-04-22T01:00:00.299Z'
                },
                {
                    'who': '5725a6802d10e277a0f35724',
                    'message': 'I’m having breakfast right now, can’t you wait for 10 minutes?',
                    'time': '2017-04-22T01:05:00.299Z'
                },
                {
                    'who': '5725a680b8d240c011dd224b',
                    'message': 'We are losing money! Quick!',
                    'time': '2017-04-22T01:10:00.299Z'
                }
            ]
        },
        {
            'id': '3725a6809413bf8a0a5272b4',
            'dialog': [
                {
                    'who': '5725a6809413bf8a0a5272b1',
                    'message': 'Quickly come to the meeting room 1B, we have a big server issue',
                    'time': '2017-04-22T02:10:00.299Z'
                }
            ]
        }
    ];
    ChatFakeDb.user = [
        {
            'id': '5725a6802d10e277a0f35724',
            'name': 'John Doe',
            'avatar': 'assets/images/avatars/profile.jpg',
            'status': 'online',
            'mood': 'it\'s a status....not your diary...',
            'chatList': [
                {
                    'id': '1725a680b3249760ea21de52',
                    'contactId': '5725a680b3249760ea21de52',
                    'name': 'Alice Freeman',
                    'unread': 4,
                    'lastMessageTime': '2017-06-12T02:10:18.931Z'
                },
                {
                    'id': '2725a680b8d240c011dd2243',
                    'contactId': '5725a680b8d240c011dd224b',
                    'name': 'Josefina',
                    'unread': null,
                    'lastMessageTime': '2017-02-18T10:30:18.931Z'
                },
                {
                    'id': '3725a6809413bf8a0a5272b4',
                    'contactId': '5725a6809413bf8a0a5272b1',
                    'name': 'Velazquez',
                    'unread': 2,
                    'lastMessageTime': '2017-03-18T12:30:18.931Z'
                }
            ]
        }
    ];
    return ChatFakeDb;
}());
exports.ChatFakeDb = ChatFakeDb;


/***/ }),

/***/ "../../../../../src/app/fuse-fake-db/contacts.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContactsFakeDb = (function () {
    function ContactsFakeDb() {
    }
    ContactsFakeDb.contacts = [
        {
            'id': '5725a680b3249760ea21de52',
            'name': 'Abbott',
            'lastName': 'Keitch',
            'avatar': 'assets/images/avatars/Abbott.jpg',
            'nickname': 'Royalguard',
            'company': 'Saois',
            'jobTitle': 'Digital Archivist',
            'email': 'abbott@withinpixels.com',
            'phone': '+1-202-555-0175',
            'address': '933 8th Street Stamford, CT 06902',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a680606588342058356d',
            'name': 'Arnold',
            'lastName': 'Matlock',
            'avatar': 'assets/images/avatars/Arnold.jpg',
            'nickname': 'Wanderer',
            'company': 'Laotcone',
            'jobTitle': 'Graphic Artist',
            'email': 'arnold@withinpixels.com',
            'phone': '+1-202-555-0141',
            'address': '906 Valley Road Michigan City, IN 46360',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a68009e20d0a9e9acf2a',
            'name': 'Barrera',
            'lastName': 'Bradbury',
            'avatar': 'assets/images/avatars/Barrera.jpg',
            'nickname': 'Jackal',
            'company': 'Unizim',
            'jobTitle': 'Graphic Designer',
            'email': 'barrera@withinpixels.com',
            'phone': '+1-202-555-0196',
            'address': '183 River Street Passaic, NJ 07055',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a6809fdd915739187ed5',
            'name': 'Blair',
            'lastName': 'Strangeway',
            'avatar': 'assets/images/avatars/Blair.jpg',
            'nickname': 'Knight',
            'company': 'Conedubdax',
            'jobTitle': 'Visual Designer',
            'email': 'blair@withinpixels.com',
            'phone': '+1-202-555-0118',
            'address': '143 Jones Street Eau Claire, WI 54701',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a68007920cf75051da64',
            'name': 'Boyle',
            'lastName': 'Winters',
            'avatar': 'assets/images/avatars/Boyle.jpg',
            'nickname': 'Jester',
            'company': 'Newo',
            'jobTitle': 'Catalogue Illustrator',
            'email': 'boyle@withinpixels.com',
            'phone': '+1-202-555-0177',
            'address': '218 Pearl Street Brandon, FL 33510',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a68031fdbb1db2c1af47',
            'name': 'Christy',
            'lastName': 'Camacho',
            'avatar': 'assets/images/avatars/Christy.jpg',
            'nickname': 'Mist',
            'company': 'uniway',
            'jobTitle': '3D Animator',
            'email': 'christy@withinpixels.com',
            'phone': '+1-202-555-0136',
            'address': '329 Bridge Street Desoto, TX 75115',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a680bc670af746c435e2',
            'name': 'Copeland',
            'lastName': 'Redcliff',
            'avatar': 'assets/images/avatars/Copeland.jpg',
            'nickname': 'Cloudlaw',
            'company': 'Tempron',
            'jobTitle': 'Multimedia Artist',
            'email': 'copeland@withinpixels.com',
            'phone': '+1-202-555-0107',
            'address': '956 6th Avenue North Bergen, NJ 0704',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a680e7eb988a58ddf303',
            'name': 'Estes',
            'lastName': 'Stevens',
            'avatar': 'assets/images/avatars/Estes.jpg',
            'nickname': 'Roamer',
            'company': 'nam-dex',
            'jobTitle': 'Special Effects Artist',
            'email': 'estes@withinpixels.com',
            'phone': '+1-202-555-0113',
            'address': '664 York Street Cambridge, MA 02138',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a680dcb077889f758961',
            'name': 'Harper',
            'lastName': 'MacGuffin',
            'avatar': 'assets/images/avatars/Harper.jpg',
            'nickname': 'Tempest',
            'company': 'runcane',
            'jobTitle': 'Application Developer',
            'email': 'harper@withinpixels.com',
            'phone': '+1-202-555-0173',
            'address': '738 Route 11 Cornelius, NC 28031',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a6806acf030f9341e925',
            'name': 'Helen',
            'lastName': 'Sheridan',
            'avatar': 'assets/images/avatars/Helen.jpg',
            'nickname': 'Magicbattler',
            'company': 'Subhow',
            'jobTitle': 'Content Developer',
            'email': 'helen@withinpixels.com',
            'phone': '+1-202-555-0163',
            'address': '194 Washington Avenue Saint Petersburg, FL 33702',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a680ae1ae9a3c960d487',
            'name': 'Henderson',
            'lastName': 'Cambias',
            'avatar': 'assets/images/avatars/Henderson.jpg',
            'nickname': 'Blizzard',
            'company': 'Howcom',
            'jobTitle': 'Web Designer',
            'email': 'henderson@withinpixels.com',
            'phone': '+1-202-555-0151',
            'address': '686 Roosevelt Avenue Oviedo, FL 32765',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a680b8d240c011dd224b',
            'name': 'Josefina',
            'lastName': 'Lakefield',
            'avatar': 'assets/images/avatars/Josefina.jpg',
            'nickname': 'Violet',
            'company': 'Gecko',
            'jobTitle': 'Web Developer',
            'email': 'josefina@withinpixels.com',
            'phone': '+1-202-555-0160',
            'address': '202 Hartford Road Lynchburg, VA 24502',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a68034cb3968e1f79eac',
            'name': 'Katina',
            'lastName': 'Bletchley',
            'avatar': 'assets/images/avatars/Katina.jpg',
            'nickname': 'Rose',
            'company': 'Lexicom',
            'jobTitle': 'Software Designer',
            'email': 'katina@withinpixels.com',
            'phone': '+1-202-555-0186',
            'address': '219 Woodland Road Valrico, FL 33594',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a6801146cce777df2a08',
            'name': 'Lily',
            'lastName': 'Peasegood',
            'avatar': 'assets/images/avatars/Lily.jpg',
            'nickname': 'Star',
            'company': 'zooflex',
            'jobTitle': 'Software Specialist',
            'email': 'lily@withinpixels.com',
            'phone': '+1-202-555-0115',
            'address': '305 Willow Drive Superior, WI 54880',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a6808a178bfd034d6ecf',
            'name': 'Mai',
            'lastName': 'Nox',
            'avatar': 'assets/images/avatars/Mai.jpg',
            'nickname': 'Violetmage',
            'company': 'quadzone',
            'jobTitle': 'Software Engineer',
            'email': 'mai@withinpixels.com',
            'phone': '+1-202-555-0199',
            'address': '148 Heather Lane Mcminnville, TN 37110',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a680653c265f5c79b5a9',
            'name': 'Nancy',
            'lastName': 'Jaggers',
            'avatar': 'assets/images/avatars/Nancy.jpg',
            'nickname': 'Silverwarden',
            'company': 'Opetamnix',
            'jobTitle': 'Software Architect',
            'email': 'nancy@withinpixels.com',
            'phone': '+1-202-555-0120',
            'address': '345 Laurel Lane Union City, NJ 07087',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a680bbcec3cc32a8488a',
            'name': 'Nora',
            'lastName': 'Franklin',
            'avatar': 'assets/images/avatars/Nora.jpg',
            'nickname': 'Katanachanter',
            'company': 'Saoway',
            'jobTitle': 'Database Coordinator',
            'email': 'nora@withinpixels.com',
            'phone': '+1-202-555-0172',
            'address': '572 Rose Street Summerfield, FL 34491',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a6803d87f1b77e17b62b',
            'name': 'Odessa',
            'lastName': 'Goodman',
            'avatar': 'assets/images/avatars/Odessa.jpg',
            'nickname': 'Rose',
            'company': 'transace',
            'jobTitle': 'Database Administration Manager',
            'email': 'odessa@withinpixels.com',
            'phone': '+1-202-555-0190',
            'address': '527 Jefferson Court Conyers, GA 30012',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a680e87cb319bd9bd673',
            'name': 'Reyna',
            'lastName': 'Preece',
            'avatar': 'assets/images/avatars/Reyna.jpg',
            'nickname': 'Holydawn',
            'company': 'Dingex',
            'jobTitle': 'Data Processing Planner',
            'email': 'reyna@withinpixels.com',
            'phone': '+1-202-555-0116',
            'address': '297 Strawberry Lane Faribault, MN 55021',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a6802d10e277a0f35775',
            'name': 'Shauna',
            'lastName': 'Atherton',
            'avatar': 'assets/images/avatars/Shauna.jpg',
            'nickname': 'Faunasoul',
            'company': 'Vivaflex',
            'jobTitle': 'Art Director',
            'email': 'shauna@withinpixels.com',
            'phone': '+1-202-555-0159',
            'address': '928 Canterbury Court Pittsburgh, PA 15206',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a680aef1e5cf26dd3d1f',
            'name': 'Shepard',
            'lastName': 'Rosco',
            'avatar': 'assets/images/avatars/Shepard.jpg',
            'nickname': 'Fireking',
            'company': 'Goldenla',
            'jobTitle': 'Magazine Designer',
            'email': 'shepard@withinpixels.com',
            'phone': '+1-202-555-0173',
            'address': '904 Ridge Road Pickerington, OH 43147',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a680cd7efa56a45aea5d',
            'name': 'Tillman',
            'lastName': 'Lee',
            'avatar': 'assets/images/avatars/Tillman.jpg',
            'nickname': 'Gust',
            'company': 'K-techno',
            'jobTitle': 'News Photographer',
            'email': 'tillman@withinpixels.com',
            'phone': '+1-202-555-0183',
            'address': '447 Charles Street Dorchester, MA 02125',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a680fb65c91a82cb35e2',
            'name': 'Trevino',
            'lastName': 'Bush',
            'avatar': 'assets/images/avatars/Trevino.jpg',
            'nickname': 'Wolf',
            'company': 'Dalthex',
            'jobTitle': 'Photojournalist',
            'email': 'trevino@withinpixels.com',
            'phone': '+1-202-555-0138',
            'address': '84 Valley View Road Norman, OK 73072',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a68018c663044be49cbf',
            'name': 'Tyson',
            'lastName': 'Marshall',
            'avatar': 'assets/images/avatars/Tyson.jpg',
            'nickname': 'Honordread',
            'company': 'Geocon',
            'jobTitle': 'Manuscript Editor',
            'email': 'tyson@withinpixels.com',
            'phone': '+1-202-555-0146',
            'address': '204 Clark Street Monsey, NY 10952',
            'birthday': null,
            'notes': ''
        },
        {
            'id': '5725a6809413bf8a0a5272b1',
            'name': 'Velazquez',
            'lastName': 'Smethley',
            'avatar': 'assets/images/avatars/Velazquez.jpg',
            'nickname': 'Strifedream',
            'company': 'ranex',
            'jobTitle': 'Publications Editor',
            'email': 'velezquez@withinpixels.com',
            'phone': '+1-202-555-0146',
            'address': '261 Cleveland Street Riverside, NJ 08075',
            'birthday': null,
            'notes': ''
        }
    ];
    ContactsFakeDb.user = [
        {
            'id': '5725a6802d10e277a0f35724',
            'name': 'John Doe',
            'avatar': 'assets/images/avatars/profile.jpg',
            'starred': [
                '5725a680ae1ae9a3c960d487',
                '5725a6801146cce777df2a08',
                '5725a680bbcec3cc32a8488a',
                '5725a680bc670af746c435e2',
                '5725a68009e20d0a9e9acf2a'
            ],
            'frequentContacts': [
                '5725a6809fdd915739187ed5',
                '5725a68031fdbb1db2c1af47',
                '5725a680606588342058356d',
                '5725a680e7eb988a58ddf303',
                '5725a6806acf030f9341e925',
                '5725a68034cb3968e1f79eac',
                '5725a6801146cce777df2a08',
                '5725a680653c265f5c79b5a9'
            ],
            'groups': [
                {
                    'id': '5725a6802d10e277a0f35739',
                    'name': 'Friends',
                    'contactIds': [
                        '5725a680bbcec3cc32a8488a',
                        '5725a680e87cb319bd9bd673',
                        '5725a6802d10e277a0f35775'
                    ]
                },
                {
                    'id': '5725a6802d10e277a0f35749',
                    'name': 'Clients',
                    'contactIds': [
                        '5725a680cd7efa56a45aea5d',
                        '5725a68018c663044be49cbf',
                        '5725a6809413bf8a0a5272b1',
                        '5725a6803d87f1b77e17b62b'
                    ]
                },
                {
                    'id': '5725a6802d10e277a0f35329',
                    'name': 'Recent Workers',
                    'contactIds': [
                        '5725a680bbcec3cc32a8488a',
                        '5725a680653c265f5c79b5a9',
                        '5725a6808a178bfd034d6ecf',
                        '5725a6801146cce777df2a08'
                    ]
                }
            ]
        }
    ];
    return ContactsFakeDb;
}());
exports.ContactsFakeDb = ContactsFakeDb;


/***/ }),

/***/ "../../../../../src/app/fuse-fake-db/e-commerce.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ECommerceFakeDb = (function () {
    function ECommerceFakeDb() {
    }
    ECommerceFakeDb.dashboard = {
        'widget1': {
            'ranges': {
                'DY': 'Yesterday',
                'DT': 'Today',
                'DTM': 'Tomorrow'
            },
            'currentRange': 'DT',
            'data': {
                'label': 'CONVERSION RATE',
                'count': {
                    'DY': 21,
                    'DT': 25,
                    'DTM': 19
                },
                'extra': {
                    'label': 'Abandoned carts',
                    'count': {
                        'DY': 3,
                        'DT': 7,
                        'DTM': 8
                    }
                }
            },
            'detail': 'You can show some detailed information about this widget in here.'
        },
        'widget2': {
            'title': 'Average Order Value',
            'data': {
                'label': '30 DAYS',
                'count': 21,
                'extra': {
                    'label': 'Last year same time',
                    'count': 14
                }
            },
            'detail': 'You can show some detailed information about this widget in here.'
        },
        'widget3': {
            'title': 'Online Visitors',
            'data': {
                'label': 'last 30 minutes',
                'count': 32,
                'extra': {
                    'label': 'Total visitors today',
                    'count': 998
                }
            },
            'detail': 'You can show some detailed information about this widget in here.'
        },
        'widget4': {
            'title': 'Profit per Visitor',
            'data': {
                'label': 'TODAY',
                'count': '3,7',
                'extra': {
                    'label': 'Yesterday',
                    'count': '2,90'
                }
            },
            'detail': 'You can show some detailed information about this widget in here.'
        },
        'widget5': {
            'title': 'Sales',
            'ranges': {
                'TW': 'This Week',
                'LW': 'Last Week',
                '2W': '2 Weeks Ago'
            },
            'mainChart': {
                '2W': [
                    {
                        'name': 'Mon',
                        'series': [
                            {
                                'name': 'Sales',
                                'value': 9
                            },
                            {
                                'name': 'Abandoned Carts',
                                'value': 37
                            }
                        ]
                    },
                    {
                        'name': 'Tue',
                        'series': [
                            {
                                'name': 'Sales',
                                'value': 12
                            },
                            {
                                'name': 'Abandoned Carts',
                                'value': 32
                            }
                        ]
                    },
                    {
                        'name': 'Wed',
                        'series': [
                            {
                                'name': 'Sales',
                                'value': 9
                            },
                            {
                                'name': 'Abandoned Carts',
                                'value': 39
                            }
                        ]
                    },
                    {
                        'name': 'Thu',
                        'series': [
                            {
                                'name': 'Sales',
                                'value': 12
                            },
                            {
                                'name': 'Abandoned Carts',
                                'value': 27
                            }
                        ]
                    },
                    {
                        'name': 'Fri',
                        'series': [
                            {
                                'name': 'Sales',
                                'value': 7
                            },
                            {
                                'name': 'Abandoned Carts',
                                'value': 18
                            }
                        ]
                    },
                    {
                        'name': 'Sat',
                        'series': [
                            {
                                'name': 'Sales',
                                'value': 8
                            },
                            {
                                'name': 'Abandoned Carts',
                                'value': 24
                            }
                        ]
                    },
                    {
                        'name': 'Sun',
                        'series': [
                            {
                                'name': 'Sales',
                                'value': 16
                            },
                            {
                                'name': 'Abandoned Carts',
                                'value': 20
                            }
                        ]
                    }
                ],
                'LW': [
                    {
                        'name': 'Mon',
                        'series': [
                            {
                                'name': 'Sales',
                                'value': 12
                            },
                            {
                                'name': 'Abandoned Carts',
                                'value': 37
                            }
                        ]
                    },
                    {
                        'name': 'Tue',
                        'series': [
                            {
                                'name': 'Sales',
                                'value': 8
                            },
                            {
                                'name': 'Abandoned Carts',
                                'value': 24
                            }
                        ]
                    },
                    {
                        'name': 'Wed',
                        'series': [
                            {
                                'name': 'Sales',
                                'value': 7
                            },
                            {
                                'name': 'Abandoned Carts',
                                'value': 51
                            }
                        ]
                    },
                    {
                        'name': 'Thu',
                        'series': [
                            {
                                'name': 'Sales',
                                'value': 13
                            },
                            {
                                'name': 'Abandoned Carts',
                                'value': 31
                            }
                        ]
                    },
                    {
                        'name': 'Fri',
                        'series': [
                            {
                                'name': 'Sales',
                                'value': 7
                            },
                            {
                                'name': 'Abandoned Carts',
                                'value': 29
                            }
                        ]
                    },
                    {
                        'name': 'Sat',
                        'series': [
                            {
                                'name': 'Sales',
                                'value': 6
                            },
                            {
                                'name': 'Abandoned Carts',
                                'value': 17
                            }
                        ]
                    },
                    {
                        'name': 'Sun',
                        'series': [
                            {
                                'name': 'Sales',
                                'value': 10
                            },
                            {
                                'name': 'Abandoned Carts',
                                'value': 31
                            }
                        ]
                    }
                ],
                'TW': [
                    {
                        'name': 'Mon',
                        'series': [
                            {
                                'name': 'Sales',
                                'value': 11
                            },
                            {
                                'name': 'Abandoned Carts',
                                'value': 42
                            }
                        ]
                    },
                    {
                        'name': 'Tue',
                        'series': [
                            {
                                'name': 'Sales',
                                'value': 10
                            },
                            {
                                'name': 'Abandoned Carts',
                                'value': 28
                            }
                        ]
                    },
                    {
                        'name': 'Wed',
                        'series': [
                            {
                                'name': 'Sales',
                                'value': 8
                            },
                            {
                                'name': 'Abandoned Carts',
                                'value': 43
                            }
                        ]
                    },
                    {
                        'name': 'Thu',
                        'series': [
                            {
                                'name': 'Sales',
                                'value': 11
                            },
                            {
                                'name': 'Abandoned Carts',
                                'value': 34
                            }
                        ]
                    },
                    {
                        'name': 'Fri',
                        'series': [
                            {
                                'name': 'Sales',
                                'value': 8
                            },
                            {
                                'name': 'Abandoned Carts',
                                'value': 20
                            }
                        ]
                    },
                    {
                        'name': 'Sat',
                        'series': [
                            {
                                'name': 'Sales',
                                'value': 10
                            },
                            {
                                'name': 'Abandoned Carts',
                                'value': 25
                            }
                        ]
                    },
                    {
                        'name': 'Sun',
                        'series': [
                            {
                                'name': 'Sales',
                                'value': 17
                            },
                            {
                                'name': 'Abandoned Carts',
                                'value': 22
                            }
                        ]
                    }
                ]
            }
        },
        'widget6': {
            'title': 'Top 5 Categories',
            'ranges': {
                'TW': 'This Week',
                'LW': 'Last Week',
                '2W': '2 Weeks Ago'
            },
            'mainChart': {
                '2W': [
                    {
                        'name': 'Women Dresses',
                        'value': 18
                    },
                    {
                        'name': 'Men Shoes',
                        'value': 12
                    },
                    {
                        'name': 'Women Shoes',
                        'value': 40
                    },
                    {
                        'name': 'Women Bags',
                        'value': 20
                    },
                    {
                        'name': 'Men T-Shirts',
                        'value': 10
                    }
                ],
                'LW': [
                    {
                        'name': 'Women Dresses',
                        'value': 17
                    },
                    {
                        'name': 'Men Shoes',
                        'value': 14
                    },
                    {
                        'name': 'Women Shoes',
                        'value': 36
                    },
                    {
                        'name': 'Women Bags',
                        'value': 23
                    },
                    {
                        'name': 'Men T-Shirts',
                        'value': 12
                    }
                ],
                'TW': [
                    {
                        'name': 'Women Dresses',
                        'value': 13
                    },
                    {
                        'name': 'Men Shoes',
                        'value': 16
                    },
                    {
                        'name': 'Women Shoes',
                        'value': 34
                    },
                    {
                        'name': 'Women Bags',
                        'value': 23
                    },
                    {
                        'name': 'Men T-Shirts',
                        'value': 14
                    }
                ]
            },
            'footerLeft': {
                'title': 'Total Sales',
                'count': {
                    '2W': 487,
                    'LW': 526,
                    'TW': 594
                }
            },
            'footerRight': {
                'title': 'Sales From Top 5 Categories',
                'count': {
                    '2W': 193,
                    'LW': 260,
                    'TW': 287
                }
            }
        },
        'widget7': {
            'title': 'Latest Customers',
            'ranges': {
                'T': 'Today',
                'TM': 'Tomorrow'
            },
            'customers': {
                'T': [
                    {
                        'name': 'Abbott Keitch',
                        'location': 'United States of America'
                    },
                    {
                        'name': 'Arnold Matlock',
                        'location': 'United States of America'
                    },
                    {
                        'name': 'Barrera Bradbury',
                        'location': 'England'
                    },
                    {
                        'name': 'Blair Strangeway',
                        'location': 'Germany'
                    },
                    {
                        'name': 'Copeland Redcliff',
                        'location': 'French'
                    },
                    {
                        'name': 'Henderson Cambias',
                        'location': 'Russia'
                    },
                    {
                        'name': 'Lily Peasegood',
                        'location': 'Mexico'
                    }
                ],
                'TM': [
                    {
                        'name': 'Boyle Winters',
                        'location': 'United States of America'
                    },
                    {
                        'name': 'Tyson Marshall',
                        'location': 'United States of America'
                    },
                    {
                        'name': 'Reyna Preece',
                        'location': 'England'
                    },
                    {
                        'name': 'Shauna Atherton',
                        'location': 'Germany'
                    },
                    {
                        'name': 'Tillman Lee',
                        'location': 'French'
                    },
                    {
                        'name': 'Velazquez Smethley',
                        'location': 'Russia'
                    },
                    {
                        'name': 'Helen Sheridan',
                        'location': 'Mexico'
                    }
                ]
            }
        }
    };
    ECommerceFakeDb.products = [
        {
            'id': '1',
            'name': 'Printed Dress',
            'handle': 'printed-dress',
            'description': 'Officia amet eiusmod eu sunt tempor voluptate laboris velit nisi amet enim proident et. Consequat laborum non eiusmod cillum eu exercitation. Qui adipisicing est fugiat eiusmod esse. Sint aliqua cupidatat pariatur mollit ad est proident reprehenderit. Eiusmod adipisicing laborum incididunt sit aliqua ullamco.',
            'categories': [
                'Dresses',
                'Women'
            ],
            'tags': [
                'dress',
                'printed'
            ],
            'images': [
                {
                    'id': 1,
                    'url': 'assets/images/ecommerce/product-image-placeholder.png',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/etc/air-balloons.jpg',
                    'type': 'image'
                },
                {
                    'id': 3,
                    'url': 'assets/images/etc/avenue.jpg',
                    'type': 'image'
                },
                {
                    'id': 4,
                    'url': 'assets/images/etc/cactus.jpg',
                    'type': 'image'
                },
                {
                    'id': 5,
                    'url': 'assets/images/etc/early-sunrise.jpg',
                    'type': 'image'
                },
                {
                    'id': 6,
                    'url': 'assets/images/etc/mountain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id': 7,
                    'url': 'assets/images/etc/road-trip.jpg',
                    'type': 'image'
                },
                {
                    'id': 8,
                    'url': 'assets/images/etc/snow.jpg',
                    'type': 'image'
                },
                {
                    'id': 9,
                    'url': 'assets/images/etc/tropical-beach.jpg',
                    'type': 'image'
                },
                {
                    'id': 10,
                    'url': 'assets/images/etc/mountain-sunset.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 9.309,
            'priceTaxIncl': 10.24,
            'taxRate': 10,
            'comparedPrice': 19.90,
            'quantity': 3,
            'sku': 'A445BV',
            'width': '22cm',
            'height': '24cm',
            'depth': '15cm',
            'weight': '3kg',
            'extraShippingFee': 3.00,
            'active': true
        },
        {
            'id': '2',
            'name': 'Green Skirt',
            'handle': 'green-skirt',
            'description': 'Duis anim est non exercitation consequat. Ullamco ut ipsum dolore est elit est ea elit ad fugiat exercitation. Adipisicing eu ad sit culpa sint. Minim irure Lorem eiusmod minim nisi sit est consectetur.',
            'categories': [
                'Skirts',
                'Women'
            ],
            'tags': [
                'dress',
                'printed'
            ],
            'images': [
                {
                    'id': 1,
                    'url': 'assets/images/ecommerce/product-image-placeholder.png',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/etc/air-balloons.jpg',
                    'type': 'image'
                },
                {
                    'id': 3,
                    'url': 'assets/images/etc/avenue.jpg',
                    'type': 'image'
                },
                {
                    'id': 4,
                    'url': 'assets/images/etc/cactus.jpg',
                    'type': 'image'
                },
                {
                    'id': 5,
                    'url': 'assets/images/etc/early-sunrise.jpg',
                    'type': 'image'
                },
                {
                    'id': 6,
                    'url': 'assets/images/etc/mountain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id': 7,
                    'url': 'assets/images/etc/road-trip.jpg',
                    'type': 'image'
                },
                {
                    'id': 8,
                    'url': 'assets/images/etc/snow.jpg',
                    'type': 'image'
                },
                {
                    'id': 9,
                    'url': 'assets/images/etc/tropical-beach.jpg',
                    'type': 'image'
                },
                {
                    'id': 10,
                    'url': 'assets/images/etc/mountain-sunset.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 22.381,
            'priceTaxIncl': 24.62,
            'taxRate': 10,
            'comparedPrice': 29.90,
            'quantity': 92,
            'sku': 'A445BV',
            'width': '22cm',
            'height': '24cm',
            'depth': '15cm',
            'weight': '3kg',
            'extraShippingFee': 3.00,
            'active': true
        },
        {
            'id': '3',
            'name': 'Printed Dress',
            'handle': 'printed-dress',
            'description': 'Sit ipsum esse eu consequat veniam sit consectetur consectetur anim. Ut Lorem dolor ullamco do. Laboris excepteur consectetur tempor nisi commodo amet deserunt duis.',
            'categories': [
                'Dresses',
                'Women'
            ],
            'tags': [
                'dress',
                'printed'
            ],
            'images': [
                {
                    'id': 1,
                    'url': 'assets/images/ecommerce/product-image-placeholder.png',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/etc/air-balloons.jpg',
                    'type': 'image'
                },
                {
                    'id': 3,
                    'url': 'assets/images/etc/avenue.jpg',
                    'type': 'image'
                },
                {
                    'id': 4,
                    'url': 'assets/images/etc/cactus.jpg',
                    'type': 'image'
                },
                {
                    'id': 5,
                    'url': 'assets/images/etc/early-sunrise.jpg',
                    'type': 'image'
                },
                {
                    'id': 6,
                    'url': 'assets/images/etc/mountain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id': 7,
                    'url': 'assets/images/etc/road-trip.jpg',
                    'type': 'image'
                },
                {
                    'id': 8,
                    'url': 'assets/images/etc/snow.jpg',
                    'type': 'image'
                },
                {
                    'id': 9,
                    'url': 'assets/images/etc/tropical-beach.jpg',
                    'type': 'image'
                },
                {
                    'id': 10,
                    'url': 'assets/images/etc/mountain-sunset.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 44.809,
            'priceTaxIncl': 49.29,
            'taxRate': 10,
            'comparedPrice': 59.90,
            'quantity': 60,
            'sku': 'A445BV',
            'width': '22cm',
            'height': '24cm',
            'depth': '15cm',
            'weight': '3kg',
            'extraShippingFee': 3.00,
            'active': true
        },
        {
            'id': '4',
            'name': 'White T-Shirt',
            'handle': 'white-t-shirt',
            'description': 'Incididunt nostrud culpa labore nostrud veniam nostrud dolore velit sunt laborum ad reprehenderit. Excepteur enim irure ut labore elit ut deserunt qui qui consequat quis do nostrud ad. Aliqua dolor labore ut occaecat laborum irure. Aute in deserunt do aute laborum sit et reprehenderit minim voluptate proident do est.',
            'categories': [
                'T-Shirts',
                'Women'
            ],
            'tags': [
                'dress',
                'printed'
            ],
            'images': [
                {
                    'id': 1,
                    'url': 'assets/images/ecommerce/product-image-placeholder.png',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/etc/air-balloons.jpg',
                    'type': 'image'
                },
                {
                    'id': 3,
                    'url': 'assets/images/etc/avenue.jpg',
                    'type': 'image'
                },
                {
                    'id': 4,
                    'url': 'assets/images/etc/cactus.jpg',
                    'type': 'image'
                },
                {
                    'id': 5,
                    'url': 'assets/images/etc/early-sunrise.jpg',
                    'type': 'image'
                },
                {
                    'id': 6,
                    'url': 'assets/images/etc/mountain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id': 7,
                    'url': 'assets/images/etc/road-trip.jpg',
                    'type': 'image'
                },
                {
                    'id': 8,
                    'url': 'assets/images/etc/snow.jpg',
                    'type': 'image'
                },
                {
                    'id': 9,
                    'url': 'assets/images/etc/tropical-beach.jpg',
                    'type': 'image'
                },
                {
                    'id': 10,
                    'url': 'assets/images/etc/mountain-sunset.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 62.827,
            'priceTaxIncl': 69.11,
            'taxRate': 10,
            'comparedPrice': 79.90,
            'quantity': 101,
            'sku': 'A445BV',
            'width': '22cm',
            'height': '24cm',
            'depth': '15cm',
            'weight': '3kg',
            'extraShippingFee': 3.00,
            'active': false
        },
        {
            'id': '5',
            'name': 'Red Hoodie',
            'handle': 'red-hoodie',
            'description': 'Laboris laborum minim qui reprehenderit duis fugiat ea anim labore incididunt duis. Officia adipisicing anim amet in sit aliqua fugiat quis do sint non velit eu. Labore occaecat labore elit voluptate Lorem adipisicing et ipsum id et reprehenderit ullamco. Elit in nulla laborum nulla quis dolor deserunt magna dolor ad anim magna. Esse aute reprehenderit anim sit est et quis est. Ex reprehenderit culpa deserunt qui sint eiusmod reprehenderit ipsum consequat ut.',
            'categories': [
                'Hoodies',
                'Women'
            ],
            'tags': [
                'dress',
                'printed'
            ],
            'images': [
                {
                    'id': 1,
                    'url': 'assets/images/ecommerce/product-image-placeholder.png',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/etc/air-balloons.jpg',
                    'type': 'image'
                },
                {
                    'id': 3,
                    'url': 'assets/images/etc/avenue.jpg',
                    'type': 'image'
                },
                {
                    'id': 4,
                    'url': 'assets/images/etc/cactus.jpg',
                    'type': 'image'
                },
                {
                    'id': 5,
                    'url': 'assets/images/etc/early-sunrise.jpg',
                    'type': 'image'
                },
                {
                    'id': 6,
                    'url': 'assets/images/etc/mountain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id': 7,
                    'url': 'assets/images/etc/road-trip.jpg',
                    'type': 'image'
                },
                {
                    'id': 8,
                    'url': 'assets/images/etc/snow.jpg',
                    'type': 'image'
                },
                {
                    'id': 9,
                    'url': 'assets/images/etc/tropical-beach.jpg',
                    'type': 'image'
                },
                {
                    'id': 10,
                    'url': 'assets/images/etc/mountain-sunset.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 9.309,
            'priceTaxIncl': 10.24,
            'taxRate': 10,
            'comparedPrice': 19.90,
            'quantity': 19,
            'sku': 'A445BV',
            'width': '22cm',
            'height': '24cm',
            'depth': '15cm',
            'weight': '3kg',
            'extraShippingFee': 3.00,
            'active': true
        },
        {
            'id': '6',
            'name': 'Red Hoodie',
            'handle': 'red-hoodie',
            'description': 'Tempor sunt tempor veniam non culpa excepteur. Ea irure elit non cupidatat cillum dolore. Sit incididunt qui dolore ipsum commodo aliqua amet cupidatat incididunt nisi qui consectetur. Cillum eu aute qui irure aute adipisicing cupidatat magna.',
            'categories': [
                'Hoodies',
                'Women'
            ],
            'tags': [
                'dress',
                'printed'
            ],
            'images': [
                {
                    'id': 1,
                    'url': 'assets/images/ecommerce/product-image-placeholder.png',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/etc/air-balloons.jpg',
                    'type': 'image'
                },
                {
                    'id': 3,
                    'url': 'assets/images/etc/avenue.jpg',
                    'type': 'image'
                },
                {
                    'id': 4,
                    'url': 'assets/images/etc/cactus.jpg',
                    'type': 'image'
                },
                {
                    'id': 5,
                    'url': 'assets/images/etc/early-sunrise.jpg',
                    'type': 'image'
                },
                {
                    'id': 6,
                    'url': 'assets/images/etc/mountain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id': 7,
                    'url': 'assets/images/etc/road-trip.jpg',
                    'type': 'image'
                },
                {
                    'id': 8,
                    'url': 'assets/images/etc/snow.jpg',
                    'type': 'image'
                },
                {
                    'id': 9,
                    'url': 'assets/images/etc/tropical-beach.jpg',
                    'type': 'image'
                },
                {
                    'id': 10,
                    'url': 'assets/images/etc/mountain-sunset.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 53.963,
            'priceTaxIncl': 59.36,
            'taxRate': 10,
            'comparedPrice': 69.90,
            'quantity': 101,
            'sku': 'A445BV',
            'width': '22cm',
            'height': '24cm',
            'depth': '15cm',
            'weight': '3kg',
            'extraShippingFee': 3.00,
            'active': true
        },
        {
            'id': '7',
            'name': 'Summer Dress',
            'handle': 'summer-dress',
            'description': 'Excepteur commodo ipsum in ex esse elit ea id voluptate id occaecat. Sunt Lorem ipsum ut proident eu aliquip velit non minim. Sunt velit deserunt veniam eu non veniam. Eiusmod sit ex et id incididunt labore aliqua eu aute dolor cillum ex mollit mollit. Incididunt voluptate adipisicing eiusmod non ipsum cupidatat excepteur enim in pariatur eu. Labore dolor qui exercitation amet labore laboris Lorem do adipisicing. Minim non consectetur adipisicing esse ut occaecat incididunt eiusmod commodo et cillum pariatur.',
            'categories': [
                'Dresses',
                'Women'
            ],
            'tags': [
                'dress',
                'printed'
            ],
            'images': [
                {
                    'id': 1,
                    'url': 'assets/images/ecommerce/product-image-placeholder.png',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/etc/air-balloons.jpg',
                    'type': 'image'
                },
                {
                    'id': 3,
                    'url': 'assets/images/etc/avenue.jpg',
                    'type': 'image'
                },
                {
                    'id': 4,
                    'url': 'assets/images/etc/cactus.jpg',
                    'type': 'image'
                },
                {
                    'id': 5,
                    'url': 'assets/images/etc/early-sunrise.jpg',
                    'type': 'image'
                },
                {
                    'id': 6,
                    'url': 'assets/images/etc/mountain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id': 7,
                    'url': 'assets/images/etc/road-trip.jpg',
                    'type': 'image'
                },
                {
                    'id': 8,
                    'url': 'assets/images/etc/snow.jpg',
                    'type': 'image'
                },
                {
                    'id': 9,
                    'url': 'assets/images/etc/tropical-beach.jpg',
                    'type': 'image'
                },
                {
                    'id': 10,
                    'url': 'assets/images/etc/mountain-sunset.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 58.372,
            'priceTaxIncl': 64.21,
            'taxRate': 10,
            'comparedPrice': 69.90,
            'quantity': 34,
            'sku': 'A445BV',
            'width': '22cm',
            'height': '24cm',
            'depth': '15cm',
            'weight': '3kg',
            'extraShippingFee': 3.00,
            'active': true
        },
        {
            'id': '8',
            'name': 'Black Shoes',
            'handle': 'black-shoes',
            'description': 'Velit cillum cupidatat eiusmod ea quis sit. Consequat dolore elit sunt sunt voluptate irure incididunt consectetur non. Dolore veniam ipsum anim commodo ex. Proident ipsum nostrud ullamco sit. Ad dolore nulla qui mollit laborum ex ipsum.',
            'categories': [
                'Shoes',
                'Women'
            ],
            'tags': [
                'dress',
                'printed'
            ],
            'images': [
                {
                    'id': 1,
                    'url': 'assets/images/ecommerce/product-image-placeholder.png',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/etc/air-balloons.jpg',
                    'type': 'image'
                },
                {
                    'id': 3,
                    'url': 'assets/images/etc/avenue.jpg',
                    'type': 'image'
                },
                {
                    'id': 4,
                    'url': 'assets/images/etc/cactus.jpg',
                    'type': 'image'
                },
                {
                    'id': 5,
                    'url': 'assets/images/etc/early-sunrise.jpg',
                    'type': 'image'
                },
                {
                    'id': 6,
                    'url': 'assets/images/etc/mountain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id': 7,
                    'url': 'assets/images/etc/road-trip.jpg',
                    'type': 'image'
                },
                {
                    'id': 8,
                    'url': 'assets/images/etc/snow.jpg',
                    'type': 'image'
                },
                {
                    'id': 9,
                    'url': 'assets/images/etc/tropical-beach.jpg',
                    'type': 'image'
                },
                {
                    'id': 10,
                    'url': 'assets/images/etc/mountain-sunset.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 63.390,
            'priceTaxIncl': 69.73,
            'taxRate': 10,
            'comparedPrice': 79.90,
            'quantity': 4,
            'sku': 'A445BV',
            'width': '22cm',
            'height': '24cm',
            'depth': '15cm',
            'weight': '3kg',
            'extraShippingFee': 3.00,
            'active': false
        },
        {
            'id': '9',
            'name': 'Yellow Bag',
            'handle': 'yellow-bag',
            'description': 'Consequat minim velit commodo Lorem ipsum velit elit amet ut. In deserunt id duis nisi labore. Proident cillum et reprehenderit excepteur ex nulla enim.',
            'categories': [
                'Bags',
                'Women'
            ],
            'tags': [
                'dress',
                'printed'
            ],
            'images': [
                {
                    'id': 1,
                    'url': 'assets/images/ecommerce/product-image-placeholder.png',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/etc/air-balloons.jpg',
                    'type': 'image'
                },
                {
                    'id': 3,
                    'url': 'assets/images/etc/avenue.jpg',
                    'type': 'image'
                },
                {
                    'id': 4,
                    'url': 'assets/images/etc/cactus.jpg',
                    'type': 'image'
                },
                {
                    'id': 5,
                    'url': 'assets/images/etc/early-sunrise.jpg',
                    'type': 'image'
                },
                {
                    'id': 6,
                    'url': 'assets/images/etc/mountain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id': 7,
                    'url': 'assets/images/etc/road-trip.jpg',
                    'type': 'image'
                },
                {
                    'id': 8,
                    'url': 'assets/images/etc/snow.jpg',
                    'type': 'image'
                },
                {
                    'id': 9,
                    'url': 'assets/images/etc/tropical-beach.jpg',
                    'type': 'image'
                },
                {
                    'id': 10,
                    'url': 'assets/images/etc/mountain-sunset.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 52.154,
            'priceTaxIncl': 57.37,
            'taxRate': 10,
            'comparedPrice': 59.90,
            'quantity': 58,
            'sku': 'A445BV',
            'width': '22cm',
            'height': '24cm',
            'depth': '15cm',
            'weight': '3kg',
            'extraShippingFee': 3.00,
            'active': true
        },
        {
            'id': '10',
            'name': 'Brown Shoes',
            'handle': 'brown-shoes',
            'description': 'Proident do sunt dolor tempor aliquip adipisicing dolor reprehenderit officia proident. Culpa non reprehenderit velit anim consequat velit elit eu culpa quis incididunt id. Eu incididunt exercitation nostrud est mollit officia. Laboris deserunt dolore sit occaecat exercitation quis sunt sunt nisi commodo.',
            'categories': [
                'Shoes',
                'Women'
            ],
            'tags': [
                'dress',
                'printed'
            ],
            'images': [
                {
                    'id': 1,
                    'url': 'assets/images/ecommerce/product-image-placeholder.png',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/etc/air-balloons.jpg',
                    'type': 'image'
                },
                {
                    'id': 3,
                    'url': 'assets/images/etc/avenue.jpg',
                    'type': 'image'
                },
                {
                    'id': 4,
                    'url': 'assets/images/etc/cactus.jpg',
                    'type': 'image'
                },
                {
                    'id': 5,
                    'url': 'assets/images/etc/early-sunrise.jpg',
                    'type': 'image'
                },
                {
                    'id': 6,
                    'url': 'assets/images/etc/mountain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id': 7,
                    'url': 'assets/images/etc/road-trip.jpg',
                    'type': 'image'
                },
                {
                    'id': 8,
                    'url': 'assets/images/etc/snow.jpg',
                    'type': 'image'
                },
                {
                    'id': 9,
                    'url': 'assets/images/etc/tropical-beach.jpg',
                    'type': 'image'
                },
                {
                    'id': 10,
                    'url': 'assets/images/etc/mountain-sunset.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 62.18,
            'priceTaxIncl': 68.40,
            'taxRate': 10,
            'comparedPrice': 69.90,
            'quantity': 125,
            'sku': 'A445BV',
            'width': '22cm',
            'height': '24cm',
            'depth': '15cm',
            'weight': '3kg',
            'extraShippingFee': 3.00,
            'active': true
        },
        {
            'id': '11',
            'name': 'Brown Shoes',
            'handle': 'brown-shoes',
            'description': 'Aute do cupidatat amet excepteur. Adipisicing est exercitation ullamco velit pariatur ex id laborum ex consectetur velit et eiusmod. Do laborum commodo veniam adipisicing aute cillum. Adipisicing est minim voluptate aliqua nostrud.',
            'categories': [
                'Shoes',
                'Women'
            ],
            'tags': [
                'dress',
                'printed'
            ],
            'images': [
                {
                    'id': 1,
                    'url': 'assets/images/ecommerce/product-image-placeholder.png',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/etc/air-balloons.jpg',
                    'type': 'image'
                },
                {
                    'id': 3,
                    'url': 'assets/images/etc/avenue.jpg',
                    'type': 'image'
                },
                {
                    'id': 4,
                    'url': 'assets/images/etc/cactus.jpg',
                    'type': 'image'
                },
                {
                    'id': 5,
                    'url': 'assets/images/etc/early-sunrise.jpg',
                    'type': 'image'
                },
                {
                    'id': 6,
                    'url': 'assets/images/etc/mountain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id': 7,
                    'url': 'assets/images/etc/road-trip.jpg',
                    'type': 'image'
                },
                {
                    'id': 8,
                    'url': 'assets/images/etc/snow.jpg',
                    'type': 'image'
                },
                {
                    'id': 9,
                    'url': 'assets/images/etc/tropical-beach.jpg',
                    'type': 'image'
                },
                {
                    'id': 10,
                    'url': 'assets/images/etc/mountain-sunset.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 48.727,
            'priceTaxIncl': 53.60,
            'taxRate': 10,
            'comparedPrice': 69.90,
            'quantity': 27,
            'sku': 'A445BV',
            'width': '22cm',
            'height': '24cm',
            'depth': '15cm',
            'weight': '3kg',
            'extraShippingFee': 3.00,
            'active': true
        },
        {
            'id': '12',
            'name': 'Night Dress',
            'handle': 'night-dress',
            'description': 'Ex culpa et enim aute labore deserunt. Culpa occaecat nostrud culpa elit Lorem deserunt qui nulla ea elit veniam ea. Qui ullamco ullamco minim esse excepteur magna aliquip Lorem tempor ut aliqua sunt ad. Lorem minim tempor aliqua in in. In nisi esse ea eiusmod consequat sint.',
            'categories': [
                'Dresses',
                'Women'
            ],
            'tags': [
                'dress',
                'printed'
            ],
            'images': [
                {
                    'id': 1,
                    'url': 'assets/images/ecommerce/product-image-placeholder.png',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/etc/air-balloons.jpg',
                    'type': 'image'
                },
                {
                    'id': 3,
                    'url': 'assets/images/etc/avenue.jpg',
                    'type': 'image'
                },
                {
                    'id': 4,
                    'url': 'assets/images/etc/cactus.jpg',
                    'type': 'image'
                },
                {
                    'id': 5,
                    'url': 'assets/images/etc/early-sunrise.jpg',
                    'type': 'image'
                },
                {
                    'id': 6,
                    'url': 'assets/images/etc/mountain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id': 7,
                    'url': 'assets/images/etc/road-trip.jpg',
                    'type': 'image'
                },
                {
                    'id': 8,
                    'url': 'assets/images/etc/snow.jpg',
                    'type': 'image'
                },
                {
                    'id': 9,
                    'url': 'assets/images/etc/tropical-beach.jpg',
                    'type': 'image'
                },
                {
                    'id': 10,
                    'url': 'assets/images/etc/mountain-sunset.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 9.309,
            'priceTaxIncl': 10.24,
            'taxRate': 10,
            'comparedPrice': 19.90,
            'quantity': 188,
            'sku': 'A445BV',
            'width': '22cm',
            'height': '24cm',
            'depth': '15cm',
            'weight': '3kg',
            'extraShippingFee': 3.00,
            'active': true
        },
        {
            'id': '13',
            'name': 'Red Hoodie',
            'handle': 'red-hoodie',
            'description': 'Aliquip cillum qui in consectetur ullamco ipsum ea esse eu non nostrud cillum velit minim. Deserunt est do non mollit incididunt enim non consectetur dolore ullamco do ad enim aliqua. Velit ipsum duis sunt sint dolore reprehenderit aute sint sunt esse laborum.',
            'categories': [
                'Hoodies',
                'Women'
            ],
            'tags': [
                'dress',
                'printed'
            ],
            'images': [
                {
                    'id': 1,
                    'url': 'assets/images/ecommerce/product-image-placeholder.png',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/etc/air-balloons.jpg',
                    'type': 'image'
                },
                {
                    'id': 3,
                    'url': 'assets/images/etc/avenue.jpg',
                    'type': 'image'
                },
                {
                    'id': 4,
                    'url': 'assets/images/etc/cactus.jpg',
                    'type': 'image'
                },
                {
                    'id': 5,
                    'url': 'assets/images/etc/early-sunrise.jpg',
                    'type': 'image'
                },
                {
                    'id': 6,
                    'url': 'assets/images/etc/mountain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id': 7,
                    'url': 'assets/images/etc/road-trip.jpg',
                    'type': 'image'
                },
                {
                    'id': 8,
                    'url': 'assets/images/etc/snow.jpg',
                    'type': 'image'
                },
                {
                    'id': 9,
                    'url': 'assets/images/etc/tropical-beach.jpg',
                    'type': 'image'
                },
                {
                    'id': 10,
                    'url': 'assets/images/etc/mountain-sunset.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 22.381,
            'priceTaxIncl': 24.62,
            'taxRate': 10,
            'comparedPrice': 29.90,
            'quantity': 147,
            'sku': 'A445BV',
            'width': '22cm',
            'height': '24cm',
            'depth': '15cm',
            'weight': '3kg',
            'extraShippingFee': 3.00,
            'active': false
        },
        {
            'id': '14',
            'name': 'Red Hoodie',
            'handle': 'red-hoodie',
            'description': 'Proident excepteur consectetur elit eiusmod ipsum in pariatur voluptate laborum ex ullamco. Nisi cupidatat officia veniam eiusmod enim do aute labore dolor in nostrud sunt pariatur ex. Dolore elit non excepteur sint proident aliqua in aliquip irure elit.',
            'categories': [
                'Hoodies',
                'Women'
            ],
            'tags': [
                'dress',
                'printed'
            ],
            'images': [
                {
                    'id': 1,
                    'url': 'assets/images/ecommerce/product-image-placeholder.png',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/etc/air-balloons.jpg',
                    'type': 'image'
                },
                {
                    'id': 3,
                    'url': 'assets/images/etc/avenue.jpg',
                    'type': 'image'
                },
                {
                    'id': 4,
                    'url': 'assets/images/etc/cactus.jpg',
                    'type': 'image'
                },
                {
                    'id': 5,
                    'url': 'assets/images/etc/early-sunrise.jpg',
                    'type': 'image'
                },
                {
                    'id': 6,
                    'url': 'assets/images/etc/mountain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id': 7,
                    'url': 'assets/images/etc/road-trip.jpg',
                    'type': 'image'
                },
                {
                    'id': 8,
                    'url': 'assets/images/etc/snow.jpg',
                    'type': 'image'
                },
                {
                    'id': 9,
                    'url': 'assets/images/etc/tropical-beach.jpg',
                    'type': 'image'
                },
                {
                    'id': 10,
                    'url': 'assets/images/etc/mountain-sunset.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 44.809,
            'priceTaxIncl': 49.29,
            'taxRate': 10,
            'comparedPrice': 59.90,
            'quantity': 21,
            'sku': 'A445BV',
            'width': '22cm',
            'height': '24cm',
            'depth': '15cm',
            'weight': '3kg',
            'extraShippingFee': 3.00,
            'active': false
        },
        {
            'id': '15',
            'name': 'Summer Dress',
            'handle': 'summer-dress',
            'description': 'Exercitation consectetur eiusmod nisi aliqua adipisicing nisi sit eiusmod. Quis ex est in cillum sit consequat ut mollit excepteur ipsum. Culpa Lorem magna cillum qui tempor nisi eiusmod occaecat veniam eiusmod officia culpa. Incididunt est nulla incididunt quis dolore duis id laborum magna veniam velit amet nostrud. Ad deserunt velit dolor irure exercitation reprehenderit nisi occaecat officia anim. Minim eiusmod aliquip eu do ipsum excepteur in reprehenderit voluptate laborum ullamco anim.',
            'categories': [
                'Dresses',
                'Women'
            ],
            'tags': [
                'dress',
                'printed'
            ],
            'images': [
                {
                    'id': 1,
                    'url': 'assets/images/ecommerce/product-image-placeholder.png',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/etc/air-balloons.jpg',
                    'type': 'image'
                },
                {
                    'id': 3,
                    'url': 'assets/images/etc/avenue.jpg',
                    'type': 'image'
                },
                {
                    'id': 4,
                    'url': 'assets/images/etc/cactus.jpg',
                    'type': 'image'
                },
                {
                    'id': 5,
                    'url': 'assets/images/etc/early-sunrise.jpg',
                    'type': 'image'
                },
                {
                    'id': 6,
                    'url': 'assets/images/etc/mountain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id': 7,
                    'url': 'assets/images/etc/road-trip.jpg',
                    'type': 'image'
                },
                {
                    'id': 8,
                    'url': 'assets/images/etc/snow.jpg',
                    'type': 'image'
                },
                {
                    'id': 9,
                    'url': 'assets/images/etc/tropical-beach.jpg',
                    'type': 'image'
                },
                {
                    'id': 10,
                    'url': 'assets/images/etc/mountain-sunset.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 62.827,
            'priceTaxIncl': 69.11,
            'taxRate': 10,
            'comparedPrice': 79.90,
            'quantity': 10,
            'sku': 'A445BV',
            'width': '22cm',
            'height': '24cm',
            'depth': '15cm',
            'weight': '3kg',
            'extraShippingFee': 3.00,
            'active': true
        },
        {
            'id': '16',
            'name': 'Red Hoodie',
            'handle': 'red-hoodie',
            'description': 'Deserunt exercitation Lorem est tempor. Elit magna irure dolore pariatur culpa elit labore laborum anim ad excepteur esse. Irure qui proident irure elit exercitation qui cupidatat mollit in excepteur nulla. Laboris exercitation culpa irure non ea in incididunt est. Dolor ipsum proident esse ea ipsum culpa nulla officia ad ipsum excepteur. Commodo veniam cillum non eu anim exercitation.',
            'categories': [
                'Hoodies',
                'Women'
            ],
            'tags': [
                'dress',
                'printed'
            ],
            'images': [
                {
                    'id': 1,
                    'url': 'assets/images/ecommerce/product-image-placeholder.png',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/etc/air-balloons.jpg',
                    'type': 'image'
                },
                {
                    'id': 3,
                    'url': 'assets/images/etc/avenue.jpg',
                    'type': 'image'
                },
                {
                    'id': 4,
                    'url': 'assets/images/etc/cactus.jpg',
                    'type': 'image'
                },
                {
                    'id': 5,
                    'url': 'assets/images/etc/early-sunrise.jpg',
                    'type': 'image'
                },
                {
                    'id': 6,
                    'url': 'assets/images/etc/mountain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id': 7,
                    'url': 'assets/images/etc/road-trip.jpg',
                    'type': 'image'
                },
                {
                    'id': 8,
                    'url': 'assets/images/etc/snow.jpg',
                    'type': 'image'
                },
                {
                    'id': 9,
                    'url': 'assets/images/etc/tropical-beach.jpg',
                    'type': 'image'
                },
                {
                    'id': 10,
                    'url': 'assets/images/etc/mountain-sunset.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 9.309,
            'priceTaxIncl': 10.24,
            'taxRate': 10,
            'comparedPrice': 19.90,
            'quantity': 68,
            'sku': 'A445BV',
            'width': '22cm',
            'height': '24cm',
            'depth': '15cm',
            'weight': '3kg',
            'extraShippingFee': 3.00,
            'active': true
        },
        {
            'id': '17',
            'name': 'Printed Dress',
            'handle': 'printed-dress',
            'description': 'Labore adipisicing exercitation velit minim nostrud excepteur eu esse. Dolor ullamco exercitation consequat cupidatat amet qui occaecat anim pariatur aute anim enim aute fugiat. Enim sint eiusmod amet nulla consequat aute culpa elit. Laborum laboris duis do quis do dolor incididunt id culpa laborum non est. Commodo ullamco labore duis occaecat est pariatur voluptate occaecat et voluptate occaecat sit.',
            'categories': [
                'Dresses',
                'Women'
            ],
            'tags': [
                'dress',
                'printed'
            ],
            'images': [
                {
                    'id': 1,
                    'url': 'assets/images/ecommerce/product-image-placeholder.png',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/etc/air-balloons.jpg',
                    'type': 'image'
                },
                {
                    'id': 3,
                    'url': 'assets/images/etc/avenue.jpg',
                    'type': 'image'
                },
                {
                    'id': 4,
                    'url': 'assets/images/etc/cactus.jpg',
                    'type': 'image'
                },
                {
                    'id': 5,
                    'url': 'assets/images/etc/early-sunrise.jpg',
                    'type': 'image'
                },
                {
                    'id': 6,
                    'url': 'assets/images/etc/mountain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id': 7,
                    'url': 'assets/images/etc/road-trip.jpg',
                    'type': 'image'
                },
                {
                    'id': 8,
                    'url': 'assets/images/etc/snow.jpg',
                    'type': 'image'
                },
                {
                    'id': 9,
                    'url': 'assets/images/etc/tropical-beach.jpg',
                    'type': 'image'
                },
                {
                    'id': 10,
                    'url': 'assets/images/etc/mountain-sunset.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 53.963,
            'priceTaxIncl': 59.36,
            'taxRate': 10,
            'comparedPrice': 69.90,
            'quantity': 66,
            'sku': 'A445BV',
            'width': '22cm',
            'height': '24cm',
            'depth': '15cm',
            'weight': '3kg',
            'extraShippingFee': 3.00,
            'active': false
        },
        {
            'id': '18',
            'name': 'Blouse',
            'handle': 'blouse',
            'description': 'Id dolor sunt deserunt adipisicing nostrud sit enim magna. Eu ut ea qui ullamco aute. Elit do non anim labore culpa aliquip eu ullamco magna aliqua culpa velit. Culpa nisi laboris cupidatat ea in officia est ex.',
            'categories': [
                'Dresses',
                'Women'
            ],
            'tags': [
                'dress',
                'printed'
            ],
            'images': [
                {
                    'id': 1,
                    'url': 'assets/images/ecommerce/product-image-placeholder.png',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/etc/air-balloons.jpg',
                    'type': 'image'
                },
                {
                    'id': 3,
                    'url': 'assets/images/etc/avenue.jpg',
                    'type': 'image'
                },
                {
                    'id': 4,
                    'url': 'assets/images/etc/cactus.jpg',
                    'type': 'image'
                },
                {
                    'id': 5,
                    'url': 'assets/images/etc/early-sunrise.jpg',
                    'type': 'image'
                },
                {
                    'id': 6,
                    'url': 'assets/images/etc/mountain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id': 7,
                    'url': 'assets/images/etc/road-trip.jpg',
                    'type': 'image'
                },
                {
                    'id': 8,
                    'url': 'assets/images/etc/snow.jpg',
                    'type': 'image'
                },
                {
                    'id': 9,
                    'url': 'assets/images/etc/tropical-beach.jpg',
                    'type': 'image'
                },
                {
                    'id': 10,
                    'url': 'assets/images/etc/mountain-sunset.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 58.372,
            'priceTaxIncl': 64.21,
            'taxRate': 10,
            'comparedPrice': 69.90,
            'quantity': 60,
            'sku': 'A445BV',
            'width': '22cm',
            'height': '24cm',
            'depth': '15cm',
            'weight': '3kg',
            'extraShippingFee': 3.00,
            'active': true
        },
        {
            'id': '19',
            'name': 'Leather Belt',
            'handle': 'leather-belt',
            'description': 'Enim adipisicing commodo laboris voluptate minim officia irure aliqua exercitation ad. Laboris in elit culpa aute aliquip ex fugiat enim labore. Ut commodo magna dolore dolore officia exercitation non enim id. Est proident enim incididunt consectetur consequat magna consequat esse veniam ea cillum laboris fugiat incididunt.',
            'categories': [
                'Belts',
                'Women'
            ],
            'tags': [
                'dress',
                'printed'
            ],
            'images': [
                {
                    'id': 1,
                    'url': 'assets/images/ecommerce/product-image-placeholder.png',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/etc/air-balloons.jpg',
                    'type': 'image'
                },
                {
                    'id': 3,
                    'url': 'assets/images/etc/avenue.jpg',
                    'type': 'image'
                },
                {
                    'id': 4,
                    'url': 'assets/images/etc/cactus.jpg',
                    'type': 'image'
                },
                {
                    'id': 5,
                    'url': 'assets/images/etc/early-sunrise.jpg',
                    'type': 'image'
                },
                {
                    'id': 6,
                    'url': 'assets/images/etc/mountain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id': 7,
                    'url': 'assets/images/etc/road-trip.jpg',
                    'type': 'image'
                },
                {
                    'id': 8,
                    'url': 'assets/images/etc/snow.jpg',
                    'type': 'image'
                },
                {
                    'id': 9,
                    'url': 'assets/images/etc/tropical-beach.jpg',
                    'type': 'image'
                },
                {
                    'id': 10,
                    'url': 'assets/images/etc/mountain-sunset.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 63.390,
            'priceTaxIncl': 69.73,
            'taxRate': 10,
            'comparedPrice': 79.90,
            'quantity': 78,
            'sku': 'A445BV',
            'width': '22cm',
            'height': '24cm',
            'depth': '15cm',
            'weight': '3kg',
            'extraShippingFee': 3.00,
            'active': true
        },
        {
            'id': '20',
            'name': 'Leather Belt',
            'handle': 'leather-belt',
            'description': 'Id et id ad consequat non exercitation laboris enim. Cillum nulla nulla elit ipsum in aliquip culpa fugiat est nulla id adipisicing et. Occaecat aliqua esse dolor aliquip veniam ad amet nisi ipsum. Et aliquip culpa adipisicing Lorem ipsum aute non dolor eu deserunt ex consequat.',
            'categories': [
                'Belts',
                'Women'
            ],
            'tags': [
                'dress',
                'printed'
            ],
            'images': [
                {
                    'id': 1,
                    'url': 'assets/images/ecommerce/product-image-placeholder.png',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/etc/air-balloons.jpg',
                    'type': 'image'
                },
                {
                    'id': 3,
                    'url': 'assets/images/etc/avenue.jpg',
                    'type': 'image'
                },
                {
                    'id': 4,
                    'url': 'assets/images/etc/cactus.jpg',
                    'type': 'image'
                },
                {
                    'id': 5,
                    'url': 'assets/images/etc/early-sunrise.jpg',
                    'type': 'image'
                },
                {
                    'id': 6,
                    'url': 'assets/images/etc/mountain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id': 7,
                    'url': 'assets/images/etc/road-trip.jpg',
                    'type': 'image'
                },
                {
                    'id': 8,
                    'url': 'assets/images/etc/snow.jpg',
                    'type': 'image'
                },
                {
                    'id': 9,
                    'url': 'assets/images/etc/tropical-beach.jpg',
                    'type': 'image'
                },
                {
                    'id': 10,
                    'url': 'assets/images/etc/mountain-sunset.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 52.154,
            'priceTaxIncl': 57.37,
            'taxRate': 10,
            'comparedPrice': 59.90,
            'quantity': 2,
            'sku': 'A445BV',
            'width': '22cm',
            'height': '24cm',
            'depth': '15cm',
            'weight': '3kg',
            'extraShippingFee': 3.00,
            'active': true
        }
    ];
    ECommerceFakeDb.orders = [
        {
            'id': 1,
            'reference': '70d4d7d0',
            'subtotal': '39.97',
            'tax': '77.44',
            'discount': '-10.17',
            'total': '73.31',
            'date': '2015/04/25 02:07:59',
            'customer': {
                'id': 1,
                'firstName': 'Dollie',
                'lastName': 'Bullock',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'Printed Dress',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 2,
                    'name': 'Green Skirt',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 3,
                    'name': 'Printed Dress',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status': [
                {
                    'id': 13,
                    'name': 'On pre-order (not paid)',
                    'color': 'mat-purple-300-bg',
                    'date': '2016/04/03 10:06:18'
                },
                {
                    'id': 1,
                    'name': 'Awaiting check payment',
                    'color': 'mat-blue-500-bg',
                    'date': '2015/03/17 18:28:37'
                }
            ],
            'payment': {
                'transactionId': '2a894b9e',
                'amount': '73.31',
                'method': 'Credit Card',
                'date': '2016/02/23 15:50:23'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'TNT',
                    'weight': '10.44',
                    'fee': '7.00',
                    'date': '2015/04/10 07:03:52'
                }
            ]
        },
        {
            'id': 2,
            'reference': '2003479c',
            'subtotal': '98.68',
            'tax': '45.55',
            'discount': '-10.25',
            'total': '24.51',
            'date': '2015/11/07 15:47:31',
            'customer': {
                'id': 1,
                'firstName': 'Holmes',
                'lastName': 'Hines',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'Printed Dress',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 2,
                    'name': 'Green Skirt',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 3,
                    'name': 'Printed Dress',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status': [
                {
                    'id': 2,
                    'name': 'Payment accepted',
                    'color': 'mat-green-500-bg',
                    'date': '2015/10/04 08:54:33'
                },
                {
                    'id': 1,
                    'name': 'Awaiting check payment',
                    'color': 'mat-blue-500-bg',
                    'date': '2015/05/03 03:43:04'
                }
            ],
            'payment': {
                'transactionId': '79c640c8',
                'amount': '24.51',
                'method': 'Check',
                'date': '2015/04/22 04:49:49'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'USPS',
                    'weight': '2.92',
                    'fee': '4.00',
                    'date': '2015/07/11 14:57:12'
                }
            ]
        },
        {
            'id': 3,
            'reference': '09f5443b',
            'subtotal': '23.03',
            'tax': '16.36',
            'discount': '-19.46',
            'total': '87.17',
            'date': '2015/11/26 16:04:40',
            'customer': {
                'id': 1,
                'firstName': 'Serena',
                'lastName': 'Glover',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'Printed Dress',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 2,
                    'name': 'Green Skirt',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 3,
                    'name': 'Printed Dress',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status': [
                {
                    'id': 8,
                    'name': 'Payment error',
                    'color': 'mat-red-900-bg',
                    'date': '2015/07/02 20:44:34'
                },
                {
                    'id': 3,
                    'name': 'Preparing the order',
                    'color': 'mat-orange-500-bg',
                    'date': '2015/03/23 04:59:45'
                }
            ],
            'payment': {
                'transactionId': '5ff44b0c',
                'amount': '87.17',
                'method': 'PayPal',
                'date': '2016/01/25 11:46:28'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'USPS',
                    'weight': '7.53',
                    'fee': '7.00',
                    'date': '2015/11/25 00:40:54'
                }
            ]
        },
        {
            'id': 4,
            'reference': '960898d0',
            'subtotal': '13.47',
            'tax': '53.45',
            'discount': '-15.55',
            'total': '26.98',
            'date': '2015/11/23 05:35:18',
            'customer': {
                'id': 1,
                'firstName': 'Dianne',
                'lastName': 'Prince',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'Printed Dress',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 2,
                    'name': 'Green Skirt',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 3,
                    'name': 'Printed Dress',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status': [
                {
                    'id': 5,
                    'name': 'Delivered',
                    'color': 'mat-green-800-bg',
                    'date': '2015/10/26 16:12:47'
                },
                {
                    'id': 4,
                    'name': 'Shipped',
                    'color': 'mat-purple-500-bg',
                    'date': '2016/02/06 06:42:37'
                }
            ],
            'payment': {
                'transactionId': '787d49b1',
                'amount': '26.98',
                'method': 'Check',
                'date': '2015/03/07 05:50:57'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'FedEx',
                    'weight': '11.93',
                    'fee': '5.00',
                    'date': '2016/03/21 07:08:26'
                }
            ]
        },
        {
            'id': 5,
            'reference': '2d7f68de',
            'subtotal': '46.93',
            'tax': '12.14',
            'discount': '-19.16',
            'total': '12.97',
            'date': '2015/01/13 06:21:21',
            'customer': {
                'id': 1,
                'firstName': 'Frankie',
                'lastName': 'Hewitt',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'Printed Dress',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 2,
                    'name': 'Green Skirt',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 3,
                    'name': 'Printed Dress',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status': [
                {
                    'id': 8,
                    'name': 'Payment error',
                    'color': 'mat-red-900-bg',
                    'date': '2015/02/01 09:21:46'
                },
                {
                    'id': 6,
                    'name': 'Canceled',
                    'color': 'mat-pink-500-bg',
                    'date': '2015/11/16 04:48:32'
                }
            ],
            'payment': {
                'transactionId': 'cd8c4727',
                'amount': '12.97',
                'method': 'Bank-wire',
                'date': '2016/05/15 21:15:32'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'USPS',
                    'weight': '5.43',
                    'fee': '3.00',
                    'date': '2016/01/06 00:51:59'
                }
            ]
        },
        {
            'id': 6,
            'reference': '9c991708',
            'subtotal': '32.55',
            'tax': '11.81',
            'discount': '-12.33',
            'total': '30.96',
            'date': '2015/01/17 04:21:08',
            'customer': {
                'id': 1,
                'firstName': 'Cole',
                'lastName': 'Holcomb',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'Printed Dress',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 2,
                    'name': 'Green Skirt',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 3,
                    'name': 'Printed Dress',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status': [
                {
                    'id': 3,
                    'name': 'Preparing the order',
                    'color': 'mat-orange-500-bg',
                    'date': '2015/11/30 01:04:32'
                },
                {
                    'id': 2,
                    'name': 'Payment accepted',
                    'color': 'mat-green-500-bg',
                    'date': '2015/11/12 21:27:18'
                }
            ],
            'payment': {
                'transactionId': 'a41f4b7c',
                'amount': '30.96',
                'method': 'Check',
                'date': '2015/04/27 03:59:22'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'FedEx',
                    'weight': '6.05',
                    'fee': '4.00',
                    'date': '2015/09/10 11:28:47'
                }
            ]
        },
        {
            'id': 7,
            'reference': '7683b54d',
            'subtotal': '14.08',
            'tax': '74.96',
            'discount': '-16.60',
            'total': '63.36',
            'date': '2015/06/14 14:49:47',
            'customer': {
                'id': 1,
                'firstName': 'Merrill',
                'lastName': 'Richardson',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'Printed Dress',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 2,
                    'name': 'Green Skirt',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 3,
                    'name': 'Printed Dress',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status': [
                {
                    'id': 11,
                    'name': 'Awaiting PayPal payment',
                    'color': 'mat-blue-500-bg',
                    'date': '2015/09/03 18:53:02'
                },
                {
                    'id': 13,
                    'name': 'On pre-order (not paid)',
                    'color': 'mat-purple-300-bg',
                    'date': '2015/12/13 18:14:40'
                }
            ],
            'payment': {
                'transactionId': 1974588,
                'amount': '63.36',
                'method': 'PayPal',
                'date': '2015/11/28 22:24:58'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'FedEx',
                    'weight': '2.89',
                    'fee': '3.00',
                    'date': '2016/02/10 09:03:44'
                }
            ]
        },
        {
            'id': 8,
            'reference': 'c1de0f75',
            'subtotal': '13.77',
            'tax': '55.78',
            'discount': '-17.20',
            'total': '45.74',
            'date': '2015/01/18 01:31:47',
            'customer': {
                'id': 1,
                'firstName': 'Morgan',
                'lastName': 'Pitts',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'Printed Dress',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 2,
                    'name': 'Green Skirt',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 3,
                    'name': 'Printed Dress',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status': [
                {
                    'id': 4,
                    'name': 'Shipped',
                    'color': 'mat-purple-500-bg',
                    'date': '2015/04/29 07:57:43'
                },
                {
                    'id': 3,
                    'name': 'Preparing the order',
                    'color': 'mat-orange-500-bg',
                    'date': '2015/04/23 11:14:38'
                }
            ],
            'payment': {
                'transactionId': '1e704aaf',
                'amount': '45.74',
                'method': 'Credit Card',
                'date': '2015/06/08 03:50:41'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'USPS',
                    'weight': '6.35',
                    'fee': '2.00',
                    'date': '2015/06/01 09:18:26'
                }
            ]
        },
        {
            'id': 9,
            'reference': '35a4dbc6',
            'subtotal': '56.49',
            'tax': '11.44',
            'discount': '-17.45',
            'total': '15.31',
            'date': '2016/02/14 14:22:58',
            'customer': {
                'id': 1,
                'firstName': 'Krista',
                'lastName': 'Mathis',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'Printed Dress',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 2,
                    'name': 'Green Skirt',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 3,
                    'name': 'Printed Dress',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status': [
                {
                    'id': 12,
                    'name': 'Remote payment accepted',
                    'color': 'mat-green-500-bg',
                    'date': '2015/07/15 15:48:00'
                },
                {
                    'id': 14,
                    'name': 'Awaiting Cash-on-delivery payment',
                    'color': 'mat-blue-500-bg',
                    'date': '2015/11/08 18:30:15'
                }
            ],
            'payment': {
                'transactionId': '762c4e1a',
                'amount': '15.31',
                'method': 'Bank-wire',
                'date': '2015/06/19 14:52:53'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'USPS',
                    'weight': '7.93',
                    'fee': '8.00',
                    'date': '2015/08/25 15:18:55'
                }
            ]
        },
        {
            'id': 10,
            'reference': 'a8bc5b17',
            'subtotal': '29.34',
            'tax': '87.50',
            'discount': '-18.11',
            'total': '20.97',
            'date': '2015/10/23 03:02:55',
            'customer': {
                'id': 1,
                'firstName': 'Hayden',
                'lastName': 'Fitzgerald',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'Printed Dress',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 2,
                    'name': 'Green Skirt',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 3,
                    'name': 'Printed Dress',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status': [
                {
                    'id': 5,
                    'name': 'Delivered',
                    'color': 'mat-green-800-bg',
                    'date': '2016/05/02 09:53:55'
                },
                {
                    'id': 2,
                    'name': 'Payment accepted',
                    'color': 'mat-green-500-bg',
                    'date': '2015/07/11 05:33:31'
                }
            ],
            'payment': {
                'transactionId': '3dce47a3',
                'amount': '20.97',
                'method': 'Credit Card',
                'date': '2015/07/28 23:53:49'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'TNT',
                    'weight': '9.20',
                    'fee': '2.00',
                    'date': '2015/08/05 08:45:55'
                }
            ]
        },
        {
            'id': 11,
            'reference': '54ab8191',
            'subtotal': '50.35',
            'tax': '71.75',
            'discount': '-10.46',
            'total': '72.30',
            'date': '2015/07/28 13:22:49',
            'customer': {
                'id': 1,
                'firstName': 'Cotton',
                'lastName': 'Carlson',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'Printed Dress',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 2,
                    'name': 'Green Skirt',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 3,
                    'name': 'Printed Dress',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status': [
                {
                    'id': 9,
                    'name': 'On pre-order (paid)',
                    'color': 'mat-purple-300-bg',
                    'date': '2016/02/26 14:15:38'
                },
                {
                    'id': 4,
                    'name': 'Shipped',
                    'color': 'mat-purple-500-bg',
                    'date': '2015/10/17 03:32:39'
                }
            ],
            'payment': {
                'transactionId': 'f4154419',
                'amount': '72.30',
                'method': 'PayPal',
                'date': '2016/03/07 15:10:12'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'USPS',
                    'weight': '2.81',
                    'fee': '7.00',
                    'date': '2016/05/01 11:15:22'
                }
            ]
        },
        {
            'id': 12,
            'reference': '6919050',
            'subtotal': '81.95',
            'tax': '22.44',
            'discount': '-10.89',
            'total': '42.54',
            'date': '2015/06/07 17:54:36',
            'customer': {
                'id': 1,
                'firstName': 'Kaye',
                'lastName': 'Baldwin',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'Printed Dress',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 2,
                    'name': 'Green Skirt',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 3,
                    'name': 'Printed Dress',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status': [
                {
                    'id': 10,
                    'name': 'Awaiting bank wire payment',
                    'color': 'mat-blue-500-bg',
                    'date': '2015/09/01 20:50:07'
                },
                {
                    'id': 12,
                    'name': 'Remote payment accepted',
                    'color': 'mat-green-500-bg',
                    'date': '2016/02/13 21:19:04'
                }
            ],
            'payment': {
                'transactionId': 44464979,
                'amount': '42.54',
                'method': 'Credit Card',
                'date': '2015/06/30 11:59:49'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'FedEx',
                    'weight': '5.52',
                    'fee': '2.00',
                    'date': '2015/03/15 07:08:37'
                }
            ]
        },
        {
            'id': 13,
            'reference': '1d4e89f0',
            'subtotal': '67.10',
            'tax': '46.96',
            'discount': '-11.64',
            'total': '97.49',
            'date': '2016/02/06 13:26:55',
            'customer': {
                'id': 1,
                'firstName': 'Iva',
                'lastName': 'Clark',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'Printed Dress',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 2,
                    'name': 'Green Skirt',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 3,
                    'name': 'Printed Dress',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status': [
                {
                    'id': 6,
                    'name': 'Canceled',
                    'color': 'mat-pink-500-bg',
                    'date': '2015/03/31 03:01:12'
                },
                {
                    'id': 8,
                    'name': 'Payment error',
                    'color': 'mat-red-900-bg',
                    'date': '2016/03/11 18:53:35'
                }
            ],
            'payment': {
                'transactionId': '2aef4aa3',
                'amount': '97.49',
                'method': 'Check',
                'date': '2015/05/13 13:28:52'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'TNT',
                    'weight': '5.37',
                    'fee': '6.00',
                    'date': '2015/04/22 01:48:15'
                }
            ]
        },
        {
            'id': 14,
            'reference': 'd897564e',
            'subtotal': '55.50',
            'tax': '48.92',
            'discount': '-18.45',
            'total': '16.95',
            'date': '2016/01/17 04:23:11',
            'customer': {
                'id': 1,
                'firstName': 'Shauna',
                'lastName': 'Rosales',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'Printed Dress',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 2,
                    'name': 'Green Skirt',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 3,
                    'name': 'Printed Dress',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status': [
                {
                    'id': 7,
                    'name': 'Refunded',
                    'color': 'mat-red-500-bg',
                    'date': '2015/12/29 15:34:46'
                },
                {
                    'id': 11,
                    'name': 'Awaiting PayPal payment',
                    'color': 'mat-blue-500-bg',
                    'date': '2015/07/14 19:10:43'
                }
            ],
            'payment': {
                'transactionId': 'b7ea43c9',
                'amount': '16.95',
                'method': 'PayPal',
                'date': '2015/07/11 07:18:06'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'TNT',
                    'weight': '6.49',
                    'fee': '6.00',
                    'date': '2015/01/05 13:42:13'
                }
            ]
        },
        {
            'id': 15,
            'reference': '1a803de2',
            'subtotal': '13.73',
            'tax': '64.42',
            'discount': '-19.64',
            'total': '20.34',
            'date': '2015/09/26 14:26:33',
            'customer': {
                'id': 1,
                'firstName': 'Carroll',
                'lastName': 'Dotson',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'Printed Dress',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 2,
                    'name': 'Green Skirt',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 3,
                    'name': 'Printed Dress',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status': [
                {
                    'id': 1,
                    'name': 'Awaiting check payment',
                    'color': 'mat-blue-500-bg',
                    'date': '2015/12/21 10:42:21'
                },
                {
                    'id': 6,
                    'name': 'Canceled',
                    'color': 'mat-pink-500-bg',
                    'date': '2016/02/11 05:58:55'
                }
            ],
            'payment': {
                'transactionId': '0633458c',
                'amount': '20.34',
                'method': 'Check',
                'date': '2015/07/17 20:54:14'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'TNT',
                    'weight': '3.30',
                    'fee': '2.00',
                    'date': '2015/11/04 14:08:16'
                }
            ]
        },
        {
            'id': 16,
            'reference': '7d90eaa6',
            'subtotal': '99.07',
            'tax': '31.36',
            'discount': '-18.23',
            'total': '10.64',
            'date': '2015/08/10 14:28:10',
            'customer': {
                'id': 1,
                'firstName': 'Jeannie',
                'lastName': 'Reese',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'Printed Dress',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 2,
                    'name': 'Green Skirt',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 3,
                    'name': 'Printed Dress',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status': [
                {
                    'id': 9,
                    'name': 'On pre-order (paid)',
                    'color': 'mat-purple-300-bg',
                    'date': '2015/06/20 08:37:46'
                },
                {
                    'id': 2,
                    'name': 'Payment accepted',
                    'color': 'mat-green-500-bg',
                    'date': '2015/01/01 01:42:21'
                }
            ],
            'payment': {
                'transactionId': '45f7440a',
                'amount': '10.64',
                'method': 'PayPal',
                'date': '2015/11/23 11:14:47'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'USPS',
                    'weight': '9.94',
                    'fee': '6.00',
                    'date': '2016/04/30 19:17:39'
                }
            ]
        },
        {
            'id': 17,
            'reference': 'cf9b4bfc',
            'subtotal': '96.93',
            'tax': '74.32',
            'discount': '-12.63',
            'total': '27.06',
            'date': '2015/11/10 16:54:11',
            'customer': {
                'id': 1,
                'firstName': 'Dena',
                'lastName': 'Rowe',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'Printed Dress',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 2,
                    'name': 'Green Skirt',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 3,
                    'name': 'Printed Dress',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status': [
                {
                    'id': 5,
                    'name': 'Delivered',
                    'color': 'mat-green-800-bg',
                    'date': '2015/03/23 00:18:52'
                },
                {
                    'id': 3,
                    'name': 'Preparing the order',
                    'color': 'mat-orange-500-bg',
                    'date': '2015/03/22 04:48:12'
                }
            ],
            'payment': {
                'transactionId': '966f4c8e',
                'amount': '27.06',
                'method': 'PayPal',
                'date': '2015/07/10 17:22:44'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'FedEx',
                    'weight': '6.81',
                    'fee': '3.00',
                    'date': '2015/01/23 07:31:46'
                }
            ]
        },
        {
            'id': 18,
            'reference': '07a938c4',
            'subtotal': '67.73',
            'tax': '33.33',
            'discount': '-12.33',
            'total': '91.50',
            'date': '2015/08/26 16:24:38',
            'customer': {
                'id': 1,
                'firstName': 'Blankenship',
                'lastName': 'Lynch',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'Printed Dress',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 2,
                    'name': 'Green Skirt',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 3,
                    'name': 'Printed Dress',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status': [
                {
                    'id': 6,
                    'name': 'Canceled',
                    'color': 'mat-pink-500-bg',
                    'date': '2016/03/24 22:56:35'
                },
                {
                    'id': 4,
                    'name': 'Shipped',
                    'color': 'mat-purple-500-bg',
                    'date': '2016/04/09 13:33:26'
                }
            ],
            'payment': {
                'transactionId': '411a4e97',
                'amount': '91.50',
                'method': 'PayPal',
                'date': '2016/02/05 05:35:52'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'USPS',
                    'weight': '6.11',
                    'fee': '7.00',
                    'date': '2015/10/20 10:46:31'
                }
            ]
        },
        {
            'id': 19,
            'reference': 'd460f4ff',
            'subtotal': '15.83',
            'tax': '41.90',
            'discount': '-16.54',
            'total': '47.99',
            'date': '2015/01/04 21:13:53',
            'customer': {
                'id': 1,
                'firstName': 'Whitley',
                'lastName': 'Mcgee',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'Printed Dress',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 2,
                    'name': 'Green Skirt',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 3,
                    'name': 'Printed Dress',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status': [
                {
                    'id': 7,
                    'name': 'Refunded',
                    'color': 'mat-red-500-bg',
                    'date': '2015/08/10 17:14:57'
                },
                {
                    'id': 5,
                    'name': 'Delivered',
                    'color': 'mat-green-800-bg',
                    'date': '2016/03/30 01:38:14'
                }
            ],
            'payment': {
                'transactionId': '761943c2',
                'amount': '47.99',
                'method': 'PayPal',
                'date': '2015/10/11 20:10:46'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'USPS',
                    'weight': '5.51',
                    'fee': '5.00',
                    'date': '2015/08/28 21:24:36'
                }
            ]
        },
        {
            'id': 20,
            'reference': 'ba6a946d',
            'subtotal': '36.84',
            'tax': '20.12',
            'discount': '-14.57',
            'total': '44.40',
            'date': '2015/02/24 00:57:18',
            'customer': {
                'id': 1,
                'firstName': 'Hood',
                'lastName': 'Hodges',
                'avatar': 'assets/images/avatars/Abbott.jpg',
                'company': 'Saois',
                'jobTitle': 'Digital Archivist',
                'email': 'abbott@withinpixels.com',
                'phone': '+1-202-555-0175',
                'invoiceAddress': {
                    'address': '704 6th Ave, New York, NY 10010, USA',
                    'lat': 40.7424739,
                    'lng': -73.99283919999999
                },
                'shippingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat': 41.2183223,
                    'lng': -95.8420876
                }
            },
            'products': [
                {
                    'id': 1,
                    'name': 'Printed Dress',
                    'price': '10.24',
                    'quantity': 1,
                    'total': '10.24',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 2,
                    'name': 'Green Skirt',
                    'price': '24.62',
                    'quantity': 1,
                    'total': '24.62',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                },
                {
                    'id': 3,
                    'name': 'Printed Dress',
                    'price': '49.29',
                    'quantity': 1,
                    'total': '49.29',
                    'image': 'assets/images/ecommerce/product-image-placeholder.png'
                }
            ],
            'status': [
                {
                    'id': 10,
                    'name': 'Awaiting bank wire payment',
                    'color': 'mat-blue-500-bg',
                    'date': '2015/05/19 11:09:56'
                },
                {
                    'id': 12,
                    'name': 'Remote payment accepted',
                    'color': 'mat-green-500-bg',
                    'date': '2015/03/27 05:02:33'
                }
            ],
            'payment': {
                'transactionId': '4af94368',
                'amount': '44.40',
                'method': 'PayPal',
                'date': '2015/11/11 14:25:39'
            },
            'shippingDetails': [
                {
                    'tracking': '',
                    'carrier': 'USPS',
                    'weight': '3.63',
                    'fee': '5.00',
                    'date': '2016/03/01 09:07:49'
                }
            ]
        }
    ];
    return ECommerceFakeDb;
}());
exports.ECommerceFakeDb = ECommerceFakeDb;


/***/ }),

/***/ "../../../../../src/app/fuse-fake-db/faq.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FaqFakeDb = (function () {
    function FaqFakeDb() {
    }
    FaqFakeDb.data = [
        {
            'question': 'Proident tempor est nulla irure ad est?',
            'answer': 'Id nulla nulla proident deserunt deserunt proident in quis. Cillum reprehenderit labore id anim laborum.'
        },
        {
            'question': 'Ullamco duis commodo sint ad aliqua aute?',
            'answer': 'Sunt laborum enim nostrud ea fugiat cillum mollit aliqua exercitation ad elit.'
        },
        {
            'question': 'Eiusmod non occaecat pariatur Lorem in ex?',
            'answer': 'Nostrud anim mollit incididunt qui qui sit commodo duis. Anim amet irure aliquip duis nostrud sit quis fugiat ullamco non dolor labore. Lorem sunt voluptate laboris culpa proident. Aute eiusmod aliqua exercitation irure exercitation qui laboris mollit occaecat eu occaecat fugiat.'
        },
        {
            'question': 'Lorem magna cillum consequat consequat mollit?',
            'answer': 'Velit ipsum proident ea incididunt et. Consectetur eiusmod laborum voluptate duis occaecat ullamco sint enim proident.'
        },
        {
            'question': 'Quis irure cupidatat ad consequat reprehenderit excepteur?',
            'answer': 'Esse nisi mollit aliquip mollit aute consequat adipisicing. Do excepteur dolore proident cupidatat pariatur irure consequat incididunt.'
        },
        {
            'question': 'Officia voluptate tempor ut mollit ea cillum?',
            'answer': 'Deserunt veniam reprehenderit do elit magna ut.'
        },
        {
            'question': 'Sunt fugiat officia nisi minim sunt duis?',
            'answer': 'Eiusmod eiusmod sint aliquip exercitation cillum. Magna nulla officia ex consectetur ea ad excepteur in qui.'
        },
        {
            'question': 'Non cupidatat enim quis aliquip minim laborum?',
            'answer': 'Qui cillum eiusmod nostrud sunt dolore velit nostrud labore voluptate ad dolore. Eu Lorem anim pariatur aliqua. Ullamco ut dolor velit esse occaecat dolore eu cillum commodo qui. Nulla dolor consequat voluptate magna ut commodo magna consectetur non aute proident.'
        },
        {
            'question': 'Dolor ex occaecat magna labore laboris qui?',
            'answer': 'Incididunt qui excepteur eiusmod elit cillum occaecat voluptate cillum nostrud. Dolor ullamco ullamco eiusmod do sunt adipisicing pariatur. In esse esse labore id reprehenderit sint do. Pariatur culpa dolor tempor qui excepteur duis do anim minim ipsum.'
        },
        {
            'question': 'Nisi et ullamco minim ea proident tempor?',
            'answer': 'Dolor veniam dolor cillum Lorem magna nisi in occaecat nulla dolor ea eiusmod.'
        },
        {
            'question': 'Amet sunt et quis amet commodo quis?',
            'answer': 'Nulla dolore consequat aliqua sint consequat elit qui occaecat et.'
        },
        {
            'question': 'Ut eiusmod ex ea eiusmod culpa incididunt?',
            'answer': 'Fugiat non incididunt officia ex incididunt occaecat. Voluptate nostrud culpa aliquip mollit incididunt non dolore.'
        },
        {
            'question': 'Proident reprehenderit laboris pariatur ut et nisi?',
            'answer': 'Reprehenderit proident ut ad cillum quis velit quis aliqua ut aliquip tempor ullamco.'
        },
        {
            'question': 'Aliqua aliquip aliquip aliquip et exercitation aute?',
            'answer': 'Adipisicing Lorem tempor ex anim. Labore tempor laboris nostrud dolore voluptate ullamco. Fugiat ex deserunt anim minim esse velit laboris aute ea duis incididunt. Elit irure id Lorem incididunt laborum aliquip consectetur est irure sunt. Ut labore anim nisi aliqua tempor laborum nulla cillum. Duis irure consequat cillum magna cillum eiusmod ut. Et exercitation voluptate quis deserunt elit quis dolor deserunt ex ex esse ex.'
        }
    ];
    return FaqFakeDb;
}());
exports.FaqFakeDb = FaqFakeDb;


/***/ }),

/***/ "../../../../../src/app/fuse-fake-db/file-manager.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FileManagerFakeDb = (function () {
    function FileManagerFakeDb() {
    }
    FileManagerFakeDb.files = [
        {
            'name': 'Work Documents',
            'type': 'folder',
            'owner': 'me',
            'size': '',
            'modified': 'July 8, 2017',
            'opened': 'July 8, 2017',
            'created': 'July 8, 2017',
            'extention': '',
            'location': 'My Files > Documents',
            'offline': true
        },
        {
            'name': 'Public Documents',
            'type': 'folder',
            'owner': 'public',
            'size': '',
            'modified': 'July 8, 2017',
            'opened': 'July 8, 2017',
            'created': 'July 8, 2017',
            'extention': '',
            'location': 'My Files > Documents',
            'offline': true
        },
        {
            'name': 'Private Documents',
            'type': 'folder',
            'owner': 'me',
            'size': '',
            'modified': 'July 8, 2017',
            'opened': 'July 8, 2017',
            'created': 'July 8, 2017',
            'extention': '',
            'location': 'My Files > Documents',
            'offline': true
        },
        {
            'name': 'Ongoing projects',
            'type': 'document',
            'owner': 'Emily Bennett',
            'size': '1.2 Mb',
            'modified': 'July 8, 2017',
            'opened': 'July 8, 2017',
            'created': 'July 8, 2017',
            'extention': '',
            'location': 'My Files > Documents',
            'offline': true,
            'preview': 'assets/images/etc/sample-file-preview.jpg'
        },
        {
            'name': 'Shopping list',
            'type': 'document',
            'owner': 'Emily Bennett',
            'size': '980 Kb',
            'modified': 'July 8, 2017',
            'opened': 'July 8, 2017',
            'created': 'July 8, 2017',
            'extention': '',
            'location': 'My Files > Documents',
            'offline': true,
            'preview': 'assets/images/etc/sample-file-preview.jpg'
        },
        {
            'name': 'Invoices',
            'type': 'spreadsheet',
            'owner': 'Emily Bennett',
            'size': '750 Kb',
            'modified': 'July 8, 2017',
            'opened': 'July 8, 2017',
            'created': 'July 8, 2017',
            'extention': '',
            'location': 'My Files > Documents',
            'offline': true,
            'preview': 'assets/images/etc/sample-file-preview.jpg'
        },
        {
            'name': 'Crash logs',
            'type': 'document',
            'owner': 'Emily Bennett',
            'size': '980 Mb',
            'modified': 'July 8, 2017',
            'opened': 'July 8, 2017',
            'created': 'July 8, 2017',
            'extention': '',
            'location': 'My Files > Documents',
            'offline': true,
            'preview': 'assets/images/etc/sample-file-preview.jpg'
        },
        {
            'name': 'System logs',
            'type': 'document',
            'owner': 'Emily Bennett',
            'size': '52 Kb',
            'modified': 'July 8, 2017',
            'opened': 'July 8, 2017',
            'created': 'July 8, 2017',
            'extention': '',
            'location': 'My Files > Documents',
            'offline': true,
            'preview': 'assets/images/etc/sample-file-preview.jpg'
        },
        {
            'name': 'Prices',
            'type': 'spreadsheet',
            'owner': 'Emily Bennett',
            'size': '27 Mb',
            'modified': 'July 8, 2017',
            'opened': 'July 8, 2017',
            'created': 'July 8, 2017',
            'extention': '',
            'location': 'My Files > Documents',
            'offline': true,
            'preview': 'assets/images/etc/sample-file-preview.jpg'
        },
        {
            'name': 'Anabelle Manual',
            'type': 'document',
            'owner': 'Emily Bennett',
            'size': '1.1 Kb',
            'modified': 'July 8, 2017',
            'opened': 'July 8, 2017',
            'created': 'July 8, 2017',
            'extention': '',
            'location': 'My Files > Documents',
            'offline': true,
            'preview': 'assets/images/etc/sample-file-preview.jpg'
        },
        {
            'name': 'Steam summer sale budget',
            'type': 'spreadsheet',
            'owner': 'Emily Bennett',
            'size': '505 Kb',
            'modified': 'July 8, 2017',
            'opened': 'July 8, 2017',
            'created': 'July 8, 2017',
            'extention': '',
            'location': 'My Files > Documents',
            'offline': true,
            'preview': 'assets/images/etc/sample-file-preview.jpg'
        }
    ];
    return FileManagerFakeDb;
}());
exports.FileManagerFakeDb = FileManagerFakeDb;


/***/ }),

/***/ "../../../../../src/app/fuse-fake-db/fuse-fake-db.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mail_1 = __webpack_require__("../../../../../src/app/fuse-fake-db/mail.ts");
var chat_1 = __webpack_require__("../../../../../src/app/fuse-fake-db/chat.ts");
var calendar_1 = __webpack_require__("../../../../../src/app/fuse-fake-db/calendar.ts");
var todo_1 = __webpack_require__("../../../../../src/app/fuse-fake-db/todo.ts");
var profile_1 = __webpack_require__("../../../../../src/app/fuse-fake-db/profile.ts");
var contacts_1 = __webpack_require__("../../../../../src/app/fuse-fake-db/contacts.ts");
var invoice_1 = __webpack_require__("../../../../../src/app/fuse-fake-db/invoice.ts");
var file_manager_1 = __webpack_require__("../../../../../src/app/fuse-fake-db/file-manager.ts");
var search_1 = __webpack_require__("../../../../../src/app/fuse-fake-db/search.ts");
var quick_panel_1 = __webpack_require__("../../../../../src/app/fuse-fake-db/quick-panel.ts");
var icons_1 = __webpack_require__("../../../../../src/app/fuse-fake-db/icons.ts");
var projects_dashboard_1 = __webpack_require__("../../../../../src/app/fuse-fake-db/projects-dashboard.ts");
var scrumboard_1 = __webpack_require__("../../../../../src/app/fuse-fake-db/scrumboard.ts");
var faq_1 = __webpack_require__("../../../../../src/app/fuse-fake-db/faq.ts");
var knowledge_base_1 = __webpack_require__("../../../../../src/app/fuse-fake-db/knowledge-base.ts");
var e_commerce_1 = __webpack_require__("../../../../../src/app/fuse-fake-db/e-commerce.ts");
var academy_1 = __webpack_require__("../../../../../src/app/fuse-fake-db/academy.ts");
var FuseFakeDbService = (function () {
    function FuseFakeDbService() {
    }
    FuseFakeDbService.prototype.createDb = function () {
        return {
            'mail-mails': mail_1.MailFakeDb.mails,
            'mail-folders': mail_1.MailFakeDb.folders,
            'mail-filters': mail_1.MailFakeDb.filters,
            'mail-labels': mail_1.MailFakeDb.labels,
            'chat-contacts': chat_1.ChatFakeDb.contacts,
            'chat-chats': chat_1.ChatFakeDb.chats,
            'chat-user': chat_1.ChatFakeDb.user,
            'calendar': calendar_1.CalendarFakeDb.data,
            'todo-todos': todo_1.TodoFakeDb.todos,
            'todo-filters': todo_1.TodoFakeDb.filters,
            'todo-tags': todo_1.TodoFakeDb.tags,
            'profile-timeline': profile_1.ProfileFakeDb.timeline,
            'profile-photos-videos': profile_1.ProfileFakeDb.photosVideos,
            'profile-about': profile_1.ProfileFakeDb.about,
            'contacts-contacts': contacts_1.ContactsFakeDb.contacts,
            'contacts-user': contacts_1.ContactsFakeDb.user,
            'invoice': invoice_1.InvoiceFakeDb.invoice,
            'file-manager': file_manager_1.FileManagerFakeDb.files,
            'search-classic': search_1.SearchFakeDb.classic,
            'search-table': search_1.SearchFakeDb.table,
            'quick-panel-notes': quick_panel_1.QuickPanelFakeDb.notes,
            'quick-panel-events': quick_panel_1.QuickPanelFakeDb.events,
            'icons': icons_1.IconsFakeDb.icons,
            'projects-dashboard-projects': projects_dashboard_1.ProjectsDashboardDb.projects,
            //        'projects-dashboard-widgets' : ProjectsDashboardDb.widgets,
            'scrumboard-boards': scrumboard_1.ScrumboardFakeDb.boards,
            'faq': faq_1.FaqFakeDb.data,
            'knowledge-base': knowledge_base_1.KnowledgeBaseFakeDb.data,
            'e-commerce-dashboard': e_commerce_1.ECommerceFakeDb.dashboard,
            'e-commerce-products': e_commerce_1.ECommerceFakeDb.products,
            'e-commerce-orders': e_commerce_1.ECommerceFakeDb.orders,
            'academy-categories': academy_1.AcademyFakeDb.categories,
            'academy-courses': academy_1.AcademyFakeDb.courses,
            'academy-course': academy_1.AcademyFakeDb.course
        };
    };
    return FuseFakeDbService;
}());
exports.FuseFakeDbService = FuseFakeDbService;


/***/ }),

/***/ "../../../../../src/app/fuse-fake-db/icons.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IconsFakeDb = (function () {
    function IconsFakeDb() {
    }
    IconsFakeDb.icons = [
        '3d_rotation',
        'ac_unit',
        'access_alarm',
        'access_alarms',
        'access_time',
        'accessibility',
        'accessible',
        'account_balance',
        'account_balance_wallet',
        'account_box',
        'account_circle',
        'adb',
        'add',
        'add_a_photo',
        'add_alarm',
        'add_alert',
        'add_box',
        'add_circle',
        'add_circle_outline',
        'add_location',
        'add_shopping_cart',
        'add_to_photos',
        'add_to_queue',
        'adjust',
        'airline_seat_flat',
        'airline_seat_flat_angled',
        'airline_seat_individual_suite',
        'airline_seat_legroom_extra',
        'airline_seat_legroom_normal',
        'airline_seat_legroom_reduced',
        'airline_seat_recline_extra',
        'airline_seat_recline_normal',
        'airplanemode_active',
        'airplanemode_inactive',
        'airplay',
        'airport_shuttle',
        'alarm',
        'alarm_add',
        'alarm_off',
        'alarm_on',
        'album',
        'all_inclusive',
        'all_out',
        'android',
        'announcement',
        'apps',
        'archive',
        'arrow_back',
        'arrow_downward',
        'arrow_drop_down',
        'arrow_drop_down_circle',
        'arrow_drop_up',
        'arrow_forward',
        'arrow_upward',
        'art_track',
        'aspect_ratio',
        'assessment',
        'assignment',
        'assignment_ind',
        'assignment_late',
        'assignment_return',
        'assignment_returned',
        'assignment_turned_in',
        'assistant',
        'assistant_photo',
        'attach_file',
        'attach_money',
        'attachment',
        'audiotrack',
        'autorenew',
        'av_timer',
        'backspace',
        'backup',
        'battery_alert',
        'battery_charging_full',
        'battery_full',
        'battery_std',
        'battery_unknown',
        'beach_access',
        'beenhere',
        'block',
        'bluetooth',
        'bluetooth_audio',
        'bluetooth_connected',
        'bluetooth_disabled',
        'bluetooth_searching',
        'blur_circular',
        'blur_linear',
        'blur_off',
        'blur_on',
        'book',
        'bookmark',
        'bookmark_border',
        'border_all',
        'border_bottom',
        'border_clear',
        'border_color',
        'border_horizontal',
        'border_inner',
        'border_left',
        'border_outer',
        'border_right',
        'border_style',
        'border_top',
        'border_vertical',
        'branding_watermark',
        'brightness_1',
        'brightness_2',
        'brightness_3',
        'brightness_4',
        'brightness_5',
        'brightness_6',
        'brightness_7',
        'brightness_auto',
        'brightness_high',
        'brightness_low',
        'brightness_medium',
        'broken_image',
        'brush',
        'bubble_chart',
        'bug_report',
        'build',
        'burst_mode',
        'business',
        'business_center',
        'cached',
        'cake',
        'call',
        'call_end',
        'call_made',
        'call_merge',
        'call_missed',
        'call_missed_outgoing',
        'call_received',
        'call_split',
        'call_to_action',
        'camera',
        'camera_alt',
        'camera_enhance',
        'camera_front',
        'camera_rear',
        'camera_roll',
        'cancel',
        'card_giftcard',
        'card_membership',
        'card_travel',
        'casino',
        'cast',
        'cast_connected',
        'center_focus_strong',
        'center_focus_weak',
        'change_history',
        'chat',
        'chat_bubble',
        'chat_bubble_outline',
        'check',
        'check_box',
        'check_box_outline_blank',
        'check_circle',
        'chevron_left',
        'chevron_right',
        'child_care',
        'child_friendly',
        'chrome_reader_mode',
        'class',
        'clear',
        'clear_all',
        'close',
        'closed_caption',
        'cloud',
        'cloud_circle',
        'cloud_done',
        'cloud_download',
        'cloud_off',
        'cloud_queue',
        'cloud_upload',
        'code',
        'collections',
        'collections_bookmark',
        'color_lens',
        'colorize',
        'comment',
        'compare',
        'compare_arrows',
        'computer',
        'confirmation_number',
        'contact_mail',
        'contact_phone',
        'contacts',
        'content_copy',
        'content_cut',
        'content_paste',
        'control_point',
        'control_point_duplicate',
        'copyright',
        'create',
        'create_new_folder',
        'credit_card',
        'crop',
        'crop_16_9',
        'crop_3_2',
        'crop_5_4',
        'crop_7_5',
        'crop_din',
        'crop_free',
        'crop_landscape',
        'crop_original',
        'crop_portrait',
        'crop_rotate',
        'crop_square',
        'dashboard',
        'data_usage',
        'date_range',
        'dehaze',
        'delete',
        'delete_forever',
        'delete_sweep',
        'description',
        'desktop_mac',
        'desktop_windows',
        'details',
        'developer_board',
        'developer_mode',
        'device_hub',
        'devices',
        'devices_other',
        'dialer_sip',
        'dialpad',
        'directions',
        'directions_bike',
        'directions_boat',
        'directions_bus',
        'directions_car',
        'directions_railway',
        'directions_run',
        'directions_subway',
        'directions_transit',
        'directions_walk',
        'disc_full',
        'dns',
        'do_not_disturb',
        'do_not_disturb_alt',
        'do_not_disturb_off',
        'do_not_disturb_on',
        'dock',
        'domain',
        'done',
        'done_all',
        'donut_large',
        'donut_small',
        'drafts',
        'drag_handle',
        'drive_eta',
        'dvr',
        'edit',
        'edit_location',
        'eject',
        'email',
        'enhanced_encryption',
        'equalizer',
        'error',
        'error_outline',
        'euro_symbol',
        'ev_station',
        'event',
        'event_available',
        'event_busy',
        'event_note',
        'event_seat',
        'exit_to_app',
        'expand_less',
        'expand_more',
        'explicit',
        'explore',
        'exposure',
        'exposure_neg_1',
        'exposure_neg_2',
        'exposure_plus_1',
        'exposure_plus_2',
        'exposure_zero',
        'extension',
        'face',
        'fast_forward',
        'fast_rewind',
        'favorite',
        'favorite_border',
        'featured_play_list',
        'featured_video',
        'feedback',
        'fiber_dvr',
        'fiber_manual_record',
        'fiber_new',
        'fiber_pin',
        'fiber_smart_record',
        'file_download',
        'file_upload',
        'filter',
        'filter_1',
        'filter_2',
        'filter_3',
        'filter_4',
        'filter_5',
        'filter_6',
        'filter_7',
        'filter_8',
        'filter_9',
        'filter_9_plus',
        'filter_b_and_w',
        'filter_center_focus',
        'filter_drama',
        'filter_frames',
        'filter_hdr',
        'filter_list',
        'filter_none',
        'filter_tilt_shift',
        'filter_vintage',
        'find_in_page',
        'find_replace',
        'fingerprint',
        'first_page',
        'fitness_center',
        'flag',
        'flare',
        'flash_auto',
        'flash_off',
        'flash_on',
        'flight',
        'flight_land',
        'flight_takeoff',
        'flip',
        'flip_to_back',
        'flip_to_front',
        'folder',
        'folder_open',
        'folder_shared',
        'folder_special',
        'font_download',
        'format_align_center',
        'format_align_justify',
        'format_align_left',
        'format_align_right',
        'format_bold',
        'format_clear',
        'format_color_fill',
        'format_color_reset',
        'format_color_text',
        'format_indent_decrease',
        'format_indent_increase',
        'format_italic',
        'format_line_spacing',
        'format_list_bulleted',
        'format_list_numbered',
        'format_paint',
        'format_quote',
        'format_shapes',
        'format_size',
        'format_strikethrough',
        'format_textdirection_l_to_r',
        'format_textdirection_r_to_l',
        'format_underlined',
        'forum',
        'forward',
        'forward_10',
        'forward_30',
        'forward_5',
        'free_breakfast',
        'fullscreen',
        'fullscreen_exit',
        'functions',
        'g_translate',
        'gamepad',
        'games',
        'gavel',
        'gesture',
        'get_app',
        'gif',
        'golf_course',
        'gps_fixed',
        'gps_not_fixed',
        'gps_off',
        'grade',
        'gradient',
        'grain',
        'graphic_eq',
        'grid_off',
        'grid_on',
        'group',
        'group_add',
        'group_work',
        'hd',
        'hdr_off',
        'hdr_on',
        'hdr_strong',
        'hdr_weak',
        'headset',
        'headset_mic',
        'healing',
        'hearing',
        'help',
        'help_outline',
        'high_quality',
        'highlight',
        'highlight_off',
        'history',
        'home',
        'hot_tub',
        'hotel',
        'hourglass_empty',
        'hourglass_full',
        'http',
        'https',
        'image',
        'image_aspect_ratio',
        'import_contacts',
        'import_export',
        'important_devices',
        'inbox',
        'indeterminate_check_box',
        'info',
        'info_outline',
        'input',
        'insert_chart',
        'insert_comment',
        'insert_drive_file',
        'insert_emoticon',
        'insert_invitation',
        'insert_link',
        'insert_photo',
        'invert_colors',
        'invert_colors_off',
        'iso',
        'keyboard',
        'keyboard_arrow_down',
        'keyboard_arrow_left',
        'keyboard_arrow_right',
        'keyboard_arrow_up',
        'keyboard_backspace',
        'keyboard_capslock',
        'keyboard_hide',
        'keyboard_return',
        'keyboard_tab',
        'keyboard_voice',
        'kitchen',
        'label',
        'label_outline',
        'landscape',
        'language',
        'laptop',
        'laptop_chromebook',
        'laptop_mac',
        'laptop_windows',
        'last_page',
        'launch',
        'layers',
        'layers_clear',
        'leak_add',
        'leak_remove',
        'lens',
        'library_add',
        'library_books',
        'library_music',
        'lightbulb_outline',
        'line_style',
        'line_weight',
        'linear_scale',
        'link',
        'linked_camera',
        'list',
        'live_help',
        'live_tv',
        'local_activity',
        'local_airport',
        'local_atm',
        'local_bar',
        'local_cafe',
        'local_car_wash',
        'local_convenience_store',
        'local_dining',
        'local_drink',
        'local_florist',
        'local_gas_station',
        'local_grocery_store',
        'local_hospital',
        'local_hotel',
        'local_laundry_service',
        'local_library',
        'local_mall',
        'local_movies',
        'local_offer',
        'local_parking',
        'local_pharmacy',
        'local_phone',
        'local_pizza',
        'local_play',
        'local_post_office',
        'local_printshop',
        'local_see',
        'local_shipping',
        'local_taxi',
        'location_city',
        'location_disabled',
        'location_off',
        'location_on',
        'location_searching',
        'lock',
        'lock_open',
        'lock_outline',
        'looks',
        'looks_3',
        'looks_4',
        'looks_5',
        'looks_6',
        'looks_one',
        'looks_two',
        'loop',
        'loupe',
        'low_priority',
        'loyalty',
        'mail',
        'mail_outline',
        'map',
        'markunread',
        'markunread_mailbox',
        'memory',
        'menu',
        'merge_type',
        'message',
        'mic',
        'mic_none',
        'mic_off',
        'mms',
        'mode_comment',
        'mode_edit',
        'monetization_on',
        'money_off',
        'monochrome_photos',
        'mood',
        'mood_bad',
        'more',
        'more_horiz',
        'more_vert',
        'motorcycle',
        'mouse',
        'move_to_inbox',
        'movie',
        'movie_creation',
        'movie_filter',
        'multiline_chart',
        'music_note',
        'music_video',
        'my_location',
        'nature',
        'nature_people',
        'navigate_before',
        'navigate_next',
        'navigation',
        'near_me',
        'network_cell',
        'network_check',
        'network_locked',
        'network_wifi',
        'new_releases',
        'next_week',
        'nfc',
        'no_encryption',
        'no_sim',
        'not_interested',
        'note',
        'note_add',
        'notifications',
        'notifications_active',
        'notifications_none',
        'notifications_off',
        'notifications_paused',
        'offline_pin',
        'ondemand_video',
        'opacity',
        'open_in_browser',
        'open_in_new',
        'open_with',
        'pages',
        'pageview',
        'palette',
        'pan_tool',
        'panorama',
        'panorama_fish_eye',
        'panorama_horizontal',
        'panorama_vertical',
        'panorama_wide_angle',
        'party_mode',
        'pause',
        'pause_circle_filled',
        'pause_circle_outline',
        'payment',
        'people',
        'people_outline',
        'perm_camera_mic',
        'perm_contact_calendar',
        'perm_data_setting',
        'perm_device_information',
        'perm_identity',
        'perm_media',
        'perm_phone_msg',
        'perm_scan_wifi',
        'person',
        'person_add',
        'person_outline',
        'person_pin',
        'person_pin_circle',
        'personal_video',
        'pets',
        'phone',
        'phone_android',
        'phone_bluetooth_speaker',
        'phone_forwarded',
        'phone_in_talk',
        'phone_iphone',
        'phone_locked',
        'phone_missed',
        'phone_paused',
        'phonelink',
        'phonelink_erase',
        'phonelink_lock',
        'phonelink_off',
        'phonelink_ring',
        'phonelink_setup',
        'photo',
        'photo_album',
        'photo_camera',
        'photo_filter',
        'photo_library',
        'photo_size_select_actual',
        'photo_size_select_large',
        'photo_size_select_small',
        'picture_as_pdf',
        'picture_in_picture',
        'picture_in_picture_alt',
        'pie_chart',
        'pie_chart_outlined',
        'pin_drop',
        'place',
        'play_arrow',
        'play_circle_filled',
        'play_circle_outline',
        'play_for_work',
        'playlist_add',
        'playlist_add_check',
        'playlist_play',
        'plus_one',
        'poll',
        'polymer',
        'pool',
        'portable_wifi_off',
        'portrait',
        'power',
        'power_input',
        'power_settings_new',
        'pregnant_woman',
        'present_to_all',
        'print',
        'priority_high',
        'public',
        'publish',
        'query_builder',
        'question_answer',
        'queue',
        'queue_music',
        'queue_play_next',
        'radio',
        'radio_button_checked',
        'radio_button_unchecked',
        'rate_review',
        'receipt',
        'recent_actors',
        'record_voice_over',
        'redeem',
        'redo',
        'refresh',
        'remove',
        'remove_circle',
        'remove_circle_outline',
        'remove_from_queue',
        'remove_red_eye',
        'remove_shopping_cart',
        'reorder',
        'repeat',
        'repeat_one',
        'replay',
        'replay_10',
        'replay_30',
        'replay_5',
        'reply',
        'reply_all',
        'report',
        'report_problem',
        'restaurant',
        'restaurant_menu',
        'restore',
        'restore_page',
        'ring_volume',
        'room',
        'room_service',
        'rotate_90_degrees_ccw',
        'rotate_left',
        'rotate_right',
        'rounded_corner',
        'router',
        'rowing',
        'rss_feed',
        'rv_hookup',
        'satellite',
        'save',
        'scanner',
        'schedule',
        'school',
        'screen_lock_landscape',
        'screen_lock_portrait',
        'screen_lock_rotation',
        'screen_rotation',
        'screen_share',
        'sd_card',
        'sd_storage',
        'search',
        'security',
        'select_all',
        'send',
        'sentiment_dissatisfied',
        'sentiment_neutral',
        'sentiment_satisfied',
        'sentiment_very_dissatisfied',
        'sentiment_very_satisfied',
        'settings',
        'settings_applications',
        'settings_backup_restore',
        'settings_bluetooth',
        'settings_brightness',
        'settings_cell',
        'settings_ethernet',
        'settings_input_antenna',
        'settings_input_component',
        'settings_input_composite',
        'settings_input_hdmi',
        'settings_input_svideo',
        'settings_overscan',
        'settings_phone',
        'settings_power',
        'settings_remote',
        'settings_system_daydream',
        'settings_voice',
        'share',
        'shop',
        'shop_two',
        'shopping_basket',
        'shopping_cart',
        'short_text',
        'show_chart',
        'shuffle',
        'signal_cellular_4_bar',
        'signal_cellular_connected_no_internet_4_bar',
        'signal_cellular_no_sim',
        'signal_cellular_null',
        'signal_cellular_off',
        'signal_wifi_4_bar',
        'signal_wifi_4_bar_lock',
        'signal_wifi_off',
        'sim_card',
        'sim_card_alert',
        'skip_next',
        'skip_previous',
        'slideshow',
        'slow_motion_video',
        'smartphone',
        'smoke_free',
        'smoking_rooms',
        'sms',
        'sms_failed',
        'snooze',
        'sort',
        'sort_by_alpha',
        'spa',
        'space_bar',
        'speaker',
        'speaker_group',
        'speaker_notes',
        'speaker_notes_off',
        'speaker_phone',
        'spellcheck',
        'star',
        'star_border',
        'star_half',
        'stars',
        'stay_current_landscape',
        'stay_current_portrait',
        'stay_primary_landscape',
        'stay_primary_portrait',
        'stop',
        'stop_screen_share',
        'storage',
        'store',
        'store_mall_directory',
        'straighten',
        'streetview',
        'strikethrough_s',
        'style',
        'subdirectory_arrow_left',
        'subdirectory_arrow_right',
        'subject',
        'subscriptions',
        'subtitles',
        'subway',
        'supervisor_account',
        'surround_sound',
        'swap_calls',
        'swap_horiz',
        'swap_vert',
        'swap_vertical_circle',
        'switch_camera',
        'switch_video',
        'sync',
        'sync_disabled',
        'sync_problem',
        'system_update',
        'system_update_alt',
        'tab',
        'tab_unselected',
        'tablet',
        'tablet_android',
        'tablet_mac',
        'tag_faces',
        'tap_and_play',
        'terrain',
        'text_fields',
        'text_format',
        'textsms',
        'texture',
        'theaters',
        'thumb_down',
        'thumb_up',
        'thumbs_up_down',
        'time_to_leave',
        'timelapse',
        'timeline',
        'timer',
        'timer_10',
        'timer_3',
        'timer_off',
        'title',
        'toc',
        'today',
        'toll',
        'tonality',
        'touch_app',
        'toys',
        'track_changes',
        'traffic',
        'train',
        'tram',
        'transfer_within_a_station',
        'transform',
        'translate',
        'trending_down',
        'trending_flat',
        'trending_up',
        'tune',
        'turned_in',
        'turned_in_not',
        'tv',
        'unarchive',
        'undo',
        'unfold_less',
        'unfold_more',
        'update',
        'usb',
        'verified_user',
        'vertical_align_bottom',
        'vertical_align_center',
        'vertical_align_top',
        'vibration',
        'video_call',
        'video_label',
        'video_library',
        'videocam',
        'videocam_off',
        'videogame_asset',
        'view_agenda',
        'view_array',
        'view_carousel',
        'view_column',
        'view_comfy',
        'view_compact',
        'view_day',
        'view_headline',
        'view_list',
        'view_module',
        'view_quilt',
        'view_stream',
        'view_week',
        'vignette',
        'visibility',
        'visibility_off',
        'voice_chat',
        'voicemail',
        'volume_down',
        'volume_mute',
        'volume_off',
        'volume_up',
        'vpn_key',
        'vpn_lock',
        'wallpaper',
        'warning',
        'watch',
        'watch_later',
        'wb_auto',
        'wb_cloudy',
        'wb_incandescent',
        'wb_iridescent',
        'wb_sunny',
        'wc',
        'web',
        'web_asset',
        'weekend',
        'whatshot',
        'widgets',
        'wifi',
        'wifi_lock',
        'wifi_tethering',
        'work',
        'wrap_text',
        'youtube_searched_for',
        'zoom_in',
        'zoom_out',
        'zoom_out_map'
    ];
    return IconsFakeDb;
}());
exports.IconsFakeDb = IconsFakeDb;


/***/ }),

/***/ "../../../../../src/app/fuse-fake-db/invoice.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InvoiceFakeDb = (function () {
    function InvoiceFakeDb() {
    }
    InvoiceFakeDb.invoice = {
        'from': {
            'title': 'Fuse Inc.',
            'address': '2810 Country Club Road Cranford, NJ 07016',
            'phone': '+66 123 455 87',
            'email': 'hello@fuseinc.com',
            'website': 'www.fuseinc.com'
        },
        'client': {
            'title': 'John Doe',
            'address': '9301 Wood Street Philadelphia, PA 19111',
            'phone': '+55 552 455 87',
            'email': 'johndoe@mail.com'
        },
        'number': 'P9-0004',
        'date': 'Jul 19, 2015',
        'dueDate': 'Aug 24, 2015',
        'services': [
            {
                'title': 'Prototype & Design',
                'detail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan, quam sed eleifend imperdiet.',
                'unit': 'Hour',
                'unitPrice': '12.00',
                'quantity': '240',
                'total': '2880'
            },
            {
                'title': 'Coding',
                'detail': 'Vestibulum ligula sem, rutrum et libero id, porta vehicula metus. Cras dapibus neque sit amet laoreet vestibulum.',
                'unit': 'Hour',
                'unitPrice': '10.50',
                'quantity': '350',
                'total': '3675'
            },
            {
                'title': 'Testing',
                'detail': 'Pellentesque luctus efficitur neque in finibus. Integer ut nunc in augue maximus porttitor id id nulla. In vitae erat.',
                'unit': 'Hour',
                'unitPrice': '4.00',
                'quantity': '50',
                'total': '200'
            },
            {
                'title': 'Documentation & Training',
                'detail': 'Pellentesque luctus efficitur neque in finibus. Integer ut nunc in augue maximus porttitor id id nulla. In vitae erat.',
                'unit': 'Hour',
                'unitPrice': '6.50',
                'quantity': '260',
                'total': '1690'
            }
        ],
        'subtotal': '8445',
        'tax': '675.60',
        'discount': '120.60',
        'total': '9000'
    };
    return InvoiceFakeDb;
}());
exports.InvoiceFakeDb = InvoiceFakeDb;


/***/ }),

/***/ "../../../../../src/app/fuse-fake-db/knowledge-base.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var KnowledgeBaseFakeDb = (function () {
    function KnowledgeBaseFakeDb() {
    }
    KnowledgeBaseFakeDb.data = [
        {
            'title': 'Your Account',
            'path': '/pages/knowledge-base',
            'articlesCount': 17,
            'featuredArticles': [
                {
                    'title': 'Account limits',
                    'content': '<p><b>The standard Lorem Ipsum passage, used since the 1500s</b></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n</p>\n<p><b>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</b></p>\n<p>Sed ut perspiciatis unde omnis iste natus error sit\n    voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et\n    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n    ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam\n    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui\n    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla\n    pariatur?\n</p>\n<p><b>1914 translation by H. Rackham</b></p>\n<p>\n    But I must explain to you how all this mistaken idea of denouncing pleasure\n    and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of\n    the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure\n    itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter\n    consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of\n    itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some\n    great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain\n    some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no\n    annoying consequences, or one who avoids a pain that produces no resultant pleasure?\n</p>\n'
                },
                {
                    'title': 'How do I change my username?',
                    'content': '<p><b>The standard Lorem Ipsum passage, used since the 1500s</b></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n</p>\n<p><b>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</b></p>\n<p>Sed ut perspiciatis unde omnis iste natus error sit\n    voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et\n    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n    ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam\n    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui\n    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla\n    pariatur?\n</p>\n<p><b>1914 translation by H. Rackham</b></p>\n<p>\n    But I must explain to you how all this mistaken idea of denouncing pleasure\n    and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of\n    the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure\n    itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter\n    consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of\n    itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some\n    great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain\n    some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no\n    annoying consequences, or one who avoids a pain that produces no resultant pleasure?\n</p>\n'
                },
                {
                    'title': 'How do I change my password?',
                    'content': '<p><b>The standard Lorem Ipsum passage, used since the 1500s</b></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n</p>\n<p><b>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</b></p>\n<p>Sed ut perspiciatis unde omnis iste natus error sit\n    voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et\n    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n    ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam\n    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui\n    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla\n    pariatur?\n</p>\n<p><b>1914 translation by H. Rackham</b></p>\n<p>\n    But I must explain to you how all this mistaken idea of denouncing pleasure\n    and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of\n    the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure\n    itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter\n    consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of\n    itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some\n    great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain\n    some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no\n    annoying consequences, or one who avoids a pain that produces no resultant pleasure?\n</p>\n'
                },
                {
                    'title': 'How do I change my email address?',
                    'content': '<p><b>The standard Lorem Ipsum passage, used since the 1500s</b></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n</p>\n<p><b>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</b></p>\n<p>Sed ut perspiciatis unde omnis iste natus error sit\n    voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et\n    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n    ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam\n    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui\n    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla\n    pariatur?\n</p>\n<p><b>1914 translation by H. Rackham</b></p>\n<p>\n    But I must explain to you how all this mistaken idea of denouncing pleasure\n    and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of\n    the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure\n    itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter\n    consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of\n    itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some\n    great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain\n    some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no\n    annoying consequences, or one who avoids a pain that produces no resultant pleasure?\n</p>\n'
                },
                {
                    'title': 'How do I close my account?',
                    'content': '<p><b>The standard Lorem Ipsum passage, used since the 1500s</b></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n</p>\n<p><b>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</b></p>\n<p>Sed ut perspiciatis unde omnis iste natus error sit\n    voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et\n    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n    ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam\n    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui\n    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla\n    pariatur?\n</p>\n<p><b>1914 translation by H. Rackham</b></p>\n<p>\n    But I must explain to you how all this mistaken idea of denouncing pleasure\n    and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of\n    the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure\n    itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter\n    consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of\n    itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some\n    great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain\n    some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no\n    annoying consequences, or one who avoids a pain that produces no resultant pleasure?\n</p>\n'
                }
            ]
        },
        {
            'title': 'Selling',
            'path': '/pages/knowledge-base',
            'articlesCount': 12,
            'featuredArticles': [
                {
                    'title': 'A guide to the upload process',
                    'content': '<p><b>The standard Lorem Ipsum passage, used since the 1500s</b></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n</p>\n<p><b>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</b></p>\n<p>Sed ut perspiciatis unde omnis iste natus error sit\n    voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et\n    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n    ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam\n    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui\n    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla\n    pariatur?\n</p>\n<p><b>1914 translation by H. Rackham</b></p>\n<p>\n    But I must explain to you how all this mistaken idea of denouncing pleasure\n    and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of\n    the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure\n    itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter\n    consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of\n    itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some\n    great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain\n    some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no\n    annoying consequences, or one who avoids a pain that produces no resultant pleasure?\n</p>\n'
                },
                {
                    'title': 'Author collaboration',
                    'content': '<p><b>The standard Lorem Ipsum passage, used since the 1500s</b></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n</p>\n<p><b>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</b></p>\n<p>Sed ut perspiciatis unde omnis iste natus error sit\n    voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et\n    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n    ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam\n    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui\n    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla\n    pariatur?\n</p>\n<p><b>1914 translation by H. Rackham</b></p>\n<p>\n    But I must explain to you how all this mistaken idea of denouncing pleasure\n    and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of\n    the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure\n    itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter\n    consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of\n    itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some\n    great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain\n    some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no\n    annoying consequences, or one who avoids a pain that produces no resultant pleasure?\n</p>\n'
                },
                {
                    'title': 'Exclusivity policy',
                    'content': '<p><b>The standard Lorem Ipsum passage, used since the 1500s</b></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n</p>\n<p><b>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</b></p>\n<p>Sed ut perspiciatis unde omnis iste natus error sit\n    voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et\n    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n    ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam\n    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui\n    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla\n    pariatur?\n</p>\n<p><b>1914 translation by H. Rackham</b></p>\n<p>\n    But I must explain to you how all this mistaken idea of denouncing pleasure\n    and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of\n    the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure\n    itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter\n    consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of\n    itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some\n    great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain\n    some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no\n    annoying consequences, or one who avoids a pain that produces no resultant pleasure?\n</p>\n'
                },
                {
                    'title': 'Promises you make as an author',
                    'content': '<p><b>The standard Lorem Ipsum passage, used since the 1500s</b></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n</p>\n<p><b>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</b></p>\n<p>Sed ut perspiciatis unde omnis iste natus error sit\n    voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et\n    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n    ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam\n    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui\n    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla\n    pariatur?\n</p>\n<p><b>1914 translation by H. Rackham</b></p>\n<p>\n    But I must explain to you how all this mistaken idea of denouncing pleasure\n    and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of\n    the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure\n    itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter\n    consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of\n    itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some\n    great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain\n    some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no\n    annoying consequences, or one who avoids a pain that produces no resultant pleasure?\n</p>\n'
                },
                {
                    'title': 'An author’s introduction',
                    'content': '<p><b>The standard Lorem Ipsum passage, used since the 1500s</b></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n</p>\n<p><b>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</b></p>\n<p>Sed ut perspiciatis unde omnis iste natus error sit\n    voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et\n    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n    ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam\n    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui\n    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla\n    pariatur?\n</p>\n<p><b>1914 translation by H. Rackham</b></p>\n<p>\n    But I must explain to you how all this mistaken idea of denouncing pleasure\n    and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of\n    the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure\n    itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter\n    consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of\n    itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some\n    great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain\n    some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no\n    annoying consequences, or one who avoids a pain that produces no resultant pleasure?\n</p>\n'
                }
            ]
        },
        {
            'title': 'Buying',
            'path': '/pages/knowledge-base',
            'articlesCount': 19,
            'featuredArticles': [
                {
                    'title': 'Where is my purchase code?',
                    'content': '<p><b>The standard Lorem Ipsum passage, used since the 1500s</b></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n</p>\n<p><b>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</b></p>\n<p>Sed ut perspiciatis unde omnis iste natus error sit\n    voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et\n    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n    ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam\n    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui\n    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla\n    pariatur?\n</p>\n<p><b>1914 translation by H. Rackham</b></p>\n<p>\n    But I must explain to you how all this mistaken idea of denouncing pleasure\n    and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of\n    the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure\n    itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter\n    consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of\n    itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some\n    great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain\n    some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no\n    annoying consequences, or one who avoids a pain that produces no resultant pleasure?\n</p>\n'
                },
                {
                    'title': 'Can I get a refund?',
                    'content': '<p><b>The standard Lorem Ipsum passage, used since the 1500s</b></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n</p>\n<p><b>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</b></p>\n<p>Sed ut perspiciatis unde omnis iste natus error sit\n    voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et\n    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n    ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam\n    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui\n    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla\n    pariatur?\n</p>\n<p><b>1914 translation by H. Rackham</b></p>\n<p>\n    But I must explain to you how all this mistaken idea of denouncing pleasure\n    and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of\n    the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure\n    itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter\n    consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of\n    itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some\n    great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain\n    some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no\n    annoying consequences, or one who avoids a pain that produces no resultant pleasure?\n</p>\n'
                },
                {
                    'title': 'Contact us',
                    'content': '<p><b>The standard Lorem Ipsum passage, used since the 1500s</b></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n</p>\n<p><b>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</b></p>\n<p>Sed ut perspiciatis unde omnis iste natus error sit\n    voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et\n    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n    ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam\n    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui\n    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla\n    pariatur?\n</p>\n<p><b>1914 translation by H. Rackham</b></p>\n<p>\n    But I must explain to you how all this mistaken idea of denouncing pleasure\n    and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of\n    the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure\n    itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter\n    consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of\n    itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some\n    great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain\n    some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no\n    annoying consequences, or one who avoids a pain that produces no resultant pleasure?\n</p>\n'
                },
                {
                    'title': 'How do I purchase an item?',
                    'content': '<p><b>The standard Lorem Ipsum passage, used since the 1500s</b></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n</p>\n<p><b>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</b></p>\n<p>Sed ut perspiciatis unde omnis iste natus error sit\n    voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et\n    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n    ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam\n    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui\n    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla\n    pariatur?\n</p>\n<p><b>1914 translation by H. Rackham</b></p>\n<p>\n    But I must explain to you how all this mistaken idea of denouncing pleasure\n    and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of\n    the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure\n    itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter\n    consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of\n    itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some\n    great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain\n    some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no\n    annoying consequences, or one who avoids a pain that produces no resultant pleasure?\n</p>\n'
                },
                {
                    'title': 'I\'m trying to find a specific item',
                    'content': '<p><b>The standard Lorem Ipsum passage, used since the 1500s</b></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n</p>\n<p><b>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</b></p>\n<p>Sed ut perspiciatis unde omnis iste natus error sit\n    voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et\n    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n    ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam\n    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui\n    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla\n    pariatur?\n</p>\n<p><b>1914 translation by H. Rackham</b></p>\n<p>\n    But I must explain to you how all this mistaken idea of denouncing pleasure\n    and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of\n    the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure\n    itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter\n    consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of\n    itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some\n    great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain\n    some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no\n    annoying consequences, or one who avoids a pain that produces no resultant pleasure?\n</p>\n'
                }
            ]
        },
        {
            'title': 'Item Support',
            'path': '/pages/knowledge-base',
            'articlesCount': 24,
            'featuredArticles': [
                {
                    'title': 'What is Item Support?',
                    'content': '<p><b>The standard Lorem Ipsum passage, used since the 1500s</b></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n</p>\n<p><b>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</b></p>\n<p>Sed ut perspiciatis unde omnis iste natus error sit\n    voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et\n    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n    ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam\n    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui\n    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla\n    pariatur?\n</p>\n<p><b>1914 translation by H. Rackham</b></p>\n<p>\n    But I must explain to you how all this mistaken idea of denouncing pleasure\n    and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of\n    the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure\n    itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter\n    consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of\n    itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some\n    great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain\n    some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no\n    annoying consequences, or one who avoids a pain that produces no resultant pleasure?\n</p>\n'
                },
                {
                    'title': 'How to contact an author',
                    'content': '<p><b>The standard Lorem Ipsum passage, used since the 1500s</b></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n</p>\n<p><b>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</b></p>\n<p>Sed ut perspiciatis unde omnis iste natus error sit\n    voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et\n    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n    ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam\n    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui\n    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla\n    pariatur?\n</p>\n<p><b>1914 translation by H. Rackham</b></p>\n<p>\n    But I must explain to you how all this mistaken idea of denouncing pleasure\n    and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of\n    the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure\n    itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter\n    consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of\n    itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some\n    great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain\n    some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no\n    annoying consequences, or one who avoids a pain that produces no resultant pleasure?\n</p>\n'
                },
                {
                    'title': 'Rating or review removal policy',
                    'content': '<p><b>The standard Lorem Ipsum passage, used since the 1500s</b></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n</p>\n<p><b>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</b></p>\n<p>Sed ut perspiciatis unde omnis iste natus error sit\n    voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et\n    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n    ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam\n    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui\n    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla\n    pariatur?\n</p>\n<p><b>1914 translation by H. Rackham</b></p>\n<p>\n    But I must explain to you how all this mistaken idea of denouncing pleasure\n    and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of\n    the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure\n    itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter\n    consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of\n    itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some\n    great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain\n    some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no\n    annoying consequences, or one who avoids a pain that produces no resultant pleasure?\n</p>\n'
                },
                {
                    'title': 'Purchasing unsupported items',
                    'content': '<p><b>The standard Lorem Ipsum passage, used since the 1500s</b></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n</p>\n<p><b>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</b></p>\n<p>Sed ut perspiciatis unde omnis iste natus error sit\n    voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et\n    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n    ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam\n    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui\n    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla\n    pariatur?\n</p>\n<p><b>1914 translation by H. Rackham</b></p>\n<p>\n    But I must explain to you how all this mistaken idea of denouncing pleasure\n    and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of\n    the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure\n    itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter\n    consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of\n    itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some\n    great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain\n    some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no\n    annoying consequences, or one who avoids a pain that produces no resultant pleasure?\n</p>\n'
                },
                {
                    'title': 'Item installation guide',
                    'content': '<p><b>The standard Lorem Ipsum passage, used since the 1500s</b></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n</p>\n<p><b>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</b></p>\n<p>Sed ut perspiciatis unde omnis iste natus error sit\n    voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et\n    quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,\n    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\n    ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam\n    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui\n    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla\n    pariatur?\n</p>\n<p><b>1914 translation by H. Rackham</b></p>\n<p>\n    But I must explain to you how all this mistaken idea of denouncing pleasure\n    and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of\n    the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure\n    itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter\n    consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of\n    itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some\n    great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain\n    some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no\n    annoying consequences, or one who avoids a pain that produces no resultant pleasure?\n</p>\n'
                }
            ]
        }
    ];
    return KnowledgeBaseFakeDb;
}());
exports.KnowledgeBaseFakeDb = KnowledgeBaseFakeDb;


/***/ }),

/***/ "../../../../../src/app/fuse-fake-db/mail.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MailFakeDb = (function () {
    function MailFakeDb() {
    }
    MailFakeDb.mails = [
        {
            'id': '15459251a6d6b397565',
            'from': {
                'name': 'Alice Freeman',
                'avatar': 'assets/images/avatars/alice.jpg',
                'email': 'alicefreeman@creapond.com'
            },
            'to': [
                {
                    'name': 'me',
                    'email': 'johndoe@creapond.com'
                }
            ],
            'subject': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'message': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p>',
            'time': '28 Jun',
            'read': false,
            'starred': false,
            'important': true,
            'hasAttachments': true,
            'attachments': [
                {
                    'type': 'image',
                    'fileName': 'flowers',
                    'preview': 'assets/images/etc/flowers-thumb.jpg',
                    'url': '',
                    'size': '1.1Mb'
                },
                {
                    'type': 'image',
                    'fileName': 'snow',
                    'preview': 'assets/images/etc/snow-thumb.jpg',
                    'url': '',
                    'size': '380kb'
                },
                {
                    'type': 'image',
                    'fileName': 'sunrise',
                    'preview': 'assets/images/etc/sunrise-thumb.jpg',
                    'url': 'assets/images/etc/early-sunrise.jpg',
                    'size': '17Mb'
                }
            ],
            'labels': [
                1
            ],
            'folder': 0
        },
        {
            'id': '154588a0864d2881124',
            'from': {
                'name': 'Lawrence Collins',
                'avatar': 'assets/images/avatars/vincent.jpg',
                'email': 'lawrencecollins@creapond.com'
            },
            'to': [
                {
                    'name': 'me',
                    'email': 'johndoe@creapond.com'
                }
            ],
            'subject': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'message': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p>',
            'time': '28 Jun',
            'read': false,
            'starred': false,
            'important': false,
            'hasAttachments': false,
            'labels': [],
            'folder': 0
        },
        {
            'id': '15453ba60d3baa5daaf',
            'from': {
                'name': 'Judith Burton',
                'avatar': 'assets/images/avatars/joyce.jpg',
                'email': 'judithburton@creapond.com'
            },
            'to': [
                {
                    'name': 'me',
                    'email': 'johndoe@creapond.com'
                }
            ],
            'subject': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'message': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p>',
            'time': '28 Jun',
            'read': true,
            'starred': false,
            'important': false,
            'hasAttachments': false,
            'labels': [
                3,
                2
            ],
            'folder': 0
        },
        {
            'id': '15453a06c08fb021776',
            'from': {
                'name': 'Danielle Obrien',
                'avatar': 'assets/images/avatars/danielle.jpg',
                'email': 'danielleobrien@creapond.com'
            },
            'to': [
                {
                    'name': 'me',
                    'email': 'johndoe@creapond.com'
                }
            ],
            'subject': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'message': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p>',
            'time': '28 Jun',
            'read': true,
            'starred': true,
            'important': false,
            'hasAttachments': false,
            'labels': [
                1,
                3
            ],
            'folder': 0
        },
        {
            'id': '154537435d5b32bf11a',
            'from': {
                'name': 'Brian Flores',
                'avatar': '',
                'email': 'brianflores@creapond.com'
            },
            'to': [
                {
                    'name': 'me',
                    'email': 'johndoe@creapond.com'
                }
            ],
            'subject': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'message': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p>',
            'time': '26 Jun',
            'read': true,
            'starred': false,
            'important': false,
            'hasAttachments': false,
            'labels': [],
            'folder': 0
        },
        {
            'id': '1544e43dcdae6ebf876',
            'from': {
                'name': 'Charles Kim',
                'avatar': 'assets/images/avatars/garry.jpg',
                'email': 'charleskim@creapond.com'
            },
            'to': [
                {
                    'name': 'me',
                    'email': 'johndoe@creapond.com'
                }
            ],
            'subject': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'message': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p>',
            'time': '18 Jun',
            'read': true,
            'starred': false,
            'important': true,
            'hasAttachments': false,
            'labels': [
                2
            ],
            'folder': 0
        },
        {
            'id': '1543ee3a5b43e0f9f45',
            'from': {
                'name': 'Patricia White',
                'avatar': '',
                'email': 'patriciawhite@creapond.com'
            },
            'to': [
                {
                    'name': 'me',
                    'email': 'johndoe@creapond.com'
                }
            ],
            'subject': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'message': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p>',
            'time': '15 Jun',
            'read': true,
            'starred': false,
            'important': false,
            'hasAttachments': false,
            'labels': [],
            'folder': 0
        },
        {
            'id': '1543cc4515df3146112',
            'from': {
                'name': 'Juan Carpenter',
                'avatar': 'assets/images/avatars/james.jpg',
                'email': 'juancarpenter@creapond.com'
            },
            'to': [
                {
                    'name': 'me',
                    'email': 'johndoe@creapond.com'
                }
            ],
            'subject': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'message': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p>',
            'time': '11 Jun',
            'read': true,
            'starred': false,
            'important': false,
            'hasAttachments': false,
            'labels': [],
            'folder': 0
        },
        {
            'id': '154398a4770d7aaf9a2',
            'from': {
                'name': 'Maria Gilbert',
                'avatar': 'assets/images/avatars/danielle.jpg',
                'email': 'mariagilbert@creapond.com'
            },
            'to': [
                {
                    'name': 'me',
                    'email': 'johndoe@creapond.com'
                }
            ],
            'subject': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'message': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p>',
            'time': '5 Jun',
            'read': true,
            'starred': false,
            'important': false,
            'hasAttachments': false,
            'labels': [],
            'folder': 0
        },
        {
            'id': '15438351f87dcd68567',
            'from': {
                'name': 'Tammy Brooks',
                'avatar': '',
                'email': 'tammybrooks@creapond.com'
            },
            'to': [
                {
                    'name': 'me',
                    'email': 'johndoe@creapond.com'
                }
            ],
            'subject': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'message': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p>',
            'time': '1 Jun',
            'read': true,
            'starred': false,
            'important': false,
            'hasAttachments': false,
            'labels': [],
            'folder': 0
        },
        {
            'id': '1542d75d929a603125',
            'from': {
                'name': 'Kathy Price',
                'avatar': '',
                'email': 'kathyprice@creapond.com'
            },
            'to': [
                {
                    'name': 'me',
                    'email': 'johndoe@creapond.com'
                }
            ],
            'subject': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'message': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p> ',
            'time': '1 Jun',
            'read': true,
            'starred': false,
            'important': false,
            'hasAttachments': false,
            'labels': [],
            'folder': 0
        },
        {
            'id': '1541ca7af66da284177',
            'from': {
                'name': 'Alan Coleman',
                'avatar': '',
                'email': 'alancoleman@creapond.com'
            },
            'to': [
                {
                    'name': 'me',
                    'email': 'johndoe@creapond.com'
                }
            ],
            'subject': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'message': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p> ',
            'time': '28 June',
            'read': true,
            'starred': false,
            'important': false,
            'hasAttachments': false,
            'labels': [],
            'folder': 0
        },
        {
            'id': '154297167e781781745',
            'from': {
                'name': 'Thomas Silva',
                'avatar': '',
                'email': 'thomassilva@creapond.com'
            },
            'to': [
                {
                    'name': 'me',
                    'email': 'johndoe@creapond.com'
                }
            ],
            'subject': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'message': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p> ',
            'time': '16 Jun',
            'read': true,
            'starred': false,
            'important': false,
            'hasAttachments': false,
            'labels': [],
            'folder': 0
        },
        {
            'id': '15427f4c1b7f3953234',
            'from': {
                'name': 'Jessica Robertson',
                'avatar': '',
                'email': 'jessicarobertson@creapond.com'
            },
            'to': [
                {
                    'name': 'me',
                    'email': 'johndoe@creapond.com'
                }
            ],
            'subject': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'message': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p> ',
            'time': '19 May',
            'read': true,
            'starred': false,
            'important': false,
            'hasAttachments': false,
            'labels': [],
            'folder': 3
        },
        {
            'id': '154204e45a59b168453',
            'from': {
                'name': 'John Palmer',
                'avatar': '',
                'email': 'johnpalmer@creapond.com'
            },
            'to': [
                {
                    'name': 'me',
                    'email': 'johndoe@creapond.com'
                }
            ],
            'subject': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'message': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p> ',
            'time': '8 May',
            'read': true,
            'starred': false,
            'important': false,
            'hasAttachments': false,
            'labels': [],
            'folder': 3
        },
        {
            'id': '1541dd1e05dfc439216',
            'from': {
                'name': 'David Butler',
                'avatar': '',
                'email': 'davidbutler@creapond.com'
            },
            'to': [
                {
                    'name': 'me',
                    'email': 'johndoe@creapond.com'
                }
            ],
            'subject': 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'message': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non, ultrices maximus nibh. Suspendisse ut justo velit. Nullam ac ultrices risus, quis auctor orci. Vestibulum volutpat nisi et neque porta ullamcorper. Maecenas porttitor porta erat ac suscipit. Sed cursus leo ut elementum fringilla. Maecenas semper viverra erat, vel ullamcorper dui efficitur in. Vestibulum placerat imperdiet tellus, et tincidunt eros posuere eget. Proin sit amet facilisis libero. Nulla eget est ut erat aliquet rhoncus. Quisque ac urna vitae dui hendrerit sollicitudin vel id sem. </p><p> In eget ante sapien. Quisque consequat velit non ante finibus, vel placerat erat ultricies. Aliquam bibendum justo erat, ultrices vehicula dolor elementum a. Mauris eu nisl feugiat ligula molestie eleifend. Aliquam efficitur venenatis velit ac porta. Vivamus vitae pulvinar tellus. Donec odio enim, auctor eget nibh mattis, ultricies dignissim lacus. Phasellus non tincidunt dui. Nulla eu arcu lorem. </p><p> Donec non hendrerit augue, lobortis sollicitudin odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet euismod enim, eget vestibulum justo. Fusce a placerat lectus, eget feugiat purus. Cras risus ante, faucibus eget justo commodo, volutpat tempor ante. Donec sit amet leo venenatis, gravida quam sit amet, blandit dui. In quam ante, elementum ut faucibus nec, tristique vitae dui. Praesent vel erat at enim placerat luctus vel ut ipsum. In congue tempor mi, non ornare lectus condimentum at. Aenean libero diam, finibus eget sapien et, tristique fermentum lorem. </p> ',
            'time': '7 May',
            'read': true,
            'starred': false,
            'important': false,
            'hasAttachments': false,
            'labels': [],
            'folder': 3
        }
    ];
    MailFakeDb.folders = [
        {
            'id': 0,
            'handle': 'inbox',
            'title': 'Inbox',
            'icon': 'inbox'
        },
        {
            'id': 1,
            'handle': 'sent',
            'title': 'Sent',
            'icon': 'send'
        },
        {
            'id': 2,
            'handle': 'drafts',
            'title': 'Drafts',
            'icon': 'email_open'
        },
        {
            'id': 3,
            'handle': 'spam',
            'title': 'Spam',
            'icon': 'error'
        },
        {
            'id': 4,
            'handle': 'trash',
            'title': 'Trash',
            'icon': 'delete'
        }
    ];
    MailFakeDb.filters = [
        {
            'id': 0,
            'handle': 'starred',
            'title': 'Starred',
            'icon': 'star'
        },
        {
            'id': 1,
            'handle': 'important',
            'title': 'Important',
            'icon': 'label'
        }
    ];
    MailFakeDb.labels = [
        {
            'id': 0,
            'handle': 'note',
            'title': 'Note',
            'color': '#7cb342'
        },
        {
            'id': 1,
            'handle': 'paypal',
            'title': 'Paypal',
            'color': '#d84315'
        },
        {
            'id': 2,
            'handle': 'invoice',
            'title': 'Invoice',
            'color': '#607d8b'
        },
        {
            'id': 3,
            'handle': 'amazon',
            'title': 'Amazon',
            'color': '#03a9f4'
        }
    ];
    return MailFakeDb;
}());
exports.MailFakeDb = MailFakeDb;


/***/ }),

/***/ "../../../../../src/app/fuse-fake-db/profile.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProfileFakeDb = (function () {
    function ProfileFakeDb() {
    }
    ProfileFakeDb.timeline = {
        activities: [
            {
                'user': {
                    'name': 'Alice Freeman',
                    'avatar': 'assets/images/avatars/alice.jpg'
                },
                'message': 'started following you.',
                'time': '13 mins. ago'
            },
            {
                'user': {
                    'name': 'Andrew Green',
                    'avatar': 'assets/images/avatars/andrew.jpg'
                },
                'message': 'sent you a message.',
                'time': 'June 10,2015'
            },
            {
                'user': {
                    'name': 'Garry Newman',
                    'avatar': 'assets/images/avatars/garry.jpg'
                },
                'message': 'shared a public post with your group.',
                'time': 'June 9,2015'
            },
            {
                'user': {
                    'name': 'Carl Henderson',
                    'avatar': 'assets/images/avatars/carl.jpg'
                },
                'message': 'wants to play Fallout Shelter with you.',
                'time': 'June 8,2015'
            },
            {
                'user': {
                    'name': 'Jane Dean',
                    'avatar': 'assets/images/avatars/jane.jpg'
                },
                'message': 'started following you.',
                'time': 'June 7,2015'
            },
            {
                'user': {
                    'name': 'Juan Carpenter',
                    'avatar': 'assets/images/avatars/james.jpg'
                },
                'message': 'sent you a message.',
                'time': 'June 6,2015'
            },
            {
                'user': {
                    'name': 'Judith Burton',
                    'avatar': 'assets/images/avatars/joyce.jpg'
                },
                'message': 'shared a photo with you.',
                'time': 'June 5,2015'
            },
            {
                'user': {
                    'name': 'Vincent Munoz',
                    'avatar': 'assets/images/avatars/vincent.jpg'
                },
                'message': 'shared a photo with you.',
                'time': 'June 4,2015'
            }
        ],
        posts: [
            {
                'user': {
                    'name': 'Garry Newman',
                    'avatar': 'assets/images/avatars/garry.jpg'
                },
                'message': 'Remember the place we were talking about the other night? Found it!',
                'time': '32 minutes ago',
                'type': 'post',
                'like': 5,
                'share': 21,
                'media': {
                    'type': 'image',
                    'preview': 'assets/images/etc/early-sunrise.jpg'
                },
                'comments': [
                    {
                        'user': {
                            'name': 'Alice Freeman',
                            'avatar': 'assets/images/avatars/alice.jpg'
                        },
                        'time': 'June 10, 2015',
                        'message': 'That’s a wonderful place. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend ligula. Fusce posuere in sapien ac facilisis. Etiam sit amet justo non felis ornare feugiat.'
                    }
                ]
            },
            {
                'user': {
                    'name': 'Andrew Green',
                    'avatar': 'assets/images/avatars/andrew.jpg'
                },
                'message': 'Hey, man! Check this, it’s pretty awesome!',
                'time': 'June 12, 2015',
                'type': 'article',
                'like': 98,
                'share': 6,
                'article': {
                    'title': 'The Fallout 4 Pip-Boy Edition Is Back In Stock Now',
                    'subtitle': 'Kotaku',
                    'excerpt': 'The Fallout 4 Pip-Boy edition is back in stock at Gamestop, for all 3 platforms. Additionally, Walmart also has it in stock for the PS4 and Xbox One as of this writing, as does Best Buy.',
                    'media': {
                        'type': 'image',
                        'preview': 'assets/images/etc/fallout.jpg'
                    }
                },
                'comments': [
                    {
                        'user': {
                            'name': 'Alice Freeman',
                            'avatar': 'assets/images/avatars/alice.jpg'
                        },
                        'time': 'June 10, 2015',
                        'message': 'That’s a wonderful place. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend ligula. Fusce posuere in sapien ac facilisis. Etiam sit amet justo non felis ornare feugiat.'
                    }
                ]
            },
            {
                'user': {
                    'name': 'Carl Henderson',
                    'avatar': 'assets/images/avatars/carl.jpg'
                },
                'message': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend ligula. Fusce posuere in sapien ac facilisis. Etiam sit amet justo non felis ornare feugiat. Aenean lorem ex, ultrices sit amet ligula sed...',
                'time': 'June 10, 2015',
                'type': 'something',
                'like': 4,
                'share': 1
            }
        ]
    };
    ProfileFakeDb.photosVideos = [
        {
            'name': 'June 2015',
            'info': '5 Photos',
            'media': [
                {
                    'type': 'photo',
                    'title': 'Mountain Sunset',
                    'preview': 'assets/images/etc/mountain-sunset.jpg'
                },
                {
                    'type': 'photo',
                    'title': 'Mountain Lake',
                    'preview': 'assets/images/etc/mountain-lake.jpg'
                },
                {
                    'type': 'photo',
                    'title': 'Hot air balloons',
                    'preview': 'assets/images/etc/air-balloons.jpg'
                },
                {
                    'type': 'photo',
                    'title': 'Cactus',
                    'preview': 'assets/images/etc/cactus.jpg'
                },
                {
                    'type': 'photo',
                    'title': 'Road Trip',
                    'preview': 'assets/images/etc/road-trip.jpg'
                }
            ]
        },
        {
            'name': 'May 2015',
            'info': '7 Photos, 3 Videos',
            'media': [
                {
                    'type': 'photo',
                    'title': 'Mountain Sunset',
                    'preview': 'assets/images/etc/mountain-sunset.jpg'
                },
                {
                    'type': 'photo',
                    'title': 'Mountain Lake',
                    'preview': 'assets/images/etc/mountain-lake.jpg'
                },
                {
                    'type': 'photo',
                    'title': 'Hot air balloons',
                    'preview': 'assets/images/etc/air-balloons.jpg'
                },
                {
                    'type': 'photo',
                    'title': 'Cactus',
                    'preview': 'assets/images/etc/cactus.jpg'
                },
                {
                    'type': 'photo',
                    'title': 'Road Trip',
                    'preview': 'assets/images/etc/road-trip.jpg'
                },
                {
                    'type': 'photo',
                    'title': 'Mountain Sunset',
                    'preview': 'assets/images/etc/mountain-sunset.jpg'
                },
                {
                    'type': 'photo',
                    'title': 'Mountain Lake',
                    'preview': 'assets/images/etc/mountain-lake.jpg'
                },
                {
                    'type': 'photo',
                    'title': 'Hot air balloons',
                    'preview': 'assets/images/etc/air-balloons.jpg'
                },
                {
                    'type': 'photo',
                    'title': 'Cactus',
                    'preview': 'assets/images/etc/cactus.jpg'
                },
                {
                    'type': 'photo',
                    'title': 'Road Trip',
                    'preview': 'assets/images/etc/road-trip.jpg'
                }
            ]
        },
        {
            'name': 'April 2015',
            'info': '5 Photos',
            'media': [
                {
                    'type': 'photo',
                    'title': 'Mountain Sunset',
                    'preview': 'assets/images/etc/mountain-sunset.jpg'
                },
                {
                    'type': 'photo',
                    'title': 'Mountain Lake',
                    'preview': 'assets/images/etc/mountain-lake.jpg'
                },
                {
                    'type': 'photo',
                    'title': 'Hot air balloons',
                    'preview': 'assets/images/etc/air-balloons.jpg'
                },
                {
                    'type': 'photo',
                    'title': 'Cactus',
                    'preview': 'assets/images/etc/cactus.jpg'
                },
                {
                    'type': 'photo',
                    'title': 'Road Trip',
                    'preview': 'assets/images/etc/road-trip.jpg'
                },
                {
                    'type': 'photo',
                    'title': 'Mountain Sunset',
                    'preview': 'assets/images/etc/mountain-sunset.jpg'
                },
                {
                    'type': 'photo',
                    'title': 'Mountain Lake',
                    'preview': 'assets/images/etc/mountain-lake.jpg'
                }
            ]
        }
    ];
    ProfileFakeDb.about = {
        'general': {
            'gender': 'Female',
            'birthday': 'May 8th, 1988',
            'locations': [
                'Istanbul, Turkey',
                'New York, USA'
            ],
            'about': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget pharetra felis, sed ullamcorper dui. Sed et elementum neque. Vestibulum pellente viverra ultrices. Etiam justo augue, vehicula ac gravida a, interdum sit amet nisl. Integer vitae nisi id nibh dictum mollis in vitae tortor.'
        },
        'work': {
            'occupation': 'Developer',
            'skills': 'C#, PHP, Javascript, Angular, JS, HTML, CSS',
            'jobs': [
                {
                    'company': 'Self-Employed',
                    'date': '2010 - Now'
                },
                {
                    'company': 'Google',
                    'date': '2008 - 2010'
                }
            ]
        },
        'contact': {
            'address': 'Ut pharetra luctus est quis sodales. Duis nisi tortor, bibendum eget tincidunt, aliquam ac elit. Mauris nec euismod odio.',
            'tel': [
                '+6 555 6600',
                '+9 555 5255'
            ],
            'websites': [
                'withinpixels.com'
            ],
            'emails': [
                'mail@withinpixels.com',
                'mail@creapond.com'
            ]
        },
        'groups': [
            {
                'logo': 'assets/images/logos/android.png',
                'name': 'Android',
                'category': 'Technology',
                'members': '1.856.546'
            },
            {
                'logo': 'assets/images/logos/google.png',
                'name': 'Google',
                'category': 'Web',
                'members': '1.226.121'
            },
            {
                'logo': 'assets/images/logos/fallout.png',
                'name': 'Fallout',
                'category': 'Games',
                'members': '526.142'
            }
        ],
        'friends': [
            {
                'name': 'Garry Newman',
                'avatar': 'assets/images/avatars/garry.jpg'
            },
            {
                'name': 'Carl Henderson',
                'avatar': 'assets/images/avatars/carl.jpg'
            },
            {
                'name': 'Jane Dean',
                'avatar': 'assets/images/avatars/jane.jpg'
            },
            {
                'name': 'Garry Arnold',
                'avatar': 'assets/images/avatars/garry.jpg'
            },
            {
                'name': 'Vincent Munoz',
                'avatar': 'assets/images/avatars/vincent.jpg'
            },
            {
                'name': 'Alice Freeman',
                'avatar': 'assets/images/avatars/alice.jpg'
            },
            {
                'name': 'Andrew Green',
                'avatar': 'assets/images/avatars/andrew.jpg'
            }
        ]
    };
    return ProfileFakeDb;
}());
exports.ProfileFakeDb = ProfileFakeDb;


/***/ }),

/***/ "../../../../../src/app/fuse-fake-db/projects-dashboard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProjectsDashboardDb = (function () {
    function ProjectsDashboardDb() {
    }
    ProjectsDashboardDb.projects = [
        {
            'name': 'ACME Corp. Backend App'
        },
        {
            'name': 'ACME Corp. Frontend App'
        },
        {
            'name': 'Creapond'
        },
        {
            'name': 'Withinpixels'
        }
    ];
    ProjectsDashboardDb.widgets = {
        'widget1': {
            'ranges': {
                'DY': 'Yesterday',
                'DT': 'Today',
                'DTM': 'Tomorrow'
            },
            'currentRange': 'DT',
            'data': {
                'label': 'DUE TASKS',
                'count': {
                    'DY': 21,
                    'DT': 25,
                    'DTM': 19
                },
                'extra': {
                    'label': 'Completed',
                    'count': {
                        'DY': 6,
                        'DT': 7,
                        'DTM': '-'
                    }
                }
            },
            'detail': 'You can show some detailed information about this widget in here.'
        },
        'widget2': {
            'title': 'Overdue',
            'data': {
                'label': 'TASKS',
                'count': 4,
                'extra': {
                    'label': 'Yesterday\'s overdue',
                    'count': 2
                }
            },
            'detail': 'You can show some detailed information about this widget in here.'
        },
        'widget3': {
            'title': 'Issues',
            'data': {
                'label': 'OPEN',
                'count': 32,
                'extra': {
                    'label': 'Closed today',
                    'count': 0
                }
            },
            'detail': 'You can show some detailed information about this widget in here.'
        },
        'widget4': {
            'title': 'Features',
            'data': {
                'label': 'PROPOSALS',
                'count': 42,
                'extra': {
                    'label': 'Implemented',
                    'count': 8
                }
            },
            'detail': 'You can show some detailed information about this widget in here.'
        },
        'widget5': {
            'title': 'Github Issues',
            'ranges': {
                'TW': 'This Week',
                'LW': 'Last Week',
                '2W': '2 Weeks Ago'
            },
            'mainChart': {
                '2W': [
                    {
                        'name': 'Mon',
                        'series': [
                            {
                                'name': 'issues',
                                'value': 37
                            },
                            {
                                'name': 'closed issues',
                                'value': 9
                            }
                        ]
                    },
                    {
                        'name': 'Tue',
                        'series': [
                            {
                                'name': 'issues',
                                'value': 32
                            },
                            {
                                'name': 'closed issues',
                                'value': 12
                            }
                        ]
                    },
                    {
                        'name': 'Wed',
                        'series': [
                            {
                                'name': 'issues',
                                'value': 39
                            },
                            {
                                'name': 'closed issues',
                                'value': 9
                            }
                        ]
                    },
                    {
                        'name': 'Thu',
                        'series': [
                            {
                                'name': 'issues',
                                'value': 27
                            },
                            {
                                'name': 'closed issues',
                                'value': 12
                            }
                        ]
                    },
                    {
                        'name': 'Fri',
                        'series': [
                            {
                                'name': 'issues',
                                'value': 18
                            },
                            {
                                'name': 'closed issues',
                                'value': 7
                            }
                        ]
                    },
                    {
                        'name': 'Sat',
                        'series': [
                            {
                                'name': 'issues',
                                'value': 24
                            },
                            {
                                'name': 'closed issues',
                                'value': 8
                            }
                        ]
                    },
                    {
                        'name': 'Sun',
                        'series': [
                            {
                                'name': 'issues',
                                'value': 20
                            },
                            {
                                'name': 'closed issues',
                                'value': 16
                            }
                        ]
                    }
                ],
                'LW': [
                    {
                        'name': 'Mon',
                        'series': [
                            {
                                'name': 'issues',
                                'value': 37
                            },
                            {
                                'name': 'closed issues',
                                'value': 12
                            }
                        ]
                    },
                    {
                        'name': 'Tue',
                        'series': [
                            {
                                'name': 'issues',
                                'value': 24
                            },
                            {
                                'name': 'closed issues',
                                'value': 8
                            }
                        ]
                    },
                    {
                        'name': 'Wed',
                        'series': [
                            {
                                'name': 'issues',
                                'value': 51
                            },
                            {
                                'name': 'closed issues',
                                'value': 7
                            }
                        ]
                    },
                    {
                        'name': 'Thu',
                        'series': [
                            {
                                'name': 'issues',
                                'value': 31
                            },
                            {
                                'name': 'closed issues',
                                'value': 13
                            }
                        ]
                    },
                    {
                        'name': 'Fri',
                        'series': [
                            {
                                'name': 'issues',
                                'value': 29
                            },
                            {
                                'name': 'closed issues',
                                'value': 7
                            }
                        ]
                    },
                    {
                        'name': 'Sat',
                        'series': [
                            {
                                'name': 'issues',
                                'value': 17
                            },
                            {
                                'name': 'closed issues',
                                'value': 6
                            }
                        ]
                    },
                    {
                        'name': 'Sun',
                        'series': [
                            {
                                'name': 'issues',
                                'value': 31
                            },
                            {
                                'name': 'closed issues',
                                'value': 10
                            }
                        ]
                    }
                ],
                'TW': [
                    {
                        'name': 'Mon',
                        'series': [
                            {
                                'name': 'issues',
                                'value': 42
                            },
                            {
                                'name': 'closed issues',
                                'value': 11
                            }
                        ]
                    },
                    {
                        'name': 'Tue',
                        'series': [
                            {
                                'name': 'issues',
                                'value': 28
                            },
                            {
                                'name': 'closed issues',
                                'value': 10
                            }
                        ]
                    },
                    {
                        'name': 'Wed',
                        'series': [
                            {
                                'name': 'issues',
                                'value': 43
                            },
                            {
                                'name': 'closed issues',
                                'value': 8
                            }
                        ]
                    },
                    {
                        'name': 'Thu',
                        'series': [
                            {
                                'name': 'issues',
                                'value': 34
                            },
                            {
                                'name': 'closed issues',
                                'value': 11
                            }
                        ]
                    },
                    {
                        'name': 'Fri',
                        'series': [
                            {
                                'name': 'issues',
                                'value': 20
                            },
                            {
                                'name': 'closed issues',
                                'value': 8
                            }
                        ]
                    },
                    {
                        'name': 'Sat',
                        'series': [
                            {
                                'name': 'issues',
                                'value': 25
                            },
                            {
                                'name': 'closed issues',
                                'value': 10
                            }
                        ]
                    },
                    {
                        'name': 'Sun',
                        'series': [
                            {
                                'name': 'issues',
                                'value': 22
                            },
                            {
                                'name': 'closed issues',
                                'value': 17
                            }
                        ]
                    }
                ]
            },
            'supporting': {
                'created': {
                    'label': 'CREATED',
                    'count': {
                        '2W': 48,
                        'LW': 46,
                        'TW': 54
                    },
                    'chart': {
                        '2W': [
                            {
                                'name': 'CREATED',
                                'series': [
                                    {
                                        'name': 'Mon',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Tue',
                                        'value': 8
                                    },
                                    {
                                        'name': 'Wed',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Thu',
                                        'value': 6
                                    },
                                    {
                                        'name': 'Fri',
                                        'value': 7
                                    },
                                    {
                                        'name': 'Sat',
                                        'value': 8
                                    },
                                    {
                                        'name': 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'LW': [
                            {
                                'name': 'Created',
                                'series': [
                                    {
                                        'name': 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name': 'Tue',
                                        'value': 3
                                    },
                                    {
                                        'name': 'Wed',
                                        'value': 7
                                    },
                                    {
                                        'name': 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name': 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'TW': [
                            {
                                'name': 'Created',
                                'series': [
                                    {
                                        'name': 'Mon',
                                        'value': 3
                                    },
                                    {
                                        'name': 'Tue',
                                        'value': 2
                                    },
                                    {
                                        'name': 'Wed',
                                        'value': 1
                                    },
                                    {
                                        'name': 'Thu',
                                        'value': 4
                                    },
                                    {
                                        'name': 'Fri',
                                        'value': 8
                                    },
                                    {
                                        'name': 'Sat',
                                        'value': 8
                                    },
                                    {
                                        'name': 'Sun',
                                        'value': 4
                                    }
                                ]
                            }
                        ]
                    }
                },
                'closed': {
                    'label': 'CLOSED',
                    'count': {
                        '2W': 27,
                        'LW': 31,
                        'TW': 26
                    },
                    'chart': {
                        '2W': [
                            {
                                'name': 'CLOSED',
                                'series': [
                                    {
                                        'name': 'Mon',
                                        'value': 3
                                    },
                                    {
                                        'name': 'Tue',
                                        'value': 2
                                    },
                                    {
                                        'name': 'Wed',
                                        'value': 1
                                    },
                                    {
                                        'name': 'Thu',
                                        'value': 4
                                    },
                                    {
                                        'name': 'Fri',
                                        'value': 8
                                    },
                                    {
                                        'name': 'Sat',
                                        'value': 8
                                    },
                                    {
                                        'name': 'Sun',
                                        'value': 4
                                    }
                                ]
                            }
                        ],
                        'LW': [
                            {
                                'name': 'CLOSED',
                                'series': [
                                    {
                                        'name': 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name': 'Tue',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Wed',
                                        'value': 4
                                    },
                                    {
                                        'name': 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Fri',
                                        'value': 7
                                    },
                                    {
                                        'name': 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name': 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'TW': [
                            {
                                'name': 'CLOSED',
                                'series': [
                                    {
                                        'name': 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name': 'Tue',
                                        'value': 3
                                    },
                                    {
                                        'name': 'Wed',
                                        'value': 7
                                    },
                                    {
                                        'name': 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name': 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ]
                    }
                },
                'reOpened': {
                    'label': 'RE-OPENED',
                    'count': {
                        '2W': 4,
                        'LW': 5,
                        'TW': 2
                    },
                    'chart': {
                        '2W': [
                            {
                                'name': 'RE-OPENED',
                                'series': [
                                    {
                                        'name': 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name': 'Tue',
                                        'value': 3
                                    },
                                    {
                                        'name': 'Wed',
                                        'value': 7
                                    },
                                    {
                                        'name': 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name': 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'LW': [
                            {
                                'name': 'RE-OPENED',
                                'series': [
                                    {
                                        'name': 'Mon',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Tue',
                                        'value': 7
                                    },
                                    {
                                        'name': 'Wed',
                                        'value': 8
                                    },
                                    {
                                        'name': 'Thu',
                                        'value': 8
                                    },
                                    {
                                        'name': 'Fri',
                                        'value': 6
                                    },
                                    {
                                        'name': 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name': 'Sun',
                                        'value': 1
                                    }
                                ]
                            }
                        ],
                        'TW': [
                            {
                                'name': 'RE-OPENED',
                                'series': [
                                    {
                                        'name': 'Mon',
                                        'value': 3
                                    },
                                    {
                                        'name': 'Tue',
                                        'value': 2
                                    },
                                    {
                                        'name': 'Wed',
                                        'value': 1
                                    },
                                    {
                                        'name': 'Thu',
                                        'value': 4
                                    },
                                    {
                                        'name': 'Fri',
                                        'value': 8
                                    },
                                    {
                                        'name': 'Sat',
                                        'value': 8
                                    },
                                    {
                                        'name': 'Sun',
                                        'value': 4
                                    }
                                ]
                            }
                        ]
                    }
                },
                'wontFix': {
                    'label': 'WON\'T FIX',
                    'count': {
                        '2W': 6,
                        'LW': 3,
                        'TW': 4
                    },
                    'chart': {
                        '2W': [
                            {
                                'name': 'WON\'T FIX',
                                'series': [
                                    {
                                        'name': 'Mon',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Tue',
                                        'value': 7
                                    },
                                    {
                                        'name': 'Wed',
                                        'value': 4
                                    },
                                    {
                                        'name': 'Thu',
                                        'value': 6
                                    },
                                    {
                                        'name': 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Sat',
                                        'value': 3
                                    },
                                    {
                                        'name': 'Sun',
                                        'value': 2
                                    }
                                ]
                            }
                        ],
                        'LW': [
                            {
                                'name': 'WON\'T FIX',
                                'series': [
                                    {
                                        'name': 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name': 'Tue',
                                        'value': 3
                                    },
                                    {
                                        'name': 'Wed',
                                        'value': 7
                                    },
                                    {
                                        'name': 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name': 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'TW': [
                            {
                                'name': 'WON\'T FIX',
                                'series': [
                                    {
                                        'name': 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name': 'Tue',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Wed',
                                        'value': 4
                                    },
                                    {
                                        'name': 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Fri',
                                        'value': 7
                                    },
                                    {
                                        'name': 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name': 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ]
                    }
                },
                'needsTest': {
                    'label': 'NEEDS TEST',
                    'count': {
                        '2W': 10,
                        'LW': 7,
                        'TW': 8
                    },
                    'chart': {
                        '2W': [
                            {
                                'name': 'NEEDS TEST',
                                'series': [
                                    {
                                        'name': 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name': 'Tue',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Wed',
                                        'value': 4
                                    },
                                    {
                                        'name': 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Fri',
                                        'value': 7
                                    },
                                    {
                                        'name': 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name': 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'LW': [
                            {
                                'name': 'NEEDS TEST',
                                'series': [
                                    {
                                        'name': 'Mon',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Tue',
                                        'value': 7
                                    },
                                    {
                                        'name': 'Wed',
                                        'value': 8
                                    },
                                    {
                                        'name': 'Thu',
                                        'value': 8
                                    },
                                    {
                                        'name': 'Fri',
                                        'value': 6
                                    },
                                    {
                                        'name': 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name': 'Sun',
                                        'value': 1
                                    }
                                ]
                            }
                        ],
                        'TW': [
                            {
                                'name': 'NEEDS TEST',
                                'series': [
                                    {
                                        'name': 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name': 'Tue',
                                        'value': 3
                                    },
                                    {
                                        'name': 'Wed',
                                        'value': 7
                                    },
                                    {
                                        'name': 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name': 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ]
                    }
                },
                'fixed': {
                    'label': 'FIXED',
                    'count': {
                        '2W': 21,
                        'LW': 17,
                        'TW': 14
                    },
                    'chart': {
                        '2W': [
                            {
                                'name': 'FIXED',
                                'series': [
                                    {
                                        'name': 'Mon',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Tue',
                                        'value': 7
                                    },
                                    {
                                        'name': 'Wed',
                                        'value': 8
                                    },
                                    {
                                        'name': 'Thu',
                                        'value': 8
                                    },
                                    {
                                        'name': 'Fri',
                                        'value': 6
                                    },
                                    {
                                        'name': 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name': 'Sun',
                                        'value': 1
                                    }
                                ]
                            }
                        ],
                        'LW': [
                            {
                                'name': 'FIXED',
                                'series': [
                                    {
                                        'name': 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name': 'Tue',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Wed',
                                        'value': 4
                                    },
                                    {
                                        'name': 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Fri',
                                        'value': 7
                                    },
                                    {
                                        'name': 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name': 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'TW': [
                            {
                                'name': 'FIXED',
                                'series': [
                                    {
                                        'name': 'Mon',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Tue',
                                        'value': 7
                                    },
                                    {
                                        'name': 'Wed',
                                        'value': 4
                                    },
                                    {
                                        'name': 'Thu',
                                        'value': 6
                                    },
                                    {
                                        'name': 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name': 'Sat',
                                        'value': 3
                                    },
                                    {
                                        'name': 'Sun',
                                        'value': 2
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
        },
        'widget6': {
            'title': 'Task Distribution',
            'ranges': {
                'TW': 'This Week',
                'LW': 'Last Week',
                '2W': '2 Weeks Ago'
            },
            'mainChart': {
                'TW': [
                    {
                        'name': 'Frontend',
                        'value': 15
                    },
                    {
                        'name': 'Backend',
                        'value': 20
                    },
                    {
                        'name': 'API',
                        'value': 38
                    },
                    {
                        'name': 'Issues',
                        'value': 27
                    }
                ],
                'LW': [
                    {
                        'name': 'Frontend',
                        'value': 19
                    },
                    {
                        'name': 'Backend',
                        'value': 16
                    },
                    {
                        'name': 'API',
                        'value': 42
                    },
                    {
                        'name': 'Issues',
                        'value': 23
                    }
                ],
                '2W': [
                    {
                        'name': 'Frontend',
                        'value': 18
                    },
                    {
                        'name': 'Backend',
                        'value': 17
                    },
                    {
                        'name': 'API',
                        'value': 40
                    },
                    {
                        'name': 'Issues',
                        'value': 25
                    }
                ]
            },
            'footerLeft': {
                'title': 'Tasks Added',
                'count': {
                    '2W': 487,
                    'LW': 526,
                    'TW': 594
                }
            },
            'footerRight': {
                'title': 'Tasks Completed',
                'count': {
                    '2W': 193,
                    'LW': 260,
                    'TW': 287
                }
            }
        },
        'widget7': {
            'title': 'Schedule',
            'ranges': {
                'T': 'Today',
                'TM': 'Tomorrow'
            },
            'schedule': {
                'T': [
                    {
                        'title': 'Group Meeting',
                        'time': 'In 32 minutes',
                        'location': 'Room 1B'
                    },
                    {
                        'title': 'Coffee Break',
                        'time': '10:30 AM'
                    },
                    {
                        'title': 'Public Beta Release',
                        'time': '11:00 AM'
                    },
                    {
                        'title': 'Lunch',
                        'time': '12:10 PM'
                    },
                    {
                        'title': 'Dinner with David',
                        'time': '17:30 PM'
                    },
                    {
                        'title': 'Jane\'s Birthday Party',
                        'time': '19:30 PM'
                    },
                    {
                        'title': 'Overseer\'s Retirement Party',
                        'time': '21:30 PM'
                    }
                ],
                'TM': [
                    {
                        'title': 'Marketing Meeting',
                        'time': '09:00 AM'
                    },
                    {
                        'title': 'Public Announcement',
                        'time': '11:00 AM'
                    },
                    {
                        'title': 'Lunch',
                        'time': '12:10 PM'
                    },
                    {
                        'title': 'Meeting with Beta Testers',
                        'time': '15:00 AM'
                    },
                    {
                        'title': 'Live Stream',
                        'time': '17:30 PM'
                    },
                    {
                        'title': 'Release Party',
                        'time': '19:30 PM'
                    },
                    {
                        'title': 'CEO\'s Party',
                        'time': '22:30 PM'
                    }
                ]
            }
        },
        'widget8': {
            'title': 'Budget Distribution',
            'mainChart': [
                {
                    'name': 'Wireframing',
                    'value': 12
                },
                {
                    'name': 'Design',
                    'value': 17
                },
                {
                    'name': 'Coding',
                    'value': 28
                },
                {
                    'name': 'Marketing',
                    'value': 25
                },
                {
                    'name': 'Extra',
                    'value': 15
                }
            ]
        },
        'widget9': {
            'title': 'Spent',
            'ranges': {
                'TW': 'This Week',
                'LW': 'Last Week',
                '2W': '2 Weeks Ago'
            },
            'weeklySpent': {
                'title': 'WEEKLY SPENT',
                'count': {
                    '2W': '2,682.85',
                    'LW': '1,445.34',
                    'TW': '3,630.15'
                },
                'chart': {
                    '2W': [
                        {
                            'name': 'CREATED',
                            'series': [
                                {
                                    'name': 'Mon',
                                    'value': 6
                                },
                                {
                                    'name': 'Tue',
                                    'value': 1
                                },
                                {
                                    'name': 'Wed',
                                    'value': 3
                                },
                                {
                                    'name': 'Thu',
                                    'value': 4
                                },
                                {
                                    'name': 'Fri',
                                    'value': 5
                                },
                                {
                                    'name': 'Sat',
                                    'value': 5
                                },
                                {
                                    'name': 'Sun',
                                    'value': 2
                                }
                            ]
                        }
                    ],
                    'LW': [
                        {
                            'name': 'Created',
                            'series': [
                                {
                                    'name': 'Mon',
                                    'value': 4
                                },
                                {
                                    'name': 'Tue',
                                    'value': 6
                                },
                                {
                                    'name': 'Wed',
                                    'value': 2
                                },
                                {
                                    'name': 'Thu',
                                    'value': 2
                                },
                                {
                                    'name': 'Fri',
                                    'value': 1
                                },
                                {
                                    'name': 'Sat',
                                    'value': 3
                                },
                                {
                                    'name': 'Sun',
                                    'value': 4
                                }
                            ]
                        }
                    ],
                    'TW': [
                        {
                            'name': 'Created',
                            'series': [
                                {
                                    'name': 'Mon',
                                    'value': 2
                                },
                                {
                                    'name': 'Tue',
                                    'value': 6
                                },
                                {
                                    'name': 'Wed',
                                    'value': 5
                                },
                                {
                                    'name': 'Thu',
                                    'value': 4
                                },
                                {
                                    'name': 'Fri',
                                    'value': 5
                                },
                                {
                                    'name': 'Sat',
                                    'value': 3
                                },
                                {
                                    'name': 'Sun',
                                    'value': 6
                                }
                            ]
                        }
                    ]
                }
            },
            'totalSpent': {
                'title': 'TOTAL SPENT',
                'count': {
                    '2W': '29,682.85',
                    'LW': '31,128.19',
                    'TW': '34,758.34'
                },
                'chart': {
                    '2W': [
                        {
                            'name': 'CREATED',
                            'series': [
                                {
                                    'name': 'Mon',
                                    'value': 3
                                },
                                {
                                    'name': 'Tue',
                                    'value': 2
                                },
                                {
                                    'name': 'Wed',
                                    'value': 2
                                },
                                {
                                    'name': 'Thu',
                                    'value': 4
                                },
                                {
                                    'name': 'Fri',
                                    'value': 7
                                },
                                {
                                    'name': 'Sat',
                                    'value': 7
                                },
                                {
                                    'name': 'Sun',
                                    'value': 4
                                }
                            ]
                        }
                    ],
                    'LW': [
                        {
                            'name': 'Created',
                            'series': [
                                {
                                    'name': 'Mon',
                                    'value': 5
                                },
                                {
                                    'name': 'Tue',
                                    'value': 7
                                },
                                {
                                    'name': 'Wed',
                                    'value': 8
                                },
                                {
                                    'name': 'Thu',
                                    'value': 8
                                },
                                {
                                    'name': 'Fri',
                                    'value': 6
                                },
                                {
                                    'name': 'Sat',
                                    'value': 4
                                },
                                {
                                    'name': 'Sun',
                                    'value': 1
                                }
                            ]
                        }
                    ],
                    'TW': [
                        {
                            'name': 'Created',
                            'series': [
                                {
                                    'name': 'Mon',
                                    'value': 6
                                },
                                {
                                    'name': 'Tue',
                                    'value': 4
                                },
                                {
                                    'name': 'Wed',
                                    'value': 7
                                },
                                {
                                    'name': 'Thu',
                                    'value': 5
                                },
                                {
                                    'name': 'Fri',
                                    'value': 5
                                },
                                {
                                    'name': 'Sat',
                                    'value': 4
                                },
                                {
                                    'name': 'Sun',
                                    'value': 7
                                }
                            ]
                        }
                    ]
                }
            },
            'remaining': {
                'title': 'REMAINING',
                'count': {
                    '2W': '94.317,15',
                    'LW': '92.871,81',
                    'TW': '89.241,66'
                },
                'chart': {
                    '2W': [
                        {
                            'name': 'CREATED',
                            'series': [
                                {
                                    'name': 'Mon',
                                    'value': 1
                                },
                                {
                                    'name': 'Tue',
                                    'value': 4
                                },
                                {
                                    'name': 'Wed',
                                    'value': 5
                                },
                                {
                                    'name': 'Thu',
                                    'value': 7
                                },
                                {
                                    'name': 'Fri',
                                    'value': 8
                                },
                                {
                                    'name': 'Sat',
                                    'value': 2
                                },
                                {
                                    'name': 'Sun',
                                    'value': 4
                                }
                            ]
                        }
                    ],
                    'LW': [
                        {
                            'name': 'Created',
                            'series': [
                                {
                                    'name': 'Mon',
                                    'value': 3
                                },
                                {
                                    'name': 'Tue',
                                    'value': 2
                                },
                                {
                                    'name': 'Wed',
                                    'value': 1
                                },
                                {
                                    'name': 'Thu',
                                    'value': 4
                                },
                                {
                                    'name': 'Fri',
                                    'value': 8
                                },
                                {
                                    'name': 'Sat',
                                    'value': 8
                                },
                                {
                                    'name': 'Sun',
                                    'value': 4
                                }
                            ]
                        }
                    ],
                    'TW': [
                        {
                            'name': 'Created',
                            'series': [
                                {
                                    'name': 'Mon',
                                    'value': 2
                                },
                                {
                                    'name': 'Tue',
                                    'value': 4
                                },
                                {
                                    'name': 'Wed',
                                    'value': 8
                                },
                                {
                                    'name': 'Thu',
                                    'value': 6
                                },
                                {
                                    'name': 'Fri',
                                    'value': 2
                                },
                                {
                                    'name': 'Sat',
                                    'value': 5
                                },
                                {
                                    'name': 'Sun',
                                    'value': 1
                                }
                            ]
                        }
                    ]
                }
            },
            'totalRemaining': {
                'title': 'TOTAL BUDGET',
                'count': '124.000,00'
            },
            'totalBudget': {
                'title': 'TOTAL BUDGET',
                'count': '124.000,00'
            }
        },
        'widget10': {
            'title': 'Budget Details',
            'table': {
                'columns': [
                    {
                        'title': 'Budget Type'
                    },
                    {
                        'title': 'Total Budget'
                    },
                    {
                        'title': 'Spent ($)'
                    },
                    {
                        'title': 'Spent (%)'
                    },
                    {
                        'title': 'Remaining ($)'
                    },
                    {
                        'title': 'Remaining (%)'
                    }
                ],
                'rows': [
                    [
                        {
                            'value': 'Wireframing',
                            'classes': 'mat-primary-bg',
                            'icon': ''
                        },
                        {
                            'value': '$14,880.00',
                            'classes': 'text-bold',
                            'icon': ''
                        },
                        {
                            'value': '$14,000.00',
                            'classes': '',
                            'icon': ''
                        },
                        {
                            'value': '%94.08',
                            'classes': 'text-success',
                            'icon': 'trending_up'
                        },
                        {
                            'value': '$880.00',
                            'classes': '',
                            'icon': ''
                        },
                        {
                            'value': '%5.92',
                            'classes': '',
                            'icon': ''
                        }
                    ],
                    [
                        {
                            'value': 'Design',
                            'classes': 'mat-green-bg',
                            'icon': ''
                        },
                        {
                            'value': '$21,080.00',
                            'classes': 'text-bold',
                            'icon': ''
                        },
                        {
                            'value': '$17,240.34',
                            'classes': '',
                            'icon': ''
                        },
                        {
                            'value': '%81.78',
                            'classes': 'text-success',
                            'icon': 'trending_up'
                        },
                        {
                            'value': '$3,839.66',
                            'classes': '',
                            'icon': ''
                        },
                        {
                            'value': '%18.22',
                            'classes': '',
                            'icon': ''
                        }
                    ],
                    [
                        {
                            'value': 'Coding',
                            'classes': 'mat-red-bg',
                            'icon': ''
                        },
                        {
                            'value': '$34,720.00',
                            'classes': 'text-bold',
                            'icon': ''
                        },
                        {
                            'value': '$3,518.00',
                            'classes': '',
                            'icon': ''
                        },
                        {
                            'value': '%10.13',
                            'classes': 'text-danger',
                            'icon': 'trending_down'
                        },
                        {
                            'value': '$31,202.00',
                            'classes': '',
                            'icon': ''
                        },
                        {
                            'value': '%89.87',
                            'classes': '',
                            'icon': ''
                        }
                    ],
                    [
                        {
                            'value': 'Marketing',
                            'classes': 'mat-accent-bg',
                            'icon': ''
                        },
                        {
                            'value': '$34,720.00',
                            'classes': 'text-bold',
                            'icon': ''
                        },
                        {
                            'value': '$0.00',
                            'classes': '',
                            'icon': ''
                        },
                        {
                            'value': '%0.00',
                            'classes': 'text-info',
                            'icon': 'trending_flat'
                        },
                        {
                            'value': '$34,720.00',
                            'classes': '',
                            'icon': ''
                        },
                        {
                            'value': '%100.00',
                            'classes': '',
                            'icon': ''
                        }
                    ],
                    [
                        {
                            'value': 'Extra',
                            'classes': 'mat-orange-bg',
                            'icon': ''
                        },
                        {
                            'value': '$18,600.00',
                            'classes': 'text-bold',
                            'icon': ''
                        },
                        {
                            'value': '$0.00',
                            'classes': '',
                            'icon': ''
                        },
                        {
                            'value': '%0.00',
                            'classes': 'text-info',
                            'icon': 'trending_flat'
                        },
                        {
                            'value': '$34,720.00',
                            'classes': '',
                            'icon': ''
                        },
                        {
                            'value': '%100.00',
                            'classes': '',
                            'icon': ''
                        }
                    ]
                ]
            }
        },
        'widget11': {
            'title': 'Team Members',
            'table': {
                'columns': ['avatar', 'name', 'position', 'office', 'email', 'phone'],
                'rows': [
                    {
                        avatar: 'assets/images/avatars/james.jpg',
                        name: 'Jack Gilbert',
                        position: 'Design Manager',
                        office: 'Johor Bahru',
                        email: 'jgilbert48@mail.com',
                        phone: '+16 298 032 7774'
                    },
                    {
                        avatar: 'assets/images/avatars/katherine.jpg',
                        name: 'Kathy Anderson',
                        position: 'Recruiting Manager',
                        office: 'Solţānābād',
                        email: 'kanderson49@mail.com.br',
                        phone: '+23 572 311 1136'
                    },
                    {
                        avatar: 'assets/images/avatars/andrew.jpg',
                        name: 'Mark Turner',
                        position: 'Recruiting Manager',
                        office: 'Neftegorsk',
                        email: 'mturner4a@mail.com',
                        phone: '+01 139 803 9263'
                    },
                    {
                        avatar: 'assets/images/avatars/jane.jpg',
                        name: 'Kathryn Martinez',
                        position: 'Director of Sales',
                        office: 'Palekastro',
                        email: 'kmartinez4b@mail.com',
                        phone: '+25 467 022 5393'
                    },
                    {
                        avatar: 'assets/images/avatars/alice.jpg',
                        name: 'Annie Gonzales',
                        position: 'Actuary',
                        office: 'Candon',
                        email: 'agonzales4c@mail.edu',
                        phone: '+99 891 619 7138'
                    },
                    {
                        avatar: 'assets/images/avatars/vincent.jpg',
                        name: 'Howard King',
                        position: 'Human Resources',
                        office: 'Bergen op Zoom',
                        email: 'hking4d@mail.gov',
                        phone: '+46 984 348 1409'
                    },
                    {
                        avatar: 'assets/images/avatars/joyce.jpg',
                        name: 'Elizabeth Dixon',
                        position: 'Electrical Engineer',
                        office: 'Písečná',
                        email: 'edixon4e@mail.gov',
                        phone: '+33 332 067 9063'
                    },
                    {
                        avatar: 'assets/images/avatars/danielle.jpg',
                        name: 'Dorothy Morris',
                        position: 'Office Assistant',
                        office: 'Magsaysay',
                        email: 'dmorris4f@mail.com',
                        phone: '+05 490 958 6120'
                    },
                    {
                        avatar: 'assets/images/avatars/carl.jpg',
                        name: 'Mark Gonzales',
                        position: 'Quality Control',
                        office: 'Matsue-shi',
                        email: 'mgonzales4g@mail.com',
                        phone: '+03 168 394 9935'
                    },
                    {
                        avatar: 'assets/images/avatars/profile.jpg',
                        name: 'Catherine Rogers',
                        position: 'Programmer Analyst',
                        office: 'Kangar',
                        email: 'crogers4h@mail.com',
                        phone: '+86 235 407 5373'
                    },
                    {
                        avatar: 'assets/images/avatars/garry.jpg',
                        name: 'Ruth Grant',
                        position: 'Community Outreach',
                        office: 'Beaune',
                        email: 'rgrant4i@mail.pl',
                        phone: '+36 288 083 8460'
                    },
                    {
                        avatar: 'assets/images/avatars/james.jpg',
                        name: 'Phyllis Gutierrez',
                        position: 'Administrative Assistant',
                        office: 'Shlissel’burg',
                        email: 'pgutierrez4j@mail.net',
                        phone: '+52 749 861 9304'
                    }, {
                        avatar: 'assets/images/avatars/alice.jpg',
                        name: 'Lillian Morris',
                        position: 'Media Planner',
                        office: 'Berlin',
                        email: 'lmorris4k@mail.de',
                        phone: '+59 695 110 3856'
                    }, {
                        avatar: 'assets/images/avatars/vincent.jpg',
                        name: 'Jeremy Anderson',
                        position: 'Systems Engineer',
                        office: 'Lũng Hồ',
                        email: 'janderson4l@mail.uk',
                        phone: '+40 384 115 1448'
                    },
                    {
                        avatar: 'assets/images/avatars/carl.jpg',
                        name: 'Arthur Lawrence',
                        position: 'Nurse Practicioner',
                        office: 'Sarkanjut',
                        email: 'alawrence4m@mail.com',
                        phone: '+36 631 599 7867'
                    }, {
                        avatar: 'assets/images/avatars/andrew.jpg',
                        name: 'David Simmons',
                        position: 'Social Worker',
                        office: 'Ushumun',
                        email: 'dsimmons4n@mail.com',
                        phone: '+01 189 681 4417'
                    }, {
                        avatar: 'assets/images/avatars/danielle.jpg',
                        name: 'Daniel Johnston',
                        position: 'Help Desk',
                        office: 'São Carlos',
                        email: 'djohnston4o@mail.gov',
                        phone: '+60 028 943 7919'
                    },
                    {
                        avatar: 'assets/images/avatars/joyce.jpg',
                        name: 'Ann King',
                        position: 'Internal Auditor',
                        office: 'Liren',
                        email: 'aking4p@mail.com',
                        phone: '+91 103 932 6545'
                    },
                    {
                        avatar: 'assets/images/avatars/james.jpg',
                        name: 'Phillip Franklin',
                        position: 'VP Accounting',
                        office: 'Soba',
                        email: 'pfranklin4q@mail.com',
                        phone: '+25 820 986 7626'
                    },
                    {
                        avatar: 'assets/images/avatars/garry.jpg',
                        name: 'Gary Gonzalez',
                        position: 'Speech Pathologist',
                        office: 'Gangkou',
                        email: 'ggonzalez4r@mail.cc',
                        phone: '+10 862 046 7916'
                    }
                ]
            }
        },
        'weatherWidget': {
            'locations': {
                'NewYork': {
                    'name': 'New York',
                    'icon': 'icon-rainy2',
                    'temp': {
                        'C': '22',
                        'F': '72'
                    },
                    'windSpeed': {
                        'KMH': 12,
                        'MPH': 7.5
                    },
                    'windDirection': 'NW',
                    'rainProbability': '98%',
                    'next3Days': [
                        {
                            'name': 'Sunday',
                            'icon': 'icon-rainy',
                            'temp': {
                                'C': '21',
                                'F': '70'
                            }
                        },
                        {
                            'name': 'Sunday',
                            'icon': 'icon-cloudy',
                            'temp': {
                                'C': '19',
                                'F': '66'
                            }
                        },
                        {
                            'name': 'Tuesday',
                            'icon': 'icon-windy3',
                            'temp': {
                                'C': '24',
                                'F': '75'
                            }
                        }
                    ]
                }
            },
            'currentLocation': 'NewYork',
            'tempUnit': 'C',
            'speedUnit': 'KMH'
        }
    };
    return ProjectsDashboardDb;
}());
exports.ProjectsDashboardDb = ProjectsDashboardDb;


/***/ }),

/***/ "../../../../../src/app/fuse-fake-db/quick-panel.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var QuickPanelFakeDb = (function () {
    function QuickPanelFakeDb() {
    }
    QuickPanelFakeDb.notes = [
        {
            'title': 'Best songs to listen while working',
            'detail': 'Last edit: May 8th, 2015'
        },
        {
            'title': 'Useful subreddits',
            'detail': 'Last edit: January 12th, 2015'
        }
    ];
    QuickPanelFakeDb.events = [
        {
            'title': 'Group Meeting',
            'detail': 'In 32 Minutes, Room 1B'
        },
        {
            'title': 'Public Beta Release',
            'detail': '11:00 PM'
        },
        {
            'title': 'Dinner with David',
            'detail': '17:30 PM'
        },
        {
            'title': 'Q&A Session',
            'detail': '20:30 PM'
        }
    ];
    return QuickPanelFakeDb;
}());
exports.QuickPanelFakeDb = QuickPanelFakeDb;


/***/ }),

/***/ "../../../../../src/app/fuse-fake-db/scrumboard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ScrumboardFakeDb = (function () {
    function ScrumboardFakeDb() {
    }
    ScrumboardFakeDb.boards = [
        {
            'id': '32gfhaf2',
            'name': 'ACME Frontend Application',
            'uri': 'acme-frontend-application',
            'settings': {
                'color': 'fuse-dark',
                'subscribed': false,
                'cardCoverImages': true
            },
            'lists': [
                {
                    'id': '56027cf5a2ca3839a5d36103',
                    'name': 'Design',
                    'idCards': [
                        '5603a2a3cab0c8300f6096b3',
                        '44d1.2b51ea6cc2b5d.21f4a3412e857.8ffa2d8b44ad9.ac87215ed53a1.67d4921ad8f8d.9f318bcb2'
                    ]
                },
                {
                    'id': '56127cf2a2ca3539g7d36103',
                    'name': 'Development',
                    'idCards': [
                        '2837273da9b93dd84243s0f9',
                        '5787b7e4740c57bf0dffd5b6',
                        '5637273da9b93bb84743a0f9',
                        '7987.9740ba532b0d4.f9d12243f7362.507c0738dc561.87fba0a03df6e.75e6508cacf10.7a9835b54'
                    ]
                },
                {
                    'id': 'faf244627326f1249525763d',
                    'name': 'Upcoming Features',
                    'idCards': [
                        'd9005a4b89ed2aadca48a6ad',
                        'f6b9d7a9247e5d794a081927',
                        '80ed.24ad3b18e2668.f28fbbceeeff9.5a834620a42f1.5909be19a2bf2.6c4a54947ce2d.da356b0c1',
                        '0ad2.7862f947bc456.f42b446df54cb.d1dd9e93601a1.9deb1406d1404.0b3c278fc7001.733341b42',
                        'bad3.51be8ad33acaf.9540ecb37f7e8.6bee596cfe7d3.44c68bee289c4.b96ed0b9f0af7.e14846035'
                    ]
                },
                {
                    'id': 'ad7d.9fffac5dff412.c83bca6853767.8fd7549b2b1ca.ceda8a01774c4.a5cf3976e87e4.ce79eeeea',
                    'name': 'Known Bugs',
                    'idCards': [
                        'acc6.9c673cd2f5e35.521e91d8d5991.4b2a95e0539d1.027930c0743c5.7ad1ea7bea476.e8fbe6347',
                        '3279.3d69b40cc0b75.690252b6bea08.1e1789b0b7c2e.2f264b8661ce2.84d5f56910e23.429be5e8a',
                        'ba01.8e1a43f92a03a.0022bd5cbb9ba.275c64d911d8c.880e0846a3966.f75ff43e53ad.48ad612e7'
                    ]
                }
            ],
            'cards': [
                {
                    'id': '2837273da9b93dd84243s0f9',
                    'name': 'Update generators',
                    'description': 'Current generator doesn\'t support Node.js 6 and above.',
                    'idAttachmentCover': '',
                    'idMembers': [
                        '26027s1930450d8bf7b10828'
                    ],
                    'idLabels': [
                        '26022e4129ad3a5sc28b36cd'
                    ],
                    'attachments': [],
                    'subscribed': false,
                    'checklists': [],
                    'checkItems': 0,
                    'checkItemsChecked': 0,
                    'comments': [
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message': 'AngularCLI could be a nice alternative.',
                            'time': 'now'
                        }
                    ],
                    'activities': [],
                    'due': null
                },
                {
                    'id': '5603a2a3cab0c8300f6096b3',
                    'name': 'Change background colors',
                    'description': '',
                    'idAttachmentCover': '67027cahbe3b52ecf2dc631c',
                    'idMembers': [
                        '76027g1930450d8bf7b10958'
                    ],
                    'idLabels': [
                        '56027e4119ad3a5dc28b36cd',
                        '5640635e19ad3a5dc21416b2'
                    ],
                    'attachments': [
                        {
                            'id': '67027cahbe3b52ecf2dc631c',
                            'name': 'mail.jpg',
                            'src': 'assets/images/scrumboard/mail.jpg',
                            'time': 'Added Nov 3 at 15:22AM',
                            'type': 'image'
                        },
                        {
                            'id': '56027cfcbe1b72ecf1fc452a',
                            'name': 'calendar.jpg',
                            'src': 'assets/images/scrumboard/calendar.jpg',
                            'time': 'Added Nov 1 at 12:34PM',
                            'type': 'image'
                        }
                    ],
                    'subscribed': true,
                    'checklists': [
                        {
                            'id': '63021cfdbe1x72wcf1fc451v',
                            'name': 'Checklist',
                            'checkItemsChecked': 1,
                            'checkItems': [
                                {
                                    'name': 'Implement a calendar library',
                                    'checked': false
                                },
                                {
                                    'name': 'Replace event colors with Material Design colors',
                                    'checked': true
                                },
                                {
                                    'name': 'Replace icons with Material Design icons',
                                    'checked': false
                                },
                                {
                                    'name': 'Use moment.js',
                                    'checked': false
                                }
                            ]
                        },
                        {
                            'name': 'Checklist 2',
                            'id': '74031cfdbe1x72wcz1dc166z',
                            'checkItemsChecked': 1,
                            'checkItems': [
                                {
                                    'name': 'Replace event colors with Material Design colors',
                                    'checked': true
                                },
                                {
                                    'name': 'Replace icons with Material Design icons',
                                    'checked': false
                                },
                                {
                                    'name': 'Use moment.js',
                                    'checked': false
                                }
                            ]
                        }
                    ],
                    'checkItems': 7,
                    'checkItemsChecked': 2,
                    'comments': [
                        {
                            'idMember': '56027c1930450d8bf7b10758',
                            'message': 'We should be able to add moment.js without any problems',
                            'time': '12 mins. ago'
                        },
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message': 'I added a link for a page that might help us deciding the colors',
                            'time': '30 mins. ago'
                        }
                    ],
                    'activities': [
                        {
                            'idMember': '56027c1930450d8bf7b10758',
                            'message': 'added a comment',
                            'time': '12 mins. ago'
                        },
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message': 'added a comment',
                            'time': '30 mins. ago'
                        },
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message': 'attached a link',
                            'time': '45 mins. ago'
                        }
                    ],
                    'due': '2017-08-29T10:16:34.000Z'
                },
                {
                    'id': '5637273da9b93bb84743a0f9',
                    'name': 'Fix splash screen bugs',
                    'description': '',
                    'idAttachmentCover': '',
                    'idMembers': [
                        '56027c1930450d8bf7b10758'
                    ],
                    'idLabels': [
                        '5640635e19ad3a5dc21416b2'
                    ],
                    'attachments': [],
                    'subscribed': true,
                    'checklists': [],
                    'checkItems': 0,
                    'checkItemsChecked': 0,
                    'comments': [],
                    'activities': [],
                    'due': null
                },
                {
                    'id': 'd9005a4b89ed2aadca48a6ad',
                    'name': 'Add alternative authentication pages',
                    'description': '',
                    'idAttachmentCover': '',
                    'idMembers': [
                        '36027j1930450d8bf7b10158'
                    ],
                    'idLabels': [
                        '6540635g19ad3s5dc31412b2',
                        '56027e4119ad3a5dc28b36cd'
                    ],
                    'attachments': [],
                    'subscribed': false,
                    'checklists': [
                        {
                            'id': 'dbfb.99bd0ad37dabc.e05046f0c824d.18f26bb524c96.78bebc8488634.240c0ee6a5e45.4cb872965',
                            'name': 'Pages',
                            'checkItemsChecked': 2,
                            'checkItems': [
                                {
                                    'name': 'Login',
                                    'checked': true
                                },
                                {
                                    'name': 'Register',
                                    'checked': true
                                },
                                {
                                    'name': 'Lost Password',
                                    'checked': false
                                },
                                {
                                    'name': 'Recover Password',
                                    'checked': false
                                },
                                {
                                    'name': 'Activate Account',
                                    'checked': false
                                }
                            ]
                        }
                    ],
                    'checkItems': 5,
                    'checkItemsChecked': 2,
                    'comments': [],
                    'activities': [],
                    'due': null
                },
                {
                    'id': '5787b7e4740c57bf0dffd5b6',
                    'name': 'Fix the console',
                    'description': 'We need to fix the console asap!',
                    'idAttachmentCover': '',
                    'idMembers': [],
                    'idLabels': [
                        '26022e4129ad3a5sc28b36cd'
                    ],
                    'attachments': [],
                    'subscribed': true,
                    'checklists': [],
                    'checkItems': 0,
                    'checkItemsChecked': 0,
                    'comments': [
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message': 'I\'m on it!',
                            'time': 'now'
                        }
                    ],
                    'activities': [],
                    'due': '2018-09-07T12:00:00.000Z'
                },
                {
                    'id': 'f6b9d7a9247e5d794a081927',
                    'name': 'New media player',
                    'description': '',
                    'idAttachmentCover': '',
                    'idMembers': [
                        '76027g1930450d8bf7b10958',
                        '56027c1930450d8bf7b10758',
                        '26027s1930450d8bf7b10828'
                    ],
                    'idLabels': [
                        '5640635e19ad3a5dc21416b2',
                        '6540635g19ad3s5dc31412b2'
                    ],
                    'attachments': [],
                    'subscribed': false,
                    'checklists': [],
                    'checkItems': 0,
                    'checkItemsChecked': 0,
                    'comments': [],
                    'activities': [],
                    'due': null
                },
                {
                    'id': 'acc6.9c673cd2f5e35.521e91d8d5991.4b2a95e0539d1.027930c0743c5.7ad1ea7bea476.e8fbe6347',
                    'name': 'Memory Leak',
                    'description': '',
                    'idAttachmentCover': '',
                    'idMembers': [
                        '36027j1930450d8bf7b10158'
                    ],
                    'idLabels': [
                        '26022e4129ad3a5sc28b36cd',
                        '5640635e19ad3a5dc21416b2'
                    ],
                    'attachments': [],
                    'subscribed': false,
                    'checklists': [],
                    'checkItems': 0,
                    'checkItemsChecked': 0,
                    'comments': [],
                    'activities': [],
                    'due': null
                },
                {
                    'id': '3279.3d69b40cc0b75.690252b6bea08.1e1789b0b7c2e.2f264b8661ce2.84d5f56910e23.429be5e8a',
                    'name': 'Broken toolbar on profile page',
                    'description': '',
                    'idAttachmentCover': '',
                    'idMembers': [
                        '26027s1930450d8bf7b10828'
                    ],
                    'idLabels': [
                        '26022e4129ad3a5sc28b36cd'
                    ],
                    'attachments': [],
                    'subscribed': false,
                    'checklists': [],
                    'checkItems': 0,
                    'checkItemsChecked': 0,
                    'comments': [
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message': 'This should be a medium priority bug, shouldn\'t it?',
                            'time': 'now'
                        }
                    ],
                    'activities': [],
                    'due': null
                },
                {
                    'id': 'ba01.8e1a43f92a03a.0022bd5cbb9ba.275c64d911d8c.880e0846a3966.f75ff43e53ad.48ad612e7',
                    'name': 'Button hover style',
                    'description': 'If there are 3 or more buttons in certain page, weird flashing happens when you hover over the red ones.',
                    'idAttachmentCover': '',
                    'idMembers': [
                        '26027s1930450d8bf7b10828'
                    ],
                    'idLabels': [
                        '26022e4129ad3a5sc28b36cd',
                        '5640635e19ad3a5dc21416b2'
                    ],
                    'attachments': [],
                    'subscribed': true,
                    'checklists': [],
                    'checkItems': 0,
                    'checkItemsChecked': 0,
                    'comments': [],
                    'activities': [],
                    'due': '2017-03-08T09:00:00.000Z'
                },
                {
                    'id': '80ed.24ad3b18e2668.f28fbbceeeff9.5a834620a42f1.5909be19a2bf2.6c4a54947ce2d.da356b0c1',
                    'name': 'New header designs',
                    'description': '',
                    'idAttachmentCover': '12027cafbe3b52ecf2ef632c',
                    'idMembers': [],
                    'idLabels': [
                        '56027e4119ad3a5dc28b36cd',
                        '6540635g19ad3s5dc31412b2',
                        '5640635e19ad3a5dc21416b2'
                    ],
                    'attachments': [
                        {
                            'id': '12027cafbe3b52ecf2ef632c',
                            'name': 'header-.jpg',
                            'src': 'assets/images/scrumboard/header-1.jpg',
                            'time': 'Added Nov 3 at 15:22AM',
                            'type': 'image'
                        },
                        {
                            'id': '55027ced1e1a12ecf1fced2a',
                            'name': 'header-2.jpg',
                            'src': 'assets/images/scrumboard/header-2.jpg',
                            'time': 'Added Nov 1 at 12:34PM',
                            'type': 'image'
                        }
                    ],
                    'subscribed': false,
                    'checklists': [],
                    'checkItems': 0,
                    'checkItemsChecked': 0,
                    'comments': [
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message': 'Currently we have two new designs ready to ship.',
                            'time': 'now'
                        }
                    ],
                    'activities': [],
                    'due': null
                },
                {
                    'id': '0ad2.7862f947bc456.f42b446df54cb.d1dd9e93601a1.9deb1406d1404.0b3c278fc7001.733341b42',
                    'name': 'Fixed footer',
                    'description': '',
                    'idAttachmentCover': '',
                    'idMembers': [
                        '26027s1930450d8bf7b10828',
                        '56027c1930450d8bf7b10758'
                    ],
                    'idLabels': [
                        '6540635g19ad3s5dc31412b2'
                    ],
                    'attachments': [],
                    'subscribed': true,
                    'checklists': [],
                    'checkItems': 0,
                    'checkItemsChecked': 0,
                    'comments': [],
                    'activities': [],
                    'due': null
                },
                {
                    'id': 'bad3.51be8ad33acaf.9540ecb37f7e8.6bee596cfe7d3.44c68bee289c4.b96ed0b9f0af7.e14846035',
                    'name': 'Collapsable navigation',
                    'description': '',
                    'idAttachmentCover': '',
                    'idMembers': [],
                    'idLabels': [
                        '6540635g19ad3s5dc31412b2'
                    ],
                    'attachments': [],
                    'subscribed': false,
                    'checklists': [],
                    'checkItems': 0,
                    'checkItemsChecked': 0,
                    'comments': [
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message': 'I\'m not sure why we re-doing the navigation. The current collapsable navigation works flawlessly.',
                            'time': 'now'
                        }
                    ],
                    'activities': [],
                    'due': null
                },
                {
                    'id': '44d1.2b51ea6cc2b5d.21f4a3412e857.8ffa2d8b44ad9.ac87215ed53a1.67d4921ad8f8d.9f318bcb2',
                    'name': 'Mail app new layout',
                    'description': 'Current layout has lots of flaws in mobile. Outlook view should help with that.',
                    'idAttachmentCover': '',
                    'idMembers': [
                        '56027c1930450d8bf7b10758',
                        '26027s1930450d8bf7b10828',
                        '76027g1930450d8bf7b10958',
                        '36027j1930450d8bf7b10158'
                    ],
                    'idLabels': [
                        '56027e4119ad3a5dc28b36cd',
                        '26022e4129ad3a5sc28b36cd'
                    ],
                    'attachments': [],
                    'subscribed': false,
                    'checklists': [],
                    'checkItems': 0,
                    'checkItemsChecked': 0,
                    'comments': [],
                    'activities': [],
                    'due': null
                },
                {
                    'id': '7987.9740ba532b0d4.f9d12243f7362.507c0738dc561.87fba0a03df6e.75e6508cacf10.7a9835b54',
                    'name': 'API recover and monitoring',
                    'description': 'We need a service to monitor and recover failed APIs.',
                    'idAttachmentCover': '',
                    'idMembers': [
                        '36027j1930450d8bf7b10158',
                        '76027g1930450d8bf7b10958'
                    ],
                    'idLabels': [
                        '26022e4129ad3a5sc28b36cd',
                        '5640635e19ad3a5dc21416b2'
                    ],
                    'attachments': [],
                    'subscribed': true,
                    'checklists': [
                        {
                            'id': '6926.2b31d119e4a.889401e0ca7a0.13ad8ce2e569d.976e54e8b5d87.456afccd7e820.d6c77106a',
                            'name': 'API Monitoring',
                            'checkItemsChecked': 2,
                            'checkItems': [
                                {
                                    'name': 'Simple dashboard design',
                                    'checked': false
                                },
                                {
                                    'name': 'Should be able to see different time periods on the same dashboard',
                                    'checked': true
                                },
                                {
                                    'name': 'Different colors for different clusters',
                                    'checked': true
                                }
                            ]
                        },
                        {
                            'id': '7c22.5261c7924387f.248e8b1d32205.003f7a9f501d1.1d48dcdbe8b23.8099dcc5f75a7.29a966196',
                            'name': 'API Recovery',
                            'checkItemsChecked': 1,
                            'checkItems': [
                                {
                                    'name': 'Warning notifications to all developers',
                                    'checked': false
                                },
                                {
                                    'name': 'Immediate recovery options attached to the notifications',
                                    'checked': true
                                },
                                {
                                    'name': 'Backups every 6hours',
                                    'checked': false
                                }
                            ]
                        }
                    ],
                    'checkItems': 6,
                    'checkItemsChecked': 3,
                    'comments': [],
                    'activities': [],
                    'due': '2017-02-02T11:20:34.000Z'
                }
            ],
            'members': [
                {
                    'id': '56027c1930450d8bf7b10758',
                    'name': 'Alice Freeman',
                    'avatar': 'assets/images/avatars/alice.jpg'
                },
                {
                    'id': '26027s1930450d8bf7b10828',
                    'name': 'Danielle Obrien',
                    'avatar': 'assets/images/avatars/danielle.jpg'
                },
                {
                    'id': '76027g1930450d8bf7b10958',
                    'name': 'James Lewis',
                    'avatar': 'assets/images/avatars/james.jpg'
                },
                {
                    'id': '36027j1930450d8bf7b10158',
                    'name': 'Vincent Munoz',
                    'avatar': 'assets/images/avatars/vincent.jpg'
                }
            ],
            'labels': [
                {
                    'id': '26022e4129ad3a5sc28b36cd',
                    'name': 'High Priority',
                    'color': 'mat-red-500-bg'
                },
                {
                    'id': '56027e4119ad3a5dc28b36cd',
                    'name': 'Design',
                    'color': 'mat-orange-400-bg'
                },
                {
                    'id': '5640635e19ad3a5dc21416b2',
                    'name': 'App',
                    'color': 'mat-blue-600-bg'
                },
                {
                    'id': '6540635g19ad3s5dc31412b2',
                    'name': 'Feature',
                    'color': 'mat-green-400-bg'
                }
            ]
        },
        {
            'id': '27cfcbe1',
            'name': 'ACME Backend Application',
            'uri': 'acme-backend-application',
            'settings': {
                'color': 'blue-grey',
                'subscribed': false,
                'cardCoverImages': true
            },
            'lists': [
                {
                    'id': '56027cf5a2ca3839a5d36103',
                    'name': 'Designs',
                    'idCards': [
                        '5603a2a3cab0c8300f6096b3'
                    ]
                },
                {
                    'id': '56127cf2a2ca3539g7d36103',
                    'name': 'Development',
                    'idCards': [
                        '5637273da9b93bb84743a0f9'
                    ]
                }
            ],
            'cards': [
                {
                    'id': '5603a2a3cab0c8300f6096b3',
                    'name': 'Calendar App Design',
                    'description': '',
                    'idAttachmentCover': '56027cfcbe1b72ecf1fc452a',
                    'idMembers': [
                        '56027c1930450d8bf7b10758',
                        '36027j1930450d8bf7b10158'
                    ],
                    'idLabels': [
                        '56027e4119ad3a5dc28b36cd',
                        '5640635e19ad3a5dc21416b2'
                    ],
                    'attachments': [
                        {
                            'id': '56027cfcbe1b72ecf1fc452a',
                            'name': 'calendar-app-design.jpg',
                            'src': 'assets/images/scrumboard/calendar.jpg',
                            'time': 'Added Nov 1 at 12:34PM',
                            'type': 'image'
                        },
                        {
                            'id': '67027cahbe3b52ecf2dc631c',
                            'url': 'assets/images/scrumboard/calendar.jpg',
                            'time': 'Added Nov 3 at 15:22AM',
                            'type': 'link'
                        }
                    ],
                    'subscribed': true,
                    'checklists': [
                        {
                            'id': '63021cfdbe1x72wcf1fc451v',
                            'name': 'Checklist',
                            'checkItemsChecked': 1,
                            'checkItems': [
                                {
                                    'name': 'Implement a calendar library',
                                    'checked': false
                                },
                                {
                                    'name': 'Replace event colors with Material Design colors',
                                    'checked': true
                                },
                                {
                                    'name': 'Replace icons with Material Design icons',
                                    'checked': false
                                },
                                {
                                    'name': 'Use moment.js',
                                    'checked': false
                                }
                            ]
                        },
                        {
                            'name': 'Checklist 2',
                            'id': '74031cfdbe1x72wcz1dc166z',
                            'checkItemsChecked': 1,
                            'checkItems': [
                                {
                                    'name': 'Replace event colors with Material Design colors',
                                    'checked': true
                                },
                                {
                                    'name': 'Replace icons with Material Design icons',
                                    'checked': false
                                },
                                {
                                    'name': 'Use moment.js',
                                    'checked': false
                                }
                            ]
                        }
                    ],
                    'checkItems': 7,
                    'checkItemsChecked': 2,
                    'comments': [
                        {
                            'idMember': '56027c1930450d8bf7b10758',
                            'message': 'We should be able to add moment.js without any problems',
                            'time': '12 mins. ago'
                        },
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message': 'I added a link for a page that might help us deciding the colors',
                            'time': '30 mins. ago'
                        }
                    ],
                    'activities': [
                        {
                            'idMember': '56027c1930450d8bf7b10758',
                            'message': 'added a comment',
                            'time': '12 mins. ago'
                        },
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message': 'added a comment',
                            'time': '30 mins. ago'
                        },
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message': 'attached a link',
                            'time': '45 mins. ago'
                        }
                    ],
                    'due': null
                },
                {
                    'id': '5637273da9b93bb84743a0f9',
                    'name': 'Fix Splash Screen bugs',
                    'description': '',
                    'idAttachmentCover': '5603a2ae2bbd55bb2db57478',
                    'idMembers': [
                        '56027c1930450d8bf7b10758'
                    ],
                    'idLabels': [],
                    'attachments': [
                        {
                            'id': '5603a2ae2bbd55bb2db57478',
                            'name': 'mail-app-design.jpg',
                            'src': 'assets/images/scrumboard/mail.jpg',
                            'time': 'Added Nov 1 at 12:34PM',
                            'type': 'image'
                        }
                    ],
                    'subscribed': true,
                    'checklists': [],
                    'checkItems': 0,
                    'checkItemsChecked': 0,
                    'comments': [],
                    'activities': [],
                    'due': null
                }
            ],
            'members': [
                {
                    'id': '56027c1930450d8bf7b10758',
                    'name': 'Alice Freeman',
                    'avatar': 'assets/images/avatars/alice.jpg'
                },
                {
                    'id': '26027s1930450d8bf7b10828',
                    'name': 'Danielle Obrien',
                    'avatar': 'assets/images/avatars/danielle.jpg'
                },
                {
                    'id': '76027g1930450d8bf7b10958',
                    'name': 'James Lewis',
                    'avatar': 'assets/images/avatars/james.jpg'
                },
                {
                    'id': '36027j1930450d8bf7b10158',
                    'name': 'Vincent Munoz',
                    'avatar': 'assets/images/avatars/vincent.jpg'
                }
            ],
            'labels': [
                {
                    'id': '56027e4119ad3a5dc28b36cd',
                    'name': 'Design',
                    'color': 'mat-red-500-bg'
                },
                {
                    'id': '5640635e19ad3a5dc21416b2',
                    'name': 'App',
                    'color': 'mat-blue-500-bg'
                },
                {
                    'id': '6540635g19ad3s5dc31412b2',
                    'name': 'Feature',
                    'color': 'mat-green-400-bg'
                }
            ]
        }
    ];
    return ScrumboardFakeDb;
}());
exports.ScrumboardFakeDb = ScrumboardFakeDb;


/***/ }),

/***/ "../../../../../src/app/fuse-fake-db/search.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SearchFakeDb = (function () {
    function SearchFakeDb() {
    }
    SearchFakeDb.classic = [
        {
            'title': 'Dynamically Procrastinate B2C',
            'url': 'ourwebaddress.com/articles/procrastinate',
            'excerpt': 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.'
        },
        {
            'title': 'Cross Media',
            'url': 'ourwebaddress.com/articles/cross-media',
            'excerpt': 'Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.'
        },
        {
            'title': 'Synergize',
            'url': 'ourwebaddress.com/articles/synergize',
            'excerpt': 'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.'
        },
        {
            'title': 'Parallel Platforms',
            'url': 'ourwebaddress.com/articles/parallel-paltforms',
            'excerpt': 'Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains.'
        },
        {
            'title': 'Growth Strategies',
            'url': 'ourwebaddress.com/articles/growth-strategies',
            'excerpt': 'Proactively envisioned multimedia based expertise and cross-media growth strategies. Holistically pontificate installed base portals after maintainable products.'
        },
        {
            'title': 'Methodologies',
            'url': 'ourwebaddress.com/articles/methodologies',
            'excerpt': 'Phosfluorescently engage worldwide methodologies with web-enabled technology. Completely pursue scalable customer service through sustainable potentialities.'
        },
        {
            'title': 'E-tailers',
            'url': 'ourwebaddress.com/articles/e-trailers',
            'excerpt': 'Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.'
        },
        {
            'title': 'Web Readiness',
            'url': 'ourwebaddress.com/articles/web-readiness',
            'excerpt': 'Credibly innovate granular internal or organic sources whereas high standards in web-readiness. Dramatically synthesize integrated schemas with optimal networks.'
        }
    ];
    SearchFakeDb.table = [
        {
            'name': 'Airi Satou',
            'position': 'Accountant',
            'office': 'Tokyo',
            'age': '33',
            'startDate': '2008/11/28',
            'salary': '162700',
            'email': 'a.satou@mail.com'
        },
        {
            'name': 'Angellica Ramos',
            'position': 'Chief Executive Officer (CEO)',
            'office': 'London',
            'age': '47',
            'startDate': '2009/10/09',
            'salary': '1200000',
            'email': 'a.ramos@mail.com'
        },
        {
            'name': 'Ashton Cox',
            'position': 'Hunior Technical Author',
            'office': 'San Fransisco',
            'age': '66',
            'startDate': '2009/01/12',
            'salary': '86000',
            'email': 'a.cox@mail.com'
        },
        {
            'name': 'Bradley Greer',
            'position': 'Software Engineer',
            'office': 'London',
            'age': '41',
            'startDate': '2012/10/13',
            'salary': '132000',
            'email': 'b.greer@mail.com'
        },
        {
            'name': 'Brenden Wagner',
            'position': 'Software Engineer',
            'office': 'San Fransisco',
            'age': '28',
            'startDate': '2011/06/07',
            'salary': '206850',
            'email': 'b.wagner@mail.com'
        },
        {
            'name': 'Brielle Williamson',
            'position': 'Integration Specialist',
            'office': 'New York',
            'age': '61',
            'startDate': '2012/12/02',
            'salary': '372000',
            'email': 'b.williamson@mail.com'
        },
        {
            'name': 'Bruno Nash',
            'position': 'Software Engineer',
            'office': 'London',
            'age': '38',
            'startDate': '2011/05/03',
            'salary': '163500',
            'email': 'b.nash@mail.com'
        },
        {
            'name': 'Caesar Vance',
            'position': 'Pre-Sales Support',
            'office': 'New York',
            'age': '21',
            'startDate': '2011/12/12',
            'salary': '106450',
            'email': 'c.vance@mail.com'
        },
        {
            'name': 'Cara Stevens',
            'position': 'Sales Assistant',
            'office': 'New York',
            'age': '46',
            'startDate': '2011/12/06',
            'salary': '145600',
            'email': 'c.stevens@mail.com'
        },
        {
            'name': 'Cedric Kelly',
            'position': 'Senior Javascript Developer',
            'office': 'Edinburg',
            'age': '22',
            'startDate': '2012/03/29',
            'salary': '433060',
            'email': 'c.kelly@mail.com'
        }
    ];
    return SearchFakeDb;
}());
exports.SearchFakeDb = SearchFakeDb;


/***/ }),

/***/ "../../../../../src/app/fuse-fake-db/todo.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TodoFakeDb = (function () {
    function TodoFakeDb() {
    }
    TodoFakeDb.todos = [
        {
            'id': '561551bd7fe2ff461101c192',
            'title': 'Proident tempor est nulla irure ad est',
            'notes': 'Id nulla nulla proident deserunt deserunt proident in quis. Cillum reprehenderit labore id anim laborum.',
            'startDate': 'Wednesday, January 29, 2014 3:17 PM',
            'dueDate': null,
            'completed': false,
            'starred': false,
            'important': false,
            'deleted': false,
            'tags': [1]
        },
        {
            'id': '561551bd4ac1e7eb77a3a750',
            'title': 'Magna quis irure quis ea pariatur laborum',
            'notes': '',
            'startDate': 'Sunday, February 1, 2015 1:30 PM',
            'dueDate': 'Friday, December 30, 2016 10:07 AM',
            'completed': false,
            'starred': false,
            'important': true,
            'deleted': false,
            'tags': [1, 4]
        },
        {
            'id': '561551bd917bfec2ddef2d49',
            'title': 'Ullamco duis commodo sint ad aliqua aute',
            'notes': 'Sunt laborum enim nostrud ea fugiat cillum mollit aliqua exercitation ad elit.',
            'startDate': 'Friday, April 11, 2014 3:43 AM',
            'dueDate': 'Wednesday, July 26, 2017 11:14 AM',
            'completed': false,
            'starred': true,
            'important': true,
            'deleted': false,
            'tags': [3]
        },
        {
            'id': '561551bdeeb2fd6877e18c29',
            'title': 'Eiusmod non occaecat pariatur Lorem in ex',
            'notes': 'Nostrud anim mollit incididunt qui qui sit commodo duis. Anim amet irure aliquip duis nostrud sit quis fugiat ullamco non dolor labore. Lorem sunt voluptate laboris culpa proident. Aute eiusmod aliqua exercitation irure exercitation qui laboris mollit occaecat eu occaecat fugiat.',
            'startDate': 'Wednesday, May 7, 2014 4:14 AM',
            'dueDate': 'Friday, December 15, 2017 4:01 AM',
            'completed': true,
            'starred': true,
            'important': false,
            'deleted': false,
            'tags': [2]
        },
        {
            'id': '561551bdf38eae0134ae43d4',
            'title': 'Lorem magna cillum consequat consequat mollit',
            'notes': 'Velit ipsum proident ea incididunt et. Consectetur eiusmod laborum voluptate duis occaecat ullamco sint enim proident.',
            'startDate': 'Sunday, August 23, 2015 11:19 PM',
            'dueDate': 'Friday, July 8, 2016 10:49 AM',
            'completed': false,
            'starred': false,
            'important': false,
            'deleted': false,
            'tags': [5, 4]
        },
        {
            'id': '561551bd32f1588c814a0ccd',
            'title': 'Quis irure cupidatat ad consequat reprehenderit excepteur',
            'notes': 'Esse nisi mollit aliquip mollit aute consequat adipisicing. Do excepteur dolore proident cupidatat pariatur irure consequat incididunt.',
            'startDate': 'Sunday, June 7, 2015 10:49 AM',
            'dueDate': 'Monday, January 9, 2017 8:34 AM',
            'completed': false,
            'starred': true,
            'important': false,
            'deleted': false,
            'tags': [2, 3]
        },
        {
            'id': '561551bd0bb4b08ca77038ef',
            'title': 'Officia voluptate tempor ut mollit ea cillum',
            'notes': 'Deserunt veniam reprehenderit do elit magna ut.',
            'startDate': 'Saturday, October 18, 2014 4:25 AM',
            'dueDate': 'Sunday, August 21, 2016 10:48 PM',
            'completed': true,
            'starred': false,
            'important': false,
            'deleted': false,
            'tags': [2, 4]
        },
        {
            'id': '561551bdf84eec913835ebe5',
            'title': 'Sit exercitation cupidatat minim est ipsum excepteur',
            'notes': '',
            'startDate': 'Friday, August 8, 2014 5:45 AM',
            'dueDate': 'Wednesday, June 15, 2016 1:53 PM',
            'completed': true,
            'starred': false,
            'important': true,
            'deleted': false,
            'tags': [1, 3]
        },
        {
            'id': '561551bd2047cc709af0f670',
            'title': 'Sunt fugiat officia nisi minim sunt duis',
            'notes': 'Eiusmod eiusmod sint aliquip exercitation cillum. Magna nulla officia ex consectetur ea ad excepteur in qui.',
            'startDate': 'Monday, July 13, 2015 1:55 PM',
            'dueDate': 'Thursday, March 3, 2016 2:26 PM',
            'completed': false,
            'starred': false,
            'important': false,
            'deleted': false,
            'tags': [
                {
                    'id': 5,
                    'name': 'mobile',
                    'label': 'Mobile',
                    'color': '#9C27B0'
                }
            ]
        },
        {
            'id': '561551bd73d1a627e97005ce',
            'title': 'Non cupidatat enim quis aliquip minim laborum',
            'notes': 'Qui cillum eiusmod nostrud sunt dolore velit nostrud labore voluptate ad dolore. Eu Lorem anim pariatur aliqua. Ullamco ut dolor velit esse occaecat dolore eu cillum commodo qui. Nulla dolor consequat voluptate magna ut commodo magna consectetur non aute proident.',
            'startDate': 'Tuesday, November 11, 2014 6:36 PM',
            'dueDate': 'Tuesday, August 9, 2016 7:18 AM',
            'completed': false,
            'starred': false,
            'important': false,
            'deleted': false,
            'tags': [2]
        },
        {
            'id': '561551bd8f7d793ded0a2353',
            'title': 'Dolor ex occaecat magna labore laboris qui',
            'notes': 'Incididunt qui excepteur eiusmod elit cillum occaecat voluptate cillum nostrud. Dolor ullamco ullamco eiusmod do sunt adipisicing pariatur. In esse esse labore id reprehenderit sint do. Pariatur culpa dolor tempor qui excepteur duis do anim minim ipsum.',
            'startDate': 'Monday, June 9, 2014 3:15 PM',
            'dueDate': 'Wednesday, October 19, 2016 3:38 PM',
            'completed': false,
            'starred': false,
            'important': true,
            'deleted': false,
            'tags': [3]
        },
        {
            'id': '561551bdaa586f72d0be02cc',
            'title': 'Ex nisi amet id dolore nostrud esse',
            'notes': '',
            'startDate': 'Thursday, January 15, 2015 6:11 PM',
            'dueDate': 'Sunday, August 20, 2017 10:02 AM',
            'completed': false,
            'starred': true,
            'important': true,
            'deleted': false,
            'tags': [4]
        },
        {
            'id': '561551bd9f1c2de5b27f537b',
            'title': 'In dolor velit labore dolore ex eiusmod',
            'notes': '',
            'startDate': 'Monday, March 10, 2014 12:50 AM',
            'dueDate': 'Thursday, January 26, 2017 3:10 PM',
            'completed': false,
            'starred': false,
            'important': false,
            'deleted': false,
            'tags': [4]
        },
        {
            'id': '561551bd26e21bb5e85b35cb',
            'title': 'Sunt voluptate aliquip exercitation minim magna sit',
            'notes': '',
            'startDate': 'Tuesday, March 24, 2015 10:54 PM',
            'dueDate': 'Wednesday, August 23, 2017 5:35 PM',
            'completed': false,
            'starred': false,
            'important': false,
            'deleted': false,
            'tags': [4]
        },
        {
            'id': '561551bd719860cf0ad2011a',
            'title': 'Nisi et ullamco minim ea proident tempor',
            'notes': 'Dolor veniam dolor cillum Lorem magna nisi in occaecat nulla dolor ea eiusmod.',
            'startDate': 'Friday, February 14, 2014 10:03 AM',
            'dueDate': 'Saturday, July 8, 2017 11:54 PM',
            'completed': false,
            'starred': true,
            'important': false,
            'deleted': false,
            'tags': [2, 4]
        },
        {
            'id': '561551bd49d800c243264a91',
            'title': 'Sit ipsum mollit cupidatat adipisicing officia aliquip',
            'notes': '',
            'startDate': 'Wednesday, December 10, 2014 9:25 AM',
            'dueDate': 'Friday, March 25, 2016 12:29 AM',
            'completed': true,
            'starred': false,
            'important': false,
            'deleted': false,
            'tags': [1]
        },
        {
            'id': '561551bd061990eaf40fb64f',
            'title': 'Amet sunt et quis amet commodo quis',
            'notes': 'Nulla dolore consequat aliqua sint consequat elit qui occaecat et.',
            'startDate': 'Saturday, March 1, 2014 3:59 PM',
            'dueDate': 'Saturday, November 7, 2015 2:00 PM',
            'completed': false,
            'starred': false,
            'important': true,
            'deleted': false,
            'tags': [1]
        },
        {
            'id': '561551be81d05fa94711e7f3',
            'title': 'Ut eiusmod ex ea eiusmod culpa incididunt',
            'notes': 'Fugiat non incididunt officia ex incididunt occaecat. Voluptate nostrud culpa aliquip mollit incididunt non dolore.',
            'startDate': 'Monday, February 2, 2015 3:07 PM',
            'dueDate': 'Saturday, October 14, 2017 6:57 AM',
            'completed': false,
            'starred': false,
            'important': false,
            'deleted': false,
            'tags': [2]
        },
        {
            'id': '561551be05c093a80e0c8d05',
            'title': 'Proident reprehenderit laboris pariatur ut et nisi',
            'notes': 'Reprehenderit proident ut ad cillum quis velit quis aliqua ut aliquip tempor ullamco.',
            'startDate': 'Sunday, June 14, 2015 4:40 AM',
            'dueDate': 'Wednesday, February 10, 2016 10:47 AM',
            'completed': true,
            'starred': true,
            'important': true,
            'deleted': false,
            'tags': [5]
        },
        {
            'id': '561551be3bb43a5bd431c2fc',
            'title': 'Aliqua aliquip aliquip aliquip et exercitation aute',
            'notes': 'Adipisicing Lorem tempor ex anim. Labore tempor laboris nostrud dolore voluptate ullamco. Fugiat ex deserunt anim minim esse velit laboris aute ea duis incididunt. Elit irure id Lorem incididunt laborum aliquip consectetur est irure sunt. Ut labore anim nisi aliqua tempor laborum nulla cillum. Duis irure consequat cillum magna cillum eiusmod ut. Et exercitation voluptate quis deserunt elit quis dolor deserunt ex ex esse ex.',
            'startDate': 'Saturday, May 3, 2014 1:32 AM',
            'dueDate': 'Monday, September 12, 2016 9:16 PM',
            'completed': true,
            'starred': false,
            'important': true,
            'deleted': true,
            'tags': [3]
        }
    ];
    TodoFakeDb.filters = [
        {
            'id': 0,
            'handle': 'starred',
            'title': 'Starred',
            'icon': 'star'
        },
        {
            'id': 1,
            'handle': 'important',
            'title': 'Priority',
            'icon': 'error'
        },
        {
            'id': 2,
            'handle': 'dueDate',
            'title': 'Sheduled',
            'icon': 'schedule'
        },
        {
            'id': 3,
            'handle': 'today',
            'title': 'Today',
            'icon': 'today'
        },
        {
            'id': 4,
            'handle': 'completed',
            'title': 'Done',
            'icon': 'check'
        },
        {
            'id': 4,
            'handle': 'deleted',
            'title': 'Deleted',
            'icon': 'delete'
        }
    ];
    TodoFakeDb.tags = [
        {
            'id': 1,
            'handle': 'frontend',
            'title': 'Frontend',
            'color': '#388E3C'
        },
        {
            'id': 2,
            'handle': 'backend',
            'title': 'Backend',
            'color': '#F44336'
        },
        {
            'id': 3,
            'handle': 'api',
            'title': 'API',
            'color': '#FF9800'
        },
        {
            'id': 4,
            'handle': 'issue',
            'title': 'Issue',
            'color': '#0091EA'
        },
        {
            'id': 5,
            'handle': 'mobile',
            'title': 'Mobile',
            'color': '#9C27B0'
        }
    ];
    return TodoFakeDb;
}());
exports.TodoFakeDb = TodoFakeDb;


/***/ }),

/***/ "../../../../../src/app/main/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/main/content/content.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  z-index: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/content.component.ts":
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
var animations_1 = __webpack_require__("../../../../../src/app/core/animations.ts");
var config_service_1 = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
__webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var FuseContentComponent = (function () {
    function FuseContentComponent(router, activatedRoute, fuseConfig) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fuseConfig = fuseConfig;
        this.routeAnimationUp = false;
        this.routeAnimationDown = false;
        this.routeAnimationRight = false;
        this.routeAnimationLeft = false;
        this.routeAnimationFade = false;
        this.router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .map(function () { return _this.activatedRoute; })
            .subscribe(function (event) {
            switch (_this.fuseSettings.routerAnimation) {
                case 'fadeIn':
                    _this.routeAnimationFade = !_this.routeAnimationFade;
                    break;
                case 'slideUp':
                    _this.routeAnimationUp = !_this.routeAnimationUp;
                    break;
                case 'slideDown':
                    _this.routeAnimationDown = !_this.routeAnimationDown;
                    break;
                case 'slideRight':
                    _this.routeAnimationRight = !_this.routeAnimationRight;
                    break;
                case 'slideLeft':
                    _this.routeAnimationLeft = !_this.routeAnimationLeft;
                    break;
            }
        });
        this.onSettingsChanged =
            this.fuseConfig.onSettingsChanged
                .subscribe(function (newSettings) {
                _this.fuseSettings = newSettings;
            });
    }
    FuseContentComponent.prototype.ngOnInit = function () {
    };
    FuseContentComponent.prototype.ngOnDestroy = function () {
        this.onSettingsChanged.unsubscribe();
    };
    __decorate([
        core_1.HostBinding('@routerTransitionUp'),
        __metadata("design:type", Object)
    ], FuseContentComponent.prototype, "routeAnimationUp", void 0);
    __decorate([
        core_1.HostBinding('@routerTransitionDown'),
        __metadata("design:type", Object)
    ], FuseContentComponent.prototype, "routeAnimationDown", void 0);
    __decorate([
        core_1.HostBinding('@routerTransitionRight'),
        __metadata("design:type", Object)
    ], FuseContentComponent.prototype, "routeAnimationRight", void 0);
    __decorate([
        core_1.HostBinding('@routerTransitionLeft'),
        __metadata("design:type", Object)
    ], FuseContentComponent.prototype, "routeAnimationLeft", void 0);
    __decorate([
        core_1.HostBinding('@routerTransitionFade'),
        __metadata("design:type", Object)
    ], FuseContentComponent.prototype, "routeAnimationFade", void 0);
    FuseContentComponent = __decorate([
        core_1.Component({
            selector: 'fuse-content',
            template: __webpack_require__("../../../../../src/app/main/content/content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/content.component.scss")],
            animations: animations_1.fuseAnimations
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            config_service_1.FuseConfigService])
    ], FuseContentComponent);
    return FuseContentComponent;
}());
exports.FuseContentComponent = FuseContentComponent;


/***/ }),

/***/ "../../../../../src/app/main/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- RDANNER REMOVE\n<mat-toolbar>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutAlign.gt-xs=\"space-between center\" fxFlex>\n        <a href=\"http://themeforest.net/item/fuse-angularjs-material-design-admin-template/12931855?ref=srcn\"\n           target=\"_blank\" mat-button class=\"mat-pink-bg\" fxFlex=\"0 0 auto\" fxLayout=\"row\"\n           fxLayoutAlign=\"start center\">\n            <mat-icon class=\"s-16 mr-sm-4\">shopping_cart</mat-icon>\n            <span>Purchase FUSE (Angular5+)</span>\n        </a>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxHide fxShow.gt-xs>\n            <a mat-button href=\"http://fusetheme.com/angular/docs\" target=\"_blank\">Documentation</a>\n            <span>&bull;</span>\n            <a mat-button href=\"http://fusetheme.com/angular/changelog\" target=\"_blank\">Changelog</a>\n        </div>\n\n    </div>\n</mat-toolbar>\n-->\n"

/***/ }),

/***/ "../../../../../src/app/main/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  z-index: 3; }\n  :host .mat-toolbar {\n    background: inherit;\n    color: inherit;\n    box-shadow: 0px -1px 1px -1px rgba(0, 0, 0, 0.2), 0px 0px 1px 0px rgba(0, 0, 0, 0.14), 0px -1px 3px 0px rgba(0, 0, 0, 0.12); }\n  :host.above {\n    position: relative;\n    z-index: 99; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/footer/footer.component.ts":
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
var FuseFooterComponent = (function () {
    function FuseFooterComponent() {
    }
    FuseFooterComponent.prototype.ngOnInit = function () {
    };
    FuseFooterComponent = __decorate([
        core_1.Component({
            selector: 'fuse-footer',
            template: __webpack_require__("../../../../../src/app/main/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseFooterComponent);
    return FuseFooterComponent;
}());
exports.FuseFooterComponent = FuseFooterComponent;


/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n\n    <div id=\"fuse-main-content\">\n\n        <!-- TOOLBAR: Above -->\n        <ng-container *ngIf=\"fuseSettings.layout.toolbar === 'above'\">\n            <fuse-toolbar class=\"above\" [ngClass]=\"fuseSettings.colorClasses.toolbar\"></fuse-toolbar>\n        </ng-container>\n        <!-- / TOOLBAR: Above -->\n\n        <!-- NAVBAR: Top -->\n        <fuse-navbar-horizontal class=\"top-navbar\" fxHide fxShow.gt-md\n                                [ngClass]=\"fuseSettings.colorClasses.navbar\"\n                                *ngIf=\"fuseSettings.layout.navigation === 'top'\">\n        </fuse-navbar-horizontal>\n        <!-- / NAVBAR: Top -->\n\n        <div id=\"wrapper\">\n\n            <!-- NAVBAR: Left -->\n            <fuse-navbar-vertical [folded]=\"fuseSettings.layout.navigationFolded\"\n                                  class=\"left-navbar\"\n                                  [ngClass]=\"fuseSettings.colorClasses.navbar\"\n                                  *ngIf=\"fuseSettings.layout.navigation === 'left' || fuseSettings.layout.navigation === 'top'\">\n            </fuse-navbar-vertical>\n            <!-- / NAVBAR: Left -->\n\n            <div class=\"content-wrapper\">\n\n                <!-- TOOLBAR: Below -->\n                <ng-container *ngIf=\"fuseSettings.layout.toolbar === 'below'\">\n                    <fuse-toolbar class=\"below\" [ngClass]=\"fuseSettings.colorClasses.toolbar\"></fuse-toolbar>\n                </ng-container>\n                <!-- / TOOLBAR: Below -->\n\n                <fuse-content></fuse-content>\n\n                <!-- FOOTER: Below -->\n                <ng-container *ngIf=\"fuseSettings.layout.footer === 'below'\">\n                    <fuse-footer class=\"below\" [ngClass]=\"fuseSettings.colorClasses.footer\"></fuse-footer>\n                </ng-container>\n                <!-- / FOOTER: Below -->\n\n            </div>\n\n            <!-- NAVBAR: Right -->\n            <fuse-navbar-vertical [folded]=\"fuseSettings.layout.navigationFolded\"\n                                  class=\"right-navbar\"\n                                  [ngClass]=\"fuseSettings.colorClasses.navbar\"\n                                  *ngIf=\"fuseSettings.layout.navigation === 'right'\">\n            </fuse-navbar-vertical>\n            <!-- / NAVBAR: Right -->\n\n        </div>\n\n        <!-- FOOTER: Above -->\n        <ng-container *ngIf=\"fuseSettings.layout.footer === 'above'\">\n            <fuse-footer class=\"above\" [ngClass]=\"fuseSettings.colorClasses.footer\"></fuse-footer>\n        </ng-container>\n        <!-- FOOTER: Above -->\n\n    </div>\n\n    <!-- QUICK PANEL -->\n    <mat-sidenav fuseMatSidenavHelper=\"quick-panel\" align=\"end\">\n        <fuse-quick-panel></fuse-quick-panel>\n    </mat-sidenav>\n    <!-- / QUICK PANEL -->\n\n</mat-sidenav-container>\n\n<fuse-theme-options></fuse-theme-options>\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\nfuse-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 100%; }\n  fuse-main > .mat-sidenav-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n    fuse-main > .mat-sidenav-container > .mat-sidenav-content,\n    fuse-main > .mat-sidenav-container > .mat-drawer-content {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      overflow: hidden;\n      height: 100vh; }\n      @media (max-width: 959px) {\n        fuse-main > .mat-sidenav-container > .mat-sidenav-content,\n        fuse-main > .mat-sidenav-container > .mat-drawer-content {\n          height: auto !important; } }\n      fuse-main > .mat-sidenav-container > .mat-sidenav-content #fuse-main-content,\n      fuse-main > .mat-sidenav-container > .mat-drawer-content #fuse-main-content {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        overflow: hidden; }\n        fuse-main > .mat-sidenav-container > .mat-sidenav-content #fuse-main-content #wrapper,\n        fuse-main > .mat-sidenav-container > .mat-drawer-content #fuse-main-content #wrapper {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          position: relative;\n          -webkit-box-flex: 1;\n              -ms-flex: 1;\n                  flex: 1;\n          overflow: hidden; }\n          fuse-main > .mat-sidenav-container > .mat-sidenav-content #fuse-main-content #wrapper .content-wrapper,\n          fuse-main > .mat-sidenav-container > .mat-drawer-content #fuse-main-content #wrapper .content-wrapper {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            -webkit-box-flex: 1;\n                -ms-flex: 1;\n                    flex: 1;\n            overflow: hidden; }\n            fuse-main > .mat-sidenav-container > .mat-sidenav-content #fuse-main-content #wrapper .content-wrapper fuse-content,\n            fuse-main > .mat-sidenav-container > .mat-drawer-content #fuse-main-content #wrapper .content-wrapper fuse-content {\n              position: relative;\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-flex: 1;\n                  -ms-flex: 1;\n                      flex: 1;\n              -webkit-box-orient: horizontal;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: row;\n                      flex-direction: row;\n              width: 100%;\n              overflow: hidden; }\n              fuse-main > .mat-sidenav-container > .mat-sidenav-content #fuse-main-content #wrapper .content-wrapper fuse-content > *:not(router-outlet):not(.ps__scrollbar-x-rail):not(.ps__scrollbar-y-rail),\n              fuse-main > .mat-sidenav-container > .mat-drawer-content #fuse-main-content #wrapper .content-wrapper fuse-content > *:not(router-outlet):not(.ps__scrollbar-x-rail):not(.ps__scrollbar-y-rail) {\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-box-flex: 1;\n                    -ms-flex: 1;\n                        flex: 1;\n                width: 100%;\n                min-width: 100%; }\n              fuse-main > .mat-sidenav-container > .mat-sidenav-content #fuse-main-content #wrapper .content-wrapper fuse-content > *.ng-animating .mat-tab-body,\n              fuse-main > .mat-sidenav-container > .mat-drawer-content #fuse-main-content #wrapper .content-wrapper fuse-content > *.ng-animating .mat-tab-body {\n                height: 100vh; }\n  fuse-main[fuse-layout-mode=\"boxed\"] {\n    max-width: 1200px;\n    margin: 0 auto;\n    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
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
var config_service_1 = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
var platform_1 = __webpack_require__("../../../cdk/esm5/platform.es5.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var FuseMainComponent = (function () {
    function FuseMainComponent(_renderer, _elementRef, fuseConfig, platform, document) {
        var _this = this;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.fuseConfig = fuseConfig;
        this.platform = platform;
        this.document = document;
        this.onSettingsChanged =
            this.fuseConfig.onSettingsChanged
                .subscribe(function (newSettings) {
                _this.fuseSettings = newSettings;
                _this.layoutMode = _this.fuseSettings.layout.mode;
            });
        if (this.platform.ANDROID || this.platform.IOS) {
            this.document.body.className += ' is-mobile';
        }
    }
    FuseMainComponent.prototype.ngOnInit = function () {
    };
    FuseMainComponent.prototype.ngOnDestroy = function () {
        this.onSettingsChanged.unsubscribe();
    };
    FuseMainComponent.prototype.addClass = function (className) {
        this._renderer.addClass(this._elementRef.nativeElement, className);
    };
    FuseMainComponent.prototype.removeClass = function (className) {
        this._renderer.removeClass(this._elementRef.nativeElement, className);
    };
    __decorate([
        core_1.HostBinding('attr.fuse-layout-mode'),
        __metadata("design:type", Object)
    ], FuseMainComponent.prototype, "layoutMode", void 0);
    FuseMainComponent = __decorate([
        core_1.Component({
            selector: 'fuse-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(4, core_1.Inject(common_1.DOCUMENT)),
        __metadata("design:paramtypes", [core_1.Renderer2,
            core_1.ElementRef,
            config_service_1.FuseConfigService,
            platform_1.Platform, Object])
    ], FuseMainComponent);
    return FuseMainComponent;
}());
exports.FuseMainComponent = FuseMainComponent;


/***/ }),

/***/ "../../../../../src/app/main/main.module.ts":
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
var main_component_1 = __webpack_require__("../../../../../src/app/main/main.component.ts");
var content_component_1 = __webpack_require__("../../../../../src/app/main/content/content.component.ts");
var footer_component_1 = __webpack_require__("../../../../../src/app/main/footer/footer.component.ts");
var navbar_vertical_component_1 = __webpack_require__("../../../../../src/app/main/navbar/vertical/navbar-vertical.component.ts");
var toolbar_component_1 = __webpack_require__("../../../../../src/app/main/toolbar/toolbar.component.ts");
var navigation_module_1 = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.module.ts");
var navbar_vertical_toggle_directive_1 = __webpack_require__("../../../../../src/app/main/navbar/vertical/navbar-vertical-toggle.directive.ts");
var navbar_horizontal_component_1 = __webpack_require__("../../../../../src/app/main/navbar/horizontal/navbar-horizontal.component.ts");
var quick_panel_component_1 = __webpack_require__("../../../../../src/app/main/quick-panel/quick-panel.component.ts");
var theme_options_component_1 = __webpack_require__("../../../../../src/app/core/components/theme-options/theme-options.component.ts");
var shortcuts_module_1 = __webpack_require__("../../../../../src/app/core/components/shortcuts/shortcuts.module.ts");
var search_bar_module_1 = __webpack_require__("../../../../../src/app/core/components/search-bar/search-bar.module.ts");
var FuseMainModule = (function () {
    function FuseMainModule() {
    }
    FuseMainModule = __decorate([
        core_1.NgModule({
            declarations: [
                content_component_1.FuseContentComponent,
                footer_component_1.FuseFooterComponent,
                main_component_1.FuseMainComponent,
                navbar_vertical_component_1.FuseNavbarVerticalComponent,
                navbar_horizontal_component_1.FuseNavbarHorizontalComponent,
                toolbar_component_1.FuseToolbarComponent,
                navbar_vertical_toggle_directive_1.FuseNavbarVerticalToggleDirective,
                theme_options_component_1.FuseThemeOptionsComponent,
                quick_panel_component_1.FuseQuickPanelComponent
            ],
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule,
                navigation_module_1.FuseNavigationModule,
                shortcuts_module_1.FuseShortcutsModule,
                search_bar_module_1.FuseSearchBarModule
            ],
            exports: [
                main_component_1.FuseMainComponent
            ]
        })
    ], FuseMainModule);
    return FuseMainModule;
}());
exports.FuseMainModule = FuseMainModule;


/***/ }),

/***/ "../../../../../src/app/main/navbar/horizontal/navbar-horizontal.component.html":
/***/ (function(module, exports) {

module.exports = "<fuse-navigation layout=\"horizontal\"></fuse-navigation>\n"

/***/ }),

/***/ "../../../../../src/app/main/navbar/horizontal/navbar-horizontal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/navbar/horizontal/navbar-horizontal.component.ts":
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
var main_component_1 = __webpack_require__("../../../../../src/app/main/main.component.ts");
var FuseNavbarHorizontalComponent = (function () {
    function FuseNavbarHorizontalComponent(fuseMainComponent) {
        this.fuseMainComponent = fuseMainComponent;
    }
    FuseNavbarHorizontalComponent.prototype.ngOnInit = function () {
        this.fuseMainComponent.addClass('fuse-nav-bar-horizontal');
    };
    FuseNavbarHorizontalComponent.prototype.ngOnDestroy = function () {
        this.fuseMainComponent.removeClass('fuse-nav-bar-horizontal');
    };
    FuseNavbarHorizontalComponent = __decorate([
        core_1.Component({
            selector: 'fuse-navbar-horizontal',
            template: __webpack_require__("../../../../../src/app/main/navbar/horizontal/navbar-horizontal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/navbar/horizontal/navbar-horizontal.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [main_component_1.FuseMainComponent])
    ], FuseNavbarHorizontalComponent);
    return FuseNavbarHorizontalComponent;
}());
exports.FuseNavbarHorizontalComponent = FuseNavbarHorizontalComponent;


/***/ }),

/***/ "../../../../../src/app/main/navbar/vertical/navbar-vertical-toggle.directive.ts":
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
var navbar_vertical_service_1 = __webpack_require__("../../../../../src/app/main/navbar/vertical/navbar-vertical.service.ts");
var FuseNavbarVerticalToggleDirective = (function () {
    function FuseNavbarVerticalToggleDirective(navbarService) {
        this.navbarService = navbarService;
    }
    FuseNavbarVerticalToggleDirective.prototype.onClick = function () {
        this.navbar = this.navbarService.getNavBar();
        if (!this.navbar[this.fuseNavbarVertical]) {
            return;
        }
        this.navbar[this.fuseNavbarVertical]();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FuseNavbarVerticalToggleDirective.prototype, "fuseNavbarVertical", void 0);
    __decorate([
        core_1.HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuseNavbarVerticalToggleDirective.prototype, "onClick", null);
    FuseNavbarVerticalToggleDirective = __decorate([
        core_1.Directive({
            selector: '[fuseNavbarVertical]'
        }),
        __metadata("design:paramtypes", [navbar_vertical_service_1.FuseNavbarVerticalService])
    ], FuseNavbarVerticalToggleDirective);
    return FuseNavbarVerticalToggleDirective;
}());
exports.FuseNavbarVerticalToggleDirective = FuseNavbarVerticalToggleDirective;


/***/ }),

/***/ "../../../../../src/app/main/navbar/vertical/navbar-vertical.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-header\">\n\n    <div class=\"logo\">\n        <img class=\"logo-icon\" src=\"assets/images/logos/fuse.svg\">\n        <span class=\"logo-text\">FUSE</span>\n    </div>\n\n    <button mat-button class=\"toggle-button-navbar mat-icon-button\" fuseNavbarVertical=\"toggleFold\" fxHide.lt-lg>\n        <mat-icon>menu</mat-icon>\n    </button>\n\n    <button mat-button class=\"toggle-button-navbar mat-icon-button\" fuseNavbarVertical=\"closeBar\" fxHide.gt-md>\n        <mat-icon>arrow_back</mat-icon>\n    </button>\n\n</div>\n\n<div class=\"navbar-content\" fusePerfectScrollbar>\n    <fuse-navigation layout=\"vertical\"></fuse-navigation>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/navbar/vertical/navbar-vertical.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\nfuse-main.fuse-nav-bar-folded:not(.fuse-nav-bar-horizontal) .content-wrapper:last-child {\n  padding-left: 64px !important; }\n\nfuse-main.fuse-nav-bar-folded:not(.fuse-nav-bar-horizontal) .content-wrapper:first-child {\n  padding-right: 64px !important; }\n\nfuse-main.fuse-nav-bar-folded:not(.fuse-nav-bar-horizontal) .content-wrapper:first-child:last-child {\n  padding-left: 0 !important;\n  padding-right: 0 !important; }\n\nfuse-navbar-vertical {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 256px;\n  min-width: 256px;\n  max-width: 256px;\n  background-color: #FFFFFF;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 4;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), width 0.1s linear, min-width 0.1s linear, max-width 0.1s linear;\n  -webkit-transform: translateX(0);\n          transform: translateX(0); }\n  fuse-navbar-vertical.folded {\n    position: absolute;\n    top: 0;\n    bottom: 0; }\n    fuse-navbar-vertical.folded.left-navbar {\n      left: 0; }\n    fuse-navbar-vertical.folded.right-navbar {\n      right: 0; }\n    fuse-navbar-vertical.folded:not(.folded-open) {\n      width: 64px;\n      min-width: 64px;\n      max-width: 64px; }\n      fuse-navbar-vertical.folded:not(.folded-open) .navbar-header {\n        padding: 0 13px; }\n        fuse-navbar-vertical.folded:not(.folded-open) .navbar-header .logo .logo-text {\n          opacity: 0;\n          transition: opacity 200ms ease; }\n  fuse-navbar-vertical.close {\n    box-shadow: none; }\n    fuse-navbar-vertical.close.left-navbar {\n      -webkit-transform: translateX(-100%) !important;\n              transform: translateX(-100%) !important; }\n    fuse-navbar-vertical.close.right-navbar {\n      -webkit-transform: translateX(100%) !important;\n              transform: translateX(100%) !important; }\n  @media screen and (max-width: 1279px) {\n    fuse-navbar-vertical {\n      position: absolute;\n      top: 0;\n      bottom: 0; }\n      fuse-navbar-vertical.left-navbar {\n        left: 0; }\n      fuse-navbar-vertical.right-navbar {\n        right: 0; }\n      fuse-navbar-vertical:not(.initialized).left-navbar {\n        -webkit-transform: translateX(-100%);\n                transform: translateX(-100%); }\n      fuse-navbar-vertical:not(.initialized).right-navbar {\n        -webkit-transform: translateX(100%);\n                transform: translateX(100%); } }\n  fuse-navbar-vertical .navbar-header {\n    padding: 0 16px 0 24px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 64px;\n    min-height: 64px;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    transition: padding 200ms ease;\n    background-color: rgba(255, 255, 255, 0.05);\n    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n    fuse-navbar-vertical .navbar-header .logo {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      fuse-navbar-vertical .navbar-header .logo .logo-icon {\n        width: 38px;\n        height: 38px; }\n      fuse-navbar-vertical .navbar-header .logo .logo-text {\n        margin-left: 8px;\n        font-size: 20px;\n        font-weight: 300;\n        letter-spacing: 0.4px; }\n  fuse-navbar-vertical .navbar-content {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n\nfuse-navbar-horizontal + #wrapper > fuse-navbar-vertical {\n  display: none; }\n  @media (max-width: 1279px) {\n    fuse-navbar-horizontal + #wrapper > fuse-navbar-vertical {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; } }\n\n.fuse-navbar-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 3;\n  background-color: rgba(0, 0, 0, 0.6);\n  opacity: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/navbar/vertical/navbar-vertical.component.ts":
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
var match_media_service_1 = __webpack_require__("../../../../../src/app/core/services/match-media.service.ts");
var navbar_vertical_service_1 = __webpack_require__("../../../../../src/app/main/navbar/vertical/navbar-vertical.service.ts");
var flex_layout_1 = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
var main_component_1 = __webpack_require__("../../../../../src/app/main/main.component.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var navigation_service_1 = __webpack_require__("../../../../../src/app/core/components/navigation/navigation.service.ts");
var fuse_perfect_scrollbar_directive_1 = __webpack_require__("../../../../../src/app/core/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive.ts");
var animations_1 = __webpack_require__("../../../animations/esm5/animations.js");
var FuseNavbarVerticalComponent = (function () {
    function FuseNavbarVerticalComponent(fuseMainComponent, fuseMatchMedia, fuseNavigationService, navBarService, router, _renderer, _elementRef, animationBuilder, media) {
        var _this = this;
        this.fuseMainComponent = fuseMainComponent;
        this.fuseMatchMedia = fuseMatchMedia;
        this.fuseNavigationService = fuseNavigationService;
        this.navBarService = navBarService;
        this.router = router;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.animationBuilder = animationBuilder;
        this.media = media;
        this._backdropElement = null;
        this._folded = false;
        navBarService.setNavBar(this);
        this.navigationServiceWatcher =
            this.fuseNavigationService.onNavCollapseToggle.subscribe(function () {
                _this.fusePerfectScrollbarUpdateTimeout = setTimeout(function () {
                    _this.fusePerfectScrollbarDirective.update();
                }, 310);
            });
        this.matchMediaWatcher =
            this.fuseMatchMedia.onMediaChange
                .subscribe(function (mediaStep) {
                setTimeout(function () {
                    if (_this.media.isActive('lt-lg')) {
                        _this.closeBar();
                        _this.deActivateFolded();
                    }
                    else {
                        _this.openBar();
                        _this._detachBackdrop();
                    }
                });
            });
        router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                if (_this.media.isActive('lt-lg')) {
                    setTimeout(function () {
                        _this.closeBar();
                    });
                }
            }
        });
    }
    Object.defineProperty(FuseNavbarVerticalComponent.prototype, "folded", {
        get: function () {
            return this._folded;
        },
        set: function (value) {
            this._folded = value;
            if (this._folded) {
                this.activateFolded();
            }
            else {
                this.deActivateFolded();
            }
        },
        enumerable: true,
        configurable: true
    });
    FuseNavbarVerticalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isClosed = false;
        this.isFoldedActive = this._folded;
        this.isFoldedOpen = false;
        this.initialized = false;
        this.updateCssClasses();
        setTimeout(function () {
            _this.initialized = true;
        });
        if (this.media.isActive('lt-lg')) {
            this.closeBar();
            this.deActivateFolded();
        }
        else {
            if (!this._folded) {
                this.deActivateFolded();
            }
            else {
                this.activateFolded();
            }
        }
    };
    FuseNavbarVerticalComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.fusePerfectScrollbarUpdateTimeout);
        this.matchMediaWatcher.unsubscribe();
        this.navigationServiceWatcher.unsubscribe();
    };
    FuseNavbarVerticalComponent.prototype.openBar = function () {
        if (!this.isClosed) {
            return;
        }
        this.isClosed = false;
        this.updateCssClasses();
        if (this.media.isActive('lt-lg')) {
            this._attachBackdrop();
        }
    };
    FuseNavbarVerticalComponent.prototype.closeBar = function () {
        if (this.isClosed) {
            return;
        }
        this.isClosed = true;
        this.updateCssClasses();
        this._detachBackdrop();
    };
    FuseNavbarVerticalComponent.prototype.toggleBar = function () {
        if (this.isClosed) {
            this.openBar();
        }
        else {
            this.closeBar();
        }
    };
    FuseNavbarVerticalComponent.prototype.toggleFold = function () {
        if (!this.isFoldedActive) {
            this.activateFolded();
        }
        else {
            this.deActivateFolded();
        }
    };
    FuseNavbarVerticalComponent.prototype.activateFolded = function () {
        this.isFoldedActive = true;
        this.fuseMainComponent.addClass('fuse-nav-bar-folded');
        this.isFoldedOpen = false;
    };
    FuseNavbarVerticalComponent.prototype.deActivateFolded = function () {
        this.isFoldedActive = false;
        this.fuseMainComponent.removeClass('fuse-nav-bar-folded');
        this.isFoldedOpen = false;
    };
    FuseNavbarVerticalComponent.prototype.onMouseEnter = function () {
        this.isFoldedOpen = true;
    };
    FuseNavbarVerticalComponent.prototype.onMouseLeave = function () {
        this.isFoldedOpen = false;
    };
    FuseNavbarVerticalComponent.prototype.updateCssClasses = function () {
        if (!this.isClosed) {
            this.fuseMainComponent.addClass('fuse-navbar-opened');
            this.fuseMainComponent.removeClass('fuse-navbar-closed');
        }
        else {
            this.fuseMainComponent.addClass('fuse-navbar-closed');
            this.fuseMainComponent.removeClass('fuse-navbar-opened');
        }
    };
    FuseNavbarVerticalComponent.prototype._attachBackdrop = function () {
        var _this = this;
        this._backdropElement = this._renderer.createElement('div');
        this._backdropElement.classList.add('fuse-navbar-backdrop');
        this._renderer.appendChild(this._elementRef.nativeElement.parentElement, this._backdropElement);
        this.player =
            this.animationBuilder
                .build([
                animations_1.animate('400ms ease', animations_1.style({ opacity: 1 }))
            ]).create(this._backdropElement);
        this.player.play();
        this._backdropElement.addEventListener('click', function () {
            _this.closeBar();
        });
    };
    FuseNavbarVerticalComponent.prototype._detachBackdrop = function () {
        var _this = this;
        if (this._backdropElement) {
            this.player =
                this.animationBuilder
                    .build([
                    animations_1.animate('400ms cubic-bezier(.25,.8,.25,1)', animations_1.style({ opacity: 0 }))
                ]).create(this._backdropElement);
            this.player.play();
            this.player.onDone(function () {
                if (_this._backdropElement) {
                    _this._backdropElement.parentNode.removeChild(_this._backdropElement);
                    _this._backdropElement = null;
                }
            });
        }
    };
    __decorate([
        core_1.HostBinding('class.close'),
        __metadata("design:type", Boolean)
    ], FuseNavbarVerticalComponent.prototype, "isClosed", void 0);
    __decorate([
        core_1.HostBinding('class.folded'),
        __metadata("design:type", Boolean)
    ], FuseNavbarVerticalComponent.prototype, "isFoldedActive", void 0);
    __decorate([
        core_1.HostBinding('class.folded-open'),
        __metadata("design:type", Boolean)
    ], FuseNavbarVerticalComponent.prototype, "isFoldedOpen", void 0);
    __decorate([
        core_1.HostBinding('class.initialized'),
        __metadata("design:type", Boolean)
    ], FuseNavbarVerticalComponent.prototype, "initialized", void 0);
    __decorate([
        core_1.ViewChild(fuse_perfect_scrollbar_directive_1.FusePerfectScrollbarDirective),
        __metadata("design:type", Object)
    ], FuseNavbarVerticalComponent.prototype, "fusePerfectScrollbarDirective", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], FuseNavbarVerticalComponent.prototype, "folded", null);
    __decorate([
        core_1.HostListener('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuseNavbarVerticalComponent.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuseNavbarVerticalComponent.prototype, "onMouseLeave", null);
    FuseNavbarVerticalComponent = __decorate([
        core_1.Component({
            selector: 'fuse-navbar-vertical',
            template: __webpack_require__("../../../../../src/app/main/navbar/vertical/navbar-vertical.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/navbar/vertical/navbar-vertical.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [main_component_1.FuseMainComponent,
            match_media_service_1.FuseMatchMedia,
            navigation_service_1.FuseNavigationService,
            navbar_vertical_service_1.FuseNavbarVerticalService,
            router_1.Router,
            core_1.Renderer2,
            core_1.ElementRef,
            animations_1.AnimationBuilder,
            flex_layout_1.ObservableMedia])
    ], FuseNavbarVerticalComponent);
    return FuseNavbarVerticalComponent;
}());
exports.FuseNavbarVerticalComponent = FuseNavbarVerticalComponent;


/***/ }),

/***/ "../../../../../src/app/main/navbar/vertical/navbar-vertical.service.ts":
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
var FuseNavbarVerticalService = (function () {
    function FuseNavbarVerticalService() {
    }
    FuseNavbarVerticalService.prototype.setNavBar = function (ref) {
        this.navBarRef = ref;
    };
    FuseNavbarVerticalService.prototype.getNavBar = function () {
        return this.navBarRef;
    };
    FuseNavbarVerticalService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FuseNavbarVerticalService);
    return FuseNavbarVerticalService;
}());
exports.FuseNavbarVerticalService = FuseNavbarVerticalService;


/***/ }),

/***/ "../../../../../src/app/main/quick-panel/quick-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-list class=\"date\" cdkFocusRegionStart>\n\n    <h3 matSubheader cdkFocusInit>\n        <span>Today</span>\n    </h3>\n\n    <div class=\"secondary-text mat-display-1 mb-0 p-16\">\n        <div class=\"mb-12\">\n            {{date | date:'EEEE'}}\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n            <span> {{date | date:'d'}}</span>\n            <span class=\"mat-subheading-1\">th</span>\n            <span> {{date | date:'MMMM'}}</span>\n        </div>\n    </div>\n</mat-list>\n\n<mat-divider cdkFocusRegionEnd></mat-divider>\n\n<mat-list>\n    <h3 matSubheader>\n        <span>Events</span>\n    </h3>\n\n    <mat-list-item *ngFor=\"let event of events\">\n        <h3 matLine>{{event.title}}</h3>\n        <p matLine class=\"secondary-text\">{{event.detail}}</p>\n    </mat-list-item>\n</mat-list>\n\n<mat-divider></mat-divider>\n\n<mat-list>\n    <h3 matSubheader>\n        <span>Notes</span>\n    </h3>\n\n    <mat-list-item *ngFor=\"let note of notes\">\n        <h3 matLine>{{note.title}}</h3>\n        <p matLine class=\"secondary-text\">{{note.detail}}</p>\n    </mat-list-item>\n</mat-list>\n\n<mat-divider></mat-divider>\n\n<mat-list>\n    <h3 matSubheader>\n        <span>Quick Settings</span>\n    </h3>\n\n    <mat-list-item>\n        <mat-slide-toggle fxFlex class=\"mat-primary\" [(ngModel)]=\"settings.notify\" aria-label=\"Notifications\"\n                          labelPosition=\"before\">\n            <h3>Notifications</h3>\n        </mat-slide-toggle>\n    </mat-list-item>\n\n    <mat-list-item>\n        <mat-slide-toggle fxFlex class=\"mat-accent\" [(ngModel)]=\"settings.cloud\" aria-label=\"Cloud\"\n                          labelPosition=\"before\">\n            <h3>Cloud Sync</h3>\n        </mat-slide-toggle>\n    </mat-list-item>\n\n    <mat-list-item>\n        <mat-slide-toggle fxFlex class=\"mat-warn\" [(ngModel)]=\"settings.retro\" aria-label=\"Retro Thrusters\"\n                          labelPosition=\"before\">\n            <h3>Retro Thrusters</h3>\n        </mat-slide-toggle>\n    </mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "../../../../../src/app/main/quick-panel/quick-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "fuse-quick-panel {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 330px;\n  min-width: 330px;\n  max-width: 330px;\n  z-index: 99;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  fuse-quick-panel .mat-slide-toggle-content {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/quick-panel/quick-panel.component.ts":
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
var FuseQuickPanelComponent = (function () {
    function FuseQuickPanelComponent(http) {
        this.http = http;
        this.date = new Date();
        this.settings = {
            notify: true,
            cloud: false,
            retro: true
        };
    }
    FuseQuickPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('api/quick-panel-notes')
            .subscribe(function (response) {
            _this.notes = response;
        });
        this.http.get('api/quick-panel-events')
            .subscribe(function (response) {
            _this.events = response;
        });
    };
    FuseQuickPanelComponent = __decorate([
        core_1.Component({
            selector: 'fuse-quick-panel',
            template: __webpack_require__("../../../../../src/app/main/quick-panel/quick-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/quick-panel/quick-panel.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], FuseQuickPanelComponent);
    return FuseQuickPanelComponent;
}());
exports.FuseQuickPanelComponent = FuseQuickPanelComponent;


/***/ }),

/***/ "../../../../../src/app/main/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"p-0 mat-elevation-z1\">\n\n    <mat-progress-bar *ngIf=\"showLoadingBar\" class=\"loading-bar\" color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n\n    <div fxFlex fxFill fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n        <div fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <button mat-button class=\"toggle-button-navbar mat-icon-button\"\n                    fuseNavbarVertical=\"toggleBar\" fxHide.gt-md>\n                <mat-icon>menu</mat-icon>\n            </button>\n\n            <div class=\"toolbar-separator\" fxHide.gt-md></div>\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngIf=\"horizontalNav\">\n                <div class=\"logo ml-16\">\n                    <img class=\"logo-icon\" src=\"assets/images/logos/fuse.svg\">\n                </div>\n            </div>\n\n            <!--div class=\"px-8 px-mat-16\">\n                <fuse-shortcuts></fuse-shortcuts>\n            </div-->\n\n        </div>\n\n        <div class=\"\" fxFlex=\"0 1 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <button mat-button [matMenuTriggerFor]=\"userMenu\"\n                    class=\"user-button\">\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                    <img class=\"avatar\" src=\"assets/images/avatars/profile.jpg\">\n                    <span class=\"username mr-12\" fxHide fxShow.gt-sm>John Doe</span>\n                    <mat-icon class=\"s-16\" fxHide.xs>keyboard_arrow_down</mat-icon>\n                </div>\n            </button>\n\n            <mat-menu #userMenu=\"matMenu\" [overlapTrigger]=\"false\">\n\n                <button mat-menu-item>\n                    <mat-icon>account_circle</mat-icon>\n                    <span>My Profile</span>\n                </button>\n\n                <button mat-menu-item class=\"\">\n                    <mat-icon>mail</mat-icon>\n                    <span>Inbox</span>\n                </button>\n\n                <button mat-menu-item class=\"\">\n                    <mat-icon>exit_to_app</mat-icon>\n                    <span>Logout</span>\n                </button>\n\n            </mat-menu>\n\n            <div class=\"toolbar-separator\"></div>\n\n            <fuse-search-bar (onInput)=\"search($event)\"></fuse-search-bar>\n\n            <div class=\"toolbar-separator\"></div>\n\n            <button mat-button fxHide fxShow.gt-xs\n                    class=\"language-button\"\n                    [matMenuTriggerFor]=\"languageMenu\">\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                    <img class=\"flag mr-8\" [src]=\"'assets/images/flags/'+selectedLanguage.flag+'.png'\">\n                    <span class=\"iso text-uppercase\">{{selectedLanguage.id}}</span>\n                </div>\n            </button>\n\n            <mat-menu #languageMenu=\"matMenu\" [overlapTrigger]=\"false\">\n\n                <button mat-menu-item *ngFor=\"let lang of languages\" (click)=\"setLanguage(lang)\">\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <img class=\"flag mr-16\" [src]=\"'assets/images/flags/'+lang.flag+'.png'\">\n                        <span class=\"iso\">{{lang.title}}</span>\n                    </div>\n                </button>\n\n                <button mat-menu-item [routerLink]=\"'/components/multi-language'\">\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <span>Learn more</span>\n                    </div>\n                </button>\n\n            </mat-menu>\n\n            <div class=\"toolbar-separator\" fxHide fxShow.gt-xs></div>\n\n            <button mat-icon-button\n                    class=\"mat-icon-button quick-panel-toggle-button\"\n                    fuseMatSidenavToggler=\"quick-panel\"\n                    aria-label=\"Toggle quick panel\">\n                <mat-icon class=\"icon\">format_list_bulleted</mat-icon>\n            </button>\n\n        </div>\n    </div>\n</mat-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/main/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n:host {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  z-index: 4; }\n  :host.below {\n    z-index: 2; }\n  :host .mat-toolbar {\n    background: inherit;\n    color: inherit;\n    position: relative; }\n    :host .mat-toolbar .loading-bar {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      width: 100%; }\n  :host .logo {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    :host .logo .logo-icon {\n      width: 38px; }\n  :host .user-button,\n  :host fuse-search-bar,\n  :host .language-button,\n  :host .quick-panel-toggle-button {\n    min-width: 64px;\n    height: 64px; }\n    @media (max-width: 599px) {\n      :host .user-button,\n      :host fuse-search-bar,\n      :host .language-button,\n      :host .quick-panel-toggle-button {\n        height: 56px; } }\n  :host .toggle-button-navbar {\n    min-width: 56px;\n    height: 56px; }\n  :host .toolbar-separator {\n    height: 64px;\n    width: 1px;\n    background: rgba(0, 0, 0, 0.12); }\n    @media (max-width: 599px) {\n      :host .toolbar-separator {\n        height: 56px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/toolbar/toolbar.component.ts":
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
var config_service_1 = __webpack_require__("../../../../../src/app/core/services/config.service.ts");
var core_2 = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var FuseToolbarComponent = (function () {
    function FuseToolbarComponent(router, fuseConfig, translate) {
        var _this = this;
        this.router = router;
        this.fuseConfig = fuseConfig;
        this.translate = translate;
        this.userStatusOptions = [
            {
                'title': 'Online',
                'icon': 'icon-checkbox-marked-circle',
                'color': '#4CAF50'
            },
            {
                'title': 'Away',
                'icon': 'icon-clock',
                'color': '#FFC107'
            },
            {
                'title': 'Do not Disturb',
                'icon': 'icon-minus-circle',
                'color': '#F44336'
            },
            {
                'title': 'Invisible',
                'icon': 'icon-checkbox-blank-circle-outline',
                'color': '#BDBDBD'
            },
            {
                'title': 'Offline',
                'icon': 'icon-checkbox-blank-circle-outline',
                'color': '#616161'
            }
        ];
        this.languages = [
            {
                'id': 'en',
                'title': 'English',
                'flag': 'us'
            },
            {
                'id': 'tr',
                'title': 'Turkish',
                'flag': 'tr'
            }
        ];
        this.selectedLanguage = this.languages[0];
        router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                _this.showLoadingBar = true;
            }
            if (event instanceof router_1.NavigationEnd) {
                _this.showLoadingBar = false;
            }
        });
        this.fuseConfig.onSettingsChanged.subscribe(function (settings) {
            _this.horizontalNav = settings.layout.navigation === 'top';
        });
    }
    FuseToolbarComponent.prototype.search = function (value) {
        // Do your search here...
        console.log(value);
    };
    FuseToolbarComponent.prototype.setLanguage = function (lang) {
        // Set the selected language for toolbar
        this.selectedLanguage = lang;
        // Use the selected language for translations
        this.translate.use(lang.id);
    };
    FuseToolbarComponent = __decorate([
        core_1.Component({
            selector: 'fuse-toolbar',
            template: __webpack_require__("../../../../../src/app/main/toolbar/toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            config_service_1.FuseConfigService,
            core_2.TranslateService])
    ], FuseToolbarComponent);
    return FuseToolbarComponent;
}());
exports.FuseToolbarComponent = FuseToolbarComponent;


/***/ }),

/***/ "../../../../../src/app/navigation/i18n/en.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.locale = {
    lang: 'en',
    data: {
        'NAV': {
            'APPLICATIONS': 'Applications',
            'DASHBOARDS': 'Dashboards',
            'CALENDAR': 'Calendar',
            'ECOMMERCE': 'E-Commerce',
            'ACADEMY': 'Academy',
            'MAIL': {
                'TITLE': 'Mail',
                'BADGE': '25'
            },
            'MAIL_NGRX': {
                'TITLE': 'Mail Ngrx',
                'BADGE': '13'
            },
            'CHAT': 'Chat',
            'FILE_MANAGER': 'File Manager',
            'CONTACTS': 'Contacts',
            'TODO': 'To-Do',
            'SCRUMBOARD': 'Scrumboard'
        }
    }
};


/***/ }),

/***/ "../../../../../src/app/navigation/i18n/tr.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.locale = {
    lang: 'tr',
    data: {
        'NAV': {
            'APPLICATIONS': 'Programlar',
            'DASHBOARDS': 'Kontrol Paneli',
            'CALENDAR': 'Takvim',
            'ECOMMERCE': 'E-Ticaret',
            'ACADEMY': 'Akademi',
            'MAIL': {
                'TITLE': 'Posta',
                'BADGE': '15'
            },
            'MAIL_NGRX': {
                'TITLE': 'Posta Ngrx',
                'BADGE': '13'
            },
            'CHAT': 'Sohbet',
            'FILE_MANAGER': 'Dosya Yöneticisi',
            'CONTACTS': 'Kişiler',
            'TODO': 'Yapılacaklar',
            'SCRUMBOARD': 'Proje'
        }
    }
};


/***/ }),

/***/ "../../../../../src/app/navigation/navigation.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FuseNavigationModel = (function () {
    function FuseNavigationModel() {
        this.model = [
            {
                'id': 'applications',
                'title': 'Applications',
                'translate': 'NAV.APPLICATIONS',
                'type': 'group',
                'icon': 'apps',
                'children': [
                    {
                        'id': 'dashboards',
                        'title': 'Dashboards',
                        'translate': 'NAV.DASHBOARDS',
                        'type': 'collapse',
                        'icon': 'dashboard',
                        'children': [
                            {
                                'id': 'project',
                                'title': 'Project',
                                'type': 'item',
                                'url': '/apps/dashboards/project'
                            }
                        ]
                    },
                    {
                        'id': 'calendar',
                        'title': 'Calendar',
                        'translate': 'NAV.CALENDAR',
                        'type': 'item',
                        'icon': 'today',
                        'url': '/apps/calendar'
                    },
                    {
                        'id': 'e-commerce',
                        'title': 'E-Commerce',
                        'translate': 'NAV.ECOMMERCE',
                        'type': 'collapse',
                        'icon': 'shopping_cart',
                        'children': [
                            {
                                'id': 'dashboard',
                                'title': 'Dashboard',
                                'type': 'item',
                                'url': '/apps/e-commerce/dashboard'
                            },
                            {
                                'id': 'products',
                                'title': 'Products',
                                'type': 'item',
                                'url': '/apps/e-commerce/products',
                                'exactMatch': true
                            },
                            {
                                'id': 'productDetail',
                                'title': 'Product Detail',
                                'type': 'item',
                                'url': '/apps/e-commerce/products/1/printed-dress',
                                'exactMatch': true
                            },
                            {
                                'id': 'orders',
                                'title': 'Orders',
                                'type': 'item',
                                'url': '/apps/e-commerce/orders',
                                'exactMatch': true
                            },
                            {
                                'id': 'orderDetail',
                                'title': 'Order Detail',
                                'type': 'item',
                                'url': '/apps/e-commerce/orders/1',
                                'exactMatch': true
                            }
                        ]
                    },
                    {
                        'id': 'academy',
                        'title': 'Academy',
                        'translate': 'NAV.ACADEMY',
                        'type': 'item',
                        'icon': 'school',
                        'url': '/apps/academy'
                    },
                    {
                        'id': 'mail',
                        'title': 'Mail',
                        'translate': 'NAV.MAIL.TITLE',
                        'type': 'item',
                        'icon': 'email',
                        'url': '/apps/mail',
                        'badge': {
                            'title': 25,
                            'translate': 'NAV.MAIL.BADGE',
                            'bg': '#F44336',
                            'fg': '#FFFFFF'
                        }
                    },
                    {
                        'id': 'mail-ngrx',
                        'title': 'Mail Ngrx',
                        'translate': 'NAV.MAIL_NGRX.TITLE',
                        'type': 'item',
                        'icon': 'email',
                        'url': '/apps/mail-ngrx',
                        'badge': {
                            'title': 13,
                            'translate': 'NAV.MAIL_NGRX.BADGE',
                            'bg': '#EC0C8E',
                            'fg': '#FFFFFF'
                        }
                    },
                    {
                        'id': 'chat',
                        'title': 'Chat',
                        'translate': 'NAV.CHAT',
                        'type': 'item',
                        'icon': 'chat',
                        'url': '/apps/chat',
                        'badge': {
                            'title': 13,
                            'bg': '#09d261',
                            'fg': '#FFFFFF'
                        }
                    },
                    {
                        'id': 'file-manager',
                        'title': 'File Manager',
                        'translate': 'NAV.FILE_MANAGER',
                        'type': 'item',
                        'icon': 'folder',
                        'url': '/apps/file-manager'
                    },
                    {
                        'id': 'contacts',
                        'title': 'Contacts',
                        'translate': 'NAV.CONTACTS',
                        'type': 'item',
                        'icon': 'account_box',
                        'url': '/apps/contacts'
                    },
                    {
                        'id': 'to-do',
                        'title': 'To-Do',
                        'translate': 'NAV.TODO',
                        'type': 'item',
                        'icon': 'check_box',
                        'url': '/apps/todo',
                        'badge': {
                            'title': 3,
                            'bg': '#FF6F00',
                            'fg': '#FFFFFF'
                        }
                    },
                    {
                        'id': 'scrumboard',
                        'title': 'Scrumboard',
                        'translate': 'NAV.SCRUMBOARD',
                        'type': 'item',
                        'icon': 'assessment',
                        'url': '/apps/scrumboard'
                    }
                ]
            },
            {
                'id': 'pages',
                'title': 'Pages',
                'type': 'group',
                'icon': 'pages',
                'children': [
                    {
                        'id': 'authentication',
                        'title': 'Authentication',
                        'type': 'collapse',
                        'icon': 'lock',
                        'badge': {
                            'title': 10,
                            'bg': '#525e8a',
                            'fg': '#FFFFFF'
                        },
                        'children': [
                            {
                                'id': 'login',
                                'title': 'Login',
                                'type': 'item',
                                'url': '/pages/auth/login'
                            },
                            {
                                'id': 'login-v2',
                                'title': 'Login v2',
                                'type': 'item',
                                'url': '/pages/auth/login-2'
                            },
                            {
                                'id': 'register',
                                'title': 'Register',
                                'type': 'item',
                                'url': '/pages/auth/register'
                            },
                            {
                                'id': 'register-v2',
                                'title': 'Register v2',
                                'type': 'item',
                                'url': '/pages/auth/register-2'
                            },
                            {
                                'id': 'forgot-password',
                                'title': 'Forgot Password',
                                'type': 'item',
                                'url': '/pages/auth/forgot-password'
                            },
                            {
                                'id': 'forgot-password-v2',
                                'title': 'Forgot Password v2',
                                'type': 'item',
                                'url': '/pages/auth/forgot-password-2'
                            },
                            {
                                'id': 'reset-password',
                                'title': 'Reset Password',
                                'type': 'item',
                                'url': '/pages/auth/reset-password'
                            },
                            {
                                'id': 'reset-password-v2',
                                'title': 'Reset Password v2',
                                'type': 'item',
                                'url': '/pages/auth/reset-password-2'
                            },
                            {
                                'id': 'lock-screen',
                                'title': 'Lock Screen',
                                'type': 'item',
                                'url': '/pages/auth/lock'
                            },
                            {
                                'id': 'mail-confirmation',
                                'title': 'Mail Confirmation',
                                'type': 'item',
                                'url': '/pages/auth/mail-confirm'
                            }
                        ]
                    },
                    {
                        'id': 'coming-soon',
                        'title': 'Coming Soon',
                        'type': 'item',
                        'icon': 'alarm',
                        'url': '/pages/coming-soon'
                    },
                    {
                        'id': 'errors',
                        'title': 'Errors',
                        'type': 'collapse',
                        'icon': 'error',
                        'children': [
                            {
                                'id': '404',
                                'title': '404',
                                'type': 'item',
                                'url': '/pages/errors/error-404'
                            },
                            {
                                'id': '500',
                                'title': '500',
                                'type': 'item',
                                'url': '/pages/errors/error-500'
                            }
                        ]
                    },
                    {
                        'id': 'invoice',
                        'title': 'Invoice',
                        'type': 'collapse',
                        'icon': 'receipt',
                        'children': [
                            {
                                'id': 'modern',
                                'title': 'Modern',
                                'type': 'item',
                                'url': '/pages/invoices/modern'
                            },
                            {
                                'id': 'compact',
                                'title': 'Compact',
                                'type': 'item',
                                'url': '/pages/invoices/compact'
                            }
                        ]
                    },
                    {
                        'id': 'maintenance',
                        'title': 'Maintenance',
                        'type': 'item',
                        'icon': 'build',
                        'url': '/pages/maintenance'
                    },
                    {
                        'id': 'pricing',
                        'title': 'Pricing',
                        'type': 'collapse',
                        'icon': 'attach_money',
                        'children': [
                            {
                                'id': 'style-1',
                                'title': 'Style 1',
                                'type': 'item',
                                'url': '/pages/pricing/style-1'
                            },
                            {
                                'id': 'style-2',
                                'title': 'Style 2',
                                'type': 'item',
                                'url': '/pages/pricing/style-2'
                            },
                            {
                                'id': 'style-3',
                                'title': 'Style 3',
                                'type': 'item',
                                'url': '/pages/pricing/style-3'
                            }
                        ]
                    },
                    {
                        'id': 'profile',
                        'title': 'Profile',
                        'type': 'item',
                        'icon': 'person',
                        'url': '/pages/profile'
                    },
                    {
                        'id': 'search',
                        'title': 'Search',
                        'type': 'item',
                        'icon': 'search',
                        'url': '/pages/search'
                    },
                    {
                        'title': 'Faq',
                        'type': 'item',
                        'icon': 'help',
                        'url': '/pages/faq'
                    },
                    {
                        'title': 'Knowledge Base',
                        'type': 'item',
                        'icon': 'import_contacts',
                        'url': '/pages/knowledge-base'
                    }
                ]
            },
            {
                'id': 'user-interface',
                'title': 'User Interface',
                'type': 'group',
                'icon': 'web',
                'children': [
                    {
                        'id': 'forms',
                        'title': 'Forms',
                        'type': 'item',
                        'icon': 'web_asset',
                        'url': '/ui/forms'
                    },
                    {
                        'id': 'icons',
                        'title': 'Icons',
                        'type': 'item',
                        'icon': 'photo',
                        'url': '/ui/icons'
                    },
                    {
                        'id': 'typography',
                        'title': 'Typography',
                        'type': 'item',
                        'icon': 'text_fields',
                        'url': '/ui/typography'
                    },
                    {
                        'id': 'helper-classes',
                        'title': 'Helper Classes',
                        'type': 'item',
                        'icon': 'help',
                        'url': '/ui/helper-classes'
                    },
                    {
                        'id': 'page-layouts',
                        'title': 'Page Layouts',
                        'type': 'collapse',
                        'icon': 'view_quilt',
                        'children': [
                            {
                                'id': 'carded',
                                'title': 'Carded',
                                'type': 'collapse',
                                'badge': {
                                    'title': 10,
                                    'bg': '#525e8a',
                                    'fg': '#FFFFFF'
                                },
                                'children': [
                                    {
                                        'id': 'full-width',
                                        'title': 'Full Width',
                                        'type': 'item',
                                        'url': '/ui/page-layouts/carded/full-width'
                                    },
                                    {
                                        'id': 'full-width-2',
                                        'title': 'Full Width 2',
                                        'type': 'item',
                                        'url': '/ui/page-layouts/carded/full-width-2'
                                    },
                                    {
                                        'id': 'left-sidenav',
                                        'title': 'Left Sidenav',
                                        'type': 'item',
                                        'url': '/ui/page-layouts/carded/left-sidenav'
                                    },
                                    {
                                        'id': 'left-sidenav-tabbed',
                                        'title': 'Left Sidenav Tabbed',
                                        'type': 'item',
                                        'url': '/ui/page-layouts/carded/left-sidenav-tabbed'
                                    },
                                    {
                                        'id': 'left-sidenav-2',
                                        'title': 'Left Sidenav 2',
                                        'type': 'item',
                                        'url': '/ui/page-layouts/carded/left-sidenav-2'
                                    },
                                    {
                                        'id': 'left-sidenav-2-tabbed',
                                        'title': 'Left Sidenav 2 Tabbed',
                                        'type': 'item',
                                        'url': '/ui/page-layouts/carded/left-sidenav-2-tabbed'
                                    },
                                    {
                                        'id': 'right-sidenav',
                                        'title': 'Right Sidenav',
                                        'type': 'item',
                                        'url': '/ui/page-layouts/carded/right-sidenav'
                                    },
                                    {
                                        'id': 'right-sidenav-tabbed',
                                        'title': 'Right Sidenav Tabbed',
                                        'type': 'item',
                                        'url': '/ui/page-layouts/carded/right-sidenav-tabbed'
                                    },
                                    {
                                        'id': 'right-sidenav-2',
                                        'title': 'Right Sidenav 2',
                                        'type': 'item',
                                        'url': '/ui/page-layouts/carded/right-sidenav-2'
                                    },
                                    {
                                        'id': 'right-sidenav-2-tabbed',
                                        'title': 'Right Sidenav 2 Tabbed',
                                        'type': 'item',
                                        'url': '/ui/page-layouts/carded/right-sidenav-2-tabbed'
                                    }
                                ]
                            },
                            {
                                'id': 'simple',
                                'title': 'Simple',
                                'type': 'collapse',
                                'badge': {
                                    'title': 8,
                                    'bg': '#525e8a',
                                    'fg': '#FFFFFF'
                                },
                                'children': [
                                    {
                                        'id': 'full-width',
                                        'title': 'Full Width',
                                        'type': 'item',
                                        'url': '/ui/page-layouts/simple/full-width'
                                    },
                                    {
                                        'id': 'left-sidenav',
                                        'title': 'Left Sidenav',
                                        'type': 'item',
                                        'url': '/ui/page-layouts/simple/left-sidenav'
                                    },
                                    {
                                        'id': 'left-sidenav-2',
                                        'title': 'Left Sidenav 2',
                                        'type': 'item',
                                        'url': '/ui/page-layouts/simple/left-sidenav-2'
                                    },
                                    {
                                        'id': 'left-sidenav-3',
                                        'title': 'Left Sidenav 3',
                                        'type': 'item',
                                        'url': '/ui/page-layouts/simple/left-sidenav-3'
                                    },
                                    {
                                        'id': 'right-sidenav',
                                        'title': 'Right Sidenav',
                                        'type': 'item',
                                        'url': '/ui/page-layouts/simple/right-sidenav'
                                    },
                                    {
                                        'id': 'right-sidenav-2',
                                        'title': 'Right Sidenav 2',
                                        'type': 'item',
                                        'url': '/ui/page-layouts/simple/right-sidenav-2'
                                    },
                                    {
                                        'id': 'right-sidenav-3',
                                        'title': 'Right Sidenav 3',
                                        'type': 'item',
                                        'url': '/ui/page-layouts/simple/right-sidenav-3'
                                    },
                                    {
                                        'id': 'tabbed',
                                        'title': 'Tabbed',
                                        'type': 'item',
                                        'url': '/ui/page-layouts/simple/tabbed'
                                    }
                                ]
                            },
                            {
                                'id': 'blank',
                                'title': 'Blank',
                                'type': 'item',
                                'url': '/ui/page-layouts/blank'
                            }
                        ]
                    },
                    {
                        'id': 'colors',
                        'title': 'Colors',
                        'type': 'item',
                        'icon': 'color_lens',
                        'url': '/ui/colors'
                    }
                ]
            },
            {
                'id': 'services',
                'title': 'Services',
                'type': 'group',
                'icon': 'settings',
                'children': [
                    {
                        'id': 'config',
                        'title': 'Config',
                        'type': 'item',
                        'icon': 'settings',
                        'url': '/services/config'
                    },
                    {
                        'id': 'splash-screen',
                        'title': 'Splash Screen',
                        'type': 'item',
                        'icon': 'settings',
                        'url': '/services/splash-screen'
                    }
                ]
            },
            {
                'id': 'components',
                'title': 'Components',
                'type': 'group',
                'icon': 'settings_input_component',
                'children': [
                    {
                        'id': 'angular-material-elements',
                        'title': 'Angular Material Elements',
                        'type': 'collapse',
                        'icon': 'layers',
                        'children': [
                            {
                                'id': 'form-controls',
                                'title': 'Form Controls',
                                'type': 'group',
                                'children': [
                                    {
                                        'id': 'autocomplete',
                                        'title': 'Autocomplete',
                                        'type': 'item',
                                        'url': '/components/angular-material/autocomplete'
                                    },
                                    {
                                        'id': 'checkbox',
                                        'title': 'Checkbox',
                                        'type': 'item',
                                        'url': '/components/angular-material/checkbox'
                                    },
                                    {
                                        'id': 'datepicker',
                                        'title': 'Datepicker',
                                        'type': 'item',
                                        'url': '/components/angular-material/datepicker'
                                    },
                                    {
                                        'id': 'form-field',
                                        'title': 'Form field',
                                        'type': 'item',
                                        'url': '/components/angular-material/form-field'
                                    },
                                    {
                                        'id': 'input',
                                        'title': 'Input',
                                        'type': 'item',
                                        'url': '/components/angular-material/input'
                                    },
                                    {
                                        'id': 'radio-button',
                                        'title': 'Radio button',
                                        'type': 'item',
                                        'url': '/components/angular-material/radio-button'
                                    },
                                    {
                                        'id': 'select',
                                        'title': 'Select',
                                        'type': 'item',
                                        'url': '/components/angular-material/select'
                                    },
                                    {
                                        'id': 'slider',
                                        'title': 'Slider',
                                        'type': 'item',
                                        'url': '/components/angular-material/slider'
                                    },
                                    {
                                        'id': 'slide-toggle',
                                        'title': 'Slide toggle',
                                        'type': 'item',
                                        'url': '/components/angular-material/slide-toggle'
                                    }
                                ]
                            },
                            {
                                'id': 'navigation',
                                'title': 'Navigation',
                                'type': 'group',
                                'children': [
                                    {
                                        'id': 'menu',
                                        'title': 'Menu',
                                        'type': 'item',
                                        'url': '/components/angular-material/menu'
                                    },
                                    {
                                        'id': 'sidenav',
                                        'title': 'Sidenav',
                                        'type': 'item',
                                        'url': '/components/angular-material/sidenav'
                                    },
                                    {
                                        'id': 'toolbar',
                                        'title': 'Toolbar',
                                        'type': 'item',
                                        'url': '/components/angular-material/toolbar'
                                    }
                                ]
                            },
                            {
                                'id': 'layout',
                                'title': 'Layout',
                                'type': 'group',
                                'children': [
                                    {
                                        'id': 'list',
                                        'title': 'List',
                                        'type': 'item',
                                        'url': '/components/angular-material/list'
                                    },
                                    {
                                        'id': 'grid-list',
                                        'title': 'Grid list',
                                        'type': 'item',
                                        'url': '/components/angular-material/grid-list'
                                    },
                                    {
                                        'id': 'card',
                                        'title': 'Card',
                                        'type': 'item',
                                        'url': '/components/angular-material/card'
                                    },
                                    {
                                        'id': 'stepper',
                                        'title': 'Stepper',
                                        'type': 'item',
                                        'url': '/components/angular-material/stepper'
                                    },
                                    {
                                        'id': 'tabs',
                                        'title': 'Tabs',
                                        'type': 'item',
                                        'url': '/components/angular-material/tabs'
                                    },
                                    {
                                        'id': 'elevation',
                                        'title': 'Elevation',
                                        'type': 'item',
                                        'url': '/components/angular-material/elevation'
                                    },
                                    {
                                        'id': 'expansion-panel',
                                        'title': 'Expansion Panel',
                                        'type': 'item',
                                        'url': '/components/angular-material/expansion-panel'
                                    }
                                ]
                            },
                            {
                                'id': 'buttons-indicators',
                                'title': 'Buttons & Indicators',
                                'type': 'group',
                                'children': [
                                    {
                                        'id': 'button',
                                        'title': 'Button',
                                        'type': 'item',
                                        'url': '/components/angular-material/button'
                                    },
                                    {
                                        'id': 'button-toggle',
                                        'title': 'Button toggle',
                                        'type': 'item',
                                        'url': '/components/angular-material/button-toggle'
                                    },
                                    {
                                        'id': 'chips',
                                        'title': 'Chips',
                                        'type': 'item',
                                        'url': '/components/angular-material/chips'
                                    },
                                    {
                                        'id': 'icon',
                                        'title': 'Icon',
                                        'type': 'item',
                                        'url': '/components/angular-material/icon'
                                    },
                                    {
                                        'id': 'progress-spinner',
                                        'title': 'Progress spinner',
                                        'type': 'item',
                                        'url': '/components/angular-material/progress-spinner'
                                    },
                                    {
                                        'id': 'progress-bar',
                                        'title': 'Progress bar',
                                        'type': 'item',
                                        'url': '/components/angular-material/progress-bar'
                                    }
                                ]
                            },
                            {
                                'id': 'popups-modals',
                                'title': 'Popups & Modals',
                                'type': 'group',
                                'children': [
                                    {
                                        'id': 'dialog',
                                        'title': 'Dialog',
                                        'type': 'item',
                                        'url': '/components/angular-material/dialog'
                                    },
                                    {
                                        'id': 'tooltip',
                                        'title': 'Tooltip',
                                        'type': 'item',
                                        'url': '/components/angular-material/tooltip'
                                    },
                                    {
                                        'id': 'snackbar',
                                        'title': 'Snackbar',
                                        'type': 'item',
                                        'url': '/components/angular-material/snackbar'
                                    }
                                ]
                            },
                            {
                                'id': 'data-table',
                                'title': 'Data table',
                                'type': 'group',
                                'children': [
                                    {
                                        'id': 'table',
                                        'title': 'Table',
                                        'type': 'item',
                                        'url': '/components/angular-material/data-table'
                                    },
                                    {
                                        'id': 'sort-header',
                                        'title': 'Sort header',
                                        'type': 'item',
                                        'url': '/components/angular-material/sort-header'
                                    },
                                    {
                                        'id': 'paginator',
                                        'title': 'Paginator',
                                        'type': 'item',
                                        'url': '/components/angular-material/paginator'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        'id': 'cards',
                        'title': 'Cards',
                        'type': 'item',
                        'icon': 'settings_input_component',
                        'url': '/components/cards'
                    },
                    {
                        'id': 'countdown',
                        'title': 'Countdown',
                        'type': 'item',
                        'icon': 'settings_input_component',
                        'url': '/components/countdown'
                    },
                    {
                        'id': 'highlight',
                        'title': 'Highlight',
                        'type': 'item',
                        'icon': 'settings_input_component',
                        'url': '/components/highlight'
                    },
                    {
                        'id': 'material-color-picker',
                        'title': 'Material Color Picker',
                        'type': 'item',
                        'icon': 'settings_input_component',
                        'url': '/components/material-color-picker'
                    },
                    {
                        'id': 'multi-language',
                        'title': 'Multi Language',
                        'type': 'item',
                        'icon': 'settings_input_component',
                        'url': '/components/multi-language'
                    },
                    {
                        'id': 'navigation',
                        'title': 'Navigation',
                        'type': 'item',
                        'icon': 'settings_input_component',
                        'url': '/components/navigation'
                    },
                    {
                        'id': 'search-bar',
                        'title': 'Search Bar',
                        'type': 'item',
                        'icon': 'settings_input_component',
                        'url': '/components/search-bar'
                    },
                    {
                        'id': 'shortcuts',
                        'title': 'Shortcuts',
                        'type': 'item',
                        'icon': 'settings_input_component',
                        'url': '/components/shortcuts'
                    },
                    {
                        'id': 'widget',
                        'title': 'Widget',
                        'type': 'item',
                        'icon': 'settings_input_component',
                        'url': '/components/widget'
                    }
                ]
            },
            {
                'id': '3rd-party-components',
                'title': '3rd Party components',
                'type': 'group',
                'icon': 'settings_input_component',
                'children': [
                    {
                        'id': 'datatables',
                        'title': 'Datatables',
                        'type': 'collapse',
                        'icon': 'border_all',
                        'children': [
                            {
                                'id': 'ngxdatatable',
                                'title': 'ngx-datatable',
                                'type': 'item',
                                'url': '/components-third-party/datatables/ngx-datatable'
                            }
                        ]
                    },
                    {
                        'id': 'google-maps',
                        'title': 'Google Maps',
                        'type': 'item',
                        'icon': 'place',
                        'url': '/components-third-party/google-maps'
                    }
                ]
            }
        ];
    }
    return FuseNavigationModel;
}());
exports.FuseNavigationModel = FuseNavigationModel;


/***/ }),

/***/ "../../../../../src/app/store/actions/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/store/actions/router.action.ts"));


/***/ }),

/***/ "../../../../../src/app/store/actions/router.action.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GO = '[Router] Go';
exports.BACK = '[Router] Back';
exports.FORWARD = '[Router] Forward';
var Go = (function () {
    function Go(payload) {
        this.payload = payload;
        this.type = exports.GO;
    }
    return Go;
}());
exports.Go = Go;
var Back = (function () {
    function Back() {
        this.type = exports.BACK;
    }
    return Back;
}());
exports.Back = Back;
var Forward = (function () {
    function Forward() {
        this.type = exports.FORWARD;
    }
    return Forward;
}());
exports.Forward = Forward;


/***/ }),

/***/ "../../../../../src/app/store/effects/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var router_effect_1 = __webpack_require__("../../../../../src/app/store/effects/router.effect.ts");
exports.effects = [router_effect_1.RouterEffects];
__export(__webpack_require__("../../../../../src/app/store/effects/router.effect.ts"));


/***/ }),

/***/ "../../../../../src/app/store/effects/router.effect.ts":
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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var effects_1 = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
var RouterActions = __webpack_require__("../../../../../src/app/store/actions/router.action.ts");
var operators_1 = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var RouterEffects = (function () {
    function RouterEffects(actions$, router, location) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.location = location;
        this.navigate$ = this.actions$.ofType(RouterActions.GO).pipe(operators_1.map(function (action) { return action.payload; }), operators_1.tap(function (_a) {
            var path = _a.path, queryParams = _a.query, extras = _a.extras;
            _this.router.navigate(path, __assign({ queryParams: queryParams }, extras));
        }));
        this.navigateBack$ = this.actions$
            .ofType(RouterActions.BACK)
            .pipe(operators_1.tap(function () { return _this.location.back(); }));
        this.navigateForward$ = this.actions$
            .ofType(RouterActions.FORWARD)
            .pipe(operators_1.tap(function () { return _this.location.forward(); }));
    }
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], RouterEffects.prototype, "navigate$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], RouterEffects.prototype, "navigateBack$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], RouterEffects.prototype, "navigateForward$", void 0);
    RouterEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions,
            router_1.Router,
            common_1.Location])
    ], RouterEffects);
    return RouterEffects;
}());
exports.RouterEffects = RouterEffects;


/***/ }),

/***/ "../../../../../src/app/store/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/store/reducers/index.ts"));
__export(__webpack_require__("../../../../../src/app/store/actions/index.ts"));
__export(__webpack_require__("../../../../../src/app/store/effects/index.ts"));


/***/ }),

/***/ "../../../../../src/app/store/reducers/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var fromRouter = __webpack_require__("../../../../@ngrx/router-store/@ngrx/router-store.es5.js");
exports.reducers = {
    routerReducer: fromRouter.routerReducer,
};
exports.getRouterState = store_1.createFeatureSelector('routerReducer');
var CustomSerializer = (function () {
    function CustomSerializer() {
    }
    CustomSerializer.prototype.serialize = function (routerState) {
        var url = routerState.url;
        var queryParams = routerState.root.queryParams;
        var state = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        var params = state.params;
        return { url: url, queryParams: queryParams, params: params };
    };
    return CustomSerializer;
}());
exports.CustomSerializer = CustomSerializer;


/***/ }),

/***/ "../../../../../src/app/store/store.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var store_devtools_1 = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
var effects_1 = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
var store_1 = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ngrx_store_freeze_1 = __webpack_require__("../../../../ngrx-store-freeze/index.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var router_store_1 = __webpack_require__("../../../../@ngrx/router-store/@ngrx/router-store.es5.js");
var index_1 = __webpack_require__("../../../../../src/app/store/index.ts");
exports.metaReducers = !environment_1.environment.production
    ? [ngrx_store_freeze_1.storeFreeze]
    : [];
var AppStoreModule = (function () {
    function AppStoreModule() {
    }
    AppStoreModule = __decorate([
        core_1.NgModule({
            imports: [
                store_1.StoreModule.forRoot(index_1.reducers, { metaReducers: exports.metaReducers }),
                effects_1.EffectsModule.forRoot(index_1.effects),
                !environment_1.environment.production ? store_devtools_1.StoreDevtoolsModule.instrument() : [],
                router_store_1.StoreRouterConnectingModule
            ],
            providers: [
                {
                    provide: router_store_1.RouterStateSerializer,
                    useClass: index_1.CustomSerializer
                }
            ]
        })
    ], AppStoreModule);
    return AppStoreModule;
}());
exports.AppStoreModule = AppStoreModule;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    hmr: false
};


/***/ }),

/***/ "../../../../../src/hmr.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var hmr_1 = __webpack_require__("../../../../@angularclass/hmr/dist/index.js");
exports.hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return ngModule = mod; });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(core_1.ApplicationRef);
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = hmr_1.createNewHosts(elements);
        ngModule.destroy();
        makeVisible();
    });
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var hmr_1 = __webpack_require__("../../../../../src/hmr.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
var bootstrap = function () { return platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule); };
if (environment_1.environment.hmr) {
    if (false) {
        hmr_1.hmrBootstrap(module, bootstrap);
    }
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap();
}


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map