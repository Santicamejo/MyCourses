// Array destructuring 
let fruits = ["Bananas", "Apples", "Oranges"]
let [a, b, c] = fruits
console.log(a, b, fruits[2]);


//Object destructuring
let user = {username: "Santiago", age: 22, country: "Uruguay"}
let {username, country} = user
console.log(username, country, user.age);


// Spread operator
// El spread operator Desglosa un objeto y muestra todas sus propiedades de la sigiente manera
let person = {name: "Santiago", age: 22}
let Country = "Uruguay"

let data = {id: 1, ...person, Country }

console.log(data);

//con emojis "compuestos"
let mens = [ ..."🧑‍🤝‍🧑" ]
console.log(mens);
//output: [ '🧑', '‍', '🤝', '‍', '🧑' ]

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)
/* output: [
  '👨', '‍',   '👩',
  '‍',   '👦', '‍',
  '👦'
]
*/


// rest
function sum(num, ...values) {
    console.log(`Valor de num: ${num}`);
    console.log(`Valor de values: ${values}`);
    return console.log(num + values[3]);
}

sum(1, 6, 2, 3, 4, 3);

// Con ...values logramos que todos los valores luego del primero(porque ese lo toma num) se agregen a un array llamado values en el orden dado