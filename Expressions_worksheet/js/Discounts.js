// Cathleen Carbonell | 7/15/2014 | Discounts

// Givens needed: Original price, discount percentage, description of item, sales tax

// Original price and item
var scarf = 20;

// Discount = 25% = 0.25
var discperc= 0.25;

// Tax = 7.5% = 0.075
var tax = 0.075;

// Discount equation part 1: finding how much is exactly taken off the original price = Original price * discount
var discount = scarf * discperc;

// Discount equation part 2: subtracting discount total from scarf
var scarfnotax = scarf - discount;

// Finding the total tax amount of the scarf
var taxamount = scarfnotax * tax;

// Equation for the scarf plus tax
var total = scarfnotax + taxamount;
console.log(total);