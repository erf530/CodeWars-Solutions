// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(498350)); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

// function expandedForm(num) {
//     var newNum = ""
  

//   if(num < 1){
//     return newNum
//   } else{
//     var next = num.toString().slice(1);
//     var replaceString = num - num.toString().slice(1)
//     newNum += replaceString 
//     newNum += "+" + expandedForm(next)
//   }
 
// return newNum
  
// }


function expandedForm(num){
  num = num.toString().split("")
  
  num.reverse()
  
  var power = num.map((x,i) => x * Math.pow(10,i))
  
  var filteredPower = power.filter(y => y > 0)
  
  filteredPower = filteredPower.reverse()
  
  filteredPower = filteredPower.join("+")
  
  return filteredPower
  
}