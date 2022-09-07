let data = [];
let data2 = [];
let data3 = [];

let selectAdd = false;
let selectSubtract = false;
let selectDivide = false;
let selectMultiply = false;

let digits = '';

const numbers = document.querySelectorAll('.nbox');
const buttons = document.querySelectorAll('#numbers');
const equals = document.querySelector('.equals');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    innerdisplay.textContent += e.target.name; // naming divs is useful
  });
});

document.querySelector('.equals');
equals.addEventListener('click', () => {
  innerdisplay.textContent = operate();
});

document.querySelectorAll('.nbox').forEach((btn) => {
  btn.addEventListener('click', (event) => {
    data.push(parseInt(event.target.textContent));
    digits = Number(data.join(''));
    data = [digits];
    // data3.push(...data)
    // data.length = 0;
    console.log(data);
    console.log(data2);
    console.log(data3);
    console.log(digits);
  });
});

const combineNum = function () {
  data2.push(...data);
  data.length = 0;
};

const operate = function () {
  combineNum();
  if (selectAdd == true) {
    return add(data2);
  } else if (selectSubtract == true) {
    return subtract(data2);
  } else if (selectDivide == true) {
    return divide(data2);
  } else if (selectMultiply == true) {
    return multiply(data2);
  }
};

const selections = function () {
  (selectSubtract = false),
    (selectAdd = false),
    (selectMultiply = false),
    (selectDivide = false);
};

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', () => {
  combineNum();
  operate();
  pushAdd();
  selections();
  selectAdd = true;
});

const subtractBtn = document.querySelector('.subtract');
subtractBtn.addEventListener('click', () => {
  combineNum();
  operate();
  pushSubtract();
  selections();
  selectSubtract = true;
});

const divideBtn = document.querySelector('.divide');
divideBtn.addEventListener('click', () => {
  combineNum();
  operate();
  pushDivide();
  selections();
  selectDivide = true;
});

const multiplyBtn = document.querySelector('.multiply');
multiplyBtn.addEventListener('click', () => {
  combineNum();
  operate();
  pushMultiply();
  selections();
  selectMultiply = true;
});

const equalsBtn = document.querySelector('.equals');
equalsBtn.addEventListener('click', () => {
  innerdisplay.textContent = operate();
});

const pushAdd = function () {
  if (data2.length >= 2) {
    selections();
    selectAdd = true;
    data2.length = 0;
    data2.push(data3.reduce((a, b) => a - b));
  }
};

const pushSubtract = function () {
  if (data2.length >= 2) {
    selections();
    selectSubtract = true;
    data2.length = 0;
    data2.push(data3.reduce((a, b) => a - b));
  }
};
const pushDivide = function () {
  if (data2.length >= 2) {
    selections();
    selectDivide == true;
    data2.length = 0;
    data2.push(data3.reduce((a, b) => a / b));
  }
};
const pushMultiply = function () {
  if (data2.length >= 2) {
    selections();
    selectMultiply = true;
    data2.length = 0;
    data2.push(data3.reduce((a, b) => a * b));
  }
};

const add = function (data2) {
  data3.length = 0;
  data3.push(data2.reduce((a, b) => a + b));
  return data2.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
};

const subtract = function (data2) {
  data3.length = 0;
  data3.push(data2.reduce((a, b) => a - b));
  return data2.reduce(
    (previousValue, currentValue) => previousValue - currentValue
  );
};

const divide = function (data2) {
  data3.length = 0;
  data3.push(data2.reduce((a, b) => a / b));
  return data2.reduce(
    (previousValue, currentValue) => previousValue / currentValue
  );
};

const multiply = function (data2) {
  data3.length = 0;
  data3.push(data2.reduce((a, b) => a * b));
  return data2.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  );
};

const display = document.querySelector('#display');
const innerdisplay = document.createElement('innderdisplay');
innerdisplay.classList.add('innerdisplay');
display.appendChild(innerdisplay);
