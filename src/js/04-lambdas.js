const items = [1, 4, -6, 7];

// Example of a "lambda" function that is used as "data"/parameter by other function (reduce)
function sumReducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

const total = items.reduce(sumReducer);
console.log(total);

// Example of a "lambda" function that is anonymous
const initialValue = {};
const object = items.reduce((accumulator, currentValue, index) => {
  accumulator[index] = currentValue;
  return accumulator;
}, initialValue);
console.log(object);
