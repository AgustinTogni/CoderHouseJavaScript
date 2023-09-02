
//EN DESARROLLO PARA 3ER PRE-ENTREGA.

// Creamos la clase para el constructor de divisas.
class Divisas {
    constructor(nombre, valor) {
        this.nombre = nombre;
        this.valor = valor;
    }
}

// Se crea el array con las divisas.
const dolares = [
    new Divisas('Oficial', 357),
    new Divisas('Blue', 725),
    new Divisas('Tarjeta', 642),
    new Divisas('CCL', 768),
    new Divisas('MEP', 670),
    new Divisas('Mayorista', 349),
]

const divisas = [
    new Divisas('Euro', 377),
    new Divisas('Real', 71),
    new Divisas('Yuan', 48),
    new Divisas('Libra', 440),
    new Divisas('Franco', 395),
    new Divisas('Yen', 2.4),
]

// Se declaran los componentes del conversor.
const form = document.querySelector('#form')
const inputCantidad = document.querySelector('#inputCantidad')
const alertaCompleta = document.querySelector('#alertaCompleta')

const submitDolar = document.querySelector('#submitDolar')
const submitDivisas = document.querySelector('#submitDivisas')
const submitPeso = document.querySelector('#submitPeso')

const paridad = document.querySelector('#paridad')

const divisaDolarOficial = document.querySelector('#divisaDolarOficial')
const divisaDolarBlue = document.querySelector('#divisaDolarBlue')
const divisaDolarTarjeta = document.querySelector('#divisaDolarTarjeta')
const divisaDolarCCL = document.querySelector('#divisaDolarCCL')
const divisaDolarMEP = document.querySelector('#divisaDolarMEP')
const divisaDolarMayorista = document.querySelector('#divisaDolarMayorista')

const valorDolarOficial = document.querySelector('#valorDolarOficial')
const valorDolarBlue = document.querySelector('#valorDolarBlue')
const valorDolarTarjeta = document.querySelector('#valorDolarTarjeta')
const valorDolarCCL = document.querySelector('#valorDolarCCL')
const valorDolarMEP = document.querySelector('#valorDolarMEP')
const valorDolarMayorista = document.querySelector('#valorDolarMayorista')

// Se declara una funcion para darle el formato requerido a los resultados.
function formatearNumero(numero) {
    const partes = numero.toFixed(2).toString().split('.');
    const parteEntera = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const parteDecimal = partes[1];
    return parteEntera + ',' + parteDecimal;
}

// ---------------------------- Dolares a pesos ----------------------------

// Se declara un objeto para almacenar los resultados de los dolares.
const resultadosDolares = {};

// Se agrega la escucha del evento al formulario.
submitDolar.addEventListener('click', (event) => {
    // Evitamos la acción default del submit del formulario.
    event.preventDefault();

    // Se reemplaza la aclaracion de paridad.
    paridad.innerHTML = 'USD - ARS'

    // Se reemplazan los dolares por las nuevas divisas.
    divisaDolarOficial.innerHTML = 'Oficial'
    divisaDolarBlue.innerHTML = 'Blue'
    divisaDolarTarjeta.innerHTML = 'Tarjeta'
    divisaDolarCCL.innerHTML = 'CCL'
    divisaDolarMEP.innerHTML = 'MEP'
    divisaDolarMayorista.innerHTML = 'Mayorista'

    // Se toma el valor ingresado en "inputCantidad" y se convierte en un número.
    const cantidad = parseFloat(inputCantidad.value);

    // Se recorre el array de los dolares y se realiza el calculo.
    if (!isNaN(cantidad)) {
        if (cantidad !== 0) {
            for (const dolar of dolares) {
                resultadosDolares[dolar.nombre] = cantidad * dolar.valor;
                alertaCompleta.innerHTML = '';
            }
        } else {
            // Muestra una alerta si el valor es 0.
            alertaCompleta.innerHTML = 'El valor no puede ser 0.';

            // Establece los resultados en 0.
            for (const dolar of dolares) {
                resultadosDolares[dolar.nombre] = 0;
            }
        }
    } else {
        // Muestra una alerta si el valor no es un número válido.
        alertaCompleta.innerHTML = 'Completa el campo con un valor numérico.';

        // Establece los resultados en 0.
        for (const dolar of dolares) {
            resultadosDolares[dolar.nombre] = 0;
        }
    }

    // Se formatean los resultados con puntos como separadores de miles.
    valorDolarOficial.innerHTML = '$' + formatearNumero(resultadosDolares['Oficial']);
    valorDolarBlue.innerHTML = '$' + formatearNumero(resultadosDolares['Blue']);
    valorDolarTarjeta.innerHTML = '$' + formatearNumero(resultadosDolares['Tarjeta']);
    valorDolarCCL.innerHTML = '$' + formatearNumero(resultadosDolares['CCL']);
    valorDolarMEP.innerHTML = '$' + formatearNumero(resultadosDolares['MEP']);
    valorDolarMayorista.innerHTML = '$' + formatearNumero(resultadosDolares['Mayorista']);
})

// ---------------------------- Pesos a divisas ----------------------------

