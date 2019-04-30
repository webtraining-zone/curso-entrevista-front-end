// 1) This is a pure function
function sum(a, b) {
  return a + b;
}

console.log(sum(4, 5));

// 2) This is an impure function
const user = {
  name: 'Esmeralda',
  email: 'esmeralda@webtraining.zone',
};

function addFieldToUserImpure(field, value) {
  user[field] = value;
}

function addFieldToUserPure(user, field, value) {
  user[field] = value;
}

addFieldToUserImpure('website', 'https://esmeralda.webtraining.zone');
addFieldToUserPure(user, 'twitter', '@esmeralda');

console.log(user);
