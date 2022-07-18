// Asignación AND lógico
let isTrue1 = true;
let isFalse1 = false;

console.log(isTrue1 &&= isFalse1);
console.log({
    isTrue1,
    isFalse1,
});

// Asignación OR lógico
let isTrue2 = true;
let isFalse2 = false;

console.log(isTrue2 ||= isFalse2);
console.log({
    isTrue2,
    isFalse2,
});

// Asignación de anulación lógica
let isTrue3 = undefined;
let isFalse3 = false;

console.log(isTrue3 ??= isFalse3);
console.log({
    isTrue3,
    isFalse3,
});