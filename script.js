let data = [];
let data2 = [];

let selectAdd = false;
let selectSubtract = false;
let selectDivide = false;
let selectMultiply = false;

let digits = '';
let result = '';

const numbers = document.querySelectorAll('.nbox');
const buttons = document.querySelectorAll('#numbers');
const equals = document.querySelector('.equals');
const display = document.querySelector('#display');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const innerdisplay = document.createElement('innerdisplay');
innerdisplay.classList.add('innerdisplay');
display.appendChild(innerdisplay);

clearButton.addEventListener('click', () => {
  innerdisplay.textContent = '';
  data.length = 0;
  data2.length = 0;
});

deleteButton.addEventListener('click', () => {
  data = data.map((data) => data.slice(0, -1));
  innerdisplay.textContent = innerdisplay.textContent.slice(0, -1);
});

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    innerdisplay.textContent += e.target.name; // naming divs is very useful
  });
});

// adds button presses as string to data[] and joins them
document.querySelectorAll('.nbox').forEach((btn) => {
  btn.addEventListener('click', (event) => {
    data.push(event.target.textContent);
    digits = data.join('');
    data = [digits];
  });
});

// takes numbers from data[], converts them to a number and pushes them to
// data2[] for operation, and empties data[]
const combineNum = function () {
  data2.push(Number(...data));
  data.length = 0;
};

// resets all operator selections
const selections = function () {
  selectAdd = selectSubtract = selectDivide = selectMultiply = false;
};

const selectionRules = function () {
  if (selectAdd) add(data2);
  else if (selectSubtract) subtract(data2);
  else if (selectDivide) divide(data2);
  else if (selectMultiply) multiply(data2);
};

const shiftNum = function () {
  data2.length = 0;
  data2 = [result];
};

const operate = function () {
  combineNum();
  if (data2.length >= 2) {
    selectionRules();
    shiftNum();
    selections();
  }
};

const add = function (data2) {
  result = data2.reduce((a, b) => a + b);
  return result;
};
const subtract = function (data2) {
  result = data2.reduce((a, b) => a - b);
  return result;
};
const divide = function (data2) {
  result = data2.reduce((a, b) => a / b);
  return result;
};
const multiply = function (data2) {
  result = data2.reduce((a, b) => a * b);
  return result;
};

const equalsBtn = document.querySelector('.equals');
equalsBtn.addEventListener('click', () => {
  operate();
  innerdisplay.textContent = result;
});

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', () => {
  operate();
  selectAdd = true;
  add(data2);
  shiftNum();
});

const subtractBtn = document.querySelector('.subtract');
subtractBtn.addEventListener('click', () => {
  operate();
  selectSubtract = true;
  subtract(data2);
  shiftNum();
});

const divideBtn = document.querySelector('.divide');
divideBtn.addEventListener('click', () => {
  operate();
  selectDivide = true;
  divide(data2);
  shiftNum();
});

const multiplyBtn = document.querySelector('.multiply');
multiplyBtn.addEventListener('click', () => {
  operate();
  selectMultiply = true;
  multiply(data2);
  shiftNum();
});