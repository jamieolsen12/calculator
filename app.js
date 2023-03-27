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

function operate(operator, num1, num2) {
    let result;

    switch(operator){
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            console.log("Invalid Operator.");
    }
    return result;
}


