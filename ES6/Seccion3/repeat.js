

let texto = "Hola Mundo";

console.log(texto.repeat(2));

const ESPACIOS = 12;
let nombres = ["Edgar", "Valeria"];
let telefonos = ["123456", "789000"];

for (nom in nombres) {
    let dif = ESPACIOS - nombres[nom].length;
    console.log(nombres[nom] + " ".repeat(dif) + "|" + telefonos[nom]);
}