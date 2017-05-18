$(function () {

    var $canvas = $('canvas')[0];
    var ctx = $canvas.getContext("2d");
    var $width = $('canvas').width();
    console.log($width);
    var $height = $('canvas').height();
    var cellWidth = 10;
    var $direction;
    var $food;
    var $snake;

    //Start game
    function start() {

        $direction = 'right';
        createSnake();

        if (typeof timer != "undefined") clearInterval(timer);
        timer = setInterval(snakeLook, 60);
    }
    start();


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

    //create food
    function createFood() {
        $food = {
            x: Math.random() * ($width - cellWidth) / cellWidth,
            y: Math.random() * ($height - cellWidth) / cellWidth,
        };
        console.log($food);
    }
    createFood();

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

        //Game over and restart game
        if (posX == -1 || posX == $width / cellWidth || posY == -1 || posY == $height / cellWidth) {
            start();
            return;
        }

        var tail = $snake.pop();
        tail.x = posX;
        tail.y = posY;
        $snake.unshift(tail);
        console.log(tail);

        for (var i = 0; i < $snake.length; i++) {
            var cell = $snake[i];
            //Create snake
            createCell(cell.x, cell.y);
        }

        //Create food
        createCell($food.x, $food.y);
    }

    function createCell(x, y) {

        ctx.fillStyle = 'gray';
        ctx.fillRect(x * cellWidth, y * cellWidth, cellWidth, cellWidth);
        ctx.strokeStyle = 'white';
        ctx.strokeRect(x * cellWidth, y * cellWidth, cellWidth, cellWidth);
    }

    $(document).keydown(function (event) {
        var key = event.which;
        if (key == '37' && $direction != 'right') $direction = 'left';
        if (key == '38' && $direction != 'down') $direction = 'up';
        if (key == '39' && $direction != 'left') $direction = 'right';
        if (key == '40' && $direction != 'up') $direction = 'down';
    })
});