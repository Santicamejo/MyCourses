// ¿QUÉ ES EL POLIMORFISMO? Es como la herencia reloaded. Es como ‘La Herencia 2.0’. 
// Es un pilar de la OOP. Lo que es importante es lo que se puede hacer con este: 
// Permite a nuestras subclases cambiar o anular los comportamientos de los métodos y atributos del prototipo madre, 
// de la clase madre. Aunque herede las propiedades, el polimorfismo permite cambiar su comportamiento. 
// · Tipos:

// Polimorfismo de Sobrecarga: ocurre cuando existen métodos con el mismo nombre y funcionalidad similar en clases totalmente independientes entre ellas.
// Polimorfismo Paramétrico: El polimorfismo paramétrico es la capacidad para definir varias funciones utilizando el mismo nombre, pero usando parámetros diferentes (nombre y/o tipo).
// Polimorfismo de Inclusión (JS): La habilidad para redefinir por completo el método de una superclase en una subclase.

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

class comentario {
    constructor({
        comentContent,
        username,
        userType = 'veiwer',
    }) {
        this.comentContent = comentContent;
        this.username = username;
        this.likes = 0;
        this.userType = userType;
    }
    publicarComentario(){
        console.log(`${this.username}(${this.userType})`);
        console.log(`${this.comentContent}`);   
        console.log(`${this.likes} likes`);
    }
}

class usuario {
    constructor({
        nombre,
        username,
        imageURL,
    }) {
        this.nombre = nombre;
        this.username = username; 
        this.imageURL = imageURL;
    }
    crearComentario(comentContent) {
        const userComment = new comentario ({
            coment: comentContent,
            username: this.username,
            imageURL: this.imageURL,

        })
        userComment.publicarComentario();
    }
}

const usuario1 = new usuario ({
    nombre: 'Santiago',
    username: "Sannti",
    imageURL: "https://536c0d5e-79ba-421d-8970-56de02a627ab&th",
})

const video1 = new video ({
    titulo: 'Como hacer sorrentinos',
    duracion: 12,
    visualizaciones: 1,
    likes: 1,
    comentarios: [],
})

usuario1.crearComentario("GranVideo")