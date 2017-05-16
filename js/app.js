$(function () {

    var $canvas = $('canvas')[0];
    var ctx = $canvas.getContext("2d");
    var $width = $('canvas').width();
    var $height = $('canvas').height();
    var cellWidth = 10;

    ctx.fillStyle = "#FFF";
    ctx.fillRect(0, 0, $width, $height);

    var gradient = ctx.createLinearGradient(0, 0, $width, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 0, $width, $height);


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
        for (var i = 0; i < $snake.length; i++) {
            var cell = $snake[i];
            console.log(cell);

            ctx.fillStyle = 'gray';
            ctx.fillRect(cell.x * cellWidth, cell.y * cellWidth, cellWidth, cellWidth);
            ctx.strokeStyle = 'white';
            ctx.strokeRect(cell.x * cellWidth, cell.y * cellWidth, cellWidth, cellWidth);
        }
    }
    snakeLook();

});