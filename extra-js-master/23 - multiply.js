// create a function multiply, that will receive an array of numbers as argument and return the multiplication of all numbers.
// i.e: multiply([1, 4, 7]) should return 28, which is 1 * 4 * 7

function multiply1(array) {
    var sum = 1;
    for (var i = 0; i < array.length; i++) {
        sum = sum * array[i];
    }
    return sum;
}

console.log(multiply1([1, 4, 7]));