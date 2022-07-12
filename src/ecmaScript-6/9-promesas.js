//              Promesas
// Por ahora guardare mi opinión hasta que haga el curso de
// asincronismo jeje

// composición - newPromise() 
//      resolve() - comportamiento al cumplir la promesa 
//      reject() - comportamiento al fallar la promesa 
//      .then (⇒) - obtener el valor del resolve 
//      .catch(⇒) - obtener el valor del reject() 

const holaPromesa = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve("Good");
        } else {
            reject("Rayos");
        }
    });
}

// Podemos agregar tantos then como necesitemos
holaPromesa().then(response => console.log(response)).catch(error => console.log(error));
