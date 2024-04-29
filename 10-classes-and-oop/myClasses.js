/*class User {
    constructor(name,email,pass){
        this.name = name;
        this.email = email;
        this.pass= pass;
    }

    encryptPass(){
        return `11${this.pass}aa`
    }

    capitalize(){
        return `${this.name.toUpperCase()}`
    }
}

const print = new User("huz","huz@hu.com",1234)
console.log(print.capitalize());
*/


/*
function User (name,email,pass){
    this.name = name;
    this.email = email;
    this.pass= pass;
}

User.prototype.encryptPass = function(){
    return `11${this.pass}aa`
}

User.prototype.capitalize = function (){
    return `${this.name.toUpperCase()}`
}

const print = new User("huz","huz@hu.com",1234)
console.log(print.encryptPass());
*/

class User {
    constructor(name){
        this.name = name;
        
    }

    logMe(){
        return `welcome ${this.name}`
    }
}

// const print = new User("huzair","huzi@huz.com")
// console.log(print);



class Teacher extends User {
    constructor(name,email,pass){
    super(name)    
    this.email = email;
    this.pass = pass;
    }

    printMe(){
        return `Username is ${this.name} Email is ${this.email} Password is ${this.pass}`
    }
}

const print = new Teacher("huzair","huzi@huz.com",123)
console.log(print.printMe());
console.log(print instanceof User);