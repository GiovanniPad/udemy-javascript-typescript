// Aula 22 - Objetos (Introdução)


function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,

        fala() {
            console.log(`Eu me chamo ${this.nome} ${this.sobrenome}!`);
        },

        incrementaIdade() {
            this.idade++;
        }
    };
}

const pessoa1 = criaPessoa('Giovanni', 'Padilha', 23);
const pessoa2 = criaPessoa('Beatriz', 'Ricci', 21);
const pessoa3 = criaPessoa('Zeca', 'Joe', 10);

console.log(pessoa1.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa3.idade);

pessoa2.fala();

pessoa3.incrementaIdade();
console.log(pessoa3.idade);
pessoa3.incrementaIdade();
console.log(pessoa3.idade);