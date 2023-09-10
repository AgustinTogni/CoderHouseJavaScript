// Se crea la clase para el constructor de usuarios.
class Usuarios {
    constructor({ nombre, apellido, mail, password }) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.password = password;
    }
}

// Se declaran los componentes del register.
const formRegister = document.querySelector('#formRegister');
const inputNombre = document.querySelector('#inputNombre');
const inputApellido = document.querySelector('#inputApellido');
const inputMail = document.querySelector('#inputMail');
const inputPassword = document.querySelector('#inputPassword');
const inputNombreApellido = document.querySelector('#inputNombreApellido');

// Se crea un elemento "p" para mostrar el mensaje de error.
const p = document.createElement('p');
p.textContent = 'Completa el campo.';
p.className = 'alertas';

// Se declara un array para almacenar los usuarios.
const usuarios = [];

// Se agrega la escucha del evento al formulario.
formRegister.addEventListener('submit', (event) => {
    // Evitamos la acción default del submit del formulario.
    event.preventDefault();

    // Se guardan los valores cargados en los campos.
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const mail = inputMail.value;
    const password = inputPassword.value;

    // Verificamos si los campos nombre y apellido están vacíos.
    if (nombre.trim() === '' || apellido.trim() === '') {

        // Insertamos el mensaje de error antes del inputNombreApellido.
        inputNombreApellido.parentNode.insertBefore(p, inputNombreApellido.nextSibling);

    } else if (mail.trim() === '') {

        // Insertamos el mensaje de error antes del inputMail.
        inputMail.parentNode.insertBefore(p, inputMail.nextSibling);

    } else if (password.trim() === '') {

        // Insertamos el mensaje de error antes del inputPassword.
        inputPassword.parentNode.insertBefore(p, inputPassword.nextSibling);

    } else {

        // Eliminamos cualquier mensaje de error existente.
        const mensajeError = inputNombreApellido.nextSibling;
        if (mensajeError) {
            mensajeError.remove();
        }

        // Se crea un usuario a partir de los datos guardados.
        const nuevoUsuario = new Usuarios({ nombre, apellido, mail, password });

        // Se guarda el usuario creado en el local storage.
        usuarios.push(nuevoUsuario);
        localStorage.setItem('claveNuevoUsuario', JSON.stringify(usuarios));

        // Redirige al HTML de login.
        window.location.href = 'login.html';
    }
});


