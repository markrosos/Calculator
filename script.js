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
    data = [digits]
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
  operateTest();
  innerdisplay.textContent = result;
});

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', () => {
  operateTest();
  selectAdd = true;
  addTest(data2);
  arrayTest();
});

const subtractBtn = document.querySelector('.subtract');
subtractBtn.addEventListener('click', () => {
  operateTest();
  selectSubtract = true;
  subtractTest(data2);
  arrayTest();

});

const divideBtn = document.querySelector('.divide');
divideBtn.addEventListener('click', () => {
  operateTest();
  selectDivide = true;
  divideTest(data2);
  arrayTest();
});

const multiplyBtn = document.querySelector('.multiply');
multiplyBtn.addEventListener('click', () => {
  operateTest();
  selectMultiply = true;
  multiplyTest(data2);
  arrayTest();
});

const operateTest = function () {
  combineNum();
  if (data2.length >= 2) {
    if (selectAdd == true) {
      addTest(data2);
    } else if (selectSubtract == true) {
      subtractTest(data2);
    } else if (selectDivide == true) {
      divideTest(data2);
    } else if (selectMultiply == true) {
      multiplyTest(data2);
    }
    arrayTest();
    selections();
  }
};

const addTest = function (data2) {
  result = data2.reduce((a, b) => a + b);
  return result;
};
const subtractTest = function (data2) {
  result = data2.reduce((a, b) => a - b);
  return result;
};
const divideTest = function (data2) {
  result = data2.reduce((a, b) => a / b);
  return result;
};
const multiplyTest = function (data2) {
  result = data2.reduce((a, b) => a * b);
  return result;
};

const arrayTest = function () {
  data2.length = 0;
  data2 = [result];
  // parseFloat([result])
};

const display = document.querySelector('#display');
const innerdisplay = document.createElement('innderdisplay');
innerdisplay.classList.add('innerdisplay');
display.appendChild(innerdisplay);

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
