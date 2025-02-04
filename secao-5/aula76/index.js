// Aula 76 - Revisando Objetos


// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio'
// };
// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);

// const chave = 'nome';
// console.log(pessoa[chave]);

// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otávio';
// pessoa1.idade = 23;
// pessoa1.falarNome = function() {
//     return (`${this.nome} está falando seu nome.`);
// };

// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// delete pessoa1.nome;
// console.log(pessoa1);

// console.log(pessoa1.getDataNascimento());

// for (let chave in pessoa1) {
//     console.log(pessoa1[chave]);
// }

// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Luiz', 'Otávio');
// console.log(p1.nomeCompleto);

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p1 = new Pessoa('Luiz', 'Miranda');
Object.freeze(p1);
const p2 = new Pessoa('Maria', 'Miranda');

p1.nome = 'Giovanni';
console.log(p1);

p2.nome = 'Beatriz';
console.log(p2);