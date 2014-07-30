// Cathleen Carbonell 7/31/2014 Functions -- Industry

// Gallery Space -- We're going to see if we could eliminate one's gallery slider and just spread out all the images in one screen without a scrollbar appearing!

// We will need the width and height of each image, plus the option to resize the image by a certain percent (or rather, decimal)  as well as how many images are in the slider already, as well as the resolution of the layout.

function images(imgW, imgH, shrink) {

    // image VALIDATION
    while (isNaN(shrink) || shrink > 100 || shrink <= 1 || shrink === "") {
        shrink = prompt("Please enter a valid number: 1-100");
    }

    while( isNaN(imgW) ||  imgW <= 1 || imgW === ""){
        imgW = prompt("Please enter a valid number for you image width!");
    }
    while( isNaN(imgH) || imgH <= 1 || imgH === "") {
        imgH = prompt("Please enter a valid number for your image height!");
    }

    var imgSize = imgW * imgH * shrink;


    return imgSize;
}


// USER INTERACTION

var numImg = prompt ("How many images are there in this gallery?");

// numImg VALIDATION
while( isNaN(numImg) || numImg === "" || numImg <= 1){
    numImg = prompt ("Please enter a valid number.");
}

// Utilizing the function:
var gallery = images(prompt("Enter the width in pixels"), prompt("Enter the height in pixels"),
    prompt ("How much would you like to adjust your image? \n " +
            "(Enter a number 1-100, with 100 as keeping it at its full resolution)") / 100);

// gallery VALIDATION
// while( isNaN(gallery) ||  gallery <= 1 || gallery === ""){
//   gallery = prompt("Please enter a valid number for your images!");}



// We will need to know the area of the entire gallery vs. the screen resolution.
var galleryArea = gallery * numImg;

//First print out:
console.log("There are " + numImg + " images that take up " + galleryArea + " pixels total.");

// We also need the layout area

function layout(layoutW,layoutH){
    var layoutSize = layoutW * layoutH;

    return layoutSize;
}

// The function in action:
var layoutArea = layout(prompt("Enter the resolution width in pixels:"), prompt("Enter the resolution width in height:"));

// layoutArea VALIDATION

while( isNaN(layoutArea) || layoutArea === "" || layoutArea <= 1){
    layoutArea = prompt ("Please enter a valid number for your layout.");
}

console.log("The area of your layout is " + layoutArea + " pixels." );

// The final verdict
imgFit = (layoutArea > galleryArea) ? "Perfect!" : "Consider resizing your images or reducing the amount of images!";

console.log(imgFit);