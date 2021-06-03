class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        player.getCount();
        
        form = new Form()
        form.display();
        spaceship1 = createSprite(100,10);
        spaceship2 = createSprite(500,200);
        alien = createSprite(100,40);    
        alienBoss = createSprite(150,40);
        asteroid = createSprite(300,20);
      
        
        
        c=[spaceship1,spaceship2];
        npc=[alien,asteroid,spaceStation,alienBoss];
        
        spaceship1.addImage(spaceship1Img);
        spaceship1.scale=0.8;
        spaceship1.velocityY=-4;
        spaceship2.addImage(spaceship2Img);
        spaceship2.scale=0.8;
        spaceship2.velocityY=-4;
        alien.addImage(alienImg);
        alien.scale=0.8;
        alien.velocity=5;
        alienBoss.addImage(alienBossImg);
        alienBoss.velocityY=5;
        alienBoss.scale=0.18;
        asteroid.addImage(asteroidImg);
        asteroid.scale=0.8;
        asteroid.velocityX=-5;
        //spaceStation.addImage(spaceStationImg);
        laser1=createSprite(spaceship1+50,10);
        laser1.width=100;
        laser1.height=5;
        laser1.shapeColor="red";

        laser2=createSprite(spaceship2+50,10);
        laser2.width=100;
        laser2.height=5;
        laser2.shapeColor="red";

        spaceStation=createSprite(Math.round(random(200,40)));
        spaceStation.addImage(spaceStationImg);
        spaceStation.scale=0.8
        }
     
    }
    updateState(){
      database.ref("/").update({gameState:data});
    }
  
    play(){
      background("brown");
      image(bgImg,0,-displayHeight*4,displayWidth,displayHeight*5);
      //bgImg.velocityY=-7;
      
      form.hide();
      
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 0;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          console.log(x);
          y = displayHeight - allPlayers[plr].distance;
          c[index].x = x;
          c[index].y = y;
          if(index===0){
            laser1.x=c[index].x+50;
            laser1.y=c[index].y+25;

          }  
          if(index===1){
            laser2.x=c[index].x+50;
            laser2.y=c[index].y+25;
          }
          index=index+1;
          //console.log(objects.x);
  
          if (index === player.index){
            c[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = c[index-1].y
            rectMode(CENTER);
                  fill("red");
                  textSize(20);
                  text(allPlayers[plr].name,c[index-1].x-20, c[index-1].y+150);
                  ellipse(c[index-1].x, c[index-1].y, 60,60);
                  if(index==0 && keyIsDown("SPACE")){
                    laser1.velocityY=-4;
                  }
                  if(index==1 && keyIsDown("SPACE")){
                    laser2.velocityY=-4;
                  }else{
                    laser1.velocityY=0;
                   laser1.y=spaceship1.y;

                  laser2.velocityY=0;
                  laser2.y=spaceship2.y;
                  }
                    
                }
                else{
                    fill("black")
                    textSize(20);
                    text(allPlayers[plr].name,c[index-1].x-10, c[index-1].y+150);
                }
          
              
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance = player.distance+30;
        player.distance = player.distance+30;
        player.update();
      }
      if(keyIsDown(DOWN_ARROW) && player.index !== null){
        player.distance = player.distance-30;
        player.distance = player.distance-30;
        player.update();
      }
      if(spaceship1.isTouching(spaceStation)){
        fill("yellow");
        textSize(18);
        text("Spaceship has been successfully repaired!",200,250);
      }
      if(spaceship2.isTouching(spaceStation)){
        fill("yellow");
        textSize(18);
        text("Spaceship has been successfully repaired!",200,250);
      }

  
      drawSprites();
    }
    end(){
        
      background("yellow");
      form.hide();
      fill("red");
      textSize(20);
      text("Thank you for playing the HyperSpace! Hope you enjoyed", displayWidth/2-200, 300);
     Player.getPlayerInfo();
     console.log(allPlayers);
    }

  }
  