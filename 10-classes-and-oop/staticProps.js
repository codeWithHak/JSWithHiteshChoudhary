class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        return `welcome ${this.username}`
    }

    static randomId(){
        return `123`
    }
}

const print = new User("huzair")
// console.log(print.randomId());

class Player extends User{
    constructor(username,email){
        super(username)
        this.email = email;
    }
}

const nowPrint = new Player("huz","huz@hu.com")
// this below line will throw error because randomId is static
// console.log(nowPrint.randomId());