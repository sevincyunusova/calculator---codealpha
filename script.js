const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");

let firstNumber = "";
let operator = "";
let secondNumber = "";
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const number = button.dataset.number;

        if (operator === "") {
            firstNumber += number;
            display.value = firstNumber;
        } else {
            secondNumber += number;
            display.value = secondNumber;
        }
    });
});
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (firstNumber === "") {
            return;
        }

        operator = button.dataset.operator;
    });
});