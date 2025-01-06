// Aula 13 - Exercícios com Variáveis


let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let apoio;

apoio = varA;

varA = varB;
varB = varC;
varC = apoio;

// Maneira mais moderna de se resolver isso sem criar uma nova variável
//[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
