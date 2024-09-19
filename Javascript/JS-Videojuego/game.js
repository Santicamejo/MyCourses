const canvas = document.querySelector('#game');
const game = canvas.getContext('2d'); 

window.addEventListener('load', startGame);
window.addEventListener('resize', reload);

function reload(){
    window.location.reload();
}
function startGame() {
    // let canvaSize;
    // if (innerHeight > innerWidth) {
    //     canvaSize = innerWidth * .75
    // }else{
    //     canvaSize = innerHeight * .75
    // }
    let canvaSize = Math.min(window.innerHeight, window.innerWidth)*0.75;
    // Math.min toma el valor de los dos que en el momento sea el mas pequeño para multiplicarlo por 0,75
    
    canvas.setAttribute('width', canvaSize)
    canvas.setAttribute('height', canvaSize)

    const elementSize = canvaSize / 10

    game.font = elementSize + 'px Verdana';
    game.textAlign = 'end'

    for (let i = 1; i <= 10; i++) {
        for(let j = 1;j <= 10; j++){
            game.fillText(emojis['X'], elementSize * i + 15, elementSize * j - 10)
        }
    }

    console.log(maps[1])

    // window.innerHeight
    // window.innerWidth

    // game.fillRect(0,0,100,100);
    // game.clearRect(0,0,50,50);
    // game.clearRect(50,0,50,25);
    // game.fillRect(0,10,50,25);

    // game.fillText('Lorem Ipsum', 100,100)
}
