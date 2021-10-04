// create a add25Cents function that will receive a number as parameter and return the sum of the coins of 25 cents.
// i.e: add25Cents(7)
// 1.75
// which is: 0.25+0.25+0.25+0.25+0.25+0.25+0.25

const add25Cents = (num) => {
    add = 0; cent = 0.25;
    for (i = 0; i<num; i++){
        add += cent;
    }
    return add;
}

console.log(add25Cents(7))