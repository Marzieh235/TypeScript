interface Person {
    name : string
    family : string
    age : number
    fullname() : string
}


class Alex implements Person {
    constructor(public name : string , public family : string , public age : number) {
    }

    fullname() : string {
        return this.name + ' ' + this.family;
    }
}

class Hesam implements Person {
    constructor(public name : string , public family : string , public age : number) {
    }

    fullname() : string {
        return this.name + ' ' + this.family;
    }
}

class Ali implements Person {
    constructor(public name : string , public family : string , public age : number) {
    }

    fullname() : string {
        return this.name + ' ' + this.family;
    }
}


let user : Person = new Hesam('hesam' , 'family' , 26)
user = new Alex('hesam' , 'family' , 26)


console.log(user.fullname())

class Auth {
    login(user : Person) {
        // user.password
    }
}