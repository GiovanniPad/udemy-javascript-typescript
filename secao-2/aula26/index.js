// Aula 26 - Operadores Lógicos


const expressaoAnd = true && true && true;
console.log(expressaoAnd);
console.log(true && false && true);

const expressaoOr = true || true;
console.log(expressaoOr);
console.log(false || true || false);
console.log(false || false || false);

const usuario = 'Giovanni';
const senha = '123456';

const vaiLogar = usuario === 'Giovanni' && senha === '12345';
console.log(vaiLogar);

console.log(!!!false);
console.log(!true);