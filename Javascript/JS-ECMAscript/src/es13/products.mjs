/* 
• Abrir una terminal en la ruta del proyecto e instalar fetch con:

npm install node-fetch
 

• Dentro de la carpeta es13, crear el archivo llamado: products.js
◦ El código queda:

import fetch from "node-fetch";

// await debe estar porque si no arrojaría error porque necesita esperar hacer el fetch y luego transformar a un objeto
const response = await fetch('https://api.escuelajs.co/api/v1/products');
const products = await response.json();

export {products};
 

• Dentro de la carpeta es13, crear el archivo llamado: 01-top-level-await.js
◦ El código queda:

//Compilar: seleccionar el código + click derecho + Run Code

import {products} from "./products.js";

console.log(products);
console.log('Hey!');

/*output:
[aparece el objeto con los items de los productos de la fake api]
Hey!
*/

import fetch from "node-fetch";

const response = await fetch("https://api.escuelajs.co/api/v1/products");
const products = await response.json();

export { products };