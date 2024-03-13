const mySym = Symbol("key1")
const myObj = {
    name:"Huzair",
    age:18,
    [mySym]:"key123",
    gender:"Male"
}

console.log(typeof myObj[mySym]);