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

        if (number === ".") {
            if (operator === "") {
                if (firstNumber.includes(".")) {
                    return;
                }

                firstNumber = firstNumber === "" ? "0." : firstNumber + ".";
                display.value = firstNumber;
            } else {
                if (secondNumber.includes(".")) {
                    return;
                }

                secondNumber = secondNumber === "" ? "0." : secondNumber + ".";
                display.value = secondNumber;
            }

            return;
        }

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

function calculate() {
    const num1 = Number(firstNumber);
    const num2 = Number(secondNumber);

    switch (operator) {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            if (num2 === 0) {
                return "Error";
            }
            return num1 / num2;

        default:
            return num2;
    }
}

equalsButton.addEventListener("click", () => {
    if (firstNumber === "" || operator === "" || secondNumber === "") {
        return;
    }

    const result = calculate();

    display.value = result;

    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
});

clearButton.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    display.value = "0";
});