

let ajustes = {
    nombre: "Edgar Plazola",
    email: "edgarplazola@gmail.com",
    facebook: "EdgarPlazola",
    google: "edgargoogle",
    premium: true
};

// let nombre = ajustes.nombre,
//     email = ajustes.email;

//Destructuracion ES6
let { nombre, email, facebook, google, premium: dePago } = ajustes;
console.log(google, dePago);

//Destructuracion objetos anidados.

let autoGuardado = {
    archivo: "app.js",
    cursor: {
        linea: 7,
        columna: 16
    },
    ultimoArchivo: {
        archivo: "index.html",
        cursor: {
            linea: 8,
            columna: 20
        }
    }
}


let { cursor } = autoGuardado;
console.log(cursor);

let { ultimoArchivo: { cursor: ultimoArchivo } } = autoGuardado;
console.log(ultimoArchivo);
