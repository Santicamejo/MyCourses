// Module pattern y namespaces: propiedades privadas en JavaScript
// JavaScript no es un lenguaje fuertemente tipado, osea, que no tenemos que definir el tipo de nuestras variables. JavaScript entenderá que tipo de variable estamos usando.

// En javascript no hay una palabra clave para definir una variable privada por lo que podemos crear una función que nos permita crear esta variable.

// Por lo general, podemos usar el Object.defineProperty() para crear la variable publica o privada


function requiredParam(campo) {
    throw new Error(campo + " no puede estar vacío");
}

function creatNewPerson({
    name = requiredParam('name'),
    age = requiredParam('age'),
    email = requiredParam('email'),
    twitter = undefined,
    intagram,
    facebook,
    workExp = [],
} = {}) {
    const private = {
        "_name": name
    };
    const public = {
        age: age,
        email: email,
        socialMedia: {
            twitter: twitter,
            intagram: intagram,
            facebook: facebook,
        },
        workExp: workExp,

        get name() {  // usr.name;
            return private["_name"]
        },
        set name(newName) { // usr.name = "Lorem";
            if(newName.length != 0){
                private["_name"] = newName
            }else{
                console.warn("Tu nombre debe tener como minimo un carácter");
            }
        }

        
        // readName(){
        //     return private["_name"];
        // },
        // changeName(newName) {
        //     if (newName === this.name) {
        //         console.log("El nombre es igual al acutual")
        //     }else{
        //         console.log("nombre cambiado correctamente");
        //         private["_name"] = newName
        //     }
        // },
        
    };

    // Object.defineProperty(public, "readName", {
    //     writable: false,
    //     configurable: false,
    // });
    // Object.defineProperty(public, "changeName", {
    //     writable: false,
    //     configurable: false,
    // });


    return public
} 


const usr = creatNewPerson({
    name: 'Santiago',
    age:22,
    email: 'sm681150@gmail.com',
    twitter: 'sannti1233',
    intagram: 'santi.camejo21',
})

// Metodos privados en prototipos

function isObject(subject) {
    return typeof subject == "object";
}
  
function isArray(subject) {
    return Array.isArray(subject);
}

function requiredParam(param) {
    console.warn(`El campo de ${param} no debe ser vacio`);
    
}

function LearningPath({
    name = requiredParam("name"),
    courses = [],
} = {}) {
    this.name = name;
    this.courses = courses;
}

function Student({
    name = requiredParam("Nombre"),
    email = requiredParam("Email"),
    age,
    x,
    instagram,
    facebook,
    aprovedCourses = [],
    learningPaths = [],
} = {}) {

    this.name = name;
    this.email = email;
    this.age = age;
    this.aprovedCourses = aprovedCourses;
    socialMedia = {
        x,
        instagram,
        facebook,
    };

// creamos un objeto private donde vamos a guardar la info que no queremos que se pueda ascender
    const private = {
        "_learningPaths": [],
    };

//con Object.defineProperty creamos un nuevo atributo dentro de this(que hace referencia a Student pero por estar dentro del protitypo se lo llama asi) donde vamos a asignar un nuevo gatter y setter
    Object.defineProperty(this, "learningPaths", {

        get(){
            return private["_learningPaths"];
        },
        set(newLp){
            //Hacemos validacion de si nuestro Lp son learningPaths 
                if (newLp instanceof LearningPath) {
                    private["_learningPaths"].push(newLp);
            } else {
                console.warn("Alguno de los Lp no es instancia del protitipo LearningPaths");
                
            }
        },
     })
//creamos un ciclo for para que cada uno de los LearningPaths qeu enviemos desde el inicio que estamos instanciado vamos a llamar al setter para verificar y asignar que ese LearningPaths deben estar en el array
        for(LearningPathIndex in learningPaths) {
            this.learningPaths = learningPaths[LearningPathIndex]
    }
};



const escuelaWeb = new LearningPath({
    name: "Escuela Web Dev"
})

const escuelaDS = new LearningPath({
    name: "Escuela Data science"
})

const estudiante = new Student({
    name: "sannti", 
    email: "sm11111@gmial.com",
    learningPaths: [
        escuelaWeb,
        escuelaDS,
        {
        name: "Escuela Falsa",
        courses: []
        }
    ]
})
