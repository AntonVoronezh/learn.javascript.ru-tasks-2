const makeBuffer = () => {
    let str = '';
  
    const bufer = (arg) => {
      if (arg) {
        str += `${arg} `;
      }
      return str;
    };
    return bufer;
  };
  
  const buffer = makeBuffer();
  
  buffer('Замыкания');
  buffer(' Использовать');
  buffer(' Нужно!');
  
  console.log(buffer()); 
  