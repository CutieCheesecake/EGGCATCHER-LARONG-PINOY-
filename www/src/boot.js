var bootState = {
    init: function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setScreenSize(true);
    },
    preload: function() {
        game.load.image('progressBar', 'assets/ui/progress_bar.png');
    },
    create: function() {
        game.stage.backgroundColor = 'white';
        game.state.start('load');
    },
    update: function() {},
};