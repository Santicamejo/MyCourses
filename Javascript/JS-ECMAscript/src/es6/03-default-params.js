
/*Los parámetros por defecto en ES6 son una característica útil que simplifica la escritura de funciones al permitir valores predefinidos para los parámetros que no se proporcionen al llamar a la función. */

//ES5
function newUser(name, age, country) {
    var name = name || 'Default';
    var age = age || '18';
    var country = country || 'US';

    console.log(name, age, country);
};

newUser()
newUser('Santiago', 22, 'UY')

//ES6
function newAdmin(name = 'Undefined', age = '18', country = 'US') {
    console.log(name, age, country);
}

newAdmin()
newAdmin('Joge', 24, 'CH')

