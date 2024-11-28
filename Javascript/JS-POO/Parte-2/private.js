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

