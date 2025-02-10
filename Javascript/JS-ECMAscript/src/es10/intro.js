/*
ECMAScript 2019 (ES10) introdujo varias características útiles que mejoran la manipulación de arrays y cadenas, 
el manejo de objetos, y otras funcionalidades prácticas.
Estas mejoras permiten escribir código JavaScript más limpio y eficiente.

Características Principales de ES10 (ECMAScript 2019)
Array.prototype.flat() y Array.prototype.flatMap():

flat(): Crea una nueva matriz con todos los elementos de sub-matrices concatenados de manera recursiva hasta la profundidad especificada.*/
let arr = [1, [2, [3, [4]], 5]];
console.log(arr.flat(2)); // [1, 2, 3, [4], 5]

//flatMap(): Primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en un nuevo array.
let arr1 = [1, 2, 3, 4];
console.log(arr.flatMap(x => [x, x * 2])); // [1, 2, 2, 4, 3, 6, 4, 8]

//String.prototype.trimStart() y String.prototype.trimEnd():

//trimStart(): Elimina espacios en blanco desde el principio de una cadena.
let str = '   Hello World!   ';
console.log(str.trimStart()); // 'Hello World!   '

//trimEnd(): Elimina espacios en blanco desde el final de una cadena.
let str1 = '   Hello World!   ';
console.log(str.trimEnd()); // '   Hello World!'

//Object.fromEntries():

//Convierte una lista de pares clave-valor en un objeto.
let entries = [['name', 'Alice'], ['age', 25]];
let obj = Object.fromEntries(entries);
console.log(obj); // { name: 'Alice', age: 25 }

//Symbol.prototype.description:

//Permite obtener la descripción de un símbolo.
let sym = Symbol('desc');
console.log(sym.description); // 'desc'

//Opcional Catch Binding:

//Permite omitir el parámetro de error en un bloque catch.
try {
  // código que puede lanzar un error
} catch {
  // manejar el error sin necesidad del parámetro de error
}

// Function.prototype.toString():

//Devuelve el código fuente exacto de la función.
function foo() { /* código de ejemplo */ }
console.log(foo.toString()); // "function foo() { /* código de ejemplo */ }"

