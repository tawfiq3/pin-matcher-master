// Hiding Notification Part

document.getElementById("noMatch").style.display='none'
document.getElementById("match").style.display='none'

//Random Number Generating Function

function getRandomNumber(min,max){
    let step1 = max-min+1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

// Showing Generated Random Function On display

const gPin = document.getElementById("pin-button")
gPin.addEventListener("click",function(){  
    let randomNumber = getRandomNumber(1000,9999); 
    document.getElementById("pin-output").value = randomNumber
})

//Getting Number from number section to display

function getNumber(btnId){
    const btn = document.getElementById(btnId);
    const dPinNumber = parseInt(btn.innerText);

    const numShown = document.getElementById("dialedPin").value;
    document.getElementById("dialedPin").value = numShown + dPinNumber;    
}

//Backspace Function

function backSpace(){
    const display = document.getElementById("dialedPin")
    const lastDigit = display.value;
    display.value = lastDigit.substring(0,lastDigit.length - 1);   
}

//All clear Function

function allClear(){
    document.getElementById("dialedPin").value = ""
}

//Function For Submit Button

function submitBtn(){
    const randomNumber= document.getElementById("pin-output").value;
    const dialedPin = document.getElementById("dialedPin").value;

    if( randomNumber =='' || dialedPin == ''){
        alert('Your Input Field is empty')
    }
    else{
        if(randomNumber == dialedPin){
            document.getElementById("match").style.display = 'block'
            document.getElementById("pin-button").textContent = "Pin Matched" 
            document.getElementById("pin-output").value = ""
            document.getElementById("dialedPin").value = ""
        }
        else{
            document.getElementById("noMatch").style.display = 'block'
            document.getElementById("pin-output").style.display = "Incorrect Pin"
            document.getElementById("pin-output").value = ""
            document.getElementById("dialedPin").value = ""
            trialleft()
        }
     }
}

//Function for trial left

let btnPressed = 0;
function trialleft(){
    const tryLeft = document.getElementById("tryLeft")
    btnPressed++
    if(btnPressed == 1){
        tryLeft.innerText = "2 more try left"
    }
    if(btnPressed == 2){
        tryLeft.innerText = "1 try left"
    }
    if(btnPressed == 3){
        tryLeft.innerText = "Sorry! You can't try anymore"
    }

}



