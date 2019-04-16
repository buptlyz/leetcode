/**
 * @param {String} S
 * @param {String} T
 */
export default function longestSubstrings(S, T) {
  if (S === "" || T === "") {
    return [];
  }
  const lenS = S.length,
    lenT = T.length;
  if (lenS === 1) {
    if (~T.indexOf(S)) {
      return [S];
    } else {
      return [];
    }
  }
  if (lenT === 1) {
    if (~S.indexOf(T)) {
      return [T];
    } else {
      return [];
    }
  }
  let L = new Array(lenS),
    z = 0,
    ret = [];
  for (let i = 0; i < lenS; i++) {
    L[i] = new Array(lenT);
  }

  for (let i = 0; i < lenS; i++) {
    for (let j = 0; j < lenT; j++) {
      if (S[i] === T[j]) {
        if (i === 0 || j === 0) {
          L[i][j] = 1;
        } else {
          L[i][j] = L[i-1][j-1] + 1;
        }
        if (L[i][j] > z) {
          z = L[i][j];
          ret = [S.substring(i-z+1, i+1)];
        } else if (L[i][j] === z) {
          ret.push(S.substring(i-z+1, i+1));
        }
      } else {
        L[i][j] = 0;
      }
    }
  }

  return ret;
}

module.exports = longestSubstrings;
