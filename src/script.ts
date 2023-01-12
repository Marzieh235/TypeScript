// function auth<T extends { new(...args : any[])}>(constractor : T) {
//     // process
//     console.log(constractor)
//     return class extends constractor {
//         auth = false
//     }
// }
function fisrt<T extends {new(...args : any[])}>(constractor : T) {
    // process
    return class extends constractor {
        property = 'first property'
    }
}

function second<T extends { new(...args : any[])}>(constractor : T) {
    // process
    return class extends constractor {
        property = 'second property'
    }
}

@second
@fisrt
class User {
    name = 'hesam'
}

let user = new User() ;
console.log(user)