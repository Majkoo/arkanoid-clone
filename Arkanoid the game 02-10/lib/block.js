
let blocks = [

    // bX  bY   bW  bH

    [  50, 250, 80, 20 ],
    [ 158, 250, 80, 20 ],
    [ 262, 250, 80, 20 ],
    [ 366, 250, 80, 20 ],
    [ 470, 250, 80, 20 ]


]

// Block drawing function
function blocksdraw() {
    for ( i = 0 ; i < blocks.length ; i++) {
        ctx.fillStyle = "lightblue" ;
        //           BlockX        BlockY         BlockWidth     BlockHeight
        ctx.fillRect(blocks[i][0], blocks[i][1],  blocks[i][2],  blocks[i][3])

        blockCol();
        }

}



