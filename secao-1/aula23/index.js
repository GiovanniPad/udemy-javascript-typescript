// Aula 23 - Valores Primitivos e Valores por Referência


let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);

let c = [1, 2, 3];
let d = c; // Referência
let e = [...d];

console.log(c, d, e);

c.push(4);
console.log(c, d, e);

d.pop();
console.log(c, d, e);

e.push(4);
console.log(c, d, e);

const x = {
    nome: 'Giovanni',
    sobrenome: 'Padilha'
};
const y = x;

console.log(x, y);

x.nome = 'Beatriz';
console.log(x, y);

y.nome = 'Zeca';
console.log(x, y);