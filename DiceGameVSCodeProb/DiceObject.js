// Dice object constructor
// (objects cannot depend on global variables/values)

let Dice=function(){//dice constructor
    this.point;
    this.rolling=function(inputRollingTime,$inputImageRef){//inputRollingTime is rolling time, $inputImageRef is jQuery DOM object for show the dice image
        if(inputRollingTime<51){//for make sure dice rolling time more than setInterval time
            inputRollingTime=51;
        }
        let diceRolling =setInterval((
            ()=>{
                this.point=Math.floor(Math.random() * 6) + 1;	//get a rolling point for the dice, the last point will be the dice point.
                let rollingImage="./images/dice-" + (this.point).toString() + ".jpg";
                $inputImageRef.attr("src",rollingImage);
            }
        ), 50);
        setTimeout(()=>{
            clearInterval(diceRolling);
        },inputRollingTime);
    }
}