//    variables

var a; // declarando
var b = 'b'; // declaramos / asignamos
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion

// Global scope
var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();


function countries(){
    country = 'Colombia'; //esto es una variable Global ya que no la delcaro con var, let o const
    console.log(country);
}

countries();
console.log(country);

