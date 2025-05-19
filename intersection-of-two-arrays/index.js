/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersectionOfTwoArrays = (nums1, nums2) => {
  const result = [];
  const collection = {};

  for (let i = 0; i < nums1.length; i++) {
    const currentNum = nums1[i];

    collection[currentNum] = (collection[currentNum] ?? 0) + 1;
  }

  for (let i = 0; i < nums2.length; i++) {
    const value = nums2[i];

    if(typeof value === 'undefined') {
      continue;
    }

    if (collection[value] > 0) {
      result.push(value);
      collection[value] = collection[value] - 1;
    }
  }

  return result;
};


console.log({ res: intersectionOfTwoArrays([1, 2, 2, 1], [2, 2]) });
console.log({ res: intersectionOfTwoArrays([4, 9, 5], [9, 4, 9, 8, 4]) });
