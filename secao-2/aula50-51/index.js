// Aula 50-51 - Tratando e lançando erros (try, catch, throw, finally)


// try {
//     console.log(naoExisto);
// } catch (err) {
//     console.log('naoExisto não existe.');
// }

// function soma(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw new TypeError('x e y precisam ser números');
//     }

//     return x + y;
// }

// try {
//     console.log(soma(1, 2));
//     console.log(soma('1', 2));
// } catch(error) {
//     console.log(error);
//     console.log('Alguma coisa mais amigável');
// }

// ----------

// try {
//     // console.log(a);
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');

//     try {
//         console.log(b);
//     } catch(e) {
//         console.log('Deu erro');
//     }

// } catch (e) {
//     console.log('Tratando o erro');
// } finally {
//     console.log('FINALLY: Eu sempre sou executado');
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch(e) {
    console.log('Deu erro');
} finally {
    console.log('Tenha um bom dia.');
}


