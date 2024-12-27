// En JavaScript, las tareas que llevan tiempo, como las solicitudes a servidores, consultas, requerimientos, etc, pueden bloquear la ejecución de un programa, 
// lo que significa que el código no seguirá ejecutándose hasta que la tarea se complete. Esto puede hacer que una aplicación parezca "congelada" y no responda a las interacciones del usuario. 
// Las funciones asíncronas se utilizan para evitar este problema al permitir que el programa continúe ejecutándose mientras se espera que se complete una tarea. 
// Puedes mirarlo como una "Ejecución en segundo plano" o "Ejecución paralela" en otras palabras.

const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) //if ternario
            ? setTimeout(() => resolve('Async!!'), 2000)
            : reject(new Error('Error!'));
    })
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log("Hello");
}

console.log('Before');
anotherFn();
console.log('After');

