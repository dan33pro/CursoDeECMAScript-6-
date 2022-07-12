//                  Default Params y Concatenación
// Ahora podemos darle un valor por defecto a nuestras variables 
// que recibimos como parametros desde los mismos parametros, sin
// necesidad de hacerlo dentro de nuestros métodos.

// Antes de ECMAScript 6+
function antes(name, age, country) {
    this.name = name || 'Daniel';
    this.age = age || 19;
    this.country = country || 'Colombia';
}

// ECMAScript 6+
function ahora(name = 'Daniel', age = 19, country = 'Colombia') {
    this.name = name;
    this.age = age;
    this.country = country;
}

const yoAntes = new antes();
const yoAhora = new ahora();

console.log(yoAntes);
console.log(yoAhora);
