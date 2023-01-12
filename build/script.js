"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// function auth<T extends { new(...args : any[])}>(constractor : T) {
//     // process
//     console.log(constractor)
//     return class extends constractor {
//         auth = false
//     }
// }
function fisrt(constractor) {
    // process
    return class extends constractor {
        constructor() {
            super(...arguments);
            this.property = 'first property';
        }
    };
}
function second(constractor) {
    // process
    return class extends constractor {
        constructor() {
            super(...arguments);
            this.property = 'second property';
        }
    };
}
let User = class User {
    constructor() {
        this.name = 'hesam';
    }
};
User = __decorate([
    second,
    fisrt
], User);
let user = new User();
console.log(user);
