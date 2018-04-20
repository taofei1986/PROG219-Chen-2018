//rain
Crafty.c('Rain',{
    init:function(){
        this.requires('2D, Canvas, Color, Gravity, Collision')
        .color('#000080')
        .gravity()
        .gravityConst(0.2);
    }
});

//player
Crafty.c('PlayerCharacter', {
    init: function() {
        this.requires('2D,Canvas,Twoway,Gravity,Collision,Canvas, Color')
        .twoway(10)
        .attr({ w: 50, h: 50})
        .color('#D0D')
        .gravity('Floor')
        .gravityConst(25)
        .stopOnScreenSide();
    },
    // Registers a stop-movement function to be called when
    // this entity hits an entity with the "Solid" component
    stopOnScreenSide: function() {
        this.onHit('ScreenSide', this.stopMovement);
        return this;
    },
    // Stops the movement
    stopMovement: function() {
        this._speed = 0;
        if (this._movement) {
        this.x -= this._movement.x;
        }
    }
});

//screenside
Crafty.c('ScreenSide',{
    init:function(){
        this.requires('2D,Canvas,Collision,Canvas, Color,solid')
        .attr({w:10,h:screenHeight})
        .color('#000');
    }
});