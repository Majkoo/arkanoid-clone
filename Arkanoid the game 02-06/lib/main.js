const canvas    = document.querySelector('canvas');
const ctx       = canvas.getContext('2d');

    canvas.width    = 600 ;
    canvas.height   = 800 ;

    const canw      = canvas.width  ;
    const canh      = canvas.height ;
    
    // Table drawing function
    function table() {
        ctx.fillStyle = 'darkblue' ;
        ctx.fillRect(0 , 0, canw, canh ) ;
    }

    // Game refreshing function
    function game() {
        table() ;
        ball()  ;
        board() ;    
        blocksdraw() ;
        brdMove(leftPressed, rightPressed);
    }
    // Refreshing Interval (60Hz)
    setInterval(game, 1000 / 60 );


