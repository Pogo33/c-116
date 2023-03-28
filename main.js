noseX=0;
noseY=0;

function preload(){
    moustache_nose=loadImage('new.png');
}



function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}

function draw(){
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(0,200,0);
    image(moustache_nose,noseX-35,noseY+10,70,30);
    
}

function take_snapshot(){
save('myFilterImage.png');
}

function modelLoaded(){
    console.log('PoseNet is initialised')
}

function gotPoses(results){
 if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("nose x = "+noseX);
    console.log("nose y = "+noseY);
 }
}