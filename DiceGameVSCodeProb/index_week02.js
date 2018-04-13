$("#status").text("Welcome!");//add welcome message
$( document ).ready(function() {
    let rollingTime=1000;//rolling animation time
    let $image1=$("#image1");
    let $image2=$("#image2");
    let $buttonBet=$("#ButtonBet");
    $buttonBet.click(function() {//click event on the "ButtonBet" button
        let dice1=new Dice();
        dice1.rolling(rollingTime,$image1);
        let dice2=new Dice();
        dice2.rolling(rollingTime,$image2);
        console.log("first dice is ",dice1.point);
        console.log("second dice is ",dice2.point);
        $buttonBet.prop('disabled', true);//disable the "ButtonBet" button
        setTimeout(()=>{//game running result, update display information
            game.playThisRound();

            // add validate game end code here.--------------------------------------------------------------->need work

           $buttonBet.prop('disabled', false);//cancel disable the "ButtonBet" button
        },rollingTime);
    });
    
});

let Dice=function(){//dice constructor
    this.rolling=function(inputRollingTime,$inputImageRef){//inputRollingTime is rolling time, $inputImageRef is jQuery DOM object for show the dice image
        this.point=Math.floor(Math.random() * 6) + 1;
        this.url="./images/dice-" + (this.point).toString() + ".jpg";
        let diceRolling =setInterval((
            ()=>{
                let rollingImage="./images/dice-" + (Math.floor(Math.random() * 6) + 1).toString() + ".jpg";
                $inputImageRef.attr("src",rollingImage);
            }
        ), 50);
        setTimeout(()=>{
            clearInterval(diceRolling);
            $inputImageRef.attr("src",this.url);
        },inputRollingTime);
    }
}

let game={
    round:0,
    balance:5,
    playThisRound:function(dice1Point,dice2Point){//update status information, round information, balance information
        let $status=$("#status");
        let $balance=$("#balance");
        let $turnCount=$("#turnCount");
        this.round=this.round+1;
        $turnCount.text(this.round);

        // add check result information, update balance--------------------------------------------------------------->need work   change font color  .css("color", "green");
        
    }
}
