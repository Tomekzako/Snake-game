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
    var $score;
    //Start game
    function start() {
        $score = 0;
        $direction = 'right';
        createSnake();
        createFood();

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
            x: Math.round(Math.random() * ($width - cellWidth) / cellWidth),
            y: Math.round(Math.random() * ($height - cellWidth) / cellWidth),
        };
        console.log($food);
    }

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
        if (posX == -1 || posX == $width / cellWidth || posY == -1 || posY == $height / cellWidth || bodyCollision(posX, posY, $snake)) {
            start();
            return;
        }

        if (posX == $food.x && posY == $food.y) {
            var tail = {
                x: posX,
                y: posY
            };
            $score++;
            console.log($score);
            createFood();
        } else {
            var tail = $snake.pop();
            tail.x = posX;
            tail.y = posY;
            console.log(tail);
        }
        $snake.unshift(tail);

        for (var i = 0; i < $snake.length; i++) {
            var cell = $snake[i];
            //Create snake
            createCell(cell.x, cell.y);
        }

        //Create food
        createCell($food.x, $food.y);
        $('#score').text("Score: " + $score);
    }

    function createCell(x, y) {

        ctx.fillStyle = 'chartreuse';
        ctx.fillRect(x * cellWidth, y * cellWidth, cellWidth, cellWidth);
        ctx.strokeStyle = 'white';
        ctx.strokeRect(x * cellWidth, y * cellWidth, cellWidth, cellWidth);
    }

    function bodyCollision(x, y, arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].x == x && arr[i].y == y)
                return true;
        }
        return false;
    }

    $(document).keydown(function (event) {
        var key = event.which;
        if (key == '37' && $direction != 'right') $direction = 'left';
        if (key == '38' && $direction != 'down') $direction = 'up';
        if (key == '39' && $direction != 'left') $direction = 'right';
        if (key == '40' && $direction != 'up') $direction = 'down';
    })

});