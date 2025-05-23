/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  const obj = {};

  for (let char of s) {
    if (typeof obj[char] === 'undefined') {
      obj[char] = 1;
    } else {
      obj[char] = obj[char] + 1;
    }
  }

  for (let j = 0; j < s.length; j++) {
    if (obj[s[j]] === 1) {
      return j;
    }
  }

  return -1;
};

firstUniqChar('loveleetcode');
