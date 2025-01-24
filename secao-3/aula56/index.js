// Aula 56 - Parâmetros da Função


// function funcao(a, b, c) {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }

//     console.log(total, a, b, c);
// }
// funcao(1, 2, 3, 4, 5, 6, 7);

// function funcao(a, b, c, d, e, f) {
//     console.log(a, b, c, d, e, f);
// }
// funcao(1, 2, 3);

// function funcao(a, b = 2, c = 4) {
//     // b = b || 0;
//     console.log(a + b + c);
// }
// funcao(2, 0, 20);

// function funcao({ nome, sobrenome, idade }, [valor1, valor2, valor3]) {
//     console.log(nome, sobrenome, idade);
//     console.log(valor1, valor2, valor3);
// }

// let obj = { nome: 'Luiz', sobrenome: 'Otávio', idade: 20 }
// let arr = ['Luiz Otávio', 'Miranda', 30]

// funcao(obj, arr);

const conta = (operador, acumulador, ...numeros) => {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }

    console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50);