//                  Propiedad de Objetos Mejorados
// Esta consiste en mejora la facilidad en que asignamos las 
// propiedades de nuestros objetos pasando por la obviedad. 

let nameP = "Daniel";
let age = 19;

// Antes de ECMA Script 6+
let obj = {
    nameP: nameP,
    age: age,
};
console.log(obj);

// Despues de ECMA Script 6+
let  obj2 = {
    nameP,
    age,
}
console.log(obj2);
