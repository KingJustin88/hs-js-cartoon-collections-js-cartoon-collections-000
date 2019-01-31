function dwarfRollCall(dwarves) {
  var dwarfgroup = []
  for(let i = 0; i < dwarves.length; i +=1){
    dwarfgroup.push(`${i + 1}. ${dwarves[i]} `)
  }
  return dwarfgroup.join("")
}

function summonCaptainPlanet(planeteerCalls){
  var elements = []
  for(let i = 0; i < planeteerCalls.length; i += 1){
    elements.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return elements
}

function longPlaneteerCalls(words) {
  if(words.length > 4)
    return true
  else
    return false
}

function findTheCheese(foods) {
  for(let i = 0; i < foods.length; i += 1){
  if(foods[i] == 'cheddar' || 
     foods[i] == 'gouda' ||    
     foods[i] == 'camembert' ||
     foods[i] == 'swiss cheese'){
    return foods[i]
    }
  }
  return `no cheese!`
}

// function wordsWithB(words){
//   var newArr =[]
//   for(let i = 0; i < words.length; i += 1){
//     if(words[i].startsWith("b")){
//       newArr.push(words[i])
//   }
//   }
//   return newArr
// }


// arr = ['James', 'Sally', 'Bob']  





