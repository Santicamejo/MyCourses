function mayus(variable) { 
    return variable.charAt(0).toUpperCase() + variable.slice(1); 
}

// charAt(0): Obtiene el primer carácter de la cadena.

// toUpperCase(): Convierte ese primer carácter a mayúscula.

// slice(1): Obtiene el resto de la cadena a partir del segundo carácter.

// Concatenamos el resultado de los pasos 2 y 3 para obtener la cadena con la primera letra en mayúscula.

class Course {
    constructor({
      name,
      classes = [],
    }) {
      this._name = name;
      this.classes = classes;
    }
  
    get name() {
      return this._name;
    }
  
    set name(nuevoNombrecito) {
      if (typeof nuevoNombrecito === "string") {
        return this._name = mayus(nuevoNombrecito);
      } else {
        console.log("No es tipo string")
      }
    }
  }

  const curso1 = new Course({
    name: "unfdefined", 
    classes: [],
  })

  curso1.name //get
  curso1.name = "name" //set


