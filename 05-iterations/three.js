// for of


let arr = [1,2,3,4,5,"hitesh",6]
for (const iterator of arr) {
    //console.log(iterator);
}

const greetings = "Hemlo dear";
for (const greet of greetings) {
    if(greet == " "){
        continue
    }
    //console.log(`Each word is ${greet}`);
}

const map = new Map()
map.set("Huzair" , 1);
map.set("Huzaifa" , 1);
map.set("Khizar Bhai" , 1);
//console.log(map);
for (const [key,value] of map) {
    //console.log(key,value,"Shishtam");
}

const myObj = {Name:"Huzair",age:22,email:"125@ggg.com"}
console.log(myObj.age);