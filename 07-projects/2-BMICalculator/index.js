const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `Height: ${height} is not valid `
    }
    else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Weigh: ${weight} is not valid `
    }
    else{
     
     const bmi = (weight/ ((height*height)/10000)).toFixed(2);
        if (bmi < 18.6) {
           results.innerHTML = `You are under weight`
        }
       else if (bmi > 18.6 && bmi < 24.9) {
        results.innerHTML = `You are fit`
        }
        else if (bmi > 24.9){
            results.innerHTML = "You are over weight"
        }
    
    }
})