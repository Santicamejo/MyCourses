var op1 = "piedra";
var op2 = "papel";
var op3 = "tijera";

var resultado = function(jugador, maquina){

    if(jugador !== maquina) {                                               //Este if es para validar que el jugador no puso lo mismo que la maquina
        if(jugador === op1 && maquina === op3){                             //Aca se validan todas las opciones en las que el jugador puede ganar
            alert("Gana el jugador!")
        }else if(jugador === op2 && maquina === op1){
            alert("Gana el jugador!")
        }else if(jugador === op3 && maquina === op1){   
            alert("Gana el jugador!")
        }else{                                                              //En este else como ya se descartaron las opciones donde gana el jugador, queda que gane la maquina
            alert("Gana la maquina :(")
        }

    }else{                                                                  //si el primer if no se cumple automaticamente es empate ya que jugador === maquina
        alert("Empate")
    }
};

resultado(op1, op3);                                                        //se le pasan los valores a la funcion para que puede comenzar a validar entre los IF