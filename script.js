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
const innerdisplay = document.createElement('innderdisplay');
innerdisplay.classList.add('innerdisplay');
display.appendChild(innerdisplay);

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {  
    innerdisplay.textContent += e.target.name; // naming divs is very useful
  });
});

// adds button presses as number to data[] and joins them
document.querySelectorAll('.nbox').forEach((btn) => {
  btn.addEventListener('click', (event) => {
    data.push(event.target.textContent); 
    digits = data.join('');
    data = [digits];
    console.log(data);
    console.log(data2);
    console.log(result);
  });
});

// takes numbers from data[], pushes them to data2[] for operation, and empties data[]
const combineNum = function () {
  data2.push(Number(...data));
  data.length = 0;
};

// resets all operator selections
const selections = function () {
  (selectSubtract = false),
    (selectAdd = false),
    (selectMultiply = false),
    (selectDivide = false);
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

const selectionRules = function () {
  if (selectAdd) add(data2);
  else if (selectSubtract) subtract(data2);
  else if (selectDivide) divide(data2);
  else if (selectMultiply) multiply(data2);
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

const shiftNum = function () {
  data2.length = 0;
  data2 = [result];
};


// const operate = function () {
//   // called by = button. calls combineNum(), calls operater functions on data2[], and returns result
//   combineNum();
//   if (selectAdd == true) {
//     return add(data2);
//   } else if (selectSubtract == true) {
//     return subtract(data2);
//   } else if (selectDivide == true) {
//     return divide(data2);
//   } else if (selectMultiply == true) {
//     return multiply(data2);
//   }
// };
// operator button functions continually perform an operation and store the
// result in data3[] to allow for a switch from operator type.

// const addBtn = document.querySelector('.add');
// addBtn.addEventListener('click', () => {
//   combineNum();
//   operate();
//   pushAdd();
//   selections();
//   selectAdd = true;
// });

// const subtractBtn = document.querySelector('.subtract');
// subtractBtn.addEventListener('click', () => {
//   combineNum();
//   operate();
//   pushSubtract();
//   selections();
//   selectSubtract = true;
// });

// const divideBtn = document.querySelector('.divide');
// divideBtn.addEventListener('click', () => {
//   combineNum();
//   operate();
//   pushDivide();
//   selections();
//   selectDivide = true;
// });

// const multiplyBtn = document.querySelector('.multiply');
// multiplyBtn.addEventListener('click', () => {
//   combineNum();
//   operate();
//   pushMultiply();
//   selections();
//   selectMultiply = true;
// });

// const equalsBtn = document.querySelector('.equals');
// equalsBtn.addEventListener('click', () => {
//   innerdisplay.textContent = operate();
// });

// called by operator buttons. these functions reset the operator type and
// perform the intended type of operation, storing it in data3[] for later use.

// const pushAdd = function () {
//   if (data2.length >= 2) {
//     selections();
//     selectAdd = true;
//     data2.length = 0;
//     data2.push(data3.reduce((a, b) => a - b));
//   }
// };

// const pushSubtract = function () {
//   if (data2.length >= 2) {
//     selections();
//     selectSubtract = true;
//     data2.length = 0;
//     data2.push(data3.reduce((a, b) => a - b));
//   }
// };
// const pushDivide = function () {
//   if (data2.length >= 2) {
//     selections();
//     selectDivide = true;
//     data2.length = 0;
//     data2.push(data3.reduce((a, b) => a / b));
//   }
// };
// const pushMultiply = function () {
//   if (data2.length >= 2) {
//     selections();
//     selectMultiply = true;
//     data2.length = 0;
//     data2.push(data3.reduce((a, b) => a * b));
//   }
// };

// operator functions. the result of each operation is stored in data3[] for
// further use if necessary.

// const add = function (data2) {
//   data3.length = 0;
//   data3.push(data2.reduce((a, b) => a + b));
//   return data2.reduce(
//     (previousValue, currentValue) => previousValue + currentValue
//   );
// };

// const subtract = function (data2) {
//   data3.length = 0;
//   data3.push(data2.reduce((a, b) => a - b));
//   return data2.reduce(
//     (previousValue, currentValue) => previousValue - currentValue
//   );
// };

// const divide = function (data2) {
//   data3.length = 0;
//   data3.push(data2.reduce((a, b) => a / b));
//   return data2.reduce(
//     (previousValue, currentValue) => previousValue / currentValue
//   );
// };

// const multiply = function (data2) {
//   data3.length = 0;
//   data3.push(data2.reduce((a, b) => a * b));
//   return data2.reduce(
//     (previousValue, currentValue) => previousValue * currentValue
//   );
// };
