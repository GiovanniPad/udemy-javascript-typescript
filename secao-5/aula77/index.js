// Aula 77 - Object.defineProperty() e Object.defineProperties()


function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor da chave
        writable: false, // pode alterar ou não o valor
        configurable: true // pode ou não reconfigurar a chave
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true,
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true,
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);

p1.estoque = 500;
console.log(p1);