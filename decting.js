var img = "";

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetection = ml5.objectDetector('cocossd' , modelloaded);
}
function preload()
{
    img = loadImage('itemimage.jpg');
}

function draw(){
    image(img,0,0,640,420);
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
 }
}