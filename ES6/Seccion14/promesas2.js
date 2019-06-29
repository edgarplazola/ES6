const empleados = [{
    id: 1,
    nombre: "Edgar"
}, {
    id: 2,
    nombre: "Valeria"
}, {
    id: 3,
    nombre: "Juan"
}, {
    id: 4,
    nombre: "Toño"
}];

const salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}, {
    id: 3,
    salario: 3000
}];



//? Callback
// const getEmpleado = (id, callback) => {

//     const empleadoDB = empleados.find(empleado => empleado.id === id);

//     if (!empleadoDB) {
//         callback(`No existe empleado con el id ${id}`);
//     }
//     else {
//         callback(null, empleadoDB);
//     }

// };

// const getSalario = (empleado, callback) => {

//     const salarioDB = salarios.find(salario => salario.id === empleado.id);

//     if (!salarioDB) {
//         callback("No existe el salario.");
//     }
//     else {
//         callback(null, {
//             nombre: empleado.nombre,
//             salario: salarioDB.salario,
//             id: empleado.id
//         })
//     }
// }

//? Promesas

const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        const empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe empleado con el id ${id}`);
        }
        else {
            resolve(empleadoDB);
        }

    });
};

const getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        const salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject("No existe el salario.");
        }
        else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            })
        }

    });

}

getEmpleado(1).then(empleado => {
    // getSalario(empleado).then(resp => {
    //     console.log(resp);
    // })

    return getSalario(empleado);

}).then(resp => {
    console.log(resp);

}).catch(err => console.log(err));