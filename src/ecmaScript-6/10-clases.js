//              Clases
// No hay mucho que hablar el respecto, la nueva sintaxis para
// los prototipos :)

class Calculadora {
    constructor () {
        this.valorA = 0;
        this.valorB = 0;
    }

    sumar(valorA, valorB) {
        this.valorA = valorA;
        this.valorB = valorB;
        return this.valorA + this.valorB;
    }
}

const myCalc = new Calculadora();
console.log(myCalc.sumar(5, 10));
