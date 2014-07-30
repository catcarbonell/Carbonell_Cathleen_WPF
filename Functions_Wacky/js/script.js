// Cathleen Carbonell 7/27/2014 Functions -- Wacky
// ENEMY ENCOUNTERED! -- This is the beginnings of a numbers-based game. The user must get the enemyHP down to zero.

// Initial given: the enemyHP
var enemyHP = 20;

// Round 1, FIGHT! --  must initially prompt the user for how much attack points they will use
var battleStart = prompt(" !!! ENEMY ENCOUNTERED !!! \n You can only hit him for up to 10 pts per round! \n How much power will you expend?");

// Since we have a few parameters for the fight, we must validate the prompt:

    while(isNaN(battleStart) || battleStart === "" || battleStart > 10 || battleStart < 2 ){
      battleStart = prompt("HEY! Who the hell do you think you are?? \n Type in a number between 1-10!");
    }

// We will need the initial battle result.
var battle = enemyHP - battleStart;

// Conditional statement considering how the battle goes

if(battle <= 0){
    console.log("Congratulations! You have slain your enemy!");
}
else{
    while(battle > 0){
        userAtk();
    }
    console.log("Congratulations! You have slain the enemy!");
    window.alert("You Win!");
}
// The obligatory function, utilizing the battle result and the user's new variable input
function userAtk(){
    var attackPoints = prompt("Oh no! The enemy is still alive! How much power will you expend?");
    userAP = battle - attackPoints;
    battle = userAP;

    // Validating the attackPoints prompt
    while(isNaN(attackPoints) || attackPoints > 10 || attackPoints < 2 || attackPoints === ""){
    attackPoints = prompt("HEY! Who the hell do you think you are?? \n Type in a number between 1-10!")

     }

 }