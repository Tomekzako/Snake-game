$(function(){
    
    var $canvas = $('canvas')[0];
    var ctx = $canvas.getContext("2d");
    var $width = $('canvas').width();
    var $height= $('canvas').height();
    
    ctx.fillStyle = "#FFF";
    ctx.fillRect(0,0,$width,$height);
    
    var gradient=ctx.createLinearGradient(0,0,$width,0);
    gradient.addColorStop("0","magenta");
    gradient.addColorStop("0.5","blue");
    gradient.addColorStop("1.0","red");
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 15;
    ctx.strokeRect(0,0,$width,$height);
    
    
    var $snake;
    
    function createSnake(){
        var snakeLength = 4;
        $snake = [];
        for(var i = snakeLength - 1; i > 0; i--){
            $snake.push({x:i,y:0});
            console.log($snake);
        }
    }
    
    createSnake();
    
    
});