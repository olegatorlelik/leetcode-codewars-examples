/**
 * @param {number[]} digits
 * @return {number[]}
 * My solution
 */
const foo = (digits) => {
  const lastIndex = digits.length - 1;

  if (digits[lastIndex] !== 9) {
    digits[lastIndex] = digits[lastIndex] + 1;

    return digits;
  }

  let index = digits.length - 1;

  while (index >= 0) { // O(n)
    if (digits[index] + 1 !== 10) {
      digits[index] = digits[index] + 1;

      return digits;
    }

    if (index === 0) {
      digits[0] = 0;
      digits.unshift(1); // O(n)

      return digits;
    }

    digits[index] = 0;
    index = index - 1;
  }

  return digits;
};

/**
 * @param {number[]} digits
 * @return {number[]}
 * Example from leetcode
 */
const boo = (digits) => {
  const res = [];

  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + 1;

    if (sum === 10) {
      res.unshift(0);
    } else {
      res.unshift(sum)
      res.splice(0, 0, ...digits.slice(0, i))

      return res
    }

    if(sum === 10 && i === 0) {
      res.unshift(1)
    }
  }

  return res;
};

console.log({ res: boo([9]) });
