const arr = ['Есть', 'жизнь', 'на', 'Марсе'];

const arrLength = [];
for (let i = 0; i < arr.length; i++) {
}

arr.map((item, i) => arrLength[i] = arr[i].length);

console.log(arrLength); // 4,5,2,5
