// Aula 47-48-49 - Exercícios com Lógica de Programação


// Exercício 1
const max = (num1, num2) => (num1 > num2) ? num1 : num2;

console.log(max(21, 5));

// Exercício 2
const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1920, 1080));

// Exercício 3
function fizzBuzz(num) {
    if (typeof num !== 'number') {
        return num;
    }
    
    const eDivisivelPorTres = num % 3 === 0;
    const eDivisivelPorCinco = num % 5 === 0;

    if (eDivisivelPorTres && eDivisivelPorCinco) return 'FizzBuzz';
    if (eDivisivelPorTres) return 'Fizz';
    if (eDivisivelPorCinco) return 'Buzz';

    return num;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}