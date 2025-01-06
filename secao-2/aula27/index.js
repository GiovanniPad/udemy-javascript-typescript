// Aula 27 - Avaliação de Curto-Circuito (Short-Circuit)


console.log('Giovanni Padilha' && 0 && 'Beatriz');

console.log('Giovanni' && undefined && 'Beatriz');
console.log('Giovanni' && NaN && 'Beatriz');
console.log('Giovanni' && '' && 'Beatriz');

function falaOi () {
    return 'Oi';
}

let vaiExecutar = 'Zeca';

console.log(vaiExecutar && falaOi());

console.log(0 || false || null || 'Giovanni' || true);

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || c || d || e);