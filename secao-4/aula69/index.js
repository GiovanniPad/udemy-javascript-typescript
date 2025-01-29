// Aula 69 - Método Splice


const nomes = ['Beatriz', 'João', 'Eduardo', 'Gabriel', 'Zeca'];

// pop
// const removidos = nomes.splice(-1, 1);

// shift
// const removidos = nomes.splice(0, 1);

// push
// nomes.splice(nomes.length, 0, 'Luiz');

// unshift
nomes.splice(0, 0, 'Miranda');

console.log(nomes);