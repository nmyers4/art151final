var song;
var bg;
var rainArr = [];

function preload() 
{
  song = loadSound('https://art151final.s3.us-west-2.amazonaws.com/Stickerbush+Symphony+Restored+to+HD.mp3');
  bg = loadImage('https://art151final.s3.us-west-2.amazonaws.com/background.png');
}
 
function setup() 
{
  createCanvas(1600, 900);
  
  song.loop();
  
  song.stop();
  
  for(var i = 0; i < 400; i++) {
    rainArr[i] = new rain();
  }
}
 
function draw()
{
  background(bg);
  
  for(var i = 0; i < 400; i++) {
  rainArr[i].show();
  rainArr[i].update();
  }
  
  playSong();
    
}

function rain() {
  this.x = random(0, width);
  this.y = random(0, -height);
  
  this.show = function() {
    noStroke();
    fill(0, 0, 255);
    ellipse(this.x, this.y, random(1, 5), random(1, 5));   
  }
  this.update = function() {
    this.speed = random(5, 10);
    this.gravity = 1.05;
    this.y = this.y + this.speed*this.gravity;  
    
    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 0;
    }
  }
}
 
function playSong() 
{
  if(song.isPlaying() == false) 
  {
    song.play();
  } 
}
 