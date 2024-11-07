function firstName() {
    let firstName = 'Sannti '
    function lastname(lastName) {
        console.log(`Bienvenido ${firstName + lastName}`);
        
    }
    return lastname;
}

const fullname = firstName();
fullname('camejo');
console.log(firstName);
console.log(firstName());

// ----------------------------------O-----------------------------------

function moneyBox() {
    let savedCoins = 0;
    function countCoins(coins) {
        savedCoins += coins;
        console.log(`Tienes $${savedCoins} en tu cuenta`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(30);
myMoneyBox(100);