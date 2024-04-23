/*
let randomColor = ()=>{
let hex = "0123456789ABCDEF";
let color = '#';
for (let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16 )]
}
return color
}

let intervalId;
let startChangingColor = function (){

   function changeBg (){ document.body.style.backgroundColor = randomColor()}

    if (!intervalId) {
    intervalId = setInterval(changeBg,1000)
    }    

}

let stopChangingColor = function (){

    clearInterval(intervalId)

    intervalId = null;
}
  
document.getElementById("start").addEventListener('click',startChangingColor)
document.getElementById("stop").addEventListener('click',stopChangingColor)

console.log(randomColor())
*/


// generate a random color in a function
// get click events on start and stop
// set change bg color to start
// and stop changing bg color to stop
// made your code cleaner by flushing interval id
// check if interval id is null


let randomColor = () => {
let hex = "0123456789ABCDEF";
let color = '#';
for (let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random()*16)]
}
return color;

}
let intervalId
let startChangingBg = function (){
   let changeBg  = ()=>{ document.body.style.backgroundColor = randomColor()
   }
   if (!intervalId){
  intervalId =  setInterval(changeBg,1000)
}}

let stopChangingBg = function () {
    clearInterval(intervalId)
    intervalId = null
}

document.getElementById('start').addEventListener('click',startChangingBg);
document.getElementById('stop').addEventListener('click',stopChangingBg);