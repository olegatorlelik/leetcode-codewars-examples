/**
 * @param {number[]} nums
 * @return {number}
 * My solution
 */
const removeDuplicates = (nums) => {
  const result = [];

  for (const num of nums) {
    if (result.includes(num)) {
      continue;
    }

    result.push(num);
  }

  const k = result.length;

  nums.splice(0, k, ...result);

  return k;
};

/**
 * @param {number[]} nums
 * @return {number}
 * Best practice
 */
const removeDuplicatesBestPractice = (nums) => {
  let m = new Map();
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (!m.has(nums[j])) {
      m.set(nums[j], true);
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
};


console.log(removeDuplicates([1, 1, 2]));
