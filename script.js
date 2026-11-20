const display = document.querySelector(".display");
const digitsContainer = document.querySelector(".digits-container");
const operatorsContainer = document.querySelector(".operators-container");
const equalsButton = document.querySelector(".equals");

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

digitsContainer.addEventListener("click", (e) => {
    if (firstNum === null) {
        firstNum = Number(e.target.dataset.value);
        display.textContent = firstNum;
    } else {
        secondNum = Number(e.target.dataset.value);
        display.textContent += secondNum;
    }
});

operatorsContainer.addEventListener("click", (e) => {
    operator = e.target.dataset.value;
    display.textContent += e.target.textContent;
});

equalsButton.addEventListener("click", () => {
    firstNum = operate(firstNum, secondNum, operator);
    console.log(firstNum);
    display.textContent = firstNum;
})

