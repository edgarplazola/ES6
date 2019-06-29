
// function agregarAlumno(arr_alumnos, alumno2, alumno3) {}

//ES5
// function agregarAlumno() {
//     console.log(arguments);

//     for (var i = 1; i < arguments.length; i++) {
//         arguments[0].push(arguments[i]);
//     }
//     return arguments[0];
// }

// var alumnos_arr = ["Fernando"];

// var alumnos_arr2 = agregarAlumno(alumnos_arr, "Edgar", "Valeria", "Belen");
// console.log(alumnos_arr2);

//ES6
function agregarAlumno(arr_alumnos, ...alumnos) {
    console.log(arguments);

    for (let i = 0; i < alumnos.length; i++) {
        arr_alumnos.push(alumnos[i]);
    }
    return arr_alumnos;
}

let alumnos_arr = ["Fernando"];

let alumnos_arr2 = agregarAlumno(alumnos_arr, "Edgar", "Valeria", "Belen");
console.log(alumnos_arr2);

//? Restricciones

/*
Parámetro REST debe de estar al final de los parametros
*/