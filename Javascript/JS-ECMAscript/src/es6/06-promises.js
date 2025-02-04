/* 
Promises:
Las promesas son un objeto que representa el resultado eventual de una operación asíncrona. 
Permiten escribir código asíncrono de una manera más limpia y manejable que con callbacks anidados

FUNCIONAMIENTO -----------------------------------------------------------------------------------------------------
Creación de una promesa:
Se crea usando el constructor Promise, que acepta una función ejecutora (executor function). 
Esta función toma dos argumentos: resolve y reject. En caso de éxito, se llama a resolve, y en caso de error, se llama a reject. */
const myPromise = new Promise((resolve, reject) => {
    // Operación asíncrona
    if (false) {
        resolve('Resolve Ejecutado');
    } else {
        reject('Reject Ejecutado');
    }
});

/*
Manejo del éxito ---------------------------------------------
Se utiliza el método .then para manejar el éxito de una promesa. 
Acepta dos funciones: la primera para manejar el éxito y la segunda para manejar errores.
*/
myPromise.then(
    (mensajeDeExito) => {
        console.log(mensajeDeExito);
    },
    (mensajeDeError) => {
        console.error(mensajeDeError);
    }
);

/*
Manejo de errores: 
Se utiliza el método catch para manejar errores. Acepta una función que será llamada en caso de que la promesa sea rechazada.
*/
myPromise.then((mensajeDeExito) => {
    console.log(mensajeDeExito);
}).catch((mensajeDeError) => {
    console.error(mensajeDeError);
});

/*------------------------------------- EJERCICIO -------------------------------------*/
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("Ey lo logramos!")
        } else {
            reject("No funciono:(")
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))

//.then() es un método de la promesa que retorna anotherFunction(), no es "algo llamado then" y si bien es una 'palabra reservada', 
// decir que es una 'palabra reservada' no aporta nada, es un método, y por ser un método se "llama" o "ejecuta" y recibe parámetros, 
// en este caso un callback

/*
------------------------------------- EJERCICIO -------------------------------------
Vamos a simular el lanzamiento de un dado que genera un número aleatorio entre 1 y 6. 
La tarea es usar una promesa para determinar si el número es par o impar.
La promesa se debe resolver si el número es par y rechazar si el número es impar. 
Luego, utilice los métodos .then y .catch para imprimir mensajes apropiados en cada caso.
*/
function lanzarDado() {
    function generateDice(faces){
        return Math.floor(Math.random()* faces) + 1;
        }

    let num = generateDice(6);

    return new Promise((resolve, reject) => {
        if(num % 2 == 0){
            resolve('El número '+(num)+' es par');
        }else{
            reject('El número '+(num)+' es impar');
        }
    });
}

lanzarDado().then(
    (mensajeDeExito) => {
        console.log(mensajeDeExito);
    },
    (mensajeDeError) => {
        console.error(mensajeDeError);
    }
);


// https://www.youtube.com/watch?v=ppzrpTjwEC8