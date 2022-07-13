//              Object.fromEntries()
// Nos permite construir objetos con base en un array de arrays

let entries = [['name', 'Daniel'], ['age', 19]];
let daniel = Object.fromEntries(entries);
console.log(daniel);