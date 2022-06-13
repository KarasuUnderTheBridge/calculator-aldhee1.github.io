let prevNumber = '';
let CalculationOperator = '';
let currentNumber = '0';

const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

//Operator Keys
const operator = document.querySelectorAll(".operator");
const inputOperator = (operator) => {
    if(CalculationOperator === ''){
        prevNumber = currentNumber;
    }
    CalculationOperator = operator;
    currentNumber = '';
}

operator.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        // console.log();
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
        calculate();
        updateScreen(currentNumber);
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