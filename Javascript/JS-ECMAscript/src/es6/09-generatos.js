/* Que es una función generadora?
    Una "generator function" (función generadora) en JavaScript es una función especial que puede pausar su ejecución y luego reanudarla más tarde. 
    Estas funciones utilizan la palabra clave function* para declararse y yield para devolver valores intermedios.
    Son útiles cuando se trabaja con secuencias de valores grandes o infinitas, 
    ya que permiten producir los valores uno a uno según se necesiten, en lugar de todos a la vez.
*/

// Para saber que es una funcion generadora le colocamos un asterisco a function
function* iterate(array) {
    for (const pos of array) {
        yield pos;
    }
}

const it = iterate([1,2,3,4,5]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

// La palabra clave yield detiene la ejecución de la función generadora y 
// el valor de la expresión que sigue a la palabra clave yield se devuelve

// yield <expression>
// Si expression se omite, devuelve undefined en su lugar.

// En la guardería de Michis "Michilango", están registrando nuevos michis, pero necesitan una forma de identificarlos.
// Tu tarea será proveer de una función getId() que se encargue de generar dichos identificadores y, a través de un método .next() se pueda pasar al siguiente identificador, 
// y a través de la propiedad .value se pueda obtener el valor del nuevo identificador.
// Cada vez que llame a la función de la siguiente forma debería retornarme un identificador nuevo y completamente diferente:

// const id = getId();
// id.next().value

// El identificador puede ser de cualquier tipo (números o cadenas de texto), la única condición es que cada nuevo identificador que se retorne debe ser completamente diferente a los retornados anteriormente.

// Debes usar generadores de JavaScript para resolver este ejercicio. La solución debería tener un input y output como los siguientes:

//Tarea 1: ------------------------------

// Input:

// const id = getId()
// id.next().value
// id.next().value
// id.next().value

// Output:

// 1
// 2
// 3

//Tarea 2: ------------------------------

// Input:

// const id = getId()
// id.next().value
// id.next().value
// id.next().value

// Output:

// AX6SF5S
// G7QNW01
// KH3BR02