const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  let count = 0;
  str2 = str2.split('')

  for (let l in str1) {
    if (str2.includes(str1[l])) {
      count++;
      str2.splice(str2.indexOf(str1[l]),1)
      console.log(str2)
    }
  }
  return count

}

module.exports = {
  getCommonCharacterCount
};
