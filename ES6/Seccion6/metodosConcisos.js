
//ES5
// var persona = {
//     nombre: "Edgar",
//     getNombre: function () {
//         console.log(this.nombre);
//     }
// }

// persona.getNombre();


//ES6
var persona = {
    nombre: "Edgar",
    getNombre() {
        console.log(this.nombre);
    }
}

persona.getNombre();