
class Block {
    constructor(blockX, blockY, blockWidth, blockHeight) {
    this.blockX = blockX ;
    this.blockY = blockY ;
    this.blockWidth  = blockWidth  ;
    this.blockHeight = blockHeight ;
    }
}

    // Block drawing function
    function lvl1blocks() {
        ctx.fillStyle = 'lightblue' ;
        ctx.fillRect( block1.blockX , block1.blockY , block1.blockWidth , block1.blockHeight ) ;

    }
                
const block1 = new Block(                                   50, 30,  500,  20) ;
// const block2 = new Block( block1.blockX+block1.blockWidth+  24, 30,  80,  20) ;
// const block3 = new Block( block2.blockX+block2.blockWidth+  24, 30,  80,  20) ;
// const block4 = new Block( block3.blockX+block3.blockWidth+  24, 30,  80,  20) ;
// const block5 = new Block( block4.blockX+block4.blockWidth+  24, 30,  80,  20) ;


