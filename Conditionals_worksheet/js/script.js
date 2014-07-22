// Cathleen Carbonell 7/24/2014 Conditionals Worksheet

// Last Chance for Gas!
// Given: Gas efficiency of car in mpg, Gauge reading of gas tank in %, Car's gas tank capacity in gallons

var efficiency = prompt("Enter your car's gas efficiency in MPG.")
var tankremain = prompt("Enter how much gas is left in your tank in %.");
var capacity = prompt("Enter the car's gas capacity in gallons.");

//
if(efficiency * tankremain >= capacity){
    console.log("Yes, you can make it without stopping for gas!");
}else{
    console.log("You only have" +  + "gallons of gas in your tank, better get gas now while you can!");
}