// Aula 37 - Atribuição via Desestruturação (arrays)


// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const numeros = [1, 2, 3];
// [a, b, c] = numeros;

// console.log(a, b, c);

// --------------

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [um, , tres, , cinco, , sete] = numeros;
// console.log(um, tres, cinco, sete);

const numeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const [,[,,seis]] = numeros;
console.log(seis);

const [lista1, lista2, lista3] = numeros;
console.log(lista2[2]);