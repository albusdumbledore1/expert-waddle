var runner,corona;
var ground,invisibleGround,workersGroup,specialWorkersGroup;
var cloudsGroup, cloudImage;
var groundImg;
var coronaObstacleGroup;



function preload(){
    cloudImage = loadImage("blueCloud.png");
    groundImg = loadImage("realistic_ground.png");

}

function setup(){
    createCanvas(1200,400)
   
    ground = createSprite(600,400,1200,20);
    ground.scale = 3;
    ground.setCollider("rectangle",0,0,ground.width,ground.height+15);
    ground.debug = true;
    ground.addImage("ground",groundImg);
    ground.velocityX = -5;
    
    console.log(ground.x);
    invisibleGround = createSprite(600,350,1200,20);
    invisibleGround.visible = false;

    runner = createSprite(100,300,50,50);
    runner.shapeColor = "brown";
    console.log(runner.y);


    corona = createSprite(600,300,50,50);
    corona.shapeColor = "brown";
    console.log(corona.y);
    //ground.shapeColor = "brown";
    
   // globe.addImage("phoenix",globeImg);
  coronaObstacleGroup = new Group();
}

function draw(){
    background("#09eded");
    if(ground.x<-300){
        ground.x =600;
      
    }
    spawnClouds();
    spawncoronaObstacle();
    drawSprites();
    
}
function spawnClouds() {
    //write code here to spawn the clouds
    if (frameCount % 100 === 0) {
      var cloud = createSprite(1200,120,40,10);
      cloud.y = Math.round(random(5,120));
      cloud.addImage(cloudImage);
      cloud.scale = 0.3;
      cloud.velocityX = -2;
      
       //assign lifetime to the variable
      cloud.lifetime = 700;
      
      //adjust the depth

  
      
      //add each cloud to the group
     // cloudsGroup.add(cloud);
    }
    
  }


  function spawncoronaObstacle() {
    var rand = Math.round(random(30,60));
    console.log(rand);
    //write code here to spawn the clouds
    if (frameCount % 30 === 0) {
      var coronaObstacle = createSprite(1200,300,10,40);
     
     // coronaObstacle.addImage(cloudImage);
      //coronaObstacle.scale = 0.3;
      coronaObstacle.velocityX = -5;
      
       //assign lifetime to the variable
    coronaObstacle.lifetime = 700;
    coronaObstacle.shapeColor = "red";
      //adjust the depth

  
      
      //add each cloud to the group
      coronaObstacleGroup.add(coronaObstacle);
    }
    
  }



