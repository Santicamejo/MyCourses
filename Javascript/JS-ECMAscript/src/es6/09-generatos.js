/* 
Que es una función generadora?
Una "generator function" (función generadora) en JavaScript es una función especial que puede pausar su ejecución y luego reanudarla más tarde. 
Estas funciones utilizan la palabra clave function* para declararse y yield para devolver valores intermedios.
Son útiles cuando se trabaja con secuencias de valores grandes o infinitas, 
ya que permiten producir los valores uno a uno según se necesiten, en lugar de todos a la vez.
*/

function* iterate(array) {
    for (const pos of array) {
        yield pos;
    }
}
/* 
La palabra clave yield detiene la ejecución de la función generadora y 
el valor de la expresión que sigue a la palabra clave yield se devuelve
*/
const it = iterate([1,'Piña',3,'Cocodrilo','Fabian']);
console.log(it.next().value);


/*
TAREA 
En la guardería de Michis "Michilango", están registrando nuevos michis, pero necesitan una forma de identificarlos.
Tu tarea será proveer de una función getId() que se encargue de generar dichos identificadores y, a través de un método .next() se pueda pasar al siguiente identificador, 
y a través de la propiedad .value se pueda obtener el valor del nuevo identificador.
Cada vez que llame a la función de la siguiente forma debería retornarme un identificador nuevo y completamente diferente:

const id = getId();
id.next().value

El identificador puede ser de cualquier tipo (números o cadenas de texto), 
la única condición es que cada nuevo identificador que se retorne debe ser completamente diferente a los retornados anteriormente.
Debes usar generadores de JavaScript para resolver este ejercicio. La solución debería tener un input y output como los siguientes:

Input
const id = getId()
id.next().value
id.next().value
id.next().value

Output:
1
2
3
/*------------------------------- TAREA 1 ------------------------------*/
// Generar ids con el metodo Next de la funcion getID
/*------------------------------ SOLUCION ------------------------------*/
function* genID() {
    for (let newId = 1; true; newId++) {
        yield newId   
    }
}

const id = genID();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);

/*------------------------------- TAREA 2 ------------------------------*/
/*Generar ids con numeros y letras

Input:
const id = getId()
id.next().value
id.next().value
id.next().value

Output:
AX6SF5S
G7QNW01
KH3BR02
*/
/*------------------------------ SOLUCION ------------------------------*/
let idS = [];
let num = 0;

function* genID() {
    for (num; num < 10; num++) {
        yield idS.push(Math.random().toString(16).substring(5).toUpperCase());
    }
}

const ID = genID();
for (let i = 0; i < 10; i++) {
    console.log(`${ID.next().value} | ${idS[num]}`); 
}