function getRandomNumber(min,max){
    let step1 = max-min+1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

const gPin = document.getElementById("pin-button")
gPin.addEventListener("click",function(){  
    let randomNumber = getRandomNumber(1000,9999); 
    document.getElementById("pin-output").value = randomNumber
    console.log("pin-output");
})

function getNumber(btnId){
    const btn = document.getElementById(btnId);
    const dPinNumber = parseInt(btn.innerText);
    console.log(dPinNumber)

    const numShown = document.getElementById("dialedPin").value;
    console.log(numShown)
    document.getElementById("dialedPin").value = numShown + dPinNumber;
    
}

// //** Number Handler */
// function numberClickHandler(Btn) {
//     const btn = document.getElementById(Btn)
//     const btnNumber = parseInt(btn.innerText)

//     const inputBox = document.getElementById("inputBox").value
//     document.getElementById("inputBox").value = inputBox + btnNumber;




