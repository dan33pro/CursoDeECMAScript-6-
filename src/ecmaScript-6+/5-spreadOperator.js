//      Operador de propagación
// Este operador nos permite crear un array de elementos a partir 
// de otros arrays, de forma sencilla.

let tean1 = ["Daniel", "Laura", "Camilo"];
let team2 = ["Lucas", "Sara", "Simon"];

let education = ["David", ...tean1, ...team2];
console.log(education);
