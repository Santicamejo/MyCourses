/*En esta version se introducen dos nuevas maneras de declarar variables: let y const. 
Estas declaraciones tienen un ámbito de bloque, lo que significa que solo están 
disponibles dentro del bloque donde se definen.*/

var lastName = "David";
lastName = "Oscar";
console.log(lastName);

//let se puede re-definir.
let fruit = "apple";
fruit = "kiwi";
console.log(fruit);

//const NO se puede re-definir. ya que es Constante(Constant)
const animal = "Dog";
animal = "Cat";
console.log(animal);

//Funcion con Creo una funcion con arrowFunction llamada fruits
const fruits = () => {
    if (true) {
        var fruit1 = "Apple"; //function scope
        let fruit2 = "Kiwi"; // Block Scope
        const fruit3 = "Banana"; // Block Scope
    }
    console.log(fruit1); //Apple
    console.log(fruit2); //Error 
    console.log(fruit3); //Error
}

fruits()