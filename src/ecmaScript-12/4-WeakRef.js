//              WeakRef()
// Nos permite tener referencias débiles hacia nuestros objetos,
// evitando que nuestro objeto sea recogido por el 
// Garbage Collector(recolector de basura) incorporado en JS

class anyClass {
    constructor(element) {
        this.ref = new WeakRef(element);
    }
}