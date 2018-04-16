// Player object constructor
// (objects cannot depend on global variables/values)

let Player=function(pName,$inputPlayerRef){
    this.name= pName;
    this.round=0;
    this.balance=5;
    this.$playerRef=$inputPlayerRef;
}