// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

// Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

// ###Examples:

// === JavaScript ==

tickets([25,25,50,100,25,50,25,100,25,25,25,100,25,25,50,100,25,25,25,100]) // => yes
// tickets([25, 100])    // => NO. Vasya will not have enough money to give change to 100 dollars

function tickets(arr){

var accumulator = 0
var hundoAccumulator = 0
var fiftyAccumulator = 0
var answer = "YES"

  for(i = 0; i<arr.length; i++){
    if(arr[i] === 25){
     accumulator += 25
   } else if (arr[i] === 50){
     fiftyAccumulator = fiftyAccumulator + 50
     accumulator = accumulator - 25
   } else if(arr[i] === 100) {
     hundoAccumulator = hundoAccumulator + 100
     if(fiftyAccumulator >=50) {
      accumulator = accumulator - 25
      fiftyAccumulator = fiftyAccumulator - 50
     } else {
      accumulator = accumulator - 75
     }
   }
  }
  
  console.log(accumulator)
  console.log(hundoAccumulator)
  console.log(fiftyAccumulator)

  if(accumulator < 0 || hundoAccumulator <0 || fiftyAccumulator< 0){
    return answer = "NO"
  }
  
  return answer

}

