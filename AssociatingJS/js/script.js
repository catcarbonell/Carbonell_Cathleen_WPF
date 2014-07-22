// Conditional Logic -- With an Expression

var kidHeight = 48;
var minHeight = 48;
var wParentHeight = 45; // height of the kid with parent

//if the child is old enough, print to the console, "you can ride!"
//if the kid is 48 in in height

if(kidHeight > minHeight){
    //you can ride!
    console.log("You can ride the roller coaster!");
}else if(kidHeight > wParentHeight){
   //you can ride with a parent present
    console.log("You can ride, but only with a parent present.");
}else{
  //sorry you have growing to do
    console.log("Sorry, grow faster!");
}