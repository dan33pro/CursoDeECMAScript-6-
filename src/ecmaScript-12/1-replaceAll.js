//                  replaceAll()
// Nos permite remplazar no sola la primera coincidencia de nuestra cadena
// como lo hace replace(),  sino que nos permite remplazar todas :)

const string = 'JS me permite crear cosas geniales, viva JS';
const replacedString1 = string.replace('JS', 'JavaScript');
const replacedString2 = string.replaceAll('JS', 'JavaScript');

console.log({
    replacedString1,
    replacedString2,
});