abstract class Car {
    constructor(protected model: string, public year: number) {
        this.model = model
        this.year = year
    }


    abstract bar(): any;
    foo () :void {
        console.log (this.bar())
    }
}

    class text extends Car {
        bar() {
         return ('hi')

        }

    }





let car1 = new text('410', 2012)
console.log(car1.bar())
