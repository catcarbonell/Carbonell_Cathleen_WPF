// Cathleen Carbonell | 7/17/2014 | Expressions Personal

// How many individual training knives should my Eskrima studio order if x amount of students order x amount of knives and how much will it cost total?

// Student variable prompt
var students = prompt("How many students want to purchase a knife?");

// How many knives ordered? (Let's just say we're grouping the orders by how much they ordered individually)
var knives = prompt("How many knives did they order, each?");

// Equation for knives per student
var order = students * knives;

// How much is the knife?
var cost = prompt("How much is each knife?");

// Equation for the total cost of the knives
var total = students * knives * cost;

// Printed result
console.log("If " + students + " students ordered the $" + cost + " knife, " + knives + " per student, the order will be $" + total + " in all.");

