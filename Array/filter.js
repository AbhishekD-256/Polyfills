
/**
 * filter()
 * Creates a new array with elements that pass the test implemented by the provided callback function
 * 
 * @param {Function} callbackFn Function to execute for each element in the array
 * @returns {Array} A new array with the elements that pass the test
 * 
 * @callback callbackFn
 * @param {*} element Current element being processed in the array
 * @param {number} index Index of the current element being processed
 * @param {Array} array The array on which filter was called
 * 
 * @example
 * const numbers = [1, 2, 3, 4, 5, 6];
 * const evenNumbers = numbers.myFilter(num => num % 2 === 0);
 * // evenNumbers is [2, 4, 6]
 */


Array.prototype.myFilter = function(callbackFn) {
    const newArr  = [];
    for(let i=0; i<this.length; i++) {
        if(callbackFn(this[i], i, this)) {
            newArr.push(this[i])
        }
    }
    return newArr;
}
