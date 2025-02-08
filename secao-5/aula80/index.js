// Aula 80 - Prototypes


function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

// Pessoa.prototype === pessoa1.__proto__

const pessoa1 = new Pessoa('Giovanni', 'P.');
const pessoa2 = new Pessoa('Beatriz', 'R.');
const data = new Date();

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);

