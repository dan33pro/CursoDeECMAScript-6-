//                  Promise.any()
// Recibe un array de promesas con Promise.allSettled pero a este
// solo le interesa el primero en resolverse e ignora los demás, así
// que solo entrega la respuesta de la primera promesa que devuelva 
// un resolve.

const promesa1 = new Promise((resolve, reject) => reject('1'));
const promesa2 = new Promise((resolve, reject) => resolve('2'));
const promesa3 = new Promise((resolve, reject) => resolve('3'));

Promise.any([promesa1, promesa2, promesa3])
    .then(Response => console.log(Response));