function setUsername (username) {
    this.username = username
    console.log("CALLED");
}

function createUser (username,email,password){
    setUsername.call(this,username)
    this.email = email;
    this.password = password
}

const print = new createUser("huzair","huzair@gmail.com",1234)
console.log(print);