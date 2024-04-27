let superheros = ["Thor","Spiderman","Captain America","Iron Man"];

const superPowers = {
    thor:"hammer",
    spiderman:"slingy",
    ironman:"suit",
    captainAmerica:"shield",
    getSpidermanPower: function (){
        console.log(`Spiderman's power is ${this.spiderman}`);
    }
}

Object.prototype.huzair = function (){
    return "Cheetah developer he"
}
// // superPowers.huzair()
// superheros.push(huzair())
// console.log(superheros[4])
// console.log(superheros);


// Object.prototype.whoIsBabar = function (){
//     return `Babar is the greatest player i have ever witnessed and a humble G`
// }

// let str = "Ladies and gents " + whoIsBabar()

// console.log(str);

// Object.prototype.sherSunao = function () {
//     return `unko dekhe se jo chehre pe ajati he ronak wo samjhte hen ke beemar ka haal acha he`
// }
const battingCoach ={
    Myusuf:true
}

const fieldingCoach = {
    gora:true
}

const bowlingCoach = {
    Azhar:true
}

const coaches = {
    allCoaches:"There are all coaches",
    isGood: true,
    __proto__: battingCoach
}

battingCoach.__proto__ = fieldingCoach;

Object.setPrototypeOf(battingCoach,fieldingCoach);


let username = "Huziar";

String.prototype.trueLength = function (){
    console.log(`The length of ${this} before trim is ${this.length} but the True length of ${this.trim()} is ${this.trim().length}`)
}

console.log(username.trueLength());

"  heeellllo   ".trueLength()