
        // X DIRECTION RANDOMIZER
    function randomizer() {

        let random = Math.floor((Math.random() * 2)) ;
        if (random == 0) {
            random = -1 ;
            }
        return random ;
        }
    
        randomizer();
        let random = randomizer() ;
    
        // IMPROTANT: Ball speed AND direction
    let ballSpeedX = 4 * random ;
    let ballSpeedY = 4 ; 

    const ballSize  = 20;

    let ballX = canw/2  - ballSize/2 ;
    let ballY = 250     - ballSize/2 ;
    
        // Ball motion and drawing function
    function ball() {

        ctx.fillStyle = 'white' ;
        ctx.fillRect(ballX , ballY , ballSize, ballSize) ;

        ballX += ballSpeedX ;
        ballY += ballSpeedY ;

                // X colission rule
        if (ballX <= 0 || ballX >= canw - ballSize) {
            ballSpeedX = -ballSpeedX
        }
                // Y   (up) colission rule
        if (ballY <= 0 || ballY >= canh + ballSize) {
            ballSpeedY = -ballSpeedY
        }
                // Y (down) colission rule
        if (ballY === canh + ballSize) {
            alert("u lost, ball is out, gotta restart it for ya ;)")  ;
             window.location.reload() ;
        }

                // Board collision left
        if (ballX >= boardX && ballX <= boardX + boardWidth && boardY < ballY) {
            ballSpeedX = -ballSpeedX ;
        }

                // Board collision right
        if (ballY >= boardY - ballSize && ballY <= boardY + boardWidth && ballX >= boardX - ballSize && ballX <= boardX + boardWidth && ballY <= boardY + boardHeight) {
            ballSpeedY = -ballSpeedY ;
        }

                            // UNOPTIMAL BLOCK COLLISION

                            if (ballY >= block1.blockY - ballSize && ballY <= block1.blockY + block1.blockHeight && ballX >= block1.blockX - ballSize &&
                                ballX <= block1.blockX + block1.blockWidth && ballY <= block1.blockY + block1.blockHeight) {
                                ballSpeedY = -ballSpeedY ;
                                }
                            else if (ballX >= block1.blockX && ballX <= block1.blockX + block1.blockWidth && block1.blockY < ballY && block1.blockY + block1.blockHeight >= ballY) {
                               ballSpeedX = -ballSpeedX ;
                            }

    }