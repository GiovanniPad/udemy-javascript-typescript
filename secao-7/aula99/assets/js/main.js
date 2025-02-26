// Aula 99 - Fetch API e Axios (JSON)


function carregaElementosNaPagina(json) {
    const table = document.createElement('table');

    for (let pessoa of json) {
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);
        
        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);
        
        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}

axios('pessoas.json').then(resposta => carregaElementosNaPagina(resposta.data));