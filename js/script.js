const add = (numFirst, numSecond) => {
  return numFirst + numSecond;
};

const subtract = (numFirst, numSecond) => {
  return numFirst - numSecond;
};

const multiply = (numFirst, numSecond) => {
  return numFirst * numSecond;
};

const divide = (numFirst, numSecond) => {
  return numFirst / numSecond;
};

const operate = (numFirst, operator, numSecond) => {
  switch (operator) {
    case "+":
      add(numFirst, numSecond);
      break;
    case "-":
      subtract(numFirst, numSecond);
      break;
    case "*":
      multiply(numFirst, numSecond);
      break;
    case "/":
      divide(numFirst, numSecond);
      break;
  }
};

let numFirst;
let numSecond;
let operator;
