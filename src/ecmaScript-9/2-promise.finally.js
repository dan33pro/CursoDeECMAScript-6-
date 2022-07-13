//              Promises finally
// Es la opción que tenemos para ejecutar ciertas acciones una vez
// se reciven las respuestas de una promesa.

const saludo = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hola gente'), 2000)
            : reject(new Error('Sorry :('))
    });
};

saludo()
    .then(Response => console.log(Response))
    .catch(error => console.error(error))
    .finally(() => console.log('Finalizo'))