/* ES6 o ES2015
Let y Const
En ES6, se introducen dos nuevas maneras de declarar variables: let y const. 
Estas declaraciones tienen un ámbito de bloque, lo que significa que solo están 
disponibles dentro del bloque donde se definen. */

let nombre = "Juan";
const PI = 3.14159;

// Ejemplo de ámbito de bloque
if (true) {
  let edad = 25;
  console.log(edad); // 25
}
console.log(edad); // Error: edad no está definida


/* Funciones de Flecha
Las funciones de flecha proporcionan una sintaxis más compacta para escribir funciones anónimas y no vinculan su propio this. */

const suma = (a, b) => a + b;
console.log(suma(5, 3)); // 8


/* Plantillas Literales
Las plantillas literales permiten incrustar expresiones dentro de cadenas utilizando el carácter de acento grave (\`). */

const name = "María";
const greatings = `Hola, ${nombre}!`;
console.log(saludo); // Hola, María!


/* Desestructuración
La desestructuración permite extraer valores de matrices u objetos en variables distintas. */

const persona = { nom: "Carlos", edad: 30 };
const { nom, edad } = persona;
console.log(nom); // Carlos
console.log(edad); 


/* Parámetros por Defecto
Los parámetros por defecto permiten inicializar parámetros con valores predeterminados si no se proporciona un valor. */

function saludar(nombre = "Invitado") {
    return `Hola, ${nombre}!`;
}
console.log(saludar()); // Hola, Invitado!
console.log(saludar("Ana")); 


/* Promesas
Las promesas son una forma de manejar operaciones asíncronas, haciendo que el código sea más manejable y legible. */

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve('¡Éxito!'), 1000);
});

promesa.then(mensaje => {
  console.log(mensaje); // ¡Éxito!
}).catch(error => {
  console.error(error);
});


/* Clases 
ES6 introdujo la sintaxis de clases, que es una forma más sencilla y clara de crear objetos y manejar la herencia.*/

class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(`${this.nombre} hace un ruido.`);
  }
}

class Perro extends Animal {
  hablar() {
    console.log(`${this.nombre} ladra.`);
  }
}

const miPerro = new Perro('Firulais');
miPerro.hablar(); //Firulais ladra


/* Módulos
ES6 introdujo el soporte para módulos, lo que permite dividir el código en archivos separados y reutilizables. */

// archivo math.js
export const addition = (a, b) => a + b;
export const resta = (a, b) => a - b;

// archivo main.js
import {addition, resta } from './math.js';
console.log(addition(2, 3)); // 5
console.log(resta(5, 2)); // 3


/* Iteradores y Generadores
Los iteradores y generadores proporcionan una manera poderosa de trabajar con colecciones de datos. */

function* generadorId() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const gen = generadorId();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3


