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

const getEmpleado = (id, callback) => {

    const empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe empleado con el id ${id}`);
    }
    else {
        callback(null, empleadoDB);
    }

};


//USO
const getSalario = (empleado, callback) => {
    
    const salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback("No existe el salario.");
    }
    else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        })
    }
}

getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {

        if (err) {
            return console.log(err);
        }

        console.log("Salario:" + resp.nombre + " es de: " + resp.salario);


    });
});