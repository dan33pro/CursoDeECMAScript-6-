//              Mejoras del try catch
// Antes: Era necesario pasarle el error
// para trabajar con él.

try {
    
} catch (error) {
    console.log(error);
}

// Después: Ahora no es necesario pasárselo
// para trabajar con él.

try {
    
} catch {
    console.log(error);
}