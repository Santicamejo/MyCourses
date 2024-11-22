// Static: atributos y métodos estáticos en JavaScript
// Hasta ahora habíamos aprendido que apara acceder a los métodos o atributos de una clase o prototipo teníamos que crear una instancia del prototipo(Objeto). Pero hay una forma de que podemos saltarnos tener que crear una instancia del prototipo para acceder a los métodos o atributos, esta es la forma Static

// Para crear atributos estáticos los cuales podamos acceder sin crear un objeto o una instancia de este prototipo, solo hay que agregar al atributo la palabra **static**

// Métodos estáticos de Objetct

// const caja = {
//     form: "square",
//     weight: 20,
//     color: "Brown",
// }

// Object.keys()
// Nos devuelve una lista con todos los keys(nombres claves) de nuestro objeto 'caja'

// Object.keys(caja)
// (3) ["form", "weight", "color"]


// Object.getOwnPropertyNames()
// Hace prácticamente lo mismo que Object.keys con pequeñas diferencias

// Object.getOwnPropertyNames(caja)
// (3) ["form", "weight", "color"]


// Object.entries()
// El método entries nos devolverá un array de arrays donde tendremos nuestra palabra clave con su respectivo valor por cada propiedad del prototipo [key, value]

// Object.entries(caja)
// [
//     0: (2) ["form", "square"]
//     1: (2) ["weight", 20]
//     2: (2) ["color", "Brown"]
// ]


// Object.getOwnPropertyDescriptors()
// Nos devuelve todas las propiedades de los objetos, con sus keys y values, y otros atributos. Los atributos writable, configurable y enumerable es la forma que tiene JavaScript para limitar el acceso modificar o modificación de nuestros atributos o de nuestros objetos.

// Object.getOwnPropertyDescriptors(caja) 

// {
//     color:{
//         configurable: true
//         enumerable: true
//         value: "Brown"
//         writable: true
//     }
//     weight:{
//         configurable: true
//         enumerable: true
//         value: 20
//         writable: true
//     }
//     form:{
//         configurable: true
//         enumerable: true
//         value: "squere"
//     }
// }


// Encapsulamiento
// Si recordamos del curso anterior, el objetivo del encapsulamiento es limitiar quien puede modificar, acceder o ejecutar nuestros metodos o atributos de la clase o prototipo.
// Ahora con las propiedades writable configurable enumerable podemos limitar quien tiene acceso, modificar nuestros objetos.

const santi = {
    name: "santiago",
    age: 22,
    cursosDados: ["curso 1"],

    addCurso(curso) {
        console.log("this ", this);
        console.log("this.cursosDados", this.cursosDados);
        this.cursosDados.push(curso);
    }
}

santi.addCurso("curso 2")

console.log(Object.keys(santi))
// ['name', 'age', 'cursosDados', 'addCurso']

console.log(Object.getOwnPropertyNames(santi))
// ['name', 'age', 'cursosDados', 'addCurso']

console.log(Object.entries(santi))
// 0: (2) ['name', 'santiago']
// 1: (2) ['age', 22]
// 2: (2) ['cursosDados', Array(2)]
// 3: (2) ['addCurso', ƒ]

    console.log(Object.entries(santi)[3][0])
    // 'addCurso'
    console.log(Object.entries(santi)[3][1])
    // ƒ addCurso(curso) {
    //     this.cursosDados.push(curso);
    // }
// lo que estamos haciendo en estos casos es entrar al array en la posicion 3 donde se encuentra el array que guarda la funcion, y luego obtener las dos posiciones que contiene el array de la funcion
console.log(Object.entries(santi)[3][1]("curso 3"))
// this  (2) ['addCurso', ƒ]
// this.cursosDados undefined
    // Uncaught TypeError: Cannot read properties of undefined (reading 'push')
    // at Array.addCurso (<anonymous>:9:26)
// En este caso this ya no esta haciendo referencia al objeto santi ahora hace referencia al array dentro del array. por ende no podemos ejecutar la funcion 'addCurso()'

// antes de ejeutar el Object.getOwnPropertyDescriptors, creamos variantes de las propiedades para ver en la consola

Object.defineProperty(santi, "pruebaNASA",  {
    value: "Extraterestres",
    enumerable: false,
    writtable: false,
    configurable: false,
});

Object.defineProperty(santi, "Navigator",  {
    value: "Chrome",
    enumerable: false,
    writtable: true,
    configurable: true,
});

Object.defineProperty(santi, "VSC",  {
    value: "Extraterestres",
    enumerable: true,
    writtable: false,
    configurable: true,
});

Object.defineProperty(santi, "Consola",  {
    value: "WSL",
    enumerable: true,
    writtable: true,
    configurable: false,
});

console.log(Object.getOwnPropertyDescriptors(santi))
//{name: {…}, age: {…}, cursosDados: {…}, addCurso: {…}}

// Object.defineProperty
// Con esta propiedad se pueden definir nuevas propiedades a nuestro objeto. Así mismo, se puede configurar ciertas características de la propiedad tales como:

// Configurable: Esta indica si la propiedad puede ser borrada o eliminada

// Enumerable: Indica si la propiedad puede ser mostrada en la enumeración de las mismas. Existen ciertos métodos que toman como referencia este valor para mostrar la propiedad

// Writable: Esta indica si la propiedad puede ser modificada con el operador de asignación (=)

// Si queremos modificar un propiedad que tienen writable: false no permitirá que su valor sea modificado

// Object.keys solo muestra las propiedades que tienen enumerable: true. A diferencia de Object.getOwnPropertyNames que muestra todas las propiedades

// Si queremos eliminar propiedad que tienen configurable: false no permitirá que sea borrada del objeto.


// Object.freeze()
// Este método congela un objeto que sea pasado. Es decir:

// Impide que se le agreguen nuevas propiedades
// Impide que sean eliminas propiedades ya existentes
// Impide que sus las propiedades internas (writable, enumerable y configurable) sean modificadas
Object.freeze(santi);


// Object.seal()
// Este método sella un objeto que sea pasada. Es decir:

// Impide que nuevas propiedades sean agregadas
// Cambia en todas las propiedades configurable: false, con lo que impide que sean borradas
// Las propiedades aún puede ser modificadas, ya que writable esta true
Object.seal(santi);