

function authFactory(value : boolean) {
    return function auth<T extends { new(...args : any[])}>(constractor : T) {
        // process
        return class extends constractor {
            auth = value
        }
    }
}

function changeable(value : boolean) {
    return function(target :any , propertyKey : string , descriptor : PropertyDescriptor ) {
        descriptor.writable = false;
    }
}


@authFactory(false)
class User {
    private name = 'amir'

    @changeable(false)
    getName() {
        return this.name;
    }
}

let user = new User();
console.log(user.getName())
