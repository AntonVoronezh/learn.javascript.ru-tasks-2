const arr = [1, 2, 3, 4, 5, 6, 7];

const filter = (argArr, argFn) => {
  const out = [];
  argArr.forEach(item => (argFn(item) ? out.push(item) : null));
  return out;
};

const inBetween = (arg1, arg2) => item => item >= arg1 && item <= arg2;
const inArray = arg => item => (arg.indexOf(item) !== -1);

console.log(filter(arr, a => a % 2 === 0));
console.log(filter(arr, inBetween(3, 6))); 
console.log(filter(arr, inArray([1, 2, 10]))); 
