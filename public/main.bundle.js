webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AppRouter */
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");


var AppRouter = (function () {
    function AppRouter() {
    }
    return AppRouter;
}());

// TODO reroute invalid routes
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app-router.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_planner_planner_module__ = __webpack_require__("../../../../../src/app/components/planner/planner.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_supervisor_supervisor_module__ = __webpack_require__("../../../../../src/app/components/supervisor/supervisor.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_router__ = __webpack_require__("../../../../../src/app/app-router.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_planner_planner_module__["a" /* PlannerModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_supervisor_supervisor_module__["a" /* SupervisorModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatOptionModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_router__["a" /* routes */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatOptionModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatFormFieldModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-component-wrapper\">\n  <div class=\"login-container\">\n    <mat-form-field>\n      <input [(ngModel)]=\"username\" matInput placeholder=\"Username\">\n    </mat-form-field>\n    <br>\n\n    <mat-form-field>\n      <input [(ngModel)]=\"password\" matInput placeholder=\"Password\" type=\"password\">\n    </mat-form-field>\n    <br>\n\n    <div class=\"btn-container\">\n      <button (click)=\"submitForm()\" type=\"button\" class=\"btn btn-outline-primary btn-sm btn-block\">Login</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-component-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100vh;\n  background: url(\"http://www.todayonline.com/sites/default/files/styles/photo_gallery_image_lightbox/public/22493399.JPG?itok=eMJDsC_m\");\n  background-size: cover;\n  opacity: 0.8; }\n  .login-component-wrapper .login-container {\n    padding: 1em;\n    border-radius: 4px;\n    background-color: rgba(255, 255, 255, 0.7); }\n    .login-component-wrapper .login-container .btn-container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submitForm = function () {
        console.log(this.username);
        if (this.username == "planner") {
            this.router.navigate(['/planner']);
        }
        else {
            this.router.navigate(['/supervisor']);
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { tokenNotExpired } from 'angular2-jwt';
var AuthRoutes = {
    login: "http://localhost:3000/auth/login"
};
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.loggedInAsSupervisor = true;
        this.loggedInAsPlanner = true;
    }
    LoginService.prototype.isPlanner = function () {
        return this.loggedInAsPlanner;
    };
    LoginService.prototype.isSupervisor = function () {
        return this.loggedInAsSupervisor;
    };
    //TODO specify the interface of the promise being returned
    LoginService.prototype.login = function (form) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var credentials = {
            username: form.username,
            password: form.password
        };
        return new Promise(function (resolve, reject) {
            _this.http
                .post(AuthRoutes.login, credentials, { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    LoginService.prototype.getToken = function () {
        return localStorage.getItem('id_token');
    };
    // isLoggedIn(): boolean {
    //     return tokenNotExpired('id_token');
    // }
    LoginService.prototype.storeUserData = function (token) {
        localStorage.setItem('id_token', token);
        this.authToken = token;
    };
    LoginService.prototype.logout = function () {
        localStorage.clear();
        this.authToken = null;
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/planner/addtask/addtask.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"form-group\">\n    <label for=\"exampleFormControlInput1\">Email address</label>\n    <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"name@example.com\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleFormControlSelect1\">Example select</label>\n    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n      <option>1</option>\n      <option>2</option>\n      <option>3</option>\n      <option>4</option>\n      <option>5</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleFormControlSelect2\">Example multiple select</label>\n    <select multiple class=\"form-control\" id=\"exampleFormControlSelect2\">\n      <option>1</option>\n      <option>2</option>\n      <option>3</option>\n      <option>4</option>\n      <option>5</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleFormControlTextarea1\">Example textarea</label>\n    <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/planner/addtask/addtask.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/planner/addtask/addtask.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddtaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddtaskComponent = (function () {
    function AddtaskComponent() {
    }
    AddtaskComponent.prototype.ngOnInit = function () {
    };
    return AddtaskComponent;
}());
AddtaskComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-addtask',
        template: __webpack_require__("../../../../../src/app/components/planner/addtask/addtask.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/planner/addtask/addtask.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AddtaskComponent);

//# sourceMappingURL=addtask.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/planner/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlannerAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_service__ = __webpack_require__("../../../../../src/app/components/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlannerAuthGuard = (function () {
    function PlannerAuthGuard(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    PlannerAuthGuard.prototype.canActivate = function () {
        if (this.loginService.isPlanner()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    return PlannerAuthGuard;
}());
PlannerAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */]) === "function" && _b || Object])
], PlannerAuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/components/planner/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-component-wrapper\">\n  <nav [ngClass]=\"{ 'sidebar-collapse': !sidebarVisible }\" class=\"bg-faded sidebar sidebar-expand\">\n    <ul class=\"nav nav-pills flex-column\">\n      <li class=\"nav-item\">\n        <div class=\"d-flex sidebar-top-item\">\n          <a [routerLink]=\"['/']\">\n            <label *ngIf=\"sidebarVisible\" class=\"nav-link-text sidebar-top-item-text\">\n              <i class=\"fa fa-user-circle-o fa-lg\" aria-hidden=\"true\"></i> John Planner\n            </label>\n          </a>\n          <a (click)=\"toggleSidebar()\">\n              <i class=\"fa fa-bars fa-lg\" aria-hidden=\"true\"></i>\n          </a>\n        </div>\n      </li>\n      <hr>\n\n      <!--OVERVIEW-->\n      <li [routerLinkActive]=\"['nav-link-active']\" [routerLinkActiveOptions]=\"{exact:true}\"  class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">\n          <div class=\"d-flex sidebar-link-item\">\n            <i class=\"fa fa-bar-chart fa-lg\" aria-hidden=\"true\"></i>\n            <label *ngIf=\"sidebarVisible\" class=\"nav-link-text\">\n              Overview\n            </label>\n          </div>\n        </a>\n      </li>\n\n    </ul>\n  </nav>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/planner/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-component-wrapper {\n  height: 100%;\n  /* Sidebar expand-collapse animation */ }\n  .navbar-component-wrapper .sidebar {\n    height: 100%;\n    min-height: 100vh;\n    font-size: 1.2em;\n    font-family: sans-serif;\n    z-index: 1000;\n    overflow-x: hidden;\n    overflow-y: auto;\n    /* Scrollable contents if viewport is shorter than content. */\n    border-right: 1px solid #eee;\n    line-height: 0;\n    padding-left: 0;\n    padding-right: 0;\n    /* Attempt to align icons to text (not successful) */\n    /* Divider between sections */ }\n    .navbar-component-wrapper .sidebar .sidebar-top-item {\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      padding: 1em 1em;\n      /* Make back to site button smaller than the other buttons */\n      /* Remove underline on hover */ }\n      .navbar-component-wrapper .sidebar .sidebar-top-item .sidebar-top-item-text {\n        font-size: 0.85em;\n        color: #000; }\n      .navbar-component-wrapper .sidebar .sidebar-top-item a:hover {\n        text-decoration: none; }\n    .navbar-component-wrapper .sidebar .fa {\n      padding: 0 0.3em; }\n    .navbar-component-wrapper .sidebar label.nav-link-text {\n      cursor: inherit;\n      white-space: nowrap; }\n    .navbar-component-wrapper .sidebar .sidebar-link-item {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      -webkit-box-align: baseline;\n          -ms-flex-align: baseline;\n              align-items: baseline; }\n    .navbar-component-wrapper .sidebar hr {\n      border: 1px solid #ddd;\n      width: 90%; }\n  .navbar-component-wrapper .sidebar-expand {\n    width: 12em; }\n  .navbar-component-wrapper .sidebar-collapse {\n    width: 4em; }\n  .navbar-component-wrapper .sidebar .nav {\n    margin-bottom: 20px; }\n  .navbar-component-wrapper .sidebar .nav-item {\n    width: 100%;\n    height: 2.5em; }\n  .navbar-component-wrapper .sidebar .nav-link {\n    border-radius: 0;\n    color: #000; }\n  .navbar-component-wrapper .sidebar {\n    transition: all 0.2s ease-in-out; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/planner/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlannerNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlannerNavbarComponent = (function () {
    function PlannerNavbarComponent(router) {
        this.router = router;
    }
    PlannerNavbarComponent.prototype.ngOnInit = function () {
        this.sidebarVisible = true;
        this.sidebarState = "collapse";
    };
    PlannerNavbarComponent.prototype.toggleSidebar = function () {
        this.sidebarVisible = !this.sidebarVisible;
    };
    PlannerNavbarComponent.prototype.toggleSidebarState = function () {
        if (this.sidebarState === "expand") {
            this.sidebarState = "collapse";
        }
        else {
            this.sidebarState = "expand";
        }
    };
    return PlannerNavbarComponent;
}());
PlannerNavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'planner-navbar',
        template: __webpack_require__("../../../../../src/app/components/planner/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/planner/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], PlannerNavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/planner/overseer/overseer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overseer-component-wrapper container\">\n  <div>\n    <div class='dg-wrapper'>\n      <div class='dg-container-2' [dragula]='\"first-bag\"'>\n        <div>You can move these elements between these two containers</div>\n        <div>Moving them anywhere else isn't quite possible</div>\n        <div>There's also the possibility of moving elements around in the same container, changing their position</div>\n      </div>\n      <div class='dg-container-2' [dragula]='\"first-bag\"'>\n        <div>This is the default use case. You only need to specify the containers you want to use</div>\n        <div>More interactive use cases lie ahead</div>\n        <div>Make sure to check out the\n          <a href='https://github.com/bevacqua/dragula#readme'>documentation on GitHub!</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/planner/overseer/overseer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overseer-component-wrapper .dg-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.overseer-component-wrapper .dg-container-2 {\n  width: 40%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/planner/overseer/overseer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverseerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverseerComponent = (function () {
    function OverseerComponent() {
    }
    OverseerComponent.prototype.ngOnInit = function () {
    };
    return OverseerComponent;
}());
OverseerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-overseer',
        template: __webpack_require__("../../../../../src/app/components/planner/overseer/overseer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/planner/overseer/overseer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], OverseerComponent);

//# sourceMappingURL=overseer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/planner/planner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"planner-component-wrapper\">\n  <div class=\"d-flex\">\n    <planner-navbar></planner-navbar>\n    <div class=\"planner-views-container\">\n      <br>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/planner/planner.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".planner-component-wrapper .planner-views-container {\n  width: 70%;\n  margin: 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/planner/planner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlannerComponent = (function () {
    function PlannerComponent() {
    }
    PlannerComponent.prototype.ngOnInit = function () {
    };
    return PlannerComponent;
}());
PlannerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-planner',
        template: __webpack_require__("../../../../../src/app/components/planner/planner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/planner/planner.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PlannerComponent);

//# sourceMappingURL=planner.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/planner/planner.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlannerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__planner_component__ = __webpack_require__("../../../../../src/app/components/planner/planner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/planner/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_api_service__ = __webpack_require__("../../../../../src/app/components/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_service__ = __webpack_require__("../../../../../src/app/components/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__router__ = __webpack_require__("../../../../../src/app/components/planner/router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_guard__ = __webpack_require__("../../../../../src/app/components/planner/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__overseer_overseer_component__ = __webpack_require__("../../../../../src/app/components/planner/overseer/overseer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__taskmanager_taskmanager_component__ = __webpack_require__("../../../../../src/app/components/planner/taskmanager/taskmanager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__addtask_addtask_component__ = __webpack_require__("../../../../../src/app/components/planner/addtask/addtask.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var PlannerModule = (function () {
    function PlannerModule() {
    }
    return PlannerModule;
}());
PlannerModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_8__router__["a" /* PlannerRouter */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__planner_component__["a" /* PlannerComponent */],
            __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* PlannerNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__overseer_overseer_component__["a" /* OverseerComponent */],
            __WEBPACK_IMPORTED_MODULE_11__taskmanager_taskmanager_component__["a" /* TaskmanagerComponent */],
            __WEBPACK_IMPORTED_MODULE_12__addtask_addtask_component__["a" /* AddtaskComponent */]
        ],
        exports: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_9__auth_guard__["a" /* PlannerAuthGuard */],
        ]
    })
], PlannerModule);

