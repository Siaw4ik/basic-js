const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  
  domains.forEach((domain) => {
    let arrDomain = domain.split('.').reverse();

    let key = '';

    arrDomain.forEach(dom => {
      key = key + '.' + dom;
      obj[key] = obj[key] ? obj[key] + 1 : 1
    })
  })
  return obj
}

module.exports = {
  getDNSStats
};
