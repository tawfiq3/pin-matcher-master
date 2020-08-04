
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


