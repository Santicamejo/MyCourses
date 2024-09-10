// const lista = [12,21,90,37 ,47,18];
const listaDesordenada = [2,3,1,5,2];


// Calcula el promedio de dos numero en especifico
function calcularPromedioValores(a, b){

    const suma = a + b; 
    const promedio = suma / 2
    return promedio;
}

// Calcular promedio de un array
function calcularPromedioLista(){

    const largoArr = lista.length;
    const sumaTotal = lista.reduce((x, y) => x + y);
    // (x, y) => x + y  es una funcion flecha, basicamente le entran los parametros (x, y) y los suma;
    const promedio = sumaTotal / largoArr

    console.log("El promedio es: " + promedio);

}   

// Esta funcion define si un array es Par(True) o Impar(False)
 function isPar(lista){
    if(lista.length % 2){
        return false;
    }else{
        return true;    
    }
}

// Ordenar lista desordenada (de menor a mayor)
function ordenarLista(listaDesordenada){
    // function listaordenada(a, b){
    // Una manera de hacer que la fiuncion ordene el array

    //     if(a > b){
    //         return 1;
    //     }else if(a == b){
    //         return 0;
    //     }else if(a < b){
    //         return -1;
    //     }

    // Otra manera 

    //     return a - b;
    //     esta funcion es para ver dos maneras de como funciona la logica de el .sort
    // } 

    const lista = listaDesordenada.sort((a, b) => a - b);
    return lista;
}

// Calcular mediana de un Array(El valor medio de los datos) se usan las funciones isPar y ordenarLista.
function calcularMediana(listaDesordenada){
    const lista = ordenarLista(listaDesordenada);
    const listaPar = isPar(lista); 

    if(listaPar){
        const posicion1 = lista.length / 2 - 1;
        const posicion2 = lista.length / 2;

        const valor1 = lista[posicion1]; 
        const valor2 = lista[posicion2];

        const ValorFinal = calcularPromedioValores(valor1, valor2);
        return "El valor de la mediana PAR es: " + ValorFinal;

    }else{ //impar (Numero central)
       const medianaImpar = Math.floor(lista.length / 2)
       return "El valor de la mediana IMPAR es:  " + lista[medianaImpar] +" de la lista: "+ lista;
    }

}

function calcularModa(listaDesordenada){

    const listaCount = {};

    for(let i = 0; i < listaDesordenada.length; i ++){
        const elemento = listaDesordenada[i];

        if(listaCount[elemento]){
            listaCount[elemento] += 1;
        }else{
            listaCount[elemento] = 1;
        }
    }

    const listaArray = Object.entries(listaCount);

    console.log(listaArray);
    console.log(listaArray[1]);
}


// El metodo Math y alguna de las manera de redondear numeros

// Math.round()
// Obtiene el siguiente numero mas cercano( si es >.5 redondea hacia arriba, si es <.5 redonda hacia abajo)
// Math.round(2.5) // output: 3
// Math.round(2.49) // output: 2

// Math.floor()
// Obtiene el numero entero anterior mas cercano (redondear hacia abajo).
// Math.floor(2.99) // output: 2
// Math.floor(2.5) // output: 2
// Math.floor(2.49) // output: 2

// Math.ceil()
// Obtiene el numero entero siguiente mas cercano (redondear hacia arriba).
// Math.ceil(2.5) // output: 3
// Math.ceil(2.49) // output: 3
// Math.ceil(2.1) // output: 3