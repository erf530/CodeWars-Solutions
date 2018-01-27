function towerBuilder(nFloors) {
var towerArray = []
var stars = ""
var trim = ""

  if(nFloors === 0){
    return
  }

  if(nFloors > towerArray.length){
    
      for(i = 1; i <= nFloors; i++){
      if(i%2 !== 0){
      stars += "*"
      towerArray.push(stars)
        
        for(j = 0; 0 <= j; j--) {
          trim += "."
          console.log(trim)
          
        }
      }
    }
    
  }
  
  
  return towerArray
}


towerBuilder(9)

// towerBuilder(2)

// towerBuilder(3)