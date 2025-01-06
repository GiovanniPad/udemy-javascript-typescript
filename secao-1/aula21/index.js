function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Giovanni');
console.log(variavel);


function soma(x = 1, y = 1) {
    let resultado = x + y;
    return resultado;
    console.log('Olá, Mundo!');
}

const resultado = soma(2, 2);

console.log(resultado);
console.log(soma());


const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(25));


const mult = (n) => {
    return n * 3;
}

console.log(mult(3));
console.log(mult(5));


const div = n => n / 2;

console.log(div(2));
console.log(div(4));