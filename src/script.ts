function logData<T>(data : T[]) : T[] {
    return data;
}


console.log(logData<string>(['1' , 'asdasd']));

function text<A>(data : A[]) : A[] {
    return data;
}

console.log(text<number>([1 ,24]))