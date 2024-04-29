class User {
    constructor(name,email,pass){
        this.email = email;
        this.name = name;
        this.pass = pass;
    }

    get name(){
        return this._name.toUpperCase()
    }

    set name (val){
        this._name = val.toUpperCase()
    }

    get email (){
        return this._email.toUpperCase()
    }

    set email (val){
        this._email = val
    }

    get pass (){
        return this._pass + 321
    }

    set pass (val){
        this._pass = val
    }

}

const huzi = new User("hello","h@huzi.com",123)
console.log(huzi.name);
console.log(huzi.email);
console.log(huzi.pass);
