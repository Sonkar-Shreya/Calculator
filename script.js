const operators = ["+", "-", "*", "%", "/"];

let operand1 = "";
let operand2 = "";
let operator;
let operand = "";
let display = "";

function handleClick(value) {
  if (!!Number.parseInt(value)) {
    operand = operand.concat(value);
    display = display.concat(value);
  } else if (operators.includes(value)) {
    if (operand === "") {
      alert("enter operator");
      return;
    }
    operator = value;
    operand1 = operand;
    operand = "";
    display = display.concat(value);
  } else if (value === "=") {
    if (operand1 === "") {
      alert("Enter valid operand");
      return;
    }
    if (operand === "") {
      alert("Enter valid operand");
      return;
    }
    operand2 = operand;
    let result = eval(display);
    display = display.concat(value);
    display = display.concat(result);

    operand = "";
    result = "";
  } else if (value === "AC") {
    display = "";
  }

  document.getElementById("display").innerHTML = display;
}
