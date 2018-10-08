const byField = (arg) => {
  const fn = (a, b) => (a[`${arg}`] > b[`${arg}`] ? 1 : -1);
  return fn;
};
