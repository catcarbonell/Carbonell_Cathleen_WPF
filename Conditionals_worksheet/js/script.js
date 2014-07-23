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
}else if(remainder < capacity/2) {
    console.log("You only have " + remainder + " gallons of gas in your tank, better get gas now while you can!");
}

// Check the Login
// Givens: Username and password entered by user (prompts), Correct username and password (remaining variables)
// Username: persondude Pass: omgwut

var username = prompt("Enter your username:");
var userpass = prompt("Enter your password:");
var correctname = "persondude";
var correctpass = "omgwut";

// The username and password absolutely MUST match!
if(username === correctname && userpass === correctpass ){
   console.log("Welcome, persondude!");

// Only one logical operator was needed
}else if(username != correctname){
    console.log("User not found. Try again.");
// If === was used, code will not function properly
}else if(username == correctname && userpass != correctpass ){
    console.log("Password does not match our records");
}

// Movie Ticket Price
// Givens: Ticket price regular $12, $10 for under 10 and over 55
var age= prompt("Verify age: how old are you?");

//The special circumstance is the discount given due to the age
if( age >= 55 || age <= 10){
    console.log("The ticket price is $10");
}