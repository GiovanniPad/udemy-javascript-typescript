// Aula 53 - Criando um Timet com setInterval

function relogio() {
    const relogio = document.querySelector('.relogio');

    let timer = null;
    let contador = 0;
    const horaZero = new Date(0, 0, 0);

    function iniciarRelogio() {
        relogio.style.color = 'black';
        clearInterval(timer);
        if (contador === 0) relogio.innerText = horaZero.toLocaleTimeString('pt-BR');
        timer = setInterval(() => {
            contador++;
            relogio.innerText = `${new Date(horaZero.getTime() + (contador * 1000)).toLocaleTimeString('pt-BR')}`;
        }, 1000);
    }

    function pausarRelogio() {
        if (contador !== 0) {
            relogio.style.color = 'red';
            clearInterval(timer);
        }
    }

    function zerarRelogio() {
        relogio.style.color = 'black';
        contador = 0;
        clearInterval(timer);
        relogio.innerText = horaZero.toLocaleTimeString('pt-BR');
    }

    document.addEventListener('click', function(event) {
        const element = event.target;
        if (element.classList.contains('iniciar')) iniciarRelogio();
        if (element.classList.contains('pausar')) pausarRelogio();
        if (element.classList.contains('zerar')) zerarRelogio()  
    });
}

relogio();