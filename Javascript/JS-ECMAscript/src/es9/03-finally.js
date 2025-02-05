/*
En ES9 Tambien se agrego el .finally
Permite ejecutar una función una vez que una promesa ha sido resuelta o rechazada, sin importar el resultado. 
Este método es útil para realizar tareas de limpieza o finalizar operaciones, 
sin duplicar el código en ambos casos de éxito y error.
EJEMPLO -----------------------------------------------*/
const miPromesa = new Promise((resolve, reject) => {
    // Simulación de operación asíncrona
    setTimeout(() => resolve('Éxito - Resolve'), 2500);
});

miPromesa
    .then((mensajeDeExito) => {console.log(mensajeDeExito);})
    .catch((mensajeDeError) => {console.error(mensajeDeError);})
    .finally(() => {console.log('Finally SIEMPRE se ejecuta aunque la promesa sea reject y caiga en el catch');});



//Clase de ES6/Promises moficada con Finally.
function lanzarDado() {
    function generateDice(faces){
        return Math.floor(Math.random()* faces) + 1;
        }

    let num = generateDice(6);

    return new Promise((resolve, reject) => {
        if(num % 2 == 0){
            setTimeout(() => resolve('El número '+(num)+' es par'), 2500);
        }else{
            setTimeout(() => reject('El número '+(num)+' es impar'), 2500);
        }
    });
}

lanzarDado()
    .then(response => console.log(response))
    .catch(err => console.error(err))
    .finally(()=> console.log("Operacion Completada!")); //ES9

// Esto lo podriamos usar por ejemplo Cuando aguardamos una respuesta de una API, de error o no podriamos crar un Finnaly
