let string1 = 'Um \'texto\'';
let string2 = 'Um \\texto';
let string3 = 'Um texto qualquer. Um outro texto qualquer.';

console.log(string1);
console.log(string2);
console.log(string2[0]);

console.log(string3.charAt(4)); // igual a string3[4]

// Formas de concatenação
console.log(string3.concat(' qualquer', ', concatenado'));
console.log(string3 + ' qualquer, concatenado');
console.log(`${string3} qualquer, concatenado`);

// Coleta de índices
console.log(string3.indexOf('texto', 3));
console.log(string3.lastIndexOf('texto'));

// Uso de expressões regulares
console.log(string3.match(/[a-z]/));
console.log(string3.search(/x/));
console.log(string3.replace(/Um/g, '#'));

// Retornando tamanho da string
console.log(string3.length);

// Fatiamentos
console.log(string3.slice(3, 6));
console.log(string3.slice(-4));
console.log(string3.slice(12));
console.log(string3.slice(-4, -1));
console.log(string3.substring(string3.length - 4));

// Dividir uma string
console.log(string3.split(' ', 2));

// Caracteres todos maiúsculos ou minúsculos
console.log(string3.toUpperCase());
console.log(string3.toLowerCase());