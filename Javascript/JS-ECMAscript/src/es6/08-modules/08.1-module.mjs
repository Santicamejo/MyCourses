import hello from "./module.mjs";

hello();

// Al momento de intentar ejecutar la funcion importada del modulo me da este error: [MODULE_TYPELESS_PACKAGE_JSON] ya que en el Package no declare que mi proyecto va a contener modulos, para declarar que nuestro proyecto contendra modulos debemos colocar debajo de licence lo siguiente " "type": "module" "

// Otra forma de hacelo es colocarle a los archivos que contengan modulos la extencion de .mjs


// Existen dos tipos de exports/imports

// export default myFunction;
// export {myFunction};

// import myFunction from "./myFunction"
// import {myFunction} from "./myFunction"
// Default se usa cuando solo devuelves un elemento y no quieres restringir el nombre. 
// Export const restringe el nombre y ademas te permite devolver multiples funciones o constantes


// En caso de que estés trabajando en un proyecto muy básico sin dependencias y no tienes un archivo JSON, 
// puedes agregar el atributo type="module" al script en tu html.

// <script src="./index.js" type="module"></script>