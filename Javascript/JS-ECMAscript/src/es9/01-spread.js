// Ahora en es9 podemos usar rest y spread con Objetos

const persona = {
    name: 'sannti',
    age: 22,
    country: 'UY',
}

const userStatus = {
    ...persona,
    platform: 'student',
}

console.log(userStatus);

// Cuidado con la copia en diferentes niveles de profundidad
// El operador de propagación sirve para crear una copia en un solo nivel de profundidad, 
// esto quiere decir que si existen objetos o arrays dentro de un objeto a copiar. 
// Entonces los sub-elementos en cada nivel, tendrán la misma referencia en la copia y en el original.


const original = { datos: [1, [2, 3], 4, 5] }
const copia = { ...original }

original === copia // false
original["datos"] === copia["datos"] // true
// La manera de solucionar esto es más compleja, tendrías que utilizar el operador de propagación para cada elemento en cada nivel de profundidad.

// Sin embargo, recientemente salió una forma de crear una copia profunda con StructuredClone. Aunque es una característica muy reciente, así que revisa que navegadores tienen soporte.


const original = { datos: [1, [2, 3], 4, 5] }
const copia = structuredClone(original)

original === copia // false
original["datos"] === copia["datos"] // false