/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let str = x.toString(), operator, res= '';
  if (str[0] === '+' || str[0] === '-') {
    operator = str[0];
    str = str.substring(1);
  }
  for (let c of str) {
    res = c + res;
  }
  if (operator) {
    res = operator + res;
  }
  try {
    res = parseInt(res);
  } catch (e) {
    res = 0;
  }
  const MAX = 2**31 - 1, MIN = -(2**31);
  if (res < MIN || res > MAX) {
    res = 0;
  }
  return res;
};
module.exports = reverse;
