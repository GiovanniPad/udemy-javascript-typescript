// Aula 98 - Fetch API (GET)


document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');
        const response = await (await fetch(href)).text();
    
        carregaResultado(response);
    } catch(error) {
        console.error(error);
    }
}
