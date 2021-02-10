
    const boardHeight = 15 ;
    const boardWidth  = 150 ;

    let boardX = 225 ;
    const boardY = 760 ;

    let leftPressed = false ;
    let rightPressed = false ;

    // Board drawing function
function board() {
    ctx.fillStyle = '#7FFF00' ;
    ctx.fillRect( boardX , boardY , boardWidth , boardHeight ) ;

    boardCol();

}

    // Board movement listeners
window.addEventListener("keydown", function(e) {

    if (e.keyCode === 37 && menustatement === false) {
        if (leftPressed === false)  {
            leftPressed = true ;
        }
    }

    if (e.keyCode === 39 && menustatement === false) {
        if (rightPressed === false)  {
            rightPressed = true ;
        }
    }
});
window.addEventListener("keyup", function(e) {
    
    if (e.keyCode === 37) {
        if (leftPressed === true)  {
            leftPressed = false ;
        }
    }

    if (e.keyCode === 39) {
        if (rightPressed === true)  {
            rightPressed = false ;
        }
    }
});

// board movement
function brdMove() {

    if (leftPressed === true) {
        if (boardX > 0) {
            boardX -= 4 ;
        }
    }
    if (rightPressed === true) {
        if (boardX < canw - boardWidth) {
            boardX += 4 ;
        }
    }
}
