let firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = "0";

const display = document.querySelector(".display__input");

function clearDisplay() {
  firstNumber = null;
  secondNumber = null;
  operator = null;
  displayValue = "0";
  updateDisplay();
}

function inputNumber(num) {
  if (displayValue === "0") {
    displayValue = String(num);
  } else {
    displayValue += String(num);
  }
  updateDisplay();
}

function setOperator(op) {
  if (firstNumber === null) {
    firstNumber = parseFloat(displayValue);
  } else {
    secondNumber = parseFloat(displayValue);
    firstNumber = operate(operator, firstNumber, secondNumber);
    displayValue = firstNumber.toString();
  }
  operator = op;
  displayValue = "0";
}

function calculateResult() {
  if (firstNumber !== null && operator) {
    secondNumber = parseFloat(displayValue);
    const result = operate(operator, firstNumber, secondNumber);

    if (typeof result === "string") {
      displayValue = result;
    } else {
      displayValue = result.toString();
    }

    firstNumber = null;
    operator = null;
  }
  updateDisplay();
}

function updateDisplay() {
  display.value = displayValue;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by 0";
  }
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return null;
  }
}
