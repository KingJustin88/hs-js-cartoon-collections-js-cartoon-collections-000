function dwarfRollCall(dwarves) {
  var dwarfgroup = []
  for(let i = 0; i < dwarves.length; i += 1){
    dwarfgroup.push(`${i + 1}. ${dwarves[i]} `)
  }
  return dwarfgroup.join("")
}

function summonCaptainPlanet(planeteerCalls){
    var planets = []
    for(let i = 0; i < planeteerCalls.length; i += 1){
    planets.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return planets
}

function longPlaneteerCalls(words) {
  if(words.length > 4){
    return true
  } else {
    return false
  }
}

function findTheCheese(foods) {
    for(let i = 0; i < foods.length; i += 1){
      if (foods[i]=="cheddar"|| 
          foods[i]=="gouda"||
          foods[i]=="camembert"){
          return "cheddar"
      }
    }
return "no cheese!"
}
  