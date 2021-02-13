
let btn1 = document.getElementById("b1");
let btn2 = document.getElementById("b2");
let btn3 = document.getElementById("b3");
let btn4 = document.getElementById("b4");
let btn5 = document.getElementById("b5");
let btn6 = document.getElementById("b6");
let btn7 = document.getElementById("b7");
let btn8 = document.getElementById("b8");
let btn9 = document.getElementById("b9");

function btnclick () {
    menustatement = false ;
    canvas.style.visibility = "visible" ;
    speedXlog.style.visibility = "visible" ;
    speedYlog.style.visibility = "visible" ;
    buttonV.style.visibility = "hidden" ;

    ballSpeedX = 4 ;
    ballSpeedY = 4 ;

    ballX = canw/2  - ballSize/2 ;
    ballY = 745     - ballSize/2 ;

    boardX = 225 ;
    
}

btn1.addEventListener("click", function() {
    blocks = lvl1;
    console.log("1");
    btnclick();
    speedmod = 0.1 ;
    btn1.innerText = "X" ;
});

btn2.addEventListener("click", function() {
    blocks = lvl2;
    console.log("2");
    btnclick();
    speedmod = 0.1 ;
    btn2.innerText = "X" ;
});

btn3.addEventListener("click", function() {
    blocks = lvl3;
    console.log("3");
    btnclick();
    btn3.innerText = "X" ;
});

btn4.addEventListener("click", function() {
    blocks = lvl4;
    console.log("4");
    btnclick();
    btn4.innerText = "X" ;
});

btn5.addEventListener("click", function() {
    blocks = lvl5;
    console.log("5");
    btnclick();
    btn5.innerText = "X" ;
});

btn6.addEventListener("click", function() {
    blocks = lvl6;
    console.log("6");
    btnclick();
    btn6.innerText = "X" ;
});

btn7.addEventListener("click", function() {
    blocks = lvl7;
    console.log("7");
    btnclick();
    btn7.innerText = "X" ;
});

btn8.addEventListener("click", function() {
    blocks = lvl8;
    console.log("8");
    btnclick();
    btn8.innerText = "X" ;
    speedmod = 0.09 ;
});

btn9.addEventListener("click", function() {
    blocks = lvl9;
    console.log("9");
    btnclick();
    speedmod = 0.06 ;
    btn9.innerText = "X" ;
});
