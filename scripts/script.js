const boton = document.getElementById('miBoton');
const body = document.getElementById('miBody');
const icono = boton.querySelector('.bi');
let fondoNegro = false;

// Función para cambiar entre el fondo y los iconos
function cambiarFondoYIconos() {
    fondoNegro = !fondoNegro;

    if (fondoNegro) {
        body.style.backgroundColor = '#212529';
        icono.classList.remove('bi-moon-stars');
        icono.classList.add('bi-brightness-low'); // Cambia al icono de sol
    } else {
        body.style.backgroundColor = '#F8F9FA';
        icono.classList.remove('bi-brightness-low');
        icono.classList.add('bi-moon-stars'); // Cambia al icono de luna
    }
}

boton.addEventListener('click', cambiarFondoYIconos);

// Establece el estado inicial al cargar la página (fondo blanco y luna)
document.addEventListener('DOMContentLoaded', () => {
    body.style.backgroundColor = '#F8F9FA';
    icono.classList.add('bi-moon-stars');
});
