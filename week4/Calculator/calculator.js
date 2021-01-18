var readlineSync = require('readline-sync');

//number selection from user
var firstNum = readlineSync.questionInt("Please enter the first number: ");
var secondNum = readlineSync.questionInt("Please enter the second number: ");
var enteredOperator = readlineSync.question("What operation would you like to perform? add/sub/mul/div/quit: ");

//Addition
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

//Subraction
function subtractTwoNumbers(num1, num2) {
    return num1 - num2;
}

//Multiplaction
function multiplyTwoNumbers(num1, num2) {
    return num1 * num2;
}

//Division
function divideTwoNumbers(num1, num2) {
    return num1 / num2;
}

//Function operators
if (enteredOperator == "add"){
    console.log("The result is: ");
    console.log(addTwoNumbers(firstNum, secondNum));
} else if (enteredOperator == "sub"){
    console.log("The result is: ");
    console.log(subtractTwoNumbers(firstNum, secondNum));
} else if (enteredOperator == "mul"){
    console.log("The result is: ");
    console.log(multiplyTwoNumbers(firstNum, secondNum));
} else if (enteredOperator == "div"){
    console.log("The result is: ");
    console.log(divideTwoNumbers(firstNum, secondNum));
} else {
    console.log("The result is: ");
    console.log("ERROR, re-try input");
    
}