//              Optional Chaining
// Nos permite avanzar cuando aún no esté disponible una propiedad  
// de un objeto, sin que se rompa la ejecución de nuestro proyecto 

const user = {
    profile: {
        email: 'danny@platzi.co',
    },
};
console.log(user?.profile?.email);

if (user?.profile?.email) {
    console.log('Si hay email');
} else {
    console.log('No hay email');
}