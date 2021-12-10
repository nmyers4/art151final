var song;
var bg;
var rainArr = [];
var bananas = [];
let animation = [];
var spriteSheet;

function preload() 
{
  song = loadSound('stickerbrush.mp3');
  bg = loadImage('background.jpg');
  spriteSheet = loadImage('updated_object_sprite_sheet.png');
  spriteData = loadJSON('frames.json');
}
  
 
function setup() 
{
  createCanvas(1920, 1080);
  
  song.loop();
  getAudioContext().resume();
  song.stop();
  
  for(var i = 0; i < 400; i++) {
    rainArr[i] = new rain();
  }
  
  let frames = spriteData.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spriteSheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }

  for (let i = 0; i < 50; i++) {
    bananas[i] = new Sprite(animation, 0, i * 75, 0.1);
  }
}
 
function draw()
{
  background(bg);
  
  for(var i = 0; i < 10; i++) {
  rainArr[i].show();
  rainArr[i].update();
  }
  
  playSong();
  for (let banana of bananas) {
    banana.show();
    banana.animate();
  }  
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
    this.gravity = 0.05;
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
 