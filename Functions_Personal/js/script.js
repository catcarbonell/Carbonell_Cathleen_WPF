// Cathleen Carbonell 7/31/2014 Functions-- Personal

// Let's find out your 1 Rep Max! This is to figure out the maximum weight you can lift!



//WEIGHT -- User interaction -- how much weight did the user lift?
//var weight = prompt("How much weight did you lift in lbs?");

function repMax(){
    return weight *(1 + reps / 30);
}

var weight = prompt("How much weight did you lift in lbs?");
var reps = prompt("How many reps did you do?");

//  WEIGHT Validation: while loop isNaN and empty string
while(isNaN(weight) || weight === "" || weight === 0){
    weight = prompt("Bro, do you even lift?? \n How much weight did you lift in lbs?");
}

//REPS -- User interaction -- how many reps did they do with that weight?
//var reps = prompt("How many reps did you do?");

//REPS Validation: while loop isNaN and empty string
while(isNaN(reps) || reps === "" || reps === 0){
    reps = prompt("Bro, do you even lift?? \n How many reps did you do?");
}

console.log("The most you can lift is " + repMax() + "lbs! Focus!");