const vasya = { name: 'Вася', age: 23 };
const masha = { name: 'Маша', age: 18 };
const vovochka = { name: 'Вовочка', age: 6 };

const people = [vasya, masha, vovochka];

people.sort((a, b) => a.age > b.age);

console.log(people);
