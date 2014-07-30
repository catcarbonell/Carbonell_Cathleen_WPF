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

//var userHP = 50; // This is what everything will be centered around: the user's and the enemy's health.
var enemyHP = 100;

var gameStart = prompt("!!! ENEMY ENCOUNTER !!! \n You can only attack for up to 10 points! \n How much will you attack for? \n (min: 1 max: 10)");
var initialStrike = enemyHP - gameStart;

if(initialStrike <= 0){
    console.log("Congratulations! You have slain your enemy!");
}else {
    enemyHP = initialStrike;
}

console.log(enemyHP);

/*if(enemyHP - userAtk() > 0){
    userAtk();
} else{
    console.log("Congratulations! You have slain your enemy!");
}

function userAtk(){
    var repeatAtk = prompt("Oh no! The enemy is still alive! \n How much will you attack for? \n (min: 1 max: 10)");
    userAP = repeatAtk * Math.random();
} */
