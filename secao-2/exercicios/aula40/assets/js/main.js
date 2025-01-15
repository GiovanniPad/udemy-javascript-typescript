// Aula 40 - Exercício com for


const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container div');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    const { tag, texto } = elementos[i];

    const elemento = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    // elemento.innerText = texto;
    elemento.appendChild(textoCriado);
    div.appendChild(elemento);
}

container.appendChild(div);