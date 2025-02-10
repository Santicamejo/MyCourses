/* Promise.any va a capturar la respuesta de la primera que sea de forma satisfactoria. 
Si es reject la ignora y devuelve el primer resolve. */

const promise1 = new Promise((resolve, reject) => reject(new Error('la promesa no fue resuelta')));
const promise2 = new Promise((resuelto, rechazado) => resuelto("Resuelto")); 
const promise3 = new Promise((resolve, reject) => resolve("Resuelto 2")); 

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response))
.finally(x => console.log("-----------------------------------------------")) 
