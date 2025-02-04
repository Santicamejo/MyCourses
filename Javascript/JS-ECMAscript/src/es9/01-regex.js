// RegEx significa Regular Expression
// Las expresiones regulares o RegEx (regular expresions) son patrones de búsqueda y manipulación de cadenas de caracteres increíblemente potente y 
// están presentes en todos los lenguajes de programación.

//En las Regular Expressions tenemos tambien caracteres especiales que contienen reglas, En el caso de la fecha utilizamos el caracter \d que seria lo mismo que [0-9].
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes

// EJEMPLO ------------------------------------------------------------------------------------
const RegExDate = /(\d{4})-(\d{2})-(\d{2})/;
const RegExName = /(\w{8}) (\w{7})/;
const matchersDate = RegExDate.exec('Santiago Miranda Nacido el 2002-10-02 en el hospital...')
const matchersName = RegExName.exec('Santiago Miranda el 2002-10-02 en el hospital...')
console.table(matchersDate);
console.table(matchersName);

