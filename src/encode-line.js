const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const res = [];

  let counter = 1;
  
  for(let i=0; i<str.length+1; i++) {
  
  if (str[i] !== str[i+1]) {
  res.push(counter,str[i]);
  counter = 0
  }
  ++counter
  }
  return res.toString().replace(/[1,]/g,'')
}

module.exports = {
  encodeLine
};
