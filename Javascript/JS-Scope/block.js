function plants() {
     if (true) {
        var vegetable = 'lettuce'; //Function Scope
        let berries = 'Blueberry'; //Block Scope
        const fruit = 'Peach'; //Block Scope
    }
    console.log(vegetable);
    console.log(berries);
    console.log(fruit);
}

plants();

//Esto imprime SOLO el var ya que let y const tienen Block scope es decir que solo puedo usar la variable dentro de los brakets ({})