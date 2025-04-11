/**
 * @param {number} num
 * @return {number}
 */
const foo = (num) => {
  let result = 0;
  let currentState = num;

  while (currentState !== 0) {
    if (currentState % 2 === 0) {
      currentState = currentState / 2;
    } else {
      currentState = currentState - 1;
    }

    result = result + 1;
  }

  return result;
};
