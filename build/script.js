"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Emoji() {
    return function (target, key) {
        let val = target[key];
        Object.defineProperty(target, key, {
            get: () => val,
            set: (newVal) => {
                val = `🍥 ${newVal} 🍥`;
            },
            configurable: true,
            enumerable: true,
        });
    };
}
class IceCream {
    constructor() {
        this.flavor = "naruto";
    }
}
__decorate([
    Emoji()
], IceCream.prototype, "flavor", void 0);
let IC1 = new IceCream();
console.log(IC1.flavor);
