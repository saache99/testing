var img = "";
var objects = [];

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetection = ml5.objectDetector('cocossd' , modelloaded);
}
function preload()
{
    img = loadImage('3.png');
}

function draw(){
image(img,0,0,640,420);
for (var i = 0; i < objects.length; i++) {
    fill("red");
    var precent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + precent + "%", objects[i].x - 15, objects[i].y - 15);
    noFill();
    stroke("red");
    rect(objects[i].x -15, objects[i].y -15, objects[i].width, objects[i].height);
  }
}


function modelloaded()
{
    console.log("Model Loaded succssefuly");
    status = true;
    objectDetection.detect(img, gotResult);
}

function gotResult(error, results)
{
 if(error)
 {
     console.log(error);
 }
 else{
     console.log(results);
     objects  = results;
 }
}