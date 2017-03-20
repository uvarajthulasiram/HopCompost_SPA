/// <reference path="../typings/globals/jquery/index.d.ts" />;
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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
//import { Auth } from './auth.service';
//import { NotificationService } from './shared/notification.service';
var AppComponent = (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.pageTitle = 'HopCompost';
    }
    AppComponent.prototype.ngOnInit = function () {
        //if (!this._auth.authenticated) {
        this._router.navigate(['/welcome']);
        //}
    };
    AppComponent.prototype.ngAfterViewInit = function () { $('#side-menu').metisMenu(); };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-tag',
        templateUrl: 'app.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map