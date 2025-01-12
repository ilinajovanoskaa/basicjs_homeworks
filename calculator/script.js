const buttonValues = [
  "AC",
  "+/-",
  "%",
  "÷",
  "7",
  "8",
  "9",
  "×",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];
const rightSymbols = ["÷", "×", "-", "+", "="];
const topSymbols = ["AC", "+/-", "%"];
const display = document.getElementById("display");

let A = null;
let operator = null;
let B = null;
let isOperatorClicked = false; // is used to track whether an operator button (like +, -, ×, ÷) has been clicked or not

function clearAll() {
  A = null;
  operator = null;
  B = null;
  display.value = "0";
  isOperatorClicked = false;
}

for (let i = 0; i < buttonValues.length; i++) {
  let value = buttonValues[i];
  let button = document.createElement("button");
  button.innerText = value;

  if (value == "0") {
    button.style.width = "180px";
    button.style.gridColumn = "span 2";
  } else if (rightSymbols.includes(value)) {
    // includes is method in JavaScript used to check if an array or strings contains a specific value
    button.style.backgroundColor = "#FF9500";
  } else if (topSymbols.includes(value)) {
    button.style.backgroundColor = "#D4D4D2";
    button.style.color = "#1C1C1C";
  }

  button.addEventListener("click", function () {
    if (rightSymbols.includes(value)) {
      if (A !== null && operator !== null && !isOperatorClicked) {
        B = display.value;
        let numA = parseFloat(A);
        let numB = parseFloat(B);

        if (operator == "÷") {
          A = numB === 0 ? "Error" : (numA / numB).toString();
        } else if (operator == "×") {
          A = (numA * numB).toString();
        } else if (operator == "-") {
          A = (numA - numB).toString();
        } else if (operator == "+") {
          A = (numA + numB).toString();
        }
        display.value = A;
        operator = value === "=" ? null : value; //  ? ternary operator is a shorthand for an if-else statement
        isOperatorClicked = value !== "=";
      } else {
        A = display.value;
        operator = value === "=" ? null : value; // : is part of a ternary operator. It’s used as the “else” case
        isOperatorClicked = value !== "=";
      }
      if (value !== "=") display.value = operator; // Show the operator pressed
    } else if (topSymbols.includes(value)) {
      if (value == "AC") {
        clearAll();
      } else if (value == "+/-") {
        display.value = display.value.startsWith("-")
          ? display.value.slice(1)
          : "-" + display.value;
      } else if (value == "%") {
        display.value = (parseFloat(display.value) / 100).toString();
      }
    } else {
      if (isOperatorClicked) {
        display.value = value;
        isOperatorClicked = false;
      } else {
        if (value == ".") {
          if (!display.value.includes(".")) {
            display.value += value;
          }
        } else if (display.value == "0") {
          display.value = value;
        } else {
          display.value += value;
        }
      }
    }
  });

  document.getElementById("buttons").appendChild(button);
}
