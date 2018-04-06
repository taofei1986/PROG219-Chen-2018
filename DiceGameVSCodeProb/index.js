/**
 * Created by bcuser on 4/4/18.
 */
let roundText=document.querySelector('#turnCount');//select by id "turnCount"
let balanceText=document.querySelector('#balance');//select by id "balance"
let statusText=document.querySelector('#status');//select by id "status"
statusText.innerHTML="Welcome!";// display welcome message to player
let imageOne=document.querySelector('#image1');//select by id "image1"
let imageTwo=document.querySelector('#image2');//select by id "image2"
let roundNumber=0;// define start round 0
let balanceNumber=5;// define start balance $5


let buttonClicked=()=>{
    let randomNumberOne=Math.floor(Math.random()*6+1);//get first random number
    let randomNumberTwo=Math.floor(Math.random()*6+1);//get second random number
    let winOrlost=checkGameWin(randomNumberOne,randomNumberTwo);// get win or lost for this round, win will be 1, lost will be -1;
    
    imageOne.src=returnImageLink(randomNumberOne);//change image1 image by randomNumberOne
    imageTwo.src=returnImageLink(randomNumberTwo);//change image2 image by randomNumberTwo
    balanceNumber=balanceNumber+winOrlost;//update win or lost money;
    balanceText.innerHTML=balanceNumber;// update balance display in web page
    roundNumber++;//add one for each round, count for how many round it is now.
    roundText.innerHTML=roundNumber;// update round number display in web page
    if(balanceNumber===0){//if lost all your money, game over
        document.querySelector('#ButtonBet').style.display="none";//hide button
        statusText.innerHTML+="<br/>You lost all your money. Game over!"//display information for end game
    }
}

let returnImageLink=(inputNumber)=>{//function for get image link by number
    switch(inputNumber){
        case 1: //input number is 1
            return "images/dice-1.jpg";
            break;
        case 2://input number is 2
            return "images/dice-2.jpg";
            break;
        case 3://input number is 3
            return "images/dice-3.jpg";
            break;
        case 4://input number is 4
            return "images/dice-4.jpg";
            break;
        case 5://input number is 5
            return "images/dice-5.jpg";
            break;
        case 6://input number is 6
            return "images/dice-6.jpg";
            break;
        default:
        console.log("Bad input for returnImageLink");//log notice for bad input
        return "bad input";
    }
}

let checkGameWin=(inputNumberOne,inputNumberTwo)=>{//function for check win or lost, win will get 1, lost will get -1;also update this round win or lost information
    if(inputNumberOne===inputNumberTwo){//when 2 random numbers have the same value, return 1
        statusText.innerHTML="A pair of"+inputNumberOne+", you win this round.";//update win this round information 
        return 1;
    }
    else if(inputNumberOne+inputNumberTwo===7){//when sum of the 2 random numbers equals 7, return 1
        statusText.innerHTML="Lucky 7, you win this round.";//update win this round information 
        return 1;
    }
    else if(inputNumberOne+inputNumberTwo===11){//when sum of the 2 random numbers equals 11, return 1
        statusText.innerHTML="Lucky 11, you win this round.";//update win this round information 
        return 1;
    }
    else{//other situation return -1
        statusText.innerHTML="You lost this round.";//update lost this round information 
        return -1;
    }
}