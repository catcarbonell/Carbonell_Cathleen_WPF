// Cathleen Carbonell 7/29/2014 Functions - Wacky

/*  ENEMY ENCOUNTERED! -- This is a little numbers-based game. The User has 50 health points (HP)
 and the enemy has 100 HP. The object of the game is to get the enemy hp down to zero before
 you run out of HP.

    The attack points (AP) is based on what ever the user enters into the prompt,
 with a hit point limit maximum of 10, and a minimum of 1. It is then multiplied by the
 random number generator (Math.random()).

    At the same time, the enemy will be attacking, too, hitting for what the user attacks for,
 multiplied by 2.

    Let's start with what we know... */

var userHP = 50; // This is what everything will be centered around: the user's and the enemy's health.
var enemyHP = 100;

// The function for the user's attack

function userAttack() {
    // Calling a prompt for each consecutive attack after
    userInteraction = prompt("How much damage will you deal this round? \n (Minimum: 1, maximum: 10)");
    return enemyHP - (userInteraction * Math.random());
}

//Need a modification statement in case we reach our goal!
if(enemyHP <= 0){
    console.log("Congratulations!! You have defeated the enemy!")
} else{
    userAttack();
}

userAttack();

//function enemyStats(){

//console.log(enemyHP - userAttack());


