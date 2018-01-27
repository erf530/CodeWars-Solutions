function XO(str) {
  
  var lowercasestring = str.toLowerCase()
  var countX = 0
  var countO = 0
  
  for(i = 0; i < lowercasestring.length; i++){
    if(lowercasestring[i] === "x") {
    countX ++
    } else if(lowercasestring[i] === "o"){
    countO++ 
    }
  }
  
  if(countX === countO){
  return true;
  } else {
  return false;
  }
}
///////////////

function XO(str){
str = str.toLowerCase().split("")

var x = str.filter(x => x === "x").length
var o = str.filter(x => x === "o").length  
  
  return x === o
  
}