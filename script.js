let prevNumber = '';
let CalculationOperator = '';
let currentNumber = '0';

const calculatorScreen = document.querySelector(".calculator-screen");
const operatorScreen = document.querySelector(".operator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

//Operator Keys
const operator = document.querySelectorAll(".operator");
const inputOperator = (operator) => {
    if(CalculationOperator === ''){
        prevNumber = currentNumber;
    }else{
        console.log(operator);
        calculate(); 
        updateScreen(currentNumber);
    }
    CalculationOperator = operator;
    currentNumber = '';
}

operator.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        // console.log();
        operatorScreen.value = event.target.value;
        inputOperator(event.target.value);
    })
})

//Number Keys
const number = document.querySelectorAll(".number");

const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number;
    }else{
        currentNumber += number;
    }
    
}
number.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
})

//Equals Sign
const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener('click', () => {
    if(currentNumber === ""){
        currentNumber = prevNumber;
        operatorScreen.value = "";
        updateScreen(currentNumber);
    }else{
        operatorScreen.value = "";
        calculate();
        updateScreen(currentNumber);
    }
})

//calculate
const calculate = () => {
    let result = '';
    switch(CalculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        default:
            break;
    }

    currentNumber = result;
    prevNumber = result;
}

//Percentage
const percentage = document.querySelector(".percentage");
percentage.addEventListener('click', () => {
    getPercentage();
    updateScreen(currentNumber);
})

const getPercentage = () => {
    let result = '';
    result = currentNumber/100;
    currentNumber = result;
    CalculationOperator = '';
}


//Clear Button
const clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener('click', () => {
    clearAll();
})

const clearAll = () => {
    prevNumber = '';
    CalculationOperator = '';
    currentNumber = '0';
    updateScreen(currentNumber);
}

//Decimal
const decimal = document.querySelector(".decimal");
decimal.addEventListener('click', () => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return;
    }else{
        currentNumber += dot;
    }
    
}