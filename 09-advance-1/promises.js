// const promiseOne = new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({name:"Huzair",age:20,email:"huzikhan@gmail.com"})
//     },2000)
// }) 

// promiseOne.then((arg)=>{
//     console.log(arg);
// })

// const promiseTwo = new Promise ((resolve,reject)=>{
//     const error = false;
//     if (!error){
//         resolve({name:"Huzair",age:18})
//     }
//     else{
//         reject("Error caught")
//     }
// })

// promiseTwo.then((user)=>{
//     console.log(user);
//     return user.name
// }).then((name)=>{
//     console.log(name);
// }).catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     console.log("Error is reolved or rejected");
// })

// const promiseThree = new Promise ((resolve,reject)=>{
//     const error = true;
//     if (!error) {
//         resolve({username:"Huzair",password:"123"})
//     }
//     else{
//         reject("Error Caught")
//     }
// })

// async function consumePromiseThree() {
//   try {
//     const response = await promiseThree;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

//consumePromiseThree()
// async function getUser () {
//    try{
//     let response = await fetch ("https://api.github.com/users/codeWithHak")

//     const data = await response.json()
//     console.log(data);
//    }
//    catch (error){
//     console.log('E: ' ,error);
//    }
// }

// getUser()

// let fetching = ()=>{
//   let error = "Not found"
// fetch('')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch(()=> console.log("error"))
// }

// fetching()

