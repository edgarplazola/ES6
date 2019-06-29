
// let mapa = new Map();

// mapa.set("nombre", "Edgar");
// mapa.set("edad", 28);

// console.log(mapa);
// console.log(mapa.size);

// console.log(mapa.get("nombre")); //Edgar
// console.log(mapa.has("nombre"));
// mapa.delete("nombre");
// console.log(mapa.has("nombre"));

// mapa.clear();


//Inicialización de mapas

// let mapa2 = new Map([["nombre", "Edgar"], ["edad", 28]]);
// console.log(mapa2);

//foreach mapas

// let mapa3 = new Map([["nombre", "Edgar"], ["edad", 28]]);

// mapa3.forEach((valor, llave) => console.log(`Valor: ${valor}, Llave: ${llave}`));

//Ciclo For OF

// let numeros = [100, 20, 30, 50, 1500, 200];

// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
// }

// for (let i in numeros) {
//     console.log(numeros[i]);
// }

// for (let numero of numeros) {
//     console.log(numero);
// }

// let personas = [
//     { nombre: "Edgar", edad: 28 },
//     { nombre: "Victor", edad: 10 },
//     { nombre: "Pepe", edad: 29 },
//     { nombre: "Valeria", edad: 40 },
//     { nombre: "Ernesto", edad: 9 },
//     { nombre: "Juana", edad: 11 },
// ];

let personas = new Set();

personas.add({nombre:"Edgar",edad:28});
personas.add({nombre:"Valeria",edad:19});
personas.add({nombre:"Carolina",edad:11});

for (persona of personas) {
    console.log(persona.nombre,persona.edad);
}

