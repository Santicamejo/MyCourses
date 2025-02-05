// Flat nos devuelve una matriz de cualquier sub-Matriz(arrays)
const arr = [1,2,3,[4,5,6,[7,8,9]]]
console.log(arr.flat(2)); //el 2 hace referencia a la cantidad de niveles que "aplana" la matriz

//flatMap aplana el resultado y le aplica una funcion que agrega al array.
const array = [1,3,5];
console.log(array.flatMap(x => [x, x * 2]));
// OUTPUT [ 1, 2, 3, 6, 5, 10 ]