//# sourceMappingURL=planner.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/planner/router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlannerRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard__ = __webpack_require__("../../../../../src/app/components/planner/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__planner_component__ = __webpack_require__("../../../../../src/app/components/planner/planner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__taskmanager_taskmanager_component__ = __webpack_require__("../../../../../src/app/components/planner/taskmanager/taskmanager.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var viewsRoutes = [
    {
        path: 'planner',
        component: __WEBPACK_IMPORTED_MODULE_3__planner_component__["a" /* PlannerComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard__["a" /* PlannerAuthGuard */]],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__taskmanager_taskmanager_component__["a" /* TaskmanagerComponent */] }
        ]
    }
];
var PlannerRouter = (function () {
    function PlannerRouter() {
    }
    return PlannerRouter;
}());
PlannerRouter = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(viewsRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], PlannerRouter);

//# sourceMappingURL=router.js.map

/***/ }),

/***/ "../../../../../src/app/components/planner/taskmanager/taskmanager.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"planner-task-manager container\">\n  <div class=\"planner-task-manager-header d-flex\">\n    <h3>Unassigned Tasks</h3>\n    <!-- <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\">\n      <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n      Add Task\n    </button> -->\n  </div>\n  <table *ngIf=\"defectList\" class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Defect</th>\n        <th scope=\"col\">Category</th>\n        <th scope=\"col\">Plane</th>\n        <th scope=\"col\">Class Code</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let defect of dummyData\" (click)=\"simulateSelect()\" class=\"task-item\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\">\n        <td>{{defect.header}}</td>\n        <td>{{defect.category}}</td>\n        <td>{{defect.plane}}</td>\n        <td>{{defect.classCode}}</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"planner-task-manager-header d-flex\">\n    <h3>Assigned Tasks</h3>\n    <!-- <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\">\n        <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n        Add Task\n      </button> -->\n  </div>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Defect No.</th>\n        <th scope=\"col\">Defect</th>\n        <th scope=\"col\">Date Raised</th>\n        <th scope=\"col\">Category</th>\n        <th scope=\"col\">Priority</th>\n        <th scope=\"col\">Assigned</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr (click)=\"selectTask(defect)\" *ngFor=\"let defect of defectList\" class=\"task-item\">\n        <td>{{defect.id}}</td>\n        <td>{{defect.header}}</td>\n        <td>{{defect.plane.swt}}</td>\n        <td>{{defect.category}}</td>\n        <td>{{defect.priority}}</td>\n        <td>{{defect.techsAssigned.length}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Assign Task</h5>\n      </div>\n      <div class=\"container\">\n        <form>\n          <div class=\"row\">\n            <div class=\"form-group col-md-12\">\n              <label for=\"exampleFormControlInput1\">Header</label>\n              <input [(ngModel)]=\"header\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" name=\"header\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"exampleFormControlInput1\">Class Code</label>\n              <input [(ngModel)]=\"classCode\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" name=\"classCode\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"exampleFormControlInput1\">Category</label>\n              <input [(ngModel)]=\"category\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" name=\"category\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"exampleFormControlInput1\">Plane</label>\n              <input [(ngModel)]=\"plane\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" name=\"plane\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"exampleFormControlSelect1\">Priority level</label>\n              <select [(ngModel)]=\"priority\" class=\"form-control\" id=\"exampleFormControlSelect1\" name=\"priority\">\n                <option>1</option>\n                <option>2</option>\n                <option>3</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleFormControlTextarea1\">Description</label>\n            <textarea [(ngModel)]=\"deferral\" class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" name=\"deferral\"></textarea>\n          </div>\n          <button (click)=\"confirmTask()\" data-dismiss=\"modal\" style=\"margin-bottom: 2em;\" type=\"button\" class=\"btn btn-primary\">\n            Confirm\n          </button>\n          <br>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Assign Task</h5>\n      </div>\n      <div class=\"container\">\n        <form>\n          <div class=\"row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"exampleFormControlInput1\">Registration Number</label>\n              <input [(ngModel)]=\"regn\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" name=\"regn\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"exampleFormControlInput1\">Fleet</label>\n              <input [(ngModel)]=\"fleet\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" name=\"fleet\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"exampleFormControlInput1\">ETA</label>\n              <input [(ngModel)]=\"eta\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" name=\"eta\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"exampleFormControlInput1\">ETD</label>\n              <input [(ngModel)]=\"etd\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" name=\"etd\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"exampleFormControlInput1\">ATA</label>\n              <input [(ngModel)]=\"ata\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" name=\"ata\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"exampleFormControlInput1\">Category</label>\n              <input [(ngModel)]=\"category\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" name=\"category\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleFormControlTextarea1\">Defects</label>\n            <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" name=\"defects\">{{defectList[0].header}}</textarea>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleFormControlInput1\">Part Details</label>\n            <input [(ngModel)]=\"partDetails\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" name=\"partDetails\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleFormControlTextarea1\">Deferral Reason</label>\n            <textarea [(ngModel)]=\"deferral\" class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" name=\"deferral\"></textarea>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"exampleFormControlInput1\">Class Code</label>\n              <input [(ngModel)]=\"classCode\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" name=\"classCode\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"exampleFormControlSelect1\">Priority level</label>\n              <select [(ngModel)]=\"priority\" class=\"form-control\" id=\"exampleFormControlSelect1\" name=\"priority\">\n                <option>1</option>\n                <option>2</option>\n                <option>3</option>\n              </select>\n            </div>\n          </div>\n          <button (click)=\"createDefect()\" data-dismiss=\"modal\" style=\"margin-bottom: 2em;\" type=\"button\" class=\"btn btn-primary\">\n            Create Task\n          </button>\n          <br>\n        </form>\n      </div>\n    </div>\n  </div>\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/components/planner/taskmanager/taskmanager.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".planner-task-manager-header {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.task-item {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/planner/taskmanager/taskmanager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskmanagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/components/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskmanagerComponent = (function () {
    function TaskmanagerComponent(apiService) {
        this.apiService = apiService;
        //ideally pull this from api but this is not given
        this.dummyData = [{
                "header": "Light at Seat 23B spoilt",
                "classCode": "economy",
                "category": "seats",
                "plane": "SWT",
                "description": "needs new lightbulb",
                "priority": 1
            }];
    }
    TaskmanagerComponent.prototype.ngOnInit = function () {
        this.getDefects();
    };
    TaskmanagerComponent.prototype.createDefect = function () {
        this.apiService.createDefect(this.dummyData[0]);
    };
    TaskmanagerComponent.prototype.getDefects = function () {
        var _this = this;
        this.apiService.getDefects()
            .then(function (res) {
            _this.defectList = res;
        })
            .catch(function (res) {
            console.log(res);
        });
    };
    //handles both new task and update
    TaskmanagerComponent.prototype.confirmTask = function () {
        if (!this.newTask) {
            var data = {
                header: this.header,
                classCode: this.classCode,
                category: this.category,
                plane: this.plane,
                description: this.description,
                priority: this.priority
            };
            this.apiService.updateDefect(data)
                .then(function (res) {
                console.log(res);
            })
                .catch(function (res) {
                console.log(res);
            });
        }
        else {
            var data = {
                header: this.header,
                classCode: this.classCode,
                category: this.category,
                plane: this.plane,
                description: this.description,
                priority: this.priority
            };
            this.apiService.createDefect(data)
                .then(function (res) {
                console.log(res);
            })
                .catch(function (res) {
                console.log(res);
            });
        }
    };
    // preload the modal fields
    // existing task
    TaskmanagerComponent.prototype.selectTask = function (defect) {
        this.newTask = false;
        this.header = defect.header;
        this.plane = defect.plane.swt,
            this.description = defect.description,
            this.category = defect.category,
            this.classCode = defect.classCode;
        this.id = defect.id;
    };
    //for demo
    TaskmanagerComponent.prototype.simulateSelect = function () {
        this.newTask = true;
        this.header = "Light at Seat 23B spoilt";
        this.plane = "SWT",
            this.description = "",
            this.category = "seats",
            this.classCode = "economy";
    };
    return TaskmanagerComponent;
}());
TaskmanagerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-taskmanager',
        template: __webpack_require__("../../../../../src/app/components/planner/taskmanager/taskmanager.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/planner/taskmanager/taskmanager.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* APIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* APIService */]) === "function" && _a || Object])
], TaskmanagerComponent);

var _a;
//# sourceMappingURL=taskmanager.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Routes = {
    API: "http://db-gateway-siacabindefects.b9ad.pro-us-east-1.openshiftapps.com",
    user: "/getuser",
    technician: "/tech",
    technicians: "/techs",
    defects: "/defects",
    defect: "/defect",
    techDefects: "/techdefects",
    createDefect: "/createdefect",
    assignTech: "/techassign/"
};
var APIService = (function () {
    function APIService(http) {
        this.http = http;
        this.loggedInAsSupervisor = true;
        this.loggedInAsPlanner = true;
    }
    APIService.prototype.getUser = function (id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('id', id);
        return new Promise(function (resolve, reject) {
            _this.http
                .get(Routes.API + Routes.user, { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    APIService.prototype.getTechnician = function (id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('id', id);
        return new Promise(function (resolve, reject) {
            _this.http
                .get(Routes.API + Routes.technician, { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    APIService.prototype.getTechnicians = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http
                .get(Routes.API + Routes.technicians)
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    APIService.prototype.getDefect = function (id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('id', id);
        return new Promise(function (resolve, reject) {
            _this.http
                .get(Routes.API + Routes.defect, { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    APIService.prototype.getDefects = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http
                .get(Routes.API + Routes.defects)
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    APIService.prototype.getTechDefects = function (id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('id', id);
        return new Promise(function (resolve, reject) {
            _this.http
                .get(Routes.API + Routes.techDefects, { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    APIService.prototype.assignToDefect = function (techID, defectID) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = {
            id: techID
        };
        return new Promise(function (resolve, reject) {
            _this.http
                .put(Routes.API + Routes.assignTech + defectID, JSON.stringify(body), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    APIService.prototype.unassignFromDefect = function (techID, defectID) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = {
            id: techID
        };
        var reqOpt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            body: body
        });
        return new Promise(function (resolve, reject) {
            _this.http
                .delete(Routes.API + Routes.assignTech + defectID, reqOpt)
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    APIService.prototype.createDefect = function (defect) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve, reject) {
            _this.http
                .post(Routes.API + Routes.createDefect, JSON.stringify(defect), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    APIService.prototype.updateDefect = function (defect) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve, reject) {
            _this.http
                .patch(Routes.API + Routes.defect + '/' + defect.id, JSON.stringify(defect), { headers: headers })
                .subscribe(function (data) {
                resolve(data.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return APIService;
}());
APIService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], APIService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/supervisor/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupervisorAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_service__ = __webpack_require__("../../../../../src/app/components/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupervisorAuthGuard = (function () {
    function SupervisorAuthGuard(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    SupervisorAuthGuard.prototype.canActivate = function () {
        if (this.loginService.loggedInAsSupervisor) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    return SupervisorAuthGuard;
}());
SupervisorAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */]) === "function" && _b || Object])
], SupervisorAuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/components/supervisor/deployment/deployment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/supervisor/deployment/deployment.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <table class=\"table table-striped\">\n    <thead class=\"thead-inverse\">\n      <tr>\n        <th scope=\"col\">ID</th>\n        <th scope=\"col\">First Name</th>\n        <th scope=\"col\">Last Name</th>\n        <th scope=\"col\">Location</th>\n        <th scope=\"col\">Jobs Completed</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let tech of technicians\" class=\"task-item\">\n        <td>{{tech.user.id}}</td>\n        <td>{{tech.user.first_name}}</td>\n        <td>{{tech.user.last_name}}</td>\n        <td>{{getRandLocation()}}</td>\n        <td>{{getRandNum()}}</td>\n      </tr>\n    </tbody>\n  </table>\n  <br>\n  <button type=\"button\" class=\"btn btn-primary\">Add Technician</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/supervisor/deployment/deployment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeploymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/components/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeploymentComponent = (function () {
    function DeploymentComponent(apiService) {
        this.apiService = apiService;
    }
    DeploymentComponent.prototype.ngOnInit = function () {
        this.initTechs();
    };
    DeploymentComponent.prototype.getRandLocation = function () {
        var locations = [
            "Hanger 2A",
            "Hanger 1C",
            "Hanger 3B",
            "Lounge",
            "Hanger 2C"
        ];
        return locations[this.getRandNum()];
    };
    DeploymentComponent.prototype.getRandNum = function () {
        return Math.floor(Math.random() * 5);
    };
    DeploymentComponent.prototype.initTechs = function () {
        var _this = this;
        this.apiService.getTechnicians()
            .then(function (res) {
            _this.technicians = res;
        })
            .catch(function (res) {
            console.log(res);
        });
    };
    return DeploymentComponent;
}());
DeploymentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-deployment',
        template: __webpack_require__("../../../../../src/app/components/supervisor/deployment/deployment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/supervisor/deployment/deployment.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* APIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* APIService */]) === "function" && _a || Object])
], DeploymentComponent);

var _a;
//# sourceMappingURL=deployment.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/supervisor/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-component-wrapper\">\n  <nav [ngClass]=\"{ 'sidebar-collapse': !sidebarVisible }\" class=\"bg-faded sidebar sidebar-expand\">\n    <ul class=\"nav nav-pills flex-column\">\n      <li class=\"nav-item\">\n        <div class=\"d-flex sidebar-top-item\">\n          <label *ngIf=\"sidebarVisible\" class=\"nav-link-text sidebar-top-item-text\">\n            <i class=\"fa fa-user-circle-o fa-lg\" aria-hidden=\"true\"></i> John Supervisor\n          </label>\n          <a (click)=\"toggleSidebar()\">\n            <i class=\"fa fa-bars fa-lg\" aria-hidden=\"true\"></i>\n          </a>\n        </div>\n      </li>\n      <hr>\n\n      <!--OVERVIEW-->\n      <li [routerLinkActive]=\"['nav-link-active']\" [routerLinkActiveOptions]=\"{exact:true}\"  class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/supervisor']\">\n          <div class=\"d-flex sidebar-link-item\">\n            <i class=\"fa fa-bar-chart fa-lg\" aria-hidden=\"true\"></i>\n            <label *ngIf=\"sidebarVisible\" class=\"nav-link-text\">\n              Overview\n            </label>\n          </div>\n        </a>\n      </li>\n\n      <!--NEW POSTS-->\n      <li [routerLinkActive]=\"['nav-link-active']\" [routerLinkActiveOptions]=\"{exact:true}\"  class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/supervisor/deployment']\">\n          <div class=\"d-flex sidebar-link-item\">\n            <i class=\"fa fa-users fa-lg\" aria-hidden=\"true\"></i>\n            <label *ngIf=\"sidebarVisible\" class=\"nav-link-text\">\n            Deployment\n          </label>\n          </div>\n        </a>\n      </li>\n\n    </ul>\n  </nav>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/supervisor/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-component-wrapper {\n  height: 100%;\n  /* Sidebar expand-collapse animation */ }\n  .navbar-component-wrapper .sidebar {\n    height: 100%;\n    min-height: 100vh;\n    font-size: 1.2em;\n    font-family: sans-serif;\n    z-index: 1000;\n    overflow-x: hidden;\n    overflow-y: auto;\n    /* Scrollable contents if viewport is shorter than content. */\n    border-right: 1px solid #eee;\n    line-height: 0;\n    padding-left: 0;\n    padding-right: 0;\n    /* Attempt to align icons to text (not successful) */\n    /* Divider between sections */ }\n    .navbar-component-wrapper .sidebar .sidebar-top-item {\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      padding: 1em 1em;\n      /* Make back to site button smaller than the other buttons */\n      /* Remove underline on hover */ }\n      .navbar-component-wrapper .sidebar .sidebar-top-item .sidebar-top-item-text {\n        font-size: 0.85em;\n        color: #000; }\n      .navbar-component-wrapper .sidebar .sidebar-top-item a:hover {\n        text-decoration: none; }\n    .navbar-component-wrapper .sidebar .fa {\n      padding: 0 0.3em; }\n    .navbar-component-wrapper .sidebar label.nav-link-text {\n      cursor: inherit;\n      white-space: nowrap; }\n    .navbar-component-wrapper .sidebar .sidebar-link-item {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      -webkit-box-align: baseline;\n          -ms-flex-align: baseline;\n              align-items: baseline; }\n    .navbar-component-wrapper .sidebar hr {\n      border: 1px solid #ddd;\n      width: 90%; }\n  .navbar-component-wrapper .sidebar-expand {\n    width: 12em; }\n  .navbar-component-wrapper .sidebar-collapse {\n    width: 4em; }\n  .navbar-component-wrapper .sidebar .nav {\n    margin-bottom: 20px; }\n  .navbar-component-wrapper .sidebar .nav-item {\n    width: 100%;\n    height: 2.5em; }\n  .navbar-component-wrapper .sidebar .nav-link {\n    border-radius: 0;\n    color: #000; }\n  .navbar-component-wrapper .sidebar {\n    transition: all 0.2s ease-in-out; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/supervisor/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupervisorNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupervisorNavbarComponent = (function () {
    function SupervisorNavbarComponent(router) {
        this.router = router;
    }
    SupervisorNavbarComponent.prototype.ngOnInit = function () {
        this.sidebarVisible = true;
        this.sidebarState = "collapse";
    };
    SupervisorNavbarComponent.prototype.toggleSidebar = function () {
        this.sidebarVisible = !this.sidebarVisible;
    };
    SupervisorNavbarComponent.prototype.toggleSidebarState = function () {
        if (this.sidebarState === "expand") {
            this.sidebarState = "collapse";
        }
        else {
            this.sidebarState = "expand";
        }
    };
    return SupervisorNavbarComponent;
}());
SupervisorNavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'super-navbar',
        template: __webpack_require__("../../../../../src/app/components/supervisor/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/supervisor/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], SupervisorNavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/supervisor/overseer/overseer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overseer-component-wrapper container\">\n  <div class=\"row overseer-analytics\">\n    <div class=\"col-lg-4\">\n      <h1>5/20</h1>\n      <h3>\n        <span class=\"text-muted\">Defects repaired</span>\n      </h3>\n    </div>\n    <!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <h1>{{numTechniciansDeployed}}</h1>\n      <h3>\n        <span class=\"text-muted\">Technicians deployed</span>\n      </h3>\n    </div>\n    <!-- /.col-lg-4 -->\n    <div class=\"col-lg-4\">\n      <h1>27</h1>\n      <h2>\n        <span class=\"text-muted\">Planes</span>\n      </h2>\n    </div>\n    <!-- /.col-lg-4 -->\n  </div>\n\n  <br>\n  <br>\n\n  <div class=\"planner-task-manager-header d-flex\">\n    <h3>Tasks</h3>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-primary my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n  <table class=\"table table-striped\">\n    <thead class=\"thead-inverse\">\n      <tr>\n        <th scope=\"col\">Defect No.</th>\n        <th scope=\"col\">Defect</th>\n        <th scope=\"col\">Date Raised</th>\n        <th scope=\"col\">Category</th>\n        <th scope=\"col\">Priority</th>\n        <th scope=\"col\">Assigned</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let defect of defects\" (click)=\"selectDefect(defect.id)\" class=\"task-item\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\">\n        <td>{{defect.id}}</td>\n        <td>{{defect.header}}</td>\n        <td>{{defect.dateReported}}</td>\n        <td>{{defect.category}}</td>\n        <td>{{defect.priority}}</td>\n        <td>{{defect.techsAssigned.length}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h3 class=\"modal-title\">{{modalHeader}}</h3>\n        <p>{{modalDescription}}</p>\n      </div>\n      <br>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h4>ETA</h4>\n          </div>\n          <div class=\"col-md-6\">\n            <h4>ETD</h4>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            {{modalETA}}\n          </div>\n          <div class=\"col-md-6\">\n            {{modalETD}}\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h4>Date Reported</h4>\n          </div>\n          <div class=\"col-md-6\">\n            <h4>Category</h4>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            {{modalDateReported}}\n          </div>\n          <div class=\"col-md-6\">\n            {{modalCategory}}\n          </div>\n        </div>\n        <br>\n        <h4>Spares</h4>\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Part ID.</th>\n              <th scope=\"col\">Name</th>\n              <th scope=\"col\">Quantity</th>\n              <th scope=\"col\">Drawn</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let spare of modalSpares\" class=\"task-item\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\">\n              <td>{{spare.spare.partID}}</td>\n              <td>{{spare.spare.name}}</td>\n              <td>{{spare.quantity}}</td>\n              <td>{{spare.drawn}}</td>\n            </tr>\n          </tbody>\n        </table>\n        <br>\n        <br>\n        <br>\n        <!-- <div style=\"text-align: center;\"><h3>Manpower</h3></div> -->\n        <form>\n          <div class=\"row\">\n            <div class='dg-task-container dg-container-2 form-group col-md-6' [dragula]='\"first-bag\"'>\n              <h4>Unassigned Technicians</h4>\n              <div *ngFor=\"let utech of modalUnassignedTechs\" class=\"dg-card\">\n                {{utech.user.first_name}}\n              </div>\n            </div>\n            <div class='dg-task-container dg-container-2 form-group col-md-6' [dragula]='\"first-bag\"'>\n              <h4>Technicians Assigned</h4>\n              <div *ngFor=\"let atech of modalTechsAssigned\" class=\"dg-card\">\n                {{atech.user.first_name}}\n              </div>\n            </div>\n          </div>\n          <button (click)=\"confirmAssign()\" style=\"margin-bottom: 2em;\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">\n            Confirm\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/supervisor/overseer/overseer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overseer-component-wrapper .planner-task-manager-header {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 0.5em; }\n\n.overseer-component-wrapper .dg-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.overseer-component-wrapper .dg-card {\n  transition: opacity 0.4s ease-in-out; }\n\n.overseer-component-wrapper .dg-wrapper > div {\n  padding: 1em 1em; }\n\n.overseer-component-wrapper .dg-container-2 {\n  width: 45%;\n  border: 1px solid #333; }\n\n.overseer-component-wrapper .dg-task-container {\n  background-color: #eeeeee; }\n\n.overseer-component-wrapper .task-item {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/supervisor/overseer/overseer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverseerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/components/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OverseerComponent = (function () {
    function OverseerComponent(apiService, dragulaService) {
        var _this = this;
        this.apiService = apiService;
        this.dragulaService = dragulaService;
        this.techIDs = [4, 5, 7, 8, 9];
        this.techObj = {
            "Jack": 4,
            "Shao Hui": 7,
            "Yu Jia": 8,
            "Adam": 9
        };
        //temp binding solution
        this.dragulaService.drop.subscribe(function (value) {
            var tech = value[1].innerText;
            var techID = _this.techObj.tech;
            var wasNotAssigned = false;
            for (var i = 0, len = _this.modalUnassignedTechs.length; i < len; i++) {
                //check if person was unassigned
                var curPerson = _this.modalUnassignedTechs[i];
                // console.log(curPerson);
                if (curPerson.user.first_name == tech) {
                    wasNotAssigned = true;
                    techID = curPerson.user.id;
                    break;
                }
            }
            for (var i = 0, len = _this.modalTechsAssigned.length; i < len; i++) {
                //check if person was unassigned
                var curPerson = _this.modalTechsAssigned[i];
                if (curPerson.user.first_name == tech) {
                    techID = curPerson.user.id;
                    break;
                }
            }
            if (wasNotAssigned) {
                _this.apiService.assignToDefect(techID, _this.curDefectID)
                    .then(function (res) {
                    console.log(res);
                })
                    .catch(function (res) {
                    console.log(res);
                });
            }
            else {
                _this.apiService.unassignFromDefect(techID, _this.curDefectID);
            }
        });
    }
    OverseerComponent.prototype.ngOnInit = function () {
        this.initTechs();
        this.initDefects();
    };
    OverseerComponent.prototype.confirmAssign = function () {
        this.initTechs();
        this.initDefects();
    };
    //populate the modal fields
    OverseerComponent.prototype.selectDefect = function (defectID) {
        for (var i = 0, len = this.defects.length; i < len; i++) {
            var cur = this.defects[i];
            if (cur.id == defectID) {
                //populate
                this.curDefectID = cur.id;
                this.modalHeader = cur.header;
                this.modalETA = this.formatDate(new Date(cur.plane.ETA));
                this.modalETD = this.formatDate(new Date(cur.plane.ETD));
                this.modalTechsAssigned = cur.techsAssigned;
                this.modalDateReported = this.formatDate(new Date(cur.dateReported));
                this.modalCategory = cur.category;
                this.modalSpares = cur.spares;
                this.modalUpdates = cur.updates;
                this.getUnassignedTechs(cur.techsAssigned);
            }
        }
    };
    OverseerComponent.prototype.getUnassignedTechs = function (assignedTechs) {
        //temp cheaty method
        this.modalUnassignedTechs = []; //clear array
        for (var i = 0, len = this.techIDs.length; i < len; i++) {
            var present = false;
            //check if tech has been assigned to task
            for (var j = 0, len2 = assignedTechs.length; j < len2; j++) {
                if (this.techIDs[i] == assignedTechs[j].user.id) {
                    present = true;
                }
            }
            if (!present) {
                for (var k = 0, len3 = this.technicians.length; k < len3; k++) {
                    if (this.technicians[k].user.id == this.techIDs[i]) {
                        this.modalUnassignedTechs.push(this.technicians[k]);
                    }
                }
            }
        }
    };
    //temp filler method for max assigned to task
    OverseerComponent.prototype.calcTechniciansDeployed = function () {
        var max = 0;
        for (var i = 0, len = this.defects.length; i < len; i++) {
            var cur = this.defects[i];
            if (cur.techsAssigned.length > max) {
                max = cur.techsAssigned.length;
            }
        }
        this.numTechniciansDeployed = max + '/' + this.technicians.length;
    };
    OverseerComponent.prototype.initDefects = function () {
        var _this = this;
        this.apiService.getDefects()
            .then(function (res) {
            _this.defects = res;
            _this.calcTechniciansDeployed();
        })
            .catch(function (res) {
            console.log(res);
        });
    };
    OverseerComponent.prototype.initTechs = function () {
        var _this = this;
        this.apiService.getTechnicians()
            .then(function (res) {
            _this.technicians = res;
        })
            .catch(function (res) {
            console.log(res);
        });
    };
    OverseerComponent.prototype.formatDate = function (date) {
        console.log("formatting");
        console.log(date);
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    };
    return OverseerComponent;
}());
OverseerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-overseer',
        template: __webpack_require__("../../../../../src/app/components/supervisor/overseer/overseer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/supervisor/overseer/overseer.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* APIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* APIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__["DragulaService"]) === "function" && _b || Object])
], OverseerComponent);

var _a, _b;
//# sourceMappingURL=overseer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/supervisor/router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupervisorRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard__ = __webpack_require__("../../../../../src/app/components/supervisor/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__supervisor_component__ = __webpack_require__("../../../../../src/app/components/supervisor/supervisor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__overseer_overseer_component__ = __webpack_require__("../../../../../src/app/components/supervisor/overseer/overseer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deployment_deployment_component__ = __webpack_require__("../../../../../src/app/components/supervisor/deployment/deployment.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var viewsRoutes = [
    {
        path: 'supervisor',
        component: __WEBPACK_IMPORTED_MODULE_3__supervisor_component__["a" /* SupervisorComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard__["a" /* SupervisorAuthGuard */]],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__overseer_overseer_component__["a" /* OverseerComponent */] },
            { path: 'deployment', component: __WEBPACK_IMPORTED_MODULE_5__deployment_deployment_component__["a" /* DeploymentComponent */] }
        ]
    }
];
var SupervisorRouter = (function () {
    function SupervisorRouter() {
    }
    return SupervisorRouter;
}());
SupervisorRouter = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(viewsRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], SupervisorRouter);

//# sourceMappingURL=router.js.map

/***/ }),

/***/ "../../../../../src/app/components/supervisor/supervisor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"supervisor-component-wrapper\">\n  <div class=\"d-flex\">\n    <super-navbar></super-navbar>\n    <div class=\"supervisor-views-container\">\n      <br>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n  "

/***/ }),

/***/ "../../../../../src/app/components/supervisor/supervisor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".supervisor-component-wrapper .supervisor-views-container {\n  width: 70%;\n  margin: 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/supervisor/supervisor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupervisorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SupervisorComponent = (function () {
    function SupervisorComponent() {
    }
    SupervisorComponent.prototype.ngOnInit = function () {
    };
    return SupervisorComponent;
}());
SupervisorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-supervisor',
        template: __webpack_require__("../../../../../src/app/components/supervisor/supervisor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/supervisor/supervisor.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SupervisorComponent);

//# sourceMappingURL=supervisor.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/supervisor/supervisor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupervisorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__supervisor_component__ = __webpack_require__("../../../../../src/app/components/supervisor/supervisor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/supervisor/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__overseer_overseer_component__ = __webpack_require__("../../../../../src/app/components/supervisor/overseer/overseer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_service__ = __webpack_require__("../../../../../src/app/components/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_api_service__ = __webpack_require__("../../../../../src/app/components/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__router__ = __webpack_require__("../../../../../src/app/components/supervisor/router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_guard__ = __webpack_require__("../../../../../src/app/components/supervisor/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__task_task_component__ = __webpack_require__("../../../../../src/app/components/supervisor/task/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__technician_technician_component__ = __webpack_require__("../../../../../src/app/components/supervisor/technician/technician.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__taskmanager_taskmanager_component__ = __webpack_require__("../../../../../src/app/components/supervisor/taskmanager/taskmanager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__deployment_deployment_component__ = __webpack_require__("../../../../../src/app/components/supervisor/deployment/deployment.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var SupervisorModule = (function () {
    function SupervisorModule() {
    }
    return SupervisorModule;
}());
SupervisorModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_10__router__["a" /* SupervisorRouter */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__supervisor_component__["a" /* SupervisorComponent */],
            __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* SupervisorNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__overseer_overseer_component__["a" /* OverseerComponent */],
            __WEBPACK_IMPORTED_MODULE_12__task_task_component__["a" /* TaskComponent */],
            __WEBPACK_IMPORTED_MODULE_13__technician_technician_component__["a" /* TechnicianComponent */],
            __WEBPACK_IMPORTED_MODULE_14__taskmanager_taskmanager_component__["a" /* TaskmanagerComponent */],
            __WEBPACK_IMPORTED_MODULE_15__deployment_deployment_component__["a" /* DeploymentComponent */]
        ],
        exports: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__login_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_9__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_11__auth_guard__["a" /* SupervisorAuthGuard */]
        ]
    })
], SupervisorModule);

//# sourceMappingURL=supervisor.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/supervisor/task/task.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/supervisor/task/task.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  task works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/supervisor/task/task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskComponent = (function () {
    function TaskComponent() {
    }
    TaskComponent.prototype.ngOnInit = function () {
    };
    return TaskComponent;
}());
TaskComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-task',
        template: __webpack_require__("../../../../../src/app/components/supervisor/task/task.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/supervisor/task/task.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TaskComponent);

//# sourceMappingURL=task.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/supervisor/taskmanager/taskmanager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/supervisor/taskmanager/taskmanager.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  taskmanager works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/supervisor/taskmanager/taskmanager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskmanagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskmanagerComponent = (function () {
    function TaskmanagerComponent() {
    }
    TaskmanagerComponent.prototype.ngOnInit = function () {
    };
    return TaskmanagerComponent;
}());
TaskmanagerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-taskmanager',
        template: __webpack_require__("../../../../../src/app/components/supervisor/taskmanager/taskmanager.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/supervisor/taskmanager/taskmanager.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TaskmanagerComponent);

//# sourceMappingURL=taskmanager.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/supervisor/technician/technician.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"name\" class=\"technician-card\">\n  <div>\n    <h3>{{name}}</h3>\n  </div>\n  <div>\n    <div>\n      <h3>{{location}}</h3>\n    </div>\n    <div>\n      <h5>{{location}}</h5>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/supervisor/technician/technician.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/supervisor/technician/technician.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnicianComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TechnicianComponent = (function () {
    function TechnicianComponent() {
    }
    TechnicianComponent.prototype.ngOnInit = function () {
        this.initDetails();
    };
    TechnicianComponent.prototype.mockInitDetails = function () {
        this.name = "John Alpaca";
        this.location = "Currently on tea break";
        this.numJobs = 6;
    };
    TechnicianComponent.prototype.initDetails = function () {
        //call service and populate fields
        //populate technician fields?
    };
    return TechnicianComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TechnicianComponent.prototype, "id", void 0);
TechnicianComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-technician',
        template: __webpack_require__("../../../../../src/app/components/supervisor/technician/technician.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/supervisor/technician/technician.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TechnicianComponent);

//# sourceMappingURL=technician.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map