/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const checker = new Map();

  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];

    if (checker.has(item)) {
      return true;
    }

    checker.set(item, true);
  }

  return false;
};
