var playState = {
    create: function() {


		game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.setBounds(-20, -20, game.width + 20, game.height + 20);
        land = game.add.tileSprite(1, 1, 800, 600, 'bg');
        land.autoScroll(70, 0);

        land.fixedToCamera = true;
        land.scale.x = 2;
        land.scale.y = 2;


        player=game.add.sprite(540,240,'taya');
        player.name = 'taya';

        player.anchor.setTo(0.5, 0.5);
        player.scale.x = 1.63;
        player.scale.y = 1.63;


        game.physics.enable(player, Phaser.Physics.ARCADE);   
        player.body.collideWorldBounds = true;
        player.body.allowRotation = false;

        process.createKakampi(1000);
        process.createKalaban(1000);
        process.createKaloka(1000);
        process.timer(100,1000);

        kakampi=game.add.group();
        kakampi.enableBody=true
        kakampi.scale.x = 1.285;
        kakampi.scale.y = 1.285;

        
        kaloka=game.add.group();
        kaloka.enableBody=true
        kaloka.scale.x = 1.275;
        kaloka.scale.y = 1.285;

        kaloka = game.add.emitter(-100, -100, 100);
        kaloka.makeParticles('kaloka');
        kaloka.gravity = 500;
        kaloka.setAlpha(1, 0, 0);


        kalaban=game.add.group();
        kalaban.enableBody=true
        kalaban.scale.x = .75;
        kalaban.scale.y = .75;

    

        platforms=game.add.image(w/3.82, h/2.3, "bubble");
        platforms.name = 'bubble';
        platforms.scale.x= 1.155;
        platforms.scale.y= .91;



        game.physics.arcade.enable(platforms);
        platforms.enableBody=true;
        platforms.anchor.set(.02);


        inahin=game.add.image(w/200.72, h/100.3, "inahin");
        inahin.scale.x= .55;
        inahin.scale.y= .435;
        game.physics.arcade.enable(inahin);
        inahin.enableBody=true;
        inahin.anchor.set(.02);




           
        scoreText= game.add.text(w- 201, h - 60,'Score: ',
            {
                fontSize:'72930px', fill:'black', stroke:'yellow', strokeThickness: '4'
            });
         bestText= game.add.text(w- 201, h-5,'Best: '+process.getData(),
            {
                fontSize:'72930px', fill:'black', stroke:'yellow', strokeThickness: '4'
            });


        timeText = game.add.text(w - 450,h - 860,"Time: Go!!!!",{
            fontSize:'72930px',fill:"black",stroke:'yellow', strokeThickness: '3'});


        livesText= game.add.text(w- 201, h-35,"Eggs : ",{fontSize:'30px',fill:"black",stroke:'yellow', strokeThickness: '3'});


        pause = game.add.button(w - 150, h-890, 'pause',process.pause,this,1,0);
        pause.scale.x = .455;
        pause.scale.y = .4585;


        btn = game.add.button(w/90, h-30,"restart",process.restart); 
        btn.scale.x = .585;
        btn.scale.y = .585; 


        game.physics.startSystem(Phaser.Physics.ARCADE)
        tugtog = game.add.audio("tugtog" , 1, true);
        tugtog.loop = true;
        tugtog.play();

        chicken = game.add.audio('chicken');
        talo = game.add.audio('talo');
        ahas = game.add.audio('ahas');

        baboy = game.add.sprite(w/3.82, h/3.7, 'baboy');
        baboy.animations.add('baboy', [0,1,2,4], 5, true);
        baboy.animations.play('baboy');



    },

    update: function() {
    
 	player.rotation = game.physics.arcade.moveToPointer(player, 60, game.input.activePointer, 300);       
    game.physics.arcade.collide(player,inahin);
    game.physics.arcade.collide(player,platforms);
    game.physics.arcade.collide(player,kakampi);
    game.physics.arcade.collide(player,kaloka);
    game.physics.arcade.collide(kakampi, kalaban);
    game.physics.arcade.collide(kakampi, kaloka);

    game.physics.arcade.collide(player,kakampi,process.killKakampi);
    game.physics.arcade.collide(player,kalaban,process.killKalaban);
    game.physics.arcade.collide(player,kaloka,process.killKaloka);
    // game.physics.arcade.collide(platforms,kaloka,process.killPlatforms,null, this);
    // game.physics.arcade.overlap(platforms,kaloka,process.killPlatforms, null, this);
    
    game.physics.arcade.overlap(kalaban, platforms);
    game.physics.arcade.overlap(platforms , kaloka);
	


     },



};
