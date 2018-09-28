const arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

const summCharCode = (arg) => {
  const arrArg = arg;
  let summStr = 0;
  for (let i = 0; i < arrArg.length; i += 1) {
    summStr += arrArg[i].charCodeAt(0);
  }
  return summStr;
};

const aclean = (arg) => {
  const result = [];
  const out = {};

  for (let i = 0; i < arg.length; i += 1) {
    const arrStr = arg[i].toLowerCase().split('');
    console.log(`${arrStr} -> ${arg[i]} -> ${summCharCode(arrStr)}`);
    const summForKey = summCharCode(arrStr);
    out[`${summForKey}`] = arg[i];
  }

  result.push(Object.values(out));

  console.log(out);
  return result;
};

console.log(aclean(arr)); 
