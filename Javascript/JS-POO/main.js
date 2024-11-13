const objetoLiteralVacio = {}; // __proto__

const alumno = {
    name: 'Santiago',
    age: 22,
    cursosAprobados: [
        "Curso de PHP", "Curso de CSS"
    ],
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
      //this hace referencia al elemento 'alumno'
    }
/*  ↑ esto es la misma sintaxis que esto:
    aprobarCurso: function(nuevoCurso) {
    }
*/
};

//Supongamos que santiago aprobo un nuevo curso:
alumno.cursosAprobados.push('Curso de Cocina')

alumno.aprobarCurso('curso de fisica')

console.log(alumno.cursosAprobados);

//Prototipo ↓
function alumnos(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

const alumnoUno = new alumnos(
    'santiago',
    22,
    ['Geometria', 'Matematicas', 'CSS'],
)

alumnos.prototype.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso)
    console.log(alumnoUno);
}

alumnos.prototype.removerCurso = function () {
    this.cursosAprobados.shift();
    console.log(alumnoUno);
}

alumnoUno.aprobarCurso('Gastronomia Avanzada')
alumnoUno.removerCurso();

// Prototipos con la sitaxis de clases
class Students {
    constructor(name, age, cursosAprobados) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
    
    removerCurso() {
        this.cursosAprobados.pop();
    }

} 

const student = new Students(
    'santiago',
    22,
    ['Analisis de datos', 'Analisis de terrenos'],
);

student.aprobarCurso('Creacion de globos aeroestaticos')

// Creacion de un constructor pasando los datos a travez de objeto
class Students {
    constructor({
        name, 
        age, 
        email,
        facebook,
        twitter,
        cursosAprobados = [],
    }) {
        this.twitter = twitter;
        this.email = email;
        this.name = name;
        this.cursosAprobados = cursosAprobados;
        this.facebook = facebook;
        this.age = age;
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
    
    removerCurso() {
        this.cursosAprobados.pop();
    }

} 

const student = new Students({
    name: "santiago",
    email: "sm681150@gmail.com",
    age: 22,
    twitter: "@carlosMaslaton",
});


class persona {
    constructor({
        name,
        userName,
        age,
        instagaram = undefined,
        facebook = undefined,
        email,
        twitter = undefined,
        cursos = [],
        cursosTerminados = [],
    }) {
        this.name = name
        this.userName = userName
        this.age = age
        this.socialMedia = {
            twitter,
            instagaram,
            facebook,
            email
        };
        this.cursos = cursos
        this.cursosTerminados = cursosTerminados
    }
}

const santiago = new persona({
    name: 'Santiago',
    userName: "Sannti",
    age: 22,
    twitter: "@Sannti_camejo21",
    instagaram: "@Sannti_camejo",
    email: "sm681150@gmail.com",
    cursos: ['Analisis de datos', 'Analisis de terrenos', 'Cocina de perros'],
    cursosTerminados: ['Analisis de datos', 'Analisis de terrenos'],
})



class clases{
    constructor({
        titulo,
        duracion,
        modalidad,
    }) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.modalidad = modalidad;
    }
}

class curso{
    constructor({
        name,
        teacher,
        duration,
        clases = [],
    }) {
        this.name = name;
        this.teacher = teacher;
        this.duration = duration;
        this.clases = clases;
    }

    agregarClase(clase){
    this.clases.push(clase);
    }

    // eliminarClase() {
    //     elementoEliminado = clases.splice(pos, 1);
    // }
}


const rutaDeDiseñoWeb = new curso({
    name: "rutaDeDiseñoWeb",
    teacher: "Ana paula",
    duration: 8,
    clases: [
        {titulo:"Introduccion",duracion: 2, modalidad: "Virtual"},
        {titulo:"Variables",duracion: 1, modalidad: "Virtual"},
        {titulo:"Funciones",duracion: 5, modalidad: "Virtual"}
    ]
})



const clase1 = new clases({titulo:"Ciclos",duracion: 1, modalidad: "Presencial"})
const clase2 = new clases({titulo:"Metodos",duracion: 3, modalidad: "Presencial"})
const clase3 = new clases({titulo:"Arrays",duracion: 4, modalidad: "Presencial"})

rutaDeDiseñoWeb.agregarClase(clase1)
rutaDeDiseñoWeb.agregarClase(clase2)
rutaDeDiseñoWeb.agregarClase(clase3)




class Banda {
    constructor({
      nombre,
      generos = [],
    }) {
      this.nombre = nombre;
      this.generos = generos;
      this.integrantes = [];
    }

    agregarIntegrante(integranteNuevo) {
    const existeBateria = this.integrantes.some(x => x.instrumento == "Bateria")
    //Valido que haya un baterista en la banda, es decir que existeBaterista es TRUE
        
    if (existeBateria && integranteNuevo.instrumento == "Bateria") {
        //Valido que el integranteNuevo SEA 'Bateria' es decir TRUE y existeBateria tambien lo sea
          console.log("Ya hay Baterista en la banda")
        } else {      
          this.integrantes.push(integranteNuevo);
            console.log(`El integrante con ${integranteNuevo.instrumento} fue agregado con exito`)
        }
      }
    }
  
  //Crear clase Integrante
  class Integrante {
    constructor({
      nombre,
      instrumento,
    }) {
        this.nombre = nombre;
        this.instrumento = instrumento;
    }
  
  }

  const data = {
    nombre: "Los Jacks",
    generos: ["rock", "pop", "post-punk"],
    integrantes: [],
  }
  const banda = new Banda(data)
  banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }))
  banda.agregarIntegrante(new Integrante({ nombre: "Joseph", instrumento: "Teclado" }))
  banda.agregarIntegrante(new Integrante({ nombre: "Brian", instrumento: "Bajo" }))
  banda.agregarIntegrante(new Integrante({ nombre: "Fede", instrumento: "Gaita" }))
  banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }))
  banda.agregarIntegrante(new Integrante({ nombre: "Nick", instrumento: "Bateria" }))
  banda.agregarIntegrante(new Integrante({ nombre: "Jhon", instrumento: "Bateria" }))
  



// ---------------------------------------------o---------------------------------------------

class Escuela {
    constructor({
        name,
        id,
    }){
        this.name = name
        this.id = id;
        this.cursos = []
    }
    agregarCursos(identificacion) {
        const isThereTheSameCourse = this.cursos.some(x => x.id = identificacion)
        this.cursos.push(identificacion)
    }
}
class Curso {
    constructor({
        name,
        id,
    }){
        this.name = name
        this.id = id;
        this.clases = []
    }
}
class Clase {
    constructor({
        name,
        id,
        teacher,
    }){
        this.name = name
        this.id = id;
        this.teacher = teacher
    }
}
class Profesor {
    constructor({
        name,
        id,
        cursos = [],
    }){
        this.name = name
        this.id = id;
        this.cursos = cursos; 
    }
}

const escuelaWEB = new Escuela({
    name: "Escuela de computacion WEB",
    id: 1,
})

const introduccion = new Curso({
    name: "Curso de introduccion WEB",
    id: 1,
})

const variables = new Clase({
    name: "Clase de variables",
    id: 1,
})

const maguery = new Profesor({
    name: "maguery Jhonzon",
    id: 1,
})