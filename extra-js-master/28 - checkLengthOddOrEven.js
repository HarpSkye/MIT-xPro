// create a function oddOrEven that will receive an array and check if the length of the array is an odd or even number, 
//and return the result.
const lettersArray = ["a", "b", "c", "d", "e", "f", "g"];

const oddOrEven = () => {
    if (lettersArray.length % 2 === 0){
        return "It is even"
    } else {return "It is odd"}
}


console.log(oddOrEven(lettersArray));
