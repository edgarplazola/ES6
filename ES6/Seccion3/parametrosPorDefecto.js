
function saludo(mensaje = "Hola Mundo", tiempo = 1000) {

    // mensaje = mensaje || "hola mundo";
    // mensaje = (typeof mensaje !== "undefined" ? mensaje : "Hola Mundo2")

    setTimeout(function () {
        console.log(mensaje);

    }, tiempo);

}

saludo();