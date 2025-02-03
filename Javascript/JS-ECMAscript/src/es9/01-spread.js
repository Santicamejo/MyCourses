// En Es9 se introdujo el uso de Spread Operator(...) y Rest para Objetos.

// SPREAD... la sintaxis de Spread Operator(...) nos permite separar elementos de un objeto, array o string como en el sigueinte ejemplo
const person = {
    name: 'Santiago',
    age: 22,
    country: 'UY',
    ID: 5266552, 
    CI: '5.278.906-5'
};

const {name, age, country, ...private} = person

personProfile = {
    username: 'Tussi',
    name: name,
    age: age,
    country: country,
    acountBirthday: '21-05-2002',
    // ...private
}

console.log(personProfile);

console.log(person);
console.log(private);

/*  
    Con el Spread Operator debemos tener Cuidado con la copia en diferentes niveles de profundidad, 
    El Spread Operator sirve para crear una copia en un solo nivel de profundidad, 
    esto quiere decir que si existen objetos o arrays dentro de un objeto a copiar. 
    Entonces los sub-elementos en cada nivel, tendrán la misma referencia en la copia y en el original. <--
*/

const original = { datos:[1,[2,{num: 3}], 4, 5], borrar(){this.datos.pop();}};

const copia = { ...original };

original === copia;
original["datos"] === copia["datos"];

original.borrar();

original
copia
/* 
    La manera de solucionar esto es más compleja, tendrías que utilizar el operador de propagación(Spread Operator) para cada elemento en cada nivel de profundidad.
    Sin embargo, recientemente salió una forma de crear una copia profunda con StructuredClone. 
    Aunque es una característica muy reciente, así que revisa que navegadores tienen soporte. Otra opcion es crear una funcion deepCopy.
*/

const OG = {datos: [1, [2, 3], 4, 5]};
const copy = structuredClone(OG);

OG === copy;
OG["datos"] === copy["datos"];