// const user = {
//     username:"Huzair",
//     email:"Khaansaab@gmail.com",

//     welcomeMessage: function () {
//         console.log(`${this.username}, wecome meri jaan jeoo`)
//         console.log(this);
    
//     }
    
// }
// user.welcomeMessage()

// user.username = "Abdullah"

// user.welcomeMessage()

// const userInfo = {
//     username:"Huzair",
//     id:"myUniqueId",
//     email:"huzaijaf@gmail.com",
//     welcomeMessage: function () {
//         console.log(`${this.username} just logged in`);
//     }

// }


// let username = "Huzair";
// let email = "huzair232@gmail.com";
// let id = "muYniqu32";

// const userInfo = {
//     username: "huzaair",
//     email:"huhfuaf@gamf.com",
//     id:'15ja,5',
//     print: function () {
//         console.log(`${this.username} just logged in his id is ${this.id} for more details contact him on ${this.email} `);
//     }
// }

// userInfo.print()

// const chai = () => {
//     let username="huzair"
//     console.log(this);
// }

// chai()

// const addTwo = (number1,number2) => number1 + number2
// const addTwo = (number1,number2) => (number1 + number2)
// const addTwo = (number1,number2) => ( {name:"HAK"})
//     console.log(addTwo(1,2).name);


let userInfo = {
    username:"huzair",
    age:18,
    getName:function() {
        console.log(`Username is: ${this.username}`)
    }
}

// userInfo.getName()
// userInfo.username = "hitesh"
// userInfo.getName()

// function myName (){
//     // setMyName = "Huzair"
//     // console.log(this);
// }

// myName()

// let myFunc = ()=>{
// //  setMyName = "hitesh"
//  console.log(this);
// }

// myFunc()

let myFunc = (name)=>({name:name})

console.log(myFunc("huzair"));