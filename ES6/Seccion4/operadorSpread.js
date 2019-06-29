//? ES5

// var numeros = [1, 2, 345, 245, 7768, 23, 4556, 456, 34, 57, 563, 34,
//     456, 567, 67, 34, 345, 456, 3, 456, 567, 34, 456, 456]

// var max = Math.max.apply(Math, numeros);

// console.log(max);

//? ES6
let numeros = [1, 2, 345, 245, 7768, 23, 4556, 456, 34, 57, 563, 34,
    456, 567, 67, 34, 345, 456, 3, 456, 567, 34, 456, 456]

let max = Math.max(...numeros);
console.log(max);

