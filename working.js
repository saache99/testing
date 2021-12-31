var img = "";

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
}
function preload()
{
    img = loadImage('4.png');
}

function draw(){
image(img,0,0,640,420);
fill("red");
text("Laptop", 165,165);
noFill();
stroke("red");
rect(150,150,200,200);
fill("red");
text("Man", 315,15);
noFill();
stroke("red");
rect(300,0,250,500);
fill("red");
text("Coffee", 165,315);
noFill();
stroke("red");
rect(150,300,100,100);
}