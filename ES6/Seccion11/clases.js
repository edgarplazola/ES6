//? Clases :)


class Persona {

    constructor(nombre) {
        this.nombre = nombre;
    }

    decirNombre() {
        console.log(this.nombre);
    }
}

let edgar = new Persona("Edgar");
edgar.decirNombre();
console.log(edgar instanceof Persona);
console.log(edgar instanceof Object);
console.log(typeof Persona);

//Otra definición
let Carro = class {

    constructor() {
        this.nombre = "";
        this.edad = 30;
        this.direccion = "Rio hondo";
    }

}








