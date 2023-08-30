rightWristX=0;
leftWristX=0;

song1="";
song2="";

function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function setup(){

video = createCapture(VIDEO);
video.hide();

canvas = createCanvas(700, 500);
canvas.center();

}

function draw(){
    image(video, 0, 0, 700, 500);
}