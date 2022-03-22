const removeFromArray = function(array, ...toRemove) {
    toRemove = toRemove.toString();
    for (i = 0; i < array.length; i++) {
        array = [1,2,3,4];
        let slicedArray;
/*         if (array[i] === toRemove) {
            slicedArray = array.splice(i, 1);
        } */
        for (j = 0; j < toRemove.length; j++); {
            if (array[i] === toRemove[j]) {
                slicedArray = array.splice(i, 1);
            }
        }

    }
    return array;
    
};

// Do not edit below this line
module.exports = removeFromArray;
