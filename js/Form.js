class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
       this.slogan = createElement('h5');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        /*var i = document.createElement("IMG");
        i.setAttribute("src", "images/alien.png");
        
        i.position(200,400);*/
        i.position(50, 350);
        i.width=displayWidth;
        //image(i,200,200);
        this.title.html("HyperSpace");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'purple');
        this.slogan.html("We are at a point in history where a proper attention to space, and especially near space, may be absolutely crucial in bringing the world together. - Margaret Mead")
        this.slogan.position(500,185);
        this.slogan.style('font-size','30px');
        this.slogan.style('color','green');
        //this.title.style('font', 'Arial');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'gray');
        

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            this.slogan.hide();
            this.title.hide();
            i.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello! " + player.name)
            this.greeting.position(800,250);
            this.greeting.style('color', 'red');
            this.greeting.style('font-size', '50px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            database.ref('/').update({players:null});
        });

    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
        
    }
}