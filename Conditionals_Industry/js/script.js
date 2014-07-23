// Cathleen Carbonell | 7/23/2014 | Conditionals -- Industry

// Res Check -- We're trying to find out if an image, measured in pixels, will fit in a certain-sized container.

// Var needed: image w * h in pixels, container w * h in pixels
//IMAGE WIDTH
var imagew = prompt("Enter the image width in pixels.");

// IMAGE WIDTH Code Validation
if(imagew === ""){
    imagew = prompt("Excuse you. Type in a number. \n Enter the image width in pixels.");
}
// IMAGE WIDTH Testing if the user input is not a number
if(isNaN(imagew)){
    imagew = prompt("Wait, that's not a number! \n Enter the image width in pixels.");
}

//IMAGE HEIGHT
var imageh = prompt("Enter the image height in pixels.");

// IMAGE HEIGHT Code Validation
if( imageh === ""){
        imageh = prompt("Excuse you. Type in a number. \n Enter the image height in pixels.");
    }

// IMAGE HEIGHT Testing if the user input is not a number

    if(isNaN(imageh)){
        imageh = prompt("Wait, that's not a number! \n Enter the image height in pixels.");
    }

//CONTAINER WIDTH
var conw = prompt("Enter the container width in pixels.");

// CONTAINER WIDTH Code Validation
if(conw === ""){
            conw = prompt("Excuse you. Type in a number. \n Enter the container width in pixels.");
        }
// CONTAINER WIDTH Testing if the user input is not a number
 if(isNaN(conw)) {
     conw = prompt("Wait, that's not a number! \n Enter the container width in pixels.");}

//CONTAINER HEIGHT
var conh = prompt("Enter the container height in pixels.");

// CONTAINER HEIGHT Code Validation
            if( conh === ""){
                conh = prompt("Excuse you. Type in a number. \n Enter the container height in pixels.");
            }
// CONTAINER HEIGHT Testing if the user input is not a number
            if(isNaN(conh)) {
                conh = prompt("Wait, that's not a number! \n Enter the container height in pixels.");
            }
// Equation for the image

var imagearea = imagew * imageh;

// Equation for the container

var conarea = conw * conh;


results = (imagearea > conarea) ? "Your image is too big for the container! Shrink it." : "Perfect.";
console.log(results);




