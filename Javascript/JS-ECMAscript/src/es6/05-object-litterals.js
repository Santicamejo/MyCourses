/*  enhance object literals
Los objetos literales permiten crear objetos a partir de variables sin tener que reperit los nombres de las variables en la creación del objeto.
Por ejemplo, antes de ES6, para crear un objeto a partir de variables se utilzaba la siguiente sintaxis */

const nombre = "Juan";
const edad = 30;

const objeto = {
    nombre: nombre,
    edad: edad
}
console.log(objeto);

// Con los literales se puede obviar la repetición de nombres y simplificar el código:

const nombre1 = "Juan";
const edad1 = 30;

const objeto1 = {nombre1, edad1};
console.log(objeto1);

// Esto creará el mismo objeto que en el ejemplo anterior.
// Además, se pueden combinar variables con nombres diferentes apra crear propiedades del objeto:

const nombre2 = "Juan";
const edad2 = 30;
const identificador = 1234;

const objeto2 = {
    nombre2,
    edad2,
    id: identificador
};

console.log(objeto2);

// En este caso, la propiedad “id” se crea a partir de la variable “identificador”

function newUser(name, age, country, Uid) {
    return {
        name,
        age,
        country,
        id: Uid,
    }
}

console.log(newUser("sannti", 22, "UY", 2));


function dog(name, age) {
    this.name = name;
    this.age = age;
    this.barking = function() { 
        return `${this.name} says WOOF`
    }
}
const Tobi = new dog("Tobi", 3)
console.log(Tobi);
console.log(Tobi.barking());