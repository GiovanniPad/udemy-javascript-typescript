// Aula 42 - Estrutura de Repetição for in


// const frutas = ['Pêra', 'Maçã', 'Uva'];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// for (let index in frutas) {
//     console.log(frutas[index]);
// }

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let chave in pessoa) {
    console.log(`${chave}:`, pessoa[chave]);
}

// console.log(pessoa.nome);
// console.log(pessoa['nome']);