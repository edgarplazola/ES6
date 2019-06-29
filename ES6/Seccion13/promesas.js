
// function tareaAsincrona() {

//     setTimeout(function () {
//         console.log("Proceso asincrono terminado");
//         resolve();
//     }, 1300);

// }

// tareaAsincrona();
// console.log("Código Secuencial");


// function resolve() {
//     console.log("Todo Ok!");

// }

// function reject() {
//     console.log("Todo Malo!");

// }

function tareaAsincrona() {

    let promesa = new Promise((resolve, reject) => {

        setTimeout(function () {
            console.log("Proceso Asíncrono terminado");
            reject();
        }, 1500);

    })

    return promesa;

}

tareaAsincrona().then(function () {
    console.log("Todo Ok");

}, function () {
    console.log("Todo Mal");

});

console.log("Código secuencial");
