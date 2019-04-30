// 1) Function stored in a variable
const run = function() {
  console.log('Run');
};

run();

// 2) Function passed as param
const items = ['a', 'h', 1, true];

// It will get only 'string' chars
function filterChars(input) {
  return typeof input === 'string';
}

const chars = items.filter(filterChars);
console.log(chars);

// 3) Function as a return value from another function
function createAdderFn(numberToAdd) {
  return function(value) {
    return value + numberToAdd;
  };
}

const add15 = createAdderFn(15);
const add10 = createAdderFn(10);
const addMinusOne = createAdderFn(-1);

console.log(add15(1));
console.log(add10(1));
console.log(addMinusOne(1));
