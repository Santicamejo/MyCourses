// FUNCTION SCOPE
function greetings(){
    let userName = 'Anna' // Function Scope
    console.log(userName);
    
    if(userName = 'Anna') {
        console.log(`Hola ${userName}!`);
    }

}

greetings();
console.log(userName);
