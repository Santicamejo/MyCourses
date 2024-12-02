// Duck Typing is a type system used in dynamic languages. 
// For example, Python, Perl, Ruby, PHP, Javascript, etc. where the type or the class of an object is 
// less important than the method it defines. Using Duck Typing, we do not check types at all. Instead, 
// we check for the presence of a given method or attribute.

// The name Duck Typing comes from the phrase:

// “If it looks like a duck and quacks like a duck, it’s a duck”


// El duck typing es la forma de progamar donde identificamos a 
// nuestros elementos dependiendo de los métodos y atributos que tengan por dentro

function isObject(subject) {
    return typeof subject == "object";
}
  
function isArray(subject) {
    return Array.isArray(subject);
}

function requiredParam(param) {
    console.warn(`El campo de ${param} no debe ser vacio`);
    
}

function createStudent({
    name = requiredParam("Nombre"),
    email = requiredParam("Email"),
    age,
    x,
    instagram,
    facebook,
    aprovedCourses = [],
    learningPaths = [],
} = {}){
    const private = {
        "_name": name,
        "_email": email,
        "_learningPaths": learningPaths,
    };
    const public = {
        age,
        aprovedCourses,
        socialMedia: {
        x,
        instagram,
        facebook,
      },
      get name(){
        return private["_name"];
    },
      get email(){
        return private["_email"];
    },
      get learningPaths(){
        return private["_learningPaths"];
    },
    set name(newName) {
        if(newName != 0) {
            private["_name"] = newName;
        }else {
            console.warn("El nombre debe tener al menos 1 caracter");
        }
    },
    set email(newEmail) {
        if(newEmail != private["_email"]) {
            private["_email"] = newEmail;
        }else{
            console.warn("El Email es identico al anterior :(");
        }
    },
    set learningPaths(newLearningPath) {
        if (!newLearningPath.name) {
            console.warn("Tu learning Path no tiene nombre");
            return;
        }
        if (learningPaths.courses) {
            console.warn("Tu learning Path no contiene cursos");
            return;
        }
        if (!isArray(newLearningPath.courses)) {
            console.warn("Tu learning Path no es una lista de cursos");
            return;
        }

        private["_learningPaths"].push(newLearningPath);
    },
    };
    return public;
};

function createLearningPaths({
    name = requiredParam("name"),
    courses = [],
} = {}) {
    const private = {
        "_name": name,
        "_coruses": courses
    };
    const public = {
        get name(){
            return private["_name"];
        },
        get coursesName(){
            return private["_courses"];
        },
        set name(newName) {
            if(newName != 0) {
                private["_name"] = newName;
            }else {
                console.warn("El nombre debe tener al menos 1 caracter");
            }
        },
    };
    return public;
}

const usr = new createStudent({ name: "santiago", email: "Sm861150@gmail.com", age: 22, instagram: "@sannti.camejo",})
usr.learningPaths = {name: "Escuela de desarollo Web", courses: ["curso1", "curso2", "curso3"]}