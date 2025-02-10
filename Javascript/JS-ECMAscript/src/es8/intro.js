/* ES8 en JavaScript


/* Object.entries() y Object.values()
ES8 introdujo Object.entries() y Object.values() para obtener arreglos de las propiedades clave-valor y los valores de un objeto, respectivamente. */
const obj = { a: 1, b: 2, c: 3 };

console.log(Object.entries(obj)); // [['a', 1], ['b', 2], ['c', 3]]
console.log(Object.values(obj));  // [1, 2, 3]


/* String Padding
ES8 agregó métodos para el relleno de cadenas: padStart() y padEnd(), que permiten rellenar una cadena con otra cadena hasta que alcanza una longitud determinada. */
let cadena = '123';

console.log(cadena.padStart(5, '0')); // '00123'
console.log(cadena.padEnd(5, '0'));   // '12300'


/* Trailing Commas
ES8 permite el uso de comas finales en listas de parámetros y literales de objetos, lo que facilita la adición de nuevos elementos sin cometer errores de sintaxis. */
const arr = [
  1,
  2,
  3,
];

function foo(
  a,
  b,
) {
    //...
}


/* Async/Await
Una de las características más esperadas en ES8 fue la introducción de async y await, 
que simplifica el manejo de operaciones asíncronas al proporcionar una sintaxis más clara y legible en comparación con el uso de promesas. */
async function fetchData() {
    try {
      let response = await fetch('https://api.example.com/data');
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchData();


/* Object.getOwnPropertyDescriptors()
El método Object.getOwnPropertyDescriptors() devuelve todos los descriptores de las propiedades propias de un objeto. */
const obj = { prop: 42 };
const descriptor = Object.getOwnPropertyDescriptors(obj);

console.log(descriptor.prop); // { value: 42, writable: true, enumerable: true, configurable: true }