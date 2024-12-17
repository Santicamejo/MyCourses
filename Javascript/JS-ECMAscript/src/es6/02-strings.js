/* 
Template literals (backticks) 
son un game-changer sin este feature no existirían cosas como JSX y consigo todo lo que usamos en el frontend moderno, sin duda una las mejores implementaciones que se hicieron en el lenguaje. */

let hello = 'Hello';
let world = 'World';

//Antes de la existencia de los Tamplate literals
let classicPhrase = hello + " " + world + "!";
console.log(classicPhrase);

// Tamplate literals
let epicPhrase = `${hello} ${world}!`
console.log(epicPhrase);

//Multi-line Strings
let lorem = 'esto es un string \n' + 'esto es otra linea';

let lorem2 = `esta es una frase epica
    esto es la continuacion de una frase epica
`;

console.log(lorem);
console.log(lorem2);
