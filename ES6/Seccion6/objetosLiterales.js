//? ES5

// var objeto = {
//     nombre: "Edgar"
// }

// function crearPersona(nombre, apellido, edad) {
//     return {
//         nombre: nombre,
//         apellido: apellido,
//         edad: edad
//     };
// }

// var edgarES5 = crearPersona("Edgar", "flores", 40);

// console.log(edgarES5);


//?ES6

function crearPersona(nombre, apellido, edad) {
    return {
        nombre,
        apellido,
        edad
    };
}

var edgarES6 = crearPersona("Edgar", "flores", 40);

console.log(edgarES6);


