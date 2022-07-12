//          Potencias
// Se añado una sintaxis más sencilla para calcular potencias.

let base = 9;
let exponent = 2;

function potencia(myBase = base, myExponent = exponent) {
    let result = myBase ** myExponent;
    return result;
}

console.log(potencia());
console.log(potencia(6, 2));