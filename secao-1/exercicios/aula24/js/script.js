// Aula 24 - Exercício com Funções, Arrays e Objetos


function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    
    const pessoas = [];

    // Maneira de "vigiar" um evento. Mais antiga, menos recomendada
    //form.onsubmit = function (event) {
        // Previne o envio padrão do formulário
        //event.preventDefault();
        //alert(1);
    //};

    function recebeEventoForm (event) {
        event.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };

        pessoas.push(pessoa);
        console.log(pessoas);
              
        resultado.innerHTML += `<p>${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso} ${pessoa.altura}</p>`
    }

    // Maneira mais recomendada de criar um event listener em um evento
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();