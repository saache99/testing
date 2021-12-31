var img = "";

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
}
function preload()
{
    img = loadImage('3.png');
}

function draw(){
image(img,0,0,640,420);
fill("red");
text("Player", 45,75);
noFill();
stroke("red");
rect(30,60,300,350);
fill("red");
text("FootBall", 250,250);
noFill();
stroke("red");
rect(260,260,50,50);
fill("red");
text("Ground", 15,15);
noFill();
stroke("red");
rect(0,0,640,420);
}