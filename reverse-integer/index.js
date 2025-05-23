function is64BitInteger(num) {
  if (num < -2147483648 || num > 2147483647) {
    return 0;
  }

  return num;
}

/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  const hasMinus = x < 0;

  const str = hasMinus ? String(x).replace('-', '') : String(x);
  const result = str.split('').reverse();

  return is64BitInteger(Number((hasMinus ? '-' : '') + result.join('')));
};
