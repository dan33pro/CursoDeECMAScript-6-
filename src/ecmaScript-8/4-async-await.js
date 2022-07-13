//              Async await
// Está es una propuesta para trabajar con asincronismo
// que plantea mejorar la sintaxis cuando trabajamos con
// promesas, siendo más claro y entendible.

// Esta es la función especial, una promesa que en este caso
// tarda 3s en enviar el resolve
const holaMundo = () => {
    return new Promise((resolve, reject) => {
        (true) 
            ? setTimeout(() => resolve('Hola mundo'), 3000)
            : reject(new Error('Test error'));
        
    })
};

// En esta función se trabaja asincronismo, y espera la
// respuesta de la promesa
const holaAync = async () => {
    const hola = await holaMundo();
    console.log(hola);
};
holaAync();

// Para capturar el reject lo podemos hacer con un try catch
const otraFuncion = async () => {
    try {
        const hola = await holaMundo();
        console.log(hola)
    } catch (error) {
        console.log(error);
    }
};
otraFuncion();