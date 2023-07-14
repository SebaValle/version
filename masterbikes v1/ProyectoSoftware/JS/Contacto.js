function mostrarMensaje() {
    // Evita el envío del formulario
    event.preventDefault();

    // Muestra el mensaje de aviso
    var mensajeEnviado = document.getElementById("mensaje-enviado");
    mensajeEnviado.innerHTML = "¡Tu mensaje ha sido enviado correctamente!";

    // Limpia los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("descripcion").value = "";

    setTimeout(function () {
        mensajeEnviado.innerHTML = "";
    }, 3000);
}