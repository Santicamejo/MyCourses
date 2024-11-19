// ¿QUÉ ES EL POLIMORFISMO? Es como la herencia reloaded. Es como ‘La Herencia 2.0’. 
// Es un pilar de la OOP. Lo que es importante es lo que se puede hacer con este: 
// Permite a nuestras subclases cambiar o anular los comportamientos de los métodos y atributos del prototipo madre, 
// de la clase madre. Aunque herede las propiedades, el polimorfismo permite cambiar su comportamiento. 
// · Tipos:

// Polimorfismo de Sobrecarga: ocurre cuando existen métodos con el mismo nombre y funcionalidad similar en clases totalmente independientes entre ellas.
// Polimorfismo Paramétrico: El polimorfismo paramétrico es la capacidad para definir varias funciones utilizando el mismo nombre, pero usando parámetros diferentes (nombre y/o tipo).
// Polimorfismo de Inclusión (JS): La habilidad para redefinir por completo el método de una superclase en una subclase.
class comentario {
    constructor({
        coment,
        userName,
        userType = "veiwer",
    }) {
        this.coment = coment;
        this.userName = userName;
        this.userType = userType;
        this.likes = 0;
    }
    publicar(){
        console.log(this.userName + "(" + this.userType + ")");
        console.log(`${this.coment}`);   
        console.log(`${this.likes} likes`);
    }
}

class video {
    constructor({
        titulo,
        duracion,
        visualizaciones = 0,
        likes = 0,
        dislikes = 0,
        comentarios = [],
    }){
        this.titulo = titulo
        this.duracion = duracion;
        this.visualizaciones = visualizaciones;
        this.likes = likes;
        dislikes = dislikes;
        this.comentarios = comentarios;
    }
}

class usuario {
    constructor({
        name,
        userName,
        imageURL,
    }) {
        this.name = name;
        this.userName = userName; 
        this.imageURL = imageURL;
    }
    publicarComentario(comentContent) {
        const comment = new comentario ({
            coment: comentContent,
            userName: this.userName,
        });
        comment.publicar();
    }
}

class vewier extends usuario {
    constructor(props) {
        super(props);
    }
}

class creator extends usuario {
    constructor(props) {
        super(props);
    }
    publicarComentario(comentContent) {
        const comment = new comentario ({
            coment: comentContent,
            userName: this.userName,
            userType: "Creador",
        }); 
        comment.publicar();
    }
}

const newVewier = new vewier ({
    name: 'Santiago',
    userName: "Sannti",
})

const contentCreator = new creator ({
    name: 'Jaime javier',
    userName: "Jamiecito",
})

const Newvideo = new video ({
    titulo: 'Como hacer sorrentinos',
    duracion: 12,
    visualizaciones: 1,
    likes: 1,
    comentarios: [],
})



// ----------------------------TAREA---------------------------
// Dentro de este reto encuentras las clases Student y Comment con un código base, recuerda ir a verlas en el sistema de archivos.

// Tu reto consisten en:

// Hacer que la clase TeacherStudent herede de Student
// Agrega un propiedad de tipo Array llamada skills a la clase TeacherStudent.
// Sobrescribir el método publicarComentario dentro de TeacherStundent.
// Debe agregar el array de skills en la propiedad studentRole de la clase Comment.
// El string debe verse de la siguiente manera "profesor de skill1, skill2".

// Input-------------------------------------------------------
//   const skills = ["js", "python", "mongodb"]
//   const props = {
//     name: "Erik Ochoa",
//     username: "elyager"
//   }

//   const profesor = new TeacherStudent(props, skills)
//   profesor.publicarComentario('Mi primer comentario')

// Output------------------------------------------------------
// {
//   "studentName":"Erik Ochoa (profesor de js,python,mongodb)",
//   "likes":"0 likes",
//   "content":"Mi primer comentario"
// }


//class comment
export class Comment {
    constructor({
      content,
      studentName,
      studentRole = "estudiante",
    }) {
      this.content = content;
      this.studentName = studentName;
      this.studentRole = studentRole;
      this.likes = 0;
    }
  
    publicar() {
      const comentario = {
        studentName: this.studentName + " (" + this.studentRole + ")",
        likes: this.likes + " likes",
        content: this.content
      }
      return comentario
    }
  }

//class student
  import { Comment } from "./Comment";

export class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    return comment.publicar();
  }
}
// class exercise
import { Comment } from "./Comment";
import { Student } from "./Student";

export class TeacherStudent {
  // Tu código aquí 👈
}

//solucion

import { Comment } from "./Comment";
import { Student } from "./Student";

export class TeacherStudent extends Student {
  constructor(porps, skills = []) {
    super(porps);
    this.skills = skills;
  }
  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: `profesor de ${this.skills}`
    });
    return comment.publicar();
  }
}

