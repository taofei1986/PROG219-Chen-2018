//Setting screen size and hit counter
let screenWidth = 800;
let screenHeight = 400;
let hitCounter = 0;
//init game
Crafty.init(screenWidth,screenHeight, document.getElementById('game'));
//add floor
Crafty.e('Floor')
.attr({x: 0, y: screenHeight - 20});//floor location
//add screen border
Crafty.e('ScreenSide')
.attr({x:0,y:0});
//add player
let player1 = Crafty.e('Player')
.attr({x: 20, y: 200})//player location
.bind("EnterFrame", function(){
  if (this.x == screenWidth)
  {
    pause();
    Crafty.e('2D, DOM, Text')
    .attr({x:screenWidth/2, y:screenHeight/2})
    .text("Stage 1 Clear")
    .textFont({size:'20px', weight:'bold'})
    .textColor('#FFFFFF');
  }
});
//add hit text
let hitText = Crafty.e('2D,DOM, Text')
.attr({//hitText location
  x: screenWidth - 100,
  y: 10
});
//display text
hitText.text('Hit:' + hitCounter);
//set text style
hitText.textFont({
  size: '30px',
  weight: 'bold'
})
.textColor('#FFFFFF');
// drop rain at random x place from 50 to 50+screenWidth
function drop()
{
  let randomx = Math.floor((Math.random() * screenWidth) + 60);
    Crafty.e('Drop')
        .attr({x: randomx, y: 0, w: 2, h: 10})
        .onHit('Player', function(){
            this.destroy();
            hitCounter++;
            hitText.text("Hit:" + hitCounter);

            if (hitCounter == 5)//reset player1 location and hit counter
            {
              player1.x = 20;
              hitCounter = 0;
              hitText.text("Hit:" + hitCounter);
            }
        })
        .bind("EnterFrame", function() {
            if (this.y > screenHeight-20)
              this.destroy();
        });
}
function pause()
{
  Crafty.pause();
}
Crafty.bind("EnterFrame", function(){
  document.getElementById("message").innerHTML = Crafty.frame();
  if (Crafty.frame() % 4 == 0)
    drop();
});
