let Game = {
    // This map_grid object, defined inside the Game object
    // defines our grid's size and size of each tile
    map_grid: {
        width: 24,
        height: 16,
        tile: {
            width: 16,
            height: 16
        }
    },
    // Define width, height property, they “scale” if board size changes
    // The total width of the game screen.
    // this is just the width of a tile times the width of the grid
    width: function() {
        return this.map_grid.width * this.map_grid.tile.width;
    },
    // The total height of the game screen. 
    // this is just the height of a tile times the height of the grid
    height: function() {
        return this.map_grid.height * this.map_grid.tile.height;
    },
// Initialize and start our game
start: function() {
        // Start crafty and set a background color so that we can see it's working
        Crafty.init(Game.width(), Game.height());
        Crafty.background('rgb(87, 109, 20)');
        // Simply start the "Game" scene to get things going
        Crafty.scene('Loading');
    }   
};
$text_css = {
    'font-size': '24px',
    'font-family': 'Arial',
    'color': 'white',
    'text-align': 'center'
}
Game.start();                      