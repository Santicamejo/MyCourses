function PPT (user, maquina) {
    switch (true) {
        case user === maquina: {
            alert("EMPATE")
            break;
        }
        case user === "piedra" && maquina === "tijera": {
            alert("Jugador gana con Piedra")
            break;
        }
        case user === "papel" && maquina === "piedra": {
            alert("Jugador gana con Papel")
            break;
        }
        case user === "tijera" && maquina === "papel": {
            alert("Jugador gana con tijera")
            break;
        }
        default: {
            ("Maquina gana");
        }
    }
}

PPT("tijera", "piedra");