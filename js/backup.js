
// CODIGO UTILIZADO HASTA LA SEGUNDA PRE-ENTREGA.
// EN ESTE MOMENTO NO TIENE USO NI ESTA SIENDO EJECUTADO.

// Creacion de funciones
function multiplicador(tipoDeCambio, cantidadDivisa) {
    const operacion = tipoDeCambio * cantidadDivisa;
    return operacion;
}

function validarDivisa(divisa) {
    return divisa === 'Dolar' || divisa === 'Euro' || divisa === 'Yuan';
}

function validarRespuesta(respuesta) {
    return respuesta === 'si' || respuesta === 'no';
}

// Cracion de clases.
class Divisas {
    constructor(nombre, valor) {
        this.nombre = nombre;
        this.valor = valor;
    }
}

// Se crea el array junto a las divisas.
const divisas = [
    new Divisas('Dolar', 605),
    new Divisas('Euro', 315),
    new Divisas('Yuan', 40)
];

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
    cantidadDivisa = parseFloat(prompt('La cantidad ingresada no es valida. Por favor, ingresa cantidad quieres convertir'));
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
}

// Se devuelve el resultado.
if (divisa !== 0) {
    const resultado = multiplicador(tipoDeCambio, cantidadDivisa);
    alert(`El resultado de la conversión es: ${resultado}`);
}

// Se pregunta que quiere realizar el usuario.
let respuesta = prompt('¿Quieres saber el precio de todas las divisas que tenemos? si/no');

// Se verifica que la respuesta del usuario esté dentro de los parámetros esperados.
while (!validarRespuesta(respuesta)) {
    respuesta = prompt('La respuesta ingresada no es válida, por favor, ingresa si o no.');
}

// En caso de que el usuario haya dado como respuesta si, se devuelven los valores de las divisas.
if (respuesta === 'si') {
    // Se muestran las divisas.
    for (const divisa of divisas) {
        alert(`El ${divisa.nombre} tiene un valor de ${divisa.valor} pesos por unidad.`);
    }
} else {
    alert('¡Gracias, vuelva pronto!');
}



