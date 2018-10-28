const arr = [1, 2, 3, 4, 5];

const getSums = (arg) => {
  const result = [];
  const sum = () => arg.reduce(
    (acc, value, index, arr) => {
      const a = acc + value;
      result.push(a);
      return a;
    },
    0,
  );
  sum();
  return result;
};

console.log(getSums(arr)); // [ 1, 3, 6, 10, 15 ].

