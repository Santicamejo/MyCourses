// ¿Qué es recursividad?
// Recursividad es una técnica de programación que consiste en que una función se llama a sí misma y crea una nueva ejecución de nuestra función

let numero = 0;

while(numero < 10){
    console.log(numero);
    numero++;
}

// en recursividad sería
function recursiva(numero){
    console.log(numero);
    if(numero < 5){
return recursiva(numero + 1);
    }else {
        return 5;
    }
}
// Imprime el número
// Con un condicional se valida si el número es menor a 5, si es así se llama a la función recursiva, si no, se retorna el número 5.
// Se llama a la función recursiva, y se le pasa el número + 1.
function recursiva(){
    if (/* validación */){
        //llamados recursivo
    }else {
        //llamados normales, sin recursividad
    }
}

// un ejemplo en recursivo sería así:
function recursiva(numbersArray){
    if(numbersArray.length != 0){
        const firstNumber = numbersArray[0];
        console.log(firstNumber);
        numbersArray.shift();
        return recursiva(numbersArray);

    }
}
// tenemos un condicional que valida si el array tiene algún elemento
// si es así, se imprime el primer elemento del array
// se llama a la función shift() para eliminar el primer elemento del array
// se llama a la función recursiva, pero ahora con el array sin el primer elemento
// Vamos llamando a la función recursiva con un array cada vez más pequeño hasta que ya no tenga ningún elemento


function recursiva() {
    if (/* Validación */) {
    // llamados recursivos 
    } else  {
    // llamados normales, sin recursividad
    }
}

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let num  = 0;

for(let index = 0; index < numeros.length; index ++) {
    numeritos = numeros[index]
    console.log({index, numeritos})
}

let numerines = [1,2,3,4,5,6,7,8,9,10,11,12,13];

function recursiva(arr) {
    if(arr.length != 0) {
        const firstNumb = arr[0];
        console.log(firstNumb);
        arr.shift();
        return recursiva(arr);
    }
}




// Deep Copy con recursividad -----------------------------------------
//Obj1 pertenece a la clase de Memoria
const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    },
    f: [1,2,3,4],
    editA() {
        this.a = 'Abracadabra'
    }
};

function isArray(elemento) {
    return Array.isArray(elemento)
}

function isObject(elemento) {
    return typeof elemento == "object" && isArray(elemento) === false;
}



function deepCopy(elemento) {
    let copyElemento;

    const elementoIsObject = isObject(elemento);
    const elementoIsArray = isArray(elemento);  

    if (elementoIsArray) {
        copyElemento = [];
    } else if(elementoIsObject){
        copyElemento = {};
    } else {
        return elemento;
    }
    for(index in elemento) {
        const indexIsObject = isObject(elemento[index]);

        if (indexIsObject) {
            copyElemento[index] = deepCopy(elemento[index])
        } else {
            if (elementoIsArray) {
                copyElemento.push(elemento[index]);
            }else{
                copyElemento[index] = elemento[index];
            }
        }
    }

    // debugger

    return copyElemento;
}

const objeto2 = deepCopy(obj1);

