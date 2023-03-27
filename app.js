// Plan // 

// 1. Create functions for basic operators 
    // add
    // subtract
    // multiply
    // divide
// 1.1 test in browser console
//
// 2. Create variables for 3 sections of an operation
//      variable a - first number
//      variable b - operator
//      variable c - second number
//
// 3. Create a new function operate that takes an operator and 2 numbers 
//      and then calls one of the above functions on the numbers.
// 
// 4. Create calculator GUI in HTML
//      4.1 Don't worry about it looking good
//      4.2 Just make sure it works and can be customized later
//      4.3 Make sure current operation is displayed correctly
//      4.4 Add clear button
// 5. Make the calculator work! 
//      5.1 You’ll need to store the first number that is input into the calculator when a user 
//          presses an operator, and also save which operation has been chosen and then operate() 
//          on them when the user presses the “=” key.
//      5.2 You should already have the code that can populate the display, so once operate() has been called, 
//          update the display with the ‘solution’ to the operation.
//      5.3 This part is hard
// 6. Your calculator should not evaluate more than a single pair of numbers at a time.


// how to take variables as inputs

// take in numbers as a string so each character is added one by one
// once operator is pressed:
//      Convert number string to integer
//      store operator
//      display both in current operation
// take num2 same way
// once = is pressed
//      convert num2 into int
//      solve using operate()
//      display answer in answer box


// variables to be used
let num1String = "";
let num2String = "";
let displayString = "";

let operator = "";

let num1Int = 0;
let num2Int = 0;


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
const btnDivide = document.getElementById('btn-÷');
const btnSubtract = document.getElementById('btn--');
const btnModulo = document.getElementById('btn-%');

const operatorButtons = [btnAdd, btnMultiply, btnDivide, btnSubtract, btnModulo];

const btnClear = document.getElementById('btn-C');
const btnAC = document.getElementById('btn-AC');
const btnSolve = document.getElementById('btn-=');

const actionButtons = [btnClear, btnAC, btnSolve];


currentOpDisplay.textContent = num1String;

// Event listeners
//
//  Add nums with for loop
numberButtons.forEach((button) => {
    button.addEventListener('click', event => {
        if (operator.length >= 1) {
            num2String += button.innerText;
            displayString += button.innerText;
            updateCurrentOpDisplay();
            console.log(displayString);
        } else {
            num1String += button.innerText;
            displayString += button.innerText;
            updateCurrentOpDisplay();
            console.log(displayString);
        }
    })
})

// add operator event listeners

console.log(operatorButtons);
operatorButtons.forEach((button) => {
    button.addEventListener('click', event => {
        operator = button.innerText;
        console.log(`Operator is *${operator}*`);
        displayString += ` ${operator} `;
        updateCurrentOpDisplay();
    })
})


// = button event listener
btnSolve.onclick = () => {
    num1Int = parseInt(num1String);
    num2Int = parseInt(num2String);
    console.log(operate(operator, num1Int, num2Int));
    answerDisplay.innerText = operate(operator, num1Int, num2Int);
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
        case '÷':
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




