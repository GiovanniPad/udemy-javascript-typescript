// Aula 38 - Atribuição via Desestruturação (Objetos)


const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// const { nome: teste = 'Não existe', sobrenome } = pessoa;
// console.log(teste, sobrenome);

// const { endereco: { rua: r = 12345, numero }, endereco } = pessoa;
// console.log(r, numero, endereco);

const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, sobrenome, resto);