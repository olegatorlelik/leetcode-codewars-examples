/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotateArray = (nums, k) => {
  if (k <= 0) return;

  let restSteps = k;

  while (restSteps > 0) {
    const lastElement = nums.pop();
    nums.unshift(lastElement);
    restSteps--;
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotateArrayBestPractice = (nums, k) => {
  {
    const n = nums.length;
    k = k % n; // in case k > n

    const reverse = (start, end) => {
      while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
      }
    };

    reverse(0, n - 1);       // Reverse entire array
    reverse(0, k - 1);       // Reverse first k elements
    reverse(k, n - 1);       // Reverse remaining elements
  }
};

rotateArray([1, 2], 3);

