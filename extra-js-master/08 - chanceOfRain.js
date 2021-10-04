// create a function chanceOfRain, that will return the probability of rain in percentage, based on a random number received from Math.random() method.

const chanceOfRain =() => {
   return Math.random().toFixed(4) * 100 + '%'
} 

console.log(chanceOfRain()) 

