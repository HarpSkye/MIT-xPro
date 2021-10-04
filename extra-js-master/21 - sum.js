// i.e: sum(4)
// 6
// which is 0 + 1 + 2 + 3

const sum = (num) => {
    let a = 0;
    for (i =0; i < num; i++){
        a += i;
    }
    return a;
}

console.log(sum(4));
