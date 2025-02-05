// Aula 78 - Getters e Setters em Constructor Functions


function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem');
            }

            estoque = valor;
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 500;
console.log(p1.estoque);


// function criaProduto(nome) {
//     return {
//         get nome() {
//             return nome;
//         },
//         set nome(valor) {
//             nome = valor;
//         }
//     };
// }

// const p2 = criaProduto('Blusa');
// console.log(p2.nome)
// p2.nome = 'Qualquer coisa';
// console.log(p2.nome);