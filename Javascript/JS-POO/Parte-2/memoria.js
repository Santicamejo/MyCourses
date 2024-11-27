// Cómo funciona la memoria en JavaScript

const santi = {
    age: 22,
    email: 'sm681150@gmail.com',
};

const juanita = santi;

console.log({santi, juanita})
// {santi: {…}, juanita: {…}}
// juanita: {age: 22, email: 'sm681150@gmail.com'}
// santi: {age: 22, email: 'sm681150@gmail.com'}


// Intentamos re-asignar los valores SOLO de juanita
juanita.email = 'juanita@gmail.com';
juanita.age = 20;

console.log({santi, juanita})
// {santi: {…}, juanita: {…}}
// juanita: {age: 20, email: 'juanita@gmail.com'}
// santi: {age: 20, email: 'juanita@gmail.com'}

/* 
Las variables son una referencia a un espacio en memoria. 
Dependiendo del tipo de valor que sean serán ubicadas en alguna de las dos tipos de memoria:

    Stack - Mucho más rápida, pero sin tanto espacio
    Heap - Más lenta, pero con mucho más espacio

Las variables que no tienen un valor de tipo objeto, son almacenadas en la memoria stack. 
Las variables que tienen como valor un objeto, funcionan de una manera diferente:

El valor (objeto) es guardada en la memoria heap
En la memoria stack se guarda un apuntador (pointer) hacia la memoria heap
Es por esto que cuando nosotros asignamos una variable que tiene como valor un objeto, 
a una nueva variable, lo unico que hacemos es asignar el apuntador. Es así que al modificar el objeto, 
en cualquiera de las dos variables, los cambios se reflejan en las dos 

Entonces como creamos un objeto a base de otro? 

la primera opcion que tenemos es Shallow copy:

    Shallow Copy se refiere a la forma de crear un nuevo objeto a partir de las propiedades de otro. 
    Esta copia solo se hace a un nivel alto, no se hace con objetos dentro de objetos (nested objects), 
    lo que provoca que la modificación de una de sus propiedades, modifique el objeto principal.
*/
const obj1 = {
    a: "A",
    b: "B",
    c: {
        d: "D",
        e: "E",
    }
};

const obj2 = {};

console.log(obj1)
// obj1: {a: 'A', b: 'B'}

for(prop in obj1) {
    obj2[prop] = obj1[prop]
}

console.log({obj1,obj2})
// obj1: {a: 'A', b: 'B'}
// obj2: {a: 'A', b: B'}

obj2.b = "Burro"

console.log({obj1,obj2})
// obj1: {a: 'A', b: 'B'}
// obj2: {a: 'A', b: 'Burro'}

// AGREGAMOS A OBJ1 UN OBJETO DENTRO QUE SEA C

obj1.c.d = "Dedo"
obj1.c.e = "Electrodo"

console.log({obj1, obj2})
// Al nosotros crear un objeto dentro de otro estamos haciendo un pointer a un espacio de memoria es decir, 
// c fue creado en el Heap donde nosotros le estamos haciendo referencia por ende no podemos modificarlo solo en a o b

const obj3 = Object.assign({}, obj1);
// Esto lo que hace es crear un objeto vacio que copia las propiedades de obj1 pero aun seguimos teniendo el problema de C
const obj4 = Object.create(obj1);
// esto nos crea un nuevo objeto en base a el obj1, nosotros podemos modificar el obj4 sin alterar otros, pero si modificamos el obj1 si se modifica el obj4


// JSON.parse y JSON.stringify

const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    },
    editA() {
        this.a = 'Abracadabra'
    }
};

const stringifiedComplexObj = JSON.stringify(obj1);
// "{\"a\":\"a\",\"b\":\"b\",\"c\":{\"d\":\"d\",\"e\":\"e\"},\"f\":[1,\"2\",3]}"

const obj2 = JSON.parse(stringifiedComplexObj); 
// {a: "a", b: "b", c: {d: "d", e: "e"}}
/*
JSON.stringify()
El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena JSON, reemplazando opcionalmente valores si se especifica una función de reemplazo u opcionalmente incluyendo solo las propiedades especificadas si se especifica una matriz de reemplazo.

Descripción
Los objetos Boolean, Number, and String se convierten a sus valores primitivos, de acuerdo con la conversión semántica tradicional.
Si durante la conversión se encuentra un undefined, una Function, o un Symbol se omite (cuando se encuentra en un objeto) o se censura a null (cuando se encuentra en un array). 
JSON.stringify() puede devolver undefined cuando se pasan valores "puros" como JSON.stringify(function(){}) o JSON.stringify(undefined).
Todas las propiedades que utilicen Symbol en los nombres de la clave se ignoran por completo, incluso si utilizan una función replacer.
Las instancias de Date implementan la función toJSON() devolviendo una cadena de texto (igual que date.toISOString()). Por lo que son tratadas como strings.
Los números Infinity y NaN, así como el valor null, se consideran null.
El resto de instancias de Object (incluyendo Map, Set, WeakMap, y WeakSet) sólo tendrán serializadas sus propiedades enumerables.
JSON.stringify () convierte un valor en notación JSON que lo representa:

JSON.parse()
El método JSON.parse() analiza una cadena de texto (string) como JSON, transformando opcionalmente el valor producido por el análisis.

Why JSON.parse(JSON.stringify()) is a bad practice to clone an object in JavaScript

-Puedes perder tipos de datos.

-JavaScript no te avisara cuando pierdas algún tipo de dato al usar JSON.stringify(), asi que GG mi rey

-Convierte tipos de datos no soportados en soportados, como infinity y NaN en null

-Los tipos de datos Date serán parseados como strings, no como Date

-No es tan rápido y eficiente.
*/
