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
        window.location.reload() ;
    }
}

function blockCol() {

    //  BlockX        BlockY         BlockWidth     BlockHeight
    //  blocks[i][0]  blocks[i][1]   blocks[i][2]   blocks[i][3]

        // bot collision (block)
    if (ballY <= blocks[i][1] + ballSize        &&
        ballY >= blocks[i][1] - blocks[i][3]/2  &&
        ballX >= blocks[i][0] - ballSize/2      &&
        ballX <= blocks[i][0] + blocks[i][2]) { bColbot(); }

        // top collision (block)

    if (ballY >= blocks[i][1] - blocks[i][3] - ballSize/2   &&
        ballY <= blocks[i][1] - blocks[i][3]                &&
        ballX >= blocks[i][0] - ballSize                    &&
        ballX <= blocks[i][0] + blocks[i][2]) { bColtop(); }

        // left collision (block)

    if (ballX >= blocks[i][0] - ballSize    && 
        ballX <= blocks[i][0] + ballSize    && 
        ballY >= blocks[i][1] - ballSize    && 
        ballY <= blocks[i][1] + blocks[i][3]) { bColleft(); }

        // right collision (block) (bugged [?] )

    if (ballX <= blocks[i][0] + blocks[i][2] && 
        ballX >= blocks[i][0] + blocks[i][2] - ballSize &&
        ballY >= blocks[i][1] - ballSize &&
        ballY <= blocks[i][1] + blocks[i][3]) { bColright(); }
}

    function bColbot () {

    if(ballSpeedY < 0){
        ballSpeedY = -ballSpeedY ;

        console.log("Block hit: " + i);
        console.log("X SPEED: " + ballSpeedX);
        console.log("Y SPEED: " + ballSpeedY);
        blocks.splice(i, 1);  
        }
    }
    function bColtop () {

    if(ballSpeedY > 0){
        ballSpeedY = -ballSpeedY ;

        console.log("Block hit: " + i);
        console.log("X SPEED: " + ballSpeedX);
        console.log("Y SPEED: " + ballSpeedY);
        blocks.splice(i, 1);  
        }
    }
    function bColleft() {

    if(ballSpeedX > 0) {
        ballSpeedX = -ballSpeedX ;

        console.log("Block hit: " + i);
        console.log("X SPEED: " + ballSpeedX);
        console.log("Y SPEED: " + ballSpeedY);
        blocks.splice(i, 1);  
        }
    }
    function bColright() {

    if(ballSpeedX < 0) {
        ballSpeedX = -ballSpeedX ;

        console.log("Block hit: " + i);
        console.log("X SPEED: " + ballSpeedX);
        console.log("Y SPEED: " + ballSpeedY);
        blocks.splice(i, 1);  
        }
    }