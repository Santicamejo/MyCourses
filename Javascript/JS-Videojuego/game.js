const canvas = document.querySelector('#game');
const game = canvas.getContext('2d'); 

window.addEventListener('load', startGame);
window.addEventListener('resize', reload);

function reload(){
    window.location.reload();
}

const posPlayer = {
    x: undefined,
    y: undefined
}

let canvaSize = Math.min(window.innerHeight, window.innerWidth)*0.75;
        // Math.min toma el valor de los dos que en el momento sea el mas pequeño para multiplicarlo por 0,75
    
const elementSize = canvaSize / 10.2

function movePlayer() {
    const lastPos = {
        x: posPlayer.x, 
        y: posPlayer.y + elementSize
}
    console.log(posPlayer);
    console.log(lastPos)
    
    game.fillText(emojis['PLAYER'], posPlayer.x, posPlayer.y)
    game.fillText(emojis['FIRE'], lastPos.x, lastPos.y)
}

function startGame() {

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
    const map = maps[0];
    const mapRows = map.trim().split('\n')
    const mapRowCol = mapRows.map(row => row.trim().split(''))
        //En este codigo creamos la variable mapRowCol que le hace un .map a mapRow(Array) para por cada elemento hacer un trim y split y poder tener todos los caracteres separados
    console.log(map, mapRows, mapRowCol)

//---------------------------- RENDER de elementos del mapa ----------------------------------

    //[[],[],[],...]
    // for (let row = 1; row <= 10; row++) {
    //     for(let col = 1; col <= 10; col++){
    //         game.fillText(emojis[mapRowCol[row - 1][col - 1]], elementSize * col + 21, elementSize * row)
    //     }
    // }

    mapRowCol.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            posX = elementSize *  (colI + 1.2);
            posY = elementSize * (rowI + 0.98)
            game.fillText(emojis[col], posX, posY)           

//------------------------------ CREACION del jugador -------------------------------------

            if(col == 'O'){
                
                posPlayer.y = posY
                posPlayer.x = posX

            }
            // console.log({row, rowI, col, rowI})
            
        });        
    });

    movePlayer()

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
    console.log('Move UP')
    posPlayer.y -= elementSize;
    movePlayer();
}
function movementRight(){
    console.log('Move RIGHT')
    posPlayer.x += elementSize;
    movePlayer();
}

function movementDown(){
    console.log('Move DOWN')
    posPlayer.y += elementSize;
    movePlayer();
}

function movementLeft(){
    console.log('Move LEFT')
    posPlayer.x -= elementSize;
    movePlayer();
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


