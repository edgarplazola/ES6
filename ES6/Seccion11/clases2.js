//? Miembros estaticos y metodos computados

let nombreMetodo = "gritarNombre";

class Persona {

    constructor(nombre) {
        this.nombre = nombre;
    }

    decirNombre() {
        console.log(`El nombre es: ${this.nombre}`);
    }

    [nombreMetodo]() {
        console.log(this.nombre.toUpperCase());

    }

    static crear(nombre) {
        return new Persona(nombre);
    }

}

let yo = Persona.crear("Edgar Estático");
console.log(yo);
