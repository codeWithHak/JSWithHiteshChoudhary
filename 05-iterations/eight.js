let myNums = [1,2,3,4];
let newNums = myNums.reduce((acc,currval)=>{
    return acc + currval

},20) 
// console.log(newNums);

let kit = [
    {
        name:"bat",
        price:6000
    },
    {
        name:"pads",
        price:4000
    },
    {
        name:"gloves",
        price:3200
    }
]

let totalPrice = kit.reduce((acc,val) =>acc + val.price,0)
console.log(totalPrice);