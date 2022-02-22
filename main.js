noseX=0;
noseY=0;
function preload(){
    clown_nose=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,25,25,450,450);
    image(clown_nose,noseX-40,noseY,70,70);
}
function take_snapshot(){
    save("IMG.png");
}
function modelLoded(){
    console.log('poseNet is initialised');
}
function gotPoses(results){
    if( results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX= "+results[0].pose.nose.x);
        console.log("noseY= "+results[0].pose.nose.y);
    }
}