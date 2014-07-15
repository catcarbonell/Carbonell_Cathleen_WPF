// Cathleen Carbonell | 7/17/2014 | Expressions Worksheet -- Slice of Pie Part 1

// 20 people, 8 slices per pizza, 4 pizzas ordered

// Slices variable
var slices = 12;

// People variable
var people = 10;

// Pizzas variable
var wholepizza = 4;

// Total slices of pizza
var totalslices = slices * wholepizza;

// Slices per person equation
var yumpizza = totalslices / people;

// Result to print
console.log("Each person ate " + yumpizza + " slices of pizza at the party.");

//Slice of Pie part 2

//Sparky receives remainder of the pizza; variable for Sparky's slices
var sparky = totalslices % people;

// Result to print
console.log("Sparky got " + sparky + " slices of pizza.");