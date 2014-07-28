// Cathleen Carbonell 7/31/2014 Functions Worksheet

// Stung! It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function.

// We will need a prompt for the user to input how many pounds the victim is

//var victim = prompt("Oh no! There are bees in the area!\n How many stings will it take to bring an animal down? \n Enter the victim's weight in pounds (lbs):");

// We can figure out the equation right away...

//var death = victim / 8.666666667;

// ...and this is what we will print:


// However, this must be made into a function, given different arguments.
function beeDeath(victim){
    var death = victim / 8.666666667;
    return death;
}

// Decided to create an anonymous function
var victim = beeDeath(prompt("Oh no! There are bees in the area!\n How many stings will it take to bring an animal down? \n Enter the victim's weight in pounds (lbs):"));

// Print!
console.log("It takes " + victim + " bee stings to kill this animal.");