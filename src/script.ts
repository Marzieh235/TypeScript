class Car {
    model : string 
    year : number
    constructor (model : string , year : number){
        this.model = model 
        this.year = year
    }
}

let car1 = new Car ('206' , 1380)
console.log(car1)