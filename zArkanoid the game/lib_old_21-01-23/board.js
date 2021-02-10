
    const boardHeight = 15 ;
    const boardWidth  = 150 ;

    let boardX = 225 ;
    const boardY = 760 ;

    // Board drawing function
function board() {
    ctx.fillStyle = '#7FFF00' ;
    ctx.fillRect( boardX , boardY , boardWidth , boardHeight ) ;
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