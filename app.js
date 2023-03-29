// Plan // 



// variables to be used

let displayString = "";
const orderOfOperations = ['/', 'x', '%', '+', '-'];


// Dom Elements
const currentOpDisplay = document.getElementById('current-operation');
const answerDisplay = document.getElementById('answer');

const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');
const btn6 = document.getElementById('btn-6');
const btn7 = document.getElementById('btn-7');
const btn8 = document.getElementById('btn-8');
const btn9 = document.getElementById('btn-9');
const btn0 = document.getElementById('btn-0');
const btnDecimal = document.getElementById('btn-.');

const numberButtons = [btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btnDecimal];

const btnAdd = document.getElementById('btn-+');
const btnMultiply = document.getElementById('btn-x');
const btnDivide = document.getElementById('btn-/');
const btnSubtract = document.getElementById('btn--');
const btnModulo = document.getElementById('btn-%');

const operatorButtons = [btnAdd, btnMultiply, btnDivide, btnSubtract, btnModulo];

const btnClear = document.getElementById('btn-C');
const btnAC = document.getElementById('btn-AC');
const btnSolve = document.getElementById('btn-=');

const actionButtons = [btnClear, btnAC, btnSolve];



// Event listeners
//
//  Add nums with for loop
numberButtons.forEach((button) => {
    button.addEventListener('click', event => {

        displayString += button.innerText;
        updateCurrentOpDisplay();

    
    })
})

// add operator event listeners
console.log(operatorButtons);
operatorButtons.forEach((button) => {
    button.addEventListener('click', event => {
        
        displayString += ` ${button.innerText} `;
        updateCurrentOpDisplay();
    
    })
})


// =/solve button event listener
btnSolve.onclick = () => {
    console.log(displayString);
    equationArray = displayString.split(" ");
    console.log(equationArray);
    let result;
    for (var i = 0; i < orderOfOperations.length; i++) {
        while (equationArray.includes(orderOfOperations[i])) {
            let operatorIndex = equationArray.findIndex(item => item === orderOfOperations[i]);
            let currentOp = equationArray[operatorIndex]
            let num1 = equationArray[operatorIndex - 1];
            let num2 = equationArray[operatorIndex + 1]
            result = operate(currentOp, num1, num2);
            equationArray.splice((operatorIndex - 1), 3, result);
            console.log(result);
            console.log(`remaining equation array is ${equationArray}`)
        }
    }
    answerDisplay.innerText = result;

}

// clear whole operation
btnAC.onclick = () => {
    displayString = "";
    updateCurrentOpDisplay();
    answerDisplay.innerText = "";
}

// remove the last character from num1, num2, or operator, in which case remove operator and spaces
btnClear.onclick = () => {
   console.log(displayString);
    if (displayString.charAt(displayString.length - 1) === " ") {
        displayString = displayString.slice(0, -1);
    }
    console.log(displayString);
    displayString = displayString.slice(0, -1);
    if (displayString.charAt(displayString.length - 1) === " ") {
        displayString = displayString.slice(0, -1);
    }
    console.log(displayString);
    updateCurrentOpDisplay();
    
}



// Operator Functions
function add(a, b) {
    return (a + b)
}

function subtract(a, b) {
    return (a - b)
}

function multiply(a, b) {
    return (a * b)
}

function divide(a, b) {
    return (a / b)
}

function remainder(a, b) {
    return (a % b)
}

function operate(operator, num1, num2) {
    let result;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    console.log(`attempting to solve ${num1} ${operator} ${num2}`)
    switch(operator){
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case 'x':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        case '%':
            result = remainder(num1, num2);
        default:
            console.log("Invalid Operator.");
    }
    return result;
}

// function to convert num1String into num1Int, called when operator is pressed
function num1ToInt(num1) {
    num1Int = parseInt(num1String);
}


function updateCurrentOpDisplay() {
    currentOpDisplay.innerText = displayString;
}

function addOperatorToDisplay(operator) {
    currentOpDisplay.innerText += ` ${operator} `;
}




