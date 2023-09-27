// Obtener el botón y el cuerpo del documento
const modoBoton = document.getElementById("modoBoton");
const cuerpo = document.body;

// Función para cambiar el modo
function cambiarModo() {
    cuerpo.classList.toggle("dark-mode");
    modoBoton.classList.toggle("modo-oscuro-activado");

    // Cambiar el icono según el modo
    const iconoActual = modoBoton.querySelector("i");
    if (cuerpo.classList.contains("dark-mode")) {
        // Modo oscuro activado, cambia al icono de sol
        iconoActual.classList.remove("fa-regular", "fa-moon");
        iconoActual.classList.add("fa-solid", "fa-sun");

        // Cambia el color de fondo del icono en el modo oscuro
        iconoActual.style.backgroundColor = "black";
        iconoActual.style.color = "#fff"; // Cambio de color del icono en el modo oscuro
    } else {
        // Modo claro activado, cambia al icono de luna
        iconoActual.classList.remove("fa-solid", "fa-sun");
        iconoActual.classList.add("fa-regular", "fa-moon");

        // Cambia el color de fondo del icono en el modo claro
        iconoActual.style.backgroundColor = "white";
        iconoActual.style.color = "#333"; // Cambio de color del icono en el modo claro
    }
}

// Escuchar el evento click del botón
modoBoton.addEventListener("click", cambiarModo);
