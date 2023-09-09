// Se crea la clase para el constructor de usuarios.
class Usuarios {
    constructor({ nombre, apellido, mail, password }) {
        this.nombre = nombre
        this.apellido = apellido
        this.mail = mail
        this.password = password
    }
}

// Se declaran los componentes del register.
const formRegister = document.querySelector('#formRegister')
const inputNombre = document.querySelector('#inputNombre')
const inputApellido = document.querySelector('#inputApellido')
const inputMail = document.querySelector('#inputMail')
const inputPassword = document.querySelector('#inputPassword')

// Se declara un array para almacenar los usuarios.
const usuarios = []

// Se agrega la escucha del evento al formulario.
formRegister.addEventListener('submit', (event) => {
    // Evitamos la acción default del submit del formulario.
    event.preventDefault();

    // Se guardan los valores cargados en los campos.
    const nombre = inputNombre.value
    const apellido = inputApellido.value
    const mail = inputMail.value
    const password = inputPassword.value

    // Se crea un usuario a partir de los datos guardados.
    const nuevoUsuario = new Usuarios({ nombre, apellido, mail, password })

    // Se guarda el usuario creado en el local storage.
    usuarios.push(nuevoUsuario)
    localStorage.setItem('claveNuevoUsuario', JSON.stringify(usuarios))

    // Redirige al html de login.
    window.location.href = 'login.html';
})

