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
    },
});