/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
  const n = matrix.length;
  const layers = Math.floor(n / 2);

  for (let first = 0; first < layers; first++) {
    const last = n - 1 - first

    for (let i = first; i < last; i++) {
      const offset = i - first;

      const temp = matrix[first][i]

      matrix[first][i] = matrix[last - offset][first];
      matrix[last - offset][first] = matrix[last][last - offset];
      matrix[last][last - offset] = matrix[i][last];
      matrix[i][last] = temp
    }
  }
};

rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
