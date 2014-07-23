// Cathleen Carbonell 7/24/2014 Conditionals -- Wacky

// Are you ready for a Royal Rumble??
// Running an infamous Royal Rumble is dependent on the size of the ring and the amount of wrestlers we have

var wrestlers = prompt("How many wrestlers do we have?");
var width = prompt("Enter the width of the ring in ft.");
var height = prompt("Enter the height of the ring in ft.");
var area = width * height;

// We will need many, MANY wrestlers! The ring must be filled to the point of over-capacity. Achieving more than 100% is fine.
var royalrumble = wrestlers/area;