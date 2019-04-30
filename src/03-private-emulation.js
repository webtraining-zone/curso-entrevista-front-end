// Closure example (private methods emulation)
const messagesCounter = (() => {
  let privateCounter = 0;

  function changeValue(value) {
    privateCounter += value;
  }

  function increment() {
    changeValue(1);
  }

  function decrement() {
    changeValue(-1);
  }

  function getValue() {
    return privateCounter;
  }

  return {
    increment,
    decrement,
    getValue,
  };
})();

messagesCounter.increment();
messagesCounter.increment();
messagesCounter.increment();
messagesCounter.decrement();

console.log("Resulting value:", messagesCounter.getValue());
