//El método Object.fromEntries devuelve un objeto a partir de un array donde sus elementos son las entries en forma [propiedad, valor].
//Se considera la operación inversa de Object.entries().

const entradas = [["name", "alexa"], ["age", 24]];
console.log(entradas);
console.log(Object.fromEntries(entradas));

const entries = new Map ([["name", "alexa"], ["age", 24]]);
console.log(entries);
console.log(Object.fromEntries(entries));

