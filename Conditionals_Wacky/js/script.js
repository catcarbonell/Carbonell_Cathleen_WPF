// Cathleen Carbonell 7/24/2014 Conditionals -- Wacky

// Are you ready for a Royal Rumble??
// Running an infamous Royal Rumble is dependent on the size of the ring and the amount of wrestlers we have

var wrestlers = prompt("How many wrestlers do we have?");
var width = prompt("Enter the width of the ring in ft.");
var height = prompt("Enter the height of the ring in ft.");
var area = width * height;

// We will need many, MANY wrestlers! The ring must be filled to the point of over-capacity. Achieving more than 100% is best!
var royalrumble = wrestlers/area * 100;

// Finally. we have our If/Else If statements:
if(royalrumble >= 1){
    console.log("Congratulations! You have enough wrestlers to run a Royal Rumble! OOH YEAH!");
}