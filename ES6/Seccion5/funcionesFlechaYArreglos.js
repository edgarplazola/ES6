var arregloDesordenado = [5, 10, 23, 2349, 2, 0, 9, 10];
var arregloOrdernado = arregloDesordenado.sort(function (a, b) {
    return a - b;
});

console.log(arregloOrdernado);


//ES6

let ordernadoES6 = arregloDesordenado.sort((a, b) => a - b);

console.log(ordernadoES6);


var restar = (a, b) => a - b;

console.log(typeof restar);
console.log(restar instanceof Function);

//! Errores en funciones flecha
// var restar2 = new restar(1, 2);

function ejemplo(x, y) {
    ((a, b) => {
        console.log(arguments[1]);
    })();
}
console.log(ejemplo(10,20));


