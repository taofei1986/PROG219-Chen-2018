$( document ).ready(function() {
    let lastPlayerPointer;//pointer for last player.
    let playerNumber;
    let rollingTime=1000;//rolling animation time
    let $image1=$("#image1");
    let $image2=$("#image2");
    let dice1=new Dice();
    let dice2=new Dice();
    let $welcomeBox=$("#welcomeBox");
    let $buttonBet=$("#ButtonBet");
    //add a div for ask how many players will play the game.
    $welcomeBox.append("<div  id=\"playerNumberBox\"><p>How many players? Between 2 to 8.</p><input type=\"number\" id=\"playersNumber\"/><button id=\"playersNumberButton\">Submit</button></div>");
    $welcomeBox.append("<div  id=\"playerNameBox\"></div>");
    $("#playerNameBox").append("<br/><br/><button id=\"startGame\">Start the game!</button>");
    $("#playerNameBox").hide();
    //jump to the div input players' names div.
    $("#playersNumberButton").click(()=>{
        playerNumber=$("#playersNumber").val();
        if(!(playerNumber>1&&playerNumber<=8)){
            alert("Please input a number between 2 to 8.")
            return;
        }
        $("#playerNumberBox").hide();
        $("#playerNameBox").show();
        for(let i=playerNumber;i>1;i--){//add input for each players' name. Player 1 always "Player" default
            $("#playerNameBox").prepend("<p>Input player"+i+"\'s name:</p><input class=\"iPlayerName\"></input>");
        }
        $("#playerNameBox").prepend("<p>Player1\'s name:</p><input class=\"iPlayerName\" value=\"Player\"></input>");
        $("#playerNameBox").prepend("<p>If you left any input name blank, you will get a random name.</p>");
    });
    //start game, create players in dice object, add players status html content in DOM.
    $("#startGame").click(()=>{
        if(playerNumber>1){
            // add players' html content
            for(let i=playerNumber;i>1;i--){
                $("#player1").after("<p id=\"player"+i+"\"><span class=\"playerName\"></span> balance is $<span class=\"balance\">0</span><br />Number of turns <span class=\"turnCount\">0</span></p>");
            }
            //create players in game object with link their dom ref by jquery
            $(".iPlayerName").each(function(index){
                let playerName=$(this).val();
                if(playerName===""){//if there is no input name, create a random name;
                    playerName=diceGame.createRandomName();
                }
                diceGame.players.push(new Player(playerName,$("#player"+(index+1))));
            });
        }
        //add welcome message for all player.
        $("#status").text("Welcome!");
        //update CSV player names in each player status, display starting balance from player object
        for(let i=0;i<diceGame.players.length;i++){
            diceGame.players[i].$playerRef.find(".playerName").text(diceGame.players[i].name);
            $("#status").append(( i > 0 ? ", " : " ")+diceGame.players[i].name);
            diceGame.players[i].$playerRef.find(".balance").text(diceGame.players[i].balance);//set balance status
        }
        $("#status").append(".")

        $(".playerName").css( "color", "purple" );
        lastPlayerPointer=diceGame.players.length - 1;// set last one in the players array as last player
        $welcomeBox.hide();//hide welcome page
    });
    //click event on the "ButtonBet" button,play the game one by one
    $buttonBet.click(function() {
        //roll existing two dice for this round
        dice1.rolling(rollingTime,$image1);
        dice2.rolling(rollingTime,$image2);
        $buttonBet.prop('disabled', true);//disable the "ButtonBet" button
        //change last player background color back to lightblue, change this round background color to white
        diceGame.players[lastPlayerPointer].$playerRef.css("background-color","#e0e0ff");
        diceGame.players[diceGame.currentPlayerPointer].$playerRef.css("background-color","white");
        // after delay for dice rolling, run game result, update display information
        setTimeout(()=>{
            //any player's balance is 0, will exit the game.
            diceGame.playThisRound(dice1.point,dice2.point,diceGame.players[diceGame.currentPlayerPointer]);//play one round
            if(diceGame.players[diceGame.currentPlayerPointer].balance===0){//if player's balance is zero remove from the players array,update players status
            diceGame.players[diceGame.currentPlayerPointer].$playerRef.css("background-color","#c0c0c0");
            diceGame.players[diceGame.currentPlayerPointer].$playerRef.css("color","white");
            diceGame.players[diceGame.currentPlayerPointer].$playerRef.append("<b style=\"color:yellow\">+++++++>Game Over For You!<+++++++</b>");
            diceGame.players.splice(diceGame.currentPlayerPointer,1);//remove currentplayer from the players
            //		currentPlayerPointer is adjusted below
            lastPlayerPointer=0;	// harmless change of background color of player[0] since current player removed
            }
            else{//move to the next player
                lastPlayerPointer=diceGame.currentPlayerPointer;
            	diceGame.currentPlayerPointer++;
            }
            // move from the last player to the first one when needed.
        	diceGame.currentPlayerPointer =
        		(diceGame.currentPlayerPointer) % diceGame.players.length;
            if(diceGame.players.length===1){//only one player left, end game.
                $buttonBet.hide();//hide the button
                $("#status").after("<div id=\"endMessage\"></div>");
                $("#endMessage").text(diceGame.players[0].name+", Congratulations! You win the game!");
                $("#endMessage").append("<br/><button id=\"ButtonRestart\" type=\"button\" onclick=\"location.reload(false);\">Restart Game</button>");
                $("div").animate({top: '200px'},2500);
            }
           $buttonBet.prop('disabled', false);//cancel disable the "ButtonBet" button
        },rollingTime);
    });    
});
