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

const buttonBack = document.querySelector("#buttonBack");
const buttonC = document.querySelector("#buttonC");


let num1 = 0;
let num2 = null;
let operator = null;
let displayContent;
let result = null;


function fillDisplay (displayContent) {
    display.textContent = displayContent;
}

function digitListener (digit) {
    if (result != null && operator === null) {
        result = null;
        num1 = null;
    }

    if ((num1 === 0 || num1 === null) && operator === null) {
        num1 = digit;
        displayContent = num1;
    } else if (num1 != null && operator === null) {
        num1 += digit;
        displayContent = num1;
    } else if (num2 === null && operator != null) {
        num2 = digit;
        displayContent = num2;
    } else if (num2 != null && operator != null) {
        num2 += digit;
        displayContent = num2;
    }

    fillDisplay (displayContent);

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


function operatorListener (op) {
    if (operator === null) {
        displayContent = op;
        fillDisplay (displayContent);
    
        operator = op;   
    } else if (operator != null && num2 != null) {
        operate (+num1, +num2, operator);
        let result = displayContent;
        displayContent += ` ${op}`;
        fillDisplay(displayContent);

        num1 = result;
        operator = op;
        num2 = null;
    }
};
buttonAdd.addEventListener("click", () => {    
    operatorListener ("+");
});
buttonSub.addEventListener("click", () => {    
    operatorListener ("-");
});
buttonMult.addEventListener("click", () => {    
    operatorListener ("*");
});
buttonDiv.addEventListener("click", () => {    
    operatorListener ("/");
});

buttonCalc.addEventListener("click", () => {
    if (num1 === null) {
        displayContent = "No first number recognized.";
        fillDisplay (displayContent);
        return;
    } else if (num2 === null) {
        displayContent = "No second number recognized.";
        fillDisplay (displayContent);
        return;
    }
    operate (+num1, +num2, operator);

    num1 = result;
    num2 = null;
    operator = null;
});

buttonBack.addEventListener("click", () => {
    if (num1 != null && displayContent === num1) {  
        num1 = num1.toString();
        num1 = num1.slice(0, -1);
        displayContent = num1;
    } else if (num2 != null && displayContent === num2) {        
        num2 = num2.slice(0, -1);
        displayContent = num2;
     } 
    fillDisplay (displayContent);
})

buttonC.addEventListener("click", () => {
    num1 = 0;
    num2 = null; 
    operator = null;
    result = null;
    displayContent = "0";
    fillDisplay(displayContent);
})

window.addEventListener ("keydown", e => {
    //test of EventListener (works): console.log(e.key);
})

function add (num1, num2) {
    result = Math.round((+num1 + +num2) * 100) / 100;
    return displayContent = result;
}

function subtract (num1, num2) {
    result = Math.round((+num1 - +num2) * 100) / 100;
    return displayContent = result;
}

function multiply (num1, num2) {
    result = Math.round(+num1 * +num2 * 100) / 100;
    return displayContent = result;
}

function divide (num1, num2) {
    if (num2 === 0) {
        displayContent = "Please do not try to divide by 0.";
        fillDisplay(displayContent);
        return;
    }
    result = Math.round(+num1 / +num2 * 100) / 100;
    return displayContent = result;
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


