const display = document.querySelector(".display");
const digitsContainer = document.querySelector(".digits-container");
const operatorsContainer = document.querySelector(".operators-container");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");

function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}

let firstNum = null;
let secondNum = null;
let operator = null;
let firstTime = true;

// firstNum (shows first)
// operator (shows first)
// secondNum (shows second)
// operator (calculate and shows first) // second = null (because it expects seond operator to compute)
// equals (calculate and shows first) // operator = null (because it expects firstNum or operator again) // need to fix this


function operate(firstNum, secondNum, operator) {
    switch (operator) {
        case "+":
            return add(firstNum, secondNum);
        case "-":
            return subtract(firstNum, secondNum);
        case "*":
            return multiply(firstNum, secondNum);
        case "/":
            return divide(firstNum, secondNum);
    }
}

function calculate() {
    firstNum = operate(firstNum, secondNum, operator);
    firstNum = +firstNum.toFixed(10);
    display.textContent = firstNum;
}

digitsContainer.addEventListener("click", (e) => {
    if (operator === null) {
        if (firstTime) {
            firstNum = Number(e.target.dataset.value);
            firstTime = false;
        } else {
            firstNum = Number(firstNum) * 10 + Number(e.target.dataset.value);
        }
        display.textContent = firstNum;
    } else {
        secondNum = Number(secondNum) * 10 + Number(e.target.dataset.value);
        display.textContent = secondNum;
    }
});

operatorsContainer.addEventListener("click", (e) => {
    if (firstNum !== null && secondNum !== null) {
        calculate();
        secondNum = null;
    }

    operator = e.target.dataset.value;
});

equalsButton.addEventListener("click", () => {
    if (firstNum === null && secondNum === null) return;

    if (secondNum == null) secondNum = firstNum;

    calculate();
    secondNum = null;
    operator = null;
    firstTime = true;
});

clearButton.addEventListener("click", () => {
    firstNum = null;
    secondNum = null;
    operator = null;
    display.textContent = "";
});

