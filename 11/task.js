const list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  };
  
  const printListFor = (arg) => {
    let arr = arg;
    while (arr) {
      console.log(arr.value);
      arr = arr.next;
    }
  };
  
  const printListForReverse = (arg) => {
    let arr = arg;
    const result = [];
    while (arr) {
      console.log(arr.value);
      result.unshift(arr.value);
      arr = arr.next;
    }
    return result;
  };
  