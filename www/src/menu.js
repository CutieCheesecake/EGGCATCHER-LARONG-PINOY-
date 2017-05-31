var menuState = {
    create: function() {
        if (!game.global.music) {
            this.music = game.add.audio('chicken', 0.8, true);
            this.music.play();
            game.global.music = true;
        }
        this.background = game.add.image(game.world.centerX, game.world.height, 'menu_background');
        this.background.anchor.setTo(0.5, 1);
        this.background.scale.x = 1.5;
        this.background.scale.y = .79;


        this.robot = game.add.image(game.world.centerX, game.world.height + 120, 'menu_foreground');
        this.robot.anchor.setTo(0.5, 1);
        this.robot.scale.x = 1.5;
        this.robot.scale.y = 1.5;


        // this.displayScores();
        this.title = game.add.image(game.world.centerX, 210,'title');
        this.title.anchor.setTo(0.5, 0.5);
        this.tweenButtons(this.title);
        this.title.scale.x = 1;
        this.title.scale.y = 1.95;

      
        this.playButton = game.add.button(w/7.95 , h/2.5, 'play_button', this.startGame, this);
        this.tweenButtons(this.playButton);
        this.playButton.scale.x = 1.80;
        this.playButton.scale.y = 1.35;

        this.muteButton = game.add.button(w/7.90 , h/1.322,  'mute_button', this.muteSound, this);
        this.tweenButtons(this.muteButton);
        this.muteButton.scale.x = 1.35;
        this.muteButton.scale.y = 1.35;

        if (game.sound.mute) {
            this.muteButton.frame = 1;
        }

        this.helpButton = game.add.button(w/1.645 , h/1.322, 'help_button', this.helpPopup, this);
        this.tweenButtons(this.helpButton);
        this.helpButton.scale.x = .525;
        this.helpButton.scale.y = .525;


        this.creditsButton = game.add.button(w/3.98 , h/1.9, 'credits_button', this.credits, this);
        this.creditsButton.scale.x = .5;
        this.creditsButton.scale.y = .43;
        this.tweenButtons(this.creditsButton);

        this.helpImage = game.add.button(game.world.centerX, game.world.centerY, 'help_image', this.helpPopup, this);
        this.helpImage.scale.x = 1;
        this.helpImage.scale.y = 1;
        this.helpImage.anchor.setTo(0.5, 0.5);
        this.helpImage.kill();
        this.help = false;
    },

    startGame: function() {
        game.state.start('play');
    },

    helpPopup: function() {
        this.help = !this.help;
        if (this.help) {
            this.helpImage.revive();
        } else {
            this.helpImage.kill();
        }
    },

    credits: function() {
        game.state.start('credits');
    },

    muteSound: function() {
        game.sound.mute = !game.sound.mute;
        if (!game.global.mute) {
            game.global.mute = true;
            this.muteButton.frame = 1;
        } else {
            game.global.mute = false;
            this.muteButton.frame = 0;
        }
    },



    tweenButtons: function(button) {
        var randomInt = game.rnd.integerInRange(5, 10);
        game.add.tween(button)
            .to({
                y: button.y + randomInt
            }, 2000)
            .to({
                y: button.y - randomInt
            }, 2000)
            .loop()
            .start();
    },
};
