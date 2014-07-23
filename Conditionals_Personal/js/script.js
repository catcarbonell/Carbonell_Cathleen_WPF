// Cathleen Carbonell 7/24/2014 Conditionals -- Personal

// Goal Setting! If you want something, you must fight to save for it. But it's best if you know the time line in which you'll achieve your goal!

//First, we'll gather information
// Total cost of goal:
var goalcost = prompt("You want to save up for something special! \n How much is it?");

// Code Validation
if( goalcost === ""){
    goalcost = prompt("Type in a real number! No one likes a quitter. \n How much is it?");
}
//Testing if the user input is not a number
if(isNaN(goalcost)){
    goalcost = prompt("Type in a real number! No one likes a quitter. \n How much is it?");

//Savings
var savings = prompt("How much do you plan on saving per day?");

// Code Validation
    if( savings === ""){
        savings = prompt("Type in a real number! No one likes a quitter. \n How much do you plan on saving per day?");
    }
//Testing if the user input is not a number
    if(isNaN(savings)){
        savings = prompt("Type in a real number! No one likes a quitter. \n How much do you plan on saving per day?");

// We must divide the cost by the how much we plan on saving per day, which will give us our answer!
var days = goalcost/savings;

// Now for the many possibilities in this answer.