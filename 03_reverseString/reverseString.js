const reverseString = function(string) {
    //take the string and parse it into an array
    const splitString = Array.from(string);
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
