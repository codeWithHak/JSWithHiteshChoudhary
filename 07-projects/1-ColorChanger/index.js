let buttons =document.querySelectorAll(".button");
let body = document.querySelector("body");

let textButton =  document.querySelectorAll(".text-button")
let text = document.querySelectorAll(".text")



textButton.forEach((textBtn)=>{
    textBtn.addEventListener("click",(e)=>{

        let color;
        switch (e.target.id) {
            case "grey":
                body.style.color = e.target.id
                break;

                case "white":
                body.style.color = e.target.id
                break;

                case "blue":
                body.style.color = e.target.id
                break;

                case "yellow":
                body.style.color = e.target.id
                break;
        
            default:
                break;
        }

    })
})



buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener("click",(e)=>{
        console.log(e);
        console.log(e.target);
       
        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor = e.target.id
                break;

                case "white":
                body.style.backgroundColor = e.target.id
                break;

                case "blue":
                body.style.backgroundColor = e.target.id
                break;

                case "yellow":
                body.style.backgroundColor = e.target.id
                break;

            default:
                break;
        }

    })

})

if (e.target.id === "grey") {
    body.style.backgroundColor = e.target.id
}