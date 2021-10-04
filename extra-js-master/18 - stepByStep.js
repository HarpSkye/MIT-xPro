// create a function stepByStep that will receive a number as argument and print the numbers starting from 0.
// i.e: stepByStep(5)
// "012345"

const stepByStep = (number) => {
    let steps = "";
    for (let count = 0 ; count <= number; count++){
        steps = steps + count;
    }
    return steps
}


console.log(stepByStep(5))