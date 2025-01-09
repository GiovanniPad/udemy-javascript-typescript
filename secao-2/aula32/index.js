// Aula 32 - Operação Ternária


const pontuacaoUsuario = 1000;
const nivelUsuario = (pontuacaoUsuario) >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário normal');
// }

console.log(nivelUsuario, corPadrao);