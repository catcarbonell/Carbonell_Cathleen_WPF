// Cathleen Carbonell | 7/17/2014 | Shopping Bill

//Only one given required

//Array of groceries spent in the last five weeks
var groceries = [36, 48, 25, 30, 28];

//Total spent on groceries
var totalgroc = groceries[0]+ groceries[1] + groceries[2] + groceries[3] + groceries[4];

//Average spent on groceries
var average = totalgroc / 5;

//Result to print
console.log("You have spent a total of $" + totalgroc + " on groceries over 5 weeks. That is an average of $" + average + " per week.");