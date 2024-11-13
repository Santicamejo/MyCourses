const estudiantes = [
    "Sannti",
    "Joaco",
    "Pedro",
    "Javier",
    "Francisco",
    "Jaime",
    "Rosana",
    "Pedro"
]

console.log(estudiantes);

/*
¿Que es un objeto en javascript?
Todos los lenguajes de programacion tienen estructuras y tipos de  datos, Casi todos los lenguajes de programacion tienen arrays, Ejemplos:
PHP - Arrays
    $estudiantes = [
    "Sannti",
    "Pedro",
    "Federica",
    "Fabian",
    "Julio",
    ]
    
PHP - Arrays Asiociativos (Llave - Valor)
    $estudiantes = [
    "Sannti" => 110,
    "Pedro" => 300,
    "Federica" => 220,
    "Fabian" => 290,
    "Julio" => 900,
    ]

Python - ademas de los arrays como en PHP tambien tenemos los: Diccionarios
    estudiantes = {
    'Sannti': 200,
    'Federica: 500,
    'Fabian': 400,
    'Carlos': 900,
    'Javier': 600,
    'Jaime': 100,
    }

JAVASCRIPT - Objetos literales
    const estudiantes = {
    'Sannti': 200,
    'Fede': 100,
    'Fabi': 800,
    'Javi': 300,
    'Pedri': 400,
    }

    objetos literales !== instancias
(Osea son instancias pero de del prototipo objet que viene creado por defecto en Javascript)

Programacion orientada a objetos en distintos lenguajes
PHP
   class estiudiantes {
   public $name = 'Nombre'
   public $age = '18'
   public $points = '750'
   }

   $juanita = new estiudiantes; 

PYTHON 
    class estudiantes:
    name: Nombre'
    age: 18
    points: 750

    juanita = estudiantes();

JAVASCRIPT
    function estudiantes() {
    this.name = 'Nombre';
    this.age = 18;
    this.points = 750;
    }
    
    const juanita = new estudiantes();


    */