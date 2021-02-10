
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

        canCol()
}




