function cambiarMensaje() {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "Gracias por hacer clic en el boton.";
    const extra = document.getElementById("extra");
    extra.textContent = "Este texto aparecio dinamicamente.";
}

function mostrarHora() {
    const ahora = new Date();
    alert("La hora actual es: " + ahora.toLocaleTimeString());
}


