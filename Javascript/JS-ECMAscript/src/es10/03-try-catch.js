//En esta version de ES10 se agrega que el manejo del error es opcional, es decir que cuando cae en el catch podes o no agregarle el error que te da.
try {
    hello();
} catch (error) {
    console.log(error); //Esto nos muestra en la consola el error de que no tenemos ninguna funcion hola();
}

try {
    bye();
} catch {
    console.log("Esto es un Error.") //En este caso ignoro el error que me tira la consola y 'hago' uno personalizado
}