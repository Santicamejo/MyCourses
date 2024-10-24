const canvas = document.querySelector('#game');
const game = canvas.getContext('2d'); 

window.addEventListener('load', startGame);
window.addEventListener('resize', reload);

function reload(){
    window.location.reload();
};

//creamos los objetos en const porque javascript los procesa distinto que las variables, asi que podemos redefinir los valores del objeto
let mapLVL = 0;

const posPlayer = {
    x: undefined,
    y: undefined
};

const posGoal = {
    x: undefined,
    y: undefined
};

const posRocks = []
 
let canvaSize = Math.min(window.innerHeight, window.innerWidth)*0.75;
        // Math.min toma el valor de los dos que en el momento sea el mas pequeño para multiplicarlo por 0,75
    
let elementSize = canvaSize / 10.3    

function startGame() {

    console.log(posPlayer)

    // window.innerHeight
    // window.innerWidth

    // game.fillRect(0,0,100,100);
    // game.clearRect(0,0,50,50);
    // game.clearRect(50,0,50,25);
    // game.fillRect(0,10,50,25);

    // game.fillText('Lorem Ipsum', 100,100)

    // let canvaSize;
    // if (innerHeight > innerWidth) {
    //     canvaSize = innerWidth * .75
    // }else{
    //     canvaSize = innerHeight * .75
    // }
    
    canvas.setAttribute('width', canvaSize)
    canvas.setAttribute('height', canvaSize)
 
    game.font = elementSize + 'px Verdana';
    game.textAlign = 'end'

        //Con .trim() cortamos los especios en blanco del array(solo funciona con strigs)
        //Con Split separamos un string en varios arrays con un separador que determinemos
    const map = maps[mapLVL];
    const mapRows = map.trim().split('\n')
    const mapRowCol = mapRows.map(row => row.trim().split(''))
        //En este codigo creamos la variable mapRowCol que le hace un .map a mapRow(Array) para por cada elemento hacer un trim y split y poder tener todos los caracteres separados
    // console.log(map, mapRows, mapRowCol)
    
//---------------------------- ELIMINAR personaje anterior -----------------------------------

    game.clearRect(0, 0, canvaSize, canvaSize)


//---------------------------- RENDER de elementos del mapa ----------------------------------

    //[[],[],[],...]
    // for (let row = 1; row <= 10; row++) {
    //     for(let col = 1; col <= 10; col++){
    //         game.fillText(emojis[mapRowCol[row - 1][col - 1]], elementSize * col + 21, elementSize * row)
    //     }
    // }

    mapRowCol.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            posX = elementSize *  (colI + 1.3);
            posY = elementSize * (rowI + 0.97)
            game.fillText(emojis[col], posX, posY)           

//------------------------------ CREACION del jugador -------------------------------------

            if(col == 'O'){
                if (!posPlayer.x && !posPlayer.y) {
                    //creamos un doble condicional para poder validar si las posiciones del jugador ya existen no reescribirlas y hacer que aparezca en la misma posicion luego del clearReact()
                    posPlayer.x = Math.round(posX);
                    posPlayer.y = Math.round(posY);
                    // console.log({row, rowI, col, rowI})
                }
            } else if(col == 'I') {
                posGoal.x = Math.round(posX);
                posGoal.y = Math.round(posY);
            } else if(col == 'X') {
                posRocks.push({
                    x: Math.round(posX),
                    y: Math.round(posY),
                });
            }
        });        
    });

    // console.log(posRocks)

    movePlayer();

}

function movePlayer() {
//Creo las detecciones de colisiones, cuando coinciden las coordenadas se vuelve true la variable
const goalCollisionX = Math.round(posPlayer.x) == Math.round(posGoal.x);
const goalCollisionY = Math.round(posGoal.y) == Math.round(posPlayer.y);
const goalCollision = goalCollisionY && goalCollisionX;
    
    
    if (goalCollision) {
        console.log('Pasas de nivel!');
        mapLVL ++
    }

const rockCollision = posRocks.find(rock => {
    const rockCollisionX = rock.x == Math.round(posPlayer.x)
    const rockCollisionY = rock.y == Math.round(posPlayer.y)
    return rockCollisionX && rockCollisionY;
});

    if(rockCollision) {
        alert("Chocaste contra una roca!");
    }

game.fillText(emojis['PLAYER'], posPlayer.x, posPlayer.y);

posRocks.length = 0

}

//------------------------------ MOVIMIENTOS del jugador -------------------------------------

const upBtn = document.querySelector('#up');
const rightBtn = document.querySelector('#right');
const downBtn = document.querySelector('#down');
const leftBtn = document.querySelector('#left');

upBtn.addEventListener('click', movementUp);
rightBtn.addEventListener('click', movementRight);
downBtn.addEventListener('click', movementDown);
leftBtn.addEventListener('click', movementLeft);

function movementUp(){
    console.log('UP')
    if (posPlayer.y < elementSize) {
        console.log("OUT");
    }else{
        posPlayer.y -= elementSize;
        startGame();
    };
};

function movementRight(){
    console.log('RIGHT')
    if(posPlayer.x > canvaSize){
        console.log("OUT")
    }else{
        posPlayer.x += elementSize;
        startGame();
    }
}

function movementDown(){
    console.log('DOWN')
    if (posPlayer.y > canvaSize - elementSize) {
        console.log("OUT");
    }else{
        posPlayer.y += elementSize;
        startGame();
    };
};

function movementLeft(){
    console.log('LEFT')
    if (posPlayer.x < (elementSize + elementSize)) {
        console.log("OUT");
    }else{
        posPlayer.x -= elementSize;
        startGame();
    };
}
window.addEventListener('keydown', moveByKeys)

function moveByKeys(key){
    switch(key.code) {
        case 'KeyW':
        movementUp();
        break;

        case 'KeyD':
        movementRight();
        break;

        case 'KeyS':
        movementDown();
        break;

        case 'KeyA':
        movementLeft();
        break;
        
        case 'ArrowUp':
        movementUp();
        break;

        case 'ArrowRight':
        movementRight();
        break;

        case 'ArrowDown':
        movementDown();
        break;

        case 'ArrowLeft':
        movementLeft();
        break;

        default:
            break;
    }
}


