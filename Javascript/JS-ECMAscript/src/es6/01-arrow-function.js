/* en esta version(ES6) se introducen Las Arrow Functions 
que su principal utilidad es crear funciones con una sintaxis mas corta */

//Funcion con declaracion 'normal'
function squere(num) {
    return num * num;
}
console.log(squere(2));

//Arrow Function
const squere = (num) => {
    return num * num;
}
console.log(squere(2));

//Arrow Function simplificada
const squere = num => num * num;
console.log(squere(2));

const phrase = (x, y) => x + y;
console.log(phrase('Hola', ' Mundo!'));