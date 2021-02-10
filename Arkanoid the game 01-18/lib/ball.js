
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
    let ballY = 745     - ballSize/2 ;
    
        // Ball motion and drawing function
    function ball() {

        ctx.fillStyle = 'white' ;
        ctx.fillRect(ballX , ballY , ballSize, ballSize) ;

        ballX += ballSpeedX ;
        ballY += ballSpeedY ;

        // const blockFound = blockArray.find(x => (x.X >= ballX && x.X <= ballX) && (ballY >= x.Y && ballY <= x.Y));

        // if (blockFound) {
        //     const idx = blockArray.findIndex(blockFound);
        //     blockArray.splice(idx, 1);
        // }

                // Y   (up) colission rule
        if (ballY <= 0 || ballY >= canh + ballSize) {
            ballSpeedY = -ballSpeedY
        }
                // Y (down) colission rule
        if (ballY >= canh + ballSize) {
            alert("u lost, ball is out, gotta restart it for ya ;)")  ;
            alert("despite you cant win actually xd") ;
             window.location.reload() ;
         }
                // Board collision rule 1 
                // (if ballY and ballX shares coordinates with board field and it hits it horizontally, change X to its negative variation)
        if (ballX >= boardX && ballX <= boardX + boardWidth && boardY < ballY) {
            ballSpeedX = -ballSpeedX ;
        }
                // Board collision rule 2 
                // (if ballY and ballX shares coordinates with board field and it hit it vertically, change Y to its negative variation)
        if (ballY >= boardY - ballSize && ballY <= boardY + boardWidth && ballX >= boardX - ballSize && ballX <= boardX + boardWidth && ballY <= boardY + boardHeight) {
            ballSpeedY = -ballSpeedY ;
        }

                // X colission rule
        if (ballX <= 0 || ballX >= canw - ballSize) {
            ballSpeedX = -ballSpeedX
        }

    }