// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:
//must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

// function cakes(recipe, ingredients){
  
//   var recipe1  = []
//   var leastAmount = []
  
//   for(var keys in recipe){
//   recipe1.push(keys)
//   }
  
  
// for(i = 0; i < recipe1.length; i++){
  
//   var divided = 0  
//   divided = ingredients[recipe1[i]] / recipe[recipe1[i]]
 
//   console.log(divided)
//   if(!divided){
//     leastAmount.push(0)
//   } else if(divided > 0) {
//     leastAmount.push(divided)
//   }
// }

//   finalNum = Math.floor(Math.min.apply(null,leastAmount))
  
//   console.log("Pete can make", finalNum, "cakes")
  
//   return finalNum
  
// }


function cakes(recipe,ingredients){
  
  numCakes = []
  
  for(var key in recipe){
    if(ingredients.hasOwnProperty(key)){
      numCakes.push(Math.floor(ingredients[key]/recipe[key]))
    } else {
      return console.log("Pete can't make cakes, he doesn't even have", key)
    }
  }
  
  console.log(numCakes)
  
  return Math.min.apply(null,numCakes)
  
}