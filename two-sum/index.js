/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const x = target - nums[i];

    if (typeof obj[x] === 'undefined') {
      obj[nums[i]] = i;

      continue;
    }

    return [obj[x], i];
  }
};

console.log({ res: twoSum([2, 7, 11, 15], 9) });
