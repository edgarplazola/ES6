
//El Scope es el ámbito de las variables: Global | Local

// let mensaje = "Hola Mundo";
// console.log(mensaje);

let mensaje = "123";
if (1 === 1) {

    // let, crea la variable en ese scope
    mensaje = "Hola mundo";

}

console.log(mensaje);

//ES6 solo puede haber una declaración por bloque de variable