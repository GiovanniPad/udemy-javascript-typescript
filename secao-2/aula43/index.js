// Aula 43 - Estruturas de Repetição for of e forEach


const nomes = ['Luiz', 'Otávio', 'Henrique'];

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]); 
// }

// for (const i in nome) {
//     console.log(nome[i]);
// }

// for (let valor of nomes) {
//     console.log(valor);
// }

// nomes.forEach(function (element, index, array) {
//     console.log(element, index, array);
// });

// nomes.forEach(element => {
//     console.log(element);
// });

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

for (let chave in pessoa) {
    console.log(chave);
}