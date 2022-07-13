//                  Symbol.description 
// Ahora podemos agregar una descripción a los objetos de 
// tipo Symbol, pasándola por parámetro al constructor. 

let mySymbol = `Mi simbolo`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);