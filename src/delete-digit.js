const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/* n */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
/*function deleteDigit(n) {


  let arr = Number(n);
  let res =arr
 let s = [...''+res].map(Number)

 let minIndex = s.indexOf(Math.min(...s));
 console.log(minIndex);
 s.splice(minIndex, 1);
 return +(s.join('').toString());

}*/

module.exports = {
  deleteDigit
};
