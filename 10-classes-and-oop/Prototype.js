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

const Batsman = function (){
    babar:true
}

const fielder = function(){
    azamKhan: false
}

const coach = function (){
    battingCoach:"M.Yusuf"
}
