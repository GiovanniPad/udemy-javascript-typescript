// Aula 31 - Exercício com tudo Aprendido


const form = document.querySelector('#formulario');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let inputPeso = event.target.querySelector('#peso');
    let inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso || peso === 0) {
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura || altura === 0) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `seu IMC é ${imc} (${nivelImc}).`;
    
    setResultado(msg, true);
});

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();

    if (isValid) {
        p.classList.add('valid-result');
    } else {
        p.classList.add('invalid-result');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

function getImc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

function getNivelImc(imc) {
    const nivel = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3'
    ];

    if (imc >= 40) return nivel[5];
    if (imc >= 35) return nivel[4];
    if (imc >= 30) return nivel[3];
    if (imc >= 25) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}