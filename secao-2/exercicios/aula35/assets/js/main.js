// Aula 35 - Exercício com Switch e Date


const result = document.querySelector('.container h1');
const dateNow = new Date();

// Solução 1 - Usando switch
const formatedDay = formatDayToString(dateNow.getDay());
const formatedMonth = formatMonthToString(dateNow.getMonth());

const formatedHours = insertLeftZero(dateNow.getHours());
const formatedMinutes = insertLeftZero(dateNow.getMinutes());
const formatedDate = insertLeftZero(dateNow.getDate());

result.innerHTML = `
    ${formatedDay}, 
    ${formatedDate} de 
    ${formatedMonth} de 
    ${dateNow.getFullYear()}
    ${formatedHours}:${formatedMinutes}
`;

function insertLeftZero(num) {
    return (num) >= 10 ? num : `0${num}`;
}

function formatDayToString(day) {
    switch (day) {
        case 0:
            day = 'Segunda-Feira';
            break;
        case 1:
            day = 'Terça-Feira';
            break;
        case 2:
            day = 'Quarta-Feira';
            break;
        case 3:
            day = 'Quinta-Feira';
            break;
        case 4:
            day = 'Sexta-Feira';
            break;
        case 5:
            day = 'Sábado';
            break;
        case 6:
            day = 'Domingo';
            break;
        default:
            day = 'Dia da semana inválido';
            break;
    }
    return day;
}

function formatMonthToString(month) {
    const meses = [
        'janeiro',
        'fevereiro',
        'março',
        'abril',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro'
    ]

    return meses[month];
}


// Solucão 2 - Usando toLocaleDateString. Mais recomendada!
const options = {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'America/Sao_Paulo'
};
const formatedDateTime = dateNow.toLocaleDateString('pt-BR', options);
result.innerHTML = formatedDateTime;