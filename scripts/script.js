// Obtener el botón y el cuerpo del documento
const modoBoton = document.getElementById("modoBoton");
const cuerpo = document.body;

// Función para cambiar el modo
function cambiarModo() {
    cuerpo.classList.toggle("dark-mode");
}
// Escuchar el evento click del botón
modoBoton.addEventListener("click", cambiarModo);