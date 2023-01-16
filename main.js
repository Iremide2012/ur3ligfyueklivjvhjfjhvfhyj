function preload(){

}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 200, 150, 250, 250);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 90);
    circle(590, 50, 90)
    circle(50, 430, 90)
    circle(590, 430, 90)
    fill(0, 255, 0)
    stroke(0, 255, 0)
    rect(90, 40, 460, 20)
    rect(90, 420, 460, 20)
    rect(30, 90, 20, 300)
    rect(580, 90, 20, 300)

}

function take_snapshot(){
    save("filter_image.png");

}
