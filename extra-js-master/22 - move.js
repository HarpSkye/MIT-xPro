// create a function move that receives 2 arrays as arguments and removes the last element of the first and adds it to the second.
// i.e: arr1 = [1, 2, 3] arr2 = [4, 5]
// move(arr1, arr2).
// arr1 = [1, 2]
// arr2 = [4, 5, 3]

move = (a,b) => {
    x = a.pop();
    b.push(x);
    return {a,b}
}

var arr1 = [1, 2,3];
var arr2 = [4, 5];
console.log(move(arr1, arr2));
