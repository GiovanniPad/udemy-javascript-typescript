// Aula 75 - forEach


const a1 = [10, 20, 30];

// for (const valor of a1) {
//     console.log(valor);
// }


let total = 0;
a1.forEach(valor => {
    total += valor;
});
console.log(total);