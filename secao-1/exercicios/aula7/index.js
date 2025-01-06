// Aula 7 - Exercícios com const, let e Template String


const nome = 'Giovanni Padilha';
const idade = 23;
const peso = 89;
const alturaEmM = 1.73;

let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2024 - idade;

console.log(`${nome} tem ${idade} anos, pesa ${peso}kg tem ${alturaEmM}m de altura e seu IMC é de ${indiceMassaCorporal}.`);

// Template String
console.log(`${nome} nasceu em ${anoNascimento}.`);