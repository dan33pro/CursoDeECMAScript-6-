//              Padding
// Nos permite manipular el tamaño y los cracteres de 
// nuestros Strings

const myString = 'Hola';

// Te cambia el tamaño a uno especifico y te agraga caracteres al inicio
console.log(myString.padStart(myString.length+3, ':) '));

// Te cambia el tamaño a uno especifico y te agraga caracteres al final
console.log(myString.padEnd(myString.length+3, ' XD'));