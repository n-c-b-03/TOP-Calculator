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

    if (num1 === undefined) {
        num1 = "0";
    } else if (num2 === undefined) {
        num2 = "0";
    } 
});

button1.addEventListener("click", () => {
    displayContent = "1";
    fillDisplay (displayContent);

    if (num1 === undefined) {
        num1 = "1";
    } else if (num2 === undefined) {
        num2 = "1";
    } 
});

button2.addEventListener("click", () => {
    displayContent = "2";
    fillDisplay (displayContent);

    if (num1 === undefined) {
        num1 = "2";
    } else if (num2 === undefined) {
        num2 = "2";
    } 
});

button3.addEventListener("click", () => {
    displayContent = "3";
    fillDisplay (displayContent);

    if (num1 === undefined) {
        num1 = "3";
    } else if (num2 === undefined) {
        num2 = "3";
    } 
});
button4.addEventListener("click", () => {
    displayContent = "4";
    fillDisplay (displayContent);

    if (num1 === undefined) {
        num1 = "4";
    } else if (num2 === undefined) {
        num2 = "4";
    } 
});
button5.addEventListener("click", () => {
    displayContent = "5";
    fillDisplay (displayContent);

    if (num1 === undefined) {
        num1 = "5";
    } else if (num2 === undefined) {
        num2 = "5";
    } 
});
button6.addEventListener("click", () => {
    displayContent = "6";
    fillDisplay (displayContent);

    if (num1 === undefined) {
        num1 = "6";
    } else if (num2 === undefined) {
        num2 = "6";
    } 
});
button7.addEventListener("click", () => {
    displayContent = "7";
    fillDisplay (displayContent);

    if (num1 === undefined) {
        num1 = "7";
    } else if (num2 === undefined) {
        num2 = "7";
    } 
});
button8.addEventListener("click", () => {
    displayContent = "8";
    fillDisplay (displayContent);

    if (num1 === undefined) {
        num1 = "8";
    } else if (num2 === undefined) {
        num2 = "8";
    } 
});
button9.addEventListener("click", () => {
    displayContent = "9";
    fillDisplay (displayContent);

    if (num1 === undefined) {
        num1 = "9";
    } else if (num2 === undefined) {
        num2 = "9";
    } 
});


