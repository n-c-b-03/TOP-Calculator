const display = document.querySelector(".display");

let num1;
let num2;
let operator;

function add (num1, num2) {
    console.log(num1 + num2);
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

function operate (num1, num2, operator) {
    switch (operator) {
        case "+" :
            add (num1, num2);
            break;
        case "-" :
            subtract (num1, num2);
            break;
        case "*" :
            multiply (num1, num2);
            break;
        case "/" :
            divide (num1, num2);
            break;
        default:
            console.log(`Operate-switch-statement did'nt work. Operator is ${operator}.`);
            
    }
}
//test of operate-function(works): operate (2, 3, "+");


let displayContent;

function fillDisplay (displayContent) {
    display.textContent = displayContent;
}
//test function fillDisplay(works): fillDisplay(displayContent);
