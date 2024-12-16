var lastName = "David";
lastName = "Oscar";
console.log(lastName);

let fruit = "apple";
fruit = "kiwi";
console.log(fruit);

const animal = "Dog";
animal = "Cat";
console.log(animal);
//Error no se puede re-asignar un const

const fruits = () => {
    if (true) {
        var fruit1 = "Apple"; //function scope
        var fruit2 = "Kiwi"; // Block Scope
        const fruit3 = "Banana"; // Block Scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits()