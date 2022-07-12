//              Object.entries()
// Devuelve las claves y valores de un objeto en una matriz
// un array de arrays

//              Trailing-Comas
// La coma en el último elemento, nos facilita poder agregar 
// más sin caer en errores

const data = {
    frontend: 'Daniel',
    backend: 'Laura',
    desing: 'Sebastian',
};

const entries = Object.entries(data);
console.log(entries);
console.log(`Con ${entries.length} propiedades`);