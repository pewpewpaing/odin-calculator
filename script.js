const display = document.querySelector(".display");
const digitsContainer = document.querySelector(".digits-container");

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

let firstNum;
let secondNum;
let operator;

function operate(operator, firstNum, secondNum) {
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

digitsContainer.addEventListener("click", (e) => {
    firstNum = Number(e.target.dataset.value);
    display.textContent = firstNum;
});