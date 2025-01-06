// Aula 17 - Objeto Math


let num1 = 9.54578;
let num2 = Math.floor(num1);
let num3 = Math.ceil(num1);
let num4 = Math.round(num1);

console.log(num2);
console.log(num3);
console.log(num4);

console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));

const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);

console.log(Math.PI);
console.log(Math.pow(2,8));

console.log(num1 ** 0.5); // raiz quadrada
console.log(Math.sqrt(num1)); // raiz quadrada

console.log(100 / 0);