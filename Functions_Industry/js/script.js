// Cathleen Carbonell 7/31/2014 Functions -- Industry

// Gallery Space -- We're going to see if we could eliminate one's gallery slider and just spread out all the images in one screen without a scrollbar appearing!

// We will need the width and height of each image, plus the option to resize the image by a certain percent (or rather, decimal)  as well as how many images are in the slider already, as well as the resolution of the screen.

function images(imgW, imgH, shrink){
    var imgSize = imgW * imgH / shrink;
    return imgSize;
}
