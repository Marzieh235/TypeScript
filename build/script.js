"use strict";
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
        this.model = model;
        this.year = year;
    }
    foo() {
        console.log(this.bar());
    }
}
class text extends Car {
    bar() {
        return ('hi');
    }
}
let car1 = new text('410', 2012);
console.log(car1.bar());
