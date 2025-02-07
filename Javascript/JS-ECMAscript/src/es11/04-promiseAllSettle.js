// Promise.allSettled()
// Ejecuta todas las promesas sin importar si son rechazadas o no.

const promise1 = new Promise((resolve, reject) => reject(new Error('la promesa no fue resuelta')));
const promise2 = new Promise((resuelto, rechazado) => resuelto("Resuelto")); 
const promise3 = new Promise((resolve, reject) => resolve("Resuelto 2")); 

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response))
.finally(x => console.log("-----------------------------------------------"))

// Tambien existe

// Promise.all()
// El método Promise.all(iterable) devuelve una promesa que termina correctamente cuando todas las promesas en el argumento iterable han sido concluídas con éxito, 
// o bien rechaza la petición con el motivo pasado por la primera promesa que es rechazada. 
// MDN (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)


