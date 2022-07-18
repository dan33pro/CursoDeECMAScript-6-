// Dynamic import
let contador = 0;

export function hola() {
    const myDiv = document.createElement("div");
    myDiv.classList.add('response');
    const text = document.createTextNode(`Hola mundo : ${contador++}`);
    myDiv.appendChild(text);
    return myDiv;
}