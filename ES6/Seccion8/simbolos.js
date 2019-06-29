//? Los simbolos sirven para poner nombres de propiedades y aseguran la no colición de los mismos

let primerNombre = Symbol();

let persona = {

};

persona[primerNombre] = "Edgar";
console.log(persona[primerNombre]);
