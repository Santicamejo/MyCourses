// Estas son dos características introducidas en ECMAScript 8 (ES8): el "string padding" y las "trailing commas". Permíteme explicarte en qué consisten:
// String Padding: El "string padding" se refiere a la capacidad de ajustar la longitud de una cadena de caracteres rellenando con caracteres adicionales, ya sea al principio (padding izquierdo), 
// al final (padding derecho) o en ambos lados. Esta característica es útil cuando deseas que una cadena tenga una longitud específica.
// En ES8, se introdujeron los métodos String.prototype.padStart() y String.prototype.padEnd() para lograr esto:

// padStart(targetLength, padString): Añade caracteres padString al principio de la cadena hasta que la cadena alcance la longitud targetLength.

// padEnd(targetLength, padString): Añade caracteres padString al final de la cadena hasta que la cadena alcance la longitud targetLength.

const saludar = "Hola!";

console.log(saludar.padStart(20, '-'));
console.log(saludar.padEnd(20, '-'));
