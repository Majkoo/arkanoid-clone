function boardCol() {

let boardLeftX = boardX ;
let boardRightX = boardX + boardWidth ;
let boardTopY = boardY ;
let boardDownY = boardY + boardHeight;

    // Board collision top
    if (ballY >= boardY - boardHeight - ballSize/2 &&
        ballY <= boardY - boardHeight  &&
        ballX + ballSize >= boardLeftX &&
        ballX  <= boardRightX) {

        if(ballSpeedY > 0){
            ballSpeedY = -ballSpeedY ;
        
            if (leftPressed === true) {
                ballSpeedX -= 0.2 ;
            }
            if (rightPressed === true) {
                ballSpeedX += 0.2 ;
            }

            if (blocks.length === 0) {
                menu();
            }
        }
    }
    // Board collision down
    if (ballY <= boardY  + ballSize/2&&
        ballY >= boardY - boardHeight/2  &&
        ballX + ballSize >= boardLeftX &&
        ballX  <= boardRightX) {

        if(ballSpeedY < 0){
            ballSpeedY = -ballSpeedY ;
        }
    }
    // Board collision left 
    if (ballX + ballSize >= boardLeftX && 
        ballX + ballSize <= boardLeftX + ballSize && 
        ballY + ballSize >= boardTopY && 
        ballY <= boardDownY) {

        if(ballSpeedX > 0){
            ballSpeedX = -ballSpeedX ;
        }
    }
    // Board collision right
    if (ballX <= boardRightX && 
        ballX >= boardRightX - ballSize &&
        ballY >= boardTopY - ballSize &&
        ballY <= boardTopY) {

        if(ballSpeedX < 0){
            ballSpeedX = -ballSpeedX ;
        }
    }
}

function canCol() {

    // X colission rule left (canvas)
    if (ballX <= 0) {
        if(ballSpeedX < 0){
            ballSpeedX = -ballSpeedX ;
        }
    }
            // X colission rule right (canvas)
    if (ballX >= canw - ballSize){
        if(ballSpeedX > 0){
            ballSpeedX = -ballSpeedX ;
        }
    }
            // Y colission rule top (canvas)
    if (ballY <= 0) {
        if (ballSpeedY < 0){
            ballSpeedY = -ballSpeedY ;
        }
    }
            // Y colission rule bottom (canvas)
    if (ballY > canh + ballSize) {
        if (ballSpeedY <= 0){
            ballSpeedY = -ballSpeedY ;
        }
        ballSpeedY = -ballSpeedY  ;
        // window.alert("PRZEGRALES : - )");
        // window.location.reload() ;
    }
}
 let speedmod = 0.1;

function blockCol() {

    //  BlockX        BlockY         BlockWidth     BlockHeight
    //  blocks[i][0]  blocks[i][1]   blocks[i][2]   blocks[i][3]

        // collision (block)
    if (ballY <= blocks[i][1] + ballSize        &&
        ballY >= blocks[i][1] - blocks[i][3]    &&
        ballX >= blocks[i][0] - ballSize        &&
        ballX <= blocks[i][0] + blocks[i][2]) {

            // top
        if (ballY >= blocks[i][1] - blocks[i][3]                &&
            ballY <= blocks[i][1] - blocks[i][3] + ballSize/2   &&
            ballX >= blocks[i][0] - ballSize                    &&
            ballX <= blocks[i][0] + blocks[i][2]) { bColtop(); }

            // bot
        if (ballY <= blocks[i][1] + ballSize        &&
            ballY >= blocks[i][1] - blocks[i][3]/2  &&
            ballX >= blocks[i][0] - ballSize/2      &&
            ballX <= blocks[i][0] + blocks[i][2]) { bColbot(); }

            // right
        if (ballX <= blocks[i][0] + blocks[i][2]            && 
            ballX >= blocks[i][0] + blocks[i][2] - ballSize &&
            ballY >= blocks[i][1] - ballSize                &&
            ballY <= blocks[i][1] + blocks[i][3]) { bColright(); }

            // left
        if (ballX >= blocks[i][0] - ballSize    && 
            ballX <= blocks[i][0] + ballSize    && 
            ballY >= blocks[i][1] - ballSize    && 
            ballY <= blocks[i][1] + blocks[i][3]) { bColleft(); }
    } 
}

    function bColbot () {

    if(ballSpeedY < 0){
        ballSpeedY -= speedmod ;
        ballSpeedY = -ballSpeedY ;
        blocks.splice(i, 1);  
        }
    }
    function bColtop () {

    if(ballSpeedY > 0){
        ballSpeedY += speedmod ;
        ballSpeedY = -ballSpeedY ;
        blocks.splice(i, 1);  
        }
    }
    function bColleft() {

    if(ballSpeedX > 0) {
        ballSpeedX += speedmod ;
        ballSpeedX = -ballSpeedX ;
        blocks.splice(i, 1);  
        }
    }
    function bColright() {

    if(ballSpeedX < 0) {
        ballSpeedX -= speedmod ;
        ballSpeedX = -ballSpeedX ;
        blocks.splice(i, 1);  
        }
    }

    // POMYSL NA KOLIZJE PILKI: 

// MIERZENIE W KTORA STRONE OD CENTRUM PILKI ZNAJDUJE SIE BLOCZEK
// if (pilka jest w polu bloczku) {
//    if (centrum pilkiY > Centrum bloczkuY)
//      **CZTERY KOLEJNE STRONY**
//
// }