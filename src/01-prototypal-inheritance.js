// 1) Example of adding properties to the "prototype" of a "constructor" function
function Course(name) {
  this.name = name;
  this.startDate = null;
}

Course.prototype.getName = function() {
  return this.name;
};

Course.prototype.whenShouldStarts = function() {
  console.log('Starts on: ', this.startDate);
};

const frontEndTips = new Course('Front-end Tips for a Technical Interview');
// console.log(frontEndTips);
// console.log(frontEndTips.whenShouldStarts());

// for (let property in frontEndTips) {
//   console.log(property);
// }

// "toString" and "getName" were inherited, it is NOT a frontEndTips's own properties
console.log(frontEndTips.hasOwnProperty("toString"), frontEndTips.toString());
console.log(frontEndTips.hasOwnProperty("getName"), frontEndTips.getName());
console.log(frontEndTips.hasOwnProperty("name"), frontEndTips.name);

// 2) Example a more complex DOM object
const $element = document.querySelector('.js-input');
let counter = 0;
for (let property in $element) {
  if($element.hasOwnProperty(property)) {
    // console.log(property);
  } else {
    // console.log(property);
  }

  counter = counter + 1;
}
console.log(counter);
