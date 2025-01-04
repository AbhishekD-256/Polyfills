/**
 * forEach() method executes a provided function once for each array element.
 * The method modifies the array in place and returns undefined.
 * 
 * @param {Function} callbackFn Function to execute on each element
 * @param {*} [thisArg] Value to use as 'this' when executing callback
 * @throws {TypeError} If callbackFn is not a function
 * 
 * @callback callbackFn
 * @param {*} element The current element being processed in the array
 * @param {number} index The index of the current element being processed
 * @param {Array} array The array forEach() was called upon
 * 
 * @returns {undefined}
 */

Array.prototype.myForEach = function(callbackFn) {
    for(let i=0; i<this.length; i++) {
        callbackFn(this[i], i, this);
    }
}