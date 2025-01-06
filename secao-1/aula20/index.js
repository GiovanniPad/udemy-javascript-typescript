// Aula 20 - Const com Valores Mutáveis


const nome = 'Giovanni';
//nome = 'Beatriz'; // Erro: Assignment to constant variable

// Isso pode
const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array);

// Isso NÃO pode
//array = 'legal'; // Erro: Assignment to constant variable