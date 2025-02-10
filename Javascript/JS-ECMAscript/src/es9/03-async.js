/* 
async y await son funcionalidades introducidas en ECMAScript 2017 (ES8) 
que permiten escribir código asincrónico de manera más sencilla y legible.

Beneficios
Mayor legibilidad: El código asincrónico se parece más al código síncrono, lo que hace que sea más fácil de leer y mantener.
Manejo de errores: Puedes utilizar try...catch para manejar errores, lo cual es más intuitivo que manejar errores con .catch en promesas.


ASYNC
La palabra clave async se utiliza para declarar una función como asincrónica.
Una función async siempre devuelve una promesa.
Puedes utilizar await dentro de una función async.

AWAIT
La palabra clave await solo se puede utilizar dentro de funciones declaradas con async.
await se utiliza para pausar la ejecución de la función async hasta que una promesa se resuelva o se rechace.
Al utilizar await, el código parece síncrono, aunque se esté ejecutando de forma asincrónica.
*/

async function* anotherGenerator() { //Funcion Generadora Asincrónica
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const func = anotherGenerator();
func.next().then(response => console.log(response.value));
func.next().then(response => console.log(response.value));
func.next().then(response => console.log(response.value));

console.log("Hello!");
console.log("World!");



// Ejemplo 2
const names = ['Sannti','Javier','Virginia']

async function arrayOfNames(arr) {
  for await(let value of arr) {
    console.log(value);
  }
}

arrayOfNames(names);
console.log('after');

//Tarea Busqueda de Criminales dentro de una base de datos;
const policeDB = [
  {fullName: 'Fabian Gomez', age: 45, criminalRecord: 21, ci: '3.032.334-3', cap: 'SI'},
  {fullName: 'Carlos Roland', age: 53, criminalRecord: 14, ci: '2.765.983-7', cap: 'NO'},
  {fullName: 'Gerardo Romero', age: 25, criminalRecord: 6, ci: '4.934.423-5', cap: 'SI'}];


function searchPerson(ci) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      let criminal = policeDB.find(p => p.ci === ci);
      if (criminal) {
        resolve(criminal);
      }else{
        reject(new Error('La Cedula no fue encontrada, intente con otra.'))
      }
    }, 1500);
  })
}

async function initSearch(ci) {
  try {
    console.log('---------- Iniciando Busqueda -----------');
    const dato1 = await searchPerson(ci)
    console.log(`Nombre completo: ${dato1.fullName}`);

    const dato2 = await searchPerson(ci)
    console.log(`Edad: ${dato2.age} años`);

    const dato3 = await searchPerson(ci)
    console.log(`${dato3.criminalRecord} Antecedentes`);

    const dato4 = await searchPerson(ci)
    if (dato4.cap === 'SI') {
      console.warn("El individuo tiene orden de captura.");
    }else{
      console.log('No tiene orden de captura.');
    };
  }catch(err){
    console.error(`Error de Busqueda: ${err.message}`);
  }finally{
    console.log('---------- Busqueda Finalizada ----------');
  }
} 

initSearch('3.032.334-3');

/*
--------------------------------------------- RESUMEN ---------------------------------------------
Las palabras clave async y await permiten escribir código asincrónico de manera más clara y manejable, 
simplificando el manejo de promesas en JavaScript. Una función marcada con async devuelve una promesa, y 
await se utiliza para esperar a que una promesa se resuelva, permitiendo que el código parezca y se comporte de forma más secuencial.
*/
