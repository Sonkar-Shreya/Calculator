const operators = ["+", "-", "*", "%", "/"];
const container = [
  {
    id: "AC",
  },
  {
    id: "+/-",
  },
  {
    id: "%",
  },
  {
    id: "/",
  },
  {
    id: "7",
  },
  {
    id: "8",
  },
  {
    id: "9",
  },
  {
    id: "*",
  },
  {
    id: "4",
  },
  {
    id: "5",
  },
  {
    id: "6",
  },
  {
    id: "-",
  },
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "+",
  },
  {
    id: "0",
  },
  {
    id: ",",
  },
  {
    id: "=",
  },
];

for (let i of container) {
  let button = document.createElement("button");
  button.innerHTML = i.id;
  let btn = document.getElementById("btnContainer");
  button.classList.add("btn");
  button.addEventListener("click", () => {
    handleClick(i.id);
  });
  if (i.id === "0") {
    button.style.width = "49.6% ";
  }
  btn.appendChild(button);
}

let operand1 = "";
let operand2 = "";
let operator;
let operand = "";
let display = "";
let flag = false;

function handleClick(value) {
  if (flag) {
    flag = false;
    handleClick("AC");
  }
  if (!!Number.parseInt(value) || value === "0") {
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
    flag = true;

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
