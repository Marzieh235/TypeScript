class MyArray<T extends number | string,U> {
    constructor(public data : T[] , private data2 : U[]) {}

    addItem(item : T) {
        this.data.push(item)
    }

    getItem(index : number) {
        return this.data[index]
    }
}


let list = new MyArray<string , boolean>(['iitem1 ', 'item2'] , [false ,true])
list.addItem('4')
console.log(list.getItem(0))



function logParameters<T extends number | string,U extends boolean | object>(x : T , y : U) : void {
    console.log(x , y)
}


logParameters<string , boolean>('2' , true)
