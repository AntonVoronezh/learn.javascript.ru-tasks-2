const f = (x) => {
  const chek = arguments.length === 0 ? 0 : 1;
  console.log(chek);
};

f(undefined); // 1
f(); // 0
