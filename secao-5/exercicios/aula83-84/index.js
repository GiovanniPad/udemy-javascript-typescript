// Aula 83-84 - Exercício - Validando um CPF (Algoritmo)


/*
705.484.450-52

7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número dígito for maior que 9, considera-se 0.

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11  10  9   8   7   6   5   4   3   2
77  0   45  32  56  24  20  20  0   10 = 284

11 - (284 % 11) = 2 (Segundo dígito)
Se o número dígito for maior que 9, considera-se 0.

705.484.450-52 === 705.484.450-52 (Válido)
705.484.450-52 !== 703.484.450-52 (Inválido)
*/

// Minha solução
const validaCpf = (cpf) => {
    if (typeof cpf === "undefined") return false;

    const cpfInicial = cpf.replace(/\D+/g, '');

    if (cpfInicial.length !== 11) return false;
    if (cpfInicial[0].repeat(cpfInicial.length) === cpfInicial) return false;

    const cpfArray = Array.from(cpfInicial).slice(0, -2);

    const acumulador = (cpfArray, contador) => {
        const total = cpfArray.reduce((ac, valor) => {
            valor = Number(valor);

            ac += (valor * contador);
            contador--;

            return ac;
        }, 0);
        let digito = 11 - (total % 11);
        digito = digito > 9 ? 0 : digito;

        cpfArray.push(digito.toString());

        if (cpfArray.length === 11) return cpfArray;
        return acumulador(cpfArray, 11);
    }
    const cpfFinal = acumulador(cpfArray, 10).join('');
    return cpfInicial === cpfFinal;
}
console.log(validaCpf('705.484.450-52'));

// Solução professor
// function ValidaCPF(cpfEnviado) {
//     Object.defineProperty(this, 'cpfLimpo', {
//         enumerable: true,
//         get: function() {
//             return cpfEnviado.replace(/\D+/g, '');
//         }
//     });
// }

// ValidaCPF.prototype.valida = function() {
//     if (typeof this.cpfLimpo === "undefined") return false;
//     if (this.cpfLimpo.length !== 11) return false;
//     if (this.isSequencia()) return false;

//     const cpfParcial = this.cpfLimpo.slice(0, -2);
//     const digito1 = this.criaDigito(cpfParcial);
//     const digito2 = this.criaDigito(cpfParcial + digito1);
    
//     const novoCpf = cpfParcial + digito1 + digito2;

//     return novoCpf === this.cpfLimpo;
// };

// ValidaCPF.prototype.criaDigito = function(cpfParcial) {
//     const cpfArray = Array.from(cpfParcial);
//     let regressivo = cpfArray.length + 1;
//     const total = cpfArray.reduce((ac, val) => {
//         ac += (regressivo * Number(val));
//         regressivo--;
//         return ac;
//     }, 0);

//     const digito = 11 - (total % 11);
//     return digito > 9 ? '0': String(digito);
// };

// ValidaCPF.prototype.isSequencia = function() {
//     return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
// };

// const cpf = new ValidaCPF('705.484.450-52');
// console.log(cpf.valida());