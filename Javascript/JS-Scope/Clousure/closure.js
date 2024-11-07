// Permite acceder al ámbito de una funcion exterior desde una funcion interior, las clausuras se crean cada vez que una funcion es creada

// a diferencia de otros conceptos como funciones, variables u otros. los clousures no son siempre utilizados

// Tienes una closure cuando una función cualquiera accede a una variable fuera de su contexto

// Al trabajar con closures entra en juego el concepto de alcance de las variables.

const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { //Funcion interna
        const innerNumber = 2;
        console.log(myNumber, myGlobal);
        
        function child() {
            console.log(innerNumber, myNumber, myGlobal);
        }
        return child();
    }
    return parent();
 }

 myFunction();

// ----------------------------------O-----------------------------------

