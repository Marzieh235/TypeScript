"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function authFactory(value) {
    return function auth(constractor) {
        // process
        return class extends constractor {
            constructor() {
                super(...arguments);
                this.auth = value;
            }
        };
    };
}
function changeable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.writable = false;
    };
}
let User = class User {
    constructor() {
        this.name = 'amir';
    }
    getName() {
        return this.name;
    }
};
__decorate([
    changeable(false)
], User.prototype, "getName", null);
User = __decorate([
    authFactory(false)
], User);
let user = new User();
console.log(user.getName());
