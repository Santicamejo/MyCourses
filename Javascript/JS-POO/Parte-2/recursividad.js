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




const commonPerson = {
    name: undefined,
    changeName(newName) {
        if (newName === this.name) {
            console.log("El nombre es igual al acutual")
        }else{
            console.log("nombre cambiado correctamente");
            this.name = newName
        }
    },
    age: undefined,
    email: undefined,
    socialmedia: {
        instagram: undefined,
        facebook: undefined,
        Twitter: undefined, 
    }
};

const santi = deepCopy(commonPerson);

Object.defineProperty(santi, "name", {
    value: 'santiago',
    configurable: false,
});


santi.name = 'sannti'; //me deja editarla
delete santi.name; //no me deja borrarla ya que configurable es false

Object.seal(santi); // al ejecutar este metodo hace que el objeto no se pueda borrar
Object.isSealed(santi); // esto valida que el objeto esta 'sellado'


// Abstracción con objetos literales y deep copy
// Object.isSealed()
// El método Object.isSealed() si el objeto está sellado.
// Devuelve true si el objeto está sellado, de lo contrario devuelve false. 
// Un objeto está sellado si no es extensible y si todas sus propiedades no se pueden configurar y por lo tanto no removibles (pero no necesariamente no modificables).

// Object.isFrozen()
// El método Object.isFrozen() determina si un objeto está congelado.
// Devuelve true si el objeto está sellado, de lo contrario devuelve false. 
// Un objeto está sellado si no es extensible y si todas sus propiedades no se pueden configurar y por lo tanto no removibles (pero no necesariamente no modificables).

// Un objeto está congelado si y solo si no es extendible, todas sus propiedades son no-configurables,
// y todos los datos de sus propiedades no tienen capacidad de escritura