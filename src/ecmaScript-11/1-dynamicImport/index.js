// Dynamic import
const panel = document.querySelector('.respuesta');
const button = document.getElementById('btn');

button.addEventListener("click", async () => {
    const module = await import("./file.mjs");
    panel.appendChild(module.hola());
});