class User {};  // creacion/declaracion de la clase

const Santi = new User;    // creacion de una instancia de la clase User


class user {
    //methodos
    saludos() {
        return 'Hello World!';
    }
};

_____________________________________

const sannti = new user();
console.log(sannti.saludos());
const max = new user();
console.log(tobi.saludos());

class usuario {
    // Constructor
    constructor() {
        console.log("nuevo usuario");
    }
    saludos() {
        return 'Hello World!';
    }
}

const carlos = new usuario();

_____________________________________

// This
class mascota{
    constructor(name) {
      this.name = name
    }
    // metodos
    speek() {
        return 'Hello';
    }
    saludo() {
        return `${this.speek()} ${this.name}!`
    }
}

const mascota1 = new mascota('Tobi');
console.log(mascota1.saludo());

_____________________________________

class dog{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
    // metodos
    speek() {
        return 'Woof';
    }
    greatings() {
        return `${this.id} | ${this.name} says ${this.speek()}`;
    }
    get Gid() {
        return this.id;
    }
    set Sid(n) {
        this.id = n;
    }
}

const dog1 = new dog('Tobi', 1);
console.log(dog1.id);
console.log(dog1.id = 2);
console.log(dog1.greatings());
