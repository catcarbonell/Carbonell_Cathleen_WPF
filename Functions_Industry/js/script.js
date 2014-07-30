// Cathleen Carbonell 7/31/2014 Functions -- Industry

// Gallery Space -- We're going to see if we could eliminate one's gallery slider and just spread out all the images in one screen without a scrollbar appearing!

// We will need the width and height of each image, plus the option to resize the image by a certain percent (or rather, decimal)  as well as how many images are in the slider already, as well as the resolution of the screen.

function images(imgW, imgH, shrink){
    var imgSize = imgW * imgH / shrink;
    return imgSize;
}

// USER INTERACTION

var imgW = prompt("Enter the width in pixels"); // asking for the image width
var imgH = prompt("Enter the height in pixels"); // asking for image height
var shrink = prompt ("In terms of percentages, how much would you like to shrink your image? \n (Enter a number 1-100)") / 100;

// We also need the screen resolution