/**
 * Creates a new array populated with the results of calling a provided function on every element in the calling array.
 *
 * @param {Function} callbackFn - Function that is called for every element of the array. Each time callbackFn executes, the returned value is added to the new array.
 * @param {*} [thisArg] - Value to use as this when executing callbackFn.
 * @returns {Array} A new array with each element being the result of the callback function.
 * 
 * @callback callbackFn
 * @param {*} element - The current element being processed in the array.
 * @param {number} [index] - The index of the current element being processed in the array.
 * @param {Array} [array] - The array map() was called upon.
 * @returns {*} The value to be added to the new array.
 */


Array.prototype.myMap = function(callbackFn){
    const newArry = [];
    for(let i =0; i < this.length; i++) {
        newArry.push(callbackFn(this[i], i, this))
    }
    return newArry;
}

