const removeFromArray = function(array, ...toRemove) {
    console.log(toRemove);
    for (let i = 0; i<array.length; i++) {
        const index = array.findIndex(element => element === toRemove[i]);
        console.log(index)
        array.splice(index, 1);
    }
    return array;
    
};
console.log(removeFromArray([1,2,3,4], 2, 3));


// Do not edit below this line
module.exports = removeFromArray;
