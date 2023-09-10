// Se declaran los componentes del login.
const formLogin = document.querySelector('#formLogin');
const inputTuMail = document.querySelector('#inputTuMail');
const inputTuPassword = document.querySelector('#inputTuPassword');

const navRegister = document.querySelector('#navRegister');
const textoRegistrate = document.querySelector('#textoRegistrate');

const navLogin = document.querySelector('#navLogin');

// Se crea un elemento "p" para mostrar el mensaje de error.
const p = document.createElement('p');
p.textContent = 'Completa el campo.';
p.className = 'alertas';

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

    if (mailIngresado.trim() === '') {
        // Insertamos el mensaje de error antes del inputTuMail.
        inputTuMail.parentNode.insertBefore(p, inputTuMail.nextSibling);
    } else if (passwordIngresado.trim() === '') {
        // Insertamos el mensaje de error antes del inputTuPassword.
        inputTuPassword.parentNode.insertBefore(p, inputTuPassword.nextSibling);
    } else {
        // Verifica si hay datos de usuarios almacenados.
        if (usuariosGuardados && usuariosGuardados.length > 0) {
            // Realiza la comparación del mail y password ingresados con los datos almacenados.
            const usuarioEncontrado = usuariosGuardados.find((usuario) => {
                return usuario.mail === mailIngresado && usuario.password === passwordIngresado;
            });

            if (usuarioEncontrado) {
                // En caso de coincidir los datos se redirecciona al index html.
                window.location.href = '../index.html';
            } else {
                // En caso de no coincidir los datos aparece una alerta.
                textoRegistrate.innerHTML = 'Credenciales incorrectas. Verifica tu correo y contraseña.';
                textoRegistrate.className = 'alertas';
            }
        } else {
            // Se borra cualquier mensaje de error presente.
            if (p !== '') {
                p.remove();
            }

            // Si no hay datos de usuarios almacenados, muestra un mensaje de error.
            textoRegistrate.innerHTML = 'Esa cuenta no existe aún, hace <a href="./register.html">click acá</a> y registrate!';
            textoRegistrate.className = 'alertas';
        }
    }
});




