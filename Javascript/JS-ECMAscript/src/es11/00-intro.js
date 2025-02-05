/*
ECMAScript 2020 (ES11) introdujo varias características nuevas y mejoras que hacen que escribir y mantener código JavaScript sea más fácil y eficiente. 
Estas nuevas funcionalidades permiten manejar de manera más segura y directa las operaciones con objetos, promesas, números grandes y módulos.

Características Principales de ES11 (ECMAScript 2020)
*/

//Optional Chaining (?.):
//Permite acceder a propiedades de objetos profundamente anidados sin necesidad de verificar explícitamente cada nivel.
let user = { 
    profile: {name: 'Alice', age: 21} 
};
console.log(user?.profile?.name); // 'Alice'
console.log(user?.profile?.age); // '21'
console.log(user?.address?.street); // undefined, no lanza un error 
//Si abusas del encadenamiento opcional y existe un error en un objeto, 
//el programa podría "ocultarlo" por un undefined, provocando que el debugging sea más complicado.

//Nullish Coalescing Operator (??):
//Proporciona una forma de asignar valores predeterminados solo cuando un valor es null o undefined.
let height = null;
let defaultHeight = 180;
let finalHeight = height ?? defaultHeight;
console.log(finalHeight); // 180

//Promise.allSettled():
//Devuelve una promesa que se resuelve después de que todas las promesas dadas se hayan resuelto o rechazado.
let promises = [Promise.resolve(1), Promise.reject('Error'), Promise.resolve(3)];
Promise.allSettled(promises).then(results => console.log(results));
// [
//   { status: 'fulfilled', value: 1 },
//   { status: 'rejected', reason: 'Error' },
//   { status: 'fulfilled', value: 3 }
// ]

//Dynamic Import (import()):
//Permite cargar módulos dinámicamente cuando sean necesarios.
import('./module.js').then(module => {
  module.doSomething();
});

//BigInt: Un nuevo tipo de dato que permite representar y manipular números enteros grandes.
let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt); // 1234567890123456789012345678901234567890n

//globalThis:Una forma unificada de acceder al objeto global en cualquier entorno (navegador, Node.js, etc.).
console.log(globalThis); // En un navegador, esto es equivalente a `window`

//Improved for-in Mechanics:
//Mejoras en el orden de enumeración de las propiedades de los objetos.

//Optional Catch Binding:
//Permite omitir el parámetro de error en un bloque catch.
try {
  // código que puede lanzar un error
} catch {
  // manejar el error sin necesidad del parámetro de error
}

//Module Namespace Exports:
//Mejora la forma en que los módulos pueden exportar varios miembros.
// module.js
export const name = 'Alice';
export const age = 25;

// main.js
import * as user from './module.js';
console.log(user.name); // 'Alice'
console.log(user.age); // 25

