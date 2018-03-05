function giveMeEms(pixels){
  var baseValue = 16;
  //The baseValue is still kept in the return even though it's out of scope
  function doTheMath(){
    return pixels/baseValue;
  }

  return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xLargeSize = giveMeEms(32);

console.log("Small size: ", smallSize());
console.log("Medium size: ", mediumSize());
console.log("Large size: ", largeSize());
console.log("X Large size: ", xLargeSize());
