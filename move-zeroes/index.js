/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      const current = nums[j];
      const next = nums[j + 1];

      if (typeof next === 'undefined') {
        break;
      }

      if (current === 0 && next !== 0) {
        nums[j] = next;
        nums[j + 1] = 0;
      }
    }
  }
};

/**
 * best practice
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroesBestPractice = (nums) => {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[j];

      nums[j] = nums[i];
      nums[i] = temp;
      j++;
    }
  }
};

moveZeroesBestPractice([0, 0, 0, 3, 12]);
