class Car {
    constructor(protected model: string, public year: number) {
        this.model = model
        this.year = year
    }

set setmodel(themodel : string){
    this.model = themodel
}


get getmodel(){
    return ( this.model)
}

}





let car1 = new Car('410',2012)
car1.setmodel = '206'
console.log(car1)
console.log(car1.getmodel)
