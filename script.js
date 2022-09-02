const initialValue = 0;

// const oneBtn = document.querySelector('#one, #two');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    innerdisplay.textContent += button.id; // IT WAS JUST A PLUS SIGN TO ADD MORE 
  });
});

const display = document.querySelector('#display');
const innerdisplay = document.createElement('innderdisplay');
innerdisplay.classList.add('innerdisplay');
display.appendChild(innerdisplay);

let data = [];
selectMultiply = true;

const operate = function () {
  const add = data.reduce(
    (previousValue, currentValue) => previousValue + currentValue
    );
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
      }
      if ((selectSubtract = true)) {
        return subtract;
  }
  if ((selectDivide = true)) {
    return divide;
  }
  if ((selectMultiply = true)) {
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

// const add = function (array) {
//   return array.reduce(
//     (previousValue, currentValue) => previousValue + currentValue
//   );
// };

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