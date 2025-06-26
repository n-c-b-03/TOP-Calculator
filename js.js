const display = document.querySelector(".display");

const button0 = document.querySelector("#button0");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const button7 = document.querySelector("#button7");
const button8 = document.querySelector("#button8");
const button9 = document.querySelector("#button9");

const buttonAdd = document.querySelector("#buttonAdd");
const buttonSub = document.querySelector("#buttonSub");
const buttonMult = document.querySelector("#buttonMult");
const buttonDiv = document.querySelector("#buttonDiv");
const buttonCalc = document.querySelector("#buttonCalc");

const buttonC = document.querySelector("#buttonC");


let num1;
let num2;
let operator;
let displayContent;


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


function fillDisplay (displayContent) {
    display.textContent = displayContent;
}
//test function fillDisplay(works): fillDisplay(displayContent);

button0.addEventListener("click", () => {
    displayContent = "0";
    fillDisplay (displayContent);
});
button1.addEventListener("click", () => {
    displayContent = "1";
    fillDisplay (displayContent);
});
button2.addEventListener("click", () => {
    displayContent = "2";
    fillDisplay (displayContent);
});
button3.addEventListener("click", () => {
    displayContent = "3";
    fillDisplay (displayContent);
});
button4.addEventListener("click", () => {
    displayContent = "4";
    fillDisplay (displayContent);
});
button5.addEventListener("click", () => {
    displayContent = "5";
    fillDisplay (displayContent);
});
button6.addEventListener("click", () => {
    displayContent = "6";
    fillDisplay (displayContent);
});
button7.addEventListener("click", () => {
    displayContent = "7";
    fillDisplay (displayContent);
});
button8.addEventListener("click", () => {
    displayContent = "8";
    fillDisplay (displayContent);
});
button9.addEventListener("click", () => {
    displayContent = "9";
    fillDisplay (displayContent);
});


