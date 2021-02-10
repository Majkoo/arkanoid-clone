let menustatement = false ;

function menu() {

    if (blocks.length === 0) {
        menu1();
    }

}
function menu1() {
    menustatement = true ;
    canvas.style.visibility = "hidden" ;
    speedXlog.style.visibility = "hidden" ;
    speedYlog.style.visibility = "hidden" ;
    buttonV.style.visibility = "visible" ;

    ballSpeedX = 0 ;
    ballSpeedY = 0 ;
}