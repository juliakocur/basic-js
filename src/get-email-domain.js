const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arr = email.split('')
  let newArr = []
  for(let i=0;i<email.length;i++) {
  if (arr[i] == '@' && arr[i+1] != '.'){
  newArr.push(arr.slice(i+1))}
  }
  return newArr.join().replace(/,/g, '')
}

module.exports = {
  getEmailDomain
};
