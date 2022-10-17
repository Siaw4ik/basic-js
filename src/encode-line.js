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
  let newStr = '';
  let cur = 1;

  for(let i = 0; i < str.length; i++){
    if(str[i] === str[i + 1]){
      cur++;
    } else {
      newStr += cur + str[i]
      cur = 1;
    }
  }
  newStr = newStr.replace(/1/g, '');
  return newStr;
}

module.exports = {
  encodeLine
};
