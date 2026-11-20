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

// firstNum == null && secondNum == null && operator == null -> firstNum = num
// firstNum == null && 

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
    if (operator === null) {
        firstNum = Number(firstNum) * 10 + Number(e.target.dataset.value);
        display.textContent = firstNum;
    } else {
        secondNum = Number(secondNum) * 10 + Number(e.target.dataset.value);
        display.textContent += e.target.dataset.value;
    }
});

operatorsContainer.addEventListener("click", (e) => {
    operator = e.target.dataset.value;
    display.textContent += e.target.textContent;
});

equalsButton.addEventListener("click", () => {
    console.log(firstNum, secondNum, operator);
    firstNum = operate(firstNum, secondNum, operator);
    display.textContent = firstNum;
})

