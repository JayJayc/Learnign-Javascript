var a = 5;
var b = "5";
var theNumbersMatch;

if (a==b){
  theNumbersMatch = true;
}
else {
  theNumbersMatch = false;
}

console.log("The numbers match :" +theNumbersMatch);
if (a===b){
  console.log("The type match");
}
else {
  console.log("The type doesn't match")
}
