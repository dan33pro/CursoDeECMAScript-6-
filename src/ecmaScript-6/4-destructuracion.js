///               Destructuración
// Ahora en ECMA Script 6+ podemos acceder a las propiedades de
// nuestros objetos de forma distinta, agrupando las propiedades 
// que necesitamos en una variable, con eso las podremos revisar
// fácilmente.

// Antes
let person = {
    name: "Daniel",
    age: 19,
    country: "Colombia",
}

console.log(person.name, person.age, person.country);

// Ahora
let { name, age, country } = person;
console.log(name, age, country);
