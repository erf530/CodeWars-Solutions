// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

solution('abcdefg') // should return ['ab', 'c_']
// solution('ab cd ef gh hg hg hg hgh') // should return ['ab', 'cd', 'ef']

function solution(str){
   
   str = str.split("")
   var newArray = [] 
   
  for(i = 0; i < str.length; i++){
   
  if(str[i+1] === undefined){
    newArray.push(str[i]+"_")
    
  } else {
  newArray.push(str[i]+str[i+1])
  str = str.slice(1)
  }
    
  }
    
  return newArray
   
}