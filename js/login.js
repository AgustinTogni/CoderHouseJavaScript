// Se declaran los componentes del login.
const formLogin = document.querySelector('#formLogin')
const inputTuMail = document.querySelector('#inputTuMail')
const inputTuPassword = document.querySelector('#inputTuPassword')

const navRegister = document.querySelector('#navRegister')
const textoRegistrate = document.querySelector('#textoRegistrate')

const navLogin = document.querySelector('#navLogin')

// Verifica si hay datos de usuarios almacenados en el local storage.
const usuariosGuardados = JSON.parse(localStorage.getItem('claveNuevoUsuario'));

// Se establece una respuesta en base a si hay datos almacenados o no.
if (usuariosGuardados !== null) {
    navRegister.style.display = 'none';
    textoRegistrate.innerHTML = 'Ya tenes cuenta, solo ingresa tus datos!';
} else {
    navRegister.style.display = 'block';
    textoRegistrate.innerHTML = 'No tenes cuenta? Hace <a href="./register.html">click aca</a> y registrate!';
}

// Se agrega la escucha del evento al formulario de login.
formLogin.addEventListener('submit', (event) => {
    // Evita el comportamiento por defecto del formulario.
    event.preventDefault();

    // Obtiene los valores ingresados por el usuario.
    const mailIngresado = inputTuMail.value;
    const passwordIngresado = inputTuPassword.value;

    // Obtiene los usuarios guardados del localStorage.
    const usuariosGuardados = JSON.parse(localStorage.getItem('claveNuevoUsuario'));

    // Verifica si hay datos de usuarios almacenados.
    if (usuariosGuardados && usuariosGuardados.length > 0) {
        // Realiza la comparacion del mail y password ingresados con los datos almacenados.
        const usuarioEncontrado = usuariosGuardados.find((usuario) => {
            return usuario.mail === mailIngresado && usuario.password === passwordIngresado;
        });

        if (usuarioEncontrado) {
            // En caso de coincidir los datos se redirecciona al index html.
            window.location.href = '../index.html';
        } else {
            // En caso de no coincidir los datos aparece una alerta.
            textoRegistrate.innerHTML = 'Credenciales incorrectas. Verifica tu correo y contraseña.';
            textoRegistrate.className = 'alertas'
        }
    } else {
        // Si no hay datos de usuarios almacenados, muestra un mensaje de error.
        textoRegistrate.innerHTML = 'Esa cuenta no se encuentra registrada. Primero registrate haciendo click arriba a la derecha.';
        textoRegistrate.className = 'alertas'
    }
});



