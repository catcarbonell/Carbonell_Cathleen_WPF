// Cathleen Carbonell | 7/17/2014 | Expressions Industry

// Find the percentage of how much a fixed-size container in a layout will take up in a certain resolution screen or browser.

// First, we will need to find the width of the fixed-size container
var containerwidth = prompt("What is the pixel width of your container?");

// Next, we will need the height
var containerheight = prompt("What is its height?");

// Of course, we will need the area of both:
var container = containerwidth * containerheight;

// Next, we should find out the resolution of their viewing method (browser, screen-- doesn't matter. We just need the resolution of it)
var reswidth = prompt("What is your resolution width?");
var resheight = prompt("What is your resolution height?");

// We will need the area information of the resolution, too
var resarea = reswidth * resheight;

// Now, we have enough information to calculate the percentage of the container to resolution, multiplied by 100 since the end result will a floating-point number.
var percentage = container / resarea * 100;

//Printed result--we should have a floating-point percentage.
console.log("A " + containerwidth + "x" + containerheight + "container should only take up " + percentage + "% of a " + reswidth + "x" + resheight + " resolution.");
