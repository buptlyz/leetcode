/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  let i = 0, res = true;
  while(i < bits.length) {
      if (bits[i] === 1) {
          res = false;
          i += 2;
      } else {
          res = true;
          i++;
      }
  }
  return res;
};

module.exports = isOneBitCharacter;
