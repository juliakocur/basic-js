const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  let arr1 = []
  for (let i=0; i<arr.length; i++) {
  arr1.push(arr[i])
  if (arr1[i] === '--double-next'){arr1.push(arr[i] = arr[i+1])}
  if (arr1[i] === '--double-prev'){ arr1.push(arr[i] = arr[i-1])}
  if (arr1[i] === '--discard-prev'){arr1.splice(i-1,1)}
  if (arr1[i] === '--discard-next'){(i += 1)}
  }
  return arr1
}

module.exports = {
  transform
};
