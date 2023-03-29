// Plan // 




// how to solve multiple operations at a time?

// create array by seperating an entire operation string by " ". 
// This creates an array like [1, 'x', 5, '+', 2, '-', 3]
// getting operator indices
// loop through array, calling operate() using each operator index, plus the index -1 for num1 and index +1 for num2
// after solving, add result to result variable, splice the three indices from array
// repeat until solved


// 1. on Solve, displaystring into operationArray based on spaces
// 2. Get operation indices within operationArray
// 4. Create array with BODMAS to add order of operation
// 5. Loop through this array to check if operation array includes the operator
// 6. Solve using these operators first
// 7. Call Operate() using indices and -+ 1
// 8. Remove them from array
// 9. Repeat until array empty
// 10. Display result



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

        // if (operator.length >= 1) {
        //     num2String += button.innerText;
        //     displayString += button.innerText;
        //     updateCurrentOpDisplay();
        //     console.log(displayString);
        // } else {
        //     num1String += button.innerText;
        //     displayString += button.innerText;
        //     updateCurrentOpDisplay();
        //     console.log(displayString);
        // }
    })
})

// add operator event listeners
console.log(operatorButtons);
operatorButtons.forEach((button) => {
    button.addEventListener('click', event => {
        
        displayString += ` ${button.innerText} `;
        updateCurrentOpDisplay();
        
        // // check if operator is empty
        // if (operator === "") {    
        //     operator = button.innerText;
        //     console.log(`Operator is *${operator}*`);
        //     displayString += ` ${operator} `;
        //     updateCurrentOpDisplay();
        // // if operator is already full, and there are num1 and num2, solve before adding another operator
        // } else if (operator.length > 0) {

        // }
    })
})


// =/solve button event listener
btnSolve.onclick = () => {
    // num1Int = parseFloat(num1String);
    // num2Int = parseFloat(num2String);
    // console.log(operate(operator, num1Int, num2Int));
    
    // // solve, only showing 2 decimal places if there is a decimal, otherwise use int
    // const result = operate(operator, num1Int, num2Int);
    // const formattedResult = result % 1 !== 0 ? result.toFixed(2) : result;
    // answerDisplay.innerText = formattedResult;
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
    // num1String = "";
    // num2String = "";
    // operator = "";
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


    

   
    // if (num2String.length >= 1) {
    //     num2String = num2String.slice(0, -1);
    //     displayString = displayString.slice(0, -1);
    //     updateCurrentOpDisplay();
    // } else if (operator.length >= 1) {
    //     operator = ""
    //     console.log(`Change display string ${displayString} to`)
    //     displayString = displayString.slice(0, -3);
    //     console.log(`${displayString}`)
    //     updateCurrentOpDisplay();
    // } else if (num1String.length >= 1) {
    //     num1String = num1String.slice(0, -1);
    //     displayString = displayString.slice(0, -1);
    //     updateCurrentOpDisplay();
    // }
    // console.log(`num1 string is ${num1String}`);
    // console.log(`num2 string is ${num2String}`);
    // console.log(`operator is ${operator}`);
    
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




