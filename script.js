const display = document.getElementById("display");

const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operator");

const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const equalButton = document.querySelector(".equal");

let currentInput = "";
let previousInput = "";
let operator = "";

let justCalculated = false;

numberButtons.forEach(buttton => {
    buttton.addEventListener ("click", () => {
        const number = buttton.textContent;

        if (justCalculated) {
            currentInput = "";
            previousInput = "";
            operator = "";

            justCalculated = false;
        }

        currentInput += number;

        if (operator !== "") {

            display.value =
                previousInput + " " + operator + " " + currentInput;

        } else {

            display.value = currentInput;

        }
    })
})

operatorButtons.forEach(buttton => {
    buttton.addEventListener ("click", () => {
        if(currentInput === ""){
            return;
        }

        const selectedOperator = buttton.textContent

        previousInput = currentInput;
        operator = selectedOperator;
        currentInput = "";
        display.value = previousInput + " " + operator;
    })
})


equalButton.addEventListener ("click", () => {

    if(
        previousInput === "" ||
        currentInput === "" ||
        operator === ""
    ){
        return;
    }

    const number1 = parseFloat(previousInput);
    const number2 = parseFloat(currentInput);

    let result;

    if(operator === "+"){
        result = number1 + number2;
    }

    else if(operator === "-"){
        result = number1 - number2;
    }

    else if(operator === "*"){
        result = number1 * number2;
    }

    else if(operator === "/"){
        if(number2 === 0){
            display.value = "Error";
            return
        }
        result = number1 / number2;
    }

    display.value = result;

    currentInput = result.toString();
    previousInput = "";
    operator = "";
    
    justCalculated = true;
})

clearButton.addEventListener ("click", () => { 
    currentInput = "";
    previousInput = "";
    operator = "";

    display.value = ""; 
})

deleteButton.addEventListener ("click", () => { 

    currentInput = currentInput.slice(0, -1);

    display.value = currentInput; 
})
