// Manejo de fechas
const regEx = /(\d{4})-(\d{2})-(\d{2})/;    
const matchers = regEx.exec('2002-10-02');

console.table(matchers)
console.table(matchers[0])