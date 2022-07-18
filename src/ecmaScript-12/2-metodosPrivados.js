// Esta es la nueva forma de encapsulamiento del 2021 
// usando ECMAScript 12, mucho más simple que como lo 
// hacíamos anteriormente.

class Mensaje {
    constructor(val) {
        this.#show(val);
    }
    #show(val) {
        console.log(val);
    }
}

const miMensaje = new Mensaje('Buenas :)');