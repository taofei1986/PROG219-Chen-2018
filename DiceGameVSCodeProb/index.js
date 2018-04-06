/**
 * Created by bcuser on 4/4/18.
 */
let roundText=document.querySelector('#turnCount');//select by id "turnCount"
let imageOne=document.querySelector('#image1');//select by id "image1"
let imageTwo=document.querySelector('#image2');//select by id "image2"
let roundNumber=0;// define start round 0
let balanceNumber=5;// define start balance $5


let buttonClicked=()=>{
    let randomNumberOne=Math.floor(Math.random()*6+1);//get first random number
    let randomNumberTwo=Math.floor(Math.random()*6+1);//get second random number
    imageOne.src=returnImageLink(randomNumberOne);//change image1 image by randomNumberOne
    imageTwo.src=returnImageLink(randomNumberTwo);//change image2 image by randomNumberTwo
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