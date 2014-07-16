// Cathleen Carbonell | 7/17/204 | Expressions Wacky

// We are to find how much room 3 plush pigs take up in sq ft.

// Let's get the sizes of the plush pigs in inches (because plush toys are usually not measured in sq ft)
// Variable automatically converts the measurement into sq ft

var pig1 = prompt("What's the size of pig 1 in inches?");
var pig2 = prompt("What is the size of pig 2?");
var pig3 = prompt("Finally, pig 3?");

//We need to find the sq ft measurement of the pigs, so since there are 12 inches to 1 sq ft, we divide the number by 12
var piggies = [pig1, pig2, pig3];

var sqftpig1 = piggies[0] /12;
var sqftpig2 = piggies[1] /12;
var sqftpig3 = piggies[2] /12;


// We need the sum of all 3 plush pigs in sq ft
var sumpiggies = sqftpig1 + sqftpig2 + sqftpig3;
