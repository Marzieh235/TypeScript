"use strict";
class Car {
    constructor() { }
    static getInstance() {
        if (!Car.instance)
            Car.instance = new Car();
        return Car.instance;
    }
}
let car1 = Car.getInstance();
let car2 = Car.getInstance();
console.log(car1 === car2);
