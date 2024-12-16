document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let num1 = parseFloat(document.getElementById('numero01').value);
    let num2 = parseFloat(document.getElementById('numero02').value);
    const operacion = document.getElementById('operacion').value;
    let resultado = 0; 

    switch(operacion){
        case 'suma':
            resultado = num1 + num2;
            break; 
        case 'resta': 
            resultado = num1 - num2; 
            break; 
        case 'multiplicacion':
            resultado = num1 * num2; 
            break;
        case 'division':
            if(num2 !== 0){
                resultado = num1 / num2; 
            }
            else {
                resultado = 'No se puede dividir por 0';
            }
            break; 
        default: 
            resultado = 'Operación no válida';
    }
    document.getElementById('resultado').value = resultado;
}); 