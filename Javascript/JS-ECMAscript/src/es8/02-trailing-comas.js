// Trailing Commas:
// Las "trailing commas" se refieren a la capacidad de agregar comas adicionales al final de listas de elementos, como en arreglos y objetos. Antes de ES8, agregar una coma después del último elemento en una lista podía generar errores en algunos navegadores.
// En ES8, se permiten las comas adicionales al final de estas listas, lo que puede hacer que el código sea más limpio y facilite la adición o eliminación de elementos sin necesidad de modificar la última línea.
// Ejemplo de arreglo con "trailing comma":

const numeros = [1, 2, 3, , , , ]

console.log(numeros);
console.log(numeros.length);

