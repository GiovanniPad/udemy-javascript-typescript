// Aula 19 - Arrays (Básico)


const alunos = ['Giovanni', 'Beatriz', 'Zeca'];

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);

alunos[0] = 'Alexia';
alunos[3] = 'Ricci';
console.log(alunos[0]);
console.log(alunos[3]);

console.log(alunos.length);

alunos[alunos.length] = 'Abigail';
console.log(alunos[4]);

alunos.push('Padilha');
console.log(alunos);

alunos.unshift('Luiz');
console.log(alunos);

const removidoPop = alunos.pop();
console.log(alunos);
console.log(removidoPop);

const removidoShift = alunos.shift();
console.log(alunos);
console.log(removidoShift);

delete alunos[1];
console.log(alunos);

console.log(alunos[50]);

console.log(alunos.slice(0, 3));
console.log(alunos.slice(0, -1));

console.log(typeof alunos);
console.log(alunos instanceof Array);