function validatePIN (pin) {
 
check1 = false
check2 = false
 
  if(parseFloat(pin)%1 !== 0){
    return false
  }
    
 
  if(pin.length === 4 || pin.length === 6){
    console.log(pin.length, "length is true")
    check1 = true
    } else {
    console.log(pin.length, "length is false")
    check1 = false
    }
 
    for(i = 0; i<pin.length; i++){
      
      charasNum = pin[i]*1
      
      if(typeof charasNum === "number" && charasNum%1 === 0){
        console.log(typeof charasNum,charasNum,"type is true")
        check2 = true
      } else {
        console.log(typeof charasNum, charasNum,"type is NAN so false")
        check2 = false
        return check2
      }
    }
  
 
  if(check1 && check2){
    return true
  } else {
    return false
  }
}