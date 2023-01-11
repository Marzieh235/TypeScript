function sum(x: number, y: number): number {
    return x + y;
}


console.log(sum(5, 6));


let sum2 = function (x: any, y: any): string {
    return x + y;
}


console.log(sum2(5, 'amir'));

let sum3 = (x: any, y: any): string => x + y;


console.log(sum3(5, 'amir'));


let test: (a: string, b: string) => any;
test = function (a: string, b: string) {
    return 'amirm + MJ'
}


console.log(test('', ''));



let sum5 = (x:number = 1 , y?:number )=> {
    if(y){
        return x+y;
    }
    return x;
}


console.log(sum5(3,4));
console.log(sum5());


let sum6 = (x:number = 1 , ...numbers : number[] )=> {
 console.log(x , numbers)
}

console.log(sum6(2,22,33))