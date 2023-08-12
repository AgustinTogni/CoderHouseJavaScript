// Creacion de funciones
function multiplicador(tipoDeCambio, cantidadDivisa) {
    const operacion = tipoDeCambio * cantidadDivisa;
    return operacion;
}

function validarDivisa(divisa) {
    return divisa === 'Dolar' || divisa === 'Euro' || divisa === 'Yuan';
}

// -------------------------------------------------------------------------------

alert('Bienvenido a tu conversor de confianza!');

// Se ingresa la divisa a convertir.
let divisa = prompt('Que divisa quieres convertir a pesos: Dolar, Euro o Yuan');

// Se verifica que sea valida.
while (!validarDivisa(divisa)) {
    divisa = prompt('La divisa ingresada no es valida. Por favor, ingresa Dolar, Euro o Yuan.');
}

// Se ingresa la cantidad de la divisa a convertir.
let cantidadDivisa = parseFloat(prompt('Que cantidad quieres convertir?'));

// Se verifica que la cantidad sea valida.
while (isNaN(cantidadDivisa)) {
    cantidadDivisa = parseFloat(prompt('La cantidad ingresada no es valida. Por favor, ingresa  cantidad quieres convertir'));
}

// Se crea la variable del tipo de cambio.
let tipoDeCambio = 0

// Se le da un valor a la variable segun la respuesta del cliente.
if (divisa === 'Dolar') {
    tipoDeCambio = 605;
} else if (divisa === 'Euro') {
    tipoDeCambio = 315;
} else if (divisa === 'Yuan') {
    tipoDeCambio = 40;
} else {
    alert('Solo podemos convertir Dolar, Euro o Yuan en este momento.');
}

// Se devuelve el resultado.
if (divisa !== 0) {
    const resultado = multiplicador(tipoDeCambio, cantidadDivisa);
    alert(`El resultado de la conversión es: ${resultado}`);
}

alert('Gracias, vuelva pronto!');



