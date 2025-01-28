// Aula 68 - Revisão do Básico em Arrays


const nomes = ['Eduardo', 'Beatriz', 'Joana', 'Zeca', 'Joe', 'Nina'];
const novo = nomes;

const nomes2 = new Array('Zeca', 'Joe', 'Nina');

const copia = [...nomes];

nomes[2] = 'João';
// delete nomes[2];

novo.pop();
console.log(nomes.shift());

nomes.push('João');
nomes.unshift('Wallace');

console.log(nomes);
// console.log(copia);

const fatiado = nomes.slice(-5, -1);
console.log(fatiado);

const nome = 'Luiz Otávio Miranda';
const nomes3 = nome.split(' ');

const nome2 = nomes3.join(' ');

console.log(nomes3, nome2);

