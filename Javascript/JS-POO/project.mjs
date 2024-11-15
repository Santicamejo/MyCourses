// ----------------------------CREACION DE PROTOTIPOS---------------------------

class usuario {
    constructor({
        name,
        lastname,
        _password,
        _cedula,
    }) {
        this.name = name;
        this.lastname = lastname;
        this._password = _password;
        this._cedula = _cedula
    }
    get showPassword() {
        return this._password;
    }

    set changePassword(newPassword) {
        if(newPassword.length < 8) {
            console.warn("La contraseña no tiene 8 caracteres. Intente con otra")
        }else if (this._password == newPassword) {
            console.warn("La contraseña es igual a la anterior. Intente con otra")
        }else{
            console.warn("la contraseña se combio con exito!")
            this._password = newPassword;
        }
    }
}

// modulos de javascript
function ingresoFuncionario(id) {
    const horaCompleta = new Date();
    const horas = horaCompleta.getHours();
    const minutos = horaCompleta.getMinutes();
    const dia = horaCompleta.getDate();
    const mes = horaCompleta.getMonth();

    console.log(`El funcionario con id ${id} ingreso a las ${horas}:${minutos} del dia ${dia}/${mes}`)
}
function salidaFuncionario(id) {
    const horaCompleta = new Date();
    const horas = horaCompleta.getHours();
    const minutos = horaCompleta.getMinutes();
    const dia = horaCompleta.getDate();
    const mes = horaCompleta.getMonth();

    console.log(`El funcionario con id ${id} salio a las ${horas}:${minutos} del dia ${dia}/${mes}`)
}

export class funcionario {
    constructor({
        name,
        id,
        _password,
    }) {
        this.name = name;
        this.id = id;
        this._password = _password;
    }
    // Le paso al modulo el id del funcionario
    horaDeIngreso(){
        ingresoFuncionario(this.id);
    }
    
    horaDeSalida(){
        salidaFuncionario(this.id);
    }
}

class fondo {
    constructor({
        id,
        dinero, 
        _key,
    }) {
        this.id = id;
        this.dinero = dinero;
        this._key = _key;
    }
}

// ----------------------------CREACION DE INSTANCIAS----------------------------

const usuario1 = new usuario({
    name: 'Santiago',
    lastname: 'miranda',
    _password: 'undefined',
    _cedula: '0000000-0',
})  

const funcionario1 = new funcionario({
    name: 'Santiago',
    lastname: 'miranda',
    _password: 'undefined',
    _cedula: '0000000-0',
})  