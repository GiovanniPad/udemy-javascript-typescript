let num1 = 150.7123123; // number
let num2 = 10; // number

console.log(num1.toString() + num2);
console.log(num1.toString(2));
console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));

let temp = num1 * 'Ola';

console.log(Number.isNaN(temp));

console.log('--------------');

let num3 = 0.7;
let num4 = 0.1;

num3 += num4;
num3 += num4;
num3 += num4;

console.log(num3);
console.log(Number.isInteger(num1));

num3 = Number(num3.toFixed(2));

console.log(num3);
console.log(Number.isInteger(num3));

num3 = ((num3 * 100) + (num4 * 100)) / 100;

console.log(num3);