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
  
  const printListRec = (arg) => {
    const result = [];
    const iter = (out, count) => {
      if (out.next) {
      // console.log(out.next);
        if (out.value === 1) {
          result.push(out);
        }
        result.push(out.next);
        return iter(out.next, count + 1);
      }
      return result;
    };
    return iter(arg, 1);
  };
  
  const printListRecReverse = (arg) => {
    const result = [];
    const result2 = [];
    const iter = (out, count) => {
      if (out.next) {
      // console.log(out.next);
        if (out.value === 1) {
          result.push(out);
        }
        result.push(out.next);
        result2.unshift(count);
        return iter(out.next, count + 1);
      }
      return result2;
    };
    return iter(arg, 1);
  };
  
  // console.log(printListFor(list));
  // console.log(printListForReverse(list));
  // console.log(printListRec(list));
  console.log(printListRecReverse(list));
  