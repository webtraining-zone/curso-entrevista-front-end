// Closure example (function constructor)
const makeEmailAccountGenerator = (emailProvider) => {
  // "emailProvider" will be "remembered" when the inner function is executed
  return function(account) {
    return `${account}@${emailProvider}`;
  };
};

const gmailGenerator = makeEmailAccountGenerator('gmail.com');
const webtrainingGenerator = makeEmailAccountGenerator('webtraining.zone');
const outlookGenerator = makeEmailAccountGenerator('outlook.com');

const esmeraldaEmail = webtrainingGenerator('esmeralda');
const luisEmail = gmailGenerator('luis');
const pabloEmail = outlookGenerator('pablo');

console.log(esmeraldaEmail);
console.log(luisEmail);
console.log(pabloEmail);
