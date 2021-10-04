// create a function luckyNumber that will receive a number as a parameter and return if it is a lucky number or not. A lucky number must match these conditions:
// it is positive
// it is a multiple of 2 or 3
// it is not 15

const luckyNumber = (a) => {
 if (a > 0 && (a%2 === 0 || a % 3 === 0) && a !== 15){
     return "it is a lucky number!"
 } else {return "it is not a lucky number!"}
};

console.log(luckyNumber(6));

