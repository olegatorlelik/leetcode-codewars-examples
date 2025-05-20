/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const foo = (ransomNote, magazine) => {
  let step = 0;
  let result = false;

  while (step < ransomNote.length) {
    const currentLetter = ransomNote[step];

    if (magazine.includes(currentLetter)) {
      step = step + 1;
      magazine.replace(currentLetter, '');
      result = true;

      continue;
    }

    result = false;
    step = ransomNote.length + 1;
  }

  return result;
};

/**
 * Time Complexity: O(n*m)
 * - Where n is the length of ransomNote and m is the length of magazine
 * - For each character in ransomNote (O(n)), we call magazine.includes() which is O(m)
 * - Yes, m can be equal to n, in which case the time complexity would be O(n²)
 * - In the worst case scenario, when m ≈ n, the time complexity is effectively O(n²)
 *
 * Space Complexity: O(1)
 * - The function uses a constant amount of extra space regardless of input size
 */

console.log({ res: foo('aab', 'baa') });
