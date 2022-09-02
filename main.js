var canvas = new fabric.Canvas('myCanvas')
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object="";
var block_image_object="";
function player_update()
{
fabric.Image.fromURL("player.png", function(Img){
    player_object = Img;

    player_object.scaleToWidth(155);
    player_object.scaleToHeight(150);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);
}); 
}

function new_image(get_image)
{
fabric.Image.fromURL(get_image, function(Img){
    block_image_object=Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '82'	)
    {

        console.log("r and shift pressed together");
        block_image_width = block_image_width + 15;
        block_image_height = block_image_height + 15;
        document.getElementById("current-width").innerHTML = block_image_width;
        document.getElementById("current-height").innerHTML = block_image_height;
    }
    if(e.shiftKey == true && keyPressed == '83'	)
    {

        console.log("r and shift pressed together");
        block_image_width = block_image_width - 15;
        block_image_height = block_image_height - 15;
        document.getElementById("current-width").innerHTML = block_image_width;
        document.getElementById("current-height").innerHTML = block_image_height;
    }


if(keyPressed == '38')
{
    up();
    console.log("up")
}
if(keyPressed == '40')
{
    down();
    console.log("down");
}
if(keyPressed == '37')
{
    left();
    console.log("left");
}
if(keyPressed == '39')
{
    right();
    console.log("right")
}
if(keyPressed == '65')
{
new_image('cloud.jpg');
console.log("a")
}
if(keyPressed == '66')
{
new_image('dark_green.jpg');
console.log("b")
}
if(keyPressed == '67')
{
new_image('ground.jpg');
console.log("c")
}
if(keyPressed == '68')
{
new_image('light_green.jpg');
console.log("d")
}
if(keyPressed == '69')
{
new_image('roof.jpg');
console.log("e")
}
if(keyPressed == '70')
{
new_image('trunk.jpg');
console.log("f")
}
if(keyPressed == '71')
{
new_image('unique.jpg');
console.log("g")
}
if(keyPressed == '72')
{
new_image('wall.jpg');
console.log("h")
}
if(keyPressed == '73')
{
new_image('yellow_wall.jpg');
console.log("i")
}
}

function up()
{
    if(player_y>=0)
    {
        player_y = player_y - block_image_height;
        console.log("block image height =" + block_image_height);
        console.log("when up arrow ley iss pressed, X =" + player_x + ", y is ="+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(player_y<=500)
    {
        player_y = player_y + block_image_height;
        console.log("block image height =" + block_image_height);
        console.log("when up arrow ley iss pressed, X =" + player_x + ", y is ="+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left ()
{
    if(player_x=>0)
    {
        player_x = player_x - block_image_width;
        console.log("block image height =" + block_image_height);
        console.log("when up arrow ley iss pressed, X =" + player_x + ", y is ="+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right()
{
    if(player_y <=600)
    {
        player_x = player_x + block_image_height;
        console.log("block image height =" + block_image_height);
        console.log("when up arrow ley iss pressed, X =" + player_x + ", y is ="+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}

