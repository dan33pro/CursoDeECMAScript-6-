//                  Template Literals
// Esta es una de las novedades de ECMA Script 6+, que nos permite
// concatenar variables dentro de una cadena de forma más elegante
// así como la facilidad en los saltos de linea.

// Antes de Template literals

let uno = "Hola";
let dos = "mundo";

let antes = uno + " " + dos;
console.log(antes);

// Con Template literals
let ahora = `${uno} ${dos}`;
console.log(ahora);
