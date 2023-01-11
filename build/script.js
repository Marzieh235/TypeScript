"use strict";
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
        this.model = model;
        this.year = year;
    }
    sayHello() {
        console.log('hello everyOne');
    }
}
class Irankhodro extends Car {
    run() {
        return (this.sayHello);
    }
}
let test = new Irankhodro('405', 1400);
let car1 = new Car('206', 1380);
console.log(car1.year);
console.log(test.run());