// Se declara un objeto para almacenar los resultados de las divisas.
const resultadosDivisas = {};

// Se agrega la escucha del evento al formulario.
submitDivisas.addEventListener('click', (event) => {
    // Evitamos la acción default del submit del formulario.
    event.preventDefault();

    // Se reemplaza la aclaracion de paridad.
    paridad.innerHTML = 'DVS - ARS'

    // Se reemplazan los dolares por las nuevas divisas.
    divisaDolarOficial.innerHTML = 'Euro'
    divisaDolarBlue.innerHTML = 'Real'
    divisaDolarTarjeta.innerHTML = 'Yuan'
    divisaDolarCCL.innerHTML = 'Libra'
    divisaDolarMEP.innerHTML = 'Franco'
    divisaDolarMayorista.innerHTML = 'Yen'

    // Se toma el valor ingresado en "inputCantidad" y se convierte en un número.
    const cantidad = parseFloat(inputCantidad.value);

    // Se recorre el array de las divisas y se realiza el calculo.
    if (!isNaN(cantidad)) {
        if (cantidad !== 0) {
            for (const divisa of divisas) {
                resultadosDivisas[divisa.nombre] = cantidad * divisa.valor;
                alertaCompleta.innerHTML = '';
            }
        } else {
            // Muestra una alerta si el valor es 0.
            alertaCompleta.innerHTML = 'El valor no puede ser 0.';

            // Establece los resultados en 0.
            for (const divisa of divisa) {
                resultadosDivisas[divisa.nombre] = 0;
            }
        }
    } else {
        // Muestra una alerta si el valor no es un número válido.
        alertaCompleta.innerHTML = 'Completa el campo con un valor numérico.';

        // Establece los resultados en 0.
        for (const divisa of divisa) {
            resultadosDivisas[divisa.nombre] = 0;
        }
    }

    // Se formatean los resultados con puntos como separadores de miles.
    valorDolarOficial.innerHTML = '$' + formatearNumero(resultadosDivisas['Euro']);
    valorDolarBlue.innerHTML = '$' + formatearNumero(resultadosDivisas['Real']);
    valorDolarTarjeta.innerHTML = '$' + formatearNumero(resultadosDivisas['Yuan']);
    valorDolarCCL.innerHTML = '$' + formatearNumero(resultadosDivisas['Libra']);
    valorDolarMEP.innerHTML = '$' + formatearNumero(resultadosDivisas['Franco']);
    valorDolarMayorista.innerHTML = '$' + formatearNumero(resultadosDivisas['Yen']);
})

// ---------------------------- Pesos a dolares ----------------------------

// Se declara un objeto para almacenar los resultados de los dolares.
const resultadosPesos = {};

// Se agrega la escucha del evento al formulario.
submitPeso.addEventListener('click', (event) => {
    // Evitamos la acción default del submit del formulario.
    event.preventDefault();

    // Se reemplaza la aclaracion de paridad.
    paridad.innerHTML = 'ARS - USD'

    // Se reemplazan los dolares por las nuevas divisas.
    divisaDolarOficial.innerHTML = 'Oficial'
    divisaDolarBlue.innerHTML = 'Blue'
    divisaDolarTarjeta.innerHTML = 'Tarjeta'
    divisaDolarCCL.innerHTML = 'CCL'
    divisaDolarMEP.innerHTML = 'MEP'
    divisaDolarMayorista.innerHTML = 'Mayorista'

    // Se toma el valor ingresado en "inputCantidad" y se convierte en un número.
    const cantidad = parseFloat(inputCantidad.value);

    // Se recorre el array de los dolares y se realiza el calculo.
    if (!isNaN(cantidad)) {
        if (cantidad !== 0) {
            for (const dolar of dolares) {
                resultadosPesos[dolar.nombre] = cantidad / dolar.valor;
                alertaCompleta.innerHTML = '';
            }
        } else {
            // Muestra una alerta si el valor es 0.
            alertaCompleta.innerHTML = 'El valor no puede ser 0.';

            // Establece los resultados en 0.
            for (const dolar of dolares) {
                resultadosPesos[dolar.nombre] = 0;
            }
        }
    } else {
        // Muestra una alerta si el valor no es un número válido.
        alertaCompleta.innerHTML = 'Completa el campo con un valor numérico.';

        // Establece los resultados en 0.
        for (const dolar of dolares) {
            resultadosPesos[dolar.nombre] = 0;
        }
    }

    // Se formatean los resultados con puntos como separadores de miles.
    valorDolarOficial.innerHTML = '$' + formatearNumero(resultadosPesos['Oficial']);
    valorDolarBlue.innerHTML = '$' + formatearNumero(resultadosPesos['Blue']);
    valorDolarTarjeta.innerHTML = '$' + formatearNumero(resultadosPesos['Tarjeta']);
    valorDolarCCL.innerHTML = '$' + formatearNumero(resultadosPesos['CCL']);
    valorDolarMEP.innerHTML = '$' + formatearNumero(resultadosPesos['MEP']);
    valorDolarMayorista.innerHTML = '$' + formatearNumero(resultadosPesos['Mayorista']);
})



