// Cathleen Carbonell 7/24/2014 Conditionals Worksheet

// Last Chance for Gas!
// Given: Gas efficiency of car in mpg, Gauge reading of gas tank in %, Car's gas tank capacity in gallons

var efficiency = prompt("Enter your car's gas efficiency in MPG.");
var tankremain = prompt("Enter how much gas is left in your tank in %.");
var capacity = prompt("Enter the car's gas capacity in gallons.");

// We must find out if how much is left will be enough. "tankremain" will be divided by the efficiency.
var remainder = tankremain/efficiency;

// The capacity must be halved due to the fact you cannot go over-capacity when filling up a car. Also, in all honesty, no car that utilizes gas will make 200 miles straight without failing.
if(remainder > capacity/2){
    console.log("Yes, you can make it without stopping for gas!");
}else if(remainder < capacity/2){
    console.log("You only have " + remainder + " gallons of gas in your tank, better get gas now while you can!");
}


// Check the Login