/* top level await en el consumo de una API

Top level await permite utilizar la palabra reservada await fuera de las funciones asíncronas, 
pero solo en la parte superior del archivo de un módulo. Antes de esta introducción, 
utilizar await fuera de una función asíncrona generaría un error de sintaxis.

Ejemplo: importación dinámica de módulos utilizando top level await:*/

// Importación dinámica de módulos utilizando top level await
const myModule = await import('example.js);

// Uso del módulo importado
console.log(myModule.myFunction());
//Ejemplo: iniciar la conexión a una base de datos utilizando top level await


// Iniciar la conexión a la base de datos utilizando top level await
const db = await initDatabase();

// Uso de la conexión de la base de datos
db.query('SELECT * FROM users', (err, result) => {
	if (err) {
	console.error(err);
	return;
}
console.log(result);
});
//Ejemplo: Uso incorrecto de await fuera del archivo de tipo módulo:


// Error: await solo es válido en una función asíncrona
await fetch('https://api.example.com/data');
// En este ejemplo, el uso de await fuera de una función asíncrona generaría un 
// error de sintaxis. Top level await correctamente, se debe asegurar que el 
// archivo de JavaScript sea un módulo.

import fetch from "node-fetch";

const response = await fetch('https://api.escuelajs.co/api/v1/products');
const products = await response.json();

export { products }