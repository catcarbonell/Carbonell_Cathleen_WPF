// Cathleen Carbonell 7/24/2014 Conditionals -- Personal

// Goal Setting! If you want something, you must fight to save for it. But it's best if you know the time line in which you'll achieve your goal!

//First, we'll gather information
// Total cost of goal:
var goalcost = prompt("You want to save up for something special! \n How much is it?");

// Code Validation
if(goalcost === ""){
    goalcost = prompt("Type in a real number! No one likes a quitter. \n How much is it?");
}

//Testing if the user input is not a number
if(isNaN(goalcost)){
    goalcost = prompt("Type in a real number! No one likes a quitter. \n How much is it?");
}

//Savings
var savings = prompt("How much do you plan on saving per day?");

// Code Validation
if(savings === ""){
    savings = prompt("Type in a real number! No one likes a quitter. \n How much is it?");
}

//Testing if the user input is not a number
if(isNaN(savings)){
    savings = prompt("Type in a real number! No one likes a quitter. \n How much is it?");
}

//Equation to find the amount of days it may take to achieve goal:
var days = goalcost/savings;

//Basic answer if they already achieved goal
if(days === 0){
    console.log("Congratulations! You have already achieved your goal! Why did you need this calculator in the first place?");
}

//Fun answers!

if(savings >= 100 && days <= 10){
    console.log("If you save $" + savings + " per day, it will take " + days + " days to achieve your goal! Why did you even need to calculate it? You know you would have enough in no time. :P");
}else if(savings <= 10 && days >= 100){
    console.log("If you save $" + savings + " per day, it will take " + days + " days to achieve your goal! Good luck! ...With your patience. :P");
}else{
    console.log("If you save $" + savings + " per day, it will take " + days + " days to achieve your goal! Good luck!");
}
