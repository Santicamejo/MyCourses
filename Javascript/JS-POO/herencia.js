// ----------------------------HERENCIA EN JAVASCRIPT---------------------------
// Herencia: Nos permite crear nuevas clases a partir de otras mismas que se basan en modelos y conceptos, 
// Se genera una jerarquia de Padre-Hijo. 

// el 'padre' es una SUPER CLASE y el 'hijo' una SUBCLASE. 

// La palabra +extends+ seguida de la SUPER CLASE, 
// provoca que esta nueva SUBCLASE herede todos los atributos y metodos de la SUPER CLASE.

// Basicamente Es la capacidad de una clase de heredar las propiedades y métodos de otra clase. 
// Por ejemplo, 

// si se tiene una clase Perro que hereda de la clase Animal, 
// Perro tendrá todas las propiedades y métodos de Animal, 
// además de sus propias características específicas de perro.

class moldeGalleta {
    constructor({
        diametro = 12,
        ingredientes = [],
    }) {
        this.diametro = diametro;
        this.ingredientes = ingredientes
    }
}

class galletaJengibre  extends moldeGalleta{
    constructor(props) {

        super(props); //esto nos permite heredar todas las propiedades del constructor madre

    }
    agregarIngrediente(nombre, cantidad) {
        const ingExists = this.ingredientes.find(ing => ing.nombre === nombre);
        if(ingExists){
            console.log(`El ingrediente ${nombre} ya esta en la receta`);
        } else{
            this.ingredientes.push({nombre, cantidad})
            console.log('El ingrediente fue agregado con exito');
        }
    }

    viewRecepie () {
        this.ingredientes.forEach(ing => console.log(ing))
    }

};

class galletaMantequilla extends moldeGalleta{
    constructor(props) {
        super(props);
    }
    agregarIngrediente(nombre, cantidad) {
        const ingExists = this.ingredientes.find(ing => ing.nombre === nombre);
        if(ingExists){
            console.log(`El ingrediente ${nombre} ya esta en la receta`);
        } else{
            this.ingredientes.push({nombre, cantidad})
            console.log('El ingrediente fue agregado con exito');
        }
    }
};

class galletaSinTAC extends moldeGalleta{
    constructor(props) {
        super(props);
    }        
    agregarIngrediente(nombre, cantidad) {
        const ingExists = this.ingredientes.find(ing => ing.nombre === nombre);

        if (nombre == ' ') {
            console.log('Esta receta debe terner productos sin tacc');
        }else if(ingExists){
            console.log(`El ingrediente ${nombre} ya esta en la receta`);
        } else{
            this.ingredientes.push({nombre, cantidad})
            console.log('El ingrediente fue agregado con exito');
        }
    }

};

const galletaDeJengibre = new galletaJengibre({
    diametro: 12,
    ingredientes: [
        {nombre: "Mantequilla", cantidada: 140},
        {nombre: "Azucar", cantidada: 50},  
        {nombre: "Melaza", cantidada: 75},
        {nombre: "Huevo", cantidada: 1},
        {nombre: "Jengibre", cantidada: 2},
        {nombre: "Canela", cantidada: 1},
        {nombre: "Nuez", cantidada: 1},
        {nombre: "Bicarbonato", cantidada: 1},
        {nombre: "Sal", cantidada: 1/4},
        {nombre: "Harina", cantidada: 300},
        {nombre: "Clara", cantidada: 1},
    ]
})

const galletaSinTacc = new galletaSinTAC({
    diametro: 12,
    ingredientes: [
        {nombre: "Mantequilla", cantidada: 140},
        {nombre: "Azucar", cantidada: 50},  
        {nombre: "Melaza", cantidada: 75},
        {nombre: "Huevo", cantidada: 1},
        {nombre: "Jengibre", cantidada: 2},
        {nombre: "Canela", cantidada: 1},
        {nombre: "Nuez", cantidada: 1},
        {nombre: "Bicarbonato", cantidada: 1},
        {nombre: "Sal", cantidada: 1/4},
        {nombre: "Clara", cantidada: 1},
    ]
})
