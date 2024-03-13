let myNums = [1,2,3,4,5,6,7,8,9,10];
let newNums = myNums.map((num)=>{return num+10})
console.log(newNums);

let otherNums = [];
myNums.forEach((num)=>{
    otherNums.push(num + 10)
    
})

console.log(otherNums);