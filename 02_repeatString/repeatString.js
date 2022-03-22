const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    //var to hold the string
    let result = "";
    //loop that repeats string n times + adds string to result on each loop
    for (i = 1; i <= num; i++) {
            result += string; 
    } 
    return result;
}


// Do not edit below this line
module.exports = repeatString;
