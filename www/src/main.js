// var game = new Phaser.Game(800, 500, Phaser.AUTO, 'gameDiv');


//720 X 1280
//576, 1024, 
var w=700,h= 900;
var game = new Phaser.Game(700, 1000, Phaser.CANVAS, 'gameDiv');

var player,keyboard;
var  bounds = 1500;
//  bootGame, preloadGame, menuGame, playGame, winGame,loseGame, 
var bg, menuText;
        var platforms, process,


        scoreText,gameOverText,livesText,
        kalabans,kakampis, kalokas, kaloka,
        platforms,
        gameOverText, 
        collisionHandler,
        // initTime,
        timeText,
        bestText;
        var pause,restart;
        var score=0;
        var tugtog;
        var chicken;
        var lives= 0;


//global variables go below
game.global = {
    mute: false,
    score: 0,
    music: false
};

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('credits', creditsState);
game.state.start('boot');