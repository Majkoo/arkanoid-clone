let oldSpeedX;
let oldSpeedY;

let pause = false ;

let buttonV = document.getElementById("lvlButtons") ;
buttonV.style.visibility = "hidden" ;

let pauseLog = document.getElementById("pause");
pauseLog.style.visibility = "hidden" ;

window.addEventListener("keydown", function(e) {
    
    if (e.keyCode === 80 && menustatement === false) {

        if (ballSpeedX != 0 && ballSpeedY != 0 ) {
        oldSpeedX = ballSpeedX ;
        oldSpeedY = ballSpeedY ;

        ballSpeedX = 0 ;
        ballSpeedY = 0 ;
        
        pause = true ;
        pauseLog.style.visibility = "visible" ;
        console.log("PAUSED");
        } 
        else {
        ballSpeedX = oldSpeedX ;
        ballSpeedY = oldSpeedY ;

        pause = false ;
        pauseLog.style.visibility = "hidden" ;
        console.log("UNPAUSED");
        }
        
    }

});

let speedXlog = document.getElementById("speedXlog") ;
let speedYlog = document.getElementById('speedYlog') ;

function logs() {

    if (ballSpeedX > 0) {
        speedXlog.innerHTML = "SpeedX: " +  Math.round(ballSpeedX*100) ;
    } else {
        speedXlog.innerHTML = "SpeedX: " +  Math.round(-ballSpeedX*100) ;
    }

    if (ballSpeedY > 0) {
        speedYlog.innerHTML = "SpeedY: " +  Math.round(ballSpeedY*100) ;
    } else {
        speedYlog.innerHTML = "SpeedY: " +  Math.round(-ballSpeedY*100) ;
    }

}
