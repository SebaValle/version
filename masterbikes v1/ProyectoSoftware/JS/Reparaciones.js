document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    var aviso = document.getElementById("aviso");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        aviso.style.display = "block";

        setTimeout(function () {
            aviso.style.display = "none";
            form.reset(); // Restablece los valores de los campos del formulario
        }, 4000); // Duración del aviso en milisegundos (3 segundos en este ejemplo)
    });
});