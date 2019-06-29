
//? JS todos los objetos son pasados por referencia.
//? Con el operador spread se sacaran los valores del objeto persona1 y se asignaran a persona2

let persona1 = {
    nombre: "Fernando",
    edad: 33
}

let persona2 = { ...persona1 };

persona2.nombre = "Juan";

console.log(persona1);
console.log(persona2);

