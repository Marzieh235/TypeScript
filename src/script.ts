class Car {
    private static instance : Car

    private constructor() {}

    public static getInstance() : Car {
        if(! Car.instance)
            Car.instance = new Car()
            
        return Car.instance;
    }


    // methods and properties
}


let car1 = Car.getInstance()
let car2 = Car.getInstance();


console.log(car1 === car2)
