const primerDigito = document.querySelector('#primer_digito');
const segundoDigito = document.querySelector('#segundo_digito');
const tercerDigito = document.querySelector('#tercer_digito');
const btnValidar = document.querySelector('#btn_validar');
const textoResultado = document.querySelector('#texto_resultado'); 

btnValidar.addEventListener ('click', function (){
    const digitoUno = primerDigito.value;
    const digitoDos = segundoDigito.value;
    const digitoTres = tercerDigito.value; 

    const combinacion = digitoUno + digitoDos + digitoTres; 

    if (combinacion == '911') {
        textoResultado.innerHTML = 'Password 1 correcto!';
    } else if (combinacion == '714') {
        textoResultado.innerHTML = 'Password 2 correcto!'; 
    } else {
        textoResultado.innerHTML = 'Password incorrecto'; 
    }
})