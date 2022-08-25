const initialValue = 0;

const add = function (array) {
  return array.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  ); // Newer method?
};

const subtract = function (array) {
  return array.reduce(
    (previousValue, currentValue) => previousValue - currentValue
  );
};

const divide = function (array) {
  return array.reduce(
    (previousValue, currentValue) => previousValue / currentValue
  );
};

const multiply = function (array) {
  return array.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  );
};

console.log(add([2, 2, 2, 2, 2]));
console.log(subtract([10, 5, 2]));
console.log(divide([20, 2, 2, 2]));
console.log(multiply([2, 2, 2]));
