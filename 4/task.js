const strings = ['кришна', 'кришна', 'харе', 'харе',
  'харе', 'харе', 'кришна', 'кришна', '8-()',
];

const unique = (arg) => {
  const arr = arg;
  const result = [];
  const out = [];
  for (let i = 0; i < arr.length; i += 1) {
    const word = arr[i];
    result[`${word}`] = arr[i];
  }
  // console.log(result);
  out.push(Object.keys(result));
  return out;
};

console.log(unique(strings)); // кришна, харе, 8-()
