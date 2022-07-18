//              Promise.allSettled()
// Espera hasta que todas las promesas se hallan resuelto para mandar una respuesta
// con el estado de la respuesta de cada promesa y su razón o valor

const promesa1 = new Promise((resolve, reject) => reject(':('));
const promesa2 = new Promise((resolve, reject) => resolve(':)'));
const promesa3 = new Promise((resolve, reject) => resolve(';)'));

Promise.allSettled([promesa1, promesa2, promesa3])
    .then(Response => console.log(Response));
