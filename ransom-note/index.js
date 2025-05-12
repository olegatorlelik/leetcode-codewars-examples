/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const foo = (ransomNote, magazine) => {
  let step = 0;
  let copyOfMagazine = magazine;
  let result = false;

  while (step < ransomNote.length) {
    const currentLetter = ransomNote[step];

    if (copyOfMagazine.includes(currentLetter)) {
      step = step + 1;
      copyOfMagazine = copyOfMagazine.replace(currentLetter, '');
      result = true;

      continue;
    }

    result = false;
    step = ransomNote.length + 1;
  }

  return result;
};

console.log({ res: foo('aab', 'baa') });
