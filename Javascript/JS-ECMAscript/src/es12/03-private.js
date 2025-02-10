/*Metodos privados: Agregando # los métodos se vuelven privados y solo pueden ser accedidos dentro de la misma clase.*/

class dog{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
    // metodos
    #speek() {
        return 'Woof';
    }
    greatings() {
        return `${this.id} | ${this.name} says ${this.speek()}`;
    }
    get #Gid() {
        return this.id;
    }
    set #Sid(n) {
        this.id = n;
    }
}

const dog1 = new dog('Tobi', 1);
console.log(dog1.id);
console.log(dog1.id = 4);
console.log(dog1.greatings());
