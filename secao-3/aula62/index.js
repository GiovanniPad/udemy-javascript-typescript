// Aula 62 - Funções Fábrica (Factory Functions)


function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura,
        peso,
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Giovanni', 'Padilha', 1.8, 80);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);

p1.nomeCompleto = 'Beatriz Alexia Padilha';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala('falando sobre JS'));