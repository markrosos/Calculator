const initialValue = 0;

// const oneBtn = document.querySelector('#one, #two');

let data = [];
// let test = Number(data.join(''));

let digits = '';
let digits2 = '';

// const parse = function (array) {
//   parseInt(array.join(''));
// };

// const result = function (array) {
//   array.reduce(([a], b) => [(a || 0) * 10 + b], []);
// };

// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     innerdisplay.textContent += button.textContent;
//   });
// });

// store numbers from button id in a string?
// convert string to array
// use array.reduce to do the math
const numbers = document.querySelectorAll('.nbox div');

// numbers.forEach((button) => {
//   button.addEventListener('click', () => {
//     console.log(data.push(Number(button.id)));
//     digits = parseInt(data.join(''));
//     data = [digits];
//     console.log(digits);
//   });
// });

// document.querySelectorAll('.nbox div').forEach(btn => {
//   btn.addEventListener('click', (even)) => {
//     data.push(parseInt(event.target.textContent))
//   }
// }

document.querySelectorAll('.nbox').forEach((btn) => {
  btn.addEventListener('click', (event) => {
    data.push(parseInt(event.target.textContent));
    digits = Number(data.join(''));
    data = [digits];
    console.log(data);
    console.log(digits);
  });
});

// result = data.reduce(([a], b) => [(a || 0) * 10 + b], []);

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', () => {
  // console.log(add(data));
});

const subtractBtn = document.querySelector('.subtract');
subtractBtn.addEventListener('click', () => {});

const divideBtn = document.querySelector('.divide');
divideBtn.addEventListener('click', () => {});
const multiplyBtn = document.querySelector('.multiply');
multiplyBtn.addEventListener('click', () => {});

const equalsBtn = document.querySelector('.equals');
equalsBtn.addEventListener('click', () => {
  innerdisplay.textContent = operate();
});

const display = document.querySelector('#display');
const innerdisplay = document.createElement('innderdisplay');
innerdisplay.classList.add('innerdisplay');
display.appendChild(innerdisplay);

// selectMultiply = true;

const operate = function () {
  // const add = data.reduce(
  //   (previousValue, currentValue) => previousValue + currentValue
  // );
  const subtract = data.reduce(
    (previousValue, currentValue) => previousValue - currentValue
  );
  const divide = data.reduce(
    (previousValue, currentValue) => previousValue / currentValue
  );
  const multiply = data.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  );
  if ((selectAdd = true)) {
    return add;
  } else if ((selectSubtract = true)) {
    return subtract;
  } else if ((selectDivide = true)) {
    return divide;
  } else if ((selectMultiply = true)) {
    return multiply;
  }
};

// click button to select and store number on button (in array?)
// show number on calculator display
// click button to select mathematical function
// show mathematical function on calculator display
// click button to select and store second number on button (in array?)
// show number on calculator display
// click equals button to call mathematical function
// mathematical function uses numbers stored in array from clicked buttons and outputs an answer
// show answer on calculator display

// console.log(add);
// console.log(subtract);
// console.log(divide);
// console.log(multiply);

// oneBtn.addEventListener('click', () => {
//   innerdisplay.textContent = 'test';
// });

const add = function (data) {
  return data.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
};

// const subtract = function (array) {
//   return array.reduce(
//     (previousValue, currentValue) => previousValue - currentValue
//   );
// };

// const divide = function (array) {
//   return array.reduce(
//     (previousValue, currentValue) => previousValue / currentValue
//   );
// };

// const multiply = function (array1) {
//   return array.reduce(
//     (previousValue, currentValue) => previousValue * currentValue
//   );
// };
