// Aula 55 - Formas de Declarar Funções em JavaScript


falaOi();

function falaOi() {
    console.log('Oie');
}

// First-class objects (objetos de primeira classe)
// Function expression
const souUmDado = function() {
    console.log('Sou um dado.');
};
// souUmDado();

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:');
    funcao();
}
executaFuncao(souUmDado);

// Arrow Function
const funcaoArrow = () => {
    console.log('Sou uma Arrow Function');
}
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};

obj.falar();