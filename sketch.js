//declaring variables
var bg,bgImage;

var corona,corona1,corona2,corona3,corona4;

var doctor,doctorimage;

var bullet,bulletimage;

var coronagrp,bulletgrp;

var score =0;

var gameoverimg;

function preload(){
  
  //load image into the variable
  bgImage = loadImage("background.jpg");
  
  //load the corona images.
  corona1 = loadImage("corona1.png");
  corona2 = loadImage("corona2.png");
  corona3 = loadImage("corona3.png");
  corona4 = loadImage("corona4.png");
  
  //load doctorimage
  doctorimage = loadImage("doctor.png");
  
  //load bulletimage
  bulletimage = loadImage("bullet.png");
  
  //load gm image
  gameoverimg = loadImage("gameover.png");
  
}
function setup() {
  
  createCanvas(500,525);
  
  //create sprite for background 
  bg = createSprite(300,300,600,600);
  
  //adding image to the sprite 
  bg.addImage(bgImage);
  
  bg.scale = 1.5;
  
  //velocity to the sprite
  bg.velocityY=-8;
  
  //creating doctor
  doctor = createSprite(50,470,10,10);
  doctor.addImage(doctorimage);
  doctor.scale = 0.2;
  
  coronagrp = new Group();
  bulletgrp = new Group();

}

function draw() {
  background("pink");
  
  
    
  //creating infinite background
  if(bg.y<200){
    
    bg.y = 300;
  }
  
  //controlling doctor
  if(keyDown(LEFT_ARROW)){
    doctor.x = doctor.x - 2;
  }
  
  if(keyDown(RIGHT_ARROW)){
    doctor.x = doctor.x + 2;
  }
  
  
  //creating bullet
  if(keyDown("space")){
    createbullet();
  }
  
  createcorona();
  
  if(coronagrp.isTouching(bulletgrp)){
   coronagrp.destroyEach();
    score++;
    
  }
  
  if(coronagrp.isTouching(doctor)){
   var gameover = createSprite(250,250,10,10);
    gameover.addImage(gameoverimg);
    gameover.scale = 0.5
    doctor.velocity=0;
    coronagrp.setVelocityEach(0);
  }
  
  
  drawSprites();
  
  text("score "+score , width-100,50)
}
function createbullet(){
  
  bullet = createSprite(250,500,10,10);
  bullet.x = doctor.x+20;
  bullet.addImage(bulletimage);
  bullet.velocityY=-10;
  bullet.scale = 0.2;
  bulletgrp.add(bullet);
}

function createcorona(){
  if(frameCount%100 ==0){
    corona = createSprite(250,0,30,30);
    corona.x = random(0,500);
    corona.velocityY=2;
    coronagrp.add(corona);
    var random_number= Math.round(random(1,4));
    console.log(random_number);
    
    switch(random_number){
      case 1: corona.addImage(corona1);
              corona.scale = 0.1;
              break;
              
      case 2: corona.addImage(corona2);
              corona.scale=0.1;
             break;
      
      case 3: corona.addImage(corona3);
              corona.scale =0.1;
              break;
              
      case 4: corona.addImage(corona4);
              corona.scale = 0.1;
              break;
    }
  }
  
}




    