
//ES5
function mezclar(objReceptor, objDonador) {
    Object.keys(objDonador).forEach(function (key) {
        objReceptor[key] = objDonador[key];
    });
    return objReceptor;
}

var objReceptor = {};
var objDonador = {
    nombre: "mi-archivo.js"
};

console.log(mezclar(objReceptor, objDonador));

//ES6

console.log(Object.assign(objReceptor, objDonador));

