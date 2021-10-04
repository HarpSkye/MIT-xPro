// create the function podium that will receive a parameter with the podium position and return a different string according to the position:
// first place: 'gold'
// second place: 'silver'
// third place: 'bronze'
// other places: 'keep trying!

const podium = (pos) => {
   if (pos === 1){
       return 'gold'
   } else if (pos === 2){
       return 'silver'
   } else if (pos === 3){
       return 'bronze'
   } else {return 'keep trying!'}
}

console.log(podium(3))