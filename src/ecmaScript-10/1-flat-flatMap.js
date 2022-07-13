//              Método flat()
// Este devuelve un array en base a otro dependiendo de
// la profundidad que le pasemos, aplanado nuestros arrays

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array);
console.log(array.flat());
console.log(array.flat(2));

//              Método flatMap()
// Este al igual que el anterior trabaja sobre arrays, donde
// podemos hacer una acción por cada valor del array, y al final
// nos devuelve un array con las acciones que se tomaron.

let array1 = [1,2,3,4,5];
console.log(array1.flatMap(value => [value, value*2]));
