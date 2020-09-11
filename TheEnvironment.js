const evaluate = require('./SpecialForms');
const topScope = Object.create(null);

topScope.true = true;
topScope.false = false;

for (let op of ["+", "-", "*", "/", "==", "<", ">"]) {
  topScope[op] = Function("a, b", `return a ${op} b;`);
}

// CONSOLE.LOG()
topScope.print = value => {
  console.log(value);
  return value;
};

// ARRAYS
topScope.array = (...arguments) => arguments;
topScope.length = array => array.length;
topScope.element = (array, index) => {
  if (!array[index]) throw new TypeError("Wrong index");
  return array[index];
}

module.exports = topScope;
