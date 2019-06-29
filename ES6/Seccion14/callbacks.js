//? Forma tradicional de hacer tareas a des tiempo, no son asíncronos demoran la instruccion.
const getUsuarioByID = (id, callback) => {
    "use strict";
    const usuario = {
        nombre: "Edgar",
        id: id
    };

    if (id === 20) {
        callback(`El usuario con el id ${id}, no existe`);
    } else {
        callback(null, usuario);
    }
}

getUsuarioByID(90, (err, usuario) => {

    if (err) {
        return console.log(err);
    }
    console.log("Usuario de base de datos", usuario);
});