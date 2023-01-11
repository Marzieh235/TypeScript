type MyObject = {
name : string ,
age : (num : number) => string
}



let person : MyObject =
{
    name : 'amirreza',
    age : (num : number)=>{
       return `age: ${num}`
    } 
}



let person2 :MyObject =
{
    name : 'marzieh',
    age : (num : number)=>{
       return `age: ${num}`
    } 
}


console.log(person)
console.log(person2)