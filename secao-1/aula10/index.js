// Aula 10 - Operadores Aritméticos, De Atribuição e Incremento


// Aritméticos

const num1 = 2;
const num2 = 10;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** 10);
console.log(num1 % num2);

console.log('---------------------------');

// Incremento

let contador = 1;
console.log(contador++);
console.log(++contador);

console.log(contador--);
console.log(--contador);

console.log('---------------------------');

// Atribuição

let contador2 = 2;

contador2 += 5;
console.log(contador2);

contador2 -= 3;
console.log(contador2);

contador2 *= 3;
console.log(contador2);

contador2 /= 2;
console.log(contador2);

contador2 **= 2;
console.log(contador2);

const num3 = 2;
const num4 = 'Giovanni';
const num5 = '2'

console.log(num3 * num4);
console.log(num3 * num5);

const num7 = parseInt('5.2');
const num8 = parseFloat('5.2');
const num9 = Number('5.32');

console.log(num7);
console.log(num8);
console.log(num9);