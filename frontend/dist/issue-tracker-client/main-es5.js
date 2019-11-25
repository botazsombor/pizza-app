var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <button mat-button href=\"/\">\n    <mat-icon>home</mat-icon>\n    User tracker\n  </button>\n\n  <span class=\"fill-remaining-space\" fxHide=\"false\" fxHide.gt-sm></span>\n  <div fxLayout=\"row\" fxShow=\"false\" fxShow.gt-sm>\n    <button mat-button routerLink=\"/users\">My users</button>\n    <button mat-button routerLink=\"/users/add\">New users</button>\n  </div>\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\" fxHide=\"false\" fxHide.gt-sm>\n    <mat-icon>menu</mat-icon>\n  </button>\n</mat-toolbar>\n<mat-menu xPosition=\"before\" #menu=\"matMenu\">\n  <button mat-menu-item routerLink=\"/users\">My users</button>\n  <button mat-menu-item routerLink=\"/users/add\">New users</button>\n</mat-menu>\n\n<router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/status-filter/status-filter.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/status-filter/status-filter.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-button-toggle-group (change)=\"onFilterChange(group.value)\" [value]=\"selectedStatus\" #group=\"matButtonToggleGroup\">\n    <mat-button-toggle value=\"\">\n      ALL\n    </mat-button-toggle>\n    <mat-button-toggle value=\"{{status}}\"  *ngFor=\"let status of statuses\">\n      {{ status }}\n    </mat-button-toggle>\n  </mat-button-toggle-group>\n  ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-detail/user-detail.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-detail/user-detail.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<h1 class=\"display-2\">User #{{ user.id }}</h1>\n<dl class=\"row\">\n  <dt class=\"col-sm-3\">Title</dt>\n  <dd class=\"col-sm-9\">{{ user.userName }}</dd>\n\n  <dt class=\"col-sm-3\">Location</dt>\n  <dd class=\"col-sm-9\">{{ user.emailAddress }}</dd>\n  \n  <dt class=\"col-sm-3\">Description</dt>\n  <dd class=\"col-sm-9\">{{ user.password }}</dd>\n  \n  <dt class=\"col-sm-3\">Status</dt>\n  <dd class=\"col-sm-9\">{{ user.role }}</dd>\n</dl>\n<button mat-raised-button routerLink=\"/users\">Back</button>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-form/user-form.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-form/user-form.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form (submit)=\"submit(userForm)\" #userForm=\"ngForm\">\n  <div class=\"form-group\">\n    <!-- <small id=\"locationHelp\" class=\"form-text text-muted\">Give the location of the user (e.g. labor)</small> -->\n    <mat-form-field>\n      <input matInput\n        type=\"text\"\n        name=\"title\"\n        [(ngModel)]=\"model.title\"\n        aria-describedby=\"titleHelp\"\n        placeholder=\"Enter title\"\n        required\n        #title=\"ngModel\">\n    </mat-form-field>\n    <mat-error *ngIf=\"title.invalid && (title.dirty || title.touched) && title.errors.required\">\n      Title is required!\n    </mat-error>\n  </div>\n\n  <div class=\"form-group\">\n    <!-- <small id=\"locationHelp\" class=\"form-text text-muted\">Give the location of the user (e.g. labor)</small> -->\n    <mat-form-field>\n      <input matInput\n        type=\"text\"\n        name=\"location\"\n        [(ngModel)]=\"model.location\"\n        aria-describedby=\"locationHelp\"\n        placeholder=\"Enter location\"\n        required\n        pattern=\"PC\\d+\"\n        #location=\"ngModel\">\n    </mat-form-field>\n    <mat-error *ngIf=\"location.invalid && (location.dirty || location.touched) && location.errors.required\">\n      Location is required!\n    </mat-error>\n    <mat-error *ngIf=\"location.invalid && (location.dirty || location.touched) && location.errors.pattern\">\n      Location must start with PC...!\n    </mat-error>\n  </div>\n    \n    <div class=\"form-group\">\n      <!-- <small id=\"descriptionHelp\" class=\"form-text text-muted\">The error details</small> -->\n      <mat-form-field>\n        <textarea matInput\n          name=\"description\"\n          [(ngModel)]=\"model.description\"\n          aria-describedby=\"descriptionHelp\"\n          placeholder=\"Enter user details\">\n        </textarea>\n      </mat-form-field>\n    </div>\n    \n    <button mat-raised-button\n      [disabled]=\"!userForm.valid\" \n      type=\"submit\"\n      color=\"primary\">\n      Save user\n    </button>\n  </form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col\">\n      <h1 class=\"display-2\">My users</h1>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Title</th>\n            <th scope=\"col\">Location</th>\n            <th scope=\"col\">Status</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let user of filteredUsers\" (click)=\"onSelectUser(user)\" [class.table-info]=\"user === selectedUser\" >\n            <th scope=\"row\">{{ user.id }}</th>\n            <td>\n              <a [routerLink]=\"['/users', user.id]\">\n                {{ user.title }}\n              </a>\n            </td>\n            <td>{{ user.location }}</td>\n            <td>{{ user.status }}</td>\n            <td>\n              <button mat-raised-button color=\"primary\" (click)=\"onDeleteClick(user.id)\">Delete</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  \n  <status-filter [status]=\"selectedStatus\" (onChange)=\"onFilterChange($event)\"></status-filter>\n  \n  <button mat-raised-button color=\"primary\" (click)=\"onNewClick()\">New user</button>\n  <div class=\"col\" *ngIf=\"selectedUser\">\n    <user-form [user]=\"selectedUser\" (onSubmit)=\"onFormSubmit($event)\"></user-form>\n  </div>\n\n\n  \n  \n    \n    \n  ");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'user-tracker-client';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
            /* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/user-form/user-form.component.ts");
            /* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "./src/app/user-detail/user-detail.component.ts");
            /* harmony import */ var _status_filter_status_filter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./status-filter/status-filter.component */ "./src/app/status-filter/status-filter.component.ts");
            /* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                        _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_10__["UserListComponent"],
                        _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_11__["UserFormComponent"],
                        _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_12__["UserDetailComponent"],
                        _status_filter_status_filter_component__WEBPACK_IMPORTED_MODULE_13__["StatusFilterComponent"]
                    ],
                    imports: [
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                        _routing_routing_module__WEBPACK_IMPORTED_MODULE_14__["RoutingModule"],
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/routing/routing.module.ts": 
        /*!*******************************************!*\
          !*** ./src/app/routing/routing.module.ts ***!
          \*******************************************/
        /*! exports provided: RoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function () { return RoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
            /* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-form/user-form.component */ "./src/app/user-form/user-form.component.ts");
            /* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-detail/user-detail.component */ "./src/app/user-detail/user-detail.component.ts");
            var routes = [
                {
                    path: '',
                    redirectTo: '/users',
                    pathMatch: 'full'
                },
                {
                    path: 'users',
                    component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__["UserListComponent"]
                },
                {
                    path: 'users/add',
                    component: _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__["UserFormComponent"]
                },
                {
                    path: 'users/:id',
                    component: _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_5__["UserDetailComponent"]
                },
            ];
            var RoutingModule = /** @class */ (function () {
                function RoutingModule() {
                }
                return RoutingModule;
            }());
            RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                    declarations: []
                })
            ], RoutingModule);
            /***/ 
        }),
        /***/ "./src/app/status-filter/status-filter.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/status-filter/status-filter.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXR1cy1maWx0ZXIvc3RhdHVzLWZpbHRlci5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/status-filter/status-filter.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/status-filter/status-filter.component.ts ***!
          \**********************************************************/
        /*! exports provided: StatusFilterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusFilterComponent", function () { return StatusFilterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var StatusFilterComponent = /** @class */ (function () {
                function StatusFilterComponent() {
                    this.selectedStatus = '';
                    this.statuses = ['ROLE_USER', 'ROLE_ADMIN'];
                    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                StatusFilterComponent.prototype.onFilterChange = function (status) {
                    this.selectedStatus = status;
                    this.onChange.emit(status);
                };
                return StatusFilterComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('status')
            ], StatusFilterComponent.prototype, "selectedStatus", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], StatusFilterComponent.prototype, "onChange", void 0);
            StatusFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'status-filter',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./status-filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/status-filter/status-filter.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./status-filter.component.css */ "./src/app/status-filter/status-filter.component.css")).default]
                })
            ], StatusFilterComponent);
            /***/ 
        }),
        /***/ "./src/app/user-detail/user-detail.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/user-detail/user-detail.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/user-detail/user-detail.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/user-detail/user-detail.component.ts ***!
          \******************************************************/
        /*! exports provided: UserDetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function () { return UserDetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
            var UserDetailComponent = /** @class */ (function () {
                function UserDetailComponent(route, userService) {
                    this.route = route;
                    this.userService = userService;
                    this.user = null;
                }
                UserDetailComponent.prototype.ngOnInit = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var id, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    id = +this.route.snapshot.paramMap.get('id');
                                    _a = this;
                                    return [4 /*yield*/, this.userService.getUser(id)];
                                case 1:
                                    _a.user = _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                return UserDetailComponent;
            }());
            UserDetailComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
            ]; };
            UserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-detail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-detail/user-detail.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-detail.component.css */ "./src/app/user-detail/user-detail.component.css")).default]
                })
            ], UserDetailComponent);
            /***/ 
        }),
        /***/ "./src/app/user-form/user-form.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/user-form/user-form.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZm9ybS91c2VyLWZvcm0uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/user-form/user-form.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/user-form/user-form.component.ts ***!
          \**************************************************/
        /*! exports provided: UserFormComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function () { return UserFormComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var UserFormComponent = /** @class */ (function () {
                function UserFormComponent() {
                    this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                UserFormComponent.prototype.ngOnChanges = function () {
                    this.model = Object.assign({}, this.user);
                };
                UserFormComponent.prototype.submit = function (form) {
                    if (!form.valid) {
                        return;
                    }
                    this.onSubmit.emit(this.model);
                };
                return UserFormComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], UserFormComponent.prototype, "user", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], UserFormComponent.prototype, "onSubmit", void 0);
            UserFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'user-form',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-form/user-form.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-form.component.css */ "./src/app/user-form/user-form.component.css")).default]
                })
            ], UserFormComponent);
            /***/ 
        }),
        /***/ "./src/app/user-list/user-list.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/user-list/user-list.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/user-list/user-list.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/user-list/user-list.component.ts ***!
          \**************************************************/
        /*! exports provided: UserListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function () { return UserListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
            var UserListComponent = /** @class */ (function () {
                function UserListComponent(userService) {
                    this.userService = userService;
                    this.users = [];
                }
                UserListComponent.prototype.ngOnInit = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    this.selectedRole = '';
                                    _a = this;
                                    return [4 /*yield*/, this.userService.getUsers()];
                                case 1:
                                    _a.users = _b.sent();
                                    this.filter();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                UserListComponent.prototype.onFilterChange = function (role) {
                    this.selectedRole = role;
                    this.filter();
                };
                UserListComponent.prototype.onSelectUser = function (user) {
                    this.selectedUser = user;
                };
                UserListComponent.prototype.onFormSubmit = function (user) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(user.id > 0)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.userService.updateUser(user)];
                                case 1:
                                    _a.sent();
                                    this.selectedUser.userName = user.userName;
                                    this.selectedUser.emailAddress = user.emailAddress;
                                    this.selectedUser.password = user.password;
                                    this.selectedUser.role = user.role;
                                    this.selectedUser.pizzak = user.pizzak;
                                    return [3 /*break*/, 3];
                                case 2:
                                    this.selectedUser.id = Math.floor(Math.random() * 1000000);
                                    this.selectedUser.userName = user.userName;
                                    this.selectedUser.emailAddress = user.emailAddress;
                                    this.selectedUser.password = user.password;
                                    this.selectedUser.pizzak = user.pizzak;
                                    this.selectedUser.role = 'ROLE_ADMIN';
                                    this.userService.createUser(user)
                                        .then(function (createdUser) {
                                        _this.users.push(createdUser);
                                    });
                                    _a.label = 3;
                                case 3:
                                    this.selectedUser = null;
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                UserListComponent.prototype.onNewClick = function () {
                    this.selectedUser = new _user__WEBPACK_IMPORTED_MODULE_2__["User"]();
                };
                UserListComponent.prototype.onDeleteClick = function (id) {
                    var _this = this;
                    this.userService.deleteUser(id)
                        .then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    this.selectedUser = null;
                                    _a = this;
                                    return [4 /*yield*/, this.userService.getUsers()];
                                case 1:
                                    _a.users = _b.sent();
                                    this.filter();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                };
                UserListComponent.prototype.filter = function () {
                    var _this = this;
                    this.filteredUsers = this.selectedRole === ''
                        ? this.users
                        : this.users.filter(function (user) { return user.role === _this.selectedRole; });
                };
                return UserListComponent;
            }());
            UserListComponent.ctorParameters = function () { return [
                { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
            ]; };
            UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-list.component.css */ "./src/app/user-list/user-list.component.css")).default]
                })
            ], UserListComponent);
            /***/ 
        }),
        /***/ "./src/app/user.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/user.service.ts ***!
          \*********************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/app/user.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                })
            };
            var UserService = /** @class */ (function () {
                function UserService(http) {
                    this.http = http;
                    this.userUrl = 'http://localhost:8080/users';
                }
                UserService.prototype.getUsers = function () {
                    return this.http.get("" + this.userUrl, httpOptions).toPromise();
                };
                UserService.prototype.getUser = function (id) {
                    return this.http.get(this.userUrl + "/" + id, httpOptions).toPromise();
                };
                UserService.prototype.createUser = function (user) {
                    return this.http.post("" + this.userUrl, _user__WEBPACK_IMPORTED_MODULE_2__["User"], httpOptions).toPromise();
                };
                UserService.prototype.updateUser = function (user) {
                    return this.http.put(this.userUrl + "/" + user.id, user, httpOptions).toPromise();
                };
                UserService.prototype.deleteUser = function (id) {
                    return this.http.delete(this.userUrl + "/" + id, httpOptions).toPromise();
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/app/user.ts": 
        /*!*************************!*\
          !*** ./src/app/user.ts ***!
          \*************************/
        /*! exports provided: User */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function () { return User; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var User = /** @class */ (function () {
                function User() {
                    this.id = 0;
                    this.userName = '';
                    this.password = '';
                    this.emailAddress = '';
                    this.role = 'NEW';
                    this.pizzak = [];
                }
                return User;
            }());
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/botazsombor/Documents/Alkfejl/pizza-app/frontend/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map