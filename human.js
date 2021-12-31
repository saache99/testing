var family = "";

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
}
function preload()
{
    family = loadImage('2.png');
}

function draw(){
image(family,0,0,640,420);
fill("red");
text("People or Family", 45,35);
noFill();
stroke("red");
rect(30,20,450,400);
}