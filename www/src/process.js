    var process = function() {
    	   "use strict";
            return {


           createKakampi:function(time){
            setInterval(function(){
                kakampis= kakampi.create(Math.random()*w,Math.random()*h,"kakampi");
                kakampis.body.gravity.y=0;
                kakampis.body.velocity.y=-40;
                kakampis.body.velocity.x=40;
                var scale = Math.random(); 
            },time);
        },

         createKalaban:function(time){
            setInterval(function(){
                kalabans= kalaban.create(Math.random()*w,Math.random()*h,"kalaban");
                kalabans.body.gravity.y=0;
                kalabans.body.velocity.y=-100;
                kalabans.body.velocity.x=100;
                var scale = Math.random();
            },time);
        },


           createKaloka:function(time){
            setInterval(function(){
                kaloka = kakampi.create(Math.random()*w,Math.random()*h,"kaloka");
                kaloka.body.gravity.y=0;
                kaloka.body.velocity.x= -20;
                kaloka.body.velocity.y=30;
                var scale = Math.random(); 
            },time);
        },

         killKaloka:function(player,kaloka){
            score=score+10;
            talo.play();
            kaloka.kill();
            ahas.play();
            if(process.getData()<=score){
                process.saveData(score);
                bestText.text="Best:"+score;
                console.log("x");
            }
            scoreText.text="Score:"+score;        
        },

         killKakampi:function(player,kakampi){
            score=score+10;
            kakampi.kill();
            talo.play();
            if(process.getData()<=score){
                process.saveData(score);
                bestText.text="Best:"+score;
                console.log("x");
            }
            scoreText.text="Score:"+score;        
        },


         killPlatforms:function(platforms,kaloka){
            score=score - 10;
            kaloka.kill();
            talo.play();
            if(process.getData()<=score){
                process.saveData(score);
                bestText.text="Best:"+score;
                console.log("x");
            }
            scoreText.text="Score:"+score;        
        },


         killKalaban:function(player,kalaban){
               lives= lives + 1;

                kalaban.kill();
               chicken.play();
                livesText.text="Eggs:" +lives;
               if (lives==0){
            game._paused = true;

             setTimeout(function(){
                btn.frame = 0;
                game._paused = true;
            }, 100000000)
            game._paused = true;
        }       
        },

         killscore:function(platforms,kaloka){
               lives= lives - 5;

                kalaban.kill();
               chicken.play();
                livesText.text="Eggs:" +lives;
               if (lives==0){
            game._paused = true;

             setTimeout(function(){
                btn.frame = 0;
                game._paused = true;
            }, 100000000)
            game._paused = true;
        }       
        },




         timer: function(initTime,microsec){
            setInterval(function(){
                initTime--;
                if(initTime>=0){        
                    timeText.text = "Time: "+initTime;
                }
                else{
                    game._paused = true;

                var stopText = game.add.image(w/115, h/40, 'gameover');
                  location.reload();
        

                    }
                },microsec);
        },


         saveData:function(score){
            localStorage.setItem("gameData",score);
        },


         getData:function(){
            var data= localStorage.getItem("gameData");
            if(data==null|| data==""){
                data=0
            }
            return data;
        },


         pause:function(){

            var stopText = this.add.image(w/222, h/6, 'picpause');

            this.game.paused = true;
            this.input.onDown.add (function(){ 
                stopText.destroy();
                this.game.paused = false;
                }, this);        
        },

        restart:function(){
            location.reload();
        
        },




    }

    }();














