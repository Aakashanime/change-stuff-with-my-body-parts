function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet =  ml5.poseNet( video, modelLoaded);
    poseNet.on('pose' , gotPoses);

}
function modelLoaded() {
    console.log('Posenet Is initialised!')
}


function draw() {
    background('#969A97');

    document.getElementById("span_id1").innerHTML =  "text size is =" + difference + "px";
    fill("green");
    stroke("magenta");
    text("my name is aakash and i built this website", noseX, noseY)
    textSize(difference)
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x ;
        noseY = results[0].pose.nose.y ;
        console.log("noseX =" +  noseX + "noseY = "  + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX)

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference)

    }
}

noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX= 0;
