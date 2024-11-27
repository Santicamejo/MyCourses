// Factory pattern y RORO

// FACTORY PATTERN
// La función requiredParam es una función auxiliar que se utiliza para asegurarse de que ciertos parámetros sean proporcionados al llamar a otra función. 
// Su propósito es lanzar un error si un parámetro requerido no se pasa o se pasa como undefined.
// En el código, la función requiredParam se utiliza en la función createNewPerson para los parámetros name y email. 
// Estos parámetros se definen utilizando la sintaxis de desestructuración de objetos y se les asigna 
// el valor de requiredParam("name") y requiredParam("email") respectivamente. 
// Cuando se llama a la función createNewPerson, los valores de name y email deben ser proporcionados como argumentos. 
// Si alguno de estos argumentos no se pasa o se pasa como undefined, 
// la función requiredParam lanzará un error. El mensaje de error especificado en la función requiredParam indica qué parámetro es obligatorio.
// Por ejemplo, si se llama a la función createNewPerson de la siguiente manera:

// createNewPerson({ name: "John Doe" });

// Se lanzará un error con el mensaje "email es obligatorio", 
// porque el parámetro email no se proporcionó. 
// En resumen, la función requiredParam es una forma de asegurarse de que se proporcionen todos 
// los parámetros requeridos al llamar a una función y de lanzar un error si alguno de ellos falta. 
// Esto ayuda a garantizar que la función se llame con los argumentos adecuados y evita errores o resultados inesperados en el código.

function requiredParam(campo) {
    throw new Error(campo + " no puede estar vacío");
}

// RORO (Receive One, Return One): 
// El concepto RORO es una convención en JavaScript que se utiliza para indicar que una función recibe un solo argumento y devuelve un solo valor. 
// Ayuda a mejorar la legibilidad y el entendimiento del código, ya que es más fácil comprender la entrada y salida de la función.
// . Ejemplo práctico: Supongamos que tienes una función que toma un número como argumento y devuelve su cuadrado. 
// Puedes aplicar el concepto RORO de la siguiente manera:


// function square(number) {
//   return number * number;
// }

// const result = square(5);
// console.log(result); // Output: 25

// En este ejemplo, la función square recibe un argumento (number) y devuelve el resultado del número al cuadrado.
// Al aplicar el concepto RORO, queda claro que la función toma un solo valor y devuelve otro valor, 
// lo que facilita su comprensión.

function creatNewPerson({
    name = requiredParam('name'),
    age = requiredParam('age'),
    email = requiredParam('email'),
    twitter = undefined,
    intagram,
    facebook,
    workExp = [],
}){
    return{
        name: name,
        age: age,
        email: email,
        socialMedia: {
            twitter: twitter,
            intagram: intagram,
            facebook: facebook,
        },
        workExp: workExp,
    }
} 

const person = creatNewPerson({
    name: 'Santiago',
    email: 'sm681150@gmail.com',
    twitter: 'sannti1233',
    intagram: 'santi.camejo21',
})

const person1 = creatNewPerson({
    name: 'Carlito',
    age: 22,
    email: 'carlito@jamiel.com',
    twitter: 'carlos123',
})





