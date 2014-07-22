// Cathleen Carbonell 7/24/2014 Conditionals Worksheet

// Last Chance for Gas!
// Given: Gas efficiency of car in mpg, Gauge reading of gas tank in %, Car's gas tank capacity in gallons

var efficiency = prompt("Enter your car's gas efficiency in MPG.");
var tankremain = prompt("Enter how much gas is left in your tank in %.");
var capacity = prompt("Enter the car's gas capacity in gallons.");
var remainder = efficiency * tankremain;

//
if(remainder >= capacity){
    console.log("Yes, you can make it without stopping for gas!");
}else if(remainder < capacity){
    console.log("You only have" + remainder + "gallons of gas in your tank, better get gas now while you can!");
}else if(0){
    console.log("Please enter a number higher than 0.");
}