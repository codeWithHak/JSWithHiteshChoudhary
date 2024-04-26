function user (name,email,password) {
    this.name = name;
    this.email = email;
    this.password = password;

    this.greetings = function (){
        return this.name
    }
    return this
}
const userOne = new user("Huzair",'huzikhan@gmail.com',1234)
const userTwo = new user("Khizar",'itzkhizzee@gmail.com',6789)
console.log(userOne.constructor);
// console.log(userTwo.greetings());


