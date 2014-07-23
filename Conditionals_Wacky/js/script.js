// Cathleen Carbonell 7/24/2014 Conditionals -- Wacky

// Are you ready for a Royal Rumble??
// Running an infamous Royal Rumble is dependent on the size of the ring and the amount of wrestlers we have

var wrestlers = prompt("How many wrestlers do we have?");
// Code Validation
if( wrestlers === ""){
    wrestlers = prompt("HEY. Type in a NUMBER! Don't make me dropkick you! \n How many wrestlers do we have?");
}
//Testing if the user input is not a number
if(isNaN(wrestlers)){
    wrestlers = prompt("HEY. Enter a valid NUMBER! Don't make me dropkick you! \n How many wrestlers do we have?");
}
var width = prompt("Enter the width of the ring in ft.");
// Code Validation
if( width === ""){
    width = prompt("HEY. Type in a NUMBER! Don't make me dropkick you! \n Enter the width of the ring in ft.");
}
//Testing if the user input is not a number
if(isNaN(width)){
    width = prompt("HEY. Enter a valid NUMBER! Don't make me dropkick you! \n Enter the width of the ring in ft.");
}
var height = prompt("Enter the height of the ring in ft.");
// Code Validation
if( height === ""){
    height = prompt("HEY. Type in a NUMBER! Don't make me dropkick you! \n Enter the height of the ring in ft.");
}
//Testing if the user input is not a number
if(isNaN(height)){
    height = prompt("HEY. Enter a valid NUMBER! Don't make me dropkick you! \n Enter the height of the ring in ft.");
}
var area = width * height;

// We will need many, MANY wrestlers! The ring must be filled to the point of over-capacity. Achieving more than 100% is best!
var royalrumble = wrestlers/area;

// We need a percentage equation for print.
var percentage = royalrumble * 100;


// Finally, we have our If/Else If statements:
if(royalrumble >= 1){
    console.log("Congratulations! You have enough wrestlers to run a Royal Rumble! OOH YEAH!");
}else if(royalrumble < 1){
    console.log("Sorry, brother. You're only at " + percentage + "%! To run a Royal Rumble in a " + area + " sq ft ring, You'll need to recruit more wrestlers!");
}

