class Player {
    constructor(){
      this.index = 0;
      this.distance = 0;
      this.name = null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
      console.log("playerCount"+playerCount);
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
      console.log("updateCount"+count);
    }
  
    update(){
      console.log("player.update();"+this.index+this.name);
      var playerIndex = "players/player" + this.index;
      database.ref("/players/player"+this.index).update({
        name:this.name,
        distance:this.distance
      });
     
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }
  