$(function () {

    var $canvas = $('canvas')[0];
    var ctx = $canvas.getContext("2d");
    var $width = $('canvas').width();
    var $height = $('canvas').height();
    var cellWidth = 10;
    var $direction = 'right';


    //    var gradient = ctx.createLinearGradient(0, 0, $width, 0);
    //    gradient.addColorStop("0", "magenta");
    //    gradient.addColorStop("0.5", "blue");
    //    gradient.addColorStop("1.0", "red");
    //    ctx.strokeStyle = gradient;



    var $snake;

    function createSnake() {
        var snakeLength = 5;
        $snake = [];
        for (var i = snakeLength - 1; i >= 0; i--) {
            $snake.push({
                x: i,
                y: 0
            });
        }
    }
    createSnake();

    function snakeLook() {

        ctx.fillStyle = "#FFF";
        ctx.fillRect(0, 0, $width, $height);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(0, 0, $width, $height);

        var posX = $snake[0].x;
        var posY = $snake[0].y;

        if ($direction == 'right') posX++;
        if ($direction == 'left') posX--;
        if ($direction == 'up') posY--;
        if ($direction == 'down') posY++;

        var tail = $snake.pop();
        tail.x = posX;
        tail.y = posY;
        $snake.unshift(tail);
        console.log(tail);

        for (var i = 0; i < $snake.length; i++) {
            var cell = $snake[i];

            ctx.fillStyle = 'gray';
            ctx.fillRect(cell.x * cellWidth, cell.y * cellWidth, cellWidth, cellWidth);
            ctx.strokeStyle = 'white';
            ctx.strokeRect(cell.x * cellWidth, cell.y * cellWidth, cellWidth, cellWidth);
        }
    }

    $(document).keydown(function (event) {
        var key = event.which;
        if (key == '37' && $direction != 'right') $direction = 'left';
        if (key == '38' && $direction != 'down') $direction = 'up';
        if (key == '39' && $direction != 'left') $direction = 'right';
        if (key == '40' && $direction != 'up') $direction = 'down';
    })

    timer = setInterval(snakeLook, 600);

});