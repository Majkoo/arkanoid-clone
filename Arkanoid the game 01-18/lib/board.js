
const boardHeight = 15 ;
const boardWidth  = 150 ;

let boardX = 225 ;
const boardY = 760 ;

class Block {
    Width = 10;
    Height = 10;
    X = 0;
    Y = 0
};

const blockArray = [];

for (let y = 0; y < 10; y++) {
    for(let x = 0; x < 100; x++) {
        let b = new Block();
        b.Y  = y * (b.Y + b.Height);
        b.X = x * (b.Width + b.X);
        blockArray.push(b);
    }
}

    // Board drawing function
function board() {
    ctx.fillStyle = '#7FFF00' ;
    ctx.fillRect( boardX , boardY , boardWidth , boardHeight ) ;
    
    // for (let i = 0; i < blockArray.length; i++) {
    //     ctx.fillStyle = "green" ;
    //     ctx.fillRect(blockArray[i].X, blockArray[i].Y, blockArray[i].Width, blockArray.Height);
    // }
}

    // Board movement function
window.addEventListener("keydown", function(e) {
    
    if (e.keyCode === 37) {
        if (boardX > 0) {
            boardX -= 12 ;
        }
    }
    if (e.keyCode === 39) {
        if (boardX < canw - boardWidth) {
            boardX += 12 ;
        }
    }

});
