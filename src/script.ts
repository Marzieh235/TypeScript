function logData<T>(data : T) : T {
    return data;
}

interface myLogFuncInterface<T> {
    (data : T) : T
}

let myLogFunc : myLogFuncInterface<number> ;
myLogFunc = function(data : number ) : number {
    return data
}




console.log(myLogFunc)