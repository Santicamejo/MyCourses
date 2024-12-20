const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("Hey lo logramos!")
        } else {
            reject("No funciono:(")
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))

//.then() es un método de la promesa que retorna anotherFunction(), no es "algo llamado then" y si bien es una 'palabra reservada', decir que es una 'palabra reservada' no aporta nada, es un método, y por ser un método se "llama" o "ejecuta" y recibe parámetros, en este caso un callback....

// https://www.youtube.com/watch?v=ppzrpTjwEC8