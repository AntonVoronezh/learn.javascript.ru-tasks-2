const makeBuffer = () => {
  let str = '';

  const buffer = (arg) => {
    if (arg) {
      str += `${arg} `;
    }
    return str;
  };

  buffer.clear = () => str = '9';
  return buffer;
};

const buffer = makeBuffer();

buffer('Тест');
buffer(' тебя не съест ');
console.log(buffer()); // Тест тебя не съест

buffer.clear();

console.log(buffer()); // ""
