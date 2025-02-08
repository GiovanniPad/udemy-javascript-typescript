// Aula 79 - Métodos Úteis para Objetos


const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana' };

// const caneca = { 
//     ...produto,
//     material: 'porcelana'
// };
// const caneca = Object.assign({}, produto);
// caneca.nome = 'Caneca';
// caneca.preco = 2.5;

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

console.log(Object.values(produto));

console.log(Object.entries(produto));

for (let [chave, valor] of Object.entries(produto)) {
    console.log(`${chave}: ${valor}`);
};