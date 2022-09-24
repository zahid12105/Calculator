const previousOperandElement = document.querySelector('.previous_operand');
const currentOperandElement = document.querySelector('.current_operand');
const acButton = document.querySelector('#ac');
const delButton = document.querySelector('#del');
const equalButton = document.querySelector('#equal');
const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');

let previousOperand = '';
let currentOperand = '';
let operation = '';

// function formatOutputO(numr) {
//   return Number(numr).toLocaleString("en");
// }

// Display
function updateDisplay() {
  currentOperandElement.innerHTML = currentOperand;
  previousOperandElement.innerHTML = `${previousOperand} ${operation}`;
}

function choseOperator(operator) {
  if (previousOperand) {
    previousOperand = calculation();
  } else {
    previousOperand = currentOperand;
  }
  operation = operator;
  currentOperand = '';
}

// Operator Button
operatorButton.forEach(btn => {
  btn.addEventListener('click', function () {
    if (!currentOperand) return;
    choseOperator(btn.textContent);
    updateDisplay();
  });
});

// Calculation
function calculation() {
  switch (operation) {
    case '÷':
      return Number(previousOperand) / Number(currentOperand);
    case '*':
      return Number(previousOperand) * Number(currentOperand);
    case '+':
      return Number(previousOperand) + Number(currentOperand);
    case '-':
      return Number(previousOperand) - Number(currentOperand);
    case '%':
      return Number(previousOperand) % Number(currentOperand);
  }
}

// function appendNumber(number) {
//   currentOperand += number;
// }

// Number Button
numberButton.forEach(btn => {
  btn.addEventListener('click', function () {
    if (btn.textContent === '.' && currentOperand.includes('.')) return;
    // appendNumber(btn.textContent);
    let num = btn.textContent;
    currentOperand += num;
    updateDisplay();
  });
});

// Equal Button
equalButton.addEventListener('click', function () {
  if (!previousOperand) return;
  if (currentOperand) {
    currentOperand = calculation();
  } else {
    currentOperand = previousOperand;
  }
  previousOperand = '';
  operation = '';
  updateDisplay();
});

// Delete Button
delButton.addEventListener('click', function () {
  currentOperand = currentOperand.slice(0, -1);
  updateDisplay();
});

// Ac Button
acButton.addEventListener('click', function () {
  previousOperand = '';
  currentOperand = '';
  operation = '';
  updateDisplay();
});
