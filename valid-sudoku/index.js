const invalidTest =
  [['8', '3', '.', '.', '7', '.', '.', '.', '.']
    , ['6', '.', '.', '1', '9', '5', '.', '.', '.']
    , ['.', '9', '8', '.', '.', '.', '.', '6', '.']
    , ['8', '.', '.', '.', '6', '.', '.', '.', '3']
    , ['4', '.', '.', '8', '.', '3', '.', '.', '1']
    , ['7', '.', '.', '.', '2', '.', '.', '.', '6']
    , ['.', '6', '.', '.', '.', '.', '2', '8', '.']
    , ['.', '.', '.', '4', '1', '9', '.', '.', '5']
    , ['.', '.', '.', '.', '8', '.', '.', '7', '9']];

const validTest = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.']
  , ['6', '.', '.', '1', '9', '5', '.', '.', '.']
  , ['.', '9', '8', '.', '.', '.', '.', '6', '.']
  , ['8', '.', '.', '.', '6', '.', '.', '.', '3']
  , ['4', '.', '.', '8', '.', '3', '.', '.', '1']
  , ['7', '.', '.', '.', '2', '.', '.', '.', '6']
  , ['.', '6', '.', '.', '.', '.', '2', '8', '.']
  , ['.', '.', '.', '4', '1', '9', '.', '.', '5']
  , ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const validSudoku = (board) => {
  const rows = new Set();
  const cols = new Set();
  const subBoxes = {};

  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    rows.clear();
    cols.clear();


    for (let j = 0; j < row.length; j++) {
      const rowItem = board[i][j];
      const colItem = board[j][i];
      const subBoxKey = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      const currentSubBox = subBoxes[subBoxKey];
      const isExistSubBox = typeof currentSubBox !== 'undefined';

      if (!isExistSubBox) {
        subBoxes[subBoxKey] = new Set();

        if (colItem !== '.') {
          subBoxes[subBoxKey].add(colItem);
        }
      } else {
        if (currentSubBox.has(colItem)) {
          return false;
        }

        if (colItem !== '.') {
          currentSubBox.add(colItem);
        }
      }

      if (rows.has(rowItem) || cols.has(colItem)) {
        return false;
      }

      if (rowItem !== '.') {
        rows.add(rowItem);
      }

      if (colItem !== '.') {
        cols.add(colItem);
      }
    }
  }

  return true;
};

/**
 * Best practice
 */
const validSudokuBestPractice = (board) => {
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const subBoxes = Array.from({ length: 9 }, () => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const value = board[i][j];
      if (value === '.') continue;

      const subBoxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (rows[i].has(value) || cols[j].has(value) || subBoxes[subBoxIndex].has(value)) {
        return false;
      }

      rows[i].add(value);
      cols[j].add(value);
      subBoxes[subBoxIndex].add(value);
    }
  }

  return true;
};


console.log({ value: validSudoku(invalidTest) });
console.log({ value: validSudoku(validTest) });

