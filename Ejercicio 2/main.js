const variableUno = document.querySelector ('#primera_variable');
const variableDos = document.querySelector ('#segunda_variable');
const variableTres = document.querySelector ('#tercera_variable');
const btnValidar = document.querySelector ('.btn_validar');
const textoResultado = document.querySelector ('#texto_resultado');

btnValidar.addEventListener('click', function (){
    const valorUno = Number(variableUno.value);
    const valorDos = Number(variableDos.value);
    const valorTres = Number(variableTres.value);

    const total = Number(variableUno.value) + Number(variableDos.value) + Number(variableTres.value);

    if (total > 10) {
        textoResultado.innerHTML = 'Llevas demasiados Stickers';
    } else {
        textoResultado.innerHTML = `Llevas ${total} stickers`;
    }
})