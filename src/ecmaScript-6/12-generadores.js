//              Generators
// Los generadores son funciones especiales, que recuerdan el
// estado de la parte interna, manteniendo el estado de la
// ejecución.

function* holaMundo() {
    if(true) {
        yield 'Hola, ';
    }
    if(true) {
        yield 'World';
    }
}

const generarHola = holaMundo();
console.log(generarHola.next().value);
console.log(generarHola.next().value);
console.log(generarHola.next().value);


function* fibonacci(){
    var fn1 = 1;
    var fn2 = 1;
    while (true){  
      var actual = fn2;
      fn2 = fn1;
      fn1 = fn1 + actual;
      var reset = yield actual;
      if (reset){
          fn1 = 1;
          fn2 = 1;
      }
    }
  }
  
  var secuencia = fibonacci();
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 2
  console.log(secuencia.next().value);     // 3
  console.log(secuencia.next().value);     // 5
  console.log(secuencia.next().value);     // 8
  console.log(secuencia.next().value);     // 13
  console.log(secuencia.next(true).value); // 1
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 2
  console.log(secuencia.next().value);     // 3
  