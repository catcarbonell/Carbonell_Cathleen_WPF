// Cathleen Carbonell | 7/17/204 | Expressions Wacky

//What is the average size of your plush pigs in sq ft?

//First let's get the inch measurements of the plush pigs

var pig1 = prompt("What's the size of pig 1 in inches?");
var pig2 = prompt("What is the size of pig 2?");
var pig3 = prompt("Finally, pig 3?");

//We need to find the sq ft measurement of the pigs, so since there are 12 inches to 1 sq ft, we divide the number by 12
var piggies = [pig1, pig2, pig3];

var sqftpig1 = piggies[0] /12;
var sqftpig2 = piggies[1] /12;
var sqftpig3 = piggies[2] /12;


// We need the sum of all 3 plush pigs in sq ft
var sumpiggies = piggies + [0]

// The equation for the problem:
var totalpigs = sumpiggies / 3;

//Here is the printed result:
console.log("totalpigs);
