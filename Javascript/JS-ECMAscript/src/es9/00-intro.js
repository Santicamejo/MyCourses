/*
ECMAScript 2018 (ES9)
ECMAScript 2018, también conocido como ES9, es una versión del estándar ECMAScript que introdujo varias mejoras y nuevas características al lenguaje JavaScript. 
Estas actualizaciones fueron diseñadas para hacer que el lenguaje sea más potente, flexible y fácil de usar. A continuación, se destacan tres de las principales características 
introducidas en ES9: mejoras en las expresiones regulares (RegEx), el operador de propagación (spread operator) y el operador de parámetros rest (rest operator).

Expresiones Regulares (RegEx)

1. dotAll (s flag):
El flag s permite que el carácter punto ' . 'coincida con cualquier carácter, incluidos los caracteres de nueva línea (\n).*/
const reExp = /foo.bar/s;
console.log(re.test('foo\nbar')); // true

/*2. Lookbehind Assertions:
Permiten verificar que un patrón precede a otro sin incluirlo en la coincidencia.*/ 
const reExp1 = /(?<=\$)\d+/;
console.log(re.test('$100')); // true

/*3. Unicode Property Escapes -----------------------------------------
Facilita la coincidencia de caracteres basados en propiedades Unicode. */
const reExp2 = /\p{Script=Greek}/u;
console.log(re.test('αβγ')); // true

/*Operador de Propagación (Spread Operator) --------------------------------------------------
Permite copiar propiedades de objetos o elementos de arrays en un solo nivel de profundidad.*/
const obj = { a: 1, b: 2 };
const copia = { ...obj, c: 3 };
console.log(copia); // { a: 1, b: 2, c: 3 }

/*Operador de Parámetros Rest (Rest Operator) -----------------------------------------------------------------------
Recopila múltiples elementos en un solo array u objeto, permitiendo manejar parámetros variables y destructuración.*/
const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(rest); // { b: 2, c: 3 }
