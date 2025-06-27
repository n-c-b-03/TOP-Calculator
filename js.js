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


let num1 = null;
let num2 = null;
let operator = null;
let displayContent;


function fillDisplay (displayContent) {
    display.textContent = displayContent;
}
//test function fillDisplay(works): fillDisplay(displayContent);


function digitListener (digit) {
    displayContent = digit;
    fillDisplay (displayContent);

    if (num1 === null) {
        num1 = digit;
    } else if (num2 === null) {
        num2 = digit;
    } 
};
button0.addEventListener("click", () => {
    digitListener ("0");
});
button1.addEventListener("click", () => {
    digitListener ("1");
});
button2.addEventListener("click", () => {
    digitListener ("2");
});
button3.addEventListener("click", () => {
    digitListener ("3");
});
button4.addEventListener("click", () => {
    digitListener ("4");
});
button5.addEventListener("click", () => {
    digitListener ("5");
});
button6.addEventListener("click", () => {
    digitListener ("6");
});
button7.addEventListener("click", () => {
    digitListener ("7");
});
button8.addEventListener("click", () => {
    digitListener ("8");
});
button9.addEventListener("click", () => {
    digitListener ("9");
});

buttonAdd.addEventListener("click", () => {    
    displayContent = "+";
    fillDisplay (displayContent);

    operator = "+";
});
buttonSub.addEventListener("click", () => {    
    displayContent = "-";
    fillDisplay (displayContent);

    operator = "-";
});
buttonMult.addEventListener("click", () => {    
    displayContent = "*";
    fillDisplay (displayContent);

    operator = "*";
});
buttonDiv.addEventListener("click", () => {    
    displayContent = "/";
    fillDisplay (displayContent);

    operator = "/";
});

buttonCalc.addEventListener("click", () => {
    operate (+num1, +num2, operator);
    num1 = null;
    num2 = null;
    operator = null;
});

function add (num1, num2) {
    return displayContent = num1 + num2;
}

function subtract (num1, num2) {
    return displayContent = num1 - num2;
}

function multiply (num1, num2) {
    return displayContent = num1 * num2;
}

function divide (num1, num2) {
    return displayContent = num1 / num2;
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
            console.log("Operate-switch-statement did'nt work. No operator recognized.");     
    };
    fillDisplay(displayContent);
}
//test of operate-function(works): operate (2, 9, "+");