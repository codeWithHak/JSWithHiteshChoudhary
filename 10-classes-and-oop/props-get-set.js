// class Me {
//     constructor(name,age){
//         this.name = name;
//         this.age =  age;
//     }

//     rename(){
//         return this.name = "hanjee"
//     }
// }

// const print = new Me ("huzair",18)
// console.log(print.rename());


function User (name,email) {
    this._email = email;
    this._name = name

    Object.defineProperty(this,"name",{
        get:function(){
            return this._name.toUpperCase()
        },
        set: function (val){
            this._name = val
        }
    })

    Object.defineProperty(this,"email",{
        get:function(){
            return this._email.toUpperCase()
        },

        set: function(val){
            this.email = val
    }})

}



const print = new User("huzair","h@h.com")
console.log(print.email);


class newUser {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    get name(){
        return this._name.toUpperCase()
    }

    set name (val){
        this._name = val
    }
}

const newPrint = new newUser ("huzi","h@h.com")
console.log(newPrint.name);