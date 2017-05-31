/*jshint undef: false, unused:false*/
var loadState = {
    preload: function() {
        var loadingLabel = game.add.text(game.world.centerX, 150, '..........Loading..........', {
            fontSize: 99166,
            fill: '#ffffff'
        });
        loadingLabel.anchor.setTo(0.5, 0.5);
        var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
        progressBar.anchor.setTo(0.5, 0.5);
        game.load.setPreloadSprite(progressBar);


        game.load.audio('tugtog', 'assets/assets/sounds/L.mp3', 37, 45, 18);
        game.load.audio('chicken', 'assets/assets/sounds/chicken.mp3');
        game.load.audio('ahas', 'assets/assets/sounds/enemy.mp3');
        game.load.audio('talo', 'assets/assets/sounds/lose.mp3');

   
        game.load.image('play_button', 'assets/assets/play.png');
        game.load.image('help_button', 'assets/assets/howtoplay.png');
        game.load.image('credits_button', 'assets/about.png');
        game.load.image('help_image', 'assets/ui/how_to_play.png');
        game.load.spritesheet('mute_button', 'assets/ui/mute_button.png', 154, 200);
        game.load.image('menu_foreground', 'assets/ui/menu_foreground.png');
        game.load.image('menu_background', 'assets/ui/menu_background.png');
        game.load.image('title', 'assets/assets/title.png'  );
        game.load.image('back_button', 'assets/ui/back_icon.png');
        game.load.image('gameover', 'assets/assets/GAMEOV.png');


        game.load.image("pause","assets/assets/pausebutton.png",290,70);
        game.load.image("restart","assets/assets/restart.png",100,50);
        game.load.image('taya', 'assets/assets/manok.png');
        game.load.image('inahin', 'assets/assets/manoknest.png');
        game.load.image('bubble', 'assets/assets/nest.png' , 265, 341);
        game.load.spritesheet('baboy', 'assets/assets/idle.png' , 305, 301);
        game.load.image('kalaban', 'assets/assets/itlog.png');
        game.load.image('kakampi', 'assets/assets/ahas.png');
        game.load.image('kaloka', 'assets/assets/uod.png');
        game.load.image('bg', 'assets/assets/brown.png');
        game.load.image('picpause', 'assets/assets/p.png' , 300, 200);
        game.load.image('chic', 'assets/assets/chic.png' , 400, 200);


    },


    create: function() {
        game.state.start('menu');
    }
};