let Game=function(){
    this.screenWidth=800;
    this.screenHeight=600;
    this.hitCounter=0;
    //init screen
    Crafty.init(screenWidth,screenHeight, document.getElementById('game'));
    //add player in game
    this.player=Crafty.e("PlayerCharacter")
    .attr({x: 0, y: 400});
    //add floor to game
    Crafty.e('Floor,2D,Canvas,Solid, Color')
    .attr({x: 0, y: 570, w: this.screenWidth, h: 30})
    .color('#0F0');
    //add a text to show hit score.
    this.hitText = Crafty.e('2D, DOM, Text')
    .attr({
    x: screenWidth - 100,
    y: 10
    });
    this.hitText.text('Hit:' + this.hitCounter);
    this.hitText.textFont({
        size: '30px',
        weight: 'bold'
    });
    // crafty drop the rain every 4th frame instead of every 2nd frame
    Crafty.bind("EnterFrame", function(){      
        if (Crafty.frame() % 4 == 0){
            drop();
        }
    });

    function drop()
    {
        let random_x = Math.floor((Math.random() * this.screenWidth));
        Crafty.e('Rain')
        .attr({x: random_x, y: 0, w:2, h: 10})
        .bind("EnterFrame", function() {
            if (this.y > screenHeight-35){
                this.destroy()
            }
        })
        .onHit("PlayerCharacter", function(){
            this.destroy();
            hitCounter=hitCounter+1;
            console.log(hitCounter);
            hitText.text("Hit: " + hitCounter);
            if (hitCounter == 10)
            {
                player.x = 20;
                hitCounter = 0;
                hitText.text("Hit: " + hitCounter);
            };
        });
    }
}
Game();
