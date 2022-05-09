const sumAll = function(a, b) {
    let i = 0;
    let max = 0;
    if (a > b) {
        max = a;
        i = b;
    } else {
        max = b;
        i = a;
    }
    console.log(b)
    let total = i;
    for (i; i < max; i++) {
        total += i+1;
        console.log(total);
    }
    return total;
}

console.log(sumAll(123,1));

// Do not edit below this line
module.exports = sumAll;
