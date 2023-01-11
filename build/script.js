"use strict";
class Car {
    constructor(model, year) {
        Car.model = model;
        this.year = year;
    }
}
// class text extends Car {
//     bar() {
//      return ('hi')
//     }
// }
let car1 = new Car('410', 2012);
console.log(Car.model);
console.log(car1.year);
// console.log(car1.bar())
