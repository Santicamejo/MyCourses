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

class funcionario {
    constructor({
        name,
        id,
        _password,
    }) {
        this.name = name;
        this.id = id;
        this._password = _password;
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