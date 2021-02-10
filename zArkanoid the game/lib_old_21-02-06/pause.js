let oldSpeedX;
let oldSpeedY;

let pause = false ;

window.addEventListener("keydown", function(e) {
    
    if (e.keyCode === 80) {

        if (ballSpeedX != 0 && ballSpeedY != 0 ) {
        oldSpeedX = ballSpeedX ;
        oldSpeedY = ballSpeedY ;

        ballSpeedX = 0 ;
        ballSpeedY = 0 ;
        
        pause = true ;
        console.log("PAUSED");
        } 
        else {
        ballSpeedX = oldSpeedX ;
        ballSpeedY = oldSpeedY ;

        pause = false ;
        console.log("UNPAUSED");
        }
        
    }

});
