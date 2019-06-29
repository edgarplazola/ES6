//? Para que sirven las arrow functions?
/* 
Menos código que es mas simple de interpretar.
No hay un nuevo this dentro de las funciones.
No hay constructores, no tiene new.
No puedes cambiar el valor del this aunque uses call() apply() o bind().
No hay objeto "arguments".
Muchas cosas más.
*/

//ES5
var miFuncionNormal = function (valor) {
    return valor;
}

var sumarFuncionNormal = function (num1, num2) {
    return num1 + num2;
}

var saludarFuncionNormal = function () {
    console.log("Hola Mundo");

}

var saludarPersonaFuncionNormal = function (nombre) {
    var salida = "Hola, " + nombre;
    return salida;
}

var obtenerLibro = function (id) {
    return {
        id: id,
        nombre: "Harry Potter"
    }
}

//ES6
let miFuncionFlecha = valor => valor;
let sumarFuncionFlecha = (num1, num2) => num1 + num2;
let saludarFuncionFlecha = () => "Hola Mundo";
let saludarPersonaFuncionFlecha = nombre => {
    let salida = `Hola ${nombre}`;
    return salida;
}
let obtenerLibroFlecha = id => ({ id: id, nombre: "Harry Potter" });

//? Funciones anónimas
//ES5

var saludo1 = function (nombre) {
    return "Hola " + nombre;
}("Fernando");
console.log(saludo1);

let saludo2 = (nombre => `Hola ${nombre}`)("Edgar");
console.log(saludo2);

//? No hay cambios en el objeto This.

//ES5
// var manejador = {

//     id: "123",
//     init: function () {
//         document.addEventListener("click", (function (event) {
//             this.clickEnPagina(event.type);
//         }).bind(this), false);
//     }, //Fin del init

//     clickEnPagina: function (type) {
//         console.log("Manejando " + type + " para el id: " + this.id)
//     }
// };

// manejador.init();

//ES6
var manejador = {

    id: "123",
    init: function () {
        document.addEventListener("click",
            event => this.clickEnPagina(event.type));

    }, //Fin del init

    clickEnPagina: function (type) {
        console.log("Manejando " + type + " para el id: " + this.id)
    }
};

manejador.init();

