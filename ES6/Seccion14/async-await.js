const getNombre = async () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Edgar")
        }, 3000);

    });


}

const saludo = async () => {
    const nombre = await getNombre();
    return "hola " + nombre;
}

saludo().then(mensaje => {
    console.log(mensaje);

});


