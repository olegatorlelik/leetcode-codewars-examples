/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  let res = 0;

  for (const num of nums) {
    res = res ^ num;
  }

  return res;
};
