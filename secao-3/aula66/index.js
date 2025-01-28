// Aula 66 - Funções Recursivas


function recursiva(max) {
    if (max > 7000) return;
    
    console.log(max);
    max++;

    recursiva(max);
}

recursiva(-10);