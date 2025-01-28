// Aula 65 - Calculadora com Constructor Functions


function Calculadora() {
    const display = document.querySelector('.display');
    const calculadora = document.querySelector('.calculadora');

    this.inicia = () => this.capturaCliques();
    this.clear = () => display.value = '';
    this.del = () => display.value = display.value.slice(0, -1);
    this.addNumDisplay = valor => display.value += valor;

    this.realizaConta = () => {
        let conta = display.value;

        try {
            conta = eval(conta);

            if(!conta) {
                alert('Conta inválida');
                return;
            }

            display.value = String(conta);
        } catch (e) {
            alert('Conta inválida');
            return;
        }
    };

    this.capturaCliques = () => {
        calculadora.addEventListener('click', event => {
            const el = event.target;

            if(el.classList.contains('btn-num')) this.addNumDisplay(el.innerText);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del();
            if(el.classList.contains('btn-eq')) this.realizaConta();

            display.focus();
        });

        document.addEventListener('keyup', event => {
            if(event.key === 'Enter') this.realizaConta();
        });
    };
}

const calculadora = new Calculadora();
calculadora.inicia();