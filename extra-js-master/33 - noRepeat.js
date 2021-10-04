// create an array colorsArray that is the result of the combination of colorsArray1 and colorsArray2, 
// but don't include repeated values.

const colorsArray1 = ['yellow', 'red', 'blue', 'orange']; const colorsArray2 = ['blue', 'green', 'white', 'yellow'];

colorsArray = [];

colCon = colorsArray1.concat(colorsArray2);
//console.log(colCon)

const unique = colCon.filter((a,b,c) => {
    return c.indexOf(a) === b;});

console.log(unique)


