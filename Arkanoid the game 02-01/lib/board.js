
    const boardHeight = 15 ;
    const boardWidth  = 150 ;

    let boardX = 225 ;
    const boardY = 760 ;

    // Board drawing function
function board() {
    ctx.fillStyle = '#7FFF00' ;
    ctx.fillRect( boardX , boardY , boardWidth , boardHeight ) ;

    let boardTopLeftX = boardX ;
    let boardTopLeftY = boardY ;
    
    let boardDownLeftX = boardX ;
    let boardDownLeftY = boardY + boardHeight;

    let boardTopRightX = boardX + boardWidth ;
    let boardTopRightY = boardY ;

    let boardDownRightX = boardX + boardWidth ;
    let boardDownRightY = boardY + boardHeight;


                // Board collision top
                if (ballY >= boardY - boardHeight - ballSize/2 &&
                    ballY <= boardY - boardHeight  &&
                    ballX + ballSize >= boardTopLeftX &&
                    ballX  <= boardTopRightX) {
            
                    if(ballSpeedY > 0){
                        ballSpeedY = -ballSpeedY ;
                    }
                }

                // Board collision down
                if (ballY <= boardY  + ballSize/2&&
                    ballY >= boardY - boardHeight/2  &&
                    ballX + ballSize >= boardTopLeftX &&
                    ballX  <= boardTopRightX) {
            
                    if(ballSpeedY < 0){
                        ballSpeedY = -ballSpeedY ;
                    }
                }
            
                // Board collision left
               else if (ballX + ballSize >= boardTopLeftX && 
                        ballX + ballSize <= boardTopLeftX + ballSize && 
                        ballY + ballSize >= boardTopLeftY && 
                        ballY <= boardDownLeftY) {
            
                        if(ballSpeedX > 0){
                            ballSpeedX = -ballSpeedX ;
                        }
                    }
            
                // Board collision right
               else if (ballX <= boardTopRightX && 
                        ballX >= boardTopRightX - ballSize &&
                        ballY + ballSize >= boardTopRightY &&
                        ballY <= boardDownRightY) {
            
                        if(ballSpeedX < 0){
                            ballSpeedX = -ballSpeedX ;
                        }
                    }

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