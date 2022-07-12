//              Método includes()
// Ahora podemos determinar si un valor está dentro de un 
// Arreglo un String con facilidad, cuando antes teníamos 
// que trabajar con indexOf o otras cosas.

let numbers =  [1, 5, 7];
let myNum = 5;

if(numbers.includes(myNum)) {
    console.log(`Si está el valor ${myNum}`);
} else {
    console.log(`No está el valor ${myNum}`);
}