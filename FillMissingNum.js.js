// findMissingLetter(['O','Q','R','S'], 'P')


// BELOW FILLS IN THE MISSING LETTER
// function findMissingLetter(array, missingLetter)
// {
// newArray = []
// finalArray = []
// strArray = []
// missingLetterNum = missingLetter.charCodeAt(missingLetter)

// array.map(x => newArray.push(x.charCodeAt(x)))


// for(i = 0; i < newArray.length; i ++){
//   if(newArray[i] <= missingLetterNum && newArray[i+1] >= missingLetterNum){
//     finalArray.push(newArray[i],missingLetterNum)
//   } else {
//     finalArray.push(newArray[i])
//   }
// }

// finalArray.map(function(y){ 
  
//   y = y.toString();
//   String.fromCharCode(y)
//   strArray.push(String.fromCharCode(y))
  
//   })
  
// return strArray
  
// }


// /// this adds missing letter to the array
// findMissingLetter(['O','Q','R','S'])

function findMissingLetter(array){
  
  charCodeArray  =[]
  finalArray = []
  translatedArray = []
  array.map(x => charCodeArray.push(x.charCodeAt(x)))
  
  for(var i = 0; i < charCodeArray.length; i++){
    if(charCodeArray[i+1]-charCodeArray[i] === 1){
      finalArray.push(charCodeArray[i])
    } else if(charCodeArray[i+1]-charCodeArray[i] === 2) {
      finalArray.push(charCodeArray[i],(charCodeArray[i]+1))
    } else {
      finalArray.push(charCodeArray[i])
    }
  }
  
  finalArray.map(function(x){
    x = x.toString()
    translatedArray.push(String.fromCharCode(x))
  })  
  
  return translatedArray
  
}


findMissingLetter(['O','Q','R','S'])

function findMissingLetter(array){
  
  charCodeArray  =[]

  
  array.map(x => charCodeArray.push(x.charCodeAt(x)))
  
  for(var i = 0; i < charCodeArray.length; i++){
   if(charCodeArray[i+1]-charCodeArray[i] === 2) {
      var num = (charCodeArray[i]+1).toString();
      var output = String.fromCharCode(num)
    }
  }
  
  return output
  
}