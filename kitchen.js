var kitchen = "";

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
}
function preload()
{
    kitchen = loadImage('5.png');
}

function draw(){
image(kitchen,0,0,640,420);
fill("red");
noStroke();
textSize(18);
text("Dinning Table", 105,165);
noFill();
stroke("red");
rect(100,150,400,250);
fill("red");
noStroke();
textSize(18);
text("Refigirator", 105,115);
noFill();
stroke("red");
rect(100,100,100,200);
fill("red");
noStroke();
textSize(18);
text("Door", 555,115);
noFill();
stroke("red");
rect(550,100,400,200);
fill("red");
noStroke();
textSize(18);
text("Lights", 210,65);
noFill();
stroke("red");
rect(205,50,200,90);
}