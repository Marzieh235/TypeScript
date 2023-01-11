 class Car {
    static model : string
    readonly year : number
    constructor(model : string, year : number) {
        Car.model = model
        this.year = year
    }


//     abstract bar(): any;
//     foo () :void {
//         console.log (this.bar())
//     }
}

    // class text extends Car {
    //     bar() {
    //      return ('hi')

    //     }

    // }


let car1 = new Car('410', 2012)
console.log(Car.model)
console.log(car1.year)
// console.log(car1.bar())
