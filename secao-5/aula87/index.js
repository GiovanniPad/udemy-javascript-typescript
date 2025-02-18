// Aula 87 - Objeto Map()


const pessoas = [
    { id: 3, nome: 'Luiz' },
    { id: 2, nome: 'Giovanni' },
    { id: 1, nome: 'Beatriz' },
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);

console.log("-----");

for (const [identifier, { id, nome }] of novasPessoas) {
    console.log(identifier, id, nome);
}

console.log("-----");

for (const pessoa of novasPessoas.keys()) {
    console.log(pessoa);
}

console.log("-----");

for (const pessoa of novasPessoas.values()) {
    console.log(pessoa);
}

console.log("-----");

novasPessoas.delete(2);
console.log(novasPessoas);