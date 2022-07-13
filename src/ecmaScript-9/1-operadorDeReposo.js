//                  Operador de Reposo
// Esta es una mescla entre spread operator y destructuración
// que permite una destructuración más generalizada, con la que
// construimos objetos con las propiedades que queramos.

const obj = {
    nameP: 'Daniel',
    age: 19,
    country: 'Colombia',
};

let { nameP, ...all } = obj;
console.log(nameP);
console.log(all, nameP);

// Otro uso muy importante es como una especie de
// concatenación.
const data = {
    ip: '14.564.58.14',
    country: 'Colombia',
};

const daniel = {
    name: 'Daniel',
    age: 19,
    ...data,
}
console.log(daniel);