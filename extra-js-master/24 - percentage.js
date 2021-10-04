// create a function percentage that will receive an array of numbers and return another with 3 numbers: 
//index 0 will be the percentage of positive numbers, 
//index 1 will be the percentage of numbers that are zero and 
//index 2 the percentage of negative numbers.
// i.e: percentage([1, 2, 0, -1]) should return [0.5, 0.25, 0.25], 
//as there are 50% of positive numbers, 25% zeros, and 25% negative numbers.
var answer = [];

var func = function(array){

    const index0 = array.filter(num => num > 0).length;
    const index1 = array.filter(num => num===0).length;
    const index2 = array.filter(num => num < 0).length;

    var posPer = () => `${index0/array.length*100}%`;
    var zeroPer = () => `${index1/array.length*100}%`;
    var negPer = () => `${index2/array.length*100}%`;

    answer.push(posPer(), zeroPer(), negPer())

// console.log(posPer());
// console.log(zeroPer());
// console.log(negPer());
return answer};

var a = [5,4,3,2,1,0,-1,-2,-3,-4];
console.log(func(a))