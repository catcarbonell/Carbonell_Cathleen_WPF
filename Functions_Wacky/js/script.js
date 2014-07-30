// Cathleen Carbonell 7/29/2014 Functions - Wacky

/*  ENEMY ENCOUNTERED! -- This is a little numbers-based game. The User has 50 health points (HP)
 and the enemy has 100 HP. The object of the game is to get the enemy hp down to zero before
 you run out of HP.
F
    The attack points (AP) is based on what ever the user enters into the prompt,
 with a hit point limit maximum of 10, and a minimum of 1. It is then multiplied by the
 random number generator (Math.random()).

    At the same time, the enemy will be attacking, too, hitting for what the user attacks for,
 multiplied by 2.

    Let's start with what we know... */
var enemyHP = 100; // Everything will depend on enemyHP.

// Round 1... FIGHT!
var battleStart = prompt(" !!! ENEMY ENCOUNTERED !!! \n You can only hit him for up to 10 pts per round! \n How much power will you expend?");
var initialFight = enemyHP - battleStart;

console.log(initialFight);

if(initialFight <= 0){
    console.log("Congratulations! You have slain your enemy!");
}
else{
   userAtk();
}

function userAtk(initialFight){
    var battle = prompt("Oh no! The enemy is still alive! How much power will you expend?");
    var userAP = initialFight - battle;
    return userAP;
}