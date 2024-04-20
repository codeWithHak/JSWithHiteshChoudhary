let randomNumber = parseInt(Math.random() * 6 + 1);

let submit = document.querySelector("#subt");
let userInput = document.querySelector("#guessField");
let guessSlot = document.querySelector(".guesses");
let remaining = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let startOver = document.querySelector(".resultParas");

let p = document.createElement("p")

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener("click",function(e){
        e.preventDefault();
        let guess = parseInt(userInput.value);
        console.log(guess)
        validateGuess(guess)
        
    })
}

function validateGuess (guess) {
    
    if (isNaN(guess)) {
        alert("Please provide a valid number")
    }

    else if (guess > 6) {
        alert("Please provide a smaller number")
    }

    else if (guess < 1) {
        alert("Please provide a bigger number")
    }

    else{
        
        prevGuess.push(guess)
        if (numGuess > 3) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess (guess) {

    if (guess === randomNumber) {
        displayMessage("Congrats! You guessed it right.")
        endGame()
    }

    else if (guess > randomNumber) {
        displayMessage("Your guess is high")
    }

    else if (guess < randomNumber) {
        displayMessage("Your guess is low")
    }
    displayMessage(message)
}

function displayGuess (guess) {
    userInput.innerHTML = ""
    guessSlot.innerHTML += ` ${guess}, `
    numGuess++
    remaining.innerHTML = `${4 - numGuess}`

}

function displayMessage (message) {
    lowOrHi.innerHTML = `<h2> ${message} </h2>`
}

function endGame () {
    userInput.innerHTML = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = "<h2 id='newGame'>Try Again</h2>"
    startOver.appendChild(p)
    playGame = false
    newGame()


}

function newGame () {
   let newGameButton = document.querySelector("#newGame")
   newGameButton.addEventListener("click",(e)=>{
    randomNumber = parseInt(Math.random() * 6 + 1);
   guessSlot.innerHTML = ''
    userInput.removeAttribute('disabled','')
    startOver.removeChild(p)
    remaining.innerHTML = `${4 - numGuess}`
    playGame = true
   })

}