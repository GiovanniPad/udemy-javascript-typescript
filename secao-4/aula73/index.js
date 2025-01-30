// Aula 73 - Reduce - Reduzindo o Array


// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const total = numeros.reduce((acumulador, valor) => acumulador += valor, 0);
// console.log(total);


// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 },
];

const pessoaMaisVelha = pessoas.reduce((acumulador, obj) => {
    if (acumulador.idade > obj.idade) return acumulador;
    return obj;
});
console.log(pessoaMaisVelha);