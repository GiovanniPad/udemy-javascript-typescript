// Aula 95 - Métodos Úteis para Promises


function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('BAD VALUE');
            return
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

// const promises = [
//     esperaAi('Promise 1', 3000),
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000),
// ];

// Promise.all(promises)
//     .then(valor => {
//         console.log(valor);
//     })
//     .catch(erro => {
//         console.log(erro);
//     });

// Promise.race(promises)
//     .then(valor => {
//         console.log(valor);
//     })
//     .catch(erro => {
//         console.log(erro);
//     });

function baixaPagina() {
    const emCache = false;

    if (emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return Promise.reject('Página não está em cache');
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e));