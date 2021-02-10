
let blocks = [

//    bX, bY, bW, bH
    [  50, 80, 80, 20 ],
    [ 158, 80, 80, 20 ],
    [ 262, 80, 80, 20 ],
    [ 366, 80, 80, 20 ],
    [ 470, 80, 80, 20 ],

    [  65, 150, 50, 20 ],
    [ 172, 150, 50, 20 ],
    [ 277, 150, 50, 20 ],
    [ 381, 150, 50, 20 ],
    [ 485, 150, 50, 20 ],

    [  65, 220, 50, 20 ],
    [ 172, 220, 50, 20 ],
    [ 277, 220, 50, 20 ],
    [ 381, 220, 50, 20 ],
    [ 485, 220, 50, 20 ],
    
    [  50, 300, 80, 20 ],
    [ 158, 300, 80, 20 ],
    [ 262, 300, 80, 20 ],
    [ 366, 300, 80, 20 ],
    [ 470, 300, 80, 20 ],

];

// Block drawing function
function blocksdraw() {
    for ( i = 0 ; i < blocks.length ; i++) {
        ctx.fillStyle = "lightblue" ;
        //           BlockX        BlockY         BlockWidth     BlockHeight
        ctx.fillRect(blocks[i][0], blocks[i][1],  blocks[i][2],  blocks[i][3])

        blockCol();
        }

}



