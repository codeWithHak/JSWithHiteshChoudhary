 function multiplyByFive (num){
    if (num === undefined){
        return 'Print a number'
    }
    else{
        return num * 5
}}

multiplyByFive.a = 2
// console.log(multiplyByFive.a);
// console.log(multiplyByFive(6));

function bat (weight, price){
this.weight = weight;
this.price = price;
}


bat.prototype.tellPrice = function (){
    console.log(`Price is ${this.price}`);
}


bat.prototype.increaseWeight = function(currentWeight){
    let prevWeight = this.weight;
    let newWeight = this.weight+currentWeight
    console.log(`Prevous weight was ${prevWeight} and now weight is ${newWeight}`);
}

bat.prototype.setPrice = function (operation,amount){
    if (operation === "-"){
        console.log(`Price deducted now price is ${this.price - amount}`);
    }
    else if (operation === '+'){
        console.log(`Price is increased now price is ${this.price + amount}`);
    }
}

const buyerPoor = new bat(2.1,2200);

// buyerPoor.incresePrice(22)
// buyerPoor.tellPrice()
// buyerPoor.increaseWeight(1)
buyerPoor.setPrice("-",100)
