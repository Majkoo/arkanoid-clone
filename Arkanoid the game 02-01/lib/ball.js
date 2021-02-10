
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

            // X colission rule left
    if (ballX <= 0) {
        if(ballSpeedX < 0){
        ballSpeedX = -ballSpeedX
        }
    }
            // X colission rule right
    if (ballX >= canw - ballSize){
        if(ballSpeedX > 0){
            ballSpeedX = -ballSpeedX
        }
    }
            // Y colission rule top
    if (ballY <= 0 || ballY >= canh + ballSize) {
        ballSpeedY = -ballSpeedY
    }
            // Y colission rule bottom
    if (ballY === canh + ballSize) {
        // alert(" restarting ")  ;
        //  window.location.reload() ;
    }

}