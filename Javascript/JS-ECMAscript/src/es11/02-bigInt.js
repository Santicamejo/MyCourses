/*
Límites numéricos en JavaScript
JavaScript tiene límites numéricos, un máximo Number.MAX_SAFE_INTEGER y un mínimo Number.MIN_SAFE_INTEGER. 
Fuera de estos límites, los cálculos matemáticos pueden fallar y mostrar resultados erróneos. 
Con BigInt esto se resuelve.
*/

const aBigNumer = 97319371937923779438n;
const anotherBigNumberString = BigInt('97319371937923779438')
const anotherBigNumberInt = BigInt(97319371937923779438)
//A bigInt debemos pasarle los numero en string para que el los transforme a numeros ya que están más allá del rango de enteros representables de manera segura.
console.log(aBigNumer);
console.log(anotherBigNumberString);
console.log(anotherBigNumberInt);

