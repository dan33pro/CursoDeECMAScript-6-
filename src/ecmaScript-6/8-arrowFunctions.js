//                  Arrow Functions
// Cunado trabajábamos con funciones anónimas, implementábamos la
// sintaxis tradicional, ahora las podemos implementar de forma más
// sencilla con =>

const names = [
    {name: "Daniel", age: 19},
    {name: "Lucas", age: 20}
]


// Sin Arrow Functions
let listOfNames = names.map(function (item) {
    console.log(item.name);
});
listOfNames;


// Con Arrow functions
let listOfNames2 = names.map(item => console.log(item.name));
listOfNames2;

// Otras sintaxis
const listOfNamesF3 = ({name, age}) => {
    console.log(name, age);
};
let listOfNames3 = names.map(listOfNamesF3);

const listOfNamesF4 = item => {
    console.log(item.name);
};
let listOfNames4 = names.map(listOfNamesF4);
