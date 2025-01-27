// Aula 64 - Funções Construtoras (Constructor Functions)


function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function() {
        console.lo
    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Giovanni', 'Padilha');
const p2 = new Pessoa('Beatriz', 'Ricci');

console.log(p1.nome);
console.log(p2.nome);

p1.metodo();

console.log(p1.ID);