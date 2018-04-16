let diceGame={
    players:[],
    currentPlayerPointer:0,//start pointer with first player
    playThisRound:function(dice1Point,dice2Point,playerObject){//update status information, round information, balance information
        let $status=$("#status");
        let $balance=playerObject.$playerRef.find(".balance");
        let $turnCount=playerObject.$playerRef.find(".turnCount");
        playerObject.round=playerObject.round+1;
        $turnCount.text(playerObject.round);//update round status
        if(dice1Point+dice2Point===7){//when sum of the 2 random numbers equals 7, balance add 1
            $status.css("color", "red");
            $status.text("Lucky 7, you win this round.");//update win this round information
            playerObject.balance=playerObject.balance+1;
        }
        else if(dice1Point+dice2Point===11){//when sum of the 2 random numbers equals 11, balance add 1
            $status.css("color", "red");
            $status.text("Lucky 11, you win this round.");//update win this round information
            playerObject.balance=playerObject.balance+1;
        }
        else{//other situation balance minus 1
            $status.css("color", "green");
            $status.text("Total is "+(dice1Point+dice2Point)+". You lost this round.");//update lost this round information
            playerObject.balance=playerObject.balance-1;
        }
        $status.prepend(playerObject.name+". ");//add player name in status.
        $balance.text(playerObject.balance);//update balance status
    },
    createRandomName:function() {
        let firstArray = [
            "Big",
            "Little",
            "Clumsy",
            "Brainy",
            "Lefty",
            "Righty"
        ];
        let lastArray = [
            "Larry",
            "Susie",
            "Juan",
            "Gloria",
            "Min",
            "Jing",
            "Francis",
            "Lexi"
        ];
        let returnName = "";
        while (returnName == ""){
            returnName = firstArray[Math.floor(Math.random() * firstArray.length)] + " " +
                lastArray[Math.floor(Math.random() * lastArray.length)];
            // check for duplicate
            diceGame.players.length
            for (i=0; i < diceGame.players.length; i++) {
                if (returnName == diceGame.players[i].name) {
                    returnName = "";
                }
            }
        }
        return returnName;
    }    
}