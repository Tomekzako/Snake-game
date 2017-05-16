$(function(){
    
    var $canvas = $('canvas')[0];
    var ctx = $canvas.getContext("2d");
    var $width = $('canvas').width();
    var $height= $('canvas').height();
    
    ctx.fillStyle = "#FFF";
    ctx.fillRect(0,0,$width,$height);
    ctx.strokeStyle = '#000';
    ctx.strokeRect(0,0,$width,$height);
    
    
});