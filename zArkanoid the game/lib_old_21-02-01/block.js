
let blocks = [

//    bX, bY, bW, bH
    [  50, 30, 80, 20 ], //0
    [ 158, 30, 80, 20 ], //1
    [ 262, 30, 80, 20 ], //2 
    [ 366, 30, 80, 20 ], //3
    [ 470, 30, 80, 20 ], //4

    [  50, 80, 80, 20 ], //5
    [ 158, 80, 80, 20 ], //6
    [ 262, 80, 80, 20 ], //7
    [ 366, 80, 80, 20 ], //8
    [ 470, 80, 80, 20 ]  //9

];

// Block drawing function
function blocksdraw() {
    for ( i = 0 ; i < blocks.length ; i++) {
        ctx.fillStyle = "lightblue" ;
        //           BlockX        BlockY         BlockWidth     BlockHeight
        ctx.fillRect(blocks[i][0], blocks[i][1],  blocks[i][2],  blocks[i][3])

        if (ballY <= blocks[i][1] + ballSize        &&
            ballY >= blocks[i][1] - blocks[i][3]/2  &&
            ballX >= blocks[i][0] - ballSize/2      &&
            ballX <= blocks[i][0] + blocks[i][2]) {

            if(ballSpeedY < 0){
                ballSpeedY = -ballSpeedY ;

            console.log("Block hit: " + i);
            console.log("X SPEED: " + ballSpeedX);
            console.log("Y SPEED: " + ballSpeedY);
            blocks.splice(i, 1);  
            }
            
        else if (ballY) {/*   top collision rule */}
        else if (ballY) {/*  left collision rule */}
        else if (ballY) {/* right collision rule */}
        }

    }
}





